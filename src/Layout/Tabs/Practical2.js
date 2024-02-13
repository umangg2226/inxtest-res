import React, { useState } from 'react'

const data = [
  Array(3).fill('header'),
  Array(3).fill('row'),
  Array(3).fill('row'),
  Array(3).fill('row'),
]

const Practical2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map((list, i) => {
        return (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {list.map((name, index) => {
                const previousLength = data.reduce((total, next, idx) => {
                  if (idx < i) total += next.length
                  return total
                }, 0)

                const tooltipMessage =
                  name === 'header'
                    ? `Tooltip ${index + 1}`
                    : `Tooltip ${previousLength + index + 1}`

                return (
                  <EachCell
                    key={index}
                    tooltipMessage={tooltipMessage}
                    value={`${name} ${name === 'header' ? index + 1 : i}`}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const EachCell = ({ tooltipMessage, value }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      style={{
        flex: '1',
        height: '100px',
        border: '1px solid #fff',
        color: '#fff',
        position: 'relative',
        boxShadow: isFocused ? '0px 0px 19px 1px rgba(0,0,0,0.2)' : '',
        transition: '300ms',
        margin: 20,
      }}
    >
      {value}
      {isFocused && (
        <div
          style={{
            position: 'absolute',
            right: -25,
            top: -30,
            height: '40px',
            width: '90px',
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {tooltipMessage}
        </div>
      )}
    </div>
  )
}

export default Practical2
