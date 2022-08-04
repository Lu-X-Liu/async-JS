const getTodos = (resource) => {
    const request = new XMLHttpRequest();

    return new Promise ((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4  && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        })

    // 'https://jsonplaceholder.typicode.com/todos/'

        request.open('GET', resource);
        request.send();         
    })  
};

getTodos('xiao-lu-liu.json')
    .then(data => {
        console.log('promist 1 resolved: ', data);
        return getTodos('lu.json');
    }).then(data => {
        console.log('promist 2 resolved: ', data);
        return getTodos('me.json');
    }).then(data => {
        console.log('promist 3 resolved: ', data);
    })
    .catch(error => console.log(error));

//promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve('some data');
//         //reject('some error');
//     });
// }

// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })

// getSomething().then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// })

// console.log(1);
// console.log(2);
// //callback hell
// getTodos('xiao-lu-liu.json' ,(err, data) => {
//     console.log(data);
//     getTodos('lu.json', (err, data) => {
//         console.log(data); 
//         getTodos('me.json', (err, data) => {
//             console.log(data);
//         })
//     })
// });

// console.log(3);
// console.log(4);