import { GALLERY_CONSTS } from 'pro-gallery-lib';
import GalleryDriver from '../../drivers/pptrDriver';
import { toMatchImageSnapshot } from '../../drivers/matchers';

expect.extend({ toMatchImageSnapshot });

describe('alternate - e2e', () => {
  let driver;

  beforeAll(async () => {
    driver = new GalleryDriver();
    await driver.openPage();
  });

  afterAll(async () => {
    await driver.closePage();
  });
  it('alternate layout - scrollDirection = vertical', async () => {
    await driver.navigate({
      galleryLayout: GALLERY_CONSTS.layout.ALTERNATE,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL,
    });
    await driver.waitFor.hookToBeVisible('item-container');
    await driver.waitFor.timer(400);
    const page = await driver.grab.partialScreenshot();
    expect(page).toMatchImageSnapshot();
  });
  it('alternate layout - scrollDirection = horizontal', async () => {
    await driver.navigate({
      galleryLayout: GALLERY_CONSTS.layout.ALTERNATE,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL,
    });
    await driver.waitFor.hookToBeVisible('item-container');
    await driver.waitFor.timer(400);
    const page = await driver.grab.partialScreenshot();
    expect(page).toMatchImageSnapshot();
  });
});
