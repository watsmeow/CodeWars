var sumRootToLeaf = function(root) {
    function helper(node, holder) {
        if (node == null) {
            return 0
        }
        holder.push(node.val)
        if (node.left == null && node.right == null) {
           return parseInt(holder.join(''), 2)
        }
        return helper(node.left, [...holder]) + helper(node.right, [...holder])
    }
    return helper(root, [])
};
