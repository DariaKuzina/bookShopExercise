import { BookshopPage } from './app.po';

describe('bookshop App', () => {
  let page: BookshopPage;

  beforeEach(() => {
    page = new BookshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
