import Case from '@/components/Practice/Case';
import { cases } from '@/data/cases';

const Practice = () => {
  //  sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center
  return (
    <div className="text-[#4E0110] p-2">
      <div className="max-w-7xl m-auto">
        <h1 className="font-bold pb-2 text-2xl text-center">Дела</h1>
        <div className="m-auto flex flex-wrap ">
          {cases.map((el) => (
            <Case key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
