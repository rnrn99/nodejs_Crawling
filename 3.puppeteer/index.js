const puppeteer = require("puppeteer");

const crawler = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://sports.news.naver.com/kbaseball/schedule/index");
  const teamName = await page.$(".tab_team .team");
  if (teamName) {
    const text = await page.evaluate((tag) => tag.textContent, team);
    console.log(text);
  }
  await page.waitForTimeout(3000);
  await page.close();
  await browser.close();
};

crawler();
