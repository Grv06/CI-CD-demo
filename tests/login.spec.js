const {test, expect} = require('@playwright/test')
const path = require('path')

test('Login test', async({page})=>{
    const filePath = path.join(__dirname, '..', 'login.html')
    await page.goto('file://' + filePath)

    await page.fill('#username', 'admin')
    await page.waitForTimeout(2000)
    await page.fill('#password', 'password')
    await page.waitForTimeout(2000)
    await page.click('button')
    await page.waitForTimeout(2000)

    await expect(page.locator('#message')).toBeVisible();
})