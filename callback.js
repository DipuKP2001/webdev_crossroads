function add(n1,n2,callback){
    let err=false;
    if(!n1 && !n2) 
        err=true;
    sum = n1+n2;
    callback(sum,err);
}

function multiply(n1,n2,callback){
    mul = n1*n2;
    callback(mul);
}

function division(n1,n2,callback){
    div = n1/n2;
    callback(div);
}



add(20,40,(val1,err)=>{
    if (!err)
        console.log(val1);
    else
        console.log("Error occured");
    multiply(val1,val1,(val2)=>{
        console.log(val2);
        division(val2,10,(result)=>{
            console.log(result);
        })
    });
});