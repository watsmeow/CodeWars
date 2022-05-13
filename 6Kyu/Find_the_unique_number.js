function findUniq(array) {
    let unique = array.filter((value) => {
        return array.indexOf(value) === array.lastIndexOf(value);
      })
      return Number(unique)
}
