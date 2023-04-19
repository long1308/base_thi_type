import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            <h1>AdminLayout</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout