function doClick() {
    console.log(`doClick()`)
}

function onMouseOver() {
    console.log(`onMouseOver()`)
}

function focusOnNameTxt() {
    console.log(`focusOnNameTxt()`)
}

function blurOnNameTxt() {
    console.log(`blurOnNameTxt()`)
}

var nameText = document.getElementById("nameTxt")
// console.log(nameText)
nameText.addEventListener("focus" , focusOnNameTxt)
nameText.addEventListener("blur", blurOnNameTxt)

/* nameText.addEventListener("blur", function() {
    console.log(`addEventListener blurOnNameTxt`)
}) */

/* nameText.addEventListener("blur", () => {
    console.log(`addEventListener () => blurOnNameTxt`)
}) */