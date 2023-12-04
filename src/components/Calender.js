import React, { useState } from 'react'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = date => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    const daysInMonth = []
    const startOffset = firstDay.getDay()

    for (let i = 0; i < startOffset; i++) {
      daysInMonth.push(null)
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day)
      daysInMonth.push(currentDate)
    }
    return daysInMonth
  }

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() - 1)
    setCurrentDate(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(currentDate)
    newDate.setMonth(currentDate.getMonth() + 1)
    setCurrentDate(newDate)
  }

  const handleCurrentMonth = () => {
    const newDate = new Date()
    setCurrentDate(newDate)
  }

  const daysInMonth = getDaysInMonth(currentDate)

  return (
    <div>
      <button onClick={handleCurrentMonth} className="monthButton">
        Current Month
      </button>
      <div>
        <button onClick={handlePrevMonth} className="monthButton">
          &lt; Prev Month
        </button>
        <span className="currentMonth">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button onClick={handleNextMonth} className="monthButton">
          Next Month &gt;
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day} className="daysofWeek">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil(daysInMonth.length / 7))].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(7)].map((_, colIndex) => {
                const index = rowIndex * 7 + colIndex
                const day = daysInMonth[index]
                const currentDay = new Date()
                const iscurrentDay =
                  day &&
                  day.getDate() === currentDay.getDate() &&
                  day.getMonth() === currentDay.getMonth() &&
                  day.getFullYear() === currentDay.getFullYear()
                const cellStyle = iscurrentDay ? { backgroundColor: 'teal', color: 'white' } : {}

                return (
                  <td key={index} style={cellStyle} className="calendarDays">
                    {day ? day.getDate() : ''}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
