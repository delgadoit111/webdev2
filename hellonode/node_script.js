class A {
    A()  {console.log("constructor") }
    getMessage(){
        console.log("Hello Node")
    }
}

const a = new A()
a.getMessage()