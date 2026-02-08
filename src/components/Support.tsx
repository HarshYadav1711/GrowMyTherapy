import Image from 'next/image';

export default function Support() {
    const struggles = [
        "Racing thoughts or constant worry that won't quiet down",
        "Feeling exhausted despite handling everything on the outside",
        "Difficulty sleeping or persistent physical tension",
        "A sense of always bracing for something to go wrong",
        "Feeling stuck in overthinking or emotional numbness",
    ];

    return (
        <section className="section bg-[var(--color-secondary-dark)]">
            <div className="container mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content - Image */}
                    <div className="relative">
                        <div className="aspect-[3/4] relative">
                            <Image
                                src="/images/support.svg"
                                alt="Person finding a moment of calm and relief"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-light mb-8">
                            You don&apos;t have to do this all <em>alone.</em>
                        </h2>
                        <p className="text-[var(--color-text-light)] text-lg mb-6">
                            If you&apos;re facing any of these, there&apos;s hope:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {struggles.map((struggle, index) => (
                                <li
                                    key={index}
                                    className="text-[var(--color-text-light)] text-lg flex items-start gap-3"
                                >
                                    <span className="text-[var(--color-accent)] mt-1">•</span>
                                    {struggle}
                                </li>
                            ))}
                        </ul>
                        <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
                            With empathy and guidance, we&apos;ll work together to navigate the
                            challenges life throws your way. You deserve support that meets
                            you where you are.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
