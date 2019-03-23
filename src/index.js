function normalizeName(name) {
    return name.toLowerCase()
}

function nameBattle({ attacker, target }) {
    const normalizedTarget = normalizeName(target)

    const targetLetterCounts = normalizedTarget
        .split('')
        .reduce(
            (counts, letter) =>
                Object.assign(counts, { [letter]: (counts[letter] || 0) + 1 }),
            {},
        )

    normalizeName(attacker)
        .split('')
        .forEach(letter => {
            if (targetLetterCounts[letter]) {
                targetLetterCounts[letter]--
            }
        })

    const remainingLetterTotal = Object.values(targetLetterCounts).reduce(
        (total, count) => total + count,
    )

    const lifeForce = (remainingLetterTotal / normalizedTarget.length) * 100

    return lifeForce
}

module.exports = nameBattle
