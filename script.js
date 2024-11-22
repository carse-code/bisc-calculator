function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        const resultField = document.getElementById("result");
        resultField.value = eval(resultField.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        alert("خطأ في الحساب!");
    }
}
