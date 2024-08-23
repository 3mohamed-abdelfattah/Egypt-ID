import { Fragment } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {

  return (
    <Fragment>
      <div className='main_container'>
        <div className='side_container'>
          <Header />
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
