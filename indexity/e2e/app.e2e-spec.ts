import { IndexityPage } from './app.po';

describe('indexity App', () => {
  let page: IndexityPage;

  beforeEach(() => {
    page = new IndexityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
