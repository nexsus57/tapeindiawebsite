import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import AnimatedSection from '../components/AnimatedSection';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover aspect-square"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-brand-blue-dark mb-3">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-brand-blue-dark mb-3">Common Uses</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact" 
                  state={{ productName: product.name }}
                  className="inline-block w-full sm:w-auto text-center bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-colors duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProductPage;
