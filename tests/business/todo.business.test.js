import { describe, expect, it , afterEach, beforeEach, vi} from "vitest";

import { loadTodos } from "../../src/todoStore.js";

// 
const API_URL = "http://localhost:3000/todos";


describe("test plan : lay danh sach todo va tirnh dien dang danh sach", ()=>{
    // ham fetch la goi yeu cau theo chuan restfull api 

    // truoc khi test sinh ra 1 ham gia su ten la fetch de hello api
    //Sau dòng này, từ khóa fetch trong toàn bộ môi trường test đã bị chiếm quyền điều khiển.
    //Lúc này, fetch chính là "kẻ mạo danh" hoàn hảo, trùng tên 100% với hàm gọi API trong code gốc để đánh lừa hàm loadTodos
    beforeEach(()=>{
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(()=>{
        vi.unstubAllGlobals();
    });// test xong thi giai phong tat ca cac ham gia su

    // 2 ham tren nam o ngoai global nen co the tai su dung lai 

    // tc001
    it('tc1: load du lieu cac todo nao hoan thanh thi phai co trang thai checked', async ()=>{
        // gia su goi request va nhan ve response
        // id se la chk9 , trang thai checfked = true
        fetch.mockResolvedValue({
            ok:true,
            json: vi.fn().mockResolvedValue([
                {
                    id: '1',
                    title: 'ok',
                    completed: true
                }
            ])
        });

        // goi api lay du lieu thaT 
        const html = await loadTodos(API_URL);

        console.log('html >>>> ',html);



        //expect(html).toContain('<ul>');// mong doi ton tai the ul
        expect(html).toContain('<li>');// mong doi ton tai the li
        expect(html).toContain('id="edit-button1');// mong doi ton tai the li
        expect(html).toContain('id="delete-button1');// mong doi ton tai the li

        // tim theo RegEx
        expect(html).toMatch(/id="chk1"[^>]*checked/); // tim bat ki tren html sau chk1 ra checked


    });

    it('tc2: load du lieu cac todo nao chua hoan thanh thi phai co trang thai unchecked', async ()=>{
        // gia su goi request va nhan ve response
        // id se la chk9 , trang thai checfked = true
        fetch.mockResolvedValue({
            ok:true,
            json: vi.fn().mockResolvedValue([
                {
                    id: '1',
                    title: 'ok',
                    completed: false
                }
            ])
        });

        // goi api lay du lieu thaT 
        const html = await loadTodos(API_URL);

        console.log('html >>>> ',html);



        //expect(html).toContain('<ul>');// mong doi ton tai the ul
        expect(html).toContain('<li>');// mong doi ton tai the li
        expect(html).toContain('id="edit-button1');// mong doi ton tai the li
        expect(html).toContain('id="delete-button1');// mong doi ton tai the li

        // tim theo RegEx
        expect(html).not.toMatch(/id="chk1"[^>]*checked/); // tim bat ki tren html sau chk1 ra checked


    });

});