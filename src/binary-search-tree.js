const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootProp = null;
  }

  root() {
    return this.rootProp;
  }

  add(data) {
    this.rootProp = addNode(this.rootProp, data);
    function addNode(node, data) {
      if (!node) {
        return { data: data, left: null, right: null };
      } else if (node.data < data) {
        node.right = addNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = addNode(node.left, data);
        return node;
      }
    }
  }

  has(data) {
    function checkData(node, data) {
      if (node.data === data) {
        return true;
      }
      if (node.left && node.right) {
        if (checkData(node.right, data)) {
          return true;
        } else {
          return checkData(node.left, data);
        }
      } else if (!node.left && node.right) {
        return checkData(node.right, data);
      } else if (node.left && !node.right) {
        return checkData(node.left, data);
      } else if (!node.left && !node.right) {
        return node.data === data ? true : false;
      } else {
        return false;
      }
    }
    return checkData(this.rootProp, data);
  }

  find(data) {
    function findData(node, data) {
      if (node.data === data) {
        return node;
      }
      if (node.left && node.right) {
        return findData(node.right, data) ? findData(node.right, data) : findData(node.left, data);
      } else if (!node.left && node.right) {
        return findData(node.right, data);
      } else if (node.left && !node.right) {
        return findData(node.left, data);
      } else {
        return null;
      }
    }
    return findData(this.rootProp, data);
  }

  remove(data) {
    this.rootProp = removeNode(this.rootProp, data);
    function removeNode(node, data) {
      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (node.left && !node.right) {
          return node.left;
        }
        if (!node.left && node.right) {
          return node.right;
        }
        if (node.left && node.right) {
          function findMin(node) {
            if (!node.left) return node;
            return findMin(node.left);
          }
          const minNode = findMin(node.right);
          node.data = minNode.data;
          node.right = removeNode(node.right, minNode.data);
        }
      }
      if (node.right && !node.left) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.left && !node.right) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.right && node.left) {
        node.right = removeNode(node.right, data);
        node.left = removeNode(node.left, data);
        return node;
      } else {
        return node;
      }
    }
  }

  min() {
    function findMin(node) {
      if (!node.left) return node.data;
      return findMin(node.left);
    }
    return findMin(this.rootProp);
  }

  max() {
    function findMax(node) {
      if (!node.right) return node.data;
      return findMax(node.right);
    }
    return findMax(this.rootProp);
  }
}

module.exports = {
  BinarySearchTree
};