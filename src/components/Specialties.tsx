import Image from 'next/image';

const specialties = [
    {
        title: "Anxiety & Panic",
        description: "Constant worry, tension in your body, difficulty sleeping, or always bracing for something to go wrong—these are signs your nervous system needs support.",
        image: "/images/specialty-anxiety.svg",
        alt: "Person finding calm through mindfulness"
    },
    {
        title: "Trauma Recovery",
        description: "Whether from a single incident or long-standing patterns from childhood, relationships, or chronic stress, healing happens at your own pace with an emphasis on safety and stabilization.",
        image: "/images/specialty-trauma.svg",
        alt: "Peaceful moment of self-reflection"
    },
    {
        title: "Burnout & Perfectionism",
        description: "For entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through. Therapy can be a space to slow down and reconnect.",
        image: "/images/specialty-burnout.svg",
        alt: "Professional taking time for self-care"
    }
];

export default function Specialties() {
    return (
        <section id="services" className="section bg-[var(--background)]">
            <div className="container mx-auto px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl font-light italic">
                        My Specialties
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((specialty, index) => (
                        <div
                            key={index}
                            className="card bg-[var(--background-card)] p-8 flex flex-col"
                        >
                            <h3 className="text-[var(--color-primary)] text-xl font-medium mb-4">
                                {specialty.title}
                            </h3>
                            <p className="text-[var(--color-text-light)] text-base mb-8 leading-relaxed flex-grow">
                                {specialty.description}
                            </p>
                            <div className="circle-frame w-48 h-48 mx-auto relative">
                                <Image
                                    src={specialty.image}
                                    alt={specialty.alt}
                                    fill
                                    className="object-cover"
                                    sizes="192px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
