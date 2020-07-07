const btn = document.getElementById("btn");
const numInput = document.getElementById("num");
const output = document.getElementById("output");
const error = document.getElementById("error");

///Function to check
const checkBinary = numInput.addEventListener("keydown", (e) => {
  if (e.keyCode !== 48 && e.keyCode !== 49) {
    error.innerText = "Please enter 0 or 1";
    setTimeout(() => {
      error.innerText = "";
      numInput.value = "";
    }, 1000);
  } else {
    btn.addEventListener("click", (e) => {
      const num = numInput.value;
      console.log(num.length);
      if (num.length > 8) {
        error.innerText = "You can only enter up to 8 digits";
      } else {
        const binaryNum = Number.parseInt(num, 2);
        output.innerText = binaryNum;
        setTimeout(() => {
          output.innerText = "";
          numInput.value = "";
        }, 10000);
      }
      e.preventDefault();
    });
  }
});

// btn.addEventListener("click", (e) => {
//   const num = numInput.value;
//   console.log(num);
//   const binaryNum = Number.parseInt(num, 2);
//   console.log(binaryNum);
//   output.innerText = binaryNum;
//   e.preventDefault();
// });