import { StepList, CreateStep } from './sections';
import { Footer, Header } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <StepList />
      <CreateStep />
      <Footer />
    </>
  );
}

export default App;
