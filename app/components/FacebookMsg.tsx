"use client";
import { CustomChat, FacebookProvider } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="937705471393706" chatSupport>
      <CustomChat pageId="442688322799724" minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
