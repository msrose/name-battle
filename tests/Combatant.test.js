const Combatant = require('../src/Combatant')

describe('Combatant', () => {
    let combatant

    beforeEach(() => {
        combatant = new Combatant('Vikram Ravindran')
    })

    it('throws an error if life force is requested before invigoration', () => {
        expect(combatant.getLifeForce.bind(combatant)).toThrow()
    })

    it('does not throw an error if life force is requested after invigoration', () => {
        combatant.invigorate()
        expect(combatant.getLifeForce.bind(combatant)).not.toThrow()
    })
})
