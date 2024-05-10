/**
 * Composant générique représentant une carte
 * @param {string} image
 * @param {string} name
 * @param {string} address
 * @param {string} body
 */
const Card = ({image, name, address, body}) => {
    return (
        <div className="slide">
            <div className="user-info">
                <img src={image} alt=""/>
                <div>
                    <h3>{name}</h3>
                    <span>{address}</span>
                </div>
            </div>
            <p>{body}</p>
        </div>

    );
};

export default Card;
