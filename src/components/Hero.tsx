import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen bg-[var(--background)] pt-24">
            <div className="container mx-auto px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h1 className="text-[var(--color-primary)] text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                            Therapy for Anxiety,<br />
                            Trauma & Burnout
                        </h1>
                        <p className="text-[var(--color-text-light)] text-lg md:text-xl mb-4">
                            Licensed Clinical Psychologist serving adults in-person and via California telehealth
                        </p>
                        <p className="text-[var(--color-accent)] text-lg font-medium mb-8">
                            Santa Monica, CA
                        </p>
                        <Link
                            href="#contact"
                            className="btn btn-primary inline-flex items-center gap-2"
                        >
                            Schedule a Consultation
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                    {/* Right Content - Decorative Images */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative w-full max-w-md mx-auto lg:ml-auto">
                            {/* Main Arch Image */}
                            <div className="arch-frame aspect-[3/4] relative bg-[var(--background-card)]">
                                <Image
                                    src="/images/hero-main.svg"
                                    alt="Calm botanical arrangement representing peace and growth"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Circular Overlay Image */}
                            <div className="absolute -bottom-8 -right-8 lg:-right-16 w-32 h-32 md:w-40 md:h-40 circle-frame shadow-lg">
                                <Image
                                    src="/images/hero-circle.svg"
                                    alt="Peaceful natural element"
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
