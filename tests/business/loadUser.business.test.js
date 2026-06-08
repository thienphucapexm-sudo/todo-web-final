import { describe, expect , it } from "vitest";

import {fetchUsers, loadUsers, validateUsers } from "../../src/userStore"; //cu phap tim file , out ra 2 lan vao src se gap file login

// api co dinh 

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

describe("test plan : test business load nguoi dung", ()=>{ // day la cu phap tao ham ngan gon khong dat ten function abc(){}
    it("tc-bus-001 : lay du lieu tao thanh danh sach", async ()=>{ // ham load bat dong bo nen phai async
        const data = await loadUsers(USER_API_URL);

        console.log('data >>> ', data);

        expect(data).toContain('<ul>'); //mong doi co bao gom the <ul>
        expect(data).toContain('</ul>');
        expect(data).toContain('<li>');
    });

    it("tc-bus-002 : lay du so luong nguoi dung khong", async ()=>{
        const html = await loadUsers(USER_API_URL);

        // dem the html bang bieu thuc chinnh quy REGREX
        const soluongthe = (html.match(/<li>/g) || []).length ; // null.length la loi [].length thi ra 0 nen phai them truong hop nay 

        expect(soluongthe).toBe(10);
    });

    it("tc-bus-003 : du so luong va dung thong tin", async ()=>{
        const html = await loadUsers(USER_API_URL);

        expect(html).toContain('Patricia Lebsack'); // trong 10 nguoi thi kiem tra 33% nguoi kieu nhu the 
        expect(html).toContain('Roscoeview');
        expect(html).toContain('Clementina DuBuque');
    });
});

// van con truong hop api co thong tin sai so voi database  , loi cua backend