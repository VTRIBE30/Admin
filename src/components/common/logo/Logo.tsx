import { Link } from "react-router-dom";
import { LogoProps } from "../../../types/Interface";

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <>
      <section className="w-[120px]">
        <Link to={"/"}>
          {/* <img className="w-full" src={color !== "black" ? LogoImage : LogoImageBlack} alt={LogoImage} /> */}
        </Link>
      </section>
    </>
  );
};

export default Logo;
