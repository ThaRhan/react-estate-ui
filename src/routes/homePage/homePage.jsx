import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

function HomePage(){
    return(
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        ndoisnvjosdhdvondsjvnbsidbnvoasnbibasvoasvnsdjnvjsdndvonsdv
                        vjsdndvnsvnsodv
                        nsdjvnsdodvinsoivmsoikvnsonvosjnv
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Properties Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}


export default HomePage