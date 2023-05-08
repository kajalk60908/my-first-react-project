class Name {
    constructor(name,age) {
        this.name = name;
        this.age= age;

    }
    greet (){
        console.log(this.name,this.age)
    }
}
const kajal = new Name("kajal",23)
kajal.greet()

hello = () => {
    return "Hi kajal";
}
const mylist = ['carrot',  'onion', 'potato']
const mylist1 = mylist.map((item) => '+' + item + '+')
console.log(mylist1)


