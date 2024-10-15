const Card = require('../../Card');

class DevourWhole extends Card {
    // Play: If a friendly Legendary Keyraken is in play, destroy an enemy creature or artifact.
    setupCardAbilities(ability) {
        this.play({
            condition: (context) => {
                context.player.creaturesInPlay.filter((card) => {
                    card.id === 'legendary-keyraken';
                }).length !== 0;
            },
            target: {
                cardType: ['creature', 'artifact'],
                controller: 'opponent',
                gameAction: ability.actions.destory()
            }
        });
    }
}

DevourWhole.id = 'devour-whole';
module.exports = DevourWhole;
