import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-y-4 mx-4'>
      <div className='lg:text-4xl font-medium md:font-xl text-2xl'>Welcome to Edunify Internship Assignment</div>
      <div className='flex gap-5'>
        <Link href="/school-form">
          <button className="bg-gray-300 hover:bg-gray-400 hover:text-slate-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Enter a new college</span>
          </button>
        </Link>
        <Link href="/schools">
          <button className="bg-gray-300 hover:bg-gray-400 hover:text-slate-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>See all the listed college</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
