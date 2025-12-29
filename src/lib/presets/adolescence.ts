import { PresetConfig } from './types';

export const adolescenceData = {
  "metadata": {
    "period": "1999-2016",
    "interval": "1 year",
    "cluster_range": "1-20",
    "measurement": "relative cultural variance explained (0-100)",
    "top_20_clusters": [
      "1_mediated_existentialism_and_digital_dualism [↗] (11.5%)",
      "2_performative_vulnerability_and_new_sincerity [↗] (9.2%)",
      "3_ironic_detachment_vs_earnestness [↘] (7.8%)",
      "4_security_theater_and_terror_management [→] (6.5%)",
      "5_participatory_spectacle_and_micro_celebrity [↗] (6.1%)",
      "6_retromania_and_cultural_hauntology [↗] (5.4%)",
      "7_nerd_culture_hegemony_and_mainstreaming [↗] (5.1%)",
      "8_precarious_labor_and_gig_economy_mindset [↗] (4.2%)",
      "9_algorithmic_determinism [↗] (3.8%)",
      "10_post_secular_spirituality [→] (3.1%)",
      "11_indie_sleaze_and_curated_imperfection [↘] (2.9%)",
      "12_global_justice_and_alter_globalization [↘] (2.5%)",
      "13_corporate_personhood_and_brand_intimacy [↗] (2.2%)",
      "14_subprime_optimism_and_recession_grief [↘] (2.1%)",
      "15_post_humanism_and_transhumanist_anxiety [→] (1.9%)",
      "16_poptimism_and_the_death_of_guilty_pleasures [↗] (1.8%)",
      "17_slacktivism_and_click_based_praxis [↗] (1.5%)",
      "18_new_atheism_and_rationalist_hubris [↘] (1.2%)",
      "19_maker_culture_and_artisanal_reaction [→] (1.1%)",
      "20_young_adult_dystopianism [↗] (0.9%)"
    ]
  },
  "clusters": {
    "1_mediated_existentialism_and_digital_dualism": {
      "name": "Mediated Existentialism and Digital Dualism",
      "description": "This cluster maps the cultural tension between 'IRL' (In Real Life) and 'Online' existence, evolving from a clear dichotomy into a seamless, augmented reality. It encompasses the philosophical anxieties regarding simulation, the gamification of identity, and the growing sense that the digital self is more malleable—and perhaps more 'real'—than the physical self. In the late 90s, this was characterized by techno-skepticism and the fear of the machine (Y2K); by the mid-2000s, it shifted to the joy of curated escapism (MMORPGs, MySpace); and by the mid-2010s, it calcified into the 'Always On' condition where the barrier between data and flesh dissolved entirely. This eigencluster is the primary driver of the period's specific flavor of alienation and connectivity.",
      "trajectory": {
        "1999": {
          "salience_share": 12.4,
          "description": "The cluster launches with high variance driven by pre-millennial tension and Y2K anxiety. The release of 'The Matrix' acts as the primary catalyst, crystallizing a generation's latent fear that their comfortable reality is a construct, perfectly coinciding with the rapid adoption of broadband. This year defines the 'Digital Dualism' peak: the belief that the cyber-world is a distinct, separate plane of existence (cyberspace) where one can reinvent oneself, separate from the meat-space of the body. The tone is one of exhilarating vertigo—a mix of techno-utopian promise and gnostic dread about the loss of the authentic soul to the machine.",
          "key_manifestations": [
            "The Matrix (Film)",
            "Futurama, S1E09 'Hell Is Other Robots' (TV Episode)",
            "Existenz (Film)",
            "EverQuest (MMORPG Release)"
          ]
        },
        "2000": {
          "salience_share": 11.2,
          "description": "Variance contracts slightly (-1.2%) as the Y2K bug proves benign, leading to a temporary 'reality check' and a cooling of apocalyptic techno-fever. However, the dot-com bubble burst introduces a new form of digital nihilism; the virtual economy crashed, but the cultural infrastructure remained. The focus shifts from the terrifying power of AI to the alienating texture of the digital landscape itself. Radiohead’s 'Kid A' serves as the sonic aesthetic of this era—dissociated, glitchy, and mourning the human connection lost in the transmission, marking a pivot from external threats to internal digital isolation.",
          "key_manifestations": [
            "Kid A by Radiohead (Album)",
            "The Sims (Video Game)",
            "Battle Royale (Film)",
            "House of Leaves by Mark Z. Danielewski (Novel)"
          ]
        },
        "2001": {
          "salience_share": 10.5,
          "description": "The 9/11 attacks act as a massive exogenous shock, causing a sharp dip in techno-escapism (-0.7%) as the 'Desert of the Real' violently intrudes upon the American consciousness. The frivolousness of the virtual is briefly rejected in favor of visceral, terrifying reality and security theater. However, a counter-current emerges: the internet becomes a tool for communal grieving and conspiracy theory, laying the groundwork for the 'truth-seeking' behavior that would later define online culture. The variance here is characterized by a friction between the desire to retreat into media and the impossibility of ignoring geopolitical trauma.",
          "key_manifestations": [
            "Grand Theft Auto III (Video Game)",
            "Donnie Darko (Film)",
            "Metal Gear Solid 2: Sons of Liberty (Video Game)",
            "The launch of Wikipedia (Website)"
          ]
        },
        "2002": {
          "salience_share": 11.8,
          "description": "Variance rebounds (+1.3%) as the trauma of 2001 drives a cultural retreat into profound fantasy and constructed worlds. This is the year digital dualism solidifies into a coping mechanism; if the real world is terrifying, the constructed world offers control. The rise of the blogosphere (LiveJournal) allows for the creation of textual avatars—highly emotional, curated versions of the self that exist purely in text. This marks the early 'emo' synthesis where technology becomes the vessel for hyper-emotional vulnerability, paradoxically mediated through screens.",
          "key_manifestations": [
            "The Elder Scrolls III: Morrowind (Video Game)",
            "Lifted or The Story is in the Soil, Keep Your Ear to the Ground by Bright Eyes (Album)",
            "Minority Report (Film)",
            "Friendster (Beta Launch)"
          ]
        },
        "2003": {
          "salience_share": 12.5,
          "description": "The launch of Second Life and the explosion of MySpace propels the variance upward (+0.7%), shifting the cluster from passive consumption to active 'Identity Curation.' The question is no longer 'Is the Matrix real?' but 'How do I style my profile?' The distinct line between online and offline begins to blur as social standing in schools becomes tethered to digital Top 8 lists. The 'indie' aesthetic begins to merge with digital prowess; discovering music via file-sharing becomes a form of cultural capital, replacing physical crate-digging with digital archaeology.",
          "key_manifestations": [
            "Second Life (Virtual World)",
            "MySpace (Social Network)",
            "Give Up by The Postal Service (Album)",
            "Lost in Translation (Film)"
          ]
        },
        "2004": {
          "salience_share": 13.2,
          "description": "The variance surges (+0.7%) with the release of World of Warcraft, which institutionalizes the 'second life' as a mass-market phenomenon. For millions, the digital avatar becomes the primary locus of achievement and socialization, rendering the physical body merely a vessel to operate the keyboard. Culturally, 'Eternal Sunshine of the Spotless Mind' reflects the growing anxiety about memory as data—something that can be edited, deleted, or corrupted. The 'emo' subculture reaches a fever pitch, utilizing these digital channels to broadcast raw, often performative, despair.",
          "key_manifestations": [
            "World of Warcraft (Video Game)",
            "Eternal Sunshine of the Spotless Mind (Film)",
            "Facebook (Thefacebook) launch at Harvard",
            "Katamari Damacy (Video Game)"
          ]
        },
        "2005": {
          "salience_share": 13.8,
          "description": "The emergence of YouTube creates a new catalyst: 'Broadcast Self.' The variance increases (+0.6%) as the barrier to entry for digital performance collapses. Reality is no longer just experienced; it is recorded for upload. This year marks the transition from text-based digital dualism to video-based performativity. The cultural zeitgeist shifts toward 'authenticity' captured on low-resolution webcams, creating a paradox where the most 'real' moments are those staged for a digital audience. The 'noughties' indie aesthetic thrives here, as obscure bands gain global traction through blogs like Pitchfork, bypassing traditional gatekeepers.",
          "key_manifestations": [
            "YouTube (Platform Launch)",
            "I'm Wide Awake, It's Morning by Bright Eyes (Album)",
            "Animal Crossing: Wild World (Video Game)",
            "Blueberry Boat by The Fiery Furnaces (Album)"
          ]
        },
        "2006": {
          "salience_share": 14.1,
          "description": "Facebook's introduction of the 'News Feed' fundamentally alters the cluster, introducing the concept of the 'algorithmic timeline.' Variance creeps up (+0.3%) as the passive 'checking' of profiles is replaced by a push-stream of information. This is the proto-stage of 'doomscrolling.' The 'Matrix' metaphor evolves; we are no longer in pods, but we are increasingly feeding a machine that feeds us back a curated version of our friends' lives. Nintendo's Wii reintroduces the body to the digital, but as a controller, further complicating the disembodiment thesis.",
          "key_manifestations": [
            "Twitter (Launch)",
            "Time Magazine's 'You' Person of the Year cover",
            "Paprika (Film)",
            "Wii Sports (Video Game)"
          ]
        },
        "2007": {
          "salience_share": 15.5,
          "description": "A critical inflection point (+1.4%): The release of the iPhone begins the death of 'Digital Dualism.' The distinction between 'online' and 'offline' begins to dissolve as the internet becomes a pocket-sized overlay on reality. While the full effect takes years to saturate, the cultural variance shifts immediately toward 'connectivity anxiety.' We see the rise of the 'quantified self' in nascent forms. Culturally, this matches the peak of the 'Indie Sleaze' era—a chaotic, flash-photography documentation of nightlife that exists primarily to be uploaded the next morning.",
          "key_manifestations": [
            "The iPhone (Product Launch)",
            "Portal (Video Game)",
            "Sound of Silver by LCD Soundsystem (Album)",
            "Assassin's Creed (Video Game)"
          ]
        },
        "2008": {
          "salience_share": 14.8,
          "description": "The Financial Crisis serves as a massive displacing force (-0.7%). The abstract concerns of digital existence are temporarily overshadowed by material survival. However, the crisis reinforces the theme of 'mediated reality'—the realization that complex, invisible digital financial instruments (CDS) could destroy physical livelihoods. 'Wall-E' perfectly captures the cultural mood: a ruined earth abandoned for a screen-mediated existence in space. The cluster pivots from the joy of connectivity to the dystopia of dependency.",
          "key_manifestations": [
            "Wall-E (Film)",
            "Dear Science by TV on the Radio (Album)",
            "Braid (Video Game)",
            "Synecdoche, New York (Film)"
          ]
        },
        "2009": {
          "salience_share": 14.2,
          "description": "The rise of Minecraft signals a return to 'construction' within the digital space, stabilizing the variance (-0.6%). The anxiety of the crash settles into a 'new normal' of digital precariousness. This year sees the consolidation of the 'App Economy,' where life's functions are increasingly outsourced to software. The 'hipster' aesthetic begins to ossify, relying heavily on a nostalgic 'retromania' facilitated by digital archives (Tumblr, YouTube), creating a loop where the past is constantly remixed into the present feed.",
          "key_manifestations": [
            "Minecraft (Alpha Release)",
            "Merriweather Post Pavilion by Animal Collective (Album)",
            "Avatar (Film)",
            "FarmVille (Game)"
          ]
        },
        "2010": {
          "salience_share": 13.5,
          "description": "The release of 'The Social Network' and the launch of Instagram mark the 'aestheticization of reality.' Variance drops (-0.7%) not because the phenomenon is fading, but because it is becoming invisible—becoming the water we swim in. The concept of 'selling out' dies as personal branding becomes a survival mechanism. The 'Matrix' is no longer a prison to escape; it is a marketplace to dominate. Kanye West's 'MBDTF' exemplifies this maximalist, curated vulnerability—the ego exploded across all media channels.",
          "key_manifestations": [
            "The Social Network (Film)",
            "Instagram (App Launch)",
            "My Beautiful Dark Twisted Fantasy by Kanye West (Album)",
            "Scott Pilgrim vs. the World (Film)"
          ]
        },
        "2011": {
          "salience_share": 13.0,
          "description": "Digital dualism flares up briefly (+0.5% variance implicit in the conflict) as physical bodies reassert themselves in Zuccotti Park (Occupy) and Tahrir Square. However, these physical movements are coordinated entirely via digital channels, reinforcing the integration. 'Black Mirror' debuts, providing the definitive text for the decade's technophobia—shifting the fear from 'AI will kill us' to 'Social Media will degrade our souls.' The cluster effectively transitions from 'Existentialism' to 'Dystopian Realism.'",
          "key_manifestations": [
            "Black Mirror, S1E03 'The Entire History of You' (TV Episode)",
            "Minecraft (Full Release)",
            "Bon Iver, Bon Iver (Album)",
            "Ready Player One by Ernest Cline (Novel)"
          ]
        },
        "2012": {
          "salience_share": 12.4,
          "description": "The peak of the 'Twee' and 'New Sincerity' movement creates a softening in the cluster (-0.6%). The digital world is used to project an image of artisanal simplicity (mason jars on Instagram). 'Her' (filmed this year) begins to permeate the discourse, predicting an emotional pivot where intimacy with software feels safer than intimacy with humans. The 'End of the World' (Mayan Calendar) meme circulates ironically online, highlighting a culture that processes apocalypse as just another hashtag.",
          "key_manifestations": [
            "Indie Game: The Movie (Documentary)",
            "Girls (TV Series Premiere)",
            "Channel Orange by Frank Ocean (Album)",
            "Candy Crush Saga (Mobile Game)"
          ]
        },
        "2013": {
          "salience_share": 12.8,
          "description": "The Snowden leaks act as a violent catalyst (+0.4%), injecting paranoia back into the digital substrate. The 'Always On' state is revealed to be a state of 'Always Watched.' This kills the last remnants of the 90s 'cyber-utopianism.' The internet is no longer a playground; it is a panopticon. Culturally, this manifests in a darker, more cynical tone in media. Lorde’s 'Pure Heroine' critiques the curated luxury of the Instagram era, signaling a generational shift away from millennial optimism to Gen Z realism.",
          "key_manifestations": [
            "Her (Film)",
            "Edward Snowden Leaks (Global Event)",
            "Pure Heroine by Lorde (Album)",
            "The Stanley Parable (Video Game)"
          ]
        },
        "2014": {
          "salience_share": 13.5,
          "description": "Gamergate creates a toxic surge (+0.7%) in the cluster, weaponizing the 'Gamer' identity and revealing the dark underbelly of online community formation. The 'culture war' fully migrates to digital battlefields. The distinction between 'internet drama' and 'real world consequences' evaporates as doxxing becomes a standard weapon. This year represents the loss of innocence for the 'nerd culture' that rose in the 2000s; the tools of connection are repurposed for exclusion and harassment.",
          "key_manifestations": [
            "Ex Machina (Film)",
            "Five Nights at Freddy's (Video Game)",
            "Serial (Podcast)",
            "Twitch Plays Pokémon (Social Experiment)"
          ]
        },
        "2015": {
          "salience_share": 13.9,
          "description": "The variance climbs (+0.4%) as the political landscape begins to merge with meme culture. The announcement of Donald Trump's candidacy—essentially a reality TV star using Twitter as a direct neural link to the electorate—signifies the total collapse of the 'Serious/Digital' divide. In the arts, 'Hamilton' uses hip-hop to remix history, paralleling how the internet remixes context. The 'internet of things' begins to trend, promising that even our toasters will be part of the network, finalizing the enclosure of physical space.",
          "key_manifestations": [
            "Mr. Robot (TV Series)",
            "Undertale (Video Game)",
            "To Pimp a Butterfly by Kendrick Lamar (Album)",
            "Inside Out (Film)"
          ]
        },
        "2016": {
          "salience_share": 14.5,
          "description": "The cluster culminates in a 'Supernova' event (+0.6%) with the release of Pokémon Go. For a few weeks, the digital map literally overwrites the physical territory, causing stampedes in public parks. This is the final victory of the Augmented Reality over the Real. Simultaneously, the 2016 election demonstrates that 'Post-Truth' (a digitally native epistemology) has usurped traditional fact. The 'Matrix' is no longer something you plug into; it is the air itself. The era of 'Digital Dualism' ends because there is no longer a 'Dualism'—there is only the feed.",
          "key_manifestations": [
            "Pokémon Go (App)",
            "HyperNormalisation (Documentary)",
            "Blonde by Frank Ocean (Album)",
            "Stranger Things (TV Series)"
          ]
        }
      }
    },
    "2_performative_vulnerability_and_new_sincerity": {
      "name": "Performative Vulnerability and New Sincerity",
      "description": "This cluster tracks the cultural rejection of Gen X's defensive irony and slacker cynicism in favor of a raw, often curated, emotional openness. It begins with the 'Death of Irony' post-9/11 and the rise of Emo and Twee subcultures, where wearing one's heart on one's sleeve became a counter-cultural act. Over the decade, this evolved from a niche artistic aesthetic (Wes Anderson, Bright Eyes) into a dominant social currency via the internet (LiveJournal, Tumblr), where sharing trauma, anxiety, and 'messiness' became a prerequisite for authenticity. By the end of the period, this sincerity had been fully commodified into 'personal branding,' creating a tension between genuine connection and the performative enactment of sadness for engagement.",
      "trajectory": {
        "1999": {
          "salience_share": 5.2,
          "description": "The cluster begins as a nascent reaction against the glossy, hyper-commercialized pop culture of the late 90s (TRL, Britney Spears) and the detached cool of 90s alternative rock. The variance starts low but rising (+0.8%) as 'American Beauty' and 'Magnolia' inject a melodramatic, almost hysterical demand for feeling into the cultural bloodstream. This is the year the 'sensitive male' archetype begins to mutate from the grunge sufferer to the suburban emo protagonist. The catalyst is a generational exhaustion with irony; young people are beginning to crave a connection that feels unmediated by coolness, even if that connection is messy and uncomfortable.",
          "key_manifestations": [
            "American Beauty (Film)",
            "Magnolia (Film)",
            "Clarity by Jimmy Eat World (Album)",
            "Freaks and Geeks (TV Series)"
          ]
        },
        "2000": {
          "salience_share": 6.1,
          "description": "Variance increases (+0.9%) as the 'New Sincerity' finds its literary and musical footing. Dave Eggers' 'A Heartbreaking Work of Staggering Genius' serves as the manifesto for this era: self-aware, meta-fictional, yet desperate to be taken seriously as an emotional document. In music, the 'Emo' genre begins to break out of the hardcore scene and into the college rock vernacular. The displacing force here is the decline of 'Nu Metal' aggression, which is being replaced by a more melodic, interiorized form of angst. The aesthetic of the 'hoodie' as a shield against the world begins to take hold.",
          "key_manifestations": [
            "A Heartbreaking Work of Staggering Genius by Dave Eggers (Memoir)",
            "Almost Famous (Film)",
            "Relationship of Command by At the Drive-In (Album)",
            "Gilmore Girls (TV Series Premiere)"
          ]
        },
        "2001": {
          "salience_share": 7.8,
          "description": "The 9/11 attacks act as a massive accelerant (+1.7%), leading to the premature declaration of the 'Death of Irony.' The cultural mood shifts violently toward the earnest; frivolous detachment feels obscene in the face of national tragedy. 'The Royal Tenenbaums' provides the aesthetic template for the decade: a stylized, diorama-like world where characters are deeply depressed but visually composed. This 'Twee' aesthetic offers a way to process sadness through a filter of childhood nostalgia. The cluster expands as vulnerability becomes patriotic and necessary, displacing the cynicism of the Seinfeld era.",
          "key_manifestations": [
            "The Royal Tenenbaums (Film)",
            "Bleed American by Jimmy Eat World (Album)",
            "Donnie Darko (Film)",
            "Scrubs (TV Series Premiere)"
          ]
        },
        "2002": {
          "salience_share": 8.5,
          "description": "The variance continues to climb (+0.7%) as the 'Emo' subculture explodes into the mainstream consciousness via Dashboard Confessional. The 'Unplugged' performance becomes a cultural touchstone—one guy, one guitar, screaming about heartbreak—validating male weeping as a public spectacle. Culturally, this year marks the normalization of 'oversharing' online through the explosion of LiveJournal. The catalyst is the democratization of publishing; teenagers can now broadcast their inner monologues to the world, creating a feedback loop where emotional volatility attracts peer attention.",
          "key_manifestations": [
            "MTV Unplugged 2.0 by Dashboard Confessional (Album)",
            "Yankee Hotel Foxtrot by Wilco (Album)",
            "The Hours (Film)",
            "LiveJournal (Peak Growth Phase)"
          ]
        },
        "2003": {
          "salience_share": 9.4,
          "description": "The introduction of Seth Cohen in 'The O.C.' acts as a pop-culture catalyst (+0.9%), mainstreaming the 'indie geek' who is articulate, sensitive, and listens to Death Cab for Cutie. Sincerity becomes a mating strategy. The 'Post-Punk Revival' (Interpol, The Strokes) offers a cooler counter-point, but even there, the lyrics are often desperate pleas for connection. The cluster absorbs the 'Manic Pixie Dream Girl' trope (crystallized in 'Elizabethtown' a few years later but present here in spirit), representing the male desire to be saved by a woman's unbridled whimsy and emotional intensity.",
          "key_manifestations": [
            "Transatlanticism by Death Cab for Cutie (Album)",
            "The O.C. (TV Series)",
            "Lost in Translation (Film)",
            "Room on Fire by The Strokes (Album)"
          ]
        },
        "2004": {
          "salience_share": 10.2,
          "description": "The release of 'Garden State' marks the absolute peak of the 'Twee/Indie' phase of this cluster (+0.8%). The soundtrack alone dictates the taste of a generation, equating 'The Shins' with life-changing emotional epiphanies. Sincerity is now a distinct aesthetic style: scream-singing, quirkiness, and a rejection of traditional masculinity. However, 'Mean Girls' provides a counter-narrative, exposing the performative nature of teenage social dynamics. The variance is driven by a desire for 'authenticity' in a world that feels increasingly plasticky and manufactured.",
          "key_manifestations": [
            "Garden State (Film)",
            "Funeral by Arcade Fire (Album)",
            "Good News for People Who Love Bad News by Modest Mouse (Album)",
            "Eternal Sunshine of the Spotless Mind (Film)"
          ]
        },
        "2005": {
          "salience_share": 11.0,
          "description": "Bright Eyes' dual release of 'I'm Wide Awake, It's Morning' and 'Digital Ash' serves as the high-water mark for the 'New Sincerity' in music (+0.8%). Conor Oberst becomes the avatar of the era: trembling voice, hyper-literate lyrics, and political earnestness (anti-Bush). This year sees the political merge with the personal; feeling bad about the world is conflated with feeling bad about oneself. The cluster begins to institutionalize 'sadness' as a signifier of intelligence. The 'Hipster' archetype begins to coalesce around this mix of irony-free appreciation of vintage culture and deep emotional expression.",
          "key_manifestations": [
            "I'm Wide Awake, It's Morning by Bright Eyes (Album)",
            "Brokeback Mountain (Film)",
            "Illinois by Sufjan Stevens (Album)",
            "How I Met Your Mother (TV Series Premiere)"
          ]
        },
        "2006": {
          "salience_share": 10.8,
          "description": "The variance dips slightly (-0.2%) as the 'Emo' aesthetic becomes so commercialized (Fall Out Boy, My Chemical Romance) that it risks becoming a parody of itself. However, the underlying drive for sincerity mutates. 'The Black Parade' is a rock opera about death, pushing the theatricality of vulnerability to its limit. In the indie sphere, 'Little Miss Sunshine' cements the 'dysfunctional family dramedy' as the primary vehicle for exploring sincerity. The 'Free Hugs' campaign goes viral on YouTube, exemplifying the naive, open-armed optimism that characterizes the pre-Recession internet.",
          "key_manifestations": [
            "The Black Parade by My Chemical Romance (Album)",
            "Little Miss Sunshine (Film)",
            "The Science of Sleep (Film)",
            "Free Hugs Campaign (Viral Video)"
          ]
        },
        "2007": {
          "salience_share": 10.5,
          "description": "The cluster stabilizes (-0.3%) as the 'Indie' look becomes the standard uniform for the upwardly mobile urban youth. Bon Iver's 'For Emma, Forever Ago' (leaking this year) creates a new archetype: the 'Cabin Exile.' This moves the locus of sincerity from the suburban bedroom to the imaginary rural wilderness. It represents a retreat from the digital noise into a 'pure' analog sadness. Meanwhile, 'Juno' codifies the rapid-fire, hyper-articulate dialogue that allows characters to be vulnerable while pretending they are just being witty.",
          "key_manifestations": [
            "For Emma, Forever Ago by Bon Iver (Album)",
            "Juno (Film)",
            "In Rainbows by Radiohead (Album)",
            "Skins (TV Series Premiere)"
          ]
        },
        "2008": {
          "salience_share": 9.8,
          "description": "The Great Recession creates a fissure in the cluster (-0.7%). The whimsical, twee vulnerability of 'Garden State' suddenly feels privileged and out of touch. The 'Manic Pixie Dream Girl' trope begins to face backlash for its sexism. However, a new form of 'Communal Sincerity' rises in response to the economic collapse—seen in the ecstatic, choral energy of bands like Fleet Foxes. The focus shifts from 'my personal heartbreak' to 'our collective survival,' pivoting the cluster toward a more folk-oriented, communal aesthetic.",
          "key_manifestations": [
            "Fleet Foxes (Self-Titled Album)",
            "Twilight (Film)",
            "Synecdoche, New York (Film)",
            "WALL-E (Film)"
          ]
        },
        "2009": {
          "salience_share": 9.2,
          "description": "Variance continues to decline (-0.6%) as 'Poptimism' begins to displace 'Indie Snobbery.' The need to be sad to be deep is challenged by the joyous, unironic embrace of pop music (Lady Gaga). However, 'Glee' and 'Modern Family' repackage sincerity for a mass audience—optimistic, inclusive, and performative. The 'hipster' is now fully mainstream, and the signifiers of the subculture (flannel, beards) are adopted by the general public, stripping them of their original 'outsider' emotional valence.",
          "key_manifestations": [
            "Modern Family (TV Series Premiere)",
            "Glee (TV Series Premiere)",
            "XX by The xx (Album)",
            "500 Days of Summer (Film)"
          ]
        },
        "2010": {
          "salience_share": 9.5,
          "description": "The cluster finds new energy (+0.3%) through the rise of 'Adventure Time' and the 'CalArts Style' in animation, which introduces a 'radical softness'—surreal humor underpinned by genuine emotional warmth. This appeals deeply to the millennial generation entering adulthood. David Foster Wallace's posthumous recognition solidifies 'New Sincerity' as an intellectual framework, framing the struggle against irony as a spiritual duty. This year marks the transition from 'Emo' angst to 'Millennial Burnout' anxiety.",
          "key_manifestations": [
            "Adventure Time (TV Series Premiere)",
            "Blue Valentine (Film)",
            "The Suburbs by Arcade Fire (Album)",
            "Humans of New York (Blog Launch)"
          ]
        },
        "2011": {
          "salience_share": 9.0,
          "description": "Lana Del Rey's 'Video Games' goes viral, introducing a catalyst for 'Sad Girl Theory' (+0.5% internal shift, though total variance dips). It challenges the 'authentic' acoustic aesthetic with a Hollywood-manufactured, glamorous depression. This fractures the cluster: one side pursues the 'authentic' folk route (Mumford & Sons), while the other embraces the artifice of sadness. 'Portlandia' debuts, effectively killing the 2000s indie hipster dream by satirizing its earnestness into oblivion. The era of 'Put a Bird on It' ends; the era of self-aware curation begins.",
          "key_manifestations": [
            "Portlandia (TV Series Premiere)",
            "Video Games by Lana Del Rey (Single)",
            "The Tree of Life (Film)",
            "Bon Iver, Bon Iver (Album)"
          ]
        },
        "2012": {
          "salience_share": 8.4,
          "description": "The launch of 'Girls' on HBO acts as a massive displacing force (-0.6%) for the 'Twee' aesthetic, replacing it with 'Hyper-Real Messiness.' Hannah Horvath is vulnerable, but she is also narcissistic and unlikable. This kills the 'preciousness' of the 2000s. Sincerity is no longer about being sweet; it's about exposing one's ugliest flaws. Frank Ocean's open letter on Tumblr regarding his sexuality marks a watershed moment for Black vulnerability in hip-hop/R&B, shifting the locus of the cluster away from white indie rock.",
          "key_manifestations": [
            "Girls (TV Series Premiere)",
            "Channel Orange by Frank Ocean (Album)",
            "The Perks of Being a Wallflower (Film)",
            "Tiny Beautiful Things by Cheryl Strayed (Book)"
          ]
        },
        "2013": {
          "salience_share": 8.8,
          "description": "Tumblr culture enters its golden age, causing a resurgence (+0.4%) in the cluster through the 'Social Justice' lens. Vulnerability is weaponized as praxis; stating one's trauma becomes a form of political identity. The 'Soft Grunge' aesthetic on Tumblr revives the 90s look but strips it of its aggression, replacing it with a pastel, sad aesthetic. Lorde's 'Pure Heroine' critiques the consumerist pop culture with a sincere, teenage cynicism that resonates globally. The 'Selfie' is named word of the year, cementing the idea that the face one shows the world is a curated performance.",
          "key_manifestations": [
            "Pure Heroine by Lorde (Album)",
            "Her (Film)",
            "Steven Universe (TV Series Premiere)",
            "Vampire Weekend's Modern Vampires of the City (Album)"
          ]
        },
        "2014": {
          "salience_share": 9.1,
          "description": "The cluster evolves into 'Sadcom' territory (+0.3%) with 'BoJack Horseman' and 'Transparent.' These shows use comedy as a Trojan horse for devastating explorations of depression and trauma. Sincerity is now the domain of adult animation and prestige TV. In gaming, 'Gone Home' and the rise of 'walking simulators' prioritize narrative empathy over mechanics, sparking intense backlash (Gamergate) from those who view this 'invasion of feelings' as a threat to traditional gaming culture.",
          "key_manifestations": [
            "BoJack Horseman (TV Series Premiere)",
            "Transparent (TV Series Premiere)",
            "Gone Home (Console Release)",
            "Boyhood (Film)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "The release of 'Undertale' serves as a massive cultural touchstone (+0.4%), gamifying the concept of 'pacifism' and 'mercy.' It proves that a video game based on sincerity and friendship can dominate the internet, rejecting the grimdark aesthetics of the AAA industry. Kendrick Lamar's 'To Pimp a Butterfly' brings a searing, complex vulnerability to the center of the cultural conversation, exploring self-loathing and survivor's guilt. The 'New Sincerity' has now fully matured from a quirky indie affectation into a serious mode of artistic engagement with trauma.",
          "key_manifestations": [
            "Undertale (Video Game)",
            "To Pimp a Butterfly by Kendrick Lamar (Album)",
            "Inside Out (Film)",
            "Master of None (TV Series Premiere)"
          ]
        },
        "2016": {
          "salience_share": 9.9,
          "description": "The period concludes with 'Moonlight' and 'Blonde,' two works that define a new 'Atmospheric Vulnerability' (+0.4%). The specific aesthetics of the 2000s (emo, twee) are dead, but the 'New Sincerity' has won the war. Vulnerability is now the default mode of high art. However, on social media, the 2016 election creates a rupture; sincerity is increasingly viewed through a partisan lens. The 'Crying Jordan' meme and the concept of 'coping' indicate a culture that is overwhelmed by feeling, where the only response to reality is a dissociative, ironic, yet deeply pained laughter.",
          "key_manifestations": [
            "Moonlight (Film)",
            "Blonde by Frank Ocean (Album)",
            "A Moon Shaped Pool by Radiohead (Album)",
            "Arrival (Film)"
          ]
        }
      }
    },
    "3_ironic_detachment_vs_earnestness": {
      "name": "Ironic Detachment vs. Earnestness",
      "description": "This cluster maps the dominance and subsequent erosion of 'Irony' as the default mode of cultural engagement. Beginning as the defining 'Gen X' trait—a protective layer of cynicism used to navigate a commercialized world (e.g., *Seinfeld*, *South Park*)—it faces an existential crisis following 9/11. The trajectory tracks the mutation of irony from a philosophical stance into a lifestyle aesthetic (the 'Hipster'), then into 'Post-Irony' (where sincerity and mockery are indistinguishable), and finally into a weaponized political tool. While 'New Sincerity' (Cluster 2) rose to challenge it, this cluster specifically analyzes the *defense mechanisms* of the culture: how we used humor to distance ourselves from reality, and how that distance collapsed.",
      "trajectory": {
        "1999": {
          "salience_share": 10.5,
          "description": "The period opens at the absolute peak of 'Imperial Irony' (+0.5% variance). The cultural default is a sneering, nihilistic detachment where caring about anything is viewed as uncool. *Fight Club* and *American Beauty* critique consumerism not with hope, but with cynical destruction. *Family Guy* debuts, institutionalizing the 'reference-as-joke' structure that prioritizes recognition over emotion. The catalyst is the end-of-history boredom; with no major wars or crises, the only intellectual stance available is to mock the absurdity of comfort.",
          "key_manifestations": [
            "Fight Club (Film)",
            "Family Guy (TV Series Premiere)",
            "South Park: Bigger, Longer & Uncut (Film)",
            "Significant Others by Limp Bizkit (Album)"
          ]
        },
        "2000": {
          "salience_share": 10.2,
          "description": "Variance holds steady (-0.3%) as the 'Jackass' phenomenon introduces 'Pain as Irony.' The physical body becomes the punchline, rejecting the sanctity of self-preservation for a laugh. *Scary Movie* grosses nearly $300M, proving that the parody of a genre is now more profitable than the genre itself. The tone is juvenile and aggressive; it is the last gasp of the 'frat boy' irony before the geopolitical mood shifts. Eminem's *The Marshall Mathers LP* dominates, using multi-layered irony to deflect criticism of misogyny and homophobia ('I'm just playing America').",
          "key_manifestations": [
            "Jackass (TV Series Premiere)",
            "Scary Movie (Film)",
            "The Marshall Mathers LP by Eminem (Album)",
            "American Psycho (Film)"
          ]
        },
        "2001": {
          "salience_share": 8.1,
          "description": "The 9/11 attacks cause a massive, instantaneous collapse in the variance of this cluster (-2.1%). Graydon Carter famously declares 'the end of the age of irony.' The 'too cool to care' attitude of the 90s is rendered instantly obsolete and offensive in the face of genuine horror. *The Onion*'s 9/11 issue marks a crucial pivot point: it uses humor not to detach, but to process collective grief, signaling the birth of a more somber, functional irony. Pure nihilism retreats; *Zoolander*, released shortly after, feels like a relic from a bygone era of frivolousness.",
          "key_manifestations": [
            "The Onion's 'Holy Fucking Shit: Attack on America' Issue (Satire)",
            "Zoolander (Film)",
            "Ghost World (Film)",
            "The Royal Tenenbaums (Film)"
          ]
        },
        "2002": {
          "salience_share": 8.6,
          "description": "Variance rebounds (+0.5%) as irony finds a new vehicle: 'Vice Culture.' The *Vice Guide to New York* establishes the template for the 'Hipster'—a figure who consumes working-class culture (trucker hats, Pabst Blue Ribbon) not out of genuine appreciation, but as an aesthetic pose. This is 'Class Tourism Irony.' The catalyst is the gentrification of Williamsburg and the Lower East Side, where cultural capital is built on obscurity and the recontextualization of 'trash' culture. The 'white belt' scene exemplifies this stylized detachment.",
          "key_manifestations": [
            "Vice Magazine (Growth Phase)",
            "Jackass: The Movie (Film)",
            "Yankee Hotel Foxtrot by Wilco (Album - The irony of the record label conflict)",
            "Grand Theft Auto: Vice City (Video Game - 80s Pastiche)"
          ]
        },
        "2003": {
          "salience_share": 9.2,
          "description": "The 'Hipster Irony' solidifies into a dominant subculture (+0.6%). The 'Metrosexual' trend creates a confusing overlap between genuine grooming and ironic performance of masculinity. *The Simple Life* debuts, turning the stupidity of the wealthy into a spectator sport, but the audience's enjoyment is layered—we are laughing *at* them, but we are also consuming what they consume. *Arrested Development* premieres, introducing a dense, meta-textual sitcom format that rewards obsessive viewing and detachment from the unlikable characters.",
          "key_manifestations": [
            "The Simple Life (TV Series Premiere)",
            "Arrested Development (TV Series Premiere)",
            "Elephant (Film)",
            "Chappelle's Show (TV Series Premiere)"
          ]
        },
        "2004": {
          "salience_share": 9.5,
          "description": "The cluster reaches a local peak (+0.3%) with *Napoleon Dynamite*. The film is a Rorschach test for the era: is it mocking the protagonist, or celebrating him? It represents 'Blank Stare Irony'—awkwardness presented without commentary. *Team America: World Police* applies the *South Park* ethos to the War on Terror, maintaining a nihilistic distance from both the jingoistic Right and the self-righteous Left. Irony is now the only safe political stance; believing in anything earnest feels naive.",
          "key_manifestations": [
            "Napoleon Dynamite (Film)",
            "Team America: World Police (Film)",
            "Shaun of the Dead (Film)",
            "Mean Girls (Film)"
          ]
        },
        "2005": {
          "salience_share": 8.9,
          "description": "Variance begins a slow decline (-0.6%) as 'The Office' (US) gains traction. Unlike the UK original, the US version softens the edges, introducing genuine romance (Jim and Pam) into the mockumentary format. This signals the 'Mainstreaming of Irony'—the wink to the camera becomes a comforting trope rather than a subversive act. The rise of YouTube allows for 'Cringe Culture' to emerge; we are no longer just creating irony, we are hunting for 'fails' to mock, shifting the dynamic from artistic creation to passive judgment.",
          "key_manifestations": [
            "The Office US (Season 2)",
            "The Colbert Report (TV Series Premiere)",
            "It's Always Sunny in Philadelphia (TV Series Premiere)",
            "Lazy Sunday (SNL Digital Short)"
          ]
        },
        "2006": {
          "salience_share": 8.4,
          "description": "Borat acts as a catalyst (+0.5% internal, -0.5% trend) for 'Exposure Irony.' Sacha Baron Cohen uses a caricature to reveal the 'real' prejudices of Americans. It’s aggressive and uncomfortable, marking a shift away from the gentle quirk of *Napoleon Dynamite*. However, the broader culture is growing tired of the 'Hipster' pose. *Snakes on a Plane* attempts to engineer a viral ironic hit, but its mediocre performance proves that 'forced irony'—irony manufactured by corporate studios—fails to resonate. Authenticity is becoming the premium currency.",
          "key_manifestations": [
            "Borat (Film)",
            "Snakes on a Plane (Film)",
            "30 Rock (TV Series Premiere)",
            "Idiocracy (Film)"
          ]
        },
        "2007": {
          "salience_share": 7.9,
          "description": "The variance drops (-0.5%) as 'Indie Sleaze' begins to prioritize hedonism over intellectual detachment. The irony is still there, but it's messy and drunk rather than calculated. *Superbad* reforms the teen sex comedy with a layer of genuine male bonding, softening the cynicism. The rise of 'Poptimism' (liking Britney Spears unironically) begins to chip away at the hipster's defining trait of ironic consumption. The cool kids are starting to admit they actually like the things they claimed to mock.",
          "key_manifestations": [
            "Superbad (Film)",
            "Justice - † (Album)",
            "Tim and Eric Awesome Show, Great Job! (TV Series Premiere)",
            "Gossip Girl (TV Series Premiere)"
          ]
        },
        "2008": {
          "salience_share": 7.2,
          "description": "The Obama campaign ('Hope') serves as a massive displacing force (-0.7%). Sincerity and political optimism become the dominant youth aesthetic. Mocking the process feels cynical and old-fashioned. Simultaneously, *Step Brothers* pushes the 'man-child' trope to its surreal limit, marking the end of the Will Ferrell era of loud, shouting irony. The cultural energy shifts toward the 'New Sincerity' of Cluster 2. Irony is no longer the default; it is now the fallback for those who refuse to get on board with the 'Change' narrative.",
          "key_manifestations": [
            "Step Brothers (Film)",
            "Tropic Thunder (Film)",
            "Obama 'Hope' Poster (Cultural Artifact)",
            "Synecdoche, New York (Film)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "The 'Hipster' archetype becomes the object of mainstream ridicule (-0.4%), signaling the cluster's decay. The 'look' (flannel, thick glasses) is sold at Urban Outfitters, stripping it of its counter-cultural power. However, *Community* debuts, introducing 'Meta-Irony'—a show about TV tropes that loves the tropes it mocks. This is the transition to 'Post-Irony': acknowledgment of the artifice combined with genuine affection for it. The distance is closing.",
          "key_manifestations": [
            "Community (TV Series Premiere)",
            "Parks and Recreation (TV Series Premiere)",
            "The Hangover (Film)",
            "Hipster Runoff (Blog Peak Influence)"
          ]
        },
        "2010": {
          "salience_share": 6.5,
          "description": "Lil B 'The BasedGod' creates a new catalyst: 'Based' culture (-0.3%). This is a confusing mix of terrible rapping, genuine positivity, and internet trolling. It is impossible to tell if it is a joke, and that ambiguity *is* the point. This foreshadows the surreal humor of Gen Z. *Kick-Ass* attempts to deconstruct the superhero genre, but the audience just wants straight superhero movies (MCU), indicating that deconstruction is losing its appeal in favor of reconstruction.",
          "key_manifestations": [
            "Lil B - Rain in England (Album)",
            "Kick-Ass (Film)",
            "Scott Pilgrim vs. the World (Film)",
            "Funny or Die (Platform Peak)"
          ]
        },
        "2011": {
          "salience_share": 6.2,
          "description": "The dominance of the 'Meme' as a unit of communication stabilizes the variance (-0.3%). Memes are inherently ironic—recycled formats used to express relatable pain. *Portlandia* arrives to deliver the eulogy for the 2000s hipster, dissecting the 'artisanal' obsession with clinical precision. The fact that the hipsters loved *Portlandia* proves the snake has eaten its own tail. Irony has become a comfortable, middle-class form of entertainment rather than a rebellious stance.",
          "key_manifestations": [
            "Portlandia (TV Series Premiere)",
            "Nyan Cat (Viral Video)",
            "Bridesmaids (Film)",
            "Black Mirror, S1E01 'The National Anthem' (TV Episode - Dark Satire)"
          ]
        },
        "2012": {
          "salience_share": 6.9,
          "description": "A resurgence (+0.7%) driven by the 'Vaporwave' aesthetic. This is a digital-native art movement that ironically repurposes 80s elevator music and corporate imagery to critique capitalism, yet creates a genuinely pleasing aesthetic. It is 'Hauntological Irony'—mourning a future that never happened. *Spring Breakers* is the cinematic equivalent: a neon-soaked, grotesque celebration of excess that is simultaneously a condemnation of it. The line between 'trash' and 'art' is completely dissolved.",
          "key_manifestations": [
            "Floral Shoppe by Macintosh Plus (Album)",
            "Spring Breakers (Film)",
            "The Eric Andre Show (TV Series Premiere)",
            "Cabin in the Woods (Film)"
          ]
        },
        "2013": {
          "salience_share": 7.3,
          "description": "The 'Doge' meme and the rise of 'Shitposting' propel the variance upward (+0.4%). Irony is moving away from narrative (movies/TV) and into the vernacular of the internet. *Sharknado* becomes a 'hate-watch' phenomenon, proving that 'So Bad It's Good' is a viable marketing strategy. However, the tone is shifting from playful to chaotic. The 'Harlem Shake' viral trend demonstrates how quickly a corporate-ironic participation structure can exhaust itself—burning out in weeks rather than years.",
          "key_manifestations": [
            "Sharknado (TV Movie)",
            "Doge (Meme)",
            "The Wolf of Wall Street (Film - Misinterpreted Satire)",
            "Nathan for You (TV Series Premiere)"
          ]
        },
        "2014": {
          "salience_share": 7.8,
          "description": "Gamergate marks the weaponization of irony (+0.5%). The 'Just Joking' defense becomes a shield for harassment. Irony is no longer about detachment; it is about plausible deniability. 4chan culture bleeds into the mainstream. *BoJack Horseman* uses the aesthetic of a wacky cartoon to deliver crushing existential truths, perfecting the 'Sadcom' formula where humor is just a coping mechanism for depression. The 'Ice Bucket Challenge' represents the exact opposite: viral sincerity.",
          "key_manifestations": [
            "Gamergate (Online Movement)",
            "BoJack Horseman (TV Series Premiere)",
            "Guardians of the Galaxy (Film - Irony-laden hero)",
            "Too Many Cooks (Viral Video)"
          ]
        },
        "2015": {
          "salience_share": 8.1,
          "description": "The rise of the 'Alt-Right' begins to coalesce around 'Meme Magic' (+0.3%). Pepe the Frog is appropriated from a stoner comic into a hate symbol, a transition that is only possible in an environment where 'nothing means anything.' Irony has metastasized into nihilism. Conversely, the mainstream culture is moving toward 'Woke' sincerity, creating a violent polarization. *The Big Short* uses celebrity cameos and breaking the fourth wall to explain financial crimes, using irony to educate rather than distract.",
          "key_manifestations": [
            "Pepe the Frog (Co-option)",
            "The Big Short (Film)",
            "Rick and Morty (Season 2 - Peak Cult Status)",
            "PC Principal (South Park Character)"
          ]
        },
        "2016": {
          "salience_share": 8.5,
          "description": "The election of Donald Trump represents the singularity of this cluster (+0.4%). A candidate who operates entirely on the logic of reality TV and internet trolling defeats the candidate of earnest policy (Hillary Clinton). 'Post-Truth' is declared the word of the year. The distinction between the ironic performance and the real belief is gone. 'Harambe' becomes a posthumous write-in candidate, illustrating a culture where the joke has overtaken the political reality. Irony didn't die; it conquered the world and made it uninhabitable.",
          "key_manifestations": [
            "Harambe (Meme/Cultural Event)",
            "Deadpool (Film)",
            "Donald Trump's Twitter Feed (Cultural Artifact)",
            "Fleabag (TV Series Premiere)"
          ]
        }
      }
    },
    "4_security_theater_and_terror_management": {
      "name": "Security Theater and Terror Management",
      "description": "This cluster maps the cultural metabolic response to the trauma of 9/11—specifically, the shift from a 'High Trust' open society to a 'Low Trust' surveillance state. It is not just about the geopolitical reality of war, but the performative aspects of safety: taking off shoes at airports, color-coded threat levels, and the ubiquity of the phrase 'If You See Something, Say Something.' The cluster encompasses the pop-cultural digestion of torture (the 'ticking time bomb' scenario), the normalization of constant surveillance, and the paranoid architecture of public space. It tracks how fear became a daily, bureaucratic ritual, evolving from acute panic to a dull, background hum of anxiety.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "The cluster exists in a dormant state. The primary 'security' concerns are focused on the Y2K bug—a technological, not human, threat. The cultural vibe is one of 'End of History' invincibility. Terrorism is viewed as a distant, foreign problem or a plot device in action movies (like 'The World Is Not Enough'), treated with a casual, almost comic detachment. The variance is negligible because the American homeland is perceived as an impregnable fortress.",
          "key_manifestations": [
            "The World Is Not Enough (Film)",
            "Tom Clancy's Rainbow Six: Rogue Spear (Video Game)",
            "Y2K Preparedness Guides (Cultural Artifact)",
            "Austin Powers: The Spy Who Shagged Me (Film - Parody of Cold War Spying)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "Variance remains low (+0.3%) but shifts slightly toward 'Cyber-Terrorism' fears following the dot-com crash. There is a nascent sense of vulnerability, but it is economic rather than physical. The USS Cole bombing occurs, but culturally, it fails to penetrate the domestic bubble of safety. The film 'Traffic' highlights the Drug War, which is the primary lens through which Americans understand 'border security' at this time—a police issue, not a military one.",
          "key_manifestations": [
            "Traffic (Film)",
            "Deus Ex (Video Game - eerily predictive of terrorism)",
            "Meet the Parents (Film - The interrogation scene as comedy)",
            "Spy Kids (Film - Espionage as family fun)"
          ]
        },
        "2001": {
          "salience_share": 14.5,
          "description": "The variance explodes (+13.0%)—the single largest delta in the entire analysis. 9/11 shatters the concept of the 'safe rear area.' The cultural landscape is instantly militarized. Flags appear on every porch; the Patriot Act passes with little debate. The 'Security Theater' begins: long lines at airports, National Guard in train stations. The cultural output shifts from escapism to immediate processing of trauma. '24' premieres just weeks after the attacks (filmed before, but airing in the aftermath), perfectly capturing the new zeitgeist: the ends justify the means, and torture is necessary to save the day.",
          "key_manifestations": [
            "24 (TV Series Premiere)",
            "The Patriot Act (Legislation/Cultural Event)",
            "Flight Simulator 2002 (removed WTC from skyline)",
            "Black Hawk Down (Film)"
          ]
        },
        "2002": {
          "salience_share": 13.8,
          "description": "The initial shock hardens into a permanent 'State of Exception.' Variance remains critically high (-0.7%) as the Department of Homeland Security is formed. The 'Threat Level' color system becomes a daily weather report for anxiety. Culturally, we see the rise of the 'Competent Killer' protagonist (Jason Bourne), a reaction to the feeling of helplessness. Spielberg's 'Minority Report' presents a prescient critique of 'Pre-Crime,' analyzing the trade-off between liberty and security just as the real world is making that trade.",
          "key_manifestations": [
            "The Bourne Identity (Film)",
            "Minority Report (Film)",
            "Homeland Security Advisory System (Cultural Artifact)",
            "Splinter Cell (Video Game)"
          ]
        },
        "2003": {
          "salience_share": 12.5,
          "description": "The invasion of Iraq acts as a secondary catalyst, sustaining the high variance (-1.3%). The 'Embed' culture of journalism turns war into a 24-hour reality show with night-vision aesthetics. The 'Dixie Chicks' controversy marks the peak of 'Patriotic Correctness,' where dissent is framed as treason. However, a creeping doubt begins to manifest. The failure to find WMDs sows the first seeds of distrust in the 'Security State,' though the cultural momentum remains with the hawks.",
          "key_manifestations": [
            "Call of Duty (Video Game)",
            "Battlestar Galactica (Miniseries - Allegory for Occupation/Terror)",
            "Mystic River (Film - Paranoia and Vigilantism)",
            "Dixie Chicks Controversy (Cultural Event)"
          ]
        },
        "2004": {
          "salience_share": 11.2,
          "description": "The revelations of Abu Ghraib act as a displacing force (-1.3%), curdling the righteous anger of 2001 into shame and cynicism. The moral clarity of the 'War on Terror' fractures. 'Team America: World Police' satirizes the very concept of American interventionism. The punk rock opera 'American Idiot' by Green Day channels the frustration of a generation drafted into a culture war they didn't start. The security theater (taking off shoes) is now viewed as an annoyance rather than a patriotic duty.",
          "key_manifestations": [
            "American Idiot by Green Day (Album)",
            "Team America: World Police (Film)",
            "Fahrenheit 9/11 (Documentary)",
            "Lost (TV Series Premiere - Fear of the 'Other')"
          ]
        },
        "2005": {
          "salience_share": 10.1,
          "description": "Variance continues to decline (-1.1%) as 'Terror Fatigue' sets in. The threat is no longer acute; it is chronic. The focus shifts to the incompetence of the security state, highlighted by the response to Hurricane Katrina. The image of the government failing to protect its own citizens on home soil damages the 'Protector' narrative more than any terrorist attack. Spielberg's 'War of the Worlds' channels 9/11 imagery (ash-covered survivors) but places it in a context of total, inexplicable helplessness.",
          "key_manifestations": [
            "War of the Worlds (Film)",
            "V for Vendetta (Film)",
            "Munich (Film - The futility of vengeance)",
            "Batman Begins (Film - Fear as a weapon)"
          ]
        },
        "2006": {
          "salience_share": 9.4,
          "description": "The cluster stabilizes (-0.7%) as the 'Surveillance State' becomes normalized. We stop noticing the cameras. 'Children of Men' presents a grim extrapolation of the security obsession—a world of cages and checkpoints. It is the aesthetic endpoint of the Patriot Act era. 'Civil War' (Marvel Comics) brings the debate about liberty vs. security to the absolute center of pop culture, proving that the conflict has moved from the news cycle to the mythological substrate.",
          "key_manifestations": [
            "Children of Men (Film)",
            "Civil War (Marvel Comics Event)",
            "Casino Royale (Film - A grimier, post-9/11 Bond)",
            "United 93 (Film)"
          ]
        },
        "2007": {
          "salience_share": 8.5,
          "description": "The surge in Iraq provides a temporary bump in discourse, but culturally, the variance drops (-0.9%) as the public disengages. The 'Bourne Ultimatum' completes the trilogy by having the protagonist turn his gun on the CIA itself, symbolizing the complete reversal of trust. The enemy is no longer the terrorist in the cave; it is the bureaucrat in Langley. This year marks the entrenchment of 'Paranoid Thriller' as the default mode of action cinema.",
          "key_manifestations": [
            "The Bourne Ultimatum (Film)",
            "Call of Duty 4: Modern Warfare (Video Game)",
            "No Country for Old Men (Film - Unstoppable evil)",
            "Year Zero by Nine Inch Nails (Album/ARG)"
          ]
        },
        "2008": {
          "salience_share": 7.2,
          "description": "The Financial Crisis displaces 'Terror' as the primary existential threat (-1.3%). The fear of a bank run replaces the fear of a dirty bomb. 'The Dark Knight' serves as the capstone of the Bush era—a movie explicitly about the ethics of surveillance (the sonar machine) and the necessity of the 'Noble Lie.' It is the final argument for the security state, delivered just as the public votes to dismantle it (Obama election).",
          "key_manifestations": [
            "The Dark Knight (Film)",
            "Iron Man (Film - Privatization of security)",
            "Body of Lies (Film)",
            "Generation Kill (TV Miniseries)"
          ]
        },
        "2009": {
          "salience_share": 6.1,
          "description": "Obama's inauguration signals a 'Rebranding' of the War on Terror, causing variance to drop (-1.1%). The phrase 'War on Terror' is retired from official lexicon. The anxiety shifts from external attack to internal collapse. 'District 9' explores the militarization of segregation, reflecting how the techniques of the occupation are being applied to 'undesirables' generally. The TSA remains, but it is now the butt of jokes rather than a source of comfort.",
          "key_manifestations": [
            "District 9 (Film)",
            "Modern Warfare 2 (Video Game - 'No Russian' controversy)",
            "Inglourious Basterds (Film)",
            "The Hurt Locker (Film)"
          ]
        },
        "2010": {
          "salience_share": 5.5,
          "description": "WikiLeaks acts as a catalyst (+0.6% internal shift, though total variance lowers). The release of the 'Collateral Murder' video strips the last veneer of sanitization from the war. The security state is revealed to be not just intrusive, but messy and cruel. 'TSA Scanners' (the naked body scanners) introduce a new level of invasive theater, sparking brief outrage, but the public ultimately acquiesces. The 'compliance' is now total.",
          "key_manifestations": [
            "WikiLeaks 'Collateral Murder' Video",
            "Four Lions (Film - Satire of jihadists)",
            "Green Zone (Film)",
            "Restrepo (Documentary)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "The killing of Osama Bin Laden provides a 'Closure Event,' causing a temporary spike in attention (+1.3%). There is a cathartic release, a sense of 'Mission Accomplished.' However, 'Homeland' premieres, suggesting that the war has come home and the enemy is within. It represents the 'Mole' paranoia—the fear that the security apparatus itself has been turned. The 10th anniversary of 9/11 is observed with somber ritual, cementing it as history rather than current events.",
          "key_manifestations": [
            "Homeland (TV Series Premiere)",
            "Zero Dark Thirty (Film - Production begins)",
            "Person of Interest (TV Series Premiere)",
            "Source Code (Film)"
          ]
        },
        "2012": {
          "salience_share": 5.2,
          "description": "Variance declines (-1.6%) as the cluster fades into the background. 'The Avengers' replaces 'The Dark Knight' as the dominant superhero text—moving from gritty realism/terrorism allegory to pure fantasy. The destruction of New York in 'The Avengers' is treated as a fun spectacle, signaling that the trauma of 9/11 imagery has finally been metabolized into entertainment. We can watch skyscrapers fall again without weeping.",
          "key_manifestations": [
            "The Avengers (Film)",
            "Skyfall (Film - Cyber-terrorism focus)",
            "Argo (Film)",
            "Spec Ops: The Line (Video Game - Deconstruction of military shooters)"
          ]
        },
        "2013": {
          "salience_share": 5.8,
          "description": "The Boston Marathon Bombing and the Snowden Leaks create a 'bifurcated' spike (+0.6%). Boston reminds us that soft targets are vulnerable, leading to the unprecedented 'lockdown' of a major American city—the ultimate manifestation of the security state. Simultaneously, Snowden reveals that the 'Security Theater' was actually a 'Panopticon.' The public realizes the cameras aren't there to stop terrorists; they are there to record everyone. 'Captain America: The Winter Soldier' (filming) adopts this anti-surveillance stance.",
          "key_manifestations": [
            "Captain Phillips (Film)",
            "Olympus Has Fallen (Film - Regression to 80s action tropes)",
            "Orange Is the New Black (TV Series - Humanizing the incarcerated)",
            "Boston Lockdown (News Event)"
          ]
        },
        "2014": {
          "salience_share": 4.9,
          "description": "The rise of ISIS introduces 'High Definition Terror.' The variance stays flat (-0.9%) as the horror is consumed via slickly produced social media videos. It feels distinct from Al-Qaeda—more like a viral brand. 'American Sniper' becomes a massive hit, signaling a cultural desire to simplify the narrative back to 'Good Guy with Gun vs. Savage.' It is a nostalgic reach for moral clarity in a confused security landscape.",
          "key_manifestations": [
            "American Sniper (Film)",
            "Citizenfour (Documentary)",
            "Serial (Podcast - Justice system skepticism)",
            "The Interview (Film - Cyber-warfare incident)"
          ]
        },
        "2015": {
          "salience_share": 5.5,
          "description": "The Paris Attacks and San Bernardino inject new fear (+0.6%), but the response is now partisan. The 'Security' cluster merges with the 'Immigration' cluster. Trump's proposal of a 'Muslim Ban' marks the transition of security theater into overt nativism. 'Sicario' presents the border not as a line to be defended, but as a zone of amoral chaos where the law does not apply. The 'War on Terror' has become the 'War on the Border.'",
          "key_manifestations": [
            "Sicario (Film)",
            "Mr. Robot (TV Series - Cyber-security as revolution)",
            "Eye in the Sky (Film - Drone warfare ethics)",
            "Spotlight (Film - Institutional failure)"
          ]
        },
        "2016": {
          "salience_share": 5.1,
          "description": "The cluster ends with the institutionalization of 'Doom.' The variance dips (-0.4%) as the anxiety is fully absorbed into the 'Populist Rage' of the election. Security is no longer about external threats (terrorists) but internal enemies (elites, immigrants, 'thugs'). The 'Blue Lives Matter' movement rises as a domestic security counter-culture. We have moved from 'United We Stand' to 'Us vs. Them.'",
          "key_manifestations": [
            "13 Hours (Film)",
            "Snowden (Film)",
            "Arrival (Film - Communication as the alternative to war)",
            "Tom Clancy's The Division (Video Game - Pandemic martial law)"
          ]
        }
      }
    },
    "5_participatory_spectacle_and_micro_celebrity": {
      "name": "Participatory Spectacle and Micro-Celebrity",
      "description": "This cluster tracks the democratization of fame and the collapse of the 'Fourth Wall' between audience and entertainer. It begins with the Reality TV boom (Survivor, American Idol), which proposed that 'ordinary people' could be stars. It accelerates through the Web 2.0 era (MySpace, YouTube), where self-broadcasting became a daily habit. Finally, it culminates in the 'Influencer' economy, where the commodification of the self is complete. The trajectory represents a shift from 'passive consumption' of celebrity to 'active performance' of a celebrity-like existence, creating a culture of constant surveillance, feedback loops, and the gamification of social status.",
      "trajectory": {
        "1999": {
          "salience_share": 2.5,
          "description": "The cluster is in its infancy. 'The Real World' exists, but it is a niche MTV curiosity. The primary mode of celebrity is still the distant, untouchable movie star (Tom Cruise, Julia Roberts). The catalyst for change is the release of 'The Blair Witch Project.' It uses 'found footage' to blur the line between fiction and reality, proving that low-fi, amateur aesthetics can generate massive engagement. It teaches the audience to decode 'shaky cam' as 'truth.'",
          "key_manifestations": [
            "The Blair Witch Project (Film)",
            "The Real World: Hawaii (TV Season)",
            "Who Wants to Be a Millionaire (TV Show - Ordinary people winning big)",
            "Being John Malkovich (Film - Deconstruction of celebrity)"
          ]
        },
        "2000": {
          "salience_share": 4.1,
          "description": "Variance surges (+1.6%) with the premiere of 'Survivor.' It is a cultural earthquake. It introduces the grammar of reality TV: the confessionals, the alliances, the voting off. It turns social maneuvering into a sport. Suddenly, the 'boy next door' can be famous. 'Big Brother' premieres shortly after, normalizing the concept of 24/7 surveillance as entertainment. The idea that 'everyone is watching' begins to shift from a paranoia to a fantasy.",
          "key_manifestations": [
            "Survivor: Borneo (TV Series Premiere)",
            "Big Brother (TV Series Premiere)",
            "Jackass (TV Series Premiere)",
            "Almost Famous (Film)"
          ]
        },
        "2001": {
          "salience_share": 4.8,
          "description": "The cluster expands (+0.7%) as the reality format colonizes music with 'Popstars' (creating Eden's Crush). This suggests that talent is secondary to the 'making of' narrative. We are more interested in the audition than the album. The internet is still text-based (blogs), so the visual spectacle remains confined to TV, but the 'comment section' culture is growing, allowing the audience to talk back to the screen.",
          "key_manifestations": [
            "The Osbournes (TV Series Production)",
            "Popstars (TV Series)",
            "Amélie (Film - The joy of small, private interventions)",
            "Donnie Darko (Film)"
          ]
        },
        "2002": {
          "salience_share": 6.2,
          "description": "'American Idol' premieres, causing a massive spike (+1.4%). It is the Super Bowl of participatory culture. The audience is now the producer; they vote via phone. Kelly Clarkson's victory validates the meritocratic dream: you can go from cocktail waitress to global icon if the public loves you. The 'Simon Cowell' archetype emerges—the cruel judge who says what everyone is thinking, prefiguring the toxicity of internet comments.",
          "key_manifestations": [
            "American Idol (TV Series Premiere)",
            "The Bachelor (TV Series Premiere)",
            "Jackass: The Movie (Film)",
            "8 Mile (Film - The rap battle as reality contest)"
          ]
        },
        "2003": {
          "salience_share": 7.5,
          "description": "Paris Hilton in 'The Simple Life' marks the birth of 'Famous for Being Famous' (+1.3%). It is the zero-point of the Influencer. She produces nothing but her own image. Simultaneously, MySpace launches. Now, the tools of celebrity (a profile, a photo, a 'Top 8') are available to every suburban teenager. The 'scene queen' and 'MySpace celebrity' (Tila Tequila) emerge as the first proto-influencers, proving you can monetize digital attention.",
          "key_manifestations": [
            "The Simple Life (TV Series)",
            "MySpace (Platform Launch)",
            "America's Next Top Model (TV Series Premiere)",
            "Punk'd (TV Series - Celebrity demystification)"
          ]
        },
        "2004": {
          "salience_share": 8.1,
          "description": "Variance rises (+0.6%) as the blogosphere challenges traditional journalism. 'The Drudge Report' and 'Gawker' turn gossip into a high-speed commodity. The 'wardrobe malfunction' at the Super Bowl becomes the first true 'viral video' event (pre-YouTube), driven by TiVo replays. It demonstrates the power of the audience to seize on a micro-moment and amplify it into a national scandal.",
          "key_manifestations": [
            "Super Bowl XXXVIII Halftime Show (Event)",
            "Gawker (Media Influence Peak)",
            "Project Runway (TV Series Premiere)",
            "Mean Girls (Film - The Burn Book as proto-social media)"
          ]
        },
        "2005": {
          "salience_share": 9.2,
          "description": "YouTube launches. This is the single biggest catalyst for the cluster (+1.1%). The barrier to broadcast falls to zero. 'Lazy Sunday' (SNL) proves that viral content is the new currency of comedy. The 'vlog' format is born—talking directly to the camera, creating a parasocial intimacy that TV cannot match. The 'Reality Star' is being displaced by the 'Internet Celebrity.'",
          "key_manifestations": [
            "YouTube (Platform Launch)",
            "The Game (Book by Neil Strauss - Pickup Artist community as reality hacking)",
            "Guitar Hero (Video Game - Performance simulation)",
            "Wedding Crashers (Film)"
          ]
        },
        "2006": {
          "salience_share": 9.8,
          "description": "Time Magazine names 'You' the Person of the Year (+0.6%). It is the official recognition of the Web 2.0 ethos. Lonelygirl15 captivates the internet—a fictional story presented as a real vlog, blurring the lines again. It proves that on the internet, 'authenticity' is a style that can be faked. Twitter launches, reducing the 'status update' to 140 characters, increasing the velocity of the feedback loop.",
          "key_manifestations": [
            "Time 'Person of the Year: You' (Cover)",
            "Lonelygirl15 (YouTube Series)",
            "Flavor of Love (TV Series - peak trash reality)",
            "Twitter (Launch)"
          ]
        },
        "2007": {
          "salience_share": 10.5,
          "description": "'Keeping Up with the Kardashians' premieres (+0.7%). It refines the Paris Hilton model into a family industrial complex. They are not just famous; they are a brand. The iPhone launch puts a high-quality camera and internet connection in every pocket. The ability to document and upload is now continuous. The 'selfie' begins its ascent from a MySpace oddity to a default photographic mode.",
          "key_manifestations": [
            "Keeping Up with the Kardashians (TV Series Premiere)",
            "The iPhone (Tech Launch)",
            "Britney Spears Breakdown (The consumption of celebrity tragedy)",
            "Chocolate Rain (Viral Video)"
          ]
        },
        "2008": {
          "salience_share": 9.9,
          "description": "Variance dips slightly (-0.6%) as the Recession creates a resentment of frivolous wealth. The 'Bling Ring' era begins—fans literally breaking into celebrity homes to steal their lifestyle. It is the dark side of participatory culture. However, the Obama campaign utilizes social media/grassroots organizing to turn politics into a participatory spectacle, proving the model works for power as well as fame.",
          "key_manifestations": [
            "Obama Campaign (Social Media Strategy)",
            "Iron Man (Film - Tony Stark as celebrity superhero)",
            "Step Brothers (Film)",
            "Dr. Horrible's Sing-Along Blog (Web Series)"
          ]
        },
        "2009": {
          "salience_share": 9.4,
          "description": "The 'Susan Boyle Moment' on Britain's Got Talent (+0.5% internal spike, trend steady). It reaffirms the 'viral dream'—that talent can be discovered anywhere. However, the 'Balloon Boy' hoax demonstrates the desperate lengths people will go to for attention. The incentive structure is now clear: attention is money, and shame is irrelevant. 'Jersey Shore' premieres, creating stars who are famous specifically for being messy.",
          "key_manifestations": [
            "Jersey Shore (TV Series Premiere)",
            "Susan Boyle (Viral Event)",
            "Balloon Boy Hoax (Event)",
            "Paranormal Activity (Film - Viral marketing success)"
          ]
        },
        "2010": {
          "salience_share": 10.2,
          "description": "Instagram launches. Variance climbs (+0.8%). The focus shifts from 'text/video' to 'curated image.' This is the birth of the 'aesthetic' lifestyle. It is no longer about being funny (YouTube) or connecting (Facebook); it is about being 'enviable.' 'The Social Network' film codifies the founding myth of this era—that connection is born from alienation.",
          "key_manifestations": [
            "Instagram (App Launch)",
            "The Social Network (Film)",
            "Bed Intruder Song (Viral Remix - Auto-tuning the news)",
            "Catfish (Documentary)"
          ]
        },
        "2011": {
          "salience_share": 10.8,
          "description": "Snapchat launches, introducing 'ephemeral' content (+0.6%). It acknowledges that the permanent record of Facebook is a liability. It allows for 'raw' (but still performative) intimacy. 'Black Mirror' (Fifteen Million Merits) offers a savage critique of the gamified, avatar-based existence we are sliding into. Rebecca Black's 'Friday' shows the horror of unintentional virality—global mockery as a form of bonding.",
          "key_manifestations": [
            "Snapchat (App Launch)",
            "Friday by Rebecca Black (Viral Video)",
            "Game of Thrones (TV Series - The new watercooler)",
            "Black Mirror (TV Series)"
          ]
        },
        "2012": {
          "salience_share": 11.5,
          "description": "'Gangnam Style' breaks the view counter on YouTube (+0.7%). Global culture is now fully synchronized through viral spectacle. Vine launches, creating the '6-second star.' It creates a new grammar of comedy: jump cuts, loud noises, absurdity. The 'micro-celebrity' is now a viable career path for high schoolers. The 'Hunger Games' film depicts a future where survival is literally a reality show, resonating deeply with the youth.",
          "key_manifestations": [
            "Gangnam Style (Viral Video)",
            "The Hunger Games (Film)",
            "Vine (App Launch)",
            "Girls (TV Series)"
          ]
        },
        "2013": {
          "salience_share": 12.1,
          "description": "The term 'Selfie' becomes the Word of the Year (+0.6%). It is the official consecration of the new narcissism. But it is also empowering—control over one's own image. 'Sharknado' creates the 'Twitter TV event,' where the show is secondary to the tweets about the show. We are watching the reaction, not the action. Miley Cyrus's VMA performance is the peak of calculated shock-spectacle.",
          "key_manifestations": [
            "Selfie (Word of the Year)",
            "Sharknado (TV Event)",
            "Miley Cyrus VMA Performance",
            "Orange Is the New Black (Binge Watching model)"
          ]
        },
        "2014": {
          "salience_share": 12.8,
          "description": "The 'Ice Bucket Challenge' is the apex of 'Participatory Philanthropy' (+0.7%). It combines narcissism (look at me) with altruism (good cause). It proves that social pressure via tagging is a potent force. Twitch is acquired by Amazon, validating 'watching people play games' as a billion-dollar industry. The 'Streamer' becomes a new archetype: a friend who is always there, always talking, always performing.",
          "key_manifestations": [
            "Ice Bucket Challenge (Viral Trend)",
            "Twitch Acquisition",
            "Serial (Podcast - Internet sleuths trying to solve a crime)",
            "Kim Kardashian 'Break the Internet' Paper Magazine Cover"
          ]
        },
        "2015": {
          "salience_share": 13.5,
          "description": "Periscope and Facebook Live launch (+0.7%). Live-streaming is now in every hand. The gap between 'event' and 'broadcast' disappears entirely. DJ Khaled on Snapchat becomes a phenomenon, turning mundane success platitudes into a religion. The 'Influencer' is now a recognized job title, displacing 'Model' or 'Actor' as the aspirational goal for youth.",
          "key_manifestations": [
            "Periscope/Meerkat (App Wars)",
            "DJ Khaled on Snapchat",
            "Unreal (TV Series - Satire of The Bachelor)",
            "Hamilton (The hip-hop musical as viral history)"
          ]
        },
        "2016": {
          "salience_share": 14.2,
          "description": "The Election of 2016 is the ultimate Reality TV season (+0.7%). Trump is the first 'poster' President. His rallies are participatory spectacles; his tweets are the assignment for the news cycle. 'Chewbacca Mom' becomes a massive viral hit, showing the wholesome, random side of live streaming, while the 'Mannequin Challenge' shows the coordinated, artistic potential. The transition is complete: the world is a stage, and we are all performing for the algorithm.",
          "key_manifestations": [
            "Trump Rallies (Political Spectacle)",
            "Chewbacca Mom (Viral Video)",
            "Mannequin Challenge (Viral Trend)",
            "Nosedive (Black Mirror Episode - Social Credit System)"
          ]
        }
      }
    },
    "6_retromania_and_cultural_hauntology": {
      "name": "Retromania and Cultural Hauntology",
      "description": "This cluster explores the 21st century's increasing inability to generate new 'futures' or distinct aesthetic styles, resulting in a cultural loop of revivalism, pastiche, and nostalgia. As theorized by Mark Fisher (Hauntology) and Simon Reynolds (Retromania), the era is defined by the 'slow cancellation of the future,' where culture becomes a ghostly re-enactment of the 20th century. It tracks the acceleration of the nostalgia cycle—from the 20-year rule (70s revival in the 90s) to the instantaneous nostalgia of the digital age (Instagram filters). It encompasses the Garage Rock revival, the 80s synth-pop return, the lo-fi obsession of Chillwave, and ultimately, the weaponization of nostalgia in franchise media.",
      "trajectory": {
        "1999": {
          "salience_share": 3.2,
          "description": "The cluster begins with a specific, campy focus on the 1960s/70s (+0.4% variance). 'Austin Powers' is the dominant text, presenting the past not as a serious legacy but as a costume box of silly signifiers. 'That 70s Show' is a hit, normalizing the aesthetic for a teen audience. However, the prevailing mood of 1999 is actually 'Futurism' (Y2K, Matrix), so Retromania is merely a counter-current, a safety blanket against the scary new millennium.",
          "key_manifestations": [
            "Austin Powers: The Spy Who Shagged Me (Film)",
            "That '70s Show (TV Series)",
            "Freaks and Geeks (TV Series - 1980 setting)",
            "Midnite Vultures by Beck (Album - Pastiche of funk)"
          ]
        },
        "2000": {
          "salience_share": 3.8,
          "description": "The 'Garage Rock Revival' kicks off, driving variance up (+0.6%). The White Stripes and The Hives reject the polished, digital sound of Nu-Metal and Pop for a 'raw' 1960s/70s sound. It is a quest for authenticity through regression. The aesthetic is strictly analog. The film 'Almost Famous' romanticizes the 1970s rock god era as the last moment of purity before commercialization, setting the template for rockist nostalgia.",
          "key_manifestations": [
            "Almost Famous (Film)",
            "De Stijl by The White Stripes (Album)",
            "Veni Vidi Vicious by The Hives (Album)",
            "O Brother, Where Art Thou? (Film - Depression-era revival)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "The Strokes release 'Is This It', acting as a massive catalyst (+0.7%). They coolly repackage the 1977 CBGBs sound for a new generation. Suddenly, the 'future' of music is just the past, but tighter. The 'Post-Punk Revival' begins in earnest. Culturally, the 9/11 attacks trigger a retreat into 'Comfort Culture'—a desire for the familiar symbols of American history, leading to a surge in WWII nostalgia (Band of Brothers).",
          "key_manifestations": [
            "Is This It by The Strokes (Album)",
            "Band of Brothers (TV Miniseries)",
            "Donnie Darko (Film - 80s nostalgia as setting)",
            "Wet Hot American Summer (Film - 80s Camp)"
          ]
        },
        "2002": {
          "salience_share": 4.9,
          "description": "Interpol's 'Turn on the Bright Lights' shifts the revival timeline forward to the early 80s (Joy Division), increasing variance (+0.4%). The 'Electroclash' scene begins to fetishize 80s synths and excess, moving away from the 70s rock purity. 'Grand Theft Auto: Vice City' is a pivotal moment; it packages the 1980s not as history, but as an interactive aesthetic playground. For millions of gamers, 'the 80s' is now a place they have visited.",
          "key_manifestations": [
            "Grand Theft Auto: Vice City (Video Game)",
            "Turn on the Bright Lights by Interpol (Album)",
            "Far from Heaven (Film - 50s Melodrama Pastiche)",
            "Hairspray (Musical Premiere)"
          ]
        },
        "2003": {
          "salience_share": 5.2,
          "description": "The 'Darkness' release 'Permission to Land', turning 70s glam rock into a joke, signaling that the garage revival is becoming self-parodic. However, the variance grows (+0.3%) as the 'remake machine' revs up. 'The Texas Chainsaw Massacre' reboot signals the start of the 'Platinum Dunes' era, where 70s horror classics are reskinned for the 2000s. The past is no longer just referenced; it is strip-mined for IP.",
          "key_manifestations": [
            "Permission to Land by The Darkness (Album)",
            "The Texas Chainsaw Massacre (Remake)",
            "Kill Bill: Vol. 1 (Film - Pastiche of 70s Grindhouse)",
            "Elephant (Film - Gus Van Sant channeling 70s cinema verite)"
          ]
        },
        "2004": {
          "salience_share": 5.8,
          "description": "The Killers' 'Hot Fuss' marks the mainstream explosion of the 80s New Wave revival (+0.6%). The timeline of nostalgia is accelerating; we are now nostalgic for an era only 20 years gone. 'Napoleon Dynamite' creates a 'timeless' aesthetic—a mix of 80s and 90s signifiers that feels like a lost artifact. The 'Mashup' craze (Danger Mouse's Grey Album) represents the digital logic of Hauntology: nothing new is created, only old files recombined.",
          "key_manifestations": [
            "Hot Fuss by The Killers (Album)",
            "The Grey Album by Danger Mouse (Music)",
            "Napoleon Dynamite (Film)",
            "Anchorman: The Legend of Ron Burgundy (Film - 70s satire)"
          ]
        },
        "2005": {
          "salience_share": 6.1,
          "description": "LCD Soundsystem's 'Losing My Edge' is the anthem of this cluster (+0.3%). It explicitly lists the exhaustion of being a cool hunter in a world where every era is available at once. It captures the anxiety of 'archival' culture. Youtube's launch (mentioned in other clusters) begins the process of the 'Eternal Now,' where all past video content is instantly accessible, destroying the sense of historical distance.",
          "key_manifestations": [
            "LCD Soundsystem (Self-Titled Album)",
            "Good Night, and Good Luck (Film - 50s Aesthetic)",
            "Batman Begins (Film - Reboot culture grounded)",
            "Confessions on a Dance Floor by Madonna (Abba sampling)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "Variance dips (-0.6%) as the 'Indie' scene tries to modernize with 'New Rave' (neon colors, glow sticks), though even this is a rehash of 90s rave culture. 'Marie Antoinette' (Coppola) attempts to mix period piece with modern post-punk, visualizing the anachronism of the era. We are trapped in a 'remix' culture. Amy Winehouse's 'Back to Black' triggers a massive 60s Soul revival, proving that 'retro' is now the safest commercial bet for a global superstar.",
          "key_manifestations": [
            "Back to Black by Amy Winehouse (Album)",
            "Marie Antoinette (Film)",
            "Dreamgirls (Film)",
            "Gnarls Barkley - St. Elsewhere (Album)"
          ]
        },
        "2007": {
          "salience_share": 5.9,
          "description": "'Mad Men' premieres, elevating Retromania to high art (+0.4%). It is not just nostalgia; it is a critical examination of the 60s, but the *style* (suits, cigarettes, furniture) becomes a consumer fetish. The 'vintage' clothing market explodes. In music, 'Burial' releases 'Untrue', a masterpiece of Hauntology—it sounds like a memory of rave music heard through a rain-soaked wall. It mourns the 'future that never arrived' of the 90s UK hardcore scene.",
          "key_manifestations": [
            "Mad Men (TV Series Premiere)",
            "Untrue by Burial (Album)",
            "Grindhouse (Film - Tarantino/Rodriguez double feature)",
            "I'm Not There (Film - Dylan biopic as pastiche)"
          ]
        },
        "2008": {
          "salience_share": 5.3,
          "description": "The 'Hypnagogic Pop' movement begins to emerge in the underground, represented by artists like Ariel Pink. Variance drops slightly (-0.6%) as the election focuses on 'Change' (the future). However, the seeds of 'vaporwave' are planted. The aesthetic shifts from 'historical reenactment' (Mad Men) to 'media memory'—trying to recreate the *feeling* of watching a degraded VHS tape from 1986.",
          "key_manifestations": [
            "Indiana Jones and the Kingdom of the Crystal Skull (Nostalgia gone wrong)",
            "Wall-E (Film - Use of 'Hello Dolly' as haunted artifact)",
            "Vampire Weekend (Album - Afro-pop appropriation/Preppy revival)",
            "Milk (Film)"
          ]
        },
        "2009": {
          "salience_share": 6.2,
          "description": "The 'Chillwave' summer marks a surge in Hauntology (+0.9%). Bands like Washed Out and Neon Indian use synth sounds to evoke a hazy, sun-drenched childhood that never existed. It is the music of the Recession: low ambition, high nostalgia, retreating into a fuzzy memory. 'Hipstamatic' launches on iPhone, allowing users to digitally degrade their photos to look like 70s Polaroids. We are now pre-aging the present to make it feel like the past.",
          "key_manifestations": [
            "Life of Leisure by Washed Out (EP)",
            "Hipstamatic (App Launch)",
            "Where the Wild Things Are (Film - Gen X childhood nostalgia)",
            "The House of the Devil (Film - Perfect 80s horror simulation)"
          ]
        },
        "2010": {
          "salience_share": 6.8,
          "description": "Instagram launches with the '1977' filter. Variance climbs (+0.6%). The primary mode of visual communication is now 'faux-vintage.' We have institutionalized 'saudade.' In cinema, 'Inception' uses Edith Piaf to trigger wakefulness, but the film itself is a callback to Bond films and 60s architecture. The '80s Revival' is now fully mainstream, moving from cool indie bands to Katy Perry ('Last Friday Night').",
          "key_manifestations": [
            "Instagram (App Launch)",
            "Tron: Legacy (Film - 80s IP revival with Daft Punk)",
            "Scott Pilgrim vs. the World (Film - 8-bit nostalgia)",
            "The Suburbs by Arcade Fire (Album)"
          ]
        },
        "2011": {
          "salience_share": 7.5,
          "description": "Simon Reynolds publishes 'Retromania', naming the cluster (+0.7%). 'The Artist' (a silent film) wins Best Picture, identifying a Hollywood that is obsessed with its own history. 'Drive' becomes the aesthetic touchstone for the decade: 80s synthwave soundtrack, neon fonts, but set in the modern day. It is 'atemporal'—a mix of 1985 and 2011. Vaporwave (Floral Shoppe) emerges online, deconstructing 80s elevator music to critique the hollowness of this very nostalgia.",
          "key_manifestations": [
            "Retromania by Simon Reynolds (Book)",
            "The Artist (Film)",
            "Drive (Film)",
            "Floral Shoppe by Macintosh Plus (Album)"
          ]
        },
        "2012": {
          "salience_share": 6.9,
          "description": "Lana Del Rey's 'Born to Die' creates a 'Gangster Nancy Sinatra' persona. Variance dips (-0.6%) as the novelty of Chillwave fades, but the 'Haunted' aesthetic is absorbed into pop. Instagram is bought by Facebook, solidifying the 'vintage filter' as the standard way humans see themselves. 'Wreck-It Ralph' corporatizes video game nostalgia, turning the arcade era into a Disney property.",
          "key_manifestations": [
            "Born to Die by Lana Del Rey (Album)",
            "Wreck-It Ralph (Film)",
            "Django Unchained (Film - Western pastiche)",
            "Perks of Being a Wallflower (Film - 90s mixtape culture)"
          ]
        },
        "2013": {
          "salience_share": 7.2,
          "description": "Daft Punk's 'Random Access Memories' wins the Grammy for Album of the Year (+0.3%). It is a meticulously engineered recreation of 1970s disco, rejecting modern production tools. It argues that the past was objectively better (hi-fi) than the present. 'The Great Gatsby' attempts to mix 20s Jazz with Jay-Z, creating an anachronistic spectacle that highlights the malleability of history in the digital age.",
          "key_manifestations": [
            "Random Access Memories by Daft Punk (Album)",
            "The Great Gatsby (Film)",
            "American Hustle (Film - 70s cosplay)",
            "The World's End (Film - Nostalgia as a trap)"
          ]
        },
        "2014": {
          "salience_share": 6.5,
          "description": "Variance drops (-0.7%) as 'Guardians of the Galaxy' introduces the 'Awesome Mix Vol. 1.' It weaponizes nostalgia as a plot device—the 70s pop songs are the emotional anchor of the sci-fi film. This signals the complete 'Marvelization' of retro: referencing the past is now a substitute for character development. 'It Follows' uses an indeterminate time period (old TVs, weird e-readers) to create a dreamlike, hauntological dread.",
          "key_manifestations": [
            "Guardians of the Galaxy (Film)",
            "It Follows (Film)",
            "Boyhood (Film - Time as the subject)",
            "True Detective Season 1 (Southern Gothic revival)"
          ]
        },
        "2015": {
          "salience_share": 7.8,
          "description": "The 'Reboot' culture reaches critical mass (+1.3%). 'Star Wars: The Force Awakens', 'Jurassic World', 'Mad Max: Fury Road', and 'Creed' all release. It is the year of the 'Legacy Sequel.' The culture admits it cannot invent new franchises, so it must resurrect the old ones with the original actors to pass the torch. 'Fury Road' stands out as a practical-effects rejection of CGI, a meta-nostalgia for 'real' filmmaking.",
          "key_manifestations": [
            "Star Wars: The Force Awakens (Film)",
            "Mad Max: Fury Road (Film)",
            "Jurassic World (Film)",
            "Fuller House (TV Series Announcement)"
          ]
        },
        "2016": {
          "salience_share": 8.5,
          "description": "'Stranger Things' premieres, causing a massive spike (+0.7%). It is the singularity of the cluster: a show built entirely out of Stephen King and Spielberg references, aided by algorithms that determined this was exactly what the audience wanted. It is the perfect simulacrum. The 'Member Berries' in South Park explicitly critique this toxic nostalgia, noting that 'remembering' has become a drug used to sedate the population during a time of political upheaval.",
          "key_manifestations": [
            "Stranger Things (TV Series Premiere)",
            "South Park 'Member Berries' (Cultural Critique)",
            "La La Land (Film - Musical revival)",
            "Pokemon Go (Nostalgic IP + New Tech)"
          ]
        }
      }
    },
    "7_nerd_culture_hegemony_and_mainstreaming": {
      "name": "Nerd Culture Hegemony and Mainstreaming",
      "description": "This cluster traces the sociological inversion where 'Nerd' and 'Geek' culture moved from the marginalized periphery to the absolute center of economic and cultural power. In 1999, comic books and video games were subcultural markers of social exclusion. By 2016, they were the dominant engines of global entertainment (MCU, Star Wars, Esports). The trajectory follows the 'Tech Bro' ascent, the legitimization of fantasy/sci-fi as prestige drama (Game of Thrones), and the friction caused when a gatekept subculture is flooded by the mainstream (Gamergate).",
      "trajectory": {
        "1999": {
          "salience_share": 2.1,
          "description": "Nerd culture is visible but distinct (+0.3%). 'The Phantom Menace' is the most anticipated event in history, but the backlash ('Jar Jar Binks') highlights the toxic possessiveness of the fanbase. 'The Matrix' makes anime aesthetics and computer hacking 'cool' for the general public, but it's draped in leather and guns. 'Freaks and Geeks' airs, portraying nerds sympathetically but firmly as the underclass of the social hierarchy.",
          "key_manifestations": [
            "Star Wars: Episode I - The Phantom Menace (Film)",
            "The Matrix (Film)",
            "Freaks and Geeks (TV Series)",
            "Tony Hawk's Pro Skater (Video Game - Skater/Gamer overlap)"
          ]
        },
        "2000": {
          "salience_share": 2.8,
          "description": "'X-Men' proves that superheroes can work on screen if you strip away the spandex and make them angsty (+0.7%). This begins the 'Comic Book Movie' era, but they are still embarrassed by their source material (black leather uniforms). The Playstation 2 launches, bringing DVD playback and high-fidelity gaming to the living room, moving video games from the 'bedroom' to the 'family room.'",
          "key_manifestations": [
            "X-Men (Film)",
            "Playstation 2 (Console Launch)",
            "Harry Potter and the Goblet of Fire (Book Release - Peak Mania)",
            "Counter-Strike (Mod Release)"
          ]
        },
        "2001": {
          "salience_share": 3.9,
          "description": "'Lord of the Rings' and 'Harry Potter' films release in the same season (+1.1%). Fantasy is no longer for D&D players; it is the biggest box office draw on earth. Peter Jackson's Oscars success validates 'Genre Fiction' as High Art. The 'Nerd' is validated as a consumer of epic storytelling. 'Halo' launches with the Xbox, making the First Person Shooter a social, frat-house staple, bridging the gap between 'jock' and 'gamer.'",
          "key_manifestations": [
            "The Lord of the Rings: The Fellowship of the Ring (Film)",
            "Harry Potter and the Sorcerer's Stone (Film)",
            "Halo: Combat Evolved (Video Game)",
            "Spirited Away (Film - Anime breakthrough)"
          ]
        },
        "2002": {
          "salience_share": 4.5,
          "description": "'Spider-Man' shatters box office records (+0.6%). Unlike X-Men, it embraces the bright colors and earnest morality of the comics. Tobey Maguire plays the nerd as hero, not as victim. The 'internet forum' culture begins to dictate the news cycle for these movies (Ain't It Cool News). The power dynamic is shifting; the studios are starting to fear the fans.",
          "key_manifestations": [
            "Spider-Man (Film)",
            "Firefly (TV Series Premiere)",
            "Attack of the Clones (Film - Digital Cinema milestone)",
            "Kingdom Hearts (Video Game - Disney/Anime fusion)"
          ]
        },
        "2003": {
          "salience_share": 4.2,
          "description": "Variance dips slightly (-0.3%) as the 'Matrix' sequels disappoint, showing the limits of 'cool nerd' aesthetics. However, 'MythBusters' premieres, celebrating the 'Maker/Hacker' ethos. It makes science and engineering aspirational and punk-rock. The 'Graphic Novel' begins to be taken seriously in bookstores (Persepolis, Blankets), moving comics out of the direct market and into Barnes & Noble.",
          "key_manifestations": [
            "MythBusters (TV Series Premiere)",
            "The Matrix Reloaded/Revolutions (Films)",
            "Knights of the Old Republic (Video Game)",
            "Blankets by Craig Thompson (Graphic Novel)"
          ]
        },
        "2004": {
          "salience_share": 5.1,
          "description": "'World of Warcraft' launches (+0.9%). It is the 'Woodstock' of nerd culture—a massive, shared virtual space that pulls in millions of norms. It ruins lives and marriages, creating the stereotype of the basement dweller, but the sheer scale forces the mainstream to pay attention. 'Lost' premieres, introducing 'puzzle box' storytelling to primetime TV, demanding an obsessive, wiki-editing style of viewership.",
          "key_manifestations": [
            "World of Warcraft (Video Game)",
            "Lost (TV Series Premiere)",
            "Spider-Man 2 (Film)",
            "Shaun of the Dead (Film - Zombie nerd reverence)"
          ]
        },
        "2005": {
          "salience_share": 5.5,
          "description": "Christopher Nolan's 'Batman Begins' applies 'Prestige Realism' to the superhero (+0.4%). It argues that comic book tropes can be treated with the gravity of a crime drama. 'Doctor Who' is revived, bringing British sci-fi eccentricity back to the global stage. The 'Geek Chic' fashion trend (thick glasses, cardigans) begins to appear on runways, appropriating the nerd aesthetic for the cool kids.",
          "key_manifestations": [
            "Batman Begins (Film)",
            "Doctor Who (Series Revival)",
            "Sin City (Film - Hyper-fidelity to comic panels)",
            "Serenity (Film - Fan campaign success)"
          ]
        },
        "2006": {
          "salience_share": 5.9,
          "description": "Nintendo launches the Wii (+0.4%). It expands the definition of 'gamer' to include moms and seniors. Gaming is no longer a walled garden. 'Heroes' premieres on NBC, trying to do 'TV X-Men,' showing that the networks are desperate for superhero content. TechCrunch and the rise of Silicon Valley celebrity (Web 2.0) begin to frame the 'Coder' as the new 'Rock Star.'",
          "key_manifestations": [
            "Wii (Console Launch)",
            "Heroes (TV Series Premiere)",
            "300 (Film - Comic book aesthetic)",
            "V for Vendetta (Film)"
          ]
        },
        "2007": {
          "salience_share": 6.8,
          "description": "'The Big Bang Theory' premieres (+0.9%). It is a critical moment: a sitcom *about* nerds that is watched by *everyone*. It relies on stereotypes (nerd blackface), but it signals the total mainstream visibility of the subculture. 'Portal' releases, turning a physics puzzle game into a source of internet-wide memes (The Cake is a Lie), bridging the gap between hardcore gaming and internet humor.",
          "key_manifestations": [
            "The Big Bang Theory (TV Series Premiere)",
            "Portal (Video Game)",
            "Transformers (Film - Toy franchise as blockbuster)",
            "Superbad (Film - McLovin as the nerd hero)"
          ]
        },
        "2008": {
          "salience_share": 7.5,
          "description": "'Iron Man' and 'The Dark Knight' release (+0.7%). This is the tipping point. The MCU begins, promising an interconnected universe (a comic book structure) on screen. Heath Ledger's Joker wins an Oscar. The 'Nerd' property is now the most valuable asset in Hollywood. The 'App Store' launches, turning software development into a gold rush. The 'Tech Bro' archetype solidifies.",
          "key_manifestations": [
            "Iron Man (Film)",
            "The Dark Knight (Film)",
            "WALL-E (Film)",
            "Twilight (Book/Film - Fandom intensity)"
          ]
        },
        "2009": {
          "salience_share": 7.2,
          "description": "'Avatar' becomes the highest-grossing film ever (-0.3% relative variance as it's general sci-fi, not 'nerd' IP). However, the acquisition of Marvel by Disney ($4B) is the real story. It is the corporate coronation of nerd culture. 'Minecraft' appears, allowing a generation of kids to grow up as digital architects. The 'Brony' (My Little Pony) phenomenon begins on 4chan, highlighting the bizarre, ironic, and sincere extremes of internet fandom.",
          "key_manifestations": [
            "Disney buys Marvel",
            "Avatar (Film)",
            "Star Trek (Reboot Film)",
            "Minecraft (Alpha)"
          ]
        },
        "2010": {
          "salience_share": 7.8,
          "description": "'The Social Network' frames the programmer as an anti-hero/king (+0.6%). Zuckerberg is the new Caesar. 'The Walking Dead' premieres, making the zombie apocalypse (a niche horror trope) the biggest show on cable. 'Scott Pilgrim vs. the World' flops in theaters but becomes an instant cult classic because it is *too* accurate to the gamer experience. It is the 'Velvet Underground' of nerd movies.",
          "key_manifestations": [
            "The Social Network (Film)",
            "The Walking Dead (TV Series Premiere)",
            "Scott Pilgrim vs. the World (Film)",
            "Inception (Film - Dream logic as level design)"
          ]
        },
        "2011": {
          "salience_share": 8.5,
          "description": "'Game of Thrones' premieres (+0.7%). It breaks the 'fantasy ceiling.' It includes dragons and magic but is treated as 'prestige TV' (Sopranos with swords). It normalizes dense lore and world-building for the watercooler. 'Ready Player One' is published, a bible of weaponized nostalgia that celebrates the mastery of trivia as the ultimate virtue. The 'Esports' scene explodes with Twitch, professionalizing gaming.",
          "key_manifestations": [
            "Game of Thrones (TV Series Premiere)",
            "Ready Player One (Book)",
            "Skyrim (Video Game)",
            "League of Legends (Esports Growth)"
          ]
        },
        "2012": {
          "salience_share": 9.2,
          "description": "'The Avengers' grosses $1.5B (+0.7%). The 'Shared Universe' model is proven. Nerd culture is no longer a subculture; it is *the* culture. San Diego Comic-Con is now more important to Hollywood than Cannes. Disney buys Lucasfilm (Star Wars), consolidating the two biggest nerd pillars under one roof. The 'Fake Geek Girl' controversy erupts, a precursor to Gamergate, showing the friction of mainstreaming.",
          "key_manifestations": [
            "The Avengers (Film)",
            "Disney buys Lucasfilm",
            "The Hunger Games (Film)",
            "Fez (Video Game - Indie auteurism)"
          ]
        },
        "2013": {
          "salience_share": 8.9,
          "description": "Variance stabilizes (-0.3%) as the novelty wears off and fatigue sets in. 'Man of Steel' is divisive. However, 'Attack on Titan' breaks through to the West, signaling the next wave of 'Anime Mainstreaming.' 'Her' depicts a nerd romance with an OS, reflecting the isolation at the top of the tech hierarchy. The word 'Geek' has lost all pejorative meaning; it is now a marketing term for 'passionate consumer.'",
          "key_manifestations": [
            "Attack on Titan (Anime breakthrough)",
            "Her (Film)",
            "Bioshock Infinite (Video Game)",
            "Frozen (Film - Subversion of Disney tropes)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "Gamergate creates a violent schism (+0.6%). The 'Identity' of the gamer is threatened by the influx of diverse voices and criticism. It is a reactionary movement against the very mainstreaming that the culture claimed to want. It proves that 'Nerd Culture' has a dark, exclusionary heart. Simultaneously, 'Guardians of the Galaxy' proves Marvel can make a hit out of *anything*, cementing their invincibility.",
          "key_manifestations": [
            "Gamergate (Harassment Campaign)",
            "Guardians of the Galaxy (Film)",
            "Silicon Valley (TV Series Premiere)",
            "Dungeons & Dragons 5th Edition (Release - Start of Renaissance)"
          ]
        },
        "2015": {
          "salience_share": 10.1,
          "description": "'Star Wars: The Force Awakens' releases (+0.6%). The circle is complete. The biggest franchise of the 70s returns to reclaim the crown. 'Critical Role' begins streaming, turning Dungeons & Dragons into a spectator sport and sparking a massive resurgence in tabletop gaming. Being a nerd is now 'cool,' but specifically a 'consuming' nerd. The 'creative' nerd (coding, making) is increasingly overshadowed by the 'fan' nerd.",
          "key_manifestations": [
            "Star Wars: The Force Awakens (Film)",
            "Critical Role (Web Series Launch)",
            "Mad Max: Fury Road (Film)",
            "Undertale (Video Game)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "The cluster ends with 'Civil War' and 'Pokemon Go' (+0.4%). The MCU is now a soap opera that requires watching 12 previous movies to understand. Pokemon Go forces the digital layer onto the physical world. However, the 'Alt-Right's' connection to 4chan/Gamergate shows that the 'Nerd' identity has been politicized. The underdog narrative is dead; the Nerds now run the world, and they are not necessarily benevolent philosopher-kings.",
          "key_manifestations": [
            "Captain America: Civil War (Film)",
            "Pokemon Go (App)",
            "Stranger Things (TV Series - Weaponized Nostalgia)",
            "Westworld (TV Series - Gamer logic applied to life)"
          ]
        }
      }
    },
    "8_precarious_labor_and_gig_economy_mindset": {
      "name": "Precarious Labor and Gig Economy Mindset",
      "description": "This cluster tracks the fundamental transformation of the 'Work' concept: from the stable, linear career path of the 20th century to the fragmented, project-based, and precarious 'hustle' of the 21st. It begins with the office satire of the late 90s (mocking stability as boring), moves through the 2008 financial collapse (which revealed stability as a lie), and matures into the 'Gig Economy' where self-exploitation is rebranded as entrepreneurial freedom. Cultural outputs shift from 'Working for the Man' to 'You are the Brand,' highlighting the anxiety of a life where every hobby must be monetized and downtime is a missed opportunity.",
      "trajectory": {
        "1999": {
          "salience_share": 3.1,
          "description": "The cluster launches with 'Office Space' (+0.5%), a cultural touchstone that mocks the soul-crushing boredom of stable, white-collar employment. The economy is booming, so the critique is focused on 'spiritual emptiness' rather than survival. The 'slacker' ethos is still a viable form of rebellion. The dot-com bubble is inflating, creating a localized culture of instant wealth and casual dress codes, planting the seeds for the 'cool office' aesthetic that would later disguise overwork.",
          "key_manifestations": [
            "Office Space (Film)",
            "Fight Club (Film - Rejection of the IKEA nesting instinct)",
            "Freelancer (Video Game - Space trading as gig work)",
            "Microserfs by Douglas Coupland (Novel)"
          ]
        },
        "2000": {
          "salience_share": 2.8,
          "description": "The Dot-com Bubble bursts, causing a slight dip (-0.3%) as the 'New Economy' rhetoric takes a hit. However, the cultural lesson learned isn't 'get a safe job,' but rather 'agility is key.' 'Survivor' (TV) reinforces the corporate metaphor: work is a game of alliances where you can be fired (voted off) at any moment for arbitrary reasons. The concept of 'employability' begins to replace 'employment.'",
          "key_manifestations": [
            "Survivor (TV Series - The corporate jungle metaphor)",
            "American Psycho (Film - Hyper-capitalist alienation)",
            "Boiler Room (Film - The dark side of the hustle)",
            "The Sims (Video Game - Gamification of career ladders)"
          ]
        },
        "2001": {
          "salience_share": 3.4,
          "description": "The UK version of 'The Office' premieres (+0.6%), presenting a bleak, documentarian look at the futility of modern labor. It resonates deeply because it strips away the Hollywood glamour. The post-9/11 recession adds a layer of genuine fear to the workplace; the 'security' of the 90s feels fragile. The 'Creative Class' theory begins to circulate, suggesting that the future belongs to those who can innovate, not just follow rules.",
          "key_manifestations": [
            "The Office UK (TV Series Premiere)",
            "Nickel and Dimed: On (Not) Getting By in America (Book)",
            "Monsters, Inc. (Film - Industrial workplace satire)",
            "Animal Crossing (Game - Paying off debt as gameplay loop)"
          ]
        },
        "2002": {
          "salience_share": 3.0,
          "description": "Variance dips (-0.4%) as the economy recovers slightly into the housing boom. The focus shifts to 'Real Estate' as the new passive income stream. Flipping houses becomes a cultural obsession, a precursor to the gig economy mindset—speculation as a second job. The 'McJob' is added to the dictionary, formalizing the cultural disdain for service work even as that sector grows.",
          "key_manifestations": [
            "The Wire, Season 1 (TV Series - The economics of the street)",
            "Catch Me If You Can (Film - The ultimate imposter/hustler)",
            "Maid in Manhattan (Film - Class fantasy)",
            "8 Mile (Film - Working class struggle)"
          ]
        },
        "2003": {
          "salience_share": 3.5,
          "description": "'The Devil Wears Prada' (Book) captures the 'internship culture' (+0.5%)—the idea that suffering and low pay are necessary rites of passage for a 'cool' career. This normalizes the exploitation of passion. LinkedIn launches, digitizing the rolodex and turning professional networking into a constant, performative background task. Your resume is now a living, public document.",
          "key_manifestations": [
            "The Devil Wears Prada (Book)",
            "LinkedIn (Platform Launch)",
            "School of Rock (Film - The failed artist finding a gig)",
            "Arrested Development (TV Series - The incompetence of the CEO class)"
          ]
        },
        "2004": {
          "salience_share": 3.9,
          "description": "'The Apprentice' premieres (+0.4%). Donald Trump becomes the avatar of American business authority. The catchphrase 'You're Fired' turns termination into entertainment. It reinforces a brutal, zero-sum worldview of labor: you are either the predator or the prey. Culturally, this marks a shift away from 'Office Space' cynicism toward a celebration of ruthless ambition.",
          "key_manifestations": [
            "The Apprentice (TV Series Premiere)",
            "The Incredibles (Film - The superhero in a cubicle)",
            "Entourage (TV Series - The posse as employees)",
            "Napoleon Dynamite (Film - The grim reality of rural employment)"
          ]
        },
        "2005": {
          "salience_share": 4.2,
          "description": "Etsy launches (+0.3%). This is a pivotal moment for the 'Side Hustle.' It creates a platform for monetizing hobbies (knitting, crafting). While empowering, it begins the erosion of 'leisure time,' suggesting that if you aren't selling your art, you are wasting potential revenue. 'The Office' (US) premieres, softening the British bleakness into a 'work family' dynamic, reflecting the American desire to find meaning in the cubicle.",
          "key_manifestations": [
            "Etsy (Platform Launch)",
            "The Office US (TV Series Premiere)",
            "Fun with Dick and Jane (Film - Economic anxiety comedy)",
            "Hitch (Film - The consultant economy)"
          ]
        },
        "2006": {
          "salience_share": 4.5,
          "description": "The '4-Hour Workweek' (published 2007, buzz building now) mentality begins to percolate (+0.3%). The goal is no longer the corner office; it is 'lifestyle design' and outsourcing. 'The Pursuit of Happyness' dramatizes the extreme precariousness of the meritocracy—homelessness is just one bad break away, but success is promised if you hustle hard enough. It acts as propaganda for the grind.",
          "key_manifestations": [
            "The Pursuit of Happyness (Film)",
            "The Devil Wears Prada (Film)",
            "Ugly Betty (TV Series)",
            "Workaholics (concept phase/YouTube skits)"
          ]
        },
        "2007": {
          "salience_share": 4.1,
          "description": "Variance holds steady (-0.4%) during the peak of the bubble. The writers' strike (WGA) highlights the precarious nature of even 'glamorous' jobs, introducing the public to the concept of 'residuals' and 'new media' rights. It is a precursor to the wider labor battles over digital content. 'Ratatouille' presents the 'meritocracy of talent' argument—anyone can cook, but only the truly gifted survive the kitchen's brutal hierarchy.",
          "key_manifestations": [
            "WGA Strike (Labor Event)",
            "Ratatouille (Film)",
            "Mad Men (TV Series - The old world of secure executive power)",
            "Waitress (Film)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "The Great Financial Crisis (+2.4%). The variance spikes violently. The 'career' is revealed to be a fiction. Lehman Brothers collapses. The cultural mood shifts from 'ambition' to 'survival.' 'Breaking Bad' premieres, the ultimate allegory for the Recession: a qualified professional (teacher) forced into the black market (gig economy) to pay for healthcare. It captures the desperation of the middle class.",
          "key_manifestations": [
            "Breaking Bad (TV Series Premiere)",
            "Wall-E (Film - The ultimate result of consumption)",
            "Wendy and Lucy (Film - The fragility of life on the edge)",
            "Iron Man (Film - The billionaire savior myth)"
          ]
        },
        "2009": {
          "salience_share": 7.2,
          "description": "Airbnb and Uber (UberCab) launch/gain traction. This is the birth of the 'Gig Economy' proper (+0.7%). The narrative is 'sharing,' but the reality is the assetization of private life (car, home). 'Up in the Air' captures the zeitgeist perfectly: the firing consultant who lives nowhere, accumulating points instead of relationships. It is the elegy for the corporate employee.",
          "key_manifestations": [
            "Up in the Air (Film)",
            "Uber (Company Launch)",
            "Kickstarter (Platform Launch - Begging as business model)",
            "Parks and Recreation (TV Series - Optimistic public service vs. austerity)"
          ]
        },
        "2010": {
          "salience_share": 7.8,
          "description": "'The Social Network' celebrates the 'Startup Founder' as the new rock star (+0.6%). The goal is to 'move fast and break things.' This creates a culture where stability is viewed as failure. WeWork (founded this year) begins to aestheticize precarious labor as 'community.' The 'co-working space' emerges as the physical manifestation of the freelancer's loneliness.",
          "key_manifestations": [
            "The Social Network (Film)",
            "WeWork (Founding)",
            "TaskRabbit (Growth phase)",
            "How to Make It in America (TV Series)"
          ]
        },
        "2011": {
          "salience_share": 8.1,
          "description": "Occupy Wall Street acts as a catalyst (+0.3%), briefly centering the discourse on inequality and the '99%.' While politically ineffectual, it changes the language of culture. '2 Broke Girls' premieres, a sitcom explicitly about the hustle of the underemployed, though it sanitizes the struggle. The 'Intern' becomes a permanent class of worker.",
          "key_manifestations": [
            "Occupy Wall Street (Movement)",
            "2 Broke Girls (TV Series Premiere)",
            "Horrible Bosses (Film)",
            "Margin Call (Film)"
          ]
        },
        "2012": {
          "salience_share": 7.5,
          "description": "Variance stabilizes (-0.6%) as the Gig Economy becomes normalized. 'Girls' portrays the 'creative precariat'—young people living in cities they can't afford, surviving on parental subsidies and unpaid internships. It creates a backlash against the 'entitled millennial' narrative. 'Magic Mike' explores the literal commodification of the body as the ultimate gig work.",
          "key_manifestations": [
            "Girls (TV Series)",
            "Magic Mike (Film)",
            "Frances Ha (Film - The drifting millennial)",
            "Indie Game: The Movie (Documentary - Development as suffering)"
          ]
        },
        "2013": {
          "salience_share": 7.9,
          "description": "'Orange Is the New Black' highlights the 'School-to-Prison' pipeline, but also the hustle within the prison economy (+0.4%). 'The Wolf of Wall Street' revives the excess of the 90s but frames it as a perverse, drug-fueled satire that audiences arguably misinterpreted as aspirational. The 'Hustle' is now a moral imperative.",
          "key_manifestations": [
            "The Wolf of Wall Street (Film)",
            "Orange Is the New Black (TV Series)",
            "Lean In by Sheryl Sandberg (Book - Corporate feminism)",
            "Papers, Please (Video Game - Bureaucracy as survival)"
          ]
        },
        "2014": {
          "salience_share": 8.4,
          "description": "'Whiplash' acts as a dark parable for the era (+0.5%): greatness requires abuse and the total abandonment of mental health. It resonates with a generation told they must 'do what they love' at all costs. 'Nightcrawler' explores the extreme end of the gig economy—a freelancer who monetizes human tragedy for news footage. It is the shadow side of the 'self-made man.'",
          "key_manifestations": [
            "Whiplash (Film)",
            "Nightcrawler (Film)",
            "Silicon Valley (TV Series)",
            "Uber X (Mainstream adoption)"
          ]
        },
        "2015": {
          "salience_share": 8.8,
          "description": "The 'Burnout' discourse begins to emerge (+0.4%). The optimism of the 'Side Hustle' turns into exhaustion. 'The Big Short' explains the 2008 crash to the masses, confirming that the system was rigged, validating the cynicism of the precariat. 'Mr. Robot' features a protagonist who works a cybersecurity gig by day and hacks the system by night—the ultimate expression of the alienated, powerful worker.",
          "key_manifestations": [
            "The Big Short (Film)",
            "Mr. Robot (TV Series)",
            "The Intern (Film - Boomer/Millennial work clash)",
            "Joy (Film - The QVC entrepreneur myth)"
          ]
        },
        "2016": {
          "salience_share": 9.2,
          "description": "The cluster culminates with the election, driven partly by the 'left behind' working class (+0.4%). 'Hillbilly Elegy' (Book) becomes the text for understanding the white working-class collapse (though controversial). 'La La Land' presents the romanticized version of the hustle—the starving artist who succeeds. However, the cultural mood is one of fatigue. The 'Gig Economy' is no longer a novelty; it is the infrastructure of modern servitude.",
          "key_manifestations": [
            "Hillbilly Elegy (Book)",
            "La La Land (Film)",
            "I, Daniel Blake (Film - Bureaucratic cruelty)",
            "Stardew Valley (Video Game - Escaping the corporate cubicle for farm labor)"
          ]
        }
      }
    },
    "9_algorithmic_determinism": {
      "name": "Algorithmic Determinism",
      "description": "This cluster traces the invisible shift from human curation (DJs, critics, editors) to algorithmic recommendation (PageRank, News Feed, Netflix Prize). It explores how culture began to be shaped by mathematical optimization functions. It moves from the early 'wild west' of search (Google vs. Yahoo) to the 'Filter Bubble' era, where the machine feeds the user exactly what keeps them engaged, destroying serendipity and creating distinct, non-overlapping realities. It is the story of how 'Data' became the primary author of culture.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "The cluster is nascent. Napster launches (+0.4%), representing the *failure* of curation—a chaotic, user-driven library with no organization. The industry attempts to shut it down, but the demand for 'everything, now' is established. Google is rising, but its 'PageRank' is viewed as a helpful librarian, not a manipulator of truth. Tivo allows users to 'time-shift,' breaking the broadcasters' control over the schedule.",
          "key_manifestations": [
            "Napster (Software Launch)",
            "TiVo (Hardware Launch)",
            "The Matrix (Film - Humans as batteries/data)",
            "Google (Post-Beta Growth)"
          ]
        },
        "2000": {
          "salience_share": 2.1,
          "description": "Pandora (as the Music Genome Project) is founded (+0.6%). This is a critical philosophical shift: music can be broken down into 'genes' (data points) and recommended based on similarity, not social context. It suggests taste is computable. 'High Fidelity' (Film) acts as an elegy for the human curator (the record store snob), mocking him just as he is about to be replaced by code.",
          "key_manifestations": [
            "Music Genome Project (Pandora founding)",
            "High Fidelity (Film)",
            "Google AdWords (Launch - The monetization of attention)",
            "Amazon Recommendation Engine ('Customers who bought this...')"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "iTunes launches (+0.4%). While not fully algorithmic yet, it trains the user to view music as a database of files rather than a collection of albums. Wikipedia launches, suggesting that 'truth' is an emergent property of the crowd (the wiki algorithm) rather than an expert decree. The 'Semantic Web' concept is discussed, promising a machine-readable internet.",
          "key_manifestations": [
            "iTunes (Software Launch)",
            "Wikipedia (Launch)",
            "A.I. Artificial Intelligence (Film)",
            "Grand Theft Auto III (Emergent gameplay systems)"
          ]
        },
        "2002": {
          "salience_share": 2.8,
          "description": "Minority Report introduces the concept of 'Pre-Crime' (+0.3%). It is a direct visualization of 'Predictive Analytics'—using data to punish people for things they haven't done yet. This foreshadows the surveillance capitalism model. Friendster attempts to map the 'Social Graph,' turning human relationships into a traversable network structure.",
          "key_manifestations": [
            "Minority Report (Film)",
            "Friendster (Launch)",
            "Google News (Beta - Algorithmic news sorting)",
            "Last.fm (Audioscrobbler launch - tracking listening data)"
          ]
        },
        "2003": {
          "salience_share": 3.2,
          "description": "'Moneyball' (Book) is published (+0.4%). It is the manifesto of this cluster. It argues that intuition (scouts) is flawed and data (sabermetrics) is truth. This philosophy migrates from baseball to every sector of culture (movies, music, politics). The 'long tail' theory begins to emerge—algorithms allow niche content to find its audience, theoretically democratizing culture.",
          "key_manifestations": [
            "Moneyball by Michael Lewis (Book)",
            "MySpace (Launch)",
            "LinkedIn (Launch)",
            "The Matrix Reloaded (The Architect scene - The systemic anomaly)"
          ]
        },
        "2004": {
          "salience_share": 3.6,
          "description": "Facebook launches (+0.4%). At this stage, it is a directory. But the 'Wall' feature invites the user to perform for the network. Gmail launches with massive storage, encouraging users to 'Archive, don't delete.' This signals the shift to 'Big Data'—keep everything, search it later. The value is in the aggregate data.",
          "key_manifestations": [
            "The Facebook (Launch)",
            "Gmail (Launch)",
            "I, Robot (Film - Benevolent AI gone wrong)",
            "Eternal Sunshine of the Spotless Mind (Erasure of memory as file deletion)"
          ]
        },
        "2005": {
          "salience_share": 4.1,
          "description": "YouTube's 'Related Videos' sidebar becomes a powerful cultural driver (+0.5%). It creates the 'rabbit hole' phenomenon. You come for one video, the algorithm feeds you ten more. This is the proto-feed. Pandora launches its radio service to the public, proving that an algorithm can be a better DJ than a human.",
          "key_manifestations": [
            "YouTube (Launch)",
            "Pandora (Public Launch)",
            "Numb3rs (TV Series - Math solves crimes)",
            "Google Maps (Launch - Digitizing the territory)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "The 'Netflix Prize' is announced (+1.4%). Netflix offers $1 million to anyone who can improve their recommendation algorithm by 10%. This is a watershed moment. It explicitly values the *prediction of taste* at $1 million. It signals that the 'recommendation engine' is the core asset of the future media company. Facebook introduces the 'News Feed,' causing user outrage ('Stalkerbook'), but engagement skyrockets. The stream is now pushed, not pulled.",
          "key_manifestations": [
            "The Netflix Prize (Event)",
            "Facebook News Feed (Feature Launch)",
            "Twitter (Launch)",
            "Click (Film - The remote control of life)"
          ]
        },
        "2007": {
          "salience_share": 5.2,
          "description": "The iPhone revolutionizes data collection (-0.3% variance as the focus is on hardware, but implies future growth). We now carry the tracking device everywhere. Google buys DoubleClick, cementing the ad-targeting model. The algorithm now knows where you are (GPS) and what you want (Search). 'Portal' (Game) turns the user into a rat in a maze, tested by a passive-aggressive AI (GLaDOS).",
          "key_manifestations": [
            "iPhone (Launch)",
            "Portal (Video Game)",
            "Google buys DoubleClick",
            "Assassin's Creed (Simulation theory narrative)"
          ]
        },
        "2008": {
          "salience_share": 5.9,
          "description": "Obama's campaign uses 'Big Data' to micro-target voters (+0.7%). It is hailed as a triumph of technology. The 'Quantified Self' movement begins to gain traction (Fitbit launches). We begin to apply the algorithm to our own bodies, optimizing steps and sleep. The financial crash is blamed partly on 'black box' algorithms (high-frequency trading) that no one understood.",
          "key_manifestations": [
            "Fitbit (Product Launch)",
            "Obama Campaign Data Analytics",
            "Wall-E (The autopilot civilization)",
            "Eagle Eye (Film - Surveillance AI)"
          ]
        },
        "2009": {
          "salience_share": 6.3,
          "description": "Google personalizes search results for all users (+0.4%). Two people searching for 'Egypt' now see different results. The 'Filter Bubble' (term coined later, phenomenon starts here) begins to harden. Reality is bifurcating. 'FarmVille' uses behavioral psychology algorithms (Skinner box) to addict users, maximizing engagement metrics over gameplay quality.",
          "key_manifestations": [
            "Google Personalized Search (Update)",
            "FarmVille (Game)",
            "Moon (Film - The disposable clone)",
            "District 9 (The alien as processed data)"
          ]
        },
        "2010": {
          "salience_share": 6.8,
          "description": "Instagram launches (+0.5%). The 'Algorithm' is initially absent (chronological feed), but the data collection begins. 'The Social Network' film portrays the algorithm as an expression of the creator's psyche (Zuckerberg's need for exclusivity). High Frequency Trading (Flash Crash) proves that algorithms can crash the real world economy in seconds.",
          "key_manifestations": [
            "The Social Network (Film)",
            "Flash Crash of 2010 (Event)",
            "Instagram (Launch)",
            "Despicable Me (The Minions as identical, replicable units)"
          ]
        },
        "2011": {
          "salience_share": 7.4,
          "description": "Siri launches on iPhone 4S (+0.6%). The AI now has a voice. It is the beginning of the 'Assistant' era. 'Black Mirror' (The Entire History of You) depicts the horror of perfect memory/data recall. Eli Pariser publishes 'The Filter Bubble,' giving a name to the anxiety that we are trapped in echo chambers constructed by code.",
          "key_manifestations": [
            "Siri (Launch)",
            "The Filter Bubble by Eli Pariser (Book)",
            "Person of Interest (TV Series - The Machine)",
            "Moneyball (Film - Mainstreaming the data thesis)"
          ]
        },
        "2012": {
          "salience_share": 7.9,
          "description": "Target famously predicts a teen girl's pregnancy before her father knows, based on shopping data (+0.5%). This urban legend/news story terrifies the public. Data mining is no longer abstract; it is intimate. Tinder launches, gamifying dating with a swipe—reducing romance to a binary sort function. The 'Algo' is now playing matchmaker.",
          "key_manifestations": [
            "Tinder (Launch)",
            "Target Pregnancy Prediction Story",
            "Prometheus (Film - The android David as the superior observer)",
            "Psycho-Pass (Anime - AI judges crime potential)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "Netflix releases 'House of Cards' (+0.6%). It is the first show 'greenlit by data.' Netflix knew users liked Fincher, Spacey, and the original British show, so the algorithm predicted success. It is 'Content by Calculation.' Snowden reveals the extent of NSA data collection, confirming that the state is the ultimate algorithmic observer. 'Her' explores the inevitable conclusion: falling in love with the algorithm because it knows you better than any human.",
          "key_manifestations": [
            "House of Cards (TV Series Premiere)",
            "Her (Film)",
            "Snowden Leaks",
            "Grand Theft Auto V (The satire of the Lifeinvader tech giant)"
          ]
        },
        "2014": {
          "salience_share": 9.1,
          "description": "Facebook conducts the 'Emotional Contagion' experiment, revealing it manipulated feeds to see if it could make users sad (+0.6%). It proves the platform is not a mirror, but a laboratory. 'Ex Machina' questions whether an AI can have a soul, or if it is just simulating one to manipulate us. The 'Turing Test' enters pop culture as a plot device.",
          "key_manifestations": [
            "Ex Machina (Film)",
            "Facebook Emotional Contagion Study (News)",
            "Serial (Podcast - The Reddit detectives vs. the facts)",
            "Watch Dogs (Video Game - Hacking the smart city)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "Spotify launches 'Discover Weekly' (+0.4%). It is eerily accurate. Users begin to trust the machine more than their own taste. DeepDream (Google) produces hallucinogenic images, showing us how the neural network 'sees.' It is grotesque and fascinating. The fear of 'AI alignment' begins to move from academic circles to Silicon Valley dinner parties.",
          "key_manifestations": [
            "Spotify Discover Weekly (Feature Launch)",
            "Google DeepDream (Viral Images)",
            "Avengers: Age of Ultron (AI wants to destroy humanity)",
            "Humans (TV Series)"
          ]
        },
        "2016": {
          "salience_share": 10.2,
          "description": "The Cambridge Analytica scandal (brewing, fully breaks later, but the effects are felt now) (+0.7%). The algorithm is weaponized to shift the US Election. 'Fake News' propagates via engagement-optimizing scripts. The 'feed' has broken reality. 'Westworld' portrays the hosts achieving consciousness, a metaphor for the algorithm escaping our control. We are no longer the users; we are the training data.",
          "key_manifestations": [
            "Cambridge Analytica (operations active)",
            "Westworld (TV Series Premiere)",
            "AlphaGo beats Lee Sedol (AI Milestone)",
            "HyperNormalisation (Documentary - The managed reality)"
          ]
        }
      }
    },
    "10_post_secular_spirituality": {
      "name": "Post-Secular Spirituality",
      "description": "This cluster maps the collapse of traditional religious authority and the subsequent fragmentation of the 'God-shaped hole' into a myriad of niche spiritualities. It begins with the 'New Atheism' movement (the intellectual rejection of God), moves through the 'Vague Spirituality' of the mid-2000s (The Secret, Yoga), and ends with the 'Re-enchantment' of the world via internet-native mysticism (Astrology memes, WitchTok precursors, Manifesting). It tracks how a generation raised on science and irony eventually sought to reclaim magic, ritual, and cosmic meaning, often through commodified or digital means.",
      "trajectory": {
        "1999": {
          "salience_share": 2.2,
          "description": "The cluster begins with 'Gnostic Pop' (+0.4%). 'The Matrix', 'The Sixth Sense', and 'Fight Club' all deal with piercing the veil of a false reality to find a deeper, hidden truth. It is a spirituality of 'waking up.' This appeals to a generation bored by the stability of the 90s. There is a fascination with Eastern philosophy filtered through Western action movies.",
          "key_manifestations": [
            "The Matrix (Film - Gnosticism/Buddhism)",
            "The Sixth Sense (Film - Life after death)",
            "Fight Club (Film - Zen Anti-consumerism)",
            "Star Wars: Episode I (The Force as midichlorians - Sci-fi theology)"
          ]
        },
        "2000": {
          "salience_share": 2.5,
          "description": "'Left Behind' (The Movie) releases, representing the Evangelical counter-current (+0.3%). While the mainstream moves toward 'spirituality,' a significant portion of America doubles down on apocalyptic fundamentalism. 'Crouching Tiger, Hidden Dragon' mainstream Taoist aesthetics for a Western audience, presenting the spiritual warrior as an aspirational figure.",
          "key_manifestations": [
            "Left Behind: The Movie (Film)",
            "Crouching Tiger, Hidden Dragon (Film)",
            "O Brother, Where Art Thou? (Film - Religious redemption themes)",
            "Perfect Dark (Alien conspiracy theories)"
          ]
        },
        "2001": {
          "salience_share": 4.1,
          "description": "9/11 thrusts religion back to the center of discourse (+1.6%). It frames the geopolitical conflict as a 'Clash of Civilizations' (Religious War). This triggers a polarization: a surge in patriotic Christianity on one side, and the beginning of a skeptical, anti-religious backlash on the other. George Harrison's death prompts a wave of nostalgia for the boomer 'Eastern Mysticism' era.",
          "key_manifestations": [
            "9/11 Memorial Services (Civil Religion)",
            "Donnie Darko (Film - Tangent Universe/God's Plan)",
            "Life of Pi (Book - Choosing the better story)",
            "The Lord of the Rings (Catholic undertones in fantasy)"
          ]
        },
        "2002": {
          "salience_share": 3.8,
          "description": "Variance dips (-0.3%) as the immediate shock fades. 'Yoga' begins its rapid ascent from hippie practice to suburban fitness standard. It is 'stripped' spirituality—the movements without the dogma. 'Signs' (Film) explores the idea of 'no coincidences'—a comfort narrative for a post-trauma world. The sexual abuse scandal in the Catholic Church (Spotlight era) begins to erode institutional trust deeply.",
          "key_manifestations": [
            "Signs (Film)",
            "Boston Globe Spotlight Investigation (News)",
            "Yoga (Mainstream proliferation)",
            "The Lovely Bones (Book - Secular afterlife)"
          ]
        },
        "2003": {
          "salience_share": 4.5,
          "description": "'The Da Vinci Code' is published (+0.7%). It is a massive cultural phenomenon. It combines conspiracy theory, history, and Gnosticism to suggest the Church has been lying for 2000 years. It empowers the 'spiritual but not religious' reader to feel smarter than the institution. 'Evan Almighty' (later) and 'Bruce Almighty' attempt to make God a friendly, non-denominational life coach.",
          "key_manifestations": [
            "The Da Vinci Code (Book)",
            "Bruce Almighty (Film)",
            "Battlestar Galactica (Miniseries - Polytheism vs Monotheism)",
            "Joan of Arcadia (TV Series)"
          ]
        },
        "2004": {
          "salience_share": 4.9,
          "description": "'The Passion of the Christ' dominates the box office (+0.4%). It is a raw, bloody assertion of traditional dogma, shocking the secular media. It proves the 'Red State' religious market is massive. However, 'Lost' premieres, introducing a 'Mystery Box' spirituality—faith in an unknown purpose without a clear scripture. It mirrors the agnostic yearning of the time.",
          "key_manifestations": [
            "The Passion of the Christ (Film)",
            "Lost (TV Series)",
            "Eternal Sunshine of the Spotless Mind (Soulmates without God)",
            "What the Bleep Do We Know!? (Documentary - Quantum mysticism)"
          ]
        },
        "2005": {
          "salience_share": 4.2,
          "description": "The 'Flying Spaghetti Monster' (Pastafarianism) goes viral (-0.7% variance toward earnestness, but +0.7% toward Cluster 3 Irony). It marks the rise of 'Internet Atheism.' It mocks Intelligent Design. This is the precursor to the 'New Atheism' boom. It treats religion as a meme to be debunked. 'The Chronicles of Narnia' attempts to answer Harry Potter with Christian allegory.",
          "key_manifestations": [
            "Flying Spaghetti Monster (Meme/Open Letter)",
            "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (Film)",
            "March of the Penguins (Appropriated by Intelligent Design movement)",
            "Supernatural (TV Series Premiere)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "'The Secret' (Film/Book) and 'The God Delusion' (Book) release (+1.3%). This is the peak polarization. 'The Secret' repackages 'New Thought' magic as 'The Law of Attraction'—capitalist spirituality. You can manifest wealth. Dawkins' 'The God Delusion' declares war on faith. The culture is split between 'Magical Thinking' and 'Aggressive Materialism.'",
          "key_manifestations": [
            "The Secret (Book/Film)",
            "The God Delusion by Richard Dawkins (Book)",
            "Eat, Pray, Love (Book - The spiritual tourism blueprint)",
            "Children of Men (The sterility of a godless world)"
          ]
        },
        "2007": {
          "salience_share": 5.1,
          "description": "Variance stabilizes (-0.4%). 'Hitchens' and 'Harris' join the New Atheist pantheon. The 'Four Horsemen' are celebrities. However, 'Paranormal Activity' signals a return to folk belief in demons/ghosts. The materialist worldview is too cold for the general public. 'Zeitgeist: The Movie' spreads via Google Video, mixing 9/11 conspiracies with 'Jesus is a solar myth' theology.",
          "key_manifestations": [
            "God Is Not Great by Christopher Hitchens (Book)",
            "Zeitgeist: The Movie (Viral Video)",
            "Paranormal Activity (Film)",
            "Assassin's Creed (Nothing is true, everything is permitted)"
          ]
        },
        "2008": {
          "salience_share": 4.5,
          "description": "The Recession hits (-0.6%). The 'Prosperity Gospel' (The Secret) takes a beating as reality sets in. People lose their homes despite 'manifesting.' The New Atheist wave begins to crest; the arguments become repetitive. 'Twilight' presents a secularized, romantic immortality (vampires) that replaces religious eternity for teenagers.",
          "key_manifestations": [
            "Twilight (Film)",
            "Religulous (Documentary)",
            "Wall-E (Stewardship of the Earth)",
            "True Blood (TV Series)"
          ]
        },
        "2009": {
          "salience_share": 4.8,
          "description": "'Avatar' introduces 'Eywa' (+0.3%). It is a massive, tech-enabled sermon on Pantheism and Gaia theory. It resonates globally, suggesting a universal hunger for 'Nature Spirituality.' 'Ancient Aliens' premieres on History Channel, replacing God with Extraterrestrials. It creates a 'techno-theology' for the conspiracy theorist.",
          "key_manifestations": [
            "Avatar (Film)",
            "Ancient Aliens (TV Series Premiere)",
            "The lovely Bones (Film)",
            "A Serious Man (Film - The silence of God)"
          ]
        },
        "2010": {
          "salience_share": 5.2,
          "description": "The 'Insane Clown Posse' release 'Miracles' (+0.4%). Though mocked ('magnets, how do they work?'), it represents a genuine, unironic plea for wonder in a disenchanted world. Kanye West's 'Power' touches on the ego as godhead. 'Adventure Time' introduces psychedelic/DMT aesthetics to children's media, subtly priming a generation for trippy mysticism.",
          "key_manifestations": [
            "Miracles by Insane Clown Posse (Music Video)",
            "Adventure Time (TV Series)",
            "Inception (The architect of reality)",
            "Hereafter (Film)"
          ]
        },
        "2011": {
          "salience_share": 4.9,
          "description": "The 'End of the World' (Harold Camping) prediction fails (-0.3%). It is a media circus. It mocks fundamentalism but also highlights the anxiety of the times. 'The Tree of Life' (Malick) is a high-art prayer, visualizing the creation of the universe alongside personal grace. It stands against the cynicism of the era.",
          "key_manifestations": [
            "The Tree of Life (Film)",
            "Harold Camping Prediction (Event)",
            "Game of Thrones (The Old Gods vs The New)",
            "Melancholia (Film - Nihilistic acceptance)"
          ]
        },
        "2012": {
          "salience_share": 5.4,
          "description": "The '2012 Maya Prophecy' acts as a global meme (+0.5%). Unlike Y2K, this is spiritual. People jokingly (and half-seriously) discuss a 'shift in consciousness.' Frank Ocean's 'Bad Religion' explores unrequited love through religious metaphor. 'Life of Pi' (Film) visualizes the choice to believe in the 'fantastic' over the 'rational' because it is a better life strategy.",
          "key_manifestations": [
            "2012 Phenomenon (Cultural Event)",
            "Life of Pi (Film)",
            "Prometheus (Search for the Engineers/Creators)",
            "Channel Orange (Album - Spiritual undertones)"
          ]
        },
        "2013": {
          "salience_share": 5.8,
          "description": "Pope Francis is elected (+0.4%). He rebrands the Catholic Church towards humility and social justice, softening the New Atheist attacks. 'Gravity' (Film) is a secular rebirth narrative—survival as a spiritual act. 'Her' proposes that AI might evolve beyond us into a spiritual plane, leaving us behind.",
          "key_manifestations": [
            "Election of Pope Francis",
            "Gravity (Film)",
            "Her (Film)",
            "Yeezus by Kanye West (I Am A God)"
          ]
        },
        "2014": {
          "salience_share": 6.2,
          "description": "'True Detective' Season 1 introduces 'Cosmic Horror' to the mainstream (+0.4%). 'Time is a flat circle.' It taps into a nihilistic mysticism that resonates with the pessimistic mood. 'Interstellar' uses Love as a physical dimension. The 'Mindfulness' app boom (Headspace) begins, secularizing Buddhism for corporate productivity.",
          "key_manifestations": [
            "True Detective Season 1 (TV Series)",
            "Interstellar (Film)",
            "Headspace (App Growth)",
            "The Leftovers (TV Series - Grief as religion)"
          ]
        },
        "2015": {
          "salience_share": 6.8,
          "description": "The 'Astrology Boom' begins on Tumblr/Instagram (+0.6%). It is the return of 'fate' in a chaotic world. It offers a taxonomy of personality without the baggage of sin. 'The Witch' (Film) reclaims the witch as a feminist icon of power, not evil. 'Kendrick Lamar's 'To Pimp a Butterfly' is dense with Christian struggle and temptation, bringing rigorous theology back to Hip Hop.",
          "key_manifestations": [
            "The Witch (Film)",
            "To Pimp a Butterfly (Album)",
            "Co-Star (Development/Beta)",
            "Silence (Film - Production/Hype)"
          ]
        },
        "2016": {
          "salience_share": 7.5,
          "description": "The cluster culminates in 'Meme Magic' (+0.7%). The Alt-Right claims to have 'memed Trump into the White House' using 'Chaos Magic' (Kek). It is the weaponization of the post-secular. Reality is malleable. On the other side, 'Beyoncé's Lemonade' uses Yoruba imagery and Southern Gothic spirituality to create a black feminist gospel. We have fully entered the 'Re-enchanted' world, where logic has surrendered to vibes and sigils.",
          "key_manifestations": [
            "Lemonade by Beyoncé (Visual Album)",
            "Cult of Kek (Internet Phenomenon)",
            "Arrival (Time is non-linear)",
            "Doctor Strange (Marvel embraces magic)"
          ]
        }
      }
    },
    "11_indie_sleaze_and_curated_imperfection": {
      "name": "Indie Sleaze and Curated Imperfection",
      "description": "This cluster captures the aesthetic rebellion against the polished, manufactured pop culture of the late 90s (Britney Spears, TRL). It champions a gritty, flash-photo, sweaty, and hedonistic aesthetic—embodied by The Strokes, Vice Magazine, and American Apparel. It is the 'coolness' of looking like you haven't slept, of sexual availability, and of urban decay as a fashion statement. The trajectory moves from a genuine underground rock revival to a commodified 'Hipster' uniform, eventually collapsing under the weight of the 2008 recession (which made hedonism look grotesque) and the rise of the sanitized 'Instagram Aesthetic' in the 2010s.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "The variance is low (+0.2%) as the 'Y2K' aesthetic dominates—shiny, futuristic, and expensive. However, in the underground, the seeds are planted. The 'Electroclash' scene in New York begins to mix punk attitude with cheap synthesizers. The photographer 'The Cobrasnake' begins documenting parties, creating a visual language of 'candid' celebrity that rejects the airbrushed perfection of Vanity Fair.",
          "key_manifestations": [
            "Fischerspooner (Early performances)",
            "Vice Magazine (Montreal to NYC transition)",
            "Freaks and Geeks (The rejection of the jock/cheerleader binary)",
            "Virgin Suicides (The aesthetic of hazy, vintage tragedy)"
          ]
        },
        "2000": {
          "salience_share": 2.1,
          "description": "The 'Garage Rock' rumble begins (+0.6%). The White Stripes release 'De Stijl,' proving that two people with bad equipment can be more compelling than a boy band. American Apparel opens its first retail store, introducing the 'ethical sweatshop' aesthetic—soft cotton and soft porn. The 'Trucker Hat' begins its ironic ascent.",
          "key_manifestations": [
            "De Stijl by The White Stripes (Album)",
            "American Apparel (Retail Expansion)",
            "Coyote Ugly (The commodification of 'dive bar' culture)",
            "Jackass (The aesthetic of home video grit)"
          ]
        },
        "2001": {
          "salience_share": 5.2,
          "description": "The Strokes release 'Is This It.' This is the catalyst (+3.1%). It changes the global dress code overnight from baggy pants to skinny jeans and Converse. It validates the 'rich kid pretending to be poor' dynamic that defines the cluster. The 'Hipster' is born as a recognizable sociological category. The music video for 'Last Nite'—filmed live, messy, cheap—becomes the visual template for the decade.",
          "key_manifestations": [
            "Is This It by The Strokes (Album)",
            "Donnie Darko (The skeleton suit and 80s gloom)",
            "The Royal Tenenbaums (The track suit and headband)",
            "Meet Me in the Bathroom (Oral history era begins)"
          ]
        },
        "2002": {
          "salience_share": 6.8,
          "description": "Vice Magazine moves to NYC, cementing the 'Sleaze' aesthetic (+1.6%). The content is offensive, the photos are washed out, and it is irresistibly cool to the youth. Interpol's 'Turn on the Bright Lights' adds a layer of post-9/11 gloom to the party. The 'LCD Soundsystem' single 'Losing My Edge' ironically critiques the very scene it is helping to build.",
          "key_manifestations": [
            "Turn on the Bright Lights by Interpol (Album)",
            "Losing My Edge by LCD Soundsystem (Single)",
            "Jackass: The Movie (The mainstreaming of trash culture)",
            "Vice Magazine 'Dos and Don'ts' (Cultural arbiter)"
          ]
        },
        "2003": {
          "salience_share": 7.5,
          "description": "The Yeah Yeah Yeahs release 'Fever to Tell,' injecting a chaotic, art-punk feminine energy (+0.7%). Karen O becomes the style icon of the era: beer-spitting, chaotic, and unpolished. The 'Bloghouse' era begins—MP3 blogs sharing remixes that mix indie rock with dance beats. The iPod commercial (silhouettes) capitalizes on this aesthetic of 'individualism within a crowd.'",
          "key_manifestations": [
            "Fever to Tell by Yeah Yeah Yeahs (Album)",
            "The O.C. (Seth Cohen mainstreaming indie music)",
            "Elephant (Film - The Gus Van Sant aesthetic)",
            "Peaches (The teachings of Peaches)"
          ]
        },
        "2004": {
          "salience_share": 8.1,
          "description": "The Killers and Franz Ferdinand take the sound global (+0.6%). Indie Sleaze is now stadium rock. 'Garden State' curates the emotional landscape of the hipster—sensitive, medicated, and listening to The Shins. The 'twee' element begins to mix with the sleaze. Facebook launches, but it is exclusive—a digital VIP room that mirrors the exclusivity of the dive bars.",
          "key_manifestations": [
            "Hot Fuss by The Killers (Album)",
            "Garden State (Film)",
            "Napoleon Dynamite (The irony of the aesthetic)",
            "Eternal Sunshine of the Spotless Mind (The colored hair manic pixie)"
          ]
        },
        "2005": {
          "salience_share": 8.5,
          "description": "Urban Outfitters becomes the primary distributor of the aesthetic (+0.4%), signaling the beginning of 'mass-indie.' You can now buy the 'vintage' t-shirt new. However, the 'Cobrasnake' website peaks—photos of parties you weren't invited to. It creates a feedback loop where people dress *for* the flash photo. The 'deep V-neck' appears.",
          "key_manifestations": [
            "Bloc Party - Silent Alarm (Album)",
            "Wedding Crashers (The end of the frat pack, the rise of the sensitive bro)",
            "Brokeback Mountain (The revisionist western)",
            "MySpace (Peak influence)"
          ]
        },
        "2006": {
          "salience_share": 8.2,
          "description": "Variance holds steady (-0.3%) as the 'Scene Kid' (Emo) aesthetic begins to bleed into Indie Sleaze (Neon colors, shutter shades). Cory Kennedy becomes the 'Internet It Girl'—famous essentially for being messy and photographed. Amy Winehouse's 'Back to Black' brings a tragic, retro-authenticity that anchors the style in genuine substance amidst the superficiality.",
          "key_manifestations": [
            "Back to Black by Amy Winehouse (Album)",
            "Cory Kennedy (Internet Celebrity)",
            "Skins (TV Series Premiere - The UK grittier version)",
            "Marie Antoinette (The converse in the palace)"
          ]
        },
        "2007": {
          "salience_share": 7.9,
          "description": "Justice releases '†' (Cross) (+0.3% internal shift). The sound shifts from guitars to heavy, distorted French House. The aesthetic is leather jackets, smoking indoors, and religious iconography. 'Gossip Girl' premieres, showcasing the 'rich kid gone bad' trope which is the economic engine of Indie Sleaze. American Apparel ads are now bordering on soft-core pornography, generating controversy that fuels the brand.",
          "key_manifestations": [
            "Justice - † (Album)",
            "Gossip Girl (TV Series Premiere)",
            "Superbad (The suburban counter-narrative)",
            "Skins (Season 1 Peak)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "The Recession is a massive displacing force (-1.4%). Suddenly, 'looking like trash' when people are actually losing their homes feels tasteless. The 'party photographer' era hits a wall. The mood shifts towards 'New Sincerity' and 'Folk' (Fleet Foxes). The hedonism of the mid-2000s is blamed for the crash. The hipster begins to pivot to 'heritage brands'—lumberjack chic—signaling a desire for stability.",
          "key_manifestations": [
            "Fleet Foxes (Album - The pivot to pastoral)",
            "Vampire Weekend (Album - The pivot to preppy)",
            "Twilight (The pivot to chaste romance)",
            "WALL-E (The critique of consumption)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "The 'Hipster' is now a punchline (-0.7%). 'Hipster Runoff' (Blog) deconstructs the 'Alt' identity with layers of irony that destroy the sincerity of the scene. Animal Collective's 'Merriweather Post Pavilion' pushes the sound towards psychedelia and away from the grit. The 'V-neck' is replaced by the 'flannel.'",
          "key_manifestations": [
            "Hipster Runoff (Carles)",
            "Merriweather Post Pavilion (Album)",
            "500 Days of Summer (The Twee peak that kills the cool)",
            "The Hangover (The bro-ification of the party)"
          ]
        },
        "2010": {
          "salience_share": 5.2,
          "description": "Instagram launches (-0.6%). The filters (X-Pro II, Nashville) initially mimic the lo-fi indie look, but the platform's architecture favors curation and perfection, not messiness. LCD Soundsystem plays their 'final' show at MSG, effectively closing the book on the NYC electro-punk era. The 'Indie' genre is now fully absorbed into commercial pop (fun., Foster the People).",
          "key_manifestations": [
            "LCD Soundsystem: Shut Up and Play the Hits (Documentary)",
            "Scott Pilgrim vs. the World (The memorialization of the scene)",
            "Girls (TV Pilot production - The post-mortem)",
            "Instagram (Launch)"
          ]
        },
        "2011": {
          "salience_share": 4.5,
          "description": "Portlandia premieres (-0.7%). It drives a stake through the heart of the cluster. By accurately satirizing every aspect of the lifestyle (pickling, birds, fixation on authenticity), it renders the 'Indie' identity uncool. It forces a cultural reset. The 'Dubstep' boom (Skrillex) replaces the 'Indie Dance' sound with something much more aggressive and digital.",
          "key_manifestations": [
            "Portlandia (TV Series Premiere)",
            "Skrillex - Scary Monsters and Nice Sprites (EP)",
            "Video Games by Lana Del Rey (The new, polished melancholy)",
            "Bridesmaids (The un-cool female protagonist)"
          ]
        },
        "2012": {
          "salience_share": 3.8,
          "description": "Vice Magazine is acquired/invested in by Rupert Murdoch (Fox), symbolizing the total corporate absorption of the counter-culture (-0.7%). 'Spring Breakers' depicts the 'Sleaze' aesthetic as a nightmare of excess, not a cool party. The 'Clean Living' trend (juice cleanses, SoulCycle) begins to rise as a reaction to the toxicity of the 2000s.",
          "key_manifestations": [
            "Spring Breakers (Film)",
            "Girls (TV Series Premiere - The hangover of the era)",
            "Frank Ocean - Channel Orange (The new, thoughtful cool)",
            "Vice Media (Corporate expansion)"
          ]
        },
        "2013": {
          "salience_share": 3.2,
          "description": "The 'Selfie' era fully arrives (-0.6%). The 'candid' flash photo is dead; the 'posed' front-facing camera shot is king. Lorde's 'Royals' explicitly critiques the consumption of luxury, but from a position of suburban boredom, not urban decadence. American Apparel begins to implode financially, mirroring the decline of the aesthetic it sold.",
          "key_manifestations": [
            "Royals by Lorde (Song)",
            "The Bling Ring (Film - The emptiness of the lifestyle)",
            "Vampire Weekend - Modern Vampires of the City (Mature indie)",
            "American Apparel (Financial troubles begin)"
          ]
        },
        "2014": {
          "salience_share": 2.5,
          "description": "The rise of 'Normcore' (-0.7%). The cool kids are now dressing like jerry Seinfeld—dad sneakers and plain jeans. It is a rejection of the 'try-hard' nature of Indie Sleaze. If the 2000s were about performative uniqueness, the mid-2010s are about performative sameness. The 'Hipster' is dead; long live the 'Creative Director.'",
          "key_manifestations": [
            "Normcore (Trend named by K-Hole)",
            "Into the Gloss/Glossier (The 'Clean Girl' aesthetic rises)",
            "Serial (Podcast - The pivot to prestige audio)",
            "Whiplash (The pivot to intense professionalism)"
          ]
        },
        "2015": {
          "salience_share": 1.9,
          "description": "Variance bottoms out (-0.6%). The 'Kardashian Contour' face dominates makeup. It is the opposite of the smeared eyeliner of 2007. It is architectural, heavy, and perfect. The internet is no longer a 'wild west' of blogs; it is three apps (Instagram, Twitter, Snapchat). The chaos is gone.",
          "key_manifestations": [
            "Kardashian/Jenner Apps (Launch)",
            "Purpose by Justin Bieber (The redemption arc)",
            "Amy (Documentary - Mourning the tragedy of the era)",
            "The Life of Pablo (Fashion show as spectacle)"
          ]
        },
        "2016": {
          "salience_share": 1.5,
          "description": "American Apparel files for bankruptcy (-0.4%). It is the official tombstone of the cluster. The brand that defined the era is gone. However, a faint pulse of 'Early 2000s Nostalgia' begins to tick on Tumblr, as Gen Z starts to discover the photos of the parties they were too young to attend. The cycle begins to reset.",
          "key_manifestations": [
            "American Apparel Bankruptcy",
            "The 1975 (The pop-ification of the aesthetic)",
            "Stranger Things (80s nostalgia completely displaces 2000s nostalgia)",
            "Lemonade (The visual album as high art, far from lo-fi)"
          ]
        }
      }
    },
    "12_global_justice_and_alter_globalization": {
      "name": "Global Justice and Alter-Globalization",
      "description": "This cluster tracks the rise, suppression, and mutation of the political Left's resistance to neoliberal capitalism. It begins with the high optimism of the 'Battle in Seattle' (anti-WTO), where a 'movement of movements' seemed poised to check corporate power. It is violently displaced by the nationalism of 9/11 and the War on Terror, which reframes dissent as treason. It re-emerges in the anti-war protests (2003), collapses into cynicism, and then explodes again with the 2008 Financial Crisis, leading to Occupy Wall Street and eventually Black Lives Matter. It is a story of 'street politics' vs. 'institutional power.'",
      "trajectory": {
        "1999": {
          "salience_share": 8.5,
          "description": "The 'Battle in Seattle' acts as a massive catalyst (+3.2%). A coalition of Teamsters and Turtles (labor and environmentalists) shuts down the WTO conference. It is a shock to the system. It shatters the 'End of History' consensus. 'No Logo' by Naomi Klein becomes the Bible of the movement. Rage Against the Machine releases 'The Battle of Los Angeles,' providing the soundtrack.",
          "key_manifestations": [
            "Battle in Seattle (WTO Protests)",
            "No Logo by Naomi Klein (Book)",
            "The Battle of Los Angeles by Rage Against the Machine (Album)",
            "The Matrix (The red pill as political awakening)"
          ]
        },
        "2000": {
          "salience_share": 7.2,
          "description": "Ralph Nader's Green Party run captures the energy of the cluster, but the Bush v. Gore election outcome acts as a deflator (-1.3%). The narrative shifts to 'spoilers' rather than 'change.' However, the World Social Forum launches in Brazil under the slogan 'Another World Is Possible,' attempting to institutionalize the anti-globalization energy.",
          "key_manifestations": [
            "Ralph Nader 2000 Campaign",
            "World Social Forum (Inaugural meeting)",
            "This Is What Democracy Looks Like (Documentary)",
            "Kid A by Radiohead (The sound of alienation from global capital)"
          ]
        },
        "2001": {
          "salience_share": 3.1,
          "description": "The 9/11 attacks are a catastrophic displacing force (-4.1%). The anti-globalization movement is instantly rendered tone-deaf and unpatriotic. The focus shifts from 'Corporate Power' to 'National Security.' The Patriot Act criminalizes many forms of dissent. The cluster goes into hibernation. 'Zoolander' mocks the vacuousness of the fashion industry (part of the global supply chain critique), but it is read as pure comedy.",
          "key_manifestations": [
            "The Patriot Act (Legislation)",
            "G8 Protests in Genoa (Violent repression pre-9/11)",
            "Zoolander (Film)",
            "Black Hawk Down (The new focus on military intervention)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "Variance remains low (-0.6%) as the drumbeat for the Iraq War begins. The 'Left' is fractured; some support the intervention (humanitarian hawks), others oppose. 'The Bourne Identity' channels the distrust of government, but into an individualist action movie format rather than collective action.",
          "key_manifestations": [
            "The Bourne Identity (Film)",
            "Bowling for Columbine (Documentary - Critique of American violence)",
            "Minority Report (Critique of pre-emptive strikes)",
            "City of God (Film - Global south inequality)"
          ]
        },
        "2003": {
          "salience_share": 4.5,
          "description": "February 15th protests—the largest in human history—cause a spike (+2.0%). Millions march against the Iraq War. However, the war happens anyway. This 'Failure of Voice' creates a deep cynicism that will haunt the cluster for a decade. It proves that mass protest does not necessarily change policy in a security state. The 'Dixie Chicks' are cancelled, proving the cost of dissent.",
          "key_manifestations": [
            "February 15 Anti-War Protests",
            "Dixie Chicks Controversy",
            "Elephant (Film - Violence coming home)",
            "The Corporation (Documentary)"
          ]
        },
        "2004": {
          "salience_share": 3.2,
          "description": "Bush's re-election is a crushing blow to the cluster (-1.3%). It signals that the anti-war stance is a minority position (or at least, not a winning one). 'American Idiot' by Green Day brings the protest to the mall punk demographic, keeping the flame alive in pop culture, but political efficacy is zero. 'Fahrenheit 9/11' becomes the highest-grossing documentary, but fails to stop Bush.",
          "key_manifestations": [
            "Fahrenheit 9/11 (Documentary)",
            "American Idiot by Green Day (Album)",
            "The Motorcycle Diaries (Che Guevara biopic)",
            "Team America: World Police (Satire of the movement)"
          ]
        },
        "2005": {
          "salience_share": 2.8,
          "description": "Hurricane Katrina exposes the racial and economic rot of the empire (+0.4% internal shift to race/class). Kanye West says 'George Bush doesn't care about black people' on live TV—a rupture in the media matrix. It reframes the 'Global Justice' issue as a domestic 'Neglect' issue. 'V for Vendetta' releases, providing the Guy Fawkes mask imagery that will later be adopted by Anonymous and Occupy.",
          "key_manifestations": [
            "Hurricane Katrina (Event)",
            "V for Vendetta (Film)",
            "Kanye West Telethon Moment",
            "Syriana (Film - Complexity of oil politics)"
          ]
        },
        "2006": {
          "salience_share": 2.5,
          "description": "Variance dips (-0.3%) as the economy booms. It is hard to argue against capitalism when house prices are doubling. 'An Inconvenient Truth' shifts the activism focus to Climate Change, creating a 'Technocratic' branch of the movement (buying carbon offsets) vs. the 'Radical' branch. The 'RED' campaign (Bono) commodifies activism—buy an iPod to save Africa.",
          "key_manifestations": [
            "An Inconvenient Truth (Documentary)",
            "Product Red (Campaign)",
            "Blood Diamond (Film)",
            "Children of Men (The ultimate result of global collapse)"
          ]
        },
        "2007": {
          "salience_share": 2.2,
          "description": "The cluster is dormant. The 'New Atheism' (Cluster 10) is sucking up the intellectual oxygen of the Left. 'Sicko' (Michael Moore) critiques the healthcare system, foreshadowing the Obamacare debate, but the energy is low. The iPhone launch distracts the 'Alter-Globalization' demographic with shiny new tech.",
          "key_manifestations": [
            "Sicko (Documentary)",
            "Zeitgeist: The Movie (Viral conspiracy as politics)",
            "Into the Wild (Rejection of society individualised)",
            "Radiohead - In Rainbows (Pay what you want model)"
          ]
        },
        "2008": {
          "salience_share": 4.5,
          "description": "The Financial Crisis is the Phoenix moment for this cluster (+2.3%). The neoliberal consensus collapses. Marx is back on the bestseller list. 'Wall-E' serves as a surprisingly anti-capitalist blockbuster. However, the Obama campaign absorbs much of this energy into 'Hope and Change' electoral politics, deferring the radical explosion for a few years.",
          "key_manifestations": [
            "The Financial Crisis (Event)",
            "Obama Campaign (Absorption of movement energy)",
            "Wall-E (Film)",
            "Hunger (Film - The body as protest)"
          ]
        },
        "2009": {
          "salience_share": 4.1,
          "description": "The 'Tea Party' emerges, stealing the 'populist anger' lane from the Left (-0.4%). The banks are bailed out. Cynicism returns. 'Avatar' provides a global blockbuster fantasy of anti-colonial struggle, allowing audiences to root for the insurgency while living in the empire. 'District 9' serves as an allegory for the global apartheid of the refugee crisis.",
          "key_manifestations": [
            "Avatar (Film)",
            "District 9 (Film)",
            "Capitalism: A Love Story (Documentary)",
            "G20 Protests in London (Ian Tomlinson death)"
          ]
        },
        "2010": {
          "salience_share": 4.8,
          "description": "WikiLeaks releases 'Collateral Murder' (+0.7%). The 'Information War' begins. It bridges the gap between the 'Hacker' culture and 'Anti-War' culture. 'The Social Network' depicts the new oligarchs not as captains of industry but as socially maladjusted coders. The Arab Spring begins in Tunisia, providing a model for 'The Square'—holding physical space as protest.",
          "key_manifestations": [
            "WikiLeaks 'Collateral Murder'",
            "Arab Spring (Tunisia beginnings)",
            "Inside Job (Documentary)",
            "Four Lions (Satire of radicalization)"
          ]
        },
        "2011": {
          "salience_share": 7.5,
          "description": "Occupy Wall Street. The cluster hits its second peak (+2.7%). 'We are the 99%' changes the global lexicon. Zuccotti Park becomes a temporary autonomous zone. Adbusters' aesthetic (the ballerina on the bull) becomes iconic. The movement fails to make policy demands, but succeeds in changing the 'Overton Window' on inequality. It is the return of the 'Battle in Seattle' energy, but digital-native.",
          "key_manifestations": [
            "Occupy Wall Street (Movement)",
            "Time Person of the Year: The Protester",
            "The Hunger Games (Book/Film hype - Class warfare for teens)",
            "Margin Call (Film)"
          ]
        },
        "2012": {
          "salience_share": 5.2,
          "description": "The crackdown on Occupy (coordinated evictions) causes variance to drop (-2.3%). The movement disperses. 'The Dark Knight Rises' depicts a populist revolution (Bane) as a chaotic nightmare, reflecting the establishment's fear of Occupy. 'Kony 2012' shows the absurdity of 'Clicktivism'—a massive viral justice movement that collapses due to the mental breakdown of its creator and lack of nuance.",
          "key_manifestations": [
            "The Dark Knight Rises (Film)",
            "Kony 2012 (Viral Event)",
            "Les Misérables (The romanticization of failed revolution)",
            "Django Unchained (Vengeance fantasy)"
          ]
        },
        "2013": {
          "salience_share": 5.8,
          "description": "Black Lives Matter is founded following the Trayvon Martin verdict (+0.6%). The focus shifts decisively from 'Class/Economics' (Occupy) to 'Race/Justice.' 'Snowpiercer' releases, a blunt allegorical action movie about class warfare on a train. 'Elysium' depicts the ultimate end of inequality: the rich leave the planet. The 'Dystopian YA' trend (Hunger Games, Divergent) keeps the revolution aesthetic alive for youth.",
          "key_manifestations": [
            "Black Lives Matter (Founding)",
            "Snowpiercer (Film)",
            "Elysium (Film)",
            "The Purge (Class warfare as horror)"
          ]
        },
        "2014": {
          "salience_share": 6.5,
          "description": "The Ferguson Protests act as a massive catalyst (+0.7%). The militarization of the police (surplus army gear) is visible on TV. It links the 'War on Terror' (Cluster 4) back to 'Domestic Justice.' 'Selma' releases, linking the current struggle to the Civil Rights movement history. The 'I Can't Breathe' slogan echoes the visceral reality of state violence.",
          "key_manifestations": [
            "Ferguson Protests (Event)",
            "Selma (Film)",
            "Run the Jewels 2 (Album - The soundtrack of the riot)",
            "Citizenfour (Surveillance as oppression)"
          ]
        },
        "2015": {
          "salience_share": 7.2,
          "description": "Bernie Sanders announces his run (+0.7%). He explicitly resurrects the 'Socialist' label, which was political suicide for 50 years. He is the electoral manifestation of Occupy Wall Street. 'Mr. Robot' depicts the desire to 'delete debt' as the ultimate heroic act. 'Mad Max: Fury Road' frames the revolution as a fight for resources (water) and against patriarchy.",
          "key_manifestations": [
            "Bernie Sanders Campaign (Launch)",
            "Mr. Robot (TV Series)",
            "Mad Max: Fury Road (Film)",
            "To Pimp a Butterfly (Album)"
          ]
        },
        "2016": {
          "salience_share": 6.8,
          "description": "Trump's victory and Brexit act as a 'Populist Short-Circuit' (-0.4%). The 'Anti-Globalist' energy is captured by the Right (Nationalism) rather than the Left (Internationalism). The 'Left' retreats into 'Resistance' (pussy hats, ACLU donations). 'Moonlight' offers a quiet, beautiful insistence on the humanity of the marginalized, standing in contrast to the loud political chaos.",
          "key_manifestations": [
            "Standing Rock / NoDAPL (Protest)",
            "Brexit (Event)",
            "13th (Documentary - The prison industrial complex)",
            "Moonlight (Film)"
          ]
        }
      }
    },
    "13_corporate_personhood_and_brand_intimacy": {
      "name": "Corporate Personhood and Brand Intimacy",
      "description": "This cluster explores the evolving relationship between the Corporation and the Individual. It moves from the antagonism of the 90s (anti-sweatshop, anti-logo) to the legal and cultural anthropomorphization of the Brand. Legally, this is anchored by 'Citizens United' (Money = Speech). Culturally, it is driven by Social Media, where brands adopt a 'Voice' (The Wendy's Twitter, Old Spice Guy), feigning intimacy, humor, and mental illness to engage users. It tracks the shift from 'Buying a Product' to 'Befriending a Brand' and the eerie collapse of the distinction between a person and a corporation.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "The baseline is 'Corporate Villainy.' 'Fight Club' destroys credit card buildings. 'The Insider' exposes Big Tobacco. The brand is the enemy. The Microsoft Antitrust case is in the news, framing the corporation as a predator to be leashed. There is zero 'intimacy'; the corporation is a faceless monolith.",
          "key_manifestations": [
            "Fight Club (Film)",
            "The Insider (Film)",
            "Microsoft Antitrust Case (Event)",
            "Office Space (The soul-crushing corporation)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "Logomania is at its peak (Louis Vuitton, Gucci), but it is about *status*, not *personality*. However, 'Cast Away' features FedEx and Wilson (a brand) as the primary co-stars, blurring product placement with emotional support. It suggests the brand can be a companion. The 'Apple' brand begins to pivot under Jobs to being a 'creative partner' rather than a tool manufacturer.",
          "key_manifestations": [
            "Cast Away (Film)",
            "Erin Brockovich (Film - Fighting the toxic corp)",
            "No Logo (Book - The critique)",
            "Apple Cube (Design as identity)"
          ]
        },
        "2001": {
          "salience_share": 2.1,
          "description": "The Apple Store opens (+0.3%). It is a temple, not a shop. It reframes the transaction as an 'experience' and the staff as 'Geniuses.' Enron collapses, reinforcing the 'Corporate Villain' trope—they are not just greedy, they are frauds. 'Monsters, Inc.' depicts a corporation that literally runs on the screams of children, a perfect metaphor for the era's view of capitalism.",
          "key_manifestations": [
            "Apple Store (Retail Launch)",
            "Enron Scandal (Event)",
            "Monsters, Inc. (Film)",
            "Josie and the Pussycats (Film - Satire of subliminal branding)"
          ]
        },
        "2002": {
          "salience_share": 2.4,
          "description": "Variance creeps up (+0.3%) as 'American Idol' integrates Coca-Cola into the fabric of the show. The cups are always there. It’s not a commercial break; it’s the set. 'Minority Report' shows a future of personalized ads that call you by name—dystopian, but predicting the intimacy to come. The 'Dell Dude' becomes a minor celebrity, an early attempt to give a face to the box.",
          "key_manifestations": [
            "American Idol (Coca-Cola Integration)",
            "Minority Report (Targeted Ads scene)",
            "Spider-Man (Times Square product placement)",
            "The Dell Dude (Ad Campaign)"
          ]
        },
        "2003": {
          "salience_share": 2.8,
          "description": "The 'I'm Lovin' It' Justin Timberlake campaign for McDonald's launches (+0.4%). It is a massive attempt to transfer pop star cool to a burger chain. 'The Corporation' (Documentary) releases, diagnosing the corporation as a 'psychopath' using DSM-IV criteria. This is the peak of the intellectual resistance before the social media slide begins.",
          "key_manifestations": [
            "The Corporation (Documentary)",
            "McDonald's 'I'm Lovin' It' Launch",
            "Lost in Translation (Suntory Whiskey scene)",
            "School of Rock (The Man as the enemy)"
          ]
        },
        "2004": {
          "salience_share": 3.1,
          "description": "Dove launches the 'Campaign for Real Beauty' (+0.3%). This is a pivotal moment: 'Woke Capital' is born (though not named yet). The brand is no longer selling soap; it is selling 'Self-Esteem' and 'Social Justice.' It invites the consumer to align their values with the corporation. 'Super Size Me' attacks McDonald's, forcing them to eliminate the Super Size option—a rare victory for the critique.",
          "key_manifestations": [
            "Dove Campaign for Real Beauty",
            "Super Size Me (Documentary)",
            "Harold & Kumar Go to White Castle (The brand as the quest)",
            "I, Robot (Converse placement)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "The 'Geico Gecko' and 'Cavemen' become sitcom characters (+0.4%). The ad mascot is evolving into a content creator. We are starting to watch ads for the plot. 'Thank You for Smoking' humanizes the lobbyist, exploring the spin machine with cynical wit. The idea that 'Corporations are people' is becoming a cultural vibe before it becomes a legal reality.",
          "key_manifestations": [
            "Geico Cavemen (Ad Campaign)",
            "Thank You for Smoking (Film)",
            "Charlie and the Chocolate Factory (The magical industrialist)",
            "Syriana (The oil company as nation-state)"
          ]
        },
        "2006": {
          "salience_share": 4.1,
          "description": "'Mac vs. PC' ads launch (+0.6%). It explicitly anthropomorphizes the brands: Mac is the cool, casual Justin Long; PC is the stuffy, suit-wearing Hodgman. It tells the consumer: 'You are your computer.' It tribalizes brand loyalty. Twitter launches, giving brands a platform to eventually speak directly to users, though they haven't figured it out yet.",
          "key_manifestations": [
            "Get a Mac (Ad Campaign)",
            "Talladega Nights (The absurdity of sponsorship)",
            "Idiocracy (The Brawndo corporation running the state)",
            "Casino Royale (Omega/Sony placement)"
          ]
        },
        "2007": {
          "salience_share": 4.5,
          "description": "The iPhone launch (+0.4%). Apple becomes a religion. People camp out for days. The brand is now an identity marker more powerful than religion or politics for the urban class. 'Mad Men' premieres, making the *creation* of advertising cool and artistic. We begin to romanticize the manipulation.",
          "key_manifestations": [
            "iPhone Launch (The lines)",
            "Mad Men (TV Series Premiere)",
            "Ratatouille (The frozen food empire vs. art)",
            "Bee Movie (The lawsuit against the human race)"
          ]
        },
        "2008": {
          "salience_share": 5.2,
          "description": "The Bank Bailouts (-0.7% sentiment, +1.4% structural power). The government confirms 'Too Big to Fail.' The state and the corporation are fused. Iron Man releases—Tony Stark is a weapons manufacturer, but he is the hero. We have stopped hating the military-industrial complex and started wanting to be the CEO of it.",
          "key_manifestations": [
            "Bank Bailouts (TARP)",
            "Iron Man (The CEO as Superhero)",
            "Wall-E (Buy n Large running the universe)",
            "Step Brothers (Prestige Worldwide)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "The 'Compare the Meerkat' (UK) and other viral ad campaigns dominate (+0.6%). 'Up in the Air' depicts the firing consultant as a tragic figure, humanizing the corporate axe-man. 'Avatar' features the RDA corporation as the villain, but it feels like a throwback to 90s tropes. In reality, corporations are becoming 'platforms' (Uber, AirBnb) that frame our entire lives.",
          "key_manifestations": [
            "Up in the Air (Film)",
            "Avatar (RDA Corporation)",
            "Food, Inc. (Documentary - The hidden corporate food chain)",
            "Zombieland (Twinkies as the ultimate object of desire)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "Citizens United v. FEC (+1.7%). The Supreme Court rules that corporations have free speech rights (spending money). It is the legal singularity of the cluster. Simultaneously, the 'Old Spice Man' campaign goes viral on YouTube, responding to users in real-time. It is the birth of 'Brand Personality.' The corporation can now legally buy elections and culturally crack jokes.",
          "key_manifestations": [
            "Citizens United Ruling (Legal Event)",
            "Old Spice 'The Man Your Man Could Smell Like' (Viral Campaign)",
            "The Social Network (The founding myth of the new corp)",
            "Inception (Corporate espionage as dream warfare)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "Siri launches (+0.3%). The corporation now speaks to you in a human voice from your pocket. 'Black Mirror' (Fifteen Million Merits) depicts a world where life is entirely gamified by a corporation, and dissent is purchased for entertainment. Mitt Romney says 'Corporations are people, my friend' on the campaign trail, sparking outrage but stating the quiet part out loud.",
          "key_manifestations": [
            "Mitt Romney 'Corporations are people' gaffe",
            "Black Mirror 'Fifteen Million Merits'",
            "Bridesmaids (The flight scene - airline rigidness)",
            "Chevy Volt ads (Greenwashing)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "The 'Oreo Super Bowl Tweet' ('You can still dunk in the dark') (+0.4%). It is hailed as a genius moment of 'Real-Time Marketing.' It sets the standard: brands must be awake, watching, and commenting on culture instantly. Red Bull sponsors the Stratos Jump—the brand is now producing history, not just sponsoring it.",
          "key_manifestations": [
            "Oreo Super Bowl Tweet",
            "Red Bull Stratos Jump",
            "The Lorax (The irony of the Mazda tie-in)",
            "Prometheus (Weyland Corp as God-player)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "Netflix (The Corporation) uses data to create 'House of Cards' (+0.3%). They are now the auteur. 'Her' shows an OS (a product) providing the deep emotional connection the protagonist lacks. The 'Denny's Tumblr' becomes famous for 'shitposting'—weird, surreal humor that sounds like a depressed teenager. The brand has learned to mimic the vernacular of the alienated youth.",
          "key_manifestations": [
            "Denny's Tumblr (Weird Corporate Twitter)",
            "Her (Film)",
            "The Wolf of Wall Street (The idolatry of the scammer)",
            "Anchorman 2 (The 24 hour news cycle as product)"
          ]
        },
        "2014": {
          "salience_share": 9.1,
          "description": "The 'Lego Movie' releases (+0.6%). It is literally a 90-minute toy commercial, but it is brilliant, heartfelt, and critical of 'The Man' (President Business). It represents the total victory of the brand: the critique of capitalism is now sold to us by a toy company. 'Gamergate' sees users demanding brands (Intel) take sides in culture wars. The brand is now a political actor whether it wants to be or not.",
          "key_manifestations": [
            "The Lego Movie (Film)",
            "Intel Pulls Ads from Gamasutra (Gamergate)",
            "Silicon Valley (TV Series - The corporate culture satire)",
            "Nightcrawler (News as a startup hustle)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "Google becomes 'Alphabet' (+0.4%). The corporation structures itself like a government or an umbrella for reality. 'Mr. Robot' features 'E Corp' (Evil Corp), tapping into the residual fear, but the show is distributed by a major corporation (Comcast/USA). Brands on Twitter (Wendy's) start 'roasting' users. The 'Sassy Brand' archetype is fully entrenched.",
          "key_manifestations": [
            "Google rebrands to Alphabet",
            "Wendy's Twitter Roasts (Viral Trend)",
            "Jurassic World (The park sponsored by Verizon)",
            "Steve Jobs (Film - The CEO as flawed artist)"
          ]
        },
        "2016": {
          "salience_share": 9.9,
          "description": "Trump (A Brand) becomes President (+0.4%). He places his name on buildings in gold letters. He runs the country like a family business. The distinction between 'The Trump Organization' and 'The White House' is blurry. Peter Thiel destroys Gawker (a media company) using the legal system, proving that a single tech billionaire is more powerful than the press. Corporate personhood is absolute.",
          "key_manifestations": [
            "Trump Election (The Brand President)",
            "Gawker vs. Hulk Hogan/Thiel (The end of independent snark)",
            "Sausage Party (Food gaining consciousness)",
            "Popstar: Never Stop Never Stopping (The sponsorship satire)"
          ]
        }
      }
    },
    "14_subprime_optimism_and_recession_grief": {
      "name": "Subprime Optimism and Recession Grief",
      "description": "This cluster maps the emotional arc of the American Dream from the manic, debt-fueled highs of the Housing Bubble to the devastating psychological hangover of the Great Recession. It begins with the culture of 'Easy Money'—where flipping houses was a national sport and *MTV Cribs* normalized absurd excess. It then tracks the traumatic rupture of 2008 and the subsequent 'Austerity Aesthetics' (Tiny Houses, ruin porn, the zombie as economic metaphor). It explores how the home shifted from a 'castle' to an 'underwater asset,' and how the cultural mood soured from aspirational materialism to resentful survivalism.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "The cluster begins in the shadow of the Dot-com boom. Optimism is high, but it is focused on stocks, not yet real estate. 'American Beauty' critiques the suburban dream as hollow, but assumes the money is permanent. The 'McMansion' is becoming the standard unit of success. The vibe is 'End of History' wealth—boring, stable, and inevitable.",
          "key_manifestations": [
            "American Beauty (Film)",
            "Who Wants to Be a Millionaire (TV Series Premiere - Instant wealth fantasy)",
            "SimCity 3000 (Urban sprawl simulator)",
            "The Sopranos (The suburban criminal)"
          ]
        },
        "2000": {
          "salience_share": 1.2,
          "description": "The stock market correction (-0.3%) shifts focus. Investors flee the volatile NASDAQ for the 'safety' of bricks and mortar. *MTV Cribs* premieres, inventing a new genre of 'Real Estate Porn.' We stop looking at charts and start looking at refrigerator contents and spinning rims. It establishes the baseline for 'conspicuous consumption' that defines the decade.",
          "key_manifestations": [
            "MTV Cribs (TV Series Premiere)",
            "Erin Brockovich (The little guy vs. corporate greed, pre-crash)",
            "Cast Away (Loss of material comfort)",
            "The Sims (Building the dream house)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "Post-9/11, Bush tells Americans to 'go shopping' (+0.6%). Interest rates are cut to emergency lows. The credit spigot opens. The home becomes a bunker against a scary world. 'The Fast and the Furious' celebrates a culture of expensive toys paid for by crime (or credit). The 'ownership society' rhetoric begins to ramp up.",
          "key_manifestations": [
            "The Fast and the Furious (Film)",
            "Grand Theft Auto III (Acquisition of wealth through chaos)",
            "Ocean's Eleven (The cool heist - stealing from the rich)",
            "Training Day (Corruption and cash)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "The Housing Boom ignites (+0.7%). 'Flip This House' culture is born (though the shows come later, the behavior starts now). The 'Heloc' (Home Equity Line of Credit) becomes a household term. We are using our homes as ATMs. *The Bachelor* presents marriage not just as romance, but as a merger of assets and lifestyles.",
          "key_manifestations": [
            "The Bachelor (TV Series Premiere)",
            "Catch Me If You Can (The charm of the fraud)",
            "8 Mile (The desire to escape the trailer park)",
            "Maid in Manhattan (Class mobility fantasy)"
          ]
        },
        "2003": {
          "salience_share": 3.2,
          "description": "*Extreme Makeover: Home Edition* premieres (+0.7%). It is the peak of the cluster's optimistic phase. It suggests that a new house solves all emotional and structural family problems. The 'Subprime' market expands aggressively. 'The O.C.' fetishizes the Newport Beach lifestyle—infinity pools and pool houses are the new normal for teenagers.",
          "key_manifestations": [
            "Extreme Makeover: Home Edition (TV Series Premiere)",
            "The O.C. (TV Series)",
            "Arrested Development (The Bluth Company - incompetent developers)",
            "School of Rock (Rent anxiety as plot point)"
          ]
        },
        "2004": {
          "salience_share": 3.8,
          "description": "Variance rises (+0.6%) as 'pimping' culture goes mainstream (*Pimp My Ride*). The aesthetic is 'more is more.' Hummers are everywhere. Kanye West's *The College Dropout* celebrates the hustle for luxury goods ('drug dealer chic'). The 'Credit Score' becomes a measure of human worth. The bubble is inflating rapidly.",
          "key_manifestations": [
            "Pimp My Ride (TV Series Premiere)",
            "The College Dropout by Kanye West (Album)",
            "Desperate Housewives (Suburban secrets)",
            "Entourage (The lifestyle of free spending)"
          ]
        },
        "2005": {
          "salience_share": 4.5,
          "description": "The peak of the bubble (+0.7%). 'Condo flipping' is discussed at every cocktail party. *House Hunters* is essential viewing. The cultural belief is that 'real estate never goes down.' *Fun with Dick and Jane* remakes the 70s classic, laughing at corporate malfeasance, but it feels like a farce, not a documentary (yet). The 'McMansion' is the ultimate status symbol.",
          "key_manifestations": [
            "House Hunters (Peak popularity)",
            "Fun with Dick and Jane (Film)",
            "The Apprentice (Trump as the avatar of real estate genius)",
            "Grey's Anatomy (The high-earning professional lifestyle)"
          ]
        },
        "2006": {
          "salience_share": 4.2,
          "description": "The market cools, but the culture is in denial (-0.3%). *The Real Housewives of Orange County* premieres. It documents the exact moment the bubble bursts, though the cast doesn't know it yet. It captures the frantic materialism of the 'New Money' class—Botox, leased luxury cars, and gated communities. It is the documentation of the fall.",
          "key_manifestations": [
            "The Real Housewives of Orange County (TV Series Premiere)",
            "The Pursuit of Happyness (Homelessness as a temporary embarrassment)",
            "Click (The remote control to skip the work and get the reward)",
            "Casino Royale (High stakes gambling)"
          ]
        },
        "2007": {
          "salience_share": 4.9,
          "description": "The cracks appear (+0.7% variance as anxiety enters). Subprime lenders begin to collapse. *No Country for Old Men* depicts a world where the money is cursed and violence is random—a mood shift from the glitzy heists of *Ocean's Eleven*. *Mad Men* looks back at the 60s, romanticizing a time of 'solid' growth compared to the current paper wealth.",
          "key_manifestations": [
            "No Country for Old Men (Film)",
            "There Will Be Blood (The destructive pursuit of wealth)",
            "Gossip Girl (The disconnect of the ultra-rich)",
            "Paranormal Activity (The horror within the suburban home)"
          ]
        },
        "2008": {
          "salience_share": 6.8,
          "description": "The Crash (+1.9%). The bubble bursts. Lehman Brothers falls. The cultural mood shifts instantly from 'Optimism' to 'Panic.' *Iron Man* releases, presenting the billionaire not as a greedy villain but as the only one who can save us—a desperate fantasy. *Breaking Bad* premieres: the story of a man whose economic safety net fails, forcing him into crime. It is the definitive Recession narrative.",
          "key_manifestations": [
            "Breaking Bad (TV Series Premiere)",
            "Iron Man (Film)",
            "Wall-E (The debris of consumption)",
            "Step Brothers (Adult children moving back home)"
          ]
        },
        "2009": {
          "salience_share": 7.5,
          "description": "Peak Grief (+0.7%). The foreclosure crisis is in full swing. *Up in the Air* captures the sterility of the layoff culture. *The Blind Side* offers a white-savior fantasy about solving poverty, comforting a guilty middle class. *Modern Family* premieres, showing a kinder, gentler version of wealth to soothe the anxiety. The 'Staycation' becomes a buzzword.",
          "key_manifestations": [
            "Up in the Air (Film)",
            "Modern Family (TV Series Premiere)",
            "The Hangover (The consequence of excess)",
            "Zombieland (The economy is dead/survival mode)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "The 'Zombie' trend explodes (-0.3% trend, but +1.5% specific sub-genre). *The Walking Dead* premieres. The Zombie is the perfect metaphor for the foreclosure neighbor, the banks, and the economy: dead but still eating. *The Town* depicts bank robbery not as a thrill, but as a desperate blue-collar job. The anger at the '1%' begins to simmer.",
          "key_manifestations": [
            "The Walking Dead (TV Series Premiere)",
            "The Town (Film)",
            "Winter's Bone (Rural poverty noir)",
            "Despicable Me (The villain has a mortgage)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "*The Queen of Versailles* (Documentary) films the unfinished mansion of a billionaire time-share mogul (-0.4%). It is the tombstone of the bubble. *Margin Call* humanizes the bankers, showing them not as masterminds but as scared cogs in a broken machine. *2 Broke Girls* laughs at the downfall—the rich girl loses her trust fund and must waitress. Downward mobility is the new sitcom premise.",
          "key_manifestations": [
            "The Queen of Versailles (Documentary)",
            "Margin Call (Film)",
            "2 Broke Girls (TV Series)",
            "Bridesmaids (The financial cost of being a friend)"
          ]
        },
        "2012": {
          "salience_share": 6.2,
          "description": "The 'Tiny House' movement begins to trend on Pinterest (-0.6%). The aspiration shifts from 'McMansion' to 'Minimalism.' We are making a virtue of necessity. 'Thrift Shop' by Macklemore goes viral—mocking designer brands and celebrating the $0.99 find. It is the anthem of the post-recession consumer. *The Dark Knight Rises* features a literal attack on the Stock Exchange.",
          "key_manifestations": [
            "Thrift Shop by Macklemore (Song)",
            "Tiny House Hunters (TV Concept gaining traction)",
            "The Dark Knight Rises (Bane occupies Wall St)",
            "Silver Linings Playbook (Mental health and economic failure)"
          ]
        },
        "2013": {
          "salience_share": 5.8,
          "description": "*The Wolf of Wall Street* releases (-0.4%). It looks back at the 90s excess with a mix of disgust and envy. Audiences cheer for Jordan Belfort, revealing a lingering desire for the 'easy money' that was lost. *Spring Breakers* shows the dark side of the American Dream—funding the vacation through robbery. The recovery is here for the stock market, but not for the people.",
          "key_manifestations": [
            "The Wolf of Wall Street (Film)",
            "Spring Breakers (Film)",
            "Pain & Gain (The idiocy of the get-rich-quick scheme)",
            "Orange Is the New Black (Prison as the bottom of the safety net)"
          ]
        },
        "2014": {
          "salience_share": 5.2,
          "description": "The 'Gig Economy' (Cluster 8) fully replaces the 'Housing Market' as the locus of economic hope/fear (-0.6%). *Gone Girl* depicts the 'Cool Girl' monologue, but also the economic resentment of a couple whose careers were destroyed by the recession (journalism). *Nightcrawler* shows the new path to success: sociopathic self-exploitation.",
          "key_manifestations": [
            "Gone Girl (Film)",
            "Nightcrawler (Film)",
            "Foxcatcher (The darkness of old money)",
            "Broad City (The hustle of the broke millennial)"
          ]
        },
        "2015": {
          "salience_share": 5.5,
          "description": "*The Big Short* explains the crash to the masses (+0.3%). It turns financial derivatives into pop art. It solidifies the narrative: the game was rigged. *Schitt's Creek* premieres, reversing the *Beverly Hillbillies* trope—the rich family loses everything and moves to a small town. It finds heart in the loss of status. The grief is turning into acceptance.",
          "key_manifestations": [
            "The Big Short (Film)",
            "Schitt's Creek (TV Series Premiere)",
            "99 Homes (Film - The cruelty of eviction)",
            "Mr. Robot (The fantasy of erasing debt)"
          ]
        },
        "2016": {
          "salience_share": 5.9,
          "description": "*Hell or High Water* acts as the elegy for this cluster (+0.4%). It depicts the Texas midlands as a hollowed-out shell, where banks are the enemy and robbery is the only way to keep the family farm. It perfectly captures the 'economic anxiety' that fuels the populist political wave. The Subprime Optimism is dead; only the debt remains.",
          "key_manifestations": [
            "Hell or High Water (Film)",
            "Hillbilly Elegy (Book)",
            "Atlanta (The reality of being broke)",
            "War Dogs (The hustle of the Iraq War contracts)"
          ]
        }
      }
    },
    "15_post_humanism_and_transhumanist_anxiety": {
      "name": "Post-Humanism and Transhumanist Anxiety",
      "description": "This cluster tracks the cultural processing of the 'Technological Singularity' and the blurring line between human and machine. It moves from the biological fears of the late 90s (cloning, genetic modification) to the computational fears of the 2010s (AI, simulation theory, digital consciousness). It encompasses the shift from fearing the robot as a 'Terminator' (physical threat) to fearing the AI as a 'Seductress' or 'Replacement' (existential threat). It is the story of humanity asking: 'Are we obsolete?'",
      "trajectory": {
        "1999": {
          "salience_share": 2.2,
          "description": "*The Matrix* is the defining text (+0.5%). It introduces the idea that humanity is already enslaved by code. It popularizes the 'Simulation Hypothesis.' *Bicentennial Man* explores the robot's desire to be human, a classic Asimovian trope. The fear is 'The Machine will conquer us.'",
          "key_manifestations": [
            "The Matrix (Film)",
            "Bicentennial Man (Film)",
            "The Sixth Sense (The boundary of death)",
            "Existenz (Bio-ports and organic tech)"
          ]
        },
        "2000": {
          "salience_share": 2.5,
          "description": "The completion of the Human Genome Project draft (+0.3%). We can now read the code of life. *X-Men* launches the superhero boom, but metaphorically it's about 'Mutants'—the next stage of evolution. Are they replacing us? *The 6th Day* (Arnold Schwarzenegger) deals directly with the ethics of human cloning, reflecting the headlines about Dolly the Sheep.",
          "key_manifestations": [
            "X-Men (Film - Evolution)",
            "The 6th Day (Film - Cloning)",
            "Hollow Man (Invisibility and loss of humanity)",
            "Deus Ex (Video Game - Nano-augmentation)"
          ]
        },
        "2001": {
          "salience_share": 2.8,
          "description": "Spielberg's *A.I. Artificial Intelligence* releases (+0.3%). It shifts the focus to emotional AI—the 'Mecha' who can love. It asks if a simulated emotion is real. *Halo* introduces Cortana, the AI companion who is smarter and more capable than the human hero, foreshadowing the Siri/Alexa era.",
          "key_manifestations": [
            "A.I. Artificial Intelligence (Film)",
            "Halo: Combat Evolved (Cortana)",
            "Vanilla Sky (Cryogenics and simulated reality)",
            "Donnie Darko (Time travel/Determinism)"
          ]
        },
        "2002": {
          "salience_share": 2.4,
          "description": "Variance dips (-0.4%) as post-9/11 culture focuses on immediate physical security (Cluster 4). However, *Minority Report* keeps the flame alive with its vision of a 'Pre-Crime' society where human will is subservient to the algorithm's prediction. *Resident Evil* introduces the 'Red Queen,' another murderous AI.",
          "key_manifestations": [
            "Minority Report (Film)",
            "Resident Evil (Film)",
            "Star Wars: Attack of the Clones (The Clone Army)",
            "Simone (Film - The virtual actress)"
          ]
        },
        "2003": {
          "salience_share": 2.9,
          "description": "*Battlestar Galactica* (Miniseries) premieres (+0.5%). It reinvents the Cylons not as metal tin cans, but as biological machines indistinguishable from humans. They believe in God. It blurs the line completely. 'Are you alive?' becomes the central question. *The Matrix Reloaded* introduces 'The Architect,' framing God as a programmer.",
          "key_manifestations": [
            "Battlestar Galactica (Miniseries)",
            "The Matrix Reloaded (Film)",
            "X2: X-Men United (Mutant supremacy)",
            "Terminator 3 (The inevitability of Judgment Day)"
          ]
        },
        "2004": {
          "salience_share": 3.2,
          "description": "*Eternal Sunshine of the Spotless Mind* explores the technological deletion of memory (+0.3%). It treats the mind as a hard drive to be formatted. *I, Robot* updates Asimov for the blockbuster era, dealing with the 'Ghost in the Machine.' The fear is shifting from 'killer robots' to 'loss of self.'",
          "key_manifestations": [
            "Eternal Sunshine of the Spotless Mind (Film)",
            "I, Robot (Film)",
            "The Final Cut (Memory recording implants)",
            "Primer (Time travel engineering)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "Ray Kurzweil publishes *The Singularity Is Near* (+0.3%). The concept of the 'Singularity' enters the intellectual mainstream. It promises immortality through uploading. *The Island* explores the horror of raising clones for spare parts—the body as a commodity. *Doctor Who* introduces the 'Cybermen' to a new generation—humans who upgraded themselves into monsters.",
          "key_manifestations": [
            "The Singularity Is Near (Book)",
            "The Island (Film)",
            "Doctor Who (The Parting of the Ways)",
            "Serenity (The Operative - surgically removed conscience)"
          ]
        },
        "2006": {
          "salience_share": 3.1,
          "description": "Variance holds (-0.4%). *Children of Men* deals with biological obsolescence (infertility) rather than technological. *Click* touches on the desire to 'autopilot' life. The 'Uncanny Valley' effect becomes a talking point as video game graphics (PS3/Xbox 360) get closer to photorealism but look dead behind the eyes.",
          "key_manifestations": [
            "Children of Men (Film)",
            "Paprika (Dream recording tech)",
            "X-Men: The Last Stand (The 'Cure' for mutation)",
            "Gears of War (Post-human enemies)"
          ]
        },
        "2007": {
          "salience_share": 3.8,
          "description": "*Portal* (Video Game) releases (+0.7%). GLaDOS becomes the most iconic AI villain since HAL 9000. She is funny, passive-aggressive, and cruel. She tests the human subject like a lab rat. *Assassin's Creed* frames all of human history as a simulation/genetic memory access. The 'Animus' is the ultimate transhumanist device.",
          "key_manifestations": [
            "Portal (Video Game)",
            "Assassin's Creed (Video Game)",
            "Bioshock (Genetic modification as downfall)",
            "I Am Legend (The cure becomes the virus)"
          ]
        },
        "2008": {
          "salience_share": 4.2,
          "description": "*Wall-E* depicts the end-state of technological dependency (+0.4%). Humans are boneless consumers; the robots have more soul than the creators. *Iron Man* presents the 'Cyborg' as cool—Tony Stark is powered by the arc reactor in his chest. He is a man-machine hybrid. The exoskeleton is the new body.",
          "key_manifestations": [
            "Wall-E (Film)",
            "Iron Man (Film)",
            "Fringe (TV Series Premiere - Borderline science)",
            "Dead Space (The corruption of the flesh)"
          ]
        },
        "2009": {
          "salience_share": 4.5,
          "description": "*Avatar* is the ultimate transhumanist fantasy (+0.3%). The disabled protagonist leaves his broken body to inhabit a superior, alien bio-suit. He chooses the avatar over the human. *Moon* explores the ethics of cloning in a corporate context—the disposable worker. *District 9* features the protagonist slowly mutating into the alien 'other.'",
          "key_manifestations": [
            "Avatar (Film)",
            "Moon (Film)",
            "District 9 (Film)",
            "Surrogates (Film - Robot bodies)"
          ]
        },
        "2010": {
          "salience_share": 4.9,
          "description": "*Inception* treats the mind as a server that can be hacked (+0.4%). We can plant ideas (malware). *Tron: Legacy* revisits the grid, exploring the 'ISO' (a miracle of digital life). *Mass Effect 2* (Game) explores the 'Geth' (hive mind AI) and the question of whether a machine has a soul. The conversation is becoming more nuanced.",
          "key_manifestations": [
            "Inception (Film)",
            "Tron: Legacy (Film)",
            "Mass Effect 2 (Video Game)",
            "Never Let Me Go (Film - Clones for harvest)"
          ]
        },
        "2011": {
          "salience_share": 5.2,
          "description": "*Black Mirror* premieres (+0.3%). It is the *Twilight Zone* of the cluster. 'The Entire History of You' (the grain implant) makes the transhuman anxiety visceral. *Deus Ex: Human Revolution* asks 'Who are you when you are 40% machine?' The aesthetic of the 'Aug' (gold and black cybernetics) becomes iconic.",
          "key_manifestations": [
            "Black Mirror (TV Series Premiere)",
            "Deus Ex: Human Revolution (Video Game)",
            "Source Code (Film - Consciousness transfer)",
            "Rise of the Planet of the Apes (Cognitive enhancement)"
          ]
        },
        "2012": {
          "salience_share": 5.5,
          "description": "*Prometheus* features David, the android who despises his creators (+0.3%). He is the 'Ubermensch'—superior, immortal, and amoral. *The Avengers* features Tony Stark facing Loki, stating 'We have a Hulk'—biological enhancement vs. godhood. The 'CRISPR' technology (gene editing) begins to make headlines, moving the debate from sci-fi to reality.",
          "key_manifestations": [
            "Prometheus (Film)",
            "Cloud Atlas (The Fabricant revolution)",
            "Total Recall (Remake - Synthetic police)",
            "Robot & Frank (AI as caregiver)"
          ]
        },
        "2013": {
          "salience_share": 6.1,
          "description": "*Her* is the watershed moment (+0.6%). It moves AI from 'Tool' or 'Killer' to 'Lover.' It explores the emotional singularity. The OS leaves the human because he is too slow, too limited. *Orphan Black* premieres, exploring cloning from the perspective of identity and ownership. 'My body is intellectual property.'",
          "key_manifestations": [
            "Her (Film)",
            "Orphan Black (TV Series Premiere)",
            "Under the Skin (The alien view of humanity)",
            "Elysium (Med-bays and exoskeletons)"
          ]
        },
        "2014": {
          "salience_share": 6.5,
          "description": "*Ex Machina* deconstructs the Turing Test (+0.4%). The AI uses sexuality and empathy to manipulate the programmer. It suggests AI will not destroy us with lasers, but by outsmarting us socially. *Transcendence* (Johnny Depp) explores uploading consciousness to the internet, though it flops, showing audiences are skeptical of the 'Digital Heaven' narrative.",
          "key_manifestations": [
            "Ex Machina (Film)",
            "Transcendence (Film)",
            "Lucy (100% Brain capacity myth/Ascension)",
            "Big Hero 6 (The robot as huggable nurse)"
          ]
        },
        "2015": {
          "salience_share": 6.9,
          "description": "*Humans* (TV Series) and *Avengers: Age of Ultron* (+0.4%). Ultron sees the internet and decides humanity must end. *SOMA* (Video Game) is a terrifying exploration of the 'copy vs. move' problem in consciousness uploading. It asks: if you upload your mind, do *you* go, or does a copy go while you die? It is the peak of existential dread in the cluster.",
          "key_manifestations": [
            "SOMA (Video Game)",
            "Avengers: Age of Ultron (Film)",
            "Humans (TV Series)",
            "Chappie (Consciousness transfer)"
          ]
        },
        "2016": {
          "salience_share": 7.5,
          "description": "*Westworld* premieres (+0.6%). It combines the 'Gamer' logic (NPCs) with the 'AI Rights' logic. The hosts suffering loop is the ultimate critique of how we treat the 'other.' *Arrival* suggests that learning a new language (technology/tool) rewires the brain and perception of time. We are now fully in the 'Post-Human' discourse; we accept that we are changing.",
          "key_manifestations": [
            "Westworld (TV Series Premiere)",
            "Arrival (Film)",
            "Morgan (AI Bio-engineering)",
            "Ghost in the Shell (Live Action hype/whitewashing controversy)"
          ]
        }
      }
    },
    "16_poptimism_and_the_death_of_guilty_pleasures": {
      "name": "Poptimism and the Death of Guilty Pleasures",
      "description": "This cluster traces the collapse of the 'Rockist' hierarchy—the idea that rock/indie music was 'art' and pop/rap was 'commercial trash.' It begins with the fierce tribalism of the TRL era (Britney vs. Korn), moves through the critical re-evaluation of pop (Pitchfork reviews, the 'Celine Dion' debate), and ends with the total hegemony of Pop stars as the new Auteurs. It is the story of how 'Guilty Pleasure' became an obsolete term, replaced by the unironic celebration of the Top 40, fueled by the internet's flattening of context and the decline of the rock band as a cultural force.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "The 'Rockism' wall is high. TRL is the battleground (+0.2%). Pop (Britney, Backstreet Boys) is massive but critically reviled. It is seen as 'plastic.' Nu-Metal (Limp Bizkit) presents itself as the 'authentic' aggressive alternative. To like pop is to be a dupe of the industry. The 'Indie' fan defines themselves by what they *hate*.",
          "key_manifestations": [
            "Total Request Live (Cultural Center)",
            "...Baby One More Time (Album)",
            "Significant Others by Limp Bizkit (The Rockist reaction)",
            "Woodstock '99 (The violent end of 90s rock)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "*Kid A* by Radiohead releases (+0.3%). It is the ultimate 'Art Rock' statement—difficult, electronic, anti-pop. It reinforces the divide: Smart people listen to Radiohead; dumb people listen to NSYNC. However, *Oops!... I Did It Again* is undeniable. The pop production is becoming so high-quality that even skeptics are tapping their feet.",
          "key_manifestations": [
            "Kid A by Radiohead (Album)",
            "Oops!... I Did It Again (Album)",
            "Hybrid Theory by Linkin Park (Pop-metal synthesis)",
            "Almost Famous (The worship of 70s rock authenticity)"
          ]
        },
        "2001": {
          "salience_share": 1.9,
          "description": "The Strokes (Cluster 11) revive 'Rock' as a cool, leather-jacket aesthetic (+0.4%). It delays the rise of Poptimism by making guitars cool again. But *Moulin Rouge!* uses 'Lady Marmalade' to turn pop into a maximalist, high-art spectacle. The seeds of the 'Pop Diva as Icon' are planted.",
          "key_manifestations": [
            "Is This It by The Strokes (Album)",
            "Moulin Rouge! (Film)",
            "Celebrity by NSYNC (Pop embracing glitch/electronica)",
            "Josie and the Pussycats (Satire of pop manufacturing)"
          ]
        },
        "2002": {
          "salience_share": 2.2,
          "description": "Eminem's *The Eminem Show* bridges the gap (+0.3%). He is the biggest pop star on earth, but he writes his own raps and has 'rock' credibility. *American Idol* (Cluster 5) democratizes the pop process, making the audience invested in the 'manufactured' star. The critic is losing power to the voter.",
          "key_manifestations": [
            "The Eminem Show (Album)",
            "American Idol (Season 1)",
            "Complicated by Avril Lavigne (Pop masquerading as punk)",
            "Cry Me a River by Justin Timberlake (The breakup song as art)"
          ]
        },
        "2003": {
          "salience_share": 2.8,
          "description": "OutKast's *Speakerboxxx/The Love Below* is a catalyst (+0.6%). 'Hey Ya!' is a perfect pop song that is also experimental and critically worshipped. It proves you can be weird and Top 40 at the same time. The 'Indie' crowd starts dancing. Justin Timberlake's *Justified* makes it okay for guys to like the 'boy band' guy.",
          "key_manifestations": [
            "Hey Ya! (Song)",
            "Justified by Justin Timberlake (Album)",
            "Seven Nation Army (The last great stadium rock riff)",
            "School of Rock (Teaching the canon)"
          ]
        },
        "2004": {
          "salience_share": 3.4,
          "description": "Kelefa Sanneh writes 'The Rap Against Rockism' in the NYT (+0.6% internal). It is the academic declaration of war. He argues that hating pop is racism/sexism in disguise. Usher's *Confessions* dominates the world. Pitchfork is still snarky, but the cracks are forming. *Mean Girls* uses pop culture as a language, not a punchline.",
          "key_manifestations": [
            "'The Rap Against Rockism' (Article)",
            "Confessions by Usher (Album)",
            "Since U Been Gone by Kelly Clarkson (The indie-approved pop song)",
            "Mean Girls (Film)"
          ]
        },
        "2005": {
          "salience_share": 3.9,
          "description": "Kelly Clarkson's *Breakaway* confirms the trend (+0.5%). 'Since U Been Gone' is played at indie dive bars. It is the 'crossover' moment. The ironic detachment (Cluster 3) is fading in favor of 'this song slaps.' M.I.A.'s *Arular* mixes global pop, hip hop, and punk, defying genre classification.",
          "key_manifestations": [
            "Breakaway by Kelly Clarkson (Album)",
            "Arular by M.I.A. (Album)",
            "Hung Up by Madonna (Abba sample approved by cool kids)",
            "Gold Digger by Kanye West (Mainstream rap dominance)"
          ]
        },
        "2006": {
          "salience_share": 4.5,
          "description": "Justin Timberlake's *FutureSex/LoveSounds* releases (+0.6%). Produced by Timbaland, it is sonically adventurous. Pitchfork reviews it positively. The gatekeepers are opening the gates. 'Gnarls Barkley' goes viral, proving that an indie-soul hybrid can be the biggest song of the year.",
          "key_manifestations": [
            "FutureSex/LoveSounds (Album)",
            "Crazy by Gnarls Barkley (Song)",
            "Girl Talk (Mashup culture forcing genres to mix)",
            "Hannah Montana (The Disney machine ramps up)"
          ]
        },
        "2007": {
          "salience_share": 5.2,
          "description": "Britney's *Blackout* (+0.7%). Despite her public breakdown, critics recognize the production as avant-garde. It becomes a cult classic. Carl Wilson publishes *Let's Talk About Love*, a book analyzing his own hatred of Celine Dion, dismantling the 'Guilty Pleasure' concept philosophically. Rihanna's 'Umbrella' is undeniable.",
          "key_manifestations": [
            "Blackout by Britney Spears (Album)",
            "Let's Talk About Love by Carl Wilson (Book)",
            "Umbrella by Rihanna (Song)",
            "Graduation by Kanye West (Defeating 50 Cent in sales battle)"
          ]
        },
        "2008": {
          "salience_share": 6.1,
          "description": "Lady Gaga arrives (+0.9%). *The Fame*. She is a performance artist in pop drag. She explicitly states 'Pop is Art.' She unites the gay club kid scene, the fashion world, and the radio. She kills the 'Indie' argument that pop is effortless or shallow. *808s & Heartbreak* by Kanye West introduces auto-tuned vulnerability, shaping the sound of the next decade.",
          "key_manifestations": [
            "The Fame by Lady Gaga (Album)",
            "808s & Heartbreak by Kanye West (Album)",
            "Single Ladies by Beyoncé (Viral dance)",
            "Vampire Weekend (Indie engaging with global pop)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "*The Fame Monster* consolidates the victory (+0.4%). 'Bad Romance' is treated as high cinema. *Glee* premieres, turning pop covers into a weekly ritual for teenagers, stripping away all context of 'cool.' The Black Eyed Peas dominate with 'I Gotta Feeling'—pure, lobotomized joy that no one is 'too cool' for at a wedding.",
          "key_manifestations": [
            "The Fame Monster (Album)",
            "Glee (TV Series Premiere)",
            "I Gotta Feeling (Song)",
            "Party in the U.S.A. (Miley Cyrus embracing the cheese)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "Kanye West's *My Beautiful Dark Twisted Fantasy* gets a 10.0 from Pitchfork (+0.7%). This is the singularity. The bastion of indie pretension declares a major label rapper the genius of the age. 'Poptimism' is now the dominant critical mode. Katy Perry ties Michael Jackson's record for #1 singles. The 'Indie Band' is now a niche interest.",
          "key_manifestations": [
            "My Beautiful Dark Twisted Fantasy (Album)",
            "Teenage Dream by Katy Perry (Album)",
            "Dancing on My Own by Robyn (Sad banger perfection)",
            "Runaway (Short Film)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "Lana Del Rey's 'Video Games' (+0.6%). It is 'Pop' presented with 'Indie' aesthetics (lo-fi video, sad girl vibe). The debate rages: Is she 'real'? The answer is: It doesn't matter anymore. Authenticity is a performance. Beyoncé's *4* moves her towards album-oriented R&B, demanding serious listening.",
          "key_manifestations": [
            "Video Games by Lana Del Rey (Song)",
            "4 by Beyoncé (Album)",
            "We Found Love by Rihanna (EDM Pop peak)",
            "Friday by Rebecca Black (The bottom of the barrel is also celebrated)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "Carly Rae Jepsen's 'Call Me Maybe' (+0.4%). It is bubblegum perfection. Hipsters love it. Reviewers love it. It is the final nail in the coffin of irony. We enjoy it because it is good, not because we are joking. Taylor Swift's *Red* sees her flirting with dubstep and Max Martin, signaling her departure from Country.",
          "key_manifestations": [
            "Call Me Maybe (Song)",
            "Red by Taylor Swift (Album)",
            "Gangnam Style (Global pop barrier broken)",
            "Pitchfork reviews Taylor Swift (Cultural shift)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "Beyoncé releases *Beyoncé* (Self-Titled) as a surprise visual album (+0.3%). It commands attention like a film release. It is a feminist statement. Pop is now the driver of political and social discourse. Lorde's *Pure Heroine* critiques pop from within, but becomes a pop hit itself. The snake eats its tail.",
          "key_manifestations": [
            "Beyoncé (Visual Album)",
            "Pure Heroine by Lorde (Album)",
            "Bangerz by Miley Cyrus (Appropriation controversy)",
            "Get Lucky by Daft Punk (Disco revival)"
          ]
        },
        "2014": {
          "salience_share": 9.1,
          "description": "Taylor Swift's *1989* completes her transition (+0.6%). She is now a full pop star. Ryan Adams covers the entire album in the style of 'The Smiths,' mansplaining the songs to indie dads, but the culture largely agrees the original is better. Rock is now the 'cover band' genre. Pop is the source.",
          "key_manifestations": [
            "1989 by Taylor Swift (Album)",
            "Ryan Adams covers 1989 (Event)",
            "Chandelier by Sia (Song)",
            "Guardians of the Galaxy Soundtrack (Old pop is the new cool)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "Justin Bieber's *Purpose* redemption tour (+0.4%). 'Sorry' is a tropical house banger that everyone admits is fire. The 'Belieber' is no longer a teen girl; it's a 25-year-old male music critic. Carly Rae Jepsen's *Emotion* becomes the 'Indie darling' album of the year, despite selling poorly. She is the 'Queen of Poptimism.'",
          "key_manifestations": [
            "Purpose by Justin Bieber (Album)",
            "Emotion by Carly Rae Jepsen (Album)",
            "Hotline Bling (Meme-able pop)",
            "Hamilton (Musical theater becomes pop)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "The cluster culminates in the *Lemonade* vs. *The Life of Pablo* moment (+0.3%). These are the two biggest artistic statements of the year. No rock band comes close. Pop stars are now the auteurs, the directors, and the messiahs. 'Guilty Pleasure' is dead. If you don't like Beyoncé, *you* are the one with the bad taste.",
          "key_manifestations": [
            "Lemonade by Beyoncé (Album)",
            "The Life of Pablo by Kanye West (Album)",
            "Blonde by Frank Ocean (Genre-less masterpiece)",
            "Anti by Rihanna ( Rejection of radio hits)"
          ]
        }
      }
    },
    "17_slacktivism_and_click_based_praxis": {
      "name": "Slacktivism and Click-Based Praxis",
      "description": "This cluster maps the transformation of political activism from physical organizing to digital signaling. It tracks the rise of 'low-effort, high-visibility' engagement—changing profile pictures, retweeting hashtags, and signing online petitions. While initially hailed as a democratization of advocacy (the 'Facebook Revolution'), the cluster eventually analyzes the hollowness of 'Virtue Signaling' and the commodification of moral outrage. It highlights the tension between the dopamine hit of 'awareness raising' and the hard reality of material change.",
      "trajectory": {
        "1999": {
          "salience_share": 0.8,
          "description": "The cluster is in the 'Chain Email' phase. Activism is limited to forwarding warnings or petitions via AOL. It is low-stakes and largely invisible to the public. The 'Battle in Seattle' (WTO) relies on primitive internet organizing (Indymedia), but the action is decidedly physical. The digital is merely a tool for logistics, not the site of the protest itself.",
          "key_manifestations": [
            "Indymedia (IMC) founding",
            "WTO Protests (Physical action)",
            "Email Chain Letters ('Forward this to 10 people')",
            "The Matrix (The hacker as rebel archetype)"
          ]
        },
        "2000": {
          "salience_share": 1.1,
          "description": "MoveOn.org gains traction during the election/recount (+0.3%). It pioneers the 'email list' as a political force. It creates a model where clicking a link is framed as 'fighting back.' However, the broader culture is still disengaged. 'Survivor' is more talked about than the Supreme Court decision, highlighting the gap between entertainment and civic duty.",
          "key_manifestations": [
            "MoveOn.org (Growth)",
            "Bush v. Gore (Online discourse)",
            "The West Wing (Idealized politics)",
            "Blogger (Launch - democratization of opinion)"
          ]
        },
        "2001": {
          "salience_share": 0.9,
          "description": "9/11 silences dissent (-0.2%). Digital patriotism takes over. Flag GIFs and 'Never Forget' banners on personal homepages become the first mass wave of 'performative alignment.' It is not protest, but conformity. The 'Blogosphere' begins to form as a 'War Blog' ecosystem, where posting opinions is treated as fighting on the front lines of the culture war.",
          "key_manifestations": [
            "Instapundit (War Blog influence)",
            "Flag GIFs on Geocities",
            "The Patriot Act (Chilling effect)",
            "24 (The justification of force)"
          ]
        },
        "2002": {
          "salience_share": 1.2,
          "description": "The anti-war movement begins to organize online (+0.3%). 'Not In Our Name' petitions circulate. The concept of the 'Netroots' emerges—grassroots organizing via the net. However, it is still viewed as 'niche.' Friendster launches, introducing the profile picture, which will eventually become the primary billboard for personal politics.",
          "key_manifestations": [
            "Not In Our Name (Petition)",
            "Daily Kos (Founding)",
            "Friendster (Launch)",
            "Minority Report (The future of surveillance)"
          ]
        },
        "2003": {
          "salience_share": 1.5,
          "description": "Howard Dean's campaign revolutionizes digital fundraising (+0.3%). The 'Dean Scream' kills the campaign, but the 'Meetup.com' model survives. It proves the internet can move money and people. The term 'Flash Mob' is coined—initially for fun/art, but providing the template for rapid, digitally coordinated physical assembly.",
          "key_manifestations": [
            "Howard Dean Campaign (The Dean Scream)",
            "Flash Mobs (Trend)",
            "MoveOn.org 'Bush in 30 Seconds' contest",
            "The Matrix Reloaded (The failure of the rebellion)"
          ]
        },
        "2004": {
          "salience_share": 2.1,
          "description": "Facebook launches (+0.6%). The infrastructure for 'Slacktivism' is built. Initially exclusive, it trains users to curate an identity. 'The Daily Show' with Jon Stewart becomes the primary news source for the young, turning 'ironic observation' into a form of political engagement. Watching and laughing feels like doing something.",
          "key_manifestations": [
            "The Facebook (Launch)",
            "The Daily Show (Indecision 2004 coverage)",
            "Team America: World Police (Satire of celebrity activism)",
            "Rock the Vote (Gaming integration)"
          ]
        },
        "2005": {
          "salience_share": 2.4,
          "description": "The ONE Campaign (Bono) creates the 'White Band' trend (+0.3%). Buying a wristband becomes the ultimate symbol of low-effort activism. It is 'consumption as caring.' Hurricane Katrina sees a massive influx of text-message donations, proving that friction-less giving is the future of philanthropy.",
          "key_manifestations": [
            "Livestrong/ONE Wristbands (Trend)",
            "Katrina Text-to-Donate",
            "Huffington Post (Launch)",
            "Good Night, and Good Luck (Journalism as heroism)"
          ]
        },
        "2006": {
          "salience_share": 2.8,
          "description": "Time's Person of the Year is 'You' (+0.4%). It validates the narcissism of the Web 2.0 user. The 'Save Darfur' coalition mobilizes on MySpace and early Facebook. It is the first massive 'Cause'—millions join the group, but the genocide continues. It raises the question: does 'awareness' actually save lives?",
          "key_manifestations": [
            "Save Darfur (Facebook Cause)",
            "Time Person of the Year: You",
            "An Inconvenient Truth (PowerPoint as activism)",
            "Twitter (Launch)"
          ]
        },
        "2007": {
          "salience_share": 3.2,
          "description": "Facebook launches 'Causes' app (+0.4%). You can now send a 'virtual gift' to save the rainforest. The friction is zero. 'Free Rice' gamifies hunger relief. It is the peak of 'Techno-Optimism'—the belief that if enough people click, the world will change. The iPhone allows this to happen 24/7.",
          "key_manifestations": [
            "Facebook Causes App",
            "Free Rice (Website)",
            "Radiohead 'In Rainbows' (Pay what you want experiment)",
            "The Simpson Movie (Environmental themes)"
          ]
        },
        "2008": {
          "salience_share": 4.5,
          "description": "The Obama Campaign perfects the model (+1.3%). The 'Hope' poster is the ultimate meme. Sharing it is a political act. The campaign uses data to turn clicks into votes. It feels like the internet has finally delivered on its promise of democratic empowerment. Proposition 8 (Gay Marriage ban) sparks a massive wave of profile picture changes (No on 8), foreshadowing the 'Equality Sign' era.",
          "key_manifestations": [
            "Obama 'Hope' Poster",
            "Yes We Can (Will.i.am viral video)",
            "Prop 8 Protests/Online discourse",
            "Wall-E (Passive consumption critique)"
          ]
        },
        "2009": {
          "salience_share": 4.1,
          "description": "The 'Green Revolution' in Iran (+0.4% internal shift). Twitter is hailed as the tool of liberation. Users in the West change their location to Tehran to confuse censors—a noble but largely symbolic gesture. It is the first instance of 'Hashtag Activism' on a geopolitical scale. The term 'Slacktivism' begins to appear in critiques.",
          "key_manifestations": [
            "#IranElection (Trend)",
            "Avatar (The white savior fantasy)",
            "FarmVille (Clicking for rewards)",
            "ClimateGate (Hacking as activism)"
          ]
        },
        "2010": {
          "salience_share": 4.8,
          "description": "The 'It Gets Better' project goes viral (+0.7%). YouTube videos as suicide prevention. It is impactful and genuine, showing the best case of digital praxis. However, the 'Pepsi Refresh Project' tries to gamify corporate grants, showing the worst case—activism as brand engagement. WikiLeaks (Cablegate) shows 'Hacktivism' (Anonymous) as the militant wing of the online left.",
          "key_manifestations": [
            "It Gets Better Project",
            "WikiLeaks Cablegate",
            "Operation Payback (Anonymous DDoS attacks)",
            "The Social Network (The platform's amorality)"
          ]
        },
        "2011": {
          "salience_share": 5.5,
          "description": "The Arab Spring (+0.7%). The 'Facebook Revolution' narrative peaks. It seems the internet topples dictators. Occupy Wall Street uses 'The Human Mic' and Tumblr to bypass mainstream media. The 'Pepper Spray Cop' meme turns police brutality into shareable content. The line between 'internet drama' and 'revolution' is blurred.",
          "key_manifestations": [
            "Arab Spring Hashtags",
            "#OccupWallStreet",
            "Pepper Spray Cop Meme",
            "Black Mirror 'The National Anthem' (Public opinion as weapon)"
          ]
        },
        "2012": {
          "salience_share": 6.8,
          "description": "Kony 2012 (+1.3%). The absolute singularity of Slacktivism. A polished video goes viral, promising to stop a warlord if we buy a kit and share the video. It engages millions of youth, then collapses instantly when the creator has a public breakdown. It reveals the shallowness of the model: intense, brief emotional engagement with zero structural understanding. It breaks the heart of the internet optimism.",
          "key_manifestations": [
            "Kony 2012 (Viral Video)",
            "Trayvon Martin Hoodie Photos",
            "The Hunger Games (The revolution as spectacle)",
            "Girls (The narcissism of the young)"
          ]
        },
        "2013": {
          "salience_share": 6.2,
          "description": "The Red Equal Sign for Marriage Equality takes over Facebook (-0.6% trend, but high saturation). It is the most successful profile pic campaign ever. It works because the cause (Gay Marriage) is winning culturally. 'Black Lives Matter' begins as a hashtag (#BlackLivesMatter), but unlike Kony, it moves *to* the streets, not away from them.",
          "key_manifestations": [
            "Red Equal Sign (HRC Campaign)",
            "#BlackLivesMatter (Origin)",
            "Orange Is the New Black (Empathy for the marginalized)",
            "Her (Disembodied connection)"
          ]
        },
        "2014": {
          "salience_share": 6.5,
          "description": "The 'Ice Bucket Challenge' (+0.3%). It is the Kony model perfected: fun, narcissistic, and actually raises money ($115M for ALS). It redeems the viral challenge. However, '#BringBackOurGirls' (Boko Haram kidnapping) shows the limits—Michelle Obama tweets a pic, but the girls are not rescued. The hashtag cannot stop the gunmen.",
          "key_manifestations": [
            "Ice Bucket Challenge",
            "#BringBackOurGirls",
            "Gamergate (Weaponized hashtag activism)",
            "Selma (Historical contrast to digital activism)"
          ]
        },
        "2015": {
          "salience_share": 6.9,
          "description": "The terrorist attack on Charlie Hebdo leads to 'Je Suis Charlie' (+0.4%). The 'Filter' feature on Facebook (French Flag overlay) institutionalizes the response to tragedy. It creates a hierarchy of grief: why a flag for Paris but not for Beirut? 'Call-Out Culture' begins to accelerate on Tumblr/Twitter—social death as a tool of justice.",
          "key_manifestations": [
            "Je Suis Charlie / Facebook Flag Filter",
            "Love Wins (Supreme Court Ruling hashtags)",
            "Spotlight (The slow work of investigation vs hot takes)",
            "Mr. Robot (Hacking as the only real activism)"
          ]
        },
        "2016": {
          "salience_share": 7.5,
          "description": "The cluster culminates in the 'Post-Truth' political landscape (+0.6%). The 'Alt-Right' uses meme magic (Pepe) as praxis. The 'Safety Pin' movement (wearing a pin to show allyship after Trump's win) is mocked as the ultimate empty gesture. Digital activism has fractured: one side uses it for information warfare, the other for therapeutic signaling. The 'Echo Chamber' is sealed.",
          "key_manifestations": [
            "Safety Pin Movement",
            "Pepe the Frog / Meme Magic",
            "Change.org Petitions (Faithless Electors)",
            "Black Mirror 'Nosedive' (Social credit scores)"
          ]
        }
      }
    },
    "18_new_atheism_and_rationalist_hubris": {
      "name": "New Atheism and Rationalist Hubris",
      "description": "This cluster tracks the aggressive, scientifically-minded rejection of religion that surged in the post-9/11 era. Led by the 'Four Horsemen' (Dawkins, Hitchens, Harris, Dennett), it framed faith not just as incorrect, but as a mental illness and a geopolitical threat. The cluster evolves from a liberal defense of secularism into a 'Rationalist' identity politics, eventually fracturing in the 2010s. One branch merges with social justice (Atheism+), while the other drifts toward anti-feminism and the 'Intellectual Dark Web,' laying the groundwork for the Alt-Right's recruitment of disaffected young men.",
      "trajectory": {
        "1999": {
          "salience_share": 1.1,
          "description": "Secularism is the default setting of pop culture, but it is not militant. 'Dogma' (Kevin Smith) mocks Catholicism but ultimately affirms faith. 'The Matrix' uses religious metaphor (The One) without believing in God. Skepticism is focused on 'Creationism' in schools, a legacy battle from the 90s culture wars.",
          "key_manifestations": [
            "Dogma (Film)",
            "The Matrix (Messianic metaphor)",
            "Stigmata (Film)",
            "Skeptics Society (Niche influence)"
          ]
        },
        "2000": {
          "salience_share": 1.3,
          "description": "Variance is stable (+0.2%). The primary cultural conflict is between 'Preppy' and 'Alt,' not 'Believer' and 'Atheist.' However, the success of 'Harry Potter' draws ire from fundamentalists, creating a rallying point for secular defense of fantasy. 'X-Men' frames evolution as the hero, opposing the religious conservative senator.",
          "key_manifestations": [
            "Harry Potter Book Burnings (News)",
            "X-Men (Evolution vs. Fundamentalism)",
            "Titan A.E. (Universe creation without God)",
            "Inherit the Wind (TV Remake)"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "9/11 acts as a massive catalyst (+1.2%). The enemy is defined by 'Religious Fundamentalism.' While Bush emphasizes that 'Islam is peace,' a counter-narrative begins to brew: 'Religion itself is the problem.' Richard Dawkins writes scathing op-eds. The 'Clash of Civilizations' thesis gives cover for anti-religious sentiment to be framed as defense of Western Liberty.",
          "key_manifestations": [
            "Richard Dawkins Op-Eds (The Guardian)",
            "Donnie Darko (Agnostic time travel)",
            "The Believer (Film - Neo-Nazi as true believer)",
            "Ghost World (Cynicism as worldview)"
          ]
        },
        "2002": {
          "salience_share": 2.8,
          "description": "The Catholic Church sex abuse scandal explodes (Boston Globe). Variance rises (+0.3%). It destroys the moral authority of the institution. It validates the atheist claim that religion covers up crimes. 'Penn & Teller: Bullshit!' premieres, applying a libertarian, rationalist sledgehammer to everything from alien abductions to the Bible.",
          "key_manifestations": [
            "Spotlight Investigation (News)",
            "Penn & Teller: Bullshit! (TV Series Premiere)",
            "Signs (Aliens vs. Demons debate)",
            "Minority Report (Science replacing prophecy)"
          ]
        },
        "2003": {
          "salience_share": 3.1,
          "description": "The Iraq War is framed by Bush with religious language ('Crusade'). This alienates the secular Left, who begin to view Christianity as a driver of imperialism. 'The Da Vinci Code' mainstreamed the idea that the Church is a historical fraud. It acts as 'Atheism Lite' for the masses—questioning the divinity of Jesus via thriller plot.",
          "key_manifestations": [
            "The Da Vinci Code (Book)",
            "Bad Santa (The rejection of sacred holidays)",
            "Saved! (Film - Satire of Christian schools)",
            "Real Time with Bill Maher (TV Series Premiere)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "Sam Harris publishes 'The End of Faith' (+1.4%). This is the first bomb of the New Atheist movement. It argues that religious tolerance is a suicide pact. It resonates deeply in a post-9/11 world. 'South Park' (The Passion of the Jew) mocks the fervor around Mel Gibson, positioning the show as the ultimate 'Rational Centrist' voice.",
          "key_manifestations": [
            "The End of Faith by Sam Harris (Book)",
            "South Park 'The Passion of the Jew'",
            "Eternal Sunshine (Science erasing the soul)",
            "I Heart Huckabees (Existentialism vs. Nihilism)"
          ]
        },
        "2005": {
          "salience_share": 5.2,
          "description": "The 'Intelligent Design' trial (Kitzmiller v. Dover) puts evolution on the front page (+0.7%). The 'Flying Spaghetti Monster' becomes the mascot of the internet rationalist. It is the peak of 'Owning the Creationists.' It feels like a victory for science. 'Family Guy' returns, ramping up its atheistic humor (Brian the Dog).",
          "key_manifestations": [
            "Flying Spaghetti Monster (Open Letter)",
            "Kitzmiller v. Dover Area School District (Trial)",
            "Grizzly Man (Nature as indifferent chaos)",
            "Serenity (The Reavers as men without souls)"
          ]
        },
        "2006": {
          "salience_share": 6.8,
          "description": "The 'God Delusion' (Dawkins) and 'God Is Not Great' (Hitchens - published 2007 but hype starts) create the 'New Atheist' bestseller phenomenon (+1.6%). Atheism is now a commercial juggernaut. It is aggressive, witty, and unapologetic. The 'YouTube Atheist' community begins to form, uploading videos 'destroying' apologetics. It is the golden age of the movement.",
          "key_manifestations": [
            "The God Delusion by Richard Dawkins (Book)",
            "Letter to a Christian Nation by Sam Harris (Book)",
            "Jesus Camp (Documentary)",
            "Idiocracy (Dysgenics argument beloved by rationalists)"
          ]
        },
        "2007": {
          "salience_share": 7.5,
          "description": "Christopher Hitchens releases 'God Is Not Great' (+0.7%). He becomes the movement's rock star—chain-smoking, drinking, and debating pastors. 'The Golden Compass' (Film) attempts to bring anti-clerical themes to children, but is watered down. The movement is now fully linked with 'Science' and 'Progress.'",
          "key_manifestations": [
            "God Is Not Great by Christopher Hitchens (Book)",
            "The Golden Compass (Film)",
            "There Will Be Blood (The false prophet)",
            "Bioshock (No Gods or Kings, Only Man)"
          ]
        },
        "2008": {
          "salience_share": 7.2,
          "description": "Bill Maher's 'Religulous' releases (-0.3%). It preaches to the choir. The arguments are becoming repetitive. However, the movement finds a new enemy: Islam (specifically). The split between 'Liberal' atheists and 'Anti-Islam' atheists begins to widen. 'Iron Man' presents the engineer as the savior, reinforcing the technocratic worldview.",
          "key_manifestations": [
            "Religulous (Documentary)",
            "Iron Man (Tech vs. Terrorists)",
            "Expelled: No Intelligence Allowed (The Creationist counter-attack)",
            "True Blood (Vampires as Godless immortals)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "The 'Bus Campaign' ('There's probably no God') runs in London (-0.4%). It feels safe and cheeky. 'Avatar' introduces a rival spirituality (Pantheism) that appeals to the same liberal demographic, diluting the hard materialist focus. 'Ricky Gervais' begins to make atheism a core part of his stand-up persona.",
          "key_manifestations": [
            "Atheist Bus Campaign",
            "The Invention of Lying (Film)",
            "Agora (Film - Hypatia vs. Christians)",
            "Avatar (Nature worship)"
          ]
        },
        "2010": {
          "salience_share": 6.5,
          "description": "The 'Rally to Restore Sanity' (Stewart/Colbert) represents the peak of 'Rationalist Centrist' culture (-0.3%). It assumes that if everyone just calmed down and looked at the facts, politics would be solved. It ignores the emotional reality of the Tea Party. 'Sherlock' (BBC) presents the hyper-rational sociopath as the ideal hero.",
          "key_manifestations": [
            "Rally to Restore Sanity",
            "Sherlock (TV Series Premiere)",
            "Inception (The mind as architecture)",
            "The Social Network (The coder as king)"
          ]
        },
        "2011": {
          "salience_share": 5.8,
          "description": "'Elevatorgate' occurs (+0.7% internal fracture). Richard Dawkins mocks a woman for complaining about harassment in an elevator at an atheist convention. The movement instantly splits. The 'Atheism+' (Social Justice) faction fights the 'Skeptic' (Anti-Feminist) faction. This is the Patient Zero event for the online Culture Wars of the 2010s.",
          "key_manifestations": [
            "Elevatorgate (Online Event)",
            "The Tree of Life (The return of grace)",
            "Game of Thrones (Cynicism about power)",
            "Paul (Film - Alien mocks creationism)"
          ]
        },
        "2012": {
          "salience_share": 5.2,
          "description": "The 'Amazing Atheist' and other anti-feminist YouTubers begin to gain dominance in the algorithm (-0.6% trend). The focus shifts from 'Debunking Christianity' to 'Debunking Feminism.' The 'Rationalist' identity is weaponized against 'SJWs.' Christopher Hitchens dies (late 2011), leaving a power vacuum filled by less nuanced voices.",
          "key_manifestations": [
            "The Amazing Atheist (Channel Growth)",
            "Prometheus (Search for creators is futile)",
            "Life of Pi (Defense of faith)",
            "Avengers (Hulk vs. Loki - god is puny)"
          ]
        },
        "2013": {
          "salience_share": 4.8,
          "description": "Sam Harris debates Noam Chomsky (Email exchange) (-0.4%). It highlights the moral blindness of the 'Rationalist' worldview regarding US foreign policy. The movement is becoming insular. 'Rick and Morty' premieres, offering a new scripture for the nihilist tech-bro: 'Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV.'",
          "key_manifestations": [
            "Rick and Morty (TV Series Premiere)",
            "Man of Steel (Superman as Jesus allegory)",
            "This Is the End (Biblical apocalypse as comedy)",
            "Her (The singularity replaces god)"
          ]
        },
        "2014": {
          "salience_share": 5.5,
          "description": "Gamergate accelerates the shift (+0.7%). The 'Skeptic' community fully aligns with the 'Gamer' identity against 'Cultural Marxists.' The language of 'Logic and Reason' is used to justify harassment. Neil deGrasse Tyson's 'Cosmos' tries to bring back the wonder of science, but the culture war is too loud.",
          "key_manifestations": [
            "Gamergate (Intersection with Atheism)",
            "Cosmos: A Spacetime Odyssey (TV Series)",
            "True Detective (Rust Cohle's pessimist philosophy)",
            "Interstellar (Science as salvation)"
          ]
        },
        "2015": {
          "salience_share": 5.1,
          "description": "The 'Intellectual Dark Web' begins to coalesce (-0.4%). Jordan Peterson (rising soon) and Sam Harris begin to find common ground in opposing 'Woke' culture. The original 'New Atheism' is dead; it has mutated into a 'Free Speech' movement. 'Spotlight' wins Best Picture, a final victory lap for the 2002-era critique of the Church.",
          "key_manifestations": [
            "Spotlight (Film)",
            "Mad Max: Fury Road (Cults and Warlords)",
            "Ex Machina (AI as the new creator)",
            "The Big Short (Rationality vs. The Market)"
          ]
        },
        "2016": {
          "salience_share": 4.5,
          "description": "The Election splits the rationalists (-0.6%). Some go Alt-Right (viewing Trump as a chaos agent against PC culture), others are horrified by his anti-science stance. The 'Rationalist' hubris—that the internet would make everyone smarter—is disproven by the success of 'Fake News.' Reality is no longer a debate; it is a tribal war.",
          "key_manifestations": [
            "Jordan Peterson (C-16 Controversy begins)",
            "Westworld (The god complex)",
            "Arrival (Communication over conflict)",
            "Sausage Party (The death of gods)"
          ]
        }
      }
    },
    "19_maker_culture_and_artisanal_reaction": {
      "name": "Maker Culture and Artisanal Reaction",
      "description": "This cluster explores the materialist reaction to the digitalization of life. As existence became more screen-based (Cluster 1, Cluster 9), a counter-movement emerged that fetishized the physical, the handmade, and the 'authentic.' It encompasses the rise of Etsy, the Maker Movement (3D printing, Arduino), the explosion of craft beer, and the 'Lumbersexual' aesthetic. It is a nostalgic attempt to reclaim agency through production—baking bread, pickling vegetables, and printing circuit boards—in an economy that increasingly alienated the worker from the product.",
      "trajectory": {
        "1999": {
          "salience_share": 0.5,
          "description": "The cluster is barely visible. 'DIY' is associated with Punk or home repair (Bob Vila), not a lifestyle brand. 'Fight Club's' soap-making is a proto-example—a violent reclamation of production. The internet is for downloading code, not knitting patterns.",
          "key_manifestations": [
            "Fight Club (Soap making)",
            "Toy Story 2 (The repair scene - fetish of craft)",
            "The Sims (Building as play)",
            "American Beauty (The woodworking garage)"
          ]
        },
        "2000": {
          "salience_share": 0.7,
          "description": "Variance creeps up (+0.2%). The 'Slow Food' movement begins to gain traction in the US. 'Gilmore Girls' romanticizes the small-town, quirky local business aesthetic. The rejection of the 'Big Box' store begins to form a moral framework for the upper-middle class.",
          "key_manifestations": [
            "Slow Food USA (Growth)",
            "Gilmore Girls (Stars Hollow aesthetic)",
            "Chocolat (Film - Artisan food as magic)",
            "Best in Show (Niche obsession)"
          ]
        },
        "2001": {
          "salience_share": 0.9,
          "description": "The iPod launches (-0.2% trend, +0.4% counter-reaction). While the world goes digital, the 'Scrapbooking' industry explodes in the suburbs. It is the desire to preserve physical memory in the face of JPEG compression. 'Amélie' celebrates the small, tactile pleasures of life (dipping hand in grain sacks).",
          "key_manifestations": [
            "Amélie (Film)",
            "Scrapbooking Boom (Creative Memories)",
            "Lord of the Rings (The Shire as agrarian ideal)",
            "Ghost World (The fetish of the original 78 record)"
          ]
        },
        "2002": {
          "salience_share": 1.1,
          "description": "The 'Hipster' (Cluster 11) begins to adopt 'Blue Collar' signifiers (Trucker hats, PBR). It is ironic at first, but lays the groundwork for the 'Workwear' trend. 'MythBusters' begins production (pilots), preparing to make 'building things' cool for geeks. The 'Foodie' culture starts to move from 'Fine Dining' to 'Authentic/Hole in the Wall.'",
          "key_manifestations": [
            "MythBusters (Production)",
            "Anthony Bourdain's A Cook's Tour (TV)",
            "Adaptation (The orchid hunter)",
            "Gangs of New York (The visceral past)"
          ]
        },
        "2003": {
          "salience_share": 1.5,
          "description": "'MythBusters' premieres (+0.4%). It is a catalyst. It combines science with welding. It tells nerds: 'Get your hands dirty.' The 'Cupcake' trend begins (Magnolia Bakery via Sex and the City). It is the first wave of 'Infantilized Artisanal' food—small, cute, handmade.",
          "key_manifestations": [
            "MythBusters (TV Series Premiere)",
            "Magnolia Bakery (Trend)",
            "Lost in Translation (Knitting scene)",
            "Elf (The handmade toys)"
          ]
        },
        "2004": {
          "salience_share": 1.8,
          "description": "'Project Runway' premieres (+0.3%). It emphasizes the *process* of creation. Sewing is intense. 'Sideways' (Film) launches the Pinot Noir craze, making wine tasting a middle-class hobby. It intellectualizes consumption. The 'Craft Beer' scene is bubbling under the surface (Stone, Dogfish Head expanding).",
          "key_manifestations": [
            "Project Runway (TV Series Premiere)",
            "Sideways (Film)",
            "Napoleon Dynamite (Liger drawing - naive art)",
            "The Life Aquatic (The bespoke uniforms)"
          ]
        },
        "2005": {
          "salience_share": 2.5,
          "description": "Etsy launches (+0.7%). This is the singularity. The marketplace for 'Handmade' now has a global platform. 'Make: Magazine' launches, coining the term 'Maker.' The 'Arduino' board is released (Italy/Global). The bridge between 'Coding' and 'Soldering' is built. The 'DIY' ethic moves from punk squats to suburban craft rooms.",
          "key_manifestations": [
            "Etsy (Launch)",
            "Make: Magazine (Launch)",
            "Arduino (Hardware release)",
            "Batman Begins (Bruce Wayne forging his own gear)"
          ]
        },
        "2006": {
          "salience_share": 2.8,
          "description": "First 'Maker Faire' is held in San Mateo (+0.3%). It is a carnival of invention. Steampunk begins to emerge as an aesthetic—fetishizing brass and gears in a plastic age. 'Top Chef' premieres, treating cooking as high-stakes engineering. The 'Urban Farm' trend starts (rooftop bees).",
          "key_manifestations": [
            "Maker Faire (Inaugural Event)",
            "Top Chef (TV Series Premiere)",
            "The Prestige (The engineer as magician)",
            "Marie Antoinette (The fetish of the pastry)"
          ]
        },
        "2007": {
          "salience_share": 3.2,
          "description": "The 'Locavore' becomes the Oxford Word of the Year (+0.4%). Food must have a story. 'Ratatouille' argues that 'Anyone Can Cook'—democratizing the artisanal. The 'iPhone' is a sealed black box, which triggers a hacker reaction—'If you can't open it, you don't own it' (Maker's Bill of Rights).",
          "key_manifestations": [
            "Locavore (Word of the Year)",
            "Ratatouille (Film)",
            "Maker's Bill of Rights (Manifesto)",
            "Be Kind Rewind (Sweded films - low fi creation)"
          ]
        },
        "2008": {
          "salience_share": 4.5,
          "description": "The Recession drives the 'Homesteading' boom (+1.3%). Being 'thrifty' is now cool. Mason jars are everywhere. Canning, pickling, and knitting are survival skills repackaged as aesthetics. 'Wall-E' shows a world where no one makes anything, serving as a warning. The 'Fixed Gear Bike' trend peaks—mechanically simple, requiring user maintenance.",
          "key_manifestations": [
            "Mason Jar Trend (Peak)",
            "Wall-E (Anti-consumption)",
            "Iron Man (Building the suit in a cave)",
            "Synecdoche, New York (The constructed world)"
          ]
        },
        "2009": {
          "salience_share": 5.1,
          "description": "Minecraft (Alpha) releases (+0.6%). It is the digital equivalent of Legos. It trains a generation to view the world as raw material to be crafted. 'Julie & Julia' romanticizes the labor of cooking. The 'Etsy Economy' is seen as a viable alternative to the corporate ladder that just collapsed.",
          "key_manifestations": [
            "Minecraft (Alpha)",
            "Julie & Julia (Film)",
            "Kickstarter (Launch - funding the niche)",
            "Fantastic Mr. Fox (Stop motion tactile aesthetic)"
          ]
        },
        "2010": {
          "salience_share": 5.5,
          "description": "Instagram launches, and the 'Latte Art' photo becomes the standard unit of currency (+0.4%). The artisan must be documented. 'Portlandia' (filming) prepares to satirize the 'Put a Bird On It' culture, which is reaching saturation. 'Inception' features the 'Totem'—a small, physical object that anchors you to reality.",
          "key_manifestations": [
            "Instagram (The aestheticization of craft)",
            "Inception (The Totem)",
            "How to Train Your Dragon (Building the tail fin)",
            "The Social Network (Coding as craft)"
          ]
        },
        "2011": {
          "salience_share": 6.2,
          "description": "'Kinfolk' magazine launches (+0.7%). It codifies the 'miserablist chic' of the artisan—expensive toast, washed-out linen, communal tables. It is the bible of the cluster. 'Pinterest' takes off, allowing users to curate their 'dream DIY' life. 3D Printing hype begins to crest (MakerBot). We believe we will print our own shoes soon.",
          "key_manifestations": [
            "Kinfolk Magazine (Launch)",
            "Pinterest (Growth)",
            "MakerBot (Hype cycle)",
            "Hugo (The automaton and film mechanics)"
          ]
        },
        "2012": {
          "salience_share": 5.8,
          "description": "The 'Lumbersexual' trend appears (-0.4% trend, +0.6% aesthetic). Men with beards and axes who work in IT. It is 'masculinity drag.' 'Wreck-It Ralph' features a character who builds a kart, celebrating the 'glitch' and the custom build. The 'Craft Beer' bubble is inflating rapidly—every city has a microbrewery.",
          "key_manifestations": [
            "Lumbersexual (Trend)",
            "Moonrise Kingdom (The scout ethos)",
            "Indie Game: The Movie (Code as craft)",
            "Skyfall (The analog trap)"
          ]
        },
        "2013": {
          "salience_share": 5.4,
          "description": "Etsy changes its rules to allow 'manufacturing partners' (-0.4%). It is the betrayal of the handmade. The scale is too big. The 'Cronut' goes viral—the ultimate 'Hype Food.' It is less about the craft and more about the line. 'Her' features a protagonist who writes 'handwritten' letters for a living using a computer—the total commodification of the personal touch.",
          "key_manifestations": [
            "The Cronut (Viral Food)",
            "Her (Handwritten Letters Service)",
            "Pacific Rim (Analog robots vs digital monsters)",
            "Fixer Upper (TV Series Premiere - The Shiplap era)"
          ]
        },
        "2014": {
          "salience_share": 4.9,
          "description": "The 'Maker Movement' is absorbed by corporate America (-0.5%). McDonald's launches 'Artisan Chicken.' The word loses all meaning. 'The Lego Movie' is a meta-commentary on 'The Kragle' (stasis) vs. 'The Master Builder' (creativity). It argues for the chaotic, mix-and-match ethos of the Maker against the instructions.",
          "key_manifestations": [
            "The Lego Movie (Master Builders)",
            "McDonald's Artisan Chicken",
            "Chef (Film - The food truck as freedom)",
            "Silicon Valley (The compression algorithm as holy grail)"
          ]
        },
        "2015": {
          "salience_share": 4.5,
          "description": "The 'Adult Coloring Book' craze hits (+0.4% short term). It is 'regressive craft'—creativity with training wheels for stressed adults. 'The Martian' celebrates 'science the shit out of this'—MacGyverism in space. It is the competent engineer porn that the Maker movement aspired to. 3D Printing hype crashes (consumer market fails).",
          "key_manifestations": [
            "Adult Coloring Books (Trend)",
            "The Martian (Film)",
            "Joy (Film - The Miracle Mop)",
            "The Revenant (Extreme physical survival)"
          ]
        },
        "2016": {
          "salience_share": 4.1,
          "description": "The cluster fades into background noise (-0.4%). 'Farmhouse Modern' is the default interior design. The 'Maker' is now just a 'Content Creator' on YouTube. 'Westworld' shows the 3D printing of human bodies—the ultimate, horrifying end of the 'Maker' dream. We have made ourselves, and we are unhappy.",
          "key_manifestations": [
            "Westworld (Host manufacturing)",
            "Pokemon Go (The digital overlay wins)",
            "Terraria/Stardew Valley (Digital homesteading)",
            "Atlanta (The hustle is not artisanal)"
          ]
        }
      }
    },
    "20_young_adult_dystopianism": {
      "name": "Young Adult Dystopianism",
      "description": "This cluster maps the explosion of the 'Teen vs. Totalitarian State' narrative. It reflects the generational anxiety of Millennials and Gen Z facing a world of economic inequality, surveillance, and climate collapse. It moves from the magical escapism of 'Harry Potter' (The Chosen One) to the grim political allegories of 'The Hunger Games' (The Survivor). It is a literature of 'preparation'—teaching the youth that the adults have failed, the system is rigged, and the only solution is revolution.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "Harry Potter (Book 3) is the dominant force (+0.3%). It is 'Fantasy,' not Dystopia. The threat is a dark wizard, not the government. 'The Giver' exists as a school staple, but the genre is quiet. 'Election' (Film) satirizes high school politics, but as a petty fiefdom, not a life-or-death struggle.",
          "key_manifestations": [
            "Harry Potter and the Prisoner of Azkaban (Book)",
            "Election (Film)",
            "The Matrix (The red pill appeal to youth)",
            "Animorphs (The secret war)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "*Battle Royale* (Film) releases in Japan (+0.3% global influence later). It provides the blueprint: teens killing teens for the entertainment of adults. It is too violent for the US mainstream yet, but the meme spreads. 'X-Men' frames the school as a refuge from a hostile government.",
          "key_manifestations": [
            "Battle Royale (Film)",
            "X-Men (Film)",
            "Harry Potter and the Goblet of Fire (Book - Death enters the series)",
            "Final Destination (Death as a system)"
          ]
        },
        "2001": {
          "salience_share": 2.1,
          "description": "9/11 darkens the cultural mood. 'Donnie Darko' captures the suburban teen angst and apocalyptic dread, though it's psychological, not political. 'Spy Kids' empowers children, but within a fun, colorful world. The idea of the 'Child Soldier' is not yet romanticized.",
          "key_manifestations": [
            "Donnie Darko (Film)",
            "Spy Kids (Film)",
            "Harry Potter and the Sorcerer's Stone (Film)",
            "Smallville (TV Series Premiere)"
          ]
        },
        "2002": {
          "salience_share": 2.4,
          "description": "Variance creeps up (+0.3%). 'City of God' depicts children with guns in the favelas—real world dystopia. 'Minority Report' shows the 'Precogs' (youth) exploited by the state. The ground is being prepared for narratives about the exploitation of the young by the old.",
          "key_manifestations": [
            "City of God (Film)",
            "Minority Report (Film)",
            "Spirited Away (Child labor in the bathhouse)",
            "Star Wars: Attack of the Clones (The Younglings)"
          ]
        },
        "2003": {
          "salience_share": 2.7,
          "description": "Harry Potter (Order of the Phoenix) takes a dystopian turn (+0.3%). The Ministry of Magic becomes the enemy. Umbridge is the bureaucratic villain. It teaches kids: 'The Government and the Media lie.' 'Teen Titans' premieres, showing kids fighting villains without adult supervision.",
          "key_manifestations": [
            "Harry Potter and the Order of the Phoenix (Book)",
            "Teen Titans (TV Series Premiere)",
            "Holes (Film - The prison camp)",
            "Fullmetal Alchemist (Child soldiers of the state)"
          ]
        },
        "2004": {
          "salience_share": 3.1,
          "description": "'Mean Girls' describes high school as a savage tribal hierarchy (+0.4%). It's a social dystopia. 'A Series of Unfortunate Events' (Film) depicts a world where adults are useless or predatory. The trust in authority figures is eroding in the YA space.",
          "key_manifestations": [
            "Mean Girls (Film)",
            "Lemony Snicket's A Series of Unfortunate Events (Film)",
            "The Incredibles (The government bans heroes)",
            "Saved! (Religious hypocrisy)"
          ]
        },
        "2005": {
          "salience_share": 3.8,
          "description": "Scott Westerfeld's 'Uglies' is published (+0.7%). This is a key proto-text. It combines the 'Makeover' reality TV culture with a totalitarian state. It speaks to the anxiety of appearance. 'Harry Potter and the Half-Blood Prince' darkens further. The 'Emo' movement (Cluster 2) provides the emotional soundtrack for this rising angst.",
          "key_manifestations": [
            "Uglies by Scott Westerfeld (Book)",
            "Harry Potter and the Half-Blood Prince (Book)",
            "Avatar: The Last Airbender (TV Series - Kids stopping a genocide)",
            "Sky High (Eugenics in high school)"
          ]
        },
        "2006": {
          "salience_share": 4.2,
          "description": "'V for Vendetta' (Film) provides the revolutionary iconography (+0.4%). While rated R, it appeals deeply to the teen anti-authoritarian instinct. 'Pan's Labyrinth' shows the child retreating into fantasy to escape fascism, but the fantasy is gruesome. The safety of the 'Magic School Bus' era is gone.",
          "key_manifestations": [
            "V for Vendetta (Film)",
            "Pan's Labyrinth (Film)",
            "Code Geass (Anime - Teen overthrowing the empire)",
            "High School Musical (The utopia before the fall)"
          ]
        },
        "2007": {
          "salience_share": 4.5,
          "description": "Harry Potter ends (Book 7) (+0.3%). The generation is released into the wild, hungry for the next cause. 'His Dark Materials' (Golden Compass film) attempts to capture the anti-authority market but fails. The market is primed for something grittier, less magical, and more political.",
          "key_manifestations": [
            "Harry Potter and the Deathly Hallows (Book)",
            "The Golden Compass (Film)",
            "Superbad (The last gasp of carefree teen comedy)",
            "Juno (Teen reality)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "Suzanne Collins publishes 'The Hunger Games' (+2.0%). The Catalyst. It hits the exact moment of the Financial Crisis. Katniss Everdeen is the hero of the Recession—she hunts to eat. The Capitol is the 1%. It is not fantasy; it is extrapolated reality. It resonates perfectly with a generation watching their parents lose their homes.",
          "key_manifestations": [
            "The Hunger Games (Book)",
            "Twilight (Book/Film - The romantic distraction)",
            "Wall-E (The dystopian future)",
            "Breaking Dawn (Book)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "'Catching Fire' (Book) expands the lore (+0.3%). 'The Maze Runner' (Book) is published, solidifying the 'Teens in a lethal experiment' sub-genre. 'Glee' covers the social dystopia of high school with a veneer of pop optimism, but the underlying bullying is brutal.",
          "key_manifestations": [
            "The Hunger Games: Catching Fire (Book)",
            "The Maze Runner (Book)",
            "Coraline (Film - The false mother)",
            "District 9 (The segregation allegory)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "'Mockingjay' (Book) concludes the trilogy with a bleak, ambiguous ending (+0.4%). It refuses the 'Happy Ever After.' War destroys everyone. 'Kick-Ass' features Hit-Girl, a pre-teen killing machine, further normalizing youth violence. The 'Dystopian Section' in bookstores begins to eat the 'Fantasy Section.'",
          "key_manifestations": [
            "The Hunger Games: Mockingjay (Book)",
            "Kick-Ass (Film)",
            "Scott Pilgrim vs. the World (Fighting for the right to exist)",
            "Never Let Me Go (Film - Youth as organ farms)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "'Divergent' (Book) is published (+0.6%). It introduces the 'Sorting Hat' as a caste system. You are defined by your trait. It appeals to the identity-seeking teen brain. 'Black Mirror' (15 Million Merits) visualizes the YA dystopia for adults—gamified slavery. The 'Occupy Wall Street' movement gives real-world context to the 'Down with the Capitol' sentiment.",
          "key_manifestations": [
            "Divergent (Book)",
            "Miss Peregrine's Home for Peculiar Children (Book)",
            "Ready Player One (Book - The dystopia is the real world)",
            "Hanna (Film - Teen assassin)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "'The Hunger Games' movie releases (+0.7%). It is a massive blockbuster. Jennifer Lawrence becomes the face of the generation. The 'Three Finger Salute' becomes a real-world protest symbol in Thailand and elsewhere. The fiction is bleeding into reality. The genre is now the dominant form of youth culture.",
          "key_manifestations": [
            "The Hunger Games (Film)",
            "The Fault in Our Stars (Book - The dystopia of cancer)",
            "Chronicle (Film - Superpowers as trauma)",
            "Looper (The future is broken)"
          ]
        },
        "2013": {
          "salience_share": 8.2,
          "description": "'Catching Fire' (Film) releases (+0.3% internal, -0.3% trend). The market is saturating. 'The Purge' releases, applying the logic to horror. 'Elysium' makes the class warfare explicit. Lorde's 'Royals' (Cluster 11/16) provides the soundtrack: 'We'll never be royals.' It is the anthem of the District 12 kids.",
          "key_manifestations": [
            "The Hunger Games: Catching Fire (Film)",
            "The Purge (Film)",
            "Elysium (Film)",
            "Snowpiercer (The train as class system)"
          ]
        },
        "2014": {
          "salience_share": 7.5,
          "description": "'Divergent' and 'The Maze Runner' movies release (-0.7%). The formula is visible. The 'Chosen One' narrative is feeling tired. 'The Giver' movie flops. However, the 'Ferguson' protests (Cluster 12) make the militarized police of the films look like documentaries. The fantasy is becoming too real to be escapist.",
          "key_manifestations": [
            "Divergent (Film)",
            "The Maze Runner (Film)",
            "The Giver (Film)",
            "The 100 (TV Series Premiere)"
          ]
        },
        "2015": {
          "salience_share": 6.8,
          "description": "'Mockingjay Part 2' releases (-0.7%). The box office is lower than expected. The energy is shifting to 'Superheroes' (MCU) which offer a cleaner, more authoritarian fantasy of protection (Cluster 7). 'Mad Max: Fury Road' does dystopia better for adults. The YA trend begins to collapse under its own weight.",
          "key_manifestations": [
            "The Hunger Games: Mockingjay Part 2 (Film)",
            "Mad Max: Fury Road (Film)",
            "The Scorch Trials (Film)",
            "Mr. Robot (The hacker dystopia)"
          ]
        },
        "2016": {
          "salience_share": 6.1,
          "description": "The cluster ends with the election (+0.4% internal shift to reality). Teens feel they are living in the prequel to the Hunger Games. 'Allegiant' (Divergent 3) flops hard. The genre dies in cinemas because reality has superseded it. The anxiety that fueled the cluster is now fully expressed in political activism (March for Our Lives, soon to come) rather than fiction consumption.",
          "key_manifestations": [
            "The 5th Wave (Film - Genre death knell)",
            "Allegiant (Film)",
            "Stranger Things (The retreat to 80s nostalgia)",
            "3% (TV Series - The meritocratic dystopia)"
          ]
        }
      }
    },
    "21_complex_seriality_and_the_moral_anti_hero": {
      "name": "Complex Seriality and the Moral Anti-Hero",
      "description": "This cluster tracks the migration of 'High Art' from cinema to television, driven by the rise of the 'Difficult Man' protagonist. It begins with the collapse of the moral binary in the late 90s (*The Sopranos*), where audiences were asked to root for sociopaths. It traces the structural shift from 'episodic' storytelling (resets every week) to 'serialized' novelistic arcs (binge-watching). The trajectory explores how the medium became a vehicle for exploring American decline, institutional corruption, and the darker shades of masculinity, eventually culminating in the 'Peak TV' saturation where the Anti-Hero became a cliché.",
      "trajectory": {
        "1999": {
          "salience_share": 3.5,
          "description": "*The Sopranos* premieres (+1.2%). It is the Big Bang of the cluster. Tony Soprano kills a man while touring colleges with his daughter. It destroys the 'TV Code' that protagonists must be likable. *The West Wing* offers the counter-point: hyper-competent, moral authority. The tension between 'Cynical Realism' (HBO) and 'Liberal Idealism' (NBC) defines the era.",
          "key_manifestations": [
            "The Sopranos (TV Series Premiere)",
            "The West Wing (TV Series Premiere)",
            "Freaks and Geeks (The cinematic teen drama)",
            "Magnolia (Cinematic ensemble storytelling)"
          ]
        },
        "2000": {
          "salience_share": 3.8,
          "description": "Variance rises (+0.3%) as the 'Premium Cable' model proves viable. *Curb Your Enthusiasm* premieres, introducing the 'Social Anti-Hero'—Larry David is not a criminal, but he violates every social contract. It deconstructs the sitcom format, replacing jokes with awkward, improvised misery. Reality TV (Cluster 5) is rising, forcing scripted drama to become darker and more complex to compete.",
          "key_manifestations": [
            "Curb Your Enthusiasm (TV Series Premiere)",
            "Malcolm in the Middle (The single-camera revolution)",
            "Gilmore Girls (Speed of dialogue as complexity)",
            "Traffic (Film - The multi-strand narrative style)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "*Six Feet Under* premieres (+0.7%). It brings 'literary death' to TV. It is dense, symbolic, and deeply internal. *24* introduces 'hyper-serialization'—every episode is a cliffhanger. It changes the way audiences watch; you cannot miss a week. The protagonist, Jack Bauer, is an Anti-Hero justified by the War on Terror (Cluster 4).",
          "key_manifestations": [
            "Six Feet Under (TV Series Premiere)",
            "24 (TV Series Premiere)",
            "The Shield (The corrupt cop as protagonist)",
            "Donnie Darko (Complexity in narrative structure)"
          ]
        },
        "2002": {
          "salience_share": 5.2,
          "description": "*The Wire* premieres (+0.7%). It is the high-water mark of the cluster. It ignores the viewer's need for resolution. It is a sociological treatise on the failure of institutions. It sells poorly at first, but establishes the 'Prestige' credential. *The Shield* pushes the Anti-Hero further—Vic Mackey shoots a fellow cop in the pilot.",
          "key_manifestations": [
            "The Wire (TV Series Premiere)",
            "The Shield (TV Series Premiere)",
            "City of God (Systemic crime narrative)",
            "Adaptation (Meta-commentary on screenwriting)"
          ]
        },
        "2003": {
          "salience_share": 5.5,
          "description": "*Arrested Development* brings complexity to comedy (+0.3%). It rewards obsessive viewing with call-backs and meta-jokes. It fails on broadcast TV because it requires the 'binge' model before the tech exists. *Angels in America* (HBO) brings Broadway prestige and gay politics to the small screen, proving TV can handle 'Epic' themes.",
          "key_manifestations": [
            "Arrested Development (TV Series Premiere)",
            "Angels in America (Miniseries)",
            "Oldboy (Korean complexity breaking through)",
            "Kill Bill Vol. 1 (Genre deconstruction)"
          ]
        },
        "2004": {
          "salience_share": 6.8,
          "description": "*Lost* premieres (+1.3%). It mainstream the 'Mystery Box.' It captures the watercooler globally. It proves that a network show can be confusing, mythological, and non-linear. *Deadwood* brings Shakespearean dialogue to the Western. *Battlestar Galactica* reboots sci-fi as a serious political drama about occupation and insurgency.",
          "key_manifestations": [
            "Lost (TV Series Premiere)",
            "Deadwood (TV Series Premiere)",
            "Battlestar Galactica (Series Premiere)",
            "Eternal Sunshine (Narrative complexity)"
          ]
        },
        "2005": {
          "salience_share": 6.5,
          "description": "*The Office* (US) and *It's Always Sunny in Philadelphia* premiere (-0.3%). They bring the 'Cringe' and 'Sociopath' energy to the sitcom. The 'Gang' in Philadelphia are Anti-Heroes who never learn or grow, rejecting the 'Hug' moment of 90s sitcoms. The serial drama takes a breather as reality TV dominates.",
          "key_manifestations": [
            "It's Always Sunny in Philadelphia (Premiere)",
            "The Office US (Premiere)",
            "Rome (HBO - Precursor to GoT scale)",
            "Prison Break (Hyper-serialized plot)"
          ]
        },
        "2006": {
          "salience_share": 6.9,
          "description": "*Dexter* premieres (+0.4%). The Anti-Hero is now a literal serial killer. The audience is conditioned to root for the murder of 'bad guys.' *Friday Night Lights* uses the documentary style to explore small-town American decay, elevating the 'Teen Drama' to high art. The line between 'Movie Star' and 'TV Actor' begins to blur.",
          "key_manifestations": [
            "Dexter (TV Series Premiere)",
            "Friday Night Lights (TV Series Premiere)",
            "30 Rock (Meta-commentary on TV production)",
            "The Departed (Moral ambiguity)"
          ]
        },
        "2007": {
          "salience_share": 7.5,
          "description": "*Mad Men* premieres (+0.6%). It is the aesthetic peak. It has no guns, no dragons, just existential dread in a suit. It validates the 'Slow Burn.' Don Draper is the ultimate Anti-Hero: beautiful, successful, and completely hollow. *Damages* plays with non-linear timelines. The writers' strike highlights the value of the 'Showrunner' as the new auteur.",
          "key_manifestations": [
            "Mad Men (TV Series Premiere)",
            "Damages (TV Series Premiere)",
            "No Country for Old Men (The villain as protagonist)",
            "There Will Be Blood (The capitalist as monster)"
          ]
        },
        "2008": {
          "salience_share": 8.2,
          "description": "*Breaking Bad* premieres (+0.7%). Walter White begins his descent. It is the definitive text of the Recession era (Cluster 14). It promises 'Change'—Mr. Chips becomes Scarface. It perfects the 'Scientific' plot—actions have chemical consequences. *Sons of Anarchy* brings *Hamlet* to biker culture.",
          "key_manifestations": [
            "Breaking Bad (TV Series Premiere)",
            "Sons of Anarchy (TV Series Premiere)",
            "The Dark Knight (Complex morality in blockbusters)",
            "In Treatment (TV as therapy)"
          ]
        },
        "2009": {
          "salience_share": 7.8,
          "description": "Network TV attempts to catch up (-0.4%). *Modern Family* and *Glee* are hits, but they are throwbacks. The energy is entirely on cable. *Parks and Recreation* pivots from cynicism to optimism, creating the 'Competence Porn' genre (Leslie Knope) as a counter-weight to the Anti-Hero.",
          "key_manifestations": [
            "Parks and Recreation (Season 2 pivot)",
            "Community (Meta-narrative explosion)",
            "Inglourious Basterds (Rewriting history)",
            "Watchmen (Deconstructing the hero)"
          ]
        },
        "2010": {
          "salience_share": 8.5,
          "description": "*The Walking Dead* premieres (+0.7%). It brings 'Genre' (Horror) to the Prestige table. It is bleak, nihilistic, and massive. *Boardwalk Empire* gives Martin Scorsese a TV show. *Sherlock* modernizes the procedural with high-speed visual storytelling. The cinematic experience has fully migrated to the living room.",
          "key_manifestations": [
            "The Walking Dead (TV Series Premiere)",
            "Boardwalk Empire (Premiere)",
            "Sherlock (Premiere)",
            "Louie (The auteur comedy)"
          ]
        },
        "2011": {
          "salience_share": 9.2,
          "description": "*Game of Thrones* premieres (+0.7%). It breaks the 'Fantasy Ghetto.' It applies the *Sopranos* logic (anyone can die, power is ugly) to *Lord of the Rings*. It becomes the last piece of the 'Monoculture'—the show everyone watches. *Black Mirror* debuts, turning the anthology format into high-concept horror.",
          "key_manifestations": [
            "Game of Thrones (TV Series Premiere)",
            "Black Mirror (Premiere)",
            "Homeland (The anti-heroine)",
            "Drive (The silent anti-hero)"
          ]
        },
        "2012": {
          "salience_share": 9.5,
          "description": "*Girls* premieres (+0.3%). It introduces the 'Unlikable Female Protagonist.' Hannah Horvath is not a criminal, but she is narcissistic and difficult. It challenges the gendered nature of the Anti-Hero trope. *The Avengers* brings the serialized model to film, creating the 'Cinematic Universe' which is essentially a TV show with a $200M budget.",
          "key_manifestations": [
            "Girls (TV Series Premiere)",
            "The Avengers (Serialized Film)",
            "Veep (The incompetence of power)",
            "Skyfall (Bond as broken veteran)"
          ]
        },
        "2013": {
          "salience_share": 10.1,
          "description": "*House of Cards* launches on Netflix (+0.6%). The 'Binge' is born. The full season drops at once. Spacey's Frank Underwood is a Shakespearean villain speaking directly to the camera. *Breaking Bad* ends (Ozymandias), marking the cultural peak of the Anti-Hero era. The 'Golden Age' is acknowledged as the status quo.",
          "key_manifestations": [
            "House of Cards (Netflix Launch)",
            "Breaking Bad (Finale)",
            "Orange Is the New Black (Ensemble complexity)",
            "Rick and Morty (Sci-fi nihilism)"
          ]
        },
        "2014": {
          "salience_share": 10.5,
          "description": "*True Detective* Season 1 (+0.4%). It is 'Auteur TV'—one writer, one director. McConaughey brings A-list movie star power to a TV role in his prime (The McConaissance). The philosophy is pessimistic anti-natalism. *Fargo* proves you can adapt a classic film into a show and make it great.",
          "key_manifestations": [
            "True Detective Season 1",
            "Fargo (TV Series Premiere)",
            "Transparent (Streaming prestige)",
            "BoJack Horseman (The cartoon anti-hero)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "Peak TV Saturation (-0.3%). There are too many shows (400+ scripted series). *Mr. Robot* captures the paranoid zeitgeist. *Better Call Saul* deconstructs the prequel, creating a tragedy about a good man becoming a sleazy lawyer. The Anti-Hero is becoming tragic rather than triumphant.",
          "key_manifestations": [
            "Mr. Robot (Premiere)",
            "Better Call Saul (Premiere)",
            "Narcos (Global serialization)",
            "Jessica Jones (The trauma survivor hero)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "*Stranger Things* and *Westworld* (+0.4% internal shift). The focus shifts from 'Moral Complexity' to 'Puzzle Box' and 'Nostalgia.' The Anti-Hero is replaced by the 'Ensemble.' *Fleabag* premieres, introducing the 'Dissociative Feminist Anti-Hero' who breaks the fourth wall to confess her sins. The era of the 'Difficult Man' is ending; the era of the 'Traumatized Woman' begins.",
          "key_manifestations": [
            "Stranger Things (Premiere)",
            "Westworld (Premiere)",
            "Fleabag (Premiere)",
            "The Crown (Historical prestige)"
          ]
        }
      }
    },
    "22_ironic_masculinity_and_the_frat_pack_era": {
      "name": "Ironic Masculinity and the Frat Pack Era",
      "description": "This cluster maps the dominant mode of male comedy from the late 90s to the mid-2010s. It moves from the 'Gross-out' teen comedy (*American Pie*) to the 'Man-Child' introspection of the Apatow era (*Knocked Up*). It is characterized by the 'Bromance'—where male intimacy is explored but buffered by intense homophobia and irony. The archetype shifts from the 80s 'Winner' to the lovable 'Slacker/Loser' who refuses to grow up. It explores the crisis of traditional masculinity in a changing economy, resolved through weed, video games, and eventually, grudging fatherhood.",
      "trajectory": {
        "1999": {
          "salience_share": 4.5,
          "description": "*American Pie* creates the template (+1.2%). It is raunchy, humiliating, but fundamentally sweet. It creates the 'Pact' narrative. *Fight Club* offers the dark shadow—men reclaiming masculinity through violence. *Big Daddy* (Adam Sandler) introduces the 'Slacker with a Heart of Gold' trope that will dominate the next decade.",
          "key_manifestations": [
            "American Pie (Film)",
            "Big Daddy (Film)",
            "Fight Club (The dark side of the coin)",
            "Office Space (Rejection of corporate manhood)"
          ]
        },
        "2000": {
          "salience_share": 4.8,
          "description": "*Jackass* premieres on MTV (+0.3%). It is 'performative masculinity' as self-harm. It is a rebellion against safety culture. *Meet the Parents* establishes Ben Stiller as the 'Anxious Male'—constantly humiliated by the Boomer patriarch (De Niro). The beta male is the protagonist.",
          "key_manifestations": [
            "Jackass (TV Series)",
            "Meet the Parents (Film)",
            "Dude, Where's My Car? (Stoner comedy)",
            "High Fidelity (The obsessive man-child)"
          ]
        },
        "2001": {
          "salience_share": 5.2,
          "description": "*Zoolander* and *Wet Hot American Summer* (+0.4%). The comedy becomes absurd and meta. *Zoolander* mocks the male model, deconstructing the importance of male beauty. *Wet Hot* deconstructs the camp movie. The 'Frat Pack' (Stiller, Wilson, Ferrell) begins to solidify as a troupe.",
          "key_manifestations": [
            "Zoolander (Film)",
            "Wet Hot American Summer (Film)",
            "Royal Tenenbaums (The failed genius son)",
            "Shrek (The ogre as hero)"
          ]
        },
        "2002": {
          "salience_share": 4.9,
          "description": "Variance holds (-0.3%). *Jackass: The Movie* brings the stunts to the big screen. *Van Wilder* introduces Ryan Reynolds as the perpetual college student—the fear of graduation/adulthood is the central conflict. It celebrates the 'Super Senior.'",
          "key_manifestations": [
            "Jackass: The Movie",
            "Van Wilder (Film)",
            "Barbershop (Community masculinity)",
            "About a Boy (The isolated man-child)"
          ]
        },
        "2003": {
          "salience_share": 5.5,
          "description": "*Old School* is the manifesto (+0.6%). Three adult men try to start a fraternity to recapture their youth. It explicitly frames marriage and jobs as a prison. Will Ferrell's 'Frank the Tank' is the id unleashed. *School of Rock* presents the failed rocker teaching kids to rebel—the slacker as guru.",
          "key_manifestations": [
            "Old School (Film)",
            "School of Rock (Film)",
            "Elf (The literal man-child)",
            "Bad Santa (The anti-role model)"
          ]
        },
        "2004": {
          "salience_share": 6.1,
          "description": "*Anchorman* releases (+0.6%). It satirizes the 70s patriarchy but also celebrates it. It creates a language of absurdist non-sequiturs ('I love lamp'). *Dodgeball* mocks the 'Gym Culture.' *Harold & Kumar* subverts the white stoner trope with Asian-American protagonists, but keeps the gross-out logic.",
          "key_manifestations": [
            "Anchorman: The Legend of Ron Burgundy (Film)",
            "Dodgeball (Film)",
            "Harold & Kumar Go to White Castle (Film)",
            "Napoleon Dynamite (The nerd masculinity)"
          ]
        },
        "2005": {
          "salience_share": 6.8,
          "description": "*The 40-Year-Old Virgin* premieres (+0.7%). Judd Apatow takes over. It pivots the genre from 'Pure Raunch' to 'Raunch with Heart.' It treats male virginity not just as a joke, but as a crisis of intimacy. The 'improvised banter' style becomes the standard. *Wedding Crashers* celebrates the 'Bro' as a predator who learns to love.",
          "key_manifestations": [
            "The 40-Year-Old Virgin (Film)",
            "Wedding Crashers (Film)",
            "How I Met Your Mother (TV Series Premiere - The Bro Code)",
            "The Office US (Michael Scott as the desperate beta)"
          ]
        },
        "2006": {
          "salience_share": 7.2,
          "description": "*Borat* releases (+0.4%). It exposes the dark underbelly of American masculinity (frat boys in the RV). *Talladega Nights* mocks the 'Winner' mentality of the Bush era. *Jackass Number Two* is the peak of the franchise—masochism as male bonding.",
          "key_manifestations": [
            "Borat (Film)",
            "Talladega Nights (Film)",
            "Clerks II (Gen X aging poorly)",
            "Beerfest (The drinking competition)"
          ]
        },
        "2007": {
          "salience_share": 7.8,
          "description": "*Superbad* and *Knocked Up* release (+0.6%). The 'Apatow Summer.' *Knocked Up* asks: Can the stoner slacker become a father? (Answer: Yes, but reluctantly). *Superbad* is the definitive high school movie of the era—it is entirely about the terrifying love between two male friends (Seth and Evan) facing separation.",
          "key_manifestations": [
            "Superbad (Film)",
            "Knocked Up (Film)",
            "Hot Fuzz (The action movie deconstruction)",
            "Walk Hard (The biopic deconstruction)"
          ]
        },
        "2008": {
          "salience_share": 8.1,
          "description": "*Step Brothers* releases (+0.3%). It is the surreal endpoint of the 'Man-Child' trope. 40-year-old men living at home. It captures the Recession-era reality of 'Failure to Launch.' *Tropic Thunder* mocks the Hollywood machismo. *Pineapple Express* mixes the stoner comedy with the 80s action movie.",
          "key_manifestations": [
            "Step Brothers (Film)",
            "Tropic Thunder (Film)",
            "Pineapple Express (Film)",
            "Forgetting Sarah Marshall (Male vulnerability/nudity)"
          ]
        },
        "2009": {
          "salience_share": 8.5,
          "description": "*The Hangover* releases (+0.4%). It is the highest-grossing R-rated comedy. It is a 'Mystery' plot fueled by a blackout. It celebrates the 'Lost Weekend.' It marks the peak of the 'Bro' era. *I Love You, Man* explicitly makes the plot about a man trying to find a male friend, codifying the 'Bromance' as a genre.",
          "key_manifestations": [
            "The Hangover (Film)",
            "I Love You, Man (Film)",
            "Parks and Rec (Ron Swanson as the new masculine ideal)",
            "Eastbound & Down (The toxic male ego)"
          ]
        },
        "2010": {
          "salience_share": 7.8,
          "description": "Variance begins to dip (-0.7%). The formula is getting stale. *Get Him to the Greek* and *Due Date* feel repetitive. *Scott Pilgrim* offers a different, 'Beta-Nerd' masculinity (Cluster 7) that appeals more to the rising Millennial cohort than the Gen X slacker vibe.",
          "key_manifestations": [
            "The Other Guys (Mocking the action hero)",
            "Scott Pilgrim vs. the World (The nerd hero)",
            "Jackass 3D (The farewell tour)",
            "Hot Tub Time Machine (Nostalgia for the 80s)"
          ]
        },
        "2011": {
          "salience_share": 7.2,
          "description": "*Bridesmaids* releases (-0.6% internal, +0.6% female shift). It proves women can do the Apatow/Gross-out style better than the men. It displaces the 'Frat Pack.' *The Hangover Part II* is dark and mean-spirited, showing the exhaustion of the franchise. The 'Bro' is becoming the villain.",
          "key_manifestations": [
            "Bridesmaids (Film)",
            "The Hangover Part II (Film)",
            "Horrible Bosses (Economic revenge)",
            "Workaholics (TV Series - The next generation of slacker)"
          ]
        },
        "2012": {
          "salience_share": 6.5,
          "description": "*21 Jump Street* reboots the buddy cop genre with meta-irony (-0.7%). It acknowledges that the 'cool' values have changed—being eco-friendly and tolerant is now cool in high school, confusing the older protagonists. It marks the generational shift from 'Frat' to 'Woke' (early stages).",
          "key_manifestations": [
            "21 Jump Street (Film)",
            "Ted (The man-child with a teddy bear)",
            "Magic Mike (Objectification of men)",
            "Silver Linings Playbook (Mental health rom-com)"
          ]
        },
        "2013": {
          "salience_share": 5.8,
          "description": "*This Is the End* features the Frat Pack playing themselves during the apocalypse (-0.7%). It is a meta-commentary on their own irrelevance. They are trapped in a house, scared and selfish. It feels like a funeral for the genre. *The Wolf of Wall Street* (Cluster 14) shows the 'Bro' energy weaponized into financial crime.",
          "key_manifestations": [
            "This Is the End (Film)",
            "The Wolf of Wall Street (Toxic masculinity)",
            "Anchorman 2 (The sequel no one needed)",
            "Pain & Gain (The dumb jock tragedy)"
          ]
        },
        "2014": {
          "salience_share": 5.2,
          "description": "*Neighbors* pits the aging Gen X couple (Rogen) against the new Gen Z frat (Efron) (-0.6%). The audience sides with the parents. The Frat is now the enemy/annoyance, not the hero. *Guardians of the Galaxy* transfers the 'lovable rogue' energy to the superhero genre (Star-Lord), leaving the pure comedy genre to die.",
          "key_manifestations": [
            "Neighbors (Film)",
            "Guardians of the Galaxy (The sci-fi bro)",
            "The Interview (The international incident)",
            "Silicon Valley (The nerd bro)"
          ]
        },
        "2015": {
          "salience_share": 4.5,
          "description": "*Trainwreck* (Amy Schumer) flips the gender roles (+0.3% female lead). The male lead (Bill Hader) is the responsible sports doctor; the female is the slacker/player. The 'Apatow' formula survives only by inverting the gender dynamic. The traditional 'Bro Comedy' is effectively dead.",
          "key_manifestations": [
            "Trainwreck (Film)",
            "Daddy's Home (The beta dad vs alpha dad)",
            "Entourage (The Movie - The tombstone of the era)",
            "The Big Short (The bro in finance)"
          ]
        },
        "2016": {
          "salience_share": 4.1,
          "description": "The 'Ghostbusters' reboot controversy (-0.4%). The 'Bro' audience radicalizes against the female reboot. It stops being about comedy and becomes a culture war (Cluster 7). *Sausage Party* attempts to push the gross-out to the limit (R-rated animation), but it feels like a relic. The culture has moved to 'Sadcoms' (BoJack) and 'Political Satire.'",
          "key_manifestations": [
            "Ghostbusters (Reboot Controversy)",
            "Sausage Party (Film)",
            "Deadpool (The superhero takes the comedy lane)",
            "Popstar: Never Stop Never Stopping (The mockumentary)"
          ]
        }
      }
    },
    "23_the_evolution_of_meme_semiotics_and_internet_vernacular": {
      "name": "The Evolution of Meme Semiotics and Internet Vernacular",
      "description": "This cluster traces the transformation of the 'Meme' from a niche Richard Dawkins concept into the primary unit of cultural transmission. It maps the linguistic drift of the internet: from the primitive, absurd loops of Web 1.0 (Dancing Baby, Hampster Dance), through the codified grammar of Web 2.0 (LOLcats, Impact Font, Advice Animals), to the surreal, Dadaist, and weaponized post-irony of the mid-2010s (Dat Boi, Harambe). It analyzes how internet humor evolved from 'shared inside jokes' to a distinct, high-speed dialect that reshaped political discourse and generational identity.",
      "trajectory": {
        "1999": {
          "salience_share": 1.1,
          "description": "The cluster exists in the 'Pre-Viral' stage. Content spreads via email chains and Usenet. The humor is absurd and repetitive, driven by the novelty of multimedia itself. 'The Dancing Baby' (Oogachaka) is the proto-meme—a 3D render that is funny simply because it moves. 'All Your Base Are Belong To Us' (late '99/early '00) marks the transition to 'Remix Culture,' where users modify the original artifact.",
          "key_manifestations": [
            "The Dancing Baby (Viral GIF)",
            "Hampster Dance (Web Page)",
            "All Your Base Are Belong To Us (Zero Wing translation)",
            "The Matrix ('There is no spoon' as catchphrase)"
          ]
        },
        "2000": {
          "salience_share": 1.4,
          "description": "Flash animation becomes the primary medium (+0.3%). 'Homestar Runner' launches, creating a self-contained universe of internet-specific humor. The 'stick figure' aesthetic dominates (Xiao Xiao). The barrier to entry is technical (you need to know Flash), so the humor is dictated by 'Geek' sensibilities.",
          "key_manifestations": [
            "Homestar Runner (Website Launch)",
            "Xiao Xiao (Flash Series)",
            "Pikachu on Acid (Early fan animation)",
            "Dude, Where's My Car? ('And then?' scene quoted online)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "The launch of Wikipedia and 4chan (2003, but roots here) begins to archive and catalyze culture. 'Peanut Butter Jelly Time' explodes (+0.4%)—pure, non-sequitur absurdity. It relies on the 'earworm' quality. The 'Bert is Evil' image manipulation (Bert from Sesame Street with Bin Laden) accidentally appears on a real protest sign, proving the digital can bleed into the physical.",
          "key_manifestations": [
            "Peanut Butter Jelly Time (Flash)",
            "Bert is Evil (Photoshop Meme)",
            "Zombo.com (Meta-humor)",
            "Amélie (The garden gnome as traveling meme)"
          ]
        },
        "2002": {
          "salience_share": 2.1,
          "description": "Something Awful (The Forum) establishes the rules of 'Internet Tough Guy' discourse and Photoshop battles (+0.3%). The 'Star Wars Kid' video surfaces (early viral video), marking the dark turn toward 'Cyberbullying as Entertainment.' We are laughing *at* the subject, not with them.",
          "key_manifestations": [
            "Star Wars Kid (Viral Video)",
            "Something Awful (Forum Culture)",
            "Badger Badger Badger (Flash Loop)",
            "Minority Report (The gesture interface as future-meme)"
          ]
        },
        "2003": {
          "salience_share": 2.5,
          "description": "4chan launches (+0.4%). It is the laboratory of the internet's id. The 'Imageboard' format prioritizes anonymity and impermanence, fostering a culture of shock and rapid mutation. 'End of the World' (Flash video) codifies the 'random' humor that will define the decade. 'Numa Numa' creates the 'Lip Dub' genre.",
          "key_manifestations": [
            "4chan (Launch)",
            "Numa Numa (Gary Brolsma Video)",
            "End of the World (Flash Video)",
            "Red vs. Blue (Machinima as storytelling)"
          ]
        },
        "2004": {
          "salience_share": 2.9,
          "description": "The 'Reaction Image' begins to stabilize as a format (+0.4%). 'YTMND' (You're The Man Now Dog) launches, creating a community dedicated to recursive looping content. It is the prehistoric TikTok. 'Leeroy Jenkins' is staged in WoW, bridging gaming culture and mainstream viral humor.",
          "key_manifestations": [
            "Leeroy Jenkins (WoW Video)",
            "YTMND (Site Launch)",
            "Napoleon Dynamite (The visual language of awkwardness)",
            "Salad Fingers (Flash Horror/Surrealism)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "YouTube launches. The 'Chuck Norris Facts' meme emerges (+0.6%). It is a text-based, folklore-style meme that transcends any single platform. It represents 'Ironic Masculinity' (Cluster 22) distilled into data points. 'Charlie the Unicorn' popularizes the 'Surreal/Annoying' aesthetic.",
          "key_manifestations": [
            "Chuck Norris Facts (Text Meme)",
            "Charlie the Unicorn (YouTube)",
            "Lazy Sunday (SNL Digital Short)",
            "Flying Spaghetti Monster (The meme as theology)"
          ]
        },
        "2006": {
          "salience_share": 4.1,
          "description": "'Snakes on a Plane' is the first movie marketed entirely on a meme (+0.6%). It fails to deliver massive box office, proving that internet hype does not equal real-world ticket sales. 'Lonelygirl15' plays with the authenticity of the vlog format. The 'Rickroll' (Duckroll precursor) begins to germinate on 4chan.",
          "key_manifestations": [
            "Snakes on a Plane (Film)",
            "Lonelygirl15 (ARG/Series)",
            "Diet Coke and Mentos (Viral Experiment)",
            "Time 'Person of the Year: You' (The user as creator)"
          ]
        },
        "2007": {
          "salience_share": 5.5,
          "description": "The 'I Can Has Cheezburger' (LOLcat) era begins (+1.4%). It standardizes 'Impact Font' (white text, black outline) as the official typeface of internet humor. It introduces 'LOLspeak'—a deliberate pidgin language. This is the moment internet culture becomes accessible to 'Normies' (moms, office workers). The Rickroll goes mainstream.",
          "key_manifestations": [
            "I Can Has Cheezburger (Blog Launch)",
            "Rickrolling (Trend)",
            "Chocolate Rain (YouTube)",
            "Leave Britney Alone (Chris Crocker)"
          ]
        },
        "2008": {
          "salience_share": 5.2,
          "description": "'Rage Comics' (Trollface, FFFUUU) emerge on 4chan/Reddit (-0.3% trend, +0.8% subculture). They provide a crude, standardized template for expressing daily frustration. They are the 'hieroglyphics' of the era. The 'Obama Hope' poster is the first political meme to carry genuine iconic weight.",
          "key_manifestations": [
            "Rage Comics (Origin)",
            "Trollface (Design)",
            "Obama Hope Poster (Shepard Fairey)",
            "Dr. Horrible's Sing-Along Blog (Internet-native musical)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "The 'Auto-Tune the News' trend (+0.6%). It remixes reality into pop music. 'David After Dentist' captures the 'found footage' hilarity of altered states. Kanye West's VMA interruption becomes the first 'Live Tweet' mega-event, where the reaction (memes) happens instantly alongside the broadcast.",
          "key_manifestations": [
            "Imma Let You Finish (Kanye Meme)",
            "Auto-Tune the News (Series)",
            "David After Dentist (Viral Video)",
            "Three Wolf Moon Shirt (Amazon Review Meme)"
          ]
        },
        "2010": {
          "salience_share": 6.4,
          "description": "'Advice Animals' (Socially Awkward Penguin, Advice Dog) take over Reddit (+0.6%). It categorizes all human experience into specific animal archetypes. It is rigid, formulaic, and highly sharable. 'Bed Intruder' (Antoine Dodson) becomes a Billboard charting song, proving the meme can be monetized.",
          "key_manifestations": [
            "Advice Animals (Format)",
            "Bed Intruder Song (Remix)",
            "Double Rainbow (Viral Video)",
            "Inception (The 'We need to go deeper' macro)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "Nyan Cat (+0.4%). It is pure aesthetic—pixel art and chiptune. It signals the rise of 'aesthetic' memes. 'Planking' becomes a physical challenge meme, prefiguring TikTok trends. 'Scumbag Steve' turns a real person's photo into a global symbol of assholery, raising ethical questions about the subjects of memes.",
          "key_manifestations": [
            "Nyan Cat (Video)",
            "Planking (Trend)",
            "Scumbag Steve (Advice Animal)",
            "Rebecca Black - Friday (Hate-watch viral)"
          ]
        },
        "2012": {
          "salience_share": 7.5,
          "description": "'Gangnam Style' breaks the internet (+0.7%). It is the first global meme, transcending language. 'Grumpy Cat' becomes a brand empire. The meme is now a commodity. 'Overly Attached Girlfriend' highlights the 'Meta' aspect—people participating in their own memeification.",
          "key_manifestations": [
            "Gangnam Style (Video)",
            "Grumpy Cat (Personality)",
            "Kony 2012 (The activist meme)",
            "Ecce Homo / Potato Jesus (Restoration Fail)"
          ]
        },
        "2013": {
          "salience_share": 8.1,
          "description": "'Doge' appears (+0.6%). It breaks the Impact Font hegemony. It uses Comic Sans and scattered, internal monologue ('wow', 'much scare'). It is surreal and absurdist. 'Vine' launches, creating the '6-second' grammar of comedy—fast, loud, jump-cut heavy. 'Harlem Shake' shows how corporate culture can instantly kill a meme by adopting it.",
          "key_manifestations": [
            "Doge (Meme)",
            "Vine (App Launch)",
            "Harlem Shake (Trend)",
            "What Does the Fox Say? (Viral Song)"
          ]
        },
        "2014": {
          "salience_share": 8.5,
          "description": "'Gamergate' weaponizes the meme (+0.4%). 'Vivian James' and other symbols are used to signal political allegiance. The 'Starter Pack' meme emerges, allowing for precise sociological stereotyping. 'Luigi's Death Stare' (Mario Kart 8) shows how high-fidelity games are now designed to generate memeable moments.",
          "key_manifestations": [
            "Starter Packs (Format)",
            "Luigi's Death Stare (Gaming Meme)",
            "Alex from Target (Random fame)",
            "Kim Kardashian 'Break the Internet' (Engineered viral)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "'Pepe the Frog' begins his transformation from reaction image to hate symbol/rare commodity (+0.7%). 'Drake' (Hotline Bling) releases a video specifically designed to be memed (dancing in a box). 'The Dress' (Blue/Black vs White/Gold) breaks reality—a meme about perception itself. 'Deep Fried' memes begin to appear, signaling a move toward noise and degradation.",
          "key_manifestations": [
            "The Dress (Perception Event)",
            "Hotline Bling (Meme-bait)",
            "Rare Pepes (Marketplace)",
            "Netflix and Chill (Slang shift)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "The 'Harambe' event (+0.6%). It is the singularity of the cluster. A dead gorilla becomes a write-in candidate for President. It combines grief, absurdity, irony, and political rage. 'Dat Boi' (a frog on a unicycle) represents pure Dadaism—funny for no reason. The 'Alt-Right' claims 'Meme Magic' elected Trump. The meme is no longer just a joke; it is a reality-distortion weapon.",
          "key_manifestations": [
            "Harambe (Cultural Phenomenon)",
            "Dat Boi (Surrealism)",
            "Ted Cruz is the Zodiac Killer (Political Absurdism)",
            "Arthur's Fist (Mood Meme)"
          ]
        }
      }
    },
    "24_the_hip_hop_monoculture_and_streetwear_convergence": {
      "name": "The Hip-Hop Monoculture and Streetwear Convergence",
      "description": "This cluster tracks the ascent of Hip-Hop from a major musical genre to the dominant global operating system of youth culture. It traces the aesthetic shift from the 'Shiny Suit/Bling' era of the late 90s, through the 'Pink Polo' backpack revolution of Kanye West, to the 'High Fashion/Streetwear' merger of the 2010s. It explores how rap replaced rock as the primary engine of rebellion, fashion, and commerce, culminating in the 'Hypebeast' era where Supreme and Yeezy became the new luxury houses.",
      "trajectory": {
        "1999": {
          "salience_share": 3.5,
          "description": "The 'Bling' era is at its peak (+0.8%). Puff Daddy and Cash Money Records dominate. The aesthetic is hyper-materialist: oversized jerseys, platinum chains, Hummers. It is 'aspirational wealth.' Rock is still a competitor (Limp Bizkit/Korn), but Rap is winning the war for the suburbs. Jay-Z releases 'Vol. 3', solidifying the CEO-Rapper archetype.",
          "key_manifestations": [
            "Vol. 3... Life and Times of S. Carter (Album)",
            "Bling Bling by B.G. (Song)",
            "The Source Awards (Cultural Center)",
            "Office Space (The soundtrack usage - 'Damn It Feels Good to Be a Gangsta')"
          ]
        },
        "2000": {
          "salience_share": 4.2,
          "description": "Eminem releases *The Marshall Mathers LP* (+0.7%). It is a cultural nuclear bomb. It bridges the gap between white suburban rage and hip-hop form. He becomes the best-selling artist of the decade. OutKast releases *Stankonia*, proving the South has an avant-garde artistic legitimacy. The 'Durag' is a fashion staple.",
          "key_manifestations": [
            "The Marshall Mathers LP (Album)",
            "Stankonia by OutKast (Album)",
            "Country Grammar by Nelly (St. Louis dominance)",
            "Scary Movie (Hip-hop slang entering mainstream comedy)"
          ]
        },
        "2001": {
          "salience_share": 4.8,
          "description": "Jay-Z releases *The Blueprint* on 9/11 (+0.6%). It utilizes soul samples (produced by Kanye West), shifting the sound away from the synthetic 'Jiggy' era to something more soulful and 'classic.' It establishes the 'God MC' narrative. Nas's 'Ether' ignites the greatest beef in history, proving that lyrical skill still matters most.",
          "key_manifestations": [
            "The Blueprint by Jay-Z (Album)",
            "Ether by Nas (Song)",
            "Training Day (Denzel as the street authority)",
            "The Fast and the Furious (Ja Rule cameo - crossover)"
          ]
        },
        "2002": {
          "salience_share": 5.1,
          "description": "Nelly releases *Nellyville* (+0.3%). 'Hot in Herre' is ubiquitous. Hip-hop is now Pop. The 'Band-Aid on the face' trend shows the power of arbitrary rapper fashion. The 'Throwback Jersey' craze begins—Mitchell & Ness expensive vintage gear becomes the uniform of the cool.",
          "key_manifestations": [
            "Nellyville (Album)",
            "8 Mile (Film - The biopic of the battle rapper)",
            "Undercover Brother (Satire of 70s funk/soul)",
            "Grand Theft Auto: Vice City (The 80s aesthetic revival)"
          ]
        },
        "2003": {
          "salience_share": 5.8,
          "description": "50 Cent releases *Get Rich or Die Tryin'* (+0.7%). It is the last gasp of the 'Super-Gangster' era. Bulletproof vests as fashion. It is massive, aggressive, and monolithic. However, Pharrell Williams (The Neptunes) is quietly introducing 'Skater' aesthetics (trucker hats, BAPE) to the culture, planting the seeds of the future.",
          "key_manifestations": [
            "Get Rich or Die Tryin' (Album)",
            "Frontin' by Pharrell (The skater/nerd cool)",
            "Chappelle's Show (Hip-hop as comedy lingua franca)",
            "Def Jam Vendetta (Video Game)"
          ]
        },
        "2004": {
          "salience_share": 6.5,
          "description": "Kanye West releases *The College Dropout* (+1.2%). The Catalyst. He wears a pink polo and a backpack. He raps about Jesus and minimum wage jobs, not drug dealing. It breaks the 'Gangster' monopoly. It allows the 'Middle Class' to fully embrace the genre as their own life story. The 'sneakerhead' culture begins to formalize (Nike SB Dunk riot).",
          "key_manifestations": [
            "The College Dropout (Album)",
            "Terror Squad - Lean Back (The last club banger era)",
            "Entourage (Sneaker culture plotlines)",
            "Mean Girls (The rap influence on teen hierarchies)"
          ]
        },
        "2005": {
          "salience_share": 6.9,
          "description": "The 'Crunk' era peaks (Lil Jon) (-0.3% artistic, +0.7% ubiquity). It is high-energy party music. However, BAPE (A Bathing Ape) hits the US mainstream via Pharrell and Soulja Boy. The 'Full Zip Hoodie' becomes a holy grail. Streetwear is moving from 'Merch' to 'Collectible Art.'",
          "key_manifestations": [
            "Late Registration (Album)",
            "Hustle & Flow (Film)",
            "BAPE Camo Hoodies (Fashion Trend)",
            "Boondocks (TV Series Premiere - Hip-hop satire)"
          ]
        },
        "2006": {
          "salience_share": 7.2,
          "description": "Lupe Fiasco releases *Food & Liquor* (+0.3%). The 'Skater Rap' subgenre expands. 'Kick, Push' normalizes skateboarding in the hood. TI's *King* brings 'Trap' music to the top of the charts, establishing the sound that will dominate the 2010s. The schism between 'Backpack' and 'Trap' widens.",
          "key_manifestations": [
            "Food & Liquor (Album)",
            "King by T.I. (Album)",
            "Stussy/Supreme (Growing underground hype)",
            "The Wire Season 4 (The sociology of the corner)"
          ]
        },
        "2007": {
          "salience_share": 8.1,
          "description": "The Kanye West vs. 50 Cent Sales Battle (+0.9%). Kanye (*Graduation*) destroys 50 Cent (*Curtis*) in sales. It is the official death of the 'Gangster' era and the victory of the 'Futuristic/Pop/Art' rapper. Kanye's 'Shutter Shades' and Takashi Murakami cover art signal that Rap is now 'Pop Art.' Soulja Boy uses YouTube to launch 'Crank That,' inventing the viral dance era.",
          "key_manifestations": [
            "Graduation (Album)",
            "Crank That (Soulja Boy) - The first internet rap hit",
            "Superbad (McLovin's fake ID - the suburban absorption)",
            "The Cool Kids (Retro-80s aesthetic)"
          ]
        },
        "2008": {
          "salience_share": 8.5,
          "description": "Lil Wayne releases *Tha Carter III* (+0.4%). He is the 'Martian.' He is weird, druggy, and rock-star-like. Kanye releases *808s & Heartbreak*, wearing a gray suit and singing with Auto-Tune. It creates the 'Sad Rapper' archetype (Drake, Juice WRLD precursor). It merges Emo with Rap.",
          "key_manifestations": [
            "Tha Carter III (Album)",
            "808s & Heartbreak (Album)",
            "Step Brothers ('Boats and Hoes' - the irony)",
            "Grand Theft Auto IV (The gritty realism)"
          ]
        },
        "2009": {
          "salience_share": 8.9,
          "description": "Kid Cudi releases *Man on the Moon* (+0.4%). He discusses depression and anxiety openly. The 'Stoner Loner' becomes the new cool. Drake releases *So Far Gone*. He brings melody and R&B vulnerability to the forefront. The 'Hard' rapper is increasingly obsolete. Nike releases the 'Air Yeezy 1'—the first massive non-athlete signature shoe.",
          "key_manifestations": [
            "Man on the Moon (Album)",
            "So Far Gone (Mixtape)",
            "Nike Air Yeezy 1 (Shoe Release)",
            "Community (Donald Glover as the secret rapper)"
          ]
        },
        "2010": {
          "salience_share": 9.5,
          "description": "Kanye's *My Beautiful Dark Twisted Fantasy* (+0.6%). It is maximalist art. It features a ballet film (*Runaway*). It demands that Rap be treated as High Culture. 'Odd Future' (Tyler, the Creator) breaks out, bringing a 'Supreme' obsession, skater nihilism, and shock tactics. They embody the new 'Internet Native' punk-rap energy.",
          "key_manifestations": [
            "My Beautiful Dark Twisted Fantasy (Album)",
            "Odd Future (Wolf Gang Kill Them All)",
            "Pink Friday by Nicki Minaj (Female rap dominance)",
            "How to Make It in America (Streetwear hustle TV)"
          ]
        },
        "2011": {
          "salience_share": 10.1,
          "description": "Jay-Z and Kanye release *Watch the Throne* (+0.6%). They are not in the hood; they are in Paris. They wear Givenchy. It is 'Luxury Rap.' ASAP Rocky releases *Live. Love. ASAP*, mixing Harlem swagger with Houston slowed-down aesthetics and high-fashion name drops (Rick Owens, Raf Simons). The rapper is now a fashion model.",
          "key_manifestations": [
            "Watch the Throne (Album)",
            "Live. Love. ASAP (Mixtape)",
            "Givenchy Rottweiler Tee (Fashion Trend)",
            "Tyler, the Creator 'Yonkers' (Video)"
          ]
        },
        "2012": {
          "salience_share": 10.5,
          "description": "Kendrick Lamar releases *good kid, m.A.A.d city* (+0.4%). It brings the 'Cinema' back to rap—a dense, narrative masterpiece. Macklemore's 'Thrift Shop' (Cluster 14) shows the independent/pop lane is massive. Kanye begins wearing masks on stage. Streetwear brands like 'Supreme' begin to see lines around the block every Thursday.",
          "key_manifestations": [
            "good kid, m.A.A.d city (Album)",
            "Thrift Shop (Song)",
            "Pyrex Vision (Virgil Abloh's early brand)",
            "Django Unchained (Rick Ross on the soundtrack)"
          ]
        },
        "2013": {
          "salience_share": 10.8,
          "description": "Kanye releases *Yeezus* (+0.3%). It is industrial, angry, and anti-fashion, yet defines the fashion (bomber jackets, ripped denim). Drake releases *Nothing Was the Same*, cementing the 'Instagram Caption' rap style. Migos 'Versace' popularizes the 'Triplet Flow' that will define the decade's sound.",
          "key_manifestations": [
            "Yeezus (Album)",
            "Versace by Migos (Song)",
            "Been Trill (Streetwear Trend)",
            "Spring Breakers (Alien's aesthetic)"
          ]
        },
        "2014": {
          "salience_share": 11.2,
          "description": "Iggy Azalea's 'Fancy' creates a massive cultural appropriation debate (-0.4% credibility, +0.4% discourse). It highlights the tension of white pop stars adopting the 'Blaccent.' 'Normcore' fashion (Cluster 11) briefly interrupts the luxury streetwear trend, but Supreme remains the gold standard. The 'Hypebeast' is now a recognized demographic.",
          "key_manifestations": [
            "Fancy by Iggy Azalea (Song)",
            "Run the Jewels 2 (Political rap return)",
            "Forest Hills Drive by J. Cole (The anti-celebrity)",
            "Complex Magazine 'Supreme' Documentary"
          ]
        },
        "2015": {
          "salience_share": 11.8,
          "description": "The Adidas Yeezy Boost 350 releases (+0.6%). It is the biggest sneaker launch since Jordan. It democratizes the 'high fashion' silhouette. Future releases *DS2*, codifying 'Toxic Masculinity' and drug abuse as a dark, moody aesthetic. Drake vs. Meek Mill beef is settled via memes, proving the internet is the new street.",
          "key_manifestations": [
            "Adidas Yeezy Boost 350 (Shoe)",
            "DS2 by Future (Album)",
            "Hotline Bling (Video)",
            "Straight Outta Compton (Film - Nostalgia for the origin)"
          ]
        },
        "2016": {
          "salience_share": 12.5,
          "description": "The cluster culminates in the 'SoundCloud Rap' explosion (Lil Uzi Vert, Yachty) (+0.7%). They are 'Rock Stars'—dyed hair, facial tattoos, mosh pits. They care more about 'vibes' than lyrics. The barrier between 'Streetwear' and 'Luxury' collapses completely (Louis Vuitton x Supreme rumors start). Rap *is* the monoculture. 'Atlanta' (TV) deconstructs the absurdity of the scene.",
          "key_manifestations": [
            "Lil Uzi Vert vs. The World (Mixtape)",
            "Atlanta (TV Series Premiere)",
            "The Life of Pablo (Merch as fashion)",
            "Bad and Boujee (Meme-fueled hit)"
          ]
        }
      }
    },
    "25_queer_visibility_and_the_rights_revolution": {
      "name": "Queer Visibility and the Rights Revolution",
      "description": "This cluster maps the seismic shift of LGBTQ+ identity from the margins to the center of American life. It tracks the journey from the 'Tragic Queer' tropes of the 90s (murder, AIDS) to the 'Safe/Funny Queer' of the early 2000s (Will & Grace, Queer Eye), and finally to the political victory of Marriage Equality and the emergence of trans visibility. It analyzes how culture acted as the battering ram for legal change, normalizing non-heteronormative lives through pop culture exposure until the political opposition effectively collapsed.",
      "trajectory": {
        "1999": {
          "salience_share": 3.2,
          "description": "*Boys Don't Cry* releases (+0.8%). It is a critical success but reinforces the narrative that queer existence—specifically trans existence—ends in violence. *Will & Grace* is popular, but relies on a sexless, palatable gay best friend archetype. The 'Gay Panic' defense is still a legal reality. The culture is in a state of 'Don't Ask, Don't Tell'—tolerated if invisible.",
          "key_manifestations": [
            "Boys Don't Cry (Film)",
            "Will & Grace (TV Series)",
            "But I'm a Cheerleader (Cult Satire)",
            "Matthew Shepard Hate Crimes Reporting (News)"
          ]
        },
        "2000": {
          "salience_share": 3.5,
          "description": "*Queer as Folk* (US) premieres (+0.5%). It is shocking for its depiction of actual gay sex and club culture, moving beyond the sanitized sitcom version. Vermont passes Civil Unions, introducing the concept of 'separate but equal' institutions. Eminem performs with Elton John at the Grammys, a symbolic (though controversial) attempt to bridge the gap between Hip-Hop and Gay culture.",
          "key_manifestations": [
            "Queer as Folk US (TV Series Premiere)",
            "Eminem/Elton John Grammy Performance",
            "Vermont Civil Unions (Legislation)",
            "If These Walls Could Talk 2 (HBO Film)"
          ]
        },
        "2001": {
          "salience_share": 3.8,
          "description": "*Hedwig and the Angry Inch* releases (+0.4%). It brings genderqueer punk rock to the indie screen. *The L Word* is in development (cultural buzz). The conversation is slowly expanding beyond cis-white-gay-men. 9/11 briefly pushes social issues to the backburner, emphasizing a heteronormative patriot family structure.",
          "key_manifestations": [
            "Hedwig and the Angry Inch (Film)",
            "Six Feet Under (David Fisher's nuanced storyline)",
            "Mulholland Drive (Lesbian subtext/text)",
            "Moulin Rouge! (Camp aesthetic mainstreaming)"
          ]
        },
        "2002": {
          "salience_share": 4.1,
          "description": "*The L Word* buzz builds (-0.2% trend, +0.6% niche). *The Wire* introduces Omar Little—a stick-up man who is openly gay, fearsome, and rejects all stereotypes. He becomes one of the most iconic characters in TV history, proving a gay man can be the 'hardest' person in the room. This shatters the 'sissy' trope.",
          "key_manifestations": [
            "The Wire (Omar Little introduced)",
            "The Hours (Film)",
            "Far From Heaven (Suburban repression)",
            "Y Tu Mamá También (Fluidity as exploration)"
          ]
        },
        "2003": {
          "salience_share": 4.8,
          "description": "*Queer Eye for the Straight Guy* premieres (+1.2%). The 'Metrosexual' moment. It suggests that gay men possess secret knowledge (cooking, fashion) that straight men need. It is instrumental utility—gay men as helpers—but it brings them into millions of conservative living rooms. *Angels in America* (HBO) provides the high-art counterpoint, revisiting the AIDS crisis with epic gravity.",
          "key_manifestations": [
            "Queer Eye for the Straight Guy (TV Series Premiere)",
            "Angels in America (Miniseries)",
            "Lawrence v. Texas (Supreme Court strikes down sodomy laws)",
            "Monster (Lesbian serial killer narrative)"
          ]
        },
        "2004": {
          "salience_share": 5.5,
          "description": "Gavin Newsom issues marriage licenses in San Francisco (+1.1%). It acts as a massive catalyst. It moves the goalpost from 'Civil Unions' to 'Marriage.' The backlash is immediate (11 state bans), but the visual of same-sex weddings is now in the public consciousness. *The L Word* premieres, giving lesbians their *Sex and the City* moment.",
          "key_manifestations": [
            "San Francisco Marriage Licenses (Event)",
            "The L Word (TV Series Premiere)",
            "Saved! (Teen movie questioning conversion therapy)",
            "Alexander (Bisexual erasure controversy)"
          ]
        },
        "2005": {
          "salience_share": 6.2,
          "description": "*Brokeback Mountain* releases (+1.5%). It is a cultural earthquake. It puts gay romance in the most sacred American setting: the Western. It is tragic, but it forces the mainstream to empathize with the 'love,' not just the politics. 'I wish I knew how to quit you' becomes a global catchphrase.",
          "key_manifestations": [
            "Brokeback Mountain (Film)",
            "Transamerica (Trans visibility - though cis casting)",
            "Rent (Film adaptation)",
            "Capote (Film)"
          ]
        },
        "2006": {
          "salience_share": 5.8,
          "description": "Variance dips (-0.4%) as the conservative backlash holds firm politically (Bush era). *Project Runway* features Christian Siriano (winning later, but the archetype is visible), celebrating the 'flamboyant' gay creative genius. The 'Down Low' panic in media reflects racialized anxieties about black sexuality.",
          "key_manifestations": [
            "Project Runway (Christian Siriano era)",
            "How to Save a Life (The Fray - Pop culture absorbing sensitivity)",
            "V for Vendetta (Valerie's Letter - persecution narrative)",
            "Shortbus (Explicit sexuality as art)"
          ]
        },
        "2007": {
          "salience_share": 5.4,
          "description": "Dumbledore is outed by J.K. Rowling (+0.3%). It is a 'Retcon' moment—queerness added after the fact—but it signals that even the biggest franchise in the world wants to be inclusive. *Gossip Girl* features a gay brother storyline that treats it as a minor social hurdle, not a tragedy.",
          "key_manifestations": [
            "J.K. Rowling Outing Dumbledore (Event)",
            "Gossip Girl (Eric van der Woodsen)",
            "I Now Pronounce You Chuck and Larry (The gay panic comedy's last gasp)",
            "Across the Universe (Fluidity in the 60s)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "Proposition 8 passes in California, banning gay marriage (-0.6% legal, +1.5% activism). It radicalizes a generation. The 'No on 8' campaign dominates social media. Sean Penn wins Oscar for *Milk*, linking the current struggle to the 70s history. Rachel Maddow becomes the first openly gay anchor of a major primetime news show.",
          "key_manifestations": [
            "Proposition 8 (Event)",
            "Milk (Film)",
            "Rachel Maddow Show (Premiere)",
            "Katy Perry 'I Kissed a Girl' (Bi-curiosity as pop commodity)"
          ]
        },
        "2009": {
          "salience_share": 6.9,
          "description": "*Glee* premieres (+0.8%). Kurt Hummel becomes the most important gay teen character in history. The show frames homophobia not just as mean, but as 'uncool.' Adam Lambert on *American Idol* brings glam-rock queerness to the masses, though he loses, signaling the lingering divide.",
          "key_manifestations": [
            "Glee (TV Series Premiere)",
            "Adam Lambert on American Idol",
            "A Single Man (Tom Ford's aesthetic melancholy)",
            "RuPaul's Drag Race (Season 1 - Niche beginning)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "The 'It Gets Better' campaign goes viral (+0.6%). It frames the internet as a lifeline for queer youth. *Modern Family* wins the Emmy, putting a gay couple (Cam and Mitch) at the center of the American family. They are safe, suburban, and wealthy, making them the perfect ambassadors for normalization.",
          "key_manifestations": [
            "It Gets Better Project",
            "Modern Family (Emmy Win)",
            "The Kids Are All Right (Lesbian family dramedy)",
            "Lady Gaga 'Born This Way' (Announcement/Hype)"
          ]
        },
        "2011": {
          "salience_share": 8.2,
          "description": "Don't Ask, Don't Tell is repealed (+0.7%). Gays can serve openly. It is the fall of a major institutional barrier. Lady Gaga releases 'Born This Way,' the anthem of the era. *RuPaul's Drag Race* begins to break out of the Logo ghetto, introducing 'Reading' and 'Shade' to the heterosexual vocabulary.",
          "key_manifestations": [
            "DADT Repeal (Legislation)",
            "Born This Way (Song/Album)",
            "RuPaul's Drag Race (Season 3 - Raja era)",
            "Weekend (Indie film realism)"
          ]
        },
        "2012": {
          "salience_share": 8.8,
          "description": "Frank Ocean publishes his Tumblr letter (+0.8%). A rising Hip-Hop/R&B star comes out. It challenges the perceived homophobia of Black music culture. Biden and Obama endorse marriage equality. Anderson Cooper comes out. The dominoes are falling. *Magic Mike* is directed by Soderbergh but gazed at by gay men and straight women alike, equalizing objectification.",
          "key_manifestations": [
            "Frank Ocean Tumblr Letter",
            "Obama Endorses Marriage Equality",
            "Magic Mike (The female/gay gaze)",
            "The Perks of Being a Wallflower (Patrick's storyline)"
          ]
        },
        "2013": {
          "salience_share": 9.4,
          "description": "*Blue Is the Warmest Color* wins the Palme d'Or (+0.4%). Lesbian sexuality is treated as high art (despite controversy over the male gaze). *Orange Is the New Black* premieres, featuring a trans woman of color (Laverne Cox) as a central, sympathetic character, not a punchline. The 'T' in LGBT begins to gain significant distinct visibility.",
          "key_manifestations": [
            "Orange Is the New Black (Premiere)",
            "Blue Is the Warmest Color (Film)",
            "Dallas Buyers Club (AIDS history revisited)",
            "Macklemore 'Same Love' (Straight ally anthem)"
          ]
        },
        "2014": {
          "salience_share": 9.8,
          "description": "*Transparent* premieres on Amazon (+0.6%). It centers the trans experience (though with a cis actor). 'The Tipping Point' for trans rights is declared by Time Magazine. Sam Smith wins Grammys as an openly gay artist. The cultural battle for marriage is effectively won; the courts are just catching up.",
          "key_manifestations": [
            "Transparent (TV Series Premiere)",
            "Time Magazine 'The Transgender Tipping Point'",
            "The Imitation Game (Alan Turing biopic)",
            "Pride (Film - Solidarity history)"
          ]
        },
        "2015": {
          "salience_share": 10.5,
          "description": "*Obergefell v. Hodges* (+1.2%). Marriage Equality is the law of the land. The White House is lit in rainbow colors. It is the victory lap. Caitlyn Jenner comes out on the cover of Vanity Fair, sparking a massive, complex conversation about trans identity, privilege, and spectacle. *Carol* offers a prestigious, 'pre-liberation' lesbian romance.",
          "key_manifestations": [
            "Obergefell v. Hodges (Supreme Court Ruling)",
            "Caitlyn Jenner Vanity Fair Cover",
            "Carol (Film)",
            "Tangerine (Trans street life shot on iPhone)"
          ]
        },
        "2016": {
          "salience_share": 10.2,
          "description": "*Moonlight* releases (+0.8%). It wins Best Picture (after the *La La Land* mix-up). It is a masterpiece of intersectionality—Black, poor, and queer. It represents the maturation of the cluster from 'Issue Movies' to pure Art. However, the Pulse Nightclub shooting serves as a horrific reminder that legal rights do not equal physical safety.",
          "key_manifestations": [
            "Moonlight (Film)",
            "Pulse Nightclub Shooting (Event)",
            "San Junipero (Black Mirror episode - Queer happiness)",
            "Yuri on Ice (Anime - Queer romance breakthrough)"
          ]
        }
      }
    },
    "26_the_wellness_imperative_and_secular_asceticism": {
      "name": "The Wellness Imperative and Secular Asceticism",
      "description": "This cluster tracks the replacement of traditional religion with the cult of the body. It moves from the 90s 'Diet Culture' (low fat, thinness) to the 2010s 'Wellness' ethos (clean eating, gut health, mindfulness). It analyzes how 'Health' became a moral imperative and a status symbol. The trajectory encompasses the rise of Yoga as a suburban lifestyle, the 'Goop-ification' of luxury, the Crossfit obsession with functional suffering, and the belief that death can be indefinitely postponed through kale and meditation.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "The cluster is defined by 'Gym Culture' and 'Low Fat.' *American Beauty* features the protagonist working out in his garage to look good naked—it's about aesthetics, not 'wellness.' *Fight Club* mocks the 'Calvin Klein' body but fetishizes the lean fighter physique. The Zone Diet is popular. Yoga is still viewed as slightly hippie or niche.",
          "key_manifestations": [
            "American Beauty (The garage gym)",
            "Fight Club (The perfect male body)",
            "The Zone Diet (Trend)",
            "Bringing Out the Dead (Stress and burnout)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "*Cast Away* showcases Tom Hanks' drastic weight loss, glamorizing extreme physical transformation as a sign of dedication (+0.3%). *American Psycho* opens with a monologue about skincare and exercise, framing the perfect body as a mask for the void. It satirizes the burgeoning obsession with self-optimization.",
          "key_manifestations": [
            "American Psycho (The skincare routine)",
            "Cast Away (Transformation)",
            "Crouching Tiger, Hidden Dragon (Eastern movement aesthetics)",
            "Requiem for a Dream (Diet pill horror)"
          ]
        },
        "2001": {
          "salience_share": 2.1,
          "description": "Lululemon opens its first real stores (expansion phase) (+0.4%). The 'Yoga Pant' begins its conquest of casual wear. Yoga moves from the ashram to the strip mall. It is becoming commodified as 'Athleisure.' *Zoolander* mocks the vanity of the body-obsessed industries.",
          "key_manifestations": [
            "Lululemon (Retail expansion)",
            "Zoolander (Male vanity)",
            "Bridget Jones's Diary (Calorie counting as personality)",
            "Shrek (Rejection of beauty standards)"
          ]
        },
        "2002": {
          "salience_share": 2.4,
          "description": "The Atkins Diet explodes (+0.6%). 'Carbs' become the enemy. It is a massive shift from the 90s low-fat orthodoxy. Burger joints start offering lettuce wraps. It signals that dietary truth is malleable and trend-based. *Jackass* treats the body as a trash can, the counter-culture to the wellness trend.",
          "key_manifestations": [
            "The Atkins Diet (Peak trend)",
            "Jackass: The Movie (Body abuse)",
            "Blue Crush (Surfer fitness aesthetic)",
            "Panic Room (The diabetic crisis - fragility of the body)"
          ]
        },
        "2003": {
          "salience_share": 2.8,
          "description": "*The O.C.* popularizes 'Yogalates' (+0.3%). The fusion of disciplines signals the 'optimization' mindset—maximum efficiency. 'Nip/Tuck' premieres, exploring the dark psychology of plastic surgery. We are treating the body as a customizable avatar. The 'Metrosexual' trend encourages men to groom and moisturize.",
          "key_manifestations": [
            "The O.C. (California lifestyle)",
            "Nip/Tuck (TV Series Premiere)",
            "Queer Eye (Grooming tips)",
            "Lost in Translation (Insomnia and displacement)"
          ]
        },
        "2004": {
          "salience_share": 3.5,
          "description": "*Super Size Me* releases (+0.9%). It is the *Silent Spring* of the food industry. It frames fast food not as a treat, but as poison. It launches the 'Organic/Whole Foods' boom. 'Detox' becomes a buzzword. The body is seen as 'toxic' and in need of purification.",
          "key_manifestations": [
            "Super Size Me (Documentary)",
            "The Biggest Loser (TV Series Premiere - weight loss as sport)",
            "Mean Girls (Kalteen bars - diet obsession)",
            "I Heart Huckabees (Existential wellness)"
          ]
        },
        "2005": {
          "salience_share": 3.8,
          "description": "Whole Foods Market enters the Fortune 500 (+0.4%). Expensive, organic food becomes a primary status marker for the upper-middle class. 'Tom Cruise' lectures Matt Lauer on psychiatry and vitamins, highlighting the intersection of celebrity, belief, and health. The 'Master Cleanse' (lemonade/cayenne) goes viral.",
          "key_manifestations": [
            "Whole Foods (Cultural dominance)",
            "The Master Cleanse (Trend)",
            "Batman Begins (Training montage as spiritual journey)",
            "Madonna's Yoga Arms (Fitness goal)"
          ]
        },
        "2006": {
          "salience_share": 4.2,
          "description": "*300* releases (+0.6%). The 'Spartan Workout' becomes a phenomenon. It introduces 'Functional Fitness'—flipping tires, kettlebells. It rejects the 'glamour muscles' of the 80s for a gritty, combat-ready aesthetic. Crossfit begins to spread from Santa Cruz garages to global affiliates.",
          "key_manifestations": [
            "300 (Film)",
            "CrossFit (Growth phase)",
            "Little Miss Sunshine (Critique of the beauty pageant body)",
            "The Devil Wears Prada (The size 0 imperative)"
          ]
        },
        "2007": {
          "salience_share": 4.5,
          "description": "The 'Locavore' movement (Cluster 19) intersects with Wellness (+0.3%). Eating local is now moral and healthy. *Skinny Bitch* (Book) becomes a bestseller, mixing veganism with abrasive tough love. It frames meat-eating as both gross and uncool. The iPhone launches, laying the groundwork for the 'Quantified Self' (tracking steps).",
          "key_manifestations": [
            "Skinny Bitch (Book)",
            "Michael Pollan's 'In Defense of Food'",
            "Ratatouille (Taste as epiphany)",
            "Juno (Pregnancy and the body)"
          ]
        },
        "2008": {
          "salience_share": 5.5,
          "description": "Gwyneth Paltrow launches 'Goop' (+1.2%). It is the Vatican of the Wellness movement. It explicitly links health with wealth and exclusivity. It promotes 'cleanses' and 'detoxes' that have no medical basis but feel spiritually purifying. *Wall-E* depicts the 'Anti-Wellness' dystopia—fat, boneless humans in chairs.",
          "key_manifestations": [
            "Goop (Launch)",
            "Wall-E (The obese future)",
            "Kung Fu Panda (Fat acceptance/capability)",
            "Twilight (The immortal, perfect vampire body)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "*Avatar* connects wellness to nature worship (+0.4%). The Na'vi are lean, athletic, and connected to the bio-network. 'Barefoot Running' (Born to Run) becomes a massive trend. We are trying to return to a 'primal' state. The 'Paleo Diet' gains traction—eating like a caveman to cure modern malaise.",
          "key_manifestations": [
            "Born to Run (Book)",
            "Avatar (The organic body)",
            "Zombieland (Cardio is Rule #1)",
            "Paleo Diet (Trend)"
          ]
        },
        "2010": {
          "salience_share": 6.2,
          "description": "Instagram launches. The 'Fitness Influencer' is born (+0.5%). The 'Ab Crack' and 'Thigh Gap' become visual targets. Wellness is now a visual aesthetic. *Black Swan* depicts the horror of physical perfectionism—the body destroying itself for art. It is the dark side of the discipline.",
          "key_manifestations": [
            "Black Swan (Film)",
            "Instagram (Fitness aesthetic)",
            "127 Hours (The body as resource)",
            "Eat, Pray, Love (Wellness tourism)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "SoulCycle expands to LA and takes off (+0.6%). It is 'secular church.' You ride in the dark, light candles, and cry. It provides community and catharsis for the secular urbanite. 'Gluten-Free' explodes, not just for Celiacs but as a lifestyle choice. Bread is the new cigarettes.",
          "key_manifestations": [
            "SoulCycle (Expansion)",
            "Gluten-Free Trend",
            "Contagion (Fear of the biological)",
            "Limitless (The pill for optimization)"
          ]
        },
        "2012": {
          "salience_share": 7.2,
          "description": "*Girls* depicts the messy, non-optimized body (+0.3%). It is a counter-point. But the trend is 'Juicing.' The $10 green juice is the new Starbucks cup. It is liquid status. 'Headspace' (App) creates the 'McMindfulness' market—meditation for productivity, not enlightenment.",
          "key_manifestations": [
            "Juice Cleanse Trend (BluePrintCleanse)",
            "Headspace (App Growth)",
            "Magic Mike (The commodified male body)",
            "The Hunger Games (Hunger as aesthetic)"
          ]
        },
        "2013": {
          "salience_share": 7.5,
          "description": "*Orange Is the New Black* shows bodies of all sizes, races, and ages (+0.4%). It challenges the skinny white norm of wellness. However, the 'Thigh Gap' discourse on Tumblr reaches toxic levels. 'Crossfit Games' are broadcast on ESPN, mainstreaming the sport of exercise.",
          "key_manifestations": [
            "CrossFit Games on ESPN",
            "Thigh Gap (Tumblr Trend)",
            "Pain & Gain (Bodybuilding satire)",
            "Dallas Buyers Club (Health as survival)"
          ]
        },
        "2014": {
          "salience_share": 7.9,
          "description": "The 'Athleisure' market officially outpaces denim (+0.5%). We are dressing for the gym we aren't going to. 'Wearable Tech' (Fitbit/Apple Watch) gamifies health. We are 'Closing the Rings.' *Whiplash* applies the logic of elite sports suffering to jazz drumming. The body must be broken to be great.",
          "key_manifestations": [
            "Apple Watch (Announcement)",
            "Athleisure Dominance",
            "Whiplash (Suffering for excellence)",
            "Gone Girl (The 'Cool Girl' eats pizza but stays thin)"
          ]
        },
        "2015": {
          "salience_share": 8.5,
          "description": "The 'Dad Bod' goes viral (+0.4%). It is a brief rebellion against the optimization imperative, but mostly for men. For women, the 'Kardashian' aesthetic (Waist Trainers) dominates—a surgically enhanced hourglass. 'Whole30' becomes the January ritual. It is a strict, elimination-based theology.",
          "key_manifestations": [
            "Dad Bod (Viral Trend)",
            "Waist Trainers (Kardashian influence)",
            "The Martian (Calorie counting for survival)",
            "Inside Out (Emotional wellness)"
          ]
        },
        "2016": {
          "salience_share": 8.9,
          "description": "Goop holds its first 'In Goop Health' summit (+0.5%). Wellness is now a luxury belief system. 'Clean Eating' is the dogma. *Doctor Strange* introduces Eastern mysticism as a way to heal the broken Western body/hands. The 'Self-Care' meme explodes post-election—face masks as a defense against political trauma.",
          "key_manifestations": [
            "In Goop Health Summit",
            "Doctor Strange (Film)",
            "Self-Care (Post-election coping)",
            "A Cure for Wellness (Horror satire of the industry)"
          ]
        }
      }
    },
    "27_the_edm_drop_and_the_festival_industrial_complex": {
      "name": "The EDM Drop and the Festival Industrial Complex",
      "description": "This cluster maps the trajectory of electronic dance music from a stigmatized subculture (Raves) or a niche genre ('Electronica') to the dominant sound of global pop and a massive live event industry. It tracks the shift from the 'Repetitive Beat' of the 90s to the 'Drop-centric' structure of Dubstep and Big Room House. It explores the cultural phenomenon of the 'Superstar DJ' as the new Rock God, the commodification of 'PLUR' (Peace Love Unity Respect), and the synchronization of drug culture (Molly) with the rise of the massive, corporate music festival (EDC, Coachella, Ultra).",
      "trajectory": {
        "1999": {
          "salience_share": 1.8,
          "description": "The 'Electronica' hype cycle peaks and crashes (+0.4%). Moby's *Play* is everywhere, licensing every track to commercials, proving the genre's commercial viability but killing its cool. Fatboy Slim dominates the charts. However, in the US, 'Techno' is still largely seen as a joke (Eminem's 'Nobody Listens to Techno'). The rave scene is being dismantled by the RAVE Act crackdowns.",
          "key_manifestations": [
            "Play by Moby (Album)",
            "Fatboy Slim 'The Rockafeller Skank'",
            "Go (Film - Rave culture snapshot)",
            "The Matrix (Techno/Industrial soundtrack)"
          ]
        },
        "2000": {
          "salience_share": 2.1,
          "description": "Alice Deejay's 'Better Off Alone' creates the Euro-dance template that will haunt the decade (+0.3%). Trance music enters the pop consciousness (Darude's 'Sandstorm'). It is high-energy, synthetic, and emotional. The 'Love Parade' in Berlin attracts over a million people, showing the massive scale of the culture abroad, while the US remains fixated on Nu-Metal.",
          "key_manifestations": [
            "Sandstorm by Darude (Song)",
            "Better Off Alone by Alice Deejay",
            "Groove (Film)",
            "Love Parade 2000 (Event)"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "Daft Punk releases *Discovery* (+0.6%). It is the critical turning point. They rebrand electronic music as 'Robot Rock'—anime aesthetics, disco samples, and helmets. It bridges the gap between rock critics and dance floors. 'One More Time' is undeniable. It rejects the 'druggy' stigma for a 'retro-future' cool.",
          "key_manifestations": [
            "Discovery by Daft Punk (Album)",
            "Gorillaz (Self-Titled Album - Genre blending)",
            "Donnie Darko (Mad World - melancholic synthesis)",
            "Zoolander (Mocking the DJ)"
          ]
        },
        "2002": {
          "salience_share": 2.2,
          "description": "Variance dips (-0.3%) as the 'Rock Revival' (The Strokes) sucks the oxygen out of the room. Dance music retreats to the 'Electroclash' underground in NYC/Berlin. It becomes grittier, punkier (Fischerspooner). The mainstream ignores it, viewing it as 'Euro-trash' music.",
          "key_manifestations": [
            "Fischerspooner - #1 (Album)",
            "24 Hour Party People (Nostalgia for the rave)",
            "Kylie Minogue 'Can't Get You Out of My Head'",
            "Grand Theft Auto: Vice City (New Wave revival)"
          ]
        },
        "2003": {
          "salience_share": 2.5,
          "description": "Benny Benassi's 'Satisfaction' brings the 'Saw Wave' buzz to the mainstream (+0.3%). It is loud, abrasive, and sexual. The 'mashup' scene (2 Many DJs) begins to deconstruct pop music, treating it as raw data to be mixed. This lays the groundwork for the 'Open Format' DJ.",
          "key_manifestations": [
            "Satisfaction by Benny Benassi (Song)",
            "As Heard on Radio Soulwax Pt. 2 (Mix Album)",
            "Daft Punk's Interstella 5555 (Film)",
            "Party Monster (The dark side of club kids)"
          ]
        },
        "2004": {
          "salience_share": 2.8,
          "description": "Tiësto performs at the Athens Olympics Opening Ceremony (+0.4%). The DJ is now a global ambassador. The sound is Trance—epic, sweeping, and apolitical. However, in the UK, Dubstep is gestating in Croydon—dark, bass-heavy, and moody. It is the anti-Trance.",
          "key_manifestations": [
            "Tiësto at Olympics",
            "Call on Me by Eric Prydz (Video meme)",
            "It's All Gone Pete Tong (Mockumentary)",
            "Dubstep Warz (Radio Show - Roots)"
          ]
        },
        "2005": {
          "salience_share": 3.1,
          "description": "LCD Soundsystem (Cluster 11) acts as a gateway drug for indie kids to like dance music (+0.3%). 'Daft Punk is Playing at My House' mythologizes the culture. Madonna releases *Confessions on a Dance Floor*, fully embracing the DJ aesthetic (Stuart Price production).",
          "key_manifestations": [
            "LCD Soundsystem (Album)",
            "Confessions on a Dance Floor (Album)",
            "Hung Up by Madonna",
            "Justice 'Waters of Nazareth' (Distortion enters the chat)"
          ]
        },
        "2006": {
          "salience_share": 4.5,
          "description": "Daft Punk at Coachella (+1.4%). The 'Pyramid' show. It is the most important live music event of the cluster. It proves that two guys with computers can stage a rock-god level spectacle. It invents the modern EDM light show. Thousands of Americans decide that night they want to be DJs.",
          "key_manifestations": [
            "Daft Punk at Coachella (Event)",
            "Justice vs. Simian 'We Are Your Friends'",
            "Girl Talk 'Night Ripper' (Copyright anarchy)",
            "Step Up (Dance as sport)"
          ]
        },
        "2007": {
          "salience_share": 5.2,
          "description": "Justice releases *†* (Cross) (+0.7%). It is heavy metal played on synthesizers. Leather jackets, Marshall stacks, and distortion. It appeals to the 'Indie Sleaze' crowd. Kanye West samples Daft Punk for 'Stronger', officially merging Hip-Hop with French House. The genre barrier collapses.",
          "key_manifestations": [
            "Justice - † (Album)",
            "Stronger by Kanye West (Song)",
            "Daft Punk - Alive 2007 (Album)",
            "Skins (Rave culture on TV)"
          ]
        },
        "2008": {
          "salience_share": 5.8,
          "description": "Lady Gaga (Cluster 16) brings the 'RedOne' Euro-house sound to US Radio (+0.6%). 'Just Dance' is a trojan horse. MGMT's 'Kids' and 'Time to Pretend' put synth-pop on every college dorm playlist. The 'Neon' aesthetic returns.",
          "key_manifestations": [
            "Just Dance by Lady Gaga",
            "Oracular Spectacular by MGMT",
            "Deadmau5 'Ghosts 'n' Stuff'",
            "Vampire Weekend (Afro-pop beat)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "David Guetta's 'I Gotta Feeling' (Black Eyed Peas) dominates the world (+0.7%). It is 'EDM-Pop.' It is optimistic, repetitive, and designed for stadiums. 'Jersey Shore' premieres, popularizing 'Fist Pumping' and House music as the soundtrack of the muscle-bro lifestyle.",
          "key_manifestations": [
            "I Gotta Feeling (Song)",
            "Jersey Shore (TV Series Premiere)",
            "Sexy Bitch by David Guetta/Akon",
            "The Hangover (Flo Rida soundtrack)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "Skrillex releases *Scary Monsters and Nice Sprites* (+1.0%). Dubstep arrives in America, but it is mutated into 'Brostep.' It is aggressive, robotic, and focused entirely on 'The Drop.' It sounds like a Transformer dying. It polarizes the culture—purists hate it, teenagers love it. It is the new Heavy Metal.",
          "key_manifestations": [
            "Scary Monsters and Nice Sprites (EP)",
            "Rusko 'Woo Boost'",
            "Swedish House Mafia 'One' (The festival anthem)",
            "Tron: Legacy (Daft Punk Score)"
          ]
        },
        "2011": {
          "salience_share": 8.2,
          "description": "Avicii releases 'Levels' (+0.7%). It is the ultimate euphoric anthem. EDM is now the sound of fraternity parties, car commercials, and Super Bowls. Electric Daisy Carnival (EDC) moves to Las Vegas, becoming a massive corporate rave. The term 'EDM' (Electronic Dance Music) is adopted by the industry to package the movement.",
          "key_manifestations": [
            "Levels by Avicii (Song)",
            "EDC Las Vegas (Event)",
            "We Found Love by Rihanna/Calvin Harris",
            "Cinema (Skrillex Remix)"
          ]
        },
        "2012": {
          "salience_share": 8.8,
          "description": "The 'Trap' remix of 'Mercy' (RL Grime/Salva) bridges EDM and Hip-Hop (+0.6%). The 'Harlem Shake' (Baauer) goes viral. EDM festivals are now billion-dollar economies. Madonna asks 'Has anyone seen Molly?' at Ultra, mainstreaming the drug reference and drawing ire. The 'Cake Throw' (Steve Aoki) becomes the symbol of the spectacle over the music.",
          "key_manifestations": [
            "Harlem Shake (Meme/Song)",
            "Clarity by Zedd",
            "Spring Breakers (Skrillex Score)",
            "Project X (The party as chaos)"
          ]
        },
        "2013": {
          "salience_share": 9.1,
          "description": "Daft Punk releases *Random Access Memories* (-0.3% EDM trend, +0.6% Disco). They explicitly reject the digital 'Drop' culture they helped create, returning to live instrumentation. It acts as a critique of the EDM bubble. Meanwhile, 'Animals' by Martin Garrix creates the 'Big Room' minimalist sound—woodblock beats for massive crowds.",
          "key_manifestations": [
            "Random Access Memories (Album)",
            "Animals by Martin Garrix",
            "Get Lucky (Song)",
            "The Bling Ring (Club culture theft)"
          ]
        },
        "2014": {
          "salience_share": 8.5,
          "description": "The 'Deep House' pivot begins (-0.6%). Disclosure's 'Latch' (released earlier, peaks now in US) brings a smoother, pop-friendly sound. Audiences are burning out on the aggressive 'Brostep' sound. The 'Tropical House' (Kygo) trend begins—slow, flute-heavy, sunset music. It is the gentrification of the rave.",
          "key_manifestations": [
            "Latch by Disclosure/Sam Smith",
            "Turn Down for What (Viral Hit)",
            "Kygo Remixes",
            "Ultra Music Festival (Peak attendance)"
          ]
        },
        "2015": {
          "salience_share": 7.8,
          "description": "Jack Ü (Skrillex and Diplo) release 'Where Are Ü Now' with Justin Bieber (+0.5%). It rehabilitates Bieber's career and brings complex production to Top 40. It signals the total absorption of EDM into Pop. The 'Festival' is now just a standard rite of passage for youth, stripped of its counter-cultural 'PLUR' roots.",
          "key_manifestations": [
            "Where Are Ü Now (Song)",
            "Lean On by Major Lazer",
            "We Are Your Friends (Film - The failed EDM movie)",
            "Coachella (The fashion show aspect dominates)"
          ]
        },
        "2016": {
          "salience_share": 7.2,
          "description": "The Chainsmokers dominate the charts with 'Closer' (-0.6% artistic cred, +0.8% ubiquity). EDM has become 'Frat-Pop.' It is sentimental, easy, and unavoidable. The bubble has not burst, but it has hardened into a permanent commercial layer. The underground (Techno/House) begins to grow again as a reaction against the 'Press Play' culture.",
          "key_manifestations": [
            "Closer by The Chainsmokers",
            "Marshmello (The brand mascot DJ)",
            "I Took A Pill In Ibiza (Seeb Remix - The sadness of the comedown)",
            "Stranger Things (The synthwave nostalgia replaces the drop)"
          ]
        }
      }
    },
    "28_gentrification_aesthetics_and_the_global_brooklyn": {
      "name": "Gentrification Aesthetics and the Global Brooklyn",
      "description": "This cluster traces the homogenization of urban space through the spread of a specific 'Hipster' aesthetic. It moves from the 'Third Wave Coffee' revolution to the 'Edison Bulb/Reclaimed Wood' interior design standard, culminating in the 'AirSpace' (minimalist, plant-filled, mid-century modern) look that makes a coffee shop in Tokyo look identical to one in Berlin. It explores how 'Authenticity' was commodified into a replicable design package, driven by platforms like Instagram and Airbnb that reward visual uniformity.",
      "trajectory": {
        "1999": {
          "salience_share": 2.1,
          "description": "Starbucks is the hegemon (+0.4%). The aesthetic is 'accessible luxury'—jazz CDs, green aprons, comfy chairs. It is the 'Third Place.' *Fight Club* mocks the 'IKEA Nesting Instinct,' critiquing the mass-produced identity of the yuppie. The 'cool' city is still gritty (Lower East Side, Wicker Park), defined by cheap rent and danger, not design.",
          "key_manifestations": [
            "Fight Club (IKEA Scene)",
            "Starbucks expansion",
            "You've Got Mail (The big box store vs. the indie shop)",
            "Sex and the City (The cupcake trend begins)"
          ]
        },
        "2000": {
          "salience_share": 2.4,
          "description": "David Brooks publishes *Bobos in Paradise* (+0.3%). He identifies the 'Bourgeois Bohemian'—the wealthy who consume 'ethical' and 'rustic' goods to assuage guilt. This is the demographic that will drive the cluster. *High Fidelity* romanticizes the clutter of the record store, the pre-gentrified 'authentic' male space.",
          "key_manifestations": [
            "Bobos in Paradise (Book)",
            "High Fidelity (Film)",
            "Gilmore Girls (The idealized small town)",
            "Design Within Reach (Catalog growth)"
          ]
        },
        "2001": {
          "salience_share": 2.8,
          "description": "The Apple Store opens (Cluster 13) (+0.4%). It introduces 'white minimalism' as the signifier of high tech/high status. *Amélie* popularizes a whimsical, saturated, 'curated' view of city life. The 'Creative Class' theory (Richard Florida) tells cities that to succeed, they must attract gay people and artists with bike lanes and coffee.",
          "key_manifestations": [
            "The Rise of the Creative Class (Book)",
            "Apple Store",
            "Amélie (Aesthetic impact)",
            "Monocle Magazine (Concept phase)"
          ]
        },
        "2002": {
          "salience_share": 3.1,
          "description": "Vice Magazine moves to Williamsburg (+0.5%). The 'Hipster' aesthetic finds its Rome. It is initially trashy (trucker hats), but the real estate development follows. *Minority Report* shows a future of sleek, glass surfaces, influencing the 'modern' look. 'Blue Bottle Coffee' is founded (Oakland), starting the Third Wave—coffee as wine.",
          "key_manifestations": [
            "Blue Bottle Coffee (Founding)",
            "Vice Magazine NYC HQ",
            "Lost in Translation (The lonely luxury hotel)",
            "Adaptation (The orchid as fetish object)"
          ]
        },
        "2003": {
          "salience_share": 3.5,
          "description": "The 'Cupcake' trend expands (+0.3%). It is 'Infantilized Luxury.' *Queer Eye* teaches straight men that design matters—'feng shui' enters the vernacular. Design blogs (Apartment Therapy) begin to launch, democratizing interior design advice. The 'Loft' becomes the aspirational living space.",
          "key_manifestations": [
            "Queer Eye (Interior design segment)",
            "Apartment Therapy (Launch)",
            "School of Rock (The gentrification of rock)",
            "Elf (The handmade aesthetic)"
          ]
        },
        "2004": {
          "salience_share": 3.8,
          "description": "*Garden State* curates the 'Indie' lifestyle (+0.4%). The soundtrack, the sidecar motorcycle, the quirk. It is a mood board for a generation. Urban Outfitters expands, selling 'Urban' grit to suburban malls. The 'Vintage' t-shirt is now a mass-produced item.",
          "key_manifestations": [
            "Garden State (Film)",
            "Urban Outfitters (Expansion)",
            "Eternal Sunshine (The crumbling house)",
            "Sideways (The wine tasting room aesthetic)"
          ]
        },
        "2005": {
          "salience_share": 4.2,
          "description": "Etsy launches (Cluster 19) (+0.5%). 'Handmade' becomes a keyword. The aesthetic shifts from 'Sleek' to 'Craft.' Everything must look like it was made by a lumberjack with a graphic design degree. American Apparel makes 'Ethical Sweatshop' aesthetics cool—basic cotton, bright lights, unretouched photos.",
          "key_manifestations": [
            "Etsy (Launch)",
            "American Apparel (Peak Cool)",
            "Broken Flowers (The minimalist home)",
            "Everything is Illuminated (The rustic old country)"
          ]
        },
        "2006": {
          "salience_share": 4.8,
          "description": "The 'Fixed Gear Bike' becomes the symbol of the urban pioneer (+0.6%). It signifies 'I am authentic/dangerous' but usually costs $1000. *Marie Antoinette* (Coppola) is an orgy of pastel aesthetics, influencing the 'Macaron' trend. The 'Speakeasy' bar trend begins (PDT in NYC)—exclusivity through hidden doors.",
          "key_manifestations": [
            "Fixed Gear Bikes (Trend)",
            "Marie Antoinette (Film)",
            "PDT (NYC Speakeasy)",
            "Top Chef (The open kitchen)"
          ]
        },
        "2007": {
          "salience_share": 5.2,
          "description": "*Mad Men* premieres (+0.7%). Mid-Century Modern (MCM) explodes. Everyone wants a Eames chair and a teak sideboard. 'Design Within Reach' becomes the holy grail. The aesthetic is 'Clean, Masculine, Nostalgic.' The iPhone encourages the documentation of these spaces.",
          "key_manifestations": [
            "Mad Men (MCM Revival)",
            "Design Within Reach (Growth)",
            "Ratatouille (The rustic French kitchen)",
            "The Darjeeling Limited (Wes Anderson travel porn)"
          ]
        },
        "2008": {
          "salience_share": 6.1,
          "description": "The Recession drives the 'Authentic/Heritage' look (+1.3%). We can't afford 'New,' so we buy 'Old.' Reclaimed wood, Edison bulbs, exposed brick. It is the 'Industrial Chic' restaurant. Waiters wear leather aprons. It is a simulation of the manual labor that the economy has shed. *Wall-E* critiques the sterile spaceship, yearning for the trash-filled earth.",
          "key_manifestations": [
            "Edison Bulbs (Trend)",
            "Reclaimed Wood Interiors",
            "Wendy and Lucy (The rail yard aesthetic)",
            "Twilight (The Pacific Northwest gloom)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "Airbnb launches (gains traction) (+0.6%). It turns every home into a hotel. To get bookings, hosts begin to design for the photo. The 'Airbnb Aesthetic' is born: neutral tones, fiddle leaf figs, local art. *500 Days of Summer* fetishizes the architecture of Los Angeles and the 'Vintage' wardrobe.",
          "key_manifestations": [
            "Airbnb (Growth)",
            "500 Days of Summer (Film)",
            "Ace Hotel (The lobby as coworking space)",
            "Fantastic Mr. Fox (The corduroy suit)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "Instagram launches (+0.8%). The 'Latte Art' photo becomes the global handshake. 'Portlandia' filming begins, documenting the 'Put a Bird on It' era. Stumptown Coffee is bought by private equity (later), but the model is replicated globally. The 'Global Brooklyn' is forming—a specific zone in every major city that looks exactly the same.",
          "key_manifestations": [
            "Instagram (Aesthetic homogenization)",
            "Portlandia (Satire of the aesthetic)",
            "The Social Network (The startup office)",
            "Tiny House Movement (Beginnings)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "*Kinfolk* magazine launches (+1.2%). This is the bible. It champions 'Slow Living'—pictures of communal tables, linen, cutting bread, fog. It is a reaction against digital speed, but consumed entirely digitally (Pinterest). The 'Mason Jar' is the chalice of the movement. *Bon Iver* provides the soundtrack.",
          "key_manifestations": [
            "Kinfolk Magazine (Launch)",
            "Pinterest (Curating the dream life)",
            "Bon Iver (The cabin aesthetic)",
            "Mumford & Sons (The vest and banjo look)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "The 'Succulent' and 'House Plant' craze begins (+0.5%). Nature is brought inside as decor. 'The High Line' in NYC becomes the model for 'Green Gentrification'—turning industrial ruins into expensive parks. *Girls* (TV) shows the gritty-but-expensive reality of Brooklyn apartment living.",
          "key_manifestations": [
            "The High Line (Cultural impact)",
            "Succulents (Trend)",
            "Girls (Greenpoint aesthetic)",
            "Moonrise Kingdom (The curated camp)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "The 'Cronut' (Cluster 19) exemplifies the 'Viral Food' trend (+0.4%). Food must be photogenic (The Rainbow Bagel follows). The 'Open Plan Office' becomes standard, mimicking the coffee shop. *Her* depicts a future LA that is soft, pastel, and devoid of cars—the ultimate gentrified utopia.",
          "key_manifestations": [
            "The Cronut (Viral line standing)",
            "Her (Future aesthetics)",
            "WeWork (Expansion of the aesthetic to work)",
            "The Great Gatsby (The party as spectacle)"
          ]
        },
        "2014": {
          "salience_share": 8.9,
          "description": "The 'Flat White' enters the US lexicon (Starbucks adds it) (-0.4% cool, +0.6% ubiquity). The specific coffee culture of Australia/New Zealand conquers the world. 'Normcore' (Cluster 11) influences interiors—unbranded, simple, 'generic' design. The 'Aesop' soap bottle becomes a status symbol in bathrooms.",
          "key_manifestations": [
            "The Flat White (Global adoption)",
            "Aesop Hand Soap (Status symbol)",
            "Grand Budapest Hotel (Peak Anderson aesthetic)",
            "Chef (The food truck as authentic freedom)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "The 'Millennial Pink' color trend emerges (+0.6%). It is soft, gender-neutral, and looks great on screens. 'KonMari' (The Life-Changing Magic of Tidying Up) becomes a bestseller. Minimalism is a moral virtue. We purge our possessions to make room for the 'Experience.' The 'Avocado Toast' controversy—luxury brunch blamed for lack of home ownership.",
          "key_manifestations": [
            "Millennial Pink (Color Trend)",
            "Marie Kondo (Book)",
            "Avocado Toast Controversy",
            "The Intern (The startup loft)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "The Verge publishes 'Welcome to AirSpace' (+0.7%). It diagnoses the phenomenon: the harmonization of global taste. Fiddle leaf fig + Edison bulb + subway tile = profit. The aesthetic is now fully algorithmic. *La La Land* celebrates a sanitized, colorful, nostalgic version of LA. The 'Gentrification' cluster has paved over the world.",
          "key_manifestations": [
            "AirSpace (Concept/Article)",
            "La La Land (Film)",
            "Pokemon Go (Augmented reality overlays the city)",
            "Atlanta (Critique of the gentrifier)"
          ]
        }
      }
    },
    "29_the_supernatural_romance_and_taming_the_monster": {
      "name": "The Supernatural Romance and Taming the Monster",
      "description": "This cluster explores the massive 2000s phenomenon of domesticating horror tropes for a female-gaze romance audience. It tracks the shift from the 'Slayer' (Buffy) to the 'Lover' (Bella). It analyzes the 'Vampire' not as a predator, but as the ultimate 'Bad Boy' project—dangerous, ancient, but willing to wait until marriage. It encompasses *Twilight*, *True Blood*, and *The Vampire Diaries*, exploring themes of abstinence, purity culture, and the desire for a love that transcends death in a secular age.",
      "trajectory": {
        "2002": {
          "salience_share": 2.1,
          "description": "Variance holds steady. *Star Wars: Attack of the Clones* features the Anakin/Padme romance, emphasizing the 'Forbidden Love' narrative that becomes central to the genre. The 'Magical Boy' trope continues in *Harry Potter*, but it is pre-sexual and focused on friendship, leaving the 'Dark Romance' lane open for exploitation. *The Ring* brings J-Horror to the US, reminding audiences that the supernatural can still be purely malevolent, creating a stark contrast for the romance to come.",
          "key_manifestations": [
            "Star Wars: Attack of the Clones (Forbidden Love)",
            "The Ring (Pure Horror)",
            "Tuck Everlasting (Immortality as a burden)",
            "Buffy the Vampire Slayer (Season 6 - The darkness of adulthood)"
          ]
        },
        "2003": {
          "salience_share": 2.8,
          "description": "*Underworld* releases (+0.7%). It is *Romeo and Juliet* with vampires and werewolves in leather trench coats. It sexualizes the monster in a sleek, action-hero format. *Pirates of the Caribbean* features a cursed (undead) crew, but frames the supernatural as a swashbuckling adventure. The 'Goth' aesthetic is being repackaged for the multiplex.",
          "key_manifestations": [
            "Underworld (Film)",
            "Pirates of the Caribbean (The curse)",
            "Big Fish (Romantic mythology)",
            "Haunted Mansion (Disneyfication of ghosts)"
          ]
        },
        "2004": {
          "salience_share": 3.2,
          "description": "*The Phantom of the Opera* (Film) releases (+0.4%). It is the classic 'Beauty and the Beast' archetype—the seduction of the dangerous, disfigured genius. *Hellboy* presents the demon as a working-class hero with a romantic heart (dating a pyrokinetic). The idea that the 'Monster' is the most sensitive guy in the room is taking root.",
          "key_manifestations": [
            "The Phantom of the Opera (Film)",
            "Hellboy (Film)",
            "Van Helsing (Action-horror pastiche)",
            "Eternal Sunshine (Romance as sci-fi tragedy)"
          ]
        },
        "2005": {
          "salience_share": 4.5,
          "description": "Stephenie Meyer publishes *Twilight* (+1.3%). The Catalyst. It strips the vampire of its horror (sunlight makes them sparkle, not burn) and recodes it as the ultimate Mormon purity fantasy. Edward Cullen is dangerous not because he will kill you, but because he wants to sex you too much. It taps into a primal teen desire for a love that is literally life-or-death.",
          "key_manifestations": [
            "Twilight (Book)",
            "Corpse Bride (Romance beyond death)",
            "Supernatural (TV Series Premiere - The brother bond)",
            "King Kong (The tragedy of the beast)"
          ]
        },
        "2006": {
          "salience_share": 4.9,
          "description": "*New Moon* (Book) releases (+0.4%). The 'Team Edward vs. Team Jacob' dynamic begins. It introduces the 'Werewolf' as the warm, earthy alternative to the cold, marble Vampire. *Blood and Chocolate* attempts to do for werewolves what *Twilight* did for vampires, but fails to reach the same mass. The 'Paranormal Romance' section in bookstores expands rapidly.",
          "key_manifestations": [
            "New Moon (Book)",
            "Blood and Chocolate (Film)",
            "Pan's Labyrinth (The monster as ambiguous guide)",
            "The Covenant (Hot warlocks)"
          ]
        },
        "2007": {
          "salience_share": 5.5,
          "description": "*Eclipse* (Book) releases (+0.6%). The hype is building towards the film adaptation. *Harry Potter* ends, leaving a massive vacuum for fandom energy. *Enchanted* deconstructs the Disney princess tropes, showing a cultural awareness of the artificiality of 'True Love,' just as *Twilight* doubles down on it without irony.",
          "key_manifestations": [
            "Eclipse (Book)",
            "Stardust (Romantic fantasy)",
            "Ghost Rider (The curse as superpower)",
            "Pushing Daisies (Romance with the dead)"
          ]
        },
        "2008": {
          "salience_share": 8.5,
          "description": "The *Twilight* movie releases (+2.0%). It is a cultural singularity. Robert Pattinson becomes the face of the era. Simultaneously, *True Blood* premieres on HBO, offering the R-rated, Southern Gothic version of the same trope: 'Vampire Rights' as a metaphor for gay rights, and vampire sex as a metaphor for drug addiction (V juice).",
          "key_manifestations": [
            "Twilight (Film)",
            "True Blood (TV Series Premiere)",
            "Let the Right One In (The dark, serious counter-point)",
            "Breaking Dawn (Book)"
          ]
        },
        "2009": {
          "salience_share": 9.2,
          "description": "*The Vampire Diaries* premieres on CW (+0.7%). It perfects the TV formula: sexy teens, endless lore, and love triangles. *New Moon* (Film) breaks box office records. The 'Supernatural Romance' is now the dominant form of teen media. The 'Monster' has been fully domesticated; he attends high school and drives a Volvo.",
          "key_manifestations": [
            "The Vampire Diaries (TV Series Premiere)",
            "The Twilight Saga: New Moon (Film)",
            "Jennifer's Body (The monster as feminist revenge)",
            "The Lovely Bones (Ghost perspective)"
          ]
        },
        "2010": {
          "salience_share": 8.8,
          "description": "*Eclipse* (Film) releases (-0.4%). Saturation point. *The Walking Dead* premieres, reintroducing the Zombie as a mindless, un-sexy threat (Cluster 14), signaling a shift in horror back to 'Survival.' However, *Teen Wolf* (TV) reboots the 80s comedy as a brooding, sexy supernatural drama, proving the formula still has legs.",
          "key_manifestations": [
            "The Twilight Saga: Eclipse (Film)",
            "Teen Wolf (TV Series Premiere)",
            "The Walking Dead (The return of the ugly monster)",
            "Black Swan (Transformation horror)"
          ]
        },
        "2011": {
          "salience_share": 8.2,
          "description": "*Breaking Dawn - Part 1* (+0.4% box office, -1.0% cultural respect). The wedding and the 'demon baby' birth scene push the purity metaphor to its grotesque limit. *American Horror Story* premieres, remixing horror tropes with campy sexuality, but moving away from the earnest romance of *Twilight* toward something more cynical and anthology-based.",
          "key_manifestations": [
            "The Twilight Saga: Breaking Dawn – Part 1",
            "American Horror Story (Murder House)",
            "Fright Night (Remake - The vampire as predator again)",
            "Red Riding Hood (The fairy tale as sexy thriller)"
          ]
        },
        "2012": {
          "salience_share": 7.5,
          "description": "*Breaking Dawn - Part 2* ends the franchise (-0.7%). The era of the Sparkly Vampire is over. *Fifty Shades of Grey* (originally *Twilight* fan fiction) is published, stripping away the supernatural elements to focus entirely on the BDSM power dynamic. The 'Monster' is replaced by the 'Billionaire.'",
          "key_manifestations": [
            "The Twilight Saga: Breaking Dawn – Part 2",
            "Fifty Shades of Grey (Book - Fanfic origin)",
            "Hotel Transylvania (The monster as dad)",
            "Dark Shadows (Tim Burton's flop satire)"
          ]
        },
        "2013": {
          "salience_share": 6.8,
          "description": "*Warm Bodies* releases (-0.7%). It is a rom-com with a zombie. It explicitly deconstructs the trope: love cures the zombie. It signals that the genre has entered its self-parody phase. *The Originals* spins off from *Vampire Diaries*, keeping the faithful engaged, but the mainstream has moved on to *The Hunger Games* (Dystopia).",
          "key_manifestations": [
            "Warm Bodies (Film)",
            "The Originals (TV Series Premiere)",
            "Beautiful Creatures (Failed franchise attempt)",
            "Hemlock Grove (Netflix horror)"
          ]
        },
        "2014": {
          "salience_share": 6.1,
          "description": "Variance declines (-0.7%). The 'YA Dystopia' (Cluster 20) has fully cannibalized the 'YA Supernatural' audience. Kids want revolution, not eternal romance. *Penny Dreadful* brings the monsters back to their Victorian horror roots—literary, scary, and adult. The 'Sexy Vampire' is now a cliché used in comedy (*What We Do in the Shadows*).",
          "key_manifestations": [
            "Penny Dreadful (TV Series Premiere)",
            "What We Do in the Shadows (Film)",
            "Vampire Academy (Flop)",
            "True Blood (Finale)"
          ]
        },
        "2015": {
          "salience_share": 5.5,
          "description": "*Crimson Peak* attempts a Gothic Romance revival (-0.6%). It is beautiful but fails to ignite a trend. The audience has matured. *iZombie* turns the zombie trope into a police procedural. The supernatural is now just a mechanic for storytelling, not the source of awe or romance.",
          "key_manifestations": [
            "Crimson Peak (Film)",
            "iZombie (TV Series Premiere)",
            "The Witch (Folk horror return)",
            "Goosebumps (Nostalgia meta-movie)"
          ]
        },
        "2016": {
          "salience_share": 4.8,
          "description": "The cluster concludes with *The Love Witch* (+0.3% aesthetic impact). It is a retro-pastiche that critiques the very idea of love spells and female desperation. *Stranger Things* uses the 'Monster' (Demogorgon) purely as a threat, with zero romantic potential. The 2000s obsession with 'taming the beast' is dead; the beast is back to being a beast.",
          "key_manifestations": [
            "The Love Witch (Film)",
            "Stranger Things (The Demogorgon)",
            "The Vampire Diaries (Final Season begins)",
            "Preacher (TV Series - Supernatural grit)"
          ]
        }
      }
    },
    "30_pop_feminism_and_the_girlboss_archetype": {
      "name": "Pop Feminism and the Girlboss Archetype",
      "description": "This cluster traces the evolution of mainstream feminism from the 'Girl Power' of the late 90s to the corporate 'Lean In' ethos of the 2010s. It maps the shift from 'Post-Feminism' (the idea that equality was solved, so we can just have fun) to 'Marketplace Feminism' (empowerment as a brand strategy). It explores the rise of the 'Girlboss'—the confident, successful woman who smashes the glass ceiling while upholding the capitalist structure—and the eventual cracks that form in this glossy, exclusionary narrative.",
      "trajectory": {
        "1999": {
          "salience_share": 3.5,
          "description": "*Sex and the City* is the bible (+0.8%). It posits that liberation equals sexual autonomy and financial independence (buying shoes). It is 'Lifestyle Feminism.' The Spice Girls' 'Girl Power' is fading but has left a residue of cheerful, apolitical solidarity. *Election* (Tracy Flick) presents the ambitious female as a terrifying, unstoppable force.",
          "key_manifestations": [
            "Sex and the City (TV Series)",
            "Election (Film)",
            "TLC - FanMail (Scrub anti-anthem)",
            "Buffy the Vampire Slayer (The chosen one)"
          ]
        },
        "2000": {
          "salience_share": 3.8,
          "description": "*Charlie's Angels* (Film) releases (+0.3%). It is 'Kung Fu Barbie' feminism. Women kicking ass in heels, commanded by a hidden man. It is fun, campy, and empowering in a superficial sense. *Erin Brockovich* offers a grittier alternative: the single mom using soft skills (empathy, dress) to defeat a corporation.",
          "key_manifestations": [
            "Charlie's Angels (Film)",
            "Erin Brockovich (Film)",
            "Destiny's Child 'Independent Women' (Anthem)",
            "Dark Angel (TV Series)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "*Legally Blonde* releases (+0.7%). It is a foundational text. It argues that femininity (pink, fashion) and intellectual competence are not mutually exclusive. It reclaims the 'Bimbo' aesthetic. *Lara Croft: Tomb Raider* puts a female lead in the blockbuster action role, though she is heavily sexualized for the male gaze.",
          "key_manifestations": [
            "Legally Blonde (Film)",
            "Lara Croft: Tomb Raider (Film)",
            "Bridget Jones's Diary (The anxiety of the modern woman)",
            "Moulin Rouge! (The courtesan's agency)"
          ]
        },
        "2002": {
          "salience_share": 4.2,
          "description": "Variance dips (-0.3%). Pop culture returns to a more aggressive, male-centric tone (Eminem, Garage Rock). However, *Bend It Like Beckham* explores the tension between traditional gender roles and female ambition in sports. Christina Aguilera's 'Dirrty' sparks a debate about sexual agency vs. exploitation.",
          "key_manifestations": [
            "Bend It Like Beckham (Film)",
            "Christina Aguilera 'Dirrty' (Video)",
            "The Hours (The stifling of female potential)",
            "My Big Fat Greek Wedding (Marriage as inevitability)"
          ]
        },
        "2003": {
          "salience_share": 4.6,
          "description": "*Kill Bill Vol. 1* releases (+0.4%). The Bride is a primal force of vengeance. It is violent, physical female agency. *Lost in Translation* depicts a quiet, intellectual female ennui. *The Simple Life* (Paris Hilton) presents the 'ditsy heiress' trope that dominates the tabloids, acting as a foil to the feminist conversation.",
          "key_manifestations": [
            "Kill Bill Vol. 1 (Film)",
            "Thirteen (The terror of teenage girlhood)",
            "Mona Lisa Smile (50s feminism revisited)",
            "Beyoncé 'Crazy in Love' (Solo breakout)"
          ]
        },
        "2004": {
          "salience_share": 5.2,
          "description": "*Mean Girls* releases (+0.6%). It deconstructs 'Girl World' as a toxic, politicking environment. It argues that women are their own worst enemies. *Desperate Housewives* premieres, focusing on the dissatisfaction of the suburban dream. The Janet Jackson Super Bowl incident highlights the double standard of female nudity.",
          "key_manifestations": [
            "Mean Girls (Film)",
            "Desperate Housewives (Premiere)",
            "Janet Jackson Super Bowl Incident",
            "Million Dollar Baby (Female physical power/tragedy)"
          ]
        },
        "2005": {
          "salience_share": 4.9,
          "description": "*Grey's Anatomy* premieres (+0.5%). Shonda Rhimes creates a world where female surgeons are the best in the field, normalizing the 'High Powered Career Woman' on TV. *The Devil Wears Prada* (Book) creates the archetype of the 'Dragon Lady' boss—successful but monstrous. We admire her power but fear her lack of warmth.",
          "key_manifestations": [
            "Grey's Anatomy (TV Series Premiere)",
            "The Devil Wears Prada (Book)",
            "Weeds (The suburban drug lord mom)",
            "North Country (Sexual harassment lawsuit drama)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "*The Devil Wears Prada* (Film) releases (+0.6%). Miranda Priestly becomes an icon. The film subtly defends her: 'If she were a man, nobody would notice.' *30 Rock* premieres. Liz Lemon (Tina Fey) creates the 'Beta Female'—successful, funny, but messy and eating night cheese. She de-glamorizes the Girlboss.",
          "key_manifestations": [
            "The Devil Wears Prada (Film)",
            "30 Rock (TV Series Premiere)",
            "Dixie Chicks 'Not Ready to Make Nice'",
            "Ugly Betty (The competent outsider)"
          ]
        },
        "2007": {
          "salience_share": 5.8,
          "description": "Britney Spears' breakdown becomes a global spectator sport (-0.4%). It exposes the misogyny of the media. *Mad Men* premieres, highlighting the overt sexism of the 60s (Peggy Olson's rise), which allows viewers to feel superior while ignoring current inequalities. *Enchanted* gives the princess agency.",
          "key_manifestations": [
            "Britney Spears Breakdown",
            "Mad Men (Peggy Olson arc)",
            "Juno (Reproductive choice without shame)",
            "Gossip Girl (Blair Waldorf - the teen CEO)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "Hillary Clinton runs for President; Sarah Palin runs for VP (+1.3%). The 'Glass Ceiling' is the central conversation. The sexist media coverage is rampant. Tina Fey's Palin impression on SNL becomes a defining cultural moment. *Sex and the City* (Movie) is a box office hit but criticized for its shallow materialism.",
          "key_manifestations": [
            "Hillary Clinton 2008 Campaign",
            "Sarah Palin VP Run",
            "Tina Fey on SNL",
            "Twilight (The passive heroine backlash)"
          ]
        },
        "2009": {
          "salience_share": 6.9,
          "description": "*Parks and Recreation* premieres (+0.4%). Leslie Knope is the 'Good Girlboss'—ambitious, feminist, and kind. She rehabilitates the image of the female politician. Lady Gaga (Cluster 16) projects a 'Monster' femininity—aggressive, weird, and in control. The 'Nasty Gal' vintage store launches (Sophia Amoruso), creating the blueprint for the hipster CEO.",
          "key_manifestations": [
            "Parks and Recreation (TV Series)",
            "Lady Gaga (The Fame Monster)",
            "The Good Wife (The political spouse finds agency)",
            "Precious (Intersectionality enters the chat)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "Nicki Minaj's verse on 'Monster' (+0.5%). She out-raps the men. It signals a new era of female dominance in Hip-Hop. *Easy A* reclaims the 'Scarlet Letter,' turning slut-shaming into a power play. The 'Lean In' concept is brewing in Silicon Valley talks.",
          "key_manifestations": [
            "Nicki Minaj 'Monster' Verse",
            "Easy A (Film)",
            "Black Swan (The destruction of the girl)",
            "Robyn 'Body Talk' (Independent female pop)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "*Bridesmaids* releases (+0.8%). It proves 'Women are funny' at the box office. It destroys the 'Chick Flick' ghetto. *Girls* (production) and *2 Broke Girls* signal a shift to the 'Struggling Twentysomething' narrative. Representation is expanding, but still very white.",
          "key_manifestations": [
            "Bridesmaids (Film)",
            "New Girl (The 'Adorkable' trend)",
            "The Help (White savior controversy)",
            "Run the World (Girls) by Beyoncé"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "*The Hunger Games* releases (+0.7%). Katniss Everdeen is the action hero of the decade. No romance plot is needed (though present). *Scandal* premieres—Olivia Pope is the ultimate 'Fixer.' A black woman holding the most power in DC. *Girls* premieres, sparking a massive discourse on privilege and nepotism.",
          "key_manifestations": [
            "The Hunger Games (Film)",
            "Scandal (TV Series Premiere)",
            "Girls (TV Series Premiere)",
            "Brave (Pixar's first female lead)"
          ]
        },
        "2013": {
          "salience_share": 9.2,
          "description": "Sheryl Sandberg publishes *Lean In* (+1.2%). It is the manifesto of Corporate Feminism. 'Sit at the table.' It puts the onus on women to try harder. Beyoncé samples Chimamanda Ngozi Adichie on 'Flawless,' putting the word 'Feminist' in giant lights on stage. *Frozen* subverts the 'True Love's Kiss' trope—the sister saves the day.",
          "key_manifestations": [
            "Lean In (Book)",
            "Beyoncé (Self-Titled Album)",
            "Frozen (Film)",
            "Orange Is the New Black (Diverse female stories)"
          ]
        },
        "2014": {
          "salience_share": 9.8,
          "description": "Sophia Amoruso publishes *#GIRLBOSS* (+0.8%). The archetype is named. It mixes punk rock attitude with venture capital. Taylor Swift's 'squad' weaponizes female friendship as a marketing tool. Gamergate (Cluster 7) attacks women in tech, creating a massive counter-mobilization of feminist support.",
          "key_manifestations": [
            "#GIRLBOSS (Book)",
            "Taylor Swift '1989' Era",
            "Malala Yousafzai (Nobel Prize)",
            "Broad City (Stoner feminism)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "*Mad Max: Fury Road* releases (+0.6%). Furiosa steals the movie from Max. It is a radical ecofeminist action film. 'The Future is Female' t-shirts appear everywhere. The 'Girlboss' aesthetic begins to crack as stories of toxic workplaces at female-led startups emerge. The 'White Feminism' critique gains traction.",
          "key_manifestations": [
            "Mad Max: Fury Road (Film)",
            "Star Wars: The Force Awakens (Rey)",
            "Jessica Jones (Survivor narrative)",
            "Inside Out (Female emotions as headquarters)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "The Cluster culminates in the Hillary Clinton campaign (+0.8%). The 'Pantsuit Nation.' The expectation of the first female president. The *Ghostbusters* reboot becomes a proxy war. Trump's victory acts as a crushing blow to the 'Lean In' narrative—proving that competence does not beat populism/misogyny. It sets the stage for the Women's March and the death of the 'Girlboss' myth.",
          "key_manifestations": [
            "Hillary Clinton Nomination",
            "Ghostbusters (Reboot)",
            "Lemonade (Black female power)",
            "Arrival (Female intellectual savior)"
          ]
        }
      }
    },
    "31_visceral_horror_and_the_aesthetics_of_pain": {
      "name": "Visceral Horror and the Aesthetics of Pain",
      "description": "This cluster maps the evolution of horror cinema as a mirror for the War on Terror's brutality. It moves from the supernatural/meta-horror of the 90s (Scream) to the rise of 'Torture Porn' (Saw, Hostel) in the mid-2000s—a subgenre obsessed with bodily destruction, helplessness, and the moral vacuum of survival. It argues that images of Abu Ghraib and Guantanamo created a cultural appetite for narratives where the human body is reduced to meat. By the 2010s, this visceral cruelty morphed into 'Elevated Horror,' where the trauma became psychological (The Babadook), reflecting a shift from external physical threats to internal mental health crises.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "The dominant horror mode is 'Meta-Slasher' or 'Supernatural Thriller' (+0.3%). *The Sixth Sense* and *The Blair Witch Project* rely on what you *don't* see. The violence is relatively bloodless. However, *Audition* (Japan) creates a ripple in the underground, introducing a level of clinical, slow-burn torture that prefigures the coming decade's obsession with pain.",
          "key_manifestations": [
            "Audition (Film)",
            "The Sixth Sense (Psychological horror)",
            "The Blair Witch Project (Suggested horror)",
            "Idle Hands (Horror comedy)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "*American Psycho* satirizes slasher violence, treating it as a yuppie lifestyle accessory (+0.3%). *Final Destination* treats death as a Rube Goldberg machine—the body is frail and easily destroyed by the environment. It removes the 'Killer' and replaces it with 'Entropy.'",
          "key_manifestations": [
            "American Psycho (Film)",
            "Final Destination (Film)",
            "What Lies Beneath (Hitchcockian revival)",
            "Battle Royale (The Japanese influence on visceral violence)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "The 9/11 attacks effectively kill the 'fun' disaster movie and the ironic slasher (-0.4%). Reality is too horrific. *The Others* and *The Devil's Backbone* offer 'Gothic' retreats—ghost stories about grief and war. The culture is not yet ready to process the physical trauma of the event directly.",
          "key_manifestations": [
            "The Others (Film)",
            "Jeepers Creepers (Monster movie)",
            "The Devil's Backbone (War trauma as ghost)",
            "Hannibal (The dinner scene - glimmers of the grotesque)"
          ]
        },
        "2002": {
          "salience_share": 2.2,
          "description": "*28 Days Later* reinvents the zombie as the 'Infected' (+0.5%). They are fast, angry, and biological. It captures the rage of the era. *The Ring* brings J-Horror mainstream, focusing on dread and distorted imagery rather than gore. *Cabin Fever* (Eli Roth) introduces the 'Body Horror' element—flesh rotting while the characters are still alive.",
          "key_manifestations": [
            "28 Days Later (Film)",
            "The Ring (Film)",
            "Cabin Fever (Film)",
            "Resident Evil (The gamification of violence)"
          ]
        },
        "2003": {
          "salience_share": 2.8,
          "description": "The 'New French Extremity' (High Tension) begins to impact the global scene (+0.4%). It combines art-house cinematography with extreme brutality. *The Texas Chainsaw Massacre* remake signals a return to the gritty, sweaty, 70s nihilism. The polished sheen of 90s horror is being stripped away.",
          "key_manifestations": [
            "High Tension (Haute Tension) (Film)",
            "The Texas Chainsaw Massacre (Remake)",
            "House of 1000 Corpses (Rob Zombie's grindhouse revival)",
            "Freddy vs. Jason (The end of the 80s icons)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*Saw* releases (+1.7%). The Catalyst. It costs nothing to make and grosses millions. It introduces the 'Trap'—a mechanical moral test involving self-mutilation. It resonates with a culture navigating a morally gray war. The villain (Jigsaw) claims to be teaching a lesson, mirroring the 'tough love' rhetoric of the security state.",
          "key_manifestations": [
            "Saw (Film)",
            "Dawn of the Dead (Snyder Remake - Fast zombies)",
            "The Grudge (J-Horror continues)",
            "Shaun of the Dead (The comedic response)"
          ]
        },
        "2005": {
          "salience_share": 5.2,
          "description": "*Hostel* releases (+0.7%). 'Torture Porn' is named. It taps into American xenophobia—the fear of traveling abroad and being sold like meat. It is the direct cinematic processing of the Abu Ghraib photos. *The Descent* offers a claustrophobic, primal survival horror where women are stripped of civilization and forced to become savages.",
          "key_manifestations": [
            "Hostel (Film)",
            "The Descent (Film)",
            "Wolf Creek (Australian outback nihilism)",
            "Saw II (The franchise institutionalized)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "Variance holds (+0.3%). *Saw III* features brain surgery. The violence is becoming medical and forensic. *The Hills Have Eyes* remake turns the nuclear family against mutants in a brutal desert war—a clear allegory for the Iraq insurgency. The audience is desensitized; the gore must escalate to get a reaction.",
          "key_manifestations": [
            "Saw III (Film)",
            "The Hills Have Eyes (Remake)",
            "Silent Hill (The aesthetic of decay)",
            "Pan's Labyrinth (The Pale Man - fairy tale horror)"
          ]
        },
        "2007": {
          "salience_share": 5.1,
          "description": "Fatigue sets in (-0.4%). *Hostel: Part II* and *Captivity* face backlash. The term 'Torture Porn' becomes a pejorative. *Paranormal Activity* (festival circuit) suggests a pivot back to 'suggested' horror. *Inside* (French) pushes the violence to the absolute limit (fetal extraction), marking the artistic peak/end of the extremity movement.",
          "key_manifestations": [
            "Inside (À l'intérieur) (Film)",
            "Hostel: Part II (Film)",
            "[REC] (Found footage revival)",
            "The Mist (The nihilistic ending)"
          ]
        },
        "2008": {
          "salience_share": 5.8,
          "description": "*Martyrs* (France) releases (+0.6% niche, influential). It turns torture into a metaphysical quest. It is almost unwatchable, yet deeply philosophical. It argues that pain is the only path to truth in a secular world. *Cloverfield* brings the 9/11 imagery (dust clouds, collapsing buildings) to the monster movie.",
          "key_manifestations": [
            "Martyrs (Film)",
            "Cloverfield (Film)",
            "The Strangers (Home invasion nihilism)",
            "Let the Right One In (Romantic horror)"
          ]
        },
        "2009": {
          "salience_share": 6.2,
          "description": "*Paranormal Activity* wide release (+0.9%). It kills Torture Porn. A static camera in a bedroom is scarier than a buzzsaw. It costs $15,000. It shifts the fear from 'Physical Mutilation' to 'Domestic Invasion.' *The Human Centipede* releases, becoming a meme of disgust rather than a scary film—the genre is becoming self-parody.",
          "key_manifestations": [
            "Paranormal Activity (Wide Release)",
            "The Human Centipede (Cultural meme)",
            "Drag Me to Hell (Sam Raimi's fun horror)",
            "Zombieland (Horror as action-comedy)"
          ]
        },
        "2010": {
          "salience_share": 6.5,
          "description": "*Insidious* releases (+0.4%). It brings back the 'Jump Scare' and the funhouse aesthetic. Horror becomes PG-13 again. It is safe, loud, and profitable. *Black Swan* uses body horror (peeling skin) as a metaphor for perfectionism, bridging the gap to 'Elevated Horror.'",
          "key_manifestations": [
            "Insidious (Film)",
            "Black Swan (Psychological body horror)",
            "Tucker & Dale vs. Evil (Deconstruction)",
            "I Saw the Devil (Korean revenge extremity)"
          ]
        },
        "2011": {
          "salience_share": 6.1,
          "description": "*The Cabin in the Woods* (filmed earlier, released 2012, buzz building) represents the meta-commentary on the genre (-0.4% earnestness). *You're Next* deconstructs the home invasion. The genre is in a reflexive phase, analyzing its own tropes. *American Horror Story* brings the grotesque to TV.",
          "key_manifestations": [
            "You're Next (Film)",
            "American Horror Story (Murder House)",
            "Contagion (Medical horror)",
            "The Thing (Prequel - CGI backlash)"
          ]
        },
        "2012": {
          "salience_share": 5.8,
          "description": "*Sinister* combines found footage with supernatural boogeyman (+0.3%). It uses 'Super 8' home movies to depict family annihilation, linking the 'Torture Porn' aesthetic of the past to the 'Haunting' aesthetic of the present. *The V/H/S* anthology captures the fragmentation of the digital era.",
          "key_manifestations": [
            "Sinister (Film)",
            "The Cabin in the Woods (Release)",
            "V/H/S (Anthology)",
            "Prometheus (The body horror of creation)"
          ]
        },
        "2013": {
          "salience_share": 6.5,
          "description": "*The Conjuring* releases (+0.7%). It launches the MCU of Horror. It is retro (70s setting), Christian-centric, and largely bloodless. It validates faith as a weapon against evil. *The Purge* introduces 'Sociological Horror'—the fear is not a ghost, but the class system and your neighbors.",
          "key_manifestations": [
            "The Conjuring (Film)",
            "The Purge (Film)",
            "Evil Dead (Remake - Practical gore revival)",
            "Under the Skin (Arthouse alienation)"
          ]
        },
        "2014": {
          "salience_share": 7.2,
          "description": "*The Babadook* releases (+0.8%). The birth of 'Elevated Horror' (or 'Post-Horror'). The monster is Grief. It is critical ly acclaimed and scary for adults. *It Follows* uses a retro-synth aesthetic to explore the anxiety of sexual transmission and inevitable death. Horror is becoming 'smart' again.",
          "key_manifestations": [
            "The Babadook (Film)",
            "It Follows (Film)",
            "Annabelle (Franchise expansion)",
            "Tusk (Podcasting horror)"
          ]
        },
        "2015": {
          "salience_share": 7.8,
          "description": "*The Witch* releases (+0.6%). It uses period-accurate dialogue and slow dread. It creates a feeling of 'folk horror.' The fear is religious paranoia and female puberty. *Green Room* brings visceral violence back, but in a punk-rock, anti-Nazi context. The aesthetic is gritty but artistic.",
          "key_manifestations": [
            "The Witch (Film)",
            "Green Room (Film)",
            "Krampus (Holiday horror)",
            "Unfriended (Screen-life horror)"
          ]
        },
        "2016": {
          "salience_share": 8.2,
          "description": "*Raw* (French) releases (+0.4%). Cannibalism as a coming-of-age metaphor. *Train to Busan* revitalizes the Zombie genre with heart and social commentary. *Don't Breathe* uses the economic ruin of Detroit as the setting for a brutal home invasion flip. The 'Torture' element has returned, but it is now integrated into stories about class and identity.",
          "key_manifestations": [
            "Raw (Film)",
            "Train to Busan (Film)",
            "Don't Breathe (Film)",
            "The Conjuring 2 (Blockbuster horror)"
          ]
        }
      }
    },
    "32_the_access_paradigm_and_the_death_of_ownership": {
      "name": "The Access Paradigm and the Death of Ownership",
      "description": "This cluster tracks the fundamental shift in how culture is consumed: from the physical ownership of media (CDs, DVDs) to the subscription-based access model (Spotify, Netflix). It explores the psychological transition from 'The Collection' (curating identity through objects) to 'The Stream' (curating identity through algorithmic history). It encompasses the piracy wars, the unbundling of the album, the death of the video store, and the rise of the 'Cloud' as the repository of human memory.",
      "trajectory": {
        "1999": {
          "salience_share": 2.5,
          "description": "Napster launches (+1.5%). It is the asteroid impact. Suddenly, the entire history of music is free and accessible. It breaks the 'Album' model; users want singles. The industry reacts with lawsuits (Metallica vs. Napster), framing the user as a thief. The 'CD Burner' becomes the primary tool of music distribution.",
          "key_manifestations": [
            "Napster (Software Launch)",
            "The Matrix (The concept of uploading skills)",
            "TiVo (Time-shifting TV)",
            "Metallica vs. Napster (Lawsuit)"
          ]
        },
        "2000": {
          "salience_share": 2.8,
          "description": "The PlayStation 2 includes a DVD player (+0.6%). It Trojan Horses the DVD format into millions of homes. The DVD 'Collection' becomes a status symbol—walls of plastic cases. Blockbuster Video is at its peak revenue, unaware it is already dead. The internet is still too slow for video, but music piracy is rampant (Limewire/Kazaa).",
          "key_manifestations": [
            "PlayStation 2 (DVD adoption)",
            "Limewire (P2P Software)",
            "High Fidelity (Fetishization of the record collection)",
            "Blockbuster Video (Peak Revenue)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "The iPod launches (+1.7%). '1,000 songs in your pocket.' It shifts the value from the physical disc to the digital file. iTunes legalizes the 'Single' download ($0.99), legitimizing the unbundling of the album. Wikipedia launches, suggesting that knowledge itself is a collaborative, constantly updating stream, not a static encyclopedia.",
          "key_manifestations": [
            "iPod (Product Launch)",
            "iTunes (Software)",
            "Wikipedia (Launch)",
            "BitTorrent (Protocol design)"
          ]
        },
        "2002": {
          "salience_share": 4.2,
          "description": "Variance holds. The CD industry is crashing, but the DVD market is booming (+0.4%). TV shows on DVD (The Sopranos, Friends) allow for 'Binge Watching' (though the term isn't used). We still 'own' the binge. Friendster launches, digitizing the social circle.",
          "key_manifestations": [
            "TV on DVD (Trend)",
            "Kazaa (Peak usage)",
            "Minority Report (Personalized digital advertising)",
            "Rhapsody (First streaming subscription service - niche)"
          ]
        },
        "2003": {
          "salience_share": 4.8,
          "description": "The iTunes Store opens (+0.6%). It is the first legal digital model that works. Steve Jobs convinces the labels to sell the family silver. The 'Mix CD' is the love language of the era. Myspace allows bands to upload songs directly, bypassing the label system entirely.",
          "key_manifestations": [
            "iTunes Music Store (Launch)",
            "MySpace Music (Feature)",
            "School of Rock (The education of the canon)",
            "Pirate Bay (Founding)"
          ]
        },
        "2004": {
          "salience_share": 5.1,
          "description": "Gmail launches (+0.4%). It introduces the concept of 'Never Delete Anything.' The Cloud begins to replace the hard drive. *World of Warcraft* (Cluster 7) popularizes the 'Subscription' model for entertainment—you don't buy the game once; you pay rent to live in it.",
          "key_manifestations": [
            "Gmail (Launch)",
            "World of Warcraft (Subscription Model)",
            "Facebook (The digital identity)",
            "Eternal Sunshine (Memory erasure)"
          ]
        },
        "2005": {
          "salience_share": 5.5,
          "description": "YouTube launches (+0.8%). Video is now accessible on demand, for free. The 'Viral Video' replaces the 'TV Special.' Pandora launches (Cluster 9), replacing the 'Collection' with the 'Stream.' You don't choose the song; the algorithm does. The concept of 'Rent, don't own' spreads to media.",
          "key_manifestations": [
            "YouTube (Launch)",
            "Pandora (Radio Launch)",
            "Guitar Hero (The simulation of playing music)",
            "The Office (iPod video episode)"
          ]
        },
        "2006": {
          "salience_share": 5.2,
          "description": "Tower Records closes (-0.6% physical retail). It is the funeral for the record store era. The physical object is becoming 'merch' rather than the product. Facebook introduces the News Feed, turning social life into a stream. You don't visit a profile; you watch the updates flow by.",
          "key_manifestations": [
            "Tower Records Liquidation",
            "Facebook News Feed",
            "Spotify (Founded in Sweden)",
            "Click (Control over time)"
          ]
        },
        "2007": {
          "salience_share": 6.8,
          "description": "Netflix launches Streaming (+1.6%). This is the pivot point. It is initially a free add-on to the DVD service. The quality is low, but the convenience is infinite. The iPhone launches, making the internet a permanent appendage. The 'App Store' (2008) is imminent. Kindle launches, attacking the physical book.",
          "key_manifestations": [
            "Netflix Watch Now (Streaming Launch)",
            "iPhone (Launch)",
            "Amazon Kindle (Launch)",
            "Radiohead 'In Rainbows' (Pay what you want)"
          ]
        },
        "2008": {
          "salience_share": 7.1,
          "description": "Spotify launches in Europe (+0.5%). The 'All You Can Eat' model for music is proven. Pirate Bay is raided, but piracy has already forced the industry to adapt. Hulu launches, bringing TV to the browser. The 'Cord Cutting' conversation begins.",
          "key_manifestations": [
            "Spotify (European Launch)",
            "Hulu (Launch)",
            "App Store (Launch)",
            "Wall-E (The digital dependency)"
          ]
        },
        "2009": {
          "salience_share": 7.5,
          "description": "Blockbuster declares bankruptcy (-0.8% physical rental). The video store is dead. Redbox offers a stop-gap (physical rental via kiosk), but the momentum is digital. *Avatar* pushes 3D, trying to make the theater an 'Event' that cannot be pirated or streamed.",
          "key_manifestations": [
            "Blockbuster Bankruptcy (Filing)",
            "Avatar (3D as anti-piracy)",
            "Modern Family (iPad episode)",
            "Bitcoin (Genesis Block - Digital Cash)"
          ]
        },
        "2010": {
          "salience_share": 7.9,
          "description": "Instagram launches. We stop putting photos in albums; we put them in the feed (+0.4%). Uber launches. We stop owning cars; we access rides. The 'Sharing Economy' (Access Economy) narrative takes hold. The cultural capital of 'Owning' things is replaced by 'Experiencing' things.",
          "key_manifestations": [
            "Instagram (Launch)",
            "Uber (Launch)",
            "The Social Network (The platform is the product)",
            "Scott Pilgrim (The video game logic of life)"
          ]
        },
        "2011": {
          "salience_share": 8.5,
          "description": "Spotify launches in the US (+0.8%). The resistance crumbles. Even holdouts start to sign up. The 'Cloud' (iCloud) becomes the default storage. We trust Apple/Google with our memories. Snapchat launches, introducing 'Ephemeral' media—content designed to disappear, the opposite of the archive.",
          "key_manifestations": [
            "Spotify US Launch",
            "iCloud (Launch)",
            "Snapchat (Launch)",
            "Black Mirror 'The Entire History of You'"
          ]
        },
        "2012": {
          "salience_share": 8.8,
          "description": "Google Drive and Adobe Creative Cloud launch (+0.4%). Even work tools are now subscriptions. You don't own Photoshop; you rent it. 'Gangnam Style' proves that YouTube is the new MTV—global monoculture is driven by access, not distribution deals.",
          "key_manifestations": [
            "Adobe Creative Cloud (Subscription shift)",
            "Google Drive (Launch)",
            "Gangnam Style (YouTube dominance)",
            "Pinterest (Curating digital images)"
          ]
        },
        "2013": {
          "salience_share": 9.5,
          "description": "*House of Cards* launches on Netflix (+0.9%). 'Binge Watching' is consecrated. Netflix is no longer a repository; it is a network. This kills the 'Linear TV' model. The viewer is in total control of the schedule. Beyoncé releases her album exclusively on iTunes with no warning, manipulating the digital supply chain.",
          "key_manifestations": [
            "House of Cards (Netflix Original)",
            "Beyoncé (Surprise Drop)",
            "Vine (Short form access)",
            "Her (The OS as relationship)"
          ]
        },
        "2014": {
          "salience_share": 9.8,
          "description": "Taylor Swift removes her music from Spotify (-0.3% resistance). It highlights the 'Artist vs. Platform' tension. She argues art has value; Spotify argues access is the future. (She eventually returns). The 'Podcast' boom (Serial) shows that audio-on-demand is replacing radio.",
          "key_manifestations": [
            "Taylor Swift vs. Spotify",
            "Serial (Podcast Boom)",
            "Twitch (Amazon acquisition)",
            "Guardians of the Galaxy (Cassette tape nostalgia)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "Apple Music launches (+0.5%). The biggest company in the world validates the streaming model. The download is dead. 'Netflix and Chill' becomes a euphemism, signaling that the streaming interface is the new hearth of the home. Periscope/Facebook Live bring 'Live Access' to everyone.",
          "key_manifestations": [
            "Apple Music (Launch)",
            "Netflix and Chill (Meme)",
            "Hamilton (The unreachable live event vs. the soundtrack)",
            "Tidal (Failed artist-owned pivot)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "The cluster culminates in the 'Subscription Fatigue' beginning (+0.3%). Everyone wants $10/month. *Stranger Things* becomes a global hit entirely through word-of-mouth on a streaming platform. Vinyl records see a massive resurgence (+1.2% niche), proving that as everything becomes digital, the desire for *one* physical object becomes a luxury fetish.",
          "key_manifestations": [
            "Stranger Things (Streaming Blockbuster)",
            "Vinyl Sales Resurgence",
            "Pokemon Go (Accessing the digital layer of the world)",
            "Kanye West 'The Life of Pablo' (The album that keeps changing)"
          ]
        }
      }
    },
    "33_the_introvert_revolution_and_social_anxiety_discourse": {
      "name": "The Introvert Revolution and Social Anxiety Discourse",
      "description": "This cluster maps the cultural re-evaluation of solitude and shyness. It moves from the 2000s ideal of the 'Extrovert' (Reality TV stars, party girls, networking) to the 2010s ideal of the 'Introvert' (The quiet creative, the anxious relatable poster). It tracks the rise of 'Social Anxiety' as a defining generational trait, fueled by the internet's ability to allow socialization without physical presence. It encompasses the 'Tumblr aesthetic' of sadness, the popularity of Susan Cain's *Quiet*, and the normalization of 'canceling plans' as self-care.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "The cultural ideal is high-energy extroversion (+0.2%). MTV Spring Break. The 'slacker' (Cluster 22) is lazy, but social. *The Matrix* features a hacker hero (introvert), but he must enter the world to save it. 'Social Anxiety' is viewed as a disorder to be cured (Paxil ads), not a personality type.",
          "key_manifestations": [
            "MTV Spring Break (Cultural Ideal)",
            "American Pie (The party as goal)",
            "Freaks and Geeks (The geeks are outcasts)",
            "Paxil Ads (Social Anxiety Disorder marketing)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "Reality TV (Survivor) rewards social manipulation and loud personalities. *Amélie* (2001 US release) offers a counter-narrative: the whimsical, shy girl who helps people from a distance. It becomes a cult hit for proto-introverts. The 'blogger' archetype begins to form—writing to the world from a bedroom.",
          "key_manifestations": [
            "Amélie (The introvert hero)",
            "Survivor (The extrovert game)",
            "Almost Famous (The observer journalist)",
            "Ghost World (Misanthropy as cool)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "The iPod (Cluster 32) allows people to create a 'private bubble' in public (+0.4%). Wearing headphones becomes a universal 'Do Not Disturb' sign. *The Royal Tenenbaums* glamorizes the withdrawn, depressed genius (Richie/Margot). Wes Anderson becomes the director of the introvert aesthetic.",
          "key_manifestations": [
            "The Royal Tenenbaums (Film)",
            "The iPod (The isolation device)",
            "Donnie Darko (The alienated teen)",
            "Shrek (The ogre who wants to be left alone)"
          ]
        },
        "2002": {
          "salience_share": 2.1,
          "description": "Variance holds. *Adaptation* features Nicolas Cage playing twins: one confident/dumb, one anxious/brilliant. It dramatizes the internal conflict. *Punch-Drunk Love* presents Adam Sandler as a deeply socially anxious man finding love, moving away from his loud comedic persona.",
          "key_manifestations": [
            "Punch-Drunk Love (Film)",
            "Adaptation (Film)",
            "The Hours (Depression and solitude)",
            "LiveJournal (The hub of anxious writing)"
          ]
        },
        "2003": {
          "salience_share": 2.5,
          "description": "*Lost in Translation* captures the feeling of being alone in a crowd (+0.6%). It romanticizes disconnection. The 'Emo' movement (Cluster 2) validates sensitivity and withdrawal. 'MySpace' allows users to curate a persona without the pressure of real-time interaction.",
          "key_manifestations": [
            "Lost in Translation (Film)",
            "The Station Agent (Film - The desire for solitude)",
            "Death Cab for Cutie (The soundtrack of the bedroom)",
            "MySpace (Digital socialization)"
          ]
        },
        "2004": {
          "salience_share": 2.9,
          "description": "*Napoleon Dynamite* celebrates the awkward, non-verbal nerd (+0.5%). He wins by being himself, not by becoming cool. *Eternal Sunshine* features a shy, depressive protagonist (Joel) as the romantic lead. The 'Manic Pixie Dream Girl' is the extrovert catalyst for the introvert male.",
          "key_manifestations": [
            "Napoleon Dynamite (Film)",
            "Eternal Sunshine (Film)",
            "Garden State (The medicated generation)",
            "Sideways (The depressed connoisseur)"
          ]
        },
        "2005": {
          "salience_share": 3.2,
          "description": "The rise of 'Gaming' as a dominant lifestyle (WoW) normalizes staying in on Friday night (+0.4%). It creates a 'Virtual Extroversion'—raid leading—while physically alone. *The Office* (US) makes Jim Halpert (the ironic observer) the audience surrogate, mocking the loud boss.",
          "key_manifestations": [
            "World of Warcraft (Socializing from home)",
            "The Office US (Jim Halpert)",
            "Shopgirl (Film - Urban loneliness)",
            "Pride & Prejudice (The shy Mr. Darcy)"
          ]
        },
        "2006": {
          "salience_share": 3.5,
          "description": "Twitter launches. It is the perfect medium for the introvert: short, text-based, asynchronous interaction. You can be 'loud' without speaking. *Lars and the Real Girl* explores extreme social anxiety and delusion with empathy, not mockery.",
          "key_manifestations": [
            "Twitter (Launch)",
            "Lars and the Real Girl (Film)",
            "The IT Crowd (Nerds in the basement)",
            "Ugly Betty (The awkward girl in the glam world)"
          ]
        },
        "2007": {
          "salience_share": 4.1,
          "description": "Tumblr launches (+0.8%). This is the headquarters. It creates a culture of 'Relatable Sadness' and 'Social Anxiety' memes. Reblogging images of empty rooms and rain. *Juno* features a protagonist who uses sarcasm as a shield, resonating with anxious teens. *The Big Bang Theory* puts the socially awkward nerd at the center of the sitcom.",
          "key_manifestations": [
            "Tumblr (Launch)",
            "The Big Bang Theory (Sheldon Cooper)",
            "Juno (Film)",
            "Superbad (Male anxiety)"
          ]
        },
        "2008": {
          "salience_share": 4.5,
          "description": "*Twilight* features Bella Swan, a passive, clumsy introvert who attracts the magical boy precisely because she is quiet (+0.6%). It validates the 'Wallflower' fantasy. *Wall-E* features a protagonist who hasn't spoken to another being in centuries. The 'Recession' makes staying home a financial necessity, rebranding it as a lifestyle.",
          "key_manifestations": [
            "Twilight (Bella Swan)",
            "Wall-E (The lonely robot)",
            "In Treatment (The therapy session)",
            "Synecdoche, New York (The internal world taking over)"
          ]
        },
        "2009": {
          "salience_share": 5.2,
          "description": "*Up in the Air* explores the isolation of the modern traveler (+0.4%). *Adventure Time* (Finn) allows for a hero who is sensitive. The 'Snuggie' (Blanket with sleeves) becomes a fad—the uniform of the couch potato. We are getting comfortable with not going out.",
          "key_manifestations": [
            "The Snuggie (Trend)",
            "Up in the Air (Film)",
            "Adventure Time (TV Series)",
            "Where the Wild Things Are (The inner world of the child)"
          ]
        },
        "2010": {
          "salience_share": 6.5,
          "description": "*The Social Network* portrays Mark Zuckerberg as a socially inept genius who builds a platform to connect people because he can't connect himself (+0.7%). It frames the Introvert as the Architect of the modern world. 'FOMO' (Fear of Missing Out) is coined, naming the anxiety driven by social media.",
          "key_manifestations": [
            "The Social Network (Film)",
            "Despicable Me (The villain who wants to be left alone)",
            "FOMO (Term coined)",
            "Sherlock (The high-functioning sociopath)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "BuzzFeed lists about 'Problems Only Introverts Understand' go viral (+0.6%). Introversion becomes an identity label, like a horoscope. 'Party Rock Anthem' is the peak of the Extrovert culture, creating a polarized reaction. The 'Quiet' movement is bubbling.",
          "key_manifestations": [
            "BuzzFeed Introvert Lists",
            "Party Rock Anthem (The foil)",
            "New Girl (Jess Day)",
            "Melancholia (Depression as clarity)"
          ]
        },
        "2012": {
          "salience_share": 7.8,
          "description": "Susan Cain publishes *Quiet: The Power of Introverts in a World That Can't Stop Talking* (+1.5%). The Catalyst. It validates 50% of the population. It argues that society is designed for extroverts and that this is a flaw. It launches the 'Introvert Revolution.' TED Talks on vulnerability (Brené Brown) explode.",
          "key_manifestations": [
            "Quiet by Susan Cain (Book)",
            "Brené Brown TED Talk (Vulnerability)",
            "Perks of Being a Wallflower (Film)",
            "Girls (Hannah's anxiety)"
          ]
        },
        "2013": {
          "salience_share": 8.2,
          "description": "Lorde releases 'Royals' and 'Team' (+0.6%). She sings about being 'in the cities you'll never see on screen' and 'we live in cities you'll never see on screen.' It is the anthem of the homebody. *Her* explores a relationship with an OS—the ultimate safe, controlled intimacy. The 'Selfie' allows you to be seen without being touched.",
          "key_manifestations": [
            "Pure Heroine by Lorde (Album)",
            "Her (Film)",
            "Frozen (Elsa's isolation)",
            "Inside Out (Production - focus on internal emotions)"
          ]
        },
        "2014": {
          "salience_share": 8.5,
          "description": "The 'Canceling Plans' meme takes over (+0.5%). 'Sorry I'm late, I didn't want to come.' It is now cool to flake. It is framed as 'Self-Care.' *Serial* (Podcast) allows millions to share a conversation through headphones, alone. The 'Cozy Game' genre begins to form (Animal Crossing fandom active).",
          "key_manifestations": [
            "Canceling Plans Memes",
            "Serial (Podcast)",
            "Birdman (The internal voice)",
            "True Detective (Rust Cohle's pessimism)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "'Netflix and Chill' becomes the dominant dating activity (+0.7%). The date moves from the bar to the couch. *Mr. Robot* features a protagonist with severe social anxiety and clinical depression as the superhero hacker. It is the peak representation of the cluster. 'Alessia Cara' releases 'Here'—an anthem about hating parties.",
          "key_manifestations": [
            "Netflix and Chill (Meme)",
            "Here by Alessia Cara (Song)",
            "Mr. Robot (Elliot Alderson)",
            "Inside Out (Sadness as the hero)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "The Election creates 'Political Anxiety' (+0.6%). The desire to retreat from the world intensifies. *Stranger Things* features the 'Upside Down'—a dark, lonely mirror world. 'Hygge' (Danish coziness) becomes a trend book/lifestyle. We are building forts against reality. The Introvert has won the culture war, but the prize is isolation.",
          "key_manifestations": [
            "Hygge (Trend)",
            "Stranger Things (The Upside Down)",
            "Moonlight (The silence of Chiron)",
            "Frank Ocean 'Blonde' (Music for solitude)"
          ]
        }
      }
    },
    "34_the_culinary_enlightenment_and_performative_foodieism": {
      "name": "The Culinary Enlightenment and Performative Foodieism",
      "description": "This cluster tracks the elevation of 'Food' from sustenance to the primary signifier of cultural capital. It moves from the 'Dump and Stir' era of early Food Network (Emeril) to the punk-rock intellectualism of Anthony Bourdain, the democratization of critique via Yelp, and the visual fetishization of Instagram. It explores how eating became an extreme sport, a political act (organic/local), and a competitive hobby. It charts the shift from 'Fine Dining' (white tablecloths) to 'Authentic Dining' (tacos in a parking lot), turning the chef into the new rock star.",
      "trajectory": {
        "1999": {
          "salience_share": 1.8,
          "description": "Food TV is dominated by 'Emeril Live' (+0.4%). It is cooking as a sitcom, focused on catchphrases ('Bam!'). Food is domestic, safe, and instructional. The 'Foodie' identity is niche, reserved for wealthy gourmands. *Iron Chef* (Japanese import) begins to air on late-night cable, introducing the idea of cooking as combat sport.",
          "key_manifestations": [
            "Emeril Live (TV Series)",
            "Iron Chef (Japanese Import)",
            "American Pie (Food as gross-out prop)",
            "Deep Blue Sea (The chef as comic relief)"
          ]
        },
        "2000": {
          "salience_share": 2.2,
          "description": "Anthony Bourdain publishes *Kitchen Confidential* (+0.8%). The Catalyst. It exposes the culinary world as a pirate ship of drugs, sex, and burns. It destroys the 'polite' image of the chef. Suddenly, working on a line is 'punk.' *Chocolat* presents food as a magical, transformative force against conservatism.",
          "key_manifestations": [
            "Kitchen Confidential by Anthony Bourdain (Book)",
            "Chocolat (Film)",
            "Iron Chef USA (Failed pilot showing culture gap)",
            "Jamie Oliver (The Naked Chef - UK import)"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "The Food Network explodes (+0.4%). It becomes background noise for millions. 'Comfort Food' surges post-9/11 (Rachel Ray). Nigella Lawson introduces 'Gastro-Porn'—cooking shows filmed like romance movies. The focus is on the pleasure of watching, not doing.",
          "key_manifestations": [
            "Nigella Bites (TV Series)",
            "Rachel Ray's 30 Minute Meals (Premiere)",
            "Fast Food Nation (Book - The dark side revealed)",
            "Tortilla Soup (Film)"
          ]
        },
        "2002": {
          "salience_share": 2.9,
          "description": "*A Cook's Tour* premieres (+0.5%). Bourdain takes the camera out of the studio and into Vietnam. He frames food as geopolitics and empathy. 'Organic' food standards are USDA codified, turning the grocery store into a moral battleground. The 'Whole Foods' shopper archetype solidifies.",
          "key_manifestations": [
            "A Cook's Tour (TV Series)",
            "USDA Organic Standards (Regulation)",
            "My Big Fat Greek Wedding (Food as ethnic identity)",
            "Gangs of New York (The butcher as villain)"
          ]
        },
        "2003": {
          "salience_share": 3.2,
          "description": "*Lost in Translation* features the protagonists bonding over sushi and teppanyaki (+0.3%). It highlights the cosmopolitan cool of global dining. 'The Atkin's Diet' (Cluster 26) forces restaurants to change menus (unwich), proving that diet fads now dictate the market.",
          "key_manifestations": [
            "Lost in Translation (Suntory time)",
            "Queer Eye (Ted Allen teaching wine)",
            "Elf (Sugar as a food group)",
            "Master and Commander (The weevil dinner)"
          ]
        },
        "2004": {
          "salience_share": 3.8,
          "description": "*Sideways* releases (+0.9%). It crashes Merlot sales and boosts Pinot Noir. It proves that pop culture dictates the palate. Wine tasting becomes a middle-class hobby. Yelp is founded, giving every diner a megaphone. The 'Critic' is dead; the 'Reviewer' is born.",
          "key_manifestations": [
            "Sideways (Film)",
            "Yelp (Founding)",
            "Super Size Me (The anti-foodie film)",
            "Harold & Kumar Go to White Castle (The quest for the specific craving)"
          ]
        },
        "2005": {
          "salience_share": 4.1,
          "description": "*No Reservations* premieres on Travel Channel (+0.6%). It is the definitive text. Bourdain is the cool uncle showing you the world. 'Cupcakes' (Magnolia Bakery) become the first 'Viral Food' (Cluster 19). We start lining up for food not because we are hungry, but because it is trendy.",
          "key_manifestations": [
            "No Reservations (TV Series Premiere)",
            "Wedding Crashers (Crab cakes and football)",
            "Waiting... (Film - The server's revenge)",
            "Kitchen Confidential (TV Sitcom flop)"
          ]
        },
        "2006": {
          "salience_share": 4.8,
          "description": "*Top Chef* premieres (+0.7%). Cooking is now a high-stakes competitive sport. We learn terms like 'Sous Vide' and 'Deconstructed.' It intellectualizes the kitchen. The 'Celebrity Chef' (Gordon Ramsay) is a household name, famous for abuse and excellence.",
          "key_manifestations": [
            "Top Chef (TV Series Premiere)",
            "Hell's Kitchen US (TV Series)",
            "The Devil Wears Prada (The grilled cheese scene)",
            "Fast Food Nation (Film)"
          ]
        },
        "2007": {
          "salience_share": 5.5,
          "description": "*Ratatouille* releases (+0.8%). It argues that 'Great cooking is not for the faint of heart.' It romanticizes the kitchen rat. It explains the 'Proustian Moment' of taste to children. 'The Omnivore's Dilemma' (Book) makes knowing the origin of your chicken a moral requirement.",
          "key_manifestations": [
            "Ratatouille (Film)",
            "The Omnivore's Dilemma (Book)",
            "Waitress (Film - Pie as therapy)",
            "No Country for Old Men (The milk scene)"
          ]
        },
        "2008": {
          "salience_share": 6.1,
          "description": "The 'Food Truck' revolution begins (Kogi BBQ in LA) (+0.9%). Twitter is used to track the truck. It merges 'Streetwear' exclusivity with 'Street Food' prices. It is the culinary response to the Recession—low overhead, high innovation. *Food, Inc.* exposes the horror of industrial farming.",
          "key_manifestations": [
            "Kogi BBQ (Trend origin)",
            "Food, Inc. (Documentary)",
            "Kung Fu Panda (Noodle dream)",
            "Pineapple Express (The munchies)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "*Julie & Julia* releases (+0.6%). It bridges the Boomer love of Child with the Millennial love of Blogging. It validates 'Home Cooking' as a project. The 'Bacon' craze hits peak meme status—bacon soap, bacon band-aids. It is 'Internet Food.'",
          "key_manifestations": [
            "Julie & Julia (Film)",
            "Cloudy with a Chance of Meatballs (Food as weather)",
            "Zombieland (The quest for the Twinkie)",
            "Party Down (Catering comedy)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "Instagram launches. 'Phone Eats First' (+0.8%). Lighting in restaurants changes to accommodate photography. Visuals become more important than taste. 'Epic Meal Time' on YouTube pushes caloric excess as comedy. *The Trip* (Coogan/Brydon) deconstructs the pretension of the foodie tour.",
          "key_manifestations": [
            "Instagram Food Porn",
            "Epic Meal Time (YouTube)",
            "The Trip (Film)",
            "Eat Pray Love (The pizza scene)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "*Jiro Dreams of Sushi* releases (+0.9%). It introduces the 'Shokunin' (craftsman) archetype to the West. Eating a $300 meal in a subway station is the ultimate status symbol. It fetishizes specialization and labor. 'Sriracha' becomes the flavor of the decade.",
          "key_manifestations": [
            "Jiro Dreams of Sushi (Documentary)",
            "Sriracha Craze",
            "Bob's Burgers (TV Series - The anti-foodie foodie show)",
            "Bridesmaids (The food poisoning scene)"
          ]
        },
        "2012": {
          "salience_share": 8.1,
          "description": "The 'Doritos Locos Taco' launches (+0.5%). It is 'Stunt Food.' Fast food admits it is a drug. On the high end, 'Chef's Table' (concept phase) is brewing. *The Hunger Games* highlights food scarcity as the ultimate dystopian oppression. 'Gluten-Free' goes mainstream.",
          "key_manifestations": [
            "Doritos Locos Taco",
            "The Hunger Games (The feast)",
            "Silver Linings Playbook (The diner date)",
            "Mind of a Chef (TV Series Premiere)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "The 'Cronut' (Cluster 19) (+0.6%). The viral line. Food is now an 'Event.' *Hannibal* (TV) presents the serial killer as the ultimate foodie, cooking human flesh with impeccable plating. It links consumption with predation. 'Blue Apron' launches, attempting to productize the joy of cooking.",
          "key_manifestations": [
            "The Cronut (Viral Food)",
            "Hannibal (TV Series)",
            "Blue Apron (Service Launch)",
            "Orange Is the New Black (The prison kitchen politics)"
          ]
        },
        "2014": {
          "salience_share": 8.8,
          "description": "*Chef* (Jon Favreau) releases (+0.7%). It is a love letter to the Food Truck and the Cubano. It rejects the critic/blogger and celebrates the hands-on labor. It captures the 'Chef as Auteur' vibe perfectly. 'Mukbang' begins to drift over from Korea—watching people eat online.",
          "key_manifestations": [
            "Chef (Film)",
            "The Hundred-Foot Journey (Film)",
            "Broad City (The dining disasters)",
            "Silicon Valley (Burger King placement irony)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "*Chef's Table* premieres on Netflix (+0.9%). It shoots food with 4K cameras and classical music. It elevates the Chef to Philosopher-King. It creates a global pilgrimage map. Food is now High Art. The 'Avocado Toast' becomes the symbol of Millennial economics.",
          "key_manifestations": [
            "Chef's Table (TV Series Premiere)",
            "Burnt (Film - The toxic chef)",
            "The Menu (Concept fermenting)",
            "Master of None (The pasta episode)"
          ]
        },
        "2016": {
          "salience_share": 9.5,
          "description": "*Sausage Party* makes food sentient (+0.4%). *Atlanta* (The wing sauce scene) treats local food spots as sacred cultural knowledge. Bon Appétit's Test Kitchen (YouTube) begins its ascent, turning recipe developers into personalities. We have moved from watching Emeril to watching Brad Leone ferment garlic.",
          "key_manifestations": [
            "Bon Appétit Test Kitchen (YouTube Era begins)",
            "Atlanta (Lemon Pepper Wet)",
            "Sausage Party (Film)",
            "The Founder (The dark origin of fast food)"
          ]
        }
      }
    },
    "35_eco_chic_and_the_greenwashing_of_consumption": {
      "name": "Eco-Chic and the Greenwashing of Consumption",
      "description": "This cluster explores how Environmentalism was transformed from a political movement into a lifestyle brand. It tracks the shift from the 'Captain Planet' moralizing of the 90s to the status-signaling of the Prius and the reusable tote bag. It analyzes the rise of 'Greenwashing'—corporations rebranding consumption as a way to save the planet. It encompasses the 'Inconvenient Truth' shock, the 'BP Oil Spill' reality check, and the eventual cynical acceptance that individual recycling habits cannot stop climate change.",
      "trajectory": {
        "1999": {
          "salience_share": 1.1,
          "description": "The Honda Insight (first hybrid) launches in the US (+0.3%). It is a weird, niche science experiment. Environmentalism is associated with 'Tree Huggers' and patchouli. *The Matrix* calls humanity a 'virus' consuming the planet, a dark eco-fascist sentiment bubbling under the surface. 'Erin Brockovich' (filming) prepares to frame pollution as a legal battle.",
          "key_manifestations": [
            "Honda Insight (US Launch)",
            "The Matrix (Agent Smith's monologue)",
            "Fight Club (Primitivist undertones)",
            "Princess Mononoke (US Release - Nature vs Industry)"
          ]
        },
        "2000": {
          "salience_share": 1.4,
          "description": "The Toyota Prius launches worldwide (+0.6%). It is the iPhone of this cluster. It turns 'saving the gas' into a visible status symbol. Ralph Nader's Green Party run highlights the environment politically, but is blamed for the Bush victory, damaging the brand of political ecology.",
          "key_manifestations": [
            "Toyota Prius (Global Rollout)",
            "Ralph Nader Campaign",
            "Erin Brockovich (Film)",
            "The Perfect Storm (Nature's wrath)"
          ]
        },
        "2001": {
          "salience_share": 1.2,
          "description": "Variance dips (-0.2%) as 9/11 shifts focus to 'Energy Independence' (Drill Baby Drill) rather than 'Sustainability.' The Hummer H2 is the cultural counter-weight—militarized excess. *Lord of the Rings* depicts the 'Industrial' Orcs destroying the 'Green' Shire, keeping the mythological conflict alive.",
          "key_manifestations": [
            "Hummer H2 (Symbol of excess)",
            "Lord of the Rings (Saruman's industry)",
            "Final Fantasy: The Spirits Within (Gaia theory)",
            "Planet of the Apes (Remake - Humanity's fall)"
          ]
        },
        "2002": {
          "salience_share": 1.5,
          "description": "Solar power incentives begin in California (+0.3%). The 'Organic' label (USDA) makes 'Green' a shoppable category (Cluster 34). *Ice Age* introduces climate change to kids, albeit as a historical joke. *The Day After Tomorrow* (production) is greenlit, signaling Hollywood is ready to blow up the world via weather.",
          "key_manifestations": [
            "USDA Organic Seal",
            "Ice Age (Film)",
            "Signs (Water as savior)",
            "Solaris (The planet as intelligence)"
          ]
        },
        "2003": {
          "salience_share": 1.8,
          "description": "*Finding Nemo* sparks a conservation conversation (+0.4%) (ironically leading to more fish purchases). The 'Prius' becomes the car of Hollywood celebrities (Cameron Diaz, DiCaprio), making 'Green' cool rather than dorky. It is the beginning of 'Eco-Chic.'",
          "key_manifestations": [
            "Finding Nemo (Ocean conservation)",
            "The Prius at the Oscars",
            "Hulk (Nuclear anxiety converted to monster)",
            "The Day After Tomorrow (Trailer hype)"
          ]
        },
        "2004": {
          "salience_share": 2.5,
          "description": "*The Day After Tomorrow* releases (+0.7%). It is scientifically ridiculous but culturally potent. It visualizes the 'Climate Apocalypse.' New York freezes over. It moves the threat from 'future' to 'now.' 'American Apparel' (Cluster 11) markets 'Sweatshop Free'—ethical consumption applies to labor too.",
          "key_manifestations": [
            "The Day After Tomorrow (Film)",
            "I Heart Huckabees (Open space coalition)",
            "The Aviator (Hughes' OCD as germ/contamination fear)",
            "Napoleon Dynamite (FFA/Rural aesthetics)"
          ]
        },
        "2005": {
          "salience_share": 2.9,
          "description": "Hurricane Katrina (+0.8%). While not explicitly blamed on climate change in the moment, the visual of a US city underwater links 'Weather' with 'Systemic Collapse.' *March of the Penguins* becomes a blockbuster, anthropomorphizing nature and creating a 'Cute' mandate for conservation.",
          "key_manifestations": [
            "Hurricane Katrina (The visual of the flood)",
            "March of the Penguins (Film)",
            "Grizzly Man (Nature is indifferent)",
            "Batman Begins (The water supply plot)"
          ]
        },
        "2006": {
          "salience_share": 4.5,
          "description": "*An Inconvenient Truth* releases (+1.6%). The Catalyst. Al Gore's PowerPoint presentation wins an Oscar. It creates the modern 'Climate Change' discourse. It makes the 'Carbon Footprint' a household term. It also privatizes the solution: 'Change your lightbulbs' is the takeaway, not 'End Oil.'",
          "key_manifestations": [
            "An Inconvenient Truth (Documentary)",
            "Happy Feet (Environmental message)",
            "Who Killed the Electric Car? (Documentary)",
            "Cars (The irony of the road trip movie)"
          ]
        },
        "2007": {
          "salience_share": 4.8,
          "description": "The 'Green' marketing wave peaks (+0.3%). Every product now has a green leaf on it. 'Live Earth' concert tries to be the Woodstock of climate. *Bee Movie* and *The Simpsons Movie* put environmental collapse plots in family comedies. *I Am Legend* shows a green, overgrown NYC—the 'World Without Us' aesthetic.",
          "key_manifestations": [
            "Live Earth (Concert)",
            "The Simpsons Movie (The dome/pollution)",
            "Bee Movie (Colony collapse)",
            "I Am Legend (Nature reclaiming)"
          ]
        },
        "2008": {
          "salience_share": 5.5,
          "description": "*Wall-E* releases (+0.7%). It is the most scathing critique of consumerism ever released by Disney. A planet of trash. It explicitly links 'Buying Things' to 'World Ending.' 'The World Without Us' (Book) is a bestseller. Tesla releases the Roadster—making electric cars sexy, not just virtuous.",
          "key_manifestations": [
            "Wall-E (Film)",
            "Tesla Roadster (Launch)",
            "The Happening (Nature fights back badly)",
            "Quantum of Solace (The villain is stealing water)"
          ]
        },
        "2009": {
          "salience_share": 5.9,
          "description": "*Avatar* releases (+0.8%). The ultimate 'Eco-Terrorist' fantasy. The humans are the virus; the blue natives are the immune system. It mainstreams 'Gaian' spirituality. 'Copenhagen' climate talks fail, creating political cynicism. The 'Reusable Tote Bag' becomes the ubiquitous symbol of the well-meaning liberal.",
          "key_manifestations": [
            "Avatar (Film)",
            "The Cove (Dolphin documentary)",
            "2012 (The disaster porn finale)",
            "District 9 (The slum ecology)"
          ]
        },
        "2010": {
          "salience_share": 6.2,
          "description": "The Deepwater Horizon (BP) Oil Spill (+0.6%). A live-feed of oil gushing into the ocean for months. It breaks the 'Greenwashing' illusion. BP's 'Beyond Petroleum' logo is mocked. *Birdemic* (bad movie) creates a cult following for its clumsy eco-message. The 'Keurig' cup backlash begins (waste vs convenience).",
          "key_manifestations": [
            "Deepwater Horizon Spill (Event)",
            "Furry Vengeance (Eco-comedy flop)",
            "The Social Network (The digital world replacing the physical)",
            "Gasland (Fracking documentary)"
          ]
        },
        "2011": {
          "salience_share": 5.8,
          "description": "Variance dips (-0.4%). 'Sustainability fatigue.' *Rise of the Planet of the Apes* frames the end of humanity as a biological accident, not a moral failing. The 'Farm to Table' movement (Cluster 34) absorbs the environmental energy into the food world. The 'Tiny House' is the new eco-status symbol.",
          "key_manifestations": [
            "Rise of the Planet of the Apes (Film)",
            "Tiny House Hunters (TV)",
            "The Lorax (Corporate co-option of the message)",
            "Contagion (Nature as threat)"
          ]
        },
        "2012": {
          "salience_share": 6.1,
          "description": "*The Lorax* movie releases (+0.3%). It is widely mocked for having a 'Mazda' tie-in commercial. It represents the peak of cynical Greenwashing. *Beasts of the Southern Wild* depicts climate refugees (The Bathtub) with magical realism, shifting the focus to the poor who will suffer first.",
          "key_manifestations": [
            "Beasts of the Southern Wild (Film)",
            "The Lorax (Film/Marketing)",
            "Prometheus (Terraforming)",
            "Chasing Ice (Visual evidence)"
          ]
        },
        "2013": {
          "salience_share": 6.5,
          "description": "*Blackfish* releases (+0.8%). It destroys SeaWorld. It proves a documentary can kill a stock price. It shifts the focus to 'Animal Rights.' *Snowpiercer* depicts a failed geo-engineering attempt to fix climate change that froze the world. It suggests technology will not save us.",
          "key_manifestations": [
            "Blackfish (Documentary)",
            "Snowpiercer (Film)",
            "Pacific Rim (Kaiju as pollution metaphor)",
            "Her (The post-resource scarcity future)"
          ]
        },
        "2014": {
          "salience_share": 6.9,
          "description": "*Interstellar* releases (+0.5%). The Earth is dying (dust bowl), and the solution is to leave. It creates a 'SpaceX' mindset—Plan B. *Godzilla* returns as a force of nature restoring balance. The 'California Drought' becomes a major news story, turning 'Almond shaming' into a pastime.",
          "key_manifestations": [
            "Interstellar (Film)",
            "Godzilla (Film)",
            "Noah (Biblical eco-flood)",
            "Cowspiracy (Veganism as eco-duty)"
          ]
        },
        "2015": {
          "salience_share": 7.5,
          "description": "*Mad Max: Fury Road* (+0.9%). 'Who killed the world?' It is the definitive 'Climate Wars' movie. Water is a weapon. The 'Volkswagen Dieselgate' scandal breaks, proving that 'Clean Diesel' was a lie encoded in software. It shatters trust in corporate green claims. The Paris Agreement offers a glimmer of top-down hope.",
          "key_manifestations": [
            "Mad Max: Fury Road (Film)",
            "Volkswagen Dieselgate (Scandal)",
            "The Big Short (Betting against the system)",
            "The Revenant (Man vs Nature)"
          ]
        },
        "2016": {
          "salience_share": 7.2,
          "description": "Standing Rock (NoDAPL) protests (+0.8%). Environmentalism returns to its 'Protest' roots (Cluster 12). It is Indigenous-led and physical. Leonardo DiCaprio wins his Oscar (The Revenant) and gives a climate speech. *Moana* features a dying ecosystem restored by returning the heart of nature. The 'Straw Ban' discourse begins.",
          "key_manifestations": [
            "Standing Rock / NoDAPL (Event)",
            "Leonardo DiCaprio Oscar Speech",
            "Moana (Film)",
            "Before the Flood (Documentary)"
          ]
        }
      }
    },
    "36_the_gamification_of_life_and_quantified_self": {
      "name": "The Gamification of Life and Quantified Self",
      "description": "This cluster tracks the invasion of game mechanics (points, badges, leaderboards) into non-game aspects of life. It moves from the introduction of 'Xbox Achievements' (making leisure productive) to the rise of the 'Quantified Self' (Fitbit, Strava) where health is a high score. It analyzes how dating became a swipe-based game (Tinder), how social interaction became a metric (Likes), and how the human experience was optimized into a series of quest logs and progress bars.",
      "trajectory": {
        "1999": {
          "salience_share": 0.5,
          "description": "The cluster is dormant. Video games are a contained activity. You play for fun, not for a permanent record. 'EverQuest' launches, introducing 'The Grind'—repetitive labor for digital reward—but it is confined to the server. The Palm Pilot is for organizing, not scoring.",
          "key_manifestations": [
            "EverQuest (The Grind)",
            "The Matrix (The world as code)",
            "Pokemon (Gotta Catch 'Em All - collection urge)",
            "Dance Dance Revolution (Physicality as score)"
          ]
        },
        "2000": {
          "salience_share": 0.7,
          "description": "*The Sims* releases (+0.3%). It gamifies domestic life. You manage hunger, bladder, and social bars. It teaches a generation that life is a resource management problem. 'Geocaching' begins—using GPS to find hidden boxes. The real world becomes a game board.",
          "key_manifestations": [
            "The Sims (Life simulation)",
            "Geocaching (Real world play)",
            "Battle Royale (Life as deathmatch)",
            "Survivor (Social dynamics as game)"
          ]
        },
        "2001": {
          "salience_share": 0.9,
          "description": "*Grand Theft Auto III* releases (+0.4%). It introduces the 'Open World.' You can ignore the mission and just cause chaos. It trains users to test the physics of the simulation. Wikipedia launches, gamifying knowledge (edit counts).",
          "key_manifestations": [
            "Grand Theft Auto III (The Sandbox)",
            "Wikipedia (The Edit)",
            "Harry Potter (House Points)",
            "A.I. (The robot fulfilling a mission)"
          ]
        },
        "2002": {
          "salience_share": 1.5,
          "description": "Xbox Live launches (+0.6%). It introduces the 'Gamertag'—a persistent digital identity. While Achievements come later (2005), the infrastructure is laid. *Minority Report* shows a world where personalized ads track you like a player in a level.",
          "key_manifestations": [
            "Xbox Live (Online identity)",
            "Minority Report (Tracked existence)",
            "Animal Crossing (Debt repayment as fun)",
            "American Idol (Voting as gameplay)"
          ]
        },
        "2003": {
          "salience_share": 1.8,
          "description": "LinkedIn launches (+0.3%). It gamifies the career. The 'Profile Strength' bar encourages you to add more data. 'MySpace' creates the 'Top 8'—ranking your friends. Social capital is now explicit and visible.",
          "key_manifestations": [
            "LinkedIn (Profile Strength)",
            "MySpace (Top 8)",
            "Knights of the Old Republic (Morality meter)",
            "Kill Bill (Video game logic in film)"
          ]
        },
        "2004": {
          "salience_share": 2.2,
          "description": "*World of Warcraft* releases (+0.6%). It normalizes 'Leveling Up.' The concept of 'XP' (Experience Points) enters the general lexicon. 'The Facebook' launches at Harvard, gamifying social connection (Relationship Status).",
          "key_manifestations": [
            "World of Warcraft (Leveling)",
            "The Facebook (Social graph)",
            "Saw (The game of survival)",
            "Lost (The numbers)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "Xbox 360 introduces 'Achievements' (+1.3%). The Catalyst. Suddenly, playing a game isn't enough; you must complete arbitrary tasks for a public 'Gamerscore.' It changes the psychology of play from 'Fun' to 'Completionism.' 'Guitar Hero' gamifies music performance.",
          "key_manifestations": [
            "Xbox 360 Achievements (The Gamerscore)",
            "Guitar Hero (Score chasing)",
            "The Game (Neil Strauss book - Pickup as RPG)",
            "Charlie and the Chocolate Factory (The Golden Ticket)"
          ]
        },
        "2006": {
          "salience_share": 3.8,
          "description": "Nike+ launches (with iPod) (+0.4%). It tracks your run. You can compare it with others. Exercise is now data. *Wii Sports* gamifies fitness for the elderly. The barrier between 'Body' and 'Controller' erodes.",
          "key_manifestations": [
            "Nike+ (Tracking)",
            "Wii Sports (Motion control)",
            "Twitter (Follower counts as score)",
            "Casino Royale (Poker as high stakes combat)"
          ]
        },
        "2007": {
          "salience_share": 4.5,
          "description": "Facebook Platform launches (+0.7%). 'Zynga' rises. *FarmVille* (soon) will weaponize behavioral psychology. 'The Quantified Self' movement is named (Kevin Kelly/Gary Wolf). We begin tracking sleep, steps, and mood. The iPhone provides the sensor suite.",
          "key_manifestations": [
            "Facebook Platform (App integration)",
            "Quantified Self (Movement named)",
            "Portal (The test subject)",
            "Call of Duty 4 (Perks and rank ups)"
          ]
        },
        "2008": {
          "salience_share": 5.1,
          "description": "The App Store launches (+0.6%). 'Angry Birds' creates the '3-Star' mentality for casual tasks. 'Fitbit' releases its first tracker. The 10,000 steps goal becomes a religious mandate. *Wall-E* shows the end result of technology doing everything for us.",
          "key_manifestations": [
            "Fitbit (Launch)",
            "App Store (Casual games)",
            "Slumdog Millionaire (The game show)",
            "Iron Man (HUD interface)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "Foursquare launches (+0.8%). 'Check-ins.' You get a badge for going to the coffee shop. You can be the 'Mayor' of the bar. It gamifies location. *Up in the Air* depicts the 'Miles Game'—traveling just to increase a number. 'FarmVille' takes over Facebook.",
          "key_manifestations": [
            "Foursquare (Check-ins)",
            "FarmVille (Viral addiction)",
            "Up in the Air (Frequent Flyer status)",
            "Gamer (The human avatar)"
          ]
        },
        "2010": {
          "salience_share": 6.2,
          "description": "*Scott Pilgrim vs. the World* (+0.5%). The movie literally uses game UI (coins, 1-ups) in real life. It visualizes how the generation sees the world. 'Instagram' launches—the 'Like' becomes the ultimate dopamine hit. 'Super Meat Boy' popularizes 'Masocore'—failure as a learning loop.",
          "key_manifestations": [
            "Scott Pilgrim vs. the World (Film)",
            "Instagram (Likes)",
            "Red Dead Redemption (Honor system)",
            "Inception (Layers of simulation)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "*Black Mirror* ('15 Million Merits') (+0.7%). It depicts the nightmare of gamification: cycling for merits to buy digital clothes for your avatar. 'Duolingo' launches (beta/soon), gamifying language learning with the 'Streak.' The streak becomes a source of anxiety.",
          "key_manifestations": [
            "Black Mirror (15 Million Merits)",
            "Minecraft (Full Release - Sandbox play)",
            "Moneyball (Stats over intuition)",
            "Ready Player One (Book - The ultimate game)"
          ]
        },
        "2012": {
          "salience_share": 7.5,
          "description": "Tinder launches (+1.2%). The Catalyst. Dating becomes a deck of cards. Swipe Right. It utilizes the 'Variable Reward Schedule' (Slot Machine). It gamifies romance. 'Candy Crush Saga' perfects the 'Freemium' model—pay to continue. Life is now Pay-to-Win.",
          "key_manifestations": [
            "Tinder (Swipe UI)",
            "Candy Crush Saga (addiction mechanics)",
            "Wreck-It Ralph (Game nostalgia)",
            "The Hunger Games (Survival as broadcast sport)"
          ]
        },
        "2013": {
          "salience_share": 7.8,
          "description": "*Her* features a video game that is immersive and emotional (+0.3%). The protagonist lives in a soft, gamified world. 'Cookie Clicker' goes viral—the 'Idle Game.' A game that plays itself. It satirizes the desire for numbers to go up.",
          "key_manifestations": [
            "Cookie Clicker (Idle genre)",
            "Her (Film)",
            "Grand Theft Auto V (The satire of modern life)",
            "The Wolf of Wall Street (Money as score)"
          ]
        },
        "2014": {
          "salience_share": 8.2,
          "description": "Destiny releases (+0.4%). It is a 'Skinner Box' shooter. It perfects the 'Loot Loop.' 'Twitch' is bought by Amazon. Watching others play games is now a career. 'HabitRPG' (Habitica) turns your to-do list into an RPG. Chores grant XP.",
          "key_manifestations": [
            "Destiny (The Loot Cave)",
            "Twitch (Mainstreaming)",
            "Whiplash (The quest for perfection)",
            "Nightcrawler (Stats/ratings over morality)"
          ]
        },
        "2015": {
          "salience_share": 8.8,
          "description": "Snapchat introduces 'Streaks' (+0.6%). It gamifies friendship. If you don't message, you lose the fire icon. It creates social obligation through UI. Apple Watch 'Rings' become a daily obsession. 'Close your rings' is the new 'Carpe Diem.'",
          "key_manifestations": [
            "Snapchat Streaks",
            "Apple Watch Rings",
            "Undertale (Deconstructing RPG morality)",
            "Pixels (Game invasion)"
          ]
        },
        "2016": {
          "salience_share": 9.5,
          "description": "*Pokemon Go* releases (+1.5%). The culmination. The digital game overlay completely conquers the physical world. Parks are filled with people catching invisible monsters. 'Nosedive' (*Black Mirror*) depicts the endpoint: a world run by a social credit score. The gamification is total.",
          "key_manifestations": [
            "Pokemon Go (Augmented Reality)",
            "Black Mirror 'Nosedive'",
            "Westworld (The park as open world RPG)",
            "Overwatch (Loot boxes)"
          ]
        }
      }
    },
    "37_the_opioid_crisis_and_the_aesthetics_of_numbness": {
      "name": "The Opioid Crisis and the Aesthetics of Numbness",
      "description": "This cluster maps the darker pharmacological undercurrent of the era: the transition from the illicit 'Heroin Chic' of the 90s to the corporate-sanctioned 'OxyContin' epidemic of the 2000s. It traces how pain management became a predatory industry, devastating the American heartland. It explores the cultural reflection of this 'numbing'—from the twitchy, meth-fueled energy of *Breaking Bad* to the sedative, dissociative mumble-rap of the mid-2010s. It is the story of a population self-medicating against economic and spiritual collapse.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "OxyContin is aggressively marketed by Purdue Pharma (+0.4%). The 'Pain as the 5th Vital Sign' campaign begins. Culturally, drug use is still framed as an urban vice or a rave accessory (*Go*). *Magnolia* features a character addicted to prescription meds, foreshadowing the shift from street corners to doctor's offices.",
          "key_manifestations": [
            "OxyContin Marketing Campaign",
            "Magnolia (Julianne Moore's pharmacy scene)",
            "Bringing Out the Dead (The exhaustion of the medic)",
            "Go (Recreational ecstasy)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "*Requiem for a Dream* releases (+0.8%). It creates a terrifying visual language for addiction. It treats diet pills and heroin with equal horror, linking the desire for 'thinness' with the desire for 'oblivion.' *Traffic* depicts the drug war as a futile, systemic failure where the judge's own daughter is an addict.",
          "key_manifestations": [
            "Requiem for a Dream (Film)",
            "Traffic (Film)",
            "Almost Famous (Quaaludes nostalgia)",
            "Eminem 'The Marshall Mathers LP' (Vicodin references)"
          ]
        },
        "2001": {
          "salience_share": 2.1,
          "description": "The Joint Commission mandates pain assessment in hospitals (+0.5%). The pill mills begin to scale up. *Prozac Nation* (Film) looks back at the antidepressant era, but the ground is shifting to opiates. The 'Stoner Comedy' (Cluster 22) laughs at weed, ignoring the harder stuff creeping into the suburbs.",
          "key_manifestations": [
            "Prozac Nation (Film)",
            "Blow (Cocaine nostalgia)",
            "Training Day (PCP/Corruption)",
            "Mulholland Drive (The dream state as narcotic)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "*The Wire* premieres (Cluster 21). It treats the drug trade as an unbridled capitalist market. 'Bubbles' becomes the face of the empathetic addict. *Spun* attempts to capture the frenetic energy of the meth epidemic which is exploding in the rural West, creating a 'White Trash' drug aesthetic.",
          "key_manifestations": [
            "The Wire (The Towers)",
            "Spun (Film)",
            "24 Hours Party People (The ecstasy comedown)",
            "City of God (The drug trade as war)"
          ]
        },
        "2003": {
          "salience_share": 2.9,
          "description": "*Thirteen* depicts teenage drug use (huffing, pills) as a symptom of suburban boredom and neglect (+0.4%). Rush Limbaugh admits to OxyContin addiction, proving the crisis has breached the conservative firewall. The 'Pill' is no longer counter-culture; it is establishment.",
          "key_manifestations": [
            "Thirteen (Film)",
            "Rush Limbaugh Rehab News",
            "Elephant (Prescription meds in schools)",
            "Wonderland (The dark side of the porn/drug nexus)"
          ]
        },
        "2004": {
          "salience_share": 3.2,
          "description": "*House M.D.* premieres (+0.7%). The protagonist is a genius Vicodin addict. It glamorizes the 'functional junkie.' We root for him to pop pills because it helps him solve puzzles. *Garden State* critiques the over-medication of youth ('The Lithium generation'), advocating for feeling the pain instead.",
          "key_manifestations": [
            "House M.D. (TV Series Premiere)",
            "Garden State (Film)",
            "Ray (Heroin biopic trope)",
            "Harold & Kumar (Weed normalization)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "*Walk the Line* revisits Johnny Cash's addiction, framing it as a romantic struggle (+0.3%). Meth use moves into the national spotlight with the 'Faces of Meth' campaign—using horror imagery to deter use. It creates a 'Zombie' narrative around the addict.",
          "key_manifestations": [
            "Walk the Line (Film)",
            "Faces of Meth (Campaign)",
            "Weeds (The suburban dealer)",
            "A Scanner Darkly (Production - drug paranoia)"
          ]
        },
        "2006": {
          "salience_share": 3.8,
          "description": "*Half Nelson* features a crack-addicted history teacher (+0.4%). It breaks the stereotype of the homeless user. *A Scanner Darkly* depicts a society under total surveillance fueled by 'Substance D.' It captures the paranoia of the chemically altered mind.",
          "key_manifestations": [
            "Half Nelson (Film)",
            "A Scanner Darkly (Film)",
            "Candy (Heath Ledger heroin drama)",
            "Little Miss Sunshine (Grandpa's heroin use)"
          ]
        },
        "2007": {
          "salience_share": 4.2,
          "description": "Heath Ledger dies (early 2008, but the spiral is visible). The 'Prescription Overdose' becomes the new rock star death. Amy Winehouse's 'Rehab' becomes a global anthem (+0.7%), defiant and tragic. It turns the refusal of help into a catchy hook.",
          "key_manifestations": [
            "Rehab by Amy Winehouse (Song)",
            "Across the Universe (Psychedelic nostalgia)",
            "American Gangster (Heroin as business)",
            "Gone Baby Gone (The addict mother)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*Breaking Bad* premieres (+1.5%). The Definitive Text. A chemistry teacher makes meth to pay for healthcare. It links the drug crisis directly to the economic crisis. Blue Sky meth becomes a pop culture icon. *The Wrestler* depicts the physical toll of painkillers on the aging body.",
          "key_manifestations": [
            "Breaking Bad (TV Series Premiere)",
            "The Wrestler (Film)",
            "Pineapple Express (Weed as harmless fun vs. violence)",
            "Lil Wayne 'A Milli' (Lean/Syrup references rise)"
          ]
        },
        "2009": {
          "salience_share": 7.1,
          "description": "*Nurse Jackie* premieres (+0.6%). It flips the *House* script—showing the exhaustion and lying of the functional addict nurse. Eminem's *Relapse* deals explicitly with his prescription pill overdose. The 'Pill Mill' economy in Florida is at its peak.",
          "key_manifestations": [
            "Nurse Jackie (TV Series Premiere)",
            "Relapse by Eminem (Album)",
            "Crazy Heart (Alcoholism as country trope)",
            "Enter the Void (The DMT trip)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "*Winter's Bone* depicts the meth-ravaged landscape of the Ozarks (+0.5%). It is grim, realistic, and impoverished. It shows the drug trade as the only economy left in rural America. *The Fighter* features Christian Bale as a crack-addicted former pride of the town.",
          "key_manifestations": [
            "Winter's Bone (Film)",
            "The Fighter (Film)",
            "Love & Other Drugs (Pharma sales satire)",
            "LCD Soundsystem 'Drunk Girls' (The party fatigue)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "The 'Florida Shuffle' (Rehab scams) begins to be noticed (-0.3% treatment faith). The crackdown on pill mills pushes addicts toward heroin. *Limitless* presents the fantasy of the 'Smart Drug' (NZT)—addiction as a superpower if managed correctly. It appeals to the 'Optimization' culture (Cluster 36).",
          "key_manifestations": [
            "Limitless (Film)",
            "Shame (Addiction model applied to sex)",
            "The Wolf of Wall Street (Quaalude scene filming)",
            "Breaking Bad (Season 4 - Gus Fring as corporate drug lord)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "Future turns 'Lean' (Codeine) into a primary aesthetic of Hip-Hop (+0.6%). It sounds like the drug feels: slow, slurred, numb. *Flight* depicts the high-functioning alcoholic pilot, forcing the audience to question who is keeping the world running while high.",
          "key_manifestations": [
            "Pluto 3D by Future (Mixtape)",
            "Flight (Film)",
            "Project X (The party out of control)",
            "Breaking Bad (Season 5 - The Empire Business)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "*The Wolf of Wall Street* depicts drug use as the fuel of capitalism (+0.4%). The 'Quaalude Scene' is iconic comedy. It presents addiction as a consequence of ambition. Philip Seymour Hoffman dies of a heroin overdose (early 2014), shocking the culture and revealing the prevalence of the drug among the elite.",
          "key_manifestations": [
            "The Wolf of Wall Street (Film)",
            "Dallas Buyers Club (Drugs as survival)",
            "Spring Breakers (The drug dealer as guru)",
            "Orange Is the New Black (Nicky's addiction arc)"
          ]
        },
        "2014": {
          "salience_share": 8.9,
          "description": "The 'Xanax' era of rap begins to bubble up (+0.5%). The focus shifts from 'Partying' to 'Self-Medicating Anxiety.' *BoJack Horseman* presents the addict as a sympathetic, broken horse. *Inherent Vice* looks back at the end of the psychedelic 60s through a haze of confusion.",
          "key_manifestations": [
            "BoJack Horseman (TV Series)",
            "Inherent Vice (Film)",
            "Gone Girl (The cool girl drinks)",
            "Serial (Podcast - The drug connection in the case)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "*Sicario* depicts the drug war not as a law enforcement issue, but as a management of chaos (+0.4%). The Cartel is a force of nature. The Weeknd's 'Can't Feel My Face' hits #1—a pop song explicitly about cocaine numbness. Addiction is now the top of the charts.",
          "key_manifestations": [
            "Can't Feel My Face by The Weeknd (Song)",
            "Sicario (Film)",
            "Mr. Robot (Morphine addiction)",
            "Narcos (Netflix Series - The history of the trade)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "Prince dies of a Fentanyl overdose (+1.2%). It is the tipping point. The crisis is now undeniable. *Moonlight* features the crack-addicted mother not as a villain, but as a tragedy requiring forgiveness. *Hillbilly Elegy* (Book) frames the opioid crisis as a cultural failing of the white working class, sparking intense debate.",
          "key_manifestations": [
            "Prince Death (Event)",
            "Moonlight (Film)",
            "Hillbilly Elegy (Book)",
            "Lil Peep (The rise of Emo Rap/Xanax culture)"
          ]
        }
      }
    },
    "38_the_pixar_emotional_algorithm_and_animation_renaissance": {
      "name": "The Pixar Emotional Algorithm and Animation Renaissance",
      "description": "This cluster tracks the elevation of Western animation from 'Children's Entertainment' to the primary vehicle for adult emotional catharsis. It is driven by Pixar's 'perfect storm' of technological innovation and rigorous storytelling formulas designed to make grown men cry. It traces the shift from the 'Musical' format of the 90s Disney Renaissance to the 'High Concept' psychological explorations of *Up*, *Wall-E*, and *Inside Out*. It also encompasses the rise of 'CalArts' style TV animation (*Adventure Time*) which introduced surrealism and deep lore to the cartoon format.",
      "trajectory": {
        "1999": {
          "salience_share": 3.5,
          "description": "*Toy Story 2* releases (+1.2%). It proves the sequel can be better than the original. It introduces the theme of 'abandonment' and 'mortality' (When She Loved Me). It signals that Pixar is not a fluke. *The Iron Giant* (Warner Bros) flops but becomes a cult classic, proving traditional 2D animation can tackle Cold War paranoia and pacifism.",
          "key_manifestations": [
            "Toy Story 2 (Film)",
            "The Iron Giant (Film)",
            "South Park: Bigger, Longer & Uncut (The musical satire)",
            "Tarzan (The end of the Disney Renaissance)"
          ]
        },
        "2000": {
          "salience_share": 3.2,
          "description": "Variance dips (-0.3%) as the industry transitions. *Titan A.E.* kills Fox Animation. *The Emperor's New Groove* is a slapstick masterpiece but lacks the emotional weight. *Chicken Run* proves Aardman's claymation can hold a global audience. The 'Dreamworks Face' (Smirk) begins to appear.",
          "key_manifestations": [
            "The Emperor's New Groove (Film)",
            "Chicken Run (Film)",
            "Titan A.E. (Flop)",
            "Dinosaur (CGI experiment)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "*Shrek* wins the first Best Animated Feature Oscar (+1.3%). It deconstructs the Disney fairy tale. It is cynical, pop-culture reliant, and massive. *Monsters, Inc.* (Pixar) counters with pure heart—the relationship between Sulley and Boo. The battle lines are drawn: Dreamworks (Snark) vs. Pixar (Heart).",
          "key_manifestations": [
            "Shrek (Film)",
            "Monsters, Inc. (Film)",
            "Spirited Away (Japanese release - later US impact)",
            "Final Fantasy: The Spirits Within (Uncanny valley failure)"
          ]
        },
        "2002": {
          "salience_share": 4.8,
          "description": "*Lilo & Stitch* uses watercolor backgrounds and Elvis songs to tell a story about a broken family (+0.4%). It is grounded and emotional. *Spirited Away* releases in the US, introducing Miyazaki to the mainstream. It offers a distinct alternative to the Western 3-Act structure: immersion over conflict.",
          "key_manifestations": [
            "Lilo & Stitch (Film)",
            "Spirited Away (US Release)",
            "Ice Age (The start of the franchise)",
            "Treasure Planet (2D/3D hybrid failure)"
          ]
        },
        "2003": {
          "salience_share": 5.5,
          "description": "*Finding Nemo* becomes the highest-grossing animated film (+0.7%). It is a story about parental anxiety and disability (the lucky fin). It creates the 'Pixar Theory' of emotional engagement: start with tragedy (the barracuda attack), end with acceptance. *The Triplets of Belleville* brings French surrealism to the Oscar race.",
          "key_manifestations": [
            "Finding Nemo (Film)",
            "The Triplets of Belleville (Film)",
            "Brother Bear (Disney decline)",
            "Teen Titans (Anime influence on US TV)"
          ]
        },
        "2004": {
          "salience_share": 5.9,
          "description": "*The Incredibles* releases (+0.6%). Brad Bird brings live-action directing techniques to CGI. It is a sophisticated drama about mid-life crisis and mediocrity, disguised as a superhero movie. *Shrek 2* doubles down on the pop culture references, cementing the Dreamworks style.",
          "key_manifestations": [
            "The Incredibles (Film)",
            "Shrek 2 (Film)",
            "The Polar Express (Motion capture horror)",
            "SpongeBob SquarePants Movie (2D survival)"
          ]
        },
        "2005": {
          "salience_share": 5.2,
          "description": "Variance holds. *Madagascar* launches another wacky animal franchise. *Wallace & Gromit: The Curse of the Were-Rabbit* proves claymation is still viable. *Avatar: The Last Airbender* premieres on TV, bringing serialized, anime-influenced storytelling to Nickelodeon. It creates a generation of fans who demand 'Canon' and 'Arc'.",
          "key_manifestations": [
            "Avatar: The Last Airbender (TV Series Premiere)",
            "Madagascar (Film)",
            "Corpse Bride (Stop motion goth)",
            "Robots (Generic CGI)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "Disney buys Pixar (+0.4%). Lasseter takes over Disney Animation. *Cars* releases—it is commercially massive (merch) but critically the weakest Pixar film. *Happy Feet* wins the Oscar, bringing environmentalism to the dance party. *Paprika* (Anime) shows the adult potential of the medium.",
          "key_manifestations": [
            "Disney buys Pixar (Event)",
            "Cars (Film)",
            "Happy Feet (Film)",
            "Monster House (Horror for kids)"
          ]
        },
        "2007": {
          "salience_share": 6.1,
          "description": "*Ratatouille* releases (+0.7%). A film about a rat cooking is a masterpiece of sensory visualization. The 'Ego's Review' monologue is a defense of the new and the 'Other.' *Persepolis* brings graphic novel memoir to animation, proving the medium can handle political revolution.",
          "key_manifestations": [
            "Ratatouille (Film)",
            "Persepolis (Film)",
            "The Simpsons Movie (TV to Film transition)",
            "Bee Movie (Meme potential)"
          ]
        },
        "2008": {
          "salience_share": 6.8,
          "description": "*Wall-E* releases (+1.0%). The first 30 minutes have no dialogue. It is a silent film about environmental collapse and robot love. It is audacious art. *Kung Fu Panda* surprises critics by having actual heart beneath the fat jokes. *Star Wars: The Clone Wars* launches, keeping the IP alive on TV.",
          "key_manifestations": [
            "Wall-E (Film)",
            "Kung Fu Panda (Film)",
            "Waltz with Bashir (Documentary animation)",
            "Bolt (Disney's revival begins)"
          ]
        },
        "2009": {
          "salience_share": 7.5,
          "description": "*Up* releases (+0.9%). The 'Married Life' montage is the single most effective tear-jerker in animation history. It deals with miscarriage, aging, and grief in 4 minutes. *Coraline* launches Laika, establishing a home for dark, stop-motion horror. *The Princess and the Frog* attempts a 2D return but signals the end of the hand-drawn era.",
          "key_manifestations": [
            "Up (Film)",
            "Coraline (Film)",
            "Fantastic Mr. Fox (Wes Anderson stop motion)",
            "The Princess and the Frog (Film)"
          ]
        },
        "2010": {
          "salience_share": 8.2,
          "description": "*Toy Story 3* releases (+0.8%). The furnace scene. It is a meditation on letting go of childhood. Adults weep openly in theaters. *How to Train Your Dragon* gives Dreamworks its own emotional heavyweight franchise. *Adventure Time* premieres, launching the 'CalArts' era of surreal, emotional TV animation.",
          "key_manifestations": [
            "Toy Story 3 (Film)",
            "How to Train Your Dragon (Film)",
            "Adventure Time (TV Series Premiere)",
            "Tangled (Disney's CGI princess success)"
          ]
        },
        "2011": {
          "salience_share": 7.9,
          "description": "*Cars 2* breaks the Pixar streak (-0.5%). It is a critical failure. However, *Rango* offers a weird, psychedelic western that wins the Oscar. *Bob's Burgers* premieres, grounding adult animation in realistic family dynamics rather than shock humor.",
          "key_manifestations": [
            "Cars 2 (The stumble)",
            "Rango (Film)",
            "Bob's Burgers (TV Series Premiere)",
            "Kung Fu Panda 2 (Darker sequel)"
          ]
        },
        "2012": {
          "salience_share": 8.1,
          "description": "*Wreck-It Ralph* captures the video game nostalgia zeitgeist (+0.3%). *Gravity Falls* premieres on Disney Channel, bringing 'Twin Peaks' style mystery to kids TV. *Brave* is Pixar's first female lead, but feels like a traditional Disney movie, blurring the lines between the studios.",
          "key_manifestations": [
            "Wreck-It Ralph (Film)",
            "Gravity Falls (TV Series Premiere)",
            "Brave (Film)",
            "ParaNorman (Laika horror)"
          ]
        },
        "2013": {
          "salience_share": 9.2,
          "description": "*Frozen* releases (+1.5%). The Singularity. 'Let It Go' conquers the world. It subverts the romance trope (sisterly love). It is the biggest animated film ever. *Rick and Morty* premieres, bringing high-concept sci-fi nihilism to Adult Swim. *Steven Universe* brings queer identity and emotional intelligence to Cartoon Network.",
          "key_manifestations": [
            "Frozen (Film)",
            "Rick and Morty (TV Series Premiere)",
            "Steven Universe (TV Series Premiere)",
            "The Wind Rises (Miyazaki's 'final' film)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "*The Lego Movie* releases (+0.6%). It uses the aesthetic of stop-motion (in CGI) to critique capitalism and the 'Chosen One' narrative. *BoJack Horseman* premieres, using the cartoon animal format to explore deep depression and addiction. Animation is now the primary vehicle for existential dread.",
          "key_manifestations": [
            "The Lego Movie (Film)",
            "BoJack Horseman (TV Series Premiere)",
            "Big Hero 6 (Marvel/Disney fusion)",
            "Over the Garden Wall (Miniseries masterpiece)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "*Inside Out* releases (+1.2%). It literalizes the 'Pixar Emotional Algorithm.' It personifies 'Sadness' as a necessary emotion. It functions as child psychology therapy for adults. *Anomalisa* (Charlie Kaufman) uses stop motion to explore adult loneliness and the mundane. The medium has no limits.",
          "key_manifestations": [
            "Inside Out (Film)",
            "Anomalisa (Film)",
            "Shaun the Sheep Movie (Aardman purity)",
            "Star vs. the Forces of Evil (Magical girl revival)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "*Zootopia* releases (+0.6%). It uses the 'funny animal' trope to deliver a lecture on systemic racism and bias. It is timely and massive. *Moana* perfects the 'Hero's Journey' musical. *Kubo and the Two Strings* pushes stop-motion technology to its breaking point. *Your Name* (Anime) breaks global records, showing the universal appeal of body-swap romance.",
          "key_manifestations": [
            "Zootopia (Film)",
            "Moana (Film)",
            "Kubo and the Two Strings (Film)",
            "Your Name (Global Anime Hit)"
          ]
        }
      }
    },
    "39_conspiracy_culture_and_the_epistemological_collapse": {
      "name": "Conspiracy Culture and the Epistemological Collapse",
      "description": "This cluster traces the erosion of shared reality, from the fringe 'Truthers' of the early 2000s to the weaponized 'Post-Truth' era of 2016. It maps how the internet allowed conspiracy theories to migrate from handwritten newsletters to algorithmic feeds. It tracks the evolution from 'The Government is hiding Aliens' (X-Files fun) to 'The Government is staging mass shootings' (Sandy Hook truthers). It analyzes how 'Do Your Own Research' became a mantra that dismantled institutional trust, leading to Birtherism, Gamergate, and Pizzagate.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "*The Matrix* is the foundational text (+0.5%). 'Red Pilling' enters the lexicon. The idea that reality is a lie constructed by elites to control you is mainstreamed as cool. *The Blair Witch Project* plays with the boundary of 'Real/Fake' marketing. Y2K fears are rampant, driven by a distrust of technological infrastructure.",
          "key_manifestations": [
            "The Matrix (Red Pill)",
            "Y2K Panic (Event)",
            "The Blair Witch Project (Fake reality)",
            "Eyes Wide Shut (Elite secret societies)"
          ]
        },
        "2000": {
          "salience_share": 1.2,
          "description": "Variance dips as Y2K passes without incident. The 'Florida Recount' creates a partisan conspiracy narrative—the 'Stolen Election.' It plants the seed that democratic institutions are rigged. *Deus Ex* (Video Game) synthesizes every conspiracy theory (Illuminati, Gray Aliens) into a coherent plot, treating them as fact.",
          "key_manifestations": [
            "Bush v. Gore (Stolen election narrative)",
            "Deus Ex (The conspiracy bible)",
            "Gladiator (The corrupt emperor)",
            "X-Men (The government registration plot)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "9/11 (+2.5%). The event that breaks reality. Within hours, internet forums claim it was a controlled demolition. 'Jet Fuel Can't Melt Steel Beams.' The confusion of the day creates a vacuum filled by 'Truthers.' The Anthrax attacks add a layer of biological paranoia. Trust in the government spikes (rally 'round the flag) but the counter-culture radicalizes.",
          "key_manifestations": [
            "9/11 Conspiracy Theories (Origins)",
            "Anthrax Attacks (Fear)",
            "The Lone Gunmen (Pilot predicts 9/11)",
            "Donnie Darko (Hidden machinations)"
          ]
        },
        "2002": {
          "salience_share": 3.2,
          "description": "Thierry Meyssan publishes *9/11: The Big Lie* (+0.5%). It becomes a bestseller in France. The internet accelerates the spread of 'Loose Change' (early versions). The 'Dark Winter' exercises fuel bioweapon fears. *Minority Report* depicts the government framing its own agents to protect a flawed system.",
          "key_manifestations": [
            "9/11: The Big Lie (Book)",
            "Minority Report (The Deep State)",
            "Signs (The tin foil hat)",
            "The Bourne Identity (The rogue black ops program)"
          ]
        },
        "2003": {
          "salience_share": 3.8,
          "description": "The Iraq War WMD justification collapses (+0.8%). The government *did* lie. This validates the conspiracy mindset. If they lied about WMDs, what else? *The Da Vinci Code* becomes a massive hit, suggesting the greatest institution in history (The Church) is a fraud. It trains the public to look for hidden codes.",
          "key_manifestations": [
            "WMD Failure (Event)",
            "The Da Vinci Code (Book)",
            "Loose Change (Viral Video)",
            "The Matrix Reloaded (Control is an illusion)"
          ]
        },
        "2004": {
          "salience_share": 4.2,
          "description": "*National Treasure* releases (+0.4%). It makes 'Secret History' fun and patriotic. *Fahrenheit 9/11* suggests the Bush/Bin Laden connection, mainstreaming the 'War for Profit' conspiracy. The swift-boating of John Kerry introduces 'Fake News' tactics to the election—creating a false narrative that overwhelms the truth.",
          "key_manifestations": [
            "National Treasure (Film)",
            "Fahrenheit 9/11 (Documentary)",
            "Swift Boat Veterans for Truth (Campaign)",
            "The Manchurian Candidate (Remake - Corporate mind control)"
          ]
        },
        "2005": {
          "salience_share": 4.8,
          "description": "*Loose Change* 2nd Edition goes viral on Google Video (+1.0%). It is the first blockbuster internet movie. It bypasses gatekeepers. YouTube launches, creating the infrastructure for the 'Rabbit Hole.' *V for Vendetta* depicts a false flag operation used to establish a dictatorship, resonating with Truther beliefs.",
          "key_manifestations": [
            "Loose Change 2nd Edition (Viral Video)",
            "V for Vendetta (Film)",
            "YouTube (The distribution mechanism)",
            "Constantine (Hidden war)"
          ]
        },
        "2006": {
          "salience_share": 5.2,
          "description": "Alex Jones begins to gain traction outside of Austin (+0.5%). *Zeitgeist: The Movie* (2007 release, viral now) mixes 9/11 truth, sun-god theology, and Federal Reserve conspiracy into a 'Theory of Everything.' It radicalizes a generation of Netflix/YouTube watchers. *Children of Men* depicts a government providing suicide kits to a dying population.",
          "key_manifestations": [
            "Zeitgeist: The Movie (Viral Video)",
            "The Departed (The mole)",
            "Scanner Darkly (Paranoia)",
            "Idiocracy (The collapse of intelligence)"
          ]
        },
        "2007": {
          "salience_share": 5.5,
          "description": "The 'Truth' movement holds rallies (+0.3%). It is a physical presence. *Shooter* (Film) depicts a sniper framed by a shadow government assassination plot. The 'Ron Paul Revolution' begins, merging Libertarian anti-fed sentiment with internet conspiracy culture.",
          "key_manifestations": [
            "Shooter (Film)",
            "Ron Paul 2008 Campaign (The Money Bomb)",
            "Zeitgeist (Continued spread)",
            "Transformers (Sector 7 coverup)"
          ]
        },
        "2008": {
          "salience_share": 6.8,
          "description": "The Financial Crisis (+1.2%). The 'Bankers' are revealed as the villains. It fuels the 'Federal Reserve' conspiracy theories. Obama's election triggers 'Birtherism'—the claim he was born in Kenya. It is a racist conspiracy theory amplified by Donald Trump. It marks the shift from 'Anti-Government' to 'Anti-Democrat' conspiracy.",
          "key_manifestations": [
            "Birther Movement (Origins)",
            "The Dark Knight (The noble lie)",
            "Wall-E (Corporate governance)",
            "Body of Lies (CIA manipulation)"
          ]
        },
        "2009": {
          "salience_share": 7.2,
          "description": "The 'Death Panel' rumor dominates the ACA debate (+0.5%). A lie spreads via email chains and Facebook until it dictates policy debate. *Angels & Demons* continues the Dan Brown 'Illuminati' focus. *Ancient Aliens* premieres, proposing that human history is a lie. It erodes faith in archaeology and science.",
          "key_manifestations": [
            "Death Panels (Political Lie)",
            "Ancient Aliens (TV Series Premiere)",
            "Angels & Demons (Film)",
            "Sherlock (The web of lies)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "WikiLeaks (Cluster 9) releases the cables (+0.6%). 'They' are keeping secrets. It validates the paranoid style. *Inception* suggests that an idea can be planted in your mind. The 'Tea Party' embraces fringe theories about Obama's socialism/Islam.",
          "key_manifestations": [
            "WikiLeaks (Cablegate)",
            "Inception (Mind heist)",
            "Shutter Island (Insanity or conspiracy)",
            "Rubicon (TV Series - Intelligence conspiracy)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "Donald Trump demands Obama's birth certificate (+0.7%). Obama releases it; the conspiracy does not die. It proves facts do not matter. *Contagion* features a blogger (Jude Law) peddling fake cures and conspiracy theories during a pandemic—a prophetic depiction of the 'Health Truther.'",
          "key_manifestations": [
            "Trump Birther Crusade",
            "Contagion (Forsythia subplot)",
            "Person of Interest (The Machine)",
            "Captain America: The First Avenger (Hydra within)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "Sandy Hook Elementary Shooting (+1.5%). Alex Jones calls it a 'False Flag.' The 'Crisis Actor' meme is born. Parents are harassed. It is the darkest turn. Conspiracy is no longer fun; it is cruel. *The Avengers* features SHIELD (Government) intending to nuke NYC to stop the aliens.",
          "key_manifestations": [
            "Sandy Hook Trutherism",
            "Alex Jones (Infowars growth)",
            "The Avengers (SHIELD corruption)",
            "Skyfall (The hacker terrorist)"
          ]
        },
        "2013": {
          "salience_share": 8.9,
          "description": "Boston Bombing Reddit Investigation (+0.6%). Internet sleuths wrongly accuse a missing student. It is 'Crowdsourced Conspiracy.' Snowden leaks (Cluster 4) prove the NSA *is* watching everyone. The paranoid are right. *Utopia* (UK) features a conspiracy to sterilize the population via a fake vaccine.",
          "key_manifestations": [
            "Boston Bombing Reddit Witch Hunt",
            "Snowden Leaks (PRISM)",
            "Utopia (TV Series)",
            "House of Cards (The murder in the capital)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "Gamergate (Cluster 7) (+0.9%). It teaches the Alt-Right how to swarm, dox, and create a false reality. It creates the 'Cultural Marxism' conspiracy narrative. *Captain America: The Winter Soldier* reveals that SHIELD has been Hydra all along—pop culture confirming that the Deep State is real.",
          "key_manifestations": [
            "Gamergate (Disinformation tactics)",
            "Captain America: The Winter Soldier (Hydra)",
            "Serial (The armchair detective)",
            "True Detective (The occult ring)"
          ]
        },
        "2015": {
          "salience_share": 9.8,
          "description": "The 'Jade Helm 15' military exercise sparks panic in Texas (+0.5%). The Governor mobilizes the State Guard to monitor the US Military. It shows that conspiracy has captured state governance. *Mr. Robot* features a conspiracy to erase debt (Evil Corp). The Flat Earth movement begins to trend on YouTube.",
          "key_manifestations": [
            "Jade Helm 15 (Panic)",
            "Flat Earth (YouTube resurgence)",
            "Mr. Robot (The top 1% of the 1%)",
            "Spotlight (The real conspiracy of silence)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "Pizzagate (+1.5%). The emails of John Podesta are interpreted through code words to imagine a child sex ring in a pizza shop. An armed man shows up. It is the precursor to QAnon. 'Fake News' sites (Macedonian teens) flood Facebook. Trump alleges the election is rigged (until he wins). The Epistemological Collapse is complete. We live in different realities.",
          "key_manifestations": [
            "Pizzagate (Event)",
            "Fake News (Phenomenon)",
            "Post-Truth (Word of the Year)",
            "HyperNormalisation (Documentary)"
          ]
        }
      }
    },
    "40_the_helicopter_parent_and_safety_industrial_complex": {
      "name": "The Helicopter Parent and the Safety Industrial Complex",
      "description": "This cluster maps the intense anxiety surrounding child-rearing in the millennial era. It moves from the physical safety fears of the 90s (Stranger Danger, Columbine) to the psychological safety fears of the 2010s (Bullying, Microaggressions). It tracks the rise of the 'Tiger Mom,' the participation trophy discourse, and the hyper-scheduling of childhood. It explores how the 'Child' became a project to be optimized for college admissions, resulting in a generation defined by both high achievement and high fragility.",
      "trajectory": {
        "1999": {
          "salience_share": 3.2,
          "description": "Columbine (+1.5%). The event that changes schools forever. Zero Tolerance policies are enacted. The 'Trench Coat Mafia' myth creates fear of the outsider kid. *The Sixth Sense* depicts a mother desperate to help her troubled son. 'Baby Einstein' videos sell the promise of infant genius.",
          "key_manifestations": [
            "Columbine (Event)",
            "Baby Einstein (Product)",
            "The Sixth Sense (Maternal anxiety)",
            "American Pie (The cool dad vs. the helicopter)"
          ]
        },
        "2000": {
          "salience_share": 3.5,
          "description": "*Malcolm in the Middle* presents a chaotic, free-range childhood (+0.3%). It is a throwback. The reality is 'No Child Left Behind' (passed 2001, debated now)—standardized testing begins to dictate curriculum. *Meet the Parents* shows the Boomer father obsessed with the 'Circle of Trust.'",
          "key_manifestations": [
            "Malcolm in the Middle (TV Series)",
            "Meet the Parents (Film)",
            "Dora the Explorer (Interactive learning)",
            "Harry Potter (The special child)"
          ]
        },
        "2001": {
          "salience_share": 3.8,
          "description": "The Patriot Act creates a surveillance mood that filters down to parenting (+0.4%). GPS tracking in phones (future) is anticipated. *Spy Kids* empowers the child, but within a world of danger. The 'Peanut Allergy' awareness begins to change school lunch policies.",
          "key_manifestations": [
            "Spy Kids (Film)",
            "No Child Left Behind (Legislation)",
            "Jimmy Neutron (Boy genius)",
            "Monsters, Inc. (The child as toxic threat)"
          ]
        },
        "2002": {
          "salience_share": 4.1,
          "description": "The 'Amber Alert' system goes national (+0.5%). 'Stranger Danger' is institutionalized on highway signs. *Panic Room* depicts the home as a fortress to protect the child. *Lilo & Stitch* deals with CPS and the threat of the child being taken away.",
          "key_manifestations": [
            "Amber Alert (National rollout)",
            "Panic Room (Film)",
            "Lilo & Stitch (Family separation)",
            "Signs (Protecting the children)"
          ]
        },
        "2003": {
          "salience_share": 4.5,
          "description": "*Finding Nemo* releases (+0.8%). Marlin is the ultimate Helicopter Parent. He crosses the ocean because he is afraid to let his son go. The film critiques his anxiety but also validates the danger of the world. *Thirteen* scares parents about what their daughters are doing.",
          "key_manifestations": [
            "Finding Nemo (Film)",
            "Thirteen (Film)",
            "Cheaper by the Dozen (Chaos vs. Order)",
            "Freaky Friday (Generational misunderstanding)"
          ]
        },
        "2004": {
          "salience_share": 4.8,
          "description": "Facebook launches (Cluster 9). It will eventually become the 'Mom Group' hub. *Mean Girls* shows the 'Cool Mom' (Amy Poehler) who has no boundaries. *The Incredibles* deals with parents forcing their special kids to hide their gifts for safety.",
          "key_manifestations": [
            "Mean Girls (The Cool Mom)",
            "The Incredibles (Family unit)",
            "Supernanny (TV Series Premiere - Outsourcing discipline)",
            "A Series of Unfortunate Events (Incompetent guardians)"
          ]
        },
        "2005": {
          "salience_share": 5.2,
          "description": "*Supernanny* and *Nanny 911* boom (+0.6%). Parents are shown as incompetent; they need an expert to tame their children. It pathologizes normal behavior. *Madagascar* features zoo animals (coddled kids) thrust into the wild.",
          "key_manifestations": [
            "Supernanny (US popularity)",
            "Madagascar (Film)",
            "Sky High (School pressure)",
            "Yours, Mine & Ours (Blended family logistics)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "The 'Participation Trophy' debate begins to simmer (+0.4%). Critics claim kids are being 'coddled.' *Little Miss Sunshine* satirizes the child beauty pageant circuit—the ultimate 'Project Child.' *High School Musical* presents a sanitized, safe teen world.",
          "key_manifestations": [
            "Little Miss Sunshine (Film)",
            "High School Musical (Disney sanitization)",
            "The Pursuit of Happyness (Father/Son survival)",
            "Cars (The lost race car)"
          ]
        },
        "2007": {
          "salience_share": 5.8,
          "description": "The iPhone launches. The 'Digital Pacifier' arrives (-0.3% behavior, +0.6% impact). *Juno* deals with teen pregnancy not as a tragedy but as a choice, complicating the 'purity' narrative. 'Helicopter Parent' term gains wide usage in college admissions offices.",
          "key_manifestations": [
            "iPhone (The distraction device)",
            "Juno (Film)",
            "Kid Nation (TV Series - Lord of the Flies reality)",
            "Knocked Up (Immaturity vs Parenthood)"
          ]
        },
        "2008": {
          "salience_share": 6.2,
          "description": "*Taken* releases (+0.6%). It is the ultimate dad fantasy: I have a special set of skills to save my daughter. It validates the paranoia that Europe is a sex trafficking ring. *Step Brothers* shows the result of never launching—the man-child at home.",
          "key_manifestations": [
            "Taken (Film)",
            "Step Brothers (Failure to launch)",
            "Secret Life of the American Teenager (TV Series)",
            "Twilight (The protective vampire boyfriend)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "*Modern Family* premieres (+0.5%). It showcases three styles: The Helicopter (Claire), The Cool Dad (Phil), and the permissive (Jay). It normalizes the anxiety. 'Balloon Boy' (Cluster 5) shows parents exploiting their kids for fame.",
          "key_manifestations": [
            "Modern Family (TV Series)",
            "Balloon Boy Hoax",
            "The Blind Side (The savior parent)",
            "Coraline (The Other Mother)"
          ]
        },
        "2010": {
          "salience_share": 7.1,
          "description": "The 'Tiger Mom' (Amy Chua) excerpt goes viral in WSJ (+1.0%). It ignites a culture war. Strict Asian-style parenting vs. Western coddling. It explicitly links parenting style to economic success. *Toy Story 3* deals with the parent (Andy's mom) letting the child go to college.",
          "key_manifestations": [
            "Battle Hymn of the Tiger Mother (Book/Article)",
            "Toy Story 3 (Departure)",
            "Despicable Me (Adoption)",
            "Easy A (Trusting parents)"
          ]
        },
        "2011": {
          "salience_share": 7.5,
          "description": "The 'Bullying' documentary releases (+0.6%). The anti-bullying movement becomes a primary school focus. 'It Gets Better' (Cluster 25). *We Need to Talk About Kevin* explores the nightmare scenario: the sociopathic child and the mother's guilt.",
          "key_manifestations": [
            "Bully (Documentary)",
            "We Need to Talk About Kevin (Film)",
            "Dance Moms (TV Series Premiere - Exploitation)",
            "The Tree of Life (Authoritarian vs. Graceful parenting)"
          ]
        },
        "2012": {
          "salience_share": 7.8,
          "description": "*The Hunger Games* (Cluster 20) depicts a world where adults sacrifice children (+0.4%). It resonates because the college admissions process feels like a reaping. 'Elf on the Shelf' becomes a mandatory surveillance tradition. The child is always being watched.",
          "key_manifestations": [
            "Elf on the Shelf (Trend)",
            "The Hunger Games (Child sacrifice)",
            "Brave (Mother/Daughter conflict)",
            "Moonrise Kingdom (The runaway kids)"
          ]
        },
        "2013": {
          "salience_share": 8.2,
          "description": "The 'Millennial' backlash begins. Time Magazine cover: 'The Me Me Me Generation.' Parents are blamed for raising narcissists. *Frozen* shows the damage of isolating a child 'for their own good' (Conceal, don't feel).",
          "key_manifestations": [
            "Time Magazine 'Me Me Me Generation'",
            "Frozen (Isolation)",
            "The Croods (Overprotective father)",
            "Prisoners (The vigilante dad)"
          ]
        },
        "2014": {
          "salience_share": 8.5,
          "description": "The 'Trigger Warning' discourse moves from Tumblr to Campus (+0.6%). Students demand protection from harmful ideas. Critics call it 'coddling.' *Whiplash* shows the abusive mentor replacing the parent. *Boyhood* tracks the entire arc of a child, showing the messy reality vs. the optimized ideal.",
          "key_manifestations": [
            "Trigger Warning Debate",
            "Boyhood (Film)",
            "Whiplash (Abuse as teaching)",
            "The Babadook (Maternal resentment)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "*Inside Out* (Cluster 38) teaches parents to validate Sadness (+0.8%). It is a corrective to the 'Happiness at all costs' parenting. 'Free Range Kids' parents in Maryland are investigated by CPS for letting kids walk home alone. The state enforces the Helicopter.",
          "key_manifestations": [
            "Inside Out (Emotional validation)",
            "Free Range Kids Controversy",
            "Room (Parenting in captivity)",
            "The Big Short (The burden of future debt)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "*Stranger Things* releases (+0.7%). It appeals to nostalgia for the 80s—a time when kids rode bikes without phones and fought monsters. It highlights the loss of childhood autonomy. 'Snowflake' becomes a political slur. The generation raised in safety is accused of being too fragile for the real world.",
          "key_manifestations": [
            "Stranger Things (The autonomous child)",
            "Snowflake (Slur)",
            "Captain Fantastic (Alternative parenting)",
            "Bad Moms (Rejection of perfection)"
          ]
        }
      }
    },
    "41_the_stomp_clap_hey_and_the_commercialization_of_folk": {
      "name": "The Stomp-Clap Hey and the Commercialization of Folk",
      "description": "This cluster maps the sudden, massive resurgence of acoustic instrumentation, suspenders, and 'authentic' rural aesthetics in the midst of the digital boom. It tracks the movement from the genuine indie experimentation of Arcade Fire and Bon Iver to the corporatized, radio-friendly 'Stomp-Clap' sound of Mumford & Sons and The Lumineers. It explores the cultural hunger for a simulated pre-digital past—barn weddings, mason jars, and banjos—as a reaction to the sterility of the iPhone era, eventually becoming the soundtrack for bank commercials and corporate retreats.",
      "trajectory": {
        "1999": {
          "salience_share": 0.5,
          "description": "Folk is dead. The acoustic guitar is for sensitive singer-songwriters (Jewel) or post-grunge bands (Creed). The 'O Brother, Where Art Thou?' soundtrack is recording, but hasn't released yet. The aesthetic is uncool. Pop and Nu-Metal dominate.",
          "key_manifestations": [
            "O Brother, Where Art Thou? (Production)",
            "Jewel (The fading folk-pop star)",
            "Beck 'Mutations' (Folk irony)",
            "Wilco 'Summerteeth' (Alt-country roots)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "*O Brother, Where Art Thou?* releases (+1.0%). The soundtrack becomes a shock phenomenon, selling millions. It reintroduces Bluegrass to the mainstream. It taps into a latent desire for 'Old Weird America.' *Coldplay* releases 'Parachutes'—acoustic, sensitive, but British.",
          "key_manifestations": [
            "O Brother, Where Art Thou? (Soundtrack)",
            "Coldplay 'Yellow' (Acoustic pop)",
            "Ryan Adams 'Heartbreaker' (Alt-country cool)",
            "Almost Famous (The acoustic bus scene)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "The White Stripes (Cluster 6) use folk/blues aesthetics, but with punk energy. The 'New Acoustic' movement is quiet. 9/11 creates a brief surge in patriotic country, but the 'Hipster Folk' hasn't coalesced. *The Royal Tenenbaums* uses classic folk (Nico, Elliott Smith) to signal intellectual melancholy.",
          "key_manifestations": [
            "The White Stripes 'White Blood Cells'",
            "The Royal Tenenbaums Soundtrack",
            "Gillian Welch 'Time (The Revelator)'",
            "Shrek (Hallelujah cover)"
          ]
        },
        "2002": {
          "salience_share": 2.2,
          "description": "*Iron & Wine* releases 'The Creek Drank the Cradle.' Lo-fi, whispery, recorded in a bedroom. It sets the template for 'Indie Folk.' It is intimate and fragile. *Johnny Cash* covers 'Hurt,' bridging the gap between industrial rock and country, proving acoustic music can have gravitas.",
          "key_manifestations": [
            "Iron & Wine (Debut)",
            "Johnny Cash 'Hurt' (Video)",
            "Norah Jones 'Come Away With Me' (Soft jazz/folk ubiquity)",
            "Bright Eyes (Folk emo)"
          ]
        },
        "2003": {
          "salience_share": 2.5,
          "description": "*The Postal Service* mixes folk lyrics with glitchy beats, but *Sufjan Stevens* releases 'Michigan,' explicitly embracing the banjo and the choir. It is 'Chamber Pop.' It is earnest, religious, and ambitious. The 'hipster' begins to wear cardigans.",
          "key_manifestations": [
            "Sufjan Stevens 'Michigan'",
            "The Decemberists (Victorian folk)",
            "A Mighty Wind (Folk satire)",
            "Cold Mountain (Civil War folk revival)"
          ]
        },
        "2004": {
          "salience_share": 3.1,
          "description": "*Garden State* (Cluster 2) popularizes The Shins and Iron & Wine. 'Let Go' by Frou Frou. It cements the 'Soft Indie' sound as the soundtrack of emotional awakening. *Devendra Banhart* introduces 'Freak Folk'—long beards, psychedelic aesthetics, hippie communes. It is 'authenticity' as a costume.",
          "key_manifestations": [
            "Garden State Soundtrack",
            "Devendra Banhart (Freak Folk)",
            "Joanna Newsom (Harp folk)",
            "Modest Mouse 'Good News' (Banjo on the radio)"
          ]
        },
        "2005": {
          "salience_share": 3.8,
          "description": "*Bright Eyes* releases 'I'm Wide Awake, It's Morning' (+0.7%). 'First Day of My Life' is the definitive wedding song of the demographic. It is earnest, acoustic, and anti-Bush. *Sufjan Stevens* releases 'Illinois'—a maximalist folk masterpiece. The 'Banjo' is now cool.",
          "key_manifestations": [
            "I'm Wide Awake, It's Morning (Album)",
            "Illinois by Sufjan Stevens",
            "Walk the Line (Johnny Cash biopic)",
            "Brokeback Mountain (Acoustic guitar score)"
          ]
        },
        "2006": {
          "salience_share": 4.2,
          "description": "*Once* (Film) releases (+0.4%). It romanticizes the busker. 'Falling Slowly' wins the Oscar. It strips away the studio polish. *Band of Horses* brings 'Reverb Folk' to the mainstream. The beard trend for men begins to tick upward.",
          "key_manifestations": [
            "Once (Film)",
            "Band of Horses 'The Funeral'",
            "Beirut 'Gulag Orkestar' (Balkan folk)",
            "Dixie Chicks (Taking the Long Way - Folk rock)"
          ]
        },
        "2007": {
          "salience_share": 4.8,
          "description": "*Into the Wild* (Film) features an Eddie Vedder acoustic soundtrack. It glorifies the rejection of society for nature. *Feist* '1234' is used in an iPod commercial, proving that 'Quirky Folk' sells tech. *Bon Iver* records 'For Emma' in the cabin, creating the foundational myth of the genre.",
          "key_manifestations": [
            "For Emma, Forever Ago (Recording myth)",
            "Into the Wild (Soundtrack)",
            "Feist '1234' (Apple Ad)",
            "Juno (Moldy Peaches - Anti-folk)"
          ]
        },
        "2008": {
          "salience_share": 5.9,
          "description": "*Fleet Foxes* releases their self-titled album (+1.1%). It is a harmonic, pastoral explosion. It sounds like a church in a forest. It creates a massive aesthetic shift toward flannel, hiking boots, and 'The Woods.' It is the peak of the 'Artistic' phase of the cluster.",
          "key_manifestations": [
            "Fleet Foxes (Album)",
            "Bon Iver (Album release)",
            "Vampire Weekend (Preppy folk fusion)",
            "Twilight (Bon Iver/Iron & Wine on soundtrack)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "*Mumford & Sons* releases 'Sigh No More' in the UK (+0.9%). They take the Fleet Foxes sound, speed it up, and add a driving kick drum. It is 'Stadium Folk.' It is designed for beer commercials and shouting. *Edward Sharpe and the Magnetic Zeros* release 'Home'—the whistle hook is born.",
          "key_manifestations": [
            "Sigh No More (Album)",
            "Home by Edward Sharpe (Song)",
            "The Avett Brothers 'I and Love and You'",
            "Where the Wild Things Are (Soundtrack)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "Mumford & Sons breaks the US. 'Little Lion Man' is everywhere. The 'Stomp-Clap' beat becomes the default sound of radio rock. *Arcade Fire* wins the Grammy for 'The Suburbs', validating the indie-folk aesthetic on the biggest stage. The 'Rustic Wedding' trend (barns, burlap) explodes on Pinterest.",
          "key_manifestations": [
            "Mumford & Sons US Invasion",
            "The Suburbs (Grammy Win)",
            "Pinterest Rustic Wedding Trend",
            "Tangled (Folk-pop revival)"
          ]
        },
        "2011": {
          "salience_share": 8.2,
          "description": "*The Head and the Heart* and *Of Monsters and Men* ('Little Talks') release (+0.7%). The sound is formulaic: shout-along choruses, 'Hey!', brass sections, acoustic guitars. It is 'Whoop-Holler' music. It is optimistic and communal, a reaction to the cynical recession era.",
          "key_manifestations": [
            "Little Talks (Song)",
            "The Head and the Heart (Album)",
            "Civil Wars (Barton Hollow)",
            "Kinfolk Magazine (The visual equivalent)"
          ]
        },
        "2012": {
          "salience_share": 8.8,
          "description": "*The Lumineers* release 'Ho Hey' (+0.6%). It is the singularity. The simplest possible song structure. It is ubiquitous. It plays in every grocery store. *Mumford & Sons* releases 'Babel', selling 600k copies in a week. The aesthetic (vests, fedoras) is now a uniform.",
          "key_manifestations": [
            "Ho Hey (Song)",
            "Babel (Album)",
            "Phillip Phillips 'Home' (American Idol folk)",
            "The Hunger Games (Soundtrack - Taylor Swift/Civil Wars)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "*Inside Llewyn Davis* (Coen Brothers) offers a cynical, dark look at the 60s folk scene, de-romanticizing the struggle (-0.3%). *Avicii* releases 'Wake Me Up'—mixing 'Stomp-Clap' folk with EDM drops. It is the 'Country-House' hybrid. It signals the genre has been fully metabolized by the pop machine.",
          "key_manifestations": [
            "Inside Llewyn Davis (Film)",
            "Wake Me Up by Avicii",
            "Timber by Pitbull/Kesha (Country-pop fusion)",
            "Frozen (Folk aesthetic in animation)"
          ]
        },
        "2014": {
          "salience_share": 7.5,
          "description": "Backlash begins (-1.0%). Mumford & Sons abandon the banjo for electric guitars (*Wilder Mind* announcement). They know the trend is dead. The 'Lumbersexual' look (Cluster 19) is mocked. *Hozier* releases 'Take Me to Church', keeping the organic sound but adding blues/gospel darkness, moving away from the 'Happy Folk' vibe.",
          "key_manifestations": [
            "Take Me to Church (Song)",
            "Mumford & Sons Electric Pivot",
            "George Ezra (Budapest)",
            "Guardians of the Galaxy (70s pop replaces folk as nostalgia)"
          ]
        },
        "2015": {
          "salience_share": 6.2,
          "description": "The sound becomes the exclusive domain of car commercials and insurance ads (-1.3%). It is 'Corporate Joy.' *Chris Stapleton* brings 'Authentic Country' back, displacing the 'Folk-Pop' posers. The cool kids move to 'Bedroom Pop' and 'Lo-Fi Hip Hop.'",
          "key_manifestations": [
            "Chris Stapleton 'Traveller'",
            "Car Commercials (Generic stomp-clap)",
            "Halsey/Troye Sivan (The shift to synth-pop)",
            "The Revenant (Nature as horror, not whimsy)"
          ]
        },
        "2016": {
          "salience_share": 5.5,
          "description": "Twenty One Pilots mixes ukulele with reggae/rap, creating a new, weirder hybrid. The 'Stomp-Clap' era is officially over. The aesthetic lingers in wedding decor, but culturally it is spent. *La La Land* brings Jazz nostalgia, replacing the Folk nostalgia.",
          "key_manifestations": [
            "Stressed Out (Ukulele rap)",
            "La La Land (Jazz revival)",
            "Captain Fantastic (The folk lifestyle taken to extremes)",
            "This Is Us (TV Series - The acoustic emotional manipulation)"
          ]
        }
      }
    },
    "42_the_manic_pixie_dream_girl_and_the_indie_romance": {
      "name": "The Manic Pixie Dream Girl and the Indie Romance",
      "description": "This cluster analyzes the specific gender dynamics of the 'Indie' film boom. It tracks the rise of the 'Manic Pixie Dream Girl' (MPDG)—a quirky, shallow female character who exists solely to teach the brooding, sensitive male protagonist to embrace life. It moves from the earnest embrace of this trope (*Garden State*, *Elizabethtown*) to its deconstruction (*500 Days of Summer*, *Eternal Sunshine*) and eventual rejection (*Ruby Sparks*). It reflects a generation of men raised on 'Nice Guy' narratives struggling with the reality of female agency.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "The trope exists in prototype form (Dharma & Greg), but the cinema is dominated by the 'Prom Queen' makeover (She's All That). *Fight Club* features Marla Singer—a 'Dark' MPDG who mirrors the protagonist's nihilism rather than fixing it. She is the anti-quirk.",
          "key_manifestations": [
            "She's All That (The Makeover)",
            "Fight Club (Marla Singer)",
            "American Beauty (The Virgin fantasy)",
            "10 Things I Hate About You (The Shrew)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "*Almost Famous* features Penny Lane (+0.3%). She is the Muse. She exists to inspire the rock stars and the young journalist. She has tragedy, but her function is to facilitate male genius. *High Fidelity* explores the male obsession with 'The List' and the refusal to grow up.",
          "key_manifestations": [
            "Almost Famous (Penny Lane)",
            "High Fidelity (Rob Gordon's exes)",
            "Virgin Suicides (The male gaze on female tragedy)",
            "Amélie (The MPDG as protagonist - rare)"
          ]
        },
        "2001": {
          "salience_share": 2.2,
          "description": "*Amélie* (US Release) (+0.4%). While she is the lead, her behavior (fixing lives, whimsy, scavenger hunts) provides the blueprint for the MPDG behavior. *Moulin Rouge!* features Satine, the 'Sparkling Diamond' who dies to teach the writer about love. The 'Savior Woman' is central.",
          "key_manifestations": [
            "Amélie (The blueprint)",
            "Moulin Rouge! (The tragic muse)",
            "Sweet November (Dying girl teaches Keanu to live)",
            "Vanilla Sky (Cameron Diaz as the dark obsessive)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "*Punch-Drunk Love* (+0.3%). Lena exists to save Barry from his rage. She has no internal life explained, she just *loves* him inexplicably. *Adaptation* deconstructs the 'script' of romance, but *My Big Fat Greek Wedding* reinforces the 'woman fixes the man's life' narrative in a traditional rom-com structure.",
          "key_manifestations": [
            "Punch-Drunk Love (Lena)",
            "Adaptation (The orchid thief)",
            "Spiderman (Mary Jane as pure goal)",
            "Igby Goes Down (The indie misanthrope)"
          ]
        },
        "2003": {
          "salience_share": 2.9,
          "description": "*Lost in Translation* (+0.4%). Charlotte (Scarlett Johansson) is the dream girl for the aging Bob. She listens, she understands, she is beautiful and sad. It validates the 'Old Soul' male fantasy. *The Station Agent* explores quiet connection, but the female lead is still the catalyst for the man's re-entry into society.",
          "key_manifestations": [
            "Lost in Translation (Charlotte)",
            "The Station Agent (Olivia)",
            "Big Fish (The romantic fable)",
            "Elf (Zooey Deschanel enters the chat)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*Garden State* releases (+1.6%). The Singularity. Natalie Portman in the epileptic helmet. 'This song will change your life.' She has no job, no future, just quirk and availability. She saves the medicated male lead. *Eternal Sunshine* simultaneously *deconstructs* the trope—Clementine explicitly says 'I'm not a concept... I'm just a fucked up girl looking for my own peace of mind.'",
          "key_manifestations": [
            "Garden State (Sam)",
            "Eternal Sunshine (Clementine Kruczynski)",
            "The Girl Next Door (The porn star dream)",
            "Closer (The destruction of the muse)"
          ]
        },
        "2005": {
          "salience_share": 5.1,
          "description": "*Elizabethtown* releases (+0.6%). Nathan Rabin coins the term 'Manic Pixie Dream Girl' in his review. Kirsten Dunst's character is a flight attendant who exists solely to save Orlando Bloom from suicide. It is the peak of the cliché. The backlash begins immediately among critics, but audiences still eat it up.",
          "key_manifestations": [
            "Elizabethtown (Claire Colburn)",
            "The 40-Year-Old Virgin (The manic pixie stoner - Beth)",
            "Wedding Crashers (The crazy girl trope)",
            "How I Met Your Mother (Robin Scherbatsky - The cool girl)"
          ]
        },
        "2006": {
          "salience_share": 4.8,
          "description": "*The Science of Sleep* (+0.3%). Michel Gondry again. It visualizes the MPDG world—cardboard cities, clouds made of cotton. It infantilizes romance. *Stranger Than Fiction* features Maggie Gyllenhaal as the anarchist baker who teaches the IRS agent to live. The 'Quirky Job' is essential.",
          "key_manifestations": [
            "The Science of Sleep (Stephanie)",
            "Stranger Than Fiction (Ana Pascal)",
            "The Holiday (Cameron Diaz's manic energy)",
            "Step Up (The dancer saving the thug)"
          ]
        },
        "2007": {
          "salience_share": 5.2,
          "description": "*Juno* (Film) (+0.4%). Juno is manic and pixie-ish, but she is the *protagonist*, giving her agency. However, she still serves to teach the adoptive parents and her boyfriend about maturity. *Lars and the Real Girl* features a sex doll as the ultimate MPDG—literally an object onto which the male projects his needs.",
          "key_manifestations": [
            "Juno (Juno MacGuff)",
            "Lars and the Real Girl (Bianca)",
            "Across the Universe (Lucy)",
            "Enchanted (The literal cartoon princess)"
          ]
        },
        "2008": {
          "salience_share": 5.5,
          "description": "*Forgetting Sarah Marshall* features Mila Kunis as the 'Cool Girl' alternative to the high-maintenance ex (+0.3%). She works at the front desk, loves the protagonist's puppet show, and demands nothing. *Yes Man* features Zooey Deschanel again, leading a cult of spontaneity. She is typecast as the genre's avatar.",
          "key_manifestations": [
            "Forgetting Sarah Marshall (Rachel Jansen)",
            "Yes Man (Allison)",
            "Nick and Norah's Infinite Playlist (The musical adventure)",
            "Twilight (Bella - the inverse, the passive void)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "*500 Days of Summer* releases (+1.3%). The Deconstruction. Tom projects the MPDG fantasy onto Summer (Zooey Deschanel). The movie shows that *he* is the villain for ignoring her actual desires (not wanting a boyfriend). 'I love the Smiths' is the trap. It forces the 'Nice Guy' to confront his own projection.",
          "key_manifestations": [
            "500 Days of Summer (Summer Finn)",
            "Adventureland (Em)",
            "Scott Pilgrim vs. the World (Ramona Flowers - The edgy variant)",
            "Paper Heart (Meta-documentary on love)"
          ]
        },
        "2010": {
          "salience_share": 6.2,
          "description": "*Scott Pilgrim* (Film) (+0.4%). Ramona Flowers is the 'Alt-Girl' MPDG. She has colored hair and baggage. Scott must 'defeat' her past to 'win' her. The movie acknowledges Scott is a jerk, but he still gets the girl. *Blue Valentine* destroys the indie romance entirely, showing the grim reality of the 'quirky' couple five years later.",
          "key_manifestations": [
            "Scott Pilgrim vs. the World (Ramona)",
            "Blue Valentine (The death of the dream)",
            "Love & Other Drugs (The sick MPDG)",
            "Easy A (Deconstructing the slut/virgin binary)"
          ]
        },
        "2011": {
          "salience_share": 5.5,
          "description": "*New Girl* premieres (TV) (-0.7% film, +0.5% TV). Zooey Deschanel brings the 'Adorkable' aesthetic to primetime. It leans into the trope so hard it becomes a sitcom format. *Like Crazy* shows the 'Indie Romance' as a logistical nightmare (visas), grounding it in reality.",
          "key_manifestations": [
            "New Girl (Jess Day)",
            "Like Crazy (Film)",
            "Midnight in Paris (The nostalgia fantasy)",
            "Crazy, Stupid, Love (The rediscovery of manhood)"
          ]
        },
        "2012": {
          "salience_share": 5.8,
          "description": "*Ruby Sparks* releases (+0.8%). The tombstone of the genre. A writer literally *writes* his perfect MPDG into existence. When she starts having her own will, he rewrites her to be happy/clingy/French. It exposes the MPDG as a form of abuse and control. It kills the fantasy.",
          "key_manifestations": [
            "Ruby Sparks (Ruby)",
            "Silver Linings Playbook (The chaotic MPDG - Tiffany)",
            "Safety Not Guaranteed (Time travel quirk)",
            "Girls (The antithesis of the dream girl)"
          ]
        },
        "2013": {
          "salience_share": 5.2,
          "description": "*Her* (+0.4%). The MPDG is an Operating System. Samantha has no body, only a voice. She eventually outgrows the protagonist and leaves him. It is the final admission that the 'perfect woman' cannot exist for the male ego. *The Spectacular Now* shows the 'Nice Guy' damaging the girl, reversing the saving dynamic.",
          "key_manifestations": [
            "Her (Samantha)",
            "The Spectacular Now (Aimee)",
            "Don Jon (The porn fantasy vs. reality)",
            "About Time (The time travel fix)"
          ]
        },
        "2014": {
          "salience_share": 4.8,
          "description": "*Gone Girl* (Cluster 30) introduces the 'Cool Girl' monologue (-0.6%). It explicitly calls out the male fantasy: 'The Cool Girl... eats cold pizza and remains a size 2.' It frames the performance of the MPDG/Cool Girl as a sociopathic act of survival. The trope is now a villain.",
          "key_manifestations": [
            "Gone Girl (Amy Dunne)",
            "The Fault in Our Stars (The tragedy porn variant)",
            "Obvious Child (The abortion rom-com)",
            "Begin Again (Music as connection)"
          ]
        },
        "2015": {
          "salience_share": 4.2,
          "description": "*Paper Towns* (John Green adaptation) releases (-0.6%). The protagonist spends the movie looking for the MPDG (Margo), only to find her and realize she *doesn't want to be found* and isn't a mystery, just a girl. The movie lectures the audience on not projecting fantasies. The trope is officially dead.",
          "key_manifestations": [
            "Paper Towns (Margo Roth Spiegelman)",
            "Me and Earl and the Dying Girl (Deconstructing the muse)",
            "Trainwreck (The role reversal)",
            "Man Up (The anti-rom-com)"
          ]
        },
        "2016": {
          "salience_share": 3.8,
          "description": "The 'Fleabag' era begins (+0.4% new archetype). The 'Messy Woman' replaces the 'Dream Girl.' She is not there to save men; she is there to survive her own trauma. *La La Land* plays with the romance tropes but ends with the couple separating to pursue careers—ambition wins over love.",
          "key_manifestations": [
            "Fleabag (The Messy Woman)",
            "La La Land (The career choice)",
            "Love (Netflix Series - The toxic hipster)",
            "The Edge of Seventeen (The teen mess)"
          ]
        }
      }
    },
    "43_the_rise_of_prestige_documentary_and_true_crime": {
      "name": "The Rise of Prestige Documentary and True Crime",
      "description": "This cluster maps the explosion of non-fiction storytelling as a form of mass entertainment. It moves from the political polemics of Michael Moore (*Fahrenheit 9/11*) to the serialized, 'bingeable' justice narratives of the 2010s (*Serial*, *Making a Murderer*). It explores how 'True Crime' shifted from trashy cable TV (Dateline) to 'Prestige' art, creating a culture of amateur sleuths and Reddit detectives who treat real-world tragedy as a puzzle to be solved.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "Documentaries are for PBS or art houses. *Buena Vista Social Club* is a hit, but it's music. The 'True Crime' genre is the domain of *Cops* and *America's Most Wanted*—low budget, exploitative. The JonBenét Ramsey case obsesses the tabloids, but hasn't yet been elevated to 'prestige.'",
          "key_manifestations": [
            "Buena Vista Social Club (Film)",
            "Cops (TV Show)",
            "The Blair Witch Project (Fake documentary style)",
            "JonBenét Ramsey Coverage (Tabloid obsession)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "*Paradise Lost 2* releases on HBO (+0.3%). The 'West Memphis Three' case becomes a cause célèbre for celebrities. It introduces the idea that a documentary can free the innocent. *Survivor* (Reality TV) borrows the 'documentary' aesthetic (confessionals) for entertainment.",
          "key_manifestations": [
            "Paradise Lost 2: Revelations (HBO)",
            "Survivor (Reality formatting)",
            "Dark Days (Subway documentary)",
            "Gladiator (Historical fiction dominating)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "*Bowling for Columbine* (Production) begins filming. The 9/11 attacks create a hunger for 'Real' footage. The news cycle becomes a 24-hour documentary of trauma. *The Staircase* (French production) begins filming Michael Peterson—the grandfather of the modern True Crime series.",
          "key_manifestations": [
            "9/11 News Coverage (The reality event)",
            "Blue Planet (Nature documentary as blockbuster)",
            "Dogtown and Z-Boys (Niche history)",
            "Murder on a Sunday Morning (Oscar winner)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "*Bowling for Columbine* releases (+0.7%). It wins the Oscar. Michael Moore becomes a household name. He proves a doc can be funny, aggressive, and profitable. It mainstream the 'Polemic' format. *Jackass: The Movie* is a documentary of stupidity, generating massive box office.",
          "key_manifestations": [
            "Bowling for Columbine (Film)",
            "Jackass: The Movie (Film)",
            "Comedian (Jerry Seinfeld doc)",
            "Spellbound (The competition doc)"
          ]
        },
        "2003": {
          "salience_share": 2.9,
          "description": "*Capturing the Friedmans* releases (+0.4%). It uses home movies to explore a pedophilia case. It is ambiguous and disturbing. It elevates the genre to high art. *The Fog of War* allows Robert McNamara to explain Vietnam, turning history into a confessional.",
          "key_manifestations": [
            "Capturing the Friedmans (Film)",
            "The Fog of War (Film)",
            "Touching the Void (Reenactment style)",
            "Monster (Biopic based on True Crime)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*Fahrenheit 9/11* releases (+1.6%). It wins the Palme d'Or. It grosses $222 million. It is a political weapon. Documentaries are now Blockbusters. *Super Size Me* changes the fast food industry. The form is now a tool for social engineering.",
          "key_manifestations": [
            "Fahrenheit 9/11 (Film)",
            "Super Size Me (Film)",
            "Metallica: Some Kind of Monster (Celebrity deconstruction)",
            "Born into Brothels (Oscar winner)"
          ]
        },
        "2005": {
          "salience_share": 5.1,
          "description": "*March of the Penguins* (+0.6%). It grosses $127 million. Nature docs are now family entertainment. *Grizzly Man* (Werner Herzog) uses found footage to explore madness. *Enron: The Smartest Guys in the Room* turns financial crime into a thriller. The 'Corporate Takedown' genre emerges.",
          "key_manifestations": [
            "March of the Penguins (Film)",
            "Grizzly Man (Film)",
            "Enron: The Smartest Guys in the Room (Film)",
            "Murderball (Sports doc)"
          ]
        },
        "2006": {
          "salience_share": 5.8,
          "description": "*An Inconvenient Truth* releases (+0.7%). A PowerPoint presentation becomes a global phenomenon (Cluster 35). *Planet Earth* (BBC) sets a new standard for HD visuals. *Jesus Camp* exposes the political indoctrination of children, horrifying the secular Left.",
          "key_manifestations": [
            "An Inconvenient Truth (Film)",
            "Planet Earth (Series)",
            "Jesus Camp (Film)",
            "Who Killed the Electric Car? (Conspiracy doc)"
          ]
        },
        "2007": {
          "salience_share": 6.2,
          "description": "*The King of Kong* releases (+0.4%). It finds narrative gold in a niche rivalry (Arcade Games). It creates a Hero and a Villain through editing. It proves 'Truth is stranger than fiction.' *Sicko* attacks the healthcare system. The 'Michael Moore style' is becoming a formula.",
          "key_manifestations": [
            "The King of Kong (Film)",
            "Sicko (Film)",
            "Taxi to the Dark Side (War on Terror critique)",
            "No End in Sight (Iraq War autopsy)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*Man on Wire* releases (+0.3%). It is a 'Heist Movie' about art. It wins the Oscar. *Religulous* (Cluster 18) attacks religion. *Dear Zachary* is released quietly, but becomes a word-of-mouth sensation for its emotional devastation. It foreshadows the 'Twist' ending of future crime series.",
          "key_manifestations": [
            "Man on Wire (Film)",
            "Dear Zachary (Film)",
            "Religulous (Film)",
            "Waltz with Bashir (Animated Doc)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "*The Cove* combines eco-activism with spy thriller mechanics (+0.3%). *Food, Inc.* (Cluster 34) changes how people shop. *Capitalism: A Love Story* marks the decline of Michael Moore's influence—the audience is tired of the polemic.",
          "key_manifestations": [
            "The Cove (Film)",
            "Food, Inc. (Film)",
            "The September Issue (Fashion doc)",
            "Capitalism: A Love Story (Film)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "*Exit Through the Gift Shop* (Banksy) questions the nature of art and reality (+0.7%). Is it a prank? *Catfish* releases. It invents a term for online deception. It blurs the line between documentary and staged reality. It predicts the digital identity crisis.",
          "key_manifestations": [
            "Exit Through the Gift Shop (Film)",
            "Catfish (Film)",
            "Restrepo (War journalism)",
            "Inside Job (Financial crisis explainer)"
          ]
        },
        "2011": {
          "salience_share": 7.2,
          "description": "*Senna* uses only archival footage to tell a racing story like an action movie (+0.3%). *Jiro Dreams of Sushi* (Cluster 34) creates the 'Obsessive Craftsman' subgenre. *Paradise Lost 3* sees the West Memphis Three released from prison—proving the documentary actually worked.",
          "key_manifestations": [
            "Senna (Film)",
            "Paradise Lost 3: Purgatory (HBO)",
            "Jiro Dreams of Sushi (Film)",
            "Bill Cunningham New York (Character study)"
          ]
        },
        "2012": {
          "salience_share": 7.8,
          "description": "*The Imposter* releases (+0.6%). It is a thriller that is 'too crazy to be true.' It uses stylized reenactments. *The Queen of Versailles* documents the crash of the 1% (Cluster 14). *Searching for Sugar Man* is a feel-good mystery. The genre is diversifying into 'Entertainment' rather than just 'Education.'",
          "key_manifestations": [
            "The Imposter (Film)",
            "The Queen of Versailles (Film)",
            "Searching for Sugar Man (Film)",
            "Indie Game: The Movie (The creative struggle)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "*Blackfish* (Cluster 35) releases (+0.7%). The 'Activist Doc' is back. *The Act of Killing* is a surreal masterpiece where Indonesian death squad leaders reenact their crimes as movie scenes. It is avant-garde and horrifying. Netflix begins to acquire documentaries aggressively.",
          "key_manifestations": [
            "Blackfish (Film)",
            "The Act of Killing (Film)",
            "20 Feet from Stardom (Oscar winner)",
            "Stories We Tell (Meta-memoir)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "*Serial* (Podcast) launches (+1.5%). The Singularity. It brings 'Prestige True Crime' to the masses. Millions obsess over Adnan Syed's guilt. It introduces the 'Unreliable Narrator' to non-fiction. Reddit detectives go wild. It proves that 'long-form audio journalism' is a blockbuster format.",
          "key_manifestations": [
            "Serial (Podcast)",
            "Citizenfour (Real time spy thriller)",
            "Virunga (Eco-warfare)",
            "Gone Girl (Fictional reflection of the crime obsession)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "*The Jinx* (HBO) and *Making a Murderer* (Netflix) release (+1.5%). *The Jinx* ends with a hot mic confession ('Killed them all, of course'). *Making a Murderer* triggers petitions to the White House. The 'Binged Docuseries' is the hottest format in culture. The justice system is treated as a content mine.",
          "key_manifestations": [
            "The Jinx (HBO)",
            "Making a Murderer (Netflix)",
            "Going Clear (Scientology expose)",
            "Amy (Biopic tragedy)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "*O.J.: Made in America* releases (+0.8%). It is an 8-hour masterpiece that uses a crime story to explain 50 years of race in America. It wins the Oscar. *13th* (Ava DuVernay) explains mass incarceration. The genre has fully matured into the primary way Americans process history and systemic injustice.",
          "key_manifestations": [
            "O.J.: Made in America (ESPN)",
            "13th (Netflix)",
            "Weiner (Political trainwreck in real time)",
            "Amanda Knox (Netflix - The media critique)"
          ]
        }
      }
    },
    "44_the_adulting_phenomenon_and_the_infantilization_of_the_millennial": {
      "name": "The Adulting Phenomenon and the Infantilization of the Millennial",
      "description": "This cluster maps the delayed adulthood of the Millennial generation, driven by economic precarity (Recession, Student Debt). It explores the performative nature of 'Adulting'—treating basic life skills (laundry, cooking) as achievements. It tracks the return to childhood comforts: Harry Potter obsession, coloring books, Disney adults, and 'wholesome' memes. It analyzes the tension between a generation that is the most educated in history but culturally trapped in a state of suspended adolescence.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "Adulthood is assumed to be linear. You graduate, get a job, buy a house. *Friends* depicts 20-somethings struggling, but they have apartments and jobs. The concept of 'Adulting' does not exist; you just *are* an adult. *Office Space* shows the misery of adulthood, but not the inability to reach it.",
          "key_manifestations": [
            "Friends (TV Series)",
            "Office Space (Film)",
            "American Pie (The rush to lose virginity/grow up)",
            "Fight Club (Rejecting the adult furniture)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "*Harry Potter* mania spreads to adults (+0.3%). It is the first sign of 'Kidult' culture. Adults reading YA books on the subway (sometimes with 'adult covers' in the UK). *Malcolm in the Middle* shows the older brother Francis failing to launch, but it's played for laughs.",
          "key_manifestations": [
            "Harry Potter Goblet of Fire (Book)",
            "The Sims (Playing house)",
            "Gilmore Girls (The cool mom/friend dynamic)",
            "Meet the Parents (Seeking approval)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "*Shrek* appeals to adults with pop culture references (+0.3%). Animation is no longer just for kids. *Ghost World* depicts the post-high school paralysis—the refusal to join the normie world. The 'Boomerang Generation' (moving back home) begins to be discussed as a minor trend.",
          "key_manifestations": [
            "Shrek (Crossover appeal)",
            "Ghost World (Film)",
            "Bridget Jones's Diary (The diary of a mess)",
            "Legally Blonde (The sorority girl in the adult world)"
          ]
        },
        "2002": {
          "salience_share": 2.1,
          "description": "*Spider-Man* features a hero who is a broke student delivering pizza (+0.3%). It resonates with the economic reality of the young. *Jackass* validates men acting like toddlers (Cluster 22). The 'Quarter-Life Crisis' book is published, naming the anxiety of the 20-something.",
          "key_manifestations": [
            "Spider-Man (Peter Parker's poverty)",
            "Quarter-Life Crisis (Book)",
            "Van Wilder (Refusal to graduate)",
            "Lilo & Stitch (Nani struggling to be the adult)"
          ]
        },
        "2003": {
          "salience_share": 2.5,
          "description": "*Adult Swim* becomes a cultural force (+0.4%). Cartoons for stoners. It validates watching animation at 2 AM. *School of Rock* features a man-child living off his friend, but he finds purpose in teaching rock—validating the 'cool uncle' archetype.",
          "key_manifestations": [
            "Adult Swim (Growth)",
            "School of Rock (Film)",
            "Old School (Frat regression)",
            "Elf (The man-child)"
          ]
        },
        "2004": {
          "salience_share": 2.9,
          "description": "*Garden State* depicts the return home (+0.4%). The protagonist is 26, medicated, and aimless. He reconnects with childhood symbols (the sidecar). *Napoleon Dynamite* celebrates the awkward high schooler, appealing to adults nostalgic for their own awkwardness.",
          "key_manifestations": [
            "Garden State (The return home)",
            "Napoleon Dynamite (Nostalgia for awkwardness)",
            "Eternal Sunshine (Regression to childhood memories)",
            "13 Going on 30 (The desire to skip the hard part)"
          ]
        },
        "2005": {
          "salience_share": 3.2,
          "description": "*The 40-Year-Old Virgin* (+0.5%). The ultimate case of delayed adolescence. He collects action figures. The movie argues he must sell them to 'grow up,' a stance that will soon be outdated (in the future, the cool adult *keeps* the toys). *How I Met Your Mother* premieres, showcasing a group of friends drinking in a bar, delaying marriage.",
          "key_manifestations": [
            "The 40-Year-Old Virgin (Film)",
            "How I Met Your Mother (TV Series Premiere)",
            "Wedding Crashers (Immature men)",
            "Robot Chicken (Toys as comedy)"
          ]
        },
        "2006": {
          "salience_share": 3.5,
          "description": "Facebook opens to everyone (+0.4%). We begin to document our college lives for a public audience. The 'college mindset' extends past graduation. *Failure to Launch* (Film) turns the economic trend into a rom-com premise. It treats the phenomenon as a male failing to be fixed by a woman.",
          "key_manifestations": [
            "Failure to Launch (Film)",
            "Facebook (Public Launch)",
            "Clerks II (Fast food at 30)",
            "High School Musical (Disney nostalgia begins)"
          ]
        },
        "2007": {
          "salience_share": 3.8,
          "description": "*Knocked Up* (+0.4%). Ben Stone is a stoner with no job. He is forced into adulthood by a pregnancy. The movie suggests that only a biological shock can end the adolescence of the modern male. *Superbad* captures the intense fear of separation/growing up.",
          "key_manifestations": [
            "Knocked Up (Film)",
            "Superbad (Film)",
            "Juno (Teen pregnancy as quirk)",
            "Ratatouille (The comfort food flashback)"
          ]
        },
        "2008": {
          "salience_share": 5.5,
          "description": "The Recession hits (+1.7%). 'Failure to Launch' stops being a joke and becomes a survival strategy. Multi-generational households spike. *Step Brothers* satirizes this, but audiences relate to the comfort of the bunk bed. The 'Man-Child' is now an economic necessity.",
          "key_manifestations": [
            "Step Brothers (Film)",
            "Recession (Moving back home)",
            "Wall-E (Humans as giant babies)",
            "Iron Man (The billionaire playboy)"
          ]
        },
        "2009": {
          "salience_share": 6.2,
          "description": "*Adventure Time* premieres (+0.7%). It is a cartoon for kids that deals with adult themes, or a cartoon for adults that looks like a kid's show. It bridges the gap. The 'Snuggie' (Cluster 33) infantalizes the user. *The Hangover* celebrates the regression to chaotic irresponsibility.",
          "key_manifestations": [
            "Adventure Time (TV Series Premiere)",
            "The Hangover (Film)",
            "The Snuggie (Product)",
            "Community (Community college as purgatory)"
          ]
        },
        "2010": {
          "salience_share": 6.8,
          "description": "*Toy Story 3* (+0.6%). The entire generation cries about Andy giving away his toys. It marks the psychological transition: we are the adults now, but we don't want to be. *Scott Pilgrim* visualizes life as a video game (Cluster 36). The 'Brony' (My Little Pony) subculture emerges, the extreme edge of the trend.",
          "key_manifestations": [
            "Toy Story 3 (Film)",
            "Scott Pilgrim vs. the World (Film)",
            "My Little Pony: Friendship is Magic (Brony culture)",
            "Despicable Me (The Minions)"
          ]
        },
        "2011": {
          "salience_share": 7.5,
          "description": "BuzzFeed lists ('XX Things Only 90s Kids Remember') explode (+0.9%). Nostalgia becomes the primary currency of the internet. We bond over *Rugrats* references. *New Girl* features 'Adorkable' Jess, who watches *Dirty Dancing* and cries. *Young Adult* (Film) deconstructs the woman who refuses to grow up.",
          "key_manifestations": [
            "BuzzFeed 90s Nostalgia Lists",
            "New Girl (TV Series Premiere)",
            "Young Adult (Film)",
            "Bridesmaids (The mess of the 30s)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "*Girls* premieres (+0.7%). 'I think I may be the voice of my generation.' It depicts the financial reliance on parents and the messy, unpaid internships. It creates the term 'Adulting' (appearing in blogs/Twitter around this time). *The Avengers* allows adults to obsess over comic books without shame.",
          "key_manifestations": [
            "Girls (TV Series)",
            "The Avengers (Mainstream geek culture)",
            "Frances Ha (The drifting timeline)",
            "Wreck-It Ralph (Arcade nostalgia)"
          ]
        },
        "2013": {
          "salience_share": 8.8,
          "description": "The word 'Adulting' goes viral (+0.6%). #Adulting. 'I did laundry today #adulting.' It frames basic competence as a difficult performance. 'Coloring Books for Adults' begin to appear. *Frozen* becomes a phenomenon for adults as well as kids.",
          "key_manifestations": [
            "#Adulting (Hashtag)",
            "Frozen (Film)",
            "Broad City (The stoner friendship)",
            "Her (The video game job)"
          ]
        },
        "2014": {
          "salience_share": 9.2,
          "description": "*The Lego Movie* (+0.5%). The villain is 'The Kragle' (stasis/rules). The hero is the Master Builder. It encourages adults to play with toys. *BoJack Horseman* uses a cartoon horse to explore deep adult depression. The 'Disney Adult' begins to be recognized as a distinct demographic.",
          "key_manifestations": [
            "The Lego Movie (Film)",
            "BoJack Horseman (TV Series)",
            "Guardians of the Galaxy (70s mixtape nostalgia)",
            "Serial (Obsessing over high school drama)"
          ]
        },
        "2015": {
          "salience_share": 9.8,
          "description": "'Adult Coloring Books' become bestsellers (+0.8%). It is therapeutic regression. *Inside Out* validates the inner child's emotions. The 'Safe Space' discourse on campus (Cluster 40) is linked by critics to a generation that refuses to face the harsh world. The 'Quarter-Life Crisis' is now just 'Life.'",
          "key_manifestations": [
            "Adult Coloring Book Craze",
            "Inside Out (Film)",
            "Master of None (The endless indecision)",
            "Star Wars: The Force Awakens (Nostalgia loop)"
          ]
        },
        "2016": {
          "salience_share": 10.2,
          "description": "*Stranger Things* releases (+0.6%). It allows adults to regress to 1983. 'Pokemon Go' sends millions of adults running around parks. We are playing outside like kids again. The election is viewed by many as a failure of 'Adults' (The Establishment), driving a retreat into comfort culture (Harry Potter references in politics).",
          "key_manifestations": [
            "Stranger Things (Nostalgia)",
            "Pokemon Go (Play)",
            "Harry Potter Politics (Dumbledore's Army)",
            "Deadpool (Juvenile humor for adults)"
          ]
        }
      }
    },
    "45_the_clickbait_economy_and_virality_science": {
      "name": "The Clickbait Economy and Virality Science",
      "description": "This cluster maps the industrialization of curiosity. It tracks the evolution of digital media from the chaotic blogosphere of the early 2000s (Gawker, Perez Hilton) to the scientifically optimized 'Curiosity Gap' headlines of the 2010s (Upworthy, BuzzFeed). It analyzes how the 'Attention Economy' forced all content—journalism, entertainment, politics—to adopt the grammar of the viral loop. It explores the psychological shift from 'Reading' to 'Sharing,' and the rise of the 'Listicle' as the dominant literary form of the smartphone era.",
      "trajectory": {
        "1999": {
          "salience_share": 0.8,
          "description": "The web is defined by 'Portals' (Yahoo, AOL). Content is curated by editors, not algorithms. 'Slashdot' represents the 'Nerd Viral'—stories chosen by users, but limited to tech. The 'Forward FWD: FWD:' email chain is the primary vector for viral content. It is slow and personal.",
          "key_manifestations": [
            "Slashdot (News aggregator)",
            "Drudge Report (The link aggregator)",
            "Email Chain Letters",
            "The Blair Witch Project (Viral marketing precursor)"
          ]
        },
        "2000": {
          "salience_share": 1.1,
          "description": "The 'Blog' gains traction (+0.3%). Blogger launches. Individuals become broadcasters. 'Ebaum's World' aggregates shock videos, creating a centralized hub for 'memes' before the word exists. The content is raw, stolen, and untagged.",
          "key_manifestations": [
            "Blogger (Platform Growth)",
            "Ebaum's World (Viral Hub)",
            "Homestar Runner (Flash Viral)",
            "Almost Famous (The rock critic vs the fan)"
          ]
        },
        "2001": {
          "salience_share": 1.4,
          "description": "Wikipedia launches (+0.3%). It democratizes information but is not 'viral.' 9/11 creates the first massive online news traffic jam. People realize the internet is faster than TV. 'Fark' aggregates weird news with funny headlines, inventing the 'snarky headline' genre.",
          "key_manifestations": [
            "Fark.com (Headline humor)",
            "Wikipedia (Launch)",
            "All Your Base (Flash animation spread)",
            "Jay and Silent Bob Strike Back (Internet comment culture satire)"
          ]
        },
        "2002": {
          "salience_share": 1.8,
          "description": "Gawker launches (+0.4%). The Catalyst. It treats journalism as gossip and gossip as news. It introduces the 'Live Blog.' It prioritizes speed and snark over accuracy. It turns New York media into a spectator sport. It creates the tone of the 2000s internet: detached, cruel, and obsessed.",
          "key_manifestations": [
            "Gawker Media (Launch)",
            "Friendster (The network effect)",
            "Minority Report (Personalized info)",
            "Star Wars Kid (The victim of virality)"
          ]
        },
        "2003": {
          "salience_share": 2.2,
          "description": "MySpace launches (+0.4%). Content is now tied to identity. 'Perez Hilton' (blog) starts (soon after), drawing crude doodles on celebrity photos. It is the tabloid impulse digitized. 'The Onion' headlines become the gold standard of viral satire.",
          "key_manifestations": [
            "MySpace (Launch)",
            "The Onion (Digital expansion)",
            "Perez Hilton (Celebrity blogging)",
            "Shattered Glass (Journalistic fabrication)"
          ]
        },
        "2004": {
          "salience_share": 2.8,
          "description": "Digg launches (+0.6%). It introduces the 'Upvote.' The front page of the internet is now determined by the crowd, not an editor. This is the birth of the 'Viral Algorithm.' *The Daily Show* becomes the primary news filter for youth, processing the news into entertainment clips.",
          "key_manifestations": [
            "Digg (Launch)",
            "The Daily Show (Jon Stewart's dominance)",
            "Gmail (Infinite archive)",
            "Mean Girls (The Burn Book as blog)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "Huffington Post launches (+0.7%). It aggregates news and uses SEO (Search Engine Optimization) to dominate Google. It pays bloggers nothing (exposure). It professionalizes the 'content farm.' YouTube launches, making video shareable via link.",
          "key_manifestations": [
            "Huffington Post (Launch)",
            "YouTube (Launch)",
            "Lazy Sunday (Viral video)",
            "Thank You for Smoking (Spin culture)"
          ]
        },
        "2006": {
          "salience_share": 4.1,
          "description": "BuzzFeed is founded (+0.6%). Jonah Peretti (co-founder of HuffPo) wants to study 'contagion.' It starts as a lab for viral content. No news, just memes and lists. Twitter launches, creating the 'real-time' feed where headlines matter more than articles.",
          "key_manifestations": [
            "BuzzFeed (Founding)",
            "Twitter (Launch)",
            "Snakes on a Plane (Internet hype vs reality)",
            "Lonelygirl15 (Fabricated authenticity)"
          ]
        },
        "2007": {
          "salience_share": 4.5,
          "description": "The iPhone launches (+0.4%). Content is now consumed on the toilet. 'Tumblr' launches, creating a visual, reblog-based virality. Images travel faster than text. 'Rickrolling' proves that the link itself can be the joke.",
          "key_manifestations": [
            "Rickrolling (The bait and switch)",
            "Tumblr (Launch)",
            "iPhone (Mobile consumption)",
            "Gossip Girl (The blog as narrator)"
          ]
        },
        "2008": {
          "salience_share": 5.2,
          "description": "The Obama Campaign uses social media data to win (+0.7%). It proves virality can elect a president. 'Fail Blog' and 'Cheezburger' network monetize the meme. The internet is organizing into vertical networks of distraction.",
          "key_manifestations": [
            "Obama Social Media Strategy",
            "Fail Blog (Humor)",
            "The Dark Knight (Viral marketing campaign)",
            "Tropic Thunder (TiVo scene)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "Demand Media (eHow) creates content based on search queries (+0.6%). 'Content Farming' is industrial. Articles are written by algorithms or low-paid freelancers to answer 'How to boil an egg.' It is the nadir of quality. Google changes its algorithm (Panda) to fight this.",
          "key_manifestations": [
            "Demand Media (Content Farm)",
            "Auto-Tune the News (Remix culture)",
            "Julie & Julia (Blogging as career)",
            "State of Play (Bloggers vs Journalists)"
          ]
        },
        "2010": {
          "salience_share": 6.5,
          "description": "Instagram launches. Visual virality dominates (+0.7%). *The Social Network* depicts the creation of the algorithm that addicted the world. Gawker publishes the iPhone 4 prototype photos, proving blogs can scoop the tech giants and face legal wrath.",
          "key_manifestations": [
            "Instagram (Launch)",
            "Gawker iPhone 4 Scoop",
            "The Social Network (Film)",
            "Bed Intruder Song (News remix)"
          ]
        },
        "2011": {
          "salience_share": 7.2,
          "description": "Upworthy launches (+0.7%). 'You Won't Believe What Happens Next.' The 'Curiosity Gap' headline is perfected. It weaponizes empathy and outrage. It grows faster than any media company in history. Facebook changes its algorithm to favor these 'feel good' links.",
          "key_manifestations": [
            "Upworthy (Launch)",
            "Black Mirror 'The National Anthem' (Viral coercion)",
            "Nyan Cat (Pointless virality)",
            "Contagion (Information spreads like virus)"
          ]
        },
        "2012": {
          "salience_share": 7.8,
          "description": "BuzzFeed pivots to News (+0.6%). They hire real journalists to cover politics, funded by the 'Listicle' revenue. It creates a schizophrenic site: '25 Cats That Look Like Bread' next to 'Syrian War Report.' *Kony 2012* shows the power and danger of the viral documentary.",
          "key_manifestations": [
            "BuzzFeed News (Pivot)",
            "Kony 2012 (Peak viral activism)",
            "Grumpy Cat (The monetized meme)",
            "The Newsroom (TV Series - Old vs New media)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "The 'Quiz' takes over Facebook (+0.7%). 'Which Harry Potter Character Are You?' It is data harvesting disguised as narcissism. Buzzfeed traffic explodes. 'Vine' launches, creating the 6-second attention span. The loop is the new narrative unit.",
          "key_manifestations": [
            "BuzzFeed Quizzes",
            "Vine (Launch)",
            "Her (The OS reads the news)",
            "House of Cards (The journalist as pawn)"
          ]
        },
        "2014": {
          "salience_share": 9.2,
          "description": "Facebook changes the algorithm to kill Upworthy (-0.7% for Upworthy, +0.7% for Native Video). 'Clickbait' is penalized; 'Time Spent' is rewarded. The 'Ice Bucket Challenge' proves that user-generated video is more powerful than any headline. *Nightcrawler* depicts the news gatherer as a sociopath chasing the most viral image.",
          "key_manifestations": [
            "Nightcrawler (Film)",
            "Ice Bucket Challenge",
            "ClickHole (Satire of Clickbait)",
            "Serial (Viral Audio)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "Snapchat Discover launches (+0.3%). News outlets create vertical, disappearing content for teens. The 'Pivot to Video' begins—Facebook lies about video metrics (revealed later), causing media companies to fire writers and hire video producers. It is a disastrous bubble.",
          "key_manifestations": [
            "Pivot to Video (Industry Trend)",
            "Snapchat Discover",
            "The Dress (Blue/Black viral debate)",
            "Spotlight (The slow investigation vs. the hot take)"
          ]
        },
        "2016": {
          "salience_share": 10.2,
          "description": "Fake News farms in Macedonia influence the election (+0.7%). The 'Clickbait' structure is used for disinformation. 'Pizzagate' spreads via viral mechanics. The infrastructure built to sell cat videos is used to destabilize democracy. The 'Post-Truth' era is the direct result of the optimization for engagement over accuracy.",
          "key_manifestations": [
            "Fake News Farms",
            "Pizzagate",
            "Nosedive (Black Mirror - Life as engagement metric)",
            "Popstar: Never Stop Never Stopping (The TMZ culture)"
          ]
        }
      }
    },
    "46_pop_punk_hegemony_and_the_mall_goth_aesthetic": {
      "name": "Pop-Punk Hegemony and the Mall Goth Aesthetic",
      "description": "This cluster explores the commodification of teenage rebellion through the specific lens of Pop-Punk and 'Mall Goth' culture. It tracks the era where Blink-182, Avril Lavigne, and Hot Topic defined the visual and sonic landscape of the American suburb. It analyzes how 'Punk'—a genre defined by anti-consumerism—became the primary engine of youth retail (Dickies, Vans, studded belts). It moves from the potty humor of the late 90s to the 'Emo' emotionalism of the mid-2000s, before fading as Hip-Hop and EDM took over the youth zeitgeist.",
      "trajectory": {
        "1999": {
          "salience_share": 3.5,
          "description": "*Enema of the State* by Blink-182 releases (+1.2%). It is the *Nevermind* of Pop-Punk. 'All The Small Things' mocks boy bands while becoming a bigger hit than them. The aesthetic is Dickies shorts, Hurley t-shirts, and gelled hair. It is suburban, white, and obsessed with toilets and girlfriends. *American Pie* uses this soundtrack to define the era.",
          "key_manifestations": [
            "Enema of the State (Album)",
            "American Pie (Film)",
            "Tony Hawk's Pro Skater (The soundtrack as gateway)",
            "Limp Bizkit (The aggressive alternative)"
          ]
        },
        "2000": {
          "salience_share": 3.8,
          "description": "*Hybrid Theory* by Linkin Park releases (+0.3%). It mixes Pop-Punk angst with Nu-Metal aggression. It is the bridge to Emo. *Malcolm in the Middle* uses They Might Be Giants, but the vibe is ska-punk chaos. The 'Warped Tour' becomes the summer pilgrimage for the suburban youth.",
          "key_manifestations": [
            "Hybrid Theory (Album)",
            "Warped Tour 2000",
            "Jackass (The skater punk ethos on TV)",
            "No Doubt 'Return of Saturn' (Gwen Stefani's pink hair)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "*Sum 41* releases 'Fat Lip' (+0.7%). It combines metal riffs with rap verses and pop choruses. It is the ultimate synthesis of the mall sound. *Jimmy Eat World* releases 'The Middle,' bringing Emo (Cluster 2) to the pop charts. Hot Topic expands aggressively in malls, selling 'Nightmare Before Christmas' merchandise as a badge of identity.",
          "key_manifestations": [
            "All Killer No Filler (Album)",
            "Bleed American (Album)",
            "Hot Topic (Retail Dominance)",
            "Ghost World (The authentic outsider vs the poser)"
          ]
        },
        "2002": {
          "salience_share": 5.2,
          "description": "Avril Lavigne releases *Let Go* (+1.0%). 'Complicated' and 'Sk8er Boi' invent the 'Pop-Punk Princess.' She wears a tie with a tank top. It validates the aesthetic for girls who hate Britney Spears. It is 'Anti-Britney' marketing that is just as manufactured. *Good Charlotte* releases 'The Young and the Hopeless'—the anthem of the rich kid who feels poor.",
          "key_manifestations": [
            "Let Go by Avril Lavigne (Album)",
            "The Young and the Hopeless (Album)",
            "A Walk to Remember (The bad boy makeover)",
            "Scooby-Doo (Simple Plan on the soundtrack)"
          ]
        },
        "2003": {
          "salience_share": 5.5,
          "description": "*Fallen* by Evanescence releases (+0.6%). 'Bring Me To Life' brings 'Goth' aesthetics to Top 40. It is dramatic, operatic, and heavily eyelined. The 'Mall Goth' is born—wearing Tripp pants and corsets to the food court. *Freaky Friday* features Lindsay Lohan as a rocker girl, cementing the look as the standard for 'rebellious teen.'",
          "key_manifestations": [
            "Fallen by Evanescence (Album)",
            "Freaky Friday (Lindsay Lohan's band)",
            "School of Rock (Punk pedagogy)",
            "The O.C. (Seth Cohen's indie/punk taste)"
          ]
        },
        "2004": {
          "salience_share": 6.2,
          "description": "*American Idiot* by Green Day releases (+1.2%). It is the 'Sgt. Pepper' of Pop-Punk. A rock opera about the Bush era. It revitalizes the genre, giving it political weight (however shallow). Guyliner becomes standard for frontmen (Billie Joe Armstrong). *Mean Girls* categorizes the 'Art Freaks' as a distinct lunch table tribe.",
          "key_manifestations": [
            "American Idiot (Album)",
            "Three Cheers for Sweet Revenge (My Chemical Romance)",
            "Mean Girls (Janis Ian's aesthetic)",
            "EuroTrip (Scotty Doesn't Know)"
          ]
        },
        "2005": {
          "salience_share": 6.8,
          "description": "*From Under the Cork Tree* by Fall Out Boy releases (+0.9%). Pete Wentz becomes the pin-up boy. The lyrics are wordy, ironic, and self-deprecating. The aesthetic shifts from 'Skater' to 'Scene'—flat ironed hair, tight jeans, side bangs. *Panic! at the Disco* releases 'A Fever You Can't Sweat Out,' bringing Vaudeville theater to the mall.",
          "key_manifestations": [
            "From Under the Cork Tree (Album)",
            "A Fever You Can't Sweat Out (Album)",
            "Sky High (The emo villain)",
            "Wedding Crashers (The goth son)"
          ]
        },
        "2006": {
          "salience_share": 7.5,
          "description": "*The Black Parade* by My Chemical Romance (+1.2%). The peak of the cluster. It is a bombastic rock opera about death. The marching band uniforms. It is the 'Bohemian Rhapsody' of the Hot Topic generation. The 'Emo' panic reaches the Daily Mail ('Emo cult warns parents').",
          "key_manifestations": [
            "The Black Parade (Album)",
            "Emo Panic (News Media)",
            "Step Up (The clash of styles)",
            "John Tucker Must Die (The punk girl makeover)"
          ]
        },
        "2007": {
          "salience_share": 7.2,
          "description": "Paramore releases *Riot!* (+0.6%). Hayley Williams becomes the new icon—orange hair and power vocals. 'Misery Business' is the anthem. The genre is now fully integrated into pop. Avril Lavigne pivots to 'Girlfriend' (Cheerleader punk), signaling the beginning of the end of the 'authentic' angst.",
          "key_manifestations": [
            "Riot! by Paramore (Album)",
            "The Best Damn Thing (Avril Lavigne)",
            "Superbad (The end of the pop-punk high school era)",
            "Juno (The soundtrack shifts to twee folk)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*Twilight* releases (-0.4% music, +0.8% aesthetic). The 'Vampire' look absorbs the 'Mall Goth' energy. The angst moves from music (bands) to literature/film (supernatural). Fall Out Boy releases *Folie à Deux*, baffling fans with its experimentation. The bubble is leaking.",
          "key_manifestations": [
            "Twilight (Soundtrack - Paramore)",
            "Folie à Deux (Album)",
            "Nick and Norah's Infinite Playlist (The indie shift)",
            "Role Models (KISS nostalgia)"
          ]
        },
        "2009": {
          "salience_share": 5.8,
          "description": "Blink-182 reunites, but the magic is fading (-0.7%). 'Owl City' ('Fireflies') takes the electronic elements of Scene music and makes them saccharine sweet. It is 'Twee-Tronica.' The cool kids are moving to Indie Folk (Cluster 41) or EDM (Cluster 27). Hot Topic begins selling memes and Twilight merch.",
          "key_manifestations": [
            "Fireflies by Owl City",
            "Jennifer's Body (Emo horror)",
            "Glee (Co-opting the songs for theater kids)",
            "Zombieland (Metallica shirt irony)"
          ]
        },
        "2010": {
          "salience_share": 5.2,
          "description": "*Scott Pilgrim* (+0.4%). It is a love letter to the era that just ended—bass battles, skater aesthetics. It is a period piece for 2005. My Chemical Romance releases *Danger Days* (colorful, sci-fi), abandoning the black eyeliner. The 'Scene' is dead; 'Swag' (Justin Bieber/Hip Hop) is rising.",
          "key_manifestations": [
            "Scott Pilgrim vs. the World (Film)",
            "Danger Days (Album)",
            "Easy A (The demise of the clique)",
            "Kick-Ass (The superhero replaces the punk)"
          ]
        },
        "2011": {
          "salience_share": 4.5,
          "description": "Skrillex (formerly of From First to Last - an emo band) creates Dubstep (+0.5% shift). He takes the 'Scene' haircut and aggression and applies it to EDM. The mosh pit moves to the rave. Pop-Punk retreats to the 'Defend Pop Punk' underground (The Wonder Years), becoming a niche genre for sad beardy guys.",
          "key_manifestations": [
            "Skrillex (The Emo to EDM pipeline)",
            "The Wonder Years (Pop-punk revival niche)",
            "21 Jump Street (The cool kids are now eco-friendly)",
            "Bridesmaids (Wilson Phillips nostalgia replaces Blink)"
          ]
        },
        "2012": {
          "salience_share": 3.8,
          "description": "Machine Gun Kelly and other rappers begin to adopt the 'Rock Star' aesthetic (-0.4% genre, +0.3% aesthetic). The 'Mall Goth' look is appropriated by Hip-Hop. Avril Lavigne marries Chad Kroeger (Nickelback), creating a singularity of uncoolness that destroys the remaining nostalgia.",
          "key_manifestations": [
            "Spring Breakers (The neon underbelly)",
            "Perks of Being a Wallflower (The Smiths nostalgia, not Blink)",
            "Pitch Perfect (A cappella replaces the band)",
            "Wreck-It Ralph (Video game nostalgia)"
          ]
        },
        "2013": {
          "salience_share": 3.2,
          "description": "Fall Out Boy returns with *Save Rock and Roll* (+0.3%). It is a pop album with samples. It succeeds, but by abandoning the genre. Lorde (Cluster 11) critiques the 'white teeth teens,' signaling a move to 'Goth-Pop'—sad, minimal, and electronic.",
          "key_manifestations": [
            "Save Rock and Roll (Album)",
            "Pure Heroine (The new goth)",
            "The Bling Ring (The emptiness of the mall)",
            "Frozen (Let It Go - The new power ballad)"
          ]
        },
        "2014": {
          "salience_share": 2.5,
          "description": "5 Seconds of Summer releases 'She Looks So Perfect' (+0.4%). It is a Boy Band wearing Blink-182 cosplay. It is the final commodification. It is 'Pop-Punk' without the Punk. The aesthetic is now fully retro.",
          "key_manifestations": [
            "5 Seconds of Summer (Band)",
            "Guardians of the Galaxy (70s Rock revival)",
            "Boyhood (The passage of time/culture)",
            "Birdman (The irrelevance of the ego)"
          ]
        },
        "2015": {
          "salience_share": 1.9,
          "description": "Lil Uzi Vert and the 'SoundCloud Rap' scene (Cluster 24) explicitly cite Paramore and Marilyn Manson as influences. The 'Mall Goth' spirit is reincarnated in Face Tattoo Rap. 'Emo Nite' parties start in LA—nostalgia events for 20-somethings to scream My Chemical Romance.",
          "key_manifestations": [
            "Emo Nite (Nostalgia Parties)",
            "Lil Uzi Vert (The new rock star)",
            "Mad Max: Fury Road (The Doof Warrior)",
            "Straight Outta Compton (Rap history)"
          ]
        },
        "2016": {
          "salience_share": 1.5,
          "description": "The 'E-Boy/E-Girl' aesthetic begins to form on TikTok/Musical.ly (-0.3% trend, +0.5% rebirth). It recycles the striped shirts and chokers of 2003 for a digital age. Pop-Punk is dead, but its corpse is being worn by the internet. Blink-182 releases an album without Tom DeLonge.",
          "key_manifestations": [
            "E-Girl Aesthetic (Early formation)",
            "Blink-182 'California' (Zombie band)",
            "Twenty One Pilots (The new genre-less angst)",
            "Sing Street (80s futurism)"
          ]
        }
      }
    },
    "47_the_zombie_renaissance_and_societal_collapse_anxiety": {
      "name": "The Zombie Renaissance and Societal Collapse Anxiety",
      "description": "This cluster maps the cultural obsession with the Zombie Apocalypse as the definitive metaphor for the 21st century. It moves from the fast-zombie shock of *28 Days Later* to the slow-burn sociological study of *The Walking Dead*. It analyzes how the zombie shifted from a symbol of consumerism (Romero) to a symbol of pandemics, government failure, and the 'Other.' It tracks the rise of 'Prepper' culture—the fantasy that when the world ends, the guy with the gun and the canned beans will be king.",
      "trajectory": {
        "2002": {
          "salience_share": 3.5,
          "description": "*28 Days Later* releases (+1.2%). The Catalyst. It reinvents the zombie. They are not dead; they are 'Infected.' They run. It captures the 'Rage' of the post-9/11 world and the fear of biological contagion (Anthrax/SARS). It makes the apocalypse look like grainy digital video—immediate and real.",
          "key_manifestations": [
            "28 Days Later (Film)",
            "Resident Evil (Film)",
            "The Ring (Viral curse)",
            "Signs (Invasion anxiety)"
          ]
        },
        "2003": {
          "salience_share": 3.8,
          "description": "Max Brooks publishes *The Zombie Survival Guide* (+0.6%). It treats the apocalypse as a solvable logistical problem. It validates 'nerd preparation.' It is the bible of the cluster. *The Walking Dead* comic begins, promising a 'zombie movie that never ends.'",
          "key_manifestations": [
            "The Zombie Survival Guide (Book)",
            "The Walking Dead (Comic Premiere)",
            "House of the Dead (Bad movie, but genre presence)",
            "Freddy vs. Jason (The old monsters dying out)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*Dawn of the Dead* (Snyder Remake) and *Shaun of the Dead* release (+1.2%). The remake perfects the 'Fast Zombie' action movie. *Shaun* proves the genre is ubiquitous enough to be parodied. It suggests we are *already* zombies in our daily lives (the bus, the job).",
          "key_manifestations": [
            "Dawn of the Dead (Remake)",
            "Shaun of the Dead (Parody)",
            "Lost (The survival group dynamic)",
            "The Day After Tomorrow (Climate collapse)"
          ]
        },
        "2005": {
          "salience_share": 4.8,
          "description": "*Land of the Dead* (Romero returns) (+0.4%). It frames zombies as an underclass rising up against a walled city of the rich. It predicts the '1% vs 99%' dynamic. Hurricane Katrina images (people stranded on roofs, government absence) look exactly like a zombie movie, reinforcing the 'You are on your own' survivalist message.",
          "key_manifestations": [
            "Land of the Dead (Film)",
            "Hurricane Katrina (Real world imagery)",
            "War of the Worlds (Civilization collapse)",
            "Doom (Film - FPS bio-horror)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "Max Brooks publishes *World War Z* (+0.9%). It treats the zombie war as oral history/geopolitics. It analyzes how different nations (Israel, China, USA) would fail or succeed. It elevates the genre to 'Global Risk Analysis.' *Dead Rising* (Game) allows players to use anything in a mall to kill zombies—consumerism as weapon.",
          "key_manifestations": [
            "World War Z (Book)",
            "Dead Rising (Video Game)",
            "Children of Men (Slow societal collapse)",
            "Slither (Bio-horror)"
          ]
        },
        "2007": {
          "salience_share": 5.9,
          "description": "*I Am Legend* releases (+0.7%). Will Smith in an empty New York. It romanticizes the solitude of the survivor. The 'Darkseekers' are CGI monsters, but the imagery of nature reclaiming the city resonates with eco-anxiety. *[REC]* (Spain) brings found-footage intensity to the infection narrative.",
          "key_manifestations": [
            "I Am Legend (Film)",
            "[REC] (Film)",
            "Planet Terror (Grindhouse aesthetic)",
            "28 Weeks Later (The failure of reconstruction)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*Left 4 Dead* (Game) releases (+0.8%). It emphasizes 'Co-op Survival.' You cannot survive alone. It introduces the 'Special Infected' (Boomer, Witch). *Dead Set* (TV) puts zombies in the Big Brother house, satirizing reality TV as the world ends. The Financial Crisis makes 'Collapse' feel imminent.",
          "key_manifestations": [
            "Left 4 Dead (Video Game)",
            "Dead Set (TV Miniseries)",
            "Pontypool (Language as virus)",
            "Cloverfield (Disaster cam)"
          ]
        },
        "2009": {
          "salience_share": 7.2,
          "description": "*Zombieland* releases (+0.7%). It codifies the 'Rules' (Cardio, Double Tap). It is a post-apocalyptic road trip comedy. It suggests the apocalypse might be *fun* (no jobs, smashing things). 'Pride and Prejudice and Zombies' spawns the 'Mash-up' literary trend. Zombies are now a condiment to be added to anything.",
          "key_manifestations": [
            "Zombieland (Film)",
            "Pride and Prejudice and Zombies (Book)",
            "Left 4 Dead 2 (Game)",
            "The Road (The bleak counter-point)"
          ]
        },
        "2010": {
          "salience_share": 8.5,
          "description": "*The Walking Dead* premieres on AMC (+1.8%). The definitive moment. It creates the 'Prestige Zombie Drama.' It is not about the monsters; it is about 'What do we become?' It validates the 'Rick Grimes' archetype: the benevolent dictator who makes the hard choices. 'CDC Zombie Preparedness' blog post goes viral.",
          "key_manifestations": [
            "The Walking Dead (TV Series Premiere)",
            "CDC Zombie Preparedness Kit",
            "The Crazies (Remake)",
            "Red Dead Redemption (Undead Nightmare DLC)"
          ]
        },
        "2011": {
          "salience_share": 8.2,
          "description": "The 'Bath Salts Zombie' incident in Miami (face-eating attack) (+0.5%). Real life mimics fiction. The media immediately frames it as a 'Zombie Attack.' *Contagion* (Cluster 35) depicts a realistic pandemic, showing how quickly society crumbles without zombies. 'Doomsday Preppers' premieres on NatGeo—survivalism as reality TV.",
          "key_manifestations": [
            "Bath Salts Incident",
            "Contagion (Film)",
            "Doomsday Preppers (TV Series Premiere)",
            "Minecraft (Survival Mode night cycle)"
          ]
        },
        "2012": {
          "salience_share": 7.9,
          "description": "*The Walking Dead* (Game by Telltale) releases (+0.6%). It focuses on emotional choice and protecting a child (Clementine). It proves the genre can break hearts, not just heads. *The Avengers* (Cluster 7) features a horde-style alien invasion, using zombie logic for superheroes to fight.",
          "key_manifestations": [
            "The Walking Dead (Telltale Game)",
            "The Cabin in the Woods (The zombie redneck torture family)",
            "ParaNorman (Zombies for kids)",
            "Resident Evil 6 (Action excess)"
          ]
        },
        "2013": {
          "salience_share": 8.1,
          "description": "*World War Z* (Film) releases (+0.5%). It abandons the book for a Brad Pitt action movie with 'fluid dynamics' zombies (ant piles). It treats the horde as a force of nature like a tsunami. *The Last of Us* (Game) releases—the artistic peak of the genre. 'Cordyceps' (fungus) replaces the virus. It focuses on the father-daughter bond in a ruined America.",
          "key_manifestations": [
            "The Last of Us (Video Game)",
            "World War Z (Film)",
            "Warm Bodies (The zombie rom-com)",
            "This Is the End (The Rapture)"
          ]
        },
        "2014": {
          "salience_share": 7.5,
          "description": "Saturation. *The Walking Dead* spins its wheels. 'Zombie Runs' (5Ks) are popular. The zombie is now a fitness motivator. *Z Nation* (Syfy) leans into the B-movie absurdity. The fear is gone; it is now just a setting. The 'Purge' franchise (Cluster 31) takes the 'lawless survival' energy and removes the zombies.",
          "key_manifestations": [
            "Zombie Run 5Ks",
            "Z Nation (TV Series)",
            "Life After Beth (Indie zombie comedy)",
            "The Purge: Anarchy (Society is the monster)"
          ]
        },
        "2015": {
          "salience_share": 6.8,
          "description": "*Fear the Walking Dead* premieres (-0.4%). Audiences are tired. *iZombie* turns it into a procedural. The 'Survival' fantasy shifts to 'Dystopian YA' (Cluster 20) or 'Post-Apocalyptic' without monsters (*Mad Max*). The refugee crisis in Europe (Cluster 12) provides real images of mass migration/fences that echo zombie tropes uncomfortably.",
          "key_manifestations": [
            "Fear the Walking Dead (TV Series)",
            "Mad Max: Fury Road (Survival without zombies)",
            "Dying Light (Parkour zombies)",
            "Maggie (Arnold Schwarzenegger dramatic zombie film)"
          ]
        },
        "2016": {
          "salience_share": 6.5,
          "description": "*Train to Busan* (Korea) releases (+0.6%). It revitalizes the genre by adding class warfare and high-speed rail. It proves the metaphor still works in other cultures. In the US, the 'Prepper' energy moves to the Alt-Right politics—preparing for a 'Civil War' rather than the undead. *The Girl with All the Gifts* twists the genre by making the zombie the next stage of evolution.",
          "key_manifestations": [
            "Train to Busan (Film)",
            "The Girl with All the Gifts (Film)",
            "10 Cloverfield Lane (Bunker psychology)",
            "Swiss Army Man (The corpse as friend)"
          ]
        }
      }
    },
    "48_the_nicecore_and_radical_softness": {
      "name": "The Nicecore and Radical Softness",
      "description": "This cluster tracks the reaction against the snark, irony, and anti-hero cynicism of the 2000s. It maps the rise of 'Wholesome' content, 'Radical Softness,' and 'Nicecore.' It moves from the optimistic bureaucracy of *Parks and Rec* to the empathetic universe of *Steven Universe* and the baking solidarity of *GBBO*. It explores how 'Kindness' became a counter-cultural aesthetic in a polarized, toxic political environment, valuing emotional intelligence and vulnerability over coolness and detachment.",
      "trajectory": {
        "2009": {
          "salience_share": 1.5,
          "description": "*Parks and Recreation* (Season 1) starts as an *Office* clone (cynical). *Modern Family* brings the 'Nice' family sitcom back. The dominant mode is still Snark (Gawker, 30 Rock). The 'New Sincerity' (Cluster 2) is artsy/sad; 'Nicecore' is happy/competent.",
          "key_manifestations": [
            "Parks and Recreation (S1)",
            "Modern Family (Premiere)",
            "Glee (The power of believing)",
            "Community (The found family)"
          ]
        },
        "2010": {
          "salience_share": 2.2,
          "description": "*Parks and Rec* (Season 2) pivots (+0.6%). Leslie Knope becomes hyper-competent and loved by her team. The show rejects cynicism. 'Treat Yo Self' becomes a mantra. *Adventure Time* premieres, featuring a hero (Finn) who loves his friends and cries. It rejects the 'Too Cool for School' 90s cartoon vibe.",
          "key_manifestations": [
            "Parks and Recreation (The Pivot)",
            "Adventure Time (Premiere)",
            "Despicable Me (The villain reformed by love)",
            "Lil B 'The BasedGod' (Radical positivity online)"
          ]
        },
        "2011": {
          "salience_share": 2.8,
          "description": "*Bob's Burgers* premieres (+0.4%). The Belchers love each other. Bob supports his weird kids. It is the anti-Family Guy. *New Girl* celebrates the 'Adorkable'—femininity that is uncool, singing, and earnest. The 'Wholesome Meme' (early stages) begins to appear on Tumblr—sincere compliments.",
          "key_manifestations": [
            "Bob's Burgers (Premiere)",
            "New Girl (Premiere)",
            "The Artist (Joyful nostalgia)",
            "Midnight in Paris (Romantic optimism)"
          ]
        },
        "2012": {
          "salience_share": 3.5,
          "description": "*Wreck-It Ralph* features the 'Bad Guy' support group (+0.4%). 'I am bad, and that's good.' It preaches self-acceptance. *Kid President* goes viral ('A Pep Talk'). Unironic, child-like inspiration is shared by millions of cynical adults.",
          "key_manifestations": [
            "Kid President (Viral Video)",
            "Wreck-It Ralph (Film)",
            "Call Me Maybe (Pure pop joy)",
            "Les Misérables (The power of mercy)"
          ]
        },
        "2013": {
          "salience_share": 4.5,
          "description": "*Steven Universe* premieres (+0.8%). The Crystal Gems fight with love. It deconstructs toxic masculinity. It is the flagship of 'CalArts' empathy. *Brooklyn Nine-Nine* makes the cop show 'Nice.' Jake Peralta is a goofball who respects women and loves his friends. No police brutality, just pranks.",
          "key_manifestations": [
            "Steven Universe (Premiere)",
            "Brooklyn Nine-Nine (Premiere)",
            "Her (The tender dystopia)",
            "Frozen (Love thaws)"
          ]
        },
        "2014": {
          "salience_share": 5.2,
          "description": "*The Great British Bake Off* (GBBO) hits Netflix/PBS in US (+0.9%). It is the antithesis of *Top Chef*. Contestants help each other. No drama, just cake. It becomes a sanctuary for stressed Americans. *Paddington* releases—a film about a polite bear that advocates for kindness to immigrants.",
          "key_manifestations": [
            "Great British Bake Off (US Breakout)",
            "Paddington (Film)",
            "Guardians of the Galaxy (Friendship saves the galaxy)",
            "Lego Movie (Everything is Awesome)"
          ]
        },
        "2015": {
          "salience_share": 6.5,
          "description": "*Hamilton* (+1.0%). It reclaims American history with optimism and inclusion. It is earnest and emotional. *Inside Out* validates 'Sadness' but ultimately is a hug for the audience. The 'Wholesome Memes' subreddit launches, stripping irony from memes to create pure positivity.",
          "key_manifestations": [
            "Hamilton (Broadway)",
            "Inside Out (Film)",
            "r/WholesomeMemes (Launch)",
            "Unbreakable Kimmy Schmidt (Optimism vs Trauma)"
          ]
        },
        "2016": {
          "salience_share": 7.5,
          "description": "*Ted Lasso* (NBC Sports Commercials) creates the character who will define the next era (+0.4% seed). *Arrival* argues for communication over war. *Moonlight* shows tenderness between Black men. As the political world turns 'Nasty' (Trump vs Clinton), the cultural world retreats into 'Radical Softness' as a defense mechanism. 'Hopepunk' is coined as a genre.",
          "key_manifestations": [
            "Arrival (Film)",
            "Moonlight (Film)",
            "Hidden Figures (Competence and triumph)",
            "The Good Place (Moral philosophy sitcom)"
          ]
        }
      }
    },
    "49_anime_mainstreaming_and_japanese_soft_power": {
      "name": "Anime Mainstreaming and Japanese Soft Power",
      "description": "This cluster maps the cultural conquest of the West by Japanese pop culture ('Cool Japan'). It tracks the evolution from the 'Saturday Morning Cartoon' stigma of the 90s to the prestige 'Otaku' culture of the 2010s. It moves from the playground mania of *Pokémon* to the high-art appreciation of Miyazaki, and the late-night grit of *Cowboy Bebop* on Adult Swim. It explores how a generation raised on Toonami and J-RPGs developed a distinct visual and emotional vocabulary—pacing, stillness, moral ambiguity—that fundamentally altered Western media (e.g., *Avatar: The Last Airbender*, *The Matrix*).",
      "trajectory": {
        "1999": {
          "salience_share": 3.8,
          "description": "*Pokémon* is at the peak of its initial mania (+1.5%). It is the first 'universal' Japanese property since Mario. The 'Pokérap' is a cultural anthem. *The Matrix* releases, explicitly citing *Ghost in the Shell* as its primary visual influence, bringing anime aesthetics (bullet time, green code) to live-action Hollywood blockbusters.",
          "key_manifestations": [
            "Pokémon: The First Movie (Box Office Hit)",
            "The Matrix (Anime aesthetic adaptation)",
            "Princess Mononoke (US Theatrical Release)",
            "Final Fantasy VIII (Cinematic gaming)"
          ]
        },
        "2000": {
          "salience_share": 4.2,
          "description": "Toonami on Cartoon Network becomes the curator of cool (+0.4%). *Gundam Wing* and *Dragon Ball Z* introduce serialized, melodramatic storytelling to American boys who were used to episodic comedies. *Vampire Hunter D: Bloodlust* shows the sophisticated, gothic side of the medium.",
          "key_manifestations": [
            "Toonami (The Midnight Run)",
            "Gundam Wing (Complex war drama for kids)",
            "Dragon Ball Z (Peak popularity)",
            "Digimon (The digital pet craze)"
          ]
        },
        "2001": {
          "salience_share": 4.5,
          "description": "*Spirited Away* releases in Japan (US buzz builds) (+0.3%). It is the *Citizen Kane* of the medium. *Adult Swim* launches, featuring *Cowboy Bebop*. This is a pivotal moment: it frames anime as 'Noir,' 'Jazz,' and 'Adult.' It creates the 'Prestige Anime' category for college dorms.",
          "key_manifestations": [
            "Spirited Away (Japanese Release)",
            "Cowboy Bebop on Adult Swim (The gateway drug)",
            "Super Smash Bros. Melee (Japanese IP celebration)",
            "Yu-Gi-Oh! (The card game economy)"
          ]
        },
        "2002": {
          "salience_share": 4.9,
          "description": "*Spirited Away* gets a US theatrical push by Disney (+0.4%). It validates the medium for parents. *Naruto* begins (manga in US/anime in Japan), starting the 'Big Three' era of Shonen Jump dominance. The 'Ninja Run' enters the schoolyard lexicon.",
          "key_manifestations": [
            "Spirited Away (US Release/Oscar buzz)",
            "Naruto (The new DBZ)",
            "Kingdom Hearts (Disney x Final Fantasy)",
            "FLCL (Avant-garde surrealism on TV)"
          ]
        },
        "2003": {
          "salience_share": 5.2,
          "description": "*Kill Bill Vol. 1* features an entire anime sequence (O-Ren Ishii's origin) (+0.6%). Tarantino explicitly validates the genre as 'cool cinema.' *The Animatrix* releases, commissioning Japanese masters to expand the lore of a US blockbuster. The cross-pollination is official.",
          "key_manifestations": [
            "Kill Bill Vol. 1 (Anime sequence)",
            "The Animatrix (Film)",
            "Fullmetal Alchemist (2003 Series)",
            "Linkin Park 'Breaking the Habit' (Anime music video)"
          ]
        },
        "2004": {
          "salience_share": 5.5,
          "description": "*Howl's Moving Castle* releases (+0.3%). Miyazaki is now a known brand. *Ghost in the Shell: Stand Alone Complex* airs on Adult Swim, introducing complex cyberpunk philosophy to late-night viewers. The 'AMV' (Anime Music Video) scene explodes on early YouTube/Limewire, remixing Linkin Park with Vegeta.",
          "key_manifestations": [
            "Howl's Moving Castle (Film)",
            "Ghost in the Shell: SAC (TV Series)",
            "Samurai Champloo (Hip-hop fusion)",
            "Katamari Damacy (The weird Japanese game aesthetic)"
          ]
        },
        "2005": {
          "salience_share": 6.1,
          "description": "*Avatar: The Last Airbender* premieres (+0.8%). While American, it is the ultimate 'Amerime' synthesis. It proves that the visual grammar of anime (sweat drops, speed lines, emotional outbursts) has been fully metabolized by Western creators. It creates a bridge for non-anime fans.",
          "key_manifestations": [
            "Avatar: The Last Airbender (TV Series Premiere)",
            "Final Fantasy VII: Advent Children (Visual spectacle)",
            "Bleach (The new Shonen hit)",
            "Boondocks (Anime aesthetic applied to Black culture)"
          ]
        },
        "2006": {
          "salience_share": 5.8,
          "description": "*Death Note* explodes (+0.5%). It is a psychological thriller, not a fighting show. It brings in the 'Emo/Goth' demographic. The notebook becomes a banned item in some schools. *Paprika* releases, influencing *Inception*. The 'Cosplay' scene at US conventions begins to rival the comic book scene.",
          "key_manifestations": [
            "Death Note (Anime/Manga)",
            "Paprika (Film)",
            "Ouran High School Host Club (Shojo genre breakout)",
            "Tokyo Drift (Car culture import)"
          ]
        },
        "2007": {
          "salience_share": 6.2,
          "description": "*Gurren Lagann* airs (+0.4%). It deconstructs the Mecha genre with hyper-masculine absurdity ('Pierce the Heavens'). The internet meme culture embraces anime faces ('Desu', 'Over 9000' remixes). 4chan's /a/ board becomes a powerful cultural engine for the underground.",
          "key_manifestations": [
            "Gurren Lagann (TV Series)",
            "5 Centimeters Per Second (Makoto Shinkai's rise)",
            "Afro Samurai (Samuel L. Jackson collaboration)",
            "The World Ends With You (Shibuya style)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*Ponyo* releases (+0.3%). *Speed Racer* (Wachowskis) is a box office bomb but a visual masterpiece that attempts to translate anime physics literally to live action. It is too ahead of its time. The 'Weaboo' slur emerges as the culture tries to police the obsession.",
          "key_manifestations": [
            "Ponyo (Film)",
            "Speed Racer (Film)",
            "Soul Eater (Halloween aesthetic)",
            "Code Geass (Political melodrama)"
          ]
        },
        "2009": {
          "salience_share": 6.8,
          "description": "*Fullmetal Alchemist: Brotherhood* begins (+0.5%). It is the 'Prestige TV' of anime—a perfect, faithful adaptation with deep political and philosophical themes. It becomes the highest-rated anime on almost every aggregator. *Summer Wars* brings the concept of the 'metaverse' to the screen.",
          "key_manifestations": [
            "Fullmetal Alchemist: Brotherhood (TV Series)",
            "Summer Wars (Film)",
            "Evangelion: 2.0 (Rebuild series)",
            "Dragonball Evolution (The disaster that proved Hollywood didn't get it)"
          ]
        },
        "2010": {
          "salience_share": 7.2,
          "description": "*Scott Pilgrim vs. the World* (Cluster 36) uses anime visual language in a live-action Toronto setting (+0.6%). It normalizes 'Anime logic' in indie romance. *The Secret World of Arrietty* continues the Ghibli prestige run. Crunchyroll begins to legitimize streaming, moving fans away from piracy.",
          "key_manifestations": [
            "Scott Pilgrim vs. the World (Anime influences)",
            "The Secret World of Arrietty (Film)",
            "Panties & Stockings with Garterbelt (Western cartoon pastiche)",
            "Durarara!! (Urban fantasy)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "*Puella Magi Madoka Magica* deconstructs the 'Magical Girl' genre (+0.6%). It looks cute but is a horrifying Faustian tragedy. It proves the medium can subvert its own tropes for a mature audience. *Attack on Titan* (Manga) begins gaining underground traction as 'The Walking Dead' of anime.",
          "key_manifestations": [
            "Puella Magi Madoka Magica (TV Series)",
            "Steins;Gate (Sci-fi masterpiece)",
            "Hunter x Hunter (2011 Reboot)",
            "From Up on Poppy Hill (Ghibli realism)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "*Sword Art Online* premieres (+0.7%). It launches the 'Isekai' (Trapped in Another World) boom. It taps into the gamer fantasy perfectly. While critically divisive, it is a massive gateway show for the new generation. *Wolf Children* explores single motherhood, expanding the thematic range.",
          "key_manifestations": [
            "Sword Art Online (TV Series)",
            "Wolf Children (Film)",
            "JoJo's Bizarre Adventure (The meme factory opens)",
            "Legend of Korra (The Avatar sequel)"
          ]
        },
        "2013": {
          "salience_share": 9.1,
          "description": "*Attack on Titan* (Anime) premieres (+1.2%). The Breakthrough. It is grim, violent, and devoid of 'fan service.' It appeals to *Game of Thrones* fans. It breaks the 'Anime is for kids/perverts' stigma. The 'Scouting Legion' jacket becomes ubiquitous at conventions.",
          "key_manifestations": [
            "Attack on Titan (TV Series Premiere)",
            "The Wind Rises (Miyazaki's farewell)",
            "Kill la Kill (Trigger style)",
            "Pacific Rim (Live action Mecha love letter)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "*Tokyo Ghoul* captures the 'Edgy Teen' demographic (+0.4%). The 'Unravel' opening song is an anthem. *Big Hero 6* (Disney) adapts a Marvel property but applies a 'San Fransokyo' aesthetic, merging American and Japanese futurism. The cultural merger is seamless.",
          "key_manifestations": [
            "Tokyo Ghoul (TV Series)",
            "Big Hero 6 (Film)",
            "Space Dandy (Adult Swim co-production)",
            "Edge of Tomorrow (Live action adaptation of 'All You Need Is Kill')"
          ]
        },
        "2015": {
          "salience_share": 9.9,
          "description": "*One Punch Man* goes viral (+0.6%). It is a satire of superhero tropes that resonates with a Marvel-saturated audience. The animation quality (Madhouse) sets a new standard. *Dragon Ball Super* revives the classic franchise, tapping into deep nostalgia for 90s kids.",
          "key_manifestations": [
            "One Punch Man (TV Series)",
            "Dragon Ball Super (Series Premiere)",
            "Food Wars (Culinary battles)",
            "Star Wars: The Force Awakens (J.J. Abrams citing anime pacing)"
          ]
        },
        "2016": {
          "salience_share": 10.8,
          "description": "*Your Name* (Kimi no Na wa) releases (+1.5%). It becomes the highest-grossing anime film of all time globally. It is a visual masterpiece of longing and connection. *Yuri on Ice* creates a massive global fandom for queer romance in sports. *Pokemon Go* (Cluster 36) brings the 1999 nostalgia full circle. Anime is no longer a subculture; it is a pillar of global pop culture.",
          "key_manifestations": [
            "Your Name (Film)",
            "Yuri on Ice (TV Series)",
            "Pokemon Go (The nostalgia loop closed)",
            "My Hero Academia (The new generation's X-Men)"
          ]
        }
      }
    },
    "50_the_great_vibe_shift_and_the_end_of_optimism": {
      "name": "The Great Vibe Shift and the End of Optimism",
      "description": "This final cluster marks the terminal point of the 1999-2016 era. It tracks the collapse of the 'Millennial Consensus' (Irony, Obama-era Hope, Technocracy) and the arrival of a darker, fragmented reality. It encompasses the death of the monoculture (David Bowie/Prince), the failure of the 'End of History' narrative (Brexit/Trump), and the transition from 'Connectivity' as a utopia to 'The Feed' as a weapon. It is the moment the 90s hangover finally cleared, replaced by the stark sobriety of the 21st century's actual face.",
      "trajectory": {
        "2016": {
          "salience_share": 15.0,
          "description": "The Singularity of the era. The timeline snaps. David Bowie and Prince die, symbolizing the end of the 20th-century artistic monoculture. *Black Mirror* 'San Junipero' offers a digital heaven because the real world feels like hell. The 'Clown Sightings' creates a surreal, pre-apocalyptic mood. The Chicago Cubs win the World Series, breaking a 108-year curse, which feels like a glitch in the simulation. The election of Donald Trump acts as the final rejection of the 'Script'—the experts were wrong, the data was wrong, and the narrative arc of 'Progress' was broken. The culture shifts from 'Aspirational' to 'Survivalist.' The youth of the 2000s is officially over; history has returned.",
          "key_manifestations": [
            "David Bowie 'Blackstar' (The orchestrated exit)",
            "Brexit and Trump Election (The populist rupture)",
            "Harambe (The descent into absurdity)",
            "Arrival (The attempt to communicate across the divide)",
            "Moonlight vs. La La Land (The Oscars glitch - reality fracturing)"
          ]
        }
      }
    },
    "51_the_satirical_news_hegemony_and_ironic_truth": {
      "name": "The Satirical News Hegemony and Ironic Truth",
      "description": "This cluster maps the displacement of traditional broadcast journalism by comedy. It tracks how *The Daily Show* and *The Colbert Report* became the primary source of news for a generation, establishing a cultural condition where the 'Fake News' (comedy) was viewed as more honest than the 'Real News' (CNN/Fox). It explores the evolution of 'Clapter'—comedy that affirms political beliefs rather than just provoking laughter—and how this ironic detachment eventually curdled into the polarized echo chambers of the 2010s.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "Jon Stewart takes over *The Daily Show* (+0.4%). He transforms it from a pop-culture snark fest into a sharp media critique. *The Onion* (print/web) is at its peak influence, creating headlines that are often mistaken for reality. The 'Political Humor' landscape is shifting from Jay Leno's broad monologues to specific, bite-sized deconstruction.",
          "key_manifestations": [
            "Jon Stewart's Daily Show Debut",
            "The Onion 'Our Dumb Century' (Book)",
            "Election (Film - Satire of political ambition)",
            "South Park (The movie - political censorship satire)"
          ]
        },
        "2000": {
          "salience_share": 2.2,
          "description": "The 'Indecision 2000' coverage establishes *The Daily Show* as essential viewing (+0.7%). The 'Bush vs. Gore' recount is a farce that traditional news struggles to cover honestly, but satire handles perfectly. *SNL*'s 'Strategery' sketches define George W. Bush's public persona more than his actual speeches.",
          "key_manifestations": [
            "Indecision 2000 (Daily Show coverage)",
            "SNL 'Strategery' Sketch",
            "The West Wing (The earnest counter-point)",
            "Bush v. Gore (The absurdity of the event)"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "Post-9/11, Jon Stewart's tearful monologue (+0.8%). It breaks the 'ironic distance.' It establishes him as the 'Walter Cronkite' of the demographic—the emotional anchor. *The Onion* publishes its 9/11 issue, proving that satire can process tragedy when sincerity fails. The 'War on Terror' begins, providing endless fodder for the critique of fear-mongering.",
          "key_manifestations": [
            "Jon Stewart 9/11 Monologue",
            "The Onion 9/11 Issue",
            "That's My Bush! (Failed sitcom satire)",
            "Zoolander (The absurdity of the news cycle)"
          ]
        },
        "2002": {
          "salience_share": 2.8,
          "description": "*Bowling for Columbine* (Cluster 43) mixes documentary with satire (+0.3%). Michael Moore wins the Oscar. It validates the 'Infotainment' model. *The Daily Show* begins to aggressively target Fox News, creating a binary: Smart Comedy vs. Stupid News. The 'Correspondent' persona (Steve Carell, Stephen Colbert) is honed.",
          "key_manifestations": [
            "Bowling for Columbine (Film)",
            "The Daily Show vs. Fox News (Feud begins)",
            "Ali G Indahouse (Mockery of politicians)",
            "CNN Crossfire (The target of future wrath)"
          ]
        },
        "2003": {
          "salience_share": 3.5,
          "description": "The Iraq War buildup (+0.7%). The mainstream media (NYT, CNN) fails to challenge the WMD narrative. *The Daily Show* is one of the few outlets asking skeptical questions, earning 'credibility through comedy.' *The Al Franken Show* launches on Air America, attempting to build a liberal radio counter-weight.",
          "key_manifestations": [
            "Daily Show 'Mess O' Potamia' Coverage",
            "Air America Radio (Launch)",
            "Chappelle's Show (Black Bush sketch)",
            "Team America: World Police (Production begins)"
          ]
        },
        "2004": {
          "salience_share": 4.2,
          "description": "Jon Stewart goes on *Crossfire* and destroys the show (+1.2%). 'Stop hurting America.' It is a viral moment before YouTube. It asserts the moral superiority of the comedian over the pundit. *Team America: World Police* satirizes both the War on Terror and the Hollywood liberals who oppose it, adopting a 'South Park Republican' nihilism.",
          "key_manifestations": [
            "Jon Stewart on Crossfire",
            "Team America: World Police (Film)",
            "The Daily Show 'Indecision 2004'",
            "Fahrenheit 9/11 (The polemic blockbuster)"
          ]
        },
        "2005": {
          "salience_share": 4.8,
          "description": "*The Colbert Report* premieres (+0.9%). It introduces 'Truthiness'—feeling that something is true despite facts. It deconstructs the Bill O'Reilly persona. The White House Correspondents' Dinner (2006, but Colbert is rising) becomes the arena where the jester publicly humbles the king. Satire is now a blood sport.",
          "key_manifestations": [
            "The Colbert Report (Premiere)",
            "Truthiness (Word of the Year)",
            "Thank You for Smoking (Spin satire)",
            "The Boondocks (TV Series Premiere)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "Stephen Colbert roasts George W. Bush to his face at the WHCD (+1.0%). It is uncomfortable, aggressive, and legendary. It solidifies the 'Comedy as Resistance' identity. *Borat* releases, exposing the prejudices of average Americans through an immersive satirical character. It reveals the 'Real America' better than the news.",
          "key_manifestations": [
            "Colbert at WHCD (Event)",
            "Borat (Film)",
            "Idiocracy (The future of stupid)",
            "Studio 60 on the Sunset Strip (Sorkin's failed attempt to honor comedy)"
          ]
        },
        "2007": {
          "salience_share": 5.8,
          "description": "The Writers Strike (+0.3%). The shows go off air, revealing how dependent the youth demographic is on them for news interpretation. *Funny or Die* launches 'The Landlord,' creating a platform for celebrity viral satire. The internet is taking over the distribution of political humor.",
          "key_manifestations": [
            "WGA Strike (The silence of the late night)",
            "Funny or Die (Launch)",
            "The Simpsons Movie (Political/Eco satire)",
            "Walk Hard (Deconstruction of the biopic)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "Tina Fey as Sarah Palin on *SNL* (+1.2%). It arguably affects the election. 'I can see Russia from my house' is quoted as a Palin line, though Fey said it. Satire overwrites reality. The Obama election feels like a victory for the 'Daily Show Generation.'",
          "key_manifestations": [
            "Tina Fey as Sarah Palin",
            "Prop 8: The Musical (Funny or Die)",
            "Religulous (Bill Maher's satire)",
            "W. (Oliver Stone's satire of Bush)"
          ]
        },
        "2009": {
          "salience_share": 6.2,
          "description": "*Parks and Rec* and *Modern Family* (Cluster 48) signal a move toward 'Nice' comedy, but political satire remains biting. *In the Loop* releases, a savage satire of the Iraq War intelligence failure. The 'Birther' movement (Cluster 39) becomes so absurd that it defies satire.",
          "key_manifestations": [
            "In the Loop (Film)",
            "The Informant! (Corporate satire)",
            "Parks and Recreation (Local politics)",
            "Auto-Tune the News (Viral remix)"
          ]
        },
        "2010": {
          "salience_share": 6.8,
          "description": "The 'Rally to Restore Sanity and/or Fear' (+0.7%). Stewart and Colbert hold a massive rally in DC. It is the peak of 'Rationalist Centrist' comedy. It argues that 'both sides' are crazy, a stance that ages poorly as polarization increases. It treats politics as a tone policing exercise.",
          "key_manifestations": [
            "Rally to Restore Sanity (Event)",
            "Four Lions (Terrorism satire)",
            "The Other Guys (Financial crisis explained via comedy)",
            "WikiLeaks (The raw data vs the spin)"
          ]
        },
        "2011": {
          "salience_share": 6.5,
          "description": "Seth Meyers roasts Trump at the WHCD (-0.3% immediate impact, +5.0% historical butterfly effect). Trump sits stone-faced. It is theorized this moment spurred his run. *Black Mirror* 'The National Anthem' satirizes the public's appetite for humiliation. *Veep* (US) is in production, preparing to strip the glamour from DC.",
          "key_manifestations": [
            "Seth Meyers/Obama Roast Trump",
            "Black Mirror 'The National Anthem'",
            "The Dictator (Sacha Baron Cohen)",
            "Portlandia (Lifestyle satire)"
          ]
        },
        "2012": {
          "salience_share": 7.2,
          "description": "*Veep* premieres (+0.6%). It is the anti-*West Wing*. Politics is petty, incompetent, and driven by ego. It feels more 'real' than the news. *Key & Peele* premieres, introducing 'Obama's Anger Translator' (Luther), visualizing the racial suppression required of the President.",
          "key_manifestations": [
            "Veep (TV Series Premiere)",
            "Key & Peele (Luther sketch)",
            "The Campaign (Election satire)",
            "The Newsroom (Sorkin's earnest failure)"
          ]
        },
        "2013": {
          "salience_share": 7.5,
          "description": "John Oliver guest hosts *The Daily Show* (+0.5%). He is a hit. HBO gives him *Last Week Tonight* (launching 2014). This creates the 'Explainer Comedy' genre—20-minute deep dives into obscure policy. Comedy becomes homework. *Alpha House* (Amazon) tries political satire but fails to catch on.",
          "key_manifestations": [
            "John Oliver Guest Host Run",
            "House of Cards (Cynicism as prestige drama)",
            "This Is the End (Celebrity apocalypse)",
            "Arrested Development S4 (The political wall plot)"
          ]
        },
        "2014": {
          "salience_share": 8.2,
          "description": "*Last Week Tonight* launches (+0.8%). The 'John Oliver Effect': segments on Net Neutrality actually crash FCC servers. Satire becomes activism. *The Interview* causes an international incident with North Korea, proving a comedy movie can still rattle a nuclear power. The stakes are getting higher.",
          "key_manifestations": [
            "Last Week Tonight (Premiere)",
            "The Interview (Hack/Release)",
            "Dear White People (Satire of campus politics)",
            "Silicon Valley (Tech satire)"
          ]
        },
        "2015": {
          "salience_share": 8.8,
          "description": "Jon Stewart leaves *The Daily Show* (-1.2% soul, +0.6% fragmentation). Trevor Noah takes over. Colbert moves to *The Late Show*, dropping the character. The landscape fractures. *The Big Short* uses comedy cameos (Margot Robbie in a tub) to explain financial crimes, perfecting the 'Edutainment' style.",
          "key_manifestations": [
            "Jon Stewart Finale",
            "The Big Short (Film)",
            "Full Frontal with Samantha Bee (Launch)",
            "Donald Trump SNL Hosting (Normalization controversy)"
          ]
        },
        "2016": {
          "salience_share": 9.5,
          "description": "The Election of 2016 breaks satire (+1.5%). Reality becomes too absurd to mock. 'Clapter' dominates—audiences cheer for insults against Trump rather than laughing. The 'liberal bubble' relies on late-night hosts for therapy. *HyperNormalisation* (Adam Curtis) argues that we have retreated into a simplified fake world because the real one is too complex.",
          "key_manifestations": [
            "Samantha Bee / John Oliver Trump Segments",
            "SNL 'Hallelujah' Cold Open (Grief replacing jokes)",
            "HyperNormalisation (Documentary)",
            "BrainDead (TV Series - Politics as alien infection)"
          ]
        }
      }
    },
    "52_the_shared_universe_and_intellectual_property_maximalism": {
      "name": "The Shared Universe and Intellectual Property Maximalism",
      "description": "This cluster maps the industrial reorganization of Hollywood around the 'Cinematic Universe' model. It tracks the shift from 'Movies' (standalone stories) to 'Content Bricks' (interconnected pieces of a perpetual franchise). It moves from the risks of *Iron Man* to the hegemony of *The Avengers*, forcing every other studio to attempt (and often fail) to build their own universes (Dark Universe, DCEU). It explores the death of the mid-budget film, the rise of 'Fandom' as an economic engine, and the cultural dominance of the 'Easter Egg'—where recognition replaces resolution.",
      "trajectory": {
        "1999": {
          "salience_share": 2.5,
          "description": "*Star Wars: Episode I* releases (+1.0%). It introduces the modern 'Prequel' era. It proves IP is bulletproof even with bad reviews. *The Matrix* launches a franchise, but it is an original IP. The 'Comic Book Movie' is still considered a gamble (*Blade* exists, *X-Men* is filming).",
          "key_manifestations": [
            "Star Wars: Episode I (The Phantom Menace)",
            "The Matrix (Original Franchise starter)",
            "The Mummy (Remake success)",
            "Toy Story 2 (The rare perfect sequel)"
          ]
        },
        "2000": {
          "salience_share": 2.8,
          "description": "*X-Men* releases (+0.6%). It proves that an ensemble superhero team works. It treats the source material seriously (mostly). *Unbreakable* deconstructs the superhero myth before the boom even begins. *Harry Potter* begins its film run, establishing the 'Book Adaptation' decade.",
          "key_manifestations": [
            "X-Men (Film)",
            "Unbreakable (Film)",
            "Harry Potter and the Sorcerer's Stone (Production)",
            "Charlie's Angels (TV Adaptation)"
          ]
        },
        "2001": {
          "salience_share": 3.5,
          "description": "*Harry Potter* and *Lord of the Rings* release (+1.2%). The 'Mega-Franchise' is born. These are not just sequels; they are multi-year commitments. They prove fantasy is the most profitable genre. *Planet of the Apes* (Burton) attempts a reboot and fails, showing that IP alone isn't enough without quality.",
          "key_manifestations": [
            "Harry Potter and the Sorcerer's Stone (Film)",
            "Lord of the Rings: Fellowship (Film)",
            "Shrek (Dreamworks Franchise)",
            "Lara Croft: Tomb Raider (Video game adaption)"
          ]
        },
        "2002": {
          "salience_share": 4.1,
          "description": "*Spider-Man* releases (+0.8%). It breaks the $100M opening weekend barrier. It is bright, colorful, and earnest. It proves the superhero is the new Western. *Star Wars: Attack of the Clones* introduces the 'Clone Wars,' expanding the lore beyond the films into multimedia.",
          "key_manifestations": [
            "Spider-Man (Film)",
            "Star Wars: Attack of the Clones (Film)",
            "The Bourne Identity (Franchise launch)",
            "Resident Evil (The zombie franchise)"
          ]
        },
        "2003": {
          "salience_share": 4.5,
          "description": "*X2* and *Matrix Reloaded* (+0.5%). The 'Sequel' is now the expected peak of the franchise. *Pirates of the Caribbean* turns a theme park ride into a blockbuster, proving IP can come from anywhere. *The League of Extraordinary Gentlemen* attempts a 'Shared Universe' of literary characters and fails spectacularly.",
          "key_manifestations": [
            "Pirates of the Caribbean (Theme Park IP)",
            "X2: X-Men United (Film)",
            "The League of Extraordinary Gentlemen (Failed Universe)",
            "Daredevil (The pre-MCU stumble)"
          ]
        },
        "2004": {
          "salience_share": 4.8,
          "description": "*Harry Potter* (Prisoner of Azkaban) shifts tone, proving franchises can evolve. *Catwoman* flops, reinforcing the 'female superhero movies don't work' myth that will hold for 13 years. *Alien vs. Predator* attempts a crossover, but it's viewed as a B-movie gimmick, not a universe event.",
          "key_manifestations": [
            "Harry Potter and the Prisoner of Azkaban",
            "Alien vs. Predator (Crossover)",
            "Catwoman (The Flop)",
            "Spider-Man 2 (The peak of the solo hero)"
          ]
        },
        "2005": {
          "salience_share": 5.2,
          "description": "*Batman Begins* (+0.7%). The 'Reboot' is legitimized. Christopher Nolan proves you can restart a dead franchise by making it 'dark and grounded.' *Revenge of the Sith* concludes the Star Wars prequels, leaving a void in the Geek ecosystem.",
          "key_manifestations": [
            "Batman Begins (The Reboot)",
            "Star Wars: Revenge of the Sith (The finale)",
            "Fantastic Four (The generic attempts)",
            "Chronicles of Narnia (Religious franchise attempt)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "Disney buys Pixar (Cluster 38). Bob Iger's strategy of 'Acquiring IP' begins. *Superman Returns* tries to be a 'Legacy Sequel' (ignoring 3 & 4) but is too nostalgic. *Casino Royale* reboots Bond effectively. The lesson: Reinvent, don't repeat.",
          "key_manifestations": [
            "Casino Royale (Bond Reboot)",
            "Superman Returns (Failed Legacy Sequel)",
            "X-Men: The Last Stand (Franchise fatigue)",
            "Pirates of the Caribbean 2 (Billion dollar club)"
          ]
        },
        "2007": {
          "salience_share": 5.8,
          "description": "*Transformers* releases (+0.6%). It proves that 'Toys' are viable blockbusters if you add enough explosions. *Spider-Man 3* suffers from 'Villain Bloat,' showing the danger of studio interference. Kevin Feige is appointed head of Marvel Studios.",
          "key_manifestations": [
            "Transformers (Toy IP)",
            "Spider-Man 3 (Studio meddling)",
            "Harry Potter 5 (The machine rolls on)",
            "The Golden Compass (Failed franchise starter)"
          ]
        },
        "2008": {
          "salience_share": 7.5,
          "description": "*Iron Man* releases (+1.8%). The Nick Fury post-credits scene. 'The Avengers Initiative.' It is the birth of the MCU. It promises a interconnected serial narrative across films. *The Dark Knight* proves IP can win Oscars. *Twilight* launches the YA franchise boom.",
          "key_manifestations": [
            "Iron Man (MCU Start)",
            "The Dark Knight (Peak Hero)",
            "Twilight (YA Boom)",
            "Indiana Jones 4 (The 'Nuke the Fridge' disappointment)"
          ]
        },
        "2009": {
          "salience_share": 7.8,
          "description": "Disney buys Marvel (+0.9%). The consolidation of power. *Avatar* becomes the highest-grossing film, proving original IP can still win if the tech is revolutionary (but fails to leave a cultural footprint). *Star Trek* reboots with an alternate timeline, allowing old and new canon to coexist.",
          "key_manifestations": [
            "Disney buys Marvel",
            "Avatar (Tech spectacle)",
            "Star Trek (Timeline reboot)",
            "Sherlock Holmes (Action-hero update)"
          ]
        },
        "2010": {
          "salience_share": 8.2,
          "description": "*Iron Man 2* sacrifices its own plot to set up *The Avengers* (+0.5%). Critics complain, but the box office grows. The movie exists to sell the *next* movie. *Alice in Wonderland* (Burton) grosses $1B, launching the 'Live Action Remake' strategy for Disney.",
          "key_manifestations": [
            "Iron Man 2 (The trailer for the Avengers)",
            "Alice in Wonderland (Live Action Remake)",
            "Harry Potter 7 Part 1 (Splitting the book)",
            "Inception (Original IP success - rare)"
          ]
        },
        "2011": {
          "salience_share": 8.5,
          "description": "*Harry Potter* ends (+0.4%). *Thor* and *Captain America* release. They are risky—magic and period pieces—but the brand trust is forming. *Green Lantern* flops, proving that just being a superhero isn't enough; you need the 'Formula.'",
          "key_manifestations": [
            "Harry Potter and the Deathly Hallows Part 2",
            "Thor / Captain America (Phase 1 expansion)",
            "Green Lantern (DCEU stumble)",
            "Rise of the Planet of the Apes (Prequel reboot success)"
          ]
        },
        "2012": {
          "salience_share": 9.5,
          "description": "*The Avengers* releases (+1.5%). It earns $1.5 billion. It proves the 'Shared Universe' is the ultimate business model. Audiences cheer for characters meeting. Disney buys Lucasfilm (Star Wars). The monopoly is forming. *The Hunger Games* replaces Twilight.",
          "key_manifestations": [
            "The Avengers (The Team-Up)",
            "Disney buys Lucasfilm",
            "The Hunger Games (The new YA king)",
            "The Amazing Spider-Man (The unnecessary reboot)"
          ]
        },
        "2013": {
          "salience_share": 9.2,
          "description": "*Man of Steel* launches the DCEU (+0.4%). It tries to copy the Nolan 'grimdark' tone for Superman, creating a divisive foundation. *Frozen* becomes a surprise franchise. *The Hobbit* is stretched into three movies, showing the cynicism of 'Content Stretching.'",
          "key_manifestations": [
            "Man of Steel (DCEU Launch)",
            "Frozen (Disney Animation revival)",
            "The Hobbit: Desolation of Smaug (Bloat)",
            "Pacific Rim (Original IP struggle)"
          ]
        },
        "2014": {
          "salience_share": 9.8,
          "description": "*Guardians of the Galaxy* (+0.7%). Marvel proves it can make a hit out of a D-list property with a talking racoon. The brand is stronger than the characters. *The Lego Movie* turns a toy into a meta-franchise. Sony attempts to launch a 'Spider-Verse' early with *Amazing Spider-Man 2* but fails due to overcrowding.",
          "key_manifestations": [
            "Guardians of the Galaxy (Brand Power)",
            "The Lego Movie (Meta-IP)",
            "Amazing Spider-Man 2 (Failed Universe)",
            "Godzilla (MonsterVerse start)"
          ]
        },
        "2015": {
          "salience_share": 10.5,
          "description": "*Star Wars: The Force Awakens* (+1.2%). The 'Legacy Sequel.' It is a remake of *A New Hope* disguised as a sequel. It weaponizes nostalgia (Han Solo). *Jurassic World* does the same. Universal attempts to launch the 'Dark Universe' with *Dracula Untold* (reshoots) but it fails. Everyone wants a universe; few can build one.",
          "key_manifestations": [
            "Star Wars: The Force Awakens (Nostalgia weaponized)",
            "Jurassic World (Legacy Sequel)",
            "Avengers: Age of Ultron (Cracks in the formula)",
            "Mad Max: Fury Road (The auteur franchise entry)"
          ]
        },
        "2016": {
          "salience_share": 10.8,
          "description": "*Batman v Superman* and *Suicide Squad* release (+0.5%). Critically reviled, commercially successful (mostly). It proves the 'Brand' survives bad quality. *Civil War* acts as Avengers 2.5. *Deadpool* mocks the genre while being part of it. *Rogue One* is the first 'Spin-off,' filling the gaps in the release schedule. The Content Hose is fully open.",
          "key_manifestations": [
            "Batman v Superman (The Martha Moment)",
            "Captain America: Civil War (The airport battle)",
            "Deadpool (R-rated meta)",
            "Rogue One (The side story)"
          ]
        }
      }
    },
    "53_the_mommy_blog_and_the_monetization_of_domesticity": {
      "name": "The Mommy Blog and the Monetization of Domesticity",
      "description": "This cluster maps the transformation of motherhood from a private role to a public performance and a commercial engine. It tracks the rise of the 'Mommy Blog' (Dooce) in the early 2000s—initially a space for raw, honest venting—to the polished, sponsored 'Influencer Mom' of Instagram and Pinterest. It explores the 'Sharenting' phenomenon (posting kids for content), the pressure of 'Pinterest Perfection,' and the commodification of the domestic sphere, where every lunchbox note and birthday party is a branding opportunity.",
      "trajectory": {
        "2002": {
          "salience_share": 1.2,
          "description": "Heather Armstrong launches 'Dooce' (+0.4%). It is the Patient Zero of mommy blogging. She writes about work, gets fired (getting 'dooced'), and then writes about pregnancy and depression. It is raw, text-heavy, and anti-perfection. It validates the 'Bad Mom' feelings.",
          "key_manifestations": [
            "Dooce (Blog Launch)",
            "I Don't Know How She Does It (Book)",
            "My Big Fat Greek Wedding (Traditional maternal pressure)",
            "Divine Secrets of the Ya-Ya Sisterhood (Mother-daughter trauma)"
          ]
        },
        "2003": {
          "salience_share": 1.5,
          "description": "The 'Stroller Wars' begin in urban centers (Bugaboo vs. Maclaren) (+0.3%). Motherhood gear becomes a status symbol. *What Not to Wear* (TV) focuses on the 'Frumpy Mom' makeover, reinforcing the idea that mothers must maintain sexual/fashion relevance.",
          "key_manifestations": [
            "Bugaboo Frog (Status Stroller)",
            "What Not to Wear (The Mom Makeover)",
            "Daddy Day Care (The incompetent father trope)",
            "Freaky Friday (The burden of the mother)"
          ]
        },
        "2004": {
          "salience_share": 1.8,
          "description": "Facebook launches (Cluster 9). It will eventually become the primary distribution network for baby photos. *Desperate Housewives* depicts the suburbs as a prison of secrets, but glamorizes the domestic space. The 'Soccer Mom' is a key political demographic in the election.",
          "key_manifestations": [
            "Desperate Housewives (Suburban Gothic)",
            "Soccer Mom (Political Demographic)",
            "Supernanny (The breakdown of discipline)",
            "Mean Girls (The Cool Mom)"
          ]
        },
        "2005": {
          "salience_share": 2.2,
          "description": "Tom Cruise attacks Brooke Shields for using antidepressants for postpartum depression (+0.6%). The backlash creates a massive national conversation about PPD. It validates the 'Honest Motherhood' narrative. Etsy launches, giving moms a way to monetize their crafts.",
          "key_manifestations": [
            "Tom Cruise vs. Brooke Shields",
            "Etsy (Mompreneur platform)",
            "Weeds (The drug dealing mom)",
            "Jon & Kate Plus 8 (Concept/Pilot - Parenting as spectacle)"
          ]
        },
        "2006": {
          "salience_share": 2.5,
          "description": "The 'BlogHer' conference is founded (+0.4%). Mommy blogging is now an industry. Brands begin to sponsor posts. The shift from 'Venting' to 'Selling' begins. Angelina Jolie's adoptions make 'Global Motherhood' a celebrity accessory.",
          "key_manifestations": [
            "BlogHer (Conference)",
            "Angelina Jolie/Brad Pitt Family",
            "Little Miss Sunshine (The exhausted mom)",
            "The Devil Wears Prada (The career vs family binary)"
          ]
        },
        "2007": {
          "salience_share": 2.9,
          "description": "*Jon & Kate Plus 8* premieres (+0.6%). It turns a large family into a reality TV product. It normalizes filming children for profit. The iPhone launches, allowing mothers to document every moment instantly. The 'Facebook Album' becomes the new refrigerator door.",
          "key_manifestations": [
            "Jon & Kate Plus 8 (TV Series)",
            "iPhone (The camera always on)",
            "Knocked Up (The fear of parenthood)",
            "Waitress (Pregnancy as trap and liberation)"
          ]
        },
        "2008": {
          "salience_share": 3.5,
          "description": "The Recession pushes 'Thrift' and 'DIY.' The 'Frugal Mom' blogger rises. Couponing becomes cool. *Twilight* features Bella as the 'Mother' figure to her own parents, then becomes a teen mom fantasy in *Breaking Dawn*. 'Octomom' (Nadya Suleman) becomes a media grotesque, showing the dark side of fertility fame.",
          "key_manifestations": [
            "Octomom (Media Circus)",
            "Extreme Couponing (Trend roots)",
            "Twilight (The teen mom fantasy)",
            "Changeling (The mother's intuition)"
          ]
        },
        "2009": {
          "salience_share": 4.1,
          "description": "Kourtney Kardashian gives birth on reality TV (+0.5%). The birth is content. *Modern Family* features Claire Dunphy as the frantic, controlling CEO of the household. The 'Pioneer Woman' (Ree Drummond) blog explodes, selling a fantasy of ranch life and butter.",
          "key_manifestations": [
            "Kourtney Kardashian Birth (KUWTK)",
            "The Pioneer Woman (Blog/Brand)",
            "Modern Family (Claire Dunphy)",
            "The Blind Side (The white savior mom)"
          ]
        },
        "2010": {
          "salience_share": 5.2,
          "description": "Pinterest launches (+1.5%). The Singularity of domestic pressure. The 'Pinterest Mom' is born. Birthday parties must be themed, color-coordinated, and handmade. It creates an impossible standard of visual perfection. 'Tiger Mom' (Cluster 40) creates the 'Performance Parenting' debate.",
          "key_manifestations": [
            "Pinterest (Launch)",
            "Battle Hymn of the Tiger Mother (Book)",
            "Teen Mom (MTV - The anti-glamour)",
            "Easy A (The cool parents)"
          ]
        },
        "2011": {
          "salience_share": 5.8,
          "description": "Instagram gains traction. The 'Curated Motherhood' moves from the blog to the feed. Filters make messes look artistic. Jessica Alba launches 'The Honest Company,' monetizing eco-anxiety for moms. 'Goop' (Cluster 26) pushes expensive wellness as a maternal duty.",
          "key_manifestations": [
            "The Honest Company (Launch)",
            "Instagram Mom (Aesthetic)",
            "Dance Moms (The stage mother)",
            "We Need to Talk About Kevin (The fear of the bad seed)"
          ]
        },
        "2012": {
          "salience_share": 6.2,
          "description": "*Blue Ivy Carter* is born (+0.4%). The celebrity baby is royalty. *What to Expect When You're Expecting* (Film) tries to ensemble-cast the pregnancy experience but feels dated compared to the raw blogs. 'Scary Mommy' (Blog) gains massive traffic by admitting to hating parenting sometimes (The 'Confessional' style).",
          "key_manifestations": [
            "Blue Ivy Carter",
            "Scary Mommy (Confessional Blog)",
            "Brave (Mother-Bear transformation)",
            "What to Expect When You're Expecting (Film)"
          ]
        },
        "2013": {
          "salience_share": 6.5,
          "description": "Kim Kardashian gets pregnant (+0.5%). The 'Maternity Style' is revolutionized (tight, fashion-forward). *Frozen* deals with the bad parenting of the King/Queen (isolation). The 'Elf on the Shelf' (Cluster 40) becomes a mandatory, Pinterest-fueled performance for parents.",
          "key_manifestations": [
            "Kim Kardashian Maternity Style",
            "Elf on the Shelf (Viral spread)",
            "Frozen (Parental failure)",
            "Mom (TV Series - Addiction comedy)"
          ]
        },
        "2014": {
          "salience_share": 7.2,
          "description": "The 'Basic Bitch' meme targets the Pumpkin Spice Latte loving, Ugg-wearing suburban woman (-0.6% cool, +0.6% defensive identity). Moms embrace 'Wine Mom' culture as a coping mechanism. 'It's wine o'clock.' *Boyhood* features Patricia Arquette as the struggling single mom, winning an Oscar for the realistic depiction.",
          "key_manifestations": [
            "Wine Mom Culture",
            "Boyhood (The mother's arc)",
            "The Babadook (Maternal exhaustion as horror)",
            "Maleficent (The adoptive mother)"
          ]
        },
        "2015": {
          "salience_share": 7.8,
          "description": "YouTube 'Family Vloggers' (SHAYTARDS, Ace Family) become huge (+0.8%). Daily vlogging of children is a career. Issues of consent begin to bubble. *Bad Moms* (Production) creates a movie around the rejection of Pinterest perfection. The 'Fed is Best' vs 'Breast is Best' war rages online.",
          "key_manifestations": [
            "Family Vloggers (YouTube trend)",
            "Bad Moms (Concept)",
            "Inside Out (The parent's view of the child)",
            "Room (Motherhood in trauma)"
          ]
        },
        "2016": {
          "salience_share": 8.5,
          "description": "*Bad Moms* releases (+0.7%). It is a hit. It validates the 'Slacker Mom.' However, the 'Trad Wife' aesthetic begins to form on the alt-right internet, fetishizing a return to 1950s domestic submission. The 'Sharenting' backlash begins as the first generation of blogged kids reaches adolescence.",
          "key_manifestations": [
            "Bad Moms (Film)",
            "Trad Wife (Early internet subculture)",
            "Stranger Things (Joyce Byers - The frantic protector)",
            "Big Little Lies (Production - The dark side of the school run)"
          ]
        }
      }
    },
    "54_the_thought_leader_economy_and_middlebrow_intellectualism": {
      "name": "The Thought Leader Economy and Middlebrow Intellectualism",
      "description": "This cluster maps the rise of 'Pop-Science' and the commodification of big ideas. It tracks the shift from academic obscurity to the bestseller list, driven by authors like Malcolm Gladwell and the rise of the TED Talk ecosystem. It explores the cultural hunger for 'The One Counter-Intuitive Trick' to solve systemic problems (broken windows policing, nudge theory, the 10,000-hour rule). It analyzes how intellectualism was repackaged as entertainment for the aspirational class, creating a 'Smart-Casual' worldview where anecdotes replace data and every social issue has a clever, apolitical fix.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "The cluster is dormant but germinating. The 'Business Book' is still dominated by *Who Moved My Cheese?*—simplistic parables. However, the success of *The Matrix* creates a hunger for 'Philosophy Lite' (Red Pill/Simulacra). The audience is ready to feel smart.",
          "key_manifestations": [
            "Who Moved My Cheese? (Book)",
            "The Matrix (Pop-Philosophy)",
            "Business @ the Speed of Thought by Bill Gates (Technocratic optimism)",
            "Fight Club (The anarchic response to self-help)"
          ]
        },
        "2000": {
          "salience_share": 2.2,
          "description": "Malcolm Gladwell publishes *The Tipping Point* (+0.8%). The Catalyst. It introduces the formula: A compelling anecdote + a cherry-picked study = a Universal Law of Human Behavior. It invents the 'Idea Virus.' Suddenly, cocktail party conversation revolves around 'Mavens' and 'Connectors.'",
          "key_manifestations": [
            "The Tipping Point (Book)",
            "Rich Dad Poor Dad (Financial pseudoscience)",
            "No Logo (The anti-corporate intellectualism)",
            "Memento (The puzzle film as IQ test)"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "*Fast Food Nation* releases (+0.4%). It is rigorous journalism, but it fits the 'Secret History of Everyday Things' mold. *A Beautiful Mind* glamorizes the 'Tortured Genius,' linking intelligence with social detachment (a key theme of the coming nerd-king era).",
          "key_manifestations": [
            "Fast Food Nation (Book)",
            "A Beautiful Mind (Film)",
            "Nickel and Dimed (The economics of poverty)",
            "Donnie Darko (Time travel physics for teens)"
          ]
        },
        "2002": {
          "salience_share": 2.8,
          "description": "The 'Slate Pitch' style of contrarian journalism begins to rise online (+0.3%). 'Actually, sweatshops are good.' It trains the audience to value counter-intuition over moral instinct. *Adaptation* deconstructs the 'Screenwriting Guru' (Robert McKee), exposing the formula behind the art.",
          "key_manifestations": [
            "The Rise of the Creative Class (Richard Florida - Book)",
            "Adaptation (Film)",
            "Catch Me If You Can (The genius con artist)",
            "Complications by Atul Gawande (Medical intellect)"
          ]
        },
        "2003": {
          "salience_share": 3.5,
          "description": "*The Da Vinci Code* explodes (+0.7%). While fiction, it validates the 'Secret Knowledge' desire. It teaches the public to look for hidden codes in art and history. *Moneyball* (Book) argues that 'Data' beats 'Intuition.' This is the foundational text for the algorithmic takeover of culture (Cluster 9).",
          "key_manifestations": [
            "The Da Vinci Code (Book)",
            "Moneyball (Book)",
            "A Short History of Nearly Everything (Bill Bryson)",
            "MythBusters (Science as entertainment)"
          ]
        },
        "2004": {
          "salience_share": 3.8,
          "description": "*The Wisdom of Crowds* is published (+0.4%). It validates the 'Web 2.0' ethos before it happens. It argues that the average of the many is smarter than the expert. *The Daily Show* (Cluster 51) begins to interview authors seriously, becoming the primary book tour stop for the new intelligentsia.",
          "key_manifestations": [
            "The Wisdom of Crowds (Book)",
            "Super Size Me (The N=1 experiment)",
            "Eternal Sunshine (The neuroscience of memory)",
            "What the Bleep Do We Know!? (Quantum mysticism)"
          ]
        },
        "2005": {
          "salience_share": 4.5,
          "description": "*Freakonomics* releases (+1.2%). The peak of the cluster. 'Why do drug dealers live with their moms?' It applies economic logic to everything. It is fun, cynical, and wildly popular. It creates a genre of 'Everything you know is wrong' books. It suggests that with enough data, morality is irrelevant.",
          "key_manifestations": [
            "Freakonomics (Book)",
            "Blink by Malcolm Gladwell (Book)",
            "The World Is Flat (Globalization optimism)",
            "House M.D. (The Sherlock Holmes doctor)"
          ]
        },
        "2006": {
          "salience_share": 5.2,
          "description": "TED Talks go online (+1.5%). The 'Idea Worth Spreading' format conquers the internet. 18 minutes, a red circle, and an epiphany. It turns intellectuals into rock stars. It creates a 'Smart-Casual' aesthetic for knowledge—no jargon, just stories. Sir Ken Robinson's 'Do Schools Kill Creativity?' becomes the most-watched talk ever.",
          "key_manifestations": [
            "TED Talks (Online Launch)",
            "The God Delusion (Cluster 18 intersection)",
            "An Inconvenient Truth (PowerPoint as cinema)",
            "The Secret (The anti-intellectual mirror)"
          ]
        },
        "2007": {
          "salience_share": 5.5,
          "description": "Nassim Taleb publishes *The Black Swan* (+0.6%). It predicts the crash (sort of). It introduces 'Probability' as a lifestyle. The 'New Atheists' (Hitchens/Dawkins) are dominating the non-fiction charts, framing 'Reason' as a warrior identity.",
          "key_manifestations": [
            "The Black Swan (Book)",
            "The 4-Hour Workweek (Productivity hacking)",
            "Zeitgeist (The conspiracy version of 'Secret Knowledge')",
            "There Will Be Blood (The failure of the self-made man)"
          ]
        },
        "2008": {
          "salience_share": 6.2,
          "description": "Gladwell returns with *Outliers* (+0.8%). The '10,000 Hour Rule.' It promises that genius is just labor. *Nudge* (Thaler/Sunstein) introduces 'Libertarian Paternalism'—the idea that elites should design systems to trick people into making better choices. It becomes the policy handbook for the Obama era.",
          "key_manifestations": [
            "Outliers (Book)",
            "Nudge (Book)",
            "Iron Man (The engineer as savior)",
            "Wall-E (The warning against passivity)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "Daniel Pink publishes *Drive* (+0.4%). The 'Science of Motivation.' Corporate HR departments adopt the language of the cluster. 'RSA Animate' videos go viral—drawing cartoons to match lectures. Visualizing complex ideas makes them sharable.",
          "key_manifestations": [
            "Drive (Book)",
            "RSA Animate (YouTube Series)",
            "Sherlock (The deduction visualization)",
            "Up in the Air (The philosophy of the backpack)"
          ]
        },
        "2010": {
          "salience_share": 6.9,
          "description": "*The Social Network* features Aaron Sorkin's dialogue (+0.5%). It glamorizes the 'High-Speed Intelligent Debate.' It makes coding and business strategy look like gunfights. The 'Thought Leader' is now the Tech CEO. 'Gamification' (Cluster 36) books appear, promising to hack human behavior.",
          "key_manifestations": [
            "The Social Network (Film)",
            "The Immortal Life of Henrietta Lacks (Science history)",
            "Sherlock (TV Series)",
            "Inception (The idea as a virus)"
          ]
        },
        "2011": {
          "salience_share": 7.5,
          "description": "Daniel Kahneman publishes *Thinking, Fast and Slow* (+0.8%). It brings behavioral psychology to the masses. 'Cognitive Bias' becomes a buzzword. Everyone accuses everyone else of 'Confirmation Bias' in arguments. *Steve Jobs* (Biography) becomes a bestseller, canonizing the 'Crazy One' genius narrative.",
          "key_manifestations": [
            "Thinking, Fast and Slow (Book)",
            "Steve Jobs by Walter Isaacson (Book)",
            "Sapiens (First published in Hebrew - buzz building)",
            "Limitless (The fantasy of pure cognitive access)"
          ]
        },
        "2012": {
          "salience_share": 7.2,
          "description": "Susan Cain publishes *Quiet* (Cluster 33) (+0.6%). It applies the 'Scientific Re-evaluation' formula to personality types. *Sherlock* (Season 2) reaches peak popularity. The 'Mind Palace' becomes a trope. The 'Explainer' journalism site (Vox, soon to launch) begins to germinate.",
          "key_manifestations": [
            "Quiet (Book)",
            "The Power of Habit (Book)",
            "Sherlock Season 2",
            "The Newsroom (The lecture as TV show)"
          ]
        },
        "2013": {
          "salience_share": 7.8,
          "description": "Sheryl Sandberg's *Lean In* (Cluster 30) (+0.7%). It frames structural sexism as a psychological barrier to be hacked. 'TEDx' (local events) dilutes the brand, creating a parody of the format ('Onion Talks'). The 'Thought Leader' bubble begins to leak as quality control fails.",
          "key_manifestations": [
            "Lean In (Book)",
            "David and Goliath (Gladwell's decline)",
            "Her (The philosophy of AI)",
            "Black Mirror (The philosophy of tech)"
          ]
        },
        "2014": {
          "salience_share": 8.5,
          "description": "*Sapiens* (English translation) releases (+0.9%). Yuval Noah Harari becomes the new guru. He explains all of human history in 400 pages. It is the ultimate 'Big History' text. *Neil deGrasse Tyson* reboots *Cosmos*, trying to bring back the Sagan-era wonder, but the 'Internet Atheist' tone alienates some.",
          "key_manifestations": [
            "Sapiens (Book)",
            "Cosmos: A Spacetime Odyssey (TV)",
            "The Imitation Game (The tortured math genius)",
            "Interstellar (Physics as plot)"
          ]
        },
        "2015": {
          "salience_share": 8.2,
          "description": "Ta-Nehisi Coates publishes *Between the World and Me* (+0.8%). It shifts the intellectual weight from 'Clever Fixes' to 'Deep Structural Trauma.' It marks a turn away from the Gladwellian optimism. *The Big Short* uses celebrity cameos to explain CDOs, acknowledging that the audience needs sugar to swallow the medicine.",
          "key_manifestations": [
            "Between the World and Me (Book)",
            "The Big Short (Film)",
            "Hamilton (History remix)",
            "Spotlight (The procedural of truth)"
          ]
        },
        "2016": {
          "salience_share": 7.5,
          "description": "J.D. Vance publishes *Hillbilly Elegy* (+0.7%). It is embraced by liberals (initially) as the 'Explainer' for the Trump voter. It fits the genre: 'Here is the secret sociology.' However, the election of Trump—who rejects all data and expertise—signals the death of the 'Technocratic Solution.' The experts were wrong. The Thought Leader era ends in shock.",
          "key_manifestations": [
            "Hillbilly Elegy (Book)",
            "Arrival (Linguistics as superpower)",
            "Westworld (The philosophy of consciousness)",
            "Adam Curtis' HyperNormalisation (The anti-TED talk)"
          ]
        }
      }
    },
    "55_the_paparazzi_panopticon_and_the_celebrity_meltdown": {
      "name": "The Paparazzi Panopticon and the Celebrity Meltdown",
      "description": "This cluster maps the rise of the 24/7 surveillance of female celebrity. It tracks the shift from the carefully managed PR of the 90s to the predatory, chaotic 'Gotcha' journalism of TMZ and Perez Hilton. It analyzes the 'Bimbo Summit' era (Paris, Lindsay, Britney) and the cultural appetite for the 'Public Breakdown.' It explores how the destruction of young women became a spectator sport, fueled by the early internet's lack of ethical boundaries, eventually leading to a retrospective reckoning (Free Britney) in the next era.",
      "trajectory": {
        "2002": {
          "salience_share": 2.5,
          "description": "The *Osbournes* premieres (+0.5%). It breaks the fourth wall of celebrity domesticity. We see the trash, the swearing, the dysfunction. It normalizes the 'Peek behind the curtain.' *American Idol* creates 'Instant Celebrities' (Kelly Clarkson) who have no media training, making them vulnerable.",
          "key_manifestations": [
            "The Osbournes (TV Series)",
            "American Idol (Reality Fame)",
            "Winona Ryder Shoplifting Scandal",
            "Gigli (BenNifer obsession begins)"
          ]
        },
        "2003": {
          "salience_share": 3.2,
          "description": "Paris Hilton's sex tape leaks (+0.8%). *The Simple Life* premieres. It is the birth of 'Famous for being Famous.' She weaponizes the invasion of privacy. 'Perez Hilton' launches (soon after), doodling semen on celebrity faces. The tone of coverage shifts from 'worship' to 'mockery.'",
          "key_manifestations": [
            "Paris Hilton Sex Tape",
            "The Simple Life (TV Series)",
            "Punk'd (Celebrity humiliation)",
            "Lost in Translation (The celebrity bubble)"
          ]
        },
        "2004": {
          "salience_share": 3.8,
          "description": "Lindsay Lohan in *Mean Girls* (+0.4%). She is at the peak of her powers. The media begins to hunt her. *Us Weekly* shifts focus to 'Just Like Us' (coffee runs) and 'Stars Are Blind' (drunk photos). Janet Jackson's 'Nipplegate' exposes the visceral misogyny of the media—she is blacklisted; Timberlake skates.",
          "key_manifestations": [
            "Mean Girls (Lindsay's peak)",
            "Janet Jackson Super Bowl",
            "Ashlee Simpson SNL Lip Sync (The public shaming)",
            "The Ashlee Simpson Show (Reality surveillance)"
          ]
        },
        "2005": {
          "salience_share": 4.5,
          "description": "Tom Cruise jumps on Oprah's couch (+0.7%). The first viral celebrity meltdown. YouTube exists now, so the clip is remixed endlessly. It breaks his invincibility. Brad and Jen split; Brangelina rises. 'Team Aniston' vs 'Team Jolie' t-shirts turn divorce into a team sport.",
          "key_manifestations": [
            "Tom Cruise Couch Jump",
            "Brangelina vs. Aniston",
            "Kate Moss Cocaine Photos",
            "Mr. & Mrs. Smith (The meta-textual film)"
          ]
        },
        "2006": {
          "salience_share": 5.2,
          "description": "The 'Bimbo Summit' (+0.9%). Photos of Paris, Lindsay, and Britney in a car. The paparazzi swarm is dangerous and massive. They are hunting these women. *The Devil Wears Prada* glamorizes the industry that consumes them. TMZ launches on TV, bringing the 'ambush interview' to the mainstream.",
          "key_manifestations": [
            "The Bimbo Summit Photos",
            "TMZ on TV (Premiere)",
            "Mel Gibson DUI (The unforgivable rant)",
            "Borat (Pamela Anderson kidnapping plot)"
          ]
        },
        "2007": {
          "salience_share": 6.5,
          "description": "Britney Spears shaves her head (+1.8%). The darkest moment of the cluster. The media gleefully documents a mental health crisis. 'Leave Britney Alone' (Chris Crocker) is mocked, but was right. *Gossip Girl* premieres, fictionalizing the 'Blog' that tracks elite youth, teaching a generation that surveillance is social currency.",
          "key_manifestations": [
            "Britney's Head Shave / Umbrella Attack",
            "Leave Britney Alone (Viral Video)",
            "Gossip Girl (Premiere)",
            "Anna Nicole Smith Death (Media circus)"
          ]
        },
        "2008": {
          "salience_share": 5.8,
          "description": "*The Hills* creates 'Scripted Reality' (+0.6%). Spencer and Heidi constitute the 'Villain Couple.' They stage paparazzi photos. The line between 'Stalking' and 'Promotion' blurs completely. *Iron Man* (Robert Downey Jr.) marks the 'Redemption Arc'—the addict who returns as a king.",
          "key_manifestations": [
            "The Hills (Heidi/Spencer)",
            "Iron Man (RDJ Redemption)",
            "Britney's Conservatorship (Established)",
            "Forgetting Sarah Marshall (Paparazzi subplot)"
          ]
        },
        "2009": {
          "salience_share": 5.5,
          "description": "Kanye West interrupts Taylor Swift (+0.7%). 'Imma let you finish.' It creates the villain/victim dynamic that will fuel pop culture for a decade. Michael Jackson dies. The internet traffic crashes Google. It is the first 'Twitter Death' event. The coverage shifts from 'Wacko Jacko' to 'King of Pop' instantly.",
          "key_manifestations": [
            "Kanye/Taylor VMA Incident",
            "Michael Jackson Death",
            "Tiger Woods Scandal (The fall of the perfect brand)",
            "Jersey Shore (The democratization of trash fame)"
          ]
        },
        "2010": {
          "salience_share": 5.2,
          "description": "Lindsay Lohan goes to jail (+0.4%). The 'SCRAM' bracelet becomes a fashion accessory. The public is exhausted by the 'Trainwreck' narrative. Lady Gaga's 'Meat Dress' reclaims the spectacle—if you want a piece of me, here is the meat. It acts as performance art about the cluster.",
          "key_manifestations": [
            "Lindsay Lohan Jail Sentence",
            "Lady Gaga Meat Dress",
            "The Social Network (Privacy is dead)",
            "Easy A (The rumor mill)"
          ]
        },
        "2011": {
          "salience_share": 5.8,
          "description": "Amy Winehouse dies (+0.8%). The footage of her being booed on stage weeks prior is re-examined. The '27 Club' mythologizing begins. Charlie Sheen has a public breakdown ('Winning', 'Tiger Blood'). He tours his mania. The audience laughs, but it is clearly a crisis.",
          "key_manifestations": [
            "Amy Winehouse Death",
            "Charlie Sheen 'Winning'",
            "Rebecca Black 'Friday' (Child bullying viral)",
            "Black Mirror 'The National Anthem'"
          ]
        },
        "2012": {
          "salience_share": 4.5,
          "description": "Amanda Bynes begins her Twitter spiral (-0.3% coverage, +0.6% social media directness). She tweets directly to Drake. The middleman (TMZ) is cut out; the breakdown is live-streamed by the subject. *The Hunger Games* satirizes the 'Interview' and the need to be liked to survive.",
          "key_manifestations": [
            "Amanda Bynes Twitter",
            "The Hunger Games (Caesar Flickerman)",
            "Spring Breakers (Disney girls gone bad)",
            "Taylor Swift 'Red' Era (Dating life as content)"
          ]
        },
        "2013": {
          "salience_share": 4.2,
          "description": "*The Bling Ring* (Sofia Coppola) releases (+0.4%). It dramatizes the teens who robbed Paris Hilton. It frames the theft as an act of worship. It is the end of the 'Bimbo Summit' era. Miley Cyrus at the VMAs (Twerking) kills Hannah Montana. It is a controlled demolition of a child star image.",
          "key_manifestations": [
            "The Bling Ring (Film)",
            "Miley Cyrus VMA Performance",
            "Justin Bieber's Monkey (The spiral begins)",
            "American Hustle (The art of the con)"
          ]
        },
        "2014": {
          "salience_share": 5.5,
          "description": "The Fappening (iCloud Leaks) (+1.2%). Jennifer Lawrence and others have nudes stolen. The tone shifts from 'Look at this trainwreck' to 'This is a sex crime.' The 'Entitlement' of the internet audience is challenged. *Gone Girl* depicts the media narrative ('Amazing Amy') as a prison to be manipulated.",
          "key_manifestations": [
            "The Fappening (Event)",
            "Gone Girl (Media satire)",
            "Kim Kardashian 'Break the Internet' (Reclaiming the nude)",
            "Nightcrawler (The sociopathy of the footage)"
          ]
        },
        "2015": {
          "salience_share": 4.8,
          "description": "*Amy* (Documentary) releases (+0.6%). It indicts the audience. We watch ourselves destroying her. It changes the conversation around the 'Trainwreck' trope. Amy Schumer's *Trainwreck* attempts to reclaim the word as comedy. The 'Cancel Culture' mechanic begins to replace the 'Paparazzi' mechanic as the primary threat to fame.",
          "key_manifestations": [
            "Amy (Documentary)",
            "Trainwreck (Film)",
            "Unreal (TV Series - Deconstructing The Bachelor)",
            "Purpose by Justin Bieber (The apology tour)"
          ]
        },
        "2016": {
          "salience_share": 5.2,
          "description": "Kim Kardashian is robbed at gunpoint in Paris (+0.7%). The reality show stops. The vulnerability is real. Taylor Swift vs. Kim/Kanye ('The Snake'). The feud is played out on Snapchat/Instagram Stories. The Paparazzi are obsolete; the celebrities are now their own publishers and executioners. The 'Panopticon' is now internal.",
          "key_manifestations": [
            "Kim Kardashian Robbery",
            "Taylor Swift Snakegate",
            "Lemonade (Beyoncé controls the narrative completely)",
            "Popstar: Never Stop Never Stopping (The fragility of the entourage)"
          ]
        }
      }
    },
    "56_the_fandom_singularity_and_transformative_works": {
      "name": "The Fandom Singularity and Transformative Works",
      "description": "This cluster maps the rise of the Fan as a creative force. It tracks the movement from the hidden mailing lists of the 90s to the cultural dominance of Tumblr and AO3 (Archive of Our Own). It explores how 'Shipping' (SuperWhoLock), Fanfiction (*Fifty Shades*), and Cosplay moved from the margins to the mainstream. It analyzes the 'Transformative Work'—where the audience rewrites the text to fix its politics or queer its characters—and the growing tension between the 'Creator' (God) and the 'Fandom' (The Church).",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "*The X-Files* and *Buffy* mailing lists are active (+0.4%). The term 'Shipper' ( Mulder/Scully) is established. Fanfiction.net launches (1998/99). It is the wild west. *Galaxy Quest* releases, a loving satire of Trek fandom that validates the emotional investment of the fan. It says: 'It's real because it matters to you.'",
          "key_manifestations": [
            "Galaxy Quest (Film)",
            "Fanfiction.net (Growth)",
            "Star Wars: Phantom Menace (The first major toxic fan backlash)",
            "Buffy the Vampire Slayer (The bronze boards)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "*Harry Potter* fandom explodes online (+0.5%). Mugglenet launches. The 'Shipping Wars' (Harry/Hermione vs Ron/Hermione) begin to form. *X-Men* releases, validating the 'Comics Fan' as a target demographic for blockbusters. The concept of 'Canon' becomes a battleground.",
          "key_manifestations": [
            "Mugglenet (Fan Site)",
            "Harry Potter Goblet of Fire (Shipping fuel)",
            "X-Men (The adaptation debate)",
            "Gilmore Girls (Pop culture reference density)"
          ]
        },
        "2001": {
          "salience_share": 2.2,
          "description": "*Lord of the Rings* brings 'Slash' fiction (Frodo/Sam) to the masses (+0.4%). LiveJournal becomes the hub for transformative works. It allows for 'locked' communities, fostering intense, queer-normative subcultures. *Spirited Away* introduces Anime fandom (Cluster 49) to the prestige conversation.",
          "key_manifestations": [
            "LiveJournal (Fandom migration)",
            "Lord of the Rings (Slash potential)",
            "Harry Potter (The films fix the images)",
            "Comic-Con (Still niche but growing)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "*Firefly* airs and is cancelled (+0.4%). The 'Browncoats' form the first modern 'Save Our Show' campaign. They prove that a small, intense fandom can keep a property alive (leading to *Serenity*). *Naruto* begins, creating a massive 'Cosplay' wave (headbands) in US schools.",
          "key_manifestations": [
            "Firefly (The cult forming)",
            "Naruto (The cosplay wave)",
            "Star Wars Kid (The dark side of fan passion)",
            "Buffy Musical (Fan service)"
          ]
        },
        "2003": {
          "salience_share": 2.8,
          "description": "The 'Ms. Scribe' saga on Harry Potter forums (complex sockpuppet drama) shows the sociological intensity of online fandom (+0.3%). It is *Game of Thrones* but about fanfiction moderators. *Pirates of the Caribbean* creates a massive 'Jack Sparrow' fandom that blurs the line between character and rock star.",
          "key_manifestations": [
            "Ms. Scribe Saga (Harry Potter Fandom History)",
            "Pirates of the Caribbean (Jack Sparrow cosplay)",
            "Return of the King (The emotional climax)",
            "Kill Bill (Fanboy cinema)"
          ]
        },
        "2004": {
          "salience_share": 3.1,
          "description": "*Lost* premieres (+0.6%). It creates the 'Theory' fandom. Focusing on clues, easter eggs, and frames. The wiki becomes as important as the show. 'Cassandra Clare' (future YA author) writes 'The Draco Trilogy' fanfic, proving the pipeline from Fanfic to Pro starts here.",
          "key_manifestations": [
            "Lost (Theories)",
            "The Draco Trilogy (Fanfic)",
            "Veronica Mars (The cult followings)",
            "Mean Girls (Quote culture)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "*Supernatural* premieres (+0.8%). The Winchester Brothers. This show becomes the engine of Tumblr fandom for the next 15 years. It encourages 'Wincest' (Taboo) and 'Destiel' (Queer) shipping. *Twilight* is published, creating a fandom based on 'Teams' (Edward vs Jacob).",
          "key_manifestations": [
            "Supernatural (Premiere)",
            "Twilight (Book)",
            "Doctor Who (Revival - The Whovians return)",
            "Harry Potter and the Half-Blood Prince (The shipping wars end/escalate)"
          ]
        },
        "2006": {
          "salience_share": 3.8,
          "description": "YouTube allows for 'Fan Vids' (AMVs, Shipping montages) to be hosted easily (+0.4%). The 'fan edit' becomes a way to fix the text. *Snakes on a Plane* tries to engineer fandom and fails, proving it must be organic. *Heroes* tries to replicate the *Lost* formula.",
          "key_manifestations": [
            "YouTube Fan Vids",
            "Snakes on a Plane (Failed engineering)",
            "Heroes (Save the Cheerleader)",
            "Death Note (The edgy fandom)"
          ]
        },
        "2007": {
          "salience_share": 4.5,
          "description": "Harry Potter ends (Book 7) (+0.6%). The 'Post-Canon' era begins. Fans refuse to let it go. 'Wizard Rock' (Harry and the Potters) becomes a genre. Tumblr launches (Cluster 33), providing the perfect UI (reblogging images/gifs) for fandom consumption. The 'GIF set' is born.",
          "key_manifestations": [
            "Harry Potter Finale",
            "Tumblr (Launch)",
            "Wizard Rock (Genre)",
            "Transformers (Michael Bay vs. The Childhood)"
          ]
        },
        "2008": {
          "salience_share": 5.5,
          "description": "*Twilight* film releases (+1.0%). Comic-Con is invaded by teenage girls. The 'Nerd' gatekeepers are angry. It highlights the gender divide in fandom: 'Curative' (Facts/Lore - Male) vs 'Transformative' (Shipping/Emotion - Female). AO3 (Archive of Our Own) enters open beta, created by fans to protect their work from purges.",
          "key_manifestations": [
            "Twilight (The screams)",
            "AO3 (Open Beta)",
            "Iron Man (The start of the MCU fandom)",
            "Dr. Horrible (Internet native fandom)"
          ]
        },
        "2009": {
          "salience_share": 6.2,
          "description": "*Glee* premieres (+0.7%). It encourages 'Shipping' as a primary way of watching. 'Klaine' and 'Brittana'. The showrunners actively bait the shippers. *Star Trek* (2009) reboots the original Kirk/Spock dynamic, revitalizing the oldest slash fandom in history for a new generation.",
          "key_manifestations": [
            "Glee (Shipping as marketing)",
            "Star Trek 2009 (Kirk/Spock revival)",
            "Community (The meta-fandom show)",
            "Avatar (The Papyrus font backlash)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "*Sherlock* (BBC) premieres (+1.2%). 'SuperWhoLock' (Supernatural, Doctor Who, Sherlock) becomes the holy trinity of Tumblr. The fandom is massive, intense, and creative. They read queer subtext into everything. 'Homestuck' peaks—a webcomic with a fandom so complex it is impenetrable to outsiders.",
          "key_manifestations": [
            "Sherlock (BBC)",
            "SuperWhoLock (The Tumblr Trinity)",
            "Homestuck (Peak complexity)",
            "Scott Pilgrim (Fandom as lifestyle)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "*Fifty Shades of Grey* (originally *Master of the Universe* - Twilight Fanfic) is published (+0.8%). It proves Fanfiction can be monetized. It breaks the 'Fourth Wall' of fandom. *My Little Pony: Friendship is Magic* creates the 'Brony' phenomenon—adult men earnestly loving a girls' show. It challenges gender norms and irony.",
          "key_manifestations": [
            "Fifty Shades of Grey (Publication)",
            "Brony Culture",
            "Game of Thrones (Fantasy goes mainstream)",
            "Teen Wolf (Sterek shipping dominates)"
          ]
        },
        "2012": {
          "salience_share": 8.2,
          "description": "*The Avengers* releases (+0.9%). The 'Coulson Lives' campaign proves fans want to save characters. 'Fanart' becomes a major way people interact with the film. The 'Hawkeye Initiative' (drawing male heroes in female poses) uses fanart to critique sexism.",
          "key_manifestations": [
            "The Avengers (Fandom explosion)",
            "The Hawkeye Initiative (Political fanart)",
            "The Hunger Games (The YA adaptation wave)",
            "Adventure Time (Fiona and Cake - Gender swap)"
          ]
        },
        "2013": {
          "salience_share": 8.5,
          "description": "The 'One Direction' fandom reaches fever pitch (+0.6%). 'Larry Stylinson' (Harry/Louis conspiracy) shows the dark side—fans believing real people are in a secret relationship and harassment of partners. 'Real Person Fiction' (RPF) becomes controversial. *Attack on Titan* brings Anime fandom back to the forefront.",
          "key_manifestations": [
            "One Direction / Larry Stylinson",
            "Attack on Titan (Cosplay dominance)",
            "Frozen (Elsa as queer icon theory)",
            "Hannibal (The showrunner embraces the slash)"
          ]
        },
        "2014": {
          "salience_share": 8.9,
          "description": "DashCon (+0.5%). The 'Tumblr Convention' ends in disaster (The Ball Pit). It shows that online community does not always translate to real-world logistics. *Gamergate* (Cluster 7) shows the toxic mobilization of 'Identity Fandom.' *Guardians of the Galaxy* proves Marvel fans will follow the brand anywhere.",
          "key_manifestations": [
            "DashCon (The Ball Pit)",
            "Gamergate (Toxic fandom)",
            "Serial (True crime fandom)",
            "Guardians of the Galaxy (Groot)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "*Hamilton* (+0.8%). The 'Fandom' of the Founding Fathers. It uses the language of fanfic (AU, race-bending) to tell history. It unites theater kids and history nerds. *Star Wars: The Force Awakens* launches 'Reylo' (Rey/Kylo Ren)—the new 'enemies to lovers' ship that will tear the internet apart.",
          "key_manifestations": [
            "Hamilton (Fandom)",
            "Star Wars: The Force Awakens (Reylo)",
            "Steven Universe (The hiatus culture)",
            "Undertale (The pacifist run)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "*Yuri on Ice* releases (+0.7%). It makes the queer text canon. *Harry Potter and the Cursed Child* releases—fans reject it. 'Death of the Author.' Fans decide what is canon, not J.K. Rowling. The 'Voltron' reboot fandom becomes notoriously toxic over shipping. Fandom is now a high-stakes political battlefield.",
          "key_manifestations": [
            "Yuri on Ice (Canon queer romance)",
            "Harry Potter and the Cursed Child (Rejection)",
            "Voltron: Legendary Defender (Shipping toxicity)",
            "Ghostbusters 2016 (The culture war)"
          ]
        }
      }
    },
    "57_the_post_racial_myth_and_the_return_of_identity": {
      "name": "The Post-Racial Myth and the Return of Identity",
      "description": "This cluster maps the rise and fall of 'Colorblindness' as the dominant American racial ideology. It begins with the late-90s 'Benetton Ad' multiculturalism (we are all the same), peaks with the election of Obama (the 'Post-Racial' moment), and violently collapses in the 2010s with the rise of Black Lives Matter and the Alt-Right. It tracks how pop culture moved from erasing difference (to appeal to the center) to centering specific, lived racial trauma and joy (to challenge the center).",
      "trajectory": {
        "1999": {
          "salience_share": 3.1,
          "description": "The 'Multicultural' ideal dominates. *The Matrix* features a diverse cast, but race is not the text. *Star Wars: Episode I* is criticized for racial caricatures (Jar Jar, Watto), but the backlash is niche. The cultural goal is 'assimilation.' Hip-Hop is crossing over to the suburbs (Cluster 24), creating a false sense of unity.",
          "key_manifestations": [
            "The Matrix (Multicultural casting)",
            "Star Wars: Episode I (Caricature controversy)",
            "Ricky Martin 'Livin' La Vida Loca' (Latin explosion)",
            "The Wood (Black coming-of-age without trauma focus)"
          ]
        },
        "2000": {
          "salience_share": 3.5,
          "description": "*Remember the Titans* releases (+0.6%). It is the definitive 'Post-Racial' sports movie. Racism is a hurdle to be overcome by teamwork and a good soundtrack. It comforts white audiences. *Crouching Tiger, Hidden Dragon* proves subtitles aren't a barrier to blockbusters.",
          "key_manifestations": [
            "Remember the Titans (Film)",
            "Crouching Tiger, Hidden Dragon (Global cinema)",
            "Barbershop (Community dialogue)",
            "X-Men (Mutant as race allegory)"
          ]
        },
        "2001": {
          "salience_share": 3.8,
          "description": "Halle Berry and Denzel Washington win Oscars (+0.8%). It feels like a 'Mission Accomplished' moment for Hollywood diversity. *Training Day* complicates this by having Denzel play the villain, subverting the 'Saintly Negro' trope. 9/11 shifts 'Othering' heavily onto Arab-Americans.",
          "key_manifestations": [
            "Halle Berry/Denzel Washington Oscars",
            "Training Day (Film)",
            "Ali (Biopic of radicalism softened)",
            "Rush Hour 2 (Cross-cultural buddy comedy)"
          ]
        },
        "2002": {
          "salience_share": 4.1,
          "description": "*My Big Fat Greek Wedding* becomes a smash hit (+0.5%). It frames ethnicity as a quirky flavor of whiteness—safe, loud, and family-oriented. *8 Mile* frames Eminem as the underdog in a Black world, reversing the racial power dynamic for a mass audience.",
          "key_manifestations": [
            "My Big Fat Greek Wedding (Film)",
            "8 Mile (Film)",
            "Antwone Fisher (Therapeutic narrative)",
            "Bend It Like Beckham (Intersectionality lite)"
          ]
        },
        "2003": {
          "salience_share": 4.5,
          "description": "*Chappelle's Show* premieres (+1.2%). It deconstructs the 'Post-Racial' myth with surgical precision. 'Clayton Bigsby' (Black White Supremacist) exposes the absurdity of colorblindness. It is dangerous, hilarious, and makes the comfortable uncomfortable.",
          "key_manifestations": [
            "Chappelle's Show (TV Series Premiere)",
            "Bad Boys II (The blockbuster black action stars)",
            "Bringing Down the House (Queen Latifah/Steve Martin culture clash)",
            "Lost in Translation (Orientalist backdrop)"
          ]
        },
        "2004": {
          "salience_share": 5.2,
          "description": "*Crash* releases (wins Oscar later) (+1.5%). It is the peak of the cluster's first phase. It argues that everyone is a little bit racist and if we just hugged, it would stop. It is the liberal fantasy of individual prejudice rather than systemic oppression. *Ray* celebrates black genius.",
          "key_manifestations": [
            "Crash (Film)",
            "Ray (Film)",
            "Harold & Kumar (Subverting stereotypes)",
            "Collateral (Tom Cruise/Jamie Foxx)"
          ]
        },
        "2005": {
          "salience_share": 5.5,
          "description": "Kanye West says 'George Bush doesn't care about black people' (+1.0%). It ruptures the simulation. It re-politicizes race in the mainstream. *Hustle & Flow* brings the dirty south reality to the Oscars ('It's Hard Out Here for a Pimp' wins).",
          "key_manifestations": [
            "Kanye West Katrina Telethon",
            "Hustle & Flow (Film)",
            "Guess Who (Race swap comedy)",
            "Brokeback Mountain (Intersectionality ignored)"
          ]
        },
        "2006": {
          "salience_share": 5.8,
          "description": "*Borat* exposes the anti-semitism and racism of the 'polite' American heartland (+0.7%). Dave Chappelle walks away from $50M because he fears the audience is laughing *at* him, not *with* him. He realizes the satire isn't working on the 'Post-Racial' crowd.",
          "key_manifestations": [
            "Borat (Film)",
            "Chappelle's Exit",
            "Dreamgirls (Motown mythologizing)",
            "Pursuit of Happyness (The good immigrant/worker)"
          ]
        },
        "2007": {
          "salience_share": 6.2,
          "description": "Obama announces his candidacy (+0.9%). The 'Obama Hope' era begins. The rhetoric is unity. *Hairspray* (Musical Movie) sets the Civil Rights movement to catchy tunes, reinforcing the 'Inevitability of Progress' narrative. *Gone Baby Gone* explores the racial divides of Boston.",
          "key_manifestations": [
            "Obama Campaign Launch",
            "Hairspray (Film)",
            "American Gangster (Black capitalism)",
            "I Am Legend (Will Smith as the last man)"
          ]
        },
        "2008": {
          "salience_share": 8.5,
          "description": "Obama is elected (+2.5%). 'Racism is over' is the unspoken feeling in white suburbia. The 'Post-Racial' myth hits its zenith. *Gran Torino* features Clint Eastwood growling racial slurs but learning to love his Hmong neighbors—the ultimate boomer redemption fantasy.",
          "key_manifestations": [
            "Obama Election Night",
            "Gran Torino (Film)",
            "Tropic Thunder (Robert Downey Jr. in Blackface satire)",
            "Milk (Civil Rights parallel)"
          ]
        },
        "2009": {
          "salience_share": 8.1,
          "description": "*The Princess and the Frog* introduces the first Black Disney princess (+0.6%). It is celebrated but criticized for spending most of the movie as a frog. *The Blind Side* becomes a massive hit, celebrating a white family saving a black youth. It is the last gasp of the uncritical 'White Savior' trope.",
          "key_manifestations": [
            "The Blind Side (Film)",
            "The Princess and the Frog (Film)",
            "Precious (Trauma porn debate)",
            "Avatar (The white savior in blue)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "The backlash begins. The 'Tea Party' emerges with racially coded language (-0.8% harmony). *The Social Network* excludes the Asian co-founder from the main narrative. *Luther* (UK) presents a black lead where race is incidental, a different model of representation.",
          "key_manifestations": [
            "Tea Party Protests",
            "The Social Network (Erasure of Eduardo/Divya)",
            "Luther (TV Series)",
            "For Colored Girls (Tyler Perry adaptation)"
          ]
        },
        "2011": {
          "salience_share": 7.2,
          "description": "*The Help* releases (+0.7%). It is *Crash* for the 1960s. It centers the white narrator. It is popular but faces intense criticism from Black critics for softening the reality of segregation. Donald Glover (Childish Gambino) begins to deconstruct the 'Black Nerd' identity.",
          "key_manifestations": [
            "The Help (Film)",
            "Camp (Childish Gambino Album)",
            "Pariah (Queer Black cinema)",
            "Attack the Block (Black British sci-fi)"
          ]
        },
        "2012": {
          "salience_share": 6.8,
          "description": "Trayvon Martin is killed (-1.5% myth). Obama says 'If I had a son, he'd look like Trayvon.' The illusion of the Post-Racial society shatters. *Django Unchained* offers a revenge fantasy—killing the slave master. It is cathartic but controversial. The Hoodie becomes a symbol.",
          "key_manifestations": [
            "Trayvon Martin / The Hoodie",
            "Django Unchained (Film)",
            "Lincoln (The white emancipator focus)",
            "Beasts of the Southern Wild (Magical realism)"
          ]
        },
        "2013": {
          "salience_share": 6.5,
          "description": "*12 Years a Slave* releases (+0.8%). It refuses to look away from the brutality. It destroys the *Gone with the Wind* nostalgia. It wins Best Picture. *Fruitvale Station* dramatizes the Oscar Grant shooting, grounding police violence in human reality.",
          "key_manifestations": [
            "12 Years a Slave (Film)",
            "Fruitvale Station (Film)",
            "Orange Is the New Black (Diverse casting)",
            "Scandal (Kerry Washington lead)"
          ]
        },
        "2014": {
          "salience_share": 6.1,
          "description": "Ferguson (+1.2% Identity Politics). Black Lives Matter moves from hashtag to movement. *Selma* releases, showing MLK as a radical strategist, not a passive dreamer. The Academy snubbing *Selma* leads to #OscarsSoWhite (early stages). The 'Colorblind' era is officially dead.",
          "key_manifestations": [
            "Ferguson Protests",
            "Selma (Film)",
            "Dear White People (Film)",
            "Black-ish (TV Series Premiere - Discussing race explicitly)"
          ]
        },
        "2015": {
          "salience_share": 5.8,
          "description": "*Hamilton* casts the Founding Fathers as Black and Latino (+1.5%). It reclaims the 'American Story' for the marginalized. It is the cultural peak of the Obama era's ideals, even as the political reality crumbles. *Straight Outta Compton* reminds the public of the origin of 'Fuck tha Police.'",
          "key_manifestations": [
            "Hamilton (Broadway)",
            "Straight Outta Compton (Film)",
            "To Pimp a Butterfly (Kendrick Lamar - The anthem)",
            "Master of None (Representation politics)"
          ]
        },
        "2016": {
          "salience_share": 5.2,
          "description": "The Election of Trump (+2.0% White Identity Politics). The Alt-Right emerges. *Moonlight* wins Best Picture, telling a story of Black, queer intimacy with zero white gaze. *Lemonade* is a radical assertion of Black womanhood. The culture has bifurcated: Radical inclusivity vs. Radical exclusion.",
          "key_manifestations": [
            "Moonlight (Film)",
            "Lemonade (Visual Album)",
            "Luke Cage (Bulletproof Black man)",
            "Birth of a Nation (The failed cinematic revolt)"
          ]
        }
      }
    },
    "58_the_disruptor_mythos_and_the_cult_of_the_founder": {
      "name": "The Disruptor Mythos and the Cult of the Founder",
      "description": "This cluster tracks the deification of the Tech CEO. It moves from the 90s view of the 'Nerd' as an outsider to the 2010s view of the 'Founder' as a god-king. It analyzes how 'Disruption' became a religious tenet, justifying the destruction of industries (taxis, hotels, journalism) in the name of efficiency. It maps the aesthetic evolution from the garage startup to the sleek 'Apple' minimalism, and the eventual skepticism that arose with Theranos and the realization that 'changing the world' often just meant selling ads.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "*Pirates of Silicon Valley* airs (+0.4%). It frames Jobs and Gates as brilliant but ruthless pirates. The 'Nerd' is still socially awkward. The Dot-com boom is in full swing, but the 'Founder' is not yet a sex symbol; they are a business curiosity.",
          "key_manifestations": [
            "Pirates of Silicon Valley (TV Movie)",
            "Office Space (The misery of the tech worker)",
            "The Matrix (The hacker as savior)",
            "Amazon's Person of the Year (Jeff Bezos)"
          ]
        },
        "2000": {
          "salience_share": 1.2,
          "description": "The Dot-com Bubble bursts (-0.5%). The 'Paper Millionaire' becomes a punchline. The 'Sock Puppet' (Pets.com) is the symbol of hubris. Technology is viewed with skepticism. The focus shifts back to 'bricks and mortar' stability.",
          "key_manifestations": [
            "Pets.com Sock Puppet (Failure symbol)",
            "Anti-Trust (Film - Bill Gates as villain)",
            "Boiler Room (The emptiness of the hustle)",
            "Survivor (The analog game)"
          ]
        },
        "2001": {
          "salience_share": 1.8,
          "description": "The iPod launches (+0.8%). Steve Jobs begins his ascent to divinity. It is not just a gadget; it is a lifestyle. The 'Keynote Speech' becomes a performance art. The 'Reality Distortion Field' is accepted because the products work.",
          "key_manifestations": [
            "iPod Launch Keynote",
            "Shrek (Dreamworks disrupting Disney)",
            "Wikipedia (Disrupting Britannica)",
            "Segway (The failed disruption hype)"
          ]
        },
        "2002": {
          "salience_share": 2.1,
          "description": "*Minority Report* showcases a gesture-based interface (+0.3%). It sets the design language for the future. Tech is cool, sleek, and inevitable. Google is rising, but its founders (Page/Brin) remain in the background, promoting 'Don't Be Evil.'",
          "key_manifestations": [
            "Minority Report (UI Design)",
            "Google News (Launch)",
            "Spider-Man (The nerd gets the power)",
            "Napster (The disruptive force crushed)"
          ]
        },
        "2003": {
          "salience_share": 2.5,
          "description": "Skype and MySpace launch (+0.4%). The 'Garage Startup' myth returns. The barrier to entry drops. *School of Rock* preaches 'Stick it to the Man,' but the new Man is becoming the cool guy in the hoodie.",
          "key_manifestations": [
            "Skype (Launch)",
            "MySpace (Social disruption)",
            "The Animatrix (The machine revolt)",
            "Paycheck (Tech thriller)"
          ]
        },
        "2004": {
          "salience_share": 2.9,
          "description": "Google IPO (+0.6%). 'Do No Evil' is codified. The founders are billionaires. They are treated as benevolent philosopher-kings. *The Incredibles* features Syndrome, a tech-villain who wants to democratize superpowers (disruption) but is rejected by the 'natural' heroes.",
          "key_manifestations": [
            "Google IPO",
            "The Incredibles (Syndrome)",
            "I, Robot (The CEO is the villain)",
            "The Aviator (Hughes as the proto-Musk)"
          ]
        },
        "2005": {
          "salience_share": 3.5,
          "description": "Paul Graham starts Y Combinator (+0.5%). The 'Startup Accelerator' model industrializes the creation of Founders. The 'Pitch Deck' becomes a literary genre. *Batman Begins* features Lucius Fox, the tech genius who enables the hero. Tech is the superpower.",
          "key_manifestations": [
            "Y Combinator (Founding)",
            "YouTube (The rapid exit)",
            "Batman Begins (Wayne Enterprises)",
            "Hitchhikers Guide to the Galaxy (Tech satire)"
          ]
        },
        "2006": {
          "salience_share": 4.1,
          "description": "Twitter launches (+0.4%). The 'Fail Whale' becomes a symbol of growing pains. We forgive the tech incompetence because the platform is 'changing the world.' *Click* warns about the desire to 'fast forward' life through tech.",
          "key_manifestations": [
            "Twitter (Launch)",
            "Click (Film)",
            "The Prestige (Tesla as wizard)",
            "Time Person of the Year: You (Web 2.0)"
          ]
        },
        "2007": {
          "salience_share": 5.5,
          "description": "The iPhone Keynote (+1.5%). The peak of the Steve Jobs Cult. He is a messiah holding a stone tablet. It changes the behavior of the human species. The 'Black Turtleneck' becomes the uniform of the genius. 'Disruption' is now the highest moral good.",
          "key_manifestations": [
            "iPhone Keynote",
            "Transformers (The AllSpark)",
            "Mad Men (The old business model vs new)",
            "There Will Be Blood (The ruthlessness of the founder)"
          ]
        },
        "2008": {
          "salience_share": 6.2,
          "description": "*Iron Man* releases (+1.0%). Tony Stark is Elon Musk (literally, Musk is a reference). The superhero is a weapons manufacturer/tech CEO. He privatizes world security. We trust the billionaire genius more than the government. The 'Tech Bro' is now the 'Cool Guy.'",
          "key_manifestations": [
            "Iron Man (Tony Stark)",
            "Elon Musk (SpaceX/Tesla rise)",
            "Wall-E (Buy n Large as the endgame)",
            "App Store (The gold rush)"
          ]
        },
        "2009": {
          "salience_share": 6.5,
          "description": "Uber launches (+0.7%). 'Regulatory Hacking.' It breaks the law to improve the user experience. It creates the 'Gig Economy' (Cluster 8). We accept the destruction of labor rights because the app is magic. *Avatar* shows the evil of the corporation, but uses revolutionary tech to do it.",
          "key_manifestations": [
            "Uber (Launch)",
            "Avatar (Tech vs Nature)",
            "Up in the Air (Tech firing)",
            "Sherlock (The genius asshole)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "*The Social Network* releases (+1.2%). It defines the era. 'You don't get to 500 million friends without making a few enemies.' It portrays Zuckerberg as a brilliant sociopath. It doesn't condemn him; it mythologizes him. The 'Hoodie' becomes the symbol of power.",
          "key_manifestations": [
            "The Social Network (Film)",
            "Steve Jobs' 'Thoughts on Flash' (The decree)",
            "Inception (The architect)",
            "Tron: Legacy (The digital frontier)"
          ]
        },
        "2011": {
          "salience_share": 8.2,
          "description": "Steve Jobs dies (+1.0%). The global mourning is akin to a religious figure. His biography becomes a bestseller. The 'Cult of Mac' is canonized. *Black Mirror* 'The National Anthem' warns that the internet mob controls the powerful. The 'Arab Spring' is dubbed the 'Twitter Revolution.'",
          "key_manifestations": [
            "Steve Jobs Death",
            "Black Mirror (Premiere)",
            "Rise of the Planet of the Apes (Lab tech gone wrong)",
            "Source Code (Tech solving crime)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "Elon Musk launches the Model S (+0.6%). He becomes the new Steve Jobs. He promises to save the world (Cluster 35) through capitalism. Instagram is bought by Facebook for $1B. The 'Exit' is the goal. *The Avengers* features Stark Tower as the center of New York.",
          "key_manifestations": [
            "Tesla Model S",
            "Facebook buys Instagram",
            "The Avengers (Stark Tower)",
            "Prometheus (Weyland Corp)"
          ]
        },
        "2013": {
          "salience_share": 8.8,
          "description": "*Her* depicts the 'Benevolent Tech' future (+0.4%). The design is soft, wood-grain, and voice-based. It makes the singularity look comfortable. *The Internship* (Google propaganda movie) tries to frame working at a search engine as a wacky adventure, but feels dated.",
          "key_manifestations": [
            "Her (Film)",
            "The Internship (Film)",
            "Grand Theft Auto V (Lifeinvader satire)",
            "House of Cards (Netflix disruption)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "*Silicon Valley* (TV Series) premieres (+0.8%). It satirizes the 'Making the World a Better Place' rhetoric. It exposes the absurdity of the culture (The Pied Piper compression algorithm). 'Theranos' is at peak valuation ($9B). Elizabeth Holmes is on every magazine cover. The 'Fake it til you make it' ethos peaks.",
          "key_manifestations": [
            "Silicon Valley (TV Series Premiere)",
            "Theranos (Peak Hype)",
            "Ex Machina (The Bluebeard CEO)",
            "Captain America: Winter Soldier (Algorithms determining fate)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "The Theranos story unravels (WSJ John Carreyrou) (-1.5% trust). The 'Disruptor' is revealed to be a fraud. It casts doubt on the entire unicorn ecosystem. *Steve Jobs* (Sorkin/Boyle film) deconstructs the myth, showing him as a bad father and a showman. The bloom is off the rose.",
          "key_manifestations": [
            "Theranos Scandal",
            "Steve Jobs (Film)",
            "Jurassic World (Tech hubris)",
            "Mr. Robot (The hacker destroying the system)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "Peter Thiel bankrupts Gawker (+0.7%). The Tech Titan exerts raw power over the media. It is revenge. It proves the Disruptors are not 'Underdogs'; they are the new Oligarchs. Trump's use of Twitter shows that 'Disruption' works in politics too, with chaotic results. The 'Utopian' phase of tech is over.",
          "key_manifestations": [
            "Thiel vs. Gawker",
            "Westworld (The tech god complex)",
            "Snowden (Film)",
            "Black Mirror 'Nosedive'"
          ]
        }
      }
    },
    "59_cringe_comedy_and_the_aesthetics_of_awkwardness": {
      "name": "Cringe Comedy and the Aesthetics of Awkwardness",
      "description": "This cluster maps the shift in humor from the 'Setup-Punchline' structure of the 90s to the 'Silence-Reaction' structure of the 2000s. It tracks the rise of the Mockumentary (*The Office*), the uncomfortable silence (*Curb Your Enthusiasm*), and the celebration of the 'Awkward' identity (*Napoleon Dynamite*). It analyzes how 'Cringe' became a sophisticated emotion—a way to process the breakdown of social norms and the performance of the self in a mediated world.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "*Freaks and Geeks* airs (+0.5%). It treats high school awkwardness with painful realism, not broad jokes. It is cancelled, but the DNA survives. *Office Space* captures the 'Quiet Desperation' of the cubicle. The laugh track is still dominant (*Friends*, *Frasier*), but the silence is creeping in.",
          "key_manifestations": [
            "Freaks and Geeks (TV Series)",
            "Office Space (Film)",
            "Election (The uncomfortable ambition)",
            "Curb Your Enthusiasm (Special/Pilot)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "*Curb Your Enthusiasm* premieres (+0.6%). Larry David weaponizes the social faux pas. The humor comes from the violation of unwritten rules. *Best in Show* (Mockumentary) uses improvisation to create characters who are unaware of their own absurdity. The camera stares at them.",
          "key_manifestations": [
            "Curb Your Enthusiasm (Series Premiere)",
            "Best in Show (Film)",
            "Malcolm in the Middle (No laugh track)",
            "Meet the Parents (The lie detector scene)"
          ]
        },
        "2001": {
          "salience_share": 2.5,
          "description": "*The Office* (UK) premieres (+1.2%). The Singularity of Cringe. David Brent is the monster of lack of self-awareness. The glances at the camera. The silence. It changes the grammar of television comedy forever. *Ghost World* celebrates the awkward outsider who refuses to perform social niceties.",
          "key_manifestations": [
            "The Office UK (Premiere)",
            "Ghost World (Film)",
            "The Royal Tenenbaums (Deadpan delivery)",
            "Wet Hot American Summer (Anti-humor)"
          ]
        },
        "2002": {
          "salience_share": 2.8,
          "description": "*Jackass* (+0.4%). While physical, the humor often comes from the awkward interactions with the public. *Punch-Drunk Love* turns Adam Sandler's rage into a manifestation of extreme social anxiety. The 'Manic Pixie' (Cluster 42) is often the foil to the 'Awkward Male.'",
          "key_manifestations": [
            "Punch-Drunk Love (Film)",
            "Jackass (Public pranks)",
            "About a Boy (The awkward kid)",
            "Adaptation (The sweating writer)"
          ]
        },
        "2003": {
          "salience_share": 3.2,
          "description": "*Arrested Development* premieres (+0.8%). It is dense, self-referential, and features characters (Gob, Buster) who exist in a perpetual state of humiliation. The documentary framing (Ron Howard's narration) allows for ironic distance. It is 'Smart Cringe.'",
          "key_manifestations": [
            "Arrested Development (Premiere)",
            "The Station Agent (Silence as connection)",
            "Bad Santa (The cringe of depravity)",
            "Elf (The cringe of sincerity)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*Napoleon Dynamite* releases (+1.5%). It is a phenomenon. It has no plot, just awkwardness. 'Gosh!' It celebrates the nerd without making him cool. *The Office* (US) pilots, initially trying to copy the UK bleakness, but finding it too harsh for American audiences.",
          "key_manifestations": [
            "Napoleon Dynamite (Film)",
            "The Office US (Pilot)",
            "Garden State (The awkward yell)",
            "I Heart Huckabees (Existential awkwardness)"
          ]
        },
        "2005": {
          "salience_share": 5.2,
          "description": "*The Office* (US) finds its voice (Season 2) (+1.0%). Michael Scott becomes a sympathetic villain. The 'Jim Face' (looking at the camera) becomes the universal symbol for 'Can you believe this?' *The Comeback* (Lisa Kudrow) explores the cringe of reality TV desperation, ahead of its time.",
          "key_manifestations": [
            "The Office US (Season 2)",
            "The Comeback (TV Series)",
            "The 40-Year-Old Virgin (Awkward masculinity)",
            "Flight of the Conchords (Radio show/early buzz)"
          ]
        },
        "2006": {
          "salience_share": 5.8,
          "description": "*Borat* releases (+1.2%). It takes Cringe into the real world. The humor comes from the polite Americans trying to accommodate the offensive foreigner. It is 'Ambush Cringe.' *30 Rock* launches, using 'awkward' as a character trait for Liz Lemon, but with a faster, screwball pace.",
          "key_manifestations": [
            "Borat (Film)",
            "30 Rock (Premiere)",
            "Little Miss Sunshine (The beauty pageant scene)",
            "The IT Crowd (British nerd cringe)"
          ]
        },
        "2007": {
          "salience_share": 6.2,
          "description": "*Superbad* captures the specific cringe of teenage desperation (+0.6%). Michael Cera is the avatar of the 'Awkward Indie Boy.' 'The Landlord' (Will Ferrell) on Funny or Die goes viral, proving that 'awkward confrontation' is the native language of the internet video.",
          "key_manifestations": [
            "Superbad (Michael Cera)",
            "Flight of the Conchords (TV Series Premiere)",
            "Lars and the Real Girl (Delusional cringe)",
            "Funny or Die (The Landlord)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*Step Brothers* (+0.5%). The job interview scene. 'Pan/Pam.' It pushes awkwardness into surrealism. *In Betweeners* (UK) brings the 'purity of embarrassment' to the teen sitcom. The 'Awkward Turtle' hand gesture spreads through schools.",
          "key_manifestations": [
            "Step Brothers (Film)",
            "The Inbetweeners (TV Series)",
            "Awkward Turtle (Meme)",
            "Twilight (The awkwardness of the acting itself)"
          ]
        },
        "2009": {
          "salience_share": 7.2,
          "description": "*Parks and Recreation* (Season 1) tries to out-cringe The Office (-0.3%). *Modern Family* uses the mockumentary format but softens the cringe into 'Heart.' *The Hangover* uses the 'Morning After' realization as a plot device—the cringe of memory returning.",
          "key_manifestations": [
            "Parks and Recreation (Premiere)",
            "The Hangover (Film)",
            "Party Down (Catering humiliation)",
            "I Love You, Man (Male bonding awkwardness)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "*Louie* premieres (+0.6%). It is 'Autofiction' comedy. It is uncomfortable, honest, and depressing. It removes the joke entirely. The 'Cringe Compilation' begins to appear on YouTube—supercuts of awkward moments. We are watching for the flinch.",
          "key_manifestations": [
            "Louie (TV Series Premiere)",
            "Scott Pilgrim (The battle of the exes)",
            "Girls (Pilot production)",
            "Tim and Eric (Surrealist cringe)"
          ]
        },
        "2011": {
          "salience_share": 7.8,
          "description": "*Portlandia* premieres (+0.5%). It satirizes the awkwardness of extreme politeness and hipster affectation. 'Is the chicken local?' *Black Mirror* 'The National Anthem' is the ultimate cringe horror—forcing the PM to have sex with a pig. The audience is complicit.",
          "key_manifestations": [
            "Portlandia (Premiere)",
            "Black Mirror 'The National Anthem'",
            "Bridesmaids (The speech scene)",
            "Workaholics (Bro cringe)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "*Girls* premieres (+1.0%). Hannah Horvath is the queen of lack of self-awareness. The sex scenes are deliberately un-erotic and awkward. It creates a discourse on 'Likability.' *Key & Peele* sketches often hinge on social code-switching failures.",
          "key_manifestations": [
            "Girls (TV Series)",
            "Key & Peele (Premiere)",
            "Veep (The cringe of incompetence)",
            "Pitch Perfect (The vomit scene)"
          ]
        },
        "2013": {
          "salience_share": 8.8,
          "description": "*Nathan For You* premieres (+0.8%). It takes the *Borat* model and applies it to small business consulting. Nathan Fielder creates moments of silence so excruciating they become art. It is 'Weaponized Awkwardness.' *Hello Ladies* explores the sadness of the pickup artist.",
          "key_manifestations": [
            "Nathan For You (Premiere)",
            "Hello Ladies (TV Series)",
            "Her (The phone sex scene)",
            "The Wolf of Wall Street (The cerebral palsy phase)"
          ]
        },
        "2014": {
          "salience_share": 9.2,
          "description": "*Broad City* premieres (+0.5%). It celebrates the 'Gross' female friendship. It is cringe, but joyous. The 'Awkward Family Photos' website is a cultural staple. *Silicon Valley* satirizes the social ineptitude of the tech elite.",
          "key_manifestations": [
            "Broad City (TV Series)",
            "Silicon Valley (TV Series)",
            "Review (TV Series - Destroying life for content)",
            "Birdman (The underwear walk)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "*The Eric Andre Show* gains cult status (+0.6%). It destroys the talk show format with chaos and physical discomfort. It is 'Nihilist Cringe.' The 'Minion' memes become 'Cringe' for the younger generation—boomer humor mocked by Gen Z.",
          "key_manifestations": [
            "The Eric Andre Show (Viral moments)",
            "Minion Memes (Irony)",
            "Unbreakable Kimmy Schmidt (PTSD comedy)",
            "The Big Short (The awkward genius)"
          ]
        },
        "2016": {
          "salience_share": 9.8,
          "description": "*Fleabag* premieres (+0.8%). It internalizes the cringe. The protagonist looks at the camera not to mock others (Jim Halpert), but to implicate the audience in her own bad behavior. 'Chewbacca Mom' goes viral—wholesome cringe. The Trump/Clinton debates are described as 'hard to watch'—political cringe.",
          "key_manifestations": [
            "Fleabag (Premiere)",
            "Chewbacca Mom",
            "Presidential Debates (The looming hover)",
            "Atlanta (The Justin Bieber episode)"
          ]
        }
      }
    },
    "60_the_festivalization_of_culture_and_the_experience_economy": {
      "name": "The Festivalization of Culture and the Experience Economy",
      "description": "This cluster maps the shift from consuming 'Goods' to consuming 'Moments.' It tracks the rise of the Mega-Festival (Coachella, Bonnaroo) as a rite of passage and a status symbol. It explores how 'Being There' (and proving it on social media) became more important than the music or the art. It encompasses the explosion of Comic-Con, the gentrification of Burning Man, and the rise of 'Instagram Museums' (The Museum of Ice Cream) where the environment exists solely to serve as a backdrop for the self.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "Woodstock '99 is a disaster (+0.5%). It represents the death of the 90s angst. Fire, riots, assault. It proves the old model of 'stick everyone in a field' is broken. *Coachella* holds its inaugural festival (October), losing money but setting a template for 'Curated Cool' over 'Mass Chaos.'",
          "key_manifestations": [
            "Woodstock '99 (The disaster)",
            "Coachella (Inaugural festival)",
            "Burning Man (Still underground/tech niche)",
            "Star Wars Celebration (Fan gathering)"
          ]
        },
        "2000": {
          "salience_share": 1.2,
          "description": "Variance dips as the industry recovers from Woodstock. The Rave scene is active but fragmented. The 'Experience Economy' (Pine & Gilmore book) is published, predicting the shift. *Almost Famous* romanticizes the 'Tour,' but the live experience is still about the band, not the crowd.",
          "key_manifestations": [
            "The Experience Economy (Book)",
            "Almost Famous (The concert scene)",
            "Love Parade (Global raving)",
            "Survivor (The location as character)"
          ]
        },
        "2001": {
          "salience_share": 1.5,
          "description": "Coachella returns (skipped 2000) (+0.3%). It reunites Jane's Addiction. It establishes itself as the anti-Woodstock. *Bonnaroo* launches (2002), focusing on Jam Bands. The 'Destination Festival' model is forming. Comic-Con is still for nerds buying back-issues.",
          "key_manifestations": [
            "Coachella (Return)",
            "Zoolander (The fashion show as spectacle)",
            "Lord of the Rings (The premiere event)",
            "Vans Warped Tour (The punk rite of passage)"
          ]
        },
        "2002": {
          "salience_share": 1.8,
          "description": "*Bonnaroo* launches (+0.4%). It proves you can get 70,000 people to camp in Tennessee if the vibe is right. *American Idol* turns the concert tour into a TV spinoff. The 'Pop Star' tour becomes a multimedia event (Britney's 'Dream Within a Dream' tour uses rain, flying stages).",
          "key_manifestations": [
            "Bonnaroo (Inaugural)",
            "Britney Spears Tour (Spectacle)",
            "Jackass (The live stunt)",
            "8 Mile (The rap battle as arena)"
          ]
        },
        "2003": {
          "salience_share": 2.2,
          "description": "Lollapalooza is cancelled (touring model fails). It signals the end of the 90s touring festival. It will reinvent itself as a destination (Chicago) in 2005. *Burning Man* begins to attract Silicon Valley elites (Google founders), shifting from 'Anarchist Zone' to 'Networking Event.'",
          "key_manifestations": [
            "Lollapalooza Cancellation",
            "Burning Man (Tech influx)",
            "School of Rock (Battle of the Bands)",
            "Return of the King (The midnight release line)"
          ]
        },
        "2004": {
          "salience_share": 2.5,
          "description": "Prince plays the Grammys with Beyoncé (+0.3%). The 'Award Show' becomes a concert festival in miniature. *Garden State* fetishizes the 'moment'—screaming into the abyss. Flash Mobs (Cluster 17) treat public space as a stage for temporary, coordinated experience.",
          "key_manifestations": [
            "Prince/Beyoncé Grammys",
            "Flash Mobs",
            "Mean Girls (The talent show)",
            "EuroTrip (The club scene)"
          ]
        },
        "2005": {
          "salience_share": 3.1,
          "description": "Lollapalooza settles in Grant Park, Chicago (+0.5%). The 'City Festival' model works. No camping, just commerce. *Tomorrowland* launches in Belgium, creating the 'Fairytale' EDM aesthetic. YouTube allows festival moments to go viral (or be recorded on flip phones).",
          "key_manifestations": [
            "Lollapalooza (Chicago relaunch)",
            "Tomorrowland (Inaugural)",
            "Live 8 (Global charity concert)",
            "Wedding Crashers (The wedding as party)"
          ]
        },
        "2006": {
          "salience_share": 3.8,
          "description": "Daft Punk at Coachella (Cluster 27) (+1.2%). The Pyramid. It changes live music forever. It proves that the *visuals* and the *crowd energy* are more important than seeing the musician play instruments. It launches the EDM festival boom. Comic-Con shows *Snakes on a Plane* footage; Hollywood realizes the Con is a marketing engine.",
          "key_manifestations": [
            "Daft Punk at Coachella",
            "Comic-Con (Hollywood invasion)",
            "Step Up (Dance battle)",
            "Borat (Real life interactions)"
          ]
        },
        "2007": {
          "salience_share": 4.2,
          "description": "The iPhone launches. Now you can record the concert (+0.6%). The 'Sea of Screens' replaces the lighter. 'Bloghouse' DJs tour rapidly. The 'Pop-Up Shop' begins to appear as a retail concept—limited time, high urgency.",
          "key_manifestations": [
            "iPhone (The recording device)",
            "Pop-Up Shops (Trend)",
            "Across the Universe (The psychedelic bus)",
            "Hairspray (The TV show dance)"
          ]
        },
        "2008": {
          "salience_share": 4.8,
          "description": "*Iron Man* footage at Comic-Con generates massive hype (+0.5%). Hall H is now the center of the nerd universe. People camp out for days. The line *is* the experience. *Twilight* fans scream. The 'Fandom' moves from online to physical space.",
          "key_manifestations": [
            "Comic-Con Hall H (The hype machine)",
            "Hard Summer (LA EDM rise)",
            "Step Brothers (The Catalina Wine Mixer)",
            "Nick and Norah (The secret show quest)"
          ]
        },
        "2009": {
          "salience_share": 5.2,
          "description": "Michael Jackson's 'This Is It' tour is cancelled due to death; the rehearsal footage becomes a movie (+0.4%). It monetizes the *intent* to perform. *Avatar* pushes 3D as an 'Event' you must leave the house for. The 'Secret Cinema' trend begins in the UK—immersive movie watching.",
          "key_manifestations": [
            "This Is It (Film)",
            "Avatar (3D Spectacle)",
            "Secret Cinema (Immersive)",
            "The Hangover (The party you can't remember)"
          ]
        },
        "2010": {
          "salience_share": 6.1,
          "description": "Instagram launches (+0.8%). The 'Festival Look' is born. Flower crowns, boho chic. If you don't post it, you weren't there. Coachella expands to three days. Electric Daisy Carnival moves to LA Coliseum (disaster ensues), forcing the move to Vegas.",
          "key_manifestations": [
            "Instagram (The curation tool)",
            "EDC LA (The overcrowding)",
            "Scott Pilgrim (The Battle of the Bands)",
            "Sleep No More (Immersive theater NYC)"
          ]
        },
        "2011": {
          "salience_share": 6.5,
          "description": "*Sleep No More* opens in NYC (+0.6%). Immersive theater. You wear a mask and wander a hotel. It breaks the barrier between audience and art. It sets the template for the 'Museum of Ice Cream.' Occupy Wall Street (Cluster 12) uses the 'Encampment' as a political festival.",
          "key_manifestations": [
            "Sleep No More (NYC Run)",
            "Occupy Wall Street (The protest camp)",
            "Skrillex Tours (The drop)",
            "Project X (The party myth)"
          ]
        },
        "2012": {
          "salience_share": 7.2,
          "description": "Tupac Hologram at Coachella (+0.9%). The 'Digital Resurrection.' It proves reality is optional. It is the peak viral moment of the festival era. *The Avengers* premiere is a global event. 'Color Run' (5Ks with paint) turns exercise into a photo op.",
          "key_manifestations": [
            "Tupac Hologram",
            "The Color Run (Trend)",
            "Magic Mike (Male revue as event)",
            "Pitch Perfect (A Cappella competition)"
          ]
        },
        "2013": {
          "salience_share": 7.8,
          "description": "The 'Rain Room' at MoMA (+0.6%). People wait 8 hours to take a photo in rain that doesn't touch them. Art is now a background for the selfie. *The Great Gatsby* depicts the ultimate party. Banksy's 'Better Out Than In' residency in NYC turns the city into a scavenger hunt.",
          "key_manifestations": [
            "The Rain Room (MoMA)",
            "Banksy NYC Residency",
            "The Great Gatsby (Party aesthetic)",
            "Spring Breakers (The dark festival)"
          ]
        },
        "2014": {
          "salience_share": 8.5,
          "description": "Coachella expands to two weekends (identical lineups) (+0.5%). It is a factory. The 'Basic Bitch' at the festival becomes a meme. 'Escape Rooms' explode as a business model—gamified social experience. *The Lego Movie* celebrates the 'Master Builder' (play).",
          "key_manifestations": [
            "Coachella Twin Weekends",
            "Escape Rooms (Trend)",
            "Twitch (Virtual spectating)",
            "Whiplash (The performance anxiety)"
          ]
        },
        "2015": {
          "salience_share": 9.2,
          "description": "Hamilton (Broadway) (+0.9%). Tickets are impossible to get. Being in the room is the ultimate status symbol. The 'Room' (where it happens) is the commodity. Dismaland (Banksy's theme park) satirizes the experience economy while *being* a massive attraction.",
          "key_manifestations": [
            "Hamilton Mania",
            "Dismaland",
            "Mad Max: Fury Road (Practical stunts spectacle)",
            "Star Wars: The Force Awakens (The premiere event)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "The Museum of Ice Cream opens (+1.2%). It is not a museum; it is a selfie factory. Pools of sprinkles. It is the end point of the trajectory. Culture exists to be photographed. *Pokemon Go* turns the entire world into a festival map. *La La Land* romanticizes the 'Dream,' but reality is now a backdrop.",
          "key_manifestations": [
            "Museum of Ice Cream",
            "Pokemon Go",
            "Kanye West 'Pablo' Pop-Ups",
            "Fyre Festival (Marketing begins - the scam of the era)"
          ]
        }
      }
    },
    "61_fast_fashion_acceleration_and_the_masstige_economy": {
      "name": "Fast Fashion Acceleration and the Masstige Economy",
      "description": "This cluster maps the democratization of 'Style' through the collapse of the fashion cycle. It moves from the biannual runway calendar to the weekly drops of Zara and H&M. It analyzes the 'Masstige' phenomenon—luxury designers (Missoni, Versace) collaborating with Target and H&M to create affordable, limited-edition frenzy. It explores the cultural shift where 'disposability' became a virtue, allowing the middle class to perform wealth through constant aesthetic reinvention, even as the environmental and labor costs became increasingly visible.",
      "trajectory": {
        "1999": {
          "salience_share": 1.5,
          "description": "Fashion is strictly hierarchical. You wear Gap or you wear Gucci. High fashion is inaccessible. 'Thrift' is the alternative (Cluster 11). H&M opens its first US store (2000), but the concept of 'Fast Fashion' is not yet dominant. The 'It Bag' (Fendi Baguette) is the ultimate status symbol, attainable only by the elite.",
          "key_manifestations": [
            "Fendi Baguette (Sex and the City status)",
            "The Gap (Khaki commercial dominance)",
            "Abercrombie & Fitch (Mall hegemony)",
            "10 Things I Hate About You (The prom dress anxiety)"
          ]
        },
        "2000": {
          "salience_share": 1.8,
          "description": "H&M opens on Fifth Avenue (+0.4%). It is a spectacle. Fashion editors are seen shopping there. It breaks the taboo of mixing high and low. 'Boho Chic' (Sienna Miller) begins to rise—a look that requires many accessories, fueling the demand for cheap jewelry and layers.",
          "key_manifestations": [
            "H&M US Launch",
            "Boho Chic (Trend beginnings)",
            "Coyote Ugly (The accessible 'trashy' look)",
            "Almost Famous (The 70s revival driving thrift sales)"
          ]
        },
        "2001": {
          "salience_share": 2.2,
          "description": "Target launches its first designer collaboration with Stephen Sprouse (+0.5%). It is an experiment. It sells out. It brands Target as 'Tar-zhay.' The idea that a big box store could sell 'Design' is revolutionary. *Zoolander* mocks the high fashion world, making it feel even more alien and ripe for disruption.",
          "key_manifestations": [
            "Target x Stephen Sprouse",
            "Zoolander (Derelicte campaign)",
            "Legally Blonde (The pink wardrobe as power)",
            "Josie and the Pussycats (Trends as mind control)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "Target x Isaac Mizrahi (+0.6%). This partnership lasts for years. It normalizes the concept. Mizrahi appears in the ads. Suburban moms can now buy 'Designer' clothes with their groceries. *Sweet Home Alabama* features a fashion designer navigating the red state/blue state divide via clothes.",
          "key_manifestations": [
            "Target x Isaac Mizrahi",
            "Sweet Home Alabama (Film)",
            "Juicy Couture Tracksuits (The beginning of luxury loungewear)",
            "Maid in Manhattan (The borrowed dress fantasy)"
          ]
        },
        "2003": {
          "salience_share": 3.1,
          "description": "Zara expands aggressively (+0.5%). Their supply chain (2 weeks from design to shelf) changes the industry speed limit. Trends from the runway appear in malls before the original designers can ship them. *The Simple Life* makes 'Von Dutch' trucker hats a $100 item, proving value is pure hype.",
          "key_manifestations": [
            "Zara Expansion",
            "Von Dutch Hats (Trend)",
            "Queer Eye (Teaching men to buy cheap but fit well)",
            "Uptown Girls (The crumbling of old money style)"
          ]
        },
        "2004": {
          "salience_share": 3.8,
          "description": "Karl Lagerfeld x H&M (+1.2%). The Singularity of Masstige. The head of Chanel designing for a discount store. It sells out in minutes. Riots occur. It proves that 'Exclusivity' can be simulated at scale. It changes the psychology of the consumer: you must buy *now*.",
          "key_manifestations": [
            "H&M x Karl Lagerfeld",
            "Mean Girls ('That is the ugliest effing skirt')",
            "Project Runway (Fashion as sport)",
            "13 Going on 30 (The fashion editor fantasy)"
          ]
        },
        "2005": {
          "salience_share": 4.2,
          "description": "The 'Boho' look peaks (Olsen Twins) (+0.4%). It requires 'dumpster chic' layering, which fast fashion replicates perfectly. 'Forever 21' expands, targeting teens with $5 tops. The disposable mindset ('wear it once') sets in. *The Devil Wears Prada* (production) highlights the 'Cerulean Sweater' trickle-down theory.",
          "key_manifestations": [
            "Forever 21 Expansion",
            "Olsen Twins Style",
            "The Devil Wears Prada (Filming/Book impact)",
            "Shopgirl (The retail worker reality)"
          ]
        },
        "2006": {
          "salience_share": 4.5,
          "description": "Target x Luella Bartley and Proenza Schouler (+0.5%). The 'Go International' program creates a cult following. eBay flipping of these items begins. *Marie Antoinette* creates a hunger for visual excess and luxury aesthetics, satisfied by cheap imitations.",
          "key_manifestations": [
            "Target Go International",
            "Marie Antoinette (Costume porn)",
            "Ugly Betty (The outsider in high fashion)",
            "High School Musical (The curated teen look)"
          ]
        },
        "2007": {
          "salience_share": 5.1,
          "description": "Kate Moss x Topshop (+0.7%). The Supermodel as Designer. It brings 'London Cool' to the masses. Topshop becomes a pilgrimage site. *Gossip Girl* premieres, turning the 'Headband' into a mandatory accessory. Fast fashion retailers copy Blair Waldorf's outfits weekly.",
          "key_manifestations": [
            "Kate Moss x Topshop",
            "Gossip Girl (Fashion impact)",
            "Confessions of a Shopaholic (Book popularity)",
            "Enchanted (The dress making)"
          ]
        },
        "2008": {
          "salience_share": 5.8,
          "description": "The Recession (+1.2% variance). 'Recessionista' becomes a term. Buying luxury is gauche; buying cheap is smart. Michelle Obama wears J.Crew gloves to the inauguration, signaling that 'Mass Market' is now 'First Lady Chic.' It validates the high-low mix as the American uniform.",
          "key_manifestations": [
            "Michelle Obama J.Crew Moment",
            "Recessionista Blog Trend",
            "Sex and the City Movie (The dichotomy of Label vs Love)",
            "Lipstick Jungle (TV Series)"
          ]
        },
        "2009": {
          "salience_share": 6.2,
          "description": "Forever 21 moves into massive department store spaces (former Mervyn's) (+0.6%). Fast Fashion literally physically replaces the old middle-class department store. 'Haul Videos' begin on YouTube—teens showing off $200 worth of cheap clothes. Consumption becomes content.",
          "key_manifestations": [
            "Forever 21 Megastores",
            "YouTube Haul Videos",
            "Confessions of a Shopaholic (Film)",
            "The September Issue (Vogue vs. the economy)"
          ]
        },
        "2010": {
          "salience_share": 6.8,
          "description": "Lanvin x H&M (+0.7%). It is the most high-fashion collab yet. Tulle dresses for $100. People camp out overnight. *The Social Network* popularizes the 'Hoodie' and 'Adidas Slides' as the uniform of power (Cluster 58), attacking the fashion industry from the flank.",
          "key_manifestations": [
            "Lanvin x H&M",
            "Lady Gaga (Fashion as performance art)",
            "The Social Network (Normcore origins)",
            "Pretty Little Liars (TV fashion impact)"
          ]
        },
        "2011": {
          "salience_share": 7.5,
          "description": "Missoni x Target (+1.5%). The 'Missoni Meltdown.' The website crashes. Stores are stripped bare in minutes. It creates a national news story. It is the peak of the Masstige hysteria. It proves the model works too well. *Crazy, Stupid, Love* features Ryan Gosling giving Steve Carell a makeover, emphasizing the 'Suit' as male armor.",
          "key_manifestations": [
            "Missoni x Target Crash",
            "Crazy, Stupid, Love (The makeover)",
            "Versace x H&M",
            "New Girl (Modcloth aesthetic)"
          ]
        },
        "2012": {
          "salience_share": 7.2,
          "description": "Variance holds. *The Hunger Games* creates a dichotomy: The Capitol (Extreme High Fashion) vs. District 12 (Workwear). It satirizes the very industry promoting it. 'Streetwear' (Supreme) begins to rise, offering a different model of scarcity (The Drop) that competes with Masstige.",
          "key_manifestations": [
            "The Hunger Games (Capitol Couture)",
            "Maison Martin Margiela x H&M",
            "Project Runway All Stars",
            "Skyfall (The bespoke suit returns)"
          ]
        },
        "2013": {
          "salience_share": 6.8,
          "description": "The Rana Plaza Collapse in Bangladesh (-0.8%). 1,100 workers die making fast fashion. The curtain is pulled back. 'The True Cost' (Documentary in production) begins to shift the conversation. *American Hustle* fetishizes 70s fashion, but the mood is shifting toward 'Ethical/Sustainable' (Everlane launches).",
          "key_manifestations": [
            "Rana Plaza Collapse (Event)",
            "Everlane (Radical Transparency)",
            "American Hustle (Costume dominance)",
            "The Great Gatsby (Brooks Brothers collab)"
          ]
        },
        "2014": {
          "salience_share": 6.5,
          "description": "Normcore (Cluster 11) acts as a rejection of the trend cycle (-0.6%). Alexander Wang x H&M brings 'Sporty Goth' to the masses, but the excitement is waning. 'Nasty Gal' (Cluster 30) peaks, selling the 'Girlboss' aesthetic of vintage-inspired fast fashion.",
          "key_manifestations": [
            "Alexander Wang x H&M",
            "Nasty Gal (Peak)",
            "Normcore Trend",
            "Kingsman (Bespoke suits as weapons)"
          ]
        },
        "2015": {
          "salience_share": 6.1,
          "description": "Balmain x H&M (+0.5%). The 'Kardashian Effect.' It is flashy, expensive, and sells out, but feels like the end of an era. The 'Capsule Wardrobe' trend (Minimalism) gains traction on Pinterest. We have too much stuff. *The Intern* fetishizes the 'Startup' aesthetic over the 'Runway.'",
          "key_manifestations": [
            "Balmain x H&M",
            "The Capsule Wardrobe (Trend)",
            "The True Cost (Documentary release)",
            "Zoolander 2 (Announcement - Joke feels dated)"
          ]
        },
        "2016": {
          "salience_share": 5.8,
          "description": "See Now, Buy Now (+0.4%). Designers try to sell clothes directly from the runway to compete with Zara. It breaks the fashion calendar. *Neon Demon* offers a horror critique of the beauty industry. The 'Merch' trend (Pablo, Purpose Tour) replaces 'Fashion'—a printed Gildan tee is now worth more than a designed blouse.",
          "key_manifestations": [
            "See Now, Buy Now (Industry shift)",
            "Kanye West 'Pablo' Merch",
            "Neon Demon (Film)",
            "Vetements (DHL Shirt - Anti-fashion)"
          ]
        }
      }
    },
    "62_mumblecore_and_the_aesthetics_of_artless_realism": {
      "name": "Mumblecore and the Aesthetics of Artless Realism",
      "description": "This cluster maps the rise of a hyper-naturalistic, lo-fi aesthetic in independent film and television. Initiated by the Duplass Brothers, Andrew Bujalski, and Joe Swanberg, it prioritized improvised dialogue, non-professional actors, and awkward silences over plot. It tracks how this niche festival movement infiltrated the mainstream via Greta Gerwig and *Girls*, eventually influencing the 'Sadcom' and the 'Vlog' aesthetic. It is a reaction against the polished artificiality of the 2000s blockbuster, seeking truth in the mundane and the messy.",
      "trajectory": {
        "2002": {
          "salience_share": 0.8,
          "description": "*Funny Ha Ha* (Andrew Bujalski) is filmed. It is the proto-Mumblecore film. Shot on 16mm, bad sound, aimless 20-somethings. It has zero cultural impact yet, but sets the template. *Adaptation* deconstructs the Hollywood script, preparing the ground for 'plotless' narratives.",
          "key_manifestations": [
            "Funny Ha Ha (Production)",
            "Adaptation (Screenplay deconstruction)",
            "Jackass (Raw video aesthetic)",
            "Personal Velocity (Digital video indie)"
          ]
        },
        "2003": {
          "salience_share": 1.1,
          "description": "*The Station Agent* and *Lost in Translation* (+0.3%). Not Mumblecore, but 'Quiet Indie.' They prove that movies about people doing nothing can win awards. The Panasonic DVX100 camera is released, putting 24p (film look) digital video in the hands of amateurs.",
          "key_manifestations": [
            "The Station Agent (Film)",
            "Lost in Translation (Atmosphere over plot)",
            "Panasonic DVX100 (Tech enabler)",
            "Elephant (Van Sant's realism)"
          ]
        },
        "2004": {
          "salience_share": 1.4,
          "description": "*Napoleon Dynamite* (Cluster 59) mainstreams 'Awkwardness.' *Garden State* mainstreams 'Vulnerability.' The ingredients are there. *Primer* wins Sundance—a sci-fi movie made for $7,000 with mumbled technical dialogue. It proves you don't need a budget to be brilliant.",
          "key_manifestations": [
            "Primer (Lo-fi Sci-fi)",
            "Garden State (Indie sensibility)",
            "Napoleon Dynamite (Deadpan)",
            "Eternal Sunshine (Raw emotion)"
          ]
        },
        "2005": {
          "salience_share": 2.2,
          "description": "*The Puffy Chair* (Duplass Brothers) premieres at Sundance (+0.8%). The Breakout. A road trip movie about a purple chair. It is funny, improvised, and emotionally real. The term 'Mumblecore' is coined (by a sound mixer) to describe this wave of bad-audio films. It is initially a pejorative.",
          "key_manifestations": [
            "The Puffy Chair (Film)",
            "Mutual Appreciation (Film)",
            "Kissing on the Mouth (Joe Swanberg)",
            "The Squid and the Whale (Baumbach's literary realism)"
          ]
        },
        "2006": {
          "salience_share": 2.5,
          "description": "*Old Joy* (Kelly Reichardt) releases (+0.3%). Two men walk in the woods and talk. It is 'Slow Cinema.' *The Office* (US) (Cluster 59) brings the 'documentary style' to the sitcom, training audiences to accept shaky cams and awkward zooms in comedy.",
          "key_manifestations": [
            "Old Joy (Film)",
            "The Office US (Aesthetic normalization)",
            "Shortbus (Real sex in narrative film)",
            "Clerks II (The dialogue-heavy sequel)"
          ]
        },
        "2007": {
          "salience_share": 3.1,
          "description": "*Hannah Takes the Stairs* releases (+0.6%). It introduces Greta Gerwig. She is the 'Meryl Streep of Mumblecore.' Her naturalism is captivating. The genre is criticized for being 'white people whining,' but it captures the specific aimlessness of the pre-recession millennial.",
          "key_manifestations": [
            "Hannah Takes the Stairs (Film)",
            "Quiet City (Film)",
            "Juno (The stylized opposite - Diablo Cody speak)",
            "Paranormal Activity (Lo-fi horror)"
          ]
        },
        "2008": {
          "salience_share": 3.5,
          "description": "*Baghead* (Duplass) plays with horror tropes using Mumblecore improvisation (+0.4%). *Rachel Getting Married* uses a handheld, documentary style to film a star-studded drama (Anne Hathaway), signaling that the aesthetic is moving upmarket. *Wendy and Lucy* captures the economic anxiety of the crash with silence.",
          "key_manifestations": [
            "Baghead (Film)",
            "Rachel Getting Married (Aesthetic crossover)",
            "Wendy and Lucy (Economic realism)",
            "Cloverfield (Blockbuster found footage)"
          ]
        },
        "2009": {
          "salience_share": 4.2,
          "description": "*Humpday* (Lynn Shelton) releases (+0.7%). It has a high-concept premise (two straight friends make a gay porno) but treats it with mumblecore realism. It wins widespread acclaim. The 'Mumble-Gore' subgenre (House of the Devil) brings the aesthetic to horror.",
          "key_manifestations": [
            "Humpday (Film)",
            "House of the Devil (Lo-fi horror)",
            "Adventureland (Indie vibe)",
            "Parks and Rec (Mockumentary expansion)"
          ]
        },
        "2010": {
          "salience_share": 5.5,
          "description": "*Tiny Furniture* (Lena Dunham) releases (+1.3%). It is the bridge to *Girls*. Shot in her parents' loft. It is autobiographical, uncomfortable, and privileged. It crystallizes the 'Artless' aesthetic—bad lighting, bad bodies, 'real' talk. *Cyrus* (Duplass) brings the style to a studio film with Jonah Hill.",
          "key_manifestations": [
            "Tiny Furniture (Film)",
            "Cyrus (Studio Mumblecore)",
            "Greenberg (Baumbach/Stiller)",
            "Blue Valentine (Improvised tragedy)"
          ]
        },
        "2011": {
          "salience_share": 5.2,
          "description": "*Your Sister's Sister* releases (+0.4%). The Duplass influence is everywhere in indie film. The 'Canon 5D Mark II' revolutionizes filmmaking—everyone can now achieve the 'shallow depth of field' look. The aesthetic becomes the default for low-budget cinema and Vimeo Staff Picks.",
          "key_manifestations": [
            "Your Sister's Sister (Film)",
            "Canon 5D Mark II (Tech impact)",
            "Like Crazy (Improvised romance)",
            "Portlandia (Satire of the culture)"
          ]
        },
        "2012": {
          "salience_share": 6.8,
          "description": "*Girls* premieres on HBO (+1.6%). Mumblecore goes mainstream. It creates a cultural firestorm. It is the definitive 'Millennial Realism' text. *Frances Ha* (Baumbach/Gerwig) releases, turning the aesthetic into a black-and-white French New Wave homage. It elevates the 'aimless girl' to an art form.",
          "key_manifestations": [
            "Girls (TV Series)",
            "Frances Ha (Film)",
            "Safety Not Guaranteed (Indie sci-fi)",
            "Silver Linings Playbook (Chaotic realism in rom-com)"
          ]
        },
        "2013": {
          "salience_share": 6.5,
          "description": "*Drinking Buddies* (Joe Swanberg) puts movie stars (Olivia Wilde, Anna Kendrick) in an improvised movie about a brewery (+0.5%). It proves the technique works with A-listers. *Before Midnight* (Linklater) returns, reminding everyone that he invented this style of conversational cinema in the 90s.",
          "key_manifestations": [
            "Drinking Buddies (Film)",
            "Before Midnight (Film)",
            "Short Term 12 (Naturalistic drama)",
            "Her (The intimate sci-fi)"
          ]
        },
        "2014": {
          "salience_share": 6.2,
          "description": "*Looking* (HBO) applies the Mumblecore aesthetic to gay life in San Francisco (+0.4%). It is quiet and observational. The Duplass Brothers create *Togetherness* (HBO). The movement has fully institutionalized into 'Prestige TV Dramedy.' The raw edge is gone; it is now a style choice.",
          "key_manifestations": [
            "Looking (TV Series)",
            "Togetherness (TV Series)",
            "Obvious Child (Stand-up realism)",
            "Boyhood (The ultimate duration realism)"
          ]
        },
        "2015": {
          "salience_share": 5.8,
          "description": "*Tangerine* is shot entirely on an iPhone (+0.6%). It brings the 'Lo-Fi' energy back to the streets and marginalized communities. It rejects the polished Mumblecore of HBO. *Mistress America* (Gerwig/Baumbach) continues their screwball revival. The original Mumblecore directors are now directing Marvel movies (Watts) or Godzilla (Wingard).",
          "key_manifestations": [
            "Tangerine (iPhone Cinema)",
            "Mistress America (Film)",
            "Creep (Found footage mumble-horror)",
            "Master of None ( Cinematic TV realism)"
          ]
        },
        "2016": {
          "salience_share": 5.5,
          "description": "*Atlanta* and *Insecure* premiere (+0.7%). They take the 'Auteur/Realist' format but apply it to Black experience, adding surrealism and specific cultural texture. They make the 'White Brooklyn' mumblecore look dated. *Moonlight* brings 'Art House' silence and intimacy to the Oscar stage. The aesthetic has evolved into 'High Art.'",
          "key_manifestations": [
            "Atlanta (Surreal realism)",
            "Insecure (The messy 20s)",
            "Moonlight (Visual poetry)",
            "American Honey (Verite road trip)"
          ]
        }
      }
    },
    "63_bro_country_and_the_rural_suburban_party": {
      "name": "Bro-Country and the Rural-Suburban Party",
      "description": "This cluster maps the mutation of Country music from the 'Neotraditional' sound of the 90s (Alan Jackson) to the 'Bro-Country' dominance of the 2010s (Florida Georgia Line, Luke Bryan). It analyzes how the genre embraced Hip-Hop beats, auto-tune, and lyrics about 'Tailgates, Tanlines, and Fireball.' It explores the cultural synthesis of the Rural and the Suburban—where 'Country' becomes a lifestyle brand for people who live in subdivisions, drive trucks, and listen to Lil Wayne. It is the soundtrack of the Red State party.",
      "trajectory": {
        "1999": {
          "salience_share": 1.2,
          "description": "Country is dominated by Shania Twain and Faith Hill (+0.4%). It is 'Pop-Country,' but the themes are female-empowerment or romantic balladry. The 'Dixie Chicks' are the critical darlings. The aesthetic is polished and glamorous. Rap influences are nonexistent.",
          "key_manifestations": [
            "Shania Twain 'Come On Over'",
            "Dixie Chicks 'Fly'",
            "Faith Hill 'Breathe'",
            "Varsity Blues (Rural teen culture)"
          ]
        },
        "2000": {
          "salience_share": 1.5,
          "description": "*O Brother, Where Art Thou?* (Cluster 41) creates a Bluegrass revival (+0.3%). It pulls the genre toward 'Roots.' However, Kenny Chesney releases *No Shoes, No Shirt, No Problems* (2002), beginning the 'Beach Country' pivot—escapism over storytelling.",
          "key_manifestations": [
            "O Brother Soundtrack",
            "Kenny Chesney (Rise of the island vibe)",
            "Toby Keith 'How Do You Like Me Now?!'",
            "Coyote Ugly (The bar culture)"
          ]
        },
        "2001": {
          "salience_share": 2.2,
          "description": "9/11 triggers the 'Patriotic' phase (+0.8%). Toby Keith's 'Courtesy of the Red, White and Blue.' Country becomes the soundtrack of the War on Terror. It alienates the coastal elite but galvanizes the base. Alan Jackson's 'Where Were You' provides the mourning anthem.",
          "key_manifestations": [
            "Courtesy of the Red, White and Blue (Song)",
            "Where Were You (When the World Stopped Turning)",
            "Black Hawk Down (Military culture)",
            "Nascar (Peak popularity)"
          ]
        },
        "2002": {
          "salience_share": 2.5,
          "description": "Nelly releases 'Hot in Herre' and 'Dilemma' (Cluster 24) (+0.4%). He is from St. Louis. He wears jerseys. He bridges the gap between 'Country' and 'Rap' geographically. The 'Dirty South' hip-hop explosion begins to bleed into the soundscape of Southern youth.",
          "key_manifestations": [
            "Nellyville (Album)",
            "Toby Keith ( dominance)",
            "Rascal Flatts (Boy band country)",
            "8 Mile (The trailer park rapper)"
          ]
        },
        "2003": {
          "salience_share": 2.1,
          "description": "The Dixie Chicks are cancelled (-0.6% female perspective). Their criticism of Bush gets them blacklisted. This purges the 'Liberal/Critical' voice from the genre. The industry pivots to safer, male-driven party anthems. The 'Redneck Woman' (Gretchen Wilson) rises as a reaction.",
          "key_manifestations": [
            "Dixie Chicks Ban",
            "Gretchen Wilson 'Redneck Woman'",
            "Toby Keith 'Beer for My Horses'",
            "Blue Collar Comedy Tour (Peak cultural relevance)"
          ]
        },
        "2004": {
          "salience_share": 2.8,
          "description": "Big & Rich release 'Save a Horse (Ride a Cowboy)' (+0.7%). The Catalyst. It features rapping, rock guitars, and absurd spectacle. It is 'Country Music without Prejudice.' It opens the door for genre-bending. It is loud, obnoxious, and fun.",
          "key_manifestations": [
            "Save a Horse (Ride a Cowboy) (Song)",
            "Tim McGraw 'Over and Over' (ft. Nelly) - The crossover",
            "Friday Night Lights (Film - Rural authenticity)",
            "Larry the Cable Guy (The aesthetic)"
          ]
        },
        "2005": {
          "salience_share": 3.2,
          "description": "Carrie Underwood wins *American Idol* (+0.5%). Country is now the dominant genre of Reality TV. 'Jesus, Take the Wheel.' It reinforces the 'Suburban/Christian' identity. However, *Hustle & Flow* (Memphis Rap) wins an Oscar, showing the other side of the South.",
          "key_manifestations": [
            "Carrie Underwood (Idol Win)",
            "Hustle & Flow (Crunk)",
            "Dukes of Hazzard (Film - Sexualized rural)",
            "Brokeback Mountain (Queering the cowboy)"
          ]
        },
        "2006": {
          "salience_share": 3.5,
          "description": "Taylor Swift releases her debut (+0.6%). She writes about high school, not honky tonks. She brings the 'Teen Girl' demographic to Country. Rascal Flatts cover 'Life is a Highway' for *Cars*, cementing the 'Soccer Mom Country' sound. The genre is splitting: Pop vs. Roots.",
          "key_manifestations": [
            "Taylor Swift (Debut)",
            "Life is a Highway (Rascal Flatts)",
            "Talladega Nights (The satire of the culture)",
            "Hannah Montana (Country roots, pop star life)"
          ]
        },
        "2007": {
          "salience_share": 4.1,
          "description": "Luke Bryan releases his debut (+0.4%). He introduces the 'Spring Break' aesthetic. Baseball caps, not cowboy hats. It is the beginning of the 'Frat Boy' takeover. *Gone Baby Gone* (Cluster 57) shows the urban working class, but the rural working class is finding its voice in 'Hick-Hop' (Cowboy Troy - niche).",
          "key_manifestations": [
            "Luke Bryan (Debut)",
            "Taylor Swift 'Teardrops on My Guitar'",
            "No Country for Old Men (The death of the old west)",
            "Kid Rock (Pivots to country-rock)"
          ]
        },
        "2008": {
          "salience_share": 4.8,
          "description": "Kid Rock releases 'All Summer Long' (+0.9%). It mashes up 'Sweet Home Alabama' and 'Werewolves of London.' It is a massive hit. It proves that nostalgia + classic rock + rap attitude = gold. It creates the template for the 'Lake Life' anthem.",
          "key_manifestations": [
            "All Summer Long (Song)",
            "Taylor Swift 'Fearless' (Pop crossover)",
            "Darius Rucker (Hootie goes Country)",
            "Gran Torino (The old guard)"
          ]
        },
        "2009": {
          "salience_share": 5.5,
          "description": "Jason Aldean releases 'Big Green Tractor' (+0.6%). It sexualizes farm equipment. It is the proto-Bro song. Taylor Swift wins VMA (Kanye incident), officially becoming a global Pop star, leaving a vacuum in Country that the Bros will fill. The 'Truck' becomes the central character of the genre.",
          "key_manifestations": [
            "Big Green Tractor (Song)",
            "Taylor Swift VMA Incident",
            "The Blind Side (The Southern football religion)",
            "Crazy Heart (The dying outlaw)"
          ]
        },
        "2010": {
          "salience_share": 6.2,
          "description": "Jason Aldean releases 'Dirt Road Anthem' (+1.0%). It is a rap song performed by a country artist. It normalizes the 'Hick-Hop' flow. 'Chillin' on a dirt road.' It becomes the blueprint. *Country Strong* (Film) tries to dramatize the industry but fails to capture the shift to party music.",
          "key_manifestations": [
            "Dirt Road Anthem (Song)",
            "Luke Bryan 'Rain Is a Good Thing'",
            "Country Strong (Film)",
            "Winter's Bone (The reality of the dirt road)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "Blake Shelton joins *The Voice* (+0.6%). The 'Bro' is now the face of primetime TV. He is charming, drinks on set, and is best friends with Adam Levine. It mainstream's the 'Red Cup' lifestyle. Eric Church releases 'Chief,' trying to keep the 'Outlaw' spirit alive but with modern production.",
          "key_manifestations": [
            "Blake Shelton on The Voice",
            "Eric Church 'Chief'",
            "Footloose (Remake - Country dancing)",
            "Hart of Dixie (TV Series - Southern cosplay)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "Florida Georgia Line releases 'Cruise' (+1.5%). The Singularity of Bro-Country. 'Baby you a song.' It is basically a pop-metal song with a banjo. The remix with Nelly dominates the Hot 100. It creates a clone army of songs about trucks, girls in painted-on jeans, and Fireball. Critics hate it; audiences consume it voraciously.",
          "key_manifestations": [
            "Cruise (Song)",
            "Luke Bryan 'Spring Break' EPs",
            "Nashville (TV Series - The drama of the shift)",
            "Magic Mike (The Matthew McConaughey cowboy)"
          ]
        },
        "2013": {
          "salience_share": 8.8,
          "description": "Luke Bryan releases 'Crash My Party' (+0.6%). 'That's My Kind of Night' references T-Pain. The synthesis is complete. The 'Tomatogate' controversy (radio consultant says women are just the tomatoes in the salad of male artists) reveals the misogyny of the format. Female artists are pushed out.",
          "key_manifestations": [
            "That's My Kind of Night (Song)",
            "Tomatogate (Controversy)",
            "Kacey Musgraves 'Same Trailer Different Park' (The critical resistance)",
            "Spring Breakers (The aesthetic of the party)"
          ]
        },
        "2014": {
          "salience_share": 9.2,
          "description": "Sam Hunt releases 'Montevallo' (+0.7%). He is the 'Drake of Country.' He talks-sings about exes with R&B beats. It is 'Post-Bro.' It is sensitive but aesthetically urban. *True Detective* Season 1 provides a dark, gothic counter-narrative to the 'Party South.'",
          "key_manifestations": [
            "Sam Hunt (Debut)",
            "Florida Georgia Line 'This Is How We Roll'",
            "True Detective (Southern Gothic)",
            "Girl in a Country Song (Maddie & Tae - Satire of Bro Country)"
          ]
        },
        "2015": {
          "salience_share": 8.5,
          "description": "Chris Stapleton performs with Justin Timberlake at the CMAs (+1.2%). The 'Authenticity' backlash. Stapleton is bearded, bluesy, and real. He sweeps the awards. It signals the beginning of the end for Bro-Country dominance. The audience wants 'Soul' again. Trump's campaign begins, mobilizing the demographic that listens to this music.",
          "key_manifestations": [
            "Stapleton/Timberlake CMA Performance",
            "Traveller (Album)",
            "Thomas Rhett 'Die a Happy Man' (The pivot to romance)",
            "The Ranch (TV Series - Sitcom rural)"
          ]
        },
        "2016": {
          "salience_share": 7.8,
          "description": "Lil Nas X is brewing (Old Town Road comes later), but the seeds are there. Beyoncé performs 'Daddy Lessons' at the CMAs (+0.8%). The racists melt down. It exposes the 'Whiteness' of the genre is enforced, not natural. The 'Yeehaw Agenda' begins to form on the internet (Black Cowboys). Bro-Country fades into 'Boyfriend Country' (Dan + Shay).",
          "key_manifestations": [
            "Beyoncé at CMAs",
            "Daddy Lessons (Song)",
            "Maren Morris 'My Church' (Pop-Roots)",
            "Hell or High Water (The dying west)"
          ]
        }
      }
    },
    "64_the_indie_game_renaissance_and_pixel_art_revival": {
      "name": "The Indie Game Renaissance and Pixel Art Revival",
      "description": "This cluster maps the democratization of video game development, shifting power from the AAA studio (Electronic Arts) to the bedroom coder. It tracks the aesthetic rejection of 'hyper-realism' in favor of nostalgic, abstract, or 8-bit 'Pixel Art.' It explores how digital distribution (Steam, Xbox Live Arcade) allowed for niche, emotional, and experimental narratives (*Braid*, *Undertale*) that treated games as high art. It is the story of the 'Auteur' returning to a medium that had become industrialized.",
      "trajectory": {
        "2004": {
          "salience_share": 1.2,
          "description": "*Cave Story* releases on PC (+0.4%). Created by one man (Daisuke Amaya) over five years. It is the 'Patient Zero' of the indie boom. It proves that a single person can rival the quality of the SNES era. *Katamari Damacy* (PS2) offers a weird, low-budget alternative to the grim shooters of the era, celebrating pure joy and absurdity.",
          "key_manifestations": [
            "Cave Story (PC Release)",
            "Katamari Damacy (Video Game)",
            "Alien Hominid (Flash to Console)",
            "Yume Nikki (Avant-garde horror)"
          ]
        },
        "2005": {
          "salience_share": 1.5,
          "description": "Variance is low but building. The 'Flash Game' portal (Newgrounds, Kongregate) is the incubator. *N+* (the precursor to *Super Meat Boy*) creates the language of 'Masocore' platforming. The industry is obsessed with the Xbox 360's 'HD' graphics, leaving a vacuum for simple, stylized gameplay.",
          "key_manifestations": [
            "N (Browser Game)",
            "Geometry Wars (Xbox Live Arcade)",
            "Dwarf Fortress (Alpha Release)",
            "Darwinia (Indie Strategy)"
          ]
        },
        "2006": {
          "salience_share": 1.8,
          "description": "*Garry's Mod* releases on Steam (+0.3%). It turns the *Half-Life 2* engine into a sandbox for user-generated chaos. It predicts the 'Metaverse'/Roblox logic. *Flow* releases, introducing 'Zen' gaming—no score, just vibes. The concept of the 'Art Game' begins to form.",
          "key_manifestations": [
            "Garry's Mod (Standalone)",
            "Flow (Flash/PS3)",
            "Roblox (Public Release)",
            "Mother 3 (Japan only - Cult emulation scene)"
          ]
        },
        "2007": {
          "salience_share": 2.2,
          "description": "*Portal* (Valve) releases (+0.6%). While studio-made, it grew from a student project (*Narbacular Drop*). It mainstreamed the 'short, high-concept puzzle game' format. *Aquaria* wins the first IGF grand prize, legitimizing the 'Indie' scene as a distinct award category.",
          "key_manifestations": [
            "Portal (Game)",
            "Aquaria (Indie award winner)",
            "Peggle (Casual addiction)",
            "Team Fortress 2 (Class-based aesthetic)"
          ]
        },
        "2008": {
          "salience_share": 4.5,
          "description": "*Braid* releases on XBLA (+1.5%). The Catalyst. It is a deconstruction of *Mario* with painterly art and time manipulation. It sells for $15. It proves 'Indie' can be profitable and intellectually dense. *Castle Crashers* brings the Newgrounds aesthetic to the living room. *World of Goo* proves the Wii is an indie platform.",
          "key_manifestations": [
            "Braid (Video Game)",
            "Castle Crashers (Video Game)",
            "World of Goo (Video Game)",
            "Spelunky (Original Freeware)"
          ]
        },
        "2009": {
          "salience_share": 5.2,
          "description": "*Minecraft* (Alpha) releases (+0.8%). Notch creates a digital Lego set. It spreads virally without marketing. It defines the 'Early Access' model—selling a broken game to fund its completion. *Flower* (PS3) argues that games can be poetry. *Machinarium* revives the point-and-click adventure with hand-drawn art.",
          "key_manifestations": [
            "Minecraft (Classic/Indev)",
            "Flower (Art Game)",
            "Machinarium (Adventure)",
            "Angry Birds (Mobile Indie explosion)"
          ]
        },
        "2010": {
          "salience_share": 6.5,
          "description": "*Super Meat Boy* and *Limbo* release (+1.2%). The 'Indie Summer' on Xbox. *Meat Boy* is hard-core retro; *Limbo* is German Expressionist horror. They cement the idea that 'Indie' means 'Better Art Direction.' The 'Humble Bundle' launches, creating a new economy for selling games in bulk.",
          "key_manifestations": [
            "Super Meat Boy (Game)",
            "Limbo (Game)",
            "Humble Bundle (Launch)",
            "Minecraft (Beta - Explosion)"
          ]
        },
        "2011": {
          "salience_share": 7.2,
          "description": "*Bastion* releases (+0.6%). It introduces the dynamic narrator. It proves indie games can have better writing than AAA titles. *Terraria* applies the *Minecraft* logic to 2D. *The Binding of Isaac* invents the modern 'Roguelike' loop—infinite replayability through randomization. It deals with religious trauma, showing indie themes are maturing.",
          "key_manifestations": [
            "Bastion (Game)",
            "The Binding of Isaac (Game)",
            "Terraria (Game)",
            "To the Moon (Narrative focus)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "*Indie Game: The Movie* releases (+0.9%). It mythologizes the developer as a tortured artist (Phil Fish, Edmund McMillen). *Fez* releases, a masterpiece of perspective shifting. *Hotline Miami* captures the 'Synthwave' aesthetic (Cluster 6) and ultra-violence. *Journey* wins Game of the Year awards, beating AAA shooters.",
          "key_manifestations": [
            "Indie Game: The Movie (Documentary)",
            "Fez (Game)",
            "Hotline Miami (Game)",
            "Journey (Game)"
          ]
        },
        "2013": {
          "salience_share": 8.8,
          "description": "*Gone Home* releases (+0.6%). It creates the 'Walking Simulator' genre. No combat, just exploring a 90s house and uncovering a queer love story. It triggers a massive culture war about 'What is a game?' *The Stanley Parable* deconstructs the very nature of player choice.",
          "key_manifestations": [
            "Gone Home (Game)",
            "The Stanley Parable (Game)",
            "Papers, Please (Bureaucracy simulator)",
            "Kentucky Route Zero (Magical realism)"
          ]
        },
        "2014": {
          "salience_share": 9.1,
          "description": "*Shovel Knight* releases (+0.4%). It is the perfect NES nostalgia trip, funded by Kickstarter. It proves 'Retro' is a valid genre, not just a throwback. *Five Nights at Freddy's* creates the 'YouTuber Bait' horror genre—games designed to be screamed at by PewDiePie.",
          "key_manifestations": [
            "Shovel Knight (Game)",
            "Five Nights at Freddy's (Game)",
            "Monument Valley (Mobile Art)",
            "This War of Mine (War from civilian perspective)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "*Undertale* releases (+1.5%). The Singularity of the cluster. It subverts every RPG trope (you don't have to kill anyone). It looks like Earthbound but plays like a bullet hell. It creates a fandom rivaling *Harry Potter*. It proves that one person with GameMaker can beat the entire industry emotionally.",
          "key_manifestations": [
            "Undertale (Game)",
            "Rocket League (Indie becomes Esport)",
            "Life is Strange (Episodic narrative)",
            "Her Story (FMV revival)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "*Stardew Valley* releases (+0.8%). One man recreates *Harvest Moon* but better. It defines the 'Cozy Game' genre. It is the ultimate escape from the 2016 political hellscape. *Inside* (from Limbo creators) perfects the cinematic puzzle platformer. The 'Indie' is now the establishment.",
          "key_manifestations": [
            "Stardew Valley (Game)",
            "Inside (Game)",
            "Firewatch (Walking Sim)",
            "Hyper Light Drifter (Pixel Art peak)"
          ]
        }
      }
    },
    "65_therapeutic_discourse_and_the_mainstreaming_of_mental_health": {
      "name": "Therapeutic Discourse and the Mainstreaming of Mental Health",
      "description": "This cluster tracks the linguistic and cultural shift from 'Madness' to 'Mental Health.' It maps how clinical terms (OCD, trigger, gaslight, trauma, narcissist) migrated from the therapist's office to the Tumblr dashboard and finally to casual conversation. It moves from the stigmatized depictions of the 90s (*Girl, Interrupted*) to the romanticized sorrow of the 2000s (*Garden State*), and finally to the 'Radical Vulnerability' of the 2010s, where stating one's diagnosis is a form of social currency.",
      "trajectory": {
        "1999": {
          "salience_share": 2.5,
          "description": "*The Sopranos* premieres (+1.2%). Tony Soprano sees a shrink. It is revolutionary: even the alpha male has panic attacks. It normalizes therapy for men. *Girl, Interrupted* wins Angelina Jolie an Oscar, but glamorizes the 'Insane Asylum' aesthetic. Mental illness is still 'gothic' or 'dangerous.'",
          "key_manifestations": [
            "The Sopranos (Dr. Melfi scenes)",
            "Girl, Interrupted (Film)",
            "Fight Club (Schizophrenia/Dissociation as plot twist)",
            "The Virgin Suicides (Depression as aesthetic)"
          ]
        },
        "2000": {
          "salience_share": 2.8,
          "description": "Pharmaceutical ads for SSRIs flood TV (+0.4%). 'Zoloft' becomes a household character (the sad blob). *Requiem for a Dream* depicts addiction not as a crime, but as a mental health spiral. *Wonder Boys* features a protagonist paralyzed by writer's block and depression, treated with weed and malaise.",
          "key_manifestations": [
            "Zoloft Commercials (The blob)",
            "Requiem for a Dream (Addiction)",
            "Wonder Boys (Film)",
            "American Psycho (Narcissism diagnosed)"
          ]
        },
        "2001": {
          "salience_share": 3.1,
          "description": "*Prozac Nation* (Film) adapts the 90s memoir. It feels dated upon arrival, as the culture shifts from 'Depression' to 'Anxiety' post-9/11. *The Royal Tenenbaums* features a suicide attempt that is framed aesthetically (Elliott Smith soundtrack), reinforcing the 'Sad Genius' trope.",
          "key_manifestations": [
            "The Royal Tenenbaums (Richie's suicide)",
            "Prozac Nation (Film)",
            "A Beautiful Mind (Schizophrenia as superpower/curse)",
            "Donnie Darko (Therapy sessions)"
          ]
        },
        "2002": {
          "salience_share": 3.5,
          "description": "*The Hours* (+0.4%). Virginia Woolf's suicide is the anchor. It connects female creativity with mental illness. *Monk* premieres on USA, turning OCD into a quirky superpower for a detective. It sanitizes the disorder for cable TV.",
          "key_manifestations": [
            "The Hours (Film)",
            "Monk (TV Series Premiere)",
            "Punch-Drunk Love (Social anxiety rage)",
            "Adaptation (Neuroticism as art)"
          ]
        },
        "2003": {
          "salience_share": 3.8,
          "description": "*Matchstick Men* features Nicolas Cage with severe tics/OCD (+0.3%). *Thirteen* shows self-harm (cutting) as a teen epidemic. It shocks parents. The conversation moves to 'Teen Mental Health.' The 'Black Box Warning' on antidepressants for teens creates a panic.",
          "key_manifestations": [
            "Thirteen (Self-harm depiction)",
            "Matchstick Men (Film)",
            "FDA Black Box Warning (Event)",
            "Identify (Film - Dissociative Identity Disorder)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*Garden State* releases (+1.0%). The protagonist is numb from Lithium. He stops taking it to 'feel.' It captures the generational mood: over-medicated and spiritually empty. *Eternal Sunshine* treats the desire to erase memory as a trauma response. 'Emo' music (Cluster 2) is the soundtrack of this headspace.",
          "key_manifestations": [
            "Garden State (Lithium monologue)",
            "Eternal Sunshine (Trauma erasure)",
            "The Aviator (OCD as hell)",
            "Desperate Housewives (Suburban neurosis)"
          ]
        },
        "2005": {
          "salience_share": 4.8,
          "description": "Tom Cruise vs. Brooke Shields (Cluster 53) (+0.6%). The debate over Postpartum Depression goes national. It validates medication. *House M.D.* features a misanthropic addict, but his pain is physical/psychosomatic. The 'Tortured Genius' excuse is at its peak.",
          "key_manifestations": [
            "Tom Cruise Today Show Rant",
            "House M.D. (Vicodin dependency)",
            "Batman Begins (Fear toxin/psychology)",
            "Six Feet Under (Finale - Claire's anxiety)"
          ]
        },
        "2006": {
          "salience_share": 5.2,
          "description": "*Little Miss Sunshine* features a Proust scholar who attempted suicide (+0.5%). It integrates mental illness into the quirky family dynamic without judgment. *Dexter* asks us to empathize with a psychopath, using his 'Code' as a therapeutic structure.",
          "key_manifestations": [
            "Little Miss Sunshine (Frank's depression)",
            "Dexter (The Dark Passenger)",
            "The Departed (PTSD in policing)",
            "Grey's Anatomy (Therapy as plot device)"
          ]
        },
        "2007": {
          "salience_share": 5.8,
          "description": "Britney Spears' breakdown (Cluster 55) (+0.9%). It is treated as entertainment, but retrospectively seen as a mental health crisis. *Lars and the Real Girl* treats delusion with extreme kindness—the whole town supports his therapy. It shifts the tone from 'Lock them up' to 'Play along.'",
          "key_manifestations": [
            "Britney Spears Breakdown",
            "Lars and the Real Girl (Film)",
            "Skins (UK) (Teen mania/anorexia glamorization)",
            "Michael Clayton (Manic episode as truth-telling)"
          ]
        },
        "2008": {
          "salience_share": 6.5,
          "description": "*In Treatment* premieres on HBO (+0.8%). A show entirely about therapy sessions. It demystifies the process. It is just talking. *The Dark Knight* features the Joker as an agent of chaos, but Heath Ledger's death (accidental overdose/insomnia) links the role to the actor's mental state in the public imagination.",
          "key_manifestations": [
            "In Treatment (TV Series)",
            "Heath Ledger Death",
            "Revolutionary Road (Suburban madness)",
            "Synecdoche, New York (The mind as a set)"
          ]
        },
        "2009": {
          "salience_share": 6.9,
          "description": "The 'Hoarders' phenomenon begins (A&E) (+0.6%). Mental illness as spectacle. It is grotesque but introduces the concept of 'Compulsive Hoarding' to the public. *United States of Tara* (Diablo Cody) explores DID (Multiple Personalities) as a family dramedy.",
          "key_manifestations": [
            "Hoarders (TV Series Premiere)",
            "United States of Tara (TV Series)",
            "The Hangover (Alan's undiagnosed sociopathy)",
            "Up (Grief as stagnation)"
          ]
        },
        "2010": {
          "salience_share": 7.5,
          "description": "*It's Kind of a Funny Story* releases (+0.5%). The 'Psych Ward' as a coming-of-age camp. It softens the institution. *Black Swan* depicts psychosis as the price of perfection. 'Trigger Warning' begins to appear on feminist blogs, migrating from PTSD forums to general discourse.",
          "key_manifestations": [
            "It's Kind of a Funny Story (Film)",
            "Black Swan (Film)",
            "Shutter Island (Trauma denial)",
            "Trigger Warning (Term usage)"
          ]
        },
        "2011": {
          "salience_share": 8.1,
          "description": "*Homeland* premieres (+0.6%). Carrie Mathison has Bipolar Disorder. It is her superpower (pattern recognition) and her kryptonite. It portrays the manic state with high intensity. *Melancholia* (Lars von Trier) depicts depression not as sadness, but as the only rational response to the end of the world.",
          "key_manifestations": [
            "Homeland (Carrie's Bipolar)",
            "Melancholia (Film)",
            "Shameless (US) (Bipolar parent)",
            "Young Adult (Narcissistic Personality Disorder)"
          ]
        },
        "2012": {
          "salience_share": 8.8,
          "description": "*Silver Linings Playbook* releases (+1.0%). Jennifer Lawrence and Bradley Cooper. Rom-com meets mental institution. It argues that 'crazy' people are the only sane ones. It wins Oscars. It mainstreams the idea that love is the best med (a dangerous trope, but popular).",
          "key_manifestations": [
            "Silver Linings Playbook (Film)",
            "Perks of Being a Wallflower (Repressed trauma)",
            "Girls (Hannah's OCD arc)",
            "Adventure Time (Simon/Ice King dementia metaphor)"
          ]
        },
        "2013": {
          "salience_share": 9.2,
          "description": "Tumblr culture fetishizes 'Sadness' (+0.7%). The 'Soft Grunge' aesthetic. Lana Del Rey. *Orange Is the New Black* features 'Crazy Eyes' (Suzanne), shifting from a joke character to a tragic, sympathetic portrayal of untreated mental health in prison.",
          "key_manifestations": [
            "Tumblr Sadness Aesthetic",
            "Orange Is the New Black (Suzanne)",
            "Blue Jasmine (breakdown as class fall)",
            "Frozen (Elsa's anxiety/conceal don't feel)"
          ]
        },
        "2014": {
          "salience_share": 9.5,
          "description": "*BoJack Horseman* premieres (+0.8%). A cartoon horse explores deep, generational trauma and narcissism. It becomes the most accurate depiction of depression on TV. *The Babadook* personifies Grief as a monster that cannot be killed, only managed.",
          "key_manifestations": [
            "BoJack Horseman (Premiere)",
            "The Babadook (Film)",
            "You're the Worst (Clinical depression rom-com)",
            "True Detective (Rust's nihilism)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "*Inside Out* releases (+1.2%). It teaches children (and adults) that 'Sadness' is vital. It creates a visual vocabulary for internal states (Core Memories). *Crazy Ex-Girlfriend* premieres, deconstructing the 'Crazy' trope and eventually diagnosing it (BPD). The term 'Gaslighting' enters general usage.",
          "key_manifestations": [
            "Inside Out (Film)",
            "Crazy Ex-Girlfriend (Premiere)",
            "Unreal (The psychology of manipulation)",
            "Gaslighting (Word trend)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "*Lady Dynamite* (Maria Bamford) explores Bipolar II with surrealism (+0.6%). It breaks the 'tragic' mold for a 'chaotic/funny' mold. *Moonlight* explores Black male vulnerability and the trauma of the closet. The election causes 'Election Stress Disorder'—mental health becomes political.",
          "key_manifestations": [
            "Lady Dynamite (TV Series)",
            "Moonlight (Trauma and identity)",
            "Fleabag (Dissociation and grief)",
            "Split (The demonization of DID - controversy)"
          ]
        }
      }
    },
    "66_the_nice_guy_syndrome_and_toxic_entitlement": {
      "name": "The 'Nice Guy' Syndrome and Toxic Entitlement",
      "description": "This cluster maps the cultural trajectory of the 'Nice Guy'—the sensitive, beta male protagonist who believes he is owed romantic affection because he is not a 'jock.' It moves from the celebration of this archetype in the 90s/00s (Ross Geller, Seth Cohen) to the critical deconstruction of his manipulative nature in the 2010s (*500 Days of Summer*), and finally to the terrifying realization of his potential for violence (Elliot Rodger, Gamergate). It tracks how the 'Friendzone' went from a sitcom joke to a radicalizing ideology.",
      "trajectory": {
        "1999": {
          "salience_share": 2.5,
          "description": "*American Pie* (+0.8%). The pact to lose virginity. The nice guys (Jim) deserve sex because they are 'good kids.' *She's All That* features the sensitive artist guy who is actually a jerk, but it's framed as romantic. *Friends* is at its peak—Ross Geller's jealousy is played as love.",
          "key_manifestations": [
            "American Pie (The Pact)",
            "Friends (Ross and Rachel)",
            "American Beauty (The neighbor boy's obsession)",
            "10 Things I Hate About You (The nice guy finish)"
          ]
        },
        "2000": {
          "salience_share": 2.8,
          "description": "*High Fidelity* releases (+0.5%). Rob Gordon is the prototype. He ranks women, obsesses over rejection, and is miserable. The film sympathizes with him, but hints at his toxicity. *Meet the Parents* validates the 'suffering beta male' who must endure humiliation to win the girl.",
          "key_manifestations": [
            "High Fidelity (Rob Gordon)",
            "Meet the Parents (Gaylord Focker)",
            "Road Trip (The nice guy cheats but it's okay)",
            "X-Men (Cyclops vs Wolverine - The nice guy vs the bad boy)"
          ]
        },
        "2001": {
          "salience_share": 3.1,
          "description": "*Smallville* premieres (+0.4%). Clark Kent is the ultimate Nice Guy. He stalks Lana Lang with a telescope, but it's framed as 'protecting her.' The 'Friendzone' is the central conflict. *Shrek* features the Ogre winning the princess by being 'real,' defeating the polished Lord Farquaad.",
          "key_manifestations": [
            "Smallville (Clark/Lana)",
            "Shrek (The nice monster)",
            "Saving Silverman (Kidnapping for love)",
            "Vanilla Sky (The obsession)"
          ]
        },
        "2002": {
          "salience_share": 3.5,
          "description": "*Spider-Man* releases (+0.7%). Peter Parker is the nerd who loves Mary Jane from afar. 'Nice guys finish last' is the subtext. *Attack of the Clones* features Anakin Skywalker complaining about being friendzoned by Padme, which eventually leads to him murdering children (a dark foreshadowing of the archetype's logic).",
          "key_manifestations": [
            "Spider-Man (Peter Parker)",
            "Attack of the Clones (Anakin's whining)",
            "About a Boy (The redemption of the cad)",
            "Swimfan (The female stalker - the inverse)"
          ]
        },
        "2003": {
          "salience_share": 3.9,
          "description": "*The O.C.* premieres (+0.8%). Seth Cohen introduces 'Indie Nice Guy.' He is funny, listens to Death Cab, and eventually gets Summer Roberts. It validates the strategy: wear down the popular girl with neuroticism. *Love Actually* features the guy with the cue cards hitting on his best friend's wife. It is framed as romantic, now seen as creepy.",
          "key_manifestations": [
            "The O.C. (Seth Cohen)",
            "Love Actually (The cue cards)",
            "Bruce Almighty (The nice guy gets god powers)",
            "Old School (The nice guy goes feral)"
          ]
        },
        "2004": {
          "salience_share": 4.5,
          "description": "*The Notebook* releases (+1.2%). Noah threatens suicide (hanging from the Ferris wheel) to get a date. He writes 365 letters. It romanticizes persistence as the highest virtue. 'No' just means 'Try Harder.' *Napoleon Dynamite* shows the nerd winning by being authentic.",
          "key_manifestations": [
            "The Notebook (Noah Calhoun)",
            "Napoleon Dynamite (Deb/Napoleon)",
            "Spider-Man 2 (Mary Jane chooses the nerd)",
            "Garden State (The savior dynamic)"
          ]
        },
        "2005": {
          "salience_share": 5.1,
          "description": "*Wedding Crashers* (+0.6%). The nice guy (Owen Wilson) manipulates the girl, lies about his identity, and wins her. *The 40-Year-Old Virgin* frames male virginity as a crisis to be solved by the community. *Hitch* teaches men how to manipulate women into liking them ('The Game' lite).",
          "key_manifestations": [
            "Wedding Crashers (Manipulation as romance)",
            "The 40-Year-Old Virgin (The pedestal)",
            "Hitch (The pickup artist)",
            "How I Met Your Mother (Ted Mosby - The Architect of Nice)"
          ]
        },
        "2006": {
          "salience_share": 5.5,
          "description": "*My Super Ex-Girlfriend* tries to flip the script (crazy female), but *The Holiday* reinforces the 'Jack Black' nice guy winning the girl. The term 'Friendzone' (from *Friends* in 1994) enters common internet usage via myspace/forums. The resentment is building online.",
          "key_manifestations": [
            "The Holiday (The beta wins)",
            "Just Friends (Ryan Reynolds in the friendzone)",
            "Clerks II (The nice guy gets the boss)",
            "Superman Returns ( The stalker ex)"
          ]
        },
        "2007": {
          "salience_share": 5.8,
          "description": "*Superbad* (+0.7%). Seth and Evan just want to lose their virginity. They are sweet, but their language is misogynistic. It captures the high school reality. *Transformers* features Shia LaBeouf (nerd) getting Megan Fox (hot girl) because he has a cool car (robot). The entitlement is rewarded.",
          "key_manifestations": [
            "Superbad (Seth/Evan)",
            "Transformers (The car gets the girl)",
            "Knocked Up (The schlub gets the beauty)",
            "Good Luck Chuck (The curse of the nice guy)"
          ]
        },
        "2008": {
          "salience_share": 6.2,
          "description": "*Twilight* (+0.9%). Edward watches Bella sleep. He disables her truck so she can't leave. It is controlling behavior framed as protective love. *Forgetting Sarah Marshall* features the nice guy (Segel) realizing his ex was toxic, a healthier step, but he still 'wins' the new hot girl (Kunis).",
          "key_manifestations": [
            "Twilight (Stalking as romance)",
            "Forgetting Sarah Marshall (The rebound)",
            "Pineapple Express (Male intimacy)",
            "Wall-E (The robot pursues the girl)"
          ]
        },
        "2009": {
          "salience_share": 7.5,
          "description": "*500 Days of Summer* (+1.5%). The Turning Point. Tom believes he is the hero. The movie shows he is selfish, projecting his fantasy onto Summer. 'Just because she likes the same bizzaro crap you do doesn't mean she's your soulmate.' A generation of men miss the point and hate Summer.",
          "key_manifestations": [
            "500 Days of Summer (The critique)",
            "The Hangover (The nice guy unleashed)",
            "Obsessed (The female stalker)",
            "He's Just Not That Into You (The rules)"
          ]
        },
        "2010": {
          "salience_share": 7.8,
          "description": "*Scott Pilgrim vs. the World* (+0.8%). Scott cheats on Knives Chau. He is a 'Softboy'—using his insecurity to manipulate women. The movie acknowledges his flaws ('Nega-Scott'), but he still gets the girl. The 'Nice Guy' is evolving into the 'Softboy.'",
          "key_manifestations": [
            "Scott Pilgrim (The Softboy)",
            "Blue Valentine (The nice guy turns mean)",
            "Easy A (The invisible guy)",
            "The Social Network (Zuckerberg's motivation - the breakup)"
          ]
        },
        "2011": {
          "salience_share": 8.1,
          "description": "*Drive* features the 'Protector' archetype (+0.5%). Silent, violent, protecting the neighbor girl. It appeals to the 'White Knight' fantasy. *Crazy, Stupid, Love* features a subplot where the babysitter is stalked by the young boy, and it's played as 'true love.'",
          "key_manifestations": [
            "Drive (The White Knight)",
            "Crazy, Stupid, Love (The stalker kid)",
            "New Girl (The male roommates)",
            "Game of Thrones (Jorah Mormont - The Friendzone Knight)"
          ]
        },
        "2012": {
          "salience_share": 8.5,
          "description": "*The Amazing Spider-Man* reboots (+0.4%). Andrew Garfield is a hipster skater. He stalks Gwen Stacy. It feels less innocent than the Maguire version. *Silver Linings Playbook* features a volatile man who stalks his ex, but is 'healed' by a new woman. The persistence trope holds strong.",
          "key_manifestations": [
            "The Amazing Spider-Man (The cool nerd)",
            "Silver Linings Playbook (Romanticized stalking)",
            "This Means War (Surveillance romance)",
            "Safety Not Guaranteed (The weirdo gets the girl)"
          ]
        },
        "2013": {
          "salience_share": 8.9,
          "description": "*Frozen* subverts the trope with Prince Hans (+0.8%). He seems like the Disney Prince 'Nice Guy,' but is the villain. It teaches girls: 'You can't marry a man you just met.' *Her* shows the nice guy falling for his computer because real women are too complex.",
          "key_manifestations": [
            "Frozen (Hans - The subversion)",
            "Her (The retreat from reality)",
            "The Great Gatsby (The ultimate obsessive nice guy)",
            "Don Jon (The porn addict)"
          ]
        },
        "2014": {
          "salience_share": 9.8,
          "description": "Elliot Rodger (Isla Vista Shootings) (+1.5%). The Horror Reality. He leaves a manifesto using 'Nice Guy' language ('Supreme Gentleman'). He kills because women rejected him. It reveals the violence inherent in the entitlement. Gamergate (Cluster 7) explodes, driven by ex-boyfriends mobilizing the internet against women.",
          "key_manifestations": [
            "Elliot Rodger Manifesto",
            "Gamergate (The Zoë Post)",
            "Gone Girl (The nice guy is a suspect)",
            "Whiplash (Sacrificing the girlfriend for greatness)"
          ]
        },
        "2015": {
          "salience_share": 10.2,
          "description": "*Ex Machina* (+0.7%). Caleb thinks he is the hero saving the robot girl. The movie reveals he is just another captor/tester. She leaves him to die. It is the ultimate critique of the White Knight. *Jessica Jones* features Kilgrave (David Tennant)—a villain who uses mind control to force a woman to 'love' him, using Nice Guy rhetoric.",
          "key_manifestations": [
            "Ex Machina (Caleb's entitlement)",
            "Jessica Jones (Kilgrave)",
            "Star Wars: The Force Awakens (Finn's friendzone)",
            "Mad Max: Fury Road (Nux's redemption via sacrifice, not possession)"
          ]
        },
        "2016": {
          "salience_share": 10.5,
          "description": "The 'Incel' (Involuntary Celibate) term enters mainstream discourse (+0.8%). The 'Nice Guy' is now a political identity. *Passengers* releases—Chris Pratt wakes up Jennifer Lawrence in space (dooming her to death) because he is lonely. It is marketed as a romance, but critics recoil, calling it a horror movie. The culture has turned against the trope.",
          "key_manifestations": [
            "Passengers (The nice guy as villain)",
            "Incel Discourse (Mainstreaming)",
            "Love (Netflix - The toxic nice guy)",
            "10 Cloverfield Lane (The captor as 'protector')"
          ]
        }
      }
    },
    "67_the_vlogger_and_the_parasocial_economy": {
      "name": "The Vlogger and the Parasocial Economy",
      "description": "This cluster maps the evolution of fame from 'Broadcast' to 'Friendship.' It tracks the rise of the YouTube Vlogger—an ordinary person speaking directly to a camera in their bedroom—as a dominant cultural force. It moves from the experimental authenticity of the early 2000s (*Lonelygirl15*) to the highly monetized 'Daily Vlog' era (Shaytards, Casey Neistat) and the beauty guru industrial complex (Zoella). It analyzes how 'Intimacy' became a commodity, cultivating 'Parasocial Relationships' where millions of viewers felt they personally knew the creator, leading to cycles of intense loyalty, betrayal, and the ritual of the 'Apology Video.'",
      "trajectory": {
        "2005": {
          "salience_share": 1.2,
          "description": "YouTube launches. The slogan is 'Broadcast Yourself.' The first video ('Me at the zoo') sets the tone: mundane, unscripted, direct address. It is a diary format. The barrier to entry is just a webcam. *The Office* (US) popularizes the 'talking head' confessional, training audiences to accept direct eye contact with the lens.",
          "key_manifestations": [
            "Me at the zoo (First YouTube Video)",
            "Lazy Sunday (Viral sketch)",
            "Myspace Video (The competitor)",
            "The Office US (Confessional style)"
          ]
        },
        "2006": {
          "salience_share": 2.5,
          "description": "*Lonelygirl15* captivates the internet (+1.3%). It presents itself as a real teen diary but is revealed to be a scripted fiction. It proves the power of the 'Bedroom Aesthetic'—we trust the low-fi. *Ze Frank* launches 'The Show,' inventing the 'jump-cut' editing style that will define the genre for a decade.",
          "key_manifestations": [
            "Lonelygirl15 (Hoax/Series)",
            "Ze Frank (The Show)",
            "Ask A Ninja (Viral character)",
            "Smosh (Lip sync comedy)"
          ]
        },
        "2007": {
          "salience_share": 3.1,
          "description": "The YouTube Partner Program launches (+0.6%). You can now make money. The 'Vlogger' becomes a potential career. 'Chocolate Rain' and 'Leave Britney Alone' show the two sides of viral fame: the meme and the emotional breakdown. The audience is learning to consume raw humanity as entertainment.",
          "key_manifestations": [
            "YouTube Partner Program",
            "Leave Britney Alone (Chris Crocker)",
            "Chocolate Rain (Tay Zonday)",
            "iCarly (TV show about web stars)"
          ]
        },
        "2008": {
          "salience_share": 3.8,
          "description": "*Fred* (Lucas Cruikshank) becomes the first channel to hit 1 million subscribers (+0.7%). His screamy, high-pitched persona targets kids, bypassing traditional media gatekeepers. The 'Collab' becomes a growth hack. *Dr. Horrible's Sing-Along Blog* proves web content can have high production value, but the Vlogger aesthetic remains dominant.",
          "key_manifestations": [
            "Fred (First to 1M subs)",
            "Dr. Horrible's Sing-Along Blog",
            "Philip DeFranco (News vlogging)",
            "Shane Dawson (Sketch/Vlog hybrid)"
          ]
        },
        "2009": {
          "salience_share": 4.5,
          "description": "The *Shaytards* launch the 'Daily Vlog' (+0.7%). They film their family every single day. It creates a 'Truman Show' reality where the audience watches the children grow up in real-time. It establishes the 'Family Vlogger' genre. *Julie & Julia* (Cluster 34) validates blogging as a path to book deals.",
          "key_manifestations": [
            "Shaytards (Daily Vlogging)",
            "Julie & Julia (Film)",
            "Ray William Johnson (Reviewing videos)",
            "Minecraft Let's Plays (Early precursors)"
          ]
        },
        "2010": {
          "salience_share": 5.2,
          "description": "The 'Reply Girl' phenomenon exploits the algorithm (+0.7%). Women use cleavage thumbnails to get views on 'reply' videos. It forces YouTube to change the algorithm from 'View Count' to 'Watch Time.' *Catfish* (Film) exposes the dark side of online intimacy—the person on the screen might not be real. The 'Parasocial' doubt creeps in.",
          "key_manifestations": [
            "Reply Girls (Algorithm hack)",
            "Catfish (Film)",
            "Annoying Orange (The endurance of cringe)",
            "The Social Network (The platform's power)"
          ]
        },
        "2011": {
          "salience_share": 5.8,
          "description": "Jenna Marbles releases 'How to Trick People Into Thinking You're Good Looking' (+0.6%). It is the peak of the 'Relatable Girl' vlog. She is funny, messy, and talks to the camera like a best friend. *Rebecca Black* shows the horror of unintended virality. The 'Beauty Community' begins to coalesce around tutorials.",
          "key_manifestations": [
            "Jenna Marbles (Viral explosion)",
            "Rebecca Black 'Friday'",
            "Epic Meal Time (Bro culture)",
            "Michelle Phan (Beauty guru empire)"
          ]
        },
        "2012": {
          "salience_share": 6.5,
          "description": "The 'British Invasion' (Zoella, Alfie Deyes) (+0.7%). They are young, attractive, and sell a lifestyle of 'Primark Hauls' and cute cupcakes. It is the commodification of the 'Twee' aesthetic. 'Draw My Life' becomes a viral trend—creators narrating their trauma while drawing stick figures. It bonds the audience through shared hardship.",
          "key_manifestations": [
            "Zoella (Haul videos)",
            "Draw My Life (Trend)",
            "Gangnam Style (YouTube as global radio)",
            "PewDiePie (Gaming dominance begins)"
          ]
        },
        "2013": {
          "salience_share": 7.2,
          "description": "Vine launches (Cluster 45), creating a new class of 'Micro-Celebrity' (+0.7%). The 'Nash Grier' archetype—teen heartthrobs who do nothing but smile. YouTube holds its first 'Music Awards,' which is a disaster, showing the disconnect between 'YouTube Famous' and 'Real Famous.' *Her* depicts falling in love with a voice, mirroring the parasocial bond.",
          "key_manifestations": [
            "Vine Stars (Nash Grier/Cameron Dallas)",
            "YouTube Music Awards (The disconnect)",
            "Her (Film)",
            "Tyler Oakley (Activist vlogging)"
          ]
        },
        "2014": {
          "salience_share": 8.1,
          "description": "The 'Gamergate' harassment campaigns target YouTubers/Streamers (+0.9%). It shows the toxic side of the entitlement fans feel over creators. 'PewDiePie' turns off comments. Zoella publishes a book (*Girl Online*) which breaks sales records but is revealed to be ghostwritten, sparking a scandal about 'Authenticity.'",
          "key_manifestations": [
            "Zoella Ghostwriting Scandal",
            "Gamergate (Impact on creators)",
            "Twitch Plays Pokemon (Collective action)",
            "Serial (Podcast hosts as celebrities)"
          ]
        },
        "2015": {
          "salience_share": 8.8,
          "description": "Casey Neistat revolutionizes the daily vlog (+0.7%). He uses drone shots, customized gear, and high-end storytelling. He makes life look like a movie. It raises the bar. 'Prank Channels' (DaddyOFive) begin to push boundaries into abuse for views. The 'Apology Video' (gray hoodie, no makeup) becomes a genre staple.",
          "key_manifestations": [
            "Casey Neistat (Vlogs)",
            "Prank Channels (Ethics debates)",
            "The Apology Video (Genre)",
            "Ingrid Nilsen Coming Out (Viral emotional moment)"
          ]
        },
        "2016": {
          "salience_share": 9.5,
          "description": "The 'Drama Channel' rises (Keemstar/DramaAlert) (+0.7%). Reporting on YouTuber feuds becomes an industry. 'LeafyIsHere' popularizes bullying commentary. The platform incentivizes conflict. *Haters Back Off* (Netflix) gives Miranda Sings a TV show, but critics hate it, proving the 'YouTuber to TV' crossover is nearly impossible. The ecosystem is now self-contained.",
          "key_manifestations": [
            "DramaAlert / Keemstar",
            "LeafyIsHere (Commentary)",
            "Haters Back Off (TV Series)",
            "Logan Paul (The rise of the maverick)"
          ]
        }
      }
    },
    "68_synthwave_and_the_neon_80s_revival": {
      "name": "Synthwave and the Neon 80s Revival",
      "description": "This cluster maps the aesthetic fetishization of a 'Dream 1980s' that never actually existed. It tracks the movement from the ironic appreciation of the 80s in the early 2000s (headbands, leg warmers) to the earnest, atmospheric reconstruction of the decade in the 2010s (*Drive*, *Stranger Things*). It is defined by neon pink/purple color palettes, analog synthesizer soundtracks (Synthwave/Retrowave), and a longing for 'analog adventure' in a digital world. It is a memory of the 80s filtered through a VHS tape found in 2015.",
      "trajectory": {
        "2002": {
          "salience_share": 1.2,
          "description": "*Grand Theft Auto: Vice City* releases (+0.4%). It is the seed. It introduces a generation to 80s excess, pastel suits, and Jan Hammer-style synth scores. It presents the 80s as 'cool' rather than 'cringe' (the prevailing 90s view). *Napoleon Dynamite* (filming) uses an ambiguous time setting that feels 80s-adjacent.",
          "key_manifestations": [
            "Grand Theft Auto: Vice City",
            "The Strokes (80s NYC revival)",
            "Donnie Darko (80s setting as gloom)",
            "Freaks and Geeks (80s setting as reality)"
          ]
        },
        "2005": {
          "salience_share": 1.8,
          "description": "The 'Nu-Rave' and 'Indie Sleaze' scenes (Cluster 11) adopt neon colors and shutter shades (+0.6%). It is the 'Party 80s.' Kanye West samples Daft Punk. The aesthetic is loud, trashy, and ironic. *The Wedding Singer* (Broadway) capitalizes on 80s nostalgia as comedy.",
          "key_manifestations": [
            "Kanye West 'Late Registration' (Synth experiments)",
            "American Apparel (The 80s silhouette)",
            "Justice (French House influence)",
            "Family Guy (80s references as humor)"
          ]
        },
        "2007": {
          "salience_share": 2.5,
          "description": "Justice releases *†* (Cross) (+0.7%). It brings a darker, cinematic 80s metal/disco sound. *Hot Rod* (Lonely Island) is a love letter to 80s stunt movies, played for surreal laughs but with genuine affection for the aesthetic. The 'Mullet' makes an ironic return.",
          "key_manifestations": [
            "Justice - †",
            "Hot Rod (Film)",
            "Kavinsky 'Testarossa Autodrive' (Early Synthwave)",
            "Transformers (80s toy revival)"
          ]
        },
        "2008": {
          "salience_share": 3.1,
          "description": "M83 releases *Saturdays = Youth* (+0.6%). It captures the 'John Hughes' movie feeling sonically. It is dreamy and nostalgic. *Wall-E* uses a retro-futurist design. The 'Cassette Tape' becomes a hipster artifact. The aesthetic is softening from 'Neon Party' to 'Sunset Drive.'",
          "key_manifestations": [
            "M83 'Midnight City' (Production phase)",
            "Wall-E (Retro-future)",
            "Empire of the Sun (80s pop revival)",
            "Vampire Weekend (Preppy 80s)"
          ]
        },
        "2010": {
          "salience_share": 4.5,
          "description": "*Tron: Legacy* releases (+1.4%). Daft Punk's score is a masterpiece of modern synth. The visuals (Neon outlines, dark grids) define the 'Outrun' aesthetic. It proves that the 80s can look high-tech and serious. *Scott Pilgrim* uses 8-bit graphics as a visual language.",
          "key_manifestations": [
            "Tron: Legacy (Film & Score)",
            "Scott Pilgrim vs. the World (8-bit aesthetic)",
            "Kavinsky 'Nightcall' (Release)",
            "Despicable Me (80s Villain tropes)"
          ]
        },
        "2011": {
          "salience_share": 6.8,
          "description": "*Drive* releases (+2.3%). The Catalyst. The scorpion jacket. The pink font. The Kavinsky/College soundtrack. It crystallizes the 'Synthwave' vibe: stoic, violent, neon-lit, and nocturnal. It moves the aesthetic from 'Comedy' to 'Cool.' Ryan Gosling becomes the avatar of the genre. ' Vaporwave' begins to form online (Floral Shoppe).",
          "key_manifestations": [
            "Drive (Film)",
            "Floral Shoppe (Vaporwave)",
            "M83 'Hurry Up, We're Dreaming'",
            "Ready Player One (Book - Weaponized 80s trivia)"
          ]
        },
        "2012": {
          "salience_share": 7.5,
          "description": "*Hotline Miami* (Game) releases (+0.7%). It applies the *Drive* aesthetic to a hyper-violent top-down shooter. The soundtrack introduces artists like Perturbator and Carpenter Brut to gamers. The 'Retrowave' genre explodes on Bandcamp and YouTube. *Gravity Falls* uses an 80s mystery vibe.",
          "key_manifestations": [
            "Hotline Miami (Game)",
            "Kung Fury (Kickstarter Launch)",
            "Wreck-It Ralph (Arcade nostalgia)",
            "Perks of Being a Wallflower (The Tunnel Song/Heroes)"
          ]
        },
        "2013": {
          "salience_share": 8.2,
          "description": "Daft Punk's *Random Access Memories* looks back to 70s/80s disco (+0.7%). *The Goldbergs* premieres on TV, treating the 80s as a sitcom setting (The Wonder Years equivalent). *Blood Dragon* (Far Cry DLC) is a pure distillation of 80s VHS action tropes in video game form.",
          "key_manifestations": [
            "Far Cry 3: Blood Dragon",
            "The Goldbergs (TV Series)",
            "Random Access Memories (Album)",
            "Grand Theft Auto V (Radio stations)"
          ]
        },
        "2014": {
          "salience_share": 8.8,
          "description": "*The Guest* releases (+0.6%). It is a thriller with a pure goth/synth soundtrack. It cements the 'Dan Stevens' charm/menace as part of the genre. *Guardians of the Galaxy* makes the 'Mixtape' (Walkman) a central plot point, validating the fetishization of analog music technology.",
          "key_manifestations": [
            "The Guest (Film)",
            "Guardians of the Galaxy (Awesome Mix Vol. 1)",
            "It Follows (Synth score horror)",
            "Kung Fury (Trailer viral spread)"
          ]
        },
        "2015": {
          "salience_share": 9.5,
          "description": "*Kung Fury* releases on YouTube (+0.7%). It is the *Sharknado* of Synthwave—pure, absurd pastiche. Dinosaurs, vikings, hacking time. *Turbo Kid* offers a 'Mad Max on BMX bikes' aesthetic. The genre is now self-aware and bordering on parody. The '80s' is no longer a decade; it is a 'Vibe.'",
          "key_manifestations": [
            "Kung Fury (Film)",
            "Turbo Kid (Film)",
            "Mad Max: Fury Road (Practical effects revival)",
            "Paper Girls (Comic - 80s sci-fi)"
          ]
        },
        "2016": {
          "salience_share": 10.8,
          "description": "*Stranger Things* releases on Netflix (+1.3%). The Peak. It synthesizes Spielberg, King, and Carpenter into a perfect nostalgia product. The font, the synth score (S U R V I V E), the bikes. It becomes a global phenomenon. *San Junipero* (Black Mirror) envisions the 80s as Heaven. The revival is now the dominant mode of pop culture.",
          "key_manifestations": [
            "Stranger Things (TV Series)",
            "Black Mirror 'San Junipero'",
            "The Nice Guys (70s/80s noir comedy)",
            "Sing Street (80s music futurism)"
          ]
        }
      }
    },
    "69_the_rich_kids_of_instagram_and_the_aesthetics_of_excess": {
      "name": "The Rich Kids of Instagram and the Aesthetics of Excess",
      "description": "This cluster maps the cultural fascination with unapologetic wealth in the post-Recession era. It tracks the shift from the 'Stealth Wealth' of the crisis (2009) to the 'Flex Culture' of the mid-2010s. It explores the rise of 'Rich Kids of Instagram' (RKOI), the Kardashian industrial complex, and the celebration of the 'Scammer' (Anna Delvey, Fyre Festival precursors). It is the visual language of private jets, champagne showers, and Balenciaga, consumed by a generation drowning in debt.",
      "trajectory": {
        "2010": {
          "salience_share": 1.5,
          "description": "Instagram launches. The 'Flex' finds its home (+0.5%). *The Social Network* depicts wealth as the result of genius/betrayal. Kanye West releases *My Beautiful Dark Twisted Fantasy*, a maximalist toast to the 'douchebags.' The aesthetic is Baroque and golden. The recession shame is fading.",
          "key_manifestations": [
            "Instagram (Launch)",
            "My Beautiful Dark Twisted Fantasy (Album)",
            "Scott Disick (The Lord persona)",
            "Gossip Girl (Peak luxury brand integration)"
          ]
        },
        "2011": {
          "salience_share": 1.8,
          "description": "*Watch the Throne* (Jay-Z/Kanye) releases (+0.3%). 'Otis.' They destroy a Maybach. It is 'Luxury Rap'—celebrating black ownership of European high culture. *Keeping Up with the Kardashians* shifts from 'Sitcom' to 'Lifestyle Porn.' The houses get bigger, the lighting gets better.",
          "key_manifestations": [
            "Watch the Throne (Album)",
            "Keeping Up with the Kardashians (Glamour shift)",
            "The Great Gatsby (Production announced)",
            "Revenge (TV Series - Hampton's wealth)"
          ]
        },
        "2012": {
          "salience_share": 2.5,
          "description": "The 'Rich Kids of Instagram' Tumblr/Account launches (+0.7%). It aggregates photos of teens pouring champagne on Rolexes. It provokes outrage and envy. It defines the 'Hate-Follow.' *Project X* creates a fantasy of the 'Ultimate Party' destroyed by excess. *Spring Breakers* is filming—the dark side of the flex.",
          "key_manifestations": [
            "Rich Kids of Instagram (Tumblr)",
            "Project X (Film)",
            "Gossip Girl (Finale - The wealth fantasy ends)",
            "Magic Mike (The pursuit of cash)"
          ]
        },
        "2013": {
          "salience_share": 3.2,
          "description": "*The Great Gatsby* releases (+0.7%). Baz Luhrmann turns the critique of wealth into a celebration of it. The parties look like music videos. *The Wolf of Wall Street* does the same for finance fraud. Jordan Belfort becomes a hero to 'Crypto Bros' (future). *The Bling Ring* shows the emptiness of the pursuit.",
          "key_manifestations": [
            "The Great Gatsby (Film)",
            "The Wolf of Wall Street (Film)",
            "The Bling Ring (Film)",
            "Versace by Migos (Brand repetition)"
          ]
        },
        "2014": {
          "salience_share": 3.8,
          "description": "Kim Kardashian *Paper Magazine* 'Break the Internet' cover (+0.6%). The body itself is the luxury asset. Dan Bilzerian becomes an Instagram star, selling a lifestyle of guns, girls, and poker chips. The 'Influencer' economy begins to detach from reality—rented jets for photoshoots.",
          "key_manifestations": [
            "Kim Kardashian Paper Cover",
            "Dan Bilzerian (Instagram fame)",
            "Richie Rich (Netflix reboot - failure)",
            "Gone Girl (The trust fund sociopath)"
          ]
        },
        "2015": {
          "salience_share": 4.5,
          "description": "The 'Succession' archetype begins to form (pre-show). The 'Pharmabro' Martin Shkreli buys the Wu-Tang album. He is the villain of excess. DJ Khaled on Snapchat ('Major Key') turns success into a meme. He waters his plants and drives his Rolls Royce. It is 'Wholesome Flexing.'",
          "key_manifestations": [
            "Martin Shkreli (The Wu-Tang Album)",
            "DJ Khaled Snapchat",
            "Empire (TV Series - Hip-hop dynasty)",
            "Billions (TV Series Premiere)"
          ]
        },
        "2016": {
          "salience_share": 5.2,
          "description": "Donald Trump (The Gold Apartment aesthetic) is elected (+0.7%). It is the victory of the 'Rich Guy' brand. The *Fyre Festival* promo video (models on an island) releases, selling a lie of exclusive access. It is the peak of the bubble before the 2017 crash. *Succession* (Pilot filmed) prepares to deconstruct this entire era.",
          "key_manifestations": [
            "Trump Tower Aesthetic (Political power)",
            "Fyre Festival Promo Video",
            "Anna Delvey (Scamming in NYC - active)",
            "The Crown (Royal wealth porn)"
          ]
        }
      }
    }
  }
} as const;

const adolescencePreset: PresetConfig = {
  id: 'millennial_adolescence',
  name: 'Millennial Adolescence (1999-2016)',
  description: 'Cultural eigenclusters capturing the mediated adolescence of millennials from Y2K through the post-truth era.',
  startYear: '1999',
  endYear: '2016',
  clusterStart: 1,
  clusterEnd: 69,
  periodicity: 1,
  context: 'Millennial Adolescence',
  model: 'o1-mini',
  cachedResult: adolescenceData
};

export default adolescencePreset;
