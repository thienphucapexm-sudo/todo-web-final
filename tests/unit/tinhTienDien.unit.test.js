import { describe, expect, it } from "vitest";

import {validateSokwh , tinhTienDienSuDung} from "../../src/tinhtiendien"; //cu phap tim file , out ra 2 lan vao src se gap file login


// day la mo ta 1 test plan (unit test)
describe("unit test : tinh tien dien",()=>{
    // tc-unit-001: bao loi khi bo trong
    it("tc-unit-000: bao loi khi kwh<0", ()=>{
        const kq = validateSokwh(-10);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe("So kwh phai > 0");
    });

    it("tc-unit-001: bao loi khi bo trong", ()=>{
        const kq = validateSokwh("");
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe("Vui long nhap so kwh(batbuoc)");
    });

    it("tc-unit-002: tinh dung tien dien khi kwh=0", ()=>{
        const kq = tinhTienDienSuDung(0);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe(0);
    });

    it("tc-unit-003: tinh dung khi khung tien dien bac 1", ()=>{
        const kq = tinhTienDienSuDung(50);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe(90000);
    });

    it("tc-unit-004: tinh dung khi khung tien dien bac 2", ()=>{
        const kq = tinhTienDienSuDung(100);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe(190000);
    });

    it("tc-unit-004: tinh dung khi khung tien dien bac 3", ()=>{
        const kq = tinhTienDienSuDung(200);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe(440000);
    });
})