function processData(input) {
    //Enter your code here
    let number = input.split(" ");
    number.shift();
    const first = number[0];
    const perform = first.split('\n')[0]
    number[0] = first.split('\n')[1];
    for(i=0;i<perform;i++){
        let take = number[0];
        number.push(take);
        number.shift();
    }
    console.log(number.join(" "));
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
