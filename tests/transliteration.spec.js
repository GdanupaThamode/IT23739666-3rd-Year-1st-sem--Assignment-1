import { test, expect } from '@playwright/test';

const scenarios = [
    // Positive functional test cases
    { id: 'Pos_Fun_0001', input: 'mama gedhara yanavaa.', expected: 'මම ගෙදර යනවා.' },
    { id: 'Pos_Fun_0002', input: 'mata udhavvak oonee.', expected: 'මට උදව්වක් ඕනේ.' },
    { id: 'Pos_Fun_0003', input: 'oyaa enavadha?', expected: 'ඔයා එනවද?' },
    { id: 'Pos_Fun_0004', input: 'issarahata yanna.', expected: 'ඉස්සරහට යන්න.' },
    { id: 'Pos_Fun_0005', input: 'mama ehema karanne naehae.', expected: 'මම එහෙම කරන්නේ නැහැ.' },
    { id: 'Pos_Fun_0006', input: 'api kaeema kanna yanavaa saha passe kathaa karamu.', expected: 'අපි කෑම කන්න යනවා සහ පස්සෙ කතා කරමු.' },
    { id: 'Pos_Fun_0007', input: 'mama iiyee gedhara giyaa.', expected: 'මම ඊයේ ගෙදර ගියා.' },
    { id: 'Pos_Fun_0008', input: 'mama heta enavaa.', expected: 'මම හෙට එනවා.' },
    { id: 'Pos_Fun_0009', input: 'api yamu.', expected: 'අපි යමු.' },
    { id: 'Pos_Fun_0010', input: 'karuNaakaralaa mata udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_0011', input: 'ehema karapan.', expected: 'එහෙම කරපන්.' },
    { id: 'Pos_Fun_0012', input: 'hari hari hodhayi', expected: 'හරි හරි හොදයි' },
    { id: 'Pos_Fun_0013', input: 'api Kandy valata yanavaa.', expected: 'අපි Kandy වලට යනවා.' },
    { id: 'Pos_Fun_0014', input: 'Zoom meeting ekak thiyennee.', expected: 'Zoom meeting එකක් තියෙන්නේ.' },
    { id: 'Pos_Fun_0015', input: 'mata Rs. 1500 oonee.', expected: 'මට Rs. 1500 ඕනේ.' },
    { id: 'Pos_Fun_0016', input: 'meeting eka 7.30 AM.', expected: 'meeting එක 7.30 AM.' },
    { id: 'Pos_Fun_0017', input: '25/12/2025 api yamu.', expected: '25/12/2025 අපි යමු.' },
    { id: 'Pos_Fun_0018', input: 'sugar gram 500 oonee.', expected: 'sugar gram 500 ඕනේ.' },
    { id: 'Pos_Fun_0019', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' },
    { id: 'Pos_Fun_0020', input: 'mama gedhara yanavaa.\noyaa enavadha?', expected: 'මම ගෙදර යනවා.\nඔයා එනවද?' },
    { id: 'Pos_Fun_0021', input: 'api heta gedhara yanavaa. passe api kathaa karamu.', expected: 'අපි හෙට ගෙදර යනවා. පස්සෙ අපි කතා කරමු.' },
    { id: 'Pos_Fun_0022', input: 'dhitvaa suLi kuNaatuva heethuven maarga vaasa barapathaLa lesa pidith viya. ema suLi kuNaatuva samaGA aethivuu dhaedi varShaapathanaya nisaa gQQvathura haa naaya yaeem bahulava sidhuviya. ee heethuven janathaavagee dheepaLa vishaala pramaaNayak vinaasha vuu athara nivaasa raesakma jalayen haa maeti valin aavaraNaya viya. dhainika jiivithaya sampuurNayenma adaala vii gamanaagamanayath, vidhuli haa jala saepayum seevaath biDHA vaetuNi. mema avaasanaavantha thaththvaya heethuven jiivitha raesak apata ahimi vuu athara bohoo dhenaa thaavakaalika aarakShitha kaDHAvuru vetha gena yaamata sidhu viya.', expected: 'දිට්වා සුළි කුණාටුව හේතුවෙන් මාර්ග වාස බරපතළ ලෙස පිඩිත් විය. එම සුළි කුණාටුව සමඟ ඇතිවූ දැඩි වර්ෂාපතනය නිසා ගංවතුර හා නාය යෑම් බහුලව සිදුවිය. ඒ හේතුවෙන් ජනතාවගේ දේපළ විශාල ප්‍රමාණයක් විනාශ වූ අතර නිවාස රැසක්ම ජලයෙන් හා මැටි වලින් ආවරණය විය. දෛනික ජීවිතය සම්පූර්ණයෙන්ම අඩාල වී ගමනාගමනයත්, විදුලි හා ජල සැපයුම් සේවාත් බිඳ වැටුණි. මෙම අවාසනාවන්ත තත්ත්වය හේතුවෙන් ජීවිත රැසක් අපට අහිමි වූ අතර බොහෝ දෙනා තාවකාලික ආරක්ෂිත කඳවුරු වෙත ගෙන යාමට සිදු විය.' },
    { id: 'Pos_Fun_0023', input: 'mata OTP eka email karanna.', expected: 'මට OTP එක email කරන්න.' },
    { id: 'Pos_Fun_0024', input: 'oyaa enavaanam api yamu.', expected: 'ඔයා එනවානම් අපි යමු.' },

    // Negative functional test cases
    { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'Incorrect or unclear Sinhala output' },
    { id: 'Neg_Fun_0002', input: 'ela machan supiri', expected: 'Output lacks semantic clarity' },
    { id: 'Neg_Fun_0003', input: 'mmm gedhr ynv', expected: 'Unclear or incorrect Sinhala output' },
    { id: 'Neg_Fun_0004', input: 'hetaapiyanavaapasseeapiyanne', expected: 'Words should be separated correctly' },
    { id: 'Neg_Fun_0005', input: 'mama @@@ gedhara', expected: 'Partial or incorrect Sinhala output' },
    { id: 'Neg_Fun_0006', input: 'mama gedhara yanavaa 😊', expected: 'Emoji should not affect conversion' },
    { id: 'Neg_Fun_0007', input: 'Mama GeDhArA YaNaVaA', expected: 'Consistent Sinhala conversion expected' },
    { id: 'Neg_Fun_0008', input: 'mama $$$ gedhara yanavaa', expected: 'Symbols should be ignored or removed' },
    { id: 'Neg_Fun_0009', input: 'mama yanavaa', expected: 'Normalized spacing expected' },
    { id: 'Neg_Fun_0010', input: 'ado machan api gedhara yanavaa nathnam mokadha karanne', expected: 'Clear Sinhala meaning expected' },

    
];

test.describe('SwiftTranslator Automation', () => {

    test.setTimeout(180000); // 3 minutes total timeout

    for (const data of scenarios) {
        test(`Test Case ${data.id}`, async ({ page }) => {
            // FIX 1: Use domcontentloaded to avoid waiting for slow ads
            await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

            const normalize = (value) => {
                const text = (value ?? '').replace(/\r\n/g, '\n').trim();
                const withoutTitle = text.replace(/^Sinhala\s*\n?/i, '');
                return withoutTitle.trimEnd();
            };

            const getSinhalaPanelOutput = async () => {
                return await page.evaluate(() => {
                    const containsSinhala = (text) => /[\u0D80-\u0DFF]/.test(text);
                    const isVisible = (element) => {
                        const style = window.getComputedStyle(element);
                        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
                        const rect = element.getBoundingClientRect();
                        return rect.width > 0 && rect.height > 0;
                    };

                    const rightEdge = window.innerWidth / 2;
                    const candidates = Array.from(document.querySelectorAll('body *'))
                        .filter((element) => {
                            if (!(element instanceof HTMLElement)) return false;
                            if (!isVisible(element)) return false;
                            if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return false;
                            if (element.closest('textarea')) return false;
                            const rect = element.getBoundingClientRect();
                            return rect.left >= rightEdge;
                        })
                        .map((element) => {
                            const text = element.innerText ?? '';
                            return { element, text };
                        })
                        .filter((item) => item.text && containsSinhala(item.text));

                    let bestText = '';
                    let bestScore = -1;

                    for (const item of candidates) {
                        const text = item.text;
                        const sinhalaCount = (text.match(/[\u0D80-\u0DFF]/g) || []).length;
                        const score = sinhalaCount * 10 + Math.min(text.length, 500);
                        if (score > bestScore) {
                            bestScore = score;
                            bestText = text;
                        }
                    }

                    return bestText;
                });
            };

            const visibleTextareas = page.locator('textarea:visible');
            const textareaCount = await visibleTextareas.count();

            let inputField = visibleTextareas.first();
            let outputField = visibleTextareas.last();

            if (textareaCount >= 2) {
                const firstIsReadOnly = await visibleTextareas.first().evaluate((el) => el.readOnly || el.disabled);
                const lastIsReadOnly = await visibleTextareas.last().evaluate((el) => el.readOnly || el.disabled);

                if (!firstIsReadOnly && lastIsReadOnly) {
                    inputField = visibleTextareas.first();
                    outputField = visibleTextareas.last();
                } else if (firstIsReadOnly && !lastIsReadOnly) {
                    inputField = visibleTextareas.last();
                    outputField = visibleTextareas.first();
                } else {
                    inputField = visibleTextareas.nth(0);
                    outputField = visibleTextareas.nth(1);
                }
            }

            await inputField.waitFor({ state: 'visible' });
            
            await inputField.fill('');
            await inputField.pressSequentially(data.input, { delay: 15 });

            // Wait for conversion/output
            await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).not.toBe('');

            const actualOutputRaw = await getSinhalaPanelOutput();
            const actualOutput = normalize(actualOutputRaw);
            const expectedOutput = normalize(data.expected);
            const pass = actualOutput === expectedOutput;

            console.log(`\n-----------------------------------`);
            console.log(`TC ID: ${data.id}`);
            console.log(`INPUT: ${data.input}`);
            console.log(`EXPECTED: ${data.expected}`);
            console.log(`ACTUAL: ${actualOutputRaw}`);
            console.log(`STATUS: ${pass ? 'PASS' : 'FAIL'}`);
            console.log(`-----------------------------------`);
            
            expect(actualOutput).toBe(expectedOutput);
        });
    }

    test('Pos_UI_0002: Sinhala output clears when Singlish input is cleared', async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

        const normalize = (value) => {
            const text = (value ?? '').replace(/\r\n/g, '\n').trim();
            const withoutTitle = text.replace(/^Sinhala\s*\n?/i, '');
            return withoutTitle.trimEnd();
        };

        const getSinhalaPanelOutput = async () => {
            return await page.evaluate(() => {
                const containsSinhala = (text) => /[\u0D80-\u0DFF]/.test(text);
                const isVisible = (element) => {
                    const style = window.getComputedStyle(element);
                    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
                    const rect = element.getBoundingClientRect();
                    return rect.width > 0 && rect.height > 0;
                };

                const rightEdge = window.innerWidth / 2;
                const candidates = Array.from(document.querySelectorAll('body *'))
                    .filter((element) => {
                        if (!(element instanceof HTMLElement)) return false;
                        if (!isVisible(element)) return false;
                        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return false;
                        if (element.closest('textarea')) return false;
                        const rect = element.getBoundingClientRect();
                        return rect.left >= rightEdge;
                    })
                    .map((element) => {
                        const text = element.innerText ?? '';
                        return { element, text };
                    })
                    .filter((item) => item.text && containsSinhala(item.text));

                let bestText = '';
                let bestScore = -1;

                for (const item of candidates) {
                    const text = item.text;
                    const sinhalaCount = (text.match(/[\u0D80-\u0DFF]/g) || []).length;
                    const score = sinhalaCount * 10 + Math.min(text.length, 500);
                    if (score > bestScore) {
                        bestScore = score;
                        bestText = text;
                    }
                }

                return bestText;
            });
        };

        const visibleTextareas = page.locator('textarea:visible');
        const textareaCount = await visibleTextareas.count();

        let inputField = visibleTextareas.first();
        let outputField = visibleTextareas.last();

        if (textareaCount >= 2) {
            const firstIsReadOnly = await visibleTextareas.first().evaluate((el) => el.readOnly || el.disabled);
            const lastIsReadOnly = await visibleTextareas.last().evaluate((el) => el.readOnly || el.disabled);

            if (!firstIsReadOnly && lastIsReadOnly) {
                inputField = visibleTextareas.first();
                outputField = visibleTextareas.last();
            } else if (firstIsReadOnly && !lastIsReadOnly) {
                inputField = visibleTextareas.last();
                outputField = visibleTextareas.first();
            } else {
                inputField = visibleTextareas.nth(0);
                outputField = visibleTextareas.nth(1);
            }
        }
        
        await inputField.fill('mama gedhara yanavaa');
        await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).not.toBe('');
        await inputField.fill('');
        await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).toBe('');
    });
});