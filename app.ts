interface Song {
  title: string
}

interface Playlist {
  name: string
}

function isSong(data: Song | Playlist): data is Song {
  return (data as Song).title !== undefined
}

function play(data: Song | Playlist): string {
  if (isSong(data)) {
    return data.title
  }

  return data.name
}

console.log(play({title: 'Dua Lipa'}))
console.log(play({name: 'ATB'}))

const arr = [2,3,5,4]
const arr2 = [0,3,5,0]

console.log(Array.from([arr, arr2]))

type getYear = (date: string | number) => void

function getCurrentYear(callback: getYear) {
  callback((Math.random() > 0.5) ? '2020' : 2020)
}

getCurrentYear((date: string) => {
  console.log(date.charAt(0))
})

class Song {
  name: string
}

const song = new Song()

console.log(song.name.toLowerCase())