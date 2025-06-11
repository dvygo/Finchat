import './App.css';

function App() {
  return (
    <div className="app-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/stock.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="fade-in content">
        <h1 className="title-slide-in">Finchat AI Bot</h1>
        <div className="card">
          <a href="https://finchat-ai.streamlit.app" target="_blank" rel="noopener noreferrer">
            <button>Launch Finchat App</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
