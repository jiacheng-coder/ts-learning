// extends意味着什么，底层类型逐级extends上层类型，进而形成链条

// 类型系统的层级关系：构造一条extends链

// 从层级关系看类型断言的具体原理
class Base {
  name!: string
}
class DerivedBar extends Base {
  bar!: string
}
class DerivedBaz extends Base {
  baz!: string
}

// 父类 >>> 子类的类型断言 类型系统向下转型
const bar = new Base() as DerivedBar
bar.name = '23'
bar.bar = '45'

// 子类 >>> 父类
// as 只用于转换存在子类型关系的两个类型
// extends通过结构化类型系统判断得到的兼容关系
// const b = new DerivedBaz() as DerivedBar
const b = new DerivedBaz() as Base as DerivedBar // 先向上转换，再向下转型

// 此外，还有一些其他类型系统知识，与类型编程相关性小，但同样重要
// - 协变和逆变
// - 类型控制流分析
// - 上下文类型
