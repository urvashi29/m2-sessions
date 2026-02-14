import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#15173D] text-[#F1E9E9] py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <p className="text-sm text-gray-300">
              Building scalable digital platforms and modern enterprise
              solutions for tomorrow’s world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#E491C9] cursor-pointer">Home</li>
              <li className="hover:text-[#E491C9] cursor-pointer">Employees</li>
              <li className="hover:text-[#E491C9] cursor-pointer">About</li>
              <li className="hover:text-[#E491C9] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#982598] p-3 rounded-full hover:opacity-80 transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="bg-[#982598] p-3 rounded-full hover:opacity-80 transition"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="bg-[#982598] p-3 rounded-full hover:opacity-80 transition"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="bg-[#982598] p-3 rounded-full hover:opacity-80 transition"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} WorkSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
