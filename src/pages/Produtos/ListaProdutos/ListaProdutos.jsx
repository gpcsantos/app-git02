import ListaProdutosItem from "./ListaProdutosItem"

function ListaProdutos() {

    const produtos = {
        title: "Produto",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, omnis. Corrupti, quaerat magni! Quaerat, repellendus officiis libero, laboriosam dicta harum voluptatum, fugiat voluptas excepturi quidem error pariatur eveniet veniam consectetur!",
        img: "imagens/bloodborn.jpg",
        buttonText: "Detalhes",
        buttonLink: ""
    }

    return (
        <section className="w-full bg-gray-800 text-white py-16 flex  justify-center">
            <ListaProdutosItem produtos={produtos} />
        </section>
    )
}

export default ListaProdutos