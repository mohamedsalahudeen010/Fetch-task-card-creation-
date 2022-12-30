let container = document.createElement("div");
container.setAttribute("class", "container");

let row = document.createElement("div");
row.setAttribute("class", "row");


container.append(row);

var res = fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((data1) => {
    console.log(data1);
    
    for (let i = 0; i <data1.length; i++) {
    //   console.log(`CountryName: ${data1[i].name.common} || Capital: ${data1[i].capital} || ${data1[i].region}
    // || Countrycode: ${data1[i].fifa} || Lattitude: ${lat} || Longitude:${lon}`)
      var name=data1[i].name.common;
    var lat=data1[i].latlng[0];
      var lon=data1[i].latlng[1];

      row.innerHTML += `<div class="col-lg-4","col-sm-12","col-md-4">
      <div class="main">
      <div id="card${i}" class="card">
      <div class="card-header"><h6>${data1[i].name.common}</h6></div>
          <img class="flag" src="${data1[i].flags.png}"  alt="Country Flags"  >
          <div class="card-body">
            <h5 class="card-title">Capital: ${data1[i].capital}</h5>
            <h5 class="card-title">Region: ${data1[i].region}</h5>
            <h5 class="card-title">Countrycode: ${data1[i].fifa}</h5>
            <h5 class="card-title">Lattitude: ${lat}</h5>
            <h5 class="card-title">Longitude:${lon} </h5>
            <button type="button" onclick="opendata(${i},${lat},${lon})" class="btn btn-secondary">Click for Weather</button>
            
      </div>
      </div>
      </div>`;
      document.body.append(container);
    }
  }).catch((error)=>console.log(error));

// function restdata2(){
     
//       var res=fetch("https://restcountries.com/v3.1/all")
//       .then((data)=>data.json())
//       .then((data1)=>{
//         try {
//           for(var i=0;i<33;i++){
//           var name=data1[i].name;
//           var lat=data1[i].latlng[0];
//           var lon=data1[i].latlng[1];
          
          
//           }
//           opendata(name,lat,lon);
//       } catch (error) {
//           console.log("invalid"+error.message);
//       }
//       })
      
//       }


  function opendata(i,lat,lon){
    var res1=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`)
    .then((data2)=>data2.json())
    .then((data3)=>{ 
   console.log(data3)
   console.log(data3.main.temp);
    
    
    let weather1=document.getElementById(`card${i}`);
    let weather2=document.createElement("div");
    weather2.setAttribute("id","temp")
    weather1.append( weather2);
    weather2.innerHTML=`Temperature is : ${data3.main.temp}`;
   
    })
  
  }
