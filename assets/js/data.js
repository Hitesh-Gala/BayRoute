/*
 * ============================================================
 *  PROJECT BAYROUTE — SITE CONTENT
 *  Edit this one file to change interviewees, bios and questions.
 * ============================================================
 *
 *  Photos: drop a JPG named after the person's id into
 *  assets/img/people/  (e.g. assets/img/people/doval.jpg).
 *  It appears automatically. No other change is needed.
 *
 *  Status values shown on each profile:
 *  "Proposed", "Invited", "Confirmed", "Interviewed"
 *
 *  Bios were drafted from public sources in October 2026.
 *  Please verify each one before the site is shared widely.
 */

window.BAYROUTE = {

  /* ---------- Communities (order = order on the page; "short" is the filter-button label) ---------- */
  categories: [
    { id: "joint", short: "Joint",     label: "Joint leadership",     blurb: "The officers charged with integrating India's three services." },
    { id: "army", short: "Army",      label: "Indian Army",          blurb: "Serving and former chiefs, commanders and soldier-scholars." },
    { id: "navy", short: "Navy",      label: "Indian Navy",          blurb: "Leaders and thinkers of India's maritime power." },
    { id: "airforce", short: "Air Force",  label: "Indian Air Force",     blurb: "Air power, air defence and the reach of the Air Force." },
    { id: "nscs", short: "NSCS & NSAB",      label: "NSCS and NSAB",        blurb: "Those who have run or advised India's national security apparatus." },
    { id: "strategic", short: "Strategic", label: "Strategic community",  blurb: "Scholars, historians, editors and technologists of Indian security." },
    { id: "diplomacy", short: "Diplomacy", label: "Diplomacy",            blurb: "Diplomats who have negotiated India's place in a contested world." },
    { id: "politics", short: "Politics",  label: "Parliament and politics", blurb: "Political leaders who have set out considered views on national security." }
  ],

  /* ---------- Part one: asked of every interviewee ---------- */
  core: {
    title: "Common questions",
    note: "Put to every interviewee, so that answers can be compared across services, institutions and generations.",
    questions: [
      "Looking ten to twenty years ahead, what will change most about how wars involving India are fought, and what will not change at all?",
      "Of the conflicts of the last five years (Ukraine, the wars in West Asia, Armenia–Azerbaijan and Operation Sindoor), which offers India the most important lessons? Which lessons do you fear we will draw wrongly?",
      "India faces two nuclear-armed neighbours that cooperate closely. How should that shape the way we think about deterrence, escalation and the risk of a two-front conflict?",
      "Cheap drones, loitering munitions and long-range precision weapons are changing the cost of attack and defence. How should India balance investment between large numbers of inexpensive systems and a smaller number of high-end platforms?",
      "How far should India go in delegating decisions to autonomous systems and artificial intelligence, in surveillance, targeting and the use of force? Who should set those limits?",
      "Can India's defence-industrial base (public sector, private industry and start-ups) sustain a long, high-intensity conflict? What single change would make the biggest difference?",
      "Which reforms in higher defence organisation, jointness and civil–military relations are most urgent for the wars you anticipate?",
      "In September 2026 the United States commissioned Project Meridian to map the future of warfare. If India were to commission its own study, what should it ask, and who should be in the room?",
      "What is the question about the future of war that India is not asking enough?"
    ]
  },

  /* ---------- Part two: one module per community ---------- */
  modules: {
    joint: { title: "Jointness and theatre commands", questions: [
      "How far has integration among the three services actually progressed, and where does resistance remain?",
      "What should theatre commands look like for India's northern, western and maritime frontiers?",
      "How should space, cyber, electronic warfare and special operations be organised: as separate commands, or woven into every theatre?",
      "What must change in joint planning, logistics and training to fight a multi-domain campaign?",
      "How should the role of the Chief of Defence Staff evolve in relation to the service chiefs and the Ministry of Defence?"
    ]},
    army: { title: "Land warfare", questions: [
      "What does the drone-saturated battlefield of Ukraine mean for land operations at high altitude along the Line of Actual Control?",
      "How should the Army balance its manpower-intensive posture against investment in technology, firepower and mobility?",
      "Are recent organisational changes the right response to the changed battlefield? What would you change?",
      "How should the Army approach counter-drone defence, electronic warfare and survivability for forces that can be seen from the air at all times?",
      "What do soldiers and junior leaders need to learn now that they did not need a decade ago?"
    ]},
    navy: { title: "The maritime domain", questions: [
      "How will the growing presence of Chinese naval and research vessels in the Indian Ocean shape India's maritime strategy?",
      "What is the right balance between carriers, submarines, surface combatants and uncrewed systems for the Navy of 2040?",
      "What does the use of uncrewed surface and underwater vessels in the Black Sea and the Red Sea teach India?",
      "How should India secure its sea lanes and energy supplies, given recent disruptions to shipping in West Asia?",
      "How should undersea domain awareness and the protection of seabed infrastructure such as cables and pipelines figure in India's planning?"
    ]},
    airforce: { title: "Air, space and air defence", questions: [
      "What did recent air campaigns, including Operation Sindoor, reveal about stand-off weapons, air defence and electronic warfare?",
      "How should the Air Force balance crewed fighters against drones, cruise and ballistic missiles, and loitering munitions?",
      "With squadron strength under pressure, how should India think about mass, attrition and the pace of indigenous production?",
      "How should India defend its airspace, airbases and critical infrastructure against swarms and saturation attacks?",
      "What role should space-based sensing and communications play in air operations, and who should own those capabilities?"
    ]},
    nscs: { title: "National security decision-making", questions: [
      "India has not published a national security strategy. Should it, and what would such a document need to say about future war?",
      "How are crisis decisions made in India today, and what would improve them under the pressure of a fast, technology-driven conflict?",
      "How should India manage escalation in conflicts that combine terrorism, conventional strikes and a nuclear backdrop?",
      "What should India do to protect power, finance, telecommunications and space assets against cyber and grey-zone attacks?",
      "How should intelligence, technology and industrial policy be brought together in national security planning?"
    ]},
    strategic: { title: "Strategy and ideas", questions: [
      "Which ideas from strategic thought, Indian or foreign, best explain the wars India is likely to face?",
      "Does India's deterrence rest more on denial or on punishment, and should that change?",
      "How should India read China's military modernisation and the lessons the PLA is drawing from recent wars?",
      "What role should think tanks, universities and industry play in shaping military thinking in India?",
      "Where are the biggest gaps in India's research and public debate on defence?"
    ]},
    diplomacy: { title: "Diplomacy and partnerships", questions: [
      "How should India balance strategic autonomy against its need for technology partnerships in defence?",
      "What do export controls and supply-chain dependencies, in semiconductors, engines and rare earths, mean for India's ability to fight?",
      "How should India engage in international discussions on autonomous weapons and military AI?",
      "Which partnerships will matter most to India's security in 2040, and what will they demand of India?",
      "How should defence diplomacy and arms exports fit into India's foreign policy?"
    ]},
    politics: { title: "Politics and public consent", questions: [
      "How should Parliament exercise oversight of defence preparedness and military operations?",
      "What share of national resources should go to defence, and how should spending be divided between people, platforms and research?",
      "How should a government communicate with citizens before, during and after a conflict, in an age of information warfare?",
      "What role should states and civil society play in civil defence and national resilience?",
      "How can India build a durable political consensus on long-term defence reform across electoral cycles?"
    ]}
  },

  /* ---------- Interviewees ----------
     id        short, lower-case, no spaces; also the photo file name
     rank      shown before the name (leave "" for none)
     name      full name, used for the monogram initials
     suffix    e.g. "(Retd)"
     role      one line, shown on the card
     category  one of the community ids above
     bio       paragraphs
     focus     why this conversation matters to BayRoute
     questions Part three, specific to this person
  */
  people: [

    /* ===== Joint leadership ===== */
    { id: "subramani", rank: "Gen", name: "NS Raja Subramani", suffix: "", category: "joint", status: "Proposed",
      role: "Chief of Defence Staff",
      bio: [
        "General Raja Subramani took over as India's third Chief of Defence Staff on 30 May 2026 and also serves as Secretary of the Department of Military Affairs. Commissioned into the Garhwal Rifles in 1985, he commanded a mountain division in Sikkim and a corps, served as General Officer Commanding-in-Chief of Central Command, and was Vice Chief of the Army Staff from July 2024 to July 2025.",
        "After retiring from the Army he was Military Adviser in the National Security Council Secretariat. He holds a master's degree from King's College London and an MPhil in defence studies from the University of Madras."
      ],
      focus: "As the officer now charged with integrating the three services, he can speak to how India's future wars are being planned for today, and what theatre commands must be ready to do.",
      questions: [
        "You came to this office from the National Security Council Secretariat. How does that vantage point shape your priorities for integration?",
        "What will a theatre commander need on the first day of a conflict that the services cannot yet provide?",
        "Where do you expect India's armed forces to be in 2035 that they are not today?"
      ]},

    { id: "chauhan", rank: "Gen", name: "Anil Chauhan", suffix: "(Retd)", category: "joint", status: "Proposed",
      role: "Chief of Defence Staff, 2022–26",
      bio: [
        "General Anil Chauhan was India's second Chief of Defence Staff from September 2022 to May 2026, also heading the Department of Military Affairs. His tenure spanned Operation Sindoor in May 2025 and a sustained push towards theatre commands and tri-service integration.",
        "Commissioned into the 11 Gorkha Rifles in 1981, he was Director General of Military Operations at the time of the 2019 Balakot strike, later commanded Eastern Command, and served as Military Adviser in the National Security Council Secretariat before being recalled as CDS."
      ],
      focus: "Few officers have watched India's recent crises and reforms from as close as he has. His reflections would anchor the study's account of what has changed since 2019.",
      questions: [
        "From Balakot in 2019 to Operation Sindoor in 2025, what changed most in how India planned and fought short, sharp conflicts?",
        "Which elements of integration did you push hardest for, and what remains unfinished?",
        "What advice would you give the officer who will command India's first theatre?"
      ]},

    /* ===== Indian Army ===== */
    { id: "seth", rank: "Gen", name: "Dhiraj Seth", suffix: "", category: "army", status: "Proposed",
      role: "Chief of the Army Staff",
      bio: [
        "General Dhiraj Seth became India's 31st Chief of the Army Staff on 30 June 2026. An alumnus of the National Defence Academy, he was commissioned into the Armoured Corps in December 1986.",
        "He has commanded the Sudarshan Chakra Corps, a strike formation, and two Army commands, South Western Command and Southern Command, and was Vice Chief of the Army Staff before taking over. He played a role in Operation Sindoor and has trained in France, the United States and at the National Defence College."
      ],
      focus: "An armoured officer leading the Army into an era of drones and precision fires, he is well placed to discuss how manoeuvre warfare must adapt.",
      questions: [
        "As an armoured officer, how do you see the future of tanks and mechanised forces on a battlefield watched constantly from the air?",
        "What are your priorities for the Army's capability development over your tenure?",
        "What did Operation Sindoor teach the Army about the western front?"
      ]},

    { id: "dwivedi", rank: "Gen", name: "Upendra Dwivedi", suffix: "(Retd)", category: "army", status: "Proposed",
      role: "Chief of the Army Staff, 2024–26",
      bio: [
        "General Upendra Dwivedi was India's 30th Chief of the Army Staff from June 2024 to June 2026 and led the Army through Operation Sindoor. Commissioned into the Jammu and Kashmir Rifles in December 1984, he commanded his battalion, an Assam Rifles sector and 9 Corps, served as Director General of Infantry, and was General Officer Commanding-in-Chief of Northern Command from 2022 to 2024.",
        "An alumnus of Sainik School Rewa, the National Defence College and the US Army War College, he has been a consistent advocate of bringing new technology into operations."
      ],
      focus: "He oversaw a significant reorganisation of the Army's fighting formations in the light of drone warfare, and can explain the thinking behind it.",
      questions: [
        "As Northern Army Commander and then Chief, what did the long stand-off along the Line of Actual Control teach you about the future of land warfare?",
        "In 2025 the Army announced new formations, including Rudra all-arms brigades and Bhairav light commando battalions. What problems were they designed to solve, and how should they evolve?",
        "What does a drone-saturated battlefield demand of the infantry soldier?"
      ]},

    { id: "naravane", rank: "Gen", name: "Manoj Mukund Naravane", suffix: "(Retd)", category: "army", status: "Proposed",
      role: "Chief of the Army Staff, 2019–22",
      bio: [
        "General Manoj Mukund Naravane was Chief of the Army Staff from December 2019 to April 2022, a period dominated by the 2020 crisis in eastern Ladakh and the clash at Galwan. After the death of General Bipin Rawat in December 2021 he also served as Chairman of the Chiefs of Staff Committee.",
        "He was earlier Vice Chief of the Army Staff and General Officer Commanding-in-Chief of Eastern Command. Since retiring he has written and spoken widely on leadership and national security."
      ],
      focus: "He commanded the Army during the most serious India–China military crisis in decades, which remains central to any account of India's future wars.",
      questions: [
        "What did the 2020 stand-off in eastern Ladakh reveal about India's readiness for a crisis with China?",
        "How should India think about military operations below the threshold of war along disputed borders?",
        "Looking back, which modernisation decision would you have made earlier?"
      ]},

    { id: "malik", rank: "Gen", name: "Ved Prakash Malik", suffix: "(Retd)", category: "army", status: "Proposed",
      role: "Chief of the Army Staff, 1997–2000",
      bio: [
        "General VP Malik was Chief of the Army Staff from 1997 to 2000 and Chairman of the Chiefs of Staff Committee, leading the Army through the Kargil war of 1999.",
        "In retirement he has written extensively on India's wars and on the relationship between military operations and diplomacy, including Kargil: From Surprise to Victory and India's Military Conflicts and Diplomacy."
      ],
      focus: "Kargil was India's first war fought under an overt nuclear shadow. His perspective links that experience to the limited conflicts India has fought since.",
      questions: [
        "Kargil was fought under a nuclear shadow and intense international scrutiny. Which of its lessons still hold, and which have expired?",
        "How has the relationship between military operations and diplomacy changed since 1999?",
        "What should today's commanders know about fighting a limited war that the textbooks do not teach?"
      ]},

    { id: "hooda", rank: "Lt Gen", name: "Deependra Singh Hooda", suffix: "(Retd)", category: "army", status: "Proposed",
      role: "Former GOC-in-C, Northern Command",
      bio: [
        "Lieutenant General DS Hooda commanded the Army's Northern Command from 2014 to 2016 and oversaw the cross-Line of Control strikes of September 2016. In 2019 he authored a national security strategy paper at the invitation of the Congress party.",
        "He is a prominent commentator on China, the Line of Actual Control, cyber security and military technology."
      ],
      focus: "His work on a national security strategy makes him a natural voice on how doctrine and institutions should keep pace with technology.",
      questions: [
        "Your 2019 national security strategy paper argued for a clearer statement of India's goals. What would you add to it today?",
        "How should operations in Jammu and Kashmir and along the Line of Actual Control adapt to drones and persistent surveillance?",
        "Where does India's military most need to invest in cyber and electronic warfare?"
      ]},

    { id: "shukla", rank: "Lt Gen", name: "Raj Shukla", suffix: "(Retd)", category: "army", status: "Proposed",
      role: "Former GOC-in-C, Army Training Command",
      bio: [
        "Lieutenant General Raj Shukla was commissioned into the Regiment of Artillery in 1982. He commanded an infantry division along the Line of Control in Kashmir and a corps on the western front, served as Commandant of the Army War College and as Director General of Perspective Planning, and retired as General Officer Commanding-in-Chief of the Army Training Command.",
        "He has been a Member of the Union Public Service Commission since 2022 and writes and speaks regularly on artificial intelligence, technology and the future of war."
      ],
      focus: "He has spent years forecasting the Army's future needs and thinking about AI in war, the core of BayRoute's enquiry.",
      questions: [
        "As Director General of Perspective Planning, how did you forecast the Army's needs twenty years out? What did you get right, and what did you miss?",
        "How should military training and education change for an age of artificial intelligence?",
        "What would it take for India to field AI-enabled systems both responsibly and at speed?"
      ]},

    { id: "panag", rank: "Lt Gen", name: "Harcharanjit Singh Panag", suffix: "(Retd)", category: "army", status: "Proposed",
      role: "Former GOC-in-C, Northern and Central Commands",
      bio: [
        "Lieutenant General HS Panag commanded the Army's Northern Command and later Central Command before retiring in 2009.",
        "In retirement he has become a prolific columnist on military affairs, writing frequently on reform, transformation and the conduct of operations."
      ],
      focus: "A persistent and candid advocate of military transformation, he brings a reformer's view that BayRoute needs alongside official perspectives.",
      questions: [
        "You have argued for deep transformation of the armed forces. What should come first?",
        "How should the Army restructure for a conflict defined by technology rather than numbers?",
        "What are the most common mistakes in how India assesses its own military performance?"
      ]},

    /* ===== Indian Navy ===== */
    { id: "swaminathan", rank: "Adm", name: "Krishna Swaminathan", suffix: "", category: "navy", status: "Proposed",
      role: "Chief of the Naval Staff",
      bio: [
        "Admiral Krishna Swaminathan became the 27th Chief of the Naval Staff on 31 May 2026. Commissioned in July 1987, he is a specialist in communications and electronic warfare.",
        "His sea commands include the missile vessels INS Vidyut and INS Vinash, the corvette INS Kulish, the destroyer INS Mysore and the aircraft carrier INS Vikramaditya. He has commanded the Western Fleet, served as Vice Chief of the Naval Staff, and was Flag Officer Commanding-in-Chief, Western Naval Command, before becoming Chief."
      ],
      focus: "An electronic warfare specialist now leading the Navy, he can speak to the contest for the electromagnetic spectrum at sea.",
      questions: [
        "How do you see the contest in the electromagnetic spectrum shaping war at sea?",
        "What place will uncrewed vessels and aircraft have in the Navy's fleet by 2040?",
        "How should the Navy prepare to protect Indian shipping and seafarers in distant waters?"
      ]},

    { id: "tripathi", rank: "Adm", name: "Dinesh Kumar Tripathi", suffix: "(Retd)", category: "navy", status: "Proposed",
      role: "Chief of the Naval Staff, 2024–26",
      bio: [
        "Admiral Dinesh Kumar Tripathi was the 26th Chief of the Naval Staff from April 2024 to May 2026, a tenure that included Operation Sindoor.",
        "He had earlier served as Vice Chief of the Naval Staff and as Flag Officer Commanding-in-Chief of the Western Naval Command, and retired after 41 years of service."
      ],
      focus: "He led the Navy through India's most recent conflict and can describe how maritime power contributed to deterrence.",
      questions: [
        "What role did the Navy play in shaping deterrence during Operation Sindoor, and what did that episode reveal?",
        "How should the Navy respond to the pace of Chinese naval expansion in the Indian Ocean?",
        "What should India's shipbuilding base look like to sustain a long conflict?"
      ]},

    { id: "harikumar", rank: "Adm", name: "R Hari Kumar", suffix: "(Retd)", category: "navy", status: "Proposed",
      role: "Chief of the Naval Staff, 2021–24",
      bio: [
        "Admiral R Hari Kumar was Chief of the Naval Staff from November 2021 to April 2024. Commissioned in 1983, he commanded the aircraft carrier INS Viraat, the destroyer INS Ranvir, the corvette INS Kora and INS Nishank.",
        "Before becoming Chief he was Chief of the Integrated Staff Committee at Headquarters Integrated Defence Staff, and then Flag Officer Commanding-in-Chief of the Western Naval Command."
      ],
      focus: "Having led both Integrated Defence Staff and the Navy, he can speak to jointness from the maritime side.",
      questions: [
        "Having led both Integrated Defence Staff and the Navy, where do you see the greatest friction in joint maritime operations?",
        "How should India think about aircraft carriers in an age of long-range anti-ship missiles?",
        "What does self-reliance in naval technology mean in practice, and where should India not try to go alone?"
      ]},

    { id: "arunprakash", rank: "Adm", name: "Arun Prakash", suffix: "(Retd)", category: "navy", status: "Proposed",
      role: "Chief of the Naval Staff, 2004–06",
      bio: [
        "Admiral Arun Prakash was Chief of the Naval Staff and Chairman of the Chiefs of Staff Committee from 2004 to 2006. A naval aviator, he was awarded the Vir Chakra in the 1971 war while flying with the Indian Air Force.",
        "Since retiring he has served on the National Security Advisory Board and written widely on maritime strategy, jointness and higher defence organisation."
      ],
      focus: "One of the most respected strategic voices from the Navy, he has argued for reform of higher defence organisation for two decades.",
      questions: [
        "You have long written on reforming higher defence organisation. How far have the reforms since 2019 gone, and what remains?",
        "How should India define its maritime interests in 2040, and how far from home should its Navy be prepared to fight?",
        "What lessons from 1971 still apply to joint operations today?"
      ]},

    { id: "udaybhaskar", rank: "Cmde", name: "C Uday Bhaskar", suffix: "(Retd)", category: "navy", status: "Proposed",
      role: "Strategic analyst; Society for Policy Studies",
      bio: [
        "Commodore C Uday Bhaskar is a former naval officer who heads the Society for Policy Studies in New Delhi. He previously led the National Maritime Foundation and served at the Institute for Defence Studies and Analyses.",
        "He comments widely on maritime security, nuclear issues and India's strategic choices."
      ],
      focus: "He bridges the naval service and the strategic community, and has written on nuclear and maritime questions for decades.",
      questions: [
        "How should India think about nuclear deterrence at sea as its submarine fleet grows?",
        "What would a coherent Indian maritime strategy look like in an era of contested sea lanes?",
        "How well does India's strategic community engage with its armed forces, and how could that improve?"
      ]},

    /* ===== Indian Air Force ===== */
    { id: "apsingh", rank: "ACM", name: "Amar Preet Singh", suffix: "", category: "airforce", status: "Proposed",
      role: "Chief of the Air Staff (until 31 October 2026)",
      bio: [
        "Air Chief Marshal AP Singh has been Chief of the Air Staff since September 2024 and led the Indian Air Force through Operation Sindoor. He superannuates on 31 October 2026.",
        "An experimental test pilot, he has been closely associated with the indigenous Tejas programme and has spoken publicly about the need for Indian industry to deliver aircraft and systems on time."
      ],
      focus: "He led the air campaign of India's most recent conflict and has been candid about the state of indigenous production.",
      questions: [
        "What did Operation Sindoor teach the Air Force about long-range strike, air defence and the electronic battle?",
        "You have been candid about delays in indigenous programmes. What would fix them?",
        "What should your successor prioritise for an Air Force that may have to fight on two fronts?"
      ]},

    { id: "dixit", rank: "Air Marshal", name: "Ashutosh Dixit", suffix: "", category: "airforce", status: "Proposed",
      role: "Vice Chief of the Air Staff; Chief of the Air Staff from 31 October 2026",
      bio: [
        "Air Marshal Ashutosh Dixit has been appointed India's 29th Chief of the Air Staff and takes over on 31 October 2026. Commissioned into the fighter stream in December 1986, he is an experimental test pilot and qualified flying instructor with more than 3,500 hours on aircraft including the Mirage 2000, Jaguar and Tejas.",
        "He has served as Chief of Integrated Defence Staff to the Chairman, Chiefs of Staff Committee, as Air Officer Commanding-in-Chief of Central Air Command, and as Vice Chief of the Air Staff. He took part in Operation Sindoor."
      ],
      focus: "As the incoming Chief, his priorities will shape the Air Force for the rest of the decade.",
      questions: [
        "What will be your first priorities as Chief of the Air Staff?",
        "As a test pilot, how do you see the relationship between the Air Force and Indian industry evolving?",
        "How should the Air Force bring drones and collaborative combat aircraft together with crewed fighters?"
      ]},

    { id: "dhanoa", rank: "ACM", name: "Birender Singh Dhanoa", suffix: "(Retd)", category: "airforce", status: "Proposed",
      role: "Chief of the Air Staff, 2016–19",
      bio: [
        "Air Chief Marshal BS Dhanoa was Chief of the Air Staff from December 2016 to September 2019 and led the Air Force during the Balakot strike of February 2019 and the aerial engagement that followed.",
        "During the 1999 Kargil war he commanded a fighter squadron that flew combat missions in the conflict."
      ],
      focus: "Balakot marked a turning point in India's willingness to use air power across the border; he commanded the Air Force at that moment.",
      questions: [
        "Balakot was the first use of air power across the border since 1971. What did it change in India's thinking about escalation?",
        "How did the experience of 2019 inform the conduct of operations in 2025?",
        "What should India do about the long-running shortfall in fighter squadrons?"
      ]},

    { id: "chaudhari", rank: "ACM", name: "Vivek Ram Chaudhari", suffix: "(Retd)", category: "airforce", status: "Proposed",
      role: "Chief of the Air Staff, 2021–24",
      bio: [
        "Air Chief Marshal VR Chaudhari was Chief of the Air Staff from September 2021 to September 2024, a period shaped by the military build-up along the northern borders after the 2020 crisis.",
        "A fighter pilot, he commanded the Western Air Command and served as Vice Chief of the Air Staff before becoming Chief."
      ],
      focus: "He led the Air Force through the long northern stand-off and can speak to air operations at high altitude and the growing role of space.",
      questions: [
        "How should the Air Force prepare for short, intense conflicts while retaining the capacity for a longer war?",
        "How should India organise its military space capabilities, and what role should the Air Force play?",
        "What did the years after 2020 teach the Air Force about operating at high altitude?"
      ]},

    { id: "arjunsubramaniam", rank: "AVM", name: "Arjun Subramaniam", suffix: "(Retd)", category: "airforce", status: "Proposed",
      role: "Military historian; former fighter pilot",
      bio: [
        "Air Vice Marshal Arjun Subramaniam is a former fighter pilot and one of India's leading military historians.",
        "His books India's Wars: A Military History, 1947–1971 and Full Spectrum: India's Wars, 1972–2020 are widely read accounts of the country's modern military experience. He writes and lectures on air power, joint operations and strategic culture."
      ],
      focus: "A historian's long view will help BayRoute separate genuine change from recurring patterns in India's way of war.",
      questions: [
        "Looking across India's wars since 1947, what continuities do you see in its way of war, and which may not survive new technology?",
        "How does India's strategic culture shape the way it adopts new military ideas?",
        "Which historical episode should every Indian planner study before the next conflict?"
      ]},

    /* ===== NSCS and NSAB ===== */
    { id: "doval", rank: "", name: "Ajit Doval", suffix: "", category: "nscs", status: "Proposed",
      role: "National Security Adviser",
      bio: [
        "Ajit Doval has been India's National Security Adviser since 2014 and is now in his third term, making him the longest-serving holder of the office. A 1968-batch Indian Police Service officer of the Kerala cadre, he spent more than three decades in intelligence and headed the Intelligence Bureau.",
        "He is India's Special Representative for the boundary talks with China and has been closely involved in India's major security decisions of the last decade."
      ],
      focus: "No one is closer to how India's national security decisions are made today.",
      questions: [
        "How should India's national security apparatus be organised for conflicts that move at machine speed?",
        "How do you see the balance between deterrence, diplomacy and covert capability in India's approach to its adversaries?",
        "What is the most important national security capability India must build over the next decade?"
      ]},

    { id: "shivshankarmenon", rank: "", name: "Shivshankar Menon", suffix: "", category: "nscs", status: "Proposed",
      role: "National Security Adviser, 2010–14",
      bio: [
        "Shivshankar Menon was National Security Adviser from 2010 to 2014 and Foreign Secretary from 2006 to 2009. He served as Ambassador to China and Israel and as High Commissioner to Pakistan and Sri Lanka.",
        "His books Choices: Inside the Making of India's Foreign Policy and India and Asian Geopolitics are among the most closely read accounts of Indian strategic decision-making."
      ],
      focus: "His account of how decisions are made under pressure is directly relevant to crises that will unfold faster than ever.",
      questions: [
        "In Choices you described decisions made under uncertainty. How should the process change when crises unfold faster than governments can deliberate?",
        "How should India think about its security in an Asia shaped by rivalry between the United States and China?",
        "What did your years as National Security Adviser teach you about the limits of military force?"
      ]},

    { id: "alokjoshi", rank: "", name: "Alok Joshi", suffix: "", category: "nscs", status: "Proposed",
      role: "Chairman, National Security Advisory Board",
      bio: [
        "Alok Joshi was appointed Chairman of the National Security Advisory Board when the government reconstituted it in April 2025.",
        "A former Indian Police Service officer, he served as Secretary of the Research and Analysis Wing and later headed the National Technical Research Organisation."
      ],
      focus: "He chairs the body meant to give the government independent, long-range advice on security.",
      questions: [
        "Which questions about future warfare should the National Security Advisory Board be helping the government think through?",
        "How is technical intelligence changing what India can know about its adversaries?",
        "How should India organise to counter threats that blend terrorism, technology and state sponsorship?"
      ]},

    { id: "pankajsaran", rank: "", name: "Pankaj Saran", suffix: "", category: "nscs", status: "Proposed",
      role: "Deputy National Security Adviser, 2018–21",
      bio: [
        "Pankaj Saran was Deputy National Security Adviser from 2018 to 2021. A career diplomat, he served as Ambassador to Russia and High Commissioner to Bangladesh, and worked in the Prime Minister's Office.",
        "He is a member of the National Security Advisory Board and convenor of NatStrat, a centre for research on strategic and security issues."
      ],
      focus: "He combines experience of the NSCS with deep knowledge of Russia, still a major source of India's military equipment.",
      questions: [
        "What does Russia's war in Ukraine tell India about the durability of its defence relationship with Moscow?",
        "How should India's immediate neighbourhood figure in its thinking about future conflict?",
        "What should the National Security Council Secretariat do differently to anticipate technological surprise?"
      ]},

    { id: "arvindgupta", rank: "Dr", name: "Arvind Gupta", suffix: "", category: "nscs", status: "Proposed",
      role: "Deputy National Security Adviser, 2014–17",
      bio: [
        "Arvind Gupta was Deputy National Security Adviser from 2014 to 2017 and earlier Director General of the Institute for Defence Studies and Analyses. A former Indian Foreign Service officer, he later became Director of the Vivekananda International Foundation.",
        "His book How India Manages Its National Security examines the institutions and processes behind India's security policy."
      ],
      focus: "He has studied, and worked inside, the machinery of Indian national security.",
      questions: [
        "Your book examined how India manages its national security. Which institution most needs reform for the next decade?",
        "How should India organise against technology-driven threats such as cyber attacks and disinformation?",
        "How can strategic research better inform government decision-making?"
      ]},

    /* ===== Strategic community ===== */
    { id: "rajamohan", rank: "", name: "C Raja Mohan", suffix: "", category: "strategic", status: "Proposed",
      role: "Scholar of foreign and security policy",
      bio: [
        "C Raja Mohan is among India's best-known writers on foreign and security policy. He was the founding Director of Carnegie India, has served on the National Security Advisory Board, and is a long-standing columnist for The Indian Express.",
        "His books include Crossing the Rubicon and Samudra Manthan: Sino-Indian Rivalry in the Indo-Pacific."
      ],
      focus: "He has written for decades on how shifts in the balance of power shape India's choices.",
      questions: [
        "How will the balance of power in the Indo-Pacific shape the wars India must prepare for?",
        "What does strategic autonomy mean when military technology is increasingly developed and shared within coalitions?",
        "Is India's maritime strategy keeping pace with its interests?"
      ]},

    { id: "srinathraghavan", rank: "", name: "Srinath Raghavan", suffix: "", category: "strategic", status: "Proposed",
      role: "Historian; Ashoka University",
      bio: [
        "Srinath Raghavan is a historian of modern India's wars and strategy and a professor at Ashoka University. A former Army officer, he is the author of War and Peace in Modern India, 1971: A Global History of the Creation of Bangladesh, and India's War, a history of the Second World War in South Asia."
      ],
      focus: "His work on how Indian leaders have used force for limited political ends offers a vital historical lens.",
      questions: [
        "Your work shows Indian leaders using force for limited political ends. Does that tradition fit the wars of the future?",
        "What can India's history teach about mobilising a society and an economy for a long war?",
        "How should historians and the armed forces work together?"
      ]},

    { id: "happymonjacob", rank: "", name: "Happymon Jacob", suffix: "", category: "strategic", status: "Proposed",
      role: "Jawaharlal Nehru University; CSDR",
      bio: [
        "Happymon Jacob teaches at Jawaharlal Nehru University and founded the Council for Strategic and Defense Research, a think tank in New Delhi.",
        "His book Line on Fire examines ceasefire violations and escalation along the India–Pakistan Line of Control. He writes widely on national security and the neighbourhood."
      ],
      focus: "A leading scholar of India–Pakistan escalation, he can test how new technologies alter old dynamics.",
      questions: [
        "How do new technologies change escalation dynamics between India and Pakistan?",
        "After Operation Sindoor, where does the threshold for military action between the two countries now lie?",
        "What should a new generation of Indian strategic thinkers focus on?"
      ]},

    { id: "rajeswari", rank: "Dr", name: "Rajeswari Pillai Rajagopalan", suffix: "", category: "strategic", status: "Proposed",
      role: "Scholar of space and security",
      bio: [
        "Rajeswari Pillai Rajagopalan is a Resident Senior Fellow at the Australian Strategic Policy Institute. She previously directed the Centre for Security, Strategy and Technology at the Observer Research Foundation, and served in India's National Security Council Secretariat from 2003 to 2007.",
        "She was technical adviser to the UN Group of Governmental Experts on the prevention of an arms race in outer space, and has written and edited books on space policy, nuclear security and future warfare."
      ],
      focus: "Space is fast becoming a warfighting domain, and she is among the foremost Indian voices on its security.",
      questions: [
        "How is outer space becoming a warfighting domain, and what does that mean for India's satellites and the services that depend on them?",
        "What should India's military space policy and doctrine prioritise?",
        "Can norms or arms control limit competition in space, and should India lead on them?"
      ]},

    { id: "sawhney", rank: "", name: "Pravin Sawhney", suffix: "", category: "strategic", status: "Proposed",
      role: "Editor, FORCE",
      bio: [
        "Pravin Sawhney is a former Army officer and editor of FORCE, a national security magazine.",
        "His book The Last War argues that artificial intelligence and autonomous systems will decide any future conflict between India and China. He co-authored Dragon on Our Doorstep with Ghazala Wahab."
      ],
      focus: "A sharp critic of conventional thinking, he offers the kind of challenge a study like BayRoute should invite.",
      questions: [
        "You have argued that AI will decide a future India–China war. What would India need to change today to be ready?",
        "Which current defence investments do you believe are mistaken?",
        "How should India think about a battlefield decided by data, networks and autonomy?"
      ]},

    { id: "satheeshreddy", rank: "Dr", name: "G Satheesh Reddy", suffix: "", category: "strategic", status: "Proposed",
      role: "Chairman, DRDO, 2018–22",
      bio: [
        "Dr G Satheesh Reddy was Secretary of the Department of Defence Research and Development and Chairman of the Defence Research and Development Organisation from 2018 to 2022, a period that included the Mission Shakti anti-satellite test of 2019.",
        "A specialist in missiles and avionics, he later served as Scientific Adviser to the Raksha Mantri."
      ],
      focus: "He brings the perspective of India's defence science establishment, essential to any honest account of future capability.",
      questions: [
        "Which emerging technologies should India's defence research establishment prioritise for the next two decades?",
        "How can government laboratories, private companies and start-ups work together faster?",
        "What did Mission Shakti demonstrate, and what should India's next steps in space security be?"
      ]},

    /* ===== Diplomacy ===== */
    { id: "shyamsaran", rank: "", name: "Shyam Saran", suffix: "", category: "diplomacy", status: "Proposed",
      role: "Foreign Secretary, 2004–06",
      bio: [
        "Shyam Saran was Foreign Secretary from 2004 to 2006 and later the Prime Minister's special envoy for the India–US civil nuclear agreement and for climate change. He chaired the National Security Advisory Board from 2013 to 2015.",
        "His books include How India Sees the World and How China Sees India and the World."
      ],
      focus: "He has negotiated for India on technology and security and has written closely on China's worldview.",
      questions: [
        "How should India read China's strategic intentions over the next two decades?",
        "What did the India–US nuclear negotiations teach about bargaining for technology?",
        "How can diplomacy help prevent, or limit, future conflict?"
      ]},

    { id: "gokhale", rank: "", name: "Vijay Gokhale", suffix: "", category: "diplomacy", status: "Proposed",
      role: "Foreign Secretary, 2018–20",
      bio: [
        "Vijay Gokhale was Foreign Secretary from 2018 to 2020 and Ambassador to China from 2016 to 2017. A China specialist, he has written several books on the country, including The Long Game: How the Chinese Negotiate with India and After Tiananmen: The Rise of China."
      ],
      focus: "Few Indians understand how Beijing negotiates and reasons as well as he does.",
      questions: [
        "How is China's military leadership reading the lessons of recent wars, and what does that mean for India?",
        "How should India negotiate with China while preparing for the possibility of conflict?",
        "What would a stable military balance along the Himalaya look like?"
      ]},

    { id: "nirupamarao", rank: "", name: "Nirupama Rao", suffix: "", category: "diplomacy", status: "Proposed",
      role: "Foreign Secretary, 2009–11",
      bio: [
        "Nirupama Rao was Foreign Secretary from 2009 to 2011 and served as India's Ambassador to the United States and China and High Commissioner to Sri Lanka.",
        "Her book The Fractured Himalaya: India, Tibet, China 1949–1962 examines the origins of the India–China boundary dispute."
      ],
      focus: "Her history of the road to 1962 is a reminder of how misperception can lead to war.",
      questions: [
        "What does the history of 1949–1962 teach about how misperception leads to war?",
        "How should India engage the United States as both a partner and an unpredictable power?",
        "What role should Sri Lanka and the wider neighbourhood play in India's maritime security?"
      ]},

    { id: "bambawale", rank: "", name: "Gautam Bambawale", suffix: "", category: "diplomacy", status: "Proposed",
      role: "Ambassador to China, 2017–18",
      bio: [
        "Gautam Bambawale served as India's Ambassador to China from 2017 to 2018, and earlier as High Commissioner to Pakistan and Ambassador to Bhutan.",
        "He comments regularly on China and the region."
      ],
      focus: "Having served in Beijing, Islamabad and Thimphu, he has seen India's most sensitive frontiers from all three capitals.",
      questions: [
        "Having served in Beijing and Islamabad, how do you assess the depth of China–Pakistan military collaboration?",
        "What does Bhutan's position mean for India's security along the northern borders?",
        "What should India's red lines be in its relationship with China?"
      ]},

    { id: "shringla", rank: "", name: "Harsh Vardhan Shringla", suffix: "", category: "diplomacy", status: "Proposed",
      role: "Foreign Secretary, 2020–22",
      bio: [
        "Harsh Vardhan Shringla was Foreign Secretary from 2020 to 2022, after serving as Ambassador to the United States and High Commissioner to Bangladesh.",
        "He later coordinated India's G20 presidency and was nominated to the Rajya Sabha in 2025."
      ],
      focus: "His experience in Washington and with the G20 bears on the technology partnerships that will shape India's military future.",
      questions: [
        "How should India manage defence-technology cooperation with the United States amid shifting American politics?",
        "What can India's G20 experience teach about building coalitions on emerging technologies?",
        "How should India's eastern neighbourhood figure in its security planning?"
      ]},

    /* ===== Parliament and politics ===== */
    { id: "rajnath", rank: "", name: "Rajnath Singh", suffix: "", category: "politics", status: "Proposed",
      role: "Raksha Mantri",
      bio: [
        "Rajnath Singh has been India's Defence Minister (Raksha Mantri) since 2019. He was previously Union Home Minister, Chief Minister of Uttar Pradesh and national president of the Bharatiya Janata Party, and represents Lucknow in the Lok Sabha.",
        "As Defence Minister he has championed self-reliance in defence production and the growth of defence exports."
      ],
      focus: "The minister responsible for India's armed forces and defence industry sets the political direction for everything BayRoute studies.",
      questions: [
        "How should India's defence budget and acquisition system adapt to technologies that change every few years?",
        "What is your vision for India's defence industry, including private companies and start-ups, by 2040?",
        "How should the government decide what India must build at home and what it can buy?"
      ]},

    { id: "jaishankar", rank: "Dr", name: "S Jaishankar", suffix: "", category: "politics", status: "Proposed",
      role: "External Affairs Minister",
      bio: [
        "Dr S Jaishankar has been External Affairs Minister since 2019, after serving as Foreign Secretary from 2015 to 2018 and as Ambassador to the United States and China.",
        "He is the author of The India Way: Strategies for an Uncertain World and Why Bharat Matters."
      ],
      focus: "He has articulated, more fully than any recent minister, how India should navigate a fragmenting world.",
      questions: [
        "In an uncertain world, how should India's foreign policy prepare the ground for its military security?",
        "How should India approach partnerships on critical and emerging technologies?",
        "What does strategic autonomy mean when supply chains and technology are used as weapons?"
      ]},

    { id: "tharoor", rank: "Dr", name: "Shashi Tharoor", suffix: "", category: "politics", status: "Proposed",
      role: "Chair, Parliamentary Committee on External Affairs",
      bio: [
        "Shashi Tharoor has represented Thiruvananthapuram in the Lok Sabha since 2009 and chairs the Parliamentary Standing Committee on External Affairs. He is a former Minister of State for External Affairs and a former United Nations Under-Secretary-General.",
        "After Operation Sindoor in 2025, he led one of the all-party delegations that briefed foreign governments on India's position."
      ],
      focus: "He speaks to how India's security choices are understood at home, in Parliament and abroad.",
      questions: [
        "How should Parliament engage with questions of war, technology and national security?",
        "What did your delegation's outreach after Operation Sindoor reveal about how the world sees India's use of force?",
        "How should India explain its security choices to international audiences?"
      ]},

    { id: "tewari", rank: "", name: "Manish Tewari", suffix: "", category: "politics", status: "Proposed",
      role: "Member of Parliament; author",
      bio: [
        "Manish Tewari is a Member of Parliament from Chandigarh and a former Union Minister for Information and Broadcasting.",
        "His book 10 Flashpoints; 20 Years examines the national security crises that shaped India in the first two decades of this century."
      ],
      focus: "He has thought carefully, as a legislator, about how India handles national security crises.",
      questions: [
        "Your book examined the crises of the last two decades. Which flashpoint of the next two worries you most?",
        "Should India have a statutory framework for national security decision-making and parliamentary oversight?",
        "How should India counter information warfare without weakening democratic freedoms?"
      ]},

    { id: "panda", rank: "", name: "Baijayant Panda", suffix: "", category: "politics", status: "Proposed",
      role: "Member of Parliament; BJP Vice-President",
      bio: [
        "Baijayant 'Jay' Panda is a national Vice-President of the Bharatiya Janata Party and represents Kendrapara in the Lok Sabha.",
        "After Operation Sindoor in 2025, he led one of the all-party delegations that briefed foreign governments. He writes and speaks frequently on foreign policy and security."
      ],
      focus: "He brings the view of a governing-party legislator engaged in explaining India's security choices abroad.",
      questions: [
        "What did your delegation's conversations abroad after Operation Sindoor reveal about international expectations of India?",
        "How can India build a cross-party consensus on defence reform?",
        "How should political leaders think about risk in an era of rapid military escalation?"
      ]}
  ]
};
