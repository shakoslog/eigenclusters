import { PresetConfig } from './types';

export const militaryData = {
  metadata: {
  "period": "1890-1950",
  "interval": "1 year",
  "cluster_range": "1-25",
  "measurement": "relative cultural variance explained (0-100)",
  "top_20_clusters": [
    "1_industrialized_material_warfare",
    "2_cult_of_offensive_vitalism",
    "3_strategic_air_projection",
    "4_mahanian_naval_hegemony",
    "5_ideological_totalitarian_mobilization",
    "6_information_theoretic_warfare",
    "7_colonial_asymmetric_policing",
    "8_civilian_home_front_fusion",
    "9_mechanized_maneuver_doctrine",
    "10_static_defense_maginot_psychology",
    "11_chemical_biological_anxiety",
    "12_prussian_general_staff_professionalism",
    "13_social_darwinist_struggle",
    "14_nuclear_atomic_sublimity",
    "15_partisan_insurgency_mythos",
    "16_humanitarian_legal_constraint",
    "17_submersible_commerce_raiding",
    "18_amphibious_logistical_projection",
    "19_psychological_propaganda_warfare",
    "20_pacifist_disarmament_internationalism"
  ]
},
  clusters: {
  "1_industrialized_material_warfare": {
    "name": "Industrialized Material Warfare (Materialschlacht)",
    "description": "This eigencluster represents the cultural and strategic realization that warfare had transitioned from a contest of martial virtue and tactical genius to a deterministic output of industrial capacity, logistical rationalization, and the mobilization of national economies. It maps the displacement of the 'heroic' narrative by the 'machine' narrative, where victory is calculated in tonnage of steel, caloric intake, and demographic attrition. Strategically, this cluster embodies the shift toward attrition, the integration of civilian manufacturing into the 'kill chain,' and the bureaucratic management of violence. It stands in direct tension with the 'Cult of the Offensive' and rises as the undeniable reality of the 20th century.",
    "trajectory": {
      "1890": {
        "variance_explained": 18.5,
        "description": "At the onset of the decade, the variance for industrialized warfare sat at a moderate baseline, driven by the naval arms races and the lingering lessons of the Franco-Prussian War which highlighted the primacy of rail logistics and Krupp steel. However, the cultural grasp of this concept was nascent; while strategists understood the need for better rifles, the prevailing *mentalit\u00e9* still prioritized the moral dimension of war over the material. The \u0394v is slightly positive (+0.5%), catalyzed by the publication of Alfred Thayer Mahan\u2019s work, which, while naval, explicitly linked national industrial output and commercial shipping to strategic dominance, planting the seeds for a worldview where economic engines drive military outcomes.",
        "key_manifestations": [
          "The Influence of Sea Power upon History, 1660\u20131783 by Alfred Thayer Mahan (Book)",
          "Testing of the smokeless powder Krag-J\u00f8rgensen rifle (Event)",
          "Launch of the pre-dreadnought USS Maine (Event)",
          "Capitaine Conan by Roger Vercel (Retrospective Novel ref. 1890s atmosphere)"
        ]
      },
      "1891": {
        "variance_explained": 19.2,
        "description": "The variance ticked upward (+0.7%) as the implications of the machine gun began to permeate the theoretical, if not yet the tactical, consciousness of European powers. The catalyst for this shift was the growing ubiquity of the Maxim gun in colonial expeditions, which offered a grim preview of automated slaughter. This year marked a 'creeping mechanization' where the romantic cavalry ethos began its slow, agonizing friction against the reality of belt-fed ballistics. The cultural disconnect was palpable: society celebrated the uniform while the factories engineered the means to render the uniform irrelevant.",
        "key_manifestations": [
          "Adoption of the Mosin-Nagant rifle by the Russian Empire (Event)",
          "The Light that Failed by Rudyard Kipling (Novel reflecting colonial military reality)",
          "Formation of the Pan-German League (Political Event linking industry to expansion)",
          "Franco-Russian Alliance negotiations (Diplomatic Event driven by industrial pooling)"
        ]
      },
      "1892": {
        "variance_explained": 20.1,
        "description": "A notable increase (+0.9%) occurred as the standardization of artillery calibers and the rationalization of mobilization timetables became the obsession of General Staffs. The displacing force acting against traditional 'heroic' warfare was the rigid railway timetable; strategy was becoming a function of civil engineering. This year saw the intellectual hardening of the 'Schlieffen' logic (though the plan itself evolved later), which treated war as a massive industrial flowchart. The cultural output began to reflect a vague anxiety about the 'depersonalization' of combat, even as boys' adventure literature tried to maintain the facade of individual agency.",
        "key_manifestations": [
          "The Barracks-Room Ballads by Rudyard Kipling (Poetry collection)",
          "Adoption of the Krag-J\u00f8rgensen by the US Army (Tech Event)",
          "La D\u00e9b\u00e2cle by \u00c9mile Zola (Novel depicting the industrial failure of 1870)",
          "Completion of the Trans-Siberian Railway construction phase (Logistical Event)"
        ]
      },
      "1893": {
        "variance_explained": 21.5,
        "description": "The variance accelerated (+1.4%) largely due to the naval arms race intensifying between Britain and rising powers, codified by the Naval Defence Act's lingering effects. The catalyst was the tangible visibility of 'floating factories'\u2014steel battleships\u2014which served as totems of national industrial health. Strategically, the conversation shifted from 'fighting spirit' to 'fleet tonnage,' a purely material metric. This period marks the early entrenchment of the statistical view of war, where victory is pre-calculated in dockyards rather than battlefields.",
        "key_manifestations": [
          "Launch of HMS Magnificent (Majestic-class battleship)",
          "The Great War of 189-: A Forecast by Philip Colomb (Future war fiction)",
          "Introduction of the Borchardt C-93 pistol (Tech Event)",
          "Establishment of the Navy League in Britain (Lobbying group)"
        ]
      },
      "1894": {
        "variance_explained": 22.8,
        "description": "The First Sino-Japanese War acted as a sharp catalyst (+1.3%), providing empirical data that a rapidly modernizing, industrialized power could crush a larger, pre-industrial adversary. This conflict was a 'proof of concept' for Western observers, validating the Materialschlacht hypothesis that logistics and modern ordnance superseded numerical superiority or ancient tradition. The variance rose as military attach\u00e9s sent back reports detailing the efficacy of rapid-fire artillery and modern naval maneuvers, embedding the necessity of technological parity into the cultural psyche of the West.",
        "key_manifestations": [
          "Battle of the Yalu River (Naval engagement proving steam/steel dominance)",
          "Under the Red Robe by Stanley J. Weyman (Contrast: Historical romance vs modern reality)",
          "The Maxim Gun used in the Matabele War (event referenced in analysis)",
          "Captain Dreyfus arrested (Event highlighting General Staff paranoia/modernization tension)"
        ]
      },
      "1895": {
        "variance_explained": 23.4,
        "description": "Growth slowed slightly to a steady entrenchment (+0.6%) as the immediate lessons of 1894 were digested. The focus turned to the chemistry of war\u2014specifically the synthesis of high explosives (lyddite, melinite). The cultural variance here reflects the 'scientization' of destruction; the laboratory became as vital as the drill square. However, the 'Cult of the Offensive' (Cluster 2) exerted significant displacing pressure, as romantic reactionaries argued that smokeless powder and high explosives actually favored the brave attacker, delaying the full acceptance of defensive attrition.",
        "key_manifestations": [
          "The Red Badge of Courage by Stephen Crane (Novel deconstructing heroism)",
          "R\u00f6ntgen discovers X-rays (Scientific Event applied to field medicine)",
          "Establishment of the London School of Economics (Intellectual Event linking econ to state power)",
          "Launch of the battleship SMS Kaiser Friedrich III (German naval expansion)"
        ]
      },
      "1896": {
        "variance_explained": 24.2,
        "description": "Variance crept upward (+0.8%) driven by the colonial scramble which required increasingly complex trans-continental supply chains. The catalyst was the logistical preparation for the reconquest of the Sudan, arguably one of the most 'engineered' campaigns of the 19th century. Kitchener\u2019s advance was not a march but a railway construction project with a shooting war at the tip. This demonstrated to the public and strategists alike that modern war was primarily an exercise in supply management, shifting the eigencluster toward the bureaucratic administration of empire.",
        "key_manifestations": [
          "Kitchener's Sudan Military Railway construction (Logistical Event)",
          "The Island of Doctor Moreau by H.G. Wells (Novel reflecting scientific anxiety)",
          "Battle of Adwa (Counter-example: Failure of logistics/material superiority)",
          "Launch of the Holland I submarine prototype (Tech Event)"
        ]
      },
      "1897": {
        "variance_explained": 25.5,
        "description": "The Diamond Jubilee naval review served as a massive visual catalyst (+1.3%), showcasing the sheer density of industrial capital afloat. This spectacle reinforced the equation 'Industry = Security' in the public mind. Simultaneously, the intellectual resistance to material warfare began to weaken as the sheer weight of technological acceleration\u2014turbines, recoil mechanisms, radio\u2014made traditionalist arguments look increasingly obsolete. The cluster's growth here is characterized by a fetishization of the machine; the 'technological sublime' began to replace the 'natural sublime' in military aesthetics.",
        "key_manifestations": [
          "Diamond Jubilee Fleet Review at Spithead (Event)",
          "The Invisible Man by H.G. Wells (Novel)",
          "Publication of 'The War of the Worlds' serialized (Cultural Event)",
          "Adoption of the French 75mm field gun (Tech Event - the first modern artillery)"
        ]
      },
      "1898": {
        "variance_explained": 28.0,
        "description": "A significant spike (+2.5%) driven by the Spanish-American War and the Fashoda Incident. The quick destruction of the Spanish fleet at Manila and Santiago was interpreted not as a triumph of bravery, but of superior overlapping fields of fire and industrial maintenance. H.G. Wells\u2019 publication of *The War of the Worlds* in book form provided the dark cultural shadow to this cluster: a vision of total, asymmetric annihilation by superior technology (Heat-Rays/Gas), effectively allegorizing the Western industrial advantage turned against itself. This year firmly planted the fear of 'technological extermination' alongside the hope of 'technological victory.'",
        "key_manifestations": [
          "The War of the Worlds by H.G. Wells (Novel)",
          "Battle of Omdurman (Event - Maxim guns vs Dervishes)",
          "Launch of HMS Albion (Event - tragedy at launch highlighting industrial scale)",
          "J'accuse\u2026! by \u00c9mile Zola (Political Event - destabilizing the military caste)"
        ]
      },
      "1899": {
        "variance_explained": 31.5,
        "description": "The outbreak of the Second Boer War and the publication of Ivan Bloch\u2019s *The Future of War* caused a sharp rise (+3.5%). Bloch serves as the intellectual prime mover for this cluster; his statistical analysis predicted the stalemate, the trench warfare, and the economic collapse of total war. While generals ignored him, the Boer War immediately validated the 'empty battlefield' concept, where Mauser fire made the open maneuver suicidal. The variance shift reflects the horrifying realization that the industrial weapons developed for colonial policing were now being used by white populations against each other, creating a 'zone of death' that heroism could not cross.",
        "key_manifestations": [
          "The Future of War by Ivan Bloch (Non-fiction treatise)",
          "Battle of Colenso (Event - failure of frontal assault)",
          "Heart of Darkness by Joseph Conrad (Novel - critique of the colonial machine)",
          "First Hague Convention (Diplomatic Event - attempt to regulate industrial killing)"
        ]
      },
      "1900": {
        "variance_explained": 33.2,
        "description": "The variance continued to rise (+1.7%) as the Boxer Rebellion necessitated an eight-nation alliance, showcasing the interoperability (and logistical friction) of industrialized armies. The Boxer protocol was less a victory of tactics and more a triumph of allied logistics and firepower application. Domestically, the continued stalemate in South Africa forced the British Empire to resort to 'concentration camps' and scorched earth\u2014methods that treat the enemy population as a resource to be managed/denied rather than a force to be fought. This marked a grim evolution in the cluster: the application of industrial management principles to civilian incarceration.",
        "key_manifestations": [
          "Siege of the International Legations (Event)",
          "Lord Jim by Joseph Conrad (Novel)",
          "First flight of the Zeppelin LZ 1 (Tech Event)",
          "Introduction of the Browning Auto-5 (Tech Event - semi-auto proliferation)"
        ]
      },
      "1901": {
        "variance_explained": 34.0,
        "description": "A year of consolidation (+0.8%). The death of Queen Victoria symbolized the end of the 19th-century 'gentlemanly' war ethos. The Royal Navy's introduction of the first submarine class (Holland class) introduced a new dimension to material warfare: invisible, asymmetrical attrition. The debate shifted from 'is the submarine sporting?' to 'what tonnage can it sink?'. This transition marks the decoupling of 'fair play' from military utility, a core component of the material warfare mindset.",
        "key_manifestations": [
          "Kim by Rudyard Kipling (Novel - The Great Game as information warfare)",
          "Launch of HMS Holland 1 (Event)",
          "Marconi creates first transatlantic radio signal (Tech Event - C2 revolution)",
          "Commissioning of the battleship Mikasa (Japanese industrial parity)"
        ]
      },
      "1902": {
        "variance_explained": 35.5,
        "description": "The end of the Boer War brought a retroactive surge (+1.5%) as military analysts dissected the failures of the British Army. The resulting reforms (Esher Committee) were explicitly managerial, attempting to create a 'General Staff' that functioned like a corporate board of directors. The cultural variance reflects a 'crisis of competence' where the public demanded professional, technically literate leadership. The romantic image of the officer was displaced by the demand for the efficient technocrat.",
        "key_manifestations": [
          "The Riddle of the Sands by Erskine Childers (Spy novel focusing on logistics/tides)",
          "Treaty of Vereeniging (Event ending Boer War)",
          "Formation of the Committee of Imperial Defence (Institutional Event)",
          "Imperialism: A Study by J.A. Hobson (Economic treatise linking war to capital)"
        ]
      },
      "1903": {
        "variance_explained": 36.8,
        "description": "The Wright Brothers' flight acted as a future catalyst (+1.3%), though its immediate military application was speculative. The real variance driver was the intensification of the Anglo-German naval race. The 'Dreadnought' concept was gestating; the idea that a single technological leap could render all previous capital stock obsolete terrified the exchequers of Europe. This year marks the rise of 'obsolescence anxiety'\u2014a key feature of material warfare where equipment is outdated before it is issued.",
        "key_manifestations": [
          "First powered flight by the Wright Brothers (Tech Event)",
          "The Call of the Wild by Jack London (Novel - struggle for existence)",
          "Establishment of the Ford Motor Company (Industrial Event - future war production model)",
          "The Way of All Flesh by Samuel Butler (Novel - critique of Victorian stasis)"
        ]
      },
      "1904": {
        "variance_explained": 39.5,
        "description": "The outbreak of the Russo-Japanese War caused a major spike (+2.7%). This was the first true 'modern' war involving trenches, machine guns, and barbed wire on a massive scale between major powers. The siege of Port Arthur demonstrated that industrial fortification and heavy artillery dominance were the new arbiters of victory. The cultural impact was shock: a 'non-Western' power utilizing Western industrial methodology to defeat a European empire shattered racialized theories of war and replaced them with cold, hard metrics of industrial efficiency.",
        "key_manifestations": [
          "Siege of Port Arthur (Event - precursor to WW1 trench warfare)",
          "The Sea-Wolf by Jack London (Novel)",
          "Introduction of the 76.2 mm divisional gun M1902 (Tech Event)",
          "Halford Mackinder's 'The Geographical Pivot of History' (Geopolitical theory)"
        ]
      },
      "1905": {
        "variance_explained": 42.0,
        "description": "The Battle of Tsushima and the bloody stalemate at Mukden pushed variance higher (+2.5%). Tsushima was the ultimate validation of Mahanian material theory\u2014a decisive, tech-heavy annihilation. However, the internal Russian revolution triggered by the war demonstrated the link between military failure and social collapse in an industrialized state. The 'Lesson of 1905' ingrained itself in military planning: war requires total social cohesion and unbroken supply lines. The Schlieffen Plan was finalized this year, embodying the attempt to script a short war to avoid the long, material attrition witnessed in Manchuria.",
        "key_manifestations": [
          "Battle of Tsushima (Event)",
          "Schlieffen Plan memorandum (Strategic Document)",
          "Potemkin Mutiny (Event - military/industrial labor unrest)",
          "Major Barbara by George Bernard Shaw (Play explicitly about the morality of munitions)"
        ]
      },
      "1906": {
        "variance_explained": 45.5,
        "description": "The launch of HMS Dreadnought was a singularity event (+3.5%). It instantly reset the naval balance of power to Year Zero, proving that technology had become the primary variable in national security. This 'all-big-gun' ship was a floating embodiment of industrial might, rendering the human element secondary to caliber and speed. Culturally, 'Dreadnought' became a byword for power. The arms race shifted from linear growth to exponential technological one-upmanship, entrenching the military-industrial complex as a permanent peacetime fixture.",
        "key_manifestations": [
          "Launch of HMS Dreadnought (Tech/Strategic Event)",
          "The Jungle by Upton Sinclair (Novel - industrial horror, applicable to war logistics)",
          "U-1 (first German U-boat) commissioned (Tech Event)",
          "Second Geneva Convention (Diplomatic Event - updating laws for naval war)"
        ]
      },
      "1907": {
        "variance_explained": 46.2,
        "description": "Variance stabilized (+0.7%) as the Triple Entente formed, creating the massive alliance blocks that would eventually feed the industrial war machine. The Second Hague Peace Conference attempted to legislate the expanding technologies of death (bombing from balloons, chemical gas), but failed to stop the momentum. This failure itself contributed to the cluster, as it signaled that the 'technological imperative' of weaponry was stronger than diplomatic or moral restraint. The cultural mood was one of fatalistic preparation.",
        "key_manifestations": [
          "The Secret Agent by Joseph Conrad (Novel - terrorism and explosives)",
          "Second Hague Peace Conference (Diplomatic Event)",
          "Formation of the Triple Entente (Geopolitical Event)",
          "Development of the Haber-Bosch process (Scientific Event - nitrogen for explosives)"
        ]
      },
      "1908": {
        "variance_explained": 47.0,
        "description": "The Bosnian Crisis acted as a geopolitical stress test, but the variance growth (+0.8%) was driven by the integration of the internal combustion engine into military planning. The first subsidies for military trucks appeared. The 'Ford Model T' mentality began to seep into procurement: quantity has a quality all its own. The 'War in the Air' by H.G. Wells was published, explicitly predicting that the industrial city itself would become the target of war, dissolving the distinction between front line and home front.",
        "key_manifestations": [
          "The War in the Air by H.G. Wells (Novel - prophetic air power)",
          "Launch of the Model T Ford (Industrial Event - mass production archetype)",
          "Bosnian Crisis (Geopolitical Event)",
          "Introduction of the Maxim MG 08 (Tech Event - the scythe of the Somme)"
        ]
      },
      "1909": {
        "variance_explained": 48.5,
        "description": "The 'Naval Scare' in Britain ('We want eight and we won't wait') drove variance up (+1.5%). This was the first mass-media-driven panic about industrial output (German shipbuilding rates). Public sentiment was now directly coupled to factory schedules. The Anglo-German rivalry was no longer about territory but about *rate of production*. This year solidified the concept that the citizen's role in war was to pay taxes for battleships and produce babies for conscription, treating the population as a raw material for the state.",
        "key_manifestations": [
          "The Machine Stops by E.M. Forster (Short Story - dependence on the machine)",
          "Bleriot crosses the English Channel (Event - ending island security)",
          "Declaration of London (Legal Event - laws of naval blockade/starvation)",
          "Formation of the MI5/MI6 (Institutional Event - formalized paranoia)"
        ]
      },
      "1910": {
        "variance_explained": 49.2,
        "description": "A year of tense plateau (+0.7%). The publication of Norman Angell\u2019s *The Great Illusion* argued that economic integration made war irrational. Paradoxically, this contributed to the cluster by highlighting just how economically intertwined\u2014and therefore mutually destructive\u2014industrial nations had become. The 'illusion' was that rationality would stop the machine; the reality was that the machine had its own momentum. The death of Edward VII marked the psychological end of the 'gilded' peace, while the proliferation of dreadnoughts continued unabated.",
        "key_manifestations": [
          "The Great Illusion by Norman Angell (Non-fiction)",
          "Howards End by E.M. Forster (Novel - 'Only connect')",
          "Commissioning of SMS Von der Tann (Tech Event - German battlecruiser)",
          "Mexican Revolution begins (Event - rising global instability)"
        ]
      },
      "1911": {
        "variance_explained": 51.0,
        "description": "The Agadir Crisis spiked variance (+1.8%). The deployment of the *Panther* gunboat was a raw demonstration of industrial diplomacy. More importantly, Italy\u2019s use of aircraft for reconnaissance and bombing in Libya marked the first kinetic use of air power, adding the third dimension to material warfare. The catalyst here was the normalization of 'colonial' violence utilizing high-tech assets, which European powers were secretly preparing to turn on each other. The distinct smell of oil and cordite began to overpower the scent of diplomatic parchment.",
        "key_manifestations": [
          "Agadir Crisis (Event)",
          "First aerial bombing in Libya by Italy (Event)",
          "Fant\u00f4mas (Serial fiction - modern urban terror)",
          "Churchill becomes First Lord of the Admiralty (Political Event - accelerated naval prep)"
        ]
      },
      "1912": {
        "variance_explained": 52.5,
        "description": "The Balkan Wars acted as a dress rehearsal (+1.5%). The rapid expenditure of ammunition by the Balkan League armies shocked observers; stockpiles calculated for months were vanished in days. This 'Shell Shortage' warning was largely ignored by the Great Powers, who suffered from the 'Short War Illusion' (Cluster 2). However, the variance of Material Warfare grew as the logistical strain of these conflicts proved that modern war was a voracious consumer of capital. The sinking of the Titanic, while civilian, culturally resonated as a failure of the 'infallible machine,' foreshadowing the technological hubris of 1914.",
        "key_manifestations": [
          "First Balkan War (Event)",
          "Sinking of the Titanic (Cultural Event - technological fallibility)",
          "Bernhardi's 'Germany and the Next War' (Book - social darwinist inevitability)",
          "Royal Flying Corps established (Institutional Event)"
        ]
      },
      "1913": {
        "variance_explained": 54.0,
        "description": "The final year of peace saw the 'Plan 17' and expanded Russian railway loans push variance up (+1.5%). Europe was a pressurized canister. The catalyst was the massive increase in standing armies (German Army Bill, French Three-Year Law). The entire continent was effectively pre-mobilized. The cultural mood was one of distinct inevitability; the machine was built, fueled, and aimed. Futurism in art (Marinetti) celebrated this, aestheticizing the speed, violence, and metallic nature of the coming conflict.",
        "key_manifestations": [
          "Stravinsky's Rite of Spring (Cultural Event - violent modernism)",
          "Zang Tumb Tumb by Filippo Tommaso Marinetti (Futurist poem - sound of artillery)",
          "French Three-Year Law (Political Event)",
          "Zabern Affair (Event - military authority over civilian law)"
        ]
      },
      "1914": {
        "variance_explained": 75.0,
        "description": "The dam broke. Variance exploded (+21.0%) as the 'Short War Illusion' crashed into the reality of the Miracle on the Marne and the First Battle of Ypres. The catalyst was the immediate deadlock caused by the supremacy of defensive firepower (machine guns/artillery) over offensive maneuver. The 'War of Movement' died in October; the 'War of Mat\u00e9riel' was born in November. By Christmas, the trenches stretched from the Swiss border to the Sea. Culture shifted violently from patriotic fervor to the shock of mass industrial slaughter. The individual soldier became a 'unit of supply,' and the state began the total takeover of the economy.",
        "key_manifestations": [
          "The Battle of the Frontiers (Event - collision of doctrines)",
          "First Battle of Ypres (Event - death of the professional army)",
          "Defence of the Realm Act (Legal Event - total state control)",
          "Christmas Truce (Event - last gasp of pre-industrial humanity)"
        ]
      },
      "1915": {
        "variance_explained": 88.0,
        "description": "Variance surged (+13.0%) as the conflict deepened into Total War. The catalyst was the 'Shell Crisis' in Britain, which toppled the government and led to the creation of the Ministry of Munitions\u2014the ultimate bureaucratic manifestation of this cluster. The introduction of Chlorine gas at Ypres and the sinking of the Lusitania signaled that no moral boundaries remained; technology dictated ethics. The war became a contest of attrition: who could manufacture shells faster and tolerate more casualties. The 'Home Front' was now fully integrated into the kill chain.",
        "key_manifestations": [
          "Second Battle of Ypres (Event - first use of gas)",
          "Sinking of the Lusitania (Event - unrestricted warfare)",
          "Formation of the Ministry of Munitions (Institutional Event)",
          "The Thirty-Nine Steps by John Buchan (Novel)"
        ]
      },
      "1916": {
        "variance_explained": 95.0,
        "description": "The absolute peak of the 'Materialschlacht' mentality (+7.0%). Verdun and the Somme were not battles in the traditional sense, but industrial conveyor belts of death. Falkenhayn explicitly aimed to 'bleed France white'\u2014a strategy of pure demographic accounting. The introduction of the Tank at Flers-Courcelette attempted to break the deadlock with armor, but the mud and artillery prevailed. Culturally, this year killed the concept of 'glory.' The output was pure trauma and mechanism. The state's control over the individual was absolute (Conscription Act).",
        "key_manifestations": [
          "Battle of Verdun (Event - the mill on the Meuse)",
          "Battle of the Somme (Event - industrial slaughter)",
          "Under Fire by Henri Barbusse (Novel - realistic trench misery)",
          "Introduction of the Mark I Tank (Tech Event)"
        ]
      },
      "1917": {
        "variance_explained": 94.5,
        "description": "Variance held at saturation levels (-0.5%), but the *nature* shifted. The entry of the United States brought the ultimate industrial power into the fray, ensuring the triumph of material weight. Conversely, the collapse of Russia demonstrated that a state unable to meet the industrial demands of war would disintegrate. Unrestricted U-boat warfare attempted to strangle the material supply lines. The 'Hindenburg Program' in Germany represented the total fusion of society and army, but it was starving the civilian population. The 'mutinies' in the French army were a rejection of being treated as disposable raw material.",
        "key_manifestations": [
          "US Entry into WWI (Event)",
          "Battle of Passchendaele (Event - drowning in mud)",
          "French Army Mutinies (Event)",
          "Prufrock and Other Observations by T.S. Eliot (Poetry - modernist fragmentation)"
        ]
      },
      "1918": {
        "variance_explained": 92.0,
        "description": "The war of movement returned briefly, but only because of material exhaustion on one side and material abundance on the other (-2.5%). The failure of the Kaiserschlacht was a failure of logistics; the success of the Hundred Days Offensive was a triumph of the 'All Arms' coordinated attack (tanks, planes, artillery). The variance dipped slightly as the immediate fighting stopped, but the lesson was indelible: God is on the side of the biggest factories. The 'Stab in the Back' myth began to gestate\u2014a denial of the material defeat.",
        "key_manifestations": [
          "The Hundred Days Offensive (Event)",
          "Armistice of 11 November 1918 (Event)",
          "The Education of Henry Adams (Autobiography - dynamo vs virgin)",
          "Spengler's The Decline of the West, Vol 1 (Philosophy - civilizational exhaustion)"
        ]
      },
      "1919": {
        "variance_explained": 70.0,
        "description": "A sharp collapse in active variance (-22.0%) as the world desperately tried to demobilize. The 'War to End All Wars' rhetoric attempted to dismantle the machine. However, the Treaty of Versailles was a continuation of war by economic means (reparations). The displacing force was the overwhelming public desire for 'Normalcy' and the revulsion at militarism. Yet, the material reality remained: the tanks and planes existed, and the theories of how to use them (Fuller, Douhet) were being written in the ashes.",
        "key_manifestations": [
          "Treaty of Versailles (Diplomatic Event)",
          "Economic Consequences of the Peace by Keynes (Book - analyzing economic warfare)",
          "Jaures' L'Arm\u00e9e Nouvelle (Book - citizen soldier ideal)",
          "Alcock and Brown transatlantic flight (Tech Event - bomber range implications)"
        ]
      },
      "1920": {
        "variance_explained": 65.0,
        "description": "Variance continued to fall (-5.0%) as the 'Ten Year Rule' was adopted in Britain, assuming no major war for a decade. This decimated defense budgets and halted material innovation. However, the Polish-Soviet War showed that mobile warfare was still possible, complicating the static 'lessons' of 1916. The cluster hibernated in the minds of visionaries who argued that the next war would be *more* mechanical, not less. The cultural mood was one of mourning and escapism.",
        "key_manifestations": [
          "The Storm of Steel by Ernst J\u00fcnger (Memoir - celebrating the material struggle)",
          "Polish-Soviet War Battle of Warsaw (Event)",
          "Formation of the League of Nations (Institutional Event)",
          "R.U.R. by Karel \u010capek (Play - introduction of the word 'Robot')"
        ]
      },
      "1921": {
        "variance_explained": 58.0,
        "description": "The Washington Naval Conference acted as a massive displacing force (-7.0%), physically scrapping the battleships that were the icons of this cluster. It was an attempt to legislate against the industrial arms race. For a moment, it seemed diplomacy could curb the machine. However, by limiting tonnage, it inadvertently encouraged the development of 'quality' over quantity and new technologies like the aircraft carrier (which was less restricted).",
        "key_manifestations": [
          "Washington Naval Conference (Diplomatic Event)",
          "Douhet's The Command of the Air (Book - theory of strategic bombing)",
          "Three Soldiers by John Dos Passos (Novel - anti-war sentiment)",
          "Scrapping of HMS Tiger (Event)"
        ]
      },
      "1922": {
        "variance_explained": 55.0,
        "description": "Variance bottomed out, stabilizing (-3.0%). The 'Waste Land' era. Military thought was bifurcated: the victors (France/UK) entrenched the 'Methodical Battle' (slow, artillery-heavy), while the losers (Germany/USSR) began secret collaborations (Rapallo) to explore mobile, mechanized warfare. The catalyst for future growth was planted here: the realization by the Reichswehr that they could not win a material war of attrition, so they had to invent a material war of speed.",
        "key_manifestations": [
          "The Waste Land by T.S. Eliot (Poetry)",
          "Treaty of Rapallo (Diplomatic Event - German/Soviet secret rearmament)",
          "The Good Soldier \u0160vejk by Jaroslav Ha\u0161ek (Novel - satire of military bureaucracy)",
          "Mussolini's March on Rome (Political Event - rise of militarized politics)"
        ]
      },
      "1923": {
        "variance_explained": 56.5,
        "description": "A slight tick upward (+1.5%) driven by the French occupation of the Ruhr\u2014a use of military force to extract economic reparations (coal/steel). It highlighted the direct link between industry and sovereignty. If you couldn't pay in gold, you paid in raw materials, enforcing the 'war as economics' paradigm. The hyperinflation in Germany destroyed the middle class, creating the radicalized demographic pool for the next total mobilization.",
        "key_manifestations": [
          "Occupation of the Ruhr (Event)",
          "Hyperinflation in Germany (Economic Event)",
          "The World Crisis by Winston Churchill (History - analyzing the material war)",
          "First flight of the Autogiro (Tech Event)"
        ]
      },
      "1924": {
        "variance_explained": 57.0,
        "description": "Stasis (+0.5%). The Dawes Plan temporarily eased tensions, masking the underlying industrial competition. In the background, the 'Experimental Mechanized Force' ideas were brewing in Britain (Liddell Hart/Fuller), suggesting that tanks should not just support infantry but act as a 'land fleet.' This theoretical work was the intellectual bridge between the attrition of 1916 and the Blitzkrieg of 1940.",
        "key_manifestations": [
          "The Magic Mountain by Thomas Mann (Novel)",
          "Reformation of War by J.F.C. Fuller (Book - tank theory)",
          "Dawes Plan (Economic Event)",
          "Stalin's rise to power (Political Event - preparing for forced industrialization)"
        ]
      },
      "1925": {
        "variance_explained": 56.0,
        "description": "The Locarno Treaties created a false sense of security (-1.0%), the 'Spirit of Locarno.' However, in the USSR, the focus shifted to 'Socialism in One Country,' which practically meant autarkic industrialization for defense. The cluster split: in the West, it was about disarmament; in the East, it was about building the 'red industrial base.' The Geneva Protocol banned chemical weapons, acknowledging their horror but failing to ban the industrial capacity to make them.",
        "key_manifestations": [
          "Locarno Treaties (Diplomatic Event)",
          "The Great Gatsby by F. Scott Fitzgerald (Novel - ignored the looming storm)",
          "Geneva Protocol (Legal Event)",
          "Mein Kampf Vol 1 published (Book - outlining the need for Lebensraum/resources)"
        ]
      },
      "1926": {
        "variance_explained": 58.0,
        "description": "Variance rose (+2.0%) as the theoretical debates heated up. Liddell Hart published on the 'Indirect Approach.' Germany joined the League of Nations but secretly continued tank development (Grosstraktor) in Kazan, Russia. The catalyst was the realization that the next war would be decided by *mobility* of firepower, not just weight. The 'machine' was learning to run.",
        "key_manifestations": [
          "Liddell Hart's 'The Remaking of Modern Armies' (Book)",
          "Metropolis by Fritz Lang (Film - industrial dystopia)",
          "Goddard launches first liquid-fueled rocket (Tech Event - future delivery system)",
          "General Strike in UK (Event - labor power vs state)"
        ]
      },
      "1927": {
        "variance_explained": 59.5,
        "description": "A quiet accumulation of variance (+1.5%). The British establishment of the Experimental Mechanized Force was a tangible step toward the tank division. Charles Lindbergh's flight was a cultural catalyst, shrinking the Atlantic and proving the reliability of aero-engines. The world became smaller, and the reach of potential bombers became longer. War was no longer 'over there'; it was potentially 'right here.'",
        "key_manifestations": [
          "Lindbergh's Transatlantic Flight (Event)",
          "Establishment of the Experimental Mechanized Force (Military Event)",
          "The Case of Sergeant Grischa by Arnold Zweig (Novel)",
          "Chiang Kai-shek's Northern Expedition (Event - civil war logistics)"
        ]
      },
      "1928": {
        "variance_explained": 62.0,
        "description": "The Soviet First Five-Year Plan was the massive catalyst (+2.5%). Stalin explicitly stated: 'We are fifty or a hundred years behind the advanced countries. We must make good this distance in ten years.' This was the total mobilization of a society for industrial parity. It was Materialschlacht applied to peace. In the West, the Kellogg-Briand Pact outlawed war, a paper dam against a rising tide of steel.",
        "key_manifestations": [
          "First Five-Year Plan begins (Economic/Strategic Event)",
          "Kellogg-Briand Pact (Diplomatic Event)",
          "All Quiet on the Western Front by Remarque (Novel - anti-war peak)",
          "Development of the magnetron (Tech Event - pre-radar)"
        ]
      },
      "1929": {
        "variance_explained": 60.0,
        "description": "The Great Depression acted as a complex displacing force (-2.0%). Initially, it crushed defense budgets. However, it also destabilized the global order and led nations to look toward rearmament as a form of Keynesian economic stimulus. The fragility of the global economic system reinforced the desire for autarky. While actual production dipped, the *conditions* for the rise of totalitarian war economies were established.",
        "key_manifestations": [
          "Wall Street Crash (Economic Event)",
          "A Farewell to Arms by Hemingway (Novel)",
          "Geneva Convention on Prisoners of War (Legal Event)",
          "Young Plan (Economic Event)"
        ]
      },
      "1930": {
        "variance_explained": 63.0,
        "description": "Variance ticked up (+3.0%) as the Nazi party surged in German elections, fueled by resentment and economic despair. Their platform was implicitly militaristic. In military technology, the focus on the 'strategic bomber' grew; if the trenches could not be broken, the cities behind them would be destroyed. The 'Douhet' doctrine began to gain traction. The machine was now aimed at the civilian.",
        "key_manifestations": [
          "Nazi Party gains 107 seats in Reichstag (Political Event)",
          "Hell's Angels (Film - aerial combat spectacle)",
          "Mussolini's 'Lake of Peace' speech (Political rhetoric)",
          "Whittle patents the turbojet engine (Tech Event - future speed)"
        ]
      },
      "1931": {
        "variance_explained": 66.0,
        "description": "The Japanese invasion of Manchuria was a critical catalyst (+3.0%). It exposed the League of Nations as toothless and demonstrated that an industrial power could seize resources with impunity. This was a resource war\u2014Manchuria was coal and iron. It signaled the start of the slide toward WWII. The 'Mukden Incident' proved that the railroad was still the artery of conquest.",
        "key_manifestations": [
          "Mukden Incident / Invasion of Manchuria (Event)",
          "Vickers 6-Ton Tank developed (Tech Event - widely exported chassis)",
          "Brave New World by Aldous Huxley (Novel - engineered society)",
          "Statute of Westminster (Political Event)"
        ]
      },
      "1932": {
        "variance_explained": 68.5,
        "description": "The Geneva Disarmament Conference failed (+2.5%). Germany demanded equality of arms (Aufr\u00fcstung). The failure to disarm meant rearmament was inevitable. The bomber theories ('The bomber will always get through' - Baldwin) permeated public consciousness, creating a terror of the next war that paradoxically encouraged appeasement (to avoid the horror) and rearmament (to deter it).",
        "key_manifestations": [
          "Geneva Disarmament Conference failure (Diplomatic Event)",
          "Baldwin's 'The Bomber Will Always Get Through' speech (Political Event)",
          "Journey to the End of the Night by C\u00e9line (Novel - nihilism)",
          "Chaco War begins (Event - modern war in remote terrain)"
        ]
      },
      "1933": {
        "variance_explained": 75.0,
        "description": "Hitler's rise to power and withdrawal from the League of Nations caused a sharp spike (+6.5%). The German economy was immediately reoriented toward *Wehrwirtschaft* (defense economy). This was the return of the 'Total War' model. In the US, the New Deal utilized quasi-military mobilization structures (CCC) to fight the depression, inadvertently prepping the administrative state for war.",
        "key_manifestations": [
          "Hitler becomes Chancellor (Political Event)",
          "Germany leaves League of Nations (Diplomatic Event)",
          "The Shape of Things to Come by H.G. Wells (Book - future war history)",
          "Polikarpov I-16 first flight (Tech Event - first cantilever monoplane fighter)"
        ]
      },
      "1934": {
        "variance_explained": 78.0,
        "description": "Variance rose (+3.0%) as covert rearmament became overt. The 'Night of the Long Knives' consolidated Hitler's control over the military. The USSR's industrial output began to soar. In Britain, the first radar experiments (Daventry) began\u2014a technological response to the bomber threat. The 'machine' was developing eyes.",
        "key_manifestations": [
          "Night of the Long Knives (Political Event)",
          "Daventry Experiment (Tech Event - Radar proof of concept)",
          "Tender is the Night by Fitzgerald (Novel)",
          "Launch of the Graf Spee (Tech Event - pocket battleship)"
        ]
      },
      "1935": {
        "variance_explained": 82.0,
        "description": "The revelation of the Luftwaffe and the reintroduction of conscription in Germany shattered the Treaty of Versailles (+4.0%). The Italian invasion of Abyssinia used chemical weapons and air power against tribal levies, a brutal reminder of the industrial asymmetry. The resulting variance shift was the acceptance that the next war would be 'total.'",
        "key_manifestations": [
          "German reintroduction of conscription (Event)",
          "Italian invasion of Abyssinia (Event)",
          "First flight of the B-17 Flying Fortress (Tech Event - strategic projection)",
          "Anglo-German Naval Agreement (Diplomatic Event)"
        ]
      },
      "1936": {
        "variance_explained": 86.0,
        "description": "The Spanish Civil War acted as the laboratory for World War II (+4.0%). The Condor Legion and Soviet tanks tested the theories of material warfare in real-time. Guernica demonstrated the reality of terror bombing. The 'Four Year Plan' in Germany explicitly targeted autarky for war within four years. The trajectory was now locked: collision.",
        "key_manifestations": [
          "Spanish Civil War begins (Event)",
          "Bombing of Guernica (Event - terror bombing realized)",
          "General Theory of Employment, Interest and Money by Keynes (Econ - managing demand)",
          "First flight of the Spitfire (Tech Event)"
        ]
      },
      "1937": {
        "variance_explained": 89.0,
        "description": "The Second Sino-Japanese War began (+3.0%), a massive theater of attrition. The Rape of Nanking displayed the total dehumanization of the enemy. In the West, the 'Shadow Factory' scheme in Britain began dispersing industry for war. The variance here represents the point of no return; economies were overheating with arms production.",
        "key_manifestations": [
          "Marco Polo Bridge Incident (Event)",
          "Rape of Nanking (Event)",
          "Picasso's Guernica (Art)",
          "Whymper's 'Fighting the Insects' (Film - metaphor for struggle)"
        ]
      },
      "1938": {
        "variance_explained": 91.0,
        "description": "The Munich Crisis (+2.0%) was a desperate attempt to buy time. Chamberlain wasn't just buying peace; he was buying months for Hurricane fighter production. The 'Anschluss' added Austrian industry and manpower to the Reich. The cultural variance was dominated by the gas mask\u2014distributed to civilians, normalizing the expectation that the home was the front line.",
        "key_manifestations": [
          "Munich Agreement (Diplomatic Event)",
          "Orson Welles' War of the Worlds broadcast (Cultural Event - mass panic/invasion anxiety)",
          "Anschluss with Austria (Event)",
          "Homage to Catalonia by Orwell (Book)"
        ]
      },
      "1939": {
        "variance_explained": 95.0,
        "description": "The Invasion of Poland (+4.0%). Blitzkrieg was unveiled\u2014not just as a tactic, but as a fusion of radio (C3I), tank (maneuver), and Stuka (artillery). It was the industrial war of movement that 1918 had promised. The variance hit saturation. The 'Phoney War' was merely the industrial ramp-up phase. The machine was running at full power.",
        "key_manifestations": [
          "Invasion of Poland (Event)",
          "Molotov-Ribbentrop Pact (Diplomatic Event - cynically pragmatic)",
          "The Grapes of Wrath by Steinbeck (Novel - displacement/hardship)",
          "Einstein-Szilard letter (Scientific Event - the atomic seed)"
        ]
      },
      "1940": {
        "variance_explained": 98.0,
        "description": "The Fall of France (+3.0%) shocked the world. It was a victory of doctrine and tempo, but backed by a ruthless material efficiency. The Battle of Britain, however, was the first pure 'information war'\u2014won by Radar (Chain Home) and the industrial capacity to replace pilots and airframes. The US 'Arsenal of Democracy' speech signaled the entry of the ultimate industrial titan into the supply chain, even if not yet the fighting.",
        "key_manifestations": [
          "Fall of France (Event)",
          "Battle of Britain (Event)",
          "The Great Dictator by Chaplin (Film)",
          "Arsenal of Democracy speech by FDR (Political Event)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "Operation Barbarossa and Pearl Harbor (+2.0%). The conflict became truly global and absolute. Barbarossa was the largest military operation in history, a war of annihilation (Vernichtungskrieg). Pearl Harbor was a pre-emptive strike to secure resources (oil). The variance is at maximum: the entire globe was mapped onto a grid of logistical throughput. The Holocaust began\u2014the industrialization of genocide, the darkest shadow of this cluster.",
        "key_manifestations": [
          "Operation Barbarossa (Event)",
          "Attack on Pearl Harbor (Event)",
          "Wannsee Conference planning (Event - bureaucratic genocide)",
          "Citizen Kane by Orson Welles (Film)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "The year of the 'Turn.' Midway and Stalingrad. In both cases, the Axis reached the limit of their logistical tether and were broken by the superior material resilience of the Allies. The US economy was outproducing the entire Axis combined. The liberty ship production rate (one every few days) symbolized the victory of the assembly line over the samurai spirit.",
        "key_manifestations": [
          "Battle of Stalingrad begins (Event)",
          "Battle of Midway (Event)",
          "First sustained nuclear chain reaction (Scientific Event)",
          "Beveridge Report (Social Event - planning the post-war welfare state)"
        ]
      },
      "1943": {
        "variance_explained": 99.0,
        "description": "Total War attrition (-1.0% relative to peak shock, but absolute intensity high). The Combined Bomber Offensive (Hamburg) treated cities as industrial bottlenecks to be erased. The Battle of Kursk was the clash of steel\u2014the largest tank battle in history. It was pure material weight. The cultural output was grim determination; the 'hero' was the resistance fighter or the bomber crew, cogs in the machine.",
        "key_manifestations": [
          "Battle of Kursk (Event)",
          "Operation Gomorrah (Hamburg bombing) (Event)",
          "Casablanca (Film)",
          "Tehran Conference (Diplomatic Event)"
        ]
      },
      "1944": {
        "variance_explained": 98.0,
        "description": "D-Day was a triumph of logistics (Mulberry harbors, PLUTO pipeline) (+-0%). It was an engineering feat as much as a military one. The V-weapons (V1/V2) introduced the era of the cruise/ballistic missile\u2014robot warfare. The displacing force was the dawning realization of the post-war order; the Red Army's advance was replacing one totalitarian structure with another.",
        "key_manifestations": [
          "D-Day / Operation Overlord (Event)",
          "Bretton Woods Conference (Economic Event - dollar hegemony)",
          "V-2 rocket attacks begin (Tech Event)",
          "Road to Serfdom by Hayek (Book - warning against planning)"
        ]
      },
      "1945": {
        "variance_explained": 95.0,
        "description": "The crescendo and the break (-3.0%). The Atomic Bomb was the ultimate expression of Material Warfare: the conversion of matter into energy to end a war. It rendered the 'million man army' instantly obsolete in theory (though not yet in practice). The end of the war revealed the Holocaust, the industrial endpoint of the cluster. The variance dipped as the guns fell silent, but the 'Military Industrial Complex' was now permanent.",
        "key_manifestations": [
          "Trinity Test / Hiroshima / Nagasaki (Event)",
          "Yalta Conference (Diplomatic Event)",
          "Liberation of Auschwitz (Event)",
          "Founding of the UN (Institutional Event)"
        ]
      },
      "1946": {
        "variance_explained": 85.0,
        "description": "A rapid decline in active kinetic variance (-10.0%), replaced by 'Cold War' tension. The Iron Curtain speech defined the new strategic geography. The displacing force was the 'demobilization' and the pivot to consumer goods, but the underlying structure (nuclear research, jet tech) remained. The Nuremberg Trials attempted to prosecute the 'managers' of the war, establishing individual responsibility within the machine.",
        "key_manifestations": [
          "Churchill's Iron Curtain Speech (Political Event)",
          "Nuremberg Trials verdict (Legal Event)",
          "ENIAC computer dedicated (Tech Event - calculating ballistics)",
          "Hiroshima by John Hersey (Journalism - humanizing the debris)"
        ]
      },
      "1947": {
        "variance_explained": 80.0,
        "description": "The Truman Doctrine and the National Security Act (+-0%). The US formalized the 'National Security State' (CIA, DoD, NSC). This entrenched the cluster: the wartime apparatus would not be dismantled but maintained for 'containment.' The AK-47 was designed\u2014the democratization of automatic fire. The Marshall Plan used economic industrial power as a strategic weapon.",
        "key_manifestations": [
          "National Security Act of 1947 (Legal Event)",
          "Marshall Plan announced (Economic Event)",
          "Break the sound barrier (Yeager) (Tech Event)",
          "Design of the AK-47 (Tech Event)"
        ]
      },
      "1948": {
        "variance_explained": 78.0,
        "description": "The Berlin Airlift was the perfect inversion of the cluster (-2.0% kinetic, +logistics). Instead of dropping bombs, the air fleets dropped food. It proved that logistical supremacy could win a strategic victory without a shot fired. Israel's 1948 war demonstrated that the 'nation in arms' model was still vital for survival.",
        "key_manifestations": [
          "Berlin Airlift (Event)",
          "1948 Arab-Israeli War (Event)",
          "The Naked and the Dead by Mailer (Novel)",
          "Cybernetics by Norbert Wiener (Book - control systems)"
        ]
      },
      "1949": {
        "variance_explained": 75.0,
        "description": "Soviet Atomic Bomb test and the fall of China (-3.0%). The monopoly on the 'absolute weapon' ended. The variance shifted toward 'Nuclear Deterrence' (Cluster 14). NATO was formed, institutionalizing the Atlantic alliance as a permanent military block. The era of 'Industrialized Material Warfare' was evolving into 'Mutually Assured Destruction.'",
        "key_manifestations": [
          "Soviet RDS-1 Nuclear Test (Event)",
          "Formation of NATO (Institutional Event)",
          "1984 by Orwell (Novel - perpetual war state)",
          "Victory of CCP in Chinese Civil War (Event)"
        ]
      },
      "1950": {
        "variance_explained": 82.0,
        "description": "The Korean War reignited the cluster (+7.0%). It proved that despite the Bomb, conventional industrial warfare (tanks, artillery, hills) was not obsolete. It was the first 'limited war' of the nuclear age, but it was fought with the full weight of WWII industrial surplus. NSC-68 was signed, tripling US defense spending and confirming that the 'war economy' was the new normal.",
        "key_manifestations": [
          "Outbreak of Korean War (Event)",
          "NSC-68 approved (Strategic Document)",
          "Battle of Chosin Reservoir (Event)",
          "The Lonely Crowd by Riesman (Sociology - conformist society)"
        ]
      }
    }
  },
  "2_cult_of_offensive_vitalism": {
    "name": "Cult of the Offensive Vitalism (L'offensive \u00e0 outrance)",
    "description": "This eigencluster captures the philosophical and strategic conviction that 'moral force,' individual will, and the spirit of the offensive are the decisive factors in war, capable of overcoming material inferiority or technological disadvantages. Rooted in Vitalist philosophy (Bergson, Nietzsche) and reaction against the perceived soullessness of industrial modernity, this cluster prioritized '\u00e9lan vital' (vital momentum) over ballistics. It manifests in the bayonet charge, the refusal to dig in, and the belief that defensive warfare is a form of spiritual defeat. Over the period, it evolves from a dominant military doctrine to a catastrophic failure in 1914, only to mutate into the fascist 'Triumph of the Will' and the suicidal desperation of the late Axis powers.",
    "trajectory": {
      "1890": {
        "variance_explained": 15.0,
        "description": "The decade begins with this cluster in a strong, foundational position, serving as the aristocratic counter-weight to the rising industrialism of Cluster 1. The delta is positive (+0.5%) as the European military aristocracy sought to preserve their relevance against the 'mechanic's war.' The catalyst was the widespread reception of Nietzschean philosophy, interpreting the 'Will to Power' as a military virtue. At this stage, the offensive was not just a tactic but a social signifier; the cavalry charge remained the aesthetic apex of warfare, representing the dominance of the human spirit over the chaotic battlefield.",
        "key_manifestations": [
          "The Light that Failed by Rudyard Kipling (Novel - highlighting individual martial virtue)",
          "Thus Spoke Zarathustra (widely read translation period)",
          "General Dragomirov's lectures (Advocating 'suvorovian' bayonet charges)",
          "Launch of the Revue Blanche (Cultural journal disseminating vitalist ideas)"
        ]
      },
      "1891": {
        "variance_explained": 15.5,
        "description": "Variance crept upward (+0.5%) as the 'young Turk' officers in France and Germany began to rebel against the cauticus lessons of 1870. The displacing force acting against prudence was the fear of national decadence; offensive action was seen as the cure for social lethargy. Strategically, the introduction of smokeless powder was paradoxically interpreted by vitalists not as a danger, but as an aid to the attacker, clearing the fog for the brave to advance. This year saw the early crystallization of the 'moral' school of war, which argued that he who attacks first imposes his will on the enemy.",
        "key_manifestations": [
          "News from Nowhere by William Morris (Contrast: utopian vitality vs industrial grit)",
          "Drafting of the Franco-Russian Alliance (viewed as enabling offensive potential)",
          "Von Schlieffen becomes Chief of General Staff (Merging planning with offensive necessity)",
          "The Picture of Dorian Gray by Oscar Wilde (Cultural context: obsession with youth/vitality)"
        ]
      },
      "1892": {
        "variance_explained": 16.2,
        "description": "The cluster continued to rise (+0.7%) driven by the colonial experience where European discipline and 'dash' routinely routed numerically superior indigenous forces. These victories were misinterpreted as triumphs of 'white moral superiority' rather than firepower, reinforcing the cognitive bias towards the offensive. The catalyst was the success of small, aggressive expeditionary columns in Africa, which emboldened theorists to apply these lessons to European warfare. The 'spirit of the bayonet' was becoming a dogma to inoculate soldiers against the fear of the unseen bullet.",
        "key_manifestations": [
          "Barrack-Room Ballads by Kipling (Celebrating the soldier's spirit)",
          "French conquest of Dahomey (Event - interpreted as triumph of \u00e9lan)",
          "Degeneration by Max Nordau (Book - critiquing loss of vitality, prompting reaction)",
          "Instruction on Infantry Combat (French regulation emphasizing forward movement)"
        ]
      },
      "1893": {
        "variance_explained": 17.0,
        "description": "Variance increased (+0.8%) as the debate between 'firepower' and 'shock' intensified. The vitalists gained ground by arguing that focusing on cover and entrenchment eroded troop morale. The catalyst was the intellectual influence of Henri Bergson (though his fame peaked later, his ideas were percolating), whose concept of time and fluid reality supported the idea that battle was a dynamic 'becoming' controlled by intuition and will, not a static engineering problem. The offensive was increasingly framed as an existential necessity for the nation.",
        "key_manifestations": [
          "Appearance of the term '\u00c9lan Vital' in philosophical discourse",
          "Matabele War (Counter-evidence of Maxim gun ignored by vitalists)",
          "Introduction of the 'lebel' bayonet drill (Training Event)",
          "The Kingdom of God is Within You by Tolstoy (Christian pacifism - the shadow defining the martial light)"
        ]
      },
      "1894": {
        "variance_explained": 17.5,
        "description": "The Dreyfus Affair began, acting as a complex catalyst (+0.5%). While it divided the army, the anti-Dreyfusards doubled down on the 'honor' and 'mystique' of the Army as a spiritual institution, immune to rationalist (civilian/industrial) critique. The cluster entrenched itself as the defense mechanism of the officer caste. In the East, the Japanese offensive at Pyongyang was hailed by Western observers as proof that an 'offensive spirit' allowed a modernizing nation to defeat a sluggish giant (China).",
        "key_manifestations": [
          "Arrest of Alfred Dreyfus (Event - rallying point for traditionalist army mystique)",
          "Battle of Pyongyang (Event - Japanese offensive success)",
          "Trilby by George du Maurier (Novel - obsession with mesmerism/will)",
          "Captain Mahan's essays on moral factors in naval war"
        ]
      },
      "1895": {
        "variance_explained": 18.2,
        "description": "Variance rose (+0.7%) as the psychological reaction to the industrial 'emptiness' of the battlefield grew. The 'psychology of the crowd' (Le Bon) became a hot topic; generals believed the only way to manage the fear of the conscript mass was to hurl them forward in a collective frenzy. The catalyst was the fear that standing still under fire would lead to panic; therefore, movement became a disciplinary tool. The offensive was rationalized not just as tactical, but as the only way to maintain cohesion.",
        "key_manifestations": [
          "The Crowd: A Study of the Popular Mind by Gustave Le Bon (Book)",
          "The Red Badge of Courage by Stephen Crane (Novel - exploring fear and the 'red sickness' of battle)",
          "Cuban War of Independence begins (Guerrilla will vs Imperial might)",
          "Wilhelm II's 'Hun Speech' (Rhetoric - exhorting martial ferocity)"
        ]
      },
      "1896": {
        "variance_explained": 19.5,
        "description": "The Battle of Adwa (Italian defeat) acted as a perverse catalyst (+1.3%). Instead of blaming the offensive doctrine, observers blamed a *lack* of true offensive spirit or racial vigor in the Italians. The lesson drawn was 'attack harder,' not 'don't attack.' This reinforced the cluster: failure was interpreted as a moral deficiency rather than a tactical error. The 'Will' became the non-falsifiable variable in military calculus.",
        "key_manifestations": [
          "Battle of Adwa (Event - catastrophic failure of colonial offensive)",
          "A Shropshire Lad by A.E. Housman (Poetry - stoic sacrifice)",
          "Matter and Memory by Henri Bergson (Philosophy - elevating spirit over matter)",
          "Reorganization of the French War College (\u00c9cole Sup\u00e9rieure de Guerre)"
        ]
      },
      "1897": {
        "variance_explained": 20.1,
        "description": "Variance ticked up (+0.6%) as the 'Fashoda' generation of French officers came of age, desperate to wash away the stain of 1870. The 'revenge' narrative was fueled by a vitalist belief in the regeneration of the French race through action. Rostand's *Cyrano de Bergerac* premiered, celebrating the 'panache'\u2014a key cultural component of this cluster. It was a rejection of utilitarianism in favor of the beautiful, useless, heroic gesture.",
        "key_manifestations": [
          "Cyrano de Bergerac by Edmond Rostand (Play - Panache as cultural ideal)",
          "Dracula by Bram Stoker (Novel - conflict of ancient blood/will vs modern rationality)",
          "Tirpitz becomes Secretary of State for Navy (German 'risk theory' as offensive deterrence)",
          "Greco-Turkish War (Event - failure of irregular enthusiasm vs German-trained regulars)"
        ]
      },
      "1898": {
        "variance_explained": 21.0,
        "description": "The charge of the 21st Lancers at Omdurman gave this cluster a massive, if dying, visual anchor (+0.9%). It was the last great cavalry charge of the empire, immortalized by Churchill. It validated the romantic view of war just as the machine gun (used in the same battle) rendered it obsolete. The variance increase is driven by this 'sunset effect'\u2014the brighter the technology burned, the more the culture clung to the image of the heroic individual.",
        "key_manifestations": [
          "Charge of the 21st Lancers at Omdurman (Event)",
          "The War of the Worlds by H.G. Wells (Contrast: The artilleryman's survivalist philosophy)",
          "Spanish-American War 'Rough Riders' charge (Event - amateur offensive spirit)",
          "Fashoda Incident (Event - peak of prestige politics)"
        ]
      },
      "1899": {
        "variance_explained": 20.0,
        "description": "The Boer War began, and the initial British defeats (Black Week) caused a slight dip (-1.0%) as frontal assaults into Mauser fire resulted in slaughter. However, the cluster showed resilience; the disasters were blamed on poor leadership or lack of 'drive,' not the doctrine of the offensive itself. The displacing force was the undeniable reality of the 'invisible enemy,' but the cultural response was to demand 'more grit' rather than more cover.",
        "key_manifestations": [
          "Battle of Magersfontein (Event - failure of the advance)",
          "The Interpretation of Dreams by Freud (Book - uncovering the subconscious drives)",
          "Boer commandos (Asymmetric application of will/mobility)",
          "Action at the Modder River (Event)"
        ]
      },
      "1900": {
        "variance_explained": 19.5,
        "description": "Stasis (-0.5%). The relief of Mafeking led to 'Mafeking Night,' a display of jingoistic vitality. The Boxer Rebellion saw allied troops competing in offensive aggression to seize Beijing. The Japanese contingent's discipline and willingness to take casualties left a deep impression on Western observers, planting the seed that 'Bushido' (an eastern variant of this cluster) was the secret to modern military success.",
        "key_manifestations": [
          "Relief of Mafeking (Event)",
          "Boxer Rebellion (Event - 'Spirit Boxers' believing themselves immune to bullets)",
          "Lord Jim by Joseph Conrad (Novel - the crisis of individual courage)",
          "Introduction of the ethos of 'Bushido' to the West (Nitobe's book published)"
        ]
      },
      "1901": {
        "variance_explained": 20.5,
        "description": "Variance rose (+1.0%) as the reaction to the Boer War's 'defensive' lessons set in. Colonel Grandmaison and Foch in France began to formulate the theory that the defensive attitude was the cause of defeat. The catalyst was the need to restore the Army's confidence. The 'Regulations of 1901' in France began to shift back towards the offensive, arguing that 'imprudence is the best safety.'",
        "key_manifestations": [
          "Bushido: The Soul of Japan by Inazo Nitobe (Book - widely read in West)",
          "Kim by Kipling (The 'Game' requires boldness)",
          "Queen Victoria's funeral (Cultural Event - end of an era, anxiety inducing need for vitality)",
          "Mann's Buddenbrooks (Novel - decline of a family/vitality)"
        ]
      },
      "1902": {
        "variance_explained": 21.0,
        "description": "A quiet entrenchment (+0.5%). The British Army introduced the new Short Magazine Lee-Enfield, but the training emphasized rapid fire to facilitate the *advance*, not the defense. In Germany, the Schlieffen Plan was evolving; while mathematically precise, its core assumption was an immense, daring offensive maneuver that required superhuman marching performance\u2014a reliance on physical vitality to solve a strategic impossibility.",
        "key_manifestations": [
          "The Four Feathers by A.E.W. Mason (Novel - explicit study of cowardice and redemption)",
          "Lenin's 'What Is To Be Done?' (Political pamphlet - the Vanguard as the will of the revolution)",
          "Hobson's Imperialism (Critique of the energy of expansion)",
          "End of Boer War (Event)"
        ]
      },
      "1903": {
        "variance_explained": 22.0,
        "description": "Variance ticked up (+1.0%) as the 'Cult of the Offensive' began to formalize in French military academies. Ferdinand Foch\u2019s lectures at the \u00c9cole de Guerre proclaimed: 'A battle won is a battle in which one will not confess oneself beaten.' This was the metaphysical turn of strategy. The catalyst was the perceived demographic decline of France vis-a-vis Germany; if they lacked the numbers (matter), they needed more soul (spirit).",
        "key_manifestations": [
          "Foch's 'Des Principes de la Guerre' (Book - The Bible of the Offensive)",
          "The Call of the Wild by Jack London (Novel - primitive vitality)",
          "Man and Superman by Shaw (Play - the Life Force)",
          "Pogroms in Kishinev (Event - mob violence/vitality unleavened)"
        ]
      },
      "1904": {
        "variance_explained": 24.5,
        "description": "The Russo-Japanese War provided a massive surge (+2.5%). The Japanese infantry's willingness to sustain horrific casualties at Nanshan and Port Arthur was interpreted by Western attach\u00e9s (like Ian Hamilton) not as a warning, but as an inspiration. The lesson drawn was that the 'Spirit of the Offensive' could conquer concrete and Maxim guns. This was the critical confirmation bias that would doom millions in 1914.",
        "key_manifestations": [
          "Battle of Nanshan (Event - Japanese human wave attacks succeed)",
          "Peter Pan by J.M. Barrie (Play - eternal youth/refusal to age)",
          "Ian Hamilton's A Staff Officer's Scrap-Book (Book - praising Japanese spirit)",
          "The Sea-Wolf by Jack London (Novel - Wolf Larsen as Nietzschean superman)"
        ]
      },
      "1905": {
        "variance_explained": 26.0,
        "description": "Variance peaked for the mid-decade (+1.5%) following the Japanese victory. The 'offensive \u00e0 outrance' became the distinct orthodoxy of the French Army. In Germany, the General Staff concluded that future wars must be short and decided by a crushing initial blow, further elevating the offensive. The Revolution of 1905 in Russia was also read as a failure of the Tsar's 'will' to maintain order, reinforcing the need for decisive action.",
        "key_manifestations": [
          "General Staff ride of 1905 (Schlieffen Plan finalized)",
          "The offensive doctrine debates in the French Chamber",
          "Professors of Energy by Maurice Barr\u00e8s (Political concept)",
          "Die Br\u00fccke art movement formed (Expressionist vitality)"
        ]
      },
      "1906": {
        "variance_explained": 27.2,
        "description": "The launch of the Dreadnought (Cluster 1) created a compensatory reaction in Cluster 2 (+1.2%). As machines grew larger, the rhetoric of human superiority grew louder to compensate for the fear of obsolescence. Grandmaison and the 'Young Turks' argued that the army must be a 'school of will.' The Falli\u00e8res decree removed defensive training from the French curriculum. The trajectory was now exponential.",
        "key_manifestations": [
          "Falli\u00e8res Decree (Military Event - de-emphasizing defense)",
          "White Fang by Jack London (Novel)",
          "Sorel's Reflections on Violence (Book - myth of the general strike/vitalist violence)",
          "Rebranding of the Alpinis (Elite mountain troops/offensive ethos)"
        ]
      },
      "1907": {
        "variance_explained": 28.5,
        "description": "Variance rose (+1.3%). Henri Bergson published *Creative Evolution*, the philosophical cornerstone of this cluster. His concept of '\u00e9lan vital' provided the metaphysical justification for military doctrine. Strategy was no longer about geometry; it was about the evolution of force. Baden-Powell founded the Boy Scouts, explicitly to toughen the youth and prevent 'imperial decadence,' militarizing the concept of vitality for the next generation.",
        "key_manifestations": [
          "Creative Evolution by Henri Bergson (Philosophy)",
          "Founding of the Boy Scouts (Social Event)",
          "The Secret Agent by Conrad (Character of the Professor - pure destructive will)",
          "Hague Convention (Diplomatic failure to curb the offensive spirit)"
        ]
      },
      "1908": {
        "variance_explained": 30.0,
        "description": "The Young Turk Revolution in the Ottoman Empire and the Bosnian Crisis fueled the belief in bold action (+1.5%). In France, the debate was settled: the Army would attack. The 'Regulation of 1908' explicitly stated 'The French Army, returning to its traditions, knows no other law than the offensive.' The variance growth here represents the institutional codification of a suicidal fallacy.",
        "key_manifestations": [
          "French Field Regulations of 1908 (Doctrine)",
          "Young Turk Revolution (Event)",
          "Scouting for Boys by Baden-Powell (Book)",
          "Introduction of the 'Pickelhaube' cover (aesthetic maintenance of the offensive look)"
        ]
      },
      "1909": {
        "variance_explained": 31.5,
        "description": "Futurism exploded onto the scene with Marinetti's Manifesto (+1.5%). This was the artistic wing of the cluster: 'We will glorify war\u2014the world's only hygiene\u2014militarism, patriotism...' It aestheticized the offensive, merging the machine with the human will. It was a catalyst that made aggression 'modern' and 'artistic,' appealing to the youth. The cluster was moving from military manuals to avant-garde cafes.",
        "key_manifestations": [
          "Futurist Manifesto by Marinetti (Art/Cultural Event)",
          "Bl\u00e9riot's flight (interpreted as a triumph of individual daring)",
          "Deployment of the Grandmaison doctrine in lectures",
          "Du C\u00f4t\u00e9 de Chez Swann (Proust begins writing - memory/time/internal reality)"
        ]
      },
      "1910": {
        "variance_explained": 33.0,
        "description": "Variance continued to climb (+1.5%). The death of Edward VII and the constitutional crisis in the UK created a sense of instability that demanded 'strong men.' In Russia, the Sukhomlinov reforms prioritized the 'spirit' of the bayonet over the bullet, actively suppressing fire-tactic training. The 'cult' was now a pan-European delusion, affecting Russian, German, and French commands equally.",
        "key_manifestations": [
          "Sukhomlinov becomes Minister of War (Event - 'The Bullet is a fool, the bayonet a hero')",
          "Howards End (Wilcox family as representatives of 'outer' energy/imperial vitality)",
          "Roosevelt's 'Man in the Arena' speech (Rhetoric - celebrating the striver)",
          "Stravinsky's Firebird (Ballet - raw energy)"
        ]
      },
      "1911": {
        "variance_explained": 36.0,
        "description": "The Agadir Crisis acted as a sharp catalyst (+3.0%). The near-war atmosphere empowered the 'offensive' lobbyists. General Joffre was appointed Chief of Staff in France, a pragmatist who nonetheless was swept along by the Grandmaison school. Grandmaison famously declared: 'We must prepare the army for the offensive to the bitter end.' The Delta is driven by the silencing of the remaining defensive theorists (like General Michel, who was fired).",
        "key_manifestations": [
          "Grandmaison's lectures to the Centre of Higher Military Studies (Event)",
          "Dismissal of General Michel (Event - purging the defensive school)",
          "Agadir Crisis (Event)",
          "Chesterton's The Ballad of the White Horse (Poetry - hopeless, heroic defense/offense)"
        ]
      },
      "1912": {
        "variance_explained": 39.0,
        "description": "The Balkan Wars (First) seemed to validate the offensive (+3.0%). The Bulgarian army's spirited attacks were praised, while their subsequent stalling due to logistics was ignored. The 'Spirit of the Offensive' was now absolute dogma. In Germany, Bernhardi's *Germany and the Next War* became a bestseller, arguing that war was a biological necessity and the offensive a moral imperative. The culture was priming itself for the 'Great Charge.'",
        "key_manifestations": [
          "Germany and the Next War by Friedrich von Bernhardi (Book)",
          "Loss of the Titanic (Cultural Event - hubris, but met with 'Be British' stoicism)",
          "First Balkan War (Event)",
          "Jung publishes Psychology of the Unconscious (Book - Libido as generalized psychic energy)"
        ]
      },
      "1913": {
        "variance_explained": 42.0,
        "description": "The peak of the pre-war rise (+3.0%). Plan XVII was adopted in France\u2014a plan of pure attack, ignoring terrain and enemy intent. The 'Three Year Law' was passed to provide the manpower for this shock. The logic was circular: We must attack because it is our nature; we must have the will because the material odds are against us. The variance reflects a society-wide intoxication with 'Action' as a remedy for existential anxiety.",
        "key_manifestations": [
          "Adoption of Plan XVII (Strategic Event)",
          "The Rite of Spring (Cultural Event - Primitive, violent vitality)",
          "Alain-Fournier's Le Grand Meaulnes (Novel - romantic idealism)",
          "Introduction of the 'red trousers' defense ('Le pantalon rouge c'est la France!' - rejecting camouflage)"
        ]
      },
      "1914": {
        "variance_explained": 85.0,
        "description": "The catastrophe. Variance exploded to its maximum (+43.0%) as the doctrine was applied in the Battle of the Frontiers, then immediately began to shatter. The French army charged German machine guns in blue coats and red trousers, suffering 27,000 deaths in a single day (August 22). The 'Cult' collided with Cluster 1 (Material Warfare). The description for this year is 'The Great Disillusionment.' The offensive spirit did not win; it merely increased the butcher's bill. However, the *belief* drove the initial mobilization and the Miracle on the Marne, which was a triumph of desperate will over logistics.",
        "key_manifestations": [
          "Battle of the Frontiers (Event - the death of the offensive doctrine)",
          "Battle of the Marne (Event - the triumph of exhausted will)",
          "Spirit of 1914 (Cultural Phenomenon - the 'Augusterlebnis')",
          "Death of P\u00e9guy (Event - famous vitalist poet killed leading a charge)"
        ]
      },
      "1915": {
        "variance_explained": 60.0,
        "description": "A sharp collapse (-25.0%) as the reality of the trenches set in. The 'Offensive' was replaced by 'nibbling' (grignotage). However, the cluster did not vanish; it transformed into the 'Cult of Sacrifice.' If one could not break the line, one could at least demonstrate moral superiority by enduring the shelling. The Gallipoli campaign was a secondary manifestation\u2014an attempt to use 'imagination' and a bold amphibious strike to bypass the deadlock, which failed due to command inertia.",
        "key_manifestations": [
          "Gallipoli Campaign (Event - romantic offensive meets reality)",
          "Battle of Loos (Event - failure of the 'Big Push')",
          "The Rainbow by D.H. Lawrence (Novel - vitalism turning inward)",
          "Edith Cavell execution (Event - moral martyrdom)"
        ]
      },
      "1916": {
        "variance_explained": 45.0,
        "description": "Variance declined further (-15.0%) with Verdun and the Somme. These battles were explicitly material (Cluster 1). The 'Cult of the Offensive' was revealed to be a lie. The French mutinies (gestating) were the rejection of this cluster by the common soldier. However, in the air war (The Red Baron), the 'Knights of the Air' kept the cluster alive, relocating the individual duel from the mud to the sky. The 'Ace' became the new repository of Vitalism.",
        "key_manifestations": [
          "Battle of Verdun (Event - 'They shall not pass' is defensive determination, not offensive elan)",
          "Establishment of the 'Ace' system (Cultural Event)",
          "Dadaism born in Zurich (Art - mocking the rationality/vitality of the war)",
          "Easter Rising in Ireland (Event - romantic, doomed insurrection)"
        ]
      },
      "1917": {
        "variance_explained": 30.0,
        "description": "The nadir of the cluster during the war (-15.0%). The Nivelle Offensive promised a breakthrough via 'violence and brutality' but failed miserably, causing the French Army to mutiny. The soldiers refused to attack, agreeing only to defend. This was the death of *L'offensive \u00e0 outrance*. In contrast, the Stormtrooper tactics developed by Germany represented a *technocratic* evolution of the offensive\u2014using skill and infiltration rather than pure 'will' and mass.",
        "key_manifestations": [
          "Nivelle Offensive (Event - failure of the formula)",
          "French Army Mutinies (Event - rejection of the cluster)",
          "Caporetto (Event - German/Austrian infiltration success)",
          "Storm of Steel by J\u00fcnger (publishing later, but experiencing this shift to 'techno-vitalism')"
        ]
      },
      "1918": {
        "variance_explained": 35.0,
        "description": "A slight rebound (+5.0%) due to the German Spring Offensive (Kaiserschlacht). This was the last gasp of the offensive spirit on the Western Front, driven by elite Stormtroopers. It succeeded tactically but failed strategically due to lack of supplies (Cluster 1). The lesson was final: Will can break a line, but only Trucks can exploit it. The Allied 'Hundred Days' was an offensive, but a *managed*, material one, not a vitalist one.",
        "key_manifestations": [
          "Operation Michael (Event)",
          "Ludendorff's mental breakdown (Event - the will cracking)",
          "Oswald Spengler's Decline of the West (Book - Faustian soul exhausted)",
          "Death of Manfred von Richthofen (Event - death of the Ace)"
        ]
      },
      "1919": {
        "variance_explained": 20.0,
        "description": "Post-war collapse (-15.0%). The culture was exhausted. Vitalism was viewed with suspicion. The 'Lost Generation' had no \u00e9lan left. However, the *Freikorps* in Germany kept the ember burning\u2014paramilitary units refusing to demobilize, fighting in the Baltics and Berlin, preserving the 'front experience' and the cult of violence as a political tool.",
        "key_manifestations": [
          "Creation of the Freikorps (Event)",
          "D'Annunzio seizes Fiume (Event - proto-fascist theatrical vitality)",
          "The Cabinet of Dr. Caligari (Film - distorted will)",
          "Treaty of Versailles (Event - viewed by vitalists as a shackle to be broken)"
        ]
      },
      "1920": {
        "variance_explained": 22.0,
        "description": "Stasis/Mutation (+2.0%). The cluster began to migrate from military doctrine to political ideology. Fascism was born from the rib of the 'Cult of the Offensive.' Mussolini and the Futurists merged, arguing that the 'trenchocracy' (aristocracy of the trenches) had the right to rule. The offensive was now directed against the internal enemy (socialists/democrats).",
        "key_manifestations": [
          "Founding of the NSDAP (Event)",
          "Kapp Putsch (Event - military will vs civil state)",
          "Beyond the Pleasure Principle by Freud (Book - Death Drive)",
          "Women in Love by D.H. Lawrence (Novel - struggle of wills)"
        ]
      },
      "1921": {
        "variance_explained": 25.0,
        "description": "Variance rose (+3.0%) as Fascist squads engaged in street violence in Italy. This was 'action' for action's sake. The critique of 'bourgeois comfort' became central. The Offensive was reframed as a spiritual revolution against the flabbiness of peace. Douhet's 'Command of the Air' also appeared, transferring the offensive spirit to the bomber pilot\u2014the new technological superman.",
        "key_manifestations": [
          "Rise of Fascist Squadristi (Event)",
          "Douhet's The Command of the Air (Book - offensive bombing)",
          "Pirandello's Six Characters in Search of an Author (Play - crisis of reality/will)",
          "Riff War begins (Event - colonial resistance vitality)"
        ]
      },
      "1922": {
        "variance_explained": 30.0,
        "description": "The March on Rome (+5.0%). The ultimate validation of political vitalism. A bluff, a threat of violence, and a display of will seized a modern state. This galvanized the cluster globally. The 'will to power' seemed to work where parliamentary debate failed. In the USSR, the 'New Soviet Man' was being engineered\u2014a different flavor of vitalism, focused on industrial stamina.",
        "key_manifestations": [
          "March on Rome (Event)",
          "Siddhartha by Hesse (Novel - spiritual quest/will)",
          "The Waste Land (Contrast: 'I can connect nothing with nothing' - lack of vitality)",
          "Formation of the Soviet Pioneer organization (Social Event)"
        ]
      },
      "1923": {
        "variance_explained": 28.0,
        "description": "The Beer Hall Putsch failed (-2.0%). It showed that 'will' alone could not overcome state police power (Material). Hitler went to prison to write *Mein Kampf*, essentially a manifesto of this cluster: the belief that the Aryan race possessed a superior 'culture-creating' energy that justified aggressive expansion. The setback was tactical; the strategic commitment to the 'triumph of the will' deepened.",
        "key_manifestations": [
          "Beer Hall Putsch (Event)",
          "I and Thou by Buber (Philosophy - relation/will)",
          "Duino Elegies by Rilke (Poetry - angels as terrifying intensity)",
          "Le Corbusier's Toward an Architecture (Book - will to order)"
        ]
      },
      "1924": {
        "variance_explained": 25.0,
        "description": "A lull (-3.0%) during the stabilization period. The 'Spirit of Locarno' dampened the fires of the offensive. However, in the background, the 'Myth of the War Experience' was being codified by writers like Ernst J\u00fcnger. In *War as Inner Experience*, he argued that the war was not a defeat but a spiritual forging. This kept the cluster dormant but potent.",
        "key_manifestations": [
          "The Magic Mountain by Mann (Novel - Naphta vs Settembrini debates on terror/will)",
          "Surrealist Manifesto (Art - liberation of the subconscious will)",
          "Stalin's 'Foundations of Leninism' (Book - will of the party)",
          "Hitler writes Mein Kampf (Book)"
        ]
      },
      "1925": {
        "variance_explained": 26.0,
        "description": "Publication of *Mein Kampf* (+1.0%). Though not immediately a bestseller, it laid the blueprint. It defined the state not as an economic unit but as a vessel for racial vitality. The 'Lebensraum' concept was an offensive doctrine applied to geography. In Japan, the implementation of universal male suffrage was countered by the Peace Preservation Law, tightening the state's grip on the national 'kokutai' (essence).",
        "key_manifestations": [
          "Mein Kampf Vol 1 published (Book)",
          "The Great Gatsby (Contrast: The failure of Gatsby's will against social material)",
          "Peace Preservation Law in Japan (Legal Event)",
          "Eisenstein's Battleship Potemkin (Film - revolutionary vitality)"
        ]
      },
      "1926": {
        "variance_explained": 27.0,
        "description": "Variance crept up (+1.0%). In Poland, Pilsudski's May Coup was a 'Sanacja' (Sanitation)\u2014a moral cleansing of the state through military will. This mirrored the trend: when democracy (perceived as weak/materialist) faltered, the 'Man on Horseback' returned. T.E. Lawrence published *Seven Pillars of Wisdom*, a study in the will's triumph over the body, further romanticizing the irregular offensive.",
        "key_manifestations": [
          "May Coup in Poland (Event)",
          "Seven Pillars of Wisdom by T.E. Lawrence (Book)",
          "Sun Also Rises by Hemingway (Novel - seeking vitality in bullfighting)",
          "Hirohito becomes Emperor (Event - Start of Showa era/radical nationalism)"
        ]
      },
      "1927": {
        "variance_explained": 28.5,
        "description": "Heidegger's *Being and Time* was published (+1.5%). While complex, its focus on 'resoluteness' (Entschlossenheit) and authentic existence resonated with the vitalist mood. The act of *choosing* one's destiny became paramount. In China, the break between the KMT and Communists led to the Autumn Harvest Uprising\u2014Mao's embrace of the 'voluntarist' theory of revolution (peasants with will > objective material conditions).",
        "key_manifestations": [
          "Being and Time by Martin Heidegger (Philosophy)",
          "Shanghai Massacre (Event - ruthless application of will)",
          "Napoleon by Abel Gance (Film - cinematic hero worship)",
          "Lindbergh's flight (Individual triumph)"
        ]
      },
      "1928": {
        "variance_explained": 29.0,
        "description": "Stasis (+0.5%). The Kellogg-Briand Pact renouncing war was the high water mark of anti-vitalism. But the reaction was brewing. In Japan, the Kwantung Army assassinated Zhang Zuolin, an act of independent military initiative (Gekokujo) that signaled the army's will was superior to the civilian government's orders. This was the 'offensive \u00e0 outrance' applied to politics.",
        "key_manifestations": [
          "Huanggutun Incident (Event - assassination of Zhang Zuolin)",
          "Lady Chatterley's Lover (Novel - vitalism of the body)",
          "The Threepenny Opera (Play - cynical energy)",
          "Formation of the Stahlhelm active wing (Paramilitary event)"
        ]
      },
      "1929": {
        "variance_explained": 32.0,
        "description": "The Depression shattered the liberal/materialist world order, causing a spike in this cluster (+3.0%). If 'economics' failed, only 'will' remained. The Nazi vote began to surge. The displacing force was the collapse of rational market optimism. People looked for irrational, miraculous saviors. The 'Cult of the Leader' (F\u00fchrerprinzip) became the political expression of the Offensive Spirit.",
        "key_manifestations": [
          "Wall Street Crash (Economic failure fueling vitalist reaction)",
          "Remarque's All Quiet on the Western Front (The counter-text, attacked by vitalists)",
          "Faulkner's The Sound and the Fury (Novel)",
          "Lateran Treaty (Event - Mussolini consolidates prestige)"
        ]
      },
      "1930": {
        "variance_explained": 36.0,
        "description": "Variance rose significantly (+4.0%). The Nazi breakthrough in the Reichstag elections. The rhetoric was entirely vitalist: 'Germany Awake!' It was a call to consciousness and action. J\u00fcnger published *The Worker* (Der Arbeiter) soon after, envisioning a total mobilization where the worker-soldier is a new biological type. The cluster was preparing to seize the state.",
        "key_manifestations": [
          "Nazi electoral breakthrough (Event)",
          "The Blue Angel (Film - destruction of the professor/intellectual)",
          "Civilization and Its Discontents by Freud (Book)",
          "Gandhi's Salt March (Contrast: Satyagraha as 'Truth Force' - non-violent will)"
        ]
      },
      "1931": {
        "variance_explained": 40.0,
        "description": "The Mukden Incident (+4.0%). The Kwantung Army attacked on its own initiative. This was 'action' dictating policy. It proved that a spirited military clique could drag a whole nation into war. In Japan, the concept of 'Yamato-damashii' (Japanese Spirit) was ramped up in education to counter Western materialism. The 'Showa Restoration' movement sought to restore the Emperor to absolute power through violent purification.",
        "key_manifestations": [
          "Mukden Incident (Event)",
          "M (Film - mob violence/hysteria)",
          "Failed March Incident in Japan (Coup attempt)",
          "Gentile's 'The Doctrine of Fascism' (Ghostwritten for Mussolini)"
        ]
      },
      "1932": {
        "variance_explained": 45.0,
        "description": "The 'May 15 Incident' in Japan (assassination of PM Inukai) (+5.0%). Young naval officers killed the Prime Minister to 'wake up' the nation. In Germany, the street battles between Nazis and Communists were a daily performance of the 'offensive.' The election cycles were plebiscites on who had the stronger will. The cluster was now the dominant mode of political discourse in the Axis powers.",
        "key_manifestations": [
          "May 15 Incident (Event)",
          "Brave New World (Book - critique of the soulless stable state)",
          "Papen's coup in Prussia (Political Event)",
          "Journey to the End of the Night (Novel - explosive cynicism)"
        ]
      },
      "1933": {
        "variance_explained": 55.0,
        "description": "Hitler's seizure of power (+10.0%). The 'Triumph of the Will' (title of the later film, reality of the year). The Nazis explicitly rejected 'objective' constraints in favor of racial will. The book burnings were a symbolic destruction of 'intellectualism' (critique) in favor of 'spirit' (belief). The cluster became the state religion of Germany.",
        "key_manifestations": [
          "Hitler becomes Chancellor (Event)",
          "Nazi Book Burnings (Event)",
          "Man's Fate by Malraux (Novel - revolutionary will)",
          "Japan withdraws from League of Nations (Diplomatic Event - rejection of international norms)"
        ]
      },
      "1934": {
        "variance_explained": 58.0,
        "description": "The 'Night of the Long Knives' (+3.0%). A purge that demonstrated the absolute dominance of the F\u00fchrer's will over law and even his own paramilitary (SA). In Japan, the 'Army Pamphlet' declared that 'War is the Father of Creation,' explicitly linking national vitality to conflict. The 'Imperial Way Faction' (Kodoha) pushed for spiritual training over material modernization (a fatal error later).",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "Triumph of the Will (Film - the visual bible of this cluster)",
          "Japanese Army Pamphlet 'The Essence of National Defense'",
          "Miller's Tropic of Cancer (Novel - raw, unfiltered life)"
        ]
      },
      "1935": {
        "variance_explained": 60.0,
        "description": "Italy invades Ethiopia (+2.0%). Mussolini framed it as a test of national virility. 'Better to live one day as a lion than 100 years as a sheep.' The defiance of League sanctions was part of the performance. In Germany, the Nuremberg Laws defined the 'Volk' biologically, fusing the vitalist cluster with racism. Reintroduction of conscription was the militarization of the collective will.",
        "key_manifestations": [
          "Invasion of Ethiopia (Event)",
          "Nuremberg Laws (Legal Event)",
          "Reintroduction of Conscription in Germany (Event)",
          "Eliot's Murder in the Cathedral (Play - submission of will to God vs State)"
        ]
      },
      "1936": {
        "variance_explained": 62.0,
        "description": "The Spanish Civil War polarized the world's 'spirits' (+2.0%). The Falange's motto '\u00a1Viva la Muerte!' (Long live death) was the necro-vitalist peak. For the International Brigades, it was the 'anti-fascist will.' The Berlin Olympics were staged as a showcase of Aryan physical superiority\u2014vitalism on the track. The February 26 Incident in Japan (attempted coup) was the climax of the radical 'Imperial Way' faction's attempt to restore spiritual purity.",
        "key_manifestations": [
          "Berlin Olympics (Event)",
          "February 26 Incident (Event - failed coup by spiritualists)",
          "Spanish Civil War begins (Event)",
          "Benjamin's 'The Work of Art in the Age of Mechanical Reproduction' (Essay - aestheticization of politics)"
        ]
      },
      "1937": {
        "variance_explained": 65.0,
        "description": "Invasion of China by Japan (+3.0%). The Japanese army, lacking the logistics for a continental war (Cluster 1), relied on 'seishin' (spirit) to drive the advance. The Rape of Nanking was, in part, a manifestation of unbridled, undisciplined 'vitality' turning into sadism. In Nazi Germany, the 'Degenerate Art' exhibition defined the enemy as those lacking 'healthy' racial instinct.",
        "key_manifestations": [
          "Degenerate Art Exhibition (Cultural Event)",
          "Rape of Nanking (Event)",
          "Picasso's Guernica (Art - the scream against the violence)",
          "Steinbeck's Of Mice and Men (Novel - helplessness of the weak)"
        ]
      },
      "1938": {
        "variance_explained": 68.0,
        "description": "The Anschluss and Munich (+3.0%). Hitler successfully gambled that the Western democracies lacked the 'will' to fight. He was right. He despised the 'umbrella-carrying' Chamberlain as the archetype of the vitalistically dead bourgeois. The cluster was riding high; bluff and aggression were paying off without the need for material war. The 'Sudetenland' annexation was a triumph of nerve.",
        "key_manifestations": [
          "Munich Agreement (Event - triumph of aggressive will)",
          "Anschluss (Event)",
          "Nausea by Sartre (Novel - existential crisis of existence)",
          "Kristallnacht (Event - unleashed mob violence)"
        ]
      },
      "1939": {
        "variance_explained": 70.0,
        "description": "War begins (+2.0%). Hitler's speech to his generals: 'I have placed my death-head units... with orders to send to death mercilessly... only in this way will we obtain the living space we need.' The invasion of Poland was cast as the release of pent-up national energy. However, the operational reality was Blitzkrieg\u2014which was actually a materialist doctrine (Cluster 1) masquerading as a vitalist one.",
        "key_manifestations": [
          "Invasion of Poland (Event)",
          "Goodbye to Berlin (Book - end of the era)",
          "The Wizard of Oz (Film - 'Courage' as a central theme)",
          "Finnegans Wake (Book - cyclical history)"
        ]
      },
      "1940": {
        "variance_explained": 60.0,
        "description": "The Fall of France was the apparent vindication (-10.0% variance shift relative to Material, but high absolute). The Germans believed it was their will; the Allies believed it was their lack of moral fiber. However, the Battle of Britain halted the cluster. The Luftwaffe could not 'will' away the RAF's radar and Hurricanes. Churchill mobilized the English language ('We shall fight on the beaches') to create a counter-will, a 'democratic vitalism' of endurance.",
        "key_manifestations": [
          "Churchill's 'Blood, Toil, Tears and Sweat' speech (Rhetoric)",
          "Fall of France (Event)",
          "The Great Dictator (Film - satire of the vitalist leader)",
          "For Whom the Bell Tolls (Novel - sacrifice)"
        ]
      },
      "1941": {
        "variance_explained": 55.0,
        "description": "Operation Barbarossa (-5.0%). Hitler ordered the Wehrmacht to kick in the door, believing the Soviet structure would collapse due to racial inferiority. It was the ultimate gamble of Ideology vs. Geography. The 'Commissar Order' was an instruction to wage a war of annihilation. Pearl Harbor was similarly a gamble by Japan that American 'softness' would lead to a negotiated peace. Both were fatal miscalculations of the 'spirit's' ability to overcome material realities.",
        "key_manifestations": [
          "Operation Barbarossa (Event)",
          "Commissar Order (Document)",
          "Pearl Harbor (Event)",
          "Fromm's Escape from Freedom (Book - psychology of fascism)"
        ]
      },
      "1942": {
        "variance_explained": 50.0,
        "description": "The turning point (-5.0%). At Stalingrad and Midway, the 'will' hit the wall of material attrition. The Japanese navy lost its best pilots (the embodiment of skill/spirit). Hitler's refusal to allow the 6th Army to retreat ('Stand fast!') was the 'Cult of the Offensive' turning into the 'Cult of Suicide.' The cluster shifted from a doctrine of victory to a doctrine of self-destruction.",
        "key_manifestations": [
          "Hitler's 'No Retreat' order at Stalingrad (Event)",
          "Battle of Midway (Event)",
          "The Stranger by Camus (Novel - absurdity of life)",
          "Shostakovich's 7th Symphony (Music - will to survive siege)"
        ]
      },
      "1943": {
        "variance_explained": 40.0,
        "description": "Total mobilization of the spirit in the face of defeat (-10.0%). Goebbels' 'Sportpalast Speech' asked: 'Do you want Total War?' The crowd roared yes. This was the manufacturing of fanaticism to replace lost divisions. The 'Kamikaze' tactic was proposed in Japan\u2014the literal weaponization of the soul. The offensive was no longer strategic; it was symbolic.",
        "key_manifestations": [
          "Goebbels' Sportpalast speech (Rhetoric)",
          "Warsaw Ghetto Uprising (Event - the desperate will of the oppressed)",
          "Formation of the Kamikaze corps (Event)",
          "Being and Nothingness by Sartre (Philosophy)"
        ]
      },
      "1944": {
        "variance_explained": 30.0,
        "description": "The descent into nihilism (-10.0%). The 'Banzai charges' in the Pacific (Saipan) achieved nothing but death. The German 'Volkssturm' (People's Storm) mobilized old men and boys, armed with Panzerfausts and 'will.' The 20 July Plot (attempt to kill Hitler) was the recognition by professional soldiers that the 'Vitalist' leadership was destroying the nation, but the coup failed due to lack of resolve/luck.",
        "key_manifestations": [
          "Battle of Saipan 'Banzai Charge' (Event)",
          "Creation of the Volkssturm (Event)",
          "20 July Plot (Event)",
          "No Exit by Sartre (Play - 'Hell is other people')"
        ]
      },
      "1945": {
        "variance_explained": 15.0,
        "description": "The violent death of the cluster (-15.0%). Hitler's suicide in the bunker. The Atomic Bomb\u2014the triumph of physics over psychology. The Japanese surrender (Kyujo Incident) saw die-hards trying to stop the broadcast to continue the war to extinction. The cluster ended in the ashes of Berlin and Hiroshima. The 'Will' had lost to the 'Machine' completely.",
        "key_manifestations": [
          "Battle of Okinawa (Event - peak suicide tactics)",
          "Hitler's Suicide (Event)",
          "Kyujo Incident (Event - failed coup to stop surrender)",
          "Mishima's early writing (Cultural seed of neo-vitalism)"
        ]
      },
      "1946": {
        "variance_explained": 10.0,
        "description": "Post-mortem (-5.0%). The Nuremberg Trials dissected the 'Nazi Spirit' as pathology. The Japanese Emperor renounced his divinity. The world turned to 'Existentialism'\u2014a new form of focus on the individual, but stripped of the aggressive, nationalistic imperative. It was about *coping* with the void, not conquering the world. The 'Offensive' was discredited as madness.",
        "key_manifestations": [
          "Nuremberg Trials (Event)",
          "Emperor's Humanity Declaration (Event)",
          "Existentialism is a Humanism by Sartre (Lecture)",
          "Zorba the Greek (Novel - vitalism personalized/humanized)"
        ]
      },
      "1947": {
        "variance_explained": 8.0,
        "description": "Entrenchment of the rational (-2.0%). The Cold War was framed as a 'Long Twilight Struggle' (containment), not a decisive offensive charge. Strategic thought was dominated by Game Theory and Nuclear Physics (Cluster 1, Cluster 6). The 'Vitalist' impulse retreated into the arts (Abstract Expressionism) or anti-colonial movements (Fanon later), but vanished from Great Power statecraft.",
        "key_manifestations": [
          "Truman Doctrine (Policy of Containment - defensive)",
          "The Plague by Camus (Novel - stoic resistance, not offensive)",
          "Doctor Faustus by Mann (Novel - the cost of the demonic pact)",
          "Pollock's drip paintings (Art - chaotic individual energy)"
        ]
      },
      "1948": {
        "variance_explained": 9.1,
        "description": "A niche resurgence (+1.1%). The 1948 Arab-Israeli War. The Israelis, outnumbered and outgunned, relied on a desperate 'offensive defense' and high morale to survive. It was a flicker of the old 1914 logic\u2014spirit compensating for material\u2014that actually worked due to the disorganization of the enemy. However, globally, the trend was dead.",
        "key_manifestations": [
          "1948 Arab-Israeli War (Event)",
          "The Naked and the Dead (Novel - reducing the general to a fool)",
          "Cry, the Beloved Country (Novel)",
          "Declaration of Human Rights (Event - universalizing legal protections)"
        ]
      },
      "1949": {
        "variance_explained": 8.5,
        "description": "Stasis (-0.6%). The Chinese Revolution succeeded. Mao's doctrine emphasized the 'People's War'\u2014political will and mobilization of the peasantry over advanced weaponry. This was the Marxist-Leninist adaptation of the cluster: 'Man, not weapons, decides war.' It set the stage for the asymmetric conflicts of the Cold War.",
        "key_manifestations": [
          "Proclamation of the PRC (Event)",
          "The Second Sex by Beauvoir (Book - existentialist feminism)",
          "Death of a Salesman (Play - collapse of the vitalist American dream)",
          "Mao's 'On the People's Democratic Dictatorship' (Text)"
        ]
      },
      "1950": {
        "variance_explained": 9.1,
        "description": "The Korean War (+0.6%). The North Korean invasion was a calculated offensive gamble. The Chinese intervention later in the year brought the 'Human Wave' tactic back to the battlefield\u2014flesh vs firepower. It proved that while the 'Cult' couldn't win a global war against the US industrial base, it could still achieve local operational shocks. The cluster settled into its new role: the doctrine of the insurgent and the revolutionary.",
        "key_manifestations": [
          "Chinese intervention in Korea (Event)",
          "Battle of the Ch'ongch'on River (Event)",
          "The Rebel by Camus (Book - philosophical revolt)",
          "Rashomon (Film - subjectivity of truth)"
        ]
      }
    }
  },
  "3_strategic_air_projection": {
    "name": "Strategic Air Projection (The Vertical Flank)",
    "description": "This eigencluster represents the conceptual and technological shift from two-dimensional (surface) warfare to three-dimensional (vertical) warfare. It tracks the evolution of the idea that a nation can bypass an enemy's armies and navies to strike directly at their vital centers\u2014industry, population, and political will. Culturally, it introduces the 'terror from the sky,' dissolving the traditional separation between the front line and the home front. It moves from the romantic fantasy of flight to the tactical utility of reconnaissance, the terror of the Zeppelin, the theoretical dogmas of 'Air Power' (Douhet/Mitchell), and finally the apocalyptic reality of area bombing and nuclear delivery.",
    "trajectory": {
      "1890": {
        "variance_explained": 1.5,
        "description": "At the start of the decade, the variance was negligible, existing primarily in the domain of 'scientific romance' rather than military science. The delta is flat (+0.0%), as the concept of air power was tethered to the clumsy mechanics of the hydrogen balloon. However, the cultural imagination was already being seeded by fiction that envisioned the air as the next theatre of dominance. The displacing force preventing growth was the physical impossibility of powered flight, rendering any discussion of 'strategic projection' purely speculative. The balloon corps existed but were viewed as static observation posts, not dynamic weapons.",
        "key_manifestations": [
          "Robur the Conqueror by Jules Verne (Novel - vision of heavier-than-air dominance)",
          "Formation of the majestic balloon corps in various armies (Institutional Event)",
          "Experiments by Otto Lilienthal (Scientific Event - gliding foundations)",
          "Caesar's Column by Ignatius Donnelly (Novel - depicting aerial bombardment)"
        ]
      },
      "1891": {
        "variance_explained": 1.6,
        "description": "A tiny increment (+0.1%) driven by the continued fascination with gliding experiments and Hiram Maxim's steam-powered flight attempts. The catalyst was the engineering realization that flight was a problem of power-to-weight ratios, not magic. Culturally, the 'view from above' began to seep into surveillance anxieties. The military utility remained strictly limited to the 'high ground' of observation, effectively just an elevated cavalry scout.",
        "key_manifestations": [
          "Langley's aerodrome experiments (Scientific Event)",
          "Hiram Maxim's steam plane test rig (Tech Event)",
          "The Angel of the Revolution by George Griffith (Novel - terror from the air)",
          "Adoption of the captive balloon by the Russian Army (Event)"
        ]
      },
      "1892": {
        "variance_explained": 1.7,
        "description": "Stasis (+0.1%). The focus remained on dirigibles (steerable balloons). The French Army's *La France* airship had already flown, but range was pathetic. The displacing force was the fragility of the technology; wind was still the master. However, the theoretical lattice was tightening; discussions on the 'laws of the air' began to appear in legal circles, anticipating that borders would soon need to extend upwards.",
        "key_manifestations": [
          "Cl\u00e9ment Ader's \u00c9ole experiments (Tech Event)",
          "Hartmann the Anarchist by E. Douglas Fawcett (Novel - bombing cities)",
          "Military Ballooning School established at Aldershot (Institutional Event)",
          "Lilienthal's Der Vogelflug als Grundlage der Fliegekunst (Book - aerodynamics)"
        ]
      },
      "1893": {
        "variance_explained": 1.8,
        "description": "Variance crept up (+0.1%) as the box kite was invented, revolutionizing lift structures. While seemingly a toy, it provided the structural logic for the biplane. The catalyst was the growing synthesis of aeronautics and military reconnaissance doctrine. The 'unseen eye' became a trope in future war fiction, where the victor was the one who could see the enemy's disposition from the clouds.",
        "key_manifestations": [
          "Invention of the Box Kite by Lawrence Hargrave (Tech Event)",
          "The Great War of 189-: A Forecast (Novel - featuring balloons)",
          "Lilienthal's glides gain publicity (Event)",
          "Phillips' multiplane flying machine test (Tech Event)"
        ]
      },
      "1894": {
        "variance_explained": 2.0,
        "description": "A slight rise (+0.2%) driven by the public obsession with Lilienthal's successful glides. He proved that a human could fly (glide) repeatedly and safely. This shifted the cultural perception from 'impossible' to 'inevitable.' The military implications were immediately seized upon by futurists: if a man can glide, he can carry a bomb. The 'death from above' narrative began to detach from pure fantasy.",
        "key_manifestations": [
          "Lilienthal's 'Normalsegelapparat' glides (Event)",
          "Octave Chanute's Progress in Flying Machines (Book - synthesizing knowledge)",
          "A City of Gold by Mark Melford (Play - featuring airships)",
          "Maxim's biplane lifts off rails (Tech Event - proof of lift)"
        ]
      },
      "1895": {
        "variance_explained": 2.2,
        "description": "Stasis (+0.2%). The focus shifted momentarily to the Zeppelin concept. Count Zeppelin patented his rigid airship design. This was a critical catalyst: the rigid frame promised the payload capacity for bombs, not just eyes. The 'strategic' element was born here\u2014the idea of a ship of the air that could travel long distances. It was the dreadnought of the sky in embryonic form.",
        "key_manifestations": [
          "Count Zeppelin patents the rigid airship (Legal/Tech Event)",
          "The Crack of Doom by Robert Cromie (Novel - atomic/aerial destruction)",
          "Lilienthal's biplane glider (Tech Event)",
          "Hearst press speculation on air wars (Media Event)"
        ]
      },
      "1896": {
        "variance_explained": 2.5,
        "description": "The death of Otto Lilienthal ('Sacrifices must be made') acted as a martyr-catalyst (+0.3%). It focused global engineering attention on the problem of stability. Langley's unmanned *Aerodrome No. 5* flew nearly a mile over the Potomac. The delta was driven by the tangible proof of sustained powered flight (unmanned). The military began to fund these experiments, sensing that the 'air age' was imminent.",
        "key_manifestations": [
          "Death of Otto Lilienthal (Event)",
          "Flight of Langley's Aerodrome No. 5 (Tech Event)",
          "The Final War by Louis Tracy (Novel - air power deciding global conflict)",
          "Chanute's glider experiments on Lake Michigan (Scientific Event)"
        ]
      },
      "1897": {
        "variance_explained": 3.0,
        "description": "The 'Mystery Airship' wave in the United States caused a spike (+0.5%). Thousands reported seeing airships; while mass hysteria, it revealed the deep-seated cultural expectation of aerial technology. The 'Panic' element entered the cluster: the sky was no longer a neutral void but a potential vector for invasion. The Schwarz metal airship flew (and crashed), proving metal hulls were possible.",
        "key_manifestations": [
          "Mystery Airship sightings (Cultural Phenomenon)",
          "Flight of the Schwarz metal airship (Tech Event)",
          "The War of the Worlds serialized (Alien cylinder as ultimate air drop)",
          "Ader's Avion III test (Tech Event - claimed flight)"
        ]
      },
      "1898": {
        "variance_explained": 3.2,
        "description": "Stasis (+0.2%). The focus was on the Spanish-American War (Cluster 1), where observation balloons were used effectively but were vulnerable. This tactical limitation highlighted the need for speed and maneuverability. The displacing force was the continued failure of full-scale powered flight attempts, keeping the cluster in the 'experimental' box. However, the cultural variance remained high due to Wells' *War of the Worlds*, which depicted the Black Smoke being dispensed from flying machines\u2014a prototype of chemical air warfare.",
        "key_manifestations": [
          "Observation balloons at San Juan Hill (Event)",
          "The War of the Worlds published as book (Cultural Event)",
          "Santos-Dumont's early airship flights (Tech Event)",
          "Formation of the Aero Club of France (Institutional Event)"
        ]
      },
      "1899": {
        "variance_explained": 3.5,
        "description": "The First Hague Convention explicitly prohibited 'the discharge of projectiles and explosives from balloons' for five years (+0.3%). This legal prohibition paradoxically validated the concept. You don't ban what isn't possible or dangerous. The diplomats recognized the 'strategic' potential of bombing cities before the engineers had even perfected the plane. This year marks the formal recognition of the cluster by international law.",
        "key_manifestations": [
          "Hague Convention Declaration IV, 1 (Legal Event)",
          "Santos-Dumont flies around Eiffel Tower (Event - visibility of air power)",
          "When the Sleeper Wakes by H.G. Wells (Novel - aerial combat)",
          "Wright Brothers begin kite experiments (Tech Event)"
        ]
      },
      "1900": {
        "variance_explained": 4.0,
        "description": "The flight of Zeppelin LZ 1 was the major catalyst (+0.5%). A 420-foot giant flying over Lake Constance. It was a leviathan. Unlike the fragile gliders, this looked like a warship. The German military immediately took interest. The variance shift here represents the birth of the 'strategic bomber' concept in the form of the dirigible\u2014a platform capable of carrying tons of payload to a distant target.",
        "key_manifestations": [
          "First flight of Zeppelin LZ 1 (Tech Event)",
          "The First Men in the Moon by H.G. Wells (Novel - gravity manipulation)",
          "Wright Brothers' gliders at Kitty Hawk (Scientific Event)",
          "Hume's 'The Year of the Comet' (Story - aerial invasion)"
        ]
      },
      "1901": {
        "variance_explained": 4.2,
        "description": "Santos-Dumont won the Deutsch de la Meurthe prize (+0.2%), proving dirigibles could be steered precisely. The military implication was clear: if you can steer to the Eiffel Tower, you can steer to the War Office. The Wright Brothers struggled with lift data, creating a momentary technological lull (displacing force), but the airship dominance kept the cluster rising.",
        "key_manifestations": [
          "Santos-Dumont rounds the Eiffel Tower (Event)",
          "Gustave Whitehead's claimed flight (Historical footnote/controversy)",
          "The Master of the World by Jules Verne (Novel - heavier than air machine)",
          "Wilbur Wright's speech to Western Society of Engineers (Scientific Event)"
        ]
      },
      "1902": {
        "variance_explained": 4.5,
        "description": "The Wrights perfected the glider and the wind tunnel (+0.3%). The solution to the control problem (3-axis control) was found. Culturally, the anticipation was palpable. The 'Air Age' was arriving. The British War Office remained skeptical, but the theoretical literature on 'aerial navies' proliferated. The variance is driven by the tightening convergence of capability and intent.",
        "key_manifestations": [
          "Wright Glider 1902 experiments (Tech Event)",
          "The Lord of the Sea by M.P. Shiel (Novel - tech dominance)",
          "Langley's aerodrome preps (Tech Event)",
          "Kropotkin's articles on air navigation (Intellectual Event)"
        ]
      },
      "1903": {
        "variance_explained": 6.0,
        "description": "The Singularity. The Wright Flyer flew (+1.5%). While the immediate reaction was muted (secrecy/skepticism), the reality of heavier-than-air flight was established. The catalyst was the engine. The displacing force was the fragility; it could carry a man, not a bomb. However, the *idea* of the borderless world was born. If you can fly over a fence, the fence is meaningless.",
        "key_manifestations": [
          "Wright Brothers' First Flight (Tech Event)",
          "Failure of Langley's Aerodrome (Event - public humiliation)",
          "Tsiolkovsky's 'Exploration of Outer Space by Means of Rocket Devices' (Scientific Event)",
          "The Riddle of the Sands (Novel - contrast: invasion by sea vs air)"
        ]
      },
      "1904": {
        "variance_explained": 6.2,
        "description": "Stasis (+0.2%). The Wrights flew circles at Huffman Prairie, perfecting the practical airplane. The world largely ignored them. The Russo-Japanese war used balloons, reinforcing the 'observation' paradigm. The variance growth is latent; the technology was ahead of the culture. The conceptual leap to 'strategic projection' was stalled by the lack of range.",
        "key_manifestations": [
          "Wright Flyer II flights (Tech Event)",
          "War in the Air by H.G. Wells (Writing begins - anticipating the shift)",
          "Use of balloons at Port Arthur (Event)",
          "St. Louis World's Fair aeronautic contests (Cultural Event)"
        ]
      },
      "1905": {
        "variance_explained": 6.5,
        "description": "The Wright Flyer III flew for 24 miles (+0.3%). The airplane was now a practical vehicle, not a hopper. The catalyst was duration. 39 minutes in the air meant you could travel between cities. Military attach\u00e9s began to sniff around. The cluster began to split: Airships for 'strategic' bombing (size/range), Airplanes for 'tactical' scouting (speed).",
        "key_manifestations": [
          "Wright Flyer III flight (Tech Event)",
          "Foundation of the FAI (Federation Aeronautique Internationale) (Institutional Event)",
          "Report by French attach\u00e9 regarding Wrights (Intellectual Event)",
          "With the Night Mail by Kipling (Story - normalizing air travel)"
        ]
      },
      "1906": {
        "variance_explained": 7.0,
        "description": "Santos-Dumont flew the *14-bis* in public in Paris (+0.5%). Europe woke up. The 'Wright secrecy' was bypassed. The sight of a machine rising from the ground in front of a crowd ignited the 'Air Fever.' The catalyst was visibility. The press declared 'Man Conquers Air.' The military implication was immediate: 'The insularity of Britain is no more' (Lord Northcliffe).",
        "key_manifestations": [
          "Flight of the 14-bis (Tech Event)",
          "Lord Northcliffe's 'Britain is no longer an island' statement (Media Event)",
          "Zeppelin LZ 3 success (Tech Event)",
          "Lieutenant Selfridge assigned to aeronautical division (US Military Event)"
        ]
      },
      "1907": {
        "variance_explained": 7.5,
        "description": "The US Army Signal Corps established an Aeronautical Division (+0.5%). The first institutional formalization of military air power. They issued Specification 486 for a 'Heavier-than-air Flying Machine.' The catalyst was procurement. The government was buying. In Europe, the Zeppelin program received state funding after a crash, driven by public donation\u2014the 'Zeppelin Spende'\u2014showing the intense nationalistic pride attached to the 'strategic' airship.",
        "key_manifestations": [
          "Establishment of Aeronautical Division, US Signal Corps (Institutional Event)",
          "Zeppelin Spende (Cultural Event - public funding of air power)",
          "First helicopter flight by Cornu (Tech Event - expanding the envelope)",
          "Hague Convention renewal (Diplomatic Event - still trying to ban bombing)"
        ]
      },
      "1908": {
        "variance_explained": 9.0,
        "description": "A massive inflection point (+1.5%). The Wrights flew in France (Le Mans) and the US (Fort Myer). The skepticism evaporated. They demonstrated total control. Simultaneously, H.G. Wells published *The War in the Air*, explicitly predicting that air power would lead to the destruction of cities and the collapse of the financial order. He coined the logic of 'strategic bombing': you don't fight the army, you smash the civilization. The cluster jumped from engineering to apocalypse.",
        "key_manifestations": [
          "The War in the Air by H.G. Wells (Novel - defining the cluster)",
          "Wilbur Wright at Le Mans (Event)",
          "Zeppelin LZ 4 disaster (Event - national mourning/resolve)",
          "Selfridge killed in Wright crash (Event - first air casualty, blooding the tech)"
        ]
      },
      "1909": {
        "variance_explained": 10.5,
        "description": "Louis Bl\u00e9riot crossed the English Channel (+1.5%). A psychological earthquake for the British Empire. The 'moat' was breached. The catalyst was the erasure of geography. If a Frenchman could fly across, a German could fly across with a bomb. This triggered the 'Phantom Airship' scare in the UK. The concept of 'Home Defense' had to be rewritten to include the sky.",
        "key_manifestations": [
          "Bl\u00e9riot crosses the Channel (Event)",
          "Rheims Air Meet (Event - showcasing speed/utility)",
          "Phantom Airship scare in UK (Cultural Phenomenon)",
          "Douhet writes early articles on air power (Intellectual Event)"
        ]
      },
      "1910": {
        "variance_explained": 11.0,
        "description": "The first bomb was dropped from an airplane (Willow Run experiment by Glenn Curtiss) (+0.5%). It was a stunt, but a prophetic one. The cluster solidified around 'aerial policing.' The idea that air power was a cheap way to police colonies began to form. The Zeppelin passenger service DELAG opened, normalizing air travel, but the ships were actually military reserves. The variance grew as the 'novelty' faded and the 'weaponization' began.",
        "key_manifestations": [
          "Curtiss bombing experiment (Tech Event)",
          "DELAG formed (Commercial Event)",
          "Picardie Maneuvers (Event - French army uses planes for recon)",
          "The Aeroplane in War by Claude Grahame-White (Book)"
        ]
      },
      "1911": {
        "variance_explained": 12.5,
        "description": "The Italian pilot Giulio Gavotti dropped four grenades on Ottoman troops in Libya (+1.5%). The theoretical became kinetic. This was the first combat use of the airplane for bombardment. The catalyst was the Italo-Turkish War. It proved that planes could strike with impunity from above. The reaction was mixed: horror at the 'unsportsmanlike' conduct, and fascination with the asymmetry. The 'moral effect' of bombing was immediately noted.",
        "key_manifestations": [
          "First aerial bombing in Libya (Event)",
          "First reconnaissance flight in combat (Event)",
          "McCurdy transmits wireless from plane (Tech Event - C3I)",
          "Introduction of the Vickers E.F.B.1 (Tech Event - 'Gunbus' prototype)"
        ]
      },
      "1912": {
        "variance_explained": 13.5,
        "description": "The Royal Flying Corps was founded (+1.0%). The institutionalization of air power was now global. The debate raged: was the plane a scout or a weapon? The 'Syndicalist' threat in the UK led to fears of internal bombing. The delta was driven by the integration of aircraft into the army structure, though still subservient. The idea of an 'Independent Air Force' was heretical but gestating in the minds of Trenchard and Sykes.",
        "key_manifestations": [
          "Royal Flying Corps established (Institutional Event)",
          "Avro 500 flight (Tech Event)",
          "First use of air-dropped torpedo (Tech Event)",
          "Death of Wilbur Wright (Event)"
        ]
      },
      "1913": {
        "variance_explained": 14.5,
        "description": "The Sikorsky *Ilya Muromets* flew in Russia (+1.0%). The first four-engine heavy bomber (disguised as a transport). It proved that heavy lift and long range were possible. This was the hardware for *strategic* projection. In Germany, the Zeppelin fleet expanded. The variance reflects the 'Arms Race' entering the air. Every power now had an air service.",
        "key_manifestations": [
          "First flight of Sikorsky Ilya Muromets (Tech Event)",
          "Roland Garros crosses the Mediterranean (Event - range extension)",
          "Aerial Navigation Act 1913 (Legal Event - sovereignty of airspace)",
          "Zang Tumb Tumb by Marinetti (Poetry - glorifying aerial war)"
        ]
      },
      "1914": {
        "variance_explained": 20.0,
        "description": "War (+5.5%). The immediate value of air power was reconnaissance (saving the BEF at Mons, the Miracle on the Marne). However, the *strategic* element appeared instantly: a German Taube dropped bombs on Paris in August. The psychological impact was out of proportion to the damage. The 'Home Front' was violated. The Royal Naval Air Service (RNAS) launched a strategic raid on Zeppelin sheds in Cologne/Dusseldorf\u2014the first attempt to destroy the enemy's air capability at the source.",
        "key_manifestations": [
          "RNAS raid on Cuxhaven/Dusseldorf (Event - first strategic strike)",
          "Taube bombs Paris (Event - psychological terror)",
          "Reconnaissance at the Marne (Event - operational pivot)",
          "Formation of the 'Lafayette Escadrille' concept (Cultural Event)"
        ]
      },
      "1915": {
        "variance_explained": 25.0,
        "description": "The Zeppelin Raids on London began (+5.0%). The 'Baby Killers.' This was the true arrival of Strategic Air Projection. The target was the *population*. The goal was panic and the diversion of resources from the front. The variance spiked because the war had come home. The Fokker Scourge introduced the synchronized gear\u2014the fighter plane\u2014to deny the enemy the air. The 'air superiority' battle began.",
        "key_manifestations": [
          "First Zeppelin raid on London (Event)",
          "Fokker Eindecker introduction (Tech Event)",
          "The Rainbow by D.H. Lawrence (Novel - mentions Zeppelin fear)",
          "Development of the concept of 'Ace' (Cultural Event)"
        ]
      },
      "1916": {
        "variance_explained": 28.0,
        "description": "The Somme air war (+3.0%). The Royal Flying Corps gained and lost air superiority. But the strategic shift occurred with the transition from Zeppelins (vulnerable) to Gotha bombers (planes). The catalyst was the realization that the airship was a dead end. The plane could carry the bomb. The 'Blackburne' report in the UK analyzed the morale effect of bombing, concluding it was significant. The 'fighter' became a distinct class to protect the 'bomber.'",
        "key_manifestations": [
          "Introduction of the Gotha G.IV (Tech Event)",
          "Battle of the Somme air war (Event)",
          "Formation of the 'Jastas' (Event)",
          "Robinson shoots down Zeppelin over London (Event - end of airship invincibility)"
        ]
      },
      "1917": {
        "variance_explained": 35.0,
        "description": "The Gotha Raids on London (+7.0%). In broad daylight, bombers hit the capital. It caused a panic that the Zeppelins never did. The 'Smuts Report' was commissioned, recommending the creation of a separate Air Force independent of the Army and Navy. This is the foundational document of this cluster. It argued that 'Air power can be used as an independent means of war operations.' The variance reflects the bureaucratic victory of the 'Air' as a separate domain.",
        "key_manifestations": [
          "The Smuts Report (Strategic Document)",
          "Gotha daylight raids on London (Event)",
          "Caproni bombers in Italy (Tech Event - Douhet's inspiration)",
          "Yeats' 'An Irish Airman Foresees His Death' (Poetry)"
        ]
      },
      "1918": {
        "variance_explained": 40.0,
        "description": "The Royal Air Force (RAF) was formed (+5.0%). The world's first independent air force. Trenchard established the 'Independent Air Force' to bomb German industry. They were preparing for massive raids on Berlin in 1919 (Plan 1919). The war ended before the 'strategic' campaign could fully mature, leaving a dangerous myth: 'We *could* have won it from the air.' This counter-factual drove the interwar doctrine.",
        "key_manifestations": [
          "Formation of the RAF (Institutional Event)",
          "Handley Page V/1500 (Tech Event - the Berlin bomber)",
          "Death of Manfred von Richthofen (Event)",
          "Establishment of the Independent Air Force (Event)"
        ]
      },
      "1919": {
        "variance_explained": 45.0,
        "description": "The Alcock and Brown transatlantic flight (+5.0%). The ocean was crossed. If a Vickers Vimy could fly to America, America could be bombed. The 'Air Power' theorists (Douhet) began to publish. The displacing force of demobilization was countered by the 'Air Control' doctrine in the Middle East\u2014using planes to police the empire (Somaliland, Iraq) because it was cheaper than troops. The 'policing' aspect normalized the bombing of villages.",
        "key_manifestations": [
          "Alcock and Brown flight (Tech Event)",
          "Somaliland Campaign (Event - RAF defeats Mullah with air power)",
          "Convention Relating to the Regulation of Aerial Navigation (Legal Event)",
          "Bauhaus founded (Cultural Event - modernism matching the air age)"
        ]
      },
      "1920": {
        "variance_explained": 46.0,
        "description": "Stasis (+1.0%). The 'Air Control' model was applied to Iraq during the revolt. It was brutal and effective. It proved that air power could substitute for boots on the ground. The US Army Air Service struggled for independence. The variance was intellectual: the 'Bomber Lobby' was forming. The 'Knight of the Air' myth began to fade into the 'Technocrat of Destruction.'",
        "key_manifestations": [
          "Iraqi Revolt put down by RAF (Event)",
          "Liddell Hart's early writings (Intellectual Event)",
          "First flight of the de Havilland DH.9A (Tech Event - colonial policing workhorse)",
          "R.U.R. (Play - robots, akin to the mechanical nature of air war)"
        ]
      },
      "1921": {
        "variance_explained": 55.0,
        "description": "Billy Mitchell sank the *Ostfriesland* (+9.0%). A massive catalyst. He proved a plane could sink a battleship. The naval hierarchy was shaken. This was the 'Material Warfare' cluster colliding with 'Air Projection.' It validated the claim that the surface fleet was obsolete. Giulio Douhet published *The Command of the Air*, the bible of strategic bombing. His thesis: 'The bomber will always get through,' and the only defense is offense.",
        "key_manifestations": [
          "Sinking of the Ostfriesland (Event)",
          "Douhet's The Command of the Air published (Book)",
          "First inflight refueling (Tech Event - range extension)",
          "Cairo Conference (Political Event - cementing air control)"
        ]
      },
      "1922": {
        "variance_explained": 52.0,
        "description": "A dip in public variance (-3.0%) as the Washington Naval Treaty limited carriers but didn't ban them. The focus shifted to 'Air Policing' as a budget measure. The 'Geddes Axe' in the UK saved the RAF only because it was cheaper than the Army. The cluster became an economic argument: Air Power is 'cost-effective' violence.",
        "key_manifestations": [
          "Washington Naval Treaty (Legal Event - recognizing aircraft carriers)",
          "First autogyro flight (Tech Event)",
          "T.E. Lawrence joins the RAF (Cultural Event)",
          "Mussolini's usage of aircraft for propaganda (Event)"
        ]
      },
      "1923": {
        "variance_explained": 54.0,
        "description": "The French occupation of the Ruhr heightened tensions (+2.0%). Britain realized it was vulnerable to French bombers. The 'Steel-Bartholomew' plan for the air defense of Great Britain was initiated. The 'Home Defence Air Force' was created. The variance reflects the return of the 'invasion fear.' Air maneuvers began to simulate the destruction of London.",
        "key_manifestations": [
          "Steel-Bartholomew Plan (Strategic Event)",
          "Development of the sound locator (Tech Event - primitive radar)",
          "First nonstop transcontinental flight (US) (Event)",
          "Le Corbusier's 'Aircraft' (Book - celebrating the aesthetic)"
        ]
      },
      "1924": {
        "variance_explained": 55.0,
        "description": "Stasis (+1.0%). The first round-the-world flight by the US Army Air Service. It demonstrated global reach, albeit slowly. The 'Imperial Airship Scheme' in the UK revived the dirigible for imperial connectivity. The struggle was between the 'airship' (range) and the 'airplane' (speed). The cluster was suspended between these two technologies.",
        "key_manifestations": [
          "First aerial circumnavigation (Event)",
          "Imperial Airship Scheme initiated (Political Event)",
          "Billy Mitchell's 'Winged Defense' (Book)",
          "Magic Mountain (Novel - time/space distortion)"
        ]
      },
      "1925": {
        "variance_explained": 58.0,
        "description": "The Court Martial of Billy Mitchell (+3.0%). He accused the War Department of 'incompetency, criminal negligence, and almost treasonable administration.' He was martyred, but his ideas on strategic air power went mainstream. The 'Geneva Protocol' banned gas, but the fear of 'gas from the air' remained the primary nightmare of the civilian population. The 'Knockout Blow' theory became dogma.",
        "key_manifestations": [
          "Court Martial of Billy Mitchell (Event)",
          "Mrs. Dalloway (Novel - Septimus Smith's shell shock/sky writing)",
          "Locarno Treaties (Diplomatic Event)",
          "Development of the Norden Bombsight begins (Tech Event - precision myth)"
        ]
      },
      "1926": {
        "variance_explained": 59.0,
        "description": "Formation of Lufthansa (+1.0%). The 'Shadow Luftwaffe.' Germany, forbidden an air force, built a massive civil aviation sector as a training ground and industrial base. The 'airmindedness' of the German populace was cultivated through glider clubs. The variance here is the *covert* growth of strategic potential.",
        "key_manifestations": [
          "Formation of Lufthansa (Institutional Event)",
          "Goddard's liquid fuel rocket (Tech Event - future delivery)",
          "Metropolis (Film - the vertical city)",
          "Amundsen flies over North Pole (Event)"
        ]
      },
      "1927": {
        "variance_explained": 65.0,
        "description": "Lindbergh's Flight (+6.0%). A massive cultural catalyst. It made the air 'accessible.' It collapsed the Atlantic. If he could fly to Paris, a bomber could fly to New York (eventually). It triggered the 'Lindbergh Boom' in aviation investment. The 'technological sublime' of the air reached its peak.",
        "key_manifestations": [
          "Spirit of St. Louis flight (Event)",
          "Wings (Film - Academy Award winner, air combat)",
          "Establishment of the Pan Am (Commercial Event)",
          "Heidegger's Being and Time (Philosophy - Dasein/spatiality)"
        ]
      },
      "1928": {
        "variance_explained": 66.0,
        "description": "Stasis (+1.0%). The focus on 'Air Defense' grew. Trenchard in the UK argued that defense was impossible, so the only deterrent was a massive bomber force (counter-value targeting). This is the embryonic logic of Mutually Assured Destruction. The 'air maneuvers' over London 'proved' the bombers would get through.",
        "key_manifestations": [
          "Air Defense of Great Britain exercises (Event)",
          "Kingsford Smith crosses the Pacific (Event)",
          "Graf Zeppelin enters service (Tech Event)",
          "Orlando by Virginia Woolf (Novel)"
        ]
      },
      "1929": {
        "variance_explained": 64.0,
        "description": "A dip (-2.0%) as the Depression hit budgets. However, the Geneva Convention on POWs included airmen, formalizing their status. The 'Dornier Do X' flew\u2014a massive flying boat, a 'ship of the air.' It was a technological marvel that reinforced the 'giant bomber' concept. The displacing force was economic, but the doctrine remained: strike the enemy economy.",
        "key_manifestations": [
          "First flight of Dornier Do X (Tech Event)",
          "Geneva Convention 1929 (Legal Event)",
          "Little Caesar (Film)",
          "Warsaw Convention (Legal Event - commercial air law)"
        ]
      },
      "1930": {
        "variance_explained": 67.0,
        "description": "Variance rose (+3.0%). The R101 disaster ended the British airship dream. This was a critical catalyst: it forced the focus solely onto the *airplane* (bomber). The heavy bomber was now the only vehicle for strategic projection. In the US, the 'Boeing Monomail' introduced all-metal construction and retractable gear\u2014the prototype for the modern bomber.",
        "key_manifestations": [
          "R101 Disaster (Event)",
          "Boeing Monomail flight (Tech Event)",
          "Hell's Angels (Film)",
          "Douhet's death (Event - his ideas live on)"
        ]
      },
      "1931": {
        "variance_explained": 68.0,
        "description": "The Boeing B-9 bomber flew (+1.0%). It was faster than existing fighters. This validated the 'Bomber will always get through' theory technologically. In Manchuria, the Japanese used air power to support the invasion, bombing civilians/bandits. The cluster was moving from theory to hardware.",
        "key_manifestations": [
          "First flight of Boeing B-9 (Tech Event)",
          "Japanese bombing in Manchuria (Event)",
          "Post/Gatty circumnavigation record (Event)",
          "Saint-Exupery's Night Flight (Book - romantic pilot ethos)"
        ]
      },
      "1932": {
        "variance_explained": 70.0,
        "description": "Stanley Baldwin's speech: 'The Bomber Will Always Get Through' (+2.0%). This admitted political defeat in the face of the cluster. It told the public: there is no defense, only retaliation. It created a 'psychology of fear' that underpinned appeasement. The Martin B-10 flew\u2014the first true modern bomber, rendering all air forces obsolete overnight.",
        "key_manifestations": [
          "Baldwin's 'The Bomber Will Always Get Through' speech (Political Event)",
          "First flight of Martin B-10 (Tech Event)",
          "Aldous Huxley's Brave New World (Novel - alpha pluses and helicopters)",
          "Geneva Disarmament Conference fails to ban bombing (Diplomatic Event)"
        ]
      },
      "1933": {
        "variance_explained": 75.0,
        "description": "Hitler creates the Reichsluftfahrtministerium (RLM) (+5.0%). The Luftwaffe is secretly born. The 'Ural Bomber' program is discussed (long range strategic strike). In the US, the Boeing 247 (transport) revolutionized design, which would lead to the B-17. The shape of Things to Come (Wells) predicted the war would begin with a surprise air attack.",
        "key_manifestations": [
          "Creation of the RLM (Institutional Event)",
          "The Shape of Things to Come (Book/Film)",
          "First flight of Boeing 247 (Tech Event)",
          "Wiley Post's solo circumnavigation (Event)"
        ]
      },
      "1934": {
        "variance_explained": 78.0,
        "description": "The B-17 Flying Fortress design began (+3.0%). The name says it all: a flying fortress. It was designed to project power across oceans. In the UK, the 'Daventry Experiment' proved Radar worked. This was the hidden 'displacing force'\u2014the antidote to the bomber was found, but nobody knew it yet. The cluster was entering the 'Dialectic of Offense and Defense.'",
        "key_manifestations": [
          "B-17 prototype request (Tech Event)",
          "Daventry Experiment (Radar) (Scientific Event)",
          "Tender is the Night (Novel)",
          "Rotorua airway disaster (Event)"
        ]
      },
      "1935": {
        "variance_explained": 82.0,
        "description": "The Luftwaffe was unveiled (+4.0%). The B-17 prototype flew. It was faster and flew higher than anything else. The 'Strategic' capability was now real. Italy used mustard gas from the air in Abyssinia. This confirmed the worst fears of the 1920s: air power was a tool of extermination. The variance reflects the realization that the 'next war' would start with the destruction of the capital.",
        "key_manifestations": [
          "Unveiling of the Luftwaffe (Event)",
          "First flight of B-17 Model 299 (Tech Event)",
          "Italian gas bombing of Abyssinia (Event)",
          "Development of the Spitfire/Hurricane (Tech Event - the response)"
        ]
      },
      "1936": {
        "variance_explained": 85.0,
        "description": "The Spanish Civil War (+3.0%). The Luftwaffe's Condor Legion. Airlift of Franco's troops from Africa (the first major strategic airlift). It proved air power could move armies. The focus shifted from 'strategic bombing' to 'tactical support' (Blitzkrieg) in German doctrine, a fatal divergence from the Allied focus on heavy bombers. The Kuralyov rocket center founded in USSR.",
        "key_manifestations": [
          "Airlift of Army of Africa (Event)",
          "First flight of the Spitfire (Tech Event)",
          "Things to Come (Film - visualizing the air war)",
          "Formation of Bomber Command (UK) (Institutional Event)"
        ]
      },
      "1937": {
        "variance_explained": 90.0,
        "description": "Guernica (+5.0%). The destruction of a city by air. It became the global symbol of the cluster. Picasso's painting immortalized the horror. It proved the 'moral effect' theory: it didn't force surrender, it caused outrage. In Japan, the strategic bombing of Chinese cities (Nanjing/Shanghai) began. The 'Knockout Blow' was being rehearsed.",
        "key_manifestations": [
          "Bombing of Guernica (Event)",
          "Picasso's Guernica (Art)",
          "Japanese bombing of Nanjing (Event)",
          "Whittle runs first jet engine (Tech Event - the next leap)"
        ]
      },
      "1938": {
        "variance_explained": 92.0,
        "description": "The Munich Crisis was decided by Air Power (+2.0%). Chamberlain flew to Munich (symbolic submission to the air). The fear of the Luftwaffe leveling London forced the capitulation. It was a victory of 'Air Terror' without dropping a bomb. Orson Welles' *War of the Worlds* broadcast showed how primed the US population was for 'invasion from the sky.'",
        "key_manifestations": [
          "Munich Agreement (influenced by air estimates)",
          "War of the Worlds broadcast (Cultural Event)",
          "First flight of the B-23 Dragon (Tech Event)",
          "Introduction of the flak 88 (Tech Event)"
        ]
      },
      "1939": {
        "variance_explained": 95.0,
        "description": "Warsaw Bombing (+3.0%). The war began with air strikes. The Stuka became the siren of terror. The realization that 'The Bomber will always get through' was tested. The British withheld strategic bombing initially (fearing retaliation), but the cluster was fully active. The 'Phoney War' was an air war of leaflet dropping.",
        "key_manifestations": [
          "Bombing of Warsaw (Event)",
          "Heinkel He 178 first jet flight (Tech Event)",
          "Start of the Commonwealth Air Training Plan (Logistical Event)",
          "Saint-Exupery's Wind, Sand and Stars (Book)"
        ]
      },
      "1940": {
        "variance_explained": 98.0,
        "description": "The Battle of Britain (+3.0%). The first battle in history decided entirely in the air. The 'Dowding System' (Radar + C3I) defeated the Luftwaffe. It disproved the 'Bomber will always get through' dogma *by day*. The Blitz (night bombing) proved the bomber *could* get through by night, but that civilian morale would not crack. The cluster shifted: Precision daylight bombing vs Area night bombing.",
        "key_manifestations": [
          "Battle of Britain (Event)",
          "The Blitz (Event)",
          "First flight of the P-51 Mustang (Tech Event)",
          "Churchill's 'The Few' speech (Rhetoric)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "Pearl Harbor (+2.0%). Carrier aviation projected power 3,000 miles. It ended the battleship era. In Europe, the RAF 'Butt Report' revealed that only 1/3 of bombers got within 5 miles of the target. This failure forced the shift to 'Area Bombing' (dehousing). The decision was made: if we can't hit the factory, we hit the city. The Avro Lancaster flew.",
        "key_manifestations": [
          "Attack on Pearl Harbor (Event)",
          "Butt Report (Strategic Document)",
          "First flight of Avro Lancaster (Tech Event)",
          "Sinking of Prince of Wales/Repulse by air (Event)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "The Thousand Bomber Raid on Cologne (+-0% Saturation). Harris sent 1,000 planes to destroy a city. It was propaganda and proof of concept. The US 8th Air Force arrived in England, committed to 'daylight precision bombing.' The two doctrines (Area vs Precision) ran in parallel. The Dolittle Raid struck Tokyo\u2014psychological projection.",
        "key_manifestations": [
          "Operation Millennium (Cologne Raid) (Event)",
          "Doolittle Raid (Event)",
          "First flight of B-29 Superfortress (Tech Event - global reach)",
          "Disney's Victory Through Air Power (Film)"
        ]
      },
      "1943": {
        "variance_explained": 100.0,
        "description": "Operation Gomorrah (Hamburg) (+-0%). The Firestorm. The perfection of the destruction technique (HE + Incendiary). 40,000 dead in a night. It was the 'technological sublime' as horror. The Schweinfurt raids showed the limits of unescorted bombers (horrific losses). The P-51 Mustang with drop tanks appeared\u2014the 'long range escort' that saved the concept of strategic bombing.",
        "key_manifestations": [
          "Bombing of Hamburg (Event)",
          "Schweinfurt\u2013Regensburg mission (Event)",
          "Introduction of P-51B with Merlin engine (Tech Event)",
          "Dam Busters Raid (Event - precision capability)"
        ]
      },
      "1944": {
        "variance_explained": 98.0,
        "description": "The 'Big Week' broke the Luftwaffe (-2.0% as air superiority was achieved, becoming routine). The V-1 and V-2 attacks on London began. This was the mutation of the cluster: the *unmanned* strategic bombardment. The robot bomb. It was the precursor to the ICBM. The B-29s began bombing Japan from the Marianas. The 'Jet Age' arrived with the Me 262, but too late.",
        "key_manifestations": [
          "V-1/V-2 attacks (Tech/Strategic Event)",
          "Introduction of Me 262 (Tech Event)",
          "Big Week (Event)",
          "Bombing of Tokyo begins (Event)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "Hiroshima and Nagasaki (+2.0% Shock). The ultimate expression of Strategic Air Projection. One plane, one city. The B-29 *Enola Gay*. The firebombing of Tokyo (Operation Meetinghouse) actually killed more, but the Atom Bomb changed the *nature* of the cluster. It meant total annihilation was now instant. The war ended not by invasion, but by air power (and Soviet entry). The prophecy of 1908 was fulfilled.",
        "key_manifestations": [
          "Atomic Bombing of Hiroshima/Nagasaki (Event)",
          "Operation Meetinghouse (Tokyo Firebombing) (Event)",
          "Vanivar Bush's 'As We May Think' (Essay - info processing for the new age)",
          "United States Strategic Bombing Survey commissioned (Intellectual Event)"
        ]
      },
      "1946": {
        "variance_explained": 90.0,
        "description": "Strategic Air Command (SAC) was formed (-10.0% kinetic, +Bureaucracy). The pivot to the nuclear deterrent. The B-36 Peacemaker was designed (intercontinental range). The cluster shifted from 'fighting' to 'deterring.' The 'Bikini Atoll' tests demonstrated the weapon to the world. The delta is negative due to peace, but the *potential* variance was infinite.",
        "key_manifestations": [
          "Formation of SAC (Institutional Event)",
          "Operation Crossroads (Bikini tests) (Event)",
          "First flight of B-36 Peacemaker (Tech Event)",
          "Hiroshima by John Hersey (Book)"
        ]
      },
      "1947": {
        "variance_explained": 85.0,
        "description": "Chuck Yeager broke the Sound Barrier (+-5.0%). Speed was the new frontier. The US Air Force became an independent service. The Flying Saucer craze (Roswell) began\u2014the cultural echo of 'fear from the sky' projected onto aliens. The cold war 'scramble' logic was established.",
        "key_manifestations": [
          "Yeager breaks sound barrier (Tech Event)",
          "US Air Force becomes independent (Institutional Event)",
          "Roswell Incident (Cultural Phenomenon)",
          "First flight of B-47 Stratojet (Tech Event - swept wing jet bomber)"
        ]
      },
      "1948": {
        "variance_explained": 80.0,
        "description": "The Berlin Airlift (-5.0%). Strategic Air Projection used for *life* (Coal/Food). It proved air power could sustain a city, not just destroy it. However, SAC moved B-29s to the UK as a 'bluff' deterrent. The cluster bifurcated: Logistics vs Nuclear Annihilation.",
        "key_manifestations": [
          "Berlin Airlift (Event)",
          "B-29 deployment to UK (Strategic Event)",
          "Design of the B-52 begins (Tech Event)",
          "1984 (Book - Airstrip One)"
        ]
      },
      "1949": {
        "variance_explained": 85.0,
        "description": "Soviet Bomb (+5.0%). The monopoly ended. 'Mutually Assured Destruction' (MAD) logic began to form. The US 'Revolt of the Admirals' failed; the Air Force and the Bomber were king. The B-52 Stratofortress design was finalized. The cluster was now the central pillar of global survival.",
        "key_manifestations": [
          "Soviet Nuclear Test (Event)",
          "Revolt of the Admirals (Political Event)",
          "First flight of the Comet (Commercial Jet Event)",
          "Formation of NATO (Strategic Event)"
        ]
      },
      "1950": {
        "variance_explained": 88.0,
        "description": "Korean War (+3.0%). Jet vs Jet combat (MiG Alley). The limits of strategic bombing were found: you can't bomb a peasant army (North Korea/China) into submission like an industrial state. The threat of using the A-bomb was discussed but rejected. The cluster hit the 'limited war' wall. However, the B-36 was operational, and the hydrogen bomb was in development.",
        "key_manifestations": [
          "MiG-15 vs F-86 Sabre combat (Event)",
          "Threat of nuclear use in Korea (Strategic Event)",
          "NSC-68 (Document - prioritizing air atomic capability)",
          "The Martian Chronicles by Bradbury (Book - escape from the ruined earth)"
        ]
      }
    }
  },
  "4_mahanian_naval_hegemony": {
    "name": "Mahanian Naval Hegemony (The Blue Water Command)",
    "description": "This eigencluster represents the geopolitical doctrine that national greatness and prosperity are strictly functions of sea power. Articulated by Alfred Thayer Mahan, it posits that control of maritime trade routes, backed by a decisive battle fleet of capital ships, determines history. It fueled the Anglo-German naval race, the rise of the US and Japanese navies, and the concept of the 'Fleet in Being.' The cluster traces the trajectory from the pre-dreadnought era, through the peak obsession with the Battleship, to its abrupt displacement by the Aircraft Carrier and the Submarine, eventually evolving into the post-war American 'imperium' of carrier strike groups.",
    "trajectory": {
      "1890": {
        "variance_explained": 12.0,
        "description": "The publication of Mahan's *The Influence of Sea Power upon History* acted as the foundational catalyst (+2.0%). It provided a unified field theory for imperialism: colonies need coaling stations, coaling stations need fleets, fleets need commerce. It was read by Kaiser Wilhelm II and Teddy Roosevelt, effectively programming the source code of the next 25 years of geopolitics. The 'Blue Water' school began to displace the 'Continental' school of strategy.",
        "key_manifestations": [
          "The Influence of Sea Power upon History by A.T. Mahan (Book)",
          "Naval Defence Act of 1889 (Lingering effect - the two-power standard)",
          "Heligoland-Zanzibar Treaty (Diplomatic Event - trading land for naval bases)",
          "Testing of the Brennan Torpedo (Tech Event - early asymmetric threat)"
        ]
      },
      "1891": {
        "variance_explained": 12.5,
        "description": "Stasis/Entrenchment (+0.5%). The 'Jeune \u00c9cole' (Young School) in France argued for torpedo boats over battleships, creating a dialectical tension within the cluster. However, the Mahanian view gained dominance in the US as the 'White Squadron' toured, shifting American focus from coastal defense to oceanic projection. The catalyst was the shifting trade balance; protection of merchant marine was becoming an existential obsession.",
        "key_manifestations": [
          "Formation of the Pan-German League (Political Event - demanding a fleet)",
          "Visit of the French Fleet to Kronstadt (Diplomatic Event - naval alliance)",
          "Launch of the cruiser New York (Tech Event)",
          "The Iron Pirate by Max Pemberton (Novel - gas-powered ironclad terror)"
        ]
      },
      "1892": {
        "variance_explained": 13.0,
        "description": "Variance rose (+0.5%) as the naval arms race logic took hold. The British 'Spencer Programme' authorized new battleships in response to French/Russian builds. The displacing force of 'torpedo panic' (fear that cheap boats could sink expensive ships) led to the invention of the 'Torpedo Boat Destroyer'\u2014a new class of ship that reinforced the capital ship's primacy by screening it.",
        "key_manifestations": [
          "Spencer Naval Programme (Strategic Event)",
          "Launch of HMS Royal Oak (Tech Event)",
          "Mahan publishes 'The Influence of Sea Power upon the French Revolution' (Book)",
          "Kipling's 'The Seven Seas' (Poetry - cultural ownership of the ocean)"
        ]
      },
      "1893": {
        "variance_explained": 14.0,
        "description": "The loss of HMS *Victoria* in a collision shocked the public (+1.0%), highlighting the fragility of these massive investments. Yet, the reaction was to build more and safer ships. The 'Naval Scare' of 1893 in Britain whipped up public demand for more tonnage. The cluster was becoming democratic; the battleship was a symbol of national virility that the public voted for.",
        "key_manifestations": [
          "Sinking of HMS Victoria (Event)",
          "Naval Scare of 1893 (Political Event)",
          "Launch of USS Olympia (Tech Event)",
          "The Great War of 189- (Novel - naval clash scenarios)"
        ]
      },
      "1894": {
        "variance_explained": 15.5,
        "description": "The Battle of the Yalu River (Sino-Japanese War) was a massive catalyst (+1.5%). It was the first fleet action involving steel warships. The victory of the Japanese fleet validated Mahan\u2019s thesis: the side with the better organized, more aggressive battle line won command of the sea. It proved that sea power could humiliate a continental giant (China).",
        "key_manifestations": [
          "Battle of the Yalu River (Event)",
          "Mahan publishes 'The Interest of America in Sea Power' (Essays)",
          "Launch of HMS Majestic (Tech Event - the archetype pre-dreadnought)",
          "Navy League of the United States founded (Institutional Event)"
        ]
      },
      "1895": {
        "variance_explained": 16.0,
        "description": "The opening of the Kiel Canal (+0.5%). A strategic geographic modification allowing the German fleet to toggle between Baltic and North Sea. It signaled Germany's serious intent to challenge British hegemony. The 'Venezuelan Crisis' saw the US invoke the Monroe Doctrine, backed implicitly by its rising naval power, forcing Britain to back down\u2014a silent victory for Mahanian pressure.",
        "key_manifestations": [
          "Opening of Kiel Canal (Event)",
          "Venezuelan Crisis (Diplomatic Event)",
          "Launch of the USS Kearsarge (Tech Event)",
          "Captains Courageous by Kipling (Novel - the sea as school of character)"
        ]
      },
      "1896": {
        "variance_explained": 17.0,
        "description": "Tirpitz began his ascent in Germany (+1.0%). He formulated the 'Risk Theory'\u2014building a fleet large enough to deter Britain. This was the weaponization of the cluster: building ships not to fight, but to force diplomatic concessions. In Britain, the 'Flying Squadron' was mobilized to warn off Germany after the Kruger Telegram, demonstrating 'Gunboat Diplomacy' at a grand scale.",
        "key_manifestations": [
          "Mobilization of the Flying Squadron (Event)",
          "Tirpitz becomes State Secretary of the Imperial Naval Office (Event)",
          "The Island of Doctor Moreau (Wells - isolation theme)",
          "Launch of the Fuji class battleships (Japan) (Tech Event)"
        ]
      },
      "1897": {
        "variance_explained": 18.5,
        "description": "The Diamond Jubilee Fleet Review (+1.5%). The apotheosis of the Pax Britannica. 165 warships in lines 30 miles long. It was the visual definition of the cluster. However, the invention of the steam turbine (Turbinia) at the same review signaled the obsolescence of the reciprocating engine. The 'Second Naval Law' in Germany passed, locking in a schedule of battleship construction.",
        "key_manifestations": [
          "Diamond Jubilee Fleet Review (Event)",
          "Turbinia demonstration (Tech Event)",
          "First German Naval Law passed (Political Event)",
          "Newbolt's 'Admirals All' (Poetry)"
        ]
      },
      "1898": {
        "variance_explained": 20.0,
        "description": "The Spanish-American War (+1.5%). Manila Bay and Santiago de Cuba. The US Navy annihilated the Spanish fleet with almost no losses. It was a laboratory experiment proving that superior tech and gunnery equaled total empire. The US acquired Philippines and Guam\u2014stepping stones across the Pacific. Mahan was vindicated; the US was now a global sea power.",
        "key_manifestations": [
          "Battle of Manila Bay (Event)",
          "Battle of Santiago de Cuba (Event)",
          "Fashoda Incident (Naval mobilization decisive)",
          "Jane's Fighting Ships first published (Cultural Event - public cataloging of power)"
        ]
      },
      "1899": {
        "variance_explained": 19.5,
        "description": "Stasis (-0.5%). The focus shifted to land wars (Boer War). However, the Second German Naval Law passed, doubling the size of the High Seas Fleet. This was the true declaration of the Anglo-German naval cold war. The 'Submarine' issue arose at the Hague Conference, but the great powers refused to ban it, sensing its asymmetric potential against hegemony.",
        "key_manifestations": [
          "Second German Naval Law (Event)",
          "First Hague Convention (Diplomatic Event)",
          "Launch of HMS London (Tech Event)",
          "Heart of Darkness (Novel - the river as the artery of empire)"
        ]
      },
      "1900": {
        "variance_explained": 21.0,
        "description": "The Boxer Rebellion saw the Allied Navies (Eight Nation Alliance) project power into China (+1.5%). The Taku Forts were bombarded. It demonstrated the 'policing' function of the cluster. The first Holland-class submarine was commissioned by the US Navy, introducing the 'assassin' of the cluster into the ecosystem.",
        "key_manifestations": [
          "Battle of Taku Forts (Event)",
          "Commissioning of USS Holland (Tech Event)",
          "Lord Jim (Novel - merchant marine ethos)",
          "Expansion of Japanese Naval Programme (Strategic Event)"
        ]
      },
      "1901": {
        "variance_explained": 22.0,
        "description": "Fisher became First Sea Lord (later, but influence starts now) (+1.0%). He began the ruthless modernization of the Royal Navy. The 'Two Power Standard' was under strain. The catalyst was the realization that the Mediterranean was no longer a British lake due to French/Italian builds. The cluster shifted from 'complacency' to 'urgent reform.'",
        "key_manifestations": [
          "Fisher's Mediterranean Fleet reforms (Event)",
          "The Riddle of the Sands (Writing begins - invasion by sea anxiety)",
          "Launch of the King Edward VII class (Tech Event)",
          "Death of Queen Victoria (Event - Kaiser attends as Admiral of the Fleet)"
        ]
      },
      "1902": {
        "variance_explained": 23.5,
        "description": "The Anglo-Japanese Alliance (+1.5%). Britain, admitting it could not control all oceans, subcontracted the Pacific to Japan. This was a massive shift in the cluster: hegemony was now shared. It allowed the Royal Navy to concentrate in the North Sea against Germany. The 'submarine' threat was acknowledged by Fisher ('It is not sporting, but it is war').",
        "key_manifestations": [
          "Anglo-Japanese Alliance (Diplomatic Event)",
          "Venezuela Blockade (Event - gunboat diplomacy limits)",
          "Establishment of the Naval War College in US (Institutional Event)",
          "Launch of the Deutschland class (Tech Event)"
        ]
      },
      "1903": {
        "variance_explained": 24.0,
        "description": "Stasis (+0.5%). The US acquired the Canal Zone in Panama. This was the ultimate Mahanian maneuver\u2014creating a choke point that unified the Atlantic and Pacific fleets. It doubled the strategic mobility of the US Navy. The 'Battle of the Atlantic' logic was pre-configured here.",
        "key_manifestations": [
          "Panama Canal Zone Treaty (Event)",
          "The Riddle of the Sands published (Book)",
          "Establishment of naval base at Scapa Flow (Strategic Event)",
          "London Declaration debates (Legal Event)"
        ]
      },
      "1904": {
        "variance_explained": 26.0,
        "description": "Russo-Japanese War (+2.0%). The Japanese surprise attack on Port Arthur (torpedoes) signaled the danger of the 'Fleet in Being' being caught at anchor. The Battle of the Yellow Sea demonstrated the lethality of long-range gunnery (beyond 10,000 yards). It made all existing armor schemes obsolete. The 'All Big Gun' concept was validated.",
        "key_manifestations": [
          "Attack on Port Arthur (Event)",
          "Battle of the Yellow Sea (Event)",
          "Fisher becomes First Sea Lord (Event)",
          "Nostromo by Conrad (Novel - material interests/silver/sea)"
        ]
      },
      "1905": {
        "variance_explained": 30.0,
        "description": "The Battle of Tsushima (+4.0%). The decisive battle. Togo 'crossed the T' of the Russian fleet and annihilated it. It was the Trafalgar of the steam age. It proved that sea power was the arbiter of modern war. The cluster reached a peak of validation. However, it also triggered the 'Dreadnought' revolution; Fisher realized that if Japan could do this with mixed armament, a single-caliber ship would be unstoppable.",
        "key_manifestations": [
          "Battle of Tsushima (Event)",
          "Keel laying of HMS Dreadnought (Tech Event)",
          "The Sea-Wolf (Novel)",
          "Mutiny on the Potemkin (Event - the fleet as political fragility)"
        ]
      },
      "1906": {
        "variance_explained": 35.0,
        "description": "Launch of HMS *Dreadnought* (+5.0%). It made every other battleship in the world obsolete, including Britain's own vast fleet. It reset the game to zero, giving Germany a chance to catch up. The 'Naval Race' went from linear to exponential. The variance is driven by the total obsession with 'Dreadnoughts' as the currency of national power. 'We want eight and we won't wait.'",
        "key_manifestations": [
          "Launch of HMS Dreadnought (Tech Event)",
          "German Third Naval Law (Event)",
          "The Mirror of the Sea by Conrad (Memoir)",
          "U-1 commissioned (Tech Event - the hidden counter-cluster)"
        ]
      },
      "1907": {
        "variance_explained": 36.5,
        "description": "The Great White Fleet tour began (+1.5%). Theodore Roosevelt sent 16 battleships around the world. A global lap of honor for Mahanian theory. It demonstrated American reach and signaled to Japan that the Pacific was contested. The Second Hague Conference failed to limit naval arms, proving the cluster was too vital to national egos to be regulated.",
        "key_manifestations": [
          "Great White Fleet departure (Event)",
          "Second Hague Conference failure (Diplomatic Event)",
          "Launch of SMS Nassau (German Dreadnought) (Tech Event)",
          "Invincible Class battlecruisers laid down (Tech Event - speed vs armor)"
        ]
      },
      "1908": {
        "variance_explained": 38.0,
        "description": "The Naval Scare in Britain (+1.5%). Intelligence suggested Germany was accelerating construction. The public panic ('The Germans are coming!') showed that the Navy was the psychological immune system of the Empire. The 'Battlecruiser' entered service\u2014fast, heavily armed, lightly armored. A fatal flaw in the cluster: sacrificing survivability for speed, assuming the offense would be dominant.",
        "key_manifestations": [
          "The War in the Air (Wells - notes the obsolescence of the fleet)",
          "Naval Scare (Political Event)",
          "Fisher/Beresford feud (Institutional Event)",
          "Launch of the USS North Dakota (Tech Event)"
        ]
      },
      "1909": {
        "variance_explained": 39.0,
        "description": "The Declaration of London (+1.0%). An attempt to define the laws of naval blockade. It highlighted that the true weapon of sea power was starvation (economic warfare), not just shelling. The 'People's Budget' in the UK raised taxes to pay for the dreadnoughts, linking social welfare directly to naval hegemony. The 'Blue Water' school was now eating the national budget.",
        "key_manifestations": [
          "Declaration of London (Legal Event)",
          "People's Budget crisis (Political Event)",
          "Bl\u00e9riot crosses channel (Tech Event - air challenging sea)",
          "Review of the Fleet at Spithead (Event)"
        ]
      },
      "1910": {
        "variance_explained": 40.0,
        "description": "Ely's flight off the USS *Birmingham* (+1.0%). A plane took off from a ship. A curiosity, but the seed of the cluster's destruction. The 'Super-Dreadnought' era began with the *Orion* class (13.5-inch guns). The ships were getting bigger, the guns larger, the ranges longer. The 'decisive battle' was expected to take place at 15,000 yards.",
        "key_manifestations": [
          "Eugene Ely flight off USS Birmingham (Tech Event)",
          "Launch of HMS Orion (Tech Event)",
          "The Great Illusion (Book - arguing war is economically futile, countering naval logic)",
          "Japanese annexation of Korea (Strategic Event - securing the flank)"
        ]
      },
      "1911": {
        "variance_explained": 42.0,
        "description": "Agadir Crisis (+2.0%). The arrival of the *Panther* triggered a war scare. The Royal Navy went to high alert. It proved that a single gunboat could spark a global conflict. Winston Churchill became First Lord of the Admiralty, bringing a restless energy to the cluster, switching the fuel from coal to oil. This strategic shift made the Navy dependent on Persian oil, expanding the definition of 'Sea Power' to include the Middle East.",
        "key_manifestations": [
          "Agadir Crisis (Event)",
          "Churchill becomes First Lord (Event)",
          "Decision to switch to oil fuel (Tech/Strategic Event)",
          "Ely lands on USS Pennsylvania (Tech Event)"
        ]
      },
      "1912": {
        "variance_explained": 44.0,
        "description": "Naval Agreement between France and Britain (+2.0%). The Royal Navy withdrew from the Mediterranean to focus on the North Sea; France guarded the Med. This concentrated the 'Grand Fleet' for the coming clash. The *Titanic* disaster served as a cultural memento mori for the 'unsinkable' steel leviathan, shaking faith in the technology of the cluster.",
        "key_manifestations": [
          "Anglo-French Naval Convention (Diplomatic Event)",
          "Sinking of the Titanic (Cultural Event)",
          "Launch of HMS Iron Duke (Tech Event)",
          "Fisher's 'Oil Commission' (Strategic Event)"
        ]
      },
      "1913": {
        "variance_explained": 45.0,
        "description": "The peak of the race (+1.0%). Britain laid down the *Queen Elizabeth* class\u2014fast battleships with 15-inch guns. The ultimate expression of the Mahanian warship. Germany could not keep up financially. The 'Naval Holiday' proposed by Churchill (a pause in building) was rejected by the Kaiser. The trajectory was locked on collision.",
        "key_manifestations": [
          "Keel laying of Queen Elizabeth class (Tech Event)",
          "Churchill's 'Naval Holiday' proposal (Diplomatic Event)",
          "Zabern Affair (Event - Prussian militarism vs Navalism)",
          "Conrad's Chance (Novel - maritime themes)"
        ]
      },
      "1914": {
        "variance_explained": 55.0,
        "description": "The Test (+10.0%). War. The Grand Fleet mobilized to Scapa Flow. The 'Distant Blockade' began. Mahanian theory worked: German commerce was swept from the seas in weeks. However, the 'Decisive Battle' did not happen immediately. Instead, the submarine threat (U-9 sinking three cruisers) shocked the Admiralty. The 'Goliath' was vulnerable to the 'David.' The Battle of Coronel and Falklands proved the Dreadnought's reach globally.",
        "key_manifestations": [
          "Mobilization of the Grand Fleet (Event)",
          "Sinking of the Aboukir, Hogue, and Cressy by U-9 (Event)",
          "Battle of the Falkland Islands (Event - vindication of the Battlecruiser)",
          "Death of A.T. Mahan (Event - symbolic end of the theoretical era)"
        ]
      },
      "1915": {
        "variance_explained": 58.0,
        "description": "The Gallipoli Campaign (+3.0%). An attempt to use Sea Power to bypass the land deadlock. It failed due to mines and coastal artillery. It proved ships could not fight forts. The *Lusitania* sinking introduced 'Unrestricted Submarine Warfare'\u2014the anti-thesis of the Mahanian 'Command of the Sea.' It was 'Denial of the Sea' by invisible means. The cluster was under asymmetric assault.",
        "key_manifestations": [
          "Gallipoli Naval landings (Event)",
          "Sinking of the Lusitania (Event)",
          "Battle of Dogger Bank (Event)",
          "The Thirty-Nine Steps (Novel - coastal defense themes)"
        ]
      },
      "1916": {
        "variance_explained": 65.0,
        "description": "The Battle of Jutland (+7.0%). The long-awaited climax. 250 ships collided. But it was indecisive. Jellicoe 'could have lost the war in an afternoon' but chose caution. The British lost more ships (battlecruisers blowing up due to poor safety/design), but the German fleet retreated and never came out again. It was a strategic victory but a tactical disappointment. It signaled that the 'Decisive Battle' was perhaps a myth in the face of torpedoes and mines.",
        "key_manifestations": [
          "Battle of Jutland (Event)",
          "Death of Lord Kitchener on HMS Hampshire (Event - mine warfare)",
          "Sussex Pledge (Diplomatic Event - temporary halt to U-boats)",
          "Introduction of the Hydrophone (Tech Event - ASW begins)"
        ]
      },
      "1917": {
        "variance_explained": 60.0,
        "description": "The Submarine Crisis (-5.0% for surface fleet, +Variance for Sea Denial). Britain nearly starved. The battleship fleet sat at anchor while U-boats ravaged commerce. The introduction of the 'Convoy System' saved the Allies. This was a shift from 'Fleet on Fleet' to 'Fleet protecting Trade.' The entry of the US Navy brought fresh destroyers. The Mutiny in the German Navy began to simmer due to inactivity/bad food\u2014the fleet rotting from within.",
        "key_manifestations": [
          "Introduction of the Convoy System (Strategic Event)",
          "Unrestricted U-boat Warfare resumes (Event)",
          "Mutiny on the battleship Prinzregent Luitpold (Event)",
          "First landing of aircraft on a moving ship (HMS Furious) (Tech Event)"
        ]
      },
      "1918": {
        "variance_explained": 55.0,
        "description": "The surrender of the High Seas Fleet (+-5.0%). The German fleet didn't fight; it mutinied and then surrendered. A glorious Mahanian end was denied. The raid on Zeebrugge showed the Navy trying to act like commandos. HMS *Argus* was commissioned\u2014the first true aircraft carrier (flat top). The 'Carrier' seed was planted as the 'Battleship' celebrated its hollow victory.",
        "key_manifestations": [
          "Surrender of the High Seas Fleet (Event)",
          "Raid on Zeebrugge (Event)",
          "Commissioning of HMS Argus (Tech Event)",
          "Kiel Mutiny (Event - spark of the German Revolution)"
        ]
      },
      "1919": {
        "variance_explained": 50.0,
        "description": "Scuttling at Scapa Flow (-5.0%). The German fleet sank itself. The massive surplus of warships led to the 'Geddes Axe'\u2014mass scrapping. The cluster was contracting. The US Navy moved the main fleet to the Pacific, identifying Japan as the new rival. War Plan Orange was refined. The 'Next War' would be naval.",
        "key_manifestations": [
          "Scuttling of the German Fleet at Scapa Flow (Event)",
          "NC-4 Transatlantic Flight (Tech Event - Navy air projection)",
          "Geddes Axe (Political Event)",
          "Treaty of Versailles (limiting German navy to insignificance)"
        ]
      },
      "1920": {
        "variance_explained": 48.0,
        "description": "Stasis (-2.0%). The focus was on the US-Japan naval race. Both nations launched massive building programs (Daniels Plan vs 8-8 Fleet). It looked like 1910 all over again. However, the cost was unsustainable. The 'torpedo bomber' was proving effective in trials. The 'battleship' was becoming a 'target.'",
        "key_manifestations": [
          "US Naval Act of 1916 (Execution phase)",
          "Japanese 8-8 Fleet Plan (Strategic Event)",
          "First flight of the Douglas DT (Tech Event - torpedo bomber)",
          "Conrad's The Rescue (Novel)"
        ]
      },
      "1921": {
        "variance_explained": 52.0,
        "description": "The bombing of the *Ostfriesland* by Billy Mitchell (+4.0%). A shock to the system. A battleship sank by planes. The 'Gun Club' denied it, claiming conditions were rigged, but the writing was on the wall. The Washington Naval Conference convened to stop the arms race. It was a recognition that the Mahanian model was too expensive for liberal democracies.",
        "key_manifestations": [
          "Sinking of the Ostfriesland (Event)",
          "Washington Naval Conference begins (Diplomatic Event)",
          "Launch of the Kaga (Tech Event - battleship converted to carrier later)",
          "Introduction of the standard 21-inch torpedo (Tech Event)"
        ]
      },
      "1922": {
        "variance_explained": 45.0,
        "description": "The Washington Naval Treaty (-7.0%). The 'Holiday' began. Tonnage ratios (5:5:3) were fixed. Battleships were scrapped. *However*, the treaty allowed for conversion of battlecruiser hulls to aircraft carriers (*Lexington*, *Saratoga*, *Akagi*). This inadvertently birthed the Carrier Era. The cluster mutated: from Gun Power to Air Power at Sea.",
        "key_manifestations": [
          "Washington Naval Treaty signed (Diplomatic Event)",
          "Commissioning of the Housho (first purpose-built carrier) (Tech Event)",
          "Scrapping of the USS Washington (Event)",
          "Captain Blood by Sabatini (Novel - nostalgic look at sea power)"
        ]
      },
      "1923": {
        "variance_explained": 46.0,
        "description": "Stasis (+1.0%). Fleet Problems in the US Navy (Problem I) began to test the defense of the Panama Canal. These exercises were the laboratory for the Pacific War. The 'Circular formation' for air defense was developed. The Royal Navy began building the 'Singapore Strategy'\u2014a fortress in the East to project power without a permanent fleet.",
        "key_manifestations": [
          "US Fleet Problem I (Event)",
          "Singapore Naval Base planning (Strategic Event)",
          "Launch of HMS Nelson (Tech Event - 'Cherry Tree' class, treaty limited)",
          "Conrad's The Rover (Novel)"
        ]
      },
      "1924": {
        "variance_explained": 45.0,
        "description": "Entrenchment (-1.0%). The 'Treaty Cruisers' (10,000 tons) became the new focus of competition. Japan began to focus on 'quality over quantity'\u2014better night fighting, better torpedoes (Long Lance development began). The 'Jeune \u00c9cole' returned in the form of the submarine/aircraft focus in Japan.",
        "key_manifestations": [
          "Completion of HMS Hermes (Tech Event)",
          "Billy Mitchell's Winged Defense (Book - attacking the Navy)",
          "US Fleet Problem III (Testing amphibious concepts)",
          "Ford Madox Ford's Parade's End (Novel)"
        ]
      },
      "1925": {
        "variance_explained": 44.0,
        "description": "Stasis (-1.0%). The launch of the *Saratoga* and *Lexington*. Massive carriers. They were faster than battleships. In Fleet Problem V, the *Saratoga* 'attacked' the Panama Canal successfully. It proved a carrier could launch a strategic strike. The Admirals dismissed it as 'unrealistic,' but the Carrier pilots knew.",
        "key_manifestations": [
          "Launch of USS Saratoga (Tech Event)",
          "US Fleet Problem V (Event)",
          "Battleship Potemkin (Film - naval mutiny as revolution)",
          "Introduction of the Type 93 Torpedo development (Tech Event)"
        ]
      },
      "1926": {
        "variance_explained": 45.0,
        "description": "Variance ticked up (+1.0%). The German Navy (Reichsmarine) began secret rearmament. The 'Pocket Battleship' concept (Panzerschiff) was designed to cheat the Treaty of Versailles\u2014a commerce raider that could outrun anything it couldn't sink. This was a return to the 'Corsair' war.",
        "key_manifestations": [
          "Design of the Deutschland class (Tech Event)",
          "Hirohito becomes Emperor (Event - Navy's role in expansion)",
          "Sand Pebbles context (River gunboats in China)",
          "Submarine S-4 disaster (Event)"
        ]
      },
      "1927": {
        "variance_explained": 46.0,
        "description": "Geneva Naval Conference failed (+1.0%). The attempt to limit cruisers fell apart. The 'arms race' was creeping back in the smaller classes. The US Navy focused on the 'Dive Bomber' as a precise anti-ship weapon. The 'Carrier' was moving from a scout to a striker.",
        "key_manifestations": [
          "Geneva Naval Conference failure (Diplomatic Event)",
          "First flight of the Curtiss F8C Helldiver (Tech Event)",
          "Commissioning of the Akagi (Tech Event)",
          "T.E. Lawrence's Revolt in the Desert (Book)"
        ]
      },
      "1928": {
        "variance_explained": 47.0,
        "description": "Fleet Problem VIII (+1.0%). Convoy search and attack. The USN realized the vulnerability of supply lines. The 'Logistics' cluster (18) intersected here. The 'Fleet Train' concept\u2014refueling at sea\u2014was refined, allowing the USN to cross the Pacific without bases. This was the logistical enabler of Mahanian hegemony.",
        "key_manifestations": [
          "US Fleet Problem VIII (Event)",
          "Introduction of the 'Underway Replenishment' doctrine (Tech/Strategic Event)",
          "Commissioning of HMS Courageous as carrier (Tech Event)",
          "Deep sea exploration (Beebe) begins (Scientific Event)"
        ]
      },
      "1929": {
        "variance_explained": 45.0,
        "description": "The 'Pocket Battleship' *Deutschland* was laid down (-2.0% due to depression, but +Innovation). It shocked the naval powers. It forced the French to build the *Dunkerque*. A mini-arms race began. The Depression hit the Royal Navy hard, leading to the Invergordon Mutiny later (salary cuts).",
        "key_manifestations": [
          "Laying down of the Deutschland (Tech Event)",
          "US Fleet Problem IX (Carrier attack on Panama Canal verified)",
          "A High Wind in Jamaica (Novel - pirate myth deconstruction)",
          "Stock Market Crash (Economic Event)"
        ]
      },
      "1930": {
        "variance_explained": 48.0,
        "description": "London Naval Treaty (+3.0%). An attempt to plug the cruiser loophole. Japan felt slighted (10:10:7 ratio). The 'Fleet Faction' in Japan became radicalized, assassinating opponents. The Treaty system was fracturing. The 'Sonar' (ASDIC) was improving, leading to dangerous overconfidence that the submarine was 'solved.'",
        "key_manifestations": [
          "London Naval Treaty (Diplomatic Event)",
          "Assassination of Hamaguchi Osachi (Event - for signing the treaty)",
          "C.S. Forester's Brown on Resolution (Novel - lone ship heroism)",
          "Mussolini announces naval parity goal (Political Event)"
        ]
      },
      "1931": {
        "variance_explained": 50.0,
        "description": "Invergordon Mutiny (+2.0% Shock). The Royal Navy struck over pay cuts. The pound crashed. It signaled the fragility of British Sea Power. Japan invaded Manchuria, and the Western fleets did nothing. It proved that without the will to use it, tonnage was meaningless. The 'Paper Tiger' phase.",
        "key_manifestations": [
          "Invergordon Mutiny (Event)",
          "Japanese invasion of Manchuria (Event)",
          "Commissioning of USS Akron (Airship carrier - tech dead end)",
          "No\u00ebl Coward's Cavalcade (Play - including the Titanic scene)"
        ]
      },
      "1932": {
        "variance_explained": 52.0,
        "description": "Fleet Problem XIII (+2.0%). Carrier vs Carrier. The USN realized that the first carrier to launch would win. 'Attack effectively first.' This aggressive doctrine replaced the 'Battle Line' protection. The Japanese *Hiryu* class design began\u2014dedicated fast carriers.",
        "key_manifestations": [
          "US Fleet Problem XIII (Event)",
          "The Shangai Incident (Carrier aircraft used for ground support)",
          "Mutiny on the Bounty (Novel - looking back at the age of sail)",
          "Roosevelt elected (Navy man in the White House)"
        ]
      },
      "1933": {
        "variance_explained": 55.0,
        "description": "The Vinson-Trammell Act in the US (+3.0%). 'Building up to Treaty Limits.' FDR began rearmament as a jobs program. The USN began its expansion. In Japan, the 'Shadow Fleet' (ships built to be easily converted to war) expanded. Germany started planning the *Bismarck*.",
        "key_manifestations": [
          "Vinson-Trammell Act (Legal Event)",
          "Laying down of the Graf Spee (Tech Event)",
          "King Kong (Film - planes vs beast)",
          "Development of the Type 91 Aerial Torpedo (Japan) (Tech Event)"
        ]
      },
      "1934": {
        "variance_explained": 58.0,
        "description": "Japan abrogated the Washington Treaty (+3.0%). The limits were off. The *Yamato* design began\u2014the 'Super-Battleship' to end all battleships (70,000 tons). Mahanian gigantism reached its terminal phase. The Royal Navy began the *King George V* class. The race was back on.",
        "key_manifestations": [
          "Japan renounces naval treaties (Diplomatic Event)",
          "Design of the Yamato class (Tech Event)",
          "Launch of the French battleship Dunkerque (Tech Event)",
          "Anything Goes (Musical - set on a liner)"
        ]
      },
      "1935": {
        "variance_explained": 60.0,
        "description": "Anglo-German Naval Agreement (+2.0%). Britain allowed Germany to build a navy (35% of RN). It legalized the U-boat. A strategic blunder. The 'Second London Naval Treaty' tried to limit gun size, but the 'Escalator Clause' allowed everyone to cheat. The 'Bismarck' was laid down.",
        "key_manifestations": [
          "Anglo-German Naval Agreement (Diplomatic Event)",
          "Laying down of the Bismarck (Tech Event)",
          "Forester's The African Queen (Novel)",
          "First flight of the Douglas TBD Devastator (Tech Event)"
        ]
      },
      "1936": {
        "variance_explained": 62.0,
        "description": "Spanish Civil War (+2.0%). Submarines attacked neutral shipping. The 'Nyon Conference' tried to stop 'piracy.' The Japanese withdrew from the London Conference. The US passed the 'Two-Ocean Navy Act' predecessor (Vinson-Trammell expansion). The carriers *Yorktown* and *Enterprise* were launched\u2014the ships that would win the Pacific.",
        "key_manifestations": [
          "Launch of USS Enterprise (Tech Event)",
          "Nyon Conference (Diplomatic Event)",
          "Laying down of the Yamato (Tech Event)",
          "Mutiny on the Bounty (Film)"
        ]
      },
      "1937": {
        "variance_explained": 65.0,
        "description": "The *Panay* Incident (+3.0%). Japanese planes sank a US gunboat in China. It showed Air Power's dominance over riverine naval power. It was a test of US resolve; the US blinked. Fleet Problem XVIII tested the invasion of Hawaii... eerie foresight.",
        "key_manifestations": [
          "USS Panay incident (Event)",
          "US Fleet Problem XVIII (Event)",
          "Captain Horatio Hornblower (Novel - return to Napoleonic naval virtues)",
          "Keel laying of USS North Carolina (Tech Event - fast battleship)"
        ]
      },
      "1938": {
        "variance_explained": 68.0,
        "description": "The Second Vinson Act (+3.0%). 20% increase in tonnage. The US machine was waking up. The Royal Navy mobilized for Munich\u2014it was the only force Britain had ready, but it was useless against a land power (Germany). This highlighted the limits of Mahan in a continental crisis.",
        "key_manifestations": [
          "Naval Act of 1938 (Legal Event)",
          "Mobilization of the Royal Navy (Event)",
          "Launch of the Prinz Eugen (Tech Event)",
          "Run Silent, Run Deep (Submarine doctrine evolving)"
        ]
      },
      "1939": {
        "variance_explained": 70.0,
        "description": "Battle of the River Plate (+2.0%). The *Graf Spee* was cornered by cruisers. A classic naval action. It showed the 'Pocket Battleship' was flawed. The *Royal Oak* was sunk by a U-boat in Scapa Flow. A shock. The sanctuary was violated. The 'Battle of the Atlantic' began immediately. The U-boat was the primary strategic weapon, not the battleship.",
        "key_manifestations": [
          "Battle of the River Plate (Event)",
          "Sinking of HMS Royal Oak (Event)",
          "Magnetic Mine threat (Tech Event)",
          "Launch of the Bismarck (Tech Event)"
        ]
      },
      "1940": {
        "variance_explained": 75.0,
        "description": "Taranto (+5.0%). The British attacked the Italian fleet at anchor with biplanes (Swordfish). It was the blueprint for Pearl Harbor. It proved the Battleship was a sitting duck. The Battle of the Atlantic intensified ('Happy Time' for U-boats). The 'Destroyers for Bases' deal marked the US taking over the Atlantic watch.",
        "key_manifestations": [
          "Battle of Taranto (Event)",
          "Destroyers for Bases Agreement (Diplomatic Event)",
          "Sinking of the Glorious by battleships (Counter-example: guns still worked occasionally)",
          "The Cruel Sea (Novel context - corvette warfare)"
        ]
      },
      "1941": {
        "variance_explained": 85.0,
        "description": "The End of the Battleship Era (+10.0%). 1. *Bismarck* sunk (by swordfish/battleships). 2. Pearl Harbor (Battleship fleet destroyed by air). 3. *Prince of Wales* and *Repulse* sunk by Japanese aircraft off Malaya. This was the definitive proof: a capital ship without air cover is dead. The cluster shifted instantly to the 'Carrier Task Force.'",
        "key_manifestations": [
          "Sinking of Prince of Wales and Repulse (Event)",
          "Pearl Harbor (Event)",
          "Sinking of the Bismarck (Event)",
          "Commissioning of the Yamato (Tech Event - obsolete at birth)"
        ]
      },
      "1942": {
        "variance_explained": 90.0,
        "description": "Midway (+5.0%). The Carrier battle. 4 Japanese carriers sunk. The 'Decisive Battle' happened, but the fleets never saw each other. It was Over-the-Horizon warfare. In the Atlantic, the U-boat war peaked (Operation Drumbeat). The 'Liberty Ship' production began to outpace sinkings. Mahanian victory was achieved by logistics and air power.",
        "key_manifestations": [
          "Battle of Midway (Event)",
          "Battle of the Coral Sea (Event - first carrier-on-carrier)",
          "Operation Drumbeat (U-boat offensive)",
          "In Which We Serve (Film)"
        ]
      },
      "1943": {
        "variance_explained": 95.0,
        "description": "Winning the Atlantic (+5.0%). 'Black May.' The U-boats were defeated by technology (Radar, Hedgehog, Escort Carriers). The sea lanes were secure. In the Pacific, the 'Island Hopping' campaign began\u2014amphibious warfare supported by the fast carrier task force. The *Essex* class carriers arrived\u2014mass production of hegemony.",
        "key_manifestations": [
          "Black May (Event - U-boat defeat)",
          "Battle of Tarawa (Event - amphibious doctrine test)",
          "Commissioning of USS Essex (Tech Event)",
          "Action in the North Atlantic (Film)"
        ]
      },
      "1944": {
        "variance_explained": 98.0,
        "description": "Leyte Gulf (+3.0%). The largest naval battle in history. The death ride of the Japanese Navy. The *Musashi* (sister to Yamato) was sunk by air. The 'Kamikaze' attacked ships. The US Navy was now larger than all other navies combined. It was a 'Hyper-Mahanian' force\u2014total command of the global ocean.",
        "key_manifestations": [
          "Battle of Leyte Gulf (Event)",
          "Sinking of the Musashi (Event)",
          "Sinking of the Tirpitz (Event - by air)",
          "Caine Mutiny context (Typhoon Cobb)"
        ]
      },
      "1945": {
        "variance_explained": 90.0,
        "description": "The Sinking of the *Yamato* (-8.0% kinetic). Sunk by 386 aircraft. A symbolic execution of the old cluster. The US Navy anchored off Japan and shelled the mainland. Total victory. However, the atomic bomb raised the question: 'Are navies obsolete?' The variance dipped as the 'Nuclear' cluster displaced the 'Naval' cluster.",
        "key_manifestations": [
          "Operation Ten-Go (Sinking of Yamato) (Event)",
          "Surrender on the USS Missouri (Event)",
          "Mister Roberts (Play - boredom of victory)",
          "Operation Magic Carpet (Logistical Event - bringing troops home)"
        ]
      },
      "1946": {
        "variance_explained": 80.0,
        "description": "Post-War Contraction (-10.0%). The 'Mothball Fleet.' Operation Crossroads (Bikini) tested nukes against ships. It proved ships were vulnerable to the bomb. The Navy fought for its existence against the Air Force (who claimed bombers could do it all). The cluster was in crisis.",
        "key_manifestations": [
          "Operation Crossroads (Event)",
          "Mothballing of the fleet (Event)",
          "Establishment of the Sixth Fleet in Med (Strategic Event)",
          "Victory at Sea (Documentary planning)"
        ]
      },
      "1947": {
        "variance_explained": 75.0,
        "description": "Truman Doctrine (+-5.0%). The US Navy became the police force of Containment. The 'Carrier' was re-branded as a 'Nuclear Delivery System' (AJ Savage bomber). The Navy realized it had to join the Nuclear cluster to survive.",
        "key_manifestations": [
          "Truman Doctrine (Event)",
          "National Security Act (Institutional Event - Navy preserves independence)",
          "Tales of the South Pacific (Book)",
          "First flight of the FJ-1 Fury (Tech Event - naval jet)"
        ]
      },
      "1948": {
        "variance_explained": 70.0,
        "description": "Stasis (-5.0%). The 'Revolt of the Admirals' (public fight against cancellation of the Super-Carrier *United States*). The Navy lost the PR battle to the B-36 bomber. Mahanian theory seemed dead in the atomic age. Who needs a fleet when you have a Doomsday bomb?",
        "key_manifestations": [
          "Cancellation of USS United States (Event)",
          "Revolt of the Admirals (Political Event)",
          "The Caine Mutiny (Book)",
          "Integration of women in Regular Navy (Social Event)"
        ]
      },
      "1949": {
        "variance_explained": 68.0,
        "description": "Soviet Bomb (-2.0%). The threat was now submarines again (Soviet Whisper class). The USN refocused on ASW (Anti-Submarine Warfare). The 'Hunter-Killer' group concept returned. Hegemony was about keeping the Atlantic open against a new underwater threat.",
        "key_manifestations": [
          "Soviet Nuclear Test (Event)",
          "Establishment of NATO (naval component)",
          "South Pacific (Musical)",
          "Keel laying of USS Nautilus design phase (Nuclear sub)"
        ]
      },
      "1950": {
        "variance_explained": 75.0,
        "description": "Korean War (+7.0%). Inchon Landing. MacArthur used the Navy to outflank the North Koreans. It proved the Navy was vital for *limited* war and power projection. The 'Carrier' was essential for ground support. The Navy was saved from obsolescence. The 'Blue Water' command was unchallenged, but its purpose was now supporting the land war.",
        "key_manifestations": [
          "Inchon Landing (Event - amphib triumph)",
          "Battle of Chosin Reservoir (Naval air support)",
          "Rickover begins Nuclear Navy (Tech Event - future variance)",
          "Kon-Tiki (Book/Film - primitive sea connection)"
        ]
      }
    }
  },
  "5_ideological_totalitarian_mobilization": {
    "name": "Ideological Totalitarian Mobilization (The Mass State)",
    "description": "This eigencluster captures the rise of the 'Total State'\u2014political systems that demand the complete fusion of the individual, the economy, and the military into a single ideological organism. It displaces the 19th-century liberal/monarchic order. It is characterized by mass politics, the weaponization of class/race identity, the police state, and the belief that the State is the ultimate moral actor. It encompasses the trajectory of Anarchism, Bolshevism, Fascism, and National Socialism, culminating in the Cold War ideological binary.",
    "trajectory": {
      "1890": {
        "variance_explained": 5.0,
        "description": "The cluster is nascent, manifested in the 'Propaganda of the Deed' by Anarchists. The delta is flat but buzzing (+0.0%). The 'Social Question' (labor rights) was pressing, but the State was still viewed as a night-watchman or a monarchic patriarch, not a totalitarian engineer. The German SPD (Social Democrats) was growing, signaling the entry of the 'Masses' into politics.",
        "key_manifestations": [
          "Repeal of Anti-Socialist Laws in Germany (Event)",
          "May Day protests become international (Event)",
          "The Kreutzer Sonata by Tolstoy (Book - radical moral critique)",
          "Sherman Antitrust Act (Legal Event - state managing capital)"
        ]
      },
      "1891": {
        "variance_explained": 5.5,
        "description": "Rerum Novarum issued by the Pope (+0.5%). A response to the 'Social Question,' trying to find a middle way between Capitalism and Socialism. It highlighted the growing pressure of the 'Mass.' The Erfurt Program of the SPD codified the Marxist path for Germany. The 'Mass Party' was being born\u2014a state within a state.",
        "key_manifestations": [
          "Rerum Novarum (Encyclical)",
          "Erfurt Program (Political Document)",
          "Tess of the d'Urbervilles (Novel - fate/social machine)",
          "Famine in Russia (Event - politicizing the peasantry)"
        ]
      },
      "1892": {
        "variance_explained": 6.0,
        "description": "The Ravachol bombings in Paris (+0.5%). Anarchist terror. It created a demand for 'State Security.' The Pan-German League grew, advocating for a 'V\u00f6lkisch' (racial/populist) nationalism\u2014the seed of Nazi ideology. The State began to claim the right to define 'National Identity' aggressively.",
        "key_manifestations": [
          "Ravachol execution (Event)",
          "Homestead Strike (Event - state/capital violence)",
          "The Conquest of Bread by Kropotkin (Book - Anarcho-communism)",
          "Cholera riots in Russia (Event)"
        ]
      },
      "1893": {
        "variance_explained": 6.5,
        "description": "Stasis (+0.5%). The bomb thrown in the French Chamber of Deputies ('Auguste Vaillant'). The 'Villainous Laws' were passed\u2014curtailing civil liberties to fight terror. The prototype of the 'Emergency State.' Durkheim published *The Division of Labour in Society*, analyzing 'Anomie'\u2014the breakdown of norms that creates the vacuum for Totalitarianism.",
        "key_manifestations": [
          "Vaillant bombing (Event)",
          "Lois sc\u00e9l\u00e9rates (Villainous Laws) (Legal Event)",
          "The Division of Labour in Society (Sociology)",
          "Founding of the Independent Labour Party in UK (Political Event)"
        ]
      },
      "1894": {
        "variance_explained": 7.5,
        "description": "The Dreyfus Affair began (+1.0%). It wasn't just a trial; it was a collision of 'Two Frances.' It prefigured the Fascist divide: The Army/Nation/Church vs. The Individual/Law/Republic. The Anti-Semitic mobs foreshadowed the 1930s. The 'Mass Press' fueled the hysteria.",
        "key_manifestations": [
          "Arrest of Dreyfus (Event)",
          "Assassination of President Carnot (Event)",
          "Nicholas II becomes Tsar (Event - refusing reform)",
          "The Jungle Book (Cultural - Order vs Chaos)"
        ]
      },
      "1895": {
        "variance_explained": 8.0,
        "description": "Le Bon's *The Crowd* was published (+0.5%). A manual for dictators. It analyzed how the individual mind is submerged in the collective. Mussolini and Hitler read this. It treated the 'Mass' as an irrational female force to be mastered by a leader. The 'Psychology of the Mass' became a political tool.",
        "key_manifestations": [
          "The Crowd: A Study of the Popular Mind (Book)",
          "Founding of the CGT (French Labor Union) (Institutional Event)",
          "Lumiere Brothers first film screening (Tech Event - tool for propaganda)",
          "Trial of Oscar Wilde (Event - state policing morality)"
        ]
      },
      "1896": {
        "variance_explained": 8.5,
        "description": "Herzl published *The Jewish State* (+0.5%). Nationalism as a solution to persecution. A response to the failure of assimilation. In the US, the election of 1896 (Bryan) was the first 'Populist' crusade, pitting the 'Masses' against the 'Classes.' The rhetoric of mobilization was heating up.",
        "key_manifestations": [
          "The Jewish State by Herzl (Book)",
          "Cross of Gold speech (Rhetoric)",
          "Battle of Adwa (Anti-colonial mobilization)",
          "Ubu Roi (Play - absurdist tyranny)"
        ]
      },
      "1897": {
        "variance_explained": 9.0,
        "description": "Founding of the Jewish Bund in Russia (+0.5%). Mass organization of Jewish workers. The Zionist Congress in Basel. Nationalism was becoming 'organized.' In Austria, Lueger (anti-semitic mayor) proved that hate was a winning electoral strategy. Hitler lived in this Vienna.",
        "key_manifestations": [
          "First Zionist Congress (Event)",
          "Karl Lueger confirms mayoralty (Political Event)",
          "Dracula (Novel - fear of the foreign invader)",
          "Durkheim's Suicide (Book - social disintegration)"
        ]
      },
      "1898": {
        "variance_explained": 9.5,
        "description": "Formation of the Russian Social Democratic Labour Party (RSDLP) (+0.5%). The seed of the Bolsheviks. Lenin was organizing. The 'J'Accuse' letter polarized France. The State was fighting for its soul. The 'Boxer' movement in China showed the power of nativist, anti-foreign mobilization.",
        "key_manifestations": [
          "RSDLP Congress (Political Event)",
          "J'Accuse by Zola (Political Text)",
          "War of the Worlds (Novel - total extermination)",
          "Spanish-American War (Yellow Journalism mobilization)"
        ]
      },
      "1899": {
        "variance_explained": 10.0,
        "description": "Bernstein's *Evolutionary Socialism* (+0.5%). The 'Revisionist' debate. Could socialism be achieved by voting? The split between 'Reform' and 'Revolution' began. Action Fran\u00e7aise was founded\u2014the intellectual grandfather of Fascism (Integral Nationalism).",
        "key_manifestations": [
          "Action Fran\u00e7aise founded (Political Event)",
          "Evolutionary Socialism by Bernstein (Book)",
          "The Awakening by Chopin (Novel - individual vs social constraint)",
          "Boer War 'Concentration Camps' (Technique of total control)"
        ]
      },
      "1900": {
        "variance_explained": 11.0,
        "description": "Assassination of King Umberto I by an anarchist (+1.0%). The 'Propaganda of the Deed' peaked. The result was not liberation, but repression. Lenin began publishing *Iskra* (The Spark). The professional revolutionary party\u2014the 'Vanguard'\u2014was theorized.",
        "key_manifestations": [
          "Assassination of Umberto I (Event)",
          "Iskra first published (Media Event)",
          "Freud's Interpretation of Dreams (Book - the subconscious irrational)",
          "Sister Carrie (Novel - capitalism crushing the individual)"
        ]
      },
      "1901": {
        "variance_explained": 12.0,
        "description": "Assassination of McKinley (+1.0%). Another head of state killed. The 'Alien Immigration Act' debates began. The State tightened borders. Lenin published *What Is To Be Done?*\u2014the blueprint for the totalitarian party. No compromise, strict discipline. The cluster found its methodology.",
        "key_manifestations": [
          "Assassination of McKinley (Event)",
          "What Is To Be Done? by Lenin (Book)",
          "Social Revolutionary Party founded in Russia (Political Event)",
          "Mann's Buddenbrooks (Novel)"
        ]
      },
      "1902": {
        "variance_explained": 12.5,
        "description": "Hobson's *Imperialism* (+0.5%). It argued that capitalism *required* war. This fused the economic and military critique. It influenced Lenin deeply. Sorel began writing on 'Myth'\u2014the idea that the masses need an irrational belief (General Strike) to mobilize. The rational liberal order was under intellectual siege.",
        "key_manifestations": [
          "Imperialism: A Study by Hobson (Book)",
          "Heart of Darkness (Novel)",
          "The Varieties of Religious Experience by James (Book - belief as force)",
          "Kautsky's The Social Revolution (Book)"
        ]
      },
      "1903": {
        "variance_explained": 13.5,
        "description": "Bolshevik/Menshevik Split (+1.0%). At the 2nd Party Congress, Lenin demanded a 'party of a new type.' Hardened, exclusive, obedient. The 'Bolshevik' (Majoritarian) cluster was born. The *Protocols of the Elders of Zion* was published in Russia\u2014a forgery by the secret police to mobilize anti-semitism. A key text of the 20th-century hate.",
        "key_manifestations": [
          "RSDLP Second Congress (Political Event)",
          "Protocols of the Elders of Zion published (Text)",
          "The Call of the Wild (Novel)",
          "Pogroms in Kishinev (Event - state-tolerated mob violence)"
        ]
      },
      "1904": {
        "variance_explained": 14.0,
        "description": "The Russo-Japanese War acted as a pressure cooker for the Russian state (+0.5%). The incompetence of the Autocracy mobilized the liberal and radical opposition. The 'Union of Liberation' was formed\u2014a prototype broad front. In the West, the General Strike in Italy demonstrated the power of the paralyzed economy as a political weapon. Sorel's syndicalist ideas were gaining traction: violence as a cleansing force.",
        "key_manifestations": [
          "Assassination of Vyacheslav von Plehve (Event)",
          "Formation of the Union of Liberation (Political Event)",
          "General Strike in Italy (Event)",
          "Nostromo (Novel - politics as plunder)"
        ]
      },
      "1905": {
        "variance_explained": 18.0,
        "description": "The First Russian Revolution (+4.0%). Bloody Sunday shattered the myth of the Benevolent Tsar. The 'Soviet' (Workers' Council) was invented\u2014a new form of direct, class-based governance. It was the dress rehearsal for 1917. The October Manifesto was a tactical retreat by the Autocracy, but the genie of 'Mass Action' was out of the bottle. In the US, the IWW (Wobblies) was founded, aiming for One Big Union.",
        "key_manifestations": [
          "Bloody Sunday (Event)",
          "Formation of the St. Petersburg Soviet (Institutional Event)",
          "Founding of the IWW (Institutional Event)",
          "October Manifesto (Political Event)"
        ]
      },
      "1906": {
        "variance_explained": 17.0,
        "description": "Reaction and Repression (-1.0%). Stolypin's 'Necktie' (hangings) restored order in Russia, but entrenched the hatred. Sorel published *Reflections on Violence*, arguing that the 'Myth' of the General Strike was more important than its reality. It was the philosophy of the 'will to power' applied to the proletariat. The concept of the 'Enemy of the People' was gestating.",
        "key_manifestations": [
          "Reflections on Violence by Georges Sorel (Book)",
          "Stolypin reforms begin (Political Event)",
          "The Jungle (Novel - mobilizing public outrage)",
          "Fundamental Laws of 1906 (Russia) (Legal Event - limiting the Duma)"
        ]
      },
      "1907": {
        "variance_explained": 17.5,
        "description": "Hitler arrived in Vienna (+0.5%). He absorbed the anti-semitic, pan-German atmosphere of Lueger's city. The 'mass politics' of hate were his school. In Russia, the Second Duma was dissolved; the Bolsheviks turned to 'expropriations' (bank robberies) to fund the party, merging crime with politics. The 'Professional Revolutionary' became a bandit-king.",
        "key_manifestations": [
          "Tiflis Bank Robbery (Event - Stalin involved)",
          "Hitler in Vienna (Bio Event)",
          "The Secret Agent (Novel - the psychology of the bomber)",
          "Encyclical Pascendi (Catholic clampdown on modernism)"
        ]
      },
      "1908": {
        "variance_explained": 18.0,
        "description": "The Young Turk Revolution (+0.5%). A 'Committee of Union and Progress' seized power. A modernization movement that turned into a one-party nationalist dictatorship. It was a preview of the specific pathology of 20th-century nationalism: modernization through terror. In the West, the 'Superman' idea (Nietzsche/Shaw) permeated the radical left/right\u2014the need for a Caesar to break the deadlock.",
        "key_manifestations": [
          "Young Turk Revolution (Event)",
          "The Iron Heel by Jack London (Novel - predicting Fascism)",
          "Sorel's Illusions of Progress (Book)",
          "Bosnian Crisis (Event - inflaming nationalism)"
        ]
      },
      "1909": {
        "variance_explained": 18.5,
        "description": "Marinetti's *Futurist Manifesto* (+0.5%). It glorified war, speed, and the destruction of the past. It was the aesthetic precursor to Fascism. It called for the 'hygiene' of the world. In the US, the 'Uprising of the 20,000' (shirtwaist strike) showed the mobilization potential of women/immigrants.",
        "key_manifestations": [
          "Futurist Manifesto (Art/Political Text)",
          "Uprising of the 20,000 (Event)",
          "Lenin's Materialism and Empirio-criticism (Book - enforcing ideological orthodoxy)",
          "Lloyd George's 'People's Budget' (Political Event - class warfare rhetoric)"
        ]
      },
      "1910": {
        "variance_explained": 19.0,
        "description": "The Mexican Revolution began (+0.5%). The first great social revolution of the century. It was chaotic, violent, and mobilized the peasantry. In Europe, the tension of the 'Armed Peace' was leading to internal crackdowns. The 'socialist threat' was used to justify military expansion.",
        "key_manifestations": [
          "Mexican Revolution begins (Event)",
          "Howards End (Novel - class struggle)",
          "P\u00e9guy's Notre Jeunesse (Essay - mystique vs politique)",
          "Corradini's 'Proletarian Nations' speech (Theory - Italy as a proletarian nation)"
        ]
      },
      "1911": {
        "variance_explained": 20.0,
        "description": "Michels published *Political Parties* (+1.0%). The 'Iron Law of Oligarchy.' He argued that all organizations, even socialist ones, inevitably become ruled by a elite. It was a cynical validation of the Bolshevik model: if elite rule is inevitable, make sure it's *our* elite. The Agadir Crisis mobilized nationalist fervor in Germany and France.",
        "key_manifestations": [
          "Political Parties by Robert Michels (Sociology)",
          "Triangle Shirtwaist Factory fire (Event - fueling labor militancy)",
          "Agadir Crisis (Event)",
          "Chinese Revolution (Xinhai) (Event - fall of Empire)"
        ]
      },
      "1912": {
        "variance_explained": 21.0,
        "description": "The SPD became the largest party in the Reichstag (+1.0%). The 'Red Specter' terrified the German elite. Some historians argue this fear drove the decision for war (Flucht nach vorn - flight forward). In Russia, the Lena Goldfields massacre reignited the strike movement. The 'quiet years' were over.",
        "key_manifestations": [
          "German Federal Election 1912 (Event)",
          "Lena Goldfields Massacre (Event)",
          "Pravda founded (Media Event - 'Truth' as weapon)",
          "Sinking of the Titanic (Cultural Event - class issues in survival)"
        ]
      },
      "1913": {
        "variance_explained": 22.0,
        "description": "Stalin wrote *Marxism and the National Question* (+1.0%). The Bolsheviks began to theorize how to use nationalism to break empires. The 'Beilis Affair' in Kiev (blood libel trial) showed the depth of state-sponsored anti-semitism. The structures of hate were fully operational.",
        "key_manifestations": [
          "Marxism and the National Question (Text)",
          "Beilis Affair (Event)",
          "Rosa Luxemburg's The Accumulation of Capital (Book)",
          "Ford's Assembly Line (Tech Event - regimentation of man)"
        ]
      },
      "1914": {
        "variance_explained": 35.0,
        "description": "The 'Spirit of 1914' / Union Sacr\u00e9e (+13.0%). The International Workingmen's Association collapsed. The workers chose Nation over Class. This was a massive win for 'National Socialism' (in the generic sense). The State took over the economy (War Socialism). Civil liberties were suspended. The 'Total State' was born not from revolution, but from mobilization.",
        "key_manifestations": [
          "Collapse of the Second International (Event)",
          "Passing of the Defence of the Realm Act (UK) (Legal Event)",
          "Kriegssozialismus (War Socialism) instituted (Policy)",
          "Assassination of Jaures (Event - death of pacifist socialism)"
        ]
      },
      "1915": {
        "variance_explained": 40.0,
        "description": "The Armenian Genocide (+5.0%). The Young Turk regime, under cover of war, implemented a program of ethnic cleansing to create a homogeneous nation-state. This was the first modern, bureaucratic genocide. It set the precedent: the State decides who lives. In Russia, the 'Progressive Bloc' failed; the Tsar isolated himself. Lenin, in exile, called for 'turning the imperialist war into a civil war.'",
        "key_manifestations": [
          "Armenian Genocide begins (Event)",
          "Zimmerwald Conference (Political Event - anti-war socialists)",
          "Metamorphosis by Kafka (Story - dehumanization)",
          "Italy joins the war (Event - D'Annunzio's interventionist rallies)"
        ]
      },
      "1916": {
        "variance_explained": 45.0,
        "description": "The Hindenburg Program in Germany (+5.0%). Total mobilization of labor. The distinction between civilian and soldier was erased. It was a military dictatorship. In Ireland, the Easter Rising was a 'blood sacrifice'\u2014nationalism as religious duty. The 'Turnip Winter' in Germany radicalized the population through starvation.",
        "key_manifestations": [
          "Hindenburg Program (Policy)",
          "Easter Rising (Event)",
          "Imperialism, the Highest Stage of Capitalism by Lenin (Book)",
          "Turnip Winter (Event)"
        ]
      },
      "1917": {
        "variance_explained": 60.0,
        "description": "The Bolshevik Revolution (+15.0%). The Singularity of this cluster. February brought liberty; October brought the Dictatorship of the Proletariat. Lenin proved that a disciplined minority could seize a great power. The Cheka was founded\u2014the sword of the revolution. The 'Terror' was institutionalized immediately. The 'One Party State' became a reality.",
        "key_manifestations": [
          "October Revolution (Event)",
          "Formation of the Cheka (Institutional Event)",
          "April Theses (Political Text)",
          "US Espionage Act (Legal Event - liberal states tightening control)"
        ]
      },
      "1918": {
        "variance_explained": 65.0,
        "description": "War Communism and the German Revolution (+5.0%). In Russia, the state seized all grain. Money was abolished. It was a utopian/dystopian experiment in total control. In Germany, the Kaiser fell, and the 'Council Republics' (R\u00e4terepublik) flared up. The Freikorps crushed them. The polarized street violence of the 1920s began.",
        "key_manifestations": [
          "Execution of the Romanovs (Event)",
          "German Revolution (Event)",
          "Spengler's Decline of the West (Book)",
          "Decree on Red Terror (Legal Event)"
        ]
      },
      "1919": {
        "variance_explained": 68.0,
        "description": "Founding of the Comintern and the Fascist Party (+3.0%). A split world. The Comintern demanded absolute obedience from all socialist parties. Mussolini founded the *Fasci di Combattimento* in Milan\u2014a fusion of nationalism and socialism. The 'Squadristi' (Blackshirts) began attacking the Left. The paramilitary entered politics.",
        "key_manifestations": [
          "Founding of the Comintern (Institutional Event)",
          "San Sepolcro meeting (Founding of Fascism)",
          "Spartacist Uprising (Event)",
          "Versailles Treaty (Event - the grievance fuel)"
        ]
      },
      "1920": {
        "variance_explained": 70.0,
        "description": "The Battle of Warsaw and the Kapp Putsch (+2.0%). The Red Army tried to export the revolution by bayonet but was stopped. This forced 'Socialism in One Country' (later). The Kapp Putsch showed the German Right was armed and waiting. The Nazi Party (NSDAP) announced its 25 Point Program\u2014a mix of racialism and populism.",
        "key_manifestations": [
          "NSDAP 25 Point Program (Political Document)",
          "Battle of Warsaw (Event)",
          "Kapp Putsch (Event)",
          "We by Zamyatin (Novel - the first totalitarian dystopia)"
        ]
      },
      "1921": {
        "variance_explained": 72.0,
        "description": "Kronstadt Rebellion and the NEP (+2.0%). The sailors who made the revolution rebelled against Bolshevik tyranny; Trotsky crushed them. 'The Revolution devours its children.' Lenin introduced the NEP (strategic retreat in economics) but banned factions within the Party. The 'monolithic' party was sealed.",
        "key_manifestations": [
          "Kronstadt Rebellion (Event)",
          "Ban on Factions (10th Party Congress)",
          "Rise of Fascist Squad violence in Italy (Event)",
          "R.U.R. (Play - Robots as mass man)"
        ]
      },
      "1922": {
        "variance_explained": 75.0,
        "description": "The March on Rome (+3.0%). Mussolini became Prime Minister. Fascism moved from the street to the State. It was the first Totalitarian regime in the West. Stalin became General Secretary\u2014the bureaucratic lever he would use to conquer the party. The USSR was officially formed.",
        "key_manifestations": [
          "March on Rome (Event)",
          "Creation of the USSR (Institutional Event)",
          "Stalin appointed General Secretary (Event)",
          "Wittgenstein's Tractatus (Philosophy - limits of language/world)"
        ]
      },
      "1923": {
        "variance_explained": 74.0,
        "description": "The Beer Hall Putsch failed (-1.0% in immediate power, +Legacy). Hitler went to jail, but the *idea* of the racial state gained publicity. In Russia, the 'Left Opposition' formed against the bureaucratization. The struggle for the successor to Lenin began.",
        "key_manifestations": [
          "Beer Hall Putsch (Event)",
          "Formation of the Left Opposition (Political Event)",
          "Hyperinflation in Germany (Event - destroying middle class stability)",
          "Hitler begins Mein Kampf (Text)"
        ]
      },
      "1924": {
        "variance_explained": 75.0,
        "description": "Death of Lenin (+1.0%). The Cult of Lenin began\u2014embalming the leader as a religious icon. Stalin preached the 'Foundations of Leninism.' The Matteotti Crisis in Italy\u2014Mussolini's thugs killed a socialist leader. Mussolini accepted responsibility and declared a full dictatorship. The facade of democracy ended.",
        "key_manifestations": [
          "Death of Lenin (Event)",
          "Matteotti Crisis (Event)",
          "The Magic Mountain (Novel - Naphta's Jesuitical terror)",
          "Surrealist Manifesto (Art - revolution of the mind)"
        ]
      },
      "1925": {
        "variance_explained": 76.0,
        "description": "Stasis (+1.0%). *Mein Kampf* published. The blueprint was public. In Italy, the 'Laws for the Defense of the State' were passed. The Press was muzzled. In Iran, Reza Shah established a modernizing dictatorship. The model of the 'Strong Man' was global.",
        "key_manifestations": [
          "Mein Kampf Vol 1 (Book)",
          "Mussolini's January 3rd Speech (Event - start of dictatorship)",
          "The Great Gatsby (Novel - contrast to the grim European reality)",
          "Eisenstein's Strike (Film - collective hero)"
        ]
      },
      "1926": {
        "variance_explained": 77.0,
        "description": "Pilsudski's Coup in Poland (+1.0%). 'Sanacja.' Authoritarianism spreading in Eastern Europe. Stalin moved against the 'United Opposition' (Trotsky/Zinoviev). The slicing of the salami began. The General Strike in the UK failed\u2014proving that in a stable democracy, the 'myth' didn't work.",
        "key_manifestations": [
          "May Coup in Poland (Event)",
          "UK General Strike (Event)",
          "Metropolis (Film - the mediator between head and hands)",
          "Kodoha faction forms in Japan (Political Event)"
        ]
      },
      "1927": {
        "variance_explained": 78.0,
        "description": "Expulsion of Trotsky (+1.0%). The Party was now Stalin's. The 'War Scare' of 1927 was used to justify crushing internal dissent. Chiang Kai-shek purged the Communists in Shanghai\u2014White Terror vs Red Terror. Heisenberg's Uncertainty Principle (Scientific Event) mirrored the dissolution of absolute truths.",
        "key_manifestations": [
          "Trotsky expelled from Party (Event)",
          "Shanghai Massacre (Event)",
          "The Jazz Singer (Film - sound/mass media)",
          "Heidegger's Being and Time (Philosophy - decisiveness)"
        ]
      },
      "1928": {
        "variance_explained": 82.0,
        "description": "The First Five-Year Plan (+4.0%). The 'Revolution from Above.' Forced industrialization and collectivization. The 'Kulak' was defined as the class enemy to be liquidated. This was war against the peasantry. The concept of the 'Gulag' as an economic engine began to expand.",
        "key_manifestations": [
          "First Five-Year Plan launched (Policy)",
          "Shakhty Trial (Event - the first show trial of 'wreckers')",
          "Threepenny Opera (Play - cynical critique)",
          "Kellogg-Briand Pact (Diplomatic Event - the paper mask of peace)"
        ]
      },
      "1929": {
        "variance_explained": 85.0,
        "description": "Collectivization and the Crash (+3.0%). Stalin declared 'the liquidation of the kulaks as a class.' Famine was weaponized. The Great Depression in the West destroyed faith in liberal capitalism, fueling the Nazi rise. The 'Grand Inquisitor' logic took over: freedom is traded for bread.",
        "key_manifestations": [
          "Liquidation of the Kulaks began (Policy)",
          "Wall Street Crash (Event)",
          "Lateran Treaty (Event - Fascism co-opts the Church)",
          "Remarque's All Quiet on the Western Front (Book - attacked by Nazis)"
        ]
      },
      "1930": {
        "variance_explained": 88.0,
        "description": "Nazi Breakthrough (+3.0%). 107 seats. The masses flooded to the swastika. 'Blood and Soil' rhetoric. In Russia, the Gulag system was formalized. The 'Holodomor' (Terror Famine) began in Ukraine. The State was murdering millions to enforce ideology.",
        "key_manifestations": [
          "Nazi Election Victory (Event)",
          "Formation of GULAG administration (Institutional Event)",
          "Civilization and Its Discontents (Book)",
          "The Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 90.0,
        "description": "Japanese Invasion of Manchuria (+2.0%). The military took over the Japanese state from within. 'State Shinto' emphasized the Emperor as a living god. In Germany, the SA ruled the streets. The Weimar Republic was a hollow shell.",
        "key_manifestations": [
          "Mukden Incident (Event)",
          "Papal Encyclical Non Abbiamo Bisogno (Criticizing Fascism)",
          "M (Film - mob justice)",
          "Falange founded in Spain (Political Event)"
        ]
      },
      "1932": {
        "variance_explained": 92.0,
        "description": "The Year of Decisions (+2.0%). Nazis became the largest party. The 'KPD' (Communists) and Nazis cooperated to destroy the center. In Russia, internal passports were introduced\u2014state serfdom returned. *Brave New World* depicted a soft totalitarianism of pleasure.",
        "key_manifestations": [
          "German Elections (July/Nov) (Event)",
          "Introduction of Internal Passports in USSR (Legal Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Holodomor) peaks (Event)"
        ]
      },
      "1933": {
        "variance_explained": 98.0,
        "description": "Machtergreifung (Seizure of Power) (+6.0%). Hitler Chancellor. Reichstag Fire. Enabling Act. The Rule of Law ended. Gleichschaltung (Coordination) of all society. Trade unions banned. Parties banned. Dachau opened. The Total State was constructed in months. It was a 'Legal Revolution.'",
        "key_manifestations": [
          "Reichstag Fire Decree (Legal Event)",
          "Enabling Act (Legal Event)",
          "Opening of Dachau (Event)",
          "Book Burnings (Event)"
        ]
      },
      "1934": {
        "variance_explained": 100.0,
        "description": "Night of the Long Knives and the Kirov Murder (+2.0%). Hitler murdered his own paramilitaries to cement army support. Stalin used Kirov's murder (likely self-orchestrated) to launch the Great Terror. The 'Leader' was now above the Party. The 'Oath to Hitler' replaced the oath to the Constitution.",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "Assassination of Kirov (Event)",
          "Triumph of the Will (Film)",
          "Hitler becomes F\u00fchrer and Reich Chancellor (Event)"
        ]
      },
      "1935": {
        "variance_explained": 100.0,
        "description": "Nuremberg Laws and Stakhanovism (+0.0%). In Germany, race became law. The Jew was socially dead. In Russia, the 'Stakhanovite' movement demanded superhuman productivity. The individual was a biological unit or an economic unit, nothing more.",
        "key_manifestations": [
          "Nuremberg Laws (Legal Event)",
          "Stakhanovite Movement begins (Social Event)",
          "Triumph of the Will released (Film)",
          "It Can't Happen Here by Sinclair Lewis (Book)"
        ]
      },
      "1936": {
        "variance_explained": 100.0,
        "description": "The Great Purge and the Spanish Civil War (+0.0%). The Moscow Show Trials. Old Bolsheviks confessed to impossible crimes. Truth was entirely subjective to the Party. Spain became the battlefield of ideologies. The 'Popular Front' in France was the desperate liberal/left defense.",
        "key_manifestations": [
          "First Moscow Show Trial (Event)",
          "Spanish Civil War begins (Event)",
          "Berlin Olympics (Propaganda Event)",
          "Keynes' General Theory (Book - saving liberal capitalism)"
        ]
      },
      "1937": {
        "variance_explained": 100.0,
        "description": "Yezhovshchina (The Great Terror) (+0.0%). Quotas for executions. 700,000 shot in Russia. The Army leadership decapitated. In Japan, the 'Cardinal Principles of the National Entity' were published\u2014indoctrination text. Guernica showed what the Total State does to dissenters.",
        "key_manifestations": [
          "Order 00447 (NKVD mass execution order)",
          "Rape of Nanking (Event)",
          "Degenerate Art Exhibition (Cultural Event)",
          "Homage to Catalonia (Book - discovering the Stalinist betrayal)"
        ]
      },
      "1938": {
        "variance_explained": 100.0,
        "description": "Kristallnacht and Anschluss (+0.0%). The mob was unleashed by the State. The annexation of Austria was a plebiscitary conquest. The Munich Agreement showed the weakness of democracies against the 'Will' of the dictator. The 'Fourth International' founded by Trotsky\u2014a voice in the wilderness.",
        "key_manifestations": [
          "Kristallnacht (Event)",
          "Anschluss (Event)",
          "Munich Agreement (Event)",
          "Nausea by Sartre (Novel)"
        ]
      },
      "1939": {
        "variance_explained": 100.0,
        "description": "Molotov-Ribbentrop Pact (+0.0%). The Red and Brown totalitarianisms merged. They divided Europe. Ideology was secondary to power. The invasion of Poland began the racial reordering of the East. The 'Euthanasia Program' (T4) began in Germany\u2014state killing of the 'unfit.'",
        "key_manifestations": [
          "Molotov-Ribbentrop Pact (Diplomatic Event)",
          "Aktion T4 begins (Policy)",
          "Invasion of Poland (Event)",
          "The Grapes of Wrath (Novel - the dispossessed)"
        ]
      },
      "1940": {
        "variance_explained": 100.0,
        "description": "The Fall of France and the Katyn Massacre (+0.0%). The totalitarian machine crushed the liberal republic. Katyn: The Soviets executed 22,000 Polish officers. Industrialized elimination of the leadership class. Vichy France showed how quickly a democracy could turn authoritarian.",
        "key_manifestations": [
          "Fall of France (Event)",
          "Katyn Massacre (Event)",
          "Darkness at Noon by Koestler (Novel - the logic of the purge)",
          "The Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "Barbarossa and the Holocaust (+0.0%). The 'War of Annihilation.' The Commissar Order. The Einsatzgruppen. The 'Final Solution' began. This was the teleological endpoint of the cluster: the murder of entire categories of humans. The US entry brought the 'Arsenal of Democracy'\u2014mobilizing the free state.",
        "key_manifestations": [
          "Operation Barbarossa (Event)",
          "Babi Yar Massacre (Event)",
          "Wannsee Conference planning (Event)",
          "Escape from Freedom by Fromm (Book)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "The Industrialization of Death (+0.0%). Auschwitz-Birkenau operational. The factory model applied to genocide. In the US, Executive Order 9066 interred Japanese-Americans\u2014race panic overriding rights even in a democracy. The 'Great Patriotic War' rhetoric in Russia fused Stalinism with Russian nationalism.",
        "key_manifestations": [
          "Wannsee Conference (Event)",
          "Executive Order 9066 (Legal Event)",
          "Stalingrad begins (Event)",
          "The Seventh Cross (Novel - anti-fascist resistance)"
        ]
      },
      "1943": {
        "variance_explained": 95.0,
        "description": "Total War Mobilization (-5.0% Variance as outcome became clearer, but intensity high). Goebbels' 'Total War' speech. The German state devoured its own society. The Warsaw Ghetto Uprising\u2014the doomed resistance of the dehumanized. Teheran Conference\u2014the Allies accepting Stalin as a partner.",
        "key_manifestations": [
          "Sportpalast Speech (Rhetoric)",
          "Warsaw Ghetto Uprising (Event)",
          "Dissolution of the Comintern (Diplomatic theater)",
          "Being and Nothingness (Philosophy)"
        ]
      },
      "1944": {
        "variance_explained": 90.0,
        "description": "The Camps Liberated (-10.0%). The Red Army found Majdanek. The world saw the reality of the cluster. The 20 July Plot failed\u2014the inability of the German elite to break the totalitarian oath. The Bretton Woods system planned a post-war liberal order to prevent this from happening again.",
        "key_manifestations": [
          "Liberation of Majdanek (Event)",
          "Road to Serfdom by Hayek (Book - warning against planning)",
          "20 July Plot (Event)",
          "Dialectic of Enlightenment (Book)"
        ]
      },
      "1945": {
        "variance_explained": 85.0,
        "description": "The Bunker and the Bomb (-5.0%). Hitler's suicide. The collapse of the Nazi state. The revelations of the Holocaust shocked the conscience of the world. However, the Soviet totalitarian system emerged victorious and expanded into Eastern Europe. The cluster didn't die; it relocated.",
        "key_manifestations": [
          "Hitler's Suicide (Event)",
          "Potsdam Conference (Event)",
          "Animal Farm (Book - critique of the revolution betrayed)",
          "Nuremberg Trials begin (Legal Event)"
        ]
      },
      "1946": {
        "variance_explained": 80.0,
        "description": "The Iron Curtain (-5.0%). The 'People's Democracies' in Eastern Europe were set up\u2014satellite totalitarian states. The 'Zhdanovshchina' in Russia\u2014cultural purge. Art must serve the Party. The Cold War began as a conflict of 'Ways of Life.'",
        "key_manifestations": [
          "Iron Curtain Speech (Event)",
          "Zhdanov Decree (Cultural Policy)",
          "Nuremberg Verdicts (Event)",
          "Origins of Totalitarianism (Arendt begins writing)"
        ]
      },
      "1947": {
        "variance_explained": 75.0,
        "description": "Cominform Founded (-5.0%). The successor to the Comintern. Enforcing orthodoxy. The Truman Doctrine defined the US mission as opposing 'coercion' (code for totalitarianism). The House Un-American Activities Committee (HUAC) began hunting communists in Hollywood\u2014the domestic reflection of the fear.",
        "key_manifestations": [
          "Truman Doctrine (Event)",
          "Founding of Cominform (Institutional Event)",
          "HUAC Hollywood hearings (Event)",
          "The Plague (Novel)"
        ]
      },
      "1948": {
        "variance_explained": 70.0,
        "description": "Coup in Czechoslovakia (-5.0%). The last democracy in the East fell to a communist coup. 1984 was written\u2014Orwell codified the cluster into the ultimate warning. 'A boot stamping on a human face, forever.' Tito-Stalin split showed that even totalitarians could fight each other.",
        "key_manifestations": [
          "Czechoslovak Coup d'\u00e9tat (Event)",
          "Tito-Stalin Split (Event)",
          "1984 (Book written)",
          "Universal Declaration of Human Rights (Event - the liberal answer)"
        ]
      },
      "1949": {
        "variance_explained": 68.0,
        "description": "The Chinese Revolution (-2.0%). Mao proclaimed the PRC. A new, peasant-based totalitarian model. The 'Dictatorship of the People's Democracy.' The Soviet Bomb solidified the standoff. The 'God That Failed' collection published\u2014intellectuals turning against the cluster.",
        "key_manifestations": [
          "Proclamation of the PRC (Event)",
          "The God That Failed (Book)",
          "Formation of the GDR (East Germany) (Event)",
          "Soviet Atomic Test (Event)"
        ]
      },
      "1950": {
        "variance_explained": 75.0,
        "description": "McCarthyism and Korea (+7.0%). The Korean War was a war against the expansion of the cluster. At home, Senator McCarthy claimed the State Department was infiltrated. The fear of the 'Enemy Within' gripped the US. The 'Total State' logic (security clearance, loyalty oaths) began to seep into the democracy to fight the totalitarian enemy.",
        "key_manifestations": [
          "McCarthy's Wheeling Speech (Event)",
          "Korean War begins (Event)",
          "The Authoritarian Personality (Book)",
          "Passage of the McCarran Internal Security Act (Legal Event)"
        ]
      }
    }
  },
  "6_information_theoretic_warfare": {
    "name": "Information Theoretic Warfare (The Signal and the Noise)",
    "description": "This eigencluster represents the shift from war as a physical collision of bodies to war as a process of information management, interception, and computation. It traces the evolution of cryptography, wireless communication, radar, propaganda (as information injection), and early cybernetics. It marks the transition from the 'Fog of War' being a natural phenomenon to being a constructed weapon. It culminates in the birth of the Computer and the National Security State, where the 'Bit' is as lethal as the 'Bullet.'",
    "trajectory": {
      "1890": {
        "variance_explained": 2.0,
        "description": "The world was wired, but analog. The variance was low, centered on the telegraph. The delta is flat. The 'Black Chambers' of Europe opened letters, but the volume was manageable. The displacing force was the lack of wireless; cables could be cut, but they physically existed. Information was tethered to copper.",
        "key_manifestations": [
          "Hollerith machines used in US Census (Tech Event - data processing start)",
          "Testing of the Branly coherer (Tech Event - radio precursor)",
          "The Sign of Four (Novel - telegraph as plot device)",
          "Laying of new transatlantic cables (Infrastructure Event)"
        ]
      },
      "1891": {
        "variance_explained": 2.2,
        "description": "Stasis (+0.2%). The telephone was spreading, creating a voice network. The 'Ochrana' (Russian Secret Police) refined their filing systems\u2014the manual database of dissent. The concept of the 'Dossier' was central to the police state's information dominance.",
        "key_manifestations": [
          "Strowger switch invented (Tech Event - automatic exchanges)",
          "Sherlock Holmes stories (Cultural - forensic data deduction)",
          "Ochrana expands foreign bureaus (Institutional Event)",
          "Tesla's coil experiments (Scientific Event)"
        ]
      },
      "1892": {
        "variance_explained": 2.5,
        "description": "Preece signaled across the Bristol Channel (+0.3%). Induction telegraphy. The 'Wireless' idea was percolating. The 'Panama Scandal' in France showed how leaked information (financial data) could topple governments. The press was the primary vector of information warfare.",
        "key_manifestations": [
          "Preece induction experiments (Tech Event)",
          "Panama Scandal leaks (Event)",
          "The American Black Chamber precursors (Institutional Event)",
          "Galton's Fingerprints (Book - biometric information)"
        ]
      },
      "1893": {
        "variance_explained": 2.8,
        "description": "Tesla's St. Louis demonstration (+0.3%). He demonstrated radio communication basics. He envisioned a 'World System' of information. The catalyst was the desire to break the British monopoly on cables. The 'Cipher' was still classical (Vigenere), breakable by frequency analysis, but few were looking.",
        "key_manifestations": [
          "Tesla's radio demo (Tech Event)",
          "Franco-Russian Alliance (Secret clauses - hidden info)",
          "Establishment of the Office of Naval Intelligence (US) (Institutional Event)",
          "Doyle's 'The Gloria Scott' (Story - code breaking)"
        ]
      },
      "1894": {
        "variance_explained": 4.0,
        "description": "The Dreyfus Affair: The Bordereau (+1.2%). A piece of paper in a wastebasket. The entire crisis revolved around handwriting analysis and a secret dossier. It was an 'Information Crisis.' The Army Intelligence (Section Statistique) forged documents (The Henry Faux). This was early Disinformation warfare.",
        "key_manifestations": [
          "Discovery of the Bordereau (Event)",
          "Marconi's first experiments in Italy (Tech Event)",
          "The Henry Forgery (Event)",
          "Section Statistique operations (Institutional Event)"
        ]
      },
      "1895": {
        "variance_explained": 4.5,
        "description": "Marconi transmitted 1.5 miles (+0.5%). Wireless was born. The 'Ether' became a battlespace. X-Rays discovered (Roentgen)\u2014seeing the unseen. The ability to extract information from the inside of the body paralleled the desire to extract secrets from the enemy.",
        "key_manifestations": [
          "Marconi's Salvan experiments (Tech Event)",
          "Roentgen discovers X-rays (Scientific Event)",
          "The Time Machine (Novel - information from the future)",
          "Lumiere cinematography (Tech Event - capturing reality)"
        ]
      },
      "1896": {
        "variance_explained": 5.0,
        "description": "Marconi patent 7777 (+0.5%). The British Admiralty realized the potential: commanding the fleet beyond the horizon. The 'Signal' was now mobile. Hollerith formed the Tabulating Machine Company (future IBM). The 'Database' and the 'Network' were born in the same decade.",
        "key_manifestations": [
          "Marconi Patent 7777 (Legal/Tech Event)",
          "Tabulating Machine Company founded (Business Event)",
          "The Island of Dr. Moreau (Novel - biological code)",
          "Becquerel discovers radioactivity (Scientific Event - energetic signal)"
        ]
      },
      "1897": {
        "variance_explained": 5.5,
        "description": "Marconi sent signals to a tugboat (+0.5%). Naval interest spiked. The 'Jamming' concept was theorized\u2014if you can send, you can block. The 'Zionist Congress' used the press to create a national consciousness\u2014information creating reality.",
        "key_manifestations": [
          "Marconi Channel tests (Tech Event)",
          "Dracula (Novel - assembling data to hunt the vampire)",
          "Braun invents CRT oscilloscope (Tech Event - visualizing the signal)",
          "Thomson discovers the electron (Scientific Event - the carrier of info)"
        ]
      },
      "1898": {
        "variance_explained": 6.0,
        "description": "Spanish-American War (+0.5%). Cables were cut at Cienfuegos. The first 'Cyber' attack (physical layer). The 'Yellow Press' (Hearst) manufactured the war through information saturation. 'You furnish the pictures, I'll furnish the war.' Information Dominance led to conflict.",
        "key_manifestations": [
          "Cutting of cables at Cienfuegos (Event)",
          "Hearst's USS Maine coverage (Media Event)",
          "Marconi installs wireless on Royal Family yacht (Event)",
          "War of the Worlds (Novel - the heat ray as energy beam)"
        ]
      },
      "1899": {
        "variance_explained": 6.5,
        "description": "Boer War (+0.5%). Wireless used on land. It failed largely due to interference (static). This highlighted the 'Signal to Noise' problem. Baden-Powell used deception/dummy forts at Mafeking\u2014physical disinformation. The 'Hague Convention' banned balloons but missed the electromagnetic spectrum.",
        "key_manifestations": [
          "Marconi sets used in Boer War (Tech Event)",
          "The Interpretation of Dreams (Book - decoding the mind)",
          "Mafeking deception tactics (Event)",
          "First magnetic recording of sound (Poulsen) (Tech Event)"
        ]
      },
      "1900": {
        "variance_explained": 7.0,
        "description": "Boxer Rebellion (+0.5%). The Legations were besieged; the telegraph cut. They were isolated. The anxiety of 'Disconnection' became a strategic fear. Reducing the world to a grid of communication was the imperial project. Hilbert's Problems (Math) posed the question of 'decidability'\u2014can all truth be computed?",
        "key_manifestations": [
          "Siege of Legations (Communication blackout)",
          "Hilbert's Problems presented (Math Event)",
          "Fessenden transmits speech by radio (Tech Event)",
          "Planck's Quantum Theory (Scientific Event - discrete packets)"
        ]
      },
      "1901": {
        "variance_explained": 8.0,
        "description": "Marconi's Transatlantic Signal (+1.0%). 'S' (dot-dot-dot). The ionosphere reflected the wave. Global communication was instant and wireless. The 'Interceptor' was born: anyone with an antenna could listen. Codes became existential.",
        "key_manifestations": [
          "Transatlantic radio signal (Tech Event)",
          "Kim by Kipling (Novel - The Great Game as intel war)",
          "Establishment of the US Army Signal School (Institutional Event)",
          "Fingerprinting adopted by Scotland Yard (Tech Event)"
        ]
      },
      "1902": {
        "variance_explained": 8.5,
        "description": "Heaviside-Kennelly layer proposed (+0.5%). Understanding the medium. The British laid the 'All Red Line'\u2014a cable network touching only British soil to ensure security. The ' Firewall' of the empire.",
        "key_manifestations": [
          "Heaviside layer hypothesis (Scientific Event)",
          "Completion of the All Red Line (Infrastructure Event)",
          "The Hound of the Baskervilles (Novel)",
          "Fessenden patents heterodyne principle (Tech Event - signal processing)"
        ]
      },
      "1903": {
        "variance_explained": 9.0,
        "description": "First International Radiotelegraph Conference (+0.5%). An attempt to regulate the ether. Marconi tried to create a monopoly (walled garden), refusing to talk to non-Marconi sets. The powers intervened to force interoperability. The 'Protocol Wars' began.",
        "key_manifestations": [
          "Berlin Radio Conference (Diplomatic Event)",
          "The Riddle of the Sands (Novel - data collection on tides)",
          "Fleming invents the vacuum diode (Tech Event - the gate of the computer)",
          "Wright Flyer (Tech Event - requiring 3-axis control info)"
        ]
      },
      "1904": {
        "variance_explained": 12.0,
        "description": "Russo-Japanese War (+3.0%). The Japanese cruiser *Shinano_Maru* spotted the Russian fleet by wireless. 'The enemy is in square 203.' First use of active 'Jamming' by the Russians (Port Arthur). War was now electromagnetic. The Russians had poor code discipline; the Japanese read them. The 'Battle of the Ether' had its first skirmish.",
        "key_manifestations": [
          "Discovery of Baltic Fleet by wireless (Event)",
          "Russian jamming at Port Arthur (Event)",
          "Fleming valve patent (Tech Event)",
          "Halford Mackinder's Pivot of History (Geopolitics as data)"
        ]
      },
      "1905": {
        "variance_explained": 12.5,
        "description": "Einstein's *Special Relativity* (+0.5%). Information cannot travel faster than light. The cosmic speed limit. In the navy, the 'Fire Control Table' (analog computer) was introduced to calculate gunnery. Ships became floating calculators.",
        "key_manifestations": [
          "Special Relativity papers (Scientific Event)",
          "Dreyer Fire Control Table (Tech Event)",
          "Battle of Tsushima (Won by wireless coordination)",
          "Mutiny on the Potemkin (Spread by telegraph)"
        ]
      },
      "1906": {
        "variance_explained": 13.0,
        "description": "Lee de Forest invented the Triode (Audion) (+0.5%). Amplification. Weak signals could be made strong. The hardware for the electronic age was ready. The SOS signal was adopted as standard\u2014a digital cry for help.",
        "key_manifestations": [
          "Invention of the Triode (Tech Event)",
          "Adoption of SOS (Legal Event)",
          "The Secret Agent (Novel - anarchy vs police info)",
          "Fessenden broadcasts music (Event - mass media birth)"
        ]
      },
      "1907": {
        "variance_explained": 13.5,
        "description": "The 'Dreadnought' Fire Control system (+0.5%). The ship was a system of wires and phones. Centralized direction. The 'Room 40' concept (naval cryptography) began to be discussed in the Admiralty\u2014reading German cables.",
        "key_manifestations": [
          "Pollangh fire control computer (Tech Event)",
          "Lumiere Autochrome (Color photography - more info in image)",
          "Galton's Eugenics Laboratory (Data applied to biology)",
          "The Man Who Was Thursday (Novel - spy paranoia)"
        ]
      },
      "1908": {
        "variance_explained": 14.0,
        "description": "Minkowski Space-Time (+0.5%). Math. The Ford Model T assembly line\u2014the algorithmization of production. Taylorism. Humans as data points in a flow. The 'Bureau' was becoming the brain of the state.",
        "key_manifestations": [
          "Minkowski's address (Scientific Event)",
          "Principles of Scientific Management (Taylorism roots)",
          "The War in the Air (Novel - global panic via news)",
          "Geiger counter invented (Tech Event - detecting invisible signal)"
        ]
      },
      "1909": {
        "variance_explained": 14.5,
        "description": "The 'Phantom Airship' scare (+0.5%). Mass hallucination driven by newspapers. Information viral loops. Marconi won the Nobel Prize. Wireless was established. The Secret Service Bureau (MI5/MI6) was founded to hunt German spies\u2014counter-intelligence institutionalized.",
        "key_manifestations": [
          "Founding of MI5/MI6 (Institutional Event)",
          "Marconi Nobel Prize (Event)",
          "The Machine Stops (Story - internet prediction)",
          "Phantom Airship panic (Cultural Event)"
        ]
      },
      "1910": {
        "variance_explained": 15.0,
        "description": "Dr. Crippen arrested by wireless (+0.5%). The first criminal caught by radio. The ship's captain radioed London; police met him in Canada. It proved the world was a surveillance panopticon. *Principia Mathematica* published\u2014trying to ground math in logic (and failing, per G\u00f6del later).",
        "key_manifestations": [
          "Arrest of Dr. Crippen (Event)",
          "Principia Mathematica Vol 1 (Book)",
          "Tabulating Machine Co. expands (Business Event)",
          "Agadir Crisis (Diplomatic signals)"
        ]
      },
      "1911": {
        "variance_explained": 15.5,
        "description": "IBM formed (CTR) (+0.5%). The merger of Hollerith's company. The infrastructure of the Information Age was incorporated. In Agadir, the German gunboat *Panther* was isolated by wireless silence. The 'blockade' of information.",
        "key_manifestations": [
          "Computing-Tabulating-Recording Company formed (Business Event)",
          "The Innocence of Father Brown (Story - logic)",
          "Superheterodyne receiver concept (Tech Event)",
          "Taylor's Principles of Scientific Management (Book)"
        ]
      },
      "1912": {
        "variance_explained": 16.5,
        "description": "*Titanic* (+1.0%). The distress signals were heard and ignored/misunderstood. It forced the 'Radio Act of 1912'\u201424-hour watch. Regulation of the spectrum. The amateur radio operators were pushed to 'short wave' (thought useless, actually better). This created the 'Ham' subculture\u2014the hackers of the age.",
        "key_manifestations": [
          "Titanic sinking (Communication failure)",
          "Radio Act of 1912 (Legal Event)",
          "Alan Turing born (Bio Event)",
          "Pound's Imagism (Poetry - direct treatment of the 'thing'/signal)"
        ]
      },
      "1913": {
        "variance_explained": 17.0,
        "description": "Bohr Model of the Atom (+0.5%). Quantum jumps. Discontinuous information. In the Balkans, the telegraph lines were the first targets of saboteurs. The 'Black Hand' used codes. The world was nervous, listening for the signal of war.",
        "key_manifestations": [
          "Bohr Atom (Scientific Event)",
          "Stravinsky's Rite of Spring (Noise as art)",
          "Meissner invents feedback loop (Tech Event)",
          "The Thirty-Nine Steps (Novel - the secret of the black stone)"
        ]
      },
      "1914": {
        "variance_explained": 25.0,
        "description": "The cutting of the German cables (+8.0%). On Day 1 of the war, the British ship *Telconia* cut Germany's transatlantic cables. Germany was forced to use wireless (interceptable) or neutral cables (tapped). 'Room 40' was formed to decrypt. The Battle of Tannenberg was won because the Russians broadcast orders 'in the clear.' Information incompetence = death.",
        "key_manifestations": [
          "Cutting of German cables by Telconia (Event)",
          "Room 40 established (Institutional Event)",
          "Battle of Tannenberg (Intel victory)",
          "Defense of the Realm Act (Censorship)"
        ]
      },
      "1915": {
        "variance_explained": 28.0,
        "description": "The sinking of the *Lusitania* and Propaganda (+3.0%). The Wellington House propaganda bureau (UK) manipulated US opinion. The 'Report on German Crimes' (Bryce Report) was weaponized information. Direction Finding (DF) stations began tracking U-boats by their radio clicks. The hunter tracked the signal.",
        "key_manifestations": [
          "Bryce Report released (Propaganda Event)",
          "Direction Finding stations operational (Tech Event)",
          "Einstein's General Relativity (Scientific Event)",
          "The Good Soldier (Novel - unreliable narrator)"
        ]
      },
      "1916": {
        "variance_explained": 30.0,
        "description": "Jutland Intelligence (+2.0%). Room 40 knew the German fleet was sailing before Jellicoe did. However, a filing error meant Jellicoe was told the Germans were in port. 'Garbage In, Garbage Out.' The Signal was correct; the processing was flawed. The Somme film\u2014mass media bringing the dead to the cinema.",
        "key_manifestations": [
          "Battle of Jutland (Intel failure/success)",
          "Battle of the Somme film (Media Event)",
          "Saussure's Course in General Linguistics (Structuralism - language as code)",
          "Dadaism (Anti-meaning)"
        ]
      },
      "1917": {
        "variance_explained": 40.0,
        "description": "The Zimmerman Telegram (+10.0%). The greatest intel coup in history. Room 40 decrypted a German offer of alliance to Mexico. It brought the US into the war. A single piece of information changed the strategic balance of the planet. The One-Time Pad was re-invented (Vernam). Unbreakable encryption.",
        "key_manifestations": [
          "Zimmerman Telegram decrypted (Event)",
          "Vernam Cipher patent (Tech Event)",
          "Committee on Public Information (Creel Committee) (Propaganda)",
          "Balfour Declaration (Diplomatic signal)"
        ]
      },
      "1918": {
        "variance_explained": 42.0,
        "description": "The Radio War (+2.0%). The final offensives were coordinated by wireless. The 'Stab in the Back' myth was a propaganda virus planted at the surrender. The Enigma machine was patented by Scherbius (for commercial use). The seed of the next war's crypto-battle.",
        "key_manifestations": [
          "Scherbius patents Enigma (Tech Event)",
          "Wilson's 14 Points (Broadcast diplomacy)",
          "The Education of Henry Adams (Book - History as thermodynamics/info)",
          "Spanish Flu (Viral information/biological spread)"
        ]
      },
      "1919": {
        "variance_explained": 38.0,
        "description": "The Black Chamber (+-4.0% Demobilization). The US closed its crypto bureau ('Gentlemen do not read each other's mail'). A fatal error. Britain formed the Government Code and Cypher School (GCCS). They kept listening. The Versailles Treaty created new borders, requiring new maps/data.",
        "key_manifestations": [
          "Founding of GCCS (Institutional Event)",
          "The Economic Consequences of the Peace (Data analysis)",
          "Eddington confirms Relativity (Scientific Event)",
          "Alcock and Brown (Navigation info)"
        ]
      },
      "1920": {
        "variance_explained": 40.0,
        "description": "KDKA Broadcast (+2.0%). Commercial radio began. The 'Mass Audience' was created. Information was no longer point-to-point; it was point-to-mass. Capek's *R.U.R.* coined 'Robot'\u2014artificial intelligence. The 'Red Scare' was an information panic.",
        "key_manifestations": [
          "KDKA first broadcast (Media Event)",
          "R.U.R. published (Play)",
          "The Cabinet of Dr. Caligari (Film - distorted reality)",
          "Theremin invented (Tech Event - electronic instrument)"
        ]
      },
      "1921": {
        "variance_explained": 42.0,
        "description": "The Crystal Set (+2.0%). Every home a receiver. The BBC was founded (1922, planning now). The 'Hague' secret service money network established by the Comintern. Wittgenstein's *Tractatus*: 'Whereof one cannot speak, thereof one must be silent.' The limits of logic.",
        "key_manifestations": [
          "Tractatus Logico-Philosophicus (Philosophy)",
          "Friedman joins US Signal Corps (Bio Event - father of US cryptanalysis)",
          "First radio baseball broadcast (Cultural Event)",
          "Sinking of Ostfriesland (Tech vs Tradition)"
        ]
      },
      "1922": {
        "variance_explained": 44.0,
        "description": "The BBC formed (+2.0%). State-chartered information monopoly. 'Nation building' through audio. The 'Enigma' machine began selling to navies. The US Navy adopted the 'cipher machine.' The arms race in algorithms began quietly.",
        "key_manifestations": [
          "Founding of the BBC (Institutional Event)",
          "Lippmann's Public Opinion (Book - 'Stereotypes' and manufacturing consent)",
          "Eliot's The Waste Land (Collage of signals)",
          "Joyce's Ulysses (Stream of consciousness data)"
        ]
      },
      "1923": {
        "variance_explained": 45.0,
        "description": "Zworykin's Iconoscope (+1.0%). Television patent. The eye joined the ear. In Germany, the hyperinflation printed numbers on money until they meant nothing\u2014information collapse. Interpol (ICPC) founded in Vienna\u2014sharing police data.",
        "key_manifestations": [
          "Iconoscope patent (Tech Event)",
          "Founding of Interpol (Institutional Event)",
          "Hyperinflation (Economic data failure)",
          "Hitler's trial (Propaganda platform)"
        ]
      },
      "1924": {
        "variance_explained": 48.0,
        "description": "The Zinoviev Letter (+3.0%). A forged Soviet letter toppled the British Labour government. Disinformation determined an election. IBM flourished. The 'Tabulator' was essential for modern administration.",
        "key_manifestations": [
          "Zinoviev Letter (Event)",
          "IBM name adopted (Business Event)",
          "Breton's Surrealist Manifesto (Automatic writing - subconscious signal)",
          "Magic Mountain (Time perception)"
        ]
      },
      "1925": {
        "variance_explained": 50.0,
        "description": "Baird's TV demo (+2.0%). Moving pictures transmitted. Quantum Mechanics (Heisenberg/Schr\u00f6dinger) formulated\u2014reality is probability (information), not clockwork. *The Great Gatsby*\u2014Gatz invents himself (disinformation).",
        "key_manifestations": [
          "Baird's first TV transmission (Tech Event)",
          "Heisenberg's Matrix Mechanics (Scientific Event)",
          "Mein Kampf (Propaganda text)",
          "Potemkin (Film as agitation)"
        ]
      },
      "1926": {
        "variance_explained": 52.0,
        "description": "Tesla predicted the smartphone (+2.0%). 'We shall be able to communicate with one another instantly... a vest pocket instrument.' The German Navy adopted Enigma. The 'Blackout' of intel began. GCCS failed to break it initially.",
        "key_manifestations": [
          "Tesla's Collier's interview (Visionary Event)",
          "German Navy adopts Enigma (Tech Event)",
          "Schr\u00f6dinger's Wave Equation (Science)",
          "Metropolis (The machine city)"
        ]
      },
      "1927": {
        "variance_explained": 55.0,
        "description": "Heisenberg's Uncertainty Principle (+3.0%). You cannot know position and momentum simultaneously. Information has a limit. The Jazz Singer\u2014sound in film. Philo Farnsworth transmitted electronic TV. Lindbergh's flight was the first global simultaneous media event.",
        "key_manifestations": [
          "Uncertainty Principle (Science)",
          "The Jazz Singer (Media Event)",
          "Farnsworth TV transmission (Tech Event)",
          "Heidegger's Being and Time (Philosophy)"
        ]
      },
      "1928": {
        "variance_explained": 58.0,
        "description": "G\u00f6del's Incompleteness Theorems (gestating) (+3.0%). Math cannot prove itself. The Polish Cipher Bureau (Biuro Szyfrow) began attacking Enigma. They hired mathematicians, not linguists. A paradigm shift: Code is Math, not Language.",
        "key_manifestations": [
          "Polish Cipher Bureau hires mathematicians (Event)",
          "Nyquist's Sampling Theorem (Tech Event - basis of digital audio)",
          "Mickey Mouse in Steamboat Willie (Synced sound animation)",
          "The Passion of Joan of Arc (Close-up as info)"
        ]
      },
      "1929": {
        "variance_explained": 60.0,
        "description": "The Crash (+2.0%). The Ticker Tape couldn't keep up. Information lag caused panic. The 'Yardley' book *The American Black Chamber* revealed US codebreaking secrets. A massive security breach. Stimson shut it down: 'Gentlemen...' (see 1919, but effect felt now).",
        "key_manifestations": [
          "Wall Street Crash (Data overload)",
          "The American Black Chamber published (Book/Leak)",
          "G\u00f6del's Doctoral Dissertation (Math Event)",
          "Dziga Vertov's Man with a Movie Camera (Meta-media)"
        ]
      },
      "1930": {
        "variance_explained": 62.0,
        "description": "Vannevar Bush's Differential Analyzer (+2.0%). The first analog supercomputer. It could solve equations. Goebbels appointed head of Nazi propaganda\u2014the 'Big Lie' technique. Information as a bludgeon.",
        "key_manifestations": [
          "Differential Analyzer operational (Tech Event)",
          "Goebbels takes charge of propaganda (Political Event)",
          "Murder at the Vicarage (Miss Marple - deducer)",
          "Civilization and Its Discontents (Freud)"
        ]
      },
      "1931": {
        "variance_explained": 65.0,
        "description": "G\u00f6del published (+3.0%). The end of certainty. Radio Astronomy began (Jansky)\u2014listening to the stars. The 'French Code' for the Enigma was sold to the French by a spy (Hans-Thilo Schmidt), who gave it to the Poles. The 'Key' was passed.",
        "key_manifestations": [
          "G\u00f6del's Incompleteness Theorems published (Math Event)",
          "Jansky discovers radio waves from Milky Way (Science)",
          "Hans-Thilo Schmidt espionage (Spy Event)",
          "M (Film - criminal underworld network)"
        ]
      },
      "1932": {
        "variance_explained": 70.0,
        "description": "Rejewski broke Enigma (+5.0%). The Polish mathematician used group theory to solve the machine wiring. The most secret information of the Reich was transparent. The 'Bomba' (cryptologic bomb) was designed to automate decryption. The computer was born to break codes.",
        "key_manifestations": [
          "Rejewski breaks Enigma (Event)",
          "Chadwick discovers the Neutron (Science)",
          "Brave New World (Conditioning as info programming)",
          "Kennedy-Thorndike experiment (Relativity)"
        ]
      },
      "1933": {
        "variance_explained": 72.0,
        "description": "Goebbels' Ministry of Propaganda (+2.0%). Burning books (deleting data). The 'Volksempf\u00e4nger' (People's Radio)\u2014cheap radios that only received local (Nazi) stations. Hardware DRM for the mind.",
        "key_manifestations": [
          "Ministry of Public Enlightenment and Propaganda (Institutional Event)",
          "Volksempf\u00e4nger introduced (Tech Event)",
          "Armstrong invents FM radio (Tech Event)",
          "King Kong (Film)"
        ]
      },
      "1934": {
        "variance_explained": 75.0,
        "description": "The Watson-Watt Memo (+3.0%). 'Death Rays' are impossible, but 'Radio Detection' (Radar) is possible. The 'Chain Home' system was authorized. The 'Eye' of the Battle of Britain opened. Turing conceived the 'Universal Turing Machine'\u2014the theoretical computer.",
        "key_manifestations": [
          "Daventry Experiment (Radar proof)",
          "Turing's 'On Computable Numbers' (drafting) (Intellectual Event)",
          "FCC established (Regulatory Event)",
          "Tender is the Night (Novel)"
        ]
      },
      "1935": {
        "variance_explained": 78.0,
        "description": "Turing published *On Computable Numbers* (+3.0%). The blueprint for the digital age. Anything computable can be computed by a machine. Watson-Watt patented Radar. The technological pieces for the victory in 1945 were laid.",
        "key_manifestations": [
          "On Computable Numbers published (Math Event)",
          "Watson-Watt Radar patent (Tech Event)",
          "Penguin Books (Mass info distribution)",
          "Riefenstahl's Triumph of the Will (Propaganda masterpiece)"
        ]
      },
      "1936": {
        "variance_explained": 80.0,
        "description": "Zuse Z1 (+2.0%). First programmable computer (mechanical) in a Berlin living room. Turing went to Princeton. The BBC started TV service. The Spanish Civil War tested 'Air Raid Precautions'\u2014civilian warning networks.",
        "key_manifestations": [
          "Zuse Z1 construction (Tech Event)",
          "BBC Television Service begins (Media Event)",
          "Carnegie's How to Win Friends... (Social engineering)",
          "Benjamin's Art in Age of Mechanical Reproduction (Essay)"
        ]
      },
      "1937": {
        "variance_explained": 82.0,
        "description": "Claude Shannon's Masters Thesis (+2.0%). Boolean Algebra + Circuits. He proved that switches could do logic. The bridge between Math and Hardware. The 'Purple' cipher in Japan (broken by US 'Magic').",
        "key_manifestations": [
          "Shannon's Thesis (Intellectual Event)",
          "Purple Cipher introduced (Tech Event)",
          "Picasso's Guernica (Visual info of horror)",
          "Snow White (Animation tech)"
        ]
      },
      "1938": {
        "variance_explained": 85.0,
        "description": "War of the Worlds Broadcast (+3.0%). Orson Welles hacked the news format. Mass panic. It proved the vulnerability of the population to 'Fake News.' The Poles gave the Enigma secret to the British/French. The 'Relay' of intelligence.",
        "key_manifestations": [
          "War of the Worlds broadcast (Event)",
          "Pyry meeting (Poles hand over Enigma) (Event)",
          "Zuse Z2 (Tech Event)",
          "Discovery of Nuclear Fission (Info about matter)"
        ]
      },
      "1939": {
        "variance_explained": 90.0,
        "description": "Bletchley Park opened (+5.0%). The Codebreakers gathered. Turing designed the 'Bombe' to break the new Enigma. The 'Battle of the Beams' began\u2014radio navigation wars. The war was fought in the spectrum.",
        "key_manifestations": [
          "Bletchley Park operational (Institutional Event)",
          "Turing-Welchman Bombe design (Tech Event)",
          "Oslo Report (Leak of German tech info)",
          "Finnegans Wake (Encoded language)"
        ]
      },
      "1940": {
        "variance_explained": 95.0,
        "description": "Radar won the Battle of Britain (+5.0%). Dowding System. C3I. The inputs (Radar/Observer) went to the Filter Room, then to the Squadrons. An analog internet of defense. Churchill: 'The Wizard War.'",
        "key_manifestations": [
          "Battle of Britain (Radar decisive)",
          "Tizard Mission (Tech transfer to US)",
          "The Great Dictator (Satire of propaganda)",
          "Breaking of Luftwaffe Enigma (Event)"
        ]
      },
      "1941": {
        "variance_explained": 98.0,
        "description": "Zuse Z3 (First functional program-controlled computer) (+3.0%). Pearl Harbor (Intel failure\u2014Magic intercepted, but not processed in time). The 'Signal to Noise' was fatal. Radar at Pearl Harbor saw the planes, but the human filter failed.",
        "key_manifestations": [
          "Zuse Z3 operational (Tech Event)",
          "Pearl Harbor (Intel failure)",
          "Borges' The Library of Babel (Story - infinite info)",
          "Citizen Kane (Media manipulation)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "Midway (+2.0%). Won by breaking JN-25. Rochefort fake message about 'fresh water.' Information warfare bait. The US knew the target. Hedy Lamarr patented 'Frequency Hopping' (spread spectrum)\u2014secure comms.",
        "key_manifestations": [
          "Battle of Midway (Crypto victory)",
          "Lamarr-Antheil Patent (Tech Event)",
          "Asimov's Foundation (Psychohistory as data prediction)",
          "Manhattan Project (The ultimate physics calculation)"
        ]
      },
      "1943": {
        "variance_explained": 100.0,
        "description": "Colossus Mark 1 (+0.0%). First electronic programmable computer. Built to break 'Tunny' (Hitler's teleprinter). It read 5,000 characters a second. Cybernetics (Wiener) work began on anti-aircraft guns (predicting the future position).",
        "key_manifestations": [
          "Colossus operational (Tech Event)",
          "McCulloch-Pitts Neuron (Neural net theory)",
          "Operation Mincemeat (Disinformation - The Man Who Never Was)",
          "Philadelphia Experiment myth (Invisibility)"
        ]
      },
      "1944": {
        "variance_explained": 100.0,
        "description": "D-Day Deception (Fortitude) (+0.0%). The 'Ghost Army.' Radio traffic simulation. They convinced Hitler the attack was at Pas de Calais. Information beat Armor. Von Neumann joined the Manhattan Project to calculate implosion lenses.",
        "key_manifestations": [
          "Operation Fortitude (Event)",
          "Mark I Computer at Harvard (Tech Event)",
          "Schr\u00f6dinger's What Is Life? (DNA as code)",
          "V-2 Rocket (Guidance systems)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "The Atomic Bomb (+0.0%). A physics equation realized. Vannevar Bush published *As We May Think*\u2014predicting the 'Memex' (Hypertext/Internet). The war ended, but the Computer remained. The ENIAC was completed (secretly).",
        "key_manifestations": [
          "As We May Think (Essay)",
          "ENIAC operational (Tech Event)",
          "Trinity Test (Event)",
          "Report on the EDVAC (Von Neumann Architecture)"
        ]
      },
      "1946": {
        "variance_explained": 95.0,
        "description": "ENIAC revealed (-5.0% Kinetic, +Civilian). The 'Giant Brain.' The world saw the computer. The 'Iron Curtain' speech was a definition of information boundaries. The NSA's predecessor (AFSA) struggled to centralize.",
        "key_manifestations": [
          "ENIAC public reveal (Tech Event)",
          "Mauchly and Eckert found UNIVAC (Business Event)",
          "Project Venona (Decrypting Soviet spies)",
          "Borges' On Exactitude in Science (Map = Territory)"
        ]
      },
      "1947": {
        "variance_explained": 90.0,
        "description": "The Transistor (+5.0%). Shockley/Bardeen/Brattain at Bell Labs. The vacuum tube was dead. Miniaturization began. The CIA was founded\u2014centralized intelligence. The 'Roswell' incident was a weather balloon (Project Mogul - acoustic sensing of Soviet nukes) covered up.",
        "key_manifestations": [
          "Invention of the Transistor (Tech Event)",
          "Founding of CIA (Institutional Event)",
          "Project Mogul (Tech Event)",
          "Horkheimer's Eclipse of Reason (Philosophy)"
        ]
      },
      "1948": {
        "variance_explained": 95.0,
        "description": "Shannon's *A Mathematical Theory of Communication* (+5.0%). The Bit. Information Theory defined. Cybernetics (Wiener) published. The feedback loop. The Manchester Baby (first stored-program computer) ran. The Digital Age was theoretically and physically born.",
        "key_manifestations": [
          "Shannon's Information Theory paper (Science)",
          "Wiener's Cybernetics (Book)",
          "Manchester Baby runs code (Tech Event)",
          "1984 (The telescreen)"
        ]
      },
      "1949": {
        "variance_explained": 92.0,
        "description": "1984 published (-3.0%). The dystopian vision of information control. 'Newspeak'\u2014controlling thought by controlling code. The Soviet Bomb was detected by air sampling (Long Range Detection)\u2014remote sensing.",
        "key_manifestations": [
          "1984 published (Book)",
          "EDSAC operational (Tech Event)",
          "Soviet Bomb detected (Event)",
          "The Third Man (Film - black market info)"
        ]
      },
      "1950": {
        "variance_explained": 95.0,
        "description": "Turing Test proposed (+3.0%). *Computing Machinery and Intelligence*. Can a machine think? The Korean War began with a surprise (Intel failure again). The NSA was about to be formed (1952) to ensure no more surprises. The 'Bug' was discovered in the Great Seal in Moscow (The Thing)\u2014passive listening.",
        "key_manifestations": [
          "Turing's 'Computing Machinery and Intelligence' (Paper)",
          "Discovery of 'The Thing' (Tech Event)",
          "Dianetics (Mind as computer to be debugged)",
          "I, Robot (Asimov - rules of robotics)"
        ]
      }
    }
  },
  "7_colonial_asymmetric_policing": {
    "name": "Colonial Asymmetric Policing (The Savage Wars of Peace)",
    "description": "This eigencluster defines the application of industrial military technology and administrative violence against non-state or pre-industrial actors. It is the doctrine of 'Imperial Pacification.' It encompasses the transition from the romanticized 'frontier' wars of the 19th century to the systematized brutality of the 20th. Key elements include the 'punitive expedition,' the concentration camp (invented for colonial control), 'Air Control' (bombing villages for taxes), and the racialization of violence where the laws of war were suspended for 'uncivilized' combatants. This cluster served as the laboratory for the totalitarian methods later applied within Europe.",
    "trajectory": {
      "1890": {
        "variance_explained": 12.0,
        "description": "Wounded Knee (+2.0%). The closing of the American Frontier. The massacre was the industrialized endpoint of settler colonialism\u2014Hotchkiss guns vs. Ghost Shirts. In Africa, the 'Scramble' was in full swing. The 'Punitive Expedition' was the standard unit of variance: a sharp, brutal policing action to enforce trade or sovereignty.",
        "key_manifestations": [
          "Wounded Knee Massacre (Event)",
          "The Sign of Four (Novel - colonial blowback theme)",
          "Heligoland-Zanzibar Treaty (Diplomatic Event)",
          "Stanley's In Darkest Africa (Book - imperial voyeurism)"
        ]
      },
      "1891": {
        "variance_explained": 12.5,
        "description": "The Hunza-Nagar Campaign (+0.5%). The 'Great Game' in the Himalayas. British forces storming high passes. It reinforced the 'Imperial Hero' archetype. The logic was 'prestige': the Empire must never lose, or the subjects will rebel everywhere. French expansion in West Africa accelerated.",
        "key_manifestations": [
          "Hunza-Nagar Campaign (Event)",
          "Kipling's Life's Handicap (Stories)",
          "Construction of the Trans-Siberian Railway (Infrastructure of control)",
          "German East Africa colonization efforts (Event)"
        ]
      },
      "1892": {
        "variance_explained": 13.0,
        "description": "The Ijebu Expedition (+0.5%). Maxim guns used to slaughter Nigerian forces. The 'Square' formation. The disparity in casualties (dozens vs thousands) confirmed the 'technological asymmetry' as a law of nature. The cultural variance was high as the press celebrated these 'easy' victories as moral triumphs.",
        "key_manifestations": [
          "Ijebu Expedition (Event)",
          "Kipling's Barrack-Room Ballads (Poetry - 'Fuzzy-Wuzzy')",
          "Johnson County War (US internal policing/vigilantism)",
          "Dahomey War begins (Event)"
        ]
      },
      "1893": {
        "variance_explained": 14.0,
        "description": "The First Matabele War (+1.0%). The Shangani Patrol\u2014a rare defeat that was mythologized as a 'Last Stand.' However, the Maxim gun was the real story: 50 soldiers holding off 5,000 warriors. The business of empire (Cecil Rhodes' British South Africa Company) was privatized war.",
        "key_manifestations": [
          "Shangani Patrol (Event)",
          "Battle of the Shangani (Event - Maxim gun dominance)",
          "Turner's 'Frontier Thesis' (Intellectual Event)",
          "Franco-Siamese War (Gunboat diplomacy)"
        ]
      },
      "1894": {
        "variance_explained": 14.5,
        "description": "The Dutch conquest of Lombok (+0.5%). The 'Puputan' (mass ritual suicide) of the Balinese royalty in the face of Dutch fire. It illustrated the collision of 'Honor' (indigenous) vs 'Administration' (colonial). The cluster absorbed the trauma of total destruction as a policing tool.",
        "key_manifestations": [
          "Lombok Expedition (Event)",
          "Kipling's The Jungle Book (Colonial tutelage allegory)",
          "Uganda becomes a Protectorate (Legal Event)",
          "Battle of Dongola (Event)"
        ]
      },
      "1895": {
        "variance_explained": 15.0,
        "description": "The Jameson Raid (-1.0% Success, +Shock). A failed privateer coup in the Transvaal. It showed the limits of 'freelance' imperialism. The Cuban War of Independence began\u2014Spain invented the 'Reconcentrado' (concentration camp) system to separate guerrillas from civilians. The methodology of total control was born here.",
        "key_manifestations": [
          "Jameson Raid (Event)",
          "Cuban War of Independence (Event)",
          "Weyler's Reconcentrado policy (Policy Event)",
          "Formosa Campaign (Japanese colonial policing)"
        ]
      },
      "1896": {
        "variance_explained": 16.0,
        "description": "Battle of Adwa (-3.0% Western Dominance, +Asymmetric Shock). Ethiopia defeated Italy. A modern European army annihilated. It shattered the 'Invincibility' myth of the cluster. It proved that if the 'native' acquired rifles and organization, the asymmetry vanished. It terrified every colonial office.",
        "key_manifestations": [
          "Battle of Adwa (Event)",
          "Anglo-Zanzibar War (38 minutes - the shortest war, pure tech dominance)",
          "Matabele Rebellion (Second War) (Event)",
          "The Island of Doctor Moreau (Novel - ruling the beasts)"
        ]
      },
      "1897": {
        "variance_explained": 16.5,
        "description": "Tirah Campaign (+0.5%). The Northwest Frontier. Gordon Highlanders storming Dargai. The 'Pashtun' enemy was defined as the 'martial race'\u2014a worthy opponent for the sport of war. The 'Dum-Dum' bullet was developed to stop 'fanatical' charges\u2014technology adapted for racialized violence.",
        "key_manifestations": [
          "Tirah Campaign (Event)",
          "Development of the Dum-Dum bullet (Tech Event)",
          "Diamond Jubilee (Celebration of the result of this cluster)",
          "Conrad's The Nigger of the 'Narcissus' (Novel)"
        ]
      },
      "1898": {
        "variance_explained": 18.0,
        "description": "Omdurman (+2.0%). The peak of the cluster. Kitchener's army killed 10,000 Dervishes for the loss of 47 men. It was an execution, not a battle. Churchill wrote: 'The machinery of scientific destruction.' The Fashoda Incident showed two colonial policing powers colliding.",
        "key_manifestations": [
          "Battle of Omdurman (Event)",
          "Fashoda Incident (Event)",
          "US annexation of Philippines (Strategic Event)",
          "War of the Worlds (Wells explicitly compares Martians to British in Tasmania)"
        ]
      },
      "1899": {
        "variance_explained": 20.0,
        "description": "The Philippine-American War and Boer War (+2.0%). The US adopted the 'Water Cure' (torture) and 'Hamletting' (camps) in the Philippines. Kipling wrote *The White Man's Burden* to urge the US to take up this cluster. In South Africa, the Boers (white) were treated like colonial insurgents, shocking the European conscience.",
        "key_manifestations": [
          "The White Man's Burden (Poem)",
          "Battle of Tirad Pass (Event)",
          "Boer War 'Black Week' (Event)",
          "Hague Convention (Banned expanding bullets in 'civilized' war only)"
        ]
      },
      "1900": {
        "variance_explained": 22.0,
        "description": "The Boxer Rebellion (+2.0%). The 'Yellow Peril' mobilized. The Eight Nation Alliance engaged in indiscriminate looting and punitive executions ('decapitations'). It was a 'Police Action' on a civilizational scale. The 'Hun Speech' by Kaiser Wilhelm ('Make the name German remembered like the Huns') explicitly authorized terror.",
        "key_manifestations": [
          "Relief of Peking (Event)",
          "The Hun Speech (Rhetoric)",
          "Lord Jim (Novel - colonial guilt)",
          "Battle of Paardeberg (Boer War - grinding attrition)"
        ]
      },
      "1901": {
        "variance_explained": 23.0,
        "description": "Kitchener's Blockhouse System (+1.0%). Grid-mapping the veldt. Barbed wire and camps. The industrialization of counter-insurgency. The death rate in the camps (26,000 women/children) caused a scandal (Emily Hobhouse), but the method *worked* to break the guerrilla will.",
        "key_manifestations": [
          "Emily Hobhouse report (Political Event)",
          "Capture of Aguinaldo (Event - decapitation strike)",
          "Kim (Novel - the intelligence side of policing)",
          "Insular Cases (US Supreme Court - constitution does not follow flag)"
        ]
      },
      "1902": {
        "variance_explained": 21.0,
        "description": "End of Boer/Philippine Wars (-2.0% Kinetic, +Doctrine). The lessons were codified: Heavy columns fail; mobility and separation of civilians succeed. The US declared victory but continued fighting 'Moros' in the south (Islamic insurgency) with .45 caliber pistols designed to stop 'juramentados.'",
        "key_manifestations": [
          "Treaty of Vereeniging (Event)",
          "Heart of Darkness published (Book - the psychological cost)",
          "Hobson's Imperialism (Book - the economic critique)",
          "Battle of Bayan (Moro Rebellion)"
        ]
      },
      "1903": {
        "variance_explained": 22.0,
        "description": "The Herero Uprising (+1.0%). Germany in South-West Africa. General von Trotha issued the 'Vernichtungsbefehl' (Extermination Order). This was the first explicit state genocide of the century. The desert was weaponized to starve the population. It was the cluster turning from 'Policing' to 'Erasure.'",
        "key_manifestations": [
          "Herero Wars begin (Event)",
          "British expedition to Tibet (Younghusband) (Event - machine guns vs monks)",
          "The Call of the Wild (Novel)",
          "Casement Report on Congo (Human rights investigation)"
        ]
      },
      "1904": {
        "variance_explained": 24.0,
        "description": "The Shark Island Concentration Camp (+2.0%). Eugenics entered the cluster. Racial science experiments on Herero prisoners. The explicit link between colonial violence and racial theory. In the Congo, the rubber terror peaked\u2014amputated hands as currency of control.",
        "key_manifestations": [
          "Battle of Waterberg (Event)",
          "Von Trotha's Extermination Order (Document)",
          "Nostromo (Novel)",
          "Congo Reform Association formed (Institutional Event)"
        ]
      },
      "1905": {
        "variance_explained": 25.0,
        "description": "Maji Maji Rebellion (+1.0%). German East Africa. 'Magic water' vs Machine guns. The Germans used a 'scorched earth' famine strategy, killing up to 300,000. It proved that 'administration' could be more lethal than battle. The cluster was maximizing lethality to minimize garrison costs.",
        "key_manifestations": [
          "Maji Maji Rebellion begins (Event)",
          "Partition of Bengal (Administrative policing)",
          "Japan establishes protectorate over Korea (Policing a fellow empire)",
          "Professor Challenger stories (Lost World genre)"
        ]
      },
      "1906": {
        "variance_explained": 23.0,
        "description": "The Battle of Bud Dajo (+-0% Saturation). US troops massacred 600 Moros (men, women, children) in a volcano crater. Mark Twain wrote bitterly about it. It showed the persistence of 'exterminatory' tactics in liberal empire. The 'Dinshaway Incident' in Egypt (hanging peasants for pigeon hunting dispute) radicalized Egyptian nationalism.",
        "key_manifestations": [
          "Battle of Bud Dajo (Event)",
          "Dinshaway Incident (Event)",
          "Bambatha Rebellion (Zulu tax revolt)",
          "White Fang (Novel)"
        ]
      },
      "1907": {
        "variance_explained": 20.0,
        "description": "Stasis (-3.0%). The major wars ended. The focus shifted to 'Consolidation.' The 'Colour Bar' was institutionalized in South Africa. Police forces replaced armies. The 'Native' was now a unit of labor to be managed by passbooks, not just a target.",
        "key_manifestations": [
          "The Secret Agent (Novel)",
          "Heidelberg School of racial hygiene (Intellectual Event)",
          "Anglo-Russian Convention (Dividing Persia)",
          "Establishment of the Scout Movement (Imperial training)"
        ]
      },
      "1908": {
        "variance_explained": 18.0,
        "description": "Belgian state takes over Congo (-2.0%). The end of Leopold's private fiefdom. An attempt to 'humanize' the cluster through bureaucracy. However, the structures of extraction remained. In Morocco, the French Foreign Legion fought the 'Pacification'\u2014romanticized in film later, but brutal in reality.",
        "key_manifestations": [
          "Annexation of the Congo by Belgium (Event)",
          "Young Turk Revolution (Internal imperial policing)",
          "Scouting for Boys (Book)",
          "Casablanca clashes (Event)"
        ]
      },
      "1909": {
        "variance_explained": 18.0,
        "description": "Stasis. The 'Tragic Week' in Barcelona\u2014riots against conscription for the Moroccan War. The working class at home refused to die for the colonial cluster. This was a crack in the imperial consensus. Gandhi wrote *Hind Swaraj*\u2014proposing 'Soul Force' as the asymmetric counter to 'Brute Force.'",
        "key_manifestations": [
          "Tragic Week in Barcelona (Event)",
          "Hind Swaraj by Gandhi (Book)",
          "Ghost in the Machine concept (Ryle later, but roots here)",
          "Peary reaches North Pole (Imperial mapping)"
        ]
      },
      "1910": {
        "variance_explained": 17.0,
        "description": "Union of South Africa formed (-1.0%). The Boer War enemies united to police the Black majority. The 'apartheid' infrastructure was laid. Japan annexed Korea formally, launching a harsh 'assimilation' policing campaign (erasing names/language).",
        "key_manifestations": [
          "Formation of the Union of South Africa (Event)",
          "Japan annexes Korea (Event)",
          "Howards End (Novel - Imperial wealth in the background)",
          "Mexican Revolution (Breakdown of the Porfiriato policing)"
        ]
      },
      "1911": {
        "variance_explained": 20.0,
        "description": "Italian Invasion of Libya (+3.0%). The first use of Air Power for colonial policing. Bombing oasis towns. It was a 'Terror' weapon. The Ottomans organized Arab resistance, foreshadowing the asymmetric wars of the future. The 'Agadir Crisis' was a dispute over who got to police Morocco.",
        "key_manifestations": [
          "Italian invasion of Libya (Event)",
          "First aerial bomb dropped (Event)",
          "Agadir Crisis (Event)",
          "Fantomas (Urban terror fiction)"
        ]
      },
      "1912": {
        "variance_explained": 22.0,
        "description": "Treaty of Fez (+2.0%). Morocco became a French Protectorate. Lyautey's 'Oil Spot' strategy (tache d'huile)\u2014spread order slowly from secure centers. A sophisticated doctrine of 'hearts and minds' mixed with heavy artillery.",
        "key_manifestations": [
          "Treaty of Fez (Event)",
          "Lyautey appointed Resident-General (Bio Event)",
          "Tarzan of the Apes (Novel - the white overlord fantasy)",
          "African National Congress founded (Political Event)"
        ]
      },
      "1913": {
        "variance_explained": 20.0,
        "description": "Stasis (-2.0%). The Balkans exploded (Europe's internal colony). The focus shifted. However, the 'Natives Land Act' in South Africa dispossessed the black population\u2014policing by geography/zoning. The ultimate asymmetric weapon: Law.",
        "key_manifestations": [
          "Natives Land Act 1913 (Legal Event)",
          "Sons and Lovers (Novel)",
          "Battle of Bizani (Balkan War)",
          "Rabindranath Tagore wins Nobel (Cultural recognition of the 'subject')"
        ]
      },
      "1914": {
        "variance_explained": 15.0,
        "description": "The Great War (-5.0%). The cluster inverted. Colonial troops (Senegalese, Indians, Anzacs) were brought to Europe to police the trenches. The 'Savage' was now the savior. In the colonies, the German Empire was rolled up (Togoland, Kamerun) with relative ease, except for Lettow-Vorbeck in East Africa who waged a brilliant asymmetric guerrilla war *against* the British.",
        "key_manifestations": [
          "Battle of Tanga (Lettow-Vorbeck defeats British)",
          "Indian Corps arrives in France (Event)",
          "Komagata Maru incident (Policing migration)",
          "Dubliners (Stories)"
        ]
      },
      "1915": {
        "variance_explained": 15.0,
        "description": "Stasis. The Armenian Genocide (see Cluster 5) used 'deportation' methods honed in colonial wars. In Gallipoli, the ANZAC myth was born\u2014settler colonies forging identity through blood. The 'Senegalese Tirailleurs' were used as shock troops in France, exploiting the 'martial race' theory.",
        "key_manifestations": [
          "Gallipoli Campaign (Event)",
          "Chilembwe uprising in Nyasaland (Anti-colonial revolt)",
          "The Thirty-Nine Steps (Novel)",
          "McMahon-Hussein Correspondence (Promising empire to Arabs)"
        ]
      },
      "1916": {
        "variance_explained": 18.0,
        "description": "Arab Revolt (+3.0%). T.E. Lawrence. Asymmetric warfare weaponized *against* an Empire (Ottoman). Blowing up trains. The doctrine of the guerrilla was codified: 'mobility, security, time, and doctrine.' It was the anti-police action. The Easter Rising in Ireland brought colonial policing methods (martial law, executions) to Dublin.",
        "key_manifestations": [
          "Arab Revolt begins (Event)",
          "Easter Rising (Event)",
          "Sykes-Picot Agreement (Secret partition)",
          "Greenmantle by Buchan (Novel - Jihad plot)"
        ]
      },
      "1917": {
        "variance_explained": 15.0,
        "description": "Stasis. The Balfour Declaration promised Palestine. A future policing nightmare was created by a single document. In India, the 'Ghadr Mutiny' was suppressed. The empire was straining under the load of Total War.",
        "key_manifestations": [
          "Balfour Declaration (Diplomatic Event)",
          "Capture of Jerusalem (Event)",
          "Passage to India (Writing begins)",
          "Zimmerman Telegram (Colonial bait)"
        ]
      },
      "1918": {
        "variance_explained": 12.0,
        "description": "Wilson's 14 Points (-3.0%). 'Self-Determination.' A displacing force. It delegitimized the cluster. Egyptians, Indians, and Koreans heard 'freedom.' The victors intended it only for Europeans. This dissonance set the stage for the post-war explosion.",
        "key_manifestations": [
          "14 Points Speech (Rhetoric)",
          "Anglo-French Declaration (Promise of liberation)",
          "Decline of the West (Book)",
          "Destour party founded in Tunisia (Political Event)"
        ]
      },
      "1919": {
        "variance_explained": 25.0,
        "description": "Amritsar and the Somaliland Bombing (+13.0%). The Empire struck back. General Dyer massacred 400 civilians at Jallianwala Bagh to 'produce a moral effect.' It destroyed the moral legitimacy of the Raj. In Somaliland, the RAF crushed the 'Mad Mullah' in weeks using planes\u2014the invention of 'Air Control.' Cheap, lethal, distant.",
        "key_manifestations": [
          "Jallianwala Bagh massacre (Event)",
          "RAF Somaliland Campaign (Event)",
          "Egyptian Revolution of 1919 (Event)",
          "Treaty of Versailles (Mandate system - colonialism rebranded)"
        ]
      },
      "1920": {
        "variance_explained": 28.0,
        "description": "The Iraqi Revolt (+3.0%). 'Air Control' applied on a massive scale. Churchill (Colonial Secretary) authorized the use of gas (tear/mustard mix debated) and persistent bombing of tribes. It was the first war won primarily by air policing. The 'Black and Tans' in Ireland conducted a brutal counter-insurgency\u2014reprisals, burning towns (Cork).",
        "key_manifestations": [
          "Iraqi Revolt (Event)",
          "Burning of Cork (Event)",
          "San Remo Conference (Mandates finalized)",
          "Women in Love (Novel)"
        ]
      },
      "1921": {
        "variance_explained": 30.0,
        "description": "Battle of Annual (+2.0%). The Rif War. Abd el-Krim's Rifians annihilated a Spanish army (13,000 dead). It was Adwa with machine guns. A modern colonial army destroyed by guerrillas. It shocked Europe. It forced the French to intervene with massive force.",
        "key_manifestations": [
          "Battle of Annual (Event)",
          "Cairo Conference (Formalizing Air Control)",
          "The Sheik (Film - orientalist fantasy)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 28.0,
        "description": "Independence of Egypt/Ireland (-2.0%). Limited sovereignty. The policing shifted to 'Indirect Rule.' The British stayed in the Suez Zone. In India, Gandhi called off the Non-Cooperation Movement after Chauri Chaura (violence)\u2014policing the *movement* from within.",
        "key_manifestations": [
          "Unilateral Declaration of Egyptian Independence (Event)",
          "Chauri Chaura incident (Event)",
          "Seven Pillars of Wisdom (Private printing)",
          "Ulysses (Book - post-colonial language)"
        ]
      },
      "1923": {
        "variance_explained": 25.0,
        "description": "End of the Ottoman Empire (-3.0%). The Treaty of Lausanne. Turkey fought a war of independence and won, escaping colonial partition. A beacon for the cluster's victims. The French occupation of the Ruhr was a 'colonial' policing action applied to Germany\u2014extracting coal at bayonet point.",
        "key_manifestations": [
          "Treaty of Lausanne (Event)",
          "French Occupation of the Ruhr (Event)",
          "A Passage to India (Novel)",
          "Interpol founded (International policing)"
        ]
      },
      "1924": {
        "variance_explained": 25.0,
        "description": "Stasis. The Rif War escalated. The French deployed 160,000 troops, tanks, and planes against the Rif. It was a major war disguised as a police action. Marshal Petain took command\u2014the victor of Verdun applying industrial warfare to Berber tribes.",
        "key_manifestations": [
          "Petain takes command in Morocco (Event)",
          "The Magic Mountain (Novel)",
          "Billy Budd (published posthumously)",
          "Caliphate abolished (Event)"
        ]
      },
      "1925": {
        "variance_explained": 28.0,
        "description": "Bombardment of Damascus (+3.0%). The Great Syrian Revolt. The French shelled the ancient city to suppress rebels. 'Urban Pacification' by artillery. It demonstrated the hollowness of the 'Mandate' (trusteeship) concept. The Rif War ended with the use of chemical weapons (mustard gas) by Spain.",
        "key_manifestations": [
          "Great Syrian Revolt (Event)",
          "Spanish amphibious landing at Al Hoceima (First modern combined op)",
          "The Great Gatsby (Novel)",
          "Josephine Baker in Paris (Cultural - The 'Exotic' celebrated while bombed)"
        ]
      },
      "1926": {
        "variance_explained": 25.0,
        "description": "Defeat of Abd el-Krim (-3.0%). The Republic of the Rif was crushed. Order restored. The 'Pacification' of Morocco continued. In China, the Northern Expedition began\u2014a nationalist war to end the 'Unequal Treaties' and warlordism.",
        "key_manifestations": [
          "Surrender of Abd el-Krim (Event)",
          "Seven Pillars of Wisdom published (Book)",
          "The Sun Also Rises (Novel)",
          "General Strike in UK (Domestic policing)"
        ]
      },
      "1927": {
        "variance_explained": 22.0,
        "description": "The Simon Commission in India (-3.0%). A commission on reform with no Indians. It sparked massive protests. The policing was political: 'divide and rule.' The 'Red Line' agreement divided Middle East oil\u2014the new motive for the cluster.",
        "key_manifestations": [
          "Simon Commission protests (Event)",
          "Red Line Agreement (Economic Event)",
          "Metropolis (Film)",
          "Kellogg-Briand Pact negotiations (Excluding colonial wars)"
        ]
      },
      "1928": {
        "variance_explained": 20.0,
        "description": "Stasis. The Muslim Brotherhood founded in Egypt. A reaction to cultural colonization. The 'policing' of values. In Nicaragua, the US Marines hunted Sandino\u2014an early 'small war' against a leftist guerrilla.",
        "key_manifestations": [
          "Founding of Muslim Brotherhood (Event)",
          "Sandino's rebellion (Event)",
          "Lady Chatterley's Lover (Novel)",
          "Red Star Over China (Mao's rise beginning)"
        ]
      },
      "1929": {
        "variance_explained": 22.0,
        "description": "Palestine Riots (+2.0%). The Wailing Wall riots. The British police lost control. The Arab-Jewish conflict turned violent. The cluster was trapped in the middle of two nationalisms. In Nigeria, the 'Women's War' (Aba Riots)\u2014women protested taxation; the British opened fire.",
        "key_manifestations": [
          "1929 Palestine riots (Event)",
          "Aba Women's Riots (Event)",
          "Goodbye to All That (Book)",
          "Black Friday (Economic crash)"
        ]
      },
      "1930": {
        "variance_explained": 25.0,
        "description": "The Salt March (+3.0%). Gandhi's asymmetric masterstroke. Non-violent resistance. The police beating non-resisting marchers destroyed the moral authority of the Raj. It was 'Jiu-Jitsu' applied to empire. The British response was mass imprisonment (60,000)\u2014policing by warehousing.",
        "key_manifestations": [
          "Salt March (Event)",
          "Dharasana Satyagraha (Event)",
          "Civilization and Its Discontents (Book)",
          "Passage of the Smoot-Hawley Tariff (Economic autarky)"
        ]
      },
      "1931": {
        "variance_explained": 28.0,
        "description": "Mukden Incident (+3.0%). Japan in Manchuria. 'Bandit suppression.' Japan adopted the language of Western colonial policing to justify conquest. They created 'Manchukuo'\u2014a puppet state. The West condemned it, but hypocritically.",
        "key_manifestations": [
          "Invasion of Manchuria (Event)",
          "Statute of Westminster (White dominions gain freedom)",
          "The Good Earth (Novel)",
          "Colonial Exhibition in Paris (The spectacle of empire)"
        ]
      },
      "1932": {
        "variance_explained": 30.0,
        "description": "Pacification of Libya completed (+2.0%). Graziani built a wire fence along the border and put the Bedouin in camps. The 'Lion of the Desert' (Omar Mukhtar) hanged. Genocide by concentration. It was the Nazi blueprint. In El Salvador, 'La Matanza'\u2014massacre of 30,000 peasants/indigenous.",
        "key_manifestations": [
          "Execution of Omar Mukhtar (Event)",
          "La Matanza in El Salvador (Event)",
          "Brave New World (Novel)",
          "Chaco War (Post-colonial border war)"
        ]
      },
      "1933": {
        "variance_explained": 28.0,
        "description": "US Marines leave Nicaragua (-2.0%). The 'Good Neighbor Policy.' A shift from military policing to economic hegemony (Dollar Diplomacy). Sandino assassinated by the National Guard (proxy policing).",
        "key_manifestations": [
          "US withdrawal from Nicaragua (Event)",
          "King Kong (Film - the beast in chains)",
          "Man's Fate (Novel - Shanghai insurrection)",
          "Dachau opens (The colonial method comes home)"
        ]
      },
      "1934": {
        "variance_explained": 25.0,
        "description": "The Long March begins (-3.0%). The KMT tried to 'police' the Communists to death. Mao escaped. It was a mobile strategic retreat. In India, the Bihar earthquake\u2014the Raj failed to respond effectively, weakening authority.",
        "key_manifestations": [
          "The Long March begins (Event)",
          "Burmese Days by Orwell (Book - rot of empire)",
          "Tender is the Night (Novel)",
          "Italian provocation in Walwal (Event)"
        ]
      },
      "1935": {
        "variance_explained": 35.0,
        "description": "Invasion of Ethiopia (+10.0%). The last great colonial war. Italy used poison gas (Mustard/Phosgene) against civilians and Red Cross hospitals. It was a 'war of civilization' fought with exterminatory methods. The League of Nations failed to stop it. The Black global diaspora mobilized in protest.",
        "key_manifestations": [
          "Invasion of Ethiopia (Event)",
          "Use of chemical weapons in Ethiopia (Event)",
          "Government of India Act 1935 (Failed federalism)",
          "Mulatto (Play by Langston Hughes)"
        ]
      },
      "1936": {
        "variance_explained": 32.0,
        "description": "Arab Revolt in Palestine (+-3.0%). A massive insurgency. The British deployed 20,000 troops. Used 'human shields' on trains. Night squads (Orde Wingate) taught Jewish settlers counter-insurgency tactics. The laboratory for the Israeli Defense Forces.",
        "key_manifestations": [
          "Arab Revolt in Palestine begins (Event)",
          "Wingate's Special Night Squads (Event)",
          "End of the occupation of the Rhineland (Event)",
          "Gone with the Wind (Novel - nostalgia for a slave order)"
        ]
      },
      "1937": {
        "variance_explained": 35.0,
        "description": "Rape of Nanking (+3.0%). Japanese 'policing' turned into an orgy of violence. The 'Three Alls Policy' (Kill all, burn all, loot all) later. It was colonial discipline collapsed into sadism. In the Caribbean, labor riots broke out\u2014the empire rocking from within.",
        "key_manifestations": [
          "Rape of Nanking (Event)",
          "Peel Commission Report (Partition proposed)",
          "The Road to Wigan Pier (Book - poverty at home)",
          "Their Eyes Were Watching God (Novel)"
        ]
      },
      "1938": {
        "variance_explained": 30.0,
        "description": "Stasis. The British suppressed the Arab Revolt with extreme ruthlessness. 10% of the adult male Arab population killed, wounded, or imprisoned. The 'White Paper' of 1939 was the political concession\u2014limiting Jewish immigration.",
        "key_manifestations": [
          "Munich Agreement (Ignoring the colonies)",
          "Nausea (Novel)",
          "Publication of The Black Jacobins (CLR James - history of slave revolt)",
          "Kristallnacht (Internal colonization of the Jew)"
        ]
      },
      "1939": {
        "variance_explained": 25.0,
        "description": "World War II (-5.0%). The cluster was subsumed. The 'Colonial' became the 'Strategic.' However, the Nazi 'Generalplan Ost' was essentially a colonial policing plan for Eastern Europe\u2014treating Slavs as 'Africans' to be enslaved/displaced.",
        "key_manifestations": [
          "White Paper of 1939 (Policy)",
          "Generalplan Ost formulated (Policy)",
          "The Grapes of Wrath (Novel)",
          "Invasion of Poland (Event)"
        ]
      },
      "1940": {
        "variance_explained": 20.0,
        "description": "Fall of Empires (-5.0%). France fell; Indochina occupied by Japan. The 'White Prestige' shattered. Japan claimed to be the 'Liberator' (Greater East Asia Co-Prosperity Sphere). It was a new colonialism disguised as anti-colonialism.",
        "key_manifestations": [
          "Japanese occupation of Indochina (Event)",
          "Native Son (Novel)",
          "Fall of France (Event)",
          "Churchill's 'Finest Hour' (Ignoring the empire's crack)"
        ]
      },
      "1941": {
        "variance_explained": 20.0,
        "description": "The Atlantic Charter (+0.0%). Roosevelt forced Churchill to sign a document respecting 'the right of all peoples to choose the form of government.' Churchill thought it meant Europe; the colonies knew it meant them. The 'Quit India' movement prepared to launch.",
        "key_manifestations": [
          "Atlantic Charter (Diplomatic Event)",
          "Invasion of Malaya (Event)",
          "Pearl Harbor (Event)",
          "Borges' The Garden of Forking Paths (Story)"
        ]
      },
      "1942": {
        "variance_explained": 25.0,
        "description": "Fall of Singapore (+5.0%). The greatest disaster in British military history. Asian troops marched British prisoners away. The racial hierarchy collapsed visually. The 'Quit India' movement began\u2014mass policing required to suppress it while fighting Japan. 100,000 arrests.",
        "key_manifestations": [
          "Fall of Singapore (Event)",
          "Quit India Movement (Event)",
          "The Stranger (Novel - murder of the Arab)",
          "Kokoda Track (Colonial territory defense)"
        ]
      },
      "1943": {
        "variance_explained": 28.0,
        "description": "Bengal Famine (+3.0%). 3 million dead. A result of 'Denial Policy' (scorched earth against Japan) and shipping prioritization. It was a passive massacre by administration. The Empire chose to let its subjects starve to feed the war machine. The 'Partisan' war in Europe (Yugoslavia/France) adopted colonial methods.",
        "key_manifestations": [
          "Bengal Famine (Event)",
          "Warsaw Ghetto Uprising (Colonial revolt in Europe)",
          "Cairo Declaration (stripping Japan of colonies)",
          "A Tree Grows in Brooklyn (Novel)"
        ]
      },
      "1944": {
        "variance_explained": 25.0,
        "description": "Brazzaville Conference (-3.0%). De Gaulle promised reform to keep the African colonies loyal. 'Assimilation' renewed. No independence. In Algeria, the S\u00e9tif feelings were brewing. The 'Stern Gang' in Palestine assassinated Lord Moyne\u2014terror coming home.",
        "key_manifestations": [
          "Brazzaville Conference (Event)",
          "Assassination of Lord Moyne (Event)",
          "Invisible Man (Ellison writing)",
          "Battle of Imphal/Kohima (Indian army victory)"
        ]
      },
      "1945": {
        "variance_explained": 35.0,
        "description": "S\u00e9tif and Haiphong (+10.0%). VE Day. While Europe celebrated, the French massacred 6,000-30,000 Algerians in S\u00e9tif for waving flags. In Indochina, the British re-armed Japanese POWs to help the French take back control from the Viet Minh. The hypocrisy was total. The 'Colonial War' era began immediately.",
        "key_manifestations": [
          "S\u00e9tif Massacre (Event)",
          "Declaration of Independence of Vietnam (Event)",
          "Pan-African Congress in Manchester (Political Event)",
          "Black Boy by Wright (Memoir)"
        ]
      },
      "1946": {
        "variance_explained": 38.0,
        "description": "Bombardment of Haiphong (+3.0%). The French Navy shelled the city, killing 6,000. The First Indochina War began. The Philippines gained independence, but with 'Bell Trade Act' strings. The Royal Navy turned back Jewish refugee ships (Exodus 1947 precursor)\u2014policing the sea.",
        "key_manifestations": [
          "Bombardment of Haiphong (Event)",
          "Philippine Independence (Event)",
          "Direct Action Day in India (Communal violence)",
          "Nuremberg Trials (Ignoring colonial crimes)"
        ]
      },
      "1947": {
        "variance_explained": 40.0,
        "description": "Partition of India (+2.0%). The police left. 1 million dead in communal violence. The Empire exited by amputation. In Madagascar, the French suppressed a revolt (Malgache Uprising) killing up to 80,000. It was a silent massacre, overshadowed by the Cold War.",
        "key_manifestations": [
          "Partition of India/Pakistan (Event)",
          "Malagasy Uprising (Event)",
          "The Plague (Novel - allegorical occupation)",
          "UN Partition Plan for Palestine (Event)"
        ]
      },
      "1948": {
        "variance_explained": 42.0,
        "description": "The Malayan Emergency (+2.0%). 'Emergency' to allow insurance claims. The British used 'New Villages' (concentration camps) and 'Agent Orange' precursors. A successful counter-insurgency. In Palestine, the Mandate ended; the Nakba began. Apartheid formally began in South Africa.",
        "key_manifestations": [
          "Malayan Emergency begins (Event)",
          "1948 Arab-Israeli War (Event)",
          "National Party wins in South Africa (Event)",
          "Cry, the Beloved Country (Novel)"
        ]
      },
      "1949": {
        "variance_explained": 40.0,
        "description": "Dutch withdrawal from Indonesia (-2.0%). The US forced the Dutch out (threatened Marshall Plan aid). A victory for the cluster's end. But the Mau Mau were brewing in Kenya. The Chinese Revolution inspired anti-colonial movements everywhere.",
        "key_manifestations": [
          "Indonesian Sovereignty Transfer (Event)",
          "Geneva Conventions (Common Article 3 covers non-international conflict)",
          "Death of a Salesman (Play)",
          "Second Sex (Book)"
        ]
      },
      "1950": {
        "variance_explained": 45.0,
        "description": "Korean War (+5.0%). Viewed by the West as Cold War, by the East as Anti-Colonial. The Battle of Algiers began to gestate. C\u00e9saire published *Discourse on Colonialism*\u2014the intellectual death warrant of the cluster. The equation 'Colonialism = Fascism' was made explicit.",
        "key_manifestations": [
          "Discourse on Colonialism by C\u00e9saire (Book)",
          "Battle of Chosin Reservoir (Event)",
          "Group Areas Act in South Africa (Apartheid legalism)",
          "Los Olvidados (Film - the forgotten ones)"
        ]
      }
    }
  },
  "8_civilian_home_front_fusion": {
    "name": "Civilian Home Front Fusion (The Total War Economy)",
    "description": "This eigencluster represents the dissolution of the boundary between the 'Front' and the 'Home.' It tracks the mobilization of the entire demographic and economic base of a nation for war. Key components: Rationing, Propaganda, Women in the Workforce, Strategic Bombing (civilian as target), Civil Defense, and the State control of industry. It moves from the laissez-faire 19th-century model to the 'War Socialism' of WWI, the 'Autarky' of the 30s, and the 'Arsenal of Democracy' of WWII.",
    "trajectory": {
      "1890": {
        "variance_explained": 2.0,
        "description": "The cluster was dormant. War was a professional affair for soldiers. Civilians paid taxes and cheered, but were not 'mobilized.' The displacing force was Liberalism and Free Trade. Economies were interconnected, not autarkic.",
        "key_manifestations": [
          "Sherman Antitrust Act (State interfering in economy, but for competition)",
          "Captains of Industry (Rockefeller/Carnegie - private power)",
          "The Picture of Dorian Gray (Novel - separation of art/life)",
          "Bismarck's dismissal (End of the architect of the state)"
        ]
      },
      "1891": {
        "variance_explained": 2.0,
        "description": "Stasis. The Pan-German League formed, advocating 'Volk' mobilization, but it was fringe. The concept of 'National Efficiency' began to be discussed\u2014the health of the worker as a military asset.",
        "key_manifestations": [
          "Papal Encyclical Rerum Novarum (Addressing labor)",
          "Famine in Russia (State failure to manage resources)",
          "Tess of the d'Urbervilles (Novel)",
          "Formation of the populist People's Party in US (Agrarian mobilization)"
        ]
      },
      "1892": {
        "variance_explained": 2.2,
        "description": "The Homestead Strike (+0.2%). Industrial warfare. Private Pinkerton armies. It showed that industry was a battlefield. The state intervened to support capital, securing the 'backend' of national power.",
        "key_manifestations": [
          "Homestead Strike (Event)",
          "Cholera Riots in Hamburg (Public health as national security)",
          "The Conquest of Bread (Book - anarcho-communism)",
          "Grover Cleveland elected (Event)"
        ]
      },
      "1893": {
        "variance_explained": 2.5,
        "description": "The Panic of 1893 (+0.3%). Economic collapse. Coxey's Army marched on Washington\u2014the unemployed demanding state action. The proto-idea that the State is responsible for the economic survival of the citizen.",
        "key_manifestations": [
          "Panic of 1893 (Event)",
          "Coxey's Army (Event)",
          "Chicago World's Fair (Display of industrial might)",
          "Dvorak's New World Symphony (Cultural synthesis)"
        ]
      },
      "1894": {
        "variance_explained": 3.0,
        "description": "Sino-Japanese War (+0.5%). Japan's mobilization was 'national'\u2014schoolchildren drilling. The 'Society of the Black Dragon' mobilized civilians for espionage. In the West, the Pullman Strike halted the rails; the Army was used to move the mail. The economy *was* the state.",
        "key_manifestations": [
          "Pullman Strike (Event)",
          "Japanese home front mobilization (Event)",
          "The Jungle Book (Novel)",
          "Dreyfus Affair begins (Mobilizing public opinion)"
        ]
      },
      "1895": {
        "variance_explained": 3.2,
        "description": "Stasis. Le Bon's *The Crowd* published. Understanding the mass mind. If the civilian is a weapon, propaganda is the trigger. The 'Yellow Press' began to whip up jingoism for sales\u2014commercial mobilization.",
        "key_manifestations": [
          "The Crowd (Book)",
          "Hearst/Pulitzer circulation wars (Media Event)",
          "The Time Machine (Novel - bifurcation of humanity)",
          "Lumiere Brothers film (Tech - mass medium)"
        ]
      },
      "1896": {
        "variance_explained": 3.5,
        "description": "Bryan's 'Cross of Gold' (+0.3%). Populism. 'You shall not crucify mankind.' The fusion of economics and moral crusade. In Europe, social insurance spread\u2014bribing the working class to be loyal to the state.",
        "key_manifestations": [
          "Cross of Gold Speech (Rhetoric)",
          "Olympic Games revived (Nationalism as sport)",
          "The Island of Dr. Moreau (Novel)",
          "Plessy v. Ferguson (Legalizing segregation)"
        ]
      },
      "1897": {
        "variance_explained": 4.0,
        "description": "The Diamond Jubilee (+0.5%). Imperial pageantry. The public was a spectator, not a participant. But the 'Naval League' had 100,000 members\u2014civilians lobbying for weapons. The democratization of militarism.",
        "key_manifestations": [
          "Diamond Jubilee (Event)",
          "Dracula (Novel - invasion of the home)",
          "Navy League growth (Institutional Event)",
          "Klondike Gold Rush (Economic mobilization)"
        ]
      },
      "1898": {
        "variance_explained": 5.0,
        "description": "Spanish-American War (+1.0%). 'Remember the Maine!' The first media-driven war. The public *demanded* intervention. Women volunteered as nurses (Clara Barton). The 'Home Front' was psychologically engaged.",
        "key_manifestations": [
          "Yellow Journalism peak (Event)",
          "War of the Worlds (Book - civilians as victims)",
          "Spanish-American War (Event)",
          "Zola's J'Accuse (Intellectual mobilization)"
        ]
      },
      "1899": {
        "variance_explained": 6.0,
        "description": "Boer War and The Hague (+1.0%). The Hague Convention protected civilians in theory, but the Boer War proved the opposite in practice. The 'Concentration Camp' was the result of a strategy that said 'To defeat the commando, you must imprison the family.' The civilian was the supply line.",
        "key_manifestations": [
          "Establishment of Concentration Camps (Event)",
          "Hague Convention II (Legal Event)",
          "The Awakening (Novel)",
          "Kipling's 'The Absent-Minded Beggar' (Fundraising poem)"
        ]
      },
      "1900": {
        "variance_explained": 7.0,
        "description": "The Khaki Election (+1.0%). In the UK, the war was used to win the election. 'A vote for the Liberals is a vote for the Boers.' Politics and War fused. The Boxer Rebellion targeted missionaries\u2014civilians as frontline proxies.",
        "key_manifestations": [
          "Khaki Election (Political Event)",
          "Siege of the Legations (Civilians in combat)",
          "Sister Carrie (Novel)",
          "Zeppelin flight (The threat to the home)"
        ]
      },
      "1901": {
        "variance_explained": 8.0,
        "description": "National Efficiency Movement (+1.0%). The poor physical state of Boer War recruits shocked Britain. 'We cannot fight with a C3 population.' The start of the welfare state as a military necessity. School meals, hygiene. Biopolitics.",
        "key_manifestations": [
          "Rowntree's Poverty, A Study of Town Life (Book)",
          "Assassination of McKinley (Event)",
          "Kim (Novel)",
          "Establishment of the Nobel Prize (Civilian achievement)"
        ]
      },
      "1902": {
        "variance_explained": 8.5,
        "description": "Stasis (+0.5%). The Education Act in UK. Creating a literate workforce/soldiery. *The Riddle of the Sands*\u2014two civilians uncover an invasion plot. The 'Amateur Spy' trope. Every citizen a sentry.",
        "key_manifestations": [
          "Education Act 1902 (Legal Event)",
          "The Riddle of the Sands (Book)",
          "Lenin's What Is To Be Done (Professional revolutionary)",
          "Heart of Darkness (Book)"
        ]
      },
      "1903": {
        "variance_explained": 9.0,
        "description": "WSPU (Suffragettes) founded (+0.5%). Emmeline Pankhurst. 'Deeds not Words.' Militant civilian activism. They declared war on the state. It was a training ground for home front mobilization (many Suffragettes became super-patriots in 1914).",
        "key_manifestations": [
          "Founding of WSPU (Institutional Event)",
          "The Call of the Wild (Novel)",
          "Ford Motor Company founded (Industrial capacity)",
          "First flight (Tech Event)"
        ]
      },
      "1904": {
        "variance_explained": 10.0,
        "description": "Russo-Japanese War (+1.0%). The Russian home front collapsed. Revolution of 1905 was the result of war strain. It proved that a modern war could not be fought if the civilians revolted. The 'internal front' was decisive.",
        "key_manifestations": [
          "Assassination of Plehve (Event)",
          "The Cherry Orchard (Play - social change)",
          "Peter Pan (Play)",
          "Japanese austerity drive (Event)"
        ]
      },
      "1905": {
        "variance_explained": 12.0,
        "description": "Bloody Sunday (+2.0%). The Tsar fired on his own people. The bond was broken. General Strikes. The economy stopped. The lesson: 'Mobilization requires Consent (or Terror).' In the UK, the Aliens Act restricted immigration\u2014defining the 'Home' population.",
        "key_manifestations": [
          "Bloody Sunday (Event)",
          "Aliens Act 1905 (Legal Event)",
          "Einstein's Annus Mirabilis (Science)",
          "The House of Mirth (Novel)"
        ]
      },
      "1906": {
        "variance_explained": 13.0,
        "description": "The Jungle (+1.0%). Sinclair exposed the meatpacking industry. It led to the Pure Food and Drug Act. The State regulating the biological fuel of the nation. 'The Jungle' was intended as socialism, but read as hygiene.",
        "key_manifestations": [
          "The Jungle (Book)",
          "Pure Food and Drug Act (Legal Event)",
          "Launch of HMS Dreadnought (Industrial mobilization)",
          "San Francisco Earthquake (Civilian resilience)"
        ]
      },
      "1907": {
        "variance_explained": 14.0,
        "description": "Boy Scouts founded (+1.0%). Baden-Powell. 'Be Prepared.' Militarizing the youth. Turning boys into scouts for the empire. It was the soft mobilization of the next generation.",
        "key_manifestations": [
          "Brownsea Island Camp (Event)",
          "The Secret Agent (Novel)",
          "Panic of 1907 (Financial fragility)",
          "Hague Convention (Civilian protections discussed)"
        ]
      },
      "1908": {
        "variance_explained": 15.0,
        "description": "The War in the Air (+1.0%). Wells predicted the bombing of cities. 'No place is safe.' The psychological preparation for total war. Old Age Pensions in UK\u2014state care for the elderly, binding them to the nation.",
        "key_manifestations": [
          "The War in the Air (Book)",
          "Old Age Pensions Act (Legal Event)",
          "Ford Model T (Mass production)",
          "Scouting for Boys (Book)"
        ]
      },
      "1909": {
        "variance_explained": 16.0,
        "description": "The People's Budget (+1.0%). Lloyd George. 'Warfare against poverty.' Taxing the rich to fund battleships and welfare. The 'Social Warfare' state. The Phantom Airship panic showed the civilian nerves were taut.",
        "key_manifestations": [
          "People's Budget (Policy)",
          "Phantom Airship Scare (Event)",
          "Marinetti's Manifesto (Art as violence)",
          "Girl Guides founded (Mobilizing girls)"
        ]
      },
      "1910": {
        "variance_explained": 17.0,
        "description": "Angell's *The Great Illusion* (+1.0%). Argued that economic interdependence made war impossible. He was wrong, but he highlighted that the *economy* was the battlefield. Black Friday (Suffragette violence)\u2014women fighting police.",
        "key_manifestations": [
          "The Great Illusion (Book)",
          "Black Friday (Suffragette Event)",
          "Howards End (Novel)",
          "Halley's Comet (Civilian panic)"
        ]
      },
      "1911": {
        "variance_explained": 18.0,
        "description": "National Insurance Act (+1.0%). UK. Health and unemployment insurance. The state safety net. Taylorism (Scientific Management) spread\u2014efficiency in the factory meant efficiency in the trench.",
        "key_manifestations": [
          "National Insurance Act (Legal Event)",
          "Taylor's Principles of Scientific Management (Book)",
          "Agadir Crisis (Panic buying)",
          "Triangle Shirtwaist Fire (Industrial safety/martyrdom)"
        ]
      },
      "1912": {
        "variance_explained": 19.0,
        "description": "Titanic (+1.0%). The failure of the system. 'Women and Children First'\u2014the chivalric code that would die in 1914. The 'Radio Act' regulated the airwaves\u2014state control of comms.",
        "key_manifestations": [
          "Titanic Sinking (Event)",
          "Radio Act of 1912 (Legal Event)",
          "Suffragette window smashing campaign (Event)",
          "The Lost World (Novel)"
        ]
      },
      "1913": {
        "variance_explained": 20.0,
        "description": "Federal Reserve System (+1.0%). The US centralized its financial power. Essential for the war financing to come. Stravinsky's *Rite of Spring*\u2014the audience rioted. A breakdown of civil order in the arts.",
        "key_manifestations": [
          "Federal Reserve Act (Legal Event)",
          "Rite of Spring riot (Cultural Event)",
          "Cat and Mouse Act (Torturing Suffragettes)",
          "Ford Assembly Line (Total production)"
        ]
      },
      "1914": {
        "variance_explained": 45.0,
        "description": "The August Madness (+25.0%). The Cluster ignited. 'Defense of the Realm Act' (DORA). The State seized the railways, the press, and the mines. The 'War Socialism' began. Civilians rushed to the colors. The 'White Feather' campaign\u2014women shaming men into fighting. The Home Front *enforced* the War.",
        "key_manifestations": [
          "DORA passed (Legal Event)",
          "White Feather Campaign (Social Event)",
          "Christmas Truce (The soldiers wanted peace, the civilians/generals wanted war)",
          "Shelling of Scarborough (Civilians killed by Navy)"
        ]
      },
      "1915": {
        "variance_explained": 60.0,
        "description": "The Shell Crisis and Munitions (+15.0%). Lloyd George became Minister of Munitions. He built 'National Factories.' He negotiated with Unions (Treasury Agreement)\u2014suspending strikes. Women entered the factories (Munitionettes). The 'Zeppelin' raids brought the war to the living room.",
        "key_manifestations": [
          "Ministry of Munitions formed (Institutional Event)",
          "Zeppelin raids on London (Event)",
          "Treasury Agreement (Labor Event)",
          "Edith Cavell execution (Propaganda martyr)"
        ]
      },
      "1916": {
        "variance_explained": 75.0,
        "description": "Conscription and the Turnip Winter (+15.0%). The UK adopted the draft\u2014the state owns the body. Germany's 'Hindenburg Program'\u2014total mobilization of labor. The 'Turnip Winter' in Germany\u2014starvation as a weapon of blockade. The Home Front began to die.",
        "key_manifestations": [
          "Military Service Act (Conscription) (Legal Event)",
          "Hindenburg Program (Policy)",
          "Turnip Winter (Event)",
          "Easter Rising (Home front rebellion)"
        ]
      },
      "1917": {
        "variance_explained": 85.0,
        "description": "Rationing and Revolution (+10.0%). Russia collapsed because of Bread. The Home Front broke the Army. In the US, the 'CPI' (Creel Committee) sold the war. 'Four Minute Men.' Total Propaganda. Unrestricted U-boat warfare aimed to starve the British civilian.",
        "key_manifestations": [
          "Russian Revolution (Bread Riots)",
          "US Entry/CPI formed (Propaganda)",
          "Gotha Raids (Daylight bombing)",
          "Introduction of Convoy System (Protecting supply)"
        ]
      },
      "1918": {
        "variance_explained": 80.0,
        "description": "Spanish Flu and Collapse (-5.0%). The Flu killed more civilians than the war. The ultimate biological fusion. Germany collapsed not on the field, but at home (Kiel Mutiny/Hunger). The 'Stab in the Back' myth was born\u2014blaming the Home Front for the defeat.",
        "key_manifestations": [
          "Spanish Flu Pandemic (Event)",
          "German Revolution (Home front collapse)",
          "Armistice (Event)",
          "Representation of the People Act (Votes for women - reward for war work)"
        ]
      },
      "1919": {
        "variance_explained": 40.0,
        "description": "Demobilization (-40.0%). The machine was dismantled. 'A Land Fit for Heroes.' But the state didn't fully retreat. Rent controls stayed. The 'Red Scare' in the US\u2014policing civilian ideology. Prohibition\u2014state control of private habits.",
        "key_manifestations": [
          "Red Summer (Race riots)",
          "Volstead Act (Prohibition)",
          "Treaty of Versailles (Economic punishment)",
          "Economic Consequences of the Peace (Book)"
        ]
      },
      "1920": {
        "variance_explained": 30.0,
        "description": "Normalcy (-10.0%). Harding's slogan. A desire to forget. But the 'Lost Generation' remained. The Cenotaph\u2014public mourning. The 'Unknown Soldier.' The war was integrated into the civic religion.",
        "key_manifestations": [
          "Burial of the Unknown Soldier (Event)",
          "Return to Normalcy (Rhetoric)",
          "KDKA Broadcast (Radio entering the home)",
          "Women in Love (Novel)"
        ]
      },
      "1921": {
        "variance_explained": 25.0,
        "description": "NEP in Russia (-5.0%). Lenin retreated from 'War Communism.' The state couldn't feed the people. In the US, the 'depression of 1920' cleared the war inflation. The cluster hibernated.",
        "key_manifestations": [
          "New Economic Policy (Policy)",
          "British Legion founded (Veterans org)",
          "Tractatus (Philosophy)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 28.0,
        "description": "Fascism (+3.0%). Mussolini. 'Everything within the State.' The Corporatist model\u2014fusing labor, capital, and state. The 'Battle for Grain.' The economy as a moral struggle. The cluster re-awakened in Italy.",
        "key_manifestations": [
          "March on Rome (Event)",
          "The Waste Land (Poem)",
          "BBC founded (State media)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 30.0,
        "description": "Hyperinflation (+2.0%). Germany. The destruction of the middle class savings. The Home Front was wiped out by economics. It created the psychological desperation for the Total State.",
        "key_manifestations": [
          "German Hyperinflation (Event)",
          "Beer Hall Putsch (Reaction)",
          "Le Corbusier's Vers une architecture (Planning)",
          "Time Magazine founded (Mass media)"
        ]
      },
      "1924": {
        "variance_explained": 30.0,
        "description": "Stasis. Dawes Plan. American gold stabilized Germany. The 'Roaring Twenties'\u2014consumption as the new civic duty. Fordism\u2014mass production for the masses.",
        "key_manifestations": [
          "Dawes Plan (Event)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)",
          "First Winter Olympics (Sport)"
        ]
      },
      "1925": {
        "variance_explained": 32.0,
        "description": "Mein Kampf (+2.0%). Hitler outlined the 'Lebensraum.' The conquest of land to feed the Volk. The fusion of race and economics. In the UK, the return to the Gold Standard (Churchill)\u2014sacrificing industry for finance.",
        "key_manifestations": [
          "Mein Kampf (Book)",
          "Gold Standard Act (Policy)",
          "Great Gatsby (Novel)",
          "Potemkin (Film)"
        ]
      },
      "1926": {
        "variance_explained": 35.0,
        "description": "General Strike (+3.0%). UK. The Unions vs The State. Churchill organized middle-class volunteers to run the buses. Class war. The BBC played a key role in 'moderating' (suppressing) the strike. Radio as a tool of order.",
        "key_manifestations": [
          "General Strike (Event)",
          "Metropolis (Film)",
          "Seven Pillars of Wisdom (Book)",
          "Sun Also Rises (Novel)"
        ]
      },
      "1927": {
        "variance_explained": 35.0,
        "description": "Stasis. Lindbergh. The global media event. In Russia, the 'War Scare.' Stalin used it to crush the opposition and prepare for industrialization. 'We are 50 years behind.'",
        "key_manifestations": [
          "Lindbergh Flight (Event)",
          "The Jazz Singer (Sound film)",
          "Being and Time (Philosophy)",
          "Stalin's industrialization speech (Rhetoric)"
        ]
      },
      "1928": {
        "variance_explained": 45.0,
        "description": "Five Year Plan (+10.0%). USSR. The total command economy. No private property. Every worker a soldier of production. 'Saboteurs' were executed. The cluster reached its logical extreme in the East.",
        "key_manifestations": [
          "First Five Year Plan (Policy)",
          "Kellogg-Briand Pact (Illusion of peace)",
          "Lady Chatterley's Lover (Book)",
          "Threepenny Opera (Play)"
        ]
      },
      "1929": {
        "variance_explained": 50.0,
        "description": "The Crash (+5.0%). The failure of Laissez-Faire. The State was forced to intervene. The 'Great Depression' necessitated the 'War Economy' in peace. Collectivization in Russia\u2014war on the peasant.",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "Collectivization begins (Policy)",
          "All Quiet on the Western Front (Book)",
          "Man with a Movie Camera (Film)"
        ]
      },
      "1930": {
        "variance_explained": 55.0,
        "description": "Hawley-Smoot (+5.0%). Trade war. Autarky. Nations walled themselves off. The 'Volk' must feed itself. In Germany, the Nazis surged on the promise of 'Work and Bread.'",
        "key_manifestations": [
          "Smoot-Hawley Tariff (Policy)",
          "Nazi Election breakthrough (Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 58.0,
        "description": "Japan in Manchuria (+3.0%). Securing the 'Lifeline.' Resources (Soy/Coal). The 'Co-Prosperity Sphere' idea. In the UK, the National Government formed to handle the crisis\u2014suspending normal politics.",
        "key_manifestations": [
          "Invasion of Manchuria (Event)",
          "Collapse of Credit Anstalt (Bank failure)",
          "M (Film)",
          "Empire State Building (Construction)"
        ]
      },
      "1932": {
        "variance_explained": 60.0,
        "description": "The Bomber Will Always Get Through (+2.0%). Baldwin. The admission that the Home Front cannot be defended, only revenged. Civil Defense planning began (gas masks). *Brave New World*\u2014the state controls biology.",
        "key_manifestations": [
          "Baldwin's Speech (Rhetoric)",
          "Brave New World (Book)",
          "Famine in Ukraine (State terror)",
          "Bonus Army March (Veterans demanding pay)"
        ]
      },
      "1933": {
        "variance_explained": 70.0,
        "description": "New Deal and Nazi State (+10.0%). FDR: 'I pledge you, I pledge myself, to a new deal.' The NRA (Blue Eagle) organized industry. In Germany, the *Reichsn\u00e4hrstand* (Food Estate). The State took the helm. Public Works (Autobahn / TVA).",
        "key_manifestations": [
          "New Deal Legislation (Policy)",
          "Nazi Seizure of Power (Event)",
          "TVA created (Infrastructure)",
          "King Kong (Film)"
        ]
      },
      "1934": {
        "variance_explained": 75.0,
        "description": "Wehrwirtschaft (+5.0%). Germany. The 'Defense Economy.' Schacht's 'Mefo bills'\u2014secret rearmament financing. The economy was primed for war. In the US, the strikes of 1934 (Minneapolis/San Francisco) showed labor unrest.",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "Mefo Bills introduced (Economic Event)",
          "It Happened One Night (Film)",
          "Tender is the Night (Novel)"
        ]
      },
      "1935": {
        "variance_explained": 80.0,
        "description": "Nuremberg Laws and Rearmament (+5.0%). Conscription returned to Germany. The Jew was stripped of citizenship\u2014defined out of the 'Home.' In the UK, the 'Air Raid Precautions' (ARP) Act\u2014the state managing the ruins.",
        "key_manifestations": [
          "Nuremberg Laws (Legal Event)",
          "ARP Act (UK) (Legal Event)",
          "Triumph of the Will (Film)",
          "Stakhanovite Movement (Soviet labor)"
        ]
      },
      "1936": {
        "variance_explained": 85.0,
        "description": "Four Year Plan (+5.0%). G\u00f6ring. 'Guns before Butter.' Autarky. The economy must be ready for war in 4 years. Keynes published *The General Theory*\u2014intellectual justification for state management of demand.",
        "key_manifestations": [
          "Four Year Plan (Policy)",
          "General Theory (Book)",
          "Berlin Olympics (Spectacle)",
          "Spanish Civil War (Bombing of Madrid)"
        ]
      },
      "1937": {
        "variance_explained": 88.0,
        "description": "Guernica (+3.0%). The destruction of the civilian target. It proved the ARP was necessary. Japan invaded China\u2014total mobilization. In the US, the 'Quarantine Speech'\u2014FDR testing the waters for intervention.",
        "key_manifestations": [
          "Bombing of Guernica (Event)",
          "Quarantine Speech (Rhetoric)",
          "Degenerate Art (Cultural control)",
          "Snow White (Mass entertainment)"
        ]
      },
      "1938": {
        "variance_explained": 90.0,
        "description": "Gas Masks for All (+2.0%). Munich Crisis. Digging trenches in Hyde Park. The realization that war meant *everyone*. The Kindertransport\u2014moving children. The 'Home' was dissolving.",
        "key_manifestations": [
          "Munich Crisis (Event)",
          "Kristallnacht (Pogrom)",
          "War of the Worlds Broadcast (Panic)",
          "Brighton Rock (Novel)"
        ]
      },
      "1939": {
        "variance_explained": 95.0,
        "description": "Evacuation (+5.0%). Operation Pied Piper. 1.5 million people moved from British cities. Blackout. Rationing planned. The State took custody of the child. War began. The 'Phoney War' was an economic siege.",
        "key_manifestations": [
          "Operation Pied Piper (Event)",
          "Blackout enforced (Policy)",
          "Grapes of Wrath (Book)",
          "Gone with the Wind (Film)"
        ]
      },
      "1940": {
        "variance_explained": 98.0,
        "description": "The Blitz and Arsenal of Democracy (+3.0%). London burning. 'Britain Can Take It.' The civilian morale *was* the center of gravity. In the US, FDR called for '50,000 planes.' The conversion of Detroit to war production. The Lend-Lease Act (garden hose).",
        "key_manifestations": [
          "The Blitz (Event)",
          "Arsenal of Democracy Speech (Rhetoric)",
          "Great Dictator (Film)",
          "Destroyers for Bases (Deal)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "Total Mobilization (+2.0%). Pearl Harbor. The US entered. 'Victory Gardens.' Tires rationed. The 'Final Solution' began\u2014industrial killing. The Soviet Union moved its factories east of the Urals\u2014the greatest industrial migration in history.",
        "key_manifestations": [
          "Pearl Harbor (Event)",
          "Evacuation of Soviet Industry (Event)",
          "Executive Order 8802 (Fair employment)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "Rosie the Riveter (+0.0%). Women in the workforce. The WPB (War Production Board) dictated the economy. No cars produced. Only tanks. In Germany, Speer took over\u2014rationalizing the war economy (using slave labor).",
        "key_manifestations": [
          "Establishment of WPB (Institutional Event)",
          "Speer appointed Minister (Event)",
          "Casablanca (Film)",
          "Beveridge Report (Planning the post-war welfare)"
        ]
      },
      "1943": {
        "variance_explained": 100.0,
        "description": "Total War Speech (+0.0%). Goebbels. 'Wollt ihr den totalen Krieg?' Closing restaurants/shops. Mobilizing women (finally). Hamburg Firestorm\u2014the civilian as ash. The 'Penicillin' mass production began\u2014industrial biomedicine.",
        "key_manifestations": [
          "Sportpalast Speech (Rhetoric)",
          "Hamburg Firestorm (Event)",
          "Zoot Suit Riots (Social friction)",
          "Oklahoma! (Musical - national myth)"
        ]
      },
      "1944": {
        "variance_explained": 100.0,
        "description": "The GI Bill and V-Weapons (+0.0%). Planning for peace while fighting. The GI Bill socialized higher education. The V-1/V-2 struck London\u2014random terror. The 'Volkssturm'\u2014mobilizing old men and boys. The barrel was scraped.",
        "key_manifestations": [
          "GI Bill signed (Legal Event)",
          "V-Weapons attacks (Event)",
          "Bretton Woods (Economic planning)",
          "Double Indemnity (Film noir - cynicism)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "Hiroshima (+0.0%). The end of the city. The ultimate fusion. The war ended, but the 'National Security State' remained. The US economy did not demobilize fully; it shifted to 'Cold War' footing. The 'Military Industrial Complex' was cemented.",
        "key_manifestations": [
          "Hiroshima (Event)",
          "Yalta Conference (Event)",
          "Animal Farm (Book)",
          "Founding of the UN (Event)"
        ]
      },
      "1946": {
        "variance_explained": 90.0,
        "description": "Post-War Austerity (-10.0%). UK continued rationing (bread rationed for first time). The US had a strike wave. The 'Baby Boom' began\u2014demographic recovery. *The Best Years of Our Lives*\u2014the trauma of return.",
        "key_manifestations": [
          "Bread Rationing in UK (Event)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain Speech (Rhetoric)",
          "Dr. Spock's Baby and Child Care (Book)"
        ]
      },
      "1947": {
        "variance_explained": 85.0,
        "description": "Marshall Plan (-5.0%). Economic statecraft. Rebuilding Europe to prevent communism. The 'Truman Doctrine'\u2014permanent mobilization against a threat. The National Security Act created the DOD/CIA. The structure of 1942 was kept for 1947.",
        "key_manifestations": [
          "Marshall Plan (Policy)",
          "National Security Act (Legal Event)",
          "A Streetcar Named Desire (Play)",
          "Dior's New Look (Cultural return to femininity)"
        ]
      },
      "1948": {
        "variance_explained": 80.0,
        "description": "NHS Founded (-5.0%). UK. The 'Welfare State' was the payout for the 'Warfare State.' 'Cradle to Grave.' The Berlin Airlift\u2014logistics as war. The home front was now the Cold War front.",
        "key_manifestations": [
          "Founding of NHS (Institutional Event)",
          "Berlin Airlift (Event)",
          "1984 (Book - permanent war economy)",
          "Kinsey Report (Social data)"
        ]
      },
      "1949": {
        "variance_explained": 78.0,
        "description": "NATO (-2.0%). Collective security. The Soviet Bomb. Civil Defense returned. 'Duck and Cover.' The fear of the apocalypse domesticated.",
        "key_manifestations": [
          "NATO founded (Event)",
          "Soviet Bomb (Event)",
          "Death of a Salesman (Play)",
          "1949 Housing Act (US) (Urban renewal)"
        ]
      },
      "1950": {
        "variance_explained": 85.0,
        "description": "Korean War and McCarthyism (+7.0%). The draft returned. The 'Red Scare' hunted subversives at home. NSC-68 called for massive defense spending. The economy was re-militarized. The 'Affluent Society' was built on a foundation of ICBMs.",
        "key_manifestations": [
          "NSC-68 (Policy)",
          "McCarthy's Wheeling Speech (Event)",
          "The Lonely Crowd (Book)",
          "Korean War (Event)"
        ]
      }
    }
  },
  "9_mechanized_maneuver_doctrine": {
    "name": "Mechanized Maneuver Doctrine (The Engine of Battle)",
    "description": "This eigencluster represents the restoration of mobility to the battlefield through the Internal Combustion Engine. It is the technological and doctrinal answer to the stalemate of the Machine Gun (Cluster 1). Key components: The Tank, The Truck, The Airplane (tactical), and the Radio. It tracks the evolution from the clumsy 'Landships' of 1916 to the 'Blitzkrieg' of 1940 and the 'Deep Battle' of the Soviets. It is the triumph of speed and encirclement over static defense.",
    "trajectory": {
      "1915": {
        "variance_explained": 2.0,
        "description": "The Deadlock. The Western Front was frozen. The 'Little Willie' prototype was built. The 'Landship Committee' (Churchill) pushed for a mechanical solution to barbed wire. The concept was 'Mobile Fortress,' not yet 'Cavalry.'",
        "key_manifestations": [
          "Little Willie prototype (Tech Event)",
          "Landship Committee formed (Institutional Event)",
          "The 39 Steps (Book)",
          "Gallipoli (Failure of alternative maneuver)"
        ]
      },
      "1916": {
        "variance_explained": 5.0,
        "description": "Flers-Courcelette (+3.0%). The Mark I Tank used at the Somme. Penny packets. They terrified the Germans but broke down. They failed to breakthrough. But the *idea* was proven: Armor can cross No Man's Land.",
        "key_manifestations": [
          "Battle of Flers-Courcelette (Event)",
          "Mark I Tank (Tech Event)",
          "J\u00fcnger's Storm of Steel (Experience of the machine)",
          "Verdun (The antithesis - static grinding)"
        ]
      },
      "1917": {
        "variance_explained": 15.0,
        "description": "Cambrai (+10.0%). Massed tanks (476). They broke the Hindenburg Line in hours. Bells rang in London. But they lacked the logistics to exploit (Cavalry failed). The counter-attack retook the ground. The lesson: Breakthrough is easy, Exploitation is hard.",
        "key_manifestations": [
          "Battle of Cambrai (Event)",
          "Introduction of Mark IV Tank (Tech Event)",
          "Caporetto (Infiltration tactics - maneuver without tanks)",
          "Fuller's operational planning (Intellectual Event)"
        ]
      },
      "1918": {
        "variance_explained": 25.0,
        "description": "Amiens and Plan 1919 (+10.0%). The 'Black Day of the German Army.' 600 tanks + aircraft + artillery. Combined Arms. J.F.C. Fuller wrote 'Plan 1919'\u2014targeting the enemy HQ with fast tanks. The war ended before the 'Blitzkrieg' prototype could be launched.",
        "key_manifestations": [
          "Battle of Amiens (Event)",
          "Plan 1919 (Document)",
          "Renault FT (First modern turreted tank)",
          "Ludendorff's Offensive (Tactical success, strategic failure)"
        ]
      },
      "1919": {
        "variance_explained": 10.0,
        "description": "The Great Forgetfulness (-15.0%). Tanks were scrapped. 'The horse is the future.' The establishment rejected the 'gasoline' war. Only a few visionaries (Fuller, Liddell Hart) kept the flame alive in writing.",
        "key_manifestations": [
          "Scrapping of the Tank Corps (Event)",
          "Treaty of Versailles (Banning German tanks)",
          "Ten Year Rule (Policy)",
          "Alcock and Brown (Air maneuver)"
        ]
      },
      "1920": {
        "variance_explained": 12.0,
        "description": "Polish-Soviet War (+2.0%). Cavalry armies moved huge distances. It proved mobility was still possible (unlike the Western Front). Tukhachevsky saw this and began dreaming of 'Deep Battle.'",
        "key_manifestations": [
          "Battle of Warsaw (Event)",
          "Tukhachevsky's lectures (Intellectual Event)",
          "Storm of Steel published (Book)",
          "Karel Capek's R.U.R. (The machine man)"
        ]
      },
      "1921": {
        "variance_explained": 12.0,
        "description": "Stasis. The US Army disbanded the Tank Corps, putting tanks under Infantry. 'Tanks are to support the walking man.' A doctrinal regression. The Vickers Medium Mark I was designed\u2014the link to the future.",
        "key_manifestations": [
          "National Defense Act 1920 (US Policy)",
          "Vickers Medium Mark I design (Tech Event)",
          "Douhet's Command of the Air (Air maneuver focus)",
          "The Sheik (Horse fetishism)"
        ]
      },
      "1922": {
        "variance_explained": 13.0,
        "description": "Rapallo (+1.0%). Germany and USSR cooperated. Secret tank school at Kazan (Kama). Guderian and the Russians learned together. The 'Black Reichswehr' circumvented Versailles.",
        "key_manifestations": [
          "Treaty of Rapallo (Diplomatic Event)",
          "Kama Tank School established (Event)",
          "Ulysses (Book)",
          "Mussolini (Motorized politics)"
        ]
      },
      "1923": {
        "variance_explained": 13.0,
        "description": "Stasis. The French built the Char 2C\u2014a super-heavy monster. The wrong path (Gigantism). Liddell Hart published on the 'Expanding Torrent'\u2014reinforcing success, not attacking strength.",
        "key_manifestations": [
          "Char 2C operational (Tech Event)",
          "Liddell Hart's articles (Intellectual Event)",
          "Vers une architecture (Machine aesthetic)",
          "Beer Hall Putsch (Event)"
        ]
      },
      "1924": {
        "variance_explained": 14.0,
        "description": "The Reformation of War (+1.0%). Fuller's book. He predicted fleets of tanks fighting like ships. The 'Royal Tank Corps' was made permanent. The germ survived.",
        "key_manifestations": [
          "The Reformation of War (Book)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)",
          "Citroen-Kegresse half-tracks (Tech Event - crossing the Sahara)"
        ]
      },
      "1925": {
        "variance_explained": 15.0,
        "description": "Locarno (-1.0% Peace, +Tech). No war in sight. But the 'Christie Suspension' was invented in the US. Fast tanks. The Army rejected it. The Soviets bought it. The BT series (and T-34) were born from this rejection.",
        "key_manifestations": [
          "Christie Suspension patent (Tech Event)",
          "Locarno Treaties (Event)",
          "Great Gatsby (Novel)",
          "Potemkin (Film)"
        ]
      },
      "1926": {
        "variance_explained": 16.0,
        "description": "Liddell Hart's *The Remaking of Modern Armies* (+1.0%). Indirect Approach. Avoiding the strength. Psychological dislocation. The intellectual software of Blitzkrieg.",
        "key_manifestations": [
          "The Remaking of Modern Armies (Book)",
          "Metropolis (Film)",
          "Sun Also Rises (Novel)",
          "Goddard Rocket (Tech Event)"
        ]
      },
      "1927": {
        "variance_explained": 18.0,
        "description": "Experimental Mechanized Force (+2.0%). UK. The first all-mechanized unit exercises on Salisbury Plain. It worked. The 'Old Guard' hated it. It was disbanded in 1928. A tragic missed opportunity.",
        "key_manifestations": [
          "EMF exercises (Event)",
          "Being and Time (Book)",
          "Jazz Singer (Film)",
          "Chiang Kai Shek's Northern Expedition (War of movement)"
        ]
      },
      "1928": {
        "variance_explained": 20.0,
        "description": "Deep Battle (+2.0%). Triandafillov wrote *The Nature of the Operations of Modern Armies*. The Soviet doctrine. Simultaneous attack throughout the enemy depth. Paratroopers + Tanks.",
        "key_manifestations": [
          "Triandafillov's book (Intellectual Event)",
          "First Five Year Plan (Building the tank factories)",
          "Lady Chatterley's Lover (Book)",
          "Mickey Mouse (Tech)"
        ]
      },
      "1929": {
        "variance_explained": 22.0,
        "description": "Guderian's epiphany (+2.0%). He commanded a motorized transport battalion. He realized: 'Tank engines must be as strong as the guns.' He put radios in tanks. The 'Panzer' division concept formed.",
        "key_manifestations": [
          "Guderian's early writings (Intellectual Event)",
          "Wall Street Crash (Event)",
          "All Quiet on the Western Front (Book)",
          "Man with a Movie Camera (Film)"
        ]
      },
      "1930": {
        "variance_explained": 25.0,
        "description": "De Gaulle's *Vers l'Arm\u00e9e de M\u00e9tier* (+3.0%). France. He called for a professional, mechanized army. He was ignored. The Maginot Line (Cluster 10) was the priority. Static concrete vs Mobile steel.",
        "key_manifestations": [
          "Vers l'Arm\u00e9e de M\u00e9tier (Book)",
          "Maginot Line construction begins (Event)",
          "Blue Angel (Film)",
          "Civilization and Its Discontents (Book)"
        ]
      },
      "1931": {
        "variance_explained": 28.0,
        "description": "Vickers 6-Ton (+3.0%). The export tank. Bought by Poland, China, Finland, Russia (T-26). The seed of the world's tank fleets. In the US, the 'Christie' tank clocked 60mph. Speed was arriving.",
        "key_manifestations": [
          "Vickers 6-Ton (Tech Event)",
          "Christie tank trials (Event)",
          "M (Film)",
          "Mukden Incident (Event)"
        ]
      },
      "1932": {
        "variance_explained": 30.0,
        "description": "Soviet Mechanized Corps (+2.0%). The world's first large armored formations. 11,000 tanks produced by 1937. Quantity having a quality of its own. In UK, the 'Garden Lloyd' carrier\u2014cheap, small, useless.",
        "key_manifestations": [
          "Formation of Soviet Mech Corps (Event)",
          "Brave New World (Book)",
          "Bonus Army (Event)",
          "Famine in Ukraine (Event)"
        ]
      },
      "1933": {
        "variance_explained": 35.0,
        "description": "Hitler and the Motor (+5.0%). Hitler saw Guderian's demo. 'That's what I need! That's what I want to have!' The political will met the technical doctrine. The Autobahn began\u2014logistics for the Wehrmacht.",
        "key_manifestations": [
          "Hitler/Guderian meeting (Event)",
          "Autobahn construction begins (Infrastructure)",
          "King Kong (Film)",
          "Reichstag Fire (Event)"
        ]
      },
      "1934": {
        "variance_explained": 38.0,
        "description": "Stasis. The US Army separated Tanks (Infantry support) and Cavalry (Recon). A confused doctrine. The 'Combat Car.' Adherence to the horse remained strong.",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)",
          "Long March (Walking)"
        ]
      },
      "1935": {
        "variance_explained": 45.0,
        "description": "First Panzer Divisions (+7.0%). Created in defiance of Versailles. The doctrine was 'Combined Arms'\u2014Tanks, Motorized Infantry, Mobile Artillery, Air Support (Stuka). All with radios. A system, not just a vehicle.",
        "key_manifestations": [
          "Creation of first 3 Panzer Divisions (Event)",
          "Triumph of the Will (Film)",
          "Rearmament announced (Event)",
          "Stakhanovite movement (Event)"
        ]
      },
      "1936": {
        "variance_explained": 48.0,
        "description": "Spanish Civil War (+3.0%). The test. Soviet T-26 vs German Panzer I. The Panzer I was weak (machine guns only), but the *doctrine* of coordination was tested. The Soviets purged Tukhachevsky (1937)\u2014killing 'Deep Battle' and the officer corps.",
        "key_manifestations": [
          "Spanish Civil War (Event)",
          "T-34 design begins (Tech Event)",
          "General Theory (Book)",
          "Modern Times (Film - Man in the machine)"
        ]
      },
      "1937": {
        "variance_explained": 55.0,
        "description": "Achtung - Panzer! (+7.0%). Guderian published his manifesto. 'You hit with a fist and not with fingers spread.' The blueprint for WWII. In Japan, tanks were used in China, but as infantry support (poor doctrine).",
        "key_manifestations": [
          "Achtung - Panzer! (Book)",
          "Purge of Tukhachevsky (Event)",
          "Guernica (Event)",
          "Marco Polo Bridge (Event)"
        ]
      },
      "1938": {
        "variance_explained": 60.0,
        "description": "Anschluss and Sudetenland (+5.0%). The Panzers drove into Vienna and Prague. Many broke down (logistics failure). But the *threat* of speed paralyzed the opposition. The British woke up; 'Cruiser' and 'Infantry' tank split continued (bad doctrine).",
        "key_manifestations": [
          "Anschluss (Event)",
          "Munich Crisis (Event)",
          "Nausea (Book)",
          "Kristallnacht (Event)"
        ]
      },
      "1939": {
        "variance_explained": 80.0,
        "description": "Poland (+20.0%). Blitzkrieg. The Polish army (brave but un-motorized) was encircled and destroyed in weeks. The 'Pincer Movement.' The world was shocked. The tank was not a toy; it was the arbiter of nations.",
        "key_manifestations": [
          "Invasion of Poland (Event)",
          "Khalkhin Gol (Zhukov uses tanks correctly vs Japan)",
          "Grapes of Wrath (Book)",
          "Wizard of Oz (Film)"
        ]
      },
      "1940": {
        "variance_explained": 95.0,
        "description": "The Sickle Cut (+15.0%). Manstein Plan. The Panzers went through the Ardennes (terrain deemed 'impassable'). They drove to the sea, cutting off the Allies. France fell in 6 weeks. The triumph of Doctrine over Numbers (Allies had more/better tanks, but no radios/doctrine).",
        "key_manifestations": [
          "Battle of France (Event)",
          "Dunkirk (Event)",
          "Great Dictator (Film)",
          "Hemingway's For Whom the Bell Tolls (Book)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "Barbarossa (+5.0%). The biggest tank battles in history. Guderian's Panzers encircled 600,000 Russians at Kiev. But... 'General Mud' and 'General Winter' stopped the machine. The T-34 appeared\u2014the 'Panzer Shock.' A tank superior to anything the Germans had.",
        "key_manifestations": [
          "Operation Barbarossa (Event)",
          "T-34 encounter (Tech Event)",
          "Pearl Harbor (Air maneuver)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 98.0,
        "description": "El Alamein and Stalingrad (-2.0%). The limits of the blitz. Rommel ran out of gas (Logistics). At Stalingrad, the Panzers were trapped in a city (Anti-Maneuver). The Soviets launched 'Operation Uranus'\u2014a perfect encirclement. The student (Zhukov) surpassed the master.",
        "key_manifestations": [
          "Battle of El Alamein (Event)",
          "Operation Uranus (Event)",
          "Tiger Tank introduced (Tech Event - Quality vs Quantity)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 95.0,
        "description": "Kursk (-3.0%). The death ride of the Panzer. Citadel. The Germans attacked a prepared defense. It became a slugging match (Material). The Soviet 'Deep Battle' followed\u2014continuous offensives across the whole front. The US Sherman tank\u2014reliable, mass-produced, mobile.",
        "key_manifestations": [
          "Battle of Kursk (Event)",
          "Prokhorovka (Event)",
          "Panther Tank introduced (Tech Event)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 98.0,
        "description": "Cobra and Bagration (+3.0%). Patton's breakout in France. Speed and aggression. Operation Bagration in the East\u2014destruction of Army Group Center. The ultimate expression of Mechanized Maneuver. The Germans were out-blitzed.",
        "key_manifestations": [
          "Operation Cobra (Event)",
          "Operation Bagration (Event)",
          "Battle of the Bulge (Last German gasp)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 90.0,
        "description": "Race to Berlin (-8.0%). The tank armies met. The war ended. The Tank was king of the land, but the Atomic Bomb suggested a new era. The 'Maneuver' might be irrelevant if the world is vaporized.",
        "key_manifestations": [
          "Fall of Berlin (Event)",
          "Trinity Test (Event)",
          "Centurion Tank (Tech Event - the MBT)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 85.0,
        "description": "Post-War Analysis (-5.0%). The 'Iron Curtain' fell. Tank armies faced off in Germany. The doctrine shifted to 'Tactical Nuclear Warfare.' Maneuver on a radioactive battlefield.",
        "key_manifestations": [
          "Churchill's Speech (Event)",
          "ENIAC (Tech Event)",
          "Best Years of Our Lives (Film)",
          "First Indochina War (Guerrilla anti-tank)"
        ]
      },
      "1947": {
        "variance_explained": 85.0,
        "description": "Kalashnikov (+0.0%). The AK-47. The infantryman's equalizer. But the Tank remained the measure of ground power. The Cold War doctrine of 'AirLand Battle' (later) began to form.",
        "key_manifestations": [
          "AK-47 design (Tech Event)",
          "Truman Doctrine (Event)",
          "Containment Policy (Static strategy)",
          "A Streetcar Named Desire (Play)"
        ]
      },
      "1948": {
        "variance_explained": 88.0,
        "description": "Arab-Israeli War (+3.0%). Maneuver in the desert. The Israelis used mobility to defeat larger Arab armies. A validation that the doctrine worked for small states too. Berlin Airlift\u2014air maneuver beating a ground blockade.",
        "key_manifestations": [
          "1948 War (Event)",
          "Berlin Airlift (Event)",
          "The Naked and the Dead (Book)",
          "Land Rover launched (Tech Event)"
        ]
      },
      "1949": {
        "variance_explained": 85.0,
        "description": "NATO formed (-3.0%). A defensive alliance. The concept of the 'Fulda Gap'\u2014the tank highway where WWIII would be fought. The Soviet Tank Army was the boogeyman of the West.",
        "key_manifestations": [
          "NATO formed (Event)",
          "Soviet Bomb (Event)",
          "1984 (Book)",
          "Victory of Chinese Communists (Maneuver of masses)"
        ]
      },
      "1950": {
        "variance_explained": 90.0,
        "description": "Korea (+5.0%). T-34s spearheading the North Korean invasion. Pusan Perimeter. Inchon (Amphibious maneuver). The Tank was still the breaker of lines. But the terrain limited it. The helicopter appeared (Medevac)\u2014the future of vertical maneuver.",
        "key_manifestations": [
          "North Korean Invasion (Event)",
          "Inchon Landing (Event)",
          "M26 Pershing vs T-34 (Tech Event)",
          "The Lonely Crowd (Book)"
        ]
      }
    }
  },
  "10_static_defense_maginot_psychology": {
    "name": "Static Defense & Maginot Psychology (The Concrete Shield)",
    "description": "This eigencluster represents the strategic conviction that the defensive form of war is inherently stronger than the offensive, driven by the lethality of modern firepower. It manifests physically in trench systems, bunkers, and massive fortifications (The Maginot Line, The Atlantic Wall), and psychologically in a risk-averse, containment-focused mindset. It is the dialectical reaction to the 'Cult of the Offensive' (Cluster 2) and the Industrial Slaughter of WWI (Cluster 1), attempting to replace the expenditure of blood with the expenditure of concrete.",
    "trajectory": {
      "1890": {
        "variance_explained": 8.0,
        "description": "The era of the 'Brialmont Forts.' General Brialmont fortified Li\u00e8ge and Namur with concrete and steel cupolas. The variance was moderate because, while engineers respected concrete, the prevailing military culture (Cluster 2) despised sitting still. The displacing force was the belief in maneuver; forts were seen as 'anchors' to pivot around, not walls to hide behind.",
        "key_manifestations": [
          "Construction of Li\u00e8ge fortifications (Tech Event)",
          "The Picture of Dorian Gray (Novel - the wall between art and reality)",
          "Testing of high-explosive shells against concrete (Tech Event)",
          "Capitaine Conan (Retrospective context - the disdain for digging)"
        ]
      },
      "1891": {
        "variance_explained": 8.0,
        "description": "Stasis (+0.0%). The French expanded the S\u00e9r\u00e9 de Rivi\u00e8res system. The logic was geometric: channel the invasion. However, the 'High Explosive' crisis (melinite shells) rendered masonry forts obsolete overnight, forcing a scramble to reinforce them with concrete. The 'Crisis of the Fort' began.",
        "key_manifestations": [
          "Upgrading of Verdun forts (Event)",
          "Tess of the d'Urbervilles (Novel)",
          "Experiments with reinforced concrete (Tech Event)",
          "Schlieffen's early memos (Planning to bypass the forts)"
        ]
      },
      "1892": {
        "variance_explained": 7.5,
        "description": "A slight decline (-0.5%). The Offensive school was gaining traction. Forts were criticized as 'traps' that ruined troop morale. The displacing force was the new smokeless powder rifle, which encouraged mobility. Fortification was seen as a sign of weakness.",
        "key_manifestations": [
          "French field regulations emphasizing maneuver (Doctrine)",
          "The Conquest of Bread (Book)",
          "Cholera in Hamburg (Barriers fail to stop disease)",
          "Grover Cleveland elected (US isolationism as static defense)"
        ]
      },
      "1893": {
        "variance_explained": 7.5,
        "description": "Stasis. The French solidified their eastern border, pushing Germany to consider the Belgium route (Schlieffen). The static defense of the border actually dictated the offensive violation of neutrality. The wall created the path around it.",
        "key_manifestations": [
          "Franco-Russian Alliance (Strategic encapsulation of Germany)",
          "Dvorak's New World Symphony (Cultural)",
          "Turner's Frontier Thesis (The end of the moving line)",
          "Fortification of Bucharest (Event)"
        ]
      },
      "1894": {
        "variance_explained": 7.0,
        "description": "Sino-Japanese War (-0.5%). The Chinese fortresses at Weihaiwei fell to Japanese maneuver. It reinforced the view that 'walls do not fight.' The dynamic beat the static. This emboldened the offensive theorists in Europe.",
        "key_manifestations": [
          "Fall of Weihaiwei (Event)",
          "The Jungle Book (Novel)",
          "Dreyfus Affair (Internal defense of the army)",
          "Maxim Gun adoption (The tool of static defense, misunderstood as offensive)"
        ]
      },
      "1895": {
        "variance_explained": 7.0,
        "description": "Stasis. H.G. Wells published *The Time Machine*\u2014the Morlocks lived underground (ultimate static defense). In military circles, the machine gun was still seen as an artillery protector, not the queen of the defensive battle.",
        "key_manifestations": [
          "The Time Machine (Book)",
          "Roentgen X-rays (Seeing through walls)",
          "Cuban War of Independence (Trocha lines - static barriers used)",
          "Lumiere Film (Capturing time)"
        ]
      },
      "1896": {
        "variance_explained": 7.5,
        "description": "Kitchener's Sudan campaign (+0.5%). The Zariba (thornbush defensive perimeter) combined with the Maxim gun slaughtered the Dervishes. It was a tactical validation of the static defense power, even if the campaign was offensive. ' Sit tight and shoot.'",
        "key_manifestations": [
          "Kitchener's advance (Event)",
          "The Island of Dr. Moreau (Book)",
          "Battle of Adwa (Italians attacked entrenched Ethiopians and died)",
          "Marconi patent (Invisible walls)"
        ]
      },
      "1897": {
        "variance_explained": 8.0,
        "description": "Bloch's *The Future of War* (+0.5%). Ivan Bloch analyzed the data and predicted the Trench Deadlock. He argued that the spade would be as important as the rifle. Generals ignored him. The intellectual variance of the cluster spiked, even if practice lagged.",
        "key_manifestations": [
          "The Future of War published (Intellectual Event)",
          "Dracula (The castle as stronghold)",
          "Tirpitz Plan (Naval static defense - 'Risk Fleet')",
          "Diamond Jubilee (Empire as a static fact)"
        ]
      },
      "1898": {
        "variance_explained": 8.5,
        "description": "Spanish-American War (+0.5%). The Spanish used 'Trochas' (fortified lines) in Cuba to contain rebels. It failed due to disease and morale, but the concept of the 'Linear Barrier' to insurgency was established. At Omdurman, the British line stood still and won.",
        "key_manifestations": [
          "Use of Trochas in Cuba (Event)",
          "Battle of Omdurman (Event)",
          "War of the Worlds (Martians in pits)",
          "Fashoda Incident (Standoff)"
        ]
      },
      "1899": {
        "variance_explained": 12.0,
        "description": "The Boer War (+3.5%). Battle of Magersfontein. The Boers dug trenches *at the base* of the hills, not the crest. The British marched into the flat fire zone and were decimated. The 'Invisible Trench' defeated the 'Visible Charge.' It was the first modern proof of the dominance of the hidden defensive.",
        "key_manifestations": [
          "Battle of Magersfontein (Event)",
          "Battle of Colenso (Event)",
          "Hague Convention (Trying to civilize war)",
          "The Awakening (Novel)"
        ]
      },
      "1900": {
        "variance_explained": 13.0,
        "description": "Boxer Rebellion (+1.0%). The Siege of the Legations. A small force behind walls held off a massive army. It validated the 'Redoubt' psychology. In South Africa, Kitchener built the 'Blockhouse' system\u2014a web of static forts to strangle movement.",
        "key_manifestations": [
          "Siege of the Legations (Event)",
          "Blockhouse System instituted (Strategic Event)",
          "Lord Jim (Book)",
          "Freud's Interpretation of Dreams (Defenses of the mind)"
        ]
      },
      "1901": {
        "variance_explained": 13.5,
        "description": "Stasis (+0.5%). The Blockhouses worked. They stopped the Boer commandos. The lesson: 'If you can't catch them, wall them out.' The wire fence became a weapon of war.",
        "key_manifestations": [
          "Wire fences in South Africa (Tech Event)",
          "Kim (The Great Game - spies breaching defenses)",
          "Queen Victoria dies (End of a static era)",
          "First Nobel Prizes (Event)"
        ]
      },
      "1902": {
        "variance_explained": 14.0,
        "description": "End of Boer War (+0.5%). The defense won the war (for the British, paradoxically, by using static lines to crush mobile Boers). However, in Europe, the 'Cult of the Offensive' (Cluster 2) dismissed these lessons as 'colonial anomalies.'",
        "key_manifestations": [
          "Treaty of Vereeniging (Event)",
          "Heart of Darkness (Book)",
          "Hobson's Imperialism (Book)",
          "Flatiron Building (Static verticality)"
        ]
      },
      "1903": {
        "variance_explained": 14.0,
        "description": "Stasis. The Wright Brothers flew. This introduced the 3rd dimension (Cluster 3), which would eventually doom this cluster. But for now, the 'Maginot' idea\u2014that a border could be sealed\u2014remained valid.",
        "key_manifestations": [
          "First Flight (The anti-wall)",
          "Call of the Wild (Book)",
          "The Riddle of the Sands (Invading the coast)",
          "Pogroms (The mob breaching the peace)"
        ]
      },
      "1904": {
        "variance_explained": 18.0,
        "description": "Port Arthur (+4.0%). The Siege. Trenches, barbed wire, machine guns, hand grenades, star shells. It was WWI in miniature. The Japanese took massive casualties attacking static Russian lines. Western observers saw it but filtered it through 'racial' explanations (Japanese bravery vs Russian stubbornness) rather than 'technological' ones.",
        "key_manifestations": [
          "Siege of Port Arthur begins (Event)",
          "Battle of Nanshan (Attacking entrenched positions)",
          "Peter Pan (Eternal childhood - static time)",
          "The Golden Bowl (Novel)"
        ]
      },
      "1905": {
        "variance_explained": 15.0,
        "description": "Mukden (-3.0%). The Japanese won by maneuver (flanking). This gave the 'Offensive' school the ammunition to suppress the 'Defensive' lessons of Port Arthur. 'See? Maneuver wins eventually.' The cluster was repressed.",
        "key_manifestations": [
          "Battle of Mukden (Event)",
          "Schlieffen Plan finalized (The ultimate anti-static plan)",
          "Einstein's Special Relativity (Time is relative, not static)",
          "Bloody Sunday (The palace guard defense)"
        ]
      },
      "1906": {
        "variance_explained": 12.0,
        "description": "Falli\u00e8res Decree (-3.0%). France explicitly de-emphasized defensive training. 'The offensive alone yields results.' The fortress troops were reduced. The concrete was neglected. The cluster hit a nadir.",
        "key_manifestations": [
          "Falli\u00e8res Decree (Policy)",
          "Launch of Dreadnought (Mobile sea fortress)",
          "The Jungle (Book)",
          "San Francisco Earthquake (City destroyed)"
        ]
      },
      "1907": {
        "variance_explained": 12.0,
        "description": "Stasis. Picasso's *Les Demoiselles d'Avignon*. Cubism. Breaking the static perspective. The cultural mood was fractured, dynamic, aggressive. Defense was 'boring.'",
        "key_manifestations": [
          "Les Demoiselles d'Avignon (Art)",
          "The Secret Agent (Book)",
          "Hague Convention (Laws of war)",
          "Triple Entente (Encirclement)"
        ]
      },
      "1908": {
        "variance_explained": 12.0,
        "description": "Bosnian Crisis. Austria annexed Bosnia. A fait accompli. The borders of Europe were shifting. The 'static' map was an illusion. Fortifications in the Balkans began to be modernized.",
        "key_manifestations": [
          "Bosnian Crisis (Event)",
          "The War in the Air (Wells predicts cities indefensible)",
          "Metz fortifications upgraded (Event)",
          "Scouting for Boys (Book)"
        ]
      },
      "1909": {
        "variance_explained": 13.0,
        "description": "Marinetti's Manifesto (+1.0%). 'We want to demolish museums and libraries.' An attack on the static repositories of culture. The intellectual mood was anti-static. But practically, the machine gun (Maxim) was being bought in thousands.",
        "key_manifestations": [
          "Futurist Manifesto (Art)",
          "Bl\u00e9riot crosses Channel (Ending the moat)",
          "Declaration of London (Naval law)",
          "Stein's Three Lives (Book)"
        ]
      },
      "1910": {
        "variance_explained": 14.0,
        "description": "Norman Angell (+1.0%). *The Great Illusion*. Argued that finance was the new defense. Physical conquest was obsolete. A 'virtual' static defense of property rights. He was wrong.",
        "key_manifestations": [
          "The Great Illusion (Book)",
          "Howards End (Book)",
          "Stravinsky's Firebird (Music)",
          "Mexican Revolution (Order collapses)"
        ]
      },
      "1911": {
        "variance_explained": 15.0,
        "description": "Agadir Crisis (+1.0%). The French moved to 'protect' Morocco. The borders hardened. Joffre became Chief of Staff. He focused on the offensive (Plan XVII), but also quietly improved the rail lines to the eastern forts.",
        "key_manifestations": [
          "Agadir Crisis (Event)",
          "Joffre appointed (Bio Event)",
          "Fantomas (The criminal who goes through walls)",
          "Machu Picchu rediscovered (Static history)"
        ]
      },
      "1912": {
        "variance_explained": 18.0,
        "description": "Balkan Wars (+3.0%). The Bulgarians were stopped at the Chataldja Line outside Constantinople. Field fortifications saved the Ottoman capital. It proved that a hasty trench line could stop a victorious army. Western observers noted it, but didn't change doctrine.",
        "key_manifestations": [
          "Battle of Chataldja (Event)",
          "Titanic Sinking (Tech fallibility)",
          "Duchamp's Nude Descending a Staircase (Motion)",
          "Jung's Psychology of the Unconscious (Book)"
        ]
      },
      "1913": {
        "variance_explained": 20.0,
        "description": "The French Three-Year Law (+2.0%). Increasing the standing army to man the border. The tension was palpable. The 'Frontier' was becoming a loaded gun. Concrete at Verdun was reinforced.",
        "key_manifestations": [
          "Three Year Law (Policy)",
          "Rite of Spring (Cultural explosion)",
          "Proust's Swann's Way (Memory as static preservation)",
          "Zabern Affair (Event)"
        ]
      },
      "1914": {
        "variance_explained": 55.0,
        "description": "The Great Inversion (+35.0%). August: The War of Movement. September: The Miracle on the Marne. October: The Race to the Sea. November: The Trench Line established. The 'Cult of the Offensive' died in the mud. The 'Static Defense' became the absolute reality. The spade defeated the bayonet. Switzerland mobilized its 'National Redoubt' (neutral static defense).",
        "key_manifestations": [
          "First Battle of Ypres (The line solidifies)",
          "Fall of Li\u00e8ge (The failure of old forts)",
          "The Christmas Truce (Static peace)",
          "Digging of the Western Front (Event)"
        ]
      },
      "1915": {
        "variance_explained": 75.0,
        "description": "The Deadlock (+20.0%). Barbed wire. Machine gun nests. No Man's Land. The defense was supreme. Offensive after offensive (Loos, Champagne) failed with massive casualties. The 'Empty Battlefield'\u2014everyone was underground. The struggle became 'How to break the Static Line?' (Gas, Mines, Artillery).",
        "key_manifestations": [
          "Second Battle of Ypres (Gas introduced to break deadlock)",
          "Gallipoli (Amphibious attempt to bypass static line)",
          "The Rainbow (Book)",
          "Introduction of the Steel Helmet (Static protection)"
        ]
      },
      "1916": {
        "variance_explained": 85.0,
        "description": "Verdun (+10.0%). The Battle of the Forts. Douaumont. Vaux. The French motto 'Ils ne passeront pas' (They shall not pass). The ultimate expression of the static will. The Somme showed that even week-long bombardment couldn't destroy deep dugouts. The Hindenburg Line construction began\u2014defense in depth.",
        "key_manifestations": [
          "Battle of Verdun (Event)",
          "Construction of Hindenburg Line (Strategic Event)",
          "Battle of the Somme (Event)",
          "Dadaism (Rejection of the logic of the line)"
        ]
      },
      "1917": {
        "variance_explained": 80.0,
        "description": "Elastic Defense (-5.0% Rigid, +Flexible). The Germans adopted 'Defense in Depth.' Yielding the front line to trap the attacker in the kill zone. The static line became a 'zone' of death. Passchendaele\u2014drowning in the static mud. The Maginot seed was planted in the minds of French veterans: 'Next time, we build a wall of steel, not flesh.'",
        "key_manifestations": [
          "German Defense in Depth doctrine (Event)",
          "Battle of Passchendaele (Event)",
          "Nivelle Offensive failure (Event)",
          "Zimmerman Telegram (Breaching the Atlantic wall)"
        ]
      },
      "1918": {
        "variance_explained": 70.0,
        "description": "The Breach (-10.0%). The Hindenburg Line was broken (Battle of St. Quentin Canal). Tanks + Artillery. It proved the Static Line *could* be broken with enough material. But the cost was so high (millions dead) that the *psychological* lesson drawn by France was: 'We need *better* forts,' not 'Forts are useless.'",
        "key_manifestations": [
          "Breaking of the Hindenburg Line (Event)",
          "Kaiserschlacht (Stormtroopers bypass hard points)",
          "Armistice (Event)",
          "Spengler's Decline of the West (Civilization hardening into static form)"
        ]
      },
      "1919": {
        "variance_explained": 65.0,
        "description": "The Trauma (+-5.0%). France lost 1.4 million men. They could not afford to fight a mobile war again. P\u00e9tain (Hero of Verdun) championed the defensive. The 'Cordon Sanitaire' was established in the East\u2014a political static line against Bolshevism.",
        "key_manifestations": [
          "Treaty of Versailles (Demilitarized Rhineland - a buffer)",
          "P\u00e9tain appointed Vice-President of War Council (Bio Event)",
          "Cordon Sanitaire policy (Strategic Event)",
          "Bauhaus (Functionalist concrete)"
        ]
      },
      "1920": {
        "variance_explained": 60.0,
        "description": "Stasis. The Polish-Soviet War was mobile, but France ignored it. They looked at the Western Front map. The 'Commission de D\u00e9fense des Fronti\u00e8res' was formed. The debate began: Continuous Line vs Fortified Regions.",
        "key_manifestations": [
          "Commission de D\u00e9fense des Fronti\u00e8res established (Institutional Event)",
          "Beyond the Pleasure Principle (Death drive - return to stasis)",
          "Wall Street Bombing (Terror breaching security)",
          "Kapp Putsch (Event)"
        ]
      },
      "1921": {
        "variance_explained": 55.0,
        "description": "Stasis. Douhet published *Command of the Air*. He argued planes would fly *over* the lines. The Static school ignored him, arguing anti-aircraft guns would fill the gap. The psychological need for a 'Roof' over France.",
        "key_manifestations": [
          "Command of the Air (Book)",
          "Tractatus (Philosophy of limits)",
          "Riff War (Mobile colonial war)",
          "Washington Naval Treaty (Fortifying the Pacific islands)"
        ]
      },
      "1922": {
        "variance_explained": 58.0,
        "description": "Maginot appointed Minister of War (+3.0%). Andr\u00e9 Maginot. A mutilated veteran. He embodied the defensive will. He pushed for funding. 'We cannot leave our northern provinces open again.' The Cluster found its architect.",
        "key_manifestations": [
          "Maginot becomes Minister (Bio Event)",
          "The Waste Land (Fragments shored against ruins)",
          "Ulysses (Book)",
          "Mussolini's March on Rome (Political breakthrough)"
        ]
      },
      "1923": {
        "variance_explained": 60.0,
        "description": "The Ruhr Occupation (+2.0%). France marched into Germany. It was an offensive move, but it failed politically. It reinforced the feeling of isolation. 'We must lock the door.' The decision was made to build the Line.",
        "key_manifestations": [
          "Occupation of the Ruhr (Event)",
          "Le Corbusier's Vers une architecture (The house as a machine for living)",
          "Beer Hall Putsch (Event)",
          "Hyperinflation (Economic walls collapse)"
        ]
      },
      "1924": {
        "variance_explained": 60.0,
        "description": "Stasis. The 'Locarno' negotiations began. The diplomatic shield. But the military planning for the concrete shield continued. The 'Lauter' and 'Vosges' fortified regions were planned.",
        "key_manifestations": [
          "Magic Mountain (The sanatorium as a sealed world)",
          "Surrealist Manifesto (Breaking mental walls)",
          "Dawes Plan (Economic stability)",
          "Lenin dies (Embalmed - static icon)"
        ]
      },
      "1925": {
        "variance_explained": 62.0,
        "description": "Locarno Treaty (+2.0%). Paradoxically, by guaranteeing the border, it solidified the 'defensive' posture. Germany was in the League. War was 'outlawed.' France felt safe to pour concrete. The 'Ligne Maginot' funding began to trickle.",
        "key_manifestations": [
          "Locarno Treaties (Event)",
          "Great Gatsby (Novel)",
          "Mein Kampf (The threat that necessitates the wall)",
          "Art Deco (Streamlined but monumental)"
        ]
      },
      "1926": {
        "variance_explained": 65.0,
        "description": "Commission d'Organisation des R\u00e9gions Fortifi\u00e9es (CORF) (+3.0%). The bureaucratic body of the Line. Standardization of bunkers. The 'Ouvrage' concept\u2014underground cities. It was the industrialization of the trench.",
        "key_manifestations": [
          "CORF established (Institutional Event)",
          "Metropolis (The underground city)",
          "Sun Also Rises (Novel)",
          "General Strike in UK (Social deadlock)"
        ]
      },
      "1927": {
        "variance_explained": 68.0,
        "description": "Construction Begins (+3.0%). Experimental sections. The psychological variance rose. The French public loved it. It was tangible security. 'Concrete is cheaper than blood.' The 'Maginot Mentality' set in\u2014the belief that the war could be fought without casualties.",
        "key_manifestations": [
          "Start of Maginot construction (Event)",
          "The Jazz Singer (Sound breaching silence)",
          "Being and Time (Philosophy)",
          "Lindbergh Flight (Overcoming barriers)"
        ]
      },
      "1928": {
        "variance_explained": 70.0,
        "description": "Kellogg-Briand Pact (+2.0%). War outlawed. The Maginot Line was framed as a 'Peace' weapon\u2014purely defensive. 'We will never attack, so we must be invulnerable.' The ultimate passive-aggressive strategy.",
        "key_manifestations": [
          "Kellogg-Briand Pact (Diplomatic Event)",
          "Lady Chatterley's Lover (Book)",
          "Mickey Mouse (Cultural)",
          "Stalin's Five Year Plan (Fortress Russia)"
        ]
      },
      "1929": {
        "variance_explained": 75.0,
        "description": "Maginot Law Passed (+5.0%). 2.9 Billion Francs voted. Massive construction. The Great Depression hit, making public works (forts) politically useful. The Line became a jobs program. It was the 'Pyramids' of the 20th century.",
        "key_manifestations": [
          "Maginot Law (Legal Event)",
          "Wall Street Crash (Economic collapse)",
          "All Quiet on the Western Front (Book - reminder of the trenches)",
          "Lateran Treaty (Vatican City - the walled state)"
        ]
      },
      "1930": {
        "variance_explained": 80.0,
        "description": "Evacuation of the Rhineland (+5.0%). French troops left Germany (5 years early). The buffer zone was gone. The Maginot Line became the *only* barrier. The psychological reliance on it became absolute. De Gaulle wrote *Vers l'Arm\u00e9e de M\u00e9tier* arguing for mobile tanks; he was ridiculed.",
        "key_manifestations": [
          "French withdrawal from Rhineland (Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "De Gaulle's writings (The ignored alternative)"
        ]
      },
      "1931": {
        "variance_explained": 82.0,
        "description": "Stasis. Construction fever. The 'Hackenberg' ouvrage. Air conditioning. Electric trains underground. It was a technological marvel. It convinced the French they were modern, when they were strategically archaic. The 'Siegfried Line' (Westwall) planning began in Germany.",
        "key_manifestations": [
          "Construction of Hackenberg (Event)",
          "Empire State Building (Vertical fortress)",
          "M (Film)",
          "Japanese invasion of Manchuria (The failure of the League's paper wall)"
        ]
      },
      "1932": {
        "variance_explained": 85.0,
        "description": "Maginot Dies (+3.0%). The architect died. He became a saint of the Republic. The Line took on a mythical status. It was 'The Great Wall of France.' In Belgium, Fort Eben-Emael was planned\u2014the 'impregnable' diamond.",
        "key_manifestations": [
          "Death of Andr\u00e9 Maginot (Event)",
          "Brave New World (Stability above all)",
          "Chaco War (Trench warfare in the jungle)",
          "Neutron discovered (Particle that penetrates)"
        ]
      },
      "1933": {
        "variance_explained": 88.0,
        "description": "Hitler in Power (+3.0%). The threat was real. The Line was justified. 'Thank God for Maginot.' Belgium declared neutrality, refusing to extend the line along the French-Belgian border (The fatal gap). The French accepted this, assuming they would fight *in* Belgium.",
        "key_manifestations": [
          "Hitler becomes Chancellor (Event)",
          "King Kong (The monster breaks the wall)",
          "Reichstag Fire (Internal breach)",
          "Belgium's neutrality policy shifts (Strategic Event)"
        ]
      },
      "1934": {
        "variance_explained": 90.0,
        "description": "Stasis. The Line was mostly finished. It was a tourist attraction. Churchill visited. It radiated security. But Guderian was writing *Achtung - Panzer!*\u2014how to smash it. The psychological blindness was total.",
        "key_manifestations": [
          "Churchill visits Maginot Line (Event)",
          "Tender is the Night (Book)",
          "Night of the Long Knives (Event)",
          "Ligne Challe (French colonial electric fence in Algeria - precursor)"
        ]
      },
      "1935": {
        "variance_explained": 92.0,
        "description": "Abyssinian Crisis (+2.0%). The League failed. Collective security died. Only the Wall remained. Italy fortified the Alps (Alpine Wall). Switzerland reinforced the National Redoubt. Europe was locking itself in.",
        "key_manifestations": [
          "Invasion of Ethiopia (Event)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Racial walls)",
          "Radar developed (The electronic wall)"
        ]
      },
      "1936": {
        "variance_explained": 95.0,
        "description": "Remilitarization of the Rhineland (+3.0%). Hitler marched into the buffer zone. France did nothing. Why? Because the Maginot Line was *defensive*. It gave them no ability to project power offensive. The tool dictated the policy. The Line paralyzed France.",
        "key_manifestations": [
          "Remilitarization of Rhineland (Event)",
          "Spanish Civil War (Siege of Alc\u00e1zar - static heroism)",
          "Modern Times (Film)",
          "General Theory (Book)"
        ]
      },
      "1937": {
        "variance_explained": 95.0,
        "description": "Stasis. The 'Westwall' (Siegfried Line) construction accelerated. Germany built its own shield so it could attack in the East. Two walls facing each other. The 'Phoney War' psychology was pre-programmed.",
        "key_manifestations": [
          "Westwall construction (Event)",
          "Guernica (The air threat to the static)",
          "Degenerate Art (Cultural walls)",
          "Snow White (Animation)"
        ]
      },
      "1938": {
        "variance_explained": 98.0,
        "description": "Sudetenland (+3.0%). The Czech 'Maginot Line' (Sudeten fortifications) was handed over to Hitler without a shot. The static defenses were useless if the politicians folded. It proved walls are only as strong as the will behind them.",
        "key_manifestations": [
          "Munich Agreement (Event)",
          "Anschluss (Event)",
          "Nausea (Book)",
          "War of the Worlds Broadcast (Invasion panic)"
        ]
      },
      "1939": {
        "variance_explained": 100.0,
        "description": "The Phoney War (+2.0%). War declared. France sat behind the Line. 'Dr\u00f4le de guerre.' They waited. They believed the blockade (Cluster 4) and the Line (Cluster 10) would strangle Germany. It was the peak of the delusion. The Maginot Line *was* the strategy.",
        "key_manifestations": [
          "The Phoney War (Event)",
          "Grapes of Wrath (Book)",
          "Invasion of Poland (The warning ignored)",
          "Gone with the Wind (Film)"
        ]
      },
      "1940": {
        "variance_explained": 10.0,
        "description": "The Collapse (-90.0%). The Manstein Plan. The Germans went *through* the Ardennes and *around* the Line. Eben-Emael fell to gliders (Vertical envelopment). The Maginot Line was not penetrated; it was irrelevant. It was the greatest sunk cost fallacy in history. The Psychology shattered. France fell.",
        "key_manifestations": [
          "Fall of Fort Eben-Emael (Event)",
          "German breakthrough at Sedan (Event)",
          "Armistice at Compi\u00e8gne (Event)",
          "The Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 20.0,
        "description": "The Atlantic Wall (+10.0%). Hitler, having beaten the Maginot Line, decided to build one. 'Festung Europa.' The Psychology transferred to the conqueror. He believed concrete could stop the Anglo-Saxons. The Cluster mutated from French defense to German hubris.",
        "key_manifestations": [
          "Construction of Atlantic Wall begins (Event)",
          "Barbarossa (Siege of Leningrad - static horror)",
          "Citizen Kane (Film)",
          "Pearl Harbor (Surprise breaching defense)"
        ]
      },
      "1942": {
        "variance_explained": 25.0,
        "description": "Stalingrad (+5.0%). A static defense of a ruined city. 'No Retreat.' Hitler forbade maneuver. The Kessel (Cauldron). The Static psychology destroyed the 6th Army. In the Pacific, the Japanese dug into islands (Tarawa, Iwo Jima later)\u2014the 'cave' defense.",
        "key_manifestations": [
          "Battle of Stalingrad (Event)",
          "Dieppe Raid (Testing the Atlantic Wall)",
          "Casablanca (Film)",
          "Albert Speer takes over construction (Bio Event)"
        ]
      },
      "1943": {
        "variance_explained": 30.0,
        "description": "Kursk and Italy (+5.0%). The Germans built the 'Panther Line' in Russia. The 'Gustav Line' in Italy. They became masters of the fighting retreat, but the reliance on 'Lines' persisted. At Kursk, the Soviet defensive belts (depth) worked\u2014the *right* way to do static defense (as a trap, not a wall).",
        "key_manifestations": [
          "Battle of Kursk (Soviet defense belts)",
          "Gustav Line battles (Event)",
          "Warsaw Ghetto Uprising (Urban fortress)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 20.0,
        "description": "D-Day (-10.0%). The Atlantic Wall was breached in a day. Deception (Cluster 6) + Firepower. The 'Siegfried Line' delayed the Allies in the autumn, but couldn't stop them. The static defense was a delay, not a stop. The V-1 launch sites were static targets for bombers.",
        "key_manifestations": [
          "D-Day landings (Event)",
          "Breaking of the Siegfried Line (Event)",
          "Monte Cassino (The monastery as fortress)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 5.0,
        "description": "The Flakturm and the Bunker (-15.0%). The last static defenses. The Zoo Flak Tower in Berlin. Hitler in the F\u00fchrerbunker. The ultimate contraction. The Atom Bomb made all physical walls moot. You cannot dig deep enough.",
        "key_manifestations": [
          "Fall of Berlin (Event)",
          "Hiroshima (Event)",
          "Maginot Line used by Germans (Irony)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 5.0,
        "description": "The Iron Curtain (+0.0%). The term used by Churchill. A metaphorical static line. The physical fortifications were blown up. The defense moved to the ideological and the nuclear.",
        "key_manifestations": [
          "Iron Curtain Speech (Rhetoric)",
          "Bikini Atoll tests (Event)",
          "Best Years of Our Lives (Film)",
          "Nuremberg Verdicts (Event)"
        ]
      },
      "1947": {
        "variance_explained": 5.0,
        "description": "Containment (+0.0%). Kennan's 'Long Telegram.' The strategy of the West was static: 'Contain' Soviet power. Do not rollback. A global Maginot Line of alliances.",
        "key_manifestations": [
          "Truman Doctrine (Policy)",
          "Long Telegram (Document)",
          "A Streetcar Named Desire (Play)",
          "National Security Act (Institutional defense)"
        ]
      },
      "1948": {
        "variance_explained": 5.0,
        "description": "Berlin Blockade (+0.0%). A siege. The Soviets tried to wall off the city. The Airlift (Cluster 3) jumped the wall. Technology defeated the static blockade.",
        "key_manifestations": [
          "Berlin Blockade (Event)",
          "1948 Arab-Israeli War (The Green Line established)",
          "The Naked and the Dead (Book)",
          "Apartheid begins (Internal walls)"
        ]
      },
      "1949": {
        "variance_explained": 5.0,
        "description": "NATO (+0.0%). A static treaty line. 'An attack on one is an attack on all.' The defensive line was now drawn on a map, not in concrete. China built the 'Bamboo Curtain.'",
        "key_manifestations": [
          "NATO Treaty (Event)",
          "Soviet Bomb (The end of physical security)",
          "1984 (The tyranny of the enclosed state)",
          "Chinese Revolution (Event)"
        ]
      },
      "1950": {
        "variance_explained": 8.0,
        "description": "Pusan Perimeter (+3.0%). Korea. A return to the desperate defensive line. 'Stand or Die.' The 38th Parallel became the new Maginot Line\u2014a frozen conflict line that exists to this day. The cluster survived in the DMZ.",
        "key_manifestations": [
          "Pusan Perimeter battle (Event)",
          "38th Parallel decision (Strategic Event)",
          "The Lonely Crowd (Book)",
          "Construction of deep bunkers for US leadership (Event)"
        ]
      }
    }
  },
  "11_chemical_biological_anxiety": {
    "name": "Chemical & Biological Anxiety (The Toxic Cloud)",
    "description": "This eigencluster maps the cultural and military evolution of 'invisible death'\u2014the use of poison gas, biological agents, and the fear of contamination. It transitions from a taboo method of warfare to an industrial reality in 1915, and subsequently into a pervasive societal nightmare of 'gas from the air' during the interwar years. It culminates in the 'industrialized biology' of the Holocaust and the dawn of the nuclear age (radiation as the ultimate toxin). It represents the dark side of the chemical revolution: the realization that the air itself could be weaponized.",
    "trajectory": {
      "1890": {
        "variance_explained": 1.5,
        "description": "The cluster was latent, existing primarily in the realm of 'scientific romance' and industrial accidents. The rapid expansion of the German chemical dye industry (IG Farben precursors) created the material base. The variance was low because war was still conceived as a kinetic, solid-projectile affair. The 'displacing force' was the strong moral taboo against poisoning, a legacy of chivalric codes.",
        "key_manifestations": [
          "Expansion of BASF/Bayer chemical plants (Industrial Event)",
          "The Sign of Four (Novel - exotic poisons)",
          "Testing of Lyddite/Melinite (Chemical explosives, not gas)",
          "Koch's postulates on bacteriology (Scientific context)"
        ]
      },
      "1891": {
        "variance_explained": 1.5,
        "description": "Stasis. The focus remained on high explosives. However, the 'smoke' of battle was disappearing due to smokeless powder (Cluster 1), paradoxically making the battlefield 'cleaner' visually while chemistry made it more lethal. The fear of 'miasma' was fading in medicine, replaced by the specific fear of the microbe.",
        "key_manifestations": [
          "Adoption of Smokeless Powder (Tech Event)",
          "The Picture of Dorian Gray (Novel - corruption/poisoning of the soul)",
          "Haber born (Bio Event - future father of chemical war)",
          "Kipling's 'The Light That Failed' (Novel)"
        ]
      },
      "1892": {
        "variance_explained": 1.8,
        "description": "Cholera in Hamburg (+0.3%). A biological shock. The city was sealed. It demonstrated how invisible agents could destroy a modern metropolis. The state's response\u2014quarantine, disinfection\u2014prefigured the 'decontamination' protocols of chemical warfare. It was a civilian rehearsal for biological defense.",
        "key_manifestations": [
          "Hamburg Cholera Epidemic (Event)",
          "Koch's investigation of Cholera (Scientific Event)",
          "The Germ-Plasm by Weismann (Book - biological determinism)",
          "Munich Secession (Art - breaking away from 'stagnant' air)"
        ]
      },
      "1893": {
        "variance_explained": 2.0,
        "description": "Stasis. The Hague Conferences were being planned. The issue of 'Asphyxiating Gases' was put on the agenda by diplomats who foresaw the trajectory of chemistry. The variance is driven by the *anticipation* of the weapon, not its existence.",
        "key_manifestations": [
          "Planning for Hague Conference (Diplomatic Event)",
          "The Great War of 189- (Novel - mentions asphyxiating shells)",
          "Synthesizing of new dyes (Industrial Event)",
          "Dvorak's New World Symphony (Cultural)"
        ]
      },
      "1894": {
        "variance_explained": 2.0,
        "description": "Yersin discovers the Plague bacillus (+0.0%). The identification of the 'Black Death' agent. It moved the plague from mythology to biology. In the Sino-Japanese War, disease killed more than bullets\u2014the standard military reality that chemistry would soon try to invert (killing the enemy with chemistry).",
        "key_manifestations": [
          "Discovery of Yersinia pestis (Scientific Event)",
          "The Jungle Book (Novel)",
          "Sino-Japanese War disease casualties (Event)",
          "Trilby (Novel - mesmerism as invisible influence)"
        ]
      },
      "1895": {
        "variance_explained": 2.2,
        "description": "The 'Time Machine' (+0.2%). Wells depicted the future as a biological degeneration. X-Rays discovered\u2014invisible rays that penetrate the body. The cultural sensitivity to 'invisible forces' increased. The chemical industry in Germany began investigating chlorine for industrial use.",
        "key_manifestations": [
          "The Time Machine (Book)",
          "Roentgen discovers X-rays (Scientific Event)",
          "Lumiere films (Tech Event)",
          "Pasteur dies (Event - the father of germ theory)"
        ]
      },
      "1896": {
        "variance_explained": 2.5,
        "description": "The Island of Dr. Moreau (+0.3%). Biological engineering as horror. Wells explored the plasticity of life. This fed into the 'Biological Anxiety'\u2014that science would create monsters. In military circles, the 'Dum-Dum' bullet was debated\u2014a physical 'toxin' that deformed on impact.",
        "key_manifestations": [
          "The Island of Dr. Moreau (Book)",
          "Becquerel discovers radioactivity (Scientific Event)",
          "Development of the Dum-Dum bullet (Tech Event)",
          "Nobel's will established (Prize for chemistry)"
        ]
      },
      "1897": {
        "variance_explained": 2.5,
        "description": "Stasis. The 'War of the Worlds' serialized. The Martians use the 'Black Smoke'\u2014a heavy, creeping poison gas. Wells explicitly predicted chemical warfare and the need for gas masks. It was a fictional blueprint that military planners would later replicate almost exactly.",
        "key_manifestations": [
          "The War of the Worlds serialization (Cultural Event)",
          "Dracula (Novel - blood infection as metaphor)",
          "Thomson discovers the electron (Scientific Event)",
          "Bayer synthesizes Aspirin (Industrial Event - dual use chemistry)"
        ]
      },
      "1898": {
        "variance_explained": 3.0,
        "description": "The Curies discover Polonium and Radium (+0.5%). The 'Active' matter. It glowed. It burned. It was the ultimate 'magical' chemical. The public fascination with Radium began, masking the danger. In the Spanish-American War, 'Embalmed Beef' scandal\u2014chemical preservation poisoning soldiers.",
        "key_manifestations": [
          "Discovery of Radium (Scientific Event)",
          "Embalmed Beef Scandal (Event)",
          "War of the Worlds published (Book)",
          "Fashoda Incident (Event)"
        ]
      },
      "1899": {
        "variance_explained": 4.0,
        "description": "First Hague Conference (+1.0%). Declaration IV, 2: 'The Contracting Powers agree to abstain from the use of projectiles the object of which is the diffusion of asphyxiating or deleterious gases.' The US (Mahan) refused to sign, arguing gas was no worse than bullets. The ban signaled that the weapon was technically feasible.",
        "key_manifestations": [
          "Hague Declaration IV, 2 (Legal Event)",
          "Mahan's refusal to sign (Diplomatic Event)",
          "Heart of Darkness (Novel)",
          "Boer War begins (Event)"
        ]
      },
      "1900": {
        "variance_explained": 4.0,
        "description": "Stasis. The Boxer Rebellion. Rumors of 'poisoning' wells. The 'Yellow Peril' rhetoric often included biological metaphors (swarms, infection). Planck's Quantum Theory\u2014matter is not solid, but energy. The dissolution of the material world in physics paralleled the dissolution of 'solid' warfare.",
        "key_manifestations": [
          "Planck's Quantum Theory (Scientific Event)",
          "Lord Jim (Novel)",
          "Boxer Rebellion (Event)",
          "Freud's Interpretation of Dreams (Book)"
        ]
      },
      "1901": {
        "variance_explained": 4.2,
        "description": "The Nobel Prize in Chemistry (+0.2%). Awarded to Van 't Hoff. It celebrated the 'Chemist' as the titan of the new age. The prestige of the German chemical industry (IG Farben precursors) was paramount. They were the 'Arsenal' of the next war, though few realized it.",
        "key_manifestations": [
          "First Nobel Prizes (Event)",
          "Kim (Novel)",
          "Queen Victoria dies (Event)",
          "Rockefeller Institute for Medical Research founded (Institutional Event)"
        ]
      },
      "1902": {
        "variance_explained": 4.5,
        "description": "Stasis. The 'White Man's Burden' included the 'war on disease' in the tropics. Colonial policing involved biological control (draining swamps, quinine). The 'Gas' remained a theoretical terror.",
        "key_manifestations": [
          "Ross wins Nobel for Malaria work (Scientific Event)",
          "Heart of Darkness published (Book)",
          "Hobson's Imperialism (Book)",
          "End of Boer War (Event)"
        ]
      },
      "1903": {
        "variance_explained": 5.0,
        "description": "The Curies win Nobel (+0.5%). 'Radioactivity' coined. The idea that matter could spontaneously emit energy/poison. It added a spectral quality to the materialist worldview. Jack London's *The People of the Abyss* described the London fog as a suffocating, toxic entity\u2014urban pollution as proto-gas.",
        "key_manifestations": [
          "Curie Nobel Prize (Event)",
          "The People of the Abyss (Book)",
          "The Call of the Wild (Novel)",
          "Pogroms in Russia (Social toxicity)"
        ]
      },
      "1904": {
        "variance_explained": 5.0,
        "description": "Russo-Japanese War (+0.0%). The Japanese used 'Shimose' powder (picric acid), which released toxic fumes when it exploded, coloring the skin of Russian sailors yellow. It was accidental chemical warfare, noting the psychological terror of 'poisoned fire.'",
        "key_manifestations": [
          "Battle of the Yellow Sea (Shimose fumes noted)",
          "The Golden Bowl (Novel)",
          "Peter Pan (Play)",
          "Report on Shimose toxicity (Tech Event)"
        ]
      },
      "1905": {
        "variance_explained": 5.5,
        "description": "The Reden Mine disaster (+0.5%). Coal dust explosion. Gas killed the miners. A reminder of the lethality of atmospheric change. Einstein's *Brownian Motion* proved the existence of atoms/molecules. The granularity of the poison was confirmed.",
        "key_manifestations": [
          "Reden Mine disaster (Event)",
          "Einstein's papers (Scientific Event)",
          "The Jungle (Writing begins - food adulteration)",
          "Revolution of 1905 (Social eruption)"
        ]
      },
      "1906": {
        "variance_explained": 6.0,
        "description": "Upton Sinclair's *The Jungle* (+0.5%). 'Borax and glycerine.' The public panicked about chemical adulteration of food. The 'Pure Food and Drug Act.' The anxiety shifted from the battlefield to the dinner table. We were being poisoned by industry.",
        "key_manifestations": [
          "The Jungle (Book)",
          "Pure Food and Drug Act (Legal Event)",
          "Willst\u00e4tter studies chlorophyll (Chemistry)",
          "San Francisco Earthquake (Fire and smoke)"
        ]
      },
      "1907": {
        "variance_explained": 6.5,
        "description": "Second Hague Conference (+0.5%). Reaffirmed the gas ban. The fact that they had to reaffirm it showed the temptation was growing. Germany signed it. Fritz Haber began working on nitrogen fixation\u2014the dual-use technology for fertilizer and explosives.",
        "key_manifestations": [
          "Second Hague Conference (Diplomatic Event)",
          "Haber-Bosch process development (Scientific Event)",
          "The Secret Agent (Novel - explosives)",
          "Cubism begins (Fractured reality)"
        ]
      },
      "1908": {
        "variance_explained": 7.0,
        "description": "The Haber-Bosch Process patented (+0.5%). Air became bread (fertilizer) and bombs (nitrates). The mastery of the atmosphere. The 'Tunguska Event' (meteor airburst) flattened Siberian forest\u2014a natural demonstration of blast/heat on a nuclear scale.",
        "key_manifestations": [
          "Haber-Bosch patent (Tech Event)",
          "Tunguska Event (Event)",
          "The War in the Air (Book - destruction from above)",
          "Metchnikoff wins Nobel (Immunity)"
        ]
      },
      "1909": {
        "variance_explained": 7.5,
        "description": "Salvarsan discovered by Ehrlich (+0.5%). The 'Magic Bullet.' The first synthetic chemical to cure a disease (Syphilis). If chemistry could target a specific microbe, could it target a specific soldier? The concept of 'Chemotherapy' and 'Chemical Warfare' were twins.",
        "key_manifestations": [
          "Discovery of Salvarsan (Scientific Event)",
          "Futurist Manifesto (Glorifying destruction)",
          "The Machine Stops (Story)",
          "Bleriot flight (The delivery system)"
        ]
      },
      "1910": {
        "variance_explained": 8.0,
        "description": "Halley's Comet (+0.5%). Astronomers detected Cyanogen gas in the tail. The earth passed through it. Mass panic. People bought 'Comet Pills' and gas masks. It was the first global 'Gas Scare.' It showed the psychological fragility of the population to atmospheric threats.",
        "key_manifestations": [
          "Halley's Comet Panic (Cultural Event)",
          "The Great Illusion (Book)",
          "Ehrlich wins Nobel (Science)",
          "Howards End (Novel)"
        ]
      },
      "1911": {
        "variance_explained": 8.0,
        "description": "Stasis. Agadir Crisis. The tension was geopolitical. Curie won her second Nobel (Chemistry). The 'Radium Girls' phenomenon (painting dials) began\u2014slow poisoning of workers labeled as progress.",
        "key_manifestations": [
          "Curie Second Nobel (Event)",
          "Agadir Crisis (Event)",
          "Rutherford discovers nucleus (Science)",
          "Fantomas (Novel - criminal genius)"
        ]
      },
      "1912": {
        "variance_explained": 8.5,
        "description": "The 'Smoke Abatement' movement (+0.5%). Recognition of industrial smog as a killer. The 'Fog' in literature (T.S. Eliot's Prufrock later) became a symbol of modern malaise. The Balkan Wars saw no gas, but mass disease (Cholera) stopped the Bulgarian army.",
        "key_manifestations": [
          "Battle of Chataldja (Cholera stops the advance)",
          "The Lost World (Novel)",
          "Titanic (Tech failure)",
          "Death of Lister (Antiseptic era ends)"
        ]
      },
      "1913": {
        "variance_explained": 9.0,
        "description": "Stasis. The French police developed tear gas (ethyl bromoacetate) for riot control. The 'non-lethal' chemical weapon. It crossed the boundary. The Germans took note. The normalization of chemical policing.",
        "key_manifestations": [
          "French police tear gas (Tech Event)",
          "Bohr Model (Science)",
          "Rite of Spring (Cultural)",
          "Sons and Lovers (Novel)"
        ]
      },
      "1914": {
        "variance_explained": 12.0,
        "description": "Tear Gas at the Front (+3.0%). The French used tear gas grenades in August. The Germans fired 'Ni-Shells' (sneezing powder) at Neuve Chapelle in October. Both failed to have impact. But the Hague Convention was technically breached. The door was unlocked. The stalemate (Cluster 10) created the demand for a 'trench clearing' weapon.",
        "key_manifestations": [
          "French use of tear gas (Event)",
          "German 'Ni-Shell' usage (Event)",
          "H.G. Wells 'The World Set Free' (Book - predicts atomic bombs)",
          "Stalemate on Western Front (Strategic Catalyst)"
        ]
      },
      "1915": {
        "variance_explained": 40.0,
        "description": "Second Battle of Ypres (+28.0%). The Singularity. Fritz Haber personally oversaw the release of Chlorine gas. The Green Cloud. 6,000 casualties in minutes. Panic. The 'Clean Air' was gone. It was the psychological shock of the century. Soldiers pissed on rags to breathe. The 'Chemist's War' began. The race for the mask.",
        "key_manifestations": [
          "Second Battle of Ypres (Event)",
          "Introduction of the P Helmet (Tech Event)",
          "Fritz Haber's involvement (Bio Event)",
          "The Thirty-Nine Steps (Novel)"
        ]
      },
      "1916": {
        "variance_explained": 50.0,
        "description": "Phosgene and the Somme (+10.0%). Colorless, odorless, delayed killing. More lethal than Chlorine. The gas shell replaced the canister. It became routine. 25% of shells fired were chemical. The gas mask became a skull-like fixture of the soldier's face. Dehumanization complete.",
        "key_manifestations": [
          "Introduction of Phosgene (Tech Event)",
          "Battle of the Somme gas usage (Event)",
          "Small Box Respirator (Tech Event)",
          "Wilfred Owen's 'Dulce et Decorum Est' (Experience of the gas)"
        ]
      },
      "1917": {
        "variance_explained": 60.0,
        "description": "Mustard Gas (Yperite) (+10.0%). The King of Gases. It burned the skin. Masks were useless against contact. It lingered for days. It was an 'Area Denial' weapon. It created a landscape of slime and blisters. The psychological terror peaked: you couldn't see it, and it burned you hours later.",
        "key_manifestations": [
          "Introduction of Mustard Gas at Ypres (Event)",
          "Sargent's 'Gassed' (Art - the blind line)",
          "US entry into war (Mobilizing chemical industry)",
          "Livens Projector (Tech Event - gas mortar)"
        ]
      },
      "1918": {
        "variance_explained": 65.0,
        "description": "Lewisite and Victory (+5.0%). The US developed 'Lewisite' (The Dew of Death)\u2014arsenic based. The war ended before it was used. 30% of US casualties were gas. The 'Spanish Flu' (biological) swept the trenches, killing more than the gas. The distinction between 'Gas' and 'Plague' blurred in the apocalyptic finale.",
        "key_manifestations": [
          "Development of Lewisite (Tech Event)",
          "Spanish Flu Pandemic (Biological Event)",
          "Fritz Haber wins Nobel Prize (Irony Event)",
          "Armistice (Event)"
        ]
      },
      "1919": {
        "variance_explained": 45.0,
        "description": "The Shadow (-20.0%). The guns stopped, but the gas remained in the mind. 'The Gas' was the defining horror. The Treaty of Versailles banned Germany from possessing it. The 'Chemical Warfare Service' in the US fought to justify its existence, arguing gas was 'humane' (less death, more injury).",
        "key_manifestations": [
          "Treaty of Versailles Gas Ban (Legal Event)",
          "Formation of Chemical Warfare Service (Institutional Event)",
          "Haber accepts Nobel (Controversy)",
          "Use of gas in Russian Civil War (Event)"
        ]
      },
      "1920": {
        "variance_explained": 48.0,
        "description": "Iraqi Revolt (+3.0%). Churchill authorized gas against 'uncivilized tribes.' It proved gas was a tool of Colonial Policing (Cluster 7). It was too horrific for Europeans, but acceptable for Kurds/Arabs. The double standard was codified.",
        "key_manifestations": [
          "Gas use in Iraq authorized (Event)",
          "Kapp Putsch (Event)",
          "Beyond the Pleasure Principle (Book)",
          "Chaim Weizmann leads Zionist movement (Chemist as statesman)"
        ]
      },
      "1921": {
        "variance_explained": 50.0,
        "description": "Oppau Explosion (+2.0%). A fertilizer plant exploded (Haber-Bosch). 500 dead. It reminded the world of the latent power of nitrogen. Douhet published *Command of the Air*, predicting cities would be gassed from the sky. The 'Aero-Chemical' threat became the dominant nightmare.",
        "key_manifestations": [
          "Oppau explosion (Event)",
          "Command of the Air (Book)",
          "Washington Naval Treaty (Ignoring gas)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 50.0,
        "description": "Stasis. The Washington Naval Treaty tried to ban gas in a subplot, but France rejected it (due to submarines). The failure to ban it legally kept the anxiety high. T.S. Eliot's *The Waste Land*\u2014the atmosphere of a poisoned civilization.",
        "key_manifestations": [
          "Washington Treaty gas clause failure (Diplomatic Event)",
          "The Waste Land (Poem)",
          "Discovery of Insulin (Beneficial chemistry)",
          "Mussolini takes power (Event)"
        ]
      },
      "1923": {
        "variance_explained": 52.0,
        "description": "Haber's 'Pesticides' (+2.0%). To keep his institute running, Haber developed cyanide-based pesticides. 'Zyklon A.' The tool of the Holocaust was invented as a bug killer. The banality of the origin. In the Rif War, Spain began using mustard gas dropped from planes.",
        "key_manifestations": [
          "Development of Zyklon A (Tech Event)",
          "Spanish gas bombing in Morocco (Event)",
          "Hyperinflation (Social toxicity)",
          "Time Magazine founded (Media)"
        ]
      },
      "1924": {
        "variance_explained": 55.0,
        "description": "The 'Death Ray' craze (+3.0%). The public obsession with invisible weapons. Grindell Matthews. It was a displacement of the gas anxiety. Gas was 'old' horror; rays were 'new' horror. The 'Geneva Protocol' negotiations began.",
        "key_manifestations": [
          "Death Ray media craze (Cultural Event)",
          "Magic Mountain (Book - sickness)",
          "Rif War gas intensification (Event)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 58.0,
        "description": "Geneva Protocol (+3.0%). 'Protocol for the Prohibition of the Use in War of Asphyxiating, Poisonous or Other Gases, and of Bacteriological Methods of Warfare.' It banned *use*, not *production*. It was a 'No First Use' pledge. It acknowledged the biological threat for the first time legally.",
        "key_manifestations": [
          "Geneva Protocol signed (Legal Event)",
          "Mein Kampf (Hitler blinded by gas - foundational trauma)",
          "The Great Gatsby (Novel)",
          "Locarno Treaties (Event)"
        ]
      },
      "1926": {
        "variance_explained": 60.0,
        "description": "The 'Gas War' of the Future (+2.0%). Popular literature filled with images of gassed cities. *The Poison Cloud*. The belief that the next war would end civilization in a week. This drove 'Appeasement'\u2014you can't fight a war if your capital is dead.",
        "key_manifestations": [
          "The Poison Cloud (Novel)",
          "Metropolis (Film)",
          "Secret German gas school in Russia (Tomka) (Event)",
          "Goddard Rocket (Delivery system)"
        ]
      },
      "1927": {
        "variance_explained": 60.0,
        "description": "Stasis. Tomka gas test site in USSR operational. Germans and Soviets testing mustard gas together. The secret rearmament of the chemical cluster. Pavlov's dogs\u2014conditioning the biological machine.",
        "key_manifestations": [
          "Tomka gas testing (Event)",
          "Heidegger's Being and Time (Philosophy)",
          "Pavlov's Conditioned Reflexes (Science)",
          "The Jazz Singer (Film)"
        ]
      },
      "1928": {
        "variance_explained": 62.0,
        "description": "Fleming discovers Penicillin (+2.0%). The counter-cluster. Biological defense. It was a mould (fungus). The realization that biology fights biology. It wouldn't be mass-produced until the war, but the hope appeared.",
        "key_manifestations": [
          "Discovery of Penicillin (Scientific Event)",
          "Kellogg-Briand Pact (Event)",
          "Lady Chatterley's Lover (Book)",
          "Mickey Mouse (Cultural)"
        ]
      },
      "1929": {
        "variance_explained": 60.0,
        "description": "Stasis. The Crash. Economic anxiety displaced chemical anxiety. But in the background, IG Farben (the chemical cartel) was consolidating power in Germany. The industrial structure for the next war was forming.",
        "key_manifestations": [
          "Formation of IG Farben (Business Event)",
          "Wall Street Crash (Event)",
          "All Quiet on the Western Front (Film/Book - gas scenes)",
          "G\u00f6del's Theorem (Math)"
        ]
      },
      "1930": {
        "variance_explained": 62.0,
        "description": "Civil Defense drills (+2.0%). Japan and Europe began drilling civilians with gas masks. The infant gas mask. The normalization of the toxic environment. *Civilization and Its Discontents*\u2014Freud on the death drive.",
        "key_manifestations": [
          "Civil Defense gas drills (Event)",
          "Civilization and Its Discontents (Book)",
          "The Blue Angel (Film)",
          "Nazi breakthrough (Political)"
        ]
      },
      "1931": {
        "variance_explained": 65.0,
        "description": "Brave New World (+3.0%). Huxley. Biology as destiny. 'Soma' (chemistry) as control. The test tube baby. The fear shifted from 'Death by Gas' to 'Control by Biology.' Japan used gas in Manchuria (sporadically).",
        "key_manifestations": [
          "Brave New World (Book)",
          "Japanese gas in Manchuria (Event)",
          "Frankenstein (Film - biological hubris)",
          "G\u00f6del's Theorem published (Event)"
        ]
      },
      "1932": {
        "variance_explained": 68.0,
        "description": "Unit 731 (+3.0%). Japan established the 'Epidemic Prevention and Water Purification Department.' A cover for biological warfare. Anthrax, Plague, Vivisection. The utter abandonment of ethics. The 'Blackest' point of the cluster.",
        "key_manifestations": [
          "Establishment of Unit 731 (Institutional Event)",
          "Chadwick discovers Neutron (Nuclear seed)",
          "Tuskegee Syphilis Study begins (US racial bio-ethics failure)",
          "Brave New World published (Book)"
        ]
      },
      "1933": {
        "variance_explained": 70.0,
        "description": "The Reichstag Fire and Eugenics (+2.0%). The Nazis passed the 'Law for the Prevention of Hereditarily Diseased Offspring.' Sterilization. The State pruning the biological garden. Chemistry (IG Farben) and Biology (SS doctors) fused.",
        "key_manifestations": [
          "Sterilization Law (Legal Event)",
          "H.G. Wells 'The Shape of Things to Come' (Gas war prediction)",
          "King Kong (Film)",
          "Hitler becomes Chancellor (Event)"
        ]
      },
      "1934": {
        "variance_explained": 72.0,
        "description": "Stasis. The 'Gas Mask' became a standard household item in Britain (planning). It was a 'memento mori' in the hallway. The fear was that the bomber would drop gas, not just HE.",
        "key_manifestations": [
          "Distribution of gas masks planning (Event)",
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "Fermi creates fission (unknowingly) (Science)"
        ]
      },
      "1935": {
        "variance_explained": 80.0,
        "description": "Abyssinia (+8.0%). Mussolini used Mustard Gas against Ethiopians. It proved the Geneva Protocol was paper. It terrified Europe. If he did it there, he'd do it here. The 'Rain of Death' was real. IG Farben developed 'Prussic Acid' (Zyklon B) for pest control.",
        "key_manifestations": [
          "Italian gas attacks in Ethiopia (Event)",
          "Development of Zyklon B (Tech Event)",
          "Nuremberg Laws (Biological citizenship)",
          "Things to Come (Film - Gas sickness)"
        ]
      },
      "1936": {
        "variance_explained": 85.0,
        "description": "Tabun Discovered (+5.0%). Schrader (IG Farben) discovered Nerve Agents (Organophosphates). Sarin followed. Way more lethal than mustard. Invisible, odorless, instant. The Nazis had the 'Super-Gas.' They kept it secret. The Allies had no antidote.",
        "key_manifestations": [
          "Discovery of Tabun (Scientific Event)",
          "Spanish Civil War (Fear of gas, though not used)",
          "Gas masks issued in Spain (Event)",
          "Berlin Olympics (The clean body)"
        ]
      },
      "1937": {
        "variance_explained": 88.0,
        "description": "Guernica and China (+3.0%). Japan used gas/bio warfare in China (Unit 731 field tests). Plague bombs. Guernica showed the vulnerability of the city. The gas mask distribution in UK became universal (38 million). Babies in gas hoods.",
        "key_manifestations": [
          "Japanese bio-attacks in China (Event)",
          "Guernica (Event)",
          "British civilian gas mask issue (Event)",
          "Snow White (Poisoned apple)"
        ]
      },
      "1938": {
        "variance_explained": 90.0,
        "description": "Sarin Discovered (+2.0%). The second Nerve Agent. The ultimate terror weapon. Orson Welles' *War of the Worlds* broadcast featured 'Black Smoke.' The panic proved the public was primed for gas. Fission discovered (Hahn/Strassmann)\u2014the nuclear poison revealed.",
        "key_manifestations": [
          "Discovery of Sarin (Scientific Event)",
          "War of the Worlds Broadcast (Event)",
          "Discovery of Fission (Scientific Event)",
          "Kristallnacht (Event)"
        ]
      },
      "1939": {
        "variance_explained": 95.0,
        "description": "The War Begins (+5.0%). Everyone carried a gas mask. Everyone expected the gas attack on Day 1. It didn't happen. Deterrence (Mutual Assured Destruction via Gas) worked. Hitler (gassed in WWI) refused to use it on the battlefield. But the *T4 Program* began\u2014gas used to kill the disabled. The technology turned inward.",
        "key_manifestations": [
          "Aktion T4 gas chambers (Event)",
          "Distribution of gas masks (Event)",
          "Soman discovered (Scientific Event)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 92.0,
        "description": "The Blitz (+-3.0%). High Explosive and Incendiary, but no Gas. The anxiety remained but became background radiation. DDT was investigated as an insecticide (war on typhus)\u2014chemistry saving lives.",
        "key_manifestations": [
          "The Blitz (Event)",
          "DDT insecticidal properties found (Scientific Event)",
          "Fall of France (Event)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 95.0,
        "description": "Auschwitz (+3.0%). First experiments with Zyklon B on Soviet POWs. The T4 tech transferred to the camps. The 'Gas Chamber' became the central instrument of the Holocaust. The industrialization of the cluster. In the US, the Manhattan Project began\u2014the race for the 'Radioactive Poison.'",
        "key_manifestations": [
          "First gassing at Auschwitz (Event)",
          "Manhattan Project starts (Event)",
          "Operation Barbarossa (Event)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "The Final Solution (+5.0%). Belzec, Sobibor, Treblinka. Carbon Monoxide and Zyklon B. Millions killed by chemistry. It was the apotheosis of the cluster. Biological warfare (Unit 731) continued in China. Anthrax Island tests in UK.",
        "key_manifestations": [
          "Wannsee Conference (Event)",
          "Operation Reinhard (Gas camps)",
          "Anthrax trials on Gruinard Island (Event)",
          "Napalm developed (Chemical fire)"
        ]
      },
      "1943": {
        "variance_explained": 98.0,
        "description": "Bari Harbor (+-2.0%). A German raid hit a US ship (*John Harvey*) carrying secret mustard gas. 600 Allied casualties. Covered up. It proved the Allies had gas 'just in case.' Penicillin mass production began\u2014the biological miracle countering the wound.",
        "key_manifestations": [
          "Bari Harbor Mustard Gas disaster (Event)",
          "Mass production of Penicillin (Tech Event)",
          "LSD discovered by Hofmann (Psychochemical)",
          "Warsaw Ghetto Uprising (Event)"
        ]
      },
      "1944": {
        "variance_explained": 95.0,
        "description": "DDT and Victory (+-3.0%). DDT stopped a typhus epidemic in Naples. The first time in history. Chemical triumph. The Gas Chambers operated at maximum capacity in Hungary. The V-1/V-2 fear was 'Warhead = Gas,' but it was HE.",
        "key_manifestations": [
          "Naples Typhus control (Event)",
          "Gas Chambers peak usage (Event)",
          "Discovery of Streptomycin (Antibiotic)",
          "V-2 attacks (Event)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "Hiroshima (+5.0%). The Gas Anxiety morphed into Radiation Anxiety. The 'Invisible Death' was now nuclear fallout. The liberation of the camps revealed the gas chambers. The world saw the Zyklon B cans. The horror was absolute. The 'Chemical' cluster handed the baton to the 'Nuclear' cluster (14).",
        "key_manifestations": [
          "Hiroshima/Nagasaki (Radiation sickness)",
          "Liberation of Auschwitz (Event)",
          "Seizure of German Nerve Gas stocks (Event)",
          "Fluoridation of water begins (Public health chemistry)"
        ]
      },
      "1946": {
        "variance_explained": 85.0,
        "description": "Nuremberg and Bikini (-15.0%). The IG Farben trial. The chemists were prosecuted. The Bikini tests showed the 'Radiation Cloud.' The fear of 'Contamination' became the dominant Cold War trope.",
        "key_manifestations": [
          "IG Farben Trial (Legal Event)",
          "Bikini Atoll tests (Event)",
          "Hersey's Hiroshima (Book - describing radiation)",
          "CDC founded (Institutional Event)"
        ]
      },
      "1947": {
        "variance_explained": 80.0,
        "description": "The Insecticide Era (-5.0%). DDT was a miracle. 'Better Living Through Chemistry.' The anxiety was repressed. The focus was on 'cleanliness' and 'hygiene.' The CIA began investigating 'Truth Serums' (LSD) for interrogation.",
        "key_manifestations": [
          "DDT commercial boom (Event)",
          "Project Chatter (CIA drug tests)",
          "The Plague (Novel)",
          "Transistor invented (Tech Event)"
        ]
      },
      "1948": {
        "variance_explained": 75.0,
        "description": "Stasis. Discovery of Aureomycin. The Antibiotic Age. Biology was being conquered. But the Soviets built their own Nerve Gas plants (captured from Germany). The invisible arms race continued.",
        "key_manifestations": [
          "Discovery of Aureomycin (Science)",
          "WHO founded (Institutional Event)",
          "Lysenkoism in USSR (Political biology)",
          "1984 (Book)"
        ]
      },
      "1949": {
        "variance_explained": 75.0,
        "description": "Soviet Bomb (+0.0%). The fallout fear grew. The Geneva Convention (1949) updated the rules, but the gas ban held. The cluster was dormant but potent.",
        "key_manifestations": [
          "Soviet Bomb (Event)",
          "Geneva Conventions 1949 (Legal Event)",
          "Death of a Salesman (Play)",
          "Cortisone discovered (Medical chemistry)"
        ]
      },
      "1950": {
        "variance_explained": 80.0,
        "description": "Korea and the 'Germ War' allegation (+5.0%). North Korea/China accused the US of dropping plague insects. (Likely false, but a massive propaganda coup). It showed the 'Biological Anxiety' was still a primary psychological weapon. The fear of the 'Dirty Bomb' began.",
        "key_manifestations": [
          "Germ Warfare allegations in Korea (Event)",
          "Dianetics (Clearing the mind's toxins)",
          "Asimov's I, Robot (Tech)",
          "The Lonely Crowd (Book)"
        ]
      }
    }
  },
  "12_prussian_general_staff_professionalism": {
    "name": "Prussian General Staff Professionalism (The Brain of the Army)",
    "description": "This eigencluster represents the intellectualization and bureaucratization of war. It posits that military command is a learned profession, best executed by a specially selected and trained elite (The General Staff) using standardized methods (The Appreciation, The Timetable). It is the 'Science of War' opposing the 'Art of War.' It traces the trajectory from Moltke the Elder's triumphs, through the rigidity of the Schlieffen Plan, the technocratic dictatorship of Ludendorff, the clever reconstruction by Seeckt, to its ultimate corruption and destruction by Hitler (the Amateur).",
    "trajectory": {
      "1890": {
        "variance_explained": 8.0,
        "description": "Helmuth von Moltke the Elder retired (+1.0%). The Titan departed. He left a legacy: 'No plan survives contact with the enemy.' The General Staff (GGS) was the envy of the world. Every nation tried to copy it. The variance is high because the 'German Model' was the gold standard of competence. Waldersee succeeded him, more political, less brilliant.",
        "key_manifestations": [
          "Retirement of Moltke the Elder (Event)",
          "Caprivi becomes Chancellor (General in politics)",
          "Mahan's Influence of Sea Power (The rival intellectual school)",
          "Sherlock Holmes (The triumph of deduction/method)"
        ]
      },
      "1891": {
        "variance_explained": 8.5,
        "description": "Schlieffen became Chief of Staff (+0.5%). The Technocrat. He began to turn the GGS into a machine for solving one problem: The Two-Front War. He rejected Clausewitz's friction for pure geometry. The 'Cannae' fixation began. The 'Brain' became obsessed with the perfect flank.",
        "key_manifestations": [
          "Schlieffen appointed (Bio Event)",
          "Franco-Russian Alliance (The strategic problem)",
          "Formation of the Pan-German League (Political pressure)",
          "Kipling's Light that Failed (Novel)"
        ]
      },
      "1892": {
        "variance_explained": 9.0,
        "description": "The Military Ride (Staff Ride) (+0.5%). Schlieffen institutionalized the 'Generalstabsreise.' Officers riding the terrain, solving tactical problems on the ground. Professionalism honed to a razor edge. Spreading the 'common doctrine' so every officer acted predictably.",
        "key_manifestations": [
          "Staff Ride institutionalized (Event)",
          "French Army reforms (Trying to catch up)",
          "Cholera in Hamburg (State efficiency tested)",
          "Grover Cleveland elected (Event)"
        ]
      },
      "1893": {
        "variance_explained": 9.0,
        "description": "Stasis. The Army Bill of 1893. Schlieffen demanded more men. He got them, but not enough for the encirclement. He began to rely on 'Reserve Corps' in the front line\u2014a heretical idea he forced into doctrine. Efficiency must cover the deficit of numbers.",
        "key_manifestations": [
          "German Army Bill 1893 (Legal Event)",
          "New World Symphony (Cultural)",
          "Turner Frontier Thesis (Event)",
          "The Great War of 189- (Novel)"
        ]
      },
      "1894": {
        "variance_explained": 9.5,
        "description": "Dreyfus Affair (+0.5%). The French Staff (Section Statistique) showed the dark side: protecting the institution over the truth. A closed caste. The 'Honor of the Army' vs Justice. The German Staff looked on with disdain at French 'indiscipline.'",
        "key_manifestations": [
          "Dreyfus arrested (Event)",
          "Battle of the Yalu (Japanese staff work validates German training)",
          "Jungle Book (Novel)",
          "Nicholas II coronation (Event)"
        ]
      },
      "1895": {
        "variance_explained": 10.0,
        "description": "The Staff College (Kriegsakademie) at peak prestige (+0.5%). Only the top 2% of officers got in. The 'Red Stripes' on the trousers. A monastic order of war. Schlieffen wrote his first memo on the invasion of France\u2014the seed of the Plan.",
        "key_manifestations": [
          "Schlieffen's early memos (Document)",
          "Roentgen X-Rays (Science)",
          "Time Machine (Book)",
          "Lumiere Films (Tech)"
        ]
      },
      "1896": {
        "variance_explained": 10.0,
        "description": "Stasis. Kitchener in Sudan. A 'Staff' war. Logistics, railway, Maxim guns. It validated the professional method against the 'heroic' Dervishes. The 'Amateur' (Cluster 2) was losing to the 'Professional' (Cluster 12).",
        "key_manifestations": [
          "Dongola Expedition (Event)",
          "Island of Dr Moreau (Book)",
          "Battle of Adwa (Italian staff failure)",
          "Kruger Telegram (Diplomatic blunder)"
        ]
      },
      "1897": {
        "variance_explained": 10.5,
        "description": "Bloch's Analysis (+0.5%). Bloch warned of the stalemate. The General Staff dismissed him. 'War is an art, not a statistic.' Hubris. The Professional belief that 'Will' and 'Training' could overcome 'Firepower.'",
        "key_manifestations": [
          "The Future of War published (Book)",
          "Dracula (Novel)",
          "Tirpitz appointed (Naval staff rise)",
          "Diamond Jubilee (Event)"
        ]
      },
      "1898": {
        "variance_explained": 11.0,
        "description": "Fashoda and US Staff Failure (+0.5%). Fashoda: French logistical triumph (Marchand) but strategic failure. US in Cuba: Logistical chaos (wool uniforms in tropics). It proved that without a General Staff, an army is a mob. Root reforms in US began (copying the Prussians).",
        "key_manifestations": [
          "Fashoda Incident (Event)",
          "US logistics failure in Cuba (Event)",
          "War of the Worlds (Book)",
          "Spanish-American War (Event)"
        ]
      },
      "1899": {
        "variance_explained": 12.0,
        "description": "Boer War Black Week (+1.0%). The British Staff failed. Frontal assaults. No maps. The 'Amateur' officer (sporting gentleman) was exposed. The call for 'National Efficiency' and a 'Thinking Army' began.",
        "key_manifestations": [
          "Black Week (Event)",
          "Hague Conference (Event)",
          "Interpretation of Dreams (Book)",
          "Heart of Darkness (Book)"
        ]
      },
      "1900": {
        "variance_explained": 12.5,
        "description": "Boxer Expedition (+0.5%). Waldersee commanded the international force. A German General running a coalition. It confirmed German prestige. But the conduct (looting) showed the 'Professional' lacked a moral compass.",
        "key_manifestations": [
          "Waldersee commands in China (Event)",
          "Hun Speech (Rhetoric)",
          "Lord Jim (Book)",
          "Zeppelin flight (Tech)"
        ]
      },
      "1901": {
        "variance_explained": 13.0,
        "description": "Root Reforms in US (+0.5%). The US Army War College founded. 'To preserve peace, prepare for war.' The Prussian model went global. In UK, the Esher Committee planned the General Staff.",
        "key_manifestations": [
          "US Army War College founded (Institutional Event)",
          "Kim (Novel)",
          "Queen Victoria dies (Event)",
          "First Nobel Prizes (Event)"
        ]
      },
      "1902": {
        "variance_explained": 13.5,
        "description": "Committee of Imperial Defence (+0.5%). UK. The Brain of the Empire formed. Trying to coordinate Navy and Army. Schlieffen continued refining the Plan\u2014obsessively. The 'Cannae' article published.",
        "key_manifestations": [
          "Committee of Imperial Defence (Institutional Event)",
          "Schlieffen's 'Cannae' article (Doctrine)",
          "Heart of Darkness (Book)",
          "End of Boer War (Event)"
        ]
      },
      "1903": {
        "variance_explained": 14.0,
        "description": "Stasis. The Wright Brothers. The Staff ignored it initially. 'Toys.' The General Staff's blindness to disruptive tech (Cluster 3, 9) was its Achilles heel. They perfected the railway (known) and ignored the plane (unknown).",
        "key_manifestations": [
          "Wright Flight (Event)",
          "Call of the Wild (Book)",
          "Riddle of the Sands (Book)",
          "Pogroms (Event)"
        ]
      },
      "1904": {
        "variance_explained": 15.0,
        "description": "Russo-Japanese War (+1.0%). The Japanese Army, trained by German Meckel, performed like a clock. Operations on a vast scale. It validated the Staff system. Russian Staff (corrupt, aristocratic) failed. Competence is the only nobility.",
        "key_manifestations": [
          "Battle of Liaoyang (Staff coordination)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)",
          "Entente Cordiale (Diplomatic encirclement)"
        ]
      },
      "1905": {
        "variance_explained": 18.0,
        "description": "The Schlieffen Plan Finalized (+3.0%). The Memo. A script for victory. 'Keep the right wing strong.' It was a masterpiece of logistics and a strategic monstrosity (violating Belgium). It assumed the enemy would act as predicted. The fatal determinism of the cluster.",
        "key_manifestations": [
          "Schlieffen Plan Memo (Document)",
          "Battle of Mukden (Event)",
          "Revolution of 1905 (Event)",
          "Einstein's Papers (Science)"
        ]
      },
      "1906": {
        "variance_explained": 18.0,
        "description": "Moltke the Younger appointed (+0.0%). The nephew. A mystic, an artist, a worrier. Not the 'Iron' man. He began to tinker with the Plan, weakening the right wing to protect the left. The 'Professional' confidence began to erode into anxiety.",
        "key_manifestations": [
          "Moltke the Younger appointed (Bio Event)",
          "HMS Dreadnought (Tech)",
          "The Jungle (Book)",
          "San Francisco Earthquake (Event)"
        ]
      },
      "1907": {
        "variance_explained": 18.0,
        "description": "Stasis. The Triple Entente. The 'Encirclement' (Einkreisung) became the obsession of the Staff. They felt time was against them. 'Preventive War' began to be discussed. The calculator said: 'Fight now or lose later.'",
        "key_manifestations": [
          "Triple Entente formed (Event)",
          "Secret Agent (Book)",
          "Picasso's Demoiselles (Art)",
          "Hague Conference (Event)"
        ]
      },
      "1908": {
        "variance_explained": 18.5,
        "description": "Bosnian Crisis (+0.5%). Moltke promised support to Austria. The Staff dictating foreign policy. The military timetable began to override diplomacy. Haldane Reforms in UK\u2014creating the British Expeditionary Force (BEF) and General Staff.",
        "key_manifestations": [
          "Bosnian Crisis (Event)",
          "Haldane Reforms (Institutional Event)",
          "War in the Air (Book)",
          "Scouting for Boys (Book)"
        ]
      },
      "1909": {
        "variance_explained": 19.0,
        "description": "Wilson became Director of Military Operations (UK) (+0.5%). Henry Wilson. He befriended Foch. They planned the BEF deployment to France. The 'Railway Schedule' commitment. Britain was effectively allied by a train timetable, unknown to the Cabinet.",
        "key_manifestations": [
          "Wilson-Foch conversations (Event)",
          "Bleriot Flight (Event)",
          "Futurist Manifesto (Art)",
          "Declaration of London (Event)"
        ]
      },
      "1910": {
        "variance_explained": 19.0,
        "description": "Stasis. The Great Illusion. Angell said war was irrational. The Staff said war was inevitable. Two parallel worlds. The German Army maneuvers (Kaiserman\u00f6ver) were grand spectacles, but critics noted 'parade ground' tactics.",
        "key_manifestations": [
          "The Great Illusion (Book)",
          "Kaiserman\u00f6ver 1910 (Event)",
          "Howards End (Book)",
          "Firebird (Music)"
        ]
      },
      "1911": {
        "variance_explained": 20.0,
        "description": "Ludendorff's Memorandum (+1.0%). Ludendorff (in the Deployment Section) demanded total mobilization. He was rejected and moved to a regiment. The 'Radical Professional' vs the 'Aristocratic Professional.' Agadir Crisis pushed the Staff to demand war; the Kaiser blinked.",
        "key_manifestations": [
          "Ludendorff's mobilization memo (Document)",
          "Agadir Crisis (Event)",
          "Joffre's purge of French generals (Event)",
          "Fantomas (Book)"
        ]
      },
      "1912": {
        "variance_explained": 22.0,
        "description": "War Council of December 8 (+2.0%). The Kaiser and his generals. 'War the sooner the better' (Moltke). The decision to prepare the public. The Staff concluded Russia would be unbeatable by 1917. The 'suicide pact' of the professionals.",
        "key_manifestations": [
          "War Council of Dec 8 (Event)",
          "Haldane Mission fails (Event)",
          "Titanic (Event)",
          "Balkan Wars (Event)"
        ]
      },
      "1913": {
        "variance_explained": 25.0,
        "description": "Plan XVII and the Great Program (+3.0%). France adopted Plan XVII (Attack!). Germany increased army size. The machine was fully wound. Joffre and Moltke were the drivers of Europe. The civilians were passengers.",
        "key_manifestations": [
          "Adoption of Plan XVII (Doctrine)",
          "German Army Increase (Event)",
          "Rite of Spring (Cultural)",
          "Zabern Affair (Military over Civilian)"
        ]
      },
      "1914": {
        "variance_explained": 55.0,
        "description": "The Mobilization Timetables (+30.0%). The mechanism triggered. 'War by Timetable.' Moltke told the Kaiser the trains could not be stopped. The Professional triumph (deployment went perfectly) and Strategic catastrophe (political loss). The Miracle on the Marne was a Staff failure (Moltke lost control, Hentsch ordered retreat). Moltke broke down. Falkenhayn took over.",
        "key_manifestations": [
          "Mobilization (Event)",
          "Battle of the Marne (Staff failure)",
          "Moltke's breakdown (Event)",
          "Hentsch's Mission (The power of the Staff officer)"
        ]
      },
      "1915": {
        "variance_explained": 45.0,
        "description": "Falkenhayn's Strategy (-10.0% Confidence). Eastern vs Westerners. Falkenhayn wanted to bleed France; Hindenburg/Ludendorff wanted to crush Russia. The Staff split. Professionalism became infighting. The deadlock defied the 'short war' dogma.",
        "key_manifestations": [
          "Gorlice-Tarnow Offensive (Staff success in East)",
          "Gallipoli (Amateur strategy failure)",
          "Shell Crisis (Industrial failure)",
          "Thirty Nine Steps (Book)"
        ]
      },
      "1916": {
        "variance_explained": 50.0,
        "description": "The Third Supreme Command (+5.0%). Hindenburg and Ludendorff took over. The 'Silent Dictatorship.' The General Staff ran the country. Total War. Efficiency above all. Verdun was a calculated attrition (Staff logic), but it became an emotional meatgrinder.",
        "key_manifestations": [
          "Hindenburg/Ludendorff appointment (Event)",
          "Battle of Verdun (Event)",
          "Hindenburg Program (Economic control)",
          "Somme (Event)"
        ]
      },
      "1917": {
        "variance_explained": 55.0,
        "description": "Unrestricted U-Boat Warfare (+5.0%). The Staff calculated the tonnage. 'England will starve in 6 months.' A mathematical error that brought the US into the war. Technical brilliance, strategic blindness. The 'Sealed Train' (Lenin) was a Staff operation to destabilize Russia.",
        "key_manifestations": [
          "Decision for Unrestricted U-Boat War (Event)",
          "Lenin's Sealed Train (Staff op)",
          "Nivelle Offensive (French staff hubris)",
          "Caporetto (German staff brilliance)"
        ]
      },
      "1918": {
        "variance_explained": 40.0,
        "description": "The Collapse (-15.0%). The Spring Offensive. Tactical masterpiece (Stormtroopers), strategic failure (no objective). Ludendorff panicked. The Staff demanded an Armistice to save the Army, then blamed the Civilians (Stab in the Back). The 'Professional' refused to accept defeat on the field.",
        "key_manifestations": [
          "Spring Offensive (Event)",
          "Ludendorff's panic (Event)",
          "Armistice (Event)",
          "Spengler's Decline of the West (Book)"
        ]
      },
      "1919": {
        "variance_explained": 30.0,
        "description": "Dissolution (-10.0%). Versailles banned the Great General Staff. It went underground. 'Truppenamt' (Troop Office). Hans von Seeckt took over. 'The Army will become a state within a state.' He selected the elite to rebuild. The Brain went into hibernation.",
        "key_manifestations": [
          "Versailles Treaty (Ban)",
          "Creation of Truppenamt (Institutional Event)",
          "Seeckt takes command (Bio Event)",
          "Economic Consequences of the Peace (Book)"
        ]
      },
      "1920": {
        "variance_explained": 32.0,
        "description": "Seeckt's Reforms (+2.0%). 'F\u00fchrerheer' (Leader Army). Every private trained to be a sergeant, every lieutenant a general. Quality over Quantity. A pure technocratic elite. The Kapp Putsch\u2014Seeckt refused to fire on rebels ('Reichswehr does not fire on Reichswehr'). Army > State.",
        "key_manifestations": [
          "Kapp Putsch (Event)",
          "Seeckt's reforms begin (Policy)",
          "Battle of Warsaw (Soviet staff failure)",
          "Storm of Steel (Book)"
        ]
      },
      "1921": {
        "variance_explained": 35.0,
        "description": "Stasis. The 'Committees' analyzing the war. 57 committees producing doctrine. 'Regulation 487' (Command and Combat with Combined Arms). The intellectual digestion of defeat. The US Staff School (Leavenworth) flourished (Marshall, Eisenhower).",
        "key_manifestations": [
          "German War analysis committees (Event)",
          "Regulation 487 (Doctrine)",
          "Douhet's Command of the Air (Book)",
          "Tractatus (Philosophy)"
        ]
      },
      "1922": {
        "variance_explained": 38.0,
        "description": "Rapallo (+3.0%). Secret collaboration with Soviets. Testing tanks/planes in Russia. The Staff bypassed the Government. A cynical, professional alliance. The 'Black Reichswehr' funding.",
        "key_manifestations": [
          "Rapallo Treaty (Event)",
          "Secret training schools (Event)",
          "Waste Land (Book)",
          "Mussolini (Event)"
        ]
      },
      "1923": {
        "variance_explained": 38.0,
        "description": "Stasis. Crisis of 1923. Seeckt ruled as virtual dictator for months to stabilize the Reich. The Army saved the Republic only to preserve itself. The Beer Hall Putsch\u2014Hitler was crushed by the Army (at this point).",
        "key_manifestations": [
          "Seeckt's emergency powers (Event)",
          "Beer Hall Putsch (Event)",
          "Hyperinflation (Event)",
          "Vers une architecture (Book)"
        ]
      },
      "1924": {
        "variance_explained": 40.0,
        "description": "Reformation of War (+2.0%). Fuller. Liddell Hart. The British professionals argued for mechanization. The German Staff listened; the British Staff did not. The intellectual divergence.",
        "key_manifestations": [
          "Reformation of War (Book)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)",
          "Dawes Plan (Event)"
        ]
      },
      "1925": {
        "variance_explained": 40.0,
        "description": "Hindenburg elected President (+0.0%). The Field Marshal as Head of State. The symbol of the Staff was now the Sovereign. Locarno Treaty masked the secret rearmament.",
        "key_manifestations": [
          "Hindenburg elected (Event)",
          "Mein Kampf (Book)",
          "Great Gatsby (Book)",
          "Potemkin (Film)"
        ]
      },
      "1926": {
        "variance_explained": 42.0,
        "description": "Seeckt Dismissed (+2.0%). He allowed a Prince to attend maneuvers. A pretext. But the structure remained. The 'Truppenamt' continued. Beck became a rising star. The Staff focused on 'Mobile Defense.'",
        "key_manifestations": [
          "Seeckt dismissed (Event)",
          "Metropolis (Film)",
          "Sun Also Rises (Book)",
          "Liddell Hart's Remaking of Modern Armies (Book)"
        ]
      },
      "1927": {
        "variance_explained": 42.0,
        "description": "Stasis. Inter-Allied Control Commission withdrew. The Staff was free. Planning for expansion (A-Plan) began. The 100,000 man army was a cadre for millions.",
        "key_manifestations": [
          "Control Commission leaves (Event)",
          "Being and Time (Book)",
          "Jazz Singer (Film)",
          "Shanghai Massacre (Event)"
        ]
      },
      "1928": {
        "variance_explained": 45.0,
        "description": "Blomberg visited US (+3.0%). Saw industrial potential. The Staff realized the next war would be industrial. 'Wehrwirtschaft' concept. Soviet Staff (Triandafillov) developed 'Deep Battle.' The Professionals were innovating.",
        "key_manifestations": [
          "Triandafillov's Nature of Operations (Book)",
          "Blomberg visit (Event)",
          "Lady Chatterley's Lover (Book)",
          "Five Year Plan (Event)"
        ]
      },
      "1929": {
        "variance_explained": 45.0,
        "description": "Stasis. The Crash. The Army remained an island of stability. The 'Pocket Battleship' design showed technical ingenuity (cheating treaties).",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "Pocket Battleship laid down (Event)",
          "All Quiet on the Western Front (Book)",
          "Man with a Movie Camera (Film)"
        ]
      },
      "1930": {
        "variance_explained": 48.0,
        "description": "Groener as Defense Minister (+3.0%). A General Staff officer running the ministry. He banned the SA (temporarily). The Army tried to manage the Nazis. The fatal error: thinking they could use Hitler as a tool.",
        "key_manifestations": [
          "Groener's tenure (Event)",
          "Nazi breakthrough (Event)",
          "Blue Angel (Film)",
          "Civilization and Its Discontents (Book)"
        ]
      },
      "1931": {
        "variance_explained": 50.0,
        "description": "Stasis. Manstein appointed to Operations. The brilliance was in place. Guderian advocating tanks. The Staff was intellectually vibrant but politically naive.",
        "key_manifestations": [
          "Manstein appointment (Event)",
          "M (Film)",
          "Mukden Incident (Event)",
          "Empire State Building (Event)"
        ]
      },
      "1932": {
        "variance_explained": 52.0,
        "description": "Papen and Schleicher (+2.0%). Generals playing at politics. Schleicher (General) became Chancellor. He tried to split the Nazis. He failed. The Staff's political intrigue paved the way for Hitler.",
        "key_manifestations": [
          "Schleicher Chancellor (Event)",
          "Brave New World (Book)",
          "Bonus Army (Event)",
          "Famine in Ukraine (Event)"
        ]
      },
      "1933": {
        "variance_explained": 60.0,
        "description": "Hitler's Pact with the Army (+8.0%). Hitler promised rearmament; the Army promised neutrality. Beck became Chief of Staff. The GGS was officially (secretly) reborn. They thought they had a 'Drummer'; they had a Master.",
        "key_manifestations": [
          "Hitler's speech to Generals (Event)",
          "Beck appointed CGS (Event)",
          "King Kong (Film)",
          "Reichstag Fire (Event)"
        ]
      },
      "1934": {
        "variance_explained": 65.0,
        "description": "The Oath (+5.0%). After Hindenburg's death, the Army swore loyalty to *Hitler personally*, not the Constitution. The professional soul was sold. Night of the Long Knives eliminated the SA (rival), pleasing the Army, but the price was total submission.",
        "key_manifestations": [
          "The Hitler Oath (Event)",
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "Triumph of the Will (Film)"
        ]
      },
      "1935": {
        "variance_explained": 70.0,
        "description": "Wehrmacht Created (+5.0%). Conscription. The expansion diluted the elite quality. Beck wrote memos warning against premature war. The friction between 'Professional Caution' and 'Nazi Dynamism' began.",
        "key_manifestations": [
          "Wehrmacht created (Event)",
          "Beck's memos (Document)",
          "Nuremberg Laws (Event)",
          "Abyssinian Crisis (Event)"
        ]
      },
      "1936": {
        "variance_explained": 75.0,
        "description": "Rhineland (+5.0%). Hitler bluffed. The Generals advised against it. Hitler was right. The Professionals were wrong. Hitler's contempt for the Staff grew. 'I have to force these old fossils.'",
        "key_manifestations": [
          "Rhineland Remilitarization (Event)",
          "Spanish Civil War (Testing ground)",
          "General Theory (Book)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 72.0,
        "description": "Hossbach Memorandum (-3.0% Influence). Hitler revealed his war plans. Blomberg and Fritsch objected (too soon). Stalin purged his General Staff (Tukhachevsky). The Professional was under attack by the Dictator in both regimes.",
        "key_manifestations": [
          "Hossbach Memorandum (Event)",
          "Tukhachevsky Purge (Event)",
          "Guernica (Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 65.0,
        "description": "Blomberg-Fritsch Affair (-7.0% Independence). Hitler decapitated the Army leadership on scandal charges. He took supreme command. Beck resigned (September Conspiracy failed). The Staff became a technical support agency for a madman.",
        "key_manifestations": [
          "Blomberg-Fritsch Affair (Event)",
          "Halder replaces Beck (Event)",
          "Munich Crisis (Generals' coup failed)",
          "Nausea (Book)"
        ]
      },
      "1939": {
        "variance_explained": 80.0,
        "description": "Poland (+15.0%). The Staff delivered a flawless campaign. Halder planned it. The mechanism worked perfectly. But the strategy (War with West) was unwanted. The 'Professional' executed the 'Amateur's' war.",
        "key_manifestations": [
          "Invasion of Poland (Event)",
          "Halder Diaries (Document)",
          "Grapes of Wrath (Book)",
          "Wizard of Oz (Film)"
        ]
      },
      "1940": {
        "variance_explained": 95.0,
        "description": "Manstein Plan (+15.0%). The Staff's greatest stroke. Sickle Cut. Defeated France in 6 weeks. Keitel called Hitler the 'Greatest Warlord of All Time.' The Professional validated the Amateur, sealing their own doom. Hubris.",
        "key_manifestations": [
          "Manstein Plan adopted (Event)",
          "Fall of France (Event)",
          "Field Marshal Ceremony (Event)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 90.0,
        "description": "Barbarossa and Crisis (-5.0%). The Staff planned the invasion. They underestimated the Red Army (Racism + Intel failure). 'We have only to kick in the door.' When it stalled in winter, Hitler fired Brauchitsch and took direct command of the Army. The Staff became clerks.",
        "key_manifestations": [
          "Barbarossa Planning (Event)",
          "Battle of Moscow (Failure)",
          "Hitler takes Army command (Event)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 85.0,
        "description": "Halder Dismissed (-5.0%). Hitler fired Halder. Zeitzler appointed. The 'Yes Men' took over. Operations were dictated by Hitler's map table. Stalingrad was the result of forbidding maneuver. The Brain was lobotomized.",
        "key_manifestations": [
          "Halder dismissed (Event)",
          "Stalingrad encirclement (Event)",
          "Wannsee Conference (Bureaucracy of murder)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 80.0,
        "description": "Manstein's Backhand (-5.0%). Kharkov. Manstein showed what the Professional could still do if left alone. But Hitler interfered at Kursk. The US General Staff (Marshall) was now the dominant professional body\u2014managing a global logistical war.",
        "key_manifestations": [
          "Third Battle of Kharkov (Event)",
          "Kursk (Event)",
          "Tehran Conference (Allied Staff coordination)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 40.0,
        "description": "July 20 Plot (-40.0%). Stauffenberg. The Staff tried to kill the Dictator. It failed. Hitler purged the Staff. 5,000 executed. 'The General Staff is a nest of traitors.' The institution was physically destroyed.",
        "key_manifestations": [
          "July 20 Plot (Event)",
          "Rommel's suicide (Event)",
          "Model's suicide (Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 10.0,
        "description": "The Bunker (-30.0%). Krebs mapping non-existent divisions. Total delusion. The Prussian General Staff ended in a basement. The US/Soviet Staffs were the new masters. The Nuremberg Trial declared the General Staff 'not a criminal organization' (technically), but its moral failure was absolute.",
        "key_manifestations": [
          "Krebs at the Bunker (Event)",
          "Jodl signs surrender (Event)",
          "Nuremberg Indictments (Event)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 5.0,
        "description": "Post-Mortem (-5.0%). Halder worked for the US Historical Division. Writing the history to blame Hitler for everything. The 'Clean Wehrmacht' myth began. The Professional tried to wash his hands.",
        "key_manifestations": [
          "Halder joins US Historical Division (Event)",
          "Nuremberg Verdicts (Event)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain Speech (Event)"
        ]
      },
      "1947": {
        "variance_explained": 5.0,
        "description": "National Security Act (+0.0%). The US Joint Chiefs of Staff (JCS) formalized. The Prussian model lived on in the Pentagon. The Soviet General Staff planned WWIII.",
        "key_manifestations": [
          "National Security Act (Event)",
          "Truman Doctrine (Event)",
          "Streetcar Named Desire (Play)",
          "Kennan's X Article (Strategic thought)"
        ]
      },
      "1948": {
        "variance_explained": 5.0,
        "description": "NATO Staff (+0.0%). International General Staff. Montgomery as Chairman. The integration of Western professionalism.",
        "key_manifestations": [
          "Brussels Treaty (Event)",
          "Berlin Airlift (Logistical triumph)",
          "1984 (Book)",
          "Naked and the Dead (Book)"
        ]
      },
      "1949": {
        "variance_explained": 5.0,
        "description": "Stasis. The Bundeswehr was not yet formed, but the plans existed. The 'Himmerod Memorandum'\u2014former Wehrmacht officers planning rearmament. The Phoenix waited.",
        "key_manifestations": [
          "Himmerod Memorandum (Secret Event)",
          "Soviet Bomb (Event)",
          "NATO formed (Event)",
          "Death of a Salesman (Play)"
        ]
      },
      "1950": {
        "variance_explained": 8.0,
        "description": "Korean War (+3.0%). The US Staff managed a UN war. Logistics (Cluster 18) were key. The failure to predict Chinese intervention showed the limits of the 'Western Professional' mind against revolutionary war.",
        "key_manifestations": [
          "Inchon (Staff triumph)",
          "Yalu River disaster (Intel failure)",
          "Lonely Crowd (Book)",
          "All About Eve (Film)"
        ]
      }
    }
  },
  "13_social_darwinist_struggle": {
    "name": "Social Darwinist Struggle (The Race War)",
    "description": "This eigencluster represents the application of biological evolution theories to human societies and nations. It posits that history is a ceaseless struggle for survival between 'races' or 'cultures,' where the strong must dominate or exterminate the weak. It fuels Imperialism, Scientific Racism, Eugenics, and ultimately Nazism. It transforms war from a political tool (Clausewitz) into a biological imperative (Bernhardi/Hitler).",
    "trajectory": {
      "1890": {
        "variance_explained": 12.0,
        "description": "The 'Scramble for Africa' was justified by this cluster. 'Survival of the Fittest' applied to maps. In the US, the closing of the frontier led to anxiety about 'racial vigor.' Gumplowicz and Chamberlain were publishing. The variance was high because it was the dominant intellectual framework of the elite.",
        "key_manifestations": [
          "Wounded Knee (Extinction of the 'savage')",
          "Mahan's Sea Power (Nations must expand or die)",
          "Picture of Dorian Gray (Degeneration)",
          "Sherman Antitrust Act (Economic struggle)"
        ]
      },
      "1891": {
        "variance_explained": 12.5,
        "description": "Pan-German League formed (+0.5%). Explicitly V\u00f6lkisch. The goal: unite all Germans and dominate 'inferior' neighbors. The concept of 'Lebensraum' (Ratzel) was gestating.",
        "key_manifestations": [
          "Pan-German League formation (Event)",
          "Kipling's Light that Failed (Novel)",
          "Tess of the d'Urbervilles (Fate/Biology)",
          "Famine in Russia (Viewed as Slavic incompetence)"
        ]
      },
      "1892": {
        "variance_explained": 13.0,
        "description": "Nordau's *Degeneration* (+0.5%). Argued that modern culture was biologically degenerate. It sparked a panic about the 'health' of the race. The fear that civilization stops natural selection.",
        "key_manifestations": [
          "Degeneration published (Book)",
          "Galton's Fingerprints (Biometrics)",
          "Cholera in Hamburg (Hygiene as race health)",
          "Conquest of Bread (The counter-argument)"
        ]
      },
      "1893": {
        "variance_explained": 13.5,
        "description": "Turner's Frontier Thesis (+0.5%). The frontier created the American character. Without it, would the race soften? This drove the push for overseas expansion (Philippines).",
        "key_manifestations": [
          "Frontier Thesis (Intellectual Event)",
          "World's Columbian Exposition (Display of racial hierarchy)",
          "New World Symphony (Cultural)",
          "Vacher de Lapouge's Aryanism (Theory)"
        ]
      },
      "1894": {
        "variance_explained": 14.0,
        "description": "Dreyfus Affair (+0.5%). Anti-Semitism weaponized. The Jew as the 'biological' enemy within. The mob shouted 'Death to the Jews.' It was the dress rehearsal for 1930s Germany.",
        "key_manifestations": [
          "Dreyfus arrested (Event)",
          "Kidd's Social Evolution (Book)",
          "Jungle Book (Law of the Jungle)",
          "Sino-Japanese War (Yellow race rising)"
        ]
      },
      "1895": {
        "variance_explained": 14.5,
        "description": "Galton and Eugenics (+0.5%). The term was gaining traction. Managing the human herd. In Germany, Class published on 'Vital Politics.' The State as gardener.",
        "key_manifestations": [
          "Time Machine (Evolutionary degeneration)",
          "Crowd Psychology (Le Bon)",
          "Cuban War (Reconcentrados)",
          "Cecil Rhodes (The Anglo-Saxon destiny)"
        ]
      },
      "1896": {
        "variance_explained": 15.0,
        "description": "Plessy v. Ferguson (+0.5%). 'Separate but Equal.' Legalized racial caste in the US. Adwa (Black victory) shocked the Social Darwinists\u2014it challenged the 'Law' of white supremacy.",
        "key_manifestations": [
          "Plessy v. Ferguson (Legal Event)",
          "Battle of Adwa (Counter-event)",
          "Island of Dr. Moreau (Biological horror)",
          "Struggle for Existence (Huxley)"
        ]
      },
      "1897": {
        "variance_explained": 15.5,
        "description": "Ratzel's *Politische Geographie* (+0.5%). Coined 'Lebensraum' (Living Space). A state is an organism that must grow. This was the biological justification for conquest.",
        "key_manifestations": [
          "Politische Geographie (Book)",
          "Dracula (Invasion by the other)",
          "Zionist Congress (Racial nationalism)",
          "Diamond Jubilee (Hierarchy of races)"
        ]
      },
      "1898": {
        "variance_explained": 16.0,
        "description": "Spanish-American War (+0.5%). 'The Splendid Little War.' Roosevelt: 'The strenuous life.' War as a health tonic for the race. The US took up the 'White Man's Burden.'",
        "key_manifestations": [
          "The Strenuous Life (Speech)",
          "White Man's Burden (Poem)",
          "War of the Worlds (Interplanetary Darwinism)",
          "Fashoda (Imperial clash)"
        ]
      },
      "1899": {
        "variance_explained": 16.5,
        "description": "Houston Stewart Chamberlain (+0.5%). *Foundations of the Nineteenth Century*. The Bible of Aryanism. He argued Jesus was not Jewish. Kaiser Wilhelm loved it. It linked Wagner, race, and history.",
        "key_manifestations": [
          "Foundations of the 19th Century (Book)",
          "Boer War (Anglo-Saxon civil war)",
          "Heart of Darkness (The horror of the primitive)",
          "Hague Conference (Civilizing war)"
        ]
      },
      "1900": {
        "variance_explained": 17.0,
        "description": "Boxer Rebellion (+0.5%). The 'Yellow Peril.' The Kaiser's Hun Speech. 'No quarter.' Racial war against the East. The Boxers were seen as sub-human fanatics.",
        "key_manifestations": [
          "Hun Speech (Rhetoric)",
          "Siege of Legations (Event)",
          "Lord Jim (Book)",
          "Interpretation of Dreams (Book)"
        ]
      },
      "1901": {
        "variance_explained": 17.5,
        "description": "Teddy Roosevelt President (+0.5%). The Social Darwinist in the White House. 'Speak softly and carry a big stick.' He believed in the destiny of the English-speaking peoples.",
        "key_manifestations": [
          "TR Presidency (Event)",
          "Kim (The Great Game)",
          "Mann's Buddenbrooks (Decline of a family)",
          "Insular Cases (Constitutional racism)"
        ]
      },
      "1902": {
        "variance_explained": 17.5,
        "description": "Stasis. Hobson's *Imperialism*. A critique. He argued empire was economic, not biological. But the Darwinist view was stronger in the public mind.",
        "key_manifestations": [
          "Hobson's Imperialism (Book)",
          "Heart of Darkness (Book)",
          "Kropotkin's Mutual Aid (Evolution by cooperation - the alternative)",
          "End of Boer War (Event)"
        ]
      },
      "1903": {
        "variance_explained": 18.0,
        "description": "Protocols of the Elders of Zion (+0.5%). Forgery published in Russia. The conspiracy theory of race war. The Jew as the hidden virus. It spread globally.",
        "key_manifestations": [
          "Protocols published (Text)",
          "Call of the Wild (Primitivism)",
          "Pogroms in Kishinev (Event)",
          "Souls of Black Folk (Du Bois - Double Consciousness)"
        ]
      },
      "1904": {
        "variance_explained": 18.5,
        "description": "Herero Genocide (+0.5%). Germany in Namibia. Racial extermination. General Trotha: 'I wipe out rebellious tribes with streams of blood.' The link to the Holocaust is direct (personnel and methods).",
        "key_manifestations": [
          "Herero Genocide (Event)",
          "Russo-Japanese War (Race war in the East)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)"
        ]
      },
      "1905": {
        "variance_explained": 19.0,
        "description": "Japan Defeats Russia (+0.5%). A shock. A 'Colored' nation defeated a White power. It validated Social Darwinism (Japan was 'fit') but terrified the West (Yellow Peril).",
        "key_manifestations": [
          "Battle of Tsushima (Event)",
          "Aliens Act 1905 UK (Immigration control)",
          "Professor Challenger (Novel)",
          "Debussy's La Mer (Cultural)"
        ]
      },
      "1906": {
        "variance_explained": 19.5,
        "description": "Galton's Eugenics Laboratory (+0.5%). Science applied to breeding. 'Positive Eugenics.' The desire to improve the stock. Passing of the Great Race (Grant) gestating.",
        "key_manifestations": [
          "Eugenics Lab founded (Institutional Event)",
          "White Fang (Novel)",
          "The Jungle (Book)",
          "San Francisco Earthquake (Event)"
        ]
      },
      "1907": {
        "variance_explained": 20.0,
        "description": "Indiana Eugenics Law (+0.5%). First compulsory sterilization law in the world. The US led the way. Germany watched and learned. Creating the 'Master Race' began in the Midwest.",
        "key_manifestations": [
          "Indiana Sterilization Law (Legal Event)",
          "Secret Agent (Book)",
          "Picasso (Primitivism)",
          "Gentlemen's Agreement (limiting Japanese immigration)"
        ]
      },
      "1908": {
        "variance_explained": 20.5,
        "description": "Young Turk Revolution (+0.5%). Turkish nationalism. 'Turkification.' The move from multi-ethnic empire to racial state. Prelude to Armenian Genocide.",
        "key_manifestations": [
          "Young Turk Revolution (Event)",
          "War in the Air (Book)",
          "Scouting for Boys (Training)",
          "Jack Johnson Champion (Black prowess shocks white world)"
        ]
      },
      "1909": {
        "variance_explained": 21.0,
        "description": "Marinetti (+0.5%). 'War is the world's only hygiene.' Futurism fused with Social Darwinism. Violence cleanses. The weak should perish.",
        "key_manifestations": [
          "Futurist Manifesto (Art)",
          "The Machine Stops (Story)",
          "NAACP founded (Counter-organization)",
          "Bl\u00e9riot (Tech)"
        ]
      },
      "1910": {
        "variance_explained": 21.5,
        "description": "Eugenics Record Office (US) (+0.5%). Collecting data on 'defectives.' The Rockefeller Foundation funded it. The intellectual mainstreaming of biological racism.",
        "key_manifestations": [
          "ERO founded (Institutional Event)",
          "Great Illusion (Book)",
          "Howards End (Book)",
          "Mexican Revolution (Event)"
        ]
      },
      "1911": {
        "variance_explained": 22.0,
        "description": "Bernhardi's *Germany and the Next War* (+0.5%). 'War is a biological necessity.' 'The right of conquest.' It was a bestseller. It convinced the world Germany sought world domination.",
        "key_manifestations": [
          "Germany and the Next War (Book)",
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Boas' The Mind of Primitive Man (Counter-argument)"
        ]
      },
      "1912": {
        "variance_explained": 23.0,
        "description": "First International Eugenics Congress (+1.0%). London. Churchill attended. It was respectable science. The consensus: the unfit are breeding too fast.",
        "key_manifestations": [
          "Eugenics Congress (Event)",
          "Titanic (Event)",
          "Tarzan (The superior white savage)",
          "Balkan Wars (Ethnic cleansing)"
        ]
      },
      "1913": {
        "variance_explained": 24.0,
        "description": "Webster's *The French Revolution* (+1.0%). Conspiracy theory. The revolution was a plot by secret societies/Jews. Feeding the counter-revolutionary right.",
        "key_manifestations": [
          "Webster's book (Intellectual Event)",
          "Rite of Spring (Primitivism)",
          "Natives Land Act (Apartheid root)",
          "Zabern Affair (Event)"
        ]
      },
      "1914": {
        "variance_explained": 50.0,
        "description": "The War of Races (+26.0%). The propaganda framed it as 'Slav vs Teuton' or 'Civilization vs Hun.' The 'Rape of Belgium' was cast as biological defilement. The Social Darwinist rhetoric became state policy. 'We are fighting for our existence.'",
        "key_manifestations": [
          "Spirit of 1914 (Event)",
          "Manifesto of the 93 (Intellectuals for war)",
          "Propaganda posters (The Ape-Hun)",
          "Battle of Tannenberg (Teuton vs Slav)"
        ]
      },
      "1915": {
        "variance_explained": 55.0,
        "description": "Armenian Genocide (+5.0%). The Young Turks liquidated the Armenians. 'The microbe in the body of the state.' Biological language for murder. The first modern implementation of the cluster's logic.",
        "key_manifestations": [
          "Armenian Genocide (Event)",
          "Birth of a Nation (Film - KKK glory)",
          "Gallipoli (Event)",
          "The Rainbow (Book)"
        ]
      },
      "1916": {
        "variance_explained": 60.0,
        "description": "Grant's *Passing of the Great Race* (+5.0%). US. Nordic supremacy. Hitler called it his 'Bible.' It argued the great race was dying out and needed protection. The Somme\u2014the best blood of Europe spilled.",
        "key_manifestations": [
          "Passing of the Great Race (Book)",
          "Battle of the Somme (Dysgenic slaughter)",
          "Easter Rising (Event)",
          "Madison Grant's influence (Intellectual Event)"
        ]
      },
      "1917": {
        "variance_explained": 62.0,
        "description": "US Immigration Act (+2.0%). Literacy tests. Asiatic Barred Zone. Keeping the stock pure. The war fueled nativism.",
        "key_manifestations": [
          "Immigration Act of 1917 (Legal Event)",
          "Balfour Declaration (Event)",
          "Russian Revolution (Class replacing Race temporarily)",
          "Unrestricted U-Boat War (Survival logic)"
        ]
      },
      "1918": {
        "variance_explained": 50.0,
        "description": "Defeat and Stab in the Back (-12.0% Kinetic, +Virulence). Germany defeated. The Right claimed it was the 'Jew' and the 'Socialist' (biological traitors) who did it. The struggle turned internal. Spengler's *Decline of the West*\u2014civilizations are organisms that die.",
        "key_manifestations": [
          "Stab in the Back myth (Propaganda)",
          "Decline of the West (Book)",
          "Spanish Flu (Real biological threat)",
          "Armistice (Event)"
        ]
      },
      "1919": {
        "variance_explained": 45.0,
        "description": "Versailles and Thule Society (-5.0%). Versailles created new ethno-states. Minorities were trapped. The Thule Society in Munich\u2014occult racism, the incubator of the Nazi Party. The seed survived the winter.",
        "key_manifestations": [
          "Thule Society activities (Event)",
          "Versailles Treaty (Event)",
          "Red Summer (US Race Riots)",
          "Chicago Race Riot (Event)"
        ]
      },
      "1920": {
        "variance_explained": 48.0,
        "description": "Nazi Party Program (+3.0%). 25 Points. 'None but members of the nation may be citizens... No Jew may be a member of the nation.' Biological citizenship defined. Stoddard's *The Rising Tide of Color*\u2014fear of the non-white world.",
        "key_manifestations": [
          "NSDAP 25 Points (Document)",
          "Rising Tide of Color (Book)",
          "Kapp Putsch (Event)",
          "Protocols of Elders of Zion (English translation)"
        ]
      },
      "1921": {
        "variance_explained": 50.0,
        "description": "Johnson Act (+2.0%). US Quotas. Drastically cut immigration from S/E Europe. To preserve 'Nordic' character. The US was the model for the racial state.",
        "key_manifestations": [
          "Emergency Quota Act (Legal Event)",
          "Tulsa Race Massacre (Event)",
          "Hitler becomes Party Chairman (Event)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 52.0,
        "description": "Fascism (+2.0%). Mussolini. 'The struggle is the origin of all things.' Though less biological than Nazism, it glorified strength and violence. Hans F.K. G\u00fcnther published on 'Racial Science' in Germany.",
        "key_manifestations": [
          "March on Rome (Event)",
          "G\u00fcnther's Rassenkunde (Book)",
          "Waste Land (Poem)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 55.0,
        "description": "Hitler's Putsch (+3.0%). Failed, but the trial gave him a platform. He preached the Racial struggle. *The Protocols* were widely read in Germany. The inflation destroyed the middle class, making them receptive to scapegoating.",
        "key_manifestations": [
          "Beer Hall Putsch (Event)",
          "Hyperinflation (Event)",
          "Rosenberg's writings (Ideology)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 60.0,
        "description": "Immigration Act of 1924 (+5.0%). US. Perfected the quota system. Hitler praised it in *Mein Kampf*. 'The one state that has made progress toward a v\u00f6lkisch conception.' *Mein Kampf* written\u2014the blueprint.",
        "key_manifestations": [
          "Immigration Act of 1924 (Legal Event)",
          "Mein Kampf written (Text)",
          "Magic Mountain (Book)",
          "Virginia Sterilization Act (Legal Event)"
        ]
      },
      "1925": {
        "variance_explained": 62.0,
        "description": "Mein Kampf Published (+2.0%). 'The sacred mission of the German people... to assemble and preserve the most valuable racial elements.' The cluster was fully articulated.",
        "key_manifestations": [
          "Mein Kampf Vol 1 (Book)",
          "Great Gatsby (Tom Buchanan's racist rant)",
          "Scopes Trial (Evolution debate)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 62.0,
        "description": "Stasis. Hitler Youth founded. Indoctrination. The 'Nordic Ring' movement. Theoretical consolidation.",
        "key_manifestations": [
          "Hitler Youth founded (Institutional Event)",
          "Sun Also Rises (Book)",
          "Metropolis (Film)",
          "Protocols widespread (Event)"
        ]
      },
      "1927": {
        "variance_explained": 65.0,
        "description": "Buck v. Bell (+3.0%). US Supreme Court. 'Three generations of imbeciles are enough.' Upheld forced sterilization. Legitimacy from the highest court. Germany took notes.",
        "key_manifestations": [
          "Buck v. Bell (Legal Event)",
          "The Jazz Singer (Blackface)",
          "Heidegger (Philosophy)",
          "Lindbergh (Nordic hero)"
        ]
      },
      "1928": {
        "variance_explained": 65.0,
        "description": "Stasis. Rosenberg formed the 'Kampfbund for German Culture.' Cultural struggle. The Nazi vote was low (2.6%), but the ideology was hardening.",
        "key_manifestations": [
          "Kampfbund founded (Institutional Event)",
          "Lady Chatterley's Lover (Book)",
          "Kellogg-Briand Pact (Event)",
          "Mickey Mouse (Cultural)"
        ]
      },
      "1929": {
        "variance_explained": 68.0,
        "description": "The Depression (+3.0%). The struggle became real. 'Bread and Work.' The Nazis linked economic misery to the 'International Jew.' The masses listened. Himmler appointed head of SS\u2014the racial elite.",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "Himmler leads SS (Bio Event)",
          "All Quiet on the Western Front (Book)",
          "Passing of the Great Race (Reprinted)"
        ]
      },
      "1930": {
        "variance_explained": 75.0,
        "description": "Rosenberg's *Myth of the Twentieth Century* (+7.0%). The second Nazi bible. Blood and Soul. The Aryan soul against the chaotic mix. Nazi electoral breakthrough (18%). The ideology went mainstream.",
        "key_manifestations": [
          "Myth of the Twentieth Century (Book)",
          "Nazi Election Victory (Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 78.0,
        "description": "Manchuria (+3.0%). Japan asserting racial dominance in Asia. The 'Yamato' race. SS Race and Settlement Main Office (RuSHA) founded\u2014breeding the elite.",
        "key_manifestations": [
          "RuSHA founded (Institutional Event)",
          "Mukden Incident (Event)",
          "M (Film)",
          "Scottsboro Boys (US Racial injustice)"
        ]
      },
      "1932": {
        "variance_explained": 80.0,
        "description": "Tuskegee Study (+2.0%). US. Syphilis experiment on Black men. The disposable body. Brave New World\u2014engineered castes.",
        "key_manifestations": [
          "Tuskegee Study begins (Event)",
          "Brave New World (Book)",
          "Papen Coup (Event)",
          "Famine in Ukraine (Event)"
        ]
      },
      "1933": {
        "variance_explained": 90.0,
        "description": "The Racial State (+10.0%). Hitler in power. Sterilization Law. Boycott of Jewish shops. The cluster became the Constitution. The 'Volksgemeinschaft' (People's Community) excluded the 'Alien.'",
        "key_manifestations": [
          "Sterilization Law (Legal Event)",
          "Jewish Boycott (Event)",
          "Book Burnings (Event)",
          "King Kong (Racial allegory)"
        ]
      },
      "1934": {
        "variance_explained": 92.0,
        "description": "Night of the Long Knives (+2.0%). Purging the ranks. The SS emerged as the independent executor of the racial will. 'Life Unworthy of Life' propaganda began.",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "SS Independence (Event)",
          "Tender is the Night (Book)",
          "Imitation of Life (Film)"
        ]
      },
      "1935": {
        "variance_explained": 100.0,
        "description": "Nuremberg Laws (+8.0%). 'Law for the Protection of German Blood and Honor.' Ban on mixed marriage. Jews stripped of citizenship. Social Death. The cluster's logic codified into statute. Abyssinia\u2014Italy's racial war.",
        "key_manifestations": [
          "Nuremberg Laws (Legal Event)",
          "Invasion of Ethiopia (Event)",
          "Triumph of the Will (Film)",
          "Lebensborn founded (Breeding program)"
        ]
      },
      "1936": {
        "variance_explained": 100.0,
        "description": "Berlin Olympics (+0.0%). The Aryans on display. Jesse Owens debunked the myth physically, but the propaganda victory held. The Rhineland reoccupied\u2014German blood claiming German soil.",
        "key_manifestations": [
          "Berlin Olympics (Event)",
          "Jesse Owens victories (Event)",
          "Rhineland (Event)",
          "General Theory (Book)"
        ]
      },
      "1937": {
        "variance_explained": 100.0,
        "description": "Rape of Nanking (+0.0%). Japanese racial superiority manifested as atrocity. 'The Samurai decapitating the log.' Degenerate Art exhibition\u2014purging 'Jewish/Bolshevik' influence from culture.",
        "key_manifestations": [
          "Rape of Nanking (Event)",
          "Degenerate Art Exhibition (Event)",
          "Papal Encyclical Mit Brennender Sorge (Condemning racism)",
          "Guernica (Event)"
        ]
      },
      "1938": {
        "variance_explained": 100.0,
        "description": "Kristallnacht (+0.0%). The pogrom State. 'Aryanization' of property. Theft as racial right. The Evian Conference\u2014the world refused to take the Jews. Darwinism in diplomacy.",
        "key_manifestations": [
          "Kristallnacht (Event)",
          "Evian Conference (Event)",
          "Anschluss (Event)",
          "Munich (Event)"
        ]
      },
      "1939": {
        "variance_explained": 100.0,
        "description": "War of Extermination (+0.0%). Hitler's prophecy: 'The annihilation of the Jewish race in Europe.' T4 Program\u2014killing the disabled. The internal cleansing preceded the external conquest. Poland invaded\u2014Slavs as helots.",
        "key_manifestations": [
          "Hitler's Prophecy Speech (Rhetoric)",
          "T4 Program begins (Event)",
          "Invasion of Poland (Event)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 100.0,
        "description": "Generalplan Ost (+0.0%). The Master Plan. Colonization of the East. Starvation of 30 million Slavs. The SS vision of a feudal, racial empire. The fall of France was seen as proof of racial decay in the West.",
        "key_manifestations": [
          "Generalplan Ost draft (Document)",
          "Fall of France (Event)",
          "Madagascar Plan (Deportation idea)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "The Final Solution (+0.0%). Barbarossa. The 'War of Annihilation.' The Einsatzgruppen. 1 million Jews shot in pits. The decision to gas. The cluster reached its terminal velocity.",
        "key_manifestations": [
          "Barbarossa (Event)",
          "Babi Yar (Event)",
          "Commissar Order (Document)",
          "Wannsee planning (Event)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "Industrial Genocide (+0.0%). Auschwitz. The factory model applied to the Social Darwinist goal. Selection on the ramp: 'Fit to work' or 'Gas.' The ultimate reduction of the human to biological utility.",
        "key_manifestations": [
          "Wannsee Conference (Event)",
          "Auschwitz operational (Event)",
          "Beveridge Report (The antithesis - care)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 95.0,
        "description": "The Tide Turns (-5.0%). Stalingrad. The 'Master Race' was beaten by the 'Subhumans.' It shattered the myth, but intensified the killing (to finish the job). The Warsaw Ghetto Uprising\u2014the untermensch fought back.",
        "key_manifestations": [
          "Stalingrad (Event)",
          "Warsaw Ghetto Uprising (Event)",
          "Himmler's Posen Speech (Explicit admission)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 80.0,
        "description": "Hungary (-15.0%). Eichmann deported 400,000 Hungarian Jews in weeks. The war was lost, but the Race War continued to the last minute. It was irrational strategically, but logical within the cluster.",
        "key_manifestations": [
          "Deportation of Hungarian Jews (Event)",
          "D-Day (Event)",
          "Myrdal's An American Dilemma (US race analysis)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 20.0,
        "description": "Collapse (-60.0%). The camps liberated. The skeleton piles. The world vomited. The concept of 'Master Race' was buried under the ruins. The UN Charter\u2014'human rights' replaced 'racial struggle.'",
        "key_manifestations": [
          "Liberation of the Camps (Event)",
          "Hitler's Suicide (Event)",
          "UN Charter (Legal Event)",
          "Black Boy (Book)"
        ]
      },
      "1946": {
        "variance_explained": 15.0,
        "description": "Nuremberg (-5.0%). 'Crimes Against Humanity.' The biological state was judged criminal. But in the US, Jim Crow survived. The struggle shifted to 'Decolonization.'",
        "key_manifestations": [
          "Nuremberg Trials (Event)",
          "Song of the South (Disney racism)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain (Event)"
        ]
      },
      "1947": {
        "variance_explained": 15.0,
        "description": "Stasis. Partition of India. Religious/Ethnic cleansing. The logic survived the Nazis. Apartheid planning in South Africa.",
        "key_manifestations": [
          "Partition of India (Event)",
          "Jackie Robinson integrates baseball (Event)",
          "Gentleman's Agreement (Film on antisemitism)",
          "Streetcar Named Desire (Play)"
        ]
      },
      "1948": {
        "variance_explained": 18.0,
        "description": "Apartheid (+3.0%). South Africa. The National Party won. 'Separate Development.' The cluster found a new fortress. Genocide Convention signed\u2014'Never Again.'",
        "key_manifestations": [
          "Apartheid begins (Policy)",
          "Genocide Convention (Legal Event)",
          "Cry, the Beloved Country (Book)",
          "Declaration of Human Rights (Event)"
        ]
      },
      "1949": {
        "variance_explained": 15.0,
        "description": "Stasis. Chinese Revolution. Class struggle replaced Race struggle in the East. Simone de Beauvoir's *The Second Sex*\u2014struggle of the sexes.",
        "key_manifestations": [
          "Chinese Revolution (Event)",
          "Second Sex (Book)",
          "South Pacific (Musical dealing with race)",
          "1984 (Book)"
        ]
      },
      "1950": {
        "variance_explained": 15.0,
        "description": "UNESCO Statement on Race (+0.0%). Scientists declared 'Race' a social myth, not biological fact. The intellectual death of the cluster. But the Korean War mobilized racial tropes again. The struggle continued.",
        "key_manifestations": [
          "UNESCO Statement on Race (Document)",
          "Korean War (Event)",
          "The Authoritarian Personality (Book)",
          "Group Areas Act (South Africa)"
        ]
      }
    }
  },
  "14_nuclear_atomic_sublimity": {
    "name": "Nuclear Atomic Sublimity (The Absolute Weapon)",
    "description": "This eigencluster represents the conceptual journey from the discovery of radioactivity as a scientific curiosity to the realization of the 'Doomsday Machine.' It is distinct from Cluster 1 (Material Warfare) because it introduces a singularity: a weapon that does not just win wars but ends history. It tracks the shift from the 'Radium Craze' (vitalism) to the 'Physics of Despair' (fission), culminating in the Manhattan Project and the Cold War's logic of Mutually Assured Destruction.",
    "trajectory": {
      "1890": {
        "variance_explained": 0.1,
        "description": "The cluster was dormant, existing only in the latent potential of matter not yet understood by physics. The atomic model was the 'billiard ball'\u2014solid, indivisible, and immutable. The cultural variance was zero because the concept of 'atomic energy' did not exist in the public or military imagination. The displacing force was the overwhelming confidence in classical Newtonian physics, which seemed to explain the universe without recourse to invisible, energetic decay. Science was viewed as 'nearly complete,' with Lord Kelvin suggesting only minor clouds remained on the horizon.",
        "key_manifestations": [
          "Lord Kelvin's lectures on physics (Scientific Context)",
          "Mendeleev's Periodic Table (The map without the territory of isotopes)",
          "The Sign of Four (Novel - poisons are chemical, not radiological)",
          "Work of Crookes on cathode rays (Precursor research)"
        ]
      },
      "1891": {
        "variance_explained": 0.1,
        "description": "Stasis (+0.0%). The scientific community focused on the ether and electromagnetism. Tesla's experiments with high-frequency currents hinted at invisible energies, but these were interpreted through an electrical, not atomic, lens. The military focus remained entirely on high explosives (Lyddite) and ballistics. The concept of a weapon derived from the fundamental structure of matter was absent even from speculative fiction.",
        "key_manifestations": [
          "Tesla's coil experiments (Tech Event)",
          "Stoney coins the term 'electron' (Scientific Event)",
          "The Light That Failed (Book)",
          "Michelson-Morley experiment discussions (Cracks in the ether theory)"
        ]
      },
      "1892": {
        "variance_explained": 0.1,
        "description": "Stasis (+0.0%). The search for the structure of the atom continued in obscurity. Lorentz developed his theory of electrons, moving closer to the divisible atom. Culturally, the 'fin de si\u00e8cle' malaise focused on biological degeneration (Cluster 13) rather than physical disintegration. The energy source of the sun remained a mystery, attributed to gravitational contraction rather than fusion, limiting the cosmic imagination of energy.",
        "key_manifestations": [
          "Lorentz's electron theory (Scientific Event)",
          "Flammarion's Omega: The Last Days of the World (Apocalyptic fiction, but non-nuclear)",
          "Cholera in Hamburg (Biological anxiety dominant)",
          "Dewar produces liquid oxygen (Cryogenics)"
        ]
      },
      "1893": {
        "variance_explained": 0.1,
        "description": "Stasis (+0.0%). The Chicago World's Fair celebrated electricity and steam\u2014the macro-forces. The micro-world remained hidden. However, speculative fiction began to explore 'super-explosives' (melinite/dynamite), setting the narrative stage for a weapon that could destroy a city, even if the mechanism was chemical. The 'anarchist bomb' became the symbol of disproportionate destruction.",
        "key_manifestations": [
          "Chicago World's Fair (Event)",
          "The Great War of 189- (Novel - featuring asphyxiating shells)",
          "Reorganization of the Cavendish Laboratory (Institutional Event)",
          "Start of the search for Argon (Ramsay)"
        ]
      },
      "1894": {
        "variance_explained": 0.2,
        "description": "A slight tremor (+0.1%) as Lenard studied cathode rays passing through aluminum windows, proving the atom was not solid. This was the first empirical crack in the 'billiard ball' model. While military strategists obsessed over the Maxim gun, the physicists were beginning to dismantle the floor they stood on. The cultural impact was nil, but the scientific variance began its slow exponential climb.",
        "key_manifestations": [
          "Lenard's Cathode Ray experiments (Scientific Event)",
          "Discovery of Argon (Scientific Event)",
          "The Jungle Book (Nature vs Science)",
          "Hertz's Principles of Mechanics (Book)"
        ]
      },
      "1895": {
        "variance_explained": 0.5,
        "description": "The Discovery of X-Rays (+0.3%). Wilhelm Roentgen observed a new kind of ray that passed through solid matter. This was the 'First Spark.' It shattered the concept of opacity and privacy. While not nuclear (it's electron shell), it accustomed the public to the idea of 'invisible penetrating rays.' It was an immediate cultural sensation, appearing in cartoons and vaudeville, preparing the public mind for the 'invisible forces' of the atom.",
        "key_manifestations": [
          "Discovery of X-Rays (Scientific Event)",
          "First X-ray photograph of a hand (Cultural Event)",
          "The Time Machine (Novel - degeneration of matter)",
          "Lumiere Brothers film (Capturing the invisible time)"
        ]
      },
      "1896": {
        "variance_explained": 1.0,
        "description": "Discovery of Radioactivity (+0.5%). Becquerel found that uranium salts fogged photographic plates without sunlight. The energy came from *inside* the matter. This violated the law of conservation of energy as understood then. It was the birth of the nuclear age. Simultaneously, the 'Yellow Press' began to hype scientific miracles, creating a public expectation of 'Magic' from the laboratory.",
        "key_manifestations": [
          "Discovery of Radioactivity (Scientific Event)",
          "The Island of Dr. Moreau (Biological manipulation)",
          "Launch of the Daily Mail (Mass media hype)",
          "Zeeman Effect discovered (Magnetism and light)"
        ]
      },
      "1897": {
        "variance_explained": 1.5,
        "description": "Discovery of the Electron (+0.5%). J.J. Thomson proved the atom was divisible. The 'Plum Pudding' model. Matter was shown to be composed of electric charges. This moved the variance from 'observation' to 'structure.' Speculation began: if we can strip electrons, can we strip energy? The 'Scientific Romance' genre exploded, seeking new power sources for future wars.",
        "key_manifestations": [
          "Discovery of the Electron (Scientific Event)",
          "Dracula (Ancient force vs Modern Science)",
          "The Invisible Man (Science going wrong)",
          "Becquerel confirms uranium radiation (Scientific Event)"
        ]
      },
      "1898": {
        "variance_explained": 2.5,
        "description": "Discovery of Radium and Polonium (+1.0%). The Curies isolated elements that were millions of times more active than uranium. Radium glowed. It burned. It seemed to be an eternal heat source. The 'Radium Craze' began\u2014it was viewed as a vitalist Life Force, a cure-all. The danger was ignored. The cultural reception was 'Sublime'\u2014beauty and terror (though the terror was latent).",
        "key_manifestations": [
          "Discovery of Radium and Polonium (Scientific Event)",
          "War of the Worlds (Heat Ray as directed energy)",
          "Rutherford identifies Alpha and Beta rays (Science)",
          "Fashoda Incident (Conventional imperial clash)"
        ]
      },
      "1899": {
        "variance_explained": 3.0,
        "description": "Rutherford discovered Radon (+0.5%). The realization that elements could *transmute*\u2014one turning into another. Alchemy was real. This shattered the immutability of the elements. While the Hague Conference tried to ban balloon bombs, the physicists were uncovering forces that would make balloons irrelevant. The gap between diplomatic reality and physical reality widened.",
        "key_manifestations": [
          "Discovery of Radon (Scientific Event)",
          "Hague Convention (Legal constraint)",
          "Heart of Darkness (The horror of the unknown)",
          "Alpha/Beta ray classification (Science)"
        ]
      },
      "1900": {
        "variance_explained": 3.5,
        "description": "Planck's Quantum Theory (+0.5%). Energy comes in packets (quanta). The dissolution of the continuum. Gamma rays discovered by Villard\u2014the most penetrating and lethal. The 'spectrum of death' was complete (Alpha, Beta, Gamma). The cultural mood was one of 'Fin de Si\u00e8cle' anxiety, fitting for the dissolution of solid matter.",
        "key_manifestations": [
          "Planck's Quantum Hypothesis (Scientific Event)",
          "Discovery of Gamma Rays (Scientific Event)",
          "Interpretation of Dreams (The hidden mind)",
          "Boxer Rebellion (The visible violence)"
        ]
      },
      "1901": {
        "variance_explained": 3.8,
        "description": "Stasis (+0.3%). The Nobel Prize was established, institutionalizing the race for scientific discovery. Roentgen and Becquerel were honored. The public began to view the Physicist as the new High Priest. The 'Radium Girls' phenomenon (luminous paint) began, planting the seeds of radiation sickness, though unrecognized.",
        "key_manifestations": [
          "First Nobel Prizes awarded (Institutional Event)",
          "Kim (The game of knowledge)",
          "Marconi's wireless (Invisible waves)",
          "Fermi born (The architect of the pile)"
        ]
      },
      "1902": {
        "variance_explained": 4.5,
        "description": "Rutherford and Soddy's Theory of Radioactive Disintegration (+0.7%). They proved that radioactivity involved the spontaneous breakdown of atoms. Soddy remarked: 'The earth is a storehouse of explosives, inconceivable in their power.' This was the first explicit articulation of the 'Atomic Bomb' potential, though viewed as a geological curiosity. The 'Energy' metaphor began to seep into political language (Vitalism).",
        "key_manifestations": [
          "Theory of Radioactive Disintegration (Scientific Event)",
          "Heart of Darkness published (Book)",
          "The Wings of the Dove (Novel)",
          "Lenin's What Is To Be Done? (Political energy)"
        ]
      },
      "1903": {
        "variance_explained": 5.0,
        "description": "The Curies win the Nobel (+0.5%). Radium became the most expensive substance on earth. It was a status symbol. 'Radium Water' was sold as a tonic. The lethal nature of the cluster was masked by its commercialization. H.G. Wells began to synthesize these discoveries into a vision of future war, sensing the 'unlocking' of nature.",
        "key_manifestations": [
          "Curie Nobel Prize (Event)",
          "Rutherford's 'Atomic Energy' speculation (Intellectual Event)",
          "The Riddle of the Sands (Conventional threat)",
          "Jack London's People of the Abyss (Social decay)"
        ]
      },
      "1904": {
        "variance_explained": 5.2,
        "description": "Stasis (+0.2%). The focus shifted to the structure of the atom. The 'Saturnian' model was proposed (Nagaoka). The Russo-Japanese War showed the horror of industrial high explosives (Shimose), preparing the psychological ground for 'Super-Explosives.' The concept of 'Total Destruction' was being learned in the mud of Manchuria.",
        "key_manifestations": [
          "Nagaoka's atomic model (Scientific Event)",
          "Russo-Japanese War (Industrial slaughter)",
          "Peter Pan (Denial of time/decay)",
          "The Golden Bowl (Book)"
        ]
      },
      "1905": {
        "variance_explained": 6.5,
        "description": "Einstein's Annus Mirabilis (+1.3%). *E=mc\u00b2*. The equivalence of mass and energy. The mathematical proof that a small amount of matter contained a god-like amount of energy. While theoretical, it provided the 'recipe' for the bomb. It shifted the cluster from 'Discovery' to 'Potentiality.' Science fiction began to catch up with physics.",
        "key_manifestations": [
          "Special Relativity papers (Scientific Event)",
          "Einstein's Mass-Energy Equivalence (Scientific Event)",
          "The Jungle (Industrial horror)",
          "Revolution of 1905 (Political explosion)"
        ]
      },
      "1906": {
        "variance_explained": 6.8,
        "description": "Stasis (+0.3%). The focus was on the electron. The disconnect between the physicist (looking at the atom) and the general (looking at the cavalry charge) was absolute. However, the 'Dreadnought' race showed a hunger for 'Ultimate Weapons' that would eventually embrace the atom.",
        "key_manifestations": [
          "Launch of Dreadnought (Tech Event)",
          "Boltzmann's suicide (The tragedy of thermodynamics)",
          "San Francisco Earthquake (City destruction)",
          "Falli\u00e8res Decree (Offensive spirit)"
        ]
      },
      "1907": {
        "variance_explained": 7.0,
        "description": "Boltwood's Radiometric Dating (+0.2%). Using uranium decay to date the earth. It proved the earth was billions of years old, shattering biblical time. The atom was not just a weapon; it was a clock. This reinforced the authority of science over tradition. The Hague Conference tried to ban 'new explosives' from balloons, a quaint attempt to stop the future.",
        "key_manifestations": [
          "Radiometric dating developed (Scientific Event)",
          "Hague Convention (Legal Event)",
          "The Secret Agent (The bomb carrier)",
          "Picasso's Demoiselles (Fractured reality)"
        ]
      },
      "1908": {
        "variance_explained": 7.5,
        "description": "Rutherford wins Nobel (+0.5%). Detected single atoms. The instrumentation was improving. The Geiger Counter (early version) invented. We could now 'hear' the atom. The Tunguska Event (meteor airburst) provided a natural demonstration of a multi-megaton explosion, though its cause was unknown, it served as a subconscious archetype of the 'Flash.'",
        "key_manifestations": [
          "Rutherford Nobel Prize (Event)",
          "Tunguska Event (Natural Nuclear-scale Event)",
          "Geiger-M\u00fcller tube prototype (Tech Event)",
          "The War in the Air (Wells - aerial destruction)"
        ]
      },
      "1909": {
        "variance_explained": 8.0,
        "description": "The Geiger-Marsden Experiment (+0.5%). Firing alpha particles at gold foil. Some bounced back. 'Like firing a 15-inch shell at tissue paper.' It proved the existence of a dense, hard nucleus. The target for fission was physically located. The atom was mostly empty space, guarded by a force field.",
        "key_manifestations": [
          "Geiger-Marsden Experiment (Scientific Event)",
          "Futurist Manifesto (Glorifying energy/speed)",
          "The Machine Stops (Dependency on tech)",
          "Bleriot Flight (The delivery system arrives)"
        ]
      },
      "1910": {
        "variance_explained": 8.5,
        "description": "Soddy on Isotopes (+0.5%). Frederick Soddy suggested that elements could exist in different weights (Isotopes). This was crucial for the bomb (U-235 vs U-238). He also wrote extensively on the utopian potential of atomic energy to liberate mankind from labor\u2014the 'Garden of Eden' myth attached to the cluster.",
        "key_manifestations": [
          "Soddy's Isotope theory (Scientific Event)",
          "Halley's Comet Panic (Atmospheric anxiety)",
          "The Great Illusion (Economic rationality)",
          "Marie Curie's Treatise on Radioactivity (Book)"
        ]
      },
      "1911": {
        "variance_explained": 9.5,
        "description": "Rutherford's Model of the Atom (+1.0%). The planetary model. Nucleus in the center, electrons orbiting. The structural understanding was complete. Marie Curie won her second Nobel (Chemistry) for isolating radium. She was the icon of the cluster\u2014the martyr to radiation (her health was failing). The 'poison' of the cluster was becoming visible in her body.",
        "key_manifestations": [
          "Rutherford Atomic Model (Scientific Event)",
          "Curie's Second Nobel (Event)",
          "Agadir Crisis (International tension)",
          "Fantomas (The invisible enemy)"
        ]
      },
      "1912": {
        "variance_explained": 10.0,
        "description": "Wilson Cloud Chamber (+0.5%). Visualizing the path of particles. We could now 'see' the subatomic world. It made the abstract concrete. Cultural anxiety about 'invisible rays' grew, fed by the Titanic disaster (technology failing against nature).",
        "key_manifestations": [
          "Wilson Cloud Chamber perfected (Tech Event)",
          "Sinking of the Titanic (Tech hubris)",
          "The Lost World (Prehistoric survival)",
          "Jung's Psychology of the Unconscious (Hidden forces)"
        ]
      },
      "1913": {
        "variance_explained": 11.0,
        "description": "Bohr Model (+1.0%). Niels Bohr applied quantum theory to Rutherford's atom. Electrons move in fixed orbits. Stable orbits explained why matter didn't collapse. Moseley's Law ordered the elements by atomic number. The 'Periodic Table' became a sequence of proton counts. The logic of the nucleus was decoded.",
        "key_manifestations": [
          "Bohr's Atomic Model (Scientific Event)",
          "Moseley's Law (Scientific Event)",
          "Rite of Spring (Cultural explosion)",
          "H.G. Wells writes 'The World Set Free' (Cultural Event)"
        ]
      },
      "1914": {
        "variance_explained": 15.0,
        "description": "The World Set Free (+4.0%). H.G. Wells published his novel. He coined the term 'Atomic Bomb.' He predicted a war in 1956 where cities would be destroyed by 'Carolinum' bombs that exploded continuously. He influenced Szilard and Churchill. The prophecy was written. The Great War began, but it was a chemical war (Cluster 11), not nuclear. The reality lagged the fiction.",
        "key_manifestations": [
          "The World Set Free published (Book)",
          "Rutherford knighted (Event)",
          "Outbreak of WWI (Conventional destruction)",
          "Death of Moseley at Gallipoli (Science lost to war)"
        ]
      },
      "1915": {
        "variance_explained": 15.5,
        "description": "General Relativity (+0.5%). Einstein completed the theory. Gravity is curvature. It expanded the understanding of the cosmos, making the energy of the atom seem part of a universal fabric. On the battlefield, the 'Gas' attack at Ypres introduced the 'Invisible Death'\u2014a psychological precursor to radiation fear.",
        "key_manifestations": [
          "General Relativity published (Scientific Event)",
          "Gas attack at Ypres (Chemical precursor)",
          "The Thirty-Nine Steps (Spy fiction)",
          "Metamorphosis (Kafka - transformation)"
        ]
      },
      "1916": {
        "variance_explained": 16.0,
        "description": "Stasis (+0.5%). The slaughter of the Somme consumed the scientific generation (like Moseley). Science was mobilized for ballistics and gas. The 'Atomic' dream hibernated. However, the sheer scale of destruction created a demand for a 'weapon to end war'\u2014a niche the Bomb would later fill.",
        "key_manifestations": [
          "Battle of the Somme (Industrial slaughter)",
          "Einstein's work on radiation (Stimulated emission - laser roots)",
          "Dadaism (Rejection of logic)",
          "Easter Rising (Political fragmentation)"
        ]
      },
      "1917": {
        "variance_explained": 17.0,
        "description": "Rutherford splits the atom (+1.0%). At Manchester, he bombarded nitrogen with alpha particles and produced oxygen + protons. The first artificial transmutation. Man changed the element. It was the Philosopher's Stone. He missed the meeting of the War Submarine Committee to do it, famously saying: 'I have been engaged in experiments which suggest that the atom can be artificially disintegrated. If it is true, it is of far greater importance than a war.'",
        "key_manifestations": [
          "Splitting of the Nitrogen atom (Scientific Event)",
          "Rutherford's 'Moonshine' comment (Event)",
          "US Entry into WWI (Industrial mobilization)",
          "Russian Revolution (Political explosion)"
        ]
      },
      "1918": {
        "variance_explained": 17.5,
        "description": "Stasis (+0.5%). The war ended. The Spanish Flu killed more than the war. The fragility of human life was paramount. The scientists returned to the labs. The 'Internationalism' of science (Cluster 20) tried to reassert itself against the nationalism of the war.",
        "key_manifestations": [
          "Spanish Flu (Biological mass death)",
          "Armistice (Event)",
          "Decline of the West (Spengler - civilization as finite)",
          "Planck wins Nobel (Science)"
        ]
      },
      "1919": {
        "variance_explained": 19.0,
        "description": "Eddington confirms Relativity (+1.5%). The solar eclipse expedition. Light bends. Einstein became the first global scientific celebrity. Physics became 'pop culture.' The idea that reality is not what it seems (curved space, energy-mass) permeated the zeitgeist. The 'New Physics' replaced the Victorian clockwork.",
        "key_manifestations": [
          "Eddington Eclipse Expedition (Scientific Event)",
          "Rutherford becomes Director of Cavendish (Institutional Event)",
          "Alcock and Brown (Tech)",
          "Treaty of Versailles (Political rearrangement)"
        ]
      },
      "1920": {
        "variance_explained": 20.0,
        "description": "Rutherford predicts the Neutron (+1.0%). He hypothesized a neutral particle to explain atomic weight. He called it the 'neutron.' He warned that if it could be found, it would be the key to unlocking the nucleus. Prophetic science. Capek's *R.U.R.* introduced the 'Robot'\u2014the fear of technology escaping control.",
        "key_manifestations": [
          "Rutherford's Bakerian Lecture (Scientific Event)",
          "R.U.R. published (Play)",
          "Beyond the Pleasure Principle (Freud - Death Drive)",
          "Aston's Mass Spectrograph (Measuring isotopes)"
        ]
      },
      "1921": {
        "variance_explained": 21.0,
        "description": "Soddy wins Nobel (+1.0%). For Isotopes. He wrote *Wealth, Virtual Wealth and Debt*, arguing that atomic energy would decouple money from gold and create an economy of abundance. The 'Utopian' side of the cluster. The US Radium Corporation (Radium Girls) scandal began to simmer\u2014the 'Dystopian' side.",
        "key_manifestations": [
          "Soddy Nobel Prize (Event)",
          "Soddy's economic theories (Book)",
          "Tractatus (Philosophy)",
          "Einstein visits US (Celebrity tour)"
        ]
      },
      "1922": {
        "variance_explained": 22.0,
        "description": "Bohr wins Nobel (+1.0%). The structure of the atom was canonized. Aston wins Nobel for isotopes. The catalog of the elements was being rewritten. *The Waste Land* reflected the fragmentation of the old order, paralleling the fragmentation of the atom.",
        "key_manifestations": [
          "Bohr Nobel Prize (Event)",
          "Aston Nobel Prize (Event)",
          "The Waste Land (Poem)",
          "Mussolini (Political force)"
        ]
      },
      "1923": {
        "variance_explained": 22.5,
        "description": "Compton Effect (+0.5%). Proved light acts as a particle. Wave-particle duality. Reality is ambiguous. In Germany, hyperinflation made paper money worthless, creating a hunger for 'real' value\u2014gold, or perhaps energy. The 'Radium Girls' began dying of jaw necrosis.",
        "key_manifestations": [
          "Compton Effect discovery (Scientific Event)",
          "German Hyperinflation (Event)",
          "Radium Girls litigation begins (Legal Event)",
          "Beer Hall Putsch (Event)"
        ]
      },
      "1924": {
        "variance_explained": 23.0,
        "description": "De Broglie's Hypothesis (+0.5%). Matter is a wave. The dissolution of the solid. In fiction, the 'Death Ray' craze (Grindell Matthews) showed the public hunger for a super-weapon. The gap between real physics (waves) and public physics (rays) was vast.",
        "key_manifestations": [
          "De Broglie's thesis (Scientific Event)",
          "Death Ray media craze (Cultural Event)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 25.0,
        "description": "Quantum Mechanics (+2.0%). Heisenberg, Born, Jordan. Matrix Mechanics. The uncertainty of the subatomic world. God plays dice. It created an intellectual revolution that unsettled determinism. The 'Law of Cause and Effect' was suspended at the atomic level.",
        "key_manifestations": [
          "Matrix Mechanics papers (Scientific Event)",
          "Pauli Exclusion Principle (Science)",
          "Great Gatsby (Book)",
          "Locarno (Peace)"
        ]
      },
      "1926": {
        "variance_explained": 26.0,
        "description": "Schr\u00f6dinger's Equation (+1.0%). Wave mechanics. The atom was a cloud of probability. This abstraction made the bomb seem less likely to the layman, but the math was becoming more precise. Fermi published on Fermi-Dirac statistics\u2014the behavior of particles that would make up the pile.",
        "key_manifestations": [
          "Schr\u00f6dinger's equation (Scientific Event)",
          "Fermi's statistics (Science)",
          "Metropolis (Film - energy and the machine)",
          "Sun Also Rises (Book)"
        ]
      },
      "1927": {
        "variance_explained": 28.0,
        "description": "Heisenberg's Uncertainty Principle (+2.0%). You cannot know position and momentum. The limits of knowledge. The Solvay Conference\u2014the greatest gathering of physicists. Einstein vs Bohr. The debate on the nature of reality. The intellectual capital for the bomb was all in one room.",
        "key_manifestations": [
          "Uncertainty Principle (Scientific Event)",
          "Solvay Conference 1927 (Event)",
          "Jazz Singer (Film)",
          "Being and Time (Book)"
        ]
      },
      "1928": {
        "variance_explained": 30.0,
        "description": "Gamow's Tunneling (+2.0%). Explaining alpha decay via quantum tunneling. The nucleus could be breached. Antimatter predicted by Dirac. The world of physics was becoming stranger than fiction. The 'Radium Girls' settled their lawsuit\u2014the danger of radiation was legally proven.",
        "key_manifestations": [
          "Quantum Tunneling theory (Scientific Event)",
          "Dirac Equation (Antimatter)",
          "Radium Girls settlement (Legal Event)",
          "Mickey Mouse (Culture)"
        ]
      },
      "1929": {
        "variance_explained": 32.0,
        "description": "Cyclotron invented (+2.0%). Lawrence. The machine to smash atoms. The 'Accelerator.' Industrialized physics. The scale of experiments grew from table-top to room-sized. The Crash of 1929 destroyed the economy, but physics funding (via universities/foundations) continued.",
        "key_manifestations": [
          "Invention of Cyclotron (Tech Event)",
          "Wall Street Crash (Event)",
          "Hubble discovers expansion of universe (Cosmic context)",
          "All Quiet on the Western Front (Book)"
        ]
      },
      "1930": {
        "variance_explained": 33.0,
        "description": "Neutrino predicted (+1.0%). Pauli. To save conservation of energy. The 'Ghost Particle.' Physics was filling in the blanks. The 1930s would be the 'Golden Age' of nuclear physics, just as the world darkened politically.",
        "key_manifestations": [
          "Pauli predicts Neutrino (Scientific Event)",
          "Dirac's Hole Theory (Science)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 35.0,
        "description": "Van de Graaff Generator (+2.0%). High voltage static to smash atoms. Deuterium discovered (Urey). Heavy Hydrogen. Essential for the H-Bomb later. The components of the 'Super' were appearing before the 'Bomb' itself.",
        "key_manifestations": [
          "Van de Graaff Generator (Tech Event)",
          "Discovery of Deuterium (Scientific Event)",
          "Frankenstein (Film - Life from electricity)",
          "M (Film)"
        ]
      },
      "1932": {
        "variance_explained": 45.0,
        "description": "The Miracle Year (+10.0%). 1. Chadwick discovered the Neutron. The bullet. 2. Cockcroft and Walton split the atom (Lithium) with protons. First nuclear transmutation by machine. 3. Anderson discovered the Positron. The nucleus was laid bare. The Neutron was the key: no charge, so it could enter the nucleus easily. The path was open.",
        "key_manifestations": [
          "Discovery of Neutron (Scientific Event)",
          "Splitting of Lithium (Scientific Event)",
          "Discovery of Positron (Scientific Event)",
          "Brave New World (Book)"
        ]
      },
      "1933": {
        "variance_explained": 55.0,
        "description": "Szilard's Chain Reaction (+10.0%). Leo Szilard, crossing the street in London, realized: if a neutron hits an atom and releases *two* neutrons, the process is exponential. He patented it. The 'Bomb' existed in his mind. Hitler took power, driving the Jewish physicists (Einstein, Szilard, Teller, Bethe) out of Germany. The 'Brain Drain' gifted the bomb to the Allies.",
        "key_manifestations": [
          "Szilard's Chain Reaction concept (Intellectual Event)",
          "Hitler becomes Chancellor (Political Event)",
          "Einstein emigrates to US (Event)",
          "The Shape of Things to Come (Wells)"
        ]
      },
      "1934": {
        "variance_explained": 60.0,
        "description": "Fermi's Neutrons (+5.0%). Fermi in Rome bombarded everything with neutrons. He created new isotopes. He split Uranium but *didn't realize it* (he thought he made transuranics). Ida Noddack suggested fission, but was ignored. The 'Italian Navigator' was sailing blind. Szilard filed his patent for the nuclear reactor.",
        "key_manifestations": [
          "Fermi's neutron bombardment experiments (Scientific Event)",
          "Szilard's patent 630,726 (Tech Event)",
          "Noddack's Fission Hypothesis (Scientific Event)",
          "Night of the Long Knives (Event)"
        ]
      },
      "1935": {
        "variance_explained": 62.0,
        "description": "U-235 (+2.0%). Dempster discovered the isotope Uranium-235. It is rare (0.7%). Bohr realized later that *this* was the fissile isotope. The problem of 'Enrichment' was born. Chadwick won the Nobel. The British scientific establishment was fully engaged.",
        "key_manifestations": [
          "Discovery of U-235 (Scientific Event)",
          "Chadwick Nobel Prize (Event)",
          "Watson-Watt Radar (Tech Event)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 65.0,
        "description": "Liquid Drop Model (+3.0%). Bohr. The nucleus behaves like a drop of liquid. It can wobble and split. The theoretical framework for fission was set. Germany occupied the Rhineland; the physicists realized war was coming. The race was implicit.",
        "key_manifestations": [
          "Bohr's Liquid Drop Model (Scientific Event)",
          "Spanish Civil War (Event)",
          "Berlin Olympics (Event)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 65.0,
        "description": "Stasis. Experimental confusion. Curie and Savitch in Paris found strange results with Uranium. Hahn and Meitner in Berlin were puzzled. The data didn't fit the 'Transuranic' theory. The truth was hiding in plain sight.",
        "key_manifestations": [
          "Curie/Savitch experiments (Scientific Event)",
          "Guernica (Event)",
          "Snow White (Film)",
          "Rutherford dies (Event - end of an era)"
        ]
      },
      "1938": {
        "variance_explained": 75.0,
        "description": "Discovery of Fission (+10.0%). December. Hahn and Strassmann found Barium after bombarding Uranium. Barium is half the weight of Uranium. The atom had split. Lise Meitner (in exile) calculated the energy release: 200 MeV. Huge. It was no longer 'Moonshine.' It was a bomb. Fermi won the Nobel and defected to the US.",
        "key_manifestations": [
          "Hahn-Strassmann experiment (Scientific Event)",
          "Meitner-Frisch interpretation (Scientific Event)",
          "Fermi Nobel/Defection (Event)",
          "Kristallnacht (Event)"
        ]
      },
      "1939": {
        "variance_explained": 85.0,
        "description": "The Einstein-Szilard Letter (+10.0%). Bohr announced Fission in the US. Szilard realized the danger: Hitler could build the bomb. He drafted a letter, Einstein signed it. Delivered to FDR. The 'Uranium Committee' was formed. Physics entered the State. War began. Germany formed the 'Uranverein' (Uranium Club). The race was on.",
        "key_manifestations": [
          "Einstein-Szilard Letter (Document)",
          "Bohr's announcement at Washington Conference (Event)",
          "German Uranverein formed (Institutional Event)",
          "Invasion of Poland (Event)"
        ]
      },
      "1940": {
        "variance_explained": 90.0,
        "description": "Critical Mass (+5.0%). Peierls and Frisch (UK) calculated that a bomb needed only pounds of U-235, not tons. This made it air-transportable. The 'MAUD Committee' formed in UK. Plutonium (Element 94) predicted by Turner. US research accelerated under NDRC.",
        "key_manifestations": [
          "Frisch-Peierls Memorandum (Strategic Document)",
          "MAUD Committee formed (Institutional Event)",
          "Fall of France (Urgency)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 95.0,
        "description": "Plutonium and the Manhattan Project (+5.0%). Seaborg isolated Plutonium. It was fissile. A second path to the bomb. The MAUD Report convinced the US to go 'all out.' FDR authorized the 'Top Policy Group.' Pearl Harbor galvanized the effort. The sleeping giant awoke with nuclear intent.",
        "key_manifestations": [
          "Discovery of Plutonium (Scientific Event)",
          "MAUD Report reaches US (Event)",
          "Authorization of Manhattan Project (Political Event)",
          "Pearl Harbor (Event)"
        ]
      },
      "1942": {
        "variance_explained": 98.0,
        "description": "Chicago Pile-1 (+3.0%). Fermi. Under the football stands. The first self-sustaining nuclear chain reaction. 'The Italian Navigator has landed.' It proved the theory. Groves took command. Los Alamos selected. Industrial sites (Oak Ridge, Hanford) broken ground. The 'Gadget' became an engineering problem.",
        "key_manifestations": [
          "CP-1 Criticality (Tech Event)",
          "Groves appointed (Bio Event)",
          "Los Alamos founded (Institutional Event)",
          "Wannsee Conference (The moral abyss)"
        ]
      },
      "1943": {
        "variance_explained": 99.0,
        "description": "The Factory (+1.0%). Massive construction. Electromagnetic separation (Calutrons). Gaseous diffusion. Reactors. The US economy poured into the project. The Quebec Agreement merged the UK/US efforts (Tube Alloys). Soviet spies (Fuchs) penetrated Los Alamos.",
        "key_manifestations": [
          "Oak Ridge/Hanford construction (Industrial Event)",
          "Quebec Agreement (Diplomatic Event)",
          "Bohr escapes to US (Event)",
          "Operation Epsilon (Heisenberg failed)"
        ]
      },
      "1944": {
        "variance_explained": 99.5,
        "description": "Implosion (+0.5%). The 'Gun' method worked for Uranium, but Plutonium needed 'Implosion' (due to impurities). Von Neumann and Kistiakowsky solved the lens problem. The 'Fat Man' design. The Alsos Mission discovered Germany had no bomb. The race was against time, not Hitler.",
        "key_manifestations": [
          "Implosion lens solution (Tech Event)",
          "Alsos Mission findings (Intel Event)",
          "V-2 Rocket (Future delivery system)",
          "Battle of the Bulge (Event)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "The Sublime (+0.5%). Trinity. Hiroshima. Nagasaki. The singularity. The weapon worked. It ended the war. The 'Atomic Age' began instantly. The 'Smyth Report' released the basic physics to the world. The psychological impact was 'Atomic Anxiety'\u2014the fear of extinction. The cluster became the defining feature of the era.",
        "key_manifestations": [
          "Trinity Test (Event)",
          "Hiroshima/Nagasaki (Event)",
          "Smyth Report (Publication)",
          "Formation of the Atomic Scientists Movement (Political Event)"
        ]
      },
      "1946": {
        "variance_explained": 95.0,
        "description": "Crossroads and Control (-5.0% Kinetic). Operation Crossroads. Bikini. The 'Baker' shot underwater. The aesthetic of the mushroom cloud. The Baruch Plan to internationalize the atom failed. The US passed the Atomic Energy Act (McMahon Act)\u2014civilian control, but secrecy. The Cold War became nuclear.",
        "key_manifestations": [
          "Operation Crossroads (Event)",
          "Baruch Plan (Diplomatic Event)",
          "Atomic Energy Act 1946 (Legal Event)",
          "Hersey's Hiroshima (Book)"
        ]
      },
      "1947": {
        "variance_explained": 92.0,
        "description": "The Doomsday Clock (-3.0%). The Bulletin of the Atomic Scientists. 7 minutes to midnight. The US stockpile was actually small (approx 13 bombs), but the *bluff* was huge. Containment policy relied on the 'Atomic Monopoly.'",
        "key_manifestations": [
          "Doomsday Clock established (Cultural Event)",
          "Truman Doctrine (Policy)",
          "AEC takes over from Army (Institutional Event)",
          "UFO phenomenon (Psychological displacement)"
        ]
      },
      "1948": {
        "variance_explained": 92.0,
        "description": "Sandstone and Berlin (+0.0%). Operation Sandstone. New levitated cores. Efficiency doubled. The arsenal became viable for war. During the Berlin Blockade, Truman sent B-29s to UK (not loaded). Atomic diplomacy. The fear of WWIII.",
        "key_manifestations": [
          "Operation Sandstone (Tech Event)",
          "Berlin Crisis deployment (Strategic Event)",
          "Cybernetics (Wiener - control of the machine)",
          "The Naked and the Dead (Book)"
        ]
      },
      "1949": {
        "variance_explained": 98.0,
        "description": "Joe-1 (+6.0%). The Soviet Bomb. Detected by US aircraft. The monopoly ended years early. Shock. The debate on the 'Super' (Hydrogen Bomb) began. Teller pushed for it; Oppenheimer opposed. The arms race went vertical.",
        "key_manifestations": [
          "Soviet RDS-1 Test (Event)",
          "GAC Report on the Super (Policy Document)",
          "1984 (Book - stalemate)",
          "NATO formed (Event)"
        ]
      },
      "1950": {
        "variance_explained": 100.0,
        "description": "The H-Bomb Decision (+2.0%). Truman ordered the Super. 'We must have it.' Fuchs arrested\u2014he gave the secrets to Stalin. The Korean War began\u2014McArthur wanted to use the bomb; Truman refused. The precedent of 'Non-Use' (Taboo) was established in a hot war. The Cluster stabilized into 'Deterrence.'",
        "key_manifestations": [
          "Truman's H-Bomb decision (Event)",
          "Fuchs Arrest (Event)",
          "Korean War (Conventional limits)",
          "The Martian Chronicles (Escape from the bomb)"
        ]
      }
    }
  },
  "15_partisan_insurgency_mythos": {
    "name": "Partisan Insurgency Mythos (The People's War)",
    "description": "This eigencluster captures the romanticization, strategic formalization, and political elevation of irregular warfare. It tracks the shift from 'Small Wars' (colonial policing of 'savages') to 'Revolutionary War' (the People vs the State). It elevates the guerrilla from a bandit to a political soldier. Fueled by the Boer Commandos, T.E. Lawrence, the IRA, Mao Zedong, and the anti-fascist Resistance, it posits that the 'Will of the People' can defeat the 'Machine of the Occupier.' It is the asymmetric shadow of the Industrial War.",
    "trajectory": {
      "1890": {
        "variance_explained": 2.0,
        "description": "The cluster was low. Irregular warfare was viewed as 'savage' warfare. Wounded Knee marked the end of the Native American insurgency. The Cuban insurgents fighting Spain were seen as romantic but disorganized rebels. The 'Partisan' had no strategic doctrine in the West.",
        "key_manifestations": [
          "Wounded Knee (Event)",
          "Cuban Insurgency (Event)",
          "The Sign of Four (Colonial blowback)",
          "Canudos War in Brazil (Messianic revolt)"
        ]
      },
      "1891": {
        "variance_explained": 2.0,
        "description": "Stasis. The Chilean Civil War saw some irregulars, but was mostly conventional. In the Philippines, the Katipunan (secret society) was forming, laying the groundwork for the first Asian anti-colonial revolution.",
        "key_manifestations": [
          "Formation of Katipunan (Secret Event)",
          "Chilean Civil War (Event)",
          "Kipling's Light That Failed (Imperial view)",
          "Sherlock Holmes (Urban crime vs police)"
        ]
      },
      "1892": {
        "variance_explained": 2.2,
        "description": "The Homestead Strike (+0.2%). Industrial warfare in the US. Strikers vs Pinkertons. A form of urban irregular warfare. The 'Commando' concept was absent, but the 'mob' was active. In Dahomey, the French fought 'Amazons'\u2014irregular female warriors.",
        "key_manifestations": [
          "Homestead Strike (Event)",
          "Dahomey War (Event)",
          "Ravachol Bombings (Anarchist terror)",
          "Germinal (Book)"
        ]
      },
      "1893": {
        "variance_explained": 2.5,
        "description": "Matabele War (+0.3%). The Ndebele used guerrilla tactics after the initial defeat. The 'Patrol' became the unit of counter-insurgency. The Shangani Patrol was wiped out\u2014the myth of the 'Last Stand' (Regulars) vs the 'Swarm' (Irregulars).",
        "key_manifestations": [
          "Shangani Patrol (Event)",
          "Brazilian Naval Revolt (Civil conflict)",
          "Turner's Frontier Thesis (The pioneer as irregular)",
          "Dvorak (Cultural)"
        ]
      },
      "1894": {
        "variance_explained": 2.8,
        "description": "Korean Peasant Revolt (+0.3%). Donghak Rebellion. A massive peasant army. It triggered the Sino-Japanese War. It showed that peasant organization could destabilize empires. The 'Bandit' was political.",
        "key_manifestations": [
          "Donghak Rebellion (Event)",
          "Dreyfus Affair (State vs Individual)",
          "Jungle Book (Law of the jungle)",
          "Sino-Japanese War (Conventional)"
        ]
      },
      "1895": {
        "variance_explained": 3.5,
        "description": "Cuban War of Independence (+0.7%). Maximo Gomez. The 'Machete Charge.' He destroyed the sugar economy to break Spain. 'Dynamite and Machete.' The first modern 'Total' insurgency targeting the economic base. Spain responded with concentration camps (Cluster 7).",
        "key_manifestations": [
          "Grito de Baire (Event)",
          "Gomez's invasion of the West (Campaign)",
          "Time Machine (Book)",
          "Reconcentrados (Counter-insurgency)"
        ]
      },
      "1896": {
        "variance_explained": 4.0,
        "description": "Philippines Revolution (+0.5%). The Katipunan rose. Asymmetric war against Spain. Aguinaldo. In Ethiopia, the Battle of Adwa was a national mobilization (Shoa levy) defeating a modern army. The 'People in Arms' worked.",
        "key_manifestations": [
          "Philippine Revolution begins (Event)",
          "Battle of Adwa (Event)",
          "Island of Dr. Moreau (Book)",
          "Rizal execution (Martyrdom)"
        ]
      },
      "1897": {
        "variance_explained": 4.2,
        "description": "Canudos (+0.2%). Brazil. Conselheiro's religious commune fought off three army expeditions. They fought to the last man. It was a 'Masada' style resistance. Euclid da Cunha's *Os Sert\u00f5es* immortalized it. The fanatic partisan.",
        "key_manifestations": [
          "War of Canudos (Event)",
          "Dracula (Invasion)",
          "Greco-Turkish War (Irregulars)",
          "Diamond Jubilee (Empire)"
        ]
      },
      "1898": {
        "variance_explained": 4.5,
        "description": "Spanish-American War (+0.3%). The US allied with Cuban/Filipino insurgents, then sidelined them. The 'Rough Riders' adopted the irregular aesthetic (cowboy soldiers). The friction between Regulars and Partisans began immediately.",
        "key_manifestations": [
          "US intervention in Cuba (Event)",
          "Battle of San Juan Hill (Event)",
          "War of the Worlds (Partisan resistance futile against Martians)",
          "Fashoda (Event)"
        ]
      },
      "1899": {
        "variance_explained": 6.0,
        "description": "Boer War (+1.5%). The Commando. The turning point. After the conventional armies were defeated, the Boers dispersed. 'Bittereinders.' They lived off the land, struck rail lines, and vanished. They humiliated the British Army. The 'Mauser' became the symbol of the free man. Philippine-American War shifted to guerrilla phase.",
        "key_manifestations": [
          "Boer transition to guerrilla war (Event)",
          "Philippine insurgency begins (Event)",
          "Heart of Darkness (Book)",
          "Hague Convention (Francs-tireurs debated)"
        ]
      },
      "1900": {
        "variance_explained": 7.0,
        "description": "Boxer Rebellion (+1.0%). An urban/rural insurgency sanctioned by the state. Magic rituals (invulnerability). It terrified the West. The 'Partisan' as a force of chaos. In South Africa, De Wet's raids became legendary. The 'hunt' for the guerrilla.",
        "key_manifestations": [
          "Boxer Rebellion (Event)",
          "De Wet's raids (Event)",
          "Lord Jim (Book)",
          "Relief of Mafeking (Event)"
        ]
      },
      "1901": {
        "variance_explained": 7.5,
        "description": "Aguinaldo Captured (+0.5%). US Special Forces operation (Funston) used deception (Macabebe Scouts) to capture the leader. 'Decapitation' strategy. It worked temporarily. The Boer War ground on\u2014blockhouses vs commandos.",
        "key_manifestations": [
          "Capture of Aguinaldo (Event)",
          "Blockhouse system (Counter-insurgency)",
          "Kim (The spy as partisan)",
          "Nobel Prizes (Event)"
        ]
      },
      "1902": {
        "variance_explained": 7.5,
        "description": "End of Boer War (+0.0%). The Commando was beaten by starvation (Cluster 23), not battle. The lesson: The Partisan cannot win without outside support or a safe haven. Smuts (Boer General) wrote *Century of Wrong*\u2014the intellectualization of the resistance.",
        "key_manifestations": [
          "Treaty of Vereeniging (Event)",
          "Hobson's Imperialism (Book)",
          "Heart of Darkness (Book)",
          "Macedonian Struggle begins (Komitadjis)"
        ]
      },
      "1903": {
        "variance_explained": 8.0,
        "description": "Ilinden Uprising (+0.5%). Macedonia. The IMRO (Internal Macedonian Revolutionary Organization). 'Freedom or Death.' A structured, secret revolutionary state within the Ottoman Empire. The prototype of the IRA/PLO. Bombings and assassinations.",
        "key_manifestations": [
          "Ilinden Uprising (Event)",
          "Riddle of the Sands (Book)",
          "Call of the Wild (Book)",
          "Pogroms (Mob violence)"
        ]
      },
      "1904": {
        "variance_explained": 8.5,
        "description": "Herero War (+0.5%). The Herero fought a mobile war against Germans. They were driven into the desert. It showed the vulnerability of tribal partisans to total annihilation tactics. In Russia, the SR (Social Revolutionary) Combat Organization assassinated Plehve\u2014urban partisan terror.",
        "key_manifestations": [
          "Herero War (Event)",
          "Assassination of Plehve (Event)",
          "Nostromo (Book)",
          "Peter Pan (Play)"
        ]
      },
      "1905": {
        "variance_explained": 10.0,
        "description": "Russian Revolution of 1905 (+1.5%). The Barricade. Urban partisan warfare in Moscow/Presnya. Lenin studied this. 'Partisan Warfare' (1906 article). He argued that terror/guerrilla acts were legitimate tools of the proletariat. The theory was forming.",
        "key_manifestations": [
          "Moscow Uprising (Event)",
          "Lenin's writings on guerrilla war (Intellectual Event)",
          "Potemkin Mutiny (Event)",
          "Einstein (Science)"
        ]
      },
      "1906": {
        "variance_explained": 10.0,
        "description": "Stasis. The suppression of the 1905 revolt. The 'Forest Brethren' in the Baltics fought on. The Tiflis Bank Robbery (1907 planning) showed the 'Partisan-Gangster' nexus.",
        "key_manifestations": [
          "Baltic guerrilla suppression (Event)",
          "The Jungle (Book)",
          "San Francisco Earthquake (Event)",
          "Fallieres Decree (Event)"
        ]
      },
      "1907": {
        "variance_explained": 10.5,
        "description": "Sinn Fein (+0.5%). The political wing formed. The concept of a 'Parallel State' in Ireland. Not yet war, but the infrastructure of resistance. In India, the bomb cult in Bengal.",
        "key_manifestations": [
          "Sinn Fein growth (Event)",
          "Secret Agent (Book - anarchy)",
          "Picasso (Art)",
          "Hague Convention (Francs-tireurs rules)"
        ]
      },
      "1908": {
        "variance_explained": 11.0,
        "description": "Young Turks (+0.5%). Enver Pasha. He took to the hills (resna) as a partisan to force the constitution. The 'Freedom Fighter' in the mountains. It succeeded. The partisan tactic used for a coup.",
        "key_manifestations": [
          "Young Turk Revolution (Event)",
          "War in the Air (Book)",
          "Scouting for Boys (Book)",
          "Bosnian Crisis (Event)"
        ]
      },
      "1909": {
        "variance_explained": 11.5,
        "description": "Barcelona Tragic Week (+0.5%). Anarchist urban insurrection. Burning convents. The 'Mob' as a political force. It was crushed, but the memory fueled the CNT (Anarchist union).",
        "key_manifestations": [
          "Tragic Week (Event)",
          "Futurist Manifesto (Art)",
          "Machine Stops (Story)",
          "Bleriot (Event)"
        ]
      },
      "1910": {
        "variance_explained": 13.0,
        "description": "Mexican Revolution (+1.5%). Villa and Zapata. The Peasant Partisan. 'Land and Liberty.' They fought the Federales using trains and cavalry. A true social revolution driven by irregulars. It captured the world's imagination (John Reed).",
        "key_manifestations": [
          "Mexican Revolution begins (Event)",
          "Plan of San Luis Potosi (Manifesto)",
          "Great Illusion (Book)",
          "Howards End (Book)"
        ]
      },
      "1911": {
        "variance_explained": 13.5,
        "description": "Chinese Revolution (+0.5%). The Wuchang Uprising. Secret societies and army mutineers. The Qing dynasty fell to a decentralized insurgency. The 'Warlord' era began\u2014the partisan becoming the ruler.",
        "key_manifestations": [
          "Wuchang Uprising (Event)",
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Taylorism (Event)"
        ]
      },
      "1912": {
        "variance_explained": 14.0,
        "description": "Balkan Wars (+0.5%). Irregulars (Komitadjis) screened the armies and committed atrocities. The 'Chetnik' tradition in Serbia. Partisan warfare as ethnic cleansing.",
        "key_manifestations": [
          "Balkan Wars (Event)",
          "Titanic (Event)",
          "Lost World (Book)",
          "Jung (Psychology)"
        ]
      },
      "1913": {
        "variance_explained": 15.0,
        "description": "Irish Volunteers (+1.0%). Formed in response to the UVF. A citizens' army. 'Defense of the Realm.' They drilled openly. The gun entered Irish politics. The paramilitaries outnumbered the police.",
        "key_manifestations": [
          "Irish Volunteers formed (Event)",
          "Rite of Spring (Cultural)",
          "Zabern Affair (Event)",
          "Sons and Lovers (Book)"
        ]
      },
      "1914": {
        "variance_explained": 12.0,
        "description": "The Franc-Tireur Scare (-3.0%). Germany invaded Belgium. They panicked about 'snipers' (Francs-tireurs). Executed civilians. The 'Partisan' was demonized as a war criminal by the Germans, and lionized as a martyr by the Allies. The Great War suppressed the irregular in favor of the industrial.",
        "key_manifestations": [
          "Franc-Tireur executions (Event)",
          "Rape of Belgium (Event)",
          "Christmas Truce (Event)",
          "39 Steps (Book)"
        ]
      },
      "1915": {
        "variance_explained": 12.0,
        "description": "Stasis. Senussi Revolt in Libya. The British fought Bedouin irregulars in the desert. Light cars vs camels. A precursor to the SAS. The stalemate in Europe forced thinkers to look for 'flanks'\u2014often involving tribal insurgents.",
        "key_manifestations": [
          "Senussi Campaign (Event)",
          "Gallipoli (Event)",
          "The Rainbow (Book)",
          "Birth of a Nation (Film)"
        ]
      },
      "1916": {
        "variance_explained": 20.0,
        "description": "Arab Revolt and Easter Rising (+8.0%). 1. T.E. Lawrence. He articulated the strategy: 'The Printing Press is the greatest weapon.' Attacks on the Hejaz Railway. Avoiding battle. 2. Easter Rising. Urban insurgency. Failed tactically, but the execution of leaders created the myth. The 'Partisan' became the soul of the nation.",
        "key_manifestations": [
          "Arab Revolt begins (Event)",
          "Easter Rising (Event)",
          "Lawrence's 27 Articles (Doctrine)",
          "Somme (Contrast of industrial war)"
        ]
      },
      "1917": {
        "variance_explained": 22.0,
        "description": "Russian Civil War (+2.0%). The Green Armies (Peasants) and Makhno's Black Army (Anarchists). Partisan warfare on a massive scale. The 'Tachanka' (machine gun cart). Partisans fighting both Red and White. The chaos of the collapsed state.",
        "key_manifestations": [
          "Formation of Makhno's Army (Event)",
          "Russian Civil War (Event)",
          "Balfour Declaration (Event)",
          "Zimmerman Telegram (Event)"
        ]
      },
      "1918": {
        "variance_explained": 25.0,
        "description": "Lawrence in Damascus (+3.0%). The irregulars entered the city before the British Army. The political triumph of the partisan. But they were betrayed by Sykes-Picot. The 'Myth' of the betrayal fueled future insurgencies. Germany collapsed; the Freikorps (counter-revolutionary partisans) formed.",
        "key_manifestations": [
          "Fall of Damascus (Event)",
          "Freikorps formation (Event)",
          "Armistice (Event)",
          "Decline of the West (Book)"
        ]
      },
      "1919": {
        "variance_explained": 30.0,
        "description": "Irish War of Independence (+5.0%). Michael Collins. The Squad. Systematic assassination of British intelligence (Cairo Gang). The 'Flying Column' in the countryside. It worked. It paralyzed the administration. The first successful modern anti-colonial insurgency.",
        "key_manifestations": [
          "Soloheadbeg Ambush (Event)",
          "The Squad formed (Event)",
          "Amritsar Massacre (Event)",
          "Versailles (Event)"
        ]
      },
      "1920": {
        "variance_explained": 35.0,
        "description": "Bloody Sunday and Iraq (+5.0%). Dublin: The Squad killed 14 agents; Black and Tans fired on a football crowd. The moral victory of the partisan. Iraq: Tribal revolt against the British. Crushed by air power (Cluster 3), but showed the scale of resistance to the Mandates.",
        "key_manifestations": [
          "Bloody Sunday 1920 (Event)",
          "Iraqi Revolt (Event)",
          "Women in Love (Book)",
          "Kapp Putsch (Event)"
        ]
      },
      "1921": {
        "variance_explained": 40.0,
        "description": "Rif War (+5.0%). Abd el-Krim. Morocco. He organized the Berber tribes. Battle of Annual: destroyed the Spanish Army (13,000 dead). The greatest victory of irregulars over Europeans since Adwa. He declared the 'Republic of the Rif.' A modern partisan state.",
        "key_manifestations": [
          "Battle of Annual (Event)",
          "Republic of the Rif declared (Political Event)",
          "Irish Treaty (Success of insurgency)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 40.0,
        "description": "Stasis. Irish Civil War. Partisan vs Partisan. The tragedy of success. Collins killed in an ambush. The tactics of the war of independence turned inward. Mussolini's March on Rome\u2014the partisan (Blackshirt) becoming the dictator.",
        "key_manifestations": [
          "Death of Michael Collins (Event)",
          "March on Rome (Event)",
          "Waste Land (Poem)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 40.0,
        "description": "Stasis. The Rif War continued. France intervened. It took a massive modern army (Petain) to fight the tribes. The 'Partisan' forced the 'Empire' to mobilize fully.",
        "key_manifestations": [
          "French intervention in Rif (Event)",
          "Ruhr Occupation (Passive resistance)",
          "Beer Hall Putsch (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 38.0,
        "description": "Sandino in Nicaragua (-2.0% Rif defeat looming, +Latin America). Sandino began his war against the US Marines. 'The General of Free Men.' The guerrilla in the jungle. The US developed 'Small Wars' doctrine to fight him.",
        "key_manifestations": [
          "Sandino's revolt begins (Event)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)",
          "Dawes Plan (Event)"
        ]
      },
      "1925": {
        "variance_explained": 35.0,
        "description": "Defeat of the Rif (-3.0%). Abd el-Krim surrendered. Technology (Air/Gas) and numbers won. But the cost was high. The lesson: Partisans can be beaten, but only with total effort. Lawrence's *Seven Pillars of Wisdom* (private) began to circulate among the elite.",
        "key_manifestations": [
          "Surrender of Abd el-Krim (Event)",
          "Mein Kampf (Book)",
          "Great Gatsby (Book)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 35.0,
        "description": "Seven Pillars published (+0.0%). The Bible of insurgency. 'Guerrilla war is far more intellectual than a bayonet charge.' Lawrence defined the doctrine: Mobility, Security, Time. It influenced Mao (allegedly).",
        "key_manifestations": [
          "Seven Pillars of Wisdom published (Book)",
          "Sun Also Rises (Book)",
          "Metropolis (Film)",
          "General Strike (Event)"
        ]
      },
      "1927": {
        "variance_explained": 40.0,
        "description": "Mao's Autumn Harvest (+5.0%). The birth of the PLA. Mao rejected the 'Urban Insurrection' (Russian model) for the 'Peasant War.' 'The countryside encircles the city.' The strategic pivot of the cluster. The Partisan found his true base: the peasant.",
        "key_manifestations": [
          "Autumn Harvest Uprising (Event)",
          "Mao's Report on Hunan (Document)",
          "Jazz Singer (Film)",
          "Being and Time (Book)"
        ]
      },
      "1928": {
        "variance_explained": 42.0,
        "description": "Jinggangshan (+2.0%). Mao's base area. He developed the 'Three Rules of Discipline and Eight Points for Attention.' The Partisan must respect the people. 'The people are the water, the soldier is the fish.' Political warfare fused with military.",
        "key_manifestations": [
          "Jinggangshan Base established (Event)",
          "Mao's Discipline Rules (Doctrine)",
          "Lady Chatterley (Book)",
          "Kellogg-Briand (Event)"
        ]
      },
      "1929": {
        "variance_explained": 42.0,
        "description": "Stasis. The Mukhtar Revolt in Libya. Omar Mukhtar led the Bedouin against the Italians. A pure guerrilla war. Graziani responded with barbed wire and camps (Cluster 7). The Partisan vs The Engineer.",
        "key_manifestations": [
          "Libyan Resistance continues (Event)",
          "Wall Street Crash (Event)",
          "All Quiet (Book)",
          "Young Plan (Event)"
        ]
      },
      "1930": {
        "variance_explained": 45.0,
        "description": "Viet Nghe Tinh Soviets (+3.0%). Vietnam. Peasant uprisings against the French. Ho Chi Minh founded the Indochinese Communist Party. The fusion of Nationalism and Communism in the colonial partisan.",
        "key_manifestations": [
          "Nghe Tinh Soviets (Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "Salt March (Non-violent partisan)"
        ]
      },
      "1931": {
        "variance_explained": 48.0,
        "description": "Manchurian Volunteers (+3.0%). Anti-Japanese volunteer armies formed. 'Loyal and Righteous Armies.' The resistance to occupation began immediately. It tied down Japanese troops. The 'Protracted War' began.",
        "key_manifestations": [
          "Anti-Japanese Volunteer Armies (Event)",
          "Mukden Incident (Event)",
          "M (Film)",
          "Empire State Building (Event)"
        ]
      },
      "1932": {
        "variance_explained": 48.0,
        "description": "Stasis. Capture of Omar Mukhtar. The Italians hanged him. The resistance in Libya crushed by genocide. It showed that Partisans could be defeated by utter ruthlessness (Cluster 13).",
        "key_manifestations": [
          "Execution of Omar Mukhtar (Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Event)",
          "Bonus Army (Event)"
        ]
      },
      "1933": {
        "variance_explained": 48.0,
        "description": "Stasis. Sandino signed a peace deal, then was assassinated (1934). The Marine occupation ended, but the proxy (Somoza) took over. The limits of the partisan: winning the war but losing the peace.",
        "key_manifestations": [
          "US withdraws from Nicaragua (Event)",
          "King Kong (Film)",
          "Hitler Chancellor (Event)",
          "Reichstag Fire (Event)"
        ]
      },
      "1934": {
        "variance_explained": 55.0,
        "description": "The Long March (+7.0%). The CCP broke out of the KMT encirclement. 6,000 miles. A strategic retreat that became a founding myth. 'The Manifesto of the Agitator.' It spread the seed of the revolution across China. Survival *was* victory.",
        "key_manifestations": [
          "Long March begins (Event)",
          "Tsunyi Conference (Mao takes power)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 55.0,
        "description": "Stasis. Ethiopian Resistance. After the conventional defeat, the 'Patriots' (Arbegnoch) fought on. They harassed the Italians until 1941. The war didn't end with the fall of Addis Ababa.",
        "key_manifestations": [
          "Ethiopian Patriot movement (Event)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Event)",
          "Abyssinian Crisis (Event)"
        ]
      },
      "1936": {
        "variance_explained": 60.0,
        "description": "Spanish Civil War (+5.0%). The 'Maquis.' The Republic armed the unions. Urban warfare in Madrid. The 'Fifth Column' phrase coined (Mola). The fear of the internal partisan. Hemingway and Orwell validated the partisan for the West.",
        "key_manifestations": [
          "Siege of Madrid (Event)",
          "Fifth Column concept (Intellectual Event)",
          "General Theory (Book)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 65.0,
        "description": "On Protracted War (+5.0%). Mao wrote his treatise. The bible of modern insurgency. Three stages: Defensive, Stalemate, Counter-Offensive. 'The enemy advances, we retreat.' It intellectualized the Long March experience.",
        "key_manifestations": [
          "On Protracted War published (Doctrine)",
          "Guernica (Event)",
          "Rape of Nanking (Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 65.0,
        "description": "Stasis. Arab Revolt in Palestine suppressed. The British used 'Night Squads' (Wingate)\u2014counter-gangs. Jewish settlers learned counter-insurgency. The laboratory of the Middle East.",
        "key_manifestations": [
          "Wingate's Night Squads (Event)",
          "Munich Crisis (Event)",
          "Nausea (Book)",
          "Kristallnacht (Event)"
        ]
      },
      "1939": {
        "variance_explained": 65.0,
        "description": "Polish Resistance (+0.0%). The 'Polish Underground State.' Formed immediately after defeat. The most sophisticated resistance in Europe. Courts, schools, army. A state in waiting. The Partisan as Administrator.",
        "key_manifestations": [
          "Polish Underground State formed (Institutional Event)",
          "Winter War (Finnish 'Motti' tactics - semi-partisan)",
          "Grapes of Wrath (Book)",
          "Invasion of Poland (Event)"
        ]
      },
      "1940": {
        "variance_explained": 70.0,
        "description": "SOE Formed (+5.0%). Churchill: 'Set Europe Ablaze.' The state institutionalized the partisan. The Special Operations Executive. Training guerrillas. Resistance was no longer spontaneous; it was a department of war.",
        "key_manifestations": [
          "SOE formed (Institutional Event)",
          "French Resistance begins (Event)",
          "Great Dictator (Film)",
          "Fall of France (Event)"
        ]
      },
      "1941": {
        "variance_explained": 80.0,
        "description": "The Great Patriotic War (+10.0%). Stalin called for partisans. 'Burn the forests.' Yugoslavia: Tito's Partisans formed. The most effective resistance in Europe. They held down German divisions. The Partisan became a strategic necessity.",
        "key_manifestations": [
          "Stalin's Partisan Order (Event)",
          "Tito's Uprising (Event)",
          "Pearl Harbor (Event)",
          "Operation Barbarossa (Event)"
        ]
      },
      "1942": {
        "variance_explained": 85.0,
        "description": "The Maquis (+5.0%). Forced labor (STO) in France drove young men into the woods. The Maquis formed. Resistance shifted from intel to armed struggle. In the East, the Partisans controlled vast areas ('Partisan Republics') behind German lines.",
        "key_manifestations": [
          "Formation of Maquis (Event)",
          "Soviet Partisan Republics (Event)",
          "Wannsee Conference (Event)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 90.0,
        "description": "Warsaw Ghetto (+5.0%). The Jewish Fighting Organization. Resistance as an act of dignity, not victory. 'To die with a gun in hand.' In Yugoslavia, the Allies switched support from Chetniks (Royalist) to Partisans (Communist). Effectiveness trumped ideology.",
        "key_manifestations": [
          "Warsaw Ghetto Uprising (Event)",
          "Tehran Conference (Recognizing Tito)",
          "Oklahoma! (Musical)",
          "Fall of Mussolini (Partisan resurgence)"
        ]
      },
      "1944": {
        "variance_explained": 95.0,
        "description": "Warsaw Uprising and FFI (+5.0%). The Home Army rose in Warsaw. Stalin let them die. The tragic limits of the partisan without regular support. In France, the FFI (Forces of the Interior) liberated Paris. The Myth of the Resistance became the foundation of post-war legitimacy.",
        "key_manifestations": [
          "Warsaw Uprising (Event)",
          "Liberation of Paris (Event)",
          "Jedburgh Teams (SOE/OSS linkage)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 95.0,
        "description": "Viet Minh (+0.0%). Ho Chi Minh declared independence. The Partisan war shifted instantly from Anti-Fascist to Anti-Colonial. The weapons dropped for the Resistance were turned on the Empires. The 'People's War' went global.",
        "key_manifestations": [
          "Vietnam Declaration (Event)",
          "Indonesian Revolution (Event)",
          "Hiroshima (The counter-weapon)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 90.0,
        "description": "The Greek Civil War (-5.0%). Partisan vs Partisan. Communist (ELAS) vs Government. The Truman Doctrine was a response to this. The Partisan was now the 'Communist Threat.' The Myth fractured along Cold War lines.",
        "key_manifestations": [
          "Greek Civil War (Event)",
          "King David Hotel Bombing (Zionist partisan terror)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain (Event)"
        ]
      },
      "1947": {
        "variance_explained": 88.0,
        "description": "First Indochina War (-2.0%). The Viet Minh retreated to the jungle. The 'Tiger vs Elephant' strategy. Giap. The French (Elephant) could not crush the Tiger. The colonial war became a revolutionary war.",
        "key_manifestations": [
          "Operation Lea (French attempt to catch Ho)",
          "Partition of India (Communal militias)",
          "Streetcar Named Desire (Play)",
          "Truman Doctrine (Event)"
        ]
      },
      "1948": {
        "variance_explained": 88.0,
        "description": "Malaya and Israel (+0.0%). 1. Malayan Emergency. The British branded them 'Communist Terrorists' (CTs). 2. Israel. The Haganah/Irgun became the IDF. The Partisan became the State. The 'Sabra' myth.",
        "key_manifestations": [
          "Malayan Emergency (Event)",
          "Israeli Independence (Event)",
          "Naked and the Dead (Book)",
          "Murder of Bernadotte (Terror)"
        ]
      },
      "1949": {
        "variance_explained": 95.0,
        "description": "Mao's Victory (+7.0%). The greatest victory of the cluster. The Peasant Army took Beijing. It validated 'People's War' as the supreme strategy for the Third World. It terrified the West. 'Who lost China?'",
        "key_manifestations": [
          "PRC proclaimed (Event)",
          "1984 (Book)",
          "Soviet Bomb (Event)",
          "NATO (Event)"
        ]
      },
      "1950": {
        "variance_explained": 90.0,
        "description": "Korea and the Huks (-5.0%). Korean partisans in the South. Hukbalahap in Philippines. The US developed 'Counter-Insurgency' (Lansdale). The battle for 'Hearts and Minds' began. The Partisan was the central figure of the Asian Cold War.",
        "key_manifestations": [
          "Hukbalahap Rebellion (Event)",
          "Korean War Partisans (Event)",
          "Lonely Crowd (Book)",
          "McCarthyism (Fear of the internal enemy)"
        ]
      }
    }
  },
  "16_humanitarian_legal_constraint": {
    "name": "Humanitarian Legal Constraint (The Paper Shield)",
    "description": "This eigencluster represents the attempt to subordinate war to law. It tracks the evolution of the Hague and Geneva Conventions, the definition of 'War Crimes,' and the concept of 'Human Rights' in conflict. It exists in constant tension with the 'Total War' clusters. It is the trajectory of the 'civilizing' impulse, moving from protecting soldiers (1864/1906) to protecting POWs (1929) to protecting civilians (1949).",
    "trajectory": {
      "1890": {
        "variance_explained": 4.0,
        "description": "The decade opens with a strong, if elite, belief in the 'Progress of Civilization.' The International Peace Congresses began to regularize. The moral variance was driven by the contrast between the perceived savagery of colonial wars and the 'gentlemanly' expectations of European conflict.",
        "key_manifestations": [
          "Universal Peace Congress in London (Event)",
          "Sherman Antitrust Act (Domestic law curbing power)",
          "Publication of 'The Kreutzer Sonata' (Moral critique)",
          "Formation of the Pan-American Union (Arbitration focus)"
        ]
      },
      "1891": {
        "variance_explained": 4.2,
        "description": "The Bureau international de la paix (International Peace Bureau) was founded in Bern (+0.2%). A permanent institution to coordinate the legalist approach to war. The concept of 'Arbitration' was the watchword\u2014replacing the battlefield with the courtroom.",
        "key_manifestations": [
          "Founding of the International Peace Bureau (Institutional Event)",
          "Rome Peace Congress (Event)",
          "Encyclical Rerum Novarum (Catholic moral constraint)",
          "Tess of the d'Urbervilles (Critique of social injustice)"
        ]
      },
      "1892": {
        "variance_explained": 4.3,
        "description": "Stasis (+0.1%). The Institute of International Law met in Geneva to codify the laws of war. The focus was on the treatment of the wounded and the neutrality of medical staff. The 'Red Cross' ideal was becoming a state obligation, not just a charity.",
        "key_manifestations": [
          "Institute of International Law session (Legal Event)",
          "Bertha von Suttner's activism (Cultural Event)",
          "Cholera response (International cooperation)",
          "The Baroness von Suttner's Die Waffen nieder! (Impact continues)"
        ]
      },
      "1893": {
        "variance_explained": 4.5,
        "description": "The Behring Sea Arbitration (+0.2%). A dispute between the US and UK over seal hunting was settled by a tribunal, not war. This was hailed as proof that the 'Legal Constraint' model worked for Great Powers. It fueled the optimism that a permanent court could end war.",
        "key_manifestations": [
          "Behring Sea Arbitration award (Legal Event)",
          "Chicago World's Fair Peace Congress (Event)",
          "Tolstoy's The Kingdom of God is Within You (Christian Anarchist pacifism)",
          "Franco-Russian Alliance (The counter-force of secret treaties)"
        ]
      },
      "1894": {
        "variance_explained": 4.0,
        "description": "The Sino-Japanese War (-0.5%). The Port Arthur massacre occurred, where Japanese troops killed Chinese civilians/POWs. Western observers were shocked, but the legal framework had no mechanism to punish it. It highlighted the gap between 'Civilized' and 'Uncivilized' warfare in the legal mind.",
        "key_manifestations": [
          "Port Arthur Massacre (Event)",
          "Dreyfus Affair begins (Internal failure of justice)",
          "Tolstoy's ongoing writings (Moral witness)",
          "Red Cross activities in Manchuria (Humanitarian presence)"
        ]
      },
      "1895": {
        "variance_explained": 4.2,
        "description": "Nobel's Will signed (+0.2%). Alfred Nobel established the Peace Prize. This institutionalized the reward for 'Humanitarian Constraint.' It created a secular sainthood for peacemakers. The Cuban War of Independence began, and the 'Reconcentrado' camps violated the emerging norms of civilian protection.",
        "key_manifestations": [
          "Alfred Nobel signs his will (Institutional Event)",
          "Cuban 'Reconcentrado' orders (Violation of norms)",
          "Arbitration of the Venezuelan crisis (US/UK legal settlement)",
          "The Red Badge of Courage (De-romanticizing combat)"
        ]
      },
      "1896": {
        "variance_explained": 4.5,
        "description": "International arbitration of the Venezuela Crisis concluded (+0.3%). The UK accepted US mediation. It reinforced the 'Monroe Doctrine' but through legalistic channels. The 'Legal Constraint' prevented a war between the US and Britain.",
        "key_manifestations": [
          "Venezuela Arbitration Treaty (Legal Event)",
          "Battle of Adwa (Treatment of Italian prisoners)",
          "Olympics revived (Internationalism via sport)",
          "Island of Dr. Moreau (Ethics of science)"
        ]
      },
      "1897": {
        "variance_explained": 4.8,
        "description": "Stasis (+0.3%). The buildup to the Hague. The Tsar's ministers began drafting the rescript for a peace conference. The motivation was economic (cost of arms), but the language was humanitarian. The 'Dum-Dum' bullet controversy began\u2014a debate on the cruelty of specific weapons.",
        "key_manifestations": [
          "Muraviev's circular (Diplomatic Event)",
          "Dum-Dum bullet debate (Tech/Legal)",
          "Greco-Turkish War (Red Cross intervention)",
          "Dracula (The need for collective defense)"
        ]
      },
      "1898": {
        "variance_explained": 5.0,
        "description": "The Tsar's Rescript (+0.2%). Nicholas II officially called for a conference to limit armaments and humanize war. It was greeted with cynicism by cabinets but rapture by the public. The Spanish-American war was fought with a degree of 'chivalry' at sea (rescuing sailors), reinforcing the idea that war could be regulated.",
        "key_manifestations": [
          "Tsar's Rescript (Diplomatic Event)",
          "Spanish-American War conduct (Event)",
          "Zola's J'Accuse (The fight for legal truth)",
          "Fashoda Incident (Resolved diplomatically)"
        ]
      },
      "1899": {
        "variance_explained": 7.0,
        "description": "First Hague Conference (+2.0%). The peak of the pre-war legal cluster. 26 nations met. They banned expanding bullets (Dum-Dums), poison gas (asphyxiating shells), and balloon bombing. They established the Permanent Court of Arbitration. It created the 'Laws of War' as a codified text.",
        "key_manifestations": [
          "Hague Convention 1899 (Legal Event)",
          "Martens Clause (The 'laws of humanity')",
          "Establishment of the Permanent Court of Arbitration (Institution)",
          "The White Man's Burden (The moral cloak of empire)"
        ]
      },
      "1900": {
        "variance_explained": 6.5,
        "description": "Boxer Rebellion and Boer War (-0.5%). The legal shield failed. In China, the Eight Nation Alliance suspended the laws of war against the 'barbarian' Boxers (looting/execution). In South Africa, the 'Concentration Camps' targeted civilians, technically legal under martial law but morally repugnant. The gap between Hague theory and Imperial practice widened.",
        "key_manifestations": [
          "Boxer Protocol executions (Event)",
          "Boer War Concentration Camps (Policy)",
          "Lord Jim (Moral failure)",
          "Freud's Interpretation of Dreams (The subconscious violence)"
        ]
      },
      "1901": {
        "variance_explained": 6.0,
        "description": "The Hobhouse Report (-0.5%). Emily Hobhouse exposed the camp conditions. The British government was forced to respond, not by law, but by shame. The first Nobel Peace Prize was awarded (Passy/Dunant), keeping the ideal alive amidst the squalor of the guerrilla war.",
        "key_manifestations": [
          "Hobhouse Report (Political Event)",
          "First Nobel Peace Prize (Event)",
          "Insular Cases (US limiting rights in colonies)",
          "Kim (The game without rules)"
        ]
      },
      "1902": {
        "variance_explained": 6.5,
        "description": "End of Boer War (+0.5%). The Treaty of Vereeniging. A negotiated peace, not a total annihilation. It showed that legal settlements were still the exit strategy. The 'Drago Doctrine' was proposed\u2014forbidding armed force to collect sovereign debt (reaction to Venezuela blockade).",
        "key_manifestations": [
          "Treaty of Vereeniging (Event)",
          "Drago Doctrine (Legal Concept)",
          "Heart of Darkness (The horror of lawlessness)",
          "Hobson's Imperialism (Critique of the war motive)"
        ]
      },
      "1903": {
        "variance_explained": 6.5,
        "description": "Stasis. The Pogroms in Kishinev shocked the West. The lack of legal protection for minorities in Russia was condemned. Humanitarian intervention was discussed but not acted upon. The concept of 'Human Rights' was nascent but had no enforcement mechanism.",
        "key_manifestations": [
          "Kishinev Pogrom condemnation (Diplomatic Event)",
          "The Riddle of the Sands (Spying as duty)",
          "Call of the Wild (Natural law)",
          "Panama Independence (US legal maneuvering)"
        ]
      },
      "1904": {
        "variance_explained": 6.0,
        "description": "Russo-Japanese War (-0.5%). Both sides claimed to follow the Hague. Japan treated POWs well to prove it was 'civilized.' However, the use of mines in the open sea (by Russia) violated the spirit of the law, threatening neutrals. The 'Dogger Bank Incident' (Russians shot British fishermen) was settled by arbitration, preventing war.",
        "key_manifestations": [
          "Dogger Bank Arbitration (Legal Event)",
          "Japanese POW treatment (Policy)",
          "Sea mine controversy (Tech/Legal)",
          "Nostromo (Lawlessness in the colonies)"
        ]
      },
      "1905": {
        "variance_explained": 6.5,
        "description": "Treaty of Portsmouth (+0.5%). Mediated by Theodore Roosevelt. The first major war ended by third-party arbitration (US). It validated the role of the 'Neutral Peacemaker.' The Red Cross gained prestige for its work in Manchuria.",
        "key_manifestations": [
          "Treaty of Portsmouth (Diplomatic Event)",
          "Bertha von Suttner wins Nobel Peace Prize (Event)",
          "Red Cross Reports (Humanitarian)",
          "separation of Church and State in France (Secular law)"
        ]
      },
      "1906": {
        "variance_explained": 7.0,
        "description": "Geneva Convention Update (+0.5%). The 1864 convention was revised to include maritime warfare. The protection of the 'Hospital Ship.' It expanded the zone of immunity. Algeciras Conference settled the Morocco crisis via treaty, postponing war.",
        "key_manifestations": [
          "Geneva Convention 1906 (Legal Event)",
          "Algeciras Conference (Diplomatic Event)",
          "The Jungle (Domestic regulatory law)",
          "Launch of Dreadnought (The threat to law)"
        ]
      },
      "1907": {
        "variance_explained": 7.5,
        "description": "Second Hague Conference (+0.5%). The 'Laws of War' codified. Hague IV. Definition of 'Belligerent.' Protection of POWs. Prohibition of bombardment of undefended towns. It created the legal fiction that war could be a duel between armies, leaving civilians untouched.",
        "key_manifestations": [
          "Hague Convention 1907 (Legal Event)",
          "Establishment of International Prize Court (failed ratification)",
          "The Secret Agent (Terrorism outside law)",
          "Triple Entente (Alliance vs Law)"
        ]
      },
      "1908": {
        "variance_explained": 7.0,
        "description": "Bosnian Crisis (-0.5%). Austria annexed Bosnia, violating the Treaty of Berlin. 'Paper Treaties' were shown to be unenforceable against Great Power will. The 'Young Turk' revolution promised constitutional rule but led to ethnic nationalism.",
        "key_manifestations": [
          "Bosnian Annexation (Violation of Law)",
          "Young Turk Revolution (Constitutionalism)",
          "War in the Air (Prediction of total war)",
          "Scouting for Boys (Chivalry)"
        ]
      },
      "1909": {
        "variance_explained": 7.5,
        "description": "Declaration of London (+0.5%). An attempt to define 'Contraband' and 'Blockade.' It tried to protect neutral trade (food). It was the high point of maritime legalism. However, it was never fully ratified by the UK House of Lords, who wanted the freedom to blockade.",
        "key_manifestations": [
          "Declaration of London (Diplomatic Event)",
          "The Machine Stops (Technological dependency)",
          "Futurist Manifesto (Rejection of history/law)",
          "Angell's Europe's Optical Illusion (Rationality)"
        ]
      },
      "1910": {
        "variance_explained": 7.8,
        "description": "Angell's *The Great Illusion* (+0.3%). The intellectual peak of the cluster. The argument that war was economically irrational and therefore obsolete. It created a false sense of security that 'Law and Commerce' had won.",
        "key_manifestations": [
          "The Great Illusion published (Book)",
          "Carnegie Endowment for International Peace founded (Institutional Event)",
          "Mexican Revolution (Breakdown of order)",
          "Howards End (Civilized connection)"
        ]
      },
      "1911": {
        "variance_explained": 7.5,
        "description": "Agadir Crisis (-0.3%). Diplomacy settled it, but barely. Italy invaded Libya, ignoring the Hague rules on declarations of war. The 'Primacy of Law' was eroding. Bombing from the air in Libya violated the spirit of the Hague (balloons).",
        "key_manifestations": [
          "Italian invasion of Libya (Violation)",
          "Agadir resolution (Treaty)",
          "Official Secrets Act (State secrecy)",
          "Triangle Fire (Labor law failure)"
        ]
      },
      "1912": {
        "variance_explained": 7.0,
        "description": "Balkan Wars (-0.5%). Ethnic cleansing. 'Komitadjis' burned villages. The Hague rules were ignored. The Carnegie Endowment sent a commission to investigate atrocities\u2014the birth of human rights fact-finding.",
        "key_manifestations": [
          "Carnegie Commission to the Balkans (Event)",
          "Titanic (Regulation of safety)",
          "Treaty of Ouchy (End of Italo-Turkish war)",
          "The Lost World (Civilization vs Savage)"
        ]
      },
      "1913": {
        "variance_explained": 7.0,
        "description": "Stasis. The Peace Palace opened in The Hague. A cathedral of law. Meanwhile, the arms race accelerated. The disconnect between the 'Legal Shell' and the 'Military Kernel' of Europe was absolute.",
        "key_manifestations": [
          "Opening of the Peace Palace (Event)",
          "Zabern Affair (Military above law)",
          "Rite of Spring (Chaos)",
          "Federal Reserve Act (Financial regulation)"
        ]
      },
      "1914": {
        "variance_explained": 2.0,
        "description": "The Scrap of Paper (-5.0%). Germany violated Belgian neutrality (guaranteed by treaty). The Chancellor called the treaty a 'scrap of paper.' The invasion saw the execution of 6,000 civilians (Francs-tireurs). The entire legal framework of 1899/1907 collapsed in weeks. 'Necessity knows no law.'",
        "key_manifestations": [
          "Rape of Belgium (Event)",
          "Bethmann-Hollweg's 'Scrap of Paper' comment (Event)",
          "Burning of the Library of Leuven (Cultural crime)",
          "Christmas Truce (Moral law vs Military law)"
        ]
      },
      "1915": {
        "variance_explained": 1.5,
        "description": "Total Violation (-0.5%). 1. Gas (Violation of Hague). 2. Lusitania (Attack on civilians). 3. Armenian Genocide (State murder of its own citizens). The law was dead. The Allies used these violations as propaganda ('The Outlaw State'), weaponizing the memory of the law.",
        "key_manifestations": [
          "Use of Gas at Ypres (Violation)",
          "Sinking of Lusitania (Violation)",
          "Armenian Genocide (Crime against humanity)",
          "Bryce Report (Propaganda)"
        ]
      },
      "1916": {
        "variance_explained": 2.0,
        "description": "The Blacklist (+0.5%). The Allies created blacklists of neutral firms trading with Germany. 'Economic Law' replaced 'Cannon Law.' The execution of Roger Casement and Edith Cavell were 'legal' acts that outraged the moral sense. The law became a tool of the state executioner.",
        "key_manifestations": [
          "Execution of Edith Cavell (Legal Event)",
          "Execution of Roger Casement (Legal Event)",
          "Trading with the Enemy Act (Legal Event)",
          "Easter Rising executions (Martial Law)"
        ]
      },
      "1917": {
        "variance_explained": 3.0,
        "description": "Unrestricted Warfare vs The Fourteen Points (+1.0%). Germany abandoned all legal restraint at sea. Wilson entered the war to establish a 'League of Nations'\u2014a new legal order. The conflict was reframed: A war to restore Law. The Bolsheviks published the 'Secret Treaties,' delegitimizing the old diplomacy.",
        "key_manifestations": [
          "Wilson's War Message (Legalist rhetoric)",
          "Publication of Secret Treaties (Transparency)",
          "Unrestricted U-Boat War (Lawlessness)",
          "Balfour Declaration (Promise)"
        ]
      },
      "1918": {
        "variance_explained": 4.0,
        "description": "The Armistice (+1.0%). Germany asked for peace based on the '14 Points' (Legal contract). The Allies accepted but maintained the Blockade (Cluster 23). The 'War Guilt' clause was planned\u2014introducing the concept of criminal liability for starting a war.",
        "key_manifestations": [
          "The 14 Points (Document)",
          "Armistice Agreement (Legal Event)",
          "Kaiser's Abdication (Political consequence)",
          "Spanish Flu (Nature ignoring borders)"
        ]
      },
      "1919": {
        "variance_explained": 10.0,
        "description": "Versailles and the League (+6.0%). The Treaty of Versailles. Article 227 arraigned the Kaiser for 'supreme offense against international morality.' The first attempt at an international war crimes tribunal (failed). The League of Nations Covenant was the new Constitution of the World. Collective Security replaced the Balance of Power.",
        "key_manifestations": [
          "Treaty of Versailles (Legal Event)",
          "League of Nations Covenant (Institutional Event)",
          "Article 231 (War Guilt Clause)",
          "ILO founded (Labor law)"
        ]
      },
      "1920": {
        "variance_explained": 12.0,
        "description": "The Permanent Court of International Justice (+2.0%). Established at The Hague. The 'World Court.' It had jurisdiction over disputes. The US refused to join the League, weakening the legal order, but the structure was in place. The 'Mandate System' tried to legalize colonialism as 'trusteeship.'",
        "key_manifestations": [
          "PCIJ Statute signed (Legal Event)",
          "First League Assembly (Event)",
          "Treaty of Sevres (Partitioning Ottoman Empire)",
          "Kapp Putsch (Failure of law in Germany)"
        ]
      },
      "1921": {
        "variance_explained": 12.5,
        "description": "Leipzig Trials (+0.5%). The Allies allowed Germany to try its own war criminals. It was a farce (light sentences). But it established the principle: individual soldiers are liable for acts of state. The Washington Naval Conference used treaties to limit arms\u2014law controlling physics.",
        "key_manifestations": [
          "Leipzig War Crimes Trials (Legal Event)",
          "Washington Naval Conference (Diplomatic Event)",
          "Sacco and Vanzetti Trial (Legal injustice)",
          "Tractatus (Philosophy of rules)"
        ]
      },
      "1922": {
        "variance_explained": 12.5,
        "description": "Stasis. The Nansen Passport introduced. Legal status for stateless refugees. Humanitarian law adapting to the post-war chaos. The Washington Treaty signed\u2014capital ships scrapped by law.",
        "key_manifestations": [
          "Nansen Passports issued (Humanitarian Event)",
          "Washington Naval Treaty signed (Legal Event)",
          "Mussolini's March on Rome (Challenge to constitutional law)",
          "Ulysses (Banned book - censorship law)"
        ]
      },
      "1923": {
        "variance_explained": 11.0,
        "description": "Corfu Incident (-1.5%). Mussolini bombarded Corfu. The League protested. Mussolini ignored it. The 'Council of Ambassadors' overruled the League. It showed that Great Powers were still above the law. The Ruhr Occupation was 'legal' under Versailles but violated the spirit of peace.",
        "key_manifestations": [
          "Corfu Incident (Event)",
          "Ruhr Occupation (Legal/Military Event)",
          "Draft Treaty of Mutual Assistance (Failed)",
          "Beer Hall Putsch (Trial of Hitler)"
        ]
      },
      "1924": {
        "variance_explained": 12.0,
        "description": "Geneva Protocol (Draft) (+1.0%). Attempt to make arbitration compulsory. 'Aggression' defined as refusal to arbitrate. Britain rejected it. But the 'Dawes Plan' brought economic law to the reparations issue. Legalism was recovering.",
        "key_manifestations": [
          "Geneva Protocol negotiations (Diplomatic Event)",
          "Dawes Plan (Economic Law)",
          "Hitler's Trial (The courtroom as stage)",
          "Magic Mountain (Book)"
        ]
      },
      "1925": {
        "variance_explained": 14.0,
        "description": "Locarno Treaties (+2.0%). Germany guaranteed the western borders. Arbitration treaties signed with neighbors. 'The Spirit of Locarno.' Germany entered the League. It felt like the Law had finally secured the Peace. The Geneva Gas Protocol banned chemical weapons (No First Use).",
        "key_manifestations": [
          "Locarno Treaties (Diplomatic Event)",
          "Geneva Gas Protocol (Legal Event)",
          "Great Gatsby (Lawlessness of the rich)",
          "Trial of Scopes (Science vs Law)"
        ]
      },
      "1926": {
        "variance_explained": 15.0,
        "description": "Germany joins the League (+1.0%). Stresemann and Briand. The rapprochement. The Permanent Court was busy. The Slavery Convention was signed, outlawing the slave trade globally. Humanitarian law expanding.",
        "key_manifestations": [
          "Germany joins League (Event)",
          "Slavery Convention 1926 (Legal Event)",
          "Sun Also Rises (Book)",
          "General Strike (Legality of labor action)"
        ]
      },
      "1927": {
        "variance_explained": 15.5,
        "description": "Stasis. The Nanking Incident in China. Attacks on foreigners. The Great Powers considered intervention but hesitated. The 'Unequal Treaties' were under attack by Chinese nationalism. International Law was seen as a tool of imperialism.",
        "key_manifestations": [
          "Nanking Incident (Event)",
          "Sacco and Vanzetti executed (Legal protest)",
          "The Jazz Singer (Film)",
          "Being and Time (Book)"
        ]
      },
      "1928": {
        "variance_explained": 18.0,
        "description": "Kellogg-Briand Pact (+2.5%). The Pact of Paris. 'The Renunciation of War as an Instrument of National Policy.' Signed by almost everyone. Legally, war was abolished. It lacked enforcement, but it changed the legal status of conquest. A conqueror gained no title.",
        "key_manifestations": [
          "Kellogg-Briand Pact signed (Legal Event)",
          "Red Line Agreement (Commercial Law)",
          "Lady Chatterley's Lover (Obscenity Law)",
          "Threepenny Opera (Criminals as businessmen)"
        ]
      },
      "1929": {
        "variance_explained": 20.0,
        "description": "Geneva Convention 1929 (+2.0%). Treatment of POWs. Detailed rules. Red Cross supervision. It was a triumph of the cluster. It would save millions of Western POWs in WWII (though not Soviets). The 'Young Plan' settled reparations legally.",
        "key_manifestations": [
          "Geneva Convention 1929 (Legal Event)",
          "Young Plan (Economic Event)",
          "All Quiet on the Western Front (Book)",
          "Wall Street Crash (Economic anarchy)"
        ]
      },
      "1930": {
        "variance_explained": 19.0,
        "description": "London Naval Treaty (-1.0% Limits). It limited submarines but allowed 'Prize Rules' (subs must surface). A legal attempt to tame the Wolfpack. It was naive. The Depression began to erode the 'Spirit of Locarno.'",
        "key_manifestations": [
          "London Naval Treaty (Legal Event)",
          "Smoot-Hawley Tariff (Trade War)",
          "Civilization and Its Discontents (Book)",
          "Salt March (Illegal resistance)"
        ]
      },
      "1931": {
        "variance_explained": 15.0,
        "description": "Manchuria (-4.0%). Japan invaded. Violation of League Covenant and Kellogg-Briand. The Lytton Commission investigated (Legal process) but Japan ignored it and quit the League. The 'Paper Shield' was pierced. Collective Security failed its first test.",
        "key_manifestations": [
          "Mukden Incident (Violation)",
          "Statute of Westminster (Legal independence of Dominions)",
          "M (Film - Law vs Crime)",
          "Al Capone convicted (Tax law)"
        ]
      },
      "1932": {
        "variance_explained": 14.0,
        "description": "Disarmament Conference (-1.0%). Geneva. France demanded security; Germany demanded equality. It deadlocked. The legal mechanism for arms control jammed. In the US, the Stimson Doctrine: 'We will not recognize conquests.' Law refusing to acknowledge reality.",
        "key_manifestations": [
          "World Disarmament Conference (Event)",
          "Stimson Doctrine (Legal Policy)",
          "Brave New World (Book)",
          "Chaco War (League failure to stop)"
        ]
      },
      "1933": {
        "variance_explained": 10.0,
        "description": "Hitler leaves the League (-4.0%). Germany withdrew from the Conference and the League. The rejection of the international legal order. The Reichstag Fire Decree suspended civil liberties in Germany. The 'State of Exception' became permanent.",
        "key_manifestations": [
          "Germany quits League (Event)",
          "Reichstag Fire Decree (Legal Event)",
          "Dachau opens (Extra-legal detention)",
          "King Kong (Film)"
        ]
      },
      "1934": {
        "variance_explained": 9.0,
        "description": "Night of the Long Knives (-1.0%). Hitler declared himself the 'Supreme Judge of the German People.' Retroactive legalization of murder. The collapse of the rule of law in Central Europe. The USSR joined the League\u2014a cynical move for security.",
        "key_manifestations": [
          "Law Regarding Measures of State Self-Defense (Legal Event)",
          "USSR joins League (Diplomatic Event)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 5.0,
        "description": "Abyssinia and Nuremberg (-4.0%). 1. Italy invaded Ethiopia. League sanctions failed (oil excluded). The Hoare-Laval Pact tried to sell out Ethiopia. 2. Nuremberg Laws. Race replaced Law as the organizing principle of the state. The legal citizen was destroyed.",
        "key_manifestations": [
          "Nuremberg Laws (Legal Event)",
          "Invasion of Ethiopia (Violation)",
          "Anglo-German Naval Agreement (Bilateralism replacing collective security)",
          "Triumph of the Will (Film)"
        ]
      },
      "1936": {
        "variance_explained": 4.0,
        "description": "Rhineland and Spain (-1.0%). Hitler violated Locarno. France did not sue for enforcement. The Spanish Civil War saw the 'Non-Intervention Committee'\u2014a legal fiction to avoid war, while Germany/Italy intervened. Law became a farce to hide cowardice.",
        "key_manifestations": [
          "Rhineland Remilitarization (Violation)",
          "Non-Intervention Agreement (Diplomatic fiction)",
          "Stalin Constitution (Paper rights)",
          "Moscow Show Trials (Legal theater)"
        ]
      },
      "1937": {
        "variance_explained": 3.0,
        "description": "Nanking and Guernica (-1.0%). Total disregard for the laws of war. Bombing of open towns. Massacre of POWs. The US 'Neutrality Acts' tried to legislate isolation, retreating from the world legal order. The 'Quarantine Speech' called for law, but offered no force.",
        "key_manifestations": [
          "Rape of Nanking (Crime)",
          "Bombing of Guernica (Crime)",
          "US Neutrality Acts (Legal Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 2.0,
        "description": "Munich (-1.0%). The betrayal of Czechoslovakia. A treaty signed under duress. 'Peace for our time.' It showed that International Law was a tool for the strong to dismember the weak. Kristallnacht\u2014state pogrom. The police stood by.",
        "key_manifestations": [
          "Munich Agreement (Diplomatic Event)",
          "Kristallnacht (Crime)",
          "Anschluss (Violation)",
          "Nausea (Book)"
        ]
      },
      "1939": {
        "variance_explained": 1.0,
        "description": "War (-1.0%). Invasion of Poland. Molotov-Ribbentrop Pact (Secret Protocols dividing Europe). The ultimate illegal conspiracy. Britain declared war to uphold a treaty (Poland). The conflict was framed as Law vs Force.",
        "key_manifestations": [
          "Invasion of Poland (Crime)",
          "Molotov-Ribbentrop Pact (Conspiracy)",
          "The Pan-American Neutrality Zone (Legal attempt to fence war)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 1.0,
        "description": "Stasis. Katyn Massacre. Soviets executed Polish officers. A war crime hidden for decades. The 'Kommandobefehl' (later) and other illegal orders began to circulate in the German Army. The SS operated outside all law.",
        "key_manifestations": [
          "Katyn Massacre (Crime)",
          "Havana Conference (Hemispheric defense)",
          "Great Dictator (Film)",
          "Fall of France (Armistice legalism)"
        ]
      },
      "1941": {
        "variance_explained": 2.0,
        "description": "Atlantic Charter (+1.0%). FDR and Churchill. Not a treaty, but a statement of principles. Self-determination, no aggrandizement. The seed of the UN. Barbarossa saw the 'Commissar Order'\u2014illegal execution of prisoners. The war in the East was 'criminal' by design.",
        "key_manifestations": [
          "Atlantic Charter (Document)",
          "Commissar Order (Criminal Order)",
          "Pearl Harbor (Attack without declaration)",
          "Lend-Lease Act (Legal way to bypass neutrality)"
        ]
      },
      "1942": {
        "variance_explained": 5.0,
        "description": "United Nations Declaration (+3.0%). 26 nations signed. Allied war aims tied to human rights and law. The 'Inter-Allied Declaration' condemned Nazi extermination of Jews. The legal case for Nuremberg was being built during the slaughter.",
        "key_manifestations": [
          "Declaration by United Nations (Legal Event)",
          "St. James Palace Declaration (War Crimes warning)",
          "Wannsee Conference (Bureaucratic crime)",
          "Executive Order 9066 (Legal internment)"
        ]
      },
      "1943": {
        "variance_explained": 8.0,
        "description": "Moscow Declaration (+3.0%). Allies vowed to pursue war criminals to the ends of the earth. 'Let those who have hitherto not imbibed their hands with innocent blood beware.' The promise of Retributive Justice.",
        "key_manifestations": [
          "Moscow Declaration (Diplomatic Event)",
          "UNRRA founded (Humanitarian Institution)",
          "Warsaw Ghetto (Crime)",
          "Oklahoma! (Cultural)"
        ]
      },
      "1944": {
        "variance_explained": 12.0,
        "description": "Defining Genocide (+4.0%). Raphael Lemkin coined the term. He lobbied for it to be a crime. Bretton Woods established the IMF/World Bank\u2014economic law to prevent future wars. Dumbarton Oaks planned the UN structure.",
        "key_manifestations": [
          "Lemkin's 'Axis Rule in Occupied Europe' (Book)",
          "Bretton Woods Conference (Economic Law)",
          "Dumbarton Oaks (Institutional Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 25.0,
        "description": "Nuremberg and the UN Charter (+13.0%). The Charter signed in San Francisco. Force illegal except self-defense. The IMT (International Military Tribunal) began. G\u00f6ring et al. in the dock. 'Crimes Against Peace,' 'War Crimes,' 'Crimes Against Humanity.' The shield was forged.",
        "key_manifestations": [
          "UN Charter signed (Legal Event)",
          "Nuremberg Trials begin (Legal Event)",
          "Yamashita Trial (Command Responsibility)",
          "London Charter (Defining the crimes)"
        ]
      },
      "1946": {
        "variance_explained": 28.0,
        "description": "The Verdicts (+3.0%). Nuremberg judgments. Principles: Individuals are responsible; Orders are no excuse; Aggressive war is a crime. Tokyo Trials began. The Genocide Convention was drafted. The 'Human Rights' era began.",
        "key_manifestations": [
          "Nuremberg Verdicts (Legal Event)",
          "Tokyo Tribunals begin (Legal Event)",
          "UNESCO founded (Cultural peace)",
          "Best Years of Our Lives (Film)"
        ]
      },
      "1947": {
        "variance_explained": 28.0,
        "description": "Stasis. The Cold War froze the legal consensus. The UN Security Council became deadlocked by the Veto. But the Nuremberg principles were affirmed by the UN General Assembly.",
        "key_manifestations": [
          "UN affirmation of Nuremberg Principles (Legal Event)",
          "Truman Doctrine (Political reality)",
          "Partition of India (Legal chaos)",
          "Streetcar Named Desire (Play)"
        ]
      },
      "1948": {
        "variance_explained": 32.0,
        "description": "Human Rights and Genocide (+4.0%). The Universal Declaration of Human Rights (UDHR). Eleanor Roosevelt. Non-binding but normative. The Genocide Convention adopted. 'Never Again' became law. The Tokyo verdicts delivered.",
        "key_manifestations": [
          "UDHR adopted (Legal Event)",
          "Genocide Convention (Legal Event)",
          "Tokyo Verdicts (Legal Event)",
          "Apartheid codified (Legalized racism)"
        ]
      },
      "1949": {
        "variance_explained": 35.0,
        "description": "Geneva Conventions of 1949 (+3.0%). Four Conventions. The 4th protected Civilians. Common Article 3 covered civil wars. The most widely ratified treaties in history. The 'Paper Shield' was fully constructed.",
        "key_manifestations": [
          "Geneva Conventions 1949 (Legal Event)",
          "NATO Treaty (Collective defense law)",
          "Council of Europe founded (Human rights court roots)",
          "1984 (The lawless state)"
        ]
      },
      "1950": {
        "variance_explained": 35.0,
        "description": "Nuremberg Principles Codified (+0.0%). The International Law Commission codified the principles. But the Korean War showed the limits. Both sides accused the other of crimes. The law was a weapon of propaganda. The 'Shield' was dented but in place.",
        "key_manifestations": [
          "ILC Codification (Legal Event)",
          "European Convention on Human Rights (Legal Event)",
          "Korean War (Event)",
          "McCarthyism (Abuse of domestic law)"
        ]
      }
    }
  },
  "17_submersible_commerce_raiding": {
    "name": "Submersible Commerce Raiding (The Wolfpack)",
    "description": "This eigencluster defines the strategic use of the submarine not as a fleet scout, but as a weapon of economic strangulation. It attacks the 'Space of Flows' (Global Trade). It is the asymmetric answer to Naval Hegemony (Cluster 4). It creates a 3D naval battlefield where the surface is a killing zone. It tracks the evolution from the 'Holland' boats to the U-Boat campaigns of WWI/WWII and the dawn of the nuclear sub.",
    "trajectory": {
      "1890": {
        "variance_explained": 1.0,
        "description": "Experimental phase. Submarines were 'scientific toys.' The *Gymnote* (France) and *Peral* (Spain) demonstrated electric propulsion. Strategic impact was zero. The concept was viewed as 'un-English' and pirate-like.",
        "key_manifestations": [
          "Launch of the Peral (Tech Event)",
          "Gymnote trials (Tech Event)",
          "Verne's 20,000 Leagues (Cultural dominant image)",
          "Mahan's Sea Power (Ignoring subs)"
        ]
      },
      "1891": {
        "variance_explained": 1.0,
        "description": "Stasis. The French 'Jeune \u00c9cole' championed the torpedo boat, which was the conceptual ancestor of the sub (asymmetric sea denial). They argued for attacking commerce, but lacked the submersible tech.",
        "key_manifestations": [
          "Jeune \u00c9cole writings (Doctrine)",
          "Torpedo boat exercises (Event)",
          "Sherlock Holmes (Bruce-Partington Plans - sub tech)",
          "Light That Failed (Book)"
        ]
      },
      "1892": {
        "variance_explained": 1.0,
        "description": "Stasis. Competition in designs. Baker, Lake, Holland. The problem was the power source (Steam vs Electric vs Petrol). No naval staff took them seriously.",
        "key_manifestations": [
          "Simon Lake's Argonaut Jr (Tech Event)",
          "Cholera (Event)",
          "Germinal (Book)",
          "Diesel patent (Future sub engine)"
        ]
      },
      "1893": {
        "variance_explained": 1.2,
        "description": "USS *Holland* design work (+0.2%). John Holland convinced the US Navy to run a competition. The 'Plunger' design. The idea of a 'submersible torpedo boat' gained official funding.",
        "key_manifestations": [
          "US Navy submarine competition (Institutional Event)",
          "New World Symphony (Cultural)",
          "Frontier Thesis (Event)",
          "Panama Scandal (Event)"
        ]
      },
      "1894": {
        "variance_explained": 1.2,
        "description": "Stasis. The French Navy ordered the *Narval*. Dual propulsion (Steam/Electric). The first modern submarine design (diving/surfacing capability).",
        "key_manifestations": [
          "Order of the Narval (Tech Event)",
          "Dreyfus Affair (Distraction)",
          "Jungle Book (Book)",
          "Sino-Japanese War (Torpedo boats effective)"
        ]
      },
      "1895": {
        "variance_explained": 1.2,
        "description": "Stasis. Holland continued refining. The problem of stability. The Whitehead Torpedo improved range, making the sub's payload lethal.",
        "key_manifestations": [
          "Whitehead Torpedo improvements (Tech Event)",
          "Time Machine (Book)",
          "X-Rays (Science)",
          "Cuban War (Event)"
        ]
      },
      "1896": {
        "variance_explained": 1.2,
        "description": "Stasis. Global interest low. Germany ignored the tech (Tirpitz wanted battleships).",
        "key_manifestations": [
          "Tirpitz naval memos (Ignoring subs)",
          "Island of Dr. Moreau (Book)",
          "Adwa (Event)",
          "Radioactivity (Science)"
        ]
      },
      "1897": {
        "variance_explained": 1.5,
        "description": "Launch of the *Plunger* (+0.3%). It failed, but taught lessons. Holland VI (the successful one) laid down. The technical hurdles were being cleared.",
        "key_manifestations": [
          "Launch of Plunger (Tech Event)",
          "Dracula (Book)",
          "Diamond Jubilee (Battleship dominance)",
          "Turbinia (Surface speed)"
        ]
      },
      "1898": {
        "variance_explained": 2.0,
        "description": "Holland VI launched (+0.5%). The first practical submarine. Internal combustion (surface) / Electric (submerged). The template was set. The Spanish-American war saw no subs, but the *fear* of Spanish torpedo boats blocked US ports.",
        "key_manifestations": [
          "Holland VI launch (Tech Event)",
          "War of the Worlds (Thunderchild vs Martians)",
          "Spanish-American War (Event)",
          "Fashoda (Event)"
        ]
      },
      "1899": {
        "variance_explained": 2.2,
        "description": "Hague Conference (+0.2%). No ban on submarines. They were too new to be regulated. The French *Narval* commissioned. France led the world in underwater tonnage.",
        "key_manifestations": [
          "Commissioning of Narval (Tech Event)",
          "Hague Convention (Silence on subs)",
          "Heart of Darkness (Book)",
          "Boer War (Event)"
        ]
      },
      "1900": {
        "variance_explained": 3.0,
        "description": "US Navy buys Holland VI (+0.8%). Commissioned as USS *Holland* (SS-1). The first sub in the US Navy. The weapon was legitimized. Great Britain ordered 5 Hollands (despite Wilson calling them 'damned un-English').",
        "key_manifestations": [
          "Commissioning of USS Holland (Event)",
          "British order for Hollands (Strategic Event)",
          "Lord Jim (Book)",
          "Zeppelin (Air equivalent)"
        ]
      },
      "1901": {
        "variance_explained": 3.5,
        "description": "French Submarine Force (+0.5%). France committed to the sub as the answer to the Royal Navy. The 'Jeune \u00c9cole' vindicated. They built a fleet. Germany remained skeptical.",
        "key_manifestations": [
          "French naval estimates (Strategic Event)",
          "Launch of HMS Holland 1 (Event)",
          "Kim (Book)",
          "Queen Victoria dies (Event)"
        ]
      },
      "1902": {
        "variance_explained": 4.0,
        "description": "Fisher's Conversion (+0.5%). Fisher championed the sub. 'It will revolutionize naval war.' He saw it as a defensive weapon for ports. The offensive potential was debated.",
        "key_manifestations": [
          "Fisher's memos on subs (Document)",
          "Lake's Protector launched (Tech Event)",
          "Heart of Darkness (Book)",
          "Boer War ends (Event)"
        ]
      },
      "1903": {
        "variance_explained": 4.0,
        "description": "Stasis. Diesel engines began to replace petrol (safer/longer range). The 'periscope' improved. The sub became an effective scout.",
        "key_manifestations": [
          "Diesel integration experiments (Tech Event)",
          "Riddle of the Sands (Book)",
          "Wright Flight (Event)",
          "Call of the Wild (Book)"
        ]
      },
      "1904": {
        "variance_explained": 4.5,
        "description": "Russo-Japanese War (+0.5%). Both sides bought subs (Hollands/Protectors). They arrived too late or were ineffective. But the *fear* of mines (stationary subs) dominated the naval war. The psychological impact of the 'hidden threat' was established.",
        "key_manifestations": [
          "Russian sub deployment to Vladivostok (Event)",
          "Loss of Petropavlovsk to mine (Event)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)"
        ]
      },
      "1905": {
        "variance_explained": 5.0,
        "description": "U-1 Launched (+0.5%). Germany entered the game. Krupp. U-1 was a copy of the Karp class. The German methodical engineering began to refine the weapon. The 'U-Boat' was born.",
        "key_manifestations": [
          "Launch of U-1 (Tech Event)",
          "Battle of Tsushima (Event)",
          "Einstein (Science)",
          "Revolution of 1905 (Event)"
        ]
      },
      "1906": {
        "variance_explained": 5.5,
        "description": "Diesel Revolution (+0.5%). U-Boat diesel engines perfected. Range increased dramatically. They could now operate in the North Sea, not just coastal waters. The strategic geometry changed.",
        "key_manifestations": [
          "German diesel U-boat trials (Tech Event)",
          "Dreadnought (The target)",
          "The Jungle (Book)",
          "San Francisco Earthquake (Event)"
        ]
      },
      "1907": {
        "variance_explained": 5.5,
        "description": "Stasis. Hague Conference debated mines but ignored subs. The Royal Navy began exercises testing subs against fleets. The subs won (judges ruled they would have torpedoed the battleships). The Admirals suppressed the findings.",
        "key_manifestations": [
          "Royal Navy maneuvers (Event)",
          "Hague Convention (Event)",
          "Secret Agent (Book)",
          "Picasso (Art)"
        ]
      },
      "1908": {
        "variance_explained": 6.0,
        "description": "Overseas Submarines (+0.5%). British 'D Class.' Capable of operating far from base. The concept of the 'ocean-going' submarine. Commerce raiding was theoretically possible, but the 'Prize Rules' (stop/search) made it impractical.",
        "key_manifestations": [
          "Launch of D Class (Tech Event)",
          "War in the Air (Wells predicts air war, subs implied)",
          "Bosnian Crisis (Event)",
          "Scouting for Boys (Book)"
        ]
      },
      "1909": {
        "variance_explained": 6.5,
        "description": "Declaration of London (+0.5%). Confirmed Prize Rules. Submarines must behave like cruisers. This legal constraint (Cluster 16) blinded strategists to the submarine's true potential (unrestricted warfare).",
        "key_manifestations": [
          "Declaration of London (Legal Event)",
          "Machine Stops (Story)",
          "Futurist Manifesto (Art)",
          "Bleriot (Event)"
        ]
      },
      "1910": {
        "variance_explained": 7.0,
        "description": "Radio in Subs (+0.5%). Coordination. The 'Wolfpack' concept was technically possible but doctrinally absent. Germany focused on the 'High Seas Fleet' (battleships). U-boats were secondary.",
        "key_manifestations": [
          "Wireless installed in U-boats (Tech Event)",
          "Great Illusion (Book)",
          "Howards End (Book)",
          "Halley's Comet (Event)"
        ]
      },
      "1911": {
        "variance_explained": 7.0,
        "description": "Stasis. Agadir. No sub role. Churchill (First Lord) was skeptical of subs, calling them 'defensive.' Fisher disagreed. The debate continued.",
        "key_manifestations": [
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Official Secrets Act (Event)",
          "Taylorism (Event)"
        ]
      },
      "1912": {
        "variance_explained": 7.5,
        "description": "Diesel-Electric dominance (+0.5%). The E-Class (British). The standard was set. Reliability improved. The 'accident rate' dropped. Crews became professionals, not daredevils.",
        "key_manifestations": [
          "E-Class commissioning (Tech Event)",
          "Titanic (Event)",
          "Lost World (Book)",
          "Balkan Wars (Event)"
        ]
      },
      "1913": {
        "variance_explained": 8.0,
        "description": "Torpedo Improvement (+0.5%). Heater torpedoes. Longer range, faster. The sub could fire from outside visual detection range. The lethality increased. Germany had 20 operational U-boats; UK had 70. But German tech was superior.",
        "key_manifestations": [
          "Torpedo tech advances (Tech Event)",
          "Rite of Spring (Cultural)",
          "Zabern Affair (Event)",
          "Sons and Lovers (Book)"
        ]
      },
      "1914": {
        "variance_explained": 20.0,
        "description": "The Weddingen Shock (+12.0%). Sept 22. U-9 sank 3 British cruisers (*Aboukir, Hogue, Cressy*) in 1 hour. 1,400 dead. It proved the sub could kill capital ships. The Grand Fleet retreated to safe harbors. The North Sea was no longer a British lake. First merchant ship (*Glitra*) sunk by U-17 (following rules).",
        "key_manifestations": [
          "Sinking of the Cruiser Squadron (Event)",
          "Sinking of the Glitra (Event)",
          "Scapa Flow scare (Strategic Event)",
          "39 Steps (Book)"
        ]
      },
      "1915": {
        "variance_explained": 40.0,
        "description": "Unrestricted Warfare I (+20.0%). Germany declared the waters around UK a war zone. *Lusitania* sunk. 1,200 dead. US outrage. Germany suspended the campaign to keep US out. It proved the sub could strangle trade, but the political cost was too high.",
        "key_manifestations": [
          "War Zone declaration (Event)",
          "Sinking of Lusitania (Event)",
          "The Arabic Pledge (Diplomatic restriction)",
          "Gallipoli (E-11 exploits in Dardanelles)"
        ]
      },
      "1916": {
        "variance_explained": 35.0,
        "description": "The Pause (-5.0%). Restricted warfare. 'Prize Rules' returned. Tonnage sunk dropped. The U-boat fleet grew (UB/UC classes). The 'Merchant Submarine' *Deutschland* sailed to US (propaganda).",
        "key_manifestations": [
          "Voyage of the Deutschland (Event)",
          "Battle of Jutland (Subs failed to trap fleet)",
          "Sussex Pledge (Diplomatic Event)",
          "Easter Rising (Event)"
        ]
      },
      "1917": {
        "variance_explained": 65.0,
        "description": "The Crisis (+30.0%). Germany resumed Unrestricted Warfare. 'Gamble.' To starve UK before US arrives. April: 881,000 tons sunk. UK on brink of collapse. The 'Convoy System' introduced. It saved the Allies. The U-boat was defeated by statistics and organization.",
        "key_manifestations": [
          "Pless Conference (Decision)",
          "April Tonnage figures (Peak)",
          "Introduction of Convoy (Event)",
          "US Entry (Political consequence)"
        ]
      },
      "1918": {
        "variance_explained": 60.0,
        "description": "Defeat (-5.0%). The U-boats were hunted. Depth charges, hydrophones, mines (North Sea Barrage). They lost the tonnage war. US troops arrived safely. The U-boat fleet surrendered/scuttled. The weapon failed strategically but changed naval war forever.",
        "key_manifestations": [
          "North Sea Mine Barrage (Tech Event)",
          "Surrender of U-boats at Harwich (Event)",
          "Armistice (Event)",
          "Decline of the West (Book)"
        ]
      },
      "1919": {
        "variance_explained": 30.0,
        "description": "The Ban (-30.0%). Versailles. Germany forbidden subs. The Allies considered banning them entirely (UK wanted to, France refused). The sub was branded a 'pirate weapon.'",
        "key_manifestations": [
          "Versailles Treaty (Legal Ban)",
          "British proposal to ban subs (Diplomatic Event)",
          "Scuttling at Scapa Flow (Event)",
          "Alcock and Brown (Air dominance)"
        ]
      },
      "1920": {
        "variance_explained": 30.0,
        "description": "Stasis. Germany established a dummy company in Netherlands (IvS) to keep sub design alive. Covert R&D. The knowledge was preserved.",
        "key_manifestations": [
          "IvS founded in Hague (Secret Event)",
          "Kapp Putsch (Event)",
          "Women in Love (Book)",
          "League of Nations (Event)"
        ]
      },
      "1921": {
        "variance_explained": 32.0,
        "description": "Washington Conference (+2.0%). Validated the sub. Limits were placed on cruisers, but subs remained legal. The 'Root Resolution' tried to enforce Prize Rules. A paper shackle.",
        "key_manifestations": [
          "Washington Conference (Event)",
          "Root Resolution (Legal Event)",
          "Tractatus (Philosophy)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 32.0,
        "description": "Stasis. Sonar (ASDIC) developed. The British believed the sub was 'solved.' 'We shall detect them and sink them.' Hubris. The 'Ping' created a false sense of security.",
        "key_manifestations": [
          "ASDIC issued to fleet (Tech Event)",
          "Mussolini (Event)",
          "Waste Land (Poem)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 32.0,
        "description": "Stasis. Japan developed the 'Junsen' class. Long range. Influenced by German designs. The Pacific strategy included subs as scouts for the decisive battle.",
        "key_manifestations": [
          "Japanese sub development (Tech Event)",
          "Ruhr Occupation (Event)",
          "Beer Hall Putsch (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 32.0,
        "description": "Stasis. US 'Fleet Boats.' The V-class. Large, ocean-going. Designed for the Pacific. The geography dictated the design (long patrol).",
        "key_manifestations": [
          "US V-Class authorized (Tech Event)",
          "Magic Mountain (Book)",
          "Dawes Plan (Event)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 35.0,
        "description": "Type II Design (+3.0%). IvS designed the prototype for the U-Boat arm in Finland/Spain. The hardware for WWII was being forged in secret.",
        "key_manifestations": [
          "Vetehinen class design (Tech Event)",
          "Mein Kampf (Book)",
          "Great Gatsby (Book)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 35.0,
        "description": "Stasis. Canaris (future Abwehr chief) involved in secret naval rearmament. The network of evasion.",
        "key_manifestations": [
          "Canaris activities (Secret Event)",
          "Metropolis (Film)",
          "Sun Also Rises (Book)",
          "General Strike (Event)"
        ]
      },
      "1927": {
        "variance_explained": 35.0,
        "description": "Stasis. The *O-21* disaster in US. Sub safety improved (Momsen Lung). The focus was on crew survival, not lethality.",
        "key_manifestations": [
          "Sinking of S-4 (Event)",
          "Momsen Lung invention (Tech Event)",
          "Jazz Singer (Film)",
          "Being and Time (Book)"
        ]
      },
      "1928": {
        "variance_explained": 35.0,
        "description": "Stasis. Kellogg-Briand. War outlawed. Subs ignored. The Royal Navy cancelled some sub programs, trusting in ASDIC and peace.",
        "key_manifestations": [
          "Kellogg-Briand (Event)",
          "Lady Chatterley (Book)",
          "Mickey Mouse (Cultural)",
          "Five Year Plan (Event)"
        ]
      },
      "1929": {
        "variance_explained": 35.0,
        "description": "Stasis. The Crash. Budgets cut. But D\u00f6nitz was refining his theory. He realized the 'Convoy' was the enemy, and the 'Wolfpack' (Rudel) was the answer. Radio was the key.",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "All Quiet (Book)",
          "D\u00f6nitz's tactical studies (Intellectual Event)",
          "Young Plan (Event)"
        ]
      },
      "1930": {
        "variance_explained": 32.0,
        "description": "London Naval Treaty (-3.0%). Article 22. 'Submarines must conform to the rules of International Law to which surface vessels are subject.' The 'Cruiser Rules.' It legally neutered the sub. Germany (not a signatory) ignored it in planning.",
        "key_manifestations": [
          "London Naval Treaty (Legal Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "Nazi breakthrough (Event)"
        ]
      },
      "1931": {
        "variance_explained": 32.0,
        "description": "Stasis. Nautilus (Wilkins) expedition to the North Pole. Failed, but showed the sub's potential for extreme environments. Under-ice navigation.",
        "key_manifestations": [
          "Nautilus Polar Expedition (Event)",
          "M (Film)",
          "Mukden Incident (Event)",
          "Empire State Building (Event)"
        ]
      },
      "1932": {
        "variance_explained": 35.0,
        "description": "Reconstruction (+3.0%). The German Navy formulated the 'Reconstruction Plan.' 16 U-boats planned. Components stockpiled abroad. The fleet existed in crates.",
        "key_manifestations": [
          "Reconstruction Plan approved (Secret Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Event)",
          "Bonus Army (Event)"
        ]
      },
      "1933": {
        "variance_explained": 40.0,
        "description": "Hitler and D\u00f6nitz (+5.0%). Hitler approved U-boat construction. 'Anti-Submarine School' established (cover for U-boat training). D\u00f6nitz appointed leader. The 'Wolfpack' doctrine was formalized.",
        "key_manifestations": [
          "U-boat school opens (Institutional Event)",
          "King Kong (Film)",
          "Hitler Chancellor (Event)",
          "Reichstag Fire (Event)"
        ]
      },
      "1934": {
        "variance_explained": 42.0,
        "description": "Stasis. The Type II coastal sub assembled in Kiel. The welding torches sparked. The ban was broken.",
        "key_manifestations": [
          "Assembly of first U-boats (Tech Event)",
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 50.0,
        "description": "Anglo-German Naval Agreement (+8.0%). UK allowed Germany 45% parity in subs (later 100%). It legalized the U-boat arm. A strategic suicide by the British. U-1 commissioned.",
        "key_manifestations": [
          "Anglo-German Naval Agreement (Diplomatic Event)",
          "Commissioning of U-1 (Event)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 52.0,
        "description": "Spanish Civil War (+2.0%). German U-boats conducted secret patrols (Operation Ursula). Tested torpedoes and commanders. The 'Silent' intervention.",
        "key_manifestations": [
          "Operation Ursula (Secret Event)",
          "General Theory (Book)",
          "Modern Times (Film)",
          "Rhineland (Event)"
        ]
      },
      "1937": {
        "variance_explained": 55.0,
        "description": "Type VII (+3.0%). The workhorse. The Type VII entered service. Atlantic range. Fast dive. The weapon of the next war was ready. D\u00f6nitz demanded 300; he got dozens.",
        "key_manifestations": [
          "Type VII U-boat enters service (Tech Event)",
          "Guernica (Event)",
          "Snow White (Film)",
          "Nanking (Event)"
        ]
      },
      "1938": {
        "variance_explained": 58.0,
        "description": "Z-Plan (+3.0%). Hitler prioritized battleships over U-boats. D\u00f6nitz despaired. 'We will fight with a handful of boats.' Strategic blindness. The U-boat was still the underdog service.",
        "key_manifestations": [
          "Z-Plan approval (Strategic Event)",
          "Munich Crisis (Event)",
          "Kristallnacht (Event)",
          "War of the Worlds (Event)"
        ]
      },
      "1939": {
        "variance_explained": 75.0,
        "description": "The Second Battle Begins (+17.0%). War. 57 U-boats operational. *Athenia* sunk (mistake/crime). *Royal Oak* sunk in Scapa Flow (Prien). A hero's welcome. It proved the U-boat could strike anywhere. Churchill: 'The only thing that ever really frightened me during the war was the U-boat peril.'",
        "key_manifestations": [
          "Sinking of Athenia (Event)",
          "Sinking of Royal Oak (Event)",
          "Battle of the Atlantic begins (Event)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 85.0,
        "description": "The Happy Time (+10.0%). The Fall of France gave the U-boats bases in Biscay (Lorient, St. Nazaire), extending their range into the Atlantic. The 'Wolfpack' tactics (Rudel) decimated convoys. Aces like Kretschmer became national heroes. The British lifeline was strangling. The submarine had moved from a nuisance to a strategic threat capable of winning the war.",
        "key_manifestations": [
          "Establishment of U-boat bases in France (Strategic Event)",
          "Otto Kretschmer's 'Silent Running' tactics (Tech/Tactical Event)",
          "Sinking of the Arandora Star (Event)",
          "The Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 88.0,
        "description": "The Undeclared War (+3.0%). US destroyers escorted convoys ('Neutrality Patrol'). The USS *Reuben James* was sunk\u2014the first US naval loss. Enigma was broken (Ultra), allowing the British to reroute convoys away from wolfpacks. It became an information war: Crypto vs Tonnage. The U-boat war expanded to the Arctic and Mediterranean.",
        "key_manifestations": [
          "Sinking of USS Reuben James (Event)",
          "Capture of U-110 and Enigma machine (Intel Event)",
          "Introduction of the 'Liberty Ship' (Industrial response)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 95.0,
        "description": "Operation Drumbeat (+7.0%). 'Paukenschlag.' U-boats attacked the US East Coast. The US refused to convoy (a failure of Cluster 4). It was a 'Second Happy Time.' Tankers were sunk against the backdrop of city lights. Tonnage losses exceeded construction. The Allies were losing the war at sea. In the Pacific, US subs began the strangulation of Japan.",
        "key_manifestations": [
          "Operation Drumbeat (Event)",
          "Destruction of Convoy PQ17 (Event)",
          "Introduction of Type XIV 'Milk Cow' supply subs (Tech Event)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 60.0,
        "description": "Black May (-35.0%). The turning point. Allied technology (Centimetric Radar, Leigh Light, Hedgehog) and air power (Escort Carriers) closed the 'Air Gap.' The U-boats were slaughtered. D\u00f6nitz withdrew from the North Atlantic. The hunter became the hunted. The strategic threat of commerce raiding was broken by the industrial and technological superiority of the defense.",
        "key_manifestations": [
          "Black May (Event)",
          "Sinking of U-456 by Fido homing torpedo (Tech Event)",
          "D\u00f6nitz withdraws U-boats from North Atlantic (Strategic Event)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 50.0,
        "description": "Technological Desperation (-10.0%). The Schnorchel was introduced to allow diesel operation underwater, countering radar. The Type XXI 'Elektroboot' was designed\u2014the first true submarine (high underwater speed). It came too late. In the Pacific, US submarines decimated the Japanese merchant marine, starving the home islands. 'Operation Starvation.'",
        "key_manifestations": [
          "Introduction of the Schnorchel (Tech Event)",
          "Sinking of Japanese carrier Taiho by sub (Event)",
          "First Type XXI launched (Tech Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 40.0,
        "description": "Defeat and Validation (-10.0%). The U-boat war ended in surrender. The Type XXI never saw combat. However, the US submarine campaign against Japan was a total success, proving that commerce raiding *could* strangle an island nation if the anti-submarine warfare failed. The cluster ended with a split verdict: Germany lost, but the concept worked in the Pacific.",
        "key_manifestations": [
          "Operation Deadlight (Scuttling of U-boats) (Event)",
          "Sinking of USS Indianapolis (Event)",
          "Surrender of U-234 with atomic cargo (Event)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 35.0,
        "description": "Post-Mortem (-5.0%). The analysis of the Battle of the Atlantic shaped future NATO strategy. The Soviets captured Type XXI technology. The fear shifted from 'German Raiders' to 'Soviet Mass Production.' The US Navy began the GUPPY program to upgrade subs to German standards.",
        "key_manifestations": [
          "US Strategic Bombing Survey (Naval Analysis) (Intellectual Event)",
          "GUPPY conversion program begins (Tech Event)",
          "Best Years of Our Lives (Film)",
          "Nuremberg Trials (Indictment of D\u00f6nitz)"
        ]
      },
      "1947": {
        "variance_explained": 30.0,
        "description": "Stasis. The disposal of the surplus fleet. The realization that the next war would involve snorkeling submarines. The 'True Submarine' era began. The focus shifted to Anti-Submarine Warfare (ASW) as the primary naval mission of the West.",
        "key_manifestations": [
          "Trials of Type XXI technology (Tech Event)",
          "National Security Act (Institutional Event)",
          "A Streetcar Named Desire (Play)",
          "Truman Doctrine (Political Context)"
        ]
      },
      "1948": {
        "variance_explained": 35.0,
        "description": "The Soviet Threat (+5.0%). The Whiskey Class submarine (based on Type XXI) began production. The specter of a 'Third Battle of the Atlantic' against a massive Soviet sub fleet haunted Western planners. The commerce raider returned as the primary threat to NATO logistics.",
        "key_manifestations": [
          "Soviet Whiskey Class production begins (Tech Event)",
          "Berlin Airlift (Air bridging the blockade)",
          "The Naked and the Dead (Book)",
          "1948 Arab-Israeli War (Event)"
        ]
      },
      "1949": {
        "variance_explained": 35.0,
        "description": "NATO (+0.0%). The Atlantic Alliance was formed specifically to secure the sea bridge between the US and Europe against the submarine threat. The 'Wolfpack' was the reason for the alliance's naval structure.",
        "key_manifestations": [
          "NATO Treaty signed (Event)",
          "Soviet Atomic Test (Event)",
          "The Third Man (Film)",
          "Death of a Salesman (Play)"
        ]
      },
      "1950": {
        "variance_explained": 40.0,
        "description": "Nuclear Propulsion (+5.0%). Captain Rickover authorized the USS *Nautilus*. The shift from 'Submersible' (battery) to 'Nuclear' (infinite range). The commerce raider became the 'Capital Ship' of the future. In Korea, subs were used for commandos, but the threat remained strategic.",
        "key_manifestations": [
          "Authorization of USS Nautilus (Tech Event)",
          "Korean War (Event)",
          "The Lonely Crowd (Book)",
          "All About Eve (Film)"
        ]
      }
    }
  },
  "18_amphibious_logistical_projection": {
    "name": "Amphibious Logistical Projection (The Portable Port)",
    "description": "The capacity to project industrial power from sea to land against a defended shore. It overcomes the 'Gallipoli Trauma.' It requires the integration of Naval, Air, and Land power with massive logistical innovation (Landing craft, Mulberry Harbors). It is the prerequisite for the liberation of Europe and the conquest of the Pacific.",
    "trajectory": {
      "1890": {
        "variance_explained": 1.0,
        "description": "The concept was dormant. Naval landings were viewed as administrative movements of troops to friendly ports or undefended beaches. The Royal Navy doctrine focused on blockade and fleet action, not power projection ashore. The 'marine' was a shipboard policeman, not an assault trooper.",
        "key_manifestations": [
          "Royal Marines regulations (Policy)",
          "The Sign of Four (Novel - empire logistics)",
          "Mahan's Sea Power (Focus on blue water)",
          "Heligoland treaty (Base swapping)"
        ]
      },
      "1891": {
        "variance_explained": 1.0,
        "description": "Stasis. The Chilean Civil War saw an amphibious landing at Quintero Bay. It was successful but largely ignored by European observers. It demonstrated that a fleet could flank an army, but the technology was primitive (rowboats).",
        "key_manifestations": [
          "Battle of Conc\u00f3n (Chilean Civil War)",
          "Kipling's Light That Failed (Imperial reach)",
          "Formation of the Pan-German League (Continental focus)",
          "French naval exercises (Coastal defense focus)"
        ]
      },
      "1892": {
        "variance_explained": 1.0,
        "description": "Stasis. The focus was on the 'Fleet in Being.' Amphibious operations were considered 'Combined Operations,' notoriously difficult due to inter-service rivalry. The lack of specialized craft meant landings were slow and vulnerable.",
        "key_manifestations": [
          "Royal Navy maneuvers (Blue Water focus)",
          "Cholera in Hamburg (Port control)",
          "Germinal (Book)",
          "Diesel patent (Future propulsion)"
        ]
      },
      "1893": {
        "variance_explained": 1.2,
        "description": "The Brazilian Naval Revolt (+0.2%). Rebel ships shelled Rio. It highlighted the disconnect between sea power and land power if you couldn't get ashore. The concept of 'Gunboat Diplomacy' relied on the threat of landing, but the capability was thin.",
        "key_manifestations": [
          "Brazilian Naval Revolt (Event)",
          "Turner's Frontier Thesis (Land focus)",
          "New World Symphony (Cultural)",
          "Matabele War (Land logistics)"
        ]
      },
      "1894": {
        "variance_explained": 1.5,
        "description": "Sino-Japanese War (+0.3%). The Japanese landed at Port Arthur. A successful operation against a fortified port (from the land side). It showed that the Japanese had mastered the logistics of moving an army across the sea. Western observers took note but dismissed it as 'fighting Asians.'",
        "key_manifestations": [
          "Japanese landing at Liaodong (Event)",
          "Jungle Book (Book)",
          "Dreyfus Affair (Distraction)",
          "Tower Bridge opens (Port infrastructure)"
        ]
      },
      "1895": {
        "variance_explained": 1.5,
        "description": "Stasis. The Cuban War of Independence began. Spain shipped 200,000 troops to Cuba. A massive logistical feat, but they landed at established ports (Havana). It was transport, not assault.",
        "key_manifestations": [
          "Spanish troop lifts to Cuba (Logistical Event)",
          "Time Machine (Book)",
          "Lumiere Films (Tech)",
          "X-Rays (Science)"
        ]
      },
      "1896": {
        "variance_explained": 1.5,
        "description": "Stasis. War plans for the US/Spain conflict began to gestate. The US Navy studied the blockade of Cuba. The problem of landing an army on a hostile island was theoretical.",
        "key_manifestations": [
          "US Naval War College studies (Intellectual Event)",
          "Island of Dr. Moreau (Book)",
          "Adwa (Land failure)",
          "Marconi Patent (Comms)"
        ]
      },
      "1897": {
        "variance_explained": 1.5,
        "description": "Stasis. The Greco-Turkish War. Greek landings in Crete. Chaotic. It reinforced the view that 'ships cannot fight forts.' The prejudice against amphibious assault was hardening.",
        "key_manifestations": [
          "Greek landings in Crete (Event)",
          "Dracula (Invasion anxiety)",
          "Diamond Jubilee (Naval dominance)",
          "Turbinia (Speed)"
        ]
      },
      "1898": {
        "variance_explained": 3.0,
        "description": "Spanish-American War (+1.5%). The Daiquiri Landings. US troops threw horses overboard to swim ashore. Chaotic. Only successful because the Spanish didn't oppose the beach. It highlighted the lack of doctrine and specialized craft. The seizure of Guantanamo Bay established the need for 'Advanced Bases.'",
        "key_manifestations": [
          "Daiquiri Landings (Event)",
          "Capture of Guantanamo Bay (Strategic Event)",
          "War of the Worlds (Martian landings)",
          "Fashoda (Event)"
        ]
      },
      "1899": {
        "variance_explained": 2.5,
        "description": "Boer War (-0.5%). A land war. The Navy's role was purely transport (sealift). The successful transport of 300,000 men and horses over 6,000 miles was a logistical triumph, but not a combat landing.",
        "key_manifestations": [
          "British sealift to Cape Town (Logistical Event)",
          "Hague Convention (Event)",
          "Heart of Darkness (Book)",
          "Philippine Insurrection ( Riverine ops)"
        ]
      },
      "1900": {
        "variance_explained": 3.0,
        "description": "Boxer Rebellion (+0.5%). The Taku Forts assault. Allied navies landed parties to storm the forts. A true amphibious assault against defenses. It worked. It proved that 'Combined Operations' were possible with multinational forces.",
        "key_manifestations": [
          "Assault on Taku Forts (Event)",
          "Relief of Peking (Logistical support)",
          "Lord Jim (Book)",
          "Zeppelin (Tech)"
        ]
      },
      "1901": {
        "variance_explained": 3.0,
        "description": "Stasis. The focus returned to the battleship line. The Royal Marines practiced seizing bases, but their role was secondary to the Grand Fleet. The US Marines began to define themselves as 'Advanced Base Force' soldiers.",
        "key_manifestations": [
          "USMC Advanced Base concept (Doctrine)",
          "Kim (Book)",
          "Queen Victoria dies (Event)",
          "Nobel Prizes (Event)"
        ]
      },
      "1902": {
        "variance_explained": 3.0,
        "description": "Stasis. Venezuelan Blockade. European powers landed marines to seize customs houses. 'Gunboat Diplomacy' relied on the *threat* of landing. It worked because the opposition was weak.",
        "key_manifestations": [
          "Venezuela Blockade landings (Event)",
          "Heart of Darkness (Book)",
          "Hobson's Imperialism (Book)",
          "Anglo-Japanese Alliance (Event)"
        ]
      },
      "1903": {
        "variance_explained": 3.2,
        "description": "Panama Intervention (+0.2%). US Marines landed to secure the canal zone (and Panamanian independence). A strategic seizure of a choke point. The ultimate 'logistical' intervention\u2014securing the path between oceans.",
        "key_manifestations": [
          "US landings in Panama (Event)",
          "Call of the Wild (Book)",
          "Riddle of the Sands (German invasion plans)",
          "Wright Flight (Future air support)"
        ]
      },
      "1904": {
        "variance_explained": 3.5,
        "description": "Russo-Japanese War (+0.3%). Japanese landings in Korea and Liaodong. Massive scale. Opposed by Russian mines but not troops. It confirmed the Japanese mastery of the sea-to-land transition.",
        "key_manifestations": [
          "Japanese landings at Chemulpo (Event)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)",
          "Entente Cordiale (Event)"
        ]
      },
      "1905": {
        "variance_explained": 3.5,
        "description": "Stasis. The focus was on Tsushima (Fleet Action). The lesson drawn was 'Big Guns win wars,' not 'Landings win wars.' The amphibious cluster was overshadowed by the Mahanian cluster.",
        "key_manifestations": [
          "Battle of Tsushima (Naval obsession)",
          "Aliens Act (Migration control)",
          "Professor Challenger (Book)",
          "Revolution of 1905 (Event)"
        ]
      },
      "1906": {
        "variance_explained": 3.5,
        "description": "Stasis. The US occupation of Cuba (Second). Marines landed to restore order. A police action. The 'Banana Wars' era began. Small unit landings, low intensity.",
        "key_manifestations": [
          "Second Occupation of Cuba (Event)",
          "The Jungle (Book)",
          "Dreadnought (Tech)",
          "San Francisco Earthquake (Event)"
        ]
      },
      "1907": {
        "variance_explained": 3.5,
        "description": "Stasis. The Hague Conference debated mines (a threat to landings). The 'Advanced Base' exercises in the US Navy proved that seizing a port was harder than thought.",
        "key_manifestations": [
          "US Advanced Base maneuvers (Event)",
          "Secret Agent (Book)",
          "Picasso (Art)",
          "Triple Entente (Event)"
        ]
      },
      "1908": {
        "variance_explained": 3.8,
        "description": "The Invasion Scare (+0.3%). *The War in the Air* and other invasion literature. The British public feared a German bolt-from-the-blue landing. The Committee of Imperial Defence studied it and concluded the Royal Navy made it impossible. Hubris.",
        "key_manifestations": [
          "Invasion Inquiry (Strategic Document)",
          "War in the Air (Book)",
          "Scouting for Boys (Coastal watch)",
          "Bosnian Crisis (Event)"
        ]
      },
      "1909": {
        "variance_explained": 4.0,
        "description": "Stasis. The Phantom Airship scare. The threat shifted to the air. Amphibious capabilities stagnated. There were no specialized landing craft; just ship's boats.",
        "key_manifestations": [
          "Phantom Airship (Event)",
          "Machine Stops (Story)",
          "Futurist Manifesto (Art)",
          "Bleriot (Event)"
        ]
      },
      "1910": {
        "variance_explained": 4.0,
        "description": "Stasis. The USMC established the 'Advanced Base School' in New London. Formalizing the doctrine of seizing ports. A quiet but crucial institutional step.",
        "key_manifestations": [
          "Advanced Base School founded (Institutional Event)",
          "Great Illusion (Book)",
          "Howards End (Book)",
          "Mexican Revolution (Event)"
        ]
      },
      "1911": {
        "variance_explained": 4.5,
        "description": "Libya (+0.5%). Italy invaded Libya. A major amphibious operation. Landed at Tripoli under naval gunfire. It worked against Ottoman irregulars. It showed that sea power could project armies across the Med.",
        "key_manifestations": [
          "Italian landings in Libya (Event)",
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Taylorism (Event)"
        ]
      },
      "1912": {
        "variance_explained": 4.5,
        "description": "Stasis. The US intervention in Nicaragua. Marines landed to secure American interests. The 'Small Wars' manual was being written in practice. The logistics of supplying a jungle war from the sea.",
        "key_manifestations": [
          "US landings in Nicaragua (Event)",
          "Titanic (Event)",
          "Lost World (Book)",
          "Balkan Wars (Event)"
        ]
      },
      "1913": {
        "variance_explained": 5.0,
        "description": "USMC Advance Base Force (+0.5%). Established as a permanent unit. The first dedicated amphibious assault force. Their mission: seize a base for the fleet to refuel. The seed of the Pacific strategy.",
        "key_manifestations": [
          "Advance Base Force created (Institutional Event)",
          "Rite of Spring (Cultural)",
          "Zabern Affair (Event)",
          "Sons and Lovers (Book)"
        ]
      },
      "1914": {
        "variance_explained": 5.5,
        "description": "Veracruz (+0.5%). US occupation of Veracruz, Mexico. An opposed landing. Urban combat. It highlighted the difficulty of fighting in a city from the sea. In Europe, the 'Race to the Sea' ended the mobile war. The coast became a flank.",
        "key_manifestations": [
          "Veracruz Landing (Event)",
          "Battle of the Yser (Naval support of land flank)",
          "39 Steps (Book)",
          "Rape of Belgium (Event)"
        ]
      },
      "1915": {
        "variance_explained": 20.0,
        "description": "Gallipoli (+14.5% Trauma). The defining event. Churchill's plan to bypass the Western Front. The landings at Cape Helles and Anzac Cove. Opposed by machine guns. The slaughter. It proved that modern firepower made amphibious assault suicidal. The 'River Clyde' (Trojan Horse ship) was a disaster. The 'Beetle' (armored landing barge) was invented but too late.",
        "key_manifestations": [
          "Gallipoli Landings (Event)",
          "River Clyde massacre (Event)",
          "Evacuation of Gallipoli (Logistical success)",
          "Churchill's resignation (Political consequence)"
        ]
      },
      "1916": {
        "variance_explained": 5.0,
        "description": "The Gallipoli Paralysis (-15.0%). The lesson learned: 'Never again.' Amphibious operations were removed from the playbook. The focus returned to the Western Front attrition. The cluster collapsed into a negative variance\u2014a taboo.",
        "key_manifestations": [
          "Dardanelles Commission (Inquiry)",
          "Somme (Land attrition)",
          "Easter Rising (Event)",
          "Arab Revolt (Land maneuver)"
        ]
      },
      "1917": {
        "variance_explained": 6.0,
        "description": "Operation Hush (+1.0%). A planned British landing on the Belgian coast. Specialized tanks/pontoons designed. Cancelled because the land offensive (Passchendaele) failed to reach the coast. The technology existed, but the strategic will was gone.",
        "key_manifestations": [
          "Operation Hush planning (Secret Event)",
          "Passchendaele (The mud)",
          "Zimmerman Telegram (Event)",
          "Russian Revolution (Event)"
        ]
      },
      "1918": {
        "variance_explained": 8.0,
        "description": "Zeebrugge Raid (+2.0%). A commando-style raid to block the U-boat port. *Vindictive* landed marines on the mole. High casualties, limited success, but a morale booster. It showed that 'Raids' were possible, even if 'Invasions' were not.",
        "key_manifestations": [
          "Zeebrugge Raid (Event)",
          "Armistice (Event)",
          "Spanish Flu (Event)",
          "Decline of the West (Book)"
        ]
      },
      "1919": {
        "variance_explained": 5.0,
        "description": "Intervention in Russia (-3.0%). Allied landings at Archangel and Vladivostok. Opposed by Bolsheviks/Weather. Logistical nightmares. It reinforced the aversion to overseas adventures. The troops mutinied.",
        "key_manifestations": [
          "Archangel Expedition (Event)",
          "Mutiny in Russia (Event)",
          "Versailles (Event)",
          "Alcock and Brown (Event)"
        ]
      },
      "1920": {
        "variance_explained": 5.0,
        "description": "Stasis. The US Marines formalized 'Small Wars' in Haiti/Dominican Republic. Not amphibious assaults, but colonial policing (Cluster 7) supplied from the sea. The 'Banana Fleet.'",
        "key_manifestations": [
          "US occupation of Haiti (Event)",
          "Women in Love (Book)",
          "Kapp Putsch (Event)",
          "League of Nations (Event)"
        ]
      },
      "1921": {
        "variance_explained": 6.0,
        "description": "Earl Ellis (+1.0%). Pete Ellis (USMC) wrote 'Advanced Base Operations in Micronesia.' He predicted the Pacific War. Island hopping. He died mysteriously in Palau. The prophet of the cluster. The USMC began to pivot from 'Police' to 'Assault.'",
        "key_manifestations": [
          "Ellis's Micronesia Plan (Strategic Document)",
          "Washington Naval Conference (Event)",
          "Tractatus (Philosophy)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 6.0,
        "description": "Stasis. The Washington Treaty banned fortifying Pacific islands. This made the ability to *seize* and *build* bases quickly essential. The treaty inadvertently necessitated the amphibious capability.",
        "key_manifestations": [
          "Washington Treaty non-fortification clause (Legal Event)",
          "Mussolini (Event)",
          "Waste Land (Poem)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 6.0,
        "description": "Stasis. The Culebra Maneuvers. US Navy exercises. Tested landing marines. The results were poor. Equipment was lacking. The 'Gallipoli Ghost' still haunted the planners.",
        "key_manifestations": [
          "Culebra Maneuvers (Event)",
          "Ruhr Occupation (Event)",
          "Beer Hall Putsch (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 7.0,
        "description": "Fleet Problem III (+1.0%). US Navy. Simulated an attack on the Panama Canal. It showed the vulnerability of the canal to amphibious raid. The defensive value of the cluster was recognized.",
        "key_manifestations": [
          "Fleet Problem III (Event)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)",
          "Dawes Plan (Event)"
        ]
      },
      "1925": {
        "variance_explained": 8.0,
        "description": "Alhucemas Landing (+1.0%). Spanish landing in Morocco (Rif War). The first successful combined arms landing (tanks/planes/ships) in history. Led by Primo de Rivera (and Franco). It ended the Rif War. A proof of concept that was largely ignored by the English-speaking world.",
        "key_manifestations": [
          "Alhucemas Landing (Event)",
          "Mein Kampf (Book)",
          "Great Gatsby (Book)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 8.0,
        "description": "Stasis. US Marines landing in Nicaragua (again). Refined the logistics of the 'beachhead.' The 'Higgins' connection began to form (civilian boat builders interacting with military needs).",
        "key_manifestations": [
          "Nicaragua intervention (Event)",
          "Metropolis (Film)",
          "Sun Also Rises (Book)",
          "General Strike (Event)"
        ]
      },
      "1927": {
        "variance_explained": 9.0,
        "description": "Joint Board (+1.0%). The US Army and Navy Joint Board declared that the Marines' primary mission was 'seizing advanced bases.' The institutional mandate was sealed. The 'Amphibious Assault' was now the *raison d'etre* of the USMC.",
        "key_manifestations": [
          "Joint Board decision (Institutional Event)",
          "Jazz Singer (Film)",
          "Being and Time (Book)",
          "Shanghai Massacre (Event)"
        ]
      },
      "1928": {
        "variance_explained": 9.0,
        "description": "Stasis. Kellogg-Briand. Peace. Budgets cut. But the USMC schools at Quantico began studying Gallipoli in detail. Not to mourn it, but to fix it. 'Why did it fail?' (Command, Loading, Support).",
        "key_manifestations": [
          "Quantico studies (Intellectual Event)",
          "Kellogg-Briand (Event)",
          "Lady Chatterley (Book)",
          "Mickey Mouse (Cultural)"
        ]
      },
      "1929": {
        "variance_explained": 9.0,
        "description": "Stasis. The Crash. No money for new boats. The doctrine was 'paper doctrine.' The Japanese began practicing landings in China. They developed the 'Daihatsu' landing craft (bow ramp) before the US.",
        "key_manifestations": [
          "Japanese landing exercises (Event)",
          "Wall Street Crash (Event)",
          "All Quiet (Book)",
          "Young Plan (Event)"
        ]
      },
      "1930": {
        "variance_explained": 10.0,
        "description": "The Christie Tank (+1.0%). The USMC looked at amphibious tanks. The idea of 'Swimming Armor.' Prototypes failed, but the requirement was written. The integration of the tank into the landing force.",
        "key_manifestations": [
          "Amphibious tank concepts (Tech Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "Salt March (Event)"
        ]
      },
      "1931": {
        "variance_explained": 10.0,
        "description": "Stasis. Manchuria. Japan moved troops by sea, but mostly through ports. The 'Amphibious' nature of the Japanese expansion was disguised by their control of the littoral.",
        "key_manifestations": [
          "Invasion of Manchuria (Event)",
          "M (Film)",
          "Mukden Incident (Event)",
          "Empire State Building (Event)"
        ]
      },
      "1932": {
        "variance_explained": 12.0,
        "description": "Shanghai Incident (+2.0%). Japanese marines landed in Shanghai. Urban combat. They used specialized landing craft. US observers saw it. 'The Japanese are ahead of us.' The threat was visualized.",
        "key_manifestations": [
          "Japanese landing in Shanghai (Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Event)",
          "Bonus Army (Event)"
        ]
      },
      "1933": {
        "variance_explained": 15.0,
        "description": "Fleet Marine Force (+3.0%). The FMF was created. A dedicated amphibious fighting force within the Navy. Not just base guards. A specialized army. The structure for WWII was built.",
        "key_manifestations": [
          "Creation of FMF (Institutional Event)",
          "King Kong (Film)",
          "Hitler Chancellor (Event)",
          "Reichstag Fire (Event)"
        ]
      },
      "1934": {
        "variance_explained": 20.0,
        "description": "Tentative Manual for Landing Operations (+5.0%). The Bible. The USMC codified the doctrine. Six elements: Command, Ship-to-Shore, Gunfire, Air Support, Logistics, Communications. It solved the Gallipoli puzzle on paper. The intellectual variance peaked.",
        "key_manifestations": [
          "Tentative Manual published (Doctrine)",
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 22.0,
        "description": "FLEX 1 (+2.0%). Fleet Landing Exercise 1. Culebra. Testing the manual. It was a disaster (boats broke, comms failed). But they learned. 'Failure is the teacher.' The Higgins Boat (Eureka) was identified as a potential solution.",
        "key_manifestations": [
          "FLEX 1 (Event)",
          "Higgins Eureka boat trials (Tech Event)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 25.0,
        "description": "The Roebling Alligator (+3.0%). The LVT (Landing Vehicle Tracked). Originally a rescue vehicle for swamps. The Marines saw it: 'It can cross the reef.' The solution to the Tarawa problem (coral). The mechanics of the cluster were falling into place.",
        "key_manifestations": [
          "Roebling Alligator trials (Tech Event)",
          "Spanish Civil War (Mallorca landing attempt - failed)",
          "General Theory (Book)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 28.0,
        "description": "Japanese Landings in China (+3.0%). Hangzhou Bay. The Japanese landed an army on an undefended coast to outflank Shanghai. Perfect execution. It confirmed that amphibious flanking was the key to breaking a stalemate. The US accelerated FLEX exercises.",
        "key_manifestations": [
          "Hangzhou Bay Landing (Event)",
          "Guernica (Event)",
          "Snow White (Film)",
          "Rape of Nanking (Event)"
        ]
      },
      "1938": {
        "variance_explained": 30.0,
        "description": "FLEX 4 (+2.0%). The Higgins Boat (LCVP) adopted. The ramp was added. Now troops could run out, not climb over. Speed. The 'Amphibious Tractor' (LVT) development funded.",
        "key_manifestations": [
          "FLEX 4 (Event)",
          "Adoption of Higgins Boat (Tech Event)",
          "Munich Crisis (Event)",
          "Nausea (Book)"
        ]
      },
      "1939": {
        "variance_explained": 30.0,
        "description": "Stasis. War in Europe. No landings. The focus was on Blitzkrieg (land). The British began to think about 'Raids' (Commandos). The 'Combined Operations' directorate formed (Keyes).",
        "key_manifestations": [
          "Formation of Combined Ops (Institutional Event)",
          "Invasion of Poland (Land war)",
          "Grapes of Wrath (Book)",
          "Wizard of Oz (Film)"
        ]
      },
      "1940": {
        "variance_explained": 35.0,
        "description": "Dunkirk and Commando Raids (+5.0%). Dunkirk was a reverse amphibious op. It showed the importance of small craft. Churchill ordered 'Commando' raids. The need to 'Return to the Continent' birthed the LST (Landing Ship Tank). 'The Tank must land ready to fight.'",
        "key_manifestations": [
          "Dunkirk (Event)",
          "Operation Collar (First Commando raid)",
          "Design of LST (Tech Event)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 40.0,
        "description": "The Ramp (+5.0%). The bow ramp became standard. US Marines practiced ramp landings. The Japanese landed in Malaya/Philippines with speed. The 'Bicycle Blitzkrieg' relied on coastal hops. The enemy was proficient.",
        "key_manifestations": [
          "Japanese landings in Malaya (Event)",
          "Pearl Harbor (Event)",
          "Citizen Kane (Film)",
          "Atlantic Charter (Event)"
        ]
      },
      "1942": {
        "variance_explained": 55.0,
        "description": "Guadalcanal and Torch (+15.0%). The reality. Guadalcanal: The Navy withdrew, leaving Marines stranded. Logistics failure. But they held. Torch: Landings in North Africa. Chaos, but success. The 'Amphibious War' had begun. The LSTs arrived. 'Large Slow Targets' or 'Landing Ship Tank'.",
        "key_manifestations": [
          "Guadalcanal Landings (Event)",
          "Operation Torch (Event)",
          "Dieppe Raid (Disaster - learning the hard way)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 75.0,
        "description": "Tarawa (+20.0%). The shock. The tides failed. Marines waded 500 yards into machine guns. 1,000 dead in 76 hours. The lesson: You need LVTs (Amtracs). You need massive naval gunfire. You need 'Frogmen' (UDT) to clear obstacles. The doctrine was forged in blood. In Sicily/Italy, the DUKW (truck) revolutionized logistics.",
        "key_manifestations": [
          "Battle of Tarawa (Event)",
          "Invasion of Sicily (Husky) (Event)",
          "Introduction of DUKW (Tech Event)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 95.0,
        "description": "Overlord and the Marianas (+20.0%). The Peak. D-Day. 150,000 men in one day. Mulberries. PLUTO. The logistics were unstoppable. In the Pacific, Saipan/Tinian/Guam. Massive fleets. The 'Fast Carrier Task Force' supported the landings. The ability to project a city anywhere in the world.",
        "key_manifestations": [
          "D-Day (Event)",
          "Mulberry Harbors (Tech Event)",
          "Marianas Campaign (Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "Iwo Jima and Okinawa (+5.0%). The Grind. The Japanese stopped defending the beach and defended the caves. The cost rose. The 'Kamikaze' attacked the fleet. The amphibious force was the primary target. The planned invasion of Japan (Olympic) would have been the ultimate manifestation. The Bomb made it unnecessary.",
        "key_manifestations": [
          "Iwo Jima (Event)",
          "Okinawa (Event)",
          "Hiroshima (The alternative)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 90.0,
        "description": "Demobilization (-10.0%). The fleet was scrapped. The USMC fought for its life against the Army/Air Force ('We don't need Marines in the atomic age'). The capability atrophied.",
        "key_manifestations": [
          "Scrapping of LSTs (Event)",
          "USMC survival hearings (Institutional Event)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain (Event)"
        ]
      },
      "1947": {
        "variance_explained": 85.0,
        "description": "National Security Act (-5.0%). The Marines were preserved by law (Congress protected them). Their mission: 'Amphibious Operations.' But the budget was tiny. Vertical Envelopment (Helicopters) began to be studied as the answer to the Bomb.",
        "key_manifestations": [
          "National Security Act (Legal Event)",
          "HMX-1 Helicopter Squadron formed (Tech Event)",
          "Truman Doctrine (Event)",
          "Streetcar Named Desire (Play)"
        ]
      },
      "1948": {
        "variance_explained": 85.0,
        "description": "Operation Packard (+0.0%). First helicopter exercise. The realization that the beach was a death trap in nuclear war. You must fly over it. The 'New Doctrine' gestating.",
        "key_manifestations": [
          "Operation Packard (Event)",
          "Berlin Airlift (Air logistics)",
          "1948 Arab-Israeli War (Event)",
          "Naked and the Dead (Book)"
        ]
      },
      "1949": {
        "variance_explained": 80.0,
        "description": "Revolt of the Admirals (-5.0%). The Navy focused on carriers vs bombers. Amphibious ops were seen as 'secondary.' The USMC was at its nadir.",
        "key_manifestations": [
          "Revolt of the Admirals (Event)",
          "Soviet Bomb (Event)",
          "NATO (Land defense of Europe)",
          "Death of a Salesman (Play)"
        ]
      },
      "1950": {
        "variance_explained": 90.0,
        "description": "Inchon (+10.0%). The Resurrection. MacArthur. The 'Impossible Landing.' It worked. It saved the USMC and the Amphibious Doctrine. It proved that even in the Atomic Age, you need to put boots on the ground from the sea. The cluster was validated for the Cold War.",
        "key_manifestations": [
          "Inchon Landing (Event)",
          "Korean War (Event)",
          "The Lonely Crowd (Book)",
          "All About Eve (Film)"
        ]
      }
    }
  },
  "19_psychological_propaganda_warfare": {
    "name": "Psychological Propaganda Warfare (The Weaponized Mind)",
    "description": "The industrial production of 'Truth' and 'Hate.' Utilizing mass media (Press, Radio, Cinema) to mobilize the home front and demoralize the enemy. It shifts from the clumsy 'Atrocity Stories' of WWI to the sophisticated 'Big Lie' of the Nazis and the 'Voice of America.' It represents the battlefield of the mind.",
    "trajectory": {
      "1890": {
        "variance_explained": 5.0,
        "description": "The era of the Press Baron. Hearst and Pulitzer. 'Yellow Journalism.' The ability to manufacture public outrage for profit. The 'Weapon' was commercial, not yet fully state-controlled. The 'Displacing Force' was the lingering belief in rational public discourse.",
        "key_manifestations": [
          "Hearst/Pulitzer circulation war (Media Event)",
          "Sherman Antitrust Act (Event)",
          "Sign of Four (Book)",
          "Bismarck's dismissal (End of the master manipulator)"
        ]
      },
      "1891": {
        "variance_explained": 5.0,
        "description": "Stasis. The 'Pan-German League' began using pamphlets to agitate for empire. The beginning of interest-group propaganda. In Russia, the state used anti-semitic propaganda to divert anger from famine.",
        "key_manifestations": [
          "Pan-German League pamphlets (Propaganda)",
          "Russian famine propaganda (Event)",
          "Light That Failed (Book)",
          "Rerum Novarum (Counter-propaganda of the Church)"
        ]
      },
      "1892": {
        "variance_explained": 5.2,
        "description": "The Cholera Riots (+0.2%). Rumors spread that doctors were poisoning the poor. 'Oral Propaganda' (Rumor) as a destabilizing force. The state struggled to control the narrative. The limits of the printing press.",
        "key_manifestations": [
          "Cholera rumors (Event)",
          "Homestead Strike (Press coverage bias)",
          "Germinal (Book)",
          "Ravachol (Deed as propaganda)"
        ]
      },
      "1893": {
        "variance_explained": 5.5,
        "description": "Franco-Russian Alliance (+0.3%). Celebrated with massive orchestrated festivals. 'Propaganda of the Spectacle.' Visualizing the alliance for the masses to ensure support.",
        "key_manifestations": [
          "Visit of Russian Fleet to Toulon (Event)",
          "Chicago World's Fair (Propaganda of Progress)",
          "Frontier Thesis (National Myth making)",
          "Dvorak (Cultural)"
        ]
      },
      "1894": {
        "variance_explained": 6.0,
        "description": "Dreyfus Affair (+0.5%). The Press War. 'J'Accuse' vs 'The Syndicate.' The media split the nation. Anti-semitic papers (*La Libre Parole*) weaponized hate. The proof that the press could override the courts.",
        "key_manifestations": [
          "Anti-Dreyfusard press campaign (Event)",
          "Jungle Book (Book)",
          "Sino-Japanese War (Japanese propaganda of 'Civilization')",
          "Tsar's Coronation (Spectacle)"
        ]
      },
      "1895": {
        "variance_explained": 6.5,
        "description": "Le Bon's *The Crowd* (+0.5%). The manual. 'The crowd is impressed only by excessive sentiments.' It codified how to manipulate the masses. It was read by future dictators. The theory of propaganda was born.",
        "key_manifestations": [
          "The Crowd published (Book)",
          "Lumiere Films (New medium for persuasion)",
          "Time Machine (Book)",
          "Cuban War (Hearst's focus)"
        ]
      },
      "1896": {
        "variance_explained": 7.0,
        "description": "The 'Cross of Gold' (+0.5%). Bryan. Political rhetoric as mass mobilization. The whistle-stop tour. The spoken word amplified by the telegraph. The 'Campaign' became a war.",
        "key_manifestations": [
          "Cross of Gold Speech (Rhetoric)",
          "Daily Mail founded (Mass market press)",
          "Island of Dr. Moreau (Book)",
          "Adwa (Event)"
        ]
      },
      "1897": {
        "variance_explained": 7.5,
        "description": "Zionist Congress (+0.5%). Herzl. Creating a national consciousness through media. *Die Welt*. The 'Flag' and the 'Anthem.' Propaganda creating a nation from a diaspora.",
        "key_manifestations": [
          "First Zionist Congress (Event)",
          "Dracula (Book)",
          "Diamond Jubilee (Imperial propaganda)",
          "Tirpitz's Navy League (Lobbying)"
        ]
      },
      "1898": {
        "variance_explained": 10.0,
        "description": "The Spanish-American War (+2.5%). 'Remember the Maine.' Hearst remade reality. 'You furnish the pictures, I'll furnish the war.' The first war caused by media. The state followed the press.",
        "key_manifestations": [
          "Yellow Journalism peak (Event)",
          "War of the Worlds (Book)",
          "Fashoda (Event)",
          "Zola's J'Accuse (Event)"
        ]
      },
      "1899": {
        "variance_explained": 10.5,
        "description": "Boer War (+0.5%). The 'Black Week' was managed by censorship. The first modern 'War Correspondents' (Churchill). The battle to control the narrative at home. *The White Man's Burden*\u2014imperial propaganda.",
        "key_manifestations": [
          "Boer War Censorship (Policy)",
          "White Man's Burden (Poem)",
          "Hague Convention (Event)",
          "Heart of Darkness (Book)"
        ]
      },
      "1900": {
        "variance_explained": 11.0,
        "description": "Boxer Rebellion (+0.5%). The 'Yellow Peril.' Images of Chinese savagery circulated to justify the loot. The 'Hun Speech'\u2014Wilhelm II created the 'Hun' trope that would later be used *against* Germany. Self-inflicted propaganda wound.",
        "key_manifestations": [
          "Hun Speech (Rhetoric)",
          "Yellow Peril cartoons (Media)",
          "Lord Jim (Book)",
          "Interpretation of Dreams (Book)"
        ]
      },
      "1901": {
        "variance_explained": 11.0,
        "description": "Stasis. Assassination of McKinley. The press was blamed for inciting Czolgosz. The debate on 'Incitement.' Can words kill? The 'Propaganda of the Deed' was dying, replaced by the 'Propaganda of the Word.'",
        "key_manifestations": [
          "McKinley Assassination (Event)",
          "Kim (Book)",
          "Queen Victoria dies (Event)",
          "Nobel Prizes (Event)"
        ]
      },
      "1902": {
        "variance_explained": 11.5,
        "description": "Hobson's *Imperialism* (+0.5%). Critique. He exposed how the press was owned by finance. 'The manufacture of consent' (concept implied). Anti-propaganda.",
        "key_manifestations": [
          "Imperialism: A Study (Book)",
          "Heart of Darkness (Book)",
          "End of Boer War (Event)",
          "Coronation of Edward VII (Spectacle)"
        ]
      },
      "1903": {
        "variance_explained": 12.0,
        "description": "The Protocols (+0.5%). *The Protocols of the Elders of Zion*. Published in Russia. The most successful piece of 'Black Propaganda' in history. A forgery that fueled a century of hate. The weaponization of conspiracy.",
        "key_manifestations": [
          "Protocols published (Text)",
          "Call of the Wild (Book)",
          "Pogroms (Event)",
          "Wright Flight (Event)"
        ]
      },
      "1904": {
        "variance_explained": 12.5,
        "description": "Russo-Japanese War (+0.5%). Japan invited Western observers and journalists. Managed access. They curated their image as 'Civilized.' Russia failed the PR war. Japan won the sympathy of the West (temporarily).",
        "key_manifestations": [
          "Japanese press management (Policy)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)",
          "Entente Cordiale (Event)"
        ]
      },
      "1905": {
        "variance_explained": 13.0,
        "description": "Potemkin Mutiny (+0.5%). The event was minor, but the *myth* became huge (later Eisenstein film). The revolution was fueled by underground presses (*Iskra*). Lenin: 'A newspaper is a collective organizer.'",
        "key_manifestations": [
          "Iskra distribution (Event)",
          "Potemkin Mutiny (Event)",
          "Einstein (Science)",
          "Bloody Sunday (Event)"
        ]
      },
      "1906": {
        "variance_explained": 13.5,
        "description": "The Jungle (+0.5%). Sinclair. Muckraking. Propaganda for socialism that worked as propaganda for hygiene. It showed the power of the novel to change law. The 'Investigative Journalist' as soldier.",
        "key_manifestations": [
          "The Jungle (Book)",
          "Pure Food and Drug Act (Result)",
          "San Francisco Earthquake (Event)",
          "Dreadnought (Event)"
        ]
      },
      "1907": {
        "variance_explained": 13.5,
        "description": "Stasis. The Great White Fleet tour. Naval propaganda. 'Join the Navy and See the World.' The projection of power through spectacle.",
        "key_manifestations": [
          "Great White Fleet (Event)",
          "Secret Agent (Book)",
          "Picasso (Art)",
          "Hague Convention (Event)"
        ]
      },
      "1908": {
        "variance_explained": 14.0,
        "description": "Scouting for Boys (+0.5%). Baden-Powell. Indoctrination of youth. Citizenship, Empire, Obedience. A soft propaganda of lifestyle. It created the 'British Character' for the next war.",
        "key_manifestations": [
          "Scouting for Boys (Book)",
          "War in the Air (Book)",
          "Young Turk Revolution (Event)",
          "Bosnian Crisis (Event)"
        ]
      },
      "1909": {
        "variance_explained": 14.5,
        "description": "Futurist Manifesto (+0.5%). Marinetti. 'We will glorify war.' Art as propaganda for violence. It broke the aesthetic of peace. The 'Phantom Airship' scare was a media-generated panic.",
        "key_manifestations": [
          "Futurist Manifesto (Art)",
          "Phantom Airship Scare (Event)",
          "Machine Stops (Story)",
          "Bleriot (Event)"
        ]
      },
      "1910": {
        "variance_explained": 15.0,
        "description": "The Great Illusion (+0.5%). Angell. Propaganda for Peace. It sold millions. It convinced the liberals that war was over. A 'Disarming' idea. It left them unprepared for the irrationality of 1914.",
        "key_manifestations": [
          "Great Illusion (Book)",
          "Halley's Comet (Panic)",
          "Howards End (Book)",
          "Mexican Revolution (Event)"
        ]
      },
      "1911": {
        "variance_explained": 15.0,
        "description": "Stasis. Agadir. The press whipped up war fever in Germany and UK. 'We want eight and we won't wait' (Dreadnoughts). The slogan as policy driver.",
        "key_manifestations": [
          "Naval slogans (Rhetoric)",
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Official Secrets Act (Event)"
        ]
      },
      "1912": {
        "variance_explained": 15.0,
        "description": "Stasis. Titanic. The myth of the band playing 'Nearer My God to Thee.' The construction of the 'Stoic British' identity in disaster. Propaganda of the self.",
        "key_manifestations": [
          "Titanic myths (Cultural Event)",
          "Lost World (Book)",
          "Balkan Wars (Atrocity photos circulated)",
          "Jung (Psychology)"
        ]
      },
      "1913": {
        "variance_explained": 15.0,
        "description": "Stasis. The Rite of Spring. The breakdown of the old order. Cultural preparation for chaos. The 'Zabern Affair'\u2014the press exposed military arrogance, but the military won. The limits of the press.",
        "key_manifestations": [
          "Zabern Affair (Event)",
          "Rite of Spring (Event)",
          "Sons and Lovers (Book)",
          "Federal Reserve (Event)"
        ]
      },
      "1914": {
        "variance_explained": 30.0,
        "description": "Wellington House (+15.0%). War. Britain cut the cables (Cluster 6) and controlled the news. 'The Rape of Belgium.' Atrocity propaganda. 'The Angel of Mons.' The mobilization of authors (Wells, Doyle). The aim: Bring the US in. Germany failed at this ('The Manifesto of the 93' was arrogant). The UK won the PR war in the first month.",
        "key_manifestations": [
          "Wellington House founded (Institutional Event)",
          "Rape of Belgium stories (Propaganda)",
          "Manifesto of the 93 (German failure)",
          "39 Steps (Book)"
        ]
      },
      "1915": {
        "variance_explained": 35.0,
        "description": "The Bryce Report (+5.0%). Official report on German atrocities. Babies on bayonets. Mostly exaggerated or fake, but presented as fact by a respected jurist. It hardened US opinion. The *Lusitania* medal (German) was used by the British to show German callousness.",
        "key_manifestations": [
          "Bryce Report (Document)",
          "Lusitania Medal (Propaganda Artifact)",
          "Edith Cavell execution ('Barbarism')",
          "Birth of a Nation (Film - domestic propaganda)"
        ]
      },
      "1916": {
        "variance_explained": 38.0,
        "description": "Battle of the Somme Film (+3.0%). The first feature-length war documentary. Shown to civilians. Real dead bodies. It brought the front home. It was meant to show 'Reality' but it unified the nation in shared grief/resolve. The 'Propaganda of Truth' (curated).",
        "key_manifestations": [
          "Battle of the Somme film (Media Event)",
          "Raemaekers' cartoons (Anti-German art)",
          "Easter Rising (The proclamation as text)",
          "Arab Revolt (Lawrence's narrative)"
        ]
      },
      "1917": {
        "variance_explained": 50.0,
        "description": "The Creel Committee (+12.0%). US Entry. The Committee on Public Information (CPI). George Creel. 'Four Minute Men'\u201475,000 speakers. Posters ('I Want You'). Bernays. It was total mobilization of the mind. It created a hysteria against anything German (Sauerkraut = Liberty Cabbage). The birth of modern advertising.",
        "key_manifestations": [
          "CPI founded (Institutional Event)",
          "Four Minute Men (Event)",
          "I Want You poster (Art)",
          "Balfour Declaration (Propaganda to Jews)"
        ]
      },
      "1918": {
        "variance_explained": 55.0,
        "description": "Paper Warfare (+5.0%). Leaflet balloons over Germany. Northcliffe's Ministry of Information. They targeted German morale. 'The Kaiser is the obstacle to peace.' It worked. The German home front collapsed. Hitler noted this: 'We were defeated by Jewish-Marxist propaganda.' The 'Stab in the Back' myth was born.",
        "key_manifestations": [
          "Crewe House leafleting (Event)",
          "Stab in the Back myth (Propaganda)",
          "Wilson's 14 Points (Ideological weapon)",
          "Armistice (Event)"
        ]
      },
      "1919": {
        "variance_explained": 40.0,
        "description": "The Reaction (-15.0%). The public realized they were lied to (The Corpse Factory myth debunked). 'Propaganda' became a dirty word. Cynicism. The US retreated into isolation. The Soviets founded the Comintern\u2014Agitprop. The 'Red Scare' was the new narrative.",
        "key_manifestations": [
          "Exposing of Atrocity lies (Event)",
          "Comintern Agitprop (Institutional Event)",
          "Red Scare (Event)",
          "Versailles (Event)"
        ]
      },
      "1920": {
        "variance_explained": 40.0,
        "description": "Stasis. Radio begins (KDKA). The potential for direct-to-home propaganda was born. The Soviets used 'Agit-trains' to spread the revolution. Art (Constructivism) as propaganda.",
        "key_manifestations": [
          "KDKA broadcast (Tech Event)",
          "Soviet Agit-trains (Event)",
          "Women in Love (Book)",
          "Kapp Putsch (Event)"
        ]
      },
      "1921": {
        "variance_explained": 42.0,
        "description": "Lippmann's *Public Opinion* (+2.0%). The theory of the 'Stereotype.' 'Manufacturing Consent.' The realization that democracy could be managed by elites using media. The intellectualization of the cluster.",
        "key_manifestations": [
          "Public Opinion by Lippmann (Book)",
          "Tractatus (Philosophy)",
          "R.U.R. (Play)",
          "Mussolini (The pose)"
        ]
      },
      "1922": {
        "variance_explained": 45.0,
        "description": "The BBC (+3.0%). State-chartered monopoly. 'Reithian' values. Uplift and Unity. A softer, paternalistic propaganda. Mussolini's March on Rome\u2014the propaganda of the deed and the uniform. The aesthetics of Fascism.",
        "key_manifestations": [
          "BBC founded (Institutional Event)",
          "March on Rome (Event)",
          "Waste Land (Poem)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 48.0,
        "description": "Bernays' *Crystallizing Public Opinion* (+3.0%). The father of PR. Applying wartime techniques to peacetime business. 'Torches of Freedom' (women smoking). Propaganda became 'Public Relations.' Hitler in prison wrote *Mein Kampf*, obsessing over Allied propaganda success.",
        "key_manifestations": [
          "Crystallizing Public Opinion (Book)",
          "Beer Hall Putsch (Event)",
          "Hyperinflation (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 50.0,
        "description": "The Zinoviev Letter (+2.0%). Black Propaganda. A forged letter influenced the British election. Intelligence services weaponizing the press. Goebbels joined the Nazi party\u2014the genius of the cluster found his vehicle.",
        "key_manifestations": [
          "Zinoviev Letter (Event)",
          "Goebbels joins Nazis (Bio Event)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 52.0,
        "description": "Mein Kampf (+2.0%). Hitler's theory: Propaganda must be simple, repetitive, and emotional. Aimed at the 'least intelligent.' The 'Big Lie.' *Battleship Potemkin*\u2014Soviet cinema as the ultimate emotional manipulator.",
        "key_manifestations": [
          "Mein Kampf (Book)",
          "Battleship Potemkin (Film)",
          "Great Gatsby (Book)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 55.0,
        "description": "Goebbels in Berlin (+3.0%). Gauleiter of Berlin. He engaged the Communists in the streets and the halls. Violence as propaganda. The creation of the 'Horst Wessel' myth (later).",
        "key_manifestations": [
          "Goebbels in Berlin (Event)",
          "Metropolis (Film)",
          "Sun Also Rises (Book)",
          "General Strike (Control of news)"
        ]
      },
      "1927": {
        "variance_explained": 55.0,
        "description": "Stasis. The Jazz Singer. Sound film. The voice could now be projected. The emotional impact of cinema doubled. Lindbergh\u2014the global celebrity hero created by media.",
        "key_manifestations": [
          "Jazz Singer (Film)",
          "Lindbergh (Event)",
          "Being and Time (Book)",
          "Shanghai Massacre (Event)"
        ]
      },
      "1928": {
        "variance_explained": 58.0,
        "description": "Bernays' *Propaganda* (+3.0%). The book. 'The conscious and intelligent manipulation of the organized habits and opinions of the masses is an important element in democratic society.' He reclaimed the word 'Propaganda.'",
        "key_manifestations": [
          "Propaganda by Bernays (Book)",
          "Mickey Mouse (Soft power)",
          "Lady Chatterley (Censorship)",
          "Kellogg-Briand (Peace propaganda)"
        ]
      },
      "1929": {
        "variance_explained": 60.0,
        "description": "The Depression (+2.0%). The failure of the capitalist narrative. The Nazis and Communists offered simple, total explanations. Propaganda thrives in misery. *All Quiet* film\u2014anti-war propaganda, attacked by Nazis (mice in the theater).",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "Nazi protests against All Quiet (Event)",
          "Young Plan (Event)",
          "Man with a Movie Camera (Film)"
        ]
      },
      "1930": {
        "variance_explained": 62.0,
        "description": "Radio in Germany (+2.0%). The Nazis realized the power of the microphone. Hitler's voice could reach millions. The 'Flight over Germany' campaign (1932)\u2014Hitler by plane. Modern tech + Medieval message.",
        "key_manifestations": [
          "Nazi election gains (Event)",
          "Blue Angel (Film)",
          "Civilization and Its Discontents (Book)",
          "Salt March (Event)"
        ]
      },
      "1931": {
        "variance_explained": 62.0,
        "description": "Stasis. The 'Mukden Incident.' False flag. Propaganda to justify war. Japan claimed self-defense. The 'Lier's War' in Manchuria.",
        "key_manifestations": [
          "Mukden Incident (Event)",
          "M (Film)",
          "Empire State Building (Event)",
          "Good Earth (Book)"
        ]
      },
      "1932": {
        "variance_explained": 65.0,
        "description": "Brave New World (+3.0%). Huxley. Hypnopaedia. Conditioning. The state controlling the mind not by pain, but by pleasure and repetition. A warning of the ultimate propaganda state.",
        "key_manifestations": [
          "Brave New World (Book)",
          "Hitler's Flight over Germany (Event)",
          "Famine in Ukraine (Denial)",
          "Bonus Army (Event)"
        ]
      },
      "1933": {
        "variance_explained": 75.0,
        "description": "Ministry of Public Enlightenment (+10.0%). Goebbels took control of all German media. Press, Radio, Art, Film. The 'Gleichschaltung.' The Volksempf\u00e4nger (People's Radio)\u2014cheap, limited range. You could only hear Him. Book Burnings\u2014erasing the alternative.",
        "key_manifestations": [
          "Ministry of Propaganda created (Institutional Event)",
          "Book Burnings (Event)",
          "Volksempf\u00e4nger (Tech Event)",
          "King Kong (Film)"
        ]
      },
      "1934": {
        "variance_explained": 80.0,
        "description": "Triumph of the Will (+5.0%). Riefenstahl. The Nuremberg Rally. Cinema as liturgy. The fusion of art and politics. It convinced the world (and Germans) that the Nazis were unified and invincible. The 'Spectacle' perfected.",
        "key_manifestations": [
          "Triumph of the Will (Film)",
          "Night of the Long Knives (Justified by propaganda)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 82.0,
        "description": "The March of Time (+2.0%). US newsreels. Dramatized news. 'Voice of God' narration. Shaping American opinion. In Germany, the 'Nuremberg Laws' were sold as 'protection of German blood.'",
        "key_manifestations": [
          "March of Time begins (Media Event)",
          "Nuremberg Laws (Event)",
          "Abyssinian Crisis (Propaganda war)",
          "Top Hat (Escapism)"
        ]
      },
      "1936": {
        "variance_explained": 85.0,
        "description": "Berlin Olympics (+3.0%). The Soft Power offensive. Germany as the 'Modern, Peaceful' state. Riefenstahl's *Olympia*. It duped the world. Television broadcast (limited) began. The Spanish Civil War\u2014propaganda posters reached a high art form.",
        "key_manifestations": [
          "Berlin Olympics (Event)",
          "Olympia (Film)",
          "Spanish Civil War posters (Art)",
          "General Theory (Book)"
        ]
      },
      "1937": {
        "variance_explained": 88.0,
        "description": "Degenerate Art (+3.0%). The exhibition. Mocking modernism. Defining what is 'Healthy' vs 'Sick.' Cultural cleansing. Guernica\u2014Picasso's painting became the counter-propaganda of the Left. Art vs Art.",
        "key_manifestations": [
          "Degenerate Art Exhibition (Event)",
          "Guernica (Art)",
          "Snow White (Disney - American soft power)",
          "Rape of Nanking (Event)"
        ]
      },
      "1938": {
        "variance_explained": 90.0,
        "description": "War of the Worlds (+2.0%). Orson Welles. The radio panicked the nation. It proved the terrifying power of the medium. The 'Munich' newsreels showed Chamberlain as a hero (briefly).",
        "key_manifestations": [
          "War of the Worlds broadcast (Event)",
          "Munich Newsreels (Media Event)",
          "Kristallnacht (Propaganda of the deed)",
          "Nausea (Book)"
        ]
      },
      "1939": {
        "variance_explained": 92.0,
        "description": "Gleiwitz (+2.0%). False Flag. The SS attacked a German radio station, posing as Poles. The pretext for war. 'Propaganda of the Incident.' Britain formed the Ministry of Information (MOI). 'Keep Calm and Carry On' (printed but not used).",
        "key_manifestations": [
          "Gleiwitz Incident (Event)",
          "MOI formed (Institutional Event)",
          "Grapes of Wrath (Book)",
          "Wizard of Oz (Film)"
        ]
      },
      "1940": {
        "variance_explained": 95.0,
        "description": "The Great Dictator (+3.0%). Chaplin. Satire as weapon. He mocked Hitler. Lord Haw-Haw (William Joyce) broadcast to UK. 'Germany Calling.' The radio traitor. Churchill's speeches\u2014the English language mobilized for war.",
        "key_manifestations": [
          "The Great Dictator (Film)",
          "Lord Haw-Haw (Event)",
          "Churchill's Speeches (Rhetoric)",
          "Fall of France (Shock)"
        ]
      },
      "1941": {
        "variance_explained": 98.0,
        "description": "V Campaign (+3.0%). BBC. 'V for Victory.' Beethoven's 5th (dot-dot-dot-dash). A sound meme. The resistance scribbled V on walls. Psychological warfare. The 'Why We Fight' series commissioned in US (Capra).",
        "key_manifestations": [
          "V Campaign (Event)",
          "Why We Fight begun (Film)",
          "Pearl Harbor (Mobilization)",
          "Citizen Kane (Media power)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "Black Propaganda (+2.0%). Sefton Delmer. 'Gustav Siegfried Eins.' Fake German stations broadcasting porn, corruption, and defeatism. Mixing dirt with truth. The 'Big Lie' met the 'Dirty Lie.'",
        "key_manifestations": [
          "Black Propaganda stations (Secret Event)",
          "Casablanca (Film - myth making)",
          "Wannsee Conference (Secret language)",
          "Mrs. Miniver (Pro-British US film)"
        ]
      },
      "1943": {
        "variance_explained": 98.0,
        "description": "Stalingrad and Katyn (-2.0%). Goebbels admitted 'Crisis.' 'Total War' speech. He used the Katyn Massacre (Soviet crime) to split the Allies. The Allies ignored it. Truth was secondary to the Alliance.",
        "key_manifestations": [
          "Sportpalast Speech (Rhetoric)",
          "Katyn revelation (Propaganda battle)",
          "Oklahoma! (Cultural)",
          "Warsaw Ghetto (Event)"
        ]
      },
      "1944": {
        "variance_explained": 95.0,
        "description": "Ghost Army (-3.0%). Deception. Inflatable tanks. Sound trucks. Sonic deception. Fortitude. Propaganda as tactical weapon. The 'Werewolf' radio\u2014threatening resistance.",
        "key_manifestations": [
          "Ghost Army operations (Event)",
          "Operation Fortitude (Deception)",
          "Henry V (Olivier film - patriotism)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 90.0,
        "description": "Atrocity Films (-5.0%). Hitchcock and others edited the concentration camp footage. Shown to Germans. 'Compulsory Viewing.' De-Nazification. The image as judge. The end of the Nazi myth.",
        "key_manifestations": [
          "Camp liberation films (Event)",
          "Hiroshima (The ultimate signal)",
          "Animal Farm (Anti-Soviet allegory)",
          "Yalta (Event)"
        ]
      },
      "1946": {
        "variance_explained": 85.0,
        "description": "Iron Curtain (-5.0%). Churchill. The phrase defined the new reality. Stalin called it 'warmongering.' The propaganda war shifted targets. The US 'Information Control Division' in Germany.",
        "key_manifestations": [
          "Iron Curtain Speech (Rhetoric)",
          "Best Years of Our Lives (Film)",
          "Nuremberg Trials (Legal propaganda)",
          "Let There Be Light (Censored film)"
        ]
      },
      "1947": {
        "variance_explained": 85.0,
        "description": "Truman Doctrine (+0.0%). 'Two Ways of Life.' Free vs Enslaved. The binary was set. The 'Cominform' founded\u2014Soviet propaganda bureau to enforce the line.",
        "key_manifestations": [
          "Truman Doctrine (Rhetoric)",
          "Cominform founded (Institutional Event)",
          "Streetcar Named Desire (Play)",
          "Hollywood Blacklist begins (Domestic purge)"
        ]
      },
      "1948": {
        "variance_explained": 88.0,
        "description": "Smith-Mundt Act (+3.0%). Legalized US propaganda abroad (Voice of America), but banned it domestically. The 'Berlin Airlift' was a massive propaganda victory\u2014food vs blockade.",
        "key_manifestations": [
          "Smith-Mundt Act (Legal Event)",
          "Berlin Airlift (Propaganda of Deed)",
          "1984 (Book - Newspeak)",
          "The Snake Pit (Film)"
        ]
      },
      "1949": {
        "variance_explained": 90.0,
        "description": "1984 (+2.0%). Orwell. The analysis of totalitarian truth. 'War is Peace.' It provided the vocabulary to fight the Cold War. The 'Peace Offensive' by Soviets (Picasso's Dove).",
        "key_manifestations": [
          "1984 published (Book)",
          "Picasso's Dove (Art)",
          "Soviet Bomb (Event)",
          "Death of a Salesman (Play)"
        ]
      },
      "1950": {
        "variance_explained": 95.0,
        "description": "Campaign of Truth (+5.0%). Truman. 'We must make ourselves heard.' Radio Free Europe. Truth as a weapon. The Korean War\u2014'Brainwashing' accusations. The battle for the mind became the primary theater.",
        "key_manifestations": [
          "Campaign of Truth speech (Event)",
          "Radio Free Europe (Institutional Event)",
          "The God That Failed (Book)",
          "McCarthyism (Domestic hysteria)"
        ]
      }
    }
  },
  "20_pacifist_disarmament_internationalism": {
    "name": "Pacifist Disarmament Internationalism (The War Against War)",
    "description": "The movement to abolish war through law, treaty, and moral refusal. It is the counter-force to all other military clusters. It peaks in the 1920s (The Spirit of Locarno) and collapses in the 1930s, surviving only as a moral witness (conscientious objectors) or mutating into 'Peace through Strength' (NATO).",
    "trajectory": {
      "1890": {
        "variance_explained": 5.0,
        "description": "The Universal Peace Congress in London. A bourgeois, elite movement. The belief that commerce and reason were making war obsolete. Bertha von Suttner's *Lay Down Your Arms* was the bestseller. The variance was high in intellectual circles, low in military ones.",
        "key_manifestations": [
          "Universal Peace Congress (Event)",
          "Lay Down Your Arms (Book)",
          "Sherman Antitrust Act (Event)",
          "Wounded Knee (Event)"
        ]
      },
      "1891": {
        "variance_explained": 5.2,
        "description": "International Peace Bureau (+0.2%). Founded in Bern. A permanent secretariat for peace. The institutionalization of the idea. Passy and Ducommun led the charge.",
        "key_manifestations": [
          "IPB founded (Institutional Event)",
          "Rome Peace Congress (Event)",
          "Light That Failed (Book)",
          "Rerum Novarum (Event)"
        ]
      },
      "1892": {
        "variance_explained": 5.2,
        "description": "Stasis. Nobel wrote his will (drafts). Influenced by Suttner. The idea of the 'Prize' began to form. The 'Inter-Parliamentary Union' met in Bern.",
        "key_manifestations": [
          "Inter-Parliamentary Union meeting (Event)",
          "Nobel-Suttner correspondence (Event)",
          "Germinal (Book)",
          "Cholera (Event)"
        ]
      },
      "1893": {
        "variance_explained": 5.5,
        "description": "Tolstoy's *The Kingdom of God is Within You* (+0.3%). Christian Anarchist Pacifism. 'Resist not evil.' Influenced Gandhi. A moral, absolute rejection of the state and war.",
        "key_manifestations": [
          "Kingdom of God is Within You (Book)",
          "Chicago Peace Congress (Event)",
          "Frontier Thesis (Event)",
          "New World Symphony (Cultural)"
        ]
      },
      "1894": {
        "variance_explained": 5.5,
        "description": "Stasis. The Sino-Japanese War. The peace movement condemned it, but had no leverage. The 'Red Cross' (humanitarian arm) was active, but the 'Peace' arm was ignored.",
        "key_manifestations": [
          "Peace Bureau protests (Event)",
          "Jungle Book (Book)",
          "Dreyfus Affair (Event)",
          "Port Arthur Massacre (Event)"
        ]
      },
      "1895": {
        "variance_explained": 5.8,
        "description": "Nobel's Will (+0.3%). The Peace Prize established. 'For the person who shall have done the most or the best work for fraternity between nations.' It gave the movement capital and prestige.",
        "key_manifestations": [
          "Nobel Will signed (Event)",
          "Time Machine (Book)",
          "Venezuela Arbitration (Success)",
          "Cuban War (Event)"
        ]
      },
      "1896": {
        "variance_explained": 6.0,
        "description": "Arbitration Treaty (+0.2%). US and UK signed a general arbitration treaty (Olney-Pauncefote). It failed in the Senate, but the *idea* of compulsory arbitration was peak liberal internationalism.",
        "key_manifestations": [
          "Olney-Pauncefote Treaty signed (Event)",
          "Adwa (Event)",
          "Island of Dr. Moreau (Book)",
          "Olympics (Event)"
        ]
      },
      "1897": {
        "variance_explained": 6.0,
        "description": "Stasis. Bloch began writing *The Future of War*. Scientific Pacifism. War is impossible because it is suicidal. A rationalist argument against Cluster 1.",
        "key_manifestations": [
          "Bloch research (Intellectual Event)",
          "Dracula (Book)",
          "Diamond Jubilee (Event)",
          "Tirpitz Plan (Event)"
        ]
      },
      "1898": {
        "variance_explained": 6.5,
        "description": "Tsar's Rescript (+0.5%). Nicholas II called for disarmament. The first head of state to do so. Cynical (Russia was broke), but it galvanized the movement. *The Great Illusion* (early version) ideas percolating.",
        "key_manifestations": [
          "Tsar's Rescript (Event)",
          "War of the Worlds (Book)",
          "Spanish-American War (Event)",
          "Zola (Event)"
        ]
      },
      "1899": {
        "variance_explained": 8.0,
        "description": "Hague Conference (+1.5%). The Peace Palace. Permanent Court of Arbitration. Disarmament failed, but the 'Laws of War' were codified. The belief in 'Law' over 'Force.'",
        "key_manifestations": [
          "Hague Convention (Event)",
          "White Man's Burden (Event)",
          "Heart of Darkness (Book)",
          "Boer War (Event)"
        ]
      },
      "1900": {
        "variance_explained": 7.0,
        "description": "Boer War Opposition (-1.0%). The movement split. Liberals (Lloyd George) opposed the war. 'Pro-Boers.' But the jingoist mob smashed their meetings. Pacifism was unpatriotic.",
        "key_manifestations": [
          "Pro-Boer meetings (Event)",
          "Khaki Election (Defeat of pacifists)",
          "Lord Jim (Book)",
          "Boxer Rebellion (Event)"
        ]
      },
      "1901": {
        "variance_explained": 7.5,
        "description": "First Nobel Prize (+0.5%). Passy (IPU) and Dunant (Red Cross). The canonization of the peace heroes. It kept the flame alive during the imperial wars.",
        "key_manifestations": [
          "Nobel Prize Award (Event)",
          "Kim (Book)",
          "Queen Victoria dies (Event)",
          "Insular Cases (Event)"
        ]
      },
      "1902": {
        "variance_explained": 7.5,
        "description": "Stasis. End of Boer War. The peace movement claimed vindication (the war was costly and useless). Hobson's *Imperialism* provided the economic critique: war is for investors.",
        "key_manifestations": [
          "Hobson's Imperialism (Book)",
          "Treaty of Vereeniging (Event)",
          "Heart of Darkness (Book)",
          "Drago Doctrine (Event)"
        ]
      },
      "1903": {
        "variance_explained": 7.5,
        "description": "Stasis. The Carnegie Palace of Peace funded. $1.5 million. The infrastructure of peace was being built in brick and mortar.",
        "key_manifestations": [
          "Carnegie donation (Event)",
          "Riddle of the Sands (Book)",
          "Call of the Wild (Book)",
          "Wright Flight (Event)"
        ]
      },
      "1904": {
        "variance_explained": 7.0,
        "description": "Russo-Japanese War (-0.5%). The failure of the Hague to prevent it. But the Dogger Bank arbitration prevented it from spreading to UK. A partial success for the legal method.",
        "key_manifestations": [
          "Dogger Bank Arbitration (Event)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)",
          "Entente Cordiale (Event)"
        ]
      },
      "1905": {
        "variance_explained": 8.0,
        "description": "Suttner Nobel (+1.0%). Bertha von Suttner won. The first woman. The author of the movement. Separation of Norway/Sweden\u2014a peaceful secession. Proof it could work.",
        "key_manifestations": [
          "Suttner Nobel Prize (Event)",
          "Norway-Sweden Dissolution (Event)",
          "Einstein (Science)",
          "Revolution of 1905 (Event)"
        ]
      },
      "1906": {
        "variance_explained": 8.0,
        "description": "Stasis. Roosevelt Nobel. A warrior winning the peace prize (for Portsmouth). The definition of 'Pacifism' widened to include 'Diplomacy.'",
        "key_manifestations": [
          "TR Nobel Prize (Event)",
          "The Jungle (Book)",
          "Dreadnought (Event)",
          "San Francisco Earthquake (Event)"
        ]
      },
      "1907": {
        "variance_explained": 8.5,
        "description": "Second Hague Conference (+0.5%). Failed to limit arms. But expanded arbitration. The US pushed for a world court. The momentum was still there, though slowed by the Dreadnought race.",
        "key_manifestations": [
          "Second Hague Conference (Event)",
          "Secret Agent (Book)",
          "Picasso (Art)",
          "Triple Entente (Event)"
        ]
      },
      "1908": {
        "variance_explained": 8.0,
        "description": "Bosnian Crisis (-0.5%). Power politics crushed legalism. The Peace Movement looked helpless against Aehrenthal's fait accompli. Arnoldson/Bajer Nobel.",
        "key_manifestations": [
          "Nobel Prize (Event)",
          "Bosnian Crisis (Event)",
          "War in the Air (Book)",
          "Young Turks (Event)"
        ]
      },
      "1909": {
        "variance_explained": 8.0,
        "description": "Stasis. Angell writing *Europe's Optical Illusion*. The economic argument was sharpening. Beernaert/Estournelles Nobel.",
        "key_manifestations": [
          "Nobel Prize (Event)",
          "Machine Stops (Story)",
          "Futurist Manifesto (Art)",
          "Bleriot (Event)"
        ]
      },
      "1910": {
        "variance_explained": 10.0,
        "description": "The Great Illusion (+2.0%). Angell. The bible of pre-war pacifism. It argued war was obsolete. A massive bestseller. It convinced a generation of liberals that the bankers would stop the war. Carnegie Endowment founded.",
        "key_manifestations": [
          "Great Illusion (Book)",
          "Carnegie Endowment (Institutional Event)",
          "Howards End (Book)",
          "Mexican Revolution (Event)"
        ]
      },
      "1911": {
        "variance_explained": 9.5,
        "description": "Agadir (-0.5%). The bankers did NOT stop the crisis; the gunboats did. But the peace movement mobilized massive protests in Berlin and Paris. International Socialist Bureau met.",
        "key_manifestations": [
          "Socialist anti-war rallies (Event)",
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Taylorism (Event)"
        ]
      },
      "1912": {
        "variance_explained": 9.0,
        "description": "Basle Congress (-0.5%). The Second International. 'War on War.' They pledged to strike if war came. The 'Manifesto of Basle.' High rhetoric, low organization.",
        "key_manifestations": [
          "Basle Congress (Event)",
          "Titanic (Event)",
          "Lost World (Book)",
          "Balkan Wars (Event)"
        ]
      },
      "1913": {
        "variance_explained": 9.0,
        "description": "Peace Palace Opens (+0.0%). Carnegie's gift. A cruel irony one year before the abyss. The legal structure was perfect; the political foundation was rotten.",
        "key_manifestations": [
          "Peace Palace opening (Event)",
          "Rite of Spring (Cultural)",
          "Zabern Affair (Event)",
          "Federal Reserve (Event)"
        ]
      },
      "1914": {
        "variance_explained": 2.0,
        "description": "The Collapse (-7.0%). War. The Socialists voted for credits. The International collapsed. Jaures assassinated. Pacifism was crushed by Nationalism. Only a tiny minority (Russell, Liebknecht) held out. The 'War to End War' rhetoric co-opted the pacifist dream.",
        "key_manifestations": [
          "Assassination of Jaures (Event)",
          "SPD votes for war credits (Event)",
          "Russell's pamphlets (Event)",
          "Christmas Truce (Event)"
        ]
      },
      "1915": {
        "variance_explained": 3.0,
        "description": "Zimmerwald Conference (+1.0%). Anti-war socialists met in Switzerland. Lenin vs Pacifists. The seed of the Third International. Women's Peace Congress at The Hague (Jane Addams). The flame flickered.",
        "key_manifestations": [
          "Zimmerwald Conference (Event)",
          "Women's Peace Congress (Event)",
          "Lusitania (Event)",
          "Rainbow (Book)"
        ]
      },
      "1916": {
        "variance_explained": 3.0,
        "description": "Stasis. Conscription in UK. Conscientious Objectors ('Conchies') imprisoned. Moral witness. The 'League to Enforce Peace' formed in US\u2014the idea of a League of Nations.",
        "key_manifestations": [
          "League to Enforce Peace (Institutional Event)",
          "Imprisonment of COs (Event)",
          "Somme (Event)",
          "Easter Rising (Event)"
        ]
      },
      "1917": {
        "variance_explained": 4.0,
        "description": "Peace without Victory (+1.0%). Wilson's speech. The Pope's Peace Note. Attempts to stop the grinder. Failed. The Russian Revolution promised peace but brought civil war.",
        "key_manifestations": [
          "Peace without Victory speech (Rhetoric)",
          "Papal Note (Event)",
          "Russian Decree on Peace (Event)",
          "Zimmerman Telegram (Event)"
        ]
      },
      "1918": {
        "variance_explained": 5.0,
        "description": "14 Points (+1.0%). Wilson. A program for peace. Self-determination. League of Nations. It gave the war a moral purpose again. The Armistice was signed on these terms.",
        "key_manifestations": [
          "14 Points (Document)",
          "Armistice (Event)",
          "Decline of the West (Book)",
          "Spanish Flu (Event)"
        ]
      },
      "1919": {
        "variance_explained": 15.0,
        "description": "League of Nations (+10.0%). Created at Versailles. The dream realized (flawed). 'Collective Security.' The War Resisters International founded. A surge of hope.",
        "key_manifestations": [
          "Covenant of the League (Legal Event)",
          "WILPF founded (Institutional Event)",
          "Versailles Treaty (Event)",
          "Keynes (Book)"
        ]
      },
      "1920": {
        "variance_explained": 15.0,
        "description": "Stasis. US Senate rejected the League. A fatal blow. But the League began work. Repatriating POWs (Nansen). The 'No More War' movement began.",
        "key_manifestations": [
          "US rejection of League (Event)",
          "Nansen's work (Event)",
          "Women in Love (Book)",
          "Kapp Putsch (Event)"
        ]
      },
      "1921": {
        "variance_explained": 16.0,
        "description": "Washington Conference (+1.0%). Disarmament. Scrapping battleships. It worked. The first time Great Powers agreed to destroy weapons. A triumph for the cluster.",
        "key_manifestations": [
          "Washington Naval Treaty (Event)",
          "Tractatus (Philosophy)",
          "R.U.R. (Play)",
          "Mussolini (Event)"
        ]
      },
      "1922": {
        "variance_explained": 16.0,
        "description": "Stasis. 'No More War' demonstrations. 1922 was the year of maximum pacifist street presence. The memory of the war was fresh.",
        "key_manifestations": [
          "No More War marches (Event)",
          "Waste Land (Poem)",
          "Ulysses (Book)",
          "March on Rome (Event)"
        ]
      },
      "1923": {
        "variance_explained": 15.0,
        "description": "Ruhr Crisis (-1.0%). France invaded Germany. Passive resistance. The League was helpless. It showed the limits of moral force against bayonets.",
        "key_manifestations": [
          "Ruhr Occupation (Event)",
          "Draft Treaty of Mutual Assistance (Failed)",
          "Beer Hall Putsch (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 16.0,
        "description": "Geneva Protocol Draft (+1.0%). Herriot and MacDonald. 'Arbitration, Security, Disarmament.' It failed, but the 'Spirit of Geneva' was born.",
        "key_manifestations": [
          "Geneva Protocol negotiation (Event)",
          "Magic Mountain (Book)",
          "Dawes Plan (Event)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 18.0,
        "description": "Locarno (+2.0%). The Peace of Europe. Germany accepted the borders. Stresemann, Briand, Chamberlain. Nobel Prizes all around. The high noon of the cluster.",
        "key_manifestations": [
          "Locarno Treaties (Event)",
          "Great Gatsby (Book)",
          "Mein Kampf (Book)",
          "Geneva Gas Protocol (Event)"
        ]
      },
      "1926": {
        "variance_explained": 18.0,
        "description": "Stasis. Germany in the League. Briand-Stresemann lunch at Thoiry. Personal diplomacy. 'Away with the rifles, away with the machine guns.'",
        "key_manifestations": [
          "Germany joins League (Event)",
          "Sun Also Rises (Book)",
          "Metropolis (Film)",
          "General Strike (Event)"
        ]
      },
      "1927": {
        "variance_explained": 18.0,
        "description": "Stasis. Litvinov (USSR) proposed total disarmament at Geneva. Dismissed as propaganda. But the pressure for a pact was growing.",
        "key_manifestations": [
          "Litvinov Proposal (Event)",
          "Jazz Singer (Film)",
          "Being and Time (Book)",
          "Lindbergh (Event)"
        ]
      },
      "1928": {
        "variance_explained": 20.0,
        "description": "Kellogg-Briand Pact (+2.0%). War Outlawed. The apogee. Signed by everyone. It had no teeth, but it delegitimized conquest. Legal Pacifism triumphant.",
        "key_manifestations": [
          "Kellogg-Briand Pact (Event)",
          "Lady Chatterley (Book)",
          "Mickey Mouse (Cultural)",
          "Five Year Plan (Event)"
        ]
      },
      "1929": {
        "variance_explained": 20.0,
        "description": "Stasis. *All Quiet on the Western Front*. The film. Global pacifist phenomenon. The cultural memory of the war was now defined by waste and pity.",
        "key_manifestations": [
          "All Quiet on the Western Front (Film)",
          "Wall Street Crash (Event)",
          "Young Plan (Event)",
          "Man with a Movie Camera (Film)"
        ]
      },
      "1930": {
        "variance_explained": 18.0,
        "description": "Depression (-2.0%). Economic nationalism. The basis of internationalism crumbled. Nazis surged (18%). Their rhetoric was anti-pacifist.",
        "key_manifestations": [
          "Nazi election surge (Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "Salt March (Event)"
        ]
      },
      "1931": {
        "variance_explained": 15.0,
        "description": "Manchuria (-3.0%). The League failed to stop Japan. The Stimson Doctrine (non-recognition) was a legal ghost. The 'War Against War' was losing.",
        "key_manifestations": [
          "Mukden Incident (Event)",
          "M (Film)",
          "Empire State Building (Event)",
          "Good Earth (Book)"
        ]
      },
      "1932": {
        "variance_explained": 14.0,
        "description": "Disarmament Conference (-1.0%). Geneva. It failed. Germany demanded equality (rearmament). Einstein left the committee in disgust. The dream was dying.",
        "key_manifestations": [
          "World Disarmament Conference (Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Event)",
          "Bonus Army (Event)"
        ]
      },
      "1933": {
        "variance_explained": 12.0,
        "description": "Oxford Union Debate (-2.0%). 'This House will not fight for King and Country.' A symbolic victory for pacifism, but interpreted by Hitler/Mussolini as decadence. Germany quit the League.",
        "key_manifestations": [
          "Oxford Union Motion (Event)",
          "Hitler quits League (Event)",
          "King Kong (Film)",
          "Reichstag Fire (Event)"
        ]
      },
      "1934": {
        "variance_explained": 10.0,
        "description": "Peace Ballot (-2.0%). UK. 11 million voted. They wanted collective security *and* disarmament. A confused mandate. It paralyzed Baldwin. The Peace Pledge Union founded.",
        "key_manifestations": [
          "Peace Ballot (Event)",
          "Peace Pledge Union founded (Institutional Event)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 5.0,
        "description": "Abyssinia (-5.0%). The League died. Sanctions failed. Hoare-Laval Pact. Pacifism collapsed into 'Appeasement'\u2014avoiding war at the cost of justice.",
        "key_manifestations": [
          "Hoare-Laval Pact (Event)",
          "Failure of Sanctions (Event)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 4.0,
        "description": "Rhineland (-1.0%). Hitler marched. France did nothing. 'Why die for Danzig?' (later). The pacifist reflex prevented deterrence. Spain: The left abandoned pacifism for anti-fascism.",
        "key_manifestations": [
          "Rhineland Remilitarization (Event)",
          "Spanish Civil War (Event)",
          "General Theory (Book)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 4.0,
        "description": "Stasis. Guernica. The horror of war returned. But it didn't mobilize peace; it mobilized fear. The PPU (Dick Sheppard) peaked, but was politically irrelevant.",
        "key_manifestations": [
          "Guernica (Event)",
          "Sheppard dies (Event)",
          "Snow White (Film)",
          "Rape of Nanking (Event)"
        ]
      },
      "1938": {
        "variance_explained": 3.0,
        "description": "Munich (-1.0%). 'Peace for our time.' Chamberlain. The ultimate expression of the desire to avoid war. It was a delusion. The cluster hit rock bottom.",
        "key_manifestations": [
          "Munich Agreement (Event)",
          "Nausea (Book)",
          "Kristallnacht (Event)",
          "War of the Worlds (Event)"
        ]
      },
      "1939": {
        "variance_explained": 1.0,
        "description": "War (-2.0%). Pacifism was swept away. Conscientious Objectors were few. The Left supported the war (mostly). Einstein signed the letter for the Bomb\u2014the pacifist arming the state.",
        "key_manifestations": [
          "Outbreak of WWII (Event)",
          "Einstein Letter (Event)",
          "Grapes of Wrath (Book)",
          "Wizard of Oz (Film)"
        ]
      },
      "1940": {
        "variance_explained": 1.0,
        "description": "Stasis. Gandhi. 'I would rather have India resort to arms... than that she should become a cowardly witness.' Even the saint admitted limits. In US, 'America First'\u2014isolationism masquerading as pacifism.",
        "key_manifestations": [
          "America First Committee (Event)",
          "Great Dictator (Film)",
          "Fall of France (Event)",
          "Darkness at Noon (Book)"
        ]
      },
      "1941": {
        "variance_explained": 1.0,
        "description": "Stasis. Pearl Harbor. The debate ended. Total War. The Quakers and Mennonites served in CPS camps. A quiet witness.",
        "key_manifestations": [
          "Pearl Harbor (Event)",
          "CPS Camps established (Institutional Event)",
          "Citizen Kane (Film)",
          "Barbarossa (Event)"
        ]
      },
      "1942": {
        "variance_explained": 1.0,
        "description": "Stasis. The Oxford Famine Relief Committee (Oxfam) founded. Humanitarianism replacing political pacifism.",
        "key_manifestations": [
          "Oxfam founded (Institutional Event)",
          "Casablanca (Film)",
          "Wannsee (Event)",
          "Stalingrad (Event)"
        ]
      },
      "1943": {
        "variance_explained": 1.0,
        "description": "Stasis. Bishop Bell condemned area bombing in the House of Lords. A lonely voice against the firestorm.",
        "key_manifestations": [
          "Bishop Bell's speech (Event)",
          "Hamburg Firestorm (Event)",
          "Oklahoma! (Musical)",
          "Warsaw Ghetto (Event)"
        ]
      },
      "1944": {
        "variance_explained": 2.0,
        "description": "Dumbarton Oaks (+1.0%). Planning the UN. 'Peace through Strength.' The Security Council. Realist pacifism.",
        "key_manifestations": [
          "Dumbarton Oaks (Event)",
          "Double Indemnity (Film)",
          "D-Day (Event)",
          "Bretton Woods (Event)"
        ]
      },
      "1945": {
        "variance_explained": 10.0,
        "description": "UN and The Bomb (+8.0%). The Charter. 'To save succeeding generations from the scourge of war.' The Bomb terrified the world into a new pacifism: 'One World or None.' The Atomic Scientists Movement.",
        "key_manifestations": [
          "UN Charter (Event)",
          "One World or None (Book)",
          "Hiroshima (Event)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 12.0,
        "description": "Baruch Plan (+2.0%). Attempt to ban the bomb. Failed. But the sentiment was global. Russell-Einstein ideas gestating.",
        "key_manifestations": [
          "Baruch Plan (Event)",
          "Hiroshima by Hersey (Book)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain (Event)"
        ]
      },
      "1947": {
        "variance_explained": 10.0,
        "description": "Cold War Split (-2.0%). Peace became partisan. Garry Davis (World Citizen) movement. A flash in the pan.",
        "key_manifestations": [
          "Garry Davis (Event)",
          "Truman Doctrine (Event)",
          "Streetcar Named Desire (Play)",
          "National Security Act (Event)"
        ]
      },
      "1948": {
        "variance_explained": 12.0,
        "description": "Human Rights (+2.0%). UDHR. Gandhi assassinated\u2014the martyr of the cluster. His death sanctified non-violence just as the Cold War militarized the world.",
        "key_manifestations": [
          "Gandhi Assassination (Event)",
          "UDHR (Event)",
          "Naked and the Dead (Book)",
          "Berlin Airlift (Event)"
        ]
      },
      "1949": {
        "variance_explained": 8.0,
        "description": "World Peace Council (-4.0%). Soviet front. 'Peace' became a dirty word in the West (Communist). NATO formed. The cluster fractured.",
        "key_manifestations": [
          "WPC founded (Event)",
          "NATO (Event)",
          "1984 (Book)",
          "Soviet Bomb (Event)"
        ]
      },
      "1950": {
        "variance_explained": 5.0,
        "description": "Korea (-3.0%). The Stockholm Appeal (Ban the Bomb). Signed by millions, ignored by Truman. War in Korea. Pacifism was treason. The cluster went into the wilderness until the late 50s.",
        "key_manifestations": [
          "Stockholm Appeal (Event)",
          "Korean War (Event)",
          "Lonely Crowd (Book)",
          "All About Eve (Film)"
        ]
      }
    }
  },
  "21_petro_strategic_dependency": {
    "name": "Petro-Strategic Dependency (The Hydrocarbon Tether)",
    "description": "This eigencluster traces the fundamental shift in the metabolic energy of warfare from coal (solid, labor-intensive, British-dominated) to oil (liquid, capital-intensive, contested). It maps the realization that modern mobility (Cluster 9) and air power (Cluster 3) are impossible without secure access to petroleum. Strategically, this cluster reorients global geopolitics toward the Middle East, the Caucasus, and Southeast Asia. Culturally, it manifests in the anxiety of 'running dry' and the ruthless diplomacy of the pipeline. It evolves from a naval technical question to the absolute determinant of World War II's outcome.",
    "trajectory": {
      "1890": {
        "variance_explained": 1.0,
        "description": "The era of King Coal. Naval coaling stations defined the map of empire. Oil was a lubricant and illuminant, not a strategic fuel. The delta is flat. The 'Shell' Transport and Trading Company was shipping oil for lamps, not battleships. The strategic mindset was tethered to rail lines and coaling ports.",
        "key_manifestations": [
          "Coaling Station protocols (Strategic Documents)",
          "Formation of Royal Dutch Petroleum (Business Event)",
          "Standard Oil Trust dominance (Economic Context)",
          "The Sign of Four (Novel - steam launches fueled by coal)"
        ]
      },
      "1891": {
        "variance_explained": 1.1,
        "description": "Stasis (+0.1%). Experiments in the Italian and British navies with 'mixed firing' (spraying oil on coal) to increase speed. It was a tactical trick, not a strategic shift. The internal combustion engine was in its infancy (Daimler/Benz), viewed as a toy for the rich, not a military asset.",
        "key_manifestations": [
          "Italian Navy oil firing tests (Tech Event)",
          "Panhard et Levassor car production (Tech Event)",
          "Trans-Siberian Railway construction (Coal logistics)",
          "Sherlock Holmes 'The Engineer's Thumb' (Hydraulic/Steam tech)"
        ]
      },
      "1892": {
        "variance_explained": 1.2,
        "description": "Marcus Samuel (Shell) sent the *Murex*, the first bulk oil tanker, through the Suez Canal (+0.1%). A logistical breakthrough. It challenged Standard Oil's 'case oil' monopoly. The 'Pipeline' concept was growing in Baku. The infrastructure of the future war was being laid by commerce.",
        "key_manifestations": [
          "Passage of the Murex through Suez (Logistical Event)",
          "Cholera in Hamburg (Coal smoke context)",
          "Diesel patents the diesel engine (Tech Event)",
          "Zola's Germinal (Coal labor struggle)"
        ]
      },
      "1893": {
        "variance_explained": 1.3,
        "description": "Stasis. The focus remained on the 'Coal Famine' fears. Jevons' Paradox. The idea that oil could replace coal was economically absurd. However, Rudolf Diesel published *Theory and Construction of a Rational Heat Motor*. The theoretical efficiency of liquid fuel was established.",
        "key_manifestations": [
          "Diesel's 'Theory and Construction' (Book)",
          "Chicago World's Fair (Steam dominance)",
          "Opening of the Corinth Canal (Shipping)",
          "Duryea Brothers' first car (Tech Event)"
        ]
      },
      "1894": {
        "variance_explained": 1.4,
        "description": "First Sino-Japanese War (+0.1%). Fought entirely on coal. The Japanese fleet's speed was limited by the stokers' physical endurance. This physical limit of coal (human labor) would eventually drive the shift to oil (pumpable energy).",
        "key_manifestations": [
          "Battle of the Yalu (Coal smoke obscuration)",
          "Nobel Brothers in Baku (Oil empire expansion)",
          "Kipling's 'McAndrew's Hymn' (Poetry of steam)",
          "Tower Bridge opens (Hydraulic/Steam power)"
        ]
      },
      "1895": {
        "variance_explained": 1.5,
        "description": "Automobile races (Paris-Bordeaux) proved the internal combustion engine's reliability (+0.1%). The 'Horseless Carriage' was viable. Military observers noted the speed but doubted the logistics. Oil was still seen as a civilian curiosity.",
        "key_manifestations": [
          "Paris-Bordeaux-Paris race (Tech Event)",
          "Lumiere Films (Depicting street traffic)",
          "X-Rays discovered (Scientific distraction)",
          "Cuban War begins (Horse and Machete)"
        ]
      },
      "1896": {
        "variance_explained": 1.6,
        "description": "Ford built the Quadricycle (+0.1%). The democratization of the engine began. In the Navy, Fisher began to agitate for oil, noting it offered 'more speed, less smoke, less work.' The 'Oil Faction' in the Admiralty was born.",
        "key_manifestations": [
          "Ford Quadricycle run (Tech Event)",
          "Fisher's early memos on oil (Strategic Document)",
          "Battle of Adwa (Logistics failure)",
          "Klondike Gold Rush (Resource mania)"
        ]
      },
      "1897": {
        "variance_explained": 1.8,
        "description": "Turbinia demonstration (+0.2%). Steam turbines. They consumed massive amounts of fuel. To feed them, coal shoveling was becoming impossible. The engineering limit of coal was reached. Oil was the only physics-based solution for higher speeds.",
        "key_manifestations": [
          "Turbinia at Spithead (Tech Event)",
          "Shell Transport and Trading Company formed (Business Event)",
          "Dracula (Novel)",
          "Diesel engine working prototype (Tech Event)"
        ]
      },
      "1898": {
        "variance_explained": 2.0,
        "description": "Spanish-American War (+0.2%). The USS *Oregon*'s dash around South America highlighted the 'coaling problem.' It took weeks. Oil would have cut the time and eliminated the need for bases. The strategic value of 'range' became clear.",
        "key_manifestations": [
          "USS Oregon voyage (Strategic Event)",
          "Fashoda Incident (Coal logistics decisive)",
          "War of the Worlds (Martian machines use gas/smoke)",
          "Discovery of Polonium (Energy density)"
        ]
      },
      "1899": {
        "variance_explained": 2.5,
        "description": "Boer War (+0.5%). The first use of 'traction engines' (steam) for logistics, but limited use of petrol cars. The Anglo-Persian connection began to be investigated. William Knox D'Arcy sought concessions in Persia. The geopolitical pivot to the Middle East began.",
        "key_manifestations": [
          "D'Arcy negotiations in Persia (Diplomatic Event)",
          "Use of armored trains (Steam tech)",
          "Hague Convention (Ignoring oil)",
          "Heart of Darkness (Resource extraction theme)"
        ]
      },
      "1900": {
        "variance_explained": 3.0,
        "description": "Spindletop Discovery (+0.5%). Texas. The 'Gusher.' Oil became abundant and cheap. It broke the Russian/Standard Oil duopoly. The US became the 'Saudi Arabia' of the early 20th century. The material constraint on oil-fired navies was removed.",
        "key_manifestations": [
          "Spindletop Gusher (Economic Event)",
          "Zeppelin Flight (Internal combustion aero-engine)",
          "Boxer Rebellion (Coalition logistics)",
          "Lord Jim (Novel)"
        ]
      },
      "1901": {
        "variance_explained": 3.5,
        "description": "D'Arcy Concession signed (+0.5%). The Shah of Persia granted rights to British investors. The foundation of BP. This tied British security directly to the Persian Gulf. The 'Oil Interest' became a state interest.",
        "key_manifestations": [
          "D'Arcy Concession (Legal/Strategic Event)",
          "Royal Navy Oil Fuel Committee formed (Institutional Event)",
          "The Octopus by Frank Norris (Rail/Wheat - old economy)",
          "Holland Submarine commissioned (Petrol engine)"
        ]
      },
      "1902": {
        "variance_explained": 4.0,
        "description": "Fisher as Second Sea Lord (+0.5%). He pushed for the submarine (petrol/diesel). The submarine forced the navy to adopt liquid fuel. You cannot shovel coal underwater. The 'Internal Combustion' navy was born in the deep.",
        "key_manifestations": [
          "Fisher's reforms (Institutional Event)",
          "Anglo-Japanese Alliance (Coal-based)",
          "Heart of Darkness published (Book)",
          "Studebaker enters car market (Industrial shift)"
        ]
      },
      "1903": {
        "variance_explained": 5.0,
        "description": "First Flight (+1.0%). The Wright Flyer. It proved that flight required the energy density of petrol. No steam plane could fly well. The conquest of the air (Cluster 3) was strictly dependent on the Oil cluster. The 'Octane' race began.",
        "key_manifestations": [
          "Wright Flyer (Tech Event)",
          "Ford Motor Company incorporated (Industrial Event)",
          "HMS Spiteful (First all-oil warship) (Tech Event)",
          "London Declaration debates (Contraband)"
        ]
      },
      "1904": {
        "variance_explained": 6.0,
        "description": "Fisher becomes First Sea Lord (+1.0%). 'Oil is the very soul of future sea fighting.' He envisioned a fleet of oil-fired Dreadnoughts. The problem: Britain has coal, but no oil. The strategic vulnerability was created consciously to gain tactical advantage (speed/range).",
        "key_manifestations": [
          "Fisher appointed First Sea Lord (Event)",
          "Russo-Japanese War (Russian oil transport disruption)",
          "Nostromo (Silver/Resource curse)",
          "St. Louis World's Fair (ICE displays)"
        ]
      },
      "1905": {
        "variance_explained": 6.5,
        "description": "Battle of Tsushima (+0.5%). Coal smoke revealed the Russian fleet. Oil burns cleaner. The tactical advantage of 'visibility' was noted. The shift to turbine engines in the *Dreadnought* design made oil firing inevitable for the future.",
        "key_manifestations": [
          "Battle of Tsushima (Event)",
          "Einstein's papers (Energy/Mass)",
          "Schlieffen Plan (Logistics calculations)",
          "Anglo-Persian Oil Company prospecting (Event)"
        ]
      },
      "1906": {
        "variance_explained": 7.0,
        "description": "HMS Dreadnought (+0.5%). Though coal-fired, it used oil sprayers for burst speed. It signaled the transition. In civilian life, the 'taxi' began to replace the cab. The city began to smell of exhaust rather than manure.",
        "key_manifestations": [
          "Launch of Dreadnought (Tech Event)",
          "San Francisco Earthquake (Fire risk of gas lines)",
          "The Jungle (Industrial systems)",
          "Grand Prix racing begins (Cultural Event)"
        ]
      },
      "1907": {
        "variance_explained": 7.5,
        "description": "Royal Dutch Shell merger (+0.5%). British/Dutch consolidation against Standard Oil. A strategic asset for the Entente. The 'Shell' became a quasi-state actor. Anglo-Russian Convention divided Persia, securing the northern flank of the oil fields.",
        "key_manifestations": [
          "Royal Dutch Shell merger (Business Event)",
          "Anglo-Russian Convention (Diplomatic Event)",
          "The Secret Agent (Terrorism)",
          "Lumiere Autochrome (Tech)"
        ]
      },
      "1908": {
        "variance_explained": 9.0,
        "description": "Discovery of Oil in Persia (Masjed Soleyman) (+1.5%). The first major Middle East strike. It saved the D'Arcy concession. Britain now had its own supply, protected by the Raj. The geopolitical center of gravity shifted.",
        "key_manifestations": [
          "Discovery at Masjed Soleyman (Economic Event)",
          "Ford Model T launched (Mass demand)",
          "Young Turk Revolution (Instability in the transit zone)",
          "War in the Air (Book)"
        ]
      },
      "1909": {
        "variance_explained": 10.0,
        "description": "Anglo-Persian Oil Company (APOC) formed (+1.0%). The precursor to BP. A public company, but strategically vital. The British government debated nationalizing it to secure the Navy's supply. The 'Fuel Security' concept emerged.",
        "key_manifestations": [
          "Formation of APOC (Business Event)",
          "Bleriot Channel Crossing (Aviation fuel)",
          "Declaration of London (Oil as contraband?)",
          "Futurist Manifesto (Speed/Energy)"
        ]
      },
      "1910": {
        "variance_explained": 11.0,
        "description": "Mexican Revolution (+1.0%). Oil fields in Tampico were threatened. The first 'Resource War' dynamics involving non-state actors. The US and UK jockeyed for control. Oil was becoming a cause of conflict, not just a fuel for it.",
        "key_manifestations": [
          "Mexican Revolution begins (Event)",
          "Standard Oil broken up (Legal Event)",
          "Howards End (Car culture)",
          "Agadir Crisis (German expansionism)"
        ]
      },
      "1911": {
        "variance_explained": 15.0,
        "description": "Churchill's Decision (+4.0%). As First Lord, Churchill ordered the *Queen Elizabeth* class battleships to be fully oil-fired. A gamble. 'We must become the owners, or at any rate the controllers, of the source of our oil supply.' The state entered the oil business.",
        "key_manifestations": [
          "Churchill's decision on Oil (Strategic Event)",
          "Agadir Crisis (Panther powered by coal, limited range)",
          "Standard Oil breakup (Economic Event)",
          "Italian use of aircraft in Libya (Fuel dependency)"
        ]
      },
      "1912": {
        "variance_explained": 16.0,
        "description": "Royal Commission on Fuel and Engines (+1.0%). Fisher presided. The verdict: Oil is superior. 40% more radius of action. Able to refuel at sea (impossible with coal). The logistical flexibility of the fleet doubled.",
        "key_manifestations": [
          "Royal Commission Report (Document)",
          "Diesel ship Selandia launched (Tech Event)",
          "Titanic (Coal shortage played a role in schedule)",
          "Balkan Wars (Event)"
        ]
      },
      "1913": {
        "variance_explained": 18.0,
        "description": "British Government buys APOC (+2.0%). Churchill convinced Parliament to buy 51% of Anglo-Persian. The first time a state owned an energy company for military reasons. The 'Military-Industrial-Energy' complex was born.",
        "key_manifestations": [
          "Purchase of APOC shares (Political Event)",
          "German Berlin-Baghdad Railway (Threat to oil)",
          "Zabern Affair (Event)",
          "Ford Assembly Line (Mass consumption)"
        ]
      },
      "1914": {
        "variance_explained": 25.0,
        "description": "The Taxi of the Marne (+7.0%). War. The German advance was stopped in part because French reserve troops were ferried by Paris taxis (petrol). It was the first motorized troop movement. The 'Horse' began to die. Oil proved decisive in the first month.",
        "key_manifestations": [
          "Taxis of the Marne (Event)",
          "British secure Basra/Abadan (Strategic Event - protecting the oil)",
          "Galician oil fields destruction (Scorched earth)",
          "Mobilization (Rail/Coal vs Truck/Oil)"
        ]
      },
      "1915": {
        "variance_explained": 30.0,
        "description": "The U-Boat and the Tanker (+5.0%). The U-boat war targeted tankers. Britain realized its vulnerability. The 'Tanker' became the most valuable ship afloat. The Gallipoli campaign was partly to secure the flank of the Suez/Oil route.",
        "key_manifestations": [
          "U-boat attacks on tankers (Event)",
          "Gallipoli Campaign (Strategic Context)",
          "Benzol production in Germany (Synthetic attempts)",
          "The 39 Steps (Novel)"
        ]
      },
      "1916": {
        "variance_explained": 35.0,
        "description": "Verdun and the Voie Sacr\u00e9e (+5.0%). The railway was cut. The French army was sustained by a single road serviced by 3,000 trucks. 24/7 convoys. 'The victory of the petrol engine.' Oil replaced Rail as the tactical lifeline.",
        "key_manifestations": [
          "Voie Sacr\u00e9e (Logistical Event)",
          "Battle of Jutland (Oil-fired speed)",
          "Tanks introduced (Petrol gluttons)",
          "Sykes-Picot Agreement (Dividing the oil lands)"
        ]
      },
      "1917": {
        "variance_explained": 45.0,
        "description": "The Crisis (+10.0%). Unrestricted U-boat warfare. Britain ran low on oil. The Grand Fleet was ordered to slow down to save fuel. Clemenceau telegraphed Wilson: 'A drop of oil is worth a drop of blood.' The US entry brought the 'Standard Oil' fleet to the rescue.",
        "key_manifestations": [
          "Clemenceau's Telegram (Diplomatic Event)",
          "Fuel Crisis in UK (Event)",
          "US Entry (The oil giant joins)",
          "Capture of Baghdad (Securing the tap)"
        ]
      },
      "1918": {
        "variance_explained": 50.0,
        "description": "The Allied Flood (+5.0%). The Allies floated to victory on a 'wave of oil.' Germany, blockaded, ran out of fuel. Trucks stopped. Planes grounded. The contrast between Allied mobility (Renault FTs, trucks) and German stasis sealed the defeat. Baku was briefly occupied by the British (Dunsterforce) to deny it to the Turks.",
        "key_manifestations": [
          "Battle of Amiens (Massed tanks)",
          "German fuel shortages (Strategic Factor)",
          "Dunsterforce in Baku (Event)",
          "Armistice (Event)"
        ]
      },
      "1919": {
        "variance_explained": 40.0,
        "description": "The Partition (-10.0%). Post-war scramble. The French demanded Mosul (oil) in exchange for supporting British claims elsewhere. The 'Red Line Agreement' planning began. The Middle East was carved up not for people, but for pipelines.",
        "key_manifestations": [
          "San Remo Conference (Oil distribution)",
          "Alcock and Brown (Aviation range)",
          "Treaty of Versailles (German forfeiture of tankers)",
          "Standard Oil vs Royal Dutch Shell rivalry (Economic War)"
        ]
      },
      "1920": {
        "variance_explained": 42.0,
        "description": "Iraqi Revolt (+2.0%). Protecting the pipeline. The RAF used 'Air Control' to secure the oil infrastructure. The cost of oil was now permanent military garrisoning of the Arab world. The US feared a British monopoly and demanded 'Open Door' policy for oil.",
        "key_manifestations": [
          "Iraqi Revolt (Event)",
          "San Remo Oil Agreement (Diplomatic Event)",
          "US 'Open Door' diplomatic notes (Event)",
          "Women in Love (Book)"
        ]
      },
      "1921": {
        "variance_explained": 45.0,
        "description": "Teapot Dome Scandal (+3.0%). US. Corruption in the Naval Oil Reserves. It showed the immense value and corruption potential of strategic oil. The Navy's oil was sacrosanct. The 'Strategic Reserve' concept solidified.",
        "key_manifestations": [
          "Teapot Dome Scandal begins (Political Event)",
          "Cairo Conference (Middle East order)",
          "First Ethyl Gasoline (Tech Event - performance boost)",
          "Sinking of Ostfriesland (Air power dominance)"
        ]
      },
      "1922": {
        "variance_explained": 45.0,
        "description": "Stasis. The Washington Naval Treaty. By limiting tonnage, it inadvertently encouraged 'lighter' machinery (oil-fired boilers) to save weight for armor/guns. Oil density was a cheat code for the treaty limits.",
        "key_manifestations": [
          "Washington Naval Treaty (Event)",
          "Lausanne Conference (Mosul question)",
          "Waste Land (Poem)",
          "Formation of the USSR (Baku nationalized)"
        ]
      },
      "1923": {
        "variance_explained": 48.0,
        "description": "French Occupation of the Ruhr (+3.0%). Coal vs Oil. France seized German coal. It showed the violence of resource extraction. But the future was oil. In the US, the 'Ethyl' (leaded gas) debate began\u2014performance vs poison.",
        "key_manifestations": [
          "Ruhr Occupation (Event)",
          "Ethyl Gasoline marketed (Tech Event)",
          "Beer Hall Putsch (Event)",
          "Turkey retains sovereignty (But loses Mosul)"
        ]
      },
      "1924": {
        "variance_explained": 50.0,
        "description": "Iraq Petroleum Company (+2.0%). The consortium formed. BP, Shell, CFP, Near East Development (US). The 'Red Line' agreement signed (1928, negotiated now). The cartelization of the Middle East. No competition within the Ottoman limits.",
        "key_manifestations": [
          "IPC negotiations (Business Event)",
          "Dawes Plan (Economic stability)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 52.0,
        "description": "IG Farben formed (+2.0%). The German chemical giant. They began working on 'Hydrogenation' (Bergius process)\u2014turning coal into oil. The strategic answer to the British blockade. The quest for Autarky.",
        "key_manifestations": [
          "Formation of IG Farben (Business Event)",
          "Bergius Process development (Tech Event)",
          "Locarno Treaties (Event)",
          "Great Gatsby (Car culture)"
        ]
      },
      "1926": {
        "variance_explained": 52.0,
        "description": "Stasis. Mosul Question settled. Iraq got Mosul (and the oil), but the British controlled the extraction. The pipeline route (Haifa vs Tripoli) became a strategic debate between UK and France.",
        "key_manifestations": [
          "Mosul boundary settlement (Diplomatic Event)",
          "Goddard Rocket (Liquid fuel)",
          "Sun Also Rises (Book)",
          "General Strike (Coal strike)"
        ]
      },
      "1927": {
        "variance_explained": 55.0,
        "description": "Baba Gurgur (+3.0%). Massive oil strike in Iraq (Kirkuk). 'Father of Flames.' It confirmed the Middle East as the center of the oil world. The rush to build pipelines began. Aviation records (Lindbergh) drove engine tech, demanding higher octane.",
        "key_manifestations": [
          "Baba Gurgur discovery (Economic Event)",
          "Lindbergh Flight (Event)",
          "Jazz Singer (Film)",
          "Chiang Kai Shek's Northern Expedition (Fueling the warlords)"
        ]
      },
      "1928": {
        "variance_explained": 58.0,
        "description": "Red Line Agreement (+3.0%). Signed. The oil companies divided the Middle East. A cartel of silence and supply. In Germany, IG Farben signed a deal with Standard Oil (New Jersey) to share hydrogenation tech. A fatal transfer of knowledge.",
        "key_manifestations": [
          "Red Line Agreement signed (Business Event)",
          "Achnacarry Agreement ('As Is' cartel) (Economic Event)",
          "Standard-IG Farben pact (Tech transfer)",
          "Kellogg-Briand Pact (Event)"
        ]
      },
      "1929": {
        "variance_explained": 55.0,
        "description": "The Crash (-3.0%). Demand collapsed. Oil glut. Prices crashed. The cartel struggled to maintain discipline. However, the 'Mechanization' of armies (Cluster 9) continued, increasing the *potential* demand.",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "Guderian's tank concepts (Fuel heavy)",
          "All Quiet on the Western Front (Book)",
          "Young Plan (Reparations)"
        ]
      },
      "1930": {
        "variance_explained": 58.0,
        "description": "East Texas Oil Field (+3.0%). Another massive US find. Prices floored. The Texas Railroad Commission began to 'prorate' (limit) production to stabilize price. The model for OPEC. The state controlling the tap.",
        "key_manifestations": [
          "East Texas discovery (Economic Event)",
          "Texas Railroad Commission strictures (Policy)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 60.0,
        "description": "Japan in Manchuria (+2.0%). Japan sought resources (Coal/Iron), but Oil was the missing link. They were 80% dependent on US oil. The 'Achilles Heel' of the Japanese Empire. They began looking at the Dutch East Indies.",
        "key_manifestations": [
          "Invasion of Manchuria (Event)",
          "Japanese synthetic fuel research begins (Tech Event)",
          "M (Film)",
          "Empire State Building (Event)"
        ]
      },
      "1932": {
        "variance_explained": 65.0,
        "description": "Discovery of Oil in Bahrain (+5.0%). The first oil on the Arab side of the Gulf. Standard Oil of California (Socal). It broke the Red Line Agreement (Bahrain was arguably outside). The US entry into the British preserve.",
        "key_manifestations": [
          "Bahrain oil discovery (Economic Event)",
          "Chaco War (Rumored 'Oil War' between Shell/Standard proxies)",
          "Brave New World (Book)",
          "Famine in Ukraine (Event)"
        ]
      },
      "1933": {
        "variance_explained": 70.0,
        "description": "Saudi Concession (+5.0%). Socal (US) signed with Ibn Saud. The British rejected it (too risky/poor). The greatest strategic error of the century. The US secured the largest oil reserve in the world. Hitler came to power and accelerated the Synthetic Fuel program (Leuna works).",
        "key_manifestations": [
          "Saudi-Socal Concession signed (Strategic Event)",
          "Expansion of Leuna synthetic plant (Industrial Event)",
          "King Kong (Film)",
          "Hitler Chancellor (Event)"
        ]
      },
      "1934": {
        "variance_explained": 72.0,
        "description": "Pipeline to the Mediterranean (+2.0%). The Kirkuk-Haifa pipeline opened. The Royal Navy's umbilical cord. It made Palestine and Jordan vital strategic corridors. The geopolitical map was redrawn by the tube.",
        "key_manifestations": [
          "Kirkuk-Haifa pipeline opens (Infrastructure Event)",
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "Italian preparations for Abyssinia (Stockpiling oil)"
        ]
      },
      "1935": {
        "variance_explained": 75.0,
        "description": "Abyssinian Crisis Sanctions (+3.0%). The League of Nations imposed sanctions on Italy but *excluded* oil. The 'Oil Sanction' was the only one that would have stopped Mussolini. Britain/France feared pushing him to Hitler. It proved Oil was the 'Nuclear Option' of diplomacy.",
        "key_manifestations": [
          "League Sanctions debate (Diplomatic Event)",
          "Hoare-Laval Pact (Betrayal)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 78.0,
        "description": "Four Year Plan (+3.0%). G\u00f6ring. 'German fuel from German coal.' Massive investment in hydrogenation. Autarky. Hitler knew he could not fight a long war without synthetic oil. The 'Wehrwirtschaft' was built on this premise.",
        "key_manifestations": [
          "Four Year Plan initiated (Policy)",
          "Spanish Civil War (German logistical testing)",
          "General Theory (Book)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 80.0,
        "description": "Japan invades China (+2.0%). US public opinion turned. The discussion of an oil embargo began. Japan stockpiled furiously. They had 2 years of reserves. The clock started ticking.",
        "key_manifestations": [
          "Invasion of China (Event)",
          "USS Panay Incident (Event)",
          "Guernica (Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 85.0,
        "description": "Discovery of Oil in Kuwait and Saudi (+5.0%). Burgan field. Dammam No. 7. The scale was realized. The Middle East was not just a source; it was *The* source. Mexico nationalized oil (PEMEX)\u2014a warning to the majors.",
        "key_manifestations": [
          "Discovery at Dammam (Economic Event)",
          "Mexican Nationalization (Political Event)",
          "Munich Crisis (Event)",
          "Kristallnacht (Event)"
        ]
      },
      "1939": {
        "variance_explained": 90.0,
        "description": "Molotov-Ribbentrop Pact (+5.0%). Economic clause. The USSR promised oil to Germany. This broke the British blockade strategy. Germany could fight as long as Stalin shipped oil. The 'Blockade' (Cluster 4) was bypassed.",
        "key_manifestations": [
          "German-Soviet Commercial Agreement (Event)",
          "Invasion of Poland (Motorized war)",
          "100 Octane fuel usage by RAF (Tech advantage)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 95.0,
        "description": "The Fall of France and Romanian Oil (+5.0%). Germany captured French stocks. They pressured Romania (Ploesti) into the Axis. The fuel for the Blitzkrieg was secured. The US restricted aviation fuel to Japan\u2014the noose tightened.",
        "key_manifestations": [
          "German seizure of French reserves (Event)",
          "US Export Control Act (Policy)",
          "Battle of Britain (100 Octane vs 87 Octane)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "The Embargo and Barbarossa (+5.0%). July: US Total Oil Embargo on Japan. Japan had to choose: withdrawal or war. They chose war (Pearl Harbor) to seize the Dutch East Indies (Oil). June: Barbarossa. The goal was Baku. The war was explicitly for oil.",
        "key_manifestations": [
          "US Oil Embargo (Strategic Event)",
          "Attack on Pearl Harbor (Event)",
          "Operation Barbarossa (Event)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "Case Blue and Palembang (+0.0%). Germany attacked towards the Caucasus (Baku). Japan paratroopers seized Palembang refineries. The war turned on these fields. Germany failed at Stalingrad (protecting the flank of the oil drive). Japan got the oil, but US subs sank the tankers.",
        "key_manifestations": [
          "Case Blue (German offensive)",
          "Battle of Palembang (Event)",
          "Battle of the Atlantic (Tanker war)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 100.0,
        "description": "Ploesti Raid (+0.0%). Operation Tidal Wave. US bombers attacked Romanian refineries. High cost, low damage initially, but it signaled the 'Oil Offensive.' The Big Inch pipeline built in US\u2014strategic infrastructure.",
        "key_manifestations": [
          "Operation Tidal Wave (Event)",
          "Big Inch Pipeline completed (Infrastructure)",
          "Kursk (Massive fuel consumption)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 100.0,
        "description": "The Fuel Death (+0.0%). The Allies bombed the synthetic plants (Leuna). German production collapsed. The Luftwaffe was grounded. Tanks were abandoned. Japan was cut off from the Indies. The 'Great Marianas Turkey Shoot'\u2014Japanese pilots untrained due to fuel shortage.",
        "key_manifestations": [
          "Oil Campaign (Strategic Bombing)",
          "Battle of the Bulge (German attempt to capture fuel)",
          "PLUTO (Pipeline Under The Ocean) (Tech Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 95.0,
        "description": "Quincy Agreement (-5.0% Kinetic). FDR met Ibn Saud on the USS *Quincy*. The deal: US protection for Saudi Oil. The foundation of the post-war order. The war ended with the US producing 70% of global oil. Hegemony secured.",
        "key_manifestations": [
          "FDR-Ibn Saud meeting (Diplomatic Event)",
          "Hiroshima (Atomic energy debut)",
          "Animal Farm (Book)",
          "Yalta (Event)"
        ]
      },
      "1946": {
        "variance_explained": 90.0,
        "description": "Iran Crisis (-5.0%). The Soviets refused to leave Northern Iran (oil exploration). Truman threatened force. The first Cold War crisis was about oil. The Soviets withdrew. The 'Truman Doctrine' logic applied to energy.",
        "key_manifestations": [
          "Iran Crisis of 1946 (Event)",
          "Operation Crossroads (Event)",
          "Best Years of Our Lives (Film)",
          "Nuremberg Verdicts (Event)"
        ]
      },
      "1947": {
        "variance_explained": 90.0,
        "description": "Tapline Construction (+0.0%). Trans-Arabian Pipeline. Moving Saudi oil to the Med. The US commitment to Middle East stability deepened. The Marshall Plan was fueled by cheap Middle East oil replacing European coal.",
        "key_manifestations": [
          "Tapline construction begins (Infrastructure)",
          "Marshall Plan (Economic Event)",
          "Truman Doctrine (Event)",
          "Streetcar Named Desire (Play)"
        ]
      },
      "1948": {
        "variance_explained": 92.0,
        "description": "Israel and the Pipeline (+2.0%). The 1948 War closed the Kirkuk-Haifa pipeline. Iraq cut the flow. The vulnerability of the 'Tether' was exposed. Oil became a weapon against Israel. The 'Red Line' agreement was dissolved.",
        "key_manifestations": [
          "Closure of Kirkuk-Haifa pipeline (Event)",
          "Red Line Agreement dissolved (Legal Event)",
          "1948 War (Event)",
          "The Naked and the Dead (Book)"
        ]
      },
      "1949": {
        "variance_explained": 90.0,
        "description": "The Seven Sisters (-2.0%). The major oil companies consolidated control. 85% of reserves. The price was fixed. Stability. The US became a net importer for the first time. The dependency shifted from 'strategic advantage' to 'strategic necessity.'",
        "key_manifestations": [
          "US becomes net oil importer (Economic Event)",
          "NATO formed (Defense of the Atlantic lifeline)",
          "Soviet Bomb (Event)",
          "Death of a Salesman (Play)"
        ]
      },
      "1950": {
        "variance_explained": 95.0,
        "description": "Aramco 50/50 Deal (+5.0%). Saudi Arabia demanded 50% of profits. The US government allowed Aramco to deduct this from US taxes. A massive subsidy to keep the Saudis loyal. The 'Petrodollar' cycle began. The Korean War spiked demand.",
        "key_manifestations": [
          "Aramco 50/50 Agreement (Economic Event)",
          "Korean War (Jet fuel demand)",
          "The Lonely Crowd (Book)",
          "All About Eve (Film)"
        ]
      }
    }
  },
  "22_military_psychiatry_trauma": {
    "name": "Military Psychiatry & Trauma (The Broken Mind)",
    "description": "This eigencluster maps the medicalization, stigmatization, and eventual management of psychological collapse in war. It traces the trajectory from the Victorian moral model\u2014where breakdown was viewed as 'cowardice' or 'malingering'\u2014to the industrial recognition of 'Shell Shock' and 'Combat Fatigue.' It embodies the friction between the biological limits of the human nervous system and the unlimited violence of industrial warfare. Key dynamics include the tension between disciplinary execution and medical treatment, the gendered coding of 'hysteria,' and the post-war struggle for pension rights versus the state's desire to forget.",
    "trajectory": {
      "1890": {
        "variance_explained": 1.0,
        "description": "The decade opens with a baseline variance, firmly rooted in the somatic and moralistic interpretation of trauma. The \u0394v is flat (+0.0%), as the prevailing military doctrine regarded psychological failure as a defect of character or 'lack of grit.' Jean-Martin Charcot\u2019s work on hysteria at the Salp\u00eatri\u00e8re provided the intellectual framework, but it was strictly gendered as female; a soldier exhibiting tremors was seen as effeminate or a malingerer. There was no 'military psychiatry' to speak of, only the Provost Marshal and the prison cell. The cultural repression of trauma was absolute, creating a 'stiff upper lip' equilibrium.",
        "key_manifestations": [
          "Jean-Martin Charcot's Tuesday Lessons (Medical Text - defining hysteria)",
          "The Sign of Four by Conan Doyle (Character of Sholto - nervous collapse)",
          "Principles of Psychology by William James (Book - exploring the stream of consciousness)",
          "Medical manuals on 'Malingering' (Military regulation texts)"
        ]
      },
      "1891": {
        "variance_explained": 1.1,
        "description": "A barely perceptible rise (+0.1%) occurred as the expansion of industrial accidents, specifically in railways, began to create a legal precedent for 'invisible injury.' The catalyst was the growing litigation around 'Railway Spine,' where victims suffered nervous collapse without physical lesions. While militarily ignored, this civilian legal trend planted the seed that the machine could break the mind without touching the body. The military response remained disciplinary; 'stragglers' in colonial campaigns were whipped or abandoned, their mental state irrelevant to the log of the march.",
        "key_manifestations": [
          "Litigation regarding 'Railway Spine' (Legal trend)",
          "The Light that Failed by Kipling (Novel - blindness and psychological despair)",
          "Pierre Janet's L'Automatisme Psychologique (Book - dissociation theory)",
          "Ambrose Bierce's Civil War stories (Literature - graphic psychological horror)"
        ]
      },
      "1892": {
        "variance_explained": 1.1,
        "description": "Stasis (+0.0%). The publication of Nordau\u2019s *Degeneration* reinforced the idea that nervous susceptibility was a sign of racial or biological decay. This intellectual climate made it even harder for the military to acknowledge trauma as a natural reaction to combat; instead, it was viewed as 'constitutional inferiority.' The displacing force preventing a psychiatric understanding was Social Darwinism (Cluster 13), which demanded that the weak be weeded out. The soldier was expected to be a biological automaton.",
        "key_manifestations": [
          "Degeneration by Max Nordau (Book - equating nervousness with decay)",
          "The Yellow Wallpaper by Charlotte Perkins Gilman (Story - the 'rest cure' critique)",
          "Hunger by Knut Hamsun (Novel - psychological disintegration)",
          "French Army regulations on 'simulators' (Policy)"
        ]
      },
      "1893": {
        "variance_explained": 1.2,
        "description": "A slight tick upward (+0.1%) as Freud and Breuer began publishing their preliminary communications on hysteria, suggesting that trauma could be repressed and converted into physical symptoms. While this had zero immediate impact on the General Staff, it laid the future groundwork for the 'talking cure' used in 1916. In the military sphere, the Matabele War saw the use of the Maxim gun; the psychological impact of *inflicting* industrial death was noted in diaries but suppressed in official reports.",
        "key_manifestations": [
          "On the Psychical Mechanism of Hysterical Phenomena by Freud/Breuer (Paper)",
          "The Shangani Patrol (Event - the 'last stand' myth masking terror)",
          "Dr. Jekyll and Mr. Hyde (Stage adaptations popularizing the split self)",
          "British Army Medical Services reports (Focusing purely on sanitation/wounds)"
        ]
      },
      "1894": {
        "variance_explained": 1.3,
        "description": "The Dreyfus Affair began, acting as a massive psychological stressor on the French officer corps (+0.1%). The hysteria of the mob and the paranoia of the General Staff revealed the collective psychosis of the military institution itself. Culturally, the idea of the 'nervous' age was taking hold in the fin de si\u00e8cle arts. The Sino-Japanese War produced casualties from 'exhaustion,' which were treated with rest or punishment, maintaining the somatic fiction.",
        "key_manifestations": [
          "Arrest of Captain Dreyfus (Event - institutional paranoia)",
          "Trilby by George du Maurier (Novel - mesmerism and control)",
          "The Jungle Book (Kipling - 'The Law' vs madness)",
          "Sino-Japanese War reports (Noting 'apathy' among routed troops)"
        ]
      },
      "1895": {
        "variance_explained": 1.5,
        "description": "The publication of *Studies on Hysteria* by Freud and Breuer marked a pivotal, if quiet, intellectual catalyst (+0.2%). It proposed that 'hysterics suffer mainly from reminiscences.' The military, however, remained obsessed with 'malingering.' The Cuban War of Independence began, and the Spanish use of 'Reconcentrado' camps created a massive civilian trauma event, though it was categorized as a hygiene crisis rather than a psychological one. The gap between psychiatric theory and military practice was at its widest.",
        "key_manifestations": [
          "Studies on Hysteria by Freud/Breuer (Book)",
          "The Red Badge of Courage by Stephen Crane (Novel - detailed study of panic)",
          "The Time Machine by H.G. Wells (Novel - degeneration anxiety)",
          "Spanish military decrees on discipline in Cuba (Document)"
        ]
      },
      "1896": {
        "variance_explained": 1.6,
        "description": "The Battle of Adwa served as a shock to Italian morale (+0.1%), leading to a wave of 'nervous' discharges that were largely hushed up to protect national honor. The Italian school of criminology (Lombroso) argued that cowardice was a physical atavism, reinforcing the punitive approach. In the US, the election of 1896 saw 'hysteria' used as a political label for Populism, pathologizing dissent. The soldier's mind was still terra incognita to the Quartermaster.",
        "key_manifestations": [
          "Battle of Adwa (Event - shame and psychological fallout)",
          "Lombroso's Criminal Man (English translation impact)",
          "The Island of Doctor Moreau (Novel - pain and conditioning)",
          "Bryan's 'Cross of Gold' speech (Mass emotional mobilization)"
        ]
      },
      "1897": {
        "variance_explained": 1.7,
        "description": "Stasis (+0.1%). The Diamond Jubilee celebrated the 'Imperial Will,' suppressing any narrative of vulnerability. However, the suicide rates in the French Foreign Legion and British Indian Army were statistically anomalous, a data point ignored by the high command. The 'ennui' of colonial garrison duty was the silent killer. Durkheim\u2019s *Suicide* was published, applying sociology to the act of self-destruction, moving it from sin to social fact.",
        "key_manifestations": [
          "Suicide by Durkheim (Book)",
          "Dracula (Novel - fear of contagion/mental domination)",
          "Diamond Jubilee (Cultural repression of weakness)",
          "Reports on 'Barracks Madness' (French military journals)"
        ]
      },
      "1898": {
        "variance_explained": 2.0,
        "description": "The Spanish-American War (+0.3%). The first conflict where 'nervous exhaustion' in the tropics was widely reported by a literate volunteer force. The catalyst was the combination of malaria and the stress of the 'bush whacking' guerrilla war. While officially labeled 'tropical neurasthenia,' it was an early recognition that environment could break the soldier. The US Army Surgeon General noted the correlation between heat and mental breakdown.",
        "key_manifestations": [
          "Tropical Neurasthenia diagnosis (Medical trend)",
          "War of the Worlds (Novel - mass panic psychology)",
          "The Turn of the Screw (Novella - psychological ambiguity)",
          "Report of the Dodge Commission (Investigating camp conditions)"
        ]
      },
      "1899": {
        "variance_explained": 2.5,
        "description": "The Boer War began (+0.5%). The British Army encountered the 'invisible enemy' and the empty battlefield. The strain of waiting for Mauser fire led to 'Disordered Action of the Heart' (DAH) or 'Soldier's Heart.' This was the somatic mask for anxiety. Doctors listened to chests, found no lesions, and prescribed exercise or discharge. The refusal to admit fear meant the heart had to take the blame.",
        "key_manifestations": [
          "Disordered Action of the Heart (Medical diagnosis)",
          "Battle of Magersfontein (Shock of the invisible death)",
          "The Awakening by Kate Chopin (Novel - psychological revolt)",
          "Heart of Darkness serialization (The mental toll of empire)"
        ]
      },
      "1900": {
        "variance_explained": 2.8,
        "description": "The Siege of the Legations in Beijing (+0.3%). A pressure-cooker environment. 'Siege psychosis' was noted among the diplomats and soldiers. The catalyst was the claustrophobia and the fear of torture. In South Africa, the guerrilla phase of the war intensified, and the burning of farms took a toll on the mental health of the British columns, recorded in diaries as 'sickening work.' The moral injury of the cluster began to manifest.",
        "key_manifestations": [
          "Siege of the Legations (Event)",
          "Freud's Interpretation of Dreams (Book - the unconscious becomes visible)",
          "Lord Jim by Conrad (Novel - the psychology of the jump/cowardice)",
          "Uncle Vanya (Play - quiet desperation)"
        ]
      },
      "1901": {
        "variance_explained": 3.0,
        "description": "The concentration camps in South Africa created a civilian trauma event of massive proportions (+0.2%). While not 'military' psychiatry, the apathy and 'wasting' of the internees were precursors to the study of camp syndrome. The death of Queen Victoria symbolized the loss of the 'Mother' figure, leading to a national mood of melancholia in the UK. The military response to DAH continued to be punitive drills.",
        "key_manifestations": [
          "Emily Hobhouse's Report (Documenting trauma)",
          "Kim by Kipling (The 'Great Game' as psychological strain)",
          "Mann's Buddenbrooks (The decline of vitality)",
          "Pavlov's work on conditioning (Scientific context)"
        ]
      },
      "1902": {
        "variance_explained": 3.2,
        "description": "End of the Boer War (+0.2%). The 'National Efficiency' debate in Britain. The poor physical and mental stock of the recruits was blamed for the war's difficulty. This led to a eugenic rather than psychiatric view of the problem: the nation was breeding 'degenerates.' The solution proposed was physical training, not psychological care. The trauma was buried under the need for imperial regeneration.",
        "key_manifestations": [
          "Interdepartmental Committee on Physical Deterioration (Report)",
          "The Varieties of Religious Experience by James (Book - study of the soul)",
          "Heart of Darkness published in book form (Cultural event)",
          "The Four Feathers (Novel - redemption of cowardice)"
        ]
      },
      "1903": {
        "variance_explained": 3.5,
        "description": "The publication of *The Riddle of the Sands* reflected a paranoid anxiety about invasion (+0.3%). The 'Spy Mania' was a form of societal neurosis. In the medical world, Janet continued to map dissociation, but the military remained aloof. The catalyst for future change was the sheer scale of industrialization; the 'machine' was becoming faster than the human reaction time.",
        "key_manifestations": [
          "The Riddle of the Sands (Book)",
          "The Call of the Wild (Novel - reversion to the primitive)",
          "Weininger's Sex and Character (Book - gendered psychology)",
          "First powered flight (Tech - adding a new dimension of stress)"
        ]
      },
      "1904": {
        "variance_explained": 4.5,
        "description": "The Russo-Japanese War (+1.0%). The first true industrial war. Russian psychiatrists were the first to identify 'War Psychosis' as a distinct category caused by the intensity of artillery. They set up forward treatment centers (a precursor to PIE). The Japanese 'Bushido' code suppressed reports of trauma, framing it as a failure of spirit. The West largely ignored the Russian medical reports, attributing the madness to the 'Slavic soul.'",
        "key_manifestations": [
          "Russian Red Cross psychiatric reports (Medical Event)",
          "The Sea-Wolf (Novel - psychological dominance)",
          "Battle of the Sha Ho (Artillery intensity)",
          "Peter Pan (Play - retreat to childhood)"
        ]
      },
      "1905": {
        "variance_explained": 5.0,
        "description": "The Russian Revolution of 1905 (+0.5%). The collapse of the Russian Navy at Tsushima was partly attributed to low morale and mutinous neurosis. The 'Potemkin' mutiny was a collective psychological break with authority. In Vienna, Freud published *Three Essays on the Theory of Sexuality*, moving the center of trauma to the libido. The gap between the Trench (reality) and the Couch (theory) remained vast.",
        "key_manifestations": [
          "Three Essays on the Theory of Sexuality (Book)",
          "Potemkin Mutiny (Event)",
          "Battle of Mukden (Mental exhaustion of armies)",
          "Professor Unrat (Book - psychological ruin)"
        ]
      },
      "1906": {
        "variance_explained": 5.2,
        "description": "The San Francisco Earthquake (+0.2%). A civilian study in mass trauma and resilience. William James observed the reaction, noting that action cured anxiety. In the military, the 'Falli\u00e8res Decree' in France emphasized the offensive, effectively banning the defensive mindset and thus institutionalizing the denial of fear. To dig in was to admit fear; to attack was to be sane.",
        "key_manifestations": [
          "San Francisco Earthquake (Event)",
          "White Fang (Novel)",
          "The Jungle (Psychological toll of poverty)",
          "Falli\u00e8res Decree (Doctrine)"
        ]
      },
      "1907": {
        "variance_explained": 5.5,
        "description": "Stasis (+0.3%). The Second Hague Conference tried to civilize war, a psychological defense mechanism against the growing horror of technology. Joseph Conrad's *The Secret Agent* explored the psychology of the terrorist and the police\u2014the fragmentation of the modern mind. The military focus was entirely on logistics and firepower (Clusters 1 & 12), treating the human element as a constant variable.",
        "key_manifestations": [
          "The Secret Agent by Conrad (Novel)",
          "Hague Convention (Legal soothing)",
          "Picasso's Les Demoiselles d'Avignon (Art - fractured perspective)",
          "Baden-Powell's Scouting (Discipline as mental health)"
        ]
      },
      "1908": {
        "variance_explained": 5.8,
        "description": "The Young Turk Revolution and the Bosnian Crisis (+0.3%). The rise of 'Social Tension.' In the US, Clifford Beers published *A Mind That Found Itself*, launching the Mental Hygiene movement. This was the first attempt to destigmatize mental illness in the civilian sphere, though the military remained hermetically sealed against it. The idea that mental health could be 'managed' began to form.",
        "key_manifestations": [
          "A Mind That Found Itself by Clifford Beers (Book)",
          "The War in the Air by Wells (Global panic)",
          "Sorel's Reflections on Violence (Psychology of the myth)",
          "Scouting for Boys (Book)"
        ]
      },
      "1909": {
        "variance_explained": 6.0,
        "description": "The 'Phantom Airship' scare in Britain (+0.2%). Mass hysteria. The population projected its anxieties onto the sky. It demonstrated the fragility of the civilian psyche to the threat of 'War from the Air' (Cluster 3). Freud lectured at Clark University in the US, bringing psychoanalysis to the Anglosphere. The language of the subconscious began to permeate the culture.",
        "key_manifestations": [
          "Phantom Airship Scare (Cultural Event)",
          "Freud's Clark University Lectures (Intellectual Event)",
          "The Machine Stops (Story - isolation and dependency)",
          "Marinetti's Manifesto (Glorifying the adrenaline of war)"
        ]
      },
      "1910": {
        "variance_explained": 6.5,
        "description": "Halley's Comet panic (+0.5%). 'Comet Pills' and gas masks. A dry run for chemical warfare anxiety (Cluster 11). The 'Great Illusion' argued that war was economically impossible, a psychological denial of the looming conflict. The death of Edward VII signaled the end of the 'safe' Victorian/Edwardian father-figure era, increasing societal anxiety.",
        "key_manifestations": [
          "Halley's Comet Panic (Event)",
          "The Great Illusion (Book)",
          "Howards End (Novel - 'Only Connect')",
          "Report on the Feeble-Minded (Eugenics context)"
        ]
      },
      "1911": {
        "variance_explained": 7.0,
        "description": "The Agadir Crisis (+0.5%). The 'War Scare' became a permanent psychological condition. Nerves were frayed. The concept of 'Neurasthenia' (nervous exhaustion) became the fashionable diagnosis for the elite. It was a 'civilization disease.' The military still regarded it as a weakness of the will, but admitted that the pace of modern war strained the nerves.",
        "key_manifestations": [
          "Agadir Crisis (Event)",
          "Bleuler coins the term 'Schizophrenia' (Medical Event)",
          "Fantomas (The terror of the unseen criminal)",
          "Taylor's Scientific Management (The worker as machine)"
        ]
      },
      "1912": {
        "variance_explained": 7.5,
        "description": "The sinking of the Titanic (+0.5%). A massive cultural trauma. The failure of technology and the 'unsinkable' confidence. It shattered the psychological security of the Edwardian age. 'Women and children first' reinforced the gendered protective role of the male, which would be inverted in the trenches where men were helpless. The Balkan Wars showed the brutality of ethnic conflict, but were viewed as 'savage' behavior.",
        "key_manifestations": [
          "Sinking of the Titanic (Event)",
          "Jung's Psychology of the Unconscious (Book)",
          "The Lost World (Novel - retreat to the primitive)",
          "Balkan War atrocities reports (Event)"
        ]
      },
      "1913": {
        "variance_explained": 8.0,
        "description": "Stasis (+0.5%). The Rite of Spring riot. A cultural nervous breakdown. The audience could not handle the dissonance. It prefigured the sensory overload of the bombardment. In the military, the Three-Year Law in France increased the strain on conscripts. Suicide rates in barracks were a quiet indicator of the coming storm.",
        "key_manifestations": [
          "Rite of Spring Riot (Cultural Event)",
          "Sons and Lovers by Lawrence (Oedipal conflict)",
          "Zabern Affair (Military arrogance)",
          "Alain-Fournier's Le Grand Meaulnes (Lost innocence)"
        ]
      },
      "1914": {
        "variance_explained": 20.0,
        "description": "The Great Shock (+12.0%). The Retreat from Mons. The Battle of the Frontiers. The 'War of Movement' exhausted the troops physically, but the 'Trench' froze them psychologically. Men arrived at base hospitals blind, deaf, or mute without physical injury. Myers coined 'Shell Shock' to describe it, implying a physical concussion to the nerves to make it acceptable. It was a euphemism to preserve the soldier's honor while admitting his incapacity.",
        "key_manifestations": [
          "Myers coins 'Shell Shock' (Medical Event)",
          "The Retreat from Mons (Event - extreme exhaustion)",
          "Christmas Truce (Psychological rejection of the war)",
          "Establishing of the first neurological centers in France (Institutional Event)"
        ]
      },
      "1915": {
        "variance_explained": 35.0,
        "description": "The Epidemic of Hysteria (+15.0%). As the stalemate hardened, 'Shell Shock' spread like a virus. It became an unconscious exit strategy for the trapped soldier. The symptoms were hysterical: paralysis, contractures. The military response was harsh: 'disciplinary treatment.' Electric shock therapy (Faradization) was used to 'force' the limb to move. The execution of soldiers for 'cowardice' began, ignoring the medical reality.",
        "key_manifestations": [
          "Use of Faradization (Medical Event)",
          "Execution of Private Harry Farr (Legal Event)",
          "Freud's 'Thoughts for the Times on War and Death' (Essay)",
          "The Rainbow by D.H. Lawrence (Novel)"
        ]
      },
      "1916": {
        "variance_explained": 55.0,
        "description": "The Somme and PIE (+20.0%). The industrial slaughter of the Somme produced psychiatric casualties on a scale that threatened the army's manpower. 40% of casualties in some sectors. The system could not evacuate them all. 'Forward Psychiatry' (PIE: Proximity, Immediacy, Expectancy) was developed. Treat them near the front, tell them they will recover, send them back. It was 'veterinary' psychiatry: fixing the horse to work again.",
        "key_manifestations": [
          "Battle of the Somme (Trauma Event)",
          "Establishment of Craiglockhart War Hospital (Institutional Event)",
          "Adoption of PIE principles (Medical Doctrine)",
          "Sassoon's 'Soldier's Declaration' (Political/Psychological protest)"
        ]
      },
      "1917": {
        "variance_explained": 65.0,
        "description": "The Talking Cure (+10.0%). At Craiglockhart, W.H.R. Rivers treated officers (Sassoon, Owen) using Freudian-influenced talk therapy. This was a class divide: Officers got therapy (Neurasthenia); men got drill (Hysteria). The cultural output of this year (Owen's poetry) defined the trauma for the century. The French Mutinies were a collective 'Shell Shock'\u2014a refusal to continue the madness.",
        "key_manifestations": [
          "Wilfred Owen and Siegfried Sassoon at Craiglockhart (Cultural Event)",
          "French Army Mutinies (Collective breakdown)",
          "Yeats' 'The Second Coming' (Drafting)",
          "Introduction of the term 'War Neurosis' (Medical shift)"
        ]
      },
      "1918": {
        "variance_explained": 60.0,
        "description": "The Legacy of the Dead (-5.0%). The war ended, but the 'Shaking Palsies' filled the streets. The 'Pension War' began. The government argued that lingering trauma was due to 'constitutional inferiority' (bad genes) to avoid paying. The 'Burnt Out' case became a social pariah. The Spanish Flu added an organic layer of delirium and depression to the survivor's guilt.",
        "key_manifestations": [
          "Pension tribunals for Shell Shock (Legal Event)",
          "Rebecca West's The Return of the Soldier (Novel)",
          "Spanish Flu delirium (Medical Event)",
          "Barker's Regeneration (Retrospective context of 1918)"
        ]
      },
      "1919": {
        "variance_explained": 50.0,
        "description": "The Repression (-10.0%). The desire to return to 'Normalcy.' The memory of the trauma was suppressed. The 'Cenotaph' provided a focal point for grief, but individual madness was hidden in asylums. The 'Lost Generation' narrative began to form\u2014a psychological wound on the demographic body.",
        "key_manifestations": [
          "Unveiling of the Cenotaph (Event)",
          "Freud's 'Beyond the Pleasure Principle' (Theory of the Death Drive)",
          "The Cabinet of Dr. Caligari (Film - the madman's view)",
          "Treaty of Versailles (The trauma of defeat in Germany)"
        ]
      },
      "1920": {
        "variance_explained": 45.0,
        "description": "The Southborough Committee (-5.0%). The British government inquiry into Shell Shock. It concluded that the term should be abolished to prevent 'suggestion' in future wars. It codified the 'Cowardice' narrative for the next generation. The 'Screening' hypothesis was born: we must filter out the weak before they join.",
        "key_manifestations": [
          "Southborough Committee Report (Policy)",
          "Women in Love (Novel - the damaged male)",
          "Burial of the Unknown Soldier (Anonymizing the trauma)",
          "Kapp Putsch (The violence of the traumatized Freikorps)"
        ]
      },
      "1921": {
        "variance_explained": 40.0,
        "description": "Stasis (-5.0%). The focus shifted to 'Nerves' in the civilian population. The 'Jazz Age' was a manic defense against the depressive reality. In Germany, the 'Kriegszitterer' (War quiverers) were denied pensions, fueling the resentment that the Nazis would exploit. The trauma was politicized.",
        "key_manifestations": [
          "German pension cuts for neurotics (Policy)",
          "Tractatus Logico-Philosophicus (Philosophy - silence on the unspeakable)",
          "Pirandello's Six Characters (Fractured identity)",
          "Three Soldiers by Dos Passos (Disillusionment)"
        ]
      },
      "1922": {
        "variance_explained": 42.0,
        "description": "Literature as Therapy (+2.0%). *The Waste Land* and *Jacob's Room*. High Modernism was the aesthetic of Shell Shock\u2014fragmentation, dissonance, the inability to connect. The culture was processing what the doctors had dismissed. Septimus Smith in *Mrs. Dalloway* (writing began) became the archetype of the ignored veteran.",
        "key_manifestations": [
          "The Waste Land by T.S. Eliot (Poem)",
          "Jacob's Room by Virginia Woolf (Novel)",
          "War Office ban on the term 'Shell Shock' (Policy)",
          "Mussolini's rise (The triumph of the trench fighter)"
        ]
      },
      "1923": {
        "variance_explained": 40.0,
        "description": "Hyperinflation and Anxiety (-2.0%). In Germany, the economic collapse triggered a mass re-traumatization. The security of the 'Home' vanished. This fed the 'Stab in the Back' myth\u2014that the 'neurotic' home front had betrayed the 'steely' front line. Hitler's rhetoric capitalized on this: he offered hardness to cure the national neurosis.",
        "key_manifestations": [
          "German Hyperinflation (Event)",
          "Beer Hall Putsch (Event)",
          "Dix's Trench Art (Visualizing the horror)",
          "Time Magazine founded (Media)"
        ]
      },
      "1924": {
        "variance_explained": 38.0,
        "description": "The Magic Mountain (-2.0%). Thomas Mann. The sanatorium as a metaphor for a sick Europe. The withdrawal from life. In the US, the 'Bonus Army' agitation began\u2014veterans demanding compensation for their lost years/health. The state resisted.",
        "key_manifestations": [
          "The Magic Mountain (Book)",
          "Breton's Surrealist Manifesto (Art - accessing the unconscious)",
          "World War Adjusted Compensation Act (Legal Event)",
          "Kafka's The Hunger Artist (Story)"
        ]
      },
      "1925": {
        "variance_explained": 38.0,
        "description": "Mrs. Dalloway (+0.0%). Woolf published the definitive portrait of the shell-shocked veteran (Septimus) and the oblivious doctor (Bradshaw). It indicted the medical establishment for enforcing 'Proportion' (conformity) over healing. *The Great Gatsby* showed the manic denial of the past.",
        "key_manifestations": [
          "Mrs. Dalloway (Book)",
          "The Great Gatsby (Book)",
          "Mein Kampf (The hardened veteran's manifesto)",
          "Locarno Treaties (The illusion of peace)"
        ]
      },
      "1926": {
        "variance_explained": 36.0,
        "description": "The Sun Also Rises (-2.0%). Hemingway. The 'impotent' veteran (Jake Barnes). The physical wound as a symbol of psychological castration. The 'Lost Generation' accepted their damage as an identity. The focus was on endurance, not cure.",
        "key_manifestations": [
          "The Sun Also Rises (Book)",
          "Seven Pillars of Wisdom (Lawrence's trauma)",
          "General Strike in UK (Social friction)",
          "Metropolis (Film)"
        ]
      },
      "1927": {
        "variance_explained": 35.0,
        "description": "Stasis. Pavlov's *Conditioned Reflexes*. The mechanistic view of the mind returned. If trauma is conditioning, can it be de-conditioned? This laid the groundwork for behaviorist approaches to combat stress.",
        "key_manifestations": [
          "Conditioned Reflexes by Pavlov (Book)",
          "The Jazz Singer (Film)",
          "Being and Time (Philosophy - anxiety/dread)",
          "To the Lighthouse (Book)"
        ]
      },
      "1928": {
        "variance_explained": 35.0,
        "description": "The Boom (+0.0%). The economic boom masked the lingering issues. But *Sherriff's Journey's End* (play) premiered. It depicted alcoholism and fear in the dugout with brutal honesty. It was a massive hit. The public was finally ready to look at the wound again.",
        "key_manifestations": [
          "Journey's End (Play)",
          "Parade's End by Ford Madox Ford (Novel)",
          "Lady Chatterley's Lover (Book)",
          "Kellogg-Briand Pact (Event)"
        ]
      },
      "1929": {
        "variance_explained": 40.0,
        "description": "The War Boom in Literature (+5.0%). *All Quiet on the Western Front*, *Goodbye to All That*, *Death of a Hero*. The floodgates opened. The 'Myth of the War' shifted from Glory to Trauma. The 'Anti-War' sentiment was fueled by the detailed description of mental disintegration. The Crash added economic insecurity to the mix.",
        "key_manifestations": [
          "All Quiet on the Western Front (Book)",
          "Goodbye to All That (Book)",
          "A Farewell to Arms (Book)",
          "Wall Street Crash (Event)"
        ]
      },
      "1930": {
        "variance_explained": 42.0,
        "description": "Civilization and Its Discontents (+2.0%). Freud. The aggressive instinct is innate. Trauma is the price of civilization. In Germany, the Nazis attacked *All Quiet* as 'defeatist.' The battle over the *meaning* of trauma began: was it a warning against war, or a weakness to be purged?",
        "key_manifestations": [
          "Civilization and Its Discontents (Book)",
          "Nazi protests against All Quiet film (Event)",
          "The 42nd Parallel (Book)",
          "Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 40.0,
        "description": "Stasis. The 'Men with Broken Faces' (Gueules cass\u00e9es). The physical reconstruction of the face mirrored the attempted reconstruction of the mind. But the cracks remained. Economic desperation forced many veterans into the radical fringes.",
        "key_manifestations": [
          "M (Film - the psychopath)",
          "Union des Gueules Cass\u00e9es activities (Event)",
          "Mukden Incident (Renewed war)",
          "Waves by Woolf (Book)"
        ]
      },
      "1932": {
        "variance_explained": 40.0,
        "description": "C\u00e9line's *Journey to the End of the Night* (+0.0%). The ultimate nihilist text. Bardamu's cowardice and cynicism were presented as the only sane reaction to the slaughter. It was the anti-heroic apex. The 'Bonus Army' march in DC\u2014veterans demanding pay, met with tanks. The trauma turned political.",
        "key_manifestations": [
          "Journey to the End of the Night (Book)",
          "Bonus Army March (Event)",
          "Brave New World (Book)",
          "Scarface (Film)"
        ]
      },
      "1933": {
        "variance_explained": 45.0,
        "description": "The Nazi Cure (+5.0%). Hitler in power. The 'Psychology of the Will.' Mental illness was equated with genetic defect. Sterilization laws. The traumatized veteran was honored *if* he was a Nazi; if he was a pacifist, he was a traitor. The state mandated 'Hardness.'",
        "key_manifestations": [
          "Nazi Sterilization Law (Policy)",
          "Testament of Youth by Brittain (Book)",
          "King Kong (Film)",
          "Book Burnings (Event)"
        ]
      },
      "1934": {
        "variance_explained": 45.0,
        "description": "Tender is the Night (+0.0%). Fitzgerald. The psychiatrist (Diver) absorbs the madness of his patient/wife and is destroyed. The transference of trauma. The 'Crack-Up.' In the military, the US Army began researching 'screening' to prevent the 1918 pension disaster.",
        "key_manifestations": [
          "Tender is the Night (Book)",
          "Night of the Long Knives (Event)",
          "It Happened One Night (Film)",
          "Tropic of Cancer (Book)"
        ]
      },
      "1935": {
        "variance_explained": 48.0,
        "description": "Rearmament and Anxiety (+3.0%). As war loomed, the memory of 1914-18 returned as a nightmare. 'The Bomber will always get through' triggered a civilian neurosis about gas and fire. Air Raid Precautions (ARP) were psychological management as much as physical.",
        "key_manifestations": [
          "ARP planning begins (Policy)",
          "Triumph of the Will (Film - the cure for doubt)",
          "Things to Come (Film - future war terror)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 50.0,
        "description": "Spanish Civil War (+2.0%). The first bombing of cities. The psychological impact on civilians was studied. To the surprise of experts, panic was rare; fatalism was common. This data (from Zuckerman) was debated: would Londoners break?",
        "key_manifestations": [
          "Bombing of Madrid (Event)",
          "General Theory by Keynes (Economic psychology)",
          "Modern Times (Film)",
          "Homage to Catalonia (Context)"
        ]
      },
      "1937": {
        "variance_explained": 52.0,
        "description": "Guernica (+2.0%). The image of the screaming horse. Picasso captured the psychic fragmentation of the air raid. It became the icon of the cluster. Japanese atrocities in China (Nanking) revealed the psychology of the perpetrator: the unleashing of the id.",
        "key_manifestations": [
          "Guernica (Art/Event)",
          "Rape of Nanking (Event)",
          "The Road to Wigan Pier (Book)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 55.0,
        "description": "Nausea (+3.0%). Sartre. Existential dread. The feeling of the contingency of existence. *War of the Worlds* broadcast\u2014mass panic. It proved that the 'herd' was on the edge of hysteria. The 'Munich' relief was a manic episode before the depression of war.",
        "key_manifestations": [
          "Nausea (Book)",
          "War of the Worlds broadcast (Event)",
          "Munich Crisis (Event)",
          "Brighton Rock (Book)"
        ]
      },
      "1939": {
        "variance_explained": 58.0,
        "description": "The Screening Failure (+3.0%). War began. US and UK psychiatrists believed they could 'screen out' neurotics at induction. They rejected millions. It was a fallacy; every man has a breaking point. The 'Phoney War' was a period of high anxiety but low trauma.",
        "key_manifestations": [
          "Induction Screening begins (Policy)",
          "The Phoney War (Psychological strain)",
          "Grapes of Wrath (Book)",
          "Finnegans Wake (Book)"
        ]
      },
      "1940": {
        "variance_explained": 65.0,
        "description": "Dunkirk and the Blitz (+7.0%). Dunkirk survivors were catatonic. 'Acute battle reaction.' Narco-analysis (Sodium Amytal) was used to induce abreaction (reliving the trauma). The Blitz showed that civilians were tougher than predicted. 'London Can Take It.' The 'morale' of the group protected the individual.",
        "key_manifestations": [
          "Dunkirk evacuations (Trauma event)",
          "Use of Sodium Amytal (Tech Event)",
          "The Blitz (Event)",
          "Darkness at Noon (Book - psychology of confession)"
        ]
      },
      "1941": {
        "variance_explained": 70.0,
        "description": "Barbarossa and Pearl Harbor (+5.0%). Total War. The scale of violence in Russia ('War of Annihilation') created a new level of brutalization. The SS 'Einsatzgruppen' shooters suffered from psychological stress; Himmler ordered 'more humane' methods (Gas Vans) *for the killers' sake*. The psychology of the perpetrator became a logistical problem.",
        "key_manifestations": [
          "Himmler's Minsk speech on SS mental stress (Event)",
          "Pearl Harbor (Shock)",
          "The Sullivans (Film - loss)",
          "Fromm's Escape from Freedom (Book)"
        ]
      },
      "1942": {
        "variance_explained": 75.0,
        "description": "LMF (Lack of Moral Fiber) (+5.0%). The RAF terminology. Punitive. Pilots were stripped of rank for refusing to fly. The 'Tour of Duty' (30 missions) was introduced to give a horizon to the stress. In the US, the 'Screening' was failing; psychiatric casualties mounted in the Pacific (Guadalcanal).",
        "key_manifestations": [
          "LMF procedures in RAF (Policy)",
          "Guadalcanal 'jungle madness' (Event)",
          "The Seventh Cross (Book)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 85.0,
        "description": "Combat Fatigue (+10.0%). The turning point. US forces in Tunisia/Italy. Losses from 'neuropsychiatric' causes exceeded replacements. The 'Patton Slapping Incident' brought the conflict between 'Old Guts' and 'New Psychiatry' to the public. Grinker and Spiegel formulated the 'Combat Fatigue' diagnosis: it is not weakness, it is exhaustion. 90 days on the line breaks anyone.",
        "key_manifestations": [
          "Patton Slapping Incident (Event)",
          "Grinker and Spiegel's work (Medical Event)",
          "Battle of Kasserine Pass (Event)",
          "A Guy Named Joe (Film)"
        ]
      },
      "1944": {
        "variance_explained": 90.0,
        "description": "The Breaking Point (+5.0%). Normandy. The hedgerows. Continuous combat. 'The Two-Thousand Yard Stare.' The US Army accepted that psychiatric breakdown was inevitable. 'Rotation' policies were discussed but hard to implement. Pervitin (Speed) use in German army to stave off exhaustion led to addiction and crash.",
        "key_manifestations": [
          "The Two-Thousand Yard Stare (Art/Concept)",
          "Battle of the Bulge (Stress of cold/surprise)",
          "Pervitin usage (Tech Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 100.0,
        "description": "Concentration Camp Syndrome and The Bomb (+10.0%). The liberation of the camps. The trauma of the survivor ('Survivor Guilt'). The trauma of the liberator (witnessing). The Atomic Bomb created 'Hibakusha'\u2014a new category of existential trauma (radiation + annihilation). The mind could not process the scale of the death. The 'Nuremberg Mind'\u2014psychologists studied the Nazis (Rorschach tests).",
        "key_manifestations": [
          "Liberation of the Camps (Event)",
          "Hiroshima/Nagasaki (Event)",
          "Rorschach tests on Nazis (Medical Event)",
          "The Lost Weekend (Film)"
        ]
      },
      "1946": {
        "variance_explained": 95.0,
        "description": "Let There Be Light (-5.0% Suppression). John Huston's documentary on the treatment of diverse soldiers. The Army banned it. It showed the shaking, crying, stuttering reality. The US passed the National Mental Health Act\u2014acknowledging that the war had revealed a national mental health crisis. Psychiatry moved from the asylum to the community.",
        "key_manifestations": [
          "Let There Be Light (Film - Banned)",
          "National Mental Health Act (Legal Event)",
          "Best Years of Our Lives (Film - veteran readjustment)",
          "Man's Search for Meaning (Frankl - drafting)"
        ]
      },
      "1947": {
        "variance_explained": 92.0,
        "description": "The Veteran's Return (-3.0%). The 'GI Bill' helped reintegration, but the domestic sphere was strained. Film Noir reflected the cynical, damaged male psyche. 'The Stranger.' The Cold War anxiety ('The Age of Anxiety' by Auden) replaced War Trauma. The fear shifted from the trench to the bomb.",
        "key_manifestations": [
          "The Age of Anxiety by Auden (Poem)",
          "A Streetcar Named Desire (Play - Stanley as the brute veteran)",
          "Film Noir peak (Cultural style)",
          "Establishment of the VA psychology training (Institutional Event)"
        ]
      },
      "1948": {
        "variance_explained": 90.0,
        "description": "The Naked and the Dead (-2.0%). Mailer. The de-romanticization of the war. The focus on the arbitrary nature of death and the crushing bureaucracy. Psychiatry was now a standard part of the VA hospital system. The 'Lobotomy' boom began as a way to manage chronic cases.",
        "key_manifestations": [
          "The Naked and the Dead (Book)",
          "Lobotomy popularity (Medical Trend)",
          "1948 Arab-Israeli War (New trauma)",
          "The Snake Pit (Film - asylum reform)"
        ]
      },
      "1949": {
        "variance_explained": 88.0,
        "description": "1984 (-2.0%). Orwell. The ultimate trauma: the destruction of the self by the State (Room 101). 'He loved Big Brother.' It was a study in the psychology of totalitarianism (Cluster 5). The Soviet Bomb heightened the 'Atomic Anxiety.'",
        "key_manifestations": [
          "1984 (Book)",
          "Death of a Salesman (Play - the breakdown of the American Dream)",
          "Soviet Bomb (Event)",
          "The Third Man (Film)"
        ]
      },
      "1950": {
        "variance_explained": 92.0,
        "description": "Korea and Brainwashing (+4.0%). The Korean War. A new kind of trauma: 'Brainwashing' (The Manchurian Candidate seeds). The fear that the mind could be reprogrammed by the enemy. 'Combat Fatigue' was renamed 'Combat Exhaustion.' The cycle began again.",
        "key_manifestations": [
          "Korean War begins (Event)",
          "Dianetics by Hubbard (Book - purging 'engrams'/trauma)",
          "The Lonely Crowd (Book)",
          "Introduction of Thorazine (1950s - chemical lobotomy begins)"
        ]
      }
    }
  },
  "23_economic_blockade_starvation": {
    "name": "Economic Blockade & Starvation (The Hunger Weapon)",
    "description": "This eigencluster represents the strategic rationalization of attacking an enemy's metabolic energy\u2014food, raw materials, and industrial inputs\u2014rather than their armed forces. It shifts the center of gravity from the battlefield to the calorie count of the civilian population. It tracks the evolution from the 19th-century 'Paper Blockade' to the 'Total Blockade' of WWI, the weaponization of famine in the interwar Soviet Union, the genocidal 'Hunger Plan' of the Nazis, and the submarine strangulation of Japan. It marks the collapse of the distinction between combatant and non-combatant, redefining the citizen as a biological unit of the enemy state to be denied sustenance.",
    "trajectory": {
      "1890": {
        "variance_explained": 3.0,
        "description": "The decade begins with the cluster in a dormant, theoretical state (+0.0%). The global economy was defined by the 'Pax Britannica' and free trade, where the flow of grain was considered sacrosanct and separate from war. However, the publication of Mahan's *The Influence of Sea Power upon History* this year planted the intellectual seed: control of the sea meant control of the enemy's economic life. The displacing force was the strong legalistic tradition of the 19th century which viewed war as a contest between uniformed armies, explicitly protecting private property and commerce at sea.",
        "key_manifestations": [
          "The Influence of Sea Power upon History by Mahan (Book)",
          "Sherman Antitrust Act (Domestic economic control)",
          "Naval Defence Act of 1889 (Infrastructure for future blockade)",
          "Hunger by Knut Hamsun (Novel - the individual experience of starvation)"
        ]
      },
      "1891": {
        "variance_explained": 3.2,
        "description": "A slight uptake (+0.2%) driven by the Russian Famine of 1891-92. While caused by weather and policy, it demonstrated the strategic fragility of grain logistics. The banning of grain exports by the Tsar was an early form of 'economic autarky' in response to crisis. In naval circles, the 'Jeune \u00c9cole' in France continued to argue for torpedo boat warfare against British commerce, foreshadowing the U-boat campaigns. The concept that a nation could be brought to its knees by cutting its supply lines was gaining traction among theorists.",
        "key_manifestations": [
          "Russian Famine of 1891 (Event)",
          "Jeune \u00c9cole strategic papers (Doctrine)",
          "Kipling's 'The Light That Failed' (Cultural context of empire strain)",
          "Formation of the Pan-German League (Resource anxiety)"
        ]
      },
      "1892": {
        "variance_explained": 3.5,
        "description": "Stasis (+0.3%). The Cholera Riots in Hamburg highlighted the link between trade, hygiene, and state control of borders. A blockade was not just about stopping goods, but stopping biological threats. The debate over 'Contraband' began to heat up in international law circles: was food contraband? The prevailing view remained 'No,' maintaining the humanitarian shield that would later be shredded. The variance is driven by the increasing integration of global food markets, making nations more vulnerable to interruption.",
        "key_manifestations": [
          "Hamburg Cholera outbreak (Event - closing of port)",
          "Johnson County War (Resource denial tactics in range war)",
          "Zola's The Debacle (Logistical failure in war)",
          "Mahan's influence on Naval War College curriculum (Event)"
        ]
      },
      "1893": {
        "variance_explained": 3.8,
        "description": "The Panic of 1893 (+0.3%). A global economic contraction that exposed the fragility of the trade networks. While not a military blockade, the disruption of credit and trade acted as a simulation of economic warfare. In France, the Franco-Russian Alliance was solidified, partly to ensure food security for France and capital for Russia\u2014a defensive economic pact. The 'grain weapon' was becoming a diplomatic tool.",
        "key_manifestations": [
          "Panic of 1893 (Economic Event)",
          "Franco-Russian Alliance ratification (Diplomatic Event)",
          "Turner's Frontier Thesis (Resource anxiety)",
          "Dvorak's New World Symphony (Cultural integration)"
        ]
      },
      "1894": {
        "variance_explained": 4.0,
        "description": "The Sino-Japanese War (+0.2%). Japan aimed to cut off Chinese supply lines to Korea. The capture of Port Arthur was a logistical coup. However, the war was decided by battle, not starvation. The variance shift is latent; the industrial capacity to enforce a 'distant blockade' was still maturing. The 'Declaration of Paris' (1856) rules still technically protected neutral shipping, acting as a displacing force against total economic warfare.",
        "key_manifestations": [
          "Battle of the Yalu River (Control of sea lanes)",
          "Pullman Strike in US (Rail blockade)",
          "The Jungle Book (Law of the Jungle - scarce resources)",
          "Development of the modern destroyer (Blockade enforcer)"
        ]
      },
      "1895": {
        "variance_explained": 4.5,
        "description": "The Cuban War of Independence (+0.5%). Spain implemented the 'Reconcentrado' policy. General Weyler moved the rural population into camps to deny food to the rebels. This was the weaponization of starvation against a civilian population to break an insurgency. It was a localized 'blockade' of the countryside. The high death rates from starvation shocked the US public, creating the humanitarian pretext for intervention.",
        "key_manifestations": [
          "Reconcentrado policy in Cuba (Policy)",
          "Jameson Raid (Economic imperialism)",
          "The Time Machine (Resource scarcity future)",
          "Roentgen discovers X-rays (Scientific distraction)"
        ]
      },
      "1896": {
        "variance_explained": 4.8,
        "description": "Stasis (+0.3%). The famine in India. The British colonial administration's adherence to free market principles allowed grain export while locals starved. This was 'economic warfare' by neglect/ideology. It highlighted the power of the administrator to determine who eats. In the US, the election of 1896 was fought on economic grounds ('Cross of Gold'), mobilizing the 'starving' agrarian base.",
        "key_manifestations": [
          "Indian Famine of 1896 (Event)",
          "Cross of Gold Speech (Rhetoric)",
          "Battle of Adwa (Logistical failure of Italians)",
          "Island of Dr. Moreau (Biological control)"
        ]
      },
      "1897": {
        "variance_explained": 5.0,
        "description": "The Dingley Tariff in the US (+0.2%). Protectionism. Economic walls were being raised. This is the peacetime precursor to blockade\u2014denying the enemy access to your market. The 'Tirpitz Plan' in Germany began, explicitly aiming to break a future British blockade. The German naval build-up was driven by the fear of starvation (food imports were rising).",
        "key_manifestations": [
          "Dingley Tariff (Economic Event)",
          "Tirpitz Plan initiated (Strategic Event)",
          "Dracula (Invasion of the blood/vitality)",
          "Diamond Jubilee (Display of global trade control)"
        ]
      },
      "1898": {
        "variance_explained": 6.0,
        "description": "Spanish-American War (+1.0%). The US Navy blockaded Cuba. A formal, effective blockade. It demonstrated that a modern navy could completely isolate an island. Starvation in Havana contributed to the Spanish surrender. This validated Mahan\u2019s theories: the 'silent pressure' of sea power. The Fashoda Incident also turned on logistics; the French had to withdraw because they could not resupply.",
        "key_manifestations": [
          "US Blockade of Cuba (Event)",
          "Fashoda Incident (Logistical defeat)",
          "War of the Worlds (Wells describes the collapse of social order)",
          "The Open Door Note (Economic access)"
        ]
      },
      "1899": {
        "variance_explained": 7.0,
        "description": "The Hague Convention and the Boer War (+1.0%). The Hague attempted to ban certain weapons but failed to ban the starvation of civilians. In South Africa, the British began 'scorched earth' tactics to starve the Boer Commandos. Burning farms and killing livestock. The strategy shifted from fighting the enemy to destroying their biological support system. The variance rose as the 'Hunger Weapon' was applied by a liberal democracy.",
        "key_manifestations": [
          "Hague Convention II (Legal Event)",
          "Scorched Earth in South Africa (Policy)",
          "Theory of the Leisure Class (Veblen - economic consumption)",
          "McTeague (Novel - decline into starvation)"
        ]
      },
      "1900": {
        "variance_explained": 8.0,
        "description": "Siege of the Legations (+1.0%). Peking. The diplomats were besieged and nearly starved. It was a microcosm of the cluster: the civilized world cut off. In South Africa, the concentration camps (for Boer families) saw high mortality due to reduced rations for families of fighting men\u2014weaponized calorie counts. This was the administrative application of hunger.",
        "key_manifestations": [
          "Siege of the Legations (Event)",
          "Boer War Concentration Camp rations (Policy)",
          "Sister Carrie (Novel - economic precariousness)",
          "Boxer Rebellion indemnities (Economic punishment)"
        ]
      },
      "1901": {
        "variance_explained": 8.2,
        "description": "Stasis (+0.2%). The Emily Hobhouse report exposed the starvation in the camps. Public outrage in Britain. It showed that the 'Hunger Weapon' had political blowback in a democracy. The British government rushed to improve rations, acknowledging the moral line. However, the effectiveness of the tactic in ending the war was undeniable.",
        "key_manifestations": [
          "Hobhouse Report (Political Event)",
          "Insular Cases (US trade law and colonies)",
          "The Octopus (Novel - railroad monopoly as strangulation)",
          "First Nobel Prizes (Civilian achievement)"
        ]
      },
      "1902": {
        "variance_explained": 8.5,
        "description": "The Venezuela Blockade (+0.3%). Britain, Germany, and Italy blockaded Venezuela to enforce debt repayment. 'Gunboat Diplomacy' turning into economic siege. The US intervened (Roosevelt Corollary) to prevent European occupation, but accepted the blockade's legality. It established that starvation was a legitimate tool of debt collection.",
        "key_manifestations": [
          "Venezuela Crisis of 1902-03 (Event)",
          "Hobson's Imperialism (Book - economic critique)",
          "Heart of Darkness (Book - resource extraction)",
          "End of Boer War (Victory by attrition)"
        ]
      },
      "1903": {
        "variance_explained": 8.8,
        "description": "Stasis (+0.3%). The Tariff Reform League formed in UK. Chamberlain argued for 'Imperial Preference.' A move away from Free Trade towards an imperial economic bloc. This defensive economic wall was the precursor to the autarkic blocs of the 1930s. The fear was that Britain could not feed itself in war.",
        "key_manifestations": [
          "Tariff Reform League launch (Political Event)",
          "The Riddle of the Sands (Book - invasion logistics)",
          "Call of the Wild (Book - survival of the fittest)",
          "Pogroms in Kishinev (Economic scapegoating)"
        ]
      },
      "1904": {
        "variance_explained": 9.5,
        "description": "Russo-Japanese War (+0.7%). Japan cut the sea link to Port Arthur. The siege was a starvation exercise. Inside the fortress, scurvy and hunger broke the Russian will as much as the 11-inch howitzers. Western observers noted the vulnerability of isolated garrisons. The 'food question' became central to fortress doctrine.",
        "key_manifestations": [
          "Siege of Port Arthur (Event)",
          "Battle of the Yellow Sea (Attempt to break blockade)",
          "Nostromo (Book - material interests)",
          "Mackinder's Geographical Pivot (Strategic theory)"
        ]
      },
      "1905": {
        "variance_explained": 10.0,
        "description": "The Russian Revolution of 1905 (+0.5%). Triggered by shortages and economic dislocation. The General Strike paralyzed the economy. It proved that interrupting the economic metabolism of a state could topple a regime. This was the internal equivalent of a blockade. The 'Potemkin' mutiny started over rotten meat\u2014food as the spark of revolt.",
        "key_manifestations": [
          "Potemkin Mutiny (Event)",
          "Russian General Strike (Event)",
          "The Jungle (Book - food safety anxiety)",
          "Aliens Act 1905 (UK - protecting the labor market)"
        ]
      },
      "1906": {
        "variance_explained": 10.5,
        "description": "The Dreadnought and Trade Defense (+0.5%). The Royal Navy focused on the 'Trade Defense' mission. Fisher realized that German commerce raiders could threaten British food. The 'All-Big-Gun' ship was partly to hunt down raiders. The Royal Commission on Food Supply in Time of War reported\u2014acknowledging Britain's extreme vulnerability (3 weeks of grain reserves).",
        "key_manifestations": [
          "Royal Commission on Food Supply Report (Strategic Document)",
          "Launch of HMS Dreadnought (Tech Event)",
          "The Jungle published (Cultural Event)",
          "Algeciras Conference (Diplomatic struggle over markets)"
        ]
      },
      "1907": {
        "variance_explained": 11.0,
        "description": "Second Hague Conference (+0.5%). Attempts to create an 'International Prize Court' to regulate blockade. The British pushed to define contraband strictly to protect their own imports, while reserving the right to blockade others. The tension between 'Belligerent Rights' and 'Neutral Rights' was the core friction. Germany refused to agree to limits on mines.",
        "key_manifestations": [
          "Hague Convention 1907 (Legal Event)",
          "Panic of 1907 (Financial blockade)",
          "The Secret Agent (Book)",
          "Anglo-Russian Convention (Securing the perimeter)"
        ]
      },
      "1908": {
        "variance_explained": 11.5,
        "description": "Bosnian Crisis (+0.5%). The 'Pig War' between Austria-Hungary and Serbia. Austria blockaded Serbian pork exports to economically strangle the nationalist movement. A literal trade war. It pushed Serbia toward Russia. Economic sanctions as a prelude to kinetic war.",
        "key_manifestations": [
          "The Pig War (Economic Event)",
          "Bosnian Crisis (Diplomatic Event)",
          "War in the Air (Wells - destruction of credit)",
          "Scouting for Boys (Resilience training)"
        ]
      },
      "1909": {
        "variance_explained": 12.5,
        "description": "Declaration of London (+1.0%). A conference to define the laws of naval war. It established lists of 'Absolute Contraband' (Weapons), 'Conditional Contraband' (Food/Fuel), and 'Free List' (Raw materials). It was a compromise that tried to civilize the hunger weapon. However, the loophole of 'Conditional Contraband' (food destined for forces) would be exploited in 1914 to starve everyone.",
        "key_manifestations": [
          "Declaration of London (Diplomatic Event)",
          "The Machine Stops (Story - dependency)",
          "Naval Scare of 1909 (Protecting the grain routes)",
          "People's Budget (Domestic redistribution)"
        ]
      },
      "1910": {
        "variance_explained": 13.0,
        "description": "Angell's *The Great Illusion* (+0.5%). Argued that economic integration made war futile because it would destroy the victor's wealth too. The 'interdependence' argument. It correctly identified the economic mechanism (collapse) but wrongly predicted it would deter war. It highlighted that the global economy was a single organism.",
        "key_manifestations": [
          "The Great Illusion (Book)",
          "Mexican Revolution (Resource control)",
          "Howards End (Book)",
          "Agadir Crisis preparations (Event)"
        ]
      },
      "1911": {
        "variance_explained": 14.0,
        "description": "Agadir Crisis and the House of Lords (+1.0%). The House of Lords rejected the Declaration of London. They argued it tied the Royal Navy's hands. Britain *wanted* the right to starve enemies. This rejection signaled that in a future war, the gloves would come off. The 'Hunger Weapon' was preserved by the aristocracy.",
        "key_manifestations": [
          "Rejection of Declaration of London (Political Event)",
          "Agadir Crisis (Panic in financial markets)",
          "Scientific Management (Efficiency)",
          "Triangle Shirtwaist Fire (Industrial casualty)"
        ]
      },
      "1912": {
        "variance_explained": 15.0,
        "description": "Titanic and Coal Strike (+1.0%). The UK National Coal Strike paralyzed the navy and economy. It showed that an internal blockade (strike) was as deadly as an external one. The *Titanic* carried food (refrigerated cargo)\u2014the technology of global caloric transfer. The vulnerability of the 'just-in-time' empire was exposed.",
        "key_manifestations": [
          "UK National Coal Strike (Event)",
          "Sinking of the Titanic (Event)",
          "Balkan Wars (Siege of Adrianople - starvation)",
          "The Lost World (Book)"
        ]
      },
      "1913": {
        "variance_explained": 16.0,
        "description": "German Army Bill and Grain Stockpiles (+1.0%). Germany began stockpiling grain (the 'K' bread). The 'Evers' memorandum warned that Germany could not survive a long blockade. The General Staff ignored it, betting on a short war. The 'Schlieffen Plan' was a race against the stomach.",
        "key_manifestations": [
          "German Grain Stockpiling (Strategic Event)",
          "Federal Reserve Act (Financial defense)",
          "Zabern Affair (Event)",
          "Sons and Lovers (Book)"
        ]
      },
      "1914": {
        "variance_explained": 35.0,
        "description": "The Blockade Begins (+19.0%). War. Britain declared a 'Distant Blockade.' The North Sea was declared a 'Military Area.' The distinction between 'Conditional' and 'Absolute' contraband was eroded immediately. Germany retaliated with the U-boat. The 'Hunger War' began. The German 'Kriegsbrot' (War Bread) was introduced\u2014adulterated flour.",
        "key_manifestations": [
          "Order in Council August 1914 (Legal Event)",
          "Introduction of Kriegsbrot (Social Event)",
          "Shelling of Scarborough (Terror)",
          "Defense of the Realm Act (Economic control)"
        ]
      },
      "1915": {
        "variance_explained": 45.0,
        "description": "The Tightening Noose (+10.0%). The British declared all food contraband. Germany declared 'Unrestricted Submarine Warfare' (Zone of Death around UK). The *Lusitania* was sunk\u2014carrying ammo and passengers (human shields for contraband). Rationing began in Germany (bread cards). The 'Schweinemord' (Pig Slaughter) in Germany\u2014killing pigs to save potatoes, a disastrous bureaucratic error that worsened the famine.",
        "key_manifestations": [
          "Sinking of the Lusitania (Event)",
          "The Schweinemord (Policy Failure)",
          "German Rationing Cards introduced (Social Event)",
          "The 39 Steps (Book)"
        ]
      },
      "1916": {
        "variance_explained": 60.0,
        "description": "The Turnip Winter (+15.0%). The potato crop failed. The blockade stopped nitrate imports (fertilizer). Germany starved. 700,000 civilian deaths attributed to malnutrition. The civilian population ate turnips (fodder). The social contract broke. The 'Ersatz' culture took over\u2014paper clothes, sawdust sausage. This year proved the Blockade was the decisive weapon of the war.",
        "key_manifestations": [
          "The Turnip Winter (Event)",
          "Battle of Jutland (Failed attempt to break blockade)",
          "Establishment of War Food Office (Germany) (Institutional Event)",
          "Easter Rising (Reaction to empire strain)"
        ]
      },
      "1917": {
        "variance_explained": 65.0,
        "description": "Unrestricted U-Boat Warfare (+5.0%). Germany tried to starve Britain before it starved itself. April 1917: Britain had 6 weeks of wheat left. The 'Convoy System' saved the UK. The US entry tightened the blockade on Germany to 'hermetic' levels (rationing neutrals). Russia collapsed due to Bread Riots. Hunger toppled the Tsar.",
        "key_manifestations": [
          "Russian Revolution (Bread Riots)",
          "Unrestricted U-Boat War resumes (Event)",
          "Introduction of Convoys (Strategic Event)",
          "US Espionage Act ( controlling information about shipments)"
        ]
      },
      "1918": {
        "variance_explained": 70.0,
        "description": "The Hunger Peace (+5.0%). Germany collapsed from within. The Army was hungry; the Home Front was starving. The Armistice was signed, but the Blockade *continued* to force compliance. This 'Post-War Blockade' was a trauma that defined the Nazi worldview: 'Never again.' The psychological impact of seeing children starve after the guns stopped was profound.",
        "key_manifestations": [
          "Continuation of Blockade post-Armistice (Policy)",
          "Famine in Vienna/Berlin (Event)",
          "Keynes' Economic Consequences of the Peace (Book)",
          "Spanish Flu (Exacerbated by hunger)"
        ]
      },
      "1919": {
        "variance_explained": 55.0,
        "description": "Versailles and Relief (-15.0%). The Blockade was lifted in July. Herbert Hoover's ARA fed millions. Food became a weapon of anti-communism ('Food will win the peace'). The Treaty of Versailles stripped Germany of its merchant marine, ensuring dependency. The memory of the 'Hunger Blockade' became a central grievance of the German Right.",
        "key_manifestations": [
          "Lifting of the Blockade (Event)",
          "Hoover's ARA operations (Humanitarian Event)",
          "Treaty of Versailles (Economic clauses)",
          "Red Summer (US unrest)"
        ]
      },
      "1920": {
        "variance_explained": 40.0,
        "description": "War Communism Famine (-15.0%). Russia. The Bolsheviks seized grain ('Prodrazverstka'). The peasants rebelled/starved. The state weaponized hunger against class enemies. The US fed Russia (ARA) to prevent total collapse. The cluster shifted from international blockade to internal resource extraction.",
        "key_manifestations": [
          "Russian Famine of 1920-21 (Event)",
          "Tambov Rebellion (Peasant revolt)",
          "Brave New World (Huxley writing concepts)",
          "Women in Love (Book)"
        ]
      },
      "1921": {
        "variance_explained": 35.0,
        "description": "The NEP (-5.0%). Lenin retreated. The New Economic Policy allowed peasants to sell grain. The 'Hunger Weapon' was sheathed to save the regime. Kronstadt sailors rebelled demanding equal rations. The recognition that you cannot starve the producers forever.",
        "key_manifestations": [
          "Kronstadt Rebellion (Event)",
          "New Economic Policy (Policy)",
          "Washington Naval Treaty (Ignoring economic warfare)",
          "Tractatus (Philosophy)"
        ]
      },
      "1922": {
        "variance_explained": 30.0,
        "description": "Stasis (-5.0%). Recovery. The 'Golden Twenties' began. Grain flowed. But the lesson was learned: Autarky is safety. Mussolini's 'Battle for Grain' began later, but the fascist obsession with food security was rooted in the 1918 experience.",
        "key_manifestations": [
          "Mussolini's March on Rome (Event)",
          "The Waste Land (Poem - spiritual hunger)",
          "Ulysses (Book)",
          "Fordney-McCumber Tariff (US protectionism)"
        ]
      },
      "1923": {
        "variance_explained": 35.0,
        "description": "Ruhr Occupation (+5.0%). France seized the Ruhr coal fields to enforce reparations. Passive resistance. Germany printed money -> Hyperinflation. The currency collapsed. People starved with billions of marks. Economic warfare in peacetime. It proved that finance was as lethal as a blockade.",
        "key_manifestations": [
          "Occupation of the Ruhr (Event)",
          "German Hyperinflation (Event)",
          "Beer Hall Putsch (Reaction)",
          "Vers une architecture (Book)"
        ]
      },
      "1924": {
        "variance_explained": 32.0,
        "description": "Dawes Plan (-3.0%). American loans stabilized Germany. The 'Hunger' receded. The global food markets integrated again. Soviet grain exports resumed to fund industrialization (selling food while peasants were hungry).",
        "key_manifestations": [
          "Dawes Plan (Economic Event)",
          "Magic Mountain (Book)",
          "Death of Lenin (Event)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 30.0,
        "description": "Locarno (+-2.0%). The spirit of peace. But *Mein Kampf* was published. Hitler explicitly linked the 'Blockade' to the need for 'Lebensraum' in the East. 'Germany must never starve again.' The strategic logic of WWII was laid out: seize the Ukraine to immunize against the British Navy.",
        "key_manifestations": [
          "Mein Kampf Vol 1 (Text)",
          "Locarno Treaties (Event)",
          "Great Gatsby (Book)",
          "Battle for Grain (Italy policy begins)"
        ]
      },
      "1926": {
        "variance_explained": 30.0,
        "description": "Stasis. The General Strike in UK. The government prepared 'Organization for the Maintenance of Supplies' (OMS) to break the strike. Internal blockade-breaking. The state ensured the food moved.",
        "key_manifestations": [
          "UK General Strike (Event)",
          "Metropolis (Film)",
          "Sun Also Rises (Book)",
          "Seven Pillars of Wisdom (Book)"
        ]
      },
      "1927": {
        "variance_explained": 32.0,
        "description": "War Scare in Russia (+2.0%). Stalin used a fabricated war scare to justify hoarding grain and attacking the 'Kulaks.' The prelude to the Five Year Plan. The 'Hoarder' became the enemy of the people.",
        "key_manifestations": [
          "Soviet War Scare (Event)",
          "Being and Time (Book)",
          "Jazz Singer (Film)",
          "Chiang Kai-shek's Shanghai purge (Event)"
        ]
      },
      "1928": {
        "variance_explained": 40.0,
        "description": "Collectivization (+8.0%). The 'Grain Procurement Crisis.' Stalin decided to seize the land. The 'Second Serfdom.' The state took total control of the food supply to fund the military-industrial complex. The peasant was an obstacle to be crushed by famine.",
        "key_manifestations": [
          "First Five Year Plan (Policy)",
          "Shakhty Trial (Terror)",
          "Lady Chatterley's Lover (Book)",
          "Kellogg-Briand Pact (Paper peace)"
        ]
      },
      "1929": {
        "variance_explained": 45.0,
        "description": "The Depression (+5.0%). Commodity prices collapsed. Farmers burned corn while cities starved. 'Starvation in the midst of plenty.' The market mechanism failed. It justified the 'Autarky' argument: the world market is dangerous. Germany and Italy doubled down on self-sufficiency.",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "Collectivization ('Dekulakization') begins (Event)",
          "All Quiet on the Western Front (Book)",
          "Young Plan (Event)"
        ]
      },
      "1930": {
        "variance_explained": 50.0,
        "description": "Smoot-Hawley (+5.0%). Trade War. The US raised tariffs. Global trade imploded. Nations retreated into imperial blocs (British Preference). The 'Economic Blockade' was now mutual and self-inflicted. Japan, lacking an empire, felt strangled.",
        "key_manifestations": [
          "Smoot-Hawley Tariff (Policy)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "Salt March (Gandhi attacking the Salt Tax)"
        ]
      },
      "1931": {
        "variance_explained": 55.0,
        "description": "Manchuria (+5.0%). Japan seized Manchuria to secure soy and coal. 'Lifeline.' The answer to the trade walls. The League of Nations debated sanctions but feared war. The lesson: Economic security requires conquest.",
        "key_manifestations": [
          "Invasion of Manchuria (Event)",
          "Collapse of the Gold Standard (Economic Event)",
          "M (Film)",
          "The Good Earth (Book)"
        ]
      },
      "1932": {
        "variance_explained": 65.0,
        "description": "Holodomor (+10.0%). The Terror Famine. Stalin sealed the borders of Ukraine. Seized all food. 4 million dead. A man-made famine to crush nationalism. The 'Hunger Weapon' used domestically with absolute lethality. The West largely ignored it (Duranty).",
        "key_manifestations": [
          "Holodomor (Event)",
          "Duranty's denial (Media Event)",
          "Brave New World (Book)",
          "Ottawa Conference (Imperial Preference)"
        ]
      },
      "1933": {
        "variance_explained": 70.0,
        "description": "Hitler and Autarky (+5.0%). The 'Reichsn\u00e4hrstand' (Food Estate). Total control of German agriculture. 'Blood and Soil.' The goal: immunity from the British blockade. The memory of 1918 drove the policy. The US AAA (Agricultural Adjustment Act) plowed under crops to raise prices\u2014state management of hunger.",
        "key_manifestations": [
          "Reichsn\u00e4hrstand established (Institutional Event)",
          "Agricultural Adjustment Act (US Policy)",
          "King Kong (Film)",
          "Hitler Chancellor (Event)"
        ]
      },
      "1934": {
        "variance_explained": 72.0,
        "description": "Stasis (+2.0%). Germany began synthetic production of rubber and oil (Cluster 21). The 'Ersatz' economy returned, but as a strategic choice, not a desperate measure. The 'Guns vs Butter' debate began.",
        "key_manifestations": [
          "Hjalmar Schacht's 'New Plan' (Economic control)",
          "Night of the Long Knives (Event)",
          "Tender is the Night (Book)",
          "It Happened One Night (Film)"
        ]
      },
      "1935": {
        "variance_explained": 80.0,
        "description": "Abyssinian Sanctions (+8.0%). The League imposed partial sanctions. Failed. It annoyed Italy without stopping her. It proved that 'half-blockades' don't work. Hitler watched. He accelerated the drive for 'Lebensraum'\u2014land that couldn't be blockaded.",
        "key_manifestations": [
          "League Sanctions on Italy (Event)",
          "Hoare-Laval Pact (Diplomatic Event)",
          "Triumph of the Will (Film)",
          "Nuremberg Laws (Event)"
        ]
      },
      "1936": {
        "variance_explained": 85.0,
        "description": "Four Year Plan (+5.0%). G\u00f6ring. 'The German economy must be fit for war in 4 years.' Explicit preparation for blockade. Stockpiling. Rationing cards printed in secret. The Spanish Civil War saw the 'siege' return (Madrid) as a form of warfare.",
        "key_manifestations": [
          "Four Year Plan initiated (Policy)",
          "Siege of Madrid (Event)",
          "General Theory (Book)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 88.0,
        "description": "Japan in China (+3.0%). Japan tried to seize the resources of China. The US began 'Moral Embargoes.' The economic noose tightened around Japan. The 'Quarantine Speech' by FDR\u2014comparing aggressors to a disease to be isolated.",
        "key_manifestations": [
          "Quarantine Speech (Rhetoric)",
          "Invasion of China (Event)",
          "Guernica (Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 90.0,
        "description": "Anschluss and Munich (+2.0%). Germany absorbed Austria (more mouths to feed, but more resources). The vulnerability of the 'Greater Reich' to food shortages remained. Hitler pushed for the East. 'We need the Ukraine.'",
        "key_manifestations": [
          "Anschluss (Event)",
          "Munich Crisis (Event)",
          "Nausea (Book)",
          "War of the Worlds broadcast (Event)"
        ]
      },
      "1939": {
        "variance_explained": 95.0,
        "description": "The Blockade Returns (+5.0%). War. Britain established the Ministry of Economic Warfare. The 'Navicert' system. Neutral ships inspected. Germany countered with the Soviet Pact (grain train from the East). Rationing began immediately in UK and Germany. The lesson of 1914 was applied on Day 1.",
        "key_manifestations": [
          "Ministry of Economic Warfare (Institutional Event)",
          "Rationing in UK/Germany (Policy)",
          "Molotov-Ribbentrop Pact (Economic Clause)",
          "Battle of the River Plate (Commerce raiding)"
        ]
      },
      "1940": {
        "variance_explained": 98.0,
        "description": "Fall of France and Plunder (+3.0%). Germany conquered France and 'lived off the land.' The 'Nazi Plunder.' They stripped the occupied territories of food to feed the German populace. 'If anyone starves, it will not be the German.' The Blockade was pushed back to the Atlantic.",
        "key_manifestations": [
          "German requisitioning in France (Policy)",
          "US Export Control Act (Blockading Japan)",
          "Great Dictator (Film)",
          "Fall of France (Event)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "The Hunger Plan and Embargo (+2.0%). The absolute peak. 1. The Nazi 'Hunger Plan' for Russia (starve the cities to feed the army). 2. Siege of Leningrad (starvation as siege weapon). 3. US Oil/Steel Embargo on Japan (Total economic strangulation). Japan attacked Pearl Harbor to break the ring.",
        "key_manifestations": [
          "Hunger Plan (Der Hungerplan) (Policy)",
          "US Oil Embargo (Event)",
          "Siege of Leningrad begins (Event)",
          "Pearl Harbor (Reaction to blockade)"
        ]
      },
      "1942": {
        "variance_explained": 100.0,
        "description": "U-Boat Zenith (+0.0%). Operation Drumbeat. The U-boats sank tonnage faster than it could be built. Britain was threatened with starvation again. The 'Battle of the Atlantic' was the deciding campaign. In the East, the Japanese 'Rice Offensives'\u2014seizing the bowls of Asia. Greek Famine\u2014the Allies refused to lift the blockade; 300,000 died.",
        "key_manifestations": [
          "Greek Famine (Event)",
          "Battle of the Atlantic peak (Event)",
          "Wannsee Conference (Reducing 'useless eaters')",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 98.0,
        "description": "Bengal Famine (-2.0% Kinetic, +Tragedy). The British 'Denial Policy' in Bengal (to stop Japanese) + Cyclone + Inflation = 3 million dead. Churchill refused to divert shipping. The Empire starved its subjects to save the metropole. The U-boat threat was broken (Black May), securing the UK food line.",
        "key_manifestations": [
          "Bengal Famine (Event)",
          "Black May (Defeat of U-boats)",
          "Warsaw Ghetto Uprising (Starvation rations)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 95.0,
        "description": "The Dutch Hunger Winter (-3.0%). The Allies bypassed the Netherlands. The Germans cut food transport. 20,000 died. People ate tulip bulbs. It showed that 'Liberation' could cause starvation if logistics failed. US submarines strangled Japan\u2014shipping collapsed. The 'Starvation Operation.'",
        "key_manifestations": [
          "Dutch Hunger Winter (Event)",
          "US Submarine campaign success (Event)",
          "Double Indemnity (Film)",
          "Bretton Woods (Planning post-war economy)"
        ]
      },
      "1945": {
        "variance_explained": 90.0,
        "description": "Year Zero (-5.0%). The war ended, but the food systems were destroyed. 'Save Europe Now.' The threat of mass famine in Germany. The Allies had to feed the conquered to prevent communism. UNRRA (United Nations Relief and Rehabilitation Administration) was the new logistical army. The Blockade became the Relief.",
        "key_manifestations": [
          "UNRRA operations (Event)",
          "Potsdam Conference (Food distribution)",
          "Hiroshima (Event)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 85.0,
        "description": "The Wheat Crisis (-5.0%). Global harvest failure. Bread rationing in UK (for the first time, in peacetime). The US conserved grain to ship to Europe. Food was the primary currency of the early Cold War. 'Bread and Ballots.'",
        "key_manifestations": [
          "UK Bread Rationing (Event)",
          "Combined Food Board (Institutional Event)",
          "Best Years of Our Lives (Film)",
          "Iron Curtain Speech (Event)"
        ]
      },
      "1947": {
        "variance_explained": 80.0,
        "description": "The Marshall Plan (-5.0%). The ultimate anti-hunger weapon. The US shipped grain and machinery to rebuild Europe. Stalin rejected it for the East. The 'Iron Curtain' became a food line. The partition of India caused the breakdown of food distribution\u2014famine in the Punjab.",
        "key_manifestations": [
          "Marshall Plan announced (Policy)",
          "Partition of India (Logistical chaos)",
          "Streetcar Named Desire (Play)",
          "Truman Doctrine (Event)"
        ]
      },
      "1948": {
        "variance_explained": 75.0,
        "description": "Berlin Blockade (-5.0%). Stalin tried to starve West Berlin. He cut the rail/road. The 'Hunger Weapon' used in peace. The Berlin Airlift (Cluster 3) defeated it. The 'Candy Bomber.' It proved that technology could overcome the siege.",
        "key_manifestations": [
          "Berlin Blockade (Event)",
          "Operation Vittles (Airlift)",
          "1948 Arab-Israeli War (Siege of Jerusalem)",
          "The Naked and the Dead (Book)"
        ]
      },
      "1949": {
        "variance_explained": 70.0,
        "description": "COMECON (-5.0%). The Soviet bloc formed its own economic zone. Autarky returned. The US 'Export Control Act' began the technology blockade of the East. The 'Economic Blockade' morphed into the 'Tech Embargo.'",
        "key_manifestations": [
          "Formation of COMECON (Institutional Event)",
          "US Export Control Act (Policy)",
          "Soviet Bomb (Event)",
          "Death of a Salesman (Play)"
        ]
      },
      "1950": {
        "variance_explained": 75.0,
        "description": "Korea and China Embargo (+5.0%). The US imposed a total embargo on Red China. The 'Bamboo Curtain.' Economic warfare returned as a primary tool of Containment. The 'Hunger Weapon' was now a permanent feature of the bipolar world.",
        "key_manifestations": [
          "US Embargo on China (Policy)",
          "Korean War (Event)",
          "The Lonely Crowd (Book)",
          "All About Eve (Film)"
        ]
      }
    }
  },
  "24_paramilitary_political_violence": {
    "name": "Paramilitary Political Violence (The Uniformed Street)",
    "description": "This eigencluster captures the militarization of civilian politics. It tracks the rise of private armies, uniformed party militias, and the use of street violence as a legitimate political tool. It blurs the line between the 'Soldier' and the 'Thug.' It rises from the Black Hundreds and Ulster Volunteers, peaks with the SA/SS and Squadristi, and persists in the Cold War proxy militias. It represents the seepage of the 'Front Experience' into the domestic sphere.",
    "trajectory": {
      "1890": {
        "variance_explained": 3.0,
        "description": "The era of the 'Pinkertons.' In the US, industrial disputes were fought by private armies. It was the privatization of state violence. In Europe, the 'Propaganda of the Deed' (Anarchists) was individual terror, not yet mass paramilitary organization. The variance is low but the precedent of non-state armed actors was set.",
        "key_manifestations": [
          "Pinkerton agents in labor strikes (Event)",
          "Anti-Socialist Laws lapse in Germany (Political Event)",
          "Sherlock Holmes (Private detective vs organized crime)",
          "Wounded Knee (Militia participation)"
        ]
      },
      "1891": {
        "variance_explained": 3.2,
        "description": "Stasis. The 'Union of the Russian People' (proto-Black Hundreds) began to form in reaction to famine and unrest. The state began to outsource repression to loyalist mobs. In the US, the Coal Creek War saw miners fighting the state militia\u2014the militarization of labor.",
        "key_manifestations": [
          "Coal Creek War (Event)",
          "Formation of right-wing leagues in Russia (Event)",
          "Leo XIII's Rerum Novarum (Addressing the violence of capital/labor)",
          "The Light That Failed (Novel)"
        ]
      },
      "1892": {
        "variance_explained": 3.5,
        "description": "Homestead Strike (+0.3%). A pitched battle between Pinkertons and strikers. Cannons were used. It proved that political/economic questions would be answered by gunfire. The state militia intervened, blurring the line between army and police.",
        "key_manifestations": [
          "Homestead Strike (Event)",
          "Coeur d'Alene miner uprising (Event)",
          "Ravachol bombings (Individual terror)",
          "Cholera Riots (Mob violence)"
        ]
      },
      "1893": {
        "variance_explained": 3.8,
        "description": "Formation of the 'Action Fran\u00e7aise' context (intellectual roots). The anti-Dreyfusard mobs began to organize. The 'League of Patriots' in France\u2014paramilitary nationalism. They drilled and wore badges. The aesthetic of the political soldier was forming.",
        "key_manifestations": [
          "League of Patriots activity (Event)",
          "Panic of 1893 (Fueling unrest)",
          "Aig\u00fces-Mortes massacre (Nativist mob violence)",
          "Turner's Frontier Thesis (The violence of the border)"
        ]
      },
      "1894": {
        "variance_explained": 4.0,
        "description": "Dreyfus Affair (+0.5%). The anti-semitic leagues took to the streets. 'Death to the Jews.' It was organized intimidation. In the US, Coxey's Army was a peaceful march, but the fear it generated led to a militarized police response.",
        "key_manifestations": [
          "Anti-Dreyfusard riots (Event)",
          "Coxey's Army (Event)",
          "Pullman Strike (Federal troops as police)",
          "The Jungle Book (Law of the jungle)"
        ]
      },
      "1895": {
        "variance_explained": 4.2,
        "description": "Stasis. The Cuban insurgents. A guerrilla army fighting for independence. To the Spanish, they were bandits. To the US press, heroes. The definition of 'Paramilitary' depended on the observer. Le Bon's *The Crowd* analyzed the psychology of these mobs.",
        "key_manifestations": [
          "The Crowd (Book)",
          "Cuban Insurgency (Event)",
          "Jameson Raid (Private imperial army)",
          "The Time Machine (Morlocks as violent underclass)"
        ]
      },
      "1896": {
        "variance_explained": 4.5,
        "description": "The Jameson Raid (+0.3%). A private army invaded the Transvaal. It failed, but it showed that private capital could wage war. In the US, the 'Silver' campaign mobilized masses, though peacefully. The rhetoric was violent ('Crucify mankind').",
        "key_manifestations": [
          "Jameson Raid (Event)",
          "Cross of Gold Speech (Rhetoric)",
          "Battle of Adwa (Italian failure vs mobilized nation)",
          "Island of Dr. Moreau (Book)"
        ]
      },
      "1897": {
        "variance_explained": 4.8,
        "description": "Lueger's Christian Social Party (+0.3%). Vienna. Anti-semitism as a mass movement. The mayor used the mob to intimidate the emperor. Hitler watched and learned. The 'street' was becoming a political chamber.",
        "key_manifestations": [
          "Karl Lueger's rallies (Event)",
          "Dracula (Invasion threat)",
          "Zionist Congress (Defensive organization)",
          "Greco-Turkish War (Irregulars involved)"
        ]
      },
      "1898": {
        "variance_explained": 5.0,
        "description": "Wilmington Insurrection (+0.5%). US. White supremacists (Red Shirts) staged a coup in North Carolina. They overthrew the elected government by force. A successful paramilitary putsch. It proved democracy could be reversed by armed gangs.",
        "key_manifestations": [
          "Wilmington Insurrection of 1898 (Event)",
          "The Rough Riders (Volunteer cavalry as political vehicle)",
          "Spanish-American War (Event)",
          "Fashoda (Event)"
        ]
      },
      "1899": {
        "variance_explained": 5.5,
        "description": "Action Fran\u00e7aise founded (+0.5%). Maurras. 'Integral Nationalism.' The 'Camelots du Roi' (King's Newsboys) were the street fighters. Cane-wielding thugs beating republicans. The prototype of the Fascist squad.",
        "key_manifestations": [
          "Founding of Action Fran\u00e7aise (Institutional Event)",
          "Boer Commandos (Citizen-soldiers)",
          "Boxer Rebellion (The militia rising)",
          "Heart of Darkness (Book)"
        ]
      },
      "1900": {
        "variance_explained": 6.0,
        "description": "The Boxers (+1.0%). 'Righteous and Harmonious Fists.' A mystic, paramilitary mass movement sanctioned by the state (Empress Dowager). They targeted foreigners. It showed the power of the 'armed mob.'",
        "key_manifestations": [
          "Boxer Rebellion (Event)",
          "Relief of Mafeking (Jingoist mobs in London)",
          "Sister Carrie (Book)",
          "Assassination of King Umberto (Anarchist terror)"
        ]
      },
      "1901": {
        "variance_explained": 6.2,
        "description": "Stasis. Assassination of McKinley. Anarchist Leon Czolgosz. 'Propaganda of the Deed' peaked. The reaction was the Alien Immigration Act\u2014state security clamping down. The 'Secret Service' began protecting the President.",
        "key_manifestations": [
          "Assassination of McKinley (Event)",
          "Black Hundreds forming (Russia)",
          "Kim (Book)",
          "Nobel Prizes (Event)"
        ]
      },
      "1902": {
        "variance_explained": 6.5,
        "description": "Macedonian Struggle (+0.5%). 'Komitadjis.' Bands of Greek, Bulgarian, and Serbian paramilitaries fighting each other and the Ottomans. 'Terror' as a strategy of ethnic cleansing. The Balkans became the laboratory of paramilitary violence.",
        "key_manifestations": [
          "Macedonian Struggle begins (Event)",
          "Boer War ends (Commando myth)",
          "Heart of Darkness (Book)",
          "Lenin's What Is To Be Done? (Professional revolutionary)"
        ]
      },
      "1903": {
        "variance_explained": 7.0,
        "description": "Pogroms in Kishinev (+0.5%). The Black Hundreds. State-tolerated mobs murdering Jews. It was 'managed' violence to divert revolutionary energy. The 'Protocols' provided the ideological fuel.",
        "key_manifestations": [
          "Kishinev Pogrom (Event)",
          "Protocols of the Elders of Zion (Text)",
          "Call of the Wild (Book)",
          "Obrenovic regicide in Serbia (Military gang)"
        ]
      },
      "1904": {
        "variance_explained": 7.5,
        "description": "Herero Genocide (+0.5%). While conducted by the army, settlers formed militias to hunt Herero. The 'racial community' armed itself. In Russia, the 'Union of the Russian People' formalized the Black Hundreds.",
        "key_manifestations": [
          "Herero War (Event)",
          "Union of Russian People founded (Institutional Event)",
          "Nostromo (Book - warlordism)",
          "Peter Pan (Play)"
        ]
      },
      "1905": {
        "variance_explained": 9.0,
        "description": "Russian Revolution of 1905 (+1.5%). The 'Fighting Squads' of the Bolsheviks. Bank robberies (Expropriations). Stalin as a gunman. The revolution was armed. The Black Hundreds countered with terror. The street was the battlefield.",
        "key_manifestations": [
          "Fighting Squads formed (Event)",
          "Odessa Pogrom (Event)",
          "Bloody Sunday (State violence)",
          "Battle of Tsushima (Context)"
        ]
      },
      "1906": {
        "variance_explained": 8.5,
        "description": "The Tiflis Bank Robbery (-0.5% State crackdowns). Stalin and Kamo bombed a convoy. 'Revolutionary banditry.' The state cracked down with the 'Stolypin Necktie' (hangings). The violence went underground but hardened.",
        "key_manifestations": [
          "Tiflis Bank Robbery (Event)",
          "Stolypin reforms (Policy)",
          "The Jungle (Book)",
          "San Francisco Earthquake (Martial law)"
        ]
      },
      "1907": {
        "variance_explained": 8.0,
        "description": "Stasis. The 'Sinn Fein' party grew in Ireland, advocating self-reliance. The seeds of the IRA. In India, the 'Anushilan Samiti' (Self-Culture Association) turned to bombs. Anti-colonialism adopted paramilitary methods.",
        "key_manifestations": [
          "Sinn Fein founded (Political Event)",
          "Anushilan Samiti violence (Event)",
          "The Secret Agent (Book - terrorism)",
          "Picasso (Art)"
        ]
      },
      "1908": {
        "variance_explained": 8.5,
        "description": "Young Turks (+0.5%). The 'Committee of Union and Progress.' A secret society within the army. They marched on Constantinople. The paramilitary coup. It inspired officers across the Balkans.",
        "key_manifestations": [
          "Young Turk Revolution (Event)",
          "War in the Air (Book)",
          "Scouting for Boys (Paramilitary youth)",
          "Bosnian Crisis (Event)"
        ]
      },
      "1909": {
        "variance_explained": 9.0,
        "description": "Tragic Week in Barcelona (+0.5%). Anarchist uprising. Church burnings. The 'Somat\u00e9n' (conservative militia) fought the workers. Class war with rifles. Futurism praised the 'destructive gesture of freedom.'",
        "key_manifestations": [
          "Tragic Week (Event)",
          "Futurist Manifesto (Art)",
          "The Machine Stops (Story)",
          "Girl Guides (Youth org)"
        ]
      },
      "1910": {
        "variance_explained": 9.5,
        "description": "Mexican Revolution (+0.5%). Pancho Villa and Zapata. Peasant armies. Not a coup, but a mass armed movement. The 'Soldadera' (women fighters). It romanticized the revolutionary gunman.",
        "key_manifestations": [
          "Mexican Revolution begins (Event)",
          "Plan of San Luis Potos\u00ed (Manifesto)",
          "Howards End (Book)",
          "Great Illusion (Book)"
        ]
      },
      "1911": {
        "variance_explained": 10.0,
        "description": "Sidney Street Siege (+0.5%). London. Anarchists fought the Scots Guards. Churchill directed the fire. The paramilitary threat came to the imperial capital. It led to the Official Secrets Act.",
        "key_manifestations": [
          "Siege of Sidney Street (Event)",
          "Official Secrets Act (Legal Event)",
          "Fantomas (Book)",
          "Chinese Revolution (Warlord armies)"
        ]
      },
      "1912": {
        "variance_explained": 11.0,
        "description": "UVF Formed (precursor). The Ulster Covenant. Unionists signed in blood to resist Home Rule. They began drilling. The idea of a 'Private Army' to defy Parliament took hold.",
        "key_manifestations": [
          "Ulster Covenant (Event)",
          "Balkan Wars (Komitadjis rampant)",
          "Titanic (Event)",
          "The Lost World (Book)"
        ]
      },
      "1913": {
        "variance_explained": 13.0,
        "description": "Ulster Volunteer Force & Irish Volunteers (+2.0%). Openly armed militias in the UK. 100,000 men on each side. The 'Curragh Mutiny'\u2014British officers refused to disarm the UVF. The Army took sides. Civil war was imminent.",
        "key_manifestations": [
          "Formation of UVF (Institutional Event)",
          "Formation of Irish Volunteers (Institutional Event)",
          "Curragh Incident (Event)",
          "Rite of Spring (Cultural)"
        ]
      },
      "1914": {
        "variance_explained": 8.0,
        "description": "The Great War (-5.0%). The paramilitaries enlisted. The UVF became the 36th Ulster Division. The violence was nationalized. The 'Street' emptied into the 'Trench.' But the structure of the militia remained in the mind.",
        "key_manifestations": [
          "Enlistment of UVF/Volunteers (Event)",
          "Assassination of Archduke (Paramilitary act by Black Hand)",
          "Christmas Truce (Event)",
          "Defense of the Realm Act (State control)"
        ]
      },
      "1915": {
        "variance_explained": 8.0,
        "description": "Stasis. The Armenian Genocide (Cluster 5) used 'Special Organization' (Teskilat-i Mahsusa)\u2014released criminals organized into death squads. The state outsourcing the dirty work.",
        "key_manifestations": [
          "Teskilat-i Mahsusa operations (Event)",
          "Gallipoli (Event)",
          "Birth of a Nation (KKK glorification)",
          "The 39 Steps (Book)"
        ]
      },
      "1916": {
        "variance_explained": 15.0,
        "description": "Easter Rising (+7.0%). The Irish Volunteers seized Dublin. 'The Army of the Republic.' It failed militarily but succeeded mythologically. The 'blood sacrifice.' It proved a paramilitary could challenge an Empire in its own city.",
        "key_manifestations": [
          "Easter Rising (Event)",
          "Proclamation of the Republic (Document)",
          "Battle of the Somme (Event)",
          "Arab Revolt (Guerrilla war)"
        ]
      },
      "1917": {
        "variance_explained": 20.0,
        "description": "The Red Guard (+5.0%). Russia. The Bolsheviks armed the workers. The 'Red Guard' seized the Winter Palace. The paramilitary became the state. The Cheka was formed. In the US, the Espionage Act crushed dissent.",
        "key_manifestations": [
          "Formation of Red Guards (Event)",
          "October Revolution (Event)",
          "Espionage Act (Legal Event)",
          "Balfour Declaration (Event)"
        ]
      },
      "1918": {
        "variance_explained": 30.0,
        "description": "Civil War and Freikorps (+10.0%). Russia dissolved into Red vs White armies. In Germany, the 'Freikorps' formed from returning trench fighters. They suppressed the revolution. 'Frontschwein.' The brutalization of the trench was brought home.",
        "key_manifestations": [
          "Formation of Freikorps (Institutional Event)",
          "Russian Civil War begins (Event)",
          "Spartacist uprising preparations (Event)",
          "Decline of the West (Book)"
        ]
      },
      "1919": {
        "variance_explained": 40.0,
        "description": "The Peak of Chaos (+10.0%). Freikorps murdered Luxemburg/Liebknecht. Mussolini founded the *Fasci*. The Blackshirts. D'Annunzio seized Fiume with his 'Legionaries'\u2014the theatrical style of fascism. The IRA began the War of Independence. The world was awash in private armies.",
        "key_manifestations": [
          "Spartacist Uprising crushed (Event)",
          "Fasci di Combattimento founded (Event)",
          "Fiume Enterprise (Event)",
          "Amritsar Massacre (State terror)"
        ]
      },
      "1920": {
        "variance_explained": 42.0,
        "description": "Black and Tans (+2.0%). The British state used paramilitaries (unemployed veterans) to terrorize Ireland. Reprisals. Burning of Cork. The 'Squadristi' in Italy burned socialist HQs. The paramilitary was the tool of counter-revolution.",
        "key_manifestations": [
          "Black and Tans deployment (Event)",
          "Burning of Cork (Event)",
          "Squadristi violence (Event)",
          "Kapp Putsch (Freikorps attempt)"
        ]
      },
      "1921": {
        "variance_explained": 45.0,
        "description": "The SA Formed (+3.0%). Sturmabteilung. The 'Brownshirts.' Hitler's private army. Modeled on the Squadristi. Purpose: 'Possess the streets.' In Italy, the Fascists fought a civil war with Socialists. The state police stood back.",
        "key_manifestations": [
          "Formation of the SA (Institutional Event)",
          "Tulsa Race Massacre (White mob paramilitary)",
          "Kronstadt Rebellion (Event)",
          "R.U.R. (Play)"
        ]
      },
      "1922": {
        "variance_explained": 50.0,
        "description": "March on Rome (+5.0%). The Squadristi seized the state. Mussolini Prime Minister. The MVSN legalized the militia. The Party Army became a State organ. The ultimate victory of the cluster.",
        "key_manifestations": [
          "March on Rome (Event)",
          "MVSN formed (Institutional Event)",
          "Irish Civil War (IRA vs Free State)",
          "Waste Land (Poem)"
        ]
      },
      "1923": {
        "variance_explained": 48.0,
        "description": "Beer Hall Putsch (-2.0%). The SA marched in Munich. They were fired upon by the Police/Army. The limits of the paramilitary were shown (when the Army resists). Hitler went to jail. The SA was banned (temporarily).",
        "key_manifestations": [
          "Beer Hall Putsch (Event)",
          "Hyperinflation (Context)",
          "Crisis of 1923 (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 45.0,
        "description": "Stasis (-3.0%). Stabilization. The Dawes Plan. The Freikorps dissolved or went underground (Stahlhelm). The 'Rotfrontk\u00e4mpferbund' (Red Front) formed by Communists\u2014the dialectical response to the SA.",
        "key_manifestations": [
          "Red Front formed (Institutional Event)",
          "Stahlhelm activity (Event)",
          "Magic Mountain (Book)",
          "Death of Lenin (Event)"
        ]
      },
      "1925": {
        "variance_explained": 45.0,
        "description": "SS Formed (+0.0%). Schutzstaffel. Hitler's bodyguard. Small, elite, loyal. The seed of the future terror state. *Mein Kampf* glorified the 'storm trooper.'",
        "key_manifestations": [
          "Formation of the SS (Institutional Event)",
          "Mein Kampf (Book)",
          "Great Gatsby (Book)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 42.0,
        "description": "Stasis. The 'Heimwehr' in Austria. Conservative militia. The polarization of Austrian society. In China, the KMT and Communists built party armies (Whampoa Academy).",
        "key_manifestations": [
          "Heimwehr growth (Event)",
          "Northern Expedition (Event)",
          "Sun Also Rises (Book)",
          "Metropolis (Film)"
        ]
      },
      "1927": {
        "variance_explained": 45.0,
        "description": "Shanghai Massacre (+3.0%). The Green Gang (triads) used by Chiang Kai-shek to liquidate Communists. Criminal paramilitaries serving the state. The 'White Terror.'",
        "key_manifestations": [
          "Shanghai Massacre (Event)",
          "Heimwehr/Schutzbund clashes in Vienna (Event)",
          "Jazz Singer (Film)",
          "Being and Time (Book)"
        ]
      },
      "1928": {
        "variance_explained": 45.0,
        "description": "Stasis. The Stahlhelm (Steel Helmet) in Germany\u2014mass veterans org. Not explicitly Nazi, but anti-republican. They held massive rallies. The 'militarization of Sunday.'",
        "key_manifestations": [
          "Stahlhelm rallies (Event)",
          "Kellogg-Briand Pact (Event)",
          "Lady Chatterley's Lover (Book)",
          "Threepenny Opera (Play)"
        ]
      },
      "1929": {
        "variance_explained": 48.0,
        "description": "The Depression (+3.0%). Unemployment fueled the militias. The SA offered food, boots, and purpose. Enrollment surged. The street battles returned. 'Possess the streets.'",
        "key_manifestations": [
          "Wall Street Crash (Event)",
          "SA growth (Event)",
          "All Quiet on the Western Front (Book)",
          "Young Plan (Event)"
        ]
      },
      "1930": {
        "variance_explained": 55.0,
        "description": "Nazi Breakthrough (+7.0%). 107 seats. The SA now had political cover. They terrorized opponents. The Police were afraid to intervene. Horst Wessel killed\u2014the paramilitary martyr.",
        "key_manifestations": [
          "Horst Wessel song (Cultural Event)",
          "Nazi Election Victory (Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)"
        ]
      },
      "1931": {
        "variance_explained": 60.0,
        "description": "Harzburg Front (+5.0%). The alliance of the Stahlhelm, Nazis, and DNVP. The paramilitaries united against the Republic. The 'Boxheim Documents' revealed Nazi plans for a coup and execution of enemies.",
        "key_manifestations": [
          "Harzburg Front rally (Event)",
          "Boxheim Documents leaked (Event)",
          "M (Film)",
          "Mukden Incident (Event)"
        ]
      },
      "1932": {
        "variance_explained": 70.0,
        "description": "Civil War Conditions (+10.0%). The SA Ban (and repeal). 400,000 SA men. Bloody Sunday in Altona. Papen's Coup in Prussia\u2014using the army to crush the police, justified by paramilitary chaos. The State collapsed into the Militia.",
        "key_manifestations": [
          "Altona Bloody Sunday (Event)",
          "Papen's Coup (Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Event)"
        ]
      },
      "1933": {
        "variance_explained": 80.0,
        "description": "Auxiliary Police (+10.0%). Hitler in power. Goering deputized the SA/SS as 'Auxiliary Police.' The thug became the cop. The 'Hilfspolizei.' They opened the first wild camps (Oranienburg) to torture opponents. Legalized terror.",
        "key_manifestations": [
          "SA as Auxiliary Police (Policy)",
          "Reichstag Fire (Event)",
          "Opening of Dachau (Event)",
          "King Kong (Film)"
        ]
      },
      "1934": {
        "variance_explained": 75.0,
        "description": "Night of the Long Knives (-5.0% Street, +State). The purge of the SA. The 'Second Revolution' stopped. The SS emerged as the dominant, disciplined order. The 'Wild' phase ended; the 'Systematic' phase began. In Austria, the July Putsch (Nazis killed Dollfuss).",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "July Putsch in Austria (Event)",
          "Tender is the Night (Book)",
          "Triumph of the Will (Film)"
        ]
      },
      "1935": {
        "variance_explained": 70.0,
        "description": "Stasis. The SS consolidated control over the camps. The Gestapo. The paramilitary became the 'State within the State.' In the US, the Silver Shirts and Bund modeled themselves on the Nazis.",
        "key_manifestations": [
          "Nuremberg Laws (Event)",
          "German American Bund rallies (Event)",
          "It Can't Happen Here (Book)",
          "Abyssinian Crisis (Event)"
        ]
      },
      "1936": {
        "variance_explained": 80.0,
        "description": "Spanish Civil War (+10.0%). The Falange (Blue Shirts). The Carlists (Requet\u00e9s). The Anarchist Militias (CNT/FAI). The war was fought by paramilitaries before the armies regularized. The 'Fifth Column' concept\u2014enemies within.",
        "key_manifestations": [
          "Spanish Civil War begins (Event)",
          "Battle of Cable Street (British Union of Fascists vs Anti-Fascists)",
          "General Theory (Book)",
          "Berlin Olympics (Event)"
        ]
      },
      "1937": {
        "variance_explained": 82.0,
        "description": "Stasis. The Nanking Massacre. Committed by the Imperial Army, but with the discipline of a mob. The 'Rape' was paramilitary in its chaotic violence. In Stalin's Russia, the NKVD (uniformed secret police) conducted the Great Purge.",
        "key_manifestations": [
          "Rape of Nanking (Event)",
          "Great Purge (NKVD terror)",
          "Guernica (Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 85.0,
        "description": "Kristallnacht (+3.0%). The SA unleashed one last time. 'Spontaneous' anger. Burning synagogues. The paramilitary as the instrument of pogrom. The 'Sudeten Free Corps' terrorized the Czech border.",
        "key_manifestations": [
          "Kristallnacht (Event)",
          "Sudeten Free Corps attacks (Event)",
          "Anschluss (Event)",
          "Nausea (Book)"
        ]
      },
      "1939": {
        "variance_explained": 90.0,
        "description": "Einsatzgruppen (+5.0%). The SS 'Task Forces' formed for the invasion of Poland. Paramilitary death squads. 'Operation Tannenberg.' The liquidation of the Polish elite. The transition from street violence to genocide.",
        "key_manifestations": [
          "Formation of Einsatzgruppen (Institutional Event)",
          "Operation Tannenberg (Event)",
          "Invasion of Poland (Event)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 92.0,
        "description": "The Home Guard (+2.0%). UK. 'Dad's Army.' The democratic militia. Mobilizing the civilians against invasion. In Occupied Europe, the Resistance began to form\u2014the anti-paramilitary.",
        "key_manifestations": [
          "Home Guard formed (Institutional Event)",
          "Fall of France (Event)",
          "Great Dictator (Film)",
          "Darkness at Noon (Book)"
        ]
      },
      "1941": {
        "variance_explained": 100.0,
        "description": "Holocaust by Bullet (+8.0%). The Einsatzgruppen in Russia. Babi Yar. 33,000 Jews shot in two days. The paramilitary achievement of the 'Final Solution' (Phase 1). The Ustasha in Croatia\u2014paramilitary savagery (knives/hammers).",
        "key_manifestations": [
          "Babi Yar (Event)",
          "Ustasha genocide (Event)",
          "Commissar Order (Policy)",
          "Pearl Harbor (Event)"
        ]
      },
      "1942": {
        "variance_explained": 95.0,
        "description": "Partisan War (-5.0% State, +Resistance). The Partisans (Tito, Soviets) became armies. The 'Milice' in France. The war became a 'Civil War' in every occupied country. Neighbor vs Neighbor.",
        "key_manifestations": [
          "Formation of the Milice (Event)",
          "Partisan warfare intensifies (Event)",
          "Wannsee Conference (Event)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 90.0,
        "description": "Warsaw Ghetto (+-5.0%). The Jewish Fighting Organization (ZOB). A paramilitary of the doomed. The SS crushed them. The 'Dirlewanger Brigade'\u2014criminal SS unit\u2014showed the absolute depravity of the cluster.",
        "key_manifestations": [
          "Warsaw Ghetto Uprising (Event)",
          "Dirlewanger Brigade atrocities (Event)",
          "Fall of Mussolini (Fascist militia melts away)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 85.0,
        "description": "The Maquis (+-5.0%). The FFI liberated Paris. The Resistance became the State. In Greece, the ELAS (Communist) and EDES (Rightist) fought each other. The 'Civil War' continued after the Germans left.",
        "key_manifestations": [
          "Liberation of Paris (Event)",
          "Greek Civil War beginnings (Event)",
          "Warsaw Uprising (Home Army)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 50.0,
        "description": "Werewolf (-35.0%). The Nazi plan for post-war guerrilla war. It fizzled. The population was too exhausted. The Paramilitary state collapsed. But in Vietnam, the Viet Minh (paramilitary) declared independence.",
        "key_manifestations": [
          "Werewolf plan failure (Event)",
          "Vietnam Independence (Event)",
          "Nuremberg Trials (Indicting the SS)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 40.0,
        "description": "Irgun and King David Hotel (-10.0%). Zionist paramilitaries in Palestine. Terrorism against the British. The 'Freedom Fighter' model. In the US, the KKK revived (briefly) against returning black veterans.",
        "key_manifestations": [
          "King David Hotel Bombing (Event)",
          "Kielce Pogrom (Post-war anti-semitism)",
          "Best Years of Our Lives (Film)",
          "Nuremberg Verdicts (SS declared criminal)"
        ]
      },
      "1947": {
        "variance_explained": 45.0,
        "description": "Partition of India (+5.0%). RSS (Hindu) and Muslim League Guards. The slaughter of partition was paramilitary. 1 million dead. The 'Train to Pakistan.' The state lost the monopoly on violence.",
        "key_manifestations": [
          "Partition of India Violence (Event)",
          "Greek Civil War peak (Event)",
          "Streetcar Named Desire (Play)",
          "Truman Doctrine (Event)"
        ]
      },
      "1948": {
        "variance_explained": 48.0,
        "description": "Palestine War (+3.0%). Haganah, Irgun, Stern Gang vs Arab Liberation Army. The war was fought by militias before armies. Deir Yassin massacre. The birth of Israel from the paramilitary rib.",
        "key_manifestations": [
          "Deir Yassin Massacre (Event)",
          "1948 Arab-Israeli War (Event)",
          "Assassination of Bernadotte (Stern Gang)",
          "Naked and the Dead (Book)"
        ]
      },
      "1949": {
        "variance_explained": 45.0,
        "description": "Chinese Civil War (-3.0%). The PLA was a 'Party Army' becoming a State Army. The KMT collapsed. In Colombia, 'La Violencia' began\u2014liberal vs conservative militias. The cluster migrated to the Third World.",
        "key_manifestations": [
          "Chinese Communist Victory (Event)",
          "La Violencia begins (Event)",
          "1984 (Book)",
          "NATO formed (State alliance)"
        ]
      },
      "1950": {
        "variance_explained": 40.0,
        "description": "Korea and Malaya (-5.0%). Malayan Emergency. British fought 'Communist Terrorists' (CTs). The language of 'Terrorist' replaced 'Partisan.' The Korean War had strong guerrilla elements in the South. The Cold War proxy war model established.",
        "key_manifestations": [
          "Malayan Emergency (Event)",
          "Korean War (Event)",
          "McCarthyism (Political witch hunt)",
          "The Lonely Crowd (Book)"
        ]
      }
    }
  },
  "25_intelligence_state_bureaucratization": {
    "name": "Intelligence State Bureaucratization (The Filing Cabinet of Secrets)",
    "description": "This eigencluster represents the institutionalization of espionage. It moves from the 'Great Game' of individual adventurers to the industrial-scale data collection of the 20th century. It tracks the birth of MI5/MI6, the Cheka/NKVD, and the CIA. It is the rise of the 'Secret State' that operates parallel to the public government, driven by the need for internal security and external omniscience.",
    "trajectory": {
      "1890": {
        "variance_explained": 2.0,
        "description": "Intelligence was ad-hoc. Military attach\u00e9s and paid informers. No central analysis. The Ochrana (Russia) was the most advanced 'Secret Police,' monitoring exiles. The 'Great Game' in Asia was romantic individualism (Kipling's Kim).",
        "key_manifestations": [
          "Ochrana Paris Bureau activities (Event)",
          "Sign of Four (Sherlock Holmes as private intel)",
          "Caprivi's reorganization (German staff)",
          "Wounded Knee (Failure of Indian intel)"
        ]
      },
      "1891": {
        "variance_explained": 2.0,
        "description": "Stasis. The Ochrana infiltrated revolutionary groups. Azef (double agent) rose. The concept of the 'Agent Provocateur.' In France, the Section Statistique (Army Intel) obsessed over German spies.",
        "key_manifestations": [
          "Ochrana infiltration (Event)",
          "Light That Failed (Book)",
          "Franco-Russian Alliance negotiations (Secret diplomacy)",
          "Sherlock Holmes (Scandal in Bohemia)"
        ]
      },
      "1892": {
        "variance_explained": 2.2,
        "description": "Cholera surveillance (+0.2%). Tracking the disease meant tracking people. Passports used as sanitary cordons. The state's 'legibility' increased. The anarchist bombings led to international police cooperation.",
        "key_manifestations": [
          "Hamburg Cholera measures (Policy)",
          "Ravachol bombings (Event)",
          "Fingerprinting development (Galton)",
          "Germinal (Book)"
        ]
      },
      "1893": {
        "variance_explained": 2.5,
        "description": "Franco-Russian Military Convention (+0.3%). Secret clauses. The diplomats didn't know what the generals signed. The 'Secret Treaty' problem. Intelligence became the currency of alliances.",
        "key_manifestations": [
          "Military Convention signing (Secret Event)",
          "Turner Frontier Thesis (Event)",
          "Dvorak New World (Cultural)",
          "Panama Scandal (Corruption exposed)"
        ]
      },
      "1894": {
        "variance_explained": 5.0,
        "description": "Dreyfus Affair (+2.5%). The Bordereau. A wastebasket search. The Section Statistique forged evidence to frame Dreyfus. It showed the danger of an unaccountable intelligence bureau. The 'Secret File' became a political weapon against the Republic.",
        "key_manifestations": [
          "Discovery of the Bordereau (Event)",
          "The Henry Forgery (Event)",
          "Jungle Book (Book)",
          "Sino-Japanese War (Intel failure of China)"
        ]
      },
      "1895": {
        "variance_explained": 5.0,
        "description": "Stasis. Oscar Wilde trial. Private detectives used to gather evidence of 'gross indecency.' The surveillance of private morality. The state defining the deviant.",
        "key_manifestations": [
          "Oscar Wilde Trial (Event)",
          "Time Machine (Book)",
          "Lumiere Films (Tech)",
          "X-Rays (Seeing the unseen)"
        ]
      },
      "1896": {
        "variance_explained": 5.2,
        "description": "Marconi's Patent (+0.2%). Wireless. The possibility of 'Interception.' The ether was public. Codes became essential. The British Admiralty took immediate interest.",
        "key_manifestations": [
          "Marconi Patent (Tech Event)",
          "Island of Dr. Moreau (Book)",
          "Adwa (Intel failure of Italians)",
          "Becquerel Radioactivity (Science)"
        ]
      },
      "1897": {
        "variance_explained": 5.5,
        "description": "Ochrana's 'Protocols' (+0.3%). The fabrication of the *Protocols of the Elders of Zion* (likely in Paris). Disinformation as statecraft. Creating a fake conspiracy to justify repression.",
        "key_manifestations": [
          "Fabrication of Protocols (Secret Event)",
          "Dracula (Book)",
          "Zionist Congress (Event)",
          "Diamond Jubilee (Event)"
        ]
      },
      "1898": {
        "variance_explained": 6.0,
        "description": "Fashoda (+0.5%). British intel knew Marchand was moving. They intercepted his communications. 'Signals Intelligence' (SIGINT) in its infancy (telegraph tapping). The US in Cuba used insurgents for humint.",
        "key_manifestations": [
          "Fashoda Incident (Event)",
          "War of the Worlds (Book)",
          "Spanish-American War (Event)",
          "Zola's J'Accuse (Exposing the secret state)"
        ]
      },
      "1899": {
        "variance_explained": 6.5,
        "description": "Boer War (+0.5%). The British used 'Scouts' and native informers. But they lacked a central bureau. Baden-Powell (Chief of Scouts at Mafeking) learned the value of observation. *Scouting for Boys* would later militarize observation.",
        "key_manifestations": [
          "Siege of Mafeking (Event)",
          "Hague Convention (Event)",
          "Heart of Darkness (Book)",
          "Dreyfus retrial (Event)"
        ]
      },
      "1900": {
        "variance_explained": 7.0,
        "description": "Boxer Rebellion (+0.5%). The Legations were cut off. A failure of intelligence. They didn't see the Boxers coming. The 'Yellow Peril' fear drove a demand for better Asian intelligence.",
        "key_manifestations": [
          "Siege of Legations (Event)",
          "Lord Jim (Book)",
          "Interpretation of Dreams (Freud - decoding the mind)",
          "Zeppelin (Reconnaissance platform)"
        ]
      },
      "1901": {
        "variance_explained": 7.5,
        "description": "Marconi Transatlantic (+0.5%). The signal crossed the ocean. Global comms. Global interception. The 'Black Chamber' (cryptography) became vital. The US Secret Service (Treasury) began protecting the President after McKinley.",
        "key_manifestations": [
          "Marconi Transatlantic Signal (Tech Event)",
          "Kim (Book - the definitive spy novel)",
          "McKinley Assassination (Event)",
          "Fingerprinting at Scotland Yard (Tech Event)"
        ]
      },
      "1902": {
        "variance_explained": 7.5,
        "description": "Stasis. *The Riddle of the Sands* published (1903, written now). Childers. A spy novel that acted as a policy document. It warned of German invasion preparations. Fiction driving intelligence priorities.",
        "key_manifestations": [
          "Riddle of the Sands writing (Cultural Event)",
          "Heart of Darkness (Book)",
          "Hobson's Imperialism (Book)",
          "Anglo-Japanese Alliance (Event)"
        ]
      },
      "1903": {
        "variance_explained": 8.0,
        "description": "The Riddle of the Sands (+0.5%). Published. It caused a sensation. The Admiralty sent ships to check the German coast. The 'Amateur Spy' became a hero. The public began 'spy spotting.'",
        "key_manifestations": [
          "Riddle of the Sands published (Book)",
          "Call of the Wild (Book)",
          "Wright Flight (Reconnaissance future)",
          "Protocols published in Russia (Disinformation)"
        ]
      },
      "1904": {
        "variance_explained": 8.5,
        "description": "Russo-Japanese War (+0.5%). The Japanese spy network (Akashi) funded Russian revolutionaries to destabilize the Tsar. Covert Action. The first major use of 'Fifth Column' tactics.",
        "key_manifestations": [
          "Akashi network operations (Secret Event)",
          "Dogger Bank Incident (Intel failure - mistaking fishermen for torpedo boats)",
          "Peter Pan (Play)",
          "Golden Bowl (Book)"
        ]
      },
      "1905": {
        "variance_explained": 9.0,
        "description": "Schlieffen Plan (+0.5%). Based on precise intel of French rail capacity. 'Calculation' replaced 'Intuition.' The Spy was a data point. The Okhrana was busy suppressing the 1905 Revolution.",
        "key_manifestations": [
          "Schlieffen Plan memo (Document)",
          "Revolution of 1905 (Event)",
          "Einstein's papers (Science)",
          "Battle of Tsushima (Wireless intel)"
        ]
      },
      "1906": {
        "variance_explained": 9.0,
        "description": "Stasis. Dreadnought. The secrecy surrounding its construction. 'Security' became a naval priority. The Official Secrets Act was already in place (1889), but tightening.",
        "key_manifestations": [
          "Dreadnought secrecy (Event)",
          "The Jungle (Book)",
          "San Francisco Earthquake (Event)",
          "Fallieres Decree (Event)"
        ]
      },
      "1907": {
        "variance_explained": 9.5,
        "description": "Triple Entente (+0.5%). Military conversations began. Sharing of secrets between UK and France. The 'Liaison Officer' became a key intel node.",
        "key_manifestations": [
          "Triple Entente (Event)",
          "Secret Agent (Book)",
          "Picasso (Art)",
          "Hague Convention (Event)"
        ]
      },
      "1908": {
        "variance_explained": 10.0,
        "description": "Bosnian Crisis (+0.5%). Aehrenthal (Austria) used forged documents to justify annexation (Friedjung Trial later). Intel fabrication as diplomacy. *The War in the Air*\u2014Wells depicted the destruction of the 'Information' economy.",
        "key_manifestations": [
          "Bosnian Crisis (Event)",
          "War in the Air (Book)",
          "Scouting for Boys (Training observation)",
          "Young Turk Revolution (Event)"
        ]
      },
      "1909": {
        "variance_explained": 12.0,
        "description": "Secret Service Bureau (+2.0%). UK. Founded to combat the 'German Spy Scare.' Divided into MO5 (Counter-espionage) and MO6 (Foreign Intel). Later MI5/MI6. The bureaucracy of secrets was born. Driven by Le Queux's spy fiction.",
        "key_manifestations": [
          "Founding of Secret Service Bureau (Institutional Event)",
          "Spies of the Kaiser (Book)",
          "Bleriot Flight (Event)",
          "Futurist Manifesto (Art)"
        ]
      },
      "1910": {
        "variance_explained": 12.5,
        "description": "The Doll Case (+0.5%). A German spy in Portsmouth. Caught by the new bureau. Validated MI5's existence. The 'Registry' (card index) began to grow.",
        "key_manifestations": [
          "Arrest of Siegfried Helm (Event)",
          "Great Illusion (Book)",
          "Howards End (Book)",
          "Halley's Comet (Event)"
        ]
      },
      "1911": {
        "variance_explained": 13.0,
        "description": "Official Secrets Act (+0.5%). UK. Draconian. Made it a crime to receive stolen info. The state claiming ownership of truth. Agadir Crisis\u2014the Admiralty intercepted German wireless.",
        "key_manifestations": [
          "Official Secrets Act 1911 (Legal Event)",
          "Agadir Crisis (Event)",
          "Fantomas (Book)",
          "Taylorism (Efficiency)"
        ]
      },
      "1912": {
        "variance_explained": 13.5,
        "description": "Redl Affair (+0.5%). Alfred Redl, head of Austrian Counter-Intel, was a Russian spy. Blackmailed for homosexuality. The ultimate betrayal. It compromised the Austrian war plan. The vulnerability of the 'closet.'",
        "key_manifestations": [
          "Redl Suicide (Event)",
          "Titanic (Event)",
          "Lost World (Book)",
          "Balkan Wars (Event)"
        ]
      },
      "1913": {
        "variance_explained": 14.0,
        "description": "Cumming and Kell (+0.5%). 'C' and 'K.' The heads of MI6/MI5 solidified their fiefdoms. Writing in green ink. The mythology of the Spymaster. In Russia, Stalin wrote on the National Question\u2014intellectual intel.",
        "key_manifestations": [
          "Consolidation of MI5/MI6 (Institutional Event)",
          "Zabern Affair (Event)",
          "Rite of Spring (Cultural)",
          "Sons and Lovers (Book)"
        ]
      },
      "1914": {
        "variance_explained": 20.0,
        "description": "Room 40 and the Roundup (+6.0%). War. MI5 rounded up all German spies (21 of them) on Day 1. Blinded German intel. 'Room 40' formed to break German codes (Magdeburg codebook captured). SIGINT became the primary source. The 'listen' replaced the 'look.'",
        "key_manifestations": [
          "The Spy Roundup (Event)",
          "Formation of Room 40 (Institutional Event)",
          "Capture of Magdeburg Codebook (Event)",
          "39 Steps (Book)"
        ]
      },
      "1915": {
        "variance_explained": 22.0,
        "description": "The Lusitania and Propaganda (+2.0%). Wellington House. Intel and Propaganda fused. The 'Bryce Report' on atrocities\u2014using intel (real and fake) to sway the US. Mata Hari\u2014the spy as celebrity/femme fatale (mostly a scapegoat).",
        "key_manifestations": [
          "Bryce Report (Propaganda)",
          "Mata Hari surveillance (Event)",
          "Lusitania sinking (Event)",
          "Gallipoli (Intel failure on mines)"
        ]
      },
      "1916": {
        "variance_explained": 25.0,
        "description": "Lawrence of Arabia (+3.0%). The Arab Bureau in Cairo. Intelligence officers running an insurgency. Mapping the Hejaz. The 'Scholar-Spy.' In Ireland, the Easter Rising was an intel failure for the British.",
        "key_manifestations": [
          "Arab Bureau operations (Event)",
          "Easter Rising (Event)",
          "Battle of Jutland (Room 40 success/failure)",
          "Somme (Event)"
        ]
      },
      "1917": {
        "variance_explained": 35.0,
        "description": "Zimmerman and Cheka (+10.0%). 1. Zimmerman Telegram. Room 40 changed the world. Intel brought the US into the war. 2. The Cheka founded. Dzerzhinsky. The Terror State. 'The Sword and Shield.' Intel became the governing mechanism of the USSR.",
        "key_manifestations": [
          "Zimmerman Telegram (Event)",
          "Founding of Cheka (Institutional Event)",
          "US Espionage Act (Legal Event)",
          "Mata Hari executed (Event)"
        ]
      },
      "1918": {
        "variance_explained": 38.0,
        "description": "The Red Terror (+3.0%). The Cheka executed thousands. Class enemies. The 'File' was the death warrant. In the West, the 'Censorship' was total. The flu was censored (Spanish Flu name).",
        "key_manifestations": [
          "Red Terror begins (Event)",
          "Spanish Flu censorship (Event)",
          "Armistice (Event)",
          "Decline of the West (Book)"
        ]
      },
      "1919": {
        "variance_explained": 35.0,
        "description": "GCCS and Comintern (-3.0% Kinetic, +Crypto). UK formed the Government Code and Cypher School. Permanent crypto-bureaucracy. The Comintern formed\u2014exporting revolution via secret agents. The 'Red Scare' in US\u2014Palmer Raids (FBI precursor).",
        "key_manifestations": [
          "GCCS formed (Institutional Event)",
          "Comintern founded (Event)",
          "Palmer Raids (Event)",
          "Versailles (Event)"
        ]
      },
      "1920": {
        "variance_explained": 35.0,
        "description": "The Trust Operation (+0.0%). The Cheka created a fake anti-Bolshevik underground ('The Trust') to lure in exiles and Western intel. The masterstroke of counter-intelligence. Dzerzhinsky's genius. The West was fooled for years.",
        "key_manifestations": [
          "The Trust Operation begins (Secret Event)",
          "Iraqi Revolt (Intel failure)",
          "Beyond the Pleasure Principle (Book)",
          "Kapp Putsch (Event)"
        ]
      },
      "1921": {
        "variance_explained": 35.0,
        "description": "Stasis. Venona roots. The Soviets began recruiting in the West. The 'Illegals.' In the US, the Black Chamber (Yardley) broke diplomatic codes at the Washington Conference.",
        "key_manifestations": [
          "Black Chamber success (Secret Event)",
          "Washington Naval Treaty (Event)",
          "Cheka becomes GPU (Rebranding)",
          "Tractatus (Philosophy)"
        ]
      },
      "1922": {
        "variance_explained": 35.0,
        "description": "GPU/OGPU (+0.0%). The Soviet secret police became a permanent state organ. Surveillance was normalized. Mussolini's OVRA (later) began to form\u2014the Fascist secret police.",
        "key_manifestations": [
          "Formation of GPU (Institutional Event)",
          "March on Rome (Event)",
          "Waste Land (Poem)",
          "Ulysses (Book)"
        ]
      },
      "1923": {
        "variance_explained": 35.0,
        "description": "Stasis. Interpol (ICPC) founded in Vienna. International police cooperation. Originally apolitical, later taken over by Nazis. The database of criminals.",
        "key_manifestations": [
          "Interpol founded (Institutional Event)",
          "Beer Hall Putsch (Event)",
          "Hyperinflation (Event)",
          "Time Magazine (Media)"
        ]
      },
      "1924": {
        "variance_explained": 38.0,
        "description": "Zinoviev Letter (+3.0%). A forged letter (likely by MI6/White Russians) brought down the Labour government. Intelligence interfering in domestic politics. 'Active Measures.' Hoover became head of the BOI (FBI).",
        "key_manifestations": [
          "Zinoviev Letter (Event)",
          "J. Edgar Hoover appointed (Bio Event)",
          "Magic Mountain (Book)",
          "Surrealist Manifesto (Art)"
        ]
      },
      "1925": {
        "variance_explained": 38.0,
        "description": "Mein Kampf (+0.0%). Hitler outlined his view of the 'Jewish Conspiracy.' Intelligence as paranoia. The SS was formed\u2014originally a small intel/security unit.",
        "key_manifestations": [
          "SS formation (Institutional Event)",
          "Mein Kampf (Book)",
          "Great Gatsby (Book)",
          "Locarno (Event)"
        ]
      },
      "1926": {
        "variance_explained": 38.0,
        "description": "Enigma (+0.0%). The German Navy adopted the Enigma machine. The 'Blackout' of signals intelligence began. The race to break it started (Poland).",
        "key_manifestations": [
          "Enigma adopted by Kriegsmarine (Tech Event)",
          "General Strike (MI5 surveillance of unions)",
          "Sun Also Rises (Book)",
          "Metropolis (Film)"
        ]
      },
      "1927": {
        "variance_explained": 40.0,
        "description": "Arcos Raid (+2.0%). UK police raided the Soviet trade mission (Arcos). Found evidence of spying. Broke relations. But they revealed they were reading Soviet codes. The Soviets changed their ciphers (One Time Pads). A tactical win, strategic loss.",
        "key_manifestations": [
          "Arcos Raid (Event)",
          "Change of Soviet Ciphers (Tech Event)",
          "Jazz Singer (Film)",
          "Being and Time (Book)"
        ]
      },
      "1928": {
        "variance_explained": 42.0,
        "description": "Polish Cipher Bureau (+2.0%). Biuro Szyfrow. Hired mathematicians to attack Enigma. The first scientific approach to codebreaking. Rejewski. The seed of Ultra.",
        "key_manifestations": [
          "Polish Cipher Bureau hiring (Event)",
          "Ashenden by Maugham (Realistic spy fiction)",
          "Kellogg-Briand Pact (Event)",
          "Lady Chatterley (Book)"
        ]
      },
      "1929": {
        "variance_explained": 40.0,
        "description": "Stimson's Ethics (-2.0%). 'Gentlemen do not read each other's mail.' Stimson closed the US Black Chamber. A moral stand that left the US blind. Yardley published his book, revealing all secrets.",
        "key_manifestations": [
          "Closing of Black Chamber (Policy)",
          "The American Black Chamber published (Book)",
          "Wall Street Crash (Event)",
          "All Quiet (Book)"
        ]
      },
      "1930": {
        "variance_explained": 42.0,
        "description": "Stasis. The Cambridge Five (Philby, etc.) recruited by the Soviets at university. The 'Mole' burrowed into the establishment. Ideological espionage.",
        "key_manifestations": [
          "Recruitment of Cambridge Spies (Secret Event)",
          "Civilization and Its Discontents (Book)",
          "Blue Angel (Film)",
          "Nazi breakthrough (Event)"
        ]
      },
      "1931": {
        "variance_explained": 45.0,
        "description": "SD Formed (+3.0%). Sicherheitsdienst. The SS intelligence service. Heydrich. Collecting dirt on everyone, including Nazis. The 'Card Index' of the police state.",
        "key_manifestations": [
          "SD formed (Institutional Event)",
          "Mukden Incident (Intel fabrication)",
          "M (Film)",
          "Empire State Building (Event)"
        ]
      },
      "1932": {
        "variance_explained": 48.0,
        "description": "Rejewski breaks Enigma (+3.0%). Mathematically. He reconstructed the machine without seeing it. The greatest intel feat of the era. Kept secret.",
        "key_manifestations": [
          "Rejewski's breakthrough (Secret Event)",
          "Brave New World (Book)",
          "Famine in Ukraine (Hidden by censorship)",
          "Bonus Army (FBI surveillance)"
        ]
      },
      "1933": {
        "variance_explained": 55.0,
        "description": "Gestapo (+7.0%). Goering founded the Gestapo. The Secret State Police. Terror + Bureaucracy. The 'Block Warden' system\u2014every neighbor a spy. The end of privacy.",
        "key_manifestations": [
          "Gestapo founded (Institutional Event)",
          "Reichstag Fire (Intel provocation?)",
          "King Kong (Film)",
          "Hitler Chancellor (Event)"
        ]
      },
      "1934": {
        "variance_explained": 60.0,
        "description": "Night of the Long Knives (+5.0%). The SD and Gestapo provided the 'Death Lists.' The Bureaucracy of Murder. NKVD formed in Russia\u2014unifying all police/intel. The Kirov Murder\u2014pretext for the Great Terror.",
        "key_manifestations": [
          "Night of the Long Knives (Event)",
          "NKVD formed (Institutional Event)",
          "Kirov Murder (Event)",
          "Tender is the Night (Book)"
        ]
      },
      "1935": {
        "variance_explained": 62.0,
        "description": "Watson-Watt Radar (+2.0%). The 'Detection' revolution. Seeing the enemy plane. Electronic Intelligence (ELINT) roots. Abwehr (Canaris) expanded.",
        "key_manifestations": [
          "Daventry Experiment (Tech Event)",
          "Canaris heads Abwehr (Bio Event)",
          "Nuremberg Laws (Identity definition)",
          "39 Steps (Hitchcock)"
        ]
      },
      "1936": {
        "variance_explained": 65.0,
        "description": "The Great Purge (+3.0%). The NKVD devoured the Party. Confessions extracted by torture. The 'Show Trial'\u2014intel as theater. Turing published on Computable Numbers\u2014the theory of the code-breaking machine.",
        "key_manifestations": [
          "Moscow Show Trials (Event)",
          "Turing's Paper (Science)",
          "Spanish Civil War (Soviet/German intel proxy war)",
          "Modern Times (Film)"
        ]
      },
      "1937": {
        "variance_explained": 68.0,
        "description": "Sorge in Tokyo (+3.0%). Richard Sorge. The master spy. Infiltrated the German embassy in Tokyo. Reported to Moscow. 'Ramsey.' The Spy as Hero.",
        "key_manifestations": [
          "Sorge operations (Secret Event)",
          "Tukhachevsky Purge (German disinformation used)",
          "Guernica (Event)",
          "Snow White (Film)"
        ]
      },
      "1938": {
        "variance_explained": 70.0,
        "description": "Crystal Night (+2.0%). The Gestapo managed the pogrom. The 'Passport' system tightened (J stamp). Identity papers became a matter of life and death.",
        "key_manifestations": [
          "Kristallnacht (Event)",
          "Munich Crisis (Intel failure of West)",
          "War of the Worlds (Event)",
          "Nausea (Book)"
        ]
      },
      "1939": {
        "variance_explained": 75.0,
        "description": "The Transfer (+5.0%). The Poles gave the Enigma secret to the British/French. 'Pyry.' The relay baton. Bletchley Park opened. The 'Government Code and Cypher School' moved to the country. The Industrialization of Decryption.",
        "key_manifestations": [
          "Pyry Meeting (Event)",
          "Bletchley Park opens (Institutional Event)",
          "Gleiwitz Incident (SD false flag starting the war)",
          "Grapes of Wrath (Book)"
        ]
      },
      "1940": {
        "variance_explained": 80.0,
        "description": "Ultra and Magic (+5.0%). The Bombe (Turing) broke Enigma. 'Ultra.' The US broke 'Purple' (Magic). The Allies began reading the Axis mind. The Venlo Incident\u2014German intel kidnapped British agents, rolling up the network. SOE formed\u2014'Set Europe Ablaze.'",
        "key_manifestations": [
          "Breaking of Enigma (Event)",
          "Venlo Incident (Event)",
          "SOE formed (Institutional Event)",
          "Great Dictator (Film)"
        ]
      },
      "1941": {
        "variance_explained": 85.0,
        "description": "Pearl Harbor and Barbarossa (+5.0%). Twin Intelligence Failures. Strategic blindness despite tactical intercepts. Sorge warned Stalin; ignored. Magic warned US; bureaucracy clogged. The COI (Coordinator of Information) formed\u2014pre-OSS.",
        "key_manifestations": [
          "Sorge's warning (Event)",
          "Pearl Harbor (Event)",
          "COI formed (Institutional Event)",
          "Citizen Kane (Film)"
        ]
      },
      "1942": {
        "variance_explained": 90.0,
        "description": "OSS (+5.0%). Office of Strategic Services. Donovan. The US entered the spy game. Scholars, lawyers, athletes. 'Oh So Social.' The 'Jedburghs.' The 'Red Orchestra' (Soviet spies in Berlin) detected by Gestapo.",
        "key_manifestations": [
          "OSS founded (Institutional Event)",
          "Red Orchestra arrests (Event)",
          "Midway (Intel victory)",
          "Casablanca (Film)"
        ]
      },
      "1943": {
        "variance_explained": 92.0,
        "description": "Colossus (+2.0%). The first electronic computer. Built to break 'Tunny' (Hitler's comms). Codebreaking drove computing. Operation Mincemeat ('The Man Who Never Was')\u2014strategic deception.",
        "key_manifestations": [
          "Colossus computer (Tech Event)",
          "Operation Mincemeat (Event)",
          "Tehran Conference (Bugged)",
          "Oklahoma! (Musical)"
        ]
      },
      "1944": {
        "variance_explained": 95.0,
        "description": "Fortitude and Manhattan (+3.0%). Operation Fortitude. The Double Cross System (turning all German spies). Convinced Hitler D-Day was elsewhere. The Manhattan Project\u2014Klaus Fuchs stealing the atomic bomb secrets for Stalin. The greatest theft in history.",
        "key_manifestations": [
          "Operation Fortitude (Event)",
          "Fuchs espionage (Secret Event)",
          "Double Cross System (Event)",
          "Double Indemnity (Film)"
        ]
      },
      "1945": {
        "variance_explained": 85.0,
        "description": "The Gouzenko Affair (-10.0% Wartime, +Cold War). A Soviet cipher clerk defected in Canada. Revealed the massive Soviet spy ring. It triggered the Cold War. The OSS was disbanded (too 'Gestapo-like'), then regretted.",
        "key_manifestations": [
          "Gouzenko Defection (Event)",
          "OSS disbanded (Policy)",
          "Gehlen Org (Nazi intel hired by US)",
          "Animal Farm (Book)"
        ]
      },
      "1946": {
        "variance_explained": 88.0,
        "description": "Venona (+3.0%). The US/UK began decrypting Soviet cables. Identifying the spies. 'Project Venona.' Kept secret even from presidents. The Iron Curtain speech defined the new target.",
        "key_manifestations": [
          "Venona Project starts (Secret Event)",
          "Iron Curtain Speech (Event)",
          "CIG (Central Intelligence Group) formed (Institutional Event)",
          "Best Years of Our Lives (Film)"
        ]
      },
      "1947": {
        "variance_explained": 95.0,
        "description": "The CIA (+7.0%). National Security Act. The Central Intelligence Agency. Permanent, global, covert. The 'National Security State' was codified. The Cold War required a peacetime spy machine.",
        "key_manifestations": [
          "CIA founded (Institutional Event)",
          "National Security Act (Legal Event)",
          "Truman Loyalty Oath (Domestic intel)",
          "Streetcar Named Desire (Play)"
        ]
      },
      "1948": {
        "variance_explained": 95.0,
        "description": "Covert Action (+0.0%). The CIA influenced the Italian Elections. The start of 'regime change' ops. The KGB consolidated the Eastern Bloc. Hiss Case\u2014the spy hunt at home.",
        "key_manifestations": [
          "Italian Election operation (Event)",
          "Alger Hiss Case (Event)",
          "1984 (Book - the surveillance state)",
          "Berlin Airlift (Event)"
        ]
      },
      "1949": {
        "variance_explained": 98.0,
        "description": "Soviet Bomb and NATO (+3.0%). The detection of Joe-1 (Long Range Detection). An intel triumph. NATO formed\u2014intelligence sharing alliance (UKUSA agreement roots).",
        "key_manifestations": [
          "Detection of Soviet Bomb (Event)",
          "NATO formed (Event)",
          "Death of a Salesman (Play)",
          "Third Man (Film)"
        ]
      },
      "1950": {
        "variance_explained": 100.0,
        "description": "McCarthyism and Korea (+2.0%). Senator McCarthy: 'I have a list.' The politicization of intelligence. Klaus Fuchs arrested. The Rosenbergs. The 'Red Scare' was an intelligence panic. NSC-68 defined the strategy.",
        "key_manifestations": [
          "McCarthy's Wheeling Speech (Event)",
          "Fuchs/Rosenberg arrests (Event)",
          "NSC-68 (Document)",
          "Korean War (Intel failure)"
        ]
      }
    }
  }
}
};

const militaryPreset: PresetConfig = {
  id: 'military_history',
  name: 'Military History Analysis (1890-1950)',
  description: 'Military History Analysis (1890-1950)',
  startYear: '1890',
  endYear: '1950',
  clusterStart: 1,
  clusterEnd: 25,
  periodicity: 1,
  context: 'Military History Analysis',
  model: 'o1-mini',
  cachedResult: militaryData
};

export default militaryPreset;
