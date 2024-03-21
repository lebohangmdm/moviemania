const Movies = () => {
  return (
    <section>
      <div className="container-center">
        <p className="text-xl mb-6">12 movies</p>

        <div className="grid items-center justify-center gap-6  sm:grid-cols-2  md:gap-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 ">
          <a href="">
            <article>
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="batman"
                className="object-cover"
              />
              <div className="flex items-center justify-between mt-2">
                <p className="text-xl text-stone-800">Batman</p>
                <p className="text-xl text-stone-800">2020</p>
              </div>
            </article>
          </a>
          <a href="">
            <article>
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="batman"
              />
              <div className="flex items-center justify-between">
                <p>batman</p>
                <p>2020</p>
              </div>
            </article>
          </a>
          <a href="">
            <article>
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="batman"
              />
              <div className="flex items-center justify-between">
                <p>batman</p>
                <p>2020</p>
              </div>
            </article>
          </a>
          <a href="">
            <article>
              <img
                src="https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="batman"
              />
              <div className="flex items-center justify-between">
                <p>batman</p>
                <p>2020</p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Movies;
