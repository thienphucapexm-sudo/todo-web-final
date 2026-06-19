import { describe, expect, it , afterEach, beforeEach, vi} from "vitest";

import { addTodo } from "../../src/todoStore.js";

// test voi api thi sao ? them after , before, vi....

const API_URL = "http://localhost:3000/todos";
// test BE 


// test plan 
describe('test plan ve API todo', ()=> {
    // ham fetch la goi yeu cau theo chuan restfull api 

    // truoc khi test sinh ra 1 ham gia su ten la fetch de hello api
    beforeEach(()=>{
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(()=>{
        vi.unstubAllGlobals();
    });// test xong thi giai phong tat ca cac ham gia su

    // 2 ham tren nam o ngoai global nen co the tai su dung lai 

    // test case 1
    // lien quan api phai la bat dong do 
    it('tc001: goi request POST voi title la new title', async ()=>{
        // tao du lieu mau (payload)
        // chuẩn bị dữ liệu mau gởi đi
        const newTitle = 'TC001';
        const payload = {
            title: newTitle,
            completed: false
        };


        // gia su goi va nhan duoc du lieu ve ( mock la gia su )
        // goi di thi thuong hay nhan ve response 
        fetch.mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(payload)
        });

        
        // goi api that de lay ket qua 
        const result = await addTodo(API_URL,newTitle);

        console.log(">>>>> kq : ",result);

        //so sanh ket qua mong doi 
        expect(result).toEqual(payload);

        // mong doi goi duoc api chuan json , chuan POST 
        expect(fetch).toHaveBeenCalledWith(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

    });

    // tc002

    it('tc002: ham addtodo co throw error khi api that bai khong', async ()=>{
        // gia su ket qua nhan duoc bi fail 
        fetch.mockResolvedValue({
            ok: false,
            json: vi.fn()
        });

        // goi api that de lay ket qua that
        var error = '';
        try {
            const kq = await addTodo(API_URL,'Viet test fail');
            //console.log(">>>>> kq : ",kq);
        } catch (err) {
            //console.log(">>>>> err : ",err);
            error = err.message; // chi lay key cua json
        }

        expect(error).toEqual("Err002: Không kết nối được dữ liệu");

    });

});
