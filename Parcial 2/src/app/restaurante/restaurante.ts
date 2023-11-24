export class Restaurante {
    id: number;
    name: string;
    opening_year: string;
    country: string;
    cuisine: string;
    rating: number;
    description: number;
    image: string;

    constructor (id: number,
                name: string,
                opening_year: string,
                country: string,
                cuisine: string,
                rating: number,
                description: number,
                image: string) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                    this.image = image;
                    this.opening_year = opening_year;
                    this.country = country;
                    this.cuisine = cuisine;
                    this.rating = rating;
        
                }
}
