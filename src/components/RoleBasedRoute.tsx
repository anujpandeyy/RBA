import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

const RoleBasedRoute = ({ children, role }: { children: React.ReactNode; role: string }) => {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const decoded: any = jwt.decode(token);
    if (decoded && decoded.role === role) {
      setUserRole(decoded.role);
    } else {
      router.push('/login');
    }
    setLoading(false);
  }, [role]);

  if (loading) return <div>Loading...</div>;

  return userRole === role ? <>{children}</> : <div>You don't have permission to access this page.</div>;
};

export default RoleBasedRoute;
