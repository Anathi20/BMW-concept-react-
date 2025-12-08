import React, { useEffect, useRef, useState } from 'react';
import './NewsSection.css';

export default function NewsSection() {
	const intelligenceLayers = [
		{
			label: 'Copilot OS',
			title: 'Situational awareness in 360º',
			description:
				'BMW Copilot OS fuses radar, LiDAR, and HD maps in real time, predicting traffic flow and driver intent before you touch the wheel.',
			highlights: ['Level 3 readiness', 'Dynamic overtaking logic', 'Predictive route planning'],
			image: '/videos/intelligence.jpg',
		},
		{
			label: 'Neural Cabin',
			title: 'An interior that senses mood',
			description:
				'Adaptive lighting, seat bolstering, and audio curves react to biometric cues so every journey feels tailored to your physiology.',
			highlights: ['Biometric seats', 'Soundstage EQ', 'Wellness routines'],
			image: '/videos/cabin.jpg',
		},
		{
			label: 'Performance Core',
			title: 'Torque vectoring powered by AI',
			description:
				'Millisecond torque adjustments keep each wheel locked to the racing line, even in mixed traction or sudden weather shifts.',
			highlights: ['Digital slip control', 'Track telemetry overlay', 'Cloud-tuned power maps'],
			image: '/videos/axis.jpg',
		},
	];

	const [activeLayerIndex, setActiveLayerIndex] = useState(0);
	const activeLayer = intelligenceLayers[activeLayerIndex];
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ root: null, threshold: 0.35 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="relative py-24 bg-[#030409] text-white overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-black via-[#070b1a] to-black"></div>
			<div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/30 blur-[200px] rounded-full"></div>
			<div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-purple-500/20 blur-[220px] rounded-full"></div>

			<div className={`relative z-10 mx-auto px-6 space-y-12 news-content ${isVisible ? 'news-visible' : ''}`}>
				<div className="text-center space-y-4 news-animate news-animate--delay-1">
					<p className="text-xs tracking-[0.6em] uppercase text-gray-400">BMW intelligence</p>
					<h2 className="text-4xl md:text-5xl font-black leading-tight">
						Human instinct.
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500">
							Redefined by AI.
						</span>
					</h2>
					<p className="text-base text-gray-300 max-w-3xl mx-auto">
						Every BMW now learns in the wild—blending sensor fusion, neural cabins, and adaptive performance maps to keep you focused on pure driving emotion.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center news-animate news-animate--delay-2">
					<div className="news-spotlight news-animate news-animate--delay-3">
						<div className="news-spotlight-glow" />
						<div className="news-spotlight-frame">
							<img src={activeLayer.image} alt={activeLayer.title} className="news-spotlight-image" />
							<div className="news-spotlight-overlay">
								<p className="eyebrow">Live telemetry</p>
								<p className="label">{activeLayer.label}</p>
								<p className="status">Sensor fusion sync · 4.2 ms latency</p>
							</div>
							<div className="news-spotlight-meta">
								{activeLayer.highlights.slice(0, 2).map((item) => (
									<span key={item}>{item}</span>
								))}
							</div>
						</div>
					</div>

					<div className="space-y-6 news-animate news-animate--delay-4">
						<div className="flex flex-wrap gap-3">
							{intelligenceLayers.map((layer, index) => (
								<button
									key={layer.label}
									className={`news-tab ${index === activeLayerIndex ? 'news-tab--active' : 'news-tab--inactive'}`}
									onClick={() => setActiveLayerIndex(index)}
								>
									{layer.label}
								</button>
							))}
						</div>

						<div className="space-y-4">
							<p className="text-xs uppercase tracking-[0.4em] text-gray-400">Module {String(activeLayerIndex + 1).padStart(2, '0')}</p>
							<h3 className="text-3xl font-bold">{activeLayer.title}</h3>
							<p className="text-gray-300 leading-relaxed">{activeLayer.description}</p>
							<ul className="flex flex-wrap gap-3 text-sm text-white/80">
								{activeLayer.highlights.map((item) => (
									<li key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
