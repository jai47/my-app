import Image from 'next/image';

const stats = [
    {
        value: '10K+',
        label: 'GPUs Managed.',
        desc: 'Lorem Ipsum is simply dummy text',
    },
    {
        value: '60%',
        label: 'TCO Savings.',
        desc: 'Lorem Ipsum is simply dummy text',
    },
    {
        value: '50%',
        label: 'Faster Deployment.',
        desc: 'Lorem Ipsum is simply dummy text',
    },
    {
        value: '99.9%',
        label: 'Uptime SLA.',
        desc: 'Lorem Ipsum is simply dummy text',
    },
];

const Stats = () => {
    return (
        <section className="relative w-full bg-black text-white py-10 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* heading */}
                <h2 className="text-center text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
                    The World’s #1 AI Cloud Platform,
                    <br />
                    <span className="block mt-2">
                        Purpose-Built for What’s Next
                    </span>
                </h2>

                <div className="flex justify-center items-center">
                    <Image
                        src="/stats.gif"
                        alt="stats background"
                        width={600}
                        height={600}
                        className="object-contain"
                    />
                </div>

                {/* stats row */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-14 text-center">
                    {stats.map((item, index) => (
                        <div key={index} className="relative">
                            {/* divider */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/20" />

                            {/* number */}
                            <h3 className="text-5xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                                {item.value}
                            </h3>

                            {/* label */}
                            <p className="mt-4 text-sm text-white font-medium">
                                {item.label}
                            </p>

                            {/* description */}
                            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
