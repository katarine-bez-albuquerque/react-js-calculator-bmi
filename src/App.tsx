import Home from "./pages/home";
import { GlobalStyle } from './style.tsx';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <div className="page">
        <Home />
      </div>
    </>
         
  )
}

export default App;
