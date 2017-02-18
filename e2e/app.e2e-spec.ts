import { OlympicsclientPage } from './app.po';

describe('olympicsclient App', function() {
  let page: OlympicsclientPage;

  beforeEach(() => {
    page = new OlympicsclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
