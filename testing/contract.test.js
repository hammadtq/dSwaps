describe('reserve listing stage', function () {
  it('should return 0xaD6D458402F60fD3Bd25163575031ACDce07538D stage as 3', async function () {
    var stage = await getReserveListingStage("0xaD6D458402F60fD3Bd25163575031ACDce07538D");
    chai.expect(stage[1]).to.equal('3');
  });
});
