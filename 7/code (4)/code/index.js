const puppeteer = require('puppeteer');
const twitter = require('./twitter');

(async () => {
  
  const USERNAME = 'altumcode';
  const PASSWORD = 'thisisjustatest';
  
  await twitter.initialize();
  
  await twitter.login(USERNAME, PASSWORD);
  
  let details = await twitter.getUser('Udemy');

  // await twitter.postTweet('Hello world, this is just a test message.');

  debugger;

  // await browser.close();

})();