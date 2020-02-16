module.exports = function createDreamTeam(members) {
    let array = [];
    let array2 = [];
    for (let i in members) {
        if (typeof members[i] === 'string') {
          array.push(members[i].trim()[0]);
        } else {
          array2.push(members[i]);
        }
    }
    return array.sort().join("").toLocaleUpperCase();
};
