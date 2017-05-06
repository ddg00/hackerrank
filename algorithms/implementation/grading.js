process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function roundGrade(grade) {
  const mod = grade % 5;
  const next = grade + (5 - mod);
  let final = grade;
  if (grade < 38) {
    return final;
  } else if (next - grade < 3) {
    final = next;
  }
  return final;
}

function solve(grades) {
  grades.map(function(grade) {
    console.log(roundGrade(grade));
    return null;
  });
}

function main() {
  var n = parseInt(readLine());
  var grades = [];
  for (var grades_i = 0; grades_i < n; grades_i++) {
    grades[grades_i] = parseInt(readLine());
  }
  var result = solve(grades);
  console.log(result.join(" "));

}
