import Link from "next/link";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const Case = ({ number, link }) => {
  return (
    <Link href={link} target="_blank">
      <div className="bg-[#843332] w-60 m-auto my-3 text-white text-lg font-semibold p-2 shadow-md rounded-sm flex">
        <div className="w-1/4">
          <WorkOutlineOutlinedIcon />
        </div>
        <div>{number}</div>
      </div>
    </Link>
  );
};

export default Case;
