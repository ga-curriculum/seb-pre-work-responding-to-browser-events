describe('the say hello button', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it('logs the message when clicked', () => {
    document.querySelector('#generate-greeting').click();
    expect(console.log).toHaveBeenCalledWith('hello!');
  });
});
