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
