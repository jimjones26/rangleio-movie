import { RangleioMoviePage } from './app.po';

describe('rangleio-movie App', () => {
  let page: RangleioMoviePage;

  beforeEach(() => {
    page = new RangleioMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
