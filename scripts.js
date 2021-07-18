/* 2. შექმენით ფუნქცია createCell რომელიც პარამეტრად მიიღებს ორ რიცხვს (width, height), 
შექმნის div ელემენტს რომელსაც ექნება კლასი cell და 
ასევე ამ ელემენტის სიგანე იქნება width პარამეტრის მნიშვნელობა 
ხოლო სიმაღლე height პარამეტრის მნიშვნელობა.
გაითვალისწინეთ, რომ აუცილებელია რიცხვს ბოლოში მიამატოთ
 'px' სტრინგი რათა მიიღოთ css ისთვის გასაგები მნიშვნელობა.
  მაგალითად: div.style.width = w + 'px';
ამ ელემენტის innerText ველს მიანიჭეთ 0 რათა თითოეულ უჯრედში თავიდან ეწეროს რიცხვი 0; 
CSS -ში აღწერეთ .cell კლასი რომელსაც ექნება box-sizing: border-box; ასევე ექნება 1 პიქსელიანი ჩარჩო; */

function createCell(width , height){
    let board = document.querySelector('#board')
    let div = document.createElement('div');
    div.innerHTML = '0';
    div.classList.add('cell');
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    board.appendChild(div);
}


/* 
3. შექმენით ფუნქცია addCells, რომელიც პარამეტრად მიიღებს ორ რიცხვს w და h.
 w - უნდა მიანიჭოს #board ელემენტის სიგანეს,
ხოლო h - მიანიჭოს #board ელემენტის სიმაღლეს. 
ფუნქციამ უნდა გამოთვალოს რამდენი 100 პიქსელიანი 
სიმაღლისა და სიგანის მქონე უჯრედი ჩაეტევა ამ ზომის 
ელემენტში და შესაბამისად ციკლის გამოყენებით შექმნას იმდენი
.cell ელემენტი createCell ფუნქციით
(რომელსაც გადასცემს 100 და 100 სიგანეს და სიმაღლეს).
მაგალითად თუ ფუნქციამ მიიღო პარამეტრად 400 და 500 ეს ნიშნავს, 
რომ მასში ჩაეტევა 20 ცალი 100 პიქსელიანი უჯრედი. შესაბამისად უნდა
შექმნას ციკლის გამოყენებით 20 div ელემენტი და ჩაამატოს ეს ელემენტები
#board ელემენტში. */
function addCells(w , h){
    let board = document.querySelector('#board')
    board.style.width = w + 'px';
    board.style.height = h + 'px';
    let maximumCellsInBoard = (w / 100) * (h / 100);
    for(i = 0 ; i < maximumCellsInBoard ; i++){
         createCell(100 , 100);
    }
    addCounter();
}
/*
4. html ში შექმენით ღილაკი <button id="start">Start</button> 
რომელზე დაჭერის შემდეგაც გამოიძახებთ ფუნქციას addCells და 
გადასცემთ ნებისმიერ 100 ის ჯერად რიცხვებს პარამეტრად.*/
let startButton = document.querySelector('#start');
startButton.addEventListener('click', function() {
	addCells(500 , 500);
    
});
/* 5. შექმენით ფუნქცია addCounter რომელიც მასივში ჩაწერს ყველა 
.cell ელემენტს (let cells = document.querySelectorAll('.cell')) 
შემდეგ გაივლის ამ მასივში და თითოეულ ელემენტს მიამაგრებს click ივენთს ისე, 
რომ ამ ელემენტზე დაჭერისას მასში ჩაწერილი რიცხვი უნდა გაიზარდოს.
მაგალითად თუ ელემენტში წერია რიცხვი 0, დაჭერის შემდეგ გახდეს 1,
კიდევ დაჭერის შემდეგ 2 და ა.შ. */
function addCounter(){
    var cells = document.querySelectorAll('.cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
            this.innerHTML = (this.innerHTML *1) +1;
            checkSum();
         });

    }

}
/* 6*. შექმენით ფუნქცია checkSum, რომელიც ყოველი 
.cell ღილაკზე დაჭერის შემდეგ შეამოწმებს არის თუ არა 
ყველა უჯრაში ჩაწერილ ციფრთა ჯამი 25 ის ტოლი და თუ 25 
ის ტოლია წაშლის ყველა .cell ელემენტს და გამოიძახებს  addCells 
ფუნქციას ახლიდან რათა ახლიდან დაგენერირდეს უჯრები. */
function checkSum(){
    var cells = document.querySelectorAll('.cell');
    for (i =0 ; i < cells.length ; i++){
        if(cells[i].innerHTML * 1 == 25){
           var parent = document.querySelector('#board');
            removeAllChildNodes(parent); 
            addCells(500 , 500);
        }
    }  
   
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

