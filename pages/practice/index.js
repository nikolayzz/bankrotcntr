import Case from '@/components/Practice/Case';
import { cases } from '@/data/cases';

const Practice = () => {
  return (
    <div>
      <div className="max-w-7xl m-auto">
        <h1 className="font-bold text-3xl text-center">Дела</h1>
        <div
          style={{ justifyContent: 'space-evenly' }}
          className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
        >
          {cases.map((el) => (
            <Case key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
