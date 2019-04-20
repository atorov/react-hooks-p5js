import React from 'react'

import Section1 from '../Section1'
import Section2 from '../Section2'
import Section3 from '../Section3'

export default function AppContent() {
    return (
        <div className="app-content section">
            <h5>App content</h5>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}
