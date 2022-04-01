import React from 'react'

export default function About(props) {
  return (
    <div style={{color:props.mode==='dark'?'white':'#042743',fontSize:25}}>
      This website is made for fun.
      You can remove extra spaces and count number of characters and also count number of words here.
      This website is Made in React.js by Tushar Roll Number : 11912049 under the guidance of Dr. R.K Agarwal.
    </div>
  )
}
