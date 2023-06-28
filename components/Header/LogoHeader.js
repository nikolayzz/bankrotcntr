import Image from "next/image";

const LogoHeader = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/m-logo.png"
        height={110}
        width={110}
        className="h-auto w-auto"
        alt="logo"
      />
      <span className="uppercase text-xl font-bold">Центр банкротства</span>
    </div>
  );
};

export default LogoHeader;
