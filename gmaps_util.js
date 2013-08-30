ward_boundary_options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.05
};

ac_boundary_options = {
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 4,
    fillColor: "#00FF00",
    fillOpacity: 0.05
};

pc_boundary_options = {
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.05
};

function clearMap(currentFeature_or_Features){
            if (!currentFeature_or_Features)
                return;
            if (currentFeature_or_Features.length){
                for (var i = 0; i < currentFeature_or_Features.length; i++){
                    if(currentFeature_or_Features[i].length){
                        for(var j = 0; j < currentFeature_or_Features[i].length; j++){
                            currentFeature_or_Features[i][j].setMap(null);
                        }
                    }
                    else{
                        currentFeature_or_Features[i].setMap(null);
                    }
                }
            }else{
                currentFeature_or_Features.setMap(null);
            }
            if (infowindow.getMap()){
                infowindow.close();
            }
}


function showFeature(geojson, style){
            var currentFeature_or_Features = new GeoJSON(geojson, style || null);
            if (currentFeature_or_Features.type && currentFeature_or_Features.type == "Error"){
                console.log(currentFeature_or_Features.message);
                return;
            }
            console.log('Showing features');
            if (currentFeature_or_Features.length){
                console.log('inside');
                for (var i = 0; i < currentFeature_or_Features.length; i++){
                    console.log('loop');
                    //console.log(currentFeature_or_Features[i]);
                    if(currentFeature_or_Features[i].length){
                        console.log('loop2');
                        for(var j = 0; j < currentFeature_or_Features[i].length; j++){
                            //console.log(currentFeature_or_Features[i][j]);
                            currentFeature_or_Features[i][j].setMap(gmap.map);
                            if(currentFeature_or_Features[i][j].geojsonProperties) {
                                setInfoWindow(currentFeature_or_Features[i][j]);
                            }
                        }
                    }
                    else{
                        console.log('else');
                        currentFeature_or_Features[i].setMap(gmap.map);
                    }
                    if (currentFeature_or_Features[i].geojsonProperties) {
                        setInfoWindow(currentFeature_or_Features[i]);
                    }
                }
            }
        return currentFeature_or_Features;
    }
