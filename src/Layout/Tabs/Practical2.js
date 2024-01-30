import { useState } from 'react'
import { Box, Grid, Fade } from '@mui/material'

const data = [
  Array(3).fill('header'),
  Array(3).fill('row'),
  Array(3).fill('row'),
  Array(3).fill('row'),
]

const Practical2 = () => {
  return (
    <Grid container spacing={7}>
      {data.map((list, i) => {
        return (
          <Grid item xs={12} key={i}>
            <Grid container spacing={7}>
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
                  <Message
                    key={index}
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
          boxShadow: isFocused ? '0px 0px 19px 1px rgba(0,0,0,0.2)' : '',
          transition: '300ms',
        }}
      >
        {value}
        <Fade
          in={isFocused}
          timeout={{
            enter: 300,
            exit: 300,
          }}
        >
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
        </Fade>
      </Box>
    </Grid>
  )
}

export default Practical2
