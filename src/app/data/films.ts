
import { Type } from "@angular/compiler";
import { TypeFilmsI } from "../models/interfaces.js";


export const actionFilms : TypeFilmsI = {
    section: "Action",
    films : [
        {
            title: "ejercitos muertos",
            image: "ejercitomuertos.jpg"
        },
        {
            title: "el protector",
            image: "elprotector.webp"
        },
        {
            title: "Kill Bill 2",
            image: "killbill2.webp"
        },
        {
            title: "terminator 2",
            image: "terminator2.webp"
        },
        {
            title: "world warz",
            image: "worldwarz.webp"
        },
    ]
}

export const comedyFilms: TypeFilmsI = {
    section: "Comedy",
    films: [
        {
            title: "Family Guy",
            image: "family guy.webp"
        },
        {
            title: "RickandMorty",
            image: "rickandmorty.webp"
        },
        {
            title: "Scary Movie 3",
            image: "scarymovie3.webp"
        },
    ]
}

export const top5 : TypeFilmsI = {
    section: "Top5",
    films: [
        {
            title: "1-titanes",
            image: "1-titanes.webp"
        },
        {
            title: "2-lostinspace",
            image: "2-lostinspace.webp"
        },
        {
            title: "3-blacklist",
            image: "3-blacklist.webp"
        },
        {
            title: "4-ricos",
            image: "4-ricos.webp"
        },
        {
            title: "5-gooddoctor",
            image: "5-gooddoctor.webp"
        },
    ]
}