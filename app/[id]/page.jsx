import Image from "next/image";
export default async function MovieDetails({ params }) {
    const { id } = params;
    const image_path = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    const res = await data.json();
    return (
        <div>
            <h1 className="text-2xl">{res.title}</h1>
            <h2 classname="text-lg">{res.release_date}</h2>
            <h2 classname="text-lg">RunTime: {res.runtime} minutes</h2>
            <h2 classname="text-lg">Rating: {res.vote_average}</h2>
            <h2 classname="test-sm bg-green-600 inline-block my-2 py-2 px rounded">
                {res.status}
            </h2>
            <Image
                className="my-12 w-full"
                src={image_path + res.backdrop_path}
                width={1000}
                height={1000}
            />
            <p className="text-lg">{res.overview}</p>
        </div>
    );
}
