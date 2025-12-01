import { PresetConfig } from './types';

// Cold War analysis data moved directly into this file
const coldWarData = {
    "metadata": {
      "period": "1945-1991",
      "interval": "10 years",
      "cluster_range": "1-5",
      "measurement": "relative cultural variance explained (0-100)",
      "top_20_clusters": [
        "1_space_race_competition [↗] (12.5%)",
        "2_anti_communist_propaganda [↘] (8.3%)",
        "3_civil_rights_movement [↗] (7.8%)",
        "4_pop_culture_as_soft_power [↗] (6.9%)",
        "5_atomic_anxiety [→] (6.5%)",
        "6_counterculture_bohemianism [↗] (5.4%)",
        "7_nuclear_family_ideal [↘] (4.7%)",
        "8_environmentalism_emergence [↗] (4.2%)",
        "9_television_as_mass_media [→] (3.9%)",
        "10_feminist_movement [↗] (3.6%)",
        "11_consumerism_materialism [↗] (3.3%)",
        "12_art_movements_abstraction_pop [→] (3.0%)",
        "13_technological_innovation_computing [↗] (2.8%)",
        "14_environmentalism_rise [↗] (2.5%)",
        "15_sports_as_geopolitical_tool [↗] (2.3%)",
        "16_music_trends_jazz_rock [→] (2.1%)",
        "17_literature_of_dissent [↗] (1.9%)",
        "18_film_as_ideological_tool [→] (1.7%)",
        "19_globalization_international_trade [↗] (1.5%)",
        "20_religious_fundamentalism [↘] (1.2%)"
      ]
    },
    "clusters": {
      "1_space_race_competition": {
        "name": "Space Race Competition",
        "description": "The Space Race was a pivotal cultural eigencluster during the Cold War, symbolizing the technological and ideological competition between the United States and the Soviet Union. It influenced national identities, technological advancements, and inspired various forms of media and public perception.",
        "trajectory": {
          "1945": {
            "variance_explained": 6,
            "description": "Post-WWII era marks the beginning of the geopolitical tension that would escalate into the Space Race. Early developments set the foundation for future competition.",
            "key_manifestations": [
              "Truman Doctrine speech (1947)",
              "Formation of NASA (1958)",
              "Launch of Sputnik 1 (1957)",
              "Einstein's manifesto on nuclear disarmament (1949)"
            ]
          },
          "1955": {
            "variance_explained": 10,
            "description": "The Space Race gains momentum with significant Soviet achievements, increasing American efforts to compete in space technology and exploration.",
            "key_manifestations": [
              "Launch of Sputnik 2 (1957)",
              "Cambridge Five espionage revelations (1951-1955)",
              "American satellite proposals (1955)",
              "Publication of 'The Right Stuff' by Tom Wolfe (1960)"
            ]
          },
          "1965": {
            "variance_explained": 18,
            "description": "The peak of the Space Race with the Apollo missions, culminating in the moon landing, reinforcing national pride and technological prowess.",
            "key_manifestations": [
              "Apollo 11 Moon Landing (1969)",
              "Formation of NASA's Apollo program (1961)",
              "Publication of 'Silent Spring' by Rachel Carson (1962)",
              "Soviet Luna program achievements"
            ]
          },
          "1975": {
            "variance_explained": 9,
            "description": "Post-Apollo era sees a shift towards space cooperation, yet the legacy of the Space Race continues to influence international relations and technological development.",
            "key_manifestations": [
              "Apollo-Soyuz Test Project (1975)",
              "Introduction of the Space Shuttle program (1972)",
              "Launch of Voyager missions (1977)",
              "Publication of 'The Dark Side of the Moon' by Pink Floyd (1973)"
            ]
          },
          "1985": {
            "variance_explained": 12,
            "description": "The resurgence of space competition with the Strategic Defense Initiative and renewed technological advancements signal ongoing rivalry.",
            "key_manifestations": [
              "Strategic Defense Initiative announcements (1983)",
              "Launch of the Hubble Space Telescope (1990)",
              "Space Shuttle Challenger disaster (1986)",
              "Publication of 'Ender's Game' by Orson Scott Card (1985)"
            ]
          },
          "1991": {
            "variance_explained": 8,
            "description": "The end of the Cold War shifts the Space Race towards international collaboration and commercial space endeavors, marking the conclusion of an era.",
            "key_manifestations": [
              "Dissolution of the Soviet Union (1991)",
              "Launch of the Mir space station (1986-2001)",
              "International Space Station agreements (1993)",
              "Publication of '1991: The Year We Make Contact' by Jack McDevitt (1991)"
            ]
          }
        }
      },
      "2_anti_communist_propaganda": {
        "name": "Anti-Communist Propaganda",
        "description": "Anti-Communist propaganda was a dominant cultural force during the Cold War, shaping public opinion, influencing media, and reinforcing ideological divides between the East and West.",
        "trajectory": {
          "1945": {
            "variance_explained": 6,
            "description": "Beginning of the Cold War sees initial use of propaganda to consolidate anti-communist sentiments in the US and allied nations.",
            "key_manifestations": [
              "Publication of 'The Iron Curtain' by Winston Churchill (1946)",
              "Formation of the House Un-American Activities Committee (1938-1945)",
              "Leaflet drops in Eastern Europe (1945)",
              "Radio Free Europe broadcasts (1949)"
            ]
          },
          "1955": {
            "variance_explained": 6,
            "description": "Heightened anti-communist rhetoric during the McCarthy era, with widespread media campaigns and societal impact.",
            "key_manifestations": [
              "Hollywood blacklist (1950s)",
              "CIA cultural propaganda initiatives (1950s)",
              "Publication of 'Red Scare' literature",
              "Comic books featuring anti-communist themes"
            ]
          },
          "1965": {
            "variance_explained": 5,
            "description": "Anti-communist propaganda continues but begins to face challenges from internal dissent and global shifts in political landscapes.",
            "key_manifestations": [
              "Vietnam War media coverage (1960s)",
              "Publication of 'The American Way of Death' (1964)",
              "Rise of counterculture questioning government narratives",
              "Soviet propaganda responding to US efforts"
            ]
          },
          "1975": {
            "variance_explained": 4,
            "description": "Following détente, anti-communist propaganda lessens but remains a tool for maintaining ideological stances.",
            "key_manifestations": [
              "Media coverage of Afghanistan war (1979)",
              "Publication of 'The Closing of the American Mind' by Allan Bloom (1987)",
              "CIA’s involvement in cultural diplomacy",
              "Continuation of Cold War themed films"
            ]
          },
          "1985": {
            "variance_explained": 3.5,
            "description": "Reagan era reinvigorates anti-communist propaganda with new media strategies and a focus on Soviet policies.",
            "key_manifestations": [
              "Reagan’s 'Evil Empire' speech (1983)",
              "MTV anti-communist content (1980s)",
              "Publication of 'The Rise and Fall of the Soviet Empire' by Brian Crozier (1994)",
              "Films like 'Red Dawn' (1984)"
            ]
          },
          "1991": {
            "variance_explained": 2,
            "description": "With the collapse of the Soviet Union, anti-communist propaganda diminishes but leaves lasting impacts on cultural narratives.",
            "key_manifestations": [
              "Publication of 'Collapse' by Jared Diamond (2005)",
              "Post-Cold War media retrospectives",
              "Dissolution of propaganda-focused institutions",
              "Documentation of anti-communist movements in films and literature"
            ]
          }
        }
      },
      "3_civil_rights_movement": {
        "name": "Civil Rights Movement",
        "description": "The Civil Rights Movement emerged as a significant cultural eigencluster, advocating for racial equality and social justice, influencing legislation, cultural expressions, and international perceptions during the Cold War.",
        "trajectory": {
          "1945": {
            "variance_explained": 4,
            "description": "Post-war period sets the stage for civil rights activism, with African American veterans seeking equality and systemic changes.",
            "key_manifestations": [
              "Desegregation of the armed forces (1948)",
              "NAACP leadership under Walter Reuther",
              "Publication of 'The Negro Soldier' by the U.S. government (1944)",
              "Montgomery Bus Boycott beginnings"
            ]
          },
          "1955": {
            "variance_explained": 9,
            "description": "Heightened activism with landmark events such as the Montgomery Bus Boycott, significant legal battles, and increased national awareness.",
            "key_manifestations": [
              "Rosa Parks' refusal and Montgomery Bus Boycott (1955)",
              "Brown v. Board of Education Supreme Court decision (1954)",
              "Formation of SCLC by Martin Luther King Jr. (1957)",
              "Publication of 'Stride Toward Freedom' by Martin Luther King Jr. (1958)"
            ]
          },
          "1965": {
            "variance_explained": 14,
            "description": "The movement reaches its peak with major legislative achievements, nationwide protests, and global attention on racial justice.",
            "key_manifestations": [
              "Civil Rights Act of 1964 enforcement",
              "Selma to Montgomery marches (1965)",
              "Publication of 'I Have a Dream' speech (1963)",
              "Rise of Black Power movement"
            ]
          },
          "1975": {
            "variance_explained": 8,
            "description": "Post-Civil Rights era sees consolidation of achievements and ongoing struggles against systemic racism and inequality.",
            "key_manifestations": [
              "Implementation of affirmative action policies",
              "Publication of 'The Autobiography of Malcolm X' (1965)",
              "Rise of Black feminism",
              "Formation of the Congressional Black Caucus (1971)"
            ]
          },
          "1985": {
            "variance_explained": 5.5,
            "description": "Continued efforts towards equality with emerging focus on economic disparities and institutional reforms.",
            "key_manifestations": [
              "Revival of the Black Arts Movement",
              "Publication of 'Race Matters' by Cornel West (1994)",
              "Establishment of Black History Month programs",
              "Rise of hip-hop as a cultural expression of African American experience"
            ]
          },
          "1991": {
            "variance_explained": 3,
            "description": "Legacy of the Civil Rights Movement influences ongoing social justice initiatives and cultural narratives surrounding race.",
            "key_manifestations": [
              "Publication of 'The New Jim Crow' by Michelle Alexander (2010)",
              "Film 'Malcolm X' by Spike Lee (1992)",
              "Emergence of multiculturalism in American culture",
              "Continuation of advocacy organizations for racial equality"
            ]
          }
        }
      },
      "4_pop_culture_as_soft_power": {
        "name": "Pop Culture as Soft Power",
        "description": "Pop Culture served as a strategic tool of soft power during the Cold War, with the United States leveraging music, film, television, and consumer products to influence global perceptions and counter Soviet ideology.",
        "trajectory": {
          "1945": {
            "variance_explained": 5,
            "description": "Post-war America begins to harness pop culture to project an image of prosperity and freedom, countering Soviet narratives.",
            "key_manifestations": [
              "Rise of Hollywood's Golden Age",
              "Launch of television broadcasts (1948)",
              "Publication of 'Payola Scandal' in music industry",
              "Introduction of mass consumer goods like televisions and cars"
            ]
          },
          "1955": {
            "variance_explained": 8,
            "description": "Expansion of American pop culture internationally through cinema, music, and television, reinforcing democratic values.",
            "key_manifestations": [
              "Promotion of American films overseas",
              "Elvis Presley's rise to fame (1950s)",
              "Broadcasting of 'I Love Lucy' internationally",
              "Disney's global expansion"
            ]
          },
          "1965": {
            "variance_explained": 12,
            "description": "The cultural revolution amplifies America's soft power through influential music, counterculture movements, and global media presence.",
            "key_manifestations": [
              "The Beatles' first visit to the US (1964)",
              "Publication of 'Revolutionary Ideas' by Stuart Hall",
              "Rise of rock and roll as a global phenomenon",
              "Television coverage of events like Woodstock (1969)"
            ]
          },
          "1975": {
            "variance_explained": 7,
            "description": "Continuation of leveraging pop culture amidst political and economic challenges, with diversification of media and entertainment.",
            "key_manifestations": [
              "Rise of disco music",
              "Blockbuster films like 'Jaws' (1975)",
              "Introduction of cable television",
              "Global influence of American fashion trends"
            ]
          },
          "1985": {
            "variance_explained": 9,
            "description": "The 1980s see a surge in consumerist culture and the global proliferation of American pop icons, enhancing the nation's soft power.",
            "key_manifestations": [
              "MTV's global launch (1981)",
              "Michael Jackson's 'Thriller' album (1982)",
              "Rise of Hollywood blockbuster franchises",
              "Introduction of video games like 'Pac-Man' (1980)"
            ]
          },
          "1991": {
            "variance_explained": 6,
            "description": "Post-Cold War era shifts pop culture towards globalization and digital media, maintaining America's cultural influence in a changing world.",
            "key_manifestations": [
              "The rise of the internet and digital media",
              "Global dominance of Hollywood films",
              "Expansion of American fast-food chains worldwide",
              "Publication of 'The End of History' by Francis Fukuyama (1992)"
            ]
          }
        }
      },
      "5_atomic_anxiety": {
        "name": "Atomic Anxiety",
        "description": "Atomic Anxiety reflects the pervasive fear and cultural impact of nuclear weapons and potential annihilation, shaping art, literature, policy, and public consciousness throughout the Cold War.",
        "trajectory": {
          "1945": {
            "variance_explained": 5,
            "description": "The immediate aftermath of nuclear bombings on Hiroshima and Nagasaki engenders widespread fear and existential dread regarding nuclear warfare.",
            "key_manifestations": [
              "Publication of 'Hiroshima' by John Hersey (1946)",
              "Establishment of the Atomic Energy Commission (1946)",
              "Beginnings of the anti-nuclear movement",
              "Creation of fallout shelters"
            ]
          },
          "1955": {
            "variance_explained": 6.5,
            "description": "Heightened nuclear tensions during the Cold War lead to increased public anxiety and cultural expressions reflecting the fear of atomic conflict.",
            "key_manifestations": [
              "Knock Knock Who’s There? (1952 film)",
              "Publication of 'The Day the Earth Stood Still' (1951 film)",
              "Introduction of nuclear-themed episodes in popular TV shows",
              "Rise of nuclear disarmament protests"
            ]
          },
          "1965": {
            "variance_explained": 10,
            "description": "The Cuban Missile Crisis and ongoing arms race intensify Atomic Anxiety, embedding nuclear fear deeply into cultural narratives and societal behaviors.",
            "key_manifestations": [
              "Publication of 'Dr. Strangelove' (though released in 1964)",
              "Release of 'Fail Safe' (1964 film)",
              "Public exhibitions on the dangers of nuclear war",
              "Song 'Eve of Destruction' by Barry McGuire (1965)"
            ]
          },
          "1975": {
            "variance_explained": 7.5,
            "description": "Nuclear proliferation and arms control debates continue to fuel Atomic Anxiety, influencing media portrayals and public discourse.",
            "key_manifestations": [
              "Publication of 'The Limits to Growth' by the Club of Rome (1972)",
              "Release of 'The China Syndrome' (1979 film)",
              "Advancement of the Non-Proliferation Treaty (1970)",
              "Documentaries on nuclear testing impacts"
            ]
          },
          "1985": {
            "variance_explained": 7,
            "description": "The renewed arms race under Reagan exacerbates Atomic Anxiety, with heightened cultural focus on nuclear preparedness and apocalyptic themes.",
            "key_manifestations": [
              "Publication of 'The Day After' (1983 TV movie)",
              "Renewed nuclear arms treaties debates",
              "Rise of doomsday prepping culture",
              "Music and art reflecting Cold War fears"
            ]
          },
          "1991": {
            "variance_explained": 5,
            "description": "The dissolution of the Soviet Union reduces Atomic Anxiety, but legacy fears persist in cultural memory and ongoing non-proliferation efforts.",
            "key_manifestations": [
              "Reflection pieces on Cold War nuclear fears",
              "Books like 'Command and Control' by Eric Schlosser (2013)",
              "Memorials for nuclear disarmament",
              "Continued film and literature exploring nuclear themes"
            ]
          }
        }
      }
    }
  };

const coldWarPreset: PresetConfig = {
  id: 'cold-war',
  name: 'Cold War Analysis',
  description: 'Cultural analysis of the Cold War period (1945-1991)',
  startYear: '1945',
  endYear: '1991',
  clusterStart: 1,
  clusterEnd: 5,
  periodicity: 10,
  context: 'Focus on geopolitical, technological, and cultural developments during the Cold War period between the United States and Soviet Union.',
  model: 'o1-mini',
  cachedResult: coldWarData
};

export default coldWarPreset; 