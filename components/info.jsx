import { data } from "../constants"

function Info() {
    return (
        <div className="text-center text-white font-poppins mb-8">
            <h1 className="text-3xl font-semibold mb-4 leading-normal">{data.title}</h1>
            <p className="">{data.subtitle}</p>
        </div>
    )
}

export default Info