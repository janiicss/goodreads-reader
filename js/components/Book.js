class Book{
    constructor({
            title = '',
            authors= [],
            rating= 0,
            image =  'http://picsum.photos/300/300'
        }
     ){
       this.title = title;
       this.authors = authors;
       this.rating = rating;
       this.image = image;
    }
    render() {
        return `
            <article class="book">
                <h2 class="book__title">${this.title}</h2>
                <p>${this.authors.map(name => name).join(', ')}</p>
                <figure>
                    <img src="${this.image}" alt="Book Thumbnail">
                </figure>
            </article>
        `;
    }    
}

export default Book;

