/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    for (let y = 0; y < hashtags.length; y++){
        hashtags[y] = hashtags[y].toLowerCase();
    }
    let copy1 = hashtags;
    let copy2 = hashtags;
    let result = '';
    for (let i = 0; i < copy1.length; i++){
        for (let j = 0; j < copy2.length; j++){
            if(i != j){
                if(copy1[i] === copy2[j]){
                    hashtags.splice(j, 1);
                }
            }
        }
    }

    for (let k = 0; k < hashtags.length; k++){
        if (k != hashtags.length - 1)
            result += hashtags[k] + ', ';
        else
            result += hashtags[k];
    }
    return result;
};
