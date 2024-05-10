import './Hero.css'
import right_arrow from '../../assets/images/right-arrow.svg'

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic fielf of eduction.</p>
                <button className="btn">Explore more <img src={right_arrow} alt=""/></button>
            </div>
        </div>
    );
};

export default Hero;
