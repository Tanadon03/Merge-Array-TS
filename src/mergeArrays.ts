// src/mergeArrays.ts

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let result: number[] = [];
    
    let i = 0, j = 0, k = 0;

    // รวม collection_1 และ collection_2 ที่ถูกเรียงลำดับแล้ว
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_2[j]);
            j++;
        }
    }

    // เพิ่มค่าที่เหลือจาก collection_1
    while (i < collection_1.length) {
        result.push(collection_1[i]);
        i++;
    }

    // เพิ่มค่าที่เหลือจาก collection_2
    while (j < collection_2.length) {
        result.push(collection_2[j]);
        j++;
    }

    // รวม collection_3 ที่เรียงจากมากไปหาน้อย (reverse collection_3)
    while (k < collection_3.length) {
        result.push(collection_3[k]);
        k++;
    }

    // แสดงผลลัพธ์หลังจากรวม arrays ทั้งหมด
    console.log("Merged Array (before sort): ", result);

    // เราทำให้ result เรียงลำดับจากน้อยไปหามาก
    const sortedResult = result.sort((a, b) => a - b);

    // แสดงผลลัพธ์หลังจากการเรียงลำดับ
    console.log("Merged Array (after sort): ", sortedResult);

    return sortedResult;
}
