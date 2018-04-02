var BstNode = function(data) {
    this.value = data;
    this.leftSubTree = null
    this.rightSubTree = null
}

var BSTree = function () {
    this.rootNode = null
    this.length = 0
}

BSTree.prototype.insertNode = function(current, value) {
    var node = new BstNode(value)
    if(value < current.value) {
        if(!current.leftSubTree) {
            current.leftSubTree = node
        } else {
            this.insertNode(current.leftSubTree, value)
        }
    } else {
        if(!current.rightSubTree) {
            current.rightSubTree = node
        } else {
            this.insertNode(current.rightSubTree, value)
        }
    }
}

BSTree.prototype.add = function(value) {
    if(!this.rootNode) {
        this.rootNode = new BstNode(value)
    } else {
        this.insertNode(this.rootNode, value)
    }
    this.length++ 
}

BSTree.prototype.contains = function(root, value) {
    if(!root) {
        return false
    }

    if(root.value == value) {
        return true
    } else if(value < root.value) {
        return this.contains(root.leftSubTree, value)
    } else {
        return this.contains(root.rightSubTree, value);
    }
}

BSTree.prototype.findNode = function(root, value) {
    if(!root) {
        return null
    }

    if(root.value == value) {
        return root
    } else if(value < root.value) {
        return this.findNode(root.leftSubTree, value)
    } else {
        return this.findNode(root.rightSubTree, value);
    }
}

BSTree.prototype.findParent = function (root, value) { 
    if(root.value == value) {
        return 
    }

    if (value < root.value) {
        if (!root.leftSubTree) {
            return 
        } else if (root.leftSubTree.value == value) {
            return root;
        } else {
            return this.findParent(root.leftSubTree, value);
        }
    } else {
        if (!root.rightSubTree) {
            return
        } else if (root.rightSubTree.value == value) {
            return root;
        } else {
            return this.findParent(root.rightSubTree, value);
        }
    }
}
    
BSTree.prototype.findMin = function(root) {
    if(!root.leftSubTree) {
        return root.value
    }
    this.findMin(root.leftSubTree)
}

BSTree.prototype.findMax = function(value) {
    if(!root.rightSubTree) {
        return root.value
    }
    this.findMax(root.rightSubTree)  
}

BSTree.prototype.delete = function(value) {
    var nodeToRemove = this.findNode(this.rootNode, value)
    var parent = this.findParent(this.rootNode, value)
    
    if(!nodeToRemove) {
        return false
    }

    

    if (this.length == 1) {
      delete this.rootNode;
      this.length--
      return true
    } else if (!nodeToRemove.leftSubTree && !nodeToRemove.rightSubTree) {
      if (nodeToRemove.value < parent.value) {
        delete parent.leftSubTree;
      } else {
        delete parent.rightSubTree;
      }
    } else if (!nodeToRemove.leftSubTree && nodeToRemove.rightSubTree) {
      if (nodeToRemove.value < parent.value) {
        parent.leftSubTree = nodeToRemove.rightSubTree;
      } else {
        parent.rightSubTree = nodeToRemove.rightSubTree;
      }
    } else if (nodeToRemove.leftSubTree && !nodeToRemove.rightSubTree) {
      if (nodeToRemove.value < parent.value) {
        parent.leftSubTree = nodeToRemove.leftSubTree;
      } else {
        parent.rightSubTree = nodeToRemove.leftSubTree;
      }
    } else {
        var largestValue = nodeToRemove.rightSubTree
        while(largestValue.rightSubTree) {
            largestValue = largestValue.rightSubTree
        }
        var parent = this.findParent(this.rootNode, largestValue.value);
        delete parent.rightSubTree
        nodeToRemove.value = largestValue.value
    }
    this.length--
    return true
}

var tree = new BSTree()

tree.add(23)
tree.add(14)
tree.add(31)
tree.add(7)
tree.add(9)

