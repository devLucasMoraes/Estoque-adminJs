import React from 'react'

import { Text, H5 } from '@adminjs/design-system'
import { Chart } from 'react-google-charts'


import { Card } from '../styles'

const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

const TaskType = () => {
    return <Card as="a" href="#">
        <Text textAlign="center">
            <H5>Titulo</H5>
            <Text>
                <Chart
                    chartType="PieChart"
                    data={data}
                    width={"100%"}
                    height={"100%"}
                />
            </Text>
        </Text>
    </Card>;

}

export default TaskType