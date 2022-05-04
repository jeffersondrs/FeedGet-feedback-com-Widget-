import { useState } from 'react';
import { CloseButton } from '../CloseButton';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/emoji.svg';
import thoughtImageUrl from '../../assets/idea.svg';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    tittle: 'Problema',
    image: {
      source: bugImageUrl,
      alt: ' Imagem de um inseto',
    },
  },
  IDEA: {
    tittle: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: ' Imagem de uma Lampada',
    }
  },
  OTHER: {
    tittle: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagen de pensamento',
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false);
  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-3 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}  />
        ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
        )}
        </>
      )}
        
      <footer className="text-xs text-neutral-400">
        Feito com amor ❤️ por <a className="underline underline-offset-2" href="https://github.com/jeffersondrs">JeffersonDRS</a>
      </footer>
    </div>
  )
}

// rounded = border-radius
// mb = margin-bottom
// md = midian para responsividade de telas
// p = oadding
// bg = background
// w = width
