function  arrMin(nambers){
    let min=nambers[0];
    for(const namber of nambers){
        if (namber<min){
            min=namber
        }
    }
    return min;
}
console.log( arrMin([4,5,8,100,0,-30]));
