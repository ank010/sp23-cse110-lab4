let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars :12,
    raceCars : 5,
    blackCars: 40,
    rarecars: 2,
};


for(const statistic in statistics){
    if(statistics[statistic] % 2 == 1){
        console.log(statistics[statistic]);
    }
    else if(statistic[0] == 'r'){
        console.log(statistics[statistic]);
    }
}

