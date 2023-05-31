function updateMap(){
    fetch("/data.json")
    .then(response =>response.json())
    .then(rsp =>
        {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude=element.latitude;
                longitude=element.longitude;

                // console.log(rsp);

                cases=element.infected;
                if(cases>255)
                {
                    x="rgb(255,0,0)"
                }
                else
                {
                    x=`rgb(${cases},0,0)`;
                }

                 // Create a default Marker and add it to the map.
                 new mapboxgl.Marker(
                    {
                        color: x,
                    }
                 )
                 .setLngLat([longitude,latitude ])
                 .addTo(map);
                
            });
                  
        });
 
}

updateMap();