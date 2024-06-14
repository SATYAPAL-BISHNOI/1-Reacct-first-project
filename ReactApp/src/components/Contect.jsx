import React from 'react'
import '../style/Contect.scss'

const Contect = () => {
  return (
    <>
    <div className="contect">
        <main>
            <h1>Contect Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Xyzx'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='xyzx@outlook.com'/>
                </div>
                <div>
                    <label>Info.</label>
                    <input type="text" required placeholder='Tell about your quary ....'/>
                </div>

                <button type="submit">Send</button>

            </form>
        </main>
    </div>
    </>
  )
}

export default Contect