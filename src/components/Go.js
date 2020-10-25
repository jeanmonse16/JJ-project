import React from 'react'
import Spinner from '../_utils/Spinner'

const Go = (props) => {
  const { goText, handleClick, loading } = props
  return (
    <button className='btn' type='submit' onClick={handleClick}>{!loading ? goText : <div style={{ marginTop: '3px' }}> <Spinner color='#fff' width={20} height={20} /> </div>}</button>
  )
}

export default Go
