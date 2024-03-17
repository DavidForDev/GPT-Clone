// ------------- UI -------------- \\
import SecondaryButton from "@/components/UI/buttons/button.secondry";

// ------------- UI -------------- \\
import { FooterMenuTypes } from "@/types/components.types";

const FooterMenu = ({ data }: FooterMenuTypes) => {
  return data.map((menu, index: number) => (
    <SecondaryButton
      key={index}
      className="font-bold py-4"
      onClick={menu.onClick}
    >
      {menu.icon}
      <p>{menu.name}</p>
    </SecondaryButton>
  ));
};

export default FooterMenu;
