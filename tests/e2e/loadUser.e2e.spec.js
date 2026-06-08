import {test , expect} from "@playwright/test"



// luu y test e2e nen la bat dong bo het 
test ('tc-e2e-001 : nhap url va hien thi danh sach ul li', async ({page})=> { // cai ham bo vao cai page
    await page.goto('/danh-sach-users.html');

    await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
    await page.click('#fetch-button');

    await expect(page.locator('#result ul')).toBeVisible(); // danh sach ( the ul ) co xuat hien 
    await expect(page.locator('#result li')).toHaveCount(10); // danh sach co du 10 the li


});

test ('tc-e2e-002 : nhap url va hien thi danh sach co nguoi dung Roscoeview', async ({page})=> { // cai ham bo vao cai page
    await page.goto('/danh-sach-users.html');

    await page.locator('#api-url').fill('https://jsonplaceholder.typicode.com/users');
    await page.click('#fetch-button');

    const kq = page.locator('#result'); // ket qua nam trong vung result

    await expect(kq).toContainText('Roscoeview'); // containtext nha , tocontain la test voi api , ham nay test voi giao dien


});
