import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 text-white hover:text-red-100 transition-colors duration-200">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <span className="text-2xl">🩸</span>
            </div>
            <span className="text-xl font-bold">Blood Donation Finder</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-red-100 transition-colors duration-200 font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to="/register"
              className="text-white hover:text-red-100 transition-colors duration-200 font-medium relative group"
            >
              Register Donor
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to="/find"
              className="text-white hover:text-red-100 transition-colors duration-200 font-medium relative group"
            >
              Find Donor
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-red-100 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pb-4 border-t border-red-500 pt-4">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-white hover:text-red-100 transition-colors duration-200 font-medium">Home</Link>
            <Link to="/register" className="text-white hover:text-red-100 transition-colors duration-200 font-medium">Register Donor</Link>
            <Link to="/find" className="text-white hover:text-red-100 transition-colors duration-200 font-medium">Find Donor</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;