// any vs unknown
// any >>> 具有传染性
// unknown >>> 类型安全
// js -> ts重构时，推荐全部使用unknown，通过增加开发者的心智负担来确保类型安全

// 如何理解never is bottom type：never < 字面量类型 < 原始类型 < any / unknown
// 'lucy' < string, 123 < number

const strOrNum: string|number|boolean = false

if (typeof strOrNum === 'string'){
    console.log("This is string")
}else if (typeof strOrNum === 'number') {
    console.log("This is number");
}else {
    const _exhaustiveCheck: never = strOrNum // 利用never是bottom类型的特性，造成编译时错误，进而提醒开发者对所有类型进行判断
}

if (typeof strOrNum === 'string'){
    console.log("This is string")
}else if (typeof strOrNum === 'number') {
    console.log("This is number");
}else if (typeof strOrNum === 'boolean') {
    console.log("This is boolean");
}else {
    const _exhaustiveCheck: never = strOrNum // 处理完所有类型之后，这里就不会报错了
}