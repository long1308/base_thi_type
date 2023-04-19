import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const BaseLayout = (props: Props) => {
    return (
        <div>
            <h1>Client Layout</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default BaseLayout