let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray
    .sort((a,b)=>b.monthDuration-a.monthDuration);
coursesAndDurationArray .filter (value=>value.monthDuration>5);
coursesAndDurationArray.map((value,index )=>{
    value.id = index+1;
    return value;

});


console.log(coursesAndDurationArray .filter (value=>value.monthDuration>5));
