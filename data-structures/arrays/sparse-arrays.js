function processData(input) {
    //Enter your code here
    const number = input.split("\n");
    const a = [];
    const n =parseInt(number[0]);
    const q = number[parseInt(number[0])+1];
    for(i=n+2;i<number.length;i++){
        let n = 0;
        for(j=1;j<=parseInt(number[0]);j++){
            if (number[i] === number[j]){
                n++;
            }
        }
        a.push(n);
    }
    console.log(a.join('\n'));

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
