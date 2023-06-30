import Case from "@/components/Practice/Case";
import { cases } from "@/data/cases";

const Practice = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center">Дела</h1>
      <div
        style={{ justifyContent: "space-evenly" }}
        className="sm:grid sm:grid-cols-2 md:grid-cols-3"
      >
        {cases.map((el) => (
          <Case key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};

export default Practice;
