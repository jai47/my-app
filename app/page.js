import Header from './components/navbar/header';
import Footer from './components/footer/footer';
import Herosection from './components/Herosection/herosection';
import Stats from './components/stats/stats';
import PlatformSuite from './PlatformSuits/platformSuits';
import CorePillars from './PlatformSuits/CorePillars';
import RealOutcomes from './PlatformSuits/RealOutcomes';
import Trustedby from './PlatformSuits/Trustedby';
import PartnersEcosystem from './PlatformSuits/PartnersEcosystem';
import LearningCenter from './PlatformSuits/Learning';
import LastSection from './PlatformSuits/LastSection';
import TrustedEnterprises from './PlatformSuits/TrustedEnterprises';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Header />
            <Herosection />
            <Stats />
            <PlatformSuite />
            <CorePillars />
            <RealOutcomes />
            <Trustedby />
            <PartnersEcosystem />
            <LearningCenter />
            <TrustedEnterprises />
            <LastSection />
            <Footer />
        </div>
    );
}
