import { useState } from "react"
import { useNavigate } from "react-router-dom"; 
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { useEffect } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovies, getPopularPeoples, getPopularSeries, getTopMovies, getTopSeries } from "../../services/getData";

function Home() {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [popularPeoples, setPopularPeoples] = useState();

    useEffect(() => {
        async function getAllData() {
            setMovie(await getMovies())
            setTopMovies(await getTopMovies())
            setTopSeries(await getTopSeries())
            setPopularSeries(await getPopularSeries())
            setPopularPeoples(await getPopularPeoples())
        }

        getAllData()
    }, [])


    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista ao Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
            {topSeries && <Slider info={topSeries} title={'Top Series'}/>}
            {popularSeries && <Slider info={popularSeries} title={'Series Populares'}/>}
            {popularPeoples && <Slider info={popularPeoples} title={'Artistas Populares'}/>}
        </>
    )
}

export default Home