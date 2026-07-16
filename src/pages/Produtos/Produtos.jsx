import ListaProdutos from "./ListaProdutos/ListaProdutos";

function Produtos() {
  return (
    <>
      <main className="w-7xl mx-auto px-4 -mt-2 uppercase">
        <section className="w-full text-black py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* título */}
            <div className="mb-6">
              <h1 className="text-5xl font-extrabold tracking-wider leading-none">
                produtos
              </h1>
              <div className="w-32 h-1 bg-blue-500 rounded-full mt-4"></div>
              <p className="text-black mt-4 text-sm md:text-base">
                acompanhe os nossos produtos e novidades
              </p>
            </div>
            <ListaProdutos />
          </div>
        </section>
      </main>
    </>
  );
}

export default Produtos;
