import { describe, expect, it } from "vitest";
import {checkEmail , checkPassword} from "../../src/loginStore"; //cu phap tim file , out ra 2 lan vao src se gap file login


// mo ta TEST PLAN
describe("Kiểm thử từng hàm nhỏ của chức năng đăng nhập", () =>{
    // test case 1
    it("hàm checkEmail tra ve false khi email bi trong", ()=>{
        const result = checkEmail("");

        expect(result).toBe(false); // mong doi ket qua la false thi test case pass
    });

    //test case 2
    it("hàm checkEmail tra ve false khi email <3 ky tu", ()=>{
        const result = checkEmail("ab");

        expect(result).toBe(false);
    });

    //test case 3
    it("hàm checkEmail tra ve true neu email dung", ()=>{
        const result = checkEmail("phucuong@ctu.edu.vn");

        expect(result).toBe(true);
    });

    //test case 4
    it("hàm checkPassword tra ve false neu pass <6 ky tu", ()=>{
        const result = checkPassword("12345");

        expect(result).toBe(false);
    });

});
