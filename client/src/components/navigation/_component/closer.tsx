// ------------- Icons ------------ \\
import CloserSvg from "../../../../public/icons/closer";

const ToggleNavigation = ({ onBurger }: { onBurger?: () => void }) => {
  return (
    <div className="bg-[black]/50 flex-[1_0_30%] z-50 right-0 w-full h-full py-3 md:hidden">
      <CloserSvg
        onClick={onBurger}
        stroke="white"
        width={25}
        height={25}
        className="cursor-pointer translate-x-2"
      />
    </div>
  );
};

export default ToggleNavigation;
