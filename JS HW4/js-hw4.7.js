function foobar(text,tipe){
    document.write('<ul>')
    for (let i=0;i<tipe;i++){
        document.write( `<li>${text}</li>`);
    }
    document.write('</ul>')
}
foobar( 'Ukraine,Odessa',5);