import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05;

      // Try autoplay

      const playPromise =
        audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlaying(true);
          })
          .catch(() => {
            console.log(
              "Autoplay blocked"
            );
          });
      }
    }

    // First interaction fallback

    const startAudio = () => {
      if (!playing && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setPlaying(true);
          })
          .catch(() => {});
      }

      window.removeEventListener(
        "click",
        startAudio
      );
    };

    window.addEventListener(
      "click",
      startAudio
    );

    return () => {
      window.removeEventListener(
        "click",
        startAudio
      );
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* AUDIO */}

      <audio
        ref={audioRef}
        loop
        src="/music.mp3"
      />

      {/* BUTTON */}

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          w-14
          h-14
          rounded-full
          bg-zinc-900/70
          backdrop-blur-xl
          border
          border-zinc-700
          text-white
          flex
          items-center
          justify-center
          hover:scale-110
          hover:border-pink-500
          transition
          duration-300
          shadow-[0_0_25px_rgba(236,72,153,0.25)]
        "
      >
        {playing ? (
          <FaVolumeUp size={20} />
        ) : (
          <FaVolumeMute size={20} />
        )}
      </button>
    </>
  );
}

export default MusicPlayer;