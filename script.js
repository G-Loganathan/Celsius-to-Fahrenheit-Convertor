const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

function convertFn() {
  let celsiusVal = celsius.value;
  let fahrenheitVal;

  if (celsiusVal === "") {
    fahrenheit.innerHTML = "Enter a number";
    fahrenheit.classList.remove("bgcolor-green");
    fahrenheit.classList.add("bgcolor-red");
  } else if (isNaN(celsiusVal)) {
    fahrenheit.innerHTML = "Enter only number";
    fahrenheit.classList.remove("bgcolor-green");
    fahrenheit.classList.add("bgcolor-red");
  } else {
    fahrenheitVal = (celsiusVal * 9) / 5 + 32;
    fahrenheit.innerHTML = `${fahrenheitVal} °F`;
    fahrenheit.classList.add("bgcolor-green");
  }
}