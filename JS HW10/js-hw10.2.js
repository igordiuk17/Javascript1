const someForm=document.forms.someForm;

const sendButton=someForm.sendButton;
console.log(sendButton);
sendButton.addEventListener('click',()=>{
    const nameValue=someForm.name.value;
    const surnameValue=someForm.surname.value;
    const ageValue=someForm.age.ageValue;
    let  obj={nameValue,surnameValue,ageValue};
    console.log(obj);

});