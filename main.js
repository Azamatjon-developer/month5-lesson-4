// Qoshimcha bajarilgan tasklar
// let arr =  [
//     {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//     },
//     {
//         title: "Baxtiyor oila",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf Raximatulloh",
//         read : true
//     },
//     {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true
//     },
//     {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true
//     },
//     ]

//     arr.forEach(item => {
//         if (item.read) {
//             console.log(` o'qilgan kitoblar ${item.title}`);
//         }else{
//             console.log(`  oqilmagan kitoblar  ${item.title} `);
//         }
//     })

// 51 task starts

// function findMiddleValue () {
//     let arr = [1,2,3,4,6,5,4,3,9]
//     let count = arr.length

//     if (count % 2 !== 0){
//         const middleNumber = (count / 2)
//         return middleNumber
//     }else{
//         const middleIndex = count / 2
//         return middleIndex
// }
// }

// console.log(findMiddleValue())

// 51 task finished

// 52 task starts 

// let products = [
//     {id: 6,name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
    
//     ];

//     const filteredArray = products.filter((Element) => {
//         products.id !== 4
//     })
// console.log(filteredArray);

// 52 task finished 


// 53 task starts 

// function isOnlyString (params) {
//     return /^[a-zA-Z]+$/.test(params);
// }

// console.log(isOnlyString("Aziz"));
// 53 task finished 

// 54 task stars

// let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const result = {}

// animals.forEach((item) => {
//     if (result[item]) {
//         result[item]++
//     }else{
//         result[item] = 1
//     }
// })
// console.log(result); 

// 54 task finished 

// 55 task starts 

// function wordLengths(str) {
//     return str.split(' ').map(word => word.length);
// }

// console.log(wordLengths("Azamat Ergashev")); 
// 55 task finished 


// 56 task stars 

// function findSpace (str) {
//     return str.split(' ').some(item => item  == " ")

// }
// console.log(findSpace("Azamatergashev"));
// 56 tasks finished 


// 57 task starts 

// function str (params) {

//     return Object.entries(params).map(([key, value]) => key + value)
// }
// console.log(str({a: 12, b: 13, c:14, d:15}))

// 57 task finished 