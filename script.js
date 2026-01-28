let result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", () => {

  add1();

  setTimeout(() => {
    add4(); // Callback Queue
  }, 0);

  Promise.resolve().then(() => {
    add3(); // Microtask Queue
  });

  add2();
});

function add1() {
  result.innerHTML += "1️⃣ Start (Synchronous)<br/>";
}

function add2() {
  result.innerHTML += "2️⃣ End (Synchronous)<br/>";
}

function add3() {
  result.innerHTML += "3️⃣ Promise (Microtask Queue)<br/>";
}

function add4() {
  result.innerHTML += "4️⃣ setTimeout (Callback Queue)<br/>";
}
