import React from 'react';
import { FaBuilding, FaCarSide, FaNewspaper } from 'react-icons/fa';

const contactCards = [
	{
		icon: <FaBuilding />,
		title: 'BMW Headquarters',
		subtitle: 'Petuelring 130, 80788 Munich, Germany',
	},
	{
		icon: <FaCarSide />,
		title: 'Sales Concierge',
		subtitle: '+49 89 382 0 · Mon–Sat 8:00–20:00',
	},
	{
		icon: <FaNewspaper />,
		title: 'Email',
		subtitle: 'experience@bmw.com',
	},
];

const conciergeChips = ['Test drives', 'Exclusive launches', 'Tailored finance', 'BMW Genius support'];

export default function ContactForm() {
	return (
		<section className="relative py-24 bg-[#030409] text-white overflow-hidden rounded-[40px]">
			<div className="absolute inset-0 bg-gradient-to-br from-black via-[#050817] to-black"></div>
			<div className="absolute -top-16 left-10 w-72 h-72 bg-cyan-500/30 blur-[180px] rounded-full"></div>
			<div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-500/20 blur-[220px] rounded-full"></div>

			<div className="relative z-10 max-w-6xl mx-auto px-6">
				<div className="text-center mb-12 space-y-3">
					<p className="text-xs tracking-[0.5em] uppercase text-gray-400">BMW concierge</p>
					<h2 className="text-4xl md:text-5xl font-black">Talk to a human who drives BMWs.</h2>
					<p className="text-base text-gray-300">Bookings, bespoke builds, or tech deep dives—our teams respond within 2 business hours.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
					<div className="space-y-8">
						<div className="grid gap-5">
							{contactCards.map((card) => (
								<div key={card.title} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
									<div className="text-3xl text-[#46a6ff]">{card.icon}</div>
									<div>
										<p className="text-lg font-semibold text-white">{card.title}</p>
										<p className="text-sm text-gray-300">{card.subtitle}</p>
									</div>
								</div>
							))}
						</div>
						<div className="space-y-3">
							<p className="text-xs uppercase tracking-[0.4em] text-gray-400">Concierge focus</p>
							<div className="flex flex-wrap gap-3">
								{conciergeChips.map((chip) => (
									<span key={chip} className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs tracking-[0.2em] text-gray-200">
										{chip}
									</span>
								))}
							</div>
						</div>
						<button className="hero-primary-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#1c69d4]/30 max-w-xs">
							Schedule a call →
						</button>
					</div>

					<div className="rounded-[32px] border border-white/10 bg-black/60 backdrop-blur-2xl p-10 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-semibold text-gray-300 mb-2">First Name</label>
									<input type="text" placeholder="John" className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-[#1c69d4] focus:ring-2 focus:ring-[#1c69d4]/40" />
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-300 mb-2">Last Name</label>
									<input type="text" placeholder="Doe" className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-[#1c69d4] focus:ring-2 focus:ring-[#1c69d4]/40" />
								</div>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
								<input type="email" placeholder="john.doe@example.com" className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-[#1c69d4] focus:ring-2 focus:ring-[#1c69d4]/40" />
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-300 mb-2">Phone</label>
								<input type="tel" placeholder="+49 711 911 0" className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-[#1c69d4] focus:ring-2 focus:ring-[#1c69d4]/40" />
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
								<select className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-[#1c69d4] focus:ring-2 focus:ring-[#1c69d4]/40">
									<option value="">Select a subject</option>
									<option value="sales">Sales Inquiry</option>
									<option value="service">Service Appointment</option>
									<option value="test-drive">Test Drive</option>
									<option value="parts">Parts & Accessories</option>
									<option value="general">General Information</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
								<textarea rows="4" placeholder="Tell us how we can help you..." className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-[#1c69d4] focus:ring-2 focus:ring-[#1c69d4]/40"></textarea>
							</div>

							<button type="submit" className="news-primary-btn w-full px-6 py-4 rounded-full font-semibold tracking-wide shadow-lg shadow-[#1c69d4]/30 focus:outline-none focus:ring-2 focus:ring-[#1c69d4]/50">
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
