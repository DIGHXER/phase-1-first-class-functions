function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function() {return'hey'})

function returnsANamedFunction(){
    return function receivesAFunction(){}
 }
 
 function returnsAnAnonymousFunction(){
    return function() { 
        return 'someStuff'
    };
}