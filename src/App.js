import "./index.css";
import Header from "./components/Header/Header";
import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div>
      <Header />

      <div className="flex space-x-7">
        <LeftSide />
        <CenterSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
