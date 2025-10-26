import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [programInfo, setProgramInfo] = useState(null);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    // Get program information from URL parameters
    const programTitle = searchParams.get('program');
    const programPrice = searchParams.get('amount');

    if (programTitle) {
      setProgramInfo({
        title: decodeURIComponent(programTitle),
        price: programPrice
      });
    }

    // Auto-navigation countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Navigate to home page
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-4xl animate-bounce">🎉</div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your enrollment. Your meditation journey begins now!
          </p>

          {/* Program Details */}
          {programInfo && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Enrollment Details</h3>
              <div className="text-left space-y-1">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Program:</span> {programInfo.title}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Amount Paid:</span> ₹{programInfo.price}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Status:</span>{' '}
                  <span className="text-green-600 font-medium">Confirmed</span>
                </p>
              </div>
            </div>
          )}

          {/* What happens next */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
            <ul className="text-sm text-blue-800 text-left space-y-1">
              <li>🧘‍♀️ Start your first meditation session today</li>
              <li>💬 Join our community for support and guidance</li>
            </ul>
          </div>

          {/* Countdown Timer */}
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800">
              Redirecting to home page in <span className="font-bold text-green-900">{countdown}</span> seconds...
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Start My Meditation Journey
            </Link>

            <Link
              to="/#meditation-programs-section"
              className="block w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Explore More Programs
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@meditationapp.com" className="text-indigo-600 hover:underline">
                support@meditationapp.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
