import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import { WidgetForm } from './WidgetForm';


export function Widget() {
   
   return (
      <Popover className="absolute bottom-4 right-4 md:botton-5 mg: right-5 flex flex-col items-end">
         <Popover.Panel><WidgetForm/> </Popover.Panel>
         <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group" ><ChatTeardropDots className="w-6 h-6" />
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear'>
              <span className='pl-3'></span> Feedback</span>
            </Popover.Button>
      </Popover>
   )
}

// <div><h1><ChatTeardropDots size={250} weight={'duotone'}/></h1>
//    <h2><ArrowLeft size={250} weight={'bold'} /></h2>
//    </div>

{/* <div className='absolute bottom-5 right-5'>
         {isWidgetOpen && <p className='w-3 h-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis.</p>  }
         <button onClick={toggleWidgetVisibility} className="bg-violet-500 rounded-full px-2 h-9 text-white flex items-center group" ><ChatTeardropDots className="w-6 h-6" />
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear'>
              <span className='pl-3'></span> Feedback</span>
            </button>
      </div> */}