var avlNode = function(data) {
  this.value = data;
  this.leftSubTree = null;
  this.rightSubTree = null;
};

var AvlTree = function() {
  this.rootNode = null;
  this.length = 0;
};


AvlTree.prototype.contains = function(root, value) {
  if (!root) {
    return false;
  }

  if (root.value == value) {
    return true;
  } else if (value < root.value) {
    return this.contains(root.leftSubTree, value);
  } else {
    return this.contains(root.rightSubTree, value);
  }
};

AvlTree.prototype.findNode = function(root, value) {
  if (!root) {
    return null;
  }

  if (root.value == value) {
    return root;
  } else if (value < root.value) {
    return this.findNode(root.leftSubTree, value);
  } else {
    return this.findNode(root.rightSubTree, value);
  }
};

AvlTree.prototype.findParent = function(root, value) {
  if (root.value == value) {
    return 
  }

  if (value < root.value) {
    if (!root.leftSubTree) {
      return;
    } else if (root.leftSubTree.value == value) {
      return root;
    } else {
      return this.findParent(root.leftSubTree, value);
    }
  } else {
    if (!root.rightSubTree) {
      return;
    } else if (root.rightSubTree.value == value) {
      return root;
    } else {
      return this.findParent(root.rightSubTree, value);
    }
  }
};

AvlTree.prototype.findMin = function(root) {
  if (!root.leftSubTree) {
    return root.value;
  }
  this.findMin(root.leftSubTree);
};

AvlTree.prototype.findMax = function(value) {
  if (!root.rightSubTree) {
    return root.value;
  }
  this.findMax(root.rightSubTree);
};

AvlTree.prototype.delete = function(value) {
    let nodeToRemove = this.rootNode
    let parent
    let stackPath = [this.rootNode]
    while(nodeToRemove && nodeToRemove.value == value) {
      parent = nodeToRemove
      if(value < nodeToRemove.value){
        nodeToRemove = nodeToRemove.leftSubTree
      } else {
        nodeToRemove = nodeToRemove.rightSubTree;       
      }
      stackPath.push(nodeToRemove)
    }
    if(!nodeToRemove) {
      return false
    }
    parent = this.findParent(value)
    if(this.length == 1) {
      this.rootNode = null
    } //24

};

AvlTree.prototype.postorder = function(root, callback) {
  if (root) {
    this.postorder(root.leftSubTree, callback);
    this.postorder(root.rightSubTree, callback);
    callback(root);
  }
};

AvlTree.prototype.inorder = function(root, callback) {
  if (root) {
    this.inorder(root.leftSubTree, callback);
    callback(root);
    this.inorder(root.rightSubTree, callback);
  }
};

AvlTree.prototype.leftRotation = function(node) {
    if(!node.rightSubTree) {
        return false
    }
    var parent = this.findParent(this.rootNode, node.value)
    var right = node.rightSubTree //6
    if(parent) {
      parent.rightSubTree = right;    
    } else {
      this.rootNode = right
    }
    node.rightSubTree = right.leftSubTree // null
    right.leftSubTree = node
    return true
}

AvlTree.prototype.rightRotation = function(node) {
    if (!node.leftSubTree) {
        return false;
    }
    var parent = this.findParent(this.rootNode, node.value)
    var left = node.leftSubTree
    if(parent) {
      parent.leftSubTree = left
    } else {
      this.rootNode = left
    }
    node.leftSubTree = left.rightSubTree
    left.rightSubTree = node
    return true
}

AvlTree.prototype.leftAndRightRotation = function(node) {
    this.leftRotation(node)
    this.rightRotation(node)
}

AvlTree.prototype.rightAndLeftRotation = function(node) {
    this.rightRotation(node);
    this.leftRotation(node);
}

AvlTree.prototype.findHeight = function (node) {
  if(node) {
    if (!node.leftSubTree && !node.rightSubTree) {
      return 1;
    } else {
      if (node.leftSubTree && !node.rightSubTree) {
        return this.findHeight(node.leftSubTree) + 1
      }
      if (!node.leftSubTree && node.rightSubTree) {
        return this.findHeight(node.rightSubTree) + 1
      }
      return Math.max(this.findHeight(node.leftSubTree), this.findHeight(node.rightSubTree)) + 1
    }
  }
  return 0
}

AvlTree.prototype.balanceCheck = function(current) {
    if(!current.leftSubTree && !current.rightSubTree){
      current.height = -1
    } else {
      current.height = this.findHeight(current)
    }
    if (this.findHeight(current.leftSubTree) - this.findHeight(current.rightSubTree) > 1) {
      if (this.findHeight(current.leftSubTree.leftSubTree) - this.findHeight(current.leftSubTree.rightSubTree) < 0) {
        this.rightRotation(current)
      } else {
        this.leftAndRightRotation(current)
      }
    } else if (this.findHeight(current.leftSubTree) - this.findHeight(current.rightSubTree) < -1) {
      if (this.findHeight(current.rightSubTree.leftSubTree) - this.findHeight(current.rightSubTree.rightSubTree) < 0) {
        this.leftRotation(current)
      } else {
        this.rightAndLeftRotation(current)
      }
    }
}

AvlTree.prototype.insertNode = function (current, value) {
  var node = new avlNode(value);
  if (value < current.value) {
    if (!current.leftSubTree) {
      current.leftSubTree = node;
    } else {
      this.insertNode(current.leftSubTree, value);
    }
  } else {
    if (!current.rightSubTree) {
      current.rightSubTree = node;
    } else {
      this.insertNode(current.rightSubTree, value);
    }
  }
  this.balanceCheck(current)
};

AvlTree.prototype.add = function (value) {
  if (!this.rootNode) {
    this.rootNode = new avlNode(value);
  } else {
    this.insertNode(this.rootNode, value);
  }
  this.length++;
};





var tree = new AvlTree();

/* tree.add(100)
tree.add(90)
tree.add(110)
tree.add(80)
tree.add(95)
tree.add(100)
tree.add(115)
 */
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);


