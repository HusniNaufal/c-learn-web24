import React from "react";
import Kepala from "./components/Kepala";
import Hero from "./components/Utama";
import Kaki from "./components/Kaki";

const App = () => {
  return (
    <div className="relative min-h-screen pb-2">
      <Kepala />
      <Hero />
      <Kaki />
    </div>
  );
};

export default App;




//function App() {
  //return <Hello />
//}

//export default App//
