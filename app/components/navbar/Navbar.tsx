'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem'

const Navbar = () => {
  // MENU
  const [isOpen, setIsOpen] = useState(false)

  //   FUNCTION TO TOGGLE MENU STATE
  const toggleOpen = () => {
    setIsOpen((value) => !value)
  }

  //   END OF FUNCTION TO TOGGLE MENU STATE

  return (
    <div className='w-full fixed shadow-sm border-b-2 py-4 z-10 px-2 bg-white sm:px-4 md:px-10 xl:px-20'>
      <div className='max-w-[2520] flex justify-between items-center'>
        <Link href={'/'} className=' md:block'>
          <Image
            alt='logo'
            width={100}
            height={100}
            src={'/images/logo.png'}
            className='cursor-pointer  scale-75 sm:scale-100'
          />
        </Link>
        <div className='border-[1px] py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer flex flex-row items-center justify-between '>
          <div className='text-sm font-semibold px-6'>Anywhere</div>
          <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
            Any Week
          </div>
          <div className='text-sm pl-6 pr-2  text-gray-600 flex flex-row items-center gap-3'>
            <div className='hidden sm:block'>Add Guest</div>
            <div className='p-2  bg-rose-500 rounded-full  text-white'>
              <BiSearch size={18} />
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='flex flex-row items-center gap-3'>
            <div
              className='
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          '
            >
              Airbnb your home
            </div>
            <div
              onClick={toggleOpen}
              className='
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          '
            >
              <AiOutlineMenu />
              <div className='hidden md:block'>
                <Image
                  src={'/images/placeholder.jpg'}
                  alt='avatar'
                  width={30}
                  height={30}
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
          {isOpen && (
            <div
              className='
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          '
            >
              <div className='flex flex-col cursor-pointer'>
                <>
                  <MenuItem label='Login' />
                  <MenuItem label='Sign up' />
                </>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
