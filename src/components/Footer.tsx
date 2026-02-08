import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-[var(--color-primary)] text-white">
            <div className="container mx-auto px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-xl font-medium mb-6">
                            Get in Touch
                        </h3>
                        <div className="space-y-4 text-white/80">
                            <p>
                                <strong className="text-white">Address:</strong><br />
                                123th Street 45 W<br />
                                Santa Monica, CA 90401
                            </p>
                            <p>
                                <strong className="text-white">Phone:</strong><br />
                                <a
                                    href="tel:+13105551234"
                                    className="hover:text-white transition-colors"
                                >
                                    (310) 555-1234
                                </a>
                            </p>
                            <p>
                                <strong className="text-white">Email:</strong><br />
                                <a
                                    href="mailto:hello@drmayareynolds.com"
                                    className="hover:text-white transition-colors"
                                >
                                    hello@drmayareynolds.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xl font-medium mb-6">
                            Quick Links
                        </h3>
                        <nav className="space-y-3">
                            <Link
                                href="#about"
                                className="block text-white/80 hover:text-white transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#services"
                                className="block text-white/80 hover:text-white transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="#office"
                                className="block text-white/80 hover:text-white transition-colors"
                            >
                                Our Office
                            </Link>
                            <Link
                                href="#faq"
                                className="block text-white/80 hover:text-white transition-colors"
                            >
                                FAQ
                            </Link>
                        </nav>
                    </div>

                    {/* Schedule CTA */}
                    <div>
                        <h3 className="text-white text-xl font-medium mb-6">
                            Ready to Begin?
                        </h3>
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Schedule a free 15-minute consultation to see if we&apos;re a good fit
                            to work together.
                        </p>
                        <a
                            href="mailto:hello@drmayareynolds.com?subject=Consultation Request"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] text-sm uppercase tracking-widest hover:bg-white/90 transition-colors"
                        >
                            Schedule Now
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
                    <p>
                        © {currentYear} Dr. Maya Reynolds, PsyD. All rights reserved.
                    </p>
                    <p className="mt-2">
                        Licensed Clinical Psychologist | Santa Monica, CA | California Telehealth
                    </p>
                </div>
            </div>
        </footer>
    );
}
