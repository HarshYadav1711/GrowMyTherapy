import Image from 'next/image';

export default function OurOffice() {
    return (
        <section id="office" className="section bg-white">
            <div className="container mx-auto px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-light italic mb-6">
                        A Calm Space for Therapy
                    </h2>
                    <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto leading-relaxed">
                        My Santa Monica office is a quiet, private space designed to feel
                        calm and grounding. With natural light and a comfortable, uncluttered
                        environment, clients often share that the space itself helps them
                        feel more at ease when they arrive.
                    </p>
                </div>

                {/* Office Images Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
                        <Image
                            src="/images/office-1.svg"
                            alt="Therapy office with natural light and comfortable seating"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
                        <Image
                            src="/images/office-2.svg"
                            alt="Calm and welcoming therapy environment"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="aspect-[4/3] relative rounded-sm overflow-hidden">
                        <Image
                            src="/images/office-3.svg"
                            alt="Private, grounding space for therapy sessions"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                </div>

                {/* Telehealth Note */}
                <div className="bg-[var(--background)] p-8 text-center rounded-sm">
                    <p className="text-[var(--color-text-light)] text-lg leading-relaxed">
                        I also offer <strong className="text-[var(--color-primary)]">secure telehealth sessions</strong> for
                        clients located anywhere in California—bringing the same focused,
                        supportive experience to wherever you feel most comfortable.
                    </p>
                </div>
            </div>
        </section>
    );
}
