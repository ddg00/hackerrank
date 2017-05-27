process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        let stack=[];
        let balance = true;
        var s = readLine();
        const char = s.split("");
        char.map(function(c){
            if(openClose(c)){
                stack.unshift(c);
            }else{
                if(checkClose(stack[0],c)){
                    stack.shift();
                }else{
                    balance = false;
                }
            }
        });
        if(stack.length !== 0){
            balance = false;
        }
        if(balance) console.log('YES');
        else console.log('NO');
    }

}

function openClose(a){
    if(a==='(' || a==='{' || a==='[') return true
    return false;
}

function checkClose(open,close){
    if(!open){
        return false;
    }
    switch(close){
        case '}':
            if(open.includes('{'))
            return true;
        case ']':
            if(open.includes('['))
            return true;
        case ')':
            if(open.includes('('))
            return true;
    }
    return false;
}
