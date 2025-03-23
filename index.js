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
const tree = buildTree([10, 5, 15, 3, 7, 12, 18]);
console.log(treeHeight(tree));

// search an element from a tree

// travesse de um elemento - BFS

// encontrando altura da árvore

// nível da árvore


