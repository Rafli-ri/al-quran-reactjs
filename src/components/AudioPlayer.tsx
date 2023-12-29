import React, { useRef, useState, useEffect } from "react";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { FaPlay } from "react-icons/fa6";

interface CustomAudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<CustomAudioPlayerProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [totalTime, setTotalTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newVolume = parseFloat(e.target.value);
      audioRef.current.volume = newVolume / 100;
      setVolume(newVolume);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setTotalTime(Math.floor(audioRef.current!.duration));
      });

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current!.currentTime);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", () => {
          setTotalTime(Math.floor(audioRef.current!.duration));
        });

        audioRef.current.removeEventListener("timeupdate", () => {
          setCurrentTime(audioRef.current!.currentTime);
        });
      }
    };
  }, []);

  return (
    <div className="w-9/12 sm:w-1/2 p-4 bg-gray-100 border border-gray-200 shadow-md rounded-md sticky bottom-28 sm:bottom-4 sm:mt-7 my-5 ">
      <audio ref={audioRef} src={audioSrc} className="w-full" />
      <div className="flex items-center justify-between text-[12px] font-semibold">
        <button
          onClick={togglePlayPause}
          className="bg-slate-600 text-white px-4 py-2 rounded-md"
        >
          {isPlaying ? <TbPlayerPauseFilled /> : <FaPlay />}
        </button>
        <input
          type="range"
          min="0"
          max={totalTime}
          value={currentTime}
          onChange={handleSeek}
          className="mx-4 w-full h-1  bg-gray-300 appearance-none rounded-full focus:outline-none"
        />
        <span>{formatTime(currentTime)}</span>
        <span>/</span>
        <span>{formatTime(totalTime)}</span>
      </div>
      <div className="flex items-center justify-between mt-2 text-[12px] font-semibold">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="ml-16 h-1"
        />
        <span>Volume: {volume}%</span>
      </div>
    </div>
  );
};

// Fungsi utilitas untuk memformat waktu dalam detik menjadi format 'mm:ss'
const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default AudioPlayer;
