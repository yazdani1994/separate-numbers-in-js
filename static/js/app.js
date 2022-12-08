const inpNumber = document.getElementById("my-decimal-number");
inpNumber.addEventListener("keyup", handlerSeparateNumbers);

// functions
function funcReverseString(str) {
  return str.split("").reverse().join("");
}

// event handlers
function handlerSeparateNumbers(e) {
  const thisElement = e.target;
  let thisElementValue = thisElement.value;

  thisElementValue = thisElementValue.replace(/,/g, "");

  if (isNaN(Number(thisElementValue))) {
    alert("لطفا از وارد کردن حروف خودداری فرمایید !");
    return false;
  }

  let seperatedNumber = thisElementValue.toString();
  seperatedNumber = funcReverseString(seperatedNumber);
  seperatedNumber = seperatedNumber.split("");

  let tmpSeperatedNumber = "";

  j = 0;
  for (let i = 0; i < seperatedNumber.length; i++) {
    tmpSeperatedNumber += seperatedNumber[i];
    j++;
    if (j == 3) {
      tmpSeperatedNumber += ",";
      j = 0;
    }
  }

  seperatedNumber = funcReverseString(tmpSeperatedNumber);
  if (seperatedNumber[0] === ",")
    seperatedNumber = seperatedNumber.replace(",", "");
  thisElement.value = seperatedNumber;
}
