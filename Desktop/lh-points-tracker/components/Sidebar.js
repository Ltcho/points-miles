import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tracker">Check if a deal is good</Link></li>
        <li><Link href="/credit">Credit Card Transfer Partners</Link></li>
      </ul>
      <style jsx>{`
        .sidebar {
          width: 200px;
          background-color: #f4f4f4;
          padding: 20px;
          height: 100vh;
          position: fixed;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 15px;
        }
        a {
          text-decoration: none;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;