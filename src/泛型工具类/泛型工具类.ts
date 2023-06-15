// 1.Partial：将传入的属性变为可选项
interface IPeople {
  title: string;
  name: string;
}

type MyPartial<T> = {
  [P in keyof T]?:T[P] 
}

const people: MyPartial<IPeople> = {
  title: 'Delete inactive users'
};

// 2.Readonly
interface Person {
  name: string;
  age: number;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

const p: MyReadonly<Person> = {
    name: '张三',
    age: 22
}

// p.name = '李四'; // 无法分配到 "name" ，因为它是只读属性

// 3.Required
interface ICar {
  weight?:number,
  height?:number
}
type MyRequired<T> = {
  [P in keyof T]-?:T[P]
}
const car:Required<ICar> = {
  weight: 30,
  height: 20
}



