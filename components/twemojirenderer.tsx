import React, { useEffect, useState } from 'react';
import twemoji from 'twemoji';

interface TwemojiProps {
  text: string;
}

const Twemoji: React.FC<TwemojiProps> = ({ text }) => {
  const [emojiContent, setEmojiContent] = useState<string>('');

  useEffect(() => {
    const parsedText = twemoji.parse(text, {
      folder: 'svg',
      ext: '.svg',
      className: 'emoji-img',
      attributes: () => ({
        style: 'width: 1em; height: 1em; vertical-align: middle;',
    }),
    });
    setEmojiContent(parsedText);
  }, [text]);

  return (
    <div
      className="twemoji inline"
      dangerouslySetInnerHTML={{ __html: emojiContent }}
    />
  );
};

export default Twemoji;