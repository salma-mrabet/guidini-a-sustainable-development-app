import { Button } from '@themesberg/react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <Link to='/'>
            <Button>
                Signin
            </Button>
        </Link>
    </div>
  )
}

export default LandingPage