var Node = function (data) {
    this.value = data
    this.next = null
}

var List = function () {
    this.head = null
    this.tail = nulls
    this.amount = 0
}

List.prototype.add = function (data) {
    var node = new Node(data)
    if(!this.head) {
        this.head = node
        this.tail = node
    } else {
        this.tail.next = node
        this.tail = node
    }
    this.amount++
}

List.prototype.contains = function (value) {
    var n = this.head
    while(n && n.value != value) {
        n = n.next
    }
    if(!n) {
        return false
    }
    return true
}

List.prototype.delete = function (value) {
    var n = this.head
    if(!n) {
        return false
    }

    if(n.value == value) {
        if(this.head == this.tail) {
            delete this.tail
            delete this.head
            this.amount--
        } else {
            this.head = this.head.next
        }
        this.amount--
        return true
    }

    while(n.next && n.next.value != value){
        n = n.next
    }
    
    if(n.next) {        
        if(n.next == this.tail) {
            this.tail = n
        }
        n.next = n.next.next
        
        this.amount--
        return true
    }

    return false

}

List.prototype.traverse = function (callback) {
    var n = this.head
    while(n) {
        callback(n)
        n = n.next
    }
}

List.prototype.reverseTraverse = function (callback) {
    if(this.tail) {
        var curr = this.tail
        while (curr != this.head) {
            var prev = this.head
            while(prev.next != curr) {
                prev = prev.next
            }
            callback(curr)
            curr = prev
        }
        callback(curr)
    }
}

var list = new List()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.delete(5)

var call = function (node){
   console.log(node.value)
}

list.reverseTraverse(call)
console.log(list)