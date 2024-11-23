let sessionlist;
if(localStorage.getItem('sessionlist')){
    sessionlist=JSON.parse(localStorage.getItem('sessionlist'));
}else{
    sessionlist=[];
}
sessionlist.push(new Date());
localStorage.setItem('sessionlist',JSON.stringify(sessionlist));