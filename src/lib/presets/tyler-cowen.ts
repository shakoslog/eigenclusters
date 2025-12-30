import type { PresetConfig } from './types';

export const tylerCowenData = {
    "metadata": {
      "period": "1940-2060",
      "interval": "10 years",
      "cluster_range": "1-5",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_technological_innovation_cycles [↗] (11.2%)",
        "2_economic_growth_sustainability [↘] (8.5%)",
        "3_declining_dynamism_and_mobility [→] (7.8%)",
        "4_inequality_and_labor_market_polarization [↘] (7.0%)",
        "5_regulatory_accumulation_and_institutional_sclerosis [↘] (6.0%)",
        "6_ai_governance_and_alignment [↗] (5.8%)",
        "7_corporate_evolution_and_concentration [→] (5.2%)",
        "8_information_technology_and_matching_efficiencies [↗] (4.8%)",
        "9_biotech_revolution_impacts [↗] (4.5%)",
        "10_climate_adaptation_strategies [↗] (4.3%)",
        "11_neurodiversity_and_cognitive_styles [→] (3.6%)",
        "12_digital_governance_models [↗] (3.5%)",
        "13_decentralized_innovation_systems [↗] (3.2%)",
        "14_post_scarcity_transition_conflicts [↗] (3.0%)",
        "15_intellectual_property_and_innovation_barriers [↘] (2.6%)",
        "16_fiscal_challenges_and_demographic_shifts [→] (2.4%)",
        "17_geopolitical_multipolarity_dynamics [↗] (2.2%)",
        "18_space_economy_development [↗] (2.0%)",
        "19_longevity_revolution_implications [↗] (1.8%)",
        "20_radical_energy_abundance_effects [↗] (1.6%)"
      ]
    },
    "clusters": {
      "1_technological_innovation_cycles": {
        "name": "Technological Innovation Cycles",
        "description": "This cluster represents Cowen's central thesis about cycles of technological innovation, particularly the phenomenon he termed 'The Great Stagnation' - a period from approximately 1970 to 2010 when fundamental innovation slowed, followed by potential renewed acceleration with AI, biotech, and other breakthrough technologies. It examines how these cycles profoundly impact economic growth, social structures, and cultural development, with emerging patterns of innovation diffusion and societal adaptation.",
        "trajectory": {
          "1940": {
            "salience_share": 7,
            "description": "World War II catalyzes rapid technological innovation in weaponry, medicine, computing, and materials science - creating what Cowen would later identify as the foundation for post-war technological boom.",
            "key_manifestations": [
              "Development of radar technology and early computing with ENIAC",
              "Nuclear energy innovations culminating in the atomic bomb",
              "Antibiotics development and mass production techniques",
              "Aviation advances producing jet engines and rocket technology"
            ]
          },
          "1950": {
            "salience_share": 8.5,
            "description": "The post-war period features what Cowen calls the 'low-hanging fruit' of technological innovation - transformative technologies with broad economic impact and rising productivity.",
            "key_manifestations": [
              "Transistor invention (1947) and subsequent electronics revolution",
              "Commercial jet aviation transforming travel and trade",
              "Polio vaccine and antibiotic development revolutionizing medicine",
              "Interstate Highway System construction enabling mobility and commerce"
            ]
          },
          "1960": {
            "salience_share": 9,
            "description": "The peak of what Cowen identifies as the high-growth innovation era with space exploration, computing advances, and infrastructure developments having broad economic impacts.",
            "key_manifestations": [
              "Apollo program culminating in the 1969 moon landing",
              "Early computer networking (ARPANET) laying internet foundations",
              "Commercial mainframe computing transforming business processes",
              "Integrated circuit development enabling electronic miniaturization"
            ]
          },
          "1970": {
            "salience_share": 7,
            "description": "The beginning of Cowen's 'Great Stagnation' as fundamental innovation slows in physical technologies while energy crises highlight technological limitations in core infrastructure.",
            "key_manifestations": [
              "Energy crises revealing limits in alternative energy technologies",
              "Microprocessor invention (Intel 4004) starting personal computing",
              "Concorde jet representing the peak and plateau of aviation speed",
              "Space Shuttle program showing diminishing returns in space exploration"
            ]
          },
          "1980": {
            "salience_share": 5,
            "description": "The Great Stagnation deepens with innovation concentrated in information technology but limited breakthrough in energy, transportation, or material living standards - a key evidence point in Cowen's thesis.",
            "key_manifestations": [
              "Personal computer revolution (IBM PC, Apple Macintosh)",
              "Stagnation in transport speeds compared to 1960s advances",
              "Limited pharmaceutical breakthroughs compared to earlier decades",
              "Computing advances failing to generate expected productivity gains"
            ]
          },
          "1990": {
            "salience_share": 4.5,
            "description": "Information technology advances with the internet revolution, but as Cowen notes, with less transformative impact on median incomes and productivity than earlier technological waves.",
            "key_manifestations": [
              "World Wide Web creation and commercialization",
              "Dot-com boom reflecting both promise and hype of digital technology",
              "Continued flatline in transportation technology innovation",
              "Telecommunications advances creating global connectivity"
            ]
          },
          "2000": {
            "salience_share": 4,
            "description": "The Great Stagnation reaches its nadir in Cowen's analysis, with innovation highly concentrated in entertainment and communication but minimal advances in energy, transportation, or construction.",
            "key_manifestations": [
              "Smartphone development (iPhone 2007) revolutionizing communication",
              "Continued stagnation in physical infrastructure innovation",
              "Human Genome Project completion without immediate medical payoffs",
              "Energy technology shows limited progress despite climate concerns"
            ]
          },
          "2010": {
            "salience_share": 5.5,
            "description": "Signs emerge of what Cowen tentatively identifies as the potential end of the Great Stagnation, with AI, biotechnology, and renewable energy showing increasing promise of breakthrough innovation.",
            "key_manifestations": [
              "Deep learning AI advances (IBM Watson, AlphaGo)",
              "CRISPR gene editing technology development",
              "Renewable energy costs begin rapid decline",
              "Publication of Cowen's 'The Great Stagnation' (2011) articulating the thesis"
            ]
          },
          "2020": {
            "salience_share": 8,
            "description": "The possible end of the Great Stagnation with AI, mRNA vaccines, and clean energy technologies showing transformative potential that could restore higher productivity growth - a development Cowen has cautiously noted.",
            "key_manifestations": [
              "Generative AI (GPT models, DALL-E) demonstrating transformative potential",
              "mRNA vaccine platforms enabling rapid COVID-19 vaccine development",
              "Fusion energy and advanced battery research showing breakthrough potential",
              "Remote work technologies accelerating productivity in knowledge sectors"
            ]
          },
          "2030": {
            "salience_share": 10.5,
            "description": "The full emergence of what Cowen might term a 'Second Machine Age' with AI, robotics, biotech, and energy technologies achieving transformative breakthroughs that significantly accelerate productivity growth across sectors.",
            "key_manifestations": [
              "Advanced general-purpose AI systems transforming knowledge work across domains",
              "Commercial fusion energy deployment beginning in developed economies",
              "Breakthroughs in longevity medicine extending healthy lifespans",
              "Autonomous transportation networks revolutionizing mobility and logistics"
            ]
          },
          "2040": {
            "salience_share": 12,
            "description": "A peak period of technological transformation with fundamental innovations reshaping physical infrastructure, energy systems, and biological capabilities in ways that parallel the post-WWII era's transformative impact.",
            "key_manifestations": [
              "Widespread deployment of molecular manufacturing and advanced materials",
              "Fusion energy becoming the dominant power source in developed nations",
              "Biomedical technologies effectively addressing most major diseases",
              "Space-based infrastructure creating new economic opportunities"
            ]
          },
          "2050": {
            "salience_share": 11,
            "description": "A mature phase of the innovation wave with technologies developed in previous decades becoming standardized and widely deployed, creating broad productivity benefits but with diminishing returns to further innovation in established domains.",
            "key_manifestations": [
              "Artificial general intelligence integration throughout global economy",
              "Biological aging interventions becoming standard medical care",
              "Molecular manufacturing transforming physical goods production",
              "Space-based resource utilization becoming economically significant"
            ]
          },
          "2060": {
            "salience_share": 9.5,
            "description": "Early indications of what might be a new technological plateau as major breakthroughs of the 2030-2050 period mature, with innovation shifting toward novel application domains and integration rather than fundamental capabilities.",
            "key_manifestations": [
              "Human-AI integration technologies creating new cognitive capabilities",
              "Advanced biological reprogramming enabling radical phenotype customization",
              "New materials science enabling previously impossible architectural forms",
              "Space settlements becoming economically self-sustaining communities"
            ]
          }
        }
      },
      "2_economic_growth_sustainability": {
        "name": "Economic Growth Sustainability",
        "description": "This cluster reflects Cowen's 'stubborn attachment' to sustainable economic growth as the fundamental driver of human welfare and progress. It examines historical patterns of growth, productivity, and their social impacts, while acknowledging constraints and challenges in maintaining growth trajectories in mature economies. Over time, this cluster evolves to address the tension between traditional growth metrics and broader conceptions of progress including environmental sustainability, well-being, and distributional concerns.",
        "trajectory": {
          "1940": {
            "salience_share": 6,
            "description": "War mobilization creates economic expansion but with distorted allocation of resources, setting the stage for post-war growth that Cowen identifies as historically exceptional.",
            "key_manifestations": [
              "War production increasing GDP while reducing consumer goods",
              "Government spending driving economic activity at unprecedented levels",
              "Economic planning creating full employment after Depression era",
              "Technological investments creating foundation for post-war prosperity"
            ]
          },
          "1950": {
            "salience_share": 9,
            "description": "The post-war boom represents what Cowen considers a golden age of economic growth with rising productivity, expanding middle class, and broad-based prosperity.",
            "key_manifestations": [
              "Manufacturing productivity creating broadly shared prosperity",
              "Sustained GDP growth averaging 4-5% annually",
              "Expansion of homeownership through new suburbs and mortgages",
              "Rising median incomes and decreasing inequality"
            ]
          },
          "1960": {
            "salience_share": 8.5,
            "description": "Continued strong growth with early signs of what Cowen would later identify as structural challenges to sustained expansion in a maturing economy.",
            "key_manifestations": [
              "Great Society programs expanding government's economic role",
              "Continued technological productivity improvements",
              "Rising educational attainment driving human capital development",
              "Early signs of inflationary pressures in late 1960s"
            ]
          },
          "1970": {
            "salience_share": 5.5,
            "description": "Stagflation and productivity slowdown mark the beginning of what Cowen sees as a long-term deceleration in economic growth rates in advanced economies.",
            "key_manifestations": [
              "Oil shocks causing stagflation and energy constraints",
              "Productivity growth declining sharply from post-war levels",
              "Manufacturing competition from Japan and emerging economies",
              "End of the Bretton Woods system destabilizing international finance"
            ]
          },
          "1980": {
            "salience_share": 6,
            "description": "Market-oriented reforms produce a partial growth recovery but, as Cowen notes, fail to restore the broadly-shared prosperity of earlier decades.",
            "key_manifestations": [
              "Reaganomics emphasizing deregulation and tax cuts",
              "Federal Reserve policies reducing inflation but with high unemployment",
              "Early signs of wage stagnation for middle and lower classes",
              "Growing financialization of the economy"
            ]
          },
          "1990": {
            "salience_share": 7,
            "description": "The tech boom creates a prosperity surge that Cowen views as significant but failing to fundamentally alter longer-term growth trajectory for the median worker.",
            "key_manifestations": [
              "Internet commercialization driving productivity gains",
              "Globalization accelerating with NAFTA and WTO formation",
              "Budget surpluses temporarily improving fiscal position",
              "Increasing inequality despite overall economic expansion"
            ]
          },
          "2000": {
            "salience_share": 5,
            "description": "Economic volatility with asset bubbles, financial crisis, and what Cowen identifies as mounting evidence of secular stagnation in advanced economies.",
            "key_manifestations": [
              "Dot-com bubble collapse followed by housing bubble and crash",
              "2008 financial crisis causing Great Recession",
              "Rising household debt masking stagnant income growth",
              "Declining labor force participation among working-age men"
            ]
          },
          "2010": {
            "salience_share": 4.5,
            "description": "Post-crisis recovery proves slower than historical patterns, confirming for Cowen the structural impediments to growth in mature economies.",
            "key_manifestations": [
              "Historically slow recovery from Great Recession",
              "Near-zero interest rates signaling secular stagnation",
              "Productivity growth remaining below historical averages",
              "Concentrated economic gains in technology sectors and urban centers"
            ]
          },
          "2020": {
            "salience_share": 4,
            "description": "Pandemic disruption followed by inflation surge creates economic volatility, with Cowen noting rising concerns about long-term growth sustainability amid demographic challenges and debt levels.",
            "key_manifestations": [
              "COVID-19 pandemic causing severe but brief economic contraction",
              "Massive fiscal and monetary interventions preventing depression",
              "Supply chain disruptions contributing to inflation surge",
              "Remote work potentially enabling productivity improvements in services"
            ]
          },
          "2030": {
            "salience_share": 5.5,
            "description": "AI and automation create significant productivity gains but with highly uneven distribution, generating tensions between aggregate growth and distributional concerns that complicate Cowen's growth-focused worldview.",
            "key_manifestations": [
              "AI-driven productivity boom in cognitive and service sectors",
              "Significant reduction in labor requirements across industries",
              "Universal basic income experiments addressing automation displacement",
              "Rising questions about GDP adequacy as prosperity measure"
            ]
          },
          "2040": {
            "salience_share": 4.5,
            "description": "Environmental constraints and resource limitations create growing friction with traditional growth models, forcing what Cowen might see as a necessary reconsideration of growth sustainability within planetary boundaries.",
            "key_manifestations": [
              "Climate disruptions requiring substantial capital reallocation",
              "Clean energy transition generating new growth sectors",
              "Intensifying debate over growth-environmental sustainability tradeoffs",
              "Beyond-GDP metrics gaining prominence in economic policy"
            ]
          },
          "2050": {
            "salience_share": 3.5,
            "description": "Technological abundance in some domains creates post-scarcity dynamics that challenge traditional economic growth metrics, while environmental constraints force adoption of alternative prosperity measures.",
            "key_manifestations": [
              "Information, energy, and basic material goods approaching post-scarcity",
              "Dematerialization of consumption reducing resource intensity of growth",
              "Advanced circular economy models replacing extractive growth",
              "Wellbeing indexes supplementing or replacing GDP in policy frameworks"
            ]
          },
          "2060": {
            "salience_share": 3,
            "description": "A fundamental transition in economic paradigms emerges with abundance-based economic models in many sectors coexisting with remaining scarcity challenges, requiring what Cowen might term a 'post-growth' framework that maintains his commitment to human flourishing.",
            "key_manifestations": [
              "AI-managed resource allocation systems optimizing for combined well-being metrics",
              "Radical abundance in basic needs creating focus on higher-level aspirations",
              "Space-based resources beginning to alleviate terrestrial scarcity constraints",
              "Economic theory evolution integrating post-scarcity and remaining scarcity domains"
            ]
          }
        }
      },
      "3_declining_dynamism_and_mobility": {
        "name": "Declining Dynamism and Mobility",
        "description": "This cluster represents a central theme in Cowen's work, particularly 'The Complacent Class' - the observation that American society has become less dynamic, with declining rates of geographic mobility, job switching, entrepreneurship, and creative destruction. It examines how risk aversion, regulatory barriers, and technological matching have contributed to a more static society. Over time, this cluster evolves to capture both the potential resurrection of dynamism through technological disruption and the emergence of new forms of stasis.",
        "trajectory": {
          "1940": {
            "salience_share": 2,
            "description": "World War II drives unprecedented mobility and dynamic change, with millions of Americans relocating for war production and military service - representing the high dynamism Cowen contrasts with later periods.",
            "key_manifestations": [
              "Massive internal migration to war production centers",
              "Women entering workforce at unprecedented rates",
              "Rapid creation and reallocation of industrial capacity",
              "Military mobilization moving millions across the country and world"
            ]
          },
          "1950": {
            "salience_share": 3,
            "description": "Post-war America exhibits high dynamism through suburban expansion, high rates of business formation, and significant geographic mobility - what Cowen considers the baseline of American dynamism.",
            "key_manifestations": [
              "Interstate Highway System enabling unprecedented mobility",
              "Suburban development creating massive population shifts",
              "High rates of new business formation and creative destruction",
              "Geographic mobility enabling labor market flexibility"
            ]
          },
          "1960": {
            "salience_share": 3.5,
            "description": "Continued high rates of economic and social dynamism, with substantial geographic mobility and adaptation to technological and cultural changes.",
            "key_manifestations": [
              "Continuing suburbanization and internal migration trends",
              "Moon program exemplifying ambitious national projects",
              "Civil rights movement driving institutional transformation",
              "High job switching rates and worker bargaining power"
            ]
          },
          "1970": {
            "salience_share": 4,
            "description": "Early signs emerge of what Cowen identifies as declining dynamism, with reduced geographic mobility and early regulatory accumulation affecting business formation.",
            "key_manifestations": [
              "Increasing environmental and safety regulations affecting development",
              "Initial decline in interstate migration rates",
              "Slowing pace of new infrastructure construction",
              "Beginning of deindustrialization in traditional manufacturing regions"
            ]
          },
          "1980": {
            "salience_share": 5.5,
            "description": "Continuation of trends Cowen associates with declining dynamism, despite deregulatory efforts in some sectors, with increasing land-use restrictions and declining startup rates.",
            "key_manifestations": [
              "NIMBY movements restricting housing development in productive regions",
              "Increasing divergence between growing and declining regions",
              "Rising costs of college education restricting opportunity",
              "Decreasing labor market fluidity with longer job tenures"
            ]
          },
          "1990": {
            "salience_share": 7,
            "description": "The complacent class Cowen describes begins taking clearer form with technology enabling better sorting, declining crime making stability more attractive, and increasing regulatory barriers.",
            "key_manifestations": [
              "Internet enabling better geographic and social sorting",
              "Declining crime rates reducing pressure for social reform",
              "Land use restrictions intensifying in productive coastal regions",
              "Declining rates of entrepreneurship despite tech boom"
            ]
          },
          "2000": {
            "salience_share": 8,
            "description": "Cowen's complacency thesis becomes increasingly evident with sharply declining geographic mobility, reduced job switching, and rising market concentration.",
            "key_manifestations": [
              "Internet dating and assortative mating increasing social segregation",
              "Housing costs preventing migration to productive regions",
              "Increasing market concentration across major industries",
              "Declining rates of job-to-job transitions"
            ]
          },
          "2010": {
            "salience_share": 9,
            "description": "The complacent class reaches its peak influence, with historically low rates of business dynamism, geographic mobility, and institutional innovation - the core evidence for Cowen's thesis.",
            "key_manifestations": [
              "Interstate migration rates falling to all-time lows",
              "Business startup rates at historic lows despite tech boom",
              "NIMBYism preventing housing development in productive regions",
              "Publication of Cowen's 'The Complacent Class' (2017) articulating the thesis"
            ]
          },
          "2020": {
            "salience_share": 8,
            "description": "The pandemic potentially disrupts complacency trends, with Cowen noting how remote work, forced adaptation, and new urgency might counteract some elements of declining dynamism.",
            "key_manifestations": [
              "Remote work enabling new migration patterns and housing choices",
              "Pandemic forcing rapid adaptation in business models and education",
              "Supply chain disruptions creating pressure for industrial policy",
              "Renewed emphasis on scientific research for vaccines and treatments"
            ]
          },
          "2030": {
            "salience_share": 7,
            "description": "Emerging technological disruptions partially counter the complacency Cowen identified, with AI, biotech, and energy transitions forcing adaptation and creative destruction while creating new modes of dynamism.",
            "key_manifestations": [
              "AI disruption forcing widespread business model reinvention",
              "Climate adaptation requiring substantial infrastructure renovation",
              "Remote work enabling geographic deconcentration from superstar cities",
              "Regulatory sandboxes facilitating innovation in emerging technologies"
            ]
          },
          "2040": {
            "salience_share": 6.5,
            "description": "A period of heightened technological and environmental dynamism emerges, partially reversing complacency trends through necessity and opportunity while creating new patterns of mobility and adaptation.",
            "key_manifestations": [
              "Climate migration creating new geographic population patterns",
              "VR/AR enabling new forms of 'virtual mobility' without physical relocation",
              "Fusion energy deployment requiring new infrastructure development",
              "Space development creating frontier-like innovation opportunities"
            ]
          },
          "2050": {
            "salience_share": 7.5,
            "description": "A new equilibrium emerges with heightened technological dynamism coexisting with social calcification in ways that would both validate and challenge Cowen's complacency thesis.",
            "key_manifestations": [
              "Advanced AI systems accelerating innovation without human mobility",
              "Virtual existence options reducing perceived need for physical dynamism",
              "Resource abundance reducing material incentives for creative destruction",
              "Digital nomadism becoming a mainstream lifestyle for knowledge workers"
            ]
          },
          "2060": {
            "salience_share": 8,
            "description": "A post-scarcity transition creates a new form of what Cowen might call 'abundant complacency' - reduced dynamism and mobility driven not by stagnation but by achieved material sufficiency and opportunity equalization.",
            "key_manifestations": [
              "Radical abundance reducing economic necessity for physical mobility",
              "Mature AI systems handling adaptation requirements without human disruption",
              "Virtual reality creating compelling alternatives to physical relocation",
              "Longevity medicine reducing generational turnover and associated dynamism"
            ]
          }
        }
      },
      "4_inequality_and_labor_market_polarization": {
        "name": "Inequality and Labor Market Polarization",
        "description": "This cluster examines Cowen's analysis in 'Average Is Over' of how technological change and globalization have created increasingly polarized labor markets with growing inequality. It tracks how technological skills, cognitive abilities, and global competition have reshaped income distributions and career prospects across different segments of society. The future trajectory explores how AI, automation, and eventual post-scarcity dynamics might transform the nature of inequality itself.",
        "trajectory": {
          "1940": {
            "salience_share": 2.5,
            "description": "World War II and subsequent policies create what Cowen views as a historically unusual period of compressed wage structures and reduced inequality.",
            "key_manifestations": [
              "Wage controls during wartime compressing income differences",
              "Strong labor unions influencing post-war wage setting",
              "Progressive taxation reaching very high marginal rates",
              "GI Bill expanding educational access across social classes"
            ]
          },
          "1950": {
            "salience_share": 3,
            "description": "The 'Great Compression' continues with historically low inequality and broadly shared economic growth - a pattern Cowen identifies as exceptional rather than normal.",
            "key_manifestations": [
              "Strong manufacturing sector providing middle-class wages",
              "Growing minimum wages maintaining wage floor",
              "Expanded Social Security creating safety net for elderly",
              "High marginal tax rates limiting very high incomes"
            ]
          },
          "1960": {
            "salience_share": 3.5,
            "description": "Shared prosperity continues with modest inequality, though early signs emerge of the knowledge economy's differential rewards that Cowen would later emphasize.",
            "key_manifestations": [
              "Rising college wage premium signaling skill-biased change",
              "Continued strong union presence in manufacturing",
              "Great Society programs expanding safety net",
              "Civil rights legislation opening opportunities for minorities"
            ]
          },
          "1970": {
            "salience_share": 4.5,
            "description": "Early manifestations of what Cowen calls 'Average Is Over' dynamics appear with deindustrialization reducing middle-skill jobs while education premiums grow.",
            "key_manifestations": [
              "Deindustrialization beginning to eliminate middle-wage jobs",
              "Rising returns to higher education and cognitive skills",
              "Gender wage gap beginning to narrow with women's advancement",
              "Globalization exposing manufacturing to international competition"
            ]
          },
          "1980": {
            "salience_share": 5.5,
            "description": "Inequality grows substantially as technological change and globalization create the labor market polarization that forms a core part of Cowen's economic analysis.",
            "key_manifestations": [
              "Reagan-era policies reducing progressive taxation",
              "Declining union membership reducing wage compression",
              "Computerization eliminating routine clerical and manufacturing jobs",
              "Finance sector deregulation enabling very high compensation"
            ]
          },
          "1990": {
            "salience_share": 6.5,
            "description": "The knowledge economy Cowen describes accelerates inequality through technology-driven worker sorting, with rising returns to education, technical skills, and location.",
            "key_manifestations": [
              "Rising CEO-to-worker pay ratios reaching historic levels",
              "Technology firms creating unprecedented wealth concentration",
              "College wage premium continuing to increase",
              "Globalization accelerating through trade agreements and outsourcing"
            ]
          },
          "2000": {
            "salience_share": 7.5,
            "description": "Cowen's 'Average Is Over' dynamics intensify with rising winner-take-all markets, automation of middle-skill jobs, and growth of both high and low-end service sectors.",
            "key_manifestations": [
              "Housing costs in productive cities creating geographical inequality",
              "Digital platforms enabling superstar economics in media and services",
              "China's WTO entry accelerating manufacturing job losses",
              "Financial sector generating unprecedented wealth concentration"
            ]
          },
          "2010": {
            "salience_share": 8.5,
            "description": "Income polarization reaches historic levels, exemplifying the trends Cowen identified in 'Average Is Over' with technology, globalization, and matching creating highly unequal outcomes.",
            "key_manifestations": [
              "Publication of Cowen's 'Average Is Over' (2013) articulating the thesis",
              "Tech giants achieving trillion-dollar valuations",
              "Gig economy creating flexible but precarious employment",
              "Geographic sorting concentrating high-skilled workers in superstar cities"
            ]
          },
          "2020": {
            "salience_share": 9,
            "description": "The pandemic accelerates the inequality trends Cowen has identified, with remote work benefiting high-skilled knowledge workers while exposing vulnerabilities of service workers.",
            "key_manifestations": [
              "K-shaped recovery showing divergent economic fates",
              "Remote work feasible primarily for higher-income knowledge workers",
              "Tech and finance sectors thriving amid broader economic disruption",
              "AI advancements threatening to automate additional cognitive tasks"
            ]
          },
          "2030": {
            "salience_share": 10,
            "description": "AI and automation create a peak period of labor market disruption and inequality as described in 'Average Is Over,' with technology driving unprecedented skill premia while eliminating vast categories of both manual and cognitive labor.",
            "key_manifestations": [
              "Advanced AI systems automating significant portions of knowledge work",
              "Universal basic income becoming necessary in many developed economies",
              "Human-AI collaboration skills commanding enormous wage premiums",
              "Global cognitive elite concentration reaching unprecedented levels"
            ]
          },
          "2040": {
            "salience_share": 8.5,
            "description": "The economic disruption from advanced AI and automation begins forcing structural adaptations that partially mitigate inequality, with policy interventions and technological abundance beginning to counterbalance market concentration tendencies.",
            "key_manifestations": [
              "AI-driven education systems democratizing high-skill acquisition",
              "Guaranteed minimum income programs becoming standard globally",
              "Abundance technologies reducing costs of basic goods and services",
              "New forms of human-centered value creation emerging beyond automation"
            ]
          },
          "2050": {
            "salience_share": 7,
            "description": "Technological abundance begins creating post-scarcity dynamics in basic needs, shifting inequality concerns from material sustenance to status, influence, and enhanced capabilities in ways that transform Cowen's 'Average Is Over' thesis.",
            "key_manifestations": [
              "Material needs satisfaction becoming near-universal in developed nations",
              "Major inequality shifting to cognitive enhancement access",
              "Status competition replacing material competition as primary concern",
              "Democratic ownership models for AI systems reducing wealth concentration"
            ]
          },
          "2060": {
            "salience_share": 5.5,
            "description": "Radical abundance technologies create what Cowen might term a 'post-inequality' transition, with material needs broadly satisfied while new forms of capability differentiation emerge through biotechnology and cognitive enhancement.",
            "key_manifestations": [
              "Basic income guarantees becoming universal across developed world",
              "AI wealth generation broadly distributed through public ownership models",
              "Self-replication technologies democratizing physical good production",
              "Cognitive enhancement creating new dimensions of human capability variance"
            ]
          }
        }
      },
      "5_regulatory_accumulation_and_institutional_sclerosis": {
        "name": "Regulatory Accumulation and Institutional Sclerosis",
        "description": "This cluster represents Cowen's analysis of how regulatory accumulation, legal constraints, and institutional rigidity increasingly limit dynamism and innovation in advanced economies. It examines the growing difficulty of building physical infrastructure, launching new enterprises, and implementing meaningful reforms as societies develop more complex rule systems. The future trajectory explores the tension between continued bureaucratic calcification and potential technological or crisis-driven reforms.",
        "trajectory": {
          "1940": {
            "salience_share": 1.5,
            "description": "Wartime emergency enables institutional flexibility and rapid infrastructure development that Cowen contrasts with later rigidity and constraint.",
            "key_manifestations": [
              "Rapid construction of wartime manufacturing facilities",
              "Manhattan Project developed without modern regulatory constraints",
              "Transportation infrastructure rapidly expanded for military needs",
              "Minimal environmental or procedural constraints on development"
            ]
          },
          "1950": {
            "salience_share": 2,
            "description": "The post-war period features relatively streamlined governance enabling rapid infrastructure development and business formation that Cowen notes would be impossible under later regulatory regimes.",
            "key_manifestations": [
              "Interstate Highway System construction proceeding rapidly",
              "Suburban development with minimal environmental review",
              "New airports and infrastructure built with limited regulatory delay",
              "Relatively simple tax code and business formation processes"
            ]
          },
          "1960": {
            "salience_share": 3,
            "description": "Early development of the regulatory state that Cowen identifies as eventually limiting dynamism, with new environmental, consumer, and safety regulations beginning to affect development.",
            "key_manifestations": [
              "Creation of EPA, OSHA and other regulatory agencies",
              "Initial environmental impact requirements",
              "Consumer safety regulations introduced in auto and other industries",
              "Beginning of the NIMBY movement opposing development"
            ]
          },
          "1970": {
            "salience_share": 4.5,
            "description": "Significant expansion of regulatory constraints across multiple domains, creating what Cowen views as the foundation for later institutional sclerosis.",
            "key_manifestations": [
              "Clean Air and Water Acts requiring complex compliance",
              "Endangered Species Act affecting land development",
              "NEPA requiring environmental impact statements",
              "Expansion of healthcare regulations creating compliance industry"
            ]
          },
          "1980": {
            "salience_share": 5.5,
            "description": "Despite deregulatory rhetoric, the cumulative burden of rules and constraints continues to increase across most domains, particularly affecting land use and infrastructure.",
            "key_manifestations": [
              "Growing complexity of legal challenges to development",
              "Rising influence of NIMBY opposition in coastal cities",
              "Increasing professional licensing requirements across occupations",
              "Growing tax code complexity requiring specialized compliance"
            ]
          },
          "1990": {
            "salience_share": 6.5,
            "description": "Regulatory accumulation accelerates with expanding federal, state, and local requirements creating what Cowen describes as compounding barriers to innovation and development.",
            "key_manifestations": [
              "Americans with Disabilities Act adding compliance requirements",
              "Expanded environmental justice requirements in permitting",
              "Growing legal cost burden on healthcare and business",
              "Information technology requiring new regulatory frameworks"
            ]
          },
          "2000": {
            "salience_share": 7.5,
            "description": "Institutional sclerosis becomes increasingly evident with infrastructure projects taking decades, business formation declining, and regulatory complexity creating barriers to entry across sectors.",
            "key_manifestations": [
              "Sarbanes-Oxley adding corporate governance requirements",
              "California Environmental Quality Act (CEQA) blocking housing development",
              "Infrastructure projects like Boston's Big Dig facing massive delays and overruns",
              "Dodd-Frank financial regulations adding compliance burdens after crisis"
            ]
          },
          "2010": {
            "salience_share": 8.5,
            "description": "The problem of institutional sclerosis reaches levels Cowen identifies as critical constraints on growth and innovation, with permitting and compliance requirements creating decade-long timelines for basic infrastructure.",
            "key_manifestations": [
              "Average of 17 years to complete highway projects from planning to completion",
              "Expanding healthcare regulations under ACA creating compliance industry",
              "California housing crisis exemplifying how regulations prevent adaptation",
              "Occupational licensing covering nearly 30% of US workforce"
            ]
          },
          "2020": {
            "salience_share": 9,
            "description": "Pandemic highlights the institutional constraints Cowen has identified, with regulatory frameworks slowing pandemic response while creating barriers to needed adaptation and development.",
            "key_manifestations": [
              "FDA processes initially delaying COVID testing and vaccine approval",
              "Failure to execute infrastructure projects despite funding",
              "Inability to build renewable energy transmission due to permitting barriers",
              "Regulatory complexity preventing housing construction despite shortages"
            ]
          },
          "2030": {
            "salience_share": 9.5,
            "description": "Institutional sclerosis reaches its peak as climate adaptation and AI governance create new regulatory layers while existing frameworks remain largely unreformed, creating what Cowen might view as an innovation crisis point.",
            "key_manifestations": [
              "Climate adaptation regulations creating massive compliance burdens",
              "AI governance frameworks adding complexity to technology deployment",
              "Geopolitical competition driving national security regulatory expansion",
              "Healthcare regulations becoming prohibitive to biomedical innovation"
            ]
          },
          "2040": {
            "salience_share": 8,
            "description": "Crisis-driven regulatory streamlining begins in selective domains as competitive necessity and technological capabilities enable what Cowen might call 'institutional reformation' in critical sectors while legacy systems remain calcified.",
            "key_manifestations": [
              "AI-enabled regulatory compliance systems reducing administrative burdens",
              "Climate crisis forcing emergency permitting for adaptation infrastructure",
              "Special economic zones with streamlined regulation gaining prominence",
              "Blockchain-based governance systems creating regulatory alternatives"
            ]
          },
          "2050": {
            "salience_share": 7,
            "description": "Technological capabilities enable significant modernization of regulatory systems while creating alternative governance models that begin addressing the institutional sclerosis Cowen identified as a growth constraint.",
            "key_manifestations": [
              "AI governance systems enabling real-time adaptive regulation",
              "Decentralized governance models replacing centralized bureaucracy",
              "Outcome-based regulation replacing process-based requirements",
              "Space development operating under streamlined regulatory frameworks"
            ]
          },
          "2060": {
            "salience_share": 6,
            "description": "The emergence of what Cowen might term 'computational governance' creates more dynamic institutional frameworks capable of adaptation and experimentation while maintaining necessary protections and coordination functions.",
            "key_manifestations": [
              "AI-mediated governance systems enabling rapid regulatory evolution",
              "Polycentric governance models replacing monolithic regulatory states",
              "Radical transparency technologies reducing need for formal compliance",
              "Virtual jurisdictions competing with physical governance systems"
            ]
          }
        }
      }
    }
  };

  
  const tylerCowenPreset: PresetConfig = {
    id: "tyler-cowen",
    name: "Tyler Cowen's Forecast",
    description: "Tyler Cowen's analysis of the economy from 1940 to 2060 [Sonnet 3.7]",
    startYear: "1940",
      endYear: "2060",
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 10,
      model: "o1-mini",
      context: "Tyler Cowen's view of the world",
    cachedResult: tylerCowenData
  };
  
  export default tylerCowenPreset; 
  
