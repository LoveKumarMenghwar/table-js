
var output = document.getElementById("output")
var input = document.getElementById("Table_print")
var tableError = document.getElementById("tableError")

function prinTable() {
    tableError.innerHTML = "";
    output.innerHTML = "<h1>Your Printed Table Here.</h1>"
    for (var table = 1; table <= 10; table++) {
        // console.log("2" + " x " + table + " = " + table * 2)   ///console testing
        output.innerHTML += `${input.value} x  ${table} =  ${table * +input.value} <br />`
    }

}