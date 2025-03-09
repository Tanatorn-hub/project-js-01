// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = 'aaa ${10*5}'
let bb = "bbb ${10*5}"
let cc = `ccc ${10 * 5}`
console.log(aa,bb,cc);



// number
let dd = 111  //integer
let ee = 22.34253 //
console.log(dd,ee);
console.log(`dd ee`)
console.log(`${dd} ${ee}`)



// boolean
let ff =true 
let gg = false
console.log(ff,gg);

// object
let hh = {
    //  key : value
name: 'john',
age: 30,
major:"DTI",
uin:`SAU ${10 * 20 }`
}
console.log(hh);
console.log(`ชื่อ ${hh.name} อายุ ${hh.age}`);
console.log(hh.uin);

// array
//         0  1  2  3
let ii = [10,20,30,40]
console.log(ii);
console.log(ii[1]);
console.log(ii[0] * ii[3]);

// undefined
let jj
let kk = undefined
console.log(jj);
console.log(kk);


// null
let ll = null
console.log(ll);

// type checking การตรวจสอบชนิดข้อมูล
console.log( typeof kk);
console.log( typeof ll);
console.log( typeof hh);