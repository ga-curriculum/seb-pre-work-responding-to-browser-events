describe('generate message', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it("successfully logs the user's custom message", () => {
    document.querySelector('#message').value = 'this is only a test';
    document.querySelector('#generate-message').click();
    expect(console.log).toHaveBeenCalledWith('this is only a test');
    document.querySelector('#message').value = '';
  });
});
