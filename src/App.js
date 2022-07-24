import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" />
      </div>
    </>
  );
}

export default App;
