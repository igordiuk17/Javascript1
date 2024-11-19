function cloner(obj){
    if (obj){
        let functions=[];
        for (const  key in obj){
            if (typeof obj[key]==='function'){
                const functionclone= obj[key].bind({});
                functions.push({functionclone,key});
            }

        }
        const cloneobj=JSON.parse(JSON.stringify(obj));
        for(const func of functions) {
            cloneobj[func.key] = func.functionclone
        }
        console.log(cloneobj);
        return cloneobj
    }
    throw new Error('*!!!*');
}
const clone=  cloner({id:456,name:'alladin',greeteng(){console.log('Hai')},foo(){console.log('Yes')}});
clone.foo()