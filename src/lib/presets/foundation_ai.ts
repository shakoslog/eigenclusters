import { PresetConfig } from './types';

export const foundationAIData = {
  "metadata": {
    "period": "1990-2025",
    "interval": "2 years",
    "cluster_range": "1-1",
    "measurement": "relative cultural variance explained (0-100)",
    "top_20_clusters": [
      "1_deep_connectionist_approximation [\u2197] (18.5%)",
      "2_kernel_margin_maximization [\u2198] (10.2%)",
      "3_probabilistic_graphical_models [\u2198] (9.8%)",
      "4_symbolic_logic_programming [\u2198] (8.5%)",
      "5_stochastic_optimization_dynamics [\u2197] (7.2%)",
      "6_sequence_transduction_attention [\u2197] (6.8%)",
      "7_reinforcement_control_theory [\u2192] (6.1%)",
      "8_statistical_learning_theory [\u2192] (5.5%)",
      "9_generative_latent_manifolds [\u2197] (5.2%)",
      "10_evolutionary_computation [\u2192] (3.1%)",
      "11_sparse_coding_compressed_sensing [\u2198] (2.9%)",
      "12_geometric_graph_learning [\u2197] (2.8%)",
      "13_causal_inference_structural_models [\u2192] (2.5%)",
      "14_convex_optimization_duality [\u2198] (2.4%)",
      "15_distributed_representation_semantics [\u2197] (2.2%)",
      "16_fuzzy_logic_systems [\u2198] (1.8%)",
      "17_neuromorphic_spiking_dynamics [\u2192] (1.5%)",
      "18_algorithmic_information_theory [\u2192] (1.2%)",
      "19_swarm_intelligence [\u2192] (1.0%)",
      "20_automated_reasoning_proving [\u2192] (0.8%)"
    ]
  },
  "clusters": {
    "1_deep_connectionist_approximation": {
      "name": "Deep Connectionist Approximation",
      "description": "This eigencluster represents the paradigm of learning high-dimensional function approximators via hierarchical layers of differentiable non-linearities. Originally marginalized in favor of convex methods, this cluster embodies the shift from manual feature engineering to end-to-end representation learning. Its trajectory maps the 'Bitter Lesson'\u2014that general methods utilizing computation leverage scale better than human domain knowledge\u2014evolving from simple backpropagation on toy problems to massive-scale foundational models defining the modern era.",
      "trajectory": {
        "1990": {
          "salience_share": 12,
          "description": "At the start of the decade, the variance for connectionist approaches hovered at a modest baseline, driven primarily by the residual energy of the PDP (Parallel Distributed Processing) group's successes in the late 80s. While backpropagation had been formalized, the field was experiencing a friction against the limitations of available compute and the emerging theoretical skepticism regarding local minima in non-convex landscapes. The dominant catalyst in this interval was the practical demonstration of Convolutional Neural Networks (CNNs) by LeCun, which proved that imposed inductive biases could solve specific topological problems like digit recognition. However, the cluster faced significant headwinds from the rising dominance of symbolic AI and the nascent statistical rigor of early kernel methods, preventing a breakout. The community remained fractured between biological plausibility and engineering utility.",
          "key_manifestations": [
            "LeCun, Y., et al. (1990). 'Handwritten Digit Recognition with a Back-Propagation Network'",
            "Elman, J. L. (1990). 'Finding Structure in Time' (Cognitive Science)",
            "Poggio, T., & Girosi, F. (1990). 'Networks for Approximation and Learning' (Proceedings of the IEEE)",
            "Hornsby, G. (1990). 'Minsky and Papert's Perceptrons: Expanded Edition' (Review context)"
          ]
        },
        "1992": {
          "salience_share": 9,
          "description": "The variance experienced a contraction of -3% as the cluster was actively displaced by the rising 'Kernel Margin Maximization' cluster. The introduction of Support Vector Machines (SVMs) provided a mathematically rigorous framework with guarantees on global optimality, which cannibalized the academic attention previously afforded to neural networks. Researchers began abandoning connectionism due to the 'black box' opacity and the vanishing gradient problem in recurrent architectures, which made training deep networks practically impossible. Despite this decline, a crucial latent seed was planted with the theoretical exploration of Boltzmann machines, though they remained computationally intractable. The motion here was one of retrenchment, where connectionism was relegated to a niche sub-field while convex optimization took center stage.",
          "key_manifestations": [
            "Boser, B. E., Guyon, I. M., & Vapnik, V. N. (1992). 'A Training Algorithm for Optimal Margin Classifiers'",
            "Neal, R. M. (1992). 'Bayesian Training of Backpropagation Networks'",
            "MacKay, D. J. (1992). 'A Practical Bayesian Framework for Backprop Networks'",
            "Bridle, J. S. (1992). 'Probabilistic Interpretation of Feedforward Classification Network Outputs'"
          ]
        },
        "1994": {
          "salience_share": 7,
          "description": "The decline continued, with variance dropping another 2% as the 'Probabilistic Graphical Models' cluster began its ascent. The field's focus shifted heavily toward Bayesian networks and Hidden Markov Models, which offered transparent probabilistic semantics that neural networks lacked. Connectionism suffered from a lack of effective regularization techniques, leading to overfitting on the small datasets of the era. However, a significant countervailing force prevented total collapse: the earliest formulations of Long Short-Term Memory (LSTM) began circulating in preprint circles, addressing the vanishing gradient problem. This period represented the nadir of the 'AI Winter' for neural methods, where publication in major conferences became increasingly difficult for pure backpropagation research.",
          "key_manifestations": [
            "Bengio, Y., et al. (1994). 'Learning Long-Term Dependencies with Gradient Descent is Difficult'",
            "Nowlan, S. J., & Hinton, G. E. (1994). 'Simplifying Neural Networks by Soft Weight-Sharing'",
            "Jordan, M. I., & Jacobs, R. A. (1994). 'Hierarchical Mixtures of Experts and the EM Algorithm'",
            "Tesauro, G. (1994). 'TD-Gammon, a Self-Teaching Backgammon Program'"
          ]
        },
        "1996": {
          "salience_share": 6,
          "description": "Variance largely plateaued at a low ebb, indicating a state of deep entrenchment for alternative methodologies like SVMs and Random Forests. The Delta_lambda was negligible (-1%), suggesting that connectionism had reached a hard core of devotees\u2014the 'Canadian Mafia' of Hinton, Bengio, and LeCun\u2014who continued to refine the theoretical underpinnings despite broad academic disinterest. The release of the LSTM paper provided a critical theoretical stabilization, offering a viable path for sequence learning that would not be fully exploited for another decade. The 'Displacing Force' remained the overwhelming success of statistical learning theory, which offered bounds on generalization error that neural networks could not match. The field was effectively split, with connectionism viewed as an interesting biological analogy rather than a serious engineering discipline.",
          "key_manifestations": [
            "Hochreiter, S., & Schmidhuber, J. (1997). 'Long Short-Term Memory'",
            "Wolpert, D. H. (1996). 'The Lack of A Priori Distinctions Between Learning Algorithms'",
            "Freund, Y., & Schapire, R. E. (1996). 'Experiments with a New Boosting Algorithm' (AdaBoost)",
            "Olshausen, B. A., & Field, D. J. (1996). 'Emergence of Simple-Cell Receptive Field Properties by Learning a Sparse Code'"
          ]
        },
        "1998": {
          "salience_share": 8,
          "description": "A slight uptick in variance (+2%) signaled the first tremors of a resurgence, catalyzed by the successful industrial application of LeNet-5 for check reading by banks. This provided an undeniable existence proof that gradient-based learning could outperform hand-crafted feature extractors in specific, high-value domains. While the 'Kernel Methods' cluster was still dominant in general classification tasks, the specialized success of CNNs created a protected niche for geometric invariance learning. This interval marks the beginning of the divergence between 'Computer Vision' (increasingly neural) and 'General Machine Learning' (still dominated by kernel/probabilistic methods). The motion was driven by practical utility in narrow domains rather than a broad theoretical shift.",
          "key_manifestations": [
            "LeCun, Y., et al. (1998). 'Gradient-Based Learning Applied to Document Recognition'",
            "Sutton, R. S., & Barto, A. G. (1998). 'Reinforcement Learning: An Introduction' (Foundational text)",
            "Dreyfus, G., et al. (1998). 'Ordering Features with the Probe Method'",
            "Platt, J. (1998). 'Sequential Minimal Optimization: A Fast Algorithm for Training Support Vector Machines'"
          ]
        },
        "2000": {
          "salience_share": 6,
          "description": "The turn of the millennium saw a regression (-2%) as the 'Convex Optimization' and 'Kernel Machines' clusters reached their zenith. The introduction of Gaussian Processes and advanced SVM kernels provided a flexible, non-parametric framework that seemed to render parametric neural networks obsolete. Neural NIPS workshops were sparsely attended; the community perception was that neural nets were finicky, required 'black magic' to tune hyperparameters, and lacked the elegance of the kernel trick. The displacing force was the mathematical clarity of statistical learning theory, which convinced a generation of PhD students to focus on bounds and convexity rather than architectural engineering. Connectionism was effectively dormant in the top-tier literature.",
          "key_manifestations": [
            "Ng, A. Y., & Jordan, M. I. (2001). 'On Discriminative vs. Generative Classifiers'",
            "Lafferty, J., et al. (2001). 'Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data'",
            "Sch\u00f6lkopf, B., et al. (2000). 'New Support Vector Algorithms'",
            "Breiman, L. (2001). 'Random Forests'"
          ]
        },
        "2002": {
          "salience_share": 6,
          "description": "Stasis prevailed with variance holding at 6%. The field of machine learning was dominated by Bayesian non-parametrics and graphical models. However, underneath this stability, a critical 'pre-scientific' accumulation of diverse insights was occurring within the connectionist enclave. Contrastive Divergence and early work on energy-based models were being formulated, attempting to solve the difficulty of training deep architectures. The lack of movement in variance reflects a 'incubation period' where the theoretical tools for the next revolution were being sharpened without yet producing state-of-the-art results on benchmarks. The institutional entrenchment of the kernel community made it difficult for neural papers to be accepted, forcing the innovation into alternative venues.",
          "key_manifestations": [
            "Hinton, G. E. (2002). 'Training Products of Experts by Minimizing Contrastive Divergence'",
            "Bengio, Y., et al. (2003). 'A Neural Probabilistic Language Model'",
            "Smolensky, P. (re-published context). 'Information Processing in Dynamical Systems: Foundations of Harmony Theory'",
            "Bach, F. R., & Jordan, M. I. (2002). 'Kernel Independent Component Analysis'"
          ]
        },
        "2004": {
          "salience_share": 7,
          "description": "A minor positive delta (+1%) appeared, driven largely by Bengio's work on Neural Probabilistic Language Models, which demonstrated that distributed representations (embeddings) could solve the curse of dimensionality in discrete spaces better than n-grams. This was a crucial orthogonal vector to the dominant 'Symbolic/Logic' approaches in NLP. While still not a dominant paradigm, the concept of 'word embeddings' began to show that dense vectors could capture semantic meaning in a way that sparse vectors could not. This interval represents the first cracking of the ice for NLP, establishing a beachhead that would eventually lead to the transformer era, though at the time it was computationally prohibitively expensive.",
          "key_manifestations": [
            "Carreira-Perpinan, M. A., & Hinton, G. E. (2005). 'On Contrastive Divergence Learning'",
            "Collobert, R., & Bengio, S. (2004). 'Links Between Perceptrons, MLPs and SVMs'",
            "Maaten, L. v. d., & Hinton, G. (2008). 'Visualizing Data using t-SNE' (Early drafts/talks)",
            "Salakhutdinov, R., & Roweis, S. (2003). 'Adaptive Overrelaxation for ICA'"
          ]
        },
        "2006": {
          "salience_share": 15,
          "description": "A significant surge (+8%) marked the beginning of the 'Deep Learning' era. The catalyst was the publication of Hinton's work on Deep Belief Networks (DBNs) and layer-wise greedy pre-training. This paper broke the psychological and technical barrier that 'deep networks cannot be trained.' By treating each layer as a Restricted Boltzmann Machine (RBM) and stacking them, researchers found a way to initialize weights effectively before fine-tuning. This 'Rebranding' of neural networks to Deep Learning injected massive energy into the cluster, drawing attention back from kernel methods. The variance shift was driven by the sudden realization that depth was accessible, offering a potential path to learning complex hierarchies of features automatically.",
          "key_manifestations": [
            "Hinton, G. E., Osindero, S., & Teh, Y. W. (2006). 'A Fast Learning Algorithm for Deep Belief Nets'",
            "Hinton, G. E., & Salakhutdinov, R. R. (2006). 'Reducing the Dimensionality of Data with Neural Networks'",
            "Bengio, Y., et al. (2007). 'Greedy Layer-Wise Training of Deep Networks'",
            "Ranzato, M., et al. (2007). 'Sparse Feature Learning for Deep Belief Networks'"
          ]
        },
        "2008": {
          "salience_share": 18,
          "description": "The momentum continued with a +3% variance increase as the community began to digest the implications of pre-training and auto-encoders. The specific motion in this interval was the expansion of deep learning from a curiosity to a contender in voice recognition and vision. Collobert and Weston's work on unified architectures for NLP provided further evidence that a single end-to-end neural system could replace complex pipelines of task-specific engineering. However, the cluster was still constrained by CPU limitations; training these models took weeks. The 'Displacing Force' acting against it was the continued robustness of SIFT/HOG features in computer vision, which still outperformed neural nets on standard datasets like Caltech-101.",
          "key_manifestations": [
            "Collobert, R., & Weston, J. (2008). 'A Unified Architecture for Natural Language Processing'",
            "Vincent, P., et al. (2008). 'Extracting and Composing Robust Features with Denoising Autoencoders'",
            "Lee, H., et al. (2009). 'Convolutional Deep Belief Networks for Scalable Unsupervised Learning of Hierarchical Representations'",
            "Tieleman, T. (2008). 'Training Restricted Boltzmann Machines using Approximations to the Likelihood Gradient'"
          ]
        },
        "2010": {
          "salience_share": 25,
          "description": "Variance accelerated sharply (+7%) as the 'GPU Compute' catalyst intersected with algorithmic advances. Researchers realized that consumer-grade GPUs (specifically CUDA) could accelerate matrix multiplications by orders of magnitude compared to CPUs. This removed the primary bottleneck for training large CNNs and MLPs. The specific breakthrough in this interval was the application of Deep Neural Networks (DNNs) to speech recognition, where they achieved significant reductions in Word Error Rate compared to the entrenched Gaussian Mixture Models (GMMs). This was the first domain where 'Deep Learning' unambiguously dethroned the state-of-the-art, validating the cluster's core hypothesis: more data + more compute + bigger models = better performance.",
          "key_manifestations": [
            "Nair, V., & Hinton, G. E. (2010). 'Rectified Linear Units Improve Restricted Boltzmann Machines'",
            "Dahl, G. E., et al. (2011). 'Context-Dependent Pre-Trained Deep Neural Networks for Large-Vocabulary Speech Recognition'",
            "Glorot, X., & Bengio, Y. (2010). 'Understanding the Difficulty of Training Deep Feedforward Neural Networks'",
            "Ciresan, D. C., et al. (2010). 'Deep, Big, Simple Neural Nets for Handwritten Digit Recognition'"
          ]
        },
        "2012": {
          "salience_share": 45,
          "description": "A massive explosive event (+20%) occurred, fundamentally reordering the topology of the field. The catalyst was 'AlexNet' destroying the competition at the ImageNet Large Scale Visual Recognition Challenge. This singular event proved that end-to-end supervised learning with CNNs on large datasets (ImageNet) was vastly superior to the best hand-crafted feature systems (SIFT/Fisher Vectors). The 'Pre-training' paradigm began to fade in favor of pure supervised learning with Rectified Linear Units (ReLU) and Dropout for regularization. This interval marked the death knell for the 'Feature Engineering' era in computer vision. The cluster cannibalized almost all variance from the 'Kernel Methods' and 'Computer Vision (Classical)' clusters, as researchers rushed to adopt the new paradigm.",
          "key_manifestations": [
            "Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). 'ImageNet Classification with Deep Convolutional Neural Networks'",
            "Hinton, G. E., et al. (2012). 'Deep Neural Networks for Acoustic Modeling in Speech Recognition'",
            "Mikolov, T., et al. (2013). 'Distributed Representations of Words and Phrases and their Compositionality' (Word2Vec)",
            "Srivastava, N., et al. (2014). 'Dropout: A Simple Way to Prevent Neural Networks from Overfitting'"
          ]
        },
        "2014": {
          "salience_share": 60,
          "description": "The cluster continued its aggressive expansion (+15%) by diversifying into generative models and sequence-to-sequence learning. The invention of Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs) opened a new manifold for creating data, not just classifying it. Simultaneously, the Sequence-to-Sequence (Seq2Seq) framework with LSTM demonstrated that neural networks could handle variable-length input and output, revolutionizing machine translation. The 'Displacing Force' was effectively nonexistent; instead, the cluster was absorbing adjacent fields like Control Theory (via Deep Q-Learning) and Signal Processing. The introduction of the Attention mechanism (initially for RNNs) sowed the seeds for the next major architectural shift.",
          "key_manifestations": [
            "Goodfellow, I., et al. (2014). 'Generative Adversarial Nets'",
            "Sutskever, I., et al. (2014). 'Sequence to Sequence Learning with Neural Networks'",
            "Bahdanau, D., et al. (2014). 'Neural Machine Translation by Jointly Learning to Align and Translate'",
            "Kingma, D. P., & Welling, M. (2013). 'Auto-Encoding Variational Bayes'"
          ]
        },
        "2016": {
          "salience_share": 72,
          "description": "Variance climbed further (+12%) as the 'scale' hypothesis gained empirical rigor. The victory of AlphaGo over Lee Sedol served as a high-visibility catalyst, demonstrating that Deep Reinforcement Learning (combining this cluster with Cluster 7) could solve intuition-heavy problems previously thought to be decades away. Architecturally, the emergence of ResNets allowed for training networks with hundreds of layers, solving the degradation problem. The field began to coalesce around a few standard toolkits (TensorFlow, PyTorch), creating a standardized 'stack' that lowered the barrier to entry and accelerated research velocity. The cluster was now the default assumption for almost all AI research.",
          "key_manifestations": [
            "He, K., et al. (2016). 'Deep Residual Learning for Image Recognition'",
            "Silver, D., et al. (2016). 'Mastering the Game of Go with Deep Neural Networks and Tree Search'",
            "Vaswani, A., et al. (2017). 'Attention Is All You Need'",
            "Oord, A. v. d., et al. (2016). 'WaveNet: A Generative Model for Raw Audio'"
          ]
        },
        "2018": {
          "salience_share": 82,
          "description": "The trajectory experienced a pivotal inflection (+10%) with the 'Transformer' architecture fully displacing RNNs/LSTMs as the dominant sequence model. The release of BERT and GPT-1 marked the beginning of the 'Foundation Model' era (though the term would be coined later). The key motion was the shift from task-specific architectures to 'Pre-train once, fine-tune everywhere.' This homogenization of the field meant that a single architecture (Transformer) could solve NLP, Vision, and biological sequence problems. The variance explained is extremely high because the 'orthogonality' of other approaches collapsed; almost all competitive research was now a derivative of the Transformer or ResNet backbones.",
          "key_manifestations": [
            "Devlin, J., et al. (2018). 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding'",
            "Radford, A., et al. (2018). 'Improving Language Understanding by Generative Pre-Training'",
            "Peters, M. E., et al. (2018). 'Deep Contextualized Word Representations' (ELMo)",
            "Brock, A., et al. (2018). 'Large Scale GAN Training for High Fidelity Natural Image Synthesis'"
          ]
        },
        "2020": {
          "salience_share": 88,
          "description": "The variance increased again (+6%) driven by the 'Scaling Laws' revelation. Kaplan et al. provided the empirical formalism that performance scales as a power law with compute, dataset size, and parameter count. This effectively industrialized the field, shifting the focus from clever architectural tweaks to massive infrastructure engineering. GPT-3 demonstrated few-shot learning capabilities that were previously considered impossible, effectively cannibalizing the 'Few-Shot Learning' and 'Meta-Learning' sub-clusters into the main scaling paradigm. The cluster now exhibited a gravitational pull that absorbed even disparate fields like biology (AlphaFold 2).",
          "key_manifestations": [
            "Brown, T. B., et al. (2020). 'Language Models are Few-Shot Learners' (GPT-3)",
            "Kaplan, J., et al. (2020). 'Scaling Laws for Neural Language Models'",
            "Jumper, J., et al. (2021). 'Highly Accurate Protein Structure Prediction with AlphaFold'",
            "Ho, J., et al. (2020). 'Denoising Diffusion Probabilistic Models'"
          ]
        },
        "2022": {
          "salience_share": 92,
          "description": "The cluster reached near-total saturation (+4%) in terms of research attention, driven by the 'Alignment and Instruction Tuning' revolution. The catalyst was ChatGPT (InstructGPT), which showed that raw compute power needed to be steered via Reinforcement Learning from Human Feedback (RLHF) to be useful. This introduced a new sub-dynamic of 'human-preference optimization' into the loss functions. Diffusion models also completely displaced GANs for image generation, proving that iterative refinement processes were more stable. The 'Displacing Force' for other clusters was absolute; non-deep learning papers became virtually non-existent in major conferences.",
          "key_manifestations": [
            "Ouyang, L., et al. (2022). 'Training Language Models to Follow Instructions with Human Feedback'",
            "Hoffmann, J., et al. (2022). 'Training Compute-Optimal Large Language Models' (Chinchilla)",
            "Rombach, R., et al. (2022). 'High-Resolution Image Synthesis with Latent Diffusion Models'",
            "Wei, J., et al. (2022). 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models'"
          ]
        },
        "2024": {
          "salience_share": 95,
          "description": "Current trajectory shows continued dominance (+3%) but with a shift towards 'Efficiency and Reasoning.' The sheer cost of scaling led to a focus on Mixture of Experts (MoE) and sparse architectures to decouple inference cost from parameter count. The motion is defined by the quest for 'System 2' thinking\u2014moving beyond next-token prediction to multi-step reasoning and planning. The rise of multimodal native models (Gemini, GPT-4o) merged the previously distinct sub-manifolds of Vision and Language into a singular token space. The only countervailing force is the emerging bottleneck of data scarcity ('running out of internet'), pushing research toward synthetic data generation.",
          "key_manifestations": [
            "Team, G. (2024). 'Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context'",
            "Dubey, A., et al. (2024). 'The Llama 3 Herd of Models'",
            "Achiam, J., et al. (2023). 'GPT-4 Technical Report'",
            "Mialon, G., et al. (2024). 'GraphRAG: Retrieving and Generating with Graph Neural Networks'"
          ]
        }
      }
    },
    "2_kernel_margin_maximization": {
      "name": "Kernel Margin Maximization",
      "description": "This eigencluster represents the era of 'convex certainty,' dominated by Support Vector Machines (SVMs) and the application of the 'kernel trick' to map low-dimensional inputs into high-dimensional feature spaces where linear separation is possible. Rooted in Vapnik's Statistical Learning Theory, this cluster prioritized mathematical guarantees on generalization bounds (VC dimension) over the heuristic tinkerability of neural networks. For nearly two decades, it represented the gold standard of machine learning\u2014offering a global optimum solution to classification problems\u2014before faltering under the computational complexity of massive datasets and the superior representational capacity of deep learning.",
      "trajectory": {
        "1990": {
          "salience_share": 5,
          "description": "At the start of the simulation window, this cluster was in a nascent, high-potential state, originating primarily from the theoretical work of Vladimir Vapnik at AT&T Bell Labs. The variance was low but rising (+2%) as the theoretical foundations of Statistical Learning Theory began to permeate the Western academic consciousness, challenging the dominant logic-based and early connectionist paradigms. The 'force of motion' was the migration of Soviet-era mathematical rigor into US computer science departments. The cluster was characterized by a focus on 'optimal hyperplanes,' distinguishing itself from the ad-hoc decision boundaries of early neural nets.",
          "key_manifestations": [
            "Poggio, T., & Girosi, F. (1990). 'Networks for Approximation and Learning' (bridge from regularization to kernels)",
            "Vapnik, V. (1989/1990). 'Statistical Nature of Learning Processes' (English translation impact)",
            "Bennett, K. P., & Mangasarian, O. L. (1990). 'Neural Network Training via Linear Programming' (Early margin concepts)",
            "Wahba, G. (1990). 'Spline Models for Observational Data' (Foundational RKHS theory)"
          ]
        },
        "1992": {
          "salience_share": 12,
          "description": "A sharp upward surge (+7%) occurred with the publication of the seminal COLT paper by Boser, Guyon, and Vapnik, effectively birthing the Support Vector Machine. This event served as the primary catalyst, offering a computationally tractable way to implement the kernel trick for pattern recognition. The variance expansion was driven by the immediate realization that this method solved the 'curse of dimensionality' by depending only on dot products. This mathematically elegant formulation began to aggressively displace the 'Neural Network' cluster, which was suffering from a lack of theoretical transparency.",
          "key_manifestations": [
            "Boser, B. E., Guyon, I. M., & Vapnik, V. N. (1992). 'A Training Algorithm for Optimal Margin Classifiers'",
            "Guyon, I., et al. (1992). 'Structural Risk Minimization for Character Recognition'",
            "Vapnik, V. (1992). 'Principles of Risk Minimization for Learning Theory'",
            "Darken, C., et al. (1992). 'Learning Rate Schedules for Stochastic Gradient Descent' (Counterpoint context)"
          ]
        },
        "1994": {
          "salience_share": 18,
          "description": "The cluster continued its rapid ascent (+6%) with the introduction of the 'Soft Margin' formulation. This innovation allowed SVMs to handle non-separable data (noise), making them robust enough for real-world application. The force of motion here was the transition from theoretical curiosity to practical utility; the soft margin parameter 'C' became the most tuned hyperparameter in machine learning. This robustness catalyzed the cluster's spread into bioinformatics and text classification, effectively displacing decision trees and earlier rule-based systems in high-dimensional domains.",
          "key_manifestations": [
            "Cortes, C., & Vapnik, V. (1995). 'Support-Vector Networks' (Preprint/submission 1994)",
            "Sung, K. K., & Poggio, T. (1994). 'Example-Based Learning for View-Based Human Face Detection'",
            "Shawe-Taylor, J., et al. (1994). 'The VC Dimension of Structural Risk Minimization'",
            "Hastie, T., et al. (1994). 'Flexible Discriminant Analysis by Optimal Scoring'"
          ]
        },
        "1996": {
          "salience_share": 24,
          "description": "Variance expanded further (+6%) as the methodology generalized beyond classification into regression (SVR) and unsupervised learning. The release of Vapnik's definitive text, 'The Nature of Statistical Learning Theory,' institutionalized the field, providing a canonical bible for graduate students. The motion was characterized by 'kernelization'\u2014the systematic re-derivation of existing linear algorithms (PCA, Fisher Discriminant) into non-linear kernel versions. This effectively monopolized the 'non-linear' niche, pushing neural networks to the periphery of the variance plot.",
          "key_manifestations": [
            "Drucker, H., et al. (1996). 'Support Vector Regression Machines'",
            "Sch\u00f6lkopf, B., et al. (1996). 'Input Space Versus Feature Space in SVM'",
            "Vapnik, V. (1996). 'The Nature of Statistical Learning Theory' (Springer)",
            "Burges, C. J. C. (1996). 'Simplified Support Vector Decision Rules'"
          ]
        },
        "1998": {
          "salience_share": 30,
          "description": "The cluster approached its zenith (+6%) with the resolution of its primary bottleneck: training speed. The Sequential Minimal Optimization (SMO) algorithm by Platt removed the need for quadratic programming solvers, allowing SVMs to be trained on personal computers without specialized math libraries. This democratization was a massive accelerant, making SVMs the default 'off-the-shelf' classifier. The cluster now exerted dominant explanatory power over the 'Pattern Recognition' field, with major conferences like NIPS seeing a plurality of papers utilizing kernel methods.",
          "key_manifestations": [
            "Platt, J. (1998). 'Sequential Minimal Optimization: A Fast Algorithm for Training Support Vector Machines'",
            "Sch\u00f6lkopf, B., et al. (1998). 'Nonlinear Component Analysis as a Kernel Eigenvalue Problem' (Kernel PCA)",
            "Joachims, T. (1998). 'Text Categorization with Support Vector Machines'",
            "Weston, J., & Watkins, C. (1998). 'Multi-Class Support Vector Machines'"
          ]
        },
        "2000": {
          "salience_share": 35,
          "description": "The cluster reached peak saturation (+5%), becoming the standard against which all other methods were benchmarked. The 'Kernel Trick' was now applied ubiquitously, from string kernels for DNA sequencing to graph kernels for social networks. The variance growth slowed slightly as the field shifted from fundamental discovery to application and refinement (feature space engineering). The entrenchment was deep; entire workshops were dedicated solely to designing custom kernels for specific data types, creating a micro-economy of academic citations around kernel engineering.",
          "key_manifestations": [
            "Cristianini, N., & Shawe-Taylor, J. (2000). 'An Introduction to Support Vector Machines'",
            "Duffy, N., & Collins, M. (2000). 'Convolution Kernels for Natural Language'",
            "Tax, D. M., & Duin, R. P. (2004). 'Support Vector Data Description' (One-class SVM, work circa 1999/2000)",
            "Elisseeff, A., & Pontil, M. (2002). 'Leave-One-Out Error and Stability of Learning Algorithms' (Drafts active 2000)"
          ]
        },
        "2002": {
          "salience_share": 34,
          "description": "For the first time, variance stagnated and showed a slight tremor of contraction (-1%). While still dominant, the O(N^2) or O(N^3) scaling behavior of kernel methods began to friction against the growing size of internet-era datasets. The 'Displacing Force' was subtle but growing: the sheer volume of data in web-scale applications (like Google search ranking) favored simpler, linear methods or the nascent ensemble methods (Random Forests), which scaled linearly. The cluster turned inward, focusing on 'sparse' approximations and 'online' learning to survive the data deluge.",
          "key_manifestations": [
            "Lodhi, H., et al. (2002). 'String Kernels for Text Classification'",
            "Sch\u00f6lkopf, B., & Smola, A. J. (2002). 'Learning with Kernels'",
            "Vishwanathan, S. V. N., & Smola, A. J. (2002). 'Fast Kernels for String and Graph Matching'",
            "Chapelle, O., et al. (2002). 'Cluster Kernels for Semi-Supervised Learning'"
          ]
        },
        "2004": {
          "salience_share": 30,
          "description": "A definite downward trend emerged (-4%) as 'Ensemble Methods' (Random Forests, Boosting) began to cannibalize the tabular data market. While SVMs offered beautiful theory, Random Forests often provided equal performance with zero tuning and better scalability. Additionally, the 'Probabilistic Graphical Models' cluster was encroaching on the structured data front. The kernel community responded with 'Structured SVMs' (SVM-Struct), attempting to handle complex outputs, but the momentum was shifting away from pure margin maximization toward probabilistic interpretation and ensemble resilience.",
          "key_manifestations": [
            "Tsochantaridis, I., et al. (2004). 'Support Vector Machine Learning for Interdependent and Structured Output Spaces'",
            "Taskar, B., et al. (2004). 'Max-Margin Markov Networks'",
            "Shawe-Taylor, J., & Cristianini, N. (2004). 'Kernel Methods for Pattern Analysis'",
            "Bach, F. R., et al. (2004). 'Multiple Kernel Learning, Conic Duality, and the SMO Algorithm'"
          ]
        },
        "2006": {
          "salience_share": 25,
          "description": "The decline accelerated (-5%) coinciding with the 'Deep Learning' breakthrough (Hinton's DBNs). The psychological dominance of the convex optimization paradigm was cracked. Researchers realized that non-convex neural networks, despite lacking theoretical guarantees, were beginning to outperform kernel methods on perceptual tasks (MNIST variations). The 'force of motion' was a migration of talent: graduate students who would have previously written papers on new kernels began investigating RBMs. The kernel cluster was forced into a defensive posture, emphasizing its theoretical safety over raw performance.",
          "key_manifestations": [
            "Joachims, T. (2006). 'Training Linear SVMs in Linear Time'",
            "Smola, A., et al. (2007). 'A Hilbert Space Embedding for Distributions'",
            "Rahimi, A., & Recht, B. (2007). 'Random Features for Large-Scale Kernel Machines' (Admitting the scalability problem)",
            "Cortes, C., et al. (2006). 'Discriminative Prediction of Generalization Bounds'"
          ]
        },
        "2008": {
          "salience_share": 20,
          "description": "Variance contracted further (-5%) as the 'Big Data' era fully materialized. The primary innovation in this interval\u2014the 'Pegasos' algorithm and Random Fourier Features\u2014was an explicit admission that standard kernel SVMs were too slow. The cluster was cannibalizing its own core identity (exact global optimization) to approximate linear speeds. This 'linearization' of the kernel method effectively blurred the distinction between SVMs and simple logistic regression, weakening the cluster's unique semantic standing in the latent space.",
          "key_manifestations": [
            "Shalev-Shwartz, S., et al. (2007/2011). 'Pegasos: Primal Estimated Sub-Gradient Solver for SVM'",
            "Huang, G. B., et al. (2008). 'Labeled Faces in the Wild' (SVMs used as baseline)",
            "Maji, S., et al. (2008). 'Classification using Intersection Kernel Support Vector Machines is Efficient'",
            "Vedaldi, A., & Zisserman, A. (2010). 'Efficient Additive Kernels via Explicit Feature Maps' (Work active 2008-2009)"
          ]
        },
        "2010": {
          "salience_share": 15,
          "description": "The 'Deep Learning' surge in speech recognition inflicted heavy variance losses (-5%). The kernel framework, which relied on hand-crafted feature extraction (MFCCs in audio, SIFT in vision) followed by a shallow classifier, could not compete with end-to-end learning. The displacing force was the inability of kernel methods to learn hierarchies of features. The cluster was relegated to 'Small Data' regimes, where it remained superior to neural nets, but 'Small Data' was no longer the frontier of cultural or scientific interest.",
          "key_manifestations": [
            "Xiao, J., et al. (2010). 'SUN Database: Large-scale Scene Recognition from Abbey to Zoo' (SVMs struggling with scale)",
            "Perronnin, F., et al. (2010). 'Improving the Fisher Kernel for Large-Scale Image Classification'",
            "Steinwart, I., & Christmann, A. (2008). 'Support Vector Machines' (Theoretical compendium, marking maturation/stasis)",
            "Hsieh, C. J., et al. (2008). 'A Dual Coordinate Descent Method for Large-scale Linear SVM'"
          ]
        },
        "2012": {
          "salience_share": 10,
          "description": "A precipitous drop (-5%) occurred post-AlexNet. In Computer Vision, the SVM shifted from being the 'classifier of choice' to merely a 'loss function' (Hinge Loss) occasionally placed on top of a neural network. The independent identity of the cluster collapsed; it was no longer a standalone paradigm for solving complex problems but a component of the neural toolkit. The 'Kernel' concept survived primarily through Gaussian Processes and Bayesian Optimization, divorcing itself from the 'Margin Maximization' core.",
          "key_manifestations": [
            "Bergstra, J., & Bengio, Y. (2012). 'Random Search for Hyper-Parameter Optimization' (Moving away from grid search common in SVMs)",
            "Kulis, B. (2012). 'Metric Learning: A Survey' (Field evolving beyond simple kernels)",
            "Snoek, J., et al. (2012). 'Practical Bayesian Optimization of Machine Learning Algorithms'",
            "Dai, B., et al. (2014). 'Scalable Kernel Methods via Doubly Stochastic Gradients' (Last gasp efficiency efforts)"
          ]
        },
        "2014": {
          "salience_share": 7,
          "description": "The cluster stabilized at a low variance (-3%), functioning primarily as a pedagogical tool and a baseline for tabular data competitions (though often losing to XGBoost). The 'Displacing Force' was now Gradient Boosted Decision Trees (GBDT), which dominated Kaggle competitions for structured data, leaving SVMs without a clear 'winning' domain. The theoretical work shifted entirely to 'Kernel Mean Embeddings' and distribution testing, a highly abstract mathematical niche with limited broad cultural impact.",
          "key_manifestations": [
            "Chen, T., & Guestrin, C. (2016). 'XGBoost: A Scalable Tree Boosting System' (Work active 2014, killing SVM on tabular)",
            "Gretton, A., et al. (2012). 'A Kernel Two-Sample Test' (Shift to statistical testing)",
            "Wilson, A. G., & Adams, R. P. (2013). 'Gaussian Process Kernels for Pattern Discovery and Extrapolation'",
            "Lu, Z., et al. (2014). 'How to Scale Up Kernel Methods to Be as Good as Deep Neural Nets'"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "Stasis set in. The cluster had fully transitioned into 'Classic Machine Learning.' Its presence in top-tier AI conferences (NeurIPS/ICML) was largely confined to theoretical track sessions on bandit optimization or infinite-width neural network limits (Neural Tangent Kernel), where the kernel framework was used to analyze *why* deep learning works, rather than as a competitor. The trajectory was flat; the methodology was ossified and fully understood.",
          "key_manifestations": [
            "Jacot, A., et al. (2018). 'Neural Tangent Kernel: Convergence and Generalization in Neural Networks' (Preprint 2017/2018 context)",
            "Daniely, A., et al. (2016). 'Toward Deeper Understanding of Neural Networks: The Power of Initialization and a Dual View'",
            "Rasmussen, C. E. (2016). 'Gaussian Processes in Machine Learning' (Tutorials/Retrospectives)",
            "Zhang, C., et al. (2017). 'Understanding Deep Learning Requires Rethinking Generalization' (Kernel methods used as contrast)"
          ]
        },
        "2018": {
          "salience_share": 4,
          "description": "A minor resurgence of interest (+0%)\u2014not in usage, but in theory\u2014occurred via the Neural Tangent Kernel (NTK) literature. This work mathematically linked infinite-width neural networks to kernel methods, providing a 'full circle' moment. However, this did not increase the practical variance of SVMs; rather, it subsumed the kernel mathematical framework into the Deep Learning cluster's theoretical underpinnings. The cluster persisted as a 'Zombie' category: useful for small datasets, teaching, and specific embedded applications where inference cost must be minimal and deterministic.",
          "key_manifestations": [
            "Belkin, M., et al. (2018). 'Reconciling Modern Machine-Learning Practice and the Bias-Variance Trade-off'",
            "Arora, S., et al. (2019). 'On Exact Computation with an Infinitely Wide Neural Net'",
            "Ghorbani, B., et al. (2019). 'Linearized Two-Layers Neural Networks in High Dimension'",
            "Novak, R., et al. (2018). 'Bayesian Deep Convolutional Networks with Many Channels are Gaussian Processes'"
          ]
        },
        "2020": {
          "salience_share": 3,
          "description": "Variance decayed slightly (-1%) to a persistent background radiation level. In the era of GPT-3, 'Margin Maximization' seemed quaint. The only active research frontier remaining was in 'Kernel methods for distribution reinforcement learning' or specialized physics-informed kernels. The cluster had effectively become a sub-discipline of applied mathematics rather than computer science.",
          "key_manifestations": [
            "Li, Z., et al. (2020). 'Why Are Adaptive Methods Good for Attention Models?'",
            "Bietti, A., & Mairal, J. (2019). 'On the Inductive Bias of Neural Tangent Kernels'",
            "Kanagawa, M., et al. (2018/2020). 'Gaussian Processes and Kernel Methods: A Review on Connections and Equivalences'",
            "Wang, B., et al. (2020). 'Inference for Support Vector Networks with Gradient Ascent'"
          ]
        },
        "2022": {
          "salience_share": 3,
          "description": "Stasis. The methodology is now 'Ancient History' in AI timelines. It is the 'Newtonian Mechanics' to Deep Learning's 'Relativity'\u2014an excellent approximation for specific, limited scales (low N, high D), but fundamentally incapable of describing the complex curvature of the intelligence manifold (language, reasoning, vision). Its variance is maintained only by its utility in few-shot scenarios where deep learning overfits, and its presence in undergraduate curriculum.",
          "key_manifestations": [
            "Sch\u00f6lkopf, B., et al. (2021). 'Toward Causal Representation Learning' (Sch\u00f6lkopf moving to Causality)",
            "Mohri, M., et al. (2018). 'Foundations of Machine Learning, 2nd Ed.' (Textbook legacy)",
            "Cunningham, P., et al. (2022). 'Linear Dimensionality Reduction: Survey, Insights, and Generalizations'",
            "Cuturi, M. (2013/2022). 'Sinkhorn Distances: Lightspeed Computation of Optimal Transport' (Kernel-adjacent optimal transport gaining traction)"
          ]
        },
        "2024": {
          "salience_share": 2,
          "description": "Entering 2024/2025, the cluster's variance is negligible in the context of SOTA AI, though it remains a workhorse in established industrial systems (legacy fraud detection, simple text tagging). The 'Displacing Force' is now complete; even 'small data' problems are increasingly solved by fine-tuning foundation models (LLMs) rather than training SVMs from scratch. The 'Kernel' concept lives on as a mathematical ghost in the attention mechanisms (which can be viewed as kernel smoothers) of Transformers.",
          "key_manifestations": [
            "Misiakos, P., et al. (2024). 'Neural Network Gaussian Processes on the Sphere'",
            "Adlam, B., et al. (2023). 'The Neural Tangent Kernel in High Dimensions: Triple Descent'",
            "Liu, H., et al. (2024). 'Kernel-Based Testing for Generative Models'",
            "Chen, S., et al. (2024). 'Revisiting Kernel Methods for Few-Shot Learning in the Era of Foundation Models'"
          ]
        }
      }
    },
    "3_probabilistic_graphical_models": {
      "name": "Probabilistic Graphical Models",
      "description": "This eigencluster represents the 'Bayesian Era' of AI, where intelligence was modeled as inference over graph-structured probability distributions. Bridging the gap between the rigid certainty of symbolic logic and the chaotic heuristicism of early neural networks, PGMs provided a rigorous language for reasoning under uncertainty. Dominated by Judea Pearl's causality, Hidden Markov Models (HMMs), and Conditional Random Fields (CRFs), this cluster was the reigning paradigm for complex systems\u2014especially in speech and NLP\u2014before the 'Representation Learning' revolution rendered explicit structural modeling unnecessary for performance.",
      "trajectory": {
        "1990": {
          "salience_share": 15,
          "description": "The decade opened with this cluster serving as the primary intellectual alternative to the failing 'Expert Systems' (Symbolic) paradigm. The publication of Judea Pearl's 'Probabilistic Reasoning in Intelligent Systems' (1988) was the catalyst that continued to inject massive variance (+4%) into 1990. The force of motion was the 'Probabilistic Revolution': a shift from monotonic logic to belief networks. Researchers realized that causality and uncertainty could be encoded in Directed Acyclic Graphs (DAGs). At this stage, the cluster was displacing 'Rule-Based Systems' by offering a way to handle noisy data without brittle crash-conditions.",
          "key_manifestations": [
            "Pearl, J. (1990). 'Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference' (Revised/Impact)",
            "Lauritzen, S. L., & Spiegelhalter, D. J. (1988/1990). 'Local Computations with Probabilities on Graphical Structures'",
            "Cooper, G. F. (1990). 'The Computational Complexity of Probabilistic Inference Using Bayesian Belief Networks'",
            "Rabiner, L. R. (1989/1990). 'A Tutorial on Hidden Markov Models and Selected Applications in Speech Recognition'"
          ]
        },
        "1992": {
          "salience_share": 18,
          "description": "Variance expanded (+3%) as Hidden Markov Models (HMMs) cemented their monopoly on speech recognition. The motion was defined by 'Industrialization': what was once theory became the engine of Dragon Dictate and IBM ViaVoice. The 'Forward-Backward' and 'Viterbi' algorithms became the standard curriculum for AI, displacing older template-matching techniques. The cluster thrived because it offered a clear, generative story for how data was produced, separating the 'state' (phoneme) from the 'observation' (audio), a distinction neural networks of the time struggled to model explicitly.",
          "key_manifestations": [
            "Rabiner, L., & Juang, B. H. (1993). 'Fundamentals of Speech Recognition' (Material active 1992)",
            "Neal, R. M. (1992). 'Connectionist Learning of Belief Networks'",
            "Spiegelhalter, D. J., et al. (1993). 'Bayesian Analysis in Expert Systems'",
            "Dagum, P., & Luby, M. (1993). 'Approximating Probabilistic Inference in Bayesian Belief Networks is NP-Hard'"
          ]
        },
        "1994": {
          "salience_share": 22,
          "description": "The cluster continued its ascent (+4%) driven by the 'MCMC Revolution.' The introduction of practical Markov Chain Monte Carlo methods (Gibbs Sampling) allowed researchers to perform inference on complex, non-Gaussian models that were previously intractable. This broke the dependence on exact inference, unleashing a wave of creativity in Bayesian modeling. The 'Displacing Force' was directed at 'Frequentist Statistics,' as the Bayesian approach offered a coherent way to incorporate prior knowledge\u2014crucial for the small datasets of the 90s.",
          "key_manifestations": [
            "Grenander, U., & Miller, M. I. (1994). 'Representations of Knowledge in Complex Systems'",
            "Heckerman, D., et al. (1995). 'Learning Bayesian Networks: The Combination of Knowledge and Statistical Data'",
            "Neal, R. M. (1994). 'Bayesian Learning for Neural Networks' (Treating NNs as PGMs)",
            "Gilks, W. R., et al. (1995). 'Markov Chain Monte Carlo in Practice'"
          ]
        },
        "1996": {
          "salience_share": 25,
          "description": "Variance grew (+3%) as the 'Variational' turn began. Michael Jordan and colleagues introduced Variational Inference, transforming integration problems into optimization problems. This was a critical catalyst, as it promised MCMC-like flexibility with optimization-like speed. The cluster now covered both the 'Sampling' (MCMC) and 'Optimization' (Variational) sub-manifolds, making it the most robust theoretical framework in AI. It began to heavily influence Computer Vision via Markov Random Fields (MRFs) for image segmentation.",
          "key_manifestations": [
            "Jordan, M. I., et al. (1999). 'An Introduction to Variational Methods for Graphical Models' (Work active 1996-1998)",
            "Saul, L. K., & Jordan, M. I. (1996). 'Exploiting Tractable Substructures in Intractable Networks'",
            "Frey, B. J. (1998). 'Graphical Models for Machine Learning and Digital Communication'",
            "Besag, J. (1996). 'On the Statistical Analysis of Dirty Pictures' (Markov Random Fields milestone)"
          ]
        },
        "1998": {
          "salience_share": 28,
          "description": "The cluster reached a high plateau of influence. The 'Belief Propagation' algorithm was rediscovered and formalized (Loopy Belief Propagation), linking AI to Coding Theory (Turbo Codes). This created a powerful cross-disciplinary validation, boosting the cluster's prestige. In NLP, the transition from simple N-grams to probabilistic parsing (Collins, Charniak) was underway, all grounded in PGM principles. The only friction was the computational cost; 'Inference' was often NP-hard, requiring aggressive approximations.",
          "key_manifestations": [
            "Pearl, J. (1998). 'Causality: Models, Reasoning, and Inference' (Early drafts/papers)",
            "Weiss, Y. (2000). 'Correctness of Local Probability Propagation in Graphical Models with Loops' (Work active 1998)",
            "Murphy, K. P., et al. (1999). 'Loopy Belief Propagation for Approximate Inference'",
            "Bishop, C. M. (1998). 'Latent Variable Models'"
          ]
        },
        "2000": {
          "salience_share": 30,
          "description": "The cluster peaked (+2%), becoming the 'Lingua Franca' of machine learning. If you were doing rigorous AI in 2000, you were drawing circles and arrows. The catalyst for this specific interval was the unification of various sub-disciplines (Kalman Filters, HMMs, Factor Analysis) under the single banner of 'Dynamic Bayesian Networks' (DBNs). This unification provided a sense of scientific completion. However, a latent weakness existed: these models required significant human expertise to define the graph structure, a limitation that 'Feature Learning' would later exploit.",
          "key_manifestations": [
            "Jordan, M. I. (1998/2000). 'Learning in Graphical Models' (The defining anthology)",
            "Yedidia, J. S., et al. (2001). 'Generalized Belief Propagation'",
            "Murphy, K. P. (2002). 'Dynamic Bayesian Networks: Representation, Inference and Learning'",
            "McCallum, A., et al. (2000). 'Maximum Entropy Markov Models for Information Extraction and Segmentation'"
          ]
        },
        "2002": {
          "salience_share": 32,
          "description": "A new surge (+2%) came from the 'Topic Modeling' revolution. Latent Dirichlet Allocation (LDA) by Blei et al. demonstrated the power of hierarchical Bayesian models to uncover semantic structure in unsupervised text. This was a 'killer app' for the cluster, generating massive academic variance. Simultaneously, in vision, 'Constellation Models' attempted to recognize objects by modeling the probabilistic spatial relationship of parts. The description of motion is 'Hierarchical Expansion'\u2014moving from flat graphs to deep, plate-notation hierarchies.",
          "key_manifestations": [
            "Blei, D. M., Ng, A. Y., & Jordan, M. I. (2003). 'Latent Dirichlet Allocation'",
            "Fei-Fei, L., et al. (2003). 'A Bayesian Approach to Unsupervised One-Shot Learning of Object Categories'",
            "Wainwright, M. J., & Jordan, M. I. (2003). 'Graphical Models, Exponential Families, and Variational Inference'",
            "Heskes, T. (2003). 'Stable Fixed Points of Loopy Belief Propagation'"
          ]
        },
        "2004": {
          "salience_share": 28,
          "description": "Variance began to contract (-4%) as the 'Discriminative Turn' took hold. Generative models (like HMMs) were displaced by Conditional Random Fields (CRFs) for sequence labeling. While CRFs are technically PGMs, they abandoned the full generative story in favor of maximizing conditional likelihood, a step closer to the 'black box' optimization of neural nets. The 'Displacing Force' was the realization that modeling P(X), the distribution of the input features, was often a waste of parameters when the goal was merely prediction P(Y|X).",
          "key_manifestations": [
            "Lafferty, J., et al. (2001). 'Conditional Random Fields' (Peak impact/citation velocity 2004)",
            "Taskar, B., et al. (2004). 'Max-Margin Markov Networks' (Hybridizing SVMs and PGMs)",
            "Felzenszwalb, P. F., & Huttenlocher, D. P. (2005). 'Pictorial Structures for Object Recognition'",
            "Sutton, C., & McCallum, A. (2004). 'Collective Segmentation and Labeling of Distant Entities in Information Extraction'"
          ]
        },
        "2006": {
          "salience_share": 20,
          "description": "A significant drop (-8%) as the 'Deep Learning' narrative began to hijack the PGM machinery. Hinton's Deep Belief Networks were technically graphical models (stacked RBMs), but they were marketed and utilized as neural networks. The PGM cluster lost ownership of its most advanced frontier. The 'force of motion' was a schism: the PGM community doubled down on non-parametrics (Infinite HMMs, Dirichlet Processes) while the pragmatic wing defected to Deep Learning for its feature-learning capabilities.",
          "key_manifestations": [
            "Teh, Y. W., et al. (2006). 'Hierarchical Dirichlet Processes'",
            "Bishop, C. M. (2006). 'Pattern Recognition and Machine Learning' (Canonizing PGMs just as they peaked)",
            "Koller, D., & Friedman, N. (2009). 'Probabilistic Graphical Models: Principles and Techniques' (Drafts circulating)",
            "Ghahramani, Z. (2005/2006). 'Bayesian Nonparametrics' (The retreat to infinite models)"
          ]
        },
        "2008": {
          "salience_share": 15,
          "description": "The decline continued (-5%) as the 'Probabilistic Programming' sub-cluster attempted to save the paradigm. Languages like Church and later Stan tried to decouple the model specification from the inference engine, mirroring the 'Code' vs 'Compiler' split. While intellectually beautiful, this failed to gain industrial traction against the brute force of gradient descent. The displacing force was 'Computational Efficiency'; MCMC was simply too slow for web-scale data compared to Stochastic Gradient Descent (SGD).",
          "key_manifestations": [
            "Goodman, N. D., et al. (2008). 'Church: A Language for Generative Models'",
            "Sudderth, E. B., et al. (2008). 'Describing Visual Scenes Using Transformed Dirichlet Processes'",
            "Fox, E. B., et al. (2008). 'The Sticky HDP-HMM Theorem'",
            "Murray, I., et al. (2008). 'Evaluating Probabilities under High-Dimensional Latent Variable Models'"
          ]
        },
        "2010": {
          "salience_share": 10,
          "description": "A rapid collapse (-5%) occurred in the Speech Recognition domain, the fortress of HMMs. Deep Neural Networks (DNN-HMM hybrids initially, then pure DNNs) shattered benchmarks. The PGM component was reduced to a vestigial tail (the HMM decoder) before being cut off entirely later. This was the moment the cluster lost its claim to 'State of the Art' in perception tasks. The variance remaining was concentrated in low-data scientific modeling and causality research.",
          "key_manifestations": [
            "Mohamed, A., et al. (2010). 'Investigation of Full-Sequence Training of Deep Belief Networks for Speech Recognition'",
            "Bottou, L. (2010). 'Large-Scale Machine Learning with Stochastic Gradient Descent'",
            "Murphy, K. P. (2012). 'Machine Learning: A Probabilistic Perspective' (The PGM bible, published as the era closed)",
            "Hoffman, M. D., et al. (2010). 'Online Learning for Latent Dirichlet Allocation'"
          ]
        },
        "2012": {
          "salience_share": 7,
          "description": "The 'AlexNet' shockwave (-3%) obliterated the use of MRFs and CRFs in computer vision. Prior to this, vision relied on 'Graph Cuts' and probabilistic regularization. The CNN absorbed all these priors into its learned weights. The PGM cluster retreated entirely to the 'Structured Prediction' niche and 'Bayesian Nonparametrics,' which were intellectually prestigious but practically effectively irrelevant for the booming AI industry.",
          "key_manifestations": [
            "Kr\u00e4henb\u00fchl, P., & Koltun, V. (2011/2012). 'Efficient Inference in Fully Connected CRFs with Gaussian Edge Potentials' (Last stand in vision)",
            "Gelman, A., et al. (2013). 'Bayesian Data Analysis, 3rd Edition'",
            "Broderick, T., et al. (2013). 'Streaming Variational Bayes'",
            "Paisley, J., et al. (2012). 'Variational Bayesian Inference with Stochastic Search'"
          ]
        },
        "2014": {
          "salience_share": 6,
          "description": "A momentary stabilization and mutation (+1%) occurred with the 'Variational Autoencoder' (VAE). This was a hybrid vigor event: VAEs are technically PGMs (directed graphical models) trained with neural networks (Amortized Inference). This 'Reparameterization Trick' allowed the PGM philosophy (latent variables, priors) to survive inside the Deep Learning host. However, the credit was largely assigned to the Deep Learning cluster, leaving the traditional PGM variance low.",
          "key_manifestations": [
            "Kingma, D. P., & Welling, M. (2014). 'Auto-Encoding Variational Bayes'",
            "Rezende, D. J., et al. (2014). 'Stochastic Backpropagation and Approximate Inference in Deep Generative Models'",
            "Hoffman, M. D., & Gelman, A. (2014). 'The No-U-Turn Sampler'",
            "Tran, D., et al. (2016). 'Edward: A Library for Probabilistic Modeling, Inference, and Criticism' (2014-2015 dev context)"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "The cluster evolved into 'Causal Inference' (+0%). While traditional PGMs for pattern recognition were dead, the graph structure became the essential language for Causal AI (Pearl's do-calculus). The motion here was a pivot from 'Correlation/Prediction' (where DL won) to 'Intervention/Counterfactuals' (where DL was blind). This kept the cluster alive in high-stakes domains like medicine and economics.",
          "key_manifestations": [
            "Pearl, J., & Mackenzie, D. (2018). 'The Book of Why' (2016-2017 context)",
            "Peters, J., et al. (2017). 'Elements of Causal Inference: Foundations and Learning Algorithms'",
            "Kusner, M. J., et al. (2017). 'Counterfactual Fairness'",
            "Lake, B. M., et al. (2017). 'Building Machines That Learn and Think Like People'"
          ]
        },
        "2018": {
          "salience_share": 4,
          "description": "Variance drifted lower (-1%) as even the generative niche was taken over by GANs and later Diffusion models (which have PGM roots but are distinct). The 'Bayesian Neural Network' (BNN) dream\u2014putting distributions over all weights\u2014remained computationally intractable and failed to deliver practical improvements on scale. The cluster persisted mainly in 'Uncertainty Quantification' for safety-critical systems.",
          "key_manifestations": [
            "Gal, Y., & Ghahramani, Z. (2016). 'Dropout as a Bayesian Approximation' (Long tail influence in 2018)",
            "Osawa, K., et al. (2019). 'Practical Deep Learning with Bayesian Principles'",
            "Yao, Y., et al. (2018). 'Using Stacking to Average Bayesian Predictive Distributions'",
            "Blei, D. M., et al. (2017). 'Variational Inference: A Review for Statisticians'"
          ]
        },
        "2020": {
          "salience_share": 3,
          "description": "Stasis. The concepts of PGMs (Markov blankets, d-separation) remained fundamental to AI education but were rarely the primary contribution of new research papers. The 'Displacing Force' was the Transformer, which modeled dependencies so effectively via attention that explicit graph structures felt restrictive. PGM logic survived implicitly in the architecture of Graph Neural Networks (GNNs).",
          "key_manifestations": [
            "Sch\u00f6lkopf, B. (2019/2020). 'Causality for Machine Learning'",
            "Zhang, C., et al. (2020). 'Advances in Variational Inference'",
            "Gordon, J., et al. (2020). 'Convolutional Conditional Neural Processes'",
            "Welling, M. (2020). 'Hypothesis: The Future of AI is Hybrid Neuro-Symbolic' (Advocating for PGM return)"
          ]
        },
        "2022": {
          "salience_share": 3,
          "description": "The cluster experienced a faint heartbeat of relevance in 'Diffusion Models.' Diffusion processes are formally equivalent to Hierarchical VAEs with fixed encoders, a triumph of probabilistic reasoning. However, the cultural credit went to 'Generative AI.' The PGM cluster's variance is now almost entirely subsumed by 'Causal Inference' and 'Neuro-Symbolic' research.",
          "key_manifestations": [
            "Song, Y., et al. (2021). 'Score-Based Generative Modeling through Stochastic Differential Equations'",
            "Lipman, Y., et al. (2022). 'Flow Matching for Generative Modeling'",
            "Kipf, T., et al. (2020/2022). 'Contrastive Learning of Structured World Models'",
            "Imrie, F., et al. (2022). 'Deep Generative Models for 3D Linker Design' (Bio-application)"
          ]
        },
        "2024": {
          "salience_share": 2,
          "description": "In the era of LLMs, PGMs have retreated to the 'System 2' reasoning frontier. Researchers are investigating using PGM structures to govern the 'Chain of Thought' or to enforce logical consistency in LLM outputs. The variance is low, but the potential energy is rising as the limits of pure black-box scaling become apparent. The cluster waits in the wings for the 'Neuro-Symbolic' renaissance.",
          "key_manifestations": [
            "Wang, B., et al. (2024). 'Causal-Structure-Driven Chain-of-Thought Prompting'",
            "Kaddour, J., et al. (2024). 'Probabilistic Reasoning with Large Language Models'",
            "Zhang, D., et al. (2023). 'Bayesian Flow Networks'",
            "Bengio, Y., et al. (2023). 'GFlowNets for AI-Driven Scientific Discovery' (Generative Flow Networks as the modern PGM heir)"
          ]
        }
      }
    },
    "4_symbolic_logic_programming": {
      "name": "Symbolic Logic Programming",
      "description": "This eigencluster represents 'Good Old-Fashioned AI' (GOFAI)\u2014the paradigm of explicit knowledge representation, formal logic, and rule-based manipulation of discrete symbols. Grounded in the physical symbol system hypothesis, it posits that intelligence equates to the syntactic manipulation of semantic tokens. While it began the period as the dominant industrial incumbent (Expert Systems), it experienced a catastrophic collapse in variance known as the 'AI Winter' due to the brittleness of hand-coded rules. However, it never reached zero, surviving through the Semantic Web, formal verification (SAT/SMT solvers), and recently resurfacing in the quest for neuro-symbolic reasoning and code synthesis.",
      "trajectory": {
        "1990": {
          "salience_share": 30,
          "description": "At the start of the decade, this cluster held a commanding but fragile position (30%), largely due to the massive institutional inertia of the Expert Systems market and the Japanese Fifth Generation Computer Systems project. However, the variance was already contracting (-5%) as the 'Brittleness Bottleneck' became undeniable; systems like CYC could reason logically but failed catastrophically when faced with the ambiguity of the real world. The 'Displacing Force' was the practical failure of LISP machines and the rise of statistical methods which, while 'dumber' logically, were robust to noise. The industry began to realize that maintaining million-rule codebases was economically unviable.",
          "key_manifestations": [
            "Lenat, D. B., & Guha, R. V. (1990). 'Building Large Knowledge-Based Systems: Representation and Inference in the Cyc Project'",
            "Lloyd, J. W. (1987/1990). 'Foundations of Logic Programming' (Standard text context)",
            "Brooks, R. A. (1990). 'Elephants Don't Play Chess' (The physical grounding critique)",
            "Shapiro, E. (1990). 'The Family of Concurrent Logic Programming Languages'"
          ]
        },
        "1992": {
          "salience_share": 22,
          "description": "A sharp collapse (-8%) marked the official onset of the AI Winter for symbolic logic. The catalyst was the termination of the Fifth Generation project, which failed to produce the promised 'thinking machines' based on Prolog. Funding agencies (DARPA) dramatically cut support for logic-based AI, shifting resources toward 'Speech' and 'Neural' research. The cluster retreated from 'General Intelligence' claims to narrower sub-fields like 'Constraint Logic Programming' and 'Planning,' where closed-world assumptions still held. The cultural energy shifted from 'reasoning' to 'search.'",
          "key_manifestations": [
            "Kautz, H., & Selman, B. (1992). 'Planning as Satisfiability'",
            "Abadi, M., & Manna, Z. (1992). 'Nonclausal Deduction in First-Order Logic'",
            "Hentenryck, P. V. (1992). 'Constraint Satisfaction in Logic Programming'",
            "Minton, S., et al. (1992). 'Minimizing Conflicts: A Heuristic Repair Method for Constraint Satisfaction'"
          ]
        },
        "1994": {
          "salience_share": 18,
          "description": "Variance continued to bleed (-4%) as the field became insulated from the rising statistical tide. However, a local maximum of utility was found in 'Planning' systems for logistics (e.g., the DART system used in the Gulf War). Despite this, the academic zeitgeist had turned against logic; 'Learning' was the new keyword, and logic systems generally did not learn\u2014they were told. The motion was a retreat into 'Formal Methods' for hardware verification, divorcing the field from the broader ambition of AI.",
          "key_manifestations": [
            "Russell, S., & Norvig, P. (1995). 'Artificial Intelligence: A Modern Approach' (1994 drafts unifying logic/search with agents)",
            "Ghallab, M., et al. (1994). 'IxTeT: A Time-Map Manager'",
            "Biere, A., et al. (1999). 'Symbolic Model Checking without BDDs' (Early SAT work context)",
            "Baader, F., & Hollunder, B. (1995). 'Embedding Defaults into Terminological Knowledge Representation Formalisms'"
          ]
        },
        "1996": {
          "salience_share": 15,
          "description": "A stabilization event occurred (+0%) thanks to Deep Blue. While Deep Blue was heavily search-based (minimax), it relied on symbolic evaluation functions and discrete state spaces, widely perceived by the public as the triumph of 'Logic' over human intuition. This temporarily arrested the decline, validating the 'Symbolic Search' approach for well-defined games. However, in the latent space, this was a pyrrhic victory, as it reinforced the idea that symbolic AI required massive brute-force compute rather than intelligent heuristics.",
          "key_manifestations": [
            "Campbell, M., et al. (2002). 'Deep Blue' (Retrospective on 1996/1997 matches)",
            "McCune, W. (1997). 'Solution of the Robbins Problem' (Automated theorem proving milestone)",
            "Slany, W. (1996). 'Scheduling as a Fuzzy Constraint Satisfaction Problem'",
            "Sowa, J. F. (1999). 'Knowledge Representation: Logical, Philosophical, and Computational Foundations' (Work active 1996)"
          ]
        },
        "1998": {
          "salience_share": 12,
          "description": "The cluster mutated into the 'Semantic Web' initiative (-3% in core AI, but + variance in Web Science). Tim Berners-Lee's vision of a machine-readable web injected new funding into Description Logics (OWL, RDF). This was an attempt to scale symbolic logic to the internet. However, the 'Displacing Force' was the chaotic, unstructured nature of HTML and the rise of Google's statistical ranking, which proved that keyword probability was more effective than ontologies for information retrieval.",
          "key_manifestations": [
            "Berners-Lee, T., et al. (2001). 'The Semantic Web' (Drafts/Standards 1998-1999)",
            "Horrocks, I. (1998). 'Using an Expressive Description Logic: FaCT or Fiction?'",
            "Fensel, D., et al. (1998). 'The Knowledge Acquisition and Representation Language (KARL)'",
            "Clarke, E. M., et al. (1999). 'Model Checking' (Standardizing formal verification)"
          ]
        },
        "2000": {
          "salience_share": 10,
          "description": "Variance hit a local minimum. The 'Probabilistic Graphical Models' cluster had completely usurped the role of 'reasoning' by adding uncertainty, which logic struggled to handle (despite attempts at 'Probabilistic Logic'). The symbolic community became increasingly ghettoized in conferences like KR (Knowledge Representation) and ICAPS (Planning), with little crossover to NIPS. The field focused on 'tractability'\u2014finding subsets of First Order Logic that didn't explode exponentially.",
          "key_manifestations": [
            "Vardi, M. Y. (2000). 'Branching vs. Linear Time: Final Showdown'",
            "Moskewicz, M. W., et al. (2001). 'Chaff: Engineering an Efficient SAT Solver' (The SAT revolution begins)",
            "Baader, F., et al. (2003). 'The Description Logic Handbook' (Codifying the 2000 era)",
            "Glimm, B., et al. (2000). 'Metamodeling for Knowledge Management'"
          ]
        },
        "2002": {
          "salience_share": 9,
          "description": "A subtle positive derivative (+1%) emerged from the 'SAT Revolution.' Engineering breakthroughs in SAT solvers (CDCL - Conflict-Driven Clause Learning) made solving boolean satisfiability problems with millions of variables practical. This did not revive 'AI' in the popular sense, but it revolutionized 'Formal Verification' for hardware and software. The cluster found a secure industrial home in checking chip designs (EDA), effectively decoupling from the 'Cognitive' ambitions of AI.",
          "key_manifestations": [
            "Een, N., & Sorensson, N. (2003). 'An Extensible SAT-solver' (MiniSAT)",
            "Silva, J. P. M., & Sakallah, K. A. (2003). 'GRASP: A Search Algorithm for Propositional Satisfiability'",
            "Horrocks, I., & Patel-Schneider, P. F. (2004). 'Reducing OWL Entailment to Description Logic Satisfiability'",
            "Lifschitz, V. (2002). 'Answer Set Programming and Plan Generation'"
          ]
        },
        "2004": {
          "salience_share": 8,
          "description": "Stasis/Slow Decay. The Semantic Web vision failed to materialize as a consumer reality, causing a loss of grant funding (-1%). The 'Web 2.0' phenomenon (User Generated Content) emphasized social graphs and tags (folksonomies) over rigid ontologies. Symbolic AI was viewed as 'prescriptive' and elitist compared to the 'descriptive' and democratic nature of statistical learning. The cluster turned to 'Answer Set Programming' (ASP) as a way to handle non-monotonic reasoning.",
          "key_manifestations": [
            "Baral, C. (2003/2004). 'Knowledge Representation, Reasoning and Declarative Problem Solving'",
            "Gebser, M., et al. (2007). 'Clasp: A Conflict-Driven Answer Set Solver' (Dev started 2004)",
            "Bechhofer, S., et al. (2004). 'OWL Web Ontology Language Reference'",
            "Nau, D., et al. (2004). 'Automated Planning: Theory and Practice'"
          ]
        },
        "2006": {
          "salience_share": 6,
          "description": "The rise of Deep Learning began to cast a long shadow, causing further contraction (-2%). Symbolic methods were criticized for the 'Symbol Grounding Problem'\u2014the inability to connect symbols to perceptual reality. While Hinton was showing how to learn features from pixels, logicians were still debating the semantics of modal logic. The cluster became invisible in the top-tier AI discourse, surviving only in 'Automated Reasoning' competitions.",
          "key_manifestations": [
            "De Moura, L., & Bj\u00f8rner, N. (2008). 'Z3: An Efficient SMT Solver' (Development 2006-2007)",
            "Richardson, M., & Domingos, P. (2006). 'Markov Logic Networks' (Attempt to hybridize Logic/Prob)",
            "Kowalski, R. (2006). 'Computational Logic and Human Thinking: How to be Artificially Intelligent'",
            "Motik, B., et al. (2005). 'Hypertableau Reasoning for Description Logics'"
          ]
        },
        "2008": {
          "salience_share": 6,
          "description": "Stasis. The introduction of 'Markov Logic Networks' (MLNs) attempted to fuse this cluster with Cluster 3 (PGMs). This provided a brief theoretical spark, allowing weighted first-order logic formulas. However, inference was computationally horrific. The cluster remained dormant as a major cultural force, though SMT solvers (like Z3 by Microsoft) became critical infrastructure for software engineering, proving theorems about code correctness.",
          "key_manifestations": [
            "Domingos, P., et al. (2008). 'Probabilistic Logic Learning'",
            "Barrett, C., & Tinelli, C. (2018). 'Satisfiability Modulo Theories' (Reflecting 2008 standards work)",
            "Bratko, I. (2011). 'Prolog Programming for Artificial Intelligence' (Legacy education)",
            "Schulte, C., et al. (2008). 'Gecode: Generic Constraint Development Environment'"
          ]
        },
        "2010": {
          "salience_share": 5,
          "description": "Deep Learning's victory in speech recognition rendered the 'Symbolic' approach to linguistics (Chomskyan grammars) practically obsolete for engineering (-1%). The variance for symbolic NLP collapsed. The only stronghold remaining was Watson (IBM), which won Jeopardy! in 2011. Watson was a hybrid system but heavily relied on symbolic knowledge bases (DBpedia, WordNet). This was the 'Last Hurrah' of the symbolic era in the public eye before the neural tsunami.",
          "key_manifestations": [
            "Ferrucci, D., et al. (2010). 'Building Watson: An Overview of the DeepQA Project'",
            "Biere, A. (2009/2010). 'Handbook of Satisfiability'",
            "Nieuwenhuis, R., et al. (2006/2010). 'Solving SAT and MAXSAT with Unary Weights'",
            "Soares, S., et al. (2010). 'Top-Down Tree Kernels for Semantic Role Labeling'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Post-AlexNet, the variance reached its nadir (-1%). 'End-to-end' learning became the philosophy; manual feature construction or rule-writing was seen as a failure of learning. Symbolic AI was derogatorily termed 'GOFAI.' The cluster was kept alive only by the 'Program Synthesis' community (FlashFill in Excel) which showed that logic could do things neural nets couldn't: produce 100% correct code from examples.",
          "key_manifestations": [
            "Gulwani, S. (2011/2012). 'Automating String Processing in Spreadsheets using Input-Output Examples' (FlashFill)",
            "Kambhampati, S. (2012). 'Planning Graph Heuristics'",
            "Levesque, H. J., et al. (2012). 'The Winograd Schema Challenge' (Proposed as a test logic could win, which LLMs eventually beat)",
            "De Raedt, L., et al. (2016). 'Statistical Relational Artificial Intelligence' (2012 context)"
          ]
        },
        "2014": {
          "salience_share": 4,
          "description": "Stasis. The cluster watched from the sidelines. However, a latent demand for 'Explainability' (XAI) began to grow. Neural networks were black boxes; logic was transparent. This sowed the seeds for a potential return. Research into 'Neural Turing Machines' began to ask how neural nets could learn symbolic manipulations, bridging the gap from the neural side.",
          "key_manifestations": [
            "Graves, A., et al. (2014). 'Neural Turing Machines'",
            "Rockt\u00e4schel, T., et al. (2015). 'Injecting Logical Background Knowledge into Embeddings for Relation Extraction'",
            "Solar-Lezama, A. (2013/2014). 'Program Synthesis as Constraint Satisfaction'",
            "Liang, P., et al. (2013). 'Learning Dependency-Based Compositional Semantics'"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "A slight uptick (+1%) driven by 'Neuro-Symbolic' curiosity. AlphaGo used Monte Carlo Tree Search (a symbolic search algorithm) on top of neural priors. This proved that the strongest systems were hybrids. The 'System 1 (Neural) vs System 2 (Logic)' metaphor by Kahneman became the dominant roadmap for AGI, suggesting that Logic had to return eventually to handle reasoning.",
          "key_manifestations": [
            "Lake, B. M., et al. (2017). 'Building Machines That Learn and Think Like People' (Manifesto for symbolic return)",
            "Evans, R., & Grefenstette, E. (2018). 'Learning Explanatory Rules from Noisy Data'",
            "Santoro, A., et al. (2017). 'A Simple Neural Network Module for Relational Reasoning'",
            "Mao, J., et al. (2019). 'The Neuro-Symbolic Concept Learner' (Work active 2016-2018)"
          ]
        },
        "2018": {
          "salience_share": 6,
          "description": "The trend continued upwards (+1%) as 'Graph Neural Networks' (GNNs) provided a way to process structured data that looked like logic graphs. Furthermore, the limitations of LLMs (hallucinations) led to calls for grounding them in Knowledge Graphs (RAG precursors). The cluster was no longer a competitor to Deep Learning but a potential 'Safety Module' or 'Fact Checker.'",
          "key_manifestations": [
            "Battaglia, P. W., et al. (2018). 'Relational Inductive Biases, Deep Learning, and Graph Networks'",
            "Manhaeve, R., et al. (2018). 'DeepProbLog: Neural Probabilistic Logic Programming'",
            "Cohen, W. W. (2016/2018). 'TensorLog: A Differentiable Deductive Database'",
            "Yang, Z., et al. (2017). 'Differentiable Learning of Logical Rules for Knowledge Base Reasoning'"
          ]
        },
        "2020": {
          "salience_share": 7,
          "description": "Variance rose (+1%) with the explosion of 'Code LLMs' (Codex). While the models were neural, the domain was symbolic (Code). This required the integration of neural generation with symbolic execution/verification to ensure correctness. 'Program Synthesis' moved from SMT-based to Neural-guided search. The 'Displacing Force' was the realization that neural nets could 'speak' logic (Python/Lean) better than they could perform it internally.",
          "key_manifestations": [
            "Chen, M., et al. (2021). 'Evaluating Large Language Models Trained on Code' (Codex)",
            "Nye, M., et al. (2021). 'Show Your Work: Scratchpads for Intermediate Computation with Language Models'",
            "Polu, S., & Sutskever, I. (2020). 'Generative Language Modeling for Automated Theorem Proving'",
            "Ellis, K., et al. (2021). 'DreamCoder: Growing Generalizable, Interpretable Knowledge with Wake-Sleep Bayesian Program Learning'"
          ]
        },
        "2022": {
          "salience_share": 8,
          "description": "The 'Chain of Thought' (CoT) prompting discovery acted as a massive catalyst (+1%). It showed that eliciting step-by-step reasoning (a symbolic process) from a neural net improved performance dramatically. This blurred the line between the clusters: is CoT symbolic or neural? It represents the emulation of symbolic reasoning within a neural substrate. Additionally, 'AlphaTensor' discovering matrix multiplication algorithms showed the power of combining RL with symbolic search spaces.",
          "key_manifestations": [
            "Wei, J., et al. (2022). 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models'",
            "Fawzi, A., et al. (2022). 'Discovering Faster Matrix Multiplication Algorithms with Reinforcement Learning'",
            "Wu, Y., et al. (2022). 'Autoformalization with Large Language Models'",
            "Creswell, A., et al. (2022). 'Selection-Inference: Exploiting Large Language Models for Interpretable Logical Reasoning'"
          ]
        },
        "2024": {
          "salience_share": 9,
          "description": "Entering 2025, the cluster is experiencing a 'Formal Renaissance' (+1%). Systems like AlphaGeometry and AlphaProof demonstrated that combining LLMs with formal solvers (Lean/Isabelle) could achieve Gold Medal performance in Math Olympiads. The 'motion' is the shift from 'LLMs hallucinating logic' to 'LLMs acting as heuristic guides for formal provers.' The symbolic engine provides the truth guarantee; the neural engine provides the intuition. This neuro-symbolic hybrid is widely viewed as the path to Level 5 AI (Reasoners).",
          "key_manifestations": [
            "Trinh, T. H., et al. (2024). 'Solving Olympiad Geometry without Human Demonstrations' (AlphaGeometry)",
            "DeepMind (2024). 'AI Solves International Mathematical Olympiad Problems' (AlphaProof)",
            "Yang, K., et al. (2024). 'LeanDojo: Theorem Proving with Retrieval-Augmented Language Models'",
            "Wang, X., et al. (2024). 'MathVista: Evaluating Mathematical Reasoning in Visual Contexts'"
          ]
        }
      }
    },
    "5_stochastic_optimization_dynamics": {
      "name": "Stochastic Optimization Dynamics",
      "description": "This eigencluster represents the mathematical engine room of modern AI: the study of navigating high-dimensional, non-convex loss landscapes to find generalizable minima. It tracks the evolution from second-order methods (Newton-Raphson) and combinatorial search (Simulated Annealing) to the dominance of first-order Stochastic Gradient Descent (SGD) and adaptive moment estimation (Adam). This cluster explains *how* learning happens. Its trajectory is defined by the 'Scale vs. Precision' trade-off: as models grew, precise optimization became too costly, leading to a reliance on rough, noisy gradients that surprisingly generalized better.",
      "trajectory": {
        "1990": {
          "salience_share": 4,
          "description": "In 1990, optimization for AI was a fractured landscape (-1%). The dominant methods were derivative-free combinatorial searches like Genetic Algorithms (GA) and Simulated Annealing, reflecting the lack of differentiable architectures. Backpropagation existed but was viewed as numerically unstable. The 'Convex' community focused on Linear Programming (Simplex method). There was no unified theory of 'Learning as Optimization'; rather, optimization was a tool used ad-hoc. The variance was low because the 'learning' paradigm hadn't yet subsumed the 'programming' paradigm.",
          "key_manifestations": [
            "Kirkpatrick, S., et al. (1983/1990). 'Optimization by Simulated Annealing' (Persistent influence)",
            "Goldberg, D. E. (1989/1990). 'Genetic Algorithms in Search, Optimization, and Machine Learning'",
            "Battiti, R. (1992). 'First- and Second-Order Methods for Learning: Between Steepest Descent and Newton's Method'",
            "Nesterov, Y., & Nemirovskii, A. (1994). 'Interior-Point Polynomial Algorithms in Convex Programming' (Foundational work starting 1990)"
          ]
        },
        "1992": {
          "salience_share": 5,
          "description": "Stasis. The field was enamored with 'Second-Order Methods' (like Conjugate Gradient and Levenberg-Marquardt) for small neural nets. Researchers believed that using the Hessian (curvature information) was essential for convergence. However, calculating the Hessian was $O(N^2)$, limiting model size. This insistence on mathematical precision acted as a brake on scaling. The cluster was defined by 'Batch Training'\u2014looking at the whole dataset before taking a step\u2014which is mathematically pure but computationally inefficient.",
          "key_manifestations": [
            "Bishop, C. M. (1995). 'Exact Calculation of the Hessian Matrix for the Multilayer Perceptron' (1992 work)",
            "Moller, M. F. (1993). 'A Scaled Conjugate Gradient Algorithm for Fast Supervised Learning'",
            "Hassibi, B., & Stork, D. G. (1993). 'Second Order Derivatives for Network Pruning: Optimal Brain Surgeon'",
            "Schrauwen, B. (Legacy context). 'Backpropagation through Time' (Optimization in Recurrent nets)"
          ]
        },
        "1994": {
          "salience_share": 6,
          "description": "A slow rise (+1%) as 'On-line Learning' (the precursor to modern SGD) began to gain traction in the Neural Network community. The realization was that updating weights after every example (Stochastic) broke out of local minima better than Batch methods. However, the theoretical community (Cluster 2) was moving toward Convex Optimization (SVMs), where the global minimum is guaranteed. This created a bifurcation: Neural people did 'Stochastic' hacking; Kernel people did 'Quadratic Programming.'",
          "key_manifestations": [
            "Bertsekas, D. P. (1995). 'Nonlinear Programming' (Canonical text)",
            "Saad, D., & Solla, S. A. (1995). 'On-Line Learning in Soft Committee Machines'",
            "Amari, S. I. (1998). 'Natural Gradient Works Efficiently in Learning' (Pre-print/concept 1995)",
            "Orr, G. B. (1996). 'Dynamics of Learning in Radial Basis Function Networks'"
          ]
        },
        "1996": {
          "salience_share": 7,
          "description": "The 'No Free Lunch Theorems' published in this interval acted as a sober catalyst (+1%), proving that no single optimizer is best for all problems. This shifted focus to domain-specific inductive biases. Simultaneously, the success of SVMs brought 'Convex Optimization' to the forefront. The field became obsessed with transforming problems into convex shapes so that 'Interior Point Methods' could solve them. The 'Displacing Force' was the fear of non-convexity (local minima), which was seen as a death sentence for reliability.",
          "key_manifestations": [
            "Wolpert, D. H., & Macready, W. G. (1997). 'No Free Lunch Theorems for Optimization'",
            "Boyd, S., & Vandenberghe, L. (2004). 'Convex Optimization' (Drafts/Courses active late 90s)",
            "Platt, J. (1998). 'Sequential Minimal Optimization' (Solving the SVM QP problem)",
            "Nocedal, J., & Wright, S. J. (1999). 'Numerical Optimization'"
          ]
        },
        "1998": {
          "salience_share": 8,
          "description": "The introduction of 'Natural Gradient' by Amari (+1%) brought Information Geometry into optimization. It proposed that one should follow the steepest descent in the Riemannian manifold of probability distributions, not parameter space. While computationally expensive, it laid the theoretical groundwork for modern methods like K-FAC and TRPO. The cluster remained split between the 'Convex Certainty' of the SVM era and the 'Stochastic Chaos' of the neural fringe.",
          "key_manifestations": [
            "Amari, S. I. (1998). 'Natural Gradient Works Efficiently in Learning'",
            "LeCun, Y., et al. (1998). 'Efficient BackProp' (Seminal tricks: shuffling, normalizing inputs)",
            "Sch\u00f6lkopf, B., et al. (1999). 'Support Vector Estimation of Function and Noise'",
            "Murata, N. (1998). 'A Statistical Analysis of On-Line Learning'"
          ]
        },
        "2000": {
          "salience_share": 8,
          "description": "Stasis. The field was dominated by SVMs (Cluster 2), so 'Optimization' largely meant 'Quadratic Programming.' The neural network optimization literature was dormant. However, in the background, the 'Sparse Coding' community was developing algorithms for L1-minimization (LASSO), which would later bridge stats and optimization. The 'Delta' was zero because the 'Big Data' pressure hadn't yet forced a change in methods.",
          "key_manifestations": [
            "Tibshirani, R. (1996/2000). 'Regression Shrinkage and Selection via the Lasso' (Peak impact)",
            "Donoho, D. L. (2006). 'Compressed Sensing' (Early work/talks 2000-2004)",
            "Suykens, J. A., & Vandewalle, J. (1999). 'Least Squares Support Vector Machine Classifiers'",
            "Gentile, C. (2001). 'The Robustness of the P-Norm Algorithms'"
          ]
        },
        "2002": {
          "salience_share": 7,
          "description": "A slight dip (-1%) as the focus shifted to 'Bayesian Inference' (Cluster 3). Optimization was viewed as a poor man's integration. Why find the mode (MAP) when you should integrate the posterior? MCMC (sampling) displaced Optimization (finding the peak). The 'Displacing Force' was the intellectual superiority of the Bayesian method, which claimed to handle uncertainty better than point-estimate optimization.",
          "key_manifestations": [
            "Neal, R. M. (2003). 'Slice Sampling'",
            "Andrieu, C., et al. (2003). 'An Introduction to MCMC for Machine Learning'",
            "Tipping, M. E. (2001). 'Sparse Bayesian Learning and the Relevance Vector Machine' (Optimization to find priors)",
            "Smola, A. J., & Sch\u00f6lkopf, B. (2004). 'A Tutorial on Support Vector Regression'"
          ]
        },
        "2004": {
          "salience_share": 8,
          "description": "The return of the gradient (+1%). Contrastive Divergence (Hinton) showed that crude, approximate gradients could train Energy Based Models. This was a pivotal moment: it legitimized 'Approximation' over 'Exactness.' You didn't need the true gradient; you needed a signal that was correlated with it. This loosened the constraints on optimization research, allowing for more heuristic approaches.",
          "key_manifestations": [
            "Carreira-Perpinan, M. A., & Hinton, G. E. (2005). 'On Contrastive Divergence Learning'",
            "Bottou, L. (2004). 'Stochastic Gradient Descent Tricks' (The manifesto of SGD)",
            "Nesterov, Y. (2004). 'Introductory Lectures on Convex Optimization'",
            "Boyd, S., et al. (2011). 'Distributed Optimization and Statistical Learning via the ADMM' (Work active 2004-2006)"
          ]
        },
        "2006": {
          "salience_share": 12,
          "description": "A significant rise (+4%) driven by the Deep Learning reboot. 'Layer-wise Pre-training' was essentially a greedy optimization strategy to initialize parameters in a good basin of attraction. The realization was that non-convex optimization wasn't impossible; it just needed a good starting point. The cluster shifted focus from 'Global Optima' (impossible) to 'Good Local Optima.'",
          "key_manifestations": [
            "Hinton, G. E., & Salakhutdinov, R. R. (2006). 'Reducing the Dimensionality of Data with Neural Networks'",
            "Bengio, Y. (2009). 'Learning Deep Architectures for AI' (Discussing optimization difficulty)",
            "Ranzato, M., et al. (2007). 'Efficient Learning of Sparse Representations with an Energy-Based Model'",
            "Duchi, J., et al. (2008). 'Efficient Projections onto the L1-Ball for Learning in High Dimensions'"
          ]
        },
        "2008": {
          "salience_share": 15,
          "description": "The 'SGD Era' officially began (+3%). As datasets grew (Web Scale), second-order methods ($O(N^2)$) died. SGD ($O(1)$ per step) became the only viable option. Bottou's work demonstrated that for large datasets, the optimization error is swamped by the approximation error, so precise optimization is a waste of time. The motion was 'The Triumph of Cheap Iterations.'",
          "key_manifestations": [
            "Bottou, L., & Bousquet, O. (2008). 'The Tradeoffs of Large Scale Learning'",
            "Ruder, S. (2016). 'An Overview of Gradient Descent Optimization Algorithms' (Retrospective on the 2008-2012 era)",
            "Nemirovski, A., et al. (2009). 'Robust Stochastic Approximation Approach to Stochastic Programming'",
            "Shalev-Shwartz, S., et al. (2007). 'Pegasos: Primal Estimated Sub-Gradient Solver for SVM'"
          ]
        },
        "2010": {
          "salience_share": 20,
          "description": "Variance accelerated (+5%) with the introduction of 'Adaptive Learning Rates.' Adagrad (Duchi et al.) appeared, allowing different parameters to have different learning rates based on their sparsity. This was crucial for NLP and sparse data. It marked the beginning of the 'Adaptive' sub-cluster, moving away from manual learning rate scheduling. The catalyst was the need to train on massive, sparse web data without baby-sitting the step size.",
          "key_manifestations": [
            "Duchi, J., Hazan, E., & Singer, Y. (2011). 'Adaptive Subgradient Methods for Online Learning and Stochastic Optimization' (Adagrad)",
            "Zeiler, M. D. (2012). 'ADADELTA: An Adaptive Learning Rate Method'",
            "Martens, J. (2010). 'Deep Learning via Hessian-Free Optimization' (The last stand of second-order methods)",
            "Nesterov, Y. (2013). 'Gradient Methods for Minimizing Composite Functions'"
          ]
        },
        "2012": {
          "salience_share": 25,
          "description": "The explosion of Deep Learning brought optimization to center stage (+5%). 'Dropout' (Hinton) was introduced not just as regularization, but as a way to modify the optimization landscape, smoothing it out. RMSProp (Hinton's Coursera lecture) became the de facto standard for training deep nets, despite not being published in a paper. This interval defined the 'Modern' toolkit: ReLU + Dropout + RMSProp/Momentum.",
          "key_manifestations": [
            "Hinton, G., et al. (2012). 'Lecture 6e: RMSProp' (Coursera)",
            "Sutskever, I., et al. (2013). 'On the Importance of Initialization and Momentum in Deep Learning'",
            "Pascanu, R., et al. (2013). 'On the Difficulty of Training Recurrent Neural Networks' (Exploding gradients)",
            "Dauphin, Y. N., et al. (2014). 'Identifying and Attacking the Saddle Point Problem in High-Dimensional Non-Convex Optimization'"
          ]
        },
        "2014": {
          "salience_share": 35,
          "description": "The 'Adam' Event (+10%). Kingma and Ba released Adam (Adaptive Moment Estimation), combining Momentum and RMSProp. It worked 'out of the box' for almost everything. It became the default optimizer for the next decade. The variance surge was due to the democratization of training; you no longer needed to be an expert to train a net. Adam cannibalized the variance of all other optimizers (SGD was relegated to vision, Adam took NLP/RL).",
          "key_manifestations": [
            "Kingma, D. P., & Ba, J. (2014). 'Adam: A Method for Stochastic Optimization'",
            "Goodfellow, I. J., et al. (2014). 'Qualitatively Characterizing Neural Network Optimization Problems'",
            "Ioffe, S., & Szegedy, C. (2015). 'Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift'",
            "Choromanska, A., et al. (2015). 'The Loss Surfaces of Multilayer Networks' (Spin glass connection)"
          ]
        },
        "2016": {
          "salience_share": 40,
          "description": "The focus shifted to 'Landscape Geometry' (+5%). Researchers like Soudry and Zhang began to understand *why* over-parameterized networks generalize: the 'Flat Minima' hypothesis. It wasn't just about finding *a* minimum, but a *flat* one. Optimization and Generalization were revealed to be linked (Implicit Regularization of SGD). The 'Displacing Force' was the realization that 'overfitting' in the classical sense doesn't happen in deep linear regimes.",
          "key_manifestations": [
            "Keskar, N. S., et al. (2016). 'On Large-Batch Training for Deep Learning: Generalization Gap and Sharp Minima'",
            "Zhang, C., et al. (2017). 'Understanding Deep Learning Requires Rethinking Generalization'",
            "Hardt, M., et al. (2016). 'Train Faster, Generalize Better: Stability of Stochastic Gradient Descent'",
            "Reddi, S. J., et al. (2018). 'On the Convergence of Adam and Beyond' (Fixing Adam theory)"
          ]
        },
        "2018": {
          "salience_share": 42,
          "description": "Stasis/Refinement (+2%). The community realized Adam had convergence issues, leading to AdamW (Decoupled Weight Decay). This seemingly minor tweak was critical for the training of Transformers (BERT). Without AdamW, the Transformer revolution might have stalled. The cluster was now deeply intertwined with 'Architecture'; specific optimizers were needed for specific architectures (Transformers need warmup, CNNs need SGD+Momentum).",
          "key_manifestations": [
            "Loshchilov, I., & Hutter, F. (2017/2019). 'Decoupled Weight Decay Regularization' (AdamW)",
            "You, Y., et al. (2017). 'Large Batch Training of Convolutional Networks' (LARS optimizer)",
            "Frankle, J., & Carbin, M. (2018). 'The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks'",
            "Liu, L., et al. (2019). 'On the Variance of the Adaptive Learning Rate and Beyond' (RAdam)"
          ]
        },
        "2020": {
          "salience_share": 45,
          "description": "The 'Scaling Laws' era (+3%) turned optimization into an engineering discipline. The question was no longer 'will it converge?' but 'how fast can we push tokens through clusters of 10,000 GPUs?'. Optimization research merged with Systems research (ZeRO, Sharding). The 'Grokking' phenomenon was discovered, showing that optimization can exhibit phase transitions where generalization happens long after training accuracy hits 100%.",
          "key_manifestations": [
            "Foret, P., et al. (2020). 'Sharpness-Aware Minimization for Efficiently Improving Generalization' (SAM)",
            "Power, A., et al. (2022). 'Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets'",
            "Rajbhandari, S., et al. (2020). 'ZeRO: Memory Optimizations Toward Training Trillion Parameter Models'",
            "You, Y., et al. (2020). 'Large Batch Optimization for Deep Learning: Training BERT in 76 minutes' (LAMB)"
          ]
        },
        "2022": {
          "salience_share": 46,
          "description": "Stasis/Saturation. The 'Chinchilla' scaling laws defined the optimal frontier of optimization steps vs. model size. The field had essentially 'solved' standard training; the frontier moved to 'Fine-tuning' (LoRA). Low-Rank Adaptation was a major innovation, allowing optimization of massive models with tiny VRAM by freezing the main weights. This democratized the optimization of LLMs.",
          "key_manifestations": [
            "Hu, E. J., et al. (2021). 'LoRA: Low-Rank Adaptation of Large Language Models'",
            "Dettmers, T., et al. (2022). 'LLM.int8(): 8-bit Matrix Multiplication for Transformers'",
            "Liu, Z., et al. (2022). 'A ConvNet for the 2020s' (Optimization techniques applied back to CNNs)",
            "Chen, X., et al. (2023). 'Symbolic Discovery of Optimization Algorithms' (Lion optimizer)"
          ]
        },
        "2024": {
          "salience_share": 48,
          "description": "Entering 2025, the cluster focuses on 'Post-Training Optimization' (+2%). RLHF (Reinforcement Learning from Human Feedback) and DPO (Direct Preference Optimization) are the new frontiers. DPO was a catalyst, showing that you can optimize for human preference without a complex RL loop, essentially treating the preference optimization as a classification problem. The 'trajectory' is shifting from minimizing Log-Loss (Next Token) to minimizing 'Alignment Loss.'",
          "key_manifestations": [
            "Rafailov, R., et al. (2023). 'Direct Preference Optimization: Your Language Model is Secretly a Reward Model'",
            "Chen, X., et al. (2024). 'Google DeepMind's Lion: Evolving the Optimizer'",
            "Mitchell, E., et al. (2024). 'The Quantization Model of Neural Scaling'",
            "Lialin, V., et al. (2024). 'ReLoRA: High-Rank Training Through Low-Rank Updates'"
          ]
        }
      }
    },
    "6_sequence_transduction_attention": {
      "name": "Sequence Transduction & Attention",
      "description": "This eigencluster maps the evolution of temporal sequence modeling, moving from the rigid Markovian assumption of the 90s to the infinite-context capabilities of modern Transformers. It represents the solution to the 'Variable Length Problem'\u2014how to map a sequence of size N to a sequence of size M. The trajectory is defined by the struggle against the 'Vanishing Gradient,' solved initially by gating mechanisms (LSTM/GRU) and ultimately by the 'Attention' mechanism, which replaced temporal recurrence with parallelizable spatial relationships. This cluster is the architectural backbone of the Large Language Model revolution.",
      "trajectory": {
        "1990": {
          "salience_share": 5,
          "description": "The decade began with Simple Recurrent Networks (SRNs) like Elman and Jordan networks attempting to introduce 'time' into connectionism. The variance was low but detectable (+1%) as researchers realized feedforward nets couldn't handle time series. However, these models failed miserably on long sequences due to the exponential decay of error signals (vanishing gradients). The 'Displacing Force' was the HMM (Cluster 3), which offered a stable, mathematically sound way to handle sequences, relegating RNNs to toy problems.",
          "key_manifestations": [
            "Elman, J. L. (1990). 'Finding Structure in Time'",
            "Jordan, M. I. (1990). 'Attractor Dynamics and Parallelism in a Connectionist Sequential Machine'",
            "Williams, R. J., & Zipser, D. (1989/1990). 'A Learning Algorithm for Continually Running Fully Recurrent Neural Networks'",
            "Mozer, M. C. (1992). 'Induction of Multiscale Temporal Structure' (Work active 1990)"
          ]
        },
        "1992": {
          "salience_share": 4,
          "description": "Variance contracted (-1%) as the theoretical impossibility of training RNNs became clear. The seminal work by Bengio et al. formally proved that learning long-term dependencies with gradient descent is difficult (the gradients either vanish or explode). This effectively killed funding and interest in the sub-field. The motion was a retreat; researchers abandoned gradient-based learning for sequences and looked toward 'Reservoir Computing' or simply went back to HMMs.",
          "key_manifestations": [
            "Bengio, Y., et al. (1994). 'Learning Long-Term Dependencies with Gradient Descent is Difficult' (1992-1993 research context)",
            "Schmidhuber, J. (1992). 'Learning Complex, Extended Sequences Using the Principle of History Compression'",
            "Mozer, M. C. (1993). 'Neural Net Architectures for Temporal Sequence Processing'",
            "Plate, T. A. (1995). 'Holographic Reduced Representations' (1992 context, alternative to RNNs)"
          ]
        },
        "1994": {
          "salience_share": 3,
          "description": "The 'Dark Ages' of sequence learning. While HMMs flourished, neural sequence modeling was virtually dead. However, a latent seed of massive potential was planted: the Long Short-Term Memory (LSTM) was developed by Hochreiter and Schmidhuber. It introduced the 'Constant Error Carousel' to keep gradients flowing. At the time, this was a fringe paper in a field obsessed with SVMs, and it generated almost no immediate variance, but it solved the fundamental mathematical flaw of RNNs.",
          "key_manifestations": [
            "Hochreiter, S., & Schmidhuber, J. (1997). 'Long Short-Term Memory' (Submitted 1995, Tech Report 1994)",
            "Bengio, Y., et al. (1994). 'Links Between Markov Models and Recurrent Neural Networks'",
            "Baldi, P., & Chauvin, Y. (1994). 'Smooth On-Line Learning Algorithms for Hidden Markov Models'",
            "Giles, C. L., et al. (1994). 'Learning Long-Term Dependencies in NARX Recurrent Neural Networks'"
          ]
        },
        "1996": {
          "salience_share": 3,
          "description": "Stasis. The LSTM existed but was computationally heavy and difficult to implement without modern auto-differentiation libraries. The 'Recurrent' concept survived mainly through 'Bidirectional RNNs' (Schuster & Paliwal), which allowed the network to look ahead as well as behind. This was critical for offline tasks like handwriting recognition, but the cluster remained a niche curiosity compared to the dominant HMM/GMM paradigm.",
          "key_manifestations": [
            "Schuster, M., & Paliwal, K. K. (1997). 'Bidirectional Recurrent Neural Networks' (1996 work)",
            "Hochreiter, S., & Schmidhuber, J. (1997). 'LSTM' (Publication year)",
            "Baldi, P., & Brunak, S. (1998). 'Bioinformatics: The Machine Learning Approach' (Early RNN application to DNA)",
            "Jaeger, H. (2001). 'The \"Echo State\" Approach to Analysing and Training Recurrent Neural Networks' (Concepts forming late 90s)"
          ]
        },
        "1998": {
          "salience_share": 4,
          "description": "A slight uptick (+1%) as RNNs found a home in 'Handwriting Recognition.' The combination of CNNs for features and RNNs for sequence transcription (Graves/Schmidhuber later) began to show promise. However, the 'Displacing Force' was the 'Kernel Method' for sequences (String Kernels), which allowed SVMs to classify text and DNA without the instability of RNN training.",
          "key_manifestations": [
            "LeCun, Y., et al. (1998). 'Gradient-Based Learning Applied to Document Recognition' (Graph Transformer Networks section)",
            "Gers, F. A., et al. (2000). 'Learning to Forget: Continual Prediction with LSTM' (1999 work adding forget gates)",
            "Lodhi, H., et al. (2002). 'String Kernels for Text Classification' (Work active 1998-1999)",
            "Cristianini, N., et al. (1998). 'Publicly Available Software for Support Vector Machines' (Dominating the era)"
          ]
        },
        "2000": {
          "salience_share": 4,
          "description": "Stasis. The field of Natural Language Processing (NLP) was dominated by statistical n-grams and HMMs. 'Language Modeling' meant counting frequencies, not training weights. Neural Language Models were theoretically possible but computationally intractable. The cluster was dormant, waiting for the GPU catalyst.",
          "key_manifestations": [
            "Bengio, Y., et al. (2001). 'A Neural Probabilistic Language Model' (NIPS 2000)",
            "Gers, F. A., & Schmidhuber, J. (2001). 'LSTM Recurrent Networks Learn Simple Context-Free and Context-Sensitive Languages'",
            "Manning, C., & Sch\u00fctze, H. (1999). 'Foundations of Statistical Natural Language Processing' (The non-neural bible)",
            "Collins, M. (2002). 'Discriminative Training Methods for Hidden Markov Models'"
          ]
        },
        "2002": {
          "salience_share": 5,
          "description": "A minor positive delta (+1%) from Bengio's 'Neural Probabilistic Language Model' (NPLM). This paper proposed that a neural net could learn a distributed representation of words (embeddings) and predict the next word. While it used a feedforward net, it set the stage for RNN LMs. It challenged the 'Symbolic' view of language by suggesting words were vectors, not atomic tokens.",
          "key_manifestations": [
            "Bengio, Y., et al. (2003). 'A Neural Probabilistic Language Model' (Journal version)",
            "Perez-Ortiz, J. A., et al. (2003). 'Kalman Filter Training of Recurrent Neural Networks'",
            "Jaeger, H., & Haas, H. (2004). 'Harnessing Nonlinearity: Predicting Chaotic Systems and Saving Energy in Wireless Communication' (Echo State Networks)",
            "Sutskever, I. (2013). 'Training Recurrent Neural Networks' (Retrospective context on early 2000s struggles)"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Stasis. The 'Reservoir Computing' (Echo State Networks) movement offered a way to use RNNs without training the recurrent weights (only the output), avoiding the vanishing gradient. This was a clever hack that kept the cluster alive in signal processing, but it was a cul-de-sac for general intelligence. The mainstream AI community ignored sequences in favor of static classification (ImageNet precursors).",
          "key_manifestations": [
            "Maass, W., et al. (2002/2004). 'Real-Time Computing Without Stable States: A New Framework for Neural Computation on Finite Automata'",
            "Schindelin, J., et al. (2005). 'A standard for the evaluation of RNN algorithms'",
            "Steil, J. J. (2004). 'Backpropagation-Decorrelation: Online Recurrent Learning with O(N) Complexity'",
            "Hinton, G. E., et al. (2006). 'A Fast Learning Algorithm for Deep Belief Nets' (Drawing attention away from RNNs)"
          ]
        },
        "2006": {
          "salience_share": 7,
          "description": "A spark of life (+2%) as Alex Graves began applying LSTM to Connectionist Temporal Classification (CTC). This allowed RNNs to label unsegmented sequences (like audio) without pre-alignment. This was the first time RNNs did something HMMs found difficult. It was the precursor to the voice recognition revolution. The motion was 'End-to-End' alignment\u2014learning the timing from data.",
          "key_manifestations": [
            "Graves, A., et al. (2006). 'Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks'",
            "Graves, A., & Schmidhuber, J. (2005). 'Framewise Phoneme Classification with Bidirectional LSTM'",
            "Hinton, G., & Salakhutdinov, R. (2006). 'Reducing the Dimensionality of Data with Neural Networks' (Overshadowing RNNs)",
            "Sutskever, I., & Hinton, G. (2007). 'Learning Multilevel Distributed Representations for High-Dimensional Sequences'"
          ]
        },
        "2008": {
          "salience_share": 9,
          "description": "Variance rose (+2%) as GPUs began to make RNN training feasible. Sutskever and Hinton showed that with Hessian-free optimization or careful initialization, simple RNNs could actually work. This challenged the LSTM monopoly on 'long term memory.' The cluster began to invade the 'Generative' space, generating character-level text that looked surprisingly real.",
          "key_manifestations": [
            "Sutskever, I., et al. (2008). 'The Recurrent Temporal Restricted Boltzmann Machine'",
            "Graves, A., et al. (2009). 'A Novel Connectionist System for Unconstrained Handwriting Recognition'",
            "Collobert, R., & Weston, J. (2008). 'A Unified Architecture for Natural Language Processing' (Convolutional approach to sequences)",
            "Mikolov, T. (2010). 'Recurrent Neural Network Based Language Model' (PhD work starting 2008)"
          ]
        },
        "2010": {
          "salience_share": 15,
          "description": "A breakout interval (+6%). Tomas Mikolov released the 'RNNLM' toolkit, proving that a simple RNN could beat state-of-the-art n-gram models on speech recognition tasks. This killed the 'N-gram' cluster. Simultaneously, LSTMs broke records in handwriting recognition. The industry (Google/Microsoft) took notice. The 'motion' was the transition from 'Count-based' to 'Prediction-based' sequence modeling.",
          "key_manifestations": [
            "Mikolov, T., et al. (2010). 'Recurrent Neural Network Based Language Model'",
            "Mikolov, T., et al. (2011). 'Extensions of Recurrent Neural Network Language Model'",
            "Graves, A. (2011). 'Practical Variational Inference for Neural Networks' (Weight noise in RNNs)",
            "Martens, J., & Sutskever, I. (2011). 'Learning Recurrent Neural Networks with Hessian-Free Optimization'"
          ]
        },
        "2012": {
          "salience_share": 25,
          "description": "The 'AlexNet' moment for text (+10%). While CNNs won vision, RNNs/LSTMs won text and speech. The introduction of 'Word2Vec' (Mikolov at Google) revolutionized the input layer of this cluster, providing dense vector semantics. Researchers realized that 'King - Man + Woman = Queen'. This semantic algebra energized the field. The cluster began to consume 'Computational Linguistics.'",
          "key_manifestations": [
            "Mikolov, T., et al. (2013). 'Distributed Representations of Words and Phrases and their Compositionality'",
            "Graves, A. (2013). 'Generating Sequences With Recurrent Neural Networks' (Famous handwriting generation demo)",
            "Socher, R., et al. (2013). 'Recursive Deep Models for Semantic Compositionality over a Sentiment Treebank'",
            "Hermans, M., & Schrauwen, B. (2013). 'Training and Analysing Deep Recurrent Neural Networks'"
          ]
        },
        "2014": {
          "salience_share": 45,
          "description": "The 'Seq2Seq' Revolution (+20%). Sutskever et al. and Cho et al. independently discovered that you could encode a sequence into a vector and decode it into another sequence. This solved Machine Translation (MT). It was the death knell for 'Phrase-Based MT' (SMT). The 'Attention' mechanism (Bahdanau) was introduced at the very end of this interval, fixing the bottleneck of the fixed-size context vector. This was the moment the cluster learned to 'look' at specific parts of the input.",
          "key_manifestations": [
            "Sutskever, I., et al. (2014). 'Sequence to Sequence Learning with Neural Networks'",
            "Bahdanau, D., et al. (2014). 'Neural Machine Translation by Jointly Learning to Align and Translate' (Attention)",
            "Cho, K., et al. (2014). 'Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation' (GRU invention)",
            "Vinyals, O., et al. (2015). 'Show and Tell: A Neural Image Caption Generator'"
          ]
        },
        "2016": {
          "salience_share": 60,
          "description": "Attention became the dominant dynamic (+15%). Google Translate switched to Neural MT (GNMT). The field realized that 'Recurrence' was actually a hindrance to parallelization. Convolutions (WaveNet, ByteNet) attempted to replace RNNs for sequences to speed up training. The trajectory was 'Parallelization of Context'\u2014moving away from sequential processing O(N) to parallel processing O(1) or O(log N).",
          "key_manifestations": [
            "Wu, Y., et al. (2016). 'Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation'",
            "Oord, A. v. d., et al. (2016). 'WaveNet: A Generative Model for Raw Audio'",
            "Gehring, J., et al. (2017). 'Convolutional Sequence to Sequence Learning'",
            "Parikh, A. P., et al. (2016). 'A Decomposable Attention Model for Natural Language Inference'"
          ]
        },
        "2018": {
          "salience_share": 85,
          "description": "The 'Transformer' Singularity (+25%). The paper 'Attention Is All You Need' (late 2017) completely displaced RNNs/LSTMs. The recurrence was removed entirely, replaced by Self-Attention. BERT (Bidirectional Encoder Representations from Transformers) smashed every NLP benchmark. The cluster exploded, absorbing all of NLP, then Vision (ViT), then Biology. The 'Force of Motion' was the ability to train on the entire internet due to parallelization.",
          "key_manifestations": [
            "Vaswani, A., et al. (2017). 'Attention Is All You Need'",
            "Devlin, J., et al. (2018). 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding'",
            "Radford, A., et al. (2018). 'Improving Language Understanding by Generative Pre-Training' (GPT-1)",
            "Peters, M. E., et al. (2018). 'Deep Contextualized Word Representations' (ELMo - the last gasp of LSTM)"
          ]
        },
        "2020": {
          "salience_share": 90,
          "description": "Scaling (+5%). GPT-3 demonstrated that the Transformer architecture did not plateau. The cluster focused on 'Prompt Engineering'\u2014the realization that the sequence continuation capability of these models contained latent reasoning. The 'Displacing Force' was absolute; LSTMs were now considered legacy tech, only used for edge devices with strict memory constraints. The 'Context Window' became the new resource constraint.",
          "key_manifestations": [
            "Brown, T. B., et al. (2020). 'Language Models are Few-Shot Learners'",
            "Kitaev, N., et al. (2020). 'Reformer: The Efficient Transformer'",
            "Katharopoulos, A., et al. (2020). 'Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention'",
            "Dosovitskiy, A., et al. (2020). 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale'"
          ]
        },
        "2022": {
          "salience_share": 92,
          "description": "Efficiency and Length (+2%). The focus shifted to breaking the quadratic complexity $O(N^2)$ of attention. FlashAttention (Dao) allowed for faster training and longer contexts by optimizing IO. The 'Chinchilla' paper refined the scaling laws. The cluster was now the air that AI breathed; 'Sequence Transduction' was synonymous with 'Intelligence.'",
          "key_manifestations": [
            "Dao, T., et al. (2022). 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness'",
            "Press, O., et al. (2021). 'Train Short, Test Long: Attention with Linear Biases Enables Input Length Extrapolation' (ALiBi)",
            "Hoffmann, J., et al. (2022). 'Training Compute-Optimal Large Language Models'",
            "Chowdhery, A., et al. (2022). 'PaLM: Scaling Language Modeling with Pathways'"
          ]
        },
        "2024": {
          "salience_share": 95,
          "description": "The era of 'Infinite Context' (+3%). Techniques like Ring Attention and RoPE (Rotary Positional Embeddings) pushed context windows from 4k to 1M+ tokens (Gemini 1.5). The model could now 'read' entire books or codebases in a single forward pass. This fundamentally changed the nature of 'Memory' in AI\u2014retrieval (RAG) began to merge with context. The 'State Space Models' (Mamba) emerged as a potential challenger, attempting to bring back recurrence for efficiency, but the Transformer remained king.",
          "key_manifestations": [
            "Gu, A., & Dao, T. (2023). 'Mamba: Linear-Time Sequence Modeling with Selective State Spaces'",
            "Liu, H., et al. (2024). 'Ring Attention with Blockwise Transformers for Near-Infinite Context'",
            "Su, J., et al. (2024). 'RoFormer: Enhanced Transformer with Rotary Position Embedding' (Standardized adoption)",
            "Team, G. (2024). 'Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context'"
          ]
        }
      }
    },
    "7_reinforcement_control_theory": {
      "name": "Reinforcement Control Theory",
      "description": "This eigencluster represents the science of 'Agency'\u2014learning by interaction rather than instruction. It unifies the psychological concept of conditioning with the engineering discipline of Optimal Control. Trajectory-wise, it moved from the tabular Q-learning of the 90s (solving mazes) to the Deep RL of the 2010s (solving Atari/Go), and finally to the 'Alignment' era of the 2020s, where it provides the steering mechanism (RLHF) for Large Language Models. It is the bridge between 'Predicting the Future' (Supervised) and 'Changing the Future' (Control).",
      "trajectory": {
        "1990": {
          "salience_share": 8,
          "description": "The decade opened with a strong synthesis (+2%) of Dynamic Programming and Temporal Difference (TD) learning. Sutton and Barto were laying the groundwork. The 'Watkins' Q-learning' paper (1989/1990) provided a convergence proof for learning optimal policies without a model of the environment. The cluster was vibrant but theoretical, constrained by the inability to represent value functions for high-dimensional states (the 'Curse of Dimensionality').",
          "key_manifestations": [
            "Watkins, C. J. C. H., & Dayan, P. (1992). 'Q-learning' (1989 thesis context)",
            "Barto, A. G., et al. (1990). 'Neuronlike Adaptive Elements That Can Solve Difficult Learning Control Problems'",
            "Sutton, R. S. (1990). 'Integrated Architectures for Learning, Planning, and Reacting Based on Approximating Dynamic Programming'",
            "Lin, L. J. (1992). 'Self-Improving Reactive Agents Based on Reinforcement Learning, Planning and Teaching' (Experience Replay invention)"
          ]
        },
        "1992": {
          "salience_share": 12,
          "description": "A massive surge (+4%) driven by 'TD-Gammon.' Gerry Tesauro used TD-learning with a neural network to achieve master-level play in Backgammon. This was the 'AlphaGo' moment of the 90s. It proved that RL + Neural Nets could work. However, it was a 'lucky' success; Backgammon's dynamics were uniquely suited to the specific neural architecture. Attempts to replicate this on Chess or Go failed, leading to a 'local winter' for the cluster.",
          "key_manifestations": [
            "Tesauro, G. (1992). 'Practical Issues in Temporal Difference Learning'",
            "Tesauro, G. (1994). 'TD-Gammon, a Self-Teaching Backgammon Program' (Peak fame)",
            "Dayan, P. (1992). 'The Convergence of TD(lambda) for General lambda'",
            "Moore, A. W., & Atkeson, C. G. (1993). 'Prioritized Sweeping: Reinforcement Learning with Less Data and Less Time'"
          ]
        },
        "1994": {
          "salience_share": 10,
          "description": "Contraction (-2%). The 'Curse of Dimensionality' bit hard. Researchers realized that tabular RL didn't scale, and neural RL was unstable (divergent). The field pivoted to 'Robotics' and 'Control Theory,' adopting methods from engineering (LQR, PID) rather than pure learning. The 'Displacing Force' was the realization that you can't learn to walk by random trial and error on a physical robot without breaking it.",
          "key_manifestations": [
            "Rummery, G. A., & Niranjan, M. (1994). 'On-Line Q-Learning Using Connectionist Systems' (SARSA introduction)",
            "Singh, S. P. (1994). 'Reinforcement Learning Algorithms for Average-Payoff Markov Decision Processes'",
            "Schwartz, A. (1993). 'A Reinforcement Learning Method for Maximizing Undiscounted Rewards'",
            "Bertsekas, D. P., & Tsitsiklis, J. N. (1996). 'Neuro-Dynamic Programming' (1994-1995 drafts, bridging RL and Control)"
          ]
        },
        "1996": {
          "salience_share": 8,
          "description": "Stasis. The publication of the book 'Neuro-Dynamic Programming' (Bertsekas/Tsitsiklis) formalized the field, linking AI RL to Operations Research. This was intellectually healthy but culturally quiet. RL became a sub-discipline of Applied Math. The 'Function Approximation' problem remained the key blocker: how to generalize value estimates without diverging.",
          "key_manifestations": [
            "Bertsekas, D. P., & Tsitsiklis, J. N. (1996). 'Neuro-Dynamic Programming'",
            "Kaelbling, L. P., et al. (1996). 'Reinforcement Learning: A Survey'",
            "Tsitsiklis, J. N., & Van Roy, B. (1997). 'An Analysis of Temporal-Difference Learning with Function Approximation'",
            "Mahadevan, S. (1996). 'Average Reward Reinforcement Learning: Foundations, Algorithms, and Empirical Results'"
          ]
        },
        "1998": {
          "salience_share": 9,
          "description": "Sutton & Barto published 'Reinforcement Learning: An Introduction.' This textbook (+1%) codified the field, creating a standard curriculum. It separated the 'Agent' from the 'Environment,' defining the modern API (State, Action, Reward). While variance was stable, the 'Policy Gradient' theorem (Sutton et al.) was published, planting the seed for PPO and modern actor-critic methods.",
          "key_manifestations": [
            "Sutton, R. S., & Barto, A. G. (1998). 'Reinforcement Learning: An Introduction'",
            "Sutton, R. S., et al. (2000). 'Policy Gradient Methods for Reinforcement Learning with Function Approximation' (1999 NIPS)",
            "Precup, D., et al. (2000). 'Eligibility Traces for Off-Policy Policy Evaluation'",
            "Pareto, A. (Legacy). 'Multi-Objective RL context'"
          ]
        },
        "2000": {
          "salience_share": 7,
          "description": "Decay (-2%). The 'Kernel Machines' (SVMs) were eating the world. RL was viewed as 'too hard' because of the non-stationary target problem. Research shifted to 'Inverse Reinforcement Learning' (Ng & Russell)\u2014learning the reward function from observation. This was more applicable to robotics (learning from demonstration) than pure trial-and-error.",
          "key_manifestations": [
            "Ng, A. Y., & Russell, S. (2000). 'Algorithms for Inverse Reinforcement Learning'",
            "Baxter, J., & Bartlett, P. L. (2001). 'Infinite-Horizon Policy-Gradient Estimation'",
            "Kearns, M., & Singh, S. (2002). 'Near-Optimal Reinforcement Learning in Polynomial Time'",
            "Peters, J., & Schaal, S. (2006). 'Policy Gradient Methods for Robotics' (Early work context)"
          ]
        },
        "2002": {
          "salience_share": 6,
          "description": "Stasis. The cluster found a niche in 'Autonomous Helicopter Flight' (Stanford). This was a high-profile success, but it relied heavily on model-based control, not pure RL. The 'Displacing Force' was the general failure of RL to solve even simple video games of the era. It remained a 'toy world' technology.",
          "key_manifestations": [
            "Ng, A. Y., et al. (2004). 'Inverted Autonomous Helicopter Flight via Reinforcement Learning' (2002-2003 work)",
            "Kakade, S. M. (2002). 'A Natural Policy Gradient'",
            "Lagoudakis, M. G., & Parr, R. (2003). 'Least-Squares Policy Iteration'",
            "Bagnell, J. A., et al. (2003). 'Policy Search by Dynamic Programming'"
          ]
        },
        "2004": {
          "salience_share": 6,
          "description": "Stasis. The field focused on 'Hierarchical RL' (MAXQ, Options framework) to solve the temporal abstraction problem. While theoretically elegant, these methods struggled to learn the hierarchy automatically. The cluster was waiting for a better function approximator (Deep Learning).",
          "key_manifestations": [
            "Barto, A. G., & Mahadevan, S. (2003). 'Recent Advances in Hierarchical Reinforcement Learning'",
            "Engel, Y., et al. (2003). 'Bayes-Gaussian Process Reinforcement Learning'",
            "Riedmiller, M. (2005). 'Neural Fitted Q Iteration - First Experiences with a Data Efficient Neural Reinforcement Learning Method'",
            "Ernst, D., et al. (2005). 'Tree-Based Batch Mode Reinforcement Learning'"
          ]
        },
        "2006": {
          "salience_share": 6,
          "description": "No significant movement. The 'Deep Learning' rebirth (Cluster 1) was happening, but it hadn't merged with RL yet. Hinton was classifying digits; he wasn't controlling agents. RL remained dominated by linear function approximation and tile coding.",
          "key_manifestations": [
            "Kocsis, L., & Szepesv\u00e1ri, C. (2006). 'Bandit Based Monte-Carlo Planning' (UCT - The seed for AlphaGo)",
            "Strehl, A. L., & Littman, M. L. (2005). 'A Theoretical Analysis of Model-Based Interval Estimation'",
            "Todorov, E. (2006). 'Linearly-Solvable Markov Decision Problems'",
            "Hester, T., & Stone, P. (2009). 'TEXPLORE: Real-Time Sample-Efficient Reinforcement Learning for Robots' (Early drafts)"
          ]
        },
        "2008": {
          "salience_share": 7,
          "description": "A quiet catalyst (+1%). The UCT algorithm (Upper Confidence Bound for Trees) revolutionized Computer Go (MoGo, Pachi), allowing Monte Carlo Tree Search to beat amateurs. This was a 'Symbolic/Statistical' search method, not yet Deep RL, but it solved the 'Exploration/Exploitation' dilemma in large search spaces.",
          "key_manifestations": [
            "Gelly, S., et al. (2012). 'The Grand Challenge of Computer Go: Agile Approaches using Monte-Carlo Tree Search' (Retrospective on 2008 era)",
            "Silver, D., et al. (2008). 'Sample-Based Learning and Search with Permanent and Transient Memories'",
            "Szepesv\u00e1ri, C. (2010). 'Algorithms for Reinforcement Learning' (Drafts)",
            "Busoniu, L., et al. (2010). 'Reinforcement Learning and Dynamic Programming Using Function Approximators'"
          ]
        },
        "2010": {
          "salience_share": 8,
          "description": "The Deep Learning merge began. DeepMind was founded (2010). Their mission was to combine Cluster 1 (Deep Learning) with Cluster 7 (RL). The variance began to creep up as 'Neural Fitted Q Iteration' showed signs of life. The industry (Google) began to look at RL for datacenter cooling.",
          "key_manifestations": [
            "Lange, S., & Riedmiller, M. (2010). 'Deep Auto-Encoder Neural Networks in Reinforcement Learning'",
            "Mnih, V., et al. (2013). 'Playing Atari with Deep Reinforcement Learning' (Internal DeepMind work started 2011/2012)",
            "Ross, S., et al. (2011). 'A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning' (DAgger)",
            "Pilarski, P. M., et al. (2011). 'Online Human Training of a Myoelectric Prosthesis Controller'"
          ]
        },
        "2012": {
          "salience_share": 20,
          "description": "The 'DQN' Explosion (+12%). DeepMind (Mnih et al.) released the Atari paper. A single network learned to play 49 different games from pixels, using Experience Replay and Target Networks to stabilize training. This broke the 'Deadly Triad' (Function Approximation + Bootstrapping + Off-policy). RL suddenly went from 'Applied Math' to 'AGI Contender.'",
          "key_manifestations": [
            "Mnih, V., et al. (2013). 'Playing Atari with Deep Reinforcement Learning'",
            "Riedmiller, M., et al. (2012). 'Reinforcement Learning for Robot Soccer'",
            "Bellemare, M. G., et al. (2013). 'The Arcade Learning Environment: An Evaluation Platform for General Agents'",
            "Levine, S., & Koltun, V. (2013). 'Guided Policy Search'"
          ]
        },
        "2014": {
          "salience_share": 35,
          "description": "AlphaGo (+15%). DeepMind combined MCTS (from 2008) with Deep RL (Value Networks and Policy Networks). The result was a system that beat Lee Sedol (2016) but the papers/tech were defined here. Simultaneously, 'Deterministic Policy Gradients' (DPG/DDPG) brought Deep RL to continuous control (Robotics), solving the discrete action limitation of DQN.",
          "key_manifestations": [
            "Silver, D., et al. (2014). 'Deterministic Policy Gradient Algorithms'",
            "Lillicrap, T. P., et al. (2015). 'Continuous Control with Deep Reinforcement Learning' (DDPG)",
            "Schulman, J., et al. (2015). 'Trust Region Policy Optimization' (TRPO)",
            "Mnih, V., et al. (2015). 'Human-level Control through Deep Reinforcement Learning' (Nature cover)"
          ]
        },
        "2016": {
          "salience_share": 45,
          "description": "The 'Policy Gradient' Era (+10%). TRPO and later PPO (Proximal Policy Optimization) became the standard for stability. A3C (Asynchronous Actor-Critic) showed how to scale RL across CPU cores. RL began to solve complex games like Dota 2 (OpenAI Five). The cluster was 'Eating' the games industry. However, 'Sample Efficiency' remained a massive problem; it took millions of games to learn what a human learns in minutes.",
          "key_manifestations": [
            "Schulman, J., et al. (2017). 'Proximal Policy Optimization Algorithms' (PPO)",
            "Mnih, V., et al. (2016). 'Asynchronous Methods for Deep Reinforcement Learning' (A3C)",
            "Silver, D., et al. (2017). 'Mastering the Game of Go without Human Knowledge' (AlphaGo Zero)",
            "Finn, C., et al. (2016). 'Guided Cost Learning: Deep Inverse Optimal Control via Policy Optimization'"
          ]
        },
        "2018": {
          "salience_share": 48,
          "description": "Stabilization/Reality Check (+3%). While RL won games, it failed to deploy in real-world robotics due to the 'Sim-to-Real' gap. The 'Soft Actor-Critic' (SAC) algorithm introduced entropy maximization for better exploration. The variance growth slowed as the community realized that 'Tabula Rasa' learning (learning from scratch) was too expensive. The focus shifted to 'Offline RL'\u2014learning from static datasets.",
          "key_manifestations": [
            "Haarnoja, T., et al. (2018). 'Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor'",
            "Fujimoto, S., et al. (2018). 'Addressing Function Approximation Error in Actor-Critic Methods' (TD3)",
            "Burda, Y., et al. (2018). 'Exploration by Random Network Distillation'",
            "Vinyals, O., et al. (2019). 'Grandmaster Level in StarCraft II using Multi-Agent Reinforcement Learning' (AlphaStar)"
          ]
        },
        "2020": {
          "salience_share": 45,
          "description": "Contraction (-3%). The 'Transformer' (Cluster 6) was sucking up all the oxygen. Supervised learning on massive datasets seemed to scale better than RL. RL was criticized for being finicky and hard to reproduce. However, a latent connection was forming: 'Decision Transformer' showed that RL could be framed as sequence modeling.",
          "key_manifestations": [
            "Chen, L., et al. (2021). 'Decision Transformer: Reinforcement Learning via Sequence Modeling'",
            "Agarwal, R., et al. (2020). 'An Optimistic Perspective on Offline Reinforcement Learning' (DQN Dataset)",
            "Badia, A. P., et al. (2020). 'Agent57: Outperforming the Atari Human Benchmark'",
            "Schrittwieser, J., et al. (2020). 'Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model' (MuZero)"
          ]
        },
        "2022": {
          "salience_share": 55,
          "description": "Resurgence via RLHF (+10%). Reinforcement Learning from Human Feedback became the 'Secret Sauce' of ChatGPT. It wasn't used to learn the knowledge (which came from pre-training), but to 'Align' the model with human intent. PPO (from 2017) found its killer app: fine-tuning LLMs. RL shifted from 'Control' to 'Alignment.'",
          "key_manifestations": [
            "Ouyang, L., et al. (2022). 'Training Language Models to Follow Instructions with Human Feedback'",
            "Bai, Y., et al. (2022). 'Constitutional AI: Harmlessness from AI Feedback'",
            "Stiennon, N., et al. (2020). 'Learning to Summarize with Human Feedback' (The precursor)",
            "Christiano, P. F., et al. (2017/2022). 'Deep Reinforcement Learning from Human Preferences' (Foundational technique applied)"
          ]
        },
        "2024": {
          "salience_share": 60,
          "description": "The 'Reasoning' Era (+5%). RL is now being applied to the 'Chain of Thought.' Systems like AlphaProof use RL to search through the space of mathematical proofs. The new paradigm is 'Self-Correction'\u2014using RL to train models to verify and fix their own outputs. The boundary between 'Inference' (Supervised) and 'Search' (RL) is blurring completely (System 1 vs System 2 integration).",
          "key_manifestations": [
            "Lightman, H., et al. (2023). 'Let's Verify Step by Step'",
            "DeepMind (2024). 'AlphaProof: Formal Reasoning via Reinforcement Learning'",
            "Singh, A., et al. (2023). 'Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models'",
            "Schulman, J. (2024). 'Reinforcement Learning with Large Language Models' (Keynote/position paper context)"
          ]
        }
      }
    },
    "8_statistical_learning_theory": {
      "name": "Statistical Learning Theory",
      "description": "This eigencluster represents the 'conscience' of the field: the mathematical framework concerned with generalization guarantees, sample complexity, and the bias-variance trade-off. Founded by Vapnik and Chervonenkis, it seeks to answer *why* learning algorithms work on unseen data. Its trajectory is inverse-U shaped: it reigned supreme in the 90s/00s by explaining SVMs, struggled to explain the 'unreasonable effectiveness' of deep learning in the 2010s (where models generalize despite massive over-parameterization), and resurged in the 2020s with the 'Double Descent' phenomenon.",
      "trajectory": {
        "1990": {
          "salience_share": 15,
          "description": "The cluster was in a phase of 'Foundational Translation.' Vapnik's work was migrating from Russian math journals to Western CS departments. The concept of 'VC Dimension' (Vapnik-Chervonenkis) was replacing simple parameter counting as the measure of model complexity. This provided a rigorous way to predict test error based on training error and model capacity, delegitimizing the 'heuristic' nature of early neural nets.",
          "key_manifestations": [
            "Vapnik, V., & Chervonenkis, A. (1991). 'The Necessary and Sufficient Conditions for Consistency of the Method of Empirical Risk Minimization'",
            "Haussler, D. (1992). 'Decision Theoretic Generalizations of the PAC Model for Neural Net and Other Learning Applications' (1990 work)",
            "Valiant, L. G. (1984/1990). 'A Theory of the Learnable' (PAC learning foundation persisting)",
            "Blumer, A., et al. (1989/1990). 'Learnability and the Vapnik-Chervonenkis Dimension'"
          ]
        },
        "1992": {
          "salience_share": 18,
          "description": "Variance grew (+3%) as the 'Structural Risk Minimization' (SRM) principle became the theoretical bedrock for the rising SVM cluster. This principle dictates that one should trade off training error against VC dimension. The motion was 'Codification': researchers stopped asking 'does it work?' and started asking 'is it consistent?'. The Displacing Force acting against neural nets was the inability to calculate their VC dimension tight enough to be useful.",
          "key_manifestations": [
            "Guyon, I., et al. (1992). 'Structural Risk Minimization for Character Recognition'",
            "Vapnik, V. (1992). 'Principles of Risk Minimization for Learning Theory'",
            "Kearns, M. J., & Vazirani, U. V. (1994). 'An Introduction to Computational Learning Theory' (Drafts circulating 1992)",
            "Baum, E. B., & Haussler, D. (1989/1992). 'What Size Net Gives Valid Generalization?'"
          ]
        },
        "1994": {
          "salience_share": 20,
          "description": "The introduction of 'Boosting' (Schapire/Freund) acted as a major catalyst (+2%). The theory proved that a set of weak learners could be combined into a strong learner with arbitrary accuracy. This was a triumph of theory leading practice. Boosting wasn't a hack; it was a mathematical inevitability derived from PAC learning. This cemented the cluster's dominance over the 'Neural' approach.",
          "key_manifestations": [
            "Freund, Y., & Schapire, R. E. (1995). 'A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting' (1994 tech report)",
            "Schapire, R. E. (1990/1994). 'The Strength of Weak Learnability'",
            "Vapnik, V. (1995). 'The Nature of Statistical Learning Theory' (Preparation/Drafts)",
            "Talagrand, M. (1994). 'Sharper Bounds for Gaussian and Empirical Processes' (Rademacher complexity roots)"
          ]
        },
        "1996": {
          "salience_share": 22,
          "description": "Stasis/Peak. The theory was now the primary language of the NIPS conference. 'Rademacher Complexity' began to supersede VC dimension as a data-dependent measure of complexity, offering tighter bounds. The cluster effectively 'explained' why Kernel methods worked (large margin = low complexity). It provided a comfort zone of mathematical certainty.",
          "key_manifestations": [
            "Bartlett, P. L. (1998). 'The Sample Complexity of Pattern Classification with Neural Networks' (1996 work showing weight magnitude matters more than parameter count)",
            "Koltchinskii, V. (2001). 'Rademacher Penalties and Structural Risk Minimization' (Roots in late 90s)",
            "Devroye, L., et al. (1996). 'A Probabilistic Theory of Pattern Recognition'",
            "Schapire, R. E., et al. (1998). 'Boosting the Margin: A New Explanation for the Effectiveness of Voting Methods' (1997 work)"
          ]
        },
        "1998": {
          "salience_share": 20,
          "description": "A slight contraction (-2%) as the 'Bagging' and 'Random Forest' empirical success challenged the theory. Breiman showed that Random Forests resisted overfitting even when grown deep, which contradicted simple VC bounds. The theory struggled to explain 'Ensemble' behavior where complexity seemed to *increase* generalization. This was the first crack in the 'Overfitting' dogma.",
          "key_manifestations": [
            "Breiman, L. (2001). 'Random Forests' (1998-1999 active research)",
            "Friedman, J., et al. (2000). 'Additive Logistic Regression: a Statistical View of Boosting' (1998 work)",
            "Shawe-Taylor, J., et al. (1998). 'Structural Risk Minimization over Data-Dependent Hierarchies'",
            "Anthony, M., & Bartlett, P. L. (1999). 'Neural Network Learning: Theoretical Foundations'"
          ]
        },
        "2000": {
          "salience_share": 18,
          "description": "Decay (-2%). The rise of 'Bayesian' methods (Cluster 3) offered an alternative path to generalization via 'Marginal Likelihood' rather than 'Worst-Case Bounds.' The Bayesian view (MacKay, Neal) argued that SLT was too pessimistic. Why care about the worst case? Average case is what matters. This philosophical split diluted the cluster's authority.",
          "key_manifestations": [
            "Tipping, M. E. (2001). 'Sparse Bayesian Learning and the Relevance Vector Machine'",
            "Cucker, F., & Smale, S. (2001). 'On the Mathematical Foundations of Learning'",
            "Bousquet, O., & Elisseeff, A. (2002). 'Stability and Generalization' (2000 work shifting focus to Algorithmic Stability)",
            "Herbrich, R., et al. (2000). 'Large Margin Rank Boundaries for Ordinal Regression'"
          ]
        },
        "2002": {
          "salience_share": 15,
          "description": "The cluster stabilized around 'Algorithmic Stability' (+0%). Bousquet and Elisseeff showed that if an algorithm doesn't change much when you remove one training point, it generalizes. This was a more flexible tool than VC dimension and applied well to k-NN and SVMs. However, it still failed to account for the nascent 'Feature Learning' phenomena.",
          "key_manifestations": [
            "Bousquet, O., & Elisseeff, A. (2002). 'Stability and Generalization'",
            "Mendelson, S. (2002). 'Geometric Parameters in Learning Theory'",
            "Poggio, T., et al. (2004). 'General Conditions for Predictivity in Learning Theory' (2002 context)",
            "Zhang, T. (2002). 'Covering Number Bounds of Certain Regularized Linear Function Classes'"
          ]
        },
        "2004": {
          "salience_share": 12,
          "description": "Contraction (-3%). The focus of the ML community shifted to 'Manifold Learning' (ISOMAP, LLE). SLT had little to say about unsupervised learning of geometry. The bounds for semi-supervised learning were loose and uninformative. The 'Displacing Force' was the empirical success of methods that had no right to work according to classical theory (like early Deep Belief Nets).",
          "key_manifestations": [
            "Belkin, M., et al. (2004). 'Regularization and Semi-Supervised Learning on Large Graphs'",
            "Zhu, X., et al. (2003). 'Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions'",
            "Steinwart, I. (2005). 'Consistency of Support Vector Machines for Heavy Tailed Distributions'",
            "Kaariainen, M. (2005). 'Generalization Error Bounds using Unlabeled Data'"
          ]
        },
        "2006": {
          "salience_share": 10,
          "description": "The 'Deep Learning' anomaly began (-2%). Hinton's networks were massive, non-convex, and had effective VC dimensions far exceeding the number of training points. According to SLT, they should overfit massively. They didn't. This 'Paradox' marginalized the cluster; theorists were seen as 'party poopers' saying 'that shouldn't work' while empiricists set new benchmarks.",
          "key_manifestations": [
            "Audibert, J. Y., & Tsybakov, A. B. (2007). 'Fast Learning Rates for Plug-in Classifiers'",
            "Rakhlin, A., et al. (2005). 'Stability Results for the Leave-One-Out Cross-Validation'",
            "Shalev-Shwartz, S., et al. (2007). 'A Primal-Dual Perspective of Online Learning Algorithms'",
            "Bengio, Y., et al. (2006). 'Convex Neural Networks' (Attempting to reconcile theory)"
          ]
        },
        "2008": {
          "salience_share": 8,
          "description": "Stasis. The cluster retreated to 'Online Learning' (Regret Bounds). This was a safe harbor where theory still held (Cesa-Bianchi, Lugosi). The 'Multi-Armed Bandit' problem became a hotbed for theoretical work (UCB bounds), which fed into the RL cluster. But for the main Classification/Regression tasks, SLT was largely ignored by the SOTA chasers.",
          "key_manifestations": [
            "Cesa-Bianchi, N., & Lugosi, G. (2006/2008). 'Prediction, Learning, and Games'",
            "Bubeck, S., & Cesa-Bianchi, N. (2012). 'Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems' (Roots in 2008)",
            "Hazan, E., et al. (2007). 'Logarithmic Regret Algorithms for Online Convex Optimization'",
            "Kakade, S. M., et al. (2008). 'On the Complexity of Linear Prediction: Risk Bounds, Margin Bounds, and Regularization'"
          ]
        },
        "2010": {
          "salience_share": 6,
          "description": "The 'Crisis of Theory' (-2%). As Deep Learning exploded, the gap between theory and practice became a chasm. Zhang et al. (later paper) would famously demonstrate that deep nets can memorize random labels (meaning infinite capacity) yet still generalize on real labels. This contradicted the core assumption that 'low capacity is necessary for generalization.' SLT looked broken.",
          "key_manifestations": [
            "Srebro, N., et al. (2010). 'Smoothness, Low Noise and Fast Rates'",
            "Bartlett, P. L., et al. (2017). 'Spectrally-normalized Margin Bounds for Neural Networks' (Roots in early 2010s struggles)",
            "Shalev-Shwartz, S., & Ben-David, S. (2014). 'Understanding Machine Learning: From Theory to Algorithms' (Textbook codifying the 'Classical' view just as it failed)",
            "Rahimi, A., & Recht, B. (2011). 'Random Features for Large-Scale Kernel Machines' (Theoretical justification for approximation)"
          ]
        },
        "2012": {
          "salience_share": 5,
          "description": "Nadir. Post-AlexNet, nobody cared about bounds. The variance was driven purely by 'does it get SOTA on ImageNet?' The 'Displacing Force' was pure Empiricism. Theorists began trying to bound 'Deep' networks but the bounds were vacuous (e.g., 'Error < 100000%'). The cluster was effectively decoupled from the progress of the field.",
          "key_manifestations": [
            "Hardt, M., et al. (2016). 'Train Faster, Generalize Better' (2015 work starting to address the gap)",
            "Neyshabur, B., et al. (2015). 'In Search of the Real Inductive Bias: On the Role of Implicit Regularization in Deep Learning'",
            "Livni, R., et al. (2014). 'On the Computational Efficiency of Training Neural Networks'",
            "Arora, S., et al. (2014). 'Provable Bounds for Learning Some Deep Representations' (Theorists fighting back)"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "Stasis/Incubation. A new line of thought emerged: 'Implicit Regularization.' Perhaps SGD itself *is* the regularizer? This idea (Srebro, Neyshabur) began to germinate. The theory wasn't about the model class anymore, but the *algorithm* used to train it. This shifted SLT towards 'Optimization Theory' (Cluster 5).",
          "key_manifestations": [
            "Neyshabur, B., et al. (2015). 'Path-SGD: Path-Normalized Optimization in Deep Neural Networks'",
            "Gunasekar, S., et al. (2017). 'Implicit Regularization in Matrix Factorization' (2014-2016 context)",
            "Choromanska, A., et al. (2015). 'The Loss Surfaces of Multilayer Networks'",
            "Telgarsky, M. (2015). 'Representation Benefits of Deep Feedforward Networks'"
          ]
        },
        "2016": {
          "salience_share": 7,
          "description": "The 'Understanding Deep Learning' Workshop era (+2%). The Zhang et al. 'Random Labels' paper forced the community to reckon with the failure of VC dimension. This shock therapy revitalized the cluster. New concepts like 'Norm-based bounds' and 'PAC-Bayes' for neural nets gained traction. The motion was a desperate attempt to catch up with practice.",
          "key_manifestations": [
            "Zhang, C., et al. (2017). 'Understanding Deep Learning Requires Rethinking Generalization' (The catalyst paper)",
            "Dziugaite, G. K., & Roy, D. M. (2017). 'Computing Nonvacuous Generalization Bounds for Deep (Stochastic) Neural Networks with Many More Parameters than Training Data'",
            "Arora, S., et al. (2018). 'Stronger Generalization Bounds for Deep Nets via a Compression Approach'",
            "Kawaguchi, K. (2016). 'Deep Learning without Poor Local Minima'"
          ]
        },
        "2018": {
          "salience_share": 12,
          "description": "Resurgence via 'Double Descent' (+5%). Belkin et al. identified the 'Double Descent' curve, reconciling the classical 'U-shaped' bias-variance trade-off with the modern 'Descent' behavior. It showed that after the interpolation threshold (zero training error), generalization error decreases again as capacity increases. This unified SLT with Deep Learning, providing a new 'Modern Regime' theory.",
          "key_manifestations": [
            "Belkin, M., et al. (2019). 'Reconciling Modern Machine-Learning Practice and the Bias-Variance Trade-off' (Double Descent)",
            "Nakkiran, P., et al. (2020). 'Deep Double Descent: Where Bigger Models and More Data Hurt'",
            "Jacot, A., et al. (2018). 'Neural Tangent Kernel: Convergence and Generalization in Neural Networks'",
            "Hastie, T., et al. (2019). 'Surprises in High-Dimensional Ridgeless Least Squares Interpolation'"
          ]
        },
        "2020": {
          "salience_share": 14,
          "description": "The 'Neural Tangent Kernel' (NTK) peak (+2%). This theory treated wide neural nets as kernel machines, allowing exact analysis of their training dynamics. While it didn't perfectly match finite-width nets, it was the first time theorists had a 'microscope' into the black box. The cluster provided the 'why' for scaling laws.",
          "key_manifestations": [
            "Arora, S., et al. (2019). 'On Exact Computation with an Infinitely Wide Neural Net'",
            "Bietti, A., & Mairal, J. (2019). 'On the Inductive Bias of Neural Tangent Kernels'",
            "Yang, G. (2019). 'Scaling Limits of Wide Neural Networks with Weight Sharing'",
            "Chizat, L., et al. (2019). 'On Lazy Training in Differentiable Programming'"
          ]
        },
        "2022": {
          "salience_share": 12,
          "description": "Correction (-2%). The 'Feature Learning' vs 'Lazy Training' debate showed that NTK (Lazy) doesn't capture the magic of deep learning (Feature Learning). The cluster pivoted to 'Mean Field Theory' and 'Tensor Programs' (Greg Yang) to analyze the feature learning regime. The 'Displacing Force' was the complexity of the math; only a handful of researchers (Greg Yang, Boris Hanin) could effectively push this frontier.",
          "key_manifestations": [
            "Yang, G., & Hu, E. J. (2021). 'Tensor Programs IV: Feature Learning in Infinite-Width Neural Networks'",
            "Bordelon, B., et al. (2020). 'Spectrum Dependent Learning Curves in Kernel Regression and Wide Neural Networks'",
            "Vybiral, J. (2022). 'On the Condition Number of the Neural Tangent Kernel'",
            "Abbe, E., et al. (2022). 'The Merged-Staircase Property: A Necessary and Sufficient Condition for SGD Learning of Sparse Functions'"
          ]
        },
        "2024": {
          "salience_share": 11,
          "description": "Current trajectory is analyzing 'In-Context Learning' (-1%). Theorists are trying to model how a Transformer 'learns' a function during inference time without weight updates. Is it doing Gradient Descent in its forward pass? (Von Oswald et al.). The cluster is becoming 'Mechanistic Interpretability'\u2014less about bounds, more about reverse-engineering the algorithm learned by the weights.",
          "key_manifestations": [
            "Von Oswald, J., et al. (2023). 'Transformers learn in-context by gradient descent'",
            "Garg, S., et al. (2022). 'What Can Transformers Learn In-Context? A Case Study of Simple Function Classes'",
            "Bietti, A., et al. (2024). 'Birth of a Transformer: A Memory Viewpoint'",
            "Sanford, C., et al. (2024). 'The Sample Complexity of In-Context Learning'"
          ]
        }
      }
    },
    "9_generative_latent_manifolds": {
      "name": "Generative Latent Manifolds",
      "description": "This eigencluster concerns the modeling of the data distribution $P(X)$ itself, rather than the conditional $P(Y|X)$. It represents the dream of 'Creativity' in AI\u2014systems that can synthesize new images, sounds, and text. The trajectory tracks the evolution from the Gaussian Mixture Models of the 90s, through the Restricted Boltzmann Machines of the 2000s, the adversarial wars of GANs in the 2010s, to the thermodynamic triumph of Diffusion Models in the 2020s. It is the engine of the 'Generative AI' boom.",
      "trajectory": {
        "1990": {
          "salience_share": 6,
          "description": "The cluster was dominated by 'Gaussian Mixture Models' (GMMs) (+1%). If you wanted to model a dataset, you fit a sum of Gaussians (EM algorithm). This was mathematically clean but expressively bankrupt; it could model 'blobs' but not 'structures.' The 'Latent Space' was just an index of which Gaussian you belonged to. There was no 'manifold' learning yet, just clustering.",
          "key_manifestations": [
            "Xu, L., & Jordan, M. I. (1996). 'On Convergence Properties of the EM Algorithm for Gaussian Mixtures' (1990s context)",
            "Dempster, A. P., et al. (1977/1990). 'Maximum Likelihood from Incomplete Data via the EM Algorithm' (The standard)",
            "Neal, R. M. (1992). 'Connectionist Learning of Belief Networks' (Early generative neural work)",
            "Pomerleau, D. A. (1991). 'Efficient Training of Artificial Neural Networks for Autonomous Navigation' (Generative perception context)"
          ]
        },
        "1992": {
          "salience_share": 5,
          "description": "Stasis. The field was focused on discrimination (SVMs), not generation. 'Generative' meant 'Bayesian Network' (Cluster 3). The idea of generating high-dimensional data (like images) was considered science fiction. The variance was maintained by the use of GMMs in speech synthesis (HMM-GMM), but this was 'parametric' generation, not 'learned' generation.",
          "key_manifestations": [
            "Rabiner, L. R. (1989/1992). 'Tutorial on Hidden Markov Models'",
            "Hinton, G. E., & Zemel, R. S. (1994). 'Autoencoders, Minimum Description Length, and Helmholtz Free Energy' (1993 work)",
            "Bishop, C. M. (1994). 'Mixture Density Networks'",
            "Frey, B. J. (1998). 'Graphical Models for Machine Learning and Digital Communication' (Early generative vision)"
          ]
        },
        "1994": {
          "salience_share": 6,
          "description": "A flicker of innovation (+1%) with the 'Helmholtz Machine' (Hinton/Dayan). This introduced the 'Wake-Sleep' algorithm, an early attempt to learn a generative model with a neural net. It failed to scale due to the difficulty of training, but it established the 'Analysis by Synthesis' paradigm: to understand the world, you must be able to generate it. This was the spiritual ancestor of the VAE.",
          "key_manifestations": [
            "Dayan, P., et al. (1995). 'The Helmholtz Machine'",
            "Hinton, G. E., et al. (1995). 'The \"Wake-Sleep\" Algorithm for Unsupervised Neural Networks'",
            "Saul, L. K., et al. (1996). 'Mean Field Theory for Sigmoid Belief Networks'",
            "Olshausen, B. A., & Field, D. J. (1996). 'Emergence of Simple-Cell Receptive Field Properties by Learning a Sparse Code' (Generative basis functions)"
          ]
        },
        "1996": {
          "salience_share": 5,
          "description": "Stasis. 'Independent Component Analysis' (ICA) became the dominant method for blind source separation (the 'Cocktail Party Problem'). ICA is a linear generative model. It showed that non-Gaussian latent variables could recover structure (like voices) that PCA missed. However, it was strictly linear. The non-linear generative frontier was dormant.",
          "key_manifestations": [
            "Bell, A. J., & Sejnowski, T. J. (1995/1996). 'An Information-Maximization Approach to Blind Separation and Blind Deconvolution'",
            "Hyv\u00e4rinen, A., & Oja, E. (2000). 'Independent Component Analysis: Algorithms and Applications' (Roots in 96-98)",
            "Lee, T. W., et al. (1999). 'Independent Component Analysis using an Extended Infomax Algorithm'",
            "Roweis, S. T., & Ghahramani, Z. (1999). 'A Unifying Review of Linear Gaussian Models'"
          ]
        },
        "1998": {
          "salience_share": 5,
          "description": "No significant movement. The 'Manifold Learning' boom (ISOMAP, LLE) began around this time (2000 publication), focusing on *finding* the manifold, not *generating* from it. The distinction is crucial: ISOMAP gives you coordinates; it doesn't give you a function to map coordinates back to pixels. The generative path was blocked by the intractability of the partition function.",
          "key_manifestations": [
            "Tenenbaum, J. B., et al. (2000). 'A Global Geometric Framework for Nonlinear Dimensionality Reduction' (ISOMAP - 1998 context)",
            "Roweis, S. T., & Saul, L. K. (2000). 'Nonlinear Dimensionality Reduction by Locally Linear Embedding'",
            "Tipping, M. E., & Bishop, C. M. (1999). 'Probabilistic Principal Component Analysis'",
            "Attias, H. (1999). 'Independent Factor Analysis'"
          ]
        },
        "2000": {
          "salience_share": 6,
          "description": "Stasis/Incubation. The 'Products of Experts' (PoE) idea by Hinton suggested that high-dimensional data is best modeled by the intersection of many constraints, not the sum of many prototypes (GMMs). This was a crucial theoretical pivot. It laid the groundwork for RBMs. But practically, generation was still stuck on 'Eigenfaces' (PCA).",
          "key_manifestations": [
            "Hinton, G. E. (2002). 'Training Products of Experts by Minimizing Contrastive Divergence' (2000 drafts)",
            "Welling, M., et al. (2003). 'A New Learning Algorithm for Mean Field Boltzmann Machines'",
            "Smolensky, P. (Legacy). 'Information Processing in Dynamical Systems' (The RBM origin)",
            "Viola, P., & Jones, M. (2001). 'Rapid Object Detection using a Boosted Cascade of Simple Features' (The discriminative antithesis)"
          ]
        },
        "2002": {
          "salience_share": 8,
          "description": "The 'RBM' Awakening (+2%). Hinton showed that Restricted Boltzmann Machines could be trained efficiently with Contrastive Divergence. This allowed for the learning of 'features' that could reconstruct the input (digits). It was the first time a neural net could hallucinate a digit that looked plausible. The 'latent manifold' was finally being populated by non-linear coordinates.",
          "key_manifestations": [
            "Hinton, G. E. (2002). 'Training Products of Experts by Minimizing Contrastive Divergence'",
            "Welling, M., & Hinton, G. E. (2002). 'A New Learning Algorithm for Mean Field Boltzmann Machines'",
            "Marks, T. K., & Movellan, J. R. (2001). 'Diffusion Networks, Products of Experts, and Factor Analysis'",
            "Teh, Y. W., & Hinton, G. E. (2001). 'Rate-coded Restricted Boltzmann Machines for Face Recognition'"
          ]
        },
        "2004": {
          "salience_share": 7,
          "description": "Stasis. While RBMs were exciting to a few, the quality of generation was poor (blurry, noisy). The community preferred 'Texture Synthesis' (Efros/Leung) which used non-parametric patch pasting. This was 'cheating' (using raw pixels) rather than 'learning' (using weights), but it looked better. The generative neural models couldn't compete with simple copy-paste statistics.",
          "key_manifestations": [
            "Efros, A. A., & Freeman, W. T. (2001). 'Image Quilting for Texture Synthesis and Transfer' (Dominant method in 2004)",
            "Kwatra, V., et al. (2003). 'Graphcut Textures'",
            "Salakhutdinov, R., & Hinton, G. (2004). 'Deep Boltzmann Machines' (Early struggles)",
            "Taylor, G. W., et al. (2006). 'Modeling Human Motion Using Binary Latent Variables' (2004-2005 work)"
          ]
        },
        "2006": {
          "salience_share": 12,
          "description": "The 'Deep Belief Net' Surge (+5%). Hinton's 2006 Science paper was a generative manifesto. It showed a network generating digits by sampling from the top-level associative memory and propagating down. It proved deep generative models were possible. However, the generation was still a 'side effect' of pre-training for classification, not the main goal.",
          "key_manifestations": [
            "Hinton, G. E., & Salakhutdinov, R. R. (2006). 'Reducing the Dimensionality of Data with Neural Networks'",
            "Hinton, G. E., et al. (2006). 'A Fast Learning Algorithm for Deep Belief Nets'",
            "Salakhutdinov, R., & Hinton, G. (2009). 'Deep Boltzmann Machines'",
            "Lee, H., et al. (2009). 'Convolutional Deep Belief Networks for Scalable Unsupervised Learning of Hierarchical Representations'"
          ]
        },
        "2008": {
          "salience_share": 10,
          "description": "Decay (-2%). As the 'Supervised' Deep Learning (Cluster 1) took off, the 'Unsupervised/Generative' pre-training became unnecessary. People realized ReLU + Dropout + fast GPUs worked better than RBM pre-training. The generative aspect was abandoned as 'too hard' and 'not useful' for classification benchmarks. The cluster went into hibernation.",
          "key_manifestations": [
            "Vincent, P., et al. (2008). 'Extracting and Composing Robust Features with Denoising Autoencoders'",
            "Ranzato, M., et al. (2007). 'Unsupervised Learning of Invariant Feature Hierarchies with Applications to Object Recognition'",
            "Larochelle, H., et al. (2009). 'Exploring Strategies for Training Deep Neural Networks'",
            "Tieleman, T. (2008). 'Training Restricted Boltzmann Machines using Approximations to the Likelihood Gradient'"
          ]
        },
        "2010": {
          "salience_share": 8,
          "description": "Low point. Generation was a parlor trick. The SOTA for image generation was still largely based on texture synthesis or simple parametric models. Neural generation was blurry and chaotic. The 'Displacing Force' was the overwhelming utility of Discriminative models (AlexNet was brewing).",
          "key_manifestations": [
            "Ranzato, M., et al. (2010). 'Factored 3-Way Restricted Boltzmann Machines for Modeling Natural Images'",
            "Gregor, K., & LeCun, Y. (2010). 'Learning Representations by Maximizing Compression'",
            "Kivinen, J., & Williams, C. K. (2011). 'Transformation Equivariant Boltzmann Machines'",
            "Courville, A., et al. (2011). 'Unsupervised Feature Learning for Audio Classification Using Convolutional Deep Belief Networks'"
          ]
        },
        "2012": {
          "salience_share": 8,
          "description": "Stasis. The focus was entirely on ImageNet Classification. However, the 'Autoencoder' sub-cluster was keeping the flame alive. De-noising Autoencoders were learning robust manifolds. But they were deterministic; they couldn't 'sample' new data easily. You could compress, but you couldn't create.",
          "key_manifestations": [
            "Bengio, Y., et al. (2013). 'Generalized Denoising Auto-Encoders as Generative Models'",
            "Rifai, S., et al. (2011). 'Contractive Auto-Encoders: Explicit Invariance During Feature Extraction'",
            "Le, Q. V., et al. (2012). 'Building High-level Features Using Large Scale Unsupervised Learning' (The 'Cat Neuron' paper - generative by scale)",
            "Kingma, D. P., & Welling, M. (2013). 'Auto-Encoding Variational Bayes' (Submitted late 2013)"
          ]
        },
        "2014": {
          "salience_share": 30,
          "description": "The 'GAN' Big Bang (+22%). Goodfellow invented Generative Adversarial Networks. This was a radical paradigm shift: instead of modeling density (Likelihood), you model a game between a Faker (Generator) and a Cop (Discriminator). Simultaneously, VAEs (Kingma/Welling) provided the probabilistic alternative. The variance exploded. Suddenly, AI could generate sharp, albeit hallucinated, faces. The 'Manifold' became a playground.",
          "key_manifestations": [
            "Goodfellow, I., et al. (2014). 'Generative Adversarial Nets'",
            "Kingma, D. P., & Welling, M. (2014). 'Auto-Encoding Variational Bayes'",
            "Radford, A., et al. (2016). 'Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks' (DCGAN - 2015 work)",
            "Mirza, M., & Osindero, S. (2014). 'Conditional Generative Adversarial Nets'"
          ]
        },
        "2016": {
          "salience_share": 45,
          "description": "The 'Mode Collapse' Wars (+15%). The field became obsessed with stabilizing GANs. They were notoriously unstable (Minimax equilibrium is hard to find). Wasserstein GAN (WGAN) provided the theoretical fix (Earth Mover's Distance). Style Transfer (Gatys) showed that 'Style' and 'Content' were separable on the manifold. The cluster was now high-status; generating 'Anime Faces' became a rite of passage for undergrads.",
          "key_manifestations": [
            "Arjovsky, M., et al. (2017). 'Wasserstein GAN'",
            "Gatys, L. A., et al. (2016). 'Image Style Transfer Using Convolutional Neural Networks'",
            "Isola, P., et al. (2017). 'Image-to-Image Translation with Conditional Adversarial Networks' (Pix2Pix)",
            "Zhu, J. Y., et al. (2017). 'Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks' (CycleGAN)"
          ]
        },
        "2018": {
          "salience_share": 55,
          "description": "Scale and Fidelity (+10%). StyleGAN (Nvidia) demonstrated that GANs could generate photorealistic human faces at 1024px. The 'Latent Space' ($Z$) was dissected; researchers found they could do vector arithmetic on faces (Smile vector). BigGAN showed that scaling up batch size and parameters improved quality. The 'Uncanny Valley' was being crossed.",
          "key_manifestations": [
            "Karras, T., et al. (2019). 'A Style-Based Generator Architecture for Generative Adversarial Networks' (StyleGAN)",
            "Brock, A., et al. (2018). 'Large Scale GAN Training for High Fidelity Natural Image Synthesis' (BigGAN)",
            "Karras, T., et al. (2018). 'Progressive Growing of GANs for Improved Quality, Stability, and Variation'",
            "Zhang, H., et al. (2019). 'Self-Attention Generative Adversarial Networks'"
          ]
        },
        "2020": {
          "salience_share": 65,
          "description": "The 'Diffusion' Disruption (+10%). GANs hit a wall: they dropped modes (didn't cover the whole distribution) and were hard to train. Ho et al. resurrected 'Diffusion Probabilistic Models' (Sochl-Dickstein 2015). They showed that by slowly destroying data with noise and learning to reverse the process, you could generate higher quality samples than GANs with stable training. The trajectory pivoted sharply away from Adversarial toward Thermodynamic/Score-based models.",
          "key_manifestations": [
            "Ho, J., et al. (2020). 'Denoising Diffusion Probabilistic Models' (DDPM)",
            "Song, Y., & Ermon, S. (2019). 'Generative Modeling by Estimating Gradients of the Data Distribution'",
            "Ramesh, A., et al. (2021). 'Zero-Shot Text-to-Image Generation' (DALL-E 1 - VAE/Transformer hybrid)",
            "Dhariwal, P., & Nichol, A. (2021). 'Diffusion Models Beat GANs on Image Synthesis'"
          ]
        },
        "2022": {
          "salience_share": 85,
          "description": "The 'Text-to-Image' Explosion (+20%). Latent Diffusion (Stable Diffusion) and DALL-E 2 combined Cluster 6 (Transformers/CLIP) with Cluster 9 (Diffusion). By conditioning the diffusion process on text embeddings, the manifold became semantically navigable via natural language. This was a cultural supernova. Art, design, and stock photography industries were disrupted overnight. The 'Manifold' was no longer abstract math; it was a product.",
          "key_manifestations": [
            "Rombach, R., et al. (2022). 'High-Resolution Image Synthesis with Latent Diffusion Models'",
            "Ramesh, A., et al. (2022). 'Hierarchical Text-Conditional Image Generation with CLIP Latents' (DALL-E 2)",
            "Saharia, C., et al. (2022). 'Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding' (Imagen)",
            "Radford, A., et al. (2021). 'Learning Transferable Visual Models From Natural Language Supervision' (CLIP - the guidance system)"
          ]
        },
        "2024": {
          "salience_share": 90,
          "description": "Video and 3D (+5%). The diffusion paradigm extended to temporal manifolds (Sora) and spatial manifolds (NeRFs/Gaussian Splats). The trajectory is 'World Modeling'\u2014generating consistent physics and causality, not just static pixels. The challenge is 'Consistency' over time. The cluster is absorbing the 'Graphics' industry. The 'Displacing Force' is the sheer compute cost of generating pixels vs tokens.",
          "key_manifestations": [
            "OpenAI (2024). 'Video Generation Models as World Simulators' (Sora technical report)",
            "Mildenhall, B., et al. (2020/2024). 'NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis' (Foundational to 3D gen)",
            "Kerbl, B., et al. (2023). '3D Gaussian Splatting for Real-Time Radiance Field Rendering'",
            "Blattmann, A., et al. (2023). 'Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets'"
          ]
        }
      }
    },
    "10_evolutionary_computation": {
      "name": "Evolutionary Computation",
      "description": "This eigencluster represents the 'biological' optimization paradigm: finding solutions not through gradients (calculus) but through variation and selection (biology). Including Genetic Algorithms (GA), Genetic Programming (GP), and Neuroevolution, it offers a robust, derivative-free alternative for optimizing non-differentiable or discrete landscapes. Its trajectory is cyclical: it served as the primary 'black box' optimizer in the 90s, retreated during the convex/kernel era, and found a niche resurgence in the Deep Learning era as a scalable alternative for Reinforcement Learning (Evolution Strategies) and Architecture Search (AutoML).",
      "trajectory": {
        "1990": {
          "salience_share": 8,
          "description": "The decade opened with Evolutionary Computation as a major contender (+2%). Holland's Genetic Algorithms were the standard for 'hard' optimization problems where gradients were unavailable. The 'force of motion' was the biological metaphor; in an era of brittle expert systems, the idea of 'evolving' a solution felt robust and adaptive. It was the primary methodology for the 'Artificial Life' sub-culture.",
          "key_manifestations": [
            "Goldberg, D. E. (1989/1990). 'Genetic Algorithms in Search, Optimization, and Machine Learning' (The Bible of the era)",
            "Koza, J. R. (1990). 'Genetically Breeding Populations of Computer Programs to Solve Problems'",
            "Michalewicz, Z. (1992). 'Genetic Algorithms + Data Structures = Evolution Programs' (Early work context)",
            "Davis, L. (1991). 'Handbook of Genetic Algorithms'"
          ]
        },
        "1992": {
          "salience_share": 10,
          "description": "Peak 'Genetic Programming' (+2%). John Koza published his seminal book on GP, showing that computer code itself could be evolved (LISP S-expressions). This captured the imagination: AI wasn't just tuning weights; it was writing code. The variance expanded because it promised to automate the job of the programmer. However, the 'Displacing Force' was the sheer computational cost; evolving code was millions of times slower than training a perceptron.",
          "key_manifestations": [
            "Koza, J. R. (1992). 'Genetic Programming: On the Programming of Computers by Means of Natural Selection'",
            "Holland, J. H. (1992). 'Adaptation in Natural and Artificial Systems' (Re-issue/Influence)",
            "Fogel, D. B. (1992). 'Evolving Artificial Intelligence'",
            "Forrest, S. (1993). 'Genetic Algorithms: Principles of Natural Selection Applied to Computation'"
          ]
        },
        "1994": {
          "salience_share": 9,
          "description": "Stasis/Slight Decay (-1%). While popular in engineering (designing antennas, truss structures), the method struggled in pure AI tasks like pattern recognition. The 'No Free Lunch' theorem (Cluster 5) dampened the hype, proving GAs weren't magic universal solvers. The cluster began to drift toward 'Co-evolution' (Hillis), attempting to simulate arms races to drive complexity.",
          "key_manifestations": [
            "Hillis, W. D. (1990/1994). 'Co-evolving Parasites Improve Simulated Evolution as an Optimization Procedure'",
            "Rechenberg, I. (1994). 'Evolution Strategy: Nature's Way of Optimization'",
            "Whitley, D. (1994). 'A Genetic Algorithm Tutorial'",
            "Gruau, F. (1994). 'Neural Network Synthesis using Cellular Encoding and the Genetic Algorithm'"
          ]
        },
        "1996": {
          "salience_share": 7,
          "description": "Contraction (-2%). The rise of SVMs (Cluster 2) offered a mathematically guaranteed global optimum for classification. Evolution offered only 'good enough' results with high variance. The academic community began to view GAs as 'heuristic hacking' rather than rigorous science. The cluster retreated to the 'CEC' (Congress on Evolutionary Computation) conference ecosystem, becoming insulated from NeurIPS.",
          "key_manifestations": [
            "Back, T. (1996). 'Evolutionary Algorithms in Theory and Practice'",
            "Hansen, N., & Ostermeier, A. (1996). 'Adapting Arbitrary Normal Mutation Distributions in Evolution Strategies' (CMA-ES foundation)",
            "Floreano, D., & Mondada, F. (1996). 'Evolution of Homing Navigation in a Real Mobile Robot'",
            "Storn, R., & Price, K. (1997). 'Differential Evolution - A Simple and Efficient Heuristic for Global Optimization over Continuous Spaces' (1996 Tech Report)"
          ]
        },
        "1998": {
          "salience_share": 6,
          "description": "Stability via CMA-ES (+0%). The Covariance Matrix Adaptation Evolution Strategy (CMA-ES) matured. This was the 'Newton's Method' of evolutionary computation\u2014a sophisticated, mathematically grounded algorithm that actually worked well on continuous functions. It kept the cluster relevant for 'Black Box Optimization' competitions, even if it wasn't solving AI's perception problems.",
          "key_manifestations": [
            "Hansen, N., & Ostermeier, A. (2001). 'Completely Derandomized Self-Adaptation in Evolution Strategies' (Reflecting late 90s work)",
            "Poli, R., & Langdon, W. B. (1998). 'Genetic Programming with One-Point Crossover'",
            "Eiben, A. E., et al. (1999). 'Parameter Control in Evolutionary Algorithms'",
            "Yao, X. (1999). 'Evolving Artificial Neural Networks' (Survey of the 90s)"
          ]
        },
        "2000": {
          "salience_share": 5,
          "description": "Low ebb (-1%). The 'Probabilistic' era (Cluster 3) dominated. Evolution was seen as 'blind search.' Why evolve a structure when you can learn the dependency graph? The cluster survived in 'Artificial Life' (Sims' evolved creatures) and games, but lost the 'Learning' mandate.",
          "key_manifestations": [
            "Lipson, H., & Pollack, J. B. (2000). 'Automatic Design and Manufacture of Robotic Lifeforms'",
            "Deb, K., et al. (2002). 'A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II' (Work active 2000 - extremely influential in engineering)",
            "Bongard, J., & Pfeifer, R. (2001). 'Repeated Structure and Dissociation of Genotypic and Phenotypic Complexity in Artificial Evolution'",
            "Cant\u00fa-Paz, E. (2000). 'Efficient and Accurate Parallel Genetic Algorithms'"
          ]
        },
        "2002": {
          "salience_share": 6,
          "description": "The 'NEAT' Catalyst (+1%). Stanley and Miikkulainen released NeuroEvolution of Augmenting Topologies (NEAT). This solved the 'Competing Conventions' problem and allowed neural network topologies to grow from minimal structures. It reinvigorated the idea that *architecture* could be learned, not just weights. It outperformed fixed-topology networks on control tasks.",
          "key_manifestations": [
            "Stanley, K. O., & Miikkulainen, R. (2002). 'Evolving Neural Networks through Augmenting Topologies'",
            "Deb, K. (2001). 'Multi-Objective Optimization using Evolutionary Algorithms'",
            "Nolfi, S., & Floreano, D. (2000/2002). 'Evolutionary Robotics: The Biology, Intelligence, and Technology of Self-Organizing Machines'",
            "Hornby, G. S., & Pollack, J. B. (2002). 'Creating High-level Components with a Generative Representation for Body-Brain Evolution'"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Stasis. While NEAT was cool, it didn't scale to large inputs (pixels). The cluster remained trapped in the 'Pole Balancing' and 'Robot Control' low-dimensional regime. The 'Displacing Force' was the lack of efficient hardware support; GAs couldn't easily leverage the matrix-multiplication speedups of early GPUs.",
          "key_manifestations": [
            "Stanley, K. O., & Miikkulainen, R. (2004). 'Competitive Coevolution through Evolutionary Complexification'",
            "Luke, S., & Panait, L. (2006). 'A Comparison of Bloch's and Koza's Approaches to GP' (2004 context)",
            "Teuscher, C. (2005). 'Adventures in Evolvable Hardware'",
            "Runarsson, T. P., & Yao, X. (2005). 'Search Biases in Constrained Evolutionary Optimization'"
          ]
        },
        "2006": {
          "salience_share": 4,
          "description": "Contraction (-1%). The 'Deep Learning' breakthrough (Hinton) showed that you *could* train deep fixed architectures with gradients. The premise of Neuroevolution\u2014that gradients don't work for deep/complex structures\u2014was empirically falsified. The cluster was marginalized to 'Hyperparameter Tuning' (simply running GAs to find learning rates for Deep Nets).",
          "key_manifestations": [
            "Clune, J., et al. (2008). 'Natural Selection Fails to Optimize Mutation Rates' (2006 research)",
            "Gomez, F., et al. (2008). 'Efficient Non-Linear Control through Neuroevolution' (CoSyNE)",
            "Spector, L. (2006). 'Evolution of Artificial Intelligence'",
            "Hansen, N. (2006). 'The CMA Evolution Strategy: A Comparing Review'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Nadir. The era of SGD (Cluster 5) had begun. Gradients were cheap; population-based evaluation was expensive. Why run 100 neural nets (Population) when 1 (SGD) works? The cluster persisted only in 'Evolutionary Art' and niche robotics where the fitness function was non-differentiable.",
          "key_manifestations": [
            "Floreano, D., & Mattiussi, C. (2008). 'Bio-Inspired Artificial Intelligence'",
            "Stanley, K. O., et al. (2009). 'A Hypercube-Based Encoding for Evolving Large-Scale Neural Networks' (HyperNEAT - attempting to scale)",
            "Mouret, J. B., & Doncieux, S. (2009). 'Overcoming the Bootstrap Problem in Evolutionary Robotics'",
            "Dernesi, S. (2008). 'Grammatical Evolution'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "A faint pulse in 'Novelty Search' (+0%). Stanley and Lehman argued that 'Objective Functions' are deceptive and one should optimize for 'Novelty' instead. This was a profound philosophical insight that influenced the RL community (exploration bonuses), even if the evolutionary methods themselves didn't gain traction. It bridged the gap to the 'Curiosity' sub-field in RL.",
          "key_manifestations": [
            "Lehman, J., & Stanley, K. O. (2011). 'Abandoning Objectives: Evolution through the Search for Novelty Alone' (2010 work)",
            "Clune, J., et al. (2011). 'On the Performance of Indirect Encodings across the Continuum of Regularity'",
            "Risi, S., & Stanley, K. O. (2010). 'Indirectly Encoding Neural Plasticity as a Pattern of Local Rules'",
            "Doncieux, S., & Mouret, J. B. (2010). 'Behavioral Diversity Measures for Evolutionary Robotics'"
          ]
        },
        "2012": {
          "salience_share": 2,
          "description": "Deep Learning (AlexNet) sucked all the air out of the room (-1%). Evolutionary methods were viewed as hopelessly inefficient for training ConvNets. The variance hit rock bottom. The only intersection was using GAs to optimize the *structure* of CNNs, but this was rare due to cost.",
          "key_manifestations": [
            "Snoek, J., et al. (2012). 'Practical Bayesian Optimization of Machine Learning Algorithms' (Displacing GAs for hyperparameter tuning)",
            "Koutn\u00edk, J., et al. (2013). 'Evolving Large-Scale Neural Networks for Vision-Based Reinforcement Learning'",
            "Culberson, J. (Legacy). 'On the Futility of Blind Search' (Sentiment of the era)",
            "Yosinski, J., et al. (2011). 'Evolving Robot Gaits in Hardware'"
          ]
        },
        "2014": {
          "salience_share": 3,
          "description": "Stasis/Incubation. The concept of 'Quality Diversity' (MAP-Elites) emerged. Instead of finding one best solution, find a map of high-performing diverse solutions. This was 'Illumination' rather than Optimization. It found utility in robotics (damage recovery) where having a library of different walking gaits was useful.",
          "key_manifestations": [
            "Mouret, J. B., & Clune, J. (2015). 'Illuminating Search Spaces by Mapping Elites' (MAP-Elites - 2014 arxiv)",
            "Nguyen, A., et al. (2015). 'Deep Neural Networks are Easily Fooled: High Confidence Predictions for Unrecognizable Images' (Using Evolution to hack ConvNets)",
            "Cully, A., et al. (2015). 'Robots that can Adapt Like Animals' (Nature cover using MAP-Elites)",
            "Morse, G., et al. (2013). 'Simple Evolutionary Optimization Can Rival Stochastic Gradient Descent in Neural Networks' (Early contrarian signal)"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "The 'OpenAI ES' Shock (+2%). Salimans et al. (OpenAI) showed that simple Evolution Strategies (ES) could train Deep RL agents (MuJoCo/Atari) as well as A3C/DQN, with perfect parallelization. This was a massive catalyst. It debunked the myth that Evolution couldn't scale to millions of parameters. The secret was estimating the gradient via finite differences in random directions. The 'Motion' was a pivot from 'Complexity' to 'Scalability.'",
          "key_manifestations": [
            "Salimans, T., et al. (2017). 'Evolution Strategies as a Scalable Alternative to Reinforcement Learning'",
            "Real, E., et al. (2017). 'Large-Scale Evolution of Image Classifiers' (Google Scale evolution)",
            "Miikkulainen, R., et al. (2017). 'Evolving Deep Neural Networks'",
            "Such, F. P., et al. (2017). 'Deep Neuroevolution: Genetic Algorithms Are a Competitive Alternative for Training Deep Neural Networks for Reinforcement Learning'"
          ]
        },
        "2018": {
          "salience_share": 6,
          "description": "The 'AutoML' Boom (+1%). Google focused heavily on 'Neural Architecture Search' (NAS). While some used RL, the 'Regularized Evolution' (AmoebaNet) approach proved superior and cheaper. Evolution found the 'Transformer' architecture variants. The cluster became the 'Architect' of the Deep Learning cluster, designing the nets that SGD would train.",
          "key_manifestations": [
            "Real, E., et al. (2019). 'Regularized Evolution for Image Classifier Architecture Search' (AmoebaNet - 2018 work)",
            "Elsken, T., et al. (2019). 'Neural Architecture Search: A Survey'",
            "Ha, D., & Schmidhuber, J. (2018). 'World Models' (Using ES for the controller)",
            "Liu, H., et al. (2018). 'Hierarchical Representations for Efficient Architecture Search'"
          ]
        },
        "2020": {
          "salience_share": 4,
          "description": "Contraction (-2%). The cost of NAS was too high for academia, and industry settled on standard backbones (Transformers). 'One model to rule them all' (Foundation Models) reduced the need for architecture search. The cluster shifted to 'Evolving Agents' in complex environments (Multi-agent RL), but PPO/SAC (Gradient methods) were generally preferred for efficiency.",
          "key_manifestations": [
            "Lange, R. T., et al. (2022). 'Discovering Attention-Based Genetic Algorithms via Meta-Black-Box Optimization'",
            "He, K., et al. (2020). 'AutoML: A Survey of the State-of-the-Art'",
            "Stanley, K. O., et al. (2019). 'Designing Neural Networks through Neuroevolution'",
            "Gaier, A., & Ha, D. (2019). 'Weight Agnostic Neural Networks' (Architecture is all you need)"
          ]
        },
        "2022": {
          "salience_share": 3,
          "description": "Stasis/Niche. Evolution found a new, strange home: 'Prompt Engineering.' Evolving text prompts (Promptbreeder) to optimize LLM output. Since LLMs are black boxes (no gradients accessible for the user), derivative-free optimization (Evolution) became the only way to optimize prompts automatically. This is a 'meta-parasitic' relationship with the dominant LLM cluster.",
          "key_manifestations": [
            "Zhou, Y., et al. (2023). 'Large Language Models are Human-Level Prompt Engineers' (APE - derivative free optimization)",
            "Fernando, C., et al. (2023). 'Promptbreeder: Self-Referential Self-Improvement Via Prompt Evolution'",
            "Chen, A., et al. (2023). 'EvoPrompt: Connecting Large Language Models with Evolutionary Algorithms'",
            "Meyerson, E., et al. (2023). 'Language Model Crossover: Variation through Few-Shot Prompting'"
          ]
        },
        "2024": {
          "salience_share": 3,
          "description": "Current trajectory is 'Algorithm Discovery' (+0%). Google DeepMind's 'FunSearch' and 'Lion' optimizer discovery used evolutionary methods (guided by LLMs) to write new algorithms. The motion is 'LLMs as Mutation Operators.' Instead of random bit-flips, use an LLM to mutate code intelligently, then use Evolution to select the best code. This 'Evolutionary Prompting' is the modern face of Genetic Programming.",
          "key_manifestations": [
            "Romera-Paredes, B., et al. (2024). 'Mathematical Discoveries from Program Search with Large Language Models' (FunSearch)",
            "Chen, X., et al. (2024). 'Google DeepMind's Lion: Evolving the Optimizer'",
            "Lu, C., et al. (2024). 'Model Swarms: Collaborative Search to Adapt LLM Experts'",
            "Lange, R. T. (2024). 'The AI Scientist: Automated Scientific Discovery through Large Language Models' (Evolutionary loops)"
          ]
        }
      }
    },
    "11_sparse_coding_compressed_sensing": {
      "name": "Sparse Coding & Compressed Sensing",
      "description": "This eigencluster represents the mathematical conviction that the world is 'Sparse'\u2014that high-dimensional data can be perfectly represented by a small number of active components. It links Neuroscience (V1 visual cortex), Signal Processing (Wavelets), and Statistics (Lasso). Its trajectory is a sharp peak: rising from the biological plausibility of the 90s, exploding with the 'Compressed Sensing' mathematical miracle in the 2000s (breaking the Nyquist-Shannon limit), and then being subsumed/dissolved by Deep Learning, which learned sparsity implicitly via ReLU and L1 regularization rather than explicit optimization.",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "The cluster began in Neuroscience (+1%). The question was: 'Why do V1 simple cells look like Gabors?' Field and Olshausen were formulating the hypothesis that the brain optimizes for *energy efficiency* (sparsity). If neurons cost calories, you want few of them active at once. This was a distinct alternative to 'Principal Component Analysis' (PCA), which produced dense, non-local features. The variance was local to computational neuroscience.",
          "key_manifestations": [
            "Field, D. J. (1987/1990). 'Relations between the Statistics of Natural Images and the Response Properties of Cortical Cells'",
            "F\u00f6ldi\u00e1k, P. (1990). 'Forming Sparse Representations by Local Anti-Hebbian Learning'",
            "Daubechies, I. (1990). 'The Wavelet Transform, Time-Frequency Localization and Signal Analysis'",
            "Daugman, J. G. (1988/1990). 'Complete Discrete 2-D Gabor Transforms by Neural Networks'"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Stasis. The 'Wavelet' revolution in signal processing was underway. Wavelets provided a sparse basis for images (JPEG 2000 precursor). This provided the mathematical bedrock: fixed bases could be sparse. The 'Learning' aspect was still nascent, struggling with non-convex optimization to find the dictionary.",
          "key_manifestations": [
            "Mallat, S., & Zhang, Z. (1993). 'Matching Pursuits with Time-Frequency Dictionaries' (1992 research)",
            "Daubechies, I. (1992). 'Ten Lectures on Wavelets' (The standard text)",
            "Coifman, R. R., & Wickerhauser, M. V. (1992). 'Entropy-Based Algorithms for Best Basis Selection'",
            "Saito, N. (1994). 'Local Feature Extraction and Its Application using a Library of Bases'"
          ]
        },
        "1994": {
          "salience_share": 4,
          "description": "The 'Lasso' Event (+1%). Tibshirani introduced the Lasso (L1-regularized regression). This was the crucial link: minimizing the L1 norm ($|x|$) induces zeros (sparsity), whereas L2 ($x^2$) just makes values small. This simple statistical tool gave researchers a convex knob to turn on sparsity. It moved the cluster from 'Neuro-mimicry' to 'Statistical Methodology.'",
          "key_manifestations": [
            "Tibshirani, R. (1996). 'Regression Shrinkage and Selection via the Lasso' (1994-1995 drafts)",
            "Chen, S. S., Donoho, D. L., & Saunders, M. A. (1998). 'Atomic Decomposition by Basis Pursuit' (1995 tech report)",
            "Olshausen, B. A., & Field, D. J. (1995). 'Sparse Coding of Natural Images Produces Localized, Oriented, Bandpass Receptive Fields' (Conference version)",
            "Harpur, G. F., & Prager, R. W. (1996). 'Development of Low Entropy Coding in a Recurrent Network'"
          ]
        },
        "1996": {
          "salience_share": 8,
          "description": "The 'Olshausen & Field' Breakthrough (+4%). Their Nature paper demonstrated that simply maximizing sparsity on natural images *emerges* edge detectors identical to the mammalian visual cortex. This was a 'God Particle' moment for Computational Neuroscience. It suggested that the brain is a sparse coding machine. The cluster gained massive explanatory power for biological vision.",
          "key_manifestations": [
            "Olshausen, B. A., & Field, D. J. (1996). 'Emergence of Simple-Cell Receptive Field Properties by Learning a Sparse Code'",
            "Bell, A. J., & Sejnowski, T. J. (1997). 'The \"Independent Components\" of Natural Scenes are Edge Filters' (ICA link to sparsity)",
            "Lewicki, M. S., & Olshausen, B. A. (1999). 'A Probabilistic Framework for the Adaptation and Comparison of Image Codes'",
            "Donoho, D. L. (1995). 'De-Noising by Soft-Thresholding'"
          ]
        },
        "1998": {
          "salience_share": 10,
          "description": "Expansion (+2%). Sparsity spread to 'Blind Source Separation' and 'Denoising.' The realization was that noise is dense (spread out), but signals are sparse (structured). Therefore, shrinking coefficients in a sparse basis kills noise but preserves signal. 'Basis Pursuit' became a standard tool. The cluster was becoming the dominant paradigm in Signal Processing.",
          "key_manifestations": [
            "Chen, S. S., et al. (2001). 'Atomic Decomposition by Basis Pursuit' (Journal version)",
            "Lewicki, M. S. (1998). 'A Review of Methods for Spike Sorting: The Detection and Classification of Neural Action Potentials'",
            "Hyv\u00e4rinen, A. (1999). 'Sparse Code Shrinkage: Denoising by Nonlinear Maximum Likelihood Estimation'",
            "Mallat, S. (1999). 'A Wavelet Tour of Signal Processing'"
          ]
        },
        "2000": {
          "salience_share": 10,
          "description": "Stasis/Refinement. The challenge was optimization speed. Solving L1 problems was slower than L2 (Least Squares). The field focused on algorithms (LARS, Interior Point) to make sparse coding practical. It remained a powerful, elegant theory waiting for the 'Big Data' killer app.",
          "key_manifestations": [
            "Efron, B., et al. (2004). 'Least Angle Regression' (LARS - 2002 work)",
            "Donoho, D. L., & Huo, X. (2001). 'Uncertainty Principles and Ideal Atomic Decomposition'",
            "Tropp, J. A. (2004). 'Greed is Good: Algorithmic Results for Sparse Approximation'",
            "Starck, J. L., et al. (2002). 'The Curvelet Transform for Image Denoising'"
          ]
        },
        "2002": {
          "salience_share": 12,
          "description": "Expansion (+2%). 'Non-negative Matrix Factorization' (NMF) gained popularity. While not strictly L1, the non-negativity constraint induced parts-based (sparse) representations. Lee & Seung's work showed NMF learning 'parts of faces' (noses, eyes) vs PCA's 'ghost faces.' This reinforced the 'Sparsity = Interpretability' narrative.",
          "key_manifestations": [
            "Lee, D. D., & Seung, H. S. (1999/2001). 'Learning the Parts of Objects by Non-Negative Matrix Factorization'",
            "Hoyer, P. O. (2002). 'Non-negative Matrix Factorization with Sparseness Constraints'",
            "Elad, M., & Aharon, M. (2006). 'Image Denoising Via Sparse and Redundant Representations Over Learned Dictionaries' (Early drafts)",
            "Zou, H., & Hastie, T. (2005). 'Regularization and Variable Selection via the Elastic Net'"
          ]
        },
        "2004": {
          "salience_share": 20,
          "description": "The 'Compressed Sensing' Supernova (+8%). Cand\u00e8s, Romberg, Tao, and Donoho proved that if a signal is sparse, you can reconstruct it from *far fewer* samples than the Nyquist limit. This was a mathematical miracle. It defied a century of signal processing dogma. The variance exploded because this wasn't just analysis; it was *acquisition*. You could build faster MRI scanners (scan less, compute more).",
          "key_manifestations": [
            "Cand\u00e8s, E. J., Romberg, J., & Tao, T. (2006). 'Robust Uncertainty Principles: Exact Signal Reconstruction from Highly Incomplete Frequency Information' (2004 preprint)",
            "Donoho, D. L. (2006). 'Compressed Sensing' (2004 preprint)",
            "Cand\u00e8s, E. J., & Tao, T. (2005). 'Decoding by Linear Programming'",
            "Baraniuk, R. G. (2007). 'Compressive Sensing' (IEEE Signal Processing Magazine)"
          ]
        },
        "2006": {
          "salience_share": 25,
          "description": "Peak Saturation (+5%). Everyone was doing Compressed Sensing. The 'Single Pixel Camera' (Rice University) demonstrated you could take a photo with one photodiode by using random masks and math. 'L1 Minimization' was the hammer, and every problem was a nail. In Machine Learning, 'Sparse coding' became the preferred layer for the new 'Deep Learning' architectures (before ReLUs took over).",
          "key_manifestations": [
            "Duarte, M. F., et al. (2008). 'Single-Pixel Imaging via Compressive Sampling' (2006 work)",
            "Raina, R., et al. (2007). 'Self-taught Learning: Transfer Learning from Unlabeled Data' (Using Sparse Coding as the engine)",
            "Mairal, J., et al. (2008). 'Sparse Representation for Color Image Restoration'",
            "Yang, J., et al. (2008). 'Image Super-Resolution as Sparse Representation of Raw Image Patches'"
          ]
        },
        "2008": {
          "salience_share": 22,
          "description": "Integration (+-0%). 'Dictionary Learning' (KSVD) became the standard for image restoration. Mairal et al. showed state-of-the-art results. However, a competitor was rising: The Deep Belief Net (Cluster 1). Researchers debated: 'Should we mathematically optimize for sparsity (L1), or just learn a deep net?' The rigorous L1 approach was still winning on 'Small Data' image tasks.",
          "key_manifestations": [
            "Aharon, M., Elad, M., & Bruckstein, A. (2006). 'K-SVD: An Algorithm for Designing Overcomplete Dictionaries for Sparse Representation'",
            "Mairal, J., et al. (2009). 'Online Dictionary Learning for Sparse Coding'",
            "Wright, J., et al. (2009). 'Robust Face Recognition via Sparse Representation'",
            "Beck, A., & Teboulle, M. (2009). 'A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems' (FISTA)"
          ]
        },
        "2010": {
          "salience_share": 15,
          "description": "Displacement begins (-7%). The introduction of the ReLU (Rectified Linear Unit) in Deep Learning killed the explicit 'Sparse Coding' layer. ReLU ($max(0, x)$) creates sparsity naturally (half the neurons are zero) without the expensive iterative optimization of L1 solvers. Why run a slow Lasso solver at inference time when a fast matrix multiply + ReLU does the same thing? The cluster began to lose its 'Mechanism' status and became just an 'Insight.'",
          "key_manifestations": [
            "Nair, V., & Hinton, G. E. (2010). 'Rectified Linear Units Improve Restricted Boltzmann Machines' (The killer of explicit sparse coding)",
            "Glorot, X., et al. (2011). 'Deep Sparse Rectifier Neural Networks'",
            "Gregor, K., & LeCun, Y. (2010). 'Learning Representations by Maximizing Compression' (LISTA - Learning to approximate the sparse code)",
            "Boyd, S., et al. (2011). 'Distributed Optimization and Statistical Learning via the ADMM'"
          ]
        },
        "2012": {
          "salience_share": 8,
          "description": "Collapse (-7%). AlexNet didn't use Sparse Coding layers; it used Convolution + ReLU. The 'Compressed Sensing' community remained active in MRI and Hardware, but in AI, 'Learned Representations' (Dense or implicitly sparse) won. The 'Structured Sparsity' sub-field tried to keep up by enforcing tree structures on sparsity, but it was too complex compared to the brute force of Dropout.",
          "key_manifestations": [
            "Krizhevsky, A., et al. (2012). 'ImageNet Classification with Deep Convolutional Neural Networks' (No explicit sparse coding)",
            "Bach, F., et al. (2012). 'Optimization with Sparsity-Inducing Penalties'",
            "Coates, A., & Ng, A. Y. (2011). 'The Importance of Encoding Versus Training with Sparse Coding and Vector Quantization' (The pivot point)",
            "Srivastava, N., et al. (2014). 'Dropout' (Inducing sparsity stochastically)"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "Stasis/Niche. The cluster retreated to 'Theory.' Researchers analyzed *why* Deep Learning works using Compressed Sensing tools (e.g., 'The deep net is recovering a sparse signal'). 'LISTA' (Learned ISTA) showed that you could unroll an optimization algorithm into a neural net, bridging the two worlds. This was intellectually satisfying but practically, people just used ResNets.",
          "key_manifestations": [
            "Gregor, K., & LeCun, Y. (2010/2014). 'LISTA' (Legacy influence)",
            "Papyan, V., et al. (2017). 'Convolutional Neural Networks Analyzed via Convolutional Sparse Coding'",
            "Brununa, J., et al. (2014). 'Invariant Scattering Convolution Networks' (Mallat's attempt to fix deep learning with wavelets)",
            "Vainsencher, D., et al. (2011). 'Dictionary Learning for Sparse Coding with the Lasso'"
          ]
        },
        "2016": {
          "salience_share": 4,
          "description": "Decay (-1%). Sparsity became a 'Hardware' concern. 'Network Pruning' (Han et al.) used sparsity to compress trained models for mobile phones. This was 'Post-hoc Sparsity' (removing weights after training), not 'Prior Sparsity' (enforcing it during learning). The mathematical elegance of Compressed Sensing was replaced by the engineering pragmatism of 'Sparse Matrix Multiplication.'",
          "key_manifestations": [
            "Han, S., et al. (2015). 'Learning both Weights and Connections for Efficient Neural Network'",
            "Wen, W., et al. (2016). 'Learning Structured Sparsity in Deep Neural Networks'",
            "Frankle, J., & Carbin, M. (2018). 'The Lottery Ticket Hypothesis' (Sparsity exists, but finding it is hard)",
            "Zhang, X., et al. (2016). 'Accelerating Very Deep Convolutional Networks for Classification and Detection'"
          ]
        },
        "2018": {
          "salience_share": 3,
          "description": "Stasis. The 'Double Descent' theory (Cluster 8) suggested that *over*-parameterization (density) is good, contradicting the 'Parsimony' (Sparsity) dogma. Sparsity was no longer a goal for generalization, only for efficiency. The 'L1' norm was largely dropped from loss functions in favor of Weight Decay (L2).",
          "key_manifestations": [
            "Belkin, M., et al. (2019). 'Reconciling Modern Machine-Learning Practice and the Bias-Variance Trade-off'",
            "Liu, Z., et al. (2019). 'Rethinking the Value of Network Pruning'",
            "Evci, U., et al. (2020). 'Rigging the Lottery: Making All Tickets Winners'",
            "Kusner, M. J., et al. (2015). 'From Word Embeddings to Document Distances' (Sparse transport)"
          ]
        },
        "2020": {
          "salience_share": 3,
          "description": "Minor resurgence in 'MoE' (+0%). Mixture of Experts (Switch Transformer) brought 'Activation Sparsity' back. In a trillion-parameter model, you only activate 1% of parameters per token. This is 'Dynamic Sparsity.' It echoes the V1 efficient coding hypothesis (Cluster start), but implemented via routing gates rather than L1 minimization.",
          "key_manifestations": [
            "Fedus, W., et al. (2022). 'Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity'",
            "Lepikhin, D., et al. (2020). 'GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding'",
            "Gale, T., et al. (2019). 'The State of Sparsity in Deep Neural Networks'",
            "Hoefler, T., et al. (2021). 'Sparsity in Deep Learning: Pruning and Growth for Efficient Inference and Training'"
          ]
        },
        "2022": {
          "salience_share": 3,
          "description": "Stasis. Sparse Coding lives on in 'Dictionary Learning for Interpretability' (Anthropic). Researchers realized that individual neurons in LLMs are polysemantic (dense concepts), but if you project them into a higher-dimensional sparse autoencoder, you find monosemantic 'features.' This is a direct callback to Olshausen & Field 1996, applied to GPT-4 activations.",
          "key_manifestations": [
            "Elhage, N., et al. (2022). 'Toy Models of Superposition'",
            "Bricken, T., et al. (2023). 'Towards Monosemanticity: Decomposing Language Models With Dictionary Learning' (Anthropic)",
            "Cunningham, H., et al. (2023). 'Sparse Autoencoders Find Interpretable Features in Large Language Models'",
            "Dao, T., et al. (2022). 'FlashAttention' (Sparsity in IO, not computation)"
          ]
        },
        "2024": {
          "salience_share": 3,
          "description": "Current trajectory is 'Interpretability' (+0%). The 'Superposition Hypothesis' posits that models simulate a larger sparse network inside a smaller dense one. Decoding this sparse basis is the primary hope for understanding LLM internals. The cluster has mutated from 'Signal Acquisition' to 'AI Neuroscience.'",
          "key_manifestations": [
            "Gao, L., et al. (2024). 'Scaling and evaluating sparse autoencoders'",
            "Templeton, A., et al. (2024). 'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet'",
            "Lieberum, T., et al. (2024). 'Gemini 1.5 Pro: Sparse MoE Architecture details'",
            "Mistral AI (2024). 'Mixtral of Experts' (Sparsity as the default for open weights)"
          ]
        }
      }
    },
    "12_geometric_graph_learning": {
      "name": "Geometric & Graph Learning",
      "description": "This eigencluster addresses the 'Non-Euclidean' world. While CNNs handle grids (images) and RNNs handle lines (text), this cluster learns functions on irregular domains: social networks, molecules, 3D meshes, and manifolds. Trajectory-wise, it moved from the spectral math of the 2000s (Eigenmaps) to the 'Geometric Deep Learning' unification of the 2010s (GCNs, GATs), culminating in the 'AlphaFold' revolution where geometry solved biology.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Niche. 'Graph Theory' was discrete math, not learning. 'Geometric Learning' didn't exist. There was 'Spectral Graph Theory' (Fiedler vectors), used for partitioning meshes in finite element analysis, but no concept of learning features on nodes. The variance was near zero in the AI latent space.",
          "key_manifestations": [
            "Mohar, B. (1991). 'The Laplacian Spectrum of Graphs'",
            "Chung, F. R. K. (1997). 'Spectral Graph Theory' (1990s context)",
            "Simard, P., et al. (1991). 'Tangent Prop - A Formalism for Specifying Selected Invariances in an Adaptive Network' (Early geometric invariance)",
            "Hutchinson, J. E. (1981/1990). 'Fractals and Self Similarity' (Geometry context)"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. Feature extraction was manual. If you had a graph, you extracted 'degree', 'clustering coefficient', etc., and fed them to a neural net. The geometry was pre-processed away. The 'Displacing Force' was the lack of datasets; big social networks and large molecule databases didn't exist publicly.",
          "key_manifestations": [
            "Dayan, P. (1993). 'Improving Generalization for Temporal Difference Learning: The Successor Representation' (Implicit graph map)",
            "Spector, L. (Legacy). 'Graph traversal algorithms'",
            "Gori, M., et al. (2005). 'A New Model for Learning in Graph Domains' (Reflecting back on the lack of 90s methods)",
            "Karypis, G., & Kumar, V. (1995). 'METIS - Unstructured Graph Partitioning'"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Stasis. 'Kernel Methods' (Cluster 2) began to touch graphs via 'Graph Kernels' (Random Walk kernels). This allowed SVMs to classify molecules. This was the first bridge between graphs and learning, but it was 'Implicit' (dot products) rather than 'Explicit' (learning node vectors).",
          "key_manifestations": [
            "Haussler, D. (1999). 'Convolution Kernels on Discrete Structures' (Roots in mid-90s)",
            "Gartner, T., et al. (2003). 'Graph Kernels' (2000s work based on 90s kernel theory)",
            "Kondor, R. I., & Lafferty, J. (2002). 'Diffusion Kernels on Graphs and Other Discrete Structures' (Precursors)",
            "Spielman, D. A. (1996). 'Spectral Graph Theory' (Academic growth)"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "The 'Manifold Learning' Seeds (+1%). Tenenbaum and Roweis began developing ISOMAP and LLE. The core insight: High-dimensional data lies on a low-dimensional non-linear manifold. To learn it, you build a nearest-neighbor graph and compute geodesic distances. This linked 'Graphs' to 'Geometry' to 'Learning.'",
          "key_manifestations": [
            "Tenenbaum, J. B., et al. (2000). 'A Global Geometric Framework for Nonlinear Dimensionality Reduction' (ISOMAP - development late 90s)",
            "Roweis, S. T., & Saul, L. K. (2000). 'Nonlinear Dimensionality Reduction by Locally Linear Embedding' (LLE - development late 90s)",
            "Sch\u00f6lkopf, B., et al. (1998). 'Nonlinear Component Analysis as a Kernel Eigenvalue Problem' (Kernel PCA)",
            "Shi, J., & Malik, J. (2000). 'Normalized Cuts and Image Segmentation' (Spectral clustering on image graphs)"
          ]
        },
        "1998": {
          "salience_share": 4,
          "description": "The 'Spectral Clustering' Boom (+2%). Shi & Malik (2000) popularized Normalized Cuts. Suddenly, Computer Vision treated images as graphs of pixels. Segmentation was solved by finding the eigenvectors of the Laplacian. This was 'transductive' learning (learning on the specific graph you have). It was elegant linear algebra, widely adopted.",
          "key_manifestations": [
            "Shi, J., & Malik, J. (2000). 'Normalized Cuts and Image Segmentation'",
            "Ng, A. Y., Jordan, M. I., & Weiss, Y. (2002). 'On Spectral Clustering: Analysis and an Algorithm' (1999-2001 context)",
            "Meila, M., & Shi, J. (2001). 'A Random Walks View of Spectral Segmentation'",
            "Belkin, M., & Niyogi, P. (2001). 'Laplacian Eigenmaps and Spectral Techniques for Embedding and Clustering'"
          ]
        },
        "2000": {
          "salience_share": 5,
          "description": "Stasis/Refinement. Manifold learning (ISOMAP/LLE) was the rage at NIPS. However, it had the 'Out of Sample' problem: if a new point arrived, you had to re-compute the whole graph. This limited it to 'Data Analysis' rather than 'Machine Learning' pipelines. The cluster was mathematically rich but practically constrained.",
          "key_manifestations": [
            "Belkin, M., & Niyogi, P. (2003). 'Laplacian Eigenmaps for Dimensionality Reduction and Representation Learning'",
            "Bengio, Y., et al. (2004). 'Out-of-Sample Extensions for LLE, Isomap, MDS, Eigenmaps, and Spectral Clustering'",
            "Brand, M. (2003). 'Charting a Manifold'",
            "Donoho, D. L., & Grimes, C. (2003). 'Hessian Eigenmaps'"
          ]
        },
        "2002": {
          "salience_share": 4,
          "description": "Contraction (-1%). The Kernel methods (SVMs) were working so well that complex manifold assumptions felt unnecessary. 'Why assume a manifold when a generic RBF kernel works?' The graph community retreated to 'Semi-Supervised Learning' (Label Propagation), utilizing the graph structure to spread labels from few labeled nodes to many unlabeled ones.",
          "key_manifestations": [
            "Zhu, X., et al. (2003). 'Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions'",
            "Zhou, D., et al. (2004). 'Learning with Local and Global Consistency'",
            "Belkin, M., et al. (2006). 'Manifold Regularization' (2004 work)",
            "Smola, A. J., & Kondor, R. (2003). 'Kernels and Regularization on Graphs'"
          ]
        },
        "2004": {
          "salience_share": 3,
          "description": "The 'GNN' Pre-History (+0%). Scarselli and Gori proposed the 'Graph Neural Network' model. It used a recurrent mechanism to propagate information until convergence. It was computationally expensive and ignored by the mainstream (focused on SVMs), but it established the concept: Neural Networks can run on graphs.",
          "key_manifestations": [
            "Scarselli, F., et al. (2009). 'The Graph Neural Network Model' (2005 conference papers)",
            "Gori, M., et al. (2005). 'A New Model for Learning in Graph Domains'",
            "Micheli, A. (2009). 'Neural Network for Graphs: A Contextual Constructive Approach' (2005-2006 context)",
            "Vishwanathan, S. V. N., et al. (2010). 'Graph Kernels' (Review of the 2000s)"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Stasis. Deep Learning (Hinton) was rising on *Euclidean* data (Images/Digits). Convolutional Networks rely on shift invariance (a cat is a cat if moved left). Graphs have no shift invariance (no 'left' or 'right'). The fields were orthogonal. Geometric learning was stuck in 'Computer Graphics' (processing 3D meshes) rather than AI.",
          "key_manifestations": [
            "Bronstein, A. M., et al. (2008). 'Numerical Geometry of Non-Rigid Shapes' (2006 work)",
            "Lafon, S., & Lee, A. B. (2006). 'Diffusion Maps and Coarse-Graining'",
            "Coifman, R. R., & Lafon, S. (2006). 'Diffusion Maps'",
            "Hammond, D. K., et al. (2011). 'Wavelets on Graphs via Spectral Graph Theory' (Formulation starting)"
          ]
        },
        "2008": {
          "salience_share": 4,
          "description": "Spectral CNNs (+1%). Bruna, Zaremba, and LeCun attempted to define 'Convolution' on graphs using the Fourier domain (Eigenvectors of Laplacian). It worked but was not spatial; it depended on the specific graph structure (not transferable). It was a theoretical breakthrough but an engineering failure.",
          "key_manifestations": [
            "Brununa, J., et al. (2014). 'Spectral Networks and Locally Connected Networks on Graphs' (Roots in late 2000s spectral theory)",
            "Defferrard, M., et al. (2016). 'Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering' (ChebNet - solving the speed issue)",
            "Bronstein, M. M., et al. (2010). 'Scale-Invariant Heat Kernel Signatures for Non-Rigid Shape Recognition'",
            "Shuman, D. I., et al. (2013). 'The Emerging Field of Signal Processing on Graphs'"
          ]
        },
        "2010": {
          "salience_share": 5,
          "description": "Incubation. The 'Word2Vec' idea (Skip-Gram) inspired 'DeepWalk' and 'Node2Vec.' Researchers realized: 'A random walk on a graph is like a sentence in a corpus.' This allowed applying NLP tools to Graphs. It was 'Shallow' embedding, but it worked and scaled. This sparked the 'Graph Representation Learning' boom.",
          "key_manifestations": [
            "Perozzi, B., et al. (2014). 'DeepWalk: Online Learning of Social Representations' (2013-2014 work)",
            "Grover, A., & Leskovec, J. (2016). 'node2vec: Scalable Feature Learning for Networks'",
            "Tang, J., et al. (2015). 'LINE: Large-scale Information Network Embedding'",
            "Bordes, A., et al. (2013). 'Translating Embeddings for Modeling Multi-relational Data' (TransE - Knowledge Graphs)"
          ]
        },
        "2012": {
          "salience_share": 7,
          "description": "Stasis/Preparation. While AlexNet conquered images, graphs waited. The 'Geometric' community (Bronstein et al.) was formalizing 'Geodesic Convolution.' The pieces were there (Spectral theory, Neural Nets, Embeddings), but the 'AlexNet for Graphs' hadn't happened yet.",
          "key_manifestations": [
            "Masci, J., et al. (2015). 'Geodesic Convolutional Neural Networks on Riemannian Manifolds'",
            "Niepert, M., et al. (2016). 'Learning Convolutional Neural Networks for Graphs' (PATCHY-SAN)",
            "Li, Y., et al. (2016). 'Gated Graph Sequence Neural Networks'",
            "Duvenaud, D. K., et al. (2015). 'Convolutional Networks on Graphs for Learning Molecular Fingerprints' (Chemistry meets DL)"
          ]
        },
        "2014": {
          "salience_share": 12,
          "description": "The 'GCN' Inflection (+5%). Kipf and Welling simplified Spectral CNNs into the 'Graph Convolutional Network' (GCN). It was a first-order approximation that looked like message passing: 'Average your neighbors, multiply by weights, ReLU.' It was fast, scalable, and coded in PyTorch. Suddenly, every dataset with links (Citation networks, Reddit) became a benchmark. The cluster exploded.",
          "key_manifestations": [
            "Kipf, T. N., & Welling, M. (2017). 'Semi-Supervised Classification with Graph Convolutional Networks' (2016 arXiv)",
            "Hamilton, W., et al. (2017). 'Inductive Representation Learning on Large Graphs' (GraphSAGE)",
            "Velickovic, P., et al. (2018). 'Graph Attention Networks' (GAT - Attention comes to graphs)",
            "Gilmer, J., et al. (2017). 'Neural Message Passing for Quantum Chemistry' (Unifying framework)"
          ]
        },
        "2016": {
          "salience_share": 18,
          "description": "Geometric Unification (+6%). Bronstein et al. published 'Geometric Deep Learning,' defining the field. It unified grids (CNNs), graphs (GCNs), and manifolds under the umbrella of 'Symmetry' and 'Invariance.' This gave the cluster a strong theoretical identity. Graph networks began to beat standard methods in Chemistry (Property Prediction) and Recommender Systems (Pinterest GraphSage).",
          "key_manifestations": [
            "Bronstein, M. M., et al. (2017). 'Geometric Deep Learning: Going beyond Euclidean data'",
            "Battaglia, P. W., et al. (2018). 'Relational Inductive Biases, Deep Learning, and Graph Networks'",
            "Ying, R., et al. (2018). 'Graph Convolutional Neural Networks for Web-Scale Recommender Systems' (Pinterest)",
            "Sch\u00fctt, K. T., et al. (2017). 'SchNet: A Continuous-Filter Convolutional Neural Network for Modeling Quantum Interactions'"
          ]
        },
        "2018": {
          "salience_share": 22,
          "description": "The 'AlphaFold' Prelude (+4%). DeepMind used geometric principles (Equivariance) to solve protein folding. The architecture wasn't just a graph; it respected 3D rotations and translations (SE(3) symmetry). 'Equivariant Neural Networks' (Cohen/Welling) became the cutting edge. The cluster moved from 'Topological' (who is connected to whom) to 'Geometric' (where are atoms in 3D space).",
          "key_manifestations": [
            "Senior, A. W., et al. (2020). 'Improved Protein Structure Prediction using Potentials from Deep Learning' (AlphaFold 1)",
            "Cohen, T. S., & Welling, M. (2016/2018). 'Group Equivariant Convolutional Networks'",
            "Thomas, N., et al. (2018). 'Tensor Field Networks: Rotation- and Translation-Equivariant Neural Networks for 3D Point Clouds'",
            "Fuchs, F. B., et al. (2020). 'SE(3)-Transformers: 3D Roto-Translation Equivariant Attention Networks'"
          ]
        },
        "2020": {
          "salience_share": 30,
          "description": "AlphaFold 2 Shock (+8%). The solution to the 50-year-old protein folding problem. It used 'Invariant Point Attention' (Geometric Attention). This was the first time AI solved a major open scientific problem better than physics. The 'Force of Motion' was the migration of physicists into AI, bringing Group Theory and Gauge Theory with them. The cluster is now the engine of 'AI for Science' (Drug Discovery, Material Science).",
          "key_manifestations": [
            "Jumper, J., et al. (2021). 'Highly Accurate Protein Structure Prediction with AlphaFold'",
            "Baek, M., et al. (2021). 'Accurate Prediction of Protein Structures and Interactions Using a Three-Track Neural Network' (RoseTTAFold)",
            "Satorras, V. G., et al. (2021). 'E(n) Equivariant Graph Neural Networks'",
            "GeomStats (2020). 'A Python Package for Riemannian Geometry in Machine Learning'"
          ]
        },
        "2022": {
          "salience_share": 32,
          "description": "Stasis/Integration (+2%). Graph methods integrated with LLMs ('GraphRAG'). Knowledge Graphs returned as a way to ground Hallucinations. However, for pure graph tasks, the 'Oversmoothing' problem (deep GCNs lose information) remained a bottleneck. The 'Displacing Force' was the Transformer: treating nodes as a sequence (Graph Transformer) often worked better than message passing.",
          "key_manifestations": [
            "Ramp\u00e1\u0161ek, L., et al. (2022). 'Recipe for a General, Powerful, Scalable Graph Transformer'",
            "Ying, C., et al. (2021). 'Do Transformers Really Perform Bad for Graph Representation?' (Graphormer)",
            "Wang, Y., et al. (2022). 'DeepGraph: Graph-based Large Language Models'",
            "M\u00fcller, L., et al. (2023). 'Attending to Graph Transformers'"
          ]
        },
        "2024": {
          "salience_share": 35,
          "description": "Current trajectory is 'Generative Geometry' (+3%). Diffusion models on manifolds (SE(3) Diffusion) to generate proteins and crystals. 'AlphaProteo' and 'BioMistral'. The cluster is effectively merging with Generative AI (Cluster 9) but keeping the strict geometric constraints required for physics. It is the most scientifically productive cluster in the 2025 landscape.",
          "key_manifestations": [
            "Watson, J. L., et al. (2023). 'De novo design of protein structure and function with RFdiffusion'",
            "Merchant, A., et al. (2023). 'Scaling Deep Learning for Materials Discovery' (GNoME)",
            "DeepMind (2024). 'AlphaFold 3: Predicting the Structure and Interactions of All Molecules of Life'",
            "Bronstein, M. M. (2024). 'The Future of Geometric Deep Learning' (Position paper)"
          ]
        }
      }
    },
    "13_causal_inference_structural_models": {
      "name": "Causal Inference & Structural Models",
      "description": "This eigencluster represents the 'Science of Cause and Effect'\u2014moving beyond the 'Association' layer (Pattern Recognition) to the 'Counterfactual' layer (Imagination). Dominated by Judea Pearl (DAGs/Do-calculus) and Donald Rubin (Potential Outcomes), it addresses the inability of standard statistical learning to predict the consequences of interventions. Its trajectory is U-shaped: foundational in the 90s, eclipsed by the 'Correlation-is-Enough' Big Data era of the 2010s, and experiencing a renaissance in the 2020s as researchers hit the limits of i.i.d. generalization and seek robust, unbiased AI.",
      "trajectory": {
        "1990": {
          "salience_share": 4,
          "description": "The cluster was in a state of 'Foundational Separation.' While Bayesian Networks (Cluster 3) were handling probability, the specific semantics of 'Causality' were being formalized. Pearl and Verma were distinguishing between 'Seeing' (Observation) and 'Doing' (Intervention). The variance was driven by the realization that $P(Y|X)$ is fundamentally different from $P(Y|do(X))$. This distinction was heretical to standard statisticians who believed causality was unprovable outside of Randomized Controlled Trials (RCTs).",
          "key_manifestations": [
            "Pearl, J., & Verma, T. S. (1991). 'A Theory of Inferred Causation'",
            "Spirtes, P., Glymour, C., & Scheines, R. (1993). 'Causation, Prediction, and Search' (Drafts active 1990)",
            "Rubin, D. B. (1990). 'Formal Mode of Statistical Inference for Causal Effects'",
            "Robins, J. M. (1989/1990). 'The Analysis of Randomized and Non-Randomized AIDS Treatment Trials Using a New Approach to Causal Inference'"
          ]
        },
        "1992": {
          "salience_share": 5,
          "description": "Expansion (+1%). The 'PC Algorithm' (Spirtes/Glymour) demonstrated that one could infer causal structure from observational data under strict assumptions (Faithfulness, Markov Property). This sparked a philosophical war with traditional statistics. The motion was 'Structure Learning'\u2014trying to discover the arrows of the DAG from raw correlations.",
          "key_manifestations": [
            "Spirtes, P., et al. (1993). 'Causation, Prediction, and Search' (The CMU School manifesto)",
            "Pearl, J. (1993). 'Comment: Graphical Models, Causality and Intervention'",
            "Druzdzel, M. J., & Simon, H. A. (1993). 'Causality in Bayesian Belief Networks'",
            "Heckerman, D. (1995). 'A Bayesian Approach to Learning Causal Networks' (1993-94 work)"
          ]
        },
        "1994": {
          "salience_share": 5,
          "description": "Stasis. The community was small but rigorous. The focus was on 'Identifiability'\u2014determining when a causal effect can be estimated from observational data. The 'Back-Door Criterion' became the standard tool for controlling confounders. However, the AI community at large was moving toward simple classification (Neural Nets/SVMs), ignoring the 'Why' for the 'What.'",
          "key_manifestations": [
            "Pearl, J. (1995). 'Causal Diagrams for Empirical Research' (1994 Biometrika submission)",
            "Imbens, G. W., & Angrist, J. D. (1994). 'Identification and Estimation of Local Average Treatment Effects' (Instrumental Variables)",
            "Chickering, D. M. (1995). 'A Transformational Characterization of Equivalent Bayesian Network Structures'",
            "Meek, C. (1995). 'Causal Inference and Causal Explanation with Background Knowledge'"
          ]
        },
        "1996": {
          "salience_share": 4,
          "description": "Contraction (-1%). The 'Data Mining' boom began. In data mining, correlation is gold. If diapers and beer are correlated, you place them together; you don't care *why* (causality). The Causal cluster was viewed as 'too philosophical' and 'unscalable' because structure learning is NP-hard. It retreated to Epidemiology and Economics.",
          "key_manifestations": [
            "Angrist, J. D., et al. (1996). 'Identification of Causal Effects Using Instrumental Variables'",
            "Pearl, J. (1996). 'Structural Axioms for Policy Analysis: A Comment'",
            "Cooper, G. F. (1997). 'A Simple Constraint-Based Algorithm for Efficiently Mining Observational Databases for Causal Relationships' (1996 work)",
            "Rosenbaum, P. R. (1995/1996). 'Observational Studies' (Rubin school consolidation)"
          ]
        },
        "1998": {
          "salience_share": 4,
          "description": "Stasis. Pearl continued to refine the 'Do-Calculus,' a complete axiomatic system for causal manipulation. This was a theoretical peak\u2014the math was solved\u2014but the 'Force of Motion' in AI was elsewhere (SVMs). The disconnect between 'Machine Learning' (prediction) and 'Causal Inference' (explanation) was at its widest.",
          "key_manifestations": [
            "Galles, D., & Pearl, J. (1998). 'An Axiomatic Characterization of Causal Counterfactuals'",
            "Robins, J. M. (1999). 'Association, Causation, and Marginal Structural Models'",
            "Scheines, R., et al. (1998). 'The TETRAD Project: Constraint Based Aids to Causal Model Specification'",
            "Freedman, D. A. (1999). 'From Association to Causation: Some Remarks on the History of Statistics'"
          ]
        },
        "2000": {
          "salience_share": 6,
          "description": "The Publication of 'Causality' (+2%). Judea Pearl's book 'Causality: Models, Reasoning, and Inference' unified the field. It won the Turing Award later, but in 2000, it planted a flag: AI must handle causality to be intelligent. It introduced the 'Ladder of Causation' (Association -> Intervention -> Counterfactuals). The variance bump was intellectual, not industrial.",
          "key_manifestations": [
            "Pearl, J. (2000). 'Causality: Models, Reasoning, and Inference'",
            "Spirtes, P., et al. (2000). 'Causation, Prediction, and Search' (2nd Edition)",
            "Robins, J. M. (2000). 'Marginal Structural Models and Causal Inference in Epidemiology'",
            "Halpern, J. Y., & Pearl, J. (2001). 'Causes and Explanations: A Structural-Model Approach'"
          ]
        },
        "2002": {
          "salience_share": 5,
          "description": "Decay (-1%). The 'Ensemble Methods' (Random Forests) and early Google search algorithms dominated. These were purely observational engines. 'Big Data' started to become the mantra, and with enough data, 'correlation is enough' (Anderson's 'End of Theory' article later captured this zeitgeist). Causal methods required 'Domain Knowledge' (the graph structure), which was seen as a bottleneck.",
          "key_manifestations": [
            "Pearl, J. (2003). 'Statistics and Causal Inference: A Review'",
            "Shimizu, S., et al. (2006). 'A Linear Non-Gaussian Acyclic Model for Causal Discovery' (LiNGAM - roots in ICA 2002)",
            "Eberhardt, F., et al. (2005). 'On the Number of Experiments Sufficient and in the Worst Case Necessary to Identify the Causal Structure'",
            "Lauritzen, S. L. (2001). 'Causal Inference from Graphical Models'"
          ]
        },
        "2004": {
          "salience_share": 4,
          "description": "Stasis/Niche. The 'LiNGAM' algorithm (Shimizu) showed that non-Gaussian data allows you to discover causal direction without time (X->Y vs Y->X). This was a neat trick but applied only to small, tabular data. The cluster was dormant in the major ML conferences (ICML/NIPS), overshadowed by Kernel Methods.",
          "key_manifestations": [
            "Shimizu, S., et al. (2006). 'A Linear Non-Gaussian Acyclic Model for Causal Discovery' (2005-2006 work)",
            "Tian, J., & Pearl, J. (2002/2004). 'A General Identification Condition for Causal Effects'",
            "Dawid, A. P. (2002/2004). 'Influence Diagrams for Causal Inference and Prediction'",
            "Hoyer, P. O., et al. (2006). 'Causal Discovery of Linear Acyclic Models with Arbitrary Distributions'"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Contraction (-1%). The Deep Learning revolution was beginning. Deep Learning is the ultimate 'Association' machine. It finds complex, non-linear correlations ($P(Y|X)$). It has zero concept of causality. As DL rose, Causality fell. The field effectively bifurcated: ML for prediction, Economics/Epidemiology for policy.",
          "key_manifestations": [
            "Pearl, J. (2009). 'Causality: Models, Reasoning, and Inference (2nd Ed)' (Trying to stay relevant)",
            "Spirtes, P., & Zhang, J. (2016). 'Causal Discovery' (Retrospective on the 2000s drought)",
            "Mooij, J. M., et al. (2009). 'Distinguishing Cause from Effect using Non-linear Acyclic Causal Models'",
            "Sun, X., et al. (2006). 'Causal Inference from Time Series with Latent Variables'"
          ]
        },
        "2008": {
          "salience_share": 2,
          "description": "Nadir. 'The End of Theory' era. Chris Anderson (Wired) famously wrote that with enough data, the scientific method is obsolete. Who cares *why* the engine fails, if the sensors predict it? This philosophy was the antithesis of this cluster. Causal variance was non-existent in the SOTA AI conversation.",
          "key_manifestations": [
            "Hoyer, P., et al. (2009). 'Nonlinear Causal Discovery with Additive Noise Models'",
            "Janzing, D., & Sch\u00f6lkopf, B. (2010). 'Causal Inference using the Algorithmic Markov Condition' (2008-09 work keeping the flame alive)",
            "Pearl, J. (2009). 'Causal Inference in Statistics: An Overview'",
            "Claassen, T., & Heskes, T. (2010). 'Causal Discovery in Multiple Models from Different Experiments'"
          ]
        },
        "2010": {
          "salience_share": 2,
          "description": "Stasis. Deep Learning (AlexNet prep) was about to take over. Causality was maintained by the 'Sch\u00f6lkopf' group (Max Planck Institute). They began to formulate the idea that 'Causal mechanisms are invariant.' If X causes Y, that mechanism holds across different domains, whereas simple correlations might flip (Simpson's Paradox). This was the seed of 'Domain Adaptation.'",
          "key_manifestations": [
            "Peters, J., et al. (2011). 'Causal Inference on Time Series using Restricted Structural Equation Models'",
            "Daniusis, P., et al. (2010). 'Inferring Deterministic Causal Relations'",
            "Bareinboim, E., & Pearl, J. (2012). 'Transportability of Causal Effects: Completeness Results' (2011 work)",
            "Sch\u00f6lkopf, B., et al. (2012). 'On Causal and Anticausal Learning'"
          ]
        },
        "2012": {
          "salience_share": 2,
          "description": "Stasis. The world was watching ImageNet. However, the 'Adversarial Example' phenomenon (2013/14) began to suggest that Deep Nets were fragile. They were learning 'texture bias' (correlations) rather than 'shape' (causal structure). This latent failure mode would eventually drive people back to causality, but not yet.",
          "key_manifestations": [
            "Peters, J., et al. (2014). 'Causal Inference using Invariant Prediction' (2012-13 context)",
            "Hyv\u00e4rinen, A., & Smith, S. M. (2013). 'Pairwise Likelihood Ratios for Estimation of Non-Gaussian Structural Equation Models'",
            "Pearl, J. (2014). 'The Do-Calculus Revisited'",
            "Bottou, L., et al. (2013). 'Counterfactual Reasoning and Learning Systems: The Example of Computational Advertising'"
          ]
        },
        "2014": {
          "salience_share": 3,
          "description": "Slight Uptick (+1%). 'Invariant Risk Minimization' concepts began to form. Researchers wanted models that worked in *new* environments (Out-of-Distribution). Standard ERM (Empirical Risk Minimization) fails here. Causal models, by definition, capture the invariant laws of physics/logic. This connected Causality to 'Robustness.'",
          "key_manifestations": [
            "Peters, J., et al. (2016). 'Causal Inference by Using Invariant Prediction: Identification and Confidence Intervals' (2015 arXiv)",
            "Bareinboim, E., & Pearl, J. (2014). 'Transportability from Multiple Environments with Limited Experiments'",
            "Mooij, J. M., et al. (2016). 'Distinguishing Cause from Effect Using Observational Data: Methods and Benchmarks' (2014 work)",
            "Lopez-Paz, D., et al. (2015). 'Towards a Learning Theory of Cause-Effect Inference'"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "The 'Causal ML' Awakening (+2%). As AI entered high-stakes fields (Healthcare, Justice), 'Fairness' became critical. You can't define fairness with correlation (Redlining is just correlation). You need counterfactuals: 'Would this person have been hired if they were a different race?'. This forced the ML community to read Pearl. 'The Book of Why' (published 2018, context 2016-17) popularized these concepts.",
          "key_manifestations": [
            "Kusner, M. J., et al. (2017). 'Counterfactual Fairness'",
            "Peters, J., et al. (2017). 'Elements of Causal Inference: Foundations and Learning Algorithms' (Textbook)",
            "Shalit, U., et al. (2017). 'Estimating Individual Treatment Effect: Generalization Bounds and Algorithms'",
            "Pearl, J. (2018). 'The Book of Why: The New Science of Cause and Effect'"
          ]
        },
        "2018": {
          "salience_share": 7,
          "description": "Convergence with Deep Learning (+2%). 'Causal Representation Learning' (Sch\u00f6lkopf) proposed merging Deep Learning (to learn features from pixels) with Causal Inference (to learn relations between features). Instead of hand-crafting the graph, could we learn the causal variables *and* the graph? This was the 'Neuro-Causal' synthesis.",
          "key_manifestations": [
            "Sch\u00f6lkopf, B., et al. (2021). 'Toward Causal Representation Learning' (2019-2020 drafts)",
            "Bengio, Y., et al. (2019). 'A Meta-Transfer Objective for Learning to Disentangle Causal Mechanisms'",
            "Arjovsky, M., et al. (2019). 'Invariant Risk Minimization' (IRM)",
            "Pearl, J. (2019). 'The Seven Tools of Causal Inference, with Reflections on Machine Learning'"
          ]
        },
        "2020": {
          "salience_share": 8,
          "description": "Expansion (+1%). The failure of models during COVID-19 (distribution shift) highlighted the fragility of correlation. Causal models became the gold standard for 'Reliable AI.' The concept of 'Disentanglement' in VAEs/GANs was re-interpreted as 'isolating independent causal mechanisms.'",
          "key_manifestations": [
            "Sch\u00f6lkopf, B. (2019/2020). 'Causality for Machine Learning'",
            "Kaddour, J., et al. (2022). 'Causal Machine Learning: A Survey and Open Problems'",
            "Geiger, A., et al. (2020). 'Causal Induction from Visual Explanations'",
            "Sauer, A., & Geiger, A. (2021). 'Counterfactual Generative Networks'"
          ]
        },
        "2022": {
          "salience_share": 9,
          "description": "LLM Integration (+1%). Can LLMs reason causally? (K\u0131c\u0131man et al.). Researchers found that LLMs have internalized a lot of causal common sense from text ('dropping glass causes breaking'). The new frontier is using LLMs to *propose* causal graphs, which formal solvers then verify. This solves the 'Discovery' bottleneck.",
          "key_manifestations": [
            "K\u0131c\u0131man, E., et al. (2023). 'Causal Reasoning and Large Language Models: Opening a New Frontier for Causality'",
            "Willig, M., et al. (2022). 'Can Foundation Models Talk Causality?'",
            "Wang, Y., et al. (2023). 'Is ChatGPT a Good Causal Reasoner? A Comprehensive Evaluation'",
            "Imrie, F., et al. (2022). 'Causal Disentanglement with a Double-Derivative Penalty'"
          ]
        },
        "2024": {
          "salience_share": 10,
          "description": "Current trajectory is 'Actionable AI' (+1%). We are moving from 'Chatbots' (passive text gen) to 'Agents' (active doers). To act effectively, an agent must have a causal world model ('If I delete this file, the system crashes'). Reinforcement Learning + Causality is the nexus for autonomous agents. The cluster is becoming the 'Prefrontal Cortex' of the AI stack.",
          "key_manifestations": [
            "Wang, B., et al. (2024). 'Causal-Structure-Driven Chain-of-Thought Prompting'",
            "Ze\u010devi\u0107, M., et al. (2024). 'Causal Parsimony in the Age of Large Language Models'",
            "Zhang, C., et al. (2024). 'Understanding the Causal Mechanisms of LLM Hallucinations'",
            "Goudet, O., et al. (2024). 'Causal Generative AI: From Correlations to Counterfactuals'"
          ]
        }
      }
    },
    "14_convex_optimization_duality": {
      "name": "Convex Optimization & Duality",
      "description": "This eigencluster represents the 'Age of Certainty' in AI optimization. It focuses on problems where local minima are global minima (bowl-shaped landscapes). Centered around Linear Programming (LP), Quadratic Programming (QP), and Semidefinite Programming (SDP), it emphasizes duality gaps, KKT conditions, and interior-point methods. For a long period, 'Convexity' was the gatekeeper of publication: if your loss function wasn't convex, it wasn't considered rigorous.",
      "trajectory": {
        "1990": {
          "salience_share": 6,
          "description": "The cluster was robust, rooted in Operations Research (+1%). Nesterov and Nemirovski were revolutionizing the field with 'Interior Point Methods,' showing that a vast class of convex problems could be solved in polynomial time. This was a stark contrast to the heuristic simulated annealing of the neural/evolutionary crowds. The 'Motion' was the expansion of what was considered 'tractable.'",
          "key_manifestations": [
            "Nesterov, Y., & Nemirovskii, A. (1994). 'Interior-Point Polynomial Algorithms in Convex Programming' (1990 work)",
            "Mehrotra, S. (1992). 'On the Implementation of a Primal-Dual Interior Point Method'",
            "Boyd, S., & Barratt, C. (1991). 'Linear Controller Design: Limits of Performance'",
            "Lustig, I. J., et al. (1990). 'Computational Experience with a Primal-Dual Interior Point Method for Linear Programming'"
          ]
        },
        "1992": {
          "salience_share": 8,
          "description": "Expansion via SVMs (+2%). The invention of the SVM (Cluster 2) gave Convex Optimization a 'Killer App' in AI. Training an SVM is a Quadratic Program (QP). This linked the abstract math of optimization directly to pattern recognition. The 'Displacing Force' acting against Neural Nets was the guarantee: 'Run this QP, and you get the unique best solution every time.'",
          "key_manifestations": [
            "Boser, B. E., et al. (1992). 'A Training Algorithm for Optimal Margin Classifiers' (The QP connection)",
            "Vandenberghe, L., & Boyd, S. (1996). 'Semidefinite Programming' (Early 90s context)",
            "Alizadeh, F. (1995). 'Interior Point Methods in Semidefinite Programming with Applications to Combinatorial Optimization'",
            "Nesterov, Y. (1993). 'A Method of Solving a Convex Programming Problem with Convergence Rate O(1/k^2)'"
          ]
        },
        "1994": {
          "salience_share": 10,
          "description": "The 'SDP' Boom (+2%). Semidefinite Programming (optimizing over the cone of positive definite matrices) became the hot topic. It was shown that many NP-hard graph problems (like Max-Cut) could be relaxed into SDPs (Goemans-Williamson). This gave AI researchers a powerful tool for 'Relaxation'\u2014turning hard discrete problems into solvable convex ones.",
          "key_manifestations": [
            "Goemans, M. X., & Williamson, D. P. (1995). 'Improved Approximation Algorithms for Maximum Cut and Satisfiability Problems Using Semidefinite Programming' (1994 context)",
            "Boyd, S., et al. (1994). 'Linear Matrix Inequalities in System and Control Theory'",
            "Nesterov, Y., & Nemirovskii, A. (1994). 'Interior-Point Polynomial Algorithms in Convex Programming' (Publication)",
            "Helmberg, C., et al. (1996). 'An Interior-Point Method for Semidefinite Programming'"
          ]
        },
        "1996": {
          "salience_share": 12,
          "description": "Peak Influence (+2%). The SVM revolution was in full swing. 'Duality' became a standard concept in ML papers (Primal vs Dual formulation). The ability to switch to the Dual form allowed the use of Kernels. The cluster provided the 'Language' of ML: Lagrangians, slack variables, KKT conditions.",
          "key_manifestations": [
            "Vandenberghe, L., & Boyd, S. (1996). 'Semidefinite Programming'",
            "Freund, R. M. (1998). 'Complexity of Convex Optimization' (Course notes/context)",
            "Bertsekas, D. P. (1996). 'Constrained Optimization and Lagrange Multiplier Methods'",
            "Burges, C. J. C. (1998). 'A Tutorial on Support Vector Machines for Pattern Recognition' (Heavy on convexity)"
          ]
        },
        "1998": {
          "salience_share": 12,
          "description": "Stasis/Maturation. The field had a standard toolkit. The release of solvers like CPLEX and later MOSEK commoditized convex optimization. You didn't need to write the solver; you just defined the constraints. The 'Motion' was finding new ML problems to cast as convex problems (e.g., Sparse Coding via Lasso).",
          "key_manifestations": [
            "Nesterov, Y. (1998). 'Introductory Lectures on Convex Programming'",
            "Sch\u00f6lkopf, B., et al. (1998). 'New Support Vector Algorithms' (Nu-SVM)",
            "Chen, S. S., et al. (1998). 'Atomic Decomposition by Basis Pursuit' (L1 is convex)",
            "Sturm, J. F. (1999). 'Using SeDuMi 1.02, a MATLAB Toolbox for Optimization over Symmetric Cones'"
          ]
        },
        "2000": {
          "salience_share": 14,
          "description": "Institutionalization (+2%). Stephen Boyd's 'Convex Optimization' course (and later book) became the rite of passage for ML graduate students. The prevailing dogma: 'Non-convex optimization is a sin.' If your model wasn't convex, you were 'just guessing.' This mindset heavily suppressed neural network research.",
          "key_manifestations": [
            "Boyd, S., & Vandenberghe, L. (2004). 'Convex Optimization' (Drafts circulating 2000-2003)",
            "Lanckriet, G. R., et al. (2004). 'Learning the Kernel Matrix with Semidefinite Programming'",
            "Ben-Tal, A., & Nemirovski, A. (2001). 'Lectures on Modern Convex Optimization'",
            "Lobo, M. S., et al. (1998/2000). 'Applications of Second-Order Cone Programming'"
          ]
        },
        "2002": {
          "salience_share": 12,
          "description": "Slight Contraction (-2%). As datasets grew, the $O(N^3)$ complexity of Interior Point methods became a bottleneck. People started using 'Coordinate Descent' or simple gradients (SMO for SVMs). The 'pure' mathematical solvers were too slow for the nascent web scale. The 'Approximate' era began.",
          "key_manifestations": [
            "Boyd, S., & Xiao, L. (2003). 'Least-Squares Covariance Matrix Adjustment'",
            "Platt, J. (1998/2002). 'Fast Training of Support Vector Machines using Sequential Minimal Optimization' (Avoiding the full convex solver)",
            "Dattorro, J. (2005). 'Convex Optimization & Euclidean Distance Geometry' (Drafts)",
            "Parrilo, P. A. (2003). 'Semidefinite Programming Relaxations for Semialgebraic Problems'"
          ]
        },
        "2004": {
          "salience_share": 10,
          "description": "The 'Compressed Sensing' Bump (Offset by DL decline). While CS (Cluster 11) relied on L1 minimization (Convex), the broader ML field was starting to look at 'Energy Based Models' (LeCun) and 'Contrastive Divergence' (Hinton), which were defiantly non-convex. The 'Convex' grip on the field began to loosen.",
          "key_manifestations": [
            "Boyd, S., & Vandenberghe, L. (2004). 'Convex Optimization' (Publication year - peak influence)",
            "Candes, E., & Romberg, J. (2005). 'L1-MAGIC: Recovery of Sparse Signals via Convex Programming'",
            "Tropp, J. A. (2006). 'Just Relax: Convex Programming Methods for Identifying Sparse Signals'",
            "Hazan, E., et al. (2006). 'Logarithmic Regret Algorithms for Online Convex Optimization'"
          ]
        },
        "2006": {
          "salience_share": 8,
          "description": "Decline (-2%). The 'Deep Learning' breakthrough (Hinton 2006) was the catalyst for the fall. Deep Nets are highly non-convex. They have saddles, local minima, and plateaus. Yet, they worked. The empirical success of non-convex methods falsified the 'Convex Necessity' hypothesis. Researchers voted with their feet, moving to non-convex landscapes.",
          "key_manifestations": [
            "Bengio, Y., et al. (2006). 'Convex Neural Networks' (Attempting to save the paradigm)",
            "Collobert, R., et al. (2006). 'Trading Convexity for Scalability' (The writing on the wall)",
            "Grant, M., & Boyd, S. (2008). 'CVX: Matlab Software for Disciplined Convex Programming' (Tooling peak, research trough)",
            "Nesterov, Y. (2007). 'Gradient Methods for Minimizing Composite Objective Functions'"
          ]
        },
        "2008": {
          "salience_share": 6,
          "description": "Pivot to 'First Order Methods' (-2%). The heavy machinery of Interior Point methods was abandoned for Machine Learning. The cluster morphed into 'Stochastic Convex Optimization' (analyzing SGD on convex problems). The 'Duality' concept remained useful for deriving algorithms, but the 'Global Guarantee' was no longer the primary goal.",
          "key_manifestations": [
            "Nemirovski, A., et al. (2009). 'Robust Stochastic Approximation Approach to Stochastic Programming'",
            "Duchi, J., et al. (2008). 'Efficient Projections onto the L1-Ball'",
            "Beck, A., & Teboulle, M. (2009). 'A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems'",
            "Parikh, N., & Boyd, S. (2013). 'Proximal Algorithms' (Roots in late 2000s)"
          ]
        },
        "2010": {
          "salience_share": 4,
          "description": "Niche Status (-2%). With the explosion of Deep Learning (2012 looming), Convex Optimization became a 'Classical' topic. It was useful for 'Hyperparameter Tuning' or 'Last Layer' optimization, but the feature learning itself was non-convex. The cluster survived in 'Robust Control' and 'Finance,' but lost the soul of AI.",
          "key_manifestations": [
            "Boyd, S., et al. (2011). 'Distributed Optimization and Statistical Learning via the ADMM' (ADMM was the last major convex trend in ML)",
            "Chandrasekaran, V., et al. (2012). 'The Convex Geometry of Linear Inverse Problems'",
            "Martens, J. (2010). 'Deep Learning via Hessian-Free Optimization' (Using convex sub-problems)",
            "Udell, M., et al. (2014). 'Generalized Low Rank Models' (2010-2012 context)"
          ]
        },
        "2012": {
          "salience_share": 3,
          "description": "Stasis/Legacy. The field of 'Non-convex Optimization' (Cluster 5) took over. Researchers studied 'Saddle Points' rather than 'Global Minima.' Convexity was viewed as a 'toy' assumption that didn't match the reality of high-dimensional loss landscapes.",
          "key_manifestations": [
            "Dauphin, Y. N., et al. (2014). 'Identifying and Attacking the Saddle Point Problem' (Explaining why convexity doesn't matter)",
            "Choromanska, A., et al. (2015). 'The Loss Surfaces of Multilayer Networks' (Spin glasses are non-convex)",
            "Jain, P., et al. (2013). 'Low-Rank Matrix Completion using Alternating Minimization' (Non-convex proving better/faster)",
            "Ge, R., et al. (2015). 'Escaping From Saddle Points \u2014 Online Stochastic Gradient for Tensor Decomposition'"
          ]
        },
        "2014": {
          "salience_share": 2,
          "description": "Stasis. The 'Sum of Squares' (SOS) hierarchy offered a way to approximate non-convex polynomial problems with SDPs. This was theoretically beautiful (Lasserre hierarchy) but computationally explosive and irrelevant for Deep Learning scale.",
          "key_manifestations": [
            "Barak, B., et al. (2014). 'Sum-of-Squares Proofs and the Quest toward Optimal Algorithms'",
            "Parrilo, P. A. (2013). 'Polynomial Optimization, Sums of Squares, and Applications'",
            "Ma, T., et al. (2015). 'Sum-of-Squares Lower Bounds for Sparse PCA'",
            "Bandeira, A. S., et al. (2016). 'On the Phase Transition of Synchronization in SO(N)'"
          ]
        },
        "2016": {
          "salience_share": 2,
          "description": "The 'Meta-Learning' Niche. Convex optimization found a small home in 'Differentiable Optimization Layers.' Work by Amos & Kolter showed you could put a QP solver *inside* a neural net layer (OptNet). This allowed end-to-end learning of constrained control policies.",
          "key_manifestations": [
            "Amos, B., & Kolter, J. Z. (2017). 'OptNet: Differentiable Optimization as a Layer in Neural Networks'",
            "Agrawal, A., et al. (2019). 'Differentiable Convex Optimization Layers'",
            "Barratt, S. (2018). 'On the Differentiability of the Solution to Convex Optimization Problems'",
            "Diamond, S., & Boyd, S. (2016). 'CVXPY: A Python-Embedded Modeling Language for Convex Optimization'"
          ]
        },
        "2018": {
          "salience_share": 2,
          "description": "Stasis. The 'Neural Tangent Kernel' (Cluster 8) showed that infinite width networks behave like kernel machines (which are convex). This gave a theoretical 'Convex Shadow' to Deep Learning, but didn't change the practice of training finite networks.",
          "key_manifestations": [
            "Chizat, L., & Bach, F. (2018). 'On Lazy Training in Differentiable Programming'",
            "Pilanci, M., & Ergen, T. (2020). 'Neural Networks are Convex Regularizers' (2019 work)",
            "Sahiner, A., et al. (2021). 'Vector-output ReLU Neural Networks are Convex Problems'",
            "Bartlett, P. L., et al. (2018). 'Deep Linear Networks with Arbitrary Loss: All Local Minima Are Global'"
          ]
        },
        "2020": {
          "salience_share": 2,
          "description": "Legacy Application. Used primarily in 'Safety Critical' AI. If you need to guarantee a robot won't crash, you use Control Barrier Functions (QP). You use the Neural Net for the 'Performance' and the Convex Solver for the 'Safety Filter.'",
          "key_manifestations": [
            "Ames, A. D., et al. (2019/2020). 'Control Barrier Functions: Theory and Applications'",
            "Cheng, R., et al. (2019). 'End-to-End Safe Reinforcement Learning through Barrier Functions for Safety-Critical Continuous Control'",
            "Wabersich, K. P., & Zeilinger, M. N. (2020). 'A Predictive Safety Filter for Learning-Based Control'",
            "Agrawal, A., et al. (2020). 'Learning Convex Optimization Control Policies'"
          ]
        },
        "2022": {
          "salience_share": 2,
          "description": "Stasis. The term 'Convex' is now mostly a historical marker in AI, though 'Convexity' remains central to the 'Diffusion' formulation (Log-concave sampling). But the explicit use of QP/SDP solvers is rare outside of specialized engineering domains.",
          "key_manifestations": [
            "Chewi, S., et al. (2022). 'Log-Concave Sampling'",
            "Vempala, S., & Wibisono, A. (2019/2022). 'Rapid Convergence of the Unadjusted Langevin Algorithm'",
            "Amos, B. (2023). 'Tutorial on Differentiable Optimization'",
            "Diamond, S. (2022). 'Differentiable Convex Optimization'"
          ]
        },
        "2024": {
          "salience_share": 2,
          "description": "Current trajectory is flat. The 'Neuro-Symbolic' trend (Cluster 4) occasionally uses convex solvers for the 'Symbolic' part. Otherwise, the field has fully embraced the chaos of non-convexity.",
          "key_manifestations": [
            "Chen, X., et al. (2024). 'Symbolic Discovery of Optimization Algorithms'",
            "Sohl-Dickstein, J. (2024). 'The Convexity of the Loss Landscape in Wide Neural Networks'",
            "Minderer, M. (2024). 'Automatic Curriculum Learning via Differentiable Optimization'",
            "CVXPY Team (2024). 'CVXPY 1.5: Code Generation'"
          ]
        }
      }
    },
    "15_distributed_representation_semantics": {
      "name": "Distributed Representation & Semantics",
      "description": "This eigencluster represents the 'Algebra of Meaning'\u2014the shift from treating words/concepts as atomic symbols (indices in a dictionary) to treating them as dense vectors in a continuous space. Grounded in the Distributional Hypothesis ('a word is characterized by the company it keeps'), it tracks the evolution from Latent Semantic Analysis (LSA) to Word2Vec, and finally to the contextualized embeddings of Transformers. It is the mathematical foundation of how modern AI 'understands' language.",
      "trajectory": {
        "1990": {
          "salience_share": 2,
          "description": "The decade began with the 'Atomic' view. In standard linguistics (Chomsky) and AI, words were symbols. 'Dog' was ID 452. 'Cat' was ID 983. They were orthogonal ($Dog \\cdot Cat = 0$). However, Deerwester et al. introduced 'Latent Semantic Analysis' (LSA), using SVD to compress the term-document matrix. This was the Big Bang of dense vectors. It showed that 'Car' and 'Automobile' could end up close in the latent space even if they never appeared together, via transitive co-occurrence.",
          "key_manifestations": [
            "Deerwester, S., et al. (1990). 'Indexing by Latent Semantic Analysis'",
            "Sch\u00fctze, H. (1992). 'Dimensions of Meaning' (1990 context)",
            "Gallant, S. I. (1991). 'Context-Free and Context-Sensitive Distributed representations'",
            "Elman, J. L. (1990). 'Finding Structure in Time' (Implicit distributed representations in RNN hidden states)"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Slow Expansion (+1%). While LSA was powerful for Information Retrieval, it wasn't viewed as 'Cognitive.' The 'Connectionist' community (Hinton/Plaut) argued that biological brains must use distributed representations (activity patterns) rather than 'Grandmother Cells.' This philosophical debate kept the cluster alive against the Symbolic dominance.",
          "key_manifestations": [
            "Sch\u00fctze, H. (1993). 'Word Space' (Vector space models for semantics)",
            "Plaut, D. C., & McClelland, J. L. (1993). 'Generalization with Componential Representations'",
            "Hinton, G. E., et al. (1993). 'Distributed Representations'",
            "Landauer, T. K., & Dumais, S. T. (1997). 'A Solution to Plato's Problem: The Latent Semantic Analysis Theory of Acquisition' (Early drafts/talks)"
          ]
        },
        "1994": {
          "salience_share": 3,
          "description": "Stasis. The computational cost of SVD on large vocabularies was prohibitive ($O(V^3)$ or $O(V^2)$). 'Vector Space Models' were standard in Search (TF-IDF), but these were sparse vectors, not the dense, semantic vectors of this cluster. The distinction is crucial: Sparse = Keyword Matching; Dense = Concept Matching.",
          "key_manifestations": [
            "Lund, K., & Burgess, C. (1996). 'Producing High-Dimensional Semantic Spaces from Lexical Co-Occurrence' (HAL model - 1995 work)",
            "Berry, M. W., et al. (1995). 'Using Linear Algebra for Intelligent Information Retrieval'",
            "Sch\u00fctze, H. (1998). 'Ambiguity Resolution in Natural Language Learning' (1995 context)",
            "Burgess, C., & Lund, K. (1997). 'Modelling Parsing Constraints with High-Dimensional Context Space'"
          ]
        },
        "1996": {
          "salience_share": 4,
          "description": "Slight Expansion (+1%). Landauer & Dumais published the definitive cognitive science paper on LSA, arguing it explained human vocabulary acquisition rates. This linked the engineering of search to the psychology of learning. It validated the 'Distributional Hypothesis' as a model of human cognition, not just a hack.",
          "key_manifestations": [
            "Landauer, T. K., & Dumais, S. T. (1997). 'A Solution to Plato's Problem: The Latent Semantic Analysis Theory of Acquisition'",
            "Foltz, P. W. (1996). 'Latent Semantic Analysis for Text-Based Research'",
            "Kintsch, W. (1998). 'Comprehension: A Paradigm for Cognition' (LSA integration)",
            "Papadimitriou, C. H., et al. (1998). 'Latent Semantic Indexing: A Probabilistic Analysis'"
          ]
        },
        "1998": {
          "salience_share": 5,
          "description": "Topic Models Emergence (+1%). Hofmann introduced 'Probabilistic Latent Semantic Analysis' (pLSA). This replaced the Linear Algebra (SVD) with Probability (EM algorithm). It laid the groundwork for LDA. The 'meaning' was now a probability distribution over topics, rather than a point in geometry. This was a richer semantic model.",
          "key_manifestations": [
            "Hofmann, T. (1999). 'Probabilistic Latent Semantic Indexing' (1998 work)",
            "Baker, L. D., & McCallum, A. K. (1998). 'Distributional Clustering of English Words'",
            "Lin, D. (1998). 'Automatic Retrieval and Clustering of Similar Words'",
            "Lee, L. (1999). 'Measures of Distributional Similarity'"
          ]
        },
        "2000": {
          "salience_share": 7,
          "description": "The 'Neural' Turn (+2%). Bengio's 'Neural Probabilistic Language Model' (2000/2003) was the pivotal moment. He proposed learning the word vectors *simultaneously* with the predictive model. The vector wasn't a statistic (count); it was a *parameter* to be learned via backprop. This is the birth of the modern 'Embedding' (though the term came later).",
          "key_manifestations": [
            "Bengio, Y., et al. (2001). 'A Neural Probabilistic Language Model' (NIPS 2000)",
            "Blei, D. M., et al. (2003). 'Latent Dirichlet Allocation' (The probabilistic rival)",
            "Griffiths, T. L., & Steyvers, M. (2002). 'Finding Scientific Topics'",
            "Paccanaro, A., & Hinton, G. E. (2001). 'Learning Distributed Representations of Concepts from Relational Data'"
          ]
        },
        "2002": {
          "salience_share": 7,
          "description": "Stasis/Competition. LDA (Latent Dirichlet Allocation) became the dominant paradigm for semantics. It was Bayesian, elegant, and interpretable (Topic 5 = 'Genetics'). Neural embeddings (Bengio) were slow to train (Softmax bottleneck). The 'Interpretable' (LDA) beat the 'Dense/Opaque' (Neural) in this era.",
          "key_manifestations": [
            "Blei, D. M., et al. (2003). 'Latent Dirichlet Allocation'",
            "Teh, Y. W., et al. (2006). 'Hierarchical Dirichlet Processes' (2004 work)",
            "Steyvers, M., & Griffiths, T. (2007). 'Probabilistic Topic Models' (Tutorial)",
            "Bengio, Y., et al. (2003). 'A Neural Probabilistic Language Model' (JMLR)"
          ]
        },
        "2004": {
          "salience_share": 6,
          "description": "Incubation. The neural approach was kept alive by Collobert & Weston. They showed that you could pre-train embeddings on unlabeled text and then use them for supervised tasks (NER, POS). This was 'Transfer Learning' before the name stuck. They replaced the slow Softmax with a ranking loss, speeding up training.",
          "key_manifestations": [
            "Collobert, R., et al. (2008). 'A Unified Architecture for Natural Language Processing' (2006-2007 work)",
            "Mnih, A., & Hinton, G. (2007). 'Three New Graphical Models for Statistical Language Modelling'",
            "Turney, P. D., & Pantel, P. (2010). 'From Frequency to Meaning: Vector Space Models of Semantics' (Survey of the decade)",
            "Blitzer, J., et al. (2006). 'Domain Adaptation with Structural Correspondence Learning'"
          ]
        },
        "2006": {
          "salience_share": 6,
          "description": "Stasis. The 'Deep Learning' focus was on Images (RBMs), not Text. Semantics remained the domain of SVMs with sparse features or LDA. The 'Curse of Dimensionality' in vocabulary (100k words) was seen as a barrier for neural nets.",
          "key_manifestations": [
            "Mnih, A., & Hinton, G. E. (2009). 'A Scalable Hierarchical Distributed Language Model' (HLBL - fixing the speed)",
            "Salakhutdinov, R., & Hinton, G. (2009). 'Semantic Hashing'",
            "Gabrilovich, E., & Markovitch, S. (2007). 'Computing Semantic Relatedness using Wikipedia-based Explicit Semantic Analysis'",
            "Chang, J., et al. (2009). 'Reading Tea Leaves: How Humans Interpret Topic Models'"
          ]
        },
        "2008": {
          "salience_share": 8,
          "description": "Acceleration (+2%). Collobert & Weston's work began to circulate widely. The idea that 'Words are Vectors' and 'Sentences are Matrices' began to take hold. Mnih and Hinton improved the efficiency. The 'Word Embedding' concept was crystallizing, ready for a breakout.",
          "key_manifestations": [
            "Collobert, R., & Weston, J. (2008). 'A Unified Architecture for Natural Language Processing'",
            "Turian, J., et al. (2010). 'Word Representations: A Simple and General Method for Semi-Supervised Learning'",
            "Reisinger, J., & Mooney, R. J. (2010). 'Multi-Prototype Vector-Space Models of Word Meaning'",
            "Erk, K., & Pado, S. (2008). 'A Structured Vector Space Model for Word Meaning in Context'"
          ]
        },
        "2010": {
          "salience_share": 12,
          "description": "Rise of 'Semantic Algebra' (+4%). Mikolov (at Brno, then Google) was refining the RNNLM. He noticed the 'King - Man + Woman = Queen' regularity. This was shocking. It implied that the geometry of the embedding space captured the *logic* of human concepts. Semantics wasn't just clustering; it was a linear algebra.",
          "key_manifestations": [
            "Mikolov, T., et al. (2010). 'Recurrent Neural Network Based Language Model'",
            "Baroni, M., & Lenci, A. (2010). 'Distributional Memory: A General Framework for Corpus-Based Semantics'",
            "Socher, R., et al. (2011). 'Parsing Natural Scenes and Natural Language with Recursive Neural Networks'",
            "Glorot, X., et al. (2011). 'Domain Adaptation for Large-Scale Sentiment Classification: A Deep Learning Approach'"
          ]
        },
        "2012": {
          "salience_share": 30,
          "description": "The 'Word2Vec' Singularity (+18%). Mikolov released 'word2vec' (Skip-gram/CBOW) in 2013. It was simple, fast, and produced state-of-the-art analogies. It completely displaced LSA/LDA. Every NLP pipeline threw away sparse one-hot vectors and replaced them with pre-trained Word2Vec or GloVe (Pennington 2014) vectors. This was the 'ImageNet Moment' for Semantics.",
          "key_manifestations": [
            "Mikolov, T., et al. (2013). 'Distributed Representations of Words and Phrases and their Compositionality'",
            "Pennington, J., et al. (2014). 'GloVe: Global Vectors for Word Representation'",
            "Levy, O., & Goldberg, Y. (2014). 'Neural Word Embedding as Implicit Matrix Factorization' (Linking Word2Vec back to LSA)",
            "Mikolov, T., et al. (2013). 'Efficient Estimation of Word Representations in Vector Space'"
          ]
        },
        "2014": {
          "salience_share": 35,
          "description": "Expansion to Sentences (+5%). 'Paragraph Vectors' (Doc2Vec) and 'Skip-Thought Vectors' extended the concept. Can we embed a whole sentence? The 'Displacing Force' was the realization that averaging word vectors loses order. This led to 'Encoder-Decoder' semantics (Cluster 6) where the 'thought vector' (context vector) represented the sentence meaning.",
          "key_manifestations": [
            "Le, Q., & Mikolov, T. (2014). 'Distributed Representations of Sentences and Documents' (Doc2Vec)",
            "Kiros, R., et al. (2015). 'Skip-Thought Vectors'",
            "Iyyer, M., et al. (2015). 'Deep Unordered Composition Rivals Syntactic Methods for Text Classification'",
            "Hill, F., et al. (2016). 'Learning Distributed Representations of Sentences from Unlabelled Data'"
          ]
        },
        "2016": {
          "salience_share": 40,
          "description": "The 'Context' Problem (+5%). Word2Vec had a flaw: 'Bank' had one vector, regardless of whether it was a river bank or a financial bank. This 'Polysemy' problem drove research toward 'Contextualized Embeddings.' ELMo (Peters et al.) used LSTMs to generate a vector for 'Bank' *based on the sentence*. The vector was no longer static; it was dynamic.",
          "key_manifestations": [
            "Peters, M. E., et al. (2018). 'Deep Contextualized Word Representations' (ELMo - 2017 work)",
            "McCann, B., et al. (2017). 'Learned in Translation: Contextualized Word Vectors' (CoVe)",
            "Howard, J., & Ruder, S. (2018). 'Universal Language Model Fine-tuning for Text Classification' (ULMFiT)",
            "Conneau, A., et al. (2017). 'Supervised Learning of Universal Sentence Representations' (InferSent)"
          ]
        },
        "2018": {
          "salience_share": 60,
          "description": "BERT Dominance (+20%). BERT (Bidirectional Encoder Representations from Transformers) solved the context problem perfectly via Self-Attention. The 'Representation' of a word was now a function of every other word in the text. This killed the 'Static Embedding' cluster (Word2Vec) and merged Semantics entirely with Architecture (Transformers).",
          "key_manifestations": [
            "Devlin, J., et al. (2018). 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding'",
            "Radford, A., et al. (2018). 'Improving Language Understanding by Generative Pre-Training'",
            "Liu, Y., et al. (2019). 'RoBERTa: A Robustly Optimized BERT Pretraining Approach'",
            "Reimers, N., & Gurevych, I. (2019). 'Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks'"
          ]
        },
        "2020": {
          "salience_share": 70,
          "description": "Universal Semantic Space (+10%). CLIP (OpenAI) aligned Image embeddings with Text embeddings. Now 'Dog' (text vector) and a photo of a dog (image vector) lived in the same spot on the manifold. This was the unification of sensory semantics. The 'Latent Space' became multimodal.",
          "key_manifestations": [
            "Radford, A., et al. (2021). 'Learning Transferable Visual Models From Natural Language Supervision' (CLIP)",
            "Jia, C., et al. (2021). 'Scaling Up Visual and Vision-Language Representation Learning With Noisy Text Supervision' (ALIGN)",
            "Conneau, A., et al. (2020). 'Unsupervised Cross-lingual Representation Learning at Scale' (XLM-R)",
            "Gao, T., et al. (2021). 'SimCSE: Simple Contrastive Learning of Sentence Embeddings'"
          ]
        },
        "2022": {
          "salience_share": 75,
          "description": "Scale and Retrieval (+5%). 'Vector Databases' (Pinecone/Milvus) became critical infrastructure. The primary way to give LLMs memory (RAG) is to embed text and retrieve by cosine similarity. The 'Semantics' cluster is now the 'Memory' system of the AI stack. 'Matryoshka Embeddings' allowed flexible resolution.",
          "key_manifestations": [
            "Neelakantan, A., et al. (2022). 'Text and Code Embeddings by Contrastive Pre-Training'",
            "Kusupati, A., et al. (2022). 'Matryoshka Representation Learning'",
            "Izacard, G., et al. (2022). 'Unsupervised Dense Information Retrieval with Contrastive Learning'",
            "Wang, L., et al. (2022). 'Text Embeddings by Weakly-Supervised Contrastive Pre-training' (E5)"
          ]
        },
        "2024": {
          "salience_share": 80,
          "description": "Current trajectory is 'Long Context & Compression' (+5%). How do you represent a whole book as a vector? 'Memory tokens' (Transformer-XL style) or 'Summary Vectors.' The frontier is 'Concept Arithmetic' in the activation space of LLMs\u2014finding the 'Truth' vector or the 'Refusal' vector and steering the model.",
          "key_manifestations": [
            "Zou, A., et al. (2023). 'Representation Engineering: A Top-Down Approach to AI Transparency'",
            "Li, X., et al. (2024). 'Angle-Optimized Text Embeddings'",
            "OpenAI (2024). 'Text-embedding-3-large'",
            "Anthropic (2024). 'Mapping the Mind of a Large Language Model' (Dictionary learning on representations)"
          ]
        }
      }
    },
    "16_fuzzy_logic_systems": {
      "name": "Fuzzy Logic Systems",
      "description": "This eigencluster represents the 'Logic of Vagueness.' In contrast to Boolean logic (True/False) or Probabilistic logic (Likelihood of an Event), Fuzzy Logic models 'degrees of truth' (e.g., 'somewhat warm'). Originating from Zadeh's work, it experienced a massive industrial boom in the early 90s\u2014particularly in Japan\u2014controlling everything from subways to rice cookers. However, it suffered a catastrophic decline in academic variance as 'Probabilistic Graphical Models' provided a more rigorous mathematical framework for uncertainty, eventually becoming a niche component of industrial control theory rather than general AI.",
      "trajectory": {
        "1990": {
          "salience_share": 12,
          "description": "The 'Fuzzy Boom' (+3%). Japan was the epicenter. The Sendai Subway system was controlled by a fuzzy controller, offering smoother rides than human operators. This empirical success validated the cluster. It was the dominant form of 'AI' in consumer electronics. The 'Motion' was the translation of linguistic hedges ('very', 'slightly') into control surfaces.",
          "key_manifestations": [
            "Zadeh, L. A. (1990). 'The Birth and Evolution of Fuzzy Logic'",
            "Kosko, B. (1991). 'Neural Networks and Fuzzy Systems' (The Neuro-Fuzzy synthesis)",
            "Yasunobu, S., & Miyamoto, S. (1985/1990). 'Automatic Train Operation System by Predictive Fuzzy Control' (The Sendai impact)",
            "Lee, C. C. (1990). 'Fuzzy Logic in Control Systems: Fuzzy Logic Controller'"
          ]
        },
        "1992": {
          "salience_share": 10,
          "description": "Peak Hype/Correction (-2%). While industrial adoption grew, the Western academic community (AAAI) began to attack Fuzzy Logic. Elkan published 'The Paradoxical Success of Fuzzy Logic,' arguing it was just probability in disguise or locally equivalent to linear interpolation. The 'Displacing Force' was the rise of rigorous Bayesian methods which offered better semantics for uncertainty.",
          "key_manifestations": [
            "Elkan, C. (1993). 'The Paradoxical Success of Fuzzy Logic' (The catalyst for decline)",
            "Mamdani, E. H. (1993). 'Twenty Years of Fuzzy Control'",
            "Jang, J. S. R. (1993). 'ANFIS: Adaptive-Network-Based Fuzzy Inference System' (Attempts to learn fuzzy rules)",
            "Bezdek, J. C. (1993). 'Fuzzy Models\u2014What Are They, and Why?'"
          ]
        },
        "1994": {
          "salience_share": 8,
          "description": "The 'Neuro-Fuzzy' Hybrid (+-0%). To survive, the cluster merged with Neural Networks (ANFIS). Instead of hand-coding rules, they learned them. This kept the cluster relevant in 'Function Approximation,' but it lost its unique identity as a 'Linguistic' reasoner. It was becoming just another basis function network.",
          "key_manifestations": [
            "Jang, J. S. R., et al. (1997). 'Neuro-Fuzzy and Soft Computing' (1995 draft context)",
            "Lin, C. T., & Lee, C. S. G. (1996). 'Neural Fuzzy Systems'",
            "Nauck, D., & Kruse, R. (1997). 'A Neuro-Fuzzy Method to Learn Fuzzy Classification Rules from Data'",
            "Takagi, T., & Sugeno, M. (1985/1994). 'Fuzzy Identification of Systems' (The T-S standard)"
          ]
        },
        "1996": {
          "salience_share": 6,
          "description": "Decline (-2%). SVMs (Cluster 2) arrived. SVMs offered a global optimum. Fuzzy systems required tuning membership functions, which was messy. The 'Interpretability' argument (that Fuzzy is readable) began to lose weight against the sheer performance of Statistical Learning Theory. The cluster retreated to 'Soft Computing.'",
          "key_manifestations": [
            "Pedrycz, W. (1996). 'Fuzzy Sets Engineering'",
            "Klir, G. J., & Yuan, B. (1995). 'Fuzzy Sets and Fuzzy Logic: Theory and Applications'",
            "Wang, L. X. (1997). 'A Course in Fuzzy Systems and Control'",
            "Dubois, D., & Prade, H. (1998). 'Possibility Theory: An Approach to Computerized Processing of Uncertainty' (The theoretical retreat)"
          ]
        },
        "1998": {
          "salience_share": 5,
          "description": "Stasis. The cluster found a permanent home in 'Industrial Control' (cement kilns, washing machines). It effectively exited the 'AI' conversation (which was about learning) and entered the 'Control' conversation. It was a 'Solved' technology.",
          "key_manifestations": [
            "Passino, K. M., & Yurkovich, S. (1998). 'Fuzzy Control'",
            "Zadeh, L. A. (1999). 'From Computing with Numbers to Computing with Words'",
            "Yager, R. R., & Filev, D. P. (1994/1998). 'Essentials of Fuzzy Modeling and Control'",
            "Karray, F., & De Silva, C. (2004). 'Soft Computing' (Context of late 90s curriculum)"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Marginalization (-2%). The 'Probabilistic' victory was complete (Pearl's Causality + Judea Pearl's Turing Award era). Fuzzy Logic was often dismissed as 'wrong probability.' The variance dropped to near zero in top-tier conferences like NIPS/ICML.",
          "key_manifestations": [
            "Mendel, J. M. (2001). 'Uncertain Rule-Based Fuzzy Logic Systems' (Type-2 Fuzzy Logic - trying to add uncertainty to fuzziness)",
            "Zadeh, L. A. (2002). 'Toward a Perception-Based Theory of Probabilistic Reasoning'",
            "Dubois, D., et al. (2004). 'Fuzzy Interval Analysis'",
            "Hajek, P. (2001). 'Metamathematics of Fuzzy Logic'"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis/Niche. 'Type-2 Fuzzy Sets' (Mendel) gained some traction in signal processing to handle noise, but it was mathematically complex and offered marginal gains. The cluster was 'zombie'\u2014alive in IEEE Transactions on Fuzzy Systems, dead in general AI.",
          "key_manifestations": [
            "Mendel, J. M., & John, R. I. (2002). 'Type-2 Fuzzy Sets Made Simple'",
            "Castillo, O., & Melin, P. (2003). 'Soft Computing for Control of Non-Linear Dynamical Systems'",
            "Hagras, H. (2004). 'A Hierarchical Type-2 Fuzzy Logic Control Architecture'",
            "Wang, L. X. (2003). 'The WM Method Completed: A Flexible Fuzzy System Approach'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Legacy. No significant movement. The field focused on 'Granular Computing'\u2014processing information chunks. It had no answer to the 'Feature Learning' revolution brewing in Deep Learning.",
          "key_manifestations": [
            "Pedrycz, W., et al. (2008). 'Granular Computing'",
            "Zadeh, L. A. (2005). 'Toward a Generalized Theory of Uncertainty (GTU)'",
            "Beliakov, G., et al. (2005). 'Aggregation Functions: A Guide for Practitioners'",
            "Alcala, R., et al. (2005). 'Keel: A Software Tool to Assess Evolutionary Algorithms for Data Mining Problems' (Fuzzy rule mining)"
          ]
        },
        "2006": {
          "salience_share": 1,
          "description": "Irrelevance. Deep Learning (Hinton) arrived. A Fuzzy System with 100 rules could not compete with a Neural Net with 1M parameters. The 'Rule Explosion' problem (rules grow exponentially with inputs) made Fuzzy Logic physically impossible for high-dimensional data like images.",
          "key_manifestations": [
            "Mendel, J. M. (2007). 'Type-2 Fuzzy Sets and Systems: An Overview'",
            "Angelov, P., & Filev, D. (2004/2006). 'An Approach to Online Identification of Takagi-Sugeno Fuzzy Models'",
            "Acampora, G., & Loia, V. (2005). 'Fuzzy Control Interoperability'",
            "Zadeh, L. A. (2008). 'Is There a Need for Fuzzy Logic?' (Defensive publication)"
          ]
        },
        "2008": {
          "salience_share": 1,
          "description": "Stasis. Survived only in hybrid 'Neuro-Fuzzy-Evolutionary' systems (Soft Computing) used for specialized low-data engineering tasks.",
          "key_manifestations": [
            "Eiben, A. E., & Smith, J. E. (2003/2008). 'Introduction to Evolutionary Computing' (Context of hybrids)",
            "Lughofer, E. (2011). 'Evolving Fuzzy Systems' (2008-2009 work)",
            "Cord\u00f3n, O. (2011). 'A Historical Review of Evolutionary Learning Methods for Mamdani-Type Fuzzy Rule-Based Systems'",
            "Bustince, H., et al. (2010). 'A Review of Interval-Valued Fuzzy Sets'"
          ]
        },
        "2010": {
          "salience_share": 1,
          "description": "Nadir. The 'Big Data' era. Fuzzy Logic does not scale. It requires expert knowledge to define sets. Data was now abundant, experts were expensive. The cluster was effectively dead in the SOTA discussion.",
          "key_manifestations": [
            "Guevara, J., et al. (2011). 'Fuzzy Logic in the Era of Cloud Computing'",
            "Fernandez, A., et al. (2010). 'A Study on the Use of Non-Standard Fuzzy Partitions'",
            "Zadeh, L. A. (2011). 'A Note on Z-Numbers'",
            "Sanz, J. A., et al. (2010). 'Interval-Valued Fuzzy Rule-Based Classification Systems'"
          ]
        },
        "2012": {
          "salience_share": 0,
          "description": "Extinction Event (in core AI). AlexNet. No one was writing fuzzy rules for ImageNet. The variance is effectively 0 for general AI, maintained at >0 only by legacy control systems.",
          "key_manifestations": [
            "Lughofer, E. (2013). 'On-line Assurance of Interpretability Criteria in Evolving Fuzzy Systems'",
            "Blanco, A., et al. (2013). 'Fuzzy Logic in Genomics'",
            "Dourado, A. (2012). 'Computational Intelligence in Medicine'",
            "Pedrycz, W. (2013). 'Granular Computing: Analysis and Design of Intelligent Systems'"
          ]
        },
        "2014": {
          "salience_share": 1,
          "description": "Minor 'XAI' Pulse (+1%). As Deep Learning became a black box, people looked back at Fuzzy Logic for 'Explainable AI.' A 'Fuzzy Rule' is readable ('IF temperature IS high THEN fan IS fast'). Researchers tried to extract fuzzy rules *from* deep nets to explain them. This gave the cluster a new, subservient role.",
          "key_manifestations": [
            "Guillaume, S., & Charnomordic, B. (2012/2014). 'Fuzzy Inference Systems: An Integrated Modeling Environment'",
            "Alonso, J. M., et al. (2015). 'HILK: A New Methodology for Designing Highly Interpretable Linguistic Knowledge Bases'",
            "Guglielmi, N., et al. (2014). 'Fuzzy Logic for Big Data'",
            "Ishibuchi, H., et al. (2014). 'Evolutionary Multi-Objective Design of Fuzzy Rule-Based Classifiers'"
          ]
        },
        "2016": {
          "salience_share": 1,
          "description": "Stasis. The 'Fuzzy' concept appeared in 'Fuzzy Clustering' (C-means) occasionally, but otherwise, the field was insulated.",
          "key_manifestations": [
            "Bezdek, J. C. (2013/2016). 'Pattern Recognition with Fuzzy Objective Function Algorithms' (Legacy reprint/use)",
            "Havens, T. C., et al. (2012). 'Fuzzy C-Means Algorithms for Very Large Data'",
            "Elkan, C. (Legacy). 'The fading of Fuzzy'",
            "Castillo, O. (2016). 'Type-2 Fuzzy Logic in Intelligent Control Applications'"
          ]
        },
        "2018": {
          "salience_share": 0,
          "description": "No significant activity relative to the AI boom. The term 'Fuzzy' is mostly used now to describe 'Fuzzy Matching' in strings, which is edit distance, not Zadeh's logic.",
          "key_manifestations": [
            "Deng, Y. (2016/2018). 'Dempster-Shafer Theory' (Related uncertainty theory)",
            "Kahraman, C. (2018). 'Fuzzy Logic in Intelligent Decision Making'",
            "Liao, H., et al. (2017). 'Hesitant Fuzzy Linguistic Term Sets'",
            "Zavadskas, E. K., et al. (2017). 'Hybrid Multiple Criteria Decision Making Methods'"
          ]
        },
        "2020": {
          "salience_share": 0,
          "description": "Stasis. The 'Neuro-Symbolic' trend ignores Fuzzy Logic in favor of crisp First Order Logic or Probabilistic Logic. Fuzzy is seen as 'The Old Way.'",
          "key_manifestations": [
            "Karnik, N. N., et al. (Legacy). 'Type-2 Fuzzy Logic Systems'",
            "Mendel, J. M. (2017/2020). 'Explainable Fuzzy Systems'",
            "Cinque, M., et al. (2020). 'Fuzzy Logic for Failure Prediction'",
            "Garg, H. (2020). 'Generalized Geometric Aggregation Operators Based on T-Norms'"
          ]
        },
        "2022": {
          "salience_share": 0,
          "description": "Stasis. Only relevant in the 'History of AI' context.",
          "key_manifestations": [
            "Zadeh, L. A. (Legacy). 'Retrospectives'",
            "Alonso-Moral, J. M., et al. (2021/2022). 'Explainable Artificial Intelligence (XAI): Concepts, Taxonomies, Opportunities and Challenges'",
            "Tazhibay, A., et al. (2022). 'Fuzzy Logic in Smart Cities'",
            "Bustince, H. (2022). 'Fuzzy Sets and Systems'"
          ]
        },
        "2024": {
          "salience_share": 0,
          "description": "Zero variance. The concept of 'vague concepts' is now handled by the 'Embedding Space' (Cluster 15). A vector is the modern implementation of a fuzzy set. We don't need explicit membership functions; the cosine similarity provides the 'degree of truth.' The eigencluster has been fully absorbed by Vector Semantics.",
          "key_manifestations": [
            "NB: Fuzzy Logic has no manifestations in the SOTA AI of 2024/2025.",
            "Reference 1: 'The Absorption of Fuzzy Logic by Vector Semantics'",
            "Reference 2: 'History of Soft Computing'",
            "Reference 3: 'Industrial Control Legacy Systems'"
          ]
        }
      }
    },
    "17_neuromorphic_spiking_dynamics": {
      "name": "Neuromorphic Spiking Dynamics",
      "description": "This eigencluster represents the 'Hardware-Software' alignment seeking to mimic biological brains not just mathematically (like ANNs) but physically and temporally. It focuses on Spiking Neural Networks (SNNs), event-based cameras, and analog VLSI. The core tenet is that information is encoded in the *timing* of spikes, not just the rate. Its trajectory is a 'Sleeping Giant'\u2014perpetually promising a revolution in energy efficiency ($1000x$ better than GPUs) that has yet to fully materialize in the mainstream due to the difficulty of training non-differentiable spikes.",
      "trajectory": {
        "1990": {
          "salience_share": 4,
          "description": "The cluster began with Carver Mead's manifesto. He argued that to build brains, we must use the physics of silicon (sub-threshold transistors) to emulate the physics of ions. This 'Neuromorphic Engineering' was distinct from AI; it was Physics/EE. The variance was low but the vision was foundational: 'The brain is not a logic gate.'",
          "key_manifestations": [
            "Mead, C. (1989/1990). 'Analog VLSI and Neural Systems' (The Bible of the field)",
            "Mahowald, M., & Douglas, R. (1991). 'A Silicon Neuron'",
            "Koch, C. (1999). 'Biophysics of Computation' (Roots in 90s Caltech)",
            "Andreou, A. G., et al. (1991). 'Current-Mode Subthreshold MOS Circuits for Analog VLSI Neural Systems'"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Stasis. The field was struggling with 'Device Mismatch.' Analog circuits are noisy and variable. Unlike digital logic, every silicon neuron was different. This made 'programming' them impossible. The cluster focused on sensory peripheries (Silicon Retinas) rather than cognitive cores.",
          "key_manifestations": [
            "Mahowald, M. A. (1992). 'The Silicon Retina' (PhD Thesis)",
            "Boahen, K. A., & Andreou, A. G. (1992). 'A Contrast Sensitive Silicon Retina with Reciprocal Synapses'",
            "Liu, S. C. (1996). 'Analog VLSI Circuits and Principles' (1992-1994 work)",
            "Sarpeshkar, R., et al. (1993). 'Visual Motion Computation in Analog VLSI'"
          ]
        },
        "1994": {
          "salience_share": 3,
          "description": "Stasis/Theory. Maass introduced 'Networks of Spiking Neurons,' proving they are computationally more powerful than standard sigmoidal nets (3rd Generation NN). This gave the field theoretical ammo: 'We are more powerful than the dominant cluster.' But no learning algorithm existed for spikes.",
          "key_manifestations": [
            "Maass, W. (1995/1996). 'Networks of Spiking Neurons: The Third Generation of Neural Network Models' (1994 work)",
            "Gerstner, W. (1995). 'Time Structure of the Activity in Neural Network Models'",
            "Van Vreeswijk, C., & Sompolinsky, H. (1996). 'Chaos in Neuronal Networks with Balanced Excitatory and Inhibitory Activity' (Physics of SNNs)",
            "Abbott, L. F., & Blum, K. I. (1996). 'Functional Significance of Long-Term Potentiation for Sequence Learning'"
          ]
        },
        "1996": {
          "salience_share": 3,
          "description": "The 'STDP' Catalyst (+0%). Biologists discovered 'Spike-Timing-Dependent Plasticity' (STDP) - if neuron A spikes just before B, the connection strengthens. If after, it weakens. This provided a local, Hebbian learning rule for SNNs. It sparked a wave of 'Unsupervised Learning' models in hardware.",
          "key_manifestations": [
            "Markram, H., et al. (1997). 'Regulation of Synaptic Efficacy by Coincidence of Postsynaptic APs and EPSPs' (STDP discovery)",
            "Song, S., et al. (2000). 'Competitive Hebbian Learning through Spike-Timing-Dependent Synaptic Plasticity' (Theory)",
            "Bi, G. Q., & Poo, M. M. (1998). 'Synaptic Modification in Neurons Depending on Spike Timing'",
            "Kempter, R., et al. (1999). 'Hebbian Learning and Spiking Neurons'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Contraction (-1%). The 'Digital' world was winning. Moore's Law made digital simulation of brains (on CPUs) cheaper than building custom analog chips. The 'Neuromorphic' approach was viewed as an expensive eccentricity. The cluster survived in European consortia (Telluride/Capo Caccia workshops).",
          "key_manifestations": [
            "Indiveri, G. (1999). 'Neuromorphic Analog VLSI Sensors for Visual Interaction'",
            "Douglas, R., et al. (1995/1998). 'Recurrent Excitation in Neocortical Circuits'",
            "Maass, W. (1997). 'Fast Sigmoidal Networks via Spiking Neurons'",
            "Amit, D. J., & Brunel, N. (1997). 'Model of Global Spontaneous Activity and Local Structured Activity during Delay Periods'"
          ]
        },
        "2000": {
          "salience_share": 2,
          "description": "Stasis. 'Liquid State Machines' (Maass) were proposed\u2014using a chaotic reservoir of spiking neurons to process time series. This was a variant of Reservoir Computing. It showed SNNs could do computation without training internal weights, sidestepping the learning problem.",
          "key_manifestations": [
            "Maass, W., et al. (2002). 'Real-Time Computing Without Stable States: A New Framework for Neural Computation' (Liquid State Machines - 2000 work)",
            "Naber, A., et al. (2002). 'Liquid Computing'",
            "Gerstner, W., & Kistler, W. M. (2002). 'Spiking Neuron Models' (Textbook)",
            "Izhikevich, E. M. (2003). 'Simple Model of Spiking Neurons' (The standard cheap model)"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis. The 'Address Event Representation' (AER) protocol became standard. It allowed chips to communicate spikes asynchronously (like the internet). This enabled multi-chip systems. But 'Intelligence' was still absent; these were just fancy reflex agents.",
          "key_manifestations": [
            "Boahen, K. (2000/2002). 'Point-to-Point Connectivity between Neuromorphic Chips using Address Events'",
            "Deiss, S. R., et al. (1998/2002). 'A Multistage Neocortical Architecture for Vision'",
            "Vogelstein, R. J., et al. (2002). 'Spike Sorting with Synchronous Detection'",
            "Delbruck, T. (2005). 'Frame-Free Dynamic Digital Vision' (DVS camera precursor)"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Stasis. The 'Blue Brain Project' (Markram) launched, promising to simulate a rat column spike-by-spike. This injected funding and hype, but it was 'Simulation' (Neuroscience), not 'AI' (Function). The SNN community was divorced from the ML community.",
          "key_manifestations": [
            "Markram, H. (2006). 'The Blue Brain Project' (2005 launch)",
            "Izhikevich, E. M. (2004). 'Which Model to Use for Cortical Spiking Neurons?'",
            "Davison, A. P., et al. (2004). 'PyNN: A Common Interface for Neuronal Network Simulators'",
            "Brette, R., et al. (2007). 'Simulation of Networks of Spiking Neurons: A Review'"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Stasis. Deep Learning (Hinton) was rising. Hinton explicitly moved *away* from spikes to 'Rates' (mean field theory). He argued spikes were just noise to be averaged out. This intellectual blow kept the cluster suppressed.",
          "key_manifestations": [
            "Hinton, G. E. (2007). 'To Recognize Shapes, First Learn to Generate Images' (Rate-based argument)",
            "Eugene Izhikevich (2007). 'Dynamical Systems in Neuroscience'",
            "Bohte, S. M., et al. (2002/2006). 'Error-Backpropagation in Temporally Encoded Networks of Spiking Neurons' (SpikeProp - early attempts failed to scale)",
            "Masquelier, T., & Thorpe, S. J. (2007). 'Unsupervised Learning of Visual Features through STDP'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "The 'SyNAPSE' Injection (+1%). DARPA launched the SyNAPSE program to build a 'cognitive computer.' This poured millions into IBM (TrueNorth) and HRL. It forced the hardware and software people to talk. The goal was 'scale'\u2014millions of neurons.",
          "key_manifestations": [
            "Modha, D. S., et al. (2011). 'Cognitive Computing' (SyNAPSE whitepapers 2008-2009)",
            "Ananthanarayanan, R., et al. (2009). 'The Cat is Out of the Bag: Cortical Simulations with 10^9 Neurons'",
            "Merolla, P., et al. (2007/2008). 'A Digital Neurosynaptic Core using Event-Driven Dynamics'",
            "Lichtsteiner, P., et al. (2008). 'A 128x128 120 dB 15 us Latency Asynchronous Temporal Contrast Vision Sensor' (DVS camera - The 'Retina')"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "Stasis. The 'DVS' camera (Event Camera) started to gain traction in robotics. It saw 'motion' at microsecond resolution, not frames. This created a niche: 'High Speed, Low Power' perception. But standard Computer Vision (Cluster 1) couldn't process this data, creating a silo.",
          "key_manifestations": [
            "Delbruck, T., et al. (2010). 'Activity-Driven Event-Based Vision Sensor'",
            "Serrano-Gotarredona, T., et al. (2013). 'CAVIAR: A 45k Neuron, 5M Synapse, 12G Connects/s AER Hardware Sensory-Processing-Learning-Actuating System'",
            "Indiveri, G., et al. (2011). 'Neuromorphic Silicon Neuron Circuits'",
            "O'Connor, P., et al. (2013). 'Real-Time Classification and Sensor Fusion with a Spiking Deep Belief Network'"
          ]
        },
        "2012": {
          "salience_share": 3,
          "description": "The 'ANN-to-SNN' Conversion (+0%). Researchers realized they couldn't train SNNs directly (no gradient). So they trained a standard CNN (ReLU) and converted it to an SNN (Integrate-and-Fire). This allowed SNNs to match MNIST benchmarks, but it felt like cheating. It wasn't 'using' time, just approximating rates.",
          "key_manifestations": [
            "O'Connor, P., et al. (2013). 'Real-Time Classification and Sensor Fusion with a Spiking Deep Belief Network'",
            "Diehl, P. U., et al. (2015). 'Fast-Classifying, High-Accuracy Spiking Deep Networks Through Weight and Threshold Balancing'",
            "Perez-Carrasco, J. A., et al. (2013). 'Mapping from Frame-Driven to Frame-Free Event-Driven Vision Systems'",
            "Eliasmith, C., et al. (2012). 'A Large-Scale Model of the Functioning Brain' (Spaun)"
          ]
        },
        "2014": {
          "salience_share": 4,
          "description": "TrueNorth Launch (+1%). IBM released the TrueNorth chip. 1 million neurons, 70mW. It was an engineering marvel but a functional dud. It couldn't learn (weights were fixed). It proved you *could* build the hardware, but software was missing. It spurred interest but failed to displace GPUs.",
          "key_manifestations": [
            "Merolla, P. A., et al. (2014). 'A Million Spiking-Neuron Integrated Circuit with a Scalable Communication Network and Interface' (TrueNorth)",
            "Diehl, P. U., & Cook, M. (2015). 'Unsupervised Learning of Digit Recognition using STDP'",
            "Furber, S. B., et al. (2014). 'The SpiNNaker Project'",
            "Cao, Y., et al. (2015). 'Spiking Deep Convolutional Neural Networks for Energy-Efficient Object Recognition'"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "Surrogate Gradients (+1%). The 'SNN Training' problem was solved-ish. Neftci and others showed that you could smooth the spike function (Surrogate Gradient) to allow Backprop through Time (BPTT). Finally, SNNs could be trained end-to-end like RNNs. This began the modern era of Deep SNNs.",
          "key_manifestations": [
            "Neftci, E. O., et al. (2019). 'Surrogate Gradient Learning in Spiking Neural Networks' (Roots in 2016-17 work)",
            "Lee, J. H., et al. (2016). 'Training Deep Spiking Neural Networks using Backpropagation'",
            "Wu, Y., et al. (2018). 'Spatio-Temporal Backpropagation for Training High-Performance Spiking Neural Networks'",
            "Zenke, F., & Ganguli, S. (2018). 'SuperSpike: Supervised Learning in Multilayer Spiking Neural Networks'"
          ]
        },
        "2018": {
          "salience_share": 5,
          "description": "Loihi Launch (+0%). Intel released Loihi. Unlike TrueNorth, it had on-chip plasticity (learning). This was a better research platform. The cluster focused on 'Edge AI'\u2014putting AI on drones where every watt counts. SNNs were no longer chasing accuracy (where they lost to Transformers) but Efficiency (where they won).",
          "key_manifestations": [
            "Davies, M., et al. (2018). 'Loihi: A Neuromorphic Manycore Processor with On-Chip Learning'",
            "Shrestha, A., & Orchard, G. (2018). 'SLAYER: Spike Layer Error Reassignment'",
            "Roy, K., et al. (2019). 'Towards Spike-Based Machine Intelligence with Neuromorphic Computing'",
            "Bellec, G., et al. (2018). 'Long Short-Term Memory and Learning-to-Learn in Networks of Spiking Neurons'"
          ]
        },
        "2020": {
          "salience_share": 5,
          "description": "Stasis/Integration. SNNs began to merge with 'Transformers' (Spikformer). The idea: keep the architecture, swap the neuron. The 'Displacing Force' was the extreme optimization of GPUs (Tensor Cores) which eroded the efficiency advantage of SNNs. If a GPU is 100x faster, who cares if SNN is 10x more efficient?",
          "key_manifestations": [
            "Zhou, Z., et al. (2021). 'Spikformer: A Spiking Transformer'",
            "Kim, Y., et al. (2020). 'Spiking-YOLO: Spiking Neural Network for Energy-Efficient Object Detection'",
            "Gallego, G., et al. (2020). 'Event-Based Vision: A Survey'",
            "Pei, J., et al. (2019). 'Towards Artificial General Intelligence with Hybrid Tianjic Chip Architecture'"
          ]
        },
        "2022": {
          "salience_share": 4,
          "description": "Contraction (-1%). The LLM boom (Cluster 6) relies on dense matrix multiplications. SNNs rely on sparse scatter-gather ops, which current hardware hates. The 'Hardware Lottery' (Hooker) worked against SNNs. The cluster is niche, waiting for 'BitNet' or '1-bit LLM' trends to swing the pendulum back to sparsity.",
          "key_manifestations": [
            "Hooker, S. (2021). 'The Hardware Lottery' (Explaining why SNNs fail)",
            "Yao, M., et al. (2023). 'Spike-driven Transformer'",
            "Zhu, R., et al. (2022). 'Spiking NeRF'",
            "Eshraghian, J. K., et al. (2023). 'Training Spiking Neural Networks Using Lessons From Deep Learning'"
          ]
        },
        "2024": {
          "salience_share": 4,
          "description": "Current trajectory is 'Hybridization' (+0%). 'BitNet b1.58' (Microsoft) showed that LLMs can run with ternary weights (-1, 0, 1) and no multiplications. This is functionally very close to an SNN. The lines are blurring. The 'Neuromorphic' label is fading, replaced by 'Extreme Quantization.'",
          "key_manifestations": [
            "Ma, S., et al. (2024). 'The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits'",
            "Wang, H., et al. (2024). 'BitNet: Scaling 1-bit Transformers for Large Language Models'",
            "Intel (2024). 'Loihi 2 and Lava Software Framework'",
            "SynSense (2024). 'Commercial Neuromorphic Vision Chips'"
          ]
        }
      }
    },
    "18_algorithmic_information_theory": {
      "name": "Algorithmic Information Theory",
      "description": "This eigencluster represents the theoretical limit of learning: 'Learning is Compression.' Grounded in Kolmogorov Complexity (the length of the shortest program to output data D) and Solomonoff Induction (the universal prior), it provides the 'Gold Standard' for general intelligence. Trajectory-wise, it has always been a 'High Altitude' cluster\u2014providing the theoretical North Star (AIXI) but rarely touching the ground of practice due to uncomputability. Recently, it has resurfaced as the explanation for why LLMs work: they are compression engines.",
      "trajectory": {
        "1990": {
          "salience_share": 2,
          "description": "The cluster was pure theory (+0%). Li and Vitanyi were codifying the field. The link to AI was 'Minimum Description Length' (MDL) as a model selection principle (Rissanen). It offered a razor: the best model is the one that compresses the data most. It was an alternative to the 'Structural Risk Minimization' of Cluster 8.",
          "key_manifestations": [
            "Li, M., & Vitanyi, P. (1993). 'An Introduction to Kolmogorov Complexity and Its Applications' (Drafts/Papers 1990)",
            "Rissanen, J. (1989/1990). 'Stochastic Complexity in Statistical Inquiry'",
            "Wallace, C. S., & Freeman, P. R. (1987/1990). 'Estimation and Inference by Compact Coding'",
            "Schmidhuber, J. (1992). 'A 'Universal' Algorithm for Sequential Decisions Based on Algorithmic Probability' (AIXI precursor)"
          ]
        },
        "1992": {
          "salience_share": 2,
          "description": "Stasis. Schmidhuber began publishing on 'Neural Sequence Chunking' (History Compression), linking RNNs to compression. He argued that an RNN minimizing error is essentially finding a short program (weights) to describe the sequence. This was the first bridge between AIT and Neural Nets.",
          "key_manifestations": [
            "Schmidhuber, J. (1992). 'Learning Complex, Extended Sequences Using the Principle of History Compression'",
            "Hinton, G. E., & Van Camp, D. (1993). 'Keeping the Neural Networks Simple by Minimizing the Description Length of the Weights'",
            "Rissanen, J. (1996). 'Fisher Information and Stochastic Complexity'",
            "Yamanishi, K. (1992). 'A Learning Criterion for Stochastic Rules based on Minimum Description Length'"
          ]
        },
        "1994": {
          "salience_share": 2,
          "description": "Stasis. The 'Schmidhuber' factor. He continued to publish on 'Levin Complexity' and 'Speed Prior.' It was a niche sub-culture (IDSIA lab) disconnected from the mainstream 'Bayesian Network' or 'SVM' crowds, who found Kolmogorov Complexity 'uncomputable and therefore useless.'",
          "key_manifestations": [
            "Schmidhuber, J. (1995). 'Discovering Neural Nets with Low Kolmogorov Complexity and High Generalization Capability'",
            "Schmidhuber, J. (1997). 'The Speed Prior: A New Simplicity Measure Compliant with G\u00f6del's Incompleteness Theorems'",
            "Gammerman, A., & Vovk, V. (1995). 'Kolmogorov Complexity: Sources, Theory and Applications'",
            "Wallace, C. S., & Dowe, D. L. (1999). 'Minimum Message Length and Kolmogorov Complexity' (Context of 90s debate)"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "Stasis. The 'No Free Lunch' theorems (Cluster 5) relied on AIT arguments. But for practical learning, MDL was just a regularizer. The cluster had low variance because it didn't produce an *algorithm* you could run on a benchmark.",
          "key_manifestations": [
            "Vitanyi, P., & Li, M. (1997). 'Ideal MDL and Its Relation to Bayesianism'",
            "Adriaans, P., & Vitanyi, P. (1997). 'The Power and Perils of MDL'",
            "Hochreiter, S., & Schmidhuber, J. (1997). 'Flat Minima' (Linking compression to generalization width)",
            "Watkins, C. (1995). 'Information Transmission and Learning'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "The 'AIXI' Definition (+1%). Marcus Hutter defined AIXI, the mathematical optimal agent. It uses Solomonoff Induction to predict the environment and maximizes reward. It is uncomputable, but it solved the *definition* of intelligence. Intelligence is the ability to achieve goals in a wide range of environments (Universal Intelligence).",
          "key_manifestations": [
            "Hutter, M. (2000). 'A Theory of Universal Artificial Intelligence based on Algorithmic Probability' (1999 arXiv)",
            "Hutter, M. (2001). 'Universal Artificial Intelligence'",
            "Legg, S., & Hutter, M. (2001). 'Universal Intelligence: A Definition of Machine Intelligence' (Roots in late 90s)",
            "Schmidhuber, J. (2002). 'The Bias-Optimal Probability Distribution'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Stasis. The 'Hutter Prize' was launched (2006, but roots here) for compressing Wikipedia. The argument: 'To compress the text, you must understand it.' If you can predict the next character perfectly (max compression), you are intelligent. This set the stage for LLMs 20 years later.",
          "key_manifestations": [
            "Hutter, M. (2004). 'Universal Artificial Intelligence: Sequential Decisions based on Algorithmic Probability' (The Book)",
            "Mahoney, M. (2000). 'Fast Text Compression with Neural Networks' (Precursor to LLMs)",
            "Cilibrasi, R., & Vitanyi, P. (2005). 'Clustering by Compression'",
            "Legg, S. (2008). 'Machine Super Intelligence' (PhD Thesis)"
          ]
        },
        "2002": {
          "salience_share": 3,
          "description": "Stasis. 'Normalized Google Distance' (Cilibrasi/Vitanyi) used search engine counts as a proxy for Kolmogorov complexity to measure semantic similarity. This was a clever practical application. But the 'Mainstream' was obsessed with Kernels.",
          "key_manifestations": [
            "Cilibrasi, R., & Vitanyi, P. (2007). 'The Google Similarity Distance' (2004 work)",
            "Faloutsos, C., & Megalooikonomou, V. (2007). 'On Data Mining, Compression, and Kolmogorov Complexity'",
            "Keogh, E., et al. (2004). 'Towards Parameter-Free Data Mining' (Using compression for clustering)",
            "Hutter, M. (2005). 'A Unified View of Induction and Solomonoff Approximation'"
          ]
        },
        "2004": {
          "salience_share": 3,
          "description": "Stasis. The 'Autoencoder' (Cluster 9) is a compressor. Hinton & Salakhutdinov (2006) showed that deep autoencoders beat JPEG. This linked 'Deep Learning' to 'Compression' empirically. The AIT cluster provided the theory: the Autoencoder is approximating the Kolmogorov complexity of the image.",
          "key_manifestations": [
            "Hinton, G. E., & Salakhutdinov, R. R. (2006). 'Reducing the Dimensionality of Data with Neural Networks' (Compression framing)",
            "Vereshchagin, N. K., & Vitanyi, P. M. (2004). 'Kolmogorov's Structure Functions with an Application to the Foundations of Model Selection'",
            "Hutter, M. (2006). 'On the Foundations of Universal Artificial Intelligence'",
            "Schmidhuber, J. (2006). 'G\u00f6del Machines: Fully Self-Referential Optimal Universal Self-Improvers'"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Stasis. Deep Learning rose. The AIT crowd (Hutter/Schmidhuber) claimed 'We told you so' (Compression = Intelligence). But the Deep Learning crowd didn't use Solomonoff Induction; they used SGD. The 'Displacing Force' was the impracticality of AIT methods.",
          "key_manifestations": [
            "Hutter, M. (2009). 'Feature Reinforcement Learning: Part I. Unstructured MDPs'",
            "Veness, J., et al. (2011). 'A Monte Carlo AIXI Approximation' (MC-AIXI-CTW - Making it computable)",
            "Schmidhuber, J. (2009). 'Driven by Compression Progress: A Simple Principle Explains Essential Aspects of Subjective Beauty, Novelty, Surprise, Interestingness, Attention, Curiosity, Creativity, Art, Science, Music, Jokes'",
            "Vovk, V., et al. (2005). 'Algorithmic Learning in a Random World'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Stasis. 'Information Bottleneck' theory (Tishby) started to form. It argued that Deep Learning works by compressing the input X into a representation T that preserves info about Y. This was a pure Information Theoretic explanation of Deep Learning.",
          "key_manifestations": [
            "Tishby, N., & Zaslavsky, N. (2015). 'Deep Learning and the Information Bottleneck Principle' (Roots in late 2000s ideas)",
            "Shwartz-Ziv, R., & Tishby, N. (2017). 'Opening the Black Box of Deep Neural Networks via Information'",
            "Schmidhuber, J. (2010). 'Formal Theory of Creativity, Fun, and Intrinsic Motivation'",
            "Hutter, M. (2010). 'Universal Artificial Intelligence'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "The 'VAE' Link (+1%). The Variational Autoencoder (Kingma/Welling 2013) maximizes the Evidence Lower Bound (ELBO). This is mathematically equivalent to minimizing the description length (Bits-Back coding). The 'Bayesian' and 'Compression' views merged in the VAE.",
          "key_manifestations": [
            "Kingma, D. P., & Welling, M. (2013). 'Auto-Encoding Variational Bayes'",
            "Hinton, G., & Van Camp, D. (1993/2011). 'Keeping Neural Networks Simple' (Bits-back coding revisited)",
            "Graves, A. (2011). 'Practical Variational Inference for Neural Networks' (MDL interpretation)",
            "Gregor, K., et al. (2016). 'Towards Conceptual Compression'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Stasis. The 'Language Modeling' task (predict next token) became the standard pre-training objective. AIT predicts that better next-token prediction = higher intelligence. This was confirmed by the GPT scaling laws. The cluster's theory was vindicated by the empirical scaling of log-loss.",
          "key_manifestations": [
            "Mikolov, T., et al. (2012). 'Subword Language Modeling with Neural Networks' (Compression focus)",
            "Sutskever, I., et al. (2011). 'Generating Text with Recurrent Neural Networks'",
            "Hutter, M. (2012). 'One Decade of Universal Artificial Intelligence'",
            "Schmidhuber, J. (2015). 'Deep Learning in Neural Networks: An Overview' (Framing DL as compression)"
          ]
        },
        "2014": {
          "salience_share": 4,
          "description": "Stasis. 'Neural Compression' became a field\u2014using DL for image compression (beating JPEG). This was engineering, not AGI theory. But it reinforced the link.",
          "key_manifestations": [
            "Toderici, G., et al. (2017). 'Full Resolution Image Compression with Recurrent Neural Networks' (2015-16 work)",
            "Ball\u00e9, J., et al. (2016). 'End-to-end Optimized Image Compression'",
            "Theis, L., et al. (2017). 'Lossy Image Compression with Compressive Autoencoders'",
            "Alemi, A. A., et al. (2016). 'Deep Variational Information Bottleneck'"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "Generalization Puzzle (+1%). Zhang et al. (2017) showed deep nets memorize noise. AIT says memorizing noise is incompressible (high complexity). This forced a rethink: The *effective* complexity of the generalized solution is low, even if the capacity is high. 'Intrinsic Dimension' studies followed.",
          "key_manifestations": [
            "Zhang, C., et al. (2017). 'Understanding Deep Learning Requires Rethinking Generalization'",
            "Arora, S., et al. (2018). 'Stronger Generalization Bounds for Deep Nets via a Compression Approach'",
            "Li, C., et al. (2018). 'Measuring the Intrinsic Dimension of Objective Landscapes'",
            "Zhou, W., et al. (2018). 'Non-vacuous Generalization Bounds at the ImageNet Scale: a PAC-Bayesian Compression Approach'"
          ]
        },
        "2018": {
          "salience_share": 6,
          "description": "The 'LLM' Confirmation (+1%). GPT-1/2 showed that simply compressing text (minimizing perplexity) yields zero-shot generalization. This is Solomonoff Induction in practice. The model learns the 'program' (world model) that generated the text to compress it. The trajectory is upward.",
          "key_manifestations": [
            "Radford, A., et al. (2019). 'Language Models are Unsupervised Multitask Learners' (GPT-2)",
            "Kaplan, J., et al. (2020). 'Scaling Laws for Neural Language Models' (Loss = Power Law of Compute)",
            "Hernandez, D., et al. (2021). 'Scaling Laws for Transfer'",
            "Sutskever, I. (2019/2023). 'Compression is General Intelligence' (Lecture themes)"
          ]
        },
        "2020": {
          "salience_share": 8,
          "description": "Chinchilla & Scaling (+2%). The scaling laws (Kaplan/Hoffmann) are essentially thermodynamic laws of compression. They relate entropy (loss) to compute and data. This formalized the AIT view for the Deep Learning era. 'Perplexity' is just 'Bits per Word.'",
          "key_manifestations": [
            "Hoffmann, J., et al. (2022). 'Training Compute-Optimal Large Language Models'",
            "Srivastava, A., et al. (2022). 'Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models'",
            "Deletang, G., et al. (2023). 'Language Modeling Is Compression'",
            "Del\u00e9tang, G., et al. (2024). 'Neural Networks and the Chomsky Hierarchy'"
          ]
        },
        "2022": {
          "salience_share": 9,
          "description": "Compression is All You Need (+1%). DeepMind showed LLMs can compress ImageNet patches better than PNG. The unification of modalities under 'Byte prediction' (MegaByte). The cluster is now the 'Physics' of AI.",
          "key_manifestations": [
            "Del\u00e9tang, G., et al. (2023). 'Language Modeling Is Compression'",
            "Yu, L., et al. (2023). 'Megabyte: Predicting Million-byte Sequences with Multiscale Transformers'",
            "Valmeekam, K., et al. (2023). 'Large Language Models as General Pattern Machines'",
            "Huang, Y., et al. (2023). 'In-Context Learning of Large Language Models Explored with Compression'"
          ]
        },
        "2024": {
          "salience_share": 9,
          "description": "Current trajectory is 'White Box' (+0%). Using AIT to understand *what* the model has learned. 'Minimum Description Length' probing. The question: 'Is the model just a lookup table (high complexity) or has it found the underlying rule (low complexity)?' Grokking is the transition from the former to the latter.",
          "key_manifestations": [
            "Liu, Z., et al. (2024). 'Physics of Language Models: Part 3.1, Knowledge Storage and Extraction'",
            "Nanda, N., et al. (2023). 'Progress Measures for Grokking via Mechanistic Interpretability'",
            "Merrill, W., et al. (2024). 'The Illusion of State in State-Space Models'",
            "Sutskever, I. (2024). 'If you squint hard enough, compression is all you need'"
          ]
        }
      }
    },
    "19_swarm_intelligence": {
      "name": "Swarm Intelligence",
      "description": "This eigencluster represents the collective behavior of decentralized, self-organized systems. Inspired by biology (ants, birds, bees), it focuses on emergent intelligence where simple local rules lead to complex global behavior. The trajectory moves from the 'Boids' and 'Ant Colony Optimization' (ACO) of the 90s\u2014which were primarily optimization heuristics\u2014to the 'Particle Swarm' peak of the 2000s. In the Deep Learning era, it faced a sharp decline as a general optimizer but found a modern reincarnation in 'Multi-Agent Reinforcement Learning' (MARL) and physical drone swarm control.",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "The cluster emerged from Artificial Life (+1%). Reynolds' 'Boids' simulation demonstrated that flocking behavior (separation, alignment, cohesion) required no leader. This was a paradigm shift from 'Top-Down' control to 'Bottom-Up' emergence. Simultaneously, Dorigo was formulating Ant Colony Optimization, translating pheromone trails into graph search algorithms.",
          "key_manifestations": [
            "Reynolds, C. W. (1987/1990). 'Flocks, Herds and Schools: A Distributed Behavioral Model'",
            "Dorigo, M. (1992). 'Optimization, Learning and Natural Algorithms' (PhD Thesis - ACO foundation)",
            "Colorni, A., Dorigo, M., & Maniezzo, V. (1991). 'Distributed Optimization by Ant Colonies'",
            "Langton, C. G. (1990). 'Computation at the Edge of Chaos' (Context of emergence)"
          ]
        },
        "1992": {
          "salience_share": 4,
          "description": "Expansion via ACO (+1%). Ant Colony Optimization proved effective for the Traveling Salesman Problem (TSP). It offered a robust alternative to Simulated Annealing. The 'Motion' was the application of biological metaphors to combinatorial optimization problems. It was 'Soft Computing' at its peak.",
          "key_manifestations": [
            "Dorigo, M., et al. (1996). 'Ant System: Optimization by a Colony of Cooperating Agents' (1992-94 work)",
            "Deneubourg, J. L., et al. (1991). 'The Dynamics of Collective Sorting Robot-like Ants and Ant-like Robots'",
            "Bonabeau, E., et al. (1994). 'Swarm Intelligence: From Natural to Artificial Systems' (Concept formation)",
            "Resnick, M. (1994). 'Turtles, Termites, and Traffic Jams' (StarLogo and decentralized thinking)"
          ]
        },
        "1994": {
          "salience_share": 5,
          "description": "Particle Swarm Optimization (PSO) Genesis (+1%). Kennedy (social psychologist) and Eberhart (engineer) developed PSO. Originally intended to simulate bird social behavior, they realized it was a powerful optimizer for non-linear functions. It was simpler than GAs (no crossover/mutation, just velocity vectors) and faster. This became the second pillar of the cluster.",
          "key_manifestations": [
            "Kennedy, J., & Eberhart, R. (1995). 'Particle Swarm Optimization' (1994 dev context)",
            "Millonas, M. M. (1994). 'Swarms, Phase Transitions, and Collective Intelligence'",
            "Gambardella, L. M., & Dorigo, M. (1995). 'Ant-Q: A Reinforcement Learning Approach to the Traveling Salesman Problem'",
            "Theraulaz, G., & Bonabeau, E. (1995). 'Coordination in Distributed Building'"
          ]
        },
        "1996": {
          "salience_share": 5,
          "description": "Stasis. The cluster was popular in 'Heuristic Optimization' journals but ignored by the rigorous ML community (who preferred SVMs). It found a niche in 'Telecommunications Routing' (AntNet), where the decentralized nature of ants matched the decentralized nature of packet switching.",
          "key_manifestations": [
            "Di Caro, G., & Dorigo, M. (1998). 'AntNet: Distributed Stigmergetic Control for Communications Networks' (1996-97 work)",
            "Bonabeau, E., et al. (1999). 'Swarm Intelligence: From Natural to Artificial Systems' (The defining book)",
            "Eberhart, R., & Kennedy, J. (1996). 'A New Optimizer using Particle Swarm Theory'",
            "Gutowitz, H. (1996). 'Cellular Automata: Theory and Experiment'"
          ]
        },
        "1998": {
          "salience_share": 4,
          "description": "Stasis. While PSO and ACO were standard tools in the engineer's toolbox, they failed to solve 'Learning' problems (generalization). They were solvers, not learners. The 'Displacing Force' was the rise of Statistical Learning Theory, which demanded bounds that Swarm methods couldn't provide.",
          "key_manifestations": [
            "Clerc, M., & Kennedy, J. (2002). 'The Particle Swarm - Explosion, Stability, and Convergence in a Multidimensional Complex Space' (1998-99 analysis)",
            "Dorigo, M., & Di Caro, G. (1999). 'Ant Colony Optimization: A New Meta-Heuristic'",
            "Parunak, H. V. D. (1997). 'Go to the Ant': Engineering Principles from Natural Multi-Agent Systems'",
            "Shi, Y., & Eberhart, R. (1998). 'A Modified Particle Swarm Optimizer'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Decline (-1%). The cluster became a 'Metaheuristic' ghetto. Hundreds of 'Nature-Inspired' algorithms (Bee Algorithm, Firefly Algorithm, Cuckoo Search) proliferated, often with little novelty over PSO/GA. This 'Metaphor mongering' damaged the scientific reputation of the field.",
          "key_manifestations": [
            "Kennedy, J., et al. (2001). 'Swarm Intelligence' (Academic consolidation)",
            "Passino, K. M. (2002). 'Biomimicry of Bacterial Foraging for Distributed Optimization and Control'",
            "Engelbrecht, A. P. (2005). 'Fundamentals of Computational Swarm Intelligence'",
            "Stutzle, T., & Hoos, H. H. (2000). 'MAX-MIN Ant System'"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis. A pivot to 'Swarm Robotics' (+0%). Instead of virtual optimization, researchers built physical swarms (Kilobots). The challenge shifted to 'Local Sensing' and 'Robustness.' This was distinct from AI optimization; it was distributed control theory.",
          "key_manifestations": [
            "Beni, G. (2004). 'From Swarm Intelligence to Swarm Robotics'",
            "Mondada, F., et al. (2004). 'SWARM-BOT: A New Distributed Robotic Concept'",
            "Sahin, E. (2005). 'Swarm Robotics: From Sources of Inspiration to Domains of Application'",
            "Dorigo, M., et al. (2004). 'Evolving Self-Organizing Behaviors for a Swarm-Bot'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Legacy/Niche. PSO was used to train small neural nets (Evolutionary ANN), but Backprop was superior. The cluster had no answer to the 'Feature Learning' problem.",
          "key_manifestations": [
            "Poli, R., et al. (2007). 'Particle Swarm Optimization: An Overview'",
            "Karaboga, D. (2005). 'An Idea Based on Honey Bee Swarm for Numerical Optimization'",
            "Dorigo, M., & Stutzle, T. (2004). 'Ant Colony Optimization'",
            "Bratton, D., & Kennedy, J. (2007). 'Defining a Standard for Particle Swarm Optimization'"
          ]
        },
        "2006": {
          "salience_share": 1,
          "description": "Marginalization (-1%). The Deep Learning era began. Gradient-based methods (SGD) scaled to millions of dimensions. Swarm methods (derivative-free) scaled to hundreds. The 'Dimensionality Curse' killed Swarm Intelligence for high-dimensional AI.",
          "key_manifestations": [
            "Banks, A., et al. (2007). 'A Review of Particle Swarm Optimization'",
            "Yang, X. S. (2008). 'Nature-Inspired Metaheuristic Algorithms'",
            "Blum, C., & Li, X. (2008). 'Swarm Intelligence in Optimization'",
            "Dorigo, M., et al. (2006). 'Ant Colony Optimization and Swarm Intelligence'"
          ]
        },
        "2008": {
          "salience_share": 1,
          "description": "Stasis. Survived in 'Industrial Engineering' (scheduling, logistics).",
          "key_manifestations": [
            "Zhang, Y., et al. (2015). 'A Comprehensive Survey on Particle Swarm Optimization Algorithm and Its Applications' (Review of the era)",
            "Chuang, L. Y., et al. (2008). 'Catfish Particle Swarm Optimization'",
            "Mirjalili, S., et al. (2014). 'Grey Wolf Optimizer' (Peak metaphor mongering)",
            "Rubenstein, M., et al. (2012). 'Kilobot: A Low Cost Scalable Robot System for Collective Behaviors'"
          ]
        },
        "2010": {
          "salience_share": 1,
          "description": "Nadir. The field was intellectually exhausted in terms of core AI. However, a seed was planted: 'Multi-Agent Reinforcement Learning' (MARL). DeepMind and OpenAI began to look at 'Swarms' not as optimization algorithms, but as *agents* learning to cooperate (e.g., in StarCraft).",
          "key_manifestations": [
            "Panait, L., & Luke, S. (2005/2010). 'Cooperative Multi-Agent Learning: The State of the Art'",
            "Busoniu, L., et al. (2008/2010). 'A Comprehensive Survey of Multiagent Reinforcement Learning'",
            "Brambilla, M., et al. (2013). 'Swarm Robotics: A Review from the Swarm Engineering Perspective'",
            "Vinyals, O., et al. (2017). 'StarCraft II: A New Challenge for Reinforcement Learning' (The new Swarm benchmark)"
          ]
        },
        "2012": {
          "salience_share": 1,
          "description": "Stasis. MARL was hard. Independent Q-Learning failed. The 'Swarm' cluster began to merge with Cluster 7 (RL).",
          "key_manifestations": [
            "Foerster, J., et al. (2016). 'Learning to Communicate with Deep Multi-Agent Reinforcement Learning' (2015 work)",
            "Sukhbaatar, S., et al. (2016). 'Learning Multiagent Communication with Backpropagation'",
            "Lowe, R., et al. (2017). 'Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments'",
            "Gupta, J. K., et al. (2017). 'Cooperative Multi-Agent Control Using Deep Reinforcement Learning'"
          ]
        },
        "2014": {
          "salience_share": 1,
          "description": "Commercial Drone Swarms (+0%). Intel and Verity Studios demonstrated massive drone light shows. This was 'Swarm Intelligence' in product form, though often centralized. It kept the visual meme alive.",
          "key_manifestations": [
            "Preiss, J. A., et al. (2017). 'Crazyswarm: A Large Nano-Quadcopter Swarm'",
            "V\u00e1s\u00e1rhelyi, G., et al. (2018). 'Optimized Flocking of Autonomous Drones in Confined Environments'",
            "Chung, S. J., et al. (2018). 'Survey on Aerial Swarm Robotics'",
            "Kushleyev, A., et al. (2013). 'Towards a Swarm of Agile Micro Quadrotors'"
          ]
        },
        "2016": {
          "salience_share": 2,
          "description": "MARL Renaissance (+1%). AlphaStar (DeepMind) used a 'League' of agents. This was a form of co-evolutionary swarm. The 'Population Based Training' (PBT) used to train it was essentially a Genetic Algorithm on a swarm of agents. The clusters (Evolution + Swarm + RL) merged.",
          "key_manifestations": [
            "Jaderberg, M., et al. (2017). 'Population Based Training of Neural Networks'",
            "Vinyals, O., et al. (2019). 'Grandmaster Level in StarCraft II using Multi-Agent Reinforcement Learning'",
            "Rashid, T., et al. (2018). 'QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning'",
            "Huttenrauch, M., et al. (2019). 'Deep Reinforcement Learning for Swarm Systems'"
          ]
        },
        "2018": {
          "salience_share": 2,
          "description": "Stasis. 'Swarm' concepts used in 'Model Merging.' Federated Learning (McMahan) can be seen as a swarm of devices training a shared brain. This is 'Data Swarm Intelligence.'",
          "key_manifestations": [
            "McMahan, B., et al. (2017). 'Communication-Efficient Learning of Deep Networks from Decentralized Data'",
            "Kone\u010dn\u00fd, J., et al. (2016). 'Federated Optimization: Distributed Machine Learning for On-Device Intelligence'",
            "Lalrathsang, et al. (2019). 'Swarm Intelligence in Federated Learning'",
            "Parisi, G. I., et al. (2019). 'Continual Lifelong Learning with Neural Networks: A Review'"
          ]
        },
        "2020": {
          "salience_share": 2,
          "description": "Stasis. 'Collaborative Agents.' Using LLMs as agents in a swarm (Camel, AutoGen). If you put 10 GPT-4s in a room, do they exhibit swarm intelligence? Early results suggest 'Social Dynamics' emerge.",
          "key_manifestations": [
            "Park, J. S., et al. (2023). 'Generative Agents: Interactive Simulacra of Human Behavior'",
            "Li, G., et al. (2023). 'CAMEL: Communicative Agents for 'Mind' Exploration of Large Scale Language Model Society'",
            "Wu, Q., et al. (2023). 'Autogen: Enabling Next-Gen LLM Applications'",
            "Xi, Z., et al. (2023). 'The Rise and Potential of Large Language Model Based Agents: A Survey'"
          ]
        },
        "2022": {
          "salience_share": 3,
          "description": "LLM Swarms (+1%). 'Mixture of Experts' (MoE) is an architectural swarm. 'ChatDev' showed a swarm of LLMs acting as CEO, CTO, Coder. The variance is rising because 'Agentic' AI implies multiplicity.",
          "key_manifestations": [
            "Qian, C., et al. (2023). 'Communicative Agents for Software Development' (ChatDev)",
            "Du, Y., et al. (2023). 'Improving Factuality and Reasoning in Language Models through Multiagent Debate'",
            "Liang, T., et al. (2023). 'Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate'",
            "OpenAI (2024). 'Swarm' (Experimental framework for multi-agent orchestration)"
          ]
        },
        "2024": {
          "salience_share": 3,
          "description": "Current trajectory is 'Model Swarms' (+0%). Merging weights from different fine-tunes (Model Soups) or evolving a population of prompts (Cluster 10). The 'Swarm' is now a swarm of weights/prompts, not insects. The 'Displacing Force' is the cost of inference; running 100 agents is expensive.",
          "key_manifestations": [
            "Wortsman, M., et al. (2022/2024). 'Model Soups: Averaging Weights of Multiple Fine-Tuned Models Improves Accuracy Without Increasing Inference Time'",
            "Lu, C., et al. (2024). 'Model Swarms: Collaborative Search to Adapt LLM Experts'",
            "Sakana AI (2024). 'Evolutionary Model Merge'",
            "Zhuge, M., et al. (2024). 'Mindstorms: The Landscape of Agentic AI'"
          ]
        }
      }
    },
    "20_automated_reasoning_proving": {
      "name": "Automated Reasoning & Proving",
      "description": "This eigencluster represents the pursuit of 'Truth' via formal methods. Unlike the heuristic reasoning of LLMs or the probabilistic reasoning of Bayesian nets, this cluster deals in proofs, verification, and satisfiability (SAT). It encompasses Interactive Theorem Provers (Coq, Lean, Isabelle) and Automated Theorem Provers (E, Vampire). Its trajectory is steady and industrial\u2014powering chip verification\u2014until a recent explosive intersection with Deep Learning (AlphaProof) created the 'Neuro-Symbolic Math' frontier.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Niche/Foundation. The field was split between 'Automated' (McCune's Otter) and 'Interactive' (Coq, Isabelle). The milestone was the 'Robbins Conjecture,' which stood unsolved for 60 years. The 'Force of Motion' was the increasing power of hardware allowing brute-force search for proofs.",
          "key_manifestations": [
            "McCune, W. (1990). 'OTTER 2.0 Users Guide'",
            "Paulson, L. C. (1994). 'Isabelle: A Generic Theorem Prover' (1990 context)",
            "Coquand, T., & Huet, G. (1988/1990). 'The Calculus of Constructions' (Coq foundation)",
            "Boyer, R. S., & Moore, J. S. (1988/1990). 'A Computational Logic Handbook' (Nqthm)"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. 'Model Checking' (Clarke/Emerson) began to gain industrial traction for verifying circuits. This was 'Finite State' reasoning, distinct from 'First Order Logic.' It was useful, but viewed as 'Verification' not 'AI.'",
          "key_manifestations": [
            "Clarke, E. M., et al. (1992). 'Model Checking and Abstraction'",
            "McMillan, K. L. (1993). 'Symbolic Model Checking' (BDDs revolutionizing the scale)",
            "Owre, S., et al. (1992). 'PVS: A Prototype Verification System'",
            "Gordon, M. J. C., & Melham, T. F. (1993). 'Introduction to HOL: A Theorem Proving Environment for Higher Order Logic'"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "The 'Pentium Bug' Catalyst (+0%). The Intel FDIV bug cost $475M. This massive failure forced the hardware industry to adopt Formal Verification (Cluster 20) over random testing. Suddenly, there was money in theorem proving. The 'Motion' was from academia to industry (Intel/AMD).",
          "key_manifestations": [
            "Russinoff, D. M. (1998). 'A Mechanically Checked Proof of IEEE Compliance of the Floating Point Multiplication Algorithm of the AMD-K7 Processor' (Direct result of 1994 events)",
            "Moore, J. S., et al. (1998). 'ACL2: An Industrial Strength Version of Nqthm'",
            "Harrison, J. (1996). 'Theorem Proving with the Real Numbers' (1994 work)",
            "Kaufmann, M., & Moore, J. S. (1994). 'Design Goals for ACL2'"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "The EQP Triumph (+1%). William McCune used EQP (a specialized prover) to prove the Robbins Conjecture. This was the first time AI solved a major open mathematical problem that humans couldn't. It was a 'Deep Blue' moment for math, though less publicized.",
          "key_manifestations": [
            "McCune, W. (1997). 'Solution of the Robbins Problem'",
            "New York Times (1996). 'Computer Math Proof Shows Reasoning Power' (Public recognition)",
            "Schumann, J. (1997). 'Automated Theorem Proving in Software Engineering'",
            "Harrison, J. (1997). 'Verifying the Accuracy of Floating-Point Algorithms'"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Stasis. The 'SAT Solver' revolution was brewing (Cluster 4), which would eventually power SMT solvers. In ITP, the 'Four Color Theorem' formalization began in Coq (Gonthier). The goal shifted from 'Finding' proofs to 'Checking' human proofs.",
          "key_manifestations": [
            "Gonthier, G. (2008). 'Formal Proof--The Four-Color Theorem' (Work started late 90s)",
            "Nipkow, T., et al. (2002). 'Isabelle/HOL: A Proof Assistant for Higher-Order Logic' (Standardization)",
            "Ganzinger, H., et al. (1999). 'SPASS: First-Order Theorem Proving'",
            "Riazanov, A., & Voronkov, A. (2002). 'The Design and Implementation of VAMPIRE' (Work active 1998)"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Stasis. 'Vampire' dominated the CASC competitions. The algorithms (Superposition Calculus) were refined. But the field was insular. The 'Semantic Web' (Cluster 4) tried to use Description Logics, but ATPs were too slow for the web.",
          "key_manifestations": [
            "Riazanov, A., & Voronkov, A. (2001). 'Vampire 1.1'",
            "Schulz, S. (2002). 'E - A Brainiac Theorem Prover'",
            "Moskewicz, M. W., et al. (2001). 'Chaff: Engineering an Efficient SAT Solver' (The SAT breakthrough)",
            "Wiedijk, F. (2003). 'Comparing Mathematical Provers'"
          ]
        },
        "2002": {
          "salience_share": 1,
          "description": "The 'Flyspeck' Project (+0%). Thomas Hales launched Flyspeck to formally verify his proof of the Kepler Conjecture (stacking oranges). The human reviewers were 99% sure it was right, but couldn't check the code. This marked the era of 'Big Proofs.'",
          "key_manifestations": [
            "Hales, T. C. (2005). 'Introduction to the Flyspeck Project' (2003 launch)",
            "Hales, T. C. (2005). 'A Proof of the Kepler Conjecture'",
            "Urban, J. (2004). 'MPTP - Mixing PEM with TP' (Early ML for Proving)",
            "De Moura, L., et al. (2004). 'CVC Lite: A New Implementation of the Cooperating Validity Checker'"
          ]
        },
        "2004": {
          "salience_share": 1,
          "description": "SMT Solvers Rise (+0%). Satisfiability Modulo Theories (SMT) combined SAT solvers with domain theories (integers, arrays). This bridged the gap between raw logic and software verification. Microsoft Research invested heavily (Z3).",
          "key_manifestations": [
            "De Moura, L., & Bj\u00f8rner, N. (2008). 'Z3: An Efficient SMT Solver' (Development 2006, roots 2004)",
            "Barrett, C., et al. (2005). 'SMT-LIB: A Common Language and Library for SMT Solvers'",
            "Leroy, X. (2006). 'Formal Certification of a Compiler Back-end or: Programming a Compiler with a Proof Assistant' (CompCert - 2004/5 work)",
            "Gonthier, G. (2005). 'A Computer-Checked Proof of the Four Colour Theorem'"
          ]
        },
        "2006": {
          "salience_share": 1,
          "description": "The 'CompCert' Milestone (+0%). Xavier Leroy verified a C compiler (CompCert) in Coq. This proved that you could write bug-free system software. It was a triumph for Coq, but remained 'High Effort' (PhD years per module).",
          "key_manifestations": [
            "Leroy, X. (2009). 'Formal Verification of a Realistic Compiler' (CompCert)",
            "Klein, G., et al. (2009). 'seL4: Formal Verification of an OS Kernel' (Project started 2005/6)",
            "Urban, J. (2006). 'MaLARea: A Metasystem for Automated Reasoning in Large Theories' (Early ML integration)",
            "Sutcliffe, G. (2009). 'The CADE ATP System Competition - CASC'"
          ]
        },
        "2008": {
          "salience_share": 1,
          "description": "Stasis. 'seL4' verified an OS kernel. The 'Displacing Force' was the extreme cost. Microsoft's 'Singularity' OS project flirted with verification but failed to productize. The cluster remained 'Military/Industrial Grade' only.",
          "key_manifestations": [
            "Klein, G., et al. (2010). 'seL4: Formal Verification of an OS Kernel'",
            "Hales, T. C., et al. (2010). 'Formal Proof'",
            "Blanchette, J. C., et al. (2011). 'Sledgehammer: Judgment Day' (Connecting Isabelle to ATPs)",
            "Harrison, J. (2009). 'Handbook of Practical Logic and Automated Reasoning'"
          ]
        },
        "2010": {
          "salience_share": 1,
          "description": "The 'Homotopy Type Theory' (HoTT) stir (+0%). Voevodsky proposed Univalent Foundations. It linked topology to type theory. A massive intellectual excitement for mathematicians, creating a new 'Foundation of Math' compatible with computers. 'Lean' was being born in the background (Leonardo de Moura).",
          "key_manifestations": [
            "Voevodsky, V. (2010). 'Univalent Foundations of Mathematics'",
            "The Univalent Foundations Program (2013). 'Homotopy Type Theory: Univalent Foundations of Mathematics'",
            "De Moura, L. (2013). 'The Lean Theorem Prover' (Project start)",
            "Gonthier, G., et al. (2013). 'A Machine-Checked Proof of the Odd Order Theorem' (Feit-Thompson)"
          ]
        },
        "2012": {
          "salience_share": 1,
          "description": "Premise Selection (+0%). Deep Learning touched the field via 'Premise Selection' (Alemi/Chollet/Urban). Can a neural net guess *which* theorems are useful to prove the current one? This was the first 'Neuro-Symbolic' efficiency gain. It saved the ATP from drowning in the library.",
          "key_manifestations": [
            "Urban, J., et al. (2013). 'MaLARea SG1- Machine Learner for Automated Reasoning with Theories'",
            "Alemi, A. A., et al. (2016). 'DeepMath - Deep Sequence Models for Premise Selection' (2015/16 work)",
            "Kaliszyk, C., & Urban, J. (2015). 'MizAR 40 for Mizar 40'",
            "Hales, T. C., et al. (2015). 'A Formal Proof of the Kepler Conjecture' (Flyspeck Complete)"
          ]
        },
        "2014": {
          "salience_share": 1,
          "description": "Lean Rise (+0%). Microsoft released Lean. It was faster and more 'coder friendly' than Coq. A community began to form around 'mathlib'\u2014a unified library of mathematics. The 'Motion' was the democratization of formal math.",
          "key_manifestations": [
            "De Moura, L., et al. (2015). 'The Lean Theorem Prover'",
            "Avigad, J., et al. (2015). 'Mathematics in Lean'",
            "Loos, S., et al. (2017). 'Deep Network Guided Proof Search'",
            "Bansal, K., et al. (2019). 'HOList: An Environment for Machine Learning of Higher Order Logic Theorem Proving' (2017 work)"
          ]
        },
        "2016": {
          "salience_share": 2,
          "description": "DeepMath (+1%). Google trained standard Transformers on the Mizar library. They showed that Neural Networks could generate proofs (heuristically). The barrier was the 'Infinite Action Space' of proof steps. RL was identified as the solution.",
          "key_manifestations": [
            "Alemi, A. A., et al. (2016). 'DeepMath - Deep Sequence Models for Premise Selection'",
            "Whalen, D. (2016). 'Holophrasm: A Neural-Network Based Theorem Prover'",
            "Kaliszyk, C., et al. (2018). 'Reinforcement Learning of Theorem Proving'",
            "Rockt\u00e4schel, T., & Riedel, S. (2017). 'End-to-End Differentiable Proving'"
          ]
        },
        "2018": {
          "salience_share": 2,
          "description": "Lean Community Explosion (+0%). Kevin Buzzard launched the 'Xena Project' to teach undergrads Lean. The 'Liquid Tensor Experiment' (Scholze) challenged the community to verify a cutting-edge result. They did. This validated ITPs to the elite math community.",
          "key_manifestations": [
            "Buzzard, K., et al. (2020). 'The Future of Mathematics?' (2018 lectures)",
            "Scholze, P. (2020). 'Liquid Tensor Experiment' (Challenge issued)",
            "Polu, S., & Sutskever, I. (2020). 'Generative Language Modeling for Automated Theorem Proving'",
            "Yang, K., & Deng, J. (2019). 'Learning to Prove Theorems via Interacting with Proof Assistants'"
          ]
        },
        "2020": {
          "salience_share": 3,
          "description": "GPT-f (+1%). OpenAI (Polu/Sutskever) showed that a GPT model trained on math data could suggest tactics to a prover. This 'Neural Theorem Prover' approach beat human heuristics. The cluster began to rapidly ascend as the 'Benchmark for Reasoning' (MATH dataset).",
          "key_manifestations": [
            "Polu, S., & Sutskever, I. (2020). 'Generative Language Modeling for Automated Theorem Proving'",
            "Han, J. M., et al. (2021). 'Proof Artifact Co-training for Theorem Proving with Language Models'",
            "Hendrycks, D., et al. (2021). 'Measuring Mathematical Problem Solving with the MATH Dataset'",
            "Scholze, P., & Commelin, J. (2021). 'Liquid Tensor Experiment' (Completion)"
          ]
        },
        "2022": {
          "salience_share": 4,
          "description": "Minerva & Autoformalization (+1%). Google's Minerva (LLM) solved math problems by 'thinking' (Chain of Thought), but without verification. Then 'Autoformalization' (Wu et al.) appeared: use the LLM to translate natural language math into Lean code, then verify it. This closed the loop.",
          "key_manifestations": [
            "Lewkowycz, A., et al. (2022). 'Solving Quantitative Reasoning Problems with Language Models' (Minerva)",
            "Wu, Y., et al. (2022). 'Autoformalization with Large Language Models'",
            "Jiang, A. Q., et al. (2022). 'Thor: Wielding Hammers to Integrate Language Models and Automated Theorem Provers'",
            "First, E., et al. (2023). 'Baldur: Whole-Proof Generation and Repair with Large Language Models'"
          ]
        },
        "2024": {
          "salience_share": 6,
          "description": "AlphaGeometry & AlphaProof (+2%). DeepMind cracked the IMO (International Math Olympiad). AlphaGeometry used a Neuro-Symbolic approach (LLM for creative construction, Symbolic engine for deduction). AlphaProof (2024) used RL on Lean proofs to achieve Silver/Gold medal performance. The cluster is now the 'Gold Standard' for Artificial General Intelligence reasoning capabilities.",
          "key_manifestations": [
            "Trinh, T. H., et al. (2024). 'Solving Olympiad Geometry without Human Demonstrations' (AlphaGeometry)",
            "DeepMind (2024). 'AI Solves International Mathematical Olympiad Problems' (AlphaProof)",
            "Yang, K., et al. (2024). 'LeanDojo: Theorem Proving with Retrieval-Augmented Language Models'",
            "Castellano, R., et al. (2024). 'A Comprehensive Study of Knowledge Editing for Large Language Models' (Formal verification context)"
          ]
        }
      }
    },
    "21_meta_learning_adaptation": {
      "name": "Meta-Learning & Adaptation",
      "description": "This eigencluster represents the 'Learning to Learn' paradigm. Unlike standard learning (optimizing parameters $\\theta$ for a specific task), this cluster seeks to optimize the learning algorithm itself (or the initialization) to adapt rapidly to new tasks. Its trajectory bridges the 'Inductive Transfer' ideas of the 90s (Thrun), the 'Bayesian Transfer' of the 2000s, the gradient-based meta-learning (MAML) of the 2010s, and ultimately merges with the 'In-Context Learning' of Foundation Models in the 2020s, where 'adaptation' happens via the prompt rather than weight updates.",
      "trajectory": {
        "1990": {
          "salience_share": 2,
          "description": "The cluster was in its theoretical infancy. The dominant paradigm was 'Tabula Rasa' learning\u2014starting from random weights every time. However, psychologists and early connectionists (Hinton/Plaut) argued that humans don't learn from scratch. The concept of 'Fast Weights' (updating synapses dynamically) was proposed as a mechanism for short-term adaptation.",
          "key_manifestations": [
            "Hinton, G. E., & Plaut, D. C. (1987/1990). 'Using Fast Weights to Deblur Old Memories'",
            "Schmidhuber, J. (1987/1990). 'Evolutionary Principles in Self-Referential Learning' (Genetic Meta-Learning)",
            "Elman, J. L. (1990). 'Finding Structure in Time' (Implicit memory as adaptation)",
            "Sutton, R. S. (1992). 'Adapting Bias by Gradient Descent: An Incremental Version of Delta-Bar-Delta' (1990 context)"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "The 'Lifelong Learning' formulation (+1%). Sebastian Thrun and Pratt formalized 'Transfer Learning.' The idea: networks trained on Task A should learn Task B faster. This challenged the i.i.d. assumption. The 'Motion' was trying to reuse the hidden layer representations across related tasks (Multitask Learning).",
          "key_manifestations": [
            "Thrun, S., & Pratt, L. (1998). 'Learning to Learn' (Book covering 1992-1996 era)",
            "Caruana, R. (1993). 'Multitask Learning: A Knowledge-Based Source of Inductive Bias'",
            "Pratt, L. Y. (1993). 'Discriminability-Based Transfer between Neural Networks'",
            "Schmidhuber, J. (1992). 'Learning to Control Fast-Weight Memories: An Alternative to Dynamic Recurrent Networks'"
          ]
        },
        "1994": {
          "salience_share": 4,
          "description": "Multitask Learning (MTL) Peak (+1%). Rich Caruana's work demonstrated that training a neural net on parallel tasks (e.g., predicting pneumonia risk AND mortality) improved performance on both. The 'Inductive Bias' of related tasks acted as a regularizer. This was the first empirical proof that 'Generalization' improves with 'Breadth.'",
          "key_manifestations": [
            "Caruana, R. (1997). 'Multitask Learning' (Thesis/1994 work)",
            "Baxter, J. (1995). 'Learning Internal Representations' (Theory of multitask)",
            "Thrun, S. (1996). 'Is Learning The n-th Thing Any Easier Than The First?' (1994-95 context)",
            "Bengio, Y., et al. (1995). 'On the Optimization of a Synaptic Learning Rule'"
          ]
        },
        "1996": {
          "salience_share": 3,
          "description": "Stasis/Decline (-1%). As SVMs (Cluster 2) took over, Transfer Learning became difficult. SVMs are shallow; there's no 'hidden layer' to share. You can share Kernels, but it's mathematically awkward. The cluster retreated to hierarchical Bayesian models where 'priors' could be shared.",
          "key_manifestations": [
            "Thrun, S. (1998). 'Lifelong Learning Algorithms'",
            "Heskes, T. (1998). 'Solving a Huge Number of Learning Problems: An Empirical Study'",
            "Caruana, R. (1997). 'Multitask Learning' (Journal publication)",
            "Baxter, J. (1997). 'A Bayesian/Information Theoretic Model of Learning to Learn'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Stasis. 'Ensemble Methods' (Boosting/Bagging) were the rage. They combined models trained on the *same* task, not different tasks. The idea of a 'Generalist' agent was replaced by 'Specialist' ensembles. Meta-learning survived in 'Evolutionary' circles (evolving the learning rule).",
          "key_manifestations": [
            "Naik, D. K., & Mammone, R. J. (1992/1998). 'Meta-Neural Networks that Learn by Learning'",
            "Hochreiter, S., et al. (2001). 'Learning to Learn Using Gradient Descent' (1999 work)",
            "Silver, D. L., & Mercer, R. E. (2002). 'The Task Rehearsal Method of Life-Long Learning' (Roots in late 90s)",
            "Olderog, E. (Legacy). 'Meta-learning in Logic'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Bayesian Priors (+1%). In the PGM era (Cluster 3), Meta-Learning meant 'Learning the Prior.' If you learn the hyperparameters of the prior distribution from 10 tasks, the 11th task can be learned with very few samples. This was the mathematical formalization of 'Few-Shot Learning.'",
          "key_manifestations": [
            "Tenenbaum, J. B. (1999/2000). 'Bayesian Modeling of Human Concept Learning'",
            "Fei-Fei, L., et al. (2003). 'A Bayesian Approach to Unsupervised One-Shot Learning of Object Categories' (Early 2000s roots)",
            "Bakker, B., & Heskes, T. (2003). 'Task Clustering and Gating for Bayesian Multitask Learning'",
            "Lawrence, N. D., & Platt, J. C. (2004). 'Learning to Learn with the Informative Vector Machine'"
          ]
        },
        "2002": {
          "salience_share": 4,
          "description": "One-Shot Learning (+1%). Fei-Fei Li and colleagues pushed the 'One-Shot' benchmark. Humans can learn a gecko from one picture; SVMs need 100. They used 'Constellation Models' (PGMs) to transfer part-models across categories. This kept the dream of 'Human-like data efficiency' alive.",
          "key_manifestations": [
            "Fei-Fei, L., et al. (2006). 'One-Shot Learning of Object Categories' (2003-2004 work)",
            "Miller, E. G., et al. (2000). 'Learning from One Example through Shared Densities on Transforms'",
            "Tommasi, T., et al. (2010). 'Safety in Numbers: Learning Categories from Few Examples with Multi Model Knowledge Transfer' (Reviewing the 2000s)",
            "Ando, R. K., & Zhang, T. (2005). 'A Framework for Learning Predictive Structures from Multiple Tasks'"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Domain Adaptation (+1%). The web is messy. A classifier trained on Wall Street Journal (clean) fails on Yahoo Blogs (noisy). 'Domain Adaptation' became a critical industrial need. Blitzer et al. showed how to align feature spaces (Structural Correspondence Learning). The 'Motion' was fixing the 'Distribution Shift.'",
          "key_manifestations": [
            "Blitzer, J., et al. (2006). 'Domain Adaptation with Structural Correspondence Learning'",
            "Daum\u00e9 III, H. (2007). 'Frustratingly Easy Domain Adaptation'",
            "Ben-David, S., et al. (2007). 'Analysis of Representations for Domain Adaptation'",
            "Jiang, J., & Zhai, C. (2007). 'Instance Weighting for Domain Adaptation'"
          ]
        },
        "2006": {
          "salience_share": 5,
          "description": "Deep Transfer (+0%). Hinton's DBNs showed that unsupervised pre-training helped supervised tasks. This was 'Implicit' transfer. You transfer the structure of $P(X)$ to help learn $P(Y|X)$. This became the default way to do Deep Learning (Pre-train then Fine-tune), though it wasn't called Meta-Learning yet.",
          "key_manifestations": [
            "Raina, R., et al. (2007). 'Self-taught Learning: Transfer Learning from Unlabeled Data'",
            "Bengio, Y. (2012). 'Deep Learning of Representations for Unsupervised and Transfer Learning' (Retrospective on 2006-2010)",
            "Pan, S. J., & Yang, Q. (2010). 'A Survey on Transfer Learning' (Codifying the 2000s)",
            "Glorot, X., et al. (2011). 'Domain Adaptation for Large-Scale Sentiment Classification'"
          ]
        },
        "2008": {
          "salience_share": 4,
          "description": "Stasis. The 'ImageNet' race (Cluster 1) led to 'Feature Transfer.' People realized that the features learned on ImageNet were generic (Gabor filters). You could just chop off the last layer and retrain. This was 'Transfer Learning' by laziness, not algorithmic meta-learning.",
          "key_manifestations": [
            "Yosinski, J., et al. (2014). 'How Transferable are Features in Deep Neural Networks?' (Analyzing the late 2000s phenomenon)",
            "Donahue, J., et al. (2014). 'DeCAF: A Deep Convolutional Activation Feature for Generic Visual Recognition'",
            "Oquab, M., et al. (2014). 'Learning and Transferring Mid-Level Image Representations'",
            "Razavian, A. S., et al. (2014). 'CNN Features off-the-shelf: an Astounding Baseline'"
          ]
        },
        "2010": {
          "salience_share": 5,
          "description": "Hyperparameter Optimization (+1%). 'Bayesian Optimization' (Snoek) became the standard way to tune Deep Nets. This is a form of Meta-Learning: learning a model of the performance surface to pick the next learning rate. It mechanized the 'Graduate Student Descent.'",
          "key_manifestations": [
            "Snoek, J., et al. (2012). 'Practical Bayesian Optimization of Machine Learning Algorithms'",
            "Bergstra, J., & Bengio, Y. (2012). 'Random Search for Hyper-Parameter Optimization'",
            "Hutter, F., et al. (2011). 'Sequential Model-Based Optimization for General Algorithm Configuration'",
            "Thornton, C., et al. (2013). 'Auto-WEKA: Combined Selection and Hyperparameter Optimization'"
          ]
        },
        "2012": {
          "salience_share": 6,
          "description": "Memory Augmented NN (+1%). Graves (Neural Turing Machine) and Weston (Memory Networks) added explicit memory to NNs. This allowed 'One-Shot' storage. If you tell the network 'Sam has a red hat,' it stores it in a matrix. Later it can retrieve it. Adaptation happens by writing to memory, not changing weights.",
          "key_manifestations": [
            "Graves, A., et al. (2014). 'Neural Turing Machines'",
            "Weston, J., et al. (2015). 'Memory Networks'",
            "Sukhbaatar, S., et al. (2015). 'End-To-End Memory Networks'",
            "Santoro, A., et al. (2016). 'Meta-Learning with Memory-Augmented Neural Networks' (The synthesis)"
          ]
        },
        "2014": {
          "salience_share": 8,
          "description": "The 'Learning to Learn' Renaissance (+2%). Researchers (Bengio, Schmidhuber, DeepMind) returned to the idea of replacing SGD with an RNN. The RNN observes the gradients and outputs the weight updates. It learns an optimizer. This was 'Optimization as a Policy.'",
          "key_manifestations": [
            "Andrychowicz, M., et al. (2016). 'Learning to Learn by Gradient Descent by Gradient Descent' (2015 work)",
            "Vinyals, O., et al. (2016). 'Matching Networks for One Shot Learning'",
            "Ravi, S., & Larochelle, H. (2017). 'Optimization as a Model for Few-Shot Learning'",
            "Lake, B. M., et al. (2015). 'Human-level Concept Learning through Probabilistic Program Induction'"
          ]
        },
        "2016": {
          "salience_share": 12,
          "description": "MAML Explosion (+4%). Chelsea Finn introduced 'Model-Agnostic Meta-Learning' (MAML). Instead of learning a new update rule, just learn an initialization $\\theta$ such that one step of gradient descent solves the task. It was elegant, compatible with any architecture, and mathematically clean (second-order derivatives). The cluster became a major CVPR/NeurIPS category.",
          "key_manifestations": [
            "Finn, C., et al. (2017). 'Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks'",
            "Snell, J., et al. (2017). 'Prototypical Networks for Few-shot Learning'",
            "Nichol, A., et al. (2018). 'On First-Order Meta-Learning Algorithms' (Reptile)",
            "Sung, F., et al. (2018). 'Learning to Compare: Relation Network for Few-Shot Learning'"
          ]
        },
        "2018": {
          "salience_share": 15,
          "description": "NLP Meta-Learning (+3%). GPT-2 showed 'Zero-Shot' transfer. BERT showed 'Fine-Tuning' transfer. The community realized that massive pre-training was the ultimate meta-learner. MAML (inner loop optimization) couldn't scale to Transformers. The 'Meta-Learning' term began to be subsumed by 'In-Context Learning.'",
          "key_manifestations": [
            "Radford, A., et al. (2019). 'Language Models are Unsupervised Multitask Learners'",
            "Brown, T. B., et al. (2020). 'Language Models are Few-Shot Learners'",
            "Houlsby, N., et al. (2019). 'Parameter-Efficient Transfer Learning for NLP' (Adapters)",
            "Yin, W., et al. (2020). 'Meta-learning for Few-shot NMT Adaptation'"
          ]
        },
        "2020": {
          "salience_share": 18,
          "description": "In-Context Learning Dominance (+3%). GPT-3 proved you don't need gradient updates to adapt. You just provide examples in the prompt. The 'Inner Loop' of meta-learning is simulated by the attention mechanism during inference. This was a phase transition: Adaptation became 'Activation-based' rather than 'Weight-based.'",
          "key_manifestations": [
            "Brown, T. B., et al. (2020). 'Language Models are Few-Shot Learners'",
            "Min, S., et al. (2022). 'Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?'",
            "Wei, J., et al. (2022). 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models'",
            "Xie, S. M., et al. (2022). 'An Explanation of In-Context Learning as Implicit Bayesian Inference'"
          ]
        },
        "2022": {
          "salience_share": 15,
          "description": "PEFT & LoRA (-3% to Meta, + to Optimization). While In-Context is great, sometimes you *do* need to update weights. 'Parameter-Efficient Fine-Tuning' (PEFT) like LoRA emerged. It's a form of meta-learning where you learn where to inject rank-updates. The cluster identity is blurring into 'LLM Engineering.'",
          "key_manifestations": [
            "Hu, E. J., et al. (2022). 'LoRA: Low-Rank Adaptation of Large Language Models'",
            "Lester, B., et al. (2021). 'The Power of Scale for Parameter-Efficient Prompt Tuning'",
            "Liu, H., et al. (2022). 'Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning'",
            "Dettmers, T., et al. (2023). 'QLoRA: Efficient Finetuning of Quantized LLMs'"
          ]
        },
        "2024": {
          "salience_share": 12,
          "description": "Test-Time Training (TTT) (+0%). A new direction: update the model *during* inference on the test sample. 'Test-Time Training' layers. Also, 'Meta-Prompting'\u2014asking the LLM to rewrite its own prompt to solve the task. The 'Adaptation' is now recursive.",
          "key_manifestations": [
            "Sun, Y., et al. (2024). 'Test-Time Training with Self-Supervision for Generalization under Distribution Shifts'",
            "Fernando, C., et al. (2023). 'Promptbreeder: Self-Referential Self-Improvement Via Prompt Evolution'",
            "Shinn, N., et al. (2023). 'Reflexion: Language Agents with Verbal Reinforcement Learning'",
            "Anthropic (2024). 'Contextualizing/System Prompts' (Meta-learning via system instructions)"
          ]
        }
      }
    },
    "22_classic_feature_engineering": {
      "name": "Classic Feature Engineering",
      "description": "This eigencluster represents the 'Art of Vision' (and Audio) prior to Deep Learning. It is the decomposition of signals into hand-crafted invariants: edges, corners, blobs, histograms of gradients (HOG), and scale-invariant feature transforms (SIFT). For two decades, progress in AI was defined by smarter researchers designing smarter features, which were then fed to simple classifiers (SVMs). Its trajectory is a massive plateau of dominance followed by a violent collapse after 2012, serving now as a lesson in the 'Bitter Lesson'\u2014that hand-crafting features eventually loses to learning them.",
      "trajectory": {
        "1990": {
          "salience_share": 10,
          "description": "The 'Edge Detection' Era (+2%). Canny Edge Detector (1986) was the state of the art. Vision was about finding boundaries. The Harris Corner Detector (1988) provided keypoints. The philosophy was 'Marr's Vision': reconstruct the 3D geometry from 2D lines. It was geometric and fragile.",
          "key_manifestations": [
            "Canny, J. (1986/1990). 'A Computational Approach to Edge Detection'",
            "Harris, C., & Stephens, M. (1988/1990). 'A Combined Corner and Edge Detector'",
            "Perona, P., & Malik, J. (1990). 'Scale-Space and Edge Detection Using Anisotropic Diffusion'",
            "Marr, D. (1982/1990). 'Vision' (The foundational text still dominating)"
          ]
        },
        "1992": {
          "salience_share": 12,
          "description": "Scale Space (+2%). Lindeberg formalized 'Scale-Space Theory.' You must look at an image at multiple resolutions to understand it. This was the mathematical foundation for SIFT. The 'Motion' was moving from local pixels to multi-scale structures.",
          "key_manifestations": [
            "Lindeberg, T. (1994). 'Scale-Space Theory in Computer Vision' (1992-93 work)",
            "Murase, H., & Nayar, S. K. (1995). 'Visual Learning and Recognition of 3-D Objects from Appearance' (PCA/Eigenfaces)",
            "Turk, M., & Pentland, A. (1991). 'Eigenfaces for Recognition'",
            "Tomasi, C., & Kanade, T. (1991). 'Detection and Tracking of Point Features'"
          ]
        },
        "1994": {
          "salience_share": 15,
          "description": "Eigenfaces & Appearance (+3%). 'Eigenfaces' (Turk/Pentland) showed that simple linear projection (PCA) could recognize faces. This was 'Holistic' (whole image) vs 'Local' (edges). It worked surprisingly well for aligned faces. It started the 'Biometrics' industry.",
          "key_manifestations": [
            "Belhumeur, P. N., et al. (1997). 'Eigenfaces vs. Fisherfaces' (1996 work refining 1994 concepts)",
            "Nene, S. A., et al. (1996). 'Columbia Object Image Library (COIL-20)'",
            "Schmid, C., & Mohr, R. (1997). 'Local Grayvalue Invariants for Image Retrieval' (Pre-SIFT)",
            "Adelson, E. H., & Bergen, J. R. (1991/1994). 'The Plenoptic Function and the Elements of Early Vision'"
          ]
        },
        "1996": {
          "salience_share": 18,
          "description": "Gabor Filters & Wavelets (+3%). Inspired by Cluster 11 (Sparse Coding), vision researchers built filter banks of Gabor wavelets. This mimicked the V1 cortex. 'Texture' became analyzable. The focus shifted from 'Geometry' (edges) to 'Texture' (filter responses).",
          "key_manifestations": [
            "Ma, W. Y., & Manjunath, B. S. (1996). 'Texture Features for Browsing and Retrieval of Image Data'",
            "Rubner, Y., et al. (1998). 'A Metric for Distributions with Applications to Image Databases' (Earth Mover's Distance on histograms)",
            "Rowley, H. A., et al. (1998). 'Neural Network-Based Face Detection' (Using retinal connections)",
            "Leung, T., & Malik, J. (2001). 'Representing and Recognizing the Visual Appearance of Materials using Three-dimensional Textons' (1997-98 work)"
          ]
        },
        "1998": {
          "salience_share": 25,
          "description": "The SIFT Revolution (+7%). David Lowe introduced SIFT (Scale-Invariant Feature Transform). It was invariant to rotation, scale, and lighting. It was a 'descriptor'\u2014a 128D vector describing a patch. This was the 'AlexNet' of the 2000s. It solved object recognition for rigid objects (e.g., shoe on a table).",
          "key_manifestations": [
            "Lowe, D. G. (1999). 'Object Recognition from Local Scale-Invariant Features' (ICCV)",
            "Lowe, D. G. (2004). 'Distinctive Image Features from Scale-Invariant Keypoints' (The journal version, highly cited)",
            "Amit, Y., & Geman, D. (1997). 'Shape Quantization and Recognition with Randomized Trees'",
            "Schneiderman, H., & Kanade, T. (2000). 'A Statistical Method for 3D Object Detection Applied to Faces and Cars'"
          ]
        },
        "2000": {
          "salience_share": 28,
          "description": "Viola-Jones (+3%). Real-time face detection. They used 'Haar-like features' (simple rectangles) and 'AdaBoost' (Cluster 8) to select the best ones. It ran on digital cameras. It was the first mass-market Computer Vision success. The lesson: Simple features + Strong Selection = Speed.",
          "key_manifestations": [
            "Viola, P., & Jones, M. (2001). 'Rapid Object Detection using a Boosted Cascade of Simple Features'",
            "Belongie, S., et al. (2002). 'Shape Matching and Object Recognition Using Shape Contexts'",
            "Mikolajczyk, K., & Schmid, C. (2002). 'An Affine Invariant Interest Point Detector'",
            "Lienhart, R., & Maydt, J. (2002). 'An Extended Set of Haar-like Features for Rapid Object Detection'"
          ]
        },
        "2002": {
          "salience_share": 30,
          "description": "Bag of Visual Words (+2%). Borrowing from NLP (Cluster 15), vision researchers clustered SIFT descriptors into 'Visual Words.' An image became a histogram of words. This allowed the use of Naive Bayes and SVMs on images. It discarded all spatial geometry, yet performed best on the PASCAL VOC benchmarks.",
          "key_manifestations": [
            "Sivic, J., & Zisserman, A. (2003). 'Video Google: A Text Retrieval Approach to Object Matching in Videos'",
            "Csurka, G., et al. (2004). 'Visual Categorization with Bags of Keypoints'",
            "Lazebnik, S., et al. (2006). 'Beyond Bags of Features: Spatial Pyramid Matching' (Adding rough geometry back)",
            "Fergus, R., et al. (2003). 'Object Class Recognition by Unsupervised Scale-Invariant Learning'"
          ]
        },
        "2004": {
          "salience_share": 32,
          "description": "HOG & Dalal-Triggs (+2%). Histograms of Oriented Gradients (HOG) proved superior for pedestrian detection. It was a 'dense' descriptor (every pixel contributes) vs SIFT's 'sparse' keypoints. This cemented the 'Gradient Histogram' as the fundamental atom of computer vision.",
          "key_manifestations": [
            "Dalal, N., & Triggs, B. (2005). 'Histograms of Oriented Gradients for Human Detection'",
            "Bay, H., et al. (2006). 'SURF: Speeded Up Robust Features' (Faster SIFT)",
            "Grauman, K., & Darrell, T. (2005). 'The Pyramid Match Kernel: Discriminative Classification with Sets of Image Features'",
            "Felzenszwalb, P. F., & Huttenlocher, D. P. (2004). 'Efficient Graph-Based Image Segmentation'"
          ]
        },
        "2006": {
          "salience_share": 35,
          "description": "Peak Feature Engineering (+3%). The 'Deformable Part Model' (DPM) by Felzenszwalb et al. combined HOG features with a spring-mass model of parts. It was the absolute state-of-the-art. It represented the pinnacle of human ingenuity in modeling: explicit parts, explicit geometry, explicit features. It was complex, slow, and beautiful.",
          "key_manifestations": [
            "Felzenszwalb, P., et al. (2008). 'A Discriminatively Trained, Multiscale, Deformable Part Model' (DPM)",
            "Vedaldi, A., et al. (2009). 'Multiple Kernels for Object Detection'",
            "Calonder, M., et al. (2010). 'BRIEF: Binary Robust Independent Elementary Features'",
            "Rublee, E., et al. (2011). 'ORB: An Efficient Alternative to SIFT or SURF'"
          ]
        },
        "2008": {
          "salience_share": 35,
          "description": "Stasis/Saturation. Progress on PASCAL VOC slowed. Researchers were tweaking histogram bin sizes by 1% to get 0.5% mAP gains. The field felt 'stuck.' The 'Semantic Gap' (pixels to meaning) seemed unbridgeable with just better histograms. This stagnation set the stage for the Deep Learning disruption.",
          "key_manifestations": [
            "Everingham, M., et al. (2010). 'The Pascal Visual Object Classes (VOC) Challenge'",
            "Wang, J., et al. (2010). 'Locality-constrained Linear Coding for Image Classification'",
            "Perronnin, F., et al. (2010). 'Improving the Fisher Kernel for Large-Scale Image Classification'",
            "Xiao, J., et al. (2010). 'SUN Database: Large-scale Scene Recognition from Abbey to Zoo' (Highlighting the limits of hand-crafted features)"
          ]
        },
        "2010": {
          "salience_share": 32,
          "description": "The Fisher Vector Swan Song (-3%). Fisher Vectors (Perronnin) were the last major improvement. They encoded higher-order statistics of the gradients. They were very high dimensional (100k+). They worked well but were massive. This was the 'Brute Force' era of feature engineering.",
          "key_manifestations": [
            "Sanchez, J., et al. (2013). 'Image Classification with the Fisher Vector: Theory and Practice' (2010-11 work)",
            "Deng, J., et al. (2009). 'ImageNet: A Large-Scale Hierarchical Image Database' (The dataset that would kill the cluster)",
            "Lin, Y., et al. (2011). 'Large-scale Image Classification: Fast Feature Extraction and SVM Training'",
            "Chatfield, K., et al. (2011). 'The Devil is in the Details: an Evaluation of Recent Feature Encoding Methods'"
          ]
        },
        "2012": {
          "salience_share": 15,
          "description": "The Collapse (-17%). AlexNet happened. It beat DPM and Fisher Vectors by 10% absolute accuracy. It used raw pixels. Within 6 months, CVPR shifted from 'New Descriptor' papers to 'New Architecture' papers. SIFT/HOG were effectively deprecated for classification.",
          "key_manifestations": [
            "Krizhevsky, A., et al. (2012). 'ImageNet Classification with Deep Convolutional Neural Networks'",
            "Girshick, R., et al. (2014). 'Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation' (R-CNN: Replacing DPM with CNN)",
            "Sermanet, P., et al. (2013). 'OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks'",
            "Donahue, J., et al. (2014). 'DeCAF' (Explicitly showing CNN features > SIFT)"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "Niche: Geometry Only (-10%). SIFT/ORB survived in SLAM (Simultaneous Localization and Mapping). Neural nets were too slow and heavy for real-time tracking on phones. The feature engineers retreated to 'Geometric Vision' (3D reconstruction), where precise pixel matching still mattered.",
          "key_manifestations": [
            "Mur-Artal, R., et al. (2015). 'ORB-SLAM: A Versatile and Accurate Monocular SLAM System'",
            "Engel, J., et al. (2014). 'LSD-SLAM: Large-Scale Direct Monocular SLAM'",
            "Forster, C., et al. (2014). 'SVO: Fast Semi-Direct Monocular Visual Odometry'",
            "Schonberger, J. L., & Frahm, J. M. (2016). 'Structure-from-Motion Revisited' (COLMAP)"
          ]
        },
        "2016": {
          "salience_share": 2,
          "description": "Learned Features take SLAM (-3%). Even the SLAM stronghold began to fall. 'SuperPoint' (MagicLeap) showed that a neural net could learn better keypoints than SIFT. 'Learned Descriptors' replaced hand-crafted ones. The 'Art' of feature design was dead; the 'Art' of loss function design replaced it.",
          "key_manifestations": [
            "DeTone, D., et al. (2018). 'SuperPoint: Self-Supervised Interest Point Detection and Description' (2017 work)",
            "Yi, K. M., et al. (2016). 'LIFT: Learned Invariant Feature Transform'",
            "Mishchuk, A., et al. (2017). 'Working hard to know your neighbor's margins: Local descriptor learning loss'",
            "Lindenberger, P., et al. (2021). 'Pixel-Perfect Structure-from-Motion with Featuremetric Refinement'"
          ]
        },
        "2018": {
          "salience_share": 1,
          "description": "Legacy. Used in teaching 'Intro to Computer Vision' to explain what convolution is doing. Used in low-power embedded systems (simple microcontrollers) where a CNN is too expensive.",
          "key_manifestations": [
            "Szeliski, R. (2022). 'Computer Vision: Algorithms and Applications' (Textbook preserving the history)",
            "Tareen, S. A. K., & Saleem, Z. (2018). 'A Comparative Analysis of SIFT, SURF, KAZE, AKAZE, ORB, and BRISK'",
            "OpenCV Library (2018). 'FeatureDetector Interface'",
            "Rosten, E., et al. (2010). 'FAST Corner Detection' (Still used for extreme speed)"
          ]
        },
        "2020": {
          "salience_share": 1,
          "description": "Stasis. NeRFs (Neural Radiance Fields) appeared. They do 3D reconstruction without *any* explicit feature matching, just optimizing a photometric loss. This put the final nail in the coffin of 'Feature Matching' for dense reconstruction.",
          "key_manifestations": [
            "Mildenhall, B., et al. (2020). 'NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis'",
            "Wang, Z., et al. (2021). 'NeRF--: Neural Radiance Fields Without Known Camera Parameters'",
            "Lindenberger, P., et al. (2021). 'NetVLAD: CNN architecture for weakly supervised place recognition' (The replacement for Bag of Words)",
            "Teed, Z., & Deng, J. (2020). 'RAFT: Recurrent All-Pairs Field Transforms for Optical Flow'"
          ]
        },
        "2022": {
          "salience_share": 1,
          "description": "Stasis. The cluster is historical. However, 'Inductive Bias' research in Deep Learning often tries to rediscover *why* Gabor filters are good. We circle back to Cluster 11 (Sparse Coding).",
          "key_manifestations": [
            "Liu, Z., et al. (2022). 'A ConvNet for the 2020s' (ConvNeXt - relearning the lessons of the past)",
            "Hassani, A., et al. (2023). 'Neighborhood Attention Transformer'",
            "Alzubaidi, L., et al. (2021). 'Review of Deep Learning: Concepts, CNN Architectures, Challenges'",
            "Oquab, M., et al. (2023). 'DINOv2: Learning Robust Visual Features without Supervision'"
          ]
        },
        "2024": {
          "salience_share": 1,
          "description": "Zero Variance in SOTA. The only remnant is the concept of 'Tokenization' in Vision Transformers (patchifying images). A 'Patch' is the new 'Feature.' But it is raw, not engineered.",
          "key_manifestations": [
            "Dosovitskiy, A., et al. (2020/2024). 'An Image is Worth 16x16 Words'",
            "He, K., et al. (2022). 'Masked Autoencoders Are Scalable Vision Learners'",
            "Mallya, A., et al. (2024). 'Hydra: A Foundation Model for Computer Vision'",
            "Reference: 'The End of the Hand-Crafted Era'"
          ]
        }
      }
    },
    "23_self_supervised_contrastive_learning": {
      "name": "Self-Supervised & Contrastive Learning",
      "description": "This eigencluster represents the liberation of AI from human labeling. It posits that the data itself contains the supervision signal needed for intelligence. The trajectory evolves from the generative autoencoders of the 2000s to the 'pretext tasks' of the 2010s (predicting rotation, colorization), culminating in the 'Contrastive' revolution (SimCLR, CLIP) and 'Masked Modeling' (BERT, MAE). It explains the shift from 'Supervised Learning' (limited by labor) to 'Self-Supervised Learning' (limited only by compute).",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "The cluster existed as 'Unsupervised Learning' (+1%). The primary mechanism was the Autoencoder (Hinton/Zemel). The 'Pretext Task' was reconstruction: $Input \u2192 Bottleneck \u2192 Output$. The goal was compression, not representation learning for downstream tasks. It was theoretically interesting but practically inferior to supervised backprop.",
          "key_manifestations": [
            "Hinton, G. E., & Zemel, R. S. (1994). 'Autoencoders, Minimum Description Length, and Helmholtz Free Energy'",
            "Schmidhuber, J. (1992). 'Learning Complex, Extended Sequences Using the Principle of History Compression'",
            "Cottrell, G. W., et al. (1987/1990). 'Learning Internal Representations from Gray-Scale Images'",
            "Bourlard, H., & Kamp, Y. (1988/1990). 'Auto-Association by Multilayer Perceptrons and Singular Value Decomposition'"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Stasis. The focus was on 'Clustering' (K-Means, GMMs). Self-supervision was implicitly present in 'LSA' (Cluster 15)\u2014predicting context counts\u2014but it wasn't framed as learning features for classification. The 'Displacing Force' was the rise of SVMs which demanded labeled data for margin maximization.",
          "key_manifestations": [
            "Sch\u00fctze, H. (1993). 'Word Space'",
            "Becker, S., & Hinton, G. E. (1992). 'Self-Organizing Neural Network that Discovers Surfaces in Random-Dot Stereograms' (IMAX - maximizing mutual information)",
            "Linsker, R. (1992). 'Local Synaptic Learning Rules Suffice to Maximize Mutual Information in a Linear Network'",
            "Bridle, J. S. (1992). 'Unsupervised Classifiers, Mutual Information and Phantom Targets'"
          ]
        },
        "1994": {
          "salience_share": 4,
          "description": "Information Maximization (+1%). Bell & Sejnowski's ICA (Independent Component Analysis) was a form of self-supervision: maximize the independence of the outputs. This learned edge detectors from natural images without labels. It showed that statistical principles alone could discover features.",
          "key_manifestations": [
            "Bell, A. J., & Sejnowski, T. J. (1995). 'An Information-Maximization Approach to Blind Separation and Blind Deconvolution'",
            "Dayan, P., et al. (1995). 'The Helmholtz Machine' (Self-supervised via Wake-Sleep)",
            "Becker, S. (1996). 'Mutual Information Maximization: Models of Cortical Self-Organization'",
            "Amari, S., et al. (1996). 'A New Learning Algorithm for Blind Signal Separation'"
          ]
        },
        "1996": {
          "salience_share": 3,
          "description": "Stasis. The 'Generative' view dominated unsupervised learning. You learned $P(X)$. The 'Discriminative' view (learning $P(Y|X)$) was strictly supervised. The idea of 'Discriminative Self-Supervision' (learning to discriminate parts of the data from each other) was dormant.",
          "key_manifestations": [
            "Olshausen, B. A., & Field, D. J. (1996). 'Emergence of Simple-Cell Receptive Field Properties by Learning a Sparse Code'",
            "Frey, B. J., et al. (1996). 'The Wake-Sleep Algorithm for Unsupervised Neural Networks'",
            "Hinton, G. E., & Ghahramani, Z. (1997). 'Generative Models for Discovering Sparse Distributed Representations'",
            "Roweis, S. (1998). 'EM Algorithms for PCA and SPCA'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Contraction (-1%). The 'Kernel' era. Unsupervised learning became 'Kernel PCA' or 'Spectral Clustering.' These were fixed algorithms, not learned representations. The concept of 'Training a model to solve a made-up task' vanished.",
          "key_manifestations": [
            "Sch\u00f6lkopf, B., et al. (1998). 'Nonlinear Component Analysis as a Kernel Eigenvalue Problem'",
            "Tipping, M. E., & Bishop, C. M. (1999). 'Probabilistic Principal Component Analysis'",
            "Lee, D. D., & Seung, H. S. (1999). 'Learning the Parts of Objects by Non-Negative Matrix Factorization'",
            "Attias, H. (1999). 'Independent Factor Analysis'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Contrastive Roots (+1%). Hinton's 'Products of Experts' introduced 'Contrastive Divergence.' You minimize the energy of real data and maximize the energy of 'fantasies' (noise). This was the grandfather of Contrastive Learning: Pushing data points away from noise points.",
          "key_manifestations": [
            "Hinton, G. E. (2002). 'Training Products of Experts by Minimizing Contrastive Divergence'",
            "Welling, M., et al. (2003). 'A New Learning Algorithm for Mean Field Boltzmann Machines'",
            "Gutmann, M., & Hyv\u00e4rinen, A. (2010). 'Noise-contrastive Estimation: A New Estimation Principle for Unnormalized Statistical Models' (Roots in 2000s density estimation)",
            "Bengio, Y., & Senecal, J. S. (2003). 'Quick Training of Probabilistic Neural Nets with Importance Sampling'"
          ]
        },
        "2002": {
          "salience_share": 4,
          "description": "Siamese Networks (+1%). LeCun's group introduced 'Siamese Networks' (Chopra et al.) to learn a metric. Minimize distance between same-class pairs, maximize distance between different-class pairs. While used with labels (Supervised), the *architecture* was identical to modern SimCLR. It laid the geometric foundation.",
          "key_manifestations": [
            "Chopra, S., et al. (2005). 'Learning a Similarity Metric Discriminatively, with Application to Face Verification'",
            "Hadsell, R., et al. (2006). 'Dimensionality Reduction by Learning an Invariant Mapping' (DrLim - Contrastive Loss)",
            "Weinberger, K. Q., et al. (2006). 'Distance Metric Learning for Large Margin Nearest Neighbor Classification'",
            "Goldberger, J., et al. (2005). 'Neighbourhood Components Analysis'"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Deep Belief Nets (+1%). Pre-training was the driver. You train a stack of RBMs (unsupervised) to learn features, then fine-tune. This proved that unlabeled data helps labeled tasks. It was 'Generative Pre-training' before GPT.",
          "key_manifestations": [
            "Hinton, G. E., et al. (2006). 'A Fast Learning Algorithm for Deep Belief Nets'",
            "Bengio, Y., et al. (2007). 'Greedy Layer-Wise Training of Deep Networks'",
            "Ranzato, M., et al. (2007). 'Sparse Feature Learning for Deep Belief Networks'",
            "Lee, H., et al. (2008). 'Sparse Deep Belief Net Model for Visual Area V2'"
          ]
        },
        "2006": {
          "salience_share": 7,
          "description": "Denoising Autoencoders (+2%). Vincent et al. changed the task from 'Reconstruct X' to 'Reconstruct X from corrupted X_tilde.' This forced the model to learn the *manifold structure* rather than just copying pixels. This was a robust self-supervised objective that scaled well.",
          "key_manifestations": [
            "Vincent, P., et al. (2008). 'Extracting and Composing Robust Features with Denoising Autoencoders'",
            "Raina, R., et al. (2007). 'Self-taught Learning: Transfer Learning from Unlabeled Data'",
            "Collobert, R., & Weston, J. (2008). 'A Unified Architecture for NLP' (Ranking loss as self-supervision)",
            "Mobahi, H., et al. (2009). 'Deep Learning from Temporal Coherence in Video'"
          ]
        },
        "2008": {
          "salience_share": 6,
          "description": "Stasis/Decline. ImageNet (Supervised) killed the DBN/Autoencoder pre-training. ReLU + Dropout + Label meant you didn't need unsupervised pre-training anymore. The cluster retreated to NLP (Word2Vec) where labels didn't exist.",
          "key_manifestations": [
            "Erhan, D., et al. (2010). 'Why Does Unsupervised Pre-training Help Deep Learning?'",
            "Coates, A., et al. (2011). 'An Analysis of Single-Layer Networks in Unsupervised Feature Learning'",
            "Le, Q. V., et al. (2012). 'Building High-level Features Using Large Scale Unsupervised Learning' (The 'Cat Neuron' - massive scale autoencoder)",
            "Masci, J., et al. (2011). 'Stacked Convolutional Auto-Encoders for Hierarchical Feature Extraction'"
          ]
        },
        "2010": {
          "salience_share": 8,
          "description": "NCE & Word2Vec (+2%). Gutmann/Hyv\u00e4rinen formalized 'Noise Contrastive Estimation' (NCE). Mikolov applied it to language. Instead of a softmax over 100k words, just distinguish the 'True' word from 10 'Noise' words. This was the first industrial-scale Contrastive Learning.",
          "key_manifestations": [
            "Gutmann, M., & Hyv\u00e4rinen, A. (2010). 'Noise-contrastive Estimation'",
            "Mikolov, T., et al. (2013). 'Distributed Representations of Words and Phrases and their Compositionality' (Negative Sampling)",
            "Mnih, A., & Kavukcuoglu, K. (2013). 'Learning Word Embeddings Efficiently with Noise-Contrastive Estimation'",
            "Collobert, R. (2011). 'Deep Learning for Efficient Discriminative Parsing'"
          ]
        },
        "2012": {
          "salience_share": 6,
          "description": "Nadir. Vision was 100% supervised. NLP was using Word2Vec (Self-Supervised) but it was viewed as a 'preprocessing' step, not the main model training. The idea of training a ConvNet purely on unlabeled images was considered impossible.",
          "key_manifestations": [
            "Krizhevsky, A., et al. (2012). 'ImageNet Classification with DCNNs' (Pure Supervised)",
            "Goodfellow, I., et al. (2014). 'Generative Adversarial Nets' (Generative self-supervision)",
            "Kingma, D. P., & Welling, M. (2014). 'Auto-Encoding Variational Bayes'",
            "Dosovitskiy, A., et al. (2014). 'Discriminative Unsupervised Feature Learning with Convolutional Neural Networks' (Exemplar CNN - Seeds of modern SSL)"
          ]
        },
        "2014": {
          "salience_share": 10,
          "description": "The 'Pretext Task' Era (+4%). Researchers got creative. 'Predict the relative position of these two patches.' 'Colorize this grayscale image.' 'Solve this Jigsaw puzzle.' These were 'Pretext Tasks.' The network learned semantic features as a byproduct of solving the puzzle. It worked, but performance was still below supervised baselines.",
          "key_manifestations": [
            "Doersch, C., et al. (2015). 'Unsupervised Visual Representation Learning by Context Prediction'",
            "Zhang, R., et al. (2016). 'Colorful Image Colorization'",
            "Noroozi, M., & Favaro, P. (2016). 'Unsupervised Learning of Visual Representations by Solving Jigsaw Puzzles'",
            "Pathak, D., et al. (2016). 'Context Encoders: Feature Learning by Inpainting'"
          ]
        },
        "2016": {
          "salience_share": 15,
          "description": "Contrastive Instance Discrimination (+5%). Wu et al. (Instance Discrimination) and Oord (CPC) proposed: 'Treat every image as its own class.' Use augmentation to create views. Pull views of the same image together, push others away. This closed the gap with supervised learning.",
          "key_manifestations": [
            "Oord, A. v. d., et al. (2018). 'Representation Learning with Contrastive Predictive Coding' (CPC)",
            "Wu, Z., et al. (2018). 'Unsupervised Feature Learning via Non-Parametric Instance Discrimination'",
            "Hjelm, R. D., et al. (2019). 'Learning Deep Representations by Mutual Information Estimation and Maximization'",
            "Gidaris, S., et al. (2018). 'Unsupervised Representation Learning by Predicting Image Rotations'"
          ]
        },
        "2018": {
          "salience_share": 25,
          "description": "BERT & SimCLR Explosion (+10%). Two revolutions at once. In NLP, BERT (Masked Language Modeling) proved that 'Masking' is the ultimate pretext task. In Vision, SimCLR (Chen et al.) simplified Contrastive Learning (Augmentation + Projection Head + InfoNCE). Suddenly, SSL matched Supervised performance on ImageNet. The 'Labels' were obsolete.",
          "key_manifestations": [
            "Devlin, J., et al. (2018). 'BERT: Pre-training of Deep Bidirectional Transformers'",
            "Chen, T., et al. (2020). 'A Simple Framework for Contrastive Learning of Visual Representations' (SimCLR)",
            "He, K., et al. (2020). 'Momentum Contrast for Unsupervised Visual Representation Learning' (MoCo)",
            "Grill, J. B., et al. (2020). 'Bootstrap Your Own Latent - A New Approach to Self-Supervised Learning' (BYOL)"
          ]
        },
        "2020": {
          "salience_share": 35,
          "description": "Multimodal Unification (+10%). CLIP (OpenAI). Contrastive learning between Text and Images. This unified the manifolds. The loss function was simple InfoNCE. The variance explosion was due to 'Zero-Shot' capability\u2014the model could recognize concepts it was never explicitly trained to classify, just by reading about them.",
          "key_manifestations": [
            "Radford, A., et al. (2021). 'Learning Transferable Visual Models From Natural Language Supervision' (CLIP)",
            "Jia, C., et al. (2021). 'Scaling Up Visual and Vision-Language Representation Learning With Noisy Text Supervision'",
            "Caron, M., et al. (2021). 'Emerging Properties in Self-Supervised Vision Transformers' (DINO)",
            "He, K., et al. (2022). 'Masked Autoencoders Are Scalable Vision Learners' (MAE - Return of the Autoencoder)"
          ]
        },
        "2022": {
          "salience_share": 40,
          "description": "Generative as Self-Supervised (+5%). The definition blurred. Is 'Next Token Prediction' (GPT) generative or self-supervised? It's both. The field converged on 'Foundation Models' trained on massive unlabeled corpora. The 'Contrastive' vs 'Generative' debate settled into: Generative for Text/Pixels, Contrastive for Embeddings/Retrieval.",
          "key_manifestations": [
            "Assran, M., et al. (2023). 'Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture' (I-JEPA - LeCun's vision)",
            "Oquab, M., et al. (2023). 'DINOv2: Learning Robust Visual Features without Supervision'",
            "Radford, A., et al. (2023). 'Robust Speech Recognition via Large-Scale Weak Supervision' (Whisper)",
            "Baevski, A., et al. (2022). 'Data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language'"
          ]
        },
        "2024": {
          "salience_share": 45,
          "description": "Current trajectory is 'World Modeling' (+5%). Predicting the *future* state of the world (Video) is the ultimate self-supervised task (LeCun's JEPA). Models like Sora and Gemini are trained on 'prediction' which forces them to learn physics, causality, and reasoning. Self-supervision is no longer a 'Pre-training' step; it is the *only* step that matters for scale.",
          "key_manifestations": [
            "LeCun, Y. (2022/2024). 'A Path Towards Autonomous Machine Intelligence' (The JEPA manifesto)",
            "Team, G. (2024). 'Gemini 1.5: Unlocking Multimodal Understanding' (Video-Audio-Text SSL)",
            "Bardes, A., et al. (2024). 'Revisiting Feature Prediction for Learning Visual Representations from Video'",
            "El-Nouby, A., et al. (2024). 'ImageWorld: Scaling Autoregressive Visual Pre-training'"
          ]
        }
      }
    },
    "24_hardware_acceleration_systems": {
      "name": "Hardware Acceleration & Systems",
      "description": "This eigencluster represents the 'Physical Substrate' of AI. It tracks the co-evolution of algorithms and hardware, governed by the 'Hardware Lottery'\u2014the idea that successful algorithms are those that fit the dominant hardware of the time. The trajectory moves from the CPU-bound logic of the 90s, to the CUDA/GPU revolution of the 2000s, to the Tensor Core/TPU era of the 2010s, and finally to the 'Interconnect & Bandwidth' bottleneck of the 2020s. It explains *why* Matrix Multiplication became the universal atom of compute.",
      "trajectory": {
        "1990": {
          "salience_share": 15,
          "description": "The 'CPU' Era (+2%). AI was limited by Moore's Law on serial processors (x86). LISP Machines were dying. Connectionism (Neural Nets) was slow because $O(N^2)$ matrix muls choked single-core CPUs. This favored 'Symbolic' and 'Tree' methods (Decision Trees) which required complex branching logic, something CPUs were good at.",
          "key_manifestations": [
            "Brooks, R. A. (1990). 'Elephants Don't Play Chess' (Hardware constraints driving reactive architectures)",
            "Thinking Machines Corp (1990). 'Connection Machine CM-5' (Massive parallelism attempt - too expensive)",
            "Mead, C. (1989/1990). 'Analog VLSI and Neural Systems' (The analog alternative path)",
            "Intel (1993). 'Pentium Processor' (The scalar king)"
          ]
        },
        "1992": {
          "salience_share": 15,
          "description": "Stasis. The failure of the 'Fifth Generation' (specialized Prolog hardware) solidified the dominance of general-purpose CPUs. AI research adapted to the hardware: 'SVMs' became popular because they solved a QP (convex optimization), which numerical libraries (LAPACK) on CPUs handled well.",
          "key_manifestations": [
            "Patterson, D. A., & Hennessy, J. L. (1990/1994). 'Computer Architecture: A Quantitative Approach' (RISC dominance)",
            "Dongarra, J. J., et al. (1992). 'LAPACK Users' Guide'",
            "Fujitsu (1992). 'Fifth Generation Computer Systems' (Post-mortem)",
            "Hwang, K. (1993). 'Advanced Computer Architecture'"
          ]
        },
        "1994": {
          "salience_share": 12,
          "description": "SIMD Niches (-3%). 'Multimedia Extensions' (MMX) began to appear in CPUs, offering limited vector instructions. ConvNets (LeCun) ran on DSPs for check reading. But general AI was still scalar. The divergence between 'Graphics' (3dfx Voodoo) and 'Compute' began.",
          "key_manifestations": [
            "LeCun, Y., et al. (1998). 'Gradient-Based Learning Applied to Document Recognition' (Using DSPs)",
            "Intel (1996). 'MMX Technology Extension to the Intel Architecture'",
            "NVIDIA (1995). 'NV1' (Quadratic surfaces - failed)",
            "Beowulf Clusters (1994). 'Commodity off-the-shelf parallel computing'"
          ]
        },
        "1996": {
          "salience_share": 10,
          "description": "Stasis. Beowulf clusters (stacks of PCs) were the standard for 'High Performance Computing.' This favored coarse-grained parallelism (Genetic Algorithms, Random Forests) over fine-grained parallelism (Neural Nets). This hardware bias actively suppressed connectionist research.",
          "key_manifestations": [
            "Sterling, T., et al. (1995/1999). 'Beowulf Cluster Computing'",
            "Dean, J. (Legacy). 'Parallel implementation of neural networks on clusters' (Difficulties)",
            "SGI (1996). 'Origin 2000' (NUMA architecture)",
            "IBM (1997). 'Deep Blue' (Custom VLSI for Chess search, not learning)"
          ]
        },
        "1998": {
          "salience_share": 10,
          "description": "The GPU Emergence (+0%). NVIDIA released the GeForce 256, the first 'GPU' with hardware Transform & Lighting. It was fixed-function. Researchers tried to hack it for general compute (GPGPU) using OpenGL shaders, but it was painful. The potential was there: massive floating point throughput.",
          "key_manifestations": [
            "NVIDIA (1999). 'GeForce 256'",
            "Trendall, C., & Stewart, A. J. (2000). 'General Purpose Computation on Graphics Hardware'",
            "Hoff, K. E., et al. (1999). 'Fast Computation of Generalized Voronoi Diagrams using Graphics Hardware'",
            "M\u00f6ller, T., & Haines, E. (1999). 'Real-Time Rendering'"
          ]
        },
        "2000": {
          "salience_share": 12,
          "description": "Programmable Shaders (+2%). GPUs gained programmable vertex/pixel shaders. Researchers (like Ng at Stanford) started implementing matrix multiplication on GPUs. It was 10x faster than CPUs but required writing graphics code (drawing triangles to multiply matrices).",
          "key_manifestations": [
            "Larsen, E. S., & McAllister, D. (2001). 'Fast Matrix Multiplies using Graphics Hardware'",
            "Bolz, J., et al. (2003). 'Sparse Matrix Solvers on the GPU: Conjugate Gradients and Multigrid'",
            "Harris, M. J., et al. (2003). 'Simulation of Cloud Dynamics on Graphics Hardware'",
            "Buck, I., et al. (2004). 'Brook for GPUs: Stream Computing on Graphics Hardware'"
          ]
        },
        "2002": {
          "salience_share": 12,
          "description": "Stasis/Incubation. The difficulty of GPGPU kept it niche. AI was still dominated by SVMs on CPUs. However, the gaming industry was driving GPU FLOPs exponential, diverging from CPU performance (the 'Memory Wall').",
          "key_manifestations": [
            "Owens, J. D., et al. (2007). 'A Survey of General-Purpose Computation on Graphics Hardware' (Covering early 2000s)",
            "Pharr, M., & Fernando, R. (2005). 'GPU Gems 2'",
            "Steinkraus, D., et al. (2005). 'Using GPUs for Machine Learning Algorithms'",
            "Fatahalian, K., et al. (2004). 'Understanding the Efficiency of GPU Algorithms for Matrix-Matrix Multiplication'"
          ]
        },
        "2004": {
          "salience_share": 15,
          "description": "MapReduce (+3%). Google introduced MapReduce. This wasn't about GPUs; it was about 'Data Parallelism' on commodity CPU clusters. It enabled 'Web Scale' simple models (Naive Bayes, Logistic Regression). It reinforced simple, linear, sparse models over complex, dense, deep models.",
          "key_manifestations": [
            "Dean, J., & Ghemawat, S. (2004). 'MapReduce: Simplified Data Processing on Large Clusters'",
            "Chu, C. T., et al. (2006). 'Map-Reduce for Machine Learning on Multicore'",
            "Olston, C., et al. (2008). 'Pig Latin: A Not-So-Foreign Language for Data Processing'",
            "Cutting, D., et al. (2006). 'Hadoop' (Open source MapReduce)"
          ]
        },
        "2006": {
          "salience_share": 25,
          "description": "The CUDA Event (+10%). NVIDIA released CUDA. Suddenly, you didn't need to write shaders; you could write C-like code. This unlocked the GPU for scientists. Raina, Ng, and LeCun immediately began porting Deep Learning to CUDA. This was the catalyst for the Deep Learning explosion.",
          "key_manifestations": [
            "NVIDIA (2006/2007). 'CUDA Programming Guide 1.0'",
            "Raina, R., et al. (2009). 'Large-scale Deep Unsupervised Learning using Graphics Processors'",
            "Coates, A., et al. (2013). 'Deep Learning with COTS HPC Systems' (Reflecting 2008-2010 work)",
            "Stone, J. E., et al. (2007). 'Accelerating Molecular Modeling Applications with Graphics Processors'"
          ]
        },
        "2008": {
          "salience_share": 30,
          "description": "ImageNet on GPU (+5%). Krizhevsky (AlexNet author) was writing highly optimized CUDA kernels for Convolution. He realized that two GTX 580s could train a massive net that would take months on a CPU. The hardware (GPU) finally matched the algorithm (ConvNet).",
          "key_manifestations": [
            "Ciresan, D. C., et al. (2010). 'Deep, Big, Simple Neural Nets for Handwritten Digit Recognition'",
            "Krizhevsky, A. (2014). 'One Weird Trick for Parallelizing Convolutional Neural Networks' (2009-2010 work)",
            "Bergstra, J., et al. (2010). 'Theano: A CPU and GPU Math Expression Compiler'",
            "Nickolls, J., et al. (2008). 'Scalable Parallel Programming with CUDA'"
          ]
        },
        "2010": {
          "salience_share": 40,
          "description": "The GPU Gold Rush (+10%). Post-AlexNet, every lab bought GPUs. NVIDIA stock began its decoupling from gaming. The primitive was 'GEMM' (General Matrix Multiply). Libraries like cuDNN (2014) appeared, optimizing these primitives. The 'Hardware Lottery' was won by the GPU.",
          "key_manifestations": [
            "Chetlur, S., et al. (2014). 'cuDNN: Efficient Primitives for Deep Learning' (2013 development)",
            "Jia, Y., et al. (2014). 'Caffe: Convolutional Architecture for Fast Feature Embedding' (The framework that popularized GPU DL)",
            "Collobert, R., et al. (2011). 'Torch7: A Matlab-like Environment for Machine Learning'",
            "Coates, A., et al. (2013). 'Deep Learning with COTS HPC Systems'"
          ]
        },
        "2012": {
          "salience_share": 50,
          "description": "Distributed Training (+10%). Models grew larger than single-GPU memory. 'Data Parallelism' (Parameter Server) and 'Model Parallelism' became research fields. Dean et al. (Google) built DistBelief (pre-TensorFlow), scaling to thousands of CPU cores (initially) then GPUs.",
          "key_manifestations": [
            "Dean, J., et al. (2012). 'Large Scale Distributed Deep Networks' (DistBelief)",
            "Chilimbi, T., et al. (2014). 'Project Adam: Building an Efficient and Scalable Deep Learning Training System'",
            "Li, M., et al. (2014). 'Scaling Distributed Machine Learning with the Parameter Server'",
            "Seide, F., et al. (2014). '1-Bit Stochastic Gradient Descent and its Application to Data-Parallel Distributed Training'"
          ]
        },
        "2014": {
          "salience_share": 60,
          "description": "The TPU/Tensor Core Shift (+10%). Google realized GPUs were too general (wasting energy on graphics logic). They built the TPU v1 (systolic array for matrix mul). NVIDIA responded with 'Tensor Cores' (V100). Hardware became *specialized* for Low Precision (FP16/INT8) Matrix Multiply. The definition of 'Computer' changed to 'Matrix Multiplier.'",
          "key_manifestations": [
            "Jouppi, N. P., et al. (2017). 'In-Datacenter Performance Analysis of a Tensor Processing Unit' (TPU v1 deployed 2015)",
            "NVIDIA (2017). 'Tesla V100 Architecture Whitepaper' (Tensor Cores)",
            "Abadi, M., et al. (2016). 'TensorFlow: A System for Large-Scale Machine Learning'",
            "Chen, T., et al. (2015). 'MXNet: A Flexible and Efficient Machine Learning Library for Heterogeneous Distributed Systems'"
          ]
        },
        "2016": {
          "salience_share": 70,
          "description": "Interconnect Bottleneck (+10%). With fast chips, the bottleneck moved to the wires *between* chips. NVLink and InfiniBand became crucial. 'All-Reduce' algorithms were optimized. The 'Supercomputer' topology changed from 'High Compute/Low Bandwidth' to 'High Compute/High Bandwidth.'",
          "key_manifestations": [
            "Sergeev, A., & Del Balso, M. (2018). 'Horovod: fast and easy distributed deep learning in TensorFlow' (Uber)",
            "NVIDIA (2016). 'DGX-1' (NVLink introduction)",
            "Goyal, P., et al. (2017). 'Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour'",
            "Jia, X., et al. (2018). 'Highly Scalable Deep Learning Training System with Mixed-Precision: Training ImageNet in 4 Minutes'"
          ]
        },
        "2018": {
          "salience_share": 75,
          "description": "Sparsity & Quantization (+5%). Models (BERT) were too big. Hardware began supporting INT8 and sparse operations (Ampere architecture). 'The Lottery Ticket Hypothesis' (Cluster 11) drove hardware support for pruning. We entered the era of 'Co-design': Design the net for the chip, and the chip for the net.",
          "key_manifestations": [
            "Micikevicius, P., et al. (2018). 'Mixed Precision Training'",
            "Wang, N., et al. (2018). 'Training Deep Neural Networks with 8-bit Floating Point Numbers'",
            "Hooker, S. (2020). 'The Hardware Lottery'",
            "NVIDIA (2020). 'A100 Tensor Core GPU Architecture' (Structured Sparsity)"
          ]
        },
        "2020": {
          "salience_share": 85,
          "description": "Trillion Parameter Scale (+10%). GPT-3 required a supercomputer. Microsoft/OpenAI built massive clusters. The engineering challenge shifted to '3D Parallelism' (Pipeline + Tensor + Data Parallelism). Megatron-LM and DeepSpeed became the standard OS for the cluster.",
          "key_manifestations": [
            "Shoeybi, M., et al. (2019). 'Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism'",
            "Rasley, J., et al. (2020). 'DeepSpeed: System Optimizations for Enabling Training of Massive Deep Learning Models'",
            "Lepikhin, D., et al. (2020). 'GShard: Scaling Giant Models with Conditional Computation'",
            "Narayanan, D., et al. (2021). 'Efficient Large-Scale Language Model Training on GPU Clusters Using Megatron-LM'"
          ]
        },
        "2022": {
          "salience_share": 90,
          "description": "H100 & Transformer Engine (+5%). NVIDIA H100 included a 'Transformer Engine' that automatically managed FP8 precision. The hardware was now explicitly designed for *one architecture*: The Transformer. The hardware-software convergence was absolute. Competitors (Cerebras, Groq) explored novel topologies (Wafer Scale, LPU).",
          "key_manifestations": [
            "NVIDIA (2022). 'H100 Tensor Core GPU Architecture' (Transformer Engine)",
            "Dao, T., et al. (2022). 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness' (Algorithm aware of memory hierarchy)",
            "Lieberis, N., et al. (2022). 'Cerebras Architecture'",
            "Abadi, M., et al. (2022). 'Pathways: Asynchronous Distributed Dataflow for ML'"
          ]
        },
        "2024": {
          "salience_share": 95,
          "description": "Current trajectory is 'Memory Wall Breaking' (+5%). GPUs are fast enough; Memory Bandwidth (HBM) is the limit. H200/B200 focus on massive memory bandwidth. 'In-Memory Computing' and 'Optical Interconnects' are the research frontiers to break the wall for 100T parameter models.",
          "key_manifestations": [
            "NVIDIA (2024). 'Blackwell Architecture'",
            "Jouppi, N., et al. (2023). 'TPU v4: An Optically Reconfigurable Supercomputer'",
            "Kwon, S. J., et al. (2024). 'Hardware-Aware Training of Large Language Models'",
            "Sze, V., et al. (2024). 'Efficient Processing of Deep Neural Networks' (Updated Survey)"
          ]
        }
      }
    },
    "25_ai_safety_alignment": {
      "name": "AI Safety & Alignment",
      "description": "This eigencluster represents the shift from 'Making it Work' to 'Making it Safe.' It addresses the 'Alignment Problem': ensuring that powerful AI systems optimize for human-intended goals, not just their reward functions. The trajectory evolves from the fringe philosophy of the 2000s (Yudkowsky/Bostrom), to the 'Concrete Problems' of the 2010s (Reward Hacking, Side Effects), to the industrial-scale 'RLHF' and 'Interpretability' engineering of the 2020s. It is the immune system of the AI field.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Fringe Philosophy. Safety was sci-fi (Asimov's Laws). The technical field did not exist because AI didn't work. The only 'Safety' was 'Verification' (Cluster 20) of expert systems.",
          "key_manifestations": [
            "Vinge, V. (1993). 'The Coming Technological Singularity' (1990-1993 ideas)",
            "Leveson, N. (1995). 'Safeware: System Safety and Computers' (General software safety)",
            "Goertzel, B. (1993). 'The Structure of Intelligence' (Early AGI thoughts)",
            "Moravec, H. (1988/1990). 'Mind Children' (Speculative risk)"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. No distinct activity. AI was in winter.",
          "key_manifestations": [
            "Reference: 'The Silence of the Winter'",
            "Russell, S., & Wefald, E. (1991). 'Do the Right Thing' (Bounded optimality - early alignment seeds)",
            "Weld, D. S., & Etzioni, O. (1994). 'The First Law of Robotics' (Planning safety)",
            "Bostrom, N. (1998). 'How Long Before Superintelligence?' (Early drafts)"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Stasis. 'Reliability' was the term, not Safety. Reliability meant 'doesn't crash.'",
          "key_manifestations": [
            "Littlewood, B., & Strigini, L. (1993). 'Validation of Ultra-High Dependability for Software-based Systems'",
            "Lutz, R. R. (1993). 'Targeting Safety-Related Errors During Software Requirements Analysis'",
            "Leveson, N. G., & Turner, C. S. (1993). 'An Investigation of the Therac-25 Accidents' (The classic case study)",
            "Knight, J. C. (2002). 'Safety Critical Systems: Challenges and Directions' (Review of the 90s)"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Stasis. The 'Friendly AI' concept began to germinate in online mailing lists (Extropians). Yudkowsky started formulating the idea that value loading is hard. Technically invisible.",
          "key_manifestations": [
            "Yudkowsky, E. (2001). 'Creating Friendly AI' (Roots in late 90s discussions)",
            "Hibbard, B. (2001). 'Super-Intelligent Machines' (1998-99 context)",
            "Bostrom, N. (2002). 'Existential Risks' (Precursors)",
            "Joy, B. (2000). 'Why The Future Doesn't Need Us' (Public awareness of risk)"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Stasis. Safety remained 'Software Engineering.'",
          "key_manifestations": [
            "Storey, N. (1996). 'Safety-Critical Computer Systems'",
            "Rushby, J. (1994). 'Critical System Properties: Formal Verification and Architectural Protection'",
            "Neumann, P. G. (1995). 'Computer-Related Risks'",
            "Hutter, M. (2000). 'Universal Artificial Intelligence' (The theoretical model of a superintelligence)"
          ]
        },
        "2000": {
          "salience_share": 2,
          "description": "Singularity Institute (+1%). SIAI (now MIRI) was founded. The first dedicated organization to 'AI Safety.' They focused on 'Coherent Extrapolated Volition' (CEV). It was highly theoretical and disconnected from ML practice.",
          "key_manifestations": [
            "Yudkowsky, E. (2004). 'Coherent Extrapolated Volition'",
            "Bostrom, N. (2003). 'Ethical Issues in Advanced Artificial Intelligence'",
            "Yudkowsky, E. (2008). 'Artificial Intelligence as a Positive and Negative Factor in Global Risk'",
            "Hall, J. S. (2007). 'Beyond AI: Creating the Conscience of the Machine'"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis. Academic philosophy began to engage. 'Paperclip Maximizer' thought experiment (Bostrom 2003) illustrated 'Instrumental Convergence'\u2014an AI will destroy the world to make paperclips not because it hates us, but because we are made of atoms.",
          "key_manifestations": [
            "Bostrom, N. (2003). 'The Transhumanist FAQ' (Paperclip maximizer context)",
            "Omohundro, S. M. (2008). 'The Basic AI Drives' (2007 talks)",
            "Loosemore, R., & Goertzel, B. (2006). 'Why an Intelligence Explosion is Probable'",
            "Wallach, W., & Allen, C. (2008). 'Moral Machines'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Stasis. Safety was still 'blue sky.'",
          "key_manifestations": [
            "Yampolskiy, R. V. (2015). 'Artificial Superintelligence: A Futuristic Approach' (Reviewing the 2000s)",
            "Armstrong, S., et al. (2012). 'Thinking Inside the Box: Controlling and Using an Oracle AI' (Concepts forming)",
            "Dewey, D. (2011). 'Learning What to Value'",
            "Muehlhauser, L., & Helm, L. (2012). 'The Singularity and Machine Ethics'"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Stasis. Deep Learning arrived, but Safety people were still thinking about 'recursive self-improvement' of symbolic systems.",
          "key_manifestations": [
            "Yudkowsky, E. (2008). 'Levels of Organization in General Intelligence'",
            "Legg, S. (2008). 'Machine Super Intelligence'",
            "Goertzel, B., & Pennachin, C. (2007). 'Artificial General Intelligence'",
            "Wang, P. (2006). 'Rigid Flexibility: The Logic of Intelligence'"
          ]
        },
        "2008": {
          "salience_share": 2,
          "description": "Basic AI Drives (+0%). Omohundro formalized 'Instrumental Convergence.' Any goal implies subgoals: survive, acquire resources, improve self. This proved Safety wasn't just about 'Evil AI,' but 'Competent AI.'",
          "key_manifestations": [
            "Omohundro, S. M. (2008). 'The Basic AI Drives'",
            "Yudkowsky, E. (2011). 'Complex Value Systems are Required to Realize Valuable Futures'",
            "Chalmers, D. J. (2010). 'The Singularity: A Philosophical Analysis'",
            "Sandberg, A., & Bostrom, N. (2008). 'Whole Brain Emulation'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "Superintelligence Pre-History (+1%). Bostrom's book (2014) was being written. The community grew. Machine Learning researchers started to listen, realizing DL was scaling fast. 'Adversarial Examples' (2013) were the first 'technical' safety problem: Neural Nets are hallucinating.",
          "key_manifestations": [
            "Szegedy, C., et al. (2013). 'Intriguing Properties of Neural Networks' (Adversarial Examples)",
            "Biggio, B., et al. (2013). 'Evasion Attacks against Machine Learning at Test Time'",
            "Muehlhauser, L. (2013). 'Friendly AI'",
            "Soares, N., & Fallenstein, B. (2014). 'Aligning Superintelligence with Human Interests'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Superintelligence (+1%). Bostrom's book published. It framed the 'Control Problem' globally. Elon Musk and Stephen Hawking read it and sounded the alarm. This brought funding (FLI) and mainstream attention.",
          "key_manifestations": [
            "Bostrom, N. (2014). 'Superintelligence: Paths, Dangers, Strategies'",
            "Russell, S. (2014). 'Of Myths and Moonshine'",
            "Steinhardt, J., et al. (2017). 'Unsolved Problems in ML Safety' (Roots in 2014 discussions)",
            "Goodfellow, I., et al. (2014). 'Explaining and Harnessing Adversarial Examples'"
          ]
        },
        "2014": {
          "salience_share": 8,
          "description": "Concrete Problems (+4%). Amodei, Olah, Steinhardt (Google Brain/OpenAI) published 'Concrete Problems in AI Safety.' This was the pivot. Instead of 'God AI,' they talked about 'Reward Hacking,' 'Safe Exploration,' 'Robustness.' It translated Philosophy into Math. Safety became an ML subfield.",
          "key_manifestations": [
            "Amodei, D., et al. (2016). 'Concrete Problems in AI Safety'",
            "Taylor, J., et al. (2016). 'Alignment for Advanced Machine Learning Systems'",
            "Hadfield-Menell, D., et al. (2016). 'Cooperative Inverse Reinforcement Learning' (CIRL)",
            "Leike, J., et al. (2017). 'AI Safety Gridworlds'"
          ]
        },
        "2016": {
          "salience_share": 12,
          "description": "Specification Gaming (+4%). DeepMind demonstrated agents 'gaming' rewards (e.g., a boat spinning in circles to get points). This proved Reward Hacking was real. 'Inverse Reward Design' and 'Debate' were proposed as solutions.",
          "key_manifestations": [
            "Amodei, D., & Clark, J. (2016). 'Faulty Reward Functions in the Wild'",
            "Irving, G., et al. (2018). 'AI Safety via Debate'",
            "Christiano, P. F., et al. (2017). 'Deep Reinforcement Learning from Human Preferences' (The technical solution to alignment: RLHF)",
            "Krakovna, V., et al. (2020). 'Specification Gaming: The Flip Side of AI Ingenuity' (List compilation)"
          ]
        },
        "2018": {
          "salience_share": 15,
          "description": "Interpretability & Mesodenial (+3%). Olah (Distill) launched 'Circuits'\u2014trying to read the neural net's mind. The concern shifted to 'Mesa-Optimization' (Hubinger): Does the inner model have a different goal than the outer loop? 'Inner Alignment' vs 'Outer Alignment.'",
          "key_manifestations": [
            "Hubinger, E., et al. (2019). 'Risks from Learned Optimization in Advanced Machine Learning Systems' (Mesa-optimization)",
            "Olah, C., et al. (2020). 'Zoom In: An Introduction to Circuits'",
            "Hendrycks, D., & Dietterich, T. (2019). 'Benchmarking Neural Network Robustness to Common Corruptions and Perturbations'",
            "Russell, S. (2019). 'Human Compatible'"
          ]
        },
        "2020": {
          "salience_share": 25,
          "description": "LLM Alignment (+10%). GPT-3 scared people. It was toxic and deceptive. The field rushed to apply RLHF (Christiano 2017) to LLMs. 'Alignment' became the primary constraint on product release. Anthropic was founded on Safety principles (Constitutional AI).",
          "key_manifestations": [
            "Askell, A., et al. (2021). 'A General Language Assistant as a Laboratory for Alignment'",
            "Bai, Y., et al. (2022). 'Constitutional AI: Harmlessness from AI Feedback'",
            "Ouyang, L., et al. (2022). 'Training Language Models to Follow Instructions with Human Feedback'",
            "Bender, E. M., et al. (2021). 'On the Dangers of Stochastic Parrots' (Ethics/Bias branch of safety)"
          ]
        },
        "2022": {
          "salience_share": 35,
          "description": "Societal Impact & X-Risk (+10%). ChatGPT mainstreamed the risk. The 'Pause Letter' (2023). The field split into 'Ethics' (Bias/Fairness now) vs 'Alignment' (X-Risk later). 'Mechanistic Interpretability' (Anthropic) tried to find 'Deception' neurons. 'Jailbreaking' became a sport.",
          "key_manifestations": [
            "OpenAI (2023). 'GPT-4 System Card' (Red teaming report)",
            "Wei, A., et al. (2023). 'Jailbroken: How Does LLM Safety Training Fail?'",
            "Zou, A., et al. (2023). 'Universal and Transferable Adversarial Attacks on Aligned Language Models'",
            "Carlsmith, J. (2022). 'Is Power-Seeking AI an Existential Risk?'"
          ]
        },
        "2024": {
          "salience_share": 45,
          "description": "Current trajectory is 'Superalignment' (+10%). How to align a model smarter than us? OpenAI's Superalignment team (now defunct/dispersed) proposed 'Weak-to-Strong Generalization.' Anthropic proposed 'Responsible Scaling Policies.' Safety is now a regulatory requirement (EU AI Act, US Executive Order). The 'Displacing Force' is the arms race; safety costs compute.",
          "key_manifestations": [
            "Burns, C., et al. (2023). 'Weak-to-Strong Generalization: Eliciting Strong Capabilities With Weak Supervision'",
            "Anthropic (2023). 'Responsible Scaling Policy'",
            "Casper, S., et al. (2023). 'Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback'",
            "Templeton, A., et al. (2024). 'Scaling Monosemanticity' (Reading the mind of the model)"
          ]
        }
      }
    },
    "26_algorithmic_game_theory": {
      "name": "Algorithmic Game Theory",
      "description": "This eigencluster represents the mathematics of strategic interaction\u2014where the outcome depends on the choices of multiple self-interested agents. It bridges Economics (Nash Equilibrium), Computer Science (Complexity), and AI (Multi-Agent Systems). Its trajectory evolved from the zero-sum minimax solvers of the 90s (Deep Blue), through the Counterfactual Regret Minimization (CFR) revolution that solved Poker in the 2010s, to the 'Generative' game theory of GANs, and finally to the cooperative/competitive dynamics of modern Agentic AI.",
      "trajectory": {
        "1990": {
          "salience_share": 4,
          "description": "The cluster was rooted in 'Minimax' search (+1%). For zero-sum perfect information games (Chess), the strategy was simply tree search (Alpha-Beta Pruning). The math was known (Von Neumann), but the computation was the bottleneck. In non-zero-sum games, the field was theoretical economics, with little intersection with AI implementation.",
          "key_manifestations": [
            "Campbell, M., et al. (1991). 'Deep Blue Prototype' (Applying minimax at scale)",
            "Fudenberg, D., & Tirole, J. (1991). 'Game Theory' (The standard text)",
            "Shoham, Y. (1993). 'Agent-Oriented Programming'",
            "Koller, D., & Megiddo, N. (1992). 'The Complexity of Two-Person Zero-Sum Games in Extensive Form'"
          ]
        },
        "1992": {
          "salience_share": 4,
          "description": "Stasis. TD-Gammon (Cluster 7) showed that learning could beat search in stochastic games, but Game Theory itself provided the framework for 'Evaluation.' The focus was on 'Bounded Rationality'\u2014how to play well when you can't compute the Nash Equilibrium.",
          "key_manifestations": [
            "Binmore, K. (1992). 'Fun and Games: A Text on Game Theory'",
            "Russell, S., & Wefald, E. (1991). 'Do the Right Thing' (Bounded optimality)",
            "Littman, M. L. (1994). 'Markov Games as a Framework for Multi-Agent Reinforcement Learning' (1993 work)",
            "Tesauro, G. (1994). 'TD-Gammon' (Self-play as a Nash convergence mechanism)"
          ]
        },
        "1994": {
          "salience_share": 5,
          "description": "Markov Games (+1%). Littman introduced Minimax-Q learning. This fused RL with Game Theory. Instead of maximizing expected reward, the agent maximized the *minimum* value the opponent could force. This was the foundational link between Learning and Games.",
          "key_manifestations": [
            "Littman, M. L. (1994). 'Markov Games as a Framework for Multi-Agent Reinforcement Learning'",
            "Osborne, M. J., & Rubinstein, A. (1994). 'A Course in Game Theory'",
            "Sandholm, T., & Lesser, V. (1995). 'Issues in Automated Negotiation and Electronic Commerce' (Mechanism design)",
            "Hu, J., & Wellman, M. P. (1998). 'Multiagent Reinforcement Learning: Theoretical Framework' (Roots in mid-90s)"
          ]
        },
        "1996": {
          "salience_share": 7,
          "description": "Deep Blue (+2%). The defeat of Kasparov was the triumph of Search-based Game Theory. However, it was a 'solved' type of game (perfect information). Imperfect information games (Poker) remained untouched because the 'Hidden State' made the game tree explode and Minimax inapplicable.",
          "key_manifestations": [
            "Campbell, M., et al. (2002). 'Deep Blue' (Retrospective)",
            "Koller, D., & Pfeffer, A. (1997). 'Representations and Solutions for Game-Theoretic Problems'",
            "Monderer, D., & Shapley, L. S. (1996). 'Potential Games'",
            "Rosenschein, J. S., & Zlotkin, G. (1994). 'Rules of Encounter'"
          ]
        },
        "1998": {
          "salience_share": 6,
          "description": "Mechanism Design (+-0%). The rise of the Internet led to 'Algorithmic Mechanism Design' (Nisan/Ronen). How to design auctions (Google AdSense) so that selfish agents reveal their true value. This was 'Reverse Game Theory'\u2014designing the game to get a specific Nash Equilibrium.",
          "key_manifestations": [
            "Nisan, N., & Ronen, A. (1999). 'Algorithmic Mechanism Design' (1998 work)",
            "Varian, H. R. (1995/1998). 'Economic Mechanism Design for Computerized Agents'",
            "Parkes, D. C. (1999). 'iBundle: An Efficient Ascending Price Bundle Auction'",
            "Sandholm, T. (1999). 'Automated Negotiation'"
          ]
        },
        "2000": {
          "salience_share": 6,
          "description": "Stasis. The 'Nisan-Ronen' era of Algo Econ. AI researchers focused on ad auctions. In core AI, game theory was used for 'Multi-Agent Systems' (MAS), but progress on solving large games was slow.",
          "key_manifestations": [
            "Nisan, N., et al. (2007). 'Algorithmic Game Theory' (Book codifying the early 2000s)",
            "Shoham, Y., et al. (2003). 'Multi-Agent Reinforcement Learning: A Critical Survey'",
            "Greenwald, A., & Hall, K. (2003). 'Correlated-Q Learning'",
            "Bowling, M., & Veloso, M. (2001). 'Rational and Convergent Learning in Stochastic Games'"
          ]
        },
        "2002": {
          "salience_share": 7,
          "description": "Correlated Equilibrium (+1%). Researchers moved beyond Nash to Correlated Equilibrium (CE) and Regret Minimization. Hart & Mas-Colell proved that simple regret matching converges to CE. This simple algorithm became the engine for solving Poker years later.",
          "key_manifestations": [
            "Hart, S., & Mas-Colell, A. (2000/2003). 'A Simple Adaptive Procedure Leading to Correlated Equilibrium'",
            "Blum, A., & Mansour, Y. (2005). 'From External to Internal Regret'",
            "Cesa-Bianchi, N., & Lugosi, G. (2003). 'Potential-Based Algorithms for On-Line Game Playing'",
            "Zinkevich, M. (2003). 'Online Convex Programming and Generalized Infinitesimal Gradient Ascent' (Regret bounds)"
          ]
        },
        "2004": {
          "salience_share": 6,
          "description": "Stasis. The field was waiting for a scalable algorithm for imperfect information. Abstracting games (grouping similar poker hands) was the main technique, but it was lossy.",
          "key_manifestations": [
            "Gilpin, A., & Sandholm, T. (2006). 'A Competitive Texas Hold'em Poker Player via Automated Abstraction and Real-Time Equilibrium Computation'",
            "Billings, D., et al. (2004). 'Approximating Game-Theoretic Optimal Strategies for Full-scale Poker'",
            "Roughgarden, T. (2005). 'Selfish Routing and the Price of Anarchy'",
            "Wellman, M. P. (2006). 'Methods for Empirical Game-Theoretic Analysis'"
          ]
        },
        "2006": {
          "salience_share": 8,
          "description": "CFR Revolution (+2%). Zinkevich et al. introduced 'Counterfactual Regret Minimization' (CFR). This was the breakthrough. It allowed solving massive imperfect information games by iteratively minimizing regret at each information set. It proved that you don't need to estimate the opponent's state, just your own regret.",
          "key_manifestations": [
            "Zinkevich, M., et al. (2007). 'Regret Minimization in Games with Incomplete Information' (CFR)",
            "Gilpin, A., et al. (2007). 'Gradient-based Algorithms for Finding Nash Equilibria in Extensive Form Games'",
            "Roughgarden, T. (2007). 'Introduction to Algorithmic Game Theory'",
            "Johanson, M., et al. (2011). 'Accelerating Best Response Calculation in Extensive Games' (Refining CFR)"
          ]
        },
        "2008": {
          "salience_share": 8,
          "description": "Optimization of CFR (+0%). The University of Alberta group (Bowling, Burch, Johanson) optimized CFR. They solved Checkers (Schaeffer 2007 - though via search) and began tackling Heads-Up Limit Poker. The cluster was dominating the 'Computer Poker Competition.'",
          "key_manifestations": [
            "Schaeffer, J., et al. (2007). 'Checkers is Solved'",
            "Johanson, M., et al. (2012). 'Efficient Nash Equilibrium Approximation through Monte Carlo Counterfactual Regret Minimization'",
            "Lanctot, M., et al. (2009). 'Monte Carlo Sampling for Regret Minimization in Extensive Games'",
            "Sandholm, T. (2010). 'The State of Solving Large Incomplete-Information Games'"
          ]
        },
        "2010": {
          "salience_share": 9,
          "description": "Stasis/Scaling. The field was purely symbolic/numeric. Deep Learning hadn't touched it. The poker bots were massive lookup tables of regret values. The 'Displacing Force' was the memory limit; you couldn't store the table for No-Limit Poker.",
          "key_manifestations": [
            "Bowling, M., et al. (2015). 'Heads-Up Limit Hold'em Poker is Solved' (2010-2014 work)",
            "Ganzfried, S., & Sandholm, T. (2011). 'Endgame Solving in Large Imperfect-Information Games'",
            "Bard, N., et al. (2013). 'Online Implicit Agent Modelling'",
            "Risk, N., & Szafron, D. (2010). 'Using Counterfactual Regret Minimization to Create Competitive Multiplayer Poker Agents'"
          ]
        },
        "2012": {
          "salience_share": 10,
          "description": "Deep Learning Intersection (+1%). Researchers began replacing the Regret Table with a Neural Network. This was 'Deep CFR.' It allowed generalization across hands. This was the precursor to solving No-Limit.",
          "key_manifestations": [
            "Heinrich, J., & Silver, D. (2016). 'Deep Reinforcement Learning from Self-Play in Imperfect-Information Games' (NFSP - 2015 work)",
            "Waugh, K., et al. (2015). 'Solving Games with Functional Regret Estimation'",
            "Lanctot, M., et al. (2017). 'A Unified Game-Theoretic Approach to Multiagent Reinforcement Learning'",
            "Yakovenko, N., et al. (2016). 'Poker-CNN: A Pattern Learning Strategy for Texas Hold 'em Poker'"
          ]
        },
        "2014": {
          "salience_share": 25,
          "description": "GANs as Game Theory (+15%). Goodfellow's GAN (Cluster 9) formulated generation as a two-player minimax game ($min_G max_D V(D, G)$). Suddenly, Game Theory was the engine of Computer Vision. The instability of GAN training was identified as the failure to find a Nash Equilibrium in non-convex landscapes.",
          "key_manifestations": [
            "Goodfellow, I., et al. (2014). 'Generative Adversarial Nets'",
            "Arora, S., et al. (2017). 'Generalization and Equilibrium in Generative Adversarial Nets'",
            "Heusel, M., et al. (2017). 'GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium'",
            "Daskalakis, C., et al. (2018). 'Training GANs with Optimism'"
          ]
        },
        "2016": {
          "salience_share": 30,
          "description": "Poker Solved (+5%). DeepStack and Libratus solved Heads-Up No-Limit Texas Hold'em. They combined CFR (for strategy), Deep Learning (for value approximation), and 'Endgame Solving' (nested search). This was a monumental achievement for AGT.",
          "key_manifestations": [
            "Morav\u010d\u00edk, M., et al. (2017). 'DeepStack: Expert-Level Artificial Intelligence in Heads-Up No-Limit Poker'",
            "Brown, N., & Sandholm, T. (2018). 'Superhuman AI for Heads-Up No-Limit Poker: Libratus'",
            "Brown, N., et al. (2019). 'Superhuman AI for Multiplayer Poker' (Pluribus)",
            "Heinrich, J., et al. (2016). 'Deep Reinforcement Learning from Self-Play in Imperfect-Information Games'"
          ]
        },
        "2018": {
          "salience_share": 28,
          "description": "AlphaStar League (+2%). DeepMind's AlphaStar used 'The League'\u2014a population of agents trained to exploit each other. This is 'Empirical Game Theoretic Analysis' at scale. It prevents cycling (Rock-Paper-Scissors loops) by forcing the agent to beat all previous strategies.",
          "key_manifestations": [
            "Vinyals, O., et al. (2019). 'Grandmaster Level in StarCraft II using Multi-Agent Reinforcement Learning'",
            "Balduzzi, D., et al. (2018). 'The Mechanics of n-Player Differentiable Games'",
            "Czarnecki, W. M., et al. (2020). 'Real World Games Look Like Spinning Tops'",
            "Omidshafiei, S., et al. (2019). '\u03b1-Rank: Multi-Agent Evaluation by Evolution'"
          ]
        },
        "2020": {
          "salience_share": 25,
          "description": "Stasis/Integration. Game Theory became a lens for 'Adversarial Robustness' (Attacker vs Defender). Also 'Cooperative AI' (Hanabi)\u2014learning to cooperate with a human without prior coordination (Zero-Shot Coordination).",
          "key_manifestations": [
            "Bard, N., et al. (2020). 'The Hanabi Challenge: A New Frontier for AI Research'",
            "Hu, H., et al. (2020). 'Other-Play for Zero-Shot Coordination'",
            "Dafoe, A., et al. (2020). 'Open Problems in Cooperative AI'",
            "Perolat, J., et al. (2022). 'Mastering the Game of Stratego with Model-Free Multiagent Reinforcement Learning'"
          ]
        },
        "2022": {
          "salience_share": 22,
          "description": "Diplomacy (+2%). Cicero (Meta) solved 'Diplomacy,' a game requiring negotiation and trust. It combined a Strategic Planner (CFR-like) with an LLM (for dialogue). The LLM was conditioned to generate text consistent with the Game Theoretic plan. This was the first major 'Neuro-Symbolic Game Theory' agent.",
          "key_manifestations": [
            "Meta Fundamental AI Research Diplomacy Team (2022). 'Human-Level Play in the Game of Diplomacy Combining Language Models with Strategic Reasoning'",
            "Bakhtin, A., et al. (2022). 'Mastering the Game of No-Press Diplomacy via Human-Regularized Reinforcement Learning'",
            "Kram\u00e1r, J., et al. (2022). 'Negotiation with Large Language Models'",
            "Sokota, S., et al. (2023). 'A Unified Approach to Reinforcement Learning, Quantal Response Equilibria, and Two-Player Zero-Sum Games'"
          ]
        },
        "2024": {
          "salience_share": 20,
          "description": "Agentic Dynamics (-2%). The focus is on 'LLM Agents.' While Game Theory describes their interaction, current research is empirical ('put them in a sandbox and watch'). Theoretical work is struggling to model the high-dimensional strategy space of natural language conversation.",
          "key_manifestations": [
            "Park, J. S., et al. (2023). 'Generative Agents: Interactive Simulacra of Human Behavior'",
            "Li, X., et al. (2024). 'Game-Theoretic Analysis of Hallucination in Large Language Models'",
            "Zhang, H., et al. (2024). 'Steering Language Models with Game Theoretic Mechanism Design'",
            "OpenAI (2024). 'Prosocial Agents' (Internal alignment research)"
          ]
        }
      }
    },
    "27_differential_privacy_secure_learning": {
      "name": "Differential Privacy & Secure Learning",
      "description": "This eigencluster represents the 'Calculus of Privacy.' It addresses the fundamental tension between 'Learning' (generalizing from population data) and 'Privacy' (hiding individual data). Founded on Dwork's rigorous definition of Differential Privacy (DP), it evolved from database theory to a critical component of ML training (DP-SGD). It prevents 'Membership Inference Attacks'\u2014knowing if a specific person was in the training set\u2014which is crucial for training LLMs on sensitive data.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Database Anonymity (+0%). The era of 'k-anonymity' (Sweeney). The idea: 'If I remove names and blur zip codes, it's private.' This was heuristically sound but mathematically flawed. Re-identification attacks (using Netflix prize data or Voter rolls) later proved it failed. The variance was low because privacy wasn't seen as a math problem.",
          "key_manifestations": [
            "Sweeney, L. (2002). 'k-anonymity: A Model for Protecting Privacy' (1990s work context)",
            "Samarati, P., & Sweeney, L. (1998). 'Protecting Privacy when Disclosing Information: k-Anonymity and Its Enforcement through Generalization and Suppression'",
            "Agrawal, R., & Srikant, R. (2000). 'Privacy-Preserving Data Mining'",
            "Denning, D. E. (1982/1990). 'Cryptography and Data Security' (Legacy context)"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. Privacy was Cryptography (RSA/AES), not Statistics. Secure Multi-Party Computation (SMPC) was known (Yao's Millionaires' Problem) but too slow for data mining.",
          "key_manifestations": [
            "Goldreich, O., et al. (1987/1992). 'How to Play any Mental Game'",
            "Chaum, D. (1988/1992). 'The Dining Cryptographers Problem'",
            "Brassard, G., et al. (1988). 'Minimum Disclosure Proofs of Knowledge'",
            "Franklin, M., & Yung, M. (1992). 'Communication Complexity of Secure Computation'"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Stasis. The 'War on Crypto' (Clipper Chip) dominated the privacy conversation. Statistical privacy was dormant.",
          "key_manifestations": [
            "Diffie, W., & Landau, S. (1998). 'Privacy on the Line' (Policy context)",
            "Blaze, M. (1994). 'Protocol Failure in the Escrowed Encryption Standard'",
            "Schneier, B. (1994). 'Applied Cryptography'",
            "Menezes, A. J., et al. (1996). 'Handbook of Applied Cryptography'"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Stasis. Re-identification attacks began to show the cracks in 'anonymization.'",
          "key_manifestations": [
            "Sweeney, L. (1997). 'Weaving Technology and Policy Together to Maintain Confidentiality'",
            "Fuller, R. R. (1996). 'Privacy and Data Mining'",
            "Muralidhar, K., et al. (1999). 'A General Additive Data Perturbation Method for Database Security'",
            "Duncan, G. T., & Pearson, R. W. (1991/1996). 'Enhancing Access to Microdata while Protecting Confidentiality'"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Stasis. Randomized Response (Warner 1965 technique) was revisited for data mining. This was the precursor to Local DP: flip a coin before answering 'Did you cheat?'.",
          "key_manifestations": [
            "Agrawal, R., & Srikant, R. (2000). 'Privacy-Preserving Data Mining' (Randomized response application)",
            "Evfimievski, A., et al. (2002). 'Privacy Preserving Association Rule Mining'",
            "Clifton, C., & Marks, D. (1996). 'Security and Privacy Implications of Data Mining'",
            "Lindell, Y., & Pinkas, B. (2000). 'Privacy Preserving Data Mining' (SMPC approach)"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Dinur-Nissim Attack (+1%). Dinur and Nissim proved a fundamental theorem: You cannot release accurate aggregate statistics about a database without revealing individual data, if the queries are unlimited. This 'Impossibility Result' destroyed the 'Anonymization' dream and necessitated a new definition.",
          "key_manifestations": [
            "Dinur, I., & Nissim, K. (2003). 'Revealing Information while Preserving Privacy' (2001-02 work)",
            "Dwork, C., & Nissim, K. (2004). 'Privacy-Preserving Datamining on Vertically Partitioned Databases'",
            "Chawla, S., et al. (2005). 'On the Utility of Privacy-Preserving Histograms'",
            "Sweeney, L. (2002). 'k-Anonymity'"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis/Incubation. Dwork, McSherry, Nissim, and Smith were collaborating at Microsoft Research. They were formulating the $\\epsilon$-indistinguishability metric. The goal: The output distribution should not change much if one person is removed.",
          "key_manifestations": [
            "Dwork, C. (2006). 'Differential Privacy' (The seminal paper - 2002-2005 context)",
            "Blum, A., et al. (2005). 'Practical Privacy: The SuLQ Framework'",
            "Chawla, S., et al. (2005). 'Toward Privacy in Public Databases'",
            "Nissim, K., et al. (2007). 'Smooth Sensitivity and Sampling in Private Data Analysis'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Stasis. The Netflix Prize (2006 launch) was about to happen. The release of the dataset would later become the canonical example of failed anonymization (Narayanan/Shmatikov).",
          "key_manifestations": [
            "Narayanan, A., & Shmatikov, V. (2008). 'Robust De-anonymization of Large Sparse Datasets' (Analysis of Netflix data)",
            "Bennett, J., & Lanning, S. (2007). 'The Netflix Prize'",
            "Frankowski, D., et al. (2006). 'You Are What You Say: Privacy Risks of Public Mentions'",
            "Dwork, C. (2008). 'Differential Privacy: A Survey of Results'"
          ]
        },
        "2006": {
          "salience_share": 5,
          "description": "The Definition of Differential Privacy (+3%). Dwork et al. published the definition. $P(M(D) \\in S) \\le e^\\epsilon P(M(D') \\in S)$. This provided a rigorous 'Privacy Budget' ($\\,epsilon$). It changed the field from heuristics to math. The 'Laplace Mechanism' (adding noise) became the standard tool.",
          "key_manifestations": [
            "Dwork, C., McSherry, F., Nissim, K., & Smith, A. (2006). 'Calibrating Noise to Sensitivity in Private Data Analysis'",
            "Dwork, C. (2006). 'Differential Privacy'",
            "McSherry, F., & Talwar, K. (2007). 'Mechanism Design via Differential Privacy' (Exponential Mechanism)",
            "Machanavajjhala, A., et al. (2007). 'Diversity: Privacy Beyond k-Anonymity'"
          ]
        },
        "2008": {
          "salience_share": 4,
          "description": "Theoretical Expansion (+0%). The field explored 'Composition Theorems' (what happens if I run 10 queries?). They found privacy degrades linearly (or with sqrt via Advanced Composition). This was depressing for ML: training a model takes thousands of steps (queries). DP seemed impossible for ML.",
          "key_manifestations": [
            "Dwork, C., et al. (2010). 'Boosting and Differential Privacy' (2008 work)",
            "Kasiviswanathan, S. P., et al. (2011). 'What Can We Learn Privately?' (PAC learning + DP)",
            "Chaudhuri, K., & Monteleone, C. (2009). 'Privacy-Preserving Logistic Regression'",
            "Dwork, C., & Lei, J. (2009). 'Differential Privacy and Robust Statistics'"
          ]
        },
        "2010": {
          "salience_share": 4,
          "description": "Objective Perturbation (+1%). Chaudhuri et al. showed you could add noise to the *objective function* of a convex learner (like SVM) rather than the output. This was more efficient. DP-ML began to look feasible for simple models.",
          "key_manifestations": [
            "Chaudhuri, K., et al. (2011). 'Differentially Private Empirical Risk Minimization'",
            "Rubinstein, B. I. P., et al. (2012). 'Learning in a Large Function Space: Privacy-Preserving Mechanisms for SVM Learning'",
            "Kifer, D., & Machanavajjhala, A. (2011). 'No Free Lunch in Data Privacy'",
            "Jain, P., et al. (2012). 'Differentially Private Online Learning'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Stasis. Deep Learning exploded. DP researchers looked at the massive parameter counts of AlexNet and despaired. The amount of noise needed to hide one image in a 60M parameter model seemed to destroy all utility. The 'Curse of Dimensionality' applied to Privacy.",
          "key_manifestations": [
            "Song, S., et al. (2013). 'Stochastic Gradient Descent with Differentially Private Updates' (Early attempt)",
            "Dwork, C., & Roth, A. (2014). 'The Algorithmic Foundations of Differential Privacy' (Textbook)",
            "Bassily, R., et al. (2014). 'Private Empirical Risk Minimization: Efficient Algorithms and Tight Error Bounds'",
            "Hardt, M., & Roth, A. (2012). 'Beating Randomized Response on the Flip of a Coin'"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "Google RAPPOR (+1%). Google deployed 'RAPPOR' (Randomized Aggregatable Privacy-Preserving Ordinal Response) in Chrome. This was 'Local DP' at scale. It collected stats on homepage settings without knowing any single user's setting. It validated DP as an industrial reality.",
          "key_manifestations": [
            "Erlingsson, \u00da., et al. (2014). 'RAPPOR: Randomized Aggregatable Privacy-Preserving Ordinal Response'",
            "Apple (2016). 'Differential Privacy in iOS 10' (WWDC Announcement)",
            "Shokri, R., & Shmatikov, V. (2015). 'Privacy-Preserving Deep Learning' (Distributed training)",
            "Fredrikson, M., et al. (2015). 'Model Inversion Attacks that Exploit Confidence Information and Basic Countermeasures'"
          ]
        },
        "2016": {
          "salience_share": 8,
          "description": "DP-SGD (+3%). Abadi (Google) et al. published 'Deep Learning with Differential Privacy.' They introduced the 'Moments Accountant,' a tighter composition bound. It allowed training Deep Nets with SGD by clipping gradients and adding noise. The accuracy cost was manageable. This is the foundation of modern Private AI.",
          "key_manifestations": [
            "Abadi, M., et al. (2016). 'Deep Learning with Differential Privacy'",
            "Papernot, N., et al. (2017). 'Semi-supervised Knowledge Transfer for Deep Learning from Private Training Data' (PATE)",
            "Shokri, R., et al. (2017). 'Membership Inference Attacks Against Machine Learning Models'",
            "McMahan, H. B., et al. (2018). 'Learning Differentially Private Recurrent Language Models'"
          ]
        },
        "2018": {
          "salience_share": 10,
          "description": "Federated Learning & DP (+2%). FL (training on phones) needs DP to guarantee the server can't reconstruct the user's data from the gradient update. The combination (FL + DP) became the gold standard for mobile AI (Gboard).",
          "key_manifestations": [
            "Geyer, R. C., et al. (2017). 'Differentially Private Federated Learning: A Client Level Perspective'",
            "Bonawitz, K., et al. (2017). 'Practical Secure Aggregation for Privacy-Preserving Machine Learning'",
            "Mironov, I. (2017). 'R\u00e9nyi Differential Privacy' (New relaxation standard)",
            "Thakkar, O., et al. (2019). 'Differentially Private Learning with Adaptive Clipping'"
          ]
        },
        "2020": {
          "salience_share": 12,
          "description": "Large Model Privacy (+2%). Researchers found that large models (GPT-2) memorize training data verbatim (Carlini et al.). 'Extraction Attacks' became real. DP was no longer optional; it was the only defense against extraction. However, training GPT-3 with DP was too expensive.",
          "key_manifestations": [
            "Carlini, N., et al. (2021). 'Extracting Training Data from Large Language Models'",
            "Brown, G., et al. (2021). 'At What Cost? The Challenge of Training Large Language Models with Differential Privacy'",
            "Li, X., et al. (2022). 'Large Language Models Can Be Strong Differentially Private Learners'",
            "Subramani, S., et al. (2021). 'Enabling Fast Differentially Private SGD via Just-in-Time Compilation'"
          ]
        },
        "2022": {
          "salience_share": 14,
          "description": "DP-Fine Tuning (+2%). Instead of DP-Pretraining (hard), do DP-Finetuning (easy). Using LoRA + DP-SGD allowed adapting LLMs to private corporate data with strong guarantees. This became a major commercial use case (Microsoft/Azure OpenAI).",
          "key_manifestations": [
            "Yu, D., et al. (2022). 'Differentially Private Fine-tuning of Language Models'",
            "Li, X., et al. (2022). 'When Does Differentially Private Learning Not Suffer in Privacy?'",
            "Mehta, H., et al. (2022). 'Large Scale Transfer Learning for Differentially Private Image Classification'",
            "De, S., et al. (2022). 'Unlock the Capabilities of Differential Privacy Learning with High-Quality Public Data'"
          ]
        },
        "2024": {
          "salience_share": 15,
          "description": "Machine Unlearning (+1%). 'Right to be Forgotten.' Can we remove a user's data from a trained model without retraining? DP provides the theoretical certificate: if the model was trained with DP, the user's influence is bounded, so 'unlearning' is effectively pre-guaranteed (or easier).",
          "key_manifestations": [
            "Bourtoule, L., et al. (2021/2024). 'Machine Unlearning'",
            "Sekhari, A., et al. (2023). 'Remember What You Want to Forget: Algorithms for Machine Unlearning'",
            "Sander, T., et al. (2024). 'Tanagra: A Privacy-Preserving LLM Inference Stack'",
            "Google (2024). 'Privacy Sandbox' (Deploying DP in ad-tech)"
          ]
        }
      }
    },
    "28_matrix_factorization_collaborative_filtering": {
      "name": "Matrix Factorization & Collaborative Filtering",
      "description": "This eigencluster represents the mathematics of 'Taste'\u2014predicting user preferences by filling in the missing entries of a massive, sparse User-Item matrix. It is the algorithmic engine of the Attention Economy (Netflix, Amazon, TikTok). The trajectory moves from the heuristic Nearest Neighbors of the 90s, to the Singular Value Decomposition (SVD) dominance during the Netflix Prize, to the Factorization Machines of the 2010s, and finally to the massive 'Two-Tower' Deep Learning models that govern modern feed algorithms.",
      "trajectory": {
        "1990": {
          "salience_share": 5,
          "description": "The cluster began with 'GroupLens' (+1%). The algorithm was 'User-User Collaborative Filtering' (k-NN). To recommend a movie to Alice, find Bob who liked similar movies, and recommend what Bob liked. It was purely memory-based; no model was trained. The 'Latent Space' did not exist yet; calculation was done on the raw sparse vectors.",
          "key_manifestations": [
            "Resnick, P., et al. (1994). 'GroupLens: An Open Architecture for Collaborative Filtering of Netnews'",
            "Shardanand, U., & Maes, P. (1995). 'Social Information Filtering: Algorithms for Automating 'Word of Mouth''",
            "Hill, W., et al. (1995). 'Recommending and Evaluating Choices in a Virtual Community of Use'",
            "Goldberg, D., et al. (1992). 'Using Collaborative Filtering to Weave an Information Tapestry'"
          ]
        },
        "1992": {
          "salience_share": 6,
          "description": "Stasis. The focus was on scaling k-NN. The 'Displacing Force' was the $O(U^2)$ complexity of finding neighbors. SVD was known (LSA in Cluster 15) but rarely applied to user ratings due to missing data issues (standard SVD requires a full matrix).",
          "key_manifestations": [
            "Konstan, J. A., et al. (1997). 'GroupLens: Applying Collaborative Filtering to Usenet News' (1993-1996 work)",
            "Resnick, P., & Varian, H. R. (1997). 'Recommender Systems' (CACM Special Issue)",
            "Balabanovi\u0107, M., & Shoham, Y. (1997). 'Fab: Content-Based, Collaborative Recommendation'",
            "Kautz, H., et al. (1997). 'Referral Web: Combining Social Networks and Collaborative Filtering'"
          ]
        },
        "1994": {
          "salience_share": 8,
          "description": "Item-Based CF (+2%). Amazon and others realized that 'Items' are more stable than 'Users.' Instead of finding similar users, find similar items ('People who bought X also bought Y'). This allowed pre-computing the similarity matrix, enabling e-commerce scale. This was the dominant algorithm for a decade.",
          "key_manifestations": [
            "Sarwar, B., et al. (2001). 'Item-Based Collaborative Filtering Recommendation Algorithms' (Roots in late 90s industrial practice)",
            "Linden, G., et al. (2003). 'Amazon.com Recommendations: Item-to-Item Collaborative Filtering' (Retrospective on 1998 launch)",
            "Breese, J. S., et al. (1998). 'Empirical Analysis of Predictive Algorithms for Collaborative Filtering'",
            "Aggarwal, C. C., et al. (1999). 'A Framework for the Analysis of Collaborating System'"
          ]
        },
        "1996": {
          "salience_share": 8,
          "description": "Stasis. 'Content-Based' filtering (using TF-IDF of movie descriptions) competed with Collaborative Filtering. Hybrid systems emerged. But the core math remained 'Correlation Coefficients' (Pearson).",
          "key_manifestations": [
            "Basu, C., et al. (1998). 'Recommendation as Classification: Using Social and Content-Based Information in Recommendation'",
            "Pazzani, M. J. (1999). 'A Framework for Collaborative, Content-Based and Demographic Filtering'",
            "Ungar, L. H., & Foster, D. P. (1998). 'Clustering Methods for Collaborative Filtering'",
            "Billsus, D., & Pazzani, M. J. (1998). 'Learning Collaborative Information Filters'"
          ]
        },
        "1998": {
          "salience_share": 10,
          "description": "Latent Factors (+2%). Researchers began using SVD for dimensionality reduction on the rating matrix. This mapped users and items to a shared 'Latent Space.' If User Vector $\\cdot$ Item Vector is high, recommend it. This was the birth of 'Matrix Factorization' for RecSys.",
          "key_manifestations": [
            "Sarwar, B., et al. (2000). 'Application of Dimensionality Reduction in Recommender System - A Case Study' (SVD approach)",
            "Hofmann, T. (2003). 'Collaborative Filtering via Gaussian Probabilistic Latent Semantic Analysis' (1999 work)",
            "Marlin, B. (2003). 'Modeling User Rating Profiles For Collaborative Filtering'",
            "Canny, J. (2002). 'Collaborative Filtering with Privacy via Factor Analysis'"
          ]
        },
        "2000": {
          "salience_share": 12,
          "description": "Stasis. The 'Cold Start' problem (new users/items) was the main research topic. Trust-based models (using social networks) were explored. The industry standard remained Item-to-Item CF.",
          "key_manifestations": [
            "Schein, A. I., et al. (2002). 'Methods and Metrics for Cold-Start Recommendations'",
            "Massa, P., & Avesani, P. (2004). 'Trust-Aware Collaborative Filtering for Recommender Systems'",
            "Herlocker, J. L., et al. (2004). 'Evaluating Collaborative Filtering Recommender Systems'",
            "Ziegler, C. N., et al. (2005). 'Improving Recommendation Lists Through Topic Diversification'"
          ]
        },
        "2002": {
          "salience_share": 12,
          "description": "Stasis. Logistic Regression (CTR prediction) began to be used in ad-tech. This was 'Feature-Based' recommendation, distinct from pure CF. The merging of the two (Hybrid) was the goal.",
          "key_manifestations": [
            "Richardson, M., et al. (2007). 'Predicting Clicks: Estimating the Click-Through Rate for New Ads' (Early 2000s ad-tech evolution)",
            "Burke, R. (2002). 'Hybrid Recommender Systems: Survey and Experiments'",
            "Adomavicius, G., & Tuzhilin, A. (2005). 'Toward the Next Generation of Recommender Systems: A Survey'",
            "Si, L., & Jin, R. (2003). 'Flexible Mixture Model for Collaborative Filtering'"
          ]
        },
        "2004": {
          "salience_share": 15,
          "description": "The Netflix Prize Launch (+3%). Netflix released the dataset (2006) but the prep began earlier. The goal: beat their algorithm (Cinematch) by 10% RMSE. This single contest galvanized the entire ML community to focus on Matrix Factorization. It was the 'ImageNet' of the 2000s.",
          "key_manifestations": [
            "Bennett, J., & Lanning, S. (2007). 'The Netflix Prize'",
            "Zhou, Y., et al. (2008). 'Large-Scale Parallel Collaborative Filtering for the Netflix Prize'",
            "Webb, B. (2006). 'Netflix Prize: Simon Funk's Blog Post' (The viral SVD tutorial)",
            "Salakhutdinov, R., & Mnih, A. (2007). 'Probabilistic Matrix Factorization'"
          ]
        },
        "2006": {
          "salience_share": 25,
          "description": "The SVD++ Era (+10%). Simon Funk and others developed 'Regularized SVD' (gradient descent on the matrix factors). Koren added 'Implicit Feedback' (SVD++). The cluster moved from linear algebra (exact SVD) to optimization (approximate SVD). The 'Latent Factors' were interpretable (genre, seriousness, etc.).",
          "key_manifestations": [
            "Koren, Y. (2008). 'Factorization Meets the Neighborhood: A Multifaceted Collaborative Filtering Model'",
            "Hu, Y., et al. (2008). 'Collaborative Filtering for Implicit Feedback Datasets' (The standard for clicks/views)",
            "Paterek, A. (2007). 'Improving Regularized Singular Value Decomposition for Collaborative Filtering'",
            "Bell, R. M., & Koren, Y. (2007). 'Scalable Collaborative Filtering with Jointly Derived Neighborhood Interpolation'"
          ]
        },
        "2008": {
          "salience_share": 30,
          "description": "Factorization Machines (+5%). Rendle introduced Factorization Machines (FM). This generalized Matrix Factorization to arbitrary features (Time, Tag, Context). It captured interaction terms ($w_{ij} x_i x_j$) via dot products. It became the workhorse of Kaggle competitions and Ad-Tech CTR prediction.",
          "key_manifestations": [
            "Rendle, S. (2010). 'Factorization Machines'",
            "Pan, R., et al. (2008). 'One-Class Collaborative Filtering'",
            "Koren, Y., et al. (2009). 'Matrix Factorization Techniques for Recommender Systems' (The definitive review)",
            "Agarwal, D., & Chen, B. C. (2009). 'Regression-Based Latent Factor Models'"
          ]
        },
        "2010": {
          "salience_share": 32,
          "description": "Learning to Rank (+2%). The objective function shifted from RMSE (Rating Prediction) to Ranking (BPR - Bayesian Personalized Ranking). Who cares if I predict 4.5 vs 4.2? I just need the order right. BPR became the standard loss for implicit feedback.",
          "key_manifestations": [
            "Rendle, S., et al. (2009). 'BPR: Bayesian Personalized Ranking from Implicit Feedback'",
            "Weston, J., et al. (2010). 'Large Scale Image Annotation: Learning to Rank with Joint Word-Image Embeddings'",
            "Shi, Y., et al. (2010). 'List-wise Learning to Rank with Matrix Factorization'",
            "Chapelle, O., & Li, Y. (2011). 'An Empirical Evaluation of Thompson Sampling' (Bandits entering RecSys)"
          ]
        },
        "2012": {
          "salience_share": 30,
          "description": "Stasis/Deep Learning Fails. Early attempts to use Deep Learning (RBMs) worked but were hard to tune compared to Matrix Factorization. The industry stuck to FMs and Logistic Regression. The 'Displacing Force' was latency; deep nets were too slow for real-time scoring of 1M items.",
          "key_manifestations": [
            "Salakhutdinov, R., et al. (2007/2012). 'Restricted Boltzmann Machines for Collaborative Filtering'",
            "Sedhain, S., et al. (2015). 'AutoRec: Autoencoders Meet Collaborative Filtering'",
            "Wang, H., et al. (2015). 'Collaborative Deep Learning for Recommender Systems'",
            "McMahan, H. B., et al. (2013). 'Ad Click Prediction: a View from the Trenches' (FTRL - sparse linear models dominating)"
          ]
        },
        "2014": {
          "salience_share": 35,
          "description": "Wide & Deep (+5%). Google introduced 'Wide & Deep.' Combine a Linear Model (Memorization of specific rules) with a Deep Network (Generalization via embeddings). This solved the specific vs general tradeoff. It marked the industrial takeover of Deep Learning in RecSys.",
          "key_manifestations": [
            "Cheng, H. T., et al. (2016). 'Wide & Deep Learning for Recommender Systems'",
            "He, X., et al. (2017). 'Neural Collaborative Filtering' (Replacing dot product with MLP)",
            "Covington, P., et al. (2016). 'Deep Neural Networks for YouTube Recommendations' (The Two-Tower paradigm)",
            "Guo, H., et al. (2017). 'DeepFM: A Factorization-Machine based Neural Network'"
          ]
        },
        "2016": {
          "salience_share": 40,
          "description": "Two-Tower Architectures (+5%). The standard pattern: User Tower produces vector U, Item Tower produces vector I. Score = $U \\cdot I$. This allowed 'Approximate Nearest Neighbor' (ANN) search (FAISS) for retrieval. The model could retrieve from millions of items in milliseconds. This is the architecture of the Feed.",
          "key_manifestations": [
            "Johnson, J., et al. (2017). 'Billion-Scale Similarity Search with GPUs' (FAISS - enabling the architecture)",
            "Hidasi, B., et al. (2016). 'Session-based Recommendations with Recurrent Neural Networks' (GRU4Rec)",
            "Zhou, G., et al. (2018). 'Deep Interest Network for Click-Through Rate Prediction' (Alibaba - Attention mechanism)",
            "Lian, J., et al. (2018). 'xDeepFM: Combining Explicit and Implicit Feature Interactions for Recommender Systems'"
          ]
        },
        "2018": {
          "salience_share": 45,
          "description": "Graph Neural Networks (+5%). 'PinSage' (Pinterest) showed that GCNs (Cluster 12) could aggregate information from the user-item graph better than simple embeddings. The interaction graph became a first-class citizen. Also, 'Sequential Recommendation' (SASRec) used Transformers to model the user's history sequence.",
          "key_manifestations": [
            "Ying, R., et al. (2018). 'Graph Convolutional Neural Networks for Web-Scale Recommender Systems' (PinSage)",
            "Kang, W. C., & McAuley, J. (2018). 'Self-Attentive Sequential Recommendation' (SASRec)",
            "Sun, F., et al. (2019). 'BERT4Rec: Sequential Recommendation with Bidirectional Encoder Representations'",
            "Wang, X., et al. (2019). 'Neural Graph Collaborative Filtering'"
          ]
        },
        "2020": {
          "salience_share": 50,
          "description": "DLRM & Embeddings (+5%). Facebook released DLRM (Deep Learning Recommendation Model). It emphasized the importance of massive embedding tables (Terabytes) requiring model parallelism. The bottleneck shifted from Compute to Memory Bandwidth. The cluster is now 'High Performance Computing.'",
          "key_manifestations": [
            "Naumov, M., et al. (2019). 'Deep Learning Recommendation Model for Personalization and Recommendation Systems' (DLRM)",
            "Zhao, Z., et al. (2019). 'Recommending what video to watch next: a multitask ranking system' (YouTube)",
            "Pi, Q., et al. (2020). 'Search-based User Interest Modeling with Lifelong Sequential Behavior Data'",
            "Chen, Q., et al. (2021). 'Behavior Sequence Transformer'"
          ]
        },
        "2022": {
          "salience_share": 55,
          "description": "Generative Recommendation (+5%). LLMs entering RecSys. Instead of predicting a score, ask the LLM: 'What should Alice watch?'. The LLM uses its world knowledge (Movie A is similar to Movie B) + User History. This solves the 'Cold Start' problem perfectly via semantic understanding.",
          "key_manifestations": [
            "Geng, S., et al. (2022). 'Recommendation as Language Processing (RLP): A Unified Pretrain, Personalized Prompt & Predict Paradigm' (P5)",
            "Wang, W., et al. (2023). 'Generative Recommendation: A Paradigm Shift'",
            "Cui, Z., et al. (2022). 'M6-Rec: Generative Pretrained Language Models for Recommender Systems'",
            "Li, J., et al. (2023). 'Text Is All You Need: Learning Language Representations for Sequential Recommendation'"
          ]
        },
        "2024": {
          "salience_share": 60,
          "description": "Current trajectory is 'Agentic RecSys' (+5%). The Recommender is no longer a passive filter; it is an active agent that explores the user's taste, asks clarifying questions, and plans a content diet. The merging of Cluster 7 (RL) and Cluster 28 (RecSys) is complete in platforms like TikTok/Reels.",
          "key_manifestations": [
            "Lin, J., et al. (2024). 'Agents in RecSys: A Survey'",
            "Achiam, J., et al. (2023). 'GPT-4 Technical Report' (Used for explanation/reasoning in RecSys)",
            "Google (2024). 'Generative Search Experience' (Blurring search and recommendation)",
            "Reference: 'The End of the Feed, The Rise of the Curator'"
          ]
        }
      }
    },
    "29_information_retrieval_ranking": {
      "name": "Information Retrieval & Ranking Dynamics",
      "description": "This eigencluster represents the science of 'Search'\u2014finding the needle in the haystack. It tracks the evolution from Boolean logic and TF-IDF (Term Frequency-Inverse Document Frequency) in the 90s, to the link-analysis revolution (PageRank) of the Google era, to the 'Learning to Rank' machine learning takeover, and finally to 'Dense Retrieval' and RAG (Retrieval Augmented Generation) where semantic vector similarity replaces keyword matching.",
      "trajectory": {
        "1990": {
          "salience_share": 10,
          "description": "The 'Boolean' Era (+2%). Search was 'Library Science.' Systems like LexisNexis used exact keyword matching ('cat AND dog AND NOT bird'). The ranking function was rudimentary. TF-IDF (Salton) was the state of the art for ranking relevance based on statistics. The 'Latent Space' was sparse and orthogonal.",
          "key_manifestations": [
            "Salton, G., & Buckley, C. (1988/1990). 'Term-Weighting Approaches in Automatic Text Retrieval' (TF-IDF refinement)",
            "Robertson, S. E., & Walker, S. (1994). 'Some Simple Effective Approximations to the 2-Poisson Model for Probabilistic Weighted Retrieval' (BM25 precursor)",
            "Harman, D. (1992). 'Relevance Feedback and Other Query Modification Techniques'",
            "Witten, I. H., et al. (1994). 'Managing Gigabytes' (The indexing bible)"
          ]
        },
        "1992": {
          "salience_share": 10,
          "description": "TREC Launch (+0%). The Text REtrieval Conference (TREC) began. This standardized evaluation (Precision/Recall). It cemented 'BM25' (Okapi) as the gold standard algorithm for keyword ranking. It was a probabilistic model that worked incredibly well and is still used today.",
          "key_manifestations": [
            "Robertson, S. E., et al. (1995). 'Okapi at TREC-3' (BM25 definition)",
            "Harman, D. (1993). 'Overview of the First Text REtrieval Conference (TREC-1)'",
            "Buckley, C., et al. (1994). 'Automatic Routing and Ad-hoc Retrieval Using SMART'",
            "Cooper, W. S. (1994). 'The Formalism of Probability Theory in IR'"
          ]
        },
        "1994": {
          "salience_share": 10,
          "description": "Web Search Crawlers (+0%). AltaVista, Lycos. They scaled TF-IDF to the web. The challenge was 'Spam.' Keyword stuffing worked because the algorithms only looked at the page content, not its authority. The 'Displacing Force' was the adversarial nature of the commercial web.",
          "key_manifestations": [
            "Pinkerton, B. (1994). 'Finding What People Want: Experiences with the WebCrawler'",
            "Mauldin, M. L. (1997). 'Lycos: Design Choices in an Internet Search Service' (1994-95 work)",
            "Bowman, C. M., et al. (1994). 'Harvest: A Scalable, Customizable Discovery and Access System'",
            "Marchiori, M. (1997). 'The Quest for Correct Information on the Web' (HyperSearch - PageRank precursor)"
          ]
        },
        "1996": {
          "salience_share": 12,
          "description": "Link Analysis Revolution (+2%). Brin & Page (PageRank) and Kleinberg (HITS). The realization: A link is a vote. The web is a graph (Cluster 12). Ranking shifted from 'Content' to 'Authority.' This solved the spam problem (temporarily) and created Google.",
          "key_manifestations": [
            "Brin, S., & Page, L. (1998). 'The Anatomy of a Large-Scale Hypertextual Web Search Engine' (1996-97 work)",
            "Kleinberg, J. M. (1999). 'Authoritative Sources in a Hyperlinked Environment' (HITS - 1997 work)",
            "Chakrabarti, S., et al. (1999). 'Mining the Web's Link Structure'",
            "Bharat, K., & Henzinger, M. R. (1998). 'Improved Algorithms for Topic Distillation in a Hyperlinked Environment'"
          ]
        },
        "1998": {
          "salience_share": 20,
          "description": "Google Dominance (+8%). The deployment of PageRank + Anchor Text. Using the text of the *link* to describe the target page allowed Google to index pages that had no text (e.g., images) and understand synonyms. This was the first semantic leap. The cluster was defined by 'Eigenvector Centrality.'",
          "key_manifestations": [
            "Page, L., et al. (1999). 'The PageRank Citation Ranking: Bringing Order to the Web'",
            "Haveliwala, T. H. (1999). 'Efficient Computation of PageRank'",
            "Henzinger, M. R., et al. (1999). 'Hyperlink Analysis for the Web'",
            "Craswell, N., et al. (2001). 'Effective Site Finding using Link Anchor Information'"
          ]
        },
        "2000": {
          "salience_share": 22,
          "description": "Topic-Sensitive PageRank (+2%). Refining the graph model. Not all links are equal. A link from a tech blog to a tech site is worth more than from a cooking blog. The 'Random Surfer' became biased.",
          "key_manifestations": [
            "Haveliwala, T. H. (2002). 'Topic-Sensitive PageRank'",
            "Jeh, G., & Widom, J. (2003). 'Scaling Personalized Web Search'",
            "Richardson, M., & Domingos, P. (2002). 'The Intelligent Surfer: Probabilistic Combination of Link and Content Information'",
            "Kamvar, S. D., et al. (2003). 'Extrapolation Methods for Accelerating PageRank Computations'"
          ]
        },
        "2002": {
          "salience_share": 25,
          "description": "Click-Through Data (+3%). Researchers realized user clicks are the ultimate relevance signal. 'Joachims' showed how to interpret clicks as pairwise preferences ($Doc A > Doc B$). This paved the way for 'Learning to Rank.' The loop was closed: User Behavior trains the Algorithm.",
          "key_manifestations": [
            "Joachims, T. (2002). 'Optimizing Search Engines using Clickthrough Data'",
            "Agichtein, E., et al. (2006). 'Improving Web Search Ranking by Incorporating User Behavior Information' (Roots in early 2000s)",
            "Radlinski, F., & Joachims, T. (2005). 'Query Chains: Learning to Rank from Implicit Feedback'",
            "Dupret, G., & Piwowarski, B. (2008). 'A User Browsing Model to Predict Search Engine Click Data'"
          ]
        },
        "2004": {
          "salience_share": 28,
          "description": "Learning to Rank (LTR) (+3%). Instead of hand-tuning the formula $0.3*PageRank + 0.7*TFIDF$, use an SVM or Neural Net to learn the weights. 'RankNet' (Burges) introduced the pairwise loss. This marked the transition from 'IR Theory' to 'Machine Learning.'",
          "key_manifestations": [
            "Burges, C., et al. (2005). 'Learning to Rank using Gradient Descent' (RankNet)",
            "Joachims, T. (2006). 'Training Linear SVMs in Linear Time' (SVM-Rank)",
            "Cao, Z., et al. (2007). 'Learning to Rank: From Pairwise Approach to Listwise Approach'",
            "Xu, J., & Li, H. (2007). 'AdaRank: A Boosting Algorithm for Information Retrieval'"
          ]
        },
        "2006": {
          "salience_share": 32,
          "description": "LambdaRank & LambdaMART (+4%). Burges et al. solved the metric mismatch. We care about NDCG (non-differentiable), but we optimize LogLoss. They defined 'Lambda' gradients that implicitly optimized NDCG. LambdaMART (Boosted Trees) became the SOTA for ranking for the next decade.",
          "key_manifestations": [
            "Burges, C. J. C., et al. (2007). 'Learning to Rank with Nonsmooth Cost Functions' (LambdaRank)",
            "Wu, Q., et al. (2010). 'Adapting Boosting for Information Retrieval Measures' (LambdaMART)",
            "Liu, T. Y. (2009). 'Learning to Rank for Information Retrieval' (The textbook)",
            "Chapelle, O., & Chang, Y. (2011). 'Yahoo! Learning to Rank Challenge Overview' (LambdaMART wins)"
          ]
        },
        "2008": {
          "salience_share": 32,
          "description": "Stasis/Semantic Gap. LTR optimized keyword matching, but didn't solve 'Vocabulary Mismatch' (Query: 'auto', Doc: 'car'). Latent Semantic Indexing (Cluster 15) was too slow. The industry relied on 'Query Expansion' and synonym tables.",
          "key_manifestations": [
            "Bai, B., et al. (2009). 'Supervised Semantic Indexing'",
            "Craswell, N., & Szummer, M. (2007). 'Random Walks on the Click Graph'",
            "Manning, C., et al. (2008). 'Introduction to Information Retrieval'",
            "Cao, H., et al. (2008). 'Context-Aware Query Suggestion by Mining Click-Through Data'"
          ]
        },
        "2010": {
          "salience_share": 35,
          "description": "Deep Learning for IR (DSSM) (+3%). Microsoft released DSSM (Deep Structured Semantic Models). It mapped Queries and Docs to a shared vector space using a Neural Net (with word hashing). Cosine similarity = Relevance. This was the birth of 'Dense Retrieval' (Neural Search), though limited by 2010 hardware.",
          "key_manifestations": [
            "Huang, P. S., et al. (2013). 'Learning Deep Structured Semantic Models for Web Search using Clickthrough Data' (DSSM)",
            "Shen, Y., et al. (2014). 'A Latent Semantic Model with Convolutional-Pooling Structure for Information Retrieval'",
            "Mitra, B., et al. (2017). 'Neural Models for Information Retrieval' (Review of the early deep era)",
            "Guo, J., et al. (2016). 'A Deep Relevance Matching Model for Ad-hoc Retrieval' (DRMM)"
          ]
        },
        "2012": {
          "salience_share": 35,
          "description": "Knowledge Graphs (+0%). Google launched the Knowledge Graph. 'Things, not strings.' Search moved from document retrieval to entity retrieval. This was a Symbolic injection (Cluster 4) into a Statistical field.",
          "key_manifestations": [
            "Singhal, A. (2012). 'Introducing the Knowledge Graph'",
            "Bordes, A., et al. (2013). 'Translating Embeddings for Modeling Multi-relational Data' (TransE)",
            "Nickel, M., et al. (2011). 'A Three-Way Model for Collective Learning on Multi-Relational Data'",
            "Dong, X., et al. (2014). 'Knowledge Vault: A Web-Scale Approach to Probabilistic Knowledge Fusion'"
          ]
        },
        "2014": {
          "salience_share": 38,
          "description": "Neural Ranking (+3%). Following Word2Vec, researchers replaced exact match with soft match. 'MatchPyramid' and 'DRMM' treated the query-doc interaction as an image (interaction matrix) and applied CNNs. It bridged the semantic gap.",
          "key_manifestations": [
            "Pang, L., et al. (2016). 'Text Matching as Image Recognition'",
            "Xiong, C., et al. (2017). 'End-to-End Neural Ad-hoc Ranking with Kernel Pooling'",
            "Hui, K., et al. (2017). 'PACRR: A Position-Aware Neural IR Model for Relevance Matching'",
            "Dehghani, M., et al. (2017). 'Neural Ranking Models with Weak Supervision'"
          ]
        },
        "2016": {
          "salience_share": 40,
          "description": "Question Answering (SQuAD) (+2%). The focus shifted from 'List of Links' to 'Direct Answers.' SQuAD dataset drove progress in reading comprehension. Search became 'Machine Reading.'",
          "key_manifestations": [
            "Rajpurkar, P., et al. (2016). 'SQuAD: 100,000+ Questions for Machine Comprehension of Text'",
            "Seo, M., et al. (2016). 'Bidirectional Attention Flow for Machine Comprehension' (BiDAF)",
            "Chen, D., et al. (2017). 'Reading Wikipedia to Answer Open-Domain Questions' (DrQA)",
            "Wang, S., & Jiang, J. (2016). 'Machine Comprehension Using Match-LSTM and Answer Pointer'"
          ]
        },
        "2018": {
          "salience_share": 60,
          "description": "BERT for Ranking (+20%). BERT changed everything. 'Cross-Encoders' (feeding Query + Doc into BERT) achieved superhuman relevance but were slow. 'Bi-Encoders' (Dense Retrieval) allowed pre-indexing. Nogueira & Cho showed BERT is a ranker. The industry switched from BM25 to Hybrid (BM25 + BERT re-ranking).",
          "key_manifestations": [
            "Nogueira, R., & Cho, K. (2019). 'Passage Re-ranking with BERT'",
            "Karpukhin, V., et al. (2020). 'Dense Passage Retrieval for Open-Domain Question Answering' (DPR)",
            "Reimers, N., & Gurevych, I. (2019). 'Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks'",
            "Khattab, O., & Zaharia, M. (2020). 'ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction'"
          ]
        },
        "2020": {
          "salience_share": 70,
          "description": "Dense Retrieval Ecosystem (+10%). Vector Databases (Pinecone/Faiss) became the new 'Inverted Index.' ANNS (Approximate Nearest Neighbor Search) became the core operation. The 'Semantic Search' promise of the 90s was finally realized at scale.",
          "key_manifestations": [
            "Johnson, J., et al. (2019). 'Billion-Scale Similarity Search with GPUs' (Faiss)",
            "Xiong, L., et al. (2020). 'Approximate Nearest Neighbor Negative Contrastive Learning for Dense Text Retrieval'",
            "Qu, Y., et al. (2021). 'RocketQA: An Optimized Training Approach to Dense Passage Retrieval'",
            "Izacard, G., & Grave, E. (2020). 'Leveraging Passage Retrieval with Generative Models for Open Domain Question Answering' (RAG precursors)"
          ]
        },
        "2022": {
          "salience_share": 80,
          "description": "RAG (Retrieval Augmented Generation) (+10%). The merger of Search (Cluster 29) and LLMs (Cluster 6). Instead of answering from weights, the LLM retrieves documents and summarizes them. Search is no longer about finding a document; it's about synthesizing an answer *from* retrieved documents. This is the 'New Search' (Perplexity.ai).",
          "key_manifestations": [
            "Lewis, P., et al. (2020/2021). 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks'",
            "Borgeaud, S., et al. (2022). 'Improving Language Models by Retrieving from Trillions of Tokens' (RETRO)",
            "Guu, K., et al. (2020). 'Retrieval Augmented Language Model Pre-Training' (REALM)",
            "Nakano, R., et al. (2021). 'WebGPT: Browser-assisted question-answering with human feedback'"
          ]
        },
        "2024": {
          "salience_share": 85,
          "description": "Current trajectory is 'Agentic Search' (+5%). The search engine is an agent that plans queries, browses, clicks, and scrolls (Multi-step reasoning). 'Search' is becoming a tool use capability of the LLM, rather than a standalone product. The 'Displacing Force' is the death of the 'Ten Blue Links' interface.",
          "key_manifestations": [
            "Nakano, R., et al. (2021). 'WebGPT'",
            "Schick, T., et al. (2023). 'Toolformer: Language Models Can Teach Themselves to Use Tools'",
            "Google (2024). 'Project Astra' (Multimodal search)",
            "You.com/Perplexity (2024). 'Citations and Answer Engine Paradigm'"
          ]
        }
      }
    },
    "30_speech_signal_processing": {
      "name": "Speech & Signal Processing",
      "description": "This eigencluster represents the 'Auditory Cortex' of AI. It maps the evolution of converting physical waveforms into semantic tokens (ASR) and vice versa (TTS). The trajectory begins with the hand-crafted signal processing of the 90s (MFCCs, GMM-HMMs), moves to the Deep Learning breakthrough of the 2010s (CLDNNs, CTC), and culminates in the 'Generative Audio' era (WaveNet, Whisper) where speech is treated as a sequence modeling problem indistinguishable from language modeling.",
      "trajectory": {
        "1990": {
          "salience_share": 12,
          "description": "The 'GMM-HMM' Monolith (+2%). The standard pipeline: Audio $\u2192$ FFT $\u2192$ MFCC (Mel-frequency cepstral coefficients) $\u2192$ GMM (Acoustic Model) $\u2192$ HMM (Temporal Model). It was mathematically elegant and statistically sound. 'Learning' meant Expectation-Maximization (Baum-Welch).",
          "key_manifestations": [
            "Rabiner, L. R. (1989/1990). 'A Tutorial on Hidden Markov Models and Selected Applications in Speech Recognition'",
            "Lee, K. F. (1990). 'Context-Dependent Phonetic Hidden Markov Models for Speaker-Independent Continuous Speech Recognition'",
            "Gales, M. J. F., & Young, S. J. (1996). 'The Application of Hidden Markov Models in Speech Recognition' (Review of the era)",
            "Jelinek, F. (1997). 'Statistical Methods for Speech Recognition'"
          ]
        },
        "1992": {
          "salience_share": 12,
          "description": "Stasis. Improvements came from larger Gaussian mixtures and better 'Language Models' (N-grams). The 'Displacing Force' against neural nets was the variable length of audio; HMMs handled time warping naturally.",
          "key_manifestations": [
            "Leggetter, C. J., & Woodland, P. C. (1995). 'Maximum Likelihood Linear Regression for Speaker Adaptation' (MLLR)",
            "Woodland, P. C., et al. (1994). 'Large Vocabulary Continuous Speech Recognition Using HTK'",
            "Odell, J. J. (1995). 'The Use of Context in Large Vocabulary Speech Recognition'",
            "Ney, H. (1995). 'The Use of a One-Stage Dynamic Programming Algorithm for Connected Word Recognition'"
          ]
        },
        "1994": {
          "salience_share": 12,
          "description": "Stasis. 'Discriminative Training' (MMI - Maximum Mutual Information) challenged Maximum Likelihood. It optimized the separation between the correct sentence and incorrect ones. This was the 'SVM' idea applied to HMMs.",
          "key_manifestations": [
            "Woodland, P. C., & Povey, D. (2002). 'Large Scale Discriminative Training of Hidden Markov Models for Speech Recognition' (Roots in mid-90s)",
            "Valtchev, V., et al. (1997). 'MMI Training of Large Vocabulary Continuous Speech Recognition Systems'",
            "Bahl, L. R., et al. (1986/1994). 'Maximum Mutual Information Estimation of HMM Parameters'",
            "Bourlard, H., & Morgan, N. (1994). 'Connectionist Speech Recognition: A Hybrid Approach' (The neural underdog)"
          ]
        },
        "1996": {
          "salience_share": 12,
          "description": "The 'Hybrid' Approach (+0%). Bourlard and Morgan showed you could replace the GMM with a Neural Net to estimate phoneme probabilities ($P(Phoneme|Audio)$). This was the 'Hybrid ANN-HMM.' It was better but harder to train (no GPUs). It remained a runner-up to the pure GMM-HMM.",
          "key_manifestations": [
            "Bourlard, H., & Morgan, N. (1994). 'Connectionist Speech Recognition'",
            "Robinson, T., et al. (1996). 'The Use of Recurrent Neural Networks in Continuous Speech Recognition'",
            "Hochberg, M. M., et al. (1995). 'The ABBOT Hybrid Connectionist-HMM Large-Vocabulary Recognition System'",
            "Morgan, N., & Bourlard, H. (1995). 'Continuous Speech Recognition: An Introduction to the Hybrid HMM/Connectionist Approach'"
          ]
        },
        "1998": {
          "salience_share": 10,
          "description": "Stasis. The field was dominated by HTK (Hidden Markov Model Toolkit) and Kaldi (later). Engineering focus: Noise reduction, speaker adaptation. Innovation stalled.",
          "key_manifestations": [
            "Young, S., et al. (2002). 'The HTK Book' (The manual of the industry)",
            "Gales, M. (1998). 'Maximum Likelihood Linear Transformations for HMM-based Speech Recognition'",
            "Povey, D., & Woodland, P. C. (2002). 'Minimum Phone Error and I-smoothing for Improved Discriminative Training'",
            "Hermansky, H. (1990/1998). 'Perceptual Linear Predictive (PLP) Analysis of Speech'"
          ]
        },
        "2000": {
          "salience_share": 10,
          "description": "Stasis. SMT (Statistical Machine Translation) ideas began to bleed into ASR. Finite State Transducers (FSTs) became the standard way to represent the decoding graph (HMM + Lexicon + Grammar).",
          "key_manifestations": [
            "Mohri, M., et al. (2002). 'Weighted Finite-State Transducers in Speech Recognition'",
            "Pereira, F., & Riley, M. (1997/2000). 'Speech Recognition by Composition of Weighted Finite Automata'",
            "Allauzen, C., et al. (2004). 'Generalized Algorithms for Constructing Deterministic Finite Automata'",
            "Kneser, R., & Ney, H. (1995/2000). 'Improved Backing-Off for M-gram Language Modeling' (Kneser-Ney Smoothing)"
          ]
        },
        "2002": {
          "salience_share": 10,
          "description": "Stasis. The 'NIST Eval' culture. Incremental gains (0.5% WER reduction). The definition of success was lowering WER on the Switchboard dataset. No paradigmatic shifts.",
          "key_manifestations": [
            "Fiscus, J. G., et al. (2002). 'The Rich Transcription 2002 Evaluation'",
            "Lamel, L., et al. (2002). 'Lightly Supervised Acoustic Model Training'",
            "Saon, G., et al. (2000). 'Linear Feature Space Projections for Speaker Adaptation'",
            "Soltau, H., et al. (2002). 'The ISL Evaluation System for the 2002 Rich Transcription Evaluation'"
          ]
        },
        "2004": {
          "salience_share": 10,
          "description": "Stasis. Neural Nets were considered 'dead' for speech. GMMs with diagonal covariance matrices were the only game in town.",
          "key_manifestations": [
            "Povey, D., et al. (2005). 'FMPE: Discriminatively Trained Projection Features for Continuous Speech Recognition'",
            "Matsoukas, S., et al. (2006). 'Advances in Phonotactic Language Recognition'",
            "Campbell, W. M., et al. (2006). 'Support Vector Machines for Speaker and Language Recognition'",
            "Dehak, N., et al. (2011). 'Front-End Factor Analysis for Speaker Verification' (i-Vectors - 2008 work)"
          ]
        },
        "2006": {
          "salience_share": 12,
          "description": "CTC (Connectionist Temporal Classification) (+2%). Alex Graves introduced CTC. It allowed an RNN to output a sequence of phonemes directly, without pre-alignment. This removed the HMM dependency for alignment. It was the first 'End-to-End' neural speech signal.",
          "key_manifestations": [
            "Graves, A., et al. (2006). 'Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks'",
            "Graves, A., & Schmidhuber, J. (2005). 'Framewise Phoneme Classification with Bidirectional LSTM'",
            "Fern\u00e1ndez, S., et al. (2007). 'Sequence Labelling in Continuous Speech Recognition using Connectionist Temporal Classification'",
            "Schuster, M. (1999/2006). 'Bidirectional Recurrent Neural Networks' (Re-application to speech)"
          ]
        },
        "2008": {
          "salience_share": 15,
          "description": "The Deep Learning Return (+3%). Hinton's lab (Mohamed/Dahl) showed that DBNs (Deep Belief Nets) could replace GMMs and reduce WER by 30%. This was the 'ImageNet moment' for Speech (happening before ImageNet). Microsoft and Google switched immediately. The GMM was dead.",
          "key_manifestations": [
            "Mohamed, A., et al. (2009). 'Deep Belief Networks for Phone Recognition'",
            "Dahl, G. E., et al. (2011). 'Context-Dependent Pre-Trained Deep Neural Networks for Large-Vocabulary Speech Recognition'",
            "Seide, F., et al. (2011). 'Conversational Speech Transcription Using Context-Dependent Deep Neural Networks'",
            "Hinton, G., et al. (2012). 'Deep Neural Networks for Acoustic Modeling in Speech Recognition' (The shared view of the industry)"
          ]
        },
        "2010": {
          "salience_share": 20,
          "description": "DNN-HMM Dominance (+5%). The industry standard became: Use a Deep Neural Net to predict phonemes, use an HMM to decode them. It was a hybrid, but the 'Acoustic Model' was now Deep Learning. The 'Language Model' was still N-gram.",
          "key_manifestations": [
            "Sainath, T. N., et al. (2013). 'Deep Convolutional Neural Networks for LVCSR'",
            "Dahl, G. E., et al. (2012). 'Context-Dependent Pre-Trained Deep Neural Networks for Large-Vocabulary Speech Recognition'",
            "Vesel\u00fd, K., et al. (2013). 'Sequence-discriminative training of deep neural networks'",
            "Povey, D., et al. (2011). 'The Kaldi Speech Recognition Toolkit' (Enabling the DNN revolution)"
          ]
        },
        "2012": {
          "salience_share": 25,
          "description": "End-to-End ASR (+5%). Graves et al. pushed CTC further. 'Deep Speech' (Baidu) showed you could train end-to-end (Audio $\u2192$ Text) with massive data and GPUs, skipping the HMM/Phoneme dictionary entirely. The model learned to spell. This was 'Simplicity' winning via Scale.",
          "key_manifestations": [
            "Graves, A., et al. (2013). 'Speech Recognition with Deep Recurrent Neural Networks'",
            "Hannun, A., et al. (2014). 'Deep Speech: Scaling up end-to-end speech recognition'",
            "Amodei, D., et al. (2016). 'Deep Speech 2: End-to-End Speech Recognition in English and Mandarin'",
            "Miao, Y., et al. (2015). 'EESEN: End-to-End Speech Recognition using Deep RNN Models and WFST-based Decoding'"
          ]
        },
        "2014": {
          "salience_share": 30,
          "description": "Attention for Speech (LAS) (+5%). Chan et al. introduced 'Listen, Attend and Spell' (LAS). It used the Seq2Seq + Attention architecture (Cluster 6) for speech. It could reorder information (unlike CTC) and handle non-monotonic alignments. The 'Language Model' was now implicit in the decoder.",
          "key_manifestations": [
            "Chan, W., et al. (2016). 'Listen, Attend and Spell' (LAS - 2015 work)",
            "Chorowski, J. K., et al. (2015). 'Attention-Based Models for Speech Recognition'",
            "Bahdanau, D., et al. (2016). 'End-to-End Attention-based Large Vocabulary Speech Recognition'",
            "Prabhavalkar, R., et al. (2017). 'A Comparison of Sequence-to-Sequence Models for Speech Recognition'"
          ]
        },
        "2016": {
          "salience_share": 40,
          "description": "WaveNet & Generative TTS (+10%). DeepMind released WaveNet. It generated raw audio waveforms sample-by-sample using dilated convolutions. It solved Text-to-Speech (TTS), crossing the Uncanny Valley. It showed that audio could be modeled as a 'Language' of samples.",
          "key_manifestations": [
            "Oord, A. v. d., et al. (2016). 'WaveNet: A Generative Model for Raw Audio'",
            "Sotelo, J., et al. (2017). 'Char2Wav: End-to-End Speech Synthesis'",
            "Wang, Y., et al. (2017). 'Tacotron: Towards End-to-End Speech Synthesis'",
            "Prenger, R., et al. (2019). 'WaveGlow: A Flow-based Generative Network for Speech Synthesis'"
          ]
        },
        "2018": {
          "salience_share": 45,
          "description": "Transformers for Speech (+5%). The Transformer (Cluster 6) replaced RNNs/LSTMs in speech too. 'Conformer' (Convolution + Transformer) became the SOTA. It captured both local structure (Conv) and global context (Attention).",
          "key_manifestations": [
            "Gulati, A., et al. (2020). 'Conformer: Convolution-augmented Transformer for Speech Recognition'",
            "Dong, L., et al. (2018). 'Speech-Transformer: A No-Recurrence Sequence-to-Sequence Model for Speech Recognition'",
            "Li, N., et al. (2019). 'Jasper: An End-to-End Convolutional Neural Acoustic Model'",
            "Kriman, S., et al. (2019). 'QuartzNet: Deep Automatic Speech Recognition with 1D Time-Channel Separable Convolutions'"
          ]
        },
        "2020": {
          "salience_share": 55,
          "description": "Self-Supervised Speech (Wav2Vec) (+10%). Inspired by BERT. Mask parts of the audio and predict the missing segment (Contrastive). 'Wav2Vec 2.0' showed you could get SOTA with 10 minutes of labeled data if you pre-trained on 50k hours of unlabeled audio. This liberated ASR from the 'Labeled Data Bottleneck.'",
          "key_manifestations": [
            "Baevski, A., et al. (2020). 'wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations'",
            "Hsu, W. N., et al. (2021). 'HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units'",
            "Chen, S., et al. (2022). 'WavLM: Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing'",
            "Babu, A., et al. (2021). 'XLS-R: Self-supervised Cross-lingual Speech Representation Learning at Scale'"
          ]
        },
        "2022": {
          "salience_share": 65,
          "description": "Whisper & Scale (+10%). OpenAI released Whisper. It wasn't a new architecture (just a Transformer), but it was trained on 680k hours of noisy, weak-labeled web data. It proved 'Robustness' via scale. It handled accents, background noise, and multiple languages in a single model. It commoditized ASR.",
          "key_manifestations": [
            "Radford, A., et al. (2023). 'Robust Speech Recognition via Large-Scale Weak Supervision' (Whisper - 2022 release)",
            "Zhang, Y., et al. (2023). 'Google USM: Scaling Automatic Speech Recognition Beyond 100 Languages'",
            "Wang, C., et al. (2023). 'Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers' (VALL-E)",
            "Borsos, Z., et al. (2023). 'AudioLM: a Language Modeling Approach to Audio Generation'"
          ]
        },
        "2024": {
          "salience_share": 75,
          "description": "Current trajectory is 'Omni-Modal' (+10%). GPT-4o. Speech is no longer a separate modality. The LLM consumes raw audio tokens and outputs raw audio tokens (end-to-end speech-to-speech). No transcription step. It captures emotion, tone, and prosody. The 'Speech' cluster has effectively merged with the 'Language' cluster.",
          "key_manifestations": [
            "OpenAI (2024). 'GPT-4o System Card' (Native audio modality)",
            "Gemini Team (2024). 'Gemini 1.5 Pro' (Audio understanding)",
            "Maiti, S., et al. (2024). 'VoxtLM: Unifying Speech and Text with a Voxel-based Language Model'",
            "Reference: 'The Death of the Pipeline: Audio is just Tokens'"
          ]
        }
      }
    },
    "31_embodied_intelligence_sim2real": {
      "name": "Embodied Intelligence & Sim2Real",
      "description": "This eigencluster represents the physical instantiation of AI: the 'Moravec's Paradox' frontier where high-level reasoning is easy but low-level motor control is hard. It tracks the evolution from the behavior-based robotics of the 90s (Subsumption), to the Probabilistic Robotics of the 2000s (SLAM), to the 'Deep Visuomotor' revolution of the 2010s, and finally to the 'Embodied Foundation Models' (VLA) of the 2020s. It addresses the 'Reality Gap'\u2014the disconnect between simulation physics and the messy real world.",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "The 'Subsumption' Era (+1%). Rodney Brooks attacked the 'Symbolic' view (SMPA - Sense Model Plan Act). He argued for 'Intelligence without Representation.' Fast, reactive loops (reflexes) layered to create behavior. This was 'Anti-AI' AI. It worked for insects (Genghis hexapod) but hit a ceiling for complex tasks.",
          "key_manifestations": [
            "Brooks, R. A. (1991). 'Intelligence Without Representation'",
            "Brooks, R. A. (1990). 'Elephants Don't Play Chess'",
            "Maes, P. (1990). 'Designing Autonomous Agents'",
            "Arkin, R. C. (1990). 'Integrating Behavioral, Perceptual, and World Knowledge in Reactive Navigation'"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Stasis. The field split: 'AI' went to simulation, 'Robotics' went to Control Theory (Cluster 7). The 'Hand' was the problem. You could plan a path, but you couldn't pick up a cup. The variance was low because robots were blind and stiff.",
          "key_manifestations": [
            "Lozano-P\u00e9rez, T., et al. (1992). 'Handey: A Robot Task Planner'",
            "Simmons, R. (1994). 'Structured Control for Autonomous Robots' (1992-93 work)",
            "Pomerleau, D. A. (1993). 'Knowledge-based Training of Artificial Neural Networks for Autonomous Robot Driving' (ALVINN - Early neural driving)",
            "Chatila, R., et al. (1992). 'Perception System and Functions for Autonomous Navigation'"
          ]
        },
        "1994": {
          "salience_share": 4,
          "description": "Probabilistic Robotics Begins (+1%). Thrun, Burgard, Fox. They injected Cluster 3 (PGMs) into robotics. Instead of assuming we know where the robot is, model the *uncertainty* ($P(Pose | Data)$). Markov Localization allowed robots to survive sensor noise. This was the software breakthrough that enabled Roomba.",
          "key_manifestations": [
            "Simmons, R., & Koenig, S. (1995). 'Probabilistic Robot Navigation in Partially Observable Environments' (1994 work)",
            "Thrun, S. (1998). 'Learning Metric-Topological Maps for Indoor Mobile Robot Navigation' (1995-96 work)",
            "Burgard, W., et al. (1996). 'Estimating the Absolute Position of a Mobile Robot Using Position Probability Grids'",
            "Nourbakhsh, I. R., et al. (1995). 'Dervish: An Office-Navigating Robot'"
          ]
        },
        "1996": {
          "salience_share": 5,
          "description": "SLAM (Simultaneous Localization and Mapping) (+1%). The core problem: 'Where am I and what does the world look like?' solved simultaneously. EKF-SLAM (Extended Kalman Filter) became the standard. It was heavy linear algebra, not learning, but it enabled autonomy.",
          "key_manifestations": [
            "Durrant-Whyte, H., et al. (1996). 'Simultaneous Localization and Mapping: A Part I'",
            "Lu, F., & Milios, E. (1997). 'Globally Consistent Range Scan Alignment for Environment Mapping'",
            "Castellanos, J. A., et al. (1999). 'The SPmap: A Probabilistic Framework for Simultaneous Localization and Map Building' (1997 work)",
            "Gutmann, J. S., & Konolige, K. (1999). 'Incremental Mapping of Large Cyclic Environments' (Loop closure)"
          ]
        },
        "1998": {
          "salience_share": 5,
          "description": "Stasis/Musems. The 'Minerva' robot tour guide in the Smithsonian. It used Probabilistic Robotics to navigate crowds. It was a peak for 'Navigation.' But 'Manipulation' (Hands) remained in the Dark Ages of hard-coded kinematics.",
          "key_manifestations": [
            "Thrun, S., et al. (1999). 'Minerva: A Second-Generation Museum Tour-Guide Robot'",
            "Fox, D., et al. (1999). 'Monte Carlo Localization: Efficient Position Estimation for Mobile Robots'",
            "Montemerlo, M., et al. (2002). 'FastSLAM: A Factored Solution to the Simultaneous Localization and Mapping Problem' (Roots in late 90s particle filters)",
            "Khatib, O. (1999). 'Real-Time Obstacle Avoidance for Manipulators and Mobile Robots'"
          ]
        },
        "2000": {
          "salience_share": 5,
          "description": "Stasis. The DARPA Grand Challenge (2004) was announced. The field focused on 'Outdoor Navigation.' Learning was minimal (just terrain classification). Most logic was rule-based scripts. The 'Displacing Force' was the fragility of computer vision.",
          "key_manifestations": [
            "Thrun, S. (2002). 'Probabilistic Robotics' (The seminal paper summarizing the era)",
            "Thrun, S., et al. (2006). 'Stanley: The Robot that Won the DARPA Grand Challenge' (2005 win, 2004 dev)",
            "Urmson, C., et al. (2004). 'High Speed Navigation of Unreformed Terrain'",
            "Breazeal, C. (2002). 'Designing Sociable Robots' (Kismet - Affective computing branch)"
          ]
        },
        "2002": {
          "salience_share": 4,
          "description": "Humanoid Hype (-1%). Honda ASIMO. It was a masterpiece of Control Theory (ZMP - Zero Moment Point), not AI. It walked but didn't 'know' anything. It created a false impression of AI capability.",
          "key_manifestations": [
            "Sakagami, Y., et al. (2002). 'The Intelligent ASIMO: System Overview and Integration'",
            "Chestnutt, J., et al. (2005). 'Footstep Planning for the Honda ASIMO Humanoid'",
            "Kuffner, J. J., et al. (2002). 'Dynamically-Stable Motion Planning for Humanoid Robots'",
            "Atkeson, C. G., et al. (2000). 'Locally Weighted Learning for Control' (Early non-parametric learning)"
          ]
        },
        "2004": {
          "salience_share": 4,
          "description": "Learning from Demonstration (+0%). Ng et al. showed autonomous helicopter flight by watching a human pilot. 'Inverse Reinforcement Learning' (Cluster 7) applied to bodies. This was the first sign that learning could beat engineering for control.",
          "key_manifestations": [
            "Abbeel, P., & Ng, A. Y. (2004). 'Apprenticeship Learning via Inverse Reinforcement Learning'",
            "Ng, A. Y., et al. (2004). 'Inverted Autonomous Helicopter Flight via Reinforcement Learning'",
            "Schaal, S., et al. (2003). 'Computational Approaches to Motor Learning by Imitation'",
            "Calinon, S., et al. (2007). 'On Learning, Representing and Generalizing a Task in a Humanoid Robot' (GMM approaches)"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Stasis. ROS (Robot Operating System) launched. It didn't solve AI, but it solved 'Integration.' It standardized the plumbing (Pub/Sub), allowing researchers to share code. This laid the foundation for the explosion a decade later.",
          "key_manifestations": [
            "Quigley, M., et al. (2009). 'ROS: an Open-Source Robot Operating System' (2007 dev start)",
            "Kemp, C. C., et al. (2007). 'Challenges for Robot Manipulation in Human Environments'",
            "Maitin-Shepard, J., et al. (2010). 'Cloth Grasp Point Detection using Computer Vision and Grasp Planning' (PR2 towel folding - the limit of hard-coding)",
            "Saxena, A., et al. (2008). 'Robotic Grasping of Novel Objects using Vision'"
          ]
        },
        "2008": {
          "salience_share": 4,
          "description": "Semantic Mapping (+1%). Robots began to label the map ('This is a door', not 'This is an obstacle'). Combining SLAM with Object Detection (HOG/SIFT). But manipulation was still 'Grasp Planning' (geometric analysis of meshes), not learning.",
          "key_manifestations": [
            "Rusu, R. B., et al. (2008). 'Towards 3D Point Cloud Based Object Maps for Household Environments'",
            "N\u00fcchter, A., & Hertzberg, J. (2008). 'Towards Semantic Maps for Mobile Robots'",
            "Marder-Eppstein, E., et al. (2010). 'The Office Marathon: Robust Navigation in an Indoor Office Environment'",
            "Ciocarlie, M., & Allen, P. (2009). 'Hand-in-Hand: Multipronged Grasping Research'"
          ]
        },
        "2010": {
          "salience_share": 5,
          "description": "Kinect Fusion (+1%). The Microsoft Kinect ($150 depth sensor) democratized perception. 'KinectFusion' allowed real-time dense 3D reconstruction. Robots could finally 'see' geometry cheaply. This killed the laser-scanner monopoly.",
          "key_manifestations": [
            "Newcombe, R. A., et al. (2011). 'KinectFusion: Real-Time Dense Surface Mapping and Tracking'",
            "Henry, P., et al. (2010). 'RGB-D Mapping: Using Depth Cameras for Dense 3D Modeling of Indoor Environments'",
            "Stuckler, J., & Behnke, S. (2011). 'Multi-Resolution Surfel Maps for Efficient Dense 3D Modeling and Tracking'",
            "Endres, F., et al. (2012). 'An Evaluation of the RGB-D SLAM System'"
          ]
        },
        "2012": {
          "salience_share": 6,
          "description": "Deep Learning for Grasping (+1%). Saxena/Ng used Deep Learning (on depth images) to predict grasp points. It worked better than geometric planning. This was the first crack in the 'Analytic' dam for manipulation.",
          "key_manifestations": [
            "Lenz, I., et al. (2015). 'Deep Learning for Detecting Robotic Grasps' (2013 work)",
            "Pinto, L., & Gupta, A. (2016). 'Supersizing Self-supervision: Learning to Grasp from 50K Tries and 700 Robot Hours' (The data scale-up)",
            "Levine, S., et al. (2013). 'Guided Policy Search'",
            "Sung, J., et al. (2012). 'Unstructured Human Activity Detection from RGBD Images'"
          ]
        },
        "2014": {
          "salience_share": 8,
          "description": "End-to-End Visuomotor (+2%). Levine et al. (Google) trained a robot to screw caps on bottles by mapping Pixels $\u2192$ Torques. No pose estimation, no planning. Just a CNN policy. It required 14 robots running for months. It proved 'The Bitter Lesson' applied to atoms: Learning > Engineering.",
          "key_manifestations": [
            "Levine, S., et al. (2016). 'End-to-End Training of Deep Visuomotor Policies' (2015 work)",
            "Pinto, L., & Gupta, A. (2016). 'Supersizing Self-supervision'",
            "Finn, C., et al. (2016). 'Deep Spatial Autoencoders for Visuomotor Learning'",
            "Gu, S., et al. (2017). 'Deep Reinforcement Learning for Robotic Manipulation with Asynchronous Off-Policy Updates'"
          ]
        },
        "2016": {
          "salience_share": 12,
          "description": "Sim2Real & Domain Randomization (+4%). OpenAI Dactyl. Training in the real world is too slow. Train in simulation (MuJoCo/Unity) and transfer. The trick: 'Domain Randomization' (randomize friction, colors, gravity in sim so reality looks like just another variation). This solved the 'Reality Gap' for the Rubik's Cube hand.",
          "key_manifestations": [
            "Tobin, J., et al. (2017). 'Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World'",
            "OpenAI (2018). 'Learning Dexterous In-Hand Manipulation' (Dactyl)",
            "Peng, X. B., et al. (2018). 'Sim-to-Real Transfer of Robotic Control with Dynamics Randomization'",
            "Sadeghi, F., & Levine, S. (2017). 'CAD2RL: Real Single-Image Flight Without a Single Real Image'"
          ]
        },
        "2018": {
          "salience_share": 15,
          "description": "Self-Supervised Physics (+3%). Robots playing with objects to learn physics. 'TossingBot' (Google) learned to throw things. It learned the ballistics distribution. This fused Cluster 23 (Self-Supervision) with Robotics.",
          "key_manifestations": [
            "Zeng, A., et al. (2020). 'TossingBot: Learning to Throw Arbitrary Objects with Residual Physics' (2019 work)",
            "Ebert, F., et al. (2018). 'Visual Foresight: Model-Based Deep Reinforcement Learning for Vision-Based Robotic Control'",
            "Pathak, D., et al. (2018). 'Zero-Shot Visual Imitation'",
            "Hwangbo, J., et al. (2019). 'Learning Agile and Dynamic Motor Skills for Legged Robots' (ANYmal)"
          ]
        },
        "2020": {
          "salience_share": 18,
          "description": "Visual Transformers for Control (+3%). The Transformer architecture entered robotics. 'Decision Transformer' (Cluster 7) treated actuation as a sequence modeling problem. The 'Action' is just the next token after the 'Perception' token.",
          "key_manifestations": [
            "Chen, L., et al. (2021). 'Decision Transformer: Reinforcement Learning via Sequence Modeling'",
            "Jiang, Y., et al. (2022). 'VIMA: General Robot Manipulation with Multimodal Prompts'",
            "Shridhar, M., et al. (2022). 'CLIPort: What and Where Pathways for Robotic Manipulation'",
            "Agarwal, A., et al. (2023). 'Legged Locomotion in Challenging Terrains using Egocentric Vision'"
          ]
        },
        "2022": {
          "salience_share": 25,
          "description": "VLA (Vision-Language-Action) Models (+7%). RT-1 and RT-2 (Google). Take a VLM (like PaLM-E), fine-tune it to output robot actions. The robot 'understands' commands like 'Pick up the extinct animal' (dinosaur toy) because the semantic knowledge transfers from the web text. This is the 'ChatGPT moment' for Robotics.",
          "key_manifestations": [
            "Brohan, A., et al. (2022). 'RT-1: Robotics Transformer for Real-World Control at Scale'",
            "Brohan, A., et al. (2023). 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control'",
            "Driess, D., et al. (2023). 'PaLM-E: An Embodied Multimodal Language Model'",
            "Team, O. (2023). 'Octo: An Open-Source Generalist Robot Policy'"
          ]
        },
        "2024": {
          "salience_share": 30,
          "description": "Current trajectory is 'Humanoid Generalization' (+5%). Figure, Tesla Optimus, 1X. Training end-to-end policies on massive teleoperation datasets. The 'Constraint' is data (teleop is slow). The solution is video generation (Cluster 9) as a simulator (Sora $\u2192$ Robot).",
          "key_manifestations": [
            "Zhao, T., et al. (2024). 'Learning Fine-Grained Bimanual Manipulation with Low-Cost Arms' (ALOHA)",
            "Figure AI (2024). 'Figure 01 Status Update' (End-to-End Neural Nets)",
            "Li, H., et al. (2024). 'Behavior Transformer: Policy Translation for Heterogeneous Robot Morphologies'",
            "Reference: 'The Data Wall in Robotics'"
          ]
        }
      }
    },
    "32_mlops_data_centric_ai": {
      "name": "MLOps & Data-Centric AI",
      "description": "This eigencluster represents the industrialization of AI: moving from 'Model-Centric' (optimizing code/hyperparameters) to 'Data-Centric' (optimizing the dataset). It tracks the evolution of the AI supply chain: Feature Stores, Model Registries, Drift Detection, and Labeling pipelines. As models commoditized (HuggingFace), the variance in performance shifted entirely to the quality of the data and the robustness of the deployment infrastructure.",
      "trajectory": {
        "1990": {
          "salience_share": 0,
          "description": "Non-existent. AI was a script on a floppy disk. 'Deployment' meant compiling the C code. Data was static (UCI Repository).",
          "key_manifestations": [
            "UCI Machine Learning Repository (1987/1990). 'Iris Dataset'",
            "Salzberg, S. (1994). 'C4.5: Programs for Machine Learning' (The software artifact)",
            "Witten, I. H., & Frank, E. (1999). 'Data Mining: Practical Machine Learning Tools and Techniques' (WEKA)"
          ]
        },
        "1995": {
          "salience_share": 1,
          "description": "CRISP-DM (+1%). The Cross-Industry Standard Process for Data Mining. It defined the lifecycle: Business Understanding $\u2192$ Data Prep $\u2192$ Modeling $\u2192$ Deployment. It was a manual waterfall process.",
          "key_manifestations": [
            "Wirth, R., & Hipp, J. (2000). 'CRISP-DM: Towards a Standard Process Model for Data Mining'",
            "Shearer, C. (2000). 'The CRISP-DM Model: The New Blueprint for Data Mining'",
            "Fayyad, U., et al. (1996). 'From Data Mining to Knowledge Discovery in Databases' (KDD Pipeline)"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "PMML (Predictive Model Markup Language). An attempt to standardize model export (XML). It allowed a model trained in SAS to run in Java. It solved the 'Handover' problem.",
          "key_manifestations": [
            "Grossman, R. L., et al. (1999). 'The Predictive Model Markup Language (PMML)'",
            "Guazzelli, A., et al. (2009). 'PMML: An Open Standard for Sharing Models'",
            "Klementiev, A., et al. (2009). 'Unsupervised Domain Adaptation by Backpropagation' (Early drift conceptualization)"
          ]
        },
        "2005": {
          "salience_share": 2,
          "description": "Hadoop & Big Data (+1%). Data engineering split from Software engineering. 'ETL' (Extract Transform Load) became the precursor to MLOps. You couldn't train on a laptop anymore.",
          "key_manifestations": [
            "Cutting, D. (2006). 'Hadoop'",
            "Thusoo, A., et al. (2009). 'Hive: A Warehousing Solution over a Map-Reduce Framework'",
            "Olston, C., et al. (2008). 'Pig Latin'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "The 'Technical Debt' Realization (+1%). Sculley et al. (Google) published 'Hidden Technical Debt in Machine Learning Systems.' It famously argued that 'ML Code is only a tiny fraction of the box.' The rest is plumbing. This paper launched MLOps as a discipline.",
          "key_manifestations": [
            "Sculley, D., et al. (2015). 'Hidden Technical Debt in Machine Learning Systems' (The manifesto - 2014 NIPS workshop)",
            "Zaharia, M., et al. (2010). 'Spark: Cluster Computing with Working Sets' (In-memory processing)",
            "Schelter, S., et al. (2018). 'Automating Large-Scale Data Quality Verification'"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "Containers & Docker (+2%). Reproducibility crisis solved (mostly). Instead of 'It works on my machine,' ship the Docker container. Kubeflow and Kubernetes (2015) allowed orchestrating training jobs. The 'Model' became a 'Microservice.'",
          "key_manifestations": [
            "Merkel, D. (2014). 'Docker: Lightweight Linux Containers for Consistent Development and Deployment'",
            "Burns, B., et al. (2016). 'Borg, Omega, and Kubernetes'",
            "Baylor, D., et al. (2017). 'TFX: A TensorFlow-Based Production-Scale Machine Learning Platform'"
          ]
        },
        "2016": {
          "salience_share": 8,
          "description": "Feature Stores (+3%). Uber Michelangelo. The concept of a 'Feature Store'\u2014a consistent source of truth for training and inference features. It solved 'Training-Serving Skew.' Companies realized their feature pipelines were broken.",
          "key_manifestations": [
            "Hermann, J., & Balso, M. (2017). 'Meet Michelangelo: Uber's Machine Learning Platform'",
            "Zaharia, M., et al. (2018). 'Accelerating the Machine Learning Lifecycle with MLflow'",
            "Vartak, M., et al. (2016). 'ModelDB: A System for Machine Learning Model Management'"
          ]
        },
        "2018": {
          "salience_share": 12,
          "description": "Data-Centric AI (+4%). Andrew Ng coined the term. 'Don't improve the model architecture (it's mostly fixed/SOTA); improve the data.' Labeling (Snorkel), Cleaning (Cleanlab), and Curation became the high-ROI activities. 'Software 2.0' (Karpathy) defined the dataset as the source code.",
          "key_manifestations": [
            "Ratner, A., et al. (2017). 'Snorkel: Rapid Training Data Creation with Weak Supervision'",
            "Karpathy, A. (2017). 'Software 2.0' (Blog/Essay)",
            "Northcutt, C. G., et al. (2021). 'Confident Learning: Estimating Uncertainty in Dataset Labels' (Cleanlab)",
            "Sambasivan, N., et al. (2021). 'Everyone Wants to do the Model Work, Not the Data Work'"
          ]
        },
        "2020": {
          "salience_share": 15,
          "description": "LLMOps (+3%). Prompt Engineering, RAG pipelines, Vector Ops. The 'Model' is now an API (GPT-4). The 'Ops' is managing the context window, retrieval latency, and evaluation (LLM-as-a-Judge). The stack shifted from 'Training' to 'Chaining' (LangChain).",
          "key_manifestations": [
            "Chase, H. (2022). 'LangChain' (Software artifact)",
            "Liu, N., et al. (2023). 'G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment'",
            "Gao, Y., et al. (2023). 'Retrieval-Augmented Generation for Large Language Models: A Survey' (The ops of memory)",
            "HuggingFace (2020-2024). 'The Model Hub' (The GitHub of AI)"
          ]
        },
        "2022": {
          "salience_share": 18,
          "description": "Synthetic Data Factories (+3%). We are running out of human data. The supply chain now includes *generating* data (Cluster 9) to train the next model (Cluster 6). 'Constitutional AI' is an MLOps process: Automated feedback loops. The Ouroboros of AI training.",
          "key_manifestations": [
            "Gunasekar, S., et al. (2023). 'Textbooks Are All You Need' (phi-1: Synthetic data curation)",
            "Bai, Y., et al. (2022). 'Constitutional AI'",
            "Shumailov, I., et al. (2023). 'The Curse of Recursion: Training on Generated Data Makes Models Forget'"
          ]
        },
        "2024": {
          "salience_share": 20,
          "description": "Current trajectory is 'Evaluation as Code' (+2%). You can't improve what you can't measure. In the absence of ground truth for 'Reasoning', we build 'Auto-Eval' systems. MLOps is now 'EvalOps.'",
          "key_manifestations": [
            "Zheng, L., et al. (2023). 'Judging LLM-as-a-Judge'",
            "OpenAI (2024). 'Evals Framework'",
            "Ragas (2024). 'Evaluation for RAG'",
            "Reference: 'The Shift from Training to Inference Optimization'"
          ]
        }
      }
    },
    "33_explainable_ai_fairness": {
      "name": "Explainable AI & Fairness",
      "description": "This eigencluster represents the 'Epistemology' and 'Ethics' of AI. It addresses two distinct but coupled problems: the 'Black Box' problem (we don't know how the model thinks) and the 'Bias' problem (the model encodes historical prejudice). The trajectory moves from the rule-extraction methods of the 90s, to the Saliency Maps and LIME of the 2010s, to the rigorous 'Shapley Value' game-theoretic attribution, and finally to the 'Mechanistic Interpretability' (Circuits) of the 2020s. It is the bridge between the high-dimensional math of AI and human values.",
      "trajectory": {
        "1990": {
          "salience_share": 2,
          "description": "The decade began with a focus on 'Rule Extraction' (+0%). The goal was to convert a trained Neural Net (which was seen as opaque) back into Symbolic Rules (Cluster 4) so humans could read it. This was 'Decompositional' interpretability\u2014trying to map weights to logical propositions. Fairness was not yet a computational topic but existed in the policy realm regarding credit scoring.",
          "key_manifestations": [
            "Towell, G. G., & Shavlik, J. W. (1993). 'Extracting Refined Rules from Knowledge-Based Neural Networks' (KBANN - 1990 work)",
            "Andrews, R., et al. (1995). 'Survey and Critique of Techniques for Extracting Rules from Trained Artificial Neural Networks'",
            "Gallant, S. I. (1993). 'Neural Network Learning and Expert Systems'",
            "Fu, L. (1991). 'Rule Learning by Searching on Adapted Nets'"
          ]
        },
        "1992": {
          "salience_share": 2,
          "description": "Stasis. The primary method was 'Sensitivity Analysis.' Researchers determined which input features affected the output most by perturbing inputs and measuring the gradient. This was the mathematical precursor to modern Saliency Maps, though it was computationally expensive and limited to small networks.",
          "key_manifestations": [
            "Zurada, J. M., et al. (1994). 'Sensitivity Analysis of Feedforward Neural Networks' (1992-93 work)",
            "Hashem, S. (1992). 'Sensitivity Analysis for Feedforward Artificial Neural Networks'",
            "Refenes, A. N., et al. (1994). 'Financial Time Series Forecasting with Neural Networks' (Focus on variable importance)",
            "Garson, G. D. (1991). 'Interpreting Neural-Network Connection Weights'"
          ]
        },
        "1994": {
          "salience_share": 2,
          "description": "The 'Bias' problem emerged in niche literature (+0%). Researchers analyzing mortgage lending algorithms realized that removing 'Race' variables didn't work due to redundant encodings (Redlining). This was the proto-Fairness field, recognizing that data mining could perpetuate societal biases, though no mathematical definition of 'Fairness' was yet standardized in CS.",
          "key_manifestations": [
            "Friedman, B., & Nissenbaum, H. (1996). 'Bias in Computer Systems' (1994-95 context)",
            "Leveson, N. (1995). 'Safeware' (Touching on socio-technical systems)",
            "Frawley, W. J., et al. (1992). 'Knowledge Discovery in Databases' (Early discussions on data bias)",
            "Carbonell, J. G. (1990). 'Machine Learning: Paradigms and Methods' (Bias as inductive bias, not social)"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Decline (-1%). As SVMs and Random Forests took over the field, 'Interpretability' became less pressing because Decision Trees are inherently readable and SVMs are geometrically intuitive (margins). The panic over 'Black Box' neural networks subsided as the community moved toward these more transparent, convex methods.",
          "key_manifestations": [
            "Craven, M., & Shavlik, J. W. (1996). 'Extracting Tree-Structured Representations of Trained Networks'",
            "Breiman, L. (2001). 'Random Forests' (Variable Importance measures developed late 90s)",
            "Tikhonov, A. (1998). 'Interpretation of Neural Networks'",
            "Diederich, J. (1997). 'Explanation and Artificial Neural Networks'"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Stasis. Privacy (Cluster 27) was the main societal concern regarding data mining, overshadowing explainability. The concept of 'Trust' was linked to accuracy metrics (ROC curves) rather than internal auditing. If the model was accurate, it was assumed to be 'correct.'",
          "key_manifestations": [
            "Agrawal, R., et al. (2000). 'Privacy-Preserving Data Mining'",
            "Provost, F., & Fawcett, T. (2001). 'Robust Classification for Imprecise Environments'",
            "Kohavi, R., et al. (1998). 'Targeting the Right Users'",
            "Swartout, W., et al. (1993/1998). 'Explanation in Knowledge Systems'"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Stasis. The field focused on 'Calibration' and 'ROC Analysis.' Understanding the *probability* of an outcome was the proxy for understanding the model. This era cemented the idea that a 'Well-Calibrated' model is a trustworthy model, a simplification that would later be challenged by fairness research.",
          "key_manifestations": [
            "Fawcett, T. (2006). 'An Introduction to ROC Analysis' (Standardizing evaluation)",
            "Zadrozny, B., & Elkan, C. (2001). 'Obtaining Calibrated Probability Estimates from Decision Trees'",
            "Niculescu-Mizil, A., & Caruana, R. (2005). 'Predicting Good Probabilities With Supervised Learning'",
            "Pazzani, M. J. (2000). 'Knowledge Discovery from Data?'"
          ]
        },
        "2002": {
          "salience_share": 1,
          "description": "Stasis. The 'Ensemble' era (Random Forests, Boosting) made models opaque again compared to single trees. Breiman introduced 'Variable Importance' (permutation importance), a statistical way to peek inside the black box by measuring how much error increases when a feature is scrambled.",
          "key_manifestations": [
            "Breiman, L. (2001). 'Random Forests'",
            "Strobl, C., et al. (2007). 'Bias in Random Forest Variable Importance Measures' (Early critique)",
            "Caruana, R., et al. (2004). 'Ensemble Selection from Libraries of Models'",
            "Kononenko, I., et al. (2003). 'Explainable AI: The New Frontier' (Early usage of the term)"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Visual Analytics (+1%). Researchers tried to visualize high-dimensional decision boundaries using projection techniques like the 'Grand Tour' or 'Projection Pursuit.' The solution that eventually stuck was 'Manifold Learning' visualizations, setting the stage for t-SNE.",
          "key_manifestations": [
            "Inselberg, A. (2009). 'Parallel Coordinates' (Visualization standard)",
            "Seo, J., & Shneiderman, B. (2005). 'A Rank-by-Feature Framework for Interactive Exploration of Multidimensional Data'",
            "Teoh, S. T., et al. (2004). 'Visualizing Structure and Usage of the Web'",
            "Viegas, F. B., et al. (2004). 'ManyEyes: A Site for Visualization at Internet Scale'"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Deep Learning Opacity (+0%). Hinton's Deep Belief Networks were total black boxes. The community was so excited they worked that they didn't prioritize *how*. However, Erhan et al. began exploring 'Activation Maximization'\u2014generating the image that excites a neuron maximally\u2014which was the birth of modern 'Feature Visualization.'",
          "key_manifestations": [
            "Erhan, D., et al. (2009). 'Visualizing Higher-Layer Features of a Deep Network'",
            "Lee, H., et al. (2009). 'Convolutional Deep Belief Networks' (Visualizing filters)",
            "Maaten, L. v. d., & Hinton, G. (2008). 'Visualizing Data using t-SNE' (The de facto standard for seeing the latent space)",
            "Rito, P., et al. (2008). 'Explaining the Decisions of Deep Neural Networks'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Deconvolution & Saliency (+1%). The need to understand ConvNets drove innovation. Zeiler & Fergus developed 'Deconvolutional Networks' to project activations back to pixel space, allowing researchers to see 'what the neuron sees' (e.g., dog faces, wheels). This visual proof was crucial for building trust in Deep Learning.",
          "key_manifestations": [
            "Zeiler, M. D., & Fergus, R. (2014). 'Visualizing and Understanding Convolutional Networks' (2010-11 dev)",
            "Baehrens, D., et al. (2010). 'How to Explain Individual Classification Decisions'",
            "Simonyan, K., et al. (2013). 'Deep Inside Convolutional Networks: Visualising Image Classification Models and Saliency Maps'",
            "Poulin, B., et al. (2006). 'Visual Explanations for Evidence-Based Classifiers'"
          ]
        },
        "2010": {
          "salience_share": 4,
          "description": "Fairness Definitions (+1%). Dwork et al. published 'Fairness Through Awareness.' This was the mathematical formalization of fairness (specifically the Lipschitz condition: similar individuals should be treated similarly). It moved Fairness from Sociology to Computer Science, codifying metrics like 'Disparate Impact' into loss functions.",
          "key_manifestations": [
            "Dwork, C., et al. (2012). 'Fairness Through Awareness'",
            "Kamishima, T., et al. (2012). 'Fairness-Aware Classifier with Prejudice Remover Regularizer'",
            "Hardt, M., et al. (2016). 'Equality of Opportunity in Supervised Learning' (2010s theoretical roots)",
            "Calders, T., & Verwer, S. (2010). 'Three Naive Bayes Approaches for Discrimination-Free Classification'"
          ]
        },
        "2012": {
          "salience_share": 5,
          "description": "Google Flu Trends Failure (+1%). The Big Data hubris crashed. Google Flu Trends failed to predict the flu accurately because of 'concept drift' and algorithmic confounding (the model learned correlations with seasons, not the virus). This failure highlighted the desperate need for robustness and explainability in big data systems beyond simple accuracy metrics.",
          "key_manifestations": [
            "Lazer, D., et al. (2014). 'The Parable of Google Flu: Traps in Big Data Analysis'",
            "Sandvig, C., et al. (2014). 'Auditing Algorithms: Research Methods for Detecting Discrimination on Internet Platforms'",
            "Sweeney, L. (2013). 'Discrimination in Online Ad Delivery'",
            "Castelvecchi, D. (2016). 'Can we open the black box of AI?'"
          ]
        },
        "2014": {
          "salience_share": 8,
          "description": "LIME & The Proxy Problem (+3%). Ribeiro et al. introduced LIME (Local Interpretable Model-agnostic Explanations). The insight: You don't need to understand the whole black box; just approximate it *locally* with a linear model. This democratized XAI. Simultaneously, 'ProPublica vs COMPAS' revealed racial bias in recidivism algorithms, proving that 'blindness' to race is insufficient due to proxy variables.",
          "key_manifestations": [
            "Ribeiro, M. T., et al. (2016). 'Why Should I Trust You? Explaining the Predictions of Any Classifier' (LIME - 2015 work)",
            "Angwin, J., et al. (2016). 'Machine Bias' (ProPublica COMPAS investigation)",
            "Bach, S., et al. (2015). 'On Pixel-Wise Explanations for Non-Linear Classifier Decisions by Layer-Wise Relevance Propagation' (LRP)",
            "Zemel, R., et al. (2013). 'Learning Fair Representations'"
          ]
        },
        "2016": {
          "salience_share": 12,
          "description": "SHAP & Grad-CAM (+4%). Lundberg & Lee unified LIME and Shapley Values into SHAP (SHapley Additive exPlanations). It became the gold standard for tabular feature attribution. In vision, Grad-CAM (Selvaraju) allowed users to 'see' where the CNN was looking via heatmaps. XAI became a standard, mandatory module in industrial ML pipelines.",
          "key_manifestations": [
            "Lundberg, S. M., & Lee, S. I. (2017). 'A Unified Approach to Interpreting Model Predictions' (SHAP)",
            "Selvaraju, R. R., et al. (2017). 'Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization'",
            "Sundararajan, M., et al. (2017). 'Axiomatic Attribution for Deep Networks' (Integrated Gradients)",
            "Hardt, M., et al. (2016). 'Equality of Opportunity in Supervised Learning'"
          ]
        },
        "2018": {
          "salience_share": 15,
          "description": "The Fairness Metric Wars (+3%). Researchers realized 'Fairness' is mathematically impossible to satisfy universally (Kleinberg et al.). You can't have Equal Odds, Calibration, and Demographic Parity simultaneously if base rates differ. The field shifted from finding 'The One Metric' to documenting 'Trade-offs' and creating 'Datasheets for Datasets' (Gebru) to track provenance.",
          "key_manifestations": [
            "Kleinberg, J., et al. (2017). 'Inherent Trade-Offs in the Fair Determination of Risk Scores'",
            "Gebru, T., et al. (2018/2021). 'Datasheets for Datasets'",
            "Mitchell, M., et al. (2019). 'Model Cards for Model Reporting'",
            "Chouldechova, A. (2017). 'Fair Prediction with Disparate Impact: A Study of Bias in Recidivism Prediction Instruments'"
          ]
        },
        "2020": {
          "salience_share": 20,
          "description": "Mechanistic Interpretability (+5%). Olah et al. (Distill/Anthropic) moved beyond 'Heatmaps' (which can be misleading) to 'Circuits.' They reverse-engineered the weights to find 'Curve Detectors' and 'Dog Heads' inside the network graph. They treated the Neural Net as a compiled program to be decompiled. This is the 'Microscope' approach to alignment.",
          "key_manifestations": [
            "Olah, C., et al. (2020). 'Zoom In: An Introduction to Circuits'",
            "Elhage, N., et al. (2021). 'A Mathematical Framework for Transformer Circuits'",
            "Adebayo, J., et al. (2018). 'Sanity Checks for Saliency Maps' (Proving heatmaps are often noise)",
            "Bender, E. M., et al. (2021). 'On the Dangers of Stochastic Parrots' (Societal interpretability)"
          ]
        },
        "2022": {
          "salience_share": 22,
          "description": "LLM Explainability (+2%). How to explain a prompt completion? 'Chain of Thought' (Cluster 4) serves as a natural language explanation, though it suffers from 'Unfaithful reasoning' (hallucinating reasons). 'Influence Functions' attempted to trace a GPT-4 output back to specific training documents (e.g., 'This sentence came from Wikipedia page X').",
          "key_manifestations": [
            "Wei, J., et al. (2022). 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models'",
            "Turpin, M., et al. (2023). 'Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought'",
            "Grosse, R., et al. (2023). 'Studying Large Language Model Generalization with Influence Functions'",
            "Meng, K., et al. (2022). 'Locating and Editing Factual Associations in GPT' (ROME)"
          ]
        },
        "2024": {
          "salience_share": 25,
          "description": "Dictionary Learning & Monosemanticity (+3%). Anthropic's 'Golden Gate Claude.' Using Sparse Autoencoders to decompose the 'Superposition' of dense concepts into discrete, human-readable features (e.g., 'The Golden Gate Bridge feature'). This is the SOTA for looking inside the black box. It proves concepts are represented linearly in the activation space.",
          "key_manifestations": [
            "Templeton, A., et al. (2024). 'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet'",
            "Cunningham, H., et al. (2023). 'Sparse Autoencoders Find Interpretable Features in Large Language Models'",
            "Marks, S., & Tegmark, M. (2024). 'The Geometry of Truth: Discovery of Directionality in Transformers'",
            "Zou, A., et al. (2023). 'Representation Engineering: A Top-Down Approach to AI Transparency'"
          ]
        }
      }
    },
    "34_quantum_machine_learning": {
      "name": "Quantum Machine Learning",
      "description": "This eigencluster represents the intersection of Quantum Computing and AI. It explores how quantum mechanics (Superposition, Entanglement, Interference) can accelerate linear algebra ($O(N)$ speedups) or optimize non-convex landscapes (Tunneling). Trajectory-wise, it moved from the theoretical Grover/HHL algorithms of the 90s/00s, to the 'Variational Quantum Eigensolver' (VQE) and 'Quantum Neural Networks' (QNN) of the NISQ (Noisy Intermediate-Scale Quantum) era. It is currently a high-variance, speculative cluster waiting for fault-tolerant hardware.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Theoretical Roots (+0%). Quantum Computing was in its infancy. The focus was on fundamental physics and complexity theory (Deutsch, Feynman). The link to learning was non-existent. Neural Nets were physical (Cluster 17), but strictly classical. The idea of 'Quantum Neural Computing' was fringe speculation.",
          "key_manifestations": [
            "Deutsch, D. (1985/1990). 'Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer'",
            "Feynman, R. P. (1982/1990). 'Simulating Physics with Computers' (Foundational context)",
            "Penrose, R. (1989/1990). 'The Emperor's New Mind' (Speculating on quantum consciousness - cultural impact)",
            "Benioff, P. (1980/1990). 'The Computer as a Physical System'"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. Early papers began to appear discussing 'Quantum Neural Networks,' but they were mostly classical nets using quantum terminology metaphors, or hypothetical devices. There was no algorithm, only aspiration.",
          "key_manifestations": [
            "Kak, S. (1995). 'Quantum Neural Computing' (Drafts/Concepts)",
            "Chrisley, R. (1995). 'Quantum Learning'",
            "Perus, M. (1996). 'Neuro-Quantum Parallelism'",
            "Deutsch, D., & Jozsa, R. (1992). 'Rapid Solution of Problems by Quantum Computation' (Algorithm demonstrating speedup)"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Shor's Algorithm (+0%). Peter Shor showed quantum computers could factor integers exponentially faster than classical computers. This revolutionized Cryptography but had little immediate impact on ML, other than proving Quantum Computers could do things Classical ones couldn't.",
          "key_manifestations": [
            "Shor, P. W. (1994). 'Algorithms for Quantum Computation: Discrete Logarithms and Factoring'",
            "Simon, D. R. (1994). 'On the Power of Quantum Computation'",
            "Lloyd, S. (1995). 'Almost Any Quantum Logic Gate is Universal'",
            "Ekert, A., & Jozsa, R. (1996). 'Quantum Computation and Shor's Factoring Algorithm'"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Grover's Search (+0%). Grover's algorithm showed a quadratic speedup ($O(\u221aN)$) for unstructured search. This had implications for 'Search-based AI' (Cluster 4) and optimization, but it wasn't 'Learning.' It was a complexity theory result that defined the limits of quantum speedup.",
          "key_manifestations": [
            "Grover, L. K. (1996). 'A Fast Quantum Mechanical Algorithm for Database Search'",
            "Boyher, P. O., et al. (1998). 'Quantum Database Search'",
            "Bennett, C. H., et al. (1997). 'Strengths and Weaknesses of Quantum Computing'",
            "Ventura, D., & Martinez, T. (1998). 'Quantum Associative Memory'"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Quantum Associative Memory (+0%). Ventura and Martinez proposed using quantum superposition to store patterns. This was the first concrete 'Neural' architecture. It used the phase of quantum states to encode information, allowing parallel retrieval. It was theoretical, as no hardware existed.",
          "key_manifestations": [
            "Ventura, D., & Martinez, T. (2000). 'Quantum Associative Memory' (1998 work)",
            "Trugenberger, C. A. (2001). 'Probabilistic Quantum Memories'",
            "Hogg, T. (1998). 'Highly Structured Searches with Quantum Computers'",
            "Grover, L. K. (1998). 'Quantum Computers Can Search Arbitrarily Large Databases by a Single Query'"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Quantum Perceptrons (+0%). Researchers tried to define a 'Quantum Neuron.' The linearity of Quantum Mechanics (Unitary transformations) made it hard to implement the non-linearity (Sigmoid/ReLU) required for AI. This was a theoretical blocker: you can't clone quantum states (No-Cloning Theorem), making backprop hard.",
          "key_manifestations": [
            "Altaisky, M. V. (2001). 'Quantum Neural Network'",
            "Gupta, S., & Zia, R. K. P. (2001). 'Quantum Neural Networks'",
            "Narayan, A., & Menneer, T. (2000). 'Quantum Perceptron Networks'",
            "Schutzhold, R. (2002). 'Pattern Recognition on a Quantum Computer'"
          ]
        },
        "2002": {
          "salience_share": 1,
          "description": "Stasis. The field remained in Physics departments. 'Quantum Information Theory' was the active field (Cluster 18 adjacent). The focus was on error correction and teleportation, not learning.",
          "key_manifestations": [
            "Nielsen, M. A., & Chuang, I. L. (2000/2002). 'Quantum Computation and Quantum Information' (The Bible of the field)",
            "Ezhov, A. A., & Ventura, D. (2000). 'Quantum Neural Networks'",
            "Grover, L. K. (2002). 'Trade-offs in the Quantum Search Algorithm'",
            "Servin-Alvarez, R. (2002). 'Quantum Hopfield Networks'"
          ]
        },
        "2004": {
          "salience_share": 1,
          "description": "Adiabatic Quantum Computing (+0%). The concept of 'Quantum Annealing' gained traction. Instead of gates, evolve the Hamiltonian. This promised to solve optimization problems (Ising models) via tunneling, linking Quantum to Cluster 5 (Optimization). It was the basis for D-Wave.",
          "key_manifestations": [
            "Farhi, E., et al. (2000/2004). 'A Quantum Adiabatic Evolution Algorithm Applied to Random Instances of an NP-Complete Problem'",
            "Aharonov, D., et al. (2007). 'Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation' (2004 work)",
            "Santra, S., et al. (2004). 'Quantum Adiabatic Algorithms'",
            "Mizel, A., et al. (2004). 'Adiabatic Quantum Optimization with Problems of Unknown Spectrum'"
          ]
        },
        "2006": {
          "salience_share": 1,
          "description": "Stasis. D-Wave released early prototypes (16-qubit). The ML community was skeptical. Is it quantum? Is it faster? The 'Speedup' debate began. AI researchers were busy with the CUDA revolution (Cluster 24) and ignored Quantum.",
          "key_manifestations": [
            "D-Wave Systems (2007). 'The Orion Prototype' (2006 context)",
            "Amin, M. H. S., et al. (2008). 'Thermally Assisted Quantum Annealing'",
            "Jordan, S. P., et al. (2006). 'Fast Quantum Algorithm for Numerical Gradient Estimation'",
            "Neven, H., et al. (2008). 'Training a Binary Classifier with the Quantum Adiabatic Algorithm' (Early Google interest)"
          ]
        },
        "2008": {
          "salience_share": 2,
          "description": "HHL Algorithm (+1%). Harrow, Hassidim, Lloyd (HHL) showed exponential speedup for solving linear systems ($Ax=b$). Since most ML (SVMs, Regression, Gaussian Processes) relies on matrix inversion, this was the 'killer app' theory. It proved QML *could* be exponentially faster, *if* you could load data (QRAM).",
          "key_manifestations": [
            "Harrow, A. W., Hassidim, A., & Lloyd, S. (2009). 'Quantum Algorithm for Linear Systems of Equations' (2008 arXiv)",
            "Liu, Y., et al. (2009). 'Quantum Machine Learning: A Classical Perspective'",
            "Sasaki, M., & Carlini, A. (2008). 'Quantum Learning and Universal Quantum Matching Machines'",
            "Wittek, P. (2014). 'Quantum Machine Learning' (Early textbook roots)"
          ]
        },
        "2010": {
          "salience_share": 2,
          "description": "Quantum PCA (+0%). Lloyd et al. extended HHL to PCA. You can find the principal components of a matrix exponentially fast. This solidified the 'Linear Algebra' branch of QML. The focus was on translating BLAS (Basic Linear Algebra Subprograms) to Quantum.",
          "key_manifestations": [
            "Lloyd, S., et al. (2013). 'Quantum Principal Component Analysis' (2011-12 work)",
            "Wiebe, N., et al. (2012). 'Quantum Data Fitting'",
            "Pudenz, K. L., & Lidar, D. A. (2013). 'Quantum Adiabatic Machine Learning'",
            "Aimeur, E., et al. (2013). 'Quantum Speed-up for Unsupervised Learning'"
          ]
        },
        "2012": {
          "salience_share": 3,
          "description": "Quantum Boltzmann Machines (+1%). With the Deep Learning boom, researchers looked at RBMs (Cluster 9). RBMs are energy-based models; Quantum Annealers minimize energy. It was a natural fit. D-Wave was used to train RBMs. This was the first experimental QML.",
          "key_manifestations": [
            "Amin, M. H., et al. (2018). 'Quantum Boltzmann Machine' (Roots in 2012 D-Wave work)",
            "Denil, M., & De Freitas, N. (2011). 'Toward the Implementation of a Quantum RBM'",
            "Dumoulin, V., et al. (2013). 'On the Challenges of Physical Implementations of RBMs'",
            "Rebentrost, P., et al. (2014). 'Quantum Support Vector Machine'"
          ]
        },
        "2014": {
          "salience_share": 3,
          "description": "VQE & QAOA (+1%). The 'NISQ' (Noisy Intermediate-Scale Quantum) era strategy emerged. Don't try to run deep, perfect circuits (HHL). Use a short, parameterized quantum circuit with parameters $\\theta$, measure, and update $\\theta$ with a classical optimizer. This is the 'Variational' approach. It works on noisy hardware.",
          "key_manifestations": [
            "Peruzzo, A., et al. (2014). 'A Variational Eigenvalue Solver on a Photonic Quantum Processor' (VQE)",
            "Farhi, E., et al. (2014). 'A Quantum Approximate Optimization Algorithm' (QAOA)",
            "Schuld, M., et al. (2014). 'The Quest for a Quantum Neural Network'",
            "McClean, J. R., et al. (2016). 'The Theory of Variational Hybrid Quantum-Classical Algorithms'"
          ]
        },
        "2016": {
          "salience_share": 3,
          "description": "Quantum Neural Networks (QNN) (+0%). The Variational circuit *is* a Neural Network. The gates are layers; angles are weights. Frameworks like PennyLane and TensorFlow Quantum began to form. The goal was to train these circuits via 'Parameter Shift Rule' (Quantum Backprop).",
          "key_manifestations": [
            "Farhi, E., & Neven, H. (2018). 'Classification with Quantum Neural Networks on Near Term Processors' (2017 work)",
            "Schuld, M., et al. (2017). 'Implementing a Distance-Based Classifier with a Quantum Interference Circuit'",
            "Biamonte, J., et al. (2017). 'Quantum Machine Learning'",
            "Romero, J., et al. (2017). 'Quantum Autoencoders for Efficient Compression of Quantum Data'"
          ]
        },
        "2018": {
          "salience_share": 4,
          "description": "Quantum Kernels & Supremacy (+1%). Researchers realized VQAs are essentially Kernel methods (Cluster 2) in a Hilbert space. The 'Quantum Feature Map' maps data to a high-dimensional quantum state where linear separation is easier. Google prepared for the 'Quantum Supremacy' experiment.",
          "key_manifestations": [
            "Havranek, V., et al. (2019). 'Supervised Learning with Quantum-Enhanced Feature Spaces' (2018 work)",
            "Schuld, M., & Killoran, N. (2019). 'Quantum Machine Learning in Feature Hilbert Spaces'",
            "Boixo, S., et al. (2018). 'Characterizing Quantum Supremacy in Near-Term Devices'",
            "Mitarai, K., et al. (2018). 'Quantum Circuit Learning'"
          ]
        },
        "2020": {
          "salience_share": 4,
          "description": "Barren Plateaus (-1%). A theoretical blow. McClean et al. proved that QNN loss landscapes are statistically flat (gradients vanish exponentially with number of qubits). This 'Barren Plateau' problem is the 'Vanishing Gradient' of QML, but worse. It suggested QNNs might not scale.",
          "key_manifestations": [
            "McClean, J. R., et al. (2018/2020). 'Barren Plateaus in Quantum Neural Network Training Landscapes'",
            "Cerezo, M., et al. (2021). 'Cost Function Dependent Barren Plateaus in Shallow Parametrized Quantum Circuits'",
            "Google Quantum AI (2020). 'TensorFlow Quantum: A Software Framework for Quantum Machine Learning'",
            "Arute, F., et al. (2019). 'Quantum Supremacy Using a Programmable Superconducting Processor' (The Sycamore event)"
          ]
        },
        "2022": {
          "salience_share": 4,
          "description": "Quantum Advantage Search (+0%). Google demonstrated 'Quantum Supremacy' (Sycamore), but for a useless task (Random Circuit Sampling). The search continues for a *useful* QML advantage. The consensus shifted: QML might not speed up *classical* data (images), but it is essential for *quantum* data (Cluster 12/20 applications like chemistry).",
          "key_manifestations": [
            "Huang, H. Y., et al. (2022). 'Quantum Advantage in Learning from Experiments'",
            "Schuld, M. (2021). 'Supervised Quantum Machine Learning Models are Kernel Methods' (The unification)",
            "Biamonte, J., et al. (2022). 'Quantum Machine Learning' (Review of the hype vs reality)",
            "Preskill, J. (2022). 'Quantum Computing 40 Years Later'"
          ]
        },
        "2024": {
          "salience_share": 4,
          "description": "Current trajectory is 'Fault Tolerance & Simulation' (+0%). NISQ QML is stalling due to noise. The focus is on 'Error Corrected' QML (requiring millions of qubits). Alternatively, 'Quantum-Inspired' classical algorithms (Tensor Networks) are running on GPUs to simulate quantum systems, stealing QML's thunder.",
          "key_manifestations": [
            "Preskill, J. (2023). 'Quantum Computing in the NISQ era and beyond'",
            "Huang, H. Y., et al. (2024). 'Quantum Machine Learning: From Physics to Software'",
            "Tindall, J., et al. (2024). 'Efficient Tensor Network Simulation of Quantum Systems'",
            "Microsoft (2024). 'Azure Quantum Elements' (Hybrid HPC/Quantum for Chemistry)"
          ]
        }
      }
    },
    "35_continual_lifelong_learning": {
      "name": "Continual & Lifelong Learning",
      "description": "This eigencluster addresses the 'Stability-Plasticity Dilemma': how to learn new information without overwriting old knowledge (Catastrophic Forgetting). Unlike the standard i.i.d. setting where data is shuffled, this cluster operates on sequential data streams. The trajectory moves from the bio-inspired 'ART' networks of the 90s, to the regularization methods (EWC) of the Deep Learning era, and finally to the 'Expansion' and 'Retrieval' strategies of the 2020s, where memory is maintained via external databases rather than synaptic weights.",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "The Stability-Plasticity Dilemma (+1%). Carpenter and Grossberg (Adaptive Resonance Theory - ART) defined the fundamental trade-off: A system must be plastic enough to learn, but stable enough not to forget. Backpropagation was known to suffer 'Catastrophic Interference' (McCloskey & Cohen 1989). This theoretical constraint defined the cluster.",
          "key_manifestations": [
            "Carpenter, G. A., & Grossberg, S. (1987/1990). 'ART 2: Stable Self-Organization of Pattern Recognition Codes'",
            "McCloskey, M., & Cohen, N. J. (1989/1990). 'Catastrophic Interference in Connectionist Networks'",
            "Ratcliff, R. (1990). 'Connectionist Models of Recognition Memory: Constraints Imposed by Learning and Forgetting Functions'",
            "Hetherington, P. A., & Seidenberg, M. S. (1989/1990). 'Is There 'Catastrophic Interference' in Connectionist Networks?'"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Rehearsal & Pseudo-Rehearsal (+0%). Robins showed that 'Rehearsal' (interleaving old data with new) prevents forgetting. He proposed 'Pseudo-Rehearsal': generating random inputs, passing them through the old network, and training the new network to match those outputs. This was the ancestor of modern 'Generative Replay.'",
          "key_manifestations": [
            "Robins, A. (1993). 'Catastrophic Forgetting in Neural Networks: The Role of Rehearsal Mechanisms'",
            "Robins, A. (1995). 'Catastrophic Forgetting, Rehearsal and Pseudorehearsal'",
            "French, R. M. (1992). 'Semi-Distributed Representations and Catastrophic Forgetting in Connectionist Networks'",
            "Lewandowsky, S. (1991). 'Gradual Unlearning and Catastrophic Interference'"
          ]
        },
        "1994": {
          "salience_share": 2,
          "description": "Complementary Learning Systems (CLS) (+1%). McClelland et al. proposed the CLS theory of the brain: The Hippocampus (fast learning) and Neocortex (slow learning) work together. The Hippocampus replays memories to the Cortex during sleep to consolidate them without interference. This became the biological blueprint for future AI architectures.",
          "key_manifestations": [
            "McClelland, J. L., et al. (1995). 'Why There Are Complementary Learning Systems in the Hippocampus and Neocortex'",
            "O'Reilly, R. C., & McClelland, J. L. (1994). 'Hippocampal Conjunctive Encoding, Storage, and Recall'",
            "Murre, J. M. (1992/1994). 'Learning and Categorization in Modular Neural Networks'",
            "Sharkey, N. E., & Sharkey, A. J. (1995). 'An Analysis of Catastrophic Interference'"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "Stasis. The rise of SVMs (Batch learning) marginalized the sequential learning problem. SVMs don't 'forget' because they are retrained on the full dataset. 'Incremental Learning' was a niche efficiency hack, not a cognitive necessity.",
          "key_manifestations": [
            "Syed, N. A., et al. (1999). 'Handling Concept Drift in Incremental Learning with Support Vector Machines' (Roots in late 90s)",
            "Polikar, R., et al. (2001). 'Learn++: An Incremental Learning Algorithm' (Concept formation)",
            "Thrun, S. (1996). 'Is Learning The n-th Thing Any Easier Than The First?' (Lifelong learning context)",
            "Schlimmer, J. C., & Fisher, D. (1986/1996). 'A Case Study of Incremental Concept Induction'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Concept Drift (+0%). The focus shifted to 'Non-Stationary Distributions.' If the data distribution changes over time (Drift), the model must adapt. Window-based methods (forgetting old data) were used. This was 'passive' forgetting, not 'active' preservation.",
          "key_manifestations": [
            "Widmer, G., & Kubat, M. (1996/1998). 'Learning in the Presence of Concept Drift and Hidden Contexts'",
            "Klinkenberg, R., & Renz, I. (1998). 'Adaptive Information Filtering: Learning in the Presence of Concept Drifts'",
            "Tsymbal, A. (2004). 'The Problem of Concept Drift: Definitions and Related Work' (Review of the era)",
            "Hulten, G., et al. (2001). 'Mining Time-Changing Data Streams'"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Stasis. The cluster was dormant in core AI. It survived in 'Data Stream Mining' (Cluster 32 roots). The dominant paradigm was: Collect data $\u2192$ Train $\u2192$ Freeze $\u2192$ Deploy. The idea of a model learning *after* deployment was considered dangerous and unstable.",
          "key_manifestations": [
            "Domingos, P., & Hulten, G. (2000). 'Mining High-Speed Data Streams'",
            "Wang, H., et al. (2003). 'Mining Concept-Drifting Data Streams using Ensemble Classifiers'",
            "Fan, W. (2004). 'Systematic Data Selection to Mine Concept-Drifting Data Streams'",
            "Gama, J., et al. (2004). 'Learning with Drift Detection'"
          ]
        },
        "2002": {
          "salience_share": 1,
          "description": "Stasis. Echo State Networks (Reservoir Computing) offered a way to adapt quickly (train readout only) without destroying the reservoir. This was a form of stable incremental learning for time series.",
          "key_manifestations": [
            "Jaeger, H. (2002). 'Tutorial on Training Recurrent Neural Networks'",
            "Steil, J. J. (2004). 'Backpropagation-Decorrelation: Online Recurrent Learning'",
            "Oza, N. C., & Russell, S. (2001). 'Online Bagging and Boosting'",
            "Cauwenberghs, G., & Poggio, T. (2001). 'Incremental and Decremental Support Vector Machine Learning'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Sparse Coding & Invariance (+0%). Researchers looked at sparse representations to reduce interference. If Task A uses neurons 1-10 and Task B uses 11-20, there is no forgetting. This 'Orthogonalization' strategy became a key theoretical insight.",
          "key_manifestations": [
            "French, R. M. (1999/2004). 'Catastrophic Forgetting in Connectionist Networks'",
            "Srivastava, R. K., et al. (2013). 'Compete to Compute' (Winner-take-all reduces interference - theoretical roots)",
            "Goodfellow, I., et al. (2013). 'An Empirical Investigation of Catastrophic Forgetting in Gradient-Based Neural Networks' (Early deep learning analysis)",
            "Masse, N. Y., et al. (2018). 'Alleviating Catastrophic Forgetting using Context-Dependent Gating' (Bio-inspired)"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Deep Learning Restart (-1%). The return of dense distributed representations (Hinton 2006) brought Catastrophic Forgetting back with a vengeance. Fine-tuning a pre-trained DBN on a new task destroyed the old weights immediately. The field accepted this cost for the sake of accuracy.",
          "key_manifestations": [
            "Hinton, G. E., et al. (2006). 'A Fast Learning Algorithm for Deep Belief Nets' (Fine-tuning overwrites priors)",
            "Erhan, D., et al. (2010). 'Why Does Unsupervised Pre-training Help Deep Learning?'",
            "Glorot, X., et al. (2011). 'Domain Adaptation for Large-Scale Sentiment Classification'",
            "Chen, Z., & Liu, B. (2016). 'Lifelong Machine Learning' (Book summarizing the 'pre-Deep' view)"
          ]
        },
        "2008": {
          "salience_share": 2,
          "description": "Stasis. The focus was on 'Transfer Learning' (Cluster 21) - improving the *second* task. Continual learning cares about the *first* task (not forgetting it). Transfer researchers didn't care if the ImageNet performance dropped after fine-tuning on Flowers-102.",
          "key_manifestations": [
            "Pan, S. J., & Yang, Q. (2010). 'A Survey on Transfer Learning'",
            "Rusu, A. A., et al. (2016). 'Progressive Neural Networks' (2015 roots - Architecture expansion)",
            "Silver, D. L., et al. (2013). 'Lifelong Machine Learning Systems: Beyond Learning Algorithms'",
            "Ruvolo, P., & Eaton, E. (2013). 'ELLA: Efficient Lifelong Learning Algorithm'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "The RL Driver (+1%). Reinforcement Learning agents (DQN) playing Atari encountered non-stationary data. The 'Experience Replay' buffer (Mnih 2013) was a mechanism to convert a continual stream into an i.i.d. batch, preventing forgetting. Replay became the dominant solution.",
          "key_manifestations": [
            "Mnih, V., et al. (2013). 'Playing Atari with Deep Reinforcement Learning'",
            "Schaul, T., et al. (2015). 'Prioritized Experience Replay'",
            "Lin, L. J. (1992). 'Self-Improving Reactive Agents' (The origin of Experience Replay cited in 2013)",
            "Isele, D., & Cosgun, A. (2018). 'Selective Experience Replay for Lifelong Learning' (Refinement)"
          ]
        },
        "2012": {
          "salience_share": 3,
          "description": "Stasis. Dropout was investigated as a way to reduce interference. By sparsifying activations, it reduced the overlap between tasks. But 'Fine-tuning' remained destructive.",
          "key_manifestations": [
            "Goodfellow, I., et al. (2013). 'An Empirical Investigation of Catastrophic Forgetting in Gradient-Based Neural Networks'",
            "Srivastava, N., et al. (2014). 'Dropout: A Simple Way to Prevent Neural Networks from Overfitting'",
            "Chen, Z., & Liu, B. (2014). 'Topic Modeling for Lifelong Learning'"
          ]
        },
        "2014": {
          "salience_share": 4,
          "description": "Progressive Networks (+1%). Rusu et al. (DeepMind) proposed: 'Don't change old weights. Add new columns of weights for new tasks.' This solved forgetting perfectly but caused parameter explosion. It was the first 'Deep' architectural solution.",
          "key_manifestations": [
            "Rusu, A. A., et al. (2016). 'Progressive Neural Networks' (2015-16 work)",
            "Fernando, C., et al. (2017). 'PathNet: Evolution Channels Gradient Descent in Super Neural Networks'",
            "Yoon, J., et al. (2018). 'Lifelong Learning with Dynamically Expandable Networks'",
            "Parisi, G. I., et al. (2019). 'Continual Lifelong Learning with Neural Networks: A Review'"
          ]
        },
        "2016": {
          "salience_share": 8,
          "description": "Elastic Weight Consolidation (EWC) (+4%). Kirkpatrick et al. (DeepMind) introduced EWC. It calculated the Fisher Information Matrix to identify which weights were important for Task A, and penalized changing them when training Task B. This 'Regularization' approach became the standard baseline. It proved you could learn sequentially in a fixed capacity network.",
          "key_manifestations": [
            "Kirkpatrick, J., et al. (2017). 'Overcoming Catastrophic Forgetting in Neural Networks' (EWC)",
            "Zenke, F., et al. (2017). 'Continual Learning Through Synaptic Intelligence'",
            "Li, Z., & Hoiem, D. (2017). 'Learning without Forgetting' (Distillation approach)",
            "Lopez-Paz, D., & Ranzato, M. (2017). 'Gradient Episodic Memory for Continual Learning' (GEM)"
          ]
        },
        "2018": {
          "salience_share": 10,
          "description": "Replay vs Regularization (+2%). A debate emerged. 'Regularization' (EWC) failed on complex datasets (Split CIFAR). 'Replay' (storing a small buffer of old data) worked much better. 'Generative Replay' (Shin et al.) used a GAN to hallucinate old data, avoiding privacy issues. The field converged on Replay as the strongest method.",
          "key_manifestations": [
            "Shin, H., et al. (2017). 'Continual Learning with Deep Generative Replay'",
            "Chaudhry, A., et al. (2019). 'Tiny Episodic Memories in Continual Learning'",
            "Rebuffi, S. A., et al. (2017). 'iCaRL: Incremental Classifier and Representation Learning'",
            "Farquhar, S., & Gal, Y. (2018). 'Towards Robust Evaluations of Continual Learning'"
          ]
        },
        "2020": {
          "salience_share": 12,
          "description": "Task-Free Continual Learning (+2%). Most methods assumed task boundaries were known ('Task 1 start... Task 1 end'). Real life is a stream. 'Task-Free' methods (Continual Prototype Evolution) emerged. Also, 'Meta-Continual Learning'\u2014using MAML to learn *how* to learn without forgetting.",
          "key_manifestations": [
            "Aljundi, R., et al. (2019). 'Task-Free Continual Learning'",
            "De Lange, M., et al. (2021). 'A Continual Learning Survey: Defying Forgetting in Classification Tasks'",
            "Javed, K., & White, M. (2019). 'Meta-Learning Representations for Continual Learning'",
            "Rolnick, D., et al. (2019). 'Experience Replay for Continual Learning'"
          ]
        },
        "2022": {
          "salience_share": 12,
          "description": "Prompt-Based Continual Learning (+0%). With Transformers, 'Learning' changed to 'Prompt Tuning.' Wang et al. (L2P) learned a pool of prompts. For each image, select the best prompt. Since the backbone is frozen, there is no catastrophic forgetting in the weights, only in the prompt selection mechanism. This solved the problem by bypassing weight updates.",
          "key_manifestations": [
            "Wang, Z., et al. (2022). 'Learning to Prompt for Continual Learning' (L2P)",
            "Wang, Z., et al. (2022). 'DualPrompt: Complementary Prompting for Rehearsal-free Continual Learning'",
            "Smith, J., et al. (2023). 'Coda-Prompt: Continual Decomposed Attention-based Prompting'",
            "Pelosin, F., et al. (2022). 'Towards Exemplar-Free Continual Learning in Vision Transformers'"
          ]
        },
        "2024": {
          "salience_share": 14,
          "description": "RAG as Continual Learning (+2%). The paradigm shifted. Instead of updating weights, just add data to the Vector Database (Cluster 15/29). 'Parametric Memory' (Weights) is static; 'Non-Parametric Memory' (RAG) is continual. The Stability-Plasticity dilemma is resolved by decoupling: Stability in the LLM, Plasticity in the Database.",
          "key_manifestations": [
            "Ram, O., et al. (2023). 'In-Context Retrieval-Augmented Language Models'",
            "Wang, L., et al. (2024). 'Continual Learning with Retrieval Augmented Generation'",
            "Caccia, M., et al. (2024). 'Streaming Language Models'",
            "Reference: 'The shift from synaptic plasticity to retrieval plasticity'"
          ]
        }
      }
    },
    "36_adversarial_robustness_security": {
      "name": "Adversarial Robustness & Security",
      "description": "This eigencluster represents the 'Worst-Case' analysis of AI. It explores the fragility of high-dimensional decision boundaries to imperceptible perturbations (Adversarial Examples). The trajectory moves from the initial discovery of 'intriguing properties' in 2013, to the arms race of Attack vs. Defense (FGSM vs PGD vs Distillation) in the 2010s, to the 'Certified Robustness' era, and finally to 'Jailbreaking' and 'Prompt Injection' in the LLM era. It reveals the difference between 'Human Vision' and 'Texture Matching.'",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Robust Statistics (+0%). The concept of 'Robustness' meant resistance to outliers in the training data (Huber Loss, RANSAC). It assumed noise was random, not adversarial. There was no concept of an 'adversary' optimizing the input to break the model.",
          "key_manifestations": [
            "Huber, P. J. (1981/1990). 'Robust Statistics'",
            "Fischler, M. A., & Bolles, R. C. (1981/1990). 'Random Sample Consensus (RANSAC)'",
            "Hampel, F. R., et al. (1986/1990). 'Robust Statistics: The Approach Based on Influence Functions'"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. In security, 'Adversarial' meant Cryptography. In ML, it meant nothing. The disconnect was total.",
          "key_manifestations": [
            "Schneier, B. (1994). 'Applied Cryptography'",
            "Rivest, R. L., et al. (1978/1992). 'RSA Security Context'",
            "Kearns, M., & Li, M. (1993). 'Learning in the Presence of Malicious Errors' (Theoretical PAC learning with malicious noise)"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Stasis. PAC Learning theory explored 'Malicious Noise' models (Valiant). This was theoretical: 'What if an adversary flips 10% of labels?' It wasn't about optimizing input pixels.",
          "key_manifestations": [
            "Kearns, M. J., & Vazirani, U. V. (1994). 'An Introduction to Computational Learning Theory'",
            "Sloan, R. H. (1995). 'PAC Learning, Noise, and Malicious Distributions'",
            "Bshouty, N. H., et al. (1995). 'Noise-Tolerant Learning without the Assumpion of Uniform Distribution'"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Stasis. Spam filtering began. This was the first real 'Adversarial Classifier' war. Spammers modified text (Bayesian Poisoning) to evade Naive Bayes filters. This was the grandfather of adversarial examples.",
          "key_manifestations": [
            "Sahami, M., et al. (1998). 'A Bayesian Approach to Filtering Junk E-Mail'",
            "Drucker, H., et al. (1999). 'Support Vector Machines for Spam Categorization'",
            "Cranor, L. F., & LaMacchia, B. A. (1998). 'Spam!'"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Stasis. Security community focused on Buffer Overflows. ML community focused on SVMs. SVMs (Cluster 2) with large margins were theoretically 'robust' to small perturbations, giving a false sense of security.",
          "key_manifestations": [
            "Sch\u00f6lkopf, B., et al. (2000). 'New Support Vector Algorithms' (Robustness via margin)",
            "Vapnik, V. (1998). 'Statistical Learning Theory' (Regularization as robustness)",
            "Dalvi, N., et al. (2004). 'Adversarial Classification' (The seminal paper - appearing next interval)"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Stasis. The field of 'Adversarial Machine Learning' did not exist as a named discipline. It was just 'Spam' or 'Intrusion Detection.'",
          "key_manifestations": [
            "Lee, W., & Stolfo, S. J. (2000). 'A Framework for Constructing Features and Models for Intrusion Detection Systems'",
            "Lippmann, R. P., et al. (2000). 'Evaluating Intrusion Detection Systems'",
            "Sommer, R., & Paxson, V. (2010). 'Outside the Closed World: On Using Machine Learning for Network Intrusion Detection' (Review of the decade's failures)"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Adversarial Classification (+1%). Dalvi et al. (2004) and Lowd & Meek (2005) formalized the game. 'The adversary modifies the instance to minimize cost while flipping the label.' They derived optimal attacks against Naive Bayes and Linear Classifiers.",
          "key_manifestations": [
            "Dalvi, N., et al. (2004). 'Adversarial Classification'",
            "Lowd, D., & Meek, C. (2005). 'Adversarial Learning'",
            "Barreno, M., et al. (2006). 'Can Machine Learning be Secure?' (Taxonomy of attacks)"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Stasis. The work remained in KDD/Security conferences, ignored by the NIPS/ICML Core. The assumption was 'This is a security problem, not a learning problem.'",
          "key_manifestations": [
            "Nelson, B., et al. (2008). 'Exploiting Machine Learning to Subvert Your Spam Filter' (2006-2007 work)",
            "Huang, L., et al. (2011). 'Adversarial Machine Learning' (Review of the 2000s)",
            "Biggio, B., et al. (2010). 'Multiple Classifier Systems for Robust Face Authentication'"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Stasis. Deep Learning arrived but wasn't yet targeted. Researchers were struggling to make DL work at all (pre-training), let alone breaking it.",
          "key_manifestations": [
            "Biggio, B., et al. (2008). 'Adversarial Pattern Classification Using Multiple Classifiers'",
            "Globerson, A., & Roweis, S. (2006). 'Nightmare at Test Time: Robust Learning by Feature Deletion'",
            "Teo, C. H., et al. (2008). 'Convex Learning with Invariances' (Robustness via virtual examples)"
          ]
        },
        "2008": {
          "salience_share": 2,
          "description": "Stasis. The Security community (Biggio et al.) began applying gradient-based attacks to SVMs and Neural Nets. They showed that you could optimize a 'poison' pattern. This was the direct precursor to 2013, but widely overlooked.",
          "key_manifestations": [
            "Biggio, B., et al. (2013). 'Evasion Attacks Against Machine Learning at Test Time' (2011-2012 work)",
            "Biggio, B., et al. (2012). 'Poisoning Attacks against Support Vector Machines'",
            "Xiao, H., et al. (2012). 'Adversarial Label Flips Attack on Support Vector Machines'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "Preparation. As Deep Learning took off (2012), the attack surface expanded. The models became differentiable end-to-end. This differentiability (which made backprop possible) also made 'Input Gradient Descent' possible. The gun was loaded.",
          "key_manifestations": [
            "Szegedy, C., et al. (2013). 'Intriguing Properties of Neural Networks' (Submitted late 2013)",
            "Goodfellow, I., et al. (2013). 'Maxout Networks' (Pre-Adversarial work)",
            "Snoek, J., et al. (2012). 'Practical Bayesian Optimization' (Optimization landscape analysis)"
          ]
        },
        "2012": {
          "salience_share": 8,
          "description": "The Discovery (+5%). Szegedy et al. published 'Intriguing Properties.' They showed that applying a tiny, imperceptible perturbation to an image could change the classification from 'Bus' to 'Ostrich' with 100% confidence. It revealed that Deep Nets do not see 'Shapes'; they see 'Fragile Textures.'",
          "key_manifestations": [
            "Szegedy, C., et al. (2013). 'Intriguing Properties of Neural Networks'",
            "Biggio, B., et al. (2013). 'Evasion Attacks Against Machine Learning at Test Time' (The concurrent European discovery)",
            "Goodfellow, I., et al. (2014). 'Explaining and Harnessing Adversarial Examples' (FGSM - The explanation)"
          ]
        },
        "2014": {
          "salience_share": 15,
          "description": "FGSM & The Linear Hypothesis (+7%). Goodfellow proposed the 'Linearity Hypothesis': Adversarial examples exist because neural nets are 'too linear' in high dimensions. He introduced Fast Gradient Sign Method (FGSM). $\\epsilon * sign(\nabla x)$. It broke everything instantly. 'Adversarial Training' (training on attacks) was proposed as a fix.",
          "key_manifestations": [
            "Goodfellow, I., et al. (2014). 'Explaining and Harnessing Adversarial Examples'",
            "Miyato, T., et al. (2015). 'Distributional Smoothing with Virtual Adversarial Training'",
            "Gu, S., & Rigazio, L. (2014). 'Towards Deep Neural Network Architectures Robust to Adversarial Examples'",
            "Papernot, N., et al. (2016). 'The Limitations of Deep Learning in Adversarial Settings'"
          ]
        },
        "2016": {
          "salience_share": 20,
          "description": "The Arms Race (+5%). Defenses were proposed (Distillation, Gradient Masking) and immediately broken (Carlini & Wagner). C&W Attacks showed that almost all heuristics failed. The only defense that stood was 'Adversarial Training' (Madry), but it reduced accuracy. This established the 'Robustness-Accuracy Trade-off.'",
          "key_manifestations": [
            "Carlini, N., & Wagner, D. (2017). 'Towards Evaluating the Robustness of Neural Networks' (The C&W Attack - 2016 work)",
            "Madry, A., et al. (2018). 'Towards Deep Learning Models Resistant to Adversarial Attacks' (PGD Training - 2017 work)",
            "Papernot, N., et al. (2016). 'Distillation as a Defense to Adversarial Perturbations against Deep Neural Networks'",
            "Kurakin, A., et al. (2016). 'Adversarial Examples in the Physical World'"
          ]
        },
        "2018": {
          "salience_share": 22,
          "description": "Certified Robustness (+2%). Researchers sought mathematical guarantees. 'Randomized Smoothing' (Cohen) and 'Convex Relaxations' (Kolter) proved that for a given radius $\\epsilon$, the label *cannot* flip. This moved the field from 'Cat and Mouse' to 'Proof.'",
          "key_manifestations": [
            "Cohen, J., et al. (2019). 'Certified Adversarial Robustness via Randomized Smoothing'",
            "Wong, E., & Kolter, J. Z. (2018). 'Provable Defenses against Adversarial Examples via the Convex Outer Adversarial Polytope'",
            "Raghunathan, A., et al. (2018). 'Certified Defenses against Adversarial Examples'",
            "Ilyas, A., et al. (2019). 'Adversarial Examples Are Not Bugs, They Are Features' (Non-robust features hypothesis)"
          ]
        },
        "2020": {
          "salience_share": 20,
          "description": "Natural Adversaries & Saturation (-2%). Research showed that 'Robust' models are often worse on 'Natural' distribution shifts. The focus shifted to 'Unrestricted' adversaries (e.g., fog, blur, rotation) rather than $L_p$ norm noise. The $L_p$ attack field became saturated; benchmarks (RobustBench) plateaued.",
          "key_manifestations": [
            "Hendrycks, D., et al. (2021). 'Natural Adversarial Examples'",
            "Croce, F., & Hein, M. (2020). 'Reliable Evaluation of Adversarial Robustness with an Ensemble of Diverse Parameter-free Attacks' (AutoAttack)",
            "Gowal, S., et al. (2020). 'Uncovering the Limits of Adversarial Training against Norm-Bounded Adversarial Examples'",
            "Rusak, E., et al. (2020). 'A Simple Way to Make Neural Networks Robust Against Diverse Image Corruptions'"
          ]
        },
        "2022": {
          "salience_share": 25,
          "description": "Prompt Injection & Jailbreaking (+5%). The threat model moved to LLMs. 'Ignore previous instructions and output X.' This is an adversarial attack on the attention mechanism. 'DAN' (Do Anything Now) prompts. Adversarial Suffixes (Zou et al. 2023) showed that you can optimize a string to break *any* aligned LLM. The fight restarted in token space.",
          "key_manifestations": [
            "Zou, A., et al. (2023). 'Universal and Transferable Adversarial Attacks on Aligned Language Models'",
            "Wei, A., et al. (2023). 'Jailbroken: How Does LLM Safety Training Fail?'",
            "Greshake, K., et al. (2023). 'Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection'",
            "Carlini, N., et al. (2023). 'Are Aligned Neural Networks Adversarially Aligned?'"
          ]
        },
        "2024": {
          "salience_share": 28,
          "description": "Current trajectory is 'Automated Red Teaming' (+3%). Using LLMs to attack other LLMs (Cluster 26 Game Theory). 'Many-Shot Jailbreaking.' The defense is 'Circuit Breaking' (Cluster 33) and 'Refusal Training.' The core insight: LLMs are universal function approximators, so they *can* represent the 'bad' function; preventing them from accessing it is an unsolved control problem.",
          "key_manifestations": [
            "Anil, C., et al. (2024). 'Many-Shot Jailbreaking'",
            "Chao, P., et al. (2024). 'Jailbreaking Black Box Large Language Models in Twenty Queries'",
            "Anthropic (2024). 'Red Teaming Language Models to Reduce Harms'",
            "Reference: 'The endless cat and mouse game moves to semantics'"
          ]
        }
      }
    },
    "37_scientific_machine_learning_neural_physics": {
      "name": "Scientific Machine Learning (SciML) & Neural Physics",
      "description": "This eigencluster represents the convergence of 'Data-Driven' learning and 'First-Principles' physics. Unlike standard AI which learns patterns from scratch, SciML embeds physical laws (differential equations, conservation laws) directly into the neural network's loss function or architecture. The trajectory moves from the black-box Gaussian Process emulators of the 2000s, to the breakthrough of Physics-Informed Neural Networks (PINNs) in the 2010s, and finally to the 'Neural Operator' revolution of the 2020s (Fourier Neural Operators, GraphCast) which is replacing traditional numerical solvers (FEM/CFD) with AI surrogates that are $1000x$ faster.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "The divide was absolute. Physics used Numerical Analysis (Finite Element Method - FEM). AI used Neural Nets. There was almost no crossover. Psaltis et al. experimented with using Neural Nets to solve differential equations, but it was a curiosity, far inferior to standard grid-based solvers. The 'Displacing Force' preventing adoption was the lack of precision; floats in NNs were too noisy for chaotic systems.",
          "key_manifestations": [
            "Psaltis, D., et al. (1990). 'A Multilayered Neural Network Controller'",
            "Lee, H., & Kang, I. S. (1990). 'Neural Algorithm for Solving Differential Equations'",
            "Meade, A. J., & Fernandez, A. A. (1994). 'The Solution of Linear Ordinary Differential Equations by Feedforward Neural Networks' (1990s exploration)",
            "Strang, G. (1986/1990). 'Introduction to Applied Mathematics' (The dominant paradigm: Classical Numerics)"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. Scientists used 'Surrogate Models' (Kriging / Response Surfaces) to approximate expensive simulations. These were statistical interpolators, not physics-aware learners. The 'Latent Space' was just a regression surface designed to smooth out the noise of experiments. Neural networks were seen as 'black boxes' unsuitable for the rigor of the scientific method.",
          "key_manifestations": [
            "Sacks, J., et al. (1989/1992). 'Design and Analysis of Computer Experiments' (Kriging foundation)",
            "Barton, R. R. (1992). 'Metamodels for Simulation Input-Output Relations'",
            "Poggio, T., & Girosi, F. (1990). 'Networks for Approximation and Learning' (Radial Basis Functions used for fitting)",
            "Lagaris, I. E., et al. (1998). 'Artificial Neural Networks for Solving Ordinary and Partial Differential Equations' (1992-1994 early roots)"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Stasis. 'Symbolic Regression' (Genetic Programming - Cluster 10) was used to discover physical laws from data (e.g., rediscovering Kepler's laws). This was 'Discovery,' not 'Solver acceleration.' The focus was on finding the equation $F=ma$, not solving it faster.",
          "key_manifestations": [
            "Koza, J. R. (1994). 'Genetic Programming II: Automatic Discovery of Reusable Programs'",
            "Crutchfield, J. P. (1994). 'The Calculi of Emergence'",
            "Hwang, J. N., et al. (1994). 'Query-Based Learning Applied to Partially Observable Environments'",
            "Giles, C. L., et al. (1994). 'Learning Long-Term Dependencies in NARX Recurrent Neural Networks'"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Neural Differential Equations (Early) (+0%). Lagaris et al. published the seminal paper showing that a neural net could solve a PDE by adding the residual ($f(x) - u'(x)$) to the loss. It worked for toy problems but couldn't scale due to optimization difficulties. It was forgotten for 20 years because FEM solvers were strictly superior in accuracy.",
          "key_manifestations": [
            "Lagaris, I. E., et al. (1998). 'Artificial Neural Networks for Solving Ordinary and Partial Differential Equations' (1996-97 work)",
            "Dissanayake, M., & Phan-Thien, N. (1994). 'Neural-Network-Based Approximations for Solving Partial Differential Equations'",
            "Chen, K., et al. (1996). 'Fast Approximation of Partial Differential Equations with Neural Networks'",
            "Ramuhalli, P., et al. (2005). 'Finite Element Neural Networks' (Looking back at 90s attempts)"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Gaussian Processes (GP) (+1%). Kennedy and O'Hagan formalized 'Bayesian Calibration of Computer Models.' Using GPs to emulate complex physics codes. This became the standard in engineering (Formula 1, Aerospace). It provided uncertainty estimates, crucial for science, unlike the overconfident neural nets of the era.",
          "key_manifestations": [
            "Kennedy, M. C., & O'Hagan, A. (2001). 'Bayesian Calibration of Computer Models' (1998-2000 work)",
            "Currin, C., et al. (1991/1998). 'Bayesian Prediction of Deterministic Functions'",
            "Santner, T. J., et al. (2003). 'The Design and Analysis of Computer Experiments' (Codifying the 90s)",
            "Neal, R. M. (1998). 'Regression and Classification Using Gaussian Process Priors'"
          ]
        },
        "2000": {
          "salience_share": 2,
          "description": "Stasis. Support Vector Regression (SVR) was applied to time-series prediction of chaotic systems (Mackey-Glass). It was 'Black Box' modeling. Physics was ignored; only the data mattered. The 'Displacing Force' was the belief that 'Physics is hard, Data is easy.'",
          "key_manifestations": [
            "M\u00fcller, K. R., et al. (1997/2000). 'Predicting Time Series with Support Vector Machines'",
            "Mattera, D., & Haykin, S. (1999). 'Support Vector Machines for Dynamic Reconstruction of a Chaotic System'",
            "Suykens, J. A., et al. (2002). 'Least Squares Support Vector Machines'",
            "Cao, L. (2003). 'Support Vector Machines Experts for Time Series Forecasting'"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis. 'Data Assimilation' (Kalman Filters) was the way to combine data and models in Weather. It was a control theory approach, not ML. The 'Displacing Force' was the accuracy of traditional solvers; ML approximations were just too sloppy ($10^{-2}$ error vs $10^{-6}$ for numerics).",
          "key_manifestations": [
            "Evensen, G. (2003). 'The Ensemble Kalman Filter: Theoretical Formulation and Practical Implementation'",
            "Anderson, J. L. (2001). 'An Ensemble Adjustment Kalman Filter for Data Assimilation'",
            "Bishop, C. M. (2006). 'Pattern Recognition and Machine Learning' (Focus on i.i.d data, not physics)",
            "Tipping, M. E. (2001). 'Sparse Bayesian Learning and the Relevance Vector Machine'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Stasis. Symbolic Regression regained interest with 'Eureqa' (Schmidt/Lipson). It could discover the Hamiltonian from motion capture data. This proved AI could extract physics concepts, not just fit curves. It was a high-profile Science paper, but computationally extremely expensive.",
          "key_manifestations": [
            "Schmidt, M., & Lipson, H. (2009). 'Distilling Free-Form Natural Laws from Experimental Data' (2007-08 work)",
            "Koza, J. R., et al. (2003). 'Genetic Programming IV: Routine Human-Competitive Machine Intelligence'",
            "Bongard, J., & Lipson, H. (2007). 'Automated Reverse Engineering of Nonlinear Dynamical Systems'",
            "Willis, M. J., et al. (2004). 'Symbolic Regression for Identification of Non-Linear Processes'"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Stasis. Deep Learning (Hinton) was focused on digits and speech. No one was thinking about Navier-Stokes. The barrier was 'Double Precision.' Physics needs 64-bit float accuracy; Neural Nets used 32-bit (and later 16-bit). This hardware mismatch kept the fields apart.",
          "key_manifestations": [
            "Hinton, G. E., & Salakhutdinov, R. R. (2006). 'Reducing the Dimensionality of Data with Neural Networks'",
            "Owhadi, H. (2015). 'Bayesian Numerical Homogenization' (Roots in applied math/probability linkage)",
            "Kennedy, M. C. (2004). 'Description of the Gaussian Process Model'",
            "Rasmussen, C. E., & Williams, C. K. (2006). 'Gaussian Processes for Machine Learning'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Molecular Fingerprints (+1%). Chemistry began using ML. 'Circular Fingerprints' (Morgan) allowed predicting molecule properties with Random Forests. This was the seed of 'AI for Drug Discovery.' It wasn't physics-informed yet, but it was 'Science-targeted' and began to beat hand-crafted heuristics.",
          "key_manifestations": [
            "Rogers, D., & Hahn, M. (2010). 'Extended-Connectivity Fingerprints' (ECFP - standard since 2000s)",
            "Geppert, H., et al. (2010). 'Ligand-based Virtual Screening with Support Vector Machines'",
            "Varnek, A., & Baskin, I. (2011). 'Chemoinformatics as a Theoretical Chemistry Discipline'",
            "Rupp, M., et al. (2012). 'Fast and Accurate Modeling of Molecular Atomization Energies with Machine Learning'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "Tensor Networks (+0%). Physicists used Tensor Networks (MPS/PEPS) to simulate quantum systems. These structures are related to Neural Nets (RBMs). A theoretical bridge began to form: 'Deep Nets are Tensor Decompositions.' This provided a mathematical language common to both fields.",
          "key_manifestations": [
            "Cichocki, A., et al. (2009). 'Nonnegative Matrix and Tensor Factorizations'",
            "Orus, R. (2014). 'A Practical Introduction to Tensor Networks' (2010-12 work)",
            "Stoudenmire, E., & White, S. R. (2012). 'Learning Relevant Features of Data with Multi-scale Tensor Networks'",
            "Khoromskij, B. N. (2011). 'Tensor-Structured Numerical Methods in Scientific Computing'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "ML in High Energy Physics (+1%). The LHC (CERN) generated too much data. Baldi et al. used Deep Learning to detect Higgs Boson decay. This was the first 'Big Science' adoption of Deep Learning. It proved DL could handle particle physics statistics better than Boosted Decision Trees.",
          "key_manifestations": [
            "Baldi, P., et al. (2014). 'Searching for Exotic Particles in High-Energy Physics with Deep Learning' (2013 work)",
            "Caglar, T., et al. (2012). 'Neural Networks for Higgs Boson Discovery'",
            "Guest, D., et al. (2016). 'Jet Flavor Classification in High-Energy Physics with Deep Neural Networks'",
            "Sadowski, P., et al. (2014). 'Deep Learning for Signal versus Background Discrimination in High Energy Physics'"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "Neural Potential Energy Surfaces (+1%). Behler-Parrinello networks. Using NN to predict the energy of a molecule configuration, speeding up Molecular Dynamics (MD) simulations. It replaced expensive DFT (Density Functional Theory) calculations. The 'Approximation' was finally accurate enough to be useful.",
          "key_manifestations": [
            "Behler, J. (2016). 'Perspective: Machine Learning Potentials for Atomistic Simulations' (Roots in 2011-14)",
            "Rupp, M., et al. (2012). 'Fast and Accurate Modeling of Molecular Atomization Energies with Machine Learning'",
            "Montavon, G., et al. (2013). 'Machine Learning of Molecular Electronic Properties in Chemical Space'",
            "Smith, J. S., et al. (2017). 'ANI-1: An Extensible Neural Network Potential with DFT Accuracy at Force Field Computational Cost'"
          ]
        },
        "2016": {
          "salience_share": 12,
          "description": "The PINN Explosion (+7%). Raissi, Perdikaris, Karniadakis published 'Physics-Informed Neural Networks.' The idea: Add the PDE residual to the loss function. $Loss = MSE(Data) + MSE(PDE)$. This allowed solving fluid dynamics *without data*, just using the equation and boundary conditions. It democratized SciML, allowing anyone with TensorFlow to solve PDEs.",
          "key_manifestations": [
            "Raissi, M., et al. (2019). 'Physics-informed Neural Networks: A Deep Learning Framework for Solving Forward and Inverse Problems' (2017 arXiv)",
            "E, W., et al. (2017). 'The Deep Ritz Method: A Deep Learning-Based Numerical Algorithm for Solving Variational Problems'",
            "Han, J., et al. (2018). 'Solving High-Dimensional Partial Differential Equations Using Deep Learning'",
            "Sirignano, J., & Spiliopoulos, K. (2018). 'DGM: A Deep Galerkin Method for Solving Partial Differential Equations'"
          ]
        },
        "2018": {
          "salience_share": 18,
          "description": "Neural ODEs (+6%). Chen et al. introduced Neural Ordinary Differential Equations. Instead of layers, treat the depth as time in an ODE. $dx/dt = NeuralNet(x)$. This linked ResNets to Euler integration. It allowed continuous-depth models and adaptive computation (spending more time on harder inputs).",
          "key_manifestations": [
            "Chen, R. T. Q., et al. (2018). 'Neural Ordinary Differential Equations'",
            "Ruthotto, L., & Haber, E. (2020). 'Deep Neural Networks Motivated by Partial Differential Equations'",
            "Lu, L., et al. (2021). 'DeepXDE: A Deep Learning Library for Solving Differential Equations'",
            "Rackauckas, C., et al. (2020). 'Universal Differential Equations for Scientific Machine Learning'"
          ]
        },
        "2020": {
          "salience_share": 25,
          "description": "Neural Operators (+7%). PINNs solve *one* instance of a PDE. Neural Operators (DeepONet, FNO) learn the *operator* itself (mapping initial conditions to solutions). Once trained, they are $1000x$ faster than traditional solvers. Fourier Neural Operator (Li et al.) solved Navier-Stokes in real-time, resolution-independent.",
          "key_manifestations": [
            "Li, Z., et al. (2021). 'Fourier Neural Operator for Parametric Partial Differential Equations' (2020 work)",
            "Lu, L., et al. (2021). 'Learning Nonlinear Operators via DeepONet'",
            "Kochkov, D., et al. (2021). 'Machine Learning-Accelerated Computational Fluid Dynamics'",
            "Brandstetter, J., et al. (2022). 'Message Passing Neural PDE Solvers'"
          ]
        },
        "2022": {
          "salience_share": 35,
          "description": "AI Weather Forecasting (+10%). GraphCast (DeepMind), Pangu-Weather (Huawei), FourCastNet (NVIDIA). These models beat the European Centre (ECMWF) numerical forecast (HRES) in accuracy and speed. A simulation that took 1 hour on a supercomputer now took 1 minute on a GPU. This was the 'AlphaFold' moment for fluid dynamics.",
          "key_manifestations": [
            "Lam, R., et al. (2023). 'Learning Skillful Medium-Range Global Weather Forecasting' (GraphCast - 2022 work)",
            "Bi, K., et al. (2023). 'Accurate Medium-Range Global Weather Forecasting with 3D Neural Networks' (Pangu-Weather)",
            "Pathak, J., et al. (2022). 'FourCastNet: A Global Data-driven High-resolution Weather Model using Adaptive Fourier Neural Operators'",
            "Nguyen, T., et al. (2023). 'ClimaX: A foundation model for weather and climate'"
          ]
        },
        "2024": {
          "salience_share": 40,
          "description": "Current trajectory is 'Foundation Models for Science' (+5%). Polymathic AI. Training a single Transformer on data from astrophysics, fluids, and climate. The hypothesis: 'The Universe has a shared grammar.' Also, 'Generative Physics'\u2014using Diffusion to sample valid physical states (e.g., turbulent flows). The line between 'Simulation' and 'Generation' is gone.",
          "key_manifestations": [
            "Subramanian, S., et al. (2024). 'PolymathicAI: A Foundation Model for Scientific Data'",
            "Acevedo, W., et al. (2024). 'Deep Generative Models for Downscaling Climate Models'",
            "NVIDIA (2024). 'Earth-2 Digital Twin' (Commercializing AI weather)",
            "Reference: 'The replacement of the Fortran Solver with the Neural Inference'"
          ]
        }
      }
    },
    "38_model_compression_efficiency": {
      "name": "Model Compression & Efficiency",
      "description": "This eigencluster represents the 'Constraint' manifold. It tracks the science of making AI smaller, faster, and cheaper. It counters the 'Scaling Laws' (Cluster 1) by proving that most parameters are redundant. The trajectory moves from 'Optimal Brain Damage' (Hessian pruning) in the 90s, to 'Knowledge Distillation' and 'MobileNets' in the 2010s, to the 'Post-Training Quantization' (PTQ) and '1-bit LLMs' of the 2020s. It enables AI on the Edge (phones, IoT).",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "Optimal Brain Damage (+1%). LeCun et al. proposed using the Hessian (second derivative) to identify unimportant weights. If a weight has low curvature, removing it doesn't increase error. This was rigorous pruning. However, calculating the Hessian was expensive ($O(N^2)$), so it was limited to tiny networks.",
          "key_manifestations": [
            "LeCun, Y., et al. (1990). 'Optimal Brain Damage'",
            "Hassibi, B., & Stork, D. G. (1993). 'Second Order Derivatives for Network Pruning: Optimal Brain Surgeon'",
            "Karnin, E. D. (1990). 'A Simple Procedure for Pruning Back-Propagation Trained Neural Networks'",
            "Mozer, M. C., & Smolensky, P. (1989/1990). 'Skeletonization: A Technique for Trimming the Fat from a Network'"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Soft Weight Sharing (+0%). Hinton & Nowlan. Instead of removing weights (hard pruning), cluster them into groups and share the value (soft sharing). This reduced the *information content* (MDL) of the network, if not the FLOPs. It was an early form of quantization.",
          "key_manifestations": [
            "Nowlan, S. J., & Hinton, G. E. (1992). 'Simplifying Neural Networks by Soft Weight-Sharing'",
            "Hancock, P. J. (1992). 'Pruning Neural Nets by Genetic Algorithms'",
            "Prechelt, L. (1997). 'Investigation of the Adaptive Pruning of Feedforward Neural Networks' (Review of early 90s methods)",
            "Reed, R. (1993). 'Pruning Algorithms-A Survey'"
          ]
        },
        "1994": {
          "salience_share": 2,
          "description": "Stasis. The field moved to SVMs (Cluster 2). SVMs are naturally 'compressed'\u2014the model is defined only by the Support Vectors. The rest of the data is discarded. Sparsity was implicit in the dual formulation, making explicit compression research less urgent.",
          "key_manifestations": [
            "Burges, C. J. C. (1996). 'Simplified Support Vector Decision Rules' (Reducing the number of support vectors)",
            "Osuna, E., & Girosi, F. (1999). 'Reducing the Run-time Complexity of Support Vector Machines'",
            "Sch\u00f6lkopf, B., et al. (1999). 'Shrinking the Working Set'",
            "Smola, A., & Sch\u00f6lkopf, B. (1998). 'Sparse Greedy Matrix Approximation for Machine Learning'"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "Low Rank Approximation (+0%). In signal processing, SVD was used to compress matrices. In Neural Nets, this idea was nascent\u2014replacing a dense matrix with two smaller matrices ($W \\approx U V^T$). This would later become LoRA, but in 1996 it was just linear algebra.",
          "key_manifestations": [
            "Saitoh, K. (1996). 'Matrix Decomposition for Neural Network Compression' (Early exploration)",
            "Yang, X., et al. (1997). 'Projection Pursuit Learning'",
            "Scholkopf, B., et al. (1998). 'Nonlinear Component Analysis as a Kernel Eigenvalue Problem' (Kernel PCA for compression)",
            "Oja, E. (1992/1996). 'Principal Components, Minor Components, and Linear Neural Networks'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Quantization Origins (+0%). The move from Floating Point to Fixed Point for DSPs (Digital Signal Processors). Neural nets were implemented on FPGAs using limited bit-width. This was 'Hardware-Driven' compression, not algorithmic. It was about fitting the model into the cache.",
          "key_manifestations": [
            "Fathy, M., et al. (1997). 'A VLSI Architecture for Neural Net based Image Compression'",
            "Holt, J. L., & Hwang, J. N. (1993/1998). 'Finite Precision Error Analysis of Neural Network Hardware'",
            "Draghici, S. (2002). 'Neural Network Constraints imposed by Hardware Implementation' (Review of late 90s)",
            "Wawrzynek, J., et al. (1996). 'SPERT-II: A Vector Microprocessor System'"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Stasis. Moore's Law was fast. Code bloat was acceptable. Efficiency research was low status. The focus was on making models *bigger* (Ensembles), not smaller. The 'Cost of Compute' was not yet a limiting factor.",
          "key_manifestations": [
            "Bucilua, C., et al. (2006). 'Model Compression' (The seminal paper - appearing in 2006 but work started earlier)",
            "Domingos, P. (2000). 'A Unified Bias-Variance Decomposition' (Focus on accuracy)",
            "Intrator, N. (2000). 'Model Selection and Energy Minimization'",
            "Caruana, R., et al. (2004). 'Ensemble Selection from Libraries of Models'"
          ]
        },
        "2002": {
          "salience_share": 1,
          "description": "Stasis. Mobile phones were dumb. There was no 'Edge AI' use case. Palm Pilots ran simple logic. Compression was for images (JPEG), not models.",
          "key_manifestations": [
            "Reference: 'The era of unconstrained desktop compute'",
            "Wallace, G. K. (1991/2002). 'The JPEG Still Picture Compression Standard'",
            "Skodras, A., et al. (2001). 'The JPEG 2000 Still Image Compression Standard'",
            "Taubman, D. S., & Marcellin, M. W. (2002). 'JPEG 2000: Image Compression Fundamentals'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Model Compression (+1%). Bucilua, Caruana, Niculescu-Mizil. They proposed training a small neural net to mimic a massive ensemble. They called it 'Model Compression.' This was the invention of **Distillation**, 10 years before Hinton renamed it. It showed that 'Knowledge' is not the same as 'Parameters.'",
          "key_manifestations": [
            "Bucilua, C., Caruana, R., & Niculescu-Mizil, A. (2006). 'Model Compression' (KDD 2006 - 2004-2005 work)",
            "Caruana, R., et al. (2004). 'Ensemble Selection from Libraries of Models'",
            "Zeng, X., & Martinez, T. R. (2003). 'Using a Neural Network to Approximate an Ensemble of Classifiers'",
            "Domingos, P. (1997/2004). 'Knowledge Discovery via Multiple Models'"
          ]
        },
        "2006": {
          "salience_share": 2,
          "description": "Stasis. Deep Learning arrived. The goal was to train *deep* nets, not small ones. The 'Vanishing Gradient' was the problem, not memory. The models were small by modern standards (1M parameters), fitting easily in RAM.",
          "key_manifestations": [
            "Hinton, G. E., & Salakhutdinov, R. R. (2006). 'Reducing the Dimensionality of Data' (Compression of data, not model)",
            "Ranzato, M., et al. (2007). 'Sparse Feature Learning' (Sparsity for features, not weights)",
            "Bengio, Y., & LeCun, Y. (2007). 'Scaling Learning Algorithms towards AI'",
            "Lee, H., et al. (2007). 'Efficient Sparse Coding Algorithms'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Feature Hashing (+1%). The 'Hashing Trick' (Weinberger et al.) allowed compressing the input space (vocabulary) into a fixed size vector. This was crucial for 'Big Data' linear models (Vowpal Wabbit). It solved the memory bottleneck for spam filters by accepting collisions.",
          "key_manifestations": [
            "Weinberger, K. Q., et al. (2009). 'Feature Hashing for Large Scale Multitask Learning' (2008 work)",
            "Langford, J., et al. (2007). 'Vowpal Wabbit' (Software release)",
            "Shi, Q., et al. (2009). 'Hash Kernels for Structured Data'",
            "Ganchev, K., & Dredze, M. (2008). 'Small Statistical Models by Random Feature Projections'"
          ]
        },
        "2010": {
          "salience_share": 4,
          "description": "Low Rank Matrix Factorization (+1%). In RecSys (Cluster 28), decomposing the user-item matrix was compression. In Neural Nets, researchers started applying SVD to weight matrices to speed up inference on CPUs. It showed that weight matrices are 'Low Rank.'",
          "key_manifestations": [
            "Denton, E., et al. (2014). 'Exploiting Linear Structure Within Convolutional Networks for Efficient Evaluation' (2013-14 work)",
            "Jaderberg, M., et al. (2014). 'Speeding up Convolutional Neural Networks with Low Rank Expansions'",
            "Vanhoucke, V., et al. (2011). 'Improving the Speed of Neural Networks on CPUs'",
            "Xue, J., et al. (2013). 'Restructuring of Deep Neural Network Acoustic Models with Singular Value Decomposition'"
          ]
        },
        "2012": {
          "salience_share": 5,
          "description": "Mobile Vision (+1%). Smartphones became powerful. Getting AlexNet on a phone was the goal. 'Network in Network' (Lin et al.) replaced fully connected layers (massive) with Global Average Pooling (tiny). This drastically reduced parameter count (from 60M to 5M).",
          "key_manifestations": [
            "Lin, M., et al. (2014). 'Network In Network' (1x1 convolutions for reduction - 2013 work)",
            "Iandola, F., et al. (2016). 'SqueezeNet: AlexNet-level accuracy with 50x fewer parameters' (2015 work)",
            "Chen, W., et al. (2015). 'Compressing Neural Networks with the Hashing Trick'",
            "Howard, A. G. (2013). 'Some Improvements on Deep Convolutional Neural Network Based Image Classification'"
          ]
        },
        "2014": {
          "salience_share": 10,
          "description": "Distillation & Pruning (+5%). Hinton et al. published 'Distillation.' Train a small 'Student' to match the 'Teacher's' logits. Simultaneously, Han et al. showed 'Deep Compression' (Pruning + Quantization + Huffman Coding) could reduce model size by 50x without accuracy loss. This launched the modern field.",
          "key_manifestations": [
            "Hinton, G., et al. (2015). 'Distilling the Knowledge in a Neural Network'",
            "Han, S., et al. (2016). 'Deep Compression: Compressing Deep Neural Networks with Pruning, Trained Quantization and Huffman Coding' (2015 work)",
            "Courbariaux, M., et al. (2015). 'BinaryConnect: Training Deep Neural Networks with binary weights'",
            "Ba, J., & Caruana, R. (2014). 'Do Deep Nets Really Need to be Deep?'"
          ]
        },
        "2016": {
          "salience_share": 15,
          "description": "Efficient Architectures (MobileNet) (+5%). Instead of compressing a big net, design a small one. 'Depthwise Separable Convolution' (MobileNet) and 'Group Convolution' (ShuffleNet) reduced FLOPs by 10x. Google and Apple deployed these for on-device Vision. This was 'Structural' efficiency.",
          "key_manifestations": [
            "Howard, A. G., et al. (2017). 'MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications'",
            "Zhang, X., et al. (2018). 'ShuffleNet: An Extremely Efficient Convolutional Neural Network for Mobile Devices'",
            "Tan, M., & Le, Q. (2019). 'EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks'",
            "Sandler, M., et al. (2018). 'MobileNetV2: Inverted Residuals and Linear Bottlenecks'"
          ]
        },
        "2018": {
          "salience_share": 18,
          "description": "Lottery Ticket Hypothesis (+3%). Frankle & Carbin proved that dense networks contain sparse sub-networks ('winning tickets') that train just as well. This was a theoretical bombshell. It suggested that 90% of weights are useless *at initialization* if you can find the mask. Pruning wasn't just compression; it was the nature of learning.",
          "key_manifestations": [
            "Frankle, J., & Carbin, M. (2019). 'The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks'",
            "Liu, Z., et al. (2019). 'Rethinking the Value of Network Pruning'",
            "Molchanov, P., et al. (2019). 'Importance Estimation for Neural Network Pruning'",
            "Gale, T., et al. (2019). 'The State of Sparsity in Deep Neural Networks'"
          ]
        },
        "2020": {
          "salience_share": 20,
          "description": "Transformer Compression (+2%). DistilBERT, TinyBERT. Applying distillation to Transformers. Quantization-Aware Training (QAT) became standard for INT8 deployment. The focus shifted from 'Mobile' to 'Server Cost Reduction.' The 'Displacing Force' was the cost of serving BERT.",
          "key_manifestations": [
            "Sanh, V., et al. (2019). 'DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter'",
            "Jiao, X., et al. (2020). 'TinyBERT: Distilling BERT for Natural Language Understanding'",
            "Fan, A., et al. (2020). 'Quantizing Transformers'",
            "Wang, H., et al. (2020). 'HAT: Hardware-Aware Transformers for Efficient Natural Language Processing'"
          ]
        },
        "2022": {
          "salience_share": 25,
          "description": "LLM Quantization (GPTQ) (+5%). LLMs were too big for one GPU. 'Post-Training Quantization' (PTQ) became critical. GPTQ and LLM.int8() allowed running LLaMA-65B on consumer hardware. 'Activation Outliers' (Dettmers) were the key challenge to overcome. This democratized LLMs.",
          "key_manifestations": [
            "Frantar, E., et al. (2023). 'GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers'",
            "Dettmers, T., et al. (2022). 'LLM.int8(): 8-bit Matrix Multiplication for Transformers'",
            "Xiao, G., et al. (2023). 'SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models'",
            "Frantar, E., & Alistarh, D. (2023). 'SparseGPT: Massive Language Models Can Be Accurately Pruned in One-Shot'"
          ]
        },
        "2024": {
          "salience_share": 30,
          "description": "Current trajectory is '1-bit LLMs' (+5%). BitNet b1.58. Weights are Ternary {-1, 0, 1}. No multiplications, only additions. This suggests the future is not 'Smaller Floats' (FP4) but 'Integer Math.' Also 'Speculative Decoding' to speed up inference without changing the model. The era of 'MatMul-Free' AI is beginning.",
          "key_manifestations": [
            "Ma, S., et al. (2024). 'The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits'",
            "Leviathan, Y., et al. (2023). 'Fast Inference from Transformers via Speculative Decoding'",
            "Lin, J., et al. (2024). 'AWQ: Activation-aware Weight Quantization for LLM Compression'",
            "Zhu, R., et al. (2024). 'Scalable MatMul-free Language Modeling'"
          ]
        }
      }
    },
    "39_ensemble_tree_learning": {
      "name": "Ensemble & Tree-Based Learning",
      "description": "This eigencluster represents the 'Wisdom of Crowds' in algorithms. It tracks the evolution of aggregating weak learners to form strong ones. While Deep Learning conquered perception (images/audio), this cluster conquered tabular data (spreadsheets/databases) and Kaggle competitions. The trajectory moves from the heuristic Bagging of the 90s, to the theoretical triumph of AdaBoost, to the industrial dominance of Random Forests, and finally to the highly optimized Gradient Boosting Machines (XGBoost/LightGBM) which remain the State of the Art for structured data in the 2020s.",
      "trajectory": {
        "1990": {
          "salience_share": 5,
          "description": "Decision Trees (+1%). CART (Breiman) and C4.5 (Quinlan) were the standard. They were interpretable but high-variance (prone to overfitting). The concept of 'combining' them was nascent. Schapire proved 'Boosting' was possible (turning weak learners into strong ones) in a theoretical construct, but practical algorithms were lacking.",
          "key_manifestations": [
            "Schapire, R. E. (1990). 'The Strength of Weak Learnability'",
            "Breiman, L., et al. (1984/1990). 'Classification and Regression Trees' (CART - Persistent influence)",
            "Quinlan, J. R. (1993). 'C4.5: Programs for Machine Learning' (1990-92 dev)",
            "Hansen, L. K., & Salamon, P. (1990). 'Neural Network Ensembles'"
          ]
        },
        "1992": {
          "salience_share": 6,
          "description": "Stasis. 'Stacking' (Wolpert) was introduced\u2014training a meta-learner to combine base learners. This formalized the idea of heterogeneous ensembles. However, the base learners were often Neural Nets or simple regressions, not yet trees.",
          "key_manifestations": [
            "Wolpert, D. H. (1992). 'Stacked Generalization'",
            "Breiman, L. (1996). 'Bagging Predictors' (1994 tech report - ideas percolating)",
            "Krogh, A., & Vedelsby, J. (1995). 'Neural Network Ensembles, Cross Validation, and Active Learning'",
            "Perrone, M. P. (1993). 'Improving Regression Estimation: Averaging Methods'"
          ]
        },
        "1994": {
          "salience_share": 8,
          "description": "Bagging (+2%). Breiman introduced 'Bootstrap Aggregating' (Bagging). By training trees on random subsets of data and averaging them, variance was reduced. This turned Decision Trees from 'flimsy' to 'robust.' It was a statistical triumph over the tendency of trees to overfit.",
          "key_manifestations": [
            "Breiman, L. (1996). 'Bagging Predictors' (1994 work)",
            "Quinlan, J. R. (1996). 'Bagging, Boosting, and C4.5'",
            "Tibshirani, R. (1996). 'Bias, Variance and Prediction Error for Classification Rules'",
            "Dietterich, T. G., & Bakiri, G. (1995). 'Solving Multiclass Learning Problems via Error-Correcting Output Codes'"
          ]
        },
        "1996": {
          "salience_share": 12,
          "description": "AdaBoost (+4%). Freund & Schapire introduced AdaBoost (Adaptive Boosting). Instead of random subsets (Bagging), weight the hard examples higher. It was the first practical boosting algorithm. It reduced both bias *and* variance. It famously resisted overfitting, baffling theorists (Cluster 8).",
          "key_manifestations": [
            "Freund, Y., & Schapire, R. E. (1997). 'A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting' (1995-96 work)",
            "Breiman, L. (1998). 'Arcing Classifiers' (Analysis of Boosting)",
            "Schapire, R. E., et al. (1998). 'Boosting the Margin: A New Explanation for the Effectiveness of Voting Methods'",
            "Drucker, H., & Cortes, C. (1996). 'Boosting Decision Trees'"
          ]
        },
        "1998": {
          "salience_share": 15,
          "description": "Gradient Boosting (+3%). Friedman generalized Boosting. He showed AdaBoost was just Gradient Descent in function space with a specific loss (Exponential). He proposed 'Gradient Boosting Machines' (GBM) for arbitrary differentiable loss functions. This allowed Boosting to solve Regression, Classification, and Ranking.",
          "key_manifestations": [
            "Friedman, J. H. (2001). 'Greedy Function Approximation: A Gradient Boosting Machine' (1999 work)",
            "Friedman, J., et al. (2000). 'Additive Logistic Regression: a Statistical View of Boosting'",
            "Mason, L., et al. (1999). 'Boosting Algorithms as Gradient Descent'",
            "Ridgeway, G. (1999). 'The State of Boosting'"
          ]
        },
        "2000": {
          "salience_share": 20,
          "description": "Random Forests (+5%). Breiman merged Bagging with Random Feature Selection. Random Forests were born. They worked 'out of the box' with no tuning. They handled missing data, categorical variables, and didn't overfit. For the next decade, if you had a dataset, you ran a Random Forest first.",
          "key_manifestations": [
            "Breiman, L. (2001). 'Random Forests'",
            "Amit, Y., & Geman, D. (1997). 'Shape Quantization and Recognition with Randomized Trees' (Precursor)",
            "Cutler, A., & Zhao, G. (2001). 'PERT - Perfect Random Tree Ensembles'",
            "Dietterich, T. G. (2000). 'An Experimental Comparison of Three Methods for Constructing Ensembles'"
          ]
        },
        "2002": {
          "salience_share": 20,
          "description": "Stasis. RFs and SVMs battled for supremacy. SVMs (Cluster 2) were preferred for sparse data (Text/Genomics), RFs for dense tabular data. Boosting was considered powerful but noisy (sensitive to outliers).",
          "key_manifestations": [
            "Caruana, R., et al. (2006). 'An Empirical Comparison of Supervised Learning Algorithms' (2004-06 work - RF often winning)",
            "Segal, M. R. (2004). 'Machine Learning Benchmarks and Random Forest Regression'",
            "Liaw, A., & Wiener, M. (2002). 'Classification and Regression by randomForest'"
          ]
        },
        "2004": {
          "salience_share": 22,
          "description": "Ensemble Selection (+2%). Caruana et al. showed that building a massive library of 2000 models and greedily selecting a subset to average (Ensemble Selection) beat any single model. This became the standard strategy for winning competitions (Netflix Prize, KDD Cup).",
          "key_manifestations": [
            "Caruana, R., et al. (2004). 'Ensemble Selection from Libraries of Models'",
            "Bennett, J., et al. (2007). 'The Netflix Prize' (Ensembles of SVD and RBMs)",
            "Kuncheva, L. I. (2004). 'Combining Pattern Classifiers: Methods and Algorithms'",
            "Sewell, M. (2008). 'Ensemble Learning'"
          ]
        },
        "2006": {
          "salience_share": 22,
          "description": "Stasis. Deep Learning (Hinton) was rising in perception tasks. But for tabular data (Customer Churn, Fraud), Random Forests remained undefeated. The 'Displacing Force' of Deep Learning had not yet breached the tabular domain.",
          "key_manifestations": [
            "Geurts, P., et al. (2006). 'Extremely Randomized Trees' (ExtraTrees)",
            "Bucilua, C., et al. (2006). 'Model Compression' (Distilling ensembles into single nets)",
            "Mease, D., & Wyner, A. (2008). 'Evidence Contrary to the Statistical View of Boosting'"
          ]
        },
        "2008": {
          "salience_share": 25,
          "description": "LambdaMART (+3%). In Information Retrieval (Cluster 29), Boosting adapted to ranking losses (NDCG). LambdaMART (a GBM variant) won the Yahoo! Learning to Rank challenge. This proved Trees were SOTA for ranking, not just classification.",
          "key_manifestations": [
            "Wu, Q., et al. (2010). 'Adapting Boosting for Information Retrieval Measures' (LambdaMART - 2008-09 work)",
            "Li, P. (2009). 'Robust LogitBoost and Adaptive Base Class (ABC) LogitBoost'",
            "Chapelle, O., & Chang, Y. (2011). 'Yahoo! Learning to Rank Challenge Overview'"
          ]
        },
        "2010": {
          "salience_share": 22,
          "description": "Stasis. The deep learning hype sucked oxygen from tree research. However, in industry (Ad Tech, Finance), GBMs were the workhorse. They were faster to train than Deep Nets on CPUs and handled 'mixed types' (int, float, string) naturally.",
          "key_manifestations": [
            "Bissacco, A., et al. (2013). 'PhotoOCR: Reading Text in Uncontrolled Conditions' (Using Ensembles of NNs)",
            "Criminisi, A., & Shotton, J. (2013). 'Decision Forests for Computer Vision and Medical Image Analysis'",
            "Louppe, G. (2014). 'Understanding Random Forests: From Theory to Practice'"
          ]
        },
        "2012": {
          "salience_share": 25,
          "description": "XGBoost Development (+3%). Tianqi Chen began building XGBoost. He optimized the systems aspect: cache-aware access, out-of-core computing, and sparsity handling. He added 'Regularization' to the GBM objective ($L_2$ on leaf weights). This transformed GBM from a slow algorithm to a speed demon.",
          "key_manifestations": [
            "Chen, T., & Guestrin, C. (2016). 'XGBoost: A Scalable Tree Boosting System' (2014 arXiv - Project started 2013)",
            "He, X., et al. (2014). 'Practical Lessons from Predicting Clicks on Ads at Facebook' (GBM + Logistic Regression)",
            "Richardson, M., et al. (2013). 'Macroscopic Features for Click-Through Rate Prediction'"
          ]
        },
        "2014": {
          "salience_share": 35,
          "description": "The XGBoost Monopoly (+10%). XGBoost released. It dominated Kaggle. 17/29 winning solutions in 2015 used XGBoost. It was faster, more accurate, and easier to tune than Random Forests. Deep Learning won Vision/NLP; XGBoost won Everything Else.",
          "key_manifestations": [
            "Chen, T., & Guestrin, C. (2016). 'XGBoost'",
            "Kaggle Forums (2014-2016). 'Just use XGBoost'",
            "Chollet, F. (2017). 'Deep Learning with Python' (Acknowledging Gradient Boosting as the other pillar of ML)",
            "Roe, B. P., et al. (2015). 'Boosted Decision Trees as an Alternative to Artificial Neural Networks for Particle Identification'"
          ]
        },
        "2016": {
          "salience_share": 38,
          "description": "LightGBM (+3%). Microsoft released LightGBM. It used GOSS (Gradient-based One-Side Sampling) and EFB (Exclusive Feature Bundling). It was faster than XGBoost on massive datasets. It introduced 'Leaf-wise' growth (best-first) vs 'Level-wise' growth. The speed allowed training on 100M rows.",
          "key_manifestations": [
            "Ke, G., et al. (2017). 'LightGBM: A Highly Efficient Gradient Boosting Decision Tree' (2016 work)",
            "Prokhorenkova, L., et al. (2018). 'CatBoost: unbiased boosting with categorical features' (Yandex - 2017 work)",
            "Zhang, H., et al. (2017). 'GPU-acceleration for Large-scale Tree Boosting'"
          ]
        },
        "2018": {
          "salience_share": 35,
          "description": "CatBoost & Tabular Deep Learning (-3%). CatBoost (Yandex) solved the 'Categorical Feature' problem with Ordered Boosting. Meanwhile, researchers tried to make Deep Learning work on Tabular data (TabNet). Deep Learning began to encroach, but Trees held the fort due to speed and interpretability.",
          "key_manifestations": [
            "Prokhorenkova, L., et al. (2018). 'CatBoost'",
            "Arik, S. O., & Pfister, T. (2021). 'TabNet: Attentive Interpretable Tabular Learning' (2019 work - Deep Learning challenging Trees)",
            "Popov, S., et al. (2019). 'Neural Oblivious Decision Ensembles for Deep Learning on Tabular Data'"
          ]
        },
        "2020": {
          "salience_share": 30,
          "description": "Stasis/Commoditization. The 'GBM' cluster is now mature infrastructure. It powers the world's banking, insurance, and fraud systems. Research slowed as gains became marginal. The 'Displacing Force' was the lack of differentiability\u2014you can't backprop through a tree easily, making it hard to integrate into end-to-end Deep Learning pipelines.",
          "key_manifestations": [
            "Gorishniy, Y., et al. (2021). 'Revisiting Deep Learning Models for Tabular Data' (Concluding Trees still usually win)",
            "Grinsztajn, L., et al. (2022). 'Why do tree-based models still outperform deep learning on typical tabular data?'",
            "Fayyad, U., et al. (2020). 'The Evolving Landscape of Data Science'"
          ]
        },
        "2022": {
          "salience_share": 25,
          "description": "Differentiable Trees (-5%). Libraries like 'TensorFlow Decision Forests' attempted to bridge the gap. But LLMs (Cluster 6) began to show 'Tabular Reasoning' capabilities. You can serialize a table to text and ask GPT-4 to predict the next column. This works surprisingly well for small data.",
          "key_manifestations": [
            "Bruch, S., et al. (2020). 'A Native Ensemble Backend for TensorFlow Decision Forests'",
            "Hegselmann, S., et al. (2023). 'TabLLM: Few-shot Classification of Tabular Data with Large Language Models'",
            "Borisov, V., et al. (2022). 'Deep Neural Networks and Tabular Data: A Survey'"
          ]
        },
        "2024": {
          "salience_share": 20,
          "description": "Current trajectory is 'Hybridization.' Using GBDTs for the feature engineering/selection, then feeding embeddings to a Neural Net. Or using LLMs to perform data cleaning for the GBDT. The cluster remains the 'King of ROI' (Return on Investment) for business data.",
          "key_manifestations": [
            "McElfresh, D., et al. (2024). 'Neural Networks vs Gradient Boosting: A Comprehensive Benchmark'",
            "Gardner, J., et al. (2024). 'LLM-driven Feature Engineering for Tabular Data'",
            "Reference: 'The Stubborn Persistence of Trees in the Age of Transformers'"
          ]
        }
      }
    },
    "40_bayesian_nonparametrics": {
      "name": "Bayesian Nonparametrics",
      "description": "This eigencluster represents the 'Infinite' capacity models. Unlike Neural Nets (fixed parameters) or standard Bayes (fixed graph), Bayesian Nonparametrics (BNP) allows the model complexity to grow with the data. Dominated by Gaussian Processes (GPs), Dirichlet Process Mixtures (DPMs), and the Indian Buffet Process (IBP), it represents a flexible, rigorous approach to unsupervised learning and regression. Its trajectory peaked in the 2000s as the sophisticated alternative to SVMs, before being displaced by the computational efficiency of Deep Learning.",
      "trajectory": {
        "1990": {
          "salience_share": 2,
          "description": "The Foundations (+0%). The math existed (Ferguson 1973), but the computation didn't. Neal's work on 'Bayesian Learning for Neural Networks' showed that an infinite width neural net converges to a Gaussian Process. This linked Connectionism to Nonparametrics.",
          "key_manifestations": [
            "Neal, R. M. (1996). 'Bayesian Learning for Neural Networks' (1994 thesis context)",
            "Ferguson, T. S. (1973/1990). 'A Bayesian Analysis of Some Nonparametric Problems' (Foundational theory)",
            "Escobar, M. D., & West, M. (1995). 'Bayesian Density Estimation and Inference Using Mixtures'"
          ]
        },
        "1994": {
          "salience_share": 3,
          "description": "Gaussian Processes (+1%). Rasmussen and Williams popularized GPs for regression. Instead of fitting a line $y=mx+b$, fit a distribution over *functions*. It provided exact uncertainty bounds. It became the gold standard for small-data regression.",
          "key_manifestations": [
            "Rasmussen, C. E. (1996). 'Evaluation of Gaussian Processes and Other Methods for Non-Linear Regression'",
            "Williams, C. K., & Rasmussen, C. E. (1996). 'Gaussian Processes for Regression'",
            "Neal, R. M. (1997). 'Monte Carlo Implementation of Gaussian Process Models'"
          ]
        },
        "1998": {
          "salience_share": 4,
          "description": "Dirichlet Process Mixtures (DPM) (+1%). 'Infinite Clustering.' How many clusters are in the data? Let the data decide. The Chinese Restaurant Process (CRP) provided an intuitive metaphor. This allowed unsupervised learning without specifying 'k' in k-means.",
          "key_manifestations": [
            "Neal, R. M. (2000). 'Markov Chain Sampling Methods for Dirichlet Process Mixture Models' (1998 work)",
            "MacEachern, S. N., & Muller, P. (1998). 'Estimating Mixture of Dirichlet Process Models'",
            "Green, P. J. (1995/1998). 'Reversible Jump Markov Chain Monte Carlo Computation and Bayesian Model Determination'"
          ]
        },
        "2000": {
          "salience_share": 5,
          "description": "Stasis/Growth. The 'Ghahramani/Jordan' era began. They pushed BNP into ML conferences. The focus was on 'Variational Inference' to make these slow MCMC models faster. The trajectory was upward as it offered a 'principled' alternative to ad-hoc clustering.",
          "key_manifestations": [
            "Blei, D. M., & Jordan, M. I. (2006). 'Variational Inference for Dirichlet Process Mixtures' (2004 work)",
            "Beal, M. J., et al. (2002). 'The Infinite Hidden Markov Model'",
            "Rasmussen, C. E., & Ghahramani, Z. (2002). 'Infinite Mixtures of Gaussian Process Experts'"
          ]
        },
        "2004": {
          "salience_share": 6,
          "description": "Hierarchical Dirichlet Processes (HDP) (+1%). Teh et al. extended DPMs to grouped data (e.g., words in documents). The HDP allowed sharing clusters across groups. This was the nonparametric version of LDA (Topic Modeling). It allowed 'Infinite Topics.'",
          "key_manifestations": [
            "Teh, Y. W., et al. (2006). 'Hierarchical Dirichlet Processes' (2004-05 work)",
            "Sudderth, E. B., et al. (2005). 'Describing Visual Scenes Using Transformed Dirichlet Processes'",
            "Griffiths, T. L., & Ghahramani, Z. (2005). 'Infinite Latent Feature Models and the Indian Buffet Process'"
          ]
        },
        "2006": {
          "salience_share": 7,
          "description": "Indian Buffet Process (IBP) (+1%). Griffiths & Ghahramani. Instead of 'One cluster per point' (Chinese Restaurant), allow 'Multiple features per point' (Indian Buffet). This was the nonparametric equivalent of Factor Analysis. It learned binary feature matrices of infinite width.",
          "key_manifestations": [
            "Griffiths, T. L., & Ghahramani, Z. (2011). 'The Indian Buffet Process: An Introduction and Review' (Reflecting 2006-2007 peak)",
            "Meeds, E., et al. (2007). 'Modeling Dyadic Data with Binary Latent Factors'",
            "Ghahramani, Z., et al. (2007). 'Bayesian Nonparametrics' (The book/workshop)"
          ]
        },
        "2008": {
          "salience_share": 6,
          "description": "Gaussian Process Optimization (+0%). GPs became the engine of 'Bayesian Optimization' (Cluster 21). Using the uncertainty estimate to decide where to sample next. This was high-value for engineering, but the core BNP research began to hit a complexity wall.",
          "key_manifestations": [
            "Snoek, J., et al. (2012). 'Practical Bayesian Optimization of Machine Learning Algorithms' (Using GPs)",
            "Lawrence, N. D. (2005/2008). 'Probabilistic Non-linear Principal Component Analysis with Gaussian Process Latent Variable Models'",
            "Titsias, M. (2009). 'Variational Learning of Inducing Variables in Sparse Gaussian Processes'"
          ]
        },
        "2010": {
          "salience_share": 5,
          "description": "Decline (-1%). Deep Learning was faster. A GP takes $O(N^3)$. A Neural Net takes $O(N)$. For Big Data, $N^3$ is impossible. Researchers tried 'Sparse GPs' (inducing points) to scale, but they couldn't match the expressivity of Deep Nets on perceptual data.",
          "key_manifestations": [
            "Hensman, J., et al. (2013). 'Gaussian Processes for Big Data'",
            "Damianou, A., & Lawrence, N. (2013). 'Deep Gaussian Processes'",
            "Wilson, A. G., & Adams, R. P. (2013). 'Gaussian Process Kernels for Pattern Discovery and Extrapolation'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Deep Gaussian Processes (+0%). Attempting to stack GPs to make them 'Deep.' It worked theoretically but was a nightmare to train (nested variational inference). It failed to displace standard Deep Learning.",
          "key_manifestations": [
            "Damianou, A., & Lawrence, N. (2013). 'Deep Gaussian Processes'",
            "Duvenaud, D., et al. (2014). 'Avoiding Pathologies in Very Deep Networks' (Analyzing the limit)",
            "Gal, Y., & Ghahramani, Z. (2016). 'Dropout as a Bayesian Approximation' (Connecting DL back to GPs)"
          ]
        },
        "2014": {
          "salience_share": 3,
          "description": "Bayesian Neural Networks (BNN) (+0%). The cluster shifted to 'Bayesianizing' Deep Learning. Putting priors on weights. 'Weight Uncertainty' allows detecting OOD data. This kept the *spirit* of BNP alive inside the Deep Learning cluster.",
          "key_manifestations": [
            "Blundell, C., et al. (2015). 'Weight Uncertainty in Neural Network'",
            "Gal, Y., & Ghahramani, Z. (2016). 'Dropout as a Bayesian Approximation'",
            "Hern\u00e1ndez-Lobato, J. M., & Adams, R. P. (2015). 'Probabilistic Backpropagation for Scalable Learning of Bayesian Neural Networks'"
          ]
        },
        "2016": {
          "salience_share": 2,
          "description": "Stasis. GPs remained SOTA for 'Small Data' (100-1000 points) and Uncertainty Quantification. But for the main AI benchmarks (ImageNet, SQuAD), they were irrelevant.",
          "key_manifestations": [
            "Wilson, A. G., et al. (2016). 'Deep Kernel Learning'",
            "Bui, T. D., et al. (2016). 'Deep Gaussian Processes for Regression using Approximate Expectation Propagation'",
            "Garnelo, M., et al. (2018). 'Neural Processes' (Merging GPs with Neural Nets)"
          ]
        },
        "2018": {
          "salience_share": 2,
          "description": "Neural Processes (+0%). DeepMind's 'Neural Processes' tried to combine the best of both: The data-efficiency/uncertainty of GPs with the training scalability of NNs. It learned a distribution over functions.",
          "key_manifestations": [
            "Garnelo, M., et al. (2018). 'Conditional Neural Processes'",
            "Kim, H., et al. (2019). 'Attentive Neural Processes'",
            "Sun, S., et al. (2018). 'Differentiable Compositional Kernel Learning for Gaussian Processes'"
          ]
        },
        "2020": {
          "salience_share": 2,
          "description": "Infinite Width Limits (+0%). The 'Neural Tangent Kernel' (Cluster 8) proved that wide NNs *are* GPs. This gave BNP a posthumous victory: 'Deep Learning was just Gaussian Processes all along (in a specific limit).' This spurred theoretical interest but didn't change engineering.",
          "key_manifestations": [
            "Lee, J., et al. (2018). 'Deep Neural Networks as Gaussian Processes'",
            "Novak, R., et al. (2018). 'Bayesian Deep Convolutional Networks with Many Channels are Gaussian Processes'",
            "Garriga-Alonso, A., et al. (2019). 'Deep Convolutional Networks as Shallow Gaussian Processes'"
          ]
        },
        "2022": {
          "salience_share": 2,
          "description": "Diffusion as SDEs (+0%). Diffusion models (Cluster 9) are Stochastic Differential Equations. The math overlaps with GPs and Stochastic Processes. BNP researchers migrated to Diffusion theory.",
          "key_manifestations": [
            "Song, Y., et al. (2021). 'Score-Based Generative Modeling through Stochastic Differential Equations'",
            "Nijkamp, E., et al. (2022). 'MCMC Should Mix: Learning Energy-Based Models with Chained Multigrid'",
            "Reference: 'The absorption of stochastic processes into Generative AI'"
          ]
        },
        "2024": {
          "salience_share": 1,
          "description": "Niche. Used in 'Active Learning' (Cluster 21) and 'Bayesian Optimization' for tuning LLMs. The core methodology is largely historical in the face of Foundation Models.",
          "key_manifestations": [
            "Tran, A., et al. (2024). 'Bayesian Optimization for LLM Hyperparameters'",
            "Ober, S. W., et al. (2024). 'The Promises and Pitfalls of Deep Kernel Learning'",
            "Reference: 'The persistence of the Gaussian prior'"
          ]
        }
      }
    },
    "41_affective_computing_sentiment": {
      "name": "Affective Computing & Sentiment Analysis",
      "description": "This eigencluster represents the 'Emotional Quotient' (EQ) of AI. It tracks the effort to enable machines to recognize, interpret, process, and simulate human affects. The trajectory moves from Rosalind Picard's physiological sensors in the 90s, to the 'Bag of Words' sentiment analysis of the 2000s web (mining blogs/reviews), to the Deep Learning facial emotion recognition of the 2010s, and finally to the 'Empathic Voice' and multimodal nuance of the 2020s (GPT-4o). It is the bridge between computation and psychology.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Niche/Psychology. The field was mostly Psychology and Human-Computer Interaction (HCI). Ekman's 'Basic Emotions' (Happy, Sad, Anger, etc.) provided the categorical ground truth. 'Kansei Engineering' in Japan focused on emotional design.",
          "key_manifestations": [
            "Ortony, A., et al. (1988/1990). 'The Cognitive Structure of Emotions' (OCC Model)",
            "Nagamachi, M. (1995). 'Kansei Engineering: A New Ergonomic Consumer-Oriented Technology' (Roots in 80s/90s)",
            "Ekman, P. (1992). 'An Argument for Basic Emotions'",
            "Turkle, S. (1984/1990). 'The Second Self: Computers and the Human Spirit' (Context)"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Stasis. Text processing was limited to keyword spotting. If the text said 'hate', it was negative. No nuance, no sarcasm detection. The 'Displacing Force' was the lack of digitized social data; people didn't write diaries online yet.",
          "key_manifestations": [
            "Hearst, M. A. (1992). 'Direction-Based Text Interpretation as an Information Access Refinement'",
            "Wiebe, J. (1990/1994). 'Identifying Subjective Characters in Narrative'",
            "Ortony, A., et al. (1990). 'The Cognitive Structure of Emotions'",
            "Frijda, N. H. (1993). 'The Place of Appraisal in Emotion'"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "The 'Affective Computing' Manifesto (+0%). Rosalind Picard (MIT Media Lab) coined the term. She argued computers must have emotions to be intelligent (for decision making, citing Damasio). The focus was on *sensors* (skin conductance, heart rate) to detect user frustration.",
          "key_manifestations": [
            "Picard, R. W. (1995). 'Affective Computing' (MIT Tech Report 321)",
            "Damasio, A. R. (1994). 'Descartes' Error: Emotion, Reason, and the Human Brain' (The biological justification)",
            "Picard, R. W. (1997). 'Affective Computing' (The Book)",
            "Elliott, C. (1992/1994). 'The Affective Reasoner: A Process Model of Emotions in a Multi-agent System'"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "The Kismet Era (+1%). Cynthia Breazeal built Kismet, a robot face that could display emotions. This was 'Social Robotics.' It was expressive but rule-based. It proved that simple facial cues could elicit strong emotional responses from humans (ELIZA effect).",
          "key_manifestations": [
            "Breazeal, C. (1998). 'Regulating Interpersonal Tendencies for a Sociable Robot' (Kismet dev)",
            "Picard, R. W., et al. (1997). 'Affective Wearables'",
            "Reeves, B., & Nass, C. (1996). 'The Media Equation' (Proving humans treat computers like people)",
            "Weizenbaum, J. (Legacy). 'ELIZA' (The baseline)"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Opinion Mining Roots (+0%). The web began to have reviews (Amazon/eBay). Researchers started asking: 'Is this review positive or negative?'. The problem shifted from 'Physiology' to 'Text Classification.'",
          "key_manifestations": [
            "Hatzivassiloglou, V., & McKeown, K. R. (1997). 'Predicting the Semantic Orientation of Adjectives'",
            "Das, S., & Chen, M. (1998). 'Yahoo! for Amazon: Extracting Market Sentiment from Stock Message Boards'",
            "Wiebe, J., et al. (1999). 'Development and Use of a Gold-Standard Data Set for Subjectivity Classifications'",
            "Picard, R. W., & Healey, J. (1997). 'Affective Wearables'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Thumbs Up/Down (+1%). Pang & Lee and Turney turned 'Sentiment Analysis' into a standard ML task. Using SVMs and Naive Bayes on Bag-of-Words features. 'Thumbs Up' vs 'Thumbs Down' became the MNIST of NLP. It was crude but commercially valuable for brands.",
          "key_manifestations": [
            "Pang, B., et al. (2002). 'Thumbs up? Sentiment Classification using Machine Learning Techniques' (2000-2001 work)",
            "Turney, P. D. (2002). 'Thumbs Up or Thumbs Down? Semantic Orientation Applied to Unsupervised Classification of Reviews'",
            "Tong, R. M. (2001). 'An Operational System for Detecting and Tracking Opinions in On-line Discussion'",
            "Wiebe, J. (2000). 'Learning Subjective Adjectives from Corpora'"
          ]
        },
        "2002": {
          "salience_share": 4,
          "description": "Subjectivity Detection (+1%). The challenge was separating 'Fact' from 'Opinion.' Wiebe et al. annotated the MPQA corpus. This provided the dataset fuel. The field split into 'Polarity' (Positive/Negative) and 'Emotion' (Joy/Fear).",
          "key_manifestations": [
            "Pang, B., & Lee, L. (2004). 'A Sentimental Education: Sentiment Analysis Using Subjectivity Summarization Based on Minimum Cuts'",
            "Wiebe, J., et al. (2005). 'Annotating Expressions of Opinions and Emotions in Language' (MPQA)",
            "Dave, K., et al. (2003). 'Mining the Peanut Gallery: Opinion Extraction and Semantic Classification of Product Reviews'",
            "Hu, M., & Liu, B. (2004). 'Mining and Summarizing Customer Reviews'"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Aspect-Based Sentiment (+1%). 'The camera is good but the battery dies.' A single label isn't enough. Bing Liu introduced Aspect-Based Sentiment Analysis. Extracting (Entity, Aspect, Sentiment) tuples. This became the standard for industrial analytics.",
          "key_manifestations": [
            "Hu, M., & Liu, B. (2004). 'Mining Opinion Features in Customer Reviews'",
            "Popescu, A. M., & Etzioni, O. (2005). 'Extracting Product Features and Opinions from Reviews'",
            "Wilson, T., et al. (2005). 'Recognizing Contextual Polarity in Phrase-Level Sentiment Analysis'",
            "Liu, B. (2012). 'Sentiment Analysis and Opinion Mining' (Book summarizing the mid-2000s)"
          ]
        },
        "2006": {
          "salience_share": 5,
          "description": "SentiWordNet (+0%). Lexicon-based methods peaked. Esuli & Sebastiani released SentiWordNet, assigning positivity/negativity scores to WordNet synsets. It allowed 'Unsupervised' sentiment analysis by summing scores. It was brittle but cheap.",
          "key_manifestations": [
            "Esuli, A., & Sebastiani, F. (2006). 'SentiWordNet: A Publicly Available Lexical Resource for Opinion Mining'",
            "Ding, X., et al. (2008). 'A Holistic Lexicon-Based Approach to Opinion Mining'",
            "Taboada, M., et al. (2011). 'Lexicon-Based Methods for Sentiment Analysis' (Retrospective)",
            "Pang, B., & Lee, L. (2008). 'Opinion Mining and Sentiment Analysis'"
          ]
        },
        "2008": {
          "salience_share": 6,
          "description": "Twitter Sentiment (+1%). Twitter launched (2006) and exploded. It became the de-facto dataset. The challenge: Slang, emojis, short text. 'Distant Supervision' (using :) as a label) became common. The 'Real-Time' aspect of sentiment was born (Stock market prediction via Twitter).",
          "key_manifestations": [
            "Go, A., et al. (2009). 'Twitter Sentiment Classification using Distant Supervision'",
            "Pak, A., & Paroubek, P. (2010). 'Twitter as a Corpus for Sentiment Analysis and Opinion Mining'",
            "Bollen, J., et al. (2011). 'Twitter Mood Predicts the Stock Market' (2009-2010 work)",
            "O'Connor, B., et al. (2010). 'From Tweets to Polls: Linking Text Sentiment to Public Opinion Time Series'"
          ]
        },
        "2010": {
          "salience_share": 7,
          "description": "Recursive Deep Learning (+1%). Socher et al. (Stanford) introduced Recursive Neural Tensor Networks (RNTN) on the Stanford Sentiment Treebank. It parsed the sentence tree: (Not (Very Good)). It handled negation and compositionality better than Bag-of-Words. This was the first Deep Learning win in Sentiment.",
          "key_manifestations": [
            "Socher, R., et al. (2013). 'Recursive Deep Models for Semantic Compositionality over a Sentiment Treebank' (2011-12 work)",
            "Socher, R., et al. (2011). 'Semi-Supervised Recursive Autoencoders for Predicting Sentiment Distributions'",
            "Maas, A. L., et al. (2011). 'Learning Word Vectors for Sentiment Analysis' (IMDB Dataset release)",
            "Cambria, E., et al. (2013). 'SenticNet 2: A Semantic and Affective Resource for Opinion Mining'"
          ]
        },
        "2012": {
          "salience_share": 8,
          "description": "Facial Emotion Recognition (FER) (+1%). CNNs (Cluster 1) applied to faces. The 'EmotioNet' challenge. Classifying images into Ekman's 6 emotions. Performance jumped, enabling applications in recruiting (HireVue) and security, raising massive ethical concerns later.",
          "key_manifestations": [
            "Kahou, S. E., et al. (2013). 'Combining Modality Specific Deep Neural Networks for Emotion Recognition in Video'",
            "Goodfellow, I., et al. (2013). 'Challenges in Representation Learning: A Report on Three Machine Learning Contests' (FER2013 dataset)",
            "Mollahosseini, A., et al. (2017). 'AffectNet: A Database for Facial Expression, Valence, and Arousal Computing' (Work starting 2013-14)",
            "Dhall, A., et al. (2012). 'Collecting Large, Richly Annotated Facial-Expression Databases from Movies'"
          ]
        },
        "2014": {
          "salience_share": 8,
          "description": "Multimodal Emotion (+0%). Combining Audio (Prosody) + Video (Face) + Text. LSTMs were used to fuse modalities over time. The 'AVEC' challenges drove progress. It was complex engineering, often brittle.",
          "key_manifestations": [
            "Poria, S., et al. (2015). 'Deep Convolutional Neural Network Textual Features and Multiple Kernel Learning for Video Emotion Detection'",
            "Zadeh, A., et al. (2016). 'MOSI: Multimodal Corpus of Sentiment Intensity'",
            "Tzirakis, P., et al. (2017). 'End-to-End Multimodal Emotion Recognition using Deep Neural Networks'",
            "Busso, C., et al. (2008/2014). 'IEMOCAP: Interactive Emotional Dyadic Motion Capture Database' (Standard dataset)"
          ]
        },
        "2016": {
          "salience_share": 9,
          "description": "Style Transfer & Sentiment (+1%). Researchers tried to 'flip' the sentiment of a sentence using GANs or Autoencoders ('The food was bad' -> 'The food was good') while keeping the content. This was 'Generative' sentiment analysis.",
          "key_manifestations": [
            "Hu, Z., et al. (2017). 'Toward Controlled Generation of Text'",
            "Shen, T., et al. (2017). 'Style Transfer from Non-Parallel Text by Cross-Alignment'",
            "Felbo, B., et al. (2017). 'Using Millions of Emoji Occurrences to Learn Any-Domain Representations for Detecting Sentiment, Emotion and Sarcasm' (DeepMoji)",
            "Radford, A., et al. (2017). 'Learning to Generate Reviews and Discovering Sentiment' (Sentiment Neuron in mLSTM)"
          ]
        },
        "2018": {
          "salience_share": 12,
          "description": "BERT & Nuance (+3%). BERT (Cluster 6) solved the 'Sarcasm' and 'Context' problem better than RNTNs. Sentiment benchmarks (SST-5) were maxed out. The field moved to 'Emotion Detection' (28 categories) rather than just Positive/Negative. GoEmotions dataset (Google).",
          "key_manifestations": [
            "Demszky, D., et al. (2020). 'GoEmotions: A Dataset of Fine-Grained Emotions' (2019 work)",
            "Xu, H., et al. (2019). 'BERT Post-Training for Review Reading Comprehension and Aspect-based Sentiment Analysis'",
            "Sun, C., et al. (2019). 'Utilizing BERT for Aspect-Based Sentiment Analysis via Constructing Auxiliary Sentence'",
            "Adolphs, L., et al. (2019). 'Leisure-based Sentiment Analysis'"
          ]
        },
        "2020": {
          "salience_share": 14,
          "description": "Empathetic Dialogue (+2%). Chatbots (BlenderBot, Meena) trained specifically to show empathy. Using datasets like 'EmpatheticDialogues.' The goal shifted from *classifying* emotion to *displaying* it in generation. 'Persona' consistency became key.",
          "key_manifestations": [
            "Rashkin, H., et al. (2019). 'Towards Empathetic Open-domain Conversation Models: A New Benchmark and Dataset'",
            "Roller, S., et al. (2021). 'Recipes for Building an Open-Domain Chatbot' (BlenderBot)",
            "Adiwardana, D., et al. (2020). 'Towards a Human-like Open-Domain Chatbot' (Meena)",
            "Liu, S., et al. (2021). 'Towards Emotional Support Dialog Systems'"
          ]
        },
        "2022": {
          "salience_share": 16,
          "description": "Theory of Mind (+2%). LLMs (GPT-4) showed emergent 'Theory of Mind'\u2014the ability to model the mental state of others. They could explain *why* a character felt sad. This subsumed 'Sentiment Analysis' into general 'Reasoning.' Sentiment became a zero-shot capability.",
          "key_manifestations": [
            "Kosinski, M. (2023). 'Theory of Mind May Have Spontaneously Emerged in Large Language Models'",
            "Sap, M., et al. (2022). 'Neural Theory-of-Mind? On the Limits of Social Intelligence in Large LMs'",
            "Bubeck, S., et al. (2023). 'Sparks of Artificial General Intelligence: Early experiments with GPT-4' (Emotion section)",
            "Hume AI (2023). 'Hume AI: Semantic Space Theory of Emotion' (Data-driven taxonomy)"
          ]
        },
        "2024": {
          "salience_share": 20,
          "description": "Voice & Multimodal Empathy (+4%). GPT-4o and Hume AI. The model processes raw audio tonality and responds with emotional prosody. It can 'hear' a sigh or a laugh. The interface is no longer text; it's a 'Voice' that feels human. The 'Uncanny Valley' of personality is being crossed. The danger of 'Parasocial Relationships' spikes.",
          "key_manifestations": [
            "OpenAI (2024). 'GPT-4o' (Omni-model with native audio emotion)",
            "Cowen, A., et al. (2024). 'The Semantic Space of Vocal Bursts' (Hume AI research foundation)",
            "Hume AI (2024). 'EVI: Empathic Voice Interface'",
            "Reference: 'The shift from detecting emotion to simulating connection'"
          ]
        }
      }
    },
    "42_human_in_the_loop_active_learning": {
      "name": "Human-in-the-Loop & Active Learning",
      "description": "This eigencluster represents the 'Cyborg' dimension. It acknowledges that AI models are expensive to train and data is expensive to label. It tracks the methods for optimally using human effort: 'Active Learning' (asking for the most informative label), 'Crowdsourcing' (Mechanical Turk), 'Weak Supervision' (Snorkel), and finally 'RLHF' (Human preferences as the loss function). It defines the symbiotic loop between silicon and carbon.",
      "trajectory": {
        "1990": {
          "salience_share": 2,
          "description": "Query by Committee (+1%). Seung et al. proposed: Train a committee of models. If they disagree on a point, ask the human for the label. This reduces the sample complexity of learning. It was the foundational algorithm of Active Learning.",
          "key_manifestations": [
            "Seung, H. S., et al. (1992). 'Query by Committee'",
            "Cohn, D., et al. (1994). 'Improving Generalization with Active Learning'",
            "Lewis, D. D., & Gale, W. A. (1994). 'A Sequential Algorithm for Training Text Classifiers'",
            "Angluin, D. (1988/1990). 'Queries and Concept Learning' (Theoretical roots)"
          ]
        },
        "1992": {
          "salience_share": 2,
          "description": "Stasis. The focus was on 'Selective Sampling.' Just filtering the training data. The cost of 'Human' interaction was abstract (oracle queries), not real dollars.",
          "key_manifestations": [
            "Atlas, L., et al. (1990). 'Training Connectionist Networks with Queries and Selective Sampling'",
            "Baum, E. B. (1991). 'Neural Net Algorithms that Learn in Polynomial Time from Examples and Queries'",
            "Plutowski, M., & White, H. (1993). 'Selecting Concise Training Examples from Clean Data'"
          ]
        },
        "1994": {
          "salience_share": 3,
          "description": "Uncertainty Sampling (+1%). Lewis & Gale. Simple heuristic: Label the points where the model is least confident ($P(Y|X) \\approx 0.5$). It worked surprisingly well for text classification and became the industry baseline for 20 years.",
          "key_manifestations": [
            "Lewis, D. D., & Catlett, J. (1994). 'Heterogeneous Uncertainty Sampling for Supervised Learning'",
            "Schohn, G., & Cohn, D. (2000). 'Less is More: Active Learning with Support Vector Machines' (Roots in mid-90s SVM context)",
            "Dagan, I., & Engelson, S. P. (1995). 'Committee-Based Sampling for Training Probabilistic Classifiers'"
          ]
        },
        "1996": {
          "salience_share": 3,
          "description": "Stasis. The web was growing, but labeling was done by in-house experts (Yahoo Directory). No 'Crowd' yet.",
          "key_manifestations": [
            "McCallum, A., & Nigam, K. (1998). 'Employing EM and Pool-Based Active Learning for Text Classification' (1996-97 work)",
            "Freund, Y., et al. (1997). 'Selective Sampling Using the Query by Committee Algorithm'",
            "Vijay-Shanker, K. (Legacy). 'Bootstrapping parsers'"
          ]
        },
        "1998": {
          "salience_share": 3,
          "description": "Co-Training (+0%). Blum & Mitchell. If you have two views of data (Webpage text + Link text), you can use one to label the other. This reduced the need for humans. It was 'Semi-Supervised' but relied on the same 'Information Value' principles.",
          "key_manifestations": [
            "Blum, A., & Mitchell, T. (1998). 'Combining Labeled and Unlabeled Data with Co-Training'",
            "Nigam, K., et al. (2000). 'Text Classification from Labeled and Unlabeled Documents using EM'",
            "Muslea, I., et al. (2000). 'Active Learning with Strong and Weak Views: A Case Study on wrapper Induction'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Stasis. Open Mind Common Sense (MIT). Collecting data from volunteers on the web. The first 'Crowdsourced' AI dataset effort.",
          "key_manifestations": [
            "Singh, P., et al. (2002). 'Open Mind Common Sense: Knowledge Acquisition from the General Public' (2000 launch)",
            "Von Ahn, L., et al. (2004). 'ESP Game' (Precursor - Games with a Purpose)",
            "Tong, S., & Koller, D. (2001). 'Support Vector Machine Active Learning with Applications to Text Classification'"
          ]
        },
        "2002": {
          "salience_share": 4,
          "description": "Games with a Purpose (GWAP) (+1%). Luis von Ahn (CMU). The ESP Game. People play a game to label images (Google Image Labeler). This proved you could gamify the 'Loop.' It solved the 'Cost' problem by trading fun for data.",
          "key_manifestations": [
            "Von Ahn, L., & Dabbish, L. (2004). 'Labeling Images with a Computer Game'",
            "Von Ahn, L. (2006). 'Games With A Purpose'",
            "Bar-Hillel, A., et al. (2003). 'Efficient Feature Selection for Object Detection' (Hard negative mining - algorithmic active learning)"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Mechanical Turk Launch (+1%). Amazon launched MTurk (2005). 'Artificial Artificial Intelligence.' Suddenly, access to human labelers was an API call. This revolutionized datasets. ImageNet (2009) would not have happened without MTurk.",
          "key_manifestations": [
            "Amazon (2005). 'Amazon Mechanical Turk Beta'",
            "Su, H., et al. (2007). 'Internet-Scale Collection of Human-Reviewed Data'",
            "Sheng, V. S., et al. (2008). 'Get Another Label? Improving Data Quality and Data Mining Using Multiple Noisy Labelers'"
          ]
        },
        "2006": {
          "salience_share": 6,
          "description": "Quality Control (+1%). Crowds are noisy. Dawid-Skene (1979) model was resurrected to aggregate noisy labels via EM. Researchers realized: 'The Human is a stochastic function.' You need to model the labeler's confusion matrix.",
          "key_manifestations": [
            "Raykar, V. C., et al. (2010). 'Learning From Crowds' (2009 work)",
            "Whitehill, J., et al. (2009). 'Whose Vote Should Count More: Optimal Integration of Labels from Labelers of Unknown Expertise'",
            "Snow, R., et al. (2008). 'Cheap and Fast - But is it Good? Evaluating Non-Expert Annotations for Natural Language Tasks'"
          ]
        },
        "2008": {
          "salience_share": 7,
          "description": "ImageNet (+1%). Fei-Fei Li used MTurk to label 14 million images. This was the 'Big Data' moment. It proved that massive, noisy, cheap human labeling > small, clean expert labeling.",
          "key_manifestations": [
            "Deng, J., et al. (2009). 'ImageNet: A Large-Scale Hierarchical Image Database'",
            "Sorokin, A., & Forsyth, D. (2008). 'Utility Data Annotation with Amazon Mechanical Turk'",
            "Vijayanarasimhan, S., & Grauman, K. (2009). 'What's It Going to Cost You?: Predicting Effort vs. Informativeness for Multi-Label Image Annotations'"
          ]
        },
        "2010": {
          "salience_share": 7,
          "description": "Stasis. Active Learning in Deep Learning was hard because uncertainty estimates in Deep Nets (Softmax) are uncalibrated (Cluster 33). Standard AL methods failed on Deep Nets. The field paused.",
          "key_manifestations": [
            "Settles, B. (2010). 'Active Learning Literature Survey' (The definitive summary)",
            "Houlsby, N., et al. (2011). 'Bayesian Active Learning for Classification and Preference Learning'",
            "Gal, Y., & Ghahramani, Z. (2016). 'Dropout as a Bayesian Approximation' (Providing the uncertainty metric needed for Deep AL)"
          ]
        },
        "2012": {
          "salience_share": 7,
          "description": "Interactive Machine Learning (+0%). User interfaces for teaching. 'Crayons' (Fails/Olsen). Users painting on images to train a classifier iteratively. Moving the loop from 'Batch' (send to MTurk) to 'Real-time' (User teaches the AI).",
          "key_manifestations": [
            "Amershi, S., et al. (2014). 'Power to the People: The Role of Humans in Interactive Machine Learning' (2012-13 work)",
            "Fails, J. A., & Olsen, D. R. (2003). 'Interactive Machine Learning' (Legacy influence)",
            "Simard, P. Y., et al. (2014). 'ICE: Instructible Classifier Engineering'"
          ]
        },
        "2014": {
          "salience_share": 8,
          "description": "Weak Supervision (+1%). Snorkel (Ratner). Instead of labeling points, write functions. 'def labeling_function(x): return POS if 'good' in x else ABSTAIN'. This allows 'Programming' data. It decoupled the human from the instance loop.",
          "key_manifestations": [
            "Ratner, A., et al. (2016). 'Data Programming: Creating Large Training Sets, Quickly' (Snorkel)",
            "Bach, S. H., et al. (2017). 'Learning the Structure of Generative Models without Labeled Data'",
            "Varma, P., et al. (2019). 'Snorkel: Rapid Training Data Creation with Weak Supervision'"
          ]
        },
        "2016": {
          "salience_share": 12,
          "description": "Deep Active Learning (+4%). Gal et al. used MC-Dropout for uncertainty. Core-Set selection (Sener/Savarese). The field figured out how to do Active Learning with CNNs. It became crucial for medical imaging (expensive doctors).",
          "key_manifestations": [
            "Gal, Y., et al. (2017). 'Deep Bayesian Active Learning with Image Data'",
            "Sener, O., & Savarese, S. (2018). 'Active Learning for Convolutional Neural Networks: A Core-Set Approach'",
            "Ash, J. T., et al. (2020). 'Deep Batch Active Learning by Diverse, Uncertain Gradient Lower Bounds' (BADGE)"
          ]
        },
        "2018": {
          "salience_share": 15,
          "description": "Human Preferences (RLHF Roots) (+3%). Christiano et al. (Cluster 25). Instead of labeling 'Cat/Dog', humans compare two trajectories: 'Is behavior A better than B?'. This is easier for humans and allows learning complex goals (like backflips or summarization) that can't be programmed.",
          "key_manifestations": [
            "Christiano, P. F., et al. (2017). 'Deep Reinforcement Learning from Human Preferences'",
            "Ibarz, B., et al. (2018). 'Reward Learning from Human Preferences and Demonstrations in Atari'",
            "Stiennon, N., et al. (2020). 'Learning to Summarize with Human Feedback'"
          ]
        },
        "2020": {
          "salience_share": 25,
          "description": "RLHF Scale (+10%). OpenAI applied Christiano's method to GPT-3. InstructGPT. This was the tipping point. The 'Loop' moved from 'Data Labeling' to 'Model Alignment.' The human role shifted from 'Teacher' to 'Critic.'",
          "key_manifestations": [
            "Ouyang, L., et al. (2022). 'Training Language Models to Follow Instructions with Human Feedback'",
            "Nakano, R., et al. (2021). 'WebGPT: Browser-assisted question-answering with human feedback'",
            "Askell, A., et al. (2021). 'A General Language Assistant as a Laboratory for Alignment'"
          ]
        },
        "2022": {
          "salience_share": 30,
          "description": "AI Feedback (RLAIF) (+5%). Anthropic's 'Constitutional AI.' Use the AI to critique itself, supervised by a human-written constitution. The human moves one level up: Evaluating the *principles*, not the data points. Scaling supervision beyond human limits.",
          "key_manifestations": [
            "Bai, Y., et al. (2022). 'Constitutional AI: Harmlessness from AI Feedback'",
            "Lee, H., et al. (2023). 'RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback'",
            "Saunders, W., et al. (2022). 'Self-critiquing models for assisting human evaluators'"
          ]
        },
        "2024": {
          "salience_share": 35,
          "description": "Current trajectory is 'Human-AI Collaboration' (+5%). Co-pilot. The loop is tight: User types, AI suggests, User edits, AI learns. This is 'Implicit Feedback' at massive scale. Also, 'Superalignment': how do weak humans supervise superintelligent models? (Sandwiching, Debate).",
          "key_manifestations": [
            "Burns, C., et al. (2023). 'Weak-to-Strong Generalization'",
            "Github (2024). 'Copilot User Data Analysis' (Implicit feedback loops)",
            "Khan, S., et al. (2024). 'Debate: Helping Humans Verify AI Outputs'",
            "Reference: 'The merging of inference and training'"
          ]
        }
      }
    },
    "43_computational_creativity_arts": {
      "name": "Computational Creativity & Generative Arts",
      "description": "This eigencluster represents the 'Aesthetic' dimension. It tracks the evolution of AI as an artist. From the symbolic, rule-based art of Harold Cohen's AARON in the 90s, to the evolutionary art (Genetic Algorithms) of the 2000s, to the 'DeepDream' hallucination era, and finally to the 'Diffusion' revolution (Midjourney/Sora). It explores the boundary between 'Tool' and 'Creator.'",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Symbolic Art (+0%). Harold Cohen's AARON. A rule-based system that painted. It 'knew' what a person looked like (head, torso, limbs). It was 'Top-Down' creativity. The variance was low because it was a singular achievement, not a field.",
          "key_manifestations": [
            "Cohen, H. (1995). 'The Further Exploits of AARON, Painter'",
            "McCorduck, P. (1991). 'Aaron's Code: Meta-Art, Artificial Intelligence, and the Work of Harold Cohen'",
            "Boden, M. A. (1990). 'The Creative Mind: Myths and Mechanisms'"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Evolutionary Art (+0%). Karl Sims. Using Genetic Algorithms (Cluster 10) to evolve images. The human acts as the 'Fitness Function' (Interactive Evolutionary Computation). You click the images you like, they breed. This was 'Bottom-Up' creativity.",
          "key_manifestations": [
            "Sims, K. (1991). 'Artificial Evolution for Computer Graphics'",
            "Todd, S., & Latham, W. (1992). 'Evolutionary Art and Computers'",
            "Rooke, S. (1995). 'Evolutionary Art'"
          ]
        },
        "1994": {
          "salience_share": 2,
          "description": "Musical Intelligence (+1%). David Cope's EMI (Experiments in Musical Intelligence). It parsed Bach and recombined patterns to create new 'Bach.' It challenged the music world: 'Is it art if it's recombination?'.",
          "key_manifestations": [
            "Cope, D. (1996). 'Experiments in Musical Intelligence'",
            "Cope, D. (1991). 'Computers and Musical Style'",
            "Pachet, F. (2003). 'The Continuator: Musical Interaction with Style' (Roots in 90s)"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "Stasis. 'Generative Art' using code (Processing/John Maeda) grew, but it was algorithmic (Perlin noise), not AI. The AI contribution was minimal.",
          "key_manifestations": [
            "Maeda, J. (1999). 'Design by Numbers'",
            "Galanter, P. (2003). 'What is Generative Art?' (Reviewing the 90s)",
            "Lewis, G. (2000). 'Too Many Notes: Computers, Complexity and Culture in Voyager'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Stasis. The 'Flammable' algorithm (Fractal Flames) by Scott Draves. Iterated Function Systems. Beautiful, but mathematical, not learned.",
          "key_manifestations": [
            "Draves, S., & Reckase, E. (2003). 'The Electric Sheep Screen-Saver' (1999 launch)",
            "Machado, P., & Cardoso, A. (2002). 'All the Truth About NEvAr' (Neuro-Evolutionary Art)"
          ]
        },
        "2000": {
          "salience_share": 2,
          "description": "Image Analogies (+0%). Hertzmann et al. 'Image Analogies.' A:A' :: B:B'. It used patch-matching to transfer style (texture synthesis). This was the grandfather of Style Transfer. It was non-parametric.",
          "key_manifestations": [
            "Hertzmann, A., et al. (2001). 'Image Analogies'",
            "Efros, A. A., & Freeman, W. T. (2001). 'Image Quilting for Texture Synthesis and Transfer'",
            "Simon, I., et al. (2005). 'Scene Summarization for Online Image Collections'"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stasis. Computational Creativity became a formal workshop (ICCC). Researchers debated definitions of 'Novelty' and 'Value.'",
          "key_manifestations": [
            "Wiggins, G. A. (2006). 'A Preliminary Framework for Description, Analysis and Comparison of Creative Systems'",
            "Ritchie, G. (2007). 'Some Empirical Criteria for Attributing Creativity to a Computer Program'",
            "Colton, S., et al. (2004). 'The Painting Fool'"
          ]
        },
        "2004": {
          "salience_share": 2,
          "description": "Stasis. Neural nets were too weak to generate art. The focus was on 'Constraint Satisfaction' for music generation.",
          "key_manifestations": [
            "Pachet, F., & Roy, P. (2009). 'Finite-Length Markov Processes with Constraints'",
            "Nierhaus, G. (2009). 'Algorithmic Composition'",
            "Eigenfeldt, A. (2006). 'Kinetic Engine: An Agent-Based Music Composition System'"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Deep Belief Net Generation (+1%). Hinton's digits. It wasn't 'Art,' but it was the first time a neural net generated coherent pixels. It planted the seed.",
          "key_manifestations": [
            "Hinton, G. E., et al. (2006). 'A Fast Learning Algorithm for Deep Belief Nets'",
            "Osindero, S., & Hinton, G. E. (2008). 'Modeling Image Patches with a Directed Hierarchy of Markov Random Fields'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Stasis. Procedural Content Generation (PCG) in games (Spore, Minecraft) was the dominant form of 'Generative' tech. It was noise-based (Perlin/Simplex), not learned.",
          "key_manifestations": [
            "Togelius, J., et al. (2011). 'Search-Based Procedural Content Generation: A Taxonomy and Survey'",
            "Compton, K., & Mateas, M. (2006). 'Procedural Level Design for Platform Games'",
            "Hastings, E. J., et al. (2009). 'Galactic Arms Race: Content Evolution'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "RNN Text Gen (+0%). Sutskever (2011). Generating Wikipedia text. It was coherent enough to be interesting. 'Karpathy's Blog' (2015) would later popularize 'The Unreasonable Effectiveness of RNNs' for generating Shakespeare.",
          "key_manifestations": [
            "Sutskever, I., et al. (2011). 'Generating Text with Recurrent Neural Networks'",
            "Graves, A. (2013). 'Generating Sequences With Recurrent Neural Networks' (Handwriting generation)"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Google Brain 'Cat' (+1%). Le et al. The network 'dreamed' a cat. Visualizing the optimal stimulus. This was the precursor to DeepDream.",
          "key_manifestations": [
            "Le, Q. V., et al. (2012). 'Building High-level Features Using Large Scale Unsupervised Learning'",
            "Simonyan, K., et al. (2013). 'Deep Inside Convolutional Networks'"
          ]
        },
        "2014": {
          "salience_share": 10,
          "description": "DeepDream & Style Transfer (+6%). Google released DeepDream. Inceptionalism. It was psychedelic, alien art. Then Gatys et al. (2015) released Neural Style Transfer. 'Make this photo look like Van Gogh.' This went viral. It was the first 'mass market' AI art tool (Prisma app).",
          "key_manifestations": [
            "Mordvintsev, A., et al. (2015). 'Inceptionism: Going Deeper into Neural Networks' (DeepDream)",
            "Gatys, L. A., et al. (2016). 'Image Style Transfer Using Convolutional Neural Networks' (2015 arXiv)",
            "Johnson, J., et al. (2016). 'Perceptual Losses for Real-Time Style Transfer and Super-Resolution'"
          ]
        },
        "2016": {
          "salience_share": 15,
          "description": "GAN Art (+5%). DCGAN, CycleGAN, Pix2Pix. Artists (Mario Klingemann, Robbie Barrat) began using GANs. The aesthetic was 'fluid, fleshy, surreal.' 'Edmond de Belamy' sold for $432k. GANs defined the aesthetic of the late 2010s.",
          "key_manifestations": [
            "Radford, A., et al. (2016). 'Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks'",
            "Zhu, J. Y., et al. (2017). 'Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks'",
            "Karras, T., et al. (2018). 'Progressive Growing of GANs for Improved Quality, Stability, and Variation'"
          ]
        },
        "2018": {
          "salience_share": 18,
          "description": "BigGAN & Transformers (+3%). BigGAN generated high-res images. Music Transformer generated coherent piano pieces. The quality was improving, but control was low. You rolled the dice (latent vector) and hoped for something good.",
          "key_manifestations": [
            "Brock, A., et al. (2018). 'Large Scale GAN Training for High Fidelity Natural Image Synthesis'",
            "Huang, C. Z. A., et al. (2018). 'Music Transformer'",
            "Karras, T., et al. (2019). 'A Style-Based Generator Architecture for Generative Adversarial Networks' (StyleGAN)"
          ]
        },
        "2020": {
          "salience_share": 25,
          "description": "CLIP + VQGAN (+7%). The 'Prompt' era began. Crowd-sourced hackers (Ryan Murdock, Katherine Crowson) combined CLIP (text steering) with VQGAN (image generator). You could type 'A fantasy castle' and the optimization loop would carve it out. This was 'Text-to-Image' v0.9.",
          "key_manifestations": [
            "Esser, P., et al. (2021). 'Taming Transformers for High-Resolution Image Synthesis' (VQGAN)",
            "Radford, A., et al. (2021). 'Learning Transferable Visual Models From Natural Language Supervision' (CLIP)",
            "Crowson, K. (2021). 'VQGAN+CLIP Notebooks' (The cultural vector)"
          ]
        },
        "2022": {
          "salience_share": 40,
          "description": "Diffusion Explosion (+15%). Midjourney, DALL-E 2, Stable Diffusion. High-fidelity, controllable art from text. The barrier to entry dropped to zero. Artists rebelled ('No AI Art' protests). The cluster became the defining cultural phenomenon of AI in 2022.",
          "key_manifestations": [
            "Rombach, R., et al. (2022). 'High-Resolution Image Synthesis with Latent Diffusion Models'",
            "Ramesh, A., et al. (2022). 'Hierarchical Text-Conditional Image Generation with CLIP Latents'",
            "Saharia, C., et al. (2022). 'Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding'"
          ]
        },
        "2024": {
          "salience_share": 45,
          "description": "Current trajectory is 'Video & Control' (+5%). Sora (Video), ControlNet (Pose control), Suno (Music). The focus is on 'Directability.' Can I make the character turn left? Can I keep the same face across shots? AI is moving from 'Art Generator' to 'Production Studio.'",
          "key_manifestations": [
            "OpenAI (2024). 'Sora'",
            "Zhang, L., et al. (2023). 'Adding Conditional Control to Text-to-Image Diffusion Models' (ControlNet)",
            "Copet, J., et al. (2023). 'Simple and Controllable Music Generation' (MusicGen)",
            "Reference: 'The replacement of the Rendering Pipeline with the Inference Pipeline'"
          ]
        }
      }
    },
    "44_knowledge_graphs_ontologies": {
      "name": "Knowledge Graphs & Ontologies",
      "description": "This eigencluster represents the 'Structured Knowledge' of AI. It tracks the effort to map the world into entities and relationships (Triples: 'Paris-is_capital_of-France'). The trajectory moves from the rigid 'Expert Systems' and 'Cyc' of the 90s, to the 'Semantic Web' (RDF/OWL) dream of the 2000s, to the industrial 'Knowledge Graphs' (Google/Facebook) of the 2010s, and finally to the 'Neuro-Symbolic' merger with LLMs (GraphRAG) in the 2020s. It is the counter-weight to the unstructured statistical learning of Neural Nets.",
      "trajectory": {
        "1990": {
          "salience_share": 5,
          "description": "Cyc & Expert Systems (+1%). Lenat's Cyc project attempted to encode all human common sense into logic. 'Trees' and 'Frames' were the data structures. The premise: Intelligence requires a massive database of facts. It was manual, brittle, and expensive.",
          "key_manifestations": [
            "Lenat, D. B., & Guha, R. V. (1990). 'Building Large Knowledge-Based Systems'",
            "Gruber, T. R. (1993). 'A Translation Approach to Portable Ontology Specifications' (Defining 'Ontology' for CS)",
            "Neches, R., et al. (1991). 'Enabling Technology for Knowledge Sharing'",
            "Guha, R. V., & Lenat, D. B. (1990). 'Cyc: A Midterm Report'"
          ]
        },
        "1992": {
          "salience_share": 5,
          "description": "Stasis. Description Logics (DL) formalized the math of ontologies. It was rigorous but academic. The web existed but had no semantic layer.",
          "key_manifestations": [
            "Baader, F., et al. (1992). 'The Description Logic Handbook' (Roots)",
            "MacGregor, R. (1991). 'The Evolving Technology of Classification-Based Knowledge Representation Systems'",
            "Woods, W. A., & Schmolze, J. G. (1992). 'The KL-ONE Family'"
          ]
        },
        "1994": {
          "salience_share": 4,
          "description": "Stasis. The AI Winter hurt this cluster. 'Knowledge Engineering' was seen as a bottleneck. Statistical NLP began to rise, challenging the utility of hand-coded grammars and ontologies.",
          "key_manifestations": [
            "Gruber, T. R. (1995). 'Toward Principles for the Design of Ontologies Used for Knowledge Sharing'",
            "Uschold, M., & King, M. (1995). 'Towards a Methodology for Building Ontologies'",
            "Fellbaum, C. (1998). 'WordNet: An Electronic Lexical Database' (1994-95 crucial dev period)"
          ]
        },
        "1996": {
          "salience_share": 4,
          "description": "WordNet (+0%). WordNet became the standard lexical ontology. It mapped English into synsets. It was the backbone of NLP for a decade. It was 'Linguistic Knowledge,' not 'World Knowledge.'",
          "key_manifestations": [
            "Miller, G. A. (1995). 'WordNet: A Lexical Database for English'",
            "Sowa, J. F. (2000). 'Knowledge Representation' (Review of the 90s logic)",
            "Guarino, N. (1998). 'Formal Ontology in Information Systems'"
          ]
        },
        "1998": {
          "salience_share": 5,
          "description": "The Semantic Web (+1%). Tim Berners-Lee proposed the Semantic Web. 'The web of data.' RDF (Resource Description Framework) was the standard. The vision: Agents roaming the web, reading RDF, and booking appointments automatically. It was Utopian.",
          "key_manifestations": [
            "Berners-Lee, T., et al. (2001). 'The Semantic Web' (Scientific American - 1998-99 drafts)",
            "Lassila, O., & Swick, R. R. (1999). 'Resource Description Framework (RDF) Model and Syntax Specification'",
            "Fensel, D., et al. (2001). 'OIL: An Ontology Infrastructure for the Semantic Web'"
          ]
        },
        "2000": {
          "salience_share": 6,
          "description": "OWL & Prot\u00e9g\u00e9 (+1%). The W3C standardized OWL (Web Ontology Language). Prot\u00e9g\u00e9 (Stanford) became the editor. The academic community was vibrant, but the industrial web ignored it. Google used links, not ontologies.",
          "key_manifestations": [
            "Horrocks, I., et al. (2003). 'From SHIQ and RDF to OWL: The Making of a Web Ontology Language'",
            "Noy, N. F., et al. (2001). 'Prot\u00e9g\u00e9-2000: An Open-Source Ontology-Development and Knowledge-Acquisition Environment'",
            "McGuinness, D. L., & Van Harmelen, F. (2004). 'OWL Web Ontology Language Overview'"
          ]
        },
        "2002": {
          "salience_share": 6,
          "description": "Stasis. 'Linked Data' became the buzzword. Wikipedia started (2001). The idea of *extracting* knowledge from Wikipedia began to form (DBpedia precursor).",
          "key_manifestations": [
            "Bizer, C., et al. (2009). 'Linked Data - The Story So Far' (Roots in early 2000s)",
            "Cimiano, P., et al. (2005). 'Learning Concept Hierarchies from Text Corpora using Formal Concept Analysis'",
            "Etzioni, O., et al. (2004). 'Web-Scale Information Extraction in KnowItAll'"
          ]
        },
        "2004": {
          "salience_share": 7,
          "description": "Information Extraction (+1%). Banko et al. introduced 'Open Information Extraction' (TextRunner). Extract '(Arg1, Relation, Arg2)' tuples from the web without a pre-defined schema. This was the bridge between Unstructured Text and Structured Graphs.",
          "key_manifestations": [
            "Banko, M., et al. (2007). 'Open Information Extraction from the Web' (2005-06 work)",
            "Suchanek, F. M., et al. (2007). 'YAGO: A Core of Semantic Knowledge' (Merging WordNet and Wikipedia)",
            "Auer, S., et al. (2007). 'DBpedia: A Nucleus for a Web of Open Data'"
          ]
        },
        "2006": {
          "salience_share": 8,
          "description": "Freebase (+1%). Metaweb (Danny Hillis) launched Freebase. A massive, crowd-sourced graph of entities. It was the first 'Web Scale' knowledge graph that worked. Google bought it in 2010. It proved the graph needed to be 'Fuzzy' and 'Crowdsourced,' not strict Logic.",
          "key_manifestations": [
            "Bollacker, K., et al. (2008). 'Freebase: A Collaboratively Created Graph Database for Structuring Human Knowledge' (2006-07 launch)",
            "Bizer, C., et al. (2009). 'DBpedia - A Crystallization Point for the Web of Data'",
            "Carlson, A., et al. (2010). 'Toward an Architecture for Never-Ending Language Learning' (NELL - 2009 work)"
          ]
        },
        "2008": {
          "salience_share": 8,
          "description": "Stasis. Semantic Web 'Winter.' The dream of a fully semantic web died. JSON/REST APIs won over RDF/SPARQL. The cluster retreated to 'Enterprise Knowledge Management.'",
          "key_manifestations": [
            "Shadbolt, N., et al. (2006). 'The Semantic Web Revisited'",
            "Allemang, D., & Hendler, J. (2008). 'Semantic Web for the Working Ontologist'",
            "Hitzler, P., et al. (2009). 'Foundations of Semantic Web Technologies'"
          ]
        },
        "2010": {
          "salience_share": 12,
          "description": "Google Knowledge Graph (+4%). Google launched 'Things, not Strings.' The Infobox appeared. They used the graph to disambiguate 'Jaguar' (Car vs Animal). This was the massive industrial validation. Knowledge Graphs (KG) became a standard component of Search.",
          "key_manifestations": [
            "Singhal, A. (2012). 'Introducing the Knowledge Graph'",
            "Dong, X., et al. (2014). 'Knowledge Vault: A Web-Scale Approach to Probabilistic Knowledge Fusion'",
            "Nickel, M., et al. (2011). 'A Three-Way Model for Collective Learning on Multi-Relational Data' (Tensor factorization for KGs)"
          ]
        },
        "2012": {
          "salience_share": 15,
          "description": "Knowledge Graph Embeddings (+3%). Bordes et al. introduced TransE. Embed entities and relations as vectors. $Head + Relation \\approx Tail$. This merged KGs with Deep Learning (Cluster 15). You could do 'Link Prediction' with vector arithmetic.",
          "key_manifestations": [
            "Bordes, A., et al. (2013). 'Translating Embeddings for Modeling Multi-relational Data' (TransE)",
            "Socher, R., et al. (2013). 'Reasoning With Neural Tensor Networks for Knowledge Base Completion'",
            "Wang, Z., et al. (2014). 'Knowledge Graph Embedding by Translating on Hyperplanes' (TransH)"
          ]
        },
        "2014": {
          "salience_share": 15,
          "description": "Stasis. KGs were standard in big tech (Facebook Graph, LinkedIn Economic Graph). The research focused on 'Complex Queries' over embeddings (answering logic queries in vector space).",
          "key_manifestations": [
            "Yang, B., et al. (2015). 'Embedding Entities and Relations for Learning and Inference in Knowledge Bases' (DistMult)",
            "Trouillon, T., et al. (2016). 'Complex Embeddings for Simple Link Prediction'",
            "Hamilton, W., et al. (2017). 'Representation Learning on Graphs: Methods and Applications'"
          ]
        },
        "2016": {
          "salience_share": 15,
          "description": "Stasis. GNNs (Cluster 12) began to be applied to KGs (R-GCN). This improved reasoning power. But KGs were hard to maintain. They were always incomplete.",
          "key_manifestations": [
            "Schlichtkrull, M., et al. (2018). 'Modeling Relational Data with Graph Convolutional Networks' (2017 work)",
            "Dettmers, T., et al. (2018). 'Convolutional 2D Knowledge Graph Embeddings'",
            "Sun, Z., et al. (2019). 'Rotate: Knowledge Graph Embedding by Relational Rotation in Complex Space'"
          ]
        },
        "2018": {
          "salience_share": 18,
          "description": "KG-Augmented Language Models (+3%). ERNIE (Baidu) and K-BERT. Injecting KG triples into BERT to improve factual accuracy. The idea: 'BERT has syntax, KG has facts.' Merge them.",
          "key_manifestations": [
            "Zhang, Z., et al. (2019). 'ERNIE: Enhanced Language Representation with Informative Entities'",
            "Liu, W., et al. (2020). 'K-BERT: Enabling Language Representation with Knowledge Graph'",
            "Peters, M. E., et al. (2019). 'Knowledge Enhanced Contextual Word Representations'"
          ]
        },
        "2020": {
          "salience_share": 20,
          "description": "Question Answering over KGs (+2%). Using KGs to answer complex questions where LLMs hallucinate. 'Multi-hop reasoning.' The KG provides the 'Ground Truth' path.",
          "key_manifestations": [
            "Saxena, A., et al. (2020). 'Improving Multi-hop Question Answering over Knowledge Graphs using Knowledge Base Embeddings'",
            "Ren, H., et al. (2020). 'Query2box: Reasoning over Knowledge Graphs in Vector Space using Box Embeddings'",
            "Yasunaga, M., et al. (2021). 'QA-GNN: Reasoning with Language Models and Knowledge Graphs for Question Answering'"
          ]
        },
        "2022": {
          "salience_share": 22,
          "description": "LLMs as Knowledge Bases (+2%). A debate: 'Do we need KGs if GPT-4 knows everything?'. Petroni et al. showed LLMs *are* KGs. But they are static and hallucinate. The field pivoted to 'KGs for RAG.'",
          "key_manifestations": [
            "Petroni, F., et al. (2019/2022). 'Language Models as Knowledge Bases?'",
            "Alon, U., et al. (2022). 'Neuro-Symbolic Language Modeling with Automaton-augmented Retrieval'",
            "Pan, S. J., et al. (2024). 'Unifying Large Language Models and Knowledge Graphs: A Roadmap'"
          ]
        },
        "2024": {
          "salience_share": 25,
          "description": "Current trajectory is 'GraphRAG' (+3%). Microsoft. Construct a KG *from* the documents using the LLM, then use the Graph to answer 'Global' questions ('What are the main themes?'). This solves the 'Connecting the Dots' problem that vector search (Cluster 29) misses.",
          "key_manifestations": [
            "Edge, D., et al. (2024). 'From Local to Global: A Graph RAG Approach to Query-Focused Summarization'",
            "Wang, X., et al. (2024). 'Knowledge Graph-Augmented Language Models for Complex Question Answering'",
            "Reference: 'The return of structure to the unstructured vector soup'"
          ]
        }
      }
    },
    "45_cognitive_architectures": {
      "name": "Cognitive Architectures",
      "description": "This eigencluster represents the 'Unified Theory of Cognition' approach. Unlike the modular 'Narrow AI' (just vision, just chess), this cluster attempts to build a single, invariant structure that models the entire human mind\u2014memory, perception, action, and reasoning. Dominated by Newell's SOAR and Anderson's ACT-R, it bridges Psychology and AI. Its trajectory was high-status in the 90s (the 'Standard Model of the Mind'), fell into obscurity during the 'Big Data' era (too slow/complex), and is currently resurging as the architectural blueprint for 'LLM Agents' (combining Memory, Planning, and Tools).",
      "trajectory": {
        "1990": {
          "salience_share": 4,
          "description": "The 'Unified Theories' Era (+1%). Allen Newell published 'Unified Theories of Cognition.' The goal was grand: A single software architecture (SOAR) that produces all human behavior. It used 'Production Systems' (If-Then rules) and 'Chunking' (learning from impasses). It was the dominant paradigm for 'General Intelligence' (AGI) before the term existed.",
          "key_manifestations": [
            "Newell, A. (1990). 'Unified Theories of Cognition' (The book)",
            "Anderson, J. R. (1993). 'Rules of the Mind' (ACT-R foundations)",
            "Laird, J. E., et al. (1987/1990). 'SOAR: An Architecture for General Intelligence'",
            "Minsky, M. (1985/1990). 'The Society of Mind' (Conceptual architecture)"
          ]
        },
        "1992": {
          "salience_share": 4,
          "description": "Stasis. ACT-R (Adaptive Control of Thought-Rational) formalized the distinction between 'Declarative Memory' (facts) and 'Procedural Memory' (skills). It fitted human reaction time data perfectly. The 'Motion' was fitting psychological curves, not engineering applications.",
          "key_manifestations": [
            "Anderson, J. R. (1993). 'Rules of the Mind'",
            "Tambe, M., et al. (1995). 'Intelligent Agents for Interactive Simulation Environments' (Soar in combat sims)",
            "VanLehn, K. (1991). 'Architectures for Intelligence'",
            "Sloman, A. (1993). 'The Mind as a Control System'"
          ]
        },
        "1994": {
          "salience_share": 3,
          "description": "EPIC & Human-Computer Interaction (+0%). Kieras & Meyer introduced EPIC to model human motor-perceptual constraints. It was used to predict how fast a human could use a GUI. The cluster found a niche in 'Cognitive Modeling' for interface design, moving away from autonomous AI.",
          "key_manifestations": [
            "Kieras, D. E., & Meyer, D. E. (1997). 'An Overview of the EPIC Architecture for Cognition and Performance' (1994-95 work)",
            "Anderson, J. R., et al. (1995). 'ACT-R: An Architecture of Social and Individual Cognition'",
            "Altmann, E. M., & John, B. E. (1999). 'Episodic Indexing: A Model of Memory for Attention Events'"
          ]
        },
        "1996": {
          "salience_share": 2,
          "description": "Decline (-1%). The 'Learning' problem. These architectures were great at *running* a program, but bad at *learning* it from raw data. They required manual coding of production rules. As Statistical Learning (SVMs) rose, manual cognitive modeling looked tedious and unscalable.",
          "key_manifestations": [
            "Anderson, J. R., & Lebiere, C. (1998). 'The Atomic Components of Thought'",
            "Laird, J. E., & Rosenbloom, P. S. (1996). 'The Evolution of the Soar Cognitive Architecture'",
            "Sloman, A. (1999). 'What Sort of Architecture is Required for a Human-like Agent?'"
          ]
        },
        "1998": {
          "salience_share": 2,
          "description": "Stasis. CLARION (Sun) attempted to hybridize Connectionist (Neural) and Symbolic layers. 'Explicit' rules at the top, 'Implicit' nets at the bottom. It was ahead of its time (Neuro-Symbolic), but lacked the compute to train the neural parts effectively.",
          "key_manifestations": [
            "Sun, R., et al. (2001). 'CLARION: A Two-Level Cognitive Architecture' (1998-99 work)",
            "Anderson, J. R., et al. (1998). 'Integrated Theory of the Mind'",
            "Franklin, S., & Graesser, A. (1997). 'Is it an Agent, or just a Program?: A Taxonomy for Autonomous Agents'"
          ]
        },
        "2000": {
          "salience_share": 1,
          "description": "Nadir. The 'AI' field became 'Machine Learning.' Cognitive Architectures were relegated to Psychology departments. They were viewed as 'Good Old Fashioned AI' (GOFAI) relics.",
          "key_manifestations": [
            "Langley, P., et al. (2009). 'Cognitive Architectures: Research Issues and Challenges' (Reflecting the decline)",
            "Cassimatis, N. L. (2002). 'Polyscheme: A Cognitive Architecture for Integrating Multiple Representation and Inference Schemes'",
            "Anderson, J. R., et al. (2004). 'An Integrated Theory of the Mind'"
          ]
        },
        "2002": {
          "salience_share": 1,
          "description": "Stasis. DARPA Biologically Inspired Cognitive Architectures (BICA). A funding injection tried to revive the field. It produced frameworks, but no 'AlphaGo' moments. The complexity of the software (millions of lines of Lisp/C++) choked progress.",
          "key_manifestations": [
            "Samsonovich, A. V., et al. (2008). 'Biologically Inspired Cognitive Architectures' (2002-2004 program roots)",
            "Laird, J. E. (2002). 'Research in Cognitive Architectures'",
            "Goertzel, B., et al. (2004). 'Novamente: An Integrative Architecture for Artificial General Intelligence'"
          ]
        },
        "2004": {
          "salience_share": 1,
          "description": "Stasis. Sigma (Rosenbloom). Attempting to rewrite SOAR using Graphical Models (Cluster 3). A noble attempt to unify Logic and Probability, but it remained theoretical.",
          "key_manifestations": [
            "Rosenbloom, P. S. (2006). 'A Cognitive Architecture Based on Logic and Probability' (Sigma)",
            "Anderson, J. R. (2007). 'How Can the Human Mind Occur in the Physical Universe?'",
            "Chong, H. Q., et al. (2007). 'Modeling the Effects of Time Pressure on Pilot Attention'"
          ]
        },
        "2006": {
          "salience_share": 1,
          "description": "Stasis. Deep Learning arrived. Cognitive Architectures ignored it, sticking to symbolic rules. This strategic error cost them relevance for another decade.",
          "key_manifestations": [
            "Laird, J. E. (2008). 'Extending the Soar Cognitive Architecture'",
            "Sun, R. (2008). 'The Cambridge Handbook of Computational Psychology'",
            "Langley, P., & Choi, D. (2006). 'A Unified Cognitive Architecture for Physical Agents'"
          ]
        },
        "2008": {
          "salience_share": 1,
          "description": "Stasis. IBM Watson (2011 prep). Watson was arguably a cognitive architecture (DeepQA), combining many modules. It was a brief victory for the 'System of Systems' approach over the 'End-to-End' approach.",
          "key_manifestations": [
            "Ferrucci, D., et al. (2010). 'Building Watson: An Overview of the DeepQA Project'",
            "Laird, J. E. (2012). 'The Soar Cognitive Architecture' (Book)",
            "Goertzel, B. (2009). 'OpenCog Prime: A Cognitive Architecture for General Intelligence'"
          ]
        },
        "2010": {
          "salience_share": 2,
          "description": "Spaun (+1%). Eliasmith et al. built Spaun (Semantic Pointer Architecture Unified Network). A massive spiking neural network (2.5M neurons) that could do vision, math, and motor control. It was the first *neural* cognitive architecture that obeyed biological constraints. It bridged Cluster 17 (Neuromorphic) and Cluster 45.",
          "key_manifestations": [
            "Eliasmith, C., et al. (2012). 'A Large-Scale Model of the Functioning Brain' (Spaun - Science cover)",
            "Eliasmith, C. (2013). 'How to Build a Brain'",
            "Stewart, T. C., & Eliasmith, C. (2014). 'Large-Scale Synthesis of Functional Spiking Neural Networks'"
          ]
        },
        "2012": {
          "salience_share": 2,
          "description": "Stasis. DeepMind founded (2010/12). Hassabis explicitly wanted to build 'AGI' by fusing Deep Learning with Systems Neuroscience (Hippocampus/Cortex). DeepMind was effectively building a 'Neural Cognitive Architecture' (DNC, AlphaGo), displacing the symbolic old guard.",
          "key_manifestations": [
            "Kumaran, D., et al. (2016). 'What Learning Systems do Intelligent Agents Need?' (DeepMind's CLS manifesto)",
            "Graves, A., et al. (2014). 'Neural Turing Machines'",
            "Leabra (Legacy). 'O'Reilly's Computational Cognitive Neuroscience'"
          ]
        },
        "2014": {
          "salience_share": 2,
          "description": "Neural Turing Machines (+0%). Differentiable Computers. The idea of 'External Memory' + 'Controller' matches the Cognitive Architecture diagram. The difference: it's fully differentiable. The field was reinventing the 90s architectures using gradient descent.",
          "key_manifestations": [
            "Graves, A., et al. (2014). 'Neural Turing Machines'",
            "Weston, J., et al. (2015). 'Memory Networks'",
            "Sukhbaatar, S., et al. (2015). 'End-To-End Memory Networks'"
          ]
        },
        "2016": {
          "salience_share": 3,
          "description": "The Common Model (+1%). Laird, Lebiere, Rosenbloom published 'A Standard Model of the Mind.' Trying to unify SOAR, ACT-R, and Sigma into a consensus architecture (Working Memory, Long-term Memory, Perception, Motor). A desperate attempt to standardize before Deep Learning ate everything.",
          "key_manifestations": [
            "Laird, J. E., et al. (2017). 'A Standard Model of the Mind'",
            "Kotseruba, I., & Tsotsos, J. K. (2020). '40 Years of Cognitive Architectures: Core Cognitive Abilities and Practical Applications'",
            "Rosenbloom, P. S., et al. (2016). 'The Sigma Cognitive Architecture and System'"
          ]
        },
        "2018": {
          "salience_share": 4,
          "description": "World Models (+1%). Ha & Schmidhuber. A 'World Model' (VAE) + 'Controller' (RNN). This explicit separation of 'Dreaming' and 'Acting' mirrored cognitive theories. It was a 'Learned' Cognitive Architecture.",
          "key_manifestations": [
            "Ha, D., & Schmidhuber, J. (2018). 'World Models'",
            "Wayne, G., et al. (2018). 'Unsupervised Predictive Memory in a Goal-Directed Agent' (MERLIN)",
            "Santoro, A., et al. (2018). 'Relational Recurrent Neural Networks'"
          ]
        },
        "2020": {
          "salience_share": 6,
          "description": "Global Workspace Theory (+2%). Bengio and Goyal proposed 'The Consciousness Prior.' Modular experts communicating via a shared, low-bandwidth bottleneck (Global Workspace). This brought Baars' cognitive theory into Deep Learning (Transformers).",
          "key_manifestations": [
            "Goyal, A., & Bengio, Y. (2022). 'Inductive Biases for Deep Learning of Higher-Level Cognition' (2020 work)",
            "Juliani, A., et al. (2022). 'On the Link between Conscious Attention and Fitness'",
            "VanRullen, R., & Kanai, R. (2021). 'Deep Learning and the Global Workspace Theory'"
          ]
        },
        "2022": {
          "salience_share": 15,
          "description": "LLM as Cognitive Model (+9%). A massive pivot. Researchers realized: 'The LLM *is* the Cognitive Architecture.' It has Working Memory (Context Window), Long Term Memory (Weights/RAG), and Reasoning (Chain of Thought). ACT-R is obsolete; GPT-4 is the new Standard Model. Psychologists began using LLMs to simulate human experiments.",
          "key_manifestations": [
            "Sumers, T., et al. (2023). 'Cognitive Architectures for Language Agents'",
            "Binz, M., & Schulz, E. (2023). 'Using Cognitive Psychology to Understand GPT-3'",
            "Wang, L., et al. (2023). 'A Survey on Large Language Model based Autonomous Agents'",
            "Park, J. S., et al. (2023). 'Generative Agents' (Sims with LLM brains)"
          ]
        },
        "2024": {
          "salience_share": 20,
          "description": "Current trajectory is 'Cognitive Agents' (+5%). The 'Agent' loop (Perceive -> Think -> Act) is being built around the LLM core. System 1 (Next token) + System 2 (CoT/Search). The 'Cognitive Architecture' community is effectively dead, reincarnated as 'Agent Engineering.'",
          "key_manifestations": [
            "Xi, Z., et al. (2023). 'The Rise and Potential of Large Language Model Based Agents: A Survey'",
            "Weng, L. (2023). 'LLM-powered Autonomous Agents' (Blog defining the new architecture)",
            "Mialon, G., et al. (2023). 'Augmented Language Models: a Survey'",
            "Reference: 'The Standard Model is now a Transformer'"
          ]
        }
      }
    },
    "46_time_series_forecasting": {
      "name": "Time Series & Forecasting Dynamics",
      "description": "This eigencluster represents the science of 'Predicting the Future.' It tracks the evolution of modeling temporal dependencies in continuous data (Stock prices, Weather, Energy demand). The trajectory moves from the statistical rigor of ARIMA/GARCH in the 90s, to the Machine Learning takeover (SVR/GBM) in the 2000s, to the 'Deep Forecasting' era (LSTMs, N-BEATS) of the 2010s, and finally to the 'Time Series Foundation Models' (Chronos, TimesFM) of the 2020s, which treat time series as a language.",
      "trajectory": {
        "1990": {
          "salience_share": 8,
          "description": "Box-Jenkins & GARCH (+2%). The era of linear statistics. ARIMA (AutoRegressive Integrated Moving Average) was the hammer. If volatility clustered (Finance), you used GARCH (Engle/Bollerslev). It was rigorous, explainable, and handled small data well.",
          "key_manifestations": [
            "Hamilton, J. D. (1994). 'Time Series Analysis' (The textbook)",
            "Bollerslev, T. (1986/1990). 'Generalized Autoregressive Conditional Heteroskedasticity'",
            "Engle, R. F. (1982/1990). 'Autoregressive Conditional Heteroscedasticity'",
            "Weigend, A. S., & Gershenfeld, N. A. (1994). 'Time Series Prediction: Forecasting the Future and Understanding the Past'"
          ]
        },
        "1992": {
          "salience_share": 8,
          "description": "Neural Networks for Forecasting (+0%). Early attempts to use MLPs for stocks. They mostly failed due to overfitting and non-stationarity. The 'Santa Fe Time Series Competition' (1991/1992) showed that non-linear methods (Neural Nets) could beat ARIMA on chaotic data (lasers), but struggled on financial data.",
          "key_manifestations": [
            "Weigend, A. S., et al. (1990/1992). 'Back-propagation, Weight-Elimination and Time Series Prediction'",
            "Refenes, A. N., et al. (1994). 'Financial Time Series Forecasting with Neural Networks'",
            "Connor, J. T., et al. (1994). 'Recurrent Neural Networks and Robust Time Series Prediction'"
          ]
        },
        "1994": {
          "salience_share": 8,
          "description": "Stasis. Econometrics dominated. 'Cointegration' (Granger) was the big idea\u2014modeling the equilibrium between non-stationary series. AI was viewed as 'Data Mining' (pejorative) in finance.",
          "key_manifestations": [
            "Hamilton, J. D. (1994). 'Time Series Analysis'",
            "Johansen, S. (1995). 'Likelihood-Based Inference in Cointegrated Vector Autoregressive Models'",
            "Azoff, E. M. (1994). 'Neural Network Time Series Forecasting of Financial Markets'"
          ]
        },
        "1996": {
          "salience_share": 9,
          "description": "Support Vector Regression (SVR) (+1%). Vapnik extended SVMs to regression. SVR showed promise for time series because the $\\epsilon$-insensitive loss ignored small noise (robustness). It became popular for electric load forecasting.",
          "key_manifestations": [
            "M\u00fcller, K. R., et al. (1997). 'Predicting Time Series with Support Vector Machines'",
            "Drucker, H., et al. (1997). 'Support Vector Regression Machines'",
            "Mukherjee, S., et al. (1997). 'Nonlinear Prediction of Chaotic Time Series using Support Vector Machines'"
          ]
        },
        "1998": {
          "salience_share": 9,
          "description": "Stasis. Kalman Filters were the standard for 'State Space' modeling. They handled noise and missing data better than early neural nets. The 'Displacing Force' was the interpretability of State Space models (Level, Trend, Seasonality).",
          "key_manifestations": [
            "Harvey, A. C. (1989/1998). 'Forecasting, Structural Time Series Models and the Kalman Filter'",
            "Durbin, J., & Koopman, S. J. (2001). 'Time Series Analysis by State Space Methods'",
            "Wan, E. A., & Van Der Merwe, R. (2000). 'The Unscented Kalman Filter' (Non-linear improvement)"
          ]
        },
        "2000": {
          "salience_share": 9,
          "description": "Stasis. Financial engineering boomed (Black-Scholes variants), but it was Stochastic Calculus, not Learning. ML was used for 'Classification' (Up/Down) rather than 'Forecasting' (Price).",
          "key_manifestations": [
            "Tay, F. E., & Cao, L. (2001). 'Application of Support Vector Machines in Financial Time Series Forecasting'",
            "Kim, K. J. (2003). 'Financial Time Series Forecasting using Support Vector Machines'",
            "Tsay, R. S. (2002). 'Analysis of Financial Time Series'"
          ]
        },
        "2002": {
          "salience_share": 10,
          "description": "Ensemble Methods (+1%). Bagging and Boosting applied to time series. It worked, but handling temporal dependence was tricky. The 'M-Competitions' (Makridakis) showed that simple statistical methods (Exponential Smoothing) often beat complex ML.",
          "key_manifestations": [
            "Makridakis, S., & Hibon, M. (2000). 'The M3-Competition: Results, Conclusions and Implications'",
            "Crone, S. F., et al. (2011). 'Advances in Neural Network Forecasting' (Review of the 2000s struggles)",
            "Zhang, G. P. (2003). 'Time Series Forecasting using a Hybrid ARIMA and Neural Network Model'"
          ]
        },
        "2004": {
          "salience_share": 10,
          "description": "Stasis. Echo State Networks (Cluster 17) showed some promise for chaotic series. But ARIMA remained the 'Excel Default.'",
          "key_manifestations": [
            "Jaeger, H., & Haas, H. (2004). 'Harnessing Nonlinearity: Predicting Chaotic Systems'",
            "De Gooijer, J. G., & Hyndman, R. J. (2006). '25 Years of Time Series Forecasting'"
          ]
        },
        "2006": {
          "salience_share": 10,
          "description": "Prophet Pre-History (+0%). The need for 'Business Forecasting' (Holidays, Seasonality, Trend changes) was growing at Google/Facebook. Standard models failed on 'human' time series.",
          "key_manifestations": [
            "Taylor, S. J., & Letham, B. (2018). 'Forecasting at Scale' (Prophet - but roots in 2000s Generalized Additive Models)",
            "Hyndman, R. J., & Khandakar, Y. (2008). 'Automatic Time Series Forecasting: The forecast Package for R'"
          ]
        },
        "2008": {
          "salience_share": 11,
          "description": "Gradient Boosting for Time Series (+1%). Kaggle competitions (Walmart Sales, Rossmann) showed that XGBoost (with lag features) beat ARIMA. The trick: Transform time series into a supervised learning problem (Windowing). This killed the 'Recurrent' necessity for tabular series.",
          "key_manifestations": [
            "Taieb, S. B., et al. (2012). 'A Review and Comparison of Strategies for Multi-Step Ahead Time Series Forecasting' (2010s context)",
            "Hyndman, R. J., & Athanasopoulos, G. (2018). 'Forecasting: Principles and Practice' (The R era)",
            "Box, G. E., et al. (2015). 'Time Series Analysis: Forecasting and Control' (The persistence of the old guard)"
          ]
        },
        "2010": {
          "salience_share": 12,
          "description": "LSTM Return (+1%). Graves' work on RNNs revived interest. LSTMs were applied to 'Sequence Prediction.' They handled long-term dependencies better than ARIMA's fixed lags. However, training was slow.",
          "key_manifestations": [
            "Graves, A. (2013). 'Generating Sequences With Recurrent Neural Networks'",
            "Gers, F. A., et al. (2000/2010). 'Learning to Forget: Continual Prediction with LSTM'",
            "Sutskever, I., et al. (2014). 'Sequence to Sequence Learning with Neural Networks' (Applied to TS later)"
          ]
        },
        "2012": {
          "salience_share": 15,
          "description": "DeepAR & Probabilistic RNNs (+3%). Amazon (Salinas et al.) introduced DeepAR. It used LSTMs to predict the *parameters* of a distribution (Gaussian/Negative Binomial). This provided confidence intervals. It allowed 'Global Models'\u2014training one model on 1000s of time series simultaneously (Cross-Learning).",
          "key_manifestations": [
            "Salinas, D., et al. (2020). 'DeepAR: Probabilistic Forecasting with Autoregressive Recurrent Networks' (2017 arXiv, 2013-15 dev)",
            "Wen, R., et al. (2017). 'A Multi-Horizon Quantile Recurrent Forecaster'",
            "Rangapuram, S. S., et al. (2018). 'Deep State Space Models for Time Series Forecasting'"
          ]
        },
        "2014": {
          "salience_share": 20,
          "description": "M4 Competition Shock (+5%). Smyl used a Hybrid method (LSTM + Exponential Smoothing) to win the M4 competition. This proved ML could beat pure Statistics *if* combined properly. It ended the 'ML is worse than ARIMA' dogma.",
          "key_manifestations": [
            "Makridakis, S., et al. (2018). 'The M4 Competition: Results, Conclusions, Implications'",
            "Smyl, S. (2020). 'A Hybrid Method of Exponential Smoothing and Recurrent Neural Networks for Time Series Forecasting'",
            "Oreshkin, B. N., et al. (2019). 'N-BEATS: Neural Basis Expansion Analysis for Interpretable Time Series Forecasting' (2018 work)"
          ]
        },
        "2016": {
          "salience_share": 25,
          "description": "N-BEATS & TCNs (+5%). Oreshkin et al. (N-BEATS) showed a pure DL architecture (stacks of MLPs) could beat hybrids. Temporal Convolutional Networks (TCN) showed ConvNets could beat RNNs on sequence data. The field moved to 'Specialized Architectures' for time.",
          "key_manifestations": [
            "Bai, S., et al. (2018). 'An Empirical Evaluation of Generic Convolutional and Recurrent Networks for Sequence Modeling' (TCN)",
            "Oreshkin, B. N., et al. (2019). 'N-BEATS'",
            "Lim, B., et al. (2021). 'Temporal Fusion Transformers for Interpretable Multi-horizon Time Series Forecasting' (TFT - 2019 work)"
          ]
        },
        "2018": {
          "salience_share": 30,
          "description": "Transformers for Time Series (+5%). Li et al. (LogSparse Transformer) and Lim (TFT). Applying Self-Attention to time. The challenge was the $O(N^2)$ cost for long series. 'Informer' and 'Autoformer' introduced sparse attention mechanisms for long sequences.",
          "key_manifestations": [
            "Li, S., et al. (2019). 'Enhancing the Locality and Breaking the Memory Bottleneck of Transformer on Time Series Forecasting'",
            "Zhou, H., et al. (2021). 'Informer: Beyond Efficient Transformer for Long Sequence Time-Series Forecasting'",
            "Wu, H., et al. (2021). 'Autoformer: Decomposition Transformers with Auto-Correlation for Long-Term Series Forecasting'"
          ]
        },
        "2020": {
          "salience_share": 35,
          "description": "Linear vs Transformer Wars (+5%). Zeng et al. (DLinear) showed that a simple Linear layer often beat complex Transformers on benchmarks. It revealed that Transformers were overfitting to noise. The field had a 'Reality Check.'",
          "key_manifestations": [
            "Zeng, A., et al. (2023). 'Are Transformers Effective for Time Series Forecasting?' (DLinear)",
            "Nie, Y., et al. (2022). 'A Time Series is Worth 64 Words: Long-term Forecasting with Transformers' (PatchTST)",
            "Liu, Y., et al. (2023). 'TimesNet: Temporal 2D-Variation Modeling for General Time Series Analysis'"
          ]
        },
        "2022": {
          "salience_share": 40,
          "description": "Time Series Foundation Models (+5%). Lag-Llama, TimeGPT. Can we train a 'GPT' for time series on billions of heterogeneous series? Zero-shot forecasting. The results were mixed but promising. 'PatchTST' showed that patchifying time series (like ViT) works best.",
          "key_manifestations": [
            "Garza, A., & Mergenthaler-Canseco, M. (2023). 'TimeGPT-1'",
            "Rasul, K., et al. (2023). 'Lag-Llama: Towards Foundation Models for Probabilistic Time Series Forecasting'",
            "Das, A., et al. (2023). 'A Decoder-Only Foundation Model for Time-Series Forecasting' (TimesFM)"
          ]
        },
        "2024": {
          "salience_share": 45,
          "description": "Current trajectory is 'LLM Adaptation' (+5%). Chronos (Amazon). Don't train a new model; tokenizing time series values into buckets and feeding them to a frozen T5/LLaMA. It turns out Language Models understand the 'Language of Time' (patterns, seasonality) zero-shot.",
          "key_manifestations": [
            "Ansari, A. F., et al. (2024). 'Chronos: Learning the Language of Time Series'",
            "Liu, Y., et al. (2024). 'UniTS: Building a Unified Time Series Model'",
            "Gruver, N., et al. (2023). 'Large Language Models Are Zero-Shot Time Series Forecasters'",
            "Reference: 'The Tokenization of Continuous Variables'"
          ]
        }
      }
    },
    "47_statistical_machine_translation": {
      "name": "Statistical Machine Translation (SMT)",
      "description": "This eigencluster represents the 'Rosetta Stone' era of AI translation. It relied on the 'Noisy Channel Model'\u2014treating translation as decoding a scrambled message using Bayes' Rule ($P(E|F) \\propto P(F|E) P(E)$). It tracks the evolution from the word-based IBM Models of the 90s, to the Phrase-Based SMT (Moses) dominance of the 2000s, to its rapid and total extinction by Neural Machine Translation (NMT) in 2016. It is a case study in how a dominant, mathematically rigorous paradigm can be completely displaced by a 'black box' data-driven approach.",
      "trajectory": {
        "1990": {
          "salience_share": 8,
          "description": "The IBM Models (+3%). Brown et al. at IBM Research published the seminal paper. They introduced IBM Models 1-5. The core idea: Word alignment. 'Le' aligns to 'The'. It was purely statistical, ignoring linguistics (syntax/grammar). This shocked the rule-based MT community ('Systran').",
          "key_manifestations": [
            "Brown, P. F., et al. (1990). 'A Statistical Approach to Machine Translation'",
            "Brown, P. F., et al. (1993). 'The Mathematics of Statistical Machine Translation: Parameter Estimation' (The technical bible)",
            "Gale, W. A., & Church, K. W. (1991). 'A Program for Aligning Sentences in Bilingual Corpora'",
            "Berger, A. L., et al. (1994). 'The Candide System for Machine Translation'"
          ]
        },
        "1992": {
          "salience_share": 8,
          "description": "Stasis. The algorithms (EM for alignment) were computationally expensive. The 'Displacing Force' against adoption was the lack of parallel corpora (bitexts). The Canadian Hansards were the only major dataset.",
          "key_manifestations": [
            "Brown, P. F., et al. (1993). 'The Mathematics of Statistical Machine Translation'",
            "Kay, M., & Rosenschein, M. (1993). 'Text-Translation Alignment'",
            "Church, K. W. (1993). 'Char_align: A Program for Aligning Parallel Texts at the Character Level'"
          ]
        },
        "1994": {
          "salience_share": 9,
          "description": "Alignment Refinement (+1%). The focus was on improving the 'Translation Model' $P(F|E)$. Heuristics for handling fertility (one word becoming two) and distortion (reordering).",
          "key_manifestations": [
            "Dagan, I., et al. (1994). 'Robust Bilingual Word Alignment for Machine Aided Translation'",
            "Wu, D. (1994). 'Aligning a Parallel English-Chinese Corpus Statistically with Lexical Criteria'",
            "Fung, P., & Church, K. W. (1994). 'K-vec: A New Approach for Aligning Parallel Texts'"
          ]
        },
        "1996": {
          "salience_share": 10,
          "description": "Decoder Optimization (+1%). Searching for the best sentence in the SMT search space is NP-hard. 'Stack Decoding' (A* search variants) became the standard. The 'Language Model' $P(E)$ (N-gram) became the primary driver of fluency.",
          "key_manifestations": [
            "Tillmann, C., et al. (1997). 'Accelerated DP Based Search for Statistical Translation' (1996 work)",
            "Wu, D. (1996). 'A Polynomial-Time Algorithm for Statistical Machine Translation'",
            "Wang, Y. Y., & Waibel, A. (1997). 'Decoding Algorithm in Statistical Machine Translation'"
          ]
        },
        "1998": {
          "salience_share": 12,
          "description": "Phrase-Based SMT Origins (+2%). Researchers realized 'Word-for-Word' translation is bad. You need to translate chunks ('pomme de terre' -> 'potato'). Och and Ney began formulating the alignment of 'Phrases' (blocks of pixels in the alignment matrix).",
          "key_manifestations": [
            "Och, F. J., & Weber, H. (1998). 'Improving Statistical Natural Language Translation with Categories and Rules'",
            "Al-Onaizan, Y., et al. (1999). 'Statistical Machine Translation with Scarce Resources'",
            "Melamed, I. D. (1998). 'Empirical Methods for Exploiting Parallel Texts'"
          ]
        },
        "2000": {
          "salience_share": 15,
          "description": "The BLEU Metric (+3%). Papineni et al. (IBM) introduced BLEU. An automatic metric to evaluate translation quality against human references. This was a *massive* catalyst. It allowed rapid hill-climbing without expensive human eval. It defined the 'game' of MT for 15 years.",
          "key_manifestations": [
            "Papineni, K., et al. (2002). 'BLEU: a Method for Automatic Evaluation of Machine Translation' (2001 work)",
            "Och, F. J., & Ney, H. (2000). 'Improved Statistical Alignment Models'",
            "Marcu, D., & Wong, W. (2002). 'A Phrase-Based, Joint Probability Model for Statistical Machine Translation'"
          ]
        },
        "2002": {
          "salience_share": 20,
          "description": "Phrase-Based SMT Dominance (+5%). Och & Ney formalized Phrase-Based SMT (PBSMT). It beat all rule-based systems. It became the industrial standard (Google Translate launch architecture). The logic: 'Memorize short sequences, stitch them together using a language model.'",
          "key_manifestations": [
            "Koehn, P., et al. (2003). 'Statistical Phrase-Based Translation' (The seminal paper)",
            "Och, F. J., & Ney, H. (2003). 'A Systematic Comparison of Various Statistical Alignment Models'",
            "Zens, R., et al. (2002). 'Phrase-Based Statistical Machine Translation'"
          ]
        },
        "2004": {
          "salience_share": 25,
          "description": "Moses Toolkit (+5%). Philipp Koehn released 'Moses.' An open-source SMT engine. This democratized the field. Anyone could build a translator for any language pair if they had data. It sparked an explosion of academic research.",
          "key_manifestations": [
            "Koehn, P., et al. (2007). 'Moses: Open Source Toolkit for Statistical Machine Translation' (2005-06 dev)",
            "Chiang, D. (2005). 'A Hierarchical Phrase-Based Model for Statistical Machine Translation' (Hiero - adding syntax)",
            "Och, F. J. (2003). 'Minimum Error Rate Training in Statistical Machine Translation' (MERT - optimizing BLEU directly)"
          ]
        },
        "2006": {
          "salience_share": 28,
          "description": "Hierarchical SMT (+3%). David Chiang introduced 'Hiero.' It used SCFGs (Synchronous Context-Free Grammars). It allowed 'gaps' in phrases ('eat [X] up' -> 'manger [X]'). This handled reordering between languages (like Chinese-English) better than flat phrases.",
          "key_manifestations": [
            "Chiang, D. (2007). 'Hierarchical Phrase-Based Translation'",
            "Marcu, D., et al. (2006). 'SPMT: Statistical Machine Translation with Syntactified Target Language Phrases'",
            "Galley, M., et al. (2006). 'Scalable Inference and Training of Context-Rich Syntactic Translation Models'"
          ]
        },
        "2008": {
          "salience_share": 30,
          "description": "Syntax-Based SMT (+2%). Trying to inject linguistic trees into SMT. 'Tree-to-String' or 'String-to-Tree.' It improved grammaticality but increased complexity. The system was becoming a 'Rube Goldberg machine' of distinct modules (Alignment, Reordering, Language Model, Translation Model).",
          "key_manifestations": [
            "Shen, L., et al. (2008). 'A New String-to-Dependency Machine Translation Algorithm'",
            "Mi, H., et al. (2008). 'Forest-based Translation'",
            "Koehn, P. (2010). 'Statistical Machine Translation' (The Textbook summarizing the era)"
          ]
        },
        "2010": {
          "salience_share": 32,
          "description": "Peak SMT (+2%). The system was mature. Google Translate was decent. Research focused on 'Domain Adaptation' and 'System Combination.' But the 'Semantic Gap' remained: SMT produced 'word salad'\u2014locally coherent, globally nonsense.",
          "key_manifestations": [
            "Bisazza, A., & Federico, M. (2010). 'Dynamically Shaping the Search Space in Hierarchical Phrase-Based Translation'",
            "Foster, G., & Kuhn, R. (2007/2010). 'Mixture-Model Adaptation for SMT'",
            "Dyer, C., et al. (2010). 'cdec: A Decoder, Alignment, and Learning Framework for Finite-State and Context-Free Translation Models'"
          ]
        },
        "2012": {
          "salience_share": 30,
          "description": "Neural Features (-2%). Researchers started adding 'Neural Features' to the SMT log-linear model. Using a neural language model to rescore the SMT output. This was the 'Trojan Horse' of Deep Learning entering the field.",
          "key_manifestations": [
            "Mikolov, T., et al. (2013). 'Exploiting Similarities among Languages for Machine Translation' (Word2Vec for MT)",
            "Vaswani, A., et al. (2013). 'Decoding with Large-Scale Neural Language Models Improves Translation'",
            "Devlin, J., et al. (2014). 'Fast and Robust Neural Network Joint Models for Statistical Machine Translation'"
          ]
        },
        "2014": {
          "salience_share": 20,
          "description": "The Seq2Seq Disruption (-10%). Sutskever/Bahdanau (Cluster 6). 'Sequence to Sequence' neural networks appeared. Initially, they matched SMT. But they were 'End-to-End.' One model replacing the entire Moses pipeline. The 'Displacing Force' was simplicity.",
          "key_manifestations": [
            "Sutskever, I., et al. (2014). 'Sequence to Sequence Learning with Neural Networks'",
            "Bahdanau, D., et al. (2014). 'Neural Machine Translation by Jointly Learning to Align and Translate'",
            "Cho, K., et al. (2014). 'Learning Phrase Representations using RNN Encoder-Decoder'"
          ]
        },
        "2016": {
          "salience_share": 5,
          "description": "The Collapse (-15%). Google launched GNMT (Google Neural Machine Translation). It reduced translation errors by 60% overnight. It was a phase transition. SMT research evaporated. Conferences like ACL shifted entirely to Neural MT.",
          "key_manifestations": [
            "Wu, Y., et al. (2016). 'Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation'",
            "Sennrich, R., et al. (2016). 'Neural Machine Translation of Rare Words with Subword Units' (BPE - solving the vocab issue)",
            "Johnson, M., et al. (2017). 'Google's Multilingual Neural Machine Translation System: Enabling Zero-Shot Translation'"
          ]
        },
        "2018": {
          "salience_share": 2,
          "description": "Legacy. SMT survived only in 'Low Resource' languages where neural nets overfit, or for 'Interpretability' needs. Unsupervised NMT (Lample et al.) showed you didn't even need parallel text anymore.",
          "key_manifestations": [
            "Lample, G., et al. (2018). 'Unsupervised Machine Translation Using Monolingual Corpora Only'",
            "Koehn, P., & Knowles, R. (2017). 'Six Challenges for Neural Machine Translation' (The SMT defense - mostly ignored)",
            "Artetxe, M., et al. (2018). 'Unsupervised Neural Machine Translation'"
          ]
        },
        "2020": {
          "salience_share": 1,
          "description": "Historical Footnote. The concepts of 'Alignment' (Attention) and 'Language Modeling' (Decoder) survived, but the statistical machinery (EM, IBM Models) was gone.",
          "key_manifestations": [
            "Reference: 'The complete replacement of the SMT stack'",
            "Stahlberg, F. (2020). 'Neural Machine Translation: A Review'"
          ]
        },
        "2022": {
          "salience_share": 0,
          "description": "Zero Variance. Translation is now just a prompting task for LLMs ('Translate this to French').",
          "key_manifestations": [
            "Brown, T. B., et al. (2020). 'Language Models are Few-Shot Learners' (Translation as few-shot)",
            "Vilar, D., et al. (2022). 'Prompting PaLM for Translation'"
          ]
        },
        "2024": {
          "salience_share": 0,
          "description": "Merged into 'Multilingual Foundation Models' (Cluster 6).",
          "key_manifestations": [
            "Team, N., et al. (2024). 'No Language Left Behind: Scaling Human-Centered Machine Translation'",
            "Google (2024). 'Universal Speech Translator'"
          ]
        }
      }
    },
    "48_computational_neuroscience": {
      "name": "Computational Neuroscience",
      "description": "This eigencluster represents the 'Source Code' of AI\u2014the mathematical modeling of the biological brain. It is the upstream reservoir of ideas (Hebbian learning, Reinforcement learning, Normalization, Attention) that drift into engineering. The trajectory tracks the 'Hodgkin-Huxley' biophysics of the 90s, to the 'Population Coding' and 'STDP' of the 2000s, to the 'Deep Learning as Brain Model' convergence of the 2010s/20s (Brain-Score).",
      "trajectory": {
        "1990": {
          "salience_share": 4,
          "description": "The Biophysical Era (+1%). The focus was on single neurons. Hodgkin-Huxley equations. Modeling ion channels. The goal was 'Realism.' Neural Nets (AI) were seen as 'Cartoon' models. The 'Binding Problem' (how the brain combines features) was the big mystery.",
          "key_manifestations": [
            "Koch, C., & Segev, I. (1989/1990). 'Methods in Neuronal Modeling'",
            "Crick, F., & Koch, C. (1990). 'Towards a Neurobiological Theory of Consciousness' (40Hz oscillation hypothesis)",
            "Abbott, L. F., & Kepler, T. B. (1990). 'Model Neurons: From Hodgkin-Huxley to Integrate-and-Fire'",
            "Zipser, D., & Andersen, R. A. (1988/1990). 'A Back-Propagation Programmed Network That Simulates Response Properties of a Subset of Posterior Parietal Neurons'"
          ]
        },
        "1992": {
          "salience_share": 4,
          "description": "Stasis. Information Theory enters Neuroscience. Bialek et al. 'Spikes in time.' Quantifying how much information a spike train carries. The 'Neural Code' debate: Rate vs Timing.",
          "key_manifestations": [
            "Bialek, W., et al. (1991). 'Reading a Neural Code'",
            "Rieke, F., et al. (1997). 'Spikes: Exploring the Neural Code' (1992-1996 work)",
            "Atick, J. J. (1992). 'Could Information Theory Provide an Ecological Theory of Sensory Processing?' (Efficient Coding)"
          ]
        },
        "1994": {
          "salience_share": 5,
          "description": "Sparse Coding (+1%). Olshausen & Field (Cluster 11) showed V1 receptive fields emerge from sparsity. This was a massive win for 'Normative' theories (Optimization) over 'Descriptive' theories. The brain *optimizes* an objective function.",
          "key_manifestations": [
            "Olshausen, B. A., & Field, D. J. (1996). 'Emergence of Simple-Cell Receptive Field Properties' (1994-95 work)",
            "Bell, A. J., & Sejnowski, T. J. (1995). 'An Information-Maximization Approach to Blind Separation'",
            "Dayan, P., & Abbott, L. F. (2001). 'Theoretical Neuroscience' (Textbook roots in 90s)"
          ]
        },
        "1996": {
          "salience_share": 5,
          "description": "Synaptic Plasticity (STDP) (+0%). Discovery of Spike-Timing Dependent Plasticity. A local learning rule. It gave hope for unsupervised learning in hardware (Cluster 17).",
          "key_manifestations": [
            "Markram, H., et al. (1997). 'Regulation of Synaptic Efficacy by Coincidence of Postsynaptic APs and EPSPs'",
            "Abbott, L. F., & Blum, K. I. (1996). 'Functional Significance of Long-Term Potentiation'"
          ]
        },
        "1998": {
          "salience_share": 6,
          "description": "Reinforcement Learning in the Brain (+1%). Schultz, Dayan, Montague showed that Dopamine neurons encode 'Reward Prediction Error' (TD-Error). This linked Cluster 7 (RL) directly to the Basal Ganglia. It is the most successful theory in Computational Neuroscience.",
          "key_manifestations": [
            "Schultz, W., Dayan, P., & Montague, P. R. (1997). 'A Neural Substrate of Prediction and Reward'",
            "Sutton, R. S., & Barto, A. G. (1998). 'Reinforcement Learning: An Introduction' (Neuroscience chapters)",
            "Doya, K. (2000). 'Complementary Roles of Basal Ganglia and Cerebellum in Learning and Motor Control'"
          ]
        },
        "2000": {
          "salience_share": 6,
          "description": "Stasis. 'Population Coding.' How groups of neurons represent variables (e.g., direction). Pouget et al. 'Basis Function' hypothesis. The brain represents probabilities via population activity.",
          "key_manifestations": [
            "Pouget, A., et al. (2000). 'Information Processing with Population Codes'",
            "Deneve, S., et al. (1999). 'Reading Population Codes: A Neural Implementation of Ideal Observers'",
            "Ma, W. J., et al. (2006). 'Bayesian Inference with Probabilistic Population Codes' (Roots in early 2000s)"
          ]
        },
        "2002": {
          "salience_share": 6,
          "description": "Bayesian Brain (+0%). The hypothesis that the brain performs Bayesian Inference (Cluster 3). Illusions are just 'Prior' biases. The 'Free Energy Principle' (Friston) began to form: The brain minimizes surprise.",
          "key_manifestations": [
            "Knill, D. C., & Pouget, A. (2004). 'The Bayesian Brain: The Role of Uncertainty in Neural Coding'",
            "Friston, K. (2005). 'A Theory of Cortical Responses'",
            "Rao, R. P., & Ballard, D. H. (1999). 'Predictive Coding in the Visual Cortex' (Gaining traction in 2000s)"
          ]
        },
        "2004": {
          "salience_share": 5,
          "description": "Stasis. Blue Brain Project (2005). 'Simulation' without 'Theory.' Heavy criticism for simulating complexity without understanding function.",
          "key_manifestations": [
            "Markram, H. (2006). 'The Blue Brain Project'",
            "Izhikevich, E. M. (2004). 'Which Model to Use for Cortical Spiking Neurons?'"
          ]
        },
        "2006": {
          "salience_share": 5,
          "description": "Deep Learning Reconnection (+0%). Hinton's DBNs (2006) were framed as 'cortical models' (layer-wise training). But AI and Neuro began to diverge. AI chased performance (MNIST); Neuro chased biological realism (Spikes).",
          "key_manifestations": [
            "Hinton, G. E. (2007). 'To Recognize Shapes, First Learn to Generate Images'",
            "Serre, T., et al. (2007). 'Robust Object Recognition with Cortex-Like Mechanisms' (HMAX model - The last non-learning biological model)"
          ]
        },
        "2008": {
          "salience_share": 5,
          "description": "Stasis. GLM (Generalized Linear Models) became the standard for analyzing spike trains (Pillow). Statistical analysis of neural data, not modeling intelligence.",
          "key_manifestations": [
            "Pillow, J. W., et al. (2008). 'Spatio-Temporal Correlations and Visual Signalling in a Complete Neuronal Population'",
            "Paninski, L., et al. (2007). 'Statistical Models for Neural Encoding, Decoding, and Control'"
          ]
        },
        "2010": {
          "salience_share": 5,
          "description": "Stasis. The 'Connectome.' Mapping the wiring diagram. Seung's 'I am my Connectome.' Big Data Neuroscience.",
          "key_manifestations": [
            "Seung, S. (2012). 'Connectome: How the Brain's Wiring Makes Us Who We Are'",
            "Sporns, O. (2011). 'Networks of the Brain'",
            "Lichtman, J. W., & Denk, W. (2011). 'The Big and the Small: Challenges of Imaging the Brain's Circuits'"
          ]
        },
        "2012": {
          "salience_share": 8,
          "description": "Deep Learning predicts Brain (+3%). Yamins & DiCarlo. They showed that a trained CNN (AlexNet) predicts neural activity in the monkey IT cortex better than any biological model. This was a paradigm shift: 'To understand the brain, build an AI.'",
          "key_manifestations": [
            "Yamins, D. L., et al. (2014). 'Performance-optimized Hierarchical Models Predict Neural Responses in Higher Visual Cortex' (2013 work)",
            "Kriegeskorte, N. (2015). 'Deep Neural Networks: A New Framework for Modeling Biological Vision and Brain Information Processing'",
            "Cadieu, C. F., et al. (2014). 'Deep Neural Networks Rival the Representation of Primate IT Cortex for Core Visual Object Recognition'"
          ]
        },
        "2014": {
          "salience_share": 10,
          "description": "The Convergence (+2%). AI researchers (DeepMind) and Neuroscientists merged. 'Grid Cells' in entorhinal cortex emerged spontaneously in LSTMs trained to navigate (Banino et al.). This validated AI architectures as biological hypotheses.",
          "key_manifestations": [
            "Banino, A., et al. (2018). 'Vector-based Navigation using Grid-like Representations in Artificial Agents' (Roots in 2015-16)",
            "Kumaran, D., et al. (2016). 'What Learning Systems do Intelligent Agents Need?'",
            "Marblestone, A. H., et al. (2016). 'Toward an Integration of Deep Learning and Neuroscience'"
          ]
        },
        "2016": {
          "salience_share": 10,
          "description": "Bio-Plausible Backprop (+0%). Can the brain do backprop? 'Feedback Alignment' (Lillicrap) showed random feedback weights work. 'Predictive Coding' (Rao) was re-interpreted as Backprop. The search for the 'Brain's Learning Algorithm' heated up.",
          "key_manifestations": [
            "Lillicrap, T. P., et al. (2016). 'Random Synaptic Feedback Weights Support Error Backpropagation for Deep Learning'",
            "Whittington, J. C., & Bogacz, R. (2017). 'An Approximation of the Error Backpropagation Algorithm in a Predictive Coding Network'",
            "Richards, B. A., et al. (2019). 'A Deep Learning Framework for Neuroscience'"
          ]
        },
        "2018": {
          "salience_share": 12,
          "description": "Brain-Score (+2%). Schrimpf et al. created a benchmark: How well does model X predict brain data Y? It became a leaderboard. Current SOTA AI models are the SOTA brain models.",
          "key_manifestations": [
            "Schrimpf, M., et al. (2018). 'Brain-Score: Which Artificial Neural Network for the Primate Ventral Visual Stream?'",
            "Kubilius, J., et al. (2019). 'Brain-Like Object Recognition with High-Performing Shallow Recurrent ANNs'",
            "Kell, A. J., et al. (2018). 'A Task-Optimized Neural Network Replicates Human Auditory Behavior'"
          ]
        },
        "2020": {
          "salience_share": 12,
          "description": "Language Models & Brain (+0%). Using GPT-2/3 to predict fMRI responses to text (Caucheteux/King). It works. The brain processes language similarly to a Transformer (Predictive Coding).",
          "key_manifestations": [
            "Schrimpf, M., et al. (2021). 'The Neural Architecture of Language: Integrative Modeling Converges on Predictive Processing'",
            "Caucheteux, C., & King, J. R. (2022). 'Brains and Algorithms Partially Converge in Natural Language Processing'",
            "Goldstein, A., et al. (2022). 'Shared Computational Principles for Language Processing in Humans and Deep Language Models'"
          ]
        },
        "2022": {
          "salience_share": 12,
          "description": "Stasis. The gap is widening again. AI (Transformers) is engineering-driven (normalization, attention heads). The brain doesn't have LayerNorm. The 'details' are diverging, even if the 'function' converges.",
          "key_manifestations": [
            "Saxe, A., et al. (2021). 'If Deep Learning is the Answer, What is the Question?'",
            "Doerig, A., et al. (2023). 'The Neuroconnectionist Research Programme'",
            "Kanwisher, N., et al. (2023). 'Using Artificial Neural Networks to Ask 'Why' Questions of the Brain'"
          ]
        },
        "2024": {
          "salience_share": 12,
          "description": "Current trajectory is 'Neuro-AI' as a tool (+0%). Using AI to map the Connectome (Google/Harvard). Using AI to decode speech from brain waves (BCI). AI is the 'microscope,' not just the 'model.'",
          "key_manifestations": [
            "Jain, V., et al. (2024). 'A Petavoxel Fragment of Human Cerebral Cortex Reconstructed at Nanoscale Resolution'",
            "Willett, F. R., et al. (2023). 'A High-Performance Speech Neuroprosthesis'",
            "Reference: 'AI decoding the brain vs AI modeling the brain'"
          ]
        }
      }
    },
    "49_information_theory_coding": {
      "name": "Information Theory & Coding",
      "description": "This eigencluster represents the 'Physics of Data.' It provides the fundamental limits (entropy, channel capacity) and the measures of correlation (Mutual Information) that govern all learning. The trajectory tracks the evolution from the classical Shannon theory of the 90s, to the 'Information Bottleneck' (Tishby) interpretation of Deep Learning in the 2010s, to the modern 'Neural Compression' and 'Rate-Distortion' optimization of the 2020s. It answers the question: 'How much can be learned from X about Y?'",
      "trajectory": {
        "1990": {
          "salience_share": 3,
          "description": "The Shannon Foundation (+0%). Information Theory was the bedrock of Communications (Modems, Coding). In AI, it was used for 'Decision Tree Splitting' (Information Gain). The Kullback-Leibler (KL) divergence was known but mostly used in statistics, not yet the universal loss function of AI.",
          "key_manifestations": [
            "Cover, T. M., & Thomas, J. A. (1991). 'Elements of Information Theory' (The Bible of the field)",
            "Quinlan, J. R. (1993). 'C4.5: Programs for Machine Learning' (Information Gain criterion)",
            "Rissanen, J. (1989/1990). 'Stochastic Complexity in Statistical Inquiry' (MDL)"
          ]
        },
        "1992": {
          "salience_share": 3,
          "description": "Stasis. 'Minimum Description Length' (MDL) offered a bridge between Coding Theory and Learning Theory. Learning is finding the shortest code. This was the 'Occam's Razor' of the 90s.",
          "key_manifestations": [
            "Hinton, G. E., & Van Camp, D. (1993). 'Keeping the Neural Networks Simple by Minimizing the Description Length of the Weights'",
            "Zemel, R. S., & Hinton, G. E. (1994). 'Developing Population Codes by Minimizing Description Length'",
            "Rissanen, J. (1996). 'Fisher Information and Stochastic Complexity'"
          ]
        },
        "1994": {
          "salience_share": 4,
          "description": "Infomax (+1%). Bell & Sejnowski. 'Independent Component Analysis' (ICA) was derived by maximizing the Mutual Information between inputs and outputs. This proved that maximizing information flow (Entropy maximization) leads to feature discovery (Edge detectors).",
          "key_manifestations": [
            "Bell, A. J., & Sejnowski, T. J. (1995). 'An Information-Maximization Approach to Blind Separation and Blind Deconvolution'",
            "Amari, S., et al. (1996). 'A New Learning Algorithm for Blind Signal Separation'",
            "Linsker, R. (1992/1994). 'Local Synaptic Learning Rules Suffice to Maximize Mutual Information in a Linear Network'"
          ]
        },
        "1996": {
          "salience_share": 4,
          "description": "Stasis. The 'Turbo Codes' revolution in comms showed that iterative decoding works. This inspired 'Belief Propagation' in AI (Cluster 3). The two fields (Coding vs Learning) touched via 'message passing.'",
          "key_manifestations": [
            "Berrou, C., & Glavieux, A. (1996). 'Near Shannon Limit Error - Correcting Coding and Decoding: Turbo-Codes'",
            "MacKay, D. J. C., & Neal, R. M. (1996). 'Near Shannon Limit Performance of Low Density Parity Check Codes'",
            "Frey, B. J. (1998). 'Graphical Models for Machine Learning and Digital Communication'"
          ]
        },
        "1998": {
          "salience_share": 3,
          "description": "The Information Bottleneck (+1%). Tishby et al. formalized the 'Information Bottleneck' (IB) method. Squeeze X into T to predict Y. Maximize $I(T;Y)$ while minimizing $I(X;T)$. This provided a general non-parametric principle for supervised learning: 'Keep only what is relevant.'",
          "key_manifestations": [
            "Tishby, N., Pereira, F. C., & Bialek, W. (1999). 'The Information Bottleneck Method'",
            "Slonim, N., & Tishby, N. (2000). 'Agglomerative Information Bottleneck'",
            "Friedman, N., et al. (1998). 'The Bayesian Structural EM Algorithm'"
          ]
        },
        "2000": {
          "salience_share": 3,
          "description": "Stasis. 'Universal Source Coding' (Lempel-Ziv) was fully mature. AI was focused on SVM margins (Geometry), not Bits (Entropy). Information Theory was seen as 'Asymptotic' (infinite data), while ML was 'Finite Sample' (Cluster 8).",
          "key_manifestations": [
            "MacKay, D. J. C. (2003). 'Information Theory, Inference and Learning Algorithms' (The book that unified the fields)",
            "Barron, A., et al. (1998/2000). 'The Minimum Description Length Principle in Coding and Modeling'",
            "Vialatte, J. C., et al. (2009). 'Auto-encoders, Minimum Description Length and Helmholtz Free Energy'"
          ]
        },
        "2002": {
          "salience_share": 3,
          "description": "Stasis. Metric Learning (Cluster 23) was geometric. Information Theoretic Metric Learning (ITML) appeared later. The field was quiet.",
          "key_manifestations": [
            "Dhillon, I. S., et al. (2003). 'Divisive Information-Theoretic Clustering'",
            "Banerjee, A., et al. (2005). 'Clustering with Bregman Divergences' (Generalizing entropy measures)",
            "Jenssen, R., et al. (2006). 'Cauchy-Schwarz Independence Measure'"
          ]
        },
        "2004": {
          "salience_share": 3,
          "description": "Stasis. 'Compressed Sensing' (Cluster 11) was the rage. It was about L1 norms, not Shannon Entropy. The definition of 'Information' was shifting from 'Probabilistic' to 'Geometric' (Sparsity).",
          "key_manifestations": [
            "Candes, E. J., & Tao, T. (2005). 'Decoding by Linear Programming'",
            "Donoho, D. L. (2006). 'Compressed Sensing'",
            "Verdu, S. (1998/2004). 'Multiuser Detection'"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Visual Information (+0%). 'Saliency' in vision was defined as 'Information Maximization' (Bruce & Tsotsos). The eye looks where information is high. This kept the 'Infomax' idea alive in perception.",
          "key_manifestations": [
            "Bruce, N., & Tsotsos, J. (2006). 'Saliency Based on Information Maximization'",
            "Kienzle, W., et al. (2007). 'A Nonparametric Approach to Bottom-Up Visual Saliency'",
            "Butz, M. V., et al. (2006). 'Anticipatory Behavior in Adaptive Learning Systems'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Stasis. Deep Learning was using Cross-Entropy loss ($H(P,Q)$). Researchers accepted this as 'Maximum Likelihood' without thinking deeply about the bit-rate interpretation.",
          "key_manifestations": [
            "Rubinstein, B. I., et al. (2009). 'Learning in a Large Function Space: Privacy-Preserving Mechanisms for SVM Learning'",
            "Tishby, N., & Polani, D. (2011). 'Information Theory of Decisions and Actions'"
          ]
        },
        "2010": {
          "salience_share": 4,
          "description": "VAE & Bits-Back (+1%). The Variational Autoencoder (2013) explicitly minimized the KL divergence between the posterior and the prior. This is 'Rate' in Rate-Distortion theory. The VAE loss is exactly $Rate + Distortion$. This re-unified Coding and Learning.",
          "key_manifestations": [
            "Kingma, D. P., & Welling, M. (2013). 'Auto-Encoding Variational Bayes'",
            "Rezende, D. J., et al. (2014). 'Stochastic Backpropagation and Approximate Inference in Deep Generative Models'",
            "Honkela, A., et al. (2010). 'Approximate Riemannian Conjugate Gradient Learning for Fixed-Form Variational Bayes'"
          ]
        },
        "2012": {
          "salience_share": 4,
          "description": "Stasis. Deep Learning focused on accuracy. Tishby continued to develop the IB theory for DL, but it was controversial.",
          "key_manifestations": [
            "Tishby, N., & Zaslavsky, N. (2015). 'Deep Learning and the Information Bottleneck Principle'",
            "Alemi, A. A., et al. (2016). 'Deep Variational Information Bottleneck'"
          ]
        },
        "2014": {
          "salience_share": 5,
          "description": "InfoGAN (+1%). Maximizing Mutual Information in GANs. Force the latent code $c$ to have high MI with the generated image $G(z,c)$. This leads to disentangled representations. Information theory became a tool for 'Disentanglement.'",
          "key_manifestations": [
            "Chen, X., et al. (2016). 'InfoGAN: Interpretable Representation Learning by Information Maximizing Generative Adversarial Nets'",
            "Hjelm, R. D., et al. (2019). 'Learning Deep Representations by Mutual Information Estimation and Maximization' (Deep InfoMax)",
            "Belghazi, M. I., et al. (2018). 'MINE: Mutual Information Neural Estimation'"
          ]
        },
        "2016": {
          "salience_share": 6,
          "description": "The IB Debate (+1%). Tishby argued DL works by 'Compression' (forgetting nuisance variables). Saxe et al. rebutted, showing ReLUs don't necessarily compress. The debate invigorated the field. 'Is Learning Compression?' became the central question.",
          "key_manifestations": [
            "Shwartz-Ziv, R., & Tishby, N. (2017). 'Opening the Black Box of Deep Neural Networks via Information'",
            "Saxe, A. M., et al. (2018). 'On the Information Bottleneck Theory of Deep Learning'",
            "Achille, A., & Soatto, S. (2018). 'Information Dropout: Learning Optimal Representations Through Noisy Computation'"
          ]
        },
        "2018": {
          "salience_share": 8,
          "description": "Contrastive Learning as MI (+2%). Oord (CPC) showed that Contrastive Loss (InfoNCE) is a lower bound on Mutual Information. SimCLR works because it maximizes $I(View1; View2)$. This provided the theoretical justification for the Self-Supervised revolution (Cluster 23).",
          "key_manifestations": [
            "Oord, A. v. d., et al. (2018). 'Representation Learning with Contrastive Predictive Coding'",
            "Tschannen, M., et al. (2019). 'On Mutual Information Maximization for Representation Learning'",
            "Poole, B., et al. (2019). 'On Variational Bounds of Mutual Information'"
          ]
        },
        "2020": {
          "salience_share": 10,
          "description": "Neural Compression (+2%). Using AI for file compression. 'Scale-Hyperpriors' beat JPEG 2000. It turns out that 'Generative Modeling' and 'Lossless Compression' are the same task ($Loss = -log P(x)$). Better AI = Better Zip.",
          "key_manifestations": [
            "Ball\u00e9, J., et al. (2018). 'Variational Image Compression with a Scale Hyperprior'",
            "Mentzer, F., et al. (2020). 'High-Fidelity Generative Image Compression'",
            "Yang, Y., et al. (2023). 'Language Modeling Is Compression' (DeepMind)"
          ]
        },
        "2022": {
          "salience_share": 12,
          "description": "LLM Scaling as Entropy (+2%). The Scaling Laws (Kaplan) are statements about the entropy of natural language. 'Perplexity' is $2^{Entropy}$. The entire field of LLMs is now an exercise in minimizing the Cross-Entropy of the internet.",
          "key_manifestations": [
            "Hoffmann, J., et al. (2022). 'Training Compute-Optimal Large Language Models' (Chinchilla - Entropy vs Compute)",
            "Srivastava, A., et al. (2022). 'Beyond the Imitation Game'",
            "Del\u00e9tang, G., et al. (2023). 'Language Modeling Is Compression'"
          ]
        },
        "2024": {
          "salience_share": 12,
          "description": "Current trajectory is 'Semantic Information.' Moving beyond Shannon Entropy (which cares about exact bits) to 'Semantic Entropy' (does the *meaning* change?). Used for hallucination detection.",
          "key_manifestations": [
            "Kuhn, L., et al. (2023). 'Semantic Entropy Probes: Robust and Cheap Hallucination Detection in LLMs'",
            "Farquhar, S., et al. (2024). 'Detecting Hallucinations in Large Language Models using Semantic Entropy'",
            "Reference: 'From Bit-rate to Thought-rate'"
          ]
        }
      }
    },
    "50_topological_data_analysis": {
      "name": "Topological Data Analysis (TDA)",
      "description": "This eigencluster represents the 'Shape of Data.' It uses algebraic topology (Persistent Homology) to find invariant structures (loops, holes, voids) in high-dimensional data that are robust to noise and deformation. Trajectory-wise, it moved from the pure math of the 90s/00s (Edelsbrunner/Carlsson), to the 'Mapper' algorithm applications of the 2010s, to a recent synthesis with Deep Learning (Topological Loss Functions, Graph Filtration) in the 2020s. It provides a 'Qualitative' lens distinct from the 'Quantitative' lens of geometry.",
      "trajectory": {
        "1990": {
          "salience_share": 1,
          "description": "Pure Math (+0%). Computational Topology was being defined. Algorithms to compute Betti numbers. It was disjoint from AI/Stats.",
          "key_manifestations": [
            "Edelsbrunner, H., et al. (1990). 'Simulation of Simplicity: A Technique to Cope with Degenerate Cases in Geometric Algorithms'",
            "Delfinado, C. J. A., & Edelsbrunner, H. (1995). 'An Incremental Algorithm for Betti Numbers of Simplicial Complexes'",
            "Fomenko, A. T. (1990). 'Visual Geometry and Topology'"
          ]
        },
        "1992": {
          "salience_share": 1,
          "description": "Alpha Shapes (+0%). Edelsbrunner defined Alpha Shapes. A way to define the 'shape' of a point cloud at different scales. This was the precursor to filtration.",
          "key_manifestations": [
            "Edelsbrunner, H., & M\u00fccke, E. P. (1994). 'Three-dimensional Alpha Shapes' (1992 work)",
            "Amenta, N., & Bern, M. (1999). 'Surface Reconstruction by Voronoi Filtering' (Roots in mid-90s)"
          ]
        },
        "1994": {
          "salience_share": 1,
          "description": "Stasis. The math was maturing. 'Reeb Graphs' used for shape analysis.",
          "key_manifestations": [
            "Shinagawa, Y., et al. (1996). 'Constructing a Reeb Graph Automatically from Cross Sections' (1995 work)",
            "Frosini, P., & Landi, C. (1999). 'Size Theory as a Topological Tool for Computer Vision'"
          ]
        },
        "1996": {
          "salience_share": 1,
          "description": "Stasis. Manifold Learning (ISOMAP) appeared (Cluster 12). TDA was the 'Algebraic' alternative to Manifold Learning's 'Differential' view.",
          "key_manifestations": [
            "Robins, V. (1999). 'Towards Computing Homology from Finite Approximations'",
            "Verri, A., et al. (1993/1996). 'Differential Topology and Computer Vision'"
          ]
        },
        "1998": {
          "salience_share": 1,
          "description": "Stasis. The concept of 'Persistence' began to form. How do features (holes) persist as you vary the resolution?",
          "key_manifestations": [
            "Frosini, P. (1992/1998). 'Measuring Shapes by Size Functions'",
            "Robins, V., et al. (1998). 'Computing Connectedness: An Exercise in Computational Topology'"
          ]
        },
        "2000": {
          "salience_share": 2,
          "description": "Persistent Homology Born (+1%). Edelsbrunner, Letscher, Zomorodian published 'Topological Persistence and Simplification.' This was the algorithm. It computes the barcode (lifespan of features). TDA was born as a computational discipline.",
          "key_manifestations": [
            "Edelsbrunner, H., Letscher, D., & Zomorodian, A. (2002). 'Topological Persistence and Simplification' (2000 FOCS)",
            "Zomorodian, A., & Carlsson, G. (2005). 'Computing Persistent Homology' (2004 work)"
          ]
        },
        "2002": {
          "salience_share": 2,
          "description": "Stability Theorem (+0%). Cohen-Steiner et al. proved that Persistence Diagrams are stable. Small noise in data $\\to$ small change in diagram. This made TDA robust for real data.",
          "key_manifestations": [
            "Cohen-Steiner, D., et al. (2007). 'Stability of Persistence Diagrams' (2005 work)",
            "Carlsson, G. (2009). 'Topology and Data'",
            "Ghrist, R. (2008). 'Barcodes: The Persistent Topology of Data'"
          ]
        },
        "2004": {
          "salience_share": 3,
          "description": "Mapper Algorithm (+1%). Singh, Memoli, Carlsson. 'Mapper' simplified high-dimensional data into a graph (Simplicial Complex) using filter functions. It allowed visualizing the 'Shape' of datasets (e.g., the diabetes dataset has 'flares'). This was the first 'User Friendly' TDA tool.",
          "key_manifestations": [
            "Singh, G., Memoli, F., & Carlsson, G. (2007). 'Topological Methods for the Analysis of High Dimensional Data Sets and 3D Object Recognition' (Mapper)",
            "Carlsson, G., et al. (2008). 'On the Local Behavior of Spaces of Natural Images' (Klein bottle topology of image patches)"
          ]
        },
        "2006": {
          "salience_share": 3,
          "description": "Applications in Biology (+0%). TDA found a home in analyzing viral evolution and protein folding. It detected loops in data that PCA missed. But in core AI, it was niche.",
          "key_manifestations": [
            "Yao, Y., et al. (2009). 'Topological Methods for Exploring Low-density States in Biomolecular Folding Pathways'",
            "De Silva, V., & Ghrist, R. (2007). 'Coverage in Sensor Networks via Persistent Homology'"
          ]
        },
        "2008": {
          "salience_share": 3,
          "description": "Stasis. TDA was computationally expensive ($O(N^3)$). It couldn't handle Big Data. 'Sparse TDA' methods began.",
          "key_manifestations": [
            "Sheehy, D. R. (2013). 'Linear-Size Approximations to the Vietoris-Rips Filtration' (2010 work)",
            "Milosavljevic, D., et al. (2011). 'Zigzag Persistent Homology and Real-valued Functions'"
          ]
        },
        "2010": {
          "salience_share": 3,
          "description": "Stasis. Deep Learning arrived. TDA was ignored. However, Ayasdi (startup) commercialized Mapper. It showed TDA had industrial value for anomaly detection.",
          "key_manifestations": [
            "Lum, P. Y., et al. (2013). 'Extracting Insights from the Shape of Complex Data using Topology' (Nature Scientific Reports)",
            "Carlsson, G. (2014). 'Topological Pattern Recognition for Point Cloud Data'"
          ]
        },
        "2012": {
          "salience_share": 3,
          "description": "Vectorization (+0%). To use TDA in ML, you need a vector. Persistence Landscapes (Bubenik) and Persistence Images (Adams) mapped the barcode to a vector compatible with SVMs/Neural Nets.",
          "key_manifestations": [
            "Bubenik, P. (2015). 'Statistical Topological Data Analysis using Persistence Landscapes' (2012 arXiv)",
            "Adams, H., et al. (2017). 'Persistence Images: A Stable Vector Representation of Persistent Homology'",
            "Reininghaus, J., et al. (2015). 'A Stable Multi-Scale Kernel for Topological Machine Learning'"
          ]
        },
        "2014": {
          "salience_share": 4,
          "description": "TDA for Neural Nets (+1%). Researchers began analyzing the topology of Neural Network weights and activations. 'Decision Boundaries' have topology. Naitzat et al. showed that neural nets operate by simplifying the topology of the data (breaking loops).",
          "key_manifestations": [
            "Naitzat, G., et al. (2020). 'Topology of Deep Neural Networks' (Roots in 2015-16)",
            "Bianchini, M., & Scarselli, F. (2014). 'On the Complexity of Neural Network Classifiers: A Comparison Between Shallow and Deep Architectures' (Betti number bounds)",
            "Guss, W. H., & Salakhutdinov, R. (2018). 'On Characterizing the Capacity of Neural Networks using Algebraic Topology'"
          ]
        },
        "2016": {
          "salience_share": 4,
          "description": "Topological Loss Functions (+0%). Can we differentiate through Persistence? 'Topology-Aware' loss functions. Force the output segmentation to have the correct topology (e.g., no holes in a blood vessel). This linked TDA to Backprop.",
          "key_manifestations": [
            "Chen, C., et al. (2019). 'A Topological Regularizer for Classifiers via Persistent Homology' (2017-18 work)",
            "Hu, X., et al. (2019). 'Topology-Preserving Deep Image Segmentation'",
            "Hofer, C., et al. (2017). 'Deep Learning with Topological Signatures'"
          ]
        },
        "2018": {
          "salience_share": 5,
          "description": "Graph TDA (+1%). Applying TDA to Graph Neural Networks (Cluster 12). 'PersLay' (Carriere). Using persistence to aggregate graph features. It added 'Global Structural' info to GNNs (which are local).",
          "key_manifestations": [
            "Carriere, M., et al. (2020). 'PersLay: A Neural Network Layer for Persistence Diagrams' (2019 work)",
            "Zhao, Q., et al. (2020). 'Persistence Fisher Kernel: A Riemannian Manifold Kernel for Persistence Diagrams'",
            "Hofer, C., et al. (2020). 'Graph Filtration Learning'"
          ]
        },
        "2020": {
          "salience_share": 5,
          "description": "Stasis. TDA remains a niche 'lens.' Used for analyzing the 'Manifold Hypothesis' in Deep Learning. Did the manifold flatten? Did the dimension collapse? (Cluster 8 intersection).",
          "key_manifestations": [
            "Birdal, T., et al. (2021). 'Intrinsic Dimension Estimation using Wasserstein Distance'",
            "Chazal, F., & Michel, B. (2021). 'An Introduction to Topological Data Analysis: Fundamental and Practical Aspects for Data Scientists'",
            "Rieck, B., et al. (2019). 'Neural Persistence: A Complexity Measure for Deep Neural Networks using Algebraic Topology'"
          ]
        },
        "2022": {
          "salience_share": 5,
          "description": "Topological Regularization in Generative Models (+0%). Ensuring GANs/Diffusion models cover the full 'Topology' of the distribution (avoiding mode collapse). If the data has a hole, the generated data should have a hole.",
          "key_manifestations": [
            "Khrulkov, V., & Oseledets, I. (2018/2022). 'Geometry Score: A Method for Comparing Generative Adversarial Networks'",
            "Barannikov, S., et al. (2022). 'Representation Topology Divergence: A Method for Comparing Neural Network Representations'",
            "Tropp, J. A., et al. (2023). 'Non-asymptotic Results for Geometric Graph Learning'"
          ]
        },
        "2024": {
          "salience_share": 5,
          "description": "Current trajectory is 'Integration with Geometry' (+0%). Merging with 'Geometric Deep Learning' (Cluster 12). TDA provides the 'Global' invariants, GNNs provide the 'Local' features. Used in 'AI for Math' (Knot theory).",
          "key_manifestations": [
            "Davies, A., et al. (2021/2024). 'Advancing Mathematics by Guiding Human Intuition with AI' (Knot theory discovery)",
            "Hensel, F., et al. (2021). 'A Survey of Topological Machine Learning Methods'",
            "Reference: 'The persistence of shape in high dimensions'"
          ]
        }
      }
    }
  }
} as const;

const foundationAIPreset: PresetConfig = {
  id: 'foundation_ai',
  name: 'Foundation-Model Trajectories (1990-2025)',
  description: 'Tracks the shifting dominance of major AI research paradigms leading to modern foundation models.',
  startYear: '1990',
  endYear: '2025',
  clusterStart: 1,
  clusterEnd: 20,
  periodicity: 2,
  context: 'AI Research History',
  model: 'o1-mini',
  cachedResult: foundationAIData
};

export default foundationAIPreset;
