const puppeteer = require('puppeteer');

jest.setTimeout(100000);

test('should click around', async() => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage();
    await page.goto(
        'file:///D:/Github%20Repository/Testing/Task3/index.html'
    );
    await page.click('input');
    await page.type('input', 'од2ин Эт1о 4многих тесто5в из3');
    await page.click('#btnSubmit');
    const finalText = await page.$eval('#output', el => el.textContent);
    expect(finalText).toBe("Эт1о од2ин из3 4многих тесто5в");
});