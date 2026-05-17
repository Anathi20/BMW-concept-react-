import React from 'react';
import './FindMyBMW.css';

export default function FindMyBMW() {
	return (
		<section className="find-my-bmw" id="find-bmw" style={{ fontFamily: "'Orbitron', sans-serif" }}>
			<div className="find-my-bmw-content">
				<div className="bmw-text-section">
					<h1 className="bmw-main-title">Find Your BMW</h1>
					<div className="bmw-buttons">
						<button className="bmw-btn primary">
							Find BMW
							<span className="btn-icon">→</span>
						</button>
						<button className="bmw-btn secondary">
							Experience Electric
						</button>
					</div>
				</div>
				<div className="bmw-image-section">
					<div className="image-container">
						<img src="/videos/bmw ix.jpg" alt="BMW iX" className="bmw-ix-image" />
						<div className="image-overlay"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
