
let obj;

let  city = "Уфа";

function func (obj, city) {
  obj = { name: "Ivan",
          age: 25,
          city: "Уфа"};
  
 console.log(obj.hasOwnProperty("city"));
}

func()