import { Link } from 'react-router-dom';
import { NAV_LINKS, CATEGORIES } from '../constants';
import { TapeIcon } from './icons/CategoryIcons';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <TapeIcon className="h-8 w-8 text-brand-yellow" />
              <span className="text-2xl font-bold">Tape India</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your trusted partner for high-quality industrial adhesive solutions. We are committed to providing durable and reliable tapes for every application.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-yellow mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold text-brand-yellow mb-4">Product Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map(category => (
                <li key={category.id}>
                  <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-yellow mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-brand-yellow"></i>
                <span>123 Industrial Area, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-brand-yellow"></i>
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-brand-yellow"></i>
                <a href="mailto:sales@tapeindia.in" className="hover:text-white transition-colors">sales@tapeindia.in</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-brand-yellow text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-brand-yellow text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-brand-yellow text-xl"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tape India. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
