const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal == ""){
        city_name.innerText=`Please enter the city before serach`;
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=825e537b5be11a4fa63676ed01cc715e`;
            const response=await fetch(url);
            const data= [await response.json()];
            city_name.innerText=`${data[0].name},${data[0].sys.country}`;
            temp.innerText=data[0].main.temp;
            const tempStatus=data[0].weather[0].main;
               console.log(tempStatus);
            if(tempStatus=="Clear")
            { temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";}
             else if(tempStatus=="Clouds")
            { temp_status.innerHTML="<i class='fas fa-cloud' style='color:#dfe4ea;'></i>";}
            else if(tempStatus=="Rain")
            { temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";}
            else if(tempStatus=="Snow")
            { temp_status.innerHTML="<i class='far fa-snowflake' style='color:#fff;'></i>";}
            else
            { temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";}
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText=`Please enter the proper city name`;
            datahide.classList.add('data_hide');
        }  
    }
}


submitBtn.addEventListener('click',getInfo);