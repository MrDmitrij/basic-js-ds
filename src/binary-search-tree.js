const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.node = null;
  }
  add(data) {
    let newNode = new Node(data);
    if (this.node === null) {
      this.node = newNode;
    } else {
      this.insertNode(this.node, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  root() {
    if (this.node) return this.node;
    return null;
  }
  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
  has(data) {
    if (this.search(this.node, data)) return true;
    return false;
  }

  find(data) {
    return this.search(this.node, data);
  }
  min(node = this.node) {
    if (node) return node.left ? this.min(node.left) : node.data;
    return null;
  }
  minNode(node) {
    if (node.left === null) return node;
    else return this.minNode(node.left);
  }
  max(node = this.node) {
    if (node) return node.right ? this.max(node.right) : node.data;
    return null;
  }

  remove(data) {
    this.node = this.removeNode(this.node, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let newNode = this.minNode(node.right);

      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
}

module.exports = {
  BinarySearchTree
};