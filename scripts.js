const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  console.log(divider);
  if (!dividend || !divider) {
    result.innerText = `Division not performed. Both values are required in inputs. Try again`;
  } else if (divider == 0) {
    console.error(`Division not performed. Invalid number provided. Try again`);
    result.innerText = `Division not performed. Invalid number provided. Try again`;
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});
