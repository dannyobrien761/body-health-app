const herbData = {
    eyeHerbs: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1504382103100-db7e92322d39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Eyebright',
        benefits: 'Clears mucus in the tear ducts',
      },
      {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1675441003177-1dbcf11fa772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Chamomile',
        benefits: 'Reduces eye inflammation',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1658509565784-d425ada6c327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bilberry',
        benefits: 'Improves night vision',
      }
    ],
    hairHerbs: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Rosemary',
        benefits: 'Cleans and strengthens hair',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
        title: 'Lavender',
        benefits: 'Promotes hair growth',
      },
      {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Peppermint',
        benefits: 'Stimulates scalp',
      }
    ],
    brainHerbs: [
      {
        imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Skullcap',
        benefits: 'Cleans and strengthens hair',
        url: 'https://www.amazon.co.uk/',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
        title: 'Resveratrol',
        benefits: "Antioxidant and anti-inflammatory properties to protect you against diseases like cancer, diabetes, and Alzheimer's disease",
        url: 'https://www.amazon.co.uk/',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Green-Tea',
        benefits: 'Reduces inflammation after head injury',
        url: 'https://www.amazon.co.uk/',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Fasting',
        benefits: 'Clears excess mucus accumulation, increases clarity, and reduces brain fog',
        url: 'https://www.amazon.co.uk/',
      },
      {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661697466676-200ffe1cbf1e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Rosemary',
        benefits: 'Stimulates scalp, improving circulation',
        url: 'https://www.amazon.co.uk/',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1599940859674-a7fef05b94ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Cayenne and Ginger',
        benefits: 'Sends blood to the head, improving circulation and clearing brain fog',
        url: 'https://www.amazon.co.uk/',
      }
    ],
    teethHerbs: [
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Echinacea',
            benefits: 'anti-infective herbs, regulate bacteria, eliminating obvious infections and relieving pain.'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Nettle',
            benefits: 'to address systemic mineral deficiencies particularly iron'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Sage',
            benefits: 'anti-infective, astringent, and circulation-stimulating'
        }   
    ],
    heartHerbs: [
        {
            imageUrl: 'https://images.unsplash.com/photo-1475140604894-b4aaba075542?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Dandelion',
            benefits: 'Cleans and strengthens hair'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Resveratrol',
            benefits: 'Promotes hair growth'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Green-Tea',
            benefits: 'Stimulates scalp'
        }
          
    ],
    lungHerbs: [
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Mugwort',
            benefits: 'Cleans lungs'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Mullein Leaf',
            benefits: 'Antiviral and Antibacterial properties'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Eucalyptus',
            benefits: 'relieve congestion'
        }   
    ],
    digestionHerbs:[
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'seeds',
            benefits: 'Cleans lungs'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Irish Moss',
            benefits: 'Antiviral and Antibacterial properties'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'dillsk',
            benefits: 'relieve congestion'
        }
        
    ],
    lymphaticHerbs:[
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664200731344-ef1ad87aa0a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'polk root',
            benefits: 'Cleans lungs'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1678653651270-9f0f68119d99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'wormwood',
            benefits: 'Antiviral and Antibacterial properties'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'yoga',
            benefits: 'relieve congestion'
        }
        
    ],
    redBloodCellHerbs:[
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'nettle',
            benefits: 'Cleans lungs'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'nettle seed',
            benefits: 'Antiviral and Antibacterial properties'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1675720902465-82781aaa96bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Blackwalnut',
            benefits: 'removes parasites'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1674347954785-7604a0220776?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Pumkin Seeds',
            benefits: 'Fibre and helps remove parasites'
        }
    ]
  };
  