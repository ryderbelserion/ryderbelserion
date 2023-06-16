import logo from './img/logo512.webp';
import './app.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="avatar" alt={"logo"}/>
        <p>Heya, I'm Ryder Belserion</p>
        <a
          className="discord-link"
          href="https://discord.gg/w7yCw4M9za"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </header>
    </div>
  );
}

export default App;