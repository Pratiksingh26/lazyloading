import React from 'react'
import { Suspense, lazy } from 'react'
import "./App.css"


const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"))


const App = () => {
  return (
    <div className='App'>

     <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Please Wait while loading...</div>}>
      <Home />
      <About />
      </Suspense>

      <Suspense fallback={<div>Please Wait while Home is loading...</div>}>
      
      <Home />
      </Suspense>

      <Suspense fallback={<div>Please Wait while About is loading...</div>}>
      
      <About />
      </Suspense>
    </div>
  )
}

export default App
