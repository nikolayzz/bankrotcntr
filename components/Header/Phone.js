import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';

const Phone = () => {
  return (
    <div className="flex items-center">
      <div>
        <PhoneIcon fontSize="small" />
        {/* <Image src="/images/phone.png" width={20} height={20}></Image> */}
      </div>
      <span>+7 988 688 0777</span>
    </div>
  );
};

export default Phone;
