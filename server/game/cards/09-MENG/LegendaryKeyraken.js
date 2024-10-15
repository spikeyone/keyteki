const Card = require('../../Card.js');

class LegendaryKeyraken extends Card {
    // "Legendary Keyraken gets +5 power for each forged key you have.
    // After Reap: Forge a key at +6 current cost, reduced by 1 for each friendly Tentacle in play."
    setupCardAbilities(ability) {
        this.persistentEffect({
            effect: ability.effects.modifyPower(
                (card) =>
                    card.controller.creaturesInPlay.filter((c) => c.hasTrait('tentacle')).length * 5
            )
        });

        this.reap({
            effect:
                'Forge a key at +6 current cost, reduced by 1 for each friendly Tentacle in play.',
            gameAction: ability.actions.forgeKey((context) => ({
                modifier:
                    6 - context.player.creaturesInPlay.filter((c) => c.hasTrait('tentacle').length)
            }))
        });
    }
}

LegendaryKeyraken.id = 'legendary-keyraken';

module.exports = LegendaryKeyraken;
