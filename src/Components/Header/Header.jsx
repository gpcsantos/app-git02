// import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="w-full grid grid-cols-2 bg-gray-800 py-6 justify-center">
                <div className="w-full h-20 flex items-center justify-center">
                    <img src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-logotipo-do-circulo-multicolorido.png" alt="" className="w-20" />
                </div>
                <div className="grid grid-cols-2 gap-26 w-full right-0">
                    <div className="w-30 h-20 rounded-lg border border-black bg-cyan-900 flex justify-center items-center content-center">
                        <a href=""><h1 className="text-2xl">Home</h1></a>
                    </div>
                    <div className="w-30 h-20 rounded-lg border border-black bg-cyan-900 flex justify-center items-center content-center">
                        <a href=""><h1 className="text-2xl">Produtos</h1></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header