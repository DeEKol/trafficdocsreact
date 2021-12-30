import { useState } from 'react'
import fetchApi from './api/triprest'
import TripsList from './components/TripsList'

function App() {
  const [itinerary, setItinerary] = useState('')
  const [date, setDate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [quantityUnit, setQuantityUnit] = useState('ШТУК')
  const [price, setPrice] = useState('')

  const [lastAddedTrip, setLastAddedTrip] = useState({})

  function changeItinerary(event) {
    // console.log(event)
    setItinerary(event.target.value)
  }

  function changeDate(event) {
    // console.log(event)
    setDate(event.target.value)
  }

  function changeQuantity(event) {
    // console.log(event)
    setQuantity(event.target.value)
  }

  function changePrice(event) {
    // console.log(event)
    setPrice(event.target.value)
  }

  function changeQuantityUnit(event) {
    // console.log(event)
    setQuantityUnit(event.target.value)
  }

  // console.log(quantityUnit)

  async function submitHandler(event) {
    event.preventDefault()
    const submitObject = { itinerary, date, quantity, quantityUnit, price }
    const response = await fetchApi.post(submitObject)
    setLastAddedTrip(submitObject)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="itinerary"
          value={itinerary}
          onChange={changeItinerary}
        />
        <input
          type="date"
          placeholder="date"
          value={date}
          onChange={changeDate}
        />
        <input
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={changeQuantity}
        />
        <select
          // defaultValue={quantityUnit}
          placeholder="quantityUnit"
          value={quantityUnit}
          onChange={changeQuantityUnit}
        >
          {/* <option disabled>Выберете ед.</option> */}
          <option>ШТУК</option>
          <option>ЧАСОВ</option>
        </select>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={changePrice}
        />
        <button type="submit">Add</button>
      </form>
      <TripsList lastAddedTrip={lastAddedTrip} />
    </div>
  )
}

export default App
