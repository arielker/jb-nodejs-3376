const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let ret = '';
for(i=0; i < 5; i++) {
    const rand = Math.round(Math.random() * letters.length);
    ret += letters[rand];
}
// console.log(ret);


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.round(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

for (let index = 0; index < 8; index++) {
    console.log(makeid(5));   
}