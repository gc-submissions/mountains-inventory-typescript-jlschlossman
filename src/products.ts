export interface Product {
    name: string;
    price: number;
}


const products: Product[] = [
    {
        name: "switch",
        price: 199
    },
    {
        name: "steam deck",
        price: 500
    },
    {
        name: "etch a sketch",
        price: 10
    }
];


export function calcAverageProductPrice(arrayOfProducts: Product[]) {

    if (arrayOfProducts.length === 0) {
        return 0;
    }

    let total = 0
    for (let product of arrayOfProducts) {
        total = total + product.price
    }
    return total / arrayOfProducts.length;
}

//another way

// function calcAverageProductPrice(arrayOfProducts: Product[]) {
//     arrayOfProducts.map(product => product.price);
// }

const averagePrice = calcAverageProductPrice(products)

console.log(averagePrice);