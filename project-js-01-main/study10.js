// control statement (loop/iteration/repetition) Ep.2
// break and continue ใน loop
//------------------------------
// 1. break in loop  ทำงานเมื่อไหร่จบเลย
let aa = 1
while (aa<=5){
    aa++; //++aa หรือ a = a + 1 หรือ a += 1

    if (aa == 3){
        break
    }
    console.log(aa-1,'Hello...');
    
}

// 2. continue in loop ทำงานเมื่อไหร่ จบรอบนั้น ไปรอบต่อไปเลย
let bb = 1
while (bb<=5){
    bb++;

    if (bb == 3){
        continue
    }
    console.log(bb-1,'Hi...');
}
