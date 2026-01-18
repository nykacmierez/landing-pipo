import Invitation from "../components/Invitation";
import RSVPForm from "../components/RSVPForm";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Countdown />
            <Invitation />
            <Gallery />
            <Location />
            <RSVPForm />
            <Footer />
        </>
    );
}
