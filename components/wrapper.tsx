import React from "react";
import SpotifyWidget from "./spotifynowplaying";
import Navbar from "./nav";

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
