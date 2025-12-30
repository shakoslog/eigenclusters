'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ModelSpecificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModelSpecification({ isOpen, onClose }: ModelSpecificationProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [promptSource, setPromptSource] = useState('');
  const [isPromptLoading, setIsPromptLoading] = useState(false);
  const [promptError, setPromptError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);

    const abortController = new AbortController();

    const fetchPromptText = async () => {
      try {
        setIsPromptLoading(true);
        setPromptError(null);

        const candidates: Array<{ url: string; label: string }> = [
          { url: '/api/analyze/prompt_cluster.txt', label: 'prompt_cluster.txt' },
          { url: '/api/analyze/prompt.txt', label: 'prompt.txt' },
          { url: '/prompts/analyze.txt', label: 'analyze.txt' },
        ];

        for (const candidate of candidates) {
          const response = await fetch(candidate.url, { cache: 'no-store', signal: abortController.signal });
          if (!response.ok) continue;
          const text = await response.text();
          if (abortController.signal.aborted) return;
          setPromptText(text);
          setPromptSource(candidate.label);
          return;
        }

        throw new Error('Failed to load prompt text');
      } catch (error) {
        if ((error as any)?.name === 'AbortError') return;
        console.error('Failed to load prompt text', error);
        setPromptText('');
        setPromptSource('');
        setPromptError('Unable to load the latest prompt text.');
      } finally {
        if (!abortController.signal.aborted) {
          setIsPromptLoading(false);
        }
      }
    };

    fetchPromptText();

    return () => {
      abortController.abort();
    };
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

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
    setIsDragging(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 font-['JetBrains_Mono',_monospace]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded border border-gray-600 bg-white text-gray-900 shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="flex cursor-move select-none items-center justify-between border-b border-gray-600 bg-gray-200 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-gray-700"
          onMouseDown={handleDragStart}
        >
          <span>model_specification.txt</span>
          <button
            onClick={onClose}
            className="border border-gray-600 bg-white px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gray-700 shadow-[2px_2px_0_rgba(0,0,0,0.25)] hover:bg-gray-100"
            aria-label="Close model specification"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[82vh] overflow-y-auto px-6 py-6 text-[0.94rem] leading-[1.65]">
          <div className="rounded border border-gray-300 bg-gray-50">
            {isPromptLoading ? (
              <p className="px-4 py-4 text-sm text-gray-500">Loading prompt…</p>
            ) : promptError ? (
              <p className="px-4 py-4 text-sm text-red-600">{promptError}</p>
            ) : (
              <pre className="whitespace-pre-wrap px-4 py-4 text-sm leading-relaxed text-gray-900">
                {promptText}
              </pre>
            )}
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Source: {promptSource || 'unknown'}
          </p>
        </div>
      </div>
    </div>
  );
}
