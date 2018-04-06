var Heap = function() {
    this.values = []
}

Heap.prototype.add = function (value) {
    this.values.push(value)
    this.minHeapify()
}

Heap.prototype.minHeapify = function () {
    for(var i = this.values.length - 1; i > 0 && this.values[i] < this.values[Math.floor((i - 1) / 2)]; i = Math.floor((i-1) / 2 )) {
        var a = this.values[i]
        var b = this.values[Math.floor((i - 1) / 2)];
        this.values[i] = b;
        this.values[Math.floor((i - 1) / 2)] = a;
    }
}


Heap.prototype.delete = function() {
    this.values.shift()
    this.minHeapify()
}

Heap.prototype.contains = function (value) {
    for(var i = 0; i < this.values.length; i++){
        if(this.values[i] == value) {
            return true
        }
    }
    return false
}

var heap = new Heap()

heap.add(1)
heap.add(3)
heap.add(9)
heap.add(12)
heap.add(13)