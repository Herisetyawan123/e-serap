import "./categories.scss"
import GridContainer from "./grid-container/grid-container";
import GridItem from "./grid-item/grid-item";
import CardCategory from "./card-category/card-category";
import Data from "./categories.fixture"
const SectionCategory = () => {

    return (
        <div className={"section__category"}>
            <h4>Kategori</h4>

            <GridContainer className={"mt-1"}>
                {
                    Data.map((item) => (
                        <GridItem>
                            <CardCategory img={item.img} label={item.label} />
                        </GridItem>
                    ))
                }
            </GridContainer>
        </div>
    )
}

export default SectionCategory;