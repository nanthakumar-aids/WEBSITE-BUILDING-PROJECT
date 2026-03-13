const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🩸</span>
              <h3 className="text-xl font-bold">Blood Donation Finder</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting blood donors with those in need during emergency situations.
              Together, we can save lives and make a difference in our communities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/register" className="hover:text-white transition-colors duration-200">Register as Donor</a></li>
              <li><a href="/find" className="hover:text-white transition-colors duration-200">Find Blood Donor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contacts</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>🚨 Emergency: Call 911</p>
              <p>🏥 Hospital Hotline: 1-800-HELP</p>
              <p>💉 Blood Bank: 1-888-BLOOD</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Blood Donation Finder. Made with ❤️ for saving lives.
            <span className="block mt-2">Built with React, Tailwind CSS & Modern Web Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;