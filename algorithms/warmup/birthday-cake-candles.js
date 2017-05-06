process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";

process.stdin.on('data', function (data) {
    input_stdin += data;
});

var input_currentline = 0;
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
    height = readLine().split(' ');
    height = height.map(Number);

    var nMax = 0;
    var count = 0;
    height.forEach(function(item) {
        if(nMax < item){
            nMax=item;
            count=1;
        }else if(nMax == item){
            ++count;
        }
    });

    console.log(count);
}
