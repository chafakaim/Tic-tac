

class TICtoc{


    constructor(container){
        this.container=container;
        this.boxs=this.container.querySelectorAll('.box');
        this.click='X';
        this.table=['','','','','','','',''];
        this.count=0;
        console.log('constructor')

        this.boxs.forEach((ele,i) => {
            ele.addEventListener('click',function(e){
                this.addclass(e,i);
            }.bind(this));
        });
    }

    /**
     * @param {Event} e
     * @param {int} i
     */
    //add class lors du click ;
     addclass=(e,i)=>{
        if(e.target.classList.contains('active1') || e.target.classList.contains('active2'))
        {
            return;
        }
        if(this.click === 'X'){
            console.log('click')
            e.target.classList.add('active1');
            e.target.innerHTML='X';
            this.table[i]=this.click;
        }else if(this.click === 'O'){
            e.target.classList.add('active2');
            e.target.innerHTML=this.click;
            this.table[i]=this.click;
        }
        if(this.click === 'O'){
            this.click='X';
        }else{
            this.click='O';
        }
        console.log(this.table);
    }
}

let container=document.querySelector('.container');
let tic=new TICtoc(container);