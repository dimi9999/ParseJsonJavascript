console.log($);

// Get Movie Data
// It looks like there is only one film in the url provided so I am adding a bit more my self as above
fetch('https://www.omdbapi.com/?i=tt3896198&apikey=ef773fae')
    .then(response => response.json())
    .then(json => {

        //Convert JSON to array of films
        const films = [];
        films.push(json);


        console.log(films);

        films.forEach(film => {
            const title = film.Title;
            const year = film.Year;
            const rated = film.Rated;
            const released = film.Released;
            const runtime = film.Runtime;
            const genre = film.Genre;
            const director = film.Director;
            const writer = film.Writer;
            const actors = film.Actors;
            const plot = film.Plot;
            const language = film.Language;
            const country = film.Country;
            const awards = film.Awards;
            const poster = film.Poster;
            const metascore = film.Metascore;
            const imdbRating = film.imdbRating;
            const imdbVotes = film.imdbVotes;
            const imdbID = film.imdbID;
            const type = film.Type;
            const dvd = film.DVD;
            const boxoffice = film.BoxOffice;
            const production = film.Production;
            const website = film.Website;
            const response = film.Response;
            let ratings = "";

            //Get all ratings for a film
            let ratingsValues = [];
            film.Ratings.forEach(rating => {
                ratingsValues.push(rating.Value)
            })

            //Concatenate ratings into a string
            ratings = ratingsValues.join(", ");
            console.log(ratingsValues);
            $('#movies').append(
                `
                        <div>   
                            <div class="imgContainer">
                                <img src="${poster}">
                            </div>
                            
                            <div class="filmAttribute">
                            <div>Title:</div>
                            <div>${title}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Year:</div>
                            <div>${year}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Rated:</div>
                            <div>${rated}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Released:</div>
                            <div>${released}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Runtime:</div>
                            <div>${runtime}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Genre:</div>
                            <div>${genre}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Director:</div>
                            <div>${director}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Writer:</div>
                            <div>${writer}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Actors:</div>
                            <div>${actors}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Plot:</div>
                            <div>${plot}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Language:</div>
                            <div>${language}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Country:</div>
                            <div>${country}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Awards:</div>
                            <div>${awards}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Ratings:</div>
                            <div>${ratings}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Metascore:</div>
                            <div>${metascore}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Imdb rating:</div>
                            <div>${imdbRating}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>imdb Votes:</div>
                            <div>${imdbVotes}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>imdb ID:</div>
                            <div>${imdbID}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Type:</div>
                            <div>${type}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Box Office:</div>
                            <div>${boxoffice}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Production:</div>
                            <div>${production}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Website:</div>
                            <div>${website}</div>
                            </div>
                            <div class="filmAttribute">
                            <div>Response:</div>
                            <div>${response}</div>
                        </div>
                        `
            );
        });


    })

    // Input Search
    .catch(err => {
        console.error(err);
        $("#error").append(err)

    })

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#movies div div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});