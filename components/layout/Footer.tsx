export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">MIAKO LAW FIRM</h3>
            <p className="text-sm">Professional legal services for your business and personal needs.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-amber-500">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500">Services</a></li>
              <li><a href="#" className="hover:text-amber-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-amber-500">Business Law</a></li>
              <li><a href="#" className="hover:text-amber-500">Family Law</a></li>
              <li><a href="#" className="hover:text-amber-500">Real Estate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm">Phone: 0123456789</p>
            <p className="text-sm">Email: info@miako.com</p>
            <p className="text-sm">New York, U.S.A.</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 MIAKO Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
