function calculateTip() {
  const amount = document.getElementById("amount").value
  const tip = document.getElementById("tip").value
  let totalAmount = (amount * (tip * 10));
  document.getElementById("tipamount").innerHTML = "Your Total Amount-" +  totalAmount;
  }
