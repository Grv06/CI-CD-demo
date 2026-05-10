# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\login.spec.js >> Login test
- Location: tests\login.spec.js:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#messag')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#messag')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Login" [level=2] [ref=e3]
  - generic [ref=e4]:
    - textbox "Username" [ref=e5]: admin
    - textbox "Password" [ref=e6]: password
    - button "Login" [active] [ref=e7]
  - generic [ref=e8]: Login successful!
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | const path = require('path')
  3  | 
  4  | test('Login test', async({page})=>{
  5  |     const filePath = path.join(__dirname, '..', 'login.html')
  6  |     await page.goto('file://' + filePath)
  7  | 
  8  |     await page.fill('#username', 'admin')
  9  |     await page.waitForTimeout(2000)
  10 |     await page.fill('#password', 'password')
  11 |     await page.waitForTimeout(2000)
  12 |     await page.click('button')
  13 |     await page.waitForTimeout(2000)
  14 | 
> 15 |     await expect(page.locator('#messag')).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  16 | })
```