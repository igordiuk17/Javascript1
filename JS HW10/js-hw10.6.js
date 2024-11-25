function addlocalstorage(arrayName,obgToAdd){
    const lsItem=localStorage.getItem(arrayName);
    if (!lsItem){
        // throw new Error('there is no such array');
    }
    const array=JSON.parse(lsItem);
    if (typeof obgToAdd==='object'){

    }
    const  jsonArray=JSON.stringify(array);
    localStorage.setItem(arrayName,jsonArray);
}
addlocalstorage('sessionlist',{});