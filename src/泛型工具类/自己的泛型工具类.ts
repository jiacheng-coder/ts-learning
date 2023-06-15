import { IPerson } from "../interfaces/IPerson";

// Partial<T>: 将T中所有属性变为可选项
type TPatrial = Partial<IPerson>
type MyPartial<T> = {
  [K in keyof T]?:T[K]
}
type TMyPatrial = Partial<IPerson>
// Required: 将T中所有属性变为必选项
type TRequired = Required<IPerson>
type MyRequired<T> = {
  [K in keyof T]-?:T[K]
}
type TMyRequired = Partial<IPerson>
// Readonly: 将T中所有属性变为只读项
type TReadonly = Readonly<IPerson>
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
type TMyReadonly = Readonly<IPerson>


// Pick<T,U>: 从类型T中提取出U中的K
type TPick = Pick<IPerson, 'name'|'salary'>;
type MyPick<T,K extends keyof T> = { // 使用extends进行泛型约束，保证第二个参数（联合类型）肯定包含在T的keys里
  [P in K]:T[P] // 通过映射对象类型，约束每一个属性成员
}
type TMyPick = MyPick<IPerson, 'name'|'salary'>;
// Omit<T,U>: 从类型T中删除U中的K, 和Pick相对应
type TOmit = Omit<IPerson,"name"|"salary"|"something">
type MyOmit<T,U extends keyof T> = Pick<T, Exclude<keyof T,U>> //原生Omit泛型没有用U extends keyof T来实现，此处这么实现是为了保证U这个联合类型一定能在T的keys里找到，更规范
type TMyOmit = MyOmit<IPerson,"name"|"salary">
// Exclude: 从类型T中剔除所有可以赋值给类型U的类型
type MyExclude<T, U> = T extends U ? never : T
type TExclude = Exclude<"a"|"b","a">
type TMyExclude = MyExclude<"a"|"b","a">
// Extract: 从类型T中提取出所有可以赋值给类型U的类型
type MyExtract<T, U> = T extends U ?  T : never;
type TMyExtract = MyExtract<"a"|"b","a">

// Record<Keys,Type>: 构造一个对象类型，其属性键为键，其属性值为 Type。用于将一个类型的属性映射到另一个类型
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
