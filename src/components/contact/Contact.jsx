import './Contact.css';
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow-right.png'
import {useState} from "react";


const Contact = () => {

    /**
     * Utilisation de Web3Forms : adresse email = elviredev@gmail.com
     * https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
     */
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9f5e23cb-fc1b-4eff-9b5b-24bb6d0e64b5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt=""/></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci error expedita qui reprehenderit temporibus velit. Corporis distinctio facilis fugiat laboriosam magni, maiores minima, nam nisi quos saepe, tempore voluptate.</p>
                <ul>
                    <li><img src={mail_icon} alt=""/>contact@contact.com</li>
                    <li><img src={phone_icon} alt=""/>+1 234-456-7890</li>
                    <li><img src={location_icon} alt=""/>77 Massachussets Ave, Cambridge<br /> MA 02139, United State</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    {/* Optionnel pour customiser Web3Forms */}
                    <input type="hidden" name="from_name" value="Mail Site Educ React"/>
                    <input type="hidden" name="subject" value="Nouveau mail de votre site"/>
                    {/* Form */}
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' required/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone" required/>
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
