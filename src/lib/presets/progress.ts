import { PresetConfig } from './types';

export const progressData = {
  "metadata": {
    "period": "1789-2025",
    "interval": "5 years",
    "cluster_range": "1-10",
    "measurement": "relative cultural variance explained (0-100)",
    "top_20_clusters": [
      "1_mechanized_industrial_scale [\u2197] (14.2%)",
      "2_hydrocarbon_energy_density [\u2197] (11.8%)",
      "3_germ_theory_and_sanitation [\u2197] (8.5%)",
      "4_computational_information_processing [\u2197] (7.9%)",
      "5_electrification_and_grid_infrastructure [\u2197] (7.2%)",
      "6_global_logistical_standardization [\u2197] (6.5%)",
      "7_scientific_institutionalization [\u2192] (5.8%)",
      "8_agricultural_yield_intensification [\u2198] (5.1%)",
      "9_telecommunicative_compression [\u2197] (4.9%)",
      "10_material_science_plasticity [\u2192] (4.2%)",
      "11_democratic_bureaucratic_expansion [\u2197] (3.8%)",
      "12_urban_densification_verticality [\u2192] (3.5%)",
      "13_capital_market_abstraction [\u2197] (3.2%)",
      "14_aerospace_velocity_and_range [\u2198] (2.9%)",
      "15_mass_media_synchronization [\u2198] (2.8%)",
      "16_molecular_genetic_engineering [\u2197] (2.5%)",
      "17_nuclear_atomic_physics [\u2198] (1.9%)",
      "18_pharmaceutical_chemistry [\u2192] (1.6%)",
      "19_secular_rationalist_humanism [\u2198] (1.2%)",
      "20_post_industrial_service_economy [\u2197] (1.0%)"
    ],
    "note": "Aggregated from progress.txt chunks"
  },
  "clusters": {
    "1_mechanized_industrial_scale": {
      "name": "Mechanized Industrial Scale",
      "description": "This eigencluster represents the transition from organic, craft-based production to high-throughput, machine-driven manufacturing. It is not merely technological but a cultural reordering of time, labor, and standardization. It captures the rise of the factory system, the application of thermodynamics to work, the standardization of components, and the philosophical shift toward efficiency and scale as primary virtues. It tracks the 'Great Divergence' where capital accumulation and TFP (Total Factor Productivity) growth decoupled from population constraints.",
      "trajectory": {
        "1789": {
          "salience_share": 4.5,
          "description": "At the onset of this period, the variance is relatively low but building pressure against the agrarian baseline (\u0394v positive). The cultural manifold is dominated by the 'organic economy' of wood and muscle, yet the recent perfection of Watt\u2019s separate condenser (1776) and the application of rotary motion are acting as the primary catalysts. The catalyst here is the nascent realization that heat can be converted into work independent of geography (unlike water wheels). However, the variance is capped by the lack of high-pressure steam technology and the geopolitical chaos of the French Revolution, which temporarily diverted resources from industrial capital formation to military consumption. The 'culture of the machine' is visible in the textile mills of Northern England but has not yet permeated the broader European consciousness.",
          "key_manifestations": [
            "Patent 913: James Watt's specification for the steam engine (1769/1775 extension)",
            "The Iron Bridge in Shropshire (symbol of cast iron architecture)",
            "Jeremy Bentham's 'Introduction to the Principles of Morals and Legislation' (utilitarian efficiency)",
            "Edmund Cartwright's Power Loom designs (early mechanization attempts)"
          ]
        },
        "1794": {
          "salience_share": 5.2,
          "description": "The variance climbs (+0.7%) driven by the trans-Atlantic diffusion of standardization concepts. The pivotal catalyst is Eli Whitney\u2019s cotton gin, which, while agricultural, imposed an industrial logic on raw material processing, radically increasing the feedstock for British mills. This era marks the early separation of 'design' from 'execution,' a precursor to the American System of Manufacturing. In France, the revolutionary government\u2019s push for the metric system (1795) represents a crucial orthogonal support vector: the standardization of measurement necessary for interchangeable parts. The rise in variance reflects the beginning of 'systematic invention' replacing the lone tinkerer model.",
          "key_manifestations": [
            "Eli Whitney's Patent for the Cotton Gin (March 14, 1794)",
            "Establishment of the \u00c9cole Polytechnique (institutionalizing engineering education)",
            "Decree of 18 Germinal, Year III (establishing the Metric System in France)",
            "William Blake's 'Songs of Experience' (cultural reaction against the 'dark Satanic Mills')"
          ]
        },
        "1799": {
          "salience_share": 6.1,
          "description": "Variance accelerates (+0.9%) as the legal and labor frameworks for industrialization harden. The specific catalyst is the enforcement of the Combination Acts in Britain, which prohibited trade unions, effectively treating labor as an abstract, fluid input for the machine rather than a guild-protected status. This represents a surge in the 'commodification of labor' sub-vector. Simultaneously, the expiration of the Boulton & Watt patent allowing for open competition in steam engine design unleashed a wave of high-pressure experimentation. The culture is shifting from protectionist mercantilism toward a raw, output-maximizing industrial capitalism, despite the ongoing Napoleonic Wars creating logistical friction.",
          "key_manifestations": [
            "The Combination Acts of 1799 (An Act to prevent Unlawful Combinations of Workmen)",
            "Philippe Lebon's 'Thermolamp' patent (early gas lighting experiments)",
            "Richard Trevithick's high-pressure steam experiments (pre-locomotive)",
            "Establishment of the Royal Institution of Great Britain (scientific diffusion)"
          ]
        },
        "1804": {
          "salience_share": 7.3,
          "description": "A significant jump in variance (+1.2%) driven by the proof-of-concept for mobile steam power. Trevithick\u2019s Penydarren locomotive acts as the primary catalyst, effectively 'unshackling' the steam engine from stationary factory floors and mining pits. This introduces the concept of 'powered velocity' to the cultural manifold. The variance also feeds on the introduction of the Jacquard loom, which utilized punch cards to control textile patterns\u2014a proto-computational logic entering the industrial process. This moment marks the transition where mechanization moves from enhancing human muscle to replacing human dexterity in complex tasks.",
          "key_manifestations": [
            "Richard Trevithick's Penydarren locomotive run (February 21, 1804)",
            "Joseph Marie Jacquard's Loom attachment (programmable manufacturing)",
            "The Code Napol\u00e9on (standardizing commercial law across Europe)",
            "Oliver Evans' 'Orukter Amphibolos' (early American steam dredging)"
          ]
        },
        "1809": {
          "salience_share": 8.0,
          "description": "The rate of growth slows slightly (+0.7%) due to the displacing force of the Continental System and the Napoleonic Wars' peak, which severed supply chains and dampened capital investment in new machinery. However, the internal pressure continues to build through 'necessity-driven innovation.' The blockade forced continental powers to develop domestic industries (e.g., beet sugar processing) to replace colonial imports, inadvertently spreading industrial capacity outside Britain. The cultural reaction is visible in the Luddite movement's nascent stages\u2014the realization that the machine is a competitor, not just a tool.",
          "key_manifestations": [
            "Pall Mall, London becoming the first gas-lit street (Winsor's demonstration)",
            "Nicolas Appert's 'L'Art de conserver les substances animales et v\u00e9g\u00e9tales' (industrial canning)",
            "Decree of the Continental System (forcing autarkic industrialization)",
            "Byron's maiden speech in the House of Lords (defending frame-breakers)"
          ]
        },
        "1814": {
          "salience_share": 9.4,
          "description": "Variance surges (+1.4%) as the 'steam press' revolutionizes the information substrate of the era. The catalyst is Friedrich Koenig\u2019s steam-powered printing press adopted by The Times, which increased impression rates by an order of magnitude. This decoupled information dissemination from the physical speed of the human hand, creating a feedback loop where technical knowledge could spread faster. Additionally, George Stephenson\u2019s early locomotive work ('Bl\u00fccher') signaled the impending railway age. The cultural manifold is now internalizing 'mechanical speed' as a baseline expectation for both travel and news.",
          "key_manifestations": [
            "The Times (London) issue of November 29, 1814 (first steam-printed newspaper)",
            "George Stephenson's 'Bl\u00fccher' locomotive debut",
            "Francis Lowell's Waltham Cotton Mill (first integrated mill in the USA)",
            "Publication of 'A Treatise on the Wealth, Power, and Resources of the British Empire' (Colquhoun)"
          ]
        },
        "1819": {
          "salience_share": 10.8,
          "description": "Post-war stabilization allows for a massive injection of capital into infrastructure, driving variance up (+1.4%). The catalyst is the launch of the SS Savannah, the first steamship to cross the Atlantic (albeit partially under sail), collapsing the perceived distance of the globe. This era sees the formalization of 'civil engineering' as a distinct discipline from military engineering, represented by the founding of the Institution of Civil Engineers. The 'Peterloo Massacre' serves as a grim counter-indicator, highlighting the intense friction generated by the industrial concentration of populations in urban centers ill-equipped for them.",
          "key_manifestations": [
            "Voyage of the SS Savannah (hybrid steam/sail Atlantic crossing)",
            "Founding of the Institution of Civil Engineers (London)",
            "The Factory Act of 1819 (early attempt to regulate child labor in cotton mills)",
            "Macadamization of roads (John Loudon McAdam's 'Remarks on the Present System of Road Making')"
          ]
        },
        "1824": {
          "salience_share": 12.5,
          "description": "A pivotal surge (+1.7%) marking the dawn of the Railway Age. The catalyst is the Stockton and Darlington Railway Act, enabling the first public railway to use steam locomotives. This represents the 'network effect' entering the industrial cluster; isolated factories are being linked into a unified metabolic system. Furthermore, Sadi Carnot\u2019s Reflections on the Motive Power of Fire lays the theoretical thermodynamics foundation, moving engine design from empirical tinkering to scientific optimization. The legalization of labor unions (repeal of Combination Acts) signals the institutionalization of the industrial class conflict.",
          "key_manifestations": [
            "Sadi Carnot's 'R\u00e9flexions sur la puissance motrice du feu' (Thermodynamics)",
            "Joseph Aspdin's patent for Portland Cement (material science foundation)",
            "Stockton and Darlington Railway Act 1823/1824",
            "Repeal of the Combination Acts (Britain)"
          ]
        },
        "1829": {
          "salience_share": 15.1,
          "description": "The variance spikes dramatically (+2.6%) due to the 'Rainhill Trials', a singular event that cemented the supremacy of the steam locomotive (specifically Stephenson's Rocket) over stationary engines or horse-drawn rail. This is a phase transition in the cluster: the debate over whether to mechanize transport ends, and the race to build networks begins. This period also sees the perfection of the Neilson hot blast process in iron smelting, which drastically reduced fuel consumption and cheapened iron, the 'skeleton' material of the industrial age. The cultural psyche is now grappling with the 'annihilation of space and time.'",
          "key_manifestations": [
            "The Rainhill Trials (Victory of Stephenson's Rocket)",
            "James Neilson's Patent for the Hot Blast process",
            "Louis Braille's development of the tactile writing system (informational accessibility)",
            "George Stephenson's 'Liverpool and Manchester Railway' opening"
          ]
        },
        "1834": {
          "salience_share": 16.8,
          "description": "Growth continues (+1.7%) but shifts from pure kinetic innovation to the 'logic of administration.' The catalyst is Charles Babbage\u2019s 'Analytical Engine' conceptualization (though unbuilt) and his publication On the Economy of Machinery and Manufactures. Babbage formalized the division of labor (Babbage Principle) and hinted that mental labor could be mechanized just as physical labor had been. Meanwhile, the Cyrus McCormick reaper patent in the US signals the industrialization of the biological substrate (agriculture), threatening to displace the agrarian labor force that feeds the factories.",
          "key_manifestations": [
            "Charles Babbage's 'On the Economy of Machinery and Manufactures'",
            "Cyrus McCormick's Patent for the Mechanical Reaper",
            "The Poor Law Amendment Act 1834 (creating the Workhouse system)",
            "Report on the Commercial Relations between France and Great Britain (Bowring/Villiers)"
          ]
        },
        "1839": {
          "salience_share": 19.2,
          "description": "Variance surges (+2.4%) driven by the convergence of steam transport and the visual capture of reality. The catalyst is the 'daguerreotype', which mechanized the production of images, paralleling the mechanization of goods. Simultaneously, the launch of the SS Great Western regular steam service effectively shrinks the Atlantic to a schedule rather than an adventure. The invention of the steam hammer by James Nasmyth allows for the manipulation of massive iron components (like shafts for these giant steamships), scaling up the 'size of the possible.' The industrial cluster is now altering human perception (photography) and global connectivity.",
          "key_manifestations": [
            "Fran\u00e7ois Arago's presentation of the Daguerreotype to the French Academy",
            "James Nasmyth's design for the Steam Hammer",
            "Charles Goodyear's vulcanization of rubber (material plasticity)",
            "Voyage of the SS Great Western (establishing regular steam service)"
          ]
        },
        "1844": {
          "salience_share": 22.0,
          "description": "A massive inflection point (+2.8%) as the 'nervous system' of the industrial beast is installed. The catalyst is Samuel Morse\u2019s 'What hath God wrought' telegram, decoupling communication speed from transportation speed entirely. This allows for real-time coordination of markets and rail networks, essential for the scaling of industrial logistics. In parallel, the Bank Charter Act of 1844 in Britain tethers the money supply to gold but formalizes the central bank's role, creating the monetary stability required for massive capital-intensive infrastructure projects. Friedrich Engels' analysis of Manchester provides the first systemic critique of the new urban industrial topology.",
          "key_manifestations": [
            "Morse's first long-distance telegraph message (Washington to Baltimore)",
            "Friedrich Engels' 'The Condition of the Working Class in England'",
            "The Bank Charter Act of 1844 (Peel's Banking Act)",
            "Karl Ernst von Baer's work on embryology (scientific professionalization context)"
          ]
        },
        "1849": {
          "salience_share": 24.5,
          "description": "The variance rises (+2.5%) as the revolutions of 1848 settle into a realization that industrial capitalism is the dominant order. The catalyst here is the repeal of the Corn Laws (completed 1846/49 impact), which signifies the victory of industrial capital (cheap food for workers, free trade) over landed aristocracy. This aligns the geopolitical incentives of the British Empire with global market access. The Crystal Palace is being planned, symbolizing the upcoming peak of this first industrial wave. The 'Gold Rush' in California acts as an exogenous shock, flooding the global system with liquidity and demanding rapid transit (clippers, steam) to the Pacific.",
          "key_manifestations": [
            "Repeal of the Navigation Acts (opening British trade)",
            "Construction of the Britannia Tubular Bridge (Stephenson's structural engineering)",
            "Setup of the 'Associated Press' (telegraphic news consolidation)",
            "Dickens' 'David Copperfield' (depicting the industrial social strata)"
          ]
        },
        "1854": {
          "salience_share": 27.2,
          "description": "Variance surges (+2.7%) as the material constraints of the industrial age are shattered by the Bessemer Process. The catalyst is Henry Bessemer\u2019s patent for mass-producing steel from molten pig iron, drastically reducing the cost and time of production compared to wrought iron. This is a singularity for the cluster: 'steel' replaces 'iron' as the skeleton of civilization, allowing for higher pressure boilers (more powerful engines), longer rails, and taller structures. Simultaneously, the Crystal Palace Exhibition's influence has fully permeated, shifting cultural aesthetics toward 'functionalism.' The Crimean War acts as an accelerator, showcasing the logistical necessity of industrial supply chains (and their failures), prompting the first modern medical-industrial interventions by Nightingale.",
          "key_manifestations": [
            "Henry Bessemer's Patent No. 2321 (Manufacture of Iron and Steel)",
            "Construction of the Great Western Railway's Paddington Station (Brunel)",
            "Elisha Otis's demonstration of the safety elevator (vertical industrialization)",
            "Florence Nightingale's statistical diagrams (industrial logic applied to health)"
          ]
        },
        "1859": {
          "salience_share": 30.1,
          "description": "The curve steepens (+2.9%) as the energy density limit is breached. The catalyst is the drilling of the Drake Well in Pennsylvania, which marks the transition from whale oil/animal fats to subterranean hydrocarbons as the lubricant and illuminant of the machine age. While coal powers the boilers, petroleum begins its ascent as the blood of the industrial organism. Intellectually, Darwin\u2019s *Origin of Species* introduces a 'mechanism' for biology, aligning the natural world with the industrial zeitgeist of competitive efficiency and gradual improvement. The launch of the *Great Eastern*\u2014a ship five times larger than any other\u2014demonstrates the sheer hubris and capability of scaled engineering.",
          "key_manifestations": [
            "Colonel Drake's Oil Well in Titusville, Pennsylvania",
            "Charles Darwin's 'On the Origin of Species' (natural selection as mechanism)",
            "Launch of the SS Great Eastern (Brunel's Leviathan)",
            "John Stuart Mill's 'On Liberty' (industrial individualism)"
          ]
        },
        "1864": {
          "salience_share": 33.5,
          "description": "A massive spike (+3.4%) driven by the 'Total War' of the American Civil War, which acts as a grim hothouse for industrial scaling. The Union\u2019s victory is largely attributed to its superior manufacturing capacity and logistical network (railways), proving that industrial scale is now the primary determinant of geopolitical power. This period sees the standardization of clothing sizes (for soldier uniforms) and the widespread use of canned food, embedding mass-production logic into the human biological baseline. In Europe, the founding of the International Workingmen's Association (First International) signals that the 'industrial class' is becoming a self-aware political entity, reacting to the commodification of their lives.",
          "key_manifestations": [
            "The founding of the International Workingmen's Association (London)",
            "Establishment of the Union Pacific Railroad (Pacific Railway Act execution)",
            "Louis Pasteur's work on pasteurization (industrial preservation)",
            "Jules Verne's 'Journey to the Center of the Earth' (scientific industrial romance)"
          ]
        },
        "1869": {
          "salience_share": 36.8,
          "description": "The variance reaches a local peak (+3.3%) with the completion of two planetary-scale engineering projects: the Transcontinental Railroad and the Suez Canal. These events represent the 'closure of the globe'\u2014logistical friction is reduced to such a degree that a single global market for industrial goods becomes theoretically possible. The catalyst is the application of dynamite (Nobel\u2019s patent) to civil engineering, allowing the landscape itself to be reshaped for the machine. The cultural impact is a sense of shrinking time and space, famously captured in fiction. However, the 'Knights of Labor' founding indicates growing friction between the scaling machinery and the human operators.",
          "key_manifestations": [
            "Completion of the First Transcontinental Railroad (Golden Spike)",
            "Opening of the Suez Canal (global maritime shortcut)",
            "Alfred Nobel's Patent for Dynamite",
            "Mark Twain's 'The Innocents Abroad' (industrial tourism)"
          ]
        },
        "1874": {
          "salience_share": 35.2,
          "description": "A retraction (-1.6%) as the cluster faces its first major systemic crisis: the Panic of 1873. The 'Long Depression' begins, revealing the volatility inherent in industrial capitalism's boom-bust cycles. Overproduction and railroad speculation act as displacing forces, causing a cultural re-evaluation of unfettered growth. However, this contraction forces a consolidation of industry\u2014the birth of the 'Trust' or cartel\u2014to manage prices and production. Efficiency (doing more with less) becomes the survival mechanism. The introduction of the Remington No. 1 typewriter signals the mechanization of office work, expanding the industrial logic from the factory floor to the administrative desk.",
          "key_manifestations": [
            "The Panic of 1873 (triggering the Long Depression)",
            "Introduction of the Sholes and Glidden typewriter (Remington)",
            "Impressionist Exhibition of 1874 (cultural reaction to industrial realism)",
            "Hardy's 'Far from the Madding Crowd' (pastoral nostalgia)"
          ]
        },
        "1879": {
          "salience_share": 37.0,
          "description": "Variance rebounds (+1.8%) fueled by the dawn of the electrical age, though initially as a lighting utility for industry. The catalyst is Edison\u2019s practical incandescent light bulb, which effectively 'conquers the night,' allowing factories to operate on 24-hour shifts and severing the link between solar cycles and economic productivity. This intensifies the capital utilization rate of machinery. In Germany, Bismarck\u2019s protectionist 'Iron and Rye' alliance and social insurance legislation represent the state stepping in to manage the friction of industrial society, creating the first modern welfare state as a lubricant for the machine.",
          "key_manifestations": [
            "Thomas Edison's successful incandescent light bulb test",
            "Henry George's 'Progress and Poverty' (critique of industrial inequality)",
            "Bismarck's Tariff of 1879 (protectionist industrial policy)",
            "Ibsen's 'A Doll's House' (critique of bourgeois industrial family norms)"
          ]
        },
        "1884": {
          "salience_share": 39.5,
          "description": "Growth continues (+2.5%) as the geopolitical sphere is industrialized via the 'Scramble for Africa.' The Berlin Conference acts as the catalyst, where European powers apply a grid of administrative logic to the African continent, driven by the desperate need for raw materials (rubber, copper, oil) to feed the domestic industrial furnaces. Maxim\u2019s machine gun invention (1884) industrializes lethality, using the energy of the recoil to power the next cycle, a perfect metaphor for the era\u2019s self-perpetuating violence. The skyscraper emerges in Chicago (Home Insurance Building), applying steel frame logic to real estate density.",
          "key_manifestations": [
            "The Berlin Conference (formalizing the Partition of Africa)",
            "Hiram Maxim's Patent for the fully automatic machine gun",
            "Completion of the Home Insurance Building (Chicago)",
            "Parsons' Steam Turbine patent (revolutionizing power generation)"
          ]
        },
        "1889": {
          "salience_share": 42.1,
          "description": "A symbolic peak (+2.6%) characterized by the triumph of steel and the exposition of empire. The Eiffel Tower serves as the supreme totem of the cluster\u2014a structure with no utility other than to demonstrate the height of industrial capability. It is the 'cathedral of the machine.' This period also sees the formation of the Second International, globalizing the labor movement in lockstep with global capital. The founding of Nintendo (playing cards) and the Wall Street Journal (financial information) in this same window highlights the diversification of the industrial economy into leisure and information management.",
          "key_manifestations": [
            "The Eiffel Tower (Exposition Universelle 1889)",
            "Andrew Carnegie's 'The Gospel of Wealth'",
            "Hollerith's Punch Card Tabulating Machine (US Census 1890 prep)",
            "Founding of the Wall Street Journal (Dow Jones)"
          ]
        },
        "1894": {
          "salience_share": 44.8,
          "description": "Variance surges (+2.7%) as 'Scientific Management' begins to re-engineer the human worker. The catalyst is the early work of Frederick Winslow Taylor, who treats the laborer\u2019s movements as variables in an equation of efficiency. This is the 'software' update for the industrial hardware. The Pullman Strike in the US highlights the totalizing nature of the 'company town,' where the corporation owns the domestic sphere of the worker. Meanwhile, the Sino-Japanese War demonstrates the rapid industrialization of Japan, proving that the 'Mechanized Industrial Scale' cluster is not culturally specific to the West but a universalizing technology.",
          "key_manifestations": [
            "Frederick Winslow Taylor's early time-motion studies",
            "The Pullman Strike (crisis of paternalistic capitalism)",
            "Rudyard Kipling's 'The Jungle Book' (imperial nature vs. civilization)",
            "Start of the First Sino-Japanese War (industrialized warfare in Asia)"
          ]
        },
        "1899": {
          "salience_share": 46.5,
          "description": "The cluster continues to ascend (+1.7%) as it absorbs the 'communication' vector. Marconi\u2019s wireless telegraphy (crossing the Channel) is the catalyst, suggesting that the industrial nervous system can transcend physical wires. This period is the apex of the 'Gilded Age' in the US, where industrial trusts (Standard Oil, US Steel forming soon) achieve variances of wealth previously unimaginable. Veblen\u2019s *Theory of the Leisure Class* diagnoses the cultural output of this wealth: 'conspicuous consumption,' a phenomenon only possible in a society of massive industrial surplus.",
          "key_manifestations": [
            "Thorstein Veblen's 'The Theory of the Leisure Class'",
            "Marconi's transmission across the English Channel",
            "The Hague Convention of 1899 (attempt to regulate industrial war)",
            "Joseph Conrad's 'Heart of Darkness' (the dark underbelly of resource extraction)"
          ]
        },
        "1904": {
          "salience_share": 49.2,
          "description": "A critical inflection point (+2.7%) marking the dawn of the automotive and aviation age. The catalyst is not just the Wright Brothers (1903) but the founding of the Ford Motor Company and the preparation for the Model T. This signifies the move from 'heavy industry' (rails/steel) to 'consumer durable industry.' The machine is coming to the driveway. The cultural manifold is obsessed with 'dynamics' and 'speed,' visible in the emerging Futurist art movement. The Russo-Japanese War acts as a shock, being the first modern war where a non-Western power defeats a Western one using superior industrial logistics and naval technology.",
          "key_manifestations": [
            "The Wright Flyer's patent application (Flying Machine)",
            "Establishment of the Ford Motor Company",
            "Max Weber's 'The Protestant Ethic and the Spirit of Capitalism'",
            "Battle of Port Arthur (modern naval warfare)"
          ]
        },
        "1909": {
          "salience_share": 53.0,
          "description": "The variance rockets (+3.8%) with the introduction of the moving assembly line. The catalyst is the Ford Model T (1908/09 ramp up), which standardizes the product to such an extreme ('any color as long as it's black') that the cost curve collapses, democratizing mobility. This is the birth of 'Fordism': mass production linked to mass consumption. In chemistry, the Haber-Bosch process (1909) is demonstrated, industrializing the nitrogen cycle. This is arguably the most significant invention of the century, detaching human population limits from natural soil fertility, allowing the industrial cluster to scale the human biomass itself.",
          "key_manifestations": [
            "Henry Ford's implementation of the moving assembly line",
            "Fritz Haber's synthesis of ammonia (Haber-Bosch process)",
            "Marinetti's 'Futurist Manifesto' (glorification of speed and industry)",
            "Leo Baekeland's patent for Bakelite (the first synthetic plastic)"
          ]
        },
        "1914": {
          "salience_share": 58.5,
          "description": "The cluster reaches a horrific maxima (+5.5%) as the 'Machine' is turned toward slaughter. The catalyst is the outbreak of World War I, the first fully industrialized conflict. The variance is driven by the total mobilization of national economies; the state effectively merges with industry to maximize shell production. The 'War of Attrition' is an industrial logic: victory belongs to the side with the higher manufacturing throughput and deeper resource reserves. Culturally, this shatters the 19th-century optimism of the cluster, revealing the 'Iron Cage' of rationality as a death trap. The opening of the Panama Canal completes the global logistical circuit commenced at Suez.",
          "key_manifestations": [
            "The Mobilization of the European Powers (August 1914)",
            "Opening of the Panama Canal",
            "Marcel Duchamp's 'Bicycle Wheel' (Dadaist reaction to industrial logic)",
            "Establishment of the War Industries Board (later US implementation)"
          ]
        },
        "1919": {
          "salience_share": 55.2,
          "description": "A retraction from the war peak (-3.3%) but a consolidation of its lessons. The displacing force is the post-war economic dislocation and the demobilization of the war machine. However, the 'rationalization' movement takes hold. The catalyst is the founding of the Bauhaus in Weimar, which seeks to unify art, craft, and mass production\u2014accepting the machine as the primary medium of the age. The Treaty of Versailles attempts to redistribute industrial capacity (coal/steel in the Ruhr), acknowledging that industrial assets are the true currency of sovereignty. The Red Summer in the US and global labor unrest highlight the friction of demobilized industrial manpower.",
          "key_manifestations": [
            "Founding of the Bauhaus School (Walter Gropius)",
            "Treaty of Versailles (Articles on the Saar Basin and Reparations)",
            "John Maynard Keynes' 'The Economic Consequences of the Peace'",
            "Ernest Rutherford's transmutation of nitrogen (splitting the atom)"
          ]
        },
        "1924": {
          "salience_share": 57.8,
          "description": "Variance climbs again (+2.6%) as the 'Roaring Twenties' consumer boom takes hold, powered by the electrification of the household and the ubiquity of the automobile. The catalyst is the invention of 'Consumer Credit' (installment plans), allowing the working class to purchase the industrial surplus they produce. This closes the loop of Fordism. The 'River Rouge' complex is completed, the ultimate vertical integration where raw ore enters one end and cars exit the other. Culturally, 'Art Deco' celebrates the geometric precision of the machine. In Russia, the death of Lenin leads to Stalin's rise and the impending 'Five Year Plans,' which aim to force-march an agrarian society into the industrial cluster.",
          "key_manifestations": [
            "General Motors' 'Sloanism' (annual model changes and market segmentation)",
            "Andr\u00e9 Breton's 'Surrealist Manifesto' (reaction against rationalism)",
            "Establishment of the Cartel des Gauches (French politics)",
            "Exhibition of the omnipotent 'River Rouge' plant complex"
          ]
        },
        "1929": {
          "salience_share": 54.0,
          "description": "A sharp drop (-3.8%) as the system seizes up in the Great Depression. The displacing force is the crisis of overproduction and underconsumption; the industrial machine became too efficient for the available liquidity to absorb its output. The stock market crash is merely the symptom of this deeper decoupling. However, the cultural variance remains high as society desperately seeks a 'technocratic' solution. The 'Soviet Experiment' (First Five-Year Plan) gains variance as a counter-model, appearing immune to the capitalist business cycle through hyper-industrialization commanded by the state. The 'International Style' in architecture cements the aesthetic of glass and steel.",
          "key_manifestations": [
            "The Wall Street Crash of 1929",
            "Stalin's First Five-Year Plan (forced industrialization)",
            "Erich Maria Remarque's 'All Quiet on the Western Front' (anti-war industrial critique)",
            "Mies van der Rohe's Barcelona Pavilion (Modernist industrial aesthetic)"
          ]
        },
        "1934": {
          "salience_share": 56.5,
          "description": "Variance rebounds (+2.5%) as the State takes the helm of the industrial machine. The catalyst is the 'New Deal' in the US and Fascist rearmament in Europe. Both represent the 'planned economy' utilizing industrial scale for public works (TVA dams) or military buildup. The Tennessee Valley Authority is a prime example of 'high modernism'\u2014using massive hydroelectric infrastructure to modernize a backward region. In Germany, the Autobahn project begins, merging the landscape with the logic of the automobile. The 'streamlining' aesthetic in design (trains, toasters) reflects a cultural obsession with reducing friction.",
          "key_manifestations": [
            "Tennessee Valley Authority Act (regional industrial planning)",
            "Leni Riefenstahl's 'Triumph of the Will' (aestheticization of organized power)",
            "Chrysler Airflow (streamline design)",
            "The Long March in China (movement toward a new industrial order)"
          ]
        },
        "1939": {
          "salience_share": 62.0,
          "description": "The cluster surges to its historical absolute maximum (+5.5%). The catalyst is the outbreak of World War II, which is entirely determined by 'industrial potential.' The variance is explained by the total sublimation of all cultural, economic, and scientific activity into the production of war materiel. The 'Arsenal of Democracy' speech by FDR outlines this explicitly. Nylon (invented 1935, marketed 1939) replaces silk, demonstrating the ability of industrial chemistry to replace natural materials entirely. The first jet aircraft (Heinkel He 178) flies, signaling the next leap in velocity. Culture is homogenized into propaganda and production targets.",
          "key_manifestations": [
            "FDR's 'Arsenal of Democracy' radio broadcast (slogan for the era)",
            "DuPont's commercial release of Nylon stockings",
            "First flight of the Heinkel He 178 (Jet age)",
            "Steinbeck's 'The Grapes of Wrath' (consequences of mechanized agriculture)"
          ]
        },
        "1944": {
          "salience_share": 61.2,
          "description": "Variance holds at the peak (-0.8%) as the industrial output decides the war's outcome. The catalyst is the D-Day invasion, a logistical feat of unprecedented complexity (Mulberry harbours, PLUTO pipeline). The Bretton Woods Conference establishes the financial architecture (IMF, World Bank) to manage the post-war industrial global economy, ensuring that the trade frictions of the 1930s do not return. However, the V-2 rocket attacks on London introduce the 'ballistic' threat\u2014industrial death delivered from the stratosphere. The Manhattan Project represents the ultimate endpoint of the cluster: industrial-scale physics capable of ending the industrial age itself.",
          "key_manifestations": [
            "The Bretton Woods Agreement",
            "Operation Overlord (Logistical peak)",
            "The V-2 Rocket attacks on London",
            "Hayek's 'The Road to Serfdom' (warning against the planned industrial state)"
          ]
        },
        "1949": {
          "salience_share": 58.0,
          "description": "A decline (-3.2%) as the war machine is dismantled, but the 'Pax Americana' industrial order stabilizes. The Marshall Plan is the catalyst, exporting American industrial equipment and consumer culture to rebuild Europe, creating a synchronized transatlantic market. The 'dictatorship of the consumer' begins to replace the 'dictatorship of the state.' George Orwell\u2019s *1984* provides the dark mirror, fearing a permanent war economy. The communist victory in China expands the Soviet-style industrial model to another huge segment of humanity. The first commercial jetliner (Comet) flies, promising to shrink the globe for civilians.",
          "key_manifestations": [
            "The Marshall Plan (European Recovery Program)",
            "George Orwell's '1984' (Industrial totalitarianism)",
            "De Havilland Comet first flight",
            "Simone de Beauvoir's 'The Second Sex' (analyzing women's role in the new order)"
          ]
        },
        "1954": {
          "salience_share": 56.5,
          "description": "Variance stabilizes (-1.5%) as the cluster matures into the background of daily life. The catalyst is Malcom McLean\u2019s invention of the intermodal shipping container. This seemingly boring metal box reduces the cost of loading ships by 90%, enabling the globalization of manufacturing that will eventually displace Western industry. The Salk Polio Vaccine (1955 rollout) represents the industrial conquest of disease. In the US, the suburban explosion (Levittown) applies assembly-line logic to housing, creating a 'mass culture' of conformity. The 'Organization Man' becomes the dominant social archetype.",
          "key_manifestations": [
            "Malcom McLean's first container ship voyage (SS Ideal X)",
            "Jonas Salk's Polio Vaccine field trials",
            "William Whyte's 'The Organization Man'",
            "Formation of SEATO (Cold War industrial containment)"
          ]
        },
        "1959": {
          "salience_share": 54.2,
          "description": "The variance begins a slow secular decline (-2.3%) as the 'Post-Industrial' signals emerge, though the absolute output remains colossal. The catalyst is the 'Kitchen Debate' between Nixon and Khrushchev, which framed the Cold War not just as a military industrial contest, but as a delivery mechanism for consumer appliances. The 'Microchip' (integrated circuit) is invented at Fairchild Semiconductor, quietly signaling the future displacement of 'scale' by 'density' (Moore's Law). However, the opening of the St. Lawrence Seaway demonstrates the continued investment in massive physical infrastructure to move heavy matter.",
          "key_manifestations": [
            "The Kitchen Debate (Nixon/Khrushchev in Moscow)",
            "Jean Tinguely's 'Homage to New York' (self-destroying machine performance)",
            "Opening of the St. Lawrence Seaway",
            "C.P. Snow's 'The Two Cultures' (science/industry vs. humanities)"
          ]
        },
        "1964": {
          "salience_share": 51.5,
          "description": "Variance drops (-2.7%) as the cultural narrative shifts from celebrating the machine to fearing its dampening effect on the human spirit. The displacing force is the counter-culture's critique of the 'Technocracy.' Herbert Marcuse\u2019s *One-Dimensional Man* argues that advanced industrial society creates false needs to integrate individuals into the system of production and consumption. The 'Ad Hoc Committee on the Triple Revolution' warns President Johnson of the impending 'cybernation' revolution (early automation anxiety), predicting that industrial machinery will soon render human labor obsolete, breaking the income-through-jobs link.",
          "key_manifestations": [
            "Herbert Marcuse's 'One-Dimensional Man'",
            "The Ad Hoc Committee on the Triple Revolution memorandum",
            "Andy Warhol's 'Brillo Boxes' (mimicking industrial packaging as art)",
            "Introduction of the IBM System/360 (standardizing the corporate mainframe)"
          ]
        },
        "1969": {
          "salience_share": 49.8,
          "description": "A symbolic resurgence followed by a crash (-1.7%). The Apollo 11 Moon Landing acts as the absolute zenith of the 'Mechanized Industrial Scale' cluster\u2014the greatest engineering feat in history, achieved through brute force chemical rocketry and massive state coordination. However, immediately post-landing, the cultural energy dissipates. The displacing force is the 'Rust Belt' phenomenon beginning to appear; US steel production peaks and begins its long decline. The Cuyahoga River fire serves as a visceral catalyst for the environmental movement, framing industry not as a provider of goods, but a producer of toxins.",
          "key_manifestations": [
            "Apollo 11 Moon Landing (Saturn V as peak industrial artifact)",
            "The Cuyahoga River Fire (Cleveland)",
            "The Internet's precursor (ARPANET) first login (shifting the frontier)",
            "Kurt Vonnegut's 'Slaughterhouse-Five' (anti-war/anti-machine determinism)"
          ]
        },
        "1974": {
          "salience_share": 45.2,
          "description": "A sharp decline (-4.6%) driven by the 1973 Oil Shock, which exposed the fragility of the energy-intensive industrial model. The catalyst is the OPEC embargo, which ended the era of cheap energy that underpinned Fordist mass production. Suddenly, 'efficiency' (MPG) mattered more than 'scale' (horsepower). Daniel Bell\u2019s *The Coming of Post-Industrial Society* formalizes the intellectual transition: the axis of society is shifting from manufacturing goods to generating knowledge. The Sears Tower is completed, standing as a tombstone for the era of American heavy dominance just as the economy stagnates.",
          "key_manifestations": [
            "Daniel Bell's 'The Coming of Post-Industrial Society'",
            "Completion of the Sears Tower (Chicago)",
            "E.F. Schumacher's 'Small Is Beautiful' (economics as if people mattered)",
            "Volkswagen Golf Mk1 production (shift to efficiency)"
          ]
        },
        "1979": {
          "salience_share": 41.5,
          "description": "Variance erodes further (-3.7%) as the 'Volcker Shock' raises interest rates to crush inflation, inadvertently crushing the capital-intensive manufacturing sector. The displacing force is the rapid industrialization of the 'Asian Tigers' and Japan, which are out-competing the West using superior quality control (Deming/Lean) rather than just brute scale. The Three Mile Island accident cripples the nuclear industry, foreclosing the 'too cheap to meter' energy future. Culturally, the 'punk' movement aestheticizes the decay of the industrial urban landscape.",
          "key_manifestations": [
            "The Three Mile Island accident",
            "Paul Volcker's 'Saturday Night Special' (interest rate hike)",
            "Sony Walkman release (personalization of tech, moving away from mass broadcast)",
            "Ridley Scott's 'Alien' (the 'Nostromo' as a gritty industrial refinery in space)"
          ]
        },
        "1984": {
          "salience_share": 38.0,
          "description": "The cluster stabilizes at a lower level (-3.5%) as the 'Service Economy' takes the lead. The catalyst is the 1984 Apple Macintosh Super Bowl commercial, which explicitly positions the 'personal computer' (creative, individual) against the 'industrial mainframe' (conformist, Orwellian). The Union Carbide disaster in Bhopal acts as a horrific reminder of the externalized costs of Western industrial chemistry outsourced to the developing world. In the UK, the Miners' Strike represents the last stand of the traditional industrial working class against the financialization of the economy.",
          "key_manifestations": [
            "Apple's '1984' Commercial (directed by Ridley Scott)",
            "Bhopal Gas Tragedy (Union Carbide)",
            "The UK Miners' Strike (1984-1985)",
            "William Gibson's 'Neuromancer' (cyberspace replacing physical space)"
          ]
        },
        "1989": {
          "salience_share": 35.2,
          "description": "Variance drops (-2.8%) with the collapse of the Soviet Union, the ultimate 'command industrial' state. The fall of the Berlin Wall signifies that the model of state-directed heavy industry could not compete with the agile, information-rich capitalism of the West. However, the rise of the 'Maquiladora' program and global supply chains indicates that industry isn't dying, but becoming 'modular' and 'distributed.' The Exxon Valdez spill reinforces the negative environmental narrative of the hydrocarbon-industrial complex.",
          "key_manifestations": [
            "Fall of the Berlin Wall (failure of the command economy)",
            "Exxon Valdez oil spill",
            "Francis Fukuyama's 'The End of History?' (liberal democracy vs. industrial planning)",
            "SimCity release (gamifying urban industrial planning)"
          ]
        },
        "1994": {
          "salience_share": 32.5,
          "description": "A structural shift (-2.7%) as the WTO and NAFTA frameworks facilitate the 'Great Offshoring.' The catalyst is the signing of NAFTA, which legally unbundles the geography of production from the geography of consumption. This hollows out the American middle class's connection to this cluster, turning 'industry' into something that happens 'elsewhere.' Amazon.com is founded, signaling that the future of logistics is not about moving pallets to stores, but moving parcels to homes, governed by algorithms rather than foremen.",
          "key_manifestations": [
            "Implementation of NAFTA (North American Free Trade Agreement)",
            "Founding of Amazon.com (Cadabra)",
            "Opening of the Channel Tunnel (physical connection of UK/Europe)",
            "Rem Koolhaas's 'S,M,L,XL' (architecture reflecting global scale)"
          ]
        },
        "1999": {
          "salience_share": 29.8,
          "description": "The variance dips below 30% (-2.7%) as the 'Dot Com' bubble sucks all cultural oxygen and capital. The 'New Economy' narrative declares the death of the business cycle and the irrelevance of physical assets. However, in the background, the catalyst for the next phase is China's preparation for WTO entry. This creates the 'China Price'\u2014a deflationary force on all manufactured goods. The film *The Matrix* captures the zeitgeist: the physical world (industry) is a grim, scorched reality, while the mind lives in a digital simulation.",
          "key_manifestations": [
            "The Matrix (film)",
            "Repeal of Glass-Steagall (financialization overtaking industrial banking)",
            "Protests at the WTO Ministerial Conference of 1999 (Seattle)",
            "Kevin Ashton coining 'Internet of Things' (supply chain tracking)"
          ]
        },
        "2004": {
          "salience_share": 31.0,
          "description": "A slight rebound (+1.2%) driven by the commodities super-cycle. The catalyst is China's insatiable appetite for raw materials (steel, concrete, copper) as it undergoes the largest urbanization event in human history. This is 'Industrial Revolution 2.0' but compressed into a decade. While the West is 'post-industrial,' the global system is more industrial than ever. The 'Containerization' of the world is complete; 90% of non-bulk cargo moves by box. *The Box* by Marc Levinson (published shortly after) retrospectively analyzes this silent revolution.",
          "key_manifestations": [
            "Construction of the Three Gorges Dam (nearing completion)",
            "Burj Khalifa construction begins (new scale of verticality)",
            "Google's IPO (indexing the information about the physical world)",
            "Jared Diamond's 'Collapse' (societal durability vs. resource management)"
          ]
        },
        "2009": {
          "salience_share": 27.5,
          "description": "A sharp drop (-3.5%) due to the Global Financial Crisis, which originated in the housing sector but devastated the real economy. The GM Bankruptcy is the symbolic nadir of American industrial might\u2014the company that once defined the nation ('What's good for GM...') requires a state bailout to survive. The displacing force is the realization that 'financial engineering' had completely decoupled from 'industrial engineering.' However, the release of the iPhone (2007) and App Store (2008) cements the shift: value is now in the software ecosystem, not the hardware chassis.",
          "key_manifestations": [
            "General Motors Chapter 11 reorganization",
            "Satoshi Nakamoto's Bitcoin Whitepaper (industrializing trust via computation)",
            "James Cameron's 'Avatar' (critique of extractionism)",
            "High-Speed Rail investment in China (stimulus via infrastructure)"
          ]
        },
        "2014": {
          "salience_share": 25.2,
          "description": "Variance declines (-2.3%) but transforms via 'Industry 4.0.' The catalyst is the integration of cyber-physical systems\u2014sensors, IoT, and AI\u2014into the factory floor. This is 'Smart Manufacturing.' The 'Maker Movement' and desktop 3D printing (Patents expiring) briefly promise a return to decentralized, cottage-style industry, though it fails to displace mass production. Tesla's 'Gigafactory' announcement signals a return to vertical integration, attempting to apply software iteration cycles to heavy manufacturing.",
          "key_manifestations": [
            "Announcement of the Tesla Gigafactory 1 (Nevada)",
            "Thomas Piketty's 'Capital in the Twenty-First Century' (r > g)",
            "Expiration of key FDM 3D printing patents (MakerBot era)",
            "Germany's 'Industry 4.0' strategic initiative launch"
          ]
        },
        "2019": {
          "salience_share": 24.0,
          "description": "Stasis (-1.2%) as the system faces the 'Supply Chain Shock.' The US-China Trade War acts as a catalyst for 'de-coupling,' forcing corporations to audit their physical dependencies for the first time in decades. The realization hits that 'Just-in-Time' efficiency lacks resilience. This prepares the ground for the COVID-19 disruptions. The cultural focus shifts to 'Critical Minerals' (Lithium, Cobalt) necessary for the green transition, re-materializing the economy in the public consciousness.",
          "key_manifestations": [
            "US-China Trade War tariffs implementation",
            "Greta Thunberg's 'How Dare You' speech (UN Climate Action Summit)",
            "HBO's 'Chernobyl' miniseries (examination of industrial failure/truth)",
            "Ford Mustang Mach-E reveal (electrification of the muscle car icon)"
          ]
        },
        "2024": {
          "salience_share": 26.5,
          "description": "A notable resurgence (+2.5%) driven by 'Industrial Policy' returning to the West. The catalyst is the CHIPS and Science Act and the Inflation Reduction Act in the US, which inject hundreds of billions into domestic manufacturing. The state is once again picking winners to secure 'strategic autonomy.' This is a rejection of the 1990s 'End of History' free-market consensus. Advances in robotics (humanoids like Optimus) suggest a near-future where the labor constraint in manufacturing is finally solved by automation, potentially allowing industry to scale indefinitely without demographic limits.",
          "key_manifestations": [
            "Implementation of the CHIPS and Science Act (fab construction)",
            "Commercial deployment of Humanoid Robots in logistics (e.g., Agility Robotics)",
            "Expansion of BYD (Chinese EV dominance challenging Western auto)",
            "NVIDIA's 'Earth-2' (digital twin of the planet for industrial simulation)"
          ]
        }
      }
    },
    "2_hydrocarbon_energy_density": {
      "name": "Hydrocarbon Energy Density",
      "description": "This eigencluster represents the unlocking of chemically stored solar energy (fossil fuels) to overcome the Malthusian energy constraints of the organic economy. It is the master variable for the period's economic growth. It tracks the progression from solids (Coal) to liquids (Oil) to gases (Natural Gas) and the mastery of their combustion. It encompasses the geopolitical scramble for resources, the chemical transformation of these materials into the synthetic world (plastics, fertilizers), and the eventual existential confrontation with their atmospheric waste products (CO2).",
      "trajectory": {
        "1789": {
          "salience_share": 3.5,
          "description": "At the start of the period, the variance is low but foundational. The primary energy source for civilization is still wood (biomass) and muscle. However, in Britain, the 'Coal' sub-vector is rising rapidly due to deforestation and the needs of the early steam engines (Newcomen/Watt) which are essentially devices to pump water out of coal mines to get more coal. The catalyst is the 'limitation of surface area'\u2014forests cannot grow fast enough to smelt iron. The transition to mineral fuel is a geographic accident that becomes a destiny. Lavoisier's *Elementary Treatise of Chemistry* provides the first modern understanding of combustion (oxygen theory), replacing phlogiston.",
          "key_manifestations": [
            "Antoine Lavoisier's 'Trait\u00e9 \u00c9l\u00e9mentaire de Chimie' (Oxygen theory of combustion)",
            "The Forth and Clyde Canal (built to transport coal)",
            "William Blake's 'Chimney Sweeper' (social cost of coal)",
            "Use of Coke in Iron Smelting (Abraham Darby III's ongoing influence)"
          ]
        },
        "1794": {
          "salience_share": 4.1,
          "description": "Variance creeps up (+0.6%) as coal gasification experiments begin. The catalyst is William Murdoch\u2019s house lighting, proving that coal can provide not just heat, but light. This attacks the 'Tallow/Wax' organic economy. The Whiskey Rebellion in the US highlights the friction of the grain-alcohol fuel economy, while the rapid expansion of canal networks in Britain is almost exclusively dedicated to reducing the friction of moving coal to urban centers. The energy density of coal is allowing cities to grow beyond the support capacity of their immediate surrounding woodlands.",
          "key_manifestations": [
            "William Murdoch's lighting of his house with Coal Gas",
            "The Whiskey Rebellion (taxation of distilled energy)",
            "Canal Mania in the UK (Peak investment)",
            "Erasmus Darwin's 'Zoonomia' (speculating on life's energy)"
          ]
        },
        "1799": {
          "salience_share": 4.8,
          "description": "Growth continues (+0.7%) as the 'Smoke Nuisance' becomes a recognized urban phenomenon in London, signaling the scale of combustion. The catalyst is the expiration of Watt's patents, which unleashes a proliferation of less efficient but cheaper steam engines, consuming vastly more coal. Philippe Lebon in France patents the 'Thermolamp,' attempting to distill wood for gas, but coal's superior energy density makes it the inevitable winner. The concept of the 'carboniferous' begins to take hold in geology\u2014the realization that we are burning the buried past.",
          "key_manifestations": [
            "Philippe Lebon's 'Thermolamp' patent",
            "Humboldt's travels to the Americas (cataloging resources)",
            "Founding of the Royal Institution (Rumford's heat studies)",
            "Coleridge's 'The Rime of the Ancient Mariner' (nature vs. man)"
          ]
        },
        "1804": {
          "salience_share": 5.5,
          "description": "Variance rises (+0.7%) with the dawn of high-pressure steam. Trevithick\u2019s engines require higher quality coal and generate more power per unit of weight, incentivizing the extraction of anthracite. The Louisiana Purchase (1803/04) opens up a massive hydrocarbon reserve (though unknown at the time) to the US. In London, the first public demonstration of gas lighting (Winsor) creates a sensation\u2014the 'Artificial Sun.' This marks the beginning of the end for the night as a constraint on human activity.",
          "key_manifestations": [
            "Frederick Winsor's Gas Light demonstration at the Lyceum Theatre",
            "The Louisiana Purchase (territorial expansion)",
            "Richard Trevithick's High Pressure Steam Engine",
            "Dalton's Atomic Theory (understanding the chemical basis of matter)"
          ]
        },
        "1809": {
          "salience_share": 6.2,
          "description": "A steady increase (+0.7%). The Chartered Gas Light and Coke Company is established in London, the first public utility company in history. The catalyst is the parliamentary approval to tear up streets to lay gas pipes\u2014a 'venous system' for hydrocarbons beneath the city. This institutionalizes the dependency on centralized energy distribution. The Continental System forces Europe to look for alternatives to British coal, stimulating the mining of the Ruhr and Silesia, spreading the 'Black Country' model to the continent.",
          "key_manifestations": [
            "Incorporation of the Gas Light and Coke Company (London)",
            "Development of the Safety Lamp (early Davy experiments)",
            "Goethe's 'Faust, Part One' (striving for power over nature)",
            "Cuvier's work on extinction (stratigraphy and fossil records)"
          ]
        },
        "1814": {
          "salience_share": 7.1,
          "description": "Variance accelerates (+0.9%) as gas lighting goes viral in urban centers. The catalyst is the successful lighting of Westminster Bridge, a highly visible public proof. The 'Davy Lamp' (invented 1815, research active now) is critical; it allows miners to go deeper into 'fiery' (methane-filled) mines without exploding, unlocking deep-seam coal reserves. This technological fix for a safety problem leads to increased production, not increased safety (Jevons paradox in safety).",
          "key_manifestations": [
            "Humphry Davy's invention of the Miner's Safety Lamp (1815 impact)",
            "Lighting of Westminster Bridge with Gas",
            "George Stephenson's first locomotive (coal hauler)",
            "Smith's 'Strata Identified by Organized Fossils' (mapping the coal measures)"
          ]
        },
        "1819": {
          "salience_share": 8.0,
          "description": "A jump in variance (+0.9%) as steam navigation (Savannah) proves that coal can power mobility across oceans, though the 'coaling station' logistical constraint emerges. The catalyst is the realization that a ship's range is now defined by its bunkers, not the wind. In the US, the whaling industry begins its 'Golden Age' (Pacific expansion), driven by the demand for spermaceti oil for high-quality lighting and lubrication, competing with the rising coal gas industry. This is the peak of the 'biological hydrocarbon' sector before its eventual displacement.",
          "key_manifestations": [
            "Voyage of the SS Savannah",
            "The sinking of the Essex (inspiration for Moby Dick, peak whaling risk)",
            "Oersted's discovery of electromagnetism (energy conversion)",
            "Keats' 'Ode to a Nightingale' (Romantic rejection of the industrial smoke)"
          ]
        },
        "1824": {
          "salience_share": 9.2,
          "description": "Variance increases (+1.2%) with the foundational work of thermodynamics. Carnot\u2019s *Reflections* is the intellectual catalyst: he defines the heat engine's efficiency limit, treating heat (from coal) as a fluid ('caloric') that does work by falling from a high temperature to a low one. This effectively abstracts coal into 'energy.' The completion of the Erie Canal (1825) facilitates the movement of Pennsylvania anthracite to New York, beginning the transition of American cities from wood-burning to coal-burning.",
          "key_manifestations": [
            "Sadi Carnot's 'Reflections on the Motive Power of Fire'",
            "Opening of the Erie Canal (anthracite transport)",
            "Faraday's discovery of Benzene (early hydrocarbon chemistry)",
            "Exploitation of the Shildon coalfield (via Stockton-Darlington rail)"
          ]
        },
        "1829": {
          "salience_share": 10.5,
          "description": "Significant rise (+1.3%). The 'Hot Blast' process (Neilson) reduces the coal needed to smelt iron by two-thirds, ironically causing a boom in coal demand because iron becomes cheap enough to use everywhere (Jevons Paradox). The Rainhill Trials prove that locomotives can sustain high speeds, implying a massive future demand for high-grade coal. The 'Smoke Abatement' committees begin to form in northern English towns, marking the first organized political reaction to the carbon output.",
          "key_manifestations": [
            "Neilson's Hot Blast patent adoption",
            "George Stephenson's 'Rocket' (coal-fired velocity)",
            "Lyell's 'Principles of Geology' (deep time and sedimentation)",
            "Formation of early Smoke Abatement Committees in Leeds/Manchester"
          ]
        },
        "1834": {
          "salience_share": 11.8,
          "description": "Growth (+1.3%) as the 'fossil' nature of the economy becomes undeniable. The catalyst is the expansion of the railway networks which are essentially 'coal-eating machines' that transport coal. In Germany, the Zollverein (Customs Union) creates a common market that integrates the Ruhr coalfields with Prussian industry. Faraday\u2019s laws of electrolysis hint at the electrical future, but for now, batteries are weak; the only way to get massive power is combustion.",
          "key_manifestations": [
            "Establishment of the Zollverein (German Customs Union)",
            "Faraday's Laws of Electrolysis",
            "Babbage's 'Economy of Machinery' (energy as an input)",
            "Balzac's 'P\u00e8re Goriot' (Parisian social climbing amidst coal smoke)"
          ]
        },
        "1839": {
          "salience_share": 13.5,
          "description": "Variance surges (+1.7%) with the advent of trans-Atlantic steam. The *Great Western* and *Sirius* races prove that a ship can carry enough coal to cross the ocean without sails. This is a massive engineering challenge (energy density vs. displacement). The catalyst is the mastery of 'bunkering' logistics. Meanwhile, Charles Goodyear\u2019s vulcanization of rubber creates a new demand for industrial materials that will eventually link to the petrochemical industry. The 'smog' of London becomes a literary character in Dickens.",
          "key_manifestations": [
            "Voyage of the SS Great Western",
            "Discovery of the Grove Fuel Cell (early hydrogen concept, too early)",
            "Charles Goodyear's Rubber Vulcanization",
            "Dickens' 'Nicholas Nickleby' (atmospheric descriptions)"
          ]
        },
        "1844": {
          "salience_share": 15.0,
          "description": "Steady climb (+1.5%). The telegraph (Morse) requires batteries, often made with zinc and acids, but the manufacturing of these materials relies on the coal economy. The primary driver is the explosion of rail mileage in the 'Railway Mania,' which creates a feedback loop: rails transport coal to cities, which fuels factories to make more rails. Engels' *Condition of the Working Class* explicitly links the burning of coal to the degradation of health ('black spittle').",
          "key_manifestations": [
            "Railway Mania (peak investment)",
            "Engels' 'The Condition of the Working Class in England'",
            "Turner's 'Rain, Steam and Speed' (aestheticizing hydrocarbon power)",
            "James Prescott Joule's work on the mechanical equivalent of heat"
          ]
        },
        "1849": {
          "salience_share": 16.5,
          "description": "Variance rises (+1.5%) as the 'Paraffin' industry begins. James Young patents a method to distill oil from coal/shale, creating a bridge between the solid coal era and the liquid oil era. This is the proto-petroleum industry. The California Gold Rush creates a hyper-demand for transport and energy in the West, stimulating the coal mining of the Pacific rim. The repeal of the Navigation Acts opens up the global coal trade.",
          "key_manifestations": [
            "James Young's Patent for Paraffin Oil (distilled from cannel coal)",
            "California Gold Rush (energy demand shock)",
            "Repeal of the Navigation Acts",
            "Melville's 'Moby Dick' (published 1851, writing now - the end of the whale oil era)"
          ]
        },
        "1854": {
          "salience_share": 18.2,
          "description": "The variance climbs (+1.7%) as the chemistry of illumination undergoes a phase shift. The catalyst is Abraham Gesner\u2019s commercialization of 'Kerosene' (patented 1854), a clean-burning liquid distilled from coal/asphalt. This creates a massive market demand for a liquid hydrocarbon that is cheaper than whale oil and cleaner than camphene. It sets the stage for the petroleum industry by defining the 'product' before the 'source' (crude oil) was fully exploited. This period represents the 'lighting' phase of the hydrocarbon cluster, where the primary value of fossil fuels was to extend the waking day.",
          "key_manifestations": [
            "Abraham Gesner's Patent for Kerosene",
            "Thoreau's 'Walden' (critique of the railroad/industrial intrusion)",
            "Creation of the Pennsylvania Rock Oil Company (first oil co)",
            "Ignacy \u0141ukasiewicz's invention of the Kerosene Lamp"
          ]
        },
        "1859": {
          "salience_share": 21.5,
          "description": "A singularity event (+3.3%). The catalyst is the Drake Well in Titusville, Pennsylvania. Colonel Drake strikes oil, proving that liquid hydrocarbons can be extracted via drilling rather than distilling coal or skimming seeps. This collapses the price of illumination, democratizing light. The 'Oil Rush' begins, mirroring the Gold Rush but for energy. Culturally, this introduces the 'Boom Town' dynamic\u2014instant cities built on resource extraction. The 'Black Gold' mythos enters the American lexicon.",
          "key_manifestations": [
            "Colonel Drake's Titusville Well strike",
            "Publication of 'The New American Cyclopaedia' (codifying knowledge)",
            "Lenoir's internal combustion engine (gas-fired, early prototype)",
            "Formation of the early Pithole City (archetypal boom/bust town)"
          ]
        },
        "1864": {
          "salience_share": 23.8,
          "description": "Variance grows (+2.3%) as the logistical problem of liquid energy is solved. The catalyst is the construction of the first oil pipelines (Van Syckel\u2019s pipeline in PA) to bypass the teamsters who monopolized transport. This is the beginning of the 'midstream' sector\u2014the hidden circulatory system of the modern world. The Civil War acts as a displacing force for labor but increases demand for lubricants for the war machine. The sheer wastefulness of early extraction (rivers of oil on fire) highlights the lack of environmental pricing.",
          "key_manifestations": [
            "Samuel Van Syckel's Oil Pipeline (Pithole to Oil Creek)",
            "Establishment of the US Revenue Commission (taxing oil)",
            "Nobel brothers' entry into Baku oil fields",
            "Jules Verne's 'From the Earth to the Moon' (projectile ballistics)"
          ]
        },
        "1869": {
          "salience_share": 26.5,
          "description": "A strategic consolidation (+2.7%). The catalyst is the growing dominance of John D. Rockefeller, culminating in the incorporation of Standard Oil (1870, prep happening now). Rockefeller introduces 'industrial efficiency' to the chaotic oil market, stabilizing prices by ruthlessly eliminating competition. This moves the cluster from a 'wildcat' phase to a 'corporate' phase. The opening of the Suez Canal allows Russian oil (Baku) to eventually reach Asian markets, setting up the first global energy geopolitical rivalry.",
          "key_manifestations": [
            "John D. Rockefeller consolidates Cleveland refineries",
            "Mendeleev's Periodic Table (organizing the chemical building blocks)",
            "Opening of the Suez Canal (logistical revolution)",
            "Grant's Gold Panic (financial volatility interacting with commodities)"
          ]
        },
        "1874": {
          "salience_share": 28.2,
          "description": "Variance rises (+1.7%) as the internal combustion concept matures. The catalyst is Nikolaus Otto\u2019s work on the four-cycle engine (Otto cycle), which provides a mechanism to convert liquid chemical energy directly into motion, bypassing the heavy boiler of the steam engine. This promises to liberate the engine from the factory floor. Meanwhile, the 'Standard Oil' octopus is fully formed, controlling 90% of US refining capacity, turning oil into a utility: standardized, reliable, and cheap.",
          "key_manifestations": [
            "Nikolaus Otto's four-stroke engine patent",
            "The 'South Improvement Company' scheme (railroad rebates)",
            "Exploration of the Baku oil fields by the Nobels",
            "Zola's 'Germinal' (research phase - depicting the coal mining substrate)"
          ]
        },
        "1879": {
          "salience_share": 29.5,
          "description": "A period of existential threat and pivot (+1.3%). The catalyst is Edison\u2019s electric light bulb, which threatens to destroy the kerosene market (oil's primary use). The cluster faces a sharp 'decay' vector in illumination. However, the 'saving throw' is the rise of the internal combustion engine and the use of 'waste product' (gasoline) as fuel. The Nobels launch the *Zoroaster*, the first dedicated oil tanker, solving the problem of global liquid transport and decoupling oil from the barrel container itself.",
          "key_manifestations": [
            "Launch of the Zoroaster (first oil tanker)",
            "Edison's Light Bulb (threat to kerosene)",
            "Standard Oil Trust formed (legal innovation to manage scale)",
            "Dostoyevsky's 'The Brothers Karamazov' (moral/spiritual crisis in modernizing Russia)"
          ]
        },
        "1884": {
          "salience_share": 32.0,
          "description": "Variance surges (+2.5%) as the 'Machine' meets the 'Fuel.' The catalyst is Karl Benz\u2019s development of the Motorwagen (patented 1886). This creates the symbiotic relationship that will define the 20th century: the car and the oil well. The invention of the steam turbine (Parsons) revolutionizes coal power generation, vastly increasing the efficiency of electricity production, locking coal into the grid while oil takes the road.",
          "key_manifestations": [
            "Karl Benz's Motorwagen development",
            "Charles Parsons' Steam Turbine patent",
            "Maxim Gun (mechanized thermodynamics of death)",
            "Fabian Society founded (socialist response to industrial capitalism)"
          ]
        },
        "1889": {
          "salience_share": 35.5,
          "description": "Growth accelerates (+3.5%) with the globalization of the oil trade. The catalyst is the rise of Royal Dutch (Shell) in the East Indies and the Rothschilds in Baku to challenge Standard Oil. This is the birth of the global oil cartel dynamic. The 'safety bicycle' boom creates a demand for pneumatic tires (Dunlop), which will soon translate to automobiles, linking the rubber and oil industries. The Eiffel Tower showcases the structural capabilities of steel, but the elevators are powered by hydraulic systems, soon to be electric/oil.",
          "key_manifestations": [
            "Formation of the Royal Dutch Petroleum Company",
            "Dunlop's Pneumatic Tire production",
            "Eiffel Tower (symbol of the industrial age)",
            "Sherman Antitrust Act drafting (response to Standard Oil)"
          ]
        },
        "1894": {
          "salience_share": 38.0,
          "description": "Variance rises (+2.5%) with the invention of the Diesel engine. Rudolf Diesel\u2019s patent (1893/94) offers an engine with higher thermal efficiency than the petrol engine, capable of running on heavier, cheaper fuels (eventually diesel/bunker fuel). This secures the future of heavy transport (trucking, shipping) for the hydrocarbon cluster. The Sino-Japanese war reveals the necessity of modern, coal-fired navies for power projection.",
          "key_manifestations": [
            "Rudolf Diesel's engine test",
            "Standard Oil of New Jersey (holding company reorganization)",
            "Kipling's 'The Jungle Book' (nature vs. man's fire)",
            "Sino-Japanese War naval battles (coal logistics)"
          ]
        },
        "1899": {
          "salience_share": 41.2,
          "description": "A massive inflection point (+3.2%). The catalyst is the burgeoning realization of the 'Texas Oil Boom' (Corsicana today, Spindletop imminent). This shifts the center of gravity from PA/Ohio to the American Southwest, unleashing a volume of oil so vast it forces the conversion of locomotives and ships from coal to oil. Veblen\u2019s critique of the leisure class notes that the 'nouveau riche' are increasingly oil/railroad barons. The term 'Smog' is coined (1905, but phenomenon peaks here), acknowledging the atmospheric cost.",
          "key_manifestations": [
            "Discovery of oil in Corsicana, Texas",
            "Preparation for the Spindletop strike (1901)",
            "Veblen's 'Theory of the Leisure Class'",
            "Marconi's wireless (coordinating the global fleet)"
          ]
        },
        "1904": {
          "salience_share": 45.5,
          "description": "Variance spikes (+4.3%) as the military utility of oil becomes doctrine. The catalyst is Admiral Fisher\u2019s push to convert the Royal Navy from coal to oil. Oil has higher energy density (range), allows for refueling at sea, and reduces crew size (no stokers). This decision forces Britain, a coal-rich nation with no oil, to engage in the Middle East (Persia) to secure supply, birthing the 'Petro-State' geopolitics. The Wright Brothers' flight (1903) adds a new dimension: aviation, which is impossible with steam/coal.",
          "key_manifestations": [
            "Admiral Fisher's reforms (Royal Navy oil conversion)",
            "D'Arcy Oil Concession in Persia (origins of BP)",
            "Wright Brothers' flyer (gasoline powered)",
            "Ida Tarbell's 'The History of the Standard Oil Company' (antitrust catalyst)"
          ]
        },
        "1909": {
          "salience_share": 51.0,
          "description": "The curve goes exponential (+5.5%). The catalyst is the convergence of the Ford Model T (mass demand) and the discovery of oil at Masjed Soleyman in Persia (mass supply). The Anglo-Persian Oil Company is incorporated. The Haber-Bosch process (1909) uses natural gas (hydrogen source) to fix nitrogen, linking the hydrocarbon cluster to the global food supply. We are now eating fossil fuels. The dissolution of Standard Oil (1911 ruling) breaks the monopoly but multiplies the capital value.",
          "key_manifestations": [
            "Incorporation of the Anglo-Persian Oil Company",
            "Haber-Bosch Process demonstration",
            "Ford Model T mass production ramp",
            "Leo Baekeland's Bakelite (petrochemical plastic)"
          ]
        },
        "1914": {
          "salience_share": 56.5,
          "description": "Variance surges (+5.5%) as WWI proves that 'Oil is Blood.' The catalyst is the mechanization of the battlefield: tanks, trucks, and airplanes all thirst for gasoline. The 'Taxis of the Marne' save Paris, demonstrating the tactical advantage of motorized infantry. The strategic capture of the Basra oil fields becomes a primary British war aim. Coal is still king for electricity, but oil is the emperor of motion.",
          "key_manifestations": [
            "The Taxis of the Marne",
            "British government purchase of 51% of Anglo-Persian",
            "Ludendorff's memo on German fuel shortages",
            "Complete switch of US Navy to oil"
          ]
        },
        "1919": {
          "salience_share": 58.2,
          "description": "Consolidation of the new order (+1.7%). The catalyst is the San Remo Oil Agreement, where Britain and France carve up the Middle East's oil potential, shutting out the US initially. This triggers the 'Red Line Agreement' negotiations. The 'Gasoline Station' becomes a new architectural typology in the landscape. Alcock and Brown\u2019s trans-Atlantic flight proves aviation range, demanding higher octane fuels.",
          "key_manifestations": [
            "San Remo Oil Agreement",
            "Alcock and Brown Trans-Atlantic Flight",
            "Founding of the American Petroleum Institute",
            "Keynes' critique of Versailles (economic resource distribution)"
          ]
        },
        "1924": {
          "salience_share": 60.5,
          "description": "Variance rises (+2.3%) as oil corruption enters the highest levels of government. The catalyst is the Teapot Dome Scandal, revealing the immense value of naval oil reserves. The 'Tetraethyllead' additive is introduced (General Motors/Midgley) to stop engine knocking, poisoning the atmosphere with lead to enable higher compression ratios (power). This is a 'Faustian bargain' moment for the cluster. The first 'Autobahns' (Avus) are planned, designing the state around the car.",
          "key_manifestations": [
            "Teapot Dome Scandal investigations",
            "Introduction of Leaded Gasoline (Ethyl Corp)",
            "Development of the cracking process (increasing gasoline yield)",
            "Kafka's 'The Trial' (bureaucratic labyrinth, published posthumously)"
          ]
        },
        "1929": {
          "salience_share": 62.0,
          "description": "Peak cartelization (+1.5%). The catalyst is the 'Achnacarry Agreement' (As-Is Agreement), where the major oil companies (Seven Sisters) secretly agree to manage production quotas to stabilize prices. This manages the 'overproduction' crisis. The stock market crash crashes demand, but the infrastructure of the 'Hydrocarbon Society' is locked in: suburbs, roads, and plastics (polystyrene invented).",
          "key_manifestations": [
            "The Achnacarry Agreement (Seven Sisters Cartel)",
            "Commercialization of Polystyrene (I.G. Farben)",
            "Byrd's flight over the South Pole (fueled exploration)",
            "Remarque's 'All Quiet on the Western Front' (mechanized war memory)"
          ]
        },
        "1934": {
          "salience_share": 63.5,
          "description": "Variance grows (+1.5%) as the geopolitical map is redrawn by geology. The catalyst is the granting of concessions in Saudi Arabia to Standard Oil of California (later Aramco). This shifts the future axis of energy from the US/Russia to the Persian Gulf. In Germany, the Nazi regime prioritizes 'Synthetic Fuel' (coal liquefaction) to achieve autarky, knowing they lack oil reserves for the coming war. Nylon (petrochemical fiber) is invented, replacing animal fiber.",
          "key_manifestations": [
            "Standard Oil of California's Saudi Concession",
            "Carothers invents Nylon at DuPont",
            "I.G. Farben's Synthetic Fuel production ramp-up",
            "The Dust Bowl (failure of mechanized agriculture)"
          ]
        },
        "1939": {
          "salience_share": 67.0,
          "description": "A massive surge (+3.5%) driven by WWII, which is fundamentally an 'Oil War.' The catalyst is the Axis powers' desperate need for oil (Japan's move on Dutch East Indies, Germany's push for Baku/Caucasus). The variance is explained by the total reliance on high-octane aviation fuel (100 octane) which gave the RAF an advantage in the Battle of Britain. The Manhattan Project consumes colossal amounts of electricity (coal/hydro), showing the scale of energy needed for atomic physics.",
          "key_manifestations": [
            "Japan's invasion of the Dutch East Indies (for oil)",
            "Development of 100-octane aviation fuel",
            "Steinbeck's 'The Grapes of Wrath' (petrol-driven migration)",
            "German failure at Stalingrad (Case Blue - aimed at Baku oil)"
          ]
        },
        "1944": {
          "salience_share": 68.5,
          "description": "The strategic climax (+1.5%). The catalyst is the meeting between FDR and Ibn Saud on the *USS Quincy*, cementing the 'Oil for Security' alliance that defines the post-war order. The PLUTO (Pipe-Lines Under The Ocean) project supplies the D-Day invasion, proving that logistics is the victor. The Bretton Woods system implicitly prices oil in dollars, setting the stage for the Petrodollar.",
          "key_manifestations": [
            "FDR and Ibn Saud meeting on the USS Quincy",
            "Operation PLUTO (D-Day fuel supply)",
            "Hayek's 'Road to Serfdom'",
            "Bretton Woods Conference"
          ]
        },
        "1949": {
          "salience_share": 70.0,
          "description": "Variance peaks (+1.5%) with the 'Great Acceleration.' The catalyst is the explosion of the plastics industry and the mass adoption of the automobile in the US. Oil is no longer just fuel; it is the material world (Tupperware, Vinyl, Polyester). The 'Ghawar' field in Saudi Arabia (largest ever) is fully brought online, flooding the world with cheap energy, enabling the 'Golden Age of Capitalism.'",
          "key_manifestations": [
            "Earl Tupper's 'Tupperware' parties",
            "Discovery/Expansion of the Ghawar Oil Field",
            "Four Point Program (US tech transfer for resources)",
            "Arthur Miller's 'Death of a Salesman' (the consumerist tragedy)"
          ]
        },
        "1954": {
          "salience_share": 72.5,
          "description": "Dominance continues (+2.5%). The catalyst is the CIA-backed coup in Iran (Operation Ajax) to protect British oil interests (BP) and prevent nationalization. This cements the West's willingness to intervene violently to maintain the flow. In the US, the Interstate Highway Act (1956 prep) is the largest public works project in history, pouring concrete to guarantee the dominance of the hydrocarbon transport model over rail.",
          "key_manifestations": [
            "Operation Ajax (Iran Coup)",
            "Proposal for the Interstate Highway System",
            "First nuclear power plant (Obninsk) - the challenger appears",
            "Godzilla (film - radiation/energy metaphor)"
          ]
        },
        "1959": {
          "salience_share": 71.0,
          "description": "A slight dip in rate (-1.5%) but a pivotal moment for the 'cost' vector. The catalyst is Charles Keeling establishing the CO2 monitoring station at Mauna Loa. The 'Keeling Curve' begins, documenting the breath of the hydrocarbon giant. The 'Boeing 707' brings the Jet Age to the masses, causing kerosene demand to skyrocket again (aviation fuel). The 'Seven Sisters' cut posted prices, angering producers and leading to the seeds of OPEC.",
          "key_manifestations": [
            "The Keeling Curve (Mauna Loa CO2 readings start)",
            "Boeing 707 enters commercial service",
            "Arab Petroleum Congress in Cairo (OPEC precursor)",
            "C.P. Snow's 'The Two Cultures'"
          ]
        },
        "1964": {
          "salience_share": 69.5,
          "description": "Variance stabilized (-1.5%) as the producer nations organize. The catalyst is the founding of OPEC (1960), which begins to assert sovereignty over reserves. The 'Green Revolution' in agriculture (Borlaug) relies heavily on hydrocarbon-based fertilizers and pesticides, locking the global food supply to the oil price. Plastic pollution is first noted in oceans, though ignored.",
          "key_manifestations": [
            "Founding of OPEC (Organization of the Petroleum Exporting Countries)",
            "Norman Borlaug's wheat in India (Green Revolution)",
            "Tokyo Olympics (Shinkansen debut - electric rail counter-trend)",
            "Dr. Strangelove (resource/strategic satire)"
          ]
        },
        "1969": {
          "salience_share": 68.0,
          "description": "A visible crack in the facade (-1.5%). The catalyst is the Santa Barbara Oil Spill, which tele-visualizes the environmental cost of the cluster, directly leading to the first Earth Day. The discovery of North Sea Oil offers a 'safe' western reserve, but extraction is difficult. The Concorde flies, representing the peak of fuel-inefficient speed (supersonic transport), a dead end.",
          "key_manifestations": [
            "Santa Barbara Oil Spill",
            "Discovery of the Ekofisk oil field (North Sea)",
            "Concorde first flight",
            "Apollo 11 (the ultimate chemical rocket expenditure)"
          ]
        },
        "1974": {
          "salience_share": 75.0,
          "description": "A massive, traumatic surge in variance (+7.0%)\u2014not from growth, but from *shock*. The catalyst is the 1973 Oil Embargo. The price quadruples. This proves that 'Hydrocarbon Energy Density' is the single most critical variable in the global economy. The 'Limits to Growth' report (Club of Rome) becomes the intellectual bible of the era. Speed limits are lowered; lights are dimmed. The West realizes it is addicted.",
          "key_manifestations": [
            "The 1973/74 Oil Embargo",
            "Club of Rome's 'The Limits to Growth'",
            "Project Independence (Nixon's failed energy autarky plan)",
            "Schumacher's 'Small is Beautiful'"
          ]
        },
        "1979": {
          "salience_share": 74.0,
          "description": "The second shock (-1.0%). The Iranian Revolution removes a pillar of Western supply. Panic buying ensues. The catalyst for the *decline* of the cluster's dominance is the rapid shift to efficiency (CAFE standards) and the pivot to coal/nuclear for electricity to save oil for transport. Jimmy Carter installs solar panels on the White House (symbolic). The 'Mad Max' aesthetic captures the zeitgeist of resource scarcity.",
          "key_manifestations": [
            "The Iranian Revolution (energy supply shock)",
            "Three Mile Island (checking the nuclear alternative)",
            "Mad Max (film)",
            "Volcker Shock (crushing the inflation caused by oil)"
          ]
        },
        "1984": {
          "salience_share": 65.0,
          "description": "A collapse in variance (-9.0%) known as the 'Oil Glut.' The displacing force is the non-OPEC supply coming online (North Sea, Alaska) and the delayed effect of efficiency measures. Prices crash. This destroys the Soviet Union's revenue stream (a contributing factor to its fall) and bankrupts the US shale/synfuel experiments. The 'Yuppie' era is fueled by cheap energy returning, but the 'Ozone Hole' discovery directs environmental anxiety toward CFCs, temporarily sparing CO2.",
          "key_manifestations": [
            "Collapse of Oil Prices (1985/86 glut)",
            "Discovery of the Ozone Hole (CFC link)",
            "Don DeLillo's 'White Noise' (toxic airborne event)",
            "Chernobyl Disaster (1986 - reinforces fossil fuel lock-in by killing nuclear)"
          ]
        },
        "1989": {
          "salience_share": 62.0,
          "description": "Variance declines (-3.0%) but the 'Climate' narrative begins. The catalyst is James Hansen\u2019s testimony to Congress (1988) and the Exxon Valdez spill (1989). The cluster is now morally contested. However, the fall of the Berlin Wall opens up the Soviet oil & gas reserves to Western capital, creating a new 'Great Game' for pipelines. The SUV (Ford Explorer) is introduced, using the cheap gas to reverse efficiency gains.",
          "key_manifestations": [
            "Exxon Valdez Oil Spill",
            "James Hansen's Congressional Testimony on Global Warming",
            "Launch of the Ford Explorer (start of the SUV boom)",
            "Bill McKibben's 'The End of Nature'"
          ]
        },
        "1994": {
          "salience_share": 58.0,
          "description": "Stasis (-4.0%). The 'Contract of the Century' in Azerbaijan opens the Caspian Sea. The focus shifts to Natural Gas as a 'bridge fuel' (cleaner than coal). The Kyoto Protocol is being negotiated, the first attempt to price the cluster's waste product. Daniel Yergin\u2019s *The Prize* dominates the intellectual understanding of the industry, framing it as the engine of the 20th century.",
          "key_manifestations": [
            "Signing of the 'Contract of the Century' (Azerbaijan oil)",
            "Daniel Yergin's 'The Prize' (Pulitzer win)",
            "UNFCCC entering into force",
            "Jeff Bezos driving across country (fueled by gas) to start Amazon"
          ]
        },
        "1999": {
          "salience_share": 55.0,
          "description": "Variance drops (-3.0%) as 'Tech' eclipses 'Oil' in the market. Oil prices hit historic lows ($10/barrel). The *Economist* covers 'Drowning in Oil.' However, the merger of Exxon and Mobil creates a supermajor to survive the low prices. The seeds of the 'Fracking' revolution are being sown by George Mitchell in the Barnett Shale, unrecognized by the majors.",
          "key_manifestations": [
            "Exxon-Mobil Merger",
            "The Economist cover 'Drowning in Oil'",
            "George Mitchell's first successful fracking tests in Barnett Shale",
            "Toyota Prius worldwide launch (hybridization)"
          ]
        },
        "2004": {
          "salience_share": 60.0,
          "description": "A resurgence (+5.0%) driven by the 'Commodities Supercycle.' China's demand shock drives prices up. 'Peak Oil' theory (Hubbert's Peak) becomes a cultural obsession\u2014the fear that supply is geologically running out. The Iraq War is widely interpreted as a resource war. The documentary *An Inconvenient Truth* (prep) begins to mainstream the climate crisis.",
          "key_manifestations": [
            "Oil hits $50/barrel for the first time",
            "Publication of 'Twilight in the Desert' (Matt Simmons)",
            "Hurricane Katrina (2005 - hitting Gulf infrastructure)",
            "Launch of Tesla Motors (finding the orthogonal vector)"
          ]
        },
        "2009": {
          "salience_share": 63.0,
          "description": "Variance rises (+3.0%) due to the 'Shale Revolution.' The catalyst is the combination of horizontal drilling and hydraulic fracturing, which unlocks vast US reserves, effectively canceling 'Peak Oil.' The US begins to move toward energy independence. The Deepwater Horizon disaster (2010) visualizes the extreme risks of 'tough oil.' The failure of COP15 (Copenhagen) signals that the political will to displace the cluster is weak.",
          "key_manifestations": [
            "Deepwater Horizon Disaster (2010)",
            "US becomes the world's largest gas producer",
            "Failure of COP15 Climate Summit",
            "Avatar (narrative of extraction vs. nature)"
          ]
        },
        "2014": {
          "salience_share": 59.0,
          "description": "A sharp volatility (-4.0%). The catalyst is the Saudi decision to flood the market to kill the US Shale industry. Prices collapse. This demonstrates the fragility of the petro-states. The Paris Agreement (2015) creates the first universal commitment to 'net zero,' effectively putting an expiration date on the cluster. Solar and Wind reach grid parity in many regions, challenging gas.",
          "key_manifestations": [
            "Oil Price Collapse (2014)",
            "The Paris Agreement (COP21)",
            "Tesla Model S becoming a status symbol",
            "Pope Francis's 'Laudato Si'' (moral critique of fossil capital)"
          ]
        },
        "2019": {
          "salience_share": 55.0,
          "description": "Decline continues (-4.0%). The catalyst is the 'Climate Emergency' narrative and the rise of ESG (Environmental, Social, Governance) investing, which starves the cluster of capital. 'Stranded Assets' becomes a financial risk category. The COVID-19 pandemic causes oil prices to briefly turn negative, revealing the storage constraints. The internal combustion engine bans are announced by various nations for 2030/2035.",
          "key_manifestations": [
            "Negative Oil Prices (WTI April 2020)",
            "Greta Thunberg's UN Speech",
            "BlackRock's Larry Fink Letter (climate risk = investment risk)",
            "Saudi Aramco IPO (cashing out before the transition)"
          ]
        },
        "2024": {
          "salience_share": 52.0,
          "description": "Stasis/Resistance (-3.0%). The catalyst is the energy security crisis following the Ukraine war, which briefly revitalizes the 'necessity' argument for hydrocarbons (LNG to Europe). However, the 'transition' is now structurally embedded in the Inflation Reduction Act and EU Green Deal. The cluster is fighting a rearguard action (Carbon Capture) to maintain relevance. The 'Global South' demands the right to use hydrocarbons for development, creating a 'Climate Justice' tension.",
          "key_manifestations": [
            "COP28 agreement to 'transition away' from fossil fuels",
            "US becomes largest oil exporter in history (paradox of transition)",
            "Expansion of LNG terminals in Europe",
            "Kim Stanley Robinson's 'The Ministry for the Future' (heat death narrative)"
          ]
        }
      }
    },
    "3_germ_theory_and_sanitation": {
      "name": "Germ Theory and Sanitation",
      "description": "This eigencluster represents the most significant shift in human survival: the transition from explaining disease via 'miasma' (bad air) or divine punishment to the identification of the 'microbial invisible.' It encompasses the physical restructuring of civilization to separate humans from their waste (sewers/clean water), the chemical warfare against pathogens (antiseptics/antibiotics), and the rise of 'Biopolitics'\u2014where the state assumes responsibility for the biological health of the population. It tracks the dramatic collapse of infectious mortality and the subsequent explosion in global life expectancy.",
      "trajectory": {
        "1789": {
          "salience_share": 1.5,
          "description": "Variance is minimal, dominated by the 'Miasma Theory' and humoral medicine. Disease is viewed as an imbalance of the self or a corruption of the atmosphere, not an invasion by foreign agents. However, the practice of 'Variolation' (inoculation with smallpox) is a known, albeit risky, folk technology brought from the East. The catalyst for the coming shift is the sheer density of the new industrial cities, which are becoming necropolises where death rates exceed birth rates, creating a functional pressure for a solution.",
          "key_manifestations": [
            "Howard's 'An Account of the Principal Lazarettos in Europe' (prison hygiene)",
            "Lady Mary Wortley Montagu's letters (advocacy of variolation)",
            "Yellow Fever epidemic in Philadelphia (miasmatic panic)",
            "Lavoisier's respiration experiments (biology as chemistry)"
          ]
        },
        "1794": {
          "salience_share": 1.8,
          "description": "A specific vector emerges (+0.3%) with Edward Jenner\u2019s observation of milkmaids. While not yet published, the concept that 'cowpox' confers immunity to 'smallpox' is being tested. This is the proto-vaccine moment\u2014using a weaker biological agent to train the body. Simultaneously, the French Revolution\u2019s focus on 'Citizen' health leads to the medicalization of the hospital, moving it from a place of charity/death to a place of cure/observation (The Clinic).",
          "key_manifestations": [
            "Establishment of the Val-de-Gr\u00e2ce military hospital",
            "Edward Jenner's ongoing cowpox experiments",
            "Benjamin Rush's aggressive bleeding treatments (the old paradigm peaking)",
            "Creation of the Health Boards in US ports (quarantine logic)"
          ]
        },
        "1799": {
          "salience_share": 3.2,
          "description": "A breakthrough (+1.4%). The catalyst is the publication of Jenner\u2019s *Inquiry into the Variolae Vaccinae* (1798). This introduces the first true 'medical technology' capable of halting a plague. The variance jump reflects the rapid, desperate adoption of vaccination by the British military and elite, proving that biology can be engineered. However, the mechanism (immunology) remains a complete mystery, limiting this to a 'black box' solution.",
          "key_manifestations": [
            "Edward Jenner's 'An Inquiry into the Causes and Effects of the Variolae Vaccinae'",
            "Founding of the Vaccine Pock Institution (London)",
            "Humphry Davy's nitrous oxide experiments (anesthesia precursor)",
            "Napoleon's vaccination of his troops (state biopolitics)"
          ]
        },
        "1804": {
          "salience_share": 3.8,
          "description": "Steady diffusion (+0.6%). Vaccination spreads to the Americas (Jefferson is a proponent) and Europe. The 'Sanitary' idea begins to form in the context of naval discipline\u2014scurvy is conquered by citrus (Lind/Blane), proving that diet controls health. This strengthens the 'empirical' approach to health over the theoretical/humoral approach. The separation of the sick from the healthy becomes more rigorous in military contexts.",
          "key_manifestations": [
            "Start of the Royal Philanthropic Vaccine Expedition (Balmis Expedition)",
            "Thomas Jefferson's letters promoting vaccination",
            "Gilbert Blane's reforms in the Royal Navy (citrus/cleanliness)",
            "Sert\u00fcrner's isolation of morphine (pharmacology begins)"
          ]
        },
        "1809": {
          "salience_share": 4.1,
          "description": "Stasis (+0.3%). The Napoleonic Wars act as a massive vector for typhus and dysentery, overwhelming the nascent sanitary measures. The 'miasma' theory is reinforced because bad smells (battlefields/camps) correlate perfectly with disease. The lack of microscopy means the 'enemy' remains invisible. However, the state's interest in 'manpower' (biological capital) deepens; a sick soldier is a wasted investment.",
          "key_manifestations": [
            "Walcheren Campaign (British army destroyed by 'fever', not French)",
            "Laennec's invention of the Stethoscope (listening to the internal body)",
            "Publication of 'The Code of Health and Longevity' (Sinclair)",
            "Appert's canning (sterilization by heat, though understood as removing air)"
          ]
        },
        "1814": {
          "salience_share": 4.5,
          "description": "Slow growth (+0.4%). The post-war period allows for a focus on 'Social Medicine.' The catalyst is the growing statistical awareness of mortality differentials between slums and rich quarters. This is the birth of epidemiology as a branch of sociology. The 'Apothecary Act' in Britain begins to professionalize the dispensing of drugs, separating the charlatan from the certified, attempting to standardize the chemical interface with the body.",
          "key_manifestations": [
            "The Apothecaries Act of 1815",
            "William Farr's early statistical work (vital statistics)",
            "Report on the State of the Police of the Metropolis (linking crime/filth)",
            "Introduction of the 'Cordon Sanitaire' concept in European typhus outbreaks"
          ]
        },
        "1819": {
          "salience_share": 5.2,
          "description": "Variance rises (+0.7%) as the 'Cholera' threat looms from the East. The catalyst is the First Cholera Pandemic reaching the fringes of the Western world. This 'Asiatic' disease terrifies the West because it kills rapidly and ignores class. It forces a debate: is it contagious (quarantine needed) or miasmatic (cleaning needed)? The 'anti-contagionists' (liberals who want free trade) actually drive sanitation improvements to avoid the economic cost of quarantines.",
          "key_manifestations": [
            "First Asiatic Cholera Pandemic spread",
            "Laennec's 'De l'Auscultation M\u00e9diate' (diagnostic precision)",
            "Establishment of the Acad\u00e9mie de M\u00e9decine (France)",
            "Keats' death from Tuberculosis (romanticizing the 'consumption')"
          ]
        },
        "1824": {
          "salience_share": 6.0,
          "description": "Growth (+0.8%) driven by the 'Sanitary Movement.' The catalyst is the realization that industrialization has created 'pathogenic cities.' Improving drainage and street cleaning becomes a municipal priority, not for aesthetics, but for survival. This is 'Civil Engineering as Medicine.' The specific identification of 'cleaning' as a public good marks the transition from private hygiene to public sanitation.",
          "key_manifestations": [
            "Founding of the 'Sanitary Association' groups",
            "Early use of chloride of lime as disinfectant",
            "Brillat-Savarin's 'Physiologie du Go\u00fbt' (dietary science)",
            "Macintosh's waterproof fabric (protection from the elements)"
          ]
        },
        "1829": {
          "salience_share": 7.5,
          "description": "A sharp rise (+1.5%) as Cholera hits Europe properly. The shock of the pandemic acts as a stress test for civilization. Miasma theory fails to predict the specific tracking of the disease, but 'filth' is clearly the accelerator. This empowers the 'Sanitarians' like Edwin Chadwick. The Anatomy Act (1832 prep) rationalizes the study of the dead body, stripping away religious taboos to allow medical students to understand the biological machine.",
          "key_manifestations": [
            "Cholera riots in Russia and UK (public distrust of doctors)",
            "The Anatomy Act of 1832 (providing cadavers)",
            "Edwin Chadwick's early investigations",
            "Delacroix's 'Liberty Leading the People' (amidst the Paris cholera backdrop)"
          ]
        },
        "1834": {
          "salience_share": 9.2,
          "description": "Variance accelerates (+1.7%) with the publication of the 'Poor Law Amendment Act' and Chadwick's subsequent sanitary reporting. The thesis is established: 'Disease causes Poverty.' Therefore, to reduce the tax burden of the poor, the state must reduce disease. This is the economic argument for public health. We see the beginning of the 'Great Stink' narrative where the sensory experience of the city drives policy.",
          "key_manifestations": [
            "Edwin Chadwick's 'The Sanitary Condition of the Labouring Population' (drafting phase)",
            "Establishment of the Registrar General's Office (Vital Statistics)",
            "Construction of early Victorian sewers",
            "B\u00fcchner's 'Woyzeck' (human as biological specimen)"
          ]
        },
        "1839": {
          "salience_share": 10.8,
          "description": "Growth (+1.6%). The 'Zymotic' theory of disease (fermentation) serves as a bridge between miasma and germs. The catalyst is the sheer volume of statistical data proving that sanitation works, even if the theory is wrong. 'Public Baths and Washhouses' begin to open, democratizing cleanliness. In dentistry, the use of Ether (1842/46) is on the horizon, signaling the 'Conquest of Pain' which allows for invasive surgery.",
          "key_manifestations": [
            "First Public Baths opening in Liverpool/London",
            "Henle's 'On Miasmata and Contagia' (postulating microorganisms)",
            "Agassiz's 'Studies on Glaciers' (scientific observation method)",
            "Queen Victoria's marriage (hemophilia genetic vector begins)"
          ]
        },
        "1844": {
          "salience_share": 12.5,
          "description": "A critical vector emerges (+1.7%). The catalyst is Ignaz Semmelweis at the Vienna General Hospital (1847). He discovers that doctors are transferring 'cadaverous particles' to pregnant women, causing childbed fever. He proves that washing hands with chlorine drastically cuts mortality. This is the first empirical proof of 'contact transmission' by invisible agents on the hands of the healers themselves. Though tragically rejected by the establishment, it marks the conceptual birth of 'asepsis.'",
          "key_manifestations": [
            "Ignaz Semmelweis's handwashing experiments",
            "First public demonstration of Ether anesthesia (Morton)",
            "Virchow's 'Archive for Pathological Anatomy' founded",
            "Public Health Act of 1848 (UK) - The state assumes sanitary power"
          ]
        },
        "1849": {
          "salience_share": 15.2,
          "description": "A major surge (+2.7%). The catalyst is John Snow\u2019s investigation of the Broad Street Pump during the 1854 cholera outbreak (research occurring now). Snow removes the handle of the pump, stopping the outbreak. He uses a 'Voronoi diagram' logic to prove water, not air, is the vector. This is the death knell for Miasma, though it takes decades to fully fade. Simultaneously, the 'Great Exhibition' features model dwellings with flushing toilets, glamorizing plumbing.",
          "key_manifestations": [
            "John Snow's 'On the Mode of Communication of Cholera'",
            "Report of the General Board of Health on the Supply of Water",
            "Elizabeth Blackwell becomes first female MD in US",
            "Hermann von Helmholtz measures nerve impulse speed (demystifying the body)"
          ]
        },
        "1854": {
          "salience_share": 17.5,
          "description": "Variance rises (+2.3%) driven by the Crimean War. The catalyst is Florence Nightingale, who applies statistical rigor (coxcombs) and industrial sanitation to the battlefield hospital. She proves that more soldiers die from filth than bullets. This creates the 'Nursing' profession as a disciplined, sanitary force. In London, the 'Great Stink' of 1858 leads to the commissioning of Bazalgette\u2019s massive sewer network, the 'intestines of the city.'",
          "key_manifestations": [
            "Florence Nightingale's 'Notes on Nursing'",
            "The Great Stink of London (1858)",
            "Bazalgette's Sewer System construction begins",
            "Virchow's 'Cellular Pathology' (all cells come from cells)"
          ]
        },
        "1859": {
          "salience_share": 21.0,
          "description": "The Paradigm Shift (+3.5%). The catalyst is Louis Pasteur\u2019s swan-neck flask experiments, which definitively disprove 'Spontaneous Generation.' Life only comes from life. This means rot, fermentation, and disease are caused by living agents from the outside. This is the 'Germ Theory' proper. It changes the universe from a place of vague humors to a battlefield of specific biological entities. Darwin\u2019s *Origin* (1859) reinforces this by placing humans and microbes in the same competitive biological framework.",
          "key_manifestations": [
            "Pasteur's experiments on Spontaneous Generation",
            "Nightingale Training School for Nurses opens",
            "First Cottage Hospitals established",
            "Dickens' 'Great Expectations' (Magwitch and the physical reality of the convict hulk)"
          ]
        },
        "1864": {
          "salience_share": 24.5,
          "description": "Rapid acceleration (+3.5%). The catalyst is Joseph Lister applying Pasteur\u2019s theory to surgery. He uses carbolic acid to sterilize wounds and instruments. 'Antiseptic Surgery' turns the hospital from a gateway to death into a place of repair. Amputation mortality plummets. In parallel, the Geneva Convention (1864) establishes the Red Cross, declaring the 'medic' as a neutral non-combatant, elevating the sanctity of the biological life above the political conflict.",
          "key_manifestations": [
            "Joseph Lister's papers on Antiseptic Principle",
            "First Geneva Convention (Red Cross)",
            "Pasteur's work on silkworm disease (germ theory applied to industry)",
            "Mendel's experiments on pea plants (genetics discovered, then ignored)"
          ]
        },
        "1869": {
          "salience_share": 28.0,
          "description": "Variance grows (+3.5%) as the 'Microbe Hunters' era begins. The Franco-Prussian War acts as a testing ground for smallpox vaccination (compulsory for Germans, not French), resulting in a massive disparity in casualties, proving the military value of germ theory. Pasteur develops the Anthrax vaccine, proving that the 'Jenner principle' can be artificially replicated in a lab for other diseases. The microscope becomes the primary tool of medicine.",
          "key_manifestations": [
            "Pasteur's patent for beer fermentation (industrial hygiene)",
            "Public Health Act of 1872 (creating sanitary districts)",
            "Hansen identifies the leprosy bacillus (first specific bacterium found)",
            "Comparison of French vs. German smallpox rates in 1870 war"
          ]
        },
        "1874": {
          "salience_share": 32.5,
          "description": "A surge (+4.5%) dominated by Robert Koch. The catalyst is Koch\u2019s demonstration of the Anthrax life cycle (spores). He formulates 'Koch\u2019s Postulates,' the gold standard for proving a specific germ causes a specific disease. This changes medicine from an art of guessing to a science of identification. The 'Plumbing Revolution' moves indoors; the water closet (WC) becomes a standard feature of bourgeois homes, privatizing the sanitation cluster.",
          "key_manifestations": [
            "Robert Koch's Anthrax lifecycle paper",
            "Public Health Act of 1875 (The Great Charter of sanitation)",
            "Bell's Telephone (parallel invisible transmission)",
            "Pasteur's development of the Chicken Cholera vaccine"
          ]
        },
        "1879": {
          "salience_share": 36.2,
          "description": "Growth continues (+3.7%). The catalyst is the Pasteur-Koch rivalry. Pasteur develops the Rabies vaccine (1885 prep), a high-profile miracle that captures the public imagination because rabies was a terrifying, visible death. The 'Chamberland filter' is invented, allowing for the discovery of viruses (agents smaller than bacteria) later. The 'Germ' is now a cultural villain, leading to a boom in soaps, cleaners, and the aesthetic of 'White' (sterility) in architecture and clothing.",
          "key_manifestations": [
            "Discovery of the Pneumococcus",
            "Finlay proposes the mosquito vector for Yellow Fever",
            "Lever Brothers' 'Sunlight Soap' (marketing hygiene)",
            "Ibsen's 'Ghosts' (syphilis as hereditary curse)"
          ]
        },
        "1884": {
          "salience_share": 40.5,
          "description": "A peak of discovery (+4.3%). Koch discovers the *Vibrio cholerae* and the *Tubercle bacillus*. Identifying the cause of Tuberculosis (the 'White Plague') is culturally seismic; it shifts the disease from a romantic, constitutional weakness to an infectious threat, leading to the 'Sanatorium' movement (quarantine of the infected). Gram staining is developed, allowing bacteria to be categorized. The 'Pasteurization' of milk begins, cutting infant mortality.",
          "key_manifestations": [
            "Koch's identification of the Cholera and Tuberculosis bacilli",
            "Gram's invention of the Gram Stain technique",
            "Pasteur's first successful Rabies vaccination (Joseph Meister)",
            "Mark Twain's 'Huckleberry Finn' (nature vs. civilized hygiene)"
          ]
        },
        "1889": {
          "salience_share": 43.8,
          "description": "Variance rises (+3.3%) as the 'Vector' theory gains ground. The catalyst is Theobald Smith proving that ticks transmit Texas Cattle Fever. This opens the door to understanding malaria and yellow fever\u2014diseases are not just in the air/water, but carried by *other* animals. Behring and Kitasato discover 'Antitoxins' (for Diphtheria), identifying that blood serum can neutralize bacterial poisons. This is the birth of 'Serotherapy'\u2014curing the infected, not just preventing infection.",
          "key_manifestations": [
            "Behring and Kitasato's paper on Diphtheria Antitoxin",
            "Theobald Smith's Tick fever discovery",
            "Halsted's introduction of rubber gloves in surgery",
            "Oscar Wilde's 'Picture of Dorian Gray' (corruption of the soul vs. body)"
          ]
        },
        "1894": {
          "salience_share": 47.0,
          "description": "A massive triumph (+3.2%). The catalyst is the discovery of X-Rays (Roentgen) in 1895, rendering the body transparent without surgery. But in the germ cluster, it's the identification of the Plague bacillus (Yersin/Kitasato) in Hong Kong. The 'Third Plague Pandemic' is stopped from destroying the West by rigorous, brutal sanitation and rat-proofing. The 'Fly' is identified as a vector for typhoid, leading to 'Swat the Fly' campaigns. Hygiene becomes a patriotic duty.",
          "key_manifestations": [
            "Roentgen's discovery of X-Rays",
            "Yersin's isolation of the Plague bacillus",
            "Ross's discovery of the Malaria parasite in mosquitoes",
            "H.G. Wells' 'War of the Worlds' (Martians killed by bacteria)"
          ]
        },
        "1899": {
          "salience_share": 50.5,
          "description": "The cluster crosses the 50% threshold (+3.5%). The catalyst is the conquest of the tropics. Walter Reed proves the mosquito vector for Yellow Fever in Cuba, allowing the US to build the Panama Canal where the French failed (due to disease). This is 'Imperial Medicine'\u2014sanitation allows the white man to survive in the tropics. Aspirin (Bayer) is launched, the first industrial pharmaceutical for mass pain/fever management.",
          "key_manifestations": [
            "Walter Reed's Yellow Fever Commission",
            "Bayer launches Aspirin",
            "Landsteiner discovers blood groups (safe transfusion)",
            "Conrad's 'Lord Jim' (psychological vs. physical rot)"
          ]
        },
        "1904": {
          "salience_share": 53.2,
          "description": "Variance rises (+2.7%) with the 'Magic Bullet' concept. Paul Ehrlich coins the term *Zauberkugel*, seeking a chemical that kills the microbe but spares the host. He is hunting for a cure for Syphilis. The Pure Food and Drug Act (1906 prep) in the US represents the state policing the purity of the biological intake. 'Typhoid Mary' is identified, creating the legal category of the 'asymptomatic carrier' who can be incarcerated for the public good.",
          "key_manifestations": [
            "Ehrlich's work on 'Side-chain theory' of immunity",
            "Identification of 'Typhoid Mary' (Mary Mallon)",
            "Sinclair's 'The Jungle' (sanitary regulation of meat)",
            "Development of the Wassermann test for Syphilis"
          ]
        },
        "1909": {
          "salience_share": 56.5,
          "description": "A breakthrough (+3.3%). The catalyst is Ehrlich\u2019s discovery of Salvarsan (Arsphenamine), the first effective treatment for Syphilis. This is the first systematic antibiotic (antimicrobial) drug. It changes the cultural view of venereal disease from a moral judgment to a treatable infection. Chlorination of municipal water supplies begins (Jersey City, then global), leading to a massive, silent drop in typhoid and cholera. The 'filtration' of modern life is complete.",
          "key_manifestations": [
            "Release of Salvarsan (Compound 606)",
            "Beginning of mass water chlorination",
            "Flexner Report (standardizing medical education)",
            "E.M. Forster's 'Howards End' (obsession with dust and hay fever)"
          ]
        },
        "1914": {
          "salience_share": 59.0,
          "description": "Variance rises (+2.5%) as the War pushes medical tech. Tetanus antitoxin prevents lockjaw in the trenches. The 'Carrel-Dakin' method of wound irrigation saves thousands of limbs from gangrene. However, the sheer density of trench warfare creates new horrors (Trench Foot, Spanish Flu incubation). The 'vitamins' are discovered (A, B), moving nutrition from 'calories' to 'micronutrients,' curing rickets and pellagra.",
          "key_manifestations": [
            "Mass use of Tetanus antitoxin",
            "Identification of Vitamin A (McCollum)",
            "Carrel-Dakin solution standardization",
            "Sanger's 'Family Limitation' (birth control as hygiene)"
          ]
        },
        "1919": {
          "salience_share": 63.5,
          "description": "A tragic surge (+4.5%). The catalyst is the Spanish Flu (1918-1919), which kills 50 million people, more than the war. It reveals the limits of the cluster: they have no cure for viruses, only 'Non-Pharmaceutical Interventions' (masks, distancing). It proves that a globalized world (Cluster 6) is a perfect petri dish. The failure spurs a massive investment in virology. The League of Nations Health Organization is founded, the precursor to the WHO.",
          "key_manifestations": [
            "The Spanish Flu Pandemic (Peak mortality)",
            "Founding of the League of Nations Health Organization",
            "Banting and Best discover Insulin (managing chronic biological failure)",
            "Kafka's 'A Country Doctor' (existential impotence of medicine)"
          ]
        },
        "1924": {
          "salience_share": 66.0,
          "description": "Recovery and growth (+2.5%). The catalyst is the TB Vaccine (BCG) and the Diphtheria toxoid. We enter the 'Era of Immunization.' Children begin to be vaccinated systematically, not just for smallpox. Fleming discovers Penicillin (1928), a mold that kills bacteria, but he cannot stabilize it. It remains a lab curiosity. The 'Iron Lung' is invented for Polio victims, blending the industrial machine with the failing biological body.",
          "key_manifestations": [
            "Introduction of BCG vaccine for Tuberculosis",
            "Alexander Fleming discovers Penicillin (1928)",
            "Drinkwater's 'Iron Lung' usage",
            "Mann's 'The Magic Mountain' (the Sanatorium culture)"
          ]
        },
        "1929": {
          "salience_share": 68.2,
          "description": "Steady progress (+2.2%). Sulfa drugs (Prontosil) are developed by Gerhard Domagk (1932/35), the first commercially viable antibacterial pills. This is the 'miracle cure' for streptococcus. Mothers no longer die from childbirth fever; soldiers survive infected wounds. The 'Eugenics' movement gains variance, representing the dark side of the cluster: if the state can manage health, can it also manage the 'quality' of the stock? Sterilization laws spread.",
          "key_manifestations": [
            "Domagk's discovery of Prontosil (Sulfa)",
            "Buck v. Bell (Supreme Court upholding sterilization)",
            "Ruska invents the Electron Microscope (seeing viruses for the first time)",
            "Huxley's 'Brave New World' (engineered biology)"
          ]
        },
        "1934": {
          "salience_share": 71.0,
          "description": "Variance rises (+2.8%). The Sulfa craze takes off. The mortality rate for pneumonia and puerperal fever crashes. The 'March of Dimes' is founded (FDR), the first mass-media fundraising campaign for a specific disease (Polio), proving that 'crowdfunding' medical research works. The connection between smoking and cancer is first statistically identified by Nazi researchers (clean body ideology), though ignored by the Allies.",
          "key_manifestations": [
            "Commercial release of Prontosil",
            "Founding of the March of Dimes",
            "Muller's Nobel for X-ray mutagenesis (genetics)",
            "Orwell's 'The Road to Wigan Pier' (squalor analysis)"
          ]
        },
        "1939": {
          "salience_share": 75.5,
          "description": "A massive wartime spike (+4.5%). The catalyst is the industrialization of Penicillin. Florey and Chain (Oxford) bring it to the US, where deep-tank fermentation (Cluster 1) allows for mass production. By D-Day, it is available for Allied troops. It is a strategic weapon: the Allies heal, the Axis rot. DDT is used to wipe out typhus in Naples, the first time an epidemic is stopped by chemical pesticide. The 'Manhattan Project of Biology' succeeds.",
          "key_manifestations": [
            "Mass production of Penicillin",
            "Use of DDT to stop Typhus in Naples",
            "Waksman discovers Streptomycin (TB cure)",
            "Camus' 'The Plague' (metaphor for fascism/occupation)"
          ]
        },
        "1944": {
          "salience_share": 78.0,
          "description": "The 'Golden Age' of Antibiotics begins (+2.5%). Streptomycin cures Tuberculosis, emptying the sanatoriums. The victory over the 'White Plague' is a monumental cultural relief. The NHS is founded in the UK (1948), institutionalizing the idea that healthcare is a human right, free at the point of use. The WHO is established, coordinating the global eradication of malaria and smallpox.",
          "key_manifestations": [
            "Waksman's Streptomycin cures Tuberculosis",
            "Establishment of the World Health Organization",
            "Founding of the NHS (National Health Service)",
            "Kinsey Reports (scientific observation of sexual biology)"
          ]
        },
        "1949": {
          "salience_share": 81.0,
          "description": "Variance peaks (+3.0%) with the Polio Vaccine race. The catalyst is the terror of Polio summers targeting children. Salk (killed virus) and Sabin (live virus) become national heroes. The 1954 field trial is the largest public health experiment in history. The 'pill' (Oral Contraceptive) is in development, promising to sever the link between sex and reproduction, a sanitary control over the female biological function.",
          "key_manifestations": [
            "Salk Polio Vaccine Field Trials",
            "Watson and Crick's DNA Double Helix structure",
            "First Kidney Transplant (success)",
            "Cleanup of London Smog (Clean Air Act 1956)"
          ]
        },
        "1954": {
          "salience_share": 83.5,
          "description": "The cluster dominates daily life (+2.5%). The 'Polio Victory' (1955) leads to a belief in the 'End of Infectious Disease.' We pivot to 'Lifestyle Diseases' (Cancer, Heart Disease). Thalidomide (1957) is the tragic check; a drug for morning sickness causes birth defects, leading to rigorous FDA testing phases. It reveals the danger of intervening in fetal development. DNA structure (1953) begins to shift the focus from 'Germs' to 'Genes.'",
          "key_manifestations": [
            "Approval of Enovid (The Pill) for menstrual disorders",
            "The Thalidomide Tragedy",
            "Burnet's Clonal Selection Theory (Immunology)",
            "Introduction of the disposable syringe"
          ]
        },
        "1959": {
          "salience_share": 82.0,
          "description": "A slight decline in relative variance (-1.5%) as urgency fades. Antibiotics are cheap and ubiquitous. The focus shifts to the 'Green Revolution' (using chemicals to feed the population explosion caused by the cluster). Rachel Carson\u2019s *Silent Spring* (1962) attacks DDT, the hero of 1944, marking the end of blind faith in chemical salvation. The 'Sabin' oral polio vaccine on a sugar cube becomes the symbol of painless public health.",
          "key_manifestations": [
            "Rachel Carson's 'Silent Spring'",
            "Sabin Oral Polio Vaccine distribution",
            "Measles Vaccine licensed",
            "Foucault's 'Birth of the Clinic' (analyzing the medical gaze)"
          ]
        },
        "1964": {
          "salience_share": 80.0,
          "description": "Stasis (-2.0%). Smallpox is being eradicated globally by the WHO (ring vaccination). Heart transplants (Barnard, 1967) capture the headlines, moving focus to 'spare parts' surgery. The Surgeon General\u2019s Report on Smoking (1964) identifies the new miasma: tobacco smoke. This begins the long war against lifestyle vices. The 'Counterculture' explores alternative medicine, questioning the mechanistic view of the body.",
          "key_manifestations": [
            "Surgeon General's Report on Smoking and Health",
            "First Heart Transplant (Christiaan Barnard)",
            "WHO Smallpox Eradication Program intensification",
            "Sontag's 'Against Interpretation' (metaphor of illness)"
          ]
        },
        "1969": {
          "salience_share": 78.0,
          "description": "Variance declines (-2.0%) due to success. The 'War on Cancer' is declared (Nixon, 1971), assuming it can be cured like an infection (Manhattan Project model), but it fails, revealing that chronic diseases are systemic, not foreign invaders. Bioethics emerges as a field (Tuskegee syphilis study revealed). The CT Scan is invented, allowing us to slice the living body digitally.",
          "key_manifestations": [
            "Nixon signs the National Cancer Act",
            "Revelation of the Tuskegee Syphilis Study",
            "Invention of the CT Scan (Hounsfield)",
            "Crichton's 'The Andromeda Strain' (fear of space germs)"
          ]
        },
        "1974": {
          "salience_share": 75.0,
          "description": "The Hubris peak (-3.0%). Smallpox is eradicated (last case 1977). This is the greatest achievement of the cluster. However, Legionnaires' Disease (1976) and Ebola (1976) appear, warning that nature has more ammunition. The 'Recombinant DNA' debate (Asilomar Conference) begins: can we engineer the germs ourselves? We pause to create safety protocols for genetic engineering.",
          "key_manifestations": [
            "Eradication of Smallpox (Somalia case)",
            "Asilomar Conference on Recombinant DNA",
            "Discovery of Ebola and Legionnaires' Disease",
            "Dawkins' 'The Selfish Gene' (biology as information)"
          ]
        },
        "1979": {
          "salience_share": 85.0,
          "description": "A terrifying resurgence (+10.0%). The catalyst is the emergence of HIV/AIDS. A mysterious 'cancer' in gay men (GRID) destroys the immune system. It defies the antibiotic paradigm (it's a retrovirus) and the quarantine paradigm (long latency). It re-sexualizes disease and brings the 'Plague' metaphor back to the West. The variance explodes because it forces a total restructuring of blood supply, sexual behavior, and patient activism (ACT UP).",
          "key_manifestations": [
            "CDC MMWR report on Pneumocystis pneumonia (AIDS start)",
            "Discovery of HIV (LAV/HTLV-III)",
            "Approval of Cyclosporine (enabling organ transplants)",
            "Kramer's 'The Normal Heart'"
          ]
        },
        "1984": {
          "salience_share": 88.0,
          "description": "Peak Panic (+3.0%). HIV is identified as the cause of AIDS. The 'Grim Reaper' ads. Ryan White. The realization that there is no cure. AZT (1987) is approved, the first antiretroviral, but toxic. PCR (Polymerase Chain Reaction) is invented by Mullis, allowing us to 'xerox' DNA, the foundation of modern diagnostics. We can now find the needle in the biological haystack.",
          "key_manifestations": [
            "Kary Mullis invents PCR",
            "FDA approval of AZT",
            "The AIDS Quilt",
            "Shilts' 'And the Band Played On'"
          ]
        },
        "1989": {
          "salience_share": 86.0,
          "description": "Stabilization (-2.0%). The search for the 'Magic Johnson' cocktail begins. The Human Genome Project launches (1990), aiming to read the entire source code of the human biocomputer. This shifts the cluster from 'Killing Germs' to 'Reading Code.' Mad Cow Disease (BSE) breaks out in the UK, a terrifying 'prion' disease caused by industrial cannibalism (feeding cows to cows), creating a panic about the food supply.",
          "key_manifestations": [
            "Launch of the Human Genome Project",
            "Mad Cow Disease (BSE) crisis",
            "Preston's 'The Hot Zone' (Ebola panic)",
            "Angels in America (play)"
          ]
        },
        "1994": {
          "salience_share": 84.0,
          "description": "The 'Cocktail' Era (-2.0%). HAART (Highly Active Antiretroviral Therapy) turns AIDS from a death sentence into a chronic condition. The Lazarus Effect. Mortality drops. However, Antibiotic Resistance (MRSA) becomes a major hospital threat, the bacteria evolving to beat our weapons. Dolly the Sheep (1996) is cloned, proving mammals can be copied. The biological firewall is crumbling.",
          "key_manifestations": [
            "Introduction of HAART (Protease Inhibitors)",
            "Cloning of Dolly the Sheep",
            "Gattaca (film - genetic determinism)",
            "Emergence of H5N1 Bird Flu (Hong Kong)"
          ]
        },
        "1999": {
          "salience_share": 82.0,
          "description": "Global Health Pivot (-2.0%). The Bill & Melinda Gates Foundation (2000) is formed, applying 'venture philanthropy' to global health (Malaria, Polio). They treat health as an engineering problem to be solved with capital and tech. The Anthrax attacks (2001) weaponize the cluster, creating a 'Biodefense' industry. SARS (2003) is a dress rehearsal for the pandemic, stopped by rapid global information sharing.",
          "key_manifestations": [
            "Founding of the Gates Foundation",
            "Amerithrax (Anthrax letters)",
            "SARS outbreak and containment",
            "Completion of the Human Genome Draft"
          ]
        },
        "2004": {
          "salience_share": 80.0,
          "description": "Stasis (-2.0%). The 'Omics' era. We have the genome, now we want the proteome, microbiome. The realization that we are 90% bacteria (Microbiome) shifts the narrative from 'Kill all Germs' to 'Gardening the Gut.' Probiotics rise. The 'Anti-Vax' movement gains steam (Wakefield fallout), threatening herd immunity.",
          "key_manifestations": [
            "Human Microbiome Project launch",
            "Wakefield's Lancet paper retracted (eventually)",
            "I Am Legend (film - virus as cure gone wrong)",
            "Approval of Gardasil (HPV vaccine - cancer prevention)"
          ]
        },
        "2009": {
          "salience_share": 78.0,
          "description": "Pandemic Fatigue (-2.0%). Swine Flu (H1N1) turns out to be mild, leading to complacency. CRISPR-Cas9 (2012) is discovered, the 'Word Processor' for DNA. We can now edit the code of life cheaply and easily. This is the god-mode unlock for the cluster. Ebola in West Africa (2014) terrifies the world again but remains contained.",
          "key_manifestations": [
            "Doudna and Charpentier's CRISPR-Cas9 paper",
            "West Africa Ebola Epidemic",
            "Contagion (film - accurate prediction)",
            "Theranos collapse (fraud in the diagnostic hope)"
          ]
        },
        "2014": {
          "salience_share": 76.0,
          "description": "The Calm before the Storm (-2.0%). CRISPR babies (He Jiankui, 2018) shock the ethical world. We have crossed the line. Antimicrobial resistance (AMR) is declared a global crisis by the UN. The feeling that 'the big one' is coming grows in expert circles, but funding for preparedness is cut.",
          "key_manifestations": [
            "He Jiankui's CRISPR babies announcement",
            "UN High-Level Meeting on Antimicrobial Resistance",
            "Bill Gates' TED Talk warning of Pandemic",
            "Chernobyl (TV series - truth vs. state in disaster)"
          ]
        },
        "2019": {
          "salience_share": 95.0,
          "description": "The System Crash (+19.0%). COVID-19. The cluster variance consumes the entire world. The catalyst is SARS-CoV-2. The entire global economy shuts down (Non-Pharmaceutical Interventions) to save the healthcare system. The 'New Normal.' Then, the 'Moonshot': mRNA vaccines (Pfizer/Moderna) are designed in days and deployed in months. This is the triumph of 'Information Biology'\u2014using the virus's code to instruct the body. The mask becomes the primary cultural symbol.",
          "key_manifestations": [
            "COVID-19 Global Lockdowns",
            "mRNA Vaccine rollout (Pfizer/Moderna)",
            "The Great Barrington Declaration (dissent)",
            "Zoom (the tool of the quarantined)"
          ]
        },
        "2024": {
          "salience_share": 85.0,
          "description": "The Hangover (-10.0%). The acute phase is over, but 'Long COVID' and the erosion of trust in public health persist. The displacing force is the politicization of the cluster. 'Biosecurity' becomes a national defense priority. We are entering the age of 'Pan-Coronavirus' vaccines and AI-designed drugs (AlphaFold). The fear of 'Lab Leak' creates a demand for regulating high-containment biology. Bird Flu (H5N1) in cattle hints at the next jump.",
          "key_manifestations": [
            "AlphaFold 3 predicting drug-protein interactions",
            "Treaty on Pandemic Prevention (WHO negotiations)",
            "Nolan's 'Oppenheimer' (science/consequence parallel)",
            "Wegovy/Ozempic (solving the obesity epidemic via injection)"
          ]
        }
      }
    },
    "4_computational_information_processing": {
      "name": "Computational Information Processing",
      "description": "This eigencluster maps the externalization of the human mind. It tracks the evolution from mechanical calculation (Babbage) to analog tabulation (Hollerith), to digital logic (Turing/Von Neumann), and finally to distributed synthetic cognition (AI). It is the shift from processing 'matter' to processing 'bits.' It includes the hardware (vacuum tubes to silicon), the software (logic/code), and the network (internet) that connects them.",
      "trajectory": {
        "1789": {
          "salience_share": 0.5,
          "description": "Variance is negligible. Calculation is a manual labor performed by humans called 'computers.' The catalyst is the need for accurate navigational tables (logarithms) for the Navy. Errors in these tables cause shipwrecks. The 'Prony' project in France attempts to organize human computers using the division of labor, treating math as a factory process.",
          "key_manifestations": [
            "Baron de Prony's 'Cadastre' tables project",
            "Pre-revolution French semaphore lines (Chappe)",
            "Lagrange's 'M\u00e9canique Analytique' (algorithmizing physics)",
            "Jacquard's early experiments with loom control"
          ]
        },
        "1794": {
          "salience_share": 0.6,
          "description": "Stasis (+0.1%). The Chappe Semaphore line is established, the first 'mechanical internet,' transmitting messages across France at the speed of vision. It proves that information can be decoupled from the messenger. However, calculation remains obstinately manual.",
          "key_manifestations": [
            "Expansion of the Chappe Semaphore system",
            "Establishment of the Bureau des Longitudes",
            "Gauss's 'Disquisitiones Arithmeticae' (number theory foundation)",
            "Proposed metric system decimalization (rationalizing data)"
          ]
        },
        "1799": {
          "salience_share": 0.8,
          "description": "Variance creeps upward (+0.2%) as the concept of 'programmability' enters the material world. The catalyst is the impending perfection of the Jacquard mechanism (patented 1804, developed now). This device uses a chain of punched cards to control the warp threads of a loom. It is the first separation of 'data' (the pattern) from the 'hardware' (the loom). The pattern can be stored, replicated, and modified without rebuilding the machine. This is the ancestor of the floppy disk.",
          "key_manifestations": [
            "Joseph Marie Jacquard's early loom prototypes",
            "Establishment of the Royal Institution (scientific dissemination)",
            "Laplace's 'Celestial Mechanics' (determinism via calculation)",
            "Fulton's submarine 'Nautilus' (calculating buoyancy)"
          ]
        },
        "1804": {
          "salience_share": 1.2,
          "description": "A definite step (+0.4%) with the commercialization of the Jacquard Loom. The 'punch card' is now a widespread industrial reality in France. It demonstrates that complex information can be encoded in binary states (hole/no hole). While applied to textiles, the abstraction is visible to the intelligentsia. In Germany, Gauss begins to formalize the methods of least squares, creating the statistical tools that will one day process the data.",
          "key_manifestations": [
            "Jacquard Loom widespread adoption in Lyon",
            "Gauss's work on orbital calculations (Ceres)",
            "Dalton's Atomic Theory (discrete units of matter)",
            "Beethoven's Eroica (complexity of structure)"
          ]
        },
        "1809": {
          "salience_share": 1.3,
          "description": "Stasis (+0.1%). The focus is on the industrial application of the loom, not the expansion of the logic. The Napoleonic Wars consume the mathematical talent (ballistics/logistics). However, the 'calculating boy' phenomenon (savants) captures public attention, raising the question: is calculation a mechanical process of the brain?",
          "key_manifestations": [
            "Zerah Colburn (mental calculator) tour",
            "Oersted's search for connection between electricity and magnetism",
            "Lamarck's 'Philosophie Zoologique' (pre-Darwinian evolution)",
            "Code Penal (codifying rules of society)"
          ]
        },
        "1814": {
          "salience_share": 1.5,
          "description": "Slow growth (+0.2%). Charles Babbage enters the scene at Cambridge (Analytical Society). The catalyst is the 'crisis of errors' in astronomical tables used for navigation. Babbage realizes that as long as humans calculate, there will be errors. The solution must be to 'calculate by steam.' This is the conceptual birth of the Difference Engine\u2014a machine to embody mathematical law.",
          "key_manifestations": [
            "Formation of the Analytical Society (Cambridge)",
            "Berzelius's table of atomic weights (data organization)",
            "Fraunhofer lines (encoding light info)",
            "Scott's 'Waverley' (historical data processing)"
          ]
        },
        "1819": {
          "salience_share": 2.1,
          "description": "Variance rises (+0.6%) as Babbage begins construction. The 'Difference Engine' is not just a calculator; it is a printer. It aims to typeset its results directly to avoid transcription errors. This links computation to output. In France, the Arithmometer (Thomas de Colmar) is patented (1820), the first commercially successful mechanical calculator, proving a market exists for 'processed numbers.'",
          "key_manifestations": [
            "Babbage's design for Difference Engine No. 1",
            "Thomas de Colmar's Arithmometer patent",
            "Fresnel's wave theory of light (mathematical physics)",
            "Keats' 'Ode on a Grecian Urn' (static information)"
          ]
        },
        "1824": {
          "salience_share": 2.5,
          "description": "Steady progress (+0.4%). The British government funds Babbage, the first state grant for 'computer science.' The project is plagued by the precision limits of current machining (Cluster 1 constraint). The 'Braille' system (1824) encodes the alphabet into binary tactile dots, another example of information abstraction spreading through the culture.",
          "key_manifestations": [
            "Government Grant to Babbage",
            "Louis Braille's system finalized",
            "Electromagnet invention (Sturgeon) - the future switch",
            "Carnot's thermodynamics (information/entropy link unknown yet)"
          ]
        },
        "1829": {
          "salience_share": 2.8,
          "description": "Growth (+0.3%). The Difference Engine stalls, but the concept of 'machined thought' persists. The catalyst for future variance is Joseph Henry\u2019s work on the telegraph (sending impulses over wire). While distinct from computing, it builds the 'bus' that will one day carry the bits. The 'encyclopedia' boom (Britannica) reflects a desire to organize total human information.",
          "key_manifestations": [
            "Joseph Henry's telegraph experiments",
            "Publication of Encyclopedia Americana",
            "Lobachevsky's non-Euclidean geometry (breaking axioms)",
            "Stephenson's Rocket (mechanical precision)"
          ]
        },
        "1834": {
          "salience_share": 3.8,
          "description": "A conceptual quantum leap (+1.0%). Babbage abandons the Difference Engine for the 'Analytical Engine.' This is the catalyst. He conceives of a machine with a 'Store' (memory) and a 'Mill' (CPU), controlled by Jacquard cards. It is Turing-complete. Ada Lovelace begins her collaboration, realizing the machine can manipulate any symbol, not just numbers ('The engine might compose elaborate and scientific pieces of music'). This is the birth of the 'General Purpose Computer' idea.",
          "key_manifestations": [
            "Babbage's 'Analytical Engine' designs",
            "Ada Lovelace's correspondence with Babbage",
            "Gauss and Weber's telegraph line in G\u00f6ttingen",
            "Whewell coins the term 'Scientist' (professionalizing the processor)"
          ]
        },
        "1839": {
          "salience_share": 4.5,
          "description": "Variance rises (+0.7%) as the 'Telegraph' goes commercial (Cooke/Wheatstone, Morse). The encoding of language into dots and dashes (Morse Code) is the first digital transmission protocol. It proves that information is a fluid that can be divorced from matter and sent instantly. This begins the 'Real-Time' era. Photography (Daguerreotype) is the analog capture of information (light) onto a substrate.",
          "key_manifestations": [
            "Commercialization of the Telegraph (Great Western Railway)",
            "Morse's 'What Hath God Wrought' (prep)",
            "Daguerreotype (analog info storage)",
            "Poe's 'The Fall of the House of Usher' (psychological collapse)"
          ]
        },
        "1844": {
          "salience_share": 5.2,
          "description": "Growth (+0.7%) focused on 'Network' effects. The telegraph network expands rapidly, creating a 'stock ticker' economy. Information about price is now more valuable than the commodity itself. Ada Lovelace publishes her 'Notes' on the Analytical Engine, including the first algorithm (Bernoulli numbers). It remains a theoretical artifact, as the machine is never built, but the *idea* is planted in the intellectual soil.",
          "key_manifestations": [
            "Ada Lovelace's 'Notes' in Taylor's Scientific Memoirs",
            "Morse's Washington-Baltimore line",
            "Marx's 'Economic and Philosophic Manuscripts' (alienation)",
            "Dumas' 'The Count of Monte Cristo' (information as power)"
          ]
        },
        "1849": {
          "salience_share": 5.8,
          "description": "Variance rises (+0.6%) with the dawn of 'Symbolic Logic.' George Boole is working on *The Laws of Thought*. The catalyst is the realization that logical propositions (True/False) can be treated algebraically. This 'Boolean Algebra' will eventually be the physical logic of the microchip. For now, it is an obscure branch of philosophy. The telegraph cable crosses the Channel (1850), linking national networks.",
          "key_manifestations": [
            "George Boole's 'The Mathematical Analysis of Logic'",
            "Submarine Telegraph across the English Channel",
            "Foucault's Pendulum (visualizing planetary physics)",
            "Melville's 'Moby Dick' (encyclopedic cetology)"
          ]
        },
        "1854": {
          "salience_share": 6.5,
          "description": "A pivotal intellectual moment (+0.7%). Boole publishes *The Laws of Thought*. He explicitly links logic to algebra: x(1-x)=0. This is the foundation of the binary universe. The catalyst for physical processing is the Crimean War, which creates a data crisis for the British Army. Florence Nightingale uses 'Polar Area Diagrams' to process this data, inventing modern data visualization to influence policy. Information is weaponized for reform.",
          "key_manifestations": [
            "George Boole's 'An Investigation of the Laws of Thought'",
            "Florence Nightingale's Rose Diagrams",
            "Dickens' 'Hard Times' (Mr. Gradgrind's 'Facts')",
            "Riemann's geometry (multidimensional manifolds)"
          ]
        },
        "1859": {
          "salience_share": 7.2,
          "description": "Variance grows (+0.7%). The Atlantic Cable (1858) briefly connects the continents before failing, proving the demand for global bandwidth. The 'Pony Express' is a stop-gap for the bandwidth latency gap. Darwin's *Origin* introduces the algorithm of natural selection: random mutation + non-random selection = design. Biology is reframed as an information processing system (though DNA is unknown).",
          "key_manifestations": [
            "Darwin's 'Origin of Species' (evolutionary algorithm)",
            "Failure of the first Transatlantic Cable",
            "Lenoir's gas engine (combustion as info-to-motion)",
            "Mill's 'On Liberty' (freedom of information/speech)"
          ]
        },
        "1864": {
          "salience_share": 8.5,
          "description": "Significant rise (+1.3%). The Transatlantic Cable finally succeeds (1866). The world is wired. The 'stock ticker' (Edison's improvement) allows for the continuous, distinct flow of financial data. Maxwell publishes his equations, unifying electricity and magnetism into a field theory\u2014this is the physics of the future signal carrier. The typewriter (Sholes and Glidden) is patented, mechanizing the input of text.",
          "key_manifestations": [
            "Maxwell's 'A Dynamical Theory of the Electromagnetic Field'",
            "Successful Transatlantic Cable (SS Great Eastern)",
            "Patent for the Sholes and Glidden Typewriter",
            "Mendel's work on peas (digital genetics, ignored)"
          ]
        },
        "1869": {
          "salience_share": 9.2,
          "description": "Growth (+0.7%). The Typewriter enters commercial production (Remington). This standardizes the 'QWERTY' interface, which will survive into the iPhone era. It creates a new class of worker: the 'Type-writer' (secretary), feminizing the clerical workforce. Mendeleev's Periodic Table is a 'database' of matter, predicting missing elements based on pattern recognition.",
          "key_manifestations": [
            "Mendeleev's Periodic Table",
            "Remington acquires Typewriter patent",
            "Jules Verne's '20,000 Leagues' (Nemo's library/tech)",
            "Opening of the Suez Canal (logistical info flow)"
          ]
        },
        "1874": {
          "salience_share": 10.5,
          "description": "Variance surges (+1.3%) with the invention of the Telephone (Bell). The catalyst is the shift from 'coded' (telegraph) to 'analog' (voice) transmission. This expands the network's utility to the untrained masses. Simultaneously, Lord Kelvin develops the 'Harmonic Analyzer' (tide predictor), an early analog computer to solve differential equations. The machine is beginning to simulate the physical world.",
          "key_manifestations": [
            "Alexander Graham Bell's Telephone Patent",
            "Lord Kelvin's Tide Predicting Machine",
            "Dewey Decimal System (organizing the library database)",
            "Boltzmann's entropy (information/thermodynamics link)"
          ]
        },
        "1879": {
          "salience_share": 11.2,
          "description": "Steady growth (+0.7%). The Telephone exchange is invented\u2014the 'switchboard.' This is the first logic gate of the network, manually operated by humans (operators). The US Census is growing too large to count by hand (8 years to process 1880). This pressure creates the demand for automation. Herman Hollerith begins investigating punch cards.",
          "key_manifestations": [
            "First Telephone Exchanges",
            "Hollerith's early work on census automation",
            "Michelson-Morley experiment prep (measuring light speed)",
            "Edison's Menlo Park lab (R&D as information process)"
          ]
        },
        "1884": {
          "salience_share": 13.5,
          "description": "A breakout moment (+2.3%). Herman Hollerith files his patent for the Electric Tabulating Machine. The catalyst is the 1890 Census contract. He uses Jacquard's punch cards to store citizen data and electrical circuits to count them. This is the birth of 'Big Data' and the lineage of IBM. It proves that governance requires computation. In logic, Frege publishes *Die Grundlagen der Arithmetik*, attempting to derive math from pure logic.",
          "key_manifestations": [
            "Hollerith's Punch Card Patent",
            "Frege's 'The Foundations of Arithmetic'",
            "Nietzsche's 'Thus Spoke Zarathustra' (prophetic download)",
            "Mark Twain's 'Huckleberry Finn' (written on a typewriter)"
          ]
        },
        "1889": {
          "salience_share": 15.0,
          "description": "Variance rises (+1.5%) as the Hollerith machines process the 1890 Census in record time (2.5 years vs 8). The data reveals the closing of the frontier. The 'Tabulating Machine Company' is formed. The 'Monotype' and 'Linotype' machines automate typesetting, turning news into an industrial stream. The world is being converted into data points.",
          "key_manifestations": [
            "1890 US Census (The first automated census)",
            "Founding of the Tabulating Machine Company (IBM ancestor)",
            "Hollerith's card sorter",
            "Tesla's Nikola Tesla Company (AC motors/fields)"
          ]
        },
        "1894": {
          "salience_share": 16.2,
          "description": "Growth (+1.2%). Marconi invents wireless telegraphy. The signal is liberated from the wire. This is 'action at a distance.' The discovery of the Electron (Thomson, 1897) provides the physical particle that will eventually carry the bit. H.G. Wells writes *The Time Machine*, treating time as a dimension to be traversed (processed).",
          "key_manifestations": [
            "Marconi's wireless experiments",
            "J.J. Thomson's discovery of the electron",
            "Lumi\u00e8re Brothers' Cinematograph (capturing time)",
            "Roentgen's X-Rays (seeing the invisible)"
          ]
        },
        "1899": {
          "salience_share": 17.5,
          "description": "Stasis (+1.3%). The focus is on scaling the existing tech (telephone networks, tabulating machines in insurance/railroads). The 'Vertical File' (filing cabinet) is invented, revolutionizing office memory. Hilbert poses his '23 Problems' (1900), setting the program for 20th-century mathematics, including the question of whether all math is decidable (Entscheidungsproblem), which will trigger Turing.",
          "key_manifestations": [
            "Hilbert's 23 Problems (Paris Conference)",
            "Kodak 'Brownie' camera (democratizing image capture)",
            "Planck's Quantum Theory (discretizing energy)",
            "Freud's 'Interpretation of Dreams' (decoding the mind)"
          ]
        },
        "1904": {
          "salience_share": 18.8,
          "description": "Variance rises (+1.3%) with the invention of the Vacuum Tube (Fleming Valve). This is the 'switch' that has no moving parts. It allows for the manipulation of electron flows at speed. Though initially for radio, it is the embryo of the digital logic gate. The Russo-Japanese war is the first 'wireless war,' coordinated by radio.",
          "key_manifestations": [
            "John Ambrose Fleming's Vacuum Tube patent",
            "Einstein's Special Relativity (Time/Space processing)",
            "Russo-Japanese War wireless usage",
            "Weber's 'Protestant Ethic' (rationalization of society)"
          ]
        },
        "1909": {
          "salience_share": 20.1,
          "description": "Steady growth (+1.3%). The De Forest 'Audion' (Triode) amplifies signals, making transcontinental telephone and radio broadcasting possible. This creates the 'Mass Media' capability. Principia Mathematica (Whitehead/Russell) attempts to ground all math in logic, a project that will ironically prove the limits of computation later.",
          "key_manifestations": [
            "Lee De Forest's Audion (Triode)",
            "Whitehead and Russell's 'Principia Mathematica' (Vol 1)",
            "Taylor's Scientific Management (human as algorithm)",
            "Titanic sinking (wireless distress signal failure/success)"
          ]
        },
        "1914": {
          "salience_share": 22.5,
          "description": "War accelerates the cluster (+2.4%). WWI requires massive ballistic calculations. 'Human Computers' (mostly women) are organized into vast processing arrays. Cryptography becomes a central strategic element (Zimmermann Telegram). The 'teletype' automates the telegraph. The need to coordinate millions of men and shells forces a leap in bureaucratic data processing (IBM machines).",
          "key_manifestations": [
            "Intercept of the Zimmermann Telegram",
            "Expansion of 'Human Computer' pools in ballistics",
            "IBM's Hollerith machines tracking logistics",
            "Noether's Theorem (symmetry and conservation)"
          ]
        },
        "1919": {
          "salience_share": 24.2,
          "description": "Post-war consolidation (+1.7%). The Tabulating Machine Company merges to become CTR (later IBM). The radio boom begins\u2014the first 'broadcast' era. Information is now a consumer utility. In physics, Quantum Mechanics (Heisenberg/Schr\u00f6dinger) introduces probability and uncertainty, destroying the deterministic clockwork universe.",
          "key_manifestations": [
            "Formation of RCA (Radio Corporation of America)",
            "CTR renamed International Business Machines (1924 prep)",
            "Czech play 'R.U.R.' coins the word 'Robot'",
            "Wittgenstein's 'Tractatus' (limits of language/logic)"
          ]
        },
        "1924": {
          "salience_share": 26.5,
          "description": "Variance rises (+2.3%). The 'Differential Analyzer' (Vannevar Bush) is developed\u2014a massive analog computer to solve differential equations. It is the peak of mechanical computing. TV is demonstrated (Baird), promising the transmission of moving images. IBM under Thomas Watson Sr. creates the culture of 'THINK,' turning data processing into a corporate religion.",
          "key_manifestations": [
            "Vannevar Bush's Differential Analyzer experiments",
            "John Logie Baird's first TV demonstration",
            "Heisenberg's Uncertainty Principle",
            "Fritz Lang's 'Metropolis' (the machine-human interface)"
          ]
        },
        "1929": {
          "salience_share": 28.0,
          "description": "Stasis (+1.5%) during the crash, but theoretical foundations are laid. Kurt G\u00f6del publishes his 'Incompleteness Theorems' (1931), proving that no logical system can be both complete and consistent. This shatters the Hilbert program but clears the way for Turing to define what *can* be computed. The Depression increases the demand for state efficiency (New Deal statistics).",
          "key_manifestations": [
            "Kurt G\u00f6del's Incompleteness Theorems",
            "Establishment of the Social Security Administration (massive data ID)",
            "BBC starts regular TV broadcasts",
            "Huxley's 'Brave New World' (conditioning as programming)"
          ]
        },
        "1934": {
          "salience_share": 31.5,
          "description": "The Theoretical Singularity (+3.5%). The catalyst is Alan Turing\u2019s 1936 paper 'On Computable Numbers.' He conceptualizes the 'Universal Turing Machine'\u2014an abstract machine that can simulate any other machine. This is the invention of 'Software.' Claude Shannon (1937) proves that electrical switches can implement Boolean algebra. The theory (Turing) and the hardware (Shannon) are linked. Zuse builds the Z1 in Germany, the first binary mechanical computer.",
          "key_manifestations": [
            "Alan Turing's 'On Computable Numbers'",
            "Claude Shannon's Masters Thesis (switches = logic)",
            "Konrad Zuse's Z1 computer",
            "Wells' 'World Brain' (predicting the internet)"
          ]
        },
        "1939": {
          "salience_share": 36.2,
          "description": "War triggers the Hardware Singularity (+4.7%). The catalyst is the need to break the Enigma code (Bletchley Park) and calculate artillery tables (US). The 'Bombe' is built. Zuse builds the Z3 (first electromechanical programmable computer). The 'Manhattan Project' requires massive calculations (Feynman managing human computers). The drive is existential: calculate or die.",
          "key_manifestations": [
            "Turing's 'Bombe' at Bletchley Park",
            "Zuse's Z3 (operational)",
            "Atanasoff-Berry Computer (electronic digital)",
            "Borges' 'The Library of Babel' (infinite information)"
          ]
        },
        "1944": {
          "salience_share": 41.5,
          "description": "The birth of the Electronic Computer (+5.3%). The catalyst is the construction of Colossus (UK) to break Lorenz codes and ENIAC (US) for H-bomb/artillery. ENIAC is the first general-purpose electronic computer. Von Neumann writes the 'First Draft of a Report on the EDVAC,' defining the 'stored-program architecture' (Von Neumann architecture) where data and code share the same memory. This is the blueprint for every computer since. Vannevar Bush writes 'As We May Think,' predicting the Memex (Hypertext).",
          "key_manifestations": [
            "Completion of ENIAC",
            "Von Neumann's 'First Draft' (Stored Program concept)",
            "Vannevar Bush's 'As We May Think' (Atlantic Monthly)",
            "Wiener's 'Cybernetics' (control and communication)"
          ]
        },
        "1949": {
          "salience_share": 45.0,
          "description": "Variance rises (+3.5%) with the invention of the Transistor (Shockley/Bardeen/Brattain) at Bell Labs (1947). This is the 'Fire' of the information age\u2014small, cool, reliable switching. Claude Shannon publishes 'A Mathematical Theory of Communication,' defining the 'bit' and Information Theory. He proves communication is a statistical problem. The first commercial computers (UNIVAC) appear. Orwell's *1984* fears the database state.",
          "key_manifestations": [
            "Invention of the Point-contact Transistor",
            "Claude Shannon's 'A Mathematical Theory of Communication'",
            "UNIVAC I (predicting the 1952 election)",
            "Turing Test proposed ('Computing Machinery and Intelligence')"
          ]
        },
        "1954": {
          "salience_share": 48.5,
          "description": "Growth (+3.5%). The 'Mainframe' era begins. IBM 700 series. FORTRAN (1957) is developed, the first high-level language, allowing scientists to write code in math-like notation rather than assembly. This 'democratizes' coding to the priesthood of engineers. The Soviets launch Sputnik (1957), creating the 'Missile Gap' panic, which leads to the creation of ARPA (DARPA), the future parent of the Internet.",
          "key_manifestations": [
            "Backus develops FORTRAN",
            "Launch of Sputnik (triggering ARPA)",
            "The Rosenblatt Perceptron (early neural net)",
            "Asimov's 'The Last Question' (entropy and AC)"
          ]
        },
        "1959": {
          "salience_share": 53.0,
          "description": "The Silicon Dawn (+4.5%). The catalyst is the invention of the Integrated Circuit (IC) independently by Kilby and Noyce. Instead of soldering discrete transistors, they are etched onto a single chip. This allows for miniaturization and the reliability needed for Apollo. DEC introduces the PDP-1, the first 'minicomputer' with a keyboard and screen, allowing interactivity (Spacewar!).",
          "key_manifestations": [
            "Kilby and Noyce's Integrated Circuit patents",
            "DEC PDP-1 (and Spacewar! game)",
            "Licklider's 'Man-Computer Symbiosis' (vision of augmentation)",
            "COBOL released (business language)"
          ]
        },
        "1964": {
          "salience_share": 58.5,
          "description": "Exponential acceleration (+5.5%). Gordon Moore articulates 'Moore's Law' (1965): transistor density doubles every two years. This becomes the self-fulfilling prophecy of the industry. The IBM System/360 standardizes the corporate mainframe (byte = 8 bits). Engelbart's 'Mother of All Demos' (1968) reveals the Mouse, Windows, and Hypertext\u2014the future UI. Kubrick's *2001: A Space Odyssey* introduces HAL 9000, the cultural fear of AI.",
          "key_manifestations": [
            "Gordon Moore's 'Cramming more components onto integrated circuits'",
            "Engelbart's 'Mother of All Demos'",
            "IBM System/360 Launch",
            "HAL 9000 in '2001: A Space Odyssey'"
          ]
        },
        "1969": {
          "salience_share": 62.0,
          "description": "The Network is born (+3.5%). The catalyst is the first ARPANET login (UCLA to Stanford). The system crashes, but the packet-switching logic works. Unix is developed at Bell Labs, creating the OS philosophy of 'small tools.' The microprocessor (Intel 4004) is designed (1971 release), putting a CPU on a single chip. This enables the calculator and eventually the PC.",
          "key_manifestations": [
            "ARPANET first node connection (LOGIN -> LO)",
            "Ken Thompson and Dennis Ritchie create Unix",
            "Intel 4004 (Single-chip microprocessor)",
            "Whole Earth Catalog (access to tools)"
          ]
        },
        "1974": {
          "salience_share": 66.5,
          "description": "The Personal Computer revolution (+4.5%). The catalyst is the Altair 8800 (1975). It's a kit for hobbyists, but it inspires Gates/Allen (Microsoft) and Jobs/Wozniak (Apple). The computer moves from the glass house to the garage. The 'Homebrew Computer Club.' Xerox PARC develops the Alto (GUI, Ethernet, Laser Printer), inventing the modern office but failing to sell it. Lucasfilm's *Star Wars* uses computer motion control.",
          "key_manifestations": [
            "Release of the Altair 8800",
            "Founding of Microsoft and Apple",
            "Xerox Alto (GUI prototype)",
            "Diffie-Hellman Key Exchange (Public Key Cryptography)"
          ]
        },
        "1979": {
          "salience_share": 71.0,
          "description": "Variance surges (+4.5%) as the PC goes mainstream. VisiCalc (spreadsheet) turns the Apple II from a toy into a business tool. The IBM PC (1981) validates the market, using MS-DOS. The 'Pac-Man' craze signifies the gamification of culture. TCP/IP is standardized (1983), creating the 'Internet' from the ARPANET. Gibson's *Neuromancer* (1984) coins 'Cyberspace.'",
          "key_manifestations": [
            "Release of VisiCalc (Killer App)",
            "IBM PC launch (5150)",
            "TCP/IP Flag Day (Standardization)",
            "William Gibson's 'Neuromancer'"
          ]
        },
        "1984": {
          "salience_share": 75.5,
          "description": "The Interface War (+4.5%). The catalyst is the Apple Macintosh launch. It popularizes the GUI (Mouse/Icons), making computing accessible to non-engineers. Desktop Publishing (LaserWriter) disrupts the print industry. The 'GNU Manifesto' (Stallman) launches the Free Software movement, the moral counter-weight to proprietary code. The CD-ROM introduces high-capacity digital storage.",
          "key_manifestations": [
            "Apple Macintosh Launch",
            "Richard Stallman's GNU Manifesto",
            "Nintendo Entertainment System (reviving the crash)",
            "Tetris (viral software)"
          ]
        },
        "1989": {
          "salience_share": 80.0,
          "description": "The Web (+4.5%). Tim Berners-Lee invents the World Wide Web at CERN. He marries Hypertext to the Internet. The 'Cold War' ends, releasing military bandwidth to civilians. Windows 3.0 (1990) brings the GUI to the masses. Photoshop (1990) introduces the 'digital manipulation of reality.' We are entering the simulacrum.",
          "key_manifestations": [
            "Tim Berners-Lee's proposal for the WWW",
            "Release of Windows 3.0",
            "Adobe Photoshop 1.0",
            "Baudrillard's 'Simulacra and Simulation' (philosophical context)"
          ]
        },
        "1994": {
          "salience_share": 85.0,
          "description": "The Dot Com Explosion (+5.0%). The catalyst is the Netscape Navigator IPO (1995). The browser becomes the platform. 'Surfing' becomes a daily habit. Amazon and eBay are founded. The 'New Economy' bubble begins. Java (write once, run anywhere). Deep Blue beats Kasparov (1997), a symbolic victory for AI in logic, though brute force. Toy Story (1995) is the first fully CGI movie.",
          "key_manifestations": [
            "Netscape IPO",
            "Deep Blue defeats Kasparov",
            "Pixar's 'Toy Story'",
            "Founding of Amazon and eBay"
          ]
        },
        "1999": {
          "salience_share": 82.0,
          "description": "The Crash and the Pivot (-3.0%). The NASDAQ crashes (2000). The bubble bursts, but the fiber optic cables laid remain lit. Google (founded 1998) emerges from the rubble with a business model: 'Search' monetized by 'AdWords.' Napster (1999) breaks the music industry, proving that digital goods have zero marginal cost. The 'Matrix' defines the cultural anxiety of the era.",
          "key_manifestations": [
            "The Dot Com Crash",
            "Launch of Napster (P2P file sharing)",
            "Google's PageRank algorithm dominance",
            "The Matrix (film)"
          ]
        },
        "2004": {
          "salience_share": 86.0,
          "description": "Web 2.0 (+4.0%). The user becomes the creator. Facebook (2004) and YouTube (2005) launch. The internet is no longer a library; it is a conversation. 'Cloud Computing' (AWS 2006) begins, commoditizing server infrastructure. Broadband replaces dial-up, enabling video. World of Warcraft creates a persistent virtual economy.",
          "key_manifestations": [
            "Founding of Facebook",
            "Launch of AWS (Amazon Web Services)",
            "World of Warcraft launch",
            "YouTube's 'Me at the zoo' (first video)"
          ]
        },
        "2009": {
          "salience_share": 92.0,
          "description": "The Mobile Era (+6.0%). The catalyst is the iPhone (2007) and the App Store (2008). Computing moves from the desk to the pocket. We are permanently online. 'Uber' (2009) applies software to physical logistics. Bitcoin (2009) solves the 'Double Spend' problem, inventing digital scarcity. Social Media fuels the Arab Spring, showing the political power of the network.",
          "key_manifestations": [
            "iPhone App Store explosion",
            "Satoshi Nakamoto's Bitcoin Whitepaper",
            "The Social Network (film)",
            "Watson wins Jeopardy (AI resurgence)"
          ]
        },
        "2014": {
          "salience_share": 94.0,
          "description": "The AI Awakening (+2.0%). The catalyst is 'AlexNet' (2012) and the rediscovery of Neural Networks (Deep Learning) powered by GPUs (NVIDIA). Computer Vision and Translation suddenly work. AlphaGo (2016) beats Lee Sedol, a feat thought to be decades away. The 'Attention Economy' (TikTok) algorithmizes addiction. Snowden (2013) reveals the Panopticon.",
          "key_manifestations": [
            "AlphaGo defeats Lee Sedol",
            "Snowden Leaks (PRISM)",
            "Cambridge Analytica Scandal (weaponized data)",
            "OpenAI founded"
          ]
        },
        "2019": {
          "salience_share": 96.0,
          "description": "The Generative Shift (+2.0%). The Transformer architecture (Google, 2017) leads to GPT-3 (2020). AI moves from classification to creation. COVID-19 forces the physical world into the digital (Zoom, Remote Work), accelerating digitization by a decade. The Metaverse hype (Facebook -> Meta) fails, but the Crypto bubble (NFTs) peaks and crashes.",
          "key_manifestations": [
            "Release of GPT-3",
            "COVID-19 Remote Work migration",
            "Beeple's NFT sale ($69M)",
            "Introduction of TikTok's For You Page algorithm"
          ]
        },
        "2024": {
          "salience_share": 98.0,
          "description": "The Intelligence Singularity (+2.0%). ChatGPT (2022) and GPT-4 (2023) pass the Turing Test for all practical purposes. The catalyst is 'Scale'\u2014massive compute clusters. NVIDIA becomes the most valuable company. The displacing force is the threat to white-collar labor (coding, writing, art). 'Sovereign AI' becomes a national security issue. The cluster is now generating culture itself.",
          "key_manifestations": [
            "Release of GPT-4 and Gemini",
            "NVIDIA reaches $3T market cap",
            "EU AI Act (regulation attempt)",
            "Dune: Part Two (visuals generated by compute)"
          ]
        }
      }
    },
    "5_electrification_and_grid_infrastructure": {
      "name": "Electrification and Grid Infrastructure",
      "description": "This eigencluster represents the conquest of the electron for power (as opposed to information). It tracks the shift from mechanical power transmission (shafts/belts) to electrical distribution (wires). It encompasses the War of Currents (AC/DC), the lighting of the world, the electric motor's reordering of the factory, and the creation of the 'Grid'\u2014the largest machine ever built, which synchronizes the heartbeat of civilization at 50/60Hz.",
      "trajectory": {
        "1789": {
          "salience_share": 0.2,
          "description": "Variance is near zero. Electricity is a parlor trick for aristocrats (Leyden jars, static shocks). Galvani is twitching frog legs (1780s), debating Volta about 'animal electricity.' It is a scientific curiosity with no economic utility. The energy system is purely chemical (wood/coal) or kinetic (wind/water).",
          "key_manifestations": [
            "Galvani's experiments with frog legs",
            "Coulomb's Law (quantifying the force)",
            "Franklin's kite experiment (past influence)",
            "Erasmus Darwin's poetic speculations"
          ]
        },
        "1794": {
          "salience_share": 0.3,
          "description": "Stasis (+0.1%). Volta is working on his pile, debating Galvani. The French Revolution executes Lavoisier, dampening French science momentarily. The focus is on the steam engine (Cluster 1).",
          "key_manifestations": [
            "Volta's correspondence with the Royal Society",
            "Execution of Lavoisier",
            "Establishment of the \u00c9cole Polytechnique (future electrical engineers)",
            "Shelley's early education (future Frankenstein influence)"
          ]
        },
        "1799": {
          "salience_share": 0.8,
          "description": "A spark (+0.5%). Volta invents the 'Voltaic Pile' (1800). This is the first battery, a source of continuous current (DC). It proves electricity is a chemical phenomenon, not just a static discharge. It allows for the discovery of electrolysis (Nicholson/Carlisle), breaking water into H and O. The 'Fluid' is now flowable.",
          "key_manifestations": [
            "Alessandro Volta's invention of the Pile",
            "Nicholson and Carlisle's electrolysis of water",
            "Humphry Davy begins electrochemical experiments",
            "Schelling's 'Naturphilosophie' (unity of forces)"
          ]
        },
        "1804": {
          "salience_share": 1.2,
          "description": "Variance creeps up (+0.4%) as the 'Voltaic Pile' allows for the first high-energy physics experiments. The catalyst is Humphry Davy at the Royal Institution, who builds a massive battery (2,000 plates) to isolate new elements (Sodium, Potassium). He demonstrates the 'Carbon Arc' light (1808 prep), creating a blinding continuous light. This proves electricity can rival the sun, though the cost of batteries makes it an economic impossibility for general use.",
          "key_manifestations": [
            "Humphry Davy's discovery of Sodium and Potassium via electrolysis",
            "Davy's Carbon Arc demonstration",
            "Grotthuss mechanism (theory of charge transport)",
            "Beethoven's 'Eroica' (cultural energy parallel)"
          ]
        },
        "1809": {
          "salience_share": 1.5,
          "description": "Stasis (+0.3%). The focus remains on electrochemistry. The battery is a tool for chemists, not engineers. Oersted is searching for the link between electricity and magnetism, guided by *Naturphilosophie* (unity of forces). The lack of a mechanical generator is the bottleneck preventing this cluster from scaling.",
          "key_manifestations": [
            "Davy's arc lamp public lectures",
            "S\u00f6mmering's electrochemical telegraph (prototype)",
            "Lamarck's evolutionary theory (biological fluidity)",
            "Goethe's 'Elective Affinities' (chemical metaphor for romance)"
          ]
        },
        "1814": {
          "salience_share": 1.7,
          "description": "Slow growth (+0.2%). The telegraph is theoretically possible but practically difficult due to battery limitations. The cluster is waiting for the 'motor' principle. The cultural perception of electricity is 'vitalist'\u2014associated with the spark of life (Galvani), influencing Mary Shelley.",
          "key_manifestations": [
            "Berzelius's dualistic electrochemical theory",
            "Fraunhofer's spectral lines (light analysis)",
            "Drafting of 'Frankenstein' (electricity as life-giver)",
            "Stephenson's steam work (mechanical dominance)"
          ]
        },
        "1819": {
          "salience_share": 2.5,
          "description": "A scientific breakthrough (+0.8%). The catalyst is Hans Christian Oersted (1820), who notices a compass needle deflect when near a current-carrying wire. This is 'Electromagnetism.' It proves that electricity can create motion (magnetic force). Amp\u00e8re immediately formulates the mathematical law. The bridge between the battery and the magnet is built.",
          "key_manifestations": [
            "Oersted's discovery of Electromagnetism",
            "Amp\u00e8re's Law formulation",
            "Schweigger's Galvanometer (measuring current)",
            "Mary Shelley's 'Frankenstein' published (1818)"
          ]
        },
        "1824": {
          "salience_share": 3.2,
          "description": "Variance rises (+0.7%) as the 'Electromagnet' is invented by William Sturgeon. By wrapping wire around iron, he concentrates the magnetic field. This allows for powerful, switchable magnetic forces\u2014the heart of every future motor and relay. Ohm publishes his preliminary work on the relationship between voltage, current, and resistance, turning the 'mysterious fluid' into a calculable quantity.",
          "key_manifestations": [
            "Sturgeon's first Electromagnet",
            "Ohm's early experiments (Ohm's Law formulation)",
            "Carnot's Thermodynamics (parallel energy theory)",
            "Faraday's discovery of Benzene (chemical side)"
          ]
        },
        "1829": {
          "salience_share": 4.5,
          "description": "A pivotal moment (+1.3%). Joseph Henry improves the electromagnet, lifting thousands of pounds. He creates the prototype of the 'Relay'\u2014using a small current to switch a large one. This is the key to long-distance telegraphy (Cluster 9) but also to industrial control. Ohm's Law (1827) is fully published, providing the engineering code for the cluster.",
          "key_manifestations": [
            "Ohm's 'Die galvanische Kette' (The Galvanic Circuit)",
            "Joseph Henry's powerful electromagnets",
            "Stephenson's Rocket (Steam wins the transport war for now)",
            "Balzac's 'La Com\u00e9die humaine' (social currents)"
          ]
        },
        "1834": {
          "salience_share": 6.8,
          "description": "The Singularity of Induction (+2.3%). The catalyst is Michael Faraday (1831), who discovers 'Electromagnetic Induction.' He moves a magnet through a coil and creates current. This is the invention of the 'Dynamo' (Generator). It means mechanical energy (steam/water) can be converted into electricity. We are no longer limited by chemical batteries. He also invents the Transformer principle. The age of Power begins conceptually.",
          "key_manifestations": [
            "Faraday's discovery of Induction",
            "Pixii's first hand-cranked generator (AC)",
            "Gauss and Weber's Telegraph",
            "Babbage's Analytical Engine (mechanical computation)"
          ]
        },
        "1839": {
          "salience_share": 8.0,
          "description": "Application phase (+1.2%). The focus is on 'Electroplating' (Elkington patent). This is the first industrial use of electricity\u2014coating cheap metal with silver/gold. It drives the improvement of batteries (Daniell Cell) to provide constant current. Jacobi in Russia builds an electric boat, but battery costs are prohibitive compared to coal. The 'Motor' exists but is a toy.",
          "key_manifestations": [
            "Elkington's Electroplating patent",
            "Daniell Cell invention (stable current)",
            "Jacobi's electric boat experiment",
            "Daguerreotype (photon capture)"
          ]
        },
        "1844": {
          "salience_share": 9.5,
          "description": "Network effects emerge (+1.5%). The Telegraph (Morse) demands thousands of miles of wire and batteries. This creates a supply chain for 'electrical engineering.' The 'Arc Light' is used experimentally in public spaces (Place de la Concorde), but the need for constant adjustment of carbon rods limits it. Joule establishes the $I^2R$ law (heating), linking electricity to thermodynamics.",
          "key_manifestations": [
            "Morse Telegraph expansion",
            "Joule's Law (Heat = Current squared x Resistance)",
            "Grove Fuel Cell (prototype)",
            "Turner's 'Rain, Steam and Speed' (steam peak)"
          ]
        },
        "1849": {
          "salience_share": 11.0,
          "description": "Steady growth (+1.5%). The 'Ruhmkorff Coil' (induction coil) is developed, allowing for the generation of very high voltages from low voltage batteries. This creates the 'Spark' needed for future internal combustion engines and X-rays. In medicine, 'Galvanism' is used to treat nervous disorders, creating a cultural association between electricity and the nervous system.",
          "key_manifestations": [
            "Ruhmkorff's Induction Coil",
            "Helmholtz measures nerve impulse speed (bio-electricity)",
            "Foucault's Arc Lamp clockwork mechanism",
            "California Gold Rush (driving telegraph demand)"
          ]
        },
        "1854": {
          "salience_share": 12.5,
          "description": "Variance rises (+1.5%). The trans-oceanic cable attempts push the understanding of 'Capacitance' and 'Inductance' (Kelvin). We realize that a long wire is not just a pipe; it is a capacitor. This forces the rigorous mathematization of the field. Verification of Maxwell's future work begins here in the failure of signals.",
          "key_manifestations": [
            "Kelvin's work on signal retardation",
            "Cyrus Field's Atlantic Cable attempts",
            "Goebel's disputed light bulb claim",
            "Thoreau's 'Walden' (rejecting the wired life)"
          ]
        },
        "1859": {
          "salience_share": 14.5,
          "description": "Generator breakthrough (+2.0%). The catalyst is the 'Pacinotti Ring' (1860 prep), leading to the dynamo. We are moving from permanent magnets to electromagnets in the generator itself (self-excitation). This means the generator can 'bootstrap' itself to massive power levels. The Lead-Acid battery (Plant\u00e9) is invented (1859), the first rechargeable battery, allowing storage of this new power.",
          "key_manifestations": [
            "Gaston Plant\u00e9's Lead-Acid Battery",
            "Pacinotti's Dynamo armature",
            "Kirchhoff's Circuit Laws",
            "Darwin's Origin (biological circuits)"
          ]
        },
        "1864": {
          "salience_share": 17.0,
          "description": "Acceleration (+2.5%). Maxwell publishes his Equations (1865). He unifies the field. Light is an electromagnetic wave. This is the theoretical apex. On the ground, Wilde and Siemens develop practical self-exciting dynamos. The 'Lighthouse' becomes the first major application of electric power (arc lamps), cutting through the fog of the industrial coast.",
          "key_manifestations": [
            "Maxwell's 'A Dynamical Theory of the Electromagnetic Field'",
            "Werner von Siemens' Dynamo-electric principle",
            "Electric Arc Lighthouses (Dungeness)",
            "Verne's 'Journey to the Center of the Earth' (Ruhmkorff lamps used)"
          ]
        },
        "1869": {
          "salience_share": 19.5,
          "description": "The Motor awakens (+2.5%). Z\u00e9nobe Gramme invents the 'Gramme Machine' (1871), the first efficient continuous-current generator. Crucially, he discovers it is reversible: if you feed it electricity, it spins. The Electric Motor is born as an industrial reality, not a toy. This hints at the possibility of transmitting power: generate here, use there.",
          "key_manifestations": [
            "Gramme Dynamo demonstration",
            "Mendeleev's Table (ordering matter)",
            "Opening of Suez (steam logistics)",
            "Transcontinental Rail (steam transport)"
          ]
        },
        "1874": {
          "salience_share": 23.0,
          "description": "The Arc Light Era (+3.5%). The 'Jablochkoff Candle' (electric arc) illuminates the boulevards of Paris (1878 prep). It is the 'Russian Light.' It is harsh, buzzing, and brilliant. It replaces gas in public squares. This creates the demand for 'Central Stations' to power them. The telephone (Bell) adds a domestic wire to the house. The 'Grid' begins to form as a chaotic web of point-to-point connections.",
          "key_manifestations": [
            "Jablochkoff Candle invention",
            "Bell's Telephone",
            "Crookes Tube (cathode rays)",
            "Impressionist Exhibition (light analysis in art)"
          ]
        },
        "1879": {
          "salience_share": 28.5,
          "description": "The Incandescent Revolution (+5.5%). The catalyst is Thomas Edison. He invents not just the bulb (carbon filament), but the *system*: the parallel circuit, the meter, the fuse, the dynamo (Jumbo). He solves the 'subdivision of light.' This allows electricity to enter the home, displacing gas (and its fumes). It turns night into day for indoor work/leisure. Siemens demonstrates an electric train in Berlin.",
          "key_manifestations": [
            "Edison's Incandescent Light Bulb patent",
            "Siemens' Electric Locomotive",
            "Swan's Light Bulb (UK independent invention)",
            "Ibsen's 'A Doll's House' (domestic sphere focus)"
          ]
        },
        "1884": {
          "salience_share": 34.0,
          "description": "The War of Currents (+5.5%). Edison (DC) builds Pearl Street Station (1882), the first central power plant. But DC cannot travel long distances (voltage drop). The catalyst is Tesla and Westinghouse proposing AC (Alternating Current). AC can be stepped up by transformers for transmission and stepped down for use. This unchains the power plant from the city center. Parsons invents the Steam Turbine (1884), allowing for massive, high-speed generation.",
          "key_manifestations": [
            "Pearl Street Station opening",
            "Tesla's AC Motor invention",
            "Parsons' Steam Turbine patent",
            "Mark Twain (early investor in tech)"
          ]
        },
        "1889": {
          "salience_share": 38.5,
          "description": "AC Victory (+4.5%). The 'War' ends effectively with the decision to use AC for the Niagara Falls power plant (1893 prep). The 'Electric Chair' (1890) is a gruesome byproduct of the propaganda war. The electric streetcar (Sprague, Richmond 1888) revolutionizes urban transit, allowing for the 'Streetcar Suburb.' The city expands horizontally because of the electric motor.",
          "key_manifestations": [
            "Sprague's Richmond Electric Streetcar system",
            "Execution of William Kemmler (Electric Chair)",
            "Ferranti's Deptford Power Station (High Voltage AC)",
            "Eiffel Tower (lit by electric lights)"
          ]
        },
        "1894": {
          "salience_share": 43.0,
          "description": "Scaling the Grid (+4.5%). Niagara Falls opens (1895), sending massive power to Buffalo. This proves 'High Tension' transmission works. Industry begins to switch from 'Line Shafts' (one giant steam engine turning belts) to 'Unit Drive' (small electric motors on each machine). This reorganizes the factory floor for logic flow rather than power flow. Marconi's wireless begins to use the ether.",
          "key_manifestations": [
            "Niagara Falls Power Project activation",
            "Roentgen's X-Rays (high voltage application)",
            "Marconi's Wireless Telegraphy",
            "Wells' 'The Time Machine' (technological mastery of time)"
          ]
        },
        "1899": {
          "salience_share": 47.5,
          "description": "Ubiquity begins (+4.5%). The 'Subway' (Paris Metro, London Tube electrification) moves mass transit underground, powered by the third rail. The electric elevator makes the skyscraper (Cluster 12) habitable. The electron (Thomson 1897) is identified, moving the cluster from engineering to quantum physics. The 'home appliance' (fan, iron) begins to appear.",
          "key_manifestations": [
            "Paris Metro opening",
            "J.J. Thomson's Electron discovery",
            "Planck's Quantum Hypothesis",
            "Veblen's 'Leisure Class' (electrified consumption)"
          ]
        },
        "1904": {
          "salience_share": 52.0,
          "description": "The Turbine Age (+4.5%). Steam turbines replace reciprocating engines in power plants, jumping efficiency and scale. The 'Grid' starts to interconnect locally. The vacuum tube (Fleming) is invented, bridging power and information. Einstein's *Annus Mirabilis* (1905) explains the Photoelectric Effect, proving light is quantized (photons), essential for future solar.",
          "key_manifestations": [
            "Einstein's Photoelectric Effect paper",
            "Fleming Valve (Vacuum Tube)",
            "New York Subway opening",
            "Weber's 'Protestant Ethic' (rational grid)"
          ]
        },
        "1909": {
          "salience_share": 56.5,
          "description": "Industrial Domination (+4.5%). Ford's Highland Park plant uses electric drive. The Haber-Bosch process requires massive energy input. Neon lighting (Claude) creates the 'electric cityscape' of the night. Tungsten filaments replace carbon, making bulbs 3x more efficient and durable. The 'Great White Way' (Broadway) defines modern glamour.",
          "key_manifestations": [
            "Neon Lighting debut (Paris Auto Show)",
            "Coolidge's Ductile Tungsten patent",
            "Haber-Bosch Process",
            "Futurist Manifesto (worshipping the city lights)"
          ]
        },
        "1914": {
          "salience_share": 59.0,
          "description": "War Production (+2.5%). The grid is critical for munitions manufacturing. Women enter the workforce, and 'labor-saving' electric appliances (washing machines) become a marketing focus to replace domestic help. Strategic bombing (Zeppelins) targets power stations, recognizing them as the heart of the enemy. The Panama Canal locks are electrically operated.",
          "key_manifestations": [
            "Panama Canal opening (General Electric controls)",
            "Introduction of the Electric Refrigerator (Kelvinator)",
            "WWI searchlights and radio comms",
            "Duchamp's 'Large Glass' (bachelor machines)"
          ]
        },
        "1919": {
          "salience_share": 63.5,
          "description": "The Consumer Grid (+4.5%). Post-war boom in housing leads to 'wiring' becoming standard. The Radio (1920 broadcast) enters the home, requiring a plug. The Soviet GOELRO plan declares 'Communism = Soviet Power + Electrification of the whole country.' Lenin recognizes the grid as the ultimate centralizing technology.",
          "key_manifestations": [
            "Lenin's GOELRO Plan",
            "First commercial radio broadcast (KDKA)",
            "Rossum's Universal Robots (R.U.R.)",
            "Bauhaus design (lamps as industrial art)"
          ]
        },
        "1924": {
          "salience_share": 67.0,
          "description": "Consolidation (+3.5%). Regional grids begin to link up (Interconnection). The 'Teletype' automates news. In the US, the 'Insull Empire' of utility holding companies grows, creating a financial bubble around the steady cash flow of electricity bills. Quantum Mechanics (Heisenberg) explains the behavior of electrons in materials, setting the stage for semiconductors.",
          "key_manifestations": [
            "Formation of the National Grid (UK) - 1926 Act",
            "Heisenberg's Matrix Mechanics",
            "Baird's Television demo",
            "Metropolis (film - Moloch machine)"
          ]
        },
        "1929": {
          "salience_share": 65.0,
          "description": "The Crash (-2.0%). Utility holding companies collapse (Insull), leading to regulation (PUHCA). However, the New Deal creates the TVA (Tennessee Valley Authority), bringing 'Rural Electrification' to the forgotten zones. This is the state recognizing that access to the grid is a prerequisite for citizenship. Copper and aluminum demand surges.",
          "key_manifestations": [
            "Collapse of Samuel Insull's utility empire",
            "TVA Act (Tennessee Valley Authority)",
            "Rural Electrification Administration (REA) founding",
            "Empire State Building (peak load)"
          ]
        },
        "1934": {
          "salience_share": 70.0,
          "description": "Hydroelectric Giants (+5.0%). Hoover Dam and Grand Coulee Dam are built. These are 'Pharaonic' projects, generating power on a scale that requires new industries (Aluminum smelting for aircraft) just to use it. They shift the industrial center of gravity to the American West. Radar is developed (Watson-Watt), using high-power microwave pulses.",
          "key_manifestations": [
            "Dedication of Hoover Dam",
            "Watson-Watt's Radar demonstration",
            "Fluorescent lighting introduced",
            "Chaplin's 'Modern Times' (man vs machine)"
          ]
        },
        "1939": {
          "salience_share": 75.0,
          "description": "The Energy War (+5.0%). Aluminum production (electricity in solid form) determines the air war. The Manhattan Project (Oak Ridge) consumes 1/7th of all US electricity to separate uranium isotopes (calutrons). This is the 'energy sink' of the bomb. The cavity magnetron (1940) makes radar portable, winning the Battle of the Atlantic.",
          "key_manifestations": [
            "Oak Ridge K-25 Plant construction",
            "Randall and Boot's Cavity Magnetron",
            "Fermi's Chicago Pile-1 (Nuclear energy unlock)",
            "Battle of Britain (Radar network)"
          ]
        },
        "1944": {
          "salience_share": 78.0,
          "description": "The Nuclear Dawn (+3.0%). The atom is split not for a bomb, but for heat. The vision of 'too cheap to meter' power emerges. The Transistor (1947) is invented, signaling that electricity will now be used for logic (Cluster 4) as much as for work. ENIAC runs, consuming 150kW to calculate trajectories.",
          "key_manifestations": [
            "Shippingport Atomic Power Station planning",
            "Shockley's Transistor",
            "ENIAC activation",
            "Post-war appliance boom"
          ]
        },
        "1949": {
          "salience_share": 81.0,
          "description": "The Great Acceleration (+3.0%). The grid expands to suburbia. Air conditioning begins to spike peak loads in summer. TV becomes the hearth of the home. The Soviet bomb (1949) ensures that the nuclear power race will be a Cold War proxy. Solar cells (Bell Labs, 1954 prep) are invented but are too expensive ($300/watt).",
          "key_manifestations": [
            "First commercial nuclear power plant (Obninsk)",
            "Bell Labs Solar Cell announcement",
            "Universal adoption of the TV",
            "Ellison's 'Invisible Man' (stealing electricity)"
          ]
        },
        "1954": {
          "salience_share": 83.0,
          "description": "The Nuclear Age (+2.0%). Shippingport (US) and Calder Hall (UK) open. The hope is infinite clean power. The 'all-electric home' is marketed. High Voltage DC (HVDC) transmission begins (Gotland link), allowing for undersea power cables. The microchip era begins, relying on hyper-clean stable power.",
          "key_manifestations": [
            "Shippingport Atomic Power Station opening",
            "Calder Hall (UK) opening",
            "Gotland HVDC link",
            "Sputnik (solar powered satellite radio)"
          ]
        },
        "1959": {
          "salience_share": 85.0,
          "description": "Peak Grid (+2.0%). The Northeast Blackout of 1965 (prep) will soon show the fragility of interconnection, but for now, the system is seen as infallible. The Laser (Maiman, 1960) is invented\u2014coherent light. This is a new form of electromagnetic control. The integrated circuit puts the grid into the pocket.",
          "key_manifestations": [
            "Maiman's Ruby Laser",
            "Northeast Blackout of 1965 (eventual shock)",
            "Telstar satellite (active comms)",
            "Pynchon's 'The Crying of Lot 49' (entropy)"
          ]
        },
        "1964": {
          "salience_share": 82.0,
          "description": "Stasis and doubt (-3.0%). The Environmental movement attacks power plants (Storm King Mountain case). Nuclear is questioned. The definition of 'pollution' expands to include 'thermal pollution' of rivers. The 1965 Blackout terrifies the East Coast\u2014the machine stopped. Reliability becomes the obsession.",
          "key_manifestations": [
            "Northeast Blackout of 1965",
            "Storm King Mountain ruling (environmental standing)",
            "Start of the anti-nuclear movement",
            "Star Trek (matter-energy conversion)"
          ]
        },
        "1969": {
          "salience_share": 80.0,
          "description": "Energy Crisis Precursor (-2.0%). US oil production peaks. Demand for electricity is growing exponentially (5-7% per year), but plant construction is slowing due to regulation. The 'brownout' becomes a summer term. The microprocessor (Intel) promises a future of 'smart' control, but for now, the grid is dumb and heavy.",
          "key_manifestations": [
            "Establishment of the EPA",
            "Three Mile Island construction begins",
            "Whole Earth Catalog (off-grid fantasy)",
            "Apollo 11 (Fuel Cells used in space)"
          ]
        },
        "1974": {
          "salience_share": 78.0,
          "description": "The Conservation Era (-2.0%). The Oil Shocks make electricity expensive (since much was oil-fired). The slogan 'Save It' appears. PURPA (1978 prep) is the catalyst for 'Non-Utility Generators' (wind/solar/cogen) to connect to the grid. This breaks the monopoly of the vertical utility. The 'Soft Energy Path' (Amory Lovins) is proposed.",
          "key_manifestations": [
            "Amory Lovins' 'Soft Energy Paths' (Foreign Affairs)",
            "Department of Energy created",
            "PURPA (Public Utility Regulatory Policies Act)",
            "Kraftwerk's 'Radio-Activity' (cultural reflection)"
          ]
        },
        "1979": {
          "salience_share": 75.0,
          "description": "The Nuclear Freeze (-3.0%). Three Mile Island (1979) kills the US nuclear build-out. No new orders. Coal becomes the default, leading to Acid Rain. The Wind Turbine (modern Danish design) begins to scale in California (Altamont Pass). The grid is stagnant, just maintaining load.",
          "key_manifestations": [
            "Three Mile Island Accident",
            "Altamont Pass Wind Farm (early wind boom)",
            "Sony Walkman (batteries, not grid)",
            "China Syndrome (film)"
          ]
        },
        "1984": {
          "salience_share": 72.0,
          "description": "Efficiency as a Source (-3.0%). The 'Negawatt' concept. It is cheaper to save a watt than generate one. Compact Fluorescent Lights (CFLs) appear. Industrial efficiency improves. Demand growth decouples from GDP growth. Chernobyl (1986) puts the final nail in the nuclear renaissance coffin globally.",
          "key_manifestations": [
            "Chernobyl Disaster",
            "Introduction of CFL bulbs",
            "Superconductivity (High-Temp) discovered (1987)",
            "Blade Runner (dark, neon future)"
          ]
        },
        "1989": {
          "salience_share": 70.0,
          "description": "Deregulation (-2.0%). The UK privatizes its electricity board (1990), starting a global trend. Electricity becomes a commodity traded on spot markets, not a public service. The 'Dash for Gas' (CCGT turbines) replaces coal in the UK/US because gas is cheap and plants are quick to build. The Lithium-Ion battery (Sony, 1991) is commercialized, the holy grail of portable power.",
          "key_manifestations": [
            "UK Electricity Privatization",
            "Sony commercializes Lithium-Ion battery",
            "Kyoto Protocol negotiations start (carbon focus)",
            "The Internet (increasing server load)"
          ]
        },
        "1994": {
          "salience_share": 68.0,
          "description": "The Digital Load (-2.0%). Server farms begin to draw significant power. The California Energy Crisis (2000 prep) is brewing due to botched deregulation (Enron). The grid is aging; investment is low because 'the market' doesn't incentivize resilience. Toyota Prius (Hybrid) puts the electric motor back in the car.",
          "key_manifestations": [
            "Toyota Prius Launch",
            "Enron's rise (trading electrons)",
            "Kyoto Protocol signed",
            "Matrix (humans as batteries)"
          ]
        },
        "1999": {
          "salience_share": 65.0,
          "description": "The Crisis (-3.0%). The California Energy Crisis (2000-2001). Rolling blackouts in Silicon Valley. It proves that electricity cannot be treated exactly like pork bellies; physics (balancing the grid) matters. The 'Smart Grid' concept is born\u2014using IT to manage electrons. German *Energiewende* (2000) launches the feed-in tariff, kickstarting the global solar boom.",
          "key_manifestations": [
            "California Energy Crisis (Enron tapes)",
            "German Renewable Energy Act (EEG)",
            "Northeast Blackout of 2003",
            "Tesla Motors founded (2003)"
          ]
        },
        "2004": {
          "salience_share": 70.0,
          "description": "The Renewable Renaissance (+5.0%). Solar PV costs begin to crash (Swanson's Law). The 'Gigawatt' scale returns. China enters the solar manufacturing market. The grid faces the 'Duck Curve'\u2014too much solar at noon. This forces a search for storage. Tesla Roadster (2008) proves EVs can be sexy, not just golf carts.",
          "key_manifestations": [
            "Solyndra founded (and later failed, symbol of the boom)",
            "Tesla Roadster production",
            "China's Solar manufacturing ramp",
            "An Inconvenient Truth"
          ]
        },
        "2009": {
          "salience_share": 75.0,
          "description": "Storage is King (+5.0%). Lithium-ion prices drop 80% in a decade. Grid-scale batteries (Hornsdale) become possible. The 'Prosumer' emerges\u2014generating power on the roof and selling it back. The Utility Death Spiral fear: if everyone generates, who pays for the wires? LED lighting takes over, slashing lighting load.",
          "key_manifestations": [
            "Tesla Model S launch",
            "Fukushima Disaster (2011 - nuclear retreat)",
            "LED bulb price parity",
            "Nest Thermostat (smart home load control)"
          ]
        },
        "2014": {
          "salience_share": 80.0,
          "description": "Electrify Everything (+5.0%). The strategy for decarbonization is set: Clean the Grid + Electrify Transport/Heat. Heat pumps and EVs surge. The grid must double in size. Offshore wind becomes a giant industry (Dogger Bank). The 'Intermittent' problem is the main engineering challenge. AI (DeepMind) is used to cool data centers.",
          "key_manifestations": [
            "Paris Agreement (electrification as key pillar)",
            "Tesla Powerwall announcement",
            "Hornsdale Power Reserve (Big Battery)",
            "Volkswagen Dieselgate (pushing VW to EV)"
          ]
        },
        "2019": {
          "salience_share": 85.0,
          "description": "Resilience Panic (+5.0%). Texas Freeze (Uri, 2021) and Wildfires (PG&E) show the grid is vulnerable to climate change. 'Microgrids' and 'Virtual Power Plants' (VPPs) gain traction. The Inflation Reduction Act (2022) pours billions into transmission and batteries. Fusion has a 'net energy' breakthrough (NIF, 2022), creating a distant hope.",
          "key_manifestations": [
            "Texas Grid Failure (Winter Storm Uri)",
            "Inflation Reduction Act (Green Bank)",
            "NIF Fusion Ignition",
            "Ford F-150 Lightning (bi-directional charging)"
          ]
        },
        "2024": {
          "salience_share": 90.0,
          "description": "The AI Energy Crunch (+5.0%). Data centers for AI training are consuming gigawatts. Utilities are delaying coal plant retirements to feed the GPUs. The constraint on AI progress is now electricity, not chips. Small Modular Reactors (SMRs) are hyped as the solution for data center power. The grid is the most critical machine on earth.",
          "key_manifestations": [
            "Microsoft/OpenAI Stargate supercomputer plans (5GW)",
            "Vogtle Unit 3 & 4 online (US Nuclear)",
            "Copper price surge (wiring the world)",
            "Cop28 'Triple Nuclear' pledge"
          ]
        }
      }
    },
    "6_global_logistical_standardization": {
      "name": "Global Logistical Standardization",
      "description": "This eigencluster represents the physical protocolization of the world. It is the reduction of friction in the movement of goods, people, and capital. It tracks the evolution from ad-hoc merchant shipping to the synchronized, containerized, just-in-time global supply chain. It encompasses the standardization of time, measurement (Metric), currency (Gold/Fiat), and the legal frameworks (WTO) that treat the planet as a single warehouse.",
      "trajectory": {
        "1789": {
          "salience_share": 2.5,
          "description": "Variance is low. The world is a collection of autarkic markets separated by massive transit times and tariffs. The 'East India Companies' (EIC, VOC) are the only true global logistics operators, but they function as state-monopolies with high friction. Time is local (solar). Measurements vary by village. The catalyst for change is the French Revolution's desire for the 'Metric System'\u2014a universal language of quantity.",
          "key_manifestations": [
            "The Metric System proposal (Talleyrand)",
            "Mutiny on the Bounty (logistical failure)",
            "British East India Company dominance",
            "Adam Smith's 'Wealth of Nations' (theoretical free trade)"
          ]
        },
        "1794": {
          "salience_share": 3.0,
          "description": "The Metric Birth (+0.5%). The French government officially adopts the meter and kilogram. This is the seed of global standardization, replacing thousands of local 'feet' and 'pounds.' It allows for the precise interchange of parts and scientific data. However, the Napoleonic Wars create a 'Continental System' blockade, temporarily de-globalizing trade.",
          "key_manifestations": [
            "Official adoption of the Metric System in France",
            "Jay Treaty (US/UK trade normalization)",
            "Semaphore lines (logistical comms)",
            "Kant's 'Perpetual Peace' (global governance ideal)"
          ]
        },
        "1799": {
          "salience_share": 3.2,
          "description": "Stasis (+0.2%). War disrupts the seas. The 'Convoy System' is the logistical response\u2014ships moving in packs for safety. This requires synchronization. The Chronometer (Harrison) is now standard, allowing for precise longitude, standardizing the map of the world.",
          "key_manifestations": [
            "Humboldt's exploration (mapping the resource base)",
            "British Convoy Acts",
            "Malthus's 'Principle of Population' (resource constraints)",
            "Eli Whitney's interchangeable parts demo (standardization)"
          ]
        },
        "1804": {
          "salience_share": 3.8,
          "description": "Variance rises (+0.6%) as the legal software of global commerce is patched. The catalyst is the promulgation of the *Code Napol\u00e9on* (Civil Code). While a tool of French imperialism, it standardizes property rights, contracts, and commercial law across the continent, replacing a patchwork of feudal customs. This reduces the 'transaction costs' of cross-border trade. In the US, the Lewis and Clark Expedition (1804) acts as a logistical survey of the continent, mapping the future arteries of the American empire.",
          "key_manifestations": [
            "Promulgation of the Code Civil (Code Napol\u00e9on)",
            "Lewis and Clark Expedition departure",
            "Trevithick's Locomotive (mobility proof)",
            "Jacquard Loom (standardized manufacturing control)"
          ]
        },
        "1809": {
          "salience_share": 3.2,
          "description": "A sharp retraction (-0.6%) as the 'Continental System' and British Blockade effectively bipolarize the global economy. The 'Standard' is now 'Autarky.' Trade is weaponized. However, this forces the development of 'substitute' logistics (e.g., beet sugar replacing cane sugar), proving that supply chains can be re-engineered under pressure. The documentation of the world continues with the 'Description de l'\u00c9gypte', a massive state-sponsored cataloging of a foreign territory.",
          "key_manifestations": [
            "Napoleonic Continental System enforcement",
            "Publication of 'Description de l'\u00c9gypte'",
            "Ricardo's 'The High Price of Bullion' (monetary theory)",
            "Fulton's Steamboat patent (river logistics)"
          ]
        },
        "1814": {
          "salience_share": 4.0,
          "description": "Recovery begins (+0.8%). The Treaty of Ghent and the Congress of Vienna (prep) aim to restore the 'Concert of Europe,' stabilizing borders for trade. The catalyst for future friction is the passing of the 'Corn Laws' in 1815, a protectionist barrier that explicitly rejects global standardization of grain prices to protect local aristocrats. This sets up the central political conflict of the 19th century: Free Trade vs. Protectionism.",
          "key_manifestations": [
            "Treaty of Ghent (Ending War of 1812)",
            "Stephenson's 'Bl\u00fccher' locomotive",
            "Proposed Corn Laws (Protectionism)",
            "Waltham-Lowell system (integrated factory logistics)"
          ]
        },
        "1819": {
          "salience_share": 4.5,
          "description": "Variance grows (+0.5%). The *SS Savannah* crossing demonstrates that the Atlantic can be bridged by steam, implying a future of scheduled, weather-independent logistics. The 'Panic of 1819' is the first truly 'global' financial crisis, proving that the credit markets of the US and Europe are now synchronised enough to crash together. The 'Zollverein' concept (German customs union) begins to gestate, seeking to erase internal borders.",
          "key_manifestations": [
            "Panic of 1819",
            "SS Savannah voyage",
            "Ricardo's 'Principles of Political Economy' (Comparative Advantage)",
            "Raffles founds Singapore (Free Port model)"
          ]
        },
        "1824": {
          "salience_share": 5.2,
          "description": "A pivotal shift toward liberalization (+0.7%). The catalyst is the 'Reciprocity of Duties Act' in the UK, dismantling parts of the Navigation Acts. This acknowledges that trade is a two-way street; to sell manufactured goods, Britain must allow other ships to enter. The 'Monroe Doctrine' (1823) attempts to standardize the geopolitical sphere of the Americas, excluding European logistical interference.",
          "key_manifestations": [
            "Reciprocity of Duties Act (UK)",
            "Monroe Doctrine",
            "Erie Canal nearing completion (internal logistics)",
            "Founding of the RSPCA (standardizing moral treatment)"
          ]
        },
        "1829": {
          "salience_share": 6.0,
          "description": "Integration accelerates (+0.8%). The opening of the Erie Canal (1825) connects the Atlantic to the Great Lakes, standardizing the grain flow of the Midwest to the global market. The 'Rainhill Trials' for locomotives establish a technical standard for rail gauge (Stephenson's 4ft 8.5in), which becomes the 'Standard Gauge' of the world. This prevents a Babel of incompatible tracks.",
          "key_manifestations": [
            "Rainhill Trials (Standard Gauge victory)",
            "Erie Canal full operation",
            "Baedeker's first travel guide (standardizing the tourist experience)",
            "Walker's 'The Original' (London transport reforms)"
          ]
        },
        "1834": {
          "salience_share": 7.5,
          "description": "A major leap (+1.5%). The German *Zollverein* (1834) officially begins. It removes tariff barriers between German states, creating a unified market that precedes the unified nation. This is the prototype for the European Union. In Britain, the 'Poor Law Amendment Act' creates a standardized, albeit cruel, national labor market. The 'Clipper Ship' era begins to shrink the tea route to China.",
          "key_manifestations": [
            "Establishment of the Zollverein",
            "Poor Law Amendment Act",
            "Lloyd's Register reconstituted (standardizing ship safety)",
            "Babbage's 'Economy of Machinery' (standardizing work)"
          ]
        },
        "1839": {
          "salience_share": 8.8,
          "description": "Standardization of Communication (+1.3%). The catalyst is the 'Penny Post' reform (Rowland Hill). By standardizing the cost of a letter regardless of distance (within the UK), it democratizes logistics. The Opium War (1839) is a violent enforcement of 'Free Trade'\u2014forcing China to accept the West's logistical flows (opium in, tea/silver out). The 'Railway Clearing House' is formed to manage payments across different rail lines.",
          "key_manifestations": [
            "Penny Post introduction",
            "First Opium War outbreak",
            "Daguerreotype (standardizing visual reality)",
            "Goodyear's Rubber (standardizing waterproofing)"
          ]
        },
        "1844": {
          "salience_share": 10.2,
          "description": "The Telegraphic Synchronization (+1.4%). The telegraph allows prices in Manchester to match prices in London instantly. This eliminates arbitrage and creates a 'single market price.' The Bank Charter Act (1844) standardizes the issue of banknotes, tying them to gold reserves, creating the 'Gold Standard' discipline that will govern global trade for nearly a century.",
          "key_manifestations": [
            "Bank Charter Act of 1844",
            "Telegraph line expansion",
            "Brunel's SS Great Britain (propeller standard)",
            "Rochdale Pioneers (standardizing the Cooperative model)"
          ]
        },
        "1849": {
          "salience_share": 12.5,
          "description": "The Victory of Free Trade (+2.3%). The catalyst is the repeal of the Corn Laws (1846) and the Navigation Acts (1849). Britain unilaterally opens its ports, betting that its industrial efficiency (Cluster 1) will dominate a frictionless world. This is the birth of the 'First Era of Globalization.' The California Gold Rush injects massive liquidity into this new system, lubricating the gears.",
          "key_manifestations": [
            "Repeal of the Navigation Acts",
            "Repeal of the Corn Laws (impact felt)",
            "California Gold Rush (global migration logistics)",
            "Marx's Communist Manifesto (global proletarian identity)"
          ]
        },
        "1854": {
          "salience_share": 13.5,
          "description": "Standardization of the Body (+1.0%). The Crimean War forces the standardization of uniforms and medical treatment (Nightingale). 'Railway Time' becomes a necessity; local solar time causes accidents. The 'First International Statistical Congress' (1853) meets, attempting to standardize how nations count their people and products.",
          "key_manifestations": [
            "First International Statistical Congress",
            "Adoption of Railway Time by major companies",
            "Perry Expedition to Japan (forcing logistical opening)",
            "Otis Elevator (standardizing vertical transport)"
          ]
        },
        "1859": {
          "salience_share": 15.0,
          "description": "Variance rises (+1.5%). The 'Cobden-Chevalier Treaty' (1860 prep) is the first modern Free Trade agreement, using the 'Most Favored Nation' clause to spread tariff reductions virally. This creates a web of low tariffs across Europe. The Suez Canal construction begins, promising to short-circuit the Cape route.",
          "key_manifestations": [
            "Cobden-Chevalier Treaty negotiations",
            "Suez Canal construction start",
            "Darwin's Origin (standardizing biological time)",
            "Reuters (standardizing global news)"
          ]
        },
        "1864": {
          "salience_share": 16.5,
          "description": "Standardization of Communication protocols (+1.5%). The catalyst is the founding of the International Telegraph Union (ITU) in 1865. Nations agree on Morse code standards and cross-border interconnects. This is the first permanent international organization. The Geneva Convention (1864) standardizes the 'rules of war' regarding the wounded.",
          "key_manifestations": [
            "Founding of the International Telegraph Union",
            "First Geneva Convention",
            "US National Banking Acts (standardizing the Greenback)",
            "International Workingmen's Association (standardizing labor)"
          ]
        },
        "1869": {
          "salience_share": 19.0,
          "description": "The Physical Unification (+2.5%). The Transcontinental Railroad and Suez Canal open within months of each other. The 'around the world' trip is now a scheduled itinerary (Verne's 80 Days). This compression of space demands a unification of time. The periodic table (Mendeleev) standardizes the understanding of matter itself.",
          "key_manifestations": [
            "Opening of the Suez Canal",
            "Golden Spike (Transcontinental RR)",
            "Verne's 'Twenty Thousand Leagues' (global oceanography)",
            "Grant's Peace Policy (standardizing reservation system)"
          ]
        },
        "1874": {
          "salience_share": 21.5,
          "description": "The Gold Standard Era (+2.5%). Germany adopts the Gold Standard (1873), forcing other nations to follow to maintain trade parity. This creates a single global currency system, where exchange rates are fixed. The 'Universal Postal Union' (1874) is founded, allowing a letter to travel anywhere for a flat fee, solving the 'logistical nightmare' of bilateral postal treaties.",
          "key_manifestations": [
            "Treaty of Bern (Universal Postal Union)",
            "Gold Standard adoption spread",
            "Impressionism (standardizing the avant-garde market)",
            "Remington Typewriter (standardizing the font)"
          ]
        },
        "1879": {
          "salience_share": 23.0,
          "description": "Standardization of Time (+1.5%). The pressure for a 'Prime Meridian' grows. Fleming proposes standard time zones. The 'Plimsoll Line' is mandated on British ships, standardizing safety and insurance loading limits. This prevents 'coffin ships' and regularizes insurance risk.",
          "key_manifestations": [
            "Proposal for Standard Time (Sandford Fleming)",
            "Plimsoll Line Act enforcement",
            "Edison's Light Bulb (standardizing the socket)",
            "Bismarck's Alliance System (diplomatic standardization)"
          ]
        },
        "1884": {
          "salience_share": 26.5,
          "description": "The Temporal Singularity (+3.5%). The catalyst is the International Meridian Conference in Washington D.C. It selects Greenwich as the Prime Meridian (0\u00b0 longitude) and establishes the 24-hour global time zone system. The world now ticks to a single clock. This is the ultimate logistical software. The 'Berlin Conference' partitions Africa, applying European borders (straight lines) to a continent, standardizing imperial administration.",
          "key_manifestations": [
            "International Meridian Conference",
            "Berlin Conference (Partition of Africa)",
            "Parsons Turbine (standardizing power gen)",
            "Maxim Gun (standardizing lethality)"
          ]
        },
        "1889": {
          "salience_share": 28.0,
          "description": "Standardization of the Human (+1.5%). Galton and Bertillon develop systems for identifying criminals (fingerprinting, anthropometry). The 'Hollerith Machine' standardizes the citizen into a punch card. The 'Second International' standardizes the socialist movement's goals (8-hour day, May Day).",
          "key_manifestations": [
            "Hollerith Census Machine",
            "Bertillonage system adoption",
            "Second International founding",
            "Eiffel Tower (standardizing the skyline)"
          ]
        },
        "1894": {
          "salience_share": 29.5,
          "description": "Stasis (+1.5%). The system is locked in. The 'Gold Standard' is under attack by populists (William Jennings Bryan) who want inflation (Silver), but the logistical inertia of Gold holds. The 'Dewey Decimal System' standardizes knowledge organization in libraries.",
          "key_manifestations": [
            "William Jennings Bryan's 'Cross of Gold' speech (prep)",
            "Dewey Decimal System widespread use",
            "Marconi's Wireless (breaking the wire constraint)",
            "Sino-Japanese War (Japan joining the 'standard' powers)"
          ]
        },
        "1899": {
          "salience_share": 31.0,
          "description": "Standardization of Corporate Form (+1.5%). The 'Trust' and the 'Holding Company' become the standard vehicles for capital (Standard Oil, US Steel). The 'Hague Convention' (1899) attempts to standardize the laws of war, banning certain weapons (expanding bullets), trying to civilize the logistical application of violence.",
          "key_manifestations": [
            "First Hague Convention",
            "US Steel formation (prep)",
            "Veblen's 'Leisure Class' (standardized consumption)",
            "Open Door Policy (standardizing access to China)"
          ]
        },
        "1904": {
          "salience_share": 33.5,
          "description": "Logistics of Empire (+2.5%). The Panama Canal construction (US takeover) begins. This is the final 'shortcut' of the globe. The 'Entente Cordiale' standardizes the alliance between UK and France. The 'Dreadnought' (1906 prep) sets a new standard for battleships, rendering all previous fleets obsolete logistics.",
          "key_manifestations": [
            "US takeover of Panama Canal Zone",
            "Entente Cordiale signed",
            "Ford Motor Company (standardizing the car)",
            "Russo-Japanese War (logistical failure of Russia)"
          ]
        },
        "1909": {
          "salience_share": 36.0,
          "description": "The Assembly Line (+2.5%). Ford's innovation isn't just the line; it's the absolute interchangeability of parts. Every piston fits every cylinder. This logic permeates society. Taylor's 'Scientific Management' standardizes the movements of the worker. The 'SOS' signal becomes the standard distress call (1908).",
          "key_manifestations": [
            "Ford Model T Assembly Line",
            "Adoption of SOS standard",
            "Taylor's 'Principles of Scientific Management'",
            "Declaration of London (naval warfare laws)"
          ]
        },
        "1914": {
          "salience_share": 30.0,
          "description": "The Collapse (-6.0%). WWI destroys the 'First Era of Globalization.' The Gold Standard is suspended. Borders are closed. Submarines sink merchant ships. The global logistical machine is partitioned into two warring autarkies. However, *internal* standardization increases (War Industries Board) to manage the chaos.",
          "key_manifestations": [
            "Suspension of the Gold Standard",
            "Unrestricted Submarine Warfare",
            "Panama Canal Opening (overshadowed by war)",
            "War Industries Board (US)"
          ]
        },
        "1919": {
          "salience_share": 28.0,
          "description": "Failed Reconstruction (-2.0%). The Treaty of Versailles attempts to rebuild the order but creates new, fragmented borders (Balkanization). The League of Nations is an attempt at political standardization but lacks teeth. The 'Passport' becomes a permanent requirement for travel, a friction that never goes away.",
          "key_manifestations": [
            "Treaty of Versailles (New Borders)",
            "League of Nations founding",
            "Standardization of Passport requirements",
            "Keynes' 'Economic Consequences of the Peace'"
          ]
        },
        "1924": {
          "salience_share": 31.0,
          "description": "Partial Recovery (+3.0%). The 'Dawes Plan' standardizes German reparations, linking them to US loans. The Gold Exchange Standard is haltingly restored. International air travel begins, requiring new treaties (Warsaw Convention prep). The 'ISO' (ISA) is founded (1926) to coordinate industrial standards.",
          "key_manifestations": [
            "Dawes Plan",
            "Founding of ISA (International Federation of the National Standardizing Associations)",
            "Warsaw Convention (Aviation law)",
            "General Motors (market segmentation standard)"
          ]
        },
        "1929": {
          "salience_share": 25.0,
          "description": "The Great Disintegration (-6.0%). The Crash leads to the Smoot-Hawley Tariff (1930). Global trade collapses by 66%. Nations retreat into 'Imperial Preference' or Autarky. The logistical web is severed. The Gold Standard is abandoned (UK 1931). It is the end of the 19th-century liberal order.",
          "key_manifestations": [
            "Smoot-Hawley Tariff Act",
            "Britain abandons Gold Standard",
            "Collapse of world trade volume",
            "Ottawa Agreements (Imperial Preference)"
          ]
        },
        "1934": {
          "salience_share": 26.0,
          "description": "Standardization of the State (+1.0%). While global trade is dead, the 'GDP' (Gross Domestic Product) is invented (Kuznets) to measure the national economy. This standardizes how states see themselves. The 'DC-3' aircraft standardizes air travel, making it profitable and reliable.",
          "key_manifestations": [
            "Simon Kuznets' National Income accounts",
            "Douglas DC-3 first flight",
            "Reciprocal Trade Agreements Act (US pivot)",
            "Nuremberg Laws (standardizing racial exclusion)"
          ]
        },
        "1939": {
          "salience_share": 24.0,
          "description": "Logistics of Total War (-2.0%). Trade is zero-sum. The 'Liberty Ship' is the ultimate standardized product\u2014welded, not riveted, built in days. The 'Jerry Can' is invented by Germany, a perfect logistical container for fuel. The Allies form the 'Combined Chiefs of Staff,' standardizing military command.",
          "key_manifestations": [
            "Liberty Ship program",
            "Lend-Lease Act (logistical lifeline)",
            "Jerry Can design adoption",
            "Atlantic Charter (vision of post-war order)"
          ]
        },
        "1944": {
          "salience_share": 35.0,
          "description": "The New Order (+11.0%). A massive structural jump. The catalyst is the Bretton Woods Conference. The US Dollar becomes the world reserve currency (pegged to gold). The IMF and World Bank are created to manage the ledger. The Chicago Convention standardizes civil aviation (ICAO). The UN is planned. The world is rebooted on American logistical standards.",
          "key_manifestations": [
            "Bretton Woods Agreement",
            "Chicago Convention on Civil Aviation",
            "Dumbarton Oaks Conference (UN prep)",
            "Normandy Artificial Harbors (Mulberry)"
          ]
        },
        "1949": {
          "salience_share": 38.0,
          "description": "GATT and NATO (+3.0%). The General Agreement on Tariffs and Trade (GATT) begins the slow process of lowering tariffs. NATO standardizes the defense of the West (7.62mm ammo). The 'Pallet' becomes ubiquitous, standardizing the unit of forklift load. The 'Euro' concept is dreamt of (Coal and Steel Community).",
          "key_manifestations": [
            "GATT signing",
            "NATO treaty",
            "Schuman Declaration (European Coal and Steel Community)",
            "Universal Declaration of Human Rights"
          ]
        },
        "1954": {
          "salience_share": 45.0,
          "description": "The Container Revolution (+7.0%). The catalyst is Malcom McLean (1956). He puts a truck trailer on a ship. The 'Intermodal Shipping Container' is born. It eliminates the stevedore, reduces theft, and slashes the cost of loading from dollars to pennies. This allows manufacturing to move anywhere. It is the physical packet-switching of the material world.",
          "key_manifestations": [
            "Malcom McLean's Ideal X voyage",
            "Treaty of Rome (founding the EEC)",
            "Introduction of the credit card (Diners Club/Visa prep)",
            "Toyota Production System (Lean logistics)"
          ]
        },
        "1959": {
          "salience_share": 48.0,
          "description": "Jet Age Logistics (+3.0%). The Boeing 707 and Douglas DC-8 shrink the world. 'Air Freight' becomes a reality for high-value goods. The 'Europallet' is standardized. The St. Lawrence Seaway opens the US Midwest to the Atlantic. The 'Green Revolution' standardizes global agriculture (Cluster 8).",
          "key_manifestations": [
            "Boeing 707 global service",
            "St. Lawrence Seaway opening",
            "OECD founding",
            "Organization of OPEC"
          ]
        },
        "1964": {
          "salience_share": 52.0,
          "description": "Standardization of Information (+4.0%). The ISBN (International Standard Book Number) is developed. ASCII (1963) standardizes how computers represent text. The ISO container standards are finalized, ensuring a box fits on any ship/truck/train globally. The 'Kennedy Round' of GATT slashes tariffs further.",
          "key_manifestations": [
            "ISO 668 (Container dimensions)",
            "ASCII standard published",
            "Kennedy Round of GATT",
            "INTELSAT (global satellite comms)"
          ]
        },
        "1969": {
          "salience_share": 55.0,
          "description": "The Global Financial Grid (+3.0%). The 'Eurodollar' market rises. SWIFT (Society for Worldwide Interbank Financial Telecommunication) is founded (1973 prep), standardizing how banks talk to each other. The Moon Landing is a global TV event, standardizing the 'human experience.'",
          "key_manifestations": [
            "Creation of Special Drawing Rights (SDRs)",
            "ARPANET (digital logistics)",
            "Moon Landing broadcast",
            "Nixon Shock (End of Bretton Woods - floating rates)"
          ]
        },
        "1974": {
          "salience_share": 53.0,
          "description": "Shock and Adjustment (-2.0%). The Oil Crisis disrupts the flow. The move to 'Floating Exchange Rates' increases risk, birthing the 'Derivatives' market (futures/options) to hedge logistical/financial risk. Bar codes (UPC) are scanned for the first time (1974), standardizing the checkout and inventory control.",
          "key_manifestations": [
            "First UPC scan (Wrigley's gum)",
            "Floating Exchange Rates adoption",
            "Multi-Fibre Arrangement (managing textile trade)",
            "Founding of SWIFT"
          ]
        },
        "1979": {
          "salience_share": 58.0,
          "description": "Just-In-Time (+5.0%). The catalyst is the Japanese automotive invasion. Toyota's 'Kanban' system relies on perfect logistical timing to eliminate inventory. The West copies it. FedEx (founded 1971, booming now) proves that 'Overnight' is a sellable product. The world is becoming a single factory floor.",
          "key_manifestations": [
            "Toyota's Just-In-Time methodology spreads",
            "FedEx scaling up",
            "GATT Tokyo Round",
            "Deng Xiaoping's 'Opening Up' (China enters the logistics)"
          ]
        },
        "1984": {
          "salience_share": 62.0,
          "description": "Financial Globalization (+4.0%). The 'Big Bang' in London (1986 prep) deregulates finance. Capital can move instantly. The 'Plaza Accord' (1985) coordinates global currencies to manage the dollar. The 'Single European Act' aims to create a true single market in Europe.",
          "key_manifestations": [
            "Plaza Accord",
            "Single European Act",
            "Schengen Agreement (Open Borders)",
            "Dell's 'Direct Model' (supply chain as strategy)"
          ]
        },
        "1989": {
          "salience_share": 68.0,
          "description": "The End of History (+6.0%). The Berlin Wall falls. The Soviet Bloc joins the global market. The 'Washington Consensus' prescribes deregulation and trade for everyone. The web (WWW) standardizes information access. The 'Maastricht Treaty' plans the Euro.",
          "key_manifestations": [
            "Fall of the Berlin Wall",
            "Maastricht Treaty",
            "Washington Consensus coined",
            "NAFTA negotiations start"
          ]
        },
        "1994": {
          "salience_share": 75.0,
          "description": "The WTO Era (+7.0%). The World Trade Organization (WTO) is founded (1995). It has a court to enforce trade rules. Services and IP are now 'tradable goods.' The Schengen Area opens. The internet (TCP/IP) becomes the global dial tone. Supply chains extend to China.",
          "key_manifestations": [
            "Establishment of the WTO",
            "Schengen Area effective",
            "Amazon.com founded (logistics of the long tail)",
            "TRIPS Agreement (Intellectual Property)"
          ]
        },
        "1999": {
          "salience_share": 78.0,
          "description": "The Euro Launch (+3.0%). The Euro is introduced (accounting 1999, cash 2002). A continent shares a currency. China prepares for WTO entry. 'Offshoring' is the dominant business strategy. The 'Y2K' bug preparation is a massive global audit of the standardized date code.",
          "key_manifestations": [
            "Launch of the Euro",
            "China US PNTR status",
            "Protests in Seattle (Anti-Globalization)",
            "Y2K remediation"
          ]
        },
        "2004": {
          "salience_share": 85.0,
          "description": "Hyper-Globalization (+7.0%). China joins WTO (2001). The 'China Price' flattens inflation. The supply chain is now 'China + 1.' The 'Baltic Dry Index' (shipping cost) is a key economic indicator. Fast Fashion (Zara) relies on air-freight logistics. The world is flat.",
          "key_manifestations": [
            "China's WTO accession impact",
            "Google Maps (standardizing navigation)",
            "ISPS Code (Post-9/11 port security)",
            "The World Is Flat (Friedman)"
          ]
        },
        "2009": {
          "salience_share": 82.0,
          "description": "The Crash Test (-3.0%). The Financial Crisis causes a massive trade contraction. 'Slowbalization' begins. Resilience is questioned, but the system holds. Bitcoin (2009) proposes a decentralized standard for value, outside the Bretton Woods system. The Belt and Road Initiative (BRI) is conceived by China to build its own logistical infrastructure.",
          "key_manifestations": [
            "Collapse of global trade volume (2009)",
            "Bitcoin Genesis Block",
            "Lisbon Treaty (EU consolidation)",
            "Uber (logistics of labor)"
          ]
        },
        "2014": {
          "salience_share": 80.0,
          "description": "Fracture Lines (-2.0%). The Belt and Road Initiative launches. Russia invades Crimea, leading to sanctions (weaponized interdependence). Brexit (2016) is a vote against standardization. The TPP (Trans-Pacific Partnership) attempts to exclude China but is abandoned by the US.",
          "key_manifestations": [
            "Belt and Road Initiative launch",
            "Brexit Referendum",
            "Paris Agreement (Standardizing carbon goals)",
            "US withdrawal from TPP"
          ]
        },
        "2019": {
          "salience_share": 75.0,
          "description": "Supply Chain Shock (-5.0%). The US-China Trade War raises tariffs. Then COVID-19 breaks the just-in-time model. Containers pile up in the wrong ports. The *Ever Given* blocks the Suez Canal, a perfect metaphor for the fragility of the choke points. 'Reshoring' and 'Friend-shoring' become the new buzzwords.",
          "key_manifestations": [
            "COVID-19 Supply Chain Collapse",
            "Ever Given Suez blockage",
            "USMCA (replacing NAFTA)",
            "Global Minimum Tax agreement (OECD)"
          ]
        },
        "2024": {
          "salience_share": 72.0,
          "description": "The Fragmented Stack (-3.0%). The world is splitting into two logistical/technological spheres: US/West and China/BRICS. Sanctions on chips (NVidia) prove that high-tech logistics are now a weapon. The Red Sea attacks by Houthis force ships around Africa, unwinding 150 years of Suez efficiency. Standardization remains in protocols (5G, AI), but physical flow is politically gated.",
          "key_manifestations": [
            "Red Sea Shipping Crisis",
            "Expansion of BRICS (alternative G7)",
            "EU Carbon Border Adjustment Mechanism (Green tariffs)",
            "TSMC Arizona Fab (Reshoring)"
          ]
        }
      }
    },
    "7_scientific_institutionalization": {
      "name": "Scientific Institutionalization",
      "description": "This eigencluster represents the transformation of science from a hobby of 'Gentlemen Amateurs' (Natural Philosophy) to a professional, state-funded, industrial-scale engine of discovery. It tracks the evolution of the research university (Humboldt model), the peer-review system, the laboratory, the grant economy, and the rise of 'Big Science' (Manhattan Project/CERN). It is the bureaucratization of curiosity.",
      "trajectory": {
        "1789": {
          "salience_share": 1.5,
          "description": "Variance is low. Science is the domain of wealthy individuals (Lavoisier, Banks) or Royal Societies. It is 'Republic of Letters.' Funding is patronage. The French Revolution executes Lavoisier ('The Republic has no need of savants'), marking the tension between populist politics and elite knowledge. However, the *Metric System* effort shows the state's need for scientific utility.",
          "key_manifestations": [
            "Lavoisier's execution",
            "Founding of the Annales de Chimie",
            "Erasmus Darwin's Botanic Garden",
            "Herschel's private observatory work"
          ]
        },
        "1794": {
          "salience_share": 2.0,
          "description": "The Technocratic Turn (+0.5%). The French Revolution pivots. The *\u00c9cole Polytechnique* is founded (1794). This is the catalyst. It is the first modern technical university, designed to produce engineer-savants for the state/military. It professionalizes math and physics. Science becomes a career, not a calling.",
          "key_manifestations": [
            "Founding of \u00c9cole Polytechnique",
            "Founding of the Conservatoire des Arts et M\u00e9tiers",
            "Institute of France replaces Royal Academies",
            "Laplace's teaching at the \u00c9cole"
          ]
        },
        "1799": {
          "salience_share": 2.2,
          "description": "Stasis (+0.2%). The Royal Institution is founded in London (Rumford). It aims to diffuse knowledge to the public, but it relies on subscriptions. It is not yet a university. Napoleon takes 167 savants to Egypt, integrating science directly into the military expedition logistically.",
          "key_manifestations": [
            "Founding of the Royal Institution",
            "Napoleon's Institute of Egypt",
            "Volta's letter to Joseph Banks (international comms despite war)",
            "Humboldt's self-funded expedition to Americas"
          ]
        },
        "1804": {
          "salience_share": 2.5,
          "description": "Slow growth (+0.3%). The French model spreads. Napoleon reforms the French university system (Imperial University). In Germany, the defeat by Napoleon triggers a desire for renewal through intellect. The 'Idealist' philosophy (Schelling/Fichte) elevates the role of the scholar.",
          "key_manifestations": [
            "Dalton's Atomic Theory (Manchester Lit & Phil)",
            "Napoleonic University reforms",
            "Lewis and Clark (Military-Science mission)",
            "Phrenology (Pseudoscience gaining institutional traction)"
          ]
        },
        "1809": {
          "salience_share": 3.5,
          "description": "The Humboldt Model (+1.0%). The catalyst is the founding of the University of Berlin by Wilhelm von Humboldt. The principle is *Einheit von Lehre und Forschung* (Unity of Teaching and Research). The professor is paid to create new knowledge, not just teach old dogma. This is the birth of the modern research university and the PhD system.",
          "key_manifestations": [
            "Founding of the University of Berlin",
            "Lamarck's 'Zoological Philosophy' (Museum based research)",
            "Gauss appointed director of G\u00f6ttingen Observatory",
            "Quarterly Review founded (critical discourse)"
          ]
        },
        "1814": {
          "salience_share": 3.8,
          "description": "Diffusion (+0.3%). The German model begins to influence neighbors. Berzelius in Sweden standardizes chemical notation, creating a 'language' for the institution. The 'Surgeon' begins to separate from the 'Barber,' seeking scientific status.",
          "key_manifestations": [
            "Berzelius's chemical notation system",
            "Fraunhofer's optical institute work",
            "Rise of German chemical students",
            "Academy of Natural Sciences of Philadelphia"
          ]
        },
        "1819": {
          "salience_share": 4.2,
          "description": "Specialization (+0.4%). The 'Cambridge Analytical Society' reforms British mathematics, importing continental calculus. The sheer volume of knowledge is forcing specialization; the 'Polymath' is becoming harder to sustain. Journals become more specific.",
          "key_manifestations": [
            "Cambridge Analytical Society reforms",
            "Oersted's discovery (University lab based)",
            "Fresnel's optics (French Academy prize)",
            "Founding of the Geological Society (specialized body)"
          ]
        },
        "1824": {
          "salience_share": 4.8,
          "description": "The Lab Emerges (+0.6%). Liebig establishes his teaching laboratory at Giessen. This is the catalyst for the 'Chemistry Cluster.' He invents the modern laboratory method: students learn by synthesizing, not just reading. This creates a workforce of chemists for industry. The 'Mechanics' Institutes' spread in UK, educating the working class tech-base.",
          "key_manifestations": [
            "Justus von Liebig's Giessen Laboratory",
            "Founding of Franklin Institute (US)",
            "Carnot's work (outside the academy, ignored)",
            "Rensselaer Polytechnic Institute founded"
          ]
        },
        "1829": {
          "salience_share": 5.5,
          "description": "State Funding debates (+0.7%). Babbage campaigns on 'The Decline of Science in England,' arguing the state must fund research like the French do. The 'British Association for the Advancement of Science' (BAAS) is founded (1831 prep) to professionalize the field and lobby the government. The Smithsonian bequest (1829) plants the seed for US federal science.",
          "key_manifestations": [
            "James Smithson's Bequest",
            "Babbage's 'Reflections on the Decline of Science in England'",
            "Lyell's 'Principles of Geology' (professionalizing geology)",
            "Founding of the Royal Geographical Society"
          ]
        },
        "1834": {
          "salience_share": 6.2,
          "description": "The Word 'Scientist' (+0.7%). William Whewell coins the term 'Scientist' (1833/34). Before this, they were 'Natural Philosophers.' This linguistic shift marks the separation of science from philosophy and theology. It implies a profession. The 'Goettingen Seven' (1837 prep) shows professors taking political stands, asserting academic freedom.",
          "key_manifestations": [
            "Whewell coins 'Scientist'",
            "Founding of the Statistical Society of London",
            "Darwin's Voyage of the Beagle (State-sponsored)",
            "Arago's dominance in French Academy"
          ]
        },
        "1839": {
          "salience_share": 6.8,
          "description": "Internationalism (+0.6%). The 'First Opium War' is partly about opening markets for technology. But in science, correspondence networks tighten. The 'Electric Telegraph' connects observatories for time synchronization. Science is becoming a network.",
          "key_manifestations": [
            "Agassiz's Glacial Theory",
            "Liebig's 'Organic Chemistry in its Application to Agriculture'",
            "Royal Botanic Gardens, Kew (Empire's bio-lab)",
            "Goodyear's vulcanization (independent inventor)"
          ]
        },
        "1844": {
          "salience_share": 7.5,
          "description": "The German Ascendancy (+0.7%). The German universities are now the envy of the world. American students flock there. The PhD becomes the standard credential. The AAAS (American Association for the Advancement of Science) is founded (1848 prep), modeling on the BAAS.",
          "key_manifestations": [
            "Founding of the Smithsonian Institution (1846)",
            "Discovery of Neptune (Mathematical prediction)",
            "Joule's heat experiments (Amateur vs Pro tension)",
            "Virchow's early work"
          ]
        },
        "1849": {
          "salience_share": 8.2,
          "description": "Science and Industry (+0.7%). The 'Perkin's Mauve' discovery (1856 prep) is rooted here in the Royal College of Chemistry. The realization that academic research yields massive industrial profit (dyes) leads to corporate investment in R&D. The World Fair (1851) celebrates this union.",
          "key_manifestations": [
            "Great Exhibition of 1851 (The Crystal Palace)",
            "Foucault's Pendulum",
            "Kelvin's thermodynamics",
            "Establishment of the American Nautical Almanac Office"
          ]
        },
        "1854": {
          "salience_share": 9.0,
          "description": "The Darwinian Catalyst (+0.8%). Wallace and Darwin are working. The professionalization of biology. The 'Bunsen Burner' (1855) standardizes the lab flame. The 'Zurich Polytechnic' (ETH) is founded (1855), creating a Swiss MIT.",
          "key_manifestations": [
            "Founding of ETH Zurich",
            "Bunsen Burner invention",
            "Darwin-Wallace papers (prep)",
            "Virchow's Cellular Pathology"
          ]
        },
        "1859": {
          "salience_share": 11.0,
          "description": "The Origin of Species (+2.0%). Darwin's publication is the watershed. It creates a unified theory for biology, but also sparks the 'Science vs Religion' institutional battle (Huxley-Wilberforce debate). Science asserts its authority over the history of the earth and man. The 'Land Grant College Act' (Morrill Act, 1862 prep) in the US plans to democratize technical education.",
          "key_manifestations": [
            "Darwin's 'Origin of Species'",
            "Huxley-Wilberforce Debate (1860)",
            "Kirchhoff and Bunsen (Spectroscopy)",
            "Pasteur's Spontaneous Generation experiments"
          ]
        },
        "1864": {
          "salience_share": 12.5,
          "description": "The Land Grant Revolution (+1.5%). The Morrill Act (1862) is implemented. The US government gives land to states to fund colleges for 'Agriculture and Mechanic Arts.' This creates the Cornell, MIT, Berkeley system\u2014practical, state-funded, open. It diverges from the elite Oxbridge model. The National Academy of Sciences (US) is founded (1863) to advise the government during war.",
          "key_manifestations": [
            "Morrill Land-Grant Acts implementation",
            "Founding of the National Academy of Sciences",
            "Maxwell's Equations",
            "Mendel's work (published in obscure journal)"
          ]
        },
        "1869": {
          "salience_share": 14.0,
          "description": "The Research Journal (+1.5%). *Nature* is founded (1869). It creates a high-speed, weekly platform for scientific news, knitting the community together globally. Mendeleev's Periodic Table standardizes chemistry. The Cavendish Laboratory (Cambridge) is planned, bringing physics into the lab (previously math-heavy).",
          "key_manifestations": [
            "First issue of 'Nature'",
            "Mendeleev's Periodic Table",
            "Opening of the Suez Canal (global bio-transfer)",
            "Galton's 'Hereditary Genius' (measuring man)"
          ]
        },
        "1874": {
          "salience_share": 16.5,
          "description": "The Graduate School (+2.5%). Johns Hopkins University is founded (1876), the first US university modeled explicitly on the German research model (PhD focus). It revolutionizes American education. The Cavendish Lab opens (Maxwell as director). Edison creates Menlo Park (1876), the first 'Industrial Research Lab,' applying the method to profit.",
          "key_manifestations": [
            "Founding of Johns Hopkins University",
            "Opening of Cavendish Laboratory",
            "Edison's Menlo Park Lab",
            "Koch's Anthrax demo"
          ]
        },
        "1879": {
          "salience_share": 18.0,
          "description": "Microbe Hunters and Measurement (+1.5%). Michelson measures light speed. The 'Physikalisch-Technische Reichsanstalt' (PTR) is proposed in Germany\u2014a state institute for precision metrology to support industry. This is the model for the NPL and NIST. Science is measuring the decimal points of reality.",
          "key_manifestations": [
            "Michelson's light speed measurements",
            "Pasteur's Vaccine work",
            "IEEE founding (AIEE)",
            "Scramble for Africa (scientific racism justification)"
          ]
        },
        "1884": {
          "salience_share": 20.0,
          "description": "Standardization of Standards (+2.0%). The Prime Meridian conference. The 'Kilogram' prototype is sanctioned. The IEEE standardizes electrical units (Volt, Amp). Science provides the 'API' for the industrial world. Hertz proves Maxwell's waves (1887 prep), validating the theoretical physics track.",
          "key_manifestations": [
            "International Meridian Conference",
            "Hertz's Radio Waves discovery",
            "Pasteur Institute founded",
            "Parsons Turbine"
          ]
        },
        "1889": {
          "salience_share": 22.0,
          "description": "The Corporate Lab (+2.0%). General Electric forms its research lab. Big Business realizes it needs Ph.D.s. The 'Sherman Antitrust Act' (1890) ironically encourages R&D, as companies compete on tech rather than price fixing. Hollerith's machines automate the data processing of the census.",
          "key_manifestations": [
            "Founding of Caltech (Throop Univ)",
            "Hollerith Census",
            "Tesla's AC experiments",
            "James' 'Principles of Psychology'"
          ]
        },
        "1894": {
          "salience_share": 24.5,
          "description": "The X-Ray Shock (+2.5%). Roentgen discovers X-Rays (1895). Becquerel discovers radioactivity (1896). The 'Classical Physics' is ending. The Nobel Prize is established in Alfred Nobel's will (1895), creating the ultimate secular sainthood for scientists. It gamifies the institution.",
          "key_manifestations": [
            "Roentgen's X-Rays",
            "Alfred Nobel's Will",
            "Becquerel's Radioactivity",
            "Marconi's Patent"
          ]
        },
        "1899": {
          "salience_share": 27.0,
          "description": "The Quantum Dawn (+2.5%). Planck discovers the quantum (1900). The 'Carnegie Institution for Science' is founded (1902 prep), marking the entry of the 'Robber Baron Philanthropy' into science (Rockefeller/Carnegie). They replace the Prince as the patron. The 'Rhodes Scholarship' standardizes the Anglo-elite education.",
          "key_manifestations": [
            "Planck's Blackbody Radiation law",
            "First Nobel Prizes awarded (1901)",
            "Founding of Rockefeller Institute for Medical Research",
            "Hilbert's Problems"
          ]
        },
        "1904": {
          "salience_share": 30.0,
          "description": "The Miracle Year (+3.0%). Einstein's *Annus Mirabilis* (1905). A patent clerk revolutionizes physics. It highlights the tension between the 'Institution' (which rejected him initially) and the 'Genius.' The Eugenics movement institutionalizes via the 'Cold Spring Harbor Laboratory,' applying science to heredity.",
          "key_manifestations": [
            "Einstein's 1905 Papers",
            "Founding of Cold Spring Harbor Lab",
            "Rutherford's alpha scattering",
            "Flexner Report (Medical Education reform)"
          ]
        },
        "1909": {
          "salience_share": 33.0,
          "description": "The Nucleus and the Nitrogen (+3.0%). Rutherford discovers the nucleus. Haber-Bosch industrializes chemistry. The 'Kaiser Wilhelm Society' (Max Planck Society) is founded in Germany (1911), a state-industry partnership for pure research. It is the pinnacle of the German model.",
          "key_manifestations": [
            "Rutherford's Gold Foil experiment",
            "Haber-Bosch Process",
            "Founding of Kaiser Wilhelm Society",
            "Superconductivity discovered (Onnes)"
          ]
        },
        "1914": {
          "salience_share": 36.0,
          "description": "Chemistry War (+3.0%). WWI is the 'Chemists' War.' Haber weaponizes chlorine. Science is mobilized for destruction. The 'National Research Council' (US) is formed to coordinate defense science. The illusion of scientific internationalism shatters as scientists sign manifestos supporting their nations.",
          "key_manifestations": [
            "Chemical Warfare at Ypres",
            "General Relativity published",
            "NACA founded (precursor to NASA)",
            "Manifesto of the Ninety-Three (German intellectuals)"
          ]
        },
        "1919": {
          "salience_share": 38.0,
          "description": "The Refugee Wave (+2.0%). Post-war chaos and rising anti-semitism in Europe begin to push scientists to the US / UK. The 'Eclipse Expedition' (Eddington, 1919) proves Einstein right, making him the first global scientific celebrity. The Solvay Conferences become the arena for the Quantum debate (Bohr-Einstein).",
          "key_manifestations": [
            "Eddington's Eclipse Expedition",
            "Rutherford splits the atom",
            "Institute of International Education founded",
            "Weimar culture (science and art mingle)"
          ]
        },
        "1924": {
          "salience_share": 42.0,
          "description": "Quantum Mechanics (+4.0%). The 'New Physics' is formalized (Heisenberg/Schr\u00f6dinger). It is abstract, mathematical, and requires specialized funding. The 'Rockefeller Foundation' funds the fellowships that allow European physicists to travel (Copenhagen/G\u00f6ttingen), building the network that will build the bomb. Bell Labs (1925) is incorporated as a separate entity.",
          "key_manifestations": [
            "Heisenberg's Uncertainty Principle",
            "Founding of Bell Labs",
            "Scopes Monkey Trial (Public fight over science)",
            "Goddard's Liquid Fuel Rocket"
          ]
        },
        "1929": {
          "salience_share": 45.0,
          "description": "The Cyclotron Era (+3.0%). Lawrence invents the Cyclotron at Berkeley. This is the birth of 'Big Science'\u2014physics that requires machines, not just chalkboards. It requires big money. The 'Institute for Advanced Study' (Princeton) is founded (1930), creating a haven for pure thought (Einstein moves there).",
          "key_manifestations": [
            "Lawrence's Cyclotron",
            "Founding of Institute for Advanced Study",
            "G\u00f6del's Incompleteness",
            "Fleming's Penicillin (accidental discovery)"
          ]
        },
        "1934": {
          "salience_share": 48.0,
          "description": "The Brain Drain (+3.0%). The Nazis purge the universities. Jewish scientists flee to the US/UK. This transfers the center of scientific gravity from Germany to America. Radar research begins in secret (Tizard Mission later). The 'Science and Society' movement (Bernal) argues science should serve the people (Marxist influence).",
          "key_manifestations": [
            "Nazi Civil Service Law (purging Jews)",
            "Einstein arrives in Princeton",
            "Fermi's Neutron bombardment",
            "Turing's Machine"
          ]
        },
        "1939": {
          "salience_share": 55.0,
          "description": "The Manhattan Project (+7.0%). The catalyst is the Einstein-Szilard letter. The US government takes over physics. The OSRD (Office of Scientific Research and Development) under Vannevar Bush mobilizes the universities. MIT becomes the 'Radiation Lab' (Radar). Los Alamos is a secret city of PhDs. Science becomes a military asset.",
          "key_manifestations": [
            "Einstein-Szilard Letter",
            "Establishment of the OSRD",
            "Manhattan Project launch",
            "Penicillin industrialization"
          ]
        },
        "1944": {
          "salience_share": 65.0,
          "description": "The Endless Frontier (+10.0%). The Bomb works. Radar wins the war. Science is the victor. Vannevar Bush writes 'Science, The Endless Frontier' (1945), arguing for permanent federal funding of basic research. This is the blueprint for the NSF and NIH. The 'Social Contract for Science' is signed: money for autonomy.",
          "key_manifestations": [
            "Trinity Test",
            "Bush's 'Science, The Endless Frontier'",
            "ENIAC",
            "Founding of the Atomic Energy Commission"
          ]
        },
        "1949": {
          "salience_share": 68.0,
          "description": "The NSF Era (+3.0%). The National Science Foundation is created (1950). The NIH expands. The Cold War drives funding. The 'Military-Industrial-Academic Complex' is born. Transistor invented at Bell Labs (corporate science peak). DNA structure race is on.",
          "key_manifestations": [
            "Founding of the NSF",
            "Lysenkoism in USSR (Ideology killing science)",
            "Watson and Crick's DNA",
            "Salk Polio Vaccine"
          ]
        },
        "1954": {
          "salience_share": 72.0,
          "description": "Space Race Launch (+4.0%). Sputnik (1957) shocks the US. NASA is founded (1958). DARPA is founded. The 'National Defense Education Act' pours money into STEM education. Science is Patriotism. CERN (1954) is founded in Europe to rebuild physics and stop the brain drain.",
          "key_manifestations": [
            "Sputnik launch",
            "Founding of NASA and DARPA",
            "Founding of CERN",
            "Snow's 'The Two Cultures'"
          ]
        },
        "1959": {
          "salience_share": 75.0,
          "description": "The Paradigms Shift (+3.0%). Kuhn's 'Structure of Scientific Revolutions' (1962) analyzes the institution itself. The Laser is invented. The Apollo Program consumes 4% of the US budget. The 'Green Revolution' institutes (IRRI, CIMMYT) export science to the Third World.",
          "key_manifestations": [
            "Kuhn's 'Structure of Scientific Revolutions'",
            "Apollo Program peak funding",
            "Carson's 'Silent Spring' (critique of science)",
            "Laser invention"
          ]
        },
        "1964": {
          "salience_share": 70.0,
          "description": "The Backlash (-5.0%). The Counterculture attacks science as the tool of the 'Man' (Nuclear weapons, Vietnam tech, pollution). Funding plateaus. The 'Mansfield Amendment' (1969) restricts military funding to direct military applications, severing the loose cash for basic science.",
          "key_manifestations": [
            "Mansfield Amendment",
            "Apollo 11 (Peak achievement)",
            "Union of Concerned Scientists founded",
            "ARPANET (Defense funding hidden benefit)"
          ]
        },
        "1969": {
          "salience_share": 68.0,
          "description": "The War on Cancer (+2.0%). Nixon declares War on Cancer. The NIH budget explodes. Biology begins to overtake Physics as the 'Big Science.' The 'Environmental Protection Agency' (EPA) brings science into regulation. Recombinant DNA (1973) sparks the 'Asilomar Conference,' where scientists self-regulate to avoid bans.",
          "key_manifestations": [
            "National Cancer Act",
            "Asilomar Conference on Recombinant DNA",
            "Standard Model of Physics finalized",
            "CT Scan invention"
          ]
        },
        "1974": {
          "salience_share": 65.0,
          "description": "Stagflation Science (-3.0%). Economic crisis cuts budgets. The Superconducting Super Collider is proposed but faces skepticism. The 'Bayh-Dole Act' (1980 prep) is brewing\u2014allowing universities to patent federally funded inventions. This will commercialize the academy.",
          "key_manifestations": [
            "Voyager probes launch",
            "Smallpox Eradication",
            "Three Mile Island (loss of trust)",
            "Sagan's 'Cosmos' (Public outreach)"
          ]
        },
        "1979": {
          "salience_share": 70.0,
          "description": "Biotech Boom (+5.0%). The catalyst is the Bayh-Dole Act (1980) and the Genentech IPO. The professor becomes the founder. The boundary between 'Pure' and 'Applied' blurs in biology. The 'Diamond v. Chakrabarty' ruling allows patenting of life forms. Science becomes a market asset.",
          "key_manifestations": [
            "Bayh-Dole Act passed",
            "Genentech IPO",
            "Diamond v. Chakrabarty Supreme Court Case",
            "Space Shuttle first launch"
          ]
        },
        "1984": {
          "salience_share": 72.0,
          "description": "The Super Collider Death (+2.0%). The discovery of High-Tc Superconductivity creates hype. But the 'Superconducting Super Collider' (SSC) cost balloons. The Cold War ends, removing the 'Defense' justification for physics. The Hubble Telescope launches (1990), a 'Big Science' survivor.",
          "key_manifestations": [
            "Discovery of High-Tc Superconductivity",
            "Human Genome Project planning",
            "Cold Fusion debacle (institutional correction)",
            "Intergovernmental Panel on Climate Change (IPCC) founded"
          ]
        },
        "1989": {
          "salience_share": 70.0,
          "description": "The End of Physics Dominance (-2.0%). The SSC is cancelled (1993). Congress chooses the Space Station and the Genome over the Particle. Physics enters a 'winter.' The Web (CERN) is the accidental spinoff. The IPCC begins its reports, institutionalizing climate science.",
          "key_manifestations": [
            "Cancellation of the Superconducting Super Collider",
            "Launch of the World Wide Web",
            "Human Genome Project official start",
            "Hubble Telescope Mirror fix"
          ]
        },
        "1994": {
          "salience_share": 75.0,
          "description": "Genomic Industrialization (+5.0%). The Human Genome Project runs like a factory (Celera vs Public). Automation enters the lab (PCR, Sequencers). 'Dolly the Sheep' clones. The 'Science Wars' (Sokal Hoax) debate the social construction of scientific truth.",
          "key_manifestations": [
            "Sokal Hoax",
            "Dolly the Sheep",
            "Completion of HGP Draft (2000)",
            "Founding of the Gates Foundation (Global Health science)"
          ]
        },
        "1999": {
          "salience_share": 72.0,
          "description": "The Publication Crisis (-3.0%). The cost of journals skyrockets (Elsevier). The 'Open Access' movement begins (PLOS). The 'Reproducibility Crisis' seeds are sown\u2014publish or perish leads to p-hacking. Climate Science becomes a political target.",
          "key_manifestations": [
            "Budapest Open Access Initiative",
            "Anthrax Attacks (Biodefense funding boom)",
            "Wikipedia (Democratizing knowledge)",
            "Stem Cell debate (Bush restrictions)"
          ]
        },
        "2004": {
          "salience_share": 75.0,
          "description": "The Rise of Chinese Science (+3.0%). China ramps up R&D spending. The 'Materials Science' and 'AI' papers from China begin to surge. Graphene is discovered (2004). The Large Hadron Collider (LHC) turns on (2008), the last cathedral of high-energy physics.",
          "key_manifestations": [
            "Discovery of Graphene",
            "LHC activation",
            "Stern Review on Climate Change",
            "Smartphone (integrated science)"
          ]
        },
        "2009": {
          "salience_share": 70.0,
          "description": "The Replication Crisis (-5.0%). Psychology and Medicine face a reckoning. Many famous studies cannot be replicated. 'Meta-science' emerges to study science itself. The Higgs Boson is found (2012), completing the Standard Model, but leaving physics with 'now what?' CRISPR (2012) revolutionizes the wet lab.",
          "key_manifestations": [
            "Discovery of the Higgs Boson",
            "CRISPR-Cas9 paper",
            "Ioannidis' 'Why Most Published Research Findings Are False' (impact felt)",
            "Deep Learning breakthrough (AlexNet)"
          ]
        },
        "2014": {
          "salience_share": 75.0,
          "description": "AI Science (+5.0%). AlphaGo. Deep Learning begins to solve scientific problems (Protein folding). Science moves from 'Hypothesis driven' to 'Data driven.' The 'Preprint' (arXiv/bioRxiv) becomes standard, bypassing slow peer review. LIGO detects gravity waves (2015), a triumph of precision.",
          "key_manifestations": [
            "LIGO Gravity Wave detection",
            "AlphaFold (early work)",
            "March for Science (Political reaction)",
            "He Jiankui CRISPR babies"
          ]
        },
        "2019": {
          "salience_share": 85.0,
          "description": "Pandemic Speed (+10.0%). COVID-19. Operation Warp Speed. Science creates a vaccine in months. The 'Preprint' server becomes the news source. Trust in science polarizes. The 'Lab Leak' theory challenges the safety of the institution. AI (AlphaFold 2) solves the protein folding problem.",
          "key_manifestations": [
            "mRNA Vaccines",
            "AlphaFold 2",
            "JWST Launch",
            "Lab Leak Controversy"
          ]
        },
        "2024": {
          "salience_share": 80.0,
          "description": "The Silicon Scientist (-5.0%). AI is now generating hypotheses and running 'self-driving labs.' The human role is questioning. 'Dual Use' concern rises\u2014can AI design bio-weapons? US-China decoupling splits the scientific community (CHIPS Act). Science is no longer open; it is strategic.",
          "key_manifestations": [
            "AI-discovered materials (GNoME)",
            "Fusion Ignition (NIF repeated)",
            "Research Security strictures (US/China split)",
            "LK-99 Superconductor viral failure (social media peer review)"
          ]
        }
      }
    },
    "8_agricultural_yield_intensification": {
      "name": "Agricultural Yield Intensification",
      "description": "This eigencluster represents the escape from the Malthusian Trap. It tracks the technological and chemical interventions that decoupled human caloric production from the natural limits of land area and solar capture. It encompasses the shift from organic fertilizers (manure/guano) to synthetic nitrogen (Haber-Bosch), the mechanization of labor (tractor), the genetic engineering of the seed (Green Revolution/GMOs), and the industrialization of the animal (factory farming).",
      "trajectory": {
        "1789": {
          "salience_share": 4.5,
          "description": "Variance is high but static. The world is agrarian; 90% of the population works the land to feed the 10%. The 'Norfolk Four-Course' rotation is the state of the art, using turnips and clover to restore nitrogen naturally. The catalyst for future change is the pressure of population growth in Britain/France pushing against the 'land frontier.' Malthus is writing his *Essay*, articulating the mathematical certainty of starvation.",
          "key_manifestations": [
            "Thomas Malthus's 'Essay on the Principle of Population' (drafting)",
            "Arthur Young's 'Annals of Agriculture'",
            "Introduction of the Mangel-wurzel (fodder crop)",
            "Whiskey Rebellion (grain as value store)"
          ]
        },
        "1794": {
          "salience_share": 4.8,
          "description": "Slow improvement (+0.3%). The Cotton Gin (Whitney) industrializes the fiber crop, creating a demand for monoculture plantation agriculture in the US South. This acts as a displacing force for mixed subsistence farming. In Europe, the Enclosure Acts continue to consolidate land, allowing for capital-intensive improvements (drainage, breeding) impossible in the open-field system.",
          "key_manifestations": [
            "Eli Whitney's Cotton Gin patent",
            "General Enclosure Act of 1801 (process ongoing)",
            "Erasmus Darwin's 'Phytologia' (plant physiology)",
            "Establishment of the Board of Agriculture (UK)"
          ]
        },
        "1799": {
          "salience_share": 5.0,
          "description": "Stasis (+0.2%). The Napoleonic Wars disrupt the grain trade, forcing autarky. This stimulates the 'Sugar Beet' industry in France (1811 peak), the first major example of industrial crop substitution driven by geopolitics. Humboldt discovers Guano in Peru (1802), noting its fertilizing power, but it remains a curiosity.",
          "key_manifestations": [
            "Humboldt's notes on Peruvian Guano",
            "Achard's Sugar Beet factory in Silesia",
            "Malthus's Essay (1798 edition influence)",
            "Coke of Norfolk's sheep shearings (breeding tech)"
          ]
        },
        "1804": {
          "salience_share": 5.2,
          "description": "Scientific dawn (+0.2%). De Saussure publishes *Recherches Chimiques sur la V\u00e9g\u00e9tation*, proving that plants get their carbon from the air, not the soil. This shatters the 'Humus Theory' and sets the stage for chemical fertilizers. The Louisiana Purchase doubles the arable land of the US, temporarily relieving Malthusian pressure via expansion rather than intensification.",
          "key_manifestations": [
            "De Saussure's 'Recherches Chimiques'",
            "Louisiana Purchase",
            "Start of Merino sheep mania in US (genetic import)",
            "Thaer's 'Principles of Rational Agriculture'"
          ]
        },
        "1809": {
          "salience_share": 5.5,
          "description": "Canning emerged (+0.3%). Nicolas Appert wins the French prize for preserving food. While not yield intensification, it is 'calorie stabilization,' reducing waste and allowing food to move through time. The Continental System forces Europe to farm intensively. The 'Cast Iron Plow' begins to replace wooden plows, improving tillage efficiency.",
          "key_manifestations": [
            "Nicolas Appert's 'The Art of Preserving'",
            "Jethro Wood's Plow Patent (replaceable parts)",
            "Ricardo's theory of Rent (agricultural economics)",
            "Oberkampf's cotton printing (fiber demand)"
          ]
        },
        "1814": {
          "salience_share": 6.0,
          "description": "The Corn Law Era (+0.5%). The eruption of Mount Tambora (1815) causes the 'Year Without a Summer' (1816), a massive crop failure shock. It proves the fragility of the organic system. The Corn Laws (1815) are passed to protect British landlords, artificially keeping grain prices high and incentivizing investment in drainage and lime.",
          "key_manifestations": [
            "Corn Laws passed (1815)",
            "Year Without a Summer (1816 famine)",
            "Davy's 'Elements of Agricultural Chemistry'",
            "Lamarck's evolutionary theories (adaptation)"
          ]
        },
        "1819": {
          "salience_share": 6.2,
          "description": "Growth (+0.2%). The 'Guano' trade begins to trickle in. The realization that nutrients can be imported (mining soil fertility elsewhere) changes the closed-loop logic of the farm. John Loudon McAdam's roads improve the transport of lime and manure to fields.",
          "key_manifestations": [
            "Start of commercial Guano imports to UK",
            "Cobbett's 'Rural Rides' (documenting the shift)",
            "McCormick born (future mechanization)",
            "Founding of the Royal Horticultural Society"
          ]
        },
        "1824": {
          "salience_share": 6.8,
          "description": "Scientific turn (+0.6%). The 'Nitrogen Cycle' remains a mystery, but empirical trials show bones (phosphates) increase yields. The industry of grinding battlefield bones (Waterloo) for fertilizer is a grim marker of nutrient scarcity. The Erie Canal (1825) opens the Midwest, creating a 'breadbasket' that will eventually flood Europe with cheap grain.",
          "key_manifestations": [
            "Erie Canal completion",
            "Liebig begins work in Giessen",
            "Early bone-crushing mills",
            "Sismondi's critique of capitalist agriculture"
          ]
        },
        "1829": {
          "salience_share": 7.5,
          "description": "Mechanization stirrings (+0.7%). The reaper is being experimented with. The logic of the factory (Cluster 1) is approaching the field. The 'Swing Riots' (1830) in England show laborers destroying threshing machines, fearing displacement. This is the Luddite movement of agriculture.",
          "key_manifestations": [
            "Swing Riots (anti-machinery)",
            "Patrick Bell's Reaping Machine prototype",
            "Lyell's Geology (understanding soil formation)",
            "Introduction of Chilean Nitrate (Sodium Nitrate)"
          ]
        },
        "1834": {
          "salience_share": 8.5,
          "description": "The Mechanical Reaper (+1.0%). Cyrus McCormick patents the Reaper (1834). This is the 'Steam Engine' of the prairies. It removes the labor constraint of the harvest window. A farmer can now plant more than he can cut by hand. Simultaneously, the 'Guano Boom' begins in earnest, importing millions of tons of bird droppings to restore British soil.",
          "key_manifestations": [
            "Cyrus McCormick's Reaper Patent",
            "John Bennet Lawes experiments at Rothamsted",
            "Arrival of first major Guano shipments",
            "Tocqueville's observations on American abundance"
          ]
        },
        "1839": {
          "salience_share": 9.5,
          "description": "Chemical Chemistry (+1.0%). Justus von Liebig publishes *Organic Chemistry in its Application to Agriculture* (1840). He declares 'NPK' (Nitrogen, Phosphorus, Potassium) are the keys. He destroys the Humus theory forever. He formulates the 'Law of the Minimum'\u2014yield is limited by the scarcest nutrient. This launches the chemical fertilizer industry (Superphosphate).",
          "key_manifestations": [
            "Liebig's 'Agricultural Chemistry'",
            "Lawes patents Superphosphate",
            "Founding of Rothamsted Research Station",
            "Royal Agricultural Society founded"
          ]
        },
        "1844": {
          "salience_share": 11.0,
          "description": "The Potato Crash (+1.5%). The Irish Potato Famine (1845) begins. A monoculture (Lumper potato) is wiped out by a fungus (Late Blight) transported by global trade (Cluster 6). It is the Malthusian nightmare realized. It forces the Repeal of the Corn Laws (1846), committing Britain to a strategy of food importation rather than self-sufficiency.",
          "key_manifestations": [
            "Irish Potato Famine (Phytophthora infestans)",
            "Repeal of the Corn Laws",
            "John Deere's Steel Plow (conquering the prairie sod)",
            "Guano Islands Act (US imperialism for fertilizer)"
          ]
        },
        "1849": {
          "salience_share": 12.5,
          "description": "Mechanized Expansion (+1.5%). The reaper spreads in the US. The 'Grain Elevator' (Dart, Buffalo) is invented, treating grain as a fluid that can be pumped, stored, and standardized. This creates the 'Futures Market' (Chicago Board of Trade, 1848). Agriculture is becoming a financial asset class.",
          "key_manifestations": [
            "Joseph Dart's Grain Elevator",
            "Founding of Chicago Board of Trade",
            "McCormick moves factory to Chicago",
            "Guano mania peaks"
          ]
        },
        "1854": {
          "salience_share": 14.0,
          "description": "Global Integration (+1.5%). The Crimean War cuts off Russian grain, stimulating American production. The 'Reaper' wins a gold medal at the Paris Exhibition (1855), showing Europe the future of labor-free farming. Pasteur's fermentation work lays the ground for understanding soil bacteria (though not yet N-fixation).",
          "key_manifestations": [
            "McCormick Reaper at Paris Exhibition",
            "Pasteur's fermentation papers",
            "Guano Islands Act passed by US Congress",
            "Condensed Milk (Borden patent)"
          ]
        },
        "1859": {
          "salience_share": 16.0,
          "description": "Biological Evolution (+2.0%). Darwin's *Origin* explains the mechanism of breeding (Artificial Selection). Mendel is working on peas (1860s), discovering the digital nature of genetics, though ignored. The 'Steam Plow' attempts to bring heavy engines to the field, but they are too heavy (compaction).",
          "key_manifestations": [
            "Darwin's 'Origin of Species'",
            "Fowler's Steam Plow system",
            "Morrill Land Grant Act (Agricultural Colleges)",
            "Bureau of Agriculture established (US)"
          ]
        },
        "1864": {
          "salience_share": 18.0,
          "description": "The Range Wars (+2.0%). The Union victory is powered by the reaper releasing men for the army. The 'Homestead Act' (1862) accelerates the conversion of the Great Plains into farmland. The 'Long Drive' of cattle begins, soon to be enclosed by Barbed Wire. Pasteurization (1864) allows wine/milk to travel.",
          "key_manifestations": [
            "Homestead Act utilization",
            "Pasteurization invention",
            "Founding of the Grange (farmer organization)",
            "Chicago Union Stock Yards opening"
          ]
        },
        "1869": {
          "salience_share": 20.5,
          "description": "Transcontinental Flow (+2.5%). The Railroad connects the West to the East. The 'Refrigerated Car' (patent 1867) changes the protein map. Meat can be slaughtered in Chicago and eaten in New York. This centralizes the meat industry. Barbed Wire (Glidden, 1874 prep) is invented, ending the open range and allowing for genetic control of herds.",
          "key_manifestations": [
            "First Transcontinental Railroad",
            "Hammond's Refrigerated Railcar",
            "Phylloxera destroys French vineyards (grafting solution)",
            "Mendeleev's Table (Chemistry of N/P/K codified)"
          ]
        },
        "1874": {
          "salience_share": 23.0,
          "description": "The Wheat Flood (+2.5%). Cheap American/Russian wheat floods Europe, causing the 'Great Agricultural Depression' in Britain. This marks the end of European food self-sufficiency. The 'Roller Mill' (Hungary) replaces stone grinding, producing pure white flour (and removing nutrients). Barbed Wire standardizes the prairie.",
          "key_manifestations": [
            "Joseph Glidden's Barbed Wire Patent",
            "Roller Milling process adoption",
            "Export of US beef to UK",
            "Hardy's 'Far From the Madding Crowd' (pastoral nostalgia)"
          ]
        },
        "1879": {
          "salience_share": 25.5,
          "description": "Refrigeration Globalization (+2.5%). The *SS Strathleven* carries frozen meat from Australia to London (1880). The global protein arbitrage begins. New Zealand becomes Britain's farm. In the US, the 'Bonanza Farms' of the Dakotas apply factory logic to wheat: thousands of acres, absentee owners, transient labor.",
          "key_manifestations": [
            "Voyage of the SS Strathleven",
            "Bonanza Farms in North Dakota",
            "Hellriegel and Wilfarth prove Nitrogen Fixation by legumes",
            "Pasteur's Anthrax vaccine (protecting livestock)"
          ]
        },
        "1884": {
          "salience_share": 28.0,
          "description": "The Nitrogen Crisis (+2.5%). The Guano runs out. The world turns to Chilean Nitrate (Caliche). But it is finite. Scientists realize that population growth will outstrip nitrate supplies. The 'Combine Harvester' (horse-drawn) appears in California, combining reaping and threshing.",
          "key_manifestations": [
            "War of the Pacific (Nitrate War)",
            "Introduction of the Combine Harvester",
            "Hatch Act (US Experiment Stations)",
            "De Laval Cream Separator (dairy industrialization)"
          ]
        },
        "1889": {
          "salience_share": 30.5,
          "description": "The Internal Combustion Farm (+2.5%). The first gasoline tractor (Charter, 1889) is built. It promises to replace the horse (which eats 20% of the crop). The 'Babcock Test' (1890) standardizes milk fat measurement, creating a meritocracy for cows.",
          "key_manifestations": [
            "Charter's Gasoline Engine Tractor",
            "Babcock Test for butterfat",
            "Sherman Antitrust Act (targeting meatpackers)",
            "McKinley Tariff (protectionism)"
          ]
        },
        "1894": {
          "salience_share": 33.0,
          "description": "The Wheat Problem (+2.5%). Sir William Crookes delivers his famous address to the British Association (1898): 'The Wheat Problem.' He predicts global famine by the 1930s unless chemistry can 'fix' nitrogen from the air. This sets the challenge for the next century. The Boll Weevil enters the US, destroying the cotton monoculture.",
          "key_manifestations": [
            "Crookes' 'The Wheat Problem' speech",
            "Boll Weevil crossing the Rio Grande",
            "Mendel's work rediscovered (1900 prep)",
            "Spanish-American War (tinned beef scandals)"
          ]
        },
        "1899": {
          "salience_share": 35.5,
          "description": "Genetics Reborn (+2.5%). The rediscovery of Mendel (1900). Plant breeding moves from art to science (hybridization). The 'New Zealand' refrigerated trade is fully established. The 'Boxer Rebellion' in China is partly driven by drought/famine, showing the instability of the old regime.",
          "key_manifestations": [
            "Rediscovery of Mendel's Laws (De Vries/Correns)",
            "Lacey Act (regulating wildlife/invasive species)",
            "Founding of Monsanto (as chemical company)",
            "The Jungle (Sinclair research phase)"
          ]
        },
        "1904": {
          "salience_share": 38.0,
          "description": "The Nitrogen Fix (+2.5%). Fritz Haber succeeds in synthesizing ammonia from air (1909). This is the most significant event in the cluster. It detaches humanity from the soil's nitrogen limit. Simultaneously, the 'Holt' caterpillar tractor invents the 'track,' solving soil compaction.",
          "key_manifestations": [
            "Fritz Haber's Ammonia Synthesis",
            "Holt Caterpillar Tractor",
            "Upton Sinclair's 'The Jungle' (Meatpacking horrors)",
            "Pure Food and Drug Act (1906)"
          ]
        },
        "1909": {
          "salience_share": 42.0,
          "description": "Industrialization of Air (+4.0%). The Haber-Bosch process is scaled by BASF (Bosch). It is first used for explosives (WWI), but the agricultural implication is infinite fertilizer. The tractor begins to displace the horse in earnest. Hybrid Corn experiments (Shull/East) begin, the first application of heterosis.",
          "key_manifestations": [
            "BASF Oppau plant opening (Ammonia)",
            "Fordson Tractor prototype",
            "Shull's Heterosis paper (Hybrid Vigor)",
            "Mexican Revolution (Land reform driver)"
          ]
        },
        "1914": {
          "salience_share": 45.0,
          "description": "War Agriculture (+3.0%). WWI demands food. 'Food Will Win the War.' High prices encourage plowing up the Great Plains (shortgrass prairie), setting the ecological trap for the Dust Bowl. The 'Fordson' tractor (1917) becomes the Model T of the farm\u2014mass-produced and cheap.",
          "key_manifestations": [
            "Mass production of Fordson Tractor",
            "Herbert Hoover's Food Administration",
            "German Turnip Winter (Fertilizer diverted to bombs)",
            "Haber's Nobel Prize (controversial)"
          ]
        },
        "1919": {
          "salience_share": 48.0,
          "description": "The Crash and the Hybrid (+3.0%). Post-war grain prices collapse (1920). Farmers face depression a decade before the rest. However, technological progress accelerates. The first commercial Hybrid Corn is sold (1923). This seed forces the farmer to buy new seed every year (IP protection), breaking the 10,000-year cycle of seed saving.",
          "key_manifestations": [
            "Agricultural Depression of the 1920s",
            "Commercial release of Hybrid Corn",
            "Founding of the All-Union Institute of Plant Industry (Vavilov)",
            "Stalin's Collectivization (disaster)"
          ]
        },
        "1924": {
          "salience_share": 50.0,
          "description": "Collectivization Terror (+2.0%). Stalin forces collectivization in the USSR to extract grain for industrialization. The 'Holodomor' (1932 prep) is the result\u2014famine as a state weapon. In the West, the 'General Purpose' tractor (Farmall) allows for row-crop cultivation, finally retiring the mule.",
          "key_manifestations": [
            "Farmall Tractor launch",
            "Vavilov's Seed Bank expansion",
            "Clarence Birdseye's Quick Freeze patent",
            "Steinbeck's 'Grapes of Wrath' (context building)"
          ]
        },
        "1929": {
          "salience_share": 52.0,
          "description": "Ecological Collapse (-2.0%). The Dust Bowl begins. The plowing of the plains combined with drought creates a continental disaster. It proves that industrial methods cannot simply be copied to arid zones. Soil Conservation Service is founded (1935). 'Hydroponics' is invented (Gericke), decoupling plants from soil entirely.",
          "key_manifestations": [
            "The Dust Bowl begins",
            "Creation of the Soil Conservation Service",
            "Gericke's Hydroponics",
            "Smoot-Hawley Tariff (crushing export markets)"
          ]
        },
        "1934": {
          "salience_share": 55.0,
          "description": "Hybrid Dominance (+3.0%). Hybrid corn takes over the US Corn Belt (from 1% to 50% in a decade). Yields jump. DDT is discovered (Muller, 1939), promising a pest-free world. The 'Combine' becomes self-propelled. The farm is becoming a factory.",
          "key_manifestations": [
            "Widespread adoption of Hybrid Corn",
            "Discovery of DDT's insecticidal properties",
            "Rural Electrification Act (powering the barn)",
            "Steinbeck's 'The Grapes of Wrath' published"
          ]
        },
        "1939": {
          "salience_share": 60.0,
          "description": "Chemical Warfare (+5.0%). WWII accelerates chemical ag. Ammonium nitrate plants (for bombs) are converted to fertilizer plants post-war. Organophosphates (nerve gas) become pesticides. 2,4-D (biological weapon research) becomes the first selective herbicide. We declare war on weeds and bugs.",
          "key_manifestations": [
            "Development of 2,4-D herbicide",
            "Expansion of Ammonium Nitrate production",
            "Borlaug arrives in Mexico (Green Revolution start)",
            "Victory Gardens"
          ]
        },
        "1944": {
          "salience_share": 65.0,
          "description": "The Green Revolution Begins (+5.0%). Norman Borlaug in Mexico develops 'shuttle breeding' and semi-dwarf wheat. This allows the plant to take massive doses of fertilizer without falling over (lodging). This package (Seed + Fertilizer + Water) prevents the predicted famines in India/Pakistan.",
          "key_manifestations": [
            "Borlaug's high-yield wheat varieties",
            "Founding of FAO (Food and Agriculture Organization)",
            "Mass use of DDT",
            "Frozen Food boom"
          ]
        },
        "1949": {
          "salience_share": 70.0,
          "description": "Industrial Protein (+5.0%). The 'Battery Cage' for chickens and the feedlot for cattle become standard. Antibiotics (B12/Aureomycin) are added to feed (1950), discovering they promote growth. This is the 'Sub-therapeutic' use of drugs to maximize conversion efficiency.",
          "key_manifestations": [
            "Introduction of Antibiotics in livestock feed",
            "Expansion of Battery Cage system",
            "Great Leap Forward (Mao's agricultural catastrophe)",
            "Frozen Orange Juice concentrate"
          ]
        },
        "1954": {
          "salience_share": 75.0,
          "description": "Global Diffusion (+5.0%). The Green Revolution spreads to India/Pakistan. Famine is averted. The 'Box' (Containerization) allows global fruit trade. The 'Harvester' for tomatoes (1959) breeds a hard, tasteless tomato that can survive the machine. Taste is sacrificed for logistics.",
          "key_manifestations": [
            "Borlaug's Wheat to India/Pakistan",
            "Mechanical Tomato Harvester development",
            "PL-480 (Food for Peace program)",
            "Cargill's expansion (global grain trader)"
          ]
        },
        "1959": {
          "salience_share": 78.0,
          "description": "Peak Chemical (+3.0%). Rachel Carson's *Silent Spring* (1962) challenges the pesticide paradigm. Bio-accumulation is discovered. However, yields continue to skyrocket. The 'Supermarket' becomes the dominant food interface, demanding cosmetic perfection.",
          "key_manifestations": [
            "Rachel Carson's 'Silent Spring'",
            "Introduction of the plastic greenhouse (Almeria model)",
            "Formation of the Common Agricultural Policy (EU)",
            "IRRI founded (Rice research)"
          ]
        },
        "1964": {
          "salience_share": 80.0,
          "description": "The Population Bomb Defused (+2.0%). Ehrlich writes *The Population Bomb* (1968), predicting inevitable famine. Borlaug wins the Nobel (1970) for proving him wrong. IR8 'Miracle Rice' is released. Glyphosate (Roundup) is synthesized (1970), the perfect herbicide.",
          "key_manifestations": [
            "Ehrlich's 'The Population Bomb'",
            "Release of IR8 Rice",
            "Synthesis of Glyphosate (Monsanto)",
            "Borlaug's Nobel Peace Prize"
          ]
        },
        "1969": {
          "salience_share": 82.0,
          "description": "Agribusiness (+2.0%). Earl Butz (US Sec of Ag) says 'Get Big or Get Out.' The family farm collapses into the corporate farm. High Fructose Corn Syrup (HFCS) is introduced (1970s), finding a sink for the massive corn surplus. The diet of the West shifts to processed corn.",
          "key_manifestations": [
            "Introduction of High Fructose Corn Syrup",
            "Earl Butz's 'Get Big or Get Out' policy",
            "DDT Ban in US (1972)",
            "Limits to Growth report"
          ]
        },
        "1974": {
          "salience_share": 84.0,
          "description": "Genetic Engineering Dawn (+2.0%). Cohen and Boyer create the first GMO (bacteria). The potential to move genes between species is unlocked. The 'Grain Robbery' (Soviet purchases) spikes prices, leading to a boom and bust in farmland values.",
          "key_manifestations": [
            "Cohen-Boyer Recombinant DNA",
            "The Great Grain Robbery (Soviet deal)",
            "Founding of Genentech",
            "Lappe's 'Diet for a Small Planet'"
          ]
        },
        "1979": {
          "salience_share": 85.0,
          "description": "The Farm Crisis (-1.0%). High interest rates (Volcker) crush leveraged farmers. The 'Farm Aid' era. But in the lab, Monsanto is working on 'Roundup Ready' crops. China de-collectivizes (1978), leading to a massive jump in productivity.",
          "key_manifestations": [
            "US Farm Crisis",
            "China's Household Responsibility System",
            "First transgenic plant (tobacco)",
            "BSE (Mad Cow) emerging in UK"
          ]
        },
        "1984": {
          "salience_share": 88.0,
          "description": "The GMO Era Begins (+3.0%). First field tests of GMOs. The Supreme Court rules life can be patented (Chakrabarty). This unleashes capital. The 'Cold Chain' extends to developing nations. Salmon farming begins to scale.",
          "key_manifestations": [
            "Diamond v. Chakrabarty",
            "First field tests of GMOs",
            "Rise of Aquaculture",
            "Slow Food Movement founded (Reaction)"
          ]
        },
        "1989": {
          "salience_share": 90.0,
          "description": "Commercial GMOs (+2.0%). Flavr Savr tomato (1994) is the first approved food. Roundup Ready Soybeans (1996) follow. The farmer now sprays the crop *and* the weeds, killing only the weeds. Adoption is near 100% in US/Argentina. Europe rejects GMOs, creating a transatlantic divergence.",
          "key_manifestations": [
            "Commercial release of Flavr Savr tomato",
            "Roundup Ready Soybeans launch",
            "Mad Cow Crisis (Peak)",
            "WTO Agriculture Agreement"
          ]
        },
        "1994": {
          "salience_share": 92.0,
          "description": "Consolidation (+2.0%). Seed companies merge with Chemical companies (Monsanto buys everyone). 'Terminator Seeds' controversy. Precision Agriculture (GPS on tractors) begins\u2014farming by satellite.",
          "key_manifestations": [
            "Monsanto's acquisition spree",
            "GPS in tractors (Precision Ag)",
            "Dolly the Sheep (Cloning livestock)",
            "Golden Rice prototype (Vitamin A)"
          ]
        },
        "1999": {
          "salience_share": 93.0,
          "description": "Organic Backlash (-1.0%). The 'Organic' standard is codified (USDA). Whole Foods scales. The consumer begins to demand 'Non-GMO.' Pollan's *Omnivore's Dilemma* (2006) deconstructs the industrial meal. Ethanol mandates (2005) link corn prices to oil prices.",
          "key_manifestations": [
            "USDA National Organic Program",
            "US Renewable Fuel Standard (Ethanol)",
            "Svalbard Global Seed Vault opening (2008)",
            "Pollan's 'The Omnivore's Dilemma'"
          ]
        },
        "2004": {
          "salience_share": 94.0,
          "description": "Genome Editing (+1.0%). Sequencing of the Rice Genome. Marker Assisted Selection speeds up breeding without GMO regulation. 'Vertical Farming' concepts appear as LEDs get cheap.",
          "key_manifestations": [
            "Sequencing of Rice Genome",
            "Despommier's 'The Vertical Farm'",
            "Colony Collapse Disorder (Bees)",
            "2007-2008 World Food Price Crisis"
          ]
        },
        "2009": {
          "salience_share": 95.0,
          "description": "CRISPR Ag (+1.0%). CRISPR (2012) allows for gene *editing* (changing a letter) rather than modification (adding a gene). This bypasses GMO regulation in some places. 'Impossible Foods' (2011) and 'Beyond Meat' attempt to replace the animal with plants using heme.",
          "key_manifestations": [
            "Founding of Impossible Foods",
            "CRISPR-Cas9 paper",
            "Climate Change impact on yields (stagnation)",
            "Land Grabs in Africa"
          ]
        },
        "2014": {
          "salience_share": 96.0,
          "description": "Cellular Agriculture (+1.0%). The first Lab-Grown Burger ($300k). The promise of decoupling meat from the animal. Precision Fermentation (milk without cows). Bayer buys Monsanto (2016), the final consolidation. Robotics (weed zappers) begin to replace herbicides.",
          "key_manifestations": [
            "Mark Post's Lab Grown Burger demo",
            "Bayer-Monsanto Merger",
            "John Deere 'See & Spray' robotics",
            "China's ChemChina buys Syngenta"
          ]
        },
        "2019": {
          "salience_share": 95.0,
          "description": "Supply Chain Fragility (-1.0%). COVID-19 breaks the meatpacking lines. Fertilizer prices spike due to Ukraine War (2022). The realization that the system is optimized for efficiency, not resilience. Regenerative Agriculture gains traction as a soil-health alternative.",
          "key_manifestations": [
            "COVID-19 Meatpacking shutdowns",
            "Ukraine War Fertilizer Crisis",
            "Sri Lanka Organic Farming collapse",
            "Dutch Nitrogen Protests"
          ]
        },
        "2024": {
          "salience_share": 97.0,
          "description": "AI Agronomy (+2.0%). Tractors are autonomous. Satellites monitor crop health daily. AI predicts weather. The challenge shifts to 'Climate Adaptation'\u2014breeding heat/drought resistant crops. Lab-grown chicken is approved for sale (US).",
          "key_manifestations": [
            "FDA approval of Upside Foods (lab chicken)",
            "John Deere fully autonomous tractor launch",
            "AlphaFold applied to crop enzymes",
            "Global warming exceeding 1.5C (yield threat)"
          ]
        }
      }
    },
    "9_telecommunicative_compression": {
      "name": "Telecommunicative Compression",
      "description": "This eigencluster represents the annihilation of space/time latency in human communication. It tracks the shift from the speed of the horse (physical transport) to the speed of light (electromagnetic transmission). It moves from optical telegraphs to wires, to wireless, to satellites, to fiber optics. It is the nervous system of the global organism.",
      "trajectory": {
        "1789": {
          "salience_share": 1.0,
          "description": "Variance is low. Communication speed is limited by the horse (10mph) or the ship. News of the French Revolution takes days to reach London, weeks to reach New York. The Chappe Semaphore (1792) is the breakthrough\u2014an 'Optical Telegraph' network of towers. It transmits a symbol across France in minutes, but only in daylight and good weather.",
          "key_manifestations": [
            "Claude Chappe's Optical Telegraph",
            "Arthur Young's travels (slow news)",
            "Post Roads Act (US)",
            "XYZ Affair (diplomatic latency)"
          ]
        },
        "1794": {
          "salience_share": 1.2,
          "description": "State Monopoly (+0.2%). The Semaphore is exclusively for the military/state. It allows Paris to command the frontiers. In the UK, the Admiralty builds a similar shutter system. The 'Mail Coach' system is optimized (Macadam roads), pushing physical transport to its biological limit.",
          "key_manifestations": [
            "Expansion of Chappe Network",
            "Admiralty Shutter Telegraph",
            "Improvement of Royal Mail coaches",
            "Semaphore line Paris-Lille"
          ]
        },
        "1799": {
          "salience_share": 1.5,
          "description": "Voltaic Potential (+0.3%). Volta's battery (1800) provides the continuous current needed for future wire telegraphy. S\u00f6mmering (1809) builds an electrochemical telegraph, using bubbles to signal letters. It is slow and unwieldy (35 wires), but proves the concept of electrical signaling.",
          "key_manifestations": [
            "Volta's Pile",
            "S\u00f6mmering's Bubble Telegraph",
            "Gaus and Weber's early thoughts",
            "Battle of Trafalgar (news took weeks)"
          ]
        },
        "1804": {
          "salience_share": 1.5,
          "description": "Stasis (0.0%). The Napoleonic Wars rely on the Semaphore. The 'Rocket' (Congreve) is a weapon, not a messenger. The focus is on physical logistics. The US Postal Service expands, subsidizing newspapers to bind the nation.",
          "key_manifestations": [
            "US Postal Service expansion",
            "Congreve Rockets",
            "Trafalgar dispatch speed (Lapenotiere)",
            "Jacquard Loom (punched card info)"
          ]
        },
        "1809": {
          "salience_share": 1.7,
          "description": "Electromagnetic Clues (+0.2%). Oersted is searching. The Optical Telegraph reaches its peak density. It creates a 'Telegraph Hill' in many cities. The limitations (fog, night) are acute strategic vulnerabilities.",
          "key_manifestations": [
            "Peak Chappe Network",
            "S\u00f6mmering's experiments",
            "Appert's canning (info preservation)",
            "Peninsular War comms difficulties"
          ]
        },
        "1814": {
          "salience_share": 2.0,
          "description": "Steam Press Speed (+0.3%). The *Times* steam press (Koenig) allows news to be *printed* faster, if not gathered faster. It creates the 'Mass Media' potential. Carrier pigeons become a financial tool for the Rothschilds (Waterloo legend), arbitraging the information gap.",
          "key_manifestations": [
            "Koenig Steam Press",
            "Rothschild carrier pigeon network",
            "Treaty of Ghent (battle fought after peace signed)",
            "Semaphore line to Strasbourg"
          ]
        },
        "1819": {
          "salience_share": 2.5,
          "description": "The Connection Discovery (+0.5%). Oersted (1820) connects electricity and magnetism. This is the key. Now a current can move a needle at a distance. Amp\u00e8re suggests a telegraph system. The theoretical barrier is broken.",
          "key_manifestations": [
            "Oersted's Experiment",
            "Amp\u00e8re's Telegraph proposal",
            "Schilling's experiments",
            "Galvanometer invention"
          ]
        },
        "1824": {
          "salience_share": 3.0,
          "description": "The Electromagnet (+0.5%). Sturgeon's electromagnet allows for a strong signal receiver. Semaphore lines begin to be seen as obsolete tech. The Erie Canal facilitates physical mail speed.",
          "key_manifestations": [
            "Sturgeon's Electromagnet",
            "Ohm's Law formulation",
            "Semaphore line London-Portsmouth",
            "Braille system (tactile encoding)"
          ]
        },
        "1829": {
          "salience_share": 3.5,
          "description": "Prototype Phase (+0.5%). Henry builds a proto-telegraph in Albany. Gauss and Weber build a working 1km line in G\u00f6ttingen (1833). They use a binary code (deflections right/left). It is scientific, not commercial. The 'Relay' concept is born to extend range.",
          "key_manifestations": [
            "Gauss-Weber Telegraph",
            "Henry's bell-ringing experiment",
            "Wheatstone's acoustic experiments",
            "Semaphore's last stand"
          ]
        },
        "1834": {
          "salience_share": 5.0,
          "description": "The Commercial Telegraph (+1.5%). Cooke and Wheatstone patent the 5-needle telegraph in UK (1837). Morse develops his single-wire system and code in US (1837). The race is on. The railway (Cluster 1) provides the right-of-way for the wires. 'Safety' on the rails drives adoption.",
          "key_manifestations": [
            "Cooke and Wheatstone Patent",
            "Morse's Cave Johnson demo",
            "Great Western Railway telegraph adoption",
            "Daguerreotype (visual comms)"
          ]
        },
        "1839": {
          "salience_share": 7.0,
          "description": "Network Genesis (+2.0%). Morse's 'What Hath God Wrought' (1844) is the public proof. The first news is transmitted (Whig convention). The 'Penny Post' (1840) revolutionizes physical mail, creating a high-volume paper network alongside the wire network.",
          "key_manifestations": [
            "Morse Washington-Baltimore line",
            "Penny Post (Rowland Hill)",
            "Electric Telegraph Company founded",
            "Poe's detective fiction (logic)"
          ]
        },
        "1844": {
          "salience_share": 10.0,
          "description": "The Wiring of Nations (+3.0%). Telegraph lines follow the railroads. The Associated Press (1846) is founded to share telegraph costs. News becomes a commodity. The Mexican-American War (1846) is the first reported by telegraph (partial). The 'stock ticker' logic begins.",
          "key_manifestations": [
            "Founding of Associated Press",
            "Morse Code standardization",
            "Brett's cross-channel cable attempt",
            "Reuters news agency founded"
          ]
        },
        "1849": {
          "salience_share": 12.0,
          "description": "Undersea Link (+2.0%). The English Channel is crossed (1851). London and Paris are linked. Reuter uses this to arbitrage stock markets. The 'Submarine Cable' industry is born, using Gutta-Percha (latex) as insulation. The world is shrinking.",
          "key_manifestations": [
            "Cross-Channel Cable success",
            "Reuter's 'Submarine Telegraph' service",
            "Gutta-Percha monopoly",
            "Melville's Moby Dick (isolating the ship)"
          ]
        },
        "1854": {
          "salience_share": 14.0,
          "description": "Atlantic Ambition (+2.0%). Cyrus Field plans the Atlantic Cable. The Crimean War is reported by telegraph (Russell), bringing the horror of war home instantly. This changes the relationship between the public and the military. The 'Pony Express' fills the gap to California.",
          "key_manifestations": [
            "Cyrus Field's Atlantic Telegraph Company",
            "Crimean War telegraph reports",
            "Pony Express",
            "Thoreau's Walden ('We are in great haste to construct a magnetic telegraph')"
          ]
        },
        "1859": {
          "salience_share": 16.0,
          "description": "The Failed Connection (+2.0%). The 1858 Cable works for weeks, then fails (Whitehouse fried it). But the Queen's message proves it's possible. The US is wired coast-to-coast (1861), killing the Pony Express. The Civil War uses the telegraph for tactical command (Lincoln in the telegraph office).",
          "key_manifestations": [
            "1858 Atlantic Cable failure",
            "Transcontinental Telegraph completion",
            "Lincoln's Telegraph Office",
            "Lowe's Balloon Corps (aerial observation)"
          ]
        },
        "1864": {
          "salience_share": 20.0,
          "description": "Global Real-Time (+4.0%). The 1866 Atlantic Cable succeeds (Great Eastern). The 'Global Village' is born financially. Prices converge. The ITU (1865) standardizes the protocols. Maxwell's equations (1865) predict radio waves, hinting at the wireless future.",
          "key_manifestations": [
            "1866 Atlantic Cable Success",
            "Founding of ITU",
            "Maxwell's Equations",
            "Western Union Monopoly"
          ]
        },
        "1869": {
          "salience_share": 22.0,
          "description": "The Wired Empire (+2.0%). Britain wires its Empire (India, Australia). This allows for centralized command from London. The 'Red Line' is the All-Red Route. The stock ticker (Edison) automates the flow of price data. Weather forecasting becomes possible via telegraph reports.",
          "key_manifestations": [
            "Telegraph line to India",
            "Edison's Stock Ticker",
            "National Weather Service (US) founded",
            "Verne's 20,000 Leagues"
          ]
        },
        "1874": {
          "salience_share": 26.0,
          "description": "The Voice (+4.0%). Bell invents the Telephone (1876). The telegraph was digital (coded); the telephone is analog (actual sound). It conquers the 'Last Mile' to the business and eventually the home. It is intimate. The typewriter standardizes the input.",
          "key_manifestations": [
            "Alexander Graham Bell's Patent",
            "Edison's Phonograph (recording sound)",
            "Remington Typewriter",
            "Universal Postal Union"
          ]
        },
        "1879": {
          "salience_share": 28.0,
          "description": "The Exchange (+2.0%). Telephone exchanges (switchboards) allow networks to scale. 'Hello' becomes a standard greeting. The 'favored nation' clause in treaties spreads telegraph rights. Hertz is proving Maxwell's waves.",
          "key_manifestations": [
            "First Telephone Exchanges",
            "Hertz's early work",
            "Muybridge's Zoopraxiscope (moving image)",
            "Garfield assassination (metal detector attempt)"
          ]
        },
        "1884": {
          "salience_share": 30.0,
          "description": "Wireless Waves (+2.0%). Hertz proves radio waves exist (1887). He sees no practical use. Branly invents the coherer (receiver). The technology for radio is assembling. The 'Linotype' (1886) speeds up newspaper production to match the telegraph's speed.",
          "key_manifestations": [
            "Hertz's Radio Wave demonstration",
            "Mergenthaler's Linotype",
            "Eastman's Kodak (visual comms)",
            "Nipkow Disk (TV ancestor)"
          ]
        },
        "1889": {
          "salience_share": 32.0,
          "description": "Tabulation and Hollerith (+2.0%). Information is being processed (Cluster 4). The telephone network expands. The 'Strowger Switch' (1891) invents the automatic telephone exchange (hating the operator), laying the ground for circuit switching logic.",
          "key_manifestations": [
            "Strowger Automatic Exchange",
            "Marconi begins experiments",
            "Hollerith Census",
            "Tesla's wireless power dreams"
          ]
        },
        "1894": {
          "salience_share": 35.0,
          "description": "The Wireless Spark (+3.0%). Marconi sends signals over a hill (1895). He moves to Britain for funding. Wireless Telegraphy is born. It breaks the monopoly of the cable. Ships can talk to shore. The 'Kinetoscope' (Edison) and 'Cinematograph' (Lumiere) invent cinema\u2014broadcast visual information.",
          "key_manifestations": [
            "Marconi's patent",
            "Lumiere Brothers' cinema",
            "Rontgen's X-Ray (seeing inside)",
            "Hearst's Yellow Journalism"
          ]
        },
        "1899": {
          "salience_share": 38.0,
          "description": "Trans-Oceanic Wireless (+3.0%). Marconi spans the Atlantic (1901). 'S' in Morse code. The ether is conquered. It is noisy and broad-spectrum (Spark Gap), causing interference. Fessenden transmits voice over radio (1900), the birth of AM radio.",
          "key_manifestations": [
            "Marconi's Trans-Atlantic Signal",
            "Fessenden's voice transmission",
            "Boxer Rebellion (telegraph line cut)",
            "Kodak Brownie"
          ]
        },
        "1904": {
          "salience_share": 42.0,
          "description": "The Vacuum Tube (+4.0%). Fleming invents the valve (1904). De Forest adds the grid (Triode, 1906). This allows *amplification*. Weak signals can be boosted. This makes transcontinental telephone and voice radio possible. The Titanic (1912 prep) tragedy mandates wireless on all ships (SOS).",
          "key_manifestations": [
            "Fleming Valve",
            "De Forest Audion",
            "Russo-Japanese War (Wireless use)",
            "SOS standard adopted"
          ]
        },
        "1909": {
          "salience_share": 45.0,
          "description": "Mass Broadcast (+3.0%). Sarnoff and the Titanic. The concept of 'Broadcasting' (one to many) emerges from 'Point-to-Point.' Amateur radio operators (Hams) fill the spectrum. The 'Newsreel' brings visual war to the cinema.",
          "key_manifestations": [
            "Titanic sinking (Wireless pivotal)",
            "Radio Act of 1912",
            "Neon signs (communicating commerce)",
            "Futurist Manifesto"
          ]
        },
        "1914": {
          "salience_share": 48.0,
          "description": "War of the Ether (+3.0%). WWI is the first 'Radio War.' The interception of the Zimmermann Telegram (1917) changes history, bringing the US into the war. Cryptography becomes the shadow of communication. Propaganda becomes industrialized; the 'poster' and the 'cinema' are used to synchronize the national mind. The vacuum tube allows for portable field radios.",
          "key_manifestations": [
            "Zimmermann Telegram interception",
            "Establishment of the Creel Committee (US Propaganda)",
            "Battle of Jutland (Radio confusion)",
            "Griffith's 'Birth of a Nation' (visual power)"
          ]
        },
        "1919": {
          "salience_share": 52.0,
          "description": "The Broadcast Era (+4.0%). The catalyst is the founding of RCA (1919) and the first commercial broadcast (KDKA, 1920). Radio moves from a point-to-point utility to a 'mass medium.' Families gather around the hearth of the wireless. It homogenizes language and culture instantly. The 'Telephone' network expands, becoming the central nervous system of business.",
          "key_manifestations": [
            "Founding of RCA",
            "KDKA Pittsburgh first broadcast",
            "Establishment of the BBC",
            "Introduction of the Dial Telephone (automation)"
          ]
        },
        "1924": {
          "salience_share": 55.0,
          "description": "Visualizing the Signal (+3.0%). Baird demonstrates mechanical television (1925). It is grainy but proves images can fly. The 'Talkies' (The Jazz Singer, 1927) synchronize sound and image, killing the silent era and creating a new global language of cinema. AT&T demonstrates long-distance TV transmission. Shortwave radio connects the empire.",
          "key_manifestations": [
            "Baird's Television demonstration",
            "The Jazz Singer (Sound in film)",
            "Federal Radio Commission established",
            "Heaviside layer theory (ionosphere propagation)"
          ]
        },
        "1929": {
          "salience_share": 58.0,
          "description": "Golden Age of Radio (+3.0%). During the Depression, the radio is the free entertainment utility. FDR's 'Fireside Chats' (1933 prep) prove the political power of the voice directly in the living room, bypassing the press. The teletype replaces Morse code for business, speeding up the stock market crash data. 'FM' radio (Armstrong) is invented, eliminating static.",
          "key_manifestations": [
            "FDR's Fireside Chats",
            "Armstrong invents FM Radio",
            "Stock Market Crash (ticker tape lag)",
            "Orson Welles' 'War of the Worlds' (media panic)"
          ]
        },
        "1934": {
          "salience_share": 62.0,
          "description": "Sensing the Invisible (+4.0%). Radar (Watson-Watt) is developed. It is 'tele-detection.' We can see aircraft miles away. Television begins regular high-definition broadcasts (BBC, 1936). The Communications Act of 1934 establishes the FCC, regulating the spectrum as a public resource. Turing's paper (1936) conceptualizes information as a computable sequence.",
          "key_manifestations": [
            "Watson-Watt Radar demonstration",
            "Communications Act of 1934 (FCC)",
            "BBC Television Service launch",
            "Penguin Books (mass market paperback info)"
          ]
        },
        "1939": {
          "salience_share": 66.0,
          "description": "Total War Comms (+4.0%). WWII is coordinated by radio. The 'Enigma' machine encrypts the axis nervous system; Turing breaks it. This is the duel of information theory vs. cryptography. Television is debuted at the NY World's Fair ('The World of Tomorrow') but paused for war. The 'Walkie-Talkie' (Motorola) puts comms in the soldier's hand.",
          "key_manifestations": [
            "Breaking of Enigma (Ultra)",
            "NY World's Fair TV demo",
            "Motorola SCR-300 (Walkie Talkie)",
            "Shannon's 'communication in the presence of noise' memo"
          ]
        },
        "1944": {
          "salience_share": 70.0,
          "description": "Information Theory (+4.0%). Claude Shannon publishes 'A Mathematical Theory of Communication' (1948 prep). He defines the 'bit.' He separates information from meaning. This is the physics of the digital age. The Transistor (1947) is invented, promising to shrink the vacuum tube equipment. The 'LP' record standardizes high-fidelity audio.",
          "key_manifestations": [
            "Shannon's Information Theory",
            "Invention of the Transistor",
            "Launch of the LP record",
            "Orwell's '1984' (Telescreen surveillance)"
          ]
        },
        "1949": {
          "salience_share": 74.0,
          "description": "The Television Takeover (+4.0%). TV ownership explodes. It replaces the cinema and the radio as the cultural center. The 'Nielsen Rating' system quantifies attention. The 'SAGE' system (1950s prep) links radar and computers via telephone lines, the proto-internet for air defense. The visual bandwidth of society increases by orders of magnitude.",
          "key_manifestations": [
            "I Love Lucy (TV production standard)",
            "NTSC Color Standard adoption",
            "Univac predicting election on TV",
            "Coast-to-coast microwave relay network"
          ]
        },
        "1954": {
          "salience_share": 78.0,
          "description": "Portable Connectivity (+4.0%). The Regency TR-1 (1954) is the first transistor radio. It detaches information from the wall socket. Rock and Roll spreads via this portable device. The Transatlantic Telephone Cable (TAT-1, 1956) opens, carrying 36 simultaneous calls. The globe is wired for voice.",
          "key_manifestations": [
            "Regency TR-1 Transistor Radio",
            "TAT-1 Cable completion",
            "Elvis Presley on Ed Sullivan (national sync)",
            "Bell Labs Solar Cell (powering future satellites)"
          ]
        },
        "1959": {
          "salience_share": 82.0,
          "description": "The Satellite Age (+4.0%). Sputnik (1957) beeps from orbit. Telstar (1962 prep) relays live TV across the ocean. The 'Integrated Circuit' (1959) allows communication gear to shrink. The laser (1960) is invented, promising infinite bandwidth on light beams (fiber optics future).",
          "key_manifestations": [
            "Echo 1 (passive comms satellite)",
            "Invention of the Laser",
            "Nixon-Kennedy Debates (TV image dominance)",
            "Xerox 914 (replicating information)"
          ]
        },
        "1964": {
          "salience_share": 85.0,
          "description": "Geostationary Sync (+3.0%). Syncom 3 (1964) is the first geostationary satellite. It allows the Tokyo Olympics to be broadcast live to the US. The 'Global Village' (McLuhan) is technically realized. The 'Fax Machine' (Magnavox) begins to digitize document transmission over phone lines. Moore's Law begins to drive the switching speed.",
          "key_manifestations": [
            "Syncom 3 Launch",
            "Marshall McLuhan's 'Understanding Media'",
            "Tokyo Olympics Broadcast",
            "ASCII standard (text encoding)"
          ]
        },
        "1969": {
          "salience_share": 88.0,
          "description": "Packet Switching (+3.0%). ARPANET (1969) connects four universities. It breaks the message into packets, routing them dynamically. This is the DNA of the Internet. The Moon Landing (1969) is the most watched event in history, a singular moment of species-wide compression. Fiber Optic glass is perfected by Corning (1970), allowing light to travel miles without loss.",
          "key_manifestations": [
            "ARPANET first login",
            "Moon Landing Broadcast",
            "Corning Fiber Optic breakthrough",
            "Unix time start (Epoch)"
          ]
        },
        "1974": {
          "salience_share": 90.0,
          "description": "Local Area Networks (+2.0%). Ethernet (Metcalfe, 1973) is invented at Xerox PARC. Computers can talk to each other in the office. The 'Cell Phone' is demonstrated by Martin Cooper (Motorola, 1973), but infrastructure is lacking. HBO launches (1975) via satellite to cable, breaking the broadcast monopoly.",
          "key_manifestations": [
            "Ethernet invention",
            "First Cell Phone Call (Motorola)",
            "Minitel experiments (France)",
            "Altair 8800 (Personal Computing)"
          ]
        },
        "1979": {
          "salience_share": 92.0,
          "description": "The Walkman Moment (+2.0%). Sony Walkman (1979). The user creates their own soundscape. It isolates the individual within the crowd. 1G Cellular networks launch in Tokyo (1979). The modem (Hayes) allows PCs to dial into Bulletin Board Systems (BBS). Cyberspace is under construction.",
          "key_manifestations": [
            "Sony Walkman launch",
            "Hayes Smartmodem",
            "Usenet established",
            "CNN launch (24-hour news cycle)"
          ]
        },
        "1984": {
          "salience_share": 93.0,
          "description": "The Bell Breakup (+1.0%). AT&T is broken up (1984). The monopoly ends; innovation in devices and services explodes. The Mac introduces the GUI. 'Neuromancer' visualizes the Matrix. The CD (Compact Disc) digitizes music consumerism.",
          "key_manifestations": [
            "Breakup of the Bell System",
            "William Gibson's 'Neuromancer'",
            "Live Aid (Global satellite concert)",
            "Symbolics.com (first .com domain)"
          ]
        },
        "1989": {
          "salience_share": 95.0,
          "description": "The Web (+2.0%). Tim Berners-Lee invents the WWW. It gives the internet a face. GPS constellation is nearing operational status, providing precise location data to the military (and later civilians). The Berlin Wall falls, broadcast live, accelerating the political compression of the East.",
          "key_manifestations": [
            "Tim Berners-Lee's WWW proposal",
            "Tiananmen Square (Fax machine news)",
            "Fall of Berlin Wall broadcast",
            "Game Boy (portable interactive)"
          ]
        },
        "1994": {
          "salience_share": 97.0,
          "description": "The Browser (+2.0%). Netscape Navigator (1994). The internet is open to the public. Amazon and eBay launch. The 'Information Superhighway' is the political buzzword. 2G Digital Cellular (GSM) allows for SMS (Texting), a new asynchronous mode of chatter.",
          "key_manifestations": [
            "Netscape Navigator launch",
            "First SMS sent",
            "DirecTV launch (Digital Satellite)",
            "Wired Magazine founded"
          ]
        },
        "1999": {
          "salience_share": 96.0,
          "description": "P2P and Mobility (+1.0%). Napster (1999) allows peer-to-peer file sharing. Bandwidth is now a threat to copyright. BlackBerry (1999) brings email to the belt clip. The 'always on' executive. Bluetooth (1999) cuts the last cord. The Matrix (film) questions the reality of the signal.",
          "key_manifestations": [
            "Napster launch",
            "BlackBerry 850",
            "Bluetooth 1.0",
            "The Matrix"
          ]
        },
        "2004": {
          "salience_share": 98.0,
          "description": "Social Compression (+2.0%). Facebook (2004). The social graph is digitized. Skype (2003) kills long-distance charges (VoIP). YouTube (2005) democratizes broadcast. Google Maps (2005) digitizes the physical territory. The world is mapped and indexed.",
          "key_manifestations": [
            "Facebook founding",
            "Skype launch",
            "Google Maps launch",
            "World of Warcraft (virtual community)"
          ]
        },
        "2009": {
          "salience_share": 99.0,
          "description": "The Smartphone Singularity (+1.0%). The iPhone (2007) and App Store (2008) put the internet in the pocket. 3G/4G networks allow for mobile video. WhatsApp (2009) replaces SMS. We are now cyborgs, tethered to the cloud. Bitcoin (2009) transmits value without a bank.",
          "key_manifestations": [
            "iPhone App Store",
            "WhatsApp launch",
            "Bitcoin Genesis Block",
            "Avatar (3D visual compression)"
          ]
        },
        "2014": {
          "salience_share": 99.5,
          "description": "Encryption and Surveillance (+0.5%). Snowden (2013) reveals the Panopticon. The network sees everything. Signal (App) brings end-to-end encryption to the masses. Twitch (2014 bought by Amazon) creates 'Live Streaming' as a lifestyle. AI begins to curate the feed (TikTok algorithm precursor).",
          "key_manifestations": [
            "Snowden Leaks",
            "Signal App popularity",
            "Twitch acquisition",
            "Her (film - intimacy with OS)"
          ]
        },
        "2019": {
          "salience_share": 99.8,
          "description": "Remote Existence (+0.3%). COVID-19 forces humanity onto Zoom. Physical presence is replaced by telepresence. Starlink (2019 launch) begins to build a LEO constellation to kill latency globally. 5G rolls out, promising the 'Internet of Things.' The metaverse is hyped but fails; the video call succeeds.",
          "key_manifestations": [
            "Zoom Boom",
            "Starlink first launch",
            "TikTok global dominance",
            "5G rollout"
          ]
        },
        "2024": {
          "salience_share": 100.0,
          "description": "Synthetic Synthesis (+0.2%). AI (GPT-4, Midjourney) generates the content filling the pipes. The cost of generating text/image/video drops to zero. 'Dead Internet Theory' becomes a plausible anxiety. Neuralink (human trials) hints at the direct brain-machine interface, the final removal of the thumb-typing bottleneck.",
          "key_manifestations": [
            "Apple Vision Pro (Spatial Computing)",
            "Neuralink first human implant",
            "Starlink 'Direct to Cell' testing",
            "AI generated deepfakes in elections"
          ]
        }
      }
    },
    "10_material_science_plasticity": {
      "name": "Material Science Plasticity",
      "description": "This eigencluster represents the transition from 'found materials' (wood, stone, natural fibers) to 'engineered materials' (alloys, synthetics, silicon). It tracks the mastery of the molecular structure of matter. From the early chemical isolation of elements to the Bessemer process, the petrochemical explosion of plastics, and the semiconductor purity of the silicon age. It is the ability to dictate the properties of the physical world.",
      "trajectory": {
        "1789": {
          "salience_share": 1.5,
          "description": "Variance is low. The world is built of wood, stone, brick, and wrought iron. Materials are defined by geography, not chemistry. The 'Cotton Gin' is about to revolutionize fiber, but the fiber itself is natural. Lavoisier's 'Elements of Chemistry' (1789) provides the map for future synthesis, defining what an element is.",
          "key_manifestations": [
            "Lavoisier's 'Trait\u00e9 \u00c9l\u00e9mentaire de Chimie'",
            "Iron Bridge (Cast Iron usage)",
            "Wedgwood's ceramics (industrial clay)",
            "Generic reliance on timber"
          ]
        },
        "1794": {
          "salience_share": 1.8,
          "description": "Fiber Industrialization (+0.3%). The Cotton Gin (1794) makes cotton the dominant material for human clothing, replacing wool and linen. This is a 'natural' material, but processed industrially. Leblanc Process (1791) for Soda Ash creates the first industrial chemical feedstock for glass and soap.",
          "key_manifestations": [
            "Eli Whitney's Cotton Gin",
            "Leblanc Process (Soda Ash)",
            "Monge's 'Descriptive Geometry' (designing matter)",
            "Musket standardization (interchangeable wood/metal)"
          ]
        },
        "1799": {
          "salience_share": 2.0,
          "description": "Rubber Curiosity (+0.2%). Rubber is known but useless (it melts in heat, cracks in cold). It is a 'gum.' Volta's Pile (1800) opens the door to electrochemical isolation of new metals. The 'Metric System' standardizes the measurement of these materials.",
          "key_manifestations": [
            "Volta's Pile",
            "Humboldt's exploration of Rubber trees",
            "Tennant's Bleaching Powder (chlorine)",
            "Jacquard Loom (manipulating thread)"
          ]
        },
        "1804": {
          "salience_share": 2.2,
          "description": "New Metals (+0.2%). Humphry Davy isolates Sodium and Potassium (1807) using electricity. These are metals that explode in water\u2014matter behaving against intuition. Morphine is isolated (1804), the first alkaloid drug, proving plants can be chemically deconstructed.",
          "key_manifestations": [
            "Davy's isolation of Sodium/Potassium",
            "Sert\u00fcrner's isolation of Morphine",
            "Trevithick's High Pressure boiler (Iron limits)",
            "Dalton's Atomic Theory"
          ]
        },
        "1809": {
          "salience_share": 2.5,
          "description": "Iron Improvement (+0.3%). The Napoleonic Wars demand better cannon. The study of metallurgy advances. Food preservation (Appert, 1810) in glass (and later tin) changes the material interface of eating. The 'Tin Can' (1810 patent) is invented.",
          "key_manifestations": [
            "Appert's Glass preservation",
            "Durand's Tin Can patent",
            "Krupp's early steel experiments",
            "Avogadro's hypothesis"
          ]
        },
        "1814": {
          "salience_share": 2.8,
          "description": "Gas Light Materials (+0.3%). The piping of coal gas requires iron pipes and valves. This drives the casting industry. The 'Safety Lamp' (Davy) uses wire gauze to manage heat and explosion, a precise application of material properties.",
          "key_manifestations": [
            "Davy Lamp (Wire gauze)",
            "Gas lighting infrastructure",
            "Fraunhofer's optical glass",
            "Koenig's iron printing press"
          ]
        },
        "1819": {
          "salience_share": 3.2,
          "description": "Road Surface (+0.4%). Macadam (1820) engineers the road surface using crushed stone of specific gauge. It is 'pavement'\u2014an engineered material surface. Electromagnetism (1820) creates a demand for copper wire and silk insulation.",
          "key_manifestations": [
            "Macadam road surfacing",
            "Oersted's experiment (Copper/Magnetism)",
            "Faraday's alloy steels (early research)",
            "Discovery of Quinine"
          ]
        },
        "1824": {
          "salience_share": 3.8,
          "description": "Concrete Reborn (+0.6%). Joseph Aspdin patents 'Portland Cement' (1824). This is the rediscovery of Roman durability. It allows for liquid stone that hardens underwater. This is the foundation of modern infrastructure. W\u00f6hler synthesizes Urea (1828), proving organic chemicals can be made from inorganic ones.",
          "key_manifestations": [
            "Joseph Aspdin's Portland Cement",
            "W\u00f6hler's Synthesis of Urea",
            "Sturgeon's Electromagnet (Soft Iron)",
            "Niepce's Bitumen photography"
          ]
        },
        "1829": {
          "salience_share": 4.5,
          "description": "Hot Blast Iron (+0.7%). Neilson's Hot Blast (1828) revolutionizes iron smelting. It allows the use of lower grade coal (anthracite) and produces cheaper iron. Iron becomes a structural material for buildings/rails, not just machines. The 'Rail' itself becomes the primary consumer of iron.",
          "key_manifestations": [
            "Neilson's Hot Blast",
            "Stephenson's Rocket (Iron boiler)",
            "Gutta-percha noticed (insulator)",
            "Lyell's Geology (Material history)"
          ]
        },
        "1834": {
          "salience_share": 5.0,
          "description": "The Insulator (+0.5%). Gutta-percha is introduced to the West. It is a natural thermoplastic latex. It is the *only* material that can insulate undersea cables. Without this specific tree sap, the telegraph network stops at the shore. McCormick's reaper uses steel blades.",
          "key_manifestations": [
            "Introduction of Gutta-percha",
            "McCormick Reaper",
            "Runge discovers Aniline (dye precursor)",
            "Faraday's laws of electrolysis"
          ]
        },
        "1839": {
          "salience_share": 6.5,
          "description": "Vulcanization (+1.5%). Charles Goodyear (1839) accidentally drops rubber and sulfur on a stove. He invents Vulcanized Rubber. It is durable, elastic, and temperature stable. This is the birth of the rubber industry (tires, seals, belts). Photography (Daguerreotype) uses silver halides\u2014light sensitive materials.",
          "key_manifestations": [
            "Goodyear's Vulcanization",
            "Daguerreotype (Silver Halide)",
            "Schonbein discovers Ozone/Guncotton",
            "Steam Hammer (working massive iron)"
          ]
        },
        "1844": {
          "salience_share": 7.5,
          "description": "Synthetics Dawn (+1.0%). Sch\u00f6nbein discovers Guncotton (Nitrocellulose). It is an explosive, but also the base for the first plastic. Mercerization of cotton (1844) makes fiber stronger and shinier. The telegraph network consumes copper and iron wire.",
          "key_manifestations": [
            "Sch\u00f6nbein's Guncotton",
            "Mercerization of Cotton",
            "Morse Telegraph (Copper demand)",
            "Goodyear's Rubber patents"
          ]
        },
        "1849": {
          "salience_share": 8.5,
          "description": "Concrete and Steel Experiments (+1.0%). Monier experiments with reinforced concrete (flower pots). The Crystal Palace (1851) will use cast plate glass on a massive scale. The demand for a metal stronger than wrought iron but cheaper than crucible steel is growing.",
          "key_manifestations": [
            "Monier's Reinforced Concrete",
            "Paxton's Crystal Palace design (Glass/Iron)",
            "Collodion (liquid bandage/film)",
            "Bunsen Burner (lab heat)"
          ]
        },
        "1854": {
          "salience_share": 11.0,
          "description": "The Steel Age (+2.5%). Henry Bessemer patents the Bessemer Process (1856). Blowing air through molten iron burns off carbon. Steel becomes cheap. This is a discontinuity. Rails last 10x longer. Ships can be lighter. Perkin discovers Mauveine (1856), the first synthetic dye, accidentally while trying to make quinine. The chemical industry is born.",
          "key_manifestations": [
            "Bessemer Process Patent",
            "Perkin's Mauveine (Synthetic Dye)",
            "Aluminum isolated (still precious)",
            "Kerosene distilled (hydrocarbon feedstock)"
          ]
        },
        "1859": {
          "salience_share": 12.5,
          "description": "Oil and Solvay (+1.5%). The Drake Well (1859) provides the petroleum that will eventually become plastics. Solvay develops the Ammonia-Soda process (1861), scaling up alkali production for glass/soap. The 'Open Hearth' process (Siemens-Martin) competes with Bessemer, allowing for better quality control of steel.",
          "key_manifestations": [
            "Drake Well (Petroleum)",
            "Solvay Process",
            "Siemens-Martin Open Hearth",
            "Plant\u00e9 Lead-Acid Battery (Lead/Acid)"
          ]
        },
        "1864": {
          "salience_share": 14.0,
          "description": "The First Plastic (+1.5%). Alexander Parkes demonstrates 'Parkesine' (Celluloid precursor) at the 1862 exhibition. It is moldable. Nobel invents Dynamite (1867), stabilizing nitroglycerin with diatomaceous earth. Material science tames the explosion. The Transatlantic Cable demands purity in copper.",
          "key_manifestations": [
            "Parkesine (early plastic)",
            "Nobel's Dynamite",
            "Pasteur's Germ Theory (Material purity)",
            "Lister's Carbolic Acid (Chemical sterilization)"
          ]
        },
        "1869": {
          "salience_share": 16.0,
          "description": "Celluloid (+2.0%). John Wesley Hyatt invents Celluloid (1869) to replace ivory in billiard balls. It is the first commercially successful thermoplastic. It saves the elephant but is flammable. Mendeleev's Table (1869) predicts the properties of missing elements (Gallium, Germanium).",
          "key_manifestations": [
            "Hyatt's Celluloid",
            "Mendeleev's Periodic Table",
            "Transcontinental Rail (Steel rails)",
            "Brooklyn Bridge construction start (Steel wire)"
          ]
        },
        "1874": {
          "salience_share": 18.0,
          "description": "Steel Architecture (+2.0%). Steel enables the Eads Bridge and eventually the skyscraper. The 'Gilchrist-Thomas' process allows Bessemer converters to use phosphorous-rich ore, doubling the available iron supply. Concrete is gaining traction.",
          "key_manifestations": [
            "Gilchrist-Thomas Process",
            "Eads Bridge (Steel)",
            "Hardy's 'Far from the Madding Crowd'",
            "Crookes Tube (Vacuum materials)"
          ]
        },
        "1879": {
          "salience_share": 20.0,
          "description": "The Filament Quest (+2.0%). Edison tests thousands of materials for the light bulb filament (carbonized bamboo wins). This is 'Edisonian' materials science\u2014brute force trial and error. The 'Saccharin' (1879) is discovered, the first artificial sweetener. Material science enters the diet.",
          "key_manifestations": [
            "Edison's Bamboo Filament",
            "Discovery of Saccharin",
            "Siemens Electric Train",
            "Hall-H\u00e9roult Process (Aluminum) imminent"
          ]
        },
        "1884": {
          "salience_share": 23.0,
          "description": "Artificial Silk (+3.0%). Chardonnet displays 'Rayon' (artificial silk) at the Paris Exhibition (1889 prep). It is nitrocellulose based. Man can now spin fiber like a silkworm. The Hall-H\u00e9roult process (1886) turns Aluminum from a precious metal into an industrial one using electricity.",
          "key_manifestations": [
            "Hall-H\u00e9roult Aluminum Process",
            "Chardonnet's Artificial Silk",
            "Smokeless Powder (Cordite)",
            "Maxim Gun (Steel mechanics)"
          ]
        },
        "1889": {
          "salience_share": 25.0,
          "description": "The Pneumatic Tire (+2.0%). Dunlop invents the pneumatic tire (1888). Rubber becomes the shoe of the wheel. The Eiffel Tower (1889) displays Puddled Iron (not steel) at its limit. Eastman's celluloid film base (1889) enables the movies.",
          "key_manifestations": [
            "Dunlop Pneumatic Tire",
            "Eastman's Celluloid Film",
            "Eiffel Tower",
            "Cordite adopted by British Army"
          ]
        },
        "1894": {
          "salience_share": 27.0,
          "description": "Viscose and Cinema (+2.0%). Cross and Bevan invent Viscose Rayon. It is safer than Chardonnet silk. It becomes the dominant artificial fiber. The cinema (Lumiere) relies on flexible, transparent plastic film. Radioactivity (Becquerel) reveals that matter has internal energy.",
          "key_manifestations": [
            "Viscose Rayon patent",
            "Roentgen's X-Rays",
            "Lumiere Cinema",
            "Argon discovered (Inert gas)"
          ]
        },
        "1899": {
          "salience_share": 30.0,
          "description": "Bakelite (+3.0%). Leo Baekeland invents Bakelite (1907 prep, research now). It is the first fully synthetic plastic (no natural molecule base). It is a thermoset\u2014it doesn't melt. It is the material of the electrical age (insulators, radios). The electron is discovered, explaining chemical bonding.",
          "key_manifestations": [
            "Baekeland's Velox paper (photographic)",
            "Discovery of Polonium/Radium (Curie)",
            "Planck's Quantum",
            "Zeppelin (Aluminum frame)"
          ]
        },
        "1904": {
          "salience_share": 33.0,
          "description": "Alloys and Ammonia (+3.0%). Stainless Steel is being researched (Brearley). Duralumin (1906) allows for light, strong airframes. Haber is working on Nitrogen fixation. The material limits of the natural world are breaking.",
          "key_manifestations": [
            "Duralumin discovery",
            "Fleming Valve (Glass/Metal seal)",
            "Ford Model T (Vanadium Steel)",
            "Bakelite patent (1907)"
          ]
        },
        "1909": {
          "salience_share": 36.0,
          "description": "Synthetic Rubber Quest (+3.0%). With cars booming, rubber is scarce. Chemists seek a synthetic alternative. Haber-Bosch (1909) proves we can synthesize nutrients. Bakelite enters production. Neon lights use noble gases.",
          "key_manifestations": [
            "Haber-Bosch Process",
            "Bakelite commercial production",
            "Neon Lighting",
            "Cellophane invented"
          ]
        },
        "1914": {
          "salience_share": 40.0,
          "description": "War Materials (+4.0%). WWI drives material science. 'Dope' (lacquer) tightens fabric aircraft wings. Poison Gas (Chlorine/Mustard) is material weaponized. Synthetic Rubber (Methyl rubber) is made in Germany due to blockade. Pyrex glass is invented.",
          "key_manifestations": [
            "Chemical Warfare",
            "Synthetic Rubber (German ersatz)",
            "Pyrex Glass",
            "Stainless Steel commercialized"
          ]
        },
        "1919": {
          "salience_share": 43.0,
          "description": "Polymer Science (+3.0%). Staudinger proposes the 'Macromolecule' theory (1920). He argues plastics are long chains, not colloids. This is the theoretical basis for modern plastics. PVC is plasticized (1926 prep). Radio boom drives Bakelite demand.",
          "key_manifestations": [
            "Staudinger's Macromolecule paper",
            "RCA Radio (Bakelite casing)",
            "Tetraethyllead (Gasoline additive)",
            "Bauhaus (Steel furniture)"
          ]
        },
        "1924": {
          "salience_share": 46.0,
          "description": "Cellophane and Vinyl (+3.0%). DuPont buys Cellophane rights, makes it moisture-proof. It revolutionizes packaging. PVC (Vinyl) is developed for records and pipes. 'Talkies' use sound-on-film materials.",
          "key_manifestations": [
            "Moisture-proof Cellophane",
            "PVC commercialization",
            "Scotch Tape (Cellophane + adhesive)",
            "Geiger Counter (detecting radiation)"
          ]
        },
        "1929": {
          "salience_share": 49.0,
          "description": "Polystyrene and Neoprene (+3.0%). Carothers at DuPont invents Neoprene (synthetic rubber). Polystyrene is developed by IG Farben. The chemical industry is now designing molecules to spec. 'Plexiglas' (Acrylic) is researched.",
          "key_manifestations": [
            "Carothers invents Neoprene",
            "Polystyrene commercialization",
            "Frozen Food (packaging demand)",
            "Empire State Building (Steel/Aluminum)"
          ]
        },
        "1934": {
          "salience_share": 55.0,
          "description": "Nylon: The Miracle Fiber (+6.0%). Wallace Carothers invents Nylon (1935). It is 'strong as steel, fine as spider web.' It replaces silk stockings and later parachutes. It creates the 'Synthetics' consumer craze. Plexiglas is commercialized. The concept of 'better living through chemistry' takes hold.",
          "key_manifestations": [
            "Invention of Nylon",
            "Plexiglas/Lucite commercialization",
            "Kodachrome (Color film materials)",
            "Sulfa Drugs (Synthetic antibiotics)"
          ]
        },
        "1939": {
          "salience_share": 60.0,
          "description": "War Plastics (+5.0%). Polyethylene (1933 discovered, 1939 secret) insulates Radar cables. Without it, the Battle of Britain is lost. Silicones are developed for high-temp seals. Penicillin production requires new fermentation tech. The Manhattan Project requires Teflon (to resist Uranium Hexafluoride).",
          "key_manifestations": [
            "Polyethylene in Radar",
            "Nylon Riots (shortage)",
            "Teflon used in Manhattan Project",
            "Synthetic Rubber Program (US)"
          ]
        },
        "1944": {
          "salience_share": 65.0,
          "description": "The Plastic Age (+5.0%). Post-war, these military materials enter the home. Tupperware (Polyethylene). Vinyl records. Polyester. The Transistor (1947) relies on Germanium (later Silicon) purity\u2014'Electronic Materials.' Carbon-14 dating (Libby) uses material decay as a clock.",
          "key_manifestations": [
            "Tupperware launch",
            "Transistor invention (Germanium)",
            "Vinyl LP Record",
            "Microwave Oven (Magnetron app)"
          ]
        },
        "1949": {
          "salience_share": 70.0,
          "description": "Silicon Valley Foundation (+5.0%). Teal at Bell Labs grows the first Silicon single crystal. Zone Refining (Pfann) allows for 99.999999% purity. This is the material basis of the digital age. Velcro is invented. DNA structure (1953) reveals the material basis of life.",
          "key_manifestations": [
            "Silicon Single Crystal growth",
            "Zone Refining process",
            "Velcro invention",
            "Corvette (Fiberglass body)"
          ]
        },
        "1954": {
          "salience_share": 75.0,
          "description": "Composites and Polypropylene (+5.0%). Ziegler and Natta discover catalysts to make Polypropylene and High-Density Polyethylene (HDPE). The Hula Hoop is the result. 'Space Age' materials (Titanium, Mylar) appear. The Solar Cell (Silicon) is demonstrated.",
          "key_manifestations": [
            "Ziegler-Natta Catalysts",
            "Polypropylene commercialization",
            "Sputnik (Aluminum-Magnesium)",
            "Lego bricks switch to ABS plastic"
          ]
        },
        "1959": {
          "salience_share": 78.0,
          "description": "Lycra and Lasers (+3.0%). Lycra (Spandex) revolutionizes clothing. The Laser requires synthetic Ruby crystals. The 'Pill' uses synthetic hormones. Float Glass (Pilkington) standardizes high-quality window glass. The material world is now fully synthetic.",
          "key_manifestations": [
            "Lycra commercialization",
            "Float Glass process",
            "Ruby Laser",
            "Integrated Circuit (Silicon planar process)"
          ]
        },
        "1964": {
          "salience_share": 82.0,
          "description": "High Performance (+4.0%). Carbon Fiber is developed (RAE). Kevlar (Kwolek at DuPont) is invented (1965). Super-strength materials. The SR-71 Blackbird is built of Titanium. The obsession with 'The Graduate' line: 'Plastics.'",
          "key_manifestations": [
            "Kevlar invention",
            "Carbon Fiber development",
            "SR-71 Titanium construction",
            "The Graduate ('Plastics')"
          ]
        },
        "1969": {
          "salience_share": 85.0,
          "description": "Silicon Dominance (+3.0%). The Microprocessor (Intel 4004) cements Silicon as the most important material on earth. Optical Fiber (Corning) is perfected. Gore-Tex (ePTFE) is invented. We are manipulating light and information through engineered glass and stone.",
          "key_manifestations": [
            "Corning low-loss Optical Fiber",
            "Gore-Tex invention",
            "Intel 4004 (Silicon gate)",
            "Moon Rocks (Material analysis)"
          ]
        },
        "1974": {
          "salience_share": 86.0,
          "description": "The Plastic Bottle (+1.0%). The PET bottle is patented. It replaces glass for soda, creating a waste problem 50 years later. Post-It Notes (repositionable adhesive). Conductive Polymers (Heeger) discovered\u2014plastics that conduct electricity.",
          "key_manifestations": [
            "PET Bottle introduction",
            "Post-It Note adhesive",
            "Conductive Polymers discovery",
            "Catalytic Converter (Platinum group metals)"
          ]
        },
        "1979": {
          "salience_share": 88.0,
          "description": "Neodymium and Fullerenes (+2.0%). Neodymium magnets are invented (GM/Sumitomo), enabling miniaturized motors (Walkman, Hard Drives). The Scanning Tunneling Microscope (IBM) allows us to *see* individual atoms. 3D Printing (Stereolithography) is invented (Hull, 1984 prep).",
          "key_manifestations": [
            "Neodymium Magnet invention",
            "Scanning Tunneling Microscope",
            "Space Shuttle Tiles (Ceramics)",
            "Sony Walkman (Plastic chassis)"
          ]
        },
        "1984": {
          "salience_share": 90.0,
          "description": "Superconductors and Buckyballs (+2.0%). High-Temperature Superconductors (YBCO) are discovered (1986-87), promising resistance-free power (hype). Buckminsterfullerene (C60) is discovered (1985), opening the field of Nanotech. 3D Printing patents filed.",
          "key_manifestations": [
            "High-Tc Superconductors (Woodstock of Physics)",
            "Discovery of C60 (Buckyball)",
            "Stereolithography (3D Printing)",
            "NdFeB magnets scaling"
          ]
        },
        "1989": {
          "salience_share": 92.0,
          "description": "Blue LED and Lithium Ion (+2.0%). Akasaki/Amano/Nakamura invent the bright Blue LED (GaN). This completes the RGB set, allowing for white LED light. Sony commercializes the Lithium-Ion battery (1991). These two materials define the 21st century (Screens and Batteries).",
          "key_manifestations": [
            "Blue LED breakthrough",
            "Lithium-Ion Battery commercialization",
            "Carbon Nanotubes discovered (Iijima)",
            "Hubble Mirror flaw (Material shaping error)"
          ]
        },
        "1994": {
          "salience_share": 94.0,
          "description": "Nanotech Hype (+2.0%). 'Carbon Nanotubes' are the wonder material. 'Smart Materials' (Shape memory alloys) gain traction. DVD (Polycarbonate) standardizes digital video distribution. The 'Rare Earth' supply chain begins to tighten as China dominates.",
          "key_manifestations": [
            "Carbon Nanotube research peak",
            "DVD format launch",
            "Drexler's 'Engines of Creation' (Nanotech vision)",
            "Aerogel commercial uses"
          ]
        },
        "1999": {
          "salience_share": 95.0,
          "description": "Metamaterials (+1.0%). Pendry proposes Metamaterials\u2014structures that bend light in unnatural ways (Invisibility Cloak). Gorilla Glass (Corning) is dusted off for the iPhone (2007 prep). Bio-plastics (PLA) attempt to solve the waste issue.",
          "key_manifestations": [
            "Metamaterials concept",
            "PLA bioplastic scaling",
            "iPod (Polycarbonate/Steel interface)",
            "Clinton's National Nanotechnology Initiative"
          ]
        },
        "2004": {
          "salience_share": 97.0,
          "description": "Graphene (+2.0%). Geim and Novoselov isolate Graphene using scotch tape. It is a single atom thick, 200x stronger than steel. The ultimate 2D material. Lithium Iron Phosphate (LFP) batteries offer a safer, cheaper alternative for EVs.",
          "key_manifestations": [
            "Isolation of Graphene",
            "LFP Battery chemistry",
            "Boeing 787 (Composite fuselage)",
            "Touchscreens (Indium Tin Oxide)"
          ]
        },
        "2009": {
          "salience_share": 98.0,
          "description": "Perovskites (+1.0%). Perovskite solar cells emerge as a high-efficiency alternative to silicon. Rare Earth Crisis (2010) highlights material geopolitical risk. CRISPR allows for 'Material Biology'\u2014engineering spider silk in yeast.",
          "key_manifestations": [
            "Perovskite Solar Cell efficiency jump",
            "Rare Earth export restrictions (China)",
            "Spider Silk protein synthesis",
            "Gorilla Glass ubiquity"
          ]
        },
        "2014": {
          "salience_share": 98.5,
          "description": "Battery Chemistry (+0.5%). Solid State Battery research intensifies. Cobalt constraints drive chemistry changes (NMC 811). 3D Printing metals becomes industrial (GE jet nozzles). The 'Plastic Waste' crisis (Ocean gyres) forces a rethink of the entire cluster.",
          "key_manifestations": [
            "Ocean Cleanup Project launch",
            "GE 3D Printed fuel nozzle",
            "Tesla Gigafactory (Material throughput)",
            "Graphene hype cycle crash"
          ]
        },
        "2019": {
          "salience_share": 99.0,
          "description": "Circular Economy (+0.5%). The focus shifts from 'Performance' to 'Recyclability.' Chemical Recycling. PFAS (Forever Chemicals) are demonized/regulated. Bio-cement and Mass Timber (CLT) challenge concrete/steel in construction. AI discovers new materials (GNoME).",
          "key_manifestations": [
            "Mass Timber Skyscrapers",
            "PFAS bans",
            "AlphaFold (Protein materials)",
            "mRNA Lipid Nanoparticles (Vaccine delivery)"
          ]
        },
        "2024": {
          "salience_share": 99.5,
          "description": "AI Synthesis (+0.5%). Google DeepMind's GNoME predicts 2.2 million new crystals. Autonomous labs synthesize them. The constraint shifts from discovery to validation. LK-99 (room temp superconductor claim) goes viral but fails, showing the desperation for the next break. Silicon reaches the Angstrom era.",
          "key_manifestations": [
            "GNoME database release",
            "LK-99 viral moment",
            "Solid State Battery pilot lines",
            "TSMC 2nm process (Material limit)"
          ]
        }
      }
    },
    "11_democratic_bureaucratic_expansion": {
      "name": "Democratic Bureaucratic Expansion",
      "description": "This eigencluster represents the evolution of 'State Capacity' and the mechanism of governance. It tracks the shift from monarchical/aristocratic rule to mass democracy administered by a professional, meritocratic bureaucracy. It encompasses the expansion of the franchise (voting), the creation of the safety net (Welfare State), the rise of total taxation (Income Tax), and the tension between the 'Deep State' (administrative continuity) and populist will.",
      "trajectory": {
        "1789": {
          "salience_share": 3.5,
          "description": "The explosion of the modern political subject. The French Revolution (1789) destroys the 'Divine Right of Kings' and replaces it with the 'General Will.' The 'Declaration of the Rights of Man' is the software update for governance. However, the immediate result is not stability but the 'Terror'\u2014the first modern police state bureaucracy. In the US, the Constitution is ratified (1788/89), creating the first designed federal republic.",
          "key_manifestations": [
            "Declaration of the Rights of Man and of the Citizen",
            "Ratification of the US Constitution",
            "Establishment of the Committee of Public Safety",
            "Burke's 'Reflections on the Revolution in France' (Conservatism)"
          ]
        },
        "1794": {
          "salience_share": 3.8,
          "description": "Bureaucracy of Virtue (+0.3%). Robespierre's fall ends the radical phase, but the 'Lev\u00e9e en masse' has created the first total conscription state. The citizen is now an asset of the state. The 'Jay Treaty' (1794) in the US establishes the concept of executive privilege and treaty-making power, solidifying the Federal government's role in foreign affairs against populist outcry.",
          "key_manifestations": [
            "Thermidorian Reaction",
            "Jay Treaty",
            "Lev\u00e9e en masse (Conscription)",
            "Whiskey Rebellion suppression (Federal force)"
          ]
        },
        "1799": {
          "salience_share": 4.2,
          "description": "The Napoleonic State (+0.4%). Napoleon's coup (18th Brumaire) replaces chaos with efficient autocracy. He invents the modern 'Police State' (Fouch\u00e9) and the 'Prefect' system\u2014centralizing administration so that every school in France teaches the same lesson at the same time. This is the model for the 'rational state' that Hegel will later praise.",
          "key_manifestations": [
            "Coup of 18th Brumaire",
            "Establishment of the Prefecture system",
            "Combination Acts (UK) banning unions",
            "Schiller's 'Wallenstein' (Realpolitik)"
          ]
        },
        "1804": {
          "salience_share": 4.5,
          "description": "Codification (+0.3%). The *Code Napol\u00e9on* (1804) is the exportable operating system of the state. It standardizes law, abolishing feudal privileges and local customs. It creates a direct relationship between the State and the Individual, bypassing the Church and Nobility. This spreads to Italy, Germany, and the Netherlands via conquest.",
          "key_manifestations": [
            "Promulgation of the Code Napol\u00e9on",
            "Coronation of Napoleon (Secular Emperor)",
            "12th Amendment to US Constitution (Electoral reform)",
            "Hegel's 'Phenomenology of Spirit' (State as history's end)"
          ]
        },
        "1809": {
          "salience_share": 3.8,
          "description": "State of War (-0.7%). The bureaucratic machinery is entirely focused on extraction for war. The 'Continental System' requires a massive customs bureaucracy to enforce. In Prussia, the defeat at Jena leads to the 'Stein-Hardenberg Reforms' (1807-1810), abolishing serfdom not for freedom, but to create a more efficient citizenry for the state to tax and draft.",
          "key_manifestations": [
            "Stein-Hardenberg Reforms (Prussia)",
            "Continental System customs enforcement",
            "Madison's Presidency (Weak federal state)",
            "Fichte's 'Addresses to the German Nation' (Nationalism)"
          ]
        },
        "1814": {
          "salience_share": 3.5,
          "description": "Reactionary Retraction (-0.3%). The Congress of Vienna attempts to rewind the clock to 1789. The 'Holy Alliance' creates an international police force to suppress democracy. However, the administrative improvements of Napoleon (efficient tax collection, centralized police) are kept by the restored monarchs. The state never shrinks back to its feudal size.",
          "key_manifestations": [
            "Congress of Vienna",
            "Restoration of the Bourbons",
            "Corn Laws (State protecting aristocracy)",
            "Constant's 'Liberty of Ancients vs Moderns'"
          ]
        },
        "1819": {
          "salience_share": 3.2,
          "description": "The Peterloo Repression (-0.3%). The demand for the vote (Chartism precursors) is met with cavalry charges at Peterloo. The 'Six Acts' in UK suppress assembly. The state views the 'crowd' as a threat, not a constituency. In the US, *McCulloch v. Maryland* (1819) establishes the supremacy of Federal power over States, a crucial legal expansion of the central bureaucracy.",
          "key_manifestations": [
            "Peterloo Massacre",
            "McCulloch v. Maryland Supreme Court ruling",
            "The Six Acts (UK)",
            "Carlsbad Decrees (German censorship)"
          ]
        },
        "1824": {
          "salience_share": 3.5,
          "description": "The Jacksonian Turn (+0.3%). In the US, the 'Corrupt Bargain' election (1824) triggers the rise of mass populism. This leads to the removal of property requirements for voting (white males), expanding the 'Demos.' Bureaucracy remains a 'Spoils System'\u2014jobs given to loyalists, not experts.",
          "key_manifestations": [
            "1824 US Presidential Election (Corrupt Bargain)",
            "Repeal of Combination Acts (UK - Labor rights)",
            "Establishment of the Bureau of Indian Affairs (State management of populations)",
            "Bolivar's constitutions in South America"
          ]
        },
        "1829": {
          "salience_share": 3.8,
          "description": "The Police Force (+0.3%). Robert Peel establishes the Metropolitan Police in London (1829). The 'Bobby.' This is the professionalization of domestic order. Unlike the military, they are civilians. It represents the state taking a monopoly on violence in the streets. In the US, Andrew Jackson institutes the 'Spoils System' formally, politicizing the bureaucracy.",
          "key_manifestations": [
            "Metropolitan Police Act 1829",
            "Jackson's Inauguration (Populist storm)",
            "Catholic Emancipation Act (UK)",
            "Mill's 'Analysis of the Phenomena of the Human Mind'"
          ]
        },
        "1834": {
          "salience_share": 4.5,
          "description": "Reform and Regulation (+0.7%). The Great Reform Act (1832) in UK expands the franchise to the middle class. The 'Poor Law Amendment Act' (1834) creates the Workhouse system\u2014a bureaucratized welfare system designed to be unpleasant. The 'Factory Act' (1833) introduces the first state inspectors into private business, asserting the state's right to regulate the market.",
          "key_manifestations": [
            "Great Reform Act 1832",
            "New Poor Law 1834",
            "Factory Act of 1833 (Inspectors)",
            "Tocqueville's 'Democracy in America' (Vol 1)"
          ]
        },
        "1839": {
          "salience_share": 4.2,
          "description": "Chartism Stalls (-0.3%). The 'People's Charter' (universal male suffrage) is presented and rejected. The state is strong enough to ignore the mass petition. The 'Opium War' shows the British state acting as the drug pusher for its own treasury, merging imperial bureaucracy with criminal enterprise logic.",
          "key_manifestations": [
            "Rejection of the First Chartist Petition",
            "First Opium War",
            "Carlyle's 'Chartism' (The Condition of England)",
            "Proudhon's 'What is Property?' (Anarchist critique)"
          ]
        },
        "1844": {
          "salience_share": 4.8,
          "description": "The Bank and the Bureau (+0.6%). The Bank Charter Act (1844) gives the Bank of England a monopoly on note issue, centralizing monetary control. The state is taking control of the currency. The 'Report on the Sanitary Condition' (Chadwick) proposes that the state must build sewers, expanding the 'Biopolitical' mandate.",
          "key_manifestations": [
            "Bank Charter Act 1844",
            "Engels' 'Condition of the Working Class'",
            "Polk's expansionist platform (Manifest Destiny state)",
            "Kierkegaard's 'Concept of Anxiety'"
          ]
        },
        "1849": {
          "salience_share": 5.5,
          "description": "The Spring of Nations Crushed (+0.7%). The 1848 Revolutions demand constitutions and nations. They are mostly defeated by the armies of the old empires, but the *idea* of the Nation-State wins. Governments realize they must modernize to survive. France adopts universal male suffrage (briefly) before Napoleon III's coup. The 'Department of the Interior' is created in the US (1849) to manage the continent.",
          "key_manifestations": [
            "1848 Revolutions",
            "Creation of US Dept of Interior",
            "Repeal of Navigation Acts (Liberal state)",
            "Thoreau's 'Civil Disobedience' (Resistance to state)"
          ]
        },
        "1854": {
          "salience_share": 6.0,
          "description": "Meritocracy Dawn (+0.5%). The Northcote-Trevelyan Report (1854) in the UK proposes that civil servants should be hired by exam, not patronage. This is the birth of the modern 'Mandarin' class\u2014the expert bureaucrat who serves regardless of the minister. The Crimean War exposes the incompetence of aristocratic leadership, accelerating this reform.",
          "key_manifestations": [
            "Northcote-Trevelyan Report",
            "Kansas-Nebraska Act (State failure to manage slavery)",
            "Charge of the Light Brigade (Aristocratic failure)",
            "Dickens' 'Bleak House' (Critique of Chancery bureaucracy)"
          ]
        },
        "1859": {
          "salience_share": 6.5,
          "description": "The Liberal State (+0.5%). John Stuart Mill publishes *On Liberty*. The ideal is a 'Nightwatchman State' that protects property but leaves the mind free. However, the state is building infrastructure (sewers, telegraphs) that requires more administration. Italy unifies (1861 prep), creating a new heavy bureaucracy over the peninsula.",
          "key_manifestations": [
            "Mill's 'On Liberty'",
            "Italian Unification (Risorgimento)",
            "John Brown's Raid (Challenge to state monopoly on violence)",
            "Marx's 'Contribution to the Critique of Political Economy'"
          ]
        },
        "1864": {
          "salience_share": 8.5,
          "description": "The Union State (+2.0%). The US Civil War transforms the weak Federal government into a leviathan. It introduces the Income Tax (1861), the Greenback (Fiat currency), the Draft, and the suspension of Habeas Corpus. The State proves it can mobilize the entire industrial economy. In Russia, Alexander II emancipates the serfs (1861) and creates the 'Zemstvo' (local government), attempting to modernize the autocracy.",
          "key_manifestations": [
            "Emancipation Proclamation",
            "US National Banking Acts",
            "Emancipation of Russian Serfs",
            "Founding of the International Red Cross (Non-state governance)"
          ]
        },
        "1869": {
          "salience_share": 9.2,
          "description": "Reconstruction and Restoration (+0.7%). The 14th Amendment (1868) nationalizes citizenship in the US, overriding state laws. The Meiji Restoration (1868) in Japan creates a modern centralized state from a feudal one overnight, adopting Western bureaucratic models. The state is now a vehicle for modernization.",
          "key_manifestations": [
            "14th Amendment Ratification",
            "Meiji Restoration Charter Oath",
            "Disestablishment of the Irish Church",
            "Grant's Peace Policy (Bureaucratic management of tribes)"
          ]
        },
        "1874": {
          "salience_share": 9.8,
          "description": "Compulsory Education (+0.6%). The UK Education Act (1870) and similar laws in Europe make school mandatory. The state claims the child's mind for 10 years to create a literate, obedient citizen/worker. The 'Paris Commune' (1871) scares the bourgeoisie into strengthening the police and army. Germany Unifies (1871), creating the efficient 'Prussian State' model.",
          "key_manifestations": [
            "German Unification (The Kaiserreich)",
            "UK Elementary Education Act",
            "Suppression of the Paris Commune",
            "Tweed Ring exposure (Urban machine politics)"
          ]
        },
        "1879": {
          "salience_share": 10.5,
          "description": "The Professional Civil Service (+0.7%). The US creates the 'Civil Service Commission' (Hayes) to fight the spoils system, though true reform waits. Bismarck bans the Socialists but begins to co-opt their program. The state is realizing it must buy the loyalty of the working class.",
          "key_manifestations": [
            "Bismarck's Anti-Socialist Laws",
            "Treaty of Berlin (Bureaucratic partition of Balkans)",
            "California Constitution of 1879 (Anti-Chinese)",
            "Henry George's 'Progress and Poverty' (Single Tax proposal)"
          ]
        },
        "1884": {
          "salience_share": 12.0,
          "description": "The Welfare State Begins (+1.5%). The catalyst is Otto von Bismarck. He introduces Health Insurance (1883) and Accident Insurance (1884). This is a revolution: the state insures the body of the worker against the risk of capitalism. It is 'State Socialism' from the right. In the US, the 'Pendleton Act' (1883) finally creates a meritocratic civil service, ending the spoils system.",
          "key_manifestations": [
            "Bismarck's Sickness Insurance Law",
            "Pendleton Civil Service Reform Act (US)",
            "Fabian Society founded (Gradualist socialism)",
            "Berlin Conference (Bureaucratic Imperialism)"
          ]
        },
        "1889": {
          "salience_share": 13.0,
          "description": "Bureaucratic Expansion (+1.0%). The 'Interstate Commerce Commission' (1887) is the first US regulatory agency, designed to tame the Railroads. The state steps into the market as a referee. Old Age Pensions (Germany 1889) complete Bismarck's safety net. The state now cares for you from cradle to grave.",
          "key_manifestations": [
            "German Old Age and Disability Insurance",
            "Interstate Commerce Act (US)",
            "Sherman Antitrust Act (1890 prep)",
            "Second International (Socialist bureaucracy)"
          ]
        },
        "1894": {
          "salience_share": 13.5,
          "description": "Populism vs The State (+0.5%). The 'Pullman Strike' is crushed by Federal troops and the courts (Injunction). The state sides with Capital. The 'Populist Party' demands nationalization of rails and telegraphs. The Dreyfus Affair (1894) exposes the corruption within the French military Deep State.",
          "key_manifestations": [
            "Pullman Strike (Federal intervention)",
            "Dreyfus Affair begins",
            "Income Tax Act of 1894 (Ruled unconstitutional)",
            "New Zealand enacts compulsory arbitration"
          ]
        },
        "1899": {
          "salience_share": 14.5,
          "description": "Progressive Era Roots (+1.0%). The US begins to acquire an empire (Philippines/Puerto Rico), requiring a colonial bureaucracy. 'Scientific Management' (Taylor) ideas bleed into government\u2014the 'Efficiency Movement.' The state should be run like a factory. The Hague Convention attempts to bureaucratize war itself.",
          "key_manifestations": [
            "US acquisition of Philippines",
            "Veblen's 'Theory of the Leisure Class'",
            "First Hague Peace Conference",
            "Boxer Rebellion (Anti-colonial backlash)"
          ]
        },
        "1904": {
          "salience_share": 15.5,
          "description": "Trust Busting (+1.0%). Theodore Roosevelt uses the Sherman Act to break up Northern Securities. The Executive Branch asserts dominance over the Corporate entity. The 'Pure Food and Drug Act' (1906 prep) creates the FDA\u2014the state policing the molecular content of products.",
          "key_manifestations": [
            "Northern Securities Co. v. United States",
            "Creation of the Department of Commerce and Labor",
            "Lochner v. New York (Judicial pushback on regulation)",
            "1905 Revolution in Russia (Duma created)"
          ]
        },
        "1909": {
          "salience_share": 16.5,
          "description": "The People's Budget (+1.0%). Lloyd George in the UK introduces a budget to tax the rich to pay for battleships and pensions. The House of Lords rejects it, leading to a constitutional crisis. The result is the supremacy of the Commons and the beginning of the redistributive state. The NAACP is founded, beginning the long legal march for rights.",
          "key_manifestations": [
            "The People's Budget (UK)",
            "Parliament Act 1911 (Lords power broken)",
            "NAACP founding",
            "Standard Oil break-up"
          ]
        },
        "1914": {
          "salience_share": 19.0,
          "description": "The Fiscal State (+2.5%). The 16th Amendment (1913) allows the US Federal Income Tax. The Federal Reserve (1913) creates a central bank. The state now has the 'Power of the Purse' and the 'Power of the Printer.' WWI forces total mobilization\u2014the War Industries Board dictates production. The state becomes the entire economy.",
          "key_manifestations": [
            "16th Amendment (Income Tax)",
            "Federal Reserve Act",
            "Defense of the Realm Act (UK)",
            "War Industries Board"
          ]
        },
        "1919": {
          "salience_share": 21.0,
          "description": "Women's Suffrage and Prohibition (+2.0%). The 19th Amendment (1920) doubles the electorate. The 18th Amendment (Prohibition) creates a massive federal police enforcement apparatus (ATF). The state attempts to legislate morality. The Versailles Treaty creates the 'League of Nations,' an attempt at a world bureaucracy.",
          "key_manifestations": [
            "19th Amendment (Women's Vote)",
            "Volstead Act (Prohibition enforcement)",
            "League of Nations Covenant",
            "Weimar Constitution (Democratic structure)"
          ]
        },
        "1924": {
          "salience_share": 20.0,
          "description": "Normalization and Nativism (-1.0%). The 'Return to Normalcy' shrinks the US state slightly, but the FBI (Hoover) is growing. The Immigration Act of 1924 creates the 'Border Patrol' and a quota system. The state defines who is *not* a citizen using scientific racism. Fascism rises in Italy, proposing the 'Totalitarian' state\u2014nothing outside the state.",
          "key_manifestations": [
            "Immigration Act of 1924",
            "Hoover appointed director of BOI (FBI)",
            "Mussolini's consolidation of power",
            "Stalin's bureaucracy takes over USSR"
          ]
        },
        "1929": {
          "salience_share": 23.0,
          "description": "The Crisis of the State (+3.0%). The Great Depression proves the 'nightwatchman state' is insufficient. Hoover's attempts fail. The state must intervene or collapse. Stalin's 'Five Year Plans' demonstrate the terrifying power of the Command Economy\u2014industrialization by decree.",
          "key_manifestations": [
            "Stock Market Crash",
            "Start of Soviet Collectivization",
            "Young Plan (Reparations bureaucracy)",
            "Lateran Treaty (Church/State settlement)"
          ]
        },
        "1934": {
          "salience_share": 28.0,
          "description": "The New Deal (+5.0%). FDR constructs the modern American state in 100 days. The Alphabet Agencies (WPA, CCC, TVA, SEC, SSA). Social Security (1935) ties the citizen's retirement to the state. The 'Wagner Act' legalizes unions. It is a peaceful revolution. In Germany, the 'Enabling Act' creates the Nazi party-state.",
          "key_manifestations": [
            "Social Security Act",
            "Wagner Act (NLRB)",
            "SEC established (Financial police)",
            "Nuremberg Rally (Theatrical state)"
          ]
        },
        "1939": {
          "salience_share": 32.0,
          "description": "Totalitarian vs Democratic Mobilization (+4.0%). The state expands to consume civil society. Rationing, censorship, draft. The US 'Arsenal of Democracy' proves that a democratic state can plan an economy better than a fascist one. The 'Beveridge Report' (1942) in UK plans the post-war Welfare State.",
          "key_manifestations": [
            "Lend-Lease Act",
            "Japanese Internment (Executive Order 9066)",
            "Beveridge Report",
            "Wannsee Conference (Bureaucracy of genocide)"
          ]
        },
        "1944": {
          "salience_share": 35.0,
          "description": "The GI Bill and NHS (+3.0%). The GI Bill (1944) creates the middle class via state subsidy. The UK elects Labour (1945) and builds the NHS\u2014healthcare as a right. The 'Administrative Procedure Act' (1946) regulates the regulators. The state is now the guarantor of prosperity.",
          "key_manifestations": [
            "GI Bill of Rights",
            "Founding of the NHS",
            "Administrative Procedure Act",
            "Nuremberg Trials (International Law)"
          ]
        },
        "1949": {
          "salience_share": 37.0,
          "description": "The Cold War State (+2.0%). The National Security Act (1947) creates the CIA, NSC, and DOD. The 'Deep State' is institutionalized to fight Communism. NATO binds the West. China becomes a Communist Party-State. McCarthyism tests the limits of civil liberty within the bureaucracy.",
          "key_manifestations": [
            "National Security Act of 1947",
            "Formation of NATO",
            "Founding of the People's Republic of China",
            "McCarthy Hearings"
          ]
        },
        "1954": {
          "salience_share": 39.0,
          "description": "Brown v. Board (+2.0%). The Supreme Court asserts the power to reshape society (desegregation). The Federal state begins to intervene against Local tyranny. The 'Interstate Highway Act' (1956) is the largest public works project in history. The state builds the physical platform for the economy.",
          "key_manifestations": [
            "Brown v. Board of Education",
            "Interstate Highway Act",
            "Department of Health, Education, and Welfare created",
            "Bandung Conference (Post-colonial state building)"
          ]
        },
        "1959": {
          "salience_share": 40.0,
          "description": "The Technocracy (+1.0%). The 'Best and the Brightest' enter government. McNamara at Defense. The belief that governance is an engineering problem. The Space Program (NASA) is the jewel of the state. The 'Military-Industrial Complex' speech (Eisenhower) warns of the state's capture by its own vendors.",
          "key_manifestations": [
            "Eisenhower's Farewell Address",
            "Peace Corps established",
            "Gideon v. Wainwright (Right to counsel)",
            "Berlin Wall built (State control of movement)"
          ]
        },
        "1964": {
          "salience_share": 44.0,
          "description": "The Great Society (+4.0%). LBJ declares 'War on Poverty.' Medicare/Medicaid created. The Civil Rights Act (1964) and Voting Rights Act (1965) federalize citizenship, destroying the Jim Crow state. HUD and DOT are created. It is the peak of liberal confidence in government action.",
          "key_manifestations": [
            "Civil Rights Act of 1964",
            "Medicare/Medicaid Amendments",
            "Voting Rights Act of 1965",
            "Unsafe at Any Speed (Nader - regulation start)"
          ]
        },
        "1969": {
          "salience_share": 45.0,
          "description": "The Regulatory State (+1.0%). Nixon, despite being Republican, expands the state. EPA, OSHA, NOAA are founded. The state now regulates air, water, and workplace safety. Affirmative Action begins. However, Vietnam erodes trust. The 'Pentagon Papers' reveal the state lying to the public.",
          "key_manifestations": [
            "Creation of the EPA",
            "Creation of OSHA",
            "Pentagon Papers leak",
            "Nixon Shock (Wage/Price controls)"
          ]
        },
        "1974": {
          "salience_share": 42.0,
          "description": "Watergate and Crisis (-3.0%). Nixon resigns. Trust in the Presidency collapses. The 'Church Committee' exposes CIA abuses. The 'Fiscal Crisis of the State' (NYC Bankruptcy). Stagflation defies Keynesian management. The state seems impotent and corrupt.",
          "key_manifestations": [
            "Nixon Resignation",
            "Church Committee Hearings",
            "NYC Fiscal Crisis",
            "Roe v. Wade (Judicial expansion)"
          ]
        },
        "1979": {
          "salience_share": 38.0,
          "description": "The Neoliberal Turn (-4.0%). Thatcher (1979) and Reagan (1980). 'Government is the problem.' Deregulation begins (Airlines, Trucking). The intent is to roll back the state. Privatization of state industries in UK. The 'Volcker Shock' asserts the Central Bank's independence from political pressure.",
          "key_manifestations": [
            "Thatcher's election",
            "Airline Deregulation Act",
            "Volcker interest rate hike",
            "Proposition 13 (California Tax Revolt)"
          ]
        },
        "1984": {
          "salience_share": 35.0,
          "description": "Privatization and Reform (-3.0%). The breakup of AT&T. The Tax Reform Act of 1986 lowers rates. The 'Washington Consensus' exports this model to the world via IMF/World Bank. The Soviet State begins to rot from within (Gerontocracy).",
          "key_manifestations": [
            "Tax Reform Act of 1986",
            "Privatization of British Telecom",
            "Goldwater-Nichols Act (Military reform)",
            "Chevron U.S.A., Inc. v. NRDC (Chevron Deference)"
          ]
        },
        "1989": {
          "salience_share": 32.0,
          "description": "The Collapse of Communism (-3.0%). The Totalitarian State fails. Eastern Europe is liberated. The 'End of History' suggests Liberal Democracy is the final form. The EU (Maastricht) plans a 'Super-State' bureaucracy. The Americans with Disabilities Act (1990) is a major expansion of rights without spending (unfunded mandate).",
          "key_manifestations": [
            "Fall of Berlin Wall",
            "Americans with Disabilities Act",
            "Maastricht Treaty",
            "Reinventing Government (Clinton/Gore)"
          ]
        },
        "1994": {
          "salience_share": 30.0,
          "description": "Welfare Reform (-2.0%). 'The era of big government is over' (Clinton). Welfare is means-tested and time-limited. NAFTA restricts the state's ability to protect industry. The WTO creates a supra-national court. The state retreats to being a 'market enabler.'",
          "key_manifestations": [
            "Personal Responsibility and Work Opportunity Act",
            "Contract with America",
            "Establishment of WTO",
            "Crime Bill of 1994 (Mass Incarceration state)"
          ]
        },
        "1999": {
          "salience_share": 28.0,
          "description": "Deregulation Peak (-2.0%). Glass-Steagall is repealed. The financial sector regulates itself. The Euro launches, removing monetary policy from national states. The 'Great Firewall' of China begins, creating a new model: Digital Authoritarianism.",
          "key_manifestations": [
            "Gramm-Leach-Bliley Act (Repeal Glass-Steagall)",
            "Launch of the Euro",
            "Golden Shield Project (China)",
            "Putin comes to power (Statism returns to Russia)"
          ]
        },
        "2004": {
          "salience_share": 33.0,
          "description": "The Security State (+5.0%). 9/11 triggers the PATRIOT Act. The Department of Homeland Security is created (largest reorganization since 1947). Mass surveillance (NSA). The state re-asserts itself as the protector. Katrina (2005) exposes state incompetence.",
          "key_manifestations": [
            "USA PATRIOT Act",
            "Creation of DHS",
            "Intelligence Reform and Terrorism Prevention Act",
            "Hurricane Katrina failure"
          ]
        },
        "2009": {
          "salience_share": 38.0,
          "description": "The Bailout State (+5.0%). The 2008 Crisis forces the state to save the market. TARP, Auto Bailout, Stimulus. The Federal Reserve's balance sheet explodes (QE). Obamacare (ACA) expands the safety net significantly. The state is 'Too Big to Fail.'",
          "key_manifestations": [
            "Dodd-Frank Act",
            "Affordable Care Act (Obamacare)",
            "Citizens United (Corporate speech)",
            "Troubled Asset Relief Program (TARP)"
          ]
        },
        "2014": {
          "salience_share": 36.0,
          "description": "Populist Backlash (-2.0%). Brexit and Trump. A rejection of the 'Administrative State' and the 'Deep State.' Bannon's 'Deconstruction of the Administrative State.' Gridlock in Congress shifts power to Executive Orders and the Courts. The Paris Agreement attempts global climate governance.",
          "key_manifestations": [
            "Brexit Referendum",
            "Obergefell v. Hodges (Gay Marriage)",
            "Paris Agreement",
            "Trump's Executive Orders"
          ]
        },
        "2019": {
          "salience_share": 45.0,
          "description": "The Pandemic State (+9.0%). COVID-19 justifies total state control: lockdowns, mask mandates, travel bans, vaccine mandates. Trillions in direct cash transfers (CARES Act). The state pays wages (PPP). Modern Monetary Theory (MMT) enters the chat. The state is the life-support system.",
          "key_manifestations": [
            "Global Lockdowns",
            "CARES Act ($2.2 Trillion)",
            "Vaccine Mandates",
            "Dobbs v. Jackson (State control of abortion returns)"
          ]
        },
        "2024": {
          "salience_share": 42.0,
          "description": "Industrial Policy Returns (-3.0%). The Biden Administration embraces 'Bidenomics'\u2014state-directed investment in chips and green energy (IRA). It is a rejection of Neoliberalism. However, the Supreme Court (Loper Bright v. Raimondo) overturns 'Chevron Deference,' crippling the power of federal agencies to interpret laws. The bureaucracy is under legal siege.",
          "key_manifestations": [
            "Loper Bright Enterprises v. Raimondo (End of Chevron)",
            "CHIPS and Science Act implementation",
            "Milei's election in Argentina (Chainsaw to the state)",
            "EU AI Act (Brussels Effect)"
          ]
        }
      }
    },
    "12_urban_densification_verticality": {
      "name": "Urban Densification Verticality",
      "description": "This eigencluster tracks the physical reorganization of the human species from rural dispersion to high-density urban clusters. It encompasses the vertical conquest of space (Skyscraper/Elevator), the subterranean conquest (Subway/Sewer), and the sociological shift to 'Metropolitan' life. It is the story of the city as a machine for living, scaling from 1 million to 30 million inhabitants.",
      "trajectory": {
        "1789": {
          "salience_share": 1.5,
          "description": "The Walking City. Cities are limited by the distance a person can walk in an hour (2-3 miles). London and Paris are dense, filthy, and horizontal. 3-4 stories is the max (walk-up limit). Density is defined by overcrowding, not height. The 'Mob' is a new political force in Paris.",
          "key_manifestations": [
            "L'Enfant Plan for Washington D.C.",
            "Growth of the Faubourg Saint-Antoine",
            "First US Census (5% urban)",
            "Bentham's Panopticon (urban control architecture)"
          ]
        },
        "1794": {
          "salience_share": 1.6,
          "description": "Stasis (+0.1%). The Terror empties parts of Paris. Cities are dangerous. Philadelphia's Yellow Fever (1793) proves density is deadly without sanitation (Cluster 3). The gridiron plan is applied to new American towns (simplicity over aesthetics).",
          "key_manifestations": [
            "Yellow Fever depopulation of Philadelphia",
            "New York City's northward creep",
            "Ledoux's Ideal City of Chaux (Visionary architecture)",
            "Telegraph Hill (Urban comms node)"
          ]
        },
        "1799": {
          "salience_share": 1.8,
          "description": "Industrial Nucleation (+0.2%). Manchester and Birmingham begin to swell. The factory requires labor density. The 'slum' begins to form as a distinct urban typology\u2014hastily built worker housing near the mill. The steam engine enters the city.",
          "key_manifestations": [
            "Growth of Manchester slums",
            "Census of 1801 (London hits 1 million)",
            "Steam engine installation in London breweries",
            "Wordsworth's 'Prelude' (Urban alienation)"
          ]
        },
        "1804": {
          "salience_share": 2.0,
          "description": "The Grid (+0.2%). The 'Commissioners' Plan of 1811' for NYC is being drafted. It imposes a relentless rectangular grid on Manhattan, treating land as a commodity to be sold, not a landscape. This layout prioritizes real estate turnover and traffic flow.",
          "key_manifestations": [
            "Early drafting of NYC Grid Plan",
            "Napoleon's Rue de Rivoli (Grand axis)",
            "London Docks expansion",
            "Trevithick's 'Catch Me Who Can' (Urban spectacle)"
          ]
        },
        "1809": {
          "salience_share": 2.2,
          "description": "Gas Light Streets (+0.2%). The introduction of gas lighting (Pall Mall) changes the urban tempo. The 'Night Life' becomes possible. The city is no longer governed by the sun. This extends the economic hours of the dense core.",
          "key_manifestations": [
            "Gas lighting in London",
            "Nash's Regent Street plan",
            "Arcades (covered shopping streets)",
            "Babel (Metaphor of the confused city)"
          ]
        },
        "1814": {
          "salience_share": 2.5,
          "description": "The Commuter Dawn (+0.3%). The steam ferry (Fulton) allows Brooklyn to become a bedroom community for Manhattan. The separation of 'Home' and 'Work' begins. London sprawls slightly as the wealthy move to the edge to escape the smoke.",
          "key_manifestations": [
            "Fulton Ferry service",
            "Regent's Park development",
            "Rise of the Omnibus (horse bus)",
            "Jane Austen's view of London (noise/dirt)"
          ]
        },
        "1819": {
          "salience_share": 2.8,
          "description": "Infrastructure Strain (+0.3%). Cities are drowning in waste. The 'night soil' men cannot keep up. The density is toxic. This pressure builds the demand for the 'Sanitary City' (Cluster 3). The 'Row House' becomes the standard unit of Anglo-American urbanism.",
          "key_manifestations": [
            "Peterloo (Urban crowd politics)",
            "Report on the Police of the Metropolis",
            "Burlington Arcade opening",
            "Growth of the 'Rookeries' (slums)"
          ]
        },
        "1824": {
          "salience_share": 3.2,
          "description": "The Omnibus (+0.4%). The Omnibus (mass horse transit) creates fixed routes. You don't need a private carriage to move. This democratizes mobility within the city. The Erie Canal turns NYC into the commercial capital, accelerating its density.",
          "key_manifestations": [
            "Shillibeer's Omnibus in London",
            "Opening of Erie Canal (NYC boom)",
            "Menai Suspension Bridge (Urban links)",
            "University College London (Urban secular education)"
          ]
        },
        "1829": {
          "salience_share": 3.5,
          "description": "The Police City (+0.3%). The Met Police (1829) allow for the regulation of the dense crowd. Traffic management becomes a police function. The city is becoming a managed system. The 'Arcade' evolves into the proto-Department Store.",
          "key_manifestations": [
            "Metropolitan Police Act",
            "Liverpool and Manchester Railway (Inter-city)",
            "Galerie Vivienne",
            "Hugo's 'Hunchback of Notre Dame' (Medieval city nostalgia)"
          ]
        },
        "1834": {
          "salience_share": 4.0,
          "description": "Rail Termini (+0.5%). The Railway enters the city. Euston Station (1837 prep). This requires massive demolition of slums to cut tracks. The 'Terminus' becomes the new city gate. Time is synchronized to the station clock. The suburbs follow the rails.",
          "key_manifestations": [
            "Arc de Triomphe completion",
            "Planning of London rail termini",
            "Tocqueville on Manchester ('civilized man is turned back into a savage')",
            "New York University founded"
          ]
        },
        "1839": {
          "salience_share": 4.5,
          "description": "Paving and Photography (+0.5%). Wood block and Macadam paving reduce street noise. Photography (Daguerreotype) captures the city for the first time\u2014The *Boulevard du Temple* (1838) shows a 'deserted' street because the exposure is too slow to catch the moving crowd, except for one shoe-shiner.",
          "key_manifestations": [
            "Daguerre's Boulevard du Temple photo",
            "Trafalgar Square laid out",
            "Poe's 'Man of the Crowd' (Urban psychology)",
            "Kew Gardens opens to public (Urban lung)"
          ]
        },
        "1844": {
          "salience_share": 5.2,
          "description": "The Sewer Crisis (+0.7%). Engels describes Manchester. The density has outpaced the infrastructure. Cholera lurks. The 'Park Movement' begins\u2014Birkenhead Park (1847), the model for Central Park. The city needs artificial nature to survive.",
          "key_manifestations": [
            "Engels' 'Condition of the Working Class'",
            "Birkenhead Park opening",
            "Trafalgar Square Nelson's Column",
            "Penny Dreadfuls (Urban horror)"
          ]
        },
        "1849": {
          "salience_share": 6.0,
          "description": "Haussmannization Begins (+0.8%). Napoleon III appoints Haussmann (1853 prep). The plan: tear open the medieval city. Broad boulevards for troops and light. A new sewer system. Uniform facades. This is the invention of the 'Modern City' as a planned total work of art.",
          "key_manifestations": [
            "Napoleon III's rebuilding plans",
            "John Snow's Cholera Map (Urban epidemiology)",
            "Department Stores (Bon March\u00e9)",
            "Ruskin's 'Stones of Venice' (Critique of modernism)"
          ]
        },
        "1854": {
          "salience_share": 7.5,
          "description": "The Elevator (+1.5%). Elisha Otis demonstrates the safety brake (1854). 'I am fine, gentlemen.' This breaks the 5-story limit. Verticality is now theoretically infinite. The London Underground (Metropolitan Line) is approved. The city is expanding up and down simultaneously.",
          "key_manifestations": [
            "Otis Elevator Crystal Palace demo",
            "Haussmann's demolition of Paris",
            "Central Park competition (Olmsted/Vaux)",
            "Bazalgette's Sewers"
          ]
        },
        "1859": {
          "salience_share": 8.5,
          "description": "The Underground (+1.0%). Construction of the London Underground. Central Park opens. The 'Streetcar' (Horse-drawn on rails) smooths the ride, allowing expansion. The city is becoming a metabolic organism with veins (rails), intestines (sewers), and lungs (parks).",
          "key_manifestations": [
            "London Underground construction",
            "Central Park opening",
            "Barcelona Extension (Cerd\u00e0 Plan - scientific urbanism)",
            "Dickens' 'Tale of Two Cities'"
          ]
        },
        "1864": {
          "salience_share": 10.0,
          "description": "Metropolitan Pulse (+1.5%). The Metropolitan Line opens (1863). Steam trains underground. It is a sensation. Commuting from the suburbs is now a mass phenomenon. The 'Tenement' law in NYC (1867) tries to regulate the density of the poor.",
          "key_manifestations": [
            "Metropolitan Railway opening",
            "Paris Opera House construction",
            "Chicago Union Stock Yards",
            "Dostoevsky's 'Notes from Underground' (Urban alienation)"
          ]
        },
        "1869": {
          "salience_share": 11.5,
          "description": "The Bridge (+1.5%). The Brooklyn Bridge construction begins. Steel wire suspension. It links the bedroom (Brooklyn) to the office (Manhattan). It is the cathedral of the age. Chicago burns (1871), clearing the slate for the skyscraper.",
          "key_manifestations": [
            "Brooklyn Bridge construction start",
            "Great Chicago Fire",
            "Paris Commune (Barricades)",
            "Ringstrasse in Vienna"
          ]
        },
        "1874": {
          "salience_share": 12.5,
          "description": "Electricity Enters (+1.0%). The Jablochkoff Candle lights Paris. The telephone connects offices. The 'Department Store' (Macy's, Harrods) becomes the temple of consumption. The city is a machine for shopping.",
          "key_manifestations": [
            "Wanamaker's Grand Depot",
            "Bell's Telephone",
            "Proposed NYC Elevated Rail",
            "Impressionist Cityscapes (Monet/Renoir)"
          ]
        },
        "1879": {
          "salience_share": 14.0,
          "description": "The Skyscraper Embryo (+1.5%). The electric elevator (Siemens 1880). The high land values in the Chicago Loop force upward growth. The 'Dumbbell Tenement' in NYC packs people like sardines. Jacob Riis starts photographing 'How the Other Half Lives.'",
          "key_manifestations": [
            "First Electric Elevator (Siemens)",
            "Dumbbell Tenement design",
            "Pullman Company Town (Industrial order)",
            "Zola's 'Nana' (Parisian underbelly)"
          ]
        },
        "1884": {
          "salience_share": 16.5,
          "description": "The Skyscraper Born (+2.5%). The Home Insurance Building (Chicago, 1885). Steel frame construction. The walls don't hold the weight; the skeleton does. This allows for windows and height. The 'Statue of Liberty' (1886) becomes the icon of the global migrant arriving at the city.",
          "key_manifestations": [
            "Home Insurance Building (Jenney)",
            "Statue of Liberty dedication",
            "Brooklyn Bridge completion",
            "Gottlieb Daimler's motorcycle (ICE mobility)"
          ]
        },
        "1889": {
          "salience_share": 18.0,
          "description": "Electric Transit (+1.5%). The Streetcar Suburb. Sprague's electric trolley (Richmond) spreads everywhere. The city radius expands to 10 miles. The 'City Beautiful' movement (Chicago World's Fair 1893 prep) seeks to impose classical order on industrial chaos.",
          "key_manifestations": [
            "Richmond Electric Streetcar",
            "Eiffel Tower (Vertical dominance)",
            "Hull House (Urban social work)",
            "Riis' 'How the Other Half Lives'"
          ]
        },
        "1894": {
          "salience_share": 20.0,
          "description": "The White City (+2.0%). The Columbian Exposition (1893). Burnham's vision of a white, neoclassical city inspires civic centers across the US. But the 'Pullman Strike' reveals the class war underneath. The 'El' (Elevated rail) darkens the streets of Chicago and NY.",
          "key_manifestations": [
            "World's Columbian Exposition",
            "Chicago 'El' expansion",
            "Tower Bridge (London)",
            "Sullivan's 'The Tall Office Building Artistically Considered'"
          ]
        },
        "1899": {
          "salience_share": 22.5,
          "description": "The Subway Era (+2.5%). Paris Metro (1900), NYC Subway (1904 prep). The electric train goes underground, clearing the streets. The 'Flatiron Building' (1902) proves the skyscraper can be art. Howard publishes 'Garden Cities of To-morrow,' proposing the anti-city suburb.",
          "key_manifestations": [
            "Howard's 'Garden Cities of To-morrow'",
            "Paris Metro opening",
            "Flatiron Building construction",
            "Dreiser's 'Sister Carrie' (Urban allure)"
          ]
        },
        "1904": {
          "salience_share": 25.0,
          "description": "The Metropolis (+2.5%). NYC Subway opens. London is the world's largest city (6.5m). The automobile begins to appear, initially a toy, soon a tyrant. The 'Zoning' concept emerges to separate factories from homes (and races from races).",
          "key_manifestations": [
            "NYC Subway opening",
            "Burnham's Plan of Chicago",
            "San Francisco Earthquake/Fire (Rebuilding)",
            "Simmel's 'The Metropolis and Mental Life'"
          ]
        },
        "1909": {
          "salience_share": 27.5,
          "description": "Vertical Zoning (+2.5%). The 1916 NYC Zoning Resolution (prep) is driven by the Equitable Building casting a 7-acre shadow. It mandates 'setbacks,' creating the wedding-cake style. The Woolworth Building (1913) is the 'Cathedral of Commerce.'",
          "key_manifestations": [
            "Woolworth Building",
            "Futurist Manifesto (City of Speed)",
            "Grand Central Terminal",
            "Ford Model T (The anti-urban vector)"
          ]
        },
        "1914": {
          "salience_share": 29.0,
          "description": "War and Migration (+1.5%). The 'Great Migration' of African Americans to Northern cities begins. The Ghetto forms (Harlem). Industrial mobilization draws millions to urban centers. Rent control is introduced as a war measure.",
          "key_manifestations": [
            "Great Migration begins",
            "NYC Zoning Resolution of 1916",
            "Chicago Race Riot of 1919 (Urban friction)",
            "Duchamp's 'Fountain' (Urban detritus as art)"
          ]
        },
        "1919": {
          "salience_share": 32.0,
          "description": "The Roaring Metropolis (+3.0%). The Jazz Age city. The skyline of NYC explodes. Art Deco. The car begins to clog the streets. The 'Traffic Light' is standardized. Le Corbusier proposes the 'Radiant City'\u2014towers in a park, bulldozing the past.",
          "key_manifestations": [
            "Le Corbusier's 'Contemporary City'",
            "Hollywood (The dream factory city)",
            "Chrysler Building planning",
            "Fritz Lang's 'Metropolis'"
          ]
        },
        "1924": {
          "salience_share": 35.0,
          "description": "The Skyscraper Race (+3.0%). Chrysler vs Bank of Manhattan vs Empire State. The peak of the first skyscraper age. The 'Regional Plan of New York' envisions a city of highways. Suburbia expands (Radburn, NJ).",
          "key_manifestations": [
            "Empire State Building construction start",
            "Regional Plan of New York",
            "Radburn, NJ (Town for the Motor Age)",
            "The Jazz Singer (Urban sound)"
          ]
        },
        "1929": {
          "salience_share": 33.0,
          "description": "The Vertical Crash (-2.0%). The Empire State Building opens (1931) empty ('Empty State Building'). Construction halts. Hoovervilles (shanty towns) appear in Central Park. The city is bankrupt. The 'Athens Charter' (CIAM) codifies modernist urbanism: functional segregation.",
          "key_manifestations": [
            "Empire State Building opening",
            "Athens Charter (CIAM)",
            "Hoovervilles",
            "Rockefeller Center (Private urban planning)"
          ]
        },
        "1934": {
          "salience_share": 36.0,
          "description": "Public Housing (+3.0%). The New Deal funds the first public housing projects. Slum clearance. Robert Moses begins to reshape NYC with parkways and bridges, prioritizing the car over the neighborhood. The 'Greenbelt Towns' experiment with planned communities.",
          "key_manifestations": [
            "Housing Act of 1937",
            "Robert Moses' Triborough Bridge",
            "Greenbelt Towns",
            "Broadacre City (Frank Lloyd Wright's anti-city)"
          ]
        },
        "1939": {
          "salience_share": 38.0,
          "description": "The City at War (+2.0%). The city becomes a target. The Blitz (London). Strategic Bombing. The realization that density = vulnerability. Post-war planning focuses on dispersal and 'Garden Cities.'",
          "key_manifestations": [
            "The Blitz",
            "Futurama (GM's highway vision at World's Fair)",
            "Warsaw Ghetto",
            "Hopper's 'Nighthawks' (Urban isolation)"
          ]
        },
        "1944": {
          "salience_share": 42.0,
          "description": "Suburban Flight (+4.0%). The GI Bill and highways enable the explosion of Suburbia. Levittown (1947). The 'White Flight' drains the tax base of the inner city. The 'shopping mall' is invented. The city core begins to rot.",
          "key_manifestations": [
            "Levittown, NY",
            "Hiroshima (The ultimate urban death)",
            "Le Corbusier's Unit\u00e9 d'Habitation",
            "Noir Film (The dark city)"
          ]
        },
        "1949": {
          "salience_share": 45.0,
          "description": "Urban Renewal (+3.0%). The 'Housing Act of 1949'. 'Blight' is the enemy. The solution is the bulldozer. High-rise projects (The Projects) replace tenements. They isolate the poor. The Interstate Highway Act (1956) cuts trenches through neighborhoods.",
          "key_manifestations": [
            "Housing Act of 1949",
            "Pruitt-Igoe construction",
            "Seagram Building (Glass Box style)",
            "Los Angeles Freeway system"
          ]
        },
        "1954": {
          "salience_share": 48.0,
          "description": "The Megalopolis (+3.0%). Gottmann coins 'Megalopolis' for the Boston-Washington corridor. The car city (LA) becomes the model. Brasilia is built from scratch (1956)\u2014the ultimate modernist error, designed from an airplane, unliveable on the ground.",
          "key_manifestations": [
            "Construction of Brasilia",
            "Guggenheim Museum (NY)",
            "West Side Story (Gang turf)",
            "Jane Jacobs vs Robert Moses (Washington Square Park)"
          ]
        },
        "1959": {
          "salience_share": 50.0,
          "description": "The Death and Life (+2.0%). Jane Jacobs publishes 'The Death and Life of Great American Cities' (1961). A devastating critique of rational planning. She defends the 'ballet of the sidewalk.' The Berlin Wall (1961) divides a city physically. The 'Container' moves the port out of the city, killing the waterfront economy.",
          "key_manifestations": [
            "Jane Jacobs' 'Death and Life'",
            "Berlin Wall",
            "Penn Station Demolition",
            "Archigram (Plug-in City)"
          ]
        },
        "1964": {
          "salience_share": 48.0,
          "description": "Urban Crisis (-2.0%). Riots in Watts, Detroit, Newark. The 'Long Hot Summers.' The inner city is on fire. The middle class flees. 'Stagflation' and crime destroy the urban brand. Architecture turns to 'Brutalism'\u2014bunkers for civic institutions.",
          "key_manifestations": [
            "Watts Riots",
            "Kerner Commission Report",
            "Habitat 67 (Montreal)",
            "Boston City Hall (Brutalism)"
          ]
        },
        "1969": {
          "salience_share": 45.0,
          "description": "The Rot (-3.0%). NYC Fiscal Crisis (1975 prep). 'Ford to City: Drop Dead.' The South Bronx looks like Dresden. The Sears Tower (1973) and WTC (1973) are built, vast fortresses of commerce disconnected from the street. The 'Loft' lifestyle begins in SoHo (artists squatting in dead factories).",
          "key_manifestations": [
            "World Trade Center completion",
            "Sears Tower completion",
            "Pruitt-Igoe demolition (Death of Modernism)",
            "Warriors (film)"
          ]
        },
        "1974": {
          "salience_share": 48.0,
          "description": "Gentrification Begins (+3.0%). The 'Back to the City' movement. Brownstoners. Historic Preservation fights back. Faneuil Hall (Boston) invents the 'Festival Marketplace'\u2014turning the dead port into a mall. Lagos and Mexico City explode in size (Slum urbanism).",
          "key_manifestations": [
            "Faneuil Hall Marketplace",
            "NYC landmarks law",
            "Koolhaas' 'Delirious New York'",
            "Blade Runner (Cyberpunk city)"
          ]
        },
        "1979": {
          "salience_share": 52.0,
          "description": "The Global City (+4.0%). Sassen's concept. London and NY decouple from their nations and become command nodes for global capital (Cluster 13). Canary Wharf and Battery Park City. The 'Gated Community' rises in the suburbs. Shenzhen is founded (1980)\u2014the first Instant City.",
          "key_manifestations": [
            "Battery Park City",
            "Canary Wharf planning",
            "Shenzhen Special Economic Zone",
            "Escape from New York"
          ]
        },
        "1984": {
          "salience_share": 55.0,
          "description": "New Urbanism (+3.0%). Seaside, FL. A return to the porch and the walkable street (simulation). The 'Broken Windows' theory leads to aggressive policing in NY. The 'Edge City' (Garreau) forms\u2014office clusters at highway interchanges.",
          "key_manifestations": [
            "Seaside, FL built",
            "Garreau's 'Edge City'",
            "Akira (Neo-Tokyo)",
            "Lloyd's Building (High-tech architecture)"
          ]
        },
        "1989": {
          "salience_share": 60.0,
          "description": "Asian Verticality (+5.0%). The Asian Tigers build up. Hong Kong, Singapore, Shanghai (Pudong). The skyscraper returns to the East. The 'Favela' and 'Slum' become the dominant form of urbanism for the global south (Planet of Slums).",
          "key_manifestations": [
            "Development of Pudong (Shanghai)",
            "Petronas Towers planning",
            "Mike Davis' 'City of Quartz'",
            "SimCity released"
          ]
        },
        "1994": {
          "salience_share": 65.0,
          "description": "The Bilbao Effect (+5.0%). Guggenheim Bilbao (1997). 'Starchitects.' The city uses architecture as branding to attract tourism/capital. Times Square is 'Disneyfied.' The city is safe, expensive, and curated. The 'Creative Class' (Florida) theory drives policy.",
          "key_manifestations": [
            "Guggenheim Bilbao (Gehry)",
            "Times Square cleanup",
            "Kowloon Walled City demolition",
            "Richard Florida's 'Rise of the Creative Class'"
          ]
        },
        "1999": {
          "salience_share": 68.0,
          "description": "Smart Growth (+3.0%). LEED certification. Transit-Oriented Development (TOD). The realization that sprawl is bankrupting municipalities. High Speed Rail connects cities into mega-regions. Dubai begins its ascent (Burj Al Arab).",
          "key_manifestations": [
            "Burj Al Arab",
            "London Congestion Charge intro",
            "High Line planning",
            "The Wire (The city left behind)"
          ]
        },
        "2004": {
          "salience_share": 75.0,
          "description": "Peak Urban (+7.0%). 2008: More than 50% of humans live in cities. The Burj Khalifa (2010) breaks all records. China consumes more concrete in 3 years than the US did in the 20th century. Ghost Cities in China. The 'Slumdog Millionaire' narrative.",
          "key_manifestations": [
            "Global Urban population > 50%",
            "Burj Khalifa",
            "Beijing Olympics (Bird's Nest)",
            "Masdar City (Zero carbon failure)"
          ]
        },
        "2009": {
          "salience_share": 78.0,
          "description": "The Smart City (+3.0%). Sensors, data, optimization. Songdo, Korea. Sidewalk Labs. The city as a platform. Uber changes the logic of transport. The 'Super-tall' pencil towers in NYC (Billionaire's Row) purely for asset parking.",
          "key_manifestations": [
            "Hudson Yards construction",
            "432 Park Avenue",
            "Uber launch",
            "High Line opening"
          ]
        },
        "2014": {
          "salience_share": 76.0,
          "description": "The Housing Crisis (-2.0%). Success kills the city. Rents skyrocket. Homelessness explodes in SF/LA. The 'YIMBY' vs 'NIMBY' war. Grenfell Tower fire (2017) exposes the cheap cladding of neoliberal renovation. Neom is announced\u2014the linear city.",
          "key_manifestations": [
            "Grenfell Tower Fire",
            "YIMBY movement",
            "The Line (Neom) announced",
            "Salesforce Tower (SF)"
          ]
        },
        "2019": {
          "salience_share": 70.0,
          "description": "The Donut Effect (-6.0%). COVID-19 empties the downtowns. Remote work decouples job from location. The '15-Minute City' becomes the new ideal. Suburbs boom again. The 'Office Apocalypse' threatens municipal budgets.",
          "key_manifestations": [
            "COVID-19 empty streets",
            "15-Minute City concept (Paris)",
            "Work From Home normalization",
            "Office vacancy rates spike"
          ]
        },
        "2024": {
          "salience_share": 72.0,
          "description": "Adaptive Reuse (+2.0%). Converting offices to apartments. The struggle to save the CBD. Climate Gentrification (moving to higher ground). Jakarta is sinking; Indonesia builds Nusantara. The city fights for survival against the digital ether.",
          "key_manifestations": [
            "Nusantara construction",
            "Office-to-Resi conversions",
            "NYC Congestion Pricing (paused)",
            "The Sphere (Las Vegas - immersive architecture)"
          ]
        }
      }
    },
    "13_capital_market_abstraction": {
      "name": "Capital Market Abstraction",
      "description": "This eigencluster represents the virtualization of value. It tracks the evolution of money from physical commodities (gold/silver) to state-backed paper, to corporate equity, to mathematical derivatives, and finally to decentralized digital ledgers. It is the history of financial engineering\u2014the attempt to separate risk from the asset and trade it independently.",
      "trajectory": {
        "1789": {
          "salience_share": 1.5,
          "description": "The Crisis of Paper. The French Revolution issues 'Assignats' backed by confiscated church land. They hyperinflate, proving that value requires trust, not just decrees. In the US, Alexander Hamilton proposes the First Bank of the United States (1790 prep), arguing that 'National Debt is a National Blessing' if managed, creating the concept of federal credit.",
          "key_manifestations": [
            "Issuance of the Assignat",
            "Hamilton's Report on Public Credit",
            "Buttonwood Agreement (Origins of NYSE)",
            "Adam Smith's 'Wealth of Nations' (Invisible Hand)"
          ]
        },
        "1794": {
          "salience_share": 1.8,
          "description": "Speculation and Crash. The Duer Panic (1792) in New York is the first US financial crash, requiring a central bank bailout. It proves that markets are prone to mania. The French economy returns to metal coinage after the Assignat collapse, a 'hard money' reaction to abstraction failure.",
          "key_manifestations": [
            "Duer Panic of 1792",
            "Jay Treaty (restoring commercial credit with UK)",
            "Collapse of the Assignat",
            "Establishment of the First Bank of the United States"
          ]
        },
        "1799": {
          "salience_share": 2.0,
          "description": "War Finance. The Napoleonic Wars are funded by British debt ('Consols'). The City of London becomes the bond market of the world. Napoleon establishes the *Banque de France* (1800) to stabilize the currency, learning from the revolutionary disaster.",
          "key_manifestations": [
            "Consols (British Government Bonds)",
            "Founding of the Banque de France",
            "Nathan Rothschild arrives in London",
            "Income Tax introduced in UK (to pay interest on debt)"
          ]
        },
        "1804": {
          "salience_share": 2.2,
          "description": "Mercantile Credit. The Louisiana Purchase (1803) is financed by Baring Brothers and Hope & Co. It is a geopolitical transaction facilitated by private bankers. The US pays Napoleon in bonds, not gold. This demonstrates the power of the bond market to alter maps.",
          "key_manifestations": [
            "Financing of the Louisiana Purchase",
            "Code de Commerce (French commercial law)",
            "End of the First Bank of US charter (1811 prep)",
            "Ricardo's early monetary writings"
          ]
        },
        "1809": {
          "salience_share": 2.5,
          "description": "Bullion Controversy. The Bank of England suspends convertibility (1797-1821). The Pound floats. Ricardo writes 'The High Price of Bullion,' arguing that inflation is caused by overprinting notes. This establishes the intellectual basis for the Gold Standard\u2014money must be tethered to reality.",
          "key_manifestations": [
            "Ricardo's 'The High Price of Bullion'",
            "Bullion Committee Report",
            "Fletcher v. Peck (Contract sanctity)",
            "Rothschild's gold smuggling for Wellington"
          ]
        },
        "1814": {
          "salience_share": 3.0,
          "description": "The Bond Vigilantes. The Rothschilds use their courier network to know of Napoleon's defeat at Waterloo (1815) before the government, making a fortune in bonds. This mythologizes the idea that information equals capital. The Second Bank of the United States is chartered (1816) to fix post-war inflation.",
          "key_manifestations": [
            "Battle of Waterloo financial impact",
            "Chartering of the Second Bank of the US",
            "Corn Laws (protecting landed capital)",
            "Ricardo's 'Principles of Political Economy'"
          ]
        },
        "1819": {
          "salience_share": 3.5,
          "description": "The First Global Crash. The Panic of 1819. Cotton prices collapse. Land speculation bubbles burst. It proves that credit cycles are global. The US develops a deep suspicion of banks ('The Monster'). *McCulloch v. Maryland* rules states cannot tax the Bank.",
          "key_manifestations": [
            "Panic of 1819",
            "McCulloch v. Maryland",
            "Resumption of Cash Payments Act (UK returning to Gold)",
            "Dartmouth College v. Woodward (Corporate personhood roots)"
          ]
        },
        "1824": {
          "salience_share": 4.0,
          "description": "Emerging Markets Mania. London investors pour money into Latin American bonds (Poyais fraud). They buy debt of countries that don't exist. This is the first modern 'Emerging Market' bubble and bust (1825). It shows the abstraction of distance blinds investors.",
          "key_manifestations": [
            "Panic of 1825",
            "Gregor MacGregor's Poyais Scheme",
            "Erie Canal Bonds (Successful infrastructure debt)",
            "Bank War brewing (Jackson)"
          ]
        },
        "1829": {
          "salience_share": 4.2,
          "description": "The Bank War. Andrew Jackson vetoes the recharter of the Second Bank (1832). He represents the agrarian distrust of 'paper money' and centralized credit. He destroys the central bank, leading to the era of 'Free Banking' and wildcat currency.",
          "key_manifestations": [
            "Jackson's Veto of the Bank",
            "Establishment of the joint-stock bank system in UK",
            "Biddle's Panic",
            "Tocqueville on American greed"
          ]
        },
        "1834": {
          "salience_share": 4.5,
          "description": "Land Speculation. The removal of indigenous tribes (Trail of Tears) opens millions of acres for speculation. Banks lend against land value. This creates a massive bubble. The 'Specie Circular' (1836) demands payment in gold, popping the bubble.",
          "key_manifestations": [
            "Specie Circular",
            "Panic of 1837",
            "Establishment of the London and Westminster Bank",
            "Balzac's 'Eug\u00e9nie Grandet' (Miserly capital)"
          ]
        },
        "1839": {
          "salience_share": 4.8,
          "description": "Corporate Form. The concept of 'General Incorporation' spreads. You don't need a special act of legislature to start a corporation. This democratizes the ability to pool capital. Railroads require capital on a scale no individual possesses, forcing the development of the stock market.",
          "key_manifestations": [
            "General Incorporation Laws (Connecticut/New York)",
            "Railway Mania begins",
            "Opium War (forcing trade balance)",
            "Proudhon's 'Property is Theft'"
          ]
        },
        "1844": {
          "salience_share": 5.5,
          "description": "Central Banking codified. The Bank Charter Act (1844) divides the Bank of England into Issue and Banking departments. It ties notes to gold reserves. This creates the 'Gold Standard' orthodoxy that stabilizes global trade but restricts liquidity. The 'Railway Mania' bubble peaks.",
          "key_manifestations": [
            "Bank Charter Act 1844",
            "Railway Mania Bubble",
            "Engels on the commercial crisis",
            "Polk's Independent Treasury"
          ]
        },
        "1849": {
          "salience_share": 6.2,
          "description": "Gold Shock. The California Gold Rush (1849) injects massive amounts of base money into the global system. It causes a long inflationary boom, solving the liquidity constraint of the 1840s. The 'Cr\u00e9dit Mobilier' (1852) in France invents the investment bank\u2014lending long on infrastructure.",
          "key_manifestations": [
            "California/Australian Gold Rushes",
            "Founding of Cr\u00e9dit Mobilier",
            "Reuter's financial news service",
            "Dickens' 'Little Dorrit' (Debtors prison)"
          ]
        },
        "1854": {
          "salience_share": 6.8,
          "description": "Limited Liability. The Limited Liability Act (1855) in UK. Investors can now only lose what they invest. This unlocks middle-class savings for the stock market. It creates the modern shareholder. The Panic of 1857 is the first railroad-driven crash.",
          "key_manifestations": [
            "Limited Liability Act 1855",
            "Panic of 1857",
            "Dred Scott decision (Slaves as capital)",
            "Cr\u00e9dit Mobilier scandal (US)"
          ]
        },
        "1859": {
          "salience_share": 7.5,
          "description": "War Finance Modernized. The US Civil War (1861) costs billions. Jay Cooke sells 'War Bonds' to the public, not just bankers. The 'Greenback' is issued\u2014fiat money to save the Union. The National Banking Acts create a uniform US currency, killing state bank notes.",
          "key_manifestations": [
            "Legal Tender Act of 1862 (Greenbacks)",
            "National Banking Acts",
            "Jay Cooke's Bond Drives",
            "Confederate hyperinflation"
          ]
        },
        "1864": {
          "salience_share": 8.0,
          "description": "The City Dominance. London is the clearinghouse of the world. Bagehot writes 'Lombard Street' (1873 prep), explaining the role of the 'Lender of Last Resort.' He argues the central bank must lend freely at high rates during a panic. The Transatlantic Cable links NYC and London markets.",
          "key_manifestations": [
            "End of US Civil War (Gold Room panic)",
            "Overend Gurney collapse (1866)",
            "Marx's 'Capital' Vol 1 (1867)",
            "Atlantic Cable (market sync)"
          ]
        },
        "1869": {
          "salience_share": 8.5,
          "description": "The Gilded Age. Black Friday (1869)\u2014Jay Gould tries to corner the Gold market. It shows the fragility of the financial system to manipulation. The 'Trust' emerges as a financial vehicle to monopolize industries (Standard Oil).",
          "key_manifestations": [
            "Black Friday Gold Panic",
            "Cr\u00e9dit Mobilier Scandal exposed",
            "Standard Oil Trust formation",
            "Coinage Act of 1873 ('Crime of 73' - demonetizing silver)"
          ]
        },
        "1874": {
          "salience_share": 9.0,
          "description": "The Gold Standard Era. Germany adopts Gold (1873), forcing the world to follow. A deflationary era begins (The Long Depression). Farmers debt burden rises, leading to the 'Free Silver' movement. The Coupon Clipper becomes the archetype of the leisure class.",
          "key_manifestations": [
            "Resumption Act of 1875 (US back to Gold)",
            "Panic of 1873",
            "Universal Postal Union (facilitating remittances)",
            "Trollope's 'The Way We Live Now' (Financial fraud)"
          ]
        },
        "1879": {
          "salience_share": 9.5,
          "description": "Managerial Capitalism. The separation of ownership (stockholders) and control (managers) begins. Railroads are too complex for owners to run. The 'Dow Jones Average' (1896 prep) concept begins\u2014indexing the market to track 'The Economy.'",
          "key_manifestations": [
            "Return of US to Gold Standard",
            "Trust boom",
            "Henry George's 'Progress and Poverty'",
            "Egypt's bankruptcy (Financial imperialism)"
          ]
        },
        "1884": {
          "salience_share": 10.0,
          "description": "Imperial Finance. The 'Scramble for Africa' is driven by surplus capital seeking higher returns than available in Europe (Lenin's thesis). Chartered Companies (Rhodes) act as sovereign hedge funds. The Rand Gold Rush (1886) solves the global gold shortage.",
          "key_manifestations": [
            "Witwatersrand Gold Rush",
            "Chartered Company expansion",
            "Panic of 1884",
            "Baring Crisis (1890 prep)"
          ]
        },
        "1889": {
          "salience_share": 11.0,
          "description": "The Rescue. The Baring Crisis (1890). The Bank of England organizes a bailout of Baring Brothers to prevent systemic collapse. This confirms the 'Too Big to Fail' doctrine. The Sherman Antitrust Act (1890) tries to break the financial concentration.",
          "key_manifestations": [
            "Baring Crisis bailout",
            "Sherman Antitrust Act",
            "Sherman Silver Purchase Act",
            "Carnegie's 'Gospel of Wealth'"
          ]
        },
        "1894": {
          "salience_share": 12.0,
          "description": "The Banker as King. J.P. Morgan bails out the US Treasury (1895). He lends gold to the government. This highlights the weakness of the US state vs. private capital. The 'Cross of Gold' speech (1896) is the populist scream against the deflationary peg.",
          "key_manifestations": [
            "J.P. Morgan's Gold Deal",
            "Bryan's 'Cross of Gold' speech",
            "Panic of 1893 aftermath",
            "Dow Jones Industrial Average launch (1896)"
          ]
        },
        "1899": {
          "salience_share": 13.0,
          "description": "Merger Mania. US Steel (1901) becomes the first billion-dollar corporation. It is a financial creation, merging steel mills to kill competition. Wall Street is now the master of Industry. Veblen critiques 'Pecuniary Emulation.'",
          "key_manifestations": [
            "Formation of US Steel",
            "Gold Standard Act of 1900",
            "Veblen's 'Theory of the Leisure Class'",
            "Boxer Indemnity (Financial punishment)"
          ]
        },
        "1904": {
          "salience_share": 14.0,
          "description": "The Panic of 1907. A trust company failure triggers a run. There is no central bank. J.P. Morgan locks bankers in his library to force a bailout. This 'One Man Central Bank' scares the political class into planning the Federal Reserve.",
          "key_manifestations": [
            "Panic of 1907",
            "Jekyll Island Meeting (Fed planning)",
            "Pujo Committee (Investigating Money Trust)",
            "Armstrong Investigation (Insurance)"
          ]
        },
        "1909": {
          "salience_share": 15.0,
          "description": "The Fed. The struggle to create a US central bank. It is a compromise: private ownership, public control. The 16th Amendment (Income Tax) allows the state to tax capital directly, shifting the revenue base from tariffs.",
          "key_manifestations": [
            "16th Amendment ratification",
            "Federal Reserve Act (1913)",
            "Hilferding's 'Finance Capital'",
            "Lloyd George's People's Budget"
          ]
        },
        "1914": {
          "salience_share": 18.0,
          "description": "War Debt. WWI turns the US from a debtor to a creditor nation. The Allies borrow billions from Wall Street. The Gold Standard is suspended. Inflation runs rampant. The financial center of gravity shifts from London to New York.",
          "key_manifestations": [
            "Suspension of Gold Standard in Europe",
            "US Liberty Bond drives",
            "Closing of NYSE (1914)",
            "Keynes' 'Economic Consequences of the Peace'"
          ]
        },
        "1919": {
          "salience_share": 19.0,
          "description": "Hyperinflation. The Weimar Republic prints money to pay reparations and striking workers. Money dies. It destroys the German middle class. In the US, the 'Roaring Twenties' stock boom begins. The 'Investment Trust' (proto-mutual fund) becomes popular.",
          "key_manifestations": [
            "German Hyperinflation (1923)",
            "Charles Ponzi's scheme",
            "Dawes Plan",
            "Rise of Consumer Credit"
          ]
        },
        "1924": {
          "salience_share": 22.0,
          "description": "The Bubble. The Fed keeps rates low to help Britain return to Gold (1925). This liquidity fuels the US stock bubble. Margin lending explodes. 'Shoeshine boys giving tips.' The belief in a 'New Plateau' of permanent prosperity.",
          "key_manifestations": [
            "UK returns to Gold Standard",
            "Florida Land Boom",
            "Investment Trust bubble",
            "Babson's Break prediction"
          ]
        },
        "1929": {
          "salience_share": 25.0,
          "description": "The Crash. Black Tuesday. The leverage unwinds. 90% drop in DJIA. The banking system collapses (1930-33). The Gold Standard transmits the deflation globally. Countries devalue to survive. The abstraction fails; reality returns.",
          "key_manifestations": [
            "Stock Market Crash of 1929",
            "Bank of United States failure",
            "Britain abandons Gold (1931)",
            "Pecora Commission"
          ]
        },
        "1934": {
          "salience_share": 23.0,
          "description": "Regulation. The SEC is created. Glass-Steagall separates commercial and investment banking. Deposit Insurance (FDIC) ends bank runs. Gold is illegal for citizens to hold. The market is tamed by the state.",
          "key_manifestations": [
            "Securities Exchange Act of 1934",
            "Glass-Steagall Act",
            "Gold Reserve Act (Revaluation)",
            "Bretton Woods prep (White/Keynes)"
          ]
        },
        "1939": {
          "salience_share": 20.0,
          "description": "Financial Repression. During the war, interest rates are pegged low (Yield Control) to fund the debt. The market is subservient to the Treasury. Capital controls are universal. The 'Bretton Woods' conference (1944) plans the post-war order: fixed exchange rates, dollar supremacy.",
          "key_manifestations": [
            "Bretton Woods Agreement",
            "War Bond drives",
            "Yield Curve Control",
            "Lend-Lease financial web"
          ]
        },
        "1944": {
          "salience_share": 22.0,
          "description": "The Dollar Standard. The IMF and World Bank are operational. The Dollar is the anchor, pegged to gold at $35. All other currencies peg to the Dollar. This provides stability for the post-war boom. Credit cards (Diners Club, 1950) introduce the plastic abstraction of money.",
          "key_manifestations": [
            "IMF/World Bank opening",
            "Marshall Plan funding",
            "Dodge Line (Japan stabilization)",
            "Diners Club Card launch"
          ]
        },
        "1949": {
          "salience_share": 25.0,
          "description": "The Managerial Boom. Pension Funds become major players. They buy 'Nifty Fifty' stocks. The institutionalization of savings. The 'Eurodollar' market begins in London\u2014dollars held outside US regulations, the seed of shadow banking.",
          "key_manifestations": [
            "Accord of 1951 (Fed independence)",
            "Rise of Pension Funds",
            "Eurodollar market origins",
            "Markowitz Portfolio Theory"
          ]
        },
        "1954": {
          "salience_share": 28.0,
          "description": "Consumer Finance. The credit card goes mass market (Visa/Mastercard). The mortgage becomes the primary asset of the middle class (Fannie Mae). Financialization of the household.",
          "key_manifestations": [
            "Bank of America launches BankAmericard (Visa)",
            "Fannie Mae privatization (1968 prep)",
            "Modigliani-Miller theorem",
            "Galbraith's 'Affluent Society'"
          ]
        },
        "1959": {
          "salience_share": 30.0,
          "description": "The Go-Go Years. The Conglomerate boom (ITT, LTV). Financial engineering creates earnings growth through acquisition. The 'Mutual Fund' mania. The 'Paperwork Crisis' on Wall Street\u2014trading volume exceeds backend capacity.",
          "key_manifestations": [
            "Conglomerate Boom",
            "Manhattan Fund (Tsai)",
            "Paperwork Crisis (NYSE closes Wednesdays)",
            "Friedman's 'Monetary History of the US'"
          ]
        },
        "1964": {
          "salience_share": 32.0,
          "description": "Breaking the Peg. The London Gold Pool struggles to keep gold at $35. US deficits (Vietnam/Great Society) create a dollar glut. Inflation rises. The system is straining. The ATM is invented (1967), automating cash.",
          "key_manifestations": [
            "Collapse of London Gold Pool",
            "Barclays installs first ATM",
            "Creation of SDRs",
            "Go-Go Years crash"
          ]
        },
        "1969": {
          "salience_share": 35.0,
          "description": "The Nixon Shock. 1971: Nixon closes the Gold Window. The end of Bretton Woods. Currencies float. Money is now pure fiat, backed only by state authority. This unleashes volatility and the need for hedging (Derivatives). The Black-Scholes model (1973) provides the formula to price options.",
          "key_manifestations": [
            "Nixon Shock (1971)",
            "Chicago Board Options Exchange (CBOE) founding",
            "Black-Scholes Model",
            "Money Market Funds created"
          ]
        },
        "1974": {
          "salience_share": 38.0,
          "description": "Stagflation Finance. Inflation destroys bond value ('Certificates of Confiscation'). Gold soars. The Mortgage Backed Security (MBS) is invented (Lewis Ranieri). This turns housing into a tradable bond. The 'Junk Bond' market (Milken) begins to form.",
          "key_manifestations": [
            "Creation of MBS",
            "Gold legalization in US",
            "ERISA (Pension regulation)",
            "Vanguard Index Fund launch (Bogle)"
          ]
        },
        "1979": {
          "salience_share": 42.0,
          "description": "The Volcker Shock. Interest rates hit 20% to kill inflation. This crushes the Third World (Latin American Debt Crisis). Financial deregulation begins (Depository Institutions Deregulation and Monetary Control Act). The 'Leveraged Buyout' (LBO) era starts.",
          "key_manifestations": [
            "Volcker Interest Rate Hike",
            "Latin American Debt Crisis",
            "KKR's early LBOs",
            "Creation of the Swap market"
          ]
        },
        "1984": {
          "salience_share": 48.0,
          "description": "Masters of the Universe. The 1980s boom. Insider Trading scandals (Boesky). The 1987 Crash (Black Monday) is exacerbated by 'Portfolio Insurance' (algorithmic selling). It is the first computer-driven crash. The 'Big Bang' in London deregulates the City.",
          "key_manifestations": [
            "1987 Stock Market Crash",
            "Savings and Loan Crisis",
            "London 'Big Bang'",
            "Bonfire of the Vanities"
          ]
        },
        "1989": {
          "salience_share": 52.0,
          "description": "The Japan Bubble Burst. The Tokyo market collapses (1990). The 'Hedge Fund' gains prominence (Soros breaks the Bank of England, 1992). Derivatives scale up. The system is global and instant.",
          "key_manifestations": [
            "Nikkei Crash",
            "Black Wednesday (Soros vs Pound)",
            "Basel I Accords",
            "Fall of Drexel Burnham Lambert"
          ]
        },
        "1994": {
          "salience_share": 58.0,
          "description": "Irrational Exuberance. The Dot Com Bubble builds. Venture Capital becomes the engine of the economy. LTCM collapse (1998) shows that geniuses with leverage can blow up the world. The Fed bails them out. The 'Greenspan Put' is assumed.",
          "key_manifestations": [
            "Netscape IPO",
            "LTCM Collapse",
            "Asian Financial Crisis",
            "Repeal of Glass-Steagall"
          ]
        },
        "1999": {
          "salience_share": 62.0,
          "description": "The Euro. Europe adopts a single currency (1999). It creates a massive new bond market but divorces fiscal from monetary policy. The Dot Com crash (2000) destroys trillions in paper wealth. Enron reveals the 'Financialization' of corporate accounting.",
          "key_manifestations": [
            "Launch of the Euro",
            "Dot Com Crash",
            "Enron Scandal",
            "Sarbanes-Oxley Act"
          ]
        },
        "2004": {
          "salience_share": 70.0,
          "description": "The Great Moderation. The Housing Bubble. CDOs (Collateralized Debt Obligations) and CDS (Credit Default Swaps) industrialize risk. The 'Shadow Banking' system grows larger than the regulated one. Banks are leveraged 30:1. 'Quant' funds dominate.",
          "key_manifestations": [
            "Subprime Mortgage boom",
            "CDO/CDS expansion",
            "Goldman Sachs 'Securities Arbitrage'",
            "The Big Short (events)"
          ]
        },
        "2009": {
          "salience_share": 75.0,
          "description": "GFC and Bitcoin. The Global Financial Crisis (2008). The system melts down. State bailout. QE (Quantitative Easing) prints trillions. In the rubble, Satoshi Nakamoto releases Bitcoin (2009)\u2014money without a state. It is the ultimate abstraction: pure math as value.",
          "key_manifestations": [
            "Lehman Brothers Bankruptcy",
            "Quantitative Easing (QE1)",
            "Bitcoin Genesis Block",
            "Dodd-Frank Act"
          ]
        },
        "2014": {
          "salience_share": 78.0,
          "description": "Everything Bubble. Zero Interest Rate Policy (ZIRP) forces capital into risk assets. Tech Unicorns stay private longer. Crypto bubbles (ICO mania 2017). Passive Investing (ETFs) eats the market, making price discovery robotic.",
          "key_manifestations": [
            "Negative Interest Rates in Europe/Japan",
            "ICO Boom",
            "Rise of Passive/Index Funds",
            "Robinhood (Gamification of trading)"
          ]
        },
        "2019": {
          "salience_share": 85.0,
          "description": "DeFi and Stonks. COVID stimulus creates the 'Meme Stock' era (GameStop). DeFi (Decentralized Finance) attempts to rebuild banking on the blockchain (Uniswap). NFTs financialize culture. Inflation returns (2022), ending the free money era.",
          "key_manifestations": [
            "GameStop Short Squeeze",
            "FTX Collapse",
            "Inflation surge/Rate hikes",
            "Ethereum Merge"
          ]
        },
        "2024": {
          "salience_share": 88.0,
          "description": "Tokenization. BlackRock launches a Bitcoin ETF. Real World Assets (RWA) move on-chain. The merger of TradFi and DeFi. AI Trading Agents begin to dominate short-term flows. The Dollar's dominance is questioned (Dedollarization) but remains absolute due to network effects.",
          "key_manifestations": [
            "Bitcoin ETF Approval",
            "Tokenization of Treasuries",
            "BRICS currency talks",
            "AI High Frequency Trading dominance"
          ]
        }
      }
    },
    "14_aerospace_velocity_and_range": {
      "name": "Aerospace Velocity and Range",
      "description": "This eigencluster represents the conquest of the Z-axis and the annihilation of distance through speed. It tracks the evolution from lighter-than-air drift (Balloons) to powered flight (Wright), to the Jet Age, and finally to rocketry and space exploration. It is the technological vector that made the world 'small' and the universe 'accessible'.",
      "trajectory": {
        "1789": {
          "salience_share": 0.5,
          "description": "The Montgolfier Legacy. Balloons are known but dangerous toys. Their military use is limited to observation. The dream of flight is alive but technically impossible due to the lack of a lightweight power source. The atmosphere is an unexplored ocean.",
          "key_manifestations": [
            "French Aerostatic Corps (Battle of Fleurus 1794)",
            "Blanchard's Channel Crossing (1785 influence)",
            "Parachute experiments",
            "Erasmus Darwin's prophecy of 'flying chariots'"
          ]
        },
        "1904": {
          "salience_share": 2.5,
          "description": "Powered Flight. The Wright Brothers (1903) solve the control problem (Wing Warping). It is a fragile, wood-and-fabric hop. But the proof of concept exists. Santos-Dumont flies in Paris (1906). The military takes notice. Bl\u00e9riot crosses the Channel (1909), ending Britain's island security.",
          "key_manifestations": [
            "Wright Flyer patents",
            "Bl\u00e9riot's Channel Crossing",
            "Zeppelin LZ 1 flights",
            "Wells' 'War in the Air'"
          ]
        },
        "1914": {
          "salience_share": 15.0,
          "description": "The Knights of the Air. WWI accelerates aviation from scouting to combat. The 'Interrupter Gear' allows machine guns to fire through props. The 'Ace' becomes a cultural hero (Red Baron). Strategic bombing begins (Zeppelins/Gothas). The airplane becomes a weapon system.",
          "key_manifestations": [
            "Fokker Scourge",
            "Red Baron legend",
            "Gotha Raids on London",
            "NACA founding"
          ]
        },
        "1929": {
          "salience_share": 25.0,
          "description": "The Golden Age. Lindbergh crosses the Atlantic (1927). It triggers the 'Lindbergh Boom' in aviation stocks. Commercial airlines form (Pan Am). The Ford Trimotor. The Graf Zeppelin circumnavigates the globe. Flight becomes glamorous.",
          "key_manifestations": [
            "Spirit of St. Louis flight",
            "Graf Zeppelin world tour",
            "Byrd over the South Pole",
            "Saint-Exup\u00e9ry's 'Night Flight'"
          ]
        },
        "1944": {
          "salience_share": 45.0,
          "description": "The Jet and the Rocket. WWII is the crucible. The Me 262 (Jet) and V-2 (Ballistic Missile) appear. The propeller hits its physical limit. The B-29 pressurizes the cabin, allowing high-altitude bombing. The world is destroyed from the air.",
          "key_manifestations": [
            "V-2 Rocket attacks",
            "Me 262 combat debut",
            "B-29 Superfortress",
            "Chuck Yeager (Speed of sound prep)"
          ]
        },
        "1959": {
          "salience_share": 60.0,
          "description": "The Jet Age. The Boeing 707 (1958) shrinks the world. Atlantic crossing is 6 hours, not 5 days. Sputnik (1957) opens Space. The X-15 flies hypersonic. The 'Space Race' is the ultimate prestige competition.",
          "key_manifestations": [
            "Boeing 707 service",
            "Sputnik launch",
            "X-15 flights",
            "NASA Mercury Program"
          ]
        },
        "1969": {
          "salience_share": 75.0,
          "description": "The Moon. Apollo 11 (1969). The peak of the cluster. Humans leave the cradle. The Boeing 747 (1969) democratizes air travel\u2014the 'Jumbo Jet'. Concorde flies supersonic (1969). We believe we will be on Mars by 1980.",
          "key_manifestations": [
            "Apollo 11 Landing",
            "Boeing 747 launch",
            "Concorde first flight",
            "2001: A Space Odyssey"
          ]
        },
        "1989": {
          "salience_share": 65.0,
          "description": "Stagnation and Shuttle. The Challenger (1986) disaster kills the dream of routine space access. The Space Shuttle is expensive and fragile. Concorde is a niche luxury. We retreat to Low Earth Orbit (Mir/ISS). The focus shifts to unmanned probes (Voyager).",
          "key_manifestations": [
            "Challenger Disaster aftermath",
            "Voyager 2 Neptune flyby",
            "Stealth Fighter (F-117) reveal",
            "GPS constellation scaling"
          ]
        },
        "2004": {
          "salience_share": 55.0,
          "description": "The Low Cost Carrier. Ryanair/Southwest model wins. Flying is a bus ride. Security theater (TSA) after 9/11 adds friction. Concorde retires (2003). We are flying slower than in 1970. SpaceShipOne (2004) wins the X-Prize, hinting at private space.",
          "key_manifestations": [
            "Concorde retirement",
            "SpaceShipOne X-Prize win",
            "Mars Rovers (Spirit/Opportunity)",
            "Rise of Ryanair/EasyJet"
          ]
        },
        "2024": {
          "salience_share": 65.0,
          "description": "Reusability and Drones. SpaceX Starship aims for Mars. Falcon 9 makes launch cheap. Drones transform warfare (Ukraine) and logistics. eVTOLs (Air Taxis) are certified. Hypersonic missiles return velocity as a threat. The cluster is accelerating again.",
          "key_manifestations": [
            "SpaceX Starship tests",
            "Drone warfare in Ukraine",
            "Artemis Moon Program",
            "Joby Aviation certification"
          ]
        }
      }
    },
    "15_mass_media_synchronization": {
      "name": "Mass Media Synchronization",
      "description": "This eigencluster represents the industrialization of storytelling and information. It tracks the ability to broadcast a single signal to a mass audience, creating a shared reality. From the Penny Press to Radio, Cinema, and TV, it homogenized culture. Its recent decline is due to the internet fragmenting this shared reality into algorithmic niches.",
      "trajectory": {
        "1834": {
          "salience_share": 5.0,
          "description": "The Penny Press. The *New York Sun* (1833) sells for a penny. Ad-supported model. It invents 'News' (crime, human interest) rather than just political essays. It creates a mass public for the first time.",
          "key_manifestations": [
            "The New York Sun",
            "Tocqueville on the Press",
            "Daumier's caricatures",
            "Pickwick Papers (Serial fiction)"
          ]
        },
        "1899": {
          "salience_share": 15.0,
          "description": "Yellow Journalism. Hearst vs Pulitzer. The Press starts a war (Spanish-American). Headlines scream. Mass literacy means mass manipulation. Cinema (Lumiere) begins to create a visual language.",
          "key_manifestations": [
            "Hearst's 'Remember the Maine'",
            "M\u00e9li\u00e8s' 'Trip to the Moon'",
            "Daily Mail founded",
            "Marconi's wireless news"
          ]
        },
        "1924": {
          "salience_share": 35.0,
          "description": "Radio and Hollywood. The Studio System stabilizes. Chaplin is the most famous man in the world. Radio networks (NBC/CBS) form. A national culture emerges\u2014everyone laughs at the same joke at the same time.",
          "key_manifestations": [
            "Formation of NBC",
            "Chaplin's 'The Gold Rush'",
            "Time Magazine founded",
            "Bernays' 'Propaganda'"
          ]
        },
        "1954": {
          "salience_share": 65.0,
          "description": "The TV Hearth. 'I Love Lucy' is watched by 70% of the country. The Cronkite News is truth. The 'Water Cooler' moment. Advertising psychology creates the 'Consumer.' Culture is perfectly synchronized.",
          "key_manifestations": [
            "I Love Lucy peak ratings",
            "Disneyland opening",
            "Playboy founded",
            "Elvis on Ed Sullivan"
          ]
        },
        "1984": {
          "salience_share": 60.0,
          "description": "Cable Fragmentation. CNN (1980) and MTV (1981) begin to slice the mass audience. The Blockbuster Movie (Star Wars/E.T.) still unites, but the cracks show. The 'Fairness Doctrine' repeal (1987) allows Talk Radio (Rush Limbaugh) to polarize.",
          "key_manifestations": [
            "MTV launch",
            "CNN 24hr news",
            "Repeal of Fairness Doctrine",
            "Live Aid"
          ]
        },
        "2024": {
          "salience_share": 30.0,
          "description": "Algorithmic Atomization. The 'Mass' is dead. We live in filter bubbles (TikTok/Twitter). There is no shared reality, only 'Content.' Streaming services fracture the TV model. AI generates personalized slop. The synchronization is broken.",
          "key_manifestations": [
            "TikTok 'For You' Page dominance",
            "Barbenheimer (Last gasp of mass cinema)",
            "Decline of Cable TV",
            "MrBeast (Algorithm native star)"
          ]
        }
      }
    },
    "16_molecular_genetic_engineering": {
      "name": "Molecular Genetic Engineering",
      "description": "This eigencluster represents the shift from observing biology to editing it. It treats life as information processing. It tracks the path from Mendel's peas to the Double Helix, Recombinant DNA, the Human Genome Project, and CRISPR. It is the digitization of the biosphere.",
      "trajectory": {
        "1954": {
          "salience_share": 5.0,
          "description": "The Double Helix. Watson, Crick, Franklin (1953). We know the structure of the code. It is digital (A,C,T,G). This shifts biology from taxonomy to information science. The Central Dogma is formulated.",
          "key_manifestations": [
            "Watson and Crick Nature paper",
            "Sanger sequences Insulin",
            "Miller-Urey experiment",
            "HeLa cell line standardized"
          ]
        },
        "1974": {
          "salience_share": 15.0,
          "description": "Cut and Paste. Cohen and Boyer (1973) invent Recombinant DNA. We can move genes between species. Genentech (1976) is founded. Synthetic Insulin. The Asilomar Conference self-regulates the god-like power.",
          "key_manifestations": [
            "Cohen-Boyer Patent",
            "Asilomar Conference",
            "Founding of Genentech",
            "Sanger Sequencing invented"
          ]
        },
        "1999": {
          "salience_share": 35.0,
          "description": "The Book of Life. The Human Genome Project races Celera. We read the source code of a human. Dolly the Sheep (1996) proves mammals can be cloned. GMO food enters the market. The fear of 'Gattaca' arises.",
          "key_manifestations": [
            "Human Genome Project completion",
            "Dolly the Sheep",
            "Roundup Ready Soybeans",
            "Jesse Gelsinger death (Gene therapy setback)"
          ]
        },
        "2024": {
          "salience_share": 65.0,
          "description": "The Editor. CRISPR (2012) matures. We can edit genes cheaply. Vertex gets FDA approval for CRISPR cure for Sickle Cell (2023). AlphaFold (AI) solves protein structure. We are entering the age of 'Generative Biology'\u2014designing proteins that never existed.",
          "key_manifestations": [
            "Casgevy approval (CRISPR)",
            "AlphaFold 3",
            "Novo Nordisk (GLP-1 impact)",
            "Synthetic Yeast genome"
          ]
        }
      }
    }
  }
} as const;

const progressPreset: PresetConfig = {
  id: 'progress_manifold',
  name: 'Technological Progress Manifold (1789-2025)',
  description: 'Chronicles major industrial and technological eigenclusters from the first steam revolutions to contemporary infrastructure.',
  startYear: '1789',
  endYear: '2025',
  clusterStart: 1,
  clusterEnd: 20,
  periodicity: 5,
  context: 'Industrial & Technological Progress',
  model: 'o1-mini',
  cachedResult: progressData
};

export default progressPreset;
