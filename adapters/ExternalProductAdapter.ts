import axios from 'axios';
import { ProductService } from '../ports/ProductService';
import { Product } from '../core/Product';

export class ExternalProductAdapter implements ProductService {
  async getAllProducts(): Promise<Product[]> {
    const res = await axios.get('http://localhost:3001/products');
    return res.data;
  }

  async getProduct(id: number): Promise<Product | null> {
    const res = await axios.get(`http://localhost:3001/products/${id}`);
    return res.status === 200 ? res.data : null;
  }

  async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const res = await axios.post('http://localhost:3001/products', product);
    return res.data;
  }

  async updateProduct(id: number, product: Partial<Product>): Promise<Product | null> {
    const res = await axios.put(`http://localhost:3001/products/${id}`, product);
    return res.status === 200 ? res.data : null;
  }

  async deleteProduct(id: number): Promise<void> {
    await axios.delete(`http://localhost:3001/products/${id}`);
  }
}
