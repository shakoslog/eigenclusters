import { PresetConfig } from './types';

// Cold War analysis data moved directly into this file
const litereatureData = 
{
    "metadata": {
      "period": "1780-1900",
      "interval": "20 years",
      "cluster_range": "1-5",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_psychological_interiority [↗] (8.5%)",
        "2_social_critique_and_class_consciousness [↗] (8.0%)",
        "3_romantic_idealism [↘] (7.5%)",
        "4_victorian_sensibility [→] (7.0%)",
        "5_gender_and_domestic_sphere [↗] (6.5%)",
        "6_formal_experimentation [↗] (6.0%)",
        "7_empire_and_otherness [↘] (5.5%)",
        "8_naturalism_and_determinism [↗] (5.0%)",
        "9_moral_ambiguity_and_ethics [→] (4.5%)",
        "10_scientific_rationalism [↗] (4.0%)",
        "11_industrial_modernity [↗] (3.5%)",
        "12_spirituality_and_secularism [↘] (3.0%)",
        "13_human_vs_nature_dialectic [↘] (2.5%)",
        "14_marriage_as_institution [→] (2.0%)",
        "15_bildungsroman_tradition [↗] (1.8%)",
        "16_provincial_vs_cosmopolitan [→] (1.5%)",
        "17_gothic_imagination [↘] (1.2%)",
        "18_historical_consciousness [↗] (1.0%)",
        "19_literary_symbolism [↗] (0.8%)",
        "20_epistolary_tradition [↘] (0.7%)"
      ]
    },
    "clusters": {
      "1_psychological_interiority": {
        "name": "Psychological Interiority",
        "description": "This cluster represents literature's growing focus on characters' inner lives, consciousness, and psychological depth. It traces the development from sentimentalism through early psychological realism to the more sophisticated explorations of subjective experience that would later influence modernism.",
        "trajectory": {
          "1780": {
            "salience_share": 2.5,
            "description": "Early experiments with subjectivity appear in sentimental novels and Gothic fiction, where emotional states are foregrounded but still expressed through conventional language and external manifestations.",
            "key_manifestations": [
              "Fanny Burney's 'Evelina' (1778) exploring a young woman's anxieties and social observations",
              "Johann Wolfgang von Goethe's 'The Sorrows of Young Werther' (1774) examining extreme emotional states",
              "Ann Radcliffe's 'The Mysteries of Udolpho' (1794) depicting psychological terror",
              "Jean-Jacques Rousseau's 'Confessions' (completed 1770, published 1782) pioneering introspective autobiography"
            ]
          },
          "1800": {
            "salience_share": 3.5,
            "description": "Romanticism intensifies literary interest in individual consciousness, emotional complexity, and psychological extremity, with greater attention to internal states and subjective perception.",
            "key_manifestations": [
              "William Wordsworth's 'The Prelude' (begun 1798) examining the growth of the poet's mind",
              "Mary Shelley's 'Frankenstein' (1818) exploring psychological alienation and monstrosity",
              "Jane Austen's 'Sense and Sensibility' (1811) contrasting emotional temperaments",
              "Samuel Taylor Coleridge's 'Christabel' (1816) and 'Kubla Khan' (1816) depicting dreamlike mental states"
            ]
          },
          "1820": {
            "salience_share": 4.5,
            "description": "Novelists develop more sophisticated techniques for depicting consciousness as literary realism emerges, with growing attention to psychological motivation and inner conflict.",
            "key_manifestations": [
              "Jane Austen's 'Persuasion' (1817) with its nuanced free indirect discourse",
              "James Hogg's 'The Private Memoirs and Confessions of a Justified Sinner' (1824) exploring psychological doubling",
              "Stendhal's 'The Red and the Black' (1830) analyzing ambition and self-deception",
              "Mary Shelley's 'The Last Man' (1826) examining isolation and melancholy"
            ]
          },
          "1840": {
            "salience_share": 6.0,
            "description": "Victorian novelists increasingly emphasize psychological depth as essential to realistic characterization, developing more nuanced techniques for representing inner life.",
            "key_manifestations": [
              "Charlotte Brontë's 'Jane Eyre' (1847) with its first-person narration of inner thought",
              "Emily Brontë's exploration of obsession in 'Wuthering Heights' (1847)",
              "Charles Dickens's psychological complexity in 'David Copperfield' (1849-50)",
              "Elizabeth Gaskell's social-psychological portraits in 'Mary Barton' (1848)"
            ]
          },
          "1860": {
            "salience_share": 7.5,
            "description": "Psychological realism advances significantly as novelists develop more sophisticated techniques for depicting consciousness, moral complexity, and emotional depth.",
            "key_manifestations": [
              "George Eliot's 'The Mill on the Floss' (1860) examining psychological development",
              "Fyodor Dostoevsky's 'Crime and Punishment' (1866) analyzing psychological torment",
              "Gustave Flaubert's 'Madame Bovary' (1857) portraying Emma's inner fantasies and despair",
              "Anthony Trollope's character studies in the Barsetshire novels (1855-1867)"
            ]
          },
          "1880": {
            "salience_share": 8.5,
            "description": "Psychological depth becomes central to literary achievement as novelists refine techniques for representing consciousness and subjective experience.",
            "key_manifestations": [
              "Henry James's 'The Portrait of a Lady' (1881) with its intricate psychological portraiture",
              "George Eliot's 'Daniel Deronda' (1876) exploring complex motivations and desires",
              "Thomas Hardy's 'The Return of the Native' (1878) examining psychological suffering",
              "Fyodor Dostoevsky's 'The Brothers Karamazov' (1880) portraying psychological complexity"
            ]
          },
          "1900": {
            "salience_share": 9.5,
            "description": "Late Victorian and early modernist writers push psychological exploration further, laying groundwork for the revolutionary techniques of consciousness representation that would emerge in the 20th century.",
            "key_manifestations": [
              "Henry James's late novels developing advanced psychological perspective",
              "Joseph Conrad's 'Heart of Darkness' (1899) exploring psychological darkness",
              "Thomas Hardy's 'Jude the Obscure' (1895) examining psychological suffering",
              "Kate Chopin's 'The Awakening' (1899) portraying female consciousness and desire"
            ]
          }
        }
      },
      "2_social_critique_and_class_consciousness": {
        "name": "Social Critique and Class Consciousness",
        "description": "This cluster traces how literature engaged with social inequalities, class structures, and systemic injustice. It follows the development from early critiques of aristocratic privilege through the rise of the social problem novel and increasingly systematic analyses of class relations in industrial society.",
        "trajectory": {
          "1780": {
            "salience_share": 3.0,
            "description": "Enlightenment values influence literature that questions inherited privilege and social hierarchies, though often focusing on individual moral failures rather than systemic critique.",
            "key_manifestations": [
              "Frances Burney's 'Evelina' (1778) depicting social class boundaries and snobbery",
              "William Godwin's 'Caleb Williams' (1794) examining justice and class privilege",
              "Robert Burns's poetry challenging social hierarchies (1780s-1790s)",
              "Elizabeth Inchbald's 'A Simple Story' (1791) exploring class and gender constraints"
            ]
          },
          "1800": {
            "salience_share": 3.5,
            "description": "Revolutionary politics and early industrial changes shape literary explorations of social inequalities, though often focused on rural poverty and agricultural displacement.",
            "key_manifestations": [
              "William Wordsworth's 'Lyrical Ballads' (1798) portraying rural poverty",
              "Maria Edgeworth's 'Castle Rackrent' (1800) critiquing the Anglo-Irish landed class",
              "William Blake's 'London' (1794) and later prophetic works depicting social oppression",
              "Walter Scott's early novels examining historical class conflicts"
            ]
          },
          "1820": {
            "salience_share": 4.0,
            "description": "Growing awareness of industrial conditions begins shaping literary social critique, alongside continuing examination of rural poverty and aristocratic privilege.",
            "key_manifestations": [
              "Mary Shelley's 'The Last Man' (1826) examining social collapse",
              "Walter Scott's historical novels exploring class tensions through history",
              "William Hazlitt's essays criticizing social inequalities",
              "Charles Dickens's 'Oliver Twist' (1837-39) depicting urban poverty and social injustice"
            ]
          },
          "1840": {
            "salience_share": 5.5,
            "description": "Victorian novelists establish the social problem novel, directly addressing industrial poverty, class division, and institutional failures through narrative fiction.",
            "key_manifestations": [
              "Charles Dickens's 'A Christmas Carol' (1843) moral critique of capitalist values",
              "Elizabeth Gaskell's 'Mary Barton' (1848) examining industrial class conflict",
              "Benjamin Disraeli's 'Sybil, or The Two Nations' (1845) on England's class divide",
              "Friedrich Engels's 'The Condition of the Working Class in England' (1845) influencing fiction"
            ]
          },
          "1860": {
            "salience_share": 7.0,
            "description": "Social critique deepens with more sophisticated analysis of how economic and social systems shape human lives and relationships.",
            "key_manifestations": [
              "George Eliot's 'Felix Holt, the Radical' (1866) examining political reform",
              "Charles Dickens's 'Hard Times' (1854) critiquing industrial utilitarianism",
              "Elizabeth Gaskell's 'North and South' (1855) examining industrial class conflict",
              "Anthony Trollope's 'The Way We Live Now' (1875) critiquing financial corruption"
            ]
          },
          "1880": {
            "salience_share": 8.0,
            "description": "Naturalism emerges alongside more nuanced social critique as writers examine how environment and social forces determine individual fates.",
            "key_manifestations": [
              "Émile Zola's Rougon-Macquart cycle (begun 1871) analyzing social determinism",
              "George Gissing's 'The Nether World' (1889) depicting working-class London",
              "Henry James's 'The Princess Casamassima' (1886) addressing revolutionary politics",
              "Thomas Hardy's 'Tess of the d'Urbervilles' (1891) critiquing class and sexual double standards"
            ]
          },
          "1900": {
            "salience_share": 8.5,
            "description": "Literary social critique becomes more systematic and politically informed, addressing imperialism, capitalism's psychological effects, and urban alienation.",
            "key_manifestations": [
              "Joseph Conrad's 'Heart of Darkness' (1899) examining colonial exploitation",
              "George Gissing's 'New Grub Street' (1891) depicting intellectual poverty",
              "Thomas Hardy's 'Jude the Obscure' (1895) critiquing class barriers to education",
              "H.G. Wells's 'The Time Machine' (1895) allegorizing class division"
            ]
          }
        }
      },
      "3_romantic_idealism": {
        "name": "Romantic Idealism",
        "description": "This cluster represents the Romantic movement's emphasis on emotional authenticity, imagination, the sublime, individualism, and idealized nature. It traces the emergence, dominance, and gradual transformation of Romantic sensibilities in literature as they confronted industrial modernity and evolved into more complex forms.",
        "trajectory": {
          "1780": {
            "salience_share": 9.0,
            "description": "Early Romanticism emerges as a reaction against Enlightenment rationalism, emphasizing emotion, imagination, and subjective experience as sources of truth and meaning.",
            "key_manifestations": [
              "Johann Wolfgang von Goethe's 'The Sorrows of Young Werther' (1774) exemplifying emotional intensity",
              "William Blake's 'Songs of Innocence' (1789) celebrating imaginative vision",
              "Rousseau's 'Reveries of a Solitary Walker' (1782) exalting solitary communion with nature",
              "Early Gothic novels exploring emotional extremes and supernatural imagination"
            ]
          },
          "1800": {
            "salience_share": 11.0,
            "description": "High Romanticism flourishes as poets and novelists celebrate imagination, nature, emotional authenticity, and individual vision as counters to increasing mechanization and rationalization.",
            "key_manifestations": [
              "William Wordsworth and Samuel Taylor Coleridge's 'Lyrical Ballads' (1798)",
              "William Blake's prophetic books developing his visionary mythology",
              "Mary Shelley's 'Frankenstein' (1818) exploring Romantic themes through Gothic framework",
              "Lord Byron's 'Childe Harold's Pilgrimage' (begun 1812) embodying the Byronic hero"
            ]
          },
          "1820": {
            "salience_share": 10.0,
            "description": "Late Romanticism continues developing while beginning to confront social realities and historical limitations, introducing more complex perspectives on Romantic ideals.",
            "key_manifestations": [
              "Percy Shelley's 'Prometheus Unbound' (1820) articulating revolutionary idealism",
              "John Keats's odes (1819) exploring beauty, imagination, and mortality",
              "Lord Byron's 'Don Juan' (1819-1824) combining Romantic sensibility with social satire",
              "Walter Scott's historical novels romanticizing the national past"
            ]
          },
          "1840": {
            "salience_share": 8.0,
            "description": "Romantic idealism persists but increasingly confronts Victorian social concerns, industrial realities, and growing literary realism, creating hybrid forms.",
            "key_manifestations": [
              "Emily Brontë's 'Wuthering Heights' (1847) transforming Romantic themes into Victorian novel",
              "Alfred, Lord Tennyson's early poetry continuing Romantic traditions",
              "Ralph Waldo Emerson's transcendentalist essays adapting Romantic idealism",
              "Charlotte Brontë's 'Jane Eyre' (1847) combining Romantic individualism with moral realism"
            ]
          },
          "1860": {
            "salience_share": 6.5,
            "description": "Romantic idealism increasingly competes with realist and naturalist approaches, though continues influencing poetry and aspects of fiction focused on imagination and emotion.",
            "key_manifestations": [
              "Algernon Charles Swinburne's poetry reviving Romantic sensuality",
              "George Eliot's 'The Mill on the Floss' (1860) examining Romantic temperament versus social reality",
              "Walt Whitman's 'Leaves of Grass' (expanded editions) reimagining Romantic idealism",
              "Christina Rossetti's poetry combining Romantic tropes with Victorian sensibilities"
            ]
          },
          "1880": {
            "salience_share": 5.0,
            "description": "Late Victorian aestheticism and symbolism transform Romantic ideals into new forms, while mainstream fiction increasingly critiques Romantic individualism and emotional excess.",
            "key_manifestations": [
              "Oscar Wilde's 'The Picture of Dorian Gray' (1890) revisiting Romantic aestheticism",
              "William Morris's romances reviving medieval idealism",
              "Thomas Hardy's novels showing the limitations of Romantic sensibility",
              "Emily Dickinson's poetry (published posthumously from 1890) transforming Romantic interiority"
            ]
          },
          "1900": {
            "salience_share": 4.0,
            "description": "Romantic idealism persists in transformed forms as writers both critique and reintegrate Romantic elements within modernist experiments and aesthetic movements.",
            "key_manifestations": [
              "W.B. Yeats's early poetry drawing on Romantic symbolism",
              "Joseph Conrad's 'Lord Jim' (1900) examining the dangers of Romantic idealism",
              "Thomas Hardy's poetry continuing Romantic traditions",
              "Kate Chopin's 'The Awakening' (1899) exploring Romantic individualism's gender implications"
            ]
          }
        }
      },
      "4_victorian_sensibility": {
        "name": "Victorian Sensibility",
        "description": "This cluster examines the distinctive moral, social, and aesthetic sensibility that characterized much Victorian literature, including its concerns with respectability, social duty, moral improvement, domestic harmony, and the tensions between public virtue and private desire.",
        "trajectory": {
          "1780": {
            "salience_share": 0.5,
            "description": "Pre-Victorian sensibilities predominate, with greater emphasis on sentiment, heroic individualism, and less concern with the domestic morality that would characterize Victorian literature.",
            "key_manifestations": [
              "Frances Burney's novels anticipating concerns with feminine propriety",
              "Hannah More's moral tales promoting early evangelicalism",
              "William Cowper's poetry advocating moral virtue and simplicity",
              "Early Sunday school literature laying groundwork for Victorian didacticism"
            ]
          },
          "1800": {
            "salience_share": 1.5,
            "description": "Early moral frameworks that would influence Victorian literature emerge alongside Romantic idealism, particularly in women's fiction and educational writing.",
            "key_manifestations": [
              "Jane Austen's novels beginning to articulate social propriety and moral judgment",
              "Maria Edgeworth's moral tales for children and educational theory",
              "Hannah More's 'Coelebs in Search of a Wife' (1809) promoting evangelical values",
              "William Wordsworth's later poetry's growing moral conservatism"
            ]
          },
          "1820": {
            "salience_share": 3.0,
            "description": "Transitional period shows increasing emphasis on social propriety, duty, and moral earnestness that would characterize Victorian literature.",
            "key_manifestations": [
              "Jane Austen's 'Persuasion' (1817) valuing steadfastness and moral growth",
              "Charles Lamb's 'Essays of Elia' (1823) developing a domestic sensibility",
              "Early Evangelical fiction emphasizing moral improvement",
              "Walter Scott's historical novels promoting virtue and honor"
            ]
          },
          "1840": {
            "salience_share": 6.0,
            "description": "Victorian sensibility flourishes with emphasis on moral improvement, social duty, domestic harmony, and earnest self-development within social structures.",
            "key_manifestations": [
              "Charles Dickens's 'David Copperfield' (1849-50) portraying moral growth and domestic virtue",
              "Alfred, Lord Tennyson's 'In Memoriam A.H.H.' (1850) integrating faith with doubt",
              "Charlotte Brontë's 'Jane Eyre' (1847) balancing passion with moral principle",
              "Elizabeth Gaskell's 'Cranford' (1851-53) depicting small-town Victorian values"
            ]
          },
          "1860": {
            "salience_share": 7.5,
            "description": "High Victorian sensibility reaches maturity, balancing moral concerns with growing recognition of social complexities and psychological depth.",
            "key_manifestations": [
              "George Eliot's 'Middlemarch' (1871-72) examining duty, vocation, and moral growth",
              "Anthony Trollope's Barsetshire novels (1855-1867) depicting provincial Victorian society",
              "Charles Dickens's later novels examining social and personal morality",
              "Elizabeth Barrett Browning's 'Aurora Leigh' (1856) exploring women's vocation"
            ]
          },
          "1880": {
            "salience_share": 7.0,
            "description": "Late Victorian literature both continues and begins questioning Victorian sensibilities, introducing more complex moral perspectives and challenges to conventional values.",
            "key_manifestations": [
              "Thomas Hardy's novels challenging Victorian sexual morality",
              "George Gissing's 'The Odd Women' (1893) examining unmarried women's lives",
              "Oscar Wilde's society plays satirizing Victorian hypocrisy",
              "Robert Louis Stevenson's 'Strange Case of Dr Jekyll and Mr Hyde' (1886) exploring Victorian duality"
            ]
          },
          "1900": {
            "salience_share": 5.5,
            "description": "Victorian sensibility faces increasing challenges from aesthetic movements, naturalism, and early modernism, while still maintaining significant cultural influence.",
            "key_manifestations": [
              "Thomas Hardy's 'Jude the Obscure' (1895) critiquing Victorian moral constraints",
              "Oscar Wilde's 'The Importance of Being Earnest' (1895) satirizing Victorian values",
              "Joseph Conrad's 'Heart of Darkness' (1899) questioning Victorian imperial certainties",
              "Bram Stoker's 'Dracula' (1897) revealing Victorian anxieties"
            ]
          }
        }
      },
      "5_gender_and_domestic_sphere": {
        "name": "Gender and the Domestic Sphere",
        "description": "This cluster examines how literature portrayed and critiqued gender roles, marriage, and domestic life. It traces the evolution from early explorations of women's limited options through increasingly explicit feminist critique, showing how novels exposed constraints on women's lives and imagined alternatives.",
        "trajectory": {
          "1780": {
            "salience_share": 3.5,
            "description": "Women writers begin more explicitly addressing female experience and the constraints of domestic roles, while still largely working within prevailing assumptions about separate spheres.",
            "key_manifestations": [
              "Frances Burney's 'Evelina' (1778) exploring a young woman's social navigation",
              "Mary Wollstonecraft's 'A Vindication of the Rights of Woman' (1792) influencing fiction",
              "Ann Radcliffe's Gothic novels featuring female protagonists and domestic imprisonment",
              "Maria Edgeworth's early fiction examining women's education"
            ]
          },
          "1800": {
            "salience_share": 4.0,
            "description": "Women novelists increasingly focus on marriage, domestic constraints, and female education, developing a distinctive tradition of social-domestic fiction.",
            "key_manifestations": [
              "Jane Austen's 'Pride and Prejudice' (1813) examining marriage choices and female autonomy",
              "Maria Edgeworth's 'Belinda' (1801) addressing female education and marriage",
              "Mary Brunton's 'Self-Control' (1811) promoting female independence within propriety",
              "Sydney Owenson's 'The Wild Irish Girl' (1806) connecting gender and national politics"
            ]
          },
          "1820": {
            "salience_share": 4.5,
            "description": "Domestic fiction continues developing alongside early Victorian perspectives on gender roles, with increasing attention to women's limited options and domestic power dynamics.",
            "key_manifestations": [
              "Jane Austen's 'Persuasion' (1817) portraying female patience and second chances",
              "Mary Shelley's 'The Last Man' (1826) reimagining gender through apocalyptic lens",
              "Susan Ferrier's 'Marriage' (1818) examining female socialization",
              "Domestic conduct literature codifying gender expectations"
            ]
          },
          "1840": {
            "salience_share": 5.0,
            "description": "Victorian literature addresses the 'Woman Question' more explicitly, with novels depicting the constraints of marriage and domestic roles while often seeking reconciliation.",
            "key_manifestations": [
              "Charlotte Brontë's 'Jane Eyre' (1847) demanding equality within marriage",
              "Elizabeth Gaskell's 'Mary Barton' (1848) showing working women's struggles",
              "Anne Brontë's 'The Tenant of Wildfell Hall' (1848) addressing marital abuse",
              "Charles Dickens's domestic ideals in 'David Copperfield' (1850)"
            ]
          },
          "1860": {
            "salience_share": 6.0,
            "description": "Novels provide increasingly sophisticated analysis of marriage, domesticity, and gender constraints as writers examine women's limited options more explicitly.",
            "key_manifestations": [
              "George Eliot's 'The Mill on the Floss' (1860) exploring female intellectual ambition",
              "Elizabeth Barrett Browning's 'Aurora Leigh' (1856) depicting female artistic vocation",
              "Anthony Trollope's marriage plots examining female options",
              "Coventry Patmore's 'The Angel in the House' (1854-1862) idealizing domestic femininity"
            ]
          },
          "1880": {
            "salience_share": 7.0,
            "description": "The 'Woman Question' becomes more central to literature as novels directly address marriage as institution, female sexuality, and constraints on women's ambitions.",
            "key_manifestations": [
              "Henry James's 'The Portrait of a Lady' (1881) analyzing a woman's fate after choosing wrongly",
              "Thomas Hardy's 'Far from the Madding Crowd' (1874) examining female independence",
              "Henrik Ibsen's 'A Doll's House' (1879) questioning domestic gender roles",
              "George Gissing's 'The Odd Women' (1893) depicting unmarried women's lives"
            ]
          },
          "1900": {
            "salience_share": 8.0,
            "description": "The New Woman emerges in literature as feminist movements influence fiction, with more radical critiques of marriage and domestic constraints.",
            "key_manifestations": [
              "Kate Chopin's 'The Awakening' (1899) depicting female rebellion against domestic roles",
              "Thomas Hardy's 'Jude the Obscure' (1895) challenging marriage conventions",
              "George Egerton's 'Keynotes' (1893) depicting female sexuality",
              "Charlotte Perkins Gilman's 'The Yellow Wallpaper' (1892) portraying domestic imprisonment"
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
  startYear: '1780',
    endYear: '1900',
    clusterStart: 1,
    clusterEnd: 5,
    periodicity: 20,
    context: 'Jane Eyre, Middlemarch, To The Lighthouse, Bleak House, Portrait of a Lady, Anna Karenina, Life and Fate, Heart of Darkness, Madame Bovary, and The Magic Mountain.',
    model: 'o1-mini',
  cachedResult: litereatureData
};

export default literaturePreset; 