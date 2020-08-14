import React from "react";

const initialState = {
  Parties: [
    {
      PartyTitle: "Labour Party",
      PartyText:
        "The New Zealand Labour Party (Rōpū Reipa o Aotearoa) currently leads the government. It is a centre-left political party, which describes its founding principle as democratic socialism. Labour formed in 1916 out of various socialist parties and trade unions and is the country's oldest political party still in existence. Labour has been in government six times and had ten leaders become prime ministers.",
      PartyImage: "/images/parties-Labour-Party.jpg",
      PartyId: 1 
    },
    {
      PartyTitle: "National Party",
      PartyText:
        "The New Zealand National Party (Rōpū Nāhinara) is currently the main opposition party in parliament. A centre-right party, National tends to be economically liberal and socially conservative, promoting individual freedom, personal responsibility and competitive enterprise. National formed in 1936 as a combination of the Reform and United parties to oppose the growing labour movement. It has ...",
      PartyImage: "/images/parties-National-Party.jpg",
      PartyId: 2
    },
    {
      PartyTitle: "Advance New Zealand Party",
      PartyText:
        "The Advance New Zealand Party was recently established by Jami-Lee Ross, former National MP and currently an independent MP for Botany. Ross describes the party as an attempt to represent middle-ground voters. It is particularly focussed on electoral reform and anti-corruption policies. Advance recently joined with the unregistered New Zealand Public Party, whose founder, Billy Te Kahika, has ...",
      PartyImage: "/images/parties-Advance-New-Zealand.jpg",
      PartyId: 3
    }
  ],
  Policies: [
    {
      PolicyId: 1,
      PolicyTitle: "Allow all people in prison to vote",
      PolicyText:
        "This party says we need to uphold human rights by expanding opportunities for people to participate meaningfully in our democracy at all levels. This party says people in prison are already carrying out their punishment by being in prison, and denying them access to voting only alienates people from the political system. It says allowing people in ...",
      PolicyImage: "/images/topic-law-justice-and-government.jpg",
      PartyId: 1,
    },
    {
      PolicyId: 2,
      PolicyTitle: "Increase funding for social and support services for people who have caused and experienced harm",
      PolicyText:
        "This party says we have one of the highest rates of imprisonment in the world, fuelling a cycle of crime and despair which disproportionately harms Māori and people of colour, mental health sufferers, and low-income communities.our justice system needs transformative change ...",
      PolicyImage: "/images/topic-law-justice-and-government.jpg",
      PartyId: 1,
    },
    {
      PolicyId: 4,
      PolicyTitle: "Continue provide active learning programme for schools and ECEs",
      PolicyText:
        "This party says it wants NZ to be the best place in the world for children and young people. This party wants to inspire young people to be active and healthy. This party would continue to roll out the Healthy Active Learning programme. The policy is a continuation of the existing Healthy Active Learning programme. The programme involves ...",
      PolicyImage: "/images/topic-media-culture-and-recreation.jpg",
      PartyId: 1,
    },
    {
      PolicyId: 5,
      PolicyTitle: "Stop the Tahr cull and establish a new management plan",
      PolicyText:
        "This party says the department of conservation's consultation about the proposed 2020-21 Tahr cull was inadequate. It says Tahr hunting provides jobs as well as recreational and tourism opportunities. This party says the cull should be stopped so consultation can occur, and a management system should be established to protect native flora and fauna while allowing for continued ...",
      PolicyImage: "/images/topic-media-culture-and-recreation.jpg",
      PartyId: 2,
    },
    {
      PolicyId: 6,
      PolicyTitle: "Consult hunters about policies for control of game animals",
      PolicyText:
        "This party says that for many New Zealanders, recreational fishing and hunting are a way of life which should be protected. This party also says that fishing and hunting communities have an important role to play in the conservation effort, as partners with government alongside local communities and NGOs. The expertise of the hunting community should be used in the control of game animals.",
      PolicyImage: "/images/topic-media-culture-and-recreation.jpg",
      PartyId: 2,
    },
  ],
  SelectedPolicies: [],
};

export const PolicyProviderContext = React.createContext(undefined);

const PolicyProvider = (props) => {
  const [state, setState] = React.useState(initialState);
  const setSelectedPolicy = (PolicyId, Decision, PartyId) => {
    setState((state) => {
      const newPolicy = {
        PolicyId,
        PartyId,
        Decision,
      };
      return {
        ...state,
        SelectedPolicies: [...state.SelectedPolicies, newPolicy],
      };
    });
  };
  return <PolicyProviderContext.Provider value={{ ...state, setSelectedPolicy }}>{props.children}</PolicyProviderContext.Provider>;
};

export default PolicyProvider;
