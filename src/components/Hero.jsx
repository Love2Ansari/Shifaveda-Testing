import NextLink from 'components/NextLink';

const Hero = () => (
  <section className="wrapper shifa-hero">
    <div className="hero-orb hero-orb-one" />
    <div className="hero-orb hero-orb-two" />
    <div className="container position-relative">
      <div className="row align-items-center min-vh-75 py-12 py-lg-16">
        <div className="col-lg-7">
          <span className="eyebrow animate__animated animate__fadeInDown">MEN&apos;S WELLNESS • ROOTED IN INDIA</span>
          <h1 className="display-1 text-white merriweather mt-4 mb-5 animate__animated animate__fadeInUp">
            Feel good.<br /><span>Live grounded.</span>
          </h1>
          <p className="hero-lead fs-20 mb-7 animate__animated animate__fadeInUp animate__delay-1s">
            SHIFAVEDA creates modern wellness rituals for men, inspired by the timeless
            wisdom of Ayurveda and made for everyday life.
          </p>
          <div className="d-flex flex-wrap gap-3 animate__animated animate__fadeInUp animate__delay-1s">
            <NextLink title="Explore Wellness" href="#wellness" className="btn btn-lg btn-gold rounded-pill px-6" />
            <NextLink title="Our Approach" href="#approach" className="btn btn-lg btn-outline-light rounded-pill px-6" />
          </div>
          <div className="hero-trust mt-7">
            <span>✓ Thoughtful routines</span>
            <span>✓ Indian wellness inspiration</span>
            <span>✓ Made for modern men</span>
          </div>
        </div>

        <div className="col-lg-5 mt-10 mt-lg-0">
          <div className="hero-product">
            <div className="leaf-shape leaf-a">✦</div>
            <div className="leaf-shape leaf-b">✦</div>
            <div className="product-shadow" />
            <div className="wellness-bottle">
              <small>SHIFAVEDA</small>
              <div className="bottle-line" />
              <strong>THE<br />DAILY<br />RITUAL</strong>
              <span>MEN&apos;S WELLNESS</span>
            </div>
            <div className="product-note">
              <span className="note-dot" />
              <div><strong>Daily wellness</strong><small>Simple. Intentional. Consistent.</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
