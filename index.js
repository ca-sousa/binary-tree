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

const tree = buildTree([10, 5, 15, 3, 7, 12, 18]);
console.log(remove(tree, 15));