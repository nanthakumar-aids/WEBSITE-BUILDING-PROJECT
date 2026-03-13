import { useState, useEffect } from 'react';
import DonorCard from '../components/DonorCard';

const FindDonor = () => {
  // Mock donor data for demonstration
  const mockDonors = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', blood_group: 'A+', age: 30, city: 'New York', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', blood_group: 'O-', age: 25, city: 'Los Angeles', address: '456 Oak Ave' },
    { id: 3, name: 'Bob Johnson', phone: '555-123-4567', email: 'bob@example.com', blood_group: 'B+', age: 35, city: 'Chicago', address: '789 Pine Rd' },
    { id: 4, name: 'Alice Brown', phone: '444-567-8901', email: 'alice@example.com', blood_group: 'AB-', age: 28, city: 'New York', address: '321 Elm St' },
  ];

  const [donors, setDonors] = useState(mockDonors);
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    let filtered = mockDonors;
    if (bloodGroup) {
      filtered = filtered.filter(donor => donor.blood_group === bloodGroup);
    }
    if (city) {
      filtered = filtered.filter(donor => donor.city.toLowerCase().includes(city.toLowerCase()));
    }
    setDonors(filtered);
  }, [bloodGroup, city]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-36 h-36 bg-blue-200 rounded-full"></div>
        <div className="absolute top-32 right-24 w-28 h-28 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-24 left-1/3 w-44 h-44 bg-blue-100 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-blue-200 rounded-full"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Find Blood Donors
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Search for available blood donors by blood group and city. This page demonstrates how patients or hospitals can find matching donors during emergencies.
            </p>
          </div>

          {/* Search Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-blue-100">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col items-center">
                <label className="text-gray-700 font-medium mb-2">Blood Group</label>
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                >
                  <option value="">All Blood Groups</option>
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

              <div className="flex flex-col items-center">
                <label className="text-gray-700 font-medium mb-2">City</label>
                <input
                  type="text"
                  placeholder="Enter city name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Available Donors ({donors.length})
            </h3>
            {donors.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-blue-100">
                <div className="text-6xl mb-4">😔</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">No donors found</h4>
                <p className="text-gray-600">Try adjusting your search filters to find more donors.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donors.map((donor) => (
                  <DonorCard key={donor.id} donor={donor} />
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">💡 Quick Tips:</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Universal Donors:</strong> O- and O+ blood types can donate to anyone</li>
              <li>• <strong>Universal Recipients:</strong> AB+ can receive blood from any type</li>
              <li>• <strong>Emergency:</strong> Contact donors directly through the provided phone numbers</li>
              <li>• <strong>Verification:</strong> Always verify donor information before proceeding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDonor;