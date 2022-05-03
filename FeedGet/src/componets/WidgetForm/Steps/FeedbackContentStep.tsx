import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}
export function FeedbackContentStep ({feedbackType, onFeedbackRestartRequested
}: FeedbackContentStepProps){
  const [screenshot, setScreenShot] = useState<string | null>(null)
    const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
    <header>

      <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" 
      onClick={onFeedbackRestartRequested}>
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>
    <span className="text-xl leading-6 flex items-center gap-2 text-white">
      <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
      {feedbackTypeInfo.tittle}
    </span>
    <CloseButton />
  </header>
   <form  className="my-4 w-full">
     <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
     placeholder="Detalhe o que está acontencendo por favor, botão lateral com foto para screenshot da tela com o problema..."></textarea>
     <footer className="flex gap-2 mt-2">
      <ScreenshotButton 
        onScreenshotTook={setScreenShot}
      />
       <button 
       type="submit"
       className="p-2 bg-purple-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm text-white hover:bg-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-colors"
       >
         Enviar
       </button>
     </footer>
   </form>
    </>
  )
 }