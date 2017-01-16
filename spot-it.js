// generate "Spot It!" cards
// i ported this from python @ http://joelgrus.com/2015/06/12/on-the-mathematics-of-spot-it/

const range = n => ([...Array(n).keys()])

/*
 * ordinary points are just pairs (x, y) where x and y
 * are both between 0 and n - 1
*/
const ordinary_points = n => {
  let arr = []
  for (const x of range(n)) {
    for (const y of range(n)) {
      arr.push([x, y])
    }
  }
  return arr
}

/*
 * infinite points are just the numbers 0 to n - 1
 * (corresponding to the infinity where lines with that slope meet)
 * and infinity infinity (where vertical lines meet)
*/
const points_at_infinity = n => (range(n).concat(['∞']))
    
const all_points = n => (ordinary_points(n).concat(points_at_infinity(n)))

/*
 * returns the ordinary line through (0, b) with slope m
 * in the finite projective plan of degree n
 * includes 'infinity m'
*/
const ordinary_line = (m, b, n) => {
  let arr = []
  for (const x of range(n)) {
    arr.push([x, (m * x + b) % n])
  }
  return arr.concat([m]) 
}

/*
 * returns the vertical line with the specified x-coordinate
 * in the finite projective plane of degree n
 * includes 'infinity infinity'
*/
const vertical_line = (x, n) => {
  let arr = []
  for (const y of range(n)) {
    arr.push([x, y])
  }
  return arr.concat(['∞']) 
}

/*
 * the line at infinity just contains the points at infinity
*/
const line_at_infinity = n => points_at_infinity(n)

const all_lines = n => {
  let arr = []
  for (const b of range(n)) {
    for (const m of range(n)) {
      arr.push(ordinary_line(m, b, n))
    }
  }
  for (const x of range(n)) {
    arr.push(vertical_line(x, n))
  }
  arr.push(line_at_infinity(n))
  return arr
}

const make_deck = (n, pics) => {
  const points = all_points(n)

  // create a mapping from point to pic
  let mapping = {}
  points.forEach((p, i) => {
    mapping[p] = pics[i]
  })

  // return the remapped cards
  let all_cards = []
  for (const line of all_lines(n)) {
    let card = []
    for (const p of line) {
      card.push(mapping[p])
    }
    all_cards.push(card)
  }

  return all_cards
}

export default make_deck
