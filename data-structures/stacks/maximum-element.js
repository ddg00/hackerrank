function processData(input) {
    //Enter your code here
    let queries = input.split("\n");
    let stack = [];
    for(i=1;i<=parseInt(queries[0]);i++){
        query = queries[i].split(" ");
        switch(query[0]) {
            case '1':
                stack.unshift(query[1]);
                break;
            case '2':
                stack.shift();
                break;
            case '3':
                console.log(getMax(stack));
                break;
        }
    }

}

function getMax(stack){
    let max = stack[0];
    stack.map(function(n){
        if(parseInt(max) < parseInt(n)){
            max = n;
        }
    });
    return max;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
