import { ProductService } from '../ports/ProductService';

export class DeleteProductUseCase {
  constructor(private productService: ProductService) {}

  async delete(id: number): Promise<void> {
    await this.productService.deleteProduct(id);
  }
}
