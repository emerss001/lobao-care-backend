import prisma from "../../lib/prisma";

export async function getProducts() {
    const produtos = await prisma.produto.findMany({});

    // const gato = produtos
    //     .filter((product) => product.categoria.name === "gato")
    //     .map(({ categoriaID, categoria, ...product }) => ({
    //         ...product,
    //     }));
    // const cachorro = produtos
    //     .filter((product) => product.categoria.name === "cachorro")
    //     .map(({ categoriaID, categoria, ...product }) => ({
    //         ...product,
    //     }));
    // const farmacia = produtos
    //     .filter((product) => product.categoria.name === "farmacia")
    //     .map(({ categoriaID, categoria, ...product }) => ({
    //         ...product,
    //     }));

    return produtos;
}
