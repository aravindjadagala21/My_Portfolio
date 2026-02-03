import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import FloatingSnakeIcons from './components/FloatingSnakeIcons'
function App() {
 
  return (
    <div className="min-h-screen bg-gray-900 m-0 text-white">
      <FloatingSnakeIcons/>
      <Navbar  />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App