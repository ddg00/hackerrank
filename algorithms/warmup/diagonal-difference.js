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
function sum(n,a){
    var i = n-1;
    var sum1=0;
    var sum2=0;
    var t=0;
    var arr = [];

    for (n1=i;n1>=0;n1--){
        arr[t]=a[t][n1];
        t++;
    }
    sum1 = arr.reduce(add, 0);

    arr = [];
    t = 0
    for (n2=0;n2<=i;n2++){
        arr[t]=a[t][n2];
        t++;
    }
    sum2 = arr.reduce(add, 0);
    total = sum2-sum1;
    if (total < 0) total = -total;
    return total;

}
function add(a,b){
    return a+b;
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    console.log(sum(n,a));
}
