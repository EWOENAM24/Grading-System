function checkin() {
    var name = document.getElementById("name").value;
    var test = parseFloat(document.getElementById("IA").value);
    var exam = parseFloat(document.getElementById("FA").value);
    var course = document.getElementById("course").value;
    var total = test + exam;

    if (name == "") {
        alert("Enter your name");
        return;
    }
    var tabs = document.getElementById("table").getElementsByTagName("tbody")[0];
    var newRow = tabs.insertRow();
    if (isNaN(test)) {

        test = 0;
    }
    if (isNaN(exam)) {
        exam = 0;
    }
    if (isNaN(total)) {
        total = 0;
    }
    if (test > 40 || exam > 60) {
        alert("test score should be less than 41 and exam score should be less than 61")
        return;
    }
    addCell(newRow, name);
    addCell(newRow, test);
    addCell(newRow, exam);
    addCell(newRow, course);
    addCell(newRow, total)
    if (total >= 80) {
        addCell(newRow, "A");
    }
    else if (total < 80 && total >= 70) {
        addCell(newRow, "B");
    }
    else if (total < 70 && total >= 60) {
        addCell(newRow, "C");
    }
    else if (total < 60 && total >= 50) {
        addCell(newRow, "D");
    }
    else if (total < 50 && total >= 40) {
        addCell(newRow, "E");
    }
    else {
        addCell(newRow, "F");
    }




}

function addCell(row, cellValue) {
    var newCell = row.insertCell();
    var newText = document.createTextNode(cellValue);
    newCell.appendChild(newText);

}
// `<ul class="list-group list-group-flush">
// <li class="list-group-item"><img src="assset/money_transfer.png"> Money Transfer</li>
// <li class="list-group-item"><img src="assset/momopay_paybill.png">MoMoPay & Pay Bill</li>
// <li class="list-group-item"><img src="assset/airtime_bundles.png">Airtime & Bundle</li>
// <li class="list-group-item"><img src="assset/allow_cashout_360.png">Allow Cash Out</li>
// <li class="list-group-item"><img src="assset/financial_services.png">Financial Services</li>
// <li class="list-group-item"><img src="assset/wallet.png">My Wallet</li>
// </ul>`