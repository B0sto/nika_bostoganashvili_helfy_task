import React from 'react'
import "../styles/taskFilter.css"

const TasksFilter = ({ currentFilter, onFilterChange }) => {
  const filters = ["All", "Completed", "Pending"]

  return (
    <div className='taskFilter'>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filterBtn ${currentFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}

        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default TasksFilter