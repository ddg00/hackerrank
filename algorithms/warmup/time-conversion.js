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
    var time = readLine();
    var arr = time.split(":");
    var condition = arr[2].slice(2, 4);
    arr[2]=arr[2].slice(0, 2)
    if(condition == "PM"){
        if(Number(arr[0])==12){
            arr[0]=12;
        }else{
            arr[0]=''+ (Number(arr[0])+12);
        }
    }
    else if(condition == "AM"){
        if(arr[0]==12){
            arr[0]="00"
        }
    }else {
        if(Number(arr[0])>=0){
            condition = "AM";
            if(Number(arr[0])>=12){
                condition = "PM";
            }
        }
        arr[2]=arr[2]+condition;
    }
    console.log(arr.join(":"));
}
