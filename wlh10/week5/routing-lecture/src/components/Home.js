import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import sorting from '../utils/sorting'

const Home = ({sorted, updateHouseInfo, history}) => {
  return (
    <div>
      <header>
        <h2>Great Hall</h2>
      </header>
      <nav>
        {sorted && (
          <Link to={`/house/${sorted}`}>Common Room</Link>
        )}
        <Link to="/about">History Of Magic</Link>
      </nav>
      <h4>Click to be sorted!</h4>
      <img
        src="https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Sorting_Hat.png/revision/latest/scale-to-width-down/2000?cb=20161120072849"
        alt="Sorting Hat"
        onClick={() =>
          sorting.randomHouse(updateHouseInfo, history.push)
        }
      />
    </div>
  )
}

export default withRouter(Home)
