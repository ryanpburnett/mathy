// // lindenmeyer

// let output = ['a'];

// while(output.length < 10) {
//         if(output === 'a') {
//             output = 'ab'
//         }else if(output === 'b'){
//             output = 'bb'
//         }

//     console.log(output);
// }

// fibonacci

// let prevNum = BigInt('0')
// let num = BigInt('1')
// let numOfTerms = 0

// while(numOfTerms < 500) {
//     console.log(num)
//     numOfTerms++
//     let storage = num
//     num = num + prevNum
//     prevNum = storage
// }

// // doubler

// let num = BigInt('1')
// let numOfTerms = 0

// while(numOfTerms < 100) {
//     console.log(num)
//     numOfTerms++
//     num = num*BigInt('2')
// }

// // This breaks BigInt if numOfterms > 3

// let num = BigInt('2');
// let numOfTerms = 0

// while(numOfTerms < 3) {
//     console.log(num)
//     numOfTerms++
//     num = num**num
// }