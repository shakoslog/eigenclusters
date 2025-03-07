import { PresetConfig } from './types';

// Cold War analysis data moved directly into this file
const glasnostData = 
  {
    "metadata": {
      "period": "1983-1991",
      "interval": "1 years",
      "cluster_range": "1-5",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_perestroika_economic_reform [↗] (8.5%)",
        "2_glasnost_media_openness [↗] (7.8%)",
        "3_nationalist_separatist_movements [↗] (6.5%)",
        "4_dissident_artistic_expression [↗] (6.2%)",
        "5_fall_of_communist_regimes [↗] (5.9%)",
        "6_conservative_reactionary_movement [↘] (4.8%)",
        "7_cultural_revival_religious_movement [↗] (4.5%)",
        "8_soviet_cinema_transformation [→] (4.2%)",
        "9_environmental_awareness_and_movement [↗] (3.9%)",
        "10_feminist_movements_in_the_soviet_union [→] (3.5%)",
        "11_underground_music_and_punk_scene [↗] (3.2%)",
        "12_educational_reforms_and_academic_freedom [→] (3.0%)",
        "13_economic_decline_narratives [↘] (2.8%)",
        "14_international_relations_and_diplomacy [→] (2.5%)",
        "15_youth_culture_and_subcultures [↗] (2.3%)",
        "16_fashion_trends_and_material_culture [→] (2.0%)",
        "17_sports_promotion_and_international_events [→] (1.8%)",
        "18_family_structures_and_social_dynamics [→] (1.6%)",
        "19_art_exhibitions_and_new_media [↗] (1.4%)",
        "20_underground_literature_and_publications [↗] (1.3%)"
      ]
    },
    "clusters": {
      "1_perestroika_economic_reform": {
        "name": "Perestroika Economic Reform",
        "description": "Perestroika, initiated by Mikhail Gorbachev, represented a series of political and economic reforms aimed at restructuring the Soviet economy. This cluster encompasses the policies and societal responses to economic liberalization, attempts at decentralization, and the shift towards a more open market system. The reforms sought to increase productivity, improve efficiency, and integrate the Soviet economy with global markets, marking a significant departure from strict centralized planning.",
        "trajectory": {
          "1983": {
            "variance_explained": 2.1,
            "description": "Pre-Perestroika period with minimal reform discussion under Andropov, focused primarily on work discipline and anti-corruption measures rather than systemic change.",
            "key_manifestations": [
              "Yuri Andropov's limited anti-corruption campaign",
              "Early economic experiments in select factories",
              "Minor adjustments to the 11th Five-Year Plan",
              "Academic papers by economists like Abel Aganbegyan proposing reforms"
            ]
          },
          "1984": {
            "variance_explained": 2.3,
            "description": "Continued economic stagnation under Chernenko with limited reform discourse, though economists increasingly discuss need for structural changes.",
            "key_manifestations": [
              "Konstantin Chernenko's conservative approach to economy",
              "Declining productivity in heavy industry sectors",
              "Rise in economic reform discussions among technocrats",
              "Limited agricultural reforms after poor harvests"
            ]
          },
          "1985": {
            "variance_explained": 3.5,
            "description": "Significant shift as Gorbachev comes to power in March, beginning to formulate economic reform concepts that would later become Perestroika.",
            "key_manifestations": [
              "Gorbachev's April speech suggesting economic restructuring",
              "Anti-alcohol campaign as first economic intervention",
              "Formation of economic advisory team under Aganbegyan",
              "Initial discussions on enterprise autonomy"
            ]
          },
          "1986": {
            "variance_explained": 5.8,
            "description": "Dramatic acceleration as Perestroika is officially announced at 27th Party Congress, creating substantial economic and political impact.",
            "key_manifestations": [
              "27th Party Congress officially launching Perestroika",
              "Law on Individual Labor Activity permitting private enterprise",
              "Creation of joint venture legislation for foreign investment",
              "Establishment of quality control measures across industries"
            ]
          },
          "1987": {
            "variance_explained": 7.2,
            "description": "Perestroika reaches peak influence as comprehensive economic reforms are implemented, representing the height of economic restructuring efforts.",
            "key_manifestations": [
              "Law on State Enterprise granting self-financing rights",
              "Banking system restructuring creating commercial banks",
              "Expanding cooperative movement with 13,000 new businesses",
              "Creation of Perestroika-themed economic journals and publications"
            ]
          },
          "1988": {
            "variance_explained": 8.5,
            "description": "Economic reforms face growing challenges as inflation rises and production disruptions occur, but reform efforts continue with broad impact.",
            "key_manifestations": [
              "Law on Cooperatives expanding private business rights",
              "Foreign trade liberalization measures implemented",
              "Rising consumer goods shortages despite reforms",
              "Growth of black market alongside legal private enterprise"
            ]
          },
          "1989": {
            "variance_explained": 7.6,
            "description": "Economic reforms begin losing momentum as ethnic conflicts and political issues overshadow economic concerns, though reform policies continue.",
            "key_manifestations": [
              "Coal miners' strikes demonstrating economic discontent",
              "Growth in republic-level economic sovereignty demands",
              "Rising inflation undermining reform credibility",
              "International economic assistance negotiations"
            ]
          },
          "1990": {
            "variance_explained": 6.3,
            "description": "Perestroika declines in influence as republics pursue independent economic policies and public faith in reforms diminishes amid worsening conditions.",
            "key_manifestations": [
              "Failed 500 Days Program for market transition",
              "Republic-level economic laws superseding Union policies",
              "Consumer goods shortages reaching crisis levels",
              "Currency exchange and price reform attempts"
            ]
          },
          "1991": {
            "variance_explained": 4.5,
            "description": "Perestroika effectively ends as the Soviet economic system collapses, with republics declaring independence and implementing their own economic policies.",
            "key_manifestations": [
              "Pavlov's failed monetary reform attempt",
              "August coup disrupting remaining economic structures",
              "Republic declarations ending central economic control",
              "Preparations for shock therapy reforms in post-Soviet states"
            ]
          }
        }
      },
      "2_glasnost_media_openness": {
        "name": "Glasnost Media Openness",
        "description": "Glasnost, meaning 'openness', was a policy aimed at increasing transparency in government institutions and promoting freedom of information. This cluster captures the liberalization of the Soviet media landscape, the relaxation of censorship, and the rise of investigative journalism. Glasnost facilitated greater public discourse, exposed governmental shortcomings, and allowed previously suppressed cultural and political voices to emerge.",
        "trajectory": {
          "1983": {
            "variance_explained": 1.8,
            "description": "Pre-Glasnost era with tight media control and minimal openness, though some limited criticism of inefficiency is permitted under Andropov.",
            "key_manifestations": [
              "Strictly controlled official newspapers like Pravda and Izvestia",
              "Limited criticism of bureaucratic inefficiency in approved contexts",
              "Continued suppression of dissident publications",
              "Careful censorship of artistic and cultural content"
            ]
          },
          "1984": {
            "variance_explained": 1.9,
            "description": "Continued strict media control under Chernenko with minimal change in information accessibility or press freedom.",
            "key_manifestations": [
              "Return to stricter ideological control under Chernenko",
              "Suppression of unauthorized publications",
              "Continued jamming of Western radio broadcasts",
              "Prosecutions for samizdat distribution"
            ]
          },
          "1985": {
            "variance_explained": 2.8,
            "description": "Initial signs of media liberalization appear as Gorbachev comes to power, with slightly broader discussion of social problems permitted.",
            "key_manifestations": [
              "Gorbachev's early speeches mentioning need for openness",
              "Limited reporting on social issues like alcoholism",
              "Reduced censorship of selected cultural works",
              "First appearances of reform-minded editors in official press"
            ]
          },
          "1986": {
            "variance_explained": 4.7,
            "description": "Significant breakthrough as Chernobyl disaster in April forces greater transparency, and Glasnost policies are officially formulated.",
            "key_manifestations": [
              "Limited but unprecedented coverage of Chernobyl disaster",
              "Release of dissident Andrei Sakharov from exile",
              "First public discussions of Stalin-era crimes",
              "Emergence of more critical reporting in official newspapers"
            ]
          },
          "1987": {
            "variance_explained": 6.9,
            "description": "Dramatic expansion of media freedom as Glasnost becomes entrenched, enabling unprecedented public discussion of previously forbidden topics.",
            "key_manifestations": [
              "Film release of previously banned movies like 'Repentance'",
              "Publication of formerly prohibited literature by Solzhenitsyn",
              "TV programs openly discussing social problems",
              "Emergence of independent newspapers and magazines"
            ]
          },
          "1988": {
            "variance_explained": 8.3,
            "description": "Media openness reaches revolutionary heights with explosive growth in independent publications and open discussion of the most sensitive historical and political issues.",
            "key_manifestations": [
              "19th Party Conference debates televised live",
              "Newspapers publishing exposés on corruption and privileges",
              "Open reporting on ethnic conflicts in the Caucasus",
              "End of jamming of Voice of America and BBC broadcasts"
            ]
          },
          "1989": {
            "variance_explained": 8.8,
            "description": "Glasnost reaches its peak as media freedom flourishes with revolutionary impact, playing a crucial role in accelerating political change.",
            "key_manifestations": [
              "Live television broadcasts of Congress of People's Deputies sessions",
              "Extensive reporting on Baltic independence movements",
              "Publication of the secret protocols of the Molotov-Ribbentrop Pact",
              "Documentaries examining Soviet involvement in Afghanistan"
            ]
          },
          "1990": {
            "variance_explained": 7.9,
            "description": "Media openness remains strong but becomes more fragmented as republic-level media pursues nationalist agendas and central control weakens.",
            "key_manifestations": [
              "Law on the Press officially ending censorship",
              "Rise of republic-based nationalist media",
              "Competing narratives in different regional publications",
              "Emergence of commercial advertising in media"
            ]
          },
          "1991": {
            "variance_explained": 7.2,
            "description": "Glasnost as a distinct force begins transitioning to post-Soviet media landscapes as the unified information space fragments alongside the Soviet collapse.",
            "key_manifestations": [
              "Live coverage of August coup attempt",
              "Diversity of viewpoints in coverage of Union dissolution",
              "Emergence of new post-Soviet media entities",
              "Republic-level media supporting independence movements"
            ]
          }
        }
      },
      "3_nationalist_separatist_movements": {
        "name": "Nationalist Separatist Movements",
        "description": "This cluster encompasses the rise of nationalist and separatist movements within various Soviet republics. Fueled by ethnic, cultural, and historical identities, these movements sought greater autonomy or complete independence from the Soviet Union. The period saw a surge in political activism, declarations of sovereignty, and the reassertion of national identities, contributing significantly to the Soviet Union's disintegration.",
        "trajectory": {
          "1983": {
            "variance_explained": 2.0,
            "description": "Nationalist sentiments remain largely suppressed but persist underground, particularly in the Baltic states and Ukraine.",
            "key_manifestations": [
              "Samizdat nationalist literature circulation in the Baltics",
              "Small-scale unofficial commemorations of pre-Soviet independence",
              "Underground cultural activities preserving national languages",
              "Limited diaspora support for independence movements"
            ]
          },
          "1984": {
            "variance_explained": 2.1,
            "description": "Nationalist activities remain minimal under continued repression, though cultural expressions with nationalist undertones increase slightly.",
            "key_manifestations": [
              "Growing attendance at cultural events with national themes",
              "Formation of historical preservation societies with nationalist undertones",
              "Environmental protests in Baltic states with implicit nationalist agenda",
              "Limited religious-national movements in western Ukraine"
            ]
          },
          "1985": {
            "variance_explained": 2.4,
            "description": "Slight increase in nationalist expressions as political controls begin to loosen, though movements remain largely cultural rather than overtly political.",
            "key_manifestations": [
              "Expansion of folk music festivals in the Baltic republics",
              "Growing environmental movements in Armenia with nationalist dimensions",
              "Formation of cultural heritage societies in Georgia",
              "Increased publication of works in national languages"
            ]
          },
          "1986": {
            "variance_explained": 3.0,
            "description": "Nationalist sentiments become more visible with the beginning of Glasnost, though still primarily expressed through cultural and environmental causes.",
            "key_manifestations": [
              "December 1986 Alma-Ata riots in Kazakhstan",
              "Expansion of ecological protests in Baltic states with nationalist character",
              "Creation of cultural clubs promoting national identities",
              "Increased public display of national symbols"
            ]
          },
          "1987": {
            "variance_explained": 4.2,
            "description": "Significant growth in nationalist movements as they become openly political, with mass demonstrations occurring in several republics.",
            "key_manifestations": [
              "First mass demonstrations in Baltic states on Molotov-Ribbentrop Pact anniversary",
              "Formation of popular fronts in Latvia, Estonia, and Lithuania",
              "Karabakh movement emergence in Armenia",
              "Ukrainian cultural revival with political dimensions"
            ]
          },
          "1988": {
            "variance_explained": 5.8,
            "description": "Dramatic acceleration as nationalist movements transform into mass political forces with explicit independence agendas in several republics.",
            "key_manifestations": [
              "Estonian sovereignty declaration in November",
              "Lithuanian Sąjūdis movement gaining majority support",
              "Formation of Azerbaijan Popular Front",
              "Mass demonstrations for independence across Baltic states"
            ]
          },
          "1989": {
            "variance_explained": 7.5,
            "description": "Nationalist movements reach revolutionary intensity with mass demonstrations, human chains, and formal independence declarations in multiple republics.",
            "key_manifestations": [
              "Baltic Way human chain involving 2 million people",
              "Lithuanian declaration of independence from USSR",
              "Georgian independence movement and Tbilisi massacre",
              "Ukrainian Rukh movement mass mobilization"
            ]
          },
          "1990": {
            "variance_explained": 8.9,
            "description": "Nationalist separatism becomes the dominant political force across the Soviet Union, overtaking reform communism as republic after republic declares sovereignty.",
            "key_manifestations": [
              "Lithuanian formal declaration of independence",
              "Russia's declaration of sovereignty under Yeltsin",
              "Sovereignty declarations from Ukraine, Belarus, and Central Asian republics",
              "Violent ethnic conflicts in Caucasus regions"
            ]
          },
          "1991": {
            "variance_explained": 9.5,
            "description": "Nationalist movements achieve their ultimate goal as the Soviet Union dissolves, with all republics declaring independence and establishing nation-states.",
            "key_manifestations": [
              "Baltic independence recognized internationally after August coup",
              "Ukrainian independence referendum with 90% support",
              "Belavezha Accords dissolving the Soviet Union",
              "Formation of Commonwealth of Independent States"
            ]
          }
        }
      },
      "4_dissident_artistic_expression": {
        "name": "Dissident Artistic Expression",
        "description": "This cluster highlights the flourishing of dissident art and literature as a form of resistance against Soviet authoritarianism. Artists, writers, and musicians employed their creative works to critique the government, express forbidden ideas, and promote freedom of thought. This period saw the rise of underground art movements, samizdat literature, and alternative music scenes, which played a crucial role in shaping public sentiment and challenging the status quo.",
        "trajectory": {
          "1983": {
            "variance_explained": 2.5,
            "description": "Dissident art exists primarily underground with limited circulation, focusing on coded critiques of Soviet reality while avoiding direct political confrontation.",
            "key_manifestations": [
              "Samizdat poetry collections circulated in intellectual circles",
              "Underground art exhibitions in private apartments in Moscow",
              "Unofficial rock concerts by bands like Aquarium and Kino",
              "Magnitizdat tape recordings of prohibited music and poetry"
            ]
          },
          "1984": {
            "variance_explained": 2.6,
            "description": "Underground artistic networks maintain steady activity despite continued repression, with growing interest in Western cultural influences.",
            "key_manifestations": [
              "Moscow underground art exhibitions in private spaces",
              "Growth of rock clubs in Leningrad with semi-official status",
              "Literature focusing on everyday Soviet reality rather than ideals",
              "Growth of unofficial film screenings in cultural centers"
            ]
          },
          "1985": {
            "variance_explained": 2.8,
            "description": "Initial signs of cultural liberalization as new leadership indicates potentially greater tolerance for artistic expression.",
            "key_manifestations": [
              "First mention of previously banned authors in official publications",
              "Limited exhibition of formerly suppressed artworks",
              "Rock music gaining limited official recognition",
              "Reduction in persecution of alternative artistic groups"
            ]
          },
          "1986": {
            "variance_explained": 3.5,
            "description": "Significant breakthrough as censorship begins to relax, allowing previously forbidden works to reach broader audiences.",
            "key_manifestations": [
              "Release of banned films like 'Repentance' by Tengiz Abuladze",
              "Return of Andrei Tarkovsky's films to Soviet screens",
              "Publication of previously prohibited literary works",
              "First major exhibitions of unofficial art in state galleries"
            ]
          },
          "1987": {
            "variance_explained": 5.2,
            "description": "Dramatic expansion of artistic freedom as former underground movements emerge into mainstream culture with significant public impact.",
            "key_manifestations": [
              "Publication of Doctor Zhivago by Boris Pasternak",
              "First rock music festival 'Rock for Peace' with international acts",
              "Exhibition of previously banned avant-garde art at major museums",
              "Theatre productions addressing Stalin-era repression"
            ]
          },
          "1988": {
            "variance_explained": 6.8,
            "description": "Revolutionary cultural opening as dissident art becomes mainstream, with formerly banned works and artists achieving celebrity status.",
            "key_manifestations": [
              "Publication of Solzhenitsyn's Gulag Archipelago",
              "Vysotsky retrospective exhibitions across the country",
              "Major stadium concerts by formerly underground rock groups",
              "First uncensored films directly addressing Soviet crimes"
            ]
          },
          "1989": {
            "variance_explained": 7.4,
            "description": "Dissident art reaches peak cultural influence, playing a central role in reshaping public consciousness about Soviet history and identity.",
            "key_manifestations": [
              "Complete works of banned émigré writers published",
              "Documentary films examining Soviet historical traumas",
              "Explosion of new literary journals publishing controversial works",
              "Incorporation of dissident aesthetic into mainstream advertising and media"
            ]
          },
          "1990": {
            "variance_explained": 6.9,
            "description": "Former dissident art begins transitioning to post-Soviet forms as commercial pressures and nationalist themes increasingly influence creative production.",
            "key_manifestations": [
              "Commercialization of alternative culture",
              "Rise of nationalist themes in art and literature",
              "Growing Western cultural imports competing with local production",
              "Integration of former dissident artists into new cultural establishments"
            ]
          },
          "1991": {
            "variance_explained": 6.3,
            "description": "Dissident art as a category begins to dissolve as the Soviet system it opposed collapses, transitioning to diverse post-Soviet cultural landscapes.",
            "key_manifestations": [
              "Art exhibitions commenting on the Soviet collapse",
              "Emergence of commercial art markets",
              "Former dissident artists entering political roles",
              "Documentation and archiving of Soviet underground culture"
            ]
          }
        }
      },
      "5_fall_of_communist_regimes": {
        "name": "Fall of Communist Regimes",
        "description": "This cluster encompasses the broader political and social movements leading to the collapse of communist regimes within the Soviet Union and its satellite states. It includes the erosion of communist ideology, the rise of democratic and capitalist aspirations, and the eventual disintegration of the Soviet state structure. The fall was influenced by internal economic struggles, popular protests, and significant political reforms that undermined the authority of the communist party.",
        "trajectory": {
          "1983": {
            "variance_explained": 1.5,
            "description": "Communist regimes maintain firm control with minimal visible opposition, though economic stagnation creates underlying systemic weaknesses.",
            "key_manifestations": [
              "Continued one-party dominance across Eastern Bloc",
              "Limited expressions of political dissent",
              "Ideological conformity in public discourse",
              "Strong security apparatus suppressing opposition"
            ]
          },
          "1984": {
            "variance_explained": 1.6,
            "description": "Communist authority remains largely unchallenged on the surface, though underground opposition networks continue to develop.",
            "key_manifestations": [
              "Leadership transition uncertainties following Andropov's death",
              "Growing economic difficulties undermining regime legitimacy",
              "Small-scale opposition activities in Eastern European satellites",
              "Continued Cold War confrontation reinforcing regime security focus"
            ]
          },
          "1985": {
            "variance_explained": 1.9,
            "description": "Initial reform discussions begin within communist parties, though fundamental challenges to the system remain minimal.",
            "key_manifestations": [
              "Gorbachev's appointment signaling potential for reform",
              "Early discussions about limited economic changes",
              "Continued stability of communist regimes in Eastern Europe",
              "Minor liberalization in cultural policies"
            ]
          },
          "1986": {
            "variance_explained": 2.4,
            "description": "Communist authority begins facing more significant challenges as reforms create unintended consequences and opportunities for critics.",
            "key_manifestations": [
              "Chernobyl disaster damaging regime credibility",
              "Reform communists gaining influence in Hungary and Poland",
              "Growing public discussions questioning communist achievements",
              "Reductions in internal security apparatus activities"
            ]
          },
          "1987": {
            "variance_explained": 3.2,
            "description": "Communist regimes face growing criticism as reforms unleash pent-up grievances and create space for organized opposition.",
            "key_manifestations": [
              "Formation of independent civic organizations in Eastern Europe",
              "Open revisiting of historical crimes under communism",
              "Democratic reform movements within communist parties",
              "Declining influence of hardliners in party hierarchies"
            ]
          },
          "1988": {
            "variance_explained": 4.5,
            "description": "Communist monopoly on power begins seriously eroding as alternative political forces emerge and gain legitimacy.",
            "key_manifestations": [
              "Rise of Solidarity in Poland as legal opposition",
              "Hungarian multi-party system emergence",
              "Significant leadership changes in communist parties",
              "Public protests calling for democratic reforms"
            ]
          },
          "1989": {
            "variance_explained": 7.8,
            "description": "Revolutionary collapse of communist regimes across Eastern Europe creates dramatic cascade effect, fundamentally challenging Soviet system legitimacy.",
            "key_manifestations": [
              "Fall of Berlin Wall in November",
              "Velvet Revolution in Czechoslovakia",
              "Romanian Revolution and execution of Ceaușescu",
              "Polish Solidarity-led government formation"
            ]
          },
          "1990": {
            "variance_explained": 8.6,
            "description": "Communist party loses monopoly on power within Soviet Union itself as multi-party elections occur and republican authority challenges central control.",
            "key_manifestations": [
              "Article 6 of Soviet Constitution abolished, ending Party's leading role",
              "Democratic elections across republics",
              "German reunification ending division of Europe",
              "Boris Yeltsin's election as Russian President outside Party control"
            ]
          },
          "1991": {
            "variance_explained": 10.2,
            "description": "Complete collapse of communist rule as failed August coup attempt triggers final dissolution of the Soviet system and independence of republics.",
            "key_manifestations": [
              "August coup attempt failure marking effective end of Soviet communism",
              "Ban of Communist Party activities across republics",
              "Removal of communist symbols from public spaces",
              "Final dissolution of the Soviet Union in December"
            ]
          }
        }
      }
    }
  };

const glasnostPreset: PresetConfig = {
  id: 'glasnost ',
  name: 'Glasnost Analysis',
  description: 'Developments in the Glasnost period (1983-1991)',
  parameters: {
    startYear: '1983',
    endYear: '1991',
    clusterStart: 1,
    clusterEnd: 5,
    periodicity: 1,
    context: 'Soviet Unions Collapse',
    model: 'o1-mini'
  },
  cachedResult: glasnostData
};

export default glasnostPreset; 