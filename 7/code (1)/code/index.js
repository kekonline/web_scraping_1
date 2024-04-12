const puppeteer = require('puppeteer');
const twitter = require('./twitter');

(async () => {
  
  const USERNAME = 'altumcode';
  const PASSWORD = 'thisisjustatest';
  
  await twitter.initialize();
  
  await twitter.login(USERNAME, PASSWORD);
  
  debugger;

  // await browser.close();

})();