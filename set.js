var SetList = function() {
    this.list = []
}

SetList.prototype.add = function(value) {
    if(this.list.indexOf(value) == -1) {
        this.list.push(value)
        return true
    }
        return false
} 

SetList.prototype.delete = function(value) {
    var num = this.list.indexOf(value)
    if(num != -1) {
        this.list.splice(num,1)
        return true
    }
        return false
}

SetList.prototype.contains = function(value) {
    return this.list.indexOf(value)
}

SetList.prototype.union = function(set2) {
    var union = new SetList()
    for(let item in this.list) {
        union.add(this.list[item])
    }

    if(set2.list.length) {
        for (let item in set2.list) {
            union.add(set2.list[item])    
        } 
    }
    return union
}

SetList.prototype.intersection = function (set2) {
    var intersection = new SetList()
    var smallList = null
    if(this.list.length < set2.list.length) {
        smallList = this.list
    } else {
        smallList = set2.list
    }
    for(let item in smallList) {
        var contains1 = this.contains(smallList[item])
        var contains2 = set2.contains(smallList[item])
        if(contains1 != -1 && contains2 != -1) {
            intersection.add(smallList[item])
        }
    }
    return intersection
}

var list = new SetList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)

var list2 = new SetList()
list2.add(4)
list2.add(3)
list2.add(6)
list2.add(7)
