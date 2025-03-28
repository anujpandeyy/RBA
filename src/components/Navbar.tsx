import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/home" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/login" className="text-white">Login</Link>
        </li>
        <li>
          <Link href="/register" className="text-white">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
