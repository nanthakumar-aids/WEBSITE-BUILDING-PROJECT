import { useState } from 'react';

const RegisterDonor = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    blood_group: '',
    age: '',
    city: '',
    address: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock registration - in a real app, this would send data to backend
    setShowSuccess(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      blood_group: '',
      age: '',
      city: '',
      address: ''
    });
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 bg-red-200 rounded-full"></div>
        <div className="absolute top-60 right-10 w-32 h-32 bg-red-300 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-36 h-36 bg-red-100 rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-red-200 rounded-full"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-md border border-red-100">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl mr-3">🩸</span>
              <h2 className="text-2xl font-bold">Register as Donor</h2>
            </div>
            <p className="text-center text-red-100 text-sm">
              Fill out this form to register as a blood donor. This information helps connect you with patients in need.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> Blood Group
              </label>
              <select
                name="blood_group"
                value={formData.blood_group}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="">Select your blood group</option>
                <option value="A+">A+ (Universal Recipient)</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+ (Universal Donor)</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+ (Universal Donor)</option>
                <option value="O-">O- (Universal Donor)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                required
                placeholder="Enter your age"
                min="18"
                max="65"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                required
                placeholder="Enter your city"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">
                <span className="text-red-500">*</span> Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                required
                placeholder="Enter your complete address"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              <span className="mr-2">❤️</span>
              Register as Donor
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 text-center overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
              <div className="text-white text-6xl mb-2">✓</div>
              <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Thank you for registering as a blood donor! Your generosity can save lives.
                You are now part of our life-saving community. Together, we can make a difference
                in someone's life during their time of need. Your compassion and willingness to help
                others in crisis is truly admirable.
              </p>
              <button
                onClick={closeSuccess}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterDonor;