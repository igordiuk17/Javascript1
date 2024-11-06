let time=+prompt('enter time');
console.log(time);
if (time<=15){
    console.log('1я четверть часа');
}else if (time>15 && time<=30){
    console.log('2я четверть часа');
}else if (time>30 && time<=45){
    console.log('3я четверть часа');
}else if (time>45 && time<=59){
    console.log('4я четверть часа');
}else {
    console.log('введите час от 0 до 59');
}