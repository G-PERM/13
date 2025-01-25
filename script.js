function d1() {
  let i = Number(document.getElementById("sp1").value);
  let j = Number(document.getElementById("ep1").value);
  let display = "";
  if (
    Number.isInteger(i) &&
    Number.isInteger(j) &&
    i !== "" &&
    j !== "" &&
    i <= j
  ) {
    while (i <= j) {
      let a = i ** 2;
      display += i + "² = " + a + "<br>";
      i++;
    }
  } else {
    display =
      "Please enter integers and make sure starting point is less than or equal to the ending point.";
  }
  document.getElementById("display").innerHTML = display;
}
function d2() {
  let i2 = Number(document.getElementById("sp2").value);
  let j2 = Number(document.getElementById("ep2").value);
  let k = Number(document.getElementById("k").value);
  let display2 = "";
  if (
    Number.isInteger(i2) &&
    Number.isInteger(j2) &&
    i2 >= 0 &&
    j2 >= 0 &&
    i2 !== "" &&
    j2 !== "" &&
    k >= 2 &&
    k <= 16 &&
    Number.isInteger(k) &&
    i2 <= j2
  ) {
    while (i2 <= j2) {
      let a2 = Math.sqrt(i2);
      a2 = +a2.toFixed(k);
      display2 += "√" + i2 + " = " + a2 + "<br>";
      i2++;
    }
  } else {
    display2 =
      "Please enter whole numbers and make sure the starting point is less than or equal to the ending point, and the decimal places is an integer greater than or equal to 2 but less than or equal to 16.";
  }
  document.getElementById("display2").innerHTML = display2;
}
