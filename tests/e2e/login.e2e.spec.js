import {test , expect} from "@playwright/test"


// mo ta test plan

test.describe("kiem thu chuc nang dang nhap", ()=>{

    test.beforeEach(async ({page})=>{
        // mo trang chu len 
        await page.goto("/");
        // tuc la /index.html
    });
    

    // tc1 : chua nhap gi ca , vung thong bao phai hien thi chu email khong hop le
    test("TC-LOGIN-001: hien thi thong bao loi khi bo trong email va mat khau", async({page})=>{
        // keu playwright click nut id button
        await page.click("#login-button");

        //lay phan tu vung thong bao id login-message
        const loginMessage = page.locator('#login-message');

        await expect(loginMessage).toHaveText("Email khong hop le");

    });
    
    // hau het tat ca chuc nang xu ly deu bat dong bo , page la nguyen cai page 

    //tc2: kiem tra email , mat khau dung
    test("TC-LOGIN-002: kiem tra email mat khau dung thi ok", async({page})=>{

        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "123456");
        // keu playwright click nut id button
        await page.click("#login-button");

        //lay phan tu vung thong bao id login-message
        const loginMessage = page.locator('#login-message');

        await expect(loginMessage).toHaveText("ok");

    });

    // tc3: thong bao loi khi co nhap email , bo trong mat khau
    test("TC-LOGIN-003: co nhap email , bo trong mat khau", async({page})=>{

        await page.fill("#email-input", "admin@gmail.com");
        
        // keu playwright click nut id button
        await page.click("#login-button");

        //lay phan tu vung thong bao id login-message (text)
        const loginMessage = page.locator('#login-message');

        await expect(loginMessage).toHaveText("pass khong hop le");

    });

    // tc4: thong bao loi khi dang nhap sai thong tin
    test("TC-LOGIN-004: co nhap email, mat khau sai", async({page})=>{

        await page.fill("#email-input", "admin@gmail.com");
        await page.fill("#password-input", "admin@gmail.com");
        // keu playwright click nut id button
        await page.click("#login-button");

        //lay phan tu vung thong bao id login-message (text)
        const loginMessage = page.locator('#login-message');

        await expect(loginMessage).toHaveText("fail");

    });

    /* tc4: thong bao loi khi co nhap email <3 ky tu
    test("TC-LOGIN-004: co nhap email <3 va pass ky tu thi email khong hop le", async({page})=>{

        await page.fill("#email-input", "a");
        await page.fill("#password-input", "a12211221");
        
        // keu playwright click nut id button
        await page.click("#login-button");

        //lay phan tu vung thong bao id login-message (text)
        const loginMessage = page.locator('#login-message');

        await expect(loginMessage).toHaveText("Email khong hop le");

    });
    // chua the test duoc vi ham xu ly chua co truong hop email <3
    */

    
});













/*


// mo ta test Plan
test.describe("Kiem thu dang nhap e2e", ()=>{

    test.beforeEach(async ({page})=>{
        await page.goto("/");
    });

    //test case 1
    test("hien thi thong bao loi khi bo trong email", async ({page})=>{
        await page.fill("#password-input", "123456");
        await page.click("#login-button");

        const loginMessage = page.locator("#login-message");
        await expect(loginMessage).toHaveText("Email khong hop le");

    });
});
*/