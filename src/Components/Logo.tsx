import { memo } from "react";
import { ReactComponent as TwitterLogo } from '../Assets/Images/twitter.svg';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo = (props: LogoProps) => {
  //default width is provided below, can be overrided by props;
  const { className = "w-52", onClick } = props;

  const handleLogoClick = () => {
    onClick && onClick();
  };

  return (
    <TwitterLogo
      name="TwitterLogo"
      onClick={handleLogoClick}
      className={`${className} ${onClick ? "cursor-pointer" : ""}`}
    />
  )
};

export default memo(Logo);
