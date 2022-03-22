console.log($);

// Get Movie Data
// It looks like there is only one film in the url provided so I am adding a bit more my self as above
fetch('https://www.omdbapi.com/?i=tt3896198&apikey=ef773fae')
    .then(response => response.json())
    .then(json => {

        //Convert JSON to array of films
        const films = [];
        films.push(json);
        films.push({
            Title: "Guardians of the Galaxy Vol. 1",
            Year: "2016",
            Rated: "PG-13",
            Released: "05 May 2017",
            Runtime: "136 min",
            Genre: "Action, Adventure, Comedy",
            Director: "James Gunn",
            Writer: "James Gunn, Dan Abnett, Andy Lanning",
            Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
            Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
            Language: "English",
            Country: "United States",
            Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
            Poster: "https://m.media-amazon.com/images/I/51ZgxqNRqWL._AC_SY450_.jpg",
            Ratings: [
                { "Source": "Internet Movie Database", "Value": "7.6/10" },
                { "Source": "Rotten Tomatoes", "Value": "85%" },
                { "Source": "Metacritic", "Value": "67/100" }
            ],
            Metascore: "67",
            imdbRating: "7.6",
            imdbVotes: "636,391",
            imdbID: "tt3896198",
            Type: "movie",
            DVD: "22 Aug 2017",
            BoxOffice: "$389,813,101",
            Production: "N/A",
            Website: "www.imdb.com",
            Response: "True"
        },
            {
                Title: "An Innocent Man",
                Year: "1985",
                Rated: "PG-13",
                Released: "05 May 1984",
                Runtime: "136 min",
                Genre: "Action, Adventure, Comedy",
                Director: "James Gunn",
                Writer: "James Gunn, Dan Abnett, Andy Lanning",
                Actors: "Tom Selleck, Dave Bautista",
                Plot: "A policeman trying to prove his innocence.",
                Language: "English",
                Country: "United States",
                Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
                Poster: "https://m.media-amazon.com/images/M/MV5BMmE2MTFmYmYtNzQ0Ny00MDQ3LWE0NWQtZGQ0MjZjNjRlYThlXkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_FMjpg_UX1000_.jpg",
                Ratings: [
                    { "Source": "Internet Movie Database", "Value": "7.6/10" },
                    { "Source": "Rotten Tomatoes", "Value": "85%" },
                    { "Source": "Metacritic", "Value": "67/100" }
                ],
                Metascore: "67",
                imdbRating: "7.6",
                imdbVotes: "636,391",
                imdbID: "tt3896198",
                Type: "movie",
                DVD: "22 Aug 2017",
                BoxOffice: "$389,813,101",
                Production: "N/A",
                Website: "www.imdb.com",
                Response: "True"
            },
            {
                Title: "Mohammed Ali",
                Year: "1985",
                Rated: "PG-13",
                Released: "05 May 1984",
                Runtime: "136 min",
                Genre: "Action, Adventure, Comedy",
                Director: "James Gunn",
                Writer: "James Gunn, Dan Abnett, Andy Lanning",
                Actors: "Tom Selleck, Dave Bautista",
                Plot: "A policeman trying to prove his innocence.",
                Language: "English",
                Country: "United States",
                Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
                Poster: "https://goldinauctions.com/ItemImages/000037/37639b_med.jpeg",
                Ratings: [
                    { "Source": "Internet Movie Database", "Value": "7.6/10" },
                    { "Source": "Rotten Tomatoes", "Value": "85%" },
                    { "Source": "Metacritic", "Value": "67/100" }
                ],
                Metascore: "67",
                imdbRating: "7.6",
                imdbVotes: "636,391",
                imdbID: "tt3896198",
                Type: "movie",
                DVD: "22 Aug 2017",
                BoxOffice: "$389,813,101",
                Production: "N/A",
                Website: "www.imdb.com",
                Response: "True"
            },
            {
                Title: "Dark Knight",
                Year: "1985",
                Rated: "PG-13",
                Released: "05 May 1984",
                Runtime: "136 min",
                Genre: "Action, Adventure, Comedy",
                Director: "James Gunn",
                Writer: "James Gunn, Dan Abnett, Andy Lanning",
                Actors: "Tom Selleck, Dave Bautista",
                Plot: "A policeman trying to prove his innocence.",
                Language: "English",
                Country: "United States",
                Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
                Ratings: [
                    { "Source": "Internet Movie Database", "Value": "7.6/10" },
                    { "Source": "Rotten Tomatoes", "Value": "85%" },
                    { "Source": "Metacritic", "Value": "67/100" }
                ],
                Metascore: "67",
                imdbRating: "7.6",
                imdbVotes: "636,391",
                imdbID: "tt3896198",
                Type: "movie",
                DVD: "22 Aug 2017",
                BoxOffice: "$389,813,101",
                Production: "N/A",
                Website: "www.imdb.com",
                Response: "True"
            },
            {
                Title: "Maleficent",
                Year: "1985",
                Rated: "PG-13",
                Released: "05 May 1984",
                Runtime: "136 min",
                Genre: "Action, Adventure, Comedy",
                Director: "James Gunn",
                Writer: "James Gunn, Dan Abnett, Andy Lanning",
                Actors: "Tom Selleck, Dave Bautista",
                Plot: "A policeman trying to prove his innocence.",
                Language: "English",
                Country: "United States",
                Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_FMjpg_UX1000_.jpg",
                Ratings: [
                    { "Source": "Internet Movie Database", "Value": "7.6/10" },
                    { "Source": "Rotten Tomatoes", "Value": "85%" },
                    { "Source": "Metacritic", "Value": "67/100" }
                ],
                Metascore: "67",
                imdbRating: "7.6",
                imdbVotes: "636,391",
                imdbID: "tt3896198",
                Type: "movie",
                DVD: "22 Aug 2017",
                BoxOffice: "$389,813,101",
                Production: "N/A",
                Website: "www.imdb.com",
                Response: "True"
            },
        )

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