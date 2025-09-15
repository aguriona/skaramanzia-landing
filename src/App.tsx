import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes principales
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer/Footer';
import Chatbot from './components/Chatbot';
import { CookieConsent } from './components/CookieConsent';

// Páginas y secciones
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import BlogPost from './pages/blog/BlogPost';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <Chatbot />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;