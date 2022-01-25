
/* 001 Order Counter Start  */
const fiver_order = document.getElementById('fiver_order');
const counter = document.querySelector('.counter');
const fOrder = document.querySelector('#fOrder');
const countCom = document.querySelector('.countCom')
// console.log(fOrder);

fiver_order.addEventListener('submit', function (e) {
    e.preventDefault();
    
    

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

    let start_timeAbs = new Date();
    let end_timeAbs = new Date(date + " " + time);
    let time_diffAbs = end_timeAbs.getTime() - start_timeAbs.getTime() ;

    console.log(time_diffAbs);

    if( time_diffAbs < 0){
        // clearInterval();
        counter.innerHTML = `<p>Preivious date will not counted</p>`;
        counter.style="background-color: red;color: #fff;font-size: 16px;margin-top: 15px;padding:8px";
        countCom.innerHTML = ``;
    }else if(date == "" || time == "" ){
        // clearInterval();
        counter.innerHTML = `<p>Please Input Correct Date & Time</p>`;
        counter.style="background-color: red;color: #fff;font-size: 16px;margin-top: 15px;padding:8px";
        countCom.innerHTML = ``;
        
    }else{
        // counter.innerHTML = "";
        fOrder.style.pointerEvents = `none`; 
        
        let inte = setInterval(() => {
            let start_time = new Date();
            let end_time = new Date(date + " " + time);

            // let time_diff = Math.abs(end_time.getTime() - start_time.getTime()) ;
            let time_diff = end_time.getTime() - start_time.getTime() ;


            let seconds = Math.floor(time_diff/1000);
            let minutes = Math.floor(seconds/60); 
            let hours =Math.floor(minutes/60); 
            let days =Math.floor(hours/24); 

            let nethours = hours - (days * 24);
            let netminutes = minutes - (days * 24 * 60) - (nethours * 60);
            let netseconds = seconds - (days * 24 * 60 * 60) - (nethours * 60 * 60) - (netminutes * 60);
            
            counter.innerHTML = `
            <span id="day">${zero(days) + ':'} </span>
            <span id="hour">${zero(nethours) + ':'}</span>
            <span id="min">${zero(netminutes) + ':'} </span>
            <span id="sec">${zero(netseconds)}</span>
            `; 
            counter.style="background-color: green; color: #fff;";
            
            if(seconds < 1){
                clearInterval(inte);
                countCom.innerHTML = `<p>counter is compoit`;
                countCom.style="background-color: green;color: #fff;font-size: 16px;margin-top: 10px;";
                fOrder.style.pointerEvents = `inherit`; 
            }
            // console.log(time_diff );


        },1000);

    }

});
/* 001 Order Counter End  */

// ********************************************************************

/* 002 Bsic ToDo Start  */

const do_form = document.getElementById('do_form');
const list_group = document.getElementById('list_group');
// console.log(do_form);
do_form.addEventListener('submit', function(e) {
    e.preventDefault();

    let do_name = this.querySelector('input[name="do-name"]').value;
    let opt = this.querySelector('select[name="opt"]').value;
    
    if(do_name == "" || opt == ""){
        alert('All fild are required');
    }else{
        let li = document.createElement('li');
        li.classList = "list-group-item";
        // li.classList = "doflex:";
        
        

        let closebtn = document.createElement('button');
        closebtn.innerHTML = "&times;";
        closebtn.classList = "close";

        let selectspan = document.createElement('span');
        selectspan.innerHTML = opt ;
        selectspan.style.marginLeft = '20px';

        let dotext = document.createTextNode(do_name);
        // let opttext = document.createTextNode(opt);

        li.appendChild(closebtn);
       
        li.insertBefore(dotext, closebtn);
        li.insertBefore(selectspan, closebtn);
        //dotext is inserted befor closebtn
        list_group.appendChild(li);

        this.querySelector('input[name="do-name"]').value = "";

        closebtn.addEventListener('click', function(){
            this.parentElement.remove();
        })
    }

    

    

    // console.log(list_group);

});
 /* 002 Bsic ToDo End  */
 
// ****************************************************************************

// 003 Age Calculator start

const ageName = document.getElementById('ageName').value;
const ageBirthDate = document.getElementById('ageBirthDate').value;
const ageCurrentDate = document.getElementById('ageCurrentDate').value;

const ageSubmit = document.getElementById('ageSubmit');
const ageResult = document.getElementById('ageResult');

const ageInputMess = document.getElementById('ageInputMess')

const ageNamegg = document.getElementById('ageName');

ageNamegg.addEventListener('blur', () => {
    if(ageNamegg.value == ''){
        ageNamegg.style.border = '1px solid red';
    }else{
        ageNamegg.style.border = '';
    }
    
})

ageSubmit.addEventListener('submit', function (e) {
    e.preventDefault();

    if(ageName == "" || ageBirthDate == "" || ageCurrentDate == ""){
        ageInputMess.innerHTML = `
        <span class="bg-warning text-white ">All data required</span>
        `;
        ageResult.innerHTML = `
        <div class="card-body  mt-5">
        <h2 class="card-title">Hay, Please input all data</h2>
        </div>
        
        `;
        // ageInputMess.classList = "bg-warning";
        

    }else{
        
        let ageBirth = new Date(ageBirthDate).getTime();
        let ageCalDate = new Date(ageCurrentDate).getTime();

        let ageTDiff =  ageCalDate - ageBirth ;

        let liMo = 30.4375; // per four year 1461 as par month's days value
        let fullseconds = Math.floor(ageTDiff / 1000); 
        let fullminutes = Math.floor(fullseconds / 60);  
        let fullhours = Math.floor(fullminutes / 60); 
        let fulldays = Math.floor(fullhours / 24); 
        let fullmonths = Math.floor(fulldays / liMo ); 
        let years = Math.floor(fullmonths / 12);  
        // year get net value after useing Math.abs

        let ageNetmonths = fullmonths - (years * 12) ;
        let ageNetdays = fulldays - (years * 12 * liMo) - (ageNetmonths * liMo);
        let ageNethours = fullhours - (years * 12 * liMo * 24) - (ageNetmonths * liMo * 24) - (ageNetdays * 24);
        let ageNetminutes = fullminutes - (years * 12 * liMo * 24 * 60) - (ageNetmonths * liMo * 24 * 60) - (ageNetdays * 24 * 60 ) - (ageNethours * 60);
        let ageNetseconds = fullseconds - (years * 12 * liMo * 24 * 60 * 60) - (ageNetmonths * liMo * 24 * 60 *60) - (ageNetdays * 24 * 60 * 60) - (ageNethours * 60 * 60) - (ageNetminutes * 60);

        // for month and days result
        let extmonthCal = Math.floor(  ((((ageTDiff / 1000)/ 60)/60)/24)/liMo  ); // 12
        let extDayCal = ((((ageTDiff / 1000)/60)/60)/24); //365
        let extdayforMonth = Math.floor( extDayCal - (extmonthCal * liMo)  ) ;

        // for weak and days result
        let extweakCal = Math.floor(  ((((ageTDiff / 1000)/ 60)/60)/24)/7   ) ; // 52
        let extdayforWeak = Math.floor( extDayCal - ( extweakCal * 7 )   );


        
        console.log(extdayforWeak);

        ageResult.innerHTML = `
            <div class="card-body bg-info">
            <h2 class="card-title">Hi ${ageName} Your Result on progress.....</h2>
            </div>
        `;

        let ageCalResult = setTimeout( () => {
            ageResult.innerHTML = `
            <div class="card-header bg-primary text-white">
            <h4 >Hi ${ageName}</h4>
            
            </div>
            <div class="card-body bg-success text-white">
                <span>Your Age Details is bellow</span>
                <h3 class="card-title">Your date of Birth is ${ageBirthDate}</h3>
                <span class="d-block mt-2">Age:</span>
                <span class="d-block mt-2">${years} years ${ageNetmonths} months ${Math.floor(ageNetdays)} days</span>
                <span class="d-block mt-2">or ${extmonthCal} months ${extdayforMonth} days</span>
                <span class="d-block mt-2">or ${extweakCal} weeks ${extdayforWeak} days</span>
                <span class="d-block mt-2">or ${fulldays} days</span>
                <span class="d-block mt-2">or ${fullhours} hours</span>
                <span class="d-block mt-2">or ${fullminutes} minutes</span>
                <span class="d-block mt-2">or ${fullseconds} seconds</span>
            </div>
            <div class="card-footer agewelMess bg-info text-white">
                <span>${ageName}, Thanks for using our App</span>
            </div>
            `;
            

        },2000);
        // ageName.value = "" ;
        // ageBirthDate.value = "" ;
        // ageCurrentDate.value = "" ;


        
    }

    
    // console.log(years + " " + ageNetmonths + " " + ageNetdays +
    //  " " + ageNethours + " " + ageNetminutes + " " + ageNetseconds );
    //  console.log(fullmonths);


    

});
// 003 Age Calculator End 
