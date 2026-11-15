function calcTip() {
  const tipPercentagePR = document.getElementById("tip-percentage").value;
  const subtotalPR = document.getElementById("subtotal").value;
  const tipPercentage = Math.round(tipPercentagePR * 100) / 100
  const subtotal = Math.round(subtotalPR * 100) / 100
  const tipAmount = document.getElementById("tip-amount");
  const total = document.getElementById("total");
  // document.getElementById("tip-amount").textContent("$" + subtotal * (tipPercentage / 100));
  // document.getElementById("total").textContent("$" + (subtotal * (tipPercentage / 100)) + subtotal);
  const completeTip = Math.round((subtotal * tipPercentage) * 100) / 100;
  tipAmount.innerHTML = "tip: $" + completeTip;
  total.innerHTML = "total: $" + (completeTip + subtotal);
}
