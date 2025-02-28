import React from "react";

const ApologyMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 p-6 relative">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1600x900/?sky,clouds')] bg-cover bg-center opacity-30"></div>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg text-center relative z-10">
        <h2 className="text-2xl font-extrabold text-red-600 mb-4 font-sans">Dear Jasnavi,</h2>
        <p className="text-gray-800 text-lg leading-relaxed font-serif mb-4">
          I know it's a little too late, but I want to apologize for making you
          feel like you're not sacrificing for me, even though you have given
          me a lot. I got a little sad about not supporting you when you needed
          me the most, even though I knew it was useless even if you told me at
          that time.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed font-serif mb-4">
          I was wrong. I knew I wouldn’t understand, and even if you told me, I
          wouldn’t have been able to help. But I just wanted to be there for
          you when you needed me the most. Now, I understand how it affected
          you.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed font-serif mb-4">
          Going forward, I'll make sure to wait for you properly without being
          hasty. I’ll be calmer and handle situations better. Can you please
          forgive me, and can we work together to move forward together?
        </p>
        <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 font-semibold">
          I Hope You Forgive Me 
        </button>
      </div>
    </div>
  );
};

export default ApologyMessage;
