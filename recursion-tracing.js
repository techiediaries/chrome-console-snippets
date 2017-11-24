


function factorial(n,a){
    
    if(n === 0) {
        
        return a;
    
    }
    console.trace("trace factorial(",n,",",a,")");
    return factorial(n - 1 , n * a);
}

factorial(3,10);