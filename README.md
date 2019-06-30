# name-battle

[![npm](https://img.shields.io/npm/v/name-battle.svg)](https://www.npmjs.com/package/name-battle)
[![npm](https://img.shields.io/npm/dm/name-battle.svg)](https://npm-stat.com/charts.html?package=name-battle)
[![Build Status](https://travis-ci.org/msrose/name-battle.svg?branch=master)](https://travis-ci.org/msrose/name-battle)
[![codecov](https://codecov.io/gh/msrose/name-battle/branch/master/graph/badge.svg)](https://codecov.io/gh/msrose/name-battle)
[![Greenkeeper badge](https://badges.greenkeeper.io/msrose/name-battle.svg)](https://greenkeeper.io/)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

:name_badge: Simulate battles in a parallel universe

The original concept for the sacred Name Battle was proposed by [@vikram-ravindran](https://github.com/vikram-ravindran) during a magnificent state of pure lucidity during which he was capable of anything he so desired. He desired to unveil the Name Battle to the world, and so it was:

> The purpose of this function is to simulate a battle in a parallel universe in which, when a person attacks another person (the target), they do so by absorbing letters in the target's name that match the attacker's name, and the percentage of letters left over gives the current life-force level of the target as a percentage (100% is full-health)

## Installation

```
npm install name-battle
```

## Usage

```javascript
const nameBattle = require('name-battle')

nameBattle({ attacker: 'Vikram Ravindran', target: 'Michael Rose' })
```

## API

### Default Export

```
nameBattle(combatants)
```

Conducts a name battle between the specified combatants

#### Arguments

1. `combatants` _(Object)_: An object describing the participants in the Name Battle
    - `combatants.attacker` _(String)_: The name of the attacker
    - `combatants.target` _(String)_: The name of the target

#### Returns

_(Number)_: The remaining Life Force of the target after they have been engaged in a Name Battle by the attacker

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://msrose.github.io"><img src="https://avatars3.githubusercontent.com/u/3495264?v=4" width="100px;" alt="Michael Rose"/><br /><sub><b>Michael Rose</b></sub></a><br /><a href="#infra-msrose" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/msrose/name-battle/commits?author=msrose" title="Tests">⚠️</a> <a href="https://github.com/msrose/name-battle/commits?author=msrose" title="Code">💻</a></td><td align="center"><a href="https://github.com/apps/greenkeeper"><img src="https://avatars3.githubusercontent.com/in/505?v=4" width="100px;" alt="Greenkeeper[bot]"/><br /><sub><b>Greenkeeper[bot]</b></sub></a><br /><a href="#infra-Greenkeeper[bot]" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars0.githubusercontent.com/in/23186?v=4" width="100px;" alt="allcontributors[bot]"/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/msrose/name-battle/commits?author=allcontributors[bot]" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/vikram-ravindran"><img src="https://avatars0.githubusercontent.com/u/8523818?v=4" width="100px;" alt="vikram-ravindran"/><br /><sub><b>vikram-ravindran</b></sub></a><br /><a href="https://github.com/msrose/name-battle/commits?author=vikram-ravindran" title="Code">💻</a> <a href="https://github.com/msrose/name-battle/commits?author=vikram-ravindran" title="Documentation">📖</a> <a href="https://github.com/msrose/name-battle/commits?author=vikram-ravindran" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
