import './Campus.css'
import gallery_1 from '../../assets/images/gallery-1.jpg'
import gallery_2 from '../../assets/images/gallery-2.jpg'
import gallery_3 from '../../assets/images/gallery-3.jpg'
import gallery_4 from '../../assets/images/gallery-4.jpg'
import white_arrow_right from '../../assets/images/white-arrow-right.png'



const Campus = () => {
    return (
        <div className="campus">
            <div className="gallery">
                <img src={gallery_1} alt=""/>
                <img src={gallery_2} alt=""/>
                <img src={gallery_3} alt=""/>
                <img src={gallery_4} alt=""/>
            </div>
            <button className="btn dark-btn">See more here <img src={white_arrow_right} alt=""/></button>
        </div>
    );
};

export default Campus;
