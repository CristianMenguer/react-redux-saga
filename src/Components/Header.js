import React from 'react'
import { Header as SemanticHeader } from 'semantic-ui-react'

const Header = ({title = 'Title', type = 'h1'}) => {

    return (
        <SemanticHeader as={type} >{title}</SemanticHeader>
    )
}

export default Header