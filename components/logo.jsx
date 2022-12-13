import Image from "next/image"
import logo from "../public/images/logo.svg"

function Logo() {
    return (
        <div className="md:col-span-2">
            <Image src={logo} alt="logo" className="w-32 md:w-52" />
        </div>
    )
}

export default Logo