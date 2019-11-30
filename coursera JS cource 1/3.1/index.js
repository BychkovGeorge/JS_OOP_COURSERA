
/**
 * @param {String} date
 * @returns {Object}
 */

// let dateManager = {
//     date: '',
//    setNewDate: function (num, message) {
//      if (message === 'years'){
//          this.date.setUTCFullYear(this.date.getUTCFullYear() + num);
//      }
//        if (message === 'months'){
//            this.date.setUTCMonth(this.date.getUTCMonth() + num);
//        }
//        if (message === 'days'){
//            this.date.setUTCDate(this.date.getUTCDate() + num);
//        }
//        if (message === 'hours'){
//            this.date.setUTCHours(this.date.getUTCHours() + num);
//        }
//        if (message === 'minutes'){
//            this.date.setUTCMinutes(this.date.getUTCMinutes() + num);
//        }
//        return this;
//    },
//     add: function (num, message) {
//         if (message !== 'years' && message !== 'months' && message !== 'days' && message !== 'hours' && message !== 'minutes'){
//             throw new TypeError('error');
//         }
//         this.setNewDate(num, message);
//         return this;
//     },
//     subtract: function (num, message) {
//         if (message !== 'years' && message !== 'months' && message !== 'days' && message !== 'hours' && message !== 'minutes'){
//             throw new TypeError('error');
//         }
//         this.setNewDate(-num, message);
//         return this;
//     }
// };
module.exports = function (date) {
    return{
        dateObj: dateParser(date),
        value: date,
        date: '',
        setNewDate: function (num, message) {
            if (message === 'years'){
                this.dateObj.setUTCFullYear(this.dateObj.getUTCFullYear() + num);
            }
            if (message === 'months'){
                this.dateObj.setUTCMonth(this.dateObj.getUTCMonth() + num);
            }
            if (message === 'days'){
                this.dateObj.setUTCDate(this.dateObj.getUTCDate() + num);
            }
            if (message === 'hours'){
                this.dateObj.setUTCHours(this.dateObj.getUTCHours() + num);
            }
            if (message === 'minutes'){
                this.dateObj.setUTCMinutes(this.dateObj.getUTCMinutes() + num);
            }
            return this;
        },
        add: function (num, message) {
            if (message !== 'years' && message !== 'months' && message !== 'days' && message !== 'hours' && message !== 'minutes'){
                throw new TypeError('error');
            }
            if (num < 0)
                throw new TypeError('di nahui');
            this.setNewDate(num, message);
            this.value = this.dateObj.toISOString().slice(0,16).replace('T',' ');
            return this;
        },
        subtract: function (num, message) {
            if (message !== 'years' && message !== 'months' && message !== 'days' && message !== 'hours' && message !== 'minutes'){
                throw new TypeError('errorr');
            }
            if (num < 0)
                throw new TypeError('di nahui');
            this.setNewDate(-num, message);
            this.value = this.dateObj.toISOString().slice(0,16).replace('T',' ');
            return this;
        }
    }

    // let mass = [];
    // let firsts = [];
    // let seconds = [];
    // mass = date.split(' ');
    // firsts = mass[0].split('-');
    // seconds = mass[1].split(':');
    // dateManager.date = new Date(Date.UTC(firsts[0], firsts[1] - 1, firsts[2], seconds[0], seconds[1]));
    //
    // Object.defineProperty(dateManager, 'value', {
    //     get(){
    //         if (this.date <  946684800) {
    //             throw new TypeError('error');
    //         }
    //         let y = this.date.getUTCFullYear();
    //         let mon = this.date.getUTCMonth() + 1;
    //         let d = this.date.getUTCDate();
    //         let h = this.date.getUTCHours();
    //         let min = this.date.getUTCMinutes();
    //         return y + '-' + addZero(mon) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(min);
    //     }
    // });
    // return dateManager;
};

function addZero(num) {
    return num < 10 ? '0' + num : num;
}

function dateParser(date) {
    let mass = [];
    let firsts = [];
    let seconds = [];
    mass = date.split(' ');
    firsts = mass[0].split('-');
    seconds = mass[1].split(':');
    return new Date(Date.UTC(firsts[0], firsts[1] - 1, firsts[2], seconds[0], seconds[1]));
}


