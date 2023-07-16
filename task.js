const a = '()'
const b = '()[]{}'
const c = '(]'
const d = '([)]'
const e = '{[]}'

const correctBrackets = str => {
    const result = true

    const a = ['{', '}']
    const b = ['(', ')']
    const c = ['[', ']']

    for (let i = 0; i < str.length; i++) {
        
    }

    return result
}

console.log(correctBrackets((a)))
console.log(correctBrackets((b)))
console.log(correctBrackets((c)))
console.log(correctBrackets((d)))
console.log(correctBrackets((e)))