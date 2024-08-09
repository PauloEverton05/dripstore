import whiteSneakers from "../assets/nike-shoe-frontpage.png";
import '../styles/Carousel.css';

export default function Banner() {
    return (
        <>
            <section className="carousel-container">
                <div className="sale-section">
                    <div className="sale-content">
                        <span>Melhores ofertas personalizadas</span>
                        <h1>Queima de<br/>estoque Nike 🔥</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, repellat. Ipsam blanditiis vitae perferendis impedit.</p>
                        <button className="carousel-button">Ver Ofertas</button>
                    </div>
                    <div className="decoration"></div>
                    <div className="sale-image"><img src={whiteSneakers} alt="white nike sneaker" /></div>
                </div>
            </section>
        </>
    )
}
