'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  role: string;
}

const PrivateRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole: string }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const decoded = jwt.decode(token) as DecodedToken | null; 
      if (decoded) {
        setUserRole(decoded.role);
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      router.push('/login');
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (userRole !== requiredRole) {
    return <div>You do not have permission to access this page.</div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;