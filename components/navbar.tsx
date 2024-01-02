import SignIn from "./auth/sign-in";
import SignUp from "./auth/sign-up";

const Navbar = () => {
  return (
    <nav className="border-b fixed top-0 right-0 left-0 backdrop-blur-sm bg-white/30">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-10 mx-auto py-4 max-w-screen-xl">
        <div className="font-bold text-lg">
          Logo
        </div>
        <div className="space-x-4">
          <SignUp />
          <SignIn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
