'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');


    if (!user || user.role !== 'admin') {
      router.push('/login');
    } else {
      setIsAdmin(true);
    }

    setLoading(false);
  }, [router]);

  if (loading) return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;

  return isAdmin ? (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-lg">Welcome to the Admin dashboard! Manage your platform from here.</p>
      </div>

      <div className="p-6 mt-4 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4">Total Users</h2>
            <p className="text-2xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-500">Users registered on the platform</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
            <p className="text-2xl font-bold text-yellow-500">52</p>
            <p className="text-sm text-gray-500">Items awaiting admin approval</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4">Revenue This Month</h2>
            <p className="text-2xl font-bold text-green-600">$9,320</p>
            <p className="text-sm text-gray-500">Total earnings for the current month</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-500 text-white rounded-lg p-4 text-center cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <h3 className="font-semibold">Manage Users</h3>
              <p>View and manage user accounts</p>
            </div>
            <div className="bg-green-500 text-white rounded-lg p-4 text-center cursor-pointer hover:bg-green-600 transition-all duration-300">
              <h3 className="font-semibold">View Reports</h3>
              <p>Generate and view platform reports</p>
            </div>
            <div className="bg-yellow-500 text-white rounded-lg p-4 text-center cursor-pointer hover:bg-yellow-600 transition-all duration-300">
              <h3 className="font-semibold">Approve Items</h3>
              <p>Manage pending items for approval</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-xl">Access Denied. You do not have the correct role.</div>
  );
};

export default AdminDashboard;
