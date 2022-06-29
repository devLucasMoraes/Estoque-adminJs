import React from 'react'

import { Text, H5 } from '@adminjs/design-system'

import { Card } from '../styles'

const TaskType = () => {
    return <Card as="a" href="#">
        <Text textAlign="center">
            <H5>Titulo</H5>
            <Text>Conteudo</Text>
        </Text>
    </Card>;

}

export default TaskType