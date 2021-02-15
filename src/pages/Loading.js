import Spinner from '../_utils/Spinner'

export default () => (
  <div className='waiting-container'>
    <div className='waiting-message'>
      <div style={{ marginTop: '70px' }}> <Spinner color='#2bcbba' height={150} width={400} /> </div>
    </div>
  </div>
)
