
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Formcontent from './component/Formcontent';


function App() {
  return (
    <> 
    <Navbar/>
    <Router> 

    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          {/* Sidebar Content */}
          <Sidebar/>
        </div>

        {/* Main Content */}
        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          {/* Page Content */}
          <Formcontent/>
        </div>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;
