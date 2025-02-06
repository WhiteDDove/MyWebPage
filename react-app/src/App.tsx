import Mesaj from "./mesaj";
// import MyButton from "./button";

function BasicType() {
let persons =[{nume: "andrei",varsta : 24},{nume: "Maria",varta: 32}];
let nume = ["radu", "maria", "ion", "vasile", "george"];

console.log(persons[0].nume);
let persona3 = {
  nume: "Florin",
  varsta : 21
}

function atribuire (listPersons: array, listNames: array) {
  let nr = listNames.length;
  let varstaNr = 23;
  for (let i = 0; i<nr; i++)
    listPersons.push({nume: listNames[i],varsta: varstaNr++});
}

atribuire(persons,nume);
console.log(persons[4])
}

export default function App() {
  BasicType();
  return (
    <>
  <div>{}</div>
 
  </>
  )
}


// export default App;











// function Afisare():void {
//   console.log("salutare! Ai apelat functia afisare");
// }

// function MyButton({}) {
//   return(
//       <button onClick = {Afisare}>sunt un buton</button>
//   );
// }
// function ImgElem() {
//   return (
//     // <div src = {}></div>
//   )
// }

// function Prod(Nume:string, linkImg:string, cantitate: number, id:number) {
//   this.numeProdus = Nume;
//   this.linkImg = linkImg;
//   this.cantitate = cantitate;
//   this.id = id;
// }

// const produs = new Prod("ulei", " ", 98,1998);

// class Person {
//   name: "";
// }

// const person = new Person();
// person.name = "Jane";

// function MyEelement() {

//   return (
//     <>
//       <ImgElem>
//         <title></title>
//         <MyButton/>
//       </ImgElem>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//   <MyEelement />
//   </>
//   )
// }


// export default App;