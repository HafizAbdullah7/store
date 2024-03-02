import React from 'react'
import Link from 'next/link'
const canceled = () => {
  return (
    <div>
    <Link href="/">
          <button  style={{'marginLeft':'35%'}} type="button" width="300px" className="btn">
            Your order is cancelled <br/>Continue Shopping
          </button>
        </Link>
    </div>
  )
}

export default canceled