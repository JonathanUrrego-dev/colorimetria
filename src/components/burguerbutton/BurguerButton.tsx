import "./burguerButton.css";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const BurgerButton = ({ isOpen, toggle }: Props) => {
  return (
    <label className="bar">
      <input type="checkbox" checked={isOpen} onChange={toggle} />
      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
    </label>
  );
};
