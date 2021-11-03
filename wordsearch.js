const transpose= require('./matrix_transposition');

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    const letters_tran=transpose(letters);
    const verticalJoin = letters_tran.map(ls => ls.join(''));

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
 
    return false;

}



module.exports = wordSearch