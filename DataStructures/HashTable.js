const table = Symbol('table')
const resize = Symbol('resize')
class HashTable {
    constructor (len) {
        this[table] = new Array(len || 10)
        this.count = 0
    }

    hashStringToInt(str, tableSize) {
        let hash = 17
        for (let i = 0; i< str.length; i++) {
            // charCodeAt(): the UTF-16 code unit
            hash = (hash * str.charCodeAt(i)) % tableSize
        }
        return hash
    }

    [resize]() {
        const newTable = new Array(this[table].length * 2)
        this[table].forEach(array => {
            array && array.forEach(([key, value]) => {
                this.insertItem(key, value, newTable)
            })
        })
        this[table] = newTable
    }
    insertItem(key, value, table) {
        const idx = this.hashStringToInt(key, table.length)
        if (table[idx]) {
            const list = table[idx]
            const node = list.find(([k, v]) => k === key)
            if (node) {
                node[1] = value
            } else {
                list.push([key, value])
            }
        } else {
            table[idx] = [[key, value]]
        }
    }

    setItem(key, value){
        this.count++
        const loadFactor = this.count / this[table].length
        if (loadFactor > 0.8) {
            this[resize]()
        }
        this.insertItem(key, value, this[table])
    }
    getItem(key){
        const idx = this.hashStringToInt(key, this[table].length)
        if (!this[table][idx]) {
            return null
        }
        const node = this[table][idx].find(([k, v]) => k === key)
        return node && node.length ? node[1] : null
    }
}

const myTable = new HashTable(3)
myTable.setItem('firstName', 'lala')
console.log(myTable.getItem('firstName'))
myTable.setItem('lastName', 'land')
myTable.setItem('age', '19')
myTable.setItem('birth', '1/2/3')
myTable.setItem('firstName', 'lalala')
console.log(myTable.getItem('firstName'))
console.log(myTable.getItem('lastName'))
console.log(myTable.getItem('age'))
console.log(myTable.getItem('birth'))
console.log(myTable.table) // undefined
