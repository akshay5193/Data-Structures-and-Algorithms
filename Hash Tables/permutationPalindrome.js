function permutationPalindrome(string) {
    if (string.length === 1) {
        return true;
    }

    const unpairedCharacters = new Set();

    for (let character of string) {
        if (unpairedCharacters.has(character)) {
            unpairedCharacters.delete(character);
        }
        else {
            unpairedCharacters.add(character);
        }
    }
    if (unpairedCharacters.size > 1) {
        return false;
    }
    else {
        return true;
    }
}

console.log(permutationPalindrome('akshayramoliakshayramoli'));