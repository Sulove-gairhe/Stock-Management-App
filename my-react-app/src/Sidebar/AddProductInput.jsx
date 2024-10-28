// import React, { useState } from "react";

// const ProductForm = () => {
//   const [selectedCategory, setSelectedCategory] = useState(""); // Track which category is selected
//   const [formData, setFormData] = useState({}); // Store input values in an object

//   // Handle category selection change
//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     setFormData({}); // Reset form data when switching categories
//   };

//   // Handle input field changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // You can now send formData to a backend API or save it in localStorage
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Select a Product Category:</h2>

//       {/* Category Selection */}
//       <label>
//         <input
//           type="radio"
//           name="category"
//           value="tv"
//           checked={selectedCategory === "tv"}
//           onChange={handleCategoryChange}
//         />
//         TV
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="category"
//           value="refrigerator"
//           checked={selectedCategory === "refrigerator"}
//           onChange={handleCategoryChange}
//         />
//         Refrigerator
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="category"
//           value="washingMachine"
//           checked={selectedCategory === "washingMachine"}
//           onChange={handleCategoryChange}
//         />
//         Washing Machine
//       </label>

//       {/* Conditional Input Fields */}
//       {selectedCategory === "tv" && (
//         <div>
//           <h3>TV Options:</h3>
//           <label>
//             Type:
//             <select name="tvType" onChange={handleInputChange}>
//               <option value="">Select Type</option>
//               <option value="LED">LED</option>
//               <option value="OLED">OLED</option>
//               <option value="QLED">QLED</option>
//             </select>
//           </label>
//           <label>
//             Screen Size (in inches):
//             <input
//               type="number"
//               name="screenSize"
//               onChange={handleInputChange}
//             />
//           </label>
//         </div>
//       )}

//       {selectedCategory === "refrigerator" && (
//         <div>
//           <h3>Refrigerator Options:</h3>
//           <label>
//             Type:
//             <select name="fridgeType" onChange={handleInputChange}>
//               <option value="">Select Type</option>
//               <option value="Single Door">Single Door</option>
//               <option value="Double Door">Double Door</option>
//               <option value="Side by Side">Side by Side</option>
//             </select>
//           </label>
//           <label>
//             Capacity (in Liters):
//             <input
//               type="number"
//               name="fridgeCapacity"
//               onChange={handleInputChange}
//             />
//           </label>
//         </div>
//       )}

//       {selectedCategory === "washingMachine" && (
//         <div>
//           <h3>Washing Machine Options:</h3>
//           <label>
//             Type:
//             <select name="washerType" onChange={handleInputChange}>
//               <option value="">Select Type</option>
//               <option value="Semi-Automatic">Semi-Automatic</option>
//               <option value="Fully Automatic">Fully Automatic</option>
//             </select>
//           </label>
//           <label>
//             Capacity (in Kg):
//             <input
//               type="number"
//               name="washerCapacity"
//               onChange={handleInputChange}
//             />
//           </label>
//         </div>
//       )}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ProductForm;
