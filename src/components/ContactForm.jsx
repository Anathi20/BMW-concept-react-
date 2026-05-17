
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactCards = [
	{
		title: 'BMW Headquarters',
		subtitle: 'Petuelring 130, 80788 Munich, Germany',
	},
	{
		title: 'Sales Concierge',
		subtitle: '+49 89 382 0 · Mon–Sat 8:00–20:00',
	},
	{
		title: 'Email',
		subtitle: 'experience@bmw.com',
	},
];

const conciergeChips = ['Test drives', 'Exclusive launches', 'Tailored finance', 'BMW Genius support'];

export default function ContactForm() {
	const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
	
	return (
		<section ref={sectionRef} id="contact" className="relative py-32 bg-black text-white overflow-hidden scroll-mt-20">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e1a] to-black"></div>
			<div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1c69d4]/20 blur-[200px] rounded-full"></div>
			<div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#4fb0ff]/10 blur-[180px] rounded-full"></div>

			<div className={`relative z-10 max-w-7xl mx-auto px-6 ${isVisible ? 'scroll-animate visible' : 'scroll-animate'}`}>
				{/* Header */}
				<div className="text-center mb-16 space-y-4">
					<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-4">
						<div className="w-2 h-2 rounded-full bg-[#4fb0ff] animate-pulse"></div>
						<span className="text-xs tracking-[0.4em] uppercase text-gray-400">BMW Concierge</span>
					</div>
					<h2 className="text-5xl md:text-6xl font-black tracking-tight">
						Let's Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4fb0ff] to-[#1c69d4]">Perfect Drive</span>
					</h2>
					<p className="text-lg text-gray-400 max-w-2xl mx-auto">
						Connect with our BMW specialists. Expert guidance, personalized service, and 2-hour response guarantee.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column - Contact Info */}
					<div className="space-y-8">
						{/* Contact Cards */}
						<div className="space-y-4">
							{contactCards.map((card) => (
								<div 
									key={card.title} 
									className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#1c69d4]/10 hover:to-[#4fb0ff]/5 hover:border-[#4fb0ff]/30 hover:shadow-[0_20px_50px_rgba(28,105,212,0.2)] hover:-translate-y-1 cursor-pointer backdrop-blur-xl"
								>
									<div className="flex-1">
										<p className="text-xl font-bold text-white mb-1 tracking-tight">{card.title}</p>
										<p className="text-sm text-gray-400 leading-relaxed">{card.subtitle}</p>
									</div>
								</div>
							))}
						</div>

						{/* Concierge Focus */}
						<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl">
							<p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-5 font-semibold">What We Offer</p>
							<div className="flex flex-wrap gap-3">
								{conciergeChips.map((chip) => (
									<span 
										key={chip} 
										className="group px-5 py-2.5 rounded-full border border-[#4fb0ff]/20 bg-[#4fb0ff]/5 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-[#4fb0ff]/15 hover:border-[#4fb0ff]/40 hover:text-white hover:shadow-lg hover:shadow-[#4fb0ff]/20 hover:-translate-y-0.5 cursor-pointer"
									>
										<span className="inline-block transition-transform duration-300 group-hover:scale-105">{chip}</span>
									</span>
								))}
							</div>
						</div>

						{/* CTA Button */}
						<button className="group w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg tracking-wide bg-gradient-to-r from-[#4fb0ff] to-[#1c69d4] text-white shadow-[0_20px_60px_-10px_rgba(79,176,255,0.5)] transition-all duration-300 hover:shadow-[0_25px_70px_-10px_rgba(79,176,255,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]">
							<span>Schedule a Call</span>
							<svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</button>
					</div>

					{/* Right Column - Contact Form */}
					<div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-2xl p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
						<form className="space-y-7">
							{/* Name Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label className="block text-sm font-bold text-gray-300 tracking-wide">First Name</label>
									<input 
										type="text" 
										placeholder="John" 
										className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 transition-all duration-300 focus:border-[#4fb0ff] focus:ring-2 focus:ring-[#4fb0ff]/30 focus:bg-white/10 hover:border-white/25 outline-none" 
									/>
								</div>
								<div className="space-y-2">
									<label className="block text-sm font-bold text-gray-300 tracking-wide">Last Name</label>
									<input 
										type="text" 
										placeholder="Doe" 
										className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 transition-all duration-300 focus:border-[#4fb0ff] focus:ring-2 focus:ring-[#4fb0ff]/30 focus:bg-white/10 hover:border-white/25 outline-none" 
									/>
								</div>
							</div>

							{/* Email */}
							<div className="space-y-2">
								<label className="block text-sm font-bold text-gray-300 tracking-wide">Email Address</label>
								<input 
									type="email" 
									placeholder="john.doe@example.com" 
									className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 transition-all duration-300 focus:border-[#4fb0ff] focus:ring-2 focus:ring-[#4fb0ff]/30 focus:bg-white/10 hover:border-white/25 outline-none" 
								/>
							</div>

							{/* Phone */}
							<div className="space-y-2">
								<label className="block text-sm font-bold text-gray-300 tracking-wide">Phone Number</label>
								<input 
									type="tel" 
									placeholder="+49 711 911 0" 
									className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 transition-all duration-300 focus:border-[#4fb0ff] focus:ring-2 focus:ring-[#4fb0ff]/30 focus:bg-white/10 hover:border-white/25 outline-none" 
								/>
							</div>

							{/* Subject */}
							<div className="space-y-2">
								<label className="block text-sm font-bold text-gray-300 tracking-wide">Subject</label>
								<select className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white transition-all duration-300 focus:border-[#4fb0ff] focus:ring-2 focus:ring-[#4fb0ff]/30 focus:bg-white/10 hover:border-white/25 cursor-pointer outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzRmYjBmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pr-12">
									<option value="">Select a subject</option>
									<option value="sales">Sales Inquiry</option>
									<option value="service">Service Appointment</option>
									<option value="test-drive">Test Drive</option>
									<option value="parts">Parts & Accessories</option>
									<option value="general">General Information</option>
								</select>
							</div>

							{/* Message */}
							<div className="space-y-2">
								<label className="block text-sm font-bold text-gray-300 tracking-wide">Your Message</label>
								<textarea 
									rows="5" 
									placeholder="Tell us how we can help you with your BMW experience..." 
									className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-600 transition-all duration-300 focus:border-[#4fb0ff] focus:ring-2 focus:ring-[#4fb0ff]/30 focus:bg-white/10 hover:border-white/25 resize-none outline-none"
								></textarea>
							</div>

							{/* Submit Button */}
							<button 
								type="submit" 
								className="group w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg tracking-wide bg-gradient-to-r from-[#4fb0ff] to-[#1c69d4] text-white shadow-[0_20px_60px_-10px_rgba(79,176,255,0.5)] transition-all duration-300 hover:shadow-[0_25px_70px_-10px_rgba(79,176,255,0.6)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] outline-none focus:ring-2 focus:ring-[#4fb0ff]/50"
							>
								<span>Send Message</span>
								<svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
