module.exports = {
	reverseString: function(string) {
		var newString = "";
		if (string.length === 0) {
			return null
		}
	    for (var i = string.length - 1; i >= 0; i--) {
	        newString += string[i];
	    }
	    if (newString === string) {return true}
	    return newString;
	}
}