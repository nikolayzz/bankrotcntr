const CallFormButton = ({ styles }) => {
  const alertWindow = () => alert('Свяжемся с Вами в ближайшее время!');

  return (
    <button onClick={alertWindow} className={styles}>
      Отправить
    </button>
  );
};

export default CallFormButton;
