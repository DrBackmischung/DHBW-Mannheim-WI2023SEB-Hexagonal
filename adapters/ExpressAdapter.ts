import express from 'express';
import { ExternalProductAdapter } from './ExternalProductAdapter';
import { GetProductUseCase } from '../core/GetProductUseCase';
import { CreateProductUseCase } from '../core/CreateProductUseCase';
import { UpdateProductUseCase } from '../core/UpdateProductUseCase';
import { DeleteProductUseCase } from '../core/DeleteProductUseCase';

const app = express();
const PORT = 3000;

app.use(express.json());
const productAdapter = new ExternalProductAdapter();

const getProductUseCase = new GetProductUseCase(productAdapter);
const createProductUseCase = new CreateProductUseCase(productAdapter);
const updateProductUseCase = new UpdateProductUseCase(productAdapter);
const deleteProductUseCase = new DeleteProductUseCase(productAdapter);

app.get('/products', async (req, res) => {
  const products = await getProductUseCase.getAll();
  res.json(products);
});

app.get('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  const product = await getProductUseCase.getById(id);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Product not found' });
});

app.post('/products', async (req, res) => {
  const product = await createProductUseCase.create(req.body);
  res.status(201).json(product);
});

app.put('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  const product = await updateProductUseCase.update(id, req.body);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Product not found' });
});

app.delete('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  await deleteProductUseCase.delete(id);
  res.json({ message: 'Product deleted' });
});

app.listen(PORT, () => {
  console.log(`Hexagonal App (Node) listening at http://localhost:${PORT}`);
});
