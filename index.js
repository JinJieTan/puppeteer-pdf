const puppeteer = require('puppeteer');
const url = require('./url');
(async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    //选择要打开的网页  
    await page.goto(url, { waitUntil: 'networkidle0' })
    //选择你要输出的那个PDF文件路径，把爬取到的内容输出到PDF中，必须是存在的PDF，可以是空内容，如果不是空的内容PDF，那么会覆盖内容
    let pdfFilePath = './index.pdf';
    //根据你的配置选项，我们这里选择A4纸的规格输出PDF，方便打印
    await page.pdf({
        path: pdfFilePath,
        format: 'A4',
        scale: 1,
        printBackground: true,
        landscape: false,
        displayHeaderFooter: false
    });
    await browser.close()
})()