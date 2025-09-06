import { useState } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import OptionMenu from "./Components/OptionMenu";
import "./App.css";

function App() {

  return (
    <div>
      <Banner />
      <OptionMenu />
      <Footer />
    </div>
  );
}

export default App;
