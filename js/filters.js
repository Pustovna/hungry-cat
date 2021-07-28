const filters = function(group, cards) {
    const groupButtons = document.querySelectorAll(group);
    

    groupButtons.forEach((item) => {
        item.addEventListener('click', () => {
            const type = item.dataset.group; 
            if (cards === '.cards__container') { 
                filterGroup(type);
            } else {
                filterCard(type, item);
            }
        })
        
    })
    
    const filterCard = function(typeValue, itemValue) {
        const allCards = itemValue.closest('.cards__container').querySelectorAll(cards);
        if (typeValue == 'all') {
            allCards.forEach(card => {
                card.style.display = "block";
            })
        } else {
            allCards.forEach(item => {
                if (item.dataset.group == typeValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        }
    }

    const filterGroup = function(typeValue) {
        const blocks = document.querySelectorAll(cards);

        blocks.forEach(item => {
            if (item.dataset.group == typeValue) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
    })}

    
};


export default filters;