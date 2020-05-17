let logins = ['beeinters', 'beeline','bee']

function validate(data) {
    const { login, password, confirmPassword, license, firstName,  gender,lastName,secondName } = data;
    let inputs = document.getElementsByTagName('input')
    for(let i=0;i <= logins.length;i++ ){
        if(login === logins[i]){
             alert('Такой логин уже существует')
        } 
}
     if (!login || !password) {
         alert('Укажите логин/пароль');
     } else if (password.length < 6) {
         alert('Пароль должен быть длинной не менее 6 символов');
     } else if (password !== confirmPassword) {
         alert('Пароли должны совпадать');
     }else if(!firstName){
         alert('Напишите нам, как вас зовут')
     }else if(!lastName){
         alert('Напишите нам, какая у вас фамилия')
     }else if(!secondName){
         alert('Напишите нам, какое у вас отчество')
     }else if (!license) {
        alert('Необходимо согласие');
    }else if(gender === 'female') {
         alert(`Уважаемая ${firstName}, заявка создана`);
         for(let i =0; i <= inputs.length;i++){
             inputs[i].value = ''
         }
     }else if(gender === 'male') {
         alert(`Уважаемый ${firstName}, заявка создана`);
         for(let i =0; i <= inputs.length;i++){
             inputs[i].value = ''
         }
     }else alert('wow')
    }
