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

// 3. Create binary tree from an array
function buildTree(values) {
  let root = null;
  for (let val of values) {
    root = insert(root, val);
  }
  return root;
}

console.log(buildTree([10, 5, 15, 3, 7, 12, 18]));