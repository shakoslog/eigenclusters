import { PresetConfig } from './types';

// Cold War analysis data moved directly into this file
const alexandriaData = {
    "metadata": {
      "period": "-300--30",
      "interval": "40 years",
      "cluster_range": "1-20",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_hellenistic_scientific_inquiry [↗] (5.0%)",
        "2_philosophical_syncretism [↗] (4.5%)",
        "3_library_institutionality [↘] (4.0%)",
        "4_hellenistic_art_innovation [→] (3.8%)",
        "5_literary_engineering [↗] (3.5%)",
        "6_ptolemaic_political_dynamics [↘] (3.2%)",
        "7_medical_scholarly_advancements [↗] (2.9%)",
        "8_educational_reforms [↗] (2.8%)",
        "9_maritime_infrastructure_development [↗] (2.5%)",
        "10_greek_language_dominance [→] (2.3%)",
        "11_religious_reform_and_mysticism [↗] (2.1%)",
        "12_economic_trade_expansion [↗] (2.0%)",
        "13_astronomical_study_pursuit [↘] (1.8%)",
        "14_military_tactics_development [↘] (1.7%)",
        "15_urban_population_growth [↗] (1.6%)",
        "16_geographical_exploration [↗] (1.5%)",
        "17_literature_translation_projects [↗] (1.4%)",
        "18_public_spectacles_and_festivals [→] (1.3%)",
        "19_storytelling_and_theater_expansion [→] (1.2%)",
        "20_artistic_style_evolution [↘] (1.1%)"
      ]
    },
    "clusters": {
      "1_hellenistic_scientific_inquiry": {
        "name": "Hellenistic Scientific Inquiry",
        "description": "This cluster represents the surge in scientific exploration and methodology during the Hellenistic period, particularly in Alexandria. The pursuit of knowledge in fields such as mathematics, physics, and biology was characterized by systematic experimentation and documentation, significantly advancing the scientific understanding of the time.",
        "trajectory": {
          "-300": {
            "variance_explained": 4.2,
            "description": "Scientific exploration is beginning to flourish as Alexandria becomes a hub for scholars. The establishment of research institutions fosters initial innovation in various scientific disciplines.",
            "key_manifestations": [
              "Early works of Euclid",
              "Initial research activities at the Museum",
              "First systematic collection of scientific manuscripts",
              "The founding of the Museum and Library of Alexandria"
            ]
          },
          "-260": {
            "variance_explained": 5.6,
            "description": "Scientific inquiry explodes with revolutionary breakthroughs in mathematics, physics, and engineering. This period represents the golden age of Alexandrian science.",
            "key_manifestations": [
              "Euclid's Elements reaches completion",
              "Archimedes formulates principle of buoyancy during Alexandria visit",
              "Eratosthenes' calculation of Earth's circumference",
              "The works of Apollonius on conic sections"
            ]
          },
          "-220": {
            "variance_explained": 5.8,
            "description": "Scientific inquiry reaches its absolute peak, with monumental works in mathematics, engineering and astronomy that would define scientific understanding for millennia.",
            "key_manifestations": [
              "Archimedes' On the Sphere and Cylinder",
              "Apollonius' Conics",
              "Ctesibius' work on pneumatics and water organs",
              "Eratosthenes' geographical measurements and star catalog"
            ]
          },
          "-180": {
            "variance_explained": 4.3,
            "description": "Scientific momentum begins to slow following the golden age, though important work continues. Political pressures begin to limit access to resources for pure research.",
            "key_manifestations": [
              "Continuation of mathematical traditions",
              "Studies on light and vision by Euclid",
              "Mechanical innovations building on Archimedes' work",
              "Consolidation rather than expansion of scientific knowledge"
            ]
          },
          "-140": {
            "variance_explained": 3.7,
            "description": "Scientific activity declines as institutional support weakens. Focus shifts toward commentaries on earlier works rather than groundbreaking new research.",
            "key_manifestations": [
              "Commentaries on Euclid's Elements",
              "Classification of earlier scientific works",
              "Reduced pace of new scientific discoveries",
              "Gradual loss of empirical methodology"
            ]
          },
          "-100": {
            "variance_explained": 3.2,
            "description": "Scientific inquiry faces significant challenges, but astronomical studies see renewed interest, creating an important counter-trend to the general scientific decline.",
            "key_manifestations": [
              "Early work by Hipparchus of Rhodes",
              "Systematic astronomical observations",
              "Advancements in mathematical astronomy",
              "Precession of the equinoxes discovered"
            ]
          },
          "-60": {
            "variance_explained": 4.1,
            "description": "A renaissance in astronomical science occurs even as other fields continue to decline. Systematic observation and mathematical modeling create significant advancements.",
            "key_manifestations": [
              "Early astronomical works of Ptolemy",
              "Refinement of planetary models",
              "Development of advanced astronomical instruments",
              "Mathematical models predicting celestial movements"
            ]
          },
          "-30": {
            "variance_explained": 3.5,
            "description": "As Alexandria's institutions face crisis, astronomical research remains relatively robust while other scientific fields decline precipitously. Roman interest in practical science creates selective support.",
            "key_manifestations": [
              "Continued astronomical observations",
              "Early works of Claudius Ptolemy",
              "Retention of mathematical astronomy traditions",
              "Decline in other scientific disciplines"
            ]
          }
        }
      },
      "2_philosophical_syncretism": {
        "name": "Philosophical Syncretism",
        "description": "Philosophical Syncretism refers to the blending of different philosophical traditions during the Hellenistic period. In Alexandria, Greek philosophy intermingled with Egyptian and Near Eastern thought, leading to new schools of thought and the evolution of ideas in ethics, metaphysics, and epistemology.",
        "trajectory": {
          "-300": {
            "variance_explained": 3.2,
            "description": "Philosophical syncretism is in its formative stage, with Greek philosophy beginning to encounter Egyptian and Near Eastern thought in the newly established Alexandria.",
            "key_manifestations": [
              "Early Stoic teachings reaching Alexandria",
              "Initial cultural exchanges between Greek and Egyptian intellectuals",
              "Tentative integration of Platonic ideas with local traditions",
              "Demetrius of Phalerum's philosophical influence"
            ]
          },
          "-260": {
            "variance_explained": 3.8,
            "description": "Philosophical schools begin to diversify as Stoicism gains prominence alongside continued Platonic and Aristotelian traditions, creating a more complex philosophical landscape.",
            "key_manifestations": [
              "Growth of Stoic philosophy under Cleanthes and Chrysippus",
              "Development of skeptical traditions",
              "Integration of Egyptian religious concepts into Greek philosophical frameworks",
              "Expansion of philosophical curricula in educational institutions"
            ]
          },
          "-220": {
            "variance_explained": 4.2,
            "description": "Philosophical diversity continues to expand with rival schools developing distinct identities yet engaging in productive dialogue through Alexandrian institutions.",
            "key_manifestations": [
              "Establishment of distinct Epicurean communities",
              "Middle Stoic adaptations to criticism",
              "Skeptical challenges to dogmatic positions",
              "Cross-cultural philosophical symposia"
            ]
          },
          "-180": {
            "variance_explained": 4.8,
            "description": "Philosophical syncretism accelerates as political uncertainty drives interest in ethical systems and personal well-being, creating fertile ground for philosophical innovation.",
            "key_manifestations": [
              "Rise of Cynicism in response to royal excess",
              "Integration of Egyptian ethical traditions with Greek frameworks",
              "Development of philosophical therapy for psychological well-being",
              "Early seeds of Middle Platonism"
            ]
          },
          "-140": {
            "variance_explained": 5.4,
            "description": "Philosophical syncretism reaches its peak as mature schools systematically incorporate elements from diverse traditions, creating new philosophical syntheses.",
            "key_manifestations": [
              "Flourishing of Middle Platonism",
              "Systematic integration of Stoic ethics with local religious practices",
              "Development of Alexandrian Neopythagoreanism",
              "Philosophical responses to scientific developments"
            ]
          },
          "-100": {
            "variance_explained": 5.1,
            "description": "Syncretic philosophy maintains strength even as other intellectual domains weaken. Roman interest in Greek philosophy provides new audience and influence.",
            "key_manifestations": [
              "Philosophical exchanges with visiting Roman intellectuals",
              "Further development of Middle Platonic metaphysics",
              "Antiochus of Ascalon's syncretic approach",
              "Integration of Jewish thought with Hellenistic philosophy"
            ]
          },
          "-60": {
            "variance_explained": 4.9,
            "description": "Philosophical activity remains robust despite institutional challenges, with distinctive Alexandrian contributions to several traditions maintaining intellectual vitality.",
            "key_manifestations": [
              "Early developments of Neoplatonic thought",
              "Continued Jewish-Hellenistic philosophical synthesis",
              "Philosophical responses to Roman political dominance",
              "Emergence of eclectic approaches drawing from multiple schools"
            ]
          },
          "-30": {
            "variance_explained": 4.7,
            "description": "As traditional institutions decline, philosophical activity shifts to smaller communities and private instruction, maintaining significant cultural influence despite reduced scale.",
            "key_manifestations": [
              "Philo of Alexandria's synthesis of Jewish and Greek thought",
              "Private philosophical societies replacing institutional frameworks",
              "Early seeds of what would become Neoplatonism",
              "Preservation of philosophical texts by devoted communities"
            ]
          }
        }
      },
      "3_library_institutionality": {
        "name": "Library Institutionality",
        "description": "Library Institutionality highlights the development, structure, and influence of the Library of Alexandria as a central cultural and scholarly institution. It encompasses the collection practices, scholarly activities, and the role of the library in preserving and disseminating knowledge across various fields.",
        "trajectory": {
          "-300": {
            "variance_explained": 5.7,
            "description": "The Library of Alexandria experiences explosive growth under Ptolemaic patronage, rapidly becoming the preeminent knowledge institution in the Mediterranean world.",
            "key_manifestations": [
              "Foundation of the Library of Alexandria by Ptolemy I",
              "Appointment of Demetrius of Phalerum as first librarian",
              "Establishment of systematic collecting practices",
              "Royal mandate to copy all scrolls entering Alexandria"
            ]
          },
          "-260": {
            "variance_explained": 5.4,
            "description": "The library reaches institutional maturity with developed cataloging systems, scholarly practices, and reputation attracting intellectuals from across the Mediterranean.",
            "key_manifestations": [
              "Callimachus' development of Pinakes cataloging system",
              "Estimated collection of 500,000+ scrolls",
              "International scholars taking residence at the Museum",
              "Development of specialized research departments"
            ]
          },
          "-220": {
            "variance_explained": 4.9,
            "description": "Library institutionality begins facing challenges from political instability and competition from rival libraries, though it remains the predominant center of learning.",
            "key_manifestations": [
              "Competition from Pergamum Library",
              "Reduced acquisition budget under Ptolemy IV",
              "Copy restrictions leading to forgeries and smuggling",
              "Greater emphasis on preserving existing collections"
            ]
          },
          "-180": {
            "variance_explained": 4.2,
            "description": "Political turmoil creates significant institutional challenges, with damage to collections and reduced patronage, though scholarly activity continues.",
            "key_manifestations": [
              "Collection losses during civil unrest in Alexandria",
              "Reduced scholarly stipends and appointments",
              "Movement of some scholars to competing institutions",
              "Shift toward preservation rather than expansion"
            ]
          },
          "-140": {
            "variance_explained": 3.7,
            "description": "The institution undergoes partial recovery under periods of stable leadership, but never recaptures its former dominance as resources are directed elsewhere.",
            "key_manifestations": [
              "Selective restoration of damaged collections",
              "Increasingly specialized rather than comprehensive collections",
              "Decentralization of scholarly activities",
              "Emergence of satellite libraries throughout Alexandria"
            ]
          },
          "-100": {
            "variance_explained": 3.3,
            "description": "Institutional decline accelerates as political priorities shift away from scholarship, yet dedicated librarians maintain core functions despite reduced resources.",
            "key_manifestations": [
              "Significant reduction in acquisition budgets",
              "Departure of scholars to Athens, Rhodes and Rome",
              "Physical deterioration of library facilities",
              "Loss of autonomy from royal administration"
            ]
          },
          "-60": {
            "variance_explained": 2.8,
            "description": "The library suffers catastrophic damage during Caesar's Alexandrian campaign, destroying significant portions of the collection and undermining institutional continuity.",
            "key_manifestations": [
              "Fire during Caesar's Alexandria campaign of 48 BCE",
              "Loss of irreplaceable portions of the collection",
              "Dispersal of surviving materials to satellite locations",
              "Dramatic reduction in scholarly staff"
            ]
          },
          "-30": {
            "variance_explained": 2.0,
            "description": "The once-great institution exists as a shadow of its former self, with fragmented collections and minimal resources as Alexandria transitions to Roman rule.",
            "key_manifestations": [
              "Efforts to rebuild limited portions of the collection",
              "Transition to Roman administrative oversight",
              "Focus on practical knowledge over theoretical research",
              "Surviving reputation driving continued but diminished scholarly activity"
            ]
          }
        }
      },
      "4_hellenistic_art_innovation": {
        "name": "Hellenistic Art Innovation",
        "description": "Hellenistic Art Innovation captures the dynamic and evolving artistic styles and practices during the Hellenistic period. It encompasses advancements in sculpture, architecture, and decorative arts, reflecting the cultural and societal changes of the time, particularly in Alexandria.",
        "trajectory": {
          "-300": {
            "variance_explained": 3.8,
            "description": "Hellenistic art is developing distinctive characteristics as Greek artistic traditions encounter Egyptian aesthetic sensibilities in the new cosmopolitan setting.",
            "key_manifestations": [
              "Early Ptolemaic royal portraiture blending Greek and Egyptian elements",
              "Development of Alexandria's distinctive architectural style",
              "Initial experiments with polychrome sculpture",
              "Funerary art combining Greek and Egyptian conventions"
            ]
          },
          "-260": {
            "variance_explained": 4.1,
            "description": "Artistic innovation accelerates with mature Alexandrian styles emerging in multiple media, characterized by emotional expressiveness and technical sophistication.",
            "key_manifestations": [
              "Sculptures showing dramatic emotional expressions",
              "Advanced portraiture capturing psychological states",
              "Architectural innovations in the Museum complex",
              "Sophisticated mosaics depicting mythological scenes"
            ]
          },
          "-220": {
            "variance_explained": 3.7,
            "description": "Artistic production maintains high technical standards but experiences some standardization as distinctive Alexandrian styles become codified and replicated.",
            "key_manifestations": [
              "Standardized approaches to royal portraiture",
              "Refinement rather than innovation in architectural forms",
              "Highly skilled but increasingly conventional mosaic production",
              "Technical perfectionism in decorative arts"
            ]
          },
          "-180": {
            "variance_explained": 3.2,
            "description": "Economic pressures lead to reduced artistic patronage, creating a period of limited innovation although technical standards remain high.",
            "key_manifestations": [
              "Smaller scale commissions replacing monumental works",
              "Emphasis on portable art forms like jewelry and small bronzes",
              "Repetition of established artistic formulas",
              "Adaptation of artistic practices to economic constraints"
            ]
          },
          "-140": {
            "variance_explained": 3.5,
            "description": "Art experiences a significant revival with a new wave of stylistic innovation driven by cross-cultural exchange with Rome and other Mediterranean centers.",
            "key_manifestations": [
              "Emergence of baroque tendencies in sculpture",
              "Revival of Egyptian stylistic elements in hybrid works",
              "Development of distinctive Alexandrian portraiture style",
              "Innovative architectural solutions for urban challenges"
            ]
          },
          "-100": {
            "variance_explained": 4.3,
            "description": "Artistic production reaches a secondary peak with distinctive late Hellenistic styles characterized by emotional intensity and technical virtuosity responding to changing tastes.",
            "key_manifestations": [
              "Highly dramatic sculptural groups",
              "Sophisticated atmospheric effects in painting",
              "Luxury arts serving wealthy patrons",
              "Integration of Roman elements into Alexandrian traditions"
            ]
          },
          "-60": {
            "variance_explained": 3.9,
            "description": "Political instability creates uneven artistic production with exceptional works alongside periods of disruption, as Roman influence grows increasingly dominant.",
            "key_manifestations": [
              "Roman-influenced portraiture gaining prominence",
              "Spectacular mosaic production despite political turmoil",
              "Combination of Egyptian revival and Roman tastes",
              "Cleopatra-era royal commissions showing distinctive hybrid style"
            ]
          },
          "-30": {
            "variance_explained": 3.0,
            "description": "The transition to Roman rule transforms artistic production, with distinctive Alexandrian traditions continuing but increasingly absorbed into broader Imperial artistic language.",
            "key_manifestations": [
              "Ptolemaic artistic traditions adapting to Roman patronage",
              "Egyptian elements marketed as exotic to Roman collectors",
              "Preservation of technical traditions in workshops",
              "Gradual alignment with broader Roman Imperial artistic currents"
            ]
          }
        }
      },
      "5_literary_engineering": {
        "name": "Literary Engineering",
        "description": "Literary Engineering pertains to the systematic study and creation of literature, including the development of genres, narrative techniques, and the integration of scientific and philosophical ideas within literary works during the Hellenistic period.",
        "trajectory": {
          "-300": {
            "variance_explained": 2.9,
            "description": "Literary activity begins taking distinctive Alexandrian forms as the library attracts poets and writers experimenting with new approaches to traditional genres.",
            "key_manifestations": [
              "Early Alexandrian poetry by Philitas of Cos",
              "Initial scholarly editions of Homer",
              "Development of literary criticism as a discipline",
              "Experimental approaches to traditional Greek forms"
            ]
          },
          "-260": {
            "variance_explained": 3.4,
            "description": "Literary production diversifies with innovative approaches to poetry, scholarly commentary, and the emergence of distinctively Alexandrian literary aesthetics.",
            "key_manifestations": [
              "Callimachus' influential literary program favoring brevity and erudition",
              "Theocritus' Idylls creating the pastoral tradition",
              "Apollonius of Rhodes' Argonautica revitalizing epic",
              "Expansion of literary scholarship beyond Homer to other texts"
            ]
          },
          "-220": {
            "variance_explained": 3.9,
            "description": "Literary engineering reaches early maturity with sophisticated critical principles, innovative genres, and productive tension between competing literary approaches.",
            "key_manifestations": [
              "Apollonius vs. Callimachus literary debate",
              "Advanced textual criticism by Aristophanes of Byzantium",
              "Development of scholarly commentaries as literary form",
              "Expansion of literary epigrammatic tradition"
            ]
          },
          "-180": {
            "variance_explained": 4.5,
            "description": "Literary activity reaches its peak as mature Alexandrian traditions influence wider Mediterranean literature while maintaining distinctive scholarly character.",
            "key_manifestations": [
              "Aristarchus of Samothrace's critical editions",
              "Development of comprehensive literary history",
              "Standardization of Homeric text",
              "Integration of scholarly and creative literary practices"
            ]
          },
          "-140": {
            "variance_explained": 4.7,
            "description": "Literary engineering maintains strength even as other clusters decline, with Alexandrian critical principles providing foundation for wider Hellenistic literary world.",
            "key_manifestations": [
              "Expansion of Alexandrian literary influence to Rome",
              "Dionysus Thrax's Art of Grammar",
              "Systematic development of literary critical vocabulary",
              "Standardization of editorial practices"
            ]
          },
          "-100": {
            "variance_explained": 4.4,
            "description": "Literary activity finds new audiences as Alexandrian approaches influence emerging Roman literary culture while continuing local traditions.",
            "key_manifestations": [
              "Literary exchanges with visiting Roman poets",
              "Continued production of scholarly commentaries",
              "Adaptation of Greek literary forms to Roman tastes",
              "Preservation of textual criticism methodologies"
            ]
          },
          "-60": {
            "variance_explained": 4.2,
            "description": "Literary engineering remains relatively robust despite institutional challenges, as scholarly literary traditions find support from Roman intellectual circles.",
            "key_manifestations": [
              "Didymus Chalcenterus' prolific scholarly output",
              "Continuity of literary critical traditions",
              "Movement of Alexandrian literary approaches to Rome",
              "Documentation of linguistic and literary histories"
            ]
          },
          "-30": {
            "variance_explained": 3.9,
            "description": "As Alexandria transitions to Roman rule, literary traditions maintain significant influence through their adoption by Roman literary culture.",
            "key_manifestations": [
              "Roman neoteric poets drawing on Alexandrian traditions",
              "Continued production of scholarly commentaries despite institutional decline",
              "Preservation of critical texts through copying",
              "Alexandrian literary principles informing emerging Augustan aesthetics"
            ]
          }
        }
      },
      "6_ptolemaic_political_dynamics": {
        "name": "Ptolemaic Political Dynamics",
        "description": "Ptolemaic Political Dynamics examines the governance, political strategies, and socio-political interactions of the Ptolemaic dynasty ruling Egypt. This cluster includes the internal politics of the Ptolemaic court, relations with neighboring states, and policies affecting cultural and scholarly institutions like the Library of Alexandria.",
        "trajectory": {
          "-300": {
            "variance_explained": 5.2,
            "description": "The Ptolemaic dynasty establishes firm political control through innovative governance combining Greek and Egyptian elements, with strong patronage of cultural institutions.",
            "key_manifestations": [
              "Ptolemy I Soter's consolidation of power",
              "Establishment of dynastic ruler cult",
              "Development of administrative systems combining Greek and Egyptian practices",
              "Strategic use of cultural patronage to legitimate rule"
            ]
          },
          "-260": {
            "variance_explained": 4.8,
            "description": "Ptolemaic governance reaches peak effectiveness under Ptolemy II Philadelphus, with stable administration, strategic marriages, and significant territorial control.",
            "key_manifestations": [
              "Ptolemy II's marriage to his sister Arsinoe II",
              "Effective tax systems funding cultural flourishing",
              "Naval dominance in Eastern Mediterranean",
              "Strategic use of religious syncretism"
            ]
          },
          "-220": {
            "variance_explained": 4.2,
            "description": "Political decline begins under Ptolemy IV as competent governance gives way to court intrigue, weakening administrative effectiveness despite continued cultural patronage.",
            "key_manifestations": [
              "Increased influence of court favorites over competent administrators",
              "Native Egyptian rebellion in Upper Egypt",
              "Military dependence on mercenaries",
              "Assassinations and palace intrigues"
            ]
          },
          "-180": {
            "variance_explained": 3.8,
            "description": "Internal dynastic conflicts and external pressures from Rome and the Seleucids create political instability, with brief periods of recovery failing to reverse decline.",
            "key_manifestations": [
              "Roman intervention in Ptolemaic succession disputes",
              "Loss of overseas territories",
              "Growing independence of Egyptian priesthood",
              "Repeated dynastic civil wars"
            ]
          },
          "-140": {
            "variance_explained": 3.4,
            "description": "Continued dynastic strife weakens Ptolemaic authority, with increasing Roman influence over succession and foreign policy despite occasional capable rulers.",
            "key_manifestations": [
              "Ptolemy VIII expelling intellectuals from Alexandria",
              "Recurring civil wars between competing family members",
              "Further territorial losses",
              "Growing economic challenges"
            ]
          },
          "-100": {
            "variance_explained": 2.9,
            "description": "Ptolemaic autonomy rapidly diminishes as Roman influence becomes increasingly direct, with rulers maintaining cultural patronage as one of few remaining areas of independent action.",
            "key_manifestations": [
              "Roman support becoming essential for succession",
              "Reduction of effective territory to Egypt proper",
              "Financial crises requiring Roman loans",
              "Dependence on Roman military support"
            ]
          },
          "-60": {
            "variance_explained": 2.2,
            "description": "Ptolemaic rule becomes effectively dependent on Roman approval, with Cleopatra VII attempting innovative strategies to preserve Egyptian independence.",
            "key_manifestations": [
              "Cleopatra VII's alliances with Caesar and Mark Antony",
              "Egyptian cultural revival as political strategy",
              "Renewed cultural patronage to enhance legitimacy",
              "Final attempts at independent foreign policy"
            ]
          },
          "-30": {
            "variance_explained": 1.0,
            "description": "The Ptolemaic dynasty collapses completely with Cleopatra's defeat and death, as Egypt transitions to direct Roman rule ending the Hellenistic period in Alexandria.",
            "key_manifestations": [
              "Battle of Actium and defeat of Antony and Cleopatra",
              "Suicide of Cleopatra VII",
              "Egypt's incorporation as Roman province",
              "End of Ptolemaic cultural patronage systems"
            ]
          }
        }
      }
    }
  };

const alexandriarPreset: PresetConfig = {
  id: 'alexandria ',
  name: 'Alexandria Analysis',
  description: 'Alexandrias Library Era',
  startYear: '-300',
    endYear: '-30',
    clusterStart: 1,
    clusterEnd: 6,
    periodicity: 40,
    context: 'Focus on geopolitical, technological, and cultural developments during the Cold War period between the United States and Soviet Union.',
    model: 'o1-mini',
  cachedResult: alexandriaData
};

export default alexandriarPreset; 