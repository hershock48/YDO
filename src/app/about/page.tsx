import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Youth Development Organisation Uganda (YDO), our mission, leadership, and commitment to empowering post-war communities in Northern Uganda.",
};

export default function About() {
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
              <Link href="/about" className="text-orange-600 font-medium">About</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Youth Development Organisation</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A community-based organization in Northern Uganda focused on rehabilitation and empowerment in post-conflict regions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Youth Development Organisation Uganda (YDO) is a community-based organization in Gulu District, Northern Uganda, led by local community members and committed to the long-term rehabilitation and empowerment of war-affected communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                YDO designs and implements programs in education, psycho-social support, vocational training, life-skills development, and child welfare advocacy — strengthening families, protecting children, and building community resilience from within.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                YDO operates as an independent Ugandan organization, grounded in local leadership, local priorities, and community ownership.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dignity:</strong> Every person deserves respect and the opportunity to thrive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Sustainability:</strong> Building programs that continue beyond our involvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Community Ownership:</strong> Local leadership guides all initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Transformation:</strong> Long-term change over short-term relief</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              YDO envisions a future where post-conflict communities are fully rehabilitated, children are protected from armed conflict, and families have access to the education, skills, and support needed to thrive.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our work is built on the conviction that lasting transformation emerges from within communities themselves — when local leaders, families, and youth are equipped to shape their own future. Every program we implement reflects local priorities, strengthens existing community assets, and builds systems that endure beyond external support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our approach prioritizes:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">1</div>
                <div>
                  <strong className="text-gray-900">Investing in community leadership and ownership</strong> — Local leaders set priorities and guide implementation
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">2</div>
                <div>
                  <strong className="text-gray-900">Expanding education access and support</strong> — Scholarships, school supplies, and academic advocacy
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">3</div>
                <div>
                  <strong className="text-gray-900">Promoting economic and workforce opportunity</strong> — Vocational training connected to livelihood pathways
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">4</div>
                <div>
                  <strong className="text-gray-900">Advocating for children's rights and community well-being</strong> — Protection, support, and empowerment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Leadership</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-8 md:p-12 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Simon Peter Wilobo</h3>
              <p className="text-lg text-gray-700 mb-4 font-medium">Founder and Head of YDO</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Simon Peter Wilobo brings lived experience from Northern Uganda's post-conflict transition. His history of community service, child sponsorship programs, and development work grounds YDO's operations in local insight and resilience building.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Under his leadership, YDO has become a trusted community partner, implementing programs that reflect local priorities and build on existing strengths. His commitment to empowering youth and vulnerable populations drives YDO's mission of creating protective environments where communities can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Led</h3>
              <p className="text-gray-700 leading-relaxed">
                All programs are designed with and guided by local community leaders who understand the unique needs and priorities of their communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Holistic Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                Education, vocational training, psycho-social support, and advocacy work together to address the interconnected needs of post-conflict communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                We build programs that reduce dependency on external aid and strengthen community resilience for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Involved</h2>
          <p className="text-lg text-orange-50 mb-8 leading-relaxed">
            Learn more about our programs or find out how you can support our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
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
                Empowering communities in post-conflict Northern Uganda.
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