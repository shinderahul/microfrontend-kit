import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
const RemoteCounter = React.lazy(() => import('marketing/Counter'))
const RemoteCard = React.lazy(() => import('uk-kit/Card'))
const Button = React.lazy(() => import('uk-kit/Button'))


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
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteCounter />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteCard title="Welcome to Micro Frontends" description="This card is coming from the shared UI Kit remote app.">


          <Button onClick={() => alert('Clicked inside card!')} />

        </RemoteCard>
      </React.Suspense>

    </>
  )
}

export default App


