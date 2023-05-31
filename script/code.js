// let people = [
//    {name : 'Thotyelwa', surname : 'Mpongwana', age: '22'},
//    {name : 'Siyamanga', surname : 'Zweni', age: '22'},
//    {name : 'Kamvelihle', surname: 'Sikalana', age:'20'},
//    {name : 'Aphelele', surname: 'Joyi', age: '21'},
//    {name : 'Xolelwa', surname: 'Hlaletyeni', age: '25'},
//    {name : 'Sisipho', surname : 'Bobo', age: '23'},
//    {name : 'Asanda', surname : 'Qhamfu', age: '23'},
//    {name : 'Sandisiwe', surname: 'Mantshinga', age:'18'},
//    {name : 'Zandisiwe', surname: 'Mkaphuza', age: '24'},
// ];
// console.log(people);
let tableContainer = document.getElementById('table-container');
let tableData = [
      
   { id:  1,
    name : 'Headphones',
    price : 'R600',
    image : 'https://i.postimg.cc/L6bjypLq/headphones2.webp',
   },

    {id:  2,
    name : 'Console',
    price : 'R700',
    image : 'https://i.postimg.cc/4Nqh61RV/console.jpg'
    },
    
    { id:  3,
        name : 'PS4',
        price : 'R100',
        image : 'https://i.postimg.cc/vmQ8f1T5/53308694-800-800.png',
       }
    



];
tableData.forEach( (item) => {
    tableContainer.innerHTML +=
    `
    <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><img src="${item.image}" alt ="image" loading="lazy" </td>
    </tr>
    `
})