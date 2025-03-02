// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %= กำหนดค่าอย่างย่อ ทำทางขวาให้เสร็จไปใส่ทางซ้าย 
let x = 10 
 x + 5 //x += 5
let y = 20
y + 7 * x / 5 // y+= 7 * x / 5

// Nullish Coalescing Operator __??__ 
// กรณีที่หน้า ??  เป็น null จะได้ค่าหลังเครื่องหมาย
// กรณีที่หน้า ??  เป็นไม่ใช่ null จะได้ค่านั้นๆ เลย
let aa = null
let bb = 111
console.log(aa ?? 888);
console.log(bb ?? 555);

// Ternary Conditional Operator __?__:__ จริงได้หลังคำถาม เท็จได้หลัง :
let cc = 10 < 555 ? 'Hello...' : 'Goodbye...'
console.log(cc);

let dd = 'Sombat' > 'Somjai' ? 555 : 999
console.log(dd);

// Spread Operator __...__  จะใช้กับ object กับ array
let ee = [1, 2, 3]
let ff = [10, 20, 30]
let gg = [...ee, ...ff]
console.log(gg);





