import React, { useEffect, useState } from 'react'

import { ApiClient } from 'adminjs'
import { Box, H2, Text } from '@adminjs/design-system'

const api = new ApiClient()

const Dashboard = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data)
        })
    }, [])
    return (<Box>
                <Box position="relative" overflow="hidden">
                    <Box bg="grey20" height={284} py={74} px={["dafault", "lg", 250]}>
                        <Text textAlign="center" color="primary100">
                            <H2>Titulo</H2>
                            <Text opacity="0.8">Subtitulo</Text>
                        </Text>
                    </Box>
                </Box>
            </Box>
    )
}

export default Dashboard