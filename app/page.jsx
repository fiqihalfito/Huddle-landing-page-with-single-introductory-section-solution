import Illustration from "../components/illustration";
import Info from "../components/info";
import Logo from "../components/logo";
import RegisterButton from "../components/register-button";
import SocialMedia from "../components/social-media";

export default function Home() {
    return (
        <div className={`bg-primary-violet bg-mobile md:bg-desktop bg-no-repeat bg-contain`}>
            <div className="h-screen w-4/5 md:w-[90%] mx-auto py-8 grid md:grid-cols-2 md:gap-x-12">
                <Logo />
                <Illustration />
                <div className="flex flex-col items-center md:items-start self-center md:self-auto md:scale-90 md:my-auto">
                    <Info />
                    <RegisterButton />
                </div>
                <SocialMedia />
            </div>
        </div >
    )
}
