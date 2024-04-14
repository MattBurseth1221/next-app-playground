import React from "react";

type Props = {
    embedId: string
}

export default function YoutubeEmbed({ embedId }: Props) {
  return (
    <div className="overflow-hidden">
      <iframe
        width="1000"
        height="562"
        src={`${embedId}`}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media"
        title="Emebedded clip"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}