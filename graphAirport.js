const airportList = 'A B C D E F G H I J K'.split(' ')
const routes = [
  ['A', 'D'],
  ['A', 'E'],
  ['D', 'C'],
  ['D', 'B'],
  ['D', 'H'],
  ['F', 'I'],
  ['F', 'E'],
  ['F', 'B'],
  ['F', 'J'],
  ['K', 'B'],
  ['C', 'I']
]

// taking a Map for Graph representation
const routesGraph = new Map();


// Adding all the nodes
const addNode = (airport) => {
  routesGraph.set(airport, [])

}

// const obj=new Map()
// obj.set('a',[3,4])

// console.log(obj.get('a'))


// Making connections
const addEdgeNode = (source, destination) => {
  routesGraph.get(source).push(destination)
  routesGraph.get(destination).push(source)
}

// calling functions 
airportList.forEach(addNode)
routes.forEach(route => addEdgeNode(...route))

console.log(routesGraph)

// BFS traversal

