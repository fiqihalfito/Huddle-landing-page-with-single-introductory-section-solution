import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const mySocialMedia = [
    {
        icon: <FaGithub />,
        url: "https://www.github.com/fiqihalfito"
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/fiqihalfito"
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/fiqih-alfito"
    },
]

function SocialMedia() {
    return (
        <div className="md:col-span-2 mt-auto flex justify-center md:justify-end gap-3">
            {mySocialMedia.map(item => (
                <Link key={item.url} href={item.url}>
                    <div className="
                        p-2 text-white border-2 border-white rounded-full bg-transparent
                        hover:bg-white hover:text-primary-violet
                        hover:scale-150 active:scale-75
                        transition ease-in-out duration-300">
                        {item.icon}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default SocialMedia