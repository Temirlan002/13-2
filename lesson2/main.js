// // let arr = [1,2, 3, 5, ]
// //
// // console.log(arr[3])
// //
// // const mass = ["fd", 'fd', "fdf", "fdf", "fgtg"]
// // console.log(mass[4])
//
// let obj = {
//     username: 'john',
//     followers: [
//         {
//             username: 'JOhn'
//         },
//         {
//             username: 'Jake',
//             followers: [
//                 {
//                     username: 'jack'
//                 },
//                 {
//                     username: 'jack'
//                 },
//                 {
//                     username: 'jack'
//                 },
//             ]
//         }
//     ]
// }
//
// console.log(obj.followers[1].followers[2].username)


const array = [
    {
        username: 'Jack',
        full_name: 'Jack Kyrgyz'
    },
    {
        username: 'Joe',
        full_name: 'Joe Kyrgyz'
    },
    {
        username: 'John',
        full_name: 'John Kyrgyz'
    },
]

// console.log(array[0].username, array[0].full_name)
// console.log(array[1].username, array[1].full_name)
// console.log(array[0].username, array[0].full_name)
// console.log(array[0].username, array[0].full_name)

// инкрементация

// let i = 0
// console.log(i)
// i++
// i++
// i++ // i = i + 1
// console.log(i)

// for(let i = 0; i < array.length; i++){
//     if(i === 2){
//         break;
//     }
//     console.log(array[i])
// }
// for(let user of array){ // элементы
//     console.log(user)
// }
//
// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key9: 'b9',
//     key10: 'b10',
// }
//
// console.log(obj.key1);
//
// for(let key in obj){
//     console.log(obj[key])
// }

// let i = 0;
//
// while(i < 5){
//     console.log("Hello")
//     i++
// }

const users = [
    {
        username: 'jack',
        salary: 500
    },
    {
        username: 'joe',
        salary: 5000
    },
    {
        username: 'vito',
        salary: 10000
    }
];
console.log(users)

const destructUsers = users.map(user => ({
    name: user.username,
    salary: user.salary
}));
console.log(destructUsers)

// for(let user of users){
//     destructUsers.push({
//         name: user.username,
//         salary: user.salary
//     })
// }
// console.log(destructUsers)

// const filteredUsers = users.filter(user => user.salary > 500);
//
// console.log(filteredUsers)
// for(let user of users){
//     if(user.salary > 500){
//         filteredUsers.push(user)
//     }
// }
//
// console.log(filteredUsers);