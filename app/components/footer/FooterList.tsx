import React from "react";

interface FooterListProps {
  children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default FooterList;
