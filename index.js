// create a binary tree
function Node(value) { 
  return {
    value: value,
    left: null,
    right: null
  };
}

// insert values to a binary tree using BST standard
function insert(root, value) {
  if (root === null) return Node(value);

  if (value < root.value) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

// create binary tree from an array
function buildTree(values) {
  let root = null;
  for (let val of values) {
    root = insert(root, val);
  }
  return root;
}

// remove an element keeping the BST standard
function findMin(node) {
  const minimum = node.value;
  while (node.left !== null) {
    minimum = node.left.value;
    node = node.left;
  }
  return minimum;
}

function remove(root, value) {
  if (root === null) return root;

  if (value < root.value) {
    root.left = remove(root.left, value);
  } else if (value > root.value) {
    root.right = remove(root.right, value);
  } else {
    // case node is if no children 
    if (root.left === null && root.right === null) {
      return null;
    }

    // case node is if a single child
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // case node is if two children
    root.value = findMin(root.right);
    root.right = remove(root.right, root.value);
  }

  return root;
}

// to erase a tree completely 
function treeErase(root) {
  root = null
}

// sum all tree elements
function treeSum(root) {
  if (root === null) return 0;

  const leftSum = treeSum(root.left)
  const rightSum = treeSum(root.right)
  return root.value + leftSum + rightSum
}


// get the maximum value of the tree
function treeMax(root) {
  if (root === null) return 0;

  const leftMax = treeMax(root.left)
  const rightMax = treeMax(root.right)
  return Math.max(root.value, leftMax, rightMax)
}

// get the tree height
function treeHeight(root) {
  if (root === null) return 0;
  const leftHeight = treeHeight(root.left)
  const rightHeight = treeHeight(root.right)
  return 1 + Math.max(leftHeight, rightHeight)
}

// find if an element exist on tree
function elementExistsInTree(root, value) {
  if (root === null) return false;
  const inLeft = elementExistsInTree(root.left, value)
  const inRight = elementExistsInTree(root.right, value)
  return root.value === value || inLeft || inRight
}

// search an element on a tree
function searchElementInTree(root, value) {
  if (root === null) return null;
  const inLeft = searchElementInTree(root.left, value)
  const inRight = searchElementInTree(root.right, value)
  if ( root.value === value || inLeft || inRight ) {
    return value
  }

  return null
}


// invert tree
function invertTree(root) {
  if (root === null) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root; 
}

// tree crossing
// in-order: left -> node -> right
function inOrder(root, result = []) {
  if (root === null) return null;
  inOrder(root.left, result);
  result.push(root.value);
  inOrder(root.right, result);
  return result
}

const tree = buildTree([10, 5, 15, 3, 7, 12, 18]);
console.log(tree)
console.log(inOrder(tree));
// pre-order: node -> left -> right

// post-order: left -> right -> node

// by level




// travesse de um elemento - BFS



