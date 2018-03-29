var sLinkedList = function() {
    this.list = []
    
    this.getList = () => {
        return this.list
    }

    this.add = (val) => {
        if(!this.list.length) {
            let el = {
                head: null,
                tail: null,
                value: val
            }
            this.list.push(el)
        } else {
            let prevNode = this.list.length - 1
            let nextNode = this.list.length
            delete this.list[prevNode].tail
            this.list[prevNode].link = nextNode
            let el = {
                value: val,
                tail:null
            } 
            this.list.push(el)
        }
    }
}

var list = new sLinkedList();
list.add(1);
list.add(3);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9105);
list.add(25);

console.log(list.getList())