let day=+prompt('enter day');
console.log(day);
if (day<=10){
    console.log('1я декада');
}else if (day>10 && day<=20){
    console.log('2я декада');
}else if (day>20 && day<=31){
    console.log('3я декада');
}