var QueueList = function() {
    this.list = []
}

QueueList.prototype.enqueue = function (value) {
    this.list.push(value)
}

QueueList.prototype.dequeue = function () {
    return this.list.shift()
}

QueueList.prototype.peek = function () {
    return this.list[0]
}