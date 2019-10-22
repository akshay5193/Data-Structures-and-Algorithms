function reverseWords(message) {

    // Decode the message by reversing the words
    let word = "";
    let messageWords = [];
    let temp;
    let reversed;

    for (let i = message.length - 1; i > -1; i--) {

        if (message[i] !== ' ') {
            continue;
        }
        else {
            for (let j = i + 1; j < message.length; j++) {
                word += message[j];
            }
            messageWords.push(word);
            messageWords.push(' ');
            word = '';
        }

        // if (message[i] !== ' ') {
        //     word += message[i];
        //     if (i === 0) {
        //         // reversed = word.reverse();
        //         messageWords.push(word);
        //         console.log(word);
        //         word = "";
        //     }
        // }
        // else if (message[i] === ' ' || i === 0) {
        //     // reversed = word.reverse();
        //     messageWords.push(word);
        //     messageWords.push(' ');
        //     console.log(word);
        //     word = "";
        // }
        // else {
        //     return "inappropriate character in message..."
        // }
    }

    let decoded = messageWords.join('');
    console.log(decoded);
}


reverseWords(['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l']);