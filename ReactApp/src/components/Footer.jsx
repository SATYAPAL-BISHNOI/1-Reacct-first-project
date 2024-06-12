import React from 'react'
import '../style/Footer.scss'

const Foot = () => {
  return (
    <>
    
    <footer>
        <div>
            <h1>TechKill</h1>
            <p>@ All Right reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <div>
                <a href="http://youtube.com" target={'blank'}>YouTube</a>
                <a href="http://youtube.com" target={'blank'}>Instagarm</a>
                <a href="http://youtube.com" target={'blank'}>Github</a>
                <a href="http://youtube.com" target={'blank'}>Thared</a>
            </div>
        </div>
        {/* copyright content */}
        <div className='copyright'>
          <p>Copyright &copy; 2020 TechKill</p>
        </div>
    </footer>
    </>
  )
}

export default Foot