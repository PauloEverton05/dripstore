import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomePage.css';
import ColecoesDestaque from '../components/ColecoesDestaque'
import CardProduto from '../components/CardProduto'
import Oferta from '../components/Oferta'
import Carousel from '../components/Carousel'


const HomePage = () => (
  <>
    <Header />
    <main className="home">

      <Carousel/>

      <ColecoesDestaque/>

      <div className="container-card">
      <CardProduto/>
      <CardProduto/>
      <CardProduto/>
      <CardProduto/>
      <CardProduto/>
      <CardProduto/>
      <CardProduto/>
      <CardProduto/>
      </div>

      <Oferta/>
      
    </main>
    <Footer />
  </>
);

export default HomePage;