import React from 'react'


const Results = ({ correct, wrong }) => {
  const e = txt => encodeURIComponent(txt)
  const score = `${correct} out of ${correct + wrong} correct`
  const msg = `Spot it! + Emojis = 💥🎉😜 I got ${score}!`
  const url = 'http://brendansudol.com/find-emoji/'
  const tweet = `https://twitter.com/intent/tweet?text=${e(msg)}&url=${e(url)}`

  return (
    <div className='mt2 p2 h3 bg-darken-1 rounded'>
      🎉 You got {score}!&nbsp;
      <a className='underline' target='_blank' href={tweet}>Tweet score</a>
    </div>
  )
}

export default Results
