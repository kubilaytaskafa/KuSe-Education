import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <RouterConfig />
    </div>
  );
};

export default App;
