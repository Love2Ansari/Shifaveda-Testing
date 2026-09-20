import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Image from 'next/image';

const Counter = ({ title, number, Img, suffix }) => (
  <div className="col-md-6 col-lg-4">
    <div className="d-flex flex-column justify-content-center align-items-center shifa-stat p-5 h-100" aria-label={title}>
      <Image src={Img} width={58} height={58} alt="" priority />
      <h3 className="fs-30 counter mt-4 text-white">
        <CountUp end={number} suffix={suffix || ''} />
      </h3>
      <p className="fw-bold fs-18 text-center merriweather text-white mb-0">{title}</p>
    </div>
  </div>
);

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  Img: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export default Counter;
