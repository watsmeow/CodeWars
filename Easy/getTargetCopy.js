var getTargetCopy = function(original, cloned, target) {
    if (original == null) {
        return null
    }
    if (original.val == target.val && original == target) {
        return cloned
    }
    let searchLeftResult = getTargetCopy(original.left, cloned.left, target) 
    let searchRightResult = getTargetCopy(original.right, cloned.right, target)
    if (searchLeftResult == null) {
        return searchRightResult
    } else {
        return searchLeftResult
    }
};
