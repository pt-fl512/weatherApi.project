// 0e93f071c8394387af9212425242206
const input=document.getElementById("search")
const btn=document.getElementById("submit")


btn.addEventListener('click',function(){
    console.log(input.value)
    weathwer(input.value)
})

var AllData=[]
async function weathwer(city){
const respons =await fetch(`http://api.weatherapi.com/v1/search.json?key=0e93f071c8394387af9212425242206&q=${city}`);
const data=await respons.json()
AllData=data;
console.log(AllData)

DisplayData()
}
weathwer()

function DisplayData(){

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const DNum=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    

    var cartona=``;

    for(var i=0 ; i<AllData.length ; i++ )
        cartona+=`
    
    <div class="col-lg-4 col-md-6  col-sm-12 cast ">
                    <div class="today-forcast">
                        <div class="forcast-header d-flex ">
                            <div class="day fs-7" id="day">${days[i]}</div>
                            <div class="date fs-7" id="data">${DNum[i] + monthNames[i]}</div>
                        </div>
                    </div>
                    <div class="forcast-contant ">
                        <div class="location fs-5 pb-5 "id="city">${AllData[i].name}</div>
                        <div class="degree d-flex">
                            <div class="num h1 text-light"id="temp"  >${AllData[i].lat}</div>
                            <div class="icon"><img src="imges/113.png" alt=""></div>
                        </div>
                        <div class="custom fs-5 pt-5 pb-3 text-primary"id="statu" >sunny</div>
                        <div class="pb-5">  
                            <span><img src="imges/icon-compass.png" alt=""> East</span>
                            <span><img src="imges/icon-umberella.png" class="ps-3" alt=""> 20%</span>
                            <span><img src="imges/icon-wind.png" class="ps-3 " alt="">18k/h</span>
                        
                    </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-12 cast-2 ">
                    <div class="today-forcast">
                        <div class="forcast-header text-center">
                            <div class="day fs-7">sunday</div>
                        </div>
                    </div>
                    <div class="forcast-contant text-center">
                         <div class="icon pt-5"><img src="imges/113.png" alt=""></div>

                        <div class="degree text-center">
                            <div class="num h5 text-light ">${AllData[i].lon}</div>
                            <p class="fs-6 text-light">${AllData[i].lat}</p>
                        </div>
                        <div class="custom fs-5 pt-2 pb-3 text-primary">sunny</div>
                        <div class="pb-5">  
                            
                    </div>
                </div>
                </div>
               
                <div class="col-lg-4 col-md-6 col-sm-12 cast ">
                    <div class="today-forcast">
                        <div class="forcast-header text-center">
                            <div class="day fs-7">sunday</div>
                        </div>
                    </div>
                    <div class="forcast-contant text-center">
                         <div class="icon pt-5"><img src="imges/113.png" alt=""></div>

                        <div class="degree text-center">
                            <div class="num h5 text-light ">${AllData[i].lon}</div>
                            <p class="fs-6 text-light">${AllData[i].lat}</p>
                        </div>
                        <div class="custom fs-5 pt-2 pb-3 text-primary">sunny</div>
                        <div class="pb-5">  
                            
                    </div>
                </div>
                </div>




             
            </div>
    
    `
    document.getElementById("forcast").innerHTML=cartona
}
