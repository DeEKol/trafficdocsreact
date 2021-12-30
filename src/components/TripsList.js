import fetchApi from '../api/triprest'
import { useState, useEffect } from 'react'

function TripsList({ lastAddedTrip }) {
  const [allTrips, setAllTrips] = useState([])

  useEffect(() => {
    checkTrips()
  }, [lastAddedTrip])

  async function checkTrips() {
    const data = await fetchApi.get()
    setAllTrips(data)
    return
  }

  async function deleteHandler(event) {
    await fetchApi.delete(event.target.id)
    checkTrips()
  }

  return (
    <ul>
      {allTrips.map((item) => {
        return (
          <li key={item.id}>
            № {item.id}, Маршрут: {item.itinerary}, Кол-во: {item.quantity}{' '}
            {item.quantityUnit}, Цена: {item.price}р.
            <button id={item.id} onClick={deleteHandler}>
              del
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TripsList
