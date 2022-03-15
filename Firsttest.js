var webdriver = require('selenium-webdriver');
//require("chromedriver");
//require("geckodriver");
const assert = require("assert");

const {Builder,By,Key,util} = require('selenium-webdriver');
let driver =  new webdriver.Builder().forBrowser("firefox").build();
it('title' , async function(){

// 1.Visit a URL
await driver.get("https://demoqa.com");

// 2.Test script to click on the Forms card.
//await driver.findElement(By.xpath("/html/body/div[2]/div/div/div[2]/div/div[2]/div/div[3]")).click(); //Using Absolute xpath
await driver.findElement(By.xpath("//h5[text()='Forms']")).click(); //Using Relative xpath

// 3.Test script to click on the Practice Form button
await driver.findElement(By.xpath("//span[text()='Practice Form']")).click();

// 4.Fill the text in the form Firstname,Lastname,emailID,Gender,Mobile no.,DOB,
await driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys("Manoj");//Input Firstname

await driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys("Gautam");//Input Lastname

await driver.findElement(By.id("userEmail")).sendKeys("dreams.manojko@gmail.com");//Input email

await driver.findElement(By.xpath("/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[3]/div[2]/div[1]/label")).click();//select Gender

await driver.findElement(By.id('userNumber')).sendKeys("9817016782");//Input Mobile no.

//Input DOB
await driver.findElement(By.id('dateOfBirthInput')).click();
await driver.findElement(By.xpath("//option[@value='1994']")).click();//Select Year
await driver.findElement(By.xpath("/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[5]/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/select/option[9]")).click();//Select Month
await driver.findElement(By.css(".react-datepicker__day--020")).click();//Select Day

})
