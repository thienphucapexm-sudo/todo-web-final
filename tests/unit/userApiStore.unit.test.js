import { describe, expect , it } from "vitest";

import {fetchUsers , validateUsers } from "../../src/userStore"; //cu phap tim file , out ra 2 lan vao src se gap file login

// test unit 

// api co dinh 

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

describe(" Test plan : loaduser voi api ", ()=>{

    // kiem tra url co ton tai hay khong ?
    it("tc-api-001: check url valid", ()=>{
        const data = fetchUsers(USER_API_URL);

        expect(data.lenght > 0 ); // expect khong phai except nha
    });

    // kiem tra data hop le hay khong 
    it("tc-api-002: check data valid", async ()=>{
        const data = await fetchUsers(USER_API_URL); // neu khong co await ( khog cho doi ) thi tra ve loi hua thoi 

        console.log('data >>>> ',data); // data >>>>  Promise { <pending> } ham bat dong bo 
        // trong qua trinh test ma co van de thi console.log

        const kq = validateUsers(data);

        expect(kq).toBe("data ok");
    });


});