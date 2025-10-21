import { Link } from 'react-router-dom';
import { Wallet, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">TecxSpend</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Take control of your money with TecxSpend. Track expenses, manage cards, and stay financially aware — all in one secure app.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className="text-sm hover:text-blue-400 transition-colors">
                  Data Deletion
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@tecxspend.app"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 TecxSpend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
