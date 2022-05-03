import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
    <header>
    <span className="text-xl leading-6 text-white">Deixe seu Feedback</span>
    <CloseButton />
  </header>
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col hover:border-purple-700 items-center gap-2 border-2 border-transparent focus:border-purple-700 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            type="button"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.tittle}</span>
          </button>
        );
      })}
    </div>
    </>
  )
}