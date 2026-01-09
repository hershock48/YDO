import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore YDO's comprehensive programs including education support, vocational training, psycho-social support, child welfare advocacy, and economic empowerment in Northern Uganda.",
};

export default function Programs() {
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
              <Link href="/programs" className="text-orange-600 font-medium">Programs</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Comprehensive programs that address the interconnected needs of post-conflict communities in Northern Uganda.
          </p>
        </div>
      </section>

      {/* Education Support */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Education
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Education Support & Scholarships</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                YDO provides educational support and scholarships to vulnerable children, ensuring access to quality education from early childhood through secondary levels. We understand that education is fundamental to breaking cycles of poverty and creating opportunities for lasting change.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our education programs include school supplies, tuition support, academic advocacy, and mentoring. We work closely with schools and families to ensure children have the resources they need to succeed academically and personally.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scholarships for vulnerable children from early childhood through secondary education</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>School supplies and educational materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Academic advocacy and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mentoring and guidance programs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Through our partnership with Be A Number, we support education infrastructure that serves hundreds of students, while our scholarship programs ensure vulnerable children have access to these opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vocational Training */}
      <section id="vocational" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market-Linked Training</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our vocational programs are designed based on local market needs, ensuring that skills training leads directly to employment and livelihood opportunities.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Skills Development
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vocational Training</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                YDO provides practical skills training that connects directly to livelihood opportunities. Our vocational programs teach marketable skills in sewing, construction, and other in-demand trades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Training is designed to respond to local market needs, ensuring participants can use their skills to generate income and build sustainable livelihoods. We work with local businesses and cooperatives to create pathways from training to employment.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sewing and tailoring skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Construction and building trades</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Other marketable trade skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business skills and cooperative formation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Psycho-Social Support */}
      <section id="psychosocial" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Well-Being
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Psycho-Social Support</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In post-conflict communities, addressing trauma and building emotional resilience is essential for long-term recovery. YDO provides counseling, life skills development, and trauma-informed care to support healing and personal growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our psycho-social programs create safe spaces for individuals to process experiences, develop coping strategies, and build the personal skills needed to thrive. We integrate these services with education and vocational programs to provide holistic support.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individual and group counseling</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trauma-informed care and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Life skills development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Peer support groups</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Psycho-social support is integrated with all our programs, recognizing that healing and personal growth are essential foundations for education, employment, and community participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Welfare Advocacy */}
      <section id="advocacy" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Protection & Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work to create protective environments where children are safe, their rights are respected, and they have opportunities to thrive.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Advocacy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Child Welfare Advocacy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                YDO advocates for children's rights and welfare, with particular attention to children with disabilities and those in vulnerable situations. We work with families, communities, and local authorities to create protective environments and ensure children's needs are met.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our advocacy work includes promoting children's rights, supporting families, and mobilizing communities to protect and care for vulnerable children.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advocacy for children's rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support for children with disabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Family support services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community mobilization for child protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Empowerment */}
      <section id="economic" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                Livelihoods
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Economic Empowerment</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                YDO supports women and youth in building sustainable livelihoods and economic independence. Our economic empowerment programs connect vocational training to job creation, business development, and cooperative formation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We work with local businesses and cooperatives to create pathways from training to employment, supporting income-generating activities that contribute to household and community economic stability.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Women's economic participation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Youth livelihood support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business development support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cooperative formation and support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Livelihoods</h3>
              <p className="text-gray-700 leading-relaxed">
                Economic empowerment creates pathways to self-sufficiency, reducing dependency on external aid and strengthening community resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Mobilization */}
      <section id="community" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
              Community Engagement
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Community Mobilization</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              YDO engages communities in planning, implementation, and ownership of development initiatives. We believe that sustainable change comes from community leadership and participation at every level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community-Led Planning</h3>
              <p className="text-gray-700 leading-relaxed">
                All programs are designed with input from community leaders and members, ensuring initiatives reflect local priorities and build on existing strengths.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Implementation</h3>
              <p className="text-gray-700 leading-relaxed">
                Programs are implemented by local staff and volunteers, creating employment opportunities and building local capacity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Ownership</h3>
              <p className="text-gray-700 leading-relaxed">
                Communities take ownership of programs, ensuring sustainability beyond our initial involvement and creating lasting change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Capacity Building</h3>
              <p className="text-gray-700 leading-relaxed">
                We invest in building local leadership and organizational capacity, strengthening communities' ability to drive their own development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Learn More About Our Impact</h2>
          <p className="text-lg text-orange-50 mb-8 leading-relaxed">
            See how our programs are creating lasting change in Northern Uganda.
          </p>
          <Link
            href="/impact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            View Our Impact
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