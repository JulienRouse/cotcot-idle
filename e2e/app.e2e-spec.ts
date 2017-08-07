import { CotcotIdlePage } from './app.po';

describe('cotcot-idle App', () => {
  let page: CotcotIdlePage;

  beforeEach(() => {
    page = new CotcotIdlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
