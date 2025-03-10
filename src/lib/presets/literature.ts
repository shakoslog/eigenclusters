import { PresetConfig } from './types';

// Cold War analysis data moved directly into this file
const litereatureData = 
{
    "metadata": {
      "period": "1840-1960",
      "interval": "20 years",
      "cluster_range": "1-5",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_psychological_interiority [↗] (9.5%)",
        "2_social_critique_and_class_consciousness [↗] (8.5%)",
        "3_gender_and_domestic_sphere [→] (8.0%)",
        "4_formal_experimentation_and_narrative_technique [↗] (7.5%)",
        "5_modernist_fragmentation [↗] (7.0%)",
        "6_empire_and_otherness [↘] (6.5%)",
        "7_naturalism_and_determinism [→] (6.0%)",
        "8_moral_ambiguity_and_ethics [↗] (5.5%)",
        "9_victorian_sensibility [↘] (5.0%)",
        "10_romantic_idealism_legacy [↘] (4.5%)",
        "11_industrial_modernity [↗] (4.0%)",
        "12_existential_crisis_and_meaning [↗] (3.5%)",
        "13_war_and_collective_trauma [↗] (3.0%)",
        "14_spirituality_and_secularism [→] (2.5%)",
        "15_human_vs_nature_dialectic [↘] (2.0%)",
        "16_marriage_as_institution [↘] (1.8%)",
        "17_scientific_rationalism_in_literature [↗] (1.5%)",
        "18_bildungsroman_tradition [→] (1.3%)",
        "19_provincial_vs_cosmopolitan [↗] (1.0%)",
        "20_literary_symbolism [↗] (0.9%)"
      ]
    },
    "clusters": {
      "1_psychological_interiority": {
        "name": "Psychological Interiority",
        "description": "This cluster represents literature's growing focus on characters' inner lives, consciousness, and psychological depth. It traces the development from early character studies through stream-of-consciousness techniques, showing how novelists increasingly explored the complexity of human psychology and subjective experience.",
        "trajectory": {
          "1840": {
            "variance_explained": 4.5,
            "description": "Early Victorian novels begin experimenting with psychological depth beyond simple character types, introducing more complex interior lives through narrative techniques like free indirect discourse.",
            "key_manifestations": [
              "Charlotte Brontë's 'Jane Eyre' (1847) with its first-person narration of inner thought",
              "Nascent psychological realism in Dickens's 'David Copperfield' (1850)",
              "Emily Brontë's exploration of obsession in 'Wuthering Heights' (1847)",
              "Elizabeth Gaskell's social-psychological portraits in 'Mary Barton' (1848)"
            ]
          },
          "1860": {
            "variance_explained": 6.0,
            "description": "Psychological realism advances significantly as novelists develop more sophisticated techniques for depicting consciousness, moral complexity, and emotional depth.",
            "key_manifestations": [
              "George Eliot's 'Middlemarch' (1871-72) with its unprecedented psychological complexity",
              "Fyodor Dostoevsky's 'Crime and Punishment' (1866) examining psychological torment",
              "Gustave Flaubert's 'Madame Bovary' (1856) portraying Emma's inner fantasies and despair",
              "Anthony Trollope's character studies in the Barsetshire novels (1855-1867)"
            ]
          },
          "1880": {
            "variance_explained": 7.5,
            "description": "Psychological depth becomes central to literary achievement as novelists refine techniques for representing consciousness and subjective experience.",
            "key_manifestations": [
              "Henry James's 'The Portrait of a Lady' (1881) with its intricate psychological portraiture",
              "Leo Tolstoy's 'Anna Karenina' (1877) exploring intricate psychological motivations",
              "Thomas Hardy's 'Tess of the d'Urbervilles' (1891) examining psychological suffering",
              "Henry James's 'The Turn of the Screw' (1898) blending psychology with the supernatural"
            ]
          },
          "1900": {
            "variance_explained": 9.0,
            "description": "Revolutionary techniques for depicting consciousness emerge as novelists experiment with stream-of-consciousness, interior monologue, and fragmented perception.",
            "key_manifestations": [
              "James Joyce's 'Ulysses' (1922) revolutionizing stream-of-consciousness technique",
              "Virginia Woolf's 'To the Lighthouse' (1927) rendering consciousness through interior time",
              "Marcel Proust's 'In Search of Lost Time' (1913-27) exploring memory and subjective time",
              "Dorothy Richardson's 'Pilgrimage' series (1915-1938) pioneering stream-of-consciousness"
            ]
          },
          "1920": {
            "variance_explained": 10.5,
            "description": "Psychological interiority reaches peak influence as modernist techniques for representing consciousness become central to literary innovation.",
            "key_manifestations": [
              "Virginia Woolf's 'Mrs. Dalloway' (1925) with its fluid movement between minds",
              "William Faulkner's 'The Sound and the Fury' (1929) using multiple psychological perspectives",
              "Franz Kafka's 'The Trial' (1925) portraying psychological alienation",
              "Thomas Mann's 'The Magic Mountain' (1924) exploring philosophical-psychological states"
            ]
          },
          "1940": {
            "variance_explained": 11.0,
            "description": "Psychological techniques mature further with the influence of psychoanalysis, existentialism, and the trauma of war shaping new explorations of the mind.",
            "key_manifestations": [
              "Jean-Paul Sartre's 'Nausea' (1938) depicting existential consciousness",
              "Albert Camus's 'The Stranger' (1942) portraying psychological alienation",
              "Vasily Grossman's 'Life and Fate' (1959) examining psychological responses to totalitarianism",
              "Samuel Beckett's 'Molloy' (1951) pushing psychological fragmentation to new extremes"
            ]
          },
          "1960": {
            "variance_explained": 10.0,
            "description": "Psychological interiority remains central while evolving in response to postmodern skepticism about unified consciousness and stable identity.",
            "key_manifestations": [
              "Vladimir Nabokov's 'Pale Fire' (1962) playing with unreliable psychological narration",
              "Sylvia Plath's 'The Bell Jar' (1963) portraying psychological breakdown",
              "John Fowles's 'The Magus' (1965) exploring psychological manipulation",
              "Philip Roth's 'Portnoy's Complaint' (1969) using psychoanalysis as narrative frame"
            ]
          }
        }
      },
      "2_social_critique_and_class_consciousness": {
        "name": "Social Critique and Class Consciousness",
        "description": "This cluster traces how novelists engaged with social inequalities, class structures, and systemic injustice. It follows the development from Victorian social problem novels through naturalism to modernist and post-war critiques of social systems, showing literature's role in revealing and challenging societal structures.",
        "trajectory": {
          "1840": {
            "variance_explained": 7.0,
            "description": "Victorian novelists establish the social problem novel, directly addressing industrial poverty, class division, and institutional failures through narrative fiction.",
            "key_manifestations": [
              "Charles Dickens's 'Bleak House' (1853) critiquing the legal system and social neglect",
              "Elizabeth Gaskell's 'North and South' (1855) examining industrial class conflict",
              "Benjamin Disraeli's 'Sybil, or The Two Nations' (1845) on England's class divide",
              "Friedrich Engels's 'The Condition of the Working Class in England' (1845) influencing fiction"
            ]
          },
          "1860": {
            "variance_explained": 7.5,
            "description": "Social critique deepens with more sophisticated analysis of how economic and social systems shape human lives and relationships.",
            "key_manifestations": [
              "George Eliot's 'Middlemarch' (1871-72) examining provincial social structures",
              "Leo Tolstoy's early exploration of peasant life and aristocratic responsibility",
              "Anthony Trollope's 'The Way We Live Now' (1875) critiquing financial corruption",
              "Émile Zola's 'L'Assommoir' (1877) depicting working-class suffering"
            ]
          },
          "1880": {
            "variance_explained": 8.0,
            "description": "Naturalism emerges alongside more nuanced social critique as writers examine how environment and social forces determine individual fates.",
            "key_manifestations": [
              "Émile Zola's Rougon-Macquart cycle (1871-1893) analyzing social determinism",
              "Leo Tolstoy's 'Anna Karenina' (1877) contrasting aristocratic life with peasant authenticity",
              "Henry James's 'The Princess Casamassima' (1886) addressing revolutionary politics",
              "Thomas Hardy's 'Jude the Obscure' (1895) critiquing class barriers to education"
            ]
          },
          "1900": {
            "variance_explained": 8.5,
            "description": "Social critique expands to address imperialism, capitalism's psychological effects, and urban alienation as social systems grow more complex.",
            "key_manifestations": [
              "Joseph Conrad's 'Heart of Darkness' (1899) examining colonial exploitation",
              "E.M. Forster's 'Howards End' (1910) with its theme of 'only connect' across class divides",
              "Upton Sinclair's 'The Jungle' (1906) exposing industrial working conditions",
              "D.H. Lawrence's 'Sons and Lovers' (1913) depicting working-class mining communities"
            ]
          },
          "1920": {
            "variance_explained": 9.0,
            "description": "Post-war literature grapples with disillusionment, systemic failure, and the decay of traditional social structures as class consciousness evolves.",
            "key_manifestations": [
              "F. Scott Fitzgerald's 'The Great Gatsby' (1925) critiquing American class mythology",
              "Virginia Woolf's 'Mrs. Dalloway' (1925) examining post-war social fragmentation",
              "Thomas Mann's 'The Magic Mountain' (1924) as allegory of pre-war European society",
              "John Dos Passos's 'U.S.A. Trilogy' (1930-1936) using experimental techniques for social critique"
            ]
          },
          "1940": {
            "variance_explained": 9.5,
            "description": "Literature confronts totalitarianism, genocide, and systemic oppression as social critique addresses the most catastrophic failures of modern social systems.",
            "key_manifestations": [
              "Vasily Grossman's 'Life and Fate' (1959) examining Stalinism and Nazism as parallel systems",
              "George Orwell's 'Nineteen Eighty-Four' (1949) warning against totalitarian control",
              "Albert Camus's 'The Plague' (1947) as allegory of societal response to crisis",
              "Richard Wright's 'Native Son' (1940) addressing racial oppression in America"
            ]
          },
          "1960": {
            "variance_explained": 8.5,
            "description": "Social critique evolves to address post-colonial societies, consumerism, and new forms of alienation while questioning traditional narrative authority.",
            "key_manifestations": [
              "Chinua Achebe's 'Things Fall Apart' (1958) examining colonial disruption",
              "Doris Lessing's 'The Golden Notebook' (1962) analyzing gender politics and leftist disillusionment",
              "Alexander Solzhenitsyn's 'One Day in the Life of Ivan Denisovich' (1962) exposing the gulag system",
              "Ken Kesey's 'One Flew Over the Cuckoo's Nest' (1962) critiquing institutional control"
            ]
          }
        }
      },
      "3_gender_and_domestic_sphere": {
        "name": "Gender and Domestic Sphere",
        "description": "This cluster examines how literature portrayed and critiqued gender roles, marriage, and domestic life. It traces the evolution from early Victorian explorations of women's limited options through increasingly explicit feminist critique, showing how novels exposed constraints on women's lives and imagined alternatives.",
        "trajectory": {
          "1840": {
            "variance_explained": 6.0,
            "description": "Early Victorian novelists begin exploring female experience within domestic constraints, often through marriage plots that subtly question gender limitations.",
            "key_manifestations": [
              "Charlotte Brontë's 'Jane Eyre' (1847) depicting a woman seeking independence and equality",
              "Elizabeth Gaskell's 'Mary Barton' (1848) showing working women's struggles",
              "Anne Brontë's 'The Tenant of Wildfell Hall' (1848) addressing marital abuse",
              "Charles Dickens's domestic ideals in 'David Copperfield' (1850)"
            ]
          },
          "1860": {
            "variance_explained": 7.0,
            "description": "Novels provide increasingly sophisticated analysis of marriage, domesticity, and gender constraints as writers examine women's limited options more explicitly.",
            "key_manifestations": [
              "George Eliot's 'Middlemarch' (1871-72) exploring women's intellectual ambitions and marital disappointments",
              "Gustave Flaubert's 'Madame Bovary' (1856) examining a woman trapped in provincial marriage",
              "Anthony Trollope's marriage plots examining female options in the Barsetshire novels",
              "Louisa May Alcott's 'Little Women' (1868) portraying female development"
            ]
          },
          "1880": {
            "variance_explained": 8.0,
            "description": "The 'Woman Question' becomes more central to literature as novels directly address marriage as institution, female sexuality, and constraints on women's ambitions.",
            "key_manifestations": [
              "Henry James's 'The Portrait of a Lady' (1881) analyzing a woman's fate after choosing wrongly",
              "Leo Tolstoy's 'Anna Karenina' (1877) examining a woman who defies social conventions",
              "Henrik Ibsen's 'A Doll's House' (1879) questioning domestic gender roles",
              "Thomas Hardy's 'Tess of the d'Urbervilles' (1891) addressing sexual double standards"
            ]
          },
          "1900": {
            "variance_explained": 8.5,
            "description": "The New Woman emerges in literature as feminist movements influence fiction, with more radical critiques of marriage and domestic constraints.",
            "key_manifestations": [
              "Kate Chopin's 'The Awakening' (1899) depicting female rebellion against domestic roles",
              "Virginia Woolf's early exploration of women's artistic frustration",
              "Edith Wharton's 'The House of Mirth' (1905) examining women's economic dependence",
              "Henry James's 'The Bostonians' (1886) engaging with early feminism"
            ]
          },
          "1920": {
            "variance_explained": 9.0,
            "description": "Modernist techniques enable more radical explorations of gender, sexuality, and domestic alienation as feminist perspectives gain literary prominence.",
            "key_manifestations": [
              "Virginia Woolf's 'To the Lighthouse' (1927) analyzing the Ramsay family through gendered perspectives",
              "Virginia Woolf's 'A Room of One's Own' (1929) examining women's literary history",
              "D.H. Lawrence's 'Women in Love' (1920) exploring changing gender dynamics",
              "Nella Larsen's 'Passing' (1929) examining race, gender, and identity"
            ]
          },
          "1940": {
            "variance_explained": 8.5,
            "description": "Post-war literature addresses changing gender roles, continued domestic constraints, and the contradictions of women's lives in mid-20th century society.",
            "key_manifestations": [
              "Simone de Beauvoir's 'The Second Sex' (1949) influencing fictional portrayals",
              "Doris Lessing's early fiction examining maternal ambivalence",
              "Jean Rhys's 'Wide Sargasso Sea' (begun in 1940s, published 1966) revisiting Bertha Mason",
              "Carson McCullers's 'The Member of the Wedding' (1946) examining female adolescence"
            ]
          },
          "1960": {
            "variance_explained": 9.5,
            "description": "Second-wave feminism transforms literary explorations of gender, with more radical critiques of domesticity and patriarchy entering mainstream fiction.",
            "key_manifestations": [
              "Doris Lessing's 'The Golden Notebook' (1962) examining female consciousness",
              "Sylvia Plath's 'The Bell Jar' (1963) depicting domestic ideology as oppressive",
              "Betty Friedan's 'The Feminine Mystique' (1963) influencing fictional portrayals",
              "Margaret Drabble's 'The Millstone' (1965) examining single motherhood"
            ]
          }
        }
      },
      "4_formal_experimentation_and_narrative_technique": {
        "name": "Formal Experimentation and Narrative Technique",
        "description": "This cluster charts the evolution of narrative techniques and formal innovations in the novel, from nineteenth-century experiments with perspective and structure through modernist fragmentation to postmodern narrative complexity, showing how literary form itself became a site of artistic exploration.",
        "trajectory": {
          "1840": {
            "variance_explained": 3.0,
            "description": "Early Victorian novelists experiment with narration beyond simple first or third person, developing techniques like multi-vocal narration and early free indirect discourse.",
            "key_manifestations": [
              "Charlotte Brontë's first-person immediacy in 'Jane Eyre' (1847)",
              "Charles Dickens's experimentation with serialization and multiple plots in 'Bleak House' (1853)",
              "Emily Brontë's complex narrative framing in 'Wuthering Heights' (1847)",
              "William Thackeray's self-conscious narrator in 'Vanity Fair' (1848)"
            ]
          },
          "1860": {
            "variance_explained": 4.0,
            "description": "Narrative technique becomes more sophisticated as novelists develop subtle means of representing consciousness and manage increasingly complex structures.",
            "key_manifestations": [
              "George Eliot's refined free indirect discourse in 'Middlemarch' (1871-72)",
              "Gustave Flaubert's stylistic precision and perspective shifts in 'Madame Bovary' (1856)",
              "Leo Tolstoy's 'wandering point of view' in 'War and Peace' (1869)",
              "Wilkie Collins's multiple narrators in 'The Moonstone' (1868)"
            ]
          },
          "1880": {
            "variance_explained": 5.5,
            "description": "Novelists increasingly experiment with narrative limitations, unreliability, and refined psychological techniques that question objective representation.",
            "key_manifestations": [
              "Henry James's center of consciousness technique in 'The Portrait of a Lady' (1881)",
              "Henry James's 'The Art of Fiction' (1884) theorizing narrative technique",
              "Thomas Hardy's narrative experimentation with time in 'Tess of the d'Urbervilles' (1891)",
              "Joseph Conrad's developing frame narratives in early fiction"
            ]
          },
          "1900": {
            "variance_explained": 7.5,
            "description": "Revolutionary formal experiments emerge as novelists break conventional chronology, perspective, and narrative coherence to represent modern experience.",
            "key_manifestations": [
              "Joseph Conrad's nested narration in 'Heart of Darkness' (1899)",
              "Henry James's late style developing interior perspective",
              "Marcel Proust's innovative treatment of time and memory in 'In Search of Lost Time' (beginning 1913)",
              "Early experiments with stream-of-consciousness technique"
            ]
          },
          "1920": {
            "variance_explained": 9.5,
            "description": "Modernist formal experimentation reaches its peak, with radical innovations in representing consciousness, fragmentation, and subjective experience redefining the novel's possibilities.",
            "key_manifestations": [
              "James Joyce's 'Ulysses' (1922) revolutionizing narrative technique",
              "Virginia Woolf's fluid consciousness in 'To the Lighthouse' (1927)",
              "William Faulkner's multiple perspectives in 'The Sound and the Fury' (1929)",
              "Thomas Mann's complex time and symbolism in 'The Magic Mountain' (1924)"
            ]
          },
          "1940": {
            "variance_explained": 10.0,
            "description": "Narrative experimentation continues to evolve, influenced by film techniques, psychoanalysis, and existentialism to create new forms of literary expression.",
            "key_manifestations": [
              "William Faulkner's complex chronology in 'Absalom, Absalom!' (1936)",
              "Vasily Grossman's panoramic technique in 'Life and Fate' (1959)",
              "Samuel Beckett's radical narrative reduction in the Three Novels",
              "Albert Camus's affectless narration in 'The Stranger' (1942)"
            ]
          },
          "1960": {
            "variance_explained": 11.0,
            "description": "Postmodern techniques emerge to challenge narrative authority, textual stability, and representational assumptions, pushing formal experimentation in new directions.",
            "key_manifestations": [
              "Vladimir Nabokov's elaborate narrative games in 'Pale Fire' (1962)",
              "John Barth's metafictional techniques in 'Lost in the Funhouse' (1968)",
              "Italo Calvino's experimental structures in 'Invisible Cities' (1972)",
              "Gabriel García Márquez's magical realism in 'One Hundred Years of Solitude' (1967)"
            ]
          }
        }
      },
      "5_modernist_fragmentation": {
        "name": "Modernist Fragmentation",
        "description": "This cluster examines the modernist movement's aesthetic of fragmentation, discontinuity, and subjectivity that emerged in response to historical ruptures and changing perceptions of reality. It traces how literature reflected a world perceived as increasingly broken, multiple, and unable to be captured through traditional forms.",
        "trajectory": {
          "1840": {
            "variance_explained": 1.0,
            "description": "Pre-modernist literature generally maintains faith in narrative coherence and shared social reality, though early seeds of fragmentation appear in some experimental works.",
            "key_manifestations": [
              "Isolated experiments with discontinuous narrative",
              "Early skepticism about unified perception in some Romantic works",
              "Thomas Carlyle's 'Sartor Resartus' (1836) with its fragmented structure",
              "Edgar Allan Poe's psychological fragmentation in short stories"
            ]
          },
          "1860": {
            "variance_explained": 1.5,
            "description": "Literary realism remains dominant, but some writers begin exploring unreliable perception, subjective experience, and the limitations of conventional narrative.",
            "key_manifestations": [
              "Gustave Flaubert's subtle subjectivity in 'Madame Bovary' (1856)",
              "Lewis Carroll's 'Alice's Adventures in Wonderland' (1865) disrupting logical reality",
              "Early symbolist poetry questioning representational transparency",
              "Dostoevsky's psychological extremity in 'Notes from Underground' (1864)"
            ]
          },
          "1880": {
            "variance_explained": 2.5,
            "description": "Proto-modernist elements emerge as writers explore psychological extremity, perceptual limitations, and the inadequacy of conventional forms to capture modern experience.",
            "key_manifestations": [
              "Henry James's late style moving toward psychological complexity",
              "Symbolist poetry challenging representational assumptions",
              "Joseph Conrad's early experiments with disjunctive narrative",
              "Nietzsche's philosophical challenge to unified truth"
            ]
          },
          "1900": {
            "variance_explained": 5.0,
            "description": "Modernist fragmentation emerges as a distinct aesthetic approach, with World War I accelerating the sense of cultural rupture and the need for new forms of expression.",
            "key_manifestations": [
              "Joseph Conrad's 'Heart of Darkness' (1899) with its nested unreliable narration",
              "Early T.S. Eliot poetry challenging poetic coherence",
              "Marcel Proust's subjective time in 'In Search of Lost Time' (beginning 1913)",
              "Franz Kafka's 'The Metamorphosis' (1915) disrupting realistic convention"
            ]
          },
          "1920": {
            "variance_explained": 9.0,
            "description": "High modernism embraces fragmentation as its defining aesthetic, with works that deliberately fracture narrative, chronology, and perspective to represent a broken world.",
            "key_manifestations": [
              "T.S. Eliot's 'The Waste Land' (1922) as the quintessence of literary fragmentation",
              "James Joyce's 'Ulysses' (1922) with its stylistic multiplicity",
              "Virginia Woolf's 'To the Lighthouse' (1927) fragmenting conventional time",
              "William Faulkner's fractured perspectives in 'The Sound and the Fury' (1929)"
            ]
          },
          "1940": {
            "variance_explained": 10.5,
            "description": "Modernist fragmentation evolves in response to World War II and totalitarianism, with even more radical techniques reflecting a world perceived as fundamentally broken.",
            "key_manifestations": [
              "Samuel Beckett's disintegrating prose in the Three Novels",
              "T.S. Eliot's 'Four Quartets' (1943) exploring fragmented time",
              "Vasily Grossman's mosaic structure in 'Life and Fate' (1959)",
              "William Burroughs's early cut-up experiments"
            ]
          },
          "1960": {
            "variance_explained": 11.5,
            "description": "Modernist fragmentation evolves into postmodern techniques that further question coherence, continuity, and the possibility of stable meaning in literary texts.",
            "key_manifestations": [
              "Thomas Pynchon's 'The Crying of Lot 49' (1966) with its entropic uncertainty",
              "John Barth's 'Lost in the Funhouse' (1968) fragmenting narrative convention",
              "Julio Cortázar's 'Hopscotch' (1963) with its multiple reading paths",
              "Kurt Vonnegut's temporal fragmentation in 'Slaughterhouse-Five' (1969)"
            ]
          }
        }
      }
    }
  };

const literaturePreset: PresetConfig = {
  id: 'Middlemarch ',
  name: 'Middlemarch & Literary Analysis',
  description: 'Literary works',
  parameters: {
    startYear: '1780',
    endYear: '1900',
    clusterStart: 1,
    clusterEnd: 5,
    periodicity: 20,
    context: 'Jane Eyre, Middlemarch, To The Lighthouse, Bleak House, Portrait of a Lady, Anna Karenina, Life and Fate, Heart of Darkness, Madame Bovary, and The Magic Mountain.',
    model: 'o1-mini'
  },
  cachedResult: litereatureData
};

export default literaturePreset; 