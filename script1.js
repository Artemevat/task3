let pswInput = document.getElementById("pswInput");

pswInput.pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";
pswInput.title = "Требования к паролю:не менее 6 символов,символы разных регистров,числа,спец. символы";


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
     
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    
let d = new Date();
let hours = d.getHours();
let str1 = (d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
let str2 = "Сегодня" + " " + (d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " г." + " " + days[d.getDay()]);

document.write(str1+ "<br/><b>" + str2 + "</b><br/>");


//function isIE(){
    //const ua = window.navigator.userAgent;
    //const msie = ua.indexOf('MSIE');
    //const trident = ua.indexOf('Trident');
    //return (msie > 0 || trident > 0);
//}

//function ShowIEAlert() {
    //if(isIExplorer () === false){
        //alert ("Пожалуйста, используйте браузер Internet Explorer")
   // }
//}
function notIE(){
    var ua = window.navigator.userAgent;
    if (ua.indexOf('Edge/') > 0 || 
        ua.indexOf('Trident/') > 0 || 
        ua.indexOf('MSIE ') > 0){
       return false;
    }else{
        return true;                
    }
}

if (notIE) {
    alert("Вы используете не тот браузер. Пожалуйста, используйте IE");
}