const Topbar = () => (
  <section className="shifa-topbar d-none d-md-block">
    <div className="container text-white">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 d-none d-xl-flex">
          <p className="m-0 text-white lato">MEN&apos;S WELLNESS • ROOTED IN INDIAN TRADITIONS</p>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center col-auto me-3">
          <i className="uil uil-envelope fs-20 me-2" />
          <a href="mailto:hello@shifaveda.com" className="link-white hover lato">hello@shifaveda.com</a>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center col-auto">
          <i className="uil uil-phone-volume fs-20 me-2" />
          <a href="tel:+919999999999" className="link-white hover lato">+91 99999 99999</a>
        </div>
      </div>
    </div>
  </section>
);

export default Topbar;
