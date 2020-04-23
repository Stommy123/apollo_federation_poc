import { products } from '../../../data';

class ProductService {
  findById = id => {
    const product = products.find(p => p.id === id);

    return product || null;
  }

  listAll = _ => ({ count: products.length, products });

  listByUser = userId =>  products.filter(p => p.userId === userId);
}

export default ProductService;
