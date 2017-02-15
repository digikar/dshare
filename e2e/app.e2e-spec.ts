import { DsharePage } from './app.po';

describe('dshare App', function() {
  let page: DsharePage;

  beforeEach(() => {
    page = new DsharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
