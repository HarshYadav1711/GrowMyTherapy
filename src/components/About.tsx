import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="section bg-[var(--background)]">
            <div className="container mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                            Hi, I&apos;m Dr. Maya Reynolds.
                        </h2>
                        <p className="text-[var(--color-text-light)] text-lg mb-6 leading-relaxed">
                            I&apos;m a licensed clinical psychologist based in Santa Monica,
                            offering therapy for adults who feel overwhelmed by anxiety, stress,
                            or the lingering effects of past experiences. Many of the people I
                            work with are high-achieving, thoughtful, and self-aware—but internally
                            feel exhausted, stuck in overthinking, or emotionally on edge.
                        </p>
                        <p className="text-[var(--color-text-light)] text-lg mb-8 leading-relaxed">
                            I take a warm, collaborative, and grounded approach to therapy.
                            Sessions are structured enough to feel supportive, while still
                            leaving space for reflection and depth.
                        </p>
                        <Link
                            href="#contact"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            Let&apos;s Chat
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                    {/* Right Content - Decorative Images */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto lg:ml-auto">
                            {/* Main Arch Image */}
                            <div className="arch-frame aspect-[3/4] relative bg-[var(--background-card)]">
                                <Image
                                    src="/images/about-main.svg"
                                    alt="Dr. Maya Reynolds, Clinical Psychologist"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Circular Overlay Image */}
                            <div className="absolute -bottom-8 -right-8 lg:-right-16 w-32 h-32 md:w-40 md:h-40 circle-frame shadow-lg bg-white">
                                <Image
                                    src="/images/about-circle.svg"
                                    alt="Calming natural element"
                                    fill
                                    className="object-cover"
                                    sizes="160px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
