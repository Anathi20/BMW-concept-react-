import React, { useEffect, useRef, useState } from 'react';
import './CinematicSection.css';

const cinematicClips = [
	{
		title: 'BMW m5 Competition',
		subtitle: 'Velocity in stealth mode',
		description: 'Launch control, laser shifters, and a cockpit that lights up like a command center. This is autobahn poetry.',
		video: '/videos/m5core.mp4',
		poster: '/videos/m5comp.jpg',
		stats: [
			{ label: '0-100 km/h', value: '3.3 s' },
			{ label: 'Launch g-force', value: '1.09 g' },
			{ label: 'Power', value: '720 hp' },
			{ label: 'Drive logic', value: 'xDrive M' }
		],
		signatureStat: {
			value: '305 km/h',
			label: 'V-MAX unlocked',
			meta: 'M Driver’s Package engaged'
		},
		highlights: ['Adaptive M suspension', 'Carbon ceramic brakes', 'Laserlight matrix']
	},
	{
		title: 'BMW XM Label Red',
		subtitle: 'Hybrid renegade',
		description: 'TwinPower V8 meets electric thrust with adaptive torque shells that carve new racing lines.',
		video: '/videos/BMWXX7.mp4',
		poster: '/videos/BMWX7.jpg',
		stats: [
			{ label: '0-100 km/h', value: '3.8 s' },
			{ label: 'System output', value: '748 hp' },
			{ label: 'Torque', value: '1,000 Nm' },
			{ label: 'EV range', value: '83 km' }
		],
		signatureStat: {
			value: '83 km',
			label: 'Silent mission range',
			meta: 'Pure-electric mode at city speeds'
		},
		highlights: ['Torque shells', 'Electro-boost launch', 'Illuminated kidney grille']
	}
];

const parseValue = (value) => {
	const match = value.match(/[\d.,]+/);
	if (!match) {
		return { number: 0, decimals: 0, prefix: value, suffix: '' };
	}
	const numericPart = match[0];
	const decimals = numericPart.includes('.') ? numericPart.split('.')[1].length : 0;
	return {
		number: parseFloat(numericPart.replace(/,/g, '')) || 0,
		decimals,
		prefix: value.slice(0, match.index),
		suffix: value.slice(match.index + numericPart.length)
	};
};

const animateValue = (parts, setter, duration = 1200) => {
	const formatter = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: parts.decimals,
		maximumFractionDigits: parts.decimals
	});
	let rafId;
	const start = performance.now();

	const step = (now) => {
		const progress = Math.min((now - start) / duration, 1);
		const current = parts.number * progress;
		setter(`${parts.prefix}${formatter.format(current)}${parts.suffix}`);
		if (progress < 1) {
			rafId = requestAnimationFrame(step);
		}
	};

	rafId = requestAnimationFrame(step);
	return () => cancelAnimationFrame(rafId);
};

export default function CinematicSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isMuted, setIsMuted] = useState(true);
	const [signatureDisplay, setSignatureDisplay] = useState(() => {
		const parts = parseValue(cinematicClips[0].signatureStat.value);
		return `${parts.prefix}0${parts.suffix}`;
	});
	const [statsDisplay, setStatsDisplay] = useState(() =>
		cinematicClips[0].stats.map((stat) => {
			const parts = parseValue(stat.value);
			return `${parts.prefix}0${parts.suffix}`;
		})
	);
	const sectionRef = useRef(null);
	const videoRef = useRef(null);
	const [inView, setInView] = useState(false);
	const activeClip = cinematicClips[activeIndex];
	const totalClips = cinematicClips.length;

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.unobserve(node);
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!videoRef.current) return;
		videoRef.current.pause();
		videoRef.current.load();
		videoRef.current.muted = isMuted;
		videoRef.current.play().catch(() => {});
	}, [activeIndex, isMuted]);

	useEffect(() => {
		const sigParts = parseValue(activeClip.signatureStat.value);
		setSignatureDisplay(`${sigParts.prefix}0${sigParts.suffix}`);
		setStatsDisplay(
			activeClip.stats.map((stat) => {
				const parts = parseValue(stat.value);
				return `${parts.prefix}0${parts.suffix}`;
			})
		);

		if (!inView) return;
		const cleanups = [];
		cleanups.push(animateValue(sigParts, setSignatureDisplay));

		activeClip.stats.forEach((stat, idx) => {
			const parts = parseValue(stat.value);
			cleanups.push(
				animateValue(parts, (text) => {
					setStatsDisplay((prev) => {
						const next = [...prev];
						next[idx] = text;
						return next;
					});
				})
			);
		});

		return () => cleanups.forEach((cleanup) => cleanup && cleanup());
	}, [activeClip, inView]);

	const goNext = () => setActiveIndex((prev) => (prev + 1) % totalClips);
	const goPrev = () => setActiveIndex((prev) => (prev - 1 + totalClips) % totalClips);
	const toggleMute = () => {
		setIsMuted((prev) => !prev);
		if (videoRef.current) videoRef.current.muted = !isMuted;
	};

	return (
		<section ref={sectionRef} className={`cinematic-section ${inView ? 'cinematic-visible' : ''}`}>
			<div className="cinematic-video-shell">
				<video
					ref={videoRef}
					key={activeClip.video}
					autoPlay
					loop
					muted={isMuted}
					playsInline
					preload="auto"
					poster={activeClip.poster}
				>
					<source src={activeClip.video} type="video/mp4" />
				</video>
				<div className="cinematic-gradient"></div>

				<div className="cinematic-ticker" aria-hidden="true">
					<div className="cinematic-ticker-track">
						{activeClip.stats.concat(activeClip.stats).map(({ label, value }, idx) => (
							<span key={`${label}-${value}-${idx}`}>
								<strong>{value}</strong>
								{label}
							</span>
						))}
					</div>
				</div>

				<div className="cinematic-overlay">
					<div className="cinematic-toolbar">
						<button type="button" className="cinematic-audio-toggle" onClick={toggleMute}>
							{isMuted ? 'Enable audio' : 'Mute audio'}
						</button>
						<span className="cinematic-clip-count">
							Clip {String(activeIndex + 1).padStart(2, '0')} / {String(totalClips).padStart(2, '0')}
						</span>
					</div>

					<div className="cinematic-layout">
						<div className="cinematic-column cinematic-column--hero">
							<p className="cinematic-kicker">BMW // Cinematic Labs</p>
							<div className="cinematic-signature">
								<span className="value">{signatureDisplay}</span>
								<span className="label">{activeClip.signatureStat.label}</span>
								<p className="meta">{activeClip.signatureStat.meta}</p>
							</div>
							<div className="cinematic-chips">
								{activeClip.highlights.map((chip) => (
									<span key={chip}>{chip}</span>
								))}
							</div>
						</div>

						<div className="cinematic-column cinematic-column--details">
							<h3>
								{activeClip.title}
								<span>{activeClip.subtitle}</span>
							</h3>
							<p className="cinematic-description">{activeClip.description}</p>
							<button type="button" className="cinematic-cta">
								Book a cinematic drive ↗
							</button>
							<ul className="cinematic-meta-grid">
								{activeClip.stats.map(({ label }, idx) => (
									<li key={label}>
										<p className="value">{statsDisplay[idx] || activeClip.stats[idx].value}</p>
										<p className="label">{label}</p>
									</li>
								))}
							</ul>
							<div className="cinematic-controls">
								<button type="button" onClick={goPrev} aria-label="Previous clip">
									←
								</button>
								<div className="cinematic-dots">
									{cinematicClips.map((_, idx) => (
										<span key={idx} className={idx === activeIndex ? 'active' : ''} />
									))}
								</div>
								<button type="button" onClick={goNext} aria-label="Next clip">
									→
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
