import React from 'react'
import { removeDream } from '../actions/dreams'
import { Link } from 'react-router-dom'
import moment from 'moment'

const DreamListItem = ({ id, title, entry, dreamType, createdAt, hoursSlept }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>title: {title}</h3>
    </Link>
    <p>entry: {entry}</p>
    <p>dreamType: {dreamType}</p>
    <p>createdAt: {moment(createdAt).format('MMMM Do, YYYY')}</p>
    <p>hours slept: {hoursSlept}</p>
  </div>
)

export default DreamListItem