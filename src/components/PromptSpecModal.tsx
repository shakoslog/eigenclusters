'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type PromptSpecTab = 'system' | 'model';

interface PromptSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab: PromptSpecTab;
  onTabChange: (tab: PromptSpecTab) => void;
  promptText: string;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

type ModelSpecExtract = {
  formalizationExcerpt: string;
  equations: {
    stateFn?: string;
    rank?: string;
    delta?: string;
    orth?: string;
    zeroSum?: string;
  };
};

const extractModelSpec = (promptText: string): ModelSpecExtract => {
  const lines = promptText.split(/\r?\n/);

  const startIdx = lines.findIndex(line =>
    line.toLowerCase().includes('mathematical formalization:')
  );
  const endIdxCandidate = lines.findIndex(line => line.toLowerCase().includes('json output format specification'));
  const endIdx = endIdxCandidate > startIdx && startIdx >= 0 ? endIdxCandidate : lines.length;
  const formalizationLines = startIdx >= 0 ? lines.slice(startIdx, endIdx) : [];
  const formalizationExcerpt = formalizationLines.join('\n').trim();

  const stateFn = formalizationLines.find(line => line.trim().startsWith('Psi(t)') && line.includes('~='));
  const rank = formalizationLines.find(line => line.trim().startsWith('Rank_k') && line.toLowerCase().includes('integral'));
  const delta = formalizationLines.find(line => line.trim().startsWith('Delta_lambda') && line.includes('lambda('));
  const orth = formalizationLines.find(line => line.includes('v_i') && line.includes('DOT') && line.includes('v_j'));
  const zeroSum = formalizationLines.find(line => line.toLowerCase().includes('zero-sum dynamics'));

  return {
    formalizationExcerpt,
    equations: { stateFn, rank, delta, orth, zeroSum },
  };
};

