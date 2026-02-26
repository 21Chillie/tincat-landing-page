import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
