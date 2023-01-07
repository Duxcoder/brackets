module.exports = 
function check(str, bracketsConfig) {

let result = true;
if (str.length % 2) return false

const find = (string) => {
  if (string.length === 0) return result = true
  for (let i = 0; i < string.length; i++) {
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (string[i] === bracketsConfig[k][0]){
        if (string[i + 1] === bracketsConfig[k][1]){
          const newString = string.slice(0, i) + string.slice(i + 2);
          console.log(newString, 'open', i, k)
          return find(newString);
        }
      }
      if (string[i] === bracketsConfig[k][1]){
        if (string[i - 1] === bracketsConfig[k][0]){
          const newString = string.slice(0, i - 1) + string.slice(i + 1);
          console.log(newString, 'close', i, k)
          return find(newString);
        }
        // else console.log(string[i], bracketsConfig[k][0]); return result = false
      }
    }
  }
  return result = false
}

find(str);
return result
}

// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]))

// if строка[i] === arrСкобок[j][0]
//   { if строка[i++] === arrСкобок[j][1]
//   {удалить из строки скобки запуск цикла}}
// else {
//   if строка[i] === arrСкобок[j][1]
//     {if строка[--i] === arrСкобок[j][0]}
// }
// return console.log('false')
