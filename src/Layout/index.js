import React from 'react'
import { Box, Tab, Tabs, Typography, Paper } from '@mui/material'
import { styled } from '@mui/system'
import { Practical1, Practical2, Practical3 } from './Tabs'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const FullScreenCenterPaper = styled(Paper)({
  width: '100%',
  height: 'calc(100vh - 120px)',
  padding: 20,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const FullScreenPaper = styled(Paper)(
  ({ dynamicPadding, display = 'flex' }) => ({
    width: '100%',
    height: 'calc(100vh - 120px)',
    padding: dynamicPadding || 20,
    display,
  })
)

const Layout = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label='Practical 1' />
        <Tab label='Practical 2' />
        <Tab label='Practical 3' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <FullScreenCenterPaper
          elevation={3}
          style={{ backgroundColor: '#3498db' }}
        >
          <Practical1 />
        </FullScreenCenterPaper>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <FullScreenPaper
          dynamicPadding='50px'
          display='block'
          style={{ backgroundColor: '#d401f0' }}
        >
          <Practical2 />
        </FullScreenPaper>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <FullScreenPaper dynamicPadding='0px'>
          <Practical3 />
        </FullScreenPaper>
      </TabPanel>
    </>
  )
}

export default Layout
