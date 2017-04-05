import { AngularCLIdotNetPage } from './app.po';

describe('angular-clidot-net App', () => {
  let page: AngularCLIdotNetPage;

  beforeEach(() => {
    page = new AngularCLIdotNetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
