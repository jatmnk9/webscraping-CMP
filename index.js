const puppeteer = require('puppeteer')
const randomUseragent = require('random-useragent')

const prueba1 = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('ejemplo');
    
    //await page.type('#cmp', 'World', {delay: 100});
    
    const mail = await page.$x('//*[@id="login_form_email"]');
    await mail[0].type('ejemplo')
    const password = await page.$x('//*[@id="login_form_password"]');
    await password[0].type('ejemplo')
    const submit_ = await page.$x('//*[@id="login-form"]/form/button')
    await submit_[0].click()

    //*[@id="login-form"]/form/button
    //await page.type('#btnclave', process.env.ELVIS_PASWORD);  
}

  prueba1();



  /*
const simularLogin = async() => {
    const header = randomUseragent.getRandom((ua)=>{
        return ua.browserName == 'Firefox';
    });

    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,

    });

    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.setViewport({width:1920,height:1080});
    await page.goto('https://www.cmp.org.pe/conoce-a-tu-medico/');

     //identify element with id
    const f = await page.$("#cmp")
    //enter text
    await f.type("holi");
    await page.waitForNavigation();
    //wait for sometime
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    /*
    const loginCMP = await page.waitForSelector('#cmp')
    const loginappaterno = await page.waitForSelector('#appaterno')
    const loginapmaterno = await page.waitForSelector('#apmaterno')
    const loginnombres = await page.waitForSelector('#nombres')
    await loginCMP.type("hola");
    await loginappaterno.type("hola");
    await loginapmaterno.type("hola");
    await loginnombres.type("hola");
    */


