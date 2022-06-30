function maxSum(root) {
   if (root == null) {
     return 0;
   }
   
   return root.value + Math.max(maxSum(root.left), maxSum(root.right));
}
