import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Impact",
  description: "Learn about YDO's impact in Northern Uganda, including education support, vocational training, psycho-social support, and advocacy for vulnerable populations.",
};

export default function Impact() {
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
              <Link href="/impact" className="text-orange-600 font-medium">Impact</Link>
              <Link href="/partnership" className="text-gray-700 hover:text-orange-600 transition-colors">Partnership</Link>
              <Link href="/contact" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Impact</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            YDO's programs contribute to measurable outcomes in education, skills development, and community well-being in Northern Uganda.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Through our programs, YDO contributes to the broader impact of our partnership with Be A Number, International. Together, we work toward measurable outcomes that demonstrate the effectiveness of community-led development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200 text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">Education</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scholarships & Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Providing educational opportunities and advocacy for vulnerable children, ensuring access to quality education from early childhood through secondary levels.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">Training</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vocational & Life Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Equipping youth and adults with practical skills and psycho-social support, creating pathways to employment and self-sufficiency.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200 text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">Advocacy</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rights & Welfare</h3>
              <p className="text-gray-700 leading-relaxed">
                Promoting children's rights, supporting vulnerable families, and mobilizing communities for sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Impact with Be A Number */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Combined Impact Through Partnership</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Through this partnership, community systems in Northern Uganda are being strengthened across multiple dimensions. All impact is locally implemented and community-owned, with YDO serving as the primary on-the-ground organization driving outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education Infrastructure + Scholarships</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Education infrastructure and scholarship support are expanding access to learning, with YDO implementing scholarship programs and educational advocacy to ensure vulnerable children can access these opportunities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>380-student capacity school supported by Be A Number</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>YDO scholarships ensuring vulnerable children can attend</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Academic support and advocacy from YDO</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vocational Training + Job Creation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vocational training is aligned with local job creation and economic opportunity, creating pathways from skills development to employment and business opportunities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vocational training in sewing, construction, and trades</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Local jobs supported through economic activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cooperatives and business development support</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health + Psycho-Social Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Health initiatives are integrated with education and family support, addressing both physical and emotional well-being through coordinated programs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>700+ patient visits through Be A Number's medical outreach</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>YDO's psycho-social support reinforcing health outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Holistic approach to community well-being</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Leadership + Advocacy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Community leadership structures are reinforced to ensure long-term sustainability, with YDO's advocacy work ensuring that all programs reflect local priorities and that vulnerable populations have a voice in development initiatives.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community-led planning and implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advocacy for children's rights and welfare</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Local ownership ensuring long-term sustainability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* YDO Contributions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">YDO's Contributions</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            As the locally-led implementing organization, YDO brings deep local knowledge, community networks, and on-the-ground capacity that make lasting change possible. YDO guides priorities, execution, and community engagement, ensuring all programs are community-driven and locally owned.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Implementation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO implements programs with local staff and volunteers who understand community needs and can build trust and relationships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This local capacity ensures that programs are implemented effectively and that communities feel ownership over the initiatives that serve them.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Networks</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO's deep relationships with community leaders, families, and local organizations enable effective program delivery where needs are greatest.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These networks help identify vulnerable populations, ensure programs reach those most in need, and build community support for initiatives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Context</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO's lived experience in Northern Uganda's post-conflict transition grounds programs in local insight and cultural understanding.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This context ensures that programs are culturally appropriate, respectful of local values, and aligned with community priorities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advocacy & Mobilization</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YDO's advocacy work promotes children's rights, supports vulnerable families, and mobilizes communities for sustainable development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This advocacy ensures that programs address systemic issues and create protective environments where communities can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Through this partnership, we are working toward reaching 20,000+ lives over five years and demonstrating how community-led development creates lasting transformation in post-conflict regions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This collaborative model combines local leadership with global partnership to move communities toward resilience, sustainability, and intergenerational opportunity — with all impact locally implemented and community-owned.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Learn More About Our Partnership</h2>
          <p className="text-lg text-orange-50 mb-8 leading-relaxed">
            Discover how YDO and Be A Number work together to create lasting change.
          </p>
          <Link
            href="/partnership"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Our Partnership
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