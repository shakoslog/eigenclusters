import { PresetConfig } from './types';

const godData = {
  "metadata": {
    "period": "1800-2000",
    "interval": "10 years",
    "cluster_range": "1-1",
    "measurement": "relative cultural salience share (0-100)",
    "top_20_clusters": [
      "01_western_god_concept [↘] (Rank: 1)",
      "(Analysis limited to requested cluster)"
    ]
  },
  "clusters": {
    "01_western_god_concept": {
      "name": "The Western God Concept (Ontological to Phenomenological)",
      "description": "This cluster tracks the evolving conceptualization and cultural salience of 'God' in the Western imagination. It traces the trajectory from God as an objective, external, axiomatically necessary sovereign (Natural Theology) to God as a subjective, immanent, or contested psychological/political signifier. The cluster captures the tension between secularization (the withdrawal of God from public explanation) and persistence (the transformation of the divine into personal experience, ethical abstraction, or reactionist identity).",
      "trajectory": {
        "1800": {
          "salience_share": 88.5,
          "description": "At the turn of the century, the God concept retains immense structural salience (Baseline), serving as the unchallenged guarantor of order and the primary lens for interpreting the natural world. While the Enlightenment had introduced Deism, the cultural mood shifts toward Romanticism, where God is increasingly sensed through the sublime in nature rather than purely rational deduction. The publication of Paley's *Natural Theology* marks the apex of the 'Watchmaker' argument—an attempt to scientifically systematize the divine before the Darwinian storm. Δw is stable, but the internal composition is drifting from orthodox dogma toward an emotional, pantheistic resonance.",
          "key_manifestations": [
            "William Paley, 'Natural Theology or Evidences of the Existence and Attributes of the Deity' (1802)",
            "F.R. de Chateaubriand, 'The Genius of Christianity' (1802)",
            "Friedrich Schleiermacher, 'On Religion: Speeches to Its Cultured Despisers' (1799/1800 impact)",
            "William Wordsworth, 'Lines Written a Few Miles above Tintern Abbey' (representing the pantheistic shift)"
          ]
        },
        "1810": {
          "salience_share": 87.0,
          "description": "Salience remains extremely high with a slight decline (Δw = -1.5) as the Napoleonic Wars disrupt traditional institutional authority, yet simultaneously trigger a reactionary religious revival. The concept of God drifts further into the subjective realm of 'feeling' and 'dependence' (Schleiermacher), moving away from cold rationalism. The cultural prototype fractures slightly: the intellectual elite begin engaging with German Idealism (Hegel's Absolute Spirit), while popular culture sees the seeds of the Second Great Awakening, emphasizing personal conversion over inherited covenant.",
          "key_manifestations": [
            "G.W.F. Hegel, 'Science of Logic' (God as the Absolute Idea) (1812)",
            "Establishment of the American Board of Commissioners for Foreign Missions (1810)",
            "Percy Bysshe Shelley, 'The Necessity of Atheism' (Early, scandalous counter-signal) (1811)",
            "Lord Byron, 'Childe Harold's Pilgrimage' (The Byronic hero's existential wrestling)"
          ]
        },
        "1820": {
          "salience_share": 85.5,
          "description": "Salience dips slightly (Δw = -1.5) as the industrial revolution begins to offer materialist explanations for human progress, competing with providential narratives. However, the cluster shows strong resilience through the Second Great Awakening, which democratizes the God concept—making the divine accessible without clerical mediation. In literature, the 'God' prototype is increasingly linked to moral utility and social reform rather than just metaphysical necessity. The drift is toward a 'benevolent moral governor' suited for an emerging liberal bourgeois society.",
          "key_manifestations": [
            "Charles Finney, 'Sermons on Various Subjects' (Revivalist theology) (1820s context)",
            "Joseph Smith, 'The Book of Mormon' (Radical new American revelation) (1830 release, 1820s visions)",
            "Washington Irving, 'The Sketch Book' (Traditional Anglican piety in changing times) (1820)",
            "Thomas Erskine, 'Remarks on the Internal Evidence for the Truth of Revealed Religion' (1820)"
          ]
        },
        "1830": {
          "salience_share": 82.0,
          "description": "A notable decline (Δw = -3.5) occurs as Biblical criticism (Higher Criticism) from Germany begins to infiltrate Anglo-American discourse, challenging the historical literalism of the God concept. In reaction, the Oxford Movement arises to re-sacralize the institution, attempting to anchor the drifting prototype back into liturgy and tradition. Literature reflects a growing 'crisis of faith,' where God is no longer a given backdrop but a subject of intense anxiety and defense.",
          "key_manifestations": [
            "John Keble, 'National Apostasy' Sermon (Sparking the Oxford Movement) (1833)",
            "David Strauss, 'The Life of Jesus' (Das Leben Jesu) (Humanizing the divine) (1835)",
            "Ralph Waldo Emerson, 'Nature' (Transcendentalist God-in-nature) (1836)",
            "Charles Lyell, 'Principles of Geology' (Deep time challenging Genesis) (1830)"
          ]
        },
        "1840": {
          "salience_share": 78.0,
          "description": "The erosion accelerates (Δw = -4.0) with the rise of radical materialism. Feuerbach's *The Essence of Christianity* is a pivotal shock, inverting the prototype: God is explicitly redefined as a projection of human nature. This marks the first major systemic attempt to distinctify the 'God' cluster into a 'Psychology' cluster. Culturally, this manifests as a split: the masses remain pious (Victorian morality), but the intellectual vanguard moves toward a humanist ethics divorced from divine command.",
          "key_manifestations": [
            "Ludwig Feuerbach, 'The Essence of Christianity' (1841)",
            "Søren Kierkegaard, 'Fear and Trembling' (The existential leap, rescuing God from rationality) (1843)",
            "Karl Marx, 'Introduction to A Contribution to the Critique of Hegel's Philosophy of Right' (Religion as opiate) (1844)",
            "Charlotte Brontë, 'Jane Eyre' (Providence vs. Autonomy) (1847)"
          ]
        },
        "1850": {
          "salience_share": 74.5,
          "description": "Salience continues to fall (Δw = -3.5) amidst the height of Victorian doubt. The prototype is heavily characterized by 'struggle'—the famous 'honest doubt' of Tennyson. God is no longer the confident watchmaker but a 'hidden' deity behind a nature 'red in tooth and claw.' The cluster is becoming defensive, relying on sentiment and aesthetic beauty to maintain its hold as scientific materialism looms larger.",
          "key_manifestations": [
            "Alfred Lord Tennyson, 'In Memoriam A.H.H.' (1850)",
            "Nathaniel Hawthorne, 'The Scarlet Letter' (Puritan God vs. Human Heart) (1850)",
            "Herman Melville, 'Moby-Dick' (The metaphysical silence/malignance of the absolute) (1851)",
            "Auguste Comte, 'System of Positive Polity' (Religion of Humanity replacing God) (1851)"
          ]
        },
        "1860": {
          "salience_share": 65.0,
          "description": "A sharp drop (Δw = -9.5) marks the decade of the 'Darwinian Trauma.' The publication of *Origin of Species* (1859) essentially dissolves the Paleyan design argument that had sustained the cluster's intellectual viability for sixty years. The 'God' concept is forced to retreat from the physical sciences entirely, seeking refuge in the gaps of knowledge or the realm of pure ethics. The *Essays and Reviews* controversy highlights the internal fracture within the religious establishment itself.",
          "key_manifestations": [
            "Essays and Reviews controversy (Anglican liberals questioning scripture) (1860)",
            "John Tyndall, 'Belfast Address' (Later retrospective on this era's materialism) (1874 context)",
            "Fyodor Dostoevsky, 'Crime and Punishment' (God as necessary moral anchor) (1866)",
            "Matthew Arnold, 'Dover Beach' (The 'melancholy, long, withdrawing roar' of faith) (1867)"
          ]
        },
        "1870": {
          "salience_share": 60.0,
          "description": "The decline stabilizes slightly (Δw = -5.0) into a 'conflict thesis' era. The term 'Agnostic' is coined by Huxley, formalizing the absence of the God concept as a valid intellectual stance. The prototype drifts toward 'Culture' replacing 'Cult'; God becomes a subject of anthropological interest (Tylor) rather than theological certainty. Literature explores the 'loss of God' as a tragedy of modernity.",
          "key_manifestations": [
            "T.H. Huxley, coinage of 'Agnosticism' (1869/1870)",
            "George Eliot, 'Middlemarch' (Duty and ethics without divine sanction) (1871)",
            "E.B. Tylor, 'Primitive Culture' (God as animistic evolution) (1871)",
            "Friedrich Nietzsche, 'The Birth of Tragedy' (Dionysian vs Apollonian replacing Christian binary) (1872)"
          ]
        },
        "1880": {
          "salience_share": 55.0,
          "description": "Salience falls (Δw = -5.0) as the 'Death of God' is philosophically articulated. Nietzsche's proclamation in *The Gay Science* diagnoses the cultural reality: the *concept* of God is no longer the organizing principle of Western civilization. The cluster fractures: one side moves toward rigid Fundamentalism (a reaction against drift), while the other moves toward liberal theology and social gospel. The unitary 'Western God' is effectively dead; distinct sub-clusters (Conservative/Liberal) emerge.",
          "key_manifestations": [
            "Friedrich Nietzsche, 'The Gay Science' (Parable of the Madman) (1882)",
            "Fyodor Dostoevsky, 'The Brothers Karamazov' (The Grand Inquisitor: Can humanity handle freedom?) (1880)",
            "Leo Tolstoy, 'A Confession' (Existential crisis and radical Christian anarchism) (1882)",
            "Mark Twain, 'Adventures of Huckleberry Finn' (Natural conscience vs Religious hypocrisy) (1884)"
          ]
        },
        "1890": {
          "salience_share": 52.0,
          "description": "A slow erosion continues (Δw = -3.0). The 'God' concept is increasingly psychologized. William James and the budding field of psychology begin to treat religious experience as a subjective phenomenon to be studied pragmatically, distinct from its truth claims. This 'Pragmatic Turn' allows the God concept to survive in a secularizing world by proving its 'cash value' in mental health and social cohesion, even if its ontological status is bracketed.",
          "key_manifestations": [
            "James George Frazer, 'The Golden Bough' (Gods as recurring vegetative myths) (1890)",
            "Elizabeth Cady Stanton, 'The Woman's Bible' (Feminist critique of divine patriarchy) (1895)",
            "Harold Frederic, 'The Damnation of Theron Ware' (Clerical loss of faith) (1896)",
            "Pope Leo XIII, 'Rerum Novarum' (God's justice applied to labor/capital) (1891)"
          ]
        },
        "1900": {
          "salience_share": 51.5,
          "description": "Stasis (Δw = -0.5). The God concept experiences a hardening of defenses. The publication of *The Fundamentals* launches the modern Fundamentalist movement, insisting on the literal veracity of the prototype against the drift of modernism. Simultaneously, the 'Social Gospel' movement attempts to translate the God concept into progressive political action. The cluster is now polarized: God as Judge vs. God as Social Reformer.",
          "key_manifestations": [
            "Sigmund Freud, 'The Interpretation of Dreams' (Religion as neurosis/wish fulfillment) (1899/1900)",
            "William James, 'The Varieties of Religious Experience' (1902)",
            "Joseph Conrad, 'Heart of Darkness' (The abyss replacing the divine center) (1899)",
            "Adolf von Harnack, 'What is Christianity?' (Liberal theology's apex) (1900)"
          ]
        },
        "1910": {
          "salience_share": 45.0,
          "description": "A sharp decline (Δw = -6.5) triggered by the onset of WWI. The industrial slaughter destroys the 19th-century optimism that had linked God with inevitable Progress. The 'Liberal God' of civilization is discredited. In the void, esoteric and mystical alternatives rise (Theosophy), and the arts turn toward High Modernism, where the fragmentation of the divine is mirrored in the fragmentation of form.",
          "key_manifestations": [
            "Publication of 'The Fundamentals' (1910-1915)",
            "James Joyce, 'A Portrait of the Artist as a Young Man' (Rejection of Catholicism for Art) (1916)",
            "C.G. Jung, 'Psychology of the Unconscious' (God as archetype) (1912)",
            "Karl Barth, 'The Epistle to the Romans' (First Ed.) (God as 'Wholly Other', rejecting liberal theology) (1919)"
          ]
        },
        "1920": {
          "salience_share": 42.0,
          "description": "Salience remains suppressed (Δw = -3.0) in the 'Lost Generation' era. The dominant intellectual mood is disenchantment. However, a counter-current, Neo-Orthodoxy (Barth), re-injects energy into the cluster by asserting that God cannot be known through culture or reason, only through revelation—a 'theology of crisis.' In literature, the 'God-shaped hole' becomes a central motif.",
          "key_manifestations": [
            "T.S. Eliot, 'The Waste Land' (Spiritual drought and the quest for rain) (1922)",
            "Martin Buber, 'I and Thou' (God as the eternal Thou in relation) (1923)",
            "Scopes Monkey Trial (Public humiliation of the fundamentalist God concept) (1925)",
            "A.N. Whitehead, 'Process and Reality' (Process Theology: God evolving with the world) (1929)"
          ]
        },
        "1930": {
          "salience_share": 44.0,
          "description": "A slight rebound (Δw = +2.0) as the Great Depression and the rise of Totalitarianism drive a return to 'Realist' theology. The God concept is mobilized as a bulwark against fascism and communism (political religions). Reinhold Niebuhr's 'Christian Realism' reintroduces Original Sin as a valid political category. The prototype shifts from 'personal comforter' to 'judgment on history.'",
          "key_manifestations": [
            "Reinhold Niebuhr, 'Moral Man and Immoral Society' (1932)",
            "Graham Greene, 'Brighton Rock' (Catholic realism/sin) (1938)",
            "Dietrich Bonhoeffer, 'The Cost of Discipleship' (1937)",
            "Zora Neale Hurston, 'Their Eyes Were Watching God' (Black spirituality and autonomy) (1937)"
          ]
        },
        "1940": {
          "salience_share": 40.0,
          "description": "Decline (Δw = -4.0) due to the theodicy crisis of the Holocaust and WWII. The sheer scale of evil makes the 'Benevolent Sovereign' prototype intellectually untenable for many. Post-war, this leads to 'Religionless Christianity' (Bonhoeffer) and the beginnings of existentialist atheism. The God concept is stripped of its metaphysical power, surviving as an ethical imperative or an absurdist silence.",
          "key_manifestations": [
            "C.S. Lewis, 'The Screwtape Letters' (Apologetics for a modern audience) (1942)",
            "Albert Camus, 'The Stranger' (The benign indifference of the universe) (1942)",
            "Dietrich Bonhoeffer, 'Letters and Papers from Prison' (Religionless Christianity) (posth. 1951, written 40s)",
            "Thomas Merton, 'The Seven Storey Mountain' (Return to monastic contemplation) (1948)"
          ]
        },
        "1950": {
          "salience_share": 55.0,
          "description": "A significant surge (Δw = +15.0). This is the 'Indian Summer' of the God concept, driven by Cold War dichotomy (Godless Communism vs. Christian West). 'In God We Trust' is adopted; church attendance peaks. However, the prototype is hollowed out into a 'civil religion'—a vague, non-denominational affirmation of Americanism (Herberg's 'Protestant-Catholic-Jew'). It is high salience, but low specificity.",
          "key_manifestations": [
            "Billy Graham, Los Angeles Crusade (1949/1950)",
            "Paul Tillich, 'The Courage to Be' (God as the Ground of Being) (1952)",
            "Flannery O'Connor, 'A Good Man Is Hard to Find' (Grotesque grace) (1955)",
            "Addition of 'under God' to the US Pledge of Allegiance (1954)"
          ]
        },
        "1960": {
          "salience_share": 48.0,
          "description": "Rapid deceleration and decline (Δw = -7.0). The 'Death of God' movement hits mainstream theology (Altizer, Hamilton). The counterculture seeks transcendence but explicitly rejects the 'Western Patriarchal God' in favor of Eastern mysticism, psychedelics, or radical politics. Vatican II attempts to modernize the Catholic prototype, acknowledging secular autonomy. The cluster fragments intensely.",
          "key_manifestations": [
            "John Robinson, 'Honest to God' (Popularizing Tillich/Bonhoeffer, secularizing the concept) (1963)",
            "Time Magazine Cover, 'Is God Dead?' (1966)",
            "Vatican II Council documents (e.g., Nostra Aetate) (1965)",
            "Beatles / George Harrison, interest in ISKCON/Hinduism (Dilution of the Western prototype) (1966-69)"
          ]
        },
        "1970": {
          "salience_share": 46.0,
          "description": "Stabilization and mutation (Δw = -2.0). While institutional mainline Protestantism collapses, a new, aggressive prototype emerges: the 'Born Again' God of the Evangelical Right. The God concept becomes explicitly politicized as a counter-reaction to the 60s. Simultaneously, 'New Age' spirituality decouples the divine from the deity, favoring 'Energy' or 'Consciousness.' The cluster is no longer a shared canopy but a tribal badge.",
          "key_manifestations": [
            "Hal Lindsey, 'The Late Great Planet Earth' (Apocalyptic God returns) (1970)",
            "James Cone, 'A Black Theology of Liberation' (God as Liberator of the Oppressed) (1970)",
            "Star Wars (The Force as secularized, depersonalized God-concept) (1977)",
            "Rise of the Moral Majority (1979)"
          ]
        },
        "1980": {
          "salience_share": 49.0,
          "description": "A tactical rise (Δw = +3.0). The 'God' concept is fully weaponized in the Culture Wars. It holds high salience not as a metaphysical explanation, but as a marker of political affiliation and moral traditionalism. Literature sees a bifurcation: popular Christian fiction (Peretti) vs. high-literary grappling with absence (McCarthy). The prototype is 'God as Traditional Values.'",
          "key_manifestations": [
            "Salman Rushdie, 'The Satanic Verses' (The clash of secular/sacred prototypes) (1988)",
            "Margaret Atwood, 'The Handmaid's Tale' (Theocratic dystopia) (1985)",
            "Cormac McCarthy, 'Blood Meridian' (Gnostic/Nihilist void where God should be) (1985)",
            "Martin Scorsese, 'The Last Temptation of Christ' (Humanizing Jesus controversy) (1988)"
          ]
        },
        "1990": {
          "salience_share": 43.0,
          "description": "Decline (Δw = -6.0) as the post-Cold War era embraces 'End of History' secular liberalism. The 'New Atheism' (nascent) begins to form in reaction to religious extremism. The God concept is increasingly relegated to the private sphere ('Spiritual but not religious'). In media, God becomes a pop-culture character (often ironic or manageable) rather than the Ground of Being.",
          "key_manifestations": [
            "Douglas Coupland, 'Life After God' (Gen X yearning for structure) (1994)",
            "Left Behind Series (LaHaye/Jenkins) (Mass market apocalypticism) (1995)",
            "Joan Osborne, 'One of Us' (God as mundane stranger) (1995)",
            "Alvin Plantinga, 'Warranted Christian Belief' (Philosophical defense of theism) (2000)"
          ]
        },
        "2000": {
          "salience_share": 38.0,
          "description": "The period closes with the cluster in a volatile, contested state (Δw = -5.0). 9/11 (imminent/occurring) frames God as a source of violent conflict, triggering the full 'New Atheist' backlash. The Western God concept is now one option among many in a 'supermarket of beliefs.' The prototype has shifted from 'The Truth' to 'Your Truth,' with salience maintained primarily through political polarization rather than cultural consensus.",
          "key_manifestations": [
            "Richard Dawkins / The God Delusion (prefigured by 2000s discourse)",
            "Zadie Smith, 'White Teeth' (Multicultural clash of beliefs) (2000)",
            "Marilynne Robinson, 'Gilead' (A quiet, dying Calvinist piety) (2004 - slight post-date but representative)",
            "Charles Taylor, 'A Secular Age' (Retrospective analysis of this trajectory) (2007 - representative of the era's thought)"
          ]
        }
      }
    }
  }
};

const godPreset: PresetConfig = {
  id: 'god',
  name: 'God',
  description: 'The evolution of the Western God concept from 1800-2000, tracking the trajectory from an objective, metaphysical sovereign to a contested psychological and political signifier.',
  startYear: '1800',
  endYear: '2000',
  clusterStart: 1,
  clusterEnd: 1,
  periodicity: 10,
  context: 'Western Religious and Philosophical Thought',
  model: 'o1-mini',
  cachedResult: godData,
};

export default godPreset;

