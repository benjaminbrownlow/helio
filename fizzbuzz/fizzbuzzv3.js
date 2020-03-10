let forValue;
const showValue0 = () => {
  for (
    forValue = document.getElementById("value0").value;
    forValue <= 100
  ) {
    if (forValue % 3 === 0 && forValue % 5 === 0) {
      document.getElementById("inputvalue0").innerHTML = "FizzBuzz";
    } else if (forValue % 3 === 0) {
      document.getElementById("inputvalue0").innerHTML = "Fizz";
    } else if (forValue % 5 === 0) {
      document.getElementById("inputvalue0").innerHTML = "Buzz";
    } else {
      document.getElementById("inputvalue0").innerHTML = forValue;
    }
  }
};
