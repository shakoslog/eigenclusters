'use client';

import React, { useEffect, useRef, useState } from 'react';

interface SystemPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function SystemPromptModal({
  isOpen,
  onClose,
  content,
  isLoading,
  error,
  onRetry,
}: SystemPromptModalProps) {
  if (!isOpen) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isDragging || typeof window === 'undefined') return;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX - dragOffset.current.x,
        y: event.clientY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
    setIsDragging(true);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 font-['JetBrains_Mono',_monospace]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded border border-gray-600 bg-white text-gray-900 shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onClick={handleContainerClick}
      >
        <div
          className="flex cursor-move items-center justify-between border-b border-gray-600 bg-gray-200 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-gray-700 select-none"
          onMouseDown={handleDragStart}
        >
          <span>system_prompt.txt</span>
          <div className="flex gap-2">
            {error && (
              <button
                onClick={onRetry}
                className="border border-gray-600 bg-white px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gray-700 shadow-[2px_2px_0_rgba(0,0,0,0.25)] hover:bg-gray-100"
              >
                Retry
              </button>
            )}
            <button
              onClick={onClose}
              className="border border-gray-600 bg-white px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gray-700 shadow-[2px_2px_0_rgba(0,0,0,0.25)] hover:bg-gray-100"
              aria-label="Close system prompt"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="h-[75vh] overflow-y-auto bg-white">
          {isLoading ? (
            <p className="px-4 py-6 text-sm text-gray-500">Loading prompt…</p>
          ) : error ? (
            <p className="px-4 py-6 text-sm text-red-600">{error}</p>
          ) : (
            <pre className="whitespace-pre-wrap px-4 py-6 text-sm leading-relaxed text-gray-900">
              {content}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

