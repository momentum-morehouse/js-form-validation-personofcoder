let form = document.querySelector("#parking-form")
console.log(form)
form.addEventListener("submit", function(event) {
  event.preventDefault()
  let cvv = document.querySelector("#cvv");
  if (cvv.value.length === 3){
    console.log("valid");
    cvv.parentElement.classList.add("input-valid");
    console.log
  }
else {
  console.log("invalid")
}
})
function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

let validcardnum = document.querySelector("#credit-card-field");

validcardnum.addEventListener('change', function(){
    let creditcardnum = document.querySelector("#credit-card-field").value;
    if (validateCardNumber(creditcardnum)){
        alert("")
    } else {
        alert("Invaild card")
    }
})
console.log('Add validation!');
