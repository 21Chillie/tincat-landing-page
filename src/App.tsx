import { Footer } from "./components/footer/Footer";
import Main from "./components/Main";
import Navbar from "./components/nav/Navbar";
import Sidebar from "./components/nav/Sidebar";
import { SubLink } from "./components/nav/SubLink";

function App() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      <Navbar></Navbar>
      <SubLink></SubLink>
      <Sidebar></Sidebar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
