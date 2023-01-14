

// const restExample = (a, b, c, ...rest) => {
//     console.log(a,b, c, rest)
//   }
  
//   console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10))


// const spreadExample = ({ a, b }) => {
//     console.log(a, b)
//   }
  
//   const obj = { a: 1, b: 2 }
//   console.log(spreadExample(obj))


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const spreadExample2 = ([first, second, ...rest]) => {
//   console.log(first, second, rest)
// }

// console.log(spreadExample2(array))

// // rest with spread
// console.log(spreadExample2([...array, 11, 12, 13]))

// const spreadExample = ({ a: aaloo, b: bhaaloo }) => {
//     // destructuring
//     // console.log(a,b)
//     console.log(aaloo, bhaaloo)
//   }
  
//   const obj = { a: 1, b: 2 }
//   spreadExample(obj)

  const spreadExample = ({ b: bhaaloo, a: aaloo }) => {
    console.log(aaloo, bhaaloo)
  }
  
  const obj = { a: 1, b: 2 }
  spreadExample(obj)