import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void 
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]'

  return (
    <div>
      {/* overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] 
      w-full h-screen bg-black opacity-70`}> {/* Fixed: changed ' to ` for template literal */}
      </div>

      {/* navLinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all
      duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#fd48a3] space-y-6 z-[100050] right-0 top-0`}> {/* Fixed: changed ' to ` */}
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white
              sm:text-[2rem]'>
                {link.label}
              </p>
            </Link>
          )
        })}

        {/* Cross icon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.6rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
      </div>
    </div>
  )
}

export default MobileNav