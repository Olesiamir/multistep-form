import './App.css'
import MultistepForm from './components/MultistepForm/MultistepForm'

function App() {

  return (
    <main className='app bg-magnolia h-[667px] relative p-0 flex flex-col justify-between'>
      <div>
        <img src="public/images/bg-sidebar-mobile.svg" alt="sidebar" />
      </div>
      <MultistepForm />
      <div className="footer h-[70px] bg-white"></div>
    </main>
  )
}

export default App
