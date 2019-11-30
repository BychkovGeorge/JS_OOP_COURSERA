/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let mass = [];
    let result = [];
    mass = tweet.split(' ');
    for (let i = 0; i < mass.length; i++){
        if (mass[i].startsWith("#")){
            result.push(mass[i].slice(1));
        }
    }
    return result;
};