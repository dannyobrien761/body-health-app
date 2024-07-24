
// Since the order of the elements in the DOM is being used, the  DOMContentLoaded event to ensure it runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {


// Function to update herb cards with given herb information
function updateHerbCards(herbs) {
    console.log('Updating herb cards', herbs);
    const cardsContainer = document.querySelector('.cards');
    let herbCards = document.querySelectorAll('.herb-card');

    // If there are not enough herb-card elements, create new ones
    if (herbCards.length < herbs.length) {
        for (let i = herbCards.length; i < herbs.length; i++) {
            const newCard = document.createElement('div');
            newCard.classList.add('herb-card');

            const header = document.createElement('div');
            header.classList.add('card-header');
            header.innerHTML = '&nbsp;';

            const content = document.createElement('div');
            content.classList.add('card-content');

            const title = document.createElement('h3');
            title.classList.add('herb-title');
            title.innerHTML = '&nbsp;';

            const benefits = document.createElement('p');
            benefits.classList.add('herb-benefits');
            benefits.innerHTML = '&nbsp;';

            content.appendChild(title);
            content.appendChild(benefits);
            newCard.appendChild(header);
            newCard.appendChild(content);

            cardsContainer.appendChild(newCard);
        }
        // Re-select the herbCards after adding new ones
        herbCards = document.querySelectorAll('.herb-card');
    }


    herbCards.forEach((card, index) => {
        const header = card.querySelector('.card-header');
        const title = card.querySelector('.herb-title');
        const benefits = card.querySelector('.herb-benefits');

        if (header && title && benefits && herbs[index]) {
            header.innerHTML = `<img src="${herbs[index].imageUrl}" alt="Herb image">`;
            title.innerHTML = herbs[index].title;
            benefits.innerHTML = herbs[index].benefits;
        } else {
           // Log which elements are missing if there's an issue
           console.error('Missing element(s) for herb card index:', index);
           console.log('header:', header);
           console.log('title:', title);
           console.log('benefits:', benefits);
           console.log('herbs[index]:', herbs[index]);

          // Remove the card if there's no corresponding herb or element is missing
            card.remove();  

           // Clear the card if there's no corresponding herb or element is missing
           //if (header) header.innerHTML = '&nbsp;';
           //if (title) title.innerHTML = '&nbsp;';
           //if (benefits) benefits.innerHTML = '&nbsp;';
        }
    });
}

// Attaching event listeners to boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        let herbType;
        console.log('Box clicked:', box.id);
        switch (box.id) {
            case 'eye':
                herbType = 'eyeHerb';
                break;
            case 'hair':
                herbType = 'hairHerb';
                break;
            case 'brain':
                herbType = 'brainHerb';
                break;
            case 'teeth':
                herbType = 'teethHerb';
                break;
            case 'heart':
                herbType = 'heartHerb';
                break;
            case 'lung':
                herbType = 'lungHerb';
                break;
            case 'digestion-system':
                herbType = 'digestionHerb';
                break;
            case 'lymphatic-system':
                herbType = 'lymphaticHerb';
                break;
            case 'red-blood-cell':
                herbType = 'redBloodCellHerb';
                break;
            default:
                return;
        }
        getHerb(herbType);
        console.log(herbType);
    });
});


//all get herb functions:


// Function to get information for eye-related herbs
function getEyeHerbs() {
    return [
        {
            imageUrl: 'https://images.unsplash.com/photo-1504382103100-db7e92322d39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Eyebright',
            benefits: 'Clears mucus in the tear ducts'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1675441003177-1dbcf11fa772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Chamomile',
            benefits: 'Reduces eye inflammation'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1658509565784-d425ada6c327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Bilberry',
            benefits: 'Improves night vision'
        }
        
    ];
}
// Function to get information for hair-related herbs
function getHairHerbs() {
    return [
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Rosemary',
            benefits: 'Cleans and strengthens hair'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Lavender',
            benefits: 'Promotes hair growth'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Peppermint',
            benefits: 'Stimulates scalp'
        }
        
    ];

}
// Function to get information for brain-related herbs
function getBrainHerbs() {
    return [
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Skullcap',
            benefits: 'Cleans and strengthens hair'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Resveratrol',
            benefits: 'Promotes hair growth'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Green-Tea',
            benefits: 'Stimulates scalp'
        }
        
    ];

}

// Function to get information for teeth-related herbs
function getTeethHerbs() {
    return [
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
        
    ];

}
// Function to get information for Heart-related herbs
function getHeartHerbs() {
    return [
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Dandelion',
            benefits: 'Cleans and strengthens hair'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'Resveratrol',
            benefits: 'Promotes hair growth'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Green-Tea',
            benefits: 'Stimulates scalp'
        }
        
    ];

}
// Function to get information for lung-related herbs
function getLungHerbs() {
    return [
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
        
    ];

}
// Function to get information for lung-related herbs
function getDigestionHerbs() {
    return [
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
        
    ];

}
// Function to get information for lung-related herbs
function getLymphaticHerbs() {
    return [
        {
            imageUrl: 'https://images.unsplash.com/photo-1509210459313-17feefdff5cd?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'polk root',
            benefits: 'Cleans lungs'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            title: 'movement',
            benefits: 'Antiviral and Antibacterial properties'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'yoga',
            benefits: 'relieve congestion'
        }
        
    ];

}
// Function to get information for lung-related herbs
function getRedBloodCellHerbs() {
    return [
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
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'breathwork',
            benefits: 'whimhoff'
        },
        {
            imageUrl: 'https://plus.unsplash.com/premium_photo-1673264303561-de2ab31df03c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'whatworks',
            benefits: 'who'
        }
    ];

}


// Main function to get herb information based on the clicked box
const getHerb = (boxChoice) => {
    let herbs;
    if (boxChoice === 'eyeHerb') {
        herbs = getEyeHerbs();
    } else if (boxChoice === 'hairHerb') {
        herbs = getHairHerbs();
    }
    else if (boxChoice === 'brainHerb') {
        herbs = getBrainHerbs();
    }
    else if (boxChoice === 'teethHerb') {
        herbs = getTeethHerbs();
    }
    else if (boxChoice === 'heartHerb') {
        herbs = getHeartHerbs();
    }
    else if (boxChoice === 'lungHerb') {
        herbs = getLungHerbs();
    }
    else if (boxChoice === 'digestionHerb') {
        herbs = getDigestionHerbs();
    }
    else if (boxChoice === 'lymphaticHerb') {
        herbs = getLymphaticHerbs();
    }
    else if (boxChoice === 'redBloodCellHerb') {
        herbs = getRedBloodCellHerbs();
    }
    updateHerbCards(herbs);
    console.log(herbs);
};




//dom content loading cotainer end
});