'use client';

import React from 'react';

interface WhatIsThisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const content = `Is any of this real? When you click on a cluster, particularly if it's one you know, the series seem to be capturing some sort of real compressed variation. The classifications themselves are real in the Slate Star Codex "the categories are made for man" sense. From the perspective of the terminal of god, there is perhaps no clear need for compression. Compression and categorization is a method by which we transmit large amounts of data into coherent ways we can understand them.

Historically we have made sense of these more mercurial concepts within historiography, or cultural studies, through two (unsatisfying) ways.
The first is deterministic algorithms conditioned on samples of data. This is some sort of sentiment analysis that runs actual statistical learning models on real data. There is a likelihood function, and it is repeatable. It can track sentiment or word usage over time from some defined corpus.

The second is leveraging the specific power of the human brain to scan and understand vast amounts of text and concepts, and compress them into narrative and classification. We can squint at the past and observe variations in culture and human interaction and expression, often coming to profound insight. Yet this lives inside the specific brain of a specific human, and it's not truly replicable in any sense.

My dream is to see this evolve into a third category. Where we attempt to graft the strengths of each into a new form of cultural analysis. Putting statistics into text to submit to an LLM is "fake" in the sense that this is not being literally run. Yet it's real in the sense that it's a formalization of how to reason and process information.

When I first learned linear algebra I had this moment where I realized the way I think about and classify music is actually embedded in some multi-dimensional vector space. When I explain what music is like other music, I don't run a literal matrix computation in my head, but I still am able to heuristically place items in a vector space.

While we can now cluster music, there are a lot of concepts that are made up of too much unstructured data, in such a way it's not clear to me how one would ever run any clustering algorithm on the "dataset."

Yet we now have a textual interface to a compressed manifold of some unfathomably large set of text. So what if we asked it to do that for us? We could specify our model, knowing it's not literally going to run it, but does that make it less formal or less real?

Before LLMs we ran up against a wall, we had beautiful textbooks of statistical learning algorithms, but their performance on NLP problems was mediocre at best, and not even close to the human capacity to extract latent meaning from vast amounts of information. They were better at automating things humans could do, but not in a reasonable amount of time, like counting the amount of words in historical books.

My goal in this proof of concept is to show that there is something here, there is some way in which we can extract latent meaning semi-formally. I first began trying this in early 2025, and the results were somewhat interesting, but rather unimpressive other than a glimpse of what might be possible. With the most recent output of frontier models we are now getting something interesting.

Andrej Karpathy recently noted that what we might really want are language models that know less, but are skillful. Yet for the purposes of this type of work in fact these deeply compressed models that know everything are perfect.

I think so, but it's real in a weird way, in a different way than we currently think of the humanities or social sciences.`;

export default function WhatIsThisModal({ isOpen, onClose }: WhatIsThisModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 font-['JetBrains_Mono',_monospace]" onClick={onClose}>
      <div
        className="w-full max-w-3xl max-h-[85vh] overflow-hidden rounded border border-slate-400 bg-white text-slate-900 shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-300 bg-slate-200 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-slate-700">
          <span>what_is_this.txt</span>
          <button
            onClick={onClose}
            className="border border-slate-600 bg-white px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-slate-700 shadow-[2px_2px_0_rgba(0,0,0,0.25)] hover:bg-slate-100"
          >
            ✕
          </button>
        </div>
        <div className="h-[70vh] overflow-y-auto bg-white px-4 py-6 text-sm leading-relaxed text-slate-900 whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}

