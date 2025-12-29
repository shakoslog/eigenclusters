import { PresetConfig } from './types';

// American Culture Analysis (1990-2025) data
const americanCultureData = {
  "metadata": {
    "period": "1990-2025",
    "interval": "1 year",
    "cluster_range": "1-3",
    "measurement": "relative cultural variance explained (0-100)",
    "top_20_clusters": [
      "1_postmodern_irony_to_metamodern_sincerity [↗] (11.4%)",
      "2_mediated_identity_and_autofiction [↗] (9.2%)",
      "3_hyperreal_fragmentation_and_database_logic [↗] (8.5%)",
      "4_institutional_critique_and_decolonization [↗] (7.1%)",
      "5_technological_sublime_and_surveillance_aesthetics [→] (6.4%)",
      "6_analog_nostalgia_and_hauntology [↗] (5.8%)",
      "7_dystopian_realism_and_climate_anxiety [↗] (5.2%)",
      "8_dissolution_of_high_low_brow_boundaries [↘] (4.9%)",
      "9_queer_theoretical_aesthetics [→] (3.8%)",
      "10_corporate_minimalism_and_global_homogeneity [↘] (3.1%)",
      "11_visual_textual_hybridity [↗] (2.8%)",
      "12_post_humanism_and_cyborg_feminism [→] (2.5%)",
      "13_urban_decay_and_ruin_porn [↘] (2.1%)",
      "14_relational_aesthetics [↘] (1.8%)",
      "15_algorithmic_determinism_in_taste [↗] (1.7%)",
      "16_the_graphic_memoir_boom [→] (1.5%)",
      "17_new_gothic_and_body_horror [↗] (1.2%)",
      "18_zombie_formalism_in_painting [↘] (1.1%)",
      "19_speculative_afrofuturism [→] (1.0%)",
      "20_generative_ai_surrealism [↗] (0.9%)"
    ]
  },
  "clusters": {
    "1_postmodern_irony_to_metamodern_sincerity": {
      "name": "From Infinite Jest to New Sincerity",
      "description": "This cluster tracks the dominant epistemological shift in American arts: the move from the defensive, detached irony of late Postmodernism (dominant in the 90s) toward 'New Sincerity' and 'Metamodernism.' It captures how literature and visual arts struggled to process emotion and truth—first by mocking it to protect against commercial co-option, and later by desperately seeking connection amidst digital alienation.",
      "trajectory": {
        "1990": {
          "salience_share": 12.5,
          "description": "Postmodern irony operates as the baseline cultural currency, characterized by a cool detachment and pastiche. The literary and visual arts largely function to deconstruct the media landscape rather than engage with it earnestly, establishing a defensive posture against the encroaching commercialization of sentiment.",
          "key_manifestations": [
            "TV Series: 'Twin Peaks' (Subversion of soap opera tropes)",
            "Novel: 'Vineland' by Thomas Pynchon",
            "Art: 'Untitled (I Smell You on My Clothes)' by Félix González-Torres",
            "Film: 'Metropolitan' by Whit Stillman"
          ]
        },
        "1991": {
          "salience_share": 13.1,
          "description": "The variance increases as 'Generation X' aesthetics solidify the ethos of the slacker—a refusal to participate interpreted as an artistic stance. Irony becomes a survival mechanism, with literature focusing on the absurdity of consumer culture rather than interior emotional life.",
          "key_manifestations": [
            "Novel: 'Generation X: Tales for an Accelerated Culture' by Douglas Coupland",
            "Film: 'Slacker' by Richard Linklater",
            "Album/Cultural Event: 'Nevermind' by Nirvana (The commodification of anti-commercialism)",
            "Art: 'The Physical Impossibility of Death in the Mind of Someone Living' by Damien Hirst"
          ]
        },
        "1992": {
          "salience_share": 13.4,
          "description": "The trend accelerates, with Tarantino-esque violence and dialogue marking a peak in stylized detachment. The distance between the viewer and the subject widens; violence is aestheticized, and moral judgment is suspended in favor of 'cool.'",
          "key_manifestations": [
            "Film: 'Reservoir Dogs' by Quentin Tarantino",
            "Novel: 'The SecretHistory' by Donna Tartt",
            "Art: 'Dirty Words' Series by Gilbert & George",
            "Performance: 'The Ben Stiller Show' (Early meta-ironic sketch comedy)"
          ]
        },
        "1993": {
          "salience_share": 13.8,
          "description": "Irony becomes entrenched as the default mode of intellect. However, nascent critiques of this detachment appear in the literary world, where the exhaustion of endless deconstruction begins to manifest as a 'knowingness' that precludes genuine risk.",
          "key_manifestations": [
            "Essay: 'E Unibus Pluram: Television and U.S. Fiction' by David Foster Wallace (Critical pivot point)",
            "Novel: 'The Virgin Suicides' by Jeffrey Eugenides",
            "Art: 'Love' by Maurizio Cattelan",
            "TV: 'Late Night with Conan O'Brien' (Debut of absurdism/irony)"
          ]
        },
        "1994": {
          "salience_share": 13.5,
          "description": "A slight plateau occurs as the 'slacker' archetype becomes commercialized, stripping the ironic stance of its subversion. The arts begin to fracture between high-concept nihilism and a burgeoning desire for raw reality.",
          "key_manifestations": [
            "Film: 'Pulp Fiction' by Quentin Tarantino",
            "Film: 'Reality Bites' by Ben Stiller",
            "Art: Matthew Barney's 'Cremaster 4'",
            "Novel: 'The Wind-Up Bird Chronicle' (English Trans) by Haruki Murakami"
          ]
        },
        "1995": {
          "salience_share": 12.9,
          "description": "The dominance of pure irony begins to wane slightly as the 'return of the real' gains traction in visual arts. The coolness of the early 90s begins to feel sterile, creating an opening for the 'hysterical realism' that attempts to map the totality of society.",
          "key_manifestations": [
            "Film: 'Kids' by Larry Clark",
            "Novel: 'The Tunnel' by William H. Gass",
            "Art: Tracey Emin's 'Everyone I Have Ever slept With 1963–1995'",
            "Film: 'Safe' by Todd Haynes"
          ]
        },
        "1996": {
          "salience_share": 13.0,
          "description": "A pivotal year marked by the publication of 'Infinite Jest,' which simultaneously masters and condemns postmodern irony. This work acts as a catalyst for a new literary school that demands sincerity through the lens of irony, rather than avoiding it.",
          "key_manifestations": [
            "Novel: 'Infinite Jest' by David Foster Wallace",
            "Film: 'Fargo' by The Coen Brothers",
            "Film: 'Scream' (Meta-horror peak)",
            "Art Exhibit: 'Traffic' by Nicolas Bourriaud (Introduction of Relational Aesthetics)"
          ]
        },
        "1997": {
          "salience_share": 12.2,
          "description": "Variance drops as the 'New Sincerity' begins to compete with established irony. The cultural conversation shifts toward an anxiety about the loss of the authentic self, moving away from celebration of the simulacra toward a fear of it.",
          "key_manifestations": [
            "Novel: 'Underworld' by Don DeLillo",
            "Film: 'Good Will Hunting' (Mainstream sincerity)",
            "Novel: 'American Pastoral' by Philip Roth",
            "Art: 'Ghost' by Rachel Whiteread"
          ]
        },
        "1998": {
          "salience_share": 11.5,
          "description": "The decline of detachment continues. In visual arts, the YBA (Young British Artists) shock tactics—rooted in irony—begin to feel fatigued. Literature turns inward, seeking personal truth over systemic deconstruction.",
          "key_manifestations": [
            "Film: 'The Truman Show' (Critique of ironic surveillance)",
            "Novel: 'Glamorama' by Bret Easton Ellis (The nadir of celebrity satire)",
            "Film: 'Happiness' by Todd Solondz",
            "Art: 'Bed' by Tracey Emin"
          ]
        },
        "1999": {
          "salience_share": 10.8,
          "description": "The turn of the millennium creates a pre-apocalyptic tension that favors existential questioning over cool detachment. The fight against consumerism shifts from ironic distance to violent rejection, as seen in 'Fight Club.'",
          "key_manifestations": [
            "Film: 'Fight Club' by David Fincher",
            "Film: 'American Beauty' (Suburban deconstruction)",
            "Film: 'The Matrix' (The problem of the Real)",
            "Novel: 'Motherless Brooklyn' by Jonathan Lethem"
          ]
        },
        "2000": {
          "salience_share": 9.5,
          "description": "A bridge year where the 'quirky' aesthetic begins to form—a precursor to tweeness. This represents a soft rejection of 90s hardness, favoring a childlike, constructed innocence that is self-aware yet yearning for connection.",
          "key_manifestations": [
            "Book: 'A Heartbreaking Work of Staggering Genius' by Dave Eggers",
            "Film: 'High Fidelity' by Stephen Frears",
            "Art: 'Play Dead; Real Time' by Douglas Gordon",
            "Novel: 'House of Leaves' by Mark Z. Danielewski"
          ]
        },
        "2001": {
          "salience_share": 6.2,
          "description": "The 9/11 attacks cause a massive, instantaneous collapse in the value of irony. Graydon Carter's declaration 'the end of the age of irony' reflects a cultural pivot where detachment is viewed as a moral failing. Variance plummets as the culture scrambles for immediate, tangible meaning.",
          "key_manifestations": [
            "Novel: 'The Corrections' by Jonathan Franzen",
            "Film: 'The Royal Tenenbaums' (Melancholy over irony)",
            "Art Event: 'Here is New York' (Crowdsourced photography exhibition)",
            "Film: 'Waking Life' by Richard Linklater"
          ]
        },
        "2002": {
          "salience_share": 6.8,
          "description": "A slow rebuilding begins, but on new terms. 'New Sincerity' emerges not as a return to pre-modern innocence, but as a choice to be vulnerable despite knowing it is naive. The McSweeney's aesthetic becomes the dominant literary visual language.",
          "key_manifestations": [
            "Novel: 'Everything is Illuminated' by Jonathan Safran Foer",
            "Film: 'Adaptation' (Deconstructing the creative process earnestly)",
            "Magazine: 'The Believer' (Founding ethos of 'Snark-free' criticism)",
            "Art: 'The Weather Project' by Olafur Eliasson (Installation)"
          ]
        },
        "2003": {
          "salience_share": 7.4,
          "description": "The 'Manic Pixie Dream Girl' trope and the 'Indie' movie aesthetic signal a commercialization of this new sincerity. It is a curated vulnerability. The variance rises as this becomes the new stylistic hegemon, replacing the grunge/slacker ethos entirely.",
          "key_manifestations": [
            "Film: 'Lost in Translation' by Sofia Coppola",
            "Novel: 'The Fortress of Solitude' by Jonathan Lethem",
            "TV: 'The O.C.' (Self-aware melodrama)",
            "Graphic Novel: 'Blankets' by Craig Thompson"
          ]
        },
        "2004": {
          "salience_share": 8.1,
          "description": "The 'Hipster' archetype begins to coalesce, blending the collection of ironic cultural artifacts (trucker hats, PBR) with an earnest appreciation of 'authentic' vintage. This duality—ironic consumption, sincere appreciation—defines the mid-2000s.",
          "key_manifestations": [
            "Film: 'Garden State' by Zach Braff",
            "Film: 'Eternal Sunshine of the Spotless Mind'",
            "Novel: 'Gilead' by Marilynne Robinson (Radical traditional sincerity)",
            "Art: 'I Like America and America Likes Me' (Re-performances/references)"
          ]
        },
        "2005": {
          "salience_share": 8.5,
          "description": "The 'Freak Folk' movement in music and the handmade aesthetic in visual arts reinforce the rejection of mass-produced slickness. However, the internet (Web 2.0) begins to re-introduce distance, as performance of self becomes digitized.",
          "key_manifestations": [
            "Film: 'Me and You and Everyone We Know' by Miranda July",
            "Novel: 'Never Let Me Go' by Kazuo Ishiguro",
            "Art: 'In the darkest hour there may be light' (Damien Hirst works on death/religion)",
            "Site: 'PostSecret' (Anonymous digital sincerity)"
          ]
        },
        "2006": {
          "salience_share": 8.9,
          "description": "Metamodernism begins to be theorized implicitly. The oscillation between enthusiasm and irony becomes the steady state. In literature, the focus shifts to the 'neurotic realist' who overthinks their own sincerity.",
          "key_manifestations": [
            "Novel: 'The Road' by Cormac McCarthy (Absolute moral seriousness)",
            "Film: 'Little Miss Sunshine'",
            "TV: '30 Rock' (Return of rapid-fire irony, but character-grounded)",
            "Graphic Novel: 'Fun Home' by Alison Bechdel"
          ]
        },
        "2007": {
          "salience_share": 9.2,
          "description": "The climax of 'Twee' culture. The aestheticization of childhood and innocence reaches a saturation point, provoking a counter-reaction of darker, more cynical realism in prestige TV (e.g., Mad Men).",
          "key_manifestations": [
            "Film: 'Juno' by Jason Reitman",
            "Novel: 'The Brief Wondrous Life of Oscar Wao' by Junot Díaz",
            "TV: 'Mad Men' (Deconstruction of 1950s sincerity)",
            "Art: 'For the Love of God' (Diamond Skull) by Damien Hirst"
          ]
        },
        "2008": {
          "salience_share": 9.8,
          "description": "The Global Financial Crisis injects a dose of harsh reality, dampening the whimsical aspects of New Sincerity. Cultural output becomes more socially conscious; irony is reserved for the systems of power (banks, government) rather than the individual.",
          "key_manifestations": [
            "Novel: '2666' by Roberto Bolaño",
            "Film: 'Synecdoche, New York' by Charlie Kaufman",
            "Poster: 'Hope' by Shepard Fairey (Earnest political iconography)",
            "Film: 'WALL-E' (Eco-sincerity)"
          ]
        },
        "2009": {
          "salience_share": 10.1,
          "description": "The rise of 'Alt-Lit' online begins to merge the chaotic, ugly aesthetic of the early internet with intense, almost embarrassing over-sharing. This form of sincerity is raw, unedited, and performatively 'bad' to prove its authenticity.",
          "key_manifestations": [
            "Novel: 'Shoplifting from American Apparel' by Tao Lin",
            "TV: 'Parks and Recreation' (Shift from Office-style cringe to optimism)",
            "Film: '(500) Days of Summer'",
            "Art: Ryan Trecartin's 'A Family Finds Entertainment' (accelerationist camp)"
          ]
        },
        "2010": {
          "salience_share": 10.5,
          "description": "Social media (Instagram launched 2010) begins to force a 'curated sincerity.' The oscillation speeds up: one must be ironically detached from the labor of posting, but sincere in the image presented. 'Poptimism' wins; it is no longer cool to ironically dislike pop music.",
          "key_manifestations": [
            "Film: 'The Social Network' (The architecture of the new social self)",
            "Novel: 'Freedom' by Jonathan Franzen",
            "Album/Visuals: 'My Beautiful Dark Twisted Fantasy' by Kanye West",
            "Art: 'The Artist is Present' by Marina Abramović (Peak sincerity/endurance)"
          ]
        },
        "2011": {
          "salience_share": 10.8,
          "description": "The 'New Aesthetic' emerges in visual arts, acknowledging the blend of digital and physical. In literature, the 'essay-novel' gains ground, blurring the line between the author's sincere voice and the fictional narrative.",
          "key_manifestations": [
            "Novel: 'The Pale King' by David Foster Wallace (Posthumous)",
            "Novel: '1Q84' by Haruki Murakami",
            "TV: 'Girls' (Pilot produced) (The grotesque reality of the curated life)",
            "Visual Essay: 'The New Aesthetic' by James Bridle"
          ]
        },
        "2012": {
          "salience_share": 11.2,
          "description": "Irony returns as a defensive mechanism against the 'cringe' of online earnestness. The 'weird internet' humor begins to seep into mainstream art. However, mainstream culture remains dominated by the earnestness of superhero moral binaries.",
          "key_manifestations": [
            "Film: 'Spring Breakers' (Harmony Korine's neon-nihilism)",
            "Novel: 'Gone Girl' (The performance of the 'Cool Girl')",
            "Art: 'Restoration' of Ecco Homo (Meme as art object)",
            "TV: 'Adventure Time' (Sincere absurdism)"
          ]
        },
        "2013": {
          "salience_share": 11.5,
          "description": "The peak of the 'hipster' cycle and its collapse into 'Normcore.' Normcore is the ultimate metamodern statement: dressing like a suburban tourist not to mock them (90s irony), but to liberate oneself from the exhaustion of differentiation.",
          "key_manifestations": [
            "Trend: 'Normcore' (K-Hole trend report)",
            "Novel: 'The Goldfinch' by Donna Tartt",
            "Film: 'Her' (Sincere love for the artificial)",
            "Book: 'Tenth of December' by George Saunders"
          ]
        },
        "2014": {
          "salience_share": 11.9,
          "description": "The 'Vaporwave' visual aesthetic critiques 80s/90s consumerism through ironic nostalgia, but the feeling it evokes is a sincere, ghostly longing (hauntology). Cultural polarization begins to weaponize irony online (Gamergate).",
          "key_manifestations": [
            "Novel: '10:04' by Ben Lerner",
            "Film: 'The Grand Budapest Hotel' (Peak Anderson aestheticism)",
            "Album/Art: 'Floral Shoppe' by Macintosh Plus (Vaporwave canon)",
            "TV: 'BoJack Horseman' (Depression masked by cartoon animals)"
          ]
        },
        "2015": {
          "salience_share": 12.1,
          "description": "A shift toward 'Autofiction' solidifies. The need for 'Truth' in a post-digital world leads authors to abandon invented characters for the 'I.' The boundary between the artist's life and work dissolves.",
          "key_manifestations": [
            "Book: 'The Argonauts' by Maggie Nelson",
            "Novel: 'A Little Life' by Hanya Yanagihara (Melodrama as sincerity)",
            "Film: 'The Lobster' (Deadpan surrealism)",
            "Art: DIS Magazine 'The Data Issue'"
          ]
        },
        "2016": {
          "salience_share": 12.6,
          "description": "The 'Post-Truth' era begins. Irony is co-opted by the alt-right (Pepe the Frog), making irony politically suspect in liberal arts circles. This forces a retreat into 'Radical Softness' and explicit political sincerity in art institutions.",
          "key_manifestations": [
            "Film: 'Moonlight' (Radical vulnerability)",
            "Novel: 'The Underground Railroad' by Colson Whitehead",
            "Meme/Symbol: 'Pepe the Frog' (The weaponization of irony)",
            "Art: 'Dear Data' by Giorgia Lupi"
          ]
        },
        "2017": {
          "salience_share": 12.4,
          "description": "The '#MeToo' movement creates a demand for moral clarity and testimony. Ambiguity is deprioritized; art is judged by its ethical utility and the identity of the speaker. Irony is seen as a privilege of the unaffected.",
          "key_manifestations": [
            "Short Story: 'Cat Person' by Kristen Roupenian",
            "Film: 'Get Out' (Horror as social critique)",
            "Film: 'Lady Bird' (The new coming-of-age sincerity)",
            "Art: 'Fearless Girl' (Corporate sincerity)"
          ]
        },
        "2018": {
          "salience_share": 11.8,
          "description": "The emergence of 'Hopepunk' and 'Solarpunk' as literary sub-genres attempts to weaponize optimism. However, a counter-current of 'Doomer' aesthetics begins to rise online—a nihilistic acceptance of collapse that is neither ironic nor sincere, but numb.",
          "key_manifestations": [
            "Novel: 'My Year of Rest and Relaxation' by Ottessa Moshfegh (Dissociation as style)",
            "Film: 'Eighth Grade' (The anxiety of digital performance)",
            "TV: 'Succession' (The return of the lovable monster)",
            "Essay Collection: 'Trick Mirror' by Jia Tolentino"
          ]
        },
        "2019": {
          "salience_share": 11.5,
          "description": "Camp makes a return (Met Gala), but it is misinterpreted as mere costume. The nuance of 'failed seriousness' is lost. The cultural landscape is split: hyper-earnest 'Instagram poetry' vs. hyper-ironic 'Deep Fried Memes.'",
          "key_manifestations": [
            "Film: 'Parasite' (Global class critique)",
            "Novel: 'On Earth We're Briefly Gorgeous' by Ocean Vuong",
            "Film: 'Midsommar' (Daylight horror/emotional purge)",
            "Art: 'Comedian' (Banana taped to wall) by Maurizio Cattelan"
          ]
        },
        "2020": {
          "salience_share": 10.2,
          "description": "The COVID-19 pandemic halts the 'performance' of life. A brief window of 'Cottagecore' represents a desperate simulation of pastoral simplicity. Irony feels inadequate to the scale of death; sincerity feels inadequate to the scale of incompetence.",
          "key_manifestations": [
            "TV: 'Ted Lasso' (Aggressive niceness)",
            "Trend: 'Cottagecore' (Visual aesthetic on TikTok)",
            "Novel: 'Weather' by Jenny Offill",
            "Film: 'Nomadland'"
          ]
        },
        "2021": {
          "salience_share": 10.8,
          "description": "Post-pandemic mania takes hold. 'Vibe Shift' becomes a talking point. The return of 'Indie Sleaze' suggests a nostalgia for the messy, uncurated irony of the mid-2000s, rejecting the sanitized 'millennial pink' aesthetic.",
          "key_manifestations": [
            "Novel: 'No One Is Talking About This' by Patricia Lockwood",
            "Film: 'Don't Look Up' (Blunt force satire)",
            "Article: 'The Vibe Shift' (New York Magazine)",
            "Art: 'NFTs' (Bored Ape Yacht Club - Pure speculative irony)"
          ]
        },
        "2022": {
          "salience_share": 11.3,
          "description": "The rise of 'Corecore' (NicheTok) signifies a new form of visual Dadaism. Rapid-fire clips of emotional devastation mixed with consumer garbage. It is post-ironic: using irony to scream for help.",
          "key_manifestations": [
            "Film: 'Everything Everywhere All At Once' (Maximalist sincerity)",
            "Novel: 'The Candy House' by Jennifer Egan",
            "Trend: 'Goblin Mode' (Rejection of self-improvement)",
            "Film: 'Tár' (Ambiguity returns)"
          ]
        },
        "2023": {
          "salience_share": 11.7,
          "description": "The 'Pink' wave of Barbie vs. Oppenheimer creates a monocultural moment of bifurcation: performative artifice vs. existential dread. Literary trends move toward 'autotheory' exhaustion. The user is tired of the self.",
          "key_manifestations": [
            "Film: 'Barbie' (Corporate feminist meta-irony)",
            "Novel: 'Yellowface' by R.F. Kuang",
            "TV: 'The Curse' (Weaponized discomfort)",
            "Essay: 'The End of the English Major' (New Yorker)"
          ]
        },
        "2024": {
          "salience_share": 12.0,
          "description": "As AI begins to flood the zone with 'slop,' human imperfection becomes the new premium aesthetic. We see a turn toward 'roughness' in digital art and a rejection of the 'smooth' aesthetic of the 2010s. Irony is now used to distinguish human from bot.",
          "key_manifestations": [
            "Film: 'Civil War' (Apolitical war imagery)",
            "Novel: 'Intermezzo' by Sally Rooney",
            "Art Exhibition: 'Uncanny Valley' at The Shed (Speculative)",
            "Digital Trend: 'Dead Internet Theory' art (Glitch aesthetics)"
          ]
        },
        "2025": {
          "salience_share": 12.4,
          "description": "The cluster evolves into 'Neo-Humanism.' In the face of algorithmic generation, art that emphasizes biological limitation, mortality, and physical 'presence' spikes in value. The metamodern project concludes; we are no longer oscillating, but seeking solid ground in biology.",
          "key_manifestations": [
            "Novel: 'The Last Biologic' (Speculative title: Memoir of illness)",
            "Film: 'Mickey 17' by Bong Joon-ho",
            "Art: 'The Human Stain' (Bio-matter sculpture movement)",
            "Tech/Art: 'No-AI' Certification Seals on literary works"
          ]
        }
      }
    },
    "2_mediated_identity_and_autofiction": {
      "name": "The Mediated Self: From Identity Politics to Algorithmic curation",
      "description": "This cluster tracks how the American 'Self' is constructed through media. It begins with the multicultural identity politics of the 90s, moves through the performative exhibitionism of Reality TV and Blogs in the 00s, transforms into the curated 'Brand Called You' of the 10s, and dissolves into the algorithmic fragmentation of the 20s.",
      "trajectory": {
        "1990": {
          "salience_share": 6.5,
          "description": "Identity politics enters the mainstream art world. The 'Self' is defined by one's position within a power structure (Race, Class, Gender). The 'Culture Wars' are in full swing, with the NEA funding battles centering on whose identity gets to be art.",
          "key_manifestations": [
            "Documentary: 'Paris Is Burning' (Performance of gender/class)",
            "Book: 'Gender Trouble' by Judith Butler",
            "Art: 'Mining the Museum' by Fred Wilson",
            "TV: 'In Living Color' (Subversion of racial tropes)"
          ]
        },
        "1991": {
          "salience_share": 7.0,
          "description": "The Anita Hill hearings and the Rodney King video create a visual epistemology where personal testimony and video evidence challenge the master narrative. The 'Memoir Boom' begins to gestate as the preferred literary mode of truth.",
          "key_manifestations": [
            "Film: 'The Silence of the Lambs' (Gender dynamics in the gaze)",
            "Book: 'Maus II' by Art Spiegelman",
            "Art: 'Untitled (Portrait of Ross in L.A.)' by Félix González-Torres",
            "Event: The Clarence Thomas / Anita Hill Hearings (Televised testimony)"
          ]
        },
        "1992": {
          "salience_share": 7.3,
          "description": "The 'Real World' on MTV launches. This is the Year Zero for the mediated self. It establishes the premise that 'being yourself' on camera is a valid form of labor and art. The boundary between private life and public entertainment cracks.",
          "key_manifestations": [
            "TV: 'The Real World: New York' (Invention of Reality TV)",
            "Novel: 'Waiting to Exhale' by Terry McMillan",
            "Film: 'Malcolm X' by Spike Lee",
            "Art: 'Checklist' by Guerrilla Girls"
          ]
        },
        "1993": {
          "salience_share": 7.8,
          "description": "The memoir gains literary prestige. The story of the self is no longer just for celebrities; the 'confessional' becomes a democratic right. Visual arts see the rise of 'Abject Art'—the physical body as the site of identity.",
          "key_manifestations": [
            "Memoir: 'Girl, Interrupted' by Susanna Kaysen",
            "Film: 'Philadelphia' (Mainstreaming of AIDS narrative)",
            "Art: Kiki Smith's 'Tale' (The abject body)",
            "Novel: 'The Shipping News' by Annie Proulx"
          ]
        },
        "1994": {
          "salience_share": 8.0,
          "description": "Prozac Nation defines a generation's approach to internal identity: chemical, medicalized, and worthy of public consumption. The 'depressive' identity becomes a marketable aesthetic.",
          "key_manifestations": [
            "Memoir: 'Prozac Nation' by Elizabeth Wurtzel",
            "Film: 'Hoop Dreams' (Documentary as narrative construction)",
            "TV: 'My So-Called Life'",
            "Art: Catherine Opie's 'Self-Portrait/Cutting'"
          ]
        },
        "1995": {
          "salience_share": 8.2,
          "description": "The internet remains a niche for identity construction (MUDs/Chatrooms), allowing for 'identity tourism.' One can be anyone online. In the physical world, the O.J. Simpson trial turns a real life into a racialized, serialized drama.",
          "key_manifestations": [
            "Book: 'Life on the Screen' by Sherry Turkle",
            "Film: 'Clueless' (Identity as fashion curation)",
            "Novel: 'High Fidelity' by Nick Hornby (Identity as consumption)",
            "Art: 'The crossing' by Bill Viola"
          ]
        },
        "1996": {
          "salience_share": 8.5,
          "description": "Oprah's Book Club launches, creating a massive new infrastructure for the 'redemptive memoir.' The consumption of other people's trauma becomes a primary mode of empathy in American culture.",
          "key_manifestations": [
            "Event: Launch of Oprah's Book Club",
            "Memoir: 'Angela's Ashes' by Frank McCourt",
            "Film: 'Jerry Maguire' (The crisis of the corporate self)",
            "Art: 'Settings' series by Wolfgang Tillmans"
          ]
        },
        "1997": {
          "salience_share": 8.9,
          "description": "The death of Princess Diana creates a global spectacle of mourning, validating the parasocial relationship. We grieve for the image. In literature, the 'multicultural novel' moves from niche to blockbuster.",
          "key_manifestations": [
            "Novel: 'Memoirs of a Geisha' by Arthur Golden (The fabricated memoir)",
            "Film: 'Boogie Nights' (The found family as identity)",
            "Music Video: 'Smack My Bitch Up' (First-person perspective visual)",
            "Art: '1000 Hours of Staring' by Tom Friedman"
          ]
        },
        "1998": {
          "salience_share": 9.2,
          "description": "Sex and the City premieres. The column-as-life. The protagonist narrates her own life as it happens, establishing the template for the blog/vlog format. Identity is something you analyze with friends over brunch.",
          "key_manifestations": [
            "TV: 'Sex and the City' (The curated lifestyle)",
            "Film: 'The Truman Show' (Prophetic critique of the mediated self)",
            "Novel: 'The Hours' by Michael Cunningham",
            "Art: Chris Ofili's 'The Holy Virgin Mary'"
          ]
        },
        "1999": {
          "salience_share": 9.5,
          "description": "The Blair Witch Project utilizes the 'found footage' style, blurring the line between reality and fiction. It predicts the 'receipts' culture of the internet. The self is only real if it is recorded.",
          "key_manifestations": [
            "Film: 'The Blair Witch Project'",
            "Novel: 'Interpreter of Maladies' by Jhumpa Lahiri",
            "TV: 'The Sopranos' (The sociopath as protagonist)",
            "Website: 'Blogger' launches (Democratization of the diary)"
          ]
        },
        "2000": {
          "salience_share": 9.8,
          "description": "Reality TV explodes with 'Survivor.' The game is 'social engineering.' We begin to view human interaction as a strategic game of alliances and betrayals. The 'Self' is a contestant.",
          "key_manifestations": [
            "TV: 'Survivor' (The gamification of social self)",
            "Film: 'American Psycho' (The self as void)",
            "Novel: 'White Teeth' by Zadie Smith",
            "Art: 'Hepper' by Murakami (Superflat identity)"
          ]
        },
        "2001": {
          "salience_share": 9.0,
          "description": "A temporary dip in individualistic identity focus as collective identity (Patriotism) surges post-9/11. The 'Self' is subsumed by the 'National.'",
          "key_manifestations": [
            "TV: '24' (Identity defined by security utility)",
            "Novel: 'The Corrections' (Generational identity crisis)",
            "Film: 'Mulholland Drive' (The fracturing of identity)",
            "Photo: 'Falling Man' by Richard Drew"
          ]
        },
        "2002": {
          "salience_share": 9.4,
          "description": "The rise of the 'Blogosphere.' The 'Mommy Blog' and the political blog allow for the micro-celebrity. Ordinary lives begin to have audiences. The 'Confessional' moves from books to daily posts.",
          "key_manifestations": [
            "Platform: Friendster (Pre-social media mapping)",
            "Film: '8 Mile' (Autobiography as myth-making)",
            "Novel: 'Middlesex' by Jeffrey Eugenides",
            "Art: 'The cremaster cycle' concludes"
          ]
        },
        "2003": {
          "salience_share": 9.9,
          "description": "MySpace launches. The first mass-scale curation of the visual self. The 'Top 8' forces a ranking of relationships. Music taste and CSS code become proxies for the soul.",
          "key_manifestations": [
            "Website: MySpace",
            "Book: 'A Million Little Pieces' by James Frey (The fabricated memoir scandal - pivotal)",
            "Film: 'Shattered Glass' (The lie as identity)",
            "TV: 'America's Next Top Model' (The commodification of the face)"
          ]
        },
        "2004": {
          "salience_share": 10.3,
          "description": "Facebook launches. Unlike the anonymity of the 90s or the pseudonymity of blogs, Facebook demands 'Real Names.' The digital self is now tethered to the legal self.",
          "key_manifestations": [
            "Website: The Facebook",
            "Film: 'Mean Girls' (Social hierarchy taxonomy)",
            "Novel: 'The Plot Against America' (National identity crisis)",
            "Art: 'Mark Zuckerberg's Face' (The new portraiture)"
          ]
        },
        "2005": {
          "salience_share": 10.7,
          "description": "YouTube launches. 'Broadcast Yourself.' The rise of the vlog. Ordinary people talking to cameras in bedrooms. The aesthetic of the 'jump cut' creates a new cadence of speech.",
          "key_manifestations": [
            "Website: YouTube",
            "Novel: 'The Year of Magical Thinking' by Joan Didion",
            "Film: 'Grizzly Man' (The fatal performance of nature)",
            "TV: 'The Office' (US) (The mockumentary gaze)"
          ]
        },
        "2006": {
          "salience_share": 11.0,
          "description": "Time Magazine's Person of the Year is 'You.' This marks the peak of Web 2.0 optimism. The user is the creator. The collapse of the gatekeeper allows for a flood of identity-content.",
          "key_manifestations": [
            "Magazine Cover: Time's 'You'",
            "Novel: 'The Road' (The reduction of identity to 'Father/Son')",
            "Film: 'Borat' (Exposing American identity)",
            "Twitter: Launch (The stream of consciousness self)"
          ]
        },
        "2007": {
          "salience_share": 11.4,
          "description": "The iPhone releases. The camera is now always with us. The 'Selfie' (though not yet named) becomes technically frictionless. Documentation of the self becomes a concurrent activity with living.",
          "key_manifestations": [
            "Product: The iPhone",
            "TV: 'Keeping Up with the Kardashians' (The dawn of the influencer)",
            "Film: 'There Will Be Blood' (The self-made monster)",
            "Novel: 'Call Me by Your Name'"
          ]
        },
        "2008": {
          "salience_share": 11.8,
          "description": "The Obama campaign utilizes social identity and grassroots storytelling like never before. Identity politics becomes 'Hope.' In literature, the focus shifts to the immigrant experience as the quintessential American story.",
          "key_manifestations": [
            "Poster: 'Hope' by Shepard Fairey",
            "Film: 'Slumdog Millionaire'",
            "Novel: 'Netherland' by Joseph O'Neill",
            "Art: 'The New Museum' opens on Bowery"
          ]
        },
        "2009": {
          "salience_share": 12.1,
          "description": "Knausgaard's 'My Struggle' (English release begins) creates a seismic shift in literature. The mundane details of life are elevated to epic status. The distinction between author and narrator is obliterated.",
          "key_manifestations": [
            "Novel: 'My Struggle: Book 1' by Karl Ove Knausgaard",
            "Film: 'Avatar' (The literal avatar)",
            "TV: 'RuPaul's Drag Race' (Identity as construction/art)",
            "App: Grindr (Identity as geolocation)"
          ]
        },
        "2010": {
          "salience_share": 12.5,
          "description": "Instagram launches. The 'Visual Turn' of identity. We move from text-based blogs to image-based grids. The 'Lifestyle' becomes the art object. We are all art directors of our own lives.",
          "key_manifestations": [
            "App: Instagram",
            "Film: 'Catfish' (The fake digital self)",
            "Novel: 'Super Sad True Love Story' by Gary Shteyngart",
            "Art: 'Self-Portrait as a Coffee Pot' by William Kentridge"
          ]
        },
        "2011": {
          "salience_share": 12.8,
          "description": "Snapchat launches. The ephemeral self. The idea that the digital record should rot like memory. It introduces a counter-movement to the 'permanent record' of Facebook.",
          "key_manifestations": [
            "App: Snapchat",
            "Novel: 'The Marriage Plot' by Jeffrey Eugenides",
            "Film: 'Shame' (The addict self)",
            "TV: 'Black Mirror' (The National Anthem)"
          ]
        },
        "2012": {
          "salience_share": 13.0,
          "description": "Tinder gamifies the sexual self. The 'Swipe' logic reduces identity to a card. In literature, Ben Lerner's 'Leaving the Atocha Station' cements the dominance of the autofictional voice in American letters.",
          "key_manifestations": [
            "Novel: 'Leaving the Atocha Station' by Ben Lerner",
            "Film: 'Frances Ha'",
            "App: Tinder",
            "Song/Video: 'Gangnam Style' (Global viral identity)"
          ]
        },
        "2013": {
          "salience_share": 13.2,
          "description": "The word 'Selfie' is added to the dictionary. It is the cultural eigencluster of the year. Art museums begin to be designed for the selfie (The Rain Room).",
          "key_manifestations": [
            "Word: 'Selfie' (Oxford Dictionaries Word of the Year)",
            "Novel: 'Americanah' by Chimamanda Ngozi Adichie",
            "Installation: 'Rain Room' at MoMA",
            "TV: 'Orange Is the New Black' (Intersectionality on screen)"
          ]
        },
        "2014": {
          "salience_share": 13.5,
          "description": "#Gamergate acts as a dark mirror to identity politics. The 'Gamer' identity is weaponized. It foreshadows the rise of identity-based reactionary movements.",
          "key_manifestations": [
            "Event: Gamergate",
            "Film: 'Birdman' (The crisis of relevance)",
            "Novel: 'Department of Speculation' by Jenny Offill",
            "Podcast: 'Serial' (True Crime as obsession)"
          ]
        },
        "2015": {
          "salience_share": 13.8,
          "description": "Rachel Dolezal and Caitlyn Jenner. Identity is debated as 'essential' vs. 'constructed' vs. 'felt.' The definition of 'Woman' or 'Black' becomes the central tension in the cultural manifold.",
          "key_manifestations": [
            "Magazine Cover: Vanity Fair 'Call Me Caitlyn'",
            "Novel: 'The Sellout' by Paul Beatty",
            "Film: 'Tangerine' (Shot on iPhone - raw identity)",
            "Play: 'Hamilton' (Reframing national identity)"
          ]
        },
        "2016": {
          "salience_share": 13.5,
          "description": "The Trump election is a clash of identity epistemologies (White Rural Identity vs. Cosmopolitan Identity). The algorithm creates filter bubbles where we only see reflections of our own identity tribe.",
          "key_manifestations": [
            "Book: 'Hillbilly Elegy' by J.D. Vance",
            "Film: 'I Am Not Your Negro' (Baldwin's voice)",
            "Visual Album: 'Lemonade' by Beyoncé",
            "Art: 'The Fear of an Immigrant Planet'"
          ]
        },
        "2017": {
          "salience_share": 13.0,
          "description": "TikTok (Musical.ly rebrand) begins its ascent. Identity becomes mimetic. We don't just post our lives; we perform specific, trending 'challenges.' Identity is a remix.",
          "key_manifestations": [
            "App: TikTok (Global launch)",
            "Short Story: 'Cat Person' (The disparity of perception)",
            "Film: 'Call Me by Your Name' (Nostalgic identity)",
            "Art: 'Open Casket' controversy at Whitney Biennial"
          ]
        },
        "2018": {
          "salience_share": 12.5,
          "description": "Deepfakes emerge. The visual evidence of the self is no longer trustworthy. 'Cancel Culture' reaches a fever pitch—the public excision of a person's digital identity for moral transgressions.",
          "key_manifestations": [
            "Tech: Deepfakes",
            "Novel: 'Severance' by Ling Ma",
            "Film: 'Eighth Grade'",
            "TV: 'Pose' (Ballroom culture canonized)"
          ]
        },
        "2019": {
          "salience_share": 12.0,
          "description": "The 'Influencer' economy saturates. The 'Finstagram' (Fake Instagram) trend shows a desire for a 'backstage' self, but even the backstage is curated.",
          "key_manifestations": [
            "TV: 'Euphoria' (Gen Z aesthetic identity)",
            "Film: 'Joker' (The incel identity)",
            "Novel: 'In the Dream House' by Carmen Maria Machado",
            "Art: 'Can't Help Myself' (Robot leaking oil)"
          ]
        },
        "2020": {
          "salience_share": 11.0,
          "description": "Zoom Dysmorphia. We spend hours staring at our own faces in video calls. The self is a flat image on a screen. The Black Lives Matter protests center racial identity as the primary axis of American life.",
          "key_manifestations": [
            "Event: George Floyd Murals",
            "TV: 'I May Destroy You'",
            "Novel: 'Luster' by Raven Leilani",
            "Film: 'Minari'"
          ]
        },
        "2021": {
          "salience_share": 10.5,
          "description": "The Metaverse is proposed. The idea of a fully disembodied, cartoon avatar self. It is rejected by the culture (mocked), showing a limit to how far we want to detach from the physical body.",
          "key_manifestations": [
            "Event: Meta rebranding",
            "Film: 'Spencer' (The prison of public identity)",
            "Novel: 'Detransition, Baby' by Torrey Peters",
            "Art: 'Beeple's 5000 Days' (Digital ownership)"
          ]
        },
        "2022": {
          "salience_share": 10.2,
          "description": "The 'NPC' (Non-Player Character) meme. People streaming themselves acting like video game background characters. The self as an automaton. The ultimate surrender of agency.",
          "key_manifestations": [
            "Trend: NPC Streaming on TikTok",
            "Film: 'The Whale' (The body as prison)",
            "Novel: 'The Furrows' by Namwali Serpell",
            "TV: 'The White Lotus' (Class identity as trap)"
          ]
        },
        "2023": {
          "salience_share": 9.8,
          "description": "The 'Main Character Energy' trend dies out, replaced by a desire to be 'unperceived.' The exhaustion of maintaining a personal brand leads to a desire for anonymity.",
          "key_manifestations": [
            "Novel: 'Biography of X' by Catherine Lacey",
            "Film: 'Dream Scenario' (The meme-ification of a person)",
            "Trend: 'De-influencing'",
            "Art: 'Refik Anadol's Unsupervised' (AI dreaming)"
          ]
        },
        "2024": {
          "salience_share": 9.5,
          "description": "AI Clones. We can now train AIs on our own texts and voice to create digital twins. The 'Self' can be outsourced. The question 'Is this you?' becomes the primary epistemological query.",
          "key_manifestations": [
            "Film: 'The Substance' (Body horror of the better self)",
            "Novel: 'James' by Percival Everett (Reclaiming the narrative)",
            "Tech: 'Apple Vision Pro' (Isolationist immersion)",
            "Art: 'Deepfake Drag' (Synthetic performance)"
          ]
        },
        "2025": {
          "salience_share": 9.2,
          "description": "The 'Post-Authentic' Self. We accept that all online interactions are likely mediated by AI enhancement. We stop looking for the 'real' person online and treat the digital sphere as a purely fictional domain. We retreat to physical-only spaces for 'truth.'",
          "key_manifestations": [
            "Novel: 'The Offline' (Speculative: A cult of disconnection)",
            "Film: 'Data Dust'",
            "Art: 'Bio-Auth' (DNA as the only signature)",
            "Movement: 'The Butlerian Jihad' (rejection of thinking machines in art)"
          ]
        }
      }
    },
    "3_hyperreal_fragmentation_and_database_logic": {
      "name": "From Narrative to Database: The Fragmentation of Attention",
      "description": "This cluster explores the structural change in how stories are told and consumed. It maps the shift from linear, coherent narratives (Cinema, Novel) to 'Database Logic' (Manovich)—the infinite scroll, the hyperlink, the loop, and the fragment. It is the move from deep attention to hyper-attention.",
      "trajectory": {
        "1990": {
          "salience_share": 2.5,
          "description": "Narrative linearity is still the absolute monarch. Television flow is determined by network executives. However, the remote control (zapping) offers the first primitive form of fragmentation.",
          "key_manifestations": [
            "TV: 'Twin Peaks' (Dream logic disrupting police procedural)",
            "Book: 'The Encyclopedia of the Dead' by Danilo Kis",
            "Tech: Cable TV expansion (500 channels promise)",
            "Art: 'Jenny Holzer's Truisms' (Text as bite-sized art)"
          ]
        },
        "1991": {
          "salience_share": 2.8,
          "description": "MTV's quick-cut aesthetic begins to bleed into feature films. The attention span is being trained for speed. The music video is the dominant avant-garde form.",
          "key_manifestations": [
            "Music Video: 'Losing My Religion' (Tarsem Singh's tableau style)",
            "Film: 'JFK' (Oliver Stone's multi-format editing)",
            "Book: 'Mao II' by Don DeLillo (The image replacing the crowd)",
            "Tech: The World Wide Web becomes publicly available"
          ]
        },
        "1992": {
          "salience_share": 3.2,
          "description": "Hypertext fiction (e.g., 'Afternoon, a story') creates the first serious literary attempt to break linearity. The reader chooses the path. It remains niche but epistemologically significant.",
          "key_manifestations": [
            "Hypertext: 'Afternoon, a story' by Michael Joyce",
            "Film: 'Wayne's World' (Meta-narrative breaking the fourth wall)",
            "TV: 'MTV Sports' (The extreme camera angle)",
            "Art: 'Video art' gains museum traction"
          ]
        },
        "1993": {
          "salience_share": 3.8,
          "description": "The video game 'Doom' popularizes the first-person perspective. The screen is no longer a window to watch, but a space to navigate. Immersion begins to rival observation.",
          "key_manifestations": [
            "Game: 'Doom'",
            "Film: 'Groundhog Day' (The loop as narrative structure)",
            "Book: 'Virtual Light' by William Gibson",
            "Art: 'Bill Viola's Nantes Triptych'"
          ]
        },
        "1994": {
          "salience_share": 4.1,
          "description": "Pulp Fiction's non-linear timeline becomes a massive hit, proving mainstream audiences can handle (and enjoy) temporal fragmentation. The 'Mosaic Narrative' becomes a trend.",
          "key_manifestations": [
            "Film: 'Pulp Fiction'",
            "Film: 'Chungking Express' (Bifurcated narrative)",
            "Browser: Netscape Navigator ( The portal to the web)",
            "TV: 'Friends' (The ensemble structure)"
          ]
        },
        "1995": {
          "salience_share": 4.5,
          "description": "The Web expands. The 'Home Page' allows for a spatial organization of information rather than a temporal one. We 'visit' sites rather than 'watch' programs.",
          "key_manifestations": [
            "Film: 'Toy Story' (The computer-generated image)",
            "Book: 'The Diamond Age' by Neal Stephenson",
            "Art: 'Net.art' movement begins",
            "Film: '12 Monkeys' (Temporal confusion)"
          ]
        },
        "1996": {
          "salience_share": 5.0,
          "description": "Infinite Jest uses footnotes to fracture the reading experience, forcing the reader to physically loop back and forth. It mimics the hypertext experience in analog form.",
          "key_manifestations": [
            "Novel: 'Infinite Jest'",
            "Film: 'Trainspotting' (Episodic, drug-induced fragmentation)",
            "Game: 'Super Mario 64' (3D spatial exploration)",
            "Art: 'Douglas Gordon's 24 Hour Psycho'"
          ]
        },
        "1997": {
          "salience_share": 5.4,
          "description": "Tamagotchi introduces the concept of 'maintenance' attention—constant, low-level interruption. The DVD format introduces 'Scene Selection' and 'Bonus Features,' deconstructing the film object.",
          "key_manifestations": [
            "Product: Tamagotchi",
            "Film: 'Gummo' (Vignette structure)",
            "Book: 'Mason & Dixon' (Pynchon's historical remix)",
            "Tech: DVD launch"
          ]
        },
        "1998": {
          "salience_share": 5.8,
          "description": "Google launches. The 'Search' replaces the 'Table of Contents.' Knowledge becomes query-based rather than curriculum-based. We access information in fragments, divorced from context.",
          "key_manifestations": [
            "Website: Google Beta",
            "Film: 'Run Lola Run' (Video game logic in film)",
            "TV: 'Cowboy Bebop' (Genre remixing)",
            "Art: 'Pipilotti Rist's Ever is Over All'"
          ]
        },
        "1999": {
          "salience_share": 6.2,
          "description": "Napster deconstructs the 'Album.' Music is consumed as individual tracks. The playlist begins to replace the artist's intended sequencing.",
          "key_manifestations": [
            "Software: Napster",
            "Film: 'Magnolia' (Hyper-link cinema)",
            "Film: 'The Matrix' (The digital rain code)",
            "Book: 'House of Leaves' (Ergodic literature)"
          ]
        },
        "2000": {
          "salience_share": 6.5,
          "description": "The Flash animation boom. 'Homestar Runner' and 'Newgrounds' create a chaotic, user-generated visual language. Glitch art begins to be appreciated.",
          "key_manifestations": [
            "Film: 'Memento' (Reverse linearity)",
            "Website: Homestar Runner",
            "Book: 'Pastoralia' by George Saunders",
            "Art: 'Superflat' manifesto"
          ]
        },
        "2001": {
          "salience_share": 6.1,
          "description": "A pause in fragmentation. The 24-hour news cycle (CNN/Fox) during 9/11 creates a singular, obsessive, linear focus. The 'Crawl' at the bottom of the screen becomes permanent.",
          "key_manifestations": [
            "TV: The News Crawl/Ticker",
            "Film: 'Mulholland Drive' (Dream fragmentation)",
            "Book: 'Austerlitz' by W.G. Sebald (Text/Image integration)",
            "Tech: iPod (1000 songs in your pocket - shuffle mode)"
          ]
        },
        "2002": {
          "salience_share": 6.4,
          "description": "Lev Manovich publishes 'The Language of New Media,' defining 'Database' vs 'Narrative.' The database (list, collection) begins to become the dominant cultural form.",
          "key_manifestations": [
            "Theory: 'The Language of New Media' by Lev Manovich",
            "Film: 'Russian Ark' (The unedited single take - anti-fragmentation)",
            "TV: 'The Wire' (Novelistic complexity)",
            "Game: 'Grand Theft Auto: Vice City' (Open world sandbox)"
          ]
        },
        "2003": {
          "salience_share": 6.7,
          "description": "RSS feeds allow users to aggregate headlines. We scan rather than read. The 'skimming' of culture becomes the primary mode of consumption.",
          "key_manifestations": [
            "Tech: RSS Feed adoption",
            "Film: 'Elephant' (Perspective fragmentation)",
            "Book: 'Pattern Recognition' by William Gibson",
            "Art: 'The Weather Project'"
          ]
        },
        "2004": {
          "salience_share": 7.0,
          "description": "Web 2.0. The 'Tag' (folksonomy) replaces the hierarchy. Information is organized by keywords, creating dynamic, shifting clusters of meaning.",
          "key_manifestations": [
            "Website: Flickr (Tagging culture)",
            "Film: 'Eternal Sunshine' (Memory fragmentation)",
            "Book: 'Cloud Atlas' (Nested narratives)",
            "TV: 'Lost' (The Mystery Box - narrative as puzzle)"
          ]
        },
        "2005": {
          "salience_share": 7.3,
          "description": "YouTube. The clip culture. Video is atomized into 3-minute segments. Context is often lost as clips are embedded on other sites.",
          "key_manifestations": [
            "Website: YouTube",
            "Film: 'Sin City' (Panel-to-screen literalism)",
            "Book: 'Extremely Loud & Incredibly Close' (Visual text)",
            "Art: 'Ryan Trecartin's videos'"
          ]
        },
        "2006": {
          "salience_share": 7.6,
          "description": "Twitter limits thought to 140 characters. This is a profound constraint on literary expression. The aphorism and the 'hot take' become the new literary units.",
          "key_manifestations": [
            "Platform: Twitter",
            "Film: 'Inland Empire' (Digital video surrealism)",
            "Book: 'World War Z' (Oral history format)",
            "Game: 'Wii Sports' (Physicality in gaming)"
          ]
        },
        "2007": {
          "salience_share": 7.9,
          "description": "The Scroll. The iPhone introduces the vertical infinity. We no longer turn pages; we slide down a bottomless column. The 'Feed' becomes the primary organizer of time.",
          "key_manifestations": [
            "UX: The Infinite Scroll",
            "Film: 'Zodiac' (The procedural without resolution)",
            "Book: 'The Savage Detectives' (Polyphonic fragmentation)",
            "TV: 'Mad Men'"
          ]
        },
        "2008": {
          "salience_share": 8.2,
          "description": "Netflix streaming launches. The 'Binge' model. We consume narrative in massive, gluttonous blocks, but often while 'second screening' on phones. Attention is split.",
          "key_manifestations": [
            "Service: Netflix Streaming",
            "Film: 'Cloverfield' (Fragmented perspective)",
            "Book: '2666' (Five loose parts)",
            "Art: 'Cory Arcangel's Super Mario Clouds'"
          ]
        },
        "2009": {
          "salience_share": 8.5,
          "description": "Minecraft. The world is made of blocks that can be rearranged. There is no story, only construction. The database is the game.",
          "key_manifestations": [
            "Game: Minecraft",
            "Film: 'District 9' (Documentary style sci-fi)",
            "Book: 'E-E-E-E-E' by Tao Lin",
            "App: WhatsApp (Fragmentation of communication)"
          ]
        },
        "2010": {
          "salience_share": 8.8,
          "description": "Instagram. Life is curated into a grid. The visual aesthetic is 'square.' The caption is secondary. The image is supreme, but it is disposable.",
          "key_manifestations": [
            "App: Instagram",
            "Film: 'Enter the Void' (First person disembodiment)",
            "Book: 'A Visit from the Goon Squad' (Powerpoint chapter)",
            "Art: 'Christian Marclay's The Clock' (24-hour montage)"
          ]
        },
        "2011": {
          "salience_share": 9.1,
          "description": "Snapchat. Ephemerality. Content that disappears. It fights against the database (archive) but increases the speed of consumption. The 'Story' format (24h lifespan) is born.",
          "key_manifestations": [
            "App: Snapchat",
            "Film: 'The Tree of Life' (Cosmic montage)",
            "Book: 'The Pale King' (Unfinished fragments)",
            "TV: 'Black Mirror'"
          ]
        },
        "2012": {
          "salience_share": 9.4,
          "description": "GIF culture peaks on Tumblr. The loop becomes a key aesthetic. A 3-second moment is repeated endlessly. It creates a 'timeless' sensation.",
          "key_manifestations": [
            "Platform: Tumblr GIF culture",
            "Film: 'Holy Motors' (Narrative incoherence)",
            "Book: 'Building Stories' by Chris Ware (Box of fragments)",
            "Art: 'Hito Steyerl's In Defense of the Poor Image'"
          ]
        },
        "2013": {
          "salience_share": 9.7,
          "description": "Vine. 6 seconds. The ultimate compression of narrative. It creates a new breed of comedy based on the jump-cut and the abrupt ending.",
          "key_manifestations": [
            "App: Vine",
            "Film: 'Spring Breakers' (Repetitive dialogue loops)",
            "Book: 'Taipei'",
            "Music: 'Vaporwave' (Slowed loops)"
          ]
        },
        "2014": {
          "salience_share": 10.0,
          "description": "Serial (Podcast). Audio storytelling fragments the week. We dissect evidence on Reddit. The audience becomes part of the investigation (the database).",
          "key_manifestations": [
            "Podcast: Serial",
            "Film: 'Boyhood' (Time accumulated)",
            "Book: 'Citizen: An American Lyric' (Hybrid text/image)",
            "Game: 'Five Nights at Freddy's' (surveillance gameplay)"
          ]
        },
        "2015": {
          "salience_share": 10.3,
          "description": "Periscope/Facebook Live. Raw, unedited streaming. The 'Feed' is now live. We watch things happen in real-time, often with no narrative arc.",
          "key_manifestations": [
            "Tech: Live Streaming",
            "Film: 'Tangerine'",
            "Book: 'The Argonauts'",
            "Art: 'Post-Internet Art' peak"
          ]
        },
        "2016": {
          "salience_share": 10.6,
          "description": "The Fake News ecosystem. Information fragmentation leads to 'alternative facts.' The shared reality fractures into competing databases of truth.",
          "key_manifestations": [
            "Phenomenon: Fake News farms",
            "Film: 'HyperNormalisation' (Documentary collage)",
            "Book: 'Swing Time'",
            "TV: 'Stranger Things' (Nostalgia remix)"
          ]
        },
        "2017": {
          "salience_share": 11.0,
          "description": "TikTok merges the Vine loop with the algorithmic feed. The 'For You' page creates a hyper-personalized, endless stream of unconnected content. Narrative is dead; the 'Vibe' is king.",
          "key_manifestations": [
            "App: TikTok",
            "Film: 'The Florida Project'",
            "Book: 'Lincoln in the Bardo' (Voices fragment)",
            "Art: 'TeamLab' (Immersive digital)"
          ]
        },
        "2018": {
          "salience_share": 11.4,
          "description": "Fortnite. The Metaverse prototype. It is a game, a concert venue, a social space. IP from Marvel, Star Wars, and John Wick collide. Context is obliterated.",
          "key_manifestations": [
            "Game: Fortnite",
            "Film: 'Spider-Man: Into the Spider-Verse' (Visual glitching)",
            "Book: 'My Year of Rest and Relaxation'",
            "TV: 'Bandersnatch' (Interactive Netflix)"
          ]
        },
        "2019": {
          "salience_share": 11.8,
          "description": "Deepfakes and FaceFilters. The fragmentation of the face. We can wear other faces. Reality is malleable.",
          "key_manifestations": [
            "Tech: Deepfakes",
            "Film: 'Uncut Gems' (Anxiety inducing noise)",
            "Book: 'Ducks, Newburyport' (One sentence novel)",
            "Art: 'Ian Cheng's BOB'"
          ]
        },
        "2020": {
          "salience_share": 12.5,
          "description": "The Doomscroll. During the pandemic, the feed becomes our only window to the world. We refresh for disaster. Time dissolves into 'Blur'sday.'",
          "key_manifestations": [
            "Term: Doomscrolling",
            "TV: 'Tiger King' (Chaotic reality)",
            "Book: 'The Silence'",
            "Social: 'Clubhouse' (Audio fragmentation)"
          ]
        },
        "2021": {
          "salience_share": 12.8,
          "description": "NFTs. The attempt to turn digital fragments into unique objects. The 'receipt' is the art. The image itself is secondary to its hash on the blockchain.",
          "key_manifestations": [
            "Art: Beeple's $69M sale",
            "Film: 'Dune' (Part One - incomplete narrative)",
            "Book: 'No One Is Talking About This'",
            "Trend: 'Metaverse' hype"
          ]
        },
        "2022": {
          "salience_share": 13.2,
          "description": "AI Art (Midjourney). The database eats art. The AI scans the entire history of art (the dataset) and regurgitates hybrids. It is the ultimate triumph of the database over the artist.",
          "key_manifestations": [
            "Tech: Midjourney/DALL-E 2",
            "Film: 'Everything Everywhere All At Once' (Multiverse fragmentation)",
            "Book: 'The Candy House'",
            "Trend: 'Sludge Content' (Split screen sensory overload)"
          ]
        },
        "2023": {
          "salience_share": 13.5,
          "description": "ChatGPT. Text is now generated by probability, not intent. The 'hallucination' is a feature, not a bug. We are reading statistical noise.",
          "key_manifestations": [
            "Tech: GPT-4",
            "Film: 'Across the Spider-Verse'",
            "TV: 'The Last of Us' (Game fidelity)",
            "Trend: 'NPC' behavior"
          ]
        },
        "2024": {
          "salience_share": 13.8,
          "description": "The Dead Internet Theory feels real. Bots talking to bots. The human user must navigate a sea of synthetic fragmentation to find 'real' connection. 'Verifiability' becomes the highest aesthetic value.",
          "key_manifestations": [
            "Tech: 'Sora' (AI Video)",
            "Film: 'Civil War'",
            "Book: 'James'",
            "Trend: Return to Flip Phones (Rejection of the feed)"
          ]
        },
        "2025": {
          "salience_share": 14.0,
          "description": "Spatial Computing (AR). The screen dissolves into the world. Fragmentation is no longer on a device; it is overlaid on reality. The 'Hyperreal' is now just 'The Real.'",
          "key_manifestations": [
            "Tech: Apple Vision Pro adoption",
            "Film: 'A Minecraft Movie' (The final IP homogenization)",
            "Book: 'The Cloud Corpse' (Speculative)",
            "Art: 'Augmented Reality Graffiti' wars"
          ]
        }
      }
    }
  }
};

const americanCulturePreset: PresetConfig = {
  id: 'american_culture_v2',
  name: 'American Culture Analysis (1990-2025)',
  description: 'Cultural variance analysis tracking postmodern irony, mediated identity, and narrative fragmentation',
  startYear: '1990',
  endYear: '2025',
  clusterStart: 1,
  clusterEnd: 3,
  periodicity: 1,
  context: 'American Arts & Culture / Media Studies',
  model: 'o1-mini',
  cachedResult: americanCultureData
};

export default americanCulturePreset;

