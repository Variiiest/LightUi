import './App.css';

import NavBar from './components/NavBar'
import CodeCard from './components/CodeCard'
import { BrowserRouter as Router } from 'react-router-dom';
import SecondNav from './components/SecondNav'
import Auth1 from "./UI/Auth/Auth1";
import Auth2 from "./UI/Auth/Auth2";
function App() {
  return (
    <div className="App bg-gray-100">
    <Router>
<NavBar/>
<SecondNav/>
<CodeCard code="Nahi h abhi">
<Auth1/>
</CodeCard>
<CodeCard code="Nahi h abhi">
<Auth2/>
</CodeCard>

</Router>
    </div>
  );
}

export default App;
