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
    var n = parseInt(readLine());
    var arr = [];
    for(i=1;i<=n;i++){
            var t=0;
            for(k=0;k<n-i;k++){
                arr[t] = " ";
                t++;
            }
            for(l=0;l<i;l++){
                arr[t] = "#";
                t++;
            }
            console.log(arr.join(""));
    }
}
