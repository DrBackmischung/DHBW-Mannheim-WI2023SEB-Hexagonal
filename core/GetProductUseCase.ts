import { ProductService } from '../ports/ProductService';
import { Product } from './Product';

export class GetProductUseCase {
  constructor(private productService: ProductService) {}

  async getAll(): Promise<Product[]> {
    return await this.productService.getAllProducts();
  }

  async getById(id: number): Promise<Product | null> {
    return await this.productService.getProduct(id);
  }
}
