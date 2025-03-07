export const philoSciData = {
    "metadata": {
      "period": "1000-2000",
      "interval": "100 years",
      "cluster_range": "1-5",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_scientific_revolution [↗] (10.0%)",
        "2_enlightenment_rationalism [→] (8.5%)",
        "3_renaissance_humanism [↗] (7.5%)",
        "4_religious_reformations [↘] (7.0%)",
        "5_industrial_technology_advancements [↗] (6.5%)",
        "6_medieval_feudalism [↘] (5.5%)",
        "7_colonialism_imperialism [→] (5.0%)",
        "8_printing_revolution [↗] (4.5%)",
        "9_artistic_movements [→] (4.0%)",
        "10_nationalism_rise [↗] (3.5%)",
        "11_secularization_trends [→] (3.0%)",
        "12_democratization_processes [→] (2.5%)",
        "13_evolutionary_theory_emergence [↗] (2.0%)",
        "14_capitalism_development [→] (1.8%)",
        "15_urbanization_growth [↗] (1.5%)",
        "16_exploration_discovery [↗] (1.3%)",
        "17_medical_advancements [↗] (1.2%)",
        "18_university_establishment [→] (1.0%)",
        "19_philosophical_empiricism [↗] (0.8%)",
        "20_philosophical_rationalism [↘] (0.7%)"
      ]
    },
    "clusters": {
      "1_scientific_revolution": {
        "name": "Scientific Revolution",
        "description": "The Scientific Revolution marks a profound shift in European thought, emphasizing empirical evidence and the scientific method. It challenged traditional authorities and laid the foundation for modern science, influencing various domains such as physics, astronomy, biology, and chemistry.",
        "trajectory": {
          "1000": {
            "variance_explained": 0.2,
            "description": "Medieval Europe dominated by theological explanations with virtually no modern scientific inquiry; natural philosophy entirely subordinate to religious frameworks.",
            "key_manifestations": [
              "Monastic preservation of ancient texts without critical analysis",
              "Hildegard of Bingen's mystical approach to natural phenomena",
              "Natural world interpreted primarily through religious symbolism",
              "Celestial phenomena explained through Ptolemaic geocentric model"
            ]
          },
          "1100": {
            "variance_explained": 0.3,
            "description": "Early scholasticism begins reconciling Aristotelian natural philosophy with Christian doctrine, though empirical investigation remains minimal.",
            "key_manifestations": [
              "Transmission of Aristotle's works via Islamic scholars",
              "Peter Abelard's application of logic to theological questions",
              "Adelard of Bath's inquiries into natural causes",
              "Early alchemical experiments in monastic settings"
            ]
          },
          "1200": {
            "variance_explained": 0.5,
            "description": "Scholastic natural philosophy develops more sophisticated approaches to understanding nature, though still firmly within theological frameworks.",
            "key_manifestations": [
              "Robert Grosseteste's early work on experimental method",
              "Roger Bacon's advocacy for empirical investigation",
              "Albertus Magnus's studies of plants and animals",
              "Emergence of proto-scientific inquiry at University of Oxford"
            ]
          },
          "1300": {
            "variance_explained": 0.6,
            "description": "Nominalism and empirical tendencies challenge Aristotelian frameworks, creating intellectual space for alternative explanations of natural phenomena.",
            "key_manifestations": [
              "William of Ockham's razor simplifying explanatory frameworks",
              "Jean Buridan's impetus theory challenging Aristotelian physics",
              "Early mechanical clocks enabling precise measurement",
              "Nicole Oresme's mathematical approach to natural philosophy"
            ]
          },
          "1400": {
            "variance_explained": 0.9,
            "description": "Renaissance recovery of classical texts and improved observational techniques lay groundwork for later scientific breakthroughs.",
            "key_manifestations": [
              "Recovery and translation of ancient scientific texts",
              "Improved anatomical illustrations based on observation",
              "Filippo Brunelleschi's mathematical perspective in art",
              "Navigation instruments improving measurement precision"
            ]
          },
          "1500": {
            "variance_explained": 2.5,
            "description": "Dramatic transformation begins as Copernican revolution challenges geocentric worldview and systematic observation gains prominence.",
            "key_manifestations": [
              "Nicolaus Copernicus's heliocentric model (De Revolutionibus, 1543)",
              "Andreas Vesalius's anatomical observations challenging Galen",
              "Tycho Brahe's systematic astronomical observations",
              "Advances in metallurgy and practical mechanics"
            ]
          },
          "1600": {
            "variance_explained": 5.8,
            "description": "Scientific Revolution reaches revolutionary heights with fundamental breakthroughs in physics, astronomy, and experimental methodology.",
            "key_manifestations": [
              "Galileo Galilei's telescopic observations and physics experiments",
              "Johannes Kepler's laws of planetary motion",
              "Francis Bacon's Novum Organum establishing scientific method",
              "William Harvey's discovery of blood circulation"
            ]
          },
          "1700": {
            "variance_explained": 6.5,
            "description": "Newtonian synthesis solidifies the Scientific Revolution's triumph, establishing mathematical physics as the premier explanatory framework.",
            "key_manifestations": [
              "Isaac Newton's Principia Mathematica establishing universal laws",
              "Foundation of scientific academies across Europe",
              "Antoine Lavoisier's chemical revolution",
              "Carl Linnaeus's taxonomic classification system"
            ]
          },
          "1800": {
            "variance_explained": 5.2,
            "description": "Science institutionalizes and specializes, with new fields emerging while physics and chemistry maintain paradigmatic authority.",
            "key_manifestations": [
              "John Dalton's atomic theory advancing chemistry",
              "James Clerk Maxwell's electromagnetic theory",
              "Charles Darwin's evolutionary theory challenging fixed species",
              "Louis Pasteur's germ theory revolutionizing medicine"
            ]
          },
          "1900": {
            "variance_explained": 6.8,
            "description": "Scientific frameworks undergo revolutionary transformation with relativity and quantum mechanics, creating new philosophical challenges.",
            "key_manifestations": [
              "Albert Einstein's theories of relativity disrupting Newtonian physics",
              "Quantum mechanics challenging deterministic causality",
              "Big Bang theory transforming cosmology",
              "Werner Heisenberg's uncertainty principle"
            ]
          },
          "2000": {
            "variance_explained": 7.4,
            "description": "Scientific frameworks become fully dominant in explaining natural phenomena, though philosophical questions about consciousness and quantum reality remain.",
            "key_manifestations": [
              "Completion of Human Genome Project",
              "Confirmation of Higgs boson at CERN",
              "Discovery of cosmic acceleration and dark energy",
              "Development of CRISPR gene editing technology"
            ]
          }
        }
      },
      "2_enlightenment_rationalism": {
        "name": "Enlightenment Rationalism",
        "description": "Enlightenment Rationalism emphasizes reason, individualism, and skepticism of traditional authority. Emerging in the 17th and 18th centuries, it fostered advancements in political philosophy, human rights, and scientific thought, profoundly shaping modern Western societies.",
        "trajectory": {
          "1000": {
            "variance_explained": 0.1,
            "description": "Almost no rationalist thought in the modern sense exists; faith and tradition dominate intellectual frameworks with reason subordinate to revelation.",
            "key_manifestations": [
              "Anselm's ontological argument using reason to confirm faith",
              "Complete subordination of philosophy to theological authority",
              "Absence of systematic skepticism toward received wisdom",
              "Reasoning largely constrained to biblical interpretation"
            ]
          },
          "1100": {
            "variance_explained": 0.4,
            "description": "Early scholasticism attempts to reconcile faith and reason, though rationality remains firmly in service to theological ends.",
            "key_manifestations": [
              "Peter Abelard's Sic et Non examining contradictions in texts",
              "Development of dialectical reasoning in cathedral schools",
              "Translation of Aristotelian logic from Arabic sources",
              "Early university disputations employing formal reasoning"
            ]
          },
          "1200": {
            "variance_explained": 0.8,
            "description": "High scholasticism develops sophisticated logical frameworks, though still primarily seeking to justify revealed truths rather than discover new knowledge.",
            "key_manifestations": [
              "Thomas Aquinas's synthesis of faith and reason",
              "Debates over universals and particulars",
              "Development of syllogistic reasoning techniques",
              "Emergence of natural law theories"
            ]
          },
          "1300": {
            "variance_explained": 1.2,
            "description": "Late medieval nominalism separates faith from reason, creating intellectual space for later secular rationalism.",
            "key_manifestations": [
              "William of Ockham's separation of philosophy from theology",
              "Marsilius of Padua's rationalist political theory",
              "Challenges to papal authority based on reasoned arguments",
              "Development of logical critiques of Aristotelian causality"
            ]
          },
          "1400": {
            "variance_explained": 1.5,
            "description": "Renaissance humanism elevates human reason and classical learning, gradually challenging scholastic frameworks.",
            "key_manifestations": [
              "Lorenzo Valla's philological critiques of traditional texts",
              "Recovery of Epicurean and Stoic philosophical traditions",
              "Civic humanism emphasizing practical reason in governance",
              "Questioning of traditional authorities based on textual evidence"
            ]
          },
          "1500": {
            "variance_explained": 1.9,
            "description": "Religious reformation paradoxically strengthens rationalist approaches through emphasis on individual interpretation and natural law.",
            "key_manifestations": [
              "Erasmus's rational criticism of church practices",
              "Machiavelli's realist political analysis",
              "Protestant emphasis on individual scriptural interpretation",
              "Michel de Montaigne's skeptical essays"
            ]
          },
          "1600": {
            "variance_explained": 3.6,
            "description": "Early Enlightenment sees dramatic rise of rationalist philosophy and mathematical approaches to knowledge.",
            "key_manifestations": [
              "René Descartes's methodic doubt and rationalist philosophy",
              "Baruch Spinoza's geometric approach to ethics",
              "Thomas Hobbes's materialist political philosophy",
              "Blaise Pascal's mathematical probability theories"
            ]
          },
          "1700": {
            "variance_explained": 7.2,
            "description": "High Enlightenment marks the peak of rationalist influence as reason becomes the primary authority in intellectual discourse.",
            "key_manifestations": [
              "Immanuel Kant's critical philosophy",
              "Diderot's Encyclopedia systematizing knowledge",
              "Voltaire's critiques of religious authority",
              "Jean-Jacques Rousseau's social contract theory"
            ]
          },
          "1800": {
            "variance_explained": 5.4,
            "description": "Post-Enlightenment sees rationalism incorporated into political systems while romanticism and historicism offer competing frameworks.",
            "key_manifestations": [
              "Georg Wilhelm Friedrich Hegel's dialectical idealism",
              "Auguste Comte's positivist philosophy",
              "Utilitarianism's rational approach to ethics",
              "John Stuart Mill's defense of rational liberalism"
            ]
          },
          "1900": {
            "variance_explained": 3.8,
            "description": "Modern rationalism contends with challenges from psychoanalysis, existentialism, and postmodernism while maintaining influence in analytic philosophy.",
            "key_manifestations": [
              "Vienna Circle's logical positivism",
              "Bertrand Russell's logical analysis",
              "John Rawls's rational approach to justice",
              "Karl Popper's critical rationalism"
            ]
          },
          "2000": {
            "variance_explained": 2.9,
            "description": "Contemporary rationalist approaches face challenges from cognitive science and postmodern critiques while maintaining influence in scientific methodology.",
            "key_manifestations": [
              "Evidence-based policy movements",
              "Evolutionary psychology explanations for human behavior",
              "Computational approaches to rationality",
              "Bayesian frameworks for understanding reasoning"
            ]
          }
        }
      },
      "3_renaissance_humanism": {
        "name": "Renaissance Humanism",
        "description": "Renaissance Humanism centers on the revival of classical knowledge, emphasizing human potential and achievements. Flourishing between the 14th and 17th centuries, it profoundly influenced art, literature, science, and philosophy, fostering a transition from medieval to modern Europe.",
        "trajectory": {
          "1000": {
            "variance_explained": 0.1,
            "description": "Almost no humanist philosophy present; intellectual life dominated by religious concerns rather than human-centered perspectives.",
            "key_manifestations": [
              "Limited preservation of classical texts in monasteries",
              "Dominance of religious rather than secular literature",
              "Art focused primarily on religious symbolism",
              "Education centered on religious training"
            ]
          },
          "1100": {
            "variance_explained": 0.2,
            "description": "Extremely limited classical influence with slight increase in interest in ancient Roman texts, though still primarily for religious purposes.",
            "key_manifestations": [
              "School of Chartres showing interest in Platonic texts",
              "Limited recovery of Roman legal codes",
              "John of Salisbury's interest in classical rhetoric",
              "Occasional copying of classical manuscripts"
            ]
          },
          "1200": {
            "variance_explained": 0.4,
            "description": "Growing interest in Aristotle and other classical authors, though primarily incorporated into Christian theological frameworks.",
            "key_manifestations": [
              "Translation of Aristotelian texts from Arabic",
              "Roman law studies at Bologna",
              "Early development of secular courts and literature",
              "Growth of urban centers fostering secular learning"
            ]
          },
          "1300": {
            "variance_explained": 1.8,
            "description": "Proto-Renaissance humanism emerges strongly in Italy with renewed focus on classical literature and human achievement.",
            "key_manifestations": [
              "Dante Alighieri's Divine Comedy blending classical and Christian elements",
              "Petrarch's recovery of Cicero's letters and classical texts",
              "Boccaccio's Decameron emphasizing human experiences",
              "Early Renaissance art in Florence showing classical influences"
            ]
          },
          "1400": {
            "variance_explained": 4.2,
            "description": "Humanist movement reaches extraordinary heights, revolutionizing education, art, and philosophy across Italian city-states.",
            "key_manifestations": [
              "Florentine Platonic Academy under Cosimo de' Medici",
              "Leon Battista Alberti's works on architecture and painting",
              "Lorenzo Valla's philological criticism exposing forgeries",
              "Systematic recovery and study of Greek and Roman manuscripts"
            ]
          },
          "1500": {
            "variance_explained": 4.8,
            "description": "Humanism reaches peak influence, spreading throughout Europe and transforming intellectual life across disciplines.",
            "key_manifestations": [
              "Erasmus of Rotterdam's critical editions of classical texts",
              "Thomas More's Utopia presenting humanist political thought",
              "Humanist educational reforms in northern Europe",
              "High Renaissance art of Leonardo, Michelangelo, and Raphael"
            ]
          },
          "1600": {
            "variance_explained": 3.6,
            "description": "Humanism evolves and partially merges with scientific and philosophical movements while maintaining significant cultural influence.",
            "key_manifestations": [
              "Michel de Montaigne's humanistic essays",
              "Shakespeare's works exploring human nature and psychology",
              "Francis Bacon combining humanist and scientific approaches",
              "Humanist approaches to jurisprudence and political theory"
            ]
          },
          "1700": {
            "variance_explained": 2.4,
            "description": "Humanist approaches absorbed into Enlightenment thought, maintaining influence in education and classical studies.",
            "key_manifestations": [
              "Neo-classical aesthetic movements",
              "Grand Tour tradition emphasizing classical education",
              "Johann Joachim Winckelmann's studies of classical art",
              "Classical influences in architecture and design"
            ]
          },
          "1800": {
            "variance_explained": 1.6,
            "description": "Classical humanist tradition continues primarily in education and scholarship while romanticism offers competing vision of human nature.",
            "key_manifestations": [
              "Wilhelm von Humboldt's educational reforms",
              "Classical education in European universities",
              "Philological approaches to textual criticism",
              "Neo-humanism in German intellectual circles"
            ]
          },
          "1900": {
            "variance_explained": 1.2,
            "description": "Modern humanism emerges distinct from classical tradition, emphasizing human values in secular context rather than classical learning.",
            "key_manifestations": [
              "Irving Babbitt's new humanism movement",
              "Secular humanist manifestos",
              "Renaissance studies as specialized academic field",
              "Existential humanism of Jean-Paul Sartre"
            ]
          },
          "2000": {
            "variance_explained": 0.9,
            "description": "Contemporary humanism focuses on ethical frameworks and human rights rather than classical tradition, with historical Renaissance humanism studied as cultural phenomenon.",
            "key_manifestations": [
              "Digital humanities projects preserving Renaissance texts",
              "Secular humanist organizations promoting reason and ethics",
              "Renaissance studies programs at major universities",
              "Humanistic psychology emphasizing human potential"
            ]
          }
        }
      },
      "4_religious_reformations": {
        "name": "Religious Reformations",
        "description": "Religious Reformations refer to significant movements challenging established religious doctrines and institutions. Spanning from the Protestant Reformation to various modern religious revivals, these reforms have reshaped societal values, politics, and cultural norms.",
        "trajectory": {
          "1000": {
            "variance_explained": 3.2,
            "description": "Early medieval Christendom shows relative unity under Catholic Church with reform movements primarily within monastic contexts.",
            "key_manifestations": [
              "Cluniac reforms revitalizing monasticism",
              "Great Schism between Eastern and Western Christianity",
              "Limited lay religious movements",
              "Religious unity enforced through ecclesiastical authority"
            ]
          },
          "1100": {
            "variance_explained": 3.8,
            "description": "Reform movements gain momentum with major institutional church reforms and emerging challenges to ecclesiastical authority.",
            "key_manifestations": [
              "Gregorian Reforms addressing simony and clerical marriage",
              "Cistercian monastic reform movement",
              "Cathar and Waldensian movements challenging church practices",
              "Investiture Controversy between papal and secular authorities"
            ]
          },
          "1200": {
            "variance_explained": 4.5,
            "description": "Religious diversity increases with new mendicant orders and lay movements, some challenging church authority.",
            "key_manifestations": [
              "Foundation of Franciscan and Dominican orders",
              "Albigensian Crusade against heretical movements",
              "Fourth Lateran Council instituting reforms",
              "Early inquisitions established to combat heresy"
            ]
          },
          "1300": {
            "variance_explained": 4.9,
            "description": "Church authority weakens with Avignon papacy while reform movements and mystical traditions gain influence.",
            "key_manifestations": [
              "Western Schism with multiple competing popes",
              "John Wycliffe's proto-Protestant criticisms",
              "Mystical movements emphasizing direct religious experience",
              "Jan Hus's reform movement in Bohemia"
            ]
          },
          "1400": {
            "variance_explained": 5.2,
            "description": "Pre-Reformation period sees intensified criticism of church practices and calls for substantial reform.",
            "key_manifestations": [
              "Conciliar movement challenging papal supremacy",
              "Hussite Wars in Bohemia",
              "Widespread criticism of clerical abuses",
              "Devotio Moderna movement emphasizing personal piety"
            ]
          },
          "1500": {
            "variance_explained": 7.3,
            "description": "Protestant Reformation dramatically fractures Western Christianity, creating competing religious frameworks and institutions.",
            "key_manifestations": [
              "Martin Luther's Ninety-Five Theses and subsequent reforms",
              "John Calvin's Institutes of the Christian Religion",
              "English Reformation under Henry VIII",
              "Council of Trent launching Catholic Counter-Reformation"
            ]
          },
          "1600": {
            "variance_explained": 6.5,
            "description": "Post-Reformation religious conflicts reshape European political landscape while religious diversity becomes permanent feature.",
            "key_manifestations": [
              "Thirty Years' War devastates Central Europe",
              "Puritan movement in England",
              "Jesuit global missionary activities",
              "Peace of Westphalia establishing principle of cuius regio, eius religio"
            ]
          },
          "1700": {
            "variance_explained": 5.2,
            "description": "Religious intensity moderates in some regions while evangelical revival movements emerge in others.",
            "key_manifestations": [
              "Pietism in Lutheran territories",
              "Methodist movement under John Wesley",
              "First Great Awakening in America",
              "Enlightenment critiques of religious authority"
            ]
          },
          "1800": {
            "variance_explained": 4.7,
            "description": "Secularization challenges religious frameworks in Europe while evangelical movements gain strength in America.",
            "key_manifestations": [
              "Second Great Awakening in the United States",
              "Catholic revival movements in France",
              "Oxford Movement in Anglicanism",
              "Growth of missionary movements"
            ]
          },
          "1900": {
            "variance_explained": 3.8,
            "description": "Religious authority declines in Europe while denominations proliferate globally and adapt to modernizing societies.",
            "key_manifestations": [
              "Pentecostal movement beginning at Azusa Street Revival",
              "Fundamentalist-Modernist controversy",
              "Vatican II reforms in Catholicism",
              "Ecumenical movement seeking Christian unity"
            ]
          },
          "2000": {
            "variance_explained": 3.2,
            "description": "Religion remains vital force globally but increasingly pluralistic and personalized, with declining institutional authority in Western societies.",
            "key_manifestations": [
              "Growth of non-denominational Christianity",
              "Secularization in Western Europe",
              "Rise of spiritual-but-not-religious identification",
              "Evangelical and Pentecostal growth in Global South"
            ]
          }
        }
      },
      "5_industrial_technology_advancements": {
        "name": "Industrial and Technology Advancements",
        "description": "Industrial and Technology Advancements encompass the transformative developments in machinery, manufacturing, and information technology that revolutionized economies, societies, and daily life from the Industrial Revolution onward.",
        "trajectory": {
          "1000": {
            "variance_explained": 0.4,
            "description": "Medieval technology primarily focused on agricultural improvements, water power, and construction techniques.",
            "key_manifestations": [
              "Watermill technology spreading across Europe",
              "Heavy plow improving agricultural productivity",
              "Three-field crop rotation system",
              "Cathedral construction techniques"
            ]
          },
          "1100": {
            "variance_explained": 0.6,
            "description": "Incremental technological improvements in textiles, metallurgy, and military technology.",
            "key_manifestations": [
              "Windmill technology spreading through Europe",
              "Developments in iron smelting techniques",
              "Mechanical clock prototypes appearing",
              "Improvements in ship design"
            ]
          },
          "1200": {
            "variance_explained": 0.8,
            "description": "Growing sophistication in mechanical devices and manufacturing techniques supporting urban economies.",
            "key_manifestations": [
              "Mechanical clock development",
              "Advancements in textile production",
              "Improved metallurgical techniques",
              "Water-powered industrial hammers and saws"
            ]
          },
          "1300": {
            "variance_explained": 1.0,
            "description": "Late medieval technological innovations in weaponry, navigation, and mechanical devices despite pandemic disruptions.",
            "key_manifestations": [
              "Early firearms development",
              "Advanced shipbuilding techniques",
              "Mechanical astronomical models",
              "Water management and mining technologies"
            ]
          },
          "1400": {
            "variance_explained": 1.3,
            "description": "Renaissance engineering innovations and the revolutionary printing press transform information transmission.",
            "key_manifestations": [
              "Gutenberg's printing press revolution",
              "Improvements in lens grinding and optics",
              "Advanced mechanical clockworks",
              "Leonardo da Vinci's engineering designs"
            ]
          },
          "1500": {
            "variance_explained": 1.8,
            "description": "Technological advancements support global exploration and military developments, with printed materials accelerating knowledge distribution.",
            "key_manifestations": [
              "Improved navigational instruments",
              "Advanced shipbuilding enabling global voyages",
              "Metallurgical improvements for cannons and firearms",
              "Widespread adoption of printing technology"
            ]
          },
          "1600": {
            "variance_explained": 2.5,
            "description": "Scientific instrumentation improves while early energy technologies prepare ground for later industrial revolution.",
            "key_manifestations": [
              "Telescope and microscope development",
              "Early steam engine experiments",
              "Agricultural improvements and innovations",
              "Advanced mathematical and scientific instruments"
            ]
          },
          "1700": {
            "variance_explained": 4.6,
            "description": "Industrial Revolution begins with breakthrough technologies transforming textile production and mining.",
            "key_manifestations": [
              "James Watt's improved steam engine",
              "Spinning jenny revolutionizing textile production",
              "Coal mining technological improvements",
              "Early factory system development"
            ]
          },
          "1800": {
            "variance_explained": 6.8,
            "description": "Industrial technology transforms transportation, manufacturing, and communications on unprecedented scale.",
            "key_manifestations": [
              "Railroad networks revolutionizing transportation",
              "Telegraph enabling instant long-distance communication",
              "Steel production advancements",
              "Early electrical technologies emerging"
            ]
          },
          "1900": {
            "variance_explained": 7.5,
            "description": "Technological revolution accelerates with electricity, automobiles, aviation, and early computing transforming society.",
            "key_manifestations": [
              "Mass production and assembly line manufacturing",
              "Electrical grid development and household electrification",
              "Telephone and radio communication networks",
              "Early electronic computing devices"
            ]
          },
          "2000": {
            "variance_explained": 8.9,
            "description": "Digital revolution transforms information processing, communications, and virtually all aspects of human society.",
            "key_manifestations": [
              "Internet and World Wide Web development",
              "Smartphone technology integration",
              "Genome sequencing and genetic engineering",
              "Artificial intelligence and machine learning advances"
            ]
          }
        }
      }
    }
  };

  
  const philoSciPreset: PresetConfig = {
    id: "philosophy_of_science",
    name: "Philosophy of Science",
    description: "European discovery of the philosophy of science (1000-2000)",
    parameters: {
      startYear: "1000",
      endYear: "2000",
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 100,
      model: "o1-mini",
      context: "The European discovery of the philosophy of science"
    },
    cachedResult: philoSciData
  };
  
  export default philoSciPreset; 
  
