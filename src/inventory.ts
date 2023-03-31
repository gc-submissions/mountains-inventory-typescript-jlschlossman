import { calcAverageProductPrice, Product } from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1,
        },
        quantity: 20 
    }
]

function calcInventoryValue(arrayOfProducts: InventoryItem[]) {
    if (arrayOfProducts.length === 0) {
        return 0;
    }
    
    let total = 0

    for (let p of arrayOfProducts) {
        total += p.product.price * p.quantity
    }

    return total;
}
console.log(calcInventoryValue(inventory));