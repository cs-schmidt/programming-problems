// Problem 409: Longest Palindrome
// NOTE: Popular question.
// TODO: Produce further optimized version.

/**
 * Constraints:
 *
 * 1) 1 <= s.length <= 2000.
 * 2) s consists of lowercase and/or uppercase English letters only.
 * 3) analysis is case-sensitive; e.g., "Aa" is not considered a palindrome.
 *
 */

// *** First Solution ***
function longestPalindrome(s: string): number {
  let result = 0;
  const charFreqs: { [key: string]: number } = {};
  let maxOddFreqs = 0;

  for (const char of s) {
    if (char in charFreqs) charFreqs[char] += 1;
    else charFreqs[char] = 1;
  }

  for (const freq of Object.values(charFreqs)) {
    if (freq % 2 === 0) {
      result += freq;
    } else if (freq > maxOddFreqs && maxOddFreqs > 0) {
      result = result - 1 + freq;
      maxOddFreqs = freq;
    } else if (maxOddFreqs === 0) {
      result += freq;
      maxOddFreqs = freq;
    } else {
      result += freq - 1;
    }
  }

  return result;
}

// I want a function that finds the longest palindrome which can be constructed
// by the characters in `s` in linear time i.e., O(n).
// function longestPalindrome(s: string): number {
//   // XXX: Method to track maximums.
//   let result: number = 0;
//   const charFreqs: { [key: string]: number } = {};
//   let maxOddFreqs: number = 0;

//   for (let char of s) {
//     if (char in charFreqs) {
//       //
//       if (charFreqs[char] < maxOddFreqs) {
//         //
//         if (charFreqs[char] % 2 !== 0 && 1 < charFreqs[char]) result += 1;
//         //
//         else if (charFreqs[char] === 1) result += 2;
//         charFreqs[char] += 1;
//       }
//       //
//       else {
//         //
//         if (charFreqs[char] % 2 === 0) {
//           result += (charFreqs[char] += 1) - maxOddFreqs;
//           maxOddFreqs = charFreqs[char];
//         }
//         //
//         else if (charFreqs[char] % 2 !== 0) {
//           result += 1;
//           // Pop to get last maximum and change `maxOddFreqs`.
//         }
//         //
//         else result += 1;
//       }
//     }
//     //
//     else charFreqs[char] = 1;
//   }

//   return result;
// }

// *** First Solution ***
// TODO: finish comments.
// function longestPalindrome(s: string): number {
//   let result: number = 1;
//   const charFreqs: { [char: string]: number } = {};
//   const oddNums: BinarySearchTree = new BinarySearchTree();
//   const oddFreqs: Map<number, number> = new Map();

//   let iter = 0;
//   for (let char of s) {
//     // When `char` has been encountered before in `s`.
//     if (charFreqs[char]) {
//       // When the frequency of `char` is an even number 1 less than the maximum
//       // odd charcater frequency. Then, increment the `oddFreqs` value for key
//       // `oddNums.max.val`, and increment `charFreqs[char]`.
//       if (charFreqs[char] % 2 === 0 && charFreqs[char] === oddNums.findMaxNode().val - 1) {
//         oddFreqs.set(oddNums.findMaxNode().val, oddFreqs.get(oddNums.findMaxNode().val) + 1);
//         charFreqs[char] += 1;
//       }
//       // When the frequency of `char` is an even number below the max odd value
//       // minus 1, then decrement `result` by the frequency of `char`. And, add
//       // the incremented freqeuncy of `char` to `oddNums` and associate.
//       else if (charFreqs[char] % 2 === 0 && charFreqs[char] < oddNums.findMaxNode().val - 1) {
//         result -= charFreqs[char];
//         oddNums.add(charFreqs[char] + 1);
//         if (!oddNums.search(charFreqs[char] + 1))
//           oddFreqs.set(charFreqs[char] + 1, oddFreqs.get(charFreqs[char]) + 1);
//         else oddFreqs.set(charFreqs[char] + 1, 1);
//         charFreqs[char] += 1;
//       }
//       // When the frequency of `char` is an even number greater than 1, then
//       // subtract the old max odd value from `result` and add the new one.
//       // Add the new max odd value to `oddNums` and associate the value with a
//       // frequency of 1 in `oddFreqs`. Finally, increment `charFreqs[char]`.
//       else if (charFreqs[char] % 2 === 0 && charFreqs[char] > oddNums.findMaxNode().val) {
//         console.log('here');
//         result = result - oddNums.findMaxNode().val + 1;
//         console.log(result);
//         oddNums.add(charFreqs[char] + 1);
//         oddFreqs.set(charFreqs[char] + 1, 1);
//         charFreqs[char] += 1;
//       }
//       // Then, lookup `charFreqs[char]` in `oddFreqs` and decrement its value;
//       // if it becomes 0, then decrement the result by `oddNums.max.val`,
//       // remove `charFreqs[char]` from  `oddNums` and `oddFreqs` and add
//       // `oddNums.max.val` and `charFreq[char] + 1` to `result`.
//       else if (charFreqs[char] % 2 !== 0 && charFreqs[char] === oddNums.findMaxNode().val) {
//         oddFreqs.set(charFreqs[char], oddFreqs.get(charFreqs[char]) - 1);
//         if (oddFreqs.get(charFreqs[char]) === 0) {
//           oddNums.remove(charFreqs[char]);
//           oddFreqs.delete(charFreqs[char]);
//           result += (oddNums.findMaxNode()?.val || 0) + 1;
//         } else result += charFreqs[char] + 1;
//         charFreqs[char] += 1;
//       }
//       // Then, lookup `charFreqs[char]` in `oddFreqs` and decrement its value;
//       // if it becomes 0, then remove it from `oddNums` and `oddFreqs`.
//       // increment `charFreqs[char]` by 1 and add `charFreqs[char]` to the
//       // result.
//       else {
//         oddFreqs.set(charFreqs[char], oddFreqs.get(charFreqs[char]) - 1);
//         if (oddFreqs.get(charFreqs[char]) === 0) {
//           oddNums.remove(charFreqs[char]);
//           oddFreqs.delete(charFreqs[char]);
//         }
//         result += charFreqs[char] + 1;
//         charFreqs[char] + 1;
//       }
//     }
//     // Add `char` to `charFreqs` and initialize it to 1. Then, if `oddFreqs`
//     // doesn't have 1, then add it with an association to 1 and add 1 to
//     // `oddNums`.
//     else {
//       charFreqs[char] = 1;
//       if (!oddFreqs.get(1)) {
//         oddNums.add(1);
//         oddFreqs.set(1, 1);
//       } else oddFreqs.set(1, oddFreqs.get(1) + 1);
//     }
//     console.log(`Interation ${iter++}:`);
//     console.log('*'.repeat(50));
//     console.log(charFreqs);
//     console.log(oddFreqs);
//     console.log(result);
//   }

