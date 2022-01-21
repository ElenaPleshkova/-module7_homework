let obj;

function func (obj) {
  obj = { name: "Ivan",
          age: 25};
  
  for (let key in obj) {
    if (obj.hasOwnProperty (key)) {
      console.log (key);
      console.log (obj[key]);
    }
  }
}

func()