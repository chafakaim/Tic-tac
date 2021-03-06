

export default class TICtoc{


    constructor(container){
        this.container=container;
        this.boxs=this.container.querySelectorAll('.box');
        this.click='X';
        this.table=['','','','','','','','',''];
        this.gangne=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.count=0;
        this.p1=this.container.parentNode.querySelector('.player1');
        this.p2=this.container.parentNode.querySelector('.player2');
        this.alert=this.container.parentNode.querySelector('.alert');
        this.gameover=this.container.parentNode.querySelector('.gameover');
        this.succes=this.container.parentNode.querySelector('.succes');
        this.player1=false;
        this.player2=false;
        this.restart=this.gameover.querySelector('.game');
        this.restart2=this.succes.querySelector('.game');

        // les delete des notification:
        this.span1=this.p1.querySelector('span');
        this.span2=this.p2.querySelector('span');
        this.span3=this.alert.querySelector('span');
  
        this.boxs.forEach((ele,i) => {
            ele.addEventListener('click',function(e){
                this.addclass(e,i);
                this.verify(this.table);
            }.bind(this));
        });

        // ecouter le clic sur les deux span
        // span1
        this.span1.addEventListener('click',function(e){
            this.delete(this.span1);
        }.bind(this));
        //span2
        this.span2.addEventListener('click',function(e){
            this.delete(this.span2);
        }.bind(this));
        this.span3.addEventListener('click',function(e){
            this.delete(this.span3);
        }.bind(this));

        
        this.restart.addEventListener('click',function(e){
            location.reload();
        });

        this.restart2.addEventListener('click',function(e){
            location.reload();
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
    }
    verify=(tab)=>{
        if(!this.player1 && !this.player2 ){
        this.gangne.forEach(ele => {
            if(tab[ele[0]] === 'X' && tab[ele[1]] === 'X' && tab[ele[2]] === 'X' ){
                this.player1 = true;
                this.p1.classList.add('active');
                // success player 1
                this.succes.classList.add('fade')
                this.succes.classList.add('on');
            }else if(tab[ele[0]] === 'O' && tab[ele[1]] === 'O' && tab[ele[2]] === 'O'){
                this.player2=true;
                this.p2.classList.add('active');

                // succes player 2
                this.succes.classList.add('fade')
                this.succes.classList.add('on');
            }else{
                if(this.count === 71 & !this.player1 && !this.player2){
                    this.alert.classList.add('active');
                  console.log(this.gameover)
                    this.gameover.classList.add('fade');
                    if(this.gameover.classList.contains('fade')){
                    this.gameover.addEventListener('transitionend',function(){
                        this.classList.add('on');
                        console.log('this');
                    })
                    }
                }
                this.count+=1;
            }
        })
        }
    }
    // delete des notification
    delete=(element)=>{
      if(element.parentNode.classList.contains('active')){
          element.parentNode.classList.remove('active');
      }else{
          return;
      }
    }
}
