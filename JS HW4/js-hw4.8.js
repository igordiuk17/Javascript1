function foobar(arrayPrim){
    document.write(`<ul>`);
    for (const item of arrayPrim){
        document.write(` <li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar([1,2,3,4,'pi','Okey','Yes','no',true,false])
