import { MapPin, Clock3, Star, Utensils, Instagram, Phone, ArrowUpRight } from "lucide-react";
import { restaurant } from "./data/restaurant";

export default function App() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`;

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Restaurante Alê - início">
          <span className="brand-mark"><Utensils size={20} /></span>
          <span>Restaurante <b>Alê</b></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#visite">Como chegar</a>
        </nav>
        <a className="nav-cta" href={mapsUrl} target="_blank" rel="noreferrer">Encontrar <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow"><span className="eyebrow-dot" /> SABOR BRASILEIRO EM ITAQUAQUECETUBA</span>
          <h1>Comida boa tem<br /><em>gosto de casa.</em></h1>
          <p>Um lugar para fazer uma pausa, aproveitar uma boa refeição e se sentir à vontade.</p>
          <div className="hero-actions">
            <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">Ver localização <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#sobre">Conheça o restaurante <span>↓</span></a>
          </div>
          <div className="hero-rating">
            <span className="stars" aria-label="Avaliação 4,7 de 5"><Star /><Star /><Star /><Star /><Star /></span>
            <strong>{restaurant.rating}/5</strong>
            <span>({restaurant.reviewCount} avaliações)</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustração decorativa de uma refeição">
          <div className="art-circle art-circle-one" />
          <div className="art-circle art-circle-two" />
          <div className="plate">
            <div className="plate-inner">
              <span className="food food-rice" />
              <span className="food food-beans" />
              <span className="food food-greens" />
              <span className="food food-tomato" />
              <span className="food food-protein" />
            </div>
          </div>
          <span className="art-note">Feito para<br />aproveitar.</span>
        </div>
        <div className="hero-bottom"><span>PARQUE RES. MARENGO</span><span>ITAQUAQUECETUBA · SP</span></div>
      </section>

      <section className="quick-info" aria-label="Informações do restaurante">
        <article><span className="info-icon"><Star size={19} /></span><div><small>AVALIAÇÃO</small><strong>{restaurant.rating} <span>({restaurant.reviewCount})</span></strong></div></article>
        <article><span className="info-icon"><Utensils size={19} /></span><div><small>COZINHA</small><strong>{restaurant.category}</strong></div></article>
        <article><span className="info-icon"><span className="price-symbol">R$</span></span><div><small>FAIXA DE PREÇO</small><strong>{restaurant.priceRange}</strong></div></article>
        <article><span className="info-icon"><Clock3 size={19} /></span><div><small>HORÁRIOS</small><strong>Churrascaria: Seg. a Sáb. · 10h às 15h<br />Pizzaria: Ter. a Dom. · 18h às 23h</strong></div></article>
      </section>

      <section className="about section-wrap" id="sobre">
        <div className="section-kicker">01 — SOBRE O RESTAURANTE</div>
        <div className="about-grid">
          <h2>Um cantinho de<br /><em>comida brasileira.</em></h2>
          <div className="about-copy">
            <p>O Restaurante Alê fica no Parque Residencial Marengo, em Itaquaquecetuba. Consulte as informações e venha conhecer.</p>
            <p className="muted">Estamos preparando este espaço para apresentar o cardápio, fotos e novidades do restaurante.</p>
          </div>
        </div>
      </section>

      <section className="visit" id="visite">
        <div className="visit-copy">
          <div className="section-kicker light-kicker">02 — VISITE A GENTE</div>
          <h2>Vai ser um prazer<br /><em>receber você.</em></h2>
          <div className="visit-detail"><MapPin size={20} /><div><small>ENDEREÇO</small><p>{restaurant.address}</p></div></div>
          <div className="visit-detail"><Clock3 size={20} /><div><small>🥩 CHURRASCARIA</small><p>Segunda a sábado · 10h às 15h</p></div></div>
          <div className="visit-detail"><Clock3 size={20} /><div><small>🍕 PIZZARIA</small><p>Terça a domingo · 18h às 23h</p></div></div>
          <a className="button button-light" href={mapsUrl} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight size={17} /></a>
        </div>
        <div className="map-panel">
          <div className="map-grid" />
          <div className="map-pin"><MapPin size={28} fill="currentColor" /></div>
          <div className="map-label"><strong>Restaurante Alê</strong><span>Parque Res. Marengo · Itaquaquecetuba</span></div>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-open">Ver rota <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Utensils size={18} /></span><span>Restaurante <b>Alê</b></span></a>
        <span>Comida brasileira · Itaquaquecetuba, SP</span>
        <a className="back-top" href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
