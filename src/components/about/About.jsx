import './About.css'
import about_img from '../../assets/images/about.jpg'
import play_icon from '../../assets/images/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolores modi natus reprehenderit suscipit. Adipisci alias commodi deserunt dolores doloribus exercitationem incidunt quibusdam repudiandae totam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis dicta earum enim, est exercitationem maiores nobis non nostrum numquam, quod reprehenderit! Accusantium consectetur delectus harum iste mollitia, nisi quia?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias asperiores delectus deserunt dignissimos, dolore dolorem earum incidunt inventore molestias natus nisi nostrum optio quaerat ratione, repellat rerum temporibus totam vel! Distinctio, ea maxime?</p>
            </div>
        </div>
    );
};

export default About;
