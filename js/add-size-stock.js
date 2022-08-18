

var maxID = 0;
function getTemplateRow() {
var x = document.getElementById("templateRow").cloneNode(true);
x.id = "";
x.style.display = "";
x.innerHTML = x.innerHTML.replace(/{id}/, ++maxID);
return x;
}
function addRow() {
var t = document.getElementById("theTable");
var rows = t.getElementsByTagName("tr");
var r = rows[rows.length - 1];
r.parentNode.insertBefore(getTemplateRow(), r);
}

function deleteRow(el) {
    // while there are parents, keep going until reach TR 
    while (el.parentNode && el.tagName.toLowerCase() != 'tr') {
        el = el.parentNode;
    }

    // If el has a parentNode it must be a TR, so delete it
    // Don't delte if only 3 rows left in table
    if (el.parentNode && el.parentNode.rows.length > 3) {
        el.parentNode.removeChild(el);
    }
}