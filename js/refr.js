export default class Refrigerator {
    constructor(totalInd, indicator1, indicator2) {
        this.total = totalInd; 
        this.ind1 = document.querySelector(indicator1);
        this.ind2 = document.querySelector(indicator2);
    }
    
    totalCount = {
        satiety: 0,
           mess: 0
    }

    progress() {
        let ind1Width = (+this.totalCount.satiety * 100 / this.total);
        let ind2Width = (+this.totalCount.mess * 100 / this.total);
        
        this.ind1.style.width = ind1Width + '%';
        this.ind2.style.width = ind2Width + '%';

        this.ind1.closest('.stat').children[0].children[1].textContent = Math.round(ind1Width) + '%';
        this.ind2.closest('.stat').children[0].children[1].textContent = Math.round(ind2Width) + '%';
        
        console.log(this.totalCount.satiety + ' ' + this.totalCount.mess);
    }
    

    add(count1, count2) {
        if(+this.totalCount.satiety < this.total) {
            this.totalCount.satiety = +this.totalCount.satiety + +count1;
        } 
        if (+this.totalCount.mess < this.total) {
            this.totalCount.mess = +this.totalCount.mess + +count2;
        }

        this.progress();
    }

    remove(card, elem, count1 = 0, count2 = 0) {
        this.totalCount.satiety = +this.totalCount.satiety - count1; 
        this.totalCount.mess = +this.totalCount.mess - count2;

        if (+this.totalCount.satiety < 0) {
            this.totalCount.satiety = 0;
        }
        if (+this.totalCount.mess < 0) {
            this.totalCount.mess = 0;
        }
        

        card.remove();
        elem.classList.add('empty');

        this.progress();
    }

    init(foods) {
        const clear = document.querySelector('.button--empty'),
            cat = document.querySelector('.button--full');

        clear.addEventListener('click', () => {
            const food = document.querySelectorAll(foods);
            this.totalCount.satiety = 0;
            this.totalCount.mess = 0;
            food.forEach(item => {
                if(!item.classList.contains('empty')) {
                    this.remove(item.firstChild, item);
                }
            })
        })
    }
}