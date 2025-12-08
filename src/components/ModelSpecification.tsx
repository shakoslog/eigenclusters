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
          <section className="space-y-3">
            <p>
              Culture is modeled exactly as described in the system prompt: a high-dimensional state function that maps human interaction, memory, and media onto an abstract manifold. We treat that manifold econometrically, translating the narrative rules (“focus on abstract modes, cite concrete media, enforce derivative logic”) into a formal dynamic factor model so that every generated trajectory is auditable.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg text-gray-900">1. Dynamic Factor Definition</h3>
            <p>
              The observed cultural state at time <i>t</i> is Ψ<sub>t</sub>. It is reconstructed as the sum of <i>K</i> orthogonal eigenclusters, each pairing a semantic direction <i>v<sub>k</sub>(t)</i> with a time-varying coefficient <i>λ<sub>k</sub>(t)</i> that encodes “relative cultural variance explained.”
            </p>
            <p className="text-center text-base italic text-gray-700">
              Ψ<sub>t</sub> = ∑<sub>k=1</sub><sup>K</sup> λ<sub>k</sub>(t) · v<sub>k</sub>(t)
            </p>
            <dl className="grid gap-3 md:grid-cols-2">
              <div>
                <dt className="text-[0.75rem] uppercase tracking-[0.2em] text-gray-500">v<sub>k</sub>(t)</dt>
                <dd>Unit vector locating the cluster within the semantic lattice; enforced to remain orthogonal so abstract modes never collapse into redundant topics.</dd>
              </div>
              <div>
                <dt className="text-[0.75rem] uppercase tracking-[0.2em] text-gray-500">λ<sub>k</sub>(t)</dt>
                <dd>Scalar magnitude of cultural energy. This is what the chart renders, what the JSON reports, and what the derivative mandate interrogates.</dd>
              </div>
            </dl>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg text-gray-900">2. Time-Integrated Influence</h3>
            <p>
              Clusters are ranked by the total variance they explain across the requested window. We integrate λ<sub>k</sub>(t) over T = [t<sub>0</sub>, t<sub>1</sub>] to compute R<sub>k</sub>, rewarding long-run consistency as much as short spikes.
            </p>
            <p className="text-center text-base italic text-gray-700">
              R<sub>k</sub> = ∫<sub>t₀</sub><sup>t₁</sup> λ<sub>k</sub>(t) dt
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-800">
              <li>Top-20 list = ordered by R<sub>k</sub>. Percentages sum to ~80% to reflect the finite attention pool described in the prompt.</li>
              <li>
                Each entry must follow the prescribed format: <span className="font-semibold">cluster_name [trend] (variance%)</span> with trend ∈ [&#8599;, &rarr;, &#8600;].
              </li>
              <li>Clusters can cross each other: instantaneous dominance is less important than cumulative variance.</li>
              <li>Each rank card in the UI references this metric so the analysis and visualization stay synchronized.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg text-gray-900">3. First-Difference Logic</h3>
            <p>
              Descriptions narrate motion, not static states. For every interval, we compute Δλ<sub>t</sub> = λ<sub>t</sub> − λ<sub>t−Δ</sub>; the sign determines whether we cite a catalyst, identify a displacing orthogonal factor, or discuss institutional saturation.
            </p>
            <p className="text-center text-base italic text-gray-700">Δλ<sub>t</sub> = λ<sub>t</sub> − λ<sub>t−Δ</sub></p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-800">
              <li>Δλ<sub>t</sub> ≫ 0 → document the catalyst (tech release, manifesto, policy shock, artistic rupture).</li>
              <li>Δλ<sub>t</sub> ≪ 0 → name the displacing force and the orthogonal vector that absorbed the variance.</li>
              <li>Δλ<sub>t</sub> ≈ 0 → explain saturation, institutionalization, or any deterministic repetition keeping the series flat.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg text-gray-900">4. Orthogonality & Finite Attention</h3>
            <p className="text-sm text-gray-800">
              Cov(v<sub>i</sub>, v<sub>j</sub>) ≈ 0 for i ≠ j. If two clusters co-move, we collapse them; the UI never surfaces redundant eigenvectors.
            </p>
            <p className="text-sm text-gray-800">
              ∑ Δλ<sub>k</sub>(t) ≈ 0. Cultural variance is a finite attention budget, so every surge must be financed by another cluster’s decay.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-800">
              <li>Trajectory diversity is enforced: some clusters trend secularly, some oscillate, others remain near-stationary.</li>
              <li>Crossovers are expected, especially during upheaval windows (wars, revolutions, technological ruptures).</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-lg text-gray-900">5. Prompt Alignment Checklist</h3>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-800">
              <li>Every cluster name is specific, snake_case, and globally aware; macro themes are decomposed into regionally or ideationally distinct eigenvectors.</li>
              <li>Metadata always leads with period, interval, cluster_range, measurement, and the 20-item ranking array—no extra keys.</li>
              <li>Cluster objects are keyed as <span className="font-semibold">&lt;rank&gt;_label</span>; trajectories walk year-by-year in the requested periodicity with no gaps or skipped intervals.</li>
              <li>Each time slice outputs exactly four manifestations (books, films, exhibitions, papers)—all concrete, all searchable.</li>
              <li>Descriptions are 6–10 sentences, explicitly referencing Δλ, catalysts, or displacing forces; no static snapshots allowed.</li>
              <li>Percentages for the Top-20 clusters sum to roughly eighty because the remaining variance belongs to the long tail of latent modes.</li>
              <li>The JSON specification mirrors this document verbatim, so analysts can trust that the UI, API, and model brief share a single source of truth.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
