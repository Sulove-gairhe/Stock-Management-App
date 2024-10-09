// Importing necessary modules and components
import { useState } from 'react'; // Hook for managing state (though not used here)
import CardRender from './CardRender.jsx'; // Component for rendering individual product cards
import CardData from './CardData.jsx'; // Data source containing information about the products
import Navbar from './NavBar.jsx'; // Navigation bar component
import Sidebar from './Sidebar.jsx'; // Sidebar component for navigation links

// Main App Component
function App() {
  return (
    <div>
      {/* Navigation Bar at the top */}
      <Navbar />

      {/* Main container with two parts: Sidebar and product cards */}
      <div className="relative flex flex-row">

        {/* Sidebar positioned absolutely at the top-right */}
        <Sidebar  />

        {/* Main content area for displaying the product cards */}
        <div className="mx-2 my-2 py-2 px-2">
          <h1 className="py-2 text-2xl my-4">
            Featured Products {/* Title of the product section */}
          </h1>

          {/* Flex container for centering the product cards */}
          <div className="flex justify-center items-center bg-gray-100">
            {/* Rendering each product using the CardRender component */}
            {CardData.map((n) => (
              <CardRender
                key={n.key}          // Unique key for each product
                Stock={n.Stock}       // Passing product stock info
                ModelNo={n.ModelNo}   // Passing model number of the product
                Image={n.Image}       // Passing product image URL
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
