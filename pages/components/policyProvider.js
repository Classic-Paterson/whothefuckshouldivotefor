import React from "react";
//let policiesjson = require('./policiesjson.json');

const initialState = {
  Parties: [
    {
      PartyTitle: "Labour Party",
      PartyText:
        "The New Zealand Labour Party (Rōpū Reipa o Aotearoa) currently leads the government. It is a centre-left political party, which describes its founding principle as democratic socialism. Labour formed in 1916 out of various socialist parties and trade unions and is the country's oldest political party still in existence. Labour has been in government six times and had ten leaders become prime ministers.",
      PartyImage: "/images/parties-Labour-Party.jpg",
      PartyId: 1,
    },
    {
      PartyTitle: "National Party",
      PartyText:
        "The New Zealand National Party (Rōpū Nāhinara) is currently the main opposition party in parliament. A centre-right party, National tends to be economically liberal and socially conservative, promoting individual freedom, personal responsibility and competitive enterprise. National formed in 1936 as a combination of the Reform and United parties to oppose the growing labour movement. It has ...",
      PartyImage: "/images/parties-National-Party.jpg",
      PartyId: 2,
    },
    {
      PartyTitle: "Advance New Zealand Party",
      PartyText:
        "The Advance New Zealand Party was recently established by Jami-Lee Ross, former National MP and currently an independent MP for Botany. Ross describes the party as an attempt to represent middle-ground voters. It is particularly focussed on electoral reform and anti-corruption policies. Advance recently joined with the unregistered New Zealand Public Party, whose founder, Billy Te Kahika, has previously claimed that the Covid-19 pandemic was planned by the United Nations, and opposes 5G, 1080, fluoridation of water, and vaccination.",
      PartyImage: "/images/parties-Advance-New-Zealand.jpg",
      PartyId: 3,
    },
    {
      PartyTitle: "ACT Party",
      PartyText:
        "The Advance New Zealand Party was recently established by Jami-Lee Ross, former National MP and currently an independent MP for Botany. Ross describes the party as an attempt to represent middle-ground voters. It is particularly focussed on electoral reform and anti-corruption policies. Advance recently joined with the unregistered New Zealand Public Party, whose founder, Billy Te Kahika, has previously claimed that the Covid-19 pandemic was planned by the United Nations, and opposes 5G, 1080, fluoridation of water, and vaccination.",
      PartyImage: "/images/parties-ACT-Party.jpg",
      PartyId: 4,
    },
    {
      PartyTitle: "Aotearoa Legalise Cannabis",
      PartyText:
        "The Aotearoa Legalise Cannabis Party is a single-issue party dedicated to the legalisation of marijuana for medical, recreational, and industrial use. It has contested every election and by-election since it was founded in 1996. Although it has never been in parliament, a number of its candidates have gone on to become MPs or mayors after leaving the party, including mayor of Invercargill Tim Shadbolt and former Green Party MPs Metiria Turei and Nándor Tánczos.",
      PartyImage: "/images/parties-Aotearoa-Legalise-Cannabis.jpg",
      PartyId: 5,
    },
    {
      PartyTitle: "Green Party",
      PartyText:
        "The Green Party of Aotearoa New Zealand (Te Rōpu Kākāriki o Aotearoa, Niu Tīreni) is a left-wing party focused on environmental and social justice issues and honouring Te Tiriti o Waitangi. It currently supports the government through a confidence and supply agreement, and has three ministers outside of cabinet. The Green Party formed in 1990 from the Values Party and first entered Parliament in 1996 as a part of the Alliance. It stood candidates independently at the 1999 election, and supported the fifth Labour government from 1999 to 2002 and 2005 to 2008.",
      PartyImage: "/images/parties-Green-Party.jpg",
      PartyId: 6,
    },
    {
      PartyTitle: "Heartland New Zealand",
      PartyText:
        "Heartland New Zealand is a centre-right party that aims to represent rural communities and agriculture. It opposes current environmental protection policies which it says are too restrictive on farmers, though it does have alternative climate and environmental policies. Former Franklin District mayor Mark Ball leads the party and is contesting the Port Waikato electorate. Formed and registered in 2020, this will be Heartland’s first election.",
      PartyImage: "/images/parties-Heartland-New-Zealand.jpg",
      PartyId: 7,
    },
    {
      PartyTitle: "Māori Party",
      PartyText:
        "The Māori Party (Te Pāti Māori) is a Māori-led and Māori-focussed party currently outside of parliament. It was formed in 2004 in a split from the Labour Party following the passing of the controversial Foreshore and Seabed Act. The party supported the fifth National Government from 2008, holding a number of cabinet portfolios, until its departure from parliament at the 2017 election. The party aims to uphold te Tiriti o Waitangi, achieve mana motuhake (self-determination) for whānau, hapū and iwi, and represent Māori with an independent voice.",
      PartyImage: "/images/parties-Māori-Party.jpg",
      PartyId: 8,
    },
    {
      PartyTitle: "New Conservative",
      PartyText:
        "The New Conservative Party is a Christian-conservative nationalist party. It was founded in 2011 as the Conservative Party but rebranded after the 2017 election. The party is economically right-wing and socially conservative and has campaigned on specific issues such as abortion and same-sex marriage. The party has never been in parliament but had two candidates elected to Auckland’s Upper Harbour Local Board in 2013.",
      PartyImage: "/images/parties-New-Conservative.jpg",
      PartyId: 9,
    },
    {
      PartyTitle: "NZ First",
      PartyText:
        "New Zealand First (Aotearoa Tuatahi) is a nationalist populist party currently in government with the Labour Party. NZ First was formed in 1993 after Winston Peters resigned from the National Party. The party has been in government twice, once with National and once with Labour as part of the current government. It also had a confidence and supply agreement with Labour after the 2005 election. With the exception of two terms, leader Winston Peters has been in parliament since 1979.",
      PartyImage: "/images/parties-NZ-First.jpg",
      PartyId: 10,
    },
    {
      PartyTitle: "One Party",
      PartyText:
        "The One Party is a Christian fundamentalist party. It describes itself as the country’s only Christian political party and is founded on the idea of uniting all New Zealand Christians behind it. It is generally socially conservative and economically right-wing. It also emphasises honouring Te Tiriti o Waitangi and protecting the rights and tikanga of tangata whenua. It was created in 2019 and 2020 will be its first election.",
      PartyImage: "/images/parties-One-Party.jpg",
      PartyId: 11,
    },
    {
      PartyTitle: "Outdoors Party",
      PartyText:
        "The New Zealand Outdoors Party is a conservationist party focused on protecting natural heritage and recreational access to the outdoors. It advocates small government and self-sufficiency and has campaigned on reducing tourist numbers and opposing 5G and the use of 1080. It was launched in 2015 and contested the 2017 election but failed to gain any seats.",
      PartyImage: "/images/parties-Outdoors-Party.jpg",
      PartyId: 12,
    },
    {
      PartyTitle: "Social Credit",
      PartyText:
        "The New Zealand Democractic Party for Social Credit is a centre-left party that promotes the creation of what it calls a social credit economy, where individuals are put in more direct control of the financial system. It is not currently in parliament. Formed in 1953, Social Credit is NZ’s oldest minor party and from the 1950s to 1980s was the third largest party in NZ, winning 20 percent of votes at the 1981 election. In the 1990s it joined the Alliance and later the Progressive Party before becoming independent again after the 2002 election. Social Credit won seats in parliament four times as an independent party, and twice as part of Alliance.",
      PartyImage: "/images/parties-Social-Credit.jpg",
      PartyId: 13,
    },
    {
      PartyTitle: "Sustainable New Zealand",
      PartyText:
        "The Sustainable New Zealand Party is an environmentalist party that describes itself as neither left nor right wing. It was founded in 2019 by former Green Party candidate Vernon Tava out of concern at the lack of an environmental party open to working with right-wing parties in government. The party describes its values as environmental, economic, and social sustainability.",
      PartyImage: "/images/parties-Sustainable-New-Zealand.jpg",
      PartyId: 14,
    },
    {
      PartyTitle: "TEA Party",
      PartyText:
        "The New Zealand TEA Party describes itself as socially democratic, culturally diversified and fiscally conservative. TEA stands for Taxpayers and Entrepreneurs Alliance. The party is focused on supporting workers and small-to-medium businesses, as well as what it calls quality migration. It also promotes international cooperation, seeking to encourage foreign trade, investment, education and tourism in New Zealand. This will be the first election it contests.",
      PartyImage: "/images/parties-TEA-Party.jpg",
      PartyId: 15,
    },
    {
      PartyTitle: "The Opportunities Party",
      PartyText:
        "The Opportunities Party is a centrist party that advocates evidence-based policy, and presents itself as an alternative to the two major parties on that basis. Many of TOP’s policies are environmentally focussed and the party has pushed for a universal basic income. TOP was founded by businessman Gareth Morgan to contest the 2017 election but failed to gain any seats. It is now led by Geoff Simmons, an economist and former employee of Morgan’s personal charitable foundation.",
      PartyImage: "/images/parties-The-Opportunities-Party.jpg",
      PartyId: 16,
    },
    {
      PartyTitle: "Vision NZ",
      PartyText:
        "Vision New Zealand is a conservative Christian fundamentalist party. The party has expressed hard-right views on immigration, homosexuality, and abortion. It is led by Hannah Tamaki, wife of Destiny Church leader Brian Tamaki. Brian Tamaki established a forerunner party, Destiny New Zealand party, in 2003 which has since disbanded. Vision NZ was registered in 2019 to contest the 2020 election.",
      PartyImage: "/images/parties-Vision-NZ.jpg",
      PartyId: 17,
    },
  ],
  Policies: [
    {
        "PartyId": 2,
        "PolicyTitle": "Replace the RMA with separate laws for environmental standards and urban planning",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 4
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace the RMA with a new Urban Development Act",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 5
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 6
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 7
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Require Māori water rights to be addressed in resource management processes",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 8
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Change planning rules to make it easier to build and upgrade wind energy generation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 9
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund infrastructure to improve urban water quality and supply",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 10
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Update government guidance on urban design",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 11
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Strengthen planning requirements for new urban fringe developments",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 12
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require new buildings to recycle greywater",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 13
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Promote food growing in towns and cities",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 14
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Protect productive food-growing land from urban sprawl",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 15
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Replace the RMA with three separate laws for urban development, rural areas and oceans",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 16
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 17
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish a fund for climate change adaptation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 18
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 19
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Encourage greater cooperation between councils on building consents",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 20
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Replace RMA with two separate laws",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 21
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to fast-track transport infrastructure projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 22
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Restrict conversion of productive farmland into forestry",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 23
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue Wellington rail upgrades",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 25
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a rail link to Auckland airport from Puhinui and eventually extend this to Onehunga",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 26
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a fourth main rail line in Auckland",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 27
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build bus rapid transit from Onehunga to Auckland CBD",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 28
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a north-west bus rapid transit corridor in Auckland",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 29
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ensure Reeves Road flyover is built as part of the Eastern Busway",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 30
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fully fund the second Mt Victoria Tunnel and Ruahine Street and Wellington Road widening",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 31
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fund new trains for Wellington's metro system",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 32
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support bus rapid transit or trackless trams in Wellington over light rail",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 33
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Investigate building a new rail line from Southdown to Avondale",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 34
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for Auckland ferry services",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 35
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for cycle lanes, buses, and trains",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 36
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand rapid bus and train services in major cities",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 37
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create safe walking and biking routes for every school",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 38
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund regional rail and safe cycling infrastructure\n",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 39
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require buses and trains to be accessible",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 40
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to fund improvements to transport infrastructure",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 41
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue Wellington rail upgrades",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 42
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Electrify and double-track the rail line from Waikanae to Ōtaki",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 43
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fund new trains for Wellington's metro system",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 44
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support bus rapid transit or trackless trams in Wellington over light rail",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 45
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a rail link to Auckland airport from Puhinui and eventually extend this to Onehunga",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 46
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a fourth main rail line in Auckland",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 47
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a road and rail tunnel under Auckland harbour",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 48
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Investigate building a new rail line from Southdown to Avondale",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 49
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Electrify the rail line from Pukekohe to Pōkeno",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 50
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend commuter rail to Huapai",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 51
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for cycle lanes, buses, and trains",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 52
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand and upgrade intercity and regional rail",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 53
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand rapid bus and train services in major cities",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 54
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund regional rail and safe cycling infrastructure\n",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 55
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Underground state highway 1 through Te Aro",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 56
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fully fund the Basin Reserve road upgrade",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 57
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fully fund the second Mt Victoria Tunnel and Ruahine Street and Wellington Road widening",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 58
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a second Terrace Tunnel",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 59
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a road from Grenada to Seaview",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 60
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Upgrade sections of SH2 in the Hutt Valley",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 61
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a four-lane expressway between Christchurch and Ashburton",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 62
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a motorway from Belfast to Pegasus",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 63
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend the Waikato expressway from Cambridge to Piarere",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 64
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build the East West Link in Auckland",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 65
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a road and rail tunnel under Auckland harbour",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 66
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build a four-lane expressway network connecting Whangārei, Auckland, Hamilton and Tauranga",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 67
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fund $300 million of minor road improvements",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 68
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fund various road improvements in the Wairarapa",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 69
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build the Palmerston North ring road",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 70
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend the Kāpiti expressway",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 71
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Build an expressway between Ōmokoroa and Katikati and a bypass at Katikati",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 72
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Upgrade the road between Pōkeno to Mangatarata",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 73
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support increases to roadside drug testing",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 74
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurance status to be displayed vehicles",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 75
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Upgrade three one lane bridges in Coromandel",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 76
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand electric vehicle charging stations",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 77
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Set fuel efficiency standards for cars and subsidise clean ones",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 78
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create incentives for heavy vehicles to use zero emissions fuels",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 79
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to fund improvements to transport infrastructure",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 80
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue encouraging people to buy electric vehicles",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 81
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue Tauranga Northern Link",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 82
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue upgrading roads in Canterbury",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 83
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Tighten emissions standards for newly imported vehicles",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 84
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Abolish the fringe benefit tax on electric vehicles",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 85
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow councils to introduce congestion charging",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 87
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Review regulations that prioritise private cars",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 88
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Fund new transport infrastructure through increased crown entity borrowing",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 91
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 92
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Repeal the Auckland regional fuel tax and pause any fuel tax increases for three years",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 93
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Use tolls to fund some new roads",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 94
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for Auckland local board priority projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 95
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace petrol taxes with a road pricing system",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 97
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Establish an independent infrastructure corporation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 98
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to fast-track transport infrastructure projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 99
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Stop oil and gas extraction within five years and decommission sites by 2030",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 100
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Fund Māori community energy projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 101
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Develop a national Māori strategy for renewable energy and clean technology",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 102
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Stop issuing coal mining permits and phase out industrial coal burning by 2030",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 103
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to fund new energy projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 105
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue investigating clean energy projects, including pumped hydro",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 106
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to replace coal heaters with clean energy in schools and hospitals",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 107
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Use emissions trading scheme revenue on energy efficiency improvements and insulation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 108
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Repeal the ban on oil and gas exploration",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 109
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Allow waste to be burned for electricity generation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 110
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Consent a transmission line between Manapouri power station and Tiwai Point",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 111
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create a plan to provide training for new clean energy jobs",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 112
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ban new industrial coal boilers",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 113
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Replace industrial coal and gas tech with clean alternatives by 2030 and 2035",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 114
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Triple support for businesses to replace coal and gas with clean alternatives",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 115
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Change planning rules to make it easier to build and upgrade wind energy generation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 116
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ban new fossil fuel electricity generation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 117
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform building code to improve energy efficiency, warmth, dryness and accessibility",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 118
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create a temporary two-year subsidy for specific energy efficiency upgrades for houses",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 119
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Change cost sharing of electricity network upgrades to encourage transition to clean energy",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 120
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require lines companies to cooperate and consider distributed electricity generation and storage",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 121
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow individual power meters to be used for power sharing and community energy projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 122
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Bring forward the target for 100 percent renewable electricity from 2035 to 2030",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 123
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Install solar power on all state houses",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 124
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Provide homeowners grants for half the cost of installing solar panels",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 125
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Provide funding for local renewable energy projects",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 126
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Give every household five free energy efficient LED light bulbs",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 127
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 128
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 129
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Stop issuing permits for onshore fossil fuel extraction",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 130
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Introduce mandatory energy efficiency ratings for buildings",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 131
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand electric vehicle charging stations",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 132
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Work towards ending fossil fuel subsidies",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 133
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Investigate using pumped hydro",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 134
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Work with businesses and iwi to develop wind and geothermal generation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 135
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Fund businesses to improve their use of digital technology and cloud computing apps",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 140
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase funding for coding training",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 141
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 142
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Tax multinational tech companies",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 143
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Tax digital advertising revenue",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 144
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase digital accessibility",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 145
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Commit to open data",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 146
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Limit complaints about online harm to people under 18",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 147
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to implement plans for construction sector transformation",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 148
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue programme to reduce carbon emissions from construction",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 149
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform building code to improve energy efficiency, warmth, dryness and accessibility",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 150
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Introduce mandatory energy efficiency ratings for buildings",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 151
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require all new houses and buildings to be accessible",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 152
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue programme to reduce carbon emissions from construction",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 153
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Support the sustainable building materials industry",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 154
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 155
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish a commission of inquiry into the construction industry",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 156
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require construction and building warranty insurance for residential builds",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 157
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Ensure schools place more emphasis on careers in construction",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 158
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase licencing and qualification requirements for the construction industry",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 159
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Reform building code standards to support prefabrication and modular housing",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 160
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Review how health and safety legislation is implemented",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 161
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Encourage greater cooperation between councils on building consents",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 162
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Improve the building code over time",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 163
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace council building inspections with compulsory building insurance",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 164
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Automatically approve building materials accredited in certain countries",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 165
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Require a quarter of housing funding to go to Māori workers and organisations",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 169
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
        "PolicyImage": "/images/topic-transport-and-infrastructure.jpg",
        "PolicyId": 170
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require 50 percent representation of women on state sector boards",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 175
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Select infrastructure projects based on their public business case",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 179
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 180
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Strengthen the Productivity Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 181
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 182
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 183
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an office for rainbow communities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 184
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 185
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 186
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 187
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 188
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend the living wage beyond the core public sector",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 189
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 190
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Educate institutions about rainbow issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 191
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 192
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require equal gender representation in government appointments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 193
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Set employment and equity standards for government contracts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 194
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce public sector salaries",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 195
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Establish an independent infrastructure corporation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 196
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish the Human Rights Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 197
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 198
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 199
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 200
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurers to decide on claims within six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 201
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurance status to be displayed vehicles",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 202
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 203
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for community law centres",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 204
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 205
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Create a written constitution",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 211
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 212
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Introduce civics education in schools",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 213
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Investigate models of deliberative democracy",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 214
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 215
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Lower the voting age to 16",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 226
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 227
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 228
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 229
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 230
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 231
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 232
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase transparency of political lobbying",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 233
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Entrench Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 234
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make it easier to establish Māori wards for local elections",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 235
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 236
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make the trade agreement process more transparent and democratic",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 237
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 238
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Preserve local democracy in health services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 239
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Involve young people in policy decisions that affect them",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 240
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform local elections processes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 241
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make no new regulations for 18 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 242
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Repeal two regulations for every new one made",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 243
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 244
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 245
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 246
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 247
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 248
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 249
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 250
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 251
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 252
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 253
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 254
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require regular de-escalation training for police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 255
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 263
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand partnerships between police and mental health workers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 264
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 265
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 266
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 267
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 268
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support increases to roadside drug testing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 269
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 270
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase police in rural areas",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 271
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make applications for protection and parenting orders free",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 277
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 278
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund violence prevention education and early intervention programmes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 279
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 280
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 281
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund culturally specific responses to family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 282
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 283
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 284
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund family violence experts in courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 285
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 286
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 287
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 288
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase funding for agencies dealing with family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 289
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 290
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 291
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 292
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 293
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 295
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 296
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 297
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 298
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 299
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace council building inspections with compulsory building insurance",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 300
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 301
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 302
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for Auckland local board priority projects",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 303
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 304
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Resource regional councils to improve water quality",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 305
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Cooperate with councils on waste issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 306
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Support local councils to fund rainwater tanks",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 307
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Restrict conversion of productive farmland into forestry",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 308
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 309
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish a fund for climate change adaptation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 310
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Improve the power of local councils to improve public health",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 311
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow councils to introduce congestion charging",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 312
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 313
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Encourage greater cooperation between councils on building consents",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 314
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 315
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 316
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase the number of alcohol and drug courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 317
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Repeal the three strikes law",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 318
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase funding for restorative justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 319
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Make it easier for defendants to get bail",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 320
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Make it easier for long-term prisoners to get parole",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 321
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 322
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Fund alternatives to prison",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 323
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 324
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 325
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 326
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 327
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 328
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 329
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 330
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 331
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase sentences for gang members",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 332
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make parole conditions stricter for gang members",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 333
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang insignia in public",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 334
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 335
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Cancel the target to reduce the prison population",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 336
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 337
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require that all prisoners are in work, education, or training",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 338
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 339
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 340
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 341
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 342
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Notify local schools if a sex offender is living in the area",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 343
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Aim to reduce the prison population",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 344
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to increase access to criminal legal services\n",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 345
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 346
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to use progressive model of policing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 347
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 369
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 370
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 371
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 372
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 373
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 374
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 375
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 376
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand specialist courts for young people throughout the country",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 377
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 378
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Review the use of remand in youth detention facilities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 379
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ban detention of young people with adults",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 380
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Extend the three-strikes law to include burglary",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 381
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Support a referendum on the legalisation of cannabis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 382
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove regulations limiting volunteering in prisons",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 383
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 384
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 386
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 392
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Relax firearms laws",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 393
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 394
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 395
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 396
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 397
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require 50 percent representation of women on state sector boards",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 402
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Select infrastructure projects based on their public business case",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 406
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 407
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Strengthen the Productivity Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 408
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 409
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 410
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an office for rainbow communities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 411
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 412
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 413
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 414
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 415
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend the living wage beyond the core public sector",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 416
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 417
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Educate institutions about rainbow issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 418
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 419
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require equal gender representation in government appointments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 420
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Set employment and equity standards for government contracts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 421
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce public sector salaries",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 422
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Establish an independent infrastructure corporation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 423
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish the Human Rights Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 424
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 425
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 426
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 427
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurers to decide on claims within six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 428
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurance status to be displayed vehicles",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 429
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 430
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for community law centres",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 431
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 432
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Create a written constitution",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 438
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 439
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Introduce civics education in schools",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 440
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Investigate models of deliberative democracy",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 441
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 442
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Lower the voting age to 16",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 453
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 454
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 455
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 456
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 457
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 458
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 459
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase transparency of political lobbying",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 460
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Entrench Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 461
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make it easier to establish Māori wards for local elections",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 462
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 463
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make the trade agreement process more transparent and democratic",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 464
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 465
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Preserve local democracy in health services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 466
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Involve young people in policy decisions that affect them",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 467
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform local elections processes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 468
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make no new regulations for 18 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 469
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Repeal two regulations for every new one made",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 470
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 471
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 472
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 473
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 474
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 475
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 476
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 477
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 478
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 479
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 480
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 481
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require regular de-escalation training for police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 482
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 490
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand partnerships between police and mental health workers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 491
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 492
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 493
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 494
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 495
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support increases to roadside drug testing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 496
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 497
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase police in rural areas",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 498
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make applications for protection and parenting orders free",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 504
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 505
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund violence prevention education and early intervention programmes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 506
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 507
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 508
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund culturally specific responses to family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 509
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 510
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 511
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund family violence experts in courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 512
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 513
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 514
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 515
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase funding for agencies dealing with family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 516
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 517
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 518
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 519
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 520
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 522
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 523
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 524
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 525
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 526
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace council building inspections with compulsory building insurance",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 527
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 528
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 529
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for Auckland local board priority projects",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 530
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 531
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Resource regional councils to improve water quality",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 532
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Cooperate with councils on waste issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 533
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Support local councils to fund rainwater tanks",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 534
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Restrict conversion of productive farmland into forestry",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 535
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 536
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish a fund for climate change adaptation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 537
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Improve the power of local councils to improve public health",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 538
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow councils to introduce congestion charging",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 539
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 540
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Encourage greater cooperation between councils on building consents",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 541
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 542
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 543
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase the number of alcohol and drug courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 544
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Repeal the three strikes law",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 545
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase funding for restorative justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 546
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Make it easier for defendants to get bail",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 547
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Make it easier for long-term prisoners to get parole",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 548
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 549
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Fund alternatives to prison",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 550
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 551
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 552
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 553
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 554
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 555
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 556
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 557
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 558
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase sentences for gang members",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 559
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make parole conditions stricter for gang members",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 560
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang insignia in public",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 561
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 562
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Cancel the target to reduce the prison population",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 563
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 564
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require that all prisoners are in work, education, or training",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 565
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 566
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 567
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 568
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 569
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Notify local schools if a sex offender is living in the area",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 570
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Aim to reduce the prison population",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 571
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to increase access to criminal legal services\n",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 572
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 573
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to use progressive model of policing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 574
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 596
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 597
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 598
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 599
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 600
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 601
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 602
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 603
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand specialist courts for young people throughout the country",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 604
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 605
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Review the use of remand in youth detention facilities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 606
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ban detention of young people with adults",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 607
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Extend the three-strikes law to include burglary",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 608
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Support a referendum on the legalisation of cannabis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 609
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove regulations limiting volunteering in prisons",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 610
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 611
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 613
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 619
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Relax firearms laws",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 620
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 621
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 622
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 623
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 624
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require 50 percent representation of women on state sector boards",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 630
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Select infrastructure projects based on their public business case",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 634
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 635
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Strengthen the Productivity Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 636
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 637
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 638
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an office for rainbow communities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 639
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 640
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 641
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 642
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 643
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend the living wage beyond the core public sector",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 644
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 645
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Educate institutions about rainbow issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 646
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 647
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require equal gender representation in government appointments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 648
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Set employment and equity standards for government contracts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 649
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce public sector salaries",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 650
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Establish an independent infrastructure corporation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 651
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish the Human Rights Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 652
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 653
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 654
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 655
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurers to decide on claims within six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 656
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurance status to be displayed vehicles",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 657
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 658
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for community law centres",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 659
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 660
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Create a written constitution",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 666
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 667
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Introduce civics education in schools",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 668
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Investigate models of deliberative democracy",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 669
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 670
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Lower the voting age to 16",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 681
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 682
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 683
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 684
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 685
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 686
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 687
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase transparency of political lobbying",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 688
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Entrench Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 689
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make it easier to establish Māori wards for local elections",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 690
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 691
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make the trade agreement process more transparent and democratic",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 692
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 693
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Preserve local democracy in health services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 694
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Involve young people in policy decisions that affect them",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 695
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform local elections processes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 696
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make no new regulations for 18 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 697
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Repeal two regulations for every new one made",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 698
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 699
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 700
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 701
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 702
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 703
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 704
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 705
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 706
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 707
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 708
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 709
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require regular de-escalation training for police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 710
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 718
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand partnerships between police and mental health workers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 719
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 720
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 721
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 722
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 723
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support increases to roadside drug testing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 724
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 725
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase police in rural areas",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 726
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make applications for protection and parenting orders free",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 732
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 733
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund violence prevention education and early intervention programmes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 734
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 735
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 736
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund culturally specific responses to family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 737
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 738
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 739
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund family violence experts in courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 740
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 741
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 742
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 743
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase funding for agencies dealing with family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 744
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 745
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 746
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 747
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 748
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 750
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 751
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 752
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 753
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 754
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace council building inspections with compulsory building insurance",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 755
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 756
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 757
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for Auckland local board priority projects",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 758
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 759
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Resource regional councils to improve water quality",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 760
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Cooperate with councils on waste issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 761
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Support local councils to fund rainwater tanks",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 762
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Restrict conversion of productive farmland into forestry",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 763
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 764
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish a fund for climate change adaptation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 765
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Improve the power of local councils to improve public health",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 766
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow councils to introduce congestion charging",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 767
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 768
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Encourage greater cooperation between councils on building consents",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 769
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 770
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 771
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase the number of alcohol and drug courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 772
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Repeal the three strikes law",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 773
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Increase funding for restorative justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 774
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Make it easier for defendants to get bail",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 775
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Make it easier for long-term prisoners to get parole",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 776
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 777
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Fund alternatives to prison",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 778
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 779
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 780
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 781
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 782
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 783
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 784
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 785
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 786
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase sentences for gang members",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 787
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make parole conditions stricter for gang members",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 788
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang insignia in public",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 789
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 790
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Cancel the target to reduce the prison population",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 791
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 792
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require that all prisoners are in work, education, or training",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 793
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 794
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 795
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 796
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 797
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Notify local schools if a sex offender is living in the area",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 798
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Aim to reduce the prison population",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 799
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to increase access to criminal legal services\n",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 800
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 801
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to use progressive model of policing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 802
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 824
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 825
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 826
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 827
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 828
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 829
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 830
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 831
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand specialist courts for young people throughout the country",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 832
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 833
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Review the use of remand in youth detention facilities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 834
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ban detention of young people with adults",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 835
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Extend the three-strikes law to include burglary",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 836
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Support a referendum on the legalisation of cannabis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 837
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove regulations limiting volunteering in prisons",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 838
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 839
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 841
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 847
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Relax firearms laws",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 848
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 849
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 850
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 851
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 852
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require 50 percent representation of women on state sector boards",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 858
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Select infrastructure projects based on their public business case",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 862
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 863
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Strengthen the Productivity Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 864
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 865
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 866
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an office for rainbow communities",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 867
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 868
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 869
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 870
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Create an independent victims commissioner",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 871
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend the living wage beyond the core public sector",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 872
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 873
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Educate institutions about rainbow issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 874
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 875
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require equal gender representation in government appointments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 876
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Set employment and equity standards for government contracts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 877
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce public sector salaries",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 878
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Establish an independent infrastructure corporation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 879
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish the Human Rights Commission",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 880
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 881
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 882
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Adopt a social investment approach to criminal justice",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 883
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurers to decide on claims within six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 884
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Require insurance status to be displayed vehicles",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 885
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Extend court sitting hours",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 886
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for community law centres",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 887
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Extend legal aid",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 888
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Create a written constitution",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 894
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 895
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Introduce civics education in schools",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 896
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Investigate models of deliberative democracy",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 897
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 898
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Lower the voting age to 16",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 909
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow all people in prison to vote",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 910
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 911
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 912
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 913
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 914
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 915
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase transparency of political lobbying",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 916
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Entrench Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 917
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make it easier to establish Māori wards for local elections",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 918
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform the Official Information Act",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 919
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make the trade agreement process more transparent and democratic",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 920
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 921
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Preserve local democracy in health services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 922
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Involve young people in policy decisions that affect them",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 923
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Reform local elections processes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 924
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Make no new regulations for 18 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 925
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Repeal two regulations for every new one made",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 926
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 927
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 928
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Abolish Māori seats in parliament",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 929
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 930
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 931
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 932
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 933
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 934
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 935
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 936
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Oppose further arming of police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 937
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Require regular de-escalation training for police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 938
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Ban gang members from holding a firearms licence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 946
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand partnerships between police and mental health workers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 947
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Transfer firearms administration from the police to a new authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 948
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Create a dedicated gang unit in the police",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 949
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 950
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Provide funding for people released from prison to move to a new location",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 951
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Support increases to roadside drug testing",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 952
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 953
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase police in rural areas",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 954
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Make applications for protection and parenting orders free",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 960
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 961
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund violence prevention education and early intervention programmes",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 962
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 963
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 964
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund culturally specific responses to family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 965
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 966
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 967
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Fund family violence experts in courts",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 968
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 969
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 970
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 971
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Increase funding for agencies dealing with family violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 972
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 973
    },
    {
        "PartyId": 1,
        "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 974
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 975
    },
    {
        "PartyId": 8,
        "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 976
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 978
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 979
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 980
    },
    {
        "PartyId": 16,
        "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 981
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 982
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Replace council building inspections with compulsory building insurance",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 983
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 984
    },
    {
        "PartyId": 4,
        "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 985
    },
    {
        "PartyId": 2,
        "PolicyTitle": "Increase funding for Auckland local board priority projects",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 986
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 987
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Resource regional councils to improve water quality",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 988
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Cooperate with councils on waste issues",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 989
    },
    {
        "PartyId": 6,
        "PolicyTitle": "Support local councils to fund rainwater tanks",
        "PolicyImage": "/images/topic-law-justice-and-government.jpg",
        "PolicyId": 990
    },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Restrict conversion of productive farmland into forestry",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 991
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 992
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish a fund for climate change adaptation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 993
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Improve the power of local councils to improve public health",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 994
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow councils to introduce congestion charging",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 995
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 996
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Encourage greater cooperation between councils on building consents",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 997
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 998
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 999
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase the number of alcohol and drug courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1000
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Repeal the three strikes law",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1001
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase funding for restorative justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1002
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for defendants to get bail",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1003
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for long-term prisoners to get parole",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1004
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1005
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Fund alternatives to prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1006
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1007
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1008
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1009
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1010
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1011
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1012
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1013
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1014
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase sentences for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1015
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make parole conditions stricter for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1016
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang insignia in public",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1017
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1018
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Cancel the target to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1019
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1020
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require that all prisoners are in work, education, or training",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1021
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1022
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1023
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1024
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1025
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Notify local schools if a sex offender is living in the area",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1026
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Aim to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1027
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to increase access to criminal legal services\n",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1028
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1029
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use progressive model of policing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1030
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1052
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1053
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1054
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1055
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1056
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1057
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1058
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1059
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand specialist courts for young people throughout the country",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1060
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1061
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Review the use of remand in youth detention facilities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1062
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ban detention of young people with adults",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1063
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Extend the three-strikes law to include burglary",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1064
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Support a referendum on the legalisation of cannabis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1065
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove regulations limiting volunteering in prisons",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1066
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1067
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1069
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1075
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Relax firearms laws",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1076
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1077
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1078
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1079
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1080
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require 50 percent representation of women on state sector boards",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1086
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Select infrastructure projects based on their public business case",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1090
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1091
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Strengthen the Productivity Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1092
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1093
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1094
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an office for rainbow communities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1095
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1096
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1097
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1098
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1099
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend the living wage beyond the core public sector",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1100
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1101
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Educate institutions about rainbow issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1102
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1103
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require equal gender representation in government appointments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1104
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Set employment and equity standards for government contracts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1105
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce public sector salaries",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1106
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Establish an independent infrastructure corporation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1107
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish the Human Rights Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1108
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1109
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1110
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1111
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurers to decide on claims within six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1112
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurance status to be displayed vehicles",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1113
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1114
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for community law centres",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1115
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1116
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Create a written constitution",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1122
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1123
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Introduce civics education in schools",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1124
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Investigate models of deliberative democracy",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1125
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1126
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Lower the voting age to 16",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1137
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1138
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1139
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1140
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1141
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1142
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1143
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase transparency of political lobbying",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1144
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Entrench Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1145
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make it easier to establish Māori wards for local elections",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1146
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1147
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make the trade agreement process more transparent and democratic",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1148
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1149
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Preserve local democracy in health services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1150
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Involve young people in policy decisions that affect them",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1151
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform local elections processes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1152
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make no new regulations for 18 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1153
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Repeal two regulations for every new one made",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1154
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1155
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1156
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1157
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1158
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1159
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1160
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1161
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1162
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1163
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1164
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1165
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require regular de-escalation training for police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1166
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1174
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand partnerships between police and mental health workers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1175
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1176
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1177
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1178
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1179
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Support increases to roadside drug testing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1180
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1181
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase police in rural areas",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1182
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make applications for protection and parenting orders free",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1188
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1189
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund violence prevention education and early intervention programmes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1190
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1191
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1192
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund culturally specific responses to family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1193
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1194
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1195
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund family violence experts in courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1196
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1197
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1198
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1199
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase funding for agencies dealing with family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1200
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1201
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1202
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1203
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1204
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1206
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1207
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1208
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1209
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1210
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace council building inspections with compulsory building insurance",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1211
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1212
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1213
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for Auckland local board priority projects",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1214
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1215
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Resource regional councils to improve water quality",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1216
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Cooperate with councils on waste issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1217
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Support local councils to fund rainwater tanks",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1218
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Restrict conversion of productive farmland into forestry",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1219
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1220
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish a fund for climate change adaptation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1221
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Improve the power of local councils to improve public health",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1222
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow councils to introduce congestion charging",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1223
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1224
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Encourage greater cooperation between councils on building consents",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1225
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1226
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1227
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase the number of alcohol and drug courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1228
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Repeal the three strikes law",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1229
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase funding for restorative justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1230
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for defendants to get bail",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1231
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for long-term prisoners to get parole",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1232
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1233
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Fund alternatives to prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1234
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1235
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1236
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1237
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1238
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1239
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1240
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1241
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1242
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase sentences for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1243
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make parole conditions stricter for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1244
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang insignia in public",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1245
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1246
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Cancel the target to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1247
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1248
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require that all prisoners are in work, education, or training",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1249
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1250
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1251
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1252
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1253
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Notify local schools if a sex offender is living in the area",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1254
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Aim to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1255
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to increase access to criminal legal services\n",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1256
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1257
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use progressive model of policing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1258
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1280
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1281
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1282
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1283
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1284
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1285
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1286
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1287
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand specialist courts for young people throughout the country",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1288
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1289
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Review the use of remand in youth detention facilities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1290
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ban detention of young people with adults",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1291
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Extend the three-strikes law to include burglary",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1292
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Support a referendum on the legalisation of cannabis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1293
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove regulations limiting volunteering in prisons",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1294
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1295
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1297
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1303
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Relax firearms laws",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1304
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1305
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1306
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1307
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1308
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require 50 percent representation of women on state sector boards",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1314
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Select infrastructure projects based on their public business case",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1318
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1319
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Strengthen the Productivity Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1320
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1321
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1322
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an office for rainbow communities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1323
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1324
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1325
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1326
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1327
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend the living wage beyond the core public sector",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1328
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1329
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Educate institutions about rainbow issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1330
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1331
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require equal gender representation in government appointments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1332
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Set employment and equity standards for government contracts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1333
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce public sector salaries",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1334
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Establish an independent infrastructure corporation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1335
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish the Human Rights Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1336
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1337
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1338
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1339
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurers to decide on claims within six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1340
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurance status to be displayed vehicles",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1341
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1342
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for community law centres",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1343
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1344
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Create a written constitution",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1350
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1351
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Introduce civics education in schools",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1352
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Investigate models of deliberative democracy",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1353
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1354
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Lower the voting age to 16",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1365
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1366
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1367
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1368
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1369
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1370
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1371
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase transparency of political lobbying",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1372
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Entrench Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1373
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make it easier to establish Māori wards for local elections",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1374
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1375
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make the trade agreement process more transparent and democratic",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1376
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1377
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Preserve local democracy in health services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1378
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Involve young people in policy decisions that affect them",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1379
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform local elections processes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1380
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make no new regulations for 18 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1381
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Repeal two regulations for every new one made",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1382
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1383
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1384
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1385
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1386
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1387
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1388
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1389
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1390
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1391
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1392
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1393
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require regular de-escalation training for police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1394
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1402
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand partnerships between police and mental health workers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1403
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1404
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1405
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1406
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1407
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Support increases to roadside drug testing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1408
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1409
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase police in rural areas",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1410
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make applications for protection and parenting orders free",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1416
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1417
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund violence prevention education and early intervention programmes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1418
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1419
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1420
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund culturally specific responses to family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1421
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1422
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1423
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund family violence experts in courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1424
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1425
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1426
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1427
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase funding for agencies dealing with family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1428
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1429
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1430
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1431
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1432
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1434
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1435
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1436
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1437
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1438
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace council building inspections with compulsory building insurance",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1439
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1440
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1441
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for Auckland local board priority projects",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1442
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1443
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Resource regional councils to improve water quality",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1444
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Cooperate with councils on waste issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1445
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Support local councils to fund rainwater tanks",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1446
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Restrict conversion of productive farmland into forestry",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1447
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1448
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish a fund for climate change adaptation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1449
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Improve the power of local councils to improve public health",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1450
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow councils to introduce congestion charging",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1451
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1452
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Encourage greater cooperation between councils on building consents",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1453
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1454
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1455
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase the number of alcohol and drug courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1456
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Repeal the three strikes law",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1457
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase funding for restorative justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1458
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for defendants to get bail",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1459
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for long-term prisoners to get parole",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1460
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1461
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Fund alternatives to prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1462
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1463
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1464
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1465
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1466
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1467
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1468
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1469
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1470
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase sentences for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1471
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make parole conditions stricter for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1472
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang insignia in public",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1473
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1474
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Cancel the target to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1475
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1476
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require that all prisoners are in work, education, or training",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1477
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1478
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1479
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1480
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1481
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Notify local schools if a sex offender is living in the area",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1482
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Aim to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1483
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to increase access to criminal legal services\n",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1484
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1485
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use progressive model of policing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1486
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1508
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1509
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1510
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1511
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1512
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1513
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1514
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1515
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand specialist courts for young people throughout the country",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1516
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1517
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Review the use of remand in youth detention facilities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1518
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ban detention of young people with adults",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1519
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Extend the three-strikes law to include burglary",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1520
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Support a referendum on the legalisation of cannabis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1521
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove regulations limiting volunteering in prisons",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1522
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1523
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1525
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1531
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Relax firearms laws",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1532
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1533
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1534
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1535
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1536
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require 50 percent representation of women on state sector boards",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1542
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Select infrastructure projects based on their public business case",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1546
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1547
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Strengthen the Productivity Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1548
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1549
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1550
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an office for rainbow communities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1551
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1552
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1553
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1554
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1555
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend the living wage beyond the core public sector",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1556
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1557
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Educate institutions about rainbow issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1558
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1559
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require equal gender representation in government appointments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1560
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Set employment and equity standards for government contracts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1561
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce public sector salaries",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1562
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Establish an independent infrastructure corporation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1563
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish the Human Rights Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1564
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1565
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1566
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1567
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurers to decide on claims within six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1568
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurance status to be displayed vehicles",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1569
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1570
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for community law centres",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1571
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1572
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Create a written constitution",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1578
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1579
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Introduce civics education in schools",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1580
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Investigate models of deliberative democracy",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1581
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1582
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Lower the voting age to 16",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1593
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1594
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1595
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1596
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1597
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1598
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1599
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase transparency of political lobbying",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1600
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Entrench Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1601
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make it easier to establish Māori wards for local elections",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1602
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1603
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make the trade agreement process more transparent and democratic",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1604
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1605
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Preserve local democracy in health services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1606
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Involve young people in policy decisions that affect them",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1607
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform local elections processes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1608
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make no new regulations for 18 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1609
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Repeal two regulations for every new one made",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1610
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1611
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1612
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1613
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1614
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1615
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1616
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1617
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1618
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1619
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1620
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1621
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require regular de-escalation training for police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1622
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1630
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand partnerships between police and mental health workers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1631
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1632
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1633
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1634
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1635
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Support increases to roadside drug testing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1636
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1637
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase police in rural areas",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1638
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make applications for protection and parenting orders free",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1644
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1645
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund violence prevention education and early intervention programmes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1646
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1647
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1648
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund culturally specific responses to family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1649
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1650
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1651
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund family violence experts in courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1652
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1653
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1654
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1655
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase funding for agencies dealing with family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1656
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1657
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1658
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1659
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1660
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1662
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1663
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1664
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1665
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1666
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace council building inspections with compulsory building insurance",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1667
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1668
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1669
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for Auckland local board priority projects",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1670
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1671
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Resource regional councils to improve water quality",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1672
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Cooperate with councils on waste issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1673
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Support local councils to fund rainwater tanks",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1674
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Restrict conversion of productive farmland into forestry",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1675
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1676
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish a fund for climate change adaptation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1677
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Improve the power of local councils to improve public health",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1678
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow councils to introduce congestion charging",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1679
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1680
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Encourage greater cooperation between councils on building consents",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1681
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1682
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1683
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase the number of alcohol and drug courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1684
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Repeal the three strikes law",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1685
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase funding for restorative justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1686
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for defendants to get bail",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1687
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for long-term prisoners to get parole",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1688
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1689
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Fund alternatives to prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1690
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1691
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1692
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1693
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1694
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1695
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1696
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1697
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1698
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase sentences for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1699
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make parole conditions stricter for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1700
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang insignia in public",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1701
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1702
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Cancel the target to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1703
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1704
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require that all prisoners are in work, education, or training",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1705
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1706
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1707
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1708
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1709
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Notify local schools if a sex offender is living in the area",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1710
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Aim to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1711
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to increase access to criminal legal services\n",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1712
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1713
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use progressive model of policing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1714
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1736
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1737
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1738
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1739
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1740
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1741
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1742
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1743
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand specialist courts for young people throughout the country",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1744
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1745
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Review the use of remand in youth detention facilities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1746
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ban detention of young people with adults",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1747
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Extend the three-strikes law to include burglary",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1748
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Support a referendum on the legalisation of cannabis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1749
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove regulations limiting volunteering in prisons",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1750
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1751
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1753
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1759
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Relax firearms laws",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1760
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1761
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1762
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1763
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a new agency to oversee Wellington's transport improvements and operations",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1764
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require 50 percent representation of women on state sector boards",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1770
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Select infrastructure projects based on their public business case",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1774
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow the Environmental Protection Agency to review gene editing science",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1775
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Strengthen the Productivity Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1776
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require big businesses and the government to pay invoices quicker",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1777
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create a minister and parliamentary commissioner for animal welfare",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1778
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an office for rainbow communities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1779
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Consider establishing a Ministry of Energy and Decarbonisation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1780
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue upgrading government buildings to be more energy efficient",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1781
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1782
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1783
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend the living wage beyond the core public sector",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1784
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase the capacity of the Ministry of Pacific Peoples",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1785
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Educate institutions about rainbow issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1786
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Commit government agencies to buy more from NZ businesses",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1787
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require equal gender representation in government appointments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1788
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Set employment and equity standards for government contracts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1789
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce public sector salaries",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1790
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Establish an independent infrastructure corporation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1791
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish the Human Rights Commission",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1792
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Develop a nationally-coordinated environmental reporting system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1793
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1794
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1795
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurers to decide on claims within six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1796
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require insurance status to be displayed vehicles",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1797
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1798
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for community law centres",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1799
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1800
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Create a written constitution",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1806
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish an upper house of parliament with equal Māori representation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1807
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Introduce civics education in schools",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1808
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Investigate models of deliberative democracy",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1809
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require that large investments factor in 2050 carbon neutral goal",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1810
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Lower the voting age to 16",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1821
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1822
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Establish a citizens’ assembly to decide on a system for political donations and campaign funding",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1823
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to privacy to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1824
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Add the right to a sustainable environment to the Bill of Rights Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1825
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Aim to transform the constitution based on the Treaty by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1826
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow Māori voters to change between the general and Māori electoral rolls more frequently",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1827
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase transparency of political lobbying",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1828
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Entrench Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1829
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make it easier to establish Māori wards for local elections",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1830
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform the Official Information Act",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1831
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make the trade agreement process more transparent and democratic",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1832
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Remove investor state dispute provisions and procurement rules from trade agreements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1833
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Preserve local democracy in health services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1834
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Involve young people in policy decisions that affect them",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1835
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Reform local elections processes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1836
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make no new regulations for 18 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1837
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Repeal two regulations for every new one made",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1838
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Allow MPs to remain in parliament if they leave their party",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1839
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Pause the introduction of non-Covid-19 legislation and regulations for 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1840
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Abolish Māori seats in parliament",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1841
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Change the parliamentary calendar to reduce MP travel requirements",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1842
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Create a regulatory constitution to require laws to comply with principles of good lawmaking",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1843
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Restrict the government's ability to pass legislation under urgency",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1844
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Automatically repeal regulations 10 years after they are passed",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1845
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove all regulations that do not pass a cost-benefit analysis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1846
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce the number of MPs to 100 and restrict the number of ministers to 20",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1847
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce MPs' salaries by 20% for at least six months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1848
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1849
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Require regular de-escalation training for police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1850
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1858
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand partnerships between police and mental health workers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1859
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1860
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1861
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for drug screening controls and detecting identifying new drugs",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1862
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1863
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Support increases to roadside drug testing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1864
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for the Independent Police Conduct Authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1865
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase police in rural areas",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1866
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Make applications for protection and parenting orders free",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1872
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Develop an approach to family and sexual violence in partnership with people affected",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1873
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund violence prevention education and early intervention programmes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1874
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Provide longer term contracts to community providers of family violence services",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1875
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Implement the recommendations of the Māori Inquiry into Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1876
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund culturally specific responses to family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1877
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1878
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1879
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Fund family violence experts in courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1880
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ensure emergency housing is available for men at risk of harming others and victims of violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1881
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to reform court process to improve the experiences of victims",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1882
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase support for Oranga Tamariki caregivers",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1883
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Increase funding for agencies dealing with family violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1884
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Require Oranga Tamariki to consider placing children with wider family rather than in state care",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1885
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Build strong relationships with whānau, hapū and iwi, relating to the Oranga Tamariki system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1886
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace Oranga Tamariki with kaupapa Māori-based processes and structures for child protection",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1887
    // },
    // {
    //     "PartyId": 8,
    //     "PolicyTitle": "Replace the chief executive of Oranga Tamariki",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1888
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1890
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1891
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce domestic violence rates to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1892
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the number of child removals to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1893
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Require councils to commit to water quality objectives and upgrade water infrastructure",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1894
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace council building inspections with compulsory building insurance",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1895
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Provide farmers and regional councils greater control over farm environmental plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1896
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Allow councils to use targeted rates to pay for infrastructure for new housing developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1897
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for Auckland local board priority projects",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1898
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Strengthen council powers to improve housing affordability in new developments",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1899
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Resource regional councils to improve water quality",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1900
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Cooperate with councils on waste issues",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1901
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Support local councils to fund rainwater tanks",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1902
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Restrict conversion of productive farmland into forestry",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1903
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Redirect GST revenue from construction to local government for infrastructure development",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1904
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Establish a fund for climate change adaptation",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1905
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Improve the power of local councils to improve public health",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1906
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Allow councils to introduce congestion charging",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1907
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Require councils to consider children when granting resource consents and developing district plans",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1908
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Encourage greater cooperation between councils on building consents",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1909
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Aim to reduce the prison population to the OECD average by 2040",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1910
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 19",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1911
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase the number of alcohol and drug courts",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1912
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Repeal the three strikes law",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1913
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Increase funding for restorative justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1914
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for defendants to get bail",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1915
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Make it easier for long-term prisoners to get parole",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1916
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Expand law allowing people to have their criminal records wiped",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1917
    // },
    // {
    //     "PartyId": 16,
    //     "PolicyTitle": "Fund alternatives to prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1918
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Adopt a social investment approach to criminal justice",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1919
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Create a dedicated gang unit in the police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1920
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand the use of specialist courts including the alcohol and other drug court",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1921
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide funding for people released from prison to move to a new location",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1922
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Aim for sexual violence offences to be dealt with within 12 months",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1923
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Provide authorities special powers to deal with young serious offenders",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1924
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Expand integrated service response initiative for family and sexual violence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1925
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make the victim notification register opt-out rather than opt-in",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1926
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase sentences for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1927
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Make parole conditions stricter for gang members",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1928
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang insignia in public",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1929
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Encourage alternative dispute resolution forums over the courts where possible",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1930
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Cancel the target to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1931
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase funding for mental health, drug addiction and education services in prison",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1932
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require that all prisoners are in work, education, or training",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1933
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Require gang members to prove income is legitimate in criminal proceeds cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1934
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Extend court sitting hours",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1935
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Increase penalties for pointing lasers at aircraft",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1936
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Reform court rules for people found not guilty by reason of insanity",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1937
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Notify local schools if a sex offender is living in the area",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1938
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Aim to reduce the prison population",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1939
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to increase access to criminal legal services\n",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1940
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use crime prevention and rehabilitation strategies",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1941
    // },
    // {
    //     "PartyId": 1,
    //     "PolicyTitle": "Continue to use progressive model of policing",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1942
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Allow all people in prison to vote",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1964
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Replace most prisons with community-based rehabilitation over time",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1965
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for tikanga-based and restorative justice solutions to criminal cases",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1966
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Transfer authority and resources to Māori to develop responses to systemic causes of harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1967
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Create an independent victims commissioner",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1968
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Continue to explore pathways for addressing sexual violence beyond the justice system",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1969
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Increase funding for social and support services for people who have caused and experienced harm",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1970
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Extend legal aid",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1971
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand specialist courts for young people throughout the country",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1972
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Expand the youth court to cover all young people up to age 18",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1973
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Review the use of remand in youth detention facilities",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1974
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Ban detention of young people with adults",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1975
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Extend the three-strikes law to include burglary",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1976
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Support a referendum on the legalisation of cannabis",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1977
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Remove regulations limiting volunteering in prisons",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1978
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Reduce sentences for prisoners who complete or teach literacy and driver licensing classes",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1979
    // },
    // {
    //     "PartyId": 6,
    //     "PolicyTitle": "Oppose further arming of police",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1981
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Ban gang members from holding a firearms licence",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1987
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Relax firearms laws",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1988
    // },
    // {
    //     "PartyId": 2,
    //     "PolicyTitle": "Transfer firearms administration from the police to a new authority",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1989
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Replace existing firearms laws and stop the creation of a firearms register",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1990
    // },
    // {
    //     "PartyId": 4,
    //     "PolicyTitle": "Seize gang property where illegal firearms are found at an unlawful operation involving a gang",
    //     "PolicyImage": "/images/topic-law-justice-and-government.jpg",
    //     "PolicyId": 1991
    // }
],
  SelectedPolicies: [],
};

export const PolicyProviderContext = React.createContext(undefined);

const PolicyProvider = (props) => {
  const [state, setState] = React.useState(initialState);
  const setSelectedPolicy = (PolicyId, Decision, PartyId) => {
    setState((state) => {
      const selectedPolicies = state.SelectedPolicies.filter((policy) => policy.PolicyId != PolicyId);

      const newPolicy = {
        PolicyId,
        PartyId,
        Decision,
      };
      return {
        ...state,
        SelectedPolicies: [...selectedPolicies, newPolicy],
      };
    });
  };

  return <PolicyProviderContext.Provider value={{ ...state, setSelectedPolicy }}>{props.children}</PolicyProviderContext.Provider>;
};

export default PolicyProvider;
