
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'




function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />

      <div>
        <h1>🏠 Host App</h1>
        <Card
          title="Welcome to Micro Frontends"
          description="This card is coming from the shared UI Kit remote app."
        >
          <Button label="Click Me" onClick={() => alert('Clicked inside card!')} />
        </Card>
      </div>
    </>
  )
}

export default App
