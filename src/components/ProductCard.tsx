import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/products/${product.id}`} className="block">
        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} loading="lazy" decoding="async" />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-blue mb-2">
          <Link to={`/products/${product.id}`} className="hover:text-brand-blue-dark">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.shortDescription}</p>
        <Link 
          to={`/products/${product.id}`} 
          className="mt-auto inline-block text-center bg-brand-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-blue-dark transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
