import { useState } from 'react'
import { Box, Grid } from '@mui/material'

const data = [
  Array(3).fill('header'),
  Array(3).fill('row'),
  Array(3).fill('row'),
  Array(3).fill('row'),
]

const Message = ({ tooltipMessage, value }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Grid
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      item
      xs={4}
    >
      <Box
        style={{
          height: '100px',
          width: '100%',
          border: '1px solid #fff',
          color: '#fff',
          position: 'relative',
        }}
      >
        {value}
        {isFocused ? (
          <Box
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
          </Box>
        ) : (
          ''
        )}
      </Box>
    </Grid>
  )
}

const Practical2 = () => {
  return (
    <Grid container spacing={7}>
      {data.map((list, i) => {
        return (
          <Grid item xs={12} key={i}>
            <Grid container spacing={7}>
              {list.map((name, index) => {
                const tooltipMessage =
                  name === 'header'
                    ? `Tooltip ${index + 1}`
                    : `Tooltip ${list?.[i - 1].length * i + index + 1}`

                return (
                  <Message
                    tooltipMessage={tooltipMessage}
                    value={`${name} ${name === 'header' ? index + 1 : i}`}
                  />
                )
              })}
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Practical2
