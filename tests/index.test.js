const nameBattle = require('../src')

const battleParameters = [
    ['ahmed elkady', 'aser eldamaty', 30.76923076923077],
    ['vikram ravindran', 'alex elkhe', 70],
    ['natalie chan', 'vikram ravindran', 56.25],
    ['the quick brown fox jumps over the lazy dog', 'vikram ravindran', 37.5],
    ['the quick brown fox jumps over the lazy dog', 'jay crumb', 0],
    [
        'the quick brown fox jumps over the lazy dog',
        'jay edgfihklonqpstwvxz crumb',
        0,
    ],
    [
        'jay edgfihklonqpstwvxz crumb',
        'the quick brown fox jumps over the lazy dog',
        34.883720930232556,
    ],
    ['vikram ravindran', 'joshua doncaster-marsiglio', 57.69230769230769],
    ['joshua doncaster-marsiglio', 'vikram ravindran', 31.25],
    ['noah negin-ulster', 'joshua doncaster-marsiglio', 46.15384615384615],
    [
        'noah negin-ulster daniel gipps emmanuel ogbizi-ugbe',
        'joshua doncaster-marsiglio',
        19.23076923076923,
    ],
    [
        'noah negin-ulster daniel gipps emmanuel ogbizi-ugbe martin lai',
        'joshua doncaster-marsiglio',
        15.384615384615385,
    ],
]

function spongebobify(string) {
    return string
        .split('')
        .map((letter, index) => (index % 2 ? letter.toUpperCase() : letter))
        .join('')
}

describe('The sacred Name Battle', () => {
    it.each(battleParameters)(
        'pits targets against their attackers',
        (attacker, target, lifeForce) => {
            expect(nameBattle({ attacker, target })).toBeCloseTo(lifeForce)
        },
    )

    it.each(battleParameters)(
        'cares not for the profligacy of uppercase letters',
        (attacker, target) => {
            expect(nameBattle({ attacker, target })).toBeCloseTo(
                nameBattle({
                    attacker: attacker.toUpperCase(),
                    target: target.toUpperCase(),
                }),
            )
            expect(nameBattle({ attacker, target })).toBeCloseTo(
                nameBattle({
                    attacker: attacker,
                    target: target.toUpperCase(),
                }),
            )
            expect(nameBattle({ attacker, target })).toBeCloseTo(
                nameBattle({
                    attacker: attacker.toUpperCase(),
                    target: target,
                }),
            )
            expect(nameBattle({ attacker, target })).toBeCloseTo(
                nameBattle({
                    attacker: spongebobify(attacker),
                    target: spongebobify(target),
                }),
            )
            expect(nameBattle({ attacker, target })).toBeCloseTo(
                nameBattle({
                    attacker,
                    target: spongebobify(target),
                }),
            )
            expect(nameBattle({ attacker, target })).toBeCloseTo(
                nameBattle({
                    attacker: spongebobify(attacker),
                    target,
                }),
            )
        },
    )
})
