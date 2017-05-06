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
function sum(a,b){
    return a+b;
}

function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    var min = 0;
    var max = 0;
    var arr = [a,b,c,d,e];
    var sumTotal = arr.reduce(sum) - arr[0];

    max = sumTotal;
    min = sumTotal;

    for(i=1;i<5;i++){
        sumTotal = arr.reduce(sum) - arr[i];
        if (max < sumTotal) max = sumTotal;
        if (min > sumTotal) min = sumTotal;
    }
    var hasil = [min, max]
    console.log(hasil.join(" "));
}
