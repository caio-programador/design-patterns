import DbProductFactory from "../factory/DbProductFactory";

export default class Payment {
  pay(prodcutId: number) {
    const dbProduct = DbProductFactory.create();

    const product = dbProduct.getProductById(prodcutId);

    console.log(product)
  }
}