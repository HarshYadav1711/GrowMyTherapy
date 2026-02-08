import Image from 'next/image';
import Link from 'next/link';

export default function PainPoints() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                            Life can feel overwhelming.
                        </h2>
                        <p className="text-[var(--color-text-light)] text-lg mb-6 leading-relaxed">
                            Especially when you&apos;re trying to balance your personal and professional
                            life while dealing with anxiety, stress, or the weight of past experiences.
                        </p>
                        <p className="text-[var(--color-text-light)] text-lg mb-8 leading-relaxed">
                            It&apos;s easy to feel like you&apos;re alone in facing these challenges.
                            You might appear &quot;functional&quot; on the outside while quietly struggling
                            with constant worry, tension in your body, or a sense that you&apos;re always
                            bracing for something to go wrong.
                        </p>
                        <div className="pt-4 border-t border-[var(--color-secondary-dark)]">
                            <Link
                                href="#contact"
                                className="text-[var(--color-primary)] text-sm uppercase tracking-widest hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-2"
                            >
                                Get in Touch
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Lifestyle Image */}
                    <div className="relative">
                        <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
                            <Image
                                src="/images/pain-points.svg"
                                alt="Peaceful workspace with journal and warm coffee, representing self-reflection"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
