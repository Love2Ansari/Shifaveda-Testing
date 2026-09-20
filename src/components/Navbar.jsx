import { Fragment, useRef } from 'react';
import useSticky from 'hooks/useSticky';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';

const Navbar = ({
  navOtherClass = 'navbar-other d-flex d-lg-none',
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<span className="brand-wordmark">SHIFA<span>VEDA</span></span>} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink href="/" title={<span className="brand-wordmark brand-light">SHIFA<span>VEDA</span></span>} />
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white ms-4" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas"><NextLink href="/" title="Home" className="nav-link" /></li>
            <li className="nav-item" data-bs-dismiss="offcanvas"><NextLink href="#wellness" title="Wellness" className="nav-link" /></li>
            <li className="nav-item" data-bs-dismiss="offcanvas"><NextLink href="#why-shifaveda" title="Why SHIFAVEDA" className="nav-link" /></li>
            <li className="nav-item" data-bs-dismiss="offcanvas"><NextLink href="#approach" title="Our Approach" className="nav-link" /></li>
            <li className="nav-item" data-bs-dismiss="offcanvas"><NextLink href="#contact" title="Contact" className="nav-link" /></li>
            <li className="nav-item align-items-center d-flex mt-2 mt-lg-0 ms-lg-4 merriweather" data-bs-dismiss="offcanvas">
              <NextLink title="Explore Wellness" href="#wellness" className="btn btn-sm bg-theme-dark text-white mb-lg-1 rounded-pill border-0 px-4" />
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="hello@shifaveda.com" className="link-inverse" href="mailto:hello@shifaveda.com" />
              <br />
              <NextLink href="tel:+919999999999" title="+91 99999 99999" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn" aria-label="Toggle navigation">
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-row flex-nowrap align-items-center">
          {headerContent}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
