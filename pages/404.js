import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return <div className="text-center text-3xl">Страница отсутствует</div>;
};

export default Error;
