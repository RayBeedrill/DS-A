var avlNode = function(data) {
  this.value = data;
  this.leftSubTree = null;
  this.rightSubTree = null;
};

var AvlTree = function() {
  this.rootNode = null;
  this.length = 0;
};

AvlTree.prototype.insertNode = function(current, value) {
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
};

AvlTree.prototype.add = function(value) {
  if (!this.rootNode) {
    this.rootNode = new avlNode(value);
  } else {
    this.insertNode(this.rootNode, value);
  }
  this.length++;
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
    return;
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
  var nodeToRemove = this.findNode(this.rootNode, value);
  var parent = this.findParent(this.rootNode, value);

  if (!nodeToRemove) {
    return false;
  }

  if (this.length == 1) {
    delete this.rootNode;
    this.length--;
    return true;
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
    var largestValue = nodeToRemove.leftSubTree;
    while (largestValue.rightSubTree) {
      largestValue = largestValue.rightSubTree;
    }
    if (largestValue == nodeToRemove.leftSubTree) {
      nodeToRemove.leftSubTree = largestValue.leftSubTree;
    } else {
      this.findParent(this.rootNode, largestValue.value).rightSubTree = null;
    }

    nodeToRemove.value = largestValue.value;
  }
  this.length--;
  return true;
};

AvlTree.prototype.preorder = function(root, callback) {
  if (root) {
    callback(root);
    this.preoder(root.leftSubTree, callback);
    this.preoder(root.rightSubTree, callback);
  }
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
    var right = node.rightSubTree
    node.rightSubTree = right.leftSubTree
    right.left = node
    return true
}

AvlTree.prototype.rightRotation = function(node) {
    if (!node.leftSubTree) {
        return false;
    }
    var left = node.leftSubTree
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

AvlTree.prototype.balanceCheck = function(node) {

}



var tree = new AvlTree();

/* tree.add(100)
tree.add(90)
tree.add(110)
tree.add(80)
tree.add(95)
tree.add(100)
tree.add(115)
 */
tree.add(23);
tree.add(14);
tree.add(31);
tree.add(7);
tree.add(9);
