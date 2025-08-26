import React from 'react'

const Header = () => {
    const styles = {
        header: {
            backgroundColor: 'lightblue',
            padding: '10px',
            textAlign: 'center'
        }
    };
  return (
    <div>
      <h1 style={styles.header}>Student DashBoard</h1>
    </div>
  )
}

export default Header
