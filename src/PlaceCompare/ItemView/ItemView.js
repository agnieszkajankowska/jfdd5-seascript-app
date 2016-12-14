import React from 'react'
import { DatabaseLocal } from '../DatabaseLocal'

export default () => {
  return (
    <div>
      <h1>Attraction</h1>
      {
        DatabaseLocal.map(
          data =>
            <p>{data.name}</p>
        )}

    </div>
  )
}
