function normalizeName(name) {
    return name.toLowerCase()
}

class Combatant {
    constructor(name) {
        this._name = normalizeName(name)
    }

    getName() {
        return this._name
    }

    getLifeForce() {
        if (!this._lifeForce) {
            throw new Error('Combatant has not been invigorated')
        }
        return this._lifeForce
    }

    invigorate() {
        this._lifeForce = this.getName()
            .split('')
            .reduce(
                (lifeForce, letter) =>
                    Object.assign(lifeForce, {
                        [letter]: (lifeForce[letter] || 0) + 1,
                    }),
                {},
            )
    }

    exude(letter) {
        const lifeForce = this.getLifeForce()
        if (lifeForce[letter]) {
            lifeForce[letter]--
        }
    }

    absorbLifeForceFrom(target) {
        this.getName()
            .split('')
            .forEach(letter => target.exude(letter))
    }

    getLifeForceLevel() {
        const remainingLetterTotal = Object.values(this.getLifeForce()).reduce(
            (total, count) => total + count,
        )
        return (remainingLetterTotal / this.getName().length) * 100
    }
}

module.exports = Combatant
