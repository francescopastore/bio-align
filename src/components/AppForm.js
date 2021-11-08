import * as React from 'react'
import AppCard from './AppCard'

export default function AppForm() {
    return (
        <div style={appForm}>
            <AppCard>Test</AppCard>
            <AppCard>Test</AppCard>
            <AppCard>Test</AppCard>
            <AppCard>Test</AppCard>
        </div>
    )
}

const appForm = {
    position: 'absolute',
    top: '30vh',
    left: '10vw',
}
