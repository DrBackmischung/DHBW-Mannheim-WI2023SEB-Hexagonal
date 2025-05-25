import { ProductService } from '../ports/ProductService';
import { Product } from './Product';

export class CreateProductUseCase {
  constructor(private productService: ProductService) {}

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    return await this.productService.createProduct(product);
  }
}
