import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-4xl">😔</div>
          </div>

          {/* Cancel Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Cancelled
          </h1>
          <p className="text-gray-600 mb-6">
            Don't worry! You can try again whenever you're ready to start your meditation journey.
          </p>

          {/* Reassurance */}
          <div className="bg-yellow-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-900 mb-2">No charges were made</h3>
            <p className="text-sm text-yellow-800">
              Your payment was cancelled and no charges have been processed to your account.
            </p>
          </div>

          {/* Common reasons */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Common reasons for cancellation:</h3>
            <ul className="text-sm text-gray-700 text-left space-y-1">
              <li>• Changed mind about the program</li>
              <li>• Technical issues during payment</li>
              <li>• Wanted to compare options first</li>
              <li>• Payment method issues</li>
            </ul>
          </div>

          {/* Try again section */}
          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-indigo-900 mb-2">Ready to try again?</h3>
            <p className="text-sm text-indigo-800 mb-3">
              Our meditation programs are designed to help you find inner peace and reduce stress.
            </p>
            <Link
              to="/#meditation-programs-section"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Choose a Program
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>

            <Link
              to="/#faq"
              className="block w-full bg-blue-100 text-blue-700 py-3 px-4 rounded-lg font-medium hover:bg-blue-200 transition-colors"
            >
              View FAQ & Support
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Still having issues?
            </p>
            <div className="flex justify-center space-x-4 text-xs">
              <a href="mailto:support@meditationapp.com" className="text-indigo-600 hover:underline">
                Email Support
              </a>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">Call: 1-800-MEDITATE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
