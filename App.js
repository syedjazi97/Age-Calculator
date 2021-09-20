var dob = new Date(prompt("Enter Yor Date of birth","dec 30,1995"));
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var diffyear = diff/(1000*60*60*24*30*12);
var accurate = Math.floor(diffyear);
document.write(accurate);