export const rand = () => ~~(Math.random() * 360)

export const rand_arr = n => [...Array(n)].map(_ => rand())

export const shuffle = arr => {
  let counter = arr.length

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)

    counter--

    let temp = arr[counter]
    arr[counter] = arr[index]
    arr[index] = temp
  }

  return arr
}

export const get_match = (a, b) => (
  a.filter(item => (b.indexOf(item) > -1))[0]
)
