import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

export default function Private() {
  return (
    <>
      <div className='h-screen flex flex-col text-sm'>
        <div className='flex flex-1'>
          <div className='w-60 bg-zinc-100'>
            <Sidebar />
          </div>
          
          <div className='flex-1'>
            <div className='flex flex-col gap-4'>
              <div className='bg-zinc-100'>
                <Header />
              </div>
              <div className='mt-5 mx-10'>
                <Outlet />
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
