import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Applyjobs from './pages/Applyjobs'
import Applicationjobs from './pages/Applicationjobs'
import Recrutorlogin from './components/Recrutorlogin'
import { Appscontext } from './contexts/Appscontext'
import Dashboard from './pages/Dashboard'
import Addjobs from './pages/Addjobs'
import Managejobs from './pages/Managejobs'
import ViewApplication from './pages/ViewApplication'
import 'quill/dist/quill.snow.css'
function App() {
  const [count, setCount] = useState(0)
const {showrecrutporlogin}=useContext(Appscontext)
  return (
    <>
    {showrecrutporlogin && <Recrutorlogin/>}
    
<Routes>
<Route path='/' element={<Home/>}/>;
<Route path='/applyjobs/:id' element={<Applyjobs/>}/>;
<Route path='/Applicationjobs' element={<Applicationjobs/>}/>;
<Route path='/dashboard' element={<Dashboard/>}>
<Route path='addjobs' element={<Addjobs/>}/>
<Route path='managejobs' element={<Managejobs/>}/>
<Route path='viewapplications' element={<ViewApplication/>}/>
</Route>
</Routes>

 
    </>
  )
}

export default App
