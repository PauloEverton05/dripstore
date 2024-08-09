import "../styles/Oferta.css";
import tenis from "../assets/air-jordan.png";

export default function Promocao() {
    return (
        <div className="promotion">
            
            <div className="img-shoe">
                <img src={tenis} alt="Tênis da nike"/>
            </div>

            <div className="container">
                <h2 className="title-text">Promoção Especial</h2>
                <h1 className="product-name">Air Jordan edição de colecionador</h1>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur reprehenderit voluptatibus totam, natus veritatis!
                </p>
                <button className="button">
                    ver oferta
                </button>
            </div>
        </div>
    );
}
