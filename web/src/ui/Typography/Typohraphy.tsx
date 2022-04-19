import * as React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading1: React.FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={"font-display text-h1 font-bold" + " " + className}
      {...props}
    >
      {children}
    </h1>
  );
};

export const Heading2: React.FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={"font-display text-h2 font-bold" + " " + className}
      {...props}
    >
      {children}
    </h2>
  );
};

export const Heading3: React.FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={"font-display text-h3 font-bold" + " " + className}
      {...props}
    >
      {children}
    </h3>
  );
};
export const Heading4: React.FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h4
      className={"font-display text-h4 font-bold" + " " + className}
      {...props}
    >
      {children}
    </h4>
  );
};
export const Body1: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <p className={"text-base" + " " + className} {...props}>
      {children}
    </p>
  );
};
export const Body2: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <p className={"text-sm" + " " + className} {...props}>
      {children}
    </p>
  );
};

export const Overline: React.FC<IProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={"text-sm uppercase" + " " + className} {...props}>
      {children}
    </p>
  );
};
