import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar/Navbar'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
