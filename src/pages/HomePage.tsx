import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/factory/1600/900')" }}></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            High-Performance Industrial Tapes
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Your trusted source for reliable adhesive solutions for every industrial need.
          </p>
          <Link
            to="/products"
            className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* About Us Summary */}
      <AnimatedSection>
        <section className="py-16 lg:py-24 bg-brand-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">About Tape India</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">
              Tape India is a leading manufacturer and supplier of a comprehensive range of industrial tapes. With a commitment to quality and innovation, we deliver high-performance adhesive solutions that meet the demanding standards of various industries across the nation.
            </p>
            <Link to="/about" className="text-brand-blue font-semibold hover:underline">
              Learn More About Us &rarr;
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Products Section */}
      <AnimatedSection>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="bg-brand-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-blue-dark transition-colors duration-300"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Product Categories Section */}
      <AnimatedSection>
        <section className="bg-brand-gray py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {CATEGORIES.map(category => (
                <Link to="/products" key={category.id} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                    <category.icon className="h-12 w-12 text-brand-blue mb-4 transition-colors group-hover:text-brand-yellow" />
                    <h3 className="font-semibold text-brand-blue">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries Served Section */}
      <AnimatedSection>
       <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Trusted By Industries</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-gray-500">
            <span className="font-semibold text-lg"><i className="fas fa-car mr-2 text-brand-blue"></i> Automotive</span>
            <span className="font-semibold text-lg"><i className="fas fa-plug mr-2 text-brand-blue"></i> Electronics</span>
            <span className="font-semibold text-lg"><i className="fas fa-print mr-2 text-brand-blue"></i> Printing</span>
            <span className="font-semibold text-lg"><i className="fas fa-hard-hat mr-2 text-brand-blue"></i> Construction</span>
            <span className="font-semibold text-lg"><i className="fas fa-box-open mr-2 text-brand-blue"></i> Packaging</span>
            <span className="font-semibold text-lg"><i className="fas fa-shield-alt mr-2 text-brand-blue"></i> Safety</span>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Contact Teaser */}
      <section className="bg-brand-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Have a Question or Need a Quote?</h2>
            <p className="text-lg mb-8">Our experts are ready to help you find the perfect tape solution.</p>
            <Link 
              to="/contact"
              className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Contact Us
            </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
