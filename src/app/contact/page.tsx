import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Youth Development Organisation Uganda (YDO). Contact us to learn more about our programs, partnership opportunities, or how you can support our work.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">YDO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Youth Development Organisation</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
              <Link href="/programs" className="text-gray-700 hover:text-orange-600 transition-colors">Programs</Link>
              <Link href="/impact" className="text-gray-700 hover:text-orange-600 transition-colors">Impact</Link>
              <Link href="/partnership" className="text-gray-700 hover:text-orange-600 transition-colors">Partnership</Link>
              <Link href="/contact" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Get in touch with Youth Development Organisation Uganda. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you're interested in learning more about our programs, exploring partnership opportunities, volunteering, or supporting our work, we'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@theyouth.world" className="text-orange-600 hover:text-orange-700 transition-colors">
                      info@theyouth.world
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">Gulu District, Northern Uganda</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <a href="https://theyouth.world" className="text-orange-600 hover:text-orange-700 transition-colors">
                      theyouth.world
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ways to Connect</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">General Inquiries:</strong> Learn more about our programs and work
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Partnership Opportunities:</strong> Explore how we can work together
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Volunteering:</strong> Find out how you can contribute your time and skills
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Support:</strong> Learn about ways to support our work financially or in-kind
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Info */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partnership with Be A Number</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            YDO serves as a core implementation partner with <a href="https://beanumber.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold underline">Be A Number, International</a>. If you're interested in supporting our work through Be A Number, you can learn more at their website or contact them directly.
          </p>
          <a
            href="https://beanumber.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium text-lg"
          >
            Visit Be A Number Website
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We Look Forward to Hearing from You</h2>
          <p className="text-lg text-orange-50 mb-8 leading-relaxed">
            Whether you have questions, ideas, or want to get involved, we're here to connect.
          </p>
          <a
            href="mailto:info@theyouth.world"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Send Us an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold">YDO</span>
                </div>
                <span className="text-xl font-bold text-white">Youth Development Organisation</span>
              </div>
              <p className="text-sm text-gray-400">Empowering communities in post-conflict Northern Uganda.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                <li><Link href="/programs" className="hover:text-orange-400 transition-colors">Programs</Link></li>
                <li><Link href="/impact" className="hover:text-orange-400 transition-colors">Impact</Link></li>
                <li><Link href="/partnership" className="hover:text-orange-400 transition-colors">Partnership</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <p className="text-sm text-gray-400 mb-2">Gulu District, Northern Uganda</p>
              <p className="text-sm text-gray-400">
                <a href="mailto:info@theyouth.world" className="hover:text-orange-400 transition-colors">
                  info@theyouth.world
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Youth Development Organisation Uganda. All rights reserved.</p>
            <p className="mt-2">Partnering with <a href="https://beanumber.org" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Be A Number, International</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}