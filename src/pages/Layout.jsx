import { Outlet, Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      
      {/* Page Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
