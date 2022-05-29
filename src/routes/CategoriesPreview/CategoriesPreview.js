import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/categorySelector";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { StyledContainer } from "./styles";
import { Fade } from "react-reveal";

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <StyledContainer>
            <Fade top cascade>
                {Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}
                        />
                    );
                })}
            </Fade>
        </StyledContainer>
    );
};

export default CategoriesPreview;