export default function PromptSpecModal({
  isOpen,
  onClose,
  tab,
  onTabChange,
  promptText,
  isLoading,
  error,
  onRetry,
}: PromptSpecModalProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    isDraggingRef.current = false;
  }, [isOpen]);

  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    // Only primary button
    if (event.button !== 0) return;
    // Don't start dragging when interacting with buttons/controls inside the title bar.
    const target = event.target as HTMLElement | null;
    if (target?.closest('button, a, input, textarea, select, [role="button"]')) return;
    event.preventDefault();

    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };

    isDraggingRef.current = true;
    setIsDragging(true);

    // Capture pointer so we receive move/up events even if the cursor leaves the header.
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDragMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    setPosition({
      x: event.clientX - dragOffset.current.x,
      y: event.clientY - dragOffset.current.y,
    });
  };

  const handleDragEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // ignore
    }
  };

  const modelSpec = useMemo(() => extractModelSpec(promptText), [promptText]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 font-['JetBrains_Mono',_monospace]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92vh] overflow-hidden rounded border border-gray-600 bg-white text-gray-900 shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="flex cursor-move items-center justify-between border-b border-gray-600 bg-gray-200 px-4 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-gray-700 select-none"
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
          style={{ touchAction: 'none' }}
        >
          <span>{tab === 'system' ? 'system_prompt.txt' : 'model_specification.txt'}</span>
          <div className="flex gap-2">
            {error && (
              <button
                onClick={onRetry}
                onPointerDown={e => e.stopPropagation()}
                className="border border-gray-600 bg-white px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gray-700 shadow-[2px_2px_0_rgba(0,0,0,0.25)] hover:bg-gray-100"
              >
                Retry
              </button>
            )}
            <button
              onClick={onClose}
              onPointerDown={e => e.stopPropagation()}
              className="border border-gray-600 bg-white px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gray-700 shadow-[2px_2px_0_rgba(0,0,0,0.25)] hover:bg-gray-100"
              aria-label="Close prompt/model spec"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-4 py-3 border-b border-gray-200">
          <Tabs value={tab} onValueChange={value => onTabChange(value as PromptSpecTab)}>
            <TabsList className="bg-gray-100 border border-gray-300 text-gray-700">
              <TabsTrigger
                value="system"
                className="text-gray-700 hover:text-gray-900 data-[state=active]:bg-white data-[state=active]:text-gray-900"
              >
                System Prompt
              </TabsTrigger>
              <TabsTrigger
                value="model"
                className="text-gray-700 hover:text-gray-900 data-[state=active]:bg-white data-[state=active]:text-gray-900"
              >
                Model Spec
              </TabsTrigger>
            </TabsList>

            <TabsContent value="system" className="mt-3">
              <div className="h-[72vh] overflow-y-auto bg-white">
                {isLoading ? (
                  <p className="px-2 py-4 text-sm text-gray-500">Loading prompt…</p>
                ) : error ? (
                  <p className="px-2 py-4 text-sm text-red-600">{error}</p>
                ) : (
                  <pre className="whitespace-pre-wrap px-2 py-4 text-sm leading-relaxed text-gray-900">
                    {promptText}
                  </pre>
                )}
              </div>
            </TabsContent>

            <TabsContent value="model" className="mt-3">
              <div className="h-[72vh] overflow-y-auto bg-white">
                {isLoading ? (
                  <p className="px-2 py-4 text-sm text-gray-500">Loading prompt…</p>
                ) : error ? (
                  <p className="px-2 py-4 text-sm text-red-600">{error}</p>
                ) : (
                  <div className="px-3 py-4 text-[0.94rem] leading-[1.65] text-gray-900">
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                        Salience-Weighted Prototype Model (Eigenclusters)
                      </h2>
                      <p className="text-sm text-gray-800">
                        This is a human-readable “one page” model spec distilled from the system prompt’s <span className="font-semibold">MATHEMATICAL FORMALIZATION</span>.
                        The prompt treats eigenclusters as <span className="font-semibold">salience-weighted prototypes on a manifold</span> (not a literal eigenvector basis).
                      </p>
                    </div>

                    {/* Notation */}
                    <section className="mt-5 space-y-3">
                      <h3 className="text-base font-semibold text-gray-900">1) Notation</h3>
                      <dl className="grid gap-3 md:grid-cols-2">
                        <div className="rounded border border-gray-200 bg-gray-50 p-3">
                          <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">t, interval</dt>
                          <dd className="text-sm text-gray-900">
                            Time index and user-specified sampling step (e.g. yearly, weekly). The derivative mandate references <span className="font-semibold">t − interval</span>.
                          </dd>
                        </div>
                        <div className="rounded border border-gray-200 bg-gray-50 p-3">
                          <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">K</dt>
                          <dd className="text-sm text-gray-900">Number of dominant eigenclusters surfaced for the window.</dd>
                        </div>
                        <div className="rounded border border-gray-200 bg-gray-50 p-3">
                          <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Ψ(t)</dt>
                          <dd className="text-sm text-gray-900">Latent cultural state (a point on a high-dimensional manifold).</dd>
                        </div>
                        <div className="rounded border border-gray-200 bg-gray-50 p-3">
                          <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">cₖ(t), wₖ(t)</dt>
                          <dd className="text-sm text-gray-900">
                            Prototype/centroid on the manifold and its relative salience share (0–100) at time t.
                          </dd>
                        </div>
                        <div className="rounded border border-gray-200 bg-gray-50 p-3">
                          <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Rankₖ</dt>
                          <dd className="text-sm text-gray-900">Time-integrated salience used to rank “Top 20” clusters over a window.</dd>
                        </div>
                        <div className="rounded border border-gray-200 bg-gray-50 p-3">
                          <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Δwₖ(t)</dt>
                          <dd className="text-sm text-gray-900">
                            Discrete change in salience between consecutive intervals; must be explicitly referenced in every description.
                          </dd>
                        </div>
                      </dl>
                    </section>

                    {/* Core equations */}
                    <section className="mt-5 space-y-4">
                      <h3 className="text-base font-semibold text-gray-900">2) Core formalization (rendered)</h3>

                      <div className="space-y-2">
                        <div className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">State representation (prototype mixture, not basis expansion)</div>
                        <div className="rounded border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-900 overflow-x-auto">
                          <span>Ψ(t) ≈ {'{'} (c</span>
                          <sub>k</sub>
                          <span>(t), w</span>
                          <sub>k</sub>
                          <span>(t)) {'}'} </span>
                          <sub>k = 1..K</sub>
                        </div>
                        <p className="text-sm text-gray-800">
                          At time <span className="font-semibold">t</span>, the cultural state is represented by K prototype clusters <span className="font-semibold">cₖ(t)</span>
                          with weights <span className="font-semibold">wₖ(t)</span>. This does <span className="font-semibold">not</span> assume a linear, orthogonal, basis-vector decomposition.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
                          <li>Clusters may overlap conceptually; enforce <span className="font-semibold">non-redundancy</span>, not orthogonality.</li>
                          <li>Prototype drift matters: track both salience weight changes and qualitative drift in manifestations.</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Ranking functional (top clusters over a window)</div>
                        <div className="rounded border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-900 overflow-x-auto">
                          <span>Rank</span>
                          <sub>k</sub>
                          <span> = ∫</span>
                          <sub>t₀</sub>
                          <sup>t₁</sup>
                          <span> w</span>
                          <sub>k</sub>
                          <span>(t) dt</span>
                        </div>
                        <p className="text-sm text-gray-800">
                          “Top” means large time-integrated salience across <span className="font-semibold">[t₀, t₁]</span>. A brief spike can rank below a persistent slow-burn.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Dynamics mandate (the “why” constraint)</div>
                        <div className="rounded border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-900 overflow-x-auto">
                          <span>Δw</span>
                          <sub>k</sub>
                          <span>(t) = w</span>
                          <sub>k</sub>
                          <span>(t) − w</span>
                          <sub>k</sub>
                          <span>(t − interval)</span>
                        </div>
                        <p className="text-sm text-gray-800">
                          Every time-step description must explicitly reference <span className="font-semibold">Δwₖ(t)</span> and interpret the change as a motion narrative.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
                          <li>
                            If <span className="font-semibold">Δwₖ(t) &gt;&gt; 0</span> (surge): identify catalysts (events, technologies, institutions, influential works).
                          </li>
                          <li>
                            If <span className="font-semibold">Δwₖ(t) &lt;&lt; 0</span> (decay): identify displacing forces (competing prototypes, suppression, saturation, fragmentation, absorption, agenda shifts).
                          </li>
                          <li>
                            If <span className="font-semibold">Δwₖ(t) ≈ 0</span> (stasis): analyze entrenchment / institutionalization / stable equilibrium.
                          </li>
                        </ul>
                        <div className="mt-2 rounded border border-gray-200 bg-gray-50 p-3">
                          <div className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Drift (qualitative, always required)</div>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800 mt-2">
                            <li>Did manifestations shift by geography, class, medium, demographic, vocabulary, or ideology?</li>
                            <li>Did the prototype become more coherent, fragment, or get absorbed into another prototype?</li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Distinctness (non-redundancy, not orthogonality)</div>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
                          <li>
                            Avoid near-duplicate clusters; do not require strict orthogonality (culture supports overlap).
                          </li>
                          <li>
                            Enforce distinctness via different conceptual cores, different manifestations, and ideally different dynamics/drift patterns.
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[0.72rem] uppercase tracking-[0.18em] text-gray-600">Normalization guidance (modeling choice)</div>
                        <div className="rounded border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-900 overflow-x-auto space-y-1">
                          <div>
                            <span>Full decomposition: ∑</span>
                            <sub>k</sub>
                            <span> w</span>
                            <sub>k</sub>
                            <span>(t) = 100</span>
                          </div>
                          <div>
                            <span>Subset request: ∑</span>
                            <sub>requested</sub>
                            <span> w</span>
                            <sub>k</sub>
                            <span>(t) &lt; 100</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-800">
                          If the user asks for a complete decomposition, weights are normalized to 100 at each time step. If they request only a subset, the remainder is interpreted as the long tail.
                        </p>
                      </div>
                    </section>

                    {/* Appendix */}
                    <section className="mt-6 space-y-2">
                      <h3 className="text-base font-semibold text-gray-900">3) Appendix (auditability)</h3>
                      <p className="text-sm text-gray-700">
                        The sections above are derived from the system prompt. Expand to view the raw excerpt.
                      </p>

                      <details className="rounded border border-gray-200 bg-gray-50 p-3">
                        <summary className="cursor-pointer select-none text-sm font-semibold text-gray-900">
                          Show extracted “MATHEMATICAL FORMALIZATION” excerpt
                        </summary>
                        <div className="mt-3">
                          {modelSpec.formalizationExcerpt ? (
                            <pre className="whitespace-pre-wrap rounded border border-gray-200 bg-white p-3 text-xs leading-relaxed text-gray-900">
                              {modelSpec.formalizationExcerpt}
                            </pre>
                          ) : (
                            <p className="text-sm text-amber-700">
                              Could not locate the formalization section in the current prompt text.
                            </p>
                          )}
                        </div>
                      </details>

                      <p className="text-xs text-gray-500">Source: /api/analyze/prompt_cluster.txt</p>
                    </section>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}


