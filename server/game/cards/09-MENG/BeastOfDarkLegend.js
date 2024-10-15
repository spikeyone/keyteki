const Card = require('../../Card');

class BeastOfDarkLegend extends Card {
    //Play: Play a friendly Keyraken creature from a purged zone. Ready a friendly Keyraken creature.
    setupCardAbilities(ability) {
        this.play({
            effect: 'Play a friendley Keyraken creature from a purged zone.',
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.house === 'keyraken',
                controller: 'self',
                location: 'purged',
                gameAction: ability.actions.playCard()
            },
            then: {
                target: {
                    controller: 'self',
                    cardType: 'creature',
                    cardCondition: (card) => card.hasTrait('beast'),
                    gameAction: ability.actions.ready()
                }
            }
        });
    }
}

BeastOfDarkLegend.id = 'beast-of-dark-legend';

module.exports = BeastOfDarkLegend;
