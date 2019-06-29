var x = new String("Message in a bottle");
var er = /m/;
document.writeln(x + "</br>");
document.writeln(x.length+ "</br>");
document.writeln(x.charAt(x.length-1)+ "</br>");
document.writeln(x.indexOf("Message") + "</br>");
document.writeln(x.lastIndexOf("bottle") + "</br>");
document.writeln(x.match(er) + "</br>");