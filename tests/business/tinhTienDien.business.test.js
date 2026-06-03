import { describe, expect, it } from "vitest";
import { tinhTienDien, tinhTienDienSuDung } from "../../src/tinhtiendien";

// mo ta TEST PLAN 

// trong day test business tuc la chi test ham business

describe("Kiem thu ham business tinhdiendiensudung", ()=>{
    // tc-unit-001: 
    it("tc-unit-000: bao loi khi kwh<0", ()=>{
        const soTien = tinhTienDienSuDung(10);
        const kq = tinhTienDien(10);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe(`<span style="color:red;">So tien phai tra la ${soTien}</span>`);
    });

});
