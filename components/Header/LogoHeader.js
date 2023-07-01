import Image from 'next/image';
import Link from 'next/link';

const LogoHeader = ({ isText }) => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image
          src="/images/m-logo.png"
          height={100}
          width={100}
          className="h-auto w-auto"
          alt="logo"
          priority
        />
        <span
          className={`${isText ? '' : 'hidden'} uppercase text-xl font-bold`}
        >
          Центр банкротства
        </span>
      </div>
    </Link>
  );
};

export default LogoHeader;
