import React from "react";
import SpotifyWidget from "./helpers/spotify";
import Navbar from "./ui/nav";

const Wrapper = ({ children }) => {
   return (
      <div className="container mx-auto px-20">
         <Navbar />
         {children}
         <SpotifyWidget />
      </div>
   );
};

export default Wrapper;
