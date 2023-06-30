import { Input } from "@mui/material";
import CallButton from "../Header/CallButton";

const inputStyle = {
  backgroundColor: "#E2D2D2",
  color: "#4A0A09",
  fontSize: "smaller",
  fontWeight: "bold",
  p: "10px",
  mt: 2,
  borderRadius: "10px",
};

const CallForm = ({ style, button }) => {
  return (
    <div className={style}>
      <div>
        <h3 className="font-bold text-2xl">Он-лайн запись</h3>
        <p>Запишитесь на консультацию</p>
      </div>
      <div>
        <Input disableUnderline placeholder="Имя" sx={inputStyle} />
        <Input disableUnderline placeholder="Номер телефона" sx={inputStyle} />
        {button}
      </div>
      <p>Отправляя форму, Вы соглашаетесь с политикой конфиденциальности.</p>
    </div>
  );
};

export default CallForm;
