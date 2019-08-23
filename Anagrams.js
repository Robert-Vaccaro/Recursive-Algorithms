function generateAnagrams(word) {

    if (word.length < 2) {

        return [word];

    } else {
        var anagrams = [];
        var before, focus, after;
        var shortWord, subAnagrams, newEntry;
        var i = 0;

        for (var i = 0; i < word.length; i++) {

            before = word.slice(0, i);
            focus = word[i];
            after = word.slice(i + 1, word.length + 1);
            shortWord = before + after;
            subAnagrams = generateAnagrams(shortWord);

            for (var j = 0; j < subAnagrams.length; j++){

                newEntry = focus + subAnagrams[j];
                anagrams.push(newEntry);

            }

        }

        return anagrams;

    }

}

function benchMark(word){
    var result = generateAnagrams(word);
    
    for (var i in result){
        console.log(result[i] ); 
        
    }

    console.log("Total: " + result.length); 
    
}

benchMark("code");
