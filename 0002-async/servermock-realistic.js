const howManyCandlesCallback = (dayNumber, callback) => {
    return setTimeout(() => {
        if ( dayNumber < 1 ) {
            return callback ('day cannot be smaller than 1');
        }
    
        if ( dayNumber > 8 ) {
            return callback ('No Isro Chag for Hannukah!');
        }
    
        return callback ( null, dayNumber + 1 );
    }, (Math.random() + 1 ) * 1000); 
};

const howManyCandlePromise = (i) => {
    return new Promise((resolve, reject) => {
        return howManyCandlesCallback(i, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

promises = []
for (let i = 1; i < 9; i++) {
    promises.push(howManyCandlePromise(i))
}

Promise.all(promises)
    .then(results => console.log(results.reduce((a, b) => a + b)))
    .catch(console.log)

const calc = async() => {
    try {
        const results = await Promise.all(promises)
        console.log(results.reduce((a, b) => a + b, 0))
    } catch(err) {
        console.log(err)
    }
}

calc()