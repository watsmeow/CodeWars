var heightChecker = function(heights) {
        let inOrder = [...heights]
        inOrder.sort((a, b) => a - b)
        let diff = 0
        for (let i = 0; i < heights.length; i++) {
            if (inOrder[i] != heights[i]) {
                diff += 1
            }
        }
        return diff
};
