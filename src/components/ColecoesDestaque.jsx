import '../styles/ColecoesDestaque.css';
import shoeCard from '../assets/shoe-cards.png';
import shirt from '../assets/shirt.png';
import headphone from '../assets/headphone.png';
import redShirt from '../assets/red-shirt.png';
import pants from '../assets/pants.png';
import smallheadphone from '../assets/smallheadphone.png';
import sneakers from '../assets/sneakers.png';

export default function Destaque() {
    return (
        <>
            <section className="section-featured">
                <div className="divFeatured">
                    <p className="paragraphCollection">Coleções em destaque</p>
                    <div className="divFeatured1">
                        <div className="divFeaturedPromo1">
                            <div className="textFeatured">
                                <p className="paragraphFeatured">30% OFF</p>
                                <h3 className="h3Featured">Novo drop Supreme</h3>
                                <a href="/produtos" className="buttonBuy">Comprar</a>
                            </div>
                            <img src={shirt} alt="Camiseta" />
                        </div>
                        <div className="divFeaturedPromo1">
                            <div className="textFeatured">
                                <p className="paragraphFeatured">30% OFF</p>
                                <h3 className="h3Featured">Coleção Adidas</h3>
                                <a href="/produtos" className="buttonBuy">Comprar</a>
                            </div>
                            <img src={shoeCard} alt="Tênis Branco" />
                        </div>
                        <div className="divFeaturedPromo1">
                            <div className="textFeatured">
                                <p className="paragraphFeatured">30% OFF</p>
                                <h3 className="h3Featured">Novo Beats Bass</h3>
                                <a href="/produtos" className="buttonBuy">Comprar</a>
                            </div>
                            <img src={headphone} alt="Headphone" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="divFeatured2">
                <p className="collectionP">Coleções em destaque</p>
                <div className="featuredCollections">
                    <div className="featuredCollections1">
                        <div className="divImage">
                            <a href="/produtos"><img src={redShirt} className="collections" alt="Camiseta Vermelha" /></a>
                        </div>
                        <p className="itemsFeatured">Camisetas</p>
                    </div>

                    <div className="featuredCollections1">
                        <div className="divImage">
                            <a href="/produtos"><img src={pants} className="collections" alt="Calça" /></a>
                        </div>
                        <p className="itemsFeatured">Calças</p>
                    </div>

                    <div className="featuredCollections1">
                        <div className="divImage">
                            <a href="/produtos"><img src={pants} className="collections" alt="Boné" /></a>
                        </div>
                        <p className="itemsFeatured">Bonés</p>
                    </div>

                    <div className="featuredCollections1">
                        <div className="divImage">
                            <a href="/produtos"><img src={smallheadphone} className="collections" alt="Headphones" /></a>
                        </div>
                        <p className="itemsFeatured">Headphones</p>
                    </div>

                    <div className="featuredCollections1">
                        <div className="divImage">
                            <a href="/produtos"><img src={sneakers} className="collections" alt="Tênis" /></a>
                        </div>
                        <p className="itemsFeatured">Tênis</p>
                    </div>
                </div>
            </section>
        </>
    );
}
