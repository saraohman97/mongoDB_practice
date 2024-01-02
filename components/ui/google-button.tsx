import { ReactNode } from "react";
import { Button } from "./button";
import Image from "next/image";

interface GoogleButtonProps {
  children: ReactNode;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ children }) => {
  const signIn = () => console.log("yessss");

  return (
    <Button className="flex items-center gap-4" onClick={signIn}>
      <Image
        src="/google.png"
        width={18}
        height={18}
        alt="Picture of the author"
      />
      {children}
    </Button>
  );
};

export default GoogleButton;
