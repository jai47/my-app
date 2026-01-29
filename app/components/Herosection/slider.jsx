import Image from 'next/image';

const logos = [
    '/logo/cisco.png',
    '/logo/dell.png',
    '/logo/google.png',
    '/logo/qualcomm.png',
    '/logo/broadcom.png',
];

const Slider = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10" />

            {/* marquee wrapper */}
            <div className="flex whitespace-nowrap">
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="mx-14 flex items-center shrink-0"
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            width={120}
                            height={60}
                            className="object-contain grayscale opacity-70 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
