import React from 'react'
import { Practical1, Practical2, Practical3 } from './Tabs'

const tabList = [
  {
    id: 0,
    name: 'Practical 1',
  },
  {
    id: 1,
    name: 'Practical 2',
  },
  {
    id: 2,
    name: 'Practical 3',
  },
]

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
      {value === index && <div style={{ padding: 20 }}>{children}</div>}
    </div>
  )
}

const FullScreenCenterPaper = ({ style, children }) => (
  <div
    style={{
      width: '100%',
      height: 'calc(100vh - 120px)',
      padding: 20,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...(style || {}),
    }}
  >
    {children}
  </div>
)

const FullScreenPaper = ({ children, style }) => (
  <div
    style={{
      height: 'calc(100vh - 120px)',
      boxSizing: 'border-box',
      ...(style || {}),
    }}
  >
    {children}
  </div>
)

const ButtonList = ({ items, activeIndex, onButtonClick }) => {
  return items.map((s) => {
    return (
      <div
        id={s.id}
        className={s.id === activeIndex ? 'tab-button-active' : 'tab-button'}
        onClick={() => onButtonClick(s.id)}
      >
        <span>{s.name}</span>
      </div>
    )
  })
}

const Layout = () => {
  const [value, setValue] = React.useState(0)

  const onButtonClick = React.useCallback((newValue) => {
    setValue(newValue)
  }, [])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonList
          items={tabList}
          activeIndex={value}
          onButtonClick={onButtonClick}
        />
      </div>

      <TabPanel value={value} index={0}>
        <FullScreenCenterPaper style={{ backgroundColor: '#3498db' }}>
          <Practical1 />
        </FullScreenCenterPaper>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <FullScreenPaper
          style={{
            backgroundColor: '#d401f0',
            padding: '30px',
            display: 'block',
          }}
        >
          <Practical2 />
        </FullScreenPaper>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <FullScreenPaper style={{ padding: '0px', display: 'block' }}>
          <Practical3 />
        </FullScreenPaper>
      </TabPanel>
    </>
  )
}

export default Layout
