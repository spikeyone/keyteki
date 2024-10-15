const Card = require('../../Card');

class SwiftCurrent extends Card {
    setupCardAbilities(ability) {
        //Action: Each friendly Tentacle captures 1.
        this.action({
            effect: 'each Friendly Tentacle captures 1 amber',
            gameAction: ability.actions.capture((context) => ({
                target: context.player.creaturesInPlay.filter((card) => card.hasTrait('tentacle'))
            }))
        });
    }
}

SwiftCurrent.id = 'swift-current';
module.exports = SwiftCurrent;
