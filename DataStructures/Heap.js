class Heap {
    constructor() {
        this._heap = new Array(1)
    }
    get size() {
        return this._heap.length - 1;
    }
    get root(){
        return this._heap.length > 0 ? this._heap[0] : null
    }
    insert(item) {
        if (!this.size) {
            this._heap.push(item)
        } else {
            this._heap = this._heapify(this._heap.concat(item), this.size + 1)
        }
    }
    sort() {
        let count = this._heap.length - 1
        let list = this._heap
        while(count > 1) {
            this._swap(list, 1, count)
            count--
            this._down(list, 1, count)
        }
        console.log('sorted', list.slice(1))
        return list.slice(1)
    }
    _heapify(list, index) {
        while(Math.floor(index / 2) > 0 && list[index] > list[Math.floor(index / 2)]) {
            this._swap(list, index, Math.floor(index / 2))
            index = Math.floor(index / 2)
        }
        return list
    }
    _down(list, i, count) {
        // from top to down
        // from non-leaf node
        while (true) {
            let maxPos = i
            if (i*2 <= count && list[i] < list[i*2]) {
                maxPos = i*2
            }
            if (i*2 + 1 <= count && list[maxPos] < list[i*2 + 1]) {
                maxPos = i*2+1
            }
            if (i === maxPos) {
                break
            }
            this._swap(list, i, maxPos)
            i = maxPos
        }
    }
    _swap(list, a, b) {
        const temp = list[a]
        list[a] = list[b]
        list[b] = temp
    }
}

const heap = new Heap()

heap.insert(0)
heap.insert(1)
heap.insert(2)
heap.insert(-1)
heap.insert(9)
console.log(heap.sort())

