import { useEffect } from 'react';
import { Trash2, Smartphone, HardDrive, AlertCircle, Mail, CheckCircle } from 'lucide-react';

export default function DataDeletion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trash2 className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Data Deletion Policy</h1>
          <p className="text-lg text-blue-100">
            Complete control over your financial data
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 mb-8">
          <div className="flex items-start">
            <HardDrive className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Local Data Storage
              </h3>
              <p className="text-gray-700">
                All your financial data in TecxSpend is stored locally on your device. This means you have complete control over your data, and deletion is straightforward and immediate.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Delete Your Data</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Open the TecxSpend App
                </h3>
                <p className="text-gray-700">
                  Launch the TecxSpend application on your device.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Navigate to Settings
                </h3>
                <p className="text-gray-700">
                  Go to Settings → Data Management in the app menu.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Select Delete All Data
                </h3>
                <p className="text-gray-700">
                  Tap on "Delete All Data" and confirm your choice. All your financial information will be permanently removed from your device.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-start mb-4">
            <Smartphone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Uninstalling the App
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you uninstall TecxSpend from your device, all locally stored data is automatically removed. This includes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  All bank account information
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  Credit and debit card records
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  Transaction history and expense tracking data
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  All user preferences and settings
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700">
                Data deletion is permanent and cannot be undone. Since TecxSpend stores all data locally on your device and does not sync to cloud servers, deleted data cannot be recovered.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Assistance?</h3>
          <p className="text-gray-700 mb-4">
            If you need help with data deletion or have questions about the process, our support team is here to help.
          </p>
          <a
            href="mailto:support@tecxspend.app"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            tecxzo.dev@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
