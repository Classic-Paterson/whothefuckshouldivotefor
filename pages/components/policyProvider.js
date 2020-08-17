import React from "react";

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
    // fisheries
    {
      PolicyId: 1,
      PolicyTitle: "Continue to invest in rural and fishing communities",
      PolicyText:
        "This Party says the primary sector is a huge part of NZ's economy and identity, and will be at the forefront of an export-led recovery. It says supporting rural communities will help the primary sector create jobs and improve environmental standards. This Party would continue to invest in rural and fishing communities to help them recovery from Covid-19, including to increase access to support, financial and continuity planning advice and wellbeing services.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 1,
      PolicySources: [
        {
          Title: "This Party, 'Primary Industries', 8 August 2020",
          Link: "https://web.archive.org/web/20200810083214/https://www.labour.org.nz/primaryindustries",
        },
      ],
    },
    {
      PolicyId: 2,
      PolicyTitle: "Ensure continued access to recreational fishing",
      PolicyText:
        "This Party says that for many New Zealanders, recreational fishing and hunting are a way of life which should be protected. This Party says that access to recreational fishing and whitebaiting should be maintained. This Party would ensure continued access to recreational fishing and whitebaiting.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 2,
      PolicySources: [
        {
          Title: "This Party, 'This Party Will Protect New Zealand’s Backyard', 11 August 2020",
          Link: "https://www.scoop.co.nz/stories/PA2008/S00110/national-will-protect-new-zealands-backyard.htm",
        },
        {
          Title: "This Party, 'Conservation', 11 August 2020",
          Link: "https://web.archive.org/web/20200812011732/https://www.national.org.nz/conservation",
        },
        {
          Title: "This Party, 'Fishing and hunting', no date",
          Link: "https://web.archive.org/web/20200812012304/https://www.national.org.nz/fishing-and-hunting",
        },
        {
          Title: "This Party, 'This Party’s Conservation Policy' (pdf), no date",
          Link: "https://d3n8a8pro7vhmx.cloudfront.net/nationalparty/pages/14583/attachments/original/1597111880/National's_Conservation_Policy.pdf?1597111880",
        },
      ],
    },
    {
      PolicyId: 3,
      PolicyTitle: "Create the Kermadec Ocean Sanctuary",
      PolicyText:
        "This Party says NZ's unique native species and natural environment are some of its most precious taonga. It says a balanced, long-term and pragmatic approach to conservation is needed to ensure all New Zealanders have the opportunity to enjoy the environment. This Party recognises that iwi have concerns with the proposed Kermadec Ocean Sanctuary.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 2,
      PolicySources: [
        {
          Title: "This Party, 'This Party Will Protect New Zealand’s Backyard', 11 August 2020",
          Link: "https://www.scoop.co.nz/stories/PA2008/S00110/national-will-protect-new-zealands-backyard.htm",
        },
        {
          Title: "This Party, 'Protecting our flora and fauna', no date",
          Link: "https://web.archive.org/web/20200812013035/https://www.national.org.nz/protecting-our-flora-and-fauna",
        },
        {
          Title: "This Party, 'This Party’s Conservation Policy' (pdf), no date",
          Link: "https://d3n8a8pro7vhmx.cloudfront.net/nationalparty/pages/14583/attachments/original/1597111880/National's_Conservation_Policy.pdf?1597111880",
        }
      ],
    },
    {
      PolicyId: 4,
      PolicyTitle: "Install cameras on all commercial fishing boats",
      PolicyText:
        "This Party says 90 percent of NZ's 145 different species of seabirds are at risk of extinction. One simple and practical way to prevent sea-bird deaths is to install cameras on all commercial fishing boats. This was a commitment This Party made when last in government.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 2,
      PolicySources: [
        {
          Title: "This Party, '‘Zero-deaths’ Seabird Pledge Hollow Without Cameras', 28 May 2020",
          Link: "https://www.scoop.co.nz/stories/PA2005/S00231/zero-deaths-seabird-pledge-hollow-without-cameras.htm",
        }
      ],
    },
    {
      PolicyId: 5,
      PolicyTitle: "Set aside 10 percent of ocean ecosystems as reserves",
      PolicyText:
        "This Party says we need to protect and enhance NZ’s natural environment both because it is at the core of New Zealanders’ well being and because it makes good business sense. Setting aside a 10 percent of NZ’s oceans as no-take reserves should ensure all ocean users have fair access to NZ’s ocean resources while preserving ocean biodiversity. This Party would create a spatial plan of NZ’s oceans, including its exclusive economic zone. At least 10 percent of all ocean ecosystems would be set aside as no-take reserves. Compensation would be provided for existing users where appropriate. This process would be funded by a resource rental on all commercial ocean resource users. This Party would also clarify the division of responsibilities between central and local government for the ocean environment.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 16,
      PolicySources: [
        {
          Title: "This Party, 'Environmental Policy', 18 January 2017",
          Link: "https://web.archive.org/web/20200801013615/https://www.top.org.nz/environment_front_and_centre",
        },
        {
          Title: "This Party, 'Environmental Policy' (pdf), no date",
          Link: "https://web.archive.org/web/20200801014039/https://d3n8a8pro7vhmx.cloudfront.net/garethmorgan/pages/464/attachments/original/1500500216/01237_TOP_Policy_3_-_Environment_description.pdf?1500500216",
        }
      ],
    },
    {
      PolicyId: 6,
      PolicyTitle: "Prioritise recreational and customary fishing over commercial fishing",
      PolicyText:
        "This Party says oceans are the lifeblood of our planet, home to a vast array of species and delicate ecosystems, and a source of kai and recreation. The political influence of the fishing industry means overfishing and destructive fishing methods – such as bottom trawling, dredging, and set netting – continue, severely impacting fish stocks, seabirds, and dolphins.The Green Party says it is not in the pocket of big fishing companies and is committed to ensuring the survival and restoration of marine environments for future generations.This Party would protect and prioritise recreational and customary fishing over commercial fishing.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 6,
      PolicySources: [
        {
          Title: "This Party, 'Oceans', 25 July 2020",
          Link: "https://web.archive.org/web/20200726041800/https://www.greens.org.nz/oceans_2020",
        },
        {
          Title: "This Party, 'Think ahead. Act now. Our green vision for Aotearoa.' (pdf), 25 July 2020",
          Link: "https://web.archive.org/web/20200726034743/https://d3n8a8pro7vhmx.cloudfront.net/beachheroes/pages/13106/attachments/original/1595384869/Green_Policy_FOR_ONLINE.pdf?1595384869",
        }
      ],
    },
    {
      PolicyId: 7,
      PolicyTitle: "Ban set netting and phase out other destructive fishing methods",
      PolicyText:
        "This Party says oceans are the lifeblood of our planet, home to a vast array of species and delicate ecosystems, and a source of kai and recreation. The political influence of the fishing industry means overfishing and destructive fishing methods – such as bottom trawling, dredging, and set netting – continue, severely impacting fish stocks, seabirds, and dolphins. This Party says it is not in the pocket of big fishing companies and is committed to ensuring the survival and restoration of marine environments for future generations.The Green Party would ban set netting. It would also phase out destructive commercial fishing methods like bottom trawling, dredging, and other bottom impact methods.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 6,
      PolicySources: [
        {
          Title: "This Party, 'Think ahead. Act now. Our green vision for Aotearoa.' (pdf), 25 July 2020",
          Link: "https://web.archive.org/web/20200726034743/https://d3n8a8pro7vhmx.cloudfront.net/beachheroes/pages/13106/attachments/original/1595384869/Green_Policy_FOR_ONLINE.pdf?1595384869",
        },
        {
          Title: "This Party, 'Oceans', 25 July 2020",
          Link: "https://web.archive.org/web/20200726041800/https://www.greens.org.nz/oceans_2020",
        }
      ],
    },
    {
      PolicyId: 8,
      PolicyTitle: "Speed up installation of cameras on commercial fishing boats",
      PolicyText:
        "This party says oceans are the lifeblood of our planet, home to a vast array of species and delicate ecosystems, and a source of kai and recreation. The political influence of the fishing industry means overfishing and destructive fishing methods – such as bottom trawling, dredging, and set netting – continue, severely impacting fish stocks, seabirds, and dolphins. This party says it is not in the pocket of big fishing companies and is committed to ensuring the survival and restoration of marine environments for future generations. This party would accelerate installation of monitoring cameras on commercial fishing boats.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 6,
      PolicySources: [
        {
          Title: "This Party, 'Think ahead. Act now. Our green vision for Aotearoa.' (pdf), 25 July 2020",
          Link: "https://web.archive.org/web/20200726034743/https://d3n8a8pro7vhmx.cloudfront.net/beachheroes/pages/13106/attachments/original/1595384869/Green_Policy_FOR_ONLINE.pdf?1595384869",
        },
        {
          Title: "This Party, 'Oceans', 25 July 2020",
          Link: "https://web.archive.org/web/20200726041800/https://www.greens.org.nz/oceans_2020",
        }
      ],
    },
    {
      PolicyId: 9,
      PolicyTitle: "Facilitate discussions to create the Kermadec Ocean Sanctuary",
      PolicyText:
        "This party says oceans are the lifeblood of our planet, home to a vast array of species and delicate ecosystems, and a source of kai and recreation. Our marine environments must be protected for future generations. This party would facilitate discussions to create the Kermadec Rangitahua Ocean Sanctuary.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 6,
      PolicySources: [
        {
          Title: "This Party, 'Think ahead. Act now. Our green vision for Aotearoa.' (pdf), 25 July 2020",
          Link: "https://web.archive.org/web/20200726034743/https://d3n8a8pro7vhmx.cloudfront.net/beachheroes/pages/13106/attachments/original/1595384869/Green_Policy_FOR_ONLINE.pdf?1595384869",
        },
        {
          Title: "This Party, 'Oceans', 25 July 2020",
          Link: "https://web.archive.org/web/20200726041800/https://www.greens.org.nz/oceans_2020",
        }
      ],
    },
    {
      PolicyId: 10,
      PolicyTitle: "Restore shellfish beds",
      PolicyText:
        "This party says oceans are the lifeblood of our planet, home to a vast array of species and delicate ecosystems, and a source of kai and recreation. Our marine environments must be protected for future generations. This party would restore shellfish beds in areas like the Hauraki Gulf.",
      PolicyImage: "/images/topic-economy.jpg",
      PartyId: 6,
      PolicySources: [
        {
          Title: "This Party, 'Think ahead. Act now. Our green vision for Aotearoa.' (pdf), 25 July 2020",
          Link: "https://web.archive.org/web/20200726034743/https://d3n8a8pro7vhmx.cloudfront.net/beachheroes/pages/13106/attachments/original/1595384869/Green_Policy_FOR_ONLINE.pdf?1595384869",
        },
        {
          Title: "This Party, 'Oceans', 25 July 2020",
          Link: "https://web.archive.org/web/20200726041800/https://www.greens.org.nz/oceans_2020",
        }
      ],
    },
    // fisheries end
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
