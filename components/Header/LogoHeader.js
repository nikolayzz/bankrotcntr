import Image from 'next/image';
import Link from 'next/link';

const LogoHeader = ({ isText }) => {
  return (
    <Link href="/">
      <div className="sm:flex items-center">
        <Image
          src="/images/m-logo.png"
          height={100}
          width={100}
          className="h-auto w-auto"
          alt="logo"
          priority
        />
        <div
          className={`${
            isText ? '' : 'hidden'
          } hidden sm:inline uppercase text-xl font-bold`}
        >
          Центр банкротства
        </div>
      </div>
    </Link>
  );
};

export default LogoHeader;
