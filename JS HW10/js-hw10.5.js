const input=document.getElementById('KG');
const resultDiv=document.getElementById('result');
input.oninput=function () {
    const kilos=+this.value;
    let result=kilos*2.2;
    resultDiv.innerText=result;

}