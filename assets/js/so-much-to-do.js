describe('the to do app', () => {
  it('adds new list items when users click the button', () => {
    document.querySelector('#new-todo').value = 'Pass this code challenge';
    document.querySelector('#generate-todo').click();
    document.querySelector('#new-todo').value = '';

    try {
      const text = document.querySelector('li:last-child').innerText;
      expect(text).toEqual('Pass this code challenge');
      document.querySelector('li:last-child').remove();
    } catch (err) {
      throw new Error('list item did not get added to the list');
    }
  });
});
