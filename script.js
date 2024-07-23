document.addEventListener('DOMContentLoaded', () => {


// Function to update herb cards with given herb information
function updateHerbCards(herbs) {
    console.log('Updating herb cards', herbs);
    const herbCards = document.querySelectorAll('.herb-card');
    herbCards.forEach((card, index) => {
        const header = card.querySelector('.card-header');
        const title = card.querySelector('.herb-title');
        const benefits = card.querySelector('.herb-benifits');

        if (header && title && benefits && herbs[index]) {
            header.innerHTML = `<img src="${herbs[index].imageUrl}" alt="Herb image">`;
            title.innerHTML = herbs[index].title;
            benefits.innerHTML = herbs[index].benefits;
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
            // more herbs to add to boxes below 
            default:
                return;
        }
        getHerb(herbType);
        console.log(herbType);
    });
});

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

// Main function to get herb information based on the clicked box
const getHerb = (boxChoice) => {
    let herbs;
    if (boxChoice === 'eyeHerb') {
        herbs = getEyeHerbs();
    } else if (boxChoice === 'hairHerb') {
        herbs = getHairHerbs();
    }
    updateHerbCards(herbs);
    console.log(herbs);
};


});