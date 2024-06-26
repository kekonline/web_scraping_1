const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://instagram.com/');
  await page.waitFor('a[href="/accounts/login/?source=auth_switcher"]');
  await page.click('a[href="/accounts/login/?source=auth_switcher"]');
  await page.waitFor(500);

  await page.waitFor('input[name="username"]');
  await page.type('input[name="username"]', 'username');
  await page.type('input[name="password"]', 'password');
  await page.click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > button');

  // await browser.close();

})();