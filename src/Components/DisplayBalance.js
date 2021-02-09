import React from 'react'
import { Icon, Statistic } from 'semantic-ui-react'

const DisplayBalance = ({ size, color = 'black', label, value }) => {

    return (
        <Statistic size={size} color={color} >
            <Statistic.Label>{label}</Statistic.Label>
            <Statistic.Value><Icon name='dollar' />{value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance