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
        <section className="relative w-full bg-black text-white py-20">
            <div className="relative z-10 max-w-[1400px] mx-auto px-10">
                {/* Heading */}
                <h2 className="text-center text-4xl md:text-[56px] font-medium leading-[1.1] max-w-5xl mx-auto tracking-tight">
                    The World’s #1 AI Cloud Platform,
                    <br />
                    Purpose-Built for What’s Next
                </h2>

                {/* Center Graphic */}
                <div className="flex justify-center items-center my-12">
                    <Image
                        src="/stats.gif"
                        alt="stats background"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>

                {/* Stats Row */}
                {/* Changed gap-36 to a smaller gap and used border-gray-800 for a subtler line */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="relative pt-8 border-t border-white/20"
                        >
                            {/* Number - Adjusted size and font weight */}
                            <h3
                                className="text-6xl md:text-[100px] font-light tracking-tighter leading-none inline-block text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, #BEDD00 0%, #0095B6 100%)',
                                }}
                            >
                                {item.value}
                            </h3>

                            {/* Label & Description - Grouped for alignment */}
                            <div className="mt-6 max-w-[200px]">
                                <p className="text-[15px] text-white font-medium mb-1">
                                    {item.label}{' '}
                                    <span className="text-gray-400 font-normal">
                                        {item.desc}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
