

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]

class Factored {
    constructor(value, factors) {
        this.factors = factors
        this.value = value
    }
}

let arr = [(new Factored(1, [1]))]
for (let k = 0; k < (primes.length); k++) {
    for (let t = 0; t < primes.length; t++) {
        for (let f = 0; f < arr.length; f++) {
            let arrspreadclone = [...arr[f].factors]
            if (!arrspreadclone.includes(primes[t])) {
                arrspreadclone.push(primes[t])
                let bump = new Factored(arr[f].value * primes[t], arrspreadclone)
                let wet = 0
                for (let g = 0; g < arr.length; g++) {
                    if (arr[g].value == bump.value) {
                        wet = 1
                    }
                }
                if (wet == 0) {
                    arr.push(bump)
                }
            } else {
                break
            }
        }
    }
}

arr.sort((a, b) => (a.value > b.value ? 1 : -1))

arr = arr.filter(a => !primes.includes(a.value))


console.log(arr)