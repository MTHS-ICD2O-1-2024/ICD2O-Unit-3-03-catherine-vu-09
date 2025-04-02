// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine
// Created on: April 2 2025
// This file contains the JS functions for index.html

/**
* Calculates volume of a sphere
*/

    function calculateVolume() {
    let radius = parseFloat(document.getElementById("radius-number").value);
    if (isNaN(radius) || radius <= 0) {
      document.getElementById("volume").innerHTML = "Please enter a valid radius.";
      return;
    }
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").innerHTML = `Volume: ${volume.toFixed(2)} mm³`;
  }
