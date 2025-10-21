import { useEffect } from 'react';
import { Shield, Database, Lock, Eye, Settings, Mail } from 'lucide-react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Shield,
      title: 'Our Commitment to Privacy',
      content:
        'At TecxSpend, your privacy is our top priority. We believe that your financial data is yours alone, and we are committed to protecting it with the highest standards of security and transparency.',
    },
    {
      icon: Database,
      title: 'Data Storage',
      content:
        'All your financial data is stored locally on your device. This means your bank accounts, cards, transactions, and expense information never leave your device. We do not have access to your data, and we do not store it on our servers.',
    },
    {
      icon: Lock,
      title: 'No Third-Party Access',
      content:
        'We do not share, sell, or distribute your personal or financial information to any third parties. Your data remains completely private and under your control at all times.',
    },
    {
      icon: Eye,
      title: 'Analytics and Tracking',
      content:
        'TecxSpend does not use advertising tracking, behavioral analytics, or third-party cookies. We do not monitor your activity or collect data for marketing purposes.',
    },
    {
      icon: Settings,
      title: 'App Permissions',
      content:
        'We only request the essential permissions needed for the app to function properly. These include local storage access for saving your data and basic device permissions for optimal performance.',
    },
    {
      icon: Mail,
      title: 'Contact Us',
      content:
        'If you have any questions or concerns about our privacy practices, please contact us at support@tecxspend.app. We are committed to addressing your privacy concerns promptly.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100">
            Your financial data is private and secure
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: October 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              All data stored locally on your device
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Zero third-party data sharing
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              No advertising or tracking tools
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Bank-level security encryption
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              Full control over your data
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-gray-700 mb-4">
            We're here to help clarify any questions you may have about how we handle your data.
          </p>
          <a
            href="mailto:support@tecxspend.app"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            <Mail className="h-5 w-5 mr-2" />
            tecxzo.dev@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
