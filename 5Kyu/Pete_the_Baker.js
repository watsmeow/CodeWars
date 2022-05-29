function cakes(recipe, ingredients) {
    let arr = []
    for (key in recipe) {
        for (rkey in ingredients) {
            if (key in ingredients == false) {
                return 0
            } else if (key == rkey) {
                arr.push(Math.floor(ingredients[rkey]/recipe[key]))
            }
        }
    }
  if (arr.sort((a, b) => a - b)[0] == undefined) {
    return 0
  } else {
    return arr.sort((a, b) => a - b)[0]
  }
}
