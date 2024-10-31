import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct{
  getProductById(productId: number) {
    return `MySQL: Exibindo dados do produto: ${productId}`;
  }
}