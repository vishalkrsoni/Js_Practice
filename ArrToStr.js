let arr = ['abc', 'def', 'ghi']

const arrTostr = input => {
    let output = '';
    for (let i = 0; i < input.length - 1; i++)
        output += input[i] + ',';
    output += input[input.length - 1]
    return output;
}
console.log('M1: ',arrTostr(arr))

const arrTostr1 = input => input.toString()
console.log('M2: ',arrTostr(arr))

const arrTostr2 = input => input.join(',')
console.log('M3: ',arrTostr(arr))
