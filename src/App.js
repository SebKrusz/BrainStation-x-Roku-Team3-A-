import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <nav class="menu">
        <ul class="nav-list">
            <li class="nav-list__item nav-list__item--no-mobile">
                <a class="nav-link" href="#home">LOGO</a>
            </li>
            <li class="nav-list__item nav-list__item--no-mobile">
                <a class="nav-link" href="#info">NAV</a>
            </li>
            <li class="nav-list__item"></li>
            <li class="nav-list__item nav-list__item--no-mobile">
                <a class="nav-link" href="#recipes">NAV</a>
            </li>
            <li class="nav-list__item nav-list__item--no-mobile">
                <a class="nav-link" href="#testimonials">NAV</a>
            </li>
        </ul>
    </nav>
    <section class="hero" id="home">
        <div class="hero-content">
            <h1 class="hero-content__title">HERO</h1>
            <div class="hero-content__text">HERO</div>
            <div class="hero-content__button">HERO</div>
        </div>
    </section>
    <section class="info" id="info">
        <h2 class="info__heading">Features</h2>
        <div class="info__description">Features</div>
        <div class="info__content">
            <p class="content-block">FeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeatures</p>
            <p class="content-block">FeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeatures</p>
            <p class="content-block">FeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeaturesFeatures</p>
        </div>
    </section>
    <section class="recipes-container" id="recipes">
        <div class="recipes">
            <div class="recipes__card">
                <div class="card-title">Features</div>
            </div>
            <div class="recipes__card">
                <div class="card-title">Features</div>
            </div>
            <div class="recipes__card">
                <div class="card-title">Features</div>
            </div>
            <div class="recipes__card">
                <div class="card-title">Features</div>
            </div>
            <div class="recipes__card">
                <div class="card-title">Features</div>
            </div>
            <div class="recipes__card">
                <div class="card-title">Features</div>
            </div>
        </div>
    </section>
    <section class="testimonials" id="testimonials">
        <h2 class="testimonials__heading">testimonials</h2>
        <div class="testimonials__description">Our customers love us!</div>
        <div class="testimonials__content">
            <div class="testimonial">
                <div class="testimonial__name">Person says</div>
                <div class="testimonial__text">blah,blah,blah</div>
                <div class="testimonial__rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="testimonial">
                <div class="testimonial__name">Person says</div>
                <div class="testimonial__text">blah,blah,blah,blah</div>
                <div class="testimonial__rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="testimonial">
                <div class="testimonial__name">Person says</div>
                <div class="testimonial__text"> blah,blah,blah</div>
                <div class="testimonial__rating">⭐⭐⭐⭐⭐</div>
            </div>
        </div>
    </section>
    <section class="FAQ">
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
      <p className='FAQplaceholder'>FAQ</p>
    </section>
    <footer>
        <nav class="footer-menu">
            <ul class="footer-list">
                <li class="footer-list__item">
                    © FOOTER
                </li>
                <li class="footer-list__item">
                    <a class="footer-link" href="#">FOOTER</a>
                </li>
                <li class="footer-list__item">
                    <a class="footer-link" href="#">FOOTER</a>
                </li>
                <li class="footer-list__item">
                    <a class="footer-link" href="#">FOOTER</a>
                </li>
            </ul>
        </nav>
    </footer>
</body>
  );
}

export default App;
