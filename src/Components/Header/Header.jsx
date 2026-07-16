import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="w-7xl w-full mx-auto bg-gray-800 py-6">
                <div className="flex flex-row justify-around gap-26 w-full">
                    <img src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-logotipo-do-circulo-multicolorido.png" alt="" className="w-20" />
                    <div className="w-30 h-20 rounded-lg border border-black bg-cyan-900 flex justify-center items-center content-center">
                        <Link to="/"><h1 className="text-2xl">Home</h1></Link>
                    </div>
                    <div className="w-30 h-20 rounded-lg border border-black bg-cyan-900 flex justify-center items-center content-center">
                        <Link to="/produtos"><h1 className="text-2xl">Produtos</h1></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header