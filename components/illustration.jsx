import Image from "next/image"
import illustration from "../public/images/illustration-mockups.svg"

function Illustration() {
    return (
        <div className="my-auto">
            <Image src={illustration} alt="illustration" />
        </div>
    )
}

export default Illustration