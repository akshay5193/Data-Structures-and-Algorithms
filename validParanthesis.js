function validParanthesis(string) {
    let stack = [];
    if (string.length === 1) {
        return false;
    }

    if (string.length === 0) {
        return true;
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            stack.push(string[i]);
        }
        else if (string[i] === ')') {
            if (stack.length === 0) {
                return false;
            }
            else {
                stack.pop();
            }
        }
        else {
            continue;
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

function validBrackets(string) {
    let pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = [];
    let current;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === ')' || string[i] === '{' || string[i] === '}' || string[i] === '[' || string[i] === ']') {
            if (string[i] in pairs) {
                stack.push(string[i])
            }
            else {
                current = stack.pop();
                if (pairs[current] !== string[i]) {
                    return false;
                }
            }
        }
        else {
            continue;
        }

    }
    return true;
}

// let result = validParanthesis('((()())))');
let result2 = validBrackets('{(())[a]}[ramoli]');
console.log(result2);