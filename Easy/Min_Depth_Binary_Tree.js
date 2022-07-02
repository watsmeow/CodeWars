var minDepth = function(root) {
    let queue = []
    if (root == null) {
        return 0
    }
    queue.push([root, 1])
    while (queue.length > 0) {
        let pair = queue.shift()
        let one = pair[0]
        let two = pair[1]
        console.log(one.val)
        if (one.left == null && one.right == null) {
            return pair[1]
        }
        if (one.left != null) {
            queue.push([one.left, two + 1])
        }
        if (one.right != null) {
            queue.push([one.right, two + 1])
        }
    }
};
