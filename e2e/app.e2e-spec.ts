import { WaterDeliveryPage } from './app.po';

describe('water-delivery App', function() {
  let page: WaterDeliveryPage;

  beforeEach(() => {
    page = new WaterDeliveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
