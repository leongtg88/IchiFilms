'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Clock, Calendar, Briefcase, User } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [prevProject, setPrevProject] = useState<Project | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset the player during render when a new project is selected
  // (React pattern instead of calling setState inside an effect).
  if (project !== prevProject) {
    setPrevProject(project);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }

  if (!project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Video play interrupted or block: ", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    videoRef.current.muted = nextMute;
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      id="project-modal-container"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="bg-white w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player */}
        <div className="relative aspect-video bg-black group/player">
          <video
            ref={videoRef}
            src={project.videoUrl}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
            playsInline
            loop
          />

          {/* Big Center Play Icon (shown when paused) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </button>
          )}

          {/* Custom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col gap-2 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300">
            {/* Timeline Slider */}
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white hover:h-1.5 transition-all"
            />

            <div className="flex items-center justify-between text-white text-xs">
              {/* Left controls */}
              <div className="flex items-center gap-4">
                <button onClick={togglePlay} className="hover:text-gray-300">
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <div className="flex items-center gap-2">
                  <button onClick={toggleMute} className="hover:text-gray-300">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                <span>
                  {formatTime(currentTime)} / {formatTime(duration || parseFloat(project.duration) * 60 || 60)}
                </span>
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-4">
                <span className="font-sans text-[10px] tracking-wider uppercase font-medium bg-white/20 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                <button onClick={handleFullscreen} className="hover:text-gray-300">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Meta Details */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[40vh] no-scrollbar">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">
                {project.category}
              </span>
              <h3 className="text-2xl font-sans font-bold text-gray-900 tracking-tight mt-1">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-2">
              <span className="text-xs bg-gray-100 text-gray-800 font-medium px-2.5 py-1 rounded">
                Año: {project.year}
              </span>
            </div>
          </div>

          <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Detailed Specifications / Technical sheet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <User className="w-4 h-4 text-gray-400 shrink-0" />
              <span>
                <strong className="text-gray-900 font-medium">Cliente:</strong> {project.client}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Briefcase className="w-4 h-4 text-gray-400 shrink-0" />
              <span>
                <strong className="text-gray-900 font-medium">Rol:</strong> {project.role}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-gray-400 shrink-0" />
              <span>
                <strong className="text-gray-900 font-medium">Duración:</strong> {project.duration} minutos
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
              <span>
                <strong className="text-gray-900 font-medium">Estreno:</strong> {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
