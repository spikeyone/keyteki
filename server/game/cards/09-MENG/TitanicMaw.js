const Card = require('../../Card');

class TitanicMaw extends Card {
    //Enhance .
    //Attach only to a friendly Legendary Keyraken. It gains skirmish and splash-attack 3.

    setupCardAbilities(ability) {
        this.play({
            target: {
                controller: 'self',
                cardCondition: (card) => card.name === 'Legendary Keyraken'
            }
        });
        this.whileAttached({
            effect: [
                ability.effects.addKeyword({ 'splash-attack': 3 }),
                ability.effects.addKeyword({ skrimish: 1 })
            ]
        });
    }
}

TitanicMaw.id = 'titanic-maw';
module.exports = TitanicMaw;
