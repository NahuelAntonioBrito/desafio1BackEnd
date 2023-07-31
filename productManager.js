class ProductManager {
    #_products
    constructor() {
        this.#_products = [];
    }

    getProducts() {
        return this.#_products;
    }

    addProduct(product) {
        const flag = this.#_products.some(item => item.code === product.code);
        if (flag) {
            return 'ERROR, ese producto ya está agregado';
        }
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return 'ERROR, debe llenar todos los campos';
        }
        const productoAdd = {
            title: product.title,
            description: product.description,
            price: product.price,
            thumbnail: product.thumbnail,
            code: product.code,
            stock: product.stock
        };
        this.#_products.push(productoAdd);
        return productoAdd;
    }

    getProductsById (id) {
        const found = this.#_products.find(item => item.code === id);
        if (!found) return 'Not Found'
        return found
    }
}

const productManager = new ProductManager();

const newProduct = {
    title: 'Fernet',
    description: 'bebida alcoholica',
    price: 2500,
    thumbnail: 'https://d22fxaf9t8d39k.cloudfront.net/fd8563b639f8c7156a2748d2f3f5d99f55886ea3118411d8f1d02dd139217458151809.jpeg',
    code: 1,
    stock: 10
};

const newProduct2 = {
    title: 'Whiskey',
    description: 'bebida alcoholica',
    price: 3500,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWx4h09_j9kbNl1VXPFrwJs-WZIr7h32eJdWwgcIqrc-OVchEIVugoht3PX9ZqTPbEp8&usqp=CAU',
    code: 2,
    stock: 15
};

console.log(productManager.addProduct(newProduct));
console.log(productManager.getProductsById(1));
