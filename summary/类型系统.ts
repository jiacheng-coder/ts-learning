// 结构化类型系统(structural) vs 标称类型系统(nominal)
// ts是基于类型的结构而不是类型的名称，进行类型的检查，因此会带来一些问题
// 开发中需要增添额外代å码，来实现nominal类型系统，允许基于类型的名称而不是其结构进行类型检查

interface A {
    propA: string
}
interface B {
    propA: string
}
let a:A = {
    propA: 'bart'
}
let b:B = {
    propA: 'lucy'
}
a = b // 1.此处的赋值是成立的，因为ts比较时只会比较属性名以及对应的数据类型

// 2.还有一种特殊情况
// export type CNY = Nonimal<number, 'CNY'>
// export type USD = Nonimal<number, 'USD'>
// const addCNY = (source:CNY,target:CNY) => {
//     return source+target
// }
// const CNYCount = 100 as CNY
// const USDCount = 100 as USD
// console.log(addCNY(CNYCount,CNYCount))
// console.log(addCNY(CNYCount,USDCount))
// 此处会打印输出200，但显然这种情况是不合理的

// 使用structre来模拟nonimal可以解决这种问题
export declare class TaggedProtector<Tag extends string> {
    protected __tag: Tag
}
export type Nonimal<T,Tag extends string> = T & TaggedProtector<Tag> // 交叉类型
// 用于在 TypeScript 中创建一个名义类型系统，允许基于类型的名称而不是其结构进行类型检查。

export type CNY = Nonimal<number, 'CNY'>
export type USD = Nonimal<number, 'USD'>
const addCNY = (source:CNY,target:CNY) => {
    return source+target
}
const CNYCount = 100 as CNY
const USDCount = 100 as USD
console.log(addCNY(CNYCount,CNYCount))
console.log(addCNY(CNYCount,USDCount))
