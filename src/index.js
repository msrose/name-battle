const Combatant = require('./Combatant')

function nameBattle({ attacker: attackerName, target: targetName }) {
    const attacker = new Combatant(attackerName)
    const target = new Combatant(targetName)

    target.invigorate()

    attacker.absorbLifeForceFrom(target)

    return target.getLifeForceLevel()
}

module.exports = nameBattle
