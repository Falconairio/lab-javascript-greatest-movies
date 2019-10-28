/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
    function ratesAverage(array) {
        var allRates = 0; 
        array.forEach(function(element) {
            allRates += parseFloat(element.rate);
        }); 
        return parseFloat(allRates/array.length);
    }
// Iteration 2: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(array) {
        var dramaRateCount = 0;
        var dramaCount = 0;
        for(let i = 0; i < array.length; i++){
            if (array[i].genre.includes("Drama")) {
                dramaRateCount += array[i].rate;
                dramaCount +=1;

            }
        }
        if(dramaCount != 0) {
            return parseFloat((dramaRateCount/dramaCount).toFixed(2));
        } else {
            return 0;
        }
    }
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
    function orderByYear(array) {
        // let sortedArray = [];
        // while(sortedArray.length<array.length){
        //     let smallYear = 0;
        //     for(let i = 0; i < array.length; i++) {
        //         if(array[i].year > smallYear) {
        //             sortedArray.unshift(array[i]);
        //             smallYear = array[i];
        //         }
        //     }
        // }
        var sortedArray = array.sort((a, b)=>{
            if(a.year != b.year) {
                return a.year-b.year;
            }
            else {
                return a.title.localeCompare(b.title)
            }
        })  
        return sortedArray;
    }
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
    function howManyMovies(array) {
        let stephenMovies = array.filter(function(element) {
            return element.director=='Steven Spielberg'
        })
        let stephenDrama = stephenMovies.filter(function(element) {
            return element.genre.includes('Drama')
        })
        return stephenDrama.length;
    }

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(array) {
        var alphaArray = array.sort(function(a,b) {
            var aTitle = a.title;
            var bTitle = b.title;
            return aTitle.localeCompare(bTitle);
        })
        alphaArray = alphaArray.slice(0,20);
        var titleArray = [];
        for(let i = 0; i < alphaArray.length; i++) {
            titleArray.push(alphaArray[i].title);
        }
        return titleArray;
    }
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(array) {
        var newArray = array.map(function(movie) {
            var movieCopy =Object.assign({},movie);
            return movieCopy;
        }); 
        //var newArray = array.slice(0, array.length);
        newArray.forEach(function(element) {
            var hours;
            var minutes;
            var currentDuration = element.duration;
            if(currentDuration.indexOf("h") === -1) {
                hours = 0;
            } else {
                hours = parseInt(currentDuration.slice(0,1));
            }
            if(currentDuration.indexOf("min") === -1) {
                minutes = 0;
            } else {
                minutes = parseInt(currentDuration.slice(currentDuration.indexOf("h") + 1, currentDuration.indexOf("min")));
            }
            element.duration = parseInt((hours * 60) + minutes);
        })
        return newArray;
    }
// BONUS Iteration: Best yearly rate average - Best yearly rate average
    function bestYearAvg(array) {
        var bestYears = [];
        var yearsSorted = orderByYear(array);
        for(let i = 1921; i <= 2017; i++) {
            bestYears.push()
        }
        if(bestYears.length === 0) {
            return null; 
        }
        if(bestYears.length === 1) {
            return("The best year was " + bestYears[0].year  + " with an average rate of " + bestYears[0].rate)
        }
    }
