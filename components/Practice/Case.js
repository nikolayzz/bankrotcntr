import Link from 'next/link';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const Case = ({ number, link }) => {
  return (
    <div className="bg-[#4E0110] my-2 flex items-center w-60 h-14 p-2 m-auto text-[#fafafa] text-lg font-semibold shadow-md rounded-sm">
      <Link href={link} target="_blank" className="flex items-center">
        <div className="mr-3">
          <WorkOutlineOutlinedIcon />
        </div>
        <div>{number}</div>
      </Link>
    </div>
  );
};

export default Case;
