import { useScrollDirection } from "@/hooks/useScrollDirection";
import React from "react";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-blue-200 transition-all duration-500`}
    >
      <div className="p-5 font-bold">Disappearing Header</div>
    </div>
  );
};

export default Header;

// import Image from "next/image";
// import NavPanel from "./NavPanel";

// const Header = () => {
//   return (
//     <header className="h-24 sticky top-0 z-50 bg-white text-[#4e0110]">
//       <div className="max-w-7xl m-auto  flex">
//         <Image
//           src="/images/mini-logo1.svg"
//           width={60}
//           height={60}
//           alt="mini-logo1"
//           className="bg-white"
//         />
//         <NavPanel />
//       </div>
//     </header>
//   );
// };

// export default Header;

// import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
// import BurgerMenu from "./BurgerMenu";
// import React, { useContext } from "react";
// import { pages } from "./NavPanel";
// import Link from "next/link";
// import Image from "next/image";
// import Info from "./Info";
// import { Context } from "@/pages/_app";

// const Header = () => {
//   const props = useContext(Context);
//   const openSideHeader = props.openSideHeader;
//   const setOpenSideHeader = props.setOpenSideHeader;

//   const handleOpenSideHeader = () => {
//     setOpenSideHeader(!openSideHeader);
//   };

//   return (
//     <header
//       className={`w-full ${
//         openSideHeader ? "lg:w-48" : "lg:w-32"
//       } py-2 lg:py-0 duration-200 fixed top-0  lg:left-0  lg:h-full  flex justify-center items-center z-50 bg-white lg:bg-inherit text-[#4e0110]`}
//     >
//       <nav
//         className={`${
//           openSideHeader ? "lg:p-5" : "lg:px-2 lg:py-5"
//         } w-full h-full m-auto flex flex-col items-center relative`}
//       >
//         <div className="lg:h-1/5">
//           <Link href="/">
//             <Image
//               src="/images/mini-logo1.svg"
//               width={60}
//               height={60}
//               alt="mini-logo1"
//             />
//           </Link>
//         </div>
//         <div className="hidden lg:block mb-10">
//           <span
//             className={`${
//               openSideHeader ? "text-sm " : "text-xs"
//             } font-semibold`}
//           >
//             +7 988 688 0777
//           </span>
//         </div>
//         <div className="hidden lg:h-2/5 lg:flex flex-col text-lg font-semibold">
//           {pages.map((el) => (
//             <Link
//               key={el.id}
//               href={el.path}
//               className="mx-3 my-2 hover:text-[#E3E36A] hover:underline underline-offset-8 "
//             >
//               <div className="flex items-center">
//                 <div className="lg: pr-2">
//                   <el.icon />
//                 </div>
//                 {openSideHeader ? <div>{el.title}</div> : <div></div>}
//               </div>
//             </Link>
//           ))}
//         </div>
//         <div className="hidden lg:block lg:h-1/5">
//           <Info />
//         </div>

//         <div className="absolute right-5 lg:hidden">
//           <BurgerMenu />
//         </div>

//         <div
//           className={`hidden sm:block lg:hidden absolute right-0 top-1/2 ${
//             !openSideHeader && "rotate-180"
//           } animate-pulse`}
//           onClick={handleOpenSideHeader}
//         >
//           <KeyboardDoubleArrowLeftOutlinedIcon fontSize="large" />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
