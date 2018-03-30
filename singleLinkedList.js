var Node = function(data) {
    this.value = data
    this.next = null
}

var List = function() {
    this.head = null
    this.tail = null
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
    for(let i = 0; i < this.amount && n.value != value; i++){
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
        if(!this.head.next.next && this.head.value == this.tail.value) {
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
        if(!n.next.next) {
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
        n.value = callback(n.value)
        n = n.next
    }
}

List.prototype.reverseTraverse = function (callback) {

}

var linkList = new List()
linkList.add(1)
linkList.add(2)
linkList.add(3)
linkList.add(4)
linkList.add(4)
linkList.add(5)

linkList.delete(4)
linkList.traverse((node)=>{
    return node * 2
})
console.log(linkList)

