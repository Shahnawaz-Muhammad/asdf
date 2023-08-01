import React from 'react'

const UnionType = () => {

  // ----------- concate -----------------//
  type cardNumber = {
    cardnumber?:string
  }

  type cardDate = {
    cardDate:string
  }

  type cardDetails = cardNumber & cardDate & {
    cvv: number
  }

  const date: cardDetails =  {
    cardDate: "90",
    cvv: 90
  }
  console.log(date)
  // ----------- concate -----------------//


  // -------------------- Eg 2 -----------------//
    type User = { 
      name : string;
      id: number
    }

    type Admin = {
      username: string
      id:number
    }

    const hamza : User | Admin = {
      username: "hamza",
      id: 3
    }

    console.log(hamza)
// -------------------- Eg 2 -----------------//

// ---------------- Eg 3 --------------------//
// Using uniontypes in functions
function getDbId (id:number | string){
  //  id.toLowerCase()          => gives error
  if(typeof id === "string"){
    console.log(id.toLocaleLowerCase())
  }
  else {console.log(id +3)}
  }

  getDbId("HELLO")
  // console.log(idVal)

// ---------------- Eg 3 --------------------//
// Union types in array
const data : number [] = [1,2,4]
const data1 : string [] = ["hamza","farhan","fahad"]
const data2 : (number | string)[] = ["rehan", 2, "shani"]

console.log(`data = ${data},
data1 = ${data1},
data2 = ${data2}`)
// ---------------- Eg 3 --------------------//

  return (
    <div>Type</div>
  )
}

export default UnionType