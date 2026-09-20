import { Fragment, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import ListColumn from 'components/ListColumn';
import { aboutList1, services } from '../data';

const Services = () => {
  const h2Ref = useRef(null);
  const [h2Width, setH2Width] = useState(0);

  useEffect(() => {
    const updateWidth = () => h2Ref.current && setH2Width(h2Ref.current.offsetWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Fragment>
      <div className="row gx-lg-10 gy-10 align-items-center mb-7">
        <div className="col-lg-5">
          <div className="wellness-panel">
            <div className="panel-top">
              <span className="eyebrow">THE SHIFAVEDA WAY</span>
              <span className="panel-mark">SV</span>
            </div>
            <div className="panel-circle"><span>WELLNESS<br />IS A<br />RITUAL</span></div>
            <div className="panel-bottom">
              <strong>Simple routines.</strong>
              <span>Better everyday habits.</span>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="d-flex align-items-center justify-content-start mb-2" style={{ width: `${h2Width}px`, maxWidth: '100%' }}>
            <h3 className="fs-18 fw-bold text-main merriweather mb-0 me-3">SHIFAVEDA</h3>
            <div style={{ flex: 1, height: '2px', backgroundColor: '#caa86a' }} />
          </div>

          <h2 className="fs-38 mb-4 merriweather d-inline" ref={h2Ref}>
            Wellness, made for the modern man.
          </h2>

          <p className="mb-5 fs-18 text-justify lato text-muted">
            From grooming and skin care to everyday wellness rituals, SHIFAVEDA is built
            around one idea: make taking care of yourself easier to start and easier to keep.
            Our approach blends the character of Indian wellness traditions with a clean,
            contemporary experience.
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>

      <div className="section-divider my-8" />
      <div className="row gy-5">
        <div className="col-12">
          <span className="eyebrow">EXPLORE THE ECOSYSTEM</span>
          <h3 className="fs-30 merriweather mt-2 mb-0">Wellness categories for everyday life</h3>
        </div>
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={service.id}>
            <div className="service-card h-100">
              <span className="service-number">0{index + 1}</span>
              <h4 className="merriweather fs-22">{service.title}</h4>
              <p className="mb-0 text-muted">Thoughtfully positioned for a simple, consistent self-care routine.</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
