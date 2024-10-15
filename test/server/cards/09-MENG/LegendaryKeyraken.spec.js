describe('LegendaryKeyraken', function () {
    describe("LegendaryKeyraken's ability", function () {
        beforeEach(function () {
            this.setupTest({
                player1: {
                    house: 'keyraken',
                    inPlay: ['legendary-keyraken', 'tenacious-tentacle'],
                    amber: 1
                },
                player2: {
                    inPlay: ['troll']
                }
            });
        });

        it('should get +5 power for each tentacle', function () {
            expect(this.legendaryKeyraken.power).toBe(15);
        });

        it("should should not prompt the use if they don't have enough amber to forge", function () {
            this.player1.reap(this.legendaryKeyraken);
            expect(this.player1.amber).toBe(2);
            expect(this.player1).toHavePrompt('Choose a card to play, discard or use');
        });

        it('should prompt to forge after reaping if the user has enough amber', function () {
            this.player1.amber = 11;
            this.player1.reap(this.legendaryKeyraken);
            expect(this.player1).toHavePrompt('Forge a key');
            this.player1.forgeKey('Red');
            expect(this.player1.amber).toBe(0);
            expect(this.player1.player.keys.red).toBe(true);
            expect(this.player1.player.keys.blue).toBe(false);
            expect(this.player1.player.keys.yellow).toBe(false);
            expect(this.player1).toHavePrompt('Choose a card to play, discard or use');
        });
    });
});
