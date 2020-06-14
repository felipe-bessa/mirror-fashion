//PÁGINA SOBRE
import React from 'react';

import './styles.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Image } from '../../components/Image';
import centroDistribuicaoImage from '../../assets/centro-distribuicao.png';
import familiaPelhoImage from '../../assets/familia-pelho.jpg';

export default function About() {
  return(
    <div>
      <Header />
      <article className="container">
        <section id="intro">
          <h1>A Mirror Fashion</h1>
          <p className="aboutContent aboutTextFormat">
            A <strong>Mirror Fashion</strong> é a maior empresa de comércio eletrônico no segmento de moda em todo mundo. Fundada em 1932, possui filiais em 124 países, sendo líder de mercado com mais de 90% de participação em 118 deles.
          </p>
          <p className="aboutContent aboutTextFormat">
            Nosso centro de distribuição fica em <a href="https://maps.google.com.br/?q=Jacarezinho">Jacarezinho, no Paraná</a>. De lá, saem 48 aviões que distribuem nossos produtos às casas do mundo todo. Nosso centro de distribuição:
          </p>
          <Image id="centro-distribuicao"
                 src={centroDistribuicaoImage} 
                 alt="Foto do centro de distribuição da Mirror Fashion" 
                 description="Centro de distribuição da Mirror Fashion"
                 marginLeft="auto"
                 marginRight="auto"
                 width="550px" />
          <p className="aboutContent aboutTextFormat">
            Compre suas roupas e acessórios na Mirror Fashion. Acesse <a href="/">nossa loja</a> ou entre em contato se tiver dúvidas. Conheça também nossa <a href="#historia">história</a> e nossos <a href="#diferenciais">diferenciais</a>.
          </p>
        </section>
        <section id="historyArea">
          <h2 id="historia" className="subTitle">História</h2>
          <Image id="familia-pelho"
                 src={familiaPelhoImage} 
                 alt="Foto da família Pelho"
                 description="Família Pelho" />
          <p className="aboutContent aboutTextFormat">
            A fundação em 1932 ocorreu no momento da descoberta econômica do interior do Paraná. A família Pelho, tradicional da região, investiu todas as suas economias nessa nova iniciativa, revolucionária para a época. O fundador <em>Eduardo Simões Pelho</em>, dotado de particular visão administrativa, guiou os negócios da empresa durante mais de 50 anos, muitos deles ao lado de seu filho <em>E. S. Pelho Filho</em>, atual CEO. O nome da empresa é inspirado no nome da família.
          </p>
          <p className="aboutContent aboutTextFormat">
            O crescimento da empresa foi praticamente instantâneo. Nos primeiros 5 anos, já atendia 18 países. Bateu a marca de 100 países em apenas 15 anos de existência. Até hoje, já atendeu 740 milhões de usuários diferentes, em bilhões de diferentes pedidos.
          </p>
          <p className="aboutContent aboutTextFormat">
            o crescimento em nḿero de funcionários é também assombroso. hoje, é a maior empregadora do Brasil, há 240 mil funcionários, além dos 890 mil brasileiros nas instalações de Jacarezinho e nos escritórios em todo país.
          </p>
          <p className="aboutContent aboutTextFormat">
            Dada a importância econômica da empresa para o Brasil, a família Pelho já recebeu diversos prêmios, homenagens e condecorações. Todos os presidentes do Brasil já visitaram as instalações da Mirror Fashion, além de presidentes da União Européia, Asia e o secretário-geral da ONU.
          </p>
        </section>
        <section id="diferentialArea">
          <h2 id="diferenciais" className="subTitle">Diferenciais</h2>
          <ul className="aboutContent">
            <li>Menor preço do varejo, garantido</li>
            <li>Se você achar uma loja mais barata, leva o produto de graça</li>
            <li>Maior comércio eletrônico de moda do mundo</li>
            <li>Atendimento via telefone, email, chat, twitter, facebook, carta, fax e telegrama</li>
            <li>Presente em 124 países</li>
            <li>Mais de um milhão de funcionários em todo o mundo</li>
          </ul>
        </section>
      </article>
      <Footer />
    </div>
  );
}