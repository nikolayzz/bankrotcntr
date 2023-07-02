import Image from 'next/image';

const Banner = () => {
  return (
    <Image
      className="m-auto transition-all translate-x-0 ease-in-out duration-1000"
      src="/images/mini-banner.jpg"
      height={500}
      width={800}
      alt="banner"
    />
  );
};

export default Banner;
