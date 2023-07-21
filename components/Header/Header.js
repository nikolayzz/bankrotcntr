import { useRouter } from "next/router";
import BurgerMenu from "./BurgerMenu";
import React from "react";
import { pages } from "./NavPanel";
import Link from "next/link";
import CallButton from "./CallButton";

// scroll direction hook
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState(null);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky z-50 text-[#fafafa] w-full ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24  transition-all duration-500 bg-dots-red`}
    >
      <nav className="max-w-7xl m-auto flex items-center h-full relative lg:p-2">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-between items-center m-auto lg:block lg:m-0">
            <Link href="/">
              <h1 className="text-center md:text-left text-2xl uppercase ">
                Центр Банкротства
              </h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            {pages.map((el) => (
              <Link
                key={el.id}
                href={el.path}
                className="mx-3 hover:text-[#E3E36A] hover:underline underline-offset-8"
              >
                {el.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block animate-pulse">
            {currentRoute === "/" ? (
              <Link href="#consult">Связаться с нами</Link>
            ) : (
              <CallButton />
            )}
          </div>
        </div>
        <div className="absolute top-8 right-1 lg:hidden">
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
