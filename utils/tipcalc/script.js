function calcTip() {
  const tipPercentage = (document.getElementById("tip-percentage").value / 100);
  const subtotal = document.getElementById("subtotal").value * 1;
  const tipAmount = document.getElementById("tip-amount");
  const total = document.getElementById("total");
  // document.getElementById("tip-amount").textContent("$" + subtotal * (tipPercentage / 100));
  // document.getElementById("total").textContent("$" + (subtotal * (tipPercentage / 100)) + subtotal);

  tipAmount.innerHTML = "tip: $" + Math.round((subtotal * tipPercentage) * 100) / 100;
  total.innerHTML = "total: $" + ((subtotal * tipPercentage) + subtotal);
}
