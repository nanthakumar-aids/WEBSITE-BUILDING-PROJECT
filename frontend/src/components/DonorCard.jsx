const DonorCard = ({ donor }) => {
  const getBloodGroupColor = (bloodGroup) => {
    const colors = {
      'A+': 'bg-red-100 text-red-800 border-red-200',
      'A-': 'bg-red-100 text-red-800 border-red-200',
      'B+': 'bg-blue-100 text-blue-800 border-blue-200',
      'B-': 'bg-blue-100 text-blue-800 border-blue-200',
      'AB+': 'bg-purple-100 text-purple-800 border-purple-200',
      'AB-': 'bg-purple-100 text-purple-800 border-purple-200',
      'O+': 'bg-green-100 text-green-800 border-green-200',
      'O-': 'bg-green-100 text-green-800 border-green-200',
    };
    return colors[bloodGroup] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:transform hover:scale-105">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-lg font-bold">{donor.name}</h3>
            <p className="text-blue-100 text-sm">Age: {donor.age}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getBloodGroupColor(donor.blood_group)}`}>
            {donor.blood_group}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center text-gray-700">
          <span className="text-lg mr-3">📍</span>
          <div>
            <p className="font-medium">{donor.city}</p>
            <p className="text-sm text-gray-500">{donor.address}</p>
          </div>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="text-lg mr-3">📞</span>
          <p className="font-medium">{donor.phone}</p>
        </div>

        <div className="flex items-center text-gray-700">
          <span className="text-lg mr-3">✉️</span>
          <p className="text-sm">{donor.email}</p>
        </div>

        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg font-medium">
          <span className="mr-2">📞</span>
          Contact Donor
        </button>
      </div>
    </div>
  );
};

export default DonorCard;