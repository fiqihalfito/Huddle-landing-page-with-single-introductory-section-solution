import Image from "next/image"
import logo from "../public/images/logo.svg"

function Logo() {
    return (
        <div className="">
            <Image src={logo} alt="logo" className="w-32" />
        </div>
    )
}

export default Logo