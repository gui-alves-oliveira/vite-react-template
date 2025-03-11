import { Outlet } from 'react-router'

export function RootLayout() {
  return (
    <div className="h-screen bg-neutral-900">
      <Outlet />
    </div>
  )
}
