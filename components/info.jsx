import { data } from "../constants"

function Info() {
    return (
        <div className="text-center md:text-start text-white mb-8">
            <h1 className="text-3xl md:text-6xl font-semibold mb-4 leading-normal md:leading-normal font-poppins ">{data.title}</h1>
            <p className="font-openSans md:text-xl">{data.subtitle}</p>
        </div>
    )
}

export default Info