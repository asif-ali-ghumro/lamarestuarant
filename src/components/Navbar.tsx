
import Image from 'next/image';
import CartIcons from './CartIcons';
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  const user=false;
  return (
    <div className='h-12 text-red-500 flex justify-between p-4 items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-30'>
        {/* left links */}
        <div className='hidden md:flex gap-4 flex-1'>
         <Link href={'/'}>Homepage</Link>
         <Link href={'/menu'}>Menu</Link>
         <Link href={'/contact'}>Contact</Link>
        </div>
        {/* LOGO */}
        {/* Mobile menu */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
            <Link href={'/'}> Amal Desi Restuarant 
            </Link>
        </div>
        <div className='md:hidden'>
            <Menu />
        </div>
        {/* Right Links */}
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
          <div className='md:absolute top-3 r-2 lg:static flex items-center gap-1 cursor-pointer bg-orange-300 px-1 rounded-md'>
           <Image src={'/phone.png'} alt=''  width={20} height={20}/>
           <span>+92 336 2266065</span> 
           
          </div>
        {!user?  (<Link href={'/login'}>Login</Link>):
         (<Link href={'/orders'}>Orders</Link>)}
         <CartIcons />
        </div>
    </div>
  )
} 

export default Navbar