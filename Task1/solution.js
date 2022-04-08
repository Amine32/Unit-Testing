function order(words) {
    words = words.split(' ');

    //Testing concerns non empty strings
    if (words != "") {

        //Checking each word contains only one digit
        for (var i = 0; i < words.length; i++) {
            var match = [];
            match = words[i].match(/\d/g);
            if (match == null) {
                throw "Word must contain a single digit";
            } else if (match.length != 1)
                throw "Word must contain a single digit";
        }

        //Checking no word has digit 0
        for (var i = 0; i < words.length; i++) {
            var match = words[i].match(/\d/);
            if (match == 0)
                throw "Word can only have digits from 1 to 9";
        }

        //Checking numbers are consecutive
        var matches = [];
        for (var i = 0; i < words.length; i++) {
            matches.push(words[i].match(/\d/));
        }
        matches.sort((a, b) => a - b);

        for (var i = 0; i < matches.length; i++) {
            if (matches[i] != i + 1)
                throw "The words in the input String will only contain valid consecutive numbers starting with 1.";
        }
    }

    //some useful code
    var result = [];
    result.length = words.length;

    for (var i = 0; i < words.length; i++) {
        var index = words[i].match(/\d/);
        result[index - 1] = words[i];
    }

    return result.join(' ');
}

module.exports = order