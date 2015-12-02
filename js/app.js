function Printer(divId) {
  var lineCount = 1;
  
  this.printLine = function() {
    var m = lineCount + ': ';
    
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }

    var n = document.createElement("pre"),
        t = document.createTextNode(m);

    n.appendChild(t);
    document.getElementById(divId).appendChild(n);
    
    lineCount++;
  }
}

// create printers
var fizzbuzzerPrinter = new Printer('fizzbuzzer');

// create print function
var frPrint = fizzbuzzerPrinter.printLine;

function fizzbuzzer(max) {
  
  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }
  
  for (var i = 1; i <= max; i++) {
    frPrint(check(i));
  }
  
}
var maxEntry = "45"
while (maxEntry!=parseInt(maxEntry) && maxEntry % 1!=0){
  var maxEntry = prompt("Please enter an integer", maxEntry);
}
fizzbuzzer(maxEntry);
