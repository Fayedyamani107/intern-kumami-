import React from 'react';
import GameList from './components/gamelist';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-[#132829] text-white">

      <Navbar />


      <div className="pt-24 px-6 md:px-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white">
          Kumami Game Portal
        </h1>
        <GameList />
      </div>
    </div>
  );
};

export default App;
