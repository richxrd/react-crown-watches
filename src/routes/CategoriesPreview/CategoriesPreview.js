import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/categorySelector";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { StyledContainer } from "./styles";

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <StyledContainer>
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
        </StyledContainer>
    );
};

export default CategoriesPreview;
