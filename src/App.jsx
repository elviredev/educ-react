import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Programs from "./components/programs/Programs.jsx";
import Title from "./components/title/Title.jsx";
import About from "./components/about/About.jsx";
import Campus from "./components/campus/Campus.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import VideoPlayer from "./components/video-player/VideoPlayer.jsx";
import {useState} from "react";

const App = () => {

    // Play video in About component
    const [playState, setPlayState] = useState(false)

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subtitle="Our program" title="What We Offer"/>
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subtitle="Gallery" title="Campus Photos"/>
                <Campus />
                <Title subtitle="Testimonials" title="What Student Says"/>
                <Testimonials />
                <Title subtitle="Contact us" title="Get In Touch"/>
                <Contact />
                <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </div>
    );
};

export default App;
