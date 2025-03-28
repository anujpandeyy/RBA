'use client';
import PrivateRoute from '../../components/PrivateRoute';

export default function Home() {
  return (
    <PrivateRoute requiredRole="user">
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-6 shadow-md">
          <h1 className="text-4xl font-bold">Welcome to Your Home Page!</h1>
          <p className="mt-2 text-lg">We're glad to have you here. Explore your personalized dashboard.</p>
        </header>

        <main className="flex-grow p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              <p className="text-lg text-gray-600">View and update your personal information.</p>
            </div>


            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <ul className="space-y-2">
                <li>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                    Update Profile
                  </button>
                </li>
                <li>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all">
                    View Activity
                  </button>
                </li>
              </ul>
            </div>


            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <p className="text-lg text-gray-600">Check your recent notifications and updates.</p>
            </div>
          </div>
        </main>

        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>© 2025 Anuj Pandey. All rights reserved.</p>
        </footer>
      </div>
    </PrivateRoute>
  );
}
