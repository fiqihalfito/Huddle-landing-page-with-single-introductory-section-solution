import Illustration from "../components/illustration";
import Info from "../components/info";
import Logo from "../components/logo";
import RegisterButton from "../components/register-button";
import SocialMedia from "../components/social-media";

export default function Home() {
    return (
        <div className={`bg-primary-violet bg-mobile md:bg-desktop bg-no-repeat bg-contain md:bg-center`}>
            <div className="h-screen w-4/5 mx-auto py-8 flex flex-col ">
                <Logo />
                <Illustration />
                <div className="flex flex-col items-center">
                    <Info />
                    <RegisterButton />
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}
