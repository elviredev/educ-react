import './Testimonials.css'
import next_icon from '../../assets/images/white-arrow-right.png'
import back_icon from '../../assets/images/white-arrow -left.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'
import {useRef} from "react";
import Card from "./Card.jsx";

const Testimonials = () => {

    const data = [
        {
            id: 1,
            image: user_1,
            name: 'William Jackson',
            address: 'University, Ohio',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eius iste nostrum, quisquam sapiente sint veniam! Aperiam asperiores deleniti ea, est incidunt iusto laboriosam, non obcaecati officiis possimus quisquam repellat sequi, temporibus tenetur voluptate voluptatem.'
        },
        {
            id: 2,
            image: user_2,
            name: 'Janet Jackson',
            address: 'Cambridge, US',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eius iste nostrum, quisquam sapiente sint veniam! Aperiam asperiores deleniti ea, est incidunt iusto laboriosam, non obcaecati officiis possimus quisquam repellat sequi, temporibus tenetur voluptate voluptatem.'
        },
        {
            id: 3,
            image: user_3,
            name: 'Paul Smith',
            address: 'Oxford, US',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eius iste nostrum, quisquam sapiente sint veniam! Aperiam asperiores deleniti ea, est incidunt iusto laboriosam, non obcaecati officiis possimus quisquam repellat sequi, temporibus tenetur voluptate voluptatem.'
        },
        {
            id: 4,
            image: user_4,
            name: 'June Doe',
            address: 'Univerity, Boston',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eius iste nostrum, quisquam sapiente sint veniam! Aperiam asperiores deleniti ea, est incidunt iusto laboriosam, non obcaecati officiis possimus quisquam repellat sequi, temporibus tenetur voluptate voluptatem.'
        }
    ]


    // Sélectionner le tag <ul>
    const slider = useRef(null);
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25
        }
        // console.log(tx)
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25
        }
        // console.log(tx)
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    {data.map((item) => (
                        <li key={item.id}>
                            <Card
                                image={item.image}
                                name={item.name}
                                address={item.address}
                                body={item.body}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
