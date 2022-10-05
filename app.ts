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