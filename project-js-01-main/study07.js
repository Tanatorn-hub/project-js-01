// control statement (condition/selection) Ep.1
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 1. if พิสูจน์ครั้งเดียว จริงทำ เท็จไม่ทำ 
let aa = 10 
if (aa > 5 ){
    console.log('Wow...');
    console.log('Wee...');
}

if (aa < 5) console.log('Woo...');

// 2. if-else  พิสูจน์ครั้งเดียว  จริงทำอย่าง เท็จทำอย่าง
let bb ='sombat'
if (bb >= 'somjai'){
    console.log('Hello...');
    console.log('111...');
} 
else {
    console.log('Goodbye...');
    console.log('222...');
}