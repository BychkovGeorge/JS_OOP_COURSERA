// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let mass = [];
    mass = command.split(' ');

    if (mass[0] === 'ADD'){
        let numbers = mass[2].split(',');
       if (phoneBook.hasOwnProperty(mass[1])){
           phoneBook[mass[1]] = phoneBook[mass[1]].concat(numbers);
       }
       else{
           phoneBook[mass[1]] = numbers;
       }
       return true;
    }

    if (mass[0] === 'REMOVE_PHONE'){
        for (let key in phoneBook){
            for (let i = 0; i < phoneBook[key].length; i++){
                if (phoneBook[key][i] === mass[1]) {
                    phoneBook[key].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    if(mass[0] === 'SHOW'){
        let result = [];
        for (let key in phoneBook){
            if (phoneBook[key].length !== 0){
                result.push(key + ': ' + phoneBook[key].join(', '));
            }
        }
        result.sort();
        return result;
    }
};