import Movie from "./movie";

export default async function Home() {
    "https://api.themoviedb.org/3/moviepopular";
    const api = process.env.API_KEY;
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api}`
    );
    const res = await data.json();

    //   console.log(res);
    return (
        <main>
            {/* <h1 className='text-lg py-3 m-4'>hi mom</h1> */}
            <div className="grid gap-16 grid-cols-fluid">
                {res.results.map((movie) => {
                    return (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                        />
                    );
                })}
            </div>
        </main>
    );
}
