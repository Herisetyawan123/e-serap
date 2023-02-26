import "./app.scss";
import SectionSlide from "../../components/section/SlideHome/Slide";
import SectionCategory from "../../components/section/categories/categories";

function App() {
    return (
        <div className="full__page">
            <SectionSlide />
            <SectionCategory />
        </div>
    )
}

export default App
