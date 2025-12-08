import React from 'react';
import Navbar from './Navbar';
import './HeroSection.css';

export default function HeroSection() {
	return (
		<section className="w-screen h-screen relative overflow-hidden">
			<div className="hero-backdrop">
				<img src="/videos/thumb.jpg" alt="BMW teaser" />
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>

			<div className="absolute inset-x-0 top-0 z-40 px-6 pt-6">
				<Navbar />
			</div>
			<div className="hero-overlay absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pt-24 md:pt-32 pb-16">
				<div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[0.65rem] tracking-[0.55em] uppercase text-gray-200">
					<span className="w-2 h-2 rounded-full bg-[#1c69d4] animate-pulse"></span>
					BMW electric
				</div>
				<div className="flex flex-col items-center justify-center px-6 w-full">
					<div className="hero-text-shell w-full max-w-4xl">
						<div className="hero-glow"></div>
						<div className="hero-panel hero-panel--delayed w-full text-center bg-black/20 border border-white/5 rounded-[32px] p-10 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
							<h1 className="hero-headline text-5xl md:text-7xl font-black leading-tight text-white">
								Pure electric.
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500">
									Pure emotion.
								</span>
							</h1>
							<p className="mt-6 text-lg md:text-xl text-gray-200">
								Immerse yourself in the next chapter of performance where silence meets adrenaline and sustainability feels iconic.
							</p>
						</div>
					</div>
					<div className="mt-8 flex flex-col sm:flex-row gap-4">
						<button className="hero-primary-btn inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#1c69d4] text-white font-semibold shadow-lg shadow-[#1c69d4]/30 hover:bg-[#1556ad] transition" type="button">
							Configure yours
						</button>
						<button className="hero-secondary-btn inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white/90 backdrop-blur bg-white/10 hover:bg-white/20 transition" type="button">
							Watch the story
						</button>
					</div>
					<div className="mt-14 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-white">
						<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
							<p className="text-3xl font-bold">600 km</p>
							<p className="text-sm uppercase tracking-wide text-gray-200">Estimated range</p>
						</div>
						<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
							<p className="text-3xl font-bold">2.9 s</p>
							<p className="text-sm uppercase tracking-wide text-gray-200">0-100 km/h</p>
						</div>
						<div className="bg-white/10 rounded-2xl p-4 border border-white/10">
							<p className="text-3xl font-bold">80%</p>
							<p className="text-sm uppercase tracking-wide text-gray-200">Fast charge in 20m</p>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs tracking-[0.4em] uppercase">
				<span>Scroll</span>
				<span className="w-px h-10 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse"></span>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
		</section>
	);
}
