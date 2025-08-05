import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

