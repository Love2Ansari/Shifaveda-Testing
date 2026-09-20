import Counter from 'components/Counter';
import { factList1, factList2 } from '../data';

const Facts = () => {
  const combinedFacts = [...factList1, ...factList2];

  return (
    <>
      <div className="text-center mb-8">
        <span className="eyebrow eyebrow-light">WHY SHIFAVEDA</span>
        <h2 className="text-white fs-42 merriweather mt-2">A better relationship with wellness.</h2>
        <p className="text-white opacity-75 fs-18 mb-0">
          Less complexity. More intention. A routine you can actually live with.
        </p>
      </div>
      <div className="row d-flex justify-content-center align-items-stretch g-5">
        {combinedFacts.map(({ id, number, title, src }) => (
          <Counter key={id} title={title} number={number} suffix={id === 6 ? '' : id === 2 ? '' : '+'} Img={src} />
        ))}
      </div>
    </>
  );
};

export default Facts;
