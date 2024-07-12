import Workflow from "./components/Workflow";
import Feature from "./components/feature";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
      </div>
    </>
  );
};

export default App;
