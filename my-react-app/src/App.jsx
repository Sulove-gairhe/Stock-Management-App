// Importing necessary modules and components
import { useState } from 'react'; 
import CardRender from './CardRender.jsx'; 
import CardData from './CardData.jsx'; 
import Navbar from './NavBar.jsx'; 
import Sidebar from './Sidebar/Sidebar.jsx'; 

// Main App Component
function App() {
  return (
    <div className="bg-yellow-300 min-h-screen ">

      <Navbar />

      {/* Main container with two parts: Sidebar and product cards */}
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Content Section */}
        <div className="flex-1 mx-2 my-2 py-2 px-2">
          <h1 className="py-2 text-2xl my-4 text-center">
            Featured Products
          </h1>

          {/* Flex container for centering the product cards */}
          <div className="  justify center items-center grid sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5">
            {/* Rendering each product using the CardRender component */}
            {CardData.map((n) => (
              <CardRender
                key={n.key}
                Stock={n.Stock}
                ModelNo={n.ModelNo}
                Image={n.Image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
