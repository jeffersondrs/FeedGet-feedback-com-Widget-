import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/emoji.svg";
import thoughtImageUrl from "../../assets/idea.svg";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-3 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col hover:border-purple-700 items-center gap-2 border-2 border-transparent focus:border-purple-700 focus:outline-none"
              onClick={() => setFeedbackType(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.tittle}</span>
            </button>
          );
        })}
      </div>
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
