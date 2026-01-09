import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Partnership",
  description: "Learn about YDO's partnership with Be A Number, International, and how we work together to create lasting change in Northern Uganda.",
};

export default function Partnership() {
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
              <Link href="/partnership" className="text-orange-600 font-medium">Partnership</Link>
              <Link href="/contact" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Partnership</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            YDO serves as a core implementation partner with Be A Number, International, combining local knowledge with strategic systems design to create lasting change.
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Working Together for Change</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                YDO works in close partnership with <a href="https://beanumber.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold underline">Be A Number, International</a>, a U.S.-based nonprofit organization that supports the development of sustainable community systems in Northern Uganda.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In this partnership, YDO remains the locally-led implementing organization, guiding priorities, execution, and community engagement. Be A Number provides strategic support, infrastructure investment, and long-term systems development alongside YDO's leadership.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This collaborative model ensures that programs are community-driven, locally owned, institutionally strengthened, and sustainable over the long term. Together, the organizations align around shared goals while honoring distinct roles — combining local leadership with global partnership to create durable, community-owned change.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership Principles</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Community-Driven:</strong> Local priorities guide all initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Locally Owned:</strong> Programs are owned by the communities they serve</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Institutionally Strengthened:</strong> Building capacity for long-term sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Sustainable:</strong> Systems that endure beyond external support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How the Partnership Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">How Our Partnership Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Be A Number's Role</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Be A Number provides strategic support, infrastructure investment, and long-term systems development alongside YDO's leadership:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Strategic support and systems development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Infrastructure investment (schools, medical centers, training facilities)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Resource mobilization and funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600">•</span>
                  <span>Long-term systems development support</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YDO's Role</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO remains the locally-led implementing organization, guiding priorities, execution, and community engagement:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Local leadership and priority-setting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>On-the-ground program implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Community mobilization and engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Local staff and volunteer management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Cultural context and community relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Across Systems */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Integration Across Systems</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education: Infrastructure + Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Be A Number supports education infrastructure (like the 380-student capacity school), while YDO provides scholarships, school supplies, and academic advocacy. Together, these ensure that infrastructure serves those most in need and that vulnerable children have access to educational opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Training: Vocational + Job Creation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO's vocational and life-skills training connects with Be A Number's workforce development goals and economic empowerment initiatives. Vocational curricula are integrated with market linkages and cooperative formations, creating pathways from training to employment.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health: Outreach + Psycho-Social Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Be A Number's medical outreach and health initiatives (700+ patient visits in 2025) are coordinated with YDO's education and psycho-social support structures. This holistic approach reinforces community stability and growth by addressing both physical and emotional well-being.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Welfare: Advocacy + Empowerment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO's advocacy for children with disabilities, vulnerable families, and women's economic participation enhances the holistic system Be A Number builds. This ensures that programs address systemic issues and create protective environments for all community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Opportunities */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Strategic Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scaling Community Systems</h3>
              <p className="text-gray-700 leading-relaxed">
                Expand education and training footprints by combining Be A Number's infrastructure support with YDO's localized programming and outreach capacity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strengthening Workforce Pathways</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrate vocational curricula with market linkages and cooperative formations supported jointly by both organizations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Well-Being</h3>
              <p className="text-gray-700 leading-relaxed">
                Coordinate health initiatives with education and psycho-social support structures to reinforce community stability and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Together */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Combined Impact</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Through this partnership, community systems in Northern Uganda are being strengthened across multiple dimensions. All impact is locally implemented and community-owned, with YDO serving as the primary on-the-ground organization driving outcomes. Together, we are working toward reaching 20,000+ lives over five years and demonstrating how community-led development creates lasting transformation in post-conflict regions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/impact"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium text-lg"
            >
              See Our Impact
            </Link>
            <a
              href="https://beanumber.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors font-medium text-lg"
            >
              Visit Be A Number
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Learning More?</h2>
          <p className="text-lg text-orange-50 mb-8 leading-relaxed">
            Contact us to learn more about our partnership or how you can support our work.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Get in Touch
          </Link>
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
              <p className="text-sm text-gray-400 mb-2">Omoro District, Northern Uganda</p>
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