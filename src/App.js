// import logo from './logo.svg';
import './App.css';
import Routing from './Routing/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
// import RegForm from './Component/Registration/RegForm';
// import NewForm from './Component/NewForm';
import './Component/Home/Home'
function App() {
  return (
    <div className="App">
      {/* <RegForm /> */}
      <Routing />
      {/* <RegistrationForm/> */}
    </div>
  );
}

export default App;
