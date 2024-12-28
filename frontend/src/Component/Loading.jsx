import React from 'react'

function Loading({mess}) {
  const ismess = mess?"h-[100vh]":"h-[77vh]";

  return (
    <>
    <div className={`flex ${ismess} justify-center items-center bg-slate-400`}>
    <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full "> 
   {mess?<div className='flex h-[100%] justify-center items-center text-pretty text-center font-bold'>{mess}... </div>
   :<></>}
     </div>
  <div className="skeleton h-4 w-28"> </div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
</div>
    </>
  )
}

export default Loading;