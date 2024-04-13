document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("taxForm");
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementsByClassName("close")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculateTax();
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  function showNumberInfo() {
    alert("Please enter numbers only in this field.");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const tooltipButton = document.querySelector(".tooltip-button");
    const tooltipText = document.querySelector(".tooltip-text");

    tooltipButton.addEventListener("mouseover", function () {
      tooltipText.style.opacity = "1";
    });

    tooltipButton.addEventListener("mouseout", function () {
      tooltipText.style.opacity = "0";
    });
  });

  function calculateTax() {
    const grossIncome = parseFloat(
      document.getElementById("grossIncome").value
    );
    const extraIncome =
      parseFloat(document.getElementById("extraIncome").value) || 0;
    const ageGroup = document.getElementById("ageGroup").value;
    const deductions =
      parseFloat(document.getElementById("deductions").value) || 0;

    let tax = 0;

    function validateNumber(input) {
      if (isNaN(input.value)) {
        document.getElementById("errorMessage").style.display = "block";
        input.value = "";
      } else {
        document.getElementById("errorMessage").style.display = "none";
      }
    }

    const taxableIncome = grossIncome + extraIncome - deductions;

    if (taxableIncome > 800000) {
      const taxableAmountAboveThreshold = taxableIncome - 800000;

      if (ageGroup == "<40") {
        tax = 0.3 * taxableAmountAboveThreshold;
      } else if (ageGroup == "≥40 &lt;60") {
        tax = 0.4 * taxableAmountAboveThreshold;
      } else if (ageGroup == "≥60") {
        tax = 0.1 * taxableAmountAboveThreshold;
      }
    }

    const overallIncomeAfterTax = taxableIncome - tax;

    // Display the result
    document.getElementById(
      "result"
    ).textContent = `Your overall income after tax deduction will be ${overallIncomeAfterTax.toFixed(
      2
    )} Lakhs`;
    modal.style.display = "block";
  }
});
