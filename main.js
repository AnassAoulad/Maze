const fs = require('fs')

let data = fs.readFileSync('./maze.txt', 'utf8')
const dataFormatted = data.split('\n')

const sizeX = dataFormatted[0].length
const sizeY = dataFormatted.length - 2

function start() {
  for (let x = 0; x < sizeX; x++) {
    for (let y = 0; y < sizeY; y++) {
      if (dataFormatted[x][y] == 1) {
        const startX = x
        const startY = y
        const start = [startX, startY]
        return start
      }
    }
  }
}

console.log(start())
