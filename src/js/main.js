const link = 'https://kinobd.ru/api/films';
const root = document.getElementById("preview-cards");
let store = {
    nameRussian: '',
    smallPoster: '',
    ratingKp: 0,
    yearStart: 0,
    countryRu: '',
    genres: [0]
}

const fetchData = async() => {
    const result = await fetch(link);
    const dataset = await result.json();

    const datamata = dataset.data;
    const {
        name_russian: nameRussian,
        name_original: nameOriginal,
        small_poster: smallPoster,
        year_start: yearStart,
        time_minutes: timeMinutes,
        genres: genres,
        name_ru: nameRu,
    } = datamata;

    store = {
        ...store,
        nameRussian,
        nameOriginal,
        smallPoster,
        yearStart,
        timeMinutes,
        genres,
        nameRu
    };

    //const renderComponent = () => {
    //    markup(datamata);
    //}
    //renderComponent()
    function asd() {
        let films = datamata.map(({ name_russian, name_original, small_poster }) => name_russian + ' ' + name_original)

        films.forEach(film => {
            const movieEl = document.createElement('div');
            movieEl.classList.add("grid__item");
            movieEl.classList.add("-ibg");
            movieEl.innerHTML = `
                    ${film}
                `
            console.log(film);

            root.appendChild(movieEl)
        });

    }
    asd()
};

//const markup = (data) => {

//    data.forEach((element) => {
//        const { nameRussian, nameOriginal, smallPoster, yearStart, timeMinutes, genres } = store;
//        const movieEl = document.createElement('div');
//        movieEl.classList.add("grid__item");
//        movieEl.classList.add("-ibg");
//        element = movieEl;
//        element.innerHTML =
//            `
//               ${data.nameRussian}

//          `;

//        //element.innerHTML =
//        //    `
//        //        ${nameRussian}
//        //         ${nameOriginal}
//        //        <img src='${smallPoster}'/>
//        //        ${yearStart}
//        //        ${timeMinutes}
//        //   `;
//        console.log(data[0].nameRussian);

//        root.appendChild(element)
//    });

//}

//function showMovies(data) {
//    const moviesEL = document.querySelector('.main__grid');

//    data.forEach((movie) => {
//        const movieEl = document.createElement('div');
//        movieEl.classList.add("grid__item");
//        movieEl.innerHTML = `
//            ${nameRussian} , ${nameOriginal}
//            <img src='${smallPoster}'/>
//            ${yearStart}
//            ${timeMinutes}
//            ${genres.map(({ name_ru: nameRu }) => (' ' + nameRu))}
//        `;
//        moviesEL.appendChild(movieEl)
//    });
//}



fetchData();