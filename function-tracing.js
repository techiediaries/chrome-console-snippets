function X(){
    return Y();
}

function Y(){
    return Z();
}

function Z(){
    console.trace("Trace Back to Z");
    return 0;
}

function W(){
    console.trace("Trace Back to W")
    return 1;
}

function T(a){
    if(a === 0) return 1;
    return T(a) - 1;
}

X();
W();

T(10);