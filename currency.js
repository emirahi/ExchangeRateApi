

class Currency {

    static translate(from, to) {
        return new Promise(function(resolve,reject) {
            fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                    "x-rapidapi-key": "7807250710mshbdb2b550878c718p19d3d2jsn8c4248fedac6"
                }
            }).then(r => resolve(r.text()))
            .catch(r => reject(r.text()))
        })
    }
}

