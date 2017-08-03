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

function solution(s, n, hm){
        if(n <= 0){
            //console.log(current,'target',n);
            if(n < 0) return 0;
            return 1;
        }

        if(s in hm && n in hm[s]) return hm[s][n];
        let count = 0;
        let list = s.slice();
        for (var i = 0; i < s.length; i++) {
            //console.log(s[i],'+');
            count += solution(list, n-s[i], hm);
            list.shift();
        }

        if(!(s in hm)) hm[s]={};
        hm[s][n] = count;
        return count;
    }

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    coins = readLine().split(' ');
    coins = coins.map(Number);
    var hm = {};
    coins.sort(function(a, b){return a-b});
    console.log(solution(coins, n, hm));
}
