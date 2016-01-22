//Script created by Roman Tauler for ebanking design.

#target photoshop

app.bringToFront();


var randomvalue;
var randomvaluedec;
var finalvalue;
var formattedfinalvalue;
var valueindex = [];
var doc = app.activeDocument;
var al = doc.activeLayer;

function currencyFormat(num) {
		return num
       .toFixed(2) // always two decimal digits
       .replace(".", ",") // replace decimal point character with ,
       .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " SAR" // use . as a separator
   }

// DIALOG IN PROCESS
// var myWindow = new Window ("dialog", "Form");
// myWindow.orientation = "row";
// myWindow.add ("statictext", undefined, "Name:");
// var maxvalue = myWindow.add ("edittext", undefined, "Max value");
//  maxvalue.characters = 20;
//  maxvalue.active = true;
// var okbutton = myWindow.add ("button", undefined, "OK");
//  okbutton.onClick = generate();
// myWindow.show ();
//DIALOG END


function generate(){
for (var i = 0; i < lines; i++)
{
		randomvalue = Math.round(Math.random()* maxvalue);
		randomvaluedec = Math.round(Math.random()*100)/100;
		finalvalue = randomvalue + randomvaluedec;
		formattedfinalvalue = currencyFormat(finalvalue) + '\u000D';
		valueindex.push(formattedfinalvalue);
}



if(al.kind == LayerKind.TEXT) {
    //get the textItem
    var ti = al.textItem;
    //change contents
    ti.contents = valueindex.join('')
}
}

var maxvalue = prompt("max value?");
var lines = prompt("lines");

generate();


