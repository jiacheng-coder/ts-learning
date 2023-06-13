type Without<T,U> = { [K in Exclude<keyof T,keyof U>] ?: never}

type XOR<T,U> = Without<T,U> & Without<U,T>

interface Foo {
  foo: string
}

interface Bar {
  bar: string
}

type FooOrBar = XOR<Foo,Bar>

const fooOrBar:FooOrBar = {
  foo: string
}