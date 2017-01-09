module.exports = {
	words: function(word) {
		var tempArray = word.split(/[ \f\n\r\t\v]/);
  		var uniqueWords = {};
  		var newWord;

  		for(var i = 0; i < tempArray.length; i++) {
  			newWord = tempArray[i];
  			if(newWord !== '') {
  				if(uniqueWords.hasOwnProperty(newWord)) {
  					uniqueWords[newWord]++;
  				}
  				else {
  					uniqueWords[newWord] = 1;
  				}
  			}
  		}
  		return uniqueWords;
  	}
}