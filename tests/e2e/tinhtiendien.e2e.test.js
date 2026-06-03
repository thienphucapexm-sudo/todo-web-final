import {test , expect} from "@playwright/test"
import { tinhTienDien } from "../../src/tinhtiendien";

// mo ta test plan

test.describe("kiem thu giao dien tinh tien dien", ()=>{

    test.beforeEach(async ({page})=>{
        // mo trang chu len 
        await page.goto("/tinh-tien-dien.html");
        // tuc la /aaa.html
    });
    

    // tc1 : chua nhap gi ca , vung thong bao phai hien thi chu email khong hop le
    test("TC-e2e-001: hien thi ket qua khi so tien = 0", async({page})=>{
        await page.fill("#kwh-input", "10");
        var ketqua = tinhTienDien(10);
        // keu playwright click nut id button
        await page.click("#calculate-button");

        //lay phan tu vung thong bao id login-message
        const loginMessage = page.locator('#calculation-message');

        //await expect(loginMessage).toHaveText(ketqua);
        await expect(loginMessage).toHaveJSProperty('innerHTML', '<span style="color:red;">So tien phai tra la 18000</span>');

    });
});