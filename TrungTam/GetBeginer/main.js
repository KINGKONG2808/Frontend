console.log("Hello bitch :))");
console.error("Who the hell are you?");
//var la bien luu dong, kieu cua no duoc xac dinh bang gia tri dc gan ben phai
var firstname = "k2"; //string
var age = 21; //int
var money = 10.100; //float
var gender = true; //boonlean true(boy) - false(girl)
//define method
function println(message) {
    console.log(message);
}

function sum(a, b) {
    //kiem tra tham so a va b co phai la kieu so khong?
    println(typeof(a));
    println(typeof(b));
    if (typeof(a) != "number" || typeof(b) != "number") {
        console.error("Data error.");
        return 0;
    }
    return a + b;
}
//call method
println("ha lo :)))");
println(sum(3, 5));

function variableByLet() {
    let a = 12;
    println("variableByLet = " + a);

    function variableByLet2() {
        let a = 13;
        println("variableByLet2 = " + a);
    }
    variableByLet2();
    println("variableByLet = " + a)
}
variableByLet();

//define object
var Person = {
    firstName: "",
    lastName: "",
    fullName: function() {
        return Person.firstName + " " + Person.lastName;
    }
}
Person.firstName = "Vu Van";
Person.lastName = "Hung";
println(Person.fullName());

//dinh nghia class trong js
function Car(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.getInfor = function() {
        console.log(this.name + " " + this.model + " " + this.price);
    }
}

var x5 = new Car("X5", "2018", "2000$");
x5.getInfor();
var camry = new Car("Camry", "2019", "2500$");
camry.getInfor();

//mo rong class san co
Car.prototype.nationality = "English";
console.log(x5.nationality + " & " + camry.nationality);

//thao tac voi DOM
function subscrible() {
    //alert("Del cho submit :))))"); // hien thi message thong bao
    alert(document.getElementById("txtSubscrible").value);
}

function goBack() {
    window.history.back();
}

function setSubscrible(email) {
    //window.document.getElementById("txtSubscrible").value = email;
    $("#txtSubscrible").val(email);
}

function setDvqc(_dvqc) {
    //document.getElementById("dvqc").innerHTML = "<b>" + _dvqc + "</b>"
    $("#dvqc").html("<b>" + _dvqc + "</b>");
}

//higher-order function
function repeat(n, action) {
    for (let i = 0; i < n; i++) action(i);
}
repeat(3, console.log);

//two order function
function greaterThan(n) {
    return function(m) {
        return m > n;
    }
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
//or can use: console.log(greaterThan(10)(11));

$(document).ready(function() {
    $('#btn_totop').click(function() {
        window.scrollTo(0, 0);
    })
})

//filter
const people = [{
        "name": "jame",
        "age": "20",
        "address": "LA"
    },
    {
        "name": "hana",
        "age": "21",
        "address": "US"
    },
    {
        "name": "john",
        "age": "19",
        "address": "EN"
    },
    {
        "name": "julia",
        "age": "24",
        "address": "RUS"
    },
    {
        "name": "tony",
        "age": "27",
        "address": "USA"
    },
]

// we has two way to use filter - that just a loop same with c++ or java to help your code faster and more clear. alright... that all!!!
// this way use for-loop
// let infor_age = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age > 19) {
//         infor_age.push(people[i]);
//     }
// }
// console.table(infor_age);

// how about method filter - => may be this is syntax when use method of filter and i don't know any more about that symbol :))))
let infor_age = people.filter((infor) => {
    return infor.age > 19;
})
console.table(infor_age);