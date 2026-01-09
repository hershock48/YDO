import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Youth Development Organisation Uganda (YDO) empowers communities in post-conflict Northern Uganda through education, vocational training, psycho-social support, and advocacy for vulnerable populations.",
  openGraph: {
    title: "Youth Development Organisation Uganda | Empowering Post-War Communities",
    description: "YDO provides education, psycho-social support, vocational training, and advocacy for children, women, and vulnerable populations in Northern Uganda.",
    images: ["/images/homepage/hero-youth.jpg"],
  },
};

export default function Home() {
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
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-orange-600 transition-colors">
                Programs
              </Link>
              <Link href="/impact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Impact
              </Link>
              <Link href="/partnership" className="text-gray-700 hover:text-orange-600 transition-colors">
                Partnership
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <Link
                href="/contact"
                className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(234 95 45) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Empowering Communities in Northern Uganda
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Rehabilitating post-war communities through <span className="text-orange-600">youth empowerment</span> and local leadership.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              Youth Development Organisation Uganda (YDO) is a community-based organization in Omoro District, Northern Uganda, led by local community members and committed to the long-term rehabilitation and empowerment of war-affected communities.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              YDO designs and implements programs in education, psycho-social support, vocational training, life-skills development, and child welfare advocacy — strengthening families, protecting children, and building community resilience from within.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/programs"
                className="px-8 py-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-center font-medium text-lg"
              >
                Our Programs
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-md hover:bg-orange-50 transition-colors text-center font-medium text-lg"
              >
                Learn More
              </Link>
            </div>
            
            {/* Impact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-orange-600 mb-1">Education</div>
                <div className="text-sm text-gray-600">Scholarships & Support</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-600 mb-1">Training</div>
                <div className="text-sm text-gray-600">Vocational & Life Skills</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-green-600 mb-1">Advocacy</div>
                <div className="text-sm text-gray-600">Rights & Welfare</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                YDO envisions a future where post-conflict communities are fully rehabilitated, children are protected from armed conflict, and families have access to the education, skills, and support needed to thrive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our work is built on the conviction that lasting transformation emerges from within communities themselves — when local leaders, families, and youth are equipped to shape their own future. Every program we implement reflects local priorities, strengthens existing community assets, and builds systems that endure beyond external support.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium"
              >
                Learn About Our Story
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community-Centered</h3>
                    <p className="text-gray-700">All programs are designed with and led by local communities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Holistic Support</h3>
                    <p className="text-gray-700">Education, training, and psycho-social services work together.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Durable Change</h3>
                    <p className="text-gray-700">Building skills and systems that sustain beyond our involvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              YDO implements comprehensive programs that address the interconnected needs of post-conflict communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Scholarships, school supplies, and academic support for vulnerable children from early childhood through secondary education.
              </p>
              <Link href="/programs#education" className="text-orange-600 hover:text-orange-700 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vocational Training</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Practical skills training in sewing, construction, and other marketable trades that lead to livelihood opportunities.
              </p>
              <Link href="/programs#vocational" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Psycho-Social Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Counseling, life skills development, and trauma-informed care to support healing and personal growth.
              </p>
              <Link href="/programs#psychosocial" className="text-green-600 hover:text-green-700 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Child Welfare Advocacy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Protecting children's rights, supporting families, and creating safe environments for vulnerable youth.
              </p>
              <Link href="/programs#advocacy" className="text-purple-600 hover:text-purple-700 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Economic Empowerment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Supporting women and youth in building sustainable livelihoods and economic independence.
              </p>
              <Link href="/programs#economic" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Learn more →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Mobilization</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Engaging communities in planning, implementation, and ownership of development initiatives.
              </p>
              <Link href="/programs#community" className="text-red-600 hover:text-red-700 font-medium">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium text-lg"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-20 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Working in Partnership</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                YDO works in close partnership with <a href="https://beanumber.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold underline">Be A Number, International</a>, a U.S.-based nonprofit organization that supports the development of sustainable community systems in Northern Uganda.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In this partnership, YDO remains the locally-led implementing organization, guiding priorities, execution, and community engagement. Be A Number provides strategic support, infrastructure investment, and long-term systems development alongside YDO's leadership.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This collaborative model ensures that programs are community-driven, locally owned, institutionally strengthened, and sustainable over the long term.
              </p>
              <Link
                href="/partnership"
                className="inline-block px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium"
              >
                Learn About Our Partnership
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Combined Impact</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Through this partnership, community systems in Northern Uganda are being strengthened across multiple dimensions:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Education infrastructure and scholarship support expanding access to learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vocational training aligned with local job creation and economic opportunity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Health initiatives integrated with education and family support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community leadership structures reinforced to ensure long-term sustainability</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm italic leading-relaxed">
                All impact is locally implemented and community-owned, with YDO serving as the primary on-the-ground organization driving outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              YDO's programs contribute to measurable outcomes in education, skills development, and community well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">Education</div>
              <p className="text-gray-700 text-lg mb-4">Scholarships & Support</p>
              <p className="text-gray-600">
                Providing educational opportunities and advocacy for vulnerable children, ensuring access to quality education from early childhood through secondary levels.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">Training</div>
              <p className="text-gray-700 text-lg mb-4">Vocational & Life Skills</p>
              <p className="text-gray-600">
                Equipping youth and adults with practical skills and psycho-social support, creating pathways to employment and self-sufficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">Advocacy</div>
              <p className="text-gray-700 text-lg mb-4">Rights & Welfare</p>
              <p className="text-gray-600">
                Promoting children's rights, supporting vulnerable families, and mobilizing communities for sustainable development.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/impact"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium text-lg"
            >
              See Our Full Impact
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us in Empowering Communities</h2>
          <p className="text-lg text-orange-50 mb-8 leading-relaxed">
            Whether you're interested in partnering, volunteering, or learning more about our work, we'd love to hear from you.
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
              <p className="text-sm text-gray-400">
                Empowering communities in post-conflict Northern Uganda through education, training, and advocacy.
              </p>
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
              <p className="text-sm text-gray-400 mb-2">
                Omoro District, Northern Uganda
              </p>
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