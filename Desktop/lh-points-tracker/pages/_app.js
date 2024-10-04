import Sidebar from '../components/Sidebar'; // Make sure the import is correct
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <style jsx global>{`
        .main-container {
          display: flex;
        }
        .content {
          flex-grow: 1;
          padding: 20px;
          margin-left: 220px; /* Makes space for the sidebar */
        }
      `}</style>
    </div>
  );
}

export default MyApp;