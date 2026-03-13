import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-red-100 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-red-200 rounded-full"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-red-100">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
              <span className="text-3xl">🩸</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">
              Blood Donation Finder
            </h1>
          </div>

          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            This is a demonstration of a Blood Donation Finder web application. It allows blood donors to register and helps patients or hospitals find nearby donors during emergency situations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/register"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg font-semibold">Register as Donor</span>
              <span className="ml-2">❤️</span>
            </Link>
            <Link
              to="/find"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg font-semibold">Find Blood Donor</span>
              <span className="ml-2">🔍</span>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-6 border border-red-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">How It Works:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-red-50">
                <div className="text-2xl mb-2">📝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Register</h4>
                <p className="text-gray-600 text-sm">Fill out the registration form with your personal information and blood type.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-red-50">
                <div className="text-2xl mb-2">🔍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Search</h4>
                <p className="text-gray-600 text-sm">Search for donors by blood group and city to find matches for emergency needs.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-red-50">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Connect</h4>
                <p className="text-gray-600 text-sm">In a real application, this would connect donors directly with hospitals or patients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;