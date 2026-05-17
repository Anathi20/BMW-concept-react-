import React, { useEffect, useRef, useState } from 'react';
import './CinematicSection.css';

const cinematicClips = [
	{
		title: 'BMW M5 Competition',
		subtitle: 'Raw Power Refined',
		description: 'Experience the perfect balance of luxury and performance with 720 hp of pure adrenaline.',
		video: '/videos/m5core.mp4',
		poster: '/videos/m5comp.jpg',
		stats: [
			{ label: '0-100 km/h', value: '3.3' },
			{ label: 'Power', value: '720' },
			{ label: 'Top Speed', value: '305' }
		]
	},
	{
		title: 'BMW XM Label Red',
		subtitle: 'Hybrid Powerhouse',
		description: 'The ultimate expression of M performance meets electrified efficiency in one bold package.',
		video: '/videos/BMWXX7.mp4',
		poster: '/videos/BMWX7.jpg',
		stats: [
			{ label: '0-100 km/h', value: '3.8' },
			{ label: 'Power', value: '748' },
			{ label: 'EV Range', value: '83' }
		]
	}
];

const animateNumber = (target, setter, duration = 1500) => {
	let rafId;
	const start = performance.now();
	const targetNum = parseFloat(target);

	const step = (now) => {
		const progress = Math.min((now - start) / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3);
		const current = targetNum * eased;
		setter(current.toFixed(1));
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
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [statsDisplay, setStatsDisplay] = useState(['0.0', '0.0', '0.0']);
	const sectionRef = useRef(null);
	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const [inView, setInView] = useState(false);
	const activeClip = cinematicClips[activeIndex];

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
		setStatsDisplay(['0.0', '0.0', '0.0']);

		if (!inView) return;
		const cleanups = [];

		activeClip.stats.forEach((stat, idx) => {
			cleanups.push(
				animateNumber(stat.value, (val) => {
					setStatsDisplay((prev) => {
						const next = [...prev];
						next[idx] = val;
						return next;
					});
				}, 1500 + idx * 200)
			);
		});

		return () => cleanups.forEach((cleanup) => cleanup && cleanup());
	}, [activeClip, inView]);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};
		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
	}, []);

	const goNext = () => setActiveIndex((prev) => (prev + 1) % cinematicClips.length);
	const goPrev = () => setActiveIndex((prev) => (prev - 1 + cinematicClips.length) % cinematicClips.length);
	const toggleMute = () => {
		setIsMuted((prev) => !prev);
		if (videoRef.current) videoRef.current.muted = !isMuted;
	};

	const toggleFullscreen = async () => {
		if (!containerRef.current) return;
		try {
			if (!document.fullscreenElement) {
				await containerRef.current.requestFullscreen();
			} else {
				await document.exitFullscreen();
			}
		} catch (err) {
			console.log('Fullscreen error:', err);
		}
	};

	return (
		<section ref={sectionRef} className={`cinematic-section ${inView ? 'visible' : ''}`} style={{ fontFamily: "'Orbitron', sans-serif" }}>
			<div ref={containerRef} className={`cinematic-container ${isFullscreen ? 'fullscreen' : ''}`}>
				<div className="cinematic-video-wrapper">
					<video
						ref={videoRef}
						key={activeClip.video}
						autoPlay
						loop
						muted={isMuted}
						playsInline
						preload="auto"
						poster={activeClip.poster}
						className="cinematic-video"
					>
						<source src={activeClip.video} type="video/mp4" />
					</video>
					<div className="cinematic-overlay-gradient"></div>
				</div>

				<div className="cinematic-top-bar">
					<div className="cinematic-badge">
						<span className="badge-dot"></span>
						<span>BMW PERFORMANCE</span>
					</div>
					<div className="cinematic-actions">
						<button className="cinematic-icon-btn" onClick={toggleMute} aria-label="Toggle sound">
							{isMuted ? (
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M11 5L6 9H2v6h4l5 4V5z"/>
									<line x1="23" y1="9" x2="17" y2="15"/>
									<line x1="17" y1="9" x2="23" y2="15"/>
								</svg>
							) : (
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M11 5L6 9H2v6h4l5 4V5z"/>
									<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
								</svg>
							)}
						</button>
						<button className="cinematic-icon-btn" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
							{isFullscreen ? (
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
								</svg>
							) : (
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
								</svg>
							)}
						</button>
					</div>
				</div>

				<div className="cinematic-content">
					<div className="cinematic-text-block">
						<h2 className="cinematic-title">{activeClip.title}</h2>
						<p className="cinematic-subtitle">{activeClip.subtitle}</p>
						<p className="cinematic-desc">{activeClip.description}</p>
					</div>

					<div className="cinematic-stats">
						{activeClip.stats.map((stat, idx) => (
							<div key={stat.label} className="stat-card">
								<div className="stat-value">{statsDisplay[idx]}</div>
								<div className="stat-label">{stat.label}</div>
							</div>
						))}
					</div>

					<button className="cinematic-cta-btn">
						<span>Experience This Power</span>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M5 12h14M12 5l7 7-7 7"/>
						</svg>
					</button>
				</div>

				<div className="cinematic-nav">
					<button className="nav-arrow" onClick={goPrev} aria-label="Previous">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M15 18l-6-6 6-6"/>
						</svg>
					</button>
					<div className="nav-dots">
						{cinematicClips.map((_, idx) => (
							<button
								key={idx}
								className={`nav-dot ${idx === activeIndex ? 'active' : ''}`}
								onClick={() => setActiveIndex(idx)}
								aria-label={`Go to clip ${idx + 1}`}
							/>
						))}
					</div>
					<button className="nav-arrow" onClick={goNext} aria-label="Next">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M9 18l6-6-6-6"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}
