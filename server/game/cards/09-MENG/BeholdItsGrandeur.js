const Card = require('../../Card');
const Constants = require('../../../constants.js');

class BeholdItsGrandeur extends Card {
    //Play: Gain 1 for each creature you control that shares a house with one or more of its neighbors, to a maximum of 4.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.gainAmber((context) => {
                let cardsWithMatchingNeighbors = context.player.creaturesInPlay.filter((card) => {
                    card.neighbors.length === 0 ||
                        !Constants.Houses.some(
                            (house) =>
                                card.hasHouse(house) &&
                                card.neighbors.some((neighbor) => neighbor.hasHouse(house))
                        );
                });

                if (cardsWithMatchingNeighbors.length > 4) {
                    return {
                        amount: 4
                    };
                } else {
                    return {
                        amount: cardsWithMatchingNeighbors.length
                    };
                }
            })
        });
    }
}

BeholdItsGrandeur.id = 'behold-its-gradeur';
module.exports = BeholdItsGrandeur;
