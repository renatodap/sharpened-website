import { BRAND } from '@/lib/brand'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Sharpened</div>
            <a 
              href={`mailto:${BRAND.contact.email}`}
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-none">
            Your edge,<br />
            <span className="text-blue-500">sharpened by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            AI-powered systems that help you learn, improve, and achieve with precision — in your body, mind, and skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${BRAND.contact.waitlistEmail}?subject=Join the Waitlist&body=I'm interested in joining the Sharpened waitlist.`}
              className="btn-primary inline-block text-center"
            >
              Join the waitlist
            </a>
            <button className="btn-secondary">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card group hover:border-zinc-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-red-500">FeelSharper</h3>
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
              </div>
            </div>
            <p className="text-zinc-400 mb-4">
              AI training programs, nutrition tracking, and recovery optimization for peak physical performance.
            </p>
            <div className="text-sm text-zinc-500">
              Coming soon
            </div>
          </div>

          <div className="card group hover:border-zinc-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-cyan-500">StudySharper</h3>
              <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-cyan-500 rounded"></div>
              </div>
            </div>
            <p className="text-zinc-400 mb-4">
              Intelligent study planning, note ingestion with RAG, and spaced repetition for accelerated learning.
            </p>
            <div className="text-sm text-zinc-500">
              Coming soon
            </div>
          </div>
        </div>
      </section>

      {/* Values/Promise */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Promise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Technology becomes transformation when applied with precision and purpose.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="font-semibold mb-2">Data-Driven Insights</h3>
            <p className="text-sm text-zinc-400">
              Reveal what&apos;s actually working with AI-powered analysis
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="font-semibold mb-2">Pattern Recognition</h3>
            <p className="text-sm text-zinc-400">
              Spot improvement opportunities you&apos;d miss on your own
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="font-semibold mb-2">Measurable Progress</h3>
            <p className="text-sm text-zinc-400">
              Track and celebrate every gain with precision metrics
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Turn technology into transformation
        </h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Join the waitlist to be first in line when we launch.
        </p>
        <a
          href={`mailto:${BRAND.contact.waitlistEmail}?subject=Join the Waitlist&body=I'm interested in joining the Sharpened waitlist.`}
          className="btn-primary inline-block"
        >
          Get early access
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-8 mb-8 md:mb-0">
              <div className="text-xl font-bold">Sharpened</div>
              <div className="text-sm text-zinc-500">
                Your edge, sharpened by AI
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm text-zinc-500">
              <span>Privacy</span>
              <span>Terms</span>
              <span>© 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}