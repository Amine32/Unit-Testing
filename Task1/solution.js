function order(words) {
    words = words.split(' ');

    var result = [];
    result.length = words.length;

    for (var i = 0; i < words.length; i++) {
        var index = words[i].match(/\d/);
        result[index - 1] = words[i];
    }

    return result.join(' ');
}

module.exports = order