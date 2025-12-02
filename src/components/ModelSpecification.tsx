import React from 'react';

interface ModelSpecificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModelSpecification({ isOpen, onClose }: ModelSpecificationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-white/20 rounded-xl shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-gray-900/95 border-b border-white/10 backdrop-blur">
          <h2 className="text-2xl font-bold tracking-tight text-white">Model Specification</h2>
          <button 
            onClick={onClose}
            className="p-2 text-white/60 transition-colors hover:text-white hover:bg-white/10 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="p-8 space-y-10 text-gray-300 font-serif leading-relaxed">
          {/* Intro */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">
              Here is the mathematical framework translated into a formal econometric specification, utilizing notation consistent with time-series analysis and statistical inference.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 font-sans">1. Structural Definition: Dynamic Factor Model</h3>
            <p className="mb-4">
              We define the cultural state space not as a physical manifold, but as a multivariate dynamic factor model. Let the observed cultural state at time <i className="font-serif">t</i> be represented by the vector <span className="font-serif">Ψ<sub>t</sub></span>. We approximate this state as a linear combination of <i className="font-serif">K</i> latent factors (eigenclusters).
            </p>
            
            <div className="my-6 p-6 bg-black/40 border border-white/5 rounded-lg flex justify-center overflow-x-auto">
              <div className="text-xl font-serif italic text-white">
                Ψ<sub>t</sub> ≈ <span className="not-italic">∑</span><span className="text-sm align-super ml-[-6px]">K</span><span className="text-sm align-sub ml-[-10px] mr-2">k=1</span> λ<sub>k</sub>(t) v<sub>k</sub>(t)
              </div>
            </div>

            <div className="space-y-3 pl-4 border-l-2 border-blue-500/30">
              <p>
                <span className="font-bold text-blue-300">v<sub>k</sub>(t)</span> <span className="text-white/60">(The Factor Loading Vector)</span>: 
                The unit vector in the semantic space representing the <i className="font-serif">k</i>-th orthogonal cultural component.
              </p>
              <p>
                <span className="font-bold text-blue-300">λ<sub>k</sub>(t)</span> <span className="text-white/60">(The Time-Varying Coefficient)</span>: 
                A scalar representing the explained variance or contribution of the <i className="font-serif">k</i>-th factor at time <i className="font-serif">t</i>. This is the primary variable of interest for estimation.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 font-sans">2. Rank Metric: Cumulative Explained Variance</h3>
            <p className="mb-4">
              Ranking is determined by the integral of the variance function over the domain <span className="font-serif">T = [t<sub>0</sub>, t<sub>1</sub>]</span>. We define the rank statistic <span className="font-serif">R<sub>k</sub></span> for the <i className="font-serif">k</i>-th cluster as the total area under the coefficient curve, distinguishing transient shocks from structural trends.
            </p>

            <div className="my-6 p-6 bg-black/40 border border-white/5 rounded-lg flex justify-center overflow-x-auto">
              <div className="text-xl font-serif italic text-white">
                R<sub>k</sub> = <span className="not-italic text-2xl">∫</span><span className="text-sm align-super ml-[-6px]">t<sub>1</sub></span><span className="text-sm align-sub ml-[-10px] mr-2">t<sub>0</sub></span> λ<sub>k</sub>(t) dt
              </div>
            </div>

            <div className="pl-4 border-l-2 border-blue-500/30">
              <p>
                <span className="font-bold text-white/80">Interpretation:</span> <span className="font-serif">R<sub>k</sub></span> represents the marginal contribution of factor <i className="font-serif">k</i> to the total systemic variance over the observed interval.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 font-sans">3. Dynamics: First-Difference Analysis & Identification Strategy</h3>
            <p className="mb-4">
              Instead of "physics" or "motion," we analyze the first difference of the coefficient series. For any time <i className="font-serif">t</i>, we examine the discrete change <span className="font-serif">Δλ<sub>t</sub></span>:
            </p>

            <div className="my-6 p-6 bg-black/40 border border-white/5 rounded-lg flex justify-center overflow-x-auto">
              <div className="text-xl font-serif italic text-white">
                Δλ<sub>t</sub> = λ<sub>t</sub> - λ<sub>t-1</sub>
              </div>
            </div>

            <p className="mb-6">
              The framework imposes strict identification restrictions on the interpretation of <span className="font-serif">Δλ<sub>t</sub></span> based on its sign and magnitude.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4 bg-white/5 rounded border border-white/10">
                <h4 className="font-bold text-green-400 mb-2 font-sans">Case A: Positive Structural Break</h4>
                <div className="font-serif text-center mb-3 italic">Δλ<sub>t</sub> ≫ 0</div>
                <ul className="text-sm space-y-2">
                  <li><strong className="text-white">Condition:</strong> Significant positive deviation.</li>
                  <li><strong className="text-white">Requirement:</strong> Implies exogenous shock or instrumental variable <i className="font-serif">Z<sub>t</sub></i> (e.g., tech innovation).</li>
                  <li><strong className="text-white">Mandate:</strong> Isolate the exogenous variable <i className="font-serif">Z<sub>t</sub></i>.</li>
                </ul>
              </div>

              <div className="p-4 bg-white/5 rounded border border-white/10">
                <h4 className="font-bold text-red-400 mb-2 font-sans">Case B: Negative Structural Trend</h4>
                <div className="font-serif text-center mb-3 italic">Δλ<sub>t</sub> ≪ 0</div>
                <ul className="text-sm space-y-2">
                  <li><strong className="text-white">Condition:</strong> Significant negative deviation.</li>
                  <li><strong className="text-white">Requirement:</strong> Implies substitution effects. Decline of <i className="font-serif">k</i> correlates with rise of orthogonal factor <i className="font-serif">j</i>.</li>
                  <li><strong className="text-white">Mandate:</strong> Identify the substitute factor <i className="font-serif">v<sub>j</sub></i>.</li>
                </ul>
              </div>

              <div className="p-4 bg-white/5 rounded border border-white/10">
                <h4 className="font-bold text-blue-400 mb-2 font-sans">Case C: Stationarity / Equilibrium</h4>
                <div className="font-serif text-center mb-3 italic">Δλ<sub>t</sub> ≈ 0</div>
                <ul className="text-sm space-y-2">
                  <li><strong className="text-white">Condition:</strong> Mean and variance constant over <i className="font-serif">(t, t+ε)</i>.</li>
                  <li><strong className="text-white">Requirement:</strong> Factor has reached saturation/institutionalization.</li>
                  <li><strong className="text-white">Mandate:</strong> Describe transition to deterministic constant.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-xl font-bold text-white mb-4 font-sans">4. Constraints: Orthogonality & Finite Capacity</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-white/90 mb-2 font-sans">Orthogonality Condition</h4>
                <p className="mb-3">To ensure distinct cluster definitions, the covariance between any two factor vectors must approach zero:</p>
                <div className="p-4 bg-black/40 border border-white/5 rounded-lg flex justify-center mb-3">
                  <div className="text-lg font-serif italic text-white">
                    Cov(v<sub>i</sub>, v<sub>j</sub>) ≈ 0 <span className="text-sm not-italic ml-4">for i ≠ j</span>
                  </div>
                </div>
                <p className="text-sm text-white/70 italic">
                  Implication: Multicollinearity is forbidden. If two clusters covary perfectly, they are the same latent factor.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white/90 mb-2 font-sans">The Zero-Sum Constraint (Finite Resource Constraint)</h4>
                <p className="mb-3">The total variance capacity of the system is finite.</p>
                <div className="p-4 bg-black/40 border border-white/5 rounded-lg flex justify-center mb-3">
                  <div className="text-lg font-serif italic text-white">
                    <span className="not-italic">∑</span><span className="text-sm align-super ml-[-6px]">K</span><span className="text-sm align-sub ml-[-10px] mr-2">k=1</span> Δλ<sub>k</sub>(t) ≈ 0
                  </div>
                </div>
                <p className="text-sm text-white/70 italic">
                  Implication: An increase in variance for cluster <i className="font-serif">i</i> necessitates a decrease in variance for the remaining clusters. Descriptions must account for this opportunity cost.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
