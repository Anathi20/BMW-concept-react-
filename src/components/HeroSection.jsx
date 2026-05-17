import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const heroContent = [
	{
		image: '/videos/bmw hero 2.jpeg',
		title: 'The All-New BMW iX3',
		buttonText: 'Explore BMW iX3'
	},
	{
		// a sample hero video placed in public/videos — choose randomly on load
		video: '/videos/BMW iX3  The All-New BMW iX3. - BMW Canada (1080p, h264).mp4',
		title: 'The All-New BMW iX3',
		buttonText: 'Explore BMW iX3'
	}
];

export default function HeroSection() {
	const [currentHero, setCurrentHero] = useState(null);
	const [animateText, setAnimateText] = useState(false);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * heroContent.length);
		setCurrentHero(heroContent[randomIndex]);
		// trigger a one-time text entrance animation on mount
		setAnimateText(true);
		const t = setTimeout(() => setAnimateText(false), 1200);
		return () => clearTimeout(t);
	}, []);

	if (!currentHero) return null;

	return (
		<section id="hero" className="hero-shell scroll-mt-0" style={{ fontFamily: "'Orbitron', sans-serif" }}>
			<div className="hero-media" aria-hidden="true">
				{currentHero.video ? (
					<video
						src={currentHero.video}
						className="hero-image"
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
					/>
				) : (
					<img src={currentHero.image} alt="BMW" className="hero-image" />
				)}
				<div className="hero-mask" />
			</div>

			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '100%', minHeight: '60vh', position: 'relative', zIndex: 5 }}>
				<div className={`hero-text ${animateText ? 'animate-in' : ''}`} style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: '4vw', minHeight: '520px' }}>
				  {/* Title removed per request */}
				<div className="hero-model-number" style={{ fontSize: '12rem', fontWeight: 900, color: '#1c69d4', letterSpacing: '-0.04em', marginBottom: '1rem', textAlign: 'right', lineHeight: 0.9 }}>
						X3
					</div>
					<div className="hero-model-name" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'right' }}>
						Electric. Dynamic. Precise. Refined.
					</div>

					<div className="hero-cta-row" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '2.5rem', gap: '0.75rem', minWidth: '400px' }}>
						<button
							type="button"
							className="hero-cta hero-cta--primary"
							style={{
								fontSize: '1.15rem',
								padding: '1.1rem 2.8rem',
								width: '340px',
								fontWeight: 700,
								borderRadius: '0',
								background: '#1c69d4',
								color: '#fff',
								border: 'none',
								textTransform: 'uppercase',
								letterSpacing: '0.05em',
								transition: 'all 0.3s ease',
								cursor: 'pointer',

							}}
						>
							{currentHero.buttonText}
						</button>

						<button
							type="button"
							className="hero-cta hero-cta--secondary"
							style={{
								fontSize: '1.15rem',
								padding: '1.1rem 2.8rem',
								width: '340px',
								fontWeight: 700,
								borderRadius: '0',
								background: 'transparent',
								color: '#ffffff',
								border: '2px solid #ffffff',
								textTransform: 'uppercase',
								letterSpacing: '0.05em',
								transition: 'all 0.3s ease',
								cursor: 'pointer'
							}}
						>
							Build & Price
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
