const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Validate inputs not empty
    if (!dividend || !divider) {
      result.innerText = `Division not performed. Both values are required in inputs. Try again`;
      throw new Error(
        `Division not performed. Both values are required in inputs. Try again`
      );
    }
    // Validate dividing by 0
    if (divider == 0) {
      result.innerText = `Division not performed. Invalid number provided. Try again`;
      throw new Error(
        `Division not performed. Invalid number provided. Try again`
      );
    }
    // Validate input NaN
    if (isNaN(dividend) || isNaN(divider)) {
      document.querySelector(
        "body"
      ).innerHTML = `<h1>Something critical went wrong. Please reload the page</h1>`;
      throw new Error(`Something critical went wrong. Please reload the page`);
    }

    // Display result without decimals
    result.innerText = Math.floor(dividend / divider);
  } catch (err) {
    console.error(err);
  }
});
