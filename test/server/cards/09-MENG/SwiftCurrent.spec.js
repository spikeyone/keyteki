describe('SwiftCurrent', function () {
    describe('SwiftCurrent Abilities', function () {
        beforeEach(function () {
            this.setupTest({
                player1: {
                    house: 'keyraken',
                    inPlay: ['tenacious-tentacle', 'swift-current', 'niffle-ape'],
                    inHand: []
                },
                player2: {
                    amber: 2
                }
            });
            this.player1.useAction(this.swiftCurrent);
        });

        it('should capture amber onto tentacles', function () {
            expect(this.player2.amber).toBe(1);
            expect(this.tenaciousTentacle.tokens.amber).toBe(1);
        });

        it('should not capture onto non-tentacles', function () {
            expect(this.niffleApe.tokens.amber).toBe(0);
        });
    });
});
