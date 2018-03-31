var DoubleNode = function (data) {
    this.prev = null
    this.value = data 
    this.next = null
}

var DoubleList = function () {
    this.head = null
    this.tail = null
    this.amount = 0
}

DoubleList.prototype.add = function(data) {
    var node = new DoubleNode(data)

    if (!this.head) {
        this.head = node
        this.tail = node
    } else {
        node.prev = this.tail
        this.tail.next = node 
        this.tail = node
    }
    this.amount++
}

DoubleList.prototype.contains = function(value) {
  var n = this.head;
  while (n && n.value != value) {
    n = n.next;
  }
  if (!n) {
    return false;
  }
  return true;
};

DoubleList.prototype.delete = function (value) {
    if(!this.head) {
        return false
    }

    if(value == this.head.value) {
        if(this.head == this.tail) {
            delete this.head
            delete this.tail
        } else {
            this.head = this.head.next
            this.head.prev = null 
        }
        this.amount--
        return true
    }

    var n = this.head.next
    while(n && value != n.value) {
        n = n.next
    }
    if(n == this.tail){
        this.tail = this.tail.prev
        delete this.tail.next
        this.amount--
        return true
    } else if(n) {
        n.prev.next = n.next
        n.next.prev = n.prev
        this.amount--
        return true
    }
}

DoubleList.prototype.traverse = function (callback) {
    var node = this.head
    while(node) {
        callback(node)
        node = node.next
    }
}

DoubleList.prototype.reverseTraverse = function (callback) {
    var node = this.tail
    while(node) {
        callback(node)
        node = node.prev
    }
}


var list = new DoubleList()

list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)

var call = function (node) {
    console.log(node.value)
}
list.reverseTraverse(call)
console.log(list);