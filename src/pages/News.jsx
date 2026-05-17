import React from 'react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'BMW Unveils Next-Generation Electric Platform',
      category: 'Technology',
      date: 'February 10, 2026',
      excerpt: 'The Neue Klasse platform promises up to 30% more range and faster charging times for future electric vehicles.',
      image: '/videos/logo1.png',
      featured: true
    },
    {
      id: 2,
      title: 'M4 CSL Sets New Nürburgring Record',
      category: 'Performance',
      date: 'February 8, 2026',
      excerpt: 'The track-focused M4 CSL has conquered the Nordschleife with an impressive lap time of 7:20.207.',
      image: '/videos/logo1.png',
      featured: true
    },
    {
      id: 3,
      title: 'BMW Achieves Carbon Neutral Production',
      category: 'Sustainability',
      date: 'February 5, 2026',
      excerpt: 'All BMW Group production facilities worldwide now operate with 100% renewable energy.',
      image: '/videos/logo1.png',
      featured: false
    },
    {
      id: 4,
      title: 'New iX5 Hydrogen Enters Production',
      category: 'Innovation',
      date: 'February 3, 2026',
      excerpt: 'BMW begins small-series production of hydrogen fuel cell vehicles as an alternative to battery-electric.',
      image: '/videos/logo1.png',
      featured: false
    },
    {
      id: 5,
      title: '2027 7 Series Luxury Sedan Revealed',
      category: 'Launch',
      date: 'January 30, 2026',
      excerpt: 'The flagship sedan receives enhanced autonomous driving capabilities and revolutionary interior design.',
      image: '/videos/logo1.png',
      featured: false
    },
    {
      id: 6,
      title: 'BMW Motorsport Announces LMDh Program',
      category: 'Racing',
      date: 'January 28, 2026',
      excerpt: 'BMW M Motorsport commits to endurance racing with new hybrid prototype for IMSA and WEC.',
      image: '/videos/logo1.png',
      featured: false
    }
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            BMW News & Insights
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Stay updated with the latest innovations, launches, and stories from BMW.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all duration-300"
              >
                <div className="aspect-video bg-white/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="h-32 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 text-xs font-semibold uppercase">
                      {article.category}
                    </span>
                    <span className="text-sm text-white/60">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/70 mb-6">{article.excerpt}</p>
                  <button className="flex items-center gap-2 text-sky-400 font-semibold hover:gap-3 transition-all">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all duration-300"
              >
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded-full bg-sky-400/10 text-sky-400 text-xs font-semibold uppercase">
                      {article.category}
                    </span>
                    <span className="text-xs text-white/60">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">{article.excerpt}</p>
                  <button className="flex items-center gap-2 text-sky-400 text-sm font-semibold hover:gap-3 transition-all">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-sky-400/10 to-blue-600/10 border border-sky-400/30 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss an update on new models, technology, and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-black/50 border border-white/20 focus:border-sky-400 focus:outline-none transition"
            />
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
