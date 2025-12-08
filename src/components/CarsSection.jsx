import React, { useMemo, useState } from 'react';
import './CarsSection.css';

const USD_TO_ZAR = 18.5;
const formatRand = (value) => `R${Math.round(value).toLocaleString('en-ZA')}`;
const convertPresetToZar = (preset) => ({
	...preset,
	price: Math.round(preset.price * USD_TO_ZAR),
	downPayment: Math.round(preset.downPayment * USD_TO_ZAR),
	tradeIn: Math.round(preset.tradeIn * USD_TO_ZAR)
});
const heroFilters = ['Pure electric', 'High-performance', 'Family SUV', 'Limited series'];
const heroVehicles = [
	{
		id: 'i7',
		filter: 'Pure electric',
		name: 'BMW i7 M70',
		tagline: 'Flagship electric gran sedan for overnight continent-crossing.',
		image: '/videos/BMW-i7.jpg',
		stats: [
			{ label: 'WLTP range', value: '625 km' },
			{ label: '0-100 km/h', value: '3.7 s' },
			{ label: 'Charging', value: '170 kW' }
		],
		price: 169900
	},
	{
		id: 'xm',
		filter: 'High-performance',
		name: 'BMW XM Label Red',
		tagline: 'Hybrid renegade fusing TwinPower V8 roar with electric torque shells.',
		image: '/videos/bmw xm.jpg',
		stats: [
			{ label: 'System output', value: '748 hp' },
			{ label: 'Torque', value: '1,000 Nm' },
			{ label: 'EV range', value: '83 km' }
		],
		price: 185000
	},
	{
		id: 'x7',
		filter: 'Family SUV',
		name: 'BMW X7 Excellence',
		tagline: 'Seven-seat sanctuary with Executive Lounge and adaptive air.',
		image: '/videos/BMWX7.jpg',
		stats: [
			{ label: '0-100 km/h', value: '4.9 s' },
			{ label: 'Range', value: '750 km' },
			{ label: 'Seating', value: '7 seats' }
		],
		price: 123400
	},
	{
		id: '8cs',
		filter: 'Limited series',
		name: 'BMW 8 Series Collector’s Spec',
		tagline: 'Hand-built allocation with BMW Individual paint, Frozen leather, and numbered plaques.',
		image: '/videos/8series.jpg',
		stats: [
			{ label: 'Production', value: '150 units' },
			{ label: '0-100 km/h', value: '3.5 s' },
			{ label: 'Finish', value: 'Frozen Marina Bay' }
		],
		price: 222000
	}
];

const quickMetrics = [
	{ label: 'Immediate delivery', value: '640 vehicles' },
	{ label: 'Average finance APR', value: '3.2 %' },
	{ label: 'Certified pre-owned', value: '1,180 vehicles' }
];

const dealers = [
	{
		name: 'BMW Welt · Munich',
		region: 'Europe',
		address: 'Am Olympiapark 1, Munich',
		phone: '+49 89 1250 160 01',
		stock: '48 vehicles in stock',
		services: ['EV-ready', 'BMW Individual', 'Motorsport']
	},
	{
		name: 'BMW of Manhattan',
		region: 'North America',
		address: '555 W 57th St, New York',
		phone: '+1 (212) 586-2269',
		stock: '35 vehicles in stock',
		services: ['BMW Genius', 'Trade-in lounge']
	},
	{
		name: 'BMW Studio Tokyo Bay',
		region: 'Asia',
		address: '2-2-43 Aomi, Koto City',
		phone: '+81 3-6457-0020',
		stock: '29 vehicles in stock',
		services: ['EV fast charge', 'Track previews']
	}
];

const timeline = [
	{ title: 'Build tonight', detail: 'Submit your spec to BMW Genius · 2h review.' },
	{ title: 'Reserve in 24h', detail: 'Transparent pricing + trade-in valuation.' },
	{ title: 'Drive in 72h', detail: 'White-glove handover at your retailer.' }
];

const financePresets = [
	{ label: 'Lease 36m', price: 89000, downPayment: 12000, apr: 2.9, term: 36, tradeIn: 8000 },
	{ label: 'Finance 48m', price: 101000, downPayment: 18000, apr: 3.6, term: 48, tradeIn: 12000 },
	{ label: 'Balloon 60m', price: 115000, downPayment: 25000, apr: 4.2, term: 60, tradeIn: 15000 }
];

const calcPayment = ({ price, downPayment, apr, term, tradeIn }) => {
	const principal = Math.max(price - downPayment - tradeIn, 0);
	const rate = apr / 100 / 12;
	if (!rate) return principal / Math.max(term, 1);
	const factor = Math.pow(1 + rate, term);
	return (principal * rate * factor) / (factor - 1);
};

