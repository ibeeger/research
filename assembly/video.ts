

//对比颜色
export function contrast(r1: i32, g1: i32, b1: i32, r2: i32, g2: i32, b2: i32): i32 {
    let color1 = r1 * 0.299 + g1 * 0.578 + b1 * 0.114;
    let color2 = r2 * 0.299 + g2 * 0.578 + b2 * 0.114
    if (color1 <= color2) {
        return 1;
    }
    return 0;
}


export function changeColor(byte: i32, sr: i8, sg: i8, sb: i8): void {
    for (let j = 0; j < byte; j += 4) {
        let r = load<i32>(j);
        let g = load<i32>(j + 1);
        let b = load<i32>(j + 2);
        let a = load<i32>(j + 3);
        if (contrast(r, g, b, sr, sg, sb)) {
            store<i32>(j, 255);
            store<i32>(j + 1, 2);
            store<i32>(j + 2, 255);
            store<i32>(j + 3, 222);
        } else {
            store<i32>(j, r);
            store<i32>(j + 1, g);
            store<i32>(j + 2, b);
            store<i32>(j + 3, a);
        }
    }
}