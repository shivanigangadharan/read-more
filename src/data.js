const bookdata = [
    {
        bname: "Murder on the Orient Express",
        description: "A gripping murder mystery novel where detective Poirot identifies the murderer on the train.",
        rating: "7.5/10",
        author: "Agatha Christie",
        genre: "Fiction",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/A1yJJsWiaSL._RI_.jpg",
    },
    {
        bname: "The Great Gatsby",
        description: "This book tells the tragic story of Jay Gatsby and his pursuit of a young woman whom he loved in his youth.",
        rating: "8.5/10",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81djg0KWthS.jpg",
    },
    {
        bname: "Jane Eyre",
        description: "Jane Eyre is the story of a young orphan being raised by Mrs. Reed, her cruel, wealthy aunt.",
        rating: "8.5/10",
        author: "Charlotte Brontë",
        genre: "Fiction",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91zU70Aw9IS.jpg",
    },
    {
        bname: "Nineteen Eighty-Four",
        description: "The novel examines a futuristic society, called the World State, that revolves around science and efficiency.",
        rating: "8.5/10",
        author: "George Orwell",
        genre: "Fiction",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
    },
    {
        bname: "The Richest Man in Babylon",
        description: "This book dispenses financial advice through a collection of parables set 4,000 years ago in ancient Babylon.",
        rating: "8.5/10",
        author: "George Samuel Clason",
        genre: "Finance",
        imgUrl: "https://m.media-amazon.com/images/I/51pYZS7IWcL.jpg",
    },
    {
        bname: "I Will Teach You to Be Rich",
        description: "This book presents a 6-week program that'll help you to start managing your money better and live a more fulfilling life.",
        rating: "8.5/10",
        author: "Ramit Sethi",
        genre: "Finance",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81WY8INey8L.jpg",
    },
    {
        bname: "Most and More",
        description: "The author tries to explain some theories of life based on a character called 'Avyakta-the unknown' on various aspects of life.",
        rating: "8.5/10",
        author: "Mahatria Ra",
        genre: "Self-development",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41rV44SfHTL._SX335_BO1,204,203,200_.jpg"
    },
    {
        bname: "The Alchemist",
        description: "The Alchemist follows the journey of an Andalusian shepherd boy. He asks a Gypsy fortune-teller in the nearby town about its meaning.",
        rating: "8.5/10",
        author: "Paulo Coelho",
        genre: "Fiction",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
        bname: "Steve Jobs",
        description: "The Biography is an unfiltered account of former Apple CEO Steve Jobs' life, with excerpts from people who knew him well.",
        rating: "8.5/10",
        author: "Walter Isaacson",
        genre: "Biography",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg"
    },
    {
        bname: "Rich Dad Poor Dad",
        description: "This book tells the ways in which the author's dad and his friend's dad shaped his thoughts about money and investing.",
        rating: "9/10",
        author: "Robert Kiyosaki and Sharon Lechter",
        genre: "Finance",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg"
    },
    {
        bname: "The Millionaire Next Door",
        description: "This book identifies seven common traits that show up again and again among those who have accumulated wealth.",
        rating: "7/10",
        author: "Thomas J. Stanley",
        genre: "Finance",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71dpI4OARxS.jpg"
    },
    {
        bname: "Einstein: His Life and Universe",
        description: "In broad terms, the book portrays Einstein as an insolent figure who possessed a strong sense of creativity and independence.",
        rating: "8.5/10",
        author: "Walter Isaacson",
        genre: "Biography",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71e7d9fm8ZL.jpg"
    },
    {
        bname: "Alexander Hamilton",
        description: "As a biography of a great leader, this book tells the story of a gifted and difficult man whose legacy resonates into the present.",
        rating: "6/10",
        author: "Ron Chernow",
        genre: "Biography",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91pJQrBZsQL.jpg"
    },
    {
        bname: "The Second Machine Age",
        description: "This book alters how we think about issues of technological, societal, and economic progress.",
        rating: "8.5/10",
        author: "Andrew McAfee",
        genre: "Technology",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51IKu7QEfhL._SX331_BO1,204,203,200_.jpg"
    },
    {
        bname: "How to Win Friends and Influence People",
        description: "The core idea is that you can change other people's behavior simply by changing your own.",
        rating: "9/10",
        author: "Dale Carnegie",
        genre: "Self-development",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/611OWa8x+WL.jpg"
    },
    {
        bname: "The Power of Positive Thinking",
        description: "A practical, direct-action application of spiritual techniques to overcome defeat and win confidence, success and joy.",
        rating: "8.5/10",
        author: "Norman Vincent Peale",
        genre: "Self-development",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81ND4ZcIsxL.jpg"
    },
    {
        bname: "Megaliving",
        description: "The Megaliving 30 Day Program out-lines the day by day procedure to follow for a perfect and successful life.",
        rating: "8/10",
        author: "Robin Sharma",
        genre: "Self-development",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41u68VH886L.jpg"
    },
    {
        bname: "Eloquent JavaScript",
        description: "Eloquent JavaScript goes beyond the cut-and-paste scripts of the recipe books and teaches you to write code that's elegant and effective.",
        rating: "10/10",
        author: "Marijn Haverbeke",
        genre: "Technology",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
    },
    {
        bname: "The C++ Programming Language",
        description: "This book delivers meticulous and integrated coverage of the entire language―its facilities, standard libraries, and key design techniques.",
        rating: "8.5/10",
        author: "Bjarne Stroustrup",
        genre: "Technology",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51Z-XJXiQnL.jpg"
    },


]
export default bookdata;