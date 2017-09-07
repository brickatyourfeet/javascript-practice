var ar = [
    [2,6,89,45],
    [3,566,23,79],
    [434,677,9,23]
];

var hash = {};
for(var i = 0 ; i < ar.length; i += 1) {
    hash[ar[i]] = i;
}

var val = [434,677,9,23];

if(hash.hasOwnProperty(val)) {
    document.write(hash[val]);
}



//alternate version

Array.prototype.containsArray = function(val) {
    var hash = {};
    for(var i=0; i<this.length; i++) {
        hash[this[i]] = i;
    }
    return hash.hasOwnProperty(val);
}