import React from "react";
import fridgeImage from '../src/assets/refrigerator.jpg';
import washingMachineImage from '../src/assets/WashingMachine.png';

const cardData = [
  {
    key: 1,
    Stock: 28,
    ModelNo: "2022S8",
    Image: fridgeImage,  
  },
  {
    key: 2,
    ModelNo: "2022GS",
    Stock: 9,
    Image: washingMachineImage,
  },
  {
    key: 3,
    ModelNo: "3032S8",
    Stock: 5,
    Image: fridgeImage,
  },
  {
    key: 4,
    ModelNo: "HG2024S2",
    Stock: 12,
    Image: washingMachineImage,
  },
  {
    key: 5,
    ModelNo: "W1880H2AX",
    Stock: 6,
    Image: fridgeImage,
  }
];

export default cardData;