//   console.log(charFreqs);

//   return result;
// }

// /** Represents a binary-search tree (BST). */
// class BinarySearchTree {
//   public root: TreeNode | null;
//   public min: TreeNode | null;
//   public max: TreeNode | null;

//   constructor() {
//     this.root = null;
//     this.min = null;
//     this.max = null;
//   }

//   /** Inserts a node into the BST with the specified value. */
//   public add(val: number) {
//     const node = new TreeNode(val);
//     if (!this.root) this.root = node;
//     else this.insertNode(this.root, node);
//   }

//   /** Removes a node from the BST with the specified value. */
//   public remove(val: number) {
//     this.root = this.removeNode(this.root, val);
//   }

//   /** Finds and returns a reference to a node in the tree. */
//   public search(val: number, node: TreeNode = this.root): TreeNode {
//     if (node === null) return null;
//     else if (val < node.val) return this.search(val, node.left);
//     else if (val > node.val) return this.search(val, node.right);
//     else return node;
//   }

//   /** Finds an */

//   /** Returns node with the maximum value under a node's subtree in the BST. */
//   public findMaxNode(node: TreeNode | null = this.root): TreeNode | null {
//     if (node?.right == null) return node;
//     else return this.findMaxNode(node?.right);
//   }

//   /** Returns node with the minimum values under a node's subtree in the BST. */
//   public findMinNode(node: TreeNode | null = this.root): TreeNode | null {
//     if (node?.left === null) return node;
//     else return this.findMinNode(node?.left);
//   }

//   /** Handles node insertion, maintaining the order of the BST. */
//   private insertNode(node: TreeNode, newNode: TreeNode) {
//     if (newNode.val < node.val) {
//       if (node.left === null) node.left = newNode;
//       else this.insertNode(node.left, newNode);
//     } else {
//       if (node.right === null) node.right = newNode;
//       else this.insertNode(node.right, newNode);
//     }
//   }

//   /** Handles node removal at a particular key in the BST, and returns that node. */
//   private removeNode(node: TreeNode | null, val: number) {
//     if (!node) return null;
//     else if (val < node.val) {
//       node.left = this.removeNode(node.left, val);
//       return node;
//     } else if (val > node.val) {
//       node.right = this.removeNode(node.right, val);
//       return node;
//     } else {
//       if (!node.left && !node.right) {
//         node = null;
//         return node;
//       } else if (!node.left) {
//         node = node.right;
//         return node;
//       } else if (!node.right) {
//         node = node.left;
//         return node;
//       } else {
//         const aux = this.findMinNode(node.right);
//         node.val = aux.val;
//         node.right = this.removeNode(node.right, aux.val);
//         return node;
//       }
//     }
//   }
// }

// /** Represents a binary tree node. */
// class TreeNode {
//   public val: number;
//   public left: TreeNode | null;
//   public right: TreeNode | null;

//   constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// console.log(longestPalindrome('dd'));
