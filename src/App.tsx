import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Resources from './pages/Resources';
import Opportunities from './pages/Opportunities';
import Forum from './pages/Forum';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="directory" element={<Directory />} />
          <Route path="resources" element={<Resources />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="forum" element={<Forum />} />
        </Route>
      </Routes>
    </Router>
  );
}
