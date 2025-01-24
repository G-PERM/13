let i = 1;
let display = "";
while (i <= 100) {
  a = i ** 2;
  display += i + "² = " + a + "<br>";
  i++;
}
document.getElementById("display").innerHTML = display;
let i2 = 1;
let display2 = "";
while (i2 <= 100) {
  a2 = Math.sqrt(i2);
  a2 = +a2.toFixed(4);
  display2 += "√" + i2 + " = " + a2 + "<br>";
  i2++;
}
document.getElementById("display2").innerHTML = display2;
