/* eslint-disable max-len */
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen -mt-32">
      <img className="w-1/6 animate-spin" src="/loading.png" alt="Imagem de Loading" />
      <p className="mt-5 text-lg"><i>Loading ...</i></p>
    </div>
  );
}
