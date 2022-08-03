const getTodos = (resource ,cb) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4  && request.status === 200) {
            const data = JSON.parse(request.responseText)
            cb(undefined, data);
        } else if (request.readyState === 4) {
            cb('could not fetch the data', undefined);
        }
    })

// 'https://jsonplaceholder.typicode.com/todos/'

    request.open('GET', resource);
    request.send();    
};

// console.log(1);
// console.log(2);

getTodos('xiao-lu-liu.json' ,(err, data) => {
    // console.log('callback fired');
    // if(err) {
    //     console.log(err);
    // } else {
    //     console.log(data);
    // }
    console.log(data);
    getTodos('lu.json', (err, data) => {
        console.log(data); 
        getTodos('me.json', (err, data) => {
            console.log(data);
        })
    })
});

// console.log(3);
// console.log(4);