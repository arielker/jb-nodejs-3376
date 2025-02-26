'use strict';
const promisify = async (fun) => {
    return (i) => {
        return new Promise((resolve, reject) => {
            fun(i, (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    };
};