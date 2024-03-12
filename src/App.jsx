import './App.css'
import MultistepForm from './components/MultistepForm/MultistepForm'

function App() {

  return (
    <main className='app bg-magnolia bg-main-mobile md:bg-none bg-fixed bg-contain bg-no-repeat p-0 h-screen flex flex-col justify-between md:items-center md:justify-center'>
      <MultistepForm />
    </main>
  )
}

export default App
