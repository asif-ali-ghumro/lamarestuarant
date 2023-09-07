"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CartIcons from "./CartIcons"

const links=[
  {id:1, title:"Homepage",url:"/"},
  {id:2, title:"Menu",url:"/menu"},
  {id:3, title:"Working Hours",url:"/"},
  {id:4, title:"Contact",url:"/"},
]

const Menu = () => {
  const [open,setOpen]=useState(false);
  const user=false;
  return (
    <div>
      {!open? (<Image src={'/open.png'} alt="" width={20} height={20} onClick={()=>setOpen(true)}/>):
              (<Image src={'/close.png'} alt="" width={20} height={20} onClick={()=>setOpen(false)}/>)
        
      }
      { open &&<div className="text-white bg-red-500 absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col w-full gap-8 z-10 items-center justify-center text-3xl ">
        {
          links.map(item=>
            <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title} </Link>
          )
        }
        {!user? (<Link href={'/'} onClick={()=>setOpen(false)}>Login</Link>):
         (<Link href={'/'} onClick={()=>setOpen(false)}>Orders</Link>)
        }
        <Link href={'/cart'} onClick={()=>setOpen(false)}>
          <CartIcons />
        </Link>
      </div>}
    </div>
  )
}

export default Menu