import { HelloNG2Page } from './app.po';

describe('hello-ng2 App', function() {
  let page: HelloNG2Page;

  beforeEach(() => {
    page = new HelloNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
