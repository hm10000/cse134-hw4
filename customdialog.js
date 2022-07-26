//Dialog
const altDialog = document.getElementById("alertDialog");

const cfmDialog = document.getElementById("confirmDialog");

const prDialog = document.getElementById("promptDialog");

//Addeventlistener
const showAlt = document
  .getElementById("btnAlert")
  .addEventListener("click", showAltDialog);

const showConfirm = document
  .getElementById("btnConfirm")
  .addEventListener("click", showConfirmDialog);

const showPrompt = document
  .getElementById("btnPrompt")
  .addEventListener("click", showPrDialog);

const closeAlt = document
  .getElementById("closeAlt")
  .addEventListener("click", closeAltDialog);

const cancelConfirm = document
  .getElementById("cancelConfirm")
  .addEventListener("click", falseDialog);

const okConfirm = document
  .getElementById("okConfirm")
  .addEventListener("click", trueDialog);

const closePrompt = document
  .getElementById("closePromptDialog")
  .addEventListener("click", closePrDialog);

const okPrompt = document
  .getElementById("okPromptDialog")
  .addEventListener("click", okPrDialog);

//Function
function showAltDialog() {
  altDialog.show();
}

function closeAltDialog() {
  altDialog.close();
}

function showConfirmDialog() {
  cfmDialog.show();
}

function falseDialog() {
  let text = "Confirm result: false";
  document.getElementById("result2").style.display = "block";
  document.getElementById("result2").innerHTML = text;
  cfmDialog.close();
}

function trueDialog() {
  let text = "Confirm result: true";
  document.getElementById("result2").style.display = "block";
  document.getElementById("result2").innerHTML = text;
  cfmDialog.close();
}

function showPrDialog() {
  prDialog.show();
}

function closePrDialog() {
  let text;
  document.getElementById("result2").style.display = "block";
  document.getElementById("result2").innerHTML = "User didn't enter anything";
  prDialog.close();
}

function okPrDialog() {
  const input = document.getElementById("yourName").value;
  document.getElementById("result2").style.display = "block";
  const data = cleanData(`Prompt result: ${input}`);
  document.getElementById("result2").innerHTML = data;
  // console.log(data);
  prDialog.close();
}
