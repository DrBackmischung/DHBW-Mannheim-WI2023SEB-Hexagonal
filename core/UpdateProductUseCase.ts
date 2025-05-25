import { ProductService } from '../ports/ProductService';
import { Product } from './Product';

export class UpdateProductUseCase {
  constructor(private productService: ProductService) {}

  async update(id: number, product: Partial<Product>): Promise<Product | null> {
    return await this.productService.updateProduct(id, product);
  }
}
