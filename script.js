function onCalculateClick() {
  var op1 = $("#operand1").val();

  if (op1) {
    op1 = Number(op1);
  }

  var op2 = $("#operand2").val();

  if (op2) {
    op2 = Number(op2);
  }

  var operator = $("select#operator").val();
  var result = null;

  if (operator === "+") {
    result = add(op1, op2);
  } else if (operator === "-") {
    result = subtract(op1, op2);
  } else if (operator === "*") {
    result = multiply(op1, op2);
  } else if (operator === "/") {
    result = divide(op1, op2);
  }

  if (result) {
    $("#result").val(result);
    console.log("Look mom!  I calculated a value: " + result);
    console.log("Type of: " + typeof result);
  } else {
    console.log("Cannot calculate a result");
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
