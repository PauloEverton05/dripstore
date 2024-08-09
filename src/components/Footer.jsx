import "../styles/Footer.css";
import DigCol from '../assets/icon-digital-college.png';
import facebook from '../assets/logo-facebook.png';
import instagram from '../assets/logo-instagram.png';
import twitter from '../assets/logo-twitter.png';

export default function Footer() {
    return  (
    <>
      <footer className="footer-background footer-text-color footer-padding">

      <div className="footer-container footer-flex footer-space-around">
          <div className="footer-column">
              <div className="footer-logo-title">
                  <img src={DigCol} alt=""/>
                  <h3 className="footer-title">Digital Store</h3>
              </div>

              <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

              <div className="footer-icons footer-item-spacing">
                  <img src={facebook} alt="logo do facebook"/>
                  <img src={instagram} alt="logo do instagram"/>
                  <img src={twitter} alt="logo do twitter"/>
              </div>
          </div>

          <div className="footer-column">
              <h4 className="footer-heading">Informação</h4>

              <ul className="footer-list">
                  <li className="footer-list-item"><a href="#">Sobre Drip Store</a></li>
                  <li className="footer-list-item"><a href="#">Segurança</a></li>
                  <li className="footer-list-item"><a href="#">Wishlist</a></li>
                  <li className="footer-list-item"><a href="#">Blog</a></li>
                  <li className="footer-list-item"><a href="#">Trabalhe conosco</a></li>
                  <li className="footer-list-item"><a href="#">Meus Pedidos</a></li>
              </ul>
          </div>

          <div className="footer-column">
              <h4 className="footer-heading">Categorias</h4>

              <ul className="footer-list">
                  <li className="footer-list-item"><a href="#">Camisetas</a></li>
                  <li className="footer-list-item"><a href="#">Calças</a></li>
                  <li className="footer-list-item"><a href="#">Bonés</a></li>
                  <li className="footer-list-item"><a href="#">Headphones</a></li>
                  <li className="footer-list-item"><a href="#">Tênis</a></li>
              </ul>
          </div>

          <div className="footer-column footer-contact">
              <h4 className="footer-heading">Contato</h4>

              <p className="footer-contact-text">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p className="footer-contact-text">(85) 3051-3411</p>
          </div>
      </div>
  </footer>

   <div className="footer-background footer-text-color footer-center footer-small-padding">
   <hr className="footer-line" />
      <p className="rights-reserved">© 2022 Digital Store</p>
  </div>
  </>
    )
}
