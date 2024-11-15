let nums=[11,21,3];
sortNums(nums,'ascending');
sortNums(nums,'descending');
function  sortNums(arrayOfNums,direction){
    const sort=arrayOfNums.sort((a,b)=>a-b);
    if (direction==='ascending'){
        return sort;
    }console.log(nums)
    if(direction==='descending'){
        return sort.reverse();
    }
}console.log(nums)