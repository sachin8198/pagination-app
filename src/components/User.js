import React from 'react'
import styles from './User.module.css'

function User({ Company, FirstNameLastName
    , JobTitle, Phone, ID }) {
    return (
        <div className={styles.card}>
            <h1>{ID}</h1>
            <h1>{Company}</h1>
            <h2>{FirstNameLastName
            }</h2>
            <h1>{JobTitle}</h1>
            <h1>{Phone}</h1>
        </div>
    )
}

export default User