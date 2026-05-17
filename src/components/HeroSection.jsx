import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const heroContent = [
	{
		image: '/videos/bmw hero 2.jpeg',
		modelNumber: 'iX3',
		title: 'The All-New BMW iX3',
		tagline: 'Electric. Dynamic. Precise. Refined.',
		buttonText: 'Explore BMW iX3'
	},
	{
		video: '/videos/bmw i3.mp4',
		poster: '/videos/bmw i3 card.avif',
		modelNumber: 'i3',
		headlineLines: ['THE NEW', 'BMW i3 SEDAN'],
		tagline: 'FEEL THE HEARTBEAT OF A NEW ERA.',
		buttonText: 'Keep me informed',
		layout: 'left'
	}
];

export default function HeroSection() {
	const [currentHero, setCurrentHero] = useState(null);
	const [animateText, setAnimateText] = useState(false);
	const [heroVideoReady, setHeroVideoReady] = useState(false);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * heroContent.length);
		setCurrentHero(heroContent[randomIndex]);
		setHeroVideoReady(false);
		// trigger a one-time text entrance animation on mount
		setAnimateText(true);
		const t = setTimeout(() => setAnimateText(false), 1200);
		return () => clearTimeout(t);
	}, []);

	if (!currentHero) return null;
	const isI3Hero = currentHero.modelNumber === 'i3';

	return (
		<section id="hero" className="hero-shell scroll-mt-0" style={{ fontFamily: "'Orbitron', sans-serif" }}>
			<div className="hero-media" aria-hidden="true">
				{currentHero.video ? (
					<>
						{currentHero.poster && !heroVideoReady ? (
							<img src={currentHero.poster} alt="BMW i3 placeholder" className="hero-image" />
						) : null}
					<video
						src={currentHero.video}
						className="hero-image"
						autoPlay
						muted
							loop={currentHero.modelNumber !== 'i3'}
						playsInline
						preload="metadata"
						onCanPlay={() => setHeroVideoReady(true)}
						onLoadedData={() => setHeroVideoReady(true)}
							onEnded={(event) => {
								if (currentHero.modelNumber === 'i3') {
									event.currentTarget.pause();
								}
							}}
						style={{ opacity: heroVideoReady ? 1 : 0, transition: 'opacity 300ms ease' }}
					/>
					</>
				) : (
					<img src={currentHero.image} alt="BMW" className="hero-image" />
				)}
				<div className="hero-mask" />
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: isI3Hero ? 'flex-start' : 'flex-end',
					width: '100%',
					minHeight: '60vh',
					position: 'relative',
					zIndex: 5
				}}
			>
				<div
					className={`hero-text ${isI3Hero ? 'hero-text--i3' : ''} ${animateText ? 'animate-in' : ''}`}
					style={{
						flex: 'none',
						display: 'flex',
						flexDirection: 'column',
						alignItems: isI3Hero ? 'flex-start' : 'flex-end',
						justifyContent: 'center',
						paddingLeft: isI3Hero ? '5vw' : '0',
						paddingRight: isI3Hero ? '0' : '4vw',
						minHeight: '520px',
						maxWidth: isI3Hero ? '620px' : 'none',
						textAlign: isI3Hero ? 'left' : 'right'
					}}
				>
					{isI3Hero ? (
						<>
							<div className="hero-i3-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.15rem', marginBottom: '1.2rem' }}>
								{currentHero.headlineLines.map((line) => (
									<div
										key={line}
										style={{
											fontSize: 'clamp(3.2rem, 6vw, 5.2rem)',
											fontWeight: 700,
											color: '#ffffff',
											letterSpacing: '-0.04em',
											lineHeight: 0.92,
											textTransform: 'uppercase'
										}}
									>
										{line}
									</div>
								))}
							</div>
							<div
								className="hero-model-name"
								style={{
									fontSize: '1.35rem',
									fontWeight: 500,
									color: '#f4f4f4',
									marginBottom: '2rem',
									textTransform: 'uppercase',
									letterSpacing: '0.18em',
									textAlign: 'left'
								}}
							>
								{currentHero.tagline}
							</div>
							<div className="hero-cta-row" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '0.25rem', gap: '0.75rem', minWidth: 'auto' }}>
								<button
									type="button"
									className="hero-cta hero-cta--primary"
									style={{
										fontSize: '1.05rem',
										padding: '1rem 2.2rem',
										width: 'auto',
										minWidth: '220px',
										fontWeight: 700,
										borderRadius: '0',
										background: '#1c69d4',
										color: '#fff',
										border: 'none',
										textTransform: 'none',
										letterSpacing: '0',
										transition: 'all 0.3s ease',
										cursor: 'pointer'
									}}
								>
									{currentHero.buttonText}
								</button>
							</div>
						</>
					) : (
						<>
							<div className="hero-model-number" style={{ fontSize: '12rem', fontWeight: 900, color: '#1c69d4', letterSpacing: '-0.04em', marginBottom: '1rem', textAlign: 'right', lineHeight: 0.9 }}>
								{currentHero.modelNumber}
							</div>
							<div className="hero-model-name" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'right' }}>
								{currentHero.tagline}
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
						</>
					)}
				</div>
			</div>
		</section>
	);
}
