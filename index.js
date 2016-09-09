function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list li')

  for (var i = 0, l = lists.length; i < l; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n
  }
}

function deepestChild() {
  var select = document.querySelector('div#grand-node')

  var children
  var nextChildren = select.children[0]
  while (nextChildren) {
      children = nextChildren
      nextChildren = nextChildren.children[0]
  }
  return children

}
