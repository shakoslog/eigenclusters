import { PresetConfig } from './types';

const biologyData = {
  "metadata": {
    "period": "1800-2000",
    "interval": "5 years",
    "cluster_range": "Fixed Set (4)",
    "measurement": "relative cultural salience share (0-100)",
    "top_20_clusters": [
      "1_evolution [↗] (18.2%)",
      "2_bacteria [↗] (14.5%)",
      "3_the_cell [↗] (11.8%)",
      "4_dna [↗] (9.5%)"
    ]
  },
  "clusters": {
    "1_evolution": {
      "name": "evolution",
      "description": "The prototype captures the conceptual shift from static creationism to dynamic transmutation, natural selection, and common descent. It encompasses the theological crisis of the 19th century, the application of evolutionary logic to society (Social Darwinism), the Modern Synthesis with genetics, and the sociobiological debates of the late 20th century.",
      "trajectory": {
        "1800": {
          "salience_share": 3.0,
          "description": "Salience is low (Δw ≈ 0), characterized by the dominance of Natural Theology. William Paley's 'Watchmaker' analogy rules the cultural mindset, positioning biological complexity as proof of design rather than change. Evolution exists only as fringe speculation (Erasmus Darwin, Lamarck), lacking a mechanism.",
          "key_manifestations": [
            "Book: 'Natural Theology' by William Paley (1802)",
            "Book: 'Zoonomia' by Erasmus Darwin",
            "Concept: The Great Chain of Being",
            "Person: Jean-Baptiste Lamarck"
          ]
        },
        "1805": {
          "salience_share": 3.2,
          "description": "Minor drift (Δw = +0.2). Cuvier's work on extinction establishes that the biological world is not static, though he argues for fixity of species. . This introduces the concept of 'lost worlds,' a necessary precursor for evolutionary thought.",
          "key_manifestations": [
            "Concept: Catastrophism",
            "Person: Georges Cuvier",
            "Discovery: Mosasaurus fossils",
            "Debate: Fixity of Species"
          ]
        },
        "1810": {
          "salience_share": 4.5,
          "description": "Visible rise (Δw = +1.3). Lamarck's 'Philosophie Zoologique' (1809) proposes the first coherent theory of transmutation via acquired characteristics. While scientifically rejected by the establishment, it seeds the *idea* of change in the intellectual manifold.",
          "key_manifestations": [
            "Book: 'Philosophie Zoologique' by Lamarck",
            "Concept: Inheritance of Acquired Characteristics",
            "Concept: Transmutation",
            "Context: French Materialism"
          ]
        },
        "1815": {
          "salience_share": 4.0,
          "description": "Suppression (Δw = -0.5). Post-Napoleonic conservatism links transmutation to revolutionary chaos. The prototype retreats to radical medical schools in London. It survives as an underground materialist heresy.",
          "key_manifestations": [
            "Person: William Lawrence (suppressed lectures)",
            "Map: William Smith's Stratigraphy",
            "Context: The Reactionary Era",
            "Institution: Hunterian Museum"
          ]
        },
        "1820": {
          "salience_share": 4.3,
          "description": "Slow accumulation (Δw = +0.3). Geological discoveries (Ichthyosaurs) continue to expand 'Deep Time,' creating the temporal space required for evolution. The tension between biblical chronology and the fossil record grows.",
          "key_manifestations": [
            "Discovery: Ichthyosaurus (Mary Anning)",
            "Concept: Deep Time",
            "Person: Robert Grant",
            "Work: 'The Eruption of the Volcano' (Geological dynamism)"
          ]
        },
        "1825": {
          "salience_share": 4.8,
          "description": "Rising curiosity (Δw = +0.5). The identification of the first dinosaurs (Megalosaurus) captivates the public. . The existence of a 'Age of Reptiles' implies a succession of life forms, implicitly supporting a developmental narrative.",
          "key_manifestations": [
            "Discovery: Megalosaurus (Buckland)",
            "Discovery: Iguanodon (Mantell)",
            "Concept: The Age of Reptiles",
            "Institution: Geological Society of London"
          ]
        },
        "1830": {
          "salience_share": 6.5,
          "description": "Catalytic shift (Δw = +1.7). Lyell's 'Principles of Geology' establishes Uniformitarianism—small changes over vast time. This is the intellectual bedrock for Darwin. The prototype gains a rigorous temporal framework.",
          "key_manifestations": [
            "Book: 'Principles of Geology' by Charles Lyell",
            "Concept: Uniformitarianism",
            "Event: Voyage of the Beagle begins (1831)",
            "Debate: Catastrophism vs. Uniformitarianism"
          ]
        },
        "1835": {
          "salience_share": 7.0,
          "description": "Latent incubation (Δw = +0.5). Darwin observes finches and tortoises in the Galapagos. . The prototype is forming in private notebooks. Publicly, the 'Mystery of Mysteries' (origin of species) is acknowledged as the next great scientific frontier.",
          "key_manifestations": [
            "Event: Darwin in Galapagos",
            "Person: Adam Sedgwick",
            "Work: Bridgewater Treatises (Peak Natural Theology)",
            "Concept: Biogeography"
          ]
        },
        "1840": {
          "salience_share": 7.5,
          "description": "Steady pressure (Δw = +0.5). The Victorian 'Idea of Progress' aligns with biological development. Darwin formulates Natural Selection (1838) but holds back. The prototype drifts toward a 'law of development' in radical circles.",
          "key_manifestations": [
            "Manuscript: Darwin's Sketch of 1842",
            "Person: Richard Owen",
            "Concept: Homology",
            "Context: Chartism"
          ]
        },
        "1845": {
          "salience_share": 13.0,
          "description": "Public explosion (Δw = +5.5). 'Vestiges of the Natural History of Creation' (1844) becomes a sensation. It offers a sweeping, if inaccurate, evolutionary history. It proves the public is ready for a naturalistic origin story, despite scientific criticism.",
          "key_manifestations": [
            "Book: 'Vestiges of the Natural History of Creation' (Chambers)",
            "Poetry: Tennyson's 'In Memoriam' drafts",
            "Review: Sedgwick's attack on Vestiges",
            "Concept: Nebular Hypothesis linked to Biology"
          ]
        },
        "1850": {
          "salience_share": 12.0,
          "description": "Recoil and drift (Δw = -1.0). The establishment attacks 'Vestiges.' Herbert Spencer begins articulating 'Social Statics,' applying evolutionary logic to sociology ('survival of the fittest') before Darwin publishes. The prototype is politicized early.",
          "key_manifestations": [
            "Book: 'Social Statics' by Herbert Spencer",
            "Concept: Survival of the Fittest (Spencer's coinage)",
            "Person: T.H. Huxley",
            "Event: Great Exhibition (Industrial evolution)"
          ]
        },
        "1855": {
          "salience_share": 13.5,
          "description": "Anticipation (Δw = +1.5). Wallace publishes the 'Sarawak Law,' linking geography to species origins. The scientific inner circle (Darwin, Hooker, Lyell) prepares for the reveal. The prototype is a loaded gun waiting for a trigger.",
          "key_manifestations": [
            "Paper: 'On the Law Which Has Regulated the Introduction of New Species' (Wallace)",
            "Work: Darwin's Barnacle research",
            "Person: Alfred Russel Wallace",
            "Concept: Species divergence"
          ]
        },
        "1860": {
          "salience_share": 38.0,
          "description": "The Singularity (Δw = +24.5). 'On the Origin of Species' (1859) creates a definitive rupture. The prototype transforms from speculation to a mechanism: Natural Selection. . The Oxford Debate dramatizes the clash between Science and Faith.",
          "key_manifestations": [
            "Book: 'On the Origin of Species' by Charles Darwin",
            "Event: 1860 Oxford Evolution Debate",
            "Concept: Natural Selection",
            "Person: 'Darwin's Bulldog' (Huxley)"
          ]
        },
        "1865": {
          "salience_share": 40.0,
          "description": "Expansion to Man (Δw = +2.0). The implications for humanity are made explicit by Huxley and Lyell. The discovery of Archaeopteryx validates transitional forms. The prototype begins to dissolve the divine barrier around the human soul.",
          "key_manifestations": [
            "Book: 'Evidence as to Man's Place in Nature' (Huxley)",
            "Fossil: Archaeopteryx",
            "Concept: The Missing Link",
            "Book: 'Antiquity of Man' (Lyell)"
          ]
        },
        "1870": {
          "salience_share": 42.0,
          "description": "Peak Victorian saturation (Δw = +2.0). Darwin publishes 'The Descent of Man,' addressing human evolution and sexual selection. The prototype is now fully embedded in the cultural ether, influencing literature, politics, and anthropology.",
          "key_manifestations": [
            "Book: 'The Descent of Man' (Darwin)",
            "Concept: Sexual Selection",
            "Discovery: Cro-Magnon Man",
            "Movement: Scientific Naturalism"
          ]
        },
        "1875": {
          "salience_share": 39.0,
          "description": "Mechanism doubts (Δw = -3.0). While evolution is accepted, Natural Selection is questioned due to the lack of a heredity theory. Kelvin's physics suggests a young earth. The prototype fractures into Neo-Lamarckism and Orthogenesis.",
          "key_manifestations": [
            "Concept: The Eclipse of Darwinism",
            "Person: Lord Kelvin",
            "Work: 'History of Conflict Between Religion and Science'",
            "Theory: Pangenesis (Darwin's failed attempt)"
          ]
        },
        "1880": {
          "salience_share": 37.0,
          "description": "Institutionalization (Δw = -2.0). Darwin dies (1882), becoming a secular saint. The prototype enters a 'waiting period' for genetics. Weismann's Germ Plasm theory creates a hard barrier against Lamarckism, making evolution strictly deterministic.",
          "key_manifestations": [
            "Event: Darwin's Funeral in Westminster Abbey",
            "Concept: Weismann Barrier",
            "Concept: Eugenics (Galton)",
            "Book: 'Vegetable Mould and Earthworms'"
          ]
        },
        "1885": {
          "salience_share": 35.0,
          "description": "Hard Heredity (Δw = -2.0). The rejection of acquired characteristics darkens the prototype. It is now associated with fixed racial hierarchies and degeneration. Nietzsche's Übermensch reflects a philosophical digestion of evolutionary possibility.",
          "key_manifestations": [
            "Person: August Weismann",
            "Book: 'Thus Spoke Zarathustra' (Nietzsche)",
            "Movement: Social Darwinism",
            "Person: Francis Galton"
          ]
        },
        "1890": {
          "salience_share": 33.0,
          "description": "Fin de siècle anxiety (Δw = -2.0). The prototype manifests as fear of 'devolution' or degeneration. . Literature explores the collapse of civilization as an evolutionary inevitability.",
          "key_manifestations": [
            "Book: 'The Time Machine' (Wells)",
            "Book: 'Degeneration' (Nordau)",
            "Discovery: Java Man (Dubois)",
            "Concept: Recapitulation Theory"
          ]
        },
        "1895": {
          "salience_share": 31.0,
          "description": "Theoretical drift (Δw = -2.0). Mutationism arises as an alternative to selection. The prototype is widely accepted as history but contested as process. It awaits the rediscovery of Mendel.",
          "key_manifestations": [
            "Book: 'Materials for the Study of Variation' (Bateson)",
            "Concept: Mutationism",
            "Literature: 'The Island of Doctor Moreau'",
            "Person: Hugo de Vries"
          ]
        },
        "1900": {
          "salience_share": 36.0,
          "description": "Mendelian Shock (Δw = +5.0). The rediscovery of Mendel's laws triggers a conflict between 'Mendelians' (mutation) and 'Biometricians' (gradual selection). The prototype is temporarily torn between Genetics and Darwinism.",
          "key_manifestations": [
            "Event: Rediscovery of Mendel",
            "Concept: Mutation Theory",
            "Person: William Bateson",
            "Book: 'Interpretation of Dreams' (Evolutionary drives)"
          ]
        },
        "1905": {
          "salience_share": 34.0,
          "description": "Applied Eugenics (Δw = -2.0). The prototype is weaponized via state sterilization laws. It drifts from a biological theory to a tool of social engineering.",
          "key_manifestations": [
            "Law: Indiana Sterilization Law (1907)",
            "Institution: Eugenics Record Office",
            "Book: 'White Fang' (London)",
            "Person: T.H. Morgan"
          ]
        },
        "1910": {
          "salience_share": 33.0,
          "description": "Fundamentalist Reaction (Δw = -1.0). The publication of 'The Fundamentals' marks the organized religious backlash in the US. The prototype becomes a marker of cultural warfare.",
          "key_manifestations": [
            "Publication: 'The Fundamentals'",
            "Discovery: Piltdown Man (Hoax)",
            "Work: 'Creative Evolution' (Bergson)",
            "Concept: Chromosome Theory"
          ]
        },
        "1915": {
          "salience_share": 30.0,
          "description": "War-time decline (Δw = -3.0). WWI discredits the 'struggle for existence' narrative. The optimism of evolutionary progress collapses in the trenches.",
          "key_manifestations": [
            "Context: WWI",
            "Book: 'The Passing of the Great Race'",
            "Person: R.A. Fisher",
            "Concept: Social Evolutionism (Decline)"
          ]
        },
        "1920": {
          "salience_share": 38.0,
          "description": "Politicization (Δw = +8.0). Anti-evolution laws in the US South frame the prototype as the enemy of faith. It becomes the central symbol of the Modernist-Fundamentalist controversy.",
          "key_manifestations": [
            "Law: The Butler Act",
            "Book: 'The Outline of History' (Wells)",
            "Play: 'Back to Methuselah'",
            "Context: Roaring Twenties Modernism"
          ]
        },
        "1925": {
          "salience_share": 50.0,
          "description": "The Scopes Trial (Δw = +12.0). A massive media event puts the prototype on trial. . While Scopes loses, the defense wins the cultural war, associating anti-evolutionism with rural backwardness.",
          "key_manifestations": [
            "Event: Scopes Monkey Trial",
            "Person: Clarence Darrow",
            "Person: William Jennings Bryan",
            "Discovery: Taung Child (Australopithecus)"
          ]
        },
        "1930": {
          "salience_share": 40.0,
          "description": "The Modern Synthesis (Δw = -10.0). The media circus fades; the hard math begins. Fisher, Haldane, and Wright mathematically reconcile Mendel and Darwin. The prototype becomes rigorous and theoretically unified.",
          "key_manifestations": [
            "Book: 'The Genetical Theory of Natural Selection' (Fisher)",
            "Concept: Population Genetics",
            "Discovery: Peking Man",
            "Book: 'Brave New World' (Huxley)"
          ]
        },
        "1935": {
          "salience_share": 42.0,
          "description": "Totalitarian appropriation (Δw = +2.0). Nazi ideology adopts a distorted version of the prototype ('Racial Hygiene') as state doctrine. This is the cluster's darkest manifestation.",
          "key_manifestations": [
            "Event: Nuremberg Laws",
            "Book: 'Genetics and the Origin of Species' (Dobzhansky)",
            "Film: 'Triumph of the Will'",
            "Concept: The Synthesis"
          ]
        },
        "1940": {
          "salience_share": 35.0,
          "description": "Consolidation (Δw = -7.0). Mayr and Simpson complete the Synthesis, bringing systematics and paleontology into the fold. The biological theory is complete, but war suppresses public salience.",
          "key_manifestations": [
            "Book: 'Systematics and the Origin of Species' (Mayr)",
            "Book: 'Evolution: The Modern Synthesis' (J. Huxley)",
            "Person: George Gaylord Simpson",
            "Discovery: Lascaux Caves (Human mind)"
          ]
        },
        "1945": {
          "salience_share": 30.0,
          "description": "Moral cleansing (Δw = -5.0). Post-Holocaust, the prototype is stripped of its eugenic and racial applications. It retreats to 'pure biology' to distance itself from Nazi pseudoscience.",
          "key_manifestations": [
            "Statement: UNESCO Statement on Race",
            "Book: 'Tempo and Mode in Evolution'",
            "Context: Post-war Humanism",
            "Person: Teilhard de Chardin"
          ]
        },
        "1950": {
          "salience_share": 28.0,
          "description": "Molecular turn (Δw = -2.0). Biology pivots to DNA. Evolution is the background context, but biochemistry is the active frontier. The prototype awaits the integration of the double helix.",
          "key_manifestations": [
            "Encyclical: Humani Generis (Catholic acceptance)",
            "Concept: The New Systematics",
            "Work: 'The Meaning of Evolution'",
            "Context: Atomic Age"
          ]
        },
        "1955": {
          "salience_share": 32.0,
          "description": "Experimental proof (Δw = +4.0). Kettlewell's Peppered Moth experiments provide visual proof of natural selection. . The prototype becomes demonstrable in real-time.",
          "key_manifestations": [
            "Experiment: Kettlewell's Moths",
            "Book: 'The Phenomenon of Man' (Teilhard)",
            "Experiment: Miller-Urey (Chemical evolution)",
            "Play: 'Inherit the Wind'"
          ]
        },
        "1960": {
          "salience_share": 38.0,
          "description": "Resurgence (Δw = +6.0). The centennial of the 'Origin' and the Leakeys' discoveries in Africa reignite interest. The Molecular Clock hypothesis links protein changes to evolutionary time.",
          "key_manifestations": [
            "Discovery: Homo habilis (Leakeys)",
            "Film: 'Inherit the Wind'",
            "Concept: Molecular Clock",
            "Event: BSCS Textbooks (US education)"
          ]
        },
        "1965": {
          "salience_share": 40.0,
          "description": "Cosmic context (Δw = +2.0). '2001: A Space Odyssey' places evolution in a cosmic frame. Hamilton's Kin Selection provides a mathematical basis for altruism, expanding the prototype's explanatory power.",
          "key_manifestations": [
            "Film: '2001: A Space Odyssey'",
            "Concept: Kin Selection (Hamilton)",
            "Book: 'The Naked Ape'",
            "Discovery: Endosymbiotic Theory (Margulis)"
          ]
        },
        "1970": {
          "salience_share": 42.0,
          "description": "Internal debate (Δw = +2.0). Punctuated Equilibrium (Eldredge & Gould) challenges gradualism. The prototype becomes dynamic and contentious again within science.",
          "key_manifestations": [
            "Paper: 'Punctuated Equilibria'",
            "Book: 'Chance and Necessity' (Monod)",
            "Person: Stephen Jay Gould",
            "Concept: Gene-centered view"
          ]
        },
        "1975": {
          "salience_share": 55.0,
          "description": "Sociobiology Wars (Δw = +13.0). E.O. Wilson's 'Sociobiology' and Dawkins' 'The Selfish Gene' explode into the culture. . The prototype aggressively colonizes sociology and psychology, sparking fierce political resistance.",
          "key_manifestations": [
            "Book: 'Sociobiology: The New Synthesis' (Wilson)",
            "Book: 'The Selfish Gene' (Dawkins)",
            "Discovery: Lucy (Australopithecus)",
            "Debate: Sociobiology controversy"
          ]
        },
        "1980": {
          "salience_share": 52.0,
          "description": "Creationist pushback (Δw = -3.0). The Moral Majority revives the anti-evolution movement as 'Creation Science.' Carl Sagan's 'Cosmos' defends the evolutionary narrative for the masses.",
          "key_manifestations": [
            "TV: 'Cosmos' (Sagan)",
            "Court Case: McLean v. Arkansas",
            "Discovery: Iridium Layer (Asteroid extinction theory)",
            "Concept: Exaptation"
          ]
        },
        "1985": {
          "salience_share": 50.0,
          "description": "Molecular Phylogenetics (Δw = -2.0). DNA sequencing begins to rewrite the Tree of Life. Mitochondrial Eve traces human ancestry to a single African source. The prototype becomes a tool for genealogy.",
          "key_manifestations": [
            "Concept: Mitochondrial Eve",
            "Book: 'The Blind Watchmaker' (Dawkins)",
            "Book: 'Wonderful Life' (Gould)",
            "Tech: PCR (accelerating analysis)"
          ]
        },
        "1990": {
          "salience_share": 48.0,
          "description": "Evo-Psych mainstreaming (Δw = -2.0). Evolutionary Psychology enters pop culture, explaining dating and behavior. 'Jurassic Park' revives the dinosaur as a dynamic, evolved animal rather than a sluggish monster.",
          "key_manifestations": [
            "Film: 'Jurassic Park'",
            "Book: 'The Adapted Mind'",
            "Concept: Evolutionary Psychology",
            "Discovery: Hox Genes (Evo-Devo)"
          ]
        },
        "1995": {
          "salience_share": 47.0,
          "description": "Intelligent Design (Δw = -1.0). A sophisticated rebranding of creationism (Behe's 'Black Box') challenges the prototype's complexity. Simultaneously, Evo-Devo reveals the deep genetic unity of all life.",
          "key_manifestations": [
            "Book: 'Darwin's Black Box' (Behe)",
            "Concept: Irreducible Complexity",
            "Field: Evo-Devo",
            "Discovery: Feathered Dinosaurs (Sinosauropteryx)"
          ]
        },
        "2000": {
          "salience_share": 50.0,
          "description": "Genomic ratification (Δw = +3.0). The Human Genome Project draft is completed. It confirms shared ancestry with definitive data. The prototype is no longer just a theory of bones, but a measurable fact of code. Salience remains high as the 'Design' debate continues in US schools.",
          "key_manifestations": [
            "Event: Human Genome Project Draft",
            "Book: 'Genome' (Matt Ridley)",
            "Concept: The Third Chimpanzee",
            "Debate: Dover Trial preparation (ID vs Evolution)"
          ]
        }
      }
    },
    "2_bacteria": {
      "name": "bacteria",
      "description": "This prototype tracks the cultural understanding of the microscopic world, moving from 'animalcules' and Miasma theory to the Germ Theory of Disease, the antibiotic revolution, and finally the biotechnological utility of microbes. It represents the invisible agent of death, then the target of conquest, and finally a factory for production.",
      "trajectory": {
        "1800": {
          "salience_share": 2.0,
          "description": "Salience is minimal (Δw ≈ 0). Bacteria are known as 'animalcules' (Leeuwenhoek) but are considered curiosities, not agents of disease. The dominant medical prototype is Miasma (bad air) or Humoral imbalance. The microbe is invisible to the cultural eye.",
          "key_manifestations": [
            "Concept: Animalcules",
            "Theory: Miasma Theory",
            "Context: Pre-sanitation cities",
            "Tech: Simple microscopes"
          ]
        },
        "1805": {
          "salience_share": 2.0,
          "description": "Stasis (Δw = 0). No significant change. Disease is attributed to environmental constitution. The prototype is dormant.",
          "key_manifestations": [
            "Theory: Zymotic disease (fermentation)",
            "Context: Napoleonic field medicine",
            "Work: Classification of Infusoria",
            "Concept: Spontaneous Generation"
          ]
        },
        "1810": {
          "salience_share": 2.2,
          "description": "Canning innovation (Δw = +0.2). Appert develops food preservation (canning) to feed armies. He kills bacteria without knowing they exist. The *effect* of the prototype is managed, but the cause remains unknown.",
          "key_manifestations": [
            "Tech: Appertization (Canning)",
            "Context: Food preservation",
            "Theory: Vital force",
            "Person: Nicolas Appert"
          ]
        },
        "1815": {
          "salience_share": 2.0,
          "description": "Stasis (Δw = -0.2). Post-war return to traditional medical dogmas. The invisible world is ignored.",
          "key_manifestations": [
            "Context: Cholera pandemics (approaching)",
            "Theory: Anti-contagionism",
            "Institution: Royal College of Physicians",
            "Work: Ehrenberg's classification"
          ]
        },
        "1820": {
          "salience_share": 2.5,
          "description": "Optical improvement (Δw = +0.5). Improvements in microscope lenses (achromatic) begin to reveal the structure of microorganisms more clearly. They are still classified as chaotic zoophytes.",
          "key_manifestations": [
            "Tech: Achromatic lens",
            "Person: Christian Gottfried Ehrenberg",
            "Concept: Infusoria",
            "Context: Natural history of the invisible"
          ]
        },
        "1825": {
          "salience_share": 2.5,
          "description": "Stasis (Δw = 0). The connection to disease remains elusive.",
          "key_manifestations": [
            "Work: 'Die Infusionsthierchen' (Ehrenberg)",
            "Context: Public hygiene debates",
            "Theory: Atmospheric influence",
            "Event: First Cholera pandemic reaches Europe"
          ]
        },
        "1830": {
          "salience_share": 3.0,
          "description": "Sanitary awakening (Δw = +0.5). Cholera strikes Europe. While Miasma is blamed, the *idea* of specific contagion begins to gain traction in minority circles. The prototype is a 'ghost' haunting the water supply.",
          "key_manifestations": [
            "Event: Cholera Epidemic 1832",
            "Concept: Contagionism vs Miasma",
            "Person: Edwin Chadwick (Sanitation)",
            "Tech: Sand filtration"
          ]
        },
        "1835": {
          "salience_share": 3.5,
          "description": "Fungal precursors (Δw = +0.5). Agostino Bassi proves a silkworm disease is caused by a fungus. This is the first proof of a living agent of disease (Germ Theory precursor).",
          "key_manifestations": [
            "Discovery: Muscardine (Bassi)",
            "Concept: Parasitic theory of disease",
            "Work: 'Del Mal del Segno'",
            "Person: Agostino Bassi"
          ]
        },
        "1840": {
          "salience_share": 4.0,
          "description": "Fermentation debates (Δw = +0.5). The chemical nature of fermentation is debated. Is it vital or chemical? This debate sets the stage for Pasteur. Henle publishes postulates on contagion.",
          "key_manifestations": [
            "Person: Jacob Henle",
            "Paper: 'On Miasmata and Contagia'",
            "Debate: Liebig (chemical) vs Pasteur (biological)",
            "Concept: Yeast as organism"
          ]
        },
        "1845": {
          "salience_share": 5.0,
          "description": "The tragic hand (Δw = +1.0). Semmelweis discovers that handwashing reduces puerperal fever. He posits 'cadaverous particles' (bacteria). He is rejected, but the prototype is killing mothers in hospitals. .",
          "key_manifestations": [
            "Person: Ignaz Semmelweis",
            "Concept: Cadaverous particles",
            "Event: Vienna General Hospital mortality drop",
            "Context: Medical resistance"
          ]
        },
        "1850": {
          "salience_share": 6.0,
          "description": "Epidemiology (Δw = +1.0). John Snow traces Cholera to the Broad Street Pump. He visualizes the cluster of death, implying a particulate agent in the water. The prototype becomes a mapped entity.",
          "key_manifestations": [
            "Event: Broad Street Pump Cholera outbreak",
            "Map: John Snow's Ghost Map",
            "Concept: Water-borne transmission",
            "Person: John Snow"
          ]
        },
        "1855": {
          "salience_share": 8.0,
          "description": "Pasteur's dawn (Δw = +2.0). Louis Pasteur proves fermentation is caused by living organisms (bacteria/yeast). He links the microbe to the metabolic process. The prototype shifts from 'result of decay' to 'cause of change'.",
          "key_manifestations": [
            "Paper: 'Mémoire sur la fermentation lactique' (Pasteur)",
            "Concept: Vitalism in fermentation",
            "Person: Louis Pasteur",
            "Tech: Pasteurization (early concept)"
          ]
        },
        "1860": {
          "salience_share": 15.0,
          "description": "Death of Spontaneous Generation (Δw = +7.0). Pasteur's Swan Neck Flask experiment proves microbes come from air, not nothing. This is the foundational moment for bacteriology. Lister begins antiseptic surgery.",
          "key_manifestations": [
            "Experiment: Swan Neck Flask",
            "Person: Joseph Lister",
            "Tech: Carbolic Acid spray",
            "Concept: Antiseptic Surgery"
          ]
        },
        "1865": {
          "salience_share": 18.0,
          "description": "Germ Theory solidifies (Δw = +3.0). Lister's success proves the medical application. The prototype transforms the hospital from a house of death to a place of healing. The 'Germ' becomes the primary enemy of medicine.",
          "key_manifestations": [
            "Paper: 'Antiseptic Principle of the Practice of Surgery' (Lister)",
            "Work: Pasteur on Silkworm disease",
            "Concept: Germ Theory of Disease",
            "Context: Cholera pandemic 1866"
          ]
        },
        "1870": {
          "salience_share": 22.0,
          "description": "Visualization (Δw = +4.0). Staining techniques allow bacteria to be seen clearly. The prototype acquires a face: rods, spheres, spirals.",
          "key_manifestations": [
            "Tech: Aniline dyes",
            "Person: Ferdinand Cohn (classification)",
            "Work: 'Researches on Bacteria'",
            "Context: Franco-Prussian War (field hygiene)"
          ]
        },
        "1875": {
          "salience_share": 30.0,
          "description": "Koch's precision (Δw = +8.0). Robert Koch identifies the Anthrax bacillus. . He establishes Koch's Postulates: a rigorous method to link a specific microbe to a specific disease. The prototype becomes specific and causal.",
          "key_manifestations": [
            "Discovery: Anthrax life cycle",
            "Concept: Koch's Postulates",
            "Person: Robert Koch",
            "Tech: Agar plates"
          ]
        },
        "1880": {
          "salience_share": 40.0,
          "description": "The Golden Age (Δw = +10.0). Koch discovers the Tuberculosis bacillus, the 'Captain of Death.' Pasteur develops the Rabies vaccine. The prototype is now a conquered monster; science can identify and kill it.",
          "key_manifestations": [
            "Discovery: Mycobacterium tuberculosis",
            "Event: Pasteur's Anthrax vaccine trial at Pouilly-le-Fort",
            "Discovery: Cholera vibrio (Koch)",
            "Tech: Petri dish"
          ]
        },
        "1885": {
          "salience_share": 42.0,
          "description": "Global hunt (Δw = +2.0). The hunt for pathogens expands. Gram staining is invented, dividing the bacterial world in two. The prototype is systematized.",
          "key_manifestations": [
            "Tech: Gram Stain (Hans Christian Gram)",
            "Event: First Rabies vaccination (Joseph Meister)",
            "Institute: Pasteur Institute founded",
            "Discovery: E. coli (Escherich)"
          ]
        },
        "1890": {
          "salience_share": 45.0,
          "description": "Immunity and toxins (Δw = +3.0). Behring discovers antitoxins (Diphtheria). The prototype shifts from the bug itself to the chemical war between toxin and antitoxin. The 'Serum Era' begins.",
          "key_manifestations": [
            "Discovery: Diphtheria Antitoxin",
            "Person: Emil von Behring",
            "Person: Kitasato Shibasaburō",
            "Concept: Humoral Immunity"
          ]
        },
        "1895": {
          "salience_share": 42.0,
          "description": "Public hygiene (Δw = -3.0). The science is settled; the focus shifts to infrastructure. Water filtration, sewage systems, and milk pasteurization reduce the prototype's lethality in the West.",
          "key_manifestations": [
            "Tech: Municipal water chlorination",
            "Context: The Sanitary Movement",
            "Discovery: Plague bacillus (Yersin)",
            "Concept: Public Health"
          ]
        },
        "1900": {
          "salience_share": 40.0,
          "description": "Selective toxicity (Δw = -2.0). Ehrlich searches for the 'Magic Bullet'—a chemical that kills the microbe but not the host. The prototype is a target for chemotherapy.",
          "key_manifestations": [
            "Concept: Magic Bullet (Zauberkugel)",
            "Person: Paul Ehrlich",
            "Theory: Side-chain theory",
            "Context: Syphilis research"
          ]
        },
        "1905": {
          "salience_share": 38.0,
          "description": "Syphilis conquest (Δw = -2.0). The discovery of Treponema pallidum. The prototype is increasingly associated with venereal disease and moral hygiene.",
          "key_manifestations": [
            "Discovery: Treponema pallidum",
            "Person: Fritz Schaudinn",
            "Discovery: Whooping cough bacteria",
            "Context: Social Hygiene Movement"
          ]
        },
        "1910": {
          "salience_share": 42.0,
          "description": "Salvarsan (Δw = +4.0). Ehrlich develops Salvarsan 606, the first effective synthetic antimicrobial (for syphilis). The prototype is vulnerable to chemistry.",
          "key_manifestations": [
            "Drug: Salvarsan",
            "Concept: Chemotherapy",
            "Discovery: Typhus transmission",
            "Person: Sahachiro Hata"
          ]
        },
        "1915": {
          "salience_share": 40.0,
          "description": "Bacteriophage (Δw = -2.0). D'Herelle discovers viruses that eat bacteria. The prototype has its own predators. WWI drives research into gangrene and wound infection.",
          "key_manifestations": [
            "Discovery: Bacteriophage",
            "Person: Felix d'Herelle",
            "Context: Gas Gangrene",
            "Tech: Carrel-Dakin solution"
          ]
        },
        "1920": {
          "salience_share": 38.0,
          "description": "Transformation (Δw = -2.0). Griffith's experiment suggests bacteria can transfer traits (the 'transforming principle'). This hints at DNA, but for now, it shows the prototype is genetically fluid.",
          "key_manifestations": [
            "Experiment: Griffith's Experiment (1928)",
            "Concept: Bacterial Transformation",
            "Book: 'Microbe Hunters' (Paul de Kruif - pop culture)",
            "Context: Tuberculosis sanitariums"
          ]
        },
        "1925": {
          "salience_share": 35.0,
          "description": "The lull (Δw = -3.0). Bacteriology is established routine. The focus waits for a better weapon than Salvarsan.",
          "key_manifestations": [
            "Work: Fleming's lysozyme",
            "Context: BCG Vaccine introduction",
            "Discovery: Tetanus toxoid",
            "Institution: Rockefeller Institute"
          ]
        },
        "1930": {
          "salience_share": 45.0,
          "description": "Sulfa dawn (Δw = +10.0). Domagk discovers Prontosil (Sulfa drugs). Finally, a pill that cures systemic bacterial infection. The prototype is losing the war.",
          "key_manifestations": [
            "Drug: Prontosil",
            "Person: Gerhard Domagk",
            "Concept: Sulfonamides",
            "Event: Saving of FDR Jr."
          ]
        },
        "1935": {
          "salience_share": 48.0,
          "description": "The Miracle Mold (Δw = +3.0). Fleming's 1928 discovery of Penicillin is revived by Florey and Chain. They work on mass production. The prototype is about to face its apocalypse.",
          "key_manifestations": [
            "Paper: Florey/Chain on Penicillin",
            "Person: Alexander Fleming",
            "Tech: Fermentation tanks",
            "Concept: Antibiosis"
          ]
        },
        "1940": {
          "salience_share": 55.0,
          "description": "Antibiotic Era (Δw = +7.0). Penicillin is mass-produced for WWII. . It is a miracle drug. The prototype shifts from 'mortal threat' to 'manageable nuisance.' Venereal disease and pneumonia are curbed.",
          "key_manifestations": [
            "Drug: Penicillin",
            "Event: Coconut Grove Fire (Penicillin use)",
            "Poster: 'Penicillin Cures Gonorrhea'",
            "Discovery: Streptomycin (Waksman)"
          ]
        },
        "1945": {
          "salience_share": 52.0,
          "description": "Victory lap (Δw = -3.0). The Nobel Prize for Penicillin. Tuberculosis is treated with Streptomycin. The cultural narrative is that the age of infectious disease is ending.",
          "key_manifestations": [
            "Event: Nobel Prize for Fleming/Florey/Chain",
            "Drug: Streptomycin (TB cure)",
            "Concept: Broad-spectrum antibiotics",
            "Context: Post-war optimism"
          ]
        },
        "1950": {
          "salience_share": 45.0,
          "description": "Resistance emerges (Δw = -7.0). Bacteria evolve resistance. The prototype shows resilience. Simultaneously, Lederberg discovers bacterial conjugation (sex), proving they share genes.",
          "key_manifestations": [
            "Concept: Antibiotic Resistance",
            "Discovery: Bacterial Conjugation (Lederberg)",
            "Discovery: Plasmids",
            "Context: Hospital 'Staph' outbreaks"
          ]
        },
        "1955": {
          "salience_share": 40.0,
          "description": "Tool of Genetics (Δw = -5.0). The prototype becomes a lab rat. E. coli is the workhorse for understanding DNA (Jacob & Monod). The focus shifts from the germ as pathogen to the germ as model organism.",
          "key_manifestations": [
            "Organism: E. coli K-12",
            "Concept: Lac Operon",
            "Person: Jacob and Monod",
            "Tech: Replica plating"
          ]
        },
        "1960": {
          "salience_share": 38.0,
          "description": "Regulation (Δw = -2.0). The Lac Operon model explains gene regulation. The prototype reveals the logic of life. Culturally, antibiotics are taken for granted.",
          "key_manifestations": [
            "Concept: Gene Regulation",
            "Paper: 'Genetic Regulatory Mechanisms'",
            "Context: The Pill (social hygiene shift)",
            "Discovery: Mycoplasma"
          ]
        },
        "1965": {
          "salience_share": 35.0,
          "description": "Symbiosis (Δw = -3.0). Margulis proposes endosymbiosis: mitochondria were once bacteria. The prototype is internalized; we *are* part bacteria.",
          "key_manifestations": [
            "Theory: Endosymbiotic Theory",
            "Person: Lynn Margulis",
            "Paper: 'On the Origin of Mitosing Cells'",
            "Concept: Mitochondria as bacteria"
          ]
        },
        "1970": {
          "salience_share": 45.0,
          "description": "Recombinant revolution (Δw = +10.0). Cohen and Boyer invent recombinant DNA technology using plasmids. . The prototype transforms into a factory. Bacteria can now make human insulin.",
          "key_manifestations": [
            "Tech: Recombinant DNA",
            "Person: Cohen and Boyer",
            "Event: Asilomar Conference (Safety)",
            "Concept: GMO"
          ]
        },
        "1975": {
          "salience_share": 50.0,
          "description": "Biotech boom (Δw = +5.0). Genentech is founded. The prototype is an economic engine. It produces drugs, eats oil spills, and serves as the engine of the new biotechnology industry.",
          "key_manifestations": [
            "Company: Genentech",
            "Product: Synthetic Human Insulin",
            "Concept: Superbug (Oil eating)",
            "Court Case: Diamond v. Chakrabarty (Patenting life)"
          ]
        },
        "1980": {
          "salience_share": 48.0,
          "description": "Pathogen return (Δw = -2.0). Legionnaires' disease and Toxic Shock Syndrome remind the public that the prototype is still dangerous. Lyme disease emerges.",
          "key_manifestations": [
            "Disease: Legionnaires' disease",
            "Disease: Toxic Shock Syndrome",
            "Discovery: Helicobacter pylori (Ulcers)",
            "Context: HIV (Viral, but highlights infection)"
          ]
        },
        "1985": {
          "salience_share": 45.0,
          "description": "PCR and Extremophiles (Δw = -3.0). Thermus aquaticus (Taq) from hot springs enables PCR. The prototype's diversity powers the genomic age. It thrives in boiling water.",
          "key_manifestations": [
            "Organism: Thermus aquaticus",
            "Tech: PCR (Polymerase Chain Reaction)",
            "Person: Kary Mullis",
            "Concept: Extremophiles"
          ]
        },
        "1990": {
          "salience_share": 50.0,
          "description": "The Superbug (Δw = +5.0). MRSA and VRSA appear. The 'post-antibiotic era' is feared. The prototype evolves faster than pharma can invent. .",
          "key_manifestations": [
            "Concept: MRSA",
            "Book: 'The Coming Plague' (Garrett)",
            "Context: MDR-TB",
            "Concept: Vancomycin resistance"
          ]
        },
        "1995": {
          "salience_share": 48.0,
          "description": "Genomics (Δw = -2.0). The first complete bacterial genome (Haemophilus influenzae) is sequenced. The prototype is fully decoded.",
          "key_manifestations": [
            "Discovery: First bacterial genome sequenced",
            "Person: Craig Venter",
            "Organism: Haemophilus influenzae",
            "Tech: Shotgun sequencing"
          ]
        },
        "2000": {
          "salience_share": 52.0,
          "description": "The Microbiome (Δw = +4.0). The concept shifts from 'germs' to 'flora.' We realize bacteria are essential for health (gut microbiome). The prototype becomes a partner.",
          "key_manifestations": [
            "Concept: The Microbiome",
            "Paper: 'The microbial world within'",
            "Product: Probiotics",
            "Context: Hygiene Hypothesis"
          ]
        }
      }
    },
    "3_the_cell": {
      "name": "the cell",
      "description": "The prototype represents the fundamental unit of life. It tracks the journey from a cork structure to the 'atom' of biology, then to a chemical factory, and finally to a programmable entity (stem cells). It is the container of the self.",
      "trajectory": {
        "1800": {
          "salience_share": 3.0,
          "description": "Salience is low (Δw ≈ 0). The 'cell' (named by Hooke in 1665) is a known structural curiosity in plants but has no theoretical weight. Tissues are viewed as fibers or globules. The prototype is a visual artifact, not a biological principle.",
          "key_manifestations": [
            "Work: 'Micrographia' (Hooke - legacy)",
            "Concept: Globular theory",
            "Person: Xavier Bichat (Tissue theory without cells)",
            "Tech: Simple Microscope"
          ]
        },
        "1805": {
          "salience_share": 3.0,
          "description": "Naturphilosophie influence (Δw = 0). Oken proposes 'Urschleim' (primordial slime) and vesicles as the basis of life. The prototype is mystical rather than structural.",
          "key_manifestations": [
            "Concept: Urschleim",
            "Person: Lorenz Oken",
            "Work: 'Generation'",
            "Context: Romantic biology"
          ]
        },
        "1810": {
          "salience_share": 3.2,
          "description": "Tissue focus (Δw = +0.2). Bichat's histology dominates. Life is seen in tissues, not cells. The prototype is obscured by the study of membranes and fibers.",
          "key_manifestations": [
            "Person: Xavier Bichat",
            "Concept: 21 Tissues",
            "Work: 'General Anatomy'",
            "Tech: Improved tissue preparation"
          ]
        },
        "1815": {
          "salience_share": 3.0,
          "description": "Stasis (Δw = -0.2). No significant advances. The optical limits of microscopes prevent the resolution of internal cell structures.",
          "key_manifestations": [
            "Tech: Compound microscope issues (chromatic aberration)",
            "Context: Post-Napoleonic science",
            "Concept: Globulism",
            "Person: Milne-Edwards"
          ]
        },
        "1820": {
          "salience_share": 3.5,
          "description": "Optical breakthrough (Δw = +0.5). Amici and others improve lenses. The 'globules' are beginning to look like distinct units. The prototype is sharpening.",
          "key_manifestations": [
            "Tech: Achromatic objectives",
            "Person: Giovanni Battista Amici",
            "Observation: Plant cell walls",
            "Concept: The elementary unit"
          ]
        },
        "1825": {
          "salience_share": 3.8,
          "description": "Pre-nucleus (Δw = +0.3). Purkinje observes the 'germinal vesicle' (nucleus) in bird eggs. The prototype gains an internal center.",
          "key_manifestations": [
            "Person: Jan Evangelista Purkinje",
            "Discovery: Germinal vesicle",
            "Concept: Protoplasm (early ideas)",
            "Context: Embryology"
          ]
        },
        "1830": {
          "salience_share": 5.0,
          "description": "The Nucleus (Δw = +1.2). Robert Brown names the 'nucleus' in plant cells. He identifies it as a constant feature. The prototype now has a command center.",
          "key_manifestations": [
            "Discovery: Cell Nucleus (Brown)",
            "Person: Robert Brown",
            "Paper: 'Observations on the Organs of Fecundation in Orchids'",
            "Concept: Cytoplasmic streaming"
          ]
        },
        "1835": {
          "salience_share": 6.0,
          "description": "Division observed (Δw = +1.0). Dumortier observes cell division in algae. The static box is seen to replicate. The prototype becomes dynamic.",
          "key_manifestations": [
            "Observation: Cell division (Binary fission)",
            "Person: Barthelemy Dumortier",
            "Person: Hugo von Mohl",
            "Concept: Cell plate formation"
          ]
        },
        "1840": {
          "salience_share": 12.0,
          "description": "Cell Theory (Δw = +6.0). Schleiden (plants) and Schwann (animals) propose the Cell Theory: all living things are made of cells. . The prototype becomes the universal atom of life.",
          "key_manifestations": [
            "Theory: Cell Theory (1839)",
            "Person: Theodor Schwann",
            "Person: Matthias Schleiden",
            "Statement: 'All living things are composed of cells and cell products'"
          ]
        },
        "1845": {
          "salience_share": 13.0,
          "description": "Protoplasm (Δw = +1.0). Dujardin and von Mohl focus on the 'slime' inside (sarcode/protoplasm) rather than the wall. The prototype shifts from the 'box' to the 'contents.'",
          "key_manifestations": [
            "Concept: Protoplasm",
            "Person: Hugo von Mohl",
            "Term: Sarcode",
            "Context: Vitalism debate"
          ]
        },
        "1850": {
          "salience_share": 14.0,
          "description": "Embryological link (Δw = +1.0). Remak proves that cells come from division of pre-existing cells, rejecting spontaneous generation of cells. The prototype becomes a lineage.",
          "key_manifestations": [
            "Person: Robert Remak",
            "Observation: Frog egg cleavage",
            "Concept: Cell division as exclusive origin",
            "Context: Rejection of free cell formation"
          ]
        },
        "1855": {
          "salience_share": 18.0,
          "description": "Cellular Pathology (Δw = +4.0). Virchow declares 'Omnis cellula e cellula' (All cells from cells). He locates disease *within* the cell. The prototype becomes the site of illness.",
          "key_manifestations": [
            "Phrase: 'Omnis cellula e cellula'",
            "Book: 'Cellular Pathology' (Virchow)",
            "Concept: The Republic of Cells",
            "Person: Rudolf Virchow"
          ]
        },
        "1860": {
          "salience_share": 19.0,
          "description": "Consolidation (Δw = +1.0). The cell is accepted as the physiological unit. Max Schultze defines the cell as a 'lump of protoplasm with a nucleus.'",
          "key_manifestations": [
            "Definition: Schultze's Cell definition",
            "Person: Max Schultze",
            "Context: The end of the cell wall focus",
            "Tech: Histological staining beginnings"
          ]
        },
        "1865": {
          "salience_share": 20.0,
          "description": "Staining (Δw = +1.0). New dyes (carmine, hematoxylin) allow internal structures to be visualized. The prototype gains internal complexity.",
          "key_manifestations": [
            "Tech: Carmine staining",
            "Person: Friedrich Miescher (isolating nuclei)",
            "Concept: Cytoplasm vs Nucleoplasm",
            "Context: Experimental physiology"
          ]
        },
        "1870": {
          "salience_share": 22.0,
          "description": "Fertilization (Δw = +2.0). Review of the egg and sperm as cells. The realization that a new organism begins with the fusion of two cells. The prototype is the vehicle of heredity.",
          "key_manifestations": [
            "Discovery: Sperm entry into egg",
            "Person: Oscar Hertwig",
            "Concept: Fertilization",
            "Person: Eduard Strasburger"
          ]
        },
        "1875": {
          "salience_share": 25.0,
          "description": "Mitosis (Δw = +3.0). Flemming observes 'chromatin' threads splitting during division. . He coins 'mitosis.' The prototype reveals its replication mechanism.",
          "key_manifestations": [
            "Process: Mitosis",
            "Person: Walther Flemming",
            "Concept: Chromatin",
            "Book: 'Cell Substance, Nucleus and Cell Division'"
          ]
        },
        "1880": {
          "salience_share": 28.0,
          "description": "Plastids and Chloroplasts (Δw = +3.0). Schimper identifies chloroplasts and their division. The prototype is seen to contain autonomous organs (organelles).",
          "key_manifestations": [
            "Discovery: Chloroplast continuity",
            "Person: Andreas Schimper",
            "Concept: Plastids",
            "Context: Plant physiology"
          ]
        },
        "1885": {
          "salience_share": 30.0,
          "description": "Chromosomes (Δw = +2.0). Waldeyer coins the term 'chromosome.' Rabl proposes they persist between divisions. The prototype's information storage is identified structurally.",
          "key_manifestations": [
            "Term: Chromosome",
            "Person: Heinrich Waldeyer",
            "Person: Carl Rabl",
            "Concept: Chromosome individuality"
          ]
        },
        "1890": {
          "salience_share": 32.0,
          "description": "The Neuron (Δw = +2.0). Ramon y Cajal proves the nervous system is made of distinct cells (Neuron Doctrine), not a continuous net. The prototype conquers the brain.",
          "key_manifestations": [
            "Concept: Neuron Doctrine",
            "Person: Santiago Ramon y Cajal",
            "Tech: Golgi Stain",
            "Person: Camillo Golgi"
          ]
        },
        "1895": {
          "salience_share": 34.0,
          "description": "Organelles (Δw = +2.0). Discovery of the Golgi apparatus and mitochondria (bioblasts). The prototype is a machine with parts.",
          "key_manifestations": [
            "Discovery: Golgi Apparatus",
            "Discovery: Mitochondria (Altmann)",
            "Theory: Bioblasts",
            "Person: Camillo Golgi"
          ]
        },
        "1900": {
          "salience_share": 35.0,
          "description": "Cytogenetics (Δw = +1.0). The link between Mendel's laws and chromosomes (Sutton-Boveri). The cell is the physical location of genetics.",
          "key_manifestations": [
            "Theory: Sutton-Boveri Hypothesis",
            "Person: Walter Sutton",
            "Person: Theodor Boveri",
            "Context: Rediscovery of Mendel"
          ]
        },
        "1905": {
          "salience_share": 36.0,
          "description": "Colloidal nature (Δw = +1.0). View of the cytoplasm as a colloidal gel. Physical chemistry enters the cell. The prototype is a chemical system.",
          "key_manifestations": [
            "Concept: Colloidal chemistry",
            "Person: Jacques Loeb",
            "Work: 'The Dynamics of Living Matter'",
            "Context: Artificial Parthenogenesis"
          ]
        },
        "1910": {
          "salience_share": 35.0,
          "description": "Tissue Culture (Δw = -1.0). Ross Harrison invents tissue culture. Cells can live outside the body. The prototype becomes an independent entity.",
          "key_manifestations": [
            "Tech: Tissue Culture",
            "Person: Ross Granville Harrison",
            "Person: Alexis Carrel",
            "Concept: The Immortal Cell"
          ]
        },
        "1915": {
          "salience_share": 34.0,
          "description": "War Medicine (Δw = -1.0). Focus on wound healing and blood cells. The prototype is functional.",
          "key_manifestations": [
            "Context: WWI hematology",
            "Concept: Phagocytosis (Metchnikoff)",
            "Person: Elie Metchnikoff",
            "Cell: Macrophage"
          ]
        },
        "1920": {
          "salience_share": 36.0,
          "description": "Metabolism (Δw = +2.0). Warburg studies cell respiration (cancer cells). The prototype is an energy converter.",
          "key_manifestations": [
            "Concept: Warburg Effect",
            "Person: Otto Warburg",
            "Tech: Manometer",
            "Concept: Cellular Respiration"
          ]
        },
        "1925": {
          "salience_share": 35.0,
          "description": "Feulgen Stain (Δw = -1.0). Feulgen stain allows specific DNA visualization. The prototype's nucleus is chemically distinct.",
          "key_manifestations": [
            "Tech: Feulgen Stain",
            "Concept: DNA localization",
            "Person: Robert Feulgen",
            "Context: Cyto-chemistry"
          ]
        },
        "1930": {
          "salience_share": 38.0,
          "description": "Micro-manipulation (Δw = +3.0). Scientists can poke and prod cells. The prototype is a tangible object.",
          "key_manifestations": [
            "Tech: Micromanipulator",
            "Person: Robert Chambers",
            "Experiment: Nucleus removal",
            "Concept: Physical properties of protoplasm"
          ]
        },
        "1935": {
          "salience_share": 40.0,
          "description": "The Krebs Cycle (Δw = +2.0). Understanding the chemical cycle of energy within the cell. The prototype is a metabolic engine.",
          "key_manifestations": [
            "Discovery: Citric Acid Cycle",
            "Person: Hans Krebs",
            "Concept: ATP (discovered 1929)",
            "Context: Biochemistry rise"
          ]
        },
        "1940": {
          "salience_share": 42.0,
          "description": "One Gene One Enzyme (Δw = +2.0). Beadle and Tatum link genes to cellular enzymes. The prototype is a factory controlled by blueprints.",
          "key_manifestations": [
            "Hypothesis: One Gene One Enzyme",
            "Organism: Neurospora crassa",
            "Person: Beadle and Tatum",
            "Context: Biochemical genetics"
          ]
        },
        "1945": {
          "salience_share": 55.0,
          "description": "The Electron Microscope (Δw = +13.0). The first EM images of cells reveal a new world of ultrastructure. . The prototype explodes in complexity: ER, ribosomes, virus particles are seen.",
          "key_manifestations": [
            "Tech: Electron Microscope (Porter, Claude)",
            "Discovery: Endoplasmic Reticulum",
            "Person: Albert Claude",
            "Image: The first look at a virus inside a cell"
          ]
        },
        "1950": {
          "salience_share": 52.0,
          "description": "Ultrastructure mapping (Δw = -3.0). Palade describes mitochondria structure and ribosomes. The prototype is mapped like a city.",
          "key_manifestations": [
            "Person: George Palade",
            "Discovery: Ribosomes (Palade granules)",
            "Concept: Cristae",
            "Tech: Thin sectioning"
          ]
        },
        "1955": {
          "salience_share": 50.0,
          "description": "Lysosomes (Δw = -2.0). De Duve discovers the lysosome (the recycling center). The prototype has a waste management system.",
          "key_manifestations": [
            "Discovery: Lysosome",
            "Person: Christian de Duve",
            "Concept: Autophagy (early concept)",
            "Tech: Centrifugation fractionation"
          ]
        },
        "1960": {
          "salience_share": 48.0,
          "description": "Membrane theory (Δw = -2.0). The fluid mosaic model is approaching. Understanding the cell surface. The prototype has a dynamic border.",
          "key_manifestations": [
            "Concept: Unit Membrane",
            "Person: J.D. Robertson",
            "Discovery: Sodium-Potassium Pump",
            "Context: Transport physiology"
          ]
        },
        "1965": {
          "salience_share": 45.0,
          "description": "Endosymbiosis (Δw = -3.0). Margulis argues the cell is a colony of bacteria. The prototype is a chimera.",
          "key_manifestations": [
            "Theory: Endosymbiotic Theory",
            "Person: Lynn Margulis",
            "Concept: Mitochondria origin",
            "Context: Evolutionary cell biology"
          ]
        },
        "1970": {
          "salience_share": 48.0,
          "description": "The Cell Cycle (Δw = +3.0). Identification of Cyclins and CDKs. The prototype's clock is discovered. Understanding cancer as a cell cycle disease.",
          "key_manifestations": [
            "Discovery: Cyclins",
            "Person: Hartwell, Hunt, Nurse",
            "Concept: Checkpoints",
            "Context: Cancer research"
          ]
        },
        "1975": {
          "salience_share": 50.0,
          "description": "Monoclonal Antibodies (Δw = +2.0). Kohler and Milstein fuse cells to make hybridomas. The prototype is an industrial tool.",
          "key_manifestations": [
            "Tech: Hybridoma technology",
            "Concept: Monoclonal Antibodies",
            "Person: Kohler and Milstein",
            "Context: Immunology"
          ]
        },
        "1980": {
          "salience_share": 48.0,
          "description": "Apoptosis (Δw = -2.0). The discovery of programmed cell death (Horvitz). The prototype has a suicide switch.",
          "key_manifestations": [
            "Concept: Apoptosis",
            "Organism: C. elegans",
            "Person: Robert Horvitz",
            "Term: Programmed Cell Death"
          ]
        },
        "1985": {
          "salience_share": 46.0,
          "description": "Signal Transduction (Δw = -2.0). Understanding how cells talk. G-proteins, kinases. The prototype is a communication node.",
          "key_manifestations": [
            "Concept: Signal Transduction",
            "Discovery: G-proteins",
            "Person: Gilman and Rodbell",
            "Context: Pharmacology"
          ]
        },
        "1990": {
          "salience_share": 45.0,
          "description": "Stem Cells (Δw = -1.0). Isolation of human embryonic stem cells (Thomson, late 90s). The prototype is a potentiality. The 'master cell' concept rises.",
          "key_manifestations": [
            "Concept: Embryonic Stem Cells",
            "Person: Jamie Thomson (1998)",
            "Context: Regenerative medicine",
            "Tech: IVF"
          ]
        },
        "1995": {
          "salience_share": 60.0,
          "description": "Cloning (Δw = +15.0). Dolly the Sheep is cloned from a somatic cell. The prototype proves that adult cells retain the full potential of life. Biological identity is pliable.",
          "key_manifestations": [
            "Event: Birth of Dolly",
            "Person: Ian Wilmut",
            "Concept: Somatic Cell Nuclear Transfer",
            "Context: Cloning ethics"
          ]
        },
        "2000": {
          "salience_share": 55.0,
          "description": "The Stem Cell Debate (Δw = -5.0). The prototype becomes a political object. Bush restricts funding. The cell is the center of a moral storm regarding the definition of life.",
          "key_manifestations": [
            "Policy: US Stem Cell Ban",
            "Concept: Pluripotency",
            "Context: Bioethics",
            "Event: First draft of Human Genome (cellular context)"
          ]
        }
      }
    },
    "4_dna": {
      "name": "DNA",
      "description": "The prototype of the 'Code of Life.' It tracks the history of the molecule from an obscure chemical in pus (nuclein) to the structural realization of the Double Helix, and finally to the informational database of the Genome. It represents the shift from biology as observation to biology as information science.",
      "trajectory": {
        "1800": {
          "salience_share": 1.0,
          "description": "Non-existent (Δw = 0). The material basis of heredity is completely unknown. Theories involve 'gemmules' or blood mixing.",
          "key_manifestations": [
            "Theory: Blending Inheritance",
            "Concept: Blood as heredity",
            "Context: Pre-scientific breeding",
            "Person: Erasmus Darwin"
          ]
        },
        "1805": {
          "salience_share": 1.0,
          "description": "Stasis (Δw = 0). No change.",
          "key_manifestations": [
            "Concept: Heredity as mystery",
            "Context: Napoleonic wars",
            "Work: Lamarck's ideas",
            "Theory: Epigenesis"
          ]
        },
        "1810": {
          "salience_share": 1.0,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Context: Natural History",
            "Theory: Preformationism (waning)",
            "Concept: Homunculus",
            "Work: Meckel's anatomy"
          ]
        },
        "1815": {
          "salience_share": 1.0,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Context: Romantic Science",
            "Theory: Vital Force",
            "Person: Goethe",
            "Concept: Type"
          ]
        },
        "1820": {
          "salience_share": 1.0,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Context: Embryology",
            "Person: Von Baer",
            "Theory: Germ layers",
            "Concept: Development"
          ]
        },
        "1825": {
          "salience_share": 1.0,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Concept: The Egg",
            "Person: Purkinje",
            "Context: Microscopy improvements",
            "Work: Comparative anatomy"
          ]
        },
        "1830": {
          "salience_share": 1.2,
          "description": "Nucleus identified (Δw = +0.2). Brown sees the nucleus. This is the future home of the prototype, though its function is unknown.",
          "key_manifestations": [
            "Discovery: Nucleus",
            "Person: Robert Brown",
            "Context: Plant anatomy",
            "Concept: Cell center"
          ]
        },
        "1835": {
          "salience_share": 1.2,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Context: Cell theory forming",
            "Person: Hugo von Mohl",
            "Concept: Cell division",
            "Work: 'Uber die Vermehrung'"
          ]
        },
        "1840": {
          "salience_share": 1.5,
          "description": "Cellular location (Δw = +0.3). Cell theory establishes the cell as the unit. The prototype is implicitly contained.",
          "key_manifestations": [
            "Theory: Cell Theory",
            "Person: Schleiden",
            "Person: Schwann",
            "Concept: Cytoblast"
          ]
        },
        "1845": {
          "salience_share": 1.5,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Context: Protoplasm theory",
            "Person: Dujardin",
            "Concept: Material of life",
            "Work: 'Histoire naturelle'"
          ]
        },
        "1850": {
          "salience_share": 1.5,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Context: Generation debates",
            "Person: Remak",
            "Concept: Cell lineage",
            "Theory: Omnis cellula e cellula"
          ]
        },
        "1855": {
          "salience_share": 1.5,
          "description": "Stasis (Δw = 0). Mendel is experimenting, but unknown.",
          "key_manifestations": [
            "Person: Gregor Mendel (starting work)",
            "Context: Hybridization",
            "Plant: Peas",
            "Concept: Factors (latent)"
          ]
        },
        "1860": {
          "salience_share": 1.5,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Book: Origin of Species (no heredity mechanism)",
            "Concept: Gemmules (Darwin)",
            "Context: The missing science",
            "Person: Huxley"
          ]
        },
        "1865": {
          "salience_share": 2.0,
          "description": "Mendel's Laws (Δw = +0.5). Mendel publishes, but is ignored. He describes 'particulate inheritance.' The logic of the prototype is found, but the molecule is not.",
          "key_manifestations": [
            "Paper: 'Experiments on Plant Hybridization'",
            "Person: Gregor Mendel",
            "Concept: Dominant/Recessive",
            "Concept: Independent Assortment"
          ]
        },
        "1870": {
          "salience_share": 5.0,
          "description": "Discovery of Nuclein (Δw = +3.0). Friedrich Miescher isolates a phosphorus-rich substance from bandage pus. He calls it 'nuclein.' The prototype has been physically found.",
          "key_manifestations": [
            "Discovery: Nuclein (DNA)",
            "Person: Friedrich Miescher",
            "Source: Pus from bandages",
            "Context: Chemical composition of the nucleus"
          ]
        },
        "1875": {
          "salience_share": 5.5,
          "description": "Staining Chromatin (Δw = +0.5). Flemming stains 'chromatin.' The prototype is visible as colored threads.",
          "key_manifestations": [
            "Concept: Chromatin",
            "Person: Walther Flemming",
            "Tech: Aniline dyes",
            "Context: Mitosis observation"
          ]
        },
        "1880": {
          "salience_share": 6.0,
          "description": "Chemical characterization (Δw = +0.5). Kossel identifies the bases (adenine, guanine, etc.). The prototype's alphabet is discovered, though not read.",
          "key_manifestations": [
            "Discovery: Nucleobases",
            "Person: Albrecht Kossel",
            "Chemical: Adenine/Guanine",
            "Context: Physiological chemistry"
          ]
        },
        "1885": {
          "salience_share": 6.5,
          "description": "Chromosome continuity (Δw = +0.5). Rabl and Boveri argue chromosomes are permanent. The prototype has a vehicle.",
          "key_manifestations": [
            "Concept: Chromosome individuality",
            "Person: Theodor Boveri",
            "Person: Carl Rabl",
            "Work: 'Ueber Zelltheilung'"
          ]
        },
        "1890": {
          "salience_share": 6.0,
          "description": "Stasis (Δw = -0.5). Proteins are thought to be the hereditary material because they are complex. Nuclein is seen as a scaffold. The prototype is underestimated.",
          "key_manifestations": [
            "Theory: Protein heredity",
            "Context: Complexity bias",
            "Person: Richard Altmann (renaming it Nucleic Acid)",
            "Term: Nucleic Acid"
          ]
        },
        "1895": {
          "salience_share": 6.0,
          "description": "Stasis (Δw = 0).",
          "key_manifestations": [
            "Person: Wilson (The Cell)",
            "Context: Cytology maturity",
            "Concept: The Nucleus as heredity seat",
            "Work: 'The Cell in Development and Inheritance'"
          ]
        },
        "1900": {
          "salience_share": 10.0,
          "description": "Chromosomal Theory (Δw = +4.0). Sutton and Boveri link chromosomes to Mendel. The prototype (as chromosomes) is the key to heredity.",
          "key_manifestations": [
            "Theory: Sutton-Boveri Chromosome Theory",
            "Person: Walter Sutton",
            "Person: Theodor Boveri",
            "Context: Mendel Rediscovery"
          ]
        },
        "1905": {
          "salience_share": 10.0,
          "description": "Stasis (Δw = 0). Sex chromosomes discovered (Stevens/Wilson).",
          "key_manifestations": [
            "Discovery: XY Sex determination",
            "Person: Nettie Stevens",
            "Person: E.B. Wilson",
            "Context: Sex linkage"
          ]
        },
        "1910": {
          "salience_share": 8.0,
          "description": "Tetranucleotide Hypothesis (Δw = -2.0). Phoebus Levene proposes DNA is a repetitive, boring polymer (AGCT, AGCT...). This error sets the prototype back decades. Protein is assumed to be the gene.",
          "key_manifestations": [
            "Theory: Tetranucleotide Hypothesis",
            "Person: Phoebus Levene",
            "Concept: DNA as scaffold",
            "Person: T.H. Morgan (Gene mapping begins)"
          ]
        },
        "1915": {
          "salience_share": 12.0,
          "description": "Gene Mapping (Δw = +4.0). Morgan maps genes on chromosomes using fruit flies. The 'Gene' is a real location, even if the molecule is wrong.",
          "key_manifestations": [
            "Book: 'The Mechanism of Mendelian Heredity'",
            "Person: T.H. Morgan",
            "Organism: Drosophila",
            "Concept: Linkage maps"
          ]
        },
        "1920": {
          "salience_share": 12.0,
          "description": "Stasis (Δw = 0). Physics enters biology (Delbrück later).",
          "key_manifestations": [
            "Context: Physical nature of the gene",
            "Person: Muller",
            "Concept: Mutation rate",
            "Work: 'The Physical Basis of Heredity'"
          ]
        },
        "1925": {
          "salience_share": 14.0,
          "description": "X-Rays induce mutation (Δw = +2.0). Muller proves genes are physical objects that can be smashed. The prototype is material.",
          "key_manifestations": [
            "Experiment: Muller's X-rays",
            "Person: Hermann Muller",
            "Concept: Artificial Mutation",
            "Context: Genetics becomes experimental"
          ]
        },
        "1930": {
          "salience_share": 15.0,
          "description": "Transforming Principle (Δw = +1.0). Griffith's 1928 experiment (published impact delayed). Bacteria exchange info. Something is the carrier.",
          "key_manifestations": [
            "Experiment: Griffith's Experiment",
            "Organism: Pneumococcus",
            "Concept: Transformation",
            "Person: Frederick Griffith"
          ]
        },
        "1935": {
          "salience_share": 15.0,
          "description": "Crystallization of Virus (Δw = 0). Stanley crystallizes TMV (Tobacco Mosaic Virus). It's protein + RNA. Reinforces protein bias.",
          "key_manifestations": [
            "Experiment: TMV crystallization",
            "Person: Wendell Stanley",
            "Context: Virus as molecule",
            "Concept: Nucleoprotein"
          ]
        },
        "1940": {
          "salience_share": 18.0,
          "description": "One Gene One Enzyme (Δw = +3.0). Beadle and Tatum. The gene does *something* chemical. Schrödinger publishes 'What is Life?' (1944), predicting an 'aperiodic crystal.'",
          "key_manifestations": [
            "Book: 'What is Life?' (Schrödinger)",
            "Concept: Aperiodic Crystal",
            "Person: Beadle and Tatum",
            "Context: Physicists entering biology"
          ]
        },
        "1945": {
          "salience_share": 25.0,
          "description": "The Avery Bombshell (Δw = +7.0). Avery, MacLeod, and McCarty prove the 'Transforming Principle' is DNA, not protein. The scientific world is skeptical but the prototype has been identified.",
          "key_manifestations": [
            "Paper: 'Studies on the Chemical Nature of the Substance Inducing Transformation'",
            "Person: Oswald Avery",
            "Concept: DNA as Hereditary Material",
            "Reaction: Skepticism (protein bias persists)"
          ]
        },
        "1950": {
          "salience_share": 35.0,
          "description": "Chargaff's Rules (Δw = +10.0). Chargaff discovers A=T and C=G. This destroys Levene's boring hypothesis. DNA is complex enough to be the code. Hershey-Chase (1952) confirms DNA is the viral genetic material.",
          "key_manifestations": [
            "Rule: Chargaff's Rules",
            "Person: Erwin Chargaff",
            "Experiment: Hershey-Chase (Blender experiment)",
            "Concept: Bacteriophage DNA"
          ]
        },
        "1955": {
          "salience_share": 80.0,
          "description": "The Double Helix (Δw = +45.0). Watson, Crick, Franklin, and Wilkins discover the structure (1953). . It suggests a copying mechanism immediately. The prototype becomes the icon of 20th-century science.",
          "key_manifestations": [
            "Paper: 'Molecular Structure of Nucleic Acids' (Nature, 1953)",
            "Person: Watson and Crick",
            "Person: Rosalind Franklin (Photo 51)",
            "Concept: Base pairing"
          ]
        },
        "1960": {
          "salience_share": 85.0,
          "description": "Cracking the Code (Δw = +5.0). The Meselson-Stahl experiment proves semi-conservative replication. Nirenberg and Matthaei crack the codon chart (UUU=Phenylalanine). We can read the prototype.",
          "key_manifestations": [
            "Experiment: Meselson-Stahl (The most beautiful experiment)",
            "Discovery: The Genetic Code (Codons)",
            "Person: Marshall Nirenberg",
            "Concept: Central Dogma (DNA->RNA->Protein)"
          ]
        },
        "1965": {
          "salience_share": 82.0,
          "description": "Regulation (Δw = -3.0). The Lac Operon shows how DNA is turned on/off. The prototype is dynamic.",
          "key_manifestations": [
            "Concept: Lac Operon",
            "Person: Jacob and Monod",
            "Concept: Messenger RNA",
            "Context: Nobel Prize 1962 (Watson/Crick/Wilkins)"
          ]
        },
        "1970": {
          "salience_share": 85.0,
          "description": "Recombinant DNA (Δw = +3.0). Restriction enzymes discovered. We can cut and paste the prototype. The era of genetic engineering begins.",
          "key_manifestations": [
            "Tech: Restriction Enzymes",
            "Person: Hamilton Smith",
            "Event: Asilomar Conference",
            "Concept: Sticky ends"
          ]
        },
        "1975": {
          "salience_share": 88.0,
          "description": "Sequencing (Δw = +3.0). Sanger sequencing allows reading the letters. Southern Blot allows finding specific sequences. The prototype becomes a text.",
          "key_manifestations": [
            "Tech: Sanger Sequencing",
            "Tech: Southern Blot",
            "Person: Frederick Sanger",
            "Concept: The first sequenced genome (Phi X 174)"
          ]
        },
        "1980": {
          "salience_share": 90.0,
          "description": "Privatization and PCR (Δw = +2.0). Kary Mullis invents PCR. DNA can be amplified from a single drop. The prototype becomes a forensic tool. . Patenting of genes begins.",
          "key_manifestations": [
            "Tech: PCR",
            "Person: Kary Mullis",
            "Case: Diamond v. Chakrabarty",
            "Tech: DNA Fingerprinting (Alec Jeffreys)"
          ]
        },
        "1985": {
          "salience_share": 92.0,
          "description": "The Genomic Horizon (Δw = +2.0). Proposals for the Human Genome Project. The prototype is 'The Book of Man.' DNA evidence enters the courtroom.",
          "key_manifestations": [
            "Project: Human Genome Project (proposal)",
            "Person: Kary Mullis (PCR published)",
            "Context: Genetic screening",
            "Case: Pitchfork murder case (first conviction by DNA)"
          ]
        },
        "1990": {
          "salience_share": 95.0,
          "description": "Big Science (Δw = +3.0). The HGP officially begins. It is the Moon Shot of biology. The prototype is digitized.",
          "key_manifestations": [
            "Event: Launch of HGP",
            "Person: James Watson (HGP Head)",
            "Tech: Automated sequencers",
            "Film: 'Jurassic Park' (DNA pop culture peak)"
          ]
        },
        "1995": {
          "salience_share": 94.0,
          "description": "The O.J. Effect (Δw = -1.0). The O.J. Simpson trial brings DNA forensics to every TV in the world. The prototype is infallible science vs. fallible humans.",
          "key_manifestations": [
            "Event: O.J. Simpson Trial",
            "Concept: DNA Evidence",
            "Discovery: BRCA1 gene",
            "Tech: ESTs (Venter)"
          ]
        },
        "2000": {
          "salience_share": 100.0,
          "description": "The Book of Life (Δw = +6.0). The Draft Human Genome is announced by Clinton and Blair. The prototype is fully mapped. The 'Century of the Gene' culminates.",
          "key_manifestations": [
            "Event: Human Genome Draft Announcement",
            "Person: Francis Collins",
            "Person: Craig Venter",
            "Quote: 'The language in which God created life'"
          ]
        }
      }
    }
  }
};

const biologyPreset: PresetConfig = {
  id: 'biology_history',
  name: 'History of Biology (1800-2000)',
  description: 'Cultural salience of biological concepts from evolution and germ theory to the genomic revolution. Tracks 4 key clusters: Evolution, Bacteria, The Cell, and DNA.',
  startYear: '1800',
  endYear: '2000',
  clusterStart: 1,
  clusterEnd: 4,
  periodicity: 5,
  context: 'Western scientific and cultural history',
  model: 'o1-mini',
  cachedResult: biologyData
};

export default biologyPreset;




