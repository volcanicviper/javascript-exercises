function getAge(birth, death) {
    if (!death) {
        death = (new Date()).getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(array) {
    const sorted = array.sort(function(a, b) {
        const last = getAge(a.yearOfBirth, a.yearOfDeath);
        const next = getAge(b.yearOfBirth, b.yearOfDeath);
        return last > next ? -1 : 1;
    });
    return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
