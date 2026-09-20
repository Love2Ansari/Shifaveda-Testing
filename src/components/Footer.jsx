import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import { services, usefulLinks } from '../data';

const renderWidget = (list, title) => (
  <div className="widget">
    <h3 className="widget-title fs-22 mb-3 merriweather">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ title, id }) => (
        <li key={id}><NextLink href="#" title={title} className="lato" /></li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="border-top overflow-hidden shifa-footer">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          <div className="col-lg-4">
            <div className="widget text-center text-lg-start">
              <div className="mb-4"><span className="brand-wordmark brand-light">SHIFA<span>VEDA</span></span></div>
              <p className="lead mb-5 fs-18 text-white opacity-75 lato">
                Modern men&apos;s wellness inspired by Indian traditions. Simple rituals,
                thoughtful choices and a premium everyday experience.
              </p>
              <h3 className="fs-20 text-white merriweather">Follow Us</h3>
              <SocialLinks className="nav social" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-10 mt-lg-0 text-white">{renderWidget(services, 'Wellness')}</div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-10 mt-lg-0 text-white">{renderWidget(usefulLinks, 'Company')}</div>
          <div className="col-md-4 col-lg-3 mt-10 mt-lg-0">
            <div className="widget">
              <h3 className="widget-title fs-22 mb-3 merriweather">Contact</h3>
              <div className="d-flex mb-3"><i className="uil uil-envelope fs-24 text-white" /><a href="mailto:hello@shifaveda.com" className="ms-2 text-white lato">hello@shifaveda.com</a></div>
              <div className="d-flex align-items-center"><i className="uil uil-phone-volume fs-24 text-white" /><a href="tel:+919999999999" className="ms-2 text-white lato">+91 99999 99999</a></div>
              <p className="text-white opacity-75 lato mt-4 mb-0">India</p>
            </div>
          </div>
        </div>
        <hr className="mt-8 mb-6 border-white opacity-25" />
        <p className="mb-0 text-white opacity-75 lato text-center">© {currentYear} SHIFAVEDA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
