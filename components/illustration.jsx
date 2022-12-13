import Image from "next/image"
import illustration from "../public/images/illustration-mockups.svg"

function Illustration() {
    return (
        <div className="my-auto md:mt-[5rem] ">
            <Image src={illustration} alt="illustration" className="w-full" />
        </div>
    )
}

export default Illustration