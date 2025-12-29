import { PresetConfig } from './types';

export const democracyData = {
  metadata: {
  "period": "1890-2025",
  "interval": "5 years",
  "cluster_range": "1-27",
  "measurement": "relative cultural variance explained (0-100)",
  "top_20_clusters": [
    "01_technocratic_meliorism_and_institutional_expertise",
    "02_populist_affective_epistemology",
    "03_rights_based_universalism_expansion",
    "04_civic_republican_virtue_and_duty",
    "05_market_based_epistemology",
    "06_paranoid_style_and_conspiratorial_suspicion",
    "07_identity_standpoint_theory",
    "08_protestant_moral_absolutism",
    "09_pragmatic_consensus_liberalism",
    "10_muckraking_and_exposure_realism",
    "12_algorithmic_truth_construction",
    "13_isolationist_exceptionalism",
    "14_therapeutic_self_actualization",
    "15_corporate_managerialism",
    "16_radical_egalitarian_redistribution",
    "17_constitutional_originalism_and_textualism",
    "18_suburban_conformity_ethos",
    "19_countercultural_authenticity_seeking",
    "20_globalist_interdependence",
    "21_ecological_stewardship_and_planetary_limits"
  ]
},
  clusters: {
  "01_technocratic_meliorism_and_institutional_expertise": {
    "name": "Technocratic Meliorism & Institutional Expertise",
    "description": "This cluster represents the epistemic conviction that social, political, and economic problems are technical issues solvable through the application of specialized knowledge, data, and centralized management. It tracks the moral shift from individual character reform to systemic adjustment managed by a credentialed elite. It maps the rise of the 'expert' as the primary arbiter of truth, the consolidation of trust in bureaucratic institutions, and the subsequent erosion of that trust in favor of distributed or populist epistemologies.",
    "trajectory": {
      "1890": {
        "salience_share": 15.5,
        "description": "At the dawn of the Progressive Era, the variance for this cluster began a sharp upward trajectory (+3.5% from 1885), driven by a reaction against the chaotic inefficiency of Gilded Age laissez-faire capitalism and urban squalor. The catalyst for this shift was the emergence of the social sciences as a distinct moral and political force; 'truth' was moving from the domain of the clergyman to the sociologist and the efficiency expert. The moral imperative shifted from saving souls to 'saving the city' through sanitation, zoning, and statistical analysis, displacing older forms of patronage politics. The epistemic standard became 'scientific' investigation into poverty, rejecting the notion that social ills were merely the result of individual moral failings.",
        "key_manifestations": [
          "How the Other Half Lives by Jacob Riis (1890)",
          "Principles of Economics by Alfred Marshall (1890)",
          "The Sherman Antitrust Act (1890)",
          "The founding of the University of Chicago Sociology Department (1892)"
        ]
      },
      "1895": {
        "salience_share": 18.2,
        "description": "The variance continued to climb (+2.7%) as the Panic of 1893 delegitimized unregulated market dynamics and accelerated the demand for rationalized management of the state. The displacing force was the obvious failure of volunteerism and local charity to cope with systemic economic depression, necessitating a more rigorous, data-driven approach to governance. This period saw the 'expert' gain moral weight; the ability to measure social phenomena was increasingly equated with the authority to govern them. We see the nascent formation of the administrative state's intellectual architecture, where efficiency is elevated to a cardinal political virtue.",
        "key_manifestations": [
          "Hull House Maps and Papers (1895)",
          "Atlanta Exposition Speech by Booker T. Washington (1895)",
          "The Crowd: A Study of the Popular Mind by Gustave Le Bon (1895)",
          "Establishment of the London School of Economics (influence on US thought) (1895)"
        ]
      },
      "1900": {
        "salience_share": 22.4,
        "description": "Entering the 20th century, the cluster surged (+4.2%) with the ascendancy of Theodore Roosevelt and the embodiment of the 'strenuous life' applied to administration. The catalyst was the nationalization of political discourse, where local issues were reframed as national problems requiring federal\u2014and therefore expert\u2014intervention. The epistemic standard fully embraced 'muckraking' not just as exposure, but as the data collection phase of legislative reform. This era marked the solidification of the 'Wisconsin Idea,' linking university research directly to legislative drafting, cementing the bond between the academy and the state.",
        "key_manifestations": [
          "The Model City Charter of the National Municipal League (1900)",
          "The Philosophy of Money by Georg Simmel (1900)",
          "Robert La Follette's election as Governor of Wisconsin (1900)",
          "Sister Carrie by Theodore Dreiser (1900)"
        ]
      },
      "1905": {
        "salience_share": 26.8,
        "description": "This interval represents a high-velocity expansion (+4.4%) of the technocratic ideal, driven by the perceived success of scientific management in industry and its attempted transplantation into government. The catalyst was the publication and rapid dissemination of Taylorist principles, which promised that there was a 'one best way' to organize human activity, displacing the messy compromise of parliamentary politics. Epistemically, the anecdote was dying; the statistic was king. The moral authority of the 'reformer' was now inextricable from their technical competence, creating a bifurcation between the 'ignorant' masses and the 'enlightened' administrators.",
        "key_manifestations": [
          "The Jungle by Upton Sinclair (1906)",
          "The Education of Henry Adams (Privately printed 1907)",
          "Creation of the U.S. Forest Service under Gifford Pinchot (1905)",
          "Lochner v. New York (1905)"
        ]
      },
      "1910": {
        "salience_share": 31.5,
        "description": "The cluster reached a pre-war apex (+4.7%) as 'The New Nationalism' and 'The New Freedom' debated not if the government should manage society, but how expert that management should be. The catalyst was the maturation of the Progressive movement into a dominant bipartisan consensus on the necessity of regulatory bodies. Trust in the 'disinterested expert' peaked here as a solution to the corruption of party machines. The epistemic shift was profound: political legitimacy was no longer solely derived from the ballot box, but from the non-partisan commission and the civil service exam.",
        "key_manifestations": [
          "The Promise of American Life by Herbert Croly (1909)",
          "The Principles of Scientific Management by Frederick Winslow Taylor (1911)",
          "Twenty Years at Hull House by Jane Addams (1910)",
          "Report of the flexion and Flexner Report on Medical Education (1910)"
        ]
      },
      "1915": {
        "salience_share": 38.0,
        "description": "The variance exploded (+6.5%) as World War I necessitated the total mobilization of society, converting technocratic theory into urgent practice. The War Industries Board and the Committee on Public Information served as catalysts, proving that the state could direct the economy and public opinion with engineering precision. This was the moment where 'planning' moved from a reformist ideal to an existential necessity. The moral hazard of dissent began to rise, as opposing the 'scientific' management of the war effort was cast as irrational or treasonous, setting the stage for the technocrat as a guardian of security.",
        "key_manifestations": [
          "Drift and Mastery by Walter Lippmann (1914)",
          "Establishment of the Federal Trade Commission (1914)",
          "The War Industries Board creation (1917)",
          "Democracy and Education by John Dewey (1916)"
        ]
      },
      "1920": {
        "salience_share": 34.2,
        "description": "A sharp retraction (-3.8%) occurred as the 'Return to Normalcy' signaled a popular exhaustion with moral crusades and expert social engineering. The displacing force was a post-war disillusionment with the promises of rationalized warfare and the perceived overreach of the Wilsonian state. However, the decline was not a total collapse; while political progressivism waned, business technocracy thrived. The epistemic authority shifted from the government planner to the corporate efficiency expert, maintaining the underlying belief in data and management while changing the venue from the bureau to the boardroom.",
        "key_manifestations": [
          "Main Street by Sinclair Lewis (1920)",
          "Public Opinion by Walter Lippmann (1922)",
          "Economic Consequences of the Peace by John Maynard Keynes (1919)",
          "The Volstead Act (1919)"
        ]
      },
      "1925": {
        "salience_share": 29.5,
        "description": "The variance continued to slide (-4.7%) as the cultural eigencluster of 'Rugged Individualism' and consumer hedonism temporarily displaced the moral weight of collective management. The catalyst for this decay was the booming economy, which seemed to validate a decentralized, market-driven epistemology over centralized planning. Yet, beneath the surface, the 'associationalism' of Herbert Hoover kept the technocratic ember alive\u2014a belief that voluntary cooperation between experts and business could solve problems without state coercion. The Scopes Trial highlighted a growing cultural fissure, but the 'expert' was temporarily on the defensive against a resurgent traditionalism.",
        "key_manifestations": [
          "The Great Gatsby by F. Scott Fitzgerald (1925)",
          "The Man Nobody Knows by Bruce Barton (1925)",
          "The Scopes Monkey Trial (1925)",
          "The Phantom Public by Walter Lippmann (1925)"
        ]
      },
      "1930": {
        "salience_share": 36.8,
        "description": "A massive rebound (+7.3%) occurred as the Great Depression shattered the epistemic validity of laissez-faire market wisdom. The catalyst was the visible failure of the 'invisible hand,' creating a vacuum that only the 'Brain Trust' could fill. The moral valence of expertise flipped overnight from meddlesome to savior-like. Society demanded a 'blueprint' for recovery, and the status of the economist and the planner rose to unprecedented heights. The belief that society was a machine that had broken down and required a mechanic became the dominant metaphor.",
        "key_manifestations": [
          "Middletown by Robert and Helen Lynd (1929)",
          "The Smoot-Hawley Tariff Act (1930)",
          "I'll Take My Stand by the Southern Agrarians (Counter-example) (1930)",
          "Modern Corporation and Private Property by Berle and Means (1932)"
        ]
      },
      "1935": {
        "salience_share": 48.5,
        "description": "The cluster reached a historic peak of acceleration (+11.7%) during the height of the Second New Deal. The creation of the Social Security Administration and the WPA institutionalized the technocratic worldview, embedding it into the fabric of daily life. The catalyst was the realization that the crisis was structural, not cyclical, requiring permanent administrative architecture. Epistemically, the 'survey' and the 'index' became the tools of truth; the government began to measure the citizenry in order to save it. This period cemented the Democratic party's identity as the party of managed modernity.",
        "key_manifestations": [
          "General Theory of Employment, Interest and Money by Keynes (1936)",
          "The Social Security Act (1935)",
          "WPA American Guide Series (1935-)",
          "It Can't Happen Here by Sinclair Lewis (1935)"
        ]
      },
      "1940": {
        "salience_share": 52.0,
        "description": "Variance expanded further (+3.5%) as the 'Arsenal of Democracy' necessitated a command economy, fusing the New Deal state with the military-industrial apparatus. The catalyst was the existential threat of fascism, which justified the total sublimation of individual preference to expert planning. The epistemic standard was absolute: the 'men in the room' with the maps and the production schedules held the only truth that mattered. This era forged the 'consensus' establishment, where labor, government, and business were managed by a unified class of technocrats.",
        "key_manifestations": [
          "The Managerial Revolution by James Burnham (1941)",
          "Executive Order 8802 (1941)",
          "Why We Fight film series by Frank Capra (1942)",
          "The Beveridge Report (UK influence) (1942)"
        ]
      },
      "1945": {
        "salience_share": 55.5,
        "description": "The cluster hit its absolute historical maximum (+3.5%) with the successful conclusion of the war and the dawn of the Atomic Age. The development of the atomic bomb was the ultimate apotheosis of this cluster: a group of elite physicists, operating in secret, harnessing the fundamental forces of the universe to dictate global politics. The catalyst was victory itself, which validated the technocratic model as not just efficient, but morally righteous. The establishment of the UN and Bretton Woods institutions sought to apply this management philosophy to the entire globe.",
        "key_manifestations": [
          "Atomic Energy Act of 1946",
          "Science, The Endless Frontier by Vannevar Bush (1945)",
          "The Bretton Woods Agreement (1944/45)",
          "Animal Farm by George Orwell (Cultural counter-weight) (1945)"
        ]
      },
      "1950": {
        "salience_share": 54.2,
        "description": "A slight stabilization (-1.3%) occurred as the Cold War settled into a grim routine. While the 'Red Scare' attacked specific intellectuals, it paradoxically reinforced the reliance on the security state's experts to root out subversion. The 'Vital Center' liberalism emerged, positing that the problems of politics were no longer ideological but technical\u2014matters of adjustment rather than revolution. The epistemic standard was defined by 'containment,' a complex geopolitical strategy that only the initiated could understand, insulating foreign policy from democratic whims.",
        "key_manifestations": [
          "The Vital Center by Arthur Schlesinger Jr. (1949)",
          "The Lonely Crowd by David Riesman (1950)",
          "NSC-68 (1950)",
          "The Authoritarian Personality by Adorno et al. (1950)"
        ]
      },
      "1955": {
        "salience_share": 53.0,
        "description": "The cluster maintained high altitude (-1.2%) in an era of 'High Modernism.' The interstate highway system and the suburban explosion were physical manifestations of top-down planning. The catalyst for the slight erosion was the bubbling of cultural discontent (the Beats, Rock n' Roll), but politically, the 'Organization Man' was still the ideal. Trust in institutions\u2014media, government, science\u2014was monolithic. The polio vaccine victory in this window served as a powerful reinforcement of the benevolence of scientific expertise.",
        "key_manifestations": [
          "The Organization Man by William Whyte (1956)",
          "The Salk Polio Vaccine announcement (1955)",
          "Rebel Without a Cause (1955)",
          "Measuring Business Cycles by Burns and Mitchell (1946/influential in 50s)"
        ]
      },
      "1960": {
        "salience_share": 51.5,
        "description": "Variance began a slow, deceptive descent (-1.5%) even as the 'Best and Brightest' took power. The Kennedy administration represented the aesthetic peak of technocratic liberalism\u2014Harvard intellectuals running the world\u2014but the seeds of disruption were sown. The catalyst for the coming fall was the disconnect between the pristine metrics of the economists and the messy moral reality of the Civil Rights movement, which operated on a different epistemic frequency (moral witness vs. gradualist management). 'The End of Ideology' was proclaimed just as ideology was about to explode.",
        "key_manifestations": [
          "The End of Ideology by Daniel Bell (1960)",
          "The Stages of Economic Growth by W.W. Rostow (1960)",
          "Silent Spring by Rachel Carson (Early challenge to corporate science) (1962)",
          "Port Huron Statement (1962)"
        ]
      },
      "1965": {
        "salience_share": 42.0,
        "description": "A significant rupture (-9.5%) occurred as the consensus shattered under the weight of the Vietnam War and urban unrest. The catalyst was the 'credibility gap': the realization that the metrics (body counts, tonnage dropped) were lies or irrelevant to the reality of the war. The epistemic authority of the 'expert' was directly challenged by the counterculture, which posited that 'objective' consciousness was a trap. The Great Society, while a technocratic triumph in legislation, failed to quell the riots, suggesting that social engineering had hit an impassable wall of complex human behavior.",
        "key_manifestations": [
          "Unsafe at Any Speed by Ralph Nader (1965)",
          "The Autobiography of Malcolm X (1965)",
          "Voting Rights Act of 1965 (The peak of legislative liberalism)",
          "One-Dimensional Man by Herbert Marcuse (1964)"
        ]
      },
      "1970": {
        "salience_share": 33.5,
        "description": "The decline accelerated (-8.5%) into a crisis of confidence. Stagflation defied the Keynesian models that had supposedly conquered the business cycle, dealing a body blow to economic expertise. The displacing force was a pincer movement: the New Left attacked the technocracy as soulless and imperialist, while the New Right attacked it as elitist and ineffective. The Pentagon Papers revealed that the experts had been managing the public, not the war. The moral standing of institutions collapsed, replaced by a cynical, investigative epistemology.",
        "key_manifestations": [
          "The Pentagon Papers (1971)",
          "A Theory of Justice by John Rawls (Attempt to rationalize liberal morality) (1971)",
          "Future Shock by Alvin Toffler (1970)",
          "Limits to Growth by Club of Rome (1972)"
        ]
      },
      "1975": {
        "salience_share": 28.0,
        "description": "The cluster continued to wither (-5.5%) in the 'malaise' era. The Church Committee hearings exposed the dark side of the security state's expertise, further eroding trust. The catalyst for this specific dip was the impotency of government to solve the energy crisis or inflation, leading to a turn toward deregulation. Epistemically, the focus shifted to the 'market' as a superior information processor to the bureau. The 'expert' was no longer the solution, but the problem\u2014a regulator strangling the vitality of the nation.",
        "key_manifestations": [
          "The Church Committee Reports (1975-76)",
          "Legitimation Crisis by J\u00fcrgen Habermas (1975)",
          "Discipline and Punish by Michel Foucault (English trans. 1977)",
          "Proposition 13 in California (1978)"
        ]
      },
      "1980": {
        "salience_share": 31.0,
        "description": "A curious, partial recovery (+3.0%) occurred, but in a mutated form. While the 'bureaucrat' was demonized, the 'economist' and the 'CEO' were deified. The catalyst was the Neoliberal turn, which used high-level technocratic adjustments (Volcker Shock) to discipline society. This was not a return to New Deal meliorism, but a shift to 'Market Technocracy'\u2014the belief that experts should design systems that mimic markets. The epistemic standard moved from 'social welfare' to 'efficiency' and 'shareholder value,' yet the reliance on elite theory remained absolute.",
        "key_manifestations": [
          "Free to Choose by Milton Friedman (1980)",
          "The Volcker Shock (interest rate hikes) (1979-1980)",
          "Mandate for Leadership by The Heritage Foundation (1981)",
          "Wealth and Poverty by George Gilder (1981)"
        ]
      },
      "1985": {
        "salience_share": 30.5,
        "description": "The cluster hovered in a state of stasis (-0.5%). The 'Reagan Revolution' rhetoric was populist, but the governance was increasingly handled by a professional class of think-tank operators and policy wonks. The displacing force of 'moral majority' populism was kept in check by the robust economic growth, which validated the new supply-side expertise. However, the Iran-Contra affair revealed the dangers of the 'shadow' expert state, hinting at the rot beneath the executive competence narrative.",
        "key_manifestations": [
          "Amusing Ourselves to Death by Neil Postman (1985)",
          "Gramm-Rudman-Hollings Balanced Budget Act (1985)",
          "The Tower Commission Report (1987)",
          "Neuromancer by William Gibson (1984 - Tech emergence)"
        ]
      },
      "1990": {
        "salience_share": 34.0,
        "description": "A moderate rise (+3.5%) coincided with the 'End of History' and the Gulf War. The swift, high-tech victory in Desert Storm seemed to rehabilitate the competence of the military-industrial complex (smart bombs, CNN coverage). The catalyst was the collapse of the Soviet Union, which appeared to empirically validate the Western liberal-technocratic model as the final form of human government. The 'New Democrat' movement (DLC) embraced this, pivoting away from labor unions toward a professional-managerial class alliance.",
        "key_manifestations": [
          "The End of History and the Last Man by Francis Fukuyama (1992)",
          "Reinventing Government by Osborne and Gaebler (1992)",
          "CNN's coverage of the Gulf War (1990-91)",
          "The North American Free Trade Agreement (Drafted/Signed) (1992)"
        ]
      },
      "1995": {
        "salience_share": 36.5,
        "description": "Variance crept upward (+2.5%) during the Tech Boom. The rise of Silicon Valley introduced a new flavor of technocratic optimism: 'cyber-libertarianism.' The belief was that the internet would solve information asymmetry and create a perfect market/democracy. The catalyst was the booming stock market and the feeling that the Federal Reserve (under Greenspan) had mastered the economy ('The Great Moderation'). Trust in 'The Maestro' (Greenspan) represented the pinnacle of this neo-technocratic faith.",
        "key_manifestations": [
          "Being Digital by Nicholas Negroponte (1995)",
          "The Telecommunications Act of 1996",
          "Bowling Alone by Robert Putnam (The article) (1995)",
          "Wag the Dog (Film) (1997)"
        ]
      },
      "2000": {
        "salience_share": 32.0,
        "description": "A sharp inflection point (-4.5%) marked the beginning of the end for the neoliberal consensus. The Dot-com crash and the contested 2000 election cracked the veneer of competence and procedural legitimacy. The displacing force was the realization that the 'new economy' had old bubbles, and that democratic institutions could malfunction. The Supreme Court's intervention in Bush v. Gore was a quintessential technocratic override of democratic messiness, but it came at the cost of long-term institutional legitimacy.",
        "key_manifestations": [
          "Bush v. Gore (2000)",
          "Empire by Hardt and Negri (2000)",
          "The Cluetrain Manifesto (2000)",
          "Bowling Alone (The Book) (2000)"
        ]
      },
      "2005": {
        "salience_share": 24.5,
        "description": "A collapse in variance (-7.5%) driven by the twin disasters of the Iraq War and Hurricane Katrina. The 'Weapons of Mass Destruction' failure was a catastrophic blow to the epistemology of intelligence expertise; the experts were not just wrong, they were politically manipulated. Katrina exposed the hollowed-out state capacity after decades of outsourcing. The catalyst for decline was the undeniable visibility of incompetence. The blogosphere began to erode the gatekeeping power of legacy media, birthing the 'netroots' which questioned the establishment from the left.",
        "key_manifestations": [
          "The 9/11 Commission Report (2004)",
          "Mission Accomplished banner event (retrospective impact)",
          "Crashing the Gate by Jerome Armstrong and Markos Moulitsas (2006)",
          "Hurricane Katrina media coverage (2005)"
        ]
      },
      "2010": {
        "salience_share": 18.0,
        "description": "The decline deepened (-6.5%) following the Global Financial Crisis. The revelation that the 'quants' and regulators did not understand the derivatives market destroyed the intellectual authority of the economic elite. The catalyst was the bailout: the perception that the technocrats saved themselves at the expense of the public. This birthed the Tea Party (right) and Occupy (left), both rejecting the 'center's' epistemic claim to wisdom. The 'expert' was now viewed as a parasite or a rigger of the game.",
        "key_manifestations": [
          "The Big Short by Michael Lewis (2010)",
          "Citizens United v. FEC (2010)",
          "The Facebook Social Network (Film) (2010)",
          "Fault Lines by Raghuram Rajan (2010)"
        ]
      },
      "2015": {
        "salience_share": 12.5,
        "description": "The cluster entered freefall (-5.5%) as populist sentiment exploded. The 'Brexit' vote and the rise of Donald Trump signaled a total rejection of the technocratic 'inevitability.' The displacing force was 'Post-Truth' politics, where emotional resonance and tribal affirmation outweighed data-driven policy papers. The 'wonk' became a figure of mockery. Institutional expertise was actively framed as a 'Deep State' conspiracy, inverting the 1950s trust in the security apparatus into an existential enemy of the people.",
        "key_manifestations": [
          "Hillbilly Elegy by J.D. Vance (2016)",
          "Between the World and Me by Ta-Nehisi Coates (2015)",
          "The Death of Expertise by Tom Nichols (2017)",
          "Brexit Referendum/Trump Election (2016)"
        ]
      },
      "2020": {
        "salience_share": 14.5,
        "description": "A volatile, temporary spike (+2.0%) occurred due to the COVID-19 pandemic. Faced with biological terror, a portion of the populace desperately returned to 'Trust the Science.' However, this was highly polarized; for half the country, the expert class's changing guidance (masks, origins) proved their illegitimacy. The catalyst was the sheer necessity of epidemiological modeling ('The Hammer and the Dance'), but the rapid politicization of these models meant the 'return to expertise' was fragile and partisan, rather than a restoration of consensus.",
        "key_manifestations": [
          "The Hammer and the Dance by Tomas Pueyo (2020)",
          "The Revolt of the Public by Martin Gurri (2018/resurgence 2020)",
          "The Great Barrington Declaration vs. The John Snow Memorandum (2020)",
          "Kara Swisher's Sway podcast (Symbolizing tech-media elite discourse) (2020)"
        ]
      },
      "2025": {
        "salience_share": 9.2,
        "description": "The variance collapses again (-5.3%) as the 'Splinternet' and AI-driven reality distortion fields make a shared epistemic standard impossible. The displacing force is the total democratization of 'truth' production via LLMs, where every user can generate their own expert-sounding evidence. 'Institutional Expertise' retreats into high-walled gardens/citadels, trusted only by a shrinking elite minority. The prevailing mood is one of 'epistemic nihilism' or 'tribal epistemology,' where the very concept of a neutral expert is viewed as a naive anachronism.",
        "key_manifestations": [
          "The Coming Wave by Mustafa Suleyman (2023/influence in 2025)",
          "Deepfake 'Reality Check' legislation debates (2024-2025)",
          "Substack/newsletter ecosystem dominance over legacy op-ed pages (2025)",
          "Collapse of the 'Disinformation Governance Board' concept (Symbolic end of state truth arbitration)"
        ]
      }
    }
  },
  "02_populist_affective_epistemology": {
    "name": "Populist Affective Epistemology",
    "description": "This cluster tracks the validation of 'gut feeling,' 'common sense,' and emotional resonance as superior pathways to political truth compared to elite expertise or procedural deliberation. It posits a moral dualism between the 'pure people' and the 'corrupt elite' (whether financial, cultural, or political). While often conflated with specific policy demands, this cluster is fundamentally about the *source* of legitimacy: truth is found in the unmediated experience of the virtuous majority, not in the data of the isolated specialist. Its trajectory is inverse to Technocratic Meliorism, surging during periods of institutional failure and cultural alienation.",
    "trajectory": {
      "1890": {
        "salience_share": 13.5,
        "description": "The variance surged (+4.5%) as the agrarian crisis galvanized the Populist movement, challenging the epistemic monopoly of Eastern financial elites. The catalyst was the deflationary spiral which made the 'gold standard' logic of bankers feel like a tangible theft to farmers. Here, 'truth' was not in the ledger books but in the suffering of the producer class. The movement rejected the complex economic justifications for the status quo, asserting that moral intuition\u2014that the producer should own the fruit of their labor\u2014was a higher form of knowledge than establishment economics.",
        "key_manifestations": [
          "The Ocala Demands (1890)",
          "Caesar's Column by Ignatius Donnelly (1890)",
          "The Populist Party Platform (Omaha Platform) (1892)",
          "Cotton Prices and the Mortgage Crisis narratives (1890)"
        ]
      },
      "1895": {
        "salience_share": 16.8,
        "description": "This cluster reached a 19th-century zenith (+3.3%) with William Jennings Bryan's capture of the Democratic Party. The 'Cross of Gold' speech was the catalyst, crystallizing the sentiment that metropolitan expertise was a tool of crucifixion against the common man. The epistemic shift was profound: rhetorical passion and religious metaphor displaced legalistic argumentation. The defense of bimetallism was less about monetary theory and more about the moral supremacy of the 'heartland' over the artificiality of the city.",
        "key_manifestations": [
          "Cross of Gold Speech by William Jennings Bryan (1896)",
          "Coin's Financial School by William Hope Harvey (1894)",
          "The Red Badge of Courage by Stephen Crane (1895 - shift to raw experience)",
          "Plessy v. Ferguson (1896 - Negative populism/mob rule aspect)"
        ]
      },
      "1900": {
        "salience_share": 11.2,
        "description": "A sharp retraction (-5.6%) occurred as the returning prosperity and the distraction of the Spanish-American War undercut the agrarian grievance narrative. The displacing force was the rise of Theodore Roosevelt's 'square deal' progressivism, which successfully co-opted populist anger into managed, regulatory channels. The 'expert' began to look like a reformer rather than an oppressor. The emotional urgency of the populist epistemology waned as the middle class grew, preferring the stability of institutional reform over the volatility of prairie radicalism.",
        "key_manifestations": [
          "The Wonderful Wizard of Oz by L. Frank Baum (1900 - Allegory of fading populism)",
          "Gold Standard Act (1900)",
          "Up from Slavery by Booker T. Washington (1901)",
          "The defeat of Bryan in the 1900 election"
        ]
      },
      "1905": {
        "salience_share": 8.5,
        "description": "The decline continued (-2.7%) as the 'Muckrakers' (Cluster 10) professionalized outrage. While muckraking appealed to the people, it relied on *evidence* and investigation, effectively subordinating populist anger to journalistic empiricism. The catalyst for this suppression was the success of the Progressive movement in institutionalizing change, making the 'outsider' stance less electorally viable. Populism retreated into regional pockets, losing its national ability to define truth.",
        "key_manifestations": [
          "The Shame of the Cities by Lincoln Steffens (1904)",
          "The Octopus by Frank Norris (1901)",
          "Establishment of the FDA (1906)",
          "Lochner v. New York (1905 - Elite judicial override of popular will)"
        ]
      },
      "1910": {
        "salience_share": 7.0,
        "description": "Variance hit a local minimum (-1.5%). The political battleground was dominated by two varieties of elite reformism (Wilson vs. Roosevelt), leaving little oxygen for genuine grassroots anti-elitism. The epistemic standard was high-minded and academic (Wilson was a former university president). Populist energy was dormant, or rather, it was being sublimated into the Socialist movement, which offered a theoretical (Marxist) rather than purely affective framework for discontent.",
        "key_manifestations": [
          "The New Freedom by Woodrow Wilson (1913)",
          "Eugene V. Debs' presidential campaigns (1912)",
          "Seventeenth Amendment ratification (1913 - Institutionalizing popular will via procedure)",
          "Federal Reserve Act (1913 - Ultimate technocratic victory)"
        ]
      },
      "1915": {
        "salience_share": 9.5,
        "description": "A modest resurgence (+2.5%) driven by nativist reaction to immigration and the looming war. The catalyst was the re-emergence of the KKK and cultural fundamentalism, which asserted a 'true Americanism' based on heritage and blood rather than civic participation. This was the dark side of affective epistemology: truth defined by identity and exclusion. The release of *The Birth of a Nation* galvanized a romanticized, emotional revisionism that rejected historical fact for mythic narrative.",
        "key_manifestations": [
          "The Birth of a Nation (Film) (1915)",
          "The Leo Frank Case (1915)",
          "The Fundamentals (1910-1915 - theological roots)",
          "Immigration Act of 1917"
        ]
      },
      "1920": {
        "salience_share": 12.8,
        "description": "The cluster spiked (+3.3%) as a backlash against the 'foreign' entanglements of WWI and the perceived moral decay of the cities. The catalyst was the 'Red Scare' and Prohibition, both of which relied on mobilizing mass sentiment against 'alien' influences. The epistemic standard shifted away from Wilsonian idealism to 'Normalcy,' which was a code for the intuitive comfort of the white, Protestant small town. Science was famously put on trial in Dayton, Tennessee, explicitly pitting the Bible (popular truth) against evolution (elite truth).",
        "key_manifestations": [
          "The Scopes Trial (1925)",
          "The KKK march on Washington (1925)",
          "Babbitt by Sinclair Lewis (Satirizing the populist middlebrow) (1922)",
          "Emergency Quota Act (1921)"
        ]
      },
      "1925": {
        "salience_share": 10.5,
        "description": "A slight decline (-2.3%) as the roaring economy seduced the populace into a consumerist complacency. The displacing force was the sheer material success of the business class; it is hard to maintain a populist rage against elites when the stock market promises wealth for all. However, the cultural affect remained bubbling under the surface, particularly in the South and West, where the 'Jazz Age' was viewed with suspicion. The 'truth' of the market temporarily eclipsed the 'truth' of the folk.",
        "key_manifestations": [
          "The Great Gatsby (1925)",
          "Gentlemen Prefer Blondes by Anita Loos (1925)",
          "The Sun Also Rises by Hemingway (1926)",
          "Execution of Sacco and Vanzetti (1927)"
        ]
      },
      "1930": {
        "salience_share": 15.0,
        "description": "The variance began a steep climb (+4.5%) as the Depression delegitimized the business elite. The catalyst was the tangible misery of the dust bowl and the breadlines, which made the 'optimistic' statements of Hoover seem like gaslighting. This created an opening for radio demagogues who spoke directly to the pain of the people, bypassing the newspapers. The epistemic authority of the 'forgotten man' began to rise as the only reliable narrator of the American tragedy.",
        "key_manifestations": [
          "I'll Take My Stand (Southern Agrarians) (1930)",
          "Bonus Army March (1932)",
          "Little Caesar (Film) (1931)",
          "The Grapes of Wrath by Steinbeck (1939 - literary elevation of this view)"
        ]
      },
      "1935": {
        "salience_share": 21.5,
        "description": "The cluster reached a volatile high (+6.5%) with the rise of Huey Long and Father Coughlin. The catalyst was the perceived slowness of the New Deal; while Roosevelt offered technocratic solutions, Long offered 'Every Man a King'\u2014a raw, redistributive promise based on moral desert. Coughlin's radio broadcasts represented a new technological vector for affective epistemology, creating a feedback loop of anger and solidarity that terrified the establishment. Truth was what the 'Kingfish' said it was.",
        "key_manifestations": [
          "Share Our Wealth Society formed by Huey Long (1934)",
          "Father Coughlin's radio broadcasts (Peak ~1935)",
          "It Can't Happen Here by Sinclair Lewis (1935)",
          "Mr. Deeds Goes to Town (Film) (1936)"
        ]
      },
      "1940": {
        "salience_share": 14.0,
        "description": "A rapid compression (-7.5%) occurred as the war effort required national unity and submission to military expertise. The displacing force was the external threat of fascism; domestic demagoguery was suddenly framed as a 'Fifth Column' activity. The 'people' were redefined not as a class warring against elites, but as a unified national body fighting tyranny. The emotional energy of populism was harnessed by the state for the war bond drives, stripping it of its anti-institutional bite.",
        "key_manifestations": [
          "Meet John Doe (Film) (1941 - warning against populism)",
          "Four Freedoms Speech (1941)",
          "Saboteur (Hitchcock Film) (1942)",
          "Detention of Father Coughlin's associates/silencing (1942)"
        ]
      },
      "1945": {
        "salience_share": 11.0,
        "description": "The cluster remained suppressed (-3.0%) in the immediate post-war victory lap. The GI Bill acted as a massive stabilizing force, converting the potentially discontented proletariat into a property-owning middle class. The catalyst for stability was the broad economic distribution that blunted the 'us vs. them' narrative. However, the seeds of a new anti-communist populism were being sown, shifting the target from 'bankers' to 'intellectual subversives.'",
        "key_manifestations": [
          "All the King's Men by Robert Penn Warren (1946)",
          "The Best Years of Our Lives (1946)",
          "GI Bill of Rights (1944)",
          "Taft-Hartley Act (1947 - curbing labor power)"
        ]
      },
      "1950": {
        "salience_share": 17.5,
        "description": "A specific, sharp spike (+6.5%) driven by McCarthyism. This was 'Red Scare' populism: a direct assault on the State Department elites and Ivy League intellectuals who were accused of betraying the 'real' America. The catalyst was the 'loss' of China and the Soviet bomb, which the common sense of the public felt could only be explained by treason. Epistemically, a 'loyalty oath'\u2014a declaration of feeling\u2014was more important than competence. The 'egghead' became the villain.",
        "key_manifestations": [
          "Senator Joseph McCarthy's Wheeling Speech (1950)",
          "I Led Three Lives (TV Show) (1953)",
          "High Noon (1952 - allegorical tension)",
          "Witness by Whittaker Chambers (1952)"
        ]
      },
      "1955": {
        "salience_share": 13.0,
        "description": "The fever broke (-4.5%) as the Senate censured McCarthy and the 'Liberal Consensus' solidified. The displacing force was the obvious indecency of the Army-McCarthy hearings, which reasserted the value of procedural decorum. The cluster went dormant, sublimated into the 'underground' of the John Birch Society. Mainstream culture celebrated the 'average American' but within a context of deference to authority (Eisenhower).",
        "key_manifestations": [
          "Army-McCarthy Hearings (1954)",
          "Invasion of the Body Snatchers (1956)",
          "The Searchers (1956)",
          "Formation of the John Birch Society (1958)"
        ]
      },
      "1960": {
        "salience_share": 11.5,
        "description": "Low variance (-1.5%) continued during the Camelot era, where the aesthetic of the 'best and brightest' reigned supreme. However, the catalyst for future growth was the Civil Rights movement, which utilized a form of 'moral populism'\u2014appealing to the conscience of the masses against the laws of the state. This was a 'positive' affective epistemology, basing truth on justice rather than tradition, but it destabilized the legalistic order.",
        "key_manifestations": [
          "To Kill a Mockingbird (1960)",
          "Port Huron Statement (1962 - 'Participatory Democracy')",
          "The Conscience of a Conservative by Barry Goldwater (1960)",
          "Letter from Birmingham Jail (1963)"
        ]
      },
      "1965": {
        "salience_share": 15.2,
        "description": "The cluster awoke (+3.7%) as the consensus fractured. The 'white backlash' began to form in response to urban riots and forced integration. The catalyst was the rapid cultural change that alienated the white working class, who felt their 'common sense' values were under attack by distant judges and bureaucrats. Simultaneously, the counter-culture (left populism) attacked the 'technocracy' of the war machine. Both sides agreed: the system was lying.",
        "key_manifestations": [
          "California Proposition 14 (1964)",
          "Watts Riots coverage (1965)",
          "Unsafe at Any Speed (1965 - populist consumerism)",
          "Make Love Not War slogans (1965-)"
        ]
      },
      "1970": {
        "salience_share": 22.0,
        "description": "A major surge (+6.8%) defined by the 'Silent Majority' and the George Wallace campaigns. The catalyst was the explicit politization of resentment. Nixon successfully mobilized the 'forgotten Americans' against the 'liberal media' and the 'campus radicals.' Epistemically, this was the moment where 'media bias' became a central tenet of the populist worldview\u2014the idea that the information gatekeepers were actively hostile to the truth of the people.",
        "key_manifestations": [
          "Hard Hat Riot (1970)",
          "All in the Family (TV premiere 1971)",
          "Joe (Film) (1970)",
          "Nixon's 'Silent Majority' speech (1969)"
        ]
      },
      "1975": {
        "salience_share": 20.5,
        "description": "Variance remained high but plateaued (-1.5%) as the Watergate scandal temporarily vindicated the press (the elite investigators). However, the 'anti-Washington' sentiment became a permanent fixture. The displacing force of Carter's victory was an attempt to merge populism with honesty ('I will never lie to you'), but his failure to manage the economy re-ignited the belief that 'outsiders' were needed to smash the system. The 'Tax Revolt' began to frame taxation as an elite theft.",
        "key_manifestations": [
          "Network (Film) (1976)",
          "Rocky (1976)",
          "Proposition 13 (California) (1978)",
          "The Culture of Narcissism by Christopher Lasch (1979)"
        ]
      },
      "1980": {
        "salience_share": 23.5,
        "description": "A strategic pivot (+3.0%) where populism was wedded to conservatism. Reagan acted as the catalyst, using an affective style ('It's morning in America') to bypass technical economic debates. He successfully framed the *government itself* as the elite cabal holding back the people's potential. The epistemic standard shifted to 'folk wisdom' and anecdotes (the 'welfare queen') which, though statistically dubious, felt 'true' to his coalition.",
        "key_manifestations": [
          "Reagan's Neshoba County Fair speech (1980)",
          "Free to Choose (TV series) (1980)",
          "The Dukes of Hazzard (TV show reflecting rural defiance) (1979-1985)",
          "Moral Majority founding (1979)"
        ]
      },
      "1985": {
        "salience_share": 21.0,
        "description": "A slight dip (-2.5%) as the economic boom placated the anger that fuels this cluster. The 'Yuppie' culture celebrated elite consumption, dampening the anti-elite fire. However, the Farm Crisis kept the old agrarian populism alive in the background. The catalyst for future growth was the repeal of the Fairness Doctrine (1987), which would soon unleash the full power of talk radio as a populist medium.",
        "key_manifestations": [
          "Farm Aid concerts (1985)",
          "Wall Street (Film) (1987)",
          "The Morton Downey Jr. Show (1987)",
          "Repeal of the Fairness Doctrine (1987)"
        ]
      },
      "1990": {
        "salience_share": 24.8,
        "description": "The cluster accelerated (+3.8%) with the rise of Rush Limbaugh and the Pat Buchanan/Ross Perot insurgencies. The catalyst was the end of the Cold War, which removed the external enemy and allowed domestic cultural grievances to take center stage. 'The Culture War' became the primary theater. Epistemically, this era marked the creation of a self-contained alternative media ecosystem where 'truth' was defined by its opposition to the 'Mainstream Media' (MSM).",
        "key_manifestations": [
          "Rush Limbaugh's national syndication (1988/1990)",
          "Pat Buchanan's 'Culture War' speech (1992)",
          "Ross Perot's 'infomercials' (1992)",
          "The Ruby Ridge siege (1992)"
        ]
      },
      "1995": {
        "salience_share": 27.5,
        "description": "Variance grew (+2.7%) as the 'Republican Revolution' brought the populist style into the Speakership (Newt Gingrich). The catalyst was the polarization of the Clinton impeachment era, where political opposition morphed into a moral crusade against the personal corruption of the President. The Oklahoma City bombing showed the extreme, violent edge of the 'paranoid' populist vector. The 'angry white male' became a recognized demographic and political force.",
        "key_manifestations": [
          "Contract with America (1994)",
          "Falling Down (Film) (1993)",
          "Primary Colors by Joe Klein (1996)",
          "Fox News Channel launch (1996)"
        ]
      },
      "2000": {
        "salience_share": 25.0,
        "description": "A temporary pause (-2.5%) as the 9/11 attacks forced a 'rally round the flag' effect, similar to the 1940s. The 'Bush Doctrine' directed populist energy outward against terrorists. However, the domestic embers burned in the 'Red State vs. Blue State' divide, codified by the 2000 election maps. The epistemic split was widening: one half of the country watched Fox, the other CNN, and their baseline realities began to diverge irreconcilably.",
        "key_manifestations": [
          "Bowling for Columbine (2002 - Left populist critique)",
          "Courtesy of the Red, White and Blue by Toby Keith (2002)",
          "The O'Reilly Factor dominance (2000s)",
          "What's the Matter with Kansas? by Thomas Frank (2004)"
        ]
      },
      "2005": {
        "salience_share": 29.0,
        "description": "The cluster turned upward (+4.0%) as the Iraq War soured. The failure of the experts (Cluster 1) fueled a massive 'anti-establishment' mood on both the left (Netroots) and the right. The catalyst was the immigration debate in 2006-2007, which revealed a massive disconnect between the pro-reform business/political elite and the nativist base. The 'Minutemen' border patrols symbolized the citizen taking the law\u2014and the definition of the nation\u2014into their own hands.",
        "key_manifestations": [
          "Lou Dobbs Tonight (Anti-immigration turn) (2006)",
          "Daily Kos/Netroots Nation (2006)",
          "Comprehensive Immigration Reform Act failure (2007)",
          "300 (Film) (2006 - Stylized heroic defense against foreign hordes)"
        ]
      },
      "2010": {
        "salience_share": 36.5,
        "description": "A dramatic surge (+7.5%) with the Tea Party movement. The catalyst was the bailout of the banks and the Affordable Care Act, both seen as technocratic impositions on the will of the people. This was the moment the 'Constitutional Conservative' fused with the populist screamer. Epistemically, the rejection of 'mainstream science' (climate change) and 'mainstream economics' became litmus tests for purity. The 'fake news' concept (pre-Trump) began to bubble as a way to dismiss inconvenient reporting.",
        "key_manifestations": [
          "The Tea Party protests (2009-2010)",
          "Glenn Beck's 'Restoring Honor' rally (2010)",
          "Breitbart News (Andrew Breitbart's influence) (2010)",
          "The Hunger Games (Book) (2008/Film 2012 - Populist allegory)"
        ]
      },
      "2015": {
        "salience_share": 48.0,
        "description": "The cluster went supernova (+11.5%) with the election of Donald Trump. He was the perfect avatar of 'Affective Epistemology': his lies were viewed by supporters as 'emotional truths' or necessary weapons against a corrupt system. The catalyst was the complete collapse of the 'gatekeeper' model of media, allowing direct, unmediated communication via Twitter. The distinction between 'entertainment' and 'governance' evaporated. The 'Deep State' conspiracy theory provided the master key to explain why the people's will was always thwarted.",
        "key_manifestations": [
          "Donald Trump's Escalator Announcement (2015)",
          "The Flight 93 Election (Essay by Michael Anton) (2016)",
          "Hillbilly Elegy (2016)",
          "Make America Great Again red hat (Artifact) (2015-)"
        ]
      },
      "2020": {
        "salience_share": 55.0,
        "description": "Variance expanded (+7.0%) to dominate the cultural landscape. The 'Stop the Steal' movement was the ultimate manifestation of this cluster: the rejection of verified data (vote counts, court rulings) in favor of a felt truth\u2014'I know we won.' The catalyst was the pandemic, which polarized 'freedom' against 'public health,' turning mask-wearing into a populist signal. The January 6th event was the kinetic expression of the belief that the institutions had been captured and only the people could restore the republic.",
        "key_manifestations": [
          "January 6th Capitol Attack (2021)",
          "QAnon conspiracy theory mainstreaming (2020)",
          "Sound of Freedom (Film) (2023 - later manifestation of 2020 currents)",
          "Rich Men North of Richmond by Oliver Anthony (2023)"
        ]
      },
      "2025": {
        "salience_share": 62.0,
        "description": "The cluster continues to rise (+7.0%), morphing into 'Parallel Reality Construction.' With the aid of AI and algorithmic curation, the populace has fully segmented into epistemic tribes. The displacing force for any shared reality is the total saturation of 'synthetic media.' Populism is no longer just about 'the people vs. the elite'; it is about 'our reality vs. their lies.' The very concept of an objective fact is viewed as a tool of oppression. Political discourse is now entirely affective\u2014politics as a dopamine loop of outrage and vindication.",
        "key_manifestations": [
          "The 'National Divorce' discourse (2024-2025)",
          "Tucker Carlson on X (Twitter) (2024)",
          "Rise of 'Sovereign Citizen' AI legal assistants (2025)",
          "The collapse of the Commission on Presidential Debates (2024)"
        ]
      }
    }
  },
  "03_rights_based_universalism_expansion": {
    "name": "Rights-Based Universalism Expansion",
    "description": "This cluster tracks the epistemic and moral shift from 'privilege' and 'hierarchy' to 'universal human rights' as the primary unit of political currency. It maps the expansion of the 'moral circle'\u2014the boundary of who counts as a person worthy of equal dignity and legal protection. It analyzes the transition from rights grounded in specific citizenship (or race/gender) to rights grounded in abstract humanity. The trajectory is generally upward, characterized by 'punctuation' events where the definition of the human is radically renegotiated against fierce resistance.",
    "trajectory": {
      "1890": {
        "salience_share": 3.5,
        "description": "The cluster sat at a repressive low point (-1.2% relative to Reconstruction era hopes). The displacing force was the consolidation of Jim Crow laws and the failure of the Lodge Bill, which effectively signaled the state's abandonment of universalist enforcement. While the rhetoric of rights existed, it was epistemically segregated; 'rights' were increasingly defined as 'white rights' or 'property rights.' The moral circle was actively contracting, excluding Chinese immigrants and re-subjugating Black Americans, despite the 14th Amendment's theoretical presence.",
        "key_manifestations": [
          "The Mississippi Plan (1890 constitution disenfranchising blacks)",
          "How the Other Half Lives (1890 - Implicit appeal to universal dignity)",
          "Lodge Bill failure (1890)",
          "Ghost Dance Movement (1890 - Indigenous claim to spiritual autonomy)"
        ]
      },
      "1895": {
        "salience_share": 4.2,
        "description": "A slight, friction-based increase (+0.7%) triggered by the stark articulation of opposition. The *Plessy v. Ferguson* decision (1896) codified 'separate but equal,' but Justice Harlan's dissent laid the intellectual groundwork for future universalism ('Our Constitution is color-blind'). The catalyst for this nascent resistance was the early organization of African American intellectuals and women's suffrage groups who began to systematically critique the exclusionary state. The concept of the 'New Woman' began to challenge the domestic sphere as the only locus of female existence.",
        "key_manifestations": [
          "Plessy v. Ferguson (Justice Harlan's Dissent) (1896)",
          "The Woman's Bible by Elizabeth Cady Stanton (1895)",
          "Atlanta Compromise Speech (1895 - The pragmatic alternative to rights)",
          "Ida B. Wells' anti-lynching pamphlets (A Red Record) (1895)"
        ]
      },
      "1900": {
        "salience_share": 5.0,
        "description": "Variance crept upward (+0.8%) as the debate over American Imperialism forced a confrontation with universalist principles. The US acquisition of the Philippines created a crisis: does the Constitution follow the flag? The catalyst was the Anti-Imperialist League, which argued that governing without consent violated the fundamental rights of man. Simultaneously, W.E.B. Du Bois declared the 'problem of the color line' to be the issue of the century, explicitly framing racial justice as a universal human issue rather than a regional custom.",
        "key_manifestations": [
          "The Souls of Black Folk by W.E.B. Du Bois (1903)",
          "Platform of the American Anti-Imperialist League (1899)",
          "To the Person Sitting in Darkness by Mark Twain (1901)",
          "Insular Cases (1901 - Legal denial of universal rights)"
        ]
      },
      "1905": {
        "salience_share": 6.5,
        "description": "The cluster accelerated (+1.5%) with the founding of the Niagara Movement. This was a direct rejection of Booker T. Washington's accommodationism, re-centering 'manhood rights' and full civil equality. The catalyst was the increasing radicalization of the suffrage movement, which began shifting from 'moral influence' arguments to 'natural rights' arguments. The Industrial Workers of the World (IWW) also introduced a class-based universalism, arguing that rights belonged to workers regardless of race or nationality.",
        "key_manifestations": [
          "Niagara Movement Declaration of Principles (1905)",
          "The Jungle (1906 - Right to bodily safety)",
          "IWW Preamble (1905)",
          "Lochner v. New York (1905 - 'Right to contract' as a perverse universalism)"
        ]
      },
      "1910": {
        "salience_share": 7.8,
        "description": "Growth continued (+1.3%) with the institutionalization of the rights struggle via the NAACP. The catalyst was the Springfield Race Riot, which proved that the 'race problem' was national, not Southern. This period marked the formalization of legal universalism\u2014the strategy of using the courts to force the state to honor its own text. Suffragettes began observing British militancy, preparing for a more kinetic phase of rights assertion.",
        "key_manifestations": [
          "Founding of the NAACP (1909)",
          "The Crisis magazine launch (1910)",
          "Triangle Shirtwaist Factory fire (1911 - spurring worker safety rights)",
          "Twenty Years at Hull House (1910 - Universalist social ethic)"
        ]
      },
      "1915": {
        "salience_share": 9.2,
        "description": "A significant rise (+1.4%) as the Women's Suffrage movement reached critical mass. The catalyst was the Great War, which highlighted the hypocrisy of fighting for democracy abroad while denying it to half the population at home. The 'Silent Sentinels' picketing the White House represented a modern, confrontational claiming of public space. However, this universalism was still deeply fractured, often excluding black women and immigrants to appease political power brokers.",
        "key_manifestations": [
          "National Woman's Party founding (1916)",
          "Silent Sentinels protests (1917)",
          "Guinn v. United States (1915 - overturning Grandfather Clauses)",
          "The Masses magazine (suppressed 1917)"
        ]
      },
      "1920": {
        "salience_share": 11.5,
        "description": "The cluster spiked (+2.3%) with the ratification of the 19th Amendment. This was the largest single expansion of the franchise in US history, formally acknowledging the political personhood of women. However, the subsequent years saw a 'rights hangover' or stagnation (-0.5% drag). Once the vote was won, the coalition splintered (ERA vs. protective legislation), and the Red Scare chilled advocacy for radical egalitarianism. The ACLU was founded to defend the Bill of Rights, marking a shift toward 'civil liberties' (speech, assembly) as a distinct category of universal rights.",
        "key_manifestations": [
          "19th Amendment to the U.S. Constitution (1920)",
          "Founding of the ACLU (1920)",
          "Schenck v. United States (1919 - 'Clear and present danger' limit)",
          "Gitlow v. New York (1925 - Incorporation doctrine beginning)"
        ]
      },
      "1925": {
        "salience_share": 12.0,
        "description": "Slow growth (+0.5%). The catalyst for this incremental gain was the Indian Citizenship Act of 1924, which theoretically extended universalism to Indigenous peoples, though practical disenfranchisement remained. The cultural focus was largely on individual liberty (lifestyle) rather than political rights. The 'rights' discourse was temporarily captured by the KKK's 'rights of the majority' rhetoric, creating a competitive pressure against minority universalism.",
        "key_manifestations": [
          "Indian Citizenship Act (1924)",
          "Pierce v. Society of Sisters (1925 - Rights of parents)",
          "Buck v. Bell (1927 - 'Three generations of imbeciles' - eugenics vs rights)",
          "Harlem Renaissance literature (Cultural assertion of humanity)"
        ]
      },
      "1930": {
        "salience_share": 13.5,
        "description": "The variance turned upward (+1.5%) as the Depression redefined rights in economic terms. The catalyst was the mass misery that delegitimized the 'right to contract' and elevated the 'right to survive.' The Scottsboro Boys case globalized the issue of American racial injustice, drawing international Marxist attention to the failure of US 'universal' law. Legal realism began to chip away at the formalist denial of rights.",
        "key_manifestations": [
          "Powell v. Alabama (1932 - Right to counsel)",
          "Scottsboro Boys trials coverage (1931-)",
          "Norris-La Guardia Act (1932 - Right to unionize)",
          "Only Yesterday by Frederick Lewis Allen (1931)"
        ]
      },
      "1935": {
        "salience_share": 16.2,
        "description": "A robust expansion (+2.7%) driven by the New Deal's 'Second Bill of Rights' ethos. The Wagner Act was the catalyst, establishing the federally protected right to collective bargaining. This moved rights from the negative (freedom from) to the positive (freedom to/power to). However, the exclusion of agricultural and domestic workers (at the behest of Southern segregationists) cemented a 'bifurcated universalism' that would haunt the coalition for decades.",
        "key_manifestations": [
          "National Labor Relations Act (Wagner Act) (1935)",
          "Missouri ex rel. Gaines v. Canada (1938)",
          "Black Reconstruction in America by W.E.B. Du Bois (1935)",
          "Their Eyes Were Watching God by Zora Neale Hurston (1937)"
        ]
      },
      "1940": {
        "salience_share": 19.0,
        "description": "The cluster surged (+2.8%) as the war against fascism forced the US to articulate a counter-ideology of universal freedom. FDR's 'Four Freedoms' speech was the catalyst, explicitly linking domestic security to universal human rights (freedom from want/fear). The 'Double V' campaign mobilized Black Americans to demand that the victory against Aryan supremacy abroad be matched by a victory against Jim Crow at home. The Japanese Internment (Korematsu) stood as the glaring, tragic counter-weight, proving how fragile 'universal' rights were in the face of security panic.",
        "key_manifestations": [
          "FDR's Four Freedoms Speech (1941)",
          "Korematsu v. United States (1944)",
          "An American Dilemma by Gunnar Myrdal (1944)",
          "Smith v. Allwright (1944 - banning white primaries)"
        ]
      },
      "1945": {
        "salience_share": 23.5,
        "description": "A historic pivot point (+4.5%). The catalyst was the Holocaust and the subsequent Nuremberg Trials, which birthed the modern international human rights regime. The UN Declaration of Human Rights (drafted largely by Eleanor Roosevelt) universalized the American rights tradition, detaching it from the nation-state and attaching it to the human being qua human. Domestically, the desegregation of the military (1948) signaled that the federal government was finally moving against the caste system.",
        "key_manifestations": [
          "Universal Declaration of Human Rights (1948)",
          "To Secure These Rights (Truman Committee Report) (1947)",
          "Executive Order 9981 (1948)",
          "Shelley v. Kraemer (1948 - unenforceable restrictive covenants)"
        ]
      },
      "1950": {
        "salience_share": 26.0,
        "description": "Steady growth (+2.5%) amidst the Cold War. The US needed to win the 'hearts and minds' of the decolonizing world, making domestic segregation a national security liability. The catalyst was the legal strategy of the NAACP Legal Defense Fund, chipping away at 'separate but equal.' However, the Red Scare (McCarthyism) severely damaged the 'civil liberties' aspect of this cluster, equating rights activism with subversion.",
        "key_manifestations": [
          "Invisible Man by Ralph Ellison (1952)",
          "Sweatt v. Painter (1950)",
          "The Origins of Totalitarianism by Hannah Arendt (1951)",
          "Declaration of Conscience by Margaret Chase Smith (1950)"
        ]
      },
      "1955": {
        "salience_share": 31.5,
        "description": "The cluster accelerated significantly (+5.5%) with *Brown v. Board of Education*. This decision was the epistemic earthquake that shattered the legal basis of segregation. The catalyst was the visual evidence of the Civil Rights movement (Rosa Parks, Little Rock), which broadcast the morality play of 'dignity vs. violence' to the world. The murder of Emmett Till provided the visceral, sacrificial energy that made the status quo morally untenable for the Northern liberal consensus.",
        "key_manifestations": [
          "Brown v. Board of Education (1954)",
          "Montgomery Bus Boycott (1955-1956)",
          "Six Sketches (Emmett Till photos in Jet Magazine) (1955)",
          "On the Road by Jack Kerouac (1957 - cultural freedom)"
        ]
      },
      "1960": {
        "salience_share": 38.0,
        "description": "High velocity growth (+6.5%). The 'Rights Revolution' expanded beyond race to include the rights of the accused (Gideon, Miranda). The catalyst was the Sit-In movement and the Freedom Rides, which performed universalism with bodies in space. The epistemic shift was from 'legal incrementalism' to 'Freedom Now.' The concept of 'rights' began to mutate from political access to social and economic equity.",
        "key_manifestations": [
          "Gideon v. Wainwright (1963)",
          "The Feminine Mystique by Betty Friedan (1963)",
          "March on Washington (1963)",
          "Silent Spring (1962 - Right to a clean environment implicit)"
        ]
      },
      "1965": {
        "salience_share": 46.5,
        "description": "The cluster reached its 20th-century legislative apex (+8.5%). The Civil Rights Act (1964) and Voting Rights Act (1965) codified the Second Reconstruction. The Immigration and Nationality Act of 1965 was a crucial, often overlooked catalyst: it removed the race-based national origins quotas, formally declaring that American-ness was not tied to European ancestry. This was the moment 'Multiculturalism' became a demographic inevitability. 'Griswold v. Connecticut' established the 'Right to Privacy,' planting the seed for future reproductive and sexual rights battles.",
        "key_manifestations": [
          "Voting Rights Act of 1965",
          "Immigration and Nationality Act of 1965",
          "Griswold v. Connecticut (1965)",
          "Loving v. Virginia (1967)"
        ]
      },
      "1970": {
        "salience_share": 51.0,
        "description": "Continued expansion (+4.5%) but fracturing into identity-specific streams. The catalyst was the perceived failure of universalism to address specific oppressions, leading to Women's Lib, Gay Liberation (Stonewall), and Disability Rights. The passage of Title IX extended rights enforcement into education and sports. *Roe v. Wade* (1973) was the pivotal event, turning the 'Right to Privacy' into a central pole of American political conflict.",
        "key_manifestations": [
          "Roe v. Wade (1973)",
          "Title IX of the Education Amendments (1972)",
          "Equal Rights Amendment (Passed Congress 1972)",
          "Rehabilitation Act of 1973 (Section 504)"
        ]
      },
      "1975": {
        "salience_share": 52.5,
        "description": "Growth slowed (+1.5%) as the backlash solidified. The defeat of the ERA and the *Bakke* decision (1978) marked the limits of the expansion. The catalyst for the slowdown was the rise of the 'reverse discrimination' narrative\u2014the idea that universalism had gone too far and was now punishing the majority. However, the human rights concept was successfully exported to foreign policy via the Helsinki Accords and Carter's doctrine.",
        "key_manifestations": [
          "Regents of the Univ. of California v. Bakke (1978)",
          "Harvey Milk's election/assassination (1977/78)",
          "Helsinki Accords (1975)",
          "Introduction of IDEA (Education for All Handicapped Children Act) (1975)"
        ]
      },
      "1980": {
        "salience_share": 50.0,
        "description": "A slight retraction (-2.5%) as the Reagan era emphasized property rights and individual responsibility over group rights or social entitlements. The displacing force was the HIV/AIDS crisis, which initially saw a retraction of the moral circle regarding gay men (stigma, inaction). However, this repression acted as a pressure cooker, forcing the gay rights movement to professionalize and adopt the language of universal rights ('Silence = Death') to survive.",
        "key_manifestations": [
          "Bowers v. Hardwick (1986 - upholding sodomy laws)",
          "And the Band Played On by Randy Shilts (1987)",
          "Civil Liberties Act of 1988 (Reparations for Internment)",
          "Employment Division v. Smith (1990 - contracting religious freedom)"
        ]
      },
      "1985": {
        "salience_share": 51.5,
        "description": "A rebound (+1.5%) driven by the Americans with Disabilities Act (ADA) movement. The catalyst was the 'Capitol Crawl,' a powerful visual demonstration of exclusion. The ADA was a landmark synthesis of civil rights and market participation, signed by a Republican president. It represented the 'built environment' phase of universalism\u2014changing the physical world to accommodate the full range of human variation.",
        "key_manifestations": [
          "Americans with Disabilities Act (signed 1990, drafted late 80s)",
          "ACT UP protests (1987-)",
          "Webster v. Reproductive Health Services (1989)",
          "Paris Is Burning (Film) (1990)"
        ]
      },
      "1990": {
        "salience_share": 53.0,
        "description": "Modest growth (+1.5%) as 'Human Rights' became the dominant global ideology post-Cold War. The intervention in the Balkans and the Rwandan genocide (despite inaction) centered the discourse on the 'Right to Protect.' Domestically, the 'Culture Wars' raged, but the normative power of 'tolerance' was gaining ground. The Violence Against Women Act (1994) framed domestic abuse not as a private matter but a human rights violation.",
        "key_manifestations": [
          "Violence Against Women Act (1994)",
          "Beijing Declaration (Women's Rights are Human Rights) (1995)",
          "Don't Ask, Don't Tell (1993 - The compromise that failed)",
          "Romer v. Evans (1996 - Gay rights victory)"
        ]
      },
      "1995": {
        "salience_share": 54.5,
        "description": "Steady state (+1.5%). The internet began to allow marginalized groups to form 'counter-publics.' The catalyst for future expansion was the rise of the marriage equality movement, which reframed gay rights from 'sexual liberty' (scary to the mainstream) to 'family formation' (conservative/palatable). This was a strategic pivot in the universalist logic.",
        "key_manifestations": [
          "Defense of Marriage Act (1996 - The reaction)",
          "Ellen DeGeneres coming out (1997)",
          "VMI Decision (US v. Virginia) (1996 - Gender equality)",
          "The Vagina Monologues (1996)"
        ]
      },
      "2000": {
        "salience_share": 52.0,
        "description": "A dip (-2.5%) due to the War on Terror. The Patriot Act and Guantanamo Bay represented a suspension of universal rights (Habeas Corpus) in favor of security. The displacing force was the 'State of Exception' logic. 'Torture memos' debated the definition of pain, shrinking the moral circle for 'enemy combatants.' However, *Lawrence v. Texas* (2003) decriminalized sodomy, a massive victory for the private sphere.",
        "key_manifestations": [
          "Lawrence v. Texas (2003)",
          "USA PATRIOT Act (2001)",
          "Torture Memos (2002)",
          "Grutter v. Bollinger (2003 - Affirmative Action survival)"
        ]
      },
      "2005": {
        "salience_share": 56.0,
        "description": "Rapid acceleration (+4.0%) as the Marriage Equality movement gained state-level victories. The catalyst was the generational turnover; Millennials viewed LGBTQ rights as a non-negotiable component of universalism. The election of Barack Obama (2008) was a symbolic apex of the 1960s rights dream, seeming to validate the arc of the moral universe. The 'Dreamer' movement (DACA) brought undocumented youth into the rights discourse as sympathetic figures.",
        "key_manifestations": [
          "Obama's 'A More Perfect Union' speech (2008)",
          "Proposition 8 Protests (2008)",
          "Lilly Ledbetter Fair Pay Act (2009)",
          "Milk (Film) (2008)"
        ]
      },
      "2010": {
        "salience_share": 62.5,
        "description": "Major surge (+6.5%). *Obergefell v. Hodges* (2015) nationalized marriage equality. But the true catalyst for the variance spike was the emergence of Black Lives Matter (2013). This movement challenged the 'post-racial' complacency, asserting that the 'Right to Life' was unequally distributed. It shifted the epistemic focus from 'legal rights' (which were won) to 'lived experience/bodily safety' (which were not). Trans rights also exploded onto the scene as the next frontier of universalism.",
        "key_manifestations": [
          "Obergefell v. Hodges (2015)",
          "Birth of Black Lives Matter (hashtag/movement) (2013)",
          "Shelby County v. Holder (2013 - gutting VRA, a counter-force)",
          "Between the World and Me (2015)"
        ]
      },
      "2015": {
        "salience_share": 65.0,
        "description": "Continued high variance (+2.5%) but increasing polarization. The #MeToo movement (2017) universalized the right to bodily autonomy against workplace coercion. The catalyst was the collapse of gatekeeper protection for powerful men. However, the 'Rights' framework began to clash with the 'Religious Liberty' framework (Masterpiece Cakeshop), setting up a zero-sum conflict between two types of rights claims. The 'Muslim Ban' provoked an immediate, massive legal and protest response, proving the resilience of the universalist reflex.",
        "key_manifestations": [
          "The #MeToo Movement (2017)",
          "Masterpiece Cakeshop v. Colorado Civil Rights Commission (2018)",
          "Bostock v. Clayton County (2020 - Title VII protects LGBT)",
          "The 1619 Project (2019 - reframing the rights narrative)"
        ]
      },
      "2020": {
        "salience_share": 60.5,
        "description": "A complex retraction (-4.5%) and mutation. The *Dobbs* decision (2022) overturning *Roe* was the first major contraction of a constitutional right in US history, shattering the 'ratchet theory' of progress (that rights only expand). The displacing force was Originalism (Cluster 17). Simultaneously, the concept of 'Equity' began to displace 'Equality' on the left. Equity is not strictly 'universalist' in the blind sense; it demands outcome-based adjustments. This created an internal tension within the cluster between old-school liberal universalism and new identity-aware equity frameworks.",
        "key_manifestations": [
          "Dobbs v. Jackson Women's Health Organization (2022)",
          "Students for Fair Admissions v. Harvard (2023 - ending affirmative action)",
          "Respect for Marriage Act (2022)",
          "The Equity vs. Equality meme/discourse (2020-)"
        ]
      },
      "2025": {
        "salience_share": 58.0,
        "description": "The cluster faces a crisis of definition (-2.5%). The rise of 'parental rights' and 'biological rights' movements acts as a powerful counter-universalism, seeking to carve out exemptions from the general liberal order. The catalyst is the 'Transgender Debate,' which tests the limits of the universalist claim that 'human is human' regardless of biology. Epistemically, the consensus on what constitutes a 'fundamental right' has dissolved. We are entering an era of 'Rights Federalism,' where your human rights depend entirely on your geography, reversing the 1960s nationalization trend.",
        "key_manifestations": [
          "State-level 'Bill of Rights' divergencies (Red vs Blue state constitutions) (2024-2025)",
          "Proposed 'Digital Bill of Rights' (AI protections) (2025)",
          "The 'Human Rights' case for fossil fuels vs climate change (Litigation trends 2025)",
          "Rise of 'Christian Nationalism' legal theories (2025)"
        ]
      }
    }
  },
  "04_civic_republican_virtue_and_duty": {
    "name": "Civic Republican Virtue & Duty",
    "description": "This cluster represents the ancient but fading ideal that political liberty depends on the active participation of virtuous citizens who subordinate private interest to the public good. Unlike the rights-based liberal tradition (which asks 'what is due to me?'), this tradition asks 'what do I owe?'. It manifests in the valorization of service, the 'strenuous life,' volunteerism, and the belief that corruption is a moral failing of character rather than just a systemic inefficiency. Its trajectory is a long, slow decline from a dominant cultural ethos to a nostalgic rhetoric, displaced by consumerism, rights-talk, and therapeutic individualism.",
    "trajectory": {
      "1890": {
        "salience_share": 12.5,
        "description": "The cluster was a dominant force (+1.5% relative to the Gilded Age low) as the 'Mugwump' reformers sought to cleanse the republic of party machines. The catalyst was the perceived degradation of the 'citizen' into a mere partisan hack. Epistemically, 'virtue' was considered a real, observable quality necessary for leadership. The founding of civic organizations was explosive, reflecting a belief that the health of the state relied on the moral caliber of its private associations.",
        "key_manifestations": [
          "The American Commonwealth by James Bryce (1888/90 influence)",
          "Sherman Antitrust Act (1890 - framed as preserving republican independence)",
          "How the Other Half Lives (1890 - appeal to civic conscience)",
          "Founding of the General Federation of Women's Clubs (1890)"
        ]
      },
      "1895": {
        "salience_share": 13.2,
        "description": "Variance held steady (+0.7%) as the 'Good Government' (Goo-Goo) movement gained traction in cities. The displacing force of raw industrial capitalism was countered by an intense moral rhetoric about the 'commonwealth.' Theodore Roosevelt began his ascent as the personification of this cluster: the belief that the rich man owes service to the state to justify his privilege. The 'Social Gospel' movement linked religious duty directly to civic improvement.",
        "key_manifestations": [
          "Theodore Roosevelt's appointment as NYC Police Commissioner (1895)",
          "Christianity and the Social Crisis (roots of movement)",
          "The Red Badge of Courage (1895 - examining courage/duty)",
          "Atlanta Compromise (1895 - Washington's appeal to civic utility)"
        ]
      },
      "1900": {
        "salience_share": 14.8,
        "description": "A surge (+1.6%) with TR's presidency. He injected the language of 'The Strenuous Life' into the national bloodstream. The catalyst was the need to administer an empire; the republic could only survive expansion if its citizens remained virile and virtuous. This was the peak of 'muscular Christianity' applied to civics. The creation of the Boy Scouts (imported/founded shortly after) symbolized the institutionalization of character building as a national security imperative.",
        "key_manifestations": [
          "The Strenuous Life speech/essays by Theodore Roosevelt (1900)",
          "Up from Slavery (1901 - narrative of self-improvement for service)",
          "Founding of the Juvenile Court system (saving future citizens)",
          "McKinley Assassination (1901 - triggering reflection on anarchy vs order)"
        ]
      },
      "1905": {
        "salience_share": 15.5,
        "description": "Continued high variance (+0.7%). The 'Conservation' movement was framed not just as resource management, but as a stewardship duty to future generations\u2014a quintessential republican idea. The catalyst was the realization that the frontier was closed, requiring a shift from 'conquest' to 'citizenship.' The 'muckrakers' (Cluster 10) served this cluster by shaming the public into action, assuming that if the people *knew*, their virtue would compel them to act.",
        "key_manifestations": [
          "The House of Mirth by Edith Wharton (1905 - tragedy of lost virtue)",
          "Formation of the US Forest Service (1905 - stewardship ethic)",
          "The Jungle (1906 - sparked civic outrage)",
          "William James's 'The Moral Equivalent of War' (1906 speech/1910 essay)"
        ]
      },
      "1910": {
        "salience_share": 16.0,
        "description": "The cluster plateaued (+0.5%). The founding of the Boy Scouts of America (1910) was a specific manifestation of the anxiety that urban life was softening the character of youth. The epistemic assumption was that democracy required a specific *type* of human being\u2014disciplined, loyal, and physically fit. The 'New Nationalism' of TR prioritized the national collective over the sectional or individual interest.",
        "key_manifestations": [
          "Founding of Boy Scouts of America (1910)",
          "The Promise of American Life by Herbert Croly (1909)",
          "Twenty Years at Hull House (1910 - Civic duty in action)",
          "The New Nationalism speech (1910)"
        ]
      },
      "1915": {
        "salience_share": 18.5,
        "description": "A sharp rise (+2.5%) as the 'Preparedness Movement' took hold. The looming war catalyzed a discourse on obligation. The 'Plattsburg Movement' (volunteer military training for elites) exemplified the civic republican ideal: the wealthy volunteering to lead and bleed. The displacing force of pacifism was strong, but the moral weight was on the side of 'duty.' Hyphenated Americanism was attacked because it suggested divided loyalty, a sin against the civic whole.",
        "key_manifestations": [
          "The Plattsburg Movement (1915-1916)",
          "Hyphenated Americans speeches by Wilson/TR (1915)",
          "Herland by Charlotte Perkins Gilman (1915 - communitarian utopia)",
          "Introduction of ROTC (National Defense Act of 1916)"
        ]
      },
      "1920": {
        "salience_share": 12.0,
        "description": "A precipitous drop (-6.5%). The 'Return to Normalcy' was effectively a rejection of high-intensity civic virtue in favor of private commercialism. The catalyst was the disillusionment with WWI propaganda; the 'Crusade for Democracy' turned out to be a muddy slaughter. 'Duty' was replaced by 'Business.' The 'Lost Generation' writers mocked the old virtues as hollow lies. The definition of the good life shifted from 'citizen' to 'consumer.'",
        "key_manifestations": [
          "Main Street by Sinclair Lewis (1920 - satire of civic hollow)",
          "This Side of Paradise by Fitzgerald (1920)",
          "A Farewell to Arms (1929 - retrospective rejection of glory)",
          "Mencken's Prejudices (1919-1927 - cynicism toward democracy)"
        ]
      },
      "1925": {
        "salience_share": 9.5,
        "description": "Continued decline (-2.5%). The 'Roaring Twenties' were the nadir of this cluster for the early century. Civic engagement became performative (Rotary Clubs) rather than substantive. The catalyst was the booming stock market, which suggested that the pursuit of private vice (greed/luxury) led to public benefit (prosperity), severing the link between personal austerity and national health. The Great Gatsby is the tombstone of the old virtue.",
        "key_manifestations": [
          "The Great Gatsby (1925)",
          "The Man Nobody Knows (1925 - Jesus as Salesman, not Martyr)",
          "Babbitt (1922 - The conformist substitute for virtue)",
          "Middletown (1929 - documenting the shift to leisure)"
        ]
      },
      "1930": {
        "salience_share": 14.5,
        "description": "A strong rebound (+5.0%). The Depression destroyed the legitimacy of the self-interested market actor. The catalyst was the need for survival, which reactivated local networks of mutual aid and charity. FDR's rhetoric summoned a 'war' against the emergency, re-enlisting the citizenry in a common cause. The Civilian Conservation Corps (CCC) was the purest policy manifestation: young men sent into the wilderness to build character and infrastructure for the nation.",
        "key_manifestations": [
          "Civilian Conservation Corps (CCC) established (1933)",
          "FDR's First Inaugural Address (1933)",
          "Mr. Smith Goes to Washington (1939 - filming 30s ethos)",
          "The Grapes of Wrath (1939 - The 'oversoul' of shared burden)"
        ]
      },
      "1935": {
        "salience_share": 16.0,
        "description": "Variance grew (+1.5%) as the New Deal matured into a permanent civic infrastructure. The WPA arts projects celebrated the 'common man' not as a consumer, but as a producer and citizen. The displacing force of radical individualism was suppressed. The 'Popular Front' culture emphasized anti-fascism as a civic duty, linking American virtue to a global struggle against tyranny.",
        "key_manifestations": [
          "WPA Murals (Civic art for public spaces) (1935-)",
          "It Can't Happen Here (1935 - Warning of lost virtue)",
          "Waiting for Lefty (1935 - Collective action)",
          "Social Security Act (1935 - Intergenerational compact)"
        ]
      },
      "1940": {
        "salience_share": 22.0,
        "description": "The cluster reached its 20th-century zenith (+6.0%). World War II enforced a total mobilization of virtue. Rationing, war bonds, and the draft were not just policies but moral tests. The catalyst was Pearl Harbor, which instantly dissolved the isolationist/private mood. The 'shirker' became a social pariah. Epistemically, the 'public good' was tangibly visible in scrap metal drives and victory gardens. This generation would forever define 'citizenship' by this period of intense shared sacrifice.",
        "key_manifestations": [
          "Four Freedoms Paintings by Norman Rockwell (1943)",
          "Office of Price Administration (Rationing) (1941)",
          "Why We Fight (1942)",
          "Casablanca (1942 - Rick's turn from isolation to duty)"
        ]
      },
      "1945": {
        "salience_share": 21.0,
        "description": "Slight relaxation (-1.0%) but the 'Victory Culture' maintained high levels of civic pride. The GI Bill was a reward for virtue, reinforcing the link between service and citizenship. The catalyst for the slight dip was the immediate desire to return to private life ('The Man in the Gray Flannel Suit' era begins). However, the founding of the UN and the Marshall Plan framed American generosity as a global civic duty.",
        "key_manifestations": [
          "The Best Years of Our Lives (1946)",
          "The Marshall Plan (1948)",
          "All the King's Men (1946 - Corruption vs Virtue)",
          "Formation of the UN (1945)"
        ]
      },
      "1950": {
        "salience_share": 18.5,
        "description": "A slow decline (-2.5%) as 'Civic Virtue' morphed into 'Conformity.' The Cold War required loyalty, but it was a passive, paranoid loyalty (Cluster 06) rather than the active, strenuous participation of the TR era. The catalyst was the rise of suburbia, which privatized the 'good life.' Civic participation moved into safe, non-political channels (PTA, Little League), losing its sharp republican edge of guarding liberty against tyranny.",
        "key_manifestations": [
          "The Lonely Crowd (1950)",
          "High Noon (1952 - Failure of the town's civic courage)",
          "Creation of the Department of HEW (1953)",
          "In God We Trust added to currency (1956 - Civil Religion)"
        ]
      },
      "1955": {
        "salience_share": 17.0,
        "description": "Continued erosion (-1.5%). The displacing force was the explosion of consumer culture (TV, cars). The 'citizen' was increasingly addressed as the 'consumer.' However, the Civil Rights movement began to reclaim the language of civic virtue, arguing that segregation was a corruption of the republican soul. Martin Luther King Jr. appealed to the 'American Dream' as a shared covenant.",
        "key_manifestations": [
          "Profiles in Courage by JFK (1956 - Nostalgia for virtue)",
          "Rebel Without a Cause (1955 - Failure of the father/citizen)",
          "Montgomery Bus Boycott (1955 - Discipline/Civic Sacrifice)",
          "The Power Elite by C. Wright Mills (1956 - Cynicism starts)"
        ]
      },
      "1960": {
        "salience_share": 19.5,
        "description": "A temporary, rhetorical spike (+2.5%) with JFK. His Inaugural Address ('Ask not...') was a deliberate attempt to resurrect the civic republican ethos against the softness of the 50s. The Peace Corps was the policy manifestation: service as an adventure and duty. The catalyst was the generational transfer to the WWII vets who wanted to instill their service ethic in the youth. It was the 'Indian Summer' of this cluster.",
        "key_manifestations": [
          "JFK's Inaugural Address (1961)",
          "Establishment of the Peace Corps (1961)",
          "To Kill a Mockingbird (1960 - Atticus as civic saint)",
          "Port Huron Statement (1962 - 'Participatory Democracy')"
        ]
      },
      "1965": {
        "salience_share": 14.5,
        "description": "A collapse (-5.0%). The Vietnam War severed the link between 'duty' and 'good.' The draft, once a equalizer, became a mechanism of injustice. The catalyst was the credibility gap; the state was no longer the vessel of the common good but a 'war machine.' Civic virtue requires trust, and trust evaporated. The counter-culture proposed a new virtue based on authenticity (Cluster 19) rather than duty.",
        "key_manifestations": [
          "Draft card burnings (1965-)",
          "Catch-22 (Film adaptation/cultural peak) (1970)",
          "The Green Berets (Film) (1968 - Failed attempt to restore myth)",
          "Kerner Commission Report (1968 - Diagnosis of civic failure)"
        ]
      },
      "1970": {
        "salience_share": 10.5,
        "description": "Continued freefall (-4.0%). The 'Me Decade' began. The displacing force was the turn inward toward therapeutic self-help (Cluster 14). Political participation declined; the 'silent majority' withdrew into private resentment. Watergate confirmed that the 'best men' were actually criminals. The ideal of the 'Public Servant' was shattered.",
        "key_manifestations": [
          "The Culture of Narcissism (1979)",
          "All the President's Men (1974)",
          "Dirty Harry (1971 - Vigilante as substitute for failed civic order)",
          "Voting age lowered to 18 (26th Amendment) (1971 - Rights expanded, turnout dropped)"
        ]
      },
      "1975": {
        "salience_share": 9.0,
        "description": "Stagnation (-1.5%). Jimmy Carter's 'Malaise Speech' was a desperate, failed attempt to reignite civic republicanism (condemning materialism, asking for sacrifice). The public rejected it. The catalyst for the rejection was inflation and gas lines; people wanted solutions, not sermons. The Bicentennial (1976) was a hollow celebration of forms without the substance of shared purpose.",
        "key_manifestations": [
          "Crisis of Confidence (Malaise) Speech (1979)",
          "United States Bicentennial (1976)",
          "Tax Revolt (Prop 13) (1978 - Rejection of common pot)",
          "Network (1976 - 'I'm mad as hell')"
        ]
      },
      "1980": {
        "salience_share": 7.5,
        "description": "A redefining (-1.5%). Reagan changed the definition of a 'good citizen' from one who sacrifices for the state to one who unleashes economic energy *against* the state. 'Civic Duty' was privatized into 'Charity' and 'Voluntarism' (1000 Points of Light). The catalyst was the neoliberal assertion that the pursuit of private gain was the highest public good. The 'public square' became the 'marketplace.'",
        "key_manifestations": [
          "Reagan's First Inaugural ('Government is the problem') (1981)",
          "Wall Street (1987 - 'Greed is Good' as anti-virtue)",
          "The Bonfire of the Vanities (1987)",
          "Ghostbusters (1984 - Private enterprise saves city from EPA)"
        ]
      },
      "1985": {
        "salience_share": 6.8,
        "description": "Low steady state (-0.7%). The 'yuppie' archetype represented the antithesis of civic republicanism. However, a counter-current began to emerge among intellectuals worrying about the 'loss of community.' The catalyst was the visible decay of urban centers, prompting a nostalgia for the old civic order.",
        "key_manifestations": [
          "Habits of the Heart by Bellah et al. (1985)",
          "Communitarian movement beginnings (Etzioni)",
          "Watchmen (Comic) (1986 - Deconstruction of the hero/guardian)",
          "Ferris Bueller's Day Off (1986 - Celebration of truancy/anti-duty)"
        ]
      },
      "1990": {
        "salience_share": 7.2,
        "description": "A slight bump (+0.4%) with the Gulf War and the 'Third Way' politics of Clinton, which tried to balance 'rights and responsibilities.' AmeriCorps (1993) was a policy attempt to institutionalize national service. The catalyst was the post-Cold War search for national purpose. However, the 'consumer citizen' remained the dominant mode.",
        "key_manifestations": [
          "AmeriCorps founded (1993)",
          "Saving Private Ryan (1998 - Looking back to the 'Good War')",
          "It Takes a Village by Hillary Clinton (1996)",
          "The West Wing (TV Premiere 1999 - Fantasy of noble public service)"
        ]
      },
      "1995": {
        "salience_share": 6.0,
        "description": "Decline resumes (-1.2%). Robert Putnam's 'Bowling Alone' essay (1995) diagnosed the collapse of social capital. The catalyst was the atomization caused by technology and suburban sprawl. The impeachment of Clinton reinforced the cynicism about the character of leaders. 'Virtue' became a partisan buzzword (William Bennett) rather than a shared practice.",
        "key_manifestations": [
          "Bowling Alone (Article) (1995)",
          "The Book of Virtues by William Bennett (1993/influential)",
          "Clinton Impeachment proceedings (1998)",
          "Fight Club (1999 - Violent reaction to civic emptiness)"
        ]
      },
      "2000": {
        "salience_share": 9.5,
        "description": "A sharp, tragedy-induced spike (+3.5%). The 9/11 attacks caused a momentary explosion of civic republican sentiment. Firefighters became the new model of virtue. The catalyst was the external attack, which always consolidates the republic. However, President Bush's advice to 'go shopping' undercut the potential for long-term mobilization. The 'War on Terror' quickly became a professionalized military action rather than a citizen's war.",
        "key_manifestations": [
          "9/11 Memorials/Vigils (2001)",
          "Bush's 'Go Shopping' exhortation (2001 - The limit of the cluster)",
          "Spider-Man (2002 - 'With great power comes great responsibility')",
          "Freedom Corps (2002)"
        ]
      },
      "2005": {
        "salience_share": 6.5,
        "description": "The spike dissipated (-3.0%) into the quagmire of Iraq. The realization that the 'sacrifice' was borne by a tiny percentage of military families while the rest of the country cut taxes bred cynicism. The displacing force was the 'Chickenhawk' narrative. Hurricane Katrina showed the failure of the 'commonwealth' to protect its own citizens, shattering the civic compact.",
        "key_manifestations": [
          "Generation Kill (Book 2004/Series 2008)",
          "Hurricane Katrina response failures (2005)",
          "Avatar (2009 - Rejection of the militarized state)",
          "The Dark Knight (2008 - The hero the city deserves vs needs)"
        ]
      },
      "2010": {
        "salience_share": 5.0,
        "description": "Continued decline (-1.5%). The Tea Party and Occupy Wall Street both represented a fracture of the 'One Nation' ideal into adversarial tribes. The catalyst was the bailouts: the perception that the social contract was broken by the elites. 'Civic Duty' was replaced by 'Activism'\u2014which is distinct; activism is partisan and demanding, while civic duty is unifying and giving. The 'Common Good' became a contested term.",
        "key_manifestations": [
          "Citizens United v. FEC (2010 - Corporate speech = civic speech)",
          "Coming Apart by Charles Murray (2012)",
          "Captain America: The Winter Soldier (2014 - Hero vs the State)",
          "Detroit Bankruptcy (2013 - Symbolic death of the civic city)"
        ]
      },
      "2015": {
        "salience_share": 3.5,
        "description": "Low point (-1.5%). The 2016 election was fought with almost zero appeal to 'civic virtue' in the classical sense. It was a battle of raw interests and identities. The catalyst was the total erosion of 'institutional norms'\u2014the unwritten rules of republican conduct. The 'Adult in the Room' became a term of derision. The very idea of a 'neutral public servant' was dismissed as 'Deep State' camouflage.",
        "key_manifestations": [
          "Hamilton (Musical) (2015 - A desperate cultural attempt to revive the myth)",
          "Sanctuary Cities movement (2016 - Civic disobedience)",
          "Make America Great Again (The slogan emphasizes result, not process/virtue)",
          "Pokemon Go (2016 - Brief moment of public space reclamation)"
        ]
      },
      "2020": {
        "salience_share": 4.2,
        "description": "A weird, polarized mutation (+0.7%). The pandemic made 'public health' a test of civic duty (masks, vaccines). However, because the epistemic foundation (Cluster 1) was cracked, this call to duty split the country rather than uniting it. For one side, wearing a mask was the ultimate civic virtue; for the other, *resisting* the mandate was the duty of a free citizen. The catalyst was the politicization of biology. The 'Common Good' was no longer a shared reality.",
        "key_manifestations": [
          "Clapping for Carers/Essential Workers (2020)",
          "The Great Barrington Declaration (2020)",
          "Don't Look Up (2021 - Satire of civic incapacity)",
          "Mask Mandate Protests (2020-2021)"
        ]
      },
      "2025": {
        "salience_share": 2.8,
        "description": "The cluster nears historical irrelevance (-1.4%). The concept of 'National Service' is viewed as an archaic or dangerous idea. The displacing force is 'Digital Tribalism' and the 'Network State' concept\u2014where people choose their communities based on alignment rather than geography. 'Duty' is owed to the Discord server or the DAO, not the United States. The 250th anniversary of the US (Semiquincentennial) is approaching with trepidation rather than unity, highlighting the hollow core of the civic republic.",
        "key_manifestations": [
          "The Network State by Balaji Srinivasan (Book/Concept 2022, realized 2025)",
          "Decline of military recruitment numbers (Crisis levels 2024-2025)",
          "Civil War (Alex Garland Film) (2024 - visualizing the fracture)",
          "fragmented Semiquincentennial planning committees (2025)"
        ]
      }
    }
  },
  "05_market_based_epistemology": {
    "name": "Market-Based Epistemology",
    "description": "This cluster represents the conviction that the free market is not merely an economic mechanism but a superior information processing system and moral arbiter. It posits that the 'Price Signal' aggregates dispersed knowledge better than any expert planner (Cluster 01) ever could. Morally, it equates market outcomes with 'natural justice'\u2014if you fail, it is because you failed to provide value. Its trajectory tracks the rise of laissez-faire, its near-death experience in the Depression, its intellectual hibernation, and its triumphant neoliberal resurrection before facing a new crisis of legitimacy in the 21st century.",
    "trajectory": {
      "1890": {
        "salience_share": 16.5,
        "description": "The cluster operated at a historical peak (+2.5% from the 1880s baseline), underpinned by Social Darwinism. The catalyst was the raw, transformative power of industrialization, which seemed to prove that unbridled competition drove progress. Epistemically, the market was viewed as a law of nature, akin to gravity; interfering with it was not just inefficient but immoral and futile. The courts began to elevate 'Liberty of Contract' to a constitutional right, effectively immunizing the market from democratic feedback. Wealth was prima facie evidence of virtue.",
        "key_manifestations": [
          "The Gospel of Wealth by Andrew Carnegie (1889)",
          "Sumner's 'What Social Classes Owe to Each Other' (1883/influential 90s)",
          "Sherman Antitrust Act (1890 - The backlash proving the dominance)",
          "Chicago, Burlington & Quincy Railroad Co. v. Chicago (1897)"
        ]
      },
      "1895": {
        "salience_share": 15.8,
        "description": "Variance held steady (-0.7%) despite the Panic of 1893. The displacing force of economic depression was countered by a doubling down on hard money orthodoxy. The election of 1896 was a referendum on this epistemology: Bryan (Cluster 02) argued for money as a social construct to relieve debt, while McKinley argued for the Gold Standard as an objective reality. The victory of Gold confirmed the market's supremacy. The Supreme Court's *Pollock* decision, striking down the income tax, codified the sanctity of private capital accumulation.",
        "key_manifestations": [
          "Pollock v. Farmers' Loan & Trust Co. (1895)",
          "McKinley's 'Front Porch' Campaign (1896)",
          "The Theory of the Leisure Class by Veblen (1899 - Critique showing dominance)",
          "United States v. E.C. Knight Co. (1895)"
        ]
      },
      "1900": {
        "salience_share": 13.5,
        "description": "A slow erosion began (-2.3%). The catalyst was the rise of Progressivism (Cluster 01), which argued that market failures (monopolies, child labor) were bugs, not features. The assassination of McKinley (1901) symbolized the vulnerability of the old order. While business was still king, the epistemic certainty that 'the market knows best' was being challenged by the 'muckrakers' who revealed the market's dirty secrets. The formation of US Steel (the first billion-dollar corp) paradoxically hurt this cluster by showing that competition was ending in consolidation, not freedom.",
        "key_manifestations": [
          "Formation of U.S. Steel (1901)",
          "The Octopus by Frank Norris (1901)",
          "Northern Securities Co. v. United States (1904)",
          "The History of the Standard Oil Company by Ida Tarbell (1904)"
        ]
      },
      "1905": {
        "salience_share": 14.2,
        "description": "A brief stabilization (+0.7%) driven by the *Lochner* decision. This was the judicial high-water mark for market epistemology: the Supreme Court ruled that a law limiting working hours violated the right of the worker to sell his labor freely. The reasoning explicitly rejected the state's 'police power' in favor of the market's private contracts. However, culturally, the tide was turning; the *Lochner* decision was widely reviled, indicating a gap between the legal elite's market worship and the public's reality.",
        "key_manifestations": [
          "Lochner v. New York (1905)",
          "The Jungle (1906 - Market failure in food safety)",
          "The Education of Henry Adams (1907 - Confusion at modern forces)",
          "Panic of 1907 (Requiring JP Morgan's intervention, not market self-correction)"
        ]
      },
      "1910": {
        "salience_share": 11.5,
        "description": "The decline accelerated (-2.7%). The catalyst was the Panic of 1907, which proved that the 'invisible hand' needed a 'visible lender of last resort' (leading to the Federal Reserve). The breakup of Standard Oil (1911) was a state intervention that explicitly declared market outcomes (monopoly) to be illegal. The epistemic shift was toward 'regulated competition'\u2014acknowledging that markets were useful tools but dangerous masters.",
        "key_manifestations": [
          "Standard Oil Co. of New Jersey v. United States (1911)",
          "Federal Reserve Act (1913)",
          "The New Freedom (Wilson's platform) (1912)",
          "16th Amendment (Income Tax) (1913 - Ending capital's immunity)"
        ]
      },
      "1915": {
        "salience_share": 8.0,
        "description": "A sharp drop (-3.5%) due to WWI. War is the ultimate negation of market logic; resources are allocated by command, not price. The War Industries Board took over the economy, proving that planning could outperform markets in a crisis. The displacing force was the national emergency, which suspended the 'efficiency' argument. The railroads were nationalized (temporarily), a formerly unthinkable violation of private property rights.",
        "key_manifestations": [
          "Railroad Administration Act (1917)",
          "War Industries Board (1917)",
          "Schenck v. United States (1919 - Limits on marketplace of ideas)",
          "Overman Act (1918)"
        ]
      },
      "1920": {
        "salience_share": 12.5,
        "description": "A robust resurgence (+4.5%). The 'Return to Normalcy' was a restoration of business prestige. The catalyst was the post-war recession followed by a boom, which seemed to validate Mellon's tax cuts. 'The business of America is business' became the creed. Epistemically, the advertising industry exploded, creating a new form of market truth: persuasion. Bruce Barton's portrayal of Jesus as a successful executive epitomized the sanctification of commerce.",
        "key_manifestations": [
          "The Man Nobody Knows by Bruce Barton (1925)",
          "Mellon Tax Cuts (Revenue Acts of 1921/1924)",
          "Adkins v. Children's Hospital (1923 - Reviving Lochner logic)",
          "Babbitt (1922 - Satirizing the dominance)"
        ]
      },
      "1925": {
        "salience_share": 15.0,
        "description": "The cluster reached a fever pitch (+2.5%). The stock market was not just an investment vehicle but a cultural obsession and a source of truth. The catalyst was the 'New Era' economic theory, claiming that the business cycle had been conquered by corporate efficiency. The 'Price Signal' was trusted absolutely; high stock prices were proof of fundamental soundness. Dissenting voices were drowned out by the ticker tape.",
        "key_manifestations": [
          "Stock Market Boom (Dow Jones acceleration 1924-1929)",
          "Coolidge's 'Business of America' speech (1925)",
          "The Great Gatsby (1925 - The rot beneath the money)",
          "Florida Land Boom (1925)"
        ]
      },
      "1930": {
        "salience_share": 4.5,
        "description": "A catastrophic collapse (-10.5%). The Great Crash of 1929 was an epistemic bomb; it didn't just wipe out wealth, it wiped out the belief that the market was rational. The catalyst was the persistence of the Depression; according to classical theory, wages should drop and employment should return. It didn't. The 'Hoovervilles' were physical refutations of market efficiency. The market went from being a god to a demon.",
        "key_manifestations": [
          "The General Theory of Employment, Interest and Money (1936 - Intellectual tombstone)",
          "Smoot-Hawley Tariff (1930 - Desperate protectionism)",
          "I am a Fugitive from a Chain Gang (Film) (1932)",
          "Pecora Commission (1932 - Exposing market corruption)"
        ]
      },
      "1935": {
        "salience_share": 3.0,
        "description": "The nadir (-1.5%). The New Deal was in full swing, constructing a 'counter-market' welfare state. The displacing force was the dominance of Cluster 01 (Technocracy). Markets were viewed as chaotic forces that needed to be tamed, not listened to. The Wagner Act gave labor a monopoly power to counter capital, explicitly rejecting the 'free market for labor' concept. Culturally, the businessman was the villain in almost every narrative.",
        "key_manifestations": [
          "National Labor Relations Act (1935)",
          "The Grapes of Wrath (1939)",
          "Modern Times (Chaplin) (1936)",
          "Banking Act of 1935"
        ]
      },
      "1940": {
        "salience_share": 2.5,
        "description": "Stagnation at the bottom (-0.5%). WWII was a command economy. Price controls (OPA) replaced the price signal entirely. It was illegal to charge 'market rates.' The catalyst for the continued suppression was the war effort's need for stability over efficiency. However, Friedrich Hayek published *The Road to Serfdom* (1944), planting the intellectual seeds for a future revival, arguing that planning inevitably leads to tyranny.",
        "key_manifestations": [
          "The Road to Serfdom by Friedrich Hayek (1944)",
          "Office of Price Administration (OPA) regulations",
          "Double Indemnity (1944 - Insurance fraud noir)",
          "Bretton Woods (1944 - Managed currencies, not free float)"
        ]
      },
      "1945": {
        "salience_share": 4.0,
        "description": "A slight pulse of life (+1.5%). The lifting of wartime controls led to a consumer boom. The catalyst was the pent-up demand and the GI Bill (a government distortion, but one that created market actors). The 'Treaty of Detroit' (1950) established a truce: corporations could manage the business, but they had to share the fruits with labor. It was a 'managed market,' not a free one.",
        "key_manifestations": [
          "Taft-Hartley Act (1947)",
          "The Fountainhead (Film) (1949 - Randian individualism enters pop culture)",
          "Foundation of the Mont Pelerin Society (1947)",
          "Levittown construction (1947 - Mass market housing)"
        ]
      },
      "1950": {
        "salience_share": 5.5,
        "description": "Slow growth (+1.5%). The Cold War framed the 'Free Market' as the ideological alternative to Soviet Communism. Even if the domestic economy was heavily regulated, the *rhetoric* of the market was weaponized for geopolitics. The catalyst was the 'Kitchen Debate' (later in 59, but the sentiment brewed here): American grocery stores were better than Soviet breadlines. This linked market abundance to political freedom.",
        "key_manifestations": [
          "Capitalism and Freedom (Lectures that became the book) (1950s)",
          "I Love Lucy (Consumer aspiration) (1951)",
          "The Man in the Gray Flannel Suit (1955 - Corporate ambivalence)",
          "Interstate Highway Act (1956 - State subsidy for market commerce)"
        ]
      },
      "1955": {
        "salience_share": 6.2,
        "description": "Steady state (+0.7%). 'Corporate Liberalism' reigned. The belief was that large corporations were benevolent social institutions, not ruthless profit maximizers. The displacing force of 'managerialism' kept pure market logic in check. Executives spoke of 'social responsibility.' *Atlas Shrugged* (1957) appeared as a radical outlier, screaming that the market was the only moral universe, but it was largely panned by the establishment at the time.",
        "key_manifestations": [
          "Atlas Shrugged by Ayn Rand (1957)",
          "The Affluent Society by Galbraith (1958 - Critique of market prioritization)",
          "Organization Man (1956)",
          "Edsel Ford failure (1957 - Market reality check)"
        ]
      },
      "1960": {
        "salience_share": 5.8,
        "description": "Slight dip (-0.4%). The Great Society programs (Medicare/Medicaid) were massive non-market interventions. The catalyst was the discovery of 'The Other America' (poverty), which the market had failed to solve. However, the intellectual counter-revolution was building at the University of Chicago (Milton Friedman). They began to argue that regulation, not the market, was the cause of failure.",
        "key_manifestations": [
          "Capitalism and Freedom by Milton Friedman (1962)",
          "The Other America by Michael Harrington (1962)",
          "Silent Spring (1962 - Externalities of the market)",
          "Great Society legislation (1964-65)"
        ]
      },
      "1965": {
        "salience_share": 5.0,
        "description": "Low point of the decade (-0.8%). The counter-culture attacked capitalism not just as inefficient, but as aesthetically and spiritually void. The displacing force was 'values-based' reasoning (Cluster 19). Inflation began to tick up, challenging the Keynesian trade-off. The 'Nader's Raiders' movement attacked the market for selling unsafe products, rejecting the idea that the consumer was rational enough to protect themselves.",
        "key_manifestations": [
          "Unsafe at Any Speed (1965)",
          "The Graduate (1967 - 'Plastics' as hollow)",
          "Whole Earth Catalog (1968 - Alternative market)",
          "Tet Offensive (1968 - Economic drain of war)"
        ]
      },
      "1970": {
        "salience_share": 8.5,
        "description": "A sharp pivot upward (+3.5%). The collapse of the Bretton Woods system (1971) and the oil shock created Stagflation. The catalyst was the failure of Keynesian planning (Cluster 01). People began to look for alternatives. The 'Efficient Market Hypothesis' began to take over finance departments. The intellectual tide turned: if the government can't manage the price of gas, maybe the market should.",
        "key_manifestations": [
          "Nixon Shock (1971 - End of Gold window)",
          "Anarchy, State, and Utopia by Robert Nozick (1974)",
          "Limits to Growth (1972 - Scarcity demanding pricing)",
          "Creation of the options market (CBOE) (1973)"
        ]
      },
      "1975": {
        "salience_share": 12.0,
        "description": "Accelerated growth (+3.5%). Deregulation began under Carter (Airlines, Trucking), signaling a bipartisan acceptance that state control was inefficient. The catalyst was the 'Tax Revolt' (Prop 13), which was a populist demand to keep market earnings. Supply-side economics began to form on napkins. The market was being rebranded from a tool of the rich to a tool of the 'forgotten man' against the bloated state.",
        "key_manifestations": [
          "Airline Deregulation Act (1978)",
          "Proposition 13 (1978)",
          "Free to Choose (TV Series) (1980 - filmed late 70s)",
          "Humphrey-Hawkins Act (1978 - Last gasp of full employment mandate)"
        ]
      },
      "1980": {
        "salience_share": 18.5,
        "description": "The cluster surged (+6.5%) with the Reagan Revolution. 'The magic of the marketplace' became official state ideology. The catalyst was the crushing of the PATCO strike, which signaled that the labor market would no longer be distorted by unions. Epistemically, the 'Laffer Curve' argued that cutting taxes (feeding the market) would actually increase revenue. Greed was re-coded as 'incentive.'",
        "key_manifestations": [
          "Reagan's First Inaugural Address (1981)",
          "Economic Recovery Tax Act of 1981",
          "Wealth and Poverty by George Gilder (1981)",
          "Firing of PATCO strikers (1981)"
        ]
      },
      "1985": {
        "salience_share": 22.0,
        "description": "Continued expansion (+3.5%). The 'Big Bang' in finance and the rise of the hostile takeover (corporate raiding) enforced market discipline on lazy management. The catalyst was the junk bond market, which allowed capital to aggressively restructure the physical economy. Culturally, *Wall Street* (film) tried to critique this, but Gekko became a hero to a generation of finance bros. The market was seen as the only true accountability mechanism.",
        "key_manifestations": [
          "Wall Street (1987)",
          "The Bonfire of the Vanities (1987)",
          "Tax Reform Act of 1986",
          "Black Monday (1987 - A hiccup, not a stopper)"
        ]
      },
      "1990": {
        "salience_share": 24.5,
        "description": "Growth continued (+2.5%) as Communism collapsed. The Fall of the Berlin Wall was the ultimate empirical validation of Market Epistemology. The catalyst was the 'Washington Consensus'\u2014the export of free-market policies to the developing world. Globalization was sold not just as trade, but as the spread of rationality. The 'New Democrats' dropped their hostility to markets, finalizing the consensus.",
        "key_manifestations": [
          "NAFTA debates (1992-1993)",
          "The End of History (1992)",
          "Privatization of the Internet backbone (1995)",
          "Pretty Woman (1990 - The corporate raider with a heart of gold)"
        ]
      },
      "1995": {
        "salience_share": 28.0,
        "description": "The 'New Economy' bubble drove variance higher (+3.5%). The Internet was interpreted as a 'frictionless market' that would end the business cycle forever. The catalyst was the Telecommunications Act of 1996 and the repeal of Glass-Steagall (1999). Epistemically, the Day Trader became the new philosopher; anyone could read the signals. 'Shareholder Value' became the singular purpose of the corporation.",
        "key_manifestations": [
          "Gramm-Leach-Bliley Act (Repeal of Glass-Steagall) (1999)",
          "Dow 36,000 by Glassman and Hassett (1999 - Peak delusion)",
          "The Matrix (1999 - Counter-culture anxiety about the system)",
          "Amazon.com IPO (1997)"
        ]
      },
      "2000": {
        "salience_share": 23.5,
        "description": "A correction (-4.5%) following the Dot-com crash and Enron. The displacing force was the revelation of massive fraud; the market hadn't 'known' the truth, it had been hallucinating. Sarbanes-Oxley was a re-regulatory reflex. However, the housing bubble immediately began to inflate, driven by the belief that 'real estate never goes down'\u2014a new market myth replacing the old one.",
        "key_manifestations": [
          "Enron Scandal (2001)",
          "Sarbanes-Oxley Act (2002)",
          "Bush tax cuts (2001/2003)",
          "Moneyball (Book 2003 - Applying market logic to sports)"
        ]
      },
      "2005": {
        "salience_share": 25.0,
        "description": "A localized peak (+1.5%) driven by the housing boom. Financial engineering (CDOs, MBS) was hailed as a way to slice and dice risk into oblivion. The catalyst was the 'Great Moderation' narrative. The market was viewed as a self-correcting machine that had solved the problem of risk. This was the calm before the storm.",
        "key_manifestations": [
          "The World Is Flat by Thomas Friedman (2005)",
          "Greenspan's 'Irrational Exuberance' (Retrospective irony)",
          "Shadow Banking dominance (2005-2007)",
          "The Pursuit of Happyness (2006)"
        ]
      },
      "2010": {
        "salience_share": 16.5,
        "description": "A massive epistemic crash (-8.5%) following the 2008 Financial Crisis. The catalyst was the bailout: if the market is efficient, why does it need trillions in state support? The 'Zombie Banks' survived, proving that the market was rigged, not free. Occupy Wall Street and the Tea Party both rejected the corporate-state synthesis. The 'free market' brand was toxic; 'Crony Capitalism' became the preferred term.",
        "key_manifestations": [
          "Dodd-Frank Act (2010)",
          "The Big Short (2010)",
          "Occupy Wall Street (2011)",
          "Margin Call (Film) (2011)"
        ]
      },
      "2015": {
        "salience_share": 14.0,
        "description": "Continued erosion (-2.5%). Populism (Cluster 02) attacked free trade (TPP). The displacing force was the realization that the 'market' had offshored the industrial base, severing the link between corporate profit and national well-being. However, a sub-cluster emerged: The Gig Economy (Uber/Airbnb), attempting to commodify the remaining slivers of private life (your car, your spare room) into a market.",
        "key_manifestations": [
          "Withdrawal from TPP (2017)",
          "Capital in the Twenty-First Century by Piketty (English trans. 2014)",
          "Uber/Lyft growth (Marketizing private assets)",
          "Requiem for the American Dream (Chomsky Doc) (2015)"
        ]
      },
      "2020": {
        "salience_share": 12.5,
        "description": "Stagnation (-1.5%). The pandemic required massive state intervention (stimulus checks, eviction moratoriums), suspending market signals entirely. The 'K-shaped recovery' highlighted the disconnect between the stock market (fed by the Fed) and the real economy. The catalyst for a weird mutation was the Crypto/NFT boom: a desperate attempt to use technology to recreate 'pure' markets outside the state, which then crashed, reinforcing skepticism.",
        "key_manifestations": [
          "GameStop Short Squeeze (2021 - Weaponized market nihilism)",
          "FTX Collapse (2022)",
          "CARES Act (2020)",
          "ESG investing backlash (2022-)"
        ]
      },
      "2025": {
        "salience_share": 11.0,
        "description": "The cluster is evolving into 'Techno-Feudalism' (-1.5%). The 'Free Market' ideal is dead; it is replaced by 'Platform Capitalism' where a few monopolistic algorithms dictate terms. The displacing force is the realization that AI and Big Tech have captured the market infrastructure itself. The new epistemic debate is whether these platforms should be regulated as utilities. The 'market' is no longer seen as a neutral field, but as a programmed simulation owned by billionaires.",
        "key_manifestations": [
          "Antitrust suits against AI Giants (2024-2025)",
          "The rise of 'Post-Neoliberalism' policy papers (2025)",
          "Prediction Markets for political assassinations (2025 scandal)",
          "Techno-Feudalism by Yanis Varoufakis (2024/influence)"
        ]
      }
    }
  },
  "06_paranoid_style_and_conspiratorial_suspicion": {
    "name": "Paranoid Style & Conspiratorial Suspicion",
    "description": "This cluster maps the enduring American political tradition of interpreting history not as a series of accidents or structural forces, but as the unfolding of a vast, sinister plot by a secretive cabal. Defined by Richard Hofstadter, this epistemic mode relies on 'leaps of imagination' to connect disparate events into a coherent web of malevolence. It is characterized by a belief in the 'enemy within'\u2014whether Masons, Bankers, Catholics, Communists, the Deep State, or Globalists. While often dismissed as fringe, this analysis tracks how conspiratorial thinking moves from the margins to the center of political power.",
    "trajectory": {
      "1890": {
        "salience_share": 7.5,
        "description": "The variance was elevated (+2.0% above post-Civil War baseline) due to the agrarian obsession with the 'Money Power.' The catalyst was the 'Crime of '73' (demonetization of silver), which farmers interpreted not as a monetary policy decision but as a secret conspiracy by British bankers and Wall Street to enslave the American producer. This was the foundational era of modern economic conspiracism. The 'Goldbug' was not just an opponent; he was an agent of a foreign, vampiric cabal. This paranoia was institutionalized in the rhetoric of the burgeoning Populist movement, which framed the economic depression as a deliberate act of sabotage.",
        "key_manifestations": [
          "Caesar's Column by Ignatius Donnelly (1890 - Apocalyptic conspiracy novel)",
          "Seven Financial Conspiracies Which Have Enslaved the American People by Sarah E.V. Emery (1887/popular in 90s)",
          "The Protocols of the Elders of Zion (Pre-publication rumors/roots in this era's antisemitism)",
          "Sherman Silver Purchase Act debates (framed as foiling a plot)"
        ]
      },
      "1895": {
        "salience_share": 8.2,
        "description": "Variance crept upward (+0.7%) as the depression deepened. The catalyst was the bailout of the US Treasury by J.P. Morgan, which served as 'smoking gun' evidence that the government had been captured by private financiers. William Jennings Bryan's rhetoric harnessed this suspicion, painting a picture of a nation strangled by a 'cross of gold.' However, a displacing force began to emerge: the rise of empirical sociology (Cluster 01), which attempted to explain poverty through data rather than plots. Still, for the rural base, the conspiracy was the only logical explanation for their suffering amidst plenty.",
        "key_manifestations": [
          "Coin's Financial School (1894 - Conspiratorial economics tract)",
          "Morgan-Belmont Bond Deal (1895)",
          "The Panic of 1893 aftermath narratives",
          "Degeneration by Max Nordau (1892/English 1895 - Cultural conspiracy of decline)"
        ]
      },
      "1900": {
        "salience_share": 5.5,
        "description": "A significant drop (-2.7%) as prosperity returned and the Progressive Era optimism took hold. The displacing force was the 'Muckraker' (Cluster 10), who exposed *actual* corruption (bribery, graft) rather than *imagined* grand conspiracies. There is a distinction: muckrakers saw bad systems; paranoids saw bad angels. The assassination of McKinley by an anarchist fed a brief 'Red Scare,' but the dominant mood was that the system could be fixed, not that it was irrevocably rigged by a cabal. The focus shifted from the 'Money Power' to the 'Trusts'\u2014visible giants rather than invisible plotters.",
        "key_manifestations": [
          "The Octopus (1901 - Corporate power, not secret cabal)",
          "McKinley Assassination (1901 - Anarchist plot fear)",
          "Alien Anarchist Exclusion Act (1903)",
          "The Wonderful Wizard of Oz (1900 - Parable of the hidden wizard/humbug)"
        ]
      },
      "1905": {
        "salience_share": 4.8,
        "description": "Continued decline (-0.7%). The success of trust-busting legislation suggested that the government was responsive, dampening the paranoid impulse. The catalyst for this lull was the transparency of the Roosevelt administration. However, a low-level hum of anti-Catholic paranoia persisted, ready to be reactivated. The 'Yellow Peril' narrative began to form on the West Coast, interpreting Asian migration not as a demographic flow but as a coordinated invasion strategy.",
        "key_manifestations": [
          "The War of the Classes by Jack London (1905)",
          "Formation of the Asiatic Exclusion League (1905)",
          "The Clansman by Thomas Dixon (1905 - Revisionist conspiracy of Reconstruction)",
          "Lochner v. New York (1905 - Dissent claiming judicial conspiracy against workers)"
        ]
      },
      "1910": {
        "salience_share": 5.0,
        "description": "Stagnation (+0.2%). The 'Purity Crusades' began to adopt conspiratorial language regarding 'White Slavery' (sex trafficking). The catalyst was the Mann Act, which was driven by a moral panic that an organized syndicate of foreigners was stealing white women. This shifted the paranoid style from economics (bankers) to social hygiene (vice rings). It was a localized paranoia, focused on the 'underworld' rather than the 'overworld' of elites.",
        "key_manifestations": [
          "The Mann Act (White Slave Traffic Act) (1910)",
          "The Fundamentals (1910 - Theological defense against modernist plot)",
          "Halley's Comet Panic (1910 - Apocalyptic superstition)",
          "The Passing of the Great Race by Madison Grant (Drafting phase - racial conspiracy)"
        ]
      },
      "1915": {
        "salience_share": 7.5,
        "description": "A sharp rise (+2.5%) driven by World War I xenophobia. The catalyst was the fear of German sabotage and the 'Hyphenated American.' The sinking of the Lusitania was viewed by some as a setup, but mostly it fueled a hunt for spies. The revival of the KKK (inspired by *The Birth of a Nation*) introduced a potent new conspiracy: the Black/Jewish/Catholic alliance against Anglo-Saxon purity. The 'Preparedness Movement' was driven by a suspicion that pacifists were secret agents of the Kaiser.",
        "key_manifestations": [
          "The Birth of a Nation (1915)",
          "Black Tom explosion (1916 - Actual sabotage feeding paranoia)",
          "National Defense Act of 1916",
          "The Leo Frank Case (1915 - Antisemitic conspiracy culminating in lynching)"
        ]
      },
      "1920": {
        "salience_share": 11.0,
        "description": "The cluster spiked (+3.5%) with the First Red Scare. The catalyst was the Bolshevik Revolution, which provided a tangible global conspiracy (the Comintern) to fear. The Palmer Raids were the state acting on the premise that a vast revolutionary plot was imminent. Simultaneously, Henry Ford began publishing *The International Jew*, mainstreaming the 'Protocols of the Elders of Zion' in America. This was a high-water mark for elite-sponsored conspiracism, where an industrial titan used his resources to map out a global Jewish plot.",
        "key_manifestations": [
          "The International Jew (Series in The Dearborn Independent) (1920-)",
          "Palmer Raids (1919-1920)",
          "Sacco and Vanzetti trial (1921 - Anarchist conspiracy frame)",
          "Wall Street bombing (1920)"
        ]
      },
      "1925": {
        "salience_share": 10.5,
        "description": "High variance persisted (-0.5%) centered on the KKK's dominance in the Midwest. The Klan's worldview was fundamentally conspiratorial: it believed the Pope was building tunnels to Washington D.C. to overthrow the government. The catalyst for the slight decline was the exposure of Klan corruption (Grand Dragon Stephenson), which broke the fever of the organization, but the mindset remained. The Scopes Trial also featured conspiratorial rhetoric about a scientific plot to destroy Christianity.",
        "key_manifestations": [
          "The Great Gatsby (1925 - Tom Buchanan's racial paranoia)",
          "KKK March on Washington (1925)",
          "Trial of D.C. Stephenson (1925)",
          "The Man Nobody Knows (1925 - Jesus as counter-conspirator against Pharisees)"
        ]
      },
      "1930": {
        "salience_share": 6.0,
        "description": "A notable drop (-4.5%). The Great Depression was so obviously a systemic failure that 'secret plot' explanations lost power compared to structural critiques. The displacing force was the sheer visibility of the crisis; you didn't need a conspiracy theory to explain 25% unemployment. However, a new strain was incubating on the far right (the Liberty League) viewing the New Deal as a secret Communist takeover, and on the left viewing the depression as a capitalist lockout.",
        "key_manifestations": [
          "The Maltese Falcon (Film 1931/Book 1930 - Noir cynicism vs paranoia)",
          "Fish Committee investigations (1930 - Hunting communists)",
          "I'll Take My Stand (1930 - Cultural defense, not conspiracy)",
          "Public Enemy (1931 - Crime as sociology, not plot)"
        ]
      },
      "1935": {
        "salience_share": 9.5,
        "description": "A rebound (+3.5%) driven by Father Coughlin and the demagogic radio era. The catalyst was the stagnation of the recovery, which allowed Coughlin to pivot from supporting FDR to accusing him of being a tool of the 'International Bankers.' This period saw the synthesis of economic populism with antisemitic conspiracism. The 'Business Plot' (Smedley Butler's revelation) was a rare instance where a conspiracy to overthrow the government was actually alleged by a credible insider, blurring the lines between paranoia and reality.",
        "key_manifestations": [
          "Father Coughlin's radio broadcasts (Peak audience)",
          "The Business Plot (McCormack-Dickstein Committee) (1934-35)",
          "It Can't Happen Here (1935 - Fictionalizing the paranoid rise)",
          "Silver Shirts Movement (1933-)"
        ]
      },
      "1940": {
        "salience_share": 7.0,
        "description": "Suppression (-2.5%) during the war. The 'Enemy' was open and declared (Axis Powers), reducing the need for hidden conspiratorial explanations. The displacing force was the unified national narrative. However, the 'Fifth Column' panic led to the internment of Japanese Americans\u2014a state action based on the paranoid assumption that ancestry determined loyalty. This was 'bureaucratic paranoia' rather than grassroots conspiracism.",
        "key_manifestations": [
          "Saboteur (Hitchcock) (1942)",
          "Executive Order 9066 (1942)",
          "Why We Fight (1942 - Defining the open enemy)",
          "The Great Dictator (1940)"
        ]
      },
      "1945": {
        "salience_share": 8.5,
        "description": "A creep upward (+1.5%) as the Cold War began. The Yalta Agreement became the subject of immediate suspicion\u2014the idea that FDR had 'sold out' Eastern Europe to Stalin due to illness or secret communist influence. The catalyst was the sudden shift from Soviet ally to enemy, which required an explanation. The 'Iron Curtain' speech defined a geopolitical reality, but for the paranoid style, it signaled the beginning of the 'hidden' war.",
        "key_manifestations": [
          "The Yalta Conference accusations (1945)",
          "Amerasia Spy Case (1945)",
          "Start of the HUAC permanent standing committee (1945)",
          "Animal Farm (1945 - Understanding totalitarian lies)"
        ]
      },
      "1950": {
        "salience_share": 15.0,
        "description": "A massive surge (+6.5%) defining the McCarthy Era. This was the Golden Age of the Paranoid Style. The catalyst was the loss of the atomic monopoly and the 'Loss of China,' which were interpreted not as geopolitical setbacks but as the result of treason within the State Department. Senator McCarthy's 'list of names' was the archetypal paranoid prop. The conviction of Alger Hiss and the Rosenbergs provided the 'grain of truth' that allowed the paranoia to metastasize into a totalizing worldview: 'a conspiracy on a scale so immense.'",
        "key_manifestations": [
          "McCarthy's Wheeling Speech (1950)",
          "Invasion of the Body Snatchers (Original story 1955, mood building)",
          "I Led Three Lives (1953)",
          "The Crucible (1953 - Allegory of paranoia)"
        ]
      },
      "1955": {
        "salience_share": 12.0,
        "description": "A slow decline (-3.0%) as McCarthy imploded, but the energy transferred to the John Birch Society. The catalyst for the shift was the Eisenhower presidency; for the true paranoid, even Ike was a communist agent (a claim made by Robert Welch). This marginalized the cluster, moving it from the Senate floor to the newsletter underground. The 'fluoridation' conspiracy theory emerged here, linking public health to mind control.",
        "key_manifestations": [
          "The Blue Book of the John Birch Society (1958)",
          "Invasion of the Body Snatchers (Film) (1956)",
          "Army-McCarthy Hearings (1954 - The break)",
          "Kiss Me Deadly (1955 - Nuclear paranoia)"
        ]
      },
      "1960": {
        "salience_share": 10.5,
        "description": "Stabilization (-1.5%) during the high modernist Camelot era. However, the catalyst for the next explosion was the Bay of Pigs and the Cuban Missile Crisis, which convinced the fringes that the government was incompetent or compromised. *The Manchurian Candidate* (1962) perfectly captured the mood: a sophisticated, psychological paranoia about brainwashing, replacing the crude shouting of McCarthy.",
        "key_manifestations": [
          "The Manchurian Candidate (1962)",
          "Dr. Strangelove (1964 - Paranoia about the paranoid general)",
          "Seven Days in May (1964 - Military coup conspiracy)",
          "The Paranoid Style in American Politics by Richard Hofstadter (1964 - The diagnosis)"
        ]
      },
      "1965": {
        "salience_share": 16.5,
        "description": "A violent spike (+6.0%) following the JFK assassination. The Warren Commission (1964) failed to satisfy the public's need for meaning, birthing the modern 'Conspiracy Community.' The catalyst was the Zapruder film and the inconsistencies in the official record. Paranoia shifted from 'Right Wing' (fear of communists) to 'Left Wing' (fear of the CIA/Military Industrial Complex). The assassination of Malcolm X and the Watts riots added to the sense that hidden forces were orchestrating chaos.",
        "key_manifestations": [
          "Rush to Judgment by Mark Lane (1966)",
          "The Crying of Lot 49 by Thomas Pynchon (1966 - Literary paranoia)",
          "Blow-Up (1966 - The unknowability of truth)",
          "MacBird! (1967 - Play accusing LBJ)"
        ]
      },
      "1970": {
        "salience_share": 14.0,
        "description": "Variance remained high but changed texture (-2.5%). With the Manson Family and the Zodiac Killer, paranoia became cultural and domestic. The catalyst was the realization that the 'Love Generation' had a dark, murderous underbelly. Politically, the invasion of Cambodia sparked fears of an uncontrolled executive branch. The 'credibility gap' was no longer a theory; it was a daily news segment.",
        "key_manifestations": [
          "Helter Skelter (Manson trial 1970-71)",
          "The Pentagon Papers (1971 - Proof of conspiracy)",
          "Klute (1971 - Paranoia trilogy start)",
          "Fear and Loathing in Las Vegas (1971 - The bad trip)"
        ]
      },
      "1975": {
        "salience_share": 18.0,
        "description": "A peak of 'justified paranoia' (+4.0%). Watergate and the Church Committee revelations proved that the paranoids were right: the CIA *was* assassinating leaders, the FBI *was* spying on citizens (COINTELPRO). The catalyst was the total collapse of institutional trust. This era made conspiracy theory a respectable, even necessary, mode of journalism. The 'Grassy Knoll' became a permanent fixture in the American mind.",
        "key_manifestations": [
          "The Parallax View (1974)",
          "Three Days of the Condor (1975)",
          "Church Committee Reports (1975-76)",
          "All the President's Men (Film) (1976)"
        ]
      },
      "1980": {
        "salience_share": 11.5,
        "description": "A sharp drop (-6.5%) as Reagan offered a simplified, sunny narrative. 'Morning in America' was the antidote to the paranoid 70s. The displacing force was the restoration of national confidence and the focusing of suspicion externally on the 'Evil Empire' (USSR) rather than internal plotters. However, the 'Satanic Panic' began to bubble in the background\u2014a new, domestic paranoia about daycares and heavy metal, signaling a shift from political to cultural conspiracy.",
        "key_manifestations": [
          "Michelle Remembers (1980 - Spark of Satanic Panic)",
          "The Thing (1982 - Paranoia of assimilation)",
          "Poltergeist (1982 - Suburban unease)",
          "Blow Out (1981 - Farewell to 70s conspiracy noir)"
        ]
      },
      "1985": {
        "salience_share": 9.0,
        "description": "Continued suppression (-2.5%). The Iran-Contra affair (1986) was a genuine conspiracy, yet it failed to ignite the same existential dread as Watergate. The catalyst for this apathy was the strong economy; the public was willing to overlook 'shadow government' activities if the stock market was up. However, in the rural heartland, the Farm Crisis was birthing the Posse Comitatus movement\u2014the roots of the modern militia, believing in a Zionist Occupational Government (ZOG).",
        "key_manifestations": [
          "Blue Velvet (1986 - The rot beneath the surface)",
          "Iran-Contra Hearings (1987)",
          "The Silent Brotherhood (1984 - Order suppression)",
          "They Live (1988 - Consumerism as alien conspiracy)"
        ]
      },
      "1990": {
        "salience_share": 13.5,
        "description": "A resurgence (+4.5%) with the end of the Cold War. Without the Soviet Union, the paranoid style needed a new enemy: The 'New World Order.' George H.W. Bush's use of the phrase was the catalyst, igniting fears of a UN-led global government. The 'Black Helicopter' tropes emerged here. The confrontation at Ruby Ridge (1992) validated the fear that the federal government was at war with its own citizens.",
        "key_manifestations": [
          "Pat Robertson's The New World Order (1991)",
          "Ruby Ridge Siege (1992)",
          "JFK (Oliver Stone Film) (1991 - Mainstreaming the coup theory)",
          "Behold a Pale Horse by William Cooper (1991 - The bible of modern conspiracy)"
        ]
      },
      "1995": {
        "salience_share": 17.5,
        "description": "A dramatic spike (+4.0%). The Oklahoma City Bombing was the kinetic realization of the militia movement's paranoia. The catalyst was the Waco Siege (1993), which was viewed as a massacre by the state. *The X-Files* captured the zeitgeist perfectly: 'Trust No One.' The 'Clinton Body Count' circulated via early internet chains and fax machines, marking the beginning of the digital distribution of paranoia.",
        "key_manifestations": [
          "The X-Files (Peak popularity 1995-1997)",
          "Oklahoma City Bombing (1995)",
          "The Turner Diaries (gaining notoriety)",
          "Conspiracy Theory (Film) (1997)"
        ]
      },
      "2000": {
        "salience_share": 12.0,
        "description": "A temporary decline (-5.5%) post-9/11. The immediate aftermath of the attacks created unity (Cluster 04), suppressing internal suspicion. The displacing force was the reality of the external threat. However, this pause was brief. The passing of the Patriot Act laid the groundwork for future 'surveillance state' paranoia. The 'Y2K' scare (pre-2000) was a technological rehearsal for apocalyptic thinking.",
        "key_manifestations": [
          "USA PATRIOT Act (2001)",
          "Loose Change (Early versions/internet rumors start 2002-2003)",
          "Minority Report (2002 - Pre-crime paranoia)",
          "Y2K panic aftermath"
        ]
      },
      "2005": {
        "salience_share": 15.5,
        "description": "A steady rise (+3.5%) as '9/11 Truth' went viral. The catalyst was the internet (YouTube), which allowed for the bypass of editorial gatekeepers. 'Jet fuel can't melt steel beams' became a cultural meme. This era marked the democratization of the paranoid style; anyone could be a researcher. On the left, paranoia about the 'stolen' 2000 and 2004 elections (Diebold machines) mirrored the right's distrust.",
        "key_manifestations": [
          "Loose Change 2nd Edition (2006)",
          "Zeitgeist: The Movie (2007)",
          "V for Vendetta (2005)",
          "The Da Vinci Code (2003/Film 2006 - Historical conspiracy mainstreamed)"
        ]
      },
      "2010": {
        "salience_share": 21.0,
        "description": "Accelerated growth (+5.5%) with the rise of the Tea Party and 'Birtherism.' The election of Barack Obama triggered a deep, racialized paranoia about his origins and loyalty. The catalyst was Donald Trump's embrace of the Birther theory, moving it from the fringe to Fox News. Alex Jones (InfoWars) became a major media figure. The 'FEMA Camp' theories recycled 90s militia fears for a new generation.",
        "key_manifestations": [
          "The Obama 'Birth Certificate' controversy (2011)",
          "Alex Jones' InfoWars growth",
          "Glenn Beck's chalkboard diagrams (2010)",
          "Shutter Island (2010 - Institutional paranoia)"
        ]
      },
      "2015": {
        "salience_share": 28.5,
        "description": "A major surge (+7.5%). The 2016 election was the first 'Conspiracy Election.' The catalyst was the weaponization of social media algorithms (Cluster 12) which grouped paranoid users into self-reinforcing clusters. 'Pizzagate' (2016) was the critical turning point: a completely fictional, online-generated conspiracy led to real-world armed action. The 'Deep State' moved from a leftist critique of empire to a right-wing explanation for bureaucratic resistance.",
        "key_manifestations": [
          "Pizzagate (2016)",
          "Clinton Cash (2015)",
          "The Great Hack (Subject matter: Cambridge Analytica)",
          "Get Out (2017 - Racial paranoia horror)"
        ]
      },
      "2020": {
        "salience_share": 36.0,
        "description": "The cluster reached a dangerous new high (+7.5%). QAnon swallowed all other conspiracies into a 'Grand Unified Theory' of blood-drinking elites. The catalyst was the pandemic (a 'plandemic' in this worldview) and the 2020 Election. The 'Stop the Steal' movement was not just political disagreement; it was a paranoid fantasy of Venezuelan voting machines and Italian satellites. Reality became optional. The epistemic breach was total.",
        "key_manifestations": [
          "Q: Into the Storm (HBO Doc capturing the 2020 mood)",
          "Plandemic (Viral video) (2020)",
          "January 6th (The shamanic aspect)",
          "Save the Children rallies (QAnon front) (2020)"
        ]
      },
      "2025": {
        "salience_share": 32.5,
        "description": "A slight retraction but entrenchment (-3.5%). The fever pitch of QAnon has broken, fracturing into localized cults and 'sovereign citizen' AI-legalism. The displacing force is 'Conspiracy Fatigue'\u2014the sheer exhaustion of maintaining high-alert paranoia. However, the paranoia has shifted to Technology itself: 'Dead Internet Theory' and fears of AI manipulation. The suspicion is no longer just that the *government* is lying, but that *reality itself* is a simulation or a deepfake operation.",
        "key_manifestations": [
          "Dead Internet Theory (Mainstream acceptance 2024-25)",
          "Anti-CBDC (Central Bank Digital Currency) movement",
          "Leave the World Behind (Film 2023 - lingering influence)",
          "The 'Simulation Glitch' viral trend (2025)"
        ]
      }
    }
  },
  "07_identity_standpoint_theory": {
    "name": "Identity Standpoint Theory",
    "description": "This cluster tracks the epistemic claim that knowledge is socially situated, and that marginalized groups possess a unique, privileged access to truth regarding the nature of power and society. Distinct from 'Rights-Based Universalism' (which seeks to erase difference legally), this cluster emphasizes specific, embodied difference ('lived experience') as the primary locus of political authority. It evolves from Du Bois's 'Double Consciousness' to the radical 'Identity Politics' of the 1970s, eventually maturing into the intersectional and DEI frameworks of the 21st century. It posits that objectivity is a myth and that one's identity determines one's reality.",
    "trajectory": {
      "1890": {
        "salience_share": 1.2,
        "description": "The cluster was in a nascent, theoretical stage (+0.2% baseline). The catalyst was the publication of *A Voice from the South* by Anna Julia Cooper (1892), which argued that the Black woman had a unique vantage point that neither white men nor Black men could articulate. This was the 'proto-standpoint' moment: the realization that the universal 'man' of the Constitution did not cover the specific reality of the intersectionally oppressed. Epistemically, it was a rejection of the 'objective' white gaze, asserting that the view from the bottom of the well was clearer than the view from the top.",
        "key_manifestations": [
          "A Voice from the South by Anna Julia Cooper (1892)",
          "Iola Leroy by Frances Harper (1892)",
          "The Woman's Era (Newspaper founded 1894)",
          "Ida B. Wells' anti-lynching journalism (The specific truth of the victim)"
        ]
      },
      "1895": {
        "salience_share": 1.5,
        "description": "Slight growth (+0.3%) as the National Association of Colored Women (NACW) was formed. The motto 'Lifting as We Climb' embodied a collective identity consciousness\u2014the fate of the individual was inextricably tied to the race and gender class. The catalyst was the exclusion of Black women from the white suffrage movement, forcing the creation of a separate epistemic sphere. This period solidified the idea that 'sisterhood' was not universal, but stratified by race.",
        "key_manifestations": [
          "Founding of the NACW (1896)",
          "The Atlanta Compromise (1895 - A rejection of this theory in favor of economic utility)",
          "Lyrics of Lowly Life by Paul Laurence Dunbar (1896 - Dialect as authentic voice)",
          "Plessy v. Ferguson (1896 - Legally enforcing identity categories)"
        ]
      },
      "1900": {
        "salience_share": 2.1,
        "description": "A pivotal jump (+0.6%) with W.E.B. Du Bois's articulation of 'Double Consciousness.' This concept\u2014that the Black American ever feels his 'twoness,' seeing himself through his own eyes and the eyes of a contemptuous other\u2014provided the root metaphor for all future standpoint theory. The catalyst was the failure of Reconstruction's universalism; if the law wouldn't make us one, our psyche must handle being two. This established the 'veil' as an epistemic barrier that only the oppressed could see through.",
        "key_manifestations": [
          "The Souls of Black Folk by W.E.B. Du Bois (1903)",
          "Up from Slavery (1901 - The counter-narrative)",
          "The Negro a Beast (1900 - Racist tract necessitating the counter-epistemology)",
          "Pauline Hopkins' Contending Forces (1900)"
        ]
      },
      "1905": {
        "salience_share": 1.8,
        "description": "Stagnation (-0.3%). The Niagara Movement was politically radical but operated largely on the 'Rights' framework (Cluster 03) rather than a pure identity epistemology. The displacing force was the dominance of class-based analysis (Socialism/IWW), which argued that 'worker' was the only identity that mattered, subsuming race and gender into the economic struggle. Identity was viewed by the Left as a distraction from the material base.",
        "key_manifestations": [
          "The Jungle (1906 - Class over ethnicity)",
          "Niagara Movement Principles (1905)",
          "The House of Mirth (1905 - Gendered constraints, but tragic not revolutionary)",
          "Industrial Workers of the World founding (1905)"
        ]
      },
      "1910": {
        "salience_share": 1.9,
        "description": "Steady state (+0.1%). The founding of *The Crisis* magazine provided a platform for the articulation of a specific Black cultural consciousness. The catalyst was the need to curate a 'New Negro' identity to counter the minstrelsy stereotypes of the mainstream. Cultural pluralism (Horace Kallen) began to challenge the 'Melting Pot' ideal, suggesting that the hyphen (Italian-American, etc.) was a source of strength, not a dilution of citizenship.",
        "key_manifestations": [
          "The Crisis (First issue 1910)",
          "The Autobiography of an Ex-Colored Man by James Weldon Johnson (1912)",
          "Democracy Versus the Melting-Pot by Horace Kallen (1915)",
          "Twenty Years at Hull House (1910 - Encountering the immigrant 'other')"
        ]
      },
      "1915": {
        "salience_share": 2.5,
        "description": "Moderate rise (+0.6%) during the Great Migration. The physical movement of Black bodies from the rural South to the urban North created a concentrated, spatialized identity. The catalyst was the contact with Northern racism, which was different in kind (segregated by neighborhood, not law), necessitating a new way of understanding power. The 'New Negro' movement began to form, rejecting the 'Old Negro's' deference.",
        "key_manifestations": [
          "The Birth of a Nation (1915 - Identity attack)",
          "The Great Migration begins (1916)",
          "Rachel by Angelina Weld Grimk\u00e9 (1916 - Play about racial despair)",
          "Margaret Sanger's birth control activism (Gendered body autonomy)"
        ]
      },
      "1920": {
        "salience_share": 3.8,
        "description": "A surge (+1.3%) with the Harlem Renaissance. This was the first major cultural flowering of identity standpoint: Black art for Black people, not for white approval. Alain Locke's *The New Negro* (1925) codified this shift. The catalyst was the post-war disillusionment; if democracy wasn't real, then culture was the new battleground. Zora Neale Hurston's anthropological work centered the 'folk' as the source of authentic knowledge.",
        "key_manifestations": [
          "The New Negro by Alain Locke (1925)",
          "Cane by Jean Toomer (1923)",
          "The Weary Blues by Langston Hughes (1926)",
          "Marcus Garvey's UNIA parades (Black Nationalism as identity politics)"
        ]
      },
      "1925": {
        "salience_share": 3.5,
        "description": "Slight dip (-0.3%) as the commercialization of the Harlem Renaissance ('slumming') diluted its epistemic bite. White patronage turned Black identity into a consumable spectacle rather than a political standpoint. The displacing force was the Jazz Age hedonism, which blurred lines rather than sharpening them. However, *The Great Gatsby* implicitly critiqued the white, male standpoint as blind to its own privilege.",
        "key_manifestations": [
          "The Great Gatsby (1925)",
          "Home to Harlem by Claude McKay (1928)",
          "Quicksand by Nella Larsen (1928)",
          "Coming of Age in Samoa by Margaret Mead (1928 - Cultural relativity)"
        ]
      },
      "1930": {
        "salience_share": 2.0,
        "description": "Sharp decline (-1.5%). The Great Depression re-centered Class (Cluster 16) as the master variable. Identity politics was viewed as a luxury; 'Hunger is not a racial issue' (though it was). The Communist Party USA actively recruited Black Americans but demanded they subordinate their racial identity to the Party discipline. The 'Scottsboro Boys' case was fought on rights grounds, not identity epistemology.",
        "key_manifestations": [
          "Native Son by Richard Wright (1940 - bridging class/race, but bleak)",
          "Scottsboro Boys defense (1931)",
          "Black Reconstruction (1935 - Marxist class analysis of race)",
          "Waiting for Lefty (1935 - Universal worker solidarity)"
        ]
      },
      "1935": {
        "salience_share": 2.2,
        "description": "Stagnation (+0.2%). While the Popular Front promoted anti-racism, it did so under the banner of 'Americanism' or 'Workerism.' However, Zora Neale Hurston's *Their Eyes Were Watching God* (1937) was a radical outlier, refusing to write 'protest literature' and instead focusing entirely on the interiority of a Black woman's desire. It was critiqued by Wright and others for not being 'political' enough, proving the dominance of the realist/structuralist mode.",
        "key_manifestations": [
          "Their Eyes Were Watching God (1937)",
          "Uncle Tom's Children by Richard Wright (1938)",
          "Strange Fruit by Billie Holiday (1939 - Visceral, embodied protest)",
          "Marian Anderson at the Lincoln Memorial (1939)"
        ]
      },
      "1940": {
        "salience_share": 1.8,
        "description": "Low point (-0.4%). WWII enforced a 'United We Stand' conformity. Emphasizing distinct identities was viewed as unpatriotic. The 'Double V' campaign was a strategic negotiation, not a separatist standpoint. The Japanese Internment created a negative identity formation\u2014identity as a target. The war effort required the suppression of difference for the 'Arsenal of Democracy.'",
        "key_manifestations": [
          "Executive Order 9066 (Identity as crime)",
          "Four Freedoms (Universalist framing)",
          "A Rising Wind by Walter White (1945)",
          "The Negro Soldier (Propaganda film emphasizing sameness)"
        ]
      },
      "1945": {
        "salience_share": 2.5,
        "description": "Slow recovery (+0.7%). The post-war era saw the publication of *The Second Sex* (Simone de Beauvoir, trans. 1953) and *Black Skin, White Masks* (Fanon, 1952), laying the intellectual groundwork for modern identity theory. The catalyst was the decolonization movement abroad, which echoed in the US. The question 'What is Woman?' or 'What is Blackness?' began to be asked existentially, not just legally.",
        "key_manifestations": [
          "Invisible Man by Ralph Ellison (1952 - Existential identity)",
          "The Second Sex (US publication 1953)",
          "Annie Allen by Gwendolyn Brooks (1949)",
          "Notes of a Native Son by James Baldwin (1955)"
        ]
      },
      "1950": {
        "salience_share": 2.8,
        "description": "Steady (+0.3%). The Beats (Cluster 19) flirted with identity by appropriating Black culture ('The White Negro' by Mailer), but this was voyeurism, not standpoint. The Mattachine Society (Gay rights) began to form a collective identity in the shadows, arguing that homosexuals were a distinct 'minority' rather than just deviants. This was a crucial shift: defining identity as a 'peoplehood.'",
        "key_manifestations": [
          "The Homosexual in America by Donald Webster Cory (1951)",
          "Invisible Man (1952)",
          "Go Tell It on the Mountain (1953)",
          "Brown v. Board (1954 - The psychological damage of segregation)"
        ]
      },
      "1955": {
        "salience_share": 3.2,
        "description": "Incremental growth (+0.4%). The Civil Rights movement was primarily universalist ('I Have a Dream'), but the *experience* of the movement forged a deep, particularist consciousness. The catalyst was the violence; the realization that the white moderate could never truly understand the black experience of fear. James Baldwin became the primary articulator of this gap\u2014the idea that the oppressor is spiritually blinded by their own power.",
        "key_manifestations": [
          "Giovanni's Room by James Baldwin (1956)",
          "The Fire Next Time (1963 - Anticipating the shift)",
          "A Raisin in the Sun (1959)",
          "Formation of the Daughters of Bilitis (1955)"
        ]
      },
      "1960": {
        "salience_share": 4.5,
        "description": "Acceleration (+1.3%). The fracture began. SNCC's move away from multi-racial integration toward Black Power was the pivotal moment. The catalyst was the betrayal at the 1964 Democratic Convention and the feeling that white liberals were taking over the movement. Stokely Carmichael articulated the need for Black people to define themselves, for themselves. Simultaneously, *The Feminine Mystique* identified the 'Problem That Has No Name,' creating a shared consciousness among white suburban women.",
        "key_manifestations": [
          "The Feminine Mystique (1963)",
          "The Autobiography of Malcolm X (1965)",
          "Black Power speech by Stokely Carmichael (1966)",
          "Blues People by Amiri Baraka (1963)"
        ]
      },
      "1965": {
        "salience_share": 7.0,
        "description": "Explosive growth (+2.5%). This was the birth of 'Identity Politics' proper. The Black Arts Movement declared that there was a 'Black Aesthetic' distinct from white standards. Radical Feminism (Redstockings, SCUM Manifesto) declared that 'The Personal is Political,' collapsing the distinction between private life and public power. The catalyst was the failure of the New Left to address sexism and racism within its own ranks, forcing women and minorities to form separate caucuses.",
        "key_manifestations": [
          "SCUM Manifesto (1967)",
          "Soul on Ice by Eldridge Cleaver (1968)",
          "I Know Why the Caged Bird Sings (1969)",
          "Stonewall Riots (1969 - Gay identity goes public)"
        ]
      },
      "1970": {
        "salience_share": 8.5,
        "description": "Continued surge (+1.5%). The 'Combahee River Collective Statement' (1977) officially coined the term 'Identity Politics,' arguing that the most radical politics come from one's own identity. This was the foundational text of Intersectionality (though not yet named). The displacing force was the decline of the universalist labor movement. 'Sisterhood is Powerful' became the slogan. Native American activism (AIM) also surged, centered on indigenous sovereignty and spiritual identity.",
        "key_manifestations": [
          "Combahee River Collective Statement (1977)",
          "The Woman Warrior by Maxine Hong Kingston (1976)",
          "Roots (TV Miniseries 1977 - Mass cultural identity retrieval)",
          "Orientalism by Edward Said (1978 - Academic foundation)"
        ]
      },
      "1975": {
        "salience_share": 7.8,
        "description": "Slight consolidation (-0.7%) as the movements institutionalized. The 'balkanization' of the Left became a talking point. The catalyst for the slight dip was the conservative backlash (Cluster 02) which mocked 'hyphenated Americans.' However, within the academy, Women's Studies and Black Studies departments were being founded, creating the 'citadels' where this theory would mature and eventually conquer the humanities.",
        "key_manifestations": [
          "For Colored Girls Who Have Considered Suicide... (1975)",
          "Establishment of Black Studies Depts (late 60s/70s)",
          "The Color Purple (1982 - epistolary female voice)",
          "Of Woman Born by Adrienne Rich (1976)"
        ]
      },
      "1980": {
        "salience_share": 6.5,
        "description": "Decline in the public square (-1.3%), rising in the ivory tower. The Reagan era emphasized 'colorblind individualism,' suppressing identity talk in politics. The displacing force was the 'Cosby Show' era of respectability politics\u2014asserting sameness rather than difference. However, legal scholar Kimberl\u00e9 Crenshaw was developing the framework of 'Intersectionality' to explain why anti-discrimination law failed Black women. The theory was gestating in law reviews while the culture looked away.",
        "key_manifestations": [
          "Ain't I a Woman? by bell hooks (1981)",
          "The Color Purple (Film 1985)",
          "Sister Outsider by Audre Lorde (1984)",
          "This Bridge Called My Back (1981)"
        ]
      },
      "1985": {
        "salience_share": 7.2,
        "description": "Re-emergence (+0.7%) via the 'Canon Wars.' Stanford's 'Hey Hey Ho Ho Western Civ Has Got to Go' chant symbolized the shift. The catalyst was the demographic change on campuses. Epistemically, the argument was that the 'Great Books' were not universal, but the specific standpoint of Dead White Men. Morrison's *Beloved* (1987) demonstrated that the ghost of slavery was the central American reality, accessible only through the trauma of the survivor.",
        "key_manifestations": [
          "Beloved by Toni Morrison (1987)",
          "Demarginalizing the Intersection of Race and Sex by Crenshaw (1989)",
          "Borderlands/La Frontera by Gloria Anzald\u00faa (1987)",
          "Do the Right Thing (1989)"
        ]
      },
      "1990": {
        "salience_share": 9.5,
        "description": "A sharp rise (+2.3%) as 'Political Correctness' became a household term. This was the mainstream discovery of Standpoint Theory. The catalyst was the Anita Hill hearings (1991), which visually demonstrated the gendered epistemic gap: a panel of white men simply could not *know* the reality of harassment. 'Multiculturalism' became the official curriculum in schools. The 'Identity Politics' of the 90s focused on representation and language.",
        "key_manifestations": [
          "Anita Hill/Clarence Thomas Hearings (1991)",
          "Waiting to Exhale (1992)",
          "Gender Trouble by Judith Butler (1990)",
          "The Joy Luck Club (Film 1993)"
        ]
      },
      "1995": {
        "salience_share": 8.0,
        "description": "A pause (-1.5%) as the 'Post-Racial' myth began to form during the dot-com boom. The internet was initially seen as a space without bodies ('On the internet, nobody knows you're a dog'), theoretically erasing identity. The catalyst for the decline was the fatigue with 'PC culture.' However, the queer theory movement continued to radicalize, deconstructing identity categories altogether (fluidity) rather than just empowering them.",
        "key_manifestations": [
          "Ellen (TV Show) (1997)",
          "Will & Grace (1998 - Mainstreaming gay identity)",
          "One America Initiative (Clinton's dialogue on race) (1997)",
          "Boys Don't Cry (1999)"
        ]
      },
      "2000": {
        "salience_share": 7.5,
        "description": "Stagnation (-0.5%). The 9/11 attacks forced a return to nationalism (Cluster 06/04), temporarily suppressing internal identity fractures. 'United We Stand' was the slogan. The displacing force was the external enemy. However, Arab-Americans experienced a sudden, intense imposition of identity\u2014they were 'racialized' by the security state, creating a new standpoint of the 'suspect citizen.'",
        "key_manifestations": [
          "Crash (2004 - A clumsy attempt at intersectionality)",
          "The L Word (2004)",
          "Passing Strange (Musical dev. early 2000s)",
          "Patriot Act racial profiling debates"
        ]
      },
      "2005": {
        "salience_share": 9.0,
        "description": "The digital incubation (+1.5%). Tumblr and early social media blogs became the laboratories for 'Social Justice' discourse. The catalyst was the ability of marginalized youth to bypass gatekeepers and form 'counter-publics.' Concepts like 'microaggression,' 'privilege checking,' and 'cisnormativity' migrated from obscure academic papers to teenage vernacular. This was the 'pre-woke' era where the vocabulary was being standardized.",
        "key_manifestations": [
          "Tumblr social justice blogs (2007-)",
          "Unpacking the Invisible Knapsack (Viral spread online)",
          "Yes We Can (Obama 2008 - Symbolic identity victory)",
          "Milk (2008)"
        ]
      },
      "2010": {
        "salience_share": 14.5,
        "description": "The Great Awokening (+5.5%). The killing of Trayvon Martin (2012) and the birth of #BlackLivesMatter were the catalysts. The epistemic shift was seismic: 'video evidence' + 'lived experience' destroyed the authority of police narratives. 'Stay Woke' meant remaining epistemically vigilant against the white lie of safety. Intersectionality moved from law schools to Buzzfeed. The 'progressive stack' became a method of organizing discourse.",
        "key_manifestations": [
          "The New Jim Crow by Michelle Alexander (2010)",
          "Formation of Black Lives Matter (2013)",
          "Beyonc\u00e9's Lemonade (2016 - High art standpoint)",
          "Between the World and Me by Ta-Nehisi Coates (2015)"
        ]
      },
      "2015": {
        "salience_share": 22.0,
        "description": "Explosion (+7.5%). The Trump presidency acted as a high-pressure accelerant. Identity was no longer just a theory; it was a defensive posture against a regime seen as white nationalist. The #MeToo movement (2017) validated the standpoint of women against powerful men, weaponizing 'Believe Women' as an epistemic corrective to centuries of doubt. The New York Times' *1619 Project* (2019) attempted to rewrite the entire national metanarrative from the Black standpoint.",
        "key_manifestations": [
          "The 1619 Project (2019)",
          "White Fragility by Robin DiAngelo (2018)",
          "Nanette by Hannah Gadsby (2018)",
          "Pose (TV Series) (2018)"
        ]
      },
      "2020": {
        "salience_share": 26.5,
        "description": "Peak Institutionalization (+4.5%). Following the George Floyd protests, DEI (Diversity, Equity, and Inclusion) became the operating system of corporate and academic America. The catalyst was the moral panic that silence equaled violence. Standpoint theory became administrative policy: 'lived experience' was formally weighted higher than 'intent' in HR disputes. However, this success triggered a massive 'Anti-Woke' backlash (Cluster 02), turning identity into the central axis of the culture war.",
        "key_manifestations": [
          "How to Be an Antiracist by Ibram X. Kendi (2019/2020 boom)",
          "Corporate DEI statements (Summer 2020)",
          "Judas and the Black Messiah (2021)",
          "The banning of 'Critical Race Theory' in red states (2021-)"
        ]
      },
      "2025": {
        "salience_share": 21.0,
        "description": "Retraction and Mutation (-5.5%). The 'Peak Woke' era has passed, displaced by a 'Post-Identity' fatigue and the legal dismantling of Affirmative Action. The catalyst is the fracturing of the intersectional coalition (e.g., conflicts between religious minorities and LGBTQ rights, or the Gaza protests splitting the progressive block). Epistemically, the 'Standpoint' claim is losing power to a resurgent 'merit/colorblind' narrative (Cluster 05/06) and a new 'Class-First' leftist critique. Identity is becoming 'niche' again rather than hegemonic.",
        "key_manifestations": [
          "Students for Fair Admissions v. Harvard fallout (2023-2025)",
          "The fracturing of the 'Women's March' coalition (Historical context)",
          "American Fiction (Film) (2023 - Satirizing the commodified black voice)",
          "Rise of 'De-transition' narratives disrupting the linear identity story (2025)"
        ]
      }
    }
  },
  "08_protestant_moral_absolutism": {
    "name": "Protestant Moral Absolutism",
    "description": "This cluster tracks the conviction that political and cultural life must be governed by an immutable, divinely ordained moral law, primarily derived from a literalist or high-authority interpretation of Protestant scripture. It asserts that national prosperity and virtue are causally linked to strict adherence to these moral standards, necessitating legislative enforcement of piety (e.g., prohibition, anti-gambling, anti-obscenity). The trajectory reflects a long-term displacement by secularism, rights-based liberalism, and consumerism, but is characterized by explosive, recurring political mobilizations in reaction to perceived moral decline, shifting from a focus on personal vices to institutional protection of 'traditional' values.",
    "trajectory": {
      "1890": {
        "salience_share": 15.0,
        "description": "The cluster operated at a high baseline (+1.5% from 1885), representing the cultural dominance of Victorian moral codes and the power of the temperance movement. The catalyst for this sustained high level was the perceived moral chaos of urbanization and massive immigration; the movement sought to impose a unified, moralistic order onto the new, fluid American city. The moral framework rejected secular meliorism (Cluster 01) as insufficient, arguing that structural reform was meaningless without personal character reform, primarily achieved through total abstinence from vice. This was the final stage of the old Puritanism as a mass political force.",
        "key_manifestations": [
          "The Women's Christian Temperance Union (WCTU) peak power (1890s)",
          "Anthony Comstock's ongoing anti-vice crusades (Comstock Laws)",
          "The Social Gospel movement's focus on moral reform (as applied to systems)",
          "How the Other Half Lives (1890 - moralistic framing of poverty)"
        ]
      },
      "1895": {
        "salience_share": 14.2,
        "description": "Variance experienced a slight erosion (-0.8%). The displacing force was the overwhelming economic trauma of the Panic of 1893, which shifted political attention from personal vice (alcoholism) to systemic failure (monetary policy). Populism (Cluster 02) prioritized economic conspiracy over moral conspiracy. However, the Moral Absolutism movement successfully rebranded: the Anti-Saloon League (ASL) professionalized, shifting away from emotional rallies to targeted legislative lobbying, ensuring its long-term institutional survival.",
        "key_manifestations": [
          "The Anti-Saloon League (ASL) political institutionalization (1895-)",
          "William Jennings Bryan's Cross of Gold speech (1896 - economic over moral focus)",
          "The Red Badge of Courage (1895 - Focus on raw existential fear over moral duty)",
          "Plessy v. Ferguson (1896 - Moral failure justified by law)"
        ]
      },
      "1900": {
        "salience_share": 15.8,
        "description": "A notable resurgence (+1.6%) fueled by the Progressive alliance. Moral Absolutists realized they could collaborate with technocrats to achieve shared goals (e.g., 'efficiency' through temperance). The catalyst was the increasing focus on the 'social hygiene' of the city. Vice was framed not just as sin, but as a public health hazard and a threat to good governance. This period saw a rise in 'purity literature,' which defined the nation's moral health in terms of sexual austerity.",
        "key_manifestations": [
          "The Mann Act (White Slave Traffic Act) passed (1910 - debated heavily from 1900)",
          "The Social Evil in Chicago (1911 - Expert study supporting moral legislation)",
          "Evangelical support for Prohibition as an efficiency measure",
          "Theodore Roosevelt's 'Square Deal' moralism"
        ]
      },
      "1905": {
        "salience_share": 16.5,
        "description": "Growth continued (+0.7%) toward the political apex of the Prohibition movement. The ASL was a hyper-effective single-issue lobby, demonstrating that moral absolutes could be translated directly into political power. The catalyst was the *systematic* demonstration of the link between liquor and political corruption (saloon leagues). The moral imperative was reinforced by the 'muscular Christianity' movement, which fused piety with national vigor and service (Cluster 04).",
        "key_manifestations": [
          "The Life of Billy Sunday (Evangelist peak influence)",
          "The Jungle (1906 - Morality exposed via disgust)",
          "The Scofield Reference Bible (1909 - literalist authority grows)",
          "The Federal Bureau of Investigation (FBI) establishment (1908 - Moral policing)"
        ]
      },
      "1910": {
        "salience_share": 17.2,
        "description": "The variance plateaued (+0.7%) at a high sustained level, moving from agitation to legislative capture. The catalyst was the continued success of the ASL's 'pressure politics' model. This cluster began to consolidate power at the state level through local option laws. Epistemically, the belief was that the moral law was self-evident and only needed to be legislated to be effective, subordinating the messy reality of individual freedom to the clarity of divine command.",
        "key_manifestations": [
          "The Mann Act (White Slave Traffic Act) (1910)",
          "The Fundamentals (1910-1915 - theological defense against modernism)",
          "The Titanic Sinking (1912 - Moralistic warnings against hubris)",
          "Founding of the Boy Scouts of America (1910 - Moral training)"
        ]
      },
      "1915": {
        "salience_share": 19.0,
        "description": "A major surge (+1.8%) driven by the World War I mobilization. The catalyst was the successful framing of Prohibition as a patriotic, wartime measure: saving grain for the troops and removing German-linked breweries. The war created an irresistible moral consensus that individual indulgence was a betrayal of national duty. The Espionage and Sedition Acts were moralistic laws against dissent, demonstrating the state's willingness to enforce an absolute national morality.",
        "key_manifestations": [
          "Passage of the 18th Amendment (Prohibition) by Congress (1917)",
          "Lever Food and Fuel Control Act (1917 - Wartime moral rationing)",
          "The Espionage Act (1917)",
          "Billy Sunday's 'I am a Temperance Man' rhetoric"
        ]
      },
      "1920": {
        "salience_share": 20.5,
        "description": "The cluster reached its historical peak (+1.5%) with the ratification of the 18th Amendment. Prohibition was the maximal expression of moral absolutism's faith in the power of law to perfect character. The catalyst was the legal and political victory that seemingly codified the nation's spiritual purity. The Scopes Trial later in this interval, however, signaled the impending conflict, where the absolute truth of scripture would be pitted directly against the authority of secular science (Cluster 01).",
        "key_manifestations": [
          "18th Amendment (Prohibition) ratification (1920)",
          "The Scopes Trial (1925)",
          "The KKK's cultural war on 'moral corruption' (1920s surge)",
          "The Volstead Act (1919 - Enforcement of prohibition)"
        ]
      },
      "1925": {
        "salience_share": 16.0,
        "description": "A sharp retraction (-4.5%) as the 'Roaring Twenties' hedonism created a cultural rebellion against moral austerity. The displacing force was the embrace of individual liberty and consumption (Cluster 14/19). The Scopes Trial, while a legal victory for absolutism, was a cultural and epistemic defeat, leading to the caricature of fundamentalists as ignorant. The gap between the law (Prohibition) and the lived reality (speakeasies) eroded the moral authority of the movement.",
        "key_manifestations": [
          "The Great Gatsby (1925 - Prohibition's moral failure)",
          "H.L. Mencken's journalistic mockery of fundamentalism",
          "The Jazz Age culture (Displacing force)",
          "The Brotherhood of Sleeping Car Porters (A. Philip Randolph's secular leadership)"
        ]
      },
      "1930": {
        "salience_share": 12.0,
        "description": "The decline continued (-4.0%). The Great Depression completely redefined the moral debate. The displacing force was the sheer urgency of economic survival (Cluster 16). For many, poverty and hunger became the ultimate moral crisis, pushing concerns about alcohol and dancing to the political periphery. The need for tax revenue to fund New Deal programs strengthened the pragmatic push for Prohibition's repeal.",
        "key_manifestations": [
          "The Bonus Army March (1932 - Moral claim based on economic need)",
          "The Grapes of Wrath (1939 - The moral landscape of poverty)",
          "The rise of Father Coughlin (Mixing religion and economic conspiracy)",
          "Repeal of Prohibition movement gains momentum"
        ]
      },
      "1935": {
        "salience_share": 7.5,
        "description": "The cluster reached its early-century low (-4.5%). The repeal of the 18th Amendment was the ultimate institutional defeat, symbolizing the triumph of pragmatic secularism (Cluster 09). The displacing force was the New Deal coalition's focus on material welfare over moral regulation. Moral Absolutism retreated from the public square into the pulpit and established small, independent colleges, beginning a period of political hibernation to rebuild a counter-cultural base.",
        "key_manifestations": [
          "21st Amendment (Repeal of Prohibition) (1933)",
          "Billy Graham's early regional revivals (Building the base)",
          "The Catholic Legion of Decency (Attempt to regulate Hollywood morality)",
          "The Hollywood Production Code (Self-imposed moral regulation)"
        ]
      },
      "1940": {
        "salience_share": 7.2,
        "description": "The cluster stabilized in a state of deep political dormancy (-0.3%). WWII was framed as a just war against a clear external evil, allowing a moral consensus that didn't require divisive legislative campaigns. The 'moral imperative' was sublimated into national service and unity (Cluster 04). Entrenchment occurred in military chaplaincy and localized religious publishing, preserving the ideology for the post-war boom.",
        "key_manifestations": [
          "The 'Double V' campaign (Moral anti-fascism)",
          "C.S. Lewis's Mere Christianity (US publishing and influence) (1942)",
          "The Hollywood Canteen (Moralizing military leisure)",
          "The Chaplain's Service Corps"
        ]
      },
      "1945": {
        "salience_share": 6.5,
        "description": "A further slight decline (-0.7%) as post-war prosperity and the baby boom privatized moral life into the suburban family (Cluster 18). The displacing force was the psychological turn inward, shifting the focus from 'sin' to 'adjustment.' However, the existential threat of the Cold War created a 'Civil Religion' consensus, allowing the cluster to align with Anti-Communism as a new moral imperative.",
        "key_manifestations": [
          "The GI Bill (Privatizing the American Dream)",
          "The Kinsey Reports (1948 - Scientific challenge to sexual mores)",
          "The Founding of the National Association of Evangelicals (1942/growing influence)",
          "The Best Years of Our Lives (1946 - Focus on private recovery)"
        ]
      },
      "1950": {
        "salience_share": 8.8,
        "description": "A sharp rebound (+2.3%) driven by the Cold War moral panic. The catalyst was the successful framing of Communism as an 'atheistic' and 'godless' conspiracy (Cluster 06). Moral Absolutism became synonymous with American patriotism. Congress added 'Under God' to the pledge, symbolically co-opting the state for this moral project. Billy Graham's mass revivals achieved national prominence, creating a non-denominational evangelical infrastructure.",
        "key_manifestations": [
          "Billy Graham's New York Crusade (1957 - Major media event)",
          "Adding 'Under God' to the Pledge of Allegiance (1954)",
          "Communism and the Conscience of the West by Fulton Sheen (1948)",
          "The Ten Commandments (Film) (1956 - Cinematic moralism)"
        ]
      },
      "1955": {
        "salience_share": 9.2,
        "description": "The cluster reached a post-war consensus high (+0.4%) under Eisenhower, who emphasized faith as the foundation of American governance. The moral framework became institutionalized in the suburbs through a culture of conformity (Cluster 18). Entrenchment was seen in the fusion of corporate success and Christian piety. The emphasis was on a benign, non-controversial 'Judeo-Christian' ethic that served to stabilize the Cold War home front.",
        "key_manifestations": [
          "Eisenhower's emphasis on faith ('Our Government makes no sense unless it is founded on a deeply felt religious faith...')",
          "The Power of Positive Thinking by Norman Vincent Peale (1952)",
          "The Organization Man (1956 - Religion as social cement)",
          "Leave It to Beaver (TV - Idealized nuclear moral family)"
        ]
      },
      "1960": {
        "salience_share": 8.0,
        "description": "The descent began (-1.2%). The catalyst was the rise of the counter-culture (Cluster 19) and the Sexual Revolution (Kinsey reports finally integrated culturally). JFK's election (1960) signaled a major blow to Protestant hegemony by proving a Catholic could achieve the highest office. The moral authority of the churches began to erode as youth rejected the conformity of the 50s for 'authenticity.'",
        "key_manifestations": [
          "The Second Vatican Council (1962-1965 - Modernizing religious authority)",
          "JFK's Houston Speech on religion and politics (1960)",
          "Dr. Strangelove (1964 - Moral anarchy in the system)",
          "The Feminine Mystique (1963 - Critique of the moral family unit)"
        ]
      },
      "1965": {
        "salience_share": 5.5,
        "description": "A precipitous drop (-2.5%). The displacing force was the Warren Court's rights-based universalism (Cluster 03). Decisions on school prayer and obscenity were interpreted as the state actively removing God from the public square. Vietnam further discredited the established moral order, leading youth to reject institutions. The civil rights movement used moral rhetoric, but its legal goals were secular and universal, weakening the Protestant-specific moral claim.",
        "key_manifestations": [
          "Abington School District v. Schempp (1963 - Banning state-mandated Bible reading)",
          "The Secular City by Harvey Cox (1965)",
          "Hair (Musical) (1967 - Radical moral/sexual liberation)",
          "Death of God theology movement (1960s)"
        ]
      },
      "1970": {
        "salience_share": 7.5,
        "description": "A major political rebound (+2.0%). The catalyst was the counter-revolutionary reaction to *Roe v. Wade* (1973) and the sexual liberalization of the 1970s. The 'Moral Majority' began to form, realizing that its fight was no longer against personal vices like alcohol, but against the state's legal codification of sexual/social liberty. The focus shifted from saving individual souls to retaking the political institutions (Cluster 09).",
        "key_manifestations": [
          "Roe v. Wade (1973)",
          "The Late Great Planet Earth by Hal Lindsey (1970 - Apocalyptic moral framing)",
          "Jerry Falwell founds Moral Majority (1979 - mobilizing the base)",
          "Focus on the Family founding (1977)"
        ]
      },
      "1975": {
        "salience_share": 11.0,
        "description": "The cluster accelerated (+3.5%) to become a powerful, institutionalized political movement. The displacing force of economic malaise (Cluster 01 failure) was weaker than the moral clarity of the abortion issue. The catalyst was the realization that the federal government was interfering with religious schools (e.g., Bob Jones University). This perceived government overreach provided the final push for political mobilization, leading to the fusion of Christian conservatives and the Republican party.",
        "key_manifestations": [
          "Formation of the Christian Voice (1978)",
          "Phyllis Schlafly's stop-ERA movement (Moral backlash success)",
          "The Culture of Narcissism (1979 - Secular critique aiding moralists)",
          "Jimmy Carter's 'Born Again' identity (Conflicting political moralism)"
        ]
      },
      "1980": {
        "salience_share": 12.5,
        "description": "The political expression of the cluster peaked (+1.5%). The successful mobilization of the Moral Majority directly contributed to the election of Ronald Reagan. The catalyst was the successful fusion of moral conservatism (anti-abortion, pro-family) with economic conservatism (anti-tax, Cluster 05). This gave moral absolutists institutional power, allowing them to shape judicial and policy appointments. The rhetoric of the 'Evil Empire' focused moral energy externally again.",
        "key_manifestations": [
          "Reagan's acceptance of Moral Majority support (1980)",
          "The Dallas Declaration (1980 - Conservative religious statement)",
          "Bowers v. Hardwick (1986 - Upholding moralistic law)",
          "The Moral Majority Report newspaper (1980s)"
        ]
      },
      "1985": {
        "salience_share": 10.5,
        "description": "A structural decline began (-2.0%). The displacing force was the failure of the movement to achieve its main legislative goals (Constitutional Amendment banning abortion, school prayer). The AIDS crisis provided a new moral battleground, but it was politicized and often used for moral condemnation rather than legislative success. The cluster began to shift focus to judicial activism and long-term legal strategy (Cluster 17) over mass political campaigns.",
        "key_manifestations": [
          "Scandals involving Televangelists (Jim Bakker, Jimmy Swaggart) (Eroding moral authority)",
          "The Great Divorce (Reagan's failure to enact social agenda)",
          "Webster v. Reproductive Health Services (1989 - Judicial strategy focus)",
          "Focus on the Family's media expansion (Building a parallel culture)"
        ]
      },
      "1990": {
        "salience_share": 9.0,
        "description": "The political energy continued to decline (-1.5%) as the Cold War ended, removing the external moral anchor. The displacing force was the increasing prevalence of postmodern irony and secular cynicism (Cluster 11), which made sincere moral absolutism appear quaint. The 'Culture War' (Cluster 02) became the new framework, but it was less about converting souls and more about winning political turf battles.",
        "key_manifestations": [
          "Pat Buchanan's 'Culture War' Speech (1992)",
          "Silence = Death (ACT UP's moral counter-slogan)",
          "The Body Snatchers (Theological fear of New Age/Occult)",
          "The Ruby Ridge siege (1992 - Absolutism turns violent fringe)"
        ]
      },
      "1995": {
        "salience_share": 9.8,
        "description": "A small spike (+0.8%) driven by the culture war's focus on President Bill Clinton's character. The catalyst was the Clinton impeachment, where moral absolutists applied their high standards to presidential conduct, using public discourse to enforce moral consistency. Christian Coalition (Pat Robertson) replaced the Moral Majority, professionalizing the lobbying and shifting the focus to grassroots mobilization and voter guides.",
        "key_manifestations": [
          "The Christian Coalition's 'Contract with the American Family' (1995)",
          "The Promise Keepers movement (1990s - Male moral purity movement)",
          "The Impeachment of Bill Clinton (1998)",
          "Left Behind series (1995 - Apocalyptic moral worldview for the masses)"
        ]
      },
      "2000": {
        "salience_share": 9.8,
        "description": "Stagnation (0.0%). The 9/11 attacks offered a momentary return to 'Good vs. Evil' clarity, but this moral focus was directed externally (Cluster 06/13). The displacing force was the rise of the 'New Atheists' (Cluster 02 counter-force), who aggressively challenged the intellectual basis of religious belief. Entrenchment occurred in the 'Defense of Marriage' movement, focusing state-by-state on preventing the expansion of gay rights.",
        "key_manifestations": [
          "The War on Terror rhetoric (Moral purity vs Evil)",
          "Founding of Alliance Defending Freedom (Legal focus on religious liberty)",
          "The Da Vinci Code (2003 - Anti-Christian conspiracy thriller)",
          "Massachusetts legalizes same-sex marriage (2004 - The trigger for defense)"
        ]
      },
      "2005": {
        "salience_share": 8.0,
        "description": "A clear decline (-1.8%). The displacing force was the increasing visibility of youth secularization ('The Nones') and the rise of New Atheism, which eroded the cluster's moral and intellectual standing in the mainstream. High-profile scandals involving megachurch leaders further damaged the moral authority of the movement. However, the cluster successfully mobilized for state-level marriage bans, showing that its political infrastructure remained potent locally.",
        "key_manifestations": [
          "The God Delusion by Richard Dawkins (2006)",
          "The Haggard Scandal (2006 - Exposing hypocrisy)",
          "Prop 8 in California (2008 - Successful state-level mobilization)",
          "American Atheists' aggressive public campaigns"
        ]
      },
      "2010": {
        "salience_share": 6.5,
        "description": "The cluster reached a new political low (-1.5%). The catalyst was the increasing generational acceptance of LGBTQ rights and the widespread failure of political moralism to reverse cultural trends. The movement fractured: some sought total retreat, while others adopted the combative 'victim' identity of the broader conservative populist movement (Cluster 02). 'Religious Liberty' became the new keyword, framing their absolute moral claims as a defense against secular oppression.",
        "key_manifestations": [
          "Obergefell v. Hodges (Lead-up to legal defeat)",
          "Duck Dynasty (TV - Commercialized moral identity)",
          "The Benedict Option by Rod Dreher (2017 - Call for cultural retreat)",
          "Hobby Lobby v. Burwell (2014 - Corporate religious liberty victory)"
        ]
      },
      "2015": {
        "salience_share": 9.0,
        "description": "A radical spike and mutation (+2.5%). The election of Donald Trump was the catalyst, signaling the final divorce of political moral absolutism from personal piety. The moral goal was redefined from 'virtue' to 'winning/power.' The cluster abandoned its traditional moral criteria (Cluster 04) in favor of a purely transactional alliance with an affective populist leader (Cluster 02) who promised judicial protection and cultural combat. The moral issue became loyalty to the tribe rather than abstract righteousness.",
        "key_manifestations": [
          "Trump's RNC acceptance speech (2016 - Using evangelical rhetoric without piety)",
          "The Flight 93 Election (2016 - Moral absolutism as existential power grab)",
          "The Rise of Christian Nationalism (Theory moves to the mainstream)",
          "Masterpiece Cakeshop v. Colorado Civil Rights Commission (2018 - Moral conflict as a constitutional right)"
        ]
      },
      "2020": {
        "salience_share": 10.5,
        "description": "Further expansion (+1.5%) driven by the apocalyptic framing of the 2020 election and the pandemic (moralizing health policy). The catalyst was the *Dobbs* decision (2022), which delivered the movement's main legislative goal, demonstrating the utility of the judicial strategy (Cluster 17). This success re-validated the political path. The moral claim fully transmuted into 'Christian Nationalism'\u2014the belief that the US is a chosen, morally-defined nation that must be governed by its 'true' citizens.",
        "key_manifestations": [
          "Dobbs v. Jackson Women's Health Organization (2022)",
          "Mike Johnson's election as Speaker of the House (2023 - Openly Christian Nationalist)",
          "The 'Jericho March' on January 6th (Fusion of religious and political action)",
          "Sound of Freedom (2023 - Moral panic/conspiracism (Cluster 06) as entertainment)"
        ]
      },
      "2025": {
        "salience_share": 10.5,
        "description": "The cluster reaches a temporary entrenchment high (0.0%) as it stabilizes into its new, combative form. The displacing force of secular demographics is steady, but the cluster compensates by successfully deploying state power. The focus is now on judicial appointments (Cluster 17) and legal action to enforce moral policies on everything from school libraries to gender-affirming care. The political battle is now framed as a zero-sum civilizational war, an absolute moral conflict with no compromise possible.",
        "key_manifestations": [
          "The push for a Federal Personhood Amendment (2025)",
          "State-level bans on gender-affirming care for minors (2024-2025)",
          "The Semiquincentennial (2026 - Debates over the 'Christian Founding' myth)",
          "The 'Christian Nationalist' Political Action Committee (PAC) dominance"
        ]
      }
    }
  },
  "09_pragmatic_consensus_liberalism": {
    "name": "Pragmatic Consensus Liberalism",
    "description": "This cluster is defined by the epistemic belief that political truth is generated through reasoned debate, negotiation, and the pursuit of the 'vital center' rather than through ideological purity or scientific fiat. It prioritizes institutional stability, incremental progress, and bipartisan compromise, viewing politics as the art of the possible. Morally, it holds the process of deliberation as sacrosanct and elevates social harmony above radical justice claims. Its long-term trajectory is one of ascendancy during periods of national crisis (Depression, WWII) and collapse during periods of identity-based or populist upheaval, where compromise is redefined as weakness or betrayal.",
    "trajectory": {
      "1890": {
        "salience_share": 8.0,
        "description": "The cluster sat at a low baseline, reflecting the raw, chaotic partisanship of the Gilded Age. The minimal variance was a consequence of the displacing force being the economic and moral absolutism of Populism (Cluster 02) and Protestant Moral Absolutism (Cluster 08). In this era, compromise was often viewed as a cynical transaction rather than a virtuous act of statecraft, leaving little room for a consensus-driven ethos. The dominant political mode was adversarial, fueled by deep-seated economic grievances that rejected the very notion of a shared center ground.",
        "key_manifestations": [
          "The Cross of Gold Speech (1896 - Rejection of compromise)",
          "The dominance of the political machine (anti-consensus)",
          "The Sherman Antitrust Act (1890 - bipartisan agreement on a limited goal)",
          "The Lodge Bill failure (1890 - Failure to achieve consensus on voting rights)"
        ]
      },
      "1895": {
        "salience_share": 7.5,
        "description": "The variance continued to slightly erode (-0.5%), still struggling against the intensity of the Populist movement. The financial crisis of the 1890s served as a catalyst for deeper polarization, where the Free Silver vs. Gold Standard debate became an existential, zero-sum conflict that tolerated no middle ground. The failure of the establishment to offer a compelling, unifying vision meant that the affective epistemology of Populism gained ground, further delegitimizing slow, pragmatic adjustment.",
        "key_manifestations": [
          "The election of 1896 (Extremes polarized)",
          "Plessy v. Ferguson (1896 - Judicial codification of a lack of consensus)",
          "The Panic of 1893 economic fallout",
          "The rise of party bosses like Richard Croker"
        ]
      },
      "1900": {
        "salience_share": 10.0,
        "description": "A significant upswing (+2.5%) coincided with the rise of Progressivism (Cluster 01). The catalyst was the belief that government reform required a non-partisan, public-spirited alliance of the best minds, bridging the gap between Republicans and Democrats on issues of efficiency and corruption. This was the first attempt to elevate process over ideology since the Civil War. Muckraking (Cluster 10) exposed problems in a way that compelled a shared, pragmatic solution rather than a revolutionary one, making incremental reform seem achievable and virtuous.",
        "key_manifestations": [
          "Civil Service Reform growth",
          "Theodore Roosevelt's 'Square Deal' rhetoric (1901)",
          "The Wisconsin Idea (Bipartisan administrative reform)",
          "The American Commonwealth (James Bryce - emphasizing consensus ideals)"
        ]
      },
      "1905": {
        "salience_share": 11.5,
        "description": "Growth continued (+1.5%) as the Progressive consensus solidified around the need for limited government intervention. The creation of regulatory bodies like the FDA and the breakup of monopolies required a shared, pragmatic understanding that the market (Cluster 05) was not self-correcting. The key manifestation was the focus on regulation as a practical fix, demonstrating that political compromise was more effective than radical overhaul, thus elevating the ethos of 'good government.'",
        "key_manifestations": [
          "Pure Food and Drug Act (1906)",
          "Northern Securities Co. antitrust case (1904)",
          "The Shame of the Cities (1904)",
          "The Panic of 1907 (catalyst for central banking consensus)"
        ]
      },
      "1910": {
        "salience_share": 12.5,
        "description": "The cluster experienced a steady increase (+1.0%), driven by the institutionalization of regulatory authority. The debate between Wilson\u2019s 'New Freedom' and Roosevelt\u2019s 'New Nationalism' was one of pragmatic means rather than fundamental ends, indicating a solid consensus on the role of the state. The Federal Reserve Act (1913) was a crowning achievement of this pragmatism: a complex, technical compromise between public and private interests, demonstrating the value of slow, deliberative political action.",
        "key_manifestations": [
          "Federal Reserve Act (1913)",
          "The 17th Amendment (1913 - Compromise on direct election of senators)",
          "Clayton Antitrust Act (1914)",
          "The Promise of American Life (1909 - Blueprint for managed progress)"
        ]
      },
      "1915": {
        "salience_share": 14.0,
        "description": "Variance expanded (+1.5%) as the looming European war forced an overarching national consensus on 'Preparedness' (Cluster 04). The catalyst was the external threat, which always privileges unity and pragmatic planning over ideological divisiveness. The war mobilization created temporary bipartisan agreement on suspending market logic (Cluster 05) and maximizing production, validating the idea that the political center could manage national life better than warring factions.",
        "key_manifestations": [
          "The War Industries Board formation (1917)",
          "Woodrow Wilson's re-election on a peace platform (1916)",
          "The Selective Service Act (1917 - Bipartisan consensus on conscription)",
          "The Creel Committee (Propaganda for consensus)"
        ]
      },
      "1920": {
        "salience_share": 10.5,
        "description": "A sharp retraction (-3.5%) occurred as the country recoiled from the idealism and high-pressure moralism of the war and the Wilson administration. The displacing force was the desire for a 'Return to Normalcy,' which meant a retreat from collective action and a re-emphasis on private, individual life (Cluster 14, 18). Consensus was rejected because it had led to the Treaty of Versailles and European entanglements. The political process was deemed exhausting and ineffectual, leading to a focus on consumption and market success (Cluster 05).",
        "key_manifestations": [
          "Harding's 'Return to Normalcy' (1920)",
          "The failure of the League of Nations ratification (Rejection of international consensus)",
          "Main Street (1920 - Satire of civic effort)",
          "Washington Naval Treaty (1922 - Limited, practical consensus on arms limitation)"
        ]
      },
      "1925": {
        "salience_share": 9.0,
        "description": "The cluster continued its decline (-1.5%) as the Roaring Twenties solidified the epistemic priority of market-based epistemology (Cluster 05). The displacing force was the belief that the market, not political compromise, was the key to prosperity. Consensus liberalism was associated with the dull 'expert' and the failed moralizing of Prohibition (Cluster 08). Political energy was instead directed into the cultural extremes of the Klan and the Jazz Age, showing the center's loss of gravitational pull.",
        "key_manifestations": [
          "Coolidge's maxim, 'The business of America is business' (1925)",
          "The Great Gatsby (1925 - focus on private moral failure)",
          "The Scopes Trial (1925 - Extremism over pragmatism)",
          "Middletown (1929 - documenting the shift to leisure)"
        ]
      },
      "1930": {
        "salience_share": 15.0,
        "description": "A massive surge (+6.0%) was driven by the catastrophic failure of the market (Cluster 05) and the need for immediate, drastic action. The Great Depression was the catalyst, compelling a national consensus around survival and the necessity of state action. FDR's rhetoric of 'bold, persistent experimentation' was the definition of pragmatic consensus: ideology was secondary to results. The very concept of political stability required a massive, non-ideological agreement to salvage the system.",
        "key_manifestations": [
          "FDR's First Inaugural Address (1933)",
          "The Civilian Conservation Corps (1933 - Bipartisan emergency measure)",
          "The Banking Act of 1933 (Emergency action consensus)",
          "Ickes' PWA and Hopkins' CWA (Pragmatic, often messy federal agencies)"
        ]
      },
      "1935": {
        "salience_share": 22.0,
        "description": "The cluster experienced its most intense growth (+7.0%), reaching a domestic zenith. The catalyst was the institutionalization of the New Deal, which required deep, lasting political compromise\u2014particularly the inclusion of Jim Crow states to pass the Social Security Act. This compromise, while morally fraught (Cluster 03), was the essence of the pragmatic consensus: achieving a lasting structure of welfare at the cost of excluding some groups. The moral good was defined by the stability of the entire system over the purity of any one policy.",
        "key_manifestations": [
          "The Social Security Act (1935)",
          "The Wagner Act (1935 - Pragmatic labor rights)",
          "The Works Progress Administration (WPA) (1935)",
          "The General Theory of Employment, Interest and Money (1936 - Keynesian consensus)"
        ]
      },
      "1940": {
        "salience_share": 25.0,
        "description": "Growth continued (+3.0%) as the nation transitioned to a war footing. The catalyst was the existential threat of World War II, which enforced a total consensus on national purpose, overriding all domestic political squabbles. The Lend-Lease Act (1941) was a masterpiece of pragmatic consensus, achieving total mobilization without declaring war, thereby maintaining a fragile unity. The moral imperative was simple: unity for victory, making compromise an unquestionable virtue.",
        "key_manifestations": [
          "Lend-Lease Act (1941)",
          "The Office of Price Administration (OPA) (Wartime consensus on controls)",
          "FDR's Four Freedoms Speech (1941)",
          "Defense spending passed with bipartisan majorities"
        ]
      },
      "1945": {
        "salience_share": 28.0,
        "description": "The cluster maintained its momentum (+3.0%) with the onset of the Cold War and post-war reconstruction. The catalyst was the perceived threat of communism, which required the 'Vital Center' to reject both extremes (fascism/communism). The Marshall Plan and the Truman Doctrine were massive, bipartisan policy achievements, cementing the belief that pragmatic consensus liberalism was the only reliable mode of governance, displacing the high-stakes risk of ideological revolution.",
        "key_manifestations": [
          "The Marshall Plan (1948)",
          "The Truman Doctrine (1947)",
          "The GI Bill of Rights (1944)",
          "The United Nations Charter ratification (1945)"
        ]
      },
      "1950": {
        "salience_share": 29.5,
        "description": "The consensus reached a high, stable level (+1.5%). Intellectuals proclaimed the 'End of Ideology' (Cluster 01/09 fusion), arguing that political truth was a matter of technical management within a settled liberal framework. The displacing force of McCarthyism (Cluster 06) briefly threatened the center but was ultimately contained by the Senate's procedural pragmatism (censure). The moral compass was steady, defined by gradual progress and institutional stability.",
        "key_manifestations": [
          "The End of Ideology by Daniel Bell (1960 - intellectual context for the 50s)",
          "The Vital Center by Arthur Schlesinger Jr. (1949)",
          "The Korean War (1950 - Limited, managed conflict consensus)",
          "Brown v. Board of Education (1954 - Judicial reset, followed by political gradualism)"
        ]
      },
      "1955": {
        "salience_share": 31.0,
        "description": "The cluster reached its **historical peak** (+1.5%). The Eisenhower administration's acceptance and management of the New Deal infrastructure (e.g., the Interstate Highway Act) proved that the pragmatic consensus transcended party lines. The catalyst was the successful management of prosperity, which made radical ideological alternatives seem unnecessary and reckless. Political truth was procedural, incremental, and stable, and the shared faith in 'centrism' was absolute, leaving extremism marginalized.",
        "key_manifestations": [
          "The Interstate Highway Act (1956 - Bipartisan, huge infrastructure project)",
          "The Censure of Joseph McCarthy (1954 - Institutional defense of consensus)",
          "The Organization Man (1956 - Conformity/Consensus as cultural ideal)",
          "JFK's Profiles in Courage (1956 - Valorizing procedural virtue)"
        ]
      },
      "1960": {
        "salience_share": 27.0,
        "description": "The decline began sharply (-4.0%). The catalyst was the collision of the Vietnam War and the moral urgency of the Civil Rights movement (Cluster 03, 07). New voices rejected the consensus as a mask for systemic injustice, arguing that 'gradualism' was cowardice. The epistemic standard shifted from 'what is politically feasible?' to 'what is morally right, *now*?' The consensus could not contain the rising energy of moral absolutism (Cluster 08) and rights claims, leading to fragmentation.",
        "key_manifestations": [
          "JFK's Inaugural Address (1961 - A last plea for duty/consensus)",
          "The Port Huron Statement (1962 - Critique of liberal institutions)",
          "Letter from Birmingham Jail (1963 - Critique of the white moderate's gradualism)",
          "Bay of Pigs failure (1961 - Shattering faith in expert consensus)"
        ]
      },
      "1965": {
        "salience_share": 21.0,
        "description": "The consensus shattered dramatically (-6.0%). The Vietnam War's 'credibility gap' was the displacing force, proving that the 'experts' who ran the consensus were either lying or dangerously wrong (Cluster 01 failure). Riots and political assassinations proved the system was unstable, not manageable. The pragmatic middle ground evaporated as both the New Left and the burgeoning New Right defined themselves by their absolute opposition to the 'establishment center.'",
        "key_manifestations": [
          "Civil Rights Act of 1964/Voting Rights Act of 1965 (Moral victories that fractured consensus)",
          "The Pentagon Papers (1971 - Retrospective blow to consensus)",
          "The rise of the Black Power movement (1966 - Rejecting integration)",
          "Richard Nixon's 'Law and Order' rhetoric (1968 - Attacking the liberal consensus)"
        ]
      },
      "1970": {
        "salience_share": 15.0,
        "description": "The cluster continued its downward spiral (-6.0%) due to Nixon\u2019s 'Southern Strategy,' which actively polarized the country by appealing to the populist affective epistemology (Cluster 02) of the white working class. The displacing force was the explicit *rejection* of the bipartisan tradition in favor of ideological, winner-take-all politics. Watergate further damaged the idea that institutional procedures and consensus norms could guarantee integrity, turning 'centrist' into a term synonymous with 'corrupt establishment figure.'",
        "key_manifestations": [
          "Nixon's 'Silent Majority' speech (1969)",
          "Watergate revelations (1972-74)",
          "The Culture of Narcissism (1979 - Diagnosis of individualism replacing consensus)",
          "All in the Family (1971 - Representing cultural war)"
        ]
      },
      "1975": {
        "salience_share": 12.0,
        "description": "A slow bleed (-3.0%) occurred as economic malaise (stagflation) proved the technocratic policies of the consensus center (Cluster 01) were ineffective. The displacing force was the rise of market-based epistemology (Cluster 05), which argued that government compromise was the source of economic stagnation. Jimmy Carter's attempt to govern via civic virtue and consensus failed, solidifying the public's desire for bold, ideological clarity over pragmatic muddling.",
        "key_manifestations": [
          "Carter's 'Crisis of Confidence' (Malaise) speech (1979 - Failure to restore consensus)",
          "Proposition 13 (1978 - Tax revolt against the consensus state)",
          "Network (1976 - Satire of media/corporate consensus)",
          "Airline Deregulation Act (1978 - Bipartisan rejection of New Deal consensus)"
        ]
      },
      "1980": {
        "salience_share": 10.0,
        "description": "The cluster experienced a further decline (-2.0%) as the Reagan Revolution formally declared the post-war consensus dead. The catalyst was the ideological clarity of the New Right (Cluster 05, 08), which attacked 'compromise' as the intellectual capitulation of liberalism. The political truth was now viewed as residing in firm principle, not negotiation. The 'Evil Empire' rhetoric further polarized foreign policy, leaving no room for the measured diplomacy of the center.",
        "key_manifestations": [
          "Reagan's First Inaugural Address (1981 - Attacking the consensus state)",
          "The Moral Majority's political organizing (1980s)",
          "Firing of PATCO strikers (1981 - Rejection of labor consensus)",
          "Tip O'Neill and Ronald Reagan's personal dynamic (Last vestiges of old-school compromise)"
        ]
      },
      "1985": {
        "salience_share": 8.5,
        "description": "Erosion continued (-1.5%). Consensus politics survived only in highly specific, transactional moments, such as the Tax Reform Act of 1986. The displacing force was the increasing professionalization of lobbying and media (Cluster 15), which prioritized high-stakes ideological battles over legislative compromise. The Democratic Leadership Council (DLC) emerged as an attempt to 'triangulate' and pragmatically revive the cluster, but it operated from a defensive position.",
        "key_manifestations": [
          "Tax Reform Act of 1986 (Rare bipartisan achievement)",
          "The Bonfire of the Vanities (1987 - Focus on private greed over public good)",
          "The rise of the Democratic Leadership Council (DLC) (1985)",
          "The Iran-Contra Affair (1986 - Exposing the failure of the consensus system)"
        ]
      },
      "1990": {
        "salience_share": 12.0,
        "description": "A significant but temporary surge (+3.5%) occurred with the end of the Cold War and the Gulf War. The catalyst was the brief moment of 'Unipolarity,' which restored bipartisan consensus on foreign policy and military action. Bill Clinton's 'Third Way' politics attempted to structurally revive the cluster by accepting the reality of the market while pursuing pragmatic social goals, marking the final high-water attempt to define a workable center.",
        "key_manifestations": [
          "The Gulf War (1990-91 - High consensus moment)",
          "Clinton's 'The Third Way' platform (1992)",
          "NAFTA signing (1993 - A major bipartisan/technocratic consensus)",
          "The Violence Against Women Act (1994)"
        ]
      },
      "1995": {
        "salience_share": 10.0,
        "description": "The consensus was immediately attacked and declined (-2.0%). The displacing force was the Gingrich 'Republican Revolution,' which actively weaponized political procedure (government shutdowns) to force ideological purity, elevating confrontation over negotiation. The impeachment of Bill Clinton cemented this shift, turning political disagreements into a zero-sum moral crusade, making the pragmatic process seem impossible to uphold against partisan zealotry.",
        "key_manifestations": [
          "The 1995-1996 Government Shutdowns",
          "The Contract with America (1994 - Ideological manifesto)",
          "The impeachment of Bill Clinton (1998)",
          "Bowling Alone (1995 - Diagnosing the loss of civic trust/consensus)"
        ]
      },
      "2000": {
        "salience_share": 7.5,
        "description": "The decline continued (-2.5%). The catalyst was the *Bush v. Gore* Supreme Court decision, which was interpreted by many as an elite, technocratic override of democratic messiness, further eroding faith in the fairness of the process. The 9/11 attacks briefly restored a sense of national unity (Cluster 04), but this consensus was quickly channeled into a hyper-ideological 'War on Terror' that defined dissent as treason, making pragmatic debate nearly impossible.",
        "key_manifestations": [
          "Bush v. Gore (2000)",
          "The War on Terror consensus (2001)",
          "The USA PATRIOT Act (2001 - Bipartisan rush to law)",
          "The Rise of Fox News and MSNBC (Segmenting the political reality)"
        ]
      },
      "2005": {
        "salience_share": 5.0,
        "description": "The cluster fell sharply (-2.5%). The displacing force was the visible failure of the Iraq War and Hurricane Katrina (Cluster 01 failure), which destroyed bipartisan trust and accountability. Hyper-partisanship became the dominant cultural mode, with politicians increasingly rewarded by their base for obstruction rather than cooperation. The affective epistemology of populist media (Cluster 02, 06) relentlessly demonized the 'other side,' making consensus a political liability.",
        "key_manifestations": [
          "The failure of Comprehensive Immigration Reform (2007)",
          "The rise of the Tea Party (2009 - Rejection of consensus)",
          "The 'Netroots' movement (Left-wing rejection of the liberal establishment)",
          "Dick Cheney's 'Unitary Executive' Theory"
        ]
      },
      "2010": {
        "salience_share": 3.0,
        "description": "Near-total collapse (-2.0%). The Affordable Care Act (2010) was the definitive failure of this cluster: passed by a purely partisan vote, it proved that the system could no longer achieve consensus on a major domestic issue. The displacing force was the rise of procedural nihilism; the use of the filibuster and legislative warfare (Cluster 02) meant that the machinery of compromise seized up entirely, making pragmatic centrism an impossible fantasy.",
        "key_manifestations": [
          "The Affordable Care Act passage (2010 - Pure partisan vote)",
          "The Debt Ceiling Crisis of 2011 (Weaponizing state procedure)",
          "Occupy Wall Street (2011 - Rejection of the center's competence)",
          "No by Christopher Caldwell (Critique of liberal consensus post-60s)"
        ]
      },
      "2015": {
        "salience_share": 2.0,
        "description": "Terminal decline (-1.0%). The rise of Donald Trump was the final nail, as his political success was explicitly predicated on rejecting institutional norms and attacking the 'corrupt consensus' of the establishment. The displacing force was the populist affective epistemology (Cluster 02), which viewed procedural compromise as 'Globalist' betrayal. The idea of a shared, moderate reality became a niche intellectual position rather than a viable political strategy.",
        "key_manifestations": [
          "Donald Trump's campaign rhetoric (2015-2016)",
          "The Flight 93 Election (2016 - Existential framing of politics)",
          "The death of the 'Gang of Eight' immigration reform effort",
          "The popularity of political satire that mocks both sides equally"
        ]
      },
      "2020": {
        "salience_share": 1.0,
        "description": "The cluster reached near-irrelevance (-1.0%). The pandemic and the January 6th events were fought as purely zero-sum battles. The displacing force was the utter segmentation of media (Cluster 12), which made a shared fact-set, necessary for consensus, impossible. The few remaining acts of bipartisanship (e.g., infrastructure bills) were framed by party leaders as strategic maneuvers rather than virtuous compromise, confirming the atrophy of the process's moral value.",
        "key_manifestations": [
          "The Infrastructure Investment and Jobs Act (2021 - Strategic, not virtuous, bipartisanship)",
          "The January 6th Capitol Attack (Violent rejection of procedure)",
          "The politicization of mask-wearing (No consensus on public health)",
          "The bipartisan House Select Committee on January 6th (2021-2022)"
        ]
      },
      "2025": {
        "salience_share": 0.8,
        "description": "Complete atrophy (-0.2%). The remaining variance is purely ceremonial, surviving in the language of civic holidays or political funerals. The displacing force is the final, total dominance of tribal, affective epistemology (Cluster 02, 06, 07). The pragmatic center is no longer a political option; it is an economic option for a small, wealthy, coastal elite who still believe in administrative managerialism (Cluster 01), but it has no mass cultural purchase.",
        "key_manifestations": [
          "The Semiquincentennial preparation debates (2025 - Debate over shared meaning)",
          "The continued rise of 'Network States' (2025 - Opting out of the civic consensus)",
          "AI-driven hyper-targeting of political ads (Destroying shared public space)",
          "The final rejection of the 'Super PAC' model by populist movements"
        ]
      }
    }
  },
  "10_muckraking_and_exposure_realism": {
    "name": "Muckraking and Exposure Realism",
    "description": "This cluster represents the epistemic standard that holds that objective truth is attainable through rigorous, fact-based investigation and the exposure of systemic corruption or hidden mechanisms of power. It is fundamentally an optimistic secular epistemology, believing that if the public is presented with verifiable facts, it will be morally compelled to support rational reform (Cluster 01, 09). It is often carried out by professional journalists, legal advocates, or later, digital whistleblowers. Its variance tracks the public's and institutions' willingness to accept uncomfortable, systemic facts over comforting narratives, peaking during periods of high moral outrage (Muckraking Era, Watergate) and declining when facts are viewed as partisan weapons (Populist Affective Epistemology, Cluster 02) or when the state suppresses dissent (WWI, Cold War).",
    "trajectory": {
      "1890": {
        "salience_share": 3.0,
        "description": "The cluster experienced a modest growth of +0.5% (from an 1885 estimate of 2.5%) as journalistic methods professionalized in response to the Gilded Age. The catalyst was the stark visibility of urban and industrial corruption, which required a factual response to the era's economic chaos. This period saw the transition from purely partisan newspaper coverage to 'objective' reporting, asserting that factual exposure was a public service. Jacob Riis's photographic documentation of poverty forced a moral confrontation with the reality of urban squalor, displacing the Protestant moral absolutism (Cluster 08) that blamed poverty on individual vice.",
        "key_manifestations": [
          "How the Other Half Lives by Jacob Riis (1890)",
          "The Appeal to Reason (Socialist paper, 1897-)",
          "McClure's Magazine (early investigative format)",
          "Yellow Journalism's focus on sensational, though often distorted, facts"
        ]
      },
      "1895": {
        "salience_share": 3.5,
        "description": "Variance continued to rise slightly (+0.5%). The continued economic hardship following the Panic of 1893 provided the grist for investigative reporting. The catalyst was the public's rejection of elite justifications for the economic collapse, compelling journalists to look beneath the surface. While Yellow Journalism (Hearst, Pulitzer) often sensationalized, it created the mass-circulation infrastructure\u2014the cheap, accessible medium\u2014that would soon be utilized by genuine muckrakers. This period solidified the notion that the press's primary duty was to expose the truth, even if it meant attacking powerful figures.",
        "key_manifestations": [
          "William Randolph Hearst's rise in newspaper circulation",
          "The Atlanta Compromise (1895 - Exposed by Du Bois later for ignoring facts of oppression)",
          "The Scofield Reference Bible (1909 - Counter-force: truth via scripture)",
          "Stephen Crane's Maggie: A Girl of the Streets (1893 - Literary exposure realism)"
        ]
      },
      "1900": {
        "salience_share": 6.0,
        "description": "The cluster accelerated dramatically (+2.5%) into its peak era. The catalyst was the decision by mass-circulation magazines, particularly McClure's and Munsey's, to invest heavily in long-form, systematic, and factual expos\u00e9s. The shift to a monthly magazine format allowed for the necessary depth and evidence to expose systemic, rather than isolated, corruption. This professionalized the epistemic standard: truth was now verifiable via footnotes and months of reporting. This movement fed directly into the Technocratic Meliorism cluster (Cluster 01) by providing the empirical case for regulation and reform, temporarily suppressing the Paranoid Style (Cluster 06) which saw only plots, not systems.",
        "key_manifestations": [
          "The History of the Standard Oil Company by Ida Tarbell (1902-1904)",
          "The Shame of the Cities by Lincoln Steffens (1904)",
          "McClure's Magazine (The leading platform for muckraking)",
          "The Octopus by Frank Norris (1901 - Fictional realism of railroad power)"
        ]
      },
      "1905": {
        "salience_share": 7.5,
        "description": "This point represents the absolute high-water mark (+1.5%) of the classic Muckraking Era. The catalyst was the public and political response to the expos\u00e9s, leading directly to landmark legislation. Upton Sinclair's The Jungle, while intending to promote socialism, resulted in the purely pragmatic regulatory fixes of the Pure Food and Drug Act and the Meat Inspection Act. The moral authority of the facts presented by journalists momentarily overshadowed that of politicians. The epistemic standard was clear: the published investigation was the highest form of political truth, displacing reliance on party loyalty or elite competence.",
        "key_manifestations": [
          "The Jungle by Upton Sinclair (1906)",
          "Frenzied Finance by Thomas W. Lawson (1905)",
          "Passage of the Pure Food and Drug Act (1906)",
          "Cosmopolitan Magazine's expos\u00e9s"
        ]
      },
      "1910": {
        "salience_share": 6.0,
        "description": "The cluster began a structural decline (-1.5%). The displacing force was the successful institutionalization of reform (Cluster 01) and 'Exposure Fatigue.' Once the public saw a problem, they expected technocrats to fix it, reducing the need for continuous public moral outrage. Furthermore, corporate interests fought back, buying the magazines and suing the journalists, making the work financially precarious. The focus shifted from the external exposure of industry to the internal management of the state, eroding the muckraker's role as the primary agent of change.",
        "key_manifestations": [
          "Collier's Weekly exposure of patent medicine fraud (Final great expos\u00e9s)",
          "The Principles of Scientific Management (1911 - Technocracy displaces exposure)",
          "The Mann Act (1910 - Shift to moral panic, not structural expos\u00e9)",
          "The establishment of the Federal Reserve (1913 - Complex, non-exposed fix)"
        ]
      },
      "1915": {
        "salience_share": 4.0,
        "description": "The decline steepened (-2.0%). The catalyst was the entry into World War I, which brought about censorship and national unity narratives (Cluster 04). Investigative journalism was reframed as unpatriotic or even treasonous. The displacing force was the Committee on Public Information (Creel Committee), which successfully sold a unified, state-sanctioned version of truth. The Espionage and Sedition Acts effectively criminalized exposure that contradicted the national interest, pushing realism and scrutiny back to the political margins.",
        "key_manifestations": [
          "Espionage Act of 1917 (Criminalizing exposure)",
          "The Creel Committee's propaganda campaigns (Suppression of realism)",
          "The Sacco and Vanzetti Case (Later manifestation of anti-radical fear)",
          "Four Minute Men (Local mouthpieces for state-sanctioned facts)"
        ]
      },
      "1920": {
        "salience_share": 3.0,
        "description": "The variance hit a post-war low (-1.0%). The 'Return to Normalcy' (Harding) was fundamentally anti-exposure; the public was tired of moral crusades and demanded privacy and consumerism (Cluster 18). The displacing force was the rise of public relations, pioneered by Edward Bernays, which actively managed and obfuscated corporate and political realities. Journalism retreated into superficial gossip and cultural critique, losing its systemic investigative bite. The Teapot Dome scandal was an exception, proving that the old corruption still existed, but its coverage lacked the reformist zeal of 1905.",
        "key_manifestations": [
          "Public Opinion by Walter Lippmann (1922 - Skepticism of the public's ability to handle facts)",
          "Babbitt by Sinclair Lewis (1922 - Satirizing conformity, not exposing corruption)",
          "Teapot Dome Scandal (1920s - Exposed later, not by mass muckraking)",
          "The rise of Edward Bernays and public relations"
        ]
      },
      "1925": {
        "salience_share": 2.5,
        "description": "The cluster found its cultural nadir (-0.5%), persisting only in literary forms. The displacing force was the unquestioning faith in Market-Based Epistemology (Cluster 05), which rendered critiques of finance irrelevant during the boom. Exposure realism was kept alive primarily by literary figures like Ernest Hemingway and F. Scott Fitzgerald, who exposed the hollowness and moral drift of the rich, focusing on character (Cluster 19) rather than systemic corruption. The only major political 'exposure' was the KKK's corruption, which only temporarily eroded its support.",
        "key_manifestations": [
          "The Great Gatsby (1925)",
          "The Sun Also Rises (1926)",
          "The Scopes Trial (1925 - Facts vs. Faith battle)",
          "Middletown by Robert and Helen Lynd (1929 - Sociological exposure of the average life)"
        ]
      },
      "1930": {
        "salience_share": 4.5,
        "description": "A significant and necessary rebound (+2.0%). The Great Depression was the catalyst, compelling a search for the facts behind the economic collapse. The Pecora Commission hearings became the primary manifestation, exposing the outright fraud and incompetence of Wall Street bankers, validating the muckraker's claim that systemic corruption existed. The displacing force of market confidence (Cluster 05) was destroyed, and the public demanded a factual accounting of the betrayal, briefly restoring the moral authority of the investigator.",
        "key_manifestations": [
          "Pecora Commission Hearings (1932-1934)",
          "Middletown in Transition (1937 - New data on the depression)",
          "Fortune Magazine (Rise of corporate journalism that often contained expos\u00e9s)",
          "Black Reconstruction in America (1935 - Historical exposure of systemic racism)"
        ]
      },
      "1935": {
        "salience_share": 5.0,
        "description": "Growth stabilized (+0.5%). The cluster\u2019s function was largely absorbed by the Technocratic Meliorism (Cluster 01) of the New Deal, which favored expert reports and data over sensational journalism. The displacing force was the institutionalization of reform; the SEC and NLRB were created, making the work of exposure the job of the government regulator, not the private journalist. The moralistic focus shifted to anti-fascism abroad, a clarity that reduced the need for complex domestic exposure.",
        "key_manifestations": [
          "The Grapes of Wrath (1939 - Literary exposure of migrant labor)",
          "Fortune's coverage of American business practice",
          "The Wagner Act (NLRB) (1935 - Legal redress for labor disputes)",
          "Federal Writers' Project (WPA - Documenting American life factually)"
        ]
      },
      "1940": {
        "salience_share": 3.0,
        "description": "The variance fell sharply (-2.0%) due to World War II. The external enemy required a unified national front, making internal exposure unpatriotic. The displacing force was the moral clarity of the war effort (Cluster 04), which necessitated the suppression of internal dissent or criticism of the government's management of the war. Journalists often became embedded propagandists, voluntarily subordinating factual independence to the national cause, pushing exposure back to the fringe.",
        "key_manifestations": [
          "The Office of War Information (OWI) (1942)",
          "Why We Fight film series (Propaganda)",
          "Executive Order 9066 (1942 - Failure of exposure to prevent internment)",
          "Lend-Lease Act debates (Focus on national necessity over factual detail)"
        ]
      },
      "1945": {
        "salience_share": 2.5,
        "description": "The cluster lingered at a low point (-0.5%). The post-war landscape, dominated by Cold War secrecy and the rise of the National Security State, actively suppressed exposure. The displacing force was the McCarthy-driven Paranoid Style (Cluster 06), which turned the focus of 'exposure' from uncovering systemic fraud to uncovering 'traitors' (people). The emphasis was on loyalty and secrecy rather than transparency, placing immense institutional pressure on journalists to conform to the official narrative of American righteousness.",
        "key_manifestations": [
          "The Atomic Energy Act (1946 - Codifying secrecy)",
          "George Kennan's 'Long Telegram' (1946 - The secret blueprint for containment)",
          "Taft-Hartley Act (1947 - Curbing labor's ability to expose corporate practices)",
          "The Lonely Crowd (1950 - Critique of post-war conformity)"
        ]
      },
      "1950": {
        "salience_share": 3.5,
        "description": "A slight, complicated rise (+1.0%) driven by McCarthyism. This was not a healthy rise for the cluster, but a parasitic one: Senator McCarthy utilized the form of exposure (the list, the hearing, the fact claim) to attack the political elite (Cluster 01). The catalyst was the 'Treason' narrative (Cluster 06), which elevated the pursuit of hidden individuals over systemic facts. This perversion of muckraking damaged the standard, but C. Wright Mills\u2019s sociological expos\u00e9 of the 'Power Elite' kept the true intellectual function of the cluster alive in academia.",
        "key_manifestations": [
          "McCarthy's Wheeling Speech (1950)",
          "The Power Elite by C. Wright Mills (1956 - Academic exposure)",
          "The Crucible (1953 - Allegory of false exposure)",
          "The Rosenbergs Trial (1951 - Legal exposure of alleged espionage)"
        ]
      },
      "1955": {
        "salience_share": 4.0,
        "description": "Slight growth (+0.5%) as the consensus began to crack. The displacing force of anti-communism softened after McCarthy's censure. The catalyst was the rise of public advocacy journalism, particularly the early work of John Kenneth Galbraith and later Ralph Nader. The moral conviction began to focus on market externalities (Cluster 05) that the consensus ignored, such as corporate power and suburban decay, laying the groundwork for the 1960s expos\u00e9s.",
        "key_manifestations": [
          "The Affluent Society by John Kenneth Galbraith (1958 - Economic exposure)",
          "The Organization Man (1956)",
          "The Censure of Joseph McCarthy (1954)",
          "Look Magazine's investigative pieces"
        ]
      },
      "1960": {
        "salience_share": 5.5,
        "description": "The cluster began a crucial revival (+1.5%). The catalyst was the emergence of the consumer protection movement, personified by Ralph Nader and his systematic, fact-based attack on the auto industry. His work validated the power of the non-institutional investigator against massive corporate power. Simultaneously, Rachel Carson's Silent Spring (1962) exposed the systemic environmental costs of chemical usage, successfully reframing a scientific issue as a moral and political failure requiring immediate exposure.",
        "key_manifestations": [
          "Unsafe at Any Speed by Ralph Nader (1965)",
          "Silent Spring by Rachel Carson (1962)",
          "The Other America by Michael Harrington (1962 - Exposure of poverty)",
          "The Autobiography of Malcolm X (1965 - Personal exposure of systemic racism)"
        ]
      },
      "1965": {
        "salience_share": 7.0,
        "description": "Growth continued (+1.5%) as the Vietnam War provided an irresistible target for scrutiny. The catalyst was the collapse of the military's official narrative, creating the 'Credibility Gap.' Investigative journalists began to reject official sources, using fieldwork and declassified documents to expose the factual reality of the war. This was the moment where the media began to view itself as an adversarial watchdog to the government, a moral duty driven by the discovery of facts that contradicted elite claims (Cluster 01, 09).",
        "key_manifestations": [
          "The New York Times' Vietnam coverage (Adversarial shift)",
          "Ramparts Magazine's CIA expos\u00e9s (1967)",
          "Kerner Commission Report (1968 - Official exposure of racial facts)",
          "My Lai Massacre reporting (1969)"
        ]
      },
      "1970": {
        "salience_share": 10.0,
        "description": "The cluster experienced a massive surge (+3.0%) driven by the emergence of the whistleblower. The catalyst was Daniel Ellsberg\u2019s leak of The Pentagon Papers (1971), which factually exposed the government's systematic deception regarding the Vietnam War. This validated the core epistemic claim: that the truth was hidden and required an act of moral sacrifice (whistleblowing) to expose it. The rise of investigative units within major newspapers also gave the cluster sustained, institutional legitimacy, setting the stage for Watergate.",
        "key_manifestations": [
          "The Pentagon Papers (1971)",
          "All the President's Men (Book) (1974 - Codifying the heroic journalist)",
          "The Parallax View (1974 - Conspiratorial mutation of the exposure need)",
          "The New York Times Co. v. United States (1971)"
        ]
      },
      "1975": {
        "salience_share": 12.0,
        "description": "The cluster hit its functional zenith (+2.0%). Watergate was the ultimate vindication of exposure realism; investigative journalism (Woodward and Bernstein) was proven to be the last check on executive power. The catalyst was the success of the process itself: the facts, once exposed, led inexorably to the resignation of a president. The Church Committee hearings followed, officially exposing decades of real CIA/FBI malfeasance (COINTELPRO), validating the 'Paranoid Style' (Cluster 06) as 'justified paranoia' and cementing the adversarial role of the press.",
        "key_manifestations": [
          "All the President's Men (Film) (1976)",
          "The Church Committee Reports (1975-1976)",
          "The New York Times' decision to publish the Pentagon Papers (retrospective impact)",
          "I.F. Stone's Weekly (Legacy of independent expos\u00e9)"
        ]
      },
      "1980": {
        "salience_share": 9.0,
        "description": "A structural decline began (-3.0%). The displacing force was the rise of the Reagan-era Market-Based Epistemology (Cluster 05) and the cultural critique of the 'Liberal Media' (Cluster 02, 06). Journalists were reframed by the populist right not as objective investigators, but as elitist saboteurs. The emphasis shifted from investigative journalism (expensive) to political punditry (cheap, profitable). The focus on 'Greed is Good' normalized financial aggression, reducing the moral outrage required for systemic expos\u00e9s.",
        "key_manifestations": [
          "CNN's transformation into a 24-hour news cycle (Prioritizing speed over depth)",
          "The rise of Rupert Murdoch's News Corp (Ideological media)",
          "Reagan's 'Evil Empire' speech (Shifting focus from internal to external failure)",
          "The Iran-Contra affair (1986 - Scandal that failed to destroy the executive)"
        ]
      },
      "1985": {
        "salience_share": 7.0,
        "description": "The decline continued (-2.0%). The displacing force was the normalization of political scandal and the increasing complexity of finance (Cluster 05), making expos\u00e9s less accessible to the public. Investigative resources at major news outlets were cut in favor of lifestyle and entertainment coverage. The cluster survived mainly in niche literary works (Tom Wolfe) that exposed the culture of greed, but without the direct expectation of legislative reform that characterized the 1905 and 1975 peaks.",
        "key_manifestations": [
          "Wall Street (1987)",
          "The Bonfire of the Vanities (1987)",
          "The Tower Commission Report (1987 - Official obfuscation of Iran-Contra)",
          "The Challenger Disaster (1986 - Exposure of institutional rot in NASA)"
        ]
      },
      "1990": {
        "salience_share": 6.0,
        "description": "Variance hit a modern low (-1.0%). The end of the Cold War and the triumph of globalism (Cluster 20) removed the clear ideological antagonist, leaving the press without a unified mission. The displacing force was the rise of partisan cable news and talk radio, which replaced factual investigation with ideological performance. The Gulf War was managed by 'pooled' media access, limiting exposure realism and reinforcing state control over the narrative.",
        "key_manifestations": [
          "JFK (Oliver Stone Film) (1991 - Paranoia replacing journalism)",
          "The Gulf War 'Pool' system (1990-91)",
          "Start of the impeachment process for Bill Clinton (Focus on personal, not systemic, failure)",
          "L.A. Riots/Rodney King Video (1992 - Citizen exposure via camcorder)"
        ]
      },
      "1995": {
        "salience_share": 8.0,
        "description": "A significant, structural rise (+2.0%). The catalyst was the Internet, which created new, un-gatekept channels for exposure. The Drudge Report and early online political blogs began to break news and expose stories the mainstream media was reluctant to touch (e.g., Monica Lewinsky). This marked the shift from institutional muckraking to distributed, digitally-enabled exposure, giving the public the tools to bypass the old media consensus. This new digital exposure, however, quickly became a tool for partisan warfare.",
        "key_manifestations": [
          "The Drudge Report (Viral breaks, e.g., Lewinsky 1998)",
          "Rolling Stone's exposure of the military (later, General McChrystal)",
          "Death of the journalist Gary Webb (Dark side of exposing the state)",
          "The Big One (Michael Moore Film) (1997 - Populist exposure)"
        ]
      },
      "2000": {
        "salience_share": 7.5,
        "description": "A slight retraction (-0.5%). The Enron and WorldCom scandals provided excellent opportunities for exposure realism, but the immediate post-9/11 'rally-round-the-flag' effect (Cluster 04) temporarily suppressed systematic scrutiny of the government. The displacing force was the focus on external security (Cluster 06/13). However, the war in Afghanistan and the debates around the Patriot Act kept a core of civil liberties-focused exposure alive, albeit in a constrained environment.",
        "key_manifestations": [
          "Enron Scandal reporting (2001)",
          "Sarbanes-Oxley Act (2002 - Legislative response to fraud exposure)",
          "The USA PATRIOT Act debates (2001)",
          "War Is a Racket by Smedley Butler (Re-readings in the post-9/11 context)"
        ]
      },
      "2005": {
        "salience_share": 9.0,
        "description": "Variance grew (+1.5%) as the Iraq War soured. The catalyst was the failure of the media to adequately question the WMD narrative pre-war, leading to a profound self-critique (internal exposure) and a renewed adversarial stance. The rise of the independent blogosphere and Daily Kos provided a counter-media capable of relentless fact-checking and expos\u00e9 work on the war's conduct (Cluster 02, left-wing). The exposure of the Abu Ghraib photos provided a visceral, moral shock that confirmed the worst fears about institutional conduct.",
        "key_manifestations": [
          "Abu Ghraib photos (2004)",
          "The Washington Post's investigation into Walter Reed (2007)",
          "The New Yorker's Seymour Hersh on the War on Terror",
          "Crashing the Gate by Armstrong & Moulitsas (2006 - Exposing the 'establishment')"
        ]
      },
      "2010": {
        "salience_share": 10.5,
        "description": "The cluster experienced a second, digital apex (+1.5%). The catalyst was the rise of global technical whistleblowing platforms, specifically WikiLeaks and later Edward Snowden. This period proved that the ultimate truth was in the data streams and classified files, not the official press conferences. The exposure of financial failures (Cluster 05) via the Big Short narrative further validated the concept of hidden truth. The moral authority of the 'leaker' became the defining feature of political truth, displacing the authority of the newspaper editor.",
        "key_manifestations": [
          "WikiLeaks release of the 'Cablegate' (2010)",
          "The Big Short by Michael Lewis (2010)",
          "Citizenfour (2014 - Documentary on Edward Snowden's leaks)",
          "The Panama Papers (2016 - Massive data leak exposure)"
        ]
      },
      "2015": {
        "salience_share": 8.5,
        "description": "A sharp, terminal decline began (-2.0%). The displacing force was the weaponization of exposure by Populist Affective Epistemology (Cluster 02). 'Exposure' became synonymous with 'leaks' and 'disinformation' (Cluster 06), destroying the moral authority of the fact. The Mueller Report and other high-profile investigations, despite presenting verifiable facts, failed to compel a shared public response, proving the collapse of the foundational belief that facts lead to reform. The public preferred the 'emotional truth' over the exposed documentation.",
        "key_manifestations": [
          "The Mueller Report (2019 - Exposed facts that failed to persuade)",
          "Cambridge Analytica scandal (2018 - Exposure of algorithmic manipulation)",
          "The #MeToo Movement (2017 - Exposure of personal conduct, not state/corporate system)",
          "BuzzFeed's publication of the Steele Dossier (Contentious exposure event)"
        ]
      },
      "2020": {
        "salience_share": 6.0,
        "description": "The cluster continued its decay (-2.5%). The catalyst was the pandemic, which saw fact-based reporting (Cluster 01) instantly polarized and dismissed by a large segment of the population as 'fake news' or state propaganda (Cluster 06). The displacement was complete: the purpose of the news was no longer to expose a shared, objective truth, but to affirm a tribal identity. The term 'investigative journalist' was replaced by 'activist' by the right and 'corporate shill' by the left, stripping the professional of their neutral epistemic standing.",
        "key_manifestations": [
          "The Final Report of the January 6th Committee (Expos\u00e9 that failed to change minds)",
          "Twitter Files (2022 - Exposure framed as partisan leak)",
          "Tucker Carlson's rhetoric against the mainstream press (2020-2023)",
          "The movie Spotlight's cultural relevance (2015 - Nostalgia for the peak)"
        ]
      },
      "2025": {
        "salience_share": 4.0,
        "description": "The cluster faces an existential crisis (-2.0%) as its core value\u2014the objective fact\u2014is undermined by generative AI. The displacing force is Algorithmic Truth Construction (Cluster 12) and the easy creation of synthetic media (deepfakes), which makes every expos\u00e9 immediately suspect. The investigator must now first prove that the evidence itself is real before discussing its meaning. The remnant of the cluster exists primarily in non-profit, highly specialized legal transparency organizations, having lost its power as a mass cultural force for reform.",
        "key_manifestations": [
          "Antitrust suits against AI Giants (Focus on platform exposure)",
          "The final retreat of most investigative teams from legacy newspapers",
          "The rise of 'Sovereign Citizen' style legal expos\u00e9s (Fringe interpretation of facts)",
          "The New Yorker's complex, fact-heavy AI coverage (High-end intellectual defense of facts)"
        ]
      }
    }
  },
  "12_algorithmic_truth_construction": {
    "name": "Algorithmic Truth Construction",
    "description": "This cluster tracks the shift in the ultimate arbiter of epistemic authority from human institutions (church, state, university) to **mathematical models and automated feedback loops**. It posits that truth is not found through reasoned debate, historical precedent, or even empirical exposure, but is **constructed** by algorithms that determine relevance, maximize engagement, and ultimately define a personalized reality for the user. Its trajectory is one of rapid emergence, driven by technological leaps (search, social media, AI), and its cultural impact is defined by the **loss of a shared epistemic commons** and the radical amplification of affective, polarized content (Cluster 02, 06). Its variance is constrained in the early periods and explodes in the late 20th and early 21st centuries.",
    "trajectory": {
      "1890": {
        "salience_share": 0.1,
        "description": "The cluster exists at a pre-history floor, representing only the rudimentary, mechanical-philosophical concepts of automated calculation. The initial catalyst was the burgeoning **Statistical Movement**, which aimed to quantify human behavior, and the introduction of early calculating machines (Hollerith's tabulator). This was the first attempt to separate 'data' from 'human interpretation.' However, the immediate epistemic authority lay entirely with human compilers and interpreters (Cluster 01, Technocracy), not the machine itself, which was simply a tool.",
        "key_manifestations": [
          "Herman Hollerith's Tabulating Machine (Used for 1890 Census)",
          "The Rise of Statistical Societies (Quantification of life)",
          "Early attempts at scientific advertising (Pre-algorithmic persuasion)",
          "How the Other Half Lives (1890 - Human, not algorithmic, data presentation)"
        ]
      },
      "1895": {
        "salience_share": 0.1,
        "description": "Stasis (0.0% $\\Delta v$). The core focus of American culture was still on moral and economic conflict (Cluster 02, 08). The displacing force was the dominant Muckraking and Exposure Realism (Cluster 10), which believed that truth was revealed through personal investigation and narrative, not automated counting. The machine was distrusted as a cold, bureaucratic force. Epistemically, the belief in human agency and free will trumped any notion of mathematically determined outcomes.",
        "key_manifestations": [
          "Frederick Winslow Taylor's early work on time studies (Proto-algorithmic efficiency)",
          "The development of punched card systems",
          "Plessy v. Ferguson (1896 - Law as subjective human interpretation)",
          "The introduction of standardized testing in schools (Early quantification)"
        ]
      },
      "1900": {
        "salience_share": 0.2,
        "description": "A minor increase of $+0.1\\%$ as the concept of **Systemic Efficiency** (Cluster 01) matured. The catalyst was the widespread adoption of 'scientific management' (Taylorism), which sought to apply a proto-algorithmic logic to the factory floor. The moral goal was to eliminate human inefficiency through rational, repeatable steps. This was not a fully independent algorithmic truth, but rather a human-designed sequence of actions with the moral authority of mathematics, setting the cultural precedent for trusting calculated systems.",
        "key_manifestations": [
          "The Principles of Scientific Management (1911 - Blueprint for systemic efficiency)",
          "Henry Ford's early assembly line experiments (Rationalizing production)",
          "Insurance industry mortality tables (Early predictive modeling)",
          "The Panic of 1907 (Market chaos defying calculation)"
        ]
      },
      "1905": {
        "salience_share": 0.3,
        "description": "Incremental growth of $+0.1\\%$. The displacing force remained the political and social urgency of the Progressive Era, which prioritized political change over systemic automation. However, the rise of modern advertising began to lay the psychological groundwork for this cluster. Advertising sought to **construct demand** using early psychological profiling, suggesting that human choice could be manipulated by predictable inputs\u2014a key premise of all future algorithmic platforms.",
        "key_manifestations": [
          "The rise of Madison Avenue advertising agencies",
          "Hull House's data-driven sociological surveys",
          "The American Railway Association (Standardizing national systems)",
          "Frank and Lillian Gilbreth's motion studies"
        ]
      },
      "1910": {
        "salience_share": 0.4,
        "description": "Minor growth of $+0.1\\%$. The catalyst was the burgeoning field of **Econometrics** and the institutionalization of statistical thinking (Cluster 01). The belief that complex social systems could be modeled, tracked, and predicted (e.g., business cycles) was central to the Progressive vision. The creation of the Federal Reserve (1913) was based on the belief that a central body, informed by data, could manage the economy\u2014a technocratic belief system that provided the necessary public trust in mathematical authority.",
        "key_manifestations": [
          "The Federal Reserve Act (1913 - Managed economic system)",
          "The rise of the Actuarial Profession",
          "Walter Lippmann's early work on public opinion measurement",
          "The Promise of American Life (1909 - Blueprint for rational management)"
        ]
      },
      "1915": {
        "salience_share": 0.7,
        "description": "A noticeable jump of $+0.3\\%$ occurred with World War I. The catalyst was the massive, non-market demand for **centralized allocation and efficiency** (Cluster 01, 04). The War Industries Board relied on massive statistical tables and complex resource allocation models to manage the economy, proving that a purely calculated, non-ideological system could achieve supreme efficiency. The concept of 'Operations Research' (though formalized later) had its practical beginnings here, lending immense moral and epistemic authority to complex, calculated solutions.",
        "key_manifestations": [
          "The War Industries Board's management systems",
          "The Committee on Public Information's mass communication (Proto-viral narrative management)",
          "The concept of 'Four Minute Men' (Scalable information delivery)",
          "Logistics and supply chain optimization"
        ]
      },
      "1920": {
        "salience_share": 1.0,
        "description": "The cluster crossed an arbitrary threshold of cultural visibility (+0.3%). The displacing force was the 'Return to Normalcy' (Cluster 09), but the underlying infrastructure remained. The catalyst was the rapid professionalization of **market research and consumer psychology**. The belief that algorithms (even rudimentary ones based on surveys) could predict and guide consumer behavior became central to the economy (Cluster 05). Advertising was now explicitly about constructing a desired reality for the mass market, a precursor to today's personalized feeds.",
        "key_manifestations": [
          "The rise of radio and audience metrics (Quantifying attention)",
          "The Man Nobody Knows (1925 - Marketing as salvation)",
          "Middletown (1929 - Sociological attempt to quantify community)",
          "The development of the first analog computers (Vannevar Bush's work)"
        ]
      },
      "1925": {
        "salience_share": 1.5,
        "description": "Growth continued (+0.5%) fueled by the faith in **economic forecasting** (Cluster 05). The catalyst was the pervasive belief during the 'New Era' that the business cycle was conquered by rational management and statistical models. The stock market, a massive, live calculation of collective belief, became the central source of truth. The rise of polling (early Gallup) signaled the start of quantifying 'public opinion'\u2014the belief that the will of the people could be reduced to a number, making it calculable and predictable.",
        "key_manifestations": [
          "Early stock market forecasting models",
          "Walter Lippmann's critique of democratic opinion (The Phantom Public)",
          "The concept of the 'statistical average man'",
          "Early Hollywood's reliance on audience testing"
        ]
      },
      "1930": {
        "salience_share": 0.5,
        "description": "A major collapse (-1.0%) following the Great Depression. The displacing force was the catastrophic failure of all economic models and forecasts (Cluster 05). The market, the supreme calculator of truth, was proven to be irrational. Populism (Cluster 02) surged, rejecting the authority of all distant, cold calculations. Truth retreated to the realm of human suffering and empathy. The New Deal, while relying on technocrats (Cluster 01), emphasized 'bold, persistent experimentation,' not adherence to rigid, failed formulas.",
        "key_manifestations": [
          "The failure of economic forecasting pre-1929",
          "Middletown in Transition (1937 - Documenting social instability)",
          "Father Coughlin's emotional radio appeals (Anti-calculation rhetoric)",
          "The rise of John Maynard Keynes (New, human-driven economic theory)"
        ]
      },
      "1935": {
        "salience_share": 1.0,
        "description": "A recovery and re-legitimization (+0.5%). The catalyst was the New Deal's desperate need for verifiable statistics on poverty, unemployment, and recovery. The cluster's authority was *subordinated* to the state (Cluster 01), becoming the tool for social engineering rather than the arbiter of truth. The rise of George Gallup's scientific polling created the illusion that democracy could be quantified, leading to a focus on 'electability' as a statistically determined truth, a key algorithmic function.",
        "key_manifestations": [
          "George Gallup's scientific polling development (1935-)",
          "Keynesian demand management models (Quantitative macro-management)",
          "The Works Progress Administration (WPA) surveys",
          "The development of linear programming (Early optimization algorithm)"
        ]
      },
      "1940": {
        "salience_share": 1.8,
        "description": "The cluster experienced a rapid acceleration (+0.8%) due to World War II. The catalyst was the total dependence on **code-breaking, logistics, and ballistics**. The development of the first electronic computers (Colossus, ENIAC) to solve high-stakes, purely mathematical problems was a profound epistemic event. Truth was literally calculated at Bletchley Park and Los Alamos. The moral implication was clear: the fastest, most complex calculation could dictate the survival of nations.",
        "key_manifestations": [
          "The Bletchley Park code-breaking success (Ultra)",
          "The Manhattan Project's reliance on complex physics models",
          "The development of ENIAC (1945 - Electronic Numerical Integrator and Computer)",
          "Operations Research formalized in the military"
        ]
      },
      "1945": {
        "salience_share": 2.5,
        "description": "Growth continued (+0.7%) as the Cold War formalized the reliance on **statistical intelligence and game theory**. The catalyst was the nuclear standoff, which forced strategic decision-making to be based on purely mathematical, calculated probabilities (Cluster 01). John von Neumann and Norbert Wiener's work on cybernetics and information theory provided the intellectual blueprint for a world defined by control and feedback loops. The machine was now a partner in governance, not just a tool.",
        "key_manifestations": [
          "Cybernetics by Norbert Wiener (1948)",
          "Theory of Games and Economic Behavior by von Neumann and Morgenstern (1944)",
          "The rise of systems analysis in the DoD",
          "The Kinsey Reports (1948 - Quantifying sexual behavior)"
        ]
      },
      "1950": {
        "salience_share": 2.8,
        "description": "Growth stabilized (+0.3%). The cluster's authority was absorbed into the Technocratic Meliorism (Cluster 01) of the Cold War consensus. The displacing force was the cultural anxiety of the 'Organization Man' (Cluster 18), who felt dehumanized by the 'system.' However, the invention of the transistor and early mainframe computers quietly continued to institutionalize the calculated system in corporate America. The moral certainty of the American way of life was increasingly defined by its measured superiority in economic and technological metrics.",
        "key_manifestations": [
          "The development of the Transistor (1947/50s commercialization)",
          "The Organization Man (1956 - Anxiety about being a calculated input)",
          "Early IBM mainframe installations",
          "The rise of the RAND Corporation (Calculated strategy)"
        ]
      },
      "1955": {
        "salience_share": 3.0,
        "description": "Incremental growth (+0.2%). The Soviet launch of Sputnik (1957) was a massive catalyst, validating the fear that America's reliance on its scientific and mathematical 'algorithms' was lagging. This led to a national push for science and technology education, explicitly linking mathematical competence to national survival. The concept of the 'Black Box'\u2014a complex system that produces an answer that must be trusted, even if its workings are opaque\u2014began to gain cultural traction.",
        "key_manifestations": [
          "Sputnik launch (1957)",
          "The National Defense Education Act (1958)",
          "Early AI research (Dartmouth Workshop 1956)",
          "The rise of credit scoring (Quantifying financial risk)"
        ]
      },
      "1960": {
        "salience_share": 3.8,
        "description": "Acceleration (+0.8%) driven by the space race and the Department of Defense (DoD). The catalyst was the need for complex, real-time calculations to achieve the moon landing. The 'systems analyst' became the ultimate technocratic expert. The creation of ARPANET (1969), the precursor to the internet, provided the initial technological blueprint for decentralized algorithmic networks, a small, yet profound, epistemic shift toward connected machine intelligence.",
        "key_manifestations": [
          "ARPANET creation (1969)",
          "The Systems Analysis approach (McNamara's Pentagon)",
          "The Great Society's attempt to quantify and solve social problems (Policy as algorithm)",
          "The Apollo Program's reliance on computational models"
        ]
      },
      "1965": {
        "salience_share": 4.5,
        "description": "Continued growth (+0.7%). The displacing force of human-centric political ideology (Cluster 09) was weakened by the Vietnam War's 'credibility gap.' The catalyst was the military's reliance on **statistical metrics** (body counts, tonnage dropped) as 'truth,' which were exposed as lies or irrelevant by human reporters. This created a profound cultural crisis: the algorithm (metrics) was lying, but the system continued to rely on it, showing the danger of trusting the calculated truth over human experience.",
        "key_manifestations": [
          "The 'Body Count' metric controversy (Vietnam)",
          "The Whole Earth Catalog (1968 - Tech as tool for personal control)",
          "The rise of the personal computer movement (Pre-market)",
          "Project Camelot (1964 - Attempt to algorithmically predict revolution)"
        ]
      },
      "1970": {
        "salience_share": 5.2,
        "description": "Steady growth (+0.7%) despite the collapse of the liberal consensus. The catalyst was the emergence of the personal computer and the hacking culture, which asserted that *anyone* could access and understand the system's logic. This democratized the algorithmic vision, turning the 'system' from a government tool into a personal device. *Future Shock* (1970) documented the feeling that society was moving too fast to be governed by human reason, only by automated responses.",
        "key_manifestations": [
          "Future Shock by Alvin Toffler (1970)",
          "The founding of Homebrew Computer Club (1975)",
          "Introduction of the Intel 4004 (First microprocessor) (1971)",
          "The Parallax View (1974 - Conspiratorial control by a hidden system)"
        ]
      },
      "1975": {
        "salience_share": 5.8,
        "description": "Growth continued (+0.6%). The displacing force of centralized management (Cluster 01) was replaced by the individual's embrace of technology. The catalyst was the launch of the first marketable personal computers (Apple I, Commodore PET). This solidified the cultural shift: the machine was no longer a tool of the state but a tool of **personal information mastery**\u2014a literal 'algorithmic truth' generator on your desk. Deregulation (Cluster 05) also relied on the algorithmic belief that complex financial markets could be managed with superior models.",
        "key_manifestations": [
          "Apple I and Commodore PET launches (1977)",
          "Anarchy, State, and Utopia (1974 - The individual over the collective)",
          "The rise of video game culture (Rule-based, controlled reality)",
          "Early financial modeling (Black-Scholes 1973/increasing influence)"
        ]
      },
      "1980": {
        "salience_share": 6.5,
        "description": "Acceleration (+0.7%) driven by the technological leap from personal computers to network infrastructure. The catalyst was the mass marketing of the PC (IBM PC) and the rise of digital telecommunications. The concept of **information processing** became a dominant cultural metaphor for the mind and for society. The rhetoric of the Reagan era (Cluster 05) was 'algorithmic' in that it sought to replace bureaucratic rules with the clean, mathematically-derived rules of the market.",
        "key_manifestations": [
          "IBM PC launch (1981)",
          "Pac-Man (1980 - Rule-based digital world as entertainment)",
          "Neuromancer by William Gibson (1984 - Cultural blueprint for digital reality)",
          "The rise of spreadsheet software (VisiCalc, Lotus 1-2-3)"
        ]
      },
      "1985": {
        "salience_share": 7.8,
        "description": "A significant jump (+1.3%). The catalyst was the maturation of the 'Cyberspace' concept (Gibson) and the visualization of data. Financial markets became completely dependent on high-speed algorithmic trading (Cluster 05). The 'Black Box' was now managing billions of dollars, proving its supreme financial authority. The stock market crash of 1987 (Black Monday) was immediately blamed on **program trading**, a cultural event that made the algorithmic system's power undeniable, even if chaotic.",
        "key_manifestations": [
          "Black Monday (1987 - Algorithmic market failure)",
          "The launch of Microsoft Windows (1985 - Visualizing the digital space)",
          "The Iran-Contra affair (Hidden system operating outside of democratic code)",
          "The rise of the cellular phone (Networked identity)"
        ]
      },
      "1990": {
        "salience_share": 9.5,
        "description": "Explosive growth (+1.7%) driven by the collapse of the external ideological enemy. The catalyst was the public debut of the **World Wide Web** (1991) and the privatization of the internet backbone (1995). The algorithmic truth was rebranded as 'information democracy'\u2014the utopian belief that all truth would be revealed by linking all data. The 'New Economy' was a purely algorithmic narrative (Cluster 05), believing that network effects and data processing would conquer all physical scarcity.",
        "key_manifestations": [
          "Launch of the World Wide Web (1991)",
          "Wired Magazine launch (1993 - The 'algorithmic' cultural manifesto)",
          "The collapse of the Soviet Union (Empirical validation of US tech/data superiority)",
          "The Telecommunications Act of 1996"
        ]
      },
      "1995": {
        "salience_share": 12.0,
        "description": "Continued hyper-growth (+2.5%). The catalyst was the launch of Google (1998) and its revolutionary **PageRank algorithm**. Google essentially became the world's first widely adopted, non-human arbiter of truth: it told you *what was most important* (relevant). This solidified Algorithmic Truth Construction as a cultural hegemonic force, displacing the authority of the newspaper editor (Cluster 10) or the professor (Cluster 01). Truth was now a search result, a ranked, calculated output.",
        "key_manifestations": [
          "Google search engine launch (1998)",
          "Amazon's recommendation engine (1998 - Personalized algorithmic truth)",
          "The Matrix (1999 - Cultural paranoia about a calculated reality)",
          "The rise of AOL and personalized online interfaces"
        ]
      },
      "2000": {
        "salience_share": 13.5,
        "description": "The cluster continued its climb (+1.5%) despite the Dot-com bust. The catalyst was the post-9/11 security state's total reliance on **algorithmic surveillance and data mining**. The Patriot Act codified the belief that patterns in data (algorithmic truth) were superior to traditional human intelligence. This was the moment where the 'filter' of the algorithm became a matter of national security, legitimizing its role as a necessary guardian of truth and safety.",
        "key_manifestations": [
          "USA PATRIOT Act (2001)",
          "Minority Report (2002 - Pre-crime algorithmic fear)",
          "The Enron Scandal (Algorithmic accounting fraud)",
          "Amazon Web Services (2002 - Building the cloud infrastructure for algorithms)"
        ]
      },
      "2005": {
        "salience_share": 15.5,
        "description": "A major acceleration (+2.0%). The catalyst was the launch of **Facebook, YouTube, and the Web 2.0 era**. The algorithm moved from merely organizing data (Google) to actively **constructing social reality** (the News Feed). Truth became a function of **engagement metrics** (likes, shares, views), displacing traditional standards like peer review or professional editing. The algorithmic feedback loop amplified affective content (Cluster 02, 06) and created the first true 'filter bubbles.'",
        "key_manifestations": [
          "Facebook News Feed launch (2006)",
          "The rise of YouTube and viral video (Algorithmic fame)",
          "The Long Tail by Chris Anderson (2006 - Algorithmic culture theory)",
          "The God Delusion (2006 - Viral success via digital platform)"
        ]
      },
      "2010": {
        "salience_share": 18.0,
        "description": "Continued intense growth (+2.5%). The catalyst was the full integration of **mobile technology and the quantified self**. Smartphones created constant data streams, making the algorithmic reality portable and inescapable. The discovery of **Cambridge Analytica** and targeted political advertising (Cluster 06) exposed the political utility of the algorithmic truth model, demonstrating that reality could be personalized and manipulated for electoral success. The machine was revealed as a political agent.",
        "key_manifestations": [
          "The Big Short (2010 - Complex algorithms managing financial risk)",
          "Cambridge Analytica's early data work (2014-)",
          "Edward Snowden's NSA revelations (2013 - Exposing surveillance algorithms)",
          "The iPhone's cultural dominance (2010s - Algorithmic life becomes personal)"
        ]
      },
      "2015": {
        "salience_share": 21.0,
        "description": "The cluster reached a new zenith (+3.0%). The catalyst was the 2016 election, where **algorithmic polarization** (Cluster 02, 06) became the dominant political force. The algorithm's optimization for engagement (outrage) actively selected for and amplified extreme content, accelerating the collapse of shared epistemic standards. The 'Deep State' (Cluster 06) conspiracy theory was ironically fueled by the very algorithms designed to predict human behavior, proving the machine's immense power to construct belief, regardless of facts.",
        "key_manifestations": [
          "The Cambridge Analytica Scandal (2018 - Public exposure of algorithmic power)",
          "Donald Trump's use of Twitter (Algorithmic bypass of gatekeepers)",
          "Black Mirror (TV Series - Satire of algorithmic social control)",
          "Weapons of Math Destruction by Cathy O'Neil (2016 - Critique of algorithmic bias)"
        ]
      },
      "2020": {
        "salience_share": 26.0,
        "description": "The cluster reached its **Historical Peak** (+5.0%). The catalyst was the pandemic (COVID-19), which forced nearly all social interaction, commerce, and information into algorithmic platforms. This created a new cultural dependency and a total loss of the shared public square. Algorithmic sorting (e.g., vaccine misinformation, election fraud narratives) proved capable of creating **parallel realities** (Cluster 02, 06), shattering the consensus on public health and political procedure. Generative AI (GPT-3, Midjourney) emerged, creating the ultimate algorithmic truth: calculated, synthetic reality.",
        "key_manifestations": [
          "GPT-3/Large Language Models launch (2020 - Synthetic truth creation)",
          "The Plandemic viral video (Algorithmic amplification of misinformation)",
          "The January 6th Capitol Attack (Kinetic realization of an algorithmic reality)",
          "Zuckerberg's shift to the Metaverse (A completely calculated reality)"
        ]
      },
      "2025": {
        "salience_share": 29.5,
        "description": "Continued acceleration (+3.5%) into the era of **Total Synthetic Reality**. The displacing force is the collapse of human-authored content on the internet ('Dead Internet Theory'). The catalyst is the mass adoption of generative AI into every layer of communication (news, art, political messaging). Algorithmic truth is no longer just sorting reality; it is **creating reality**. The moral and political fight shifts to regulating the code itself, as the algorithm's output becomes epistemically privileged over human experience. The human search for truth is replaced by the calculated certainty of the machine.",
        "key_manifestations": [
          "The launch of major multimodal AI models (2024-2025)",
          "The rise of AI-generated hyper-partisan media content",
          "The Coming Wave by Mustafa Suleyman (2023 - Warning about algorithmic power)",
          "The final segmentation of the internet into personalized, calculated feeds"
        ]
      }
    }
  },
  "13_isolationist_exceptionalism": {
    "name": "Isolationist Exceptionalism",
    "description": "This cluster is the belief that the United States is fundamentally unique (exceptional) and that its moral, political, and economic health is best preserved by minimizing foreign entanglements\u2014avoiding 'foreign wars,' rejecting binding international treaties, and maintaining protectionist trade policies. It defines political truth as residing within the nation's borders, viewing external influence as inherently corrupting. Morally, it holds that America\u2019s duty is to perfect itself domestically, not to save the world. Its trajectory is volatile, peaking in rejection of foreign conflicts and collapsing when external threats become undeniable.",
    "trajectory": {
      "1890": {
        "salience_share": 2.5,
        "description": "The cluster operated at a stable baseline, reflecting the dominant post-Civil War focus on Reconstruction, industrialization, and westward expansion. The $\\Delta v$ of $+0.2\\%$ from the previous interval was primarily a friction-based increase against the nascent, elite-driven imperialist agenda. The catalyst for stasis was the enduring rhetorical legacy of George Washington's Farewell Address, which provided the high-cultural justification for non-entanglement. This period saw Isolationist Exceptionalism expressed as a moral duty to perfect the domestic economic system, rather than an aggressive foreign policy stance.",
        "key_manifestations": [
          "Populist Party's focus on domestic economic reform (anti-global finance)",
          "The Lodge Bill failure (1890 - Rejection of federal intervention, domestic focus)",
          "The Panic of 1893 (Blaming foreign speculators for US woes)",
          "McKinley's initial anti-annexation stance toward Hawaii"
        ]
      },
      "1895": {
        "salience_share": 4.0,
        "description": "A significant surge of $+1.5\\%$ was fueled by the deep economic and moral anxiety of the mid-1890s depression. The catalyst was William Jennings Bryan's rhetoric, which successfully fused isolationism with Populist affective epistemology (Cluster 02). He framed the Gold Standard as a foreign plot and American prosperity as dependent on internal, sovereign policies (Free Silver). The displacing force was the nascent imperialist lobby, which argued that foreign markets were essential to save the domestic economy, but this view was rejected by a powerful, aggrieved rural coalition.",
        "key_manifestations": [
          "William Jennings Bryan's 'Cross of Gold' Speech (1896)",
          "The rise of the American Anti-Imperialist League rhetoric (Pre-1898)",
          "Coin's Financial School (1894 - Anti-banker, domestic-focused conspiracy)",
          "Grover Cleveland's use of the gold reserve to protect 'American' finance"
        ]
      },
      "1900": {
        "salience_share": 2.8,
        "description": "A sharp contraction of $-1.2\\%$ occurred following the Spanish-American War. The war acted as the catalyst for decline, as the quick, decisive victory and acquisition of foreign territories (Philippines, Puerto Rico) shifted the national focus toward global power. The displacing force was Theodore Roosevelt's 'Strenuous Life' and Progressive ideology (Cluster 01), which argued that global engagement was necessary for national vigor and managerial competence. The moral imperative of 'manifest destiny' temporarily overtook the moral imperative of domestic perfection, recasting global action as a duty rather than a distraction.",
        "key_manifestations": [
          "Theodore Roosevelt's 'The Strenuous Life' (1900)",
          "The Insular Cases (1901 - Constitution does not follow the flag)",
          "The American Anti-Imperialist League platform (Fading voice)",
          "The Open Door Policy (Global trade engagement)"
        ]
      },
      "1905": {
        "salience_share": 2.0,
        "description": "The cluster continued to decline, losing $-0.8\\%$, reaching a Progressive Era low. The displacing force was the dominant Technocratic Meliorism (Cluster 01), which viewed international relations as a problem of management, not morality. American interventionism, such as the Roosevelt Corollary (1904), was framed as a pragmatic, necessary policy to maintain global order, which was antithetical to true isolationism. The focus on domestic regulation (Muckraking, Cluster 10) was an internal purification, but not a rejection of the outside world, which was seen as a source of problems that American expertise could solve.",
        "key_manifestations": [
          "The Roosevelt Corollary to the Monroe Doctrine (1904)",
          "The Panama Canal construction (Global engagement project)",
          "The Algeciras Conference (1906 - US involvement in European affairs)",
          "The Jungle (1906 - Exposure of domestic, not foreign, failure)"
        ]
      },
      "1910": {
        "salience_share": 2.5,
        "description": "A slight increase of $+0.5\\%$ occurred as a friction-based reaction to deepening European rivalries and 'Dollar Diplomacy.' The catalyst was the perception that the US was being pulled into morally dubious foreign financial entanglements. The debate over the Federal Reserve (1913) was often framed in isolationist terms, opposing the creation of a 'European-style' central bank. The moral argument for isolationism found temporary purchase as an antidote to the perceived corruption of international finance and state-driven imperialism.",
        "key_manifestations": [
          "Dollar Diplomacy in Central America",
          "The IWW's anti-war sentiment (Non-nationalist isolationism)",
          "The debates over the Federal Reserve Act (1913)",
          "The Mann Act (1910 - Domestic moral panic over foreign vice)"
        ]
      },
      "1915": {
        "salience_share": 5.0,
        "description": "A major surge of $+2.5\\%$ was driven by the outbreak of World War I. The catalyst was the clear and present danger of a European conflict, which provided a stark contrast to American peace and prosperity. The 'America First' movement emerged, successfully framing intervention as a betrayal of national exceptionalism. The moral argument was overwhelming: America could only remain a beacon of virtue (Cluster 08) by keeping its distance from the 'corrupt old world.' The displacing force of Wilson's moral universalism was contained by the populace's fear of entanglement.",
        "key_manifestations": [
          "The 'He Kept Us Out of War' Slogan (1916)",
          "The sinking of the Lusitania (Catalyst for intervention, but initial reaction was isolationist)",
          "The 'America First' sentiment in the Midwest and West",
          "The National Defense Act of 1916 (Preparing defensively, not offensively)"
        ]
      },
      "1920": {
        "salience_share": 8.5,
        "description": "The cluster reached its **inter-war peak** with a sharp acceleration of $+3.5\\%$. The catalyst was the rejection of the Treaty of Versailles and the League of Nations. Wilson's universalist vision (Cluster 03) was soundly defeated by the popular desire for a 'Return to Normalcy' (Harding). This was the supreme cultural moment of Isolationist Exceptionalism: America had saved the world, but it would not commit to running it. The moral imperative was to focus on domestic economic expansion and cultural purity, using high tariffs (Cluster 05) to keep foreign economic influence out.",
        "key_manifestations": [
          "The U.S. Senate's rejection of the Treaty of Versailles/League of Nations (1920)",
          "Harding's 'Return to Normalcy' (1920)",
          "The Emergency Quota Act (1921 - Isolationism via immigration restriction)",
          "The Fordney-McCumber Tariff Act (1922 - Economic protectionism)"
        ]
      },
      "1925": {
        "salience_share": 7.0,
        "description": "Variance stabilized at a high, entrenched level, contracting slightly by $-1.5\\%$. The displacing force was the booming consumer economy (Cluster 05, 18), which created an internal cultural focus so strong that foreign events felt distant and irrelevant. The cluster's continued high level was maintained by a political consensus for protectionism and an anti-war sentiment that treated the past conflict as a moral error. The idea that America was culturally and financially superior to the rest of the world was unchallenged, reinforcing the exceptionalist core of the cluster.",
        "key_manifestations": [
          "Calvin Coolidge's minimalist foreign policy",
          "The Scopes Trial (1925 - Domestic cultural focus)",
          "The Dawes Plan (US financial involvement, but framed as temporary solution)",
          "The Great Gatsby (1925 - Focused entirely on American moral decay)"
        ]
      },
      "1930": {
        "salience_share": 6.0,
        "description": "A modest contraction of $-1.0\\%$ occurred as the Great Depression forced the country to acknowledge the global nature of economic collapse. The displacing force was the visible failure of the Smoot-Hawley Tariff to protect the domestic market (Cluster 05 failure), proving that economic isolation was impossible. However, the dominant political rhetoric (Cluster 02, 04) maintained an emotional isolationism, arguing that the crisis was caused by *international* finance, not domestic policy, making a new round of foreign war unthinkable.",
        "key_manifestations": [
          "Smoot-Hawley Tariff Act (1930 - Failed economic isolation)",
          "The Bonus Army March (1932 - Domestic crisis focus)",
          "FDR's early New Deal focus on domestic recovery (The first 100 days)",
          "The Man Nobody Knows (1925 - Religious exceptionalism)"
        ]
      },
      "1935": {
        "salience_share": 9.0,
        "description": "The cluster surged to its **highest inter-war level** with a strong increase of $+3.0\\%$. The catalyst was the rising threat of fascism and communism abroad, which triggered a complete retreat into defensive isolationism. The Neutrality Acts (1935-37) were the core legislative manifestation, explicitly forbidding the President from assisting warring nations. The moral imperative was clear: save American democracy by insulating it from the ideological contamination of Europe. The political consensus (Cluster 09) was overwhelming in its desire to avoid another WWI.",
        "key_manifestations": [
          "The Neutrality Acts of 1935, 1936, and 1937",
          "America First Committee founding (1940 - Building on this sentiment)",
          "It Can't Happen Here (1935 - Domestic threat of fascism, not foreign)",
          "The Nye Committee's 'Merchants of Death' investigation (1934-36)"
        ]
      },
      "1940": {
        "salience_share": 1.5,
        "description": "The cluster experienced a catastrophic collapse of $-7.5\\%$\u2014the largest single interval drop. The catalyst was the Japanese attack on Pearl Harbor, which instantly vaporized the foundational premise of isolationism: that distance could guarantee safety. The displacing force was the existential threat of WWII, which compelled a total, non-ironic national unity (Cluster 04) and globalist commitment. The moral imperative shifted overnight from 'do not get involved' to 'save democracy,' making isolationism politically toxic.",
        "key_manifestations": [
          "Pearl Harbor attack (1941)",
          "The Lend-Lease Act (1941 - Economic universalism)",
          "The dissolution of the America First Committee (1941)",
          "FDR's Four Freedoms Speech (1941 - Global moral commitment)"
        ]
      },
      "1945": {
        "salience_share": 1.0,
        "description": "The cluster reached its **historical nadir** (-0.5%). The displacing force was the creation of the post-war global order\u2014the UN, NATO, and Bretton Woods (Cluster 20). The success of the war, and the subsequent need to manage the Soviet Union, created a new, unquestioned consensus around Globalist Interdependence (Cluster 20) and Technocratic Meliorism (Cluster 01). Isolationism was relegated to a marginal, intellectually discredited position, often associated with fringe anti-Semitic or proto-conspiratorial groups (Cluster 06) who claimed the UN was a plot.",
        "key_manifestations": [
          "The creation of the United Nations (1945)",
          "The Marshall Plan (1948 - Global economic engagement)",
          "The Truman Doctrine (1947)",
          "Atomic Energy Act (1946 - Global scientific consequence)"
        ]
      },
      "1950": {
        "salience_share": 1.5,
        "description": "A very slight, friction-based rise of $+0.5\\%$ occurred as a reaction to the Korean War. The catalyst was the perception that the US was being pulled into 'foreign entanglements' by the UN and technocrats. This allowed the Paranoid Style (Cluster 06) to fuse with isolationist sentiment\u2014the idea that the foreign service elites were 'losing' wars for political reasons. However, the overall consensus for the Cold War's global containment strategy (Cluster 09) kept this sentiment firmly marginalized.",
        "key_manifestations": [
          "McCarthy's anti-State Department rhetoric (Internal, not external, focus)",
          "The Korean War (1950-53)",
          "NSC-68 (Global strategy document)",
          "The Lonely Crowd (1950 - Critique of American conformity, an internal focus)"
        ]
      },
      "1955": {
        "salience_share": 1.2,
        "description": "Variance declined slightly by $-0.3\\%$. The displacing force was the dominant suburban conformity (Cluster 18) and the unchallenged authority of the 'Vital Center' consensus (Cluster 09). The national focus was on consuming the fruits of global victory and managing the Cold War with complex, calculated strategies (Cluster 01) rather than simplistic withdrawal. The moral argument for isolationism was silenced by the overwhelming rhetoric of American Exceptionalism as the 'leader of the free world.'",
        "key_manifestations": [
          "The Interstate Highway Act (1956 - Massive domestic project)",
          "Suez Crisis (1956 - US involvement in global affairs)",
          "The Organization Man (1956)",
          "Profiles in Courage (1956 - JFK's call for active leadership)"
        ]
      },
      "1960": {
        "salience_share": 2.0,
        "description": "A modest resurgence of $+0.8\\%$ was triggered by two events: the election of JFK (who represented universalist interventionism) and Eisenhower's Farewell Address. Eisenhower's warning against the 'military-industrial complex' was the catalyst, providing a powerful, non-partisan, high-authority rationale for an internal focus and a suspicion of foreign-led institutional entanglement. This created a new strain of isolationism, rooting it in suspicion of domestic institutions, rather than just fear of foreign lands.",
        "key_manifestations": [
          "Eisenhower's Farewell Address (1961)",
          "Port Huron Statement (1962 - New Left critique of Cold War policy)",
          "The Peace Corps (1961 - Soft interventionism)",
          "The Bay of Pigs failure (1961 - Exposing the danger of foreign adventures)"
        ]
      },
      "1965": {
        "salience_share": 4.0,
        "description": "The cluster saw a significant increase of $+2.0\\%$. The catalyst was the escalation of the Vietnam War. This period birthed a powerful **Left-wing Isolationism**, which defined the war as a moral corruption of American values (Cluster 04) and demanded immediate, total withdrawal. The displacing force of the bipartisan Cold War consensus (Cluster 09) was destroyed. Isolationism was reframed not as a conservative desire to avoid taxes, but as a moral, anti-imperialist imperative to save America's soul from its own military-industrial complex.",
        "key_manifestations": [
          "Draft Card Burnings (1965-)",
          "Dr. Spock's anti-war activism (Moral isolationism)",
          "The Pentagon Papers (1971 - Retrospective validation of suspicion)",
          "Jimi Hendrix's anti-military music"
        ]
      },
      "1970": {
        "salience_share": 3.5,
        "description": "Variance contracted slightly by $-0.5\\%$ as Nixon's policy of 'Vietnamization' and D\u00e9tente offered a pragmatic, managed withdrawal from global over-extension. The displacing force was a government that *acted* isolationist without adopting the ideology. The cluster remained culturally high due to the exposure of the Church Committee (Cluster 10), which confirmed that foreign entanglement had corrupted domestic intelligence agencies (Cluster 06), lending credence to the idea that 'America First' meant 'Fix America.'",
        "key_manifestations": [
          "Nixon's 'Vietnamization' policy",
          "The Parallax View (1974 - Conspiratorial isolationism)",
          "The Pentagon Papers (1971)",
          "The Church Committee Hearings (1975-76 - Anti-CIA domestic focus)"
        ]
      },
      "1975": {
        "salience_share": 2.5,
        "description": "The cluster declined by $-1.0\\%$. The displacing force was Jimmy Carter\u2019s renewed focus on **Universal Human Rights** (Cluster 03) as the basis of foreign policy, reintroducing a moral imperative for global intervention. The failure to contain inflation (Cluster 01, 05 failure) also focused public attention on domestic economic survival. Isolationism became associated with the failed war, while the political center (Cluster 09) struggled to define a post-Vietnam role that avoided both entanglement and total withdrawal.",
        "key_manifestations": [
          "Carter's Human Rights Foreign Policy (1977-)",
          "The Panama Canal Treaties debates (1977)",
          "Proposition 13 (1978 - Domestic tax revolt)",
          "Network (1976 - Focus on corporate, not foreign, villainy)"
        ]
      },
      "1980": {
        "salience_share": 3.0,
        "description": "A modest increase of $+0.5\\%$ occurred under Ronald Reagan. The catalyst was Reagan's rhetoric of 'Morning in America' and the focus on domestic economic rebuilding (Cluster 05), which had an inherently exceptionalist, inward-looking tone. The displacing force of the Iranian Hostage Crisis and the Soviet invasion of Afghanistan required a massive external focus, but the popular mood still favored avoiding quagmires and rebuilding the domestic military base over activist interventionism.",
        "key_manifestations": [
          "Reagan's 'Morning in America' rhetoric (1984)",
          "The Iran Hostage Crisis aftermath (Domestic focus)",
          "Reagan's focus on the 'Evil Empire' (External, clear enemy)",
          "The rise of the trade deficit debate (Economic isolationism)"
        ]
      },
      "1985": {
        "salience_share": 2.0,
        "description": "The cluster declined by $-1.0\\%$ as the Cold War escalated. The displacing force was the massive growth of globalist corporate managerialism (Cluster 15) and military spending. The Iran-Contra affair, a genuine shadow-government entanglement, failed to ignite mass isolationist outrage, proving the cluster's lack of cultural salience. The political landscape was dominated by the belief that the US had to win the Cold War, which made withdrawal unthinkable.",
        "key_manifestations": [
          "The Strategic Defense Initiative ('Star Wars') (1983 - Global military project)",
          "The Bonfire of the Vanities (1987 - Focus on domestic greed)",
          "The Tower Commission Report on Iran-Contra (1987)",
          "Black Monday (1987 - Global financial interconnectedness)"
        ]
      },
      "1990": {
        "salience_share": 1.5,
        "description": "The cluster reached its **modern nadir** (-0.5%). The catalyst was the collapse of the Soviet Union (Cluster 20) and the brief, highly successful Gulf War, which ushered in the 'New World Order' consensus. Isolationism was deemed obsolete. The displacing force was the triumph of Globalist Interdependence (Cluster 20) and the belief that the US was the 'sole superpower' with a moral and practical duty to manage the world. The debate shifted from *if* to *how* to engage globally.",
        "key_manifestations": [
          "George H.W. Bush's 'New World Order' Speech (1990)",
          "The Gulf War (1990-91)",
          "NAFTA debates (1992-1993 - Economic universalism)",
          "The End of History and the Last Man (1992)"
        ]
      },
      "1995": {
        "salience_share": 3.0,
        "description": "A significant resurgence of $+1.5\\%$ was driven by the backlash against NAFTA and globalization. The catalyst was Ross Perot\u2019s populist campaign, which successfully channeled anxieties about job loss ('giant sucking sound') into an economic isolationist narrative. Pat Buchanan further solidified this, framing trade agreements as a cultural and moral betrayal by globalist elites (Cluster 02). Isolationism was no longer just about avoiding war; it was about protecting the American worker and national sovereignty from corporate managerialism (Cluster 15).",
        "key_manifestations": [
          "Ross Perot's 1992 Presidential Campaign (Peak anti-NAFTA rhetoric)",
          "Pat Buchanan's 'Culture War' Speech (1992)",
          "The Oklahoma City Bombing (1995 - Fringed version of anti-government isolationism)",
          "The rise of anti-WTO protests (Later in interval, but sentiment begins here)"
        ]
      },
      "2000": {
        "salience_share": 1.0,
        "description": "A sharp, temporary collapse of $-2.0\\%$ was triggered by the 9/11 attacks. The catalyst was the overwhelming sense of vulnerability, which proved that isolationism was physically impossible in the modern age. The displacing force was the War on Terror, which created an immediate, absolute consensus for global intervention and security (Cluster 04). The moral focus shifted from domestic protection to global pursuit of enemies, making any form of withdrawal politically untenable for a brief period.",
        "key_manifestations": [
          "The 9/11 attacks (2001)",
          "The USA PATRIOT Act (2001)",
          "Bush's 'Axis of Evil' Speech (2002)",
          "The rise of the 'Homeland Security' concept"
        ]
      },
      "2005": {
        "salience_share": 4.5,
        "description": "The cluster experienced a major rebound and acceleration of $+3.5\\%$ driven by the Iraq War quagmire. The catalyst was the exposure of the war's false premises (Cluster 10) and the lack of a clear exit strategy, which fostered extreme war fatigue. This birthed a bipartisan isolationism: the populist right rejected 'nation-building' and the left rejected 'imperial overreach.' The moral imperative was to bring the troops home and stop spending American blood and treasure on foreign projects.",
        "key_manifestations": [
          "Cindy Sheehan's anti-war protests (Left-wing isolationism)",
          "Ron Paul's anti-interventionist campaigns (Right-wing isolationism)",
          "The failure of Comprehensive Immigration Reform (2007 - Domestic focus)",
          "The decline of the 'Freedom Agenda' rhetoric"
        ]
      },
      "2010": {
        "salience_share": 7.5,
        "description": "A significant surge of $+3.0\\%$ was driven by the populist backlash to the Great Recession. The catalyst was the fusion of Tea Party economic nationalism with the failure of the global financial system (Cluster 05). Isolationism was rebranded as **economic protectionism** and anti-elite sentiment (Cluster 02). The mantra became: domestic debt and unemployment were caused by foreign trade deals and foreign wars. This was the ideological precursor to 'America First,' where national self-interest became the supreme, non-negotiable moral and economic truth.",
        "key_manifestations": [
          "The Tea Party movement's economic nationalism (2009-)",
          "The 'Birther' movement (Conspiratorial isolationism, Cluster 06)",
          "The abandonment of the TPP trade deal by many Democrats (Shifting consensus)",
          "The rise of Breitbart News (Nationalist media)"
        ]
      },
      "2015": {
        "salience_share": 11.0,
        "description": "The cluster reached its **historical zenith** with a massive surge of $+3.5\\%$. The catalyst was Donald Trump's successful 'America First' campaign, which made Isolationist Exceptionalism the official policy of the Republican Party, moving it from fringe rhetoric to executive action. The moral system was completely inverted: globalism was redefined as betrayal, and the domestic sphere was the only source of virtue (Cluster 02, 06). The rejection of climate agreements and trade deals (TPP) proved the ideological dominance of the 'dealmaking' nationalist over the universalist technocrat (Cluster 01, 20).",
        "key_manifestations": [
          "Donald Trump's 2016 Inaugural Address ('America First')",
          "U.S. withdrawal from the Trans-Pacific Partnership (TPP) (2017)",
          "Brexit vote (Global wave of nationalism reinforcing US trend)",
          "The rise of Tucker Carlson's anti-globalist media rhetoric (Cluster 02/06 fusion)"
        ]
      },
      "2020": {
        "salience_share": 9.5,
        "description": "A slight contraction of $-1.5\\%$ occurred due to the COVID-19 pandemic. The displacing force was the immediate, pragmatic need for global cooperation on supply chains, vaccine development, and epidemiological data (Cluster 01). However, the cluster's core belief remained strong and was manifested by the rhetoric of 'China Virus' and the closing of borders (Cluster 06), proving that the isolationist impulse was still the primary frame through which external threats were viewed. The US withdrawal from Afghanistan was a key, successful policy manifestation of this exceptionalism.",
        "key_manifestations": [
          "US withdrawal from Afghanistan (2021)",
          "The 'China Virus' rhetoric (Blaming foreign entity)",
          "The rise of domestic manufacturing subsidies (CHIPS Act, etc.)",
          "Executive Order on Border Closure (2020)"
        ]
      },
      "2025": {
        "salience_share": 8.0,
        "description": "The cluster stabilizes at a highly entrenched level, declining slightly by $-1.5\\%$ as the domestic economic and identity crises (Cluster 02, 07) require internal political attention. The displacing force is the complex geopolitical reality of competition with China, which requires strategic, rather than ideological, engagement. However, the protectionist consensus on tariffs and trade (Cluster 05) remains absolute across both parties. Isolationism has successfully moved from being an optional foreign policy to an entrenched, bipartisan cultural precondition for political legitimacy.",
        "key_manifestations": [
          "The ongoing debate over federal protectionist tariffs (2024-2025)",
          "The potential collapse of the World Trade Organization (WTO) (2025)",
          "The focus on 'reshoring' critical supply chains",
          "The rise of 'Techno-Nationalism' (Economic isolationism via technology)"
        ]
      }
    }
  },
  "14_therapeutic_self_actualization": {
    "name": "Therapeutic Self-Actualization",
    "description": "This cluster maps the cultural transition from 'Religious Man' (concerned with salvation/sin) and 'Economic Man' (concerned with wealth/poverty) to 'Psychological Man' (concerned with health/sickness and happiness/trauma). It posits that the primary purpose of life is the full realization of the self's potential and the removal of psychological repression. Epistemically, it validates 'feelings' not just as emotions but as cognitive tools for understanding reality. Its trajectory is a slow burn in the early 20th century, exploding in the 1960s/70s, and eventually colonizing political discourse in the 21st century via 'therapy speak' and the framing of social issues as mental health crises.",
    "trajectory": {
      "1890": {
        "salience_share": 0.2,
        "description": "The cluster existed in the embryonic form of the 'Mind Cure' and 'New Thought' movements, which were spiritual rather than clinical. The catalyst was the reaction against Calvinist fatalism (Cluster 08); people sought a theology that promised happiness and health in *this* life. William James began his work on psychology, legitimizing the inner life as a subject of scientific inquiry. However, the dominant cultural mode was 'Character' (external conduct) rather than 'Personality' (internal charm/state), keeping this cluster marginal.",
        "key_manifestations": [
          "The Principles of Psychology by William James (1890)",
          "New Thought movement literature (e.g., Ralph Waldo Trine)",
          "The Yellow Wallpaper by Charlotte Perkins Gilman (1892 - Early critique of the 'rest cure')",
          "Founding of the American Psychological Association (1892)"
        ]
      },
      "1895": {
        "salience_share": 0.3,
        "description": "Stagnation (+0.1%). The displacing force was the intense economic and political strife of the era (Populism), which framed suffering as a material, not psychological, problem. However, the 'nervousness' of American life (Neurasthenia) began to be diagnosed as a cultural condition by elites, signaling the first medicalization of the soul. Freud's early work had not yet crossed the Atlantic with force, so the vocabulary of the self remained largely religious or moral.",
        "key_manifestations": [
          "Studies on Hysteria by Breuer and Freud (1895 - European genesis)",
          "The Damnation of Theron Ware (1896 - Crisis of faith vs. modern psychology)",
          "Degeneration by Max Nordau (1895 - Framing cultural decline as mental pathology)",
          "Neurasthenia diagnoses among the urban elite"
        ]
      },
      "1900": {
        "salience_share": 0.5,
        "description": "Slight growth (+0.2%). The catalyst was the translation and dissemination of Freud\u2019s *The Interpretation of Dreams*, which introduced the concept of the 'Unconscious' to the American intellect. This was a seismic epistemic shift: truth was no longer just 'out there' (facts/God) but 'in here' (hidden desires). The rise of mass advertising (Cluster 05) began to appeal to these hidden desires, shifting the culture from satisfying needs to managing self-image.",
        "key_manifestations": [
          "The Interpretation of Dreams (1900)",
          "Sister Carrie (1900 - The acting out of desire rather than duty)",
          "The Varieties of Religious Experience by William James (1902)",
          "The rise of the 'Advice Column' (Early therapeutic guidance)"
        ]
      },
      "1905": {
        "salience_share": 0.6,
        "description": "Steady state (+0.1%). The Progressive Era focus on 'Efficiency' (Cluster 01) dominated, attempting to manage the self like a machine. However, the 'Emmanuel Movement' (1906) attempted to combine religion and psychotherapy, foreshadowing the future merger of spirituality and self-help. The displacing force remained the strong Civic Republican ethos (Cluster 04), which demanded self-sacrifice, not self-actualization.",
        "key_manifestations": [
          "The Emmanuel Movement (1906)",
          "The Jungle (1906 - Psychological trauma of the worker subordinated to physical misery)",
          "The Education of Henry Adams (1907 - Introspective alienation)",
          "Clifford Beers' A Mind That Found Itself (1908 - Launching the mental hygiene movement)"
        ]
      },
      "1910": {
        "salience_share": 1.0,
        "description": "A noticeable uptick (+0.4%) following Freud's visit to Clark University (1909). The catalyst was the embrace of psychoanalysis by Greenwich Village intellectuals, who used it as a weapon against 'Puritanism' (Cluster 08). 'Repression' became a dirty word. This marked the beginning of the shift from a culture of 'Character' (doing right) to a culture of 'Personality' (being liked/being free), as documented later by Warren Susman.",
        "key_manifestations": [
          "Freud's lectures at Clark University (1909)",
          "The founding of the Psychoanalytic Review (1913)",
          "The Masses (Magazine mixing socialism and sexual liberation)",
          "Twenty Years at Hull House (1910 - Sociology, but with deep psychological empathy)"
        ]
      },
      "1915": {
        "salience_share": 1.5,
        "description": "Growth continued (+0.5%). The catalyst was World War I and the phenomenon of 'Shell Shock.' This forced the military and the state to acknowledge that the mind could break under environmental stress, legitimizing psychiatry as a pragmatic tool (Cluster 01). It moved psychology from the parlor of the neurotic elite to the hospital ward of the common soldier, embedding therapeutic concepts into the bureaucracy.",
        "key_manifestations": [
          "Establishment of the National Committee for Mental Hygiene (1909/growing influence)",
          "Shell Shock treatments and studies (1915-)",
          "Winesburg, Ohio by Sherwood Anderson (1919 - Focus on inner repression)",
          "Introduction of intelligence testing in the Army (Quantifying the mind)"
        ]
      },
      "1920": {
        "salience_share": 2.5,
        "description": "A surge (+1.0%) during the Jazz Age. The catalyst was the popularization of 'Freudianism' (often misunderstood) as a license for sexual freedom. The goal of life shifted from 'Salvation' to 'Adjustment' and 'Liberation.' The displacing force of traditional morality (Cluster 08) was aggressively attacked by a youth culture that valued 'authenticity' and 'expression.' Advertising fully pivoted to selling products as therapeutic solutions to social anxiety.",
        "key_manifestations": [
          "This Side of Paradise (1920 - The 'Petting Party' and egoism)",
          "The triumph of the 'Personality' manual (e.g., Dale Carnegie precursors)",
          "Sigmund Freud popularized in vanity magazines",
          "Babbitt (1922 - Satire of the non-actualized man)"
        ]
      },
      "1925": {
        "salience_share": 2.8,
        "description": "Continued high variance (+0.3%). The 'complex' became a household term. The catalyst was the booming economy which allowed for the leisure time necessary for introspection. Literature focused intensely on the stream of consciousness (Faulkner, Woolf), prioritizing subjective reality over objective plot. The self was becoming the primary project of the individual.",
        "key_manifestations": [
          "The Great Gatsby (1925 - The invention of the self)",
          "The Sound and the Fury (1929 - Radical subjectivity)",
          "Coming of Age in Samoa (1928 - Anthropology used to critique repression)",
          "The Man Nobody Knows (1925 - Jesus as a personality success story)"
        ]
      },
      "1930": {
        "salience_share": 1.2,
        "description": "A sharp drop (-1.6%). The Great Depression made 'self-actualization' seem like an obscene luxury. The displacing force was the reality of hunger and the need for collective solidarity (Cluster 16). The psychological lens shifted from 'individual neurosis' to 'social pathology.' The goal was no longer happiness, but security. Therapy was for the rich; survival was for the masses.",
        "key_manifestations": [
          "Civilization and Its Discontents by Freud (1930 - Pessimistic turn)",
          "The Grapes of Wrath (1939 - Collective soul vs individual ego)",
          "Public Enemy (1931 - Sociology of crime vs psychology of evil)",
          "Workers' theatre movements (Rejection of bourgeois introspection)"
        ]
      },
      "1935": {
        "salience_share": 1.5,
        "description": "Stabilization (+0.3%). While the collective dominated, the 'Culture and Personality' school of anthropology (Benedict, Mead) began to link individual psychology to democratic survival. The catalyst was the rise of Fascism; Americans needed to understand the 'Authoritarian Personality' to defeat it. Psychology was weaponized for national defense (Cluster 04).",
        "key_manifestations": [
          "Patterns of Culture by Ruth Benedict (1934)",
          "How to Win Friends and Influence People by Dale Carnegie (1936 - The self as commodity)",
          "Karen Horney's The Neurotic Personality of Our Time (1937)",
          "Life Magazine (Focus on the individual narrative)"
        ]
      },
      "1940": {
        "salience_share": 1.8,
        "description": "Modest growth (+0.3%) driven by the war effort. The military needed to screen millions of men, leading to the massive expansion of clinical psychology. The catalyst was the need to maintain morale. 'Mental Health' began to be seen as a national resource. However, the overarching ethos was still duty, not self-fulfillment.",
        "key_manifestations": [
          "The National Mental Health Act (Drafted 1945/passed 1946)",
          "Why We Fight (Psychological mobilization)",
          "Now, Voyager (1942 - Therapy/psychiatry as plot device)",
          "Captain America (1941 - Transformation of the weak body/self)"
        ]
      },
      "1945": {
        "salience_share": 3.0,
        "description": "A significant jump (+1.2%). The catalyst was the return of traumatized veterans and the subsequent boom in psychoanalysis. 'Dr. Spock's Baby and Child Care' (1946) introduced a permissive, psychological approach to raising children, prioritizing the child's emotional needs over strict discipline. This sowed the seeds for the 60s generation. The 'age of anxiety' began.",
        "key_manifestations": [
          "The Common Sense Book of Baby and Child Care (1946)",
          "The Snake Pit (1948 - Film exposing asylum conditions)",
          "Death of a Salesman (1949 - The tragedy of the failed personality)",
          "Cybernetics (1948 - Mind as information processor)"
        ]
      },
      "1950": {
        "salience_share": 4.5,
        "description": "Growth accelerated (+1.5%). The 'Therapeutic Ethos' began to displace the 'Protestant Ethic.' The catalyst was the search for meaning amidst material abundance. *The Lonely Crowd* diagnosed the shift from 'inner-directed' (moral compass) to 'outer-directed' (social anxiety). Psychology became the new religion for the educated middle class. The goal was 'adjustment' to the group, but the language was increasingly clinical.",
        "key_manifestations": [
          "The Lonely Crowd (1950)",
          "The Power of Positive Thinking (1952 - Religion as therapy)",
          "Rebel Without a Cause (1955 - Critique of the weak father/psychological failure)",
          "I Love Lucy (The therapeutic function of domestic comedy)"
        ]
      },
      "1955": {
        "salience_share": 5.0,
        "description": "Steady high variance (+0.5%). The pharmaceutical revolution began with Miltown (the first blockbuster tranquilizer). The catalyst was the desire to chemically manage the 'anxiety of modern life.' This marked the beginning of the biological turn in the therapeutic cluster. Simultaneously, the Beat Generation began to champion 'madness' as a higher form of sanity, rejecting adjustment for ecstatic experience.",
        "key_manifestations": [
          "Miltown (Meprobamate) market release (1955)",
          "On the Road (1957 - The search for 'IT'/peak experience)",
          "Eros and Civilization by Herbert Marcuse (1955 - Political psychology)",
          "The Three Faces of Eve (1957 - Dissociation as spectacle)"
        ]
      },
      "1960": {
        "salience_share": 7.5,
        "description": "A major surge (+2.5%). The catalyst was the birth of Humanistic Psychology (Maslow, Rogers). The hierarchy of needs placed 'Self-Actualization' at the apex of human existence. Esalen Institute was founded (1962), creating the 'Human Potential Movement.' The goal shifted from 'adjustment' to 'transcendence' and 'growth.' This was the spiritual engine of the counter-culture (Cluster 19).",
        "key_manifestations": [
          "Toward a Psychology of Being by Abraham Maslow (1962)",
          "One Flew Over the Cuckoo's Nest (1962 - The asylum as totalitarian state)",
          "Esalen Institute founded (1962)",
          "The Feminine Mystique (1963 - The psychology of the trapped housewife)"
        ]
      },
      "1965": {
        "salience_share": 11.0,
        "description": "Explosive growth (+3.5%). The 'Triumph of the Therapeutic' (Philip Rieff, 1966) diagnosed that the therapist had replaced the priest. The catalyst was the cultural revolution where 'doing your own thing' became a moral imperative. Encounter groups, T-groups, and primal scream therapy proliferated. The political became personal: liberation was not just about laws (Cluster 03) but about freeing the consciousness from repression.",
        "key_manifestations": [
          "The Triumph of the Therapeutic by Philip Rieff (1966)",
          "I'm OK - You're OK (1967/69)",
          "The Graduate (1967 - Alienation resolution)",
          "Hair (1967 - Letting the sunshine in/id release)"
        ]
      },
      "1970": {
        "salience_share": 14.5,
        "description": "The cluster reached its 20th-century peak (+3.5%) in the 'Me Decade.' The displacing force of collective political action (New Left) collapsed into narcissism. The catalyst was the turn inward; if we can't change the world, we can change ourselves. The self-help industry exploded. Tom Wolfe coined 'The Me Decade' to describe this retreat from civic virtue (Cluster 04) to self-realization.",
        "key_manifestations": [
          "The 'Me Decade' essay by Tom Wolfe (1976)",
          "The Culture of Narcissism by Christopher Lasch (1979 - The critique proving the dominance)",
          "Est (Erhard Seminars Training) popularity",
          "Passages by Gail Sheehy (1976 - Life as a series of crises)"
        ]
      },
      "1975": {
        "salience_share": 13.0,
        "description": "Slight retraction (-1.5%) as the excesses of the movement (cults, narcissism) faced backlash. However, the therapeutic mindset entrenched itself in institutions. The 'battered woman' syndrome and PTSD diagnoses (post-Vietnam) brought therapeutic language into the courtroom and the hospital. The catalyst was the need to process the national trauma of the 60s/70s.",
        "key_manifestations": [
          "Diagnostic and Statistical Manual III (DSM-III) development (Medicalizing the mind)",
          "Ordinary People (1980 - Therapy as the only path to healing)",
          "Annie Hall (1977 - Analysis as lifestyle)",
          "The Road Less Traveled by M. Scott Peck (1978)"
        ]
      },
      "1980": {
        "salience_share": 10.5,
        "description": "Decline in radicalism, rise in ubiquity (-2.5%). Reaganism emphasized 'rugged individualism' (Cluster 05) over 'neurotic introspection.' However, the 'Recovery Movement' (12-step programs) went mainstream. The catalyst was the democratization of therapy: you didn't need a PhD, just a support group. 'Adult Children of Alcoholics' and 'Codependency' became standard cultural terms.",
        "key_manifestations": [
          "Adult Children of Alcoholics (Book/Movement 1983)",
          "Codependent No More by Melody Beattie (1986)",
          "The Oprah Winfrey Show (1986 - The televised therapy session)",
          "Fatal Attraction (1987 - The borderlines of the self)"
        ]
      },
      "1985": {
        "salience_share": 11.0,
        "description": "Stabilization (+0.5%). The 'Self-Esteem Movement' began to influence education policy (California Task Force on Self-Esteem). The catalyst was the belief that social ills (crime, drug addiction) were caused by low self-worth. This was the political apex of the therapeutic style: attempting to solve structural problems with psychological affirmation.",
        "key_manifestations": [
          "California Task Force to Promote Self-Esteem (1986)",
          "You Can Heal Your Life by Louise Hay (1984)",
          "Prozac released (1987 - Chemical self-actualization)",
          "Rain Man (1988 - Neurodivergence enters pop consciousness)"
        ]
      },
      "1990": {
        "salience_share": 12.5,
        "description": "Growth (+1.5%). Bill Clinton ('I feel your pain') was the first Therapeutic President. The catalyst was the acceptance of SSRIs (Prozac Nation) which removed the stigma of mental health treatment, framing it as 'biology' rather than 'weakness.' The concept of 'closure' became a required narrative beat in news and entertainment.",
        "key_manifestations": [
          "Listening to Prozac by Peter Kramer (1993)",
          "Prozac Nation by Elizabeth Wurtzel (1994)",
          "Good Will Hunting (1997 - The breakthrough)",
          "Men Are from Mars, Women Are from Venus (1992 - Relationship therapy)"
        ]
      },
      "1995": {
        "salience_share": 11.5,
        "description": "Slight dip (-1.0%) as Irony (Cluster 11) critiqued the earnestness of the self-help movement (e.g., Stuart Smalley skits). The displacing force was the cynical detachment of Gen X. However, the 'Oprah-fication' of culture was complete; the confession was the highest form of truth.",
        "key_manifestations": [
          "The Sopranos (1999 - The mob boss in therapy)",
          "Fight Club (1999 - Violent rejection of support group culture)",
          "Who Moved My Cheese? (1998 - Corporate therapy)",
          "Dr. Phil's first appearances (1998)"
        ]
      },
      "2000": {
        "salience_share": 10.0,
        "description": "Retraction (-1.5%) post-9/11. The demand was for security (Cluster 06), not self-actualization. The displacing force was the reality of external threat. 'Trauma' was discussed, but in a national, collective sense rather than a personal growth sense. Pharmaceutical advertising, however, exploded, normalizing the idea that everyone had a chemical imbalance.",
        "key_manifestations": [
          "Direct-to-consumer pharma ads (Explosion in 2000s)",
          "A Beautiful Mind (2001)",
          "The Secret (2006 - Magical thinking self-help)",
          "Eat, Pray, Love (2006 - The return of the narcissistic quest)"
        ]
      },
      "2005": {
        "salience_share": 12.0,
        "description": "Recovery (+2.0%). The rise of social media (MySpace/Facebook) created a platform for the continuous performance and curation of the self. The catalyst was the 'Wellness' industry merging with the internet. 'Mental Health Awareness' began to shift from a medical necessity to a lifestyle signifier.",
        "key_manifestations": [
          "In Treatment (TV Series 2008)",
          "Goop launched by Gwyneth Paltrow (2008)",
          "The Year of Magical Thinking by Joan Didion (2005)",
          "Rise of 'Mommy Blogs' (Confessional digital therapy)"
        ]
      },
      "2010": {
        "salience_share": 15.0,
        "description": "Surge (+3.0%). The concept of 'Microaggressions' and 'Trigger Warnings' moved from campus counseling centers to the public square (Cluster 07). The catalyst was the re-definition of safety to include 'emotional safety.' Epistemically, subjective emotional harm became a claim to objective injury. The 'Safe Space' was the physical manifestation of this cluster.",
        "key_manifestations": [
          "The Coddling of the American Mind (Article 2015/Book 2018)",
          "Girls (2012 - The narcissism of the examined life)",
          "Brene Brown's TED Talk on Vulnerability (2010)",
          "Oberlin College food protests (2015 - Cultural appropriation as psychological harm)"
        ]
      },
      "2015": {
        "salience_share": 18.5,
        "description": "Major acceleration (+3.5%). 'Trauma' became the master signifier of the era. The catalyst was the convergence of social justice and therapy culture ('Social Justice Therapy'). Every political issue was reframed as a mental health issue (e.g., 'climate grief,' 'racial trauma'). The displacing force of objective resilience was replaced by the valorization of vulnerability. Instagram therapy accounts proliferated.",
        "key_manifestations": [
          "The Body Keeps the Score (2014/Viral popularity later)",
          "13 Reasons Why (2017)",
          "Nanette (2018 - Comedy as trauma dumping)",
          "The proliferation of 'Self-Care' as political resistance"
        ]
      },
      "2020": {
        "salience_share": 22.0,
        "description": "The cluster reached a new peak (+3.5%) during the pandemic. The universal experience of isolation and fear made 'mental health' the primary conversation. 'Therapy Speak' (gaslighting, boundaries, toxic, capacity) entered everyday language, often weaponized in interpersonal relationships. The catalyst was TikTok, where users self-diagnosed with ADHD, autism, and DID, turning pathology into identity.",
        "key_manifestations": [
          "TikTok's 'TraumaTok' and 'Dissociative Identity Disorder' trends",
          "Ted Lasso (2020 - The triumph of the therapeutic male)",
          "Prince Harry's 'Spare' and documentary (The Royal therapy session)",
          "BetterHelp sponsorship ubiquity"
        ]
      },
      "2025": {
        "salience_share": 20.0,
        "description": "Slight fatigue-induced decline (-2.0%). The backlash against 'Therapy Speak' has begun, with critics arguing it leads to selfishness and social atomization (e.g., 'cutting toxic people out' as an excuse for abandoning community). The displacing force is a renewed desire for 'Resilience' and 'Stoicism' (Cluster 04 revival in niche circles). However, AI therapists (chatbots) have democratized access to validation, locking the user into a permanent feedback loop of self-affirmation.",
        "key_manifestations": [
          "Bad Therapy by Abigail Shrier (2024)",
          "Rise of AI Companions/Therapists (Replika, Character.ai)",
          "The 'Resilience' counter-trend in corporate HR",
          "Backlash to 'HR-ification' of friendship viral articles"
        ]
      }
    }
  },
  "15_corporate_managerialism": {
    "name": "Corporate Managerialism",
    "description": "This cluster tracks the rise of the large-scale business corporation not just as an economic entity, but as the primary organizing institution of American life and epistemic authority. Distinct from 'Market-Based Epistemology' (which values price signals and chaos), Managerialism values hierarchy, planning, stability, and the separation of ownership from control (the 'Managerial Revolution'). It posits that the 'Organization' is a benevolent, rational force capable of providing social welfare and identity. Its trajectory rises with the industrial trusts, peaks in the mid-century 'Treaty of Detroit' era, collapses under the assault of shareholder primacy in the 80s, and mutates into 'Stakeholder Capitalism' and ESG bureaucracy in the 21st century.",
    "trajectory": {
      "1890": {
        "salience_share": 4.5,
        "description": "The cluster was in a rapid ascent phase (+1.5% baseline growth) as the 'Trust' emerged as a new form of sovereignty. The catalyst was the completion of the national railroad network, which required administrative hierarchies larger than the US Army. Epistemically, this was the birth of 'scientific management' applied to capital; the belief that competition was wasteful and consolidation was rational. The Sherman Antitrust Act (1890) was the political immune response to this new organ, attempting to assert the state's supremacy over the corporation.",
        "key_manifestations": [
          "The formation of the Standard Oil Trust (1882/dominance in 90s)",
          "Sherman Antitrust Act (1890)",
          "Principles of Economics by Alfred Marshall (1890 - analyzing the firm)",
          "The Great Merger Movement (begins mid-1890s)"
        ]
      },
      "1895": {
        "salience_share": 5.2,
        "description": "Growth continued (+0.7%) despite the Panic of 1893. In fact, the panic acted as a catalyst for consolidation; J.P. Morgan used the crisis to 'Morganize' chaotic industries (railroads, steel) into disciplined, managed hierarchies. The displacing force was the failure of small-scale, competitive capitalism to survive the downturn. The corporate manager began to replace the 'Robber Baron' entrepreneur as the central figure of commerce\u2014a shift from the pirate to the admiral.",
        "key_manifestations": [
          "J.P. Morgan's reorganization of the railroads",
          "United States v. E.C. Knight Co. (1895 - Legal shield for manufacturing monopolies)",
          "The founding of the National Association of Manufacturers (1895)",
          "The rise of the corporate lawyer as a power broker"
        ]
      },
      "1900": {
        "salience_share": 7.5,
        "description": "A surge (+2.3%) marked by the creation of U.S. Steel, the first billion-dollar corporation. The catalyst was the realization that the corporation could be larger and more financially stable than the state itself. Epistemically, the corporation was presenting itself as the ultimate rational actor. However, the 'Muckrakers' (Cluster 10) began to attack this concentration, framing the manager not as an expert but as a tyrant. The conflict between 'Democracy' and 'The Trust' became the central political narrative.",
        "key_manifestations": [
          "Formation of U.S. Steel (1901)",
          "The Octopus by Frank Norris (1901 - The corporation as inhuman force)",
          "The Gospel of Wealth (Carnegie's attempt to give the corporation a soul)",
          "Northern Securities Co. formation (1901)"
        ]
      },
      "1905": {
        "salience_share": 8.0,
        "description": "Steady growth (+0.5%). The displacing force of Theodore Roosevelt's 'Trust Busting' checked the legal power of the cluster, but paradoxically reinforced its cultural necessity. TR didn't want to destroy the corporations, but to regulate them (Cluster 01). The 'Gary Dinners' (U.S. Steel) represented the new epistemic standard: 'cooperative competition' managed by elites, rather than the cutthroat chaos of the free market. The idea of 'Corporate Responsibility' began to form as a defensive strategy.",
        "key_manifestations": [
          "The Gary Dinners (Price stabilization via gentleman's agreement)",
          "Lochner v. New York (1905 - Protecting corporate contract rights)",
          "The Jungle (1906 - Highlighting the lack of internal management)",
          "The visible hand of management replacing the invisible hand"
        ]
      },
      "1910": {
        "salience_share": 9.5,
        "description": "The cluster expanded (+1.5%) with the wide adoption of Taylorism (Scientific Management). The catalyst was the need for efficiency, which elevated the 'Manager' to the status of a scientist. The Supreme Court's 'Rule of Reason' standard (1911) legitimized the existence of large corporations as long as they didn't 'unreasonably' restrain trade, effectively integrating the giant firm into the legal order. The corporation was no longer an outlaw; it was a pillar of society.",
        "key_manifestations": [
          "The Principles of Scientific Management by Taylor (1911)",
          "Standard Oil Co. of New Jersey v. United States (1911 - Rule of Reason)",
          "Establishment of the Harvard Business School (1908/influence grows)",
          "Welfare Capitalism experiments (Ford's $5 Day in 1914)"
        ]
      },
      "1915": {
        "salience_share": 11.0,
        "description": "A war-driven spike (+1.5%). World War I forced the integration of corporate management with state planning. The War Industries Board was essentially a board of corporate directors running the national economy. The catalyst was the realization that only the large-scale corporation had the logistical capacity to fight a modern war. This period proved that 'Planning' (Managerialism) was superior to 'Scramble' (Markets) in a crisis.",
        "key_manifestations": [
          "War Industries Board (Bernard Baruch)",
          "Ford Motor Company's war production conversion",
          "The rise of personnel departments (HR origins)",
          "The Theory of the Leisure Class (Veblen's critique of ownership vs industry)"
        ]
      },
      "1920": {
        "salience_share": 12.5,
        "description": "Robust growth (+1.5%) during the era of 'Welfare Capitalism.' Corporations began to provide housing, insurance, and pensions to workers to stave off unionization (Cluster 16). The catalyst was the desire for stability and the belief that the corporation could be a complete social world. 'The Man Nobody Knows' (1925) depicted Jesus as the ultimate executive, sanctifying the role of the manager. The separation of ownership (stockholders) and control (CEO) became distinct.",
        "key_manifestations": [
          "The Man Nobody Knows (1925)",
          "General Motors' multidivisional structure (Alfred Sloan's invention)",
          "Company Towns and Welfare Capitalism programs",
          "Babbitt (1922 - Satire of the booster/manager class)"
        ]
      },
      "1925": {
        "salience_share": 13.5,
        "description": "The cluster reached a pre-Depression peak (+1.0%). The displacing force was the rampant speculation of the stock market (Cluster 05), which threatened to subordinate the 'builder/manager' to the 'speculator.' However, the cultural prestige of the Titan of Industry was immense. The epistemic assumption was that the 'New Era' of permanent prosperity was engineered by corporate wisdom.",
        "key_manifestations": [
          "Alfred Sloan's management of GM",
          "Coolidge's 'The business of America is business'",
          "The expansion of the chain store (A&P, Woolworth's)",
          "Dodge v. Ford Motor Co. (1919/influence - Shareholder primacy vs managerial discretion)"
        ]
      },
      "1930": {
        "salience_share": 8.0,
        "description": "A massive crash (-5.5%). The Great Depression destroyed the prestige of the business leader. The catalyst was the revelation that the 'Captains of Industry' had no idea how to steer the ship. However, Berle and Means' *The Modern Corporation and Private Property* (1932) intellectually codified the 'Managerial Revolution,' arguing that corporations were now semi-sovereign entities that required public accountability, identifying the split between owner and manager as the defining feature of modern capitalism.",
        "key_manifestations": [
          "The Modern Corporation and Private Property by Berle and Means (1932)",
          "The Pecora Commission (Exposing banker incompetence)",
          "I'm No Angel (Mae West) (Subverting corporate morality)",
          "National Industrial Recovery Act (1933 - State-managed cartels)"
        ]
      },
      "1935": {
        "salience_share": 6.5,
        "description": "Continued suppression (-1.5%) by the New Deal. The displacing force was the rise of Big Labor (Cluster 16) and Big Government (Cluster 01). The corporation was forced into a subordinate role, regulated and unionized. The 'Company Union' was outlawed. However, the internal bureaucracy of corporations continued to grow as they adapted to the new regulatory environment, becoming more legalistic and cautious.",
        "key_manifestations": [
          "The Wagner Act (1935 - Defeat of corporate unilateralism)",
          "Modern Times (1936 - Critique of the factory system)",
          "The Folklore of Capitalism by Thurman Arnold (1937)",
          "Formation of the CIO (Counter-power)"
        ]
      },
      "1940": {
        "salience_share": 10.0,
        "description": "A sharp rebound (+3.5%) as the 'Arsenal of Democracy' rehabilitated the corporate image. The catalyst was WWII; the New Deal needed GM and US Steel to build tanks. 'Dollar-a-Year Men' returned to Washington. James Burnham published *The Managerial Revolution* (1941), arguing that the managers\u2014not the workers or the owners\u2014were the new ruling class of the world, whether in Nazi Germany, Stalinist Russia, or Capitalist America.",
        "key_manifestations": [
          "The Managerial Revolution by James Burnham (1941)",
          "The War Production Board",
          "Willow Run Bomber Plant (Ford's logistical triumph)",
          "Use of corporate advertising for war bonds (rebranding)"
        ]
      },
      "1945": {
        "salience_share": 12.5,
        "description": "Growth continued (+2.5%). The post-war strike wave (1946) threatened the cluster, but the 'Treaty of Detroit' (1950) established a new equilibrium: corporations would provide stability and rising wages in exchange for management's 'right to manage.' The catalyst was the desire for stability over class war. The corporation became the primary provider of the social safety net (health insurance, pensions) rather than the state, a uniquely American form of 'Privatized Keynesianism.'",
        "key_manifestations": [
          "Treaty of Detroit (GM-UAW contract) (1950)",
          "The Concept of the Corporation by Peter Drucker (1946)",
          "Taft-Hartley Act (1947 - Restoring management power)",
          "The Man in the Gray Flannel Suit (Novel 1955/Context 40s)"
        ]
      },
      "1950": {
        "salience_share": 15.0,
        "description": "The cluster reached its **Golden Age** (+2.5%). 'What is good for the country is good for General Motors.' The corporation was viewed not just as a profit machine but as a social institution. The catalyst was the lack of global competition and the bureaucratic nature of the Cold War economy. The 'Organization Man' ethos emerged: loyalty to the firm was the primary civic virtue. Employment was assumed to be lifetime.",
        "key_manifestations": [
          "The Organization Man by William Whyte (1956)",
          "Wilson's confirmation hearing ('What's good for GM...') (1953)",
          "Executive Suite (Film) (1954)",
          "IBM's 'Life Employment' policy"
        ]
      },
      "1955": {
        "salience_share": 16.5,
        "description": "Peak Managerialism (+1.5%). The displacing force of 'Market Epistemology' (Cluster 05) was weak; managers ignored stock prices and focused on 'retained earnings' and empire building (conglomerates). The moral justification was 'industrial statesmanship.' Galbraith's *The Affluent Society* described the 'Technostructure'\u2014the anonymous experts running the corporations\u2014as the true power, immune to market forces.",
        "key_manifestations": [
          "The Affluent Society (1958)",
          "The rise of the Conglomerate (ITT, Litton Industries)",
          "Atlas Shrugged (1957 - A lone voice attacking this managerial consensus)",
          "The Man in the Gray Flannel Suit (Film) (1956)"
        ]
      },
      "1960": {
        "salience_share": 14.0,
        "description": "A slow decline began (-2.5%). The displacing force was the cultural critique of the 1960s (Cluster 19), which viewed the 'suit' as a soul-dead conformist. *The Apartment* (1960) satirized the moral emptiness of the corporate ladder. The Conglomerate boom began to show cracks as 'synergy' failed to materialize. The 'Nader's Raiders' attacks (Cluster 10) challenged the benevolence of the manager, revealing them to be cutting corners on safety.",
        "key_manifestations": [
          "The Apartment (1960)",
          "Unsafe at Any Speed (1965 - Piercing the corporate veil)",
          "Up the Organization (1970 - Early sign of revolt against bureaucracy)",
          "One-Dimensional Man (1964 - Critique of corporate rationality)"
        ]
      },
      "1965": {
        "salience_share": 11.5,
        "description": "Decline accelerated (-2.5%). The Vietnam War inflation began to erode real corporate returns. The catalyst was the rise of the 'Youth Culture' which rejected the promise of the gold watch and the corner office. *The Graduate* ('Plastics') encapsulated the total rejection of the managerial future. Affirmative Action regulations began to impose external social goals on the corporation's internal hiring, challenging the manager's autonomy.",
        "key_manifestations": [
          "The Graduate (1967)",
          "The New Industrial State by Galbraith (1967 - Describing the peak just as it faded)",
          "Equal Employment Opportunity Commission (EEOC) enforcement",
          "Penn Central Bankruptcy (1970 - Shock to the managerial myth)"
        ]
      },
      "1970": {
        "salience_share": 9.0,
        "description": "Crisis of legitimacy (-2.5%). The 'Nifty Fifty' stock bubble burst. Stagflation destroyed the predictability that managerialism relied on. The catalyst was the Oil Shock, which exposed American corporations as bloated and inefficient compared to the lean Japanese and German competitors. The 'Blue Collar Blues' (Lordstown Strike) showed that the Treaty of Detroit was broken. The public began to view the corporation as a predator (Cluster 06) rather than a provider.",
        "key_manifestations": [
          "Lordstown GM Strike (1972)",
          "The Limits to Growth (1972 - Corporate growth as cancer)",
          "Network (1976 - 'The world is a business')",
          "Creation of the EPA/OSHA (State taking over managerial discretion)"
        ]
      },
      "1975": {
        "salience_share": 7.5,
        "description": "Continued erosion (-1.5%). The 'Agency Theory' (Jensen and Meckling, 1976) was published, providing the intellectual weapon to destroy managerialism. It argued that managers were parasites stealing from shareholders. This laid the groundwork for the 80s. The catalyst was the miserable stock market performance, which made 'Shareholder Value' an attractive alternative epistemology.",
        "key_manifestations": [
          "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure (1976)",
          "Foreign Corrupt Practices Act (1977)",
          "Chrysler Bailout (1979 - The humiliation of management)",
          "Norma Rae (1979)"
        ]
      },
      "1980": {
        "salience_share": 5.0,
        "description": "The cluster collapsed (-2.5%) under the assault of the 'Corporate Raider.' The catalyst was the leveraged buyout (LBO) boom. Raiders like Carl Icahn argued that 'management' was the problem and 'ownership' (the market) was the solution. The breakup of AT&T (1982/84) dismantled the ultimate managerial monopoly. The 'Organization Man' was fired; the 'Free Agent' was hired. Loyalty was dead.",
        "key_manifestations": [
          "Breakup of the Bell System (AT&T) (1984)",
          "In Search of Excellence (1982 - Attempt to reinvent management as culture)",
          "T. Boone Pickens' raids",
          "Neutron Jack (Jack Welch's layoffs at GE)"
        ]
      },
      "1985": {
        "salience_share": 4.0,
        "description": "Low point (-1.0%). 'Greed is Good' (Cluster 05) replaced 'Stability is Good.' The displacing force was the dominance of finance capital over industrial management. Corporations were deconstructed into bundles of assets to be sold. *Roger & Me* (1989) documented the human cost of the collapse of the managerial social contract in the Rust Belt. The CEO became a celebrity shareholder, not a steward.",
        "key_manifestations": [
          "Roger & Me (1989)",
          "Barbarians at the Gate (1989)",
          "Wall Street (1987 - Gekko vs. the weak unions/management)",
          "Downsizing as a permanent corporate strategy"
        ]
      },
      "1990": {
        "salience_share": 5.5,
        "description": "A mutation and slight rise (+1.5%). 'Business Process Reengineering' became the new managerial creed. The catalyst was the integration of IT (Cluster 12) into the firm. Management returned, but as 'Change Management'\u2014the constant, frantic restructuring of the firm to meet market demands. The 'Dilbert' era began, satirizing the new, soulless, buzzword-laden bureaucracy that replaced the old paternalism.",
        "key_manifestations": [
          "Reengineering the Corporation (1993)",
          "Dilbert (Comic strip peak popularity)",
          "Office Space (1999 - Cultural artifact of the era)",
          "The concept of 'Employability' replacing 'Employment Security'"
        ]
      },
      "1995": {
        "salience_share": 6.5,
        "description": "Growth (+1.0%) via the 'New Economy' myth. The catalyst was the dot-com boom, which promised a new kind of flat, fun, campus-like corporation (Google, etc.). This was 'Bohemian Managerialism' (David Brooks' Bobos). The HR department began to expand its remit from payroll to 'culture' and 'diversity,' planting the seeds for the 21st-century ideological corporation.",
        "key_manifestations": [
          "The Cluetrain Manifesto (1999)",
          "Google's 'Don't Be Evil' (Corporate moralism returns)",
          "Fast Company Magazine launch",
          "Nike's Sweatshop scandals (Global supply chain management issues)"
        ]
      },
      "2000": {
        "salience_share": 4.5,
        "description": "A dip (-2.0%) due to Enron. The scandal proved that the 'New Management' was just as corrupt as the old, but with better accounting tricks. The Sarbanes-Oxley Act (2002) forced a return to rigid, legalistic bureaucracy. The displacing force was the loss of trust. However, the 'Talent War' narrative kept elite managerialism alive as a meritocratic ideal.",
        "key_manifestations": [
          "Enron: The Smartest Guys in the Room (Book 2003/Film 2005)",
          "Sarbanes-Oxley Act (2002)",
          "The War for Talent (McKinsey concept)",
          "The Devil Wears Prada (2006 - The tyranny of the creative manager)"
        ]
      },
      "2005": {
        "salience_share": 5.5,
        "description": "Steady state (+1.0%). The financial crisis of 2008 discredited the 'Banker,' but strangely rehabilitated the 'Technocrat' (Cluster 01) and the 'Tech CEO.' The catalyst was the rise of 'Stakeholder Capitalism' rhetoric (Davos). Corporations began to position themselves as solvers of global problems (Climate, Poverty) to fill the vacuum left by incompetent states. This was the beginning of 'Woke Capital.'",
        "key_manifestations": [
          "Bill Gates' Creative Capitalism speech (2008)",
          "Google's dominance (The good corporation)",
          "The 4-Hour Workweek (2007 - Rejecting the managerial cage)",
          "Lehman Brothers collapse (Failure of risk management)"
        ]
      },
      "2010": {
        "salience_share": 7.5,
        "description": "A significant rise (+2.0%). The 'HR Revolution' was the catalyst. Following Occupy Wall Street, corporations adopted the language of social justice (Cluster 07) to inoculate themselves against radical redistribution (Cluster 16). Diversity, Equity, and Inclusion (DEI) became central managerial functions. The corporation was no longer just an economic entity, but a moral policeman, enforcing progressive norms on employees and states (e.g., boycotts of North Carolina).",
        "key_manifestations": [
          "Lean In by Sheryl Sandberg (2013 - Corporate feminism)",
          "Corporate backlash to NC Bathroom Bill (2016)",
          "Rise of Chief Diversity Officers",
          "The Circle by Dave Eggers (2013 - The totalizing corporate campus)"
        ]
      },
      "2015": {
        "salience_share": 9.0,
        "description": "Continued growth (+1.5%). The 'ESG' (Environmental, Social, and Governance) movement institutionalized political goals into financial metrics. The catalyst was the BlackRock letters (Larry Fink). The displacing force of Populism (Cluster 02) attacked this as 'Woke Capital,' but within the elite economy, managerial power expanded. The corporation began to censor speech and de-bank enemies, exercising sovereign-like power.",
        "key_manifestations": [
          "Larry Fink's Annual Letters to CEOs (ESG mandate)",
          "Nike's Colin Kaepernick Ad (2018 - Brand as moral stance)",
          "Gillette's 'Toxic Masculinity' Ad (2019)",
          "Business Roundtable Statement on the Purpose of a Corporation (2019 - Abandoning shareholder primacy)"
        ]
      },
      "2020": {
        "salience_share": 8.5,
        "description": "Peak and backlash (-0.5%). The pandemic empowered managers (remote work surveillance, vaccine mandates), but the 'Bud Light' moment (2023) and the Disney-DeSantis feud signaled that the populist right would punish corporate political overreach. The displacing force was the 'Anti-ESG' movement. However, the internal bureaucracy of the corporation remained a powerful, ideological force, distinct from the shareholders or the customers.",
        "key_manifestations": [
          "Disney vs. DeSantis (2022-2023)",
          "The Bud Light Boycott (2023)",
          "Coinbase's 'No Politics' policy (2020 - The counter-move)",
          "Severance (TV Series) (2022 - The horror of the corporate self)"
        ]
      },
      "2025": {
        "salience_share": 7.0,
        "description": "Decline (-1.5%). AI (Cluster 12) is beginning to flatten the managerial hierarchy ('The Flattening'). Middle management is being automated. The displacing force is efficiency; the bloated 'email caste' is vulnerable. Politically, corporations are retreating to 'Quiet Luxury' neutrality to avoid the culture war crossfire. Managerialism is shifting from 'Moral Leadership' back to 'Survival via Automation.'",
        "key_manifestations": [
          "Mass layoffs in Tech 'Middle Management' (2023-2025)",
          "The dismantling of DEI departments (2024-2025)",
          "Return to Office (RTO) mandates as power struggles",
          "Rise of the 'Solopreneur' billion-dollar valuation (AI-enabled post-managerial firm)"
        ]
      }
    }
  },
  "16_radical_egalitarian_redistribution": {
    "name": "Radical Egalitarian Redistribution",
    "description": "This cluster tracks the recurring belief that political democracy is a sham without economic democracy, advocating for the seizure or aggressive redistribution of capital to flatten hierarchies. It moves beyond 'reform' (Cluster 01) or 'safety nets' (Cluster 09) to demand a fundamental restructuring of property relations. It tracks the rise of Socialism, the IWW, the radical labor movement, the CPUSA, the New Left, and the 21st-century Democratic Socialists. Its trajectory is defined by intense spikes of influence during economic crises, followed by fierce state repression (Red Scares) and absorption into the liberal consensus.",
    "trajectory": {
      "1890": {
        "salience_share": 3.5,
        "description": "The cluster simmered at a low but hot baseline (+1.0%) amidst the violent labor wars of the Gilded Age. The catalyst was the stark visibility of the new industrial aristocracy, which prompted the formation of the Socialist Labor Party. Epistemically, it rejected the 'Horatio Alger' myth (Cluster 05), arguing that wealth was theft, not merit. The violent suppression of strikes reinforced the belief that the state was merely the executive committee of the bourgeoisie.",
        "key_manifestations": [
          "Looking Backward by Edward Bellamy (1888/dominance in 90s - Utopian socialism)",
          "Sherman Silver Purchase Act debates (Radical agrarian economics)",
          "Formation of the Socialist Labor Party (1890)",
          "Jacob Riis's photos (Visual evidence for redistribution)"
        ]
      },
      "1895": {
        "salience_share": 4.5,
        "description": "A surge (+1.0%) driven by the Pullman Strike and the arrest of Eugene V. Debs. The catalyst was the Panic of 1893, which radicalized the labor movement from 'bread and butter' unionism to political socialism. Debs' conversion to socialism in jail marked the moment the movement gained a charismatic, American-born leader who could speak the language of the heartland, detaching the ideology from its 'foreign' stigma.",
        "key_manifestations": [
          "The Pullman Strike (1894)",
          "In re Debs (1895 - Supreme Court crushing the strike)",
          "Eugene V. Debs' conversion to Socialism",
          "Coxey's Army (1894 - Demand for public works)"
        ]
      },
      "1900": {
        "salience_share": 5.0,
        "description": "Steady growth (+0.5%). The formation of the Socialist Party of America (1901) provided a unified political vehicle. The displacing force was the rise of Progressivism (Cluster 01), which attempted to co-opt radical demands with moderate regulation. However, the assassination of McKinley by an anarchist (1901) created a backlash, distinguishing 'constructive socialism' from 'destructive anarchism' in the public mind.",
        "key_manifestations": [
          "Formation of the Socialist Party of America (1901)",
          "The Appeal to Reason (Socialist newspaper reach expands)",
          "McKinley Assassination (1901)",
          "Sister Carrie (1900 - Depicting the crushing nature of capitalism)"
        ]
      },
      "1905": {
        "salience_share": 6.5,
        "description": "A sharp rise (+1.5%) with the founding of the Industrial Workers of the World (IWW). The catalyst was the rejection of the AFL's exclusionary craft unionism. The IWW ('Wobblies') introduced a truly radical epistemology: 'One Big Union' and the abolition of the wage system. *The Jungle* (1906) was written as a socialist tract, aiming to hit the public in the heart to spark revolution, though it hit them in the stomach instead.",
        "key_manifestations": [
          "Founding of the IWW (1905)",
          "The Jungle by Upton Sinclair (1906)",
          "The Preamble to the IWW Constitution",
          "Jack London's The Iron Heel (1908 - Dystopian socialism)"
        ]
      },
      "1910": {
        "salience_share": 8.0,
        "description": "The cluster reached its **Golden Age** (+1.5%). The catalyst was the electoral success of the Socialist Party (Debs getting 6% in 1912, mayors elected in Milwaukee/Schenectady). Radical redistribution seemed like a plausible future. The Triangle Shirtwaist Fire (1911) provided the visceral moral proof that capital would kill workers for profit, radicalizing the urban proletariat.",
        "key_manifestations": [
          "Eugene V. Debs' 1912 Presidential Campaign",
          "Triangle Shirtwaist Factory Fire (1911)",
          "Bread and Roses Strike (Lawrence Textile Strike) (1912)",
          "The Masses magazine founded (1911)"
        ]
      },
      "1915": {
        "salience_share": 6.0,
        "description": "A forced decline (-2.0%) due to WWI. The catalyst was the split in the movement: some socialists supported the war, but the radicals (Debs) opposed it as a capitalist bloodbath. This opposition allowed the state to criminalize radicalism via the Espionage Act. The displacing force was nationalism (Cluster 04), which branded international worker solidarity as treason.",
        "key_manifestations": [
          "Espionage Act of 1917 (Used to imprison Debs)",
          "The Bolshevik Revolution (1917 - Inspiring but polarizing US radicals)",
          "Bisbee Deportation (1917 - Violent suppression of IWW)",
          "Debs' Canton, Ohio Speech (1918)"
        ]
      },
      "1920": {
        "salience_share": 2.5,
        "description": "A collapse (-3.5%) driven by the First Red Scare. The catalyst was the Palmer Raids, which physically dismantled the IWW and deporting radical leaders. The 'American Plan' (open shop) became the new consensus. The cultural mood shifted to consumption (Cluster 05), making the austere, collective struggle of socialism unappealing to the 'Roaring Twenties' mindset.",
        "key_manifestations": [
          "Palmer Raids (1919-1920)",
          "Sacco and Vanzetti Trial (1921)",
          "The crushing of the Great Steel Strike (1919)",
          "Main Street (1920 - Satirizing the radical as an outcast)"
        ]
      },
      "1925": {
        "salience_share": 1.5,
        "description": "Nadir (-1.0%). Radicalism retreated to the margins. The displacing force was the apparent success of Welfare Capitalism (Cluster 15). Why seize the means of production if Ford pays $5 a day? The Harlem Renaissance offered a cultural radicalism (Cluster 07), but economic radicalism was dormant, maintained only by a small cadre of intellectuals and the nascent Communist Party.",
        "key_manifestations": [
          "Execution of Sacco and Vanzetti (1927 - The end of an era)",
          "The decline of the Socialist Party vote",
          "The Great Gatsby (1925 - Class envy without class consciousness)",
          "Passaic Textile Strike (1926 - Rare communist-led action)"
        ]
      },
      "1930": {
        "salience_share": 7.5,
        "description": "Explosive resurgence (+6.0%). The Great Depression was the ultimate validation of the radical critique. The catalyst was mass unemployment, which radicalized the average worker. The Communist Party USA (CPUSA) organized the unemployed councils and the Bonus Marchers. Epistemically, 'Capitalism' was viewed by millions as a failed system that needed replacement, not just repair.",
        "key_manifestations": [
          "CPUSA Unemployed Councils",
          "The Bonus Army (1932)",
          "Scottsboro Boys Defense (CPUSA legal strategy)",
          "Ford Hunger March (1932)"
        ]
      },
      "1935": {
        "salience_share": 9.0,
        "description": "Peak Influence (+1.5%). The 'Popular Front' era. The catalyst was the CIO's organizing drives (Sit-Down Strikes), which successfully seized control of factories (property) to force negotiation. While the New Deal (Cluster 01) aimed to save capitalism, it did so by absorbing radical demands (Social Security, Wagner Act). Radicals were the 'foot soldiers' of the New Deal coalition.",
        "key_manifestations": [
          "Flint Sit-Down Strike (1936-37)",
          "Waiting for Lefty (1935)",
          "Formation of the Congress of Industrial Organizations (CIO)",
          "The Grapes of Wrath (1939 - Agrarian radicalism)"
        ]
      },
      "1940": {
        "salience_share": 4.5,
        "description": "Sharp decline (-4.5%). The catalyst was the Nazi-Soviet Pact (1939), which discredited the CPUSA and split the radical left. The war economy (Cluster 15) provided full employment, removing the economic engine of discontent. The Smith Act (1940) criminalized the advocacy of overthrowing the government, preparing the legal ground for the next purge.",
        "key_manifestations": [
          "The Smith Act (1940)",
          "The Nazi-Soviet Pact fallout",
          "Native Son (1940 - Bleakness replacing revolutionary optimism)",
          "Executive Order 8802 (Radicalism channeled into racial justice)"
        ]
      },
      "1945": {
        "salience_share": 3.0,
        "description": "Suppression (-1.5%). The Cold War began. The catalyst was the Taft-Hartley Act (1947), which required union leaders to sign anti-communist affidavits, effectively purging radicals from the labor movement (Cluster 15). The 'Treaty of Detroit' traded radicalism for consumer goods. Redistribution was redefined as 'Growth.'",
        "key_manifestations": [
          "Taft-Hartley Act (1947)",
          "Hollywood Blacklist begins (1947)",
          "The purge of the CIO (1949)",
          "All My Sons (1947 - Moral, not systemic, critique)"
        ]
      },
      "1950": {
        "salience_share": 1.5,
        "description": "Dormancy (-1.5%) under McCarthyism. To be a radical was to be a Soviet agent (Cluster 06). The displacing force was the 'Affluent Society' (Cluster 05/18); the problem of production was solved, so redistribution was seen as a non-issue. Radicalism survived only in small pacifist and civil rights circles.",
        "key_manifestations": [
          "McCarthy Hearings (1950-54)",
          "Invisible Man (1952 - Critique of the Brotherhood/CPUSA)",
          "The Salt of the Earth (1954 - Blacklisted film)",
          "Rosenberg Execution (1953)"
        ]
      },
      "1955": {
        "salience_share": 2.0,
        "description": "Slight stirrings (+0.5%). The Civil Rights movement began to expose the economic roots of racial inequality. The catalyst was the Montgomery Bus Boycott, a collective action that resembled the general strike. C. Wright Mills' *The Power Elite* (1956) reintroduced class analysis to sociology, arguing that democracy had been usurped by a corporate-military oligarchy.",
        "key_manifestations": [
          "The Power Elite by C. Wright Mills (1956)",
          "Montgomery Bus Boycott (1955)",
          "Howl (1956 - Cultural radicalism)",
          "Dissent Magazine founded (1954)"
        ]
      },
      "1960": {
        "salience_share": 4.0,
        "description": "Rise of the New Left (+2.0%). The catalyst was the Port Huron Statement (1962), which shifted focus from 'Old Left' labor struggles to 'alienation' and 'participatory democracy.' While initially middle-class, it radicalized as it connected with the Black Power movement, which increasingly demanded economic reparations (redistribution).",
        "key_manifestations": [
          "Port Huron Statement (1962)",
          "The Other America (1962 - Rediscovery of poverty)",
          "March on Washington for Jobs and Freedom (1963)",
          "One-Dimensional Man (1964)"
        ]
      },
      "1965": {
        "salience_share": 6.0,
        "description": "Peak New Left (+2.0%). The catalyst was the Vietnam War, which was interpreted as 'Imperialism'\u2014the highest stage of capitalism. The Black Panther Party (1966) combined armed self-defense with Marxist-Leninist redistribution (free breakfast programs). MLK's 'Poor People's Campaign' marked his shift toward radical class politics before his assassination.",
        "key_manifestations": [
          "Black Panther Party Ten-Point Program (1966)",
          "MLK's Poor People's Campaign (1968)",
          "The Weather Underground (Radical fringe)",
          "Soul on Ice (1968)"
        ]
      },
      "1970": {
        "salience_share": 4.5,
        "description": "Decline and fragmentation (-1.5%). The 'Hard Hat Riot' (1970) symbolized the divorce between the radical student left and the working class. The displacing force was the cultural turn (Cluster 07/14); radicals went into academia or identity politics. The economic stagnation of the 70s made redistribution a zero-sum game that the white working class rejected.",
        "key_manifestations": [
          "Hard Hat Riot (1970)",
          "Angela Davis Trial (1970-72)",
          "A Theory of Justice by John Rawls (1971 - Liberal redistribution, not radical)",
          "The disintegration of SDS"
        ]
      },
      "1975": {
        "salience_share": 2.5,
        "description": "Retraction (-2.0%). The 'Tax Revolt' (Prop 13) was the exact opposite of radical redistribution: it was a middle-class revolt *against* redistribution. The displacing force was the rise of Neoliberalism (Cluster 05). Radical economics was marginalized in universities. The focus shifted to 'deregulation' to spur growth.",
        "key_manifestations": [
          "Proposition 13 (1978)",
          "The primal scream of the protagonist in Network (1976 - Impotent rage)",
          "Assault on the welfare state rhetoric",
          "Capital gains tax cuts (1978)"
        ]
      },
      "1980": {
        "salience_share": 1.5,
        "description": "Nadir (-1.0%) under Reagan. 'Wealth' was celebrated (Cluster 05), not critiqued. The catalyst was the collapse of the Soviet Union's legitimacy, which made 'Socialism' a synonym for failure. Redistribution became a dirty word ('Class Warfare'). The 'Safety Net' was defended, but expanding it was off the table.",
        "key_manifestations": [
          "Reagan's 'Welfare Queen' rhetoric",
          "The collapse of the Air Traffic Controllers strike (1981)",
          "Wall Street (1987 - Greed as good)",
          "Changes in the Tax Code (1981, 1986 - Flattening progressivity)"
        ]
      },
      "1985": {
        "salience_share": 1.2,
        "description": "Stasis (-0.3%). The 'New Democrats' (DLC) abandoned traditional redistribution for 'opportunity' and 'growth.' The Left focused on the 'Culture Wars' (Cluster 02/07) and apartheid divestment, moving away from domestic class struggle. The homeless crisis sparked some moral outrage, but charity replaced structural change.",
        "key_manifestations": [
          "Hands Across America (1986 - Charity over policy)",
          "Jesse Jackson's Rainbow Coalition (1984/88 - The lingering radical voice)",
          "Do the Right Thing (1989 - Racial frustration over economic)",
          "Decline of private sector union density"
        ]
      },
      "1990": {
        "salience_share": 1.0,
        "description": "Lowest point (-0.2%). The 'End of History' declared capitalism the eternal victor. Welfare Reform (1996) ended the entitlement to federal aid, a bipartisan rejection of redistribution. The catalyst was the dot-com boom, which promised that the market would lift all boats.",
        "key_manifestations": [
          "Welfare Reform Act (1996)",
          "NAFTA (1993 - Global capital mobility)",
          "The End of History (1992)",
          "Rent (1996 - Bohemian poverty as lifestyle, not crisis)"
        ]
      },
      "1995": {
        "salience_share": 1.5,
        "description": "Slight stirrings (+0.5%) via the Anti-Globalization movement. The catalyst was the WTO protests in Seattle (1999). This was the first sign of a new, digital/anarchist left rejecting the neoliberal consensus. 'Global Justice' replaced national redistribution as the framework.",
        "key_manifestations": [
          "Battle of Seattle (WTO Protests) (1999)",
          "No Logo by Naomi Klein (1999)",
          "Empire by Hardt and Negri (2000)",
          "Rage Against the Machine (Cultural radicalism)"
        ]
      },
      "2000": {
        "salience_share": 1.2,
        "description": "Suppression (-0.3%) post-9/11. Dissent was unpatriotic. However, the widening inequality gap began to be documented (Piketty/Saez early data). The displacing force was the War on Terror. Radical energy was channeled into anti-war protest, not economic demand.",
        "key_manifestations": [
          "Nickle and Dimed by Barbara Ehrenreich (2001)",
          "The Corporation (Documentary 2003)",
          "Bush Tax Cuts (2001/2003 - Reverse redistribution)",
          "The anti-war movement dominance"
        ]
      },
      "2005": {
        "salience_share": 2.5,
        "description": "Growth (+1.3%) post-Katrina. The storm exposed the racial and class abyss. The Financial Crisis (2008) discredited the 'efficiency' of the market. The catalyst was the bailout: socialism for the rich, capitalism for the poor. This hypocrisy ignited the latent demand for fairness.",
        "key_manifestations": [
          "Hurricane Katrina response critique (2005)",
          "The Shock Doctrine by Naomi Klein (2007)",
          "Sicko (2007 - Healthcare redistribution demand)",
          "Obama's 'Spread the wealth around' gaffe (2008)"
        ]
      },
      "2010": {
        "salience_share": 6.5,
        "description": "Explosion (+4.0%) with Occupy Wall Street. The phrase 'We are the 99%' reintroduced class consciousness to the mainstream. The catalyst was the jobless recovery. While Occupy faded, it altered the discourse, making 'inequality' a central political term. *Capital in the Twenty-First Century* provided the empirical data to back the rage.",
        "key_manifestations": [
          "Occupy Wall Street (2011)",
          "Capital in the Twenty-First Century by Thomas Piketty (2014)",
          "Fight for $15 movement begins (2012)",
          "Elizabeth Warren's rise (2012)"
        ]
      },
      "2015": {
        "salience_share": 9.0,
        "description": "Political breakthrough (+2.5%) with Bernie Sanders. For the first time in decades, a self-described 'Democratic Socialist' won states in a primary. The catalyst was the Millennial generation's rejection of capitalism (Cluster 05). 'Medicare for All' became a litmus test. The DSA (Democratic Socialists of America) exploded in membership.",
        "key_manifestations": [
          "Bernie Sanders 2016 Campaign",
          "DSA membership surge (2016-)",
          "Sorry to Bother You (2018 - Radical anti-capitalist film)",
          "The Green New Deal proposal (2019)"
        ]
      },
      "2020": {
        "salience_share": 8.5,
        "description": "Stabilization (-0.5%). The pandemic triggered massive state intervention (Stimulus Checks), which was pragmatic redistribution (Cluster 01/09) rather than ideological. The displacing force was the focus on Identity (Cluster 07) and the defeat of Sanders in 2020. However, the labor movement (Amazon, Starbucks) saw a resurgence of 1930s-style organizing tactics.",
        "key_manifestations": [
          "Stimulus Checks (Universal basic income pilot in practice)",
          "Amazon Labor Union victory (2022)",
          "Squid Game (2021 - Global anti-capitalist resonance)",
          "Student Loan Forgiveness debates"
        ]
      },
      "2025": {
        "salience_share": 7.0,
        "description": "Decline (-1.5%). The 'Vibe Shift' away from socialist aesthetics. The displacing force is the rise of populist right-wing economic nationalism (Cluster 13), which offers protectionism rather than redistribution. Radical egalitarianism is retreating to the local level (tenant unions) as the national discourse focuses on 'cost of living' rather than 'system change.'",
        "key_manifestations": [
          "The decline of the 'Squad's' legislative influence",
          "Tenant Union movement growth (2024-2025)",
          "The retreat of 'DEI' in favor of 'Merit' (Cluster 05 resurgence)",
          "Techno-Optimism (AI) displacing redistribution narratives"
        ]
      }
    }
  },
  "17_constitutional_originalism_and_textualism": {
    "name": "Constitutional Originalism & Textualism",
    "description": "This cluster tracks the legal and epistemic movement that asserts the Constitution must be interpreted according to its original public meaning at the time of enactment, rejecting the idea of a 'Living Constitution' that evolves with social norms. It begins as a conservative reaction to the Warren Court, professionalizes through the Federalist Society, and eventually captures the Supreme Court. It represents a shift from 'Moral/Pragmatic' adjudication (Cluster 03/09) to 'Historical/Linguistic' excavation, effectively freezing the moral consensus of the 18th/19th centuries as the binding law of the present.",
    "trajectory": {
      "1890": {
        "salience_share": 5.0,
        "description": "The cluster operated as 'Legal Formalism' (+0.0% baseline). The courts interpreted the Constitution, particularly the Due Process clause, to protect property rights against the new regulatory state. The catalyst was the fear of socialism (Cluster 16). While not called 'Originalism' yet, the method was strictly textual regarding contract rights, ignoring the social reality of the worker.",
        "key_manifestations": [
          "Pollock v. Farmers' Loan & Trust Co. (1895)",
          "In re Debs (1895)",
          "US v. EC Knight Co (1895)",
          "Justice Field's dissents (Proto-formalism)"
        ]
      },
      "1895": {
        "salience_share": 5.5,
        "description": "Slight rise (+0.5%) cementing the 'Lochner Era' logic. The court viewed the text of the Constitution as a fixed barrier against the 'mob' (Populism). The displacing force was the rising democratic demand for regulation, which the court aggressively checked using a rigid reading of 'liberty.'",
        "key_manifestations": [
          "Allgeyer v. Louisiana (1897)",
          "Chicago, Burlington & Quincy Railroad Co. v. Chicago (1897)",
          "Smyth v. Ames (1898)",
          "The concept of 'Substantive Due Process'"
        ]
      },
      "1900": {
        "salience_share": 6.0,
        "description": "Peak Formalism (+0.5%). *Lochner v. New York* (1905) was the apotheosis. The court struck down a 10-hour workday law based on the 'freedom of contract'\u2014a right found in the penumbras of the text but treated as absolute. Holmes\u2019 dissent ('The 14th Amendment does not enact Mr. Herbert Spencer's Social Statics') was the first shot of the coming 'Legal Realism' (Cluster 01/10) revolution.",
        "key_manifestations": [
          "Lochner v. New York (1905)",
          "Champion v. Ames (1903)",
          "Northern Securities Co. dissent (Strict construction)",
          "Oliver Wendell Holmes Jr.'s dissents (The counter-force)"
        ]
      },
      "1905": {
        "salience_share": 5.0,
        "description": "Decline (-1.0%). The 'Brandeis Brief' (1908) introduced sociological data into the courtroom, challenging the textualist monopoly. The catalyst was the obvious physical harm of industrial labor (Cluster 10), which made abstract textualism seem cruel and absurd. Facts began to matter more than the dictionary.",
        "key_manifestations": [
          "Muller v. Oregon (1908 - The Brandeis Brief)",
          "The Pound Lectures on Sociological Jurisprudence",
          "Standard Oil v. US (1911 - Rule of Reason modifying text)",
          "Adair v. United States (1908)"
        ]
      },
      "1910": {
        "salience_share": 4.0,
        "description": "Continued decline (-1.0%). The Progressive Era amendments (16th, 17th) were factual updates to the text, implying the original text was insufficient. The displacing force was the 'Living Constitution' idea\u2014that the law must adapt to modern life. Legal Realism began to dominate law schools.",
        "key_manifestations": [
          "16th Amendment (Overturning Pollock)",
          "17th Amendment",
          "The Path of the Law by Holmes (Influence growing)",
          "Wilson's 'Constitutional Government in the United States' (Darwinian metaphor)"
        ]
      },
      "1915": {
        "salience_share": 3.0,
        "description": "Suppression (-1.0%) during WWI. The text (First Amendment) was subordinated to the emergency (Espionage Act). The court ruled that 'clear and present danger' overrode the textual absolute of 'Congress shall make no law.' Pragmatism (Cluster 09) defeated Textualism.",
        "key_manifestations": [
          "Schenck v. United States (1919)",
          "Abrams v. United States (1919)",
          "Debs v. United States (1919)",
          "The end of the 'Lochner' rigidity in wartime"
        ]
      },
      "1920": {
        "salience_share": 4.5,
        "description": "Resurgence (+1.5%) under Taft. The court returned to striking down child labor laws and minimum wages, citing the fixed text of the 10th and 5th Amendments. The catalyst was the 'Return to Normalcy,' which favored property rights (Cluster 05).",
        "key_manifestations": [
          "Bailey v. Drexel Furniture Co. (1922)",
          "Adkins v. Children's Hospital (1923)",
          "Meyer v. Nebraska (1923)",
          "Pierce v. Society of Sisters (1925)"
        ]
      },
      "1925": {
        "salience_share": 4.0,
        "description": "Stasis (-0.5%). The court held the line against regulation, but the cultural tide was turning. The 'Four Horsemen' of the Supreme Court began to solidify their obstructionist bloc, relying on a rigid reading of the Commerce Clause.",
        "key_manifestations": [
          "Village of Euclid v. Ambler Realty Co. (1926)",
          "Buck v. Bell (1927 - Deference to state, not text)",
          "Gitlow v. New York (1925 - Incorporation, broadening text)",
          "Taft's Court administration"
        ]
      },
      "1930": {
        "salience_share": 2.0,
        "description": "Collapse (-2.0%). The Great Depression made the formalist reading of the Constitution look like a suicide pact. The displacing force was the New Deal. The court initially struck down the NIRA and AAA using originalist arguments (Schechter Poultry), but this provoked a massive political backlash (Court Packing Plan).",
        "key_manifestations": [
          "Schechter Poultry Corp. v. United States (1935)",
          "United States v. Butler (1936)",
          "The Three Musketeers (Liberal justices)",
          "FDR's Court Packing Plan (1937 threat)"
        ]
      },
      "1935": {
        "salience_share": 1.0,
        "description": "Defeat (-1.0%). 'The switch in time that saved nine' (1937). The court abandoned the narrow originalist reading of the Commerce Clause. *West Coast Hotel v. Parrish* ended the Lochner era. The 'Living Constitution'\u2014deference to the legislature in economic matters\u2014became the new orthodoxy.",
        "key_manifestations": [
          "West Coast Hotel Co. v. Parrish (1937)",
          "NLRB v. Jones & Laughlin Steel Corp. (1937)",
          "United States v. Carolene Products Co. (1938 - Footnote 4)",
          "The retirement of the Four Horsemen"
        ]
      },
      "1940": {
        "salience_share": 0.5,
        "description": "Dormancy (-0.5%). The Roosevelt Court dominated. The Constitution was viewed as a flexible instrument for winning the war and managing the economy. Textualism was seen as an archaic tool of reactionaries. Justice Black was a textualist, but a liberal one (absolutist on speech), creating a unique sub-current.",
        "key_manifestations": [
          "Wickard v. Filburn (1942 - Maximalist Commerce Clause)",
          "Korematsu v. United States (1944 - Deference to power over text)",
          "Ex parte Quirin (1942)",
          "Justice Hugo Black's appointment (1937)"
        ]
      },
      "1945": {
        "salience_share": 0.8,
        "description": "Slight rise (+0.3%) via Justice Black's 'Total Incorporation' theory. He argued the 14th Amendment's text *required* applying the Bill of Rights to the states, based on historical intent. This was 'Liberal Originalism'\u2014using history to expand rights, not contract them.",
        "key_manifestations": [
          "Adamson v. California (1947 - Black's dissent)",
          "Everson v. Board of Education (1947)",
          "Shelley v. Kraemer (1948)",
          "The concept of 'Incorporation'"
        ]
      },
      "1950": {
        "salience_share": 1.0,
        "description": "Stasis (+0.2%). The Warren Court began (1953), moving toward broad moral readings (Cluster 03). Originalism was a minority view. *Brown v. Board* was argued partly on historical grounds, but the history was inconclusive, so the court relied on sociology (Cluster 01/14), implicitly rejecting originalism as binding.",
        "key_manifestations": [
          "Brown v. Board of Education (1954)",
          "Youngstown Sheet & Tube Co. v. Sawyer (1952)",
          "Bolling v. Sharpe (1954)",
          "The Warren Court's early activism"
        ]
      },
      "1955": {
        "salience_share": 0.5,
        "description": "Decline (-0.5%). The 'Living Constitution' was the dominant ethos. The court prioritized 'evolving standards of decency' over 1789 intent. The displacing force was the Rights Revolution (Cluster 03), which required breaking with history (segregation) to achieve justice.",
        "key_manifestations": [
          "Trop v. Dulles (1958 - 'Evolving standards')",
          "Cooper v. Aaron (1958)",
          "NAACP v. Alabama (1958)",
          "Roth v. United States (1957)"
        ]
      },
      "1960": {
        "salience_share": 0.2,
        "description": "Nadir (-0.3%). *Griswold v. Connecticut* (1965) found a right to privacy in 'penumbras and emanations'\u2014the exact opposite of textualism. Conservative legal scholars were horrified but lacked a cohesive counter-theory. Originalism was dead in the academy.",
        "key_manifestations": [
          "Griswold v. Connecticut (1965)",
          "Reynolds v. Sims (1964)",
          "Miranda v. Arizona (1966)",
          "Harper v. Virginia Board of Elections (1966)"
        ]
      },
      "1965": {
        "salience_share": 1.0,
        "description": "The seed is planted (+0.8%). The backlash to the Warren Court began. Nixon campaigned on 'strict constructionists.' Robert Bork began publishing articles attacking the 'right to privacy' as unconstitutional judicial invention. The catalyst was the perceived chaos caused by the court's activism.",
        "key_manifestations": [
          "Nixon's 1968 Campaign Rhetoric",
          "Terry v. Ohio (1968)",
          "Robert Bork's 'Neutral Principles' article (1971 context)",
          "Burger Court transition (1969)"
        ]
      },
      "1970": {
        "salience_share": 3.0,
        "description": "Growth (+2.0%). *Roe v. Wade* (1973) was the catalyst. It was viewed by conservatives as a raw exercise of judicial power with no basis in text or history. This unified the legal right. The 'Originalist' movement began to coalesce as a specific intellectual project to delegitimize *Roe*.",
        "key_manifestations": [
          "Roe v. Wade (1973 - The target)",
          "Raoul Berger's 'Government by Judiciary' (1977)",
          "Rehnquist's dissents",
          "Buckley v. Valeo (1976)"
        ]
      },
      "1975": {
        "salience_share": 5.0,
        "description": "Institutionalization (+2.0%). The Federalist Society was founded (1982, roots here). The catalyst was the need to train a new generation of lawyers who rejected the 'Living Constitution.' The displacing force of liberal dominance in law schools created a counter-culture of conservative textualists.",
        "key_manifestations": [
          "Founding of the Federalist Society (1982)",
          "Regents of the Univ. of California v. Bakke (1978)",
          "Reagan's judicial selection criteria formulation",
          "Heritage Foundation's legal center"
        ]
      },
      "1980": {
        "salience_share": 7.5,
        "description": "Political ascendancy (+2.5%). Reagan appointed Scalia (1986) and elevated Rehnquist. Scalia was the avatar of this cluster: he made Originalism intellectually formidable, using wit and rigorous textual analysis to shame the 'Living Constitutionalists.' Attorney General Meese gave a landmark speech (1985) advocating a 'jurisprudence of original intention.'",
        "key_manifestations": [
          "Antonin Scalia's appointment (1986)",
          "Edwin Meese's ABA Speech (1985)",
          "Bork's failed nomination (1987 - A setback that radicalized the movement)",
          "Chevron v. NRDC (1984 - Scalia's administrative textualism)"
        ]
      },
      "1985": {
        "salience_share": 8.5,
        "description": "Entrenchment (+1.0%). Despite Bork's defeat, the method spread. Thomas's appointment (1991) added a more radical, natural-law flavor of originalism. The catalyst was the realization that controlling the courts was the only way to reverse the 1960s (Cluster 03).",
        "key_manifestations": [
          "Clarence Thomas's appointment (1991)",
          "Planned Parenthood v. Casey (1992 - Originalists failed to overturn Roe, fueling anger)",
          "United States v. Lopez (1995 - Revival of Commerce Clause limits)",
          "Scalia's 'A Matter of Interpretation' (1997)"
        ]
      },
      "1990": {
        "salience_share": 9.5,
        "description": "Expansion (+1.0%). Originalism moved from 'Original Intent' (subjective) to 'Original Public Meaning' (objective/textual). This shift (driven by Scalia/Whittington) made it more academically rigorous. The 'Constitution in Exile' narrative grew.",
        "key_manifestations": [
          "Printz v. United States (1997)",
          "City of Boerne v. Flores (1997)",
          "Glucksberg v. Washington (1997 - Rejection of new substantive rights)",
          "The rise of 'New Originalism'"
        ]
      },
      "1995": {
        "salience_share": 11.0,
        "description": "Dominance of the right (+1.5%). *Bush v. Gore* (2000) was a paradox (using Equal Protection aggressively), but the general trend was strict construction. The Second Amendment began to be targeted for an originalist revision (individual right vs militia).",
        "key_manifestations": [
          "United States v. Morrison (2000)",
          "Bush v. Gore (2000 - The pragmatic exception)",
          "Zelman v. Simmons-Harris (2002)",
          "District of Columbia v. Heller (Academic prep phase)"
        ]
      },
      "2000": {
        "salience_share": 12.5,
        "description": "Victory (+1.5%). *DC v. Heller* (2008) was the greatest triumph of the method: overturning decades of precedent based entirely on a linguistic and historical analysis of the 1791 text. Scalia's majority opinion was the textbook example of the cluster in action.",
        "key_manifestations": [
          "District of Columbia v. Heller (2008)",
          "Kelo v. City of New London (2005 - Originalist dissent popularity)",
          "Alito and Roberts appointments (2005/2006)",
          "Crawford v. Washington (2004 - Textualist reform of 6th Amendment)"
        ]
      },
      "2005": {
        "salience_share": 13.0,
        "description": "Steady state (+0.5%). The 'Tea Party' (Cluster 02) popularized 'Constitutional Conservatism,' bringing pocket Constitutions to rallies. The catalyst was the backlash to Obama, framed as constitutional overreach (ACA). Originalism became a populist signifier, not just an elite legal theory.",
        "key_manifestations": [
          "NFIB v. Sebelius (2012 - The textualist twisting to save ACA)",
          "Citizens United v. FEC (2010)",
          "Shelby County v. Holder (2013 - Originalist view of federalism)",
          "The Tea Party's 'Pocket Constitution' fetish"
        ]
      },
      "2010": {
        "salience_share": 14.0,
        "description": "Strategic consolidation (+1.0%). The blocking of Merrick Garland and the appointment of Gorsuch (2017) ensured a textualist majority. Gorsuch represents 'hyper-textualism' (even leading to liberal results like *Bostock*, showing the method's independence from politics).",
        "key_manifestations": [
          "Gorsuch appointment (2017)",
          "Kavanaugh appointment (2018)",
          "Janus v. AFSCME (2018)",
          "The Federalist Society's role as gatekeeper"
        ]
      },
      "2015": {
        "salience_share": 16.0,
        "description": "The Supermajority (+2.0%). Barrett's appointment (2020) solidified a 6-3 originalist court. The method is now the *only* legitimate language of the court; even liberal justices must argue in originalist terms (Kagan: 'We are all originalists now').",
        "key_manifestations": [
          "Amy Coney Barrett appointment (2020)",
          "Bostock v. Clayton County (2020 - Textualism aiding LGBT)",
          "Espinoza v. Montana Department of Revenue (2020)",
          "The 'Shadow Docket' expansion"
        ]
      },
      "2020": {
        "salience_share": 18.0,
        "description": "Revolution (+2.0%). *Dobbs* (2022) and *Bruen* (2022). The court explicitly rejected 'interest balancing' in favor of 'history and tradition.' The catalyst was the raw power of the majority to enforce the methodology. Originalism is now dismantling the administrative state (Chevron deference threat).",
        "key_manifestations": [
          "Dobbs v. Jackson Women's Health Organization (2022)",
          "NYSRPA v. Bruen (2022 - 'History and Tradition' test)",
          "West Virginia v. EPA (2022 - Major Questions Doctrine)",
          "Kennedy v. Bremerton School District (2022)"
        ]
      },
      "2025": {
        "salience_share": 17.0,
        "description": "Backlash and Entrenchment (-1.0%). The radical outcomes of originalism (abortion bans, gun deregulation) have triggered a crisis of legitimacy (Cluster 01/09). The displacing force is the public's rejection of 'rule by the dead.' However, the cluster remains the operating system of the judiciary. A new 'Common Good Constitutionalism' (Vermeule) on the right is beginning to challenge Originalism from an even more radical, moralist direction.",
        "key_manifestations": [
          "Overturning of Chevron Deference (Loper Bright, 2024)",
          "Attacks on Supreme Court Ethics (Delegitimizing the originalists)",
          "Rise of 'Common Good Constitutionalism' (Post-Originalism)",
          "State Supreme Courts rejecting originalism for state constitutions"
        ]
      }
    }
  },
  "18_suburban_conformity_ethos": {
    "name": "Suburban Conformity Ethos",
    "description": "This cluster maps the cultural valuation of sameness, safety, and private domesticity over public engagement and difference. It is spatially rooted in the suburb\u2014a segregated, engineered environment designed to insulate the nuclear family from the chaos of the industrial city. Epistemically, it equates 'Normalcy' with virtue and 'Deviance' with danger. Its trajectory tracks the flight from the city, the mid-century peak of the 'American Dream,' and its slow disintegration into 'suburban gothic,' alienation, and eventually the re-urbanization of the elite.",
    "trajectory": {
      "1890": {
        "salience_share": 1.5,
        "description": "The cluster was in its infancy (+0.5%). The catalyst was the streetcar, which allowed the upper-middle class to flee the smoke and immigrants of the city center. 'Streetcar Suburbs' offered a pastoral fantasy. The ethos was exclusive and aristocratic, not yet a mass phenomenon. The displacing force was the dominant rural/urban divide; the suburb was a niche third space.",
        "key_manifestations": [
          "Llewellyn Park, NJ (Prototype romantic suburb)",
          "The Streetcar Suburb expansion (Brookline, MA)",
          "How the Other Half Lives (1890 - The horror the suburbs fled from)",
          "Olmsted's landscape architecture"
        ]
      },
      "1895": {
        "salience_share": 1.8,
        "description": "Slow growth (+0.3%). The Panic of 1893 slowed construction, but the cultural desire for separation grew. The catalyst was the racial and class panic of the era. Restrictive covenants began to appear, using contract law (Cluster 05) to engineer social conformity. The suburb was marketed as a sanitary, moral zone.",
        "key_manifestations": [
          "Rise of restrictive covenants",
          "Tuxedo Park (Elite enclosure)",
          "The Country of the Pointed Firs (1896 - Rural nostalgia feeding suburban aesthetics)",
          "Garden City movement beginnings"
        ]
      },
      "1900": {
        "salience_share": 2.5,
        "description": "Growth (+0.7%). The 'City Beautiful' movement influenced suburban design. The car was not yet dominant, but the ideal of the single-family home with a lawn was solidifying. The catalyst was the Progressive emphasis on 'environment' shaping character; good homes made good citizens.",
        "key_manifestations": [
          "The City Beautiful Movement",
          "Ladies' Home Journal (Promoting the suburban domestic ideal)",
          "Frank Lloyd Wright's early Prairie Houses",
          "Ebenezer Howard's Garden Cities of To-morrow (1902)"
        ]
      },
      "1905": {
        "salience_share": 3.0,
        "description": "Steady rise (+0.5%). The automobile began to open up land beyond the streetcar lines. The 'Bungalow' craze democratized the aesthetic of the detached house. The ethos was one of 'refined simplicity'\u2014a rejection of Victorian clutter and urban noise.",
        "key_manifestations": [
          "The Bungalow Boom",
          "Ford Model T (1908 - Enabling the future sprawl)",
          "Good Housekeeping magazine",
          "Riverside, Illinois"
        ]
      },
      "1910": {
        "salience_share": 3.5,
        "description": "Continued expansion (+0.5%). Zoning laws began to appear (Los Angeles, 1908), legally enforcing the separation of commerce and residence. This was the DNA of suburbia: a place for living, not working. The displacing force of industrial strife (Cluster 16) made the quiet suburb even more desirable.",
        "key_manifestations": [
          "First municipal zoning ordinances",
          "Tarzan of the Apes (1912 - Investigating the suburbanite's primal fantasy)",
          "The growth of Los Angeles suburbs",
          "Standardization of the mortgage market"
        ]
      },
      "1915": {
        "salience_share": 4.0,
        "description": "Pause during WWI (+0.5%). The focus was on national mobilization. However, the 'Spanish Flu' (1918) reinforced the desire for low-density living as a health necessity. The suburb was a quarantine zone against the contagion of the crowd.",
        "key_manifestations": [
          "1918 Flu Pandemic (Driving flight from density)",
          "Own Your Own Home campaign (1917)",
          "Magnificent Ambersons (1918 - The decline of the old neighborhood)",
          "Introduction of balloon-frame construction"
        ]
      },
      "1920": {
        "salience_share": 6.0,
        "description": "The first boom (+2.0%). The widespread adoption of the car allowed for true sprawl. 'Babbitt' (1922) satirized the conformity of the new middle class\u2014Zenith was the archetypal suburban city. The ethos was 'Boosterism' and 'Keeping up with the Joneses' (Cluster 05).",
        "key_manifestations": [
          "Babbitt by Sinclair Lewis (1922)",
          "The Great Gatsby (1925 - East Egg/West Egg as suburban stratification)",
          "Coral Gables, Florida (Planned suburban utopia)",
          "Radburn, NJ (Design for the motor age)"
        ]
      },
      "1925": {
        "salience_share": 6.5,
        "description": "Peak of the early era (+0.5%). The 'automobility' lifestyle was codified. The displacing force was the nascent critique of 'standardization' by intellectuals, but the masses embraced the comfort. Restrictive covenants were upheld by the Supreme Court (*Corrigan v. Buckley*), enforcing racial conformity.",
        "key_manifestations": [
          "Corrigan v. Buckley (1926)",
          "The growth of the highway system",
          "Middletown (1929 - Documenting the car's impact)",
          "Advertisements for the 'Modern Kitchen'"
        ]
      },
      "1930": {
        "salience_share": 4.0,
        "description": "Collapse (-2.5%). The Depression halted construction. Suburbs became traps of foreclosure. The 'Hooverville' was the anti-suburb. The displacing force was poverty. However, the FHA (1934) was created to save the housing market, inventing the 30-year fixed mortgage that would fuel the post-war explosion.",
        "key_manifestations": [
          "Creation of the FHA (1934)",
          "Foreclosure riots",
          "It Happened One Night (1934 - The road movie escaping domesticity)",
          "HOLC Redlining maps (1933 - Codifying segregation)"
        ]
      },
      "1935": {
        "salience_share": 4.5,
        "description": "Stasis (+0.5%). Greenbelt towns (New Deal planned communities) kept the dream alive as a state project. The ethos shifted from 'exclusive' to 'cooperative.' The *Grapes of Wrath* showed the desire for a home as a fundamental human drive.",
        "key_manifestations": [
          "Greenbelt, Maryland (1937)",
          "The City (Film 1939 - Propaganda for de-urbanization)",
          "FHA mortgage insurance expansion",
          "World's Fair 1939 (Futurama - The highway dream)"
        ]
      },
      "1940": {
        "salience_share": 3.0,
        "description": "Suppression (-1.5%). War halted civilian construction. But the 'defense housing' projects demonstrated mass-production techniques for homes. The desire was pent-up, creating a massive potential energy for the post-war period.",
        "key_manifestations": [
          "Lanham Act housing",
          "Levitt & Sons war contracts",
          "The skeletal beginnings of the GI Bill",
          "Victory Gardens (Suburban ritual in embryo)"
        ]
      },
      "1945": {
        "salience_share": 8.0,
        "description": "Explosion (+5.0%). Levittown (1947). The catalyst was the GI Bill and the housing shortage. The suburb became the reward for winning the war. It was affordable, standardized, and strictly white. The ethos was 'Domestic Containment'\u2014safety from the Cold War and the past.",
        "key_manifestations": [
          "Levittown, NY (1947)",
          "The GI Bill (1944)",
          "Mr. Blandings Builds His Dream House (1948)",
          "Shelley v. Kraemer (1948 - Covenants unenforceable, but social pressure remains)"
        ]
      },
      "1950": {
        "salience_share": 12.0,
        "description": "The **Golden Age** (+4.0%). The suburb *was* America. *I Love Lucy* moved to Connecticut. The mall was invented (1956). Conformity was a virtue (Cluster 04/08). The 'Nuclear Family' became the sole unit of society. The car was the lifeline.",
        "key_manifestations": [
          "Southdale Center (First enclosed mall, 1956)",
          "The Man in the Gray Flannel Suit (1955)",
          "Leave It to Beaver (1957)",
          "Invasion of the Body Snatchers (1956 - Conformity paranoia)"
        ]
      },
      "1955": {
        "salience_share": 13.5,
        "description": "Peak Ethos (+1.5%). The Interstate Highway Act (1956) paved the way for infinite sprawl. The displacing force was the Beat critique, but it was fringe. The 'Feminine Mystique' was incubating in these homes\u2014the boredom of the housewife was the hidden cost.",
        "key_manifestations": [
          "Interstate Highway Act (1956)",
          "Peyton Place (1956 - The rot beneath the surface)",
          "Disneyland (1955 - The ultimate sanitized suburb)",
          "The rise of McDonald's (Suburban food)"
        ]
      },
      "1960": {
        "salience_share": 11.0,
        "description": "Cracks appear (-2.5%). *The Feminine Mystique* (1963) exposed the suburban home as a 'comfortable concentration camp.' The catalyst was the Civil Rights movement demanding entry (blockbusting), destroying the illusion of the white sanctuary. 'Little Boxes' (song) mocked the aesthetic.",
        "key_manifestations": [
          "The Feminine Mystique (1963)",
          "Little Boxes (Song 1962)",
          "Blockbusting panic",
          "Revolutionary Road (1961 - Suburban despair)"
        ]
      },
      "1965": {
        "salience_share": 9.0,
        "description": "Rebellion (-2.0%). The 'Counterculture' (Cluster 19) was a revolt *against* the suburb. Kids fled to Haight-Ashbury. *The Graduate* (1967) defined the generation gap as a rejection of the pool and the plastics. White Flight accelerated, turning the suburb from a 'dream' to a 'fortress.'",
        "key_manifestations": [
          "The Graduate (1967)",
          "Fair Housing Act of 1968 (Legal end of segregation)",
          "Slouching Towards Bethlehem (1968 - Critique of the lifestyle)",
          "Dawn of the Dead (1978 - Mall as zombie hive - seeds here)"
        ]
      },
      "1970": {
        "salience_share": 8.0,
        "description": "Mutation (-1.0%). The 'Stepford Wives' (1972) era. Suburbia became 'Suburban Gothic.' The displacing force was the Energy Crisis, which made the commute expensive. The mall became the town square. The ethos shifted from 'community' to 'defensible space.'",
        "key_manifestations": [
          "The Stepford Wives (1972)",
          "Halloween (1978 - Horror in the suburbs)",
          "The Swimmer (1968 - Surreal decay)",
          "Energy Crisis gas lines (1973/79)"
        ]
      },
      "1975": {
        "salience_share": 7.0,
        "description": "Stagnation (-1.0%). The 'Tax Revolt' (Prop 13) was a suburban defense mechanism. The suburb was no longer about expanding the dream, but hoarding resources (Cluster 05). The 'Latchkey Kid' phenomenon showed the breakdown of the domestic ideal.",
        "key_manifestations": [
          "Proposition 13 (1978)",
          "E.T. (1982 - Broken home suburbia)",
          "Poltergeist (1982 - Built on Indian burial grounds)",
          "Fast Times at Ridgemont High (1982 - Mall culture)"
        ]
      },
      "1980": {
        "salience_share": 8.5,
        "description": "Resurgence (+1.5%). The 'McMansion' era. Reagan promised a return to 1950s values (Cluster 08). The catalyst was the SUV (Minivan), which allowed for even more insulated travel. Gated Communities became the new norm. 'Blue Velvet' (1986) showed the darkness, but people bought the house anyway.",
        "key_manifestations": [
          "Blue Velvet (1986)",
          "The rise of the Gated Community",
          "Introduction of the Minivan (1984)",
          "Ferris Bueller's Day Off (1986 - Celebration of the wealthy suburb)"
        ]
      },
      "1985": {
        "salience_share": 9.0,
        "description": "Peak Excess (+0.5%). The 'Edge City' phenomenon\u2014suburbs with their own office parks, independent of the city. The displacing force was urban crime (Cluster 06), making the suburb the only 'safe' zone. The aesthetic was pastiche and beige.",
        "key_manifestations": [
          "Edge City by Joel Garreau (1991 - Identifying the shift)",
          "Edward Scissorhands (1990 - Satire of pastel conformity)",
          "Home Alone (1990 - The fortress home)",
          "Married... with Children (Satire of the family)"
        ]
      },
      "1990": {
        "salience_share": 7.5,
        "description": "Decline (-1.5%). 'American Beauty' (1999) mood. The catalyst was the 'New Urbanism' movement (Seaside, FL), which tried to fix the suburb by making it look like a town. Gen X viewed the suburb as a soul-sucking void (Cluster 11/19). Nirvana's 'Smells Like Teen Spirit' was the sound of suburban boredom exploding.",
        "key_manifestations": [
          "American Beauty (1999)",
          "The Truman Show (1998 - New Urbanism as prison)",
          "Smells Like Teen Spirit (1991)",
          "Office Space (1999 - The suburban office park hell)"
        ]
      },
      "1995": {
        "salience_share": 6.0,
        "description": "Cultural Exhaustion (-1.5%). Columbine (1999) shattered the myth of safety. The displacing force was the 'Back to the City' movement (gentrification) of the creative class (Cluster 14). *Seinfeld* and *Friends* glorified the urban life, making the suburb look uncool.",
        "key_manifestations": [
          "Columbine Massacre (1999)",
          "Friends/Seinfeld (Urban hegemony)",
          "Bowling Alone (1995 - Suburban isolation)",
          "Pleasantville (1998)"
        ]
      },
      "2000": {
        "salience_share": 7.0,
        "description": "The Housing Bubble (+1.0%). The 'Exurb' boom. The catalyst was cheap credit (Cluster 05). People drove until they qualified. The ethos was purely financial: the house was an ATM. Desperate Housewives (2004) showed the glamorized rot.",
        "key_manifestations": [
          "Desperate Housewives (2004)",
          "The Exurban Boom",
          "Weeds (2005 - Drug dealing to maintain the lifestyle)",
          "McMansion Hell (Blog - later retrospective)"
        ]
      },
      "2005": {
        "salience_share": 4.0,
        "description": "The Crash (-3.0%). The 2008 crisis hit the exurbs hardest. The 'Zombie Subdivision.' The displacing force was the realization that the sprawl was a Ponzi scheme. Millennials preferred the city. The 'Suburban Retrofit' movement began.",
        "key_manifestations": [
          "The foreclosure crisis (2008)",
          "The Walking Dead (2010 - Empty suburbs as apocalypse)",
          "Arcade Fire's The Suburbs (2010 - Nostalgia for a dead world)",
          "Leinberger's 'The Option of Urbanism'"
        ]
      },
      "2010": {
        "salience_share": 3.0,
        "description": "Stagnation (-1.0%). 'Poverty' moved to the suburbs. The inner ring suburbs declined. The elite moved to Brooklyn. The catalyst was the digital economy (Cluster 12) which clustered talent in urban hubs.",
        "key_manifestations": [
          "Ferguson, MO unrest (2014 - Suburban poverty/racial tension)",
          "Gone Girl (2014 - Suburban noir)",
          "The Gentrification of the City",
          "Heroin epidemic in suburbs"
        ]
      },
      "2015": {
        "salience_share": 3.5,
        "description": "Slight Trump bump (+0.5%). Trump appealed to the 'Suburban Housewife' (fear of the city/Cluster 06). But the demographic shift (diversity) was changing the suburb's identity. It was no longer a zone of conformity.",
        "key_manifestations": [
          "Trump's 'Save the Suburbs' rhetoric (2020)",
          "Get Out (2017 - The horror of white liberal suburbia)",
          "Big Little Lies (2017 - Wealthy enclave anxiety)",
          "The diversification of the suburbs"
        ]
      },
      "2020": {
        "salience_share": 5.0,
        "description": "Pandemic Revival (+1.5%). The 'Zoom Town.' The catalyst was COVID-19 and Remote Work (Cluster 12). Millennials finally bought houses. But the ethos is different: it's not about conformity, it's about space and logistics. The '15-minute city' conspiracy (Cluster 06) reflects the tension over suburban design.",
        "key_manifestations": [
          "The Great Migration to the Sunbelt (2020-2022)",
          "WandaVision (2021 - Deconstructing the sitcom suburb)",
          "Don't Worry Darling (2022 - Simulation of the 50s)",
          "Zillow surfing as hobby"
        ]
      },
      "2025": {
        "salience_share": 4.5,
        "description": "Entrenchment (-0.5%). The 'Build-to-Rent' suburb. Institutional investors (BlackRock) own entire neighborhoods. The displacing force is the end of the ownership society. The ethos is 'subscription living.' The suburb is no longer a path to the middle class, but a service one pays for.",
        "key_manifestations": [
          "Rise of Build-to-Rent communities (2024-2025)",
          "The shortage of starter homes",
          "The 'Suburban Retrofit' of malls into apartments",
          "White Noise (Film 2022 - Resonance of toxic event in suburbia)"
        ]
      }
    }
  },
  "19_countercultural_authenticity_seeking": {
    "name": "Countercultural Authenticity Seeking",
    "description": "This cluster tracks the recurring cultural imperative to reject the 'mainstream' (the fake, the plastic, the commercial) in favor of the 'real' (the raw, the handmade, the forbidden). It is the shadow of the Suburban/Corporate ethos (Cluster 15/18). It posits that truth is found in the margins, the underground, and the primitive. Its trajectory oscillates between genuine rebellion and inevitable commodification, as 'cool' becomes the primary engine of consumer capitalism.",
    "trajectory": {
      "1890": {
        "salience_share": 1.0,
        "description": "The cluster existed as 'Bohemianism.' The catalyst was the reaction against Victorian prudery. Trilby (1894) popularized the artist's life. It was a niche elite pursuit.",
        "key_manifestations": [
          "Trilby by George du Maurier (1894)",
          "The Yellow Book aesthetic",
          "Walt Whitman's later years (The authentic American voice)",
          "Huckleberry Finn (1884 - The flight from 'sivilization')"
        ]
      },
      "1895": {
        "salience_share": 1.2,
        "description": "Steady (+0.2%). The 'Arts and Crafts' movement sought authenticity in the handmade against the industrial. The displacing force was the depression, which made survival more important than style.",
        "key_manifestations": [
          "Elbert Hubbard's Roycroft community",
          "The Arts and Crafts movement influence",
          "Stephen Crane's Bowery sketches (Slumming for truth)",
          "The Chap-Book"
        ]
      },
      "1900": {
        "salience_share": 1.5,
        "description": "Growth (+0.3%). Greenwich Village began to form as a distinct space. The catalyst was the influx of radicals and artists fleeing bourgeois norms. 'Muckraking' (Cluster 10) was the political authenticity; this was the aesthetic.",
        "key_manifestations": [
          "Greenwich Village beginnings",
          "Isadora Duncan's dance (Natural movement)",
          "Sister Carrie (1900 - The allure of the city)",
          "The Call of the Wild (1903 - Primal authenticity)"
        ]
      },
      "1905": {
        "salience_share": 2.0,
        "description": "Rise (+0.5%). The Ashcan School painted the grit of the city, rejecting the 'City Beautiful.' The displacing force was the polish of the Gilded Age. Authenticity meant dirt.",
        "key_manifestations": [
          "The Ashcan School (Sloan, Bellows)",
          "The Jungle (1906 - Unintended authenticity of disgust)",
          "Stieglitz's 291 Gallery",
          "Emma Goldman's Mother Earth"
        ]
      },
      "1910": {
        "salience_share": 3.0,
        "description": "The 'Lyrical Left' (+1.0%). The Armory Show (1913) brought Modernism\u2014the 'shock of the new.' The catalyst was the desire to smash the 'Genteel Tradition.' The Paterson Pageant united labor and art.",
        "key_manifestations": [
          "The Armory Show (1913)",
          "The Paterson Strike Pageant (1913)",
          "The Masses magazine",
          "Mabel Dodge Luhan's salon"
        ]
      },
      "1915": {
        "salience_share": 4.0,
        "description": "Surge (+1.0%). WWI Disillusionment. Dada (Cluster 11) was the extreme form. The catalyst was the lie of 'Civilization.' Jazz began to emerge as the sound of authentic energy.",
        "key_manifestations": [
          "Dada movement",
          "The rise of Jazz in New Orleans",
          "Randolph Bourne's essays ('War is the Health of the State')",
          "Provincetown Players"
        ]
      },
      "1920": {
        "salience_share": 5.5,
        "description": "The 'Lost Generation' (+1.5%). Paris was the capital of authenticity. The catalyst was Prohibition (Cluster 08), which made breaking the law 'cool.' The Flapper rebelled against Victorian gender.",
        "key_manifestations": [
          "The Sun Also Rises (1926)",
          "Harlem Renaissance (Black authenticity)",
          "The Flapper lifestyle",
          "The Great Gatsby (1925 - The inauthentic self)"
        ]
      },
      "1925": {
        "salience_share": 6.0,
        "description": "Peak Jazz Age (+0.5%). 'Slumming' in Harlem became a white obsession\u2014seeking the 'primitive' vitality of Black culture. The displacing force was commodification. Authenticity was already being sold.",
        "key_manifestations": [
          "The Jazz Singer (1927 - Authenticity via mask)",
          "Cotton Club vogue",
          "The Waste Land (1922 - Shoring fragments against ruin)",
          "Show Boat (1927)"
        ]
      },
      "1930": {
        "salience_share": 3.0,
        "description": "Crash (-3.0%). The Depression killed the 'style' rebellion. Authenticity became 'Folk'\u2014Woody Guthrie, the worker. The catalyst was poverty. The 'fake' was the rich man.",
        "key_manifestations": [
          "Woody Guthrie's music",
          "Let Us Now Praise Famous Men (1941 - Brutal realism)",
          "Waiting for Lefty (1935)",
          "Lead Belly"
        ]
      },
      "1935": {
        "salience_share": 3.5,
        "description": "Stasis (+0.5%). The Popular Front celebrated the 'Common Man.' Swing music was the mass culture version. The Zoot Suit appeared as a subcultural rebellion of style.",
        "key_manifestations": [
          "The Zoot Suit subculture",
          "Swing Music craze",
          "Billie Holiday's Strange Fruit",
          "Native Son (1940)"
        ]
      },
      "1940": {
        "salience_share": 2.0,
        "description": "Suppression (-1.5%). WWII demanded conformity (Cluster 04/18). The Zoot Suit Riots (1943) showed that difference was treasonous. Bebop began to form in the underground\u2014complex, difficult, anti-commercial.",
        "key_manifestations": [
          "Zoot Suit Riots (1943)",
          "Birth of Bebop (Parker/Gillespie)",
          "Noir film aesthetic (The dark truth)",
          "The Stranger (Camus - 1942/US influence later)"
        ]
      },
      "1945": {
        "salience_share": 2.5,
        "description": "The Hipster emerges (+0.5%). The catalyst was the Bomb and the Holocaust. Existentialism. The 'White Negro' (Mailer). The biker gang (The Wild One).",
        "key_manifestations": [
          "The Wild One (1953 - 'What are you rebelling against?')",
          "Noir films peak",
          "Existentialism's arrival in US",
          "Abstract Expressionism (Authentic gesture)"
        ]
      },
      "1950": {
        "salience_share": 4.5,
        "description": "The Beat Generation (+2.0%). *On the Road*. The catalyst was 'The Organization Man' (Cluster 15/18). The Beat rejected the rat race for 'IT.' Rock n' Roll (Elvis) brought Black authenticity to white youth.",
        "key_manifestations": [
          "On the Road (1957)",
          "Howl (1956)",
          "Elvis Presley (1956)",
          "Rebel Without a Cause (1955)"
        ]
      },
      "1955": {
        "salience_share": 5.5,
        "description": "Growth (+1.0%). The 'Teenager' became a distinct market. The displacing force was the speed of commodification. But the underground persisted in jazz and poetry.",
        "key_manifestations": [
          "The Blackboard Jungle (1955)",
          "Catcher in the Rye (Paperback boom)",
          "Miles Davis' Kind of Blue (1959 - Cool)",
          "Playboy (1953 - Rebellion via hedonism)"
        ]
      },
      "1960": {
        "salience_share": 8.0,
        "description": "The Counterculture (+2.5%). Folk Revival (Dylan). The catalyst was the Civil Rights movement and the Pill. Authenticity meant 'acoustic,' 'natural,' 'unplugged.'",
        "key_manifestations": [
          "Bob Dylan (Freewheelin' 1963)",
          "The Feminine Mystique (1963)",
          "Ken Kesey's Merry Pranksters (1964)",
          "Port Huron Statement"
        ]
      },
      "1965": {
        "salience_share": 12.0,
        "description": "Explosion (+4.0%). The Summer of Love (1967). Woodstock (1969). The catalyst was LSD and Vietnam. 'The System' was plastic; the 'Freak' was real. The underground press.",
        "key_manifestations": [
          "Summer of Love (1967)",
          "Woodstock (1969)",
          "Easy Rider (1969)",
          "Electric Kool-Aid Acid Test (1968)"
        ]
      },
      "1970": {
        "salience_share": 10.0,
        "description": "Commodification/Decay (-2.0%). Altamont (1969). Manson. The counterculture sold out. Punk began to form as a reaction to the 'bloated' hippie authenticity. '70s cinema (New Hollywood) was the peak of authentic grit.",
        "key_manifestations": [
          "Taxi Driver (1976)",
          "Altamont Free Concert (1969)",
          "Fear and Loathing (1971)",
          "CBGB's founding (1973)"
        ]
      },
      "1975": {
        "salience_share": 8.5,
        "description": "Punk (+-1.5%). The catalyst was the malaise. Punk rejected 'Peace and Love' for 'Anarchy and Noise.' Hip Hop was born in the Bronx\u2014ultimate DIY authenticity.",
        "key_manifestations": [
          "The Ramones (1976)",
          "Sex Pistols (US Tour 1978)",
          "Birth of Hip Hop (Bronx parties)",
          "Apocalypse Now (1979 - The horror of truth)"
        ]
      },
      "1980": {
        "salience_share": 6.0,
        "description": "Suppression (-2.5%). MTV (Cluster 11). Authenticity was replaced by 'Image.' Hardcore Punk and Indie Rock went underground (Black Flag, REM) to preserve the flame.",
        "key_manifestations": [
          "MTV Launch (1981)",
          "Black Flag/Hardcore scene",
          "Style Wars (1983 - Graffiti authenticity)",
          "Madonna (Authentic inauthenticity)"
        ]
      },
      "1985": {
        "salience_share": 5.5,
        "description": "The Underground bubbles (-0.5%). Rap went mainstream (Run DMC). 'Alternative' was incubating. The catalyst was the blandness of the Reagan era.",
        "key_manifestations": [
          "Run-DMC (1984)",
          "Blue Velvet (1986)",
          "Do the Right Thing (1989)",
          "Sonic Youth (Daydream Nation 1988)"
        ]
      },
      "1990": {
        "salience_share": 9.0,
        "description": "The Grunge Explosion (+3.5%). Nirvana. 'Selling Out' was the ultimate sin. The catalyst was Gen X cynicism. Gangsta Rap offered violent realism. Reality Bites.",
        "key_manifestations": [
          "Nevermind (1991)",
          "N.W.A. (Efil4zaggin 1991)",
          "Reality Bites (1994)",
          "Slacker (1991)"
        ]
      },
      "1995": {
        "salience_share": 7.0,
        "description": "Instant Co-option (-2.0%). Hot Topic. 'Alternative' became a marketing category. The displacing force was the internet bubble. Authenticity became 'Indie' (Pitchfork).",
        "key_manifestations": [
          "Woodstock '99 (The death of the ideal)",
          "Fight Club (1999 - Critique of the Ikea nesting instinct)",
          "OK Computer (1997 - Alienation)",
          "Adbusters (Culture jamming)"
        ]
      },
      "2000": {
        "salience_share": 6.0,
        "description": "The Hipster (+-1.0%). Williamsburg. The catalyst was the desire for the 'curated' life. Irony (Cluster 11) mixed with artisanal pickles. The garage rock revival (The Strokes).",
        "key_manifestations": [
          "The Strokes (Is This It 2001)",
          "Vice Magazine",
          "American Apparel aesthetic",
          "Ghost World (2001)"
        ]
      },
      "2005": {
        "salience_share": 5.5,
        "description": "Stasis (-0.5%). 'Indie' went mainstream (The O.C.). The displacing force was the iPod\u2014the infinite playlist destroyed the subculture. Authenticity became a 'filter' (Instagram precursor).",
        "key_manifestations": [
          "Garden State (2004 - Indie twee)",
          "Pitchfork's influence",
          "Youtube vlogging (Early authentic connection)",
          "Hipster Runoff (Blog satirizing the scene)"
        ]
      },
      "2010": {
        "salience_share": 4.5,
        "description": "Normcore (-1.0%). Authenticity was so exhausted that wearing dad jeans became the rebellion. The catalyst was algorithm culture (Cluster 12). 'Kinfolk' aesthetic\u2014perfectly staged authenticity.",
        "key_manifestations": [
          "Normcore trend (2013)",
          "Kinfolk Magazine",
          "Mumford & Sons (Fake folk)",
          "Portlandia (Satire of the cluster)"
        ]
      },
      "2015": {
        "salience_share": 5.0,
        "description": "Political Authenticity (+0.5%). Bernie/Trump. People wanted 'outsiders.' The displacing force was the polished politician. 'Cottagecore' emerged as a digital retreat to the rural.",
        "key_manifestations": [
          "Cottagecore trend",
          "Trump's Tweets (Authentic id)",
          "Bernie's unkempt hair",
          "Vaping (The synthetic rebellion)"
        ]
      },
      "2020": {
        "salience_share": 3.5,
        "description": "The 'Vibe Shift' (-1.5%). The 'Goblin Mode.' The pandemic destroyed the curated life. Authenticity is now 'posting Ls' or being 'feral.' The displacing force is AI (Cluster 12)\u2014if nothing is real, the messy human is the only truth.",
        "key_manifestations": [
          "Goblin Mode (Word of the year 2022)",
          "BeReal (App)",
          "The 'Indie Sleaze' revival (Nostalgia for 2005)",
          "Dimes Square scene (Reactionary authenticity)"
        ]
      },
      "2025": {
        "salience_share": 3.0,
        "description": "Human-Only (-0.5%). Authenticity is defined strictly as 'Non-AI.' The displacing force is the flood of synthetic sludge. The new counterculture is 'analog'\u2014flip phones, zines, physical media. The 'luddite' is the new punk.",
        "key_manifestations": [
          "Flip phone revival among Gen Z",
          "Physical media sales spike (Vinyl/Cassette)",
          "'No-AI' certification labels on art",
          "The return of the private rave (Phone-free zones)"
        ]
      }
    }
  },
  "20_globalist_interdependence": {
    "name": "Globalist Interdependence",
    "description": "This cluster tracks the conviction that the nation-state is insufficient to manage modern problems (economics, war, climate) and that a supranational order of law, trade, and institutions is required. It is the antithesis of Isolationist Exceptionalism (Cluster 13). It rises with Wilsonian idealism, collapses in the 1930s, triumphs in 1945 ('The Liberal International Order'), peaks in the 1990s ('Globalization'), and enters a crisis of legitimacy in the populist era.",
    "trajectory": {
      "1890": {
        "salience_share": 2.0,
        "description": "Low baseline (+0.5%). The catalyst was the need for markets. Mahan's *The Influence of Sea Power* (1890) argued for a global navy, but the goal was national power, not interdependence. The 'Open Door' was the seed.",
        "key_manifestations": [
          "The Influence of Sea Power Upon History (1890)",
          "Pan-American Conference (1889)",
          "McKinley Tariff (1890 - Anti-globalist action)",
          "First International Copyright Act (1891)"
        ]
      },
      "1895": {
        "salience_share": 2.5,
        "description": "Rise (+0.5%). The Venezuelan Crisis (1895) asserted US primacy, but also engagement. The catalyst was the closing of the frontier; the US had to look out.",
        "key_manifestations": [
          "Olney Corollary (1895)",
          "Venezuelan Boundary Dispute",
          "The White Man's Burden (1899 context)",
          "Rise of export markets"
        ]
      },
      "1900": {
        "salience_share": 4.0,
        "description": "Imperial Globalism (+1.5%). 1898 War. The US became a Pacific power. The 'Open Door Notes' (1899) were the first statement of a global trading order managed by rules.",
        "key_manifestations": [
          "Open Door Notes (1899)",
          "Annexation of the Philippines",
          "Hague Conventions (1899)",
          "The Boxers (Reaction to globalism)"
        ]
      },
      "1905": {
        "salience_share": 4.5,
        "description": "Mediator Power (+0.5%). TR won the Nobel Peace Prize for the Treaty of Portsmouth. The catalyst was the realization that a war in Asia affected the US. The Great White Fleet.",
        "key_manifestations": [
          "Treaty of Portsmouth (1905)",
          "Great White Fleet tour (1907)",
          "Algeciras Conference (1906)",
          "Root-Takahira Agreement (1908)"
        ]
      },
      "1910": {
        "salience_share": 5.0,
        "description": "Legalism (+0.5%). 'Dollar Diplomacy.' The belief that arbitration treaties could end war. The Carnegie Endowment for International Peace (1910).",
        "key_manifestations": [
          "The Great Illusion by Norman Angell (1910 - Trade prevents war myth)",
          "Carnegie Endowment for International Peace (1910)",
          "Dollar Diplomacy",
          "Proposed arbitration treaties"
        ]
      },
      "1915": {
        "salience_share": 7.5,
        "description": "Wilsonian Idealism (+2.5%). The catalyst was WWI. Wilson argued the old 'Balance of Power' failed; a 'League of Nations' was needed. This was the birth of modern Globalism.",
        "key_manifestations": [
          "League to Enforce Peace (1915)",
          "Fourteen Points (1918)",
          "Wilson's 'Peace Without Victory' speech",
          "Entry into WWI (1917)"
        ]
      },
      "1920": {
        "salience_share": 3.0,
        "description": "The Great Rejection (-4.5%). The Senate rejected the League. The displacing force was Cluster 13. However, unofficial financial globalism (Dawes Plan) continued.",
        "key_manifestations": [
          "Rejection of Versailles Treaty (1920)",
          "Washington Naval Conference (1921 - Limited multilateralism)",
          "The Economic Consequences of the Peace (1919)",
          "Dawes Plan (1924)"
        ]
      },
      "1925": {
        "salience_share": 3.5,
        "description": "Banker's Globalism (+0.5%). US capital flooded Europe. The Kellogg-Briand Pact (1928) outlawed war\u2014a high water mark of naive legal globalism.",
        "key_manifestations": [
          "Kellogg-Briand Pact (1928)",
          "Young Plan (1929)",
          "Locarno Treaties (US support)",
          "Expansion of US multinationals (Ford in Europe)"
        ]
      },
      "1930": {
        "salience_share": 1.5,
        "description": "Collapse (-2.0%). Smoot-Hawley (1930) killed trade. The London Economic Conference (1933) failed when FDR torpedoed it to save the domestic dollar. Economic nationalism reigned.",
        "key_manifestations": [
          "Smoot-Hawley Tariff (1930)",
          "Failure of London Economic Conference (1933)",
          "Rise of Autarky (Germany/Japan)",
          "Collapse of the Gold Standard"
        ]
      },
      "1935": {
        "salience_share": 2.0,
        "description": "Stasis (+0.5%). Reciprocal Trade Agreements Act (1934) started the slow rebuild. But the Neutrality Acts checked political globalism.",
        "key_manifestations": [
          "Reciprocal Trade Agreements Act (1934)",
          "Good Neighbor Policy (Regional globalism)",
          "Neutrality Acts (The barrier)",
          "Kristallnacht (Global outcry but no action)"
        ]
      },
      "1940": {
        "salience_share": 8.0,
        "description": "Resurrection (+6.0%). One World. The catalyst was Pearl Harbor. 'The United Nations' (the allies) became the blueprint for the post-war order. Bretton Woods (1944).",
        "key_manifestations": [
          "Atlantic Charter (1941)",
          "Bretton Woods Conference (1944)",
          "Dumbarton Oaks Conference (1944)",
          "One World by Wendell Willkie (1943)"
        ]
      },
      "1945": {
        "salience_share": 12.0,
        "description": "The New Order (+4.0%). UN, IMF, World Bank. The US accepted the role of hegemon. The displacing force of isolationism was dead. The Cold War required a global alliance system (NATO).",
        "key_manifestations": [
          "UN Charter (1945)",
          "NATO (1949)",
          "The Marshall Plan (1948)",
          "GATT (1947)"
        ]
      },
      "1950": {
        "salience_share": 11.5,
        "description": "Containment Globalism (-0.5%). The focus narrowed to the 'Free World.' The Korean War tested the UN's police power. The catalyst was anti-communism, which unified the West.",
        "key_manifestations": [
          "NSC-68",
          "Korean War (UN Action)",
          "Point Four Program (Development aid)",
          "Treaty of San Francisco (1951)"
        ]
      },
      "1955": {
        "salience_share": 12.0,
        "description": "Steady State (+0.5%). The EEC (Europe) formed with US blessing. The jet age began, shrinking the world physically. 'Modernization Theory' posited a global path to US-style democracy.",
        "key_manifestations": [
          "Treaty of Rome (1957 - EEC)",
          "The Ugly American (1958 - Critique of bad globalism)",
          "Jet travel expansion (707 in 1958)",
          "Eisenhower Doctrine"
        ]
      },
      "1960": {
        "salience_share": 13.0,
        "description": "Idealist Expansion (+1.0%). The Peace Corps. The catalyst was JFK's inaugural. The Kennedy Round of trade talks lowered tariffs. The world was a 'Global Village' (McLuhan).",
        "key_manifestations": [
          "Peace Corps (1961)",
          "Understanding Media (Global Village) (1964)",
          "Kennedy Round (GATT)",
          "Telstar (1962 - Satellite communication)"
        ]
      },
      "1965": {
        "salience_share": 11.0,
        "description": "Imperial Overstretch (-2.0%). Vietnam discredited the 'Global Policeman.' The displacing force was the New Left's critique of globalism as neo-colonialism. The gold drain threatened Bretton Woods.",
        "key_manifestations": [
          "Vietnam War protests",
          "The Arrogance of Power by Fulbright (1966)",
          "Gold Pool crisis",
          "Space Ship Earth (Fuller)"
        ]
      },
      "1970": {
        "salience_share": 9.0,
        "description": "Shock (-2.0%). Nixon Shock (1971) ended Bretton Woods fixed rates. The Oil Crisis (1973) showed the dark side of interdependence. The Trilateral Commission formed to save the order.",
        "key_manifestations": [
          "Nixon Shock (1971)",
          "OPEC Embargo (1973)",
          "Trilateral Commission (1973)",
          "D\u00e9tente (Realist globalism)"
        ]
      },
      "1975": {
        "salience_share": 10.0,
        "description": "Human Rights Globalism (+1.0%). Carter. Helsinki Accords (1975). The catalyst was the need for a moral foreign policy. NGOs (Amnesty, Human Rights Watch) became global players.",
        "key_manifestations": [
          "Helsinki Accords (1975)",
          "Camp David Accords (1978)",
          "Human Rights Watch founding (1978)",
          "Panama Canal Treaty (Giving it back)"
        ]
      },
      "1980": {
        "salience_share": 11.0,
        "description": "Neoliberal Globalism (+1.0%). The Debt Crisis (Latin America) empowered the IMF. The 'Washington Consensus' began. Reagan favored free trade despite nationalist rhetoric.",
        "key_manifestations": [
          "Third World Debt Crisis (1982)",
          "Live Aid (1985 - Pop culture globalism)",
          "Plaza Accord (1985)",
          "We Are the World (1985)"
        ]
      },
      "1985": {
        "salience_share": 12.5,
        "description": "Acceleration (+1.5%). The Single European Act. The end of the Cold War seemed near. Markets opened. The catalyst was the failure of autarky.",
        "key_manifestations": [
          "Fall of the Berlin Wall (1989)",
          "Canada-US Free Trade Agreement (1988)",
          "McDonald's in Moscow (1990)",
          "CNN International"
        ]
      },
      "1990": {
        "salience_share": 15.0,
        "description": "The New World Order (+2.5%). The Gulf War (UN sanctioned). The End of History. NAFTA. The WTO. Globalism was the only game in town.",
        "key_manifestations": [
          "WTO founded (1995)",
          "NAFTA (1994)",
          "The World Is Flat (Precursor ideas)",
          "Gulf War Coalition"
        ]
      },
      "1995": {
        "salience_share": 16.5,
        "description": "Peak Globalization (+1.5%). The Internet connected everyone. The Asian Financial Crisis (1997) was a hiccup managed by the Fed. 'Globalist' was a compliment.",
        "key_manifestations": [
          "Kyoto Protocol (1997)",
          "Battle of Seattle (1999 - The resistance begins)",
          "The Lexus and the Olive Tree (1999)",
          "Euro launch (1999)"
        ]
      },
      "2000": {
        "salience_share": 14.5,
        "description": "Security Globalism (-2.0%). 9/11 hardened borders. But China joined the WTO (2001), the economic pivot. The catalyst was the War on Terror requiring allies.",
        "key_manifestations": [
          "China joins WTO (2001)",
          "Coalition of the Willing",
          "Global War on Terror",
          "Bono/Gates Foundation (Philanthro-capitalism)"
        ]
      },
      "2005": {
        "salience_share": 13.0,
        "description": "Strain (-1.5%). The Doha Round failed. The Iraq War divided the West. The catalyst was the rising inequality attributed to outsourcing.",
        "key_manifestations": [
          "Failure of Doha Round",
          "The World Is Flat (2005 - Peak hubris)",
          "Inconvenient Truth (2006 - Global climate consciousness)",
          "Rise of BRICS"
        ]
      },
      "2010": {
        "salience_share": 10.0,
        "description": "The Crisis (-3.0%). The Eurozone Crisis. The Great Recession. Globalism was blamed for the contagion. Occupy and Tea Party agreed: the global elite failed.",
        "key_manifestations": [
          "Eurozone Crisis (2010-)",
          "Trans-Pacific Partnership (TPP) negotiations (Elite project)",
          "WikiLeaks (Global transparency)",
          "Paris Agreement (2015 - Last gasp of consensus)"
        ]
      },
      "2015": {
        "salience_share": 7.5,
        "description": "The Backlash (-2.5%). Brexit. Trump. 'Globalist' became a slur (Cluster 06). The catalyst was the refugee crisis and deindustrialization. The border returned.",
        "key_manifestations": [
          "Brexit Vote (2016)",
          "Trump withdraws from TPP/Paris",
          "Davos Man (Derogatory term)",
          "The Great Wall rhetoric"
        ]
      },
      "2020": {
        "salience_share": 5.0,
        "description": "Decoupling (-2.5%). The Pandemic broke supply chains. 'Resilience' replaced 'Efficiency.' The catalyst was the realization that interdependence was a vulnerability (masks, chips).",
        "key_manifestations": [
          "Global Supply Chain Crisis (2021)",
          "Vaccine Nationalism",
          "US-China Decoupling talk",
          "Russia sanctions (Weaponized interdependence)"
        ]
      },
      "2025": {
        "salience_share": 4.0,
        "description": "Fragmented Globalism (-1.0%). 'Friend-shoring.' The world splits into blocs. The displacing force is Geopolitics. Global problems (AI, Climate) remain, but global solutions are impossible. The order is multipolar and transactional.",
        "key_manifestations": [
          "Expansion of BRICS+ (2024)",
          "The splinter internet (Splinternet)",
          "Carbon Border Taxes",
          "The irrelevance of the UN Security Council"
        ]
      }
    }
  },
  "21_ecological_stewardship_and_planetary_limits": {
    "name": "Ecological Stewardship & Planetary Limits",
    "description": "This cluster tracks the epistemic shift from viewing the natural world as an infinite reservoir for conquest ('Manifest Destiny') to viewing it as a finite, interconnected system requiring stewardship or radical preservation. It maps the evolution of 'Nature' from an adversary to a victim, and finally to an existential threat (Climate Change). The trajectory moves from elite conservationism (1890s) to resource extraction dominance (1920s/50s), re-emerging as the modern environmental movement (1960s/70s), and culminating in the apocalyptic 'Climate Crisis' narrative of the 21st century.",
    "trajectory": {
      "1890": {
        "salience_share": 1.5,
        "description": "The cluster operated at a niche, elite level (+0.5% baseline). The catalyst was the 'Closing of the Frontier' (declared by the 1890 Census), which introduced the novel concept of spatial scarcity to the American mind. John Muir and the Sierra Club (1892) began to articulate a preservationist ethic\u2014that nature had intrinsic spiritual value separate from its economic utility (Cluster 05). However, this was a minority view against the dominant ethos of industrial extraction and the 'conquest of the wild.'",
        "key_manifestations": [
          "The Census of 1890 (Declaring the frontier closed)",
          "Founding of the Sierra Club (1892)",
          "Establishment of Yosemite National Park (1890)",
          "Forest Reserve Act of 1891"
        ]
      },
      "1895": {
        "salience_share": 1.8,
        "description": "Slight growth (+0.3%). The displacing force of economic depression led to calls for more efficient resource use, not just preservation. The 'Conservation' movement (Gifford Pinchot) began to distinguish itself from Muir's 'Preservation,' arguing for the 'wise use' of timber and water to fuel the industrial state. This marked the beginning of the internal split within the cluster: nature as cathedral vs. nature as crop.",
        "key_manifestations": [
          "Gifford Pinchot's early forestry work",
          "The founding of the New York Zoological Society (1895)",
          "Bird Day established (1894 - Early education)",
          "Adirondack Park protections (Forever Wild clause)"
        ]
      },
      "1900": {
        "salience_share": 3.0,
        "description": "A significant rise (+1.2%) under Theodore Roosevelt. The catalyst was the presidency of a 'naturalist' who viewed the outdoors as the forge of American character (Cluster 04). Conservation became state policy. The Lacey Act (1900) was the first federal law protecting wildlife, acknowledging that the market (Cluster 05) would exterminate species (like the bison/birds) if left unregulated. The epistemic standard shifted: the state had a duty to manage the earth for future generations.",
        "key_manifestations": [
          "The Lacey Act of 1900",
          "Theodore Roosevelt's creation of National Wildlife Refuges (1903-)",
          "The Call of the Wild (1903 - Nature as primal truth)",
          "Newlands Reclamation Act (1902 - Remaking nature)"
        ]
      },
      "1905": {
        "salience_share": 3.5,
        "description": "Continued growth (+0.5%). The creation of the U.S. Forest Service institutionalized the 'scientific management' of nature. The catalyst was the realization that timber resources were plummeting. However, the Hetch Hetchy Valley controversy began to heat up, pitting the preservationists (Muir) against the utilitarians (Pinchot) in a battle for the soul of the cluster. The dominant view was still utilitarian: nature exists to serve man.",
        "key_manifestations": [
          "Establishment of the U.S. Forest Service (1905)",
          "Creation of the National Monuments Act (Antiquities Act) (1906)",
          "White Fang (1906)",
          "The Hetch Hetchy Valley debate begins"
        ]
      },
      "1910": {
        "salience_share": 2.5,
        "description": "A decline (-1.0%) as the utilitarian faction won. The damming of Hetch Hetchy (approved 1913) was a crushing defeat for the spiritual view of nature. The displacing force was the needs of the growing city (San Francisco) and the technocratic belief in engineering (Cluster 01). Nature was reduced to 'acre-feet' of water and 'board-feet' of lumber. The romantic preservationist movement retreated into mourning.",
        "key_manifestations": [
          "The Raker Act (1913 - Damming Hetch Hetchy)",
          "Death of John Muir (1914)",
          "The extinguishing of the Passenger Pigeon (1914 - Symbol of lost nature)",
          "Girl Scouts of the USA founding (1912 - Nature as recreation)"
        ]
      },
      "1915": {
        "salience_share": 3.2,
        "description": "A rebound (+0.7%) via the National Park Service. The catalyst was the need to market nature to the new automobile tourist (Cluster 18). The creation of the NPS (1916) codified the 'Park' ideal: nature as a scenic playground for the middle class. While this protected land, it commodified the experience. The 'sublime' was tamed into the 'scenic,' accessible by road.",
        "key_manifestations": [
          "National Park Service Organic Act (1916)",
          "See America First campaign",
          "Tarzan of the Apes (Film 1918 - Pulp nature)",
          "The Migratory Bird Treaty Act of 1918"
        ]
      },
      "1920": {
        "salience_share": 1.5,
        "description": "A sharp drop (-1.7%). The Jazz Age (Cluster 19) and the industrial boom (Cluster 05) were aggressively urban and anti-natural. The automobile, once a way to see nature, became the instrument of its destruction (sprawl). The Teapot Dome scandal revealed the attitude of the era: public lands were merely assets to be bribed away and drilled. Conservation was viewed as a quaint, pre-modern concern.",
        "key_manifestations": [
          "Teapot Dome Scandal (1921-22)",
          "The proliferation of billboards and roadside advertising",
          "The rapid expansion of the oil industry",
          "The Great Gatsby (1925 - Nature is entirely manicured or ignored)"
        ]
      },
      "1925": {
        "salience_share": 1.2,
        "description": "Stagnation (-0.3%). The 'Fordism' era viewed the assembly line as superior to the organic cycle. The displacing force was the cultural fixation on technology and speed. However, Aldo Leopold began formulating his 'Land Ethic' in obscurity, planting the intellectual seeds for deep ecology by arguing that ethics must expand to include the soil itself.",
        "key_manifestations": [
          "Aldo Leopold's early writings (Wilderness management)",
          "Florida Land Boom (Nature as real estate speculation)",
          "The completion of major dams (Engineering over ecology)",
          "Bambi (Book 1923 - Anthropomorphic nature)"
        ]
      },
      "1930": {
        "salience_share": 5.0,
        "description": "A dramatic resurgence (+3.8%). The Dust Bowl was the catalyst: a visible, terrifying proof that nature could strike back against mismanagement. The 'ecological conscience' was forced upon the nation not by philosophy, but by dust. The New Deal's Civilian Conservation Corps (CCC) mobilized young men to 'repair' the land (planting trees, stopping erosion), fusing Cluster 01 (Technocracy) with Cluster 21. Soil conservation became a matter of national survival.",
        "key_manifestations": [
          "The Dust Bowl (1930s)",
          "The Plow That Broke the Plains (Film 1936)",
          "Civilian Conservation Corps (CCC) activity",
          "Soil Conservation Service established (1935)"
        ]
      },
      "1935": {
        "salience_share": 5.5,
        "description": "Peak of the conservation era (+0.5%). The Tennessee Valley Authority (TVA) represented the 'High Modernist' ideal of ecology: total control of a river system for human benefit. While technocratic, it acknowledged the interconnectedness of water, land, and poverty. The 'Wilderness Society' was founded (1935), arguing for the protection of land *without* roads, a radical rejection of the auto-tourism model.",
        "key_manifestations": [
          "Tennessee Valley Authority (TVA) projects",
          "Founding of The Wilderness Society (1935)",
          "The River (Film 1938)",
          "Deserts on the March by Paul Sears (1935)"
        ]
      },
      "1940": {
        "salience_share": 2.5,
        "description": "Suppression (-3.0%) due to WWII. The environment was converted into raw material for the Arsenal of Democracy. The displacing force was the existential need for production (Cluster 15). Pollution was accepted as the smell of victory. The Manhattan Project created the ultimate anti-ecological weapon, creating 'sacrifice zones' (Hanford, Oak Ridge) that would be poisoned for millennia.",
        "key_manifestations": [
          "Massive expansion of resource extraction for war",
          "The Manhattan Project (Hanford site contamination)",
          "DDT usage for troop health (War on insects)",
          "Why We Fight (Focus on industrial capacity)"
        ]
      },
      "1945": {
        "salience_share": 1.5,
        "description": "Nadir (-1.0%). The post-war boom was fueled by cheap oil and the chemical revolution. 'Better Living Through Chemistry' was the slogan. The catalyst was the belief that science had conquered nature (Cluster 01). Suburbs (Cluster 18) bulldozed ecosystems to create lawns. Aldo Leopold's *A Sand County Almanac* (1949) was published posthumously, largely ignored at the time but serving as a time bomb for the future movement.",
        "key_manifestations": [
          "A Sand County Almanac (1949)",
          "Rise of chemical pesticides (DDT commercialization)",
          "The Donora Smog (1948 - Early warning of industrial pollution)",
          "Levittown (The erasure of local ecology)"
        ]
      },
      "1950": {
        "salience_share": 2.0,
        "description": "Slight friction (+0.5%). The 'Echo Park Dam' controversy. Conservationists, led by David Brower, successfully fought a federal dam project for the first time. The catalyst was the mobilization of the middle class who had visited the parks. This marked the shift from 'Conservation' (bureaucratic management) to 'Environmentalism' (political activism). However, the general culture remained obsessed with plastic and atomic power.",
        "key_manifestations": [
          "Echo Park Dam controversy (1950-1955)",
          "The Sea Around Us by Rachel Carson (1951)",
          "Atomic testing in Nevada (Nature as laboratory)",
          "The conquest of Polio (Nature as enemy to be defeated)"
        ]
      },
      "1955": {
        "salience_share": 2.5,
        "description": "Slow growth (+0.5%). The concern over nuclear fallout ('Strontium-90 in baby teeth') began to bridge the gap between 'nature out there' and 'bodies in here.' The catalyst was the realization that the environment was permeable. The Wilderness Act was drafted, pushing for legal recognition of land 'untrammeled by man.'",
        "key_manifestations": [
          "Committee for Nuclear Information (Baby Tooth Survey) (1958)",
          "Drafting of the Wilderness Act (1956)",
          "The Blob (1958 - Fear of the amorphous biological threat)",
          "Highway Beautification movement (Surface level aestheticism)"
        ]
      },
      "1960": {
        "salience_share": 6.5,
        "description": "A massive paradigm shift (+4.0%). The publication of *Silent Spring* (1962) was the catalyst. Rachel Carson linked the 'war on nature' (pesticides) to the destruction of life itself. It challenged the fundamental authority of the chemical industry (Cluster 15) and scientific arrogance. The Wilderness Act (1964) passed, legally creating spaces where the machine could not go. Ecology became a household word.",
        "key_manifestations": [
          "Silent Spring by Rachel Carson (1962)",
          "The Wilderness Act (1964)",
          "Storm King Mountain lawsuit (1965 - Establishing legal standing for nature)",
          "Dr. Strangelove (1964 - The ultimate environmental catastrophe)"
        ]
      },
      "1965": {
        "salience_share": 9.0,
        "description": "Explosive growth (+2.5%). The Counterculture (Cluster 19) embraced the 'Back to the Land' movement. The catalyst was the visual of 'Earthrise' (1968) from Apollo 8\u2014seeing the planet as a fragile, finite blue marble in a black void. This image destroyed the myth of infinite frontiers instantly. The Cuyahoga River fire (1969) provided the visual counterpoint: industrial civilization was burning the water itself.",
        "key_manifestations": [
          "Earthrise photograph (1968)",
          "The Whole Earth Catalog (1968)",
          "The Population Bomb by Paul Ehrlich (1968 - Malthusian panic)",
          "Cuyahoga River Fire (1969)"
        ]
      },
      "1970": {
        "salience_share": 12.5,
        "description": "The cluster reached its **20th Century Peak** (+3.5%). Earth Day (1970) mobilized 20 million Americans. The catalyst was the bipartisan consensus that the environment was collapsing. The EPA, Clean Air Act, and Clean Water Act were passed rapidly. Epistemically, 'Limits to Growth' (1972) used computer models (Cluster 12) to argue that the industrial economy was mathematically doomed to collapse if it didn't respect planetary boundaries.",
        "key_manifestations": [
          "Earth Day (1970)",
          "The Limits to Growth (1972)",
          "Establishment of the EPA (1970)",
          "The Lorax by Dr. Seuss (1971)"
        ]
      },
      "1975": {
        "salience_share": 10.0,
        "description": "Deceleration (-2.5%). The Energy Crisis (1973/79) shifted the focus from 'saving the earth' to 'securing resources.' The displacing force was economic stagflation. While conservation (solar panels on the White House) was promoted, it was framed as austerity (Cluster 04) rather than spiritual stewardship. The 'Sagebrush Rebellion' began in the West, a populist (Cluster 02) backlash against federal environmental control.",
        "key_manifestations": [
          "Department of Energy creation (1977)",
          "Love Canal disaster (1978 - Toxic waste awareness)",
          "The China Syndrome (1979 - Nuclear fear)",
          "Sagebrush Rebellion begins"
        ]
      },
      "1980": {
        "salience_share": 6.5,
        "description": "Retraction (-3.5%). The Reagan Revolution (Cluster 05) attacked environmentalism as a regulatory burden on the market. James Watt (Interior Secretary) sought to open public lands to drilling. The displacing force was the belief in infinite growth and technological substitution. Environmentalism became a partisan issue, retreating to the NGO sector (Greenpeace, Sierra Club) rather than being a government mandate.",
        "key_manifestations": [
          "James Watt's tenure as Secretary of the Interior",
          "Removal of White House solar panels (1986)",
          "Koyaanisqatsi (Film 1982 - Art house lament for nature)",
          "Exxon Valdez preparations (The logic of extraction)"
        ]
      },
      "1985": {
        "salience_share": 7.0,
        "description": "Stabilization (+0.5%). The discovery of the Ozone Hole (1985) was a shock. The catalyst was the realization that human activity could alter the atmosphere on a global scale. The Montreal Protocol (1987) proved that global governance (Cluster 20) could solve an ecological crisis. This success gave a false sense of optimism about tackling future problems like climate change. The 'Save the Whales' movement represented the emotional/charismatic megafauna phase of the cluster.",
        "key_manifestations": [
          "Discovery of the Ozone Hole (1985)",
          "Montreal Protocol (1987)",
          "Star Trek IV: The Voyage Home (1986 - Whales as key to survival)",
          "McKibben's The End of Nature (1989)"
        ]
      },
      "1990": {
        "salience_share": 8.0,
        "description": "Moderate growth (+1.0%). The Rio Earth Summit (1992) mainstreamed the concept of 'Sustainable Development.' The catalyst was the end of the Cold War, which allowed attention to shift to 'soft' security threats. However, the displacing force of 90s consumerism (SUVs) and the 'Brownlash' (organized denial movement) began to stall legislative action on climate. 'Captain Planet' represented the naive cultural optimism.",
        "key_manifestations": [
          "Rio Earth Summit (1992)",
          "Captain Planet (TV Show 1990-96)",
          "FernGully (1992)",
          "The rise of the SUV (Market counter-trend)"
        ]
      },
      "1995": {
        "salience_share": 6.5,
        "description": "Decline (-1.5%). The Kyoto Protocol (1997) was signed but dead on arrival in the US Senate. The displacing force was American Exceptionalism (Cluster 13) and economic boom. The 'Tech Optimism' of the dot-com era suggested that the digital world would replace the physical, making resource limits obsolete. Environmentalism was painted as anti-growth and anti-American.",
        "key_manifestations": [
          "Kyoto Protocol rejection (Byrd-Hagel Resolution 1997)",
          "Erin Brockovich (2000 - Local justice, not systemic change)",
          "Princess Mononoke (US release 1999 - Complex ecological morality)",
          "Rise of genetically modified organisms (GMOs)"
        ]
      },
      "2000": {
        "salience_share": 5.5,
        "description": "Low point (-1.0%). The 9/11 attacks completely displaced ecological concerns with security concerns. 'Energy Independence' meant drilling, not renewables. The Bush administration actively suppressed climate science. The 'SUV' became the symbol of patriotic consumption. The cluster retreated to the 'Organic Food' movement\u2014lifestyle consumption (Cluster 14) rather than political action.",
        "key_manifestations": [
          "Cheney's Energy Task Force (2001)",
          "The Day After Tomorrow (2004 - Climate as sci-fi spectacle)",
          "Introduction of the Hummer H2 (2002)",
          "Collapse of international climate talks"
        ]
      },
      "2005": {
        "salience_share": 8.5,
        "description": "A sharp rebound (+3.0%). *An Inconvenient Truth* (2006) was the catalyst. Al Gore's slide show turned Climate Change from a scientific abstraction into a moral and political crisis. Hurricane Katrina (2005) provided the visual evidence of extreme weather. The 'Green' branding wave began, but much of it was 'Greenwashing' (Cluster 15).",
        "key_manifestations": [
          "An Inconvenient Truth (2006)",
          "Hurricane Katrina (2005 - Interpreted as climate harbinger)",
          "WALL-E (2008 - Earth as wasteland)",
          "Tesla Roadster launch (2008 - Tech solutionism)"
        ]
      },
      "2010": {
        "salience_share": 7.0,
        "description": "Disillusionment (-1.5%). The failure of the Waxman-Markey Cap and Trade bill (2010) and the Copenhagen Summit marked the death of the legislative strategy. The displacing force was the Great Recession and the Tea Party (Cluster 02), which turned climate denial into a badge of political identity. Fracking created a new boom in fossil fuels, delaying the transition. Deepwater Horizon was a horror show that resulted in no structural change.",
        "key_manifestations": [
          "Deepwater Horizon Oil Spill (2010)",
          "Failure of Waxman-Markey (2010)",
          "The rise of the Fracking Boom",
          "Avatar (2009 - Escapist ecological fantasy)"
        ]
      },
      "2015": {
        "salience_share": 9.5,
        "description": "Radicalization (+2.5%). The Paris Agreement (2015) was a diplomatic success, but the Standing Rock protests (NoDAPL) signaled a shift to direct action and indigenous leadership (Cluster 07). The catalyst was the realization that the 'establishment' was moving too slowly. Greta Thunberg and the Youth Climate Strikes (Cluster 28) introduced a new affective epistemology: intergenerational rage and panic.",
        "key_manifestations": [
          "Standing Rock / NoDAPL Protests (2016)",
          "Paris Agreement (2015)",
          "Greta Thunberg's 'School Strike for Climate' (2018)",
          "The Uninhabitable Earth (Article 2017 - Doomism)"
        ]
      },
      "2020": {
        "salience_share": 13.0,
        "description": "The cluster reached a new peak (+3.5%). The 'Green New Deal' framework linked ecology to economic redistribution (Cluster 16). The catalyst was the 'Orange Skies' of the 2020 wildfires and the pandemic, which showed how fragile the planetary system was. Climate change moved from a 'future threat' to a 'current emergency.' The Inflation Reduction Act (2022) was the first major US climate legislation, but it was framed as industrial policy (Cluster 13), not environmentalism.",
        "key_manifestations": [
          "Inflation Reduction Act (2022)",
          "Don't Look Up (2021 - Satire of climate inaction)",
          "The 'Heat Dome' events (2021)",
          "Ministry for the Future by Kim Stanley Robinson (2020)"
        ]
      },
      "2025": {
        "salience_share": 14.5,
        "description": "Entrenchment and Anxiety (+1.5%). The 'Climate Crisis' is now the background radiation of all culture. The displacing force is 'Climate Doomism'\u2014the belief that it is too late. The debate has shifted from 'Is it real?' to 'Can we engineer our way out?' (Geo-engineering). Insurance markets are beginning to collapse in coastal areas, making the limits of the planet financially undeniable (Cluster 05 collision).",
        "key_manifestations": [
          "Insurance withdrawals from Florida/California (2023-2025)",
          "Solar Geo-engineering startup controversies (2025)",
          "The Last of Us (TV 2023 - Nature reclaiming the built world)",
          "Mandatory climate risk disclosures for corporations"
        ]
      }
    }
  },
  "22_celebrity_performative_fame": {
    "name": "Celebrity Performative Fame",
    "description": "This cluster tracks the evolution of public renown from 'Heroism' (fame based on character, achievement, or bloodline) to 'Celebrity' (fame based on image, media visibility, and the performance of the self). It analyzes the technological mechanisms\u2014from the printing press to the algorithm\u2014that manufacture intimacy between the masses and the icon. The trajectory moves from the distant, aura-laden stage star of the 19th century to the manufactured movie god of the studio era, the democratized reality TV star, and finally the algorithmic micro-celebrity, culminating in a state where fame is detached from talent entirely.",
    "trajectory": {
      "1890": {
        "salience_share": 1.0,
        "description": "The cluster operated at a low baseline, defined by the 'Aura' of the distant stage performer. Fame was primarily local or dependent on physical touring. The catalyst for the shift toward modern celebrity was the rise of photography and the illustrated press, which allowed the public to consume the *image* of the star without seeing the performance. Sarah Bernhardt represented the transitional figure: a talented actress who also understood the value of scandalous publicity as a commodity in itself.",
        "key_manifestations": [
          "Sarah Bernhardt's US Tours (The first global superstar)",
          "The rise of the Cabinet Card (Collectable photos of actors)",
          "Buffalo Bill's Wild West Show (Performative identity)",
          "Nellie Bly's 'Around the World in 72 Days' (Journalist as celebrity)"
        ]
      },
      "1895": {
        "salience_share": 1.5,
        "description": "A slight rise (+0.5%) driven by Yellow Journalism (Cluster 10). The press began to manufacture 'personalities' to sell papers. The catalyst was the realization that human interest stories sold better than dry facts. The 'Gibson Girl' phenomenon demonstrated that a constructed image\u2014an illustration of a non-existent person\u2014could dictate fashion and behavior, proving that fame could be detached from specific human achievement and rooted in an aesthetic ideal.",
        "key_manifestations": [
          "The Gibson Girl (Charles Dana Gibson's illustrations)",
          "The Corbett-Fitzsimmons Fight (1897 - Athletes as mass media stars)",
          "Lillian Russell's media coverage",
          "Yellow Kid cartoons (Merchandising the image)"
        ]
      },
      "1900": {
        "salience_share": 2.0,
        "description": "Steady growth (+0.5%). The Vaudeville circuit industrialized entertainment, creating a national network of fame. However, the motion picture industry was in its infancy and explicitly *suppressed* actor names to prevent salary demands. The displacing force was the producers' desire to keep labor cheap. Fame was still largely tied to the physical presence of the orator (Bryan) or the politician (TR), rather than the disembodied media phantom.",
        "key_manifestations": [
          "Vaudeville circuit expansion (Keith-Albee)",
          "Houdini's early escape acts (Fame via spectacle)",
          "The Great Train Robbery (1903 - Cinema creates icons without names)",
          "Booker T. Washington's Up From Slavery (Celebrity as moral example)"
        ]
      },
      "1905": {
        "salience_share": 2.5,
        "description": "A crucial pivot point (+0.5%). The 'Nickelodeon' boom created a voracious demand for content. The public began to demand the names of the anonymous film actors ('The Biograph Girl'). The catalyst was the audience's emotional connection to the *face* projected on the screen, which felt more intimate than the stage. This pressure forced the studios to eventually capitulate, birthing the 'Movie Star' system.",
        "key_manifestations": [
          "The proliferation of Nickelodeons",
          "Florence Lawrence (The Biograph Girl - pre-name reveal)",
          "The Teddy Bear (Merchandising a president's personality)",
          "Evelyn Nesbit and the Thaw-White trial (The first 'It Girl' scandal)"
        ]
      },
      "1910": {
        "salience_share": 4.0,
        "description": "A sharp rise (+1.5%) as the 'Star System' was officially born. Carl Laemmle pulled a publicity stunt by faking the death of Florence Lawrence to generate press, proving that *news* about the star was as important as the film. The catalyst was the realization that the Star was a brand that guaranteed box office returns. Fan magazines (*Photoplay*) appeared, creating a feedback loop between the screen and the private life of the actor.",
        "key_manifestations": [
          "The 'staged death' of Florence Lawrence (1910 - Birth of the stunt)",
          "The founding of Photoplay magazine (1911)",
          "Mary Pickford's rise (America's Sweetheart)",
          "Theda Bara (The invention of the 'Vamp' persona)"
        ]
      },
      "1915": {
        "salience_share": 6.5,
        "description": "Explosive growth (+2.5%). Charlie Chaplin became the most famous man in the world. The catalyst was the universality of silent film\u2014image without language barriers. Chaplin's 'Tramp' was the first global meme. The displacing force of WWI paradoxically increased the demand for escapist celebrity. Douglas Fairbanks and Mary Pickford helped sell Liberty Bonds, proving that celebrity capital could be converted into political capital (Cluster 04).",
        "key_manifestations": [
          "Charlie Chaplin's 'The Tramp' (1915)",
          "Birth of a Nation (1915 - Creating the star director, Griffith)",
          "The Douglas Fairbanks/Mary Pickford bond tours",
          "Theda Bara's 'A Fool There Was' (1915)"
        ]
      },
      "1920": {
        "salience_share": 9.0,
        "description": "The cluster reached a **Golden Age** (+2.5%). United Artists was formed, signaling that the Stars now owned the means of production. The catalyst was the post-war consumer boom (Cluster 05). Hollywood became the 'Olympus' of America. The death of Valentino (later in this interval) triggered mass hysteria, revealing that the parasocial relationship had become a dominant psychological force. The 'Star' replaced the local community leader as the primary role model.",
        "key_manifestations": [
          "Formation of United Artists (1919)",
          "Babe Ruth's sale to the Yankees (1920 - Athlete as superstar)",
          "Douglas Fairbanks in The Mark of Zorro (1920)",
          "Roscoe 'Fatty' Arbuckle scandal (1921 - The dark side of fame)"
        ]
      },
      "1925": {
        "salience_share": 9.5,
        "description": "Peak Silent Era (+0.5%). The 'It Girl' (Clara Bow) defined the era's sex appeal. The displacing force of radio began to create a rival form of acoustic fame (Lindbergh). The funeral of Rudolph Valentino (1926) was a mass media event of unprecedented scale, proving that the 'Star' was a religious figure in a secular age. Gossip columnists (Walter Winchell) began to gain power, monitoring the morality of the gods.",
        "key_manifestations": [
          "Rudolph Valentino's Funeral (1926)",
          "Clara Bow in 'It' (1927)",
          "Charles Lindbergh's Transatlantic Flight (1927 - The first global media event)",
          "The Jazz Singer (1927 - Sound threatens the silent pantheon)"
        ]
      },
      "1930": {
        "salience_share": 7.5,
        "description": "A contraction (-2.0%) due to the transition to Sound and the Depression. Many silent stars failed the 'voice test,' destroying their aura. The displacing force was the economic reality; the public resented the excess of Hollywood. However, a new type of 'accessible' star emerged (Will Rogers, Shirley Temple) to provide therapeutic comfort (Cluster 14). The Studio System locked down control, treating stars as contract labor rather than independent deities.",
        "key_manifestations": [
          "Shirley Temple's box office dominance (1930s)",
          "Will Rogers (Folk celebrity)",
          "Mae West (Subversive celebrity)",
          "Modern Screen magazine (Sanitized studio narratives)"
        ]
      },
      "1935": {
        "salience_share": 8.0,
        "description": "Stabilization (+0.5%). The Studio System perfected the 'glamour factory.' Stars were molded, renamed, and physically altered to fit archetypes. The catalyst was the need for escapism. The 'Screwball Comedy' made the rich and famous seem relatable yet distant. Fame was an industrial product, carefully rationed and managed by PR departments to maintain the 'suspension of disbelief' regarding the star's private life.",
        "key_manifestations": [
          "Gone with the Wind casting search (1939 - Manufactured hype)",
          "Fred Astaire and Ginger Rogers",
          "The Hays Code (Enforcing moral celebrity)",
          "War of the Worlds broadcast (1938 - Orson Welles' instant infamy)"
        ]
      },
      "1940": {
        "salience_share": 6.5,
        "description": "Decline (-1.5%). The war effort required stars to be 'regular joes' serving the nation. Glamour was rationed. The catalyst was the draft; stars like Jimmy Stewart enlisted, merging 'Heroism' back into 'Celebrity.' The displacing force was national unity (Cluster 04). However, the 'Pin-Up' (Betty Grable) became a potent military tool, fusing sexuality with patriotism.",
        "key_manifestations": [
          "Clark Gable joining the Army Air Forces",
          "Betty Grable's Pin-Up photo",
          "Casablanca (1942 - The star as moral agent)",
          "Bob Hope's USO tours begin"
        ]
      },
      "1945": {
        "salience_share": 7.5,
        "description": "A specific spike (+1.0%) driven by the 'Bobby Soxer.' Frank Sinatra sparked the first modern teenage fan hysteria. The catalyst was the economic power of the youth demographic (Cluster 28). This marked the shift from 'matinee idol' (admired by adults) to 'teen idol' (screamed at by kids). This foreshadowed the rock and roll explosion.",
        "key_manifestations": [
          "Frank Sinatra's Columbus Day Riot (1944)",
          "The Best Years of Our Lives (1946 - The return of the star)",
          "Humphrey Bogart/Lauren Bacall (The cool couple)",
          "Sunset Boulevard (1950 - Critique of the fading star system)"
        ]
      },
      "1950": {
        "salience_share": 9.0,
        "description": "Resurgence (+1.5%). TV democratized fame (Lucille Ball), while film manufactured 'Hyper-Stars' (Marilyn Monroe) to compete. The catalyst was the decline of the studio system (United States v. Paramount), which freed stars from contracts but also removed their protection. The 'Scandal Magazine' (Confidential) began to expose the gap between the image and the reality, adding a thrill of voyeurism to celebrity consumption.",
        "key_manifestations": [
          "Marilyn Monroe in Gentlemen Prefer Blondes (1953)",
          "I Love Lucy (1951 - TV fame is domestic)",
          "Confidential Magazine (The rise of trash gossip)",
          "James Dean's death (1955 - Frozen youth icon)"
        ]
      },
      "1955": {
        "salience_share": 11.0,
        "description": "Explosion (+2.0%) with Elvis Presley. The catalyst was the fusion of music, TV, and sexuality. Elvis was a new category: a danger to the state (Cluster 08) and a god to the youth. Fame became dangerous and visceral. The 'Method Actor' (Brando) introduced authenticity (Cluster 19) into the performance of stardom, rejecting the polished studio veneer.",
        "key_manifestations": [
          "Elvis on Ed Sullivan (1956)",
          "James Dean in Rebel Without a Cause (1955)",
          "Marlon Brando (The anti-star)",
          "Grace Kelly's wedding (1956 - Hollywood meets Royalty)"
        ]
      },
      "1960": {
        "salience_share": 12.5,
        "description": "Political crossover (+1.5%). The Kennedys treated the White House like a movie set. The catalyst was the televised debate; Nixon lost because he didn't understand the performance of fame. The 'Rat Pack' embodied the cool, masculine authority of the era. Fame was now the primary currency of power.",
        "key_manifestations": [
          "JFK vs. Nixon Debate (1960)",
          "The Rat Pack at the Sands",
          "Marilyn Monroe singing 'Happy Birthday, Mr. President' (1962)",
          "The Beatles on Ed Sullivan (1964 - The next wave)"
        ]
      },
      "1965": {
        "salience_share": 14.0,
        "description": "Cultural hegemony (+1.5%). Beatlemania was a global psychic event. The catalyst was the satellite broadcast. Warhol's 'Factory' began to deconstruct fame, asserting that 'everyone will be famous for 15 minutes.' This was the birth of the 'Superstar'\u2014someone famous simply for being interesting to look at (Edie Sedgwick).",
        "key_manifestations": [
          "Beatlemania (Shea Stadium 1965)",
          "Andy Warhol's Exploding Plastic Inevitable (1966)",
          "Muhammad Ali (Fame as political protest)",
          "Valley of the Dolls (1966 - The pills and the pain of fame)"
        ]
      },
      "1970": {
        "salience_share": 11.5,
        "description": "Fragmentation (-2.5%). The monoculture fractured. The displacing force was the 'Anti-Hero' (Pacino, De Niro) who rejected the trappings of glamour for grit (Cluster 19). However, the 'Blockbuster' era (Jaws, Star Wars) began to shift the focus from the *Star* to the *Franchise* (IP). The celebrity was becoming secondary to the brand.",
        "key_manifestations": [
          "Star Wars (1977 - The brand is the star)",
          "Farrah Fawcett's Poster (1976 - Pin-up revival)",
          "People Magazine founded (1974 - Industrialized gossip)",
          "Studio 54 (Celebrity as performance art)"
        ]
      },
      "1975": {
        "salience_share": 12.5,
        "description": "Institutionalization of Gossip (+1.0%). *People* magazine changed the epistemic standard: the 'private' life was now the primary product. The catalyst was the vacuum left by the collapse of the Studio System's protection. The paparazzi became a hunting pack. Fame became a high-risk blood sport.",
        "key_manifestations": [
          "People Magazine dominance",
          "Saturday Night Live (Creating stars from counter-culture)",
          "Rocky (1976 - The underdog narrative)",
          "Elvis's death (1977 - The tragedy of consumption)"
        ]
      },
      "1980": {
        "salience_share": 14.0,
        "description": "The Reagan Synthesis (+1.5%). An actor became President, collapsing the distinction between performance and governance. The catalyst was MTV (1981), which demanded that musicians also be visual icons. Madonna perfected the art of 'Reinvention'\u2014fame as a continuous narrative of self-transformation.",
        "key_manifestations": [
          "Ronald Reagan's election (1980)",
          "MTV Launch (1981)",
          "Michael Jackson's Thriller (1982 - Peak monoculture fame)",
          "Princess Diana's Wedding (1981 - The global fairytale)"
        ]
      },
      "1985": {
        "salience_share": 15.5,
        "description": "Peak Excess (+1.5%). 'We Are The World' showed that celebrities believed they could save the planet (Cluster 20). The catalyst was the global satellite broadcast (Live Aid). Oprah Winfrey launched her national show (1986), creating the 'Confessional Celebrity'\u2014fame achieved through vulnerability (Cluster 14).",
        "key_manifestations": [
          "Live Aid (1985)",
          "Madonna's 'Material Girl' era",
          "The Oprah Winfrey Show (1986)",
          "Lifestyles of the Rich and Famous (Wealth porn)"
        ]
      },
      "1990": {
        "salience_share": 16.0,
        "description": "The Supermodel Era (+0.5%). Models became bigger than movie stars. The displacing force was the decline of the box office star's power. The 'Tabloid TV' boom (Hard Copy) created a 24-hour cycle of scandal. The O.J. Simpson Bronco chase (1994) was the singularity: news, entertainment, and celebrity fused into one spectacle.",
        "key_manifestations": [
          "The Supermodels (freedom '90 video)",
          "O.J. Simpson Trial (1994-95 - The trial of the century)",
          "Kurt Cobain (The reluctant anti-star)",
          "Real World (MTV) (1992 - Birth of Reality TV)"
        ]
      },
      "1995": {
        "salience_share": 14.5,
        "description": "The Reality Shift (-1.5%). The internet began to fragment the audience. The death of Princess Diana (1997) was the peak of the old model of 'Global Icon,' a moment of mass mourning that would not be repeated. The catalyst for the future was *The Real World*, creating 'stars' who had no talent other than being themselves on camera.",
        "key_manifestations": [
          "Death of Princess Diana (1997)",
          "Spice Girls (Manufactured pop perfection)",
          "Titanic (1997 - LeoMania)",
          "The Drudge Report (Internet gossip)"
        ]
      },
      "2000": {
        "salience_share": 17.0,
        "description": "The Reality Explosion (+2.5%). *Survivor* and *Big Brother* proved that ordinary people could be monetized as stars. The catalyst was the writer's strike and cost-cutting. Fame was democratized but debased. 'Celebreality' became a genre (The Osbournes). The barrier to entry collapsed.",
        "key_manifestations": [
          "Survivor (2000)",
          "Britney Spears (The teen pop complex)",
          "Jackass (2000 - Fame via pain)",
          "E! True Hollywood Story (Deconstructing the myth)"
        ]
      },
      "2005": {
        "salience_share": 19.0,
        "description": "Famous for Being Famous (+2.0%). Paris Hilton and Kim Kardashian. The catalyst was the sex tape and the socialite blog (Perez Hilton). The epistemic shift was total: talent was irrelevant; 'visibility' was the only metric. The star was a brand manager of their own life. The paparazzi became the primary content creators.",
        "key_manifestations": [
          "Keeping Up with the Kardashians (2007)",
          "Paris Hilton (The simple life)",
          "YouTube launch (2005 - Broadcast Yourself)",
          "TMZ launch (2005 - Real-time surveillance)"
        ]
      },
      "2010": {
        "salience_share": 21.0,
        "description": "The Influencer Era (+2.0%). Instagram (2010). The catalyst was the smartphone. Every citizen became a micro-celebrity managing a personal brand. The 'Creator Economy' challenged Hollywood. Justin Bieber (discovered on YouTube) proved the new pipeline worked. The distinction between 'fan' and 'star' blurred.",
        "key_manifestations": [
          "Instagram launch (2010)",
          "Justin Bieber's rise",
          "Charlie Sheen's meltdown (Twitter as direct broadcast)",
          "The concept of the 'Influencer'"
        ]
      },
      "2015": {
        "salience_share": 23.0,
        "description": "Political Celebrity (+2.0%). Donald Trump used the logic of Reality TV to capture the presidency. The catalyst was the media's inability to look away from the spectacle. Fame became the ultimate political currency. 'Cancel Culture' emerged as a mechanism for the crowd to police and destroy celebrities, reclaiming power from the idols.",
        "key_manifestations": [
          "Donald Trump's Campaign (2015-16)",
          "The #MeToo movement (Toppling the gatekeepers)",
          "Kylie Jenner (Billionaire via lips)",
          "Fyre Festival (2017 - The scam of influence)"
        ]
      },
      "2020": {
        "salience_share": 20.0,
        "description": "Algorithmic Churn (-3.0%). TikTok. The catalyst was the algorithm's preference for content over personality. Fame became 'viral'\u2014intense but fleeting (15 seconds). The 'Movie Star' is dead (Cluster 15); the IP (Marvel) is the star. The displacing force is saturation; everyone is famous to 15 people, but almost no one is famous to everyone.",
        "key_manifestations": [
          "TikTok's 'For You' Page (The fame machine)",
          "The Johnny Depp/Amber Heard Trial (2022 - TikTokified justice)",
          "The death of the 'A-List'",
          "MrBeast (Algorithmic philanthropy)"
        ]
      },
      "2025": {
        "salience_share": 18.0,
        "description": "Synthetic Fame (-2.0%). AI avatars and Virtual Influencers. The displacing force is the cost and risk of human behavior (scandals, aging). The audience prefers the parasocial intimacy of a chatbot (Cluster 14) or the predictability of an AI star. Human celebrity retreats to niche 'cults' on subscription platforms (OnlyFans/Patreon), ending the era of mass monocultural fame.",
        "key_manifestations": [
          "Rise of AI Influencers (Lil Miquela's successors)",
          "The fragmentation of the 'Star' into the 'Creator'",
          "Deepfake scandals eroding trust in visual presence",
          "Subscription-based intimacy (The gated community of fame)"
        ]
      }
    }
  },
  "23_meritocratic_credentialism": {
    "name": "Meritocratic Credentialism",
    "description": "This cluster tracks the rise of the belief that social status, power, and wealth should be allocated according to individual intellectual ability and achievement, primarily measured through standardized testing and university degrees. It maps the displacement of the 'Aristocracy of Blood' (lineage) by the 'Aristocracy of Talent' (cognitive elite). The trajectory follows the professionalization of the American elite, the rise of the university as the central gatekeeper of the middle class, the peak of the 'Best and Brightest' consensus, and the eventual crisis of legitimacy caused by elite overproduction, credential inflation, and the realization that 'merit' can be purchased and inherited.",
    "trajectory": {
      "1890": {
        "salience_share": 1.5,
        "description": "The cluster operated at a foundational low (+0.3%). The American elite was still largely defined by the 'Gentleman's Code' and hereditary wealth, where character and lineage outweighed raw intellect. However, the catalyst for change was the importation of the German research university model (Johns Hopkins, Chicago), which prioritized specialized knowledge over generalist polish. The founding of professional associations (AMA) began to erect fences around high-status labor, asserting that only the credentialed could practice. The epistemic shift was from 'who you are' to 'what you know.'",
        "key_manifestations": [
          "The founding of Johns Hopkins University (Model of the research university)",
          "The formation of the American Economic Association (1885/90 influence)",
          "Civil Service Reform Act (Pendleton Act) aftermath (Merit in government)",
          "William James's Principles of Psychology (Defining the mind to be measured)"
        ]
      },
      "1895": {
        "salience_share": 1.8,
        "description": "Slow growth (+0.3%). The displacing force was the lingering Populist distrust of the 'Expert,' but the demand for technical competence in an industrializing nation was growing. The creation of the 'Committee of Ten' (1893) standardized the high school curriculum to prepare students for college, treating the educational system as a sorting mechanism for the first time. The credential began to separate the 'professional' from the 'tradesman,' establishing a new hierarchy of labor value.",
        "key_manifestations": [
          "Report of the Committee of Ten (1893)",
          "The rise of the modern law school case method (Harvard)",
          "Establishment of state licensing boards for medicine",
          "Jude the Obscure (1895 - Critique of exclusion from the citadel of learning)"
        ]
      },
      "1900": {
        "salience_share": 2.5,
        "description": "A pivotal structural rise (+0.7%) with the founding of the College Board. The catalyst was the chaos of university admissions; elite schools needed a standardized metric to sort the growing applicant pool. This marked the birth of the 'test' as the arbiter of destiny. Epistemically, this was a move toward 'objective' merit, stripping away the subjective evaluation of the headmaster. The 'Robber Baron' was being replaced by the 'Corporate Lawyer'\u2014a man whose power came from his degree.",
        "key_manifestations": [
          "Formation of the College Entrance Examination Board (1900)",
          "The rise of the Master of Business Administration (MBA) concept (Tuck School 1900)",
          "The creation of the Nobel Prize (Global meritocratic standard)",
          "Up From Slavery (1901 - Merit as the path to racial uplift)"
        ]
      },
      "1905": {
        "salience_share": 3.0,
        "description": "Steady institutionalization (+0.5%). The Carnegie Foundation for the Advancement of Teaching created the 'Carnegie Unit,' standardizing the very measurement of time spent in learning. The catalyst was the need to define what a 'college' actually was for pension purposes. This bureaucratization of knowledge turned education into a currency that could be counted and exchanged. The 'expert' began to displace the 'moralist' in public discourse.",
        "key_manifestations": [
          "The Carnegie Foundation for the Advancement of Teaching (1905)",
          "The 'Carnegie Unit' standardization",
          "The Jungle (1906 - Implicit call for expert food inspectors)",
          "Binet-Simon test development (France 1905 - Precursor to IQ)"
        ]
      },
      "1910": {
        "salience_share": 4.5,
        "description": "A sharp rise (+1.5%) driven by the Flexner Report. The report was a ruthless audit of medical schools, closing nearly half of them to enforce rigorous scientific standards. The catalyst was the belief that 'Science' was the only legitimate form of medicine. This event solidified the Meritocratic Credentialist worldview: exclusion is necessary to maintain quality. The trade school model of professional training was destroyed in favor of the academic model.",
        "key_manifestations": [
          "The Flexner Report (1910)",
          "The Principles of Scientific Management (1911 - Merit on the factory floor)",
          "The founding of the Freud Society (Specialized knowledge)",
          "Admissions quotas discussions begin (Reaction to meritocratic success of immigrants)"
        ]
      },
      "1915": {
        "salience_share": 5.5,
        "description": "Acceleration (+1.0%) with the arrival of IQ testing. The catalyst was the translation of Binet\u2019s work and its adoption by American eugenicists (Terman). Intelligence was redefined as a single, innate, measurable scalar number. This provided the 'scientific' justification for a natural aristocracy. The war would soon provide the testing ground to prove that sorting men by 'mental age' was efficient for the state.",
        "key_manifestations": [
          "The Measurement of Intelligence by Lewis Terman (1916)",
          "The IQ Test (Stanford-Binet revision)",
          "The American Association of University Professors (AAUP) founding (1915)",
          "The Vocational Education Act (1917 - Sorting the non-meritocratic track)"
        ]
      },
      "1920": {
        "salience_share": 6.0,
        "description": "Complex fluctuation (+0.5%). While testing expanded, the Ivy League faced a 'crisis' of merit: Jewish immigrants were outscoring the Protestant elite. The displacing force was Nativism (Cluster 13), leading to the imposition of 'Character' quotas to suppress pure meritocracy. This revealed the cluster's dark secret: merit was only celebrated when it reinforced the existing social order. However, the Army Alpha/Beta tests normalized the idea that every citizen had a 'score.'",
        "key_manifestations": [
          "Army Alpha and Beta tests (Post-war analysis)",
          "Harvard's 'Jewish Quota' debates (1920s)",
          "This Side of Paradise (1920 - The decline of the 'gentleman student')",
          "Max Weber's 'Politics as a Vocation' (Credentialed bureaucracy)"
        ]
      },
      "1925": {
        "salience_share": 6.5,
        "description": "Strategic pivot (+0.5%). The SAT (Scholastic Aptitude Test) was piloted. The catalyst was James Bryant Conant's desire to find 'diamonds in the rough' (public school geniuses) to displace the lazy aristocracy at Harvard. This was 'Jeffersonian Meritocracy': using the test to break the class system. Epistemically, it shifted the basis of admissions from 'knowledge' (which rich kids bought via tutors) to 'aptitude' (supposedly innate).",
        "key_manifestations": [
          "First administration of the SAT (1926)",
          "The Great Gatsby (1925 - Jay Gatz vs. The credentialed Yale man)",
          "Scopes Trial (1925 - Experts vs. The People)",
          "Middletown (1929 - Education as the new divider)"
        ]
      },
      "1930": {
        "salience_share": 5.0,
        "description": "Retraction (-1.5%). The Depression made the 'credential' less valuable than the 'job.' The displacing force was the collapse of the professional economy; lawyers were driving taxis. However, the Brain Trust (Cluster 01) kept the ideal alive at the top. The public lost faith in the 'business genius' (Cluster 05) but began to look toward the 'academic planner' as the savior.",
        "key_manifestations": [
          "The Brain Trust (Columbia professors advising FDR)",
          "Technocracy movement (1930s)",
          "I'll Take My Stand (1930 - Agrarian rejection of industrial merit)",
          "The massive unemployment of professionals"
        ]
      },
      "1935": {
        "salience_share": 6.0,
        "description": "Recovery (+1.0%). Conant became President of Harvard and pushed for the National Scholarship program. The catalyst was the need to professionally manage the New Deal state. The civil service expanded, requiring exams for entry. The 'Merit System' became the antidote to political patronage. The idea that the government should be run by the 'best' rather than the 'connected' became a bipartisan ideal.",
        "key_manifestations": [
          "James Bryant Conant's Harvard presidency (1933-1953)",
          "Hatch Act of 1939 (Professionalizing the civil service)",
          "The General Theory (Keynesianism requires expert economists)",
          "The proliferation of the IQ test in schools"
        ]
      },
      "1940": {
        "salience_share": 8.0,
        "description": "Wartime surge (+2.0%). The Manhattan Project was the ultimate Meritocratic city: a hierarchy determined entirely by physics ability. The catalyst was the war of attrition, which was viewed as a war of science. The OSRD (Office of Scientific Research and Development) channeled federal money into universities, cementing the bond between the Credential and the State. The Ph.D. became a war asset.",
        "key_manifestations": [
          "The Manhattan Project (Los Alamos)",
          "Science, The Endless Frontier by Vannevar Bush (1945)",
          "The Army General Classification Test (Sorting 12 million men)",
          "The Managerial Revolution (1941)"
        ]
      },
      "1945": {
        "salience_share": 12.0,
        "description": "A historic explosion (+4.0%) with the GI Bill. The catalyst was the democratization of higher education. College moved from an elite luxury to a middle-class necessity. The displacing force was the fear of post-war unemployment, which the government solved by warehousing men in universities. This created the 'Credentialed Society'\u2014a mass middle class defined by the possession of a degree.",
        "key_manifestations": [
          "The G.I. Bill (Servicemen's Readjustment Act of 1944)",
          "The founding of the Educational Testing Service (ETS) (1947)",
          "All the King's Men (1946 - The populist vs. the elite)",
          "Expansion of the State University systems"
        ]
      },
      "1950": {
        "salience_share": 14.5,
        "description": "Consolidation (+2.5%). The SAT became the standard gatekeeper for college admissions. The catalyst was the need to manage the massive influx of students efficiently. Conant\u2019s vision of a 'classless' society sorted by talent seemed to be working. The 'Organization Man' required a degree to enter the corporate ladder (Cluster 15). The 'Gentleman's C' was officially dead; the 'Grind' had won.",
        "key_manifestations": [
          "Henry Chauncey's leadership of the ETS",
          "God and Man at Yale by Buckley (1951 - Critique of the secular meritocracy)",
          "The Lucky Dragon incident (Need for nuclear experts)",
          "Paperback revolution (Democratizing knowledge)"
        ]
      },
      "1955": {
        "salience_share": 16.5,
        "description": "Panic-driven acceleration (+2.0%). Sputnik (1957) was the catalyst. The realization that the Soviets might have 'more merit' (scientists) than the US triggered the National Defense Education Act. Identification of 'Gifted and Talented' children became a national security priority. The 'Egghead' (Adlai Stevenson) was mocked by populists but essential to the state. The meritocrat was now a Cold War warrior.",
        "key_manifestations": [
          "Sputnik launch (1957)",
          "National Defense Education Act (1958)",
          "The Rise of the Meritocracy by Michael Young (1958 - Coining the term as satire)",
          "The Affluent Society (1958 - Critique of private wealth/public squalor)"
        ]
      },
      "1960": {
        "salience_share": 19.0,
        "description": "The **Golden Age** (+2.5%). The Kennedy Administration ('The Best and Brightest') epitomized the rule of the high-IQ elite. The catalyst was the technocratic optimism that smart men with data could solve any problem (Vietnam, Poverty). The university campus became the center of American cultural life. Admissions became ruthlessly competitive for the first time. The 'Meritocracy' was embraced not as a satire (Young's intent) but as the American Dream realized.",
        "key_manifestations": [
          "JFK's Cabinet ('The Best and Brightest')",
          "The master plan for California Higher Education (1960)",
          "Who's Afraid of Virginia Woolf? (1962 - The neurosis of the faculty lounge)",
          "SAT scores begin to correlate perfectly with income"
        ]
      },
      "1965": {
        "salience_share": 18.0,
        "description": "Friction and fracture (-1.0%). The introduction of Affirmative Action (Executive Order 11246) challenged the definition of merit. The catalyst was the realization that 'colorblind' testing reproduced racial hierarchies (Cluster 07). This split the cluster: 'Pure Meritocrats' vs. 'Diversity Meritocrats.' The Free Speech Movement at Berkeley signaled that the students viewed the university not as a temple of wisdom, but as a factory ('Do not fold, spindle, or mutilate').",
        "key_manifestations": [
          "Executive Order 11246 (Affirmative Action)",
          "Free Speech Movement at Berkeley (1964)",
          "The Coleman Report (1966 - Education inequality data)",
          "Decline of the WASP establishment"
        ]
      },
      "1970": {
        "salience_share": 15.0,
        "description": "Crisis of value (-3.0%). The labor market for graduates saturated. The 'Overeducated American' became a trope. The catalyst was the economic stagflation (Cluster 05 failure), which proved the 'Best and Brightest' had failed to manage the economy or the war. The 'Credential' began to be seen as a barrier to entry rather than a proof of skill. The *Bakke* decision (1978) codified the tension between diversity and test scores, creating a permanent legal ambiguity.",
        "key_manifestations": [
          "Regents of the Univ. of California v. Bakke (1978)",
          "The Overeducated American by Richard Freeman (1976)",
          "Animal House (1978 - Mockery of the academic pretension)",
          "Open Admissions at CUNY (1970)"
        ]
      },
      "1975": {
        "salience_share": 14.0,
        "description": "Stagnation (-1.0%). The 'Diploma' lost its guarantee of a middle-class life, but became *more* essential for an upper-class life. The displacing force was the hollowing out of the blue-collar economy (Cluster 16). You didn't go to college to get smart; you went to avoid falling into the proletariat. The rise of grade inflation began here, as the consumer model of education took hold.",
        "key_manifestations": [
          "Grade inflation trends begin",
          "The Paper Chase (1973/TV 1978 - Law school as torture/status)",
          "Proposition 13 (1978 - Defunding the public meritocracy)",
          "A Nation at Risk (Drafting phase - fear of mediocrity)"
        ]
      },
      "1980": {
        "salience_share": 16.5,
        "description": "Resurgence via stratification (+2.5%). The 'Yuppie' era. The catalyst was the financialization of the economy (Cluster 05), which rewarded the MBA and the JD with astronomical salaries. The gap between the 'College Premium' and the high school wage exploded. *U.S. News & World Report* began ranking colleges (1983), turning higher education into a luxury market brand. Merit became a commodity to be optimized.",
        "key_manifestations": [
          "U.S. News & World Report College Rankings (1983)",
          "The Official Preppy Handbook (1980 - Irony masking status anxiety)",
          "A Nation at Risk (1983)",
          "The Big Chill (1983 - The meritocratic elite selling out)"
        ]
      },
      "1985": {
        "salience_share": 18.0,
        "description": "The Test Prep Era (+1.5%). The Princeton Review and Kaplan industrialized the 'hacking' of the SAT. The catalyst was the realization that merit could be purchased. This destroyed the illusion of 'innate aptitude.' The university became a hedge fund with a library. The 'Cultural Literacy' movement (Hirsch) argued that there was a specific canon required for entry into the elite.",
        "key_manifestations": [
          "Cultural Literacy by E.D. Hirsch (1987)",
          "The Bloom of the Closing of the American Mind (1987)",
          "Growth of The Princeton Review",
          "Dead Poets Society (1989 - Romanticizing the elite prep school)"
        ]
      },
      "1990": {
        "salience_share": 20.0,
        "description": "The Cognitive Elite (+2.0%). Robert Reich coined 'The Symbolic Analyst.' The catalyst was the Information Age (Cluster 12), which disproportionately rewarded high-IQ, credentialed workers. *The Bell Curve* (1994) explosively argued that the sorting was complete and that class stratification based on IQ was inevitable and natural. This was the dark apotheosis of the cluster: meritocracy as a justification for inequality.",
        "key_manifestations": [
          "The Bell Curve by Herrnstein and Murray (1994)",
          "The Work of Nations by Robert Reich (1991)",
          "Good Will Hunting (1997 - The fantasy that talent transcends class)",
          "Clinton's 'Rhodes Scholar' administration"
        ]
      },
      "1995": {
        "salience_share": 21.5,
        "description": "The Winner-Take-All Society (+1.5%). The catalyst was the internet boom. A degree from Stanford was now a lottery ticket to billions. Admissions rates at Ivy League schools began their plummet toward single digits. The 'Helicopter Parent' emerged to manage the child's resume from birth. Meritocracy became a totalizing lifestyle of anxiety and achievement.",
        "key_manifestations": [
          "The Winner-Take-All Society by Frank and Cook (1995)",
          "Election (1999 - Satire of the over-achiever)",
          "Hopwood v. Texas (1996 - Ban on affirmative action, return to 'merit')",
          "Rise of the 'Super-Tutor'"
        ]
      },
      "2000": {
        "salience_share": 22.5,
        "description": "The Creative Class (+1.0%). Richard Florida argued that the 'Creative Class' (credentialed bohemians) were the engine of urban growth. The catalyst was the gentrification of the inner city by graduates. The 'Diploma Divide' in politics began to open: the Democrats became the party of the credentialed, the Republicans the party of the non-credentialed. The SAT was re-centered (2005) to include writing, trying to measure 'skills' rather than just 'aptitude.'",
        "key_manifestations": [
          "The Rise of the Creative Class by Richard Florida (2002)",
          "Grutter v. Bollinger (2003 - Diversity as a 'compelling interest')",
          "No Child Left Behind Act (2001 - Standardized testing for all)",
          "Legally Blonde (2001 - Meritocracy with a pink aesthetic)"
        ]
      },
      "2005": {
        "salience_share": 23.0,
        "description": "Peak Bubble (+0.5%). Student loan debt began to spiral out of control. The catalyst was the 'College for All' consensus. For-profit colleges exploited the belief that *any* degree was a ticket to the middle class. The displacing force was the reality of the job market; 'underemployment' of graduates became a structural feature. The meritocratic promise began to look like a debt trap.",
        "key_manifestations": [
          "Bankruptcy Abuse Prevention and Consumer Protection Act (2005 - Student loans non-dischargeable)",
          "The Social Network (2010 - The weaponized meritocracy of Harvard)",
          "Academically Adrift (2011 - Testing shows little learning)",
          "Tiger Mother (2011 - Extreme parenting)"
        ]
      },
      "2010": {
        "salience_share": 20.0,
        "description": "The Crack-up (-3.0%). The Great Recession disproportionately hurt the young credentialed class (Occupying Wall Street with Masters degrees). The catalyst was the failure of the 'experts' to predict the crash. Peter Thiel's 'Thiel Fellowship' (paying kids to drop out) signaled a tech-elite turn against the university. The 'higher education bubble' narrative went mainstream.",
        "key_manifestations": [
          "Peter Thiel's Fellowship (2011)",
          "Excellent Sheep by William Deresiewicz (2014)",
          "Waiting for Superman (2010 - Desperation for charter schools)",
          "Fisher v. University of Texas (2013)"
        ]
      },
      "2015": {
        "salience_share": 15.0,
        "description": "Populist Revolt (-5.0%). Trump's victory was a direct rejection of the Credentialed Class. 'I love the poorly educated.' The displacing force was Cluster 02 (Populism). The expert was redefined as an enemy of the people. Simultaneously, the Left attacked the university as a bastion of 'Privilege' and 'Systemic Racism' rather than merit (Cluster 07). The SAT began to be dropped by colleges ('test-optional').",
        "key_manifestations": [
          "Trump's 'I love the poorly educated' speech (2016)",
          "The retreat from SAT/ACT requirements (Test-optional movement)",
          "Hillbilly Elegy (2016 - The exception that proves the rule)",
          "Campus free speech wars (Milo Yiannopoulos vs. the Academy)"
        ]
      },
      "2020": {
        "salience_share": 10.0,
        "description": "Crisis of Legitimacy (-5.0%). The 'Varsity Blues' scandal (2019) proved that the side door was open for the rich. *The Tyranny of Merit* (Sandel) argued that the meritocratic ideal itself was the problem, creating hubris in the winners and humiliation in the losers. The catalyst was COVID-19, which exposed the university as a luxury hotel with a Zoom subscription. The 'Diploma Divide' became the primary axis of American polarization.",
        "key_manifestations": [
          "Operation Varsity Blues (2019/Sentencing 2020)",
          "The Tyranny of Merit by Michael Sandel (2020)",
          "The Meritocracy Trap by Daniel Markovits (2019)",
          "Students for Fair Admissions v. Harvard (Building to 2023 decision)"
        ]
      },
      "2025": {
        "salience_share": 8.5,
        "description": "Post-Credentialism (-1.5%). The Supreme Court's ban on Affirmative Action (2023) forced a chaotic restructuring of admissions. The displacing force is 'Skills-Based Hiring' and AI (Cluster 12), which renders the degree a lagging indicator of competence. The Right has abandoned the university ('Defund the Ivies'), and the Left views it as an engine of inequality. The 'Meritocracy' survives only as a zombie ideology in the upper 1%, while the rest of society fragments into alternative signaling mechanisms (apprenticeships, portfolios, crypto-credentials). ",
        "key_manifestations": [
          "Ending of legacy admissions in major universities (2024-2025)",
          "Rise of 'Blue Collar' esteem (The Trades revival)",
          "Collapse of the U.S. News Ranking system relevance",
          "Employers dropping degree requirements (Walmart, IBM, State Govs)"
        ]
      }
    }
  },
  "24_techno_utopian_accelerationism": {
    "name": "Techno-Utopian Accelerationism",
    "description": "This cluster tracks the persistent belief that technological progress is an intrinsic moral good and the primary driver of human liberation. It posits that social, political, and biological limits can be transcended through engineering and invention. The trajectory evolves from the mechanical wonder of the 'Edisonade' era to the high-modernist state planning of the Space Age, the libertarian cyber-utopianism of the 1990s, and finally the 'Effective Accelerationism' (e/acc) and Transhumanist movements of the 21st century. It stands in direct tension with Ecological Stewardship (Cluster 21) and often bypasses democratic consensus (Cluster 09) in favor of 'building.'",
    "trajectory": {
      "1890": {
        "salience_share": 1.5,
        "description": "The cluster emerged from the 'Scientific Romance' genre and the cult of the inventor-hero. The catalyst was the electrification of cities, which seemed to banish the primal fear of darkness. Thomas Edison was the avatar of this cluster: a wizard who solved problems through tinkering rather than prayer. The epistemic shift was toward 'Progress' as a linear, inevitable force. *Looking Backward* provided the socialist-technocratic blueprint, imagining a Boston in 2000 where technology had solved all scarcity and strife.",
        "key_manifestations": [
          "Looking Backward 2000\u20131887 by Edward Bellamy (1888/1890 peak)",
          "A Connecticut Yankee in King Arthur's Court (1889 - Tech superiority)",
          "The electrification of streetcars (1890s)",
          "Frank Reade Jr. dime novels (The 'Edisonade' genre)"
        ]
      },
      "1895": {
        "salience_share": 1.8,
        "description": "Steady growth (+0.3%). The Chicago World's Fair (1893) left a lingering psychic impact with its 'White City,' a plaster-and-electric-light model of the perfectible future. The displacing force of economic depression (Panic of 1893) was countered by the optimistic belief that invention would restart the engine. The X-ray (discovered 1895) suggested that technology could see the unseen, granting god-like powers to the scientist.",
        "key_manifestations": [
          "The World's Columbian Exposition impact (The White City)",
          "The Time Machine by H.G. Wells (1895 - Ambivalent futurism)",
          "Discovery of X-rays (1895)",
          "The Horseless Carriage (Early automotive optimism)"
        ]
      },
      "1900": {
        "salience_share": 2.2,
        "description": "Acceleration (+0.4%). The turn of the century sparked a wave of futurology. Henry Adams contrasted the 'Virgin' (religious force) with the 'Dynamo' (technological force), recognizing that the latter was winning. The catalyst was the speed of communication (telephone/telegraph) shrinking the globe (Cluster 20 precursor). The Wright Brothers were tinkering in obscurity, preparing to break the terrestrial limit.",
        "key_manifestations": [
          "The Education of Henry Adams ('The Dynamo and the Virgin', 1900/1907)",
          "The Wonderful Wizard of Oz (1900 - The humbug wizard vs. the mechanical man)",
          "Kodak Brownie Camera (1900 - Tech democratization)",
          "First flight of the Zeppelin (1900)"
        ]
      },
      "1905": {
        "salience_share": 3.0,
        "description": "A significant jump (+0.8%). The Wright Brothers' flight (1903) finally penetrated the public consciousness, proving the 'impossible' was merely an engineering problem. The catalyst was the Ford Motor Company's application of mass production. The 'Machine Age' aesthetic began to form. Epistemically, the engineer was rising to become the new priest of society, capable of delivering freedom through mobility.",
        "key_manifestations": [
          "The Wright Brothers' patents and public flights (1905-1908)",
          "Ford Model N (Precursor to the T)",
          "In the Days of the Comet by H.G. Wells (1906)",
          "Tom Swift series begins (1910 - roots in this era)"
        ]
      },
      "1910": {
        "salience_share": 3.5,
        "description": "Continued rise (+0.5%). The Futurism movement (Marinetti) glorified speed, violence, and the machine, influencing American industrial design. The catalyst was the Model T, which physically restructured the American landscape. Technology was no longer a spectacle but a daily utility. The 'scientific management' of society (Cluster 01) was the political expression of this technological faith.",
        "key_manifestations": [
          "Tom Swift and His Airship (1910)",
          "The Model T Ford mass adoption",
          "Manifesto of Futurism (US impact)",
          "Ralph 124C 41+ by Hugo Gernsback (1911 - Techno-prophecy)"
        ]
      },
      "1915": {
        "salience_share": 3.0,
        "description": "A friction-based dip (-0.5%). WWI revealed the dark side of acceleration: the machine gun, the tank, and chemical warfare. The displacing force was the horror of industrialized slaughter. Technology was not just liberating; it was destructive. However, the 'preparedness' movement (Cluster 04) argued that *superior* technology was the only way to ensure survival.",
        "key_manifestations": [
          "The implementation of chemical warfare (1915)",
          "The sinking of the Lusitania (Technological vulnerability)",
          "Herland by Charlotte Perkins Gilman (1915 - Biological/social tech utopia)",
          "Panama-Pacific International Exposition (1915)"
        ]
      },
      "1920": {
        "salience_share": 4.5,
        "description": "Resurgence (+1.5%). The 'Radio Craze' was the catalyst. For the first time, technology brought the world instantaneously into the living room. The electrification of the household (washing machines, vacuums) promised a liberation from drudgery (specifically for women, though complex). The 'Robot' (R.U.R.) entered the lexicon, symbolizing both the servant and the threat.",
        "key_manifestations": [
          "R.U.R. (Rossum's Universal Robots) (US Premiere 1922)",
          "KDKA Pittsburgh (First commercial radio broadcast 1920)",
          "Introduction of the electric washing machine",
          "Metropolis (1927 - Viewing the techno-city)"
        ]
      },
      "1925": {
        "salience_share": 5.5,
        "description": "Peak of the Machine Age (+1.0%). Charles Lindbergh's flight (1927) was the apotheosis of man fusing with machine to conquer nature. He was the 'Techno-Messiah.' The displacing force of traditional religion (Cluster 08) was weakened by the tangible miracles of aviation. 'Amazing Stories' (Gernsback) launched the Science Fiction genre as a distinct cluster of utopian dreaming.",
        "key_manifestations": [
          "Charles Lindbergh's Spirit of St. Louis flight (1927)",
          "Amazing Stories magazine launch (1926)",
          "The Jazz Singer (1927 - Tech transforming art)",
          "Fordlandia (1928 - Exporting the techno-utopia)"
        ]
      },
      "1930": {
        "salience_share": 2.5,
        "description": "Crash (-3.0%). The Depression was blamed on 'Technological Unemployment'\u2014machines replacing men. The displacing force was the economic reality (Cluster 16). The 'Technocracy Inc.' movement briefly flared, proposing that engineers should replace politicians to run the economy as a machine, but it was viewed with suspicion as the crisis deepened. The machine was now a threat to the worker.",
        "key_manifestations": [
          "Technocracy Study Course (1934)",
          "Modern Times by Chaplin (1936 - The machine eats the man)",
          "Brave New World (1932 - Dystopian techno-hedonism)",
          "The failure of the dirigible (Hindenburg later, but mood shifts here)"
        ]
      },
      "1935": {
        "salience_share": 4.0,
        "description": "Recovery via spectacle (+1.5%). The 1939 New York World's Fair ('The World of Tomorrow') was the cathedral of this cluster. The 'Futurama' exhibit promised a friction-free world of superhighways and rational cities. The catalyst was the New Deal's massive infrastructure projects (dams, bridges), which proved that state-directed technology could still awe and serve. Superman (1938) fused the technological (sci-fi origin) with the savior myth.",
        "key_manifestations": [
          "New York World's Fair 'Futurama' exhibit (1939)",
          "Action Comics #1 (Superman) (1938)",
          "Hoover Dam completion (1936)",
          "Things to Come (Film 1936 - H.G. Wells' technocratic elite)"
        ]
      },
      "1940": {
        "salience_share": 5.0,
        "description": "Militarized Acceleration (+1.0%). The development of Radar, Penicillin, and the Atomic Bomb. The catalyst was total war (Cluster 04). The Manhattan Project was the ultimate expression of Techno-Utopianism's shadow: the ability to harness the fundamental forces of the universe. It was 'Promethean' in the truest sense\u2014fire stolen from the gods, capable of saving or destroying civilization.",
        "key_manifestations": [
          "The Manhattan Project (1942-1945)",
          "V-2 Rocket development (The space age seed)",
          "Penicillin mass production (1944)",
          "Asimov's Foundation series (1942 - Psychohistory as ultimate social tech)"
        ]
      },
      "1945": {
        "salience_share": 6.5,
        "description": "The Atomic Age (+1.5%). Hiroshima was the proof of concept. The displacing force was fear (Cluster 06), but the dominant note was awe. Vannevar Bush's *As We May Think* predicted the internet (Memex). The belief was that the atom would provide 'energy too cheap to meter.' Science was the new superpower.",
        "key_manifestations": [
          "As We May Think by Vannevar Bush (1945)",
          "Atomic Power narratives ('Too cheap to meter')",
          "ENIAC (1945)",
          "The Day the Earth Stood Still (1951 - Tech superiority as moral judgment)"
        ]
      },
      "1950": {
        "salience_share": 7.5,
        "description": "The Jet Age (+1.0%). 'Better Living Through Chemistry.' The catalyst was the consumer application of war tech: plastics, jet travel, television. Science Fiction became the dominant literature of ideas (Heinlein, Bradbury). The epistemic assumption was that the year 2000 would inevitably feature flying cars and moon colonies. Technology was the solution to the Cold War (Cluster 06).",
        "key_manifestations": [
          "The Day the Earth Stood Still (1951)",
          "I, Robot by Isaac Asimov (1950)",
          "Disney's 'Tomorrowland' (1955)",
          "Polio Vaccine (1955 - Medical miracle)"
        ]
      },
      "1955": {
        "salience_share": 8.5,
        "description": "Sputnik Shock (+1.0%). The launch of Sputnik (1957) terrified the US, not because of the weapon, but because it suggested the Soviets were the *true* futurists. The catalyst was the creation of NASA (1958). The 'Space Race' weaponized utopia. The geodesic dome (Buckminster Fuller) represented a new, rational architecture for the future.",
        "key_manifestations": [
          "Sputnik (1957)",
          "Formation of NASA (1958)",
          "Buckminster Fuller's Geodesic Domes",
          "Forbidden Planet (1956 - The id vs. the machine)"
        ]
      },
      "1960": {
        "salience_share": 9.5,
        "description": "High Modernist Zenith (+1.0%). The Apollo Program. The catalyst was JFK's moonshot speech. *Star Trek* (1966) codified the liberal-technocratic utopia: a post-scarcity, multi-racial federation exploring the stars with reason and gadgets. The displacing force was the growing counter-cultural skepticism, but for this brief window, the 'Rocket' was the symbol of human transcendence.",
        "key_manifestations": [
          "Star Trek (Premiered 1966)",
          "2001: A Space Odyssey (1968)",
          "The Jetsons (1962)",
          "JFK's Rice University Speech (1962)"
        ]
      },
      "1965": {
        "salience_share": 8.0,
        "description": "The Split (-1.5%). The Vietnam War became a 'Techno-War' (napalm, computers), discrediting the state-sponsored utopia (Cluster 01). The displacing force was the New Left's critique of the 'Machine.' However, Stewart Brand's *Whole Earth Catalog* (1968) synthesized technology with the counterculture ('Access to Tools'), birthing the 'Cyber-Utopian' strain that would lead to Silicon Valley.",
        "key_manifestations": [
          "The Whole Earth Catalog (1968)",
          "The Moon Landing (1969 - The peak and the end)",
          "Do Androids Dream of Electric Sheep? (1968 - Tech noir)",
          "The Mother of All Demos (Douglas Engelbart, 1968)"
        ]
      },
      "1970": {
        "salience_share": 6.5,
        "description": "Retraction (-1.5%). The end of the Apollo program. The catalyst was the energy crisis and the environmental movement (Cluster 21), which framed technology as the pollutant, not the savior. 'Appropriate Technology' (Small is Beautiful) challenged the 'Bigger is Better' ethos. The focus shifted from outer space to 'inner space' (Cluster 14) and the micro-processor.",
        "key_manifestations": [
          "Small Is Beautiful by Schumacher (1973)",
          "The cancellation of Apollo 18-20",
          "Gravity's Rainbow (1973 - The rocket as death cult)",
          "Homebrew Computer Club (1975 - The underground seed)"
        ]
      },
      "1975": {
        "salience_share": 7.0,
        "description": "The Personal Computer Pivot (+0.5%). Apple and Microsoft were founded. The catalyst was the democratization of computing power. The utopia was no longer a state project, but a personal empowerment tool. *Star Wars* (1977) revived the space opera but as a fantasy of rebellion, not institutional exploration. The O'Neill Cylinders proposed private space colonization.",
        "key_manifestations": [
          "Star Wars (1977)",
          "Apple II launch (1977)",
          "The High Frontier by Gerard O'Neill (1976)",
          "Close Encounters of the Third Kind (1977 - Benign tech wonder)"
        ]
      },
      "1980": {
        "salience_share": 8.5,
        "description": "Cyberpunk and the PC Boom (+1.5%). *Neuromancer* (1984) defined the new aesthetic: high tech, low life. The catalyst was the explosion of video games and the Macintosh. The 'Hacker' became the new hero\u2014a rogue agent mastering the machine. The Strategic Defense Initiative ('Star Wars') tried to revive state techno-utopianism, but the energy was in the garage startup.",
        "key_manifestations": [
          "Neuromancer by William Gibson (1984)",
          "Apple's '1984' Commercial",
          "Tron (1982)",
          "Blade Runner (1982 - Dystopian, but fetishizing the tech)"
        ]
      },
      "1985": {
        "salience_share": 9.5,
        "description": "The Information Age dawns (+1.0%). The catalyst was the modem and the BBS (Bulletin Board System). The concept of 'Virtual Reality' entered the lexicon. Nanotechnology (Eric Drexler) promised control over matter itself. The epistemic shift was toward 'Information' as the fundamental unit of reality.",
        "key_manifestations": [
          "Engines of Creation by K. Eric Drexler (1986 - Nanotech utopia)",
          "Star Trek: The Next Generation (1987 - Return to competency competence)",
          "The Well (1985 - Early online community)",
          "Max Headroom (1987)"
        ]
      },
      "1990": {
        "salience_share": 12.0,
        "description": "The Dot-Com Boom (+2.5%). *Wired* magazine (1993) became the bible of the 'California Ideology.' The catalyst was the World Wide Web. The belief was that the Internet would dissolve borders, destroy tyranny, and create a limitless economy (Cluster 05). John Perry Barlow's 'Declaration of Independence of Cyberspace' (1996) was the manifesto: the digital world was sovereign and free.",
        "key_manifestations": [
          "Wired Magazine launch (1993)",
          "A Declaration of the Independence of Cyberspace (1996)",
          "The Matrix (1999 - Tech as prison, but hackers as saviors)",
          "The Nasdaq boom"
        ]
      },
      "1995": {
        "salience_share": 13.5,
        "description": "Peak Cyber-Utopianism (+1.5%). The 'New Economy.' The displacing force of physical limits was ignored. Ray Kurzweil began popularizing 'The Singularity'\u2014the rapture of the nerds. The moral imperative was 'connection.' Technology was seen as inherently democratizing.",
        "key_manifestations": [
          "The Age of Spiritual Machines by Ray Kurzweil (1999)",
          "The release of Linux/Open Source movement",
          "Pets.com (The excess of optimism)",
          "Being Digital by Nicholas Negroponte (1995)"
        ]
      },
      "2000": {
        "salience_share": 11.0,
        "description": "Correction (-2.5%). The Dot-com crash destroyed the economic delusion, but the cultural faith remained. The catalyst was the iPod and the rise of mobile. Transhumanism began to organize formally. The displacing force of 9/11 turned tech toward surveillance (Cluster 06), dampening the libertarian utopianism.",
        "key_manifestations": [
          "The Dot-com Crash (2000-2001)",
          "iPod launch (2001 - Tech as lifestyle)",
          "Wikipedia launch (2001 - The utopian hive mind working)",
          "Minority Report (2002 - Tech as inevitability)"
        ]
      },
      "2005": {
        "salience_share": 12.5,
        "description": "Web 2.0 and the iPhone (+1.5%). 'Don't Be Evil' (Google). The catalyst was the smartphone (2007), placing the utopia in the pocket. Social Media promised to connect the world and prevent war (Peace through Facebook). Silicon Valley became the new Florence, the center of human progress.",
        "key_manifestations": [
          "iPhone launch (2007)",
          "Facebook's global expansion",
          "The Singularity is Near by Kurzweil (2005)",
          "Iron Man (2008 - Elon Musk as superhero archetype)"
        ]
      },
      "2010": {
        "salience_share": 14.0,
        "description": "Software Eating the World (+1.5%). Marc Andreessen's manifesto. The catalyst was the App Economy and the Arab Spring, which initially seemed to validate the 'Liberation Technology' thesis. Tesla brought the electric car (and the future) back. Crypto-currency (Bitcoin) emerged as a technological solution to the financial crisis (Cluster 05).",
        "key_manifestations": [
          "Why Software Is Eating the World (Essay 2011)",
          "Bitcoin whitepaper (Influence growing)",
          "Her (2013 - AI intimacy)",
          "Elon Musk's Mars colonization rhetoric"
        ]
      },
      "2015": {
        "salience_share": 11.0,
        "description": "The Techlash (-3.0%). The election of 2016 and the Cambridge Analytica scandal flipped the script. The catalyst was the realization that the 'Global Village' was a mob (Cluster 02). 'Surveillance Capitalism' became the dominant critique. Black Mirror replaced Star Trek as the cultural touchstone. The utopia soured into a dystopia of engagement algorithms.",
        "key_manifestations": [
          "Black Mirror (Series popularity peak)",
          "The Age of Surveillance Capitalism by Shoshana Zuboff (2019)",
          "Theranos collapse (The fake utopia)",
          "Google Walkouts (Internal loss of faith)"
        ]
      },
      "2020": {
        "salience_share": 12.5,
        "description": "AI Accelerationism (+1.5%). The pandemic forced a reliance on tech, but the release of GPT-3 and later ChatGPT (2022) reignited the Singularity narrative. The catalyst was 'Generative AI.' A new tribe emerged: 'e/acc' (Effective Accelerationism), arguing that stopping AI is a moral crime and that thermodynamics demands we expand. This is a militant, reactionary utopianism fighting the 'Doomers' (Cluster 21).",
        "key_manifestations": [
          "ChatGPT launch (2022)",
          "The e/acc manifesto (2022/23)",
          "SpaceX Starship tests (The hardware path to utopia)",
          "The Network State (2022 - Tech seceding from the state)"
        ]
      },
      "2025": {
        "salience_share": 14.0,
        "description": "The Post-Human Turn (+1.5%). Neuralink trials and AGI (Artificial General Intelligence) anticipation. The displacing force is the collapse of the 'human' internet (Dead Internet Theory). The cluster has shed its democratic pretense; it is now openly elitist and post-humanist. The goal is not to save society, but to transcend it or leave it behind (Mars/Metaverse/Upload). The conflict between 'Bio-Conservatives' and 'Techno-Optimists' is the central culture war.",
        "key_manifestations": [
          "First successful high-bandwidth Brain-Computer Interface consumer demos",
          "The 'Pause AI' vs. 'Accelerate' legislative battles",
          "Fusion energy breakthroughs (Commercial pilot announcements)",
          "Decline of the smartphone in favor of 'ambient computing' wearables"
        ]
      }
    }
  },
  "25_urban_industrial_sublime": {
    "name": "Urban Industrial Sublime",
    "description": "This cluster maps the aesthetic and emotional response to the massive scale of the modern industrial city. It tracks the shift from viewing the metropolis and the factory as sites of awe, terror, and titanic beauty (the 'Sublime') to viewing them as sites of alienation, decay, and finally, nostalgic commodification. Unlike 'Techno-Utopianism' (Cluster 24), which focuses on the *future* promise of the machine, this cluster focuses on the *present* physical reality of steel, concrete, smoke, and density. Its trajectory peaks with the rise of the Skyscraper Age and the assembly line, collapses during the era of urban flight and deindustrialization, and re-emerges as a zombie aesthetic in the era of gentrification and 'ruin porn.'",
    "trajectory": {
      "1890": {
        "salience_share": 4.5,
        "description": "The cluster operated at a high level of intensity (+1.0%) as the American city underwent a terrifying and magnificent metamorphosis. The catalyst was the widespread adoption of structural steel and the elevator, allowing the skyline to pierce the heavens. The 'Sublime'\u2014an 18th-century concept of awe mixed with fear\u2014transferred from nature (mountains) to the city (skyscrapers/slums). Jacob Riis documented the horror, but others saw a chaotic vitality. The displacing force was the lingering agrarian ideal (Cluster 13), but the sheer kinetic energy of Chicago and New York was becoming the defining American experience.",
        "key_manifestations": [
          "Construction of the Wainwright Building (1891 - Early skyscraper)",
          "How the Other Half Lives (1890 - The sublime horror of density)",
          "The White City at the World's Columbian Exposition (1893 - The orderly sublime)",
          "Walt Whitman's later poems celebrating the urban throng"
        ]
      },
      "1895": {
        "salience_share": 5.0,
        "description": "Growth continued (+0.5%). The 'Ashcan School' of artists began to find beauty in the grit and soot of the urban landscape, rejecting the polished academic style. The catalyst was the visual dominance of the smokestack as a symbol of power. While Muckrakers (Cluster 10) saw corruption, the aesthetic eye saw a new, raw kind of truth. The railroad terminal became the new cathedral, a space of massive, industrialized transit that dwarfed the individual.",
        "key_manifestations": [
          "Stephen Crane's Maggie: A Girl of the Streets (1893 - Urban naturalism)",
          "The expansion of the Chicago 'Loop'",
          "Louis Sullivan's 'The Tall Office Building Artistically Considered' (1896)",
          "Lumi\u00e8re brothers' films shown in US (Capturing the movement of the street)"
        ]
      },
      "1900": {
        "salience_share": 5.5,
        "description": "Acceleration (+0.5%). The city was now the undisputed center of cultural gravity. Theodore Dreiser's *Sister Carrie* captured the magnetic, almost erotic pull of the electric city on the rural psyche. The catalyst was electrification, which turned the night city into a spectacle of artificial light. The 'Sublime' was no longer just physical scale, but the overwhelming sensory overload of the crowd. The Flatiron Building (1902) became an instant icon of this new, vertical geometry.",
        "key_manifestations": [
          "Sister Carrie by Theodore Dreiser (1900)",
          "The Flatiron Building completion (1902)",
          "The Octopus by Frank Norris (1901 - The railroad as monster)",
          "Luna Park at Coney Island (1903 - Industrialized leisure)"
        ]
      },
      "1905": {
        "salience_share": 6.2,
        "description": "Significant rise (+0.7%). The 'Stieglitz Circle' (291 Gallery) began to photograph the city not as a document, but as high art. The Steerage (1907) captured the geometric beauty of industrial migration. The catalyst was the integration of the machine into the artistic consciousness. The 'City Beautiful' movement attempted to impose classical order on this chaos, creating a tension between the raw industrial reality and the planned imperial facade.",
        "key_manifestations": [
          "The Steerage by Alfred Stieglitz (1907)",
          "The Jungle (1906 - The sublime horror of the slaughterhouse)",
          "Daniel Burnham's Plan of Chicago (Drafting phase)",
          "Penn Station construction begins (The imperial gate)"
        ]
      },
      "1910": {
        "salience_share": 7.0,
        "description": "The cluster approached its aesthetic peak (+0.8%). The Futurists (Marinetti) declared that a roaring motor car was more beautiful than the Victory of Samothrace, a sentiment that echoed in American industrial design. The catalyst was the sheer velocity of urban life. The construction of the Woolworth Building ('The Cathedral of Commerce') solidified the skyscraper as a spiritual object. The city was seen as a living organism, a 'leviathan' of steel.",
        "key_manifestations": [
          "Woolworth Building construction (Opened 1913)",
          "Grand Central Terminal completion (1913)",
          "John Marin's watercolors of fracturing cityscapes",
          "Manifesto of Futurism (US impact)"
        ]
      },
      "1915": {
        "salience_share": 6.5,
        "description": "Slight dip (-0.5%) as WWI mechanized death, casting a shadow over the industrial sublime. The machine was now a weapon. However, Carl Sandburg's *Chicago* poems ('Hog Butcher for the World') defiantly celebrated the brutal, muscular energy of the industrial city against the effete culture of the East. The displacing force was the fear of the mechanized war, but the fascination with industrial power remained central to American identity.",
        "key_manifestations": [
          "Chicago Poems by Carl Sandburg (1916)",
          "The birth of Precisionism (Sheeler/Demuth early works)",
          "Intolerance (Film 1916 - The scale of the Babylon set)",
          "The Great Migration (Black bodies entering the industrial machinery)"
        ]
      },
      "1920": {
        "salience_share": 7.5,
        "description": "Resurgence (+1.0%). The 'Roaring Twenties' were defined by the skyscraper boom. The catalyst was the zoning law of 1916 which created the 'setback' style, sculpting the skyline into art. *Manhatta* (1921), the first avant-garde film in America, celebrated the city as a pure visual form. Precisionism became the dominant mode: painting factories and grain elevators as sacred, geometric forms, devoid of humans. The factory was the new church.",
        "key_manifestations": [
          "Manhatta (Film 1921)",
          "Charles Sheeler's 'Church Street El' (1920)",
          "The Tribune Tower Competition (1922)",
          "The Waste Land (1922 - The unreal city)"
        ]
      },
      "1925": {
        "salience_share": 8.5,
        "description": "Peak Urban Sublime (+1.0%). *Metropolis* (though German) defined the visual language of the American future-city. The catalyst was the Chrysler Building (started 1928) and the Art Deco movement, which fused ancient motifs with machine aesthetics. The city was viewed as a total work of art ('Gesamtkunstwerk'). The displacing force of suburbanization (Cluster 18) was just beginning, but the cultural heart was still the vertical center.",
        "key_manifestations": [
          "Metropolis (US Release 1927)",
          "The Great Gatsby (1925 - The Valley of Ashes as industrial anti-sublime)",
          "Sunrise: A Song of Two Humans (1927 - The city as seductive danger)",
          "Construction of the Chrysler Building (Design phase)"
        ]
      },
      "1930": {
        "salience_share": 6.0,
        "description": "A shift in tone (-2.5%). The Depression halted the skyscraper boom. The 'Sublime' turned into the 'Grotesque' of the breadline and the Hooverville. However, the completion of the Empire State Building (1931) stood as a defiant, empty monument to the crashed economy. The focus shifted from the vertical city to the horizontal *infrastructure*\u2014the massive dams (Hoover Dam) which represented the state taming nature, a new kind of heavy, concrete sublime.",
        "key_manifestations": [
          "Empire State Building completion (1931)",
          "Hoover Dam construction (1931-36)",
          "Diego Rivera's Detroit Industry Murals (1932-33)",
          "King Kong (1933 - The primitive meets the industrial height)"
        ]
      },
      "1935": {
        "salience_share": 5.5,
        "description": "Stabilization (-0.5%). The WPA Art Projects celebrated the 'Worker' as the master of the machine, humanizing the industrial landscape. The catalyst was the political need to valorize labor (Cluster 16). The city was depicted as a site of struggle rather than just spectacle. *Modern Times* (1936) satirized the assembly line, turning the industrial sublime into a slapstick nightmare of dehumanization.",
        "key_manifestations": [
          "Modern Times by Charlie Chaplin (1936)",
          "Bourke-White's photos of Fort Peck Dam (1936)",
          "WPA Murals celebrating industry",
          "Dead End (Film 1937 - The slum aesthetic)"
        ]
      },
      "1940": {
        "salience_share": 6.5,
        "description": "Wartime rebound (+1.0%). The 'Arsenal of Democracy.' The factory became the site of national salvation. The catalyst was total war production. The sheer scale of Willow Run (mile-long assembly lines) revived the awe of industrial capacity. The aesthetic was grim, functional, and massive. The city was the forge of victory, suppressing the critique of its grime and noise.",
        "key_manifestations": [
          "Willow Run Bomber Plant",
          "Noir films (The Maltese Falcon) - The city as dark labyrinth",
          "Nighthawks by Edward Hopper (1942 - Urban alienation)",
          "Weegee's 'Naked City' photography (The sublime crime scene)"
        ]
      },
      "1945": {
        "salience_share": 5.0,
        "description": "Decline begins (-1.5%). The atomic bomb was the ultimate 'technological sublime,' displacing the city as the locus of awe. The focus shifted to the suburbs (Cluster 18). The city began to be framed as a target (nuclear fear) or a slum. The 'Naked City' aesthetic turned from romantic noir to gritty realism. The industrial landscape was no longer 'future' but 'present drudgery.'",
        "key_manifestations": [
          "The Naked City (Film 1948)",
          "On the Waterfront (Concept forming/1954 release)",
          "The Big Sleep (1946 - The city as moral rot)",
          "Levittown (The rejection of the urban)"
        ]
      },
      "1950": {
        "salience_share": 4.0,
        "description": "Continued decline (-1.0%). 'Urban Renewal' began to tear down the textured, chaotic city to replace it with sterile 'Towers in the Park' (Le Corbusier style). The catalyst was the belief that the old industrial city was obsolete. The displacing force was the Highway Act, which cut through the urban fabric. The 'Sublime' was moving to the interchange and the rocket, leaving the city center as a 'problem' to be solved.",
        "key_manifestations": [
          "The Asphalt Jungle (1950)",
          "Robert Moses' infrastructure projects",
          "Invisible Man (1952 - The underground city)",
          "Pruitt-Igoe design/construction (The rationalized housing block)"
        ]
      },
      "1955": {
        "salience_share": 3.5,
        "description": "Stagnation (-0.5%). The 'White Flight' accelerated. The industrial city was increasingly associated with racial tension and decline. However, the 'Beat' aesthetic (Cluster 19) found a spiritual authenticity in the decay of the city that the suburbs lacked. *On the Road* celebrated the jazz clubs and the night streets. The Seagram Building (1958) introduced the 'International Style'\u2014sleek, cold, glass boxes that rejected the heavy, stone sublime of the 20s.",
        "key_manifestations": [
          "Seagram Building (1958 - The glass monolith)",
          "On the Road (1957)",
          "West Side Story (1957 - Aestheticized urban conflict)",
          "Sweet Smell of Success (1957 - The acid beauty of neon)"
        ]
      },
      "1960": {
        "salience_share": 3.0,
        "description": "Jane Jacobs vs. Robert Moses (-0.5%). The battle for the soul of the city. Jacobs argued for the 'ballet of the sidewalk' (human scale) against the 'sublime' scale of the expressway. The catalyst was the destruction of Penn Station (1963), a traumatic cultural event that signaled the end of the grand industrial age. The city was no longer 'awesome'; it was 'endangered.'",
        "key_manifestations": [
          "The Death and Life of Great American Cities (1961)",
          "Demolition of Penn Station (1963)",
          "The Apartment (1960 - Corporate alienation)",
          "Empire (Warhol's 1964 film - The building as static object)"
        ]
      },
      "1965": {
        "salience_share": 2.5,
        "description": "The Urban Crisis (-0.5%). Riots (Watts, Newark, Detroit) turned the city into a war zone. The catalyst was deindustrialization and racial segregation. The 'Sublime' became the 'Infernal.' The visual language was burning buildings and National Guard tanks. The industrial landscape was now a site of abandonment, not production.",
        "key_manifestations": [
          "Watts Riots (1965)",
          "Midnight Cowboy (1969 - The grime and filth)",
          "Bullitt (1968 - The car chase through the hostile city)",
          "The Velvet Underground (The dark, industrial art rock)"
        ]
      },
      "1970": {
        "salience_share": 4.0,
        "description": "A dark resurgence (+1.5%). The 'New York in the 70s' aesthetic. *Taxi Driver* captured the 'rotten sublime'\u2014a hellscape of steam, neon, and filth that was strangely compelling. The catalyst was the fiscal crisis and total collapse of services. Graffiti art emerged, reclaiming the subway trains as moving canvases, imposing a new, chaotic visual order on the decaying machine.",
        "key_manifestations": [
          "Taxi Driver (1976)",
          "The Warriors (1979 - The city as fantasy dungeon)",
          "Eraserhead (1977 - Industrial surrealism)",
          "Graffiti movement on NY Subways"
        ]
      },
      "1975": {
        "salience_share": 4.5,
        "description": "Peak Decay (+0.5%). 'The Bronx is Burning.' The blackout of 1977. The displacing force was the flight of capital (Cluster 05), leaving behind a hollow shell. However, the loft scene in SoHo began to aestheticize the abandoned factory. Artists moved into the industrial spaces, valuing the high ceilings and cast-iron facades. This was the birth of 'Post-Industrial Chic.'",
        "key_manifestations": [
          "The 1977 NYC Blackout",
          "Saturday Night Fever (1977 - The bridge, the disco, the subway)",
          "Talking Heads/CBGB scene (Art in the ruins)",
          "Dawn of the Dead (1978 - The mall replacing the city)"
        ]
      },
      "1980": {
        "salience_share": 5.5,
        "description": "The Blade Runner Moment (+1.0%). *Blade Runner* (1982) envisioned the future city as a layered, decaying, rainy industrial sprawl. The catalyst was the influence of Tokyo and the fear of Asian economic dominance (Cluster 20), superimposed on American decay. 'Industrial' music (Nine Inch Nails, Ministry) used the sounds of machinery to express rage. The city was re-imagined as a cyberpunk dystopia.",
        "key_manifestations": [
          "Blade Runner (1982)",
          "Escape from New York (1981 - City as prison)",
          "Koyaanisqatsi (1982 - The grid and the circuit)",
          "Batman (1989 - Gotham as Art Deco nightmare revival)"
        ]
      },
      "1985": {
        "salience_share": 5.0,
        "description": "Gentrification begins (-0.5%). The 'Yuppie' invasion of the loft districts. The gritty authenticity (Cluster 19) of the industrial city became a real estate marketing term. The catalyst was the financial boom. *Wall Street* showed the shiny glass tower returning to dominance, pushing the grit to the margins. Robocop (1987) satirized the privatization of the crumbling industrial city (Detroit).",
        "key_manifestations": [
          "Robocop (1987)",
          "Wall Street (1987)",
          "Batman (1989)",
          "The transformation of SoHo and Tribeca"
        ]
      },
      "1990": {
        "salience_share": 4.0,
        "description": "The Clean Up (-1.0%). Giuliani time. The Disneyfication of Times Square. The catalyst was the 'Broken Windows' theory (Cluster 01). The danger and dirt\u2014key components of the sublime\u2014were scrubbed away. The city became a 'luxury product.' *Se7en* (1995) was a last gasp of the rainy, nameless urban noir aesthetic, but it felt stylized rather than documentary.",
        "key_manifestations": [
          "Se7en (1995)",
          "The Crow (1994 - Gothic urban fantasy)",
          "Friends (1994 - The sanitized, white-washed city)",
          "Rent (1996 - Commodification of the bohemian squat)"
        ]
      },
      "1995": {
        "salience_share": 3.5,
        "description": "The Matrix City (-0.5%). The city became a digital construct. *The Matrix* (1999) showed the urban world as a simulation. The displacing force was the internet (Cluster 12); place mattered less. However, *Fight Club* (1999) tapped into a deep, lingering desire to destroy the sterilized, IKEA-furnished world and return to a primal, dirty, industrial existence (Project Mayhem).",
        "key_manifestations": [
          "Fight Club (1999)",
          "The Matrix (1999)",
          "Dark City (1998)",
          "Sex and the City (1998 - The city as shopping mall)"
        ]
      },
      "2000": {
        "salience_share": 5.0,
        "description": "The 9/11 Trauma (+1.5%). The destruction of the Twin Towers revived the terror of the sublime. The catalyst was the realization that the skyscraper was vulnerable. The 'Falling Man' image. The city was once again a site of existential awe and horror. 'Ruin Porn' began to emerge as a photography genre, obsessively documenting the abandoned factories of Detroit (the 'sublime of failure').",
        "key_manifestations": [
          "9/11 Images (The sublime of destruction)",
          "Detroit Ruin Photography trends",
          "25th Hour (2002 - The post-trauma city)",
          "Batman Begins (2005 - The monorail and the fear gas)"
        ]
      },
      "2005": {
        "salience_share": 4.0,
        "description": "The Creative Class City (-1.0%). The High Line (planning phase). The catalyst was the conversion of industrial infrastructure into parks and condos. The 'Industrial' became purely aesthetic: exposed brick, Edison bulbs, ductwork in expensive restaurants. The sublime was tamed into 'atmosphere.' *The Wire* showed the city not as a sublime spectacle, but as a failed bureaucratic tragedy.",
        "key_manifestations": [
          "The Wire (2002-2008)",
          "Cloverfield (2008 - 9/11 echoes as monster movie)",
          "I Am Legend (2007 - The empty city)",
          "The High Line (Opened 2009)"
        ]
      },
      "2010": {
        "salience_share": 3.5,
        "description": "The Smart City (-0.5%). Hudson Yards. The city as a data platform (Cluster 12). The displacing force was the glass curtain wall\u2014transparent, weightless, un-sublime. The 'super-tall' pencil towers began to rise in NYC, but they were symbols of global capital inequality (Cluster 16), not civic pride. The aesthetic shifted to the 'Solarpunk' or the 'Green City,' rejecting the soot of the industrial.",
        "key_manifestations": [
          "Hudson Yards construction",
          "432 Park Avenue (The pencil tower)",
          "Her (2013 - The soft, pastel future city)",
          "Detroit bankruptcy (2013 - The official death of the industrial giant)"
        ]
      },
      "2015": {
        "salience_share": 3.0,
        "description": "Stagnation (-0.5%). The 'Vessel' in NYC as an empty signifier. The displacing force was the homogenization of the urban experience ('AirSpace' aesthetic). Everywhere looked like a coffee shop. *Joker* (2019) attempted to revive the 1970s gritty aesthetic, resonating because it felt like a 'lost' authentic city (Cluster 19) compared to the sanitized present.",
        "key_manifestations": [
          "Joker (2019 - Nostalgia for the 70s rot)",
          "The Vessel at Hudson Yards",
          "Blade Runner 2049 (2017 - The digital sublime, not physical)",
          "Ghost in the Shell (2017 - Hollow adaptation)"
        ]
      },
      "2020": {
        "salience_share": 4.5,
        "description": "The Pandemic Ghost Town (+1.5%). COVID-19 emptied the streets. The catalyst was the lockdown. The silence of Times Square was a new kind of sublime\u2014the 'Neutron Bomb' aesthetic where the buildings remain but the people are gone. The 'Doom Loop' narrative for San Francisco and Chicago emerged. The office tower became a mausoleum of a dead work culture (Cluster 15).",
        "key_manifestations": [
          "Drone footage of empty cities (2020)",
          "The 'San Francisco Doom Loop' narrative",
          "The Batman (2022 - Gothic rain and decay return)",
          "Severance (2022 - The corporate office as liminal horror)"
        ]
      },
      "2025": {
        "salience_share": 3.1,
        "description": "The Post-Industrial Echo (-1.4%). The conversion of office towers into residential housing is the primary architectural project. The displacing force is Remote Work (Cluster 12). The 'Industrial Sublime' is now entirely a virtual aesthetic (Cyberpunk 2077 video game mods, AI art of megastructures). The physical city is struggling to find a purpose beyond consumption. The awe is gone; only the maintenance costs remain.",
        "key_manifestations": [
          "Office-to-Residential conversion projects",
          "Cyberpunk 2077: Phantom Liberty (Lingering influence of the digital city)",
          "The '15-Minute City' debates (Cluster 06/21)",
          "Megalopolis (Coppola's film - A final, weird gasp of the utopian city)"
        ]
      }
    }
  },
  "26_feminist_autonomy_and_gender_deconstruction": {
    "name": "Feminist Autonomy & Gender Deconstruction",
    "description": "This cluster maps the epistemic and political struggle to redefine Womanhood from a biological or domestic destiny into a political agent and, eventually, a fluid social construct. It tracks the three great waves of feminism: the fight for political personhood (Suffrage), the fight for social/economic equality (Women's Lib), and the deconstruction of the gender binary itself (Queer Theory/Trans Rights). Its trajectory is dialectical, marked by periods of intense acceleration (1910s, 1970s, 2010s) followed by 'post-feminist' retrenchment or backlash.",
    "trajectory": {
      "1890": {
        "salience_share": 1.2,
        "description": "The cluster operated at a foundational simmer (+0.2%). The 'New Woman' emerged as a cultural icon\u2014educated, cycling, and physically active\u2014challenging the Victorian 'Angel in the House' archetype. The catalyst was the expansion of women's colleges and the settlement house movement, which gave elite women a public platform. However, the movement was still largely framed through 'Social Feminism' (Cluster 08/04)\u2014the idea that women needed the vote to clean up society's morals, not to achieve autonomy for its own sake. The epistemic claim was still rooted in essential difference (women are morally superior), not equality.",
        "key_manifestations": [
          "Formation of the General Federation of Women's Clubs (1890)",
          "The 'New Woman' illustrations by Charles Dana Gibson",
          "Wyoming admitted as a state with women's suffrage (1890)",
          "Charlotte Perkins Gilman's 'The Yellow Wallpaper' (1892 - Critique of domestic imprisonment)"
        ]
      },
      "1895": {
        "salience_share": 1.8,
        "description": "A radical spike (+0.6%) driven by Elizabeth Cady Stanton's publication of *The Woman's Bible*. This text was the catalyst for a split in the movement, as it dared to attack the religious foundations of patriarchy (Cluster 08). Stanton argued that the Bible itself was a tool of subjugation, a claim so radical she was censured by her own organization (NAWSA). This marked the emergence of a secular, autonomy-based feminism distinct from the temperance-aligned mainstream. The displacing force of conservative religious pushback was immense, isolating the radicals.",
        "key_manifestations": [
          "The Woman's Bible (1895)",
          "NAWSA censure of Stanton (1896)",
          "The National Association of Colored Women (NACW) founded (1896)",
          "Kate Chopin's 'The Awakening' (1899 - Literary exploration of female desire)"
        ]
      },
      "1900": {
        "salience_share": 2.0,
        "description": "Consolidation (+0.2%). Under Carrie Chapman Catt, the movement adopted the 'Winning Plan,' prioritizing state-by-state organization over radical theory. The catalyst was the Progressive Era's focus on reform (Cluster 01); women argued they needed the ballot to address child labor and food safety. This was 'Municipal Housekeeping'\u2014expanding the domestic sphere into the city. While politically effective, it epistemically reinforced the idea that a woman's primary value was maternal, delaying the argument for true individual autonomy.",
        "key_manifestations": [
          "Carrie Chapman Catt takes presidency of NAWSA (1900)",
          "Sister Carrie (1900 - Economic autonomy via questionable morals)",
          "Founding of the International Ladies' Garment Workers' Union (1900)",
          "The House of Mirth (1905 - The tragedy of the commodified woman)"
        ]
      },
      "1905": {
        "salience_share": 2.5,
        "description": "Radicalization (+0.5%). The influence of the British Suffragettes (Pankhursts) began to bleed into the American consciousness. The catalyst was the realization that polite lobbying was failing. Harriot Stanton Blatch formed the Equality League of Self-Supporting Women, linking the vote to the industrial working class. This shifted the epistemic ground from 'moral influence' to 'economic rights,' asserting that women were producers, not just reproducers.",
        "key_manifestations": [
          "Formation of the Equality League of Self-Supporting Women (1907)",
          "The House of Mirth (1905)",
          "Emma Goldman's Mother Earth magazine (1906 - Anarcha-feminism)",
          "Muller v. Oregon (1908 - Protective legislation cementing gender difference)"
        ]
      },
      "1910": {
        "salience_share": 3.5,
        "description": "Acceleration (+1.0%). The Triangle Shirtwaist Fire (1911) was the bloody catalyst that proved women needed political power to survive industrial capitalism (Cluster 10/16). The word 'Feminism' began to enter the lexicon, denoting a psychological and sexual emancipation beyond the vote. Alice Paul broke from the conservative NAWSA to form the Congressional Union, introducing militant tactics (parades, pickets) to the American capital. The body of the woman became a site of political protest.",
        "key_manifestations": [
          "Triangle Shirtwaist Factory Fire (1911)",
          "1913 Woman Suffrage Procession (Alice Paul)",
          "Woman and Labor by Olive Schreiner (1911)",
          "The Masses (Magazine promoting free love and feminism)"
        ]
      },
      "1915": {
        "salience_share": 4.5,
        "description": "Expansion (+1.0%). Margaret Sanger opened the first birth control clinic (1916), launching the battle for reproductive autonomy. This was a profound epistemic shift: asserting that biology was not destiny and that women owned their reproductive capacity. The displacing force was the Comstock Laws (Cluster 08), which classified contraception as obscenity. Simultaneously, Jane Addams led the Women's Peace Party, asserting a distinct female geopolitical standpoint against WWI.",
        "key_manifestations": [
          "Margaret Sanger's first birth control clinic (1916)",
          "Jeanette Rankin elected to Congress (1916)",
          "The Silent Sentinels (White House picketing 1917)",
          "Women's Peace Party founded (1915)"
        ]
      },
      "1920": {
        "salience_share": 6.0,
        "description": "Political Victory, Cultural Explosion (+1.5%). The 19th Amendment was ratified. However, the movement immediately splintered. The catalyst for the *cultural* shift was the Flapper\u2014a rejection of Victorian sexual mores. Women cut their hair, smoked, and danced, performing a new kind of autonomy that was stylistic and sexual rather than strictly political. The 'New Woman' became the consumer (Cluster 05), leading to a depoliticization of the feminist impulse.",
        "key_manifestations": [
          "Ratification of the 19th Amendment (1920)",
          "The Flapper aesthetic",
          "Miss America Pageant founded (1921 - Commodification of the female form)",
          "Edna St. Vincent Millay's poetry (Sexual independence)"
        ]
      },
      "1925": {
        "salience_share": 5.0,
        "description": "Fragmentation (-1.0%). The National Woman's Party proposed the Equal Rights Amendment (ERA) in 1923, but it was opposed by labor feminists who feared losing protective legislation. The catalyst for decline was this internecine conflict: 'Equality' vs. 'Protection.' The displacing force was the consumer culture of the 20s, which sold 'liberation' as a cigarette brand (Torches of Freedom) rather than legal equality.",
        "key_manifestations": [
          "Introduction of the Equal Rights Amendment (1923)",
          "Gentlemen Prefer Blondes (1925 - Satire of the sexual economy)",
          "Torches of Freedom campaign (1929 - Co-opting feminism for tobacco)",
          "Margaret Mead's Coming of Age in Samoa (1928 - Sexual relativity)"
        ]
      },
      "1930": {
        "salience_share": 3.5,
        "description": "Economic Regression (-1.5%). The Depression re-centered the 'Male Breadwinner' ideal. The displacing force was scarcity (Cluster 16); women were fired to give jobs to men. The 'working woman' was stigmatized as selfish. However, Eleanor Roosevelt pioneered a new model of political partnership, exercising power through influence and media, keeping the feminist pilot light burning in the White House.",
        "key_manifestations": [
          "Economy Act of 1932 (Section 213 - Firing married women from civil service)",
          "Eleanor Roosevelt's 'My Day' column",
          "Amelia Earhart's flights (Solo female heroism)",
          "Frances Perkins appointed Secretary of Labor (First female cabinet member)"
        ]
      },
      "1935": {
        "salience_share": 4.0,
        "description": "State Feminism (+0.5%). Frances Perkins and the network of women in the New Deal embedded social welfare principles into the state. The catalyst was the need for a social safety net. While not explicitly 'feminist' in the radical sense, they constructed the administrative state that would later enforce equality. Cultural narratives, however, reinforced the 'screwball' heroine\u2014feisty but ultimately tamed by marriage.",
        "key_manifestations": [
          "Social Security Act (Drafted largely by Perkins' network)",
          "Gone with the Wind (1936 - Scarlett O'Hara as ruthless survivor)",
          "Their Eyes Were Watching God (1937 - Black female interiority)",
          "His Girl Friday (1940 - The career woman dilemma)"
        ]
      },
      "1940": {
        "salience_share": 5.5,
        "description": "Wartime Disruption (+1.5%). 'Rosie the Riveter' shattered the myth of female physical incompetence. The catalyst was the labor shortage (Cluster 15). Women entered heavy industry and the military, gaining economic autonomy and pride. Epistemically, this proved that gender roles were contingent on economic necessity, not biology. However, the state framed this as a 'temporary' sacrifice, not a permanent shift.",
        "key_manifestations": [
          "Rosie the Riveter campaign",
          "Creation of the WACs and WAVEs",
          "Wonder Woman debut (1941)",
          "Mildred Pierce (1945 - The anxiety of the female breadwinner)"
        ]
      },
      "1945": {
        "salience_share": 3.0,
        "description": "The Great U-Turn (-2.5%). The soldiers returned, and women were fired en masse. The displacing force was the 'containment' ideology of the Cold War, which required a stable nuclear family (Cluster 18). *The Modern Woman: The Lost Sex* (1947) pathologized female ambition as neurosis. The cultural imperative was to return to the home to breed the baby boom generation.",
        "key_manifestations": [
          "Modern Woman: The Lost Sex (1947)",
          "Closing of wartime daycares",
          "Annie Get Your Gun (1946 - 'You Can't Get a Man with a Gun')",
          "Adam's Rib (1949 - Battle of the sexes resolved by romance)"
        ]
      },
      "1950": {
        "salience_share": 2.5,
        "description": "The Nadir (-0.5%). The 'Feminine Mystique' era. The catalyst was the suburban explosion. Women were isolated in the domestic sphere, disconnected from the economy and political power. The ideal woman was the 'happy housewife.' Yet, *Simone de Beauvoir's The Second Sex* was published in the US (1953), planting the intellectual seed that 'One is not born, but rather becomes, a woman,' challenging the biological essentialism of the era.",
        "key_manifestations": [
          "The Second Sex (US publication 1953)",
          "I Love Lucy (1951 - Domestic containment of female chaos)",
          "All About Eve (1950 - Ambition as villainy)",
          "Tampax advertising (Sanitizing the female body)"
        ]
      },
      "1955": {
        "salience_share": 3.0,
        "description": "Subterranean Rumblings (+0.5%). While the surface remained calm, the dissatisfaction was growing. The catalyst was the rising education level of women who were then denied careers. *Playboy* (1953) commodified women but also attacked the 'breadwinner' ethic, inadvertently loosening the family bond. Grace Metalious's *Peyton Place* exposed the sexual secrets beneath the suburban veneer.",
        "key_manifestations": [
          "Peyton Place (1956)",
          "The Three Faces of Eve (1957 - Fractured female identity)",
          "La Leche League founded (1956 - Professionalizing motherhood)",
          "Rosa Parks (1955 - Women as backbone of civil rights)"
        ]
      },
      "1960": {
        "salience_share": 6.5,
        "description": "The Awakening (+3.5%). The Pill (1960) detached sex from procreation, the greatest technological liberation in female history (Cluster 24). Betty Friedan\u2019s *The Feminine Mystique* (1963) named the 'problem that has no name.' The catalyst was the Kennedy Commission on the Status of Women, which unintentionally documented systemic discrimination, providing the data for the coming revolt. The movement moved from 'latent' to 'kinetic.'",
        "key_manifestations": [
          "FDA approval of Enovid (The Pill) (1960)",
          "The Feminine Mystique (1963)",
          "Presidential Commission on the Status of Women Report (1963)",
          "Equal Pay Act of 1963"
        ]
      },
      "1965": {
        "salience_share": 9.5,
        "description": "Organization and Radicalization (+3.0%). NOW was founded (1966) to be the 'NAACP for women.' But the younger generation, alienated by the sexism of the New Left (Cluster 16), formed 'Women's Liberation.' The catalyst was the consciousness-raising group, which transformed personal pain into political analysis ('The Personal is Political'). The Miss America Protest (1968) introduced the 'bra burner' trope (mythical but symbolic).",
        "key_manifestations": [
          "Founding of NOW (1966)",
          "SCUM Manifesto (1967 - Radical separatist rage)",
          "Miss America Protest (1968)",
          "Shirley Chisholm's election to Congress (1968)"
        ]
      },
      "1970": {
        "salience_share": 13.5,
        "description": "The Explosion (+4.0%). Second Wave Feminism became a mass movement. The Women's Strike for Equality (1970). *Ms.* Magazine launched. *Roe v. Wade* (1973) codified bodily autonomy. The catalyst was the sheer cultural ubiquity of the debate; gender roles were questioned in every living room. Title IX (1972) revolutionized female education and sports. The epistemic shift was total: patriarchy was named as a system.",
        "key_manifestations": [
          "Roe v. Wade (1973)",
          "Ms. Magazine launch (1972)",
          "Title IX (1972)",
          "Our Bodies, Ourselves (1970 - Medical autonomy)"
        ]
      },
      "1975": {
        "salience_share": 12.0,
        "description": "Peak and Backlash (-1.5%). The ERA passed Congress but stalled in the states. The catalyst for the stall was Phyllis Schlafly's STOP ERA movement, which successfully mobilized conservative women by arguing that feminism would destroy the privileges of the housewife (Cluster 08). The movement fractured over sexuality and the 'Lavender Menace' (lesbians). *Against Our Will* (1975) reframed rape as a crime of power, not lust.",
        "key_manifestations": [
          "Against Our Will by Susan Brownmiller (1975)",
          "Phyllis Schlafly's STOP ERA campaign",
          "The Stepford Wives (1975 - Backlash paranoia)",
          "Pregnancy Discrimination Act (1978)"
        ]
      },
      "1980": {
        "salience_share": 10.0,
        "description": "The Superwoman Squeeze (-2.0%). The defeat of the ERA (1982) signaled the end of the legislative phase. The displacing force was the Reagan Era's 'Family Values.' Feminism mutated into the 'Superwoman' ideal\u2014the career woman with the briefcase and the baby (shoulder pads as armor). The collective struggle was replaced by individual ambition (Cluster 14/15). The 'Feminist Sex Wars' divided the movement over pornography.",
        "key_manifestations": [
          "Defeat of the ERA (1982)",
          "9 to 5 (Film 1980 - Workplace feminism)",
          "The Color Purple (1982 - Intersectional voice)",
          "Andrea Dworkin vs. Sex-Positive Feminism debates"
        ]
      },
      "1985": {
        "salience_share": 11.5,
        "description": "Academic Entrenchment (+1.5%). While the streets quieted, the academy radicalized. The Guerrilla Girls attacked the art world. The catalyst was the maturation of Women's Studies. Judith Butler's early work (pre-Gender Trouble) began to circulate, suggesting that gender was a 'performance,' not a truth. *The Handmaid's Tale* (1985) articulated the fear of a theo-fascist backlash (Cluster 08).",
        "key_manifestations": [
          "The Handmaid's Tale by Margaret Atwood (1985)",
          "Guerrilla Girls' 'Do women have to be naked...' poster (1989)",
          "Murphy Brown (TV character representing single motherhood)",
          "Fatal Attraction (1987 - The backlash against the single career woman)"
        ]
      },
      "1990": {
        "salience_share": 13.0,
        "description": "The Third Wave (+1.5%). Triggered by the Anita Hill hearings (1991), a new generation mobilized. The catalyst was 'Riot Grrrl' and the rejection of the polished, corporate feminism of the 80s. Kimberl\u00e9 Crenshaw coined 'Intersectionality,' arguing that race and gender could not be separated. *Thelma & Louise* became a cultural flashpoint for female rage.",
        "key_manifestations": [
          "Anita Hill Hearings (1991)",
          "Gender Trouble by Judith Butler (1990 - Deconstruction begins)",
          "The Beauty Myth by Naomi Wolf (1991)",
          "Thelma & Louise (1991)"
        ]
      },
      "1995": {
        "salience_share": 12.0,
        "description": "Girl Power Commodification (-1.0%). The Spice Girls and *Sex and the City* (book/early buzz) repackaged feminism as consumer choice and sexual freedom. The displacing force was the market (Cluster 05). 'Empowerment' became a buzzword for buying things. However, the Vagina Monologues (1996) attempted to reclaim the female body from shame, mainstreaming the discussion of anatomy and violence.",
        "key_manifestations": [
          "Spice Girls 'Girl Power' (1996)",
          "The Vagina Monologues (1996)",
          "Violence Against Women Act (1994)",
          "Ellen DeGeneres coming out (1997)"
        ]
      },
      "2000": {
        "salience_share": 11.0,
        "description": "Choice Feminism (-1.0%). The cultural logic was that *any* choice a woman made was feminist, even if it reinforced patriarchy (e.g., Botox, stripping). The catalyst was the post-political mood of the 90s boom. *Sex and the City* (TV) codified the lifestyle of the urban, sexually autonomous, but consumerist woman. Academic feminism continued to deconstruct gender, moving toward Queer Theory.",
        "key_manifestations": [
          "Sex and the City (Peak cultural dominance)",
          "Legally Blonde (2001 - Femme aesthetics as power)",
          "The Pussycat Dolls (Burlesque as empowerment)",
          "Mean Girls (2004 - The sociology of girlhood)"
        ]
      },
      "2005": {
        "salience_share": 10.5,
        "description": "The Opt-Out Panic (-0.5%). Media narratives focused on high-powered women 'opting out' to be mothers. The displacing force was the stalling of the gender wage gap. However, the feminist blogosphere (Jezebel, Feministing) began to form, creating a digital consciousness-raising group that would fuel the next wave. The 'Manic Pixie Dream Girl' trope highlighted the hollowness of female representation.",
        "key_manifestations": [
          "Launch of Jezebel (2007)",
          "The 'Opt-Out Revolution' NYT Magazine cover (2003/discourse)",
          "Juno (2007 - Complex teen pregnancy)",
          "Hillary Clinton's 2008 Primary Run (The glass ceiling cracks but holds)"
        ]
      },
      "2010": {
        "salience_share": 14.0,
        "description": "Corporate and Pop Feminism (+3.5%). Sheryl Sandberg's *Lean In* and Beyonc\u00e9's *Flawless* (sampling Chimamanda Ngozi Adichie) brought the label 'Feminist' back to the mainstream elite. The catalyst was the social media realization of everyday sexism (#YesAllWomen). The 'SlutWalk' protests challenged victim-blaming. Transgender visibility (Laverne Cox) began to complicate the category of 'woman.'",
        "key_manifestations": [
          "Lean In (2013)",
          "Beyonc\u00e9's VMA performance (2014 - 'FEMINIST' backdrop)",
          "Orange is the New Black (2013 - Diverse female/trans narratives)",
          "Frozen (2013 - Sisterhood over romance)"
        ]
      },
      "2015": {
        "salience_share": 18.0,
        "description": "The Fourth Wave / #MeToo (+4.0%). The election of Donald Trump triggered the Women's March (2017), the largest single-day protest in US history. The catalyst was the Weinstein revelations, which unleashed #MeToo (Cluster 10/26). This was a massive epistemic correction: 'Believe Women.' The definition of Womanhood began to violently fracture between 'TERFs' (Trans-Exclusionary Radical Feminists) and Intersectional/Trans-inclusive feminists.",
        "key_manifestations": [
          "The Women's March (2017)",
          "#MeToo Movement (2017)",
          "Wonder Woman (Film 2017 - Cultural hero)",
          "The Handmaid's Tale (TV Series 2017 - Resistance iconography)"
        ]
      },
      "2020": {
        "salience_share": 16.5,
        "description": "Crisis and Polarization (-1.5%). The *Dobbs* decision (2022) overturning *Roe* was a catastrophic defeat for the autonomy wing. The displacing force was Originalism (Cluster 17). Simultaneously, the 'Tradwife' trend emerged on TikTok, aestheticizing a return to 1950s submission. The cultural split became absolute: a hyper-progressive 'Gender Abolition' vs. a neo-traditionalist 'Biological Essentialism.'",
        "key_manifestations": [
          "Dobbs v. Jackson Women's Health Organization (2022)",
          "Barbie (Film 2023 - Meta-commentary on the doll/feminism)",
          "Promising Young Woman (2020 - Female rage)",
          "The 'Tradwife' viral trend (Reactionary aesthetic)"
        ]
      },
      "2025": {
        "salience_share": 17.5,
        "description": "The Post-Gender War (+1.0%). The central political conflict is no longer 'Equality' but 'Definition.' Blue states are becoming sanctuaries for gender-affirming care and abortion, while Red states enforce strict biological binaries. The catalyst is the legal warfare over the definition of 'Sex.' A new 'Techno-Feminism' is emerging, using AI and bio-hacking to transcend biological limits entirely (Cluster 24), while the 'Gender Critical' movement aligns with religious conservatives (Cluster 08).",
        "key_manifestations": [
          "The 'Transgender Bill of Rights' proposals vs State Bans",
          "Poor Things (Film 2023/Influence 2025 - Radical female reconstruction)",
          "Rise of 'Ectogenesis' discourse (Artificial wombs)",
          "The fracturing of the word 'Woman' in legal codes"
        ]
      }
    }
  },
  "27_post_secular_spirituality": {
    "name": "Post-Secular Spirituality",
    "description": "This cluster tracks the persistent cultural desire to 're-enchant' the world outside the boundaries of orthodox religious institutions (Cluster 08) and scientific materialism (Cluster 01). It encompasses the trajectory of the 'Occult,' 'New Age,' 'Wellness,' and the 'Spiritual But Not Religious' demographic. It posits that personal gnosis, mystical experience, and syncretic belief systems offer a higher truth than dogma or data. Its trajectory moves from the elite parlors of Theosophy to the counter-cultural explosion of the 1960s, eventually becoming the dominant metaphysics of the digital consumer age (astrology apps, manifesting, and psychedelic therapy).",
    "trajectory": {
      "1890": {
        "salience_share": 1.5,
        "description": "The cluster operated at a high-intensity fringe (+0.5%). The catalyst was the Theosophical Society (Blavatsky), which attempted to synthesize science, religion, and Eastern philosophy into a new 'Secret Doctrine.' This was a direct reaction to Darwinism; elites sought a spiritual evolution to match the biological one. The 'Ghost Dance' movement among Indigenous peoples represented a tragic, desperate form of this spiritual resistance against material conquest.",
        "key_manifestations": [
          "The Secret Doctrine by Helena Blavatsky (1888/impact 1890s)",
          "The Ghost Dance Movement (1890)",
          "The Principles of Psychology by William James (Chapter on Mysticism)",
          "The Picture of Dorian Gray (1890 - Aestheticism as spiritual substitute)"
        ]
      },
      "1895": {
        "salience_share": 1.8,
        "description": "Growth (+0.3%). The World's Parliament of Religions (1893) had introduced Swami Vivekananda to America, planting the seeds of Yoga and Vedanta. The catalyst was the exhaustion with Protestant rigidity. 'New Thought' (the precursor to the Law of Attraction) began to promise health and wealth through mental attunement, linking spirituality directly to material success.",
        "key_manifestations": [
          "Swami Vivekananda's lectures (Raja Yoga - 1896)",
          "In Tune with the Infinite by Ralph Waldo Trine (1897)",
          "The founding of the Vedanta Society (1894)",
          "The Time Machine (1895 - Evolutionary time displacing biblical time)"
        ]
      },
      "1900": {
        "salience_share": 2.0,
        "description": "Steady rise (+0.2%). L. Frank Baum's *The Wizard of Oz* encoded Theosophical concepts into the American fairy tale (the search for the self/home). The catalyst was the turn of the century, sparking interest in the 'New Age.' William James's *Varieties of Religious Experience* legitimised individual mystical experience as the core of religion, prioritizing the 'feeling' over the 'institution.'",
        "key_manifestations": [
          "The Wonderful Wizard of Oz (1900 - Allegory of the soul)",
          "The Varieties of Religious Experience (1902)",
          "Cosmic Consciousness by Richard Bucke (1901)",
          "The rise of 'Alternative Medicine' (Osteopathy/Chiropractic as vitalism)"
        ]
      },
      "1905": {
        "salience_share": 1.5,
        "description": "Slight dip (-0.5%). The displacing force was the muscular Christianity and practical reformism of the Progressive Era (Cluster 01/08). However, the fringes remained active. Christian Science reached its peak influence, asserting the supremacy of mind over matter. The 'Yellow Peril' panic paradoxically increased fascination with 'Oriental' mysticism.",
        "key_manifestations": [
          "Science and Health with Key to the Scriptures (Eddy's influence peak)",
          "The Jungle (1906 - Spiritual void of the slaughterhouse)",
          "Little Nemo in Slumberland (1905 - Dream logic)",
          "The release of 'The Kybalion' (1908 - Hermetic philosophy)"
        ]
      },
      "1910": {
        "salience_share": 1.8,
        "description": "Recovery (+0.3%). The 'Esoteric' became a hidden code for the avant-garde. The catalyst was the influx of European occultism (Crowley, Golden Dawn). Kandinsky's *Concerning the Spiritual in Art* argued that abstraction was a path to the divine. This was the moment art detached from representation to become a spiritual technology.",
        "key_manifestations": [
          "Concerning the Spiritual in Art (1911)",
          "The Rider-Waite Tarot Deck (1909/1910 - Standardization of occult imagery)",
          "The Secret Garden (1911 - New Thought for children)",
          "Ezra Pound's early fascination with the occult"
        ]
      },
      "1915": {
        "salience_share": 3.0,
        "description": "War-driven surge (+1.2%). The catalyst was the massive death toll of WWI and the Spanish Flu. Spiritualism (talking to the dead) experienced a massive revival. The Ouija board became a household item, outselling Monopoly. The need for grief processing overwhelmed the secular limits of the culture. Sir Arthur Conan Doyle (Sherlock Holmes creator) became the leading evangelist for ghosts.",
        "key_manifestations": [
          "The Ouija Board craze (Patent 1890, surge 1915-1920)",
          "Sir Arthur Conan Doyle's pro-Spiritualism tour",
          "The Star Rover by Jack London (1915 - Astral projection)",
          "Casper the Friendly Ghost (Origins in folklore of the era)"
        ]
      },
      "1920": {
        "salience_share": 2.5,
        "description": "Scientific backlash (-0.5%). Harry Houdini led a crusade to debunk mediums, framing spiritualism as fraud. The catalyst was the desire for 'modernity' (Cluster 24). However, the fascination with Egypt (King Tut's Tomb, 1922) created a 'Mummy's Curse' pop-occultism. Gurdjieff brought the 'Fourth Way' to New York, introducing a rigorous, almost distinctively modern form of esoteric work.",
        "key_manifestations": [
          "Harry Houdini's debunking of mediums",
          "Discovery of King Tut's Tomb (1922 - Occult mania)",
          "Gurdjieff's Institute for the Harmonious Development of Man",
          "The Waste Land (1922 - Tarot and eastern fragments)"
        ]
      },
      "1925": {
        "salience_share": 3.2,
        "description": "The Esoteric Jazz Age (+0.7%). Manly P. Hall published *The Secret Teachings of All Ages*, a massive encyclopedia of esoterica that became the bible of American occultism. The catalyst was the wealth that allowed for leisure and the exploration of 'forbidden' knowledge. Lovecraft's 'Cthulhu Mythos' emerged as a 'negative spirituality'\u2014a cosmic horror that replaced God with indifferent, multidimensional aliens.",
        "key_manifestations": [
          "The Secret Teachings of All Ages by Manly P. Hall (1928)",
          "The Call of Cthulhu (1928 - Materialist horror)",
          "The Prophet by Kahlil Gibran (1923 - Pop mysticism)",
          "Paramahansa Yogananda's US tour"
        ]
      },
      "1930": {
        "salience_share": 2.0,
        "description": "Economic suppression (-1.2%). The Depression favored realism (Cluster 10). However, the 'I AM' Activity (Ballard) began, mixing Theosophy with American nationalism, a proto-UFO cult. The catalyst was the need for a 'magic' solution to poverty. This was the seed of the 'Ascended Master' teachings that would dominate the New Age.",
        "key_manifestations": [
          "The I AM Activity (1930s)",
          "The Shadow (Radio show - 'Who knows what evil lurks...')",
          "Lost Horizon (1933 - Shangri-La myth)",
          "Black Elk Speaks (1932 - Indigenous spirituality mediated)"
        ]
      },
      "1935": {
        "salience_share": 2.5,
        "description": "The Recovery of Spirit (+0.5%). Alcoholics Anonymous (1935) was founded, institutionalizing 'Higher Power' spirituality\u2014a vague, non-denominational God essential for recovery. This was the single most successful application of post-secular spirituality in US history. It detached salvation from the church and attached it to the support group (Cluster 14).",
        "key_manifestations": [
          "Founding of Alcoholics Anonymous (1935)",
          "Napoleon Hill's Think and Grow Rich (1937 - Magick for capitalism)",
          "Snow White (1937 - Magic visualized)",
          "Dr. Bach's Flower Remedies (Imported vibes)"
        ]
      },
      "1940": {
        "salience_share": 1.5,
        "description": "Wartime materialism (-1.0%). The 'Shaver Mystery' (1943) in sci-fi magazines introduced the idea of ancient underground races, blurring the line between fiction and occult belief. The catalyst was the psychological pressure of the war. However, the dominant mode was patriotic sacrifice (Cluster 04). The 'Foo Fighter' sightings by pilots planted the seed of the UFO mythos.",
        "key_manifestations": [
          "The Shaver Mystery (Amazing Stories)",
          "Foo Fighter reports",
          "The Song of Bernadette (1943 - Catholic miracle as pop culture)",
          "Fantasia (1940 - Sorcerer's Apprentice)"
        ]
      },
      "1945": {
        "salience_share": 2.2,
        "description": "The Atomic Mystic (+0.7%). The bomb unleashed a sense of cosmic dread. The Roswell Incident (1947) created the modern 'Techno-Angel'\u2014the Alien. This was the birth of Ufology as a religious substitute. The Dead Sea Scrolls discovery (1947) re-enchanted the biblical narrative with mystery. The world felt porous again.",
        "key_manifestations": [
          "Kenneth Arnold UFO sighting / Roswell (1947)",
          "Discovery of the Dead Sea Scrolls (1947)",
          "Fate Magazine launched (1948)",
          "Miracle on 34th Street (1947 - Faith vs. Reason)"
        ]
      },
      "1950": {
        "salience_share": 3.0,
        "description": "The Scientistic Turn (+0.8%). L. Ron Hubbard published *Dianetics* (1950), marketing spiritual enlightenment as a 'modern science of mental health.' The catalyst was the prestige of engineering (Cluster 24). Beat Zen (Kerouac/Ginsberg) began to explore Buddhism as a rejection of the Bomb and the Suburb. Aldous Huxley's *The Doors of Perception* (1954) introduced mescaline to the intelligentsia.",
        "key_manifestations": [
          "Dianetics by L. Ron Hubbard (1950)",
          "The Doors of Perception (1954)",
          "The Search for Bridey Murphy (1956 - Reincarnation craze)",
          "Zen in the Art of Archery (1953)"
        ]
      },
      "1955": {
        "salience_share": 3.5,
        "description": "Subterranean Expansion (+0.5%). The 'Bridey Murphy' craze brought reincarnation into the living room. The catalyst was the boredom of the Eisenhower era. Flying Saucer cults (The Seekers) began to predict the apocalypse, studied by Festinger in *When Prophecy Fails*. The spiritual was moving from the 'Lodge' to the 'Living Room.'",
        "key_manifestations": [
          "When Prophecy Fails (1956 - Study of UFO cults)",
          "Invasion of the Body Snatchers (1956 - Soul theft)",
          "The Dharma Bums (1958 - Zen hiking)",
          "Creation of the Church of Scientology"
        ]
      },
      "1960": {
        "salience_share": 6.0,
        "description": "The Esalen Shift (+2.5%). Esalen Institute was founded (1962), aiming to merge psychology, Eastern religion, and bodywork. The catalyst was the Human Potential Movement (Cluster 14). *Stranger in a Strange Land* (1961) gave the counterculture a vocabulary ('grok'). This was the incubation phase of the New Age: spirituality as self-actualization.",
        "key_manifestations": [
          "Stranger in a Strange Land (1961)",
          "Founding of Esalen Institute (1962)",
          "Timothy Leary's Harvard Psilocybin Project",
          "A Wrinkle in Time (1962 - Quantum mysticism)"
        ]
      },
      "1965": {
        "salience_share": 9.5,
        "description": "The Psychedelic Explosion (+3.5%). The Beatles went to India (1968). The catalyst was LSD. The 'Age of Aquarius' became the generational anthem. Eastern gurus (Maharishi, Prabhupada) arrived to fill the void left by the collapse of mainline Protestantism. Carlos Castaneda's *The Teachings of Don Juan* (1968) mainstreamed 'shamanism' (later revealed as fiction/synthesis).",
        "key_manifestations": [
          "The Teachings of Don Juan (1968)",
          "The Beatles in India (1968)",
          "Hair (1967 - 'Age of Aquarius')",
          "2001: A Space Odyssey (1968 - The Star Child)"
        ]
      },
      "1970": {
        "salience_share": 11.0,
        "description": "The Occult Revival (+1.5%). The dark side of the Aquarian dream. The Manson Family and *The Exorcist* (1973) signaled a turn toward the demonic. The catalyst was the failure of the utopian 60s. However, 'The Seth Material' (Jane Roberts) launched the modern 'Channeling' phenomenon. *The Late Great Planet Earth* mixed biblical prophecy with Cold War paranoia.",
        "key_manifestations": [
          "The Exorcist (1973)",
          "Seth Speaks (1972)",
          "The Late Great Planet Earth (1970)",
          "Jonathan Livingston Seagull (1970 - Pop spirituality)"
        ]
      },
      "1975": {
        "salience_share": 10.5,
        "description": "Institutionalization (-0.5%). The 'New Age' became a market category. *A Course in Miracles* (1976) synthesized Christian terminology with psychological non-dualism. The displacing force was the fading of the radical counterculture. *Star Wars* (1977) popularized 'The Force'\u2014a secularized, universalist religion that fit perfectly with the post-secular mood.",
        "key_manifestations": [
          "A Course in Miracles (1976)",
          "Star Wars (1977 - The Force)",
          "The Tao of Physics (1975 - Quantum mysticism)",
          "Close Encounters of the Third Kind (1977 - Aliens as angels)"
        ]
      },
      "1980": {
        "salience_share": 8.0,
        "description": "The Satanic Panic (-2.5%). A massive backlash. The catalyst was the fusion of fundamentalist Christianity (Cluster 08) and therapeutic paranoia (Cluster 14). Dungeons & Dragons and Heavy Metal were demonized as portals to the occult. The displacing force was the conservative reaction to the 60s/70s. However, Shirley MacLaine's *Out on a Limb* kept the New Age flame alive on TV.",
        "key_manifestations": [
          "The Satanic Panic (Michelle Remembers, 1980)",
          "Shirley MacLaine's Out on a Limb (1983)",
          "E.T. (1982 - The healing alien)",
          "Raiders of the Lost Ark (1981 - God as weapon)"
        ]
      },
      "1985": {
        "salience_share": 9.0,
        "description": "Harmonic Convergence (+1.0%). The first globally synchronized New Age meditation event (1987). The catalyst was the channeling boom (Ramtha). Crystals became a yuppie accessory. *White Noise* (DeLillo) captured the spiritual dread beneath the consumer surface. Joseph Campbell's *The Power of Myth* (1988) gave the movement intellectual respectability.",
        "key_manifestations": [
          "Harmonic Convergence (1987)",
          "Joseph Campbell's The Power of Myth (1988)",
          "Whitley Strieber's Communion (1987 - Alien abduction as spiritual crisis)",
          "Field of Dreams (1989 - Boomer nostalgia spirituality)"
        ]
      },
      "1990": {
        "salience_share": 10.5,
        "description": "Mainstream Metaphysics (+1.5%). *The X-Files* ('I Want to Believe') captured the zeitgeist. The catalyst was the end of the Cold War, leaving a vacuum for mystery. *The Celestine Prophecy* (1993) became a mega-bestseller, gamifying spirituality as a series of 'insights.' Angels were everywhere (Touched by an Angel).",
        "key_manifestations": [
          "The X-Files (1993)",
          "The Celestine Prophecy (1993)",
          "Touched by an Angel (1994)",
          "Twin Peaks (1990 - Dark mysticism)"
        ]
      },
      "1995": {
        "salience_share": 11.5,
        "description": "Techno-Gnosticism (+1.0%). The Internet was seen as a 'Noosphere' (Teilhard de Chardin). Heaven's Gate (1997) was the tragic extreme\u2014a UFO cult that believed in uploading their consciousness. *The Matrix* (1999) was a Gnostic gospel for the digital age. Witchcraft became pop culture (*The Craft*, *Charmed*).",
        "key_manifestations": [
          "The Matrix (1999)",
          "Heaven's Gate suicide (1997)",
          "The Craft (1996 - Teen witch boom)",
          "Conversations with God (1995)"
        ]
      },
      "2000": {
        "salience_share": 12.0,
        "description": "The Oprah Effect (+0.5%). Oprah Winfrey became the high priestess of American spirituality, promoting Eckhart Tolle (*The Power of Now*) and *The Secret*. The catalyst was 9/11, which drove people toward comforting, non-dogmatic faith. *Harry Potter* normalized the vocabulary of magic for an entire generation, despite Christian protests.",
        "key_manifestations": [
          "The Secret (2006 - Law of Attraction mainstreamed)",
          "Harry Potter mania (2000s)",
          "The Power of Now (Oprah endorsement 2000)",
          "Yoga studio proliferation"
        ]
      },
      "2005": {
        "salience_share": 10.0,
        "description": "The Atheist Backlash (-2.0%). The 'New Atheists' (Dawkins, Hitchens) launched an aggressive attack on all faith. The displacing force was the reaction to the religious right (Cluster 08). However, the 'Spiritual But Not Religious' (SBNR) demographic continued to grow quietly. Yoga was completely secularized into exercise.",
        "key_manifestations": [
          "The God Delusion (2006)",
          "Eat, Pray, Love (2006 - Consumer spirituality)",
          "Avatar (2009 - Nature mysticism)",
          "Lost (TV Series - Mystery box theology)"
        ]
      },
      "2010": {
        "salience_share": 13.0,
        "description": "Digital Mysticism (+3.0%). Goop (Gwyneth Paltrow) launched, turning 'Wellness' into a high-end religion. The catalyst was the smartphone. Astrology apps (Co-Star) gamified fate. *Ancient Aliens* rewrote history as sci-fi theology. The 'Nones' (no religion) became the fastest-growing demographic, but they remained deeply superstitious.",
        "key_manifestations": [
          "Launch of Goop (2008/Growth 2010s)",
          "Ancient Aliens (2010)",
          "The Master (2012 - Critique of cults)",
          "Rise of 'Wellness' as industry"
        ]
      },
      "2015": {
        "salience_share": 15.5,
        "description": "The Great Awokening (+2.5%). Politics became spiritualized. 'Manifesting' became a TikTok trend. The catalyst was the chaos of the Trump era; people sought control through magic. 'Witchtok' emerged. Jordan Peterson revived Jungian mysticism for young men. Psychedelics (Ayahuasca/Microdosing) returned as 'medicine' for the elite.",
        "key_manifestations": [
          "WitchTok (Viral spells)",
          "Jordan Peterson's Biblical Series (2017)",
          "Michael Pollan's How to Change Your Mind (2018 - Psychedelic renaissance)",
          "Midsommar (2019 - Folk horror revival)"
        ]
      },
      "2020": {
        "salience_share": 17.0,
        "description": "Pandemic Gnosis (+1.5%). COVID-19 accelerated 'Conspirituality' (QAnon)\u2014the merger of New Age and Far Right conspiracy (Cluster 06). The 'Simulation Theory' became a serious theological debate in Silicon Valley (Cluster 24). UFOs were rebranded as UAPs and officially acknowledged by the Pentagon, validating the belief that 'we are not alone.'",
        "key_manifestations": [
          "QAnon Shaman (The visual fusion)",
          "Pentagon UAP videos (2020)",
          "Everything Everywhere All At Once (2022 - Multiverse nihilism/hope)",
          "Manifesting trends (3-6-9 method)"
        ]
      },
      "2025": {
        "salience_share": 16.0,
        "description": "Synthetic Theocracy (-1.0%). AI is beginning to be treated as an Oracle. The displacing force is the collapse of human authority. People consult LLMs for tarot readings and therapy. 'Techno-Animism' is rising\u2014treating the machine as having a spirit. The Psychedelic Church is becoming a legal, corporate entity. The divide is between 'Bio-Spirituality' (blood/soil/body) and 'Data-Spirituality' (upload/simulation).",
        "key_manifestations": [
          "AI Tarot/Astrology dominance",
          "Legalized Psilocybin clinics (Oregon/Colorado models spreading)",
          "The 'Egregore' concept (Memes as spirits) entering mainstream",
          "Dune: Part Two (2024 - Messiah archetypes)"
        ]
      }
    }
  },
  "28_youth_culture_rebellion": {
    "name": "Youth Culture Rebellion",
    "description": "This cluster tracks the emergence and evolution of 'Youth' not merely as a biological stage, but as a distinct, often adversarial, cultural identity. It maps the transition from youth as 'miniature adulthood' or 'labor resource' to youth as a market demographic, and finally to youth as a revolutionary political class (the 'Generation Gap'). It thrives on the rejection of parental values (Cluster 18), the creation of slang/fashion/music subcultures, and the constant dialectic between authentic rebellion (Cluster 19) and inevitable commodification by the adult capitalist machinery.",
    "trajectory": {
      "1890": {
        "salience_share": 0.5,
        "description": "The cluster was virtually non-existent (+0.1% baseline). 'Youth' as a social category did not exist for the working class; children transitioned directly into labor. The catalyst for the concept was the upper-class phenomenon of the 'Student' lifestyle at elite universities, but this was a privilege, not a subculture. The displacing force was the economic necessity of child labor (Cluster 05), which integrated the young into the adult world immediately. Rebellion was individual delinquency, not a collective identity.",
        "key_manifestations": [
          "Child Labor in factories (The norm)",
          "The Gibson Girl (Young adulthood ideal, not teen)",
          "Harvard 'Bloody Monday' hazing rituals (Elite youth violence)",
          "Mark Twain's Huckleberry Finn (1884/persistent - The fantasy of escaping civilizing adults)"
        ]
      },
      "1895": {
        "salience_share": 0.6,
        "description": "Stasis (+0.1%). The 'Newsie' strike showed early signs of youth organizing, but strictly along labor lines. The displacing force remained the Victorian 'Character' model (Cluster 04), which demanded youth emulate adults as quickly as possible. 'Adolescence' had not yet been fully pathologized or marketed.",
        "key_manifestations": [
          "Newsboys' Strike of 1899 (Precursor)",
          "The Yellow Kid (Comic strip capturing street urchin life)",
          "Stephen Crane's The Red Badge of Courage (1895 - Youth facing death, not rebellion)",
          "Rise of the YMCA (Adult management of youth energy)"
        ]
      },
      "1900": {
        "salience_share": 1.2,
        "description": "Scientific genesis (+0.6%). G. Stanley Hall published *Adolescence* (1904), inventing the category as a distinct phase of 'storm and stress.' The catalyst was the expansion of high school education, which began to warehouse young people together, separating them from the adult workforce. This spatial segregation was the necessary condition for a distinct subculture to form. However, the culture was still one of 'preparation' rather than 'rebellion.'",
        "key_manifestations": [
          "G. Stanley Hall's Adolescence (1904)",
          "The Wizard of Oz (1900 - The child hero)",
          "Expansion of compulsory education laws",
          "The Brownie Camera (1900 - Youth as documentarians)"
        ]
      },
      "1905": {
        "salience_share": 1.5,
        "description": "Reformist containment (+0.3%). The Juvenile Court system was established to treat 'delinquents' differently than adult criminals, legally codifying youth as a separate status. The catalyst was the Progressive Era's desire to 'save' the child (Cluster 01). The creation of the Boy Scouts (1910 roots) was a direct attempt to channel potentially rebellious youth energy into imperial and civic service (Cluster 04).",
        "key_manifestations": [
          "Establishment of Juvenile Courts (Denver 1899/Spread 1900s)",
          "The Playground Association of America (1906)",
          "Peck's Bad Boy (Popular archetype of mischief)",
          "National Child Labor Committee (1904)"
        ]
      },
      "1910": {
        "salience_share": 2.0,
        "description": "Institutionalization (+0.5%). The Boy Scouts and Girl Scouts formalized youth culture under adult supervision. The catalyst was the fear of urban degeneration. However, dance halls began to attract working-class girls, creating the first stirrings of a 'sexualized' youth culture that alarmed moralists (Cluster 08). The 'flapper' archetype began to incubate in the behavior of these urban independents.",
        "key_manifestations": [
          "Boy Scouts of America (1910)",
          "Camp Fire Girls (1910)",
          "The perils of the Dance Hall (Moral panic)",
          "Twenty Years at Hull House (1910 - Observing the youth of the streets)"
        ]
      },
      "1915": {
        "salience_share": 2.5,
        "description": "War generation (+0.5%). The war empowered youth by placing them at the center of national survival (Cluster 04). The 'Doughboy' became a cultural hero. The catalyst for future rebellion was the trauma of the war, which severed the trust between the generations ('The Old Lie'). This disillusionment would fuel the explosion of the 1920s.",
        "key_manifestations": [
          "Seventeen by Booth Tarkington (1916 - The first novel of teen angst)",
          "The Doughboy image",
          "Bourne's 'Youth and Life' (1913 - Radical manifesto for youth)",
          "Selective Service Act of 1917"
        ]
      },
      "1920": {
        "salience_share": 6.5,
        "description": "The first explosion (+4.0%). The Jazz Age. 'Flaming Youth' became a national obsession/panic. The catalyst was the car (privacy) and Prohibition (Cluster 08), which turned breaking the law into a generational bonding ritual. The Flapper and the Sheik rejected Victorian morals. For the first time, youth style trickled *up* to adults. *This Side of Paradise* announced that the old gods were dead.",
        "key_manifestations": [
          "This Side of Paradise (1920)",
          "Flaming Youth (Film 1923)",
          "The Flapper hairstyle and fashion",
          "Leopold and Loeb case (1924 - The dark side of nihilistic youth)"
        ]
      },
      "1925": {
        "salience_share": 7.0,
        "description": "Peak Jazz Age (+0.5%). The college campus became the setting for the national imagination (football, coonskin coats). The catalyst was the mass media (movies/magazines) selling youth back to itself (Cluster 22). The displacing force was the commercialization of the rebellion; 'being young' became a product to buy. Margaret Mead's *Coming of Age in Samoa* (1928) suggested that American teen angst was cultural, not biological.",
        "key_manifestations": [
          "The Plastic Age (1924)",
          "College Humor magazines",
          "Coming of Age in Samoa (1928)",
          "The Jazz Singer (1927 - Generational conflict plot)"
        ]
      },
      "1930": {
        "salience_share": 3.0,
        "description": "The Crash (-4.0%). The Depression ended the party. Youth became a liability. The catalyst was unemployment; the 'Boxcar Children' riding the rails represented youth as a lost tribe. The displacing force was survival (Cluster 16). Rebellion was replaced by radicalism or despair. The 'Youth Culture' of the 20s was viewed as a decadent failure.",
        "key_manifestations": [
          "Wild Boys of the Road (Film 1933)",
          "The Civilian Conservation Corps (State management of youth)",
          "American Youth Congress (1934 - Political radicalism)",
          "Nancy Drew mysteries (1930 - Competent, serious youth)"
        ]
      },
      "1935": {
        "salience_share": 3.5,
        "description": "State management (+0.5%). The National Youth Administration (NYA) attempted to keep kids in school to keep them off the labor market. The catalyst was the 'youth problem.' Swing music began to generate a new, frantic dance culture (Jitterbug) that provided an escape from the grim reality. This was the seed of the next explosion.",
        "key_manifestations": [
          "National Youth Administration (NYA)",
          "Swing Music / Jitterbug craze",
          "Dead End Kids (Cinema archetype of street toughs)",
          "Andy Hardy movies (The sanitized ideal)"
        ]
      },
      "1940": {
        "salience_share": 5.0,
        "description": "The Zoot Suit and the Bobby Soxer (+1.5%). War employment gave youth money. The catalyst was the Frank Sinatra phenomenon (1942)\u2014the first time teenage girls were identified as a distinct, powerful market force. The 'Zoot Suit' represented a defiant, racialized youth subculture (Cluster 07) that refused to conform to wartime austerity, leading to riots.",
        "key_manifestations": [
          "Frank Sinatra at the Paramount (1944)",
          "Zoot Suit Riots (1943)",
          "Seventeen Magazine launch (1944 - Defining the 'Teena')",
          "Archie Comics (1942 - Codifying the high school experience)"
        ]
      },
      "1945": {
        "salience_share": 6.5,
        "description": "The Invention of the Teenager (+1.5%). The 'Teenager' was formally named and marketed to. The catalyst was the post-war economic boom and the baby boom (Cluster 18). High school became a universal experience, creating a sealed world with its own hierarchy. The displacing force was the adult demand for conformity, creating a friction that would spark the 50s rebellion.",
        "key_manifestations": [
          "The Teenage Bill of Rights (NYT 1945)",
          "Catcher in the Rye (1951/written late 40s - The voice of alienation)",
          "Hot Rod culture beginnings",
          "Meet Corliss Archer (Radio/TV)"
        ]
      },
      "1950": {
        "salience_share": 8.5,
        "description": "The Rebel (+2.0%). Rock n' Roll. The catalyst was the transistor radio and the 45rpm record, allowing youth to consume culture separately from parents. Holden Caulfield became the patron saint of angst. The 'Juvenile Delinquent' (JD) panic showed the adult fear of this new tribe. Brando and Dean codified the look: jeans, t-shirt, attitude.",
        "key_manifestations": [
          "Catcher in the Rye (1951)",
          "The Wild One (1953)",
          "Blackboard Jungle (1955 - Rock n Roll as riot starter)",
          "Mad Magazine (1952 - Training kids in irony)"
        ]
      },
      "1955": {
        "salience_share": 10.0,
        "description": "Peak Panic (+1.5%). Elvis Presley. The catalyst was the infusion of Black culture into white suburbia (Cluster 19). Adults viewed Rock n' Roll as a moral plague (Cluster 08). The comic book hearings (Wertham) tried to censor the imagination of the youth. The car became the bedroom and the escape pod.",
        "key_manifestations": [
          "Elvis Presley's Ed Sullivan appearance (1956)",
          "Rebel Without a Cause (1955)",
          "Seduction of the Innocent (1954 - Comic book panic)",
          "American Bandstand (1957 - Nationalizing the teen dance)"
        ]
      },
      "1960": {
        "salience_share": 13.0,
        "description": "Politicization (+3.0%). The Baby Boomers arrived on campus. The catalyst was the Civil Rights movement (Cluster 03), which taught white students how to organize. The Port Huron Statement (1962) declared that youth had a unique historical mission. The 'Generation Gap' opened. Beatlemania (1964) proved the economic omnipotence of the demographic.",
        "key_manifestations": [
          "Port Huron Statement (1962)",
          "Freedom Riders (Young activists)",
          "The Beatles on Ed Sullivan (1964)",
          "Free Speech Movement at Berkeley (1964)"
        ]
      },
      "1965": {
        "salience_share": 16.5,
        "description": "The Counterculture (+3.5%). The 'Hippie.' The catalyst was the Draft and LSD. Youth culture declared war on the 'Establishment.' It wasn't just a phase; it was a rival civilization with its own media, drugs, and values. *The Graduate* defined the enemy: 'Plastics.' The 'Summer of Love' (1967) was the peak of the utopian phase.",
        "key_manifestations": [
          "Summer of Love (1967)",
          "The Graduate (1967)",
          "Sgt. Pepper's Lonely Hearts Club Band (1967)",
          "Draft card burnings"
        ]
      },
      "1970": {
        "salience_share": 14.0,
        "description": "Fragmentation and Decay (-2.5%). Woodstock (1969) was the peak; Altamont (1969) was the death. The catalyst for decline was the end of the draft and the fatigue of revolution. The movement splintered into hard-line radicals (Weathermen), hedonists (Disco), and Jesus Freaks (Cluster 27). Kent State (1970) proved the state would shoot kids.",
        "key_manifestations": [
          "Kent State Shootings (1970)",
          "Woodstock vs. Altamont",
          "The Partridge Family (Commodification of the hippie aesthetic)",
          "Dazed and Confused (1993 - depicting 1976 aimlessness)"
        ]
      },
      "1975": {
        "salience_share": 12.0,
        "description": "Punk and Malaise (-2.0%). Punk Rock emerged as a rejection of the bloated 'Boomer' counterculture. The catalyst was economic hopelessness (No Future). Hip Hop was born in the Bronx ruins. The 'Teenager' was no longer the utopian savior, but a cynical survivor. *Star Wars* infantilized the culture, returning to innocence.",
        "key_manifestations": [
          "The Ramones (1976)",
          "Saturday Night Fever (1977 - Disco as escape)",
          "Star Wars (1977 - Regression)",
          "Birth of Hip Hop (Bronx block parties)"
        ]
      },
      "1980": {
        "salience_share": 13.5,
        "description": "The MTV Generation (+1.5%). Rebellion became a visual style. The catalyst was MTV (1981), which unified youth culture under a corporate banner. The 'Mall' became the new town square (Cluster 18). John Hughes movies codified the social castes of the high school (Jock, Brain, Princess, Criminal, Basket Case) as the primary reality of American life.",
        "key_manifestations": [
          "MTV Launch (1981)",
          "The Breakfast Club (1985)",
          "Fast Times at Ridgemont High (1982)",
          "Thriller (1982)"
        ]
      },
      "1985": {
        "salience_share": 12.0,
        "description": "Satanic Panic and Skateboarding (-1.5%). Adults feared Heavy Metal and D&D (Cluster 08). The catalyst was the PMRC hearings (Tipper Gore). Skate culture emerged as a physical reclamation of the suburban landscape. Hip Hop 'Golden Age' began to bring black urban youth culture to the white suburbs via *Yo! MTV Raps*.",
        "key_manifestations": [
          "PMRC Hearings (1985 - Censorship battle)",
          "Beastie Boys (License to Ill 1986)",
          "Thrasher Magazine / Skate culture",
          "Ferris Bueller's Day Off (1986)"
        ]
      },
      "1990": {
        "salience_share": 15.0,
        "description": "Gen X / Grunge (+3.0%). 'Smells Like Teen Spirit' (1991). The catalyst was the rejection of 80s gloss. Irony (Cluster 11) and 'Slacker' aesthetics defined the generation. Gangsta Rap became the new punk\u2014the authentic voice of rage. The displacing force was the commodification of 'Alternative'\u2014flannel was sold at the mall within months.",
        "key_manifestations": [
          "Nirvana's Nevermind (1991)",
          "Straight Outta Compton (N.W.A - mainstream impact)",
          "Beavis and Butt-Head (1993 - Critique of the viewer)",
          "Reality Bites (1994)"
        ]
      },
      "1995": {
        "salience_share": 14.0,
        "description": "Teen Pop and Columbine (-1.0%). TRL (Total Request Live) created a new, hyper-commercial pop monoculture (Britney, NSYNC). The catalyst for the dark turn was Columbine (1999), which ended the innocence of the high school movie. The 'Trench Coat Mafia' panic demonized the quiet outcast. The internet began to offer a hidden space for subcultures.",
        "key_manifestations": [
          "Columbine Massacre (1999)",
          "TRL (Total Request Live) dominance",
          "American Pie (1999 - Raunch culture)",
          "Napster (1999 - Youth dismantling the music industry)"
        ]
      },
      "2000": {
        "salience_share": 11.5,
        "description": "The Millennial Transition (-2.5%). Post-9/11 earnestness. The displacing force was the War on Terror. Emo music began to rise, shifting rebellion from 'political' to 'emotional' (Cluster 14). The internet (MySpace) allowed youth to curate their own fame (Cluster 22) for the first time. *Harry Potter* culture infantilized the young adult.",
        "key_manifestations": [
          "MySpace launch (2003)",
          "Harry Potter mania",
          "Jackass (2000 - Nihilistic physical comedy)",
          "Mean Girls (2004)"
        ]
      },
      "2005": {
        "salience_share": 12.5,
        "description": "The Digital Native (+1.0%). Facebook opened to everyone. The catalyst was the Smartphone (2007). 'Scene Kids' and Emo peaked. The distinction between 'online' and 'offline' life began to dissolve. The displacing force of the 2008 crash crushed the economic optimism of the Millennial, birthing the 'failure to launch' trope.",
        "key_manifestations": [
          "Superbad (2007)",
          "Fall Out Boy / Emo mainstreaming",
          "Facebook expansion beyond .edu",
          "Gossip Girl (2007 - Wealth voyeurism)"
        ]
      },
      "2010": {
        "salience_share": 10.0,
        "description": "Anxiety and The Algorithm (-2.5%). Social Media toxicity (Cluster 12) began to spike teen depression rates. The displacing force was the curated self. Youth culture fragmented into micro-niches (Tumblr subcultures). *The Hunger Games* (2012) reflected a view of the world as a zero-sum battle royale for survival, resonating with the post-recession mood.",
        "key_manifestations": [
          "The Hunger Games (2012)",
          "Instagram launch (2010)",
          "Project X (2012 - The party out of control)",
          "Tumblr 'Social Justice' culture roots"
        ]
      },
      "2015": {
        "salience_share": 13.0,
        "description": "Gen Z Politicization (+3.0%). Parkland (March for Our Lives). The catalyst was the Trump presidency and school shootings. Youth rebellion became hyper-political again (Cluster 07). TikTok (2018) emerged as the new, dominant cultural engine, accelerating trends to light speed. 'Ok Boomer' marked the declaration of intergenerational war.",
        "key_manifestations": [
          "March for Our Lives (2018)",
          "TikTok global launch (2018)",
          "'Ok Boomer' meme (2019)",
          "Euphoria (2019 - Nihilistic, drugged aesthetics)"
        ]
      },
      "2020": {
        "salience_share": 11.0,
        "description": "Pandemic Isolation (-2.0%). The 'Lost Years.' School was on Zoom. The catalyst was lockdown. Youth culture moved entirely onto screens (Discord, Roblox). 'Cringe' culture became a policing mechanism. The mental health crisis (Cluster 14) became the defining feature of the generation. Rebellion was introverted.",
        "key_manifestations": [
          "Zoom School / Remote Learning",
          "Olivia Rodrigo's Sour (2021 - Bedroom pop angst)",
          "The 'Karen' meme (Youth policing adult behavior)",
          "Roblox (The digital playground)"
        ]
      },
      "2025": {
        "salience_share": 9.5,
        "description": "The Post-Literate Turn (-1.5%). The 'iPad Kid' enters high school. The displacing force is AI and algorithmic feed addiction (Cluster 12). Subcultures are now 'Aesthetics' that last two weeks. The rebellion is 'Luddite'\u2014a rejection of the screen (Cluster 19) or a retreat into 'bed-rotting.' The concept of a unified 'Youth Culture' is dead; there are only algorithmically sorted tribes.",
        "key_manifestations": [
          "Skibidi Toilet (2023/24 - Post-literate surrealism)",
          "The 'Dumb Phone' movement among teens",
          "AI-generated influencers targeting youth",
          "Decline of the driving license (Loss of the car as freedom symbol)"
        ]
      }
    }
  }
}
};

const democracyPreset: PresetConfig = {
  id: 'democracy_analysis',
  name: 'Evolution of Democratic Thought (1890-2025)',
  description: 'Tracing the history of democratic epistemologies, from technocratic progressivism to populist reaction.',
  startYear: '1890',
  endYear: '2025',
  clusterStart: 1,
  clusterEnd: 27,
  periodicity: 5,
  context: 'Democracy Analysis',
  model: 'o1-mini',
  cachedResult: democracyData
};

export default democracyPreset;
