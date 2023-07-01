import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ServiceItem from './ServiceItem';

const serviceList = [
  {
    id: 1,
    icon: BalanceRoundedIcon,
    title: 'Банкротство физических лиц',
    text: 'Узнать больше о банкротстве физических лиц',
    path: '/services/bankrotstvograzhdan',
  },
  {
    id: 2,
    icon: GavelRoundedIcon,
    title: 'Банкротство юридических лиц',
    text: 'Узнать больше о банкротстве юридических лиц',
    path: '/services/bankrotstvocompanies',
  },
  {
    id: 3,
    icon: ChatOutlinedIcon,
    title: 'Консультация юриста',
    text: 'Хотите получить личную консультацию по банкротству?',
    path: '/services/cons',
  },
];

const ServicesList = ({ title }) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-bold text-3xl text-center text-[#4A0A09]">
          {title}
        </h3>
      </div>
      <div className="grid md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-3 md:gap-5 lg:gap-10 text-center">
        {serviceList.map((el) => (
          <ServiceItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
