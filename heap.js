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

var heap = new Heap()