var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var minus = document.getElementById("minus");
var add = document.getElementById("add");
var dot= document.getElementById("dot");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var clear = document.getElementById("clear");
var equal = document.getElementById("equal");
var display = document.getElementById("display");

function displayEditor(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

one.addEventListener("click", function () {
  displayEditor(one.value);
});
two.addEventListener("click", function () {
  displayEditor(two.value);
});
three.addEventListener("click", function () {
  displayEditor(three.value);
});
four.addEventListener("click", function () {
  displayEditor(four.value);
});
five.addEventListener("click", function () {
  displayEditor(five.value);
});
six.addEventListener("click", function () {
  displayEditor(six.value);
});
seven.addEventListener("click", function () {
  displayEditor(seven.value);
});
eight.addEventListener("click", function () {
  displayEditor(eight.value);
});
nine.addEventListener("click", function () {
  displayEditor(nine.value);
});
dot.addEventListener("click",function(){
    display.value += dot.value;
})
zero.addEventListener("click", function () {
  displayEditor(zero.value);
});
add.addEventListener("click", function () {
  displayEditor(add.value);
});
minus.addEventListener("click", function () {
  displayEditor(minus.value);
});
multiply.addEventListener("click", function () {
  displayEditor(multiply.value);
});
divide.addEventListener("click", function () {
  displayEditor(divide.value);
});
clear.addEventListener("click", function () {
  display.value = "0";
});
equal.addEventListener("click", function () {
  display.value = eval(display.value);
});
