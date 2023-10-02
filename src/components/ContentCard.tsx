"use client";

import { useState } from "react";
import { ContentCardProps } from "@/types/ContentCardTypes";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

/**
 * ContentCard Component
 *
 * A card component that has a header and content. Toggle the content display
 * by clicking the button in the header.
 *
 * @param show - Whether or not the content should be shown.
 * @param title - The title of the card.
 * @param content - The content of the card.
 */
const ContentCard: React.FC<ContentCardProps> = ({
  show = false,
  title,
  content,
}) => {
  const [contentVisible, setContentVisible] = useState(show);
  const titleId = title.toLowerCase().replace(/ /g, "-");

  return (
    <section className="bg-background border border-dark rounded-lg">
      <header
        id={titleId}
        className={`flex justify-between items-center p-8 rounded-lg ${
          contentVisible && "border-b border-dark rounded-b-none bg-zinc-900"
        }`}
      >
        <h1 className="text-2xl">{title}</h1>
        <button
          className="button"
          aria-label="Toggle content visibility"
          onClick={() => setContentVisible((prev) => !prev)}
        >
          <ChevronDownIcon
            className={`h-5 w-5 text-highlight transition duration-100 transform ${
              contentVisible && "rotate-180"
            }`}
          />
        </button>
      </header>
      {contentVisible && <article className="p-8">{content}</article>}
    </section>
  );
};

export default ContentCard;
