import React, { FC } from "react";
import loader from "../../assets/animations/loader.svg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  text: string;
  color?:
    | "yellow"
    | "white"
    | "white-yellow"
    | "yellow-dark"
    | "red"
    | "green"
    | "yellow-gradient"
    | "black";
}

const Button: FC<ButtonProps> = ({
  color = "green",
  disabled,
  loading,
  text,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button ${
        disabled ? "button__disabled" : ""
      } button--${color} ${className ?? ""}`}
    >
      {loading ? (
        <img data-testid="button-loader" src={loader} alt="loader" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