export default function CarsSection() {
	const [activeFilter, setActiveFilter] = useState(heroFilters[0]);
	const [activeVehicle, setActiveVehicle] = useState(heroVehicles[0]);
	const [activeDealer, setActiveDealer] = useState(0);
	const [financeInput, setFinanceInput] = useState(convertPresetToZar(financePresets[1]));
	const MAX_TRADE_IN_ZAR = Math.round(50000 * USD_TO_ZAR);

	const visibleVehicles = heroVehicles.filter((car) => car.filter === activeFilter);
	const monthlyPayment = useMemo(() => Math.max(calcPayment(financeInput), 0), [financeInput]);
	const dueToday = useMemo(
		() => Math.max(financeInput.downPayment + financeInput.tradeIn * 0.1, 0),
		[financeInput]
	);

	return (
		<section className="cars-shell" id="models">
			<div className="cars-halo cars-halo--left" />
			<div className="cars-halo cars-halo--right" />

			<div className="cars-wrapper">
				<div className="cars-hero">
					<div className="cars-hero-copy">
						<p className="cars-tag">
							<span className="cars-dot" />
							BMW selector
						</p>
						<h2>
							Find your dream BMW today.
							<span>Built around your drive.</span>
						</h2>
						<p>Filter by powertrain or lifestyle, preview live inventory, and escalate to a BMW Genius within minutes.</p>

						<div className="cars-filter-row">
							{heroFilters.map((filter) => (
								<button
									key={filter}
									className={filter === activeFilter ? 'active' : ''}
									onClick={() => {
										setActiveFilter(filter);
										const next = heroVehicles.find((car) => car.filter === filter);
										if (next) setActiveVehicle(next);
									}}
								>
									{filter}
								</button>
							))}
						</div>

						<p className="cars-filter-description">{activeVehicle.tagline}</p>

						<div className="cars-cta-row">
							<button className="cars-primary-btn">Find your new BMW ↗</button>
							<button className="cars-secondary-btn">Find your pre-owned BMW</button>
						</div>

						<div className="cars-quick-stats">
							{quickMetrics.map(({ label, value }) => (
								<div key={label}>
									<p className="value">{value}</p>
									<p className="label">{label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="cars-hero-spotlight">
						<div className="cars-hero-image">
							<img src={activeVehicle.image} alt={activeVehicle.name} />
						</div>
						<div className="cars-hero-overlay">
							<div>
								<p className="car-name">{activeVehicle.name}</p>
								<p className="car-price">{formatRand(activeVehicle.price * USD_TO_ZAR)}</p>
							</div>
							<div className="cars-hero-stats">
								{activeVehicle.stats.map((stat) => (
									<div key={stat.label}>
										<p>{stat.value}</p>
										<span>{stat.label}</span>
									</div>
								))}
							</div>
							<div className="cars-hero-thumbs">
								{visibleVehicles.map((car) => (
									<button
										key={car.id}
										className={car.id === activeVehicle.id ? 'active' : ''}
										onClick={() => setActiveVehicle(car)}
									>
										{car.name}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="cars-duo-grid">
					<div className="cars-locator-card">
						<div className="card-head">
							<p className="tag">Dealer locator</p>
							<p>Tap a studio to preview EV-ready inventory and book a concierge.</p>
						</div>
						<ul className="dealer-list">
							{dealers.map((dealer, idx) => (
								<li key={dealer.name} className={idx === activeDealer ? 'active' : ''} onClick={() => setActiveDealer(idx)}>
									<div>
										<p className="name">{dealer.name}</p>
										<p className="region">{dealer.region}</p>
									</div>
									<p className="stock">{dealer.stock}</p>
								</li>
							))}
						</ul>
						<div className="dealer-detail">
							<p className="dealer-name">{dealers[activeDealer].name}</p>
							<p className="dealer-meta">{dealers[activeDealer].address}</p>
							<p className="dealer-meta">{dealers[activeDealer].phone}</p>
							<div className="dealer-services">
								{dealers[activeDealer].services.map((service) => (
									<span key={service}>{service}</span>
								))}
							</div>
							<button type="button">Schedule visit ↗</button>
						</div>
					</div>

					<div className="cars-finance-card">
						<div className="card-head">
							<p className="tag">Financing sandbox</p>
							<div className="preset-row">
								{financePresets.map((preset) => (
									<button key={preset.label} onClick={() => setFinanceInput(convertPresetToZar(preset))}>
										{preset.label}
									</button>
								))}
							</div>
						</div>

						<div className="finance-grid">
							<label>
								<span>Vehicle price</span>
								<input
									type="number"
									value={financeInput.price}
									onChange={(e) => setFinanceInput({ ...financeInput, price: Number(e.target.value) || 0 })}
								/>
							</label>
							<label>
								<span>Down payment</span>
								<input
									type="number"
									value={financeInput.downPayment}
									onChange={(e) => setFinanceInput({ ...financeInput, downPayment: Number(e.target.value) || 0 })}
								/>
							</label>
							<label>
								<span>APR (%)</span>
								<input
									type="number"
									step="0.1"
									value={financeInput.apr}
									onChange={(e) => setFinanceInput({ ...financeInput, apr: Number(e.target.value) || 0 })}
								/>
							</label>
							<label>
								<span>Term (months)</span>
								<input
									type="number"
									value={financeInput.term}
									onChange={(e) => setFinanceInput({ ...financeInput, term: Number(e.target.value) || 1 })}
								/>
							</label>
							<label className="range">
								<span>Trade-in value</span>
								<input
									type="range"
									min="0"
									max={MAX_TRADE_IN_ZAR}
									step="1000"
									value={financeInput.tradeIn}
									onChange={(e) => setFinanceInput({ ...financeInput, tradeIn: Number(e.target.value) })}
								/>
								<p>{formatRand(financeInput.tradeIn)}</p>
							</label>
						</div>

						<div className="finance-summary">
							<p className="headline">Estimated monthly</p>
							<p className="payment">{formatRand(monthlyPayment)}</p>
							<div className="summary-cards">
								<div>
									<p>Due today</p>
									<span>{formatRand(dueToday)}</span>
								</div>
								<div>
									<p>APR</p>
									<span>{financeInput.apr.toFixed(1)}%</span>
								</div>
								<div>
									<p>Term</p>
									<span>{financeInput.term} mo</span>
								</div>
							</div>
							<button type="button" onClick={() => window.location.assign('#contact')}>
								Send build to concierge ↗
							</button>
						</div>
					</div>
				</div>

				<div className="cars-timeline">
					{timeline.map((item, idx) => (
						<div key={item.title}>
							<p className="index">0{idx + 1}</p>
							<p className="title">{item.title}</p>
							<p className="detail">{item.detail}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
