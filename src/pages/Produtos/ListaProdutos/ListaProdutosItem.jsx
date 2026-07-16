import { Link } from "react-router-dom"

function ListaProdutosItem({ produtos }) {
    return (
        <div className="w-7xl flex gap-10 p-10 text-center justify-center items-center ">
            <div className="text-lg w-1/2 bg-gray-600 rounded-xl">
                <h2 className="text-xl font-bold mb-10">{produtos.title}</h2>
                <img src={produtos.img} />
                <p>{produtos.description}</p>
                <div className=" flex  justify-center">
                    <Link to={produtos.buttonLink} className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 ">{produtos.buttonText}</Link>
                </div>
            </div>
            <div className="text-lg w-1/2 bg-gray-600 rounded-xl">
                <h2 className="text-xl font-bold mb-10">{produtos.title}</h2>
                <img src={produtos.img} />
                <p>{produtos.description}</p>
                <div className=" flex  justify-center">
                    <Link to={produtos.buttonLink} className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 ">{produtos.buttonText}</Link>
                </div>
            </div>
        </div>)
}

export default ListaProdutosItem