function foobar(users){
    for(const  user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age} </div>`)
    }
}
foobar ([
    { id:1,name: 'igor',age :50},
    {id:2,name:'Ira',age:35},
    { id:3, name: 'Olga',age:40},
    {id:4, name: 'Kolia',age:45},
    { id:5, name: 'Sveta',age:44},
])