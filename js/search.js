function getDate() {

  let date = document.getElementById("date").value;

  let march = document.getElementsByClassName("march/2020");
  let april = document.getElementsByClassName("april/2020");
  let may = document.getElementsByClassName("may/2020");
  let june = document.getElementsByClassName("june/2020");


  if (date === "march" || date === "MARCH" || date === "March") {

      for (let a = 0; a < march.length; a++) {
          march[a].style.display = "block";

      }
      for (let b = 0; b < april.length; b++) {
          april[b].style.display = "none";
      }
      for (let c = 0; c < may.length; c++) {
          may[c].style.display = "none";
      }
      for (let d = 0; d < june.length; d++) {
          june[d].style.display = "none";
      }
  } else if (date === "april" || date === "APRIL" || date === "April") {

      for (let a = 0; a < april.length; a++) {
          april[a].style.display = "block";

      }
      for (let c = 0; c < may.length; c++) {
          may[c].style.display = "none";
      }
      for (let d = 0; d < june.length; d++) {
          june[d].style.display = "none";
      }
      for (let b = 0; b < march.length; b++) {
          march[b].style.display = "none";
      }

  } else if (date === "may" || date === "MAY" || date === "May") {

      for (let a = 0; a < may.length; a++) {
          may[a].style.display = "block";

      }
      for (let c = 0; c < april.length; c++) {
          april[c].style.display = "none";
      }
      for (let d = 0; d < june.length; d++) {
          june[d].style.display = "none";
      }
      for (let b = 0; b < march.length; b++) {
          march[b].style.display = "none";
      }

  } else if (date === "june" || date === "JUNE" || date === "June") {

      for (let a = 0; a < june.length; a++) {
          june[a].style.display = "block";

      }
      for (let c = 0; c < may.length; c++) {
          may[c].style.display = "none";
      }
      for (let d = 0; d < april.length; d++) {
          april[d].style.display = "none";
      }
      for (let b = 0; b < march.length; b++) {
          march[b].style.display = "none";
      }

  }

}