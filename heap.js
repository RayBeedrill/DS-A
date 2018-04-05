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

Heap.prototype.findIndex = function(value) {
    if(!this.values.length) {
        return -1
    }

    for(i = 0; i < this.values.length; i++) {
        if(this.values[i] == value) {
            return i
        }
    }
}

Heap.prototype.delete = function(value) {
    var index = this.findIndex(value)

    if(index < 0) {
        return false
    }

    var count = this.values.length - 1
    this.values[index] = this.values[count]
    var left = 2 * index + 1
    var right = 2 * index + 2 
    while(left < count && this.values[index] > this.values[left] || this.values[index] > this.values[right]) {
        if (this.values[left] < this.values[right]) {
            var a  = this.values[index]
            var b = this.values[left]
            this.values[index] = b
            this.values[left] = a
            index = left
        } else {
            var a = this.values[index];
            var b = this.values[right];
            this.values[index] = b;
            this.values[right] = a;
            index = right;
        }
    }
    return true
}

var heap = new Heap()

heap.add(1)
heap.add(3)
heap.add(9)
heap.add(12)
heap.add(13)