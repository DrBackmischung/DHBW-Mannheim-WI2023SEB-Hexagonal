import { Product } from '../core/Product';

export interface ProductService {
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | null>;
  createProduct(product: Omit<Product, 'id'>): Promise<Product>;
  updateProduct(id: number, product: Partial<Product>): Promise<Product | null>;
  deleteProduct(id: number): Promise<void>;
}
