import { defineConfig } from "@playwright/test"; // cu phap

export default defineConfig({
    testDir: "./tests/e2e", // chi duong den file 
    timeout: 30000, // thoi gian doi 
    use: {
        baseURL: "http://127.0.0.1:4173", //port cua playwright
        headless: false, // co nghia la co giao dien
        screenshot: "on", // co chup hinh 
        video: "on", // co quay hinh 
        trace: "on" // f12 len xem duoc tien trinh chay , phuc vu cho debug 

    },
    // bao cao nhan 1 cai mang
    // code theo cau hinh mac dinh tren huong dan cua playwright
    reporter: [
        ["list"],
        ["html", {open:"never"}],
    
    ],
    webServer: {
        command: "npx http-server . -p 4173 -c-1",
        port:4173,
        reuseExistingServer: true,
        timeout: 120000
    }
});