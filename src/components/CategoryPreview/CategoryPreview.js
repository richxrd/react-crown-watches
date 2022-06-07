import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { StyledContainer, StyledPreview, StyledTitle } from "./styles";

const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${title}`);
    };

    return (
        <StyledContainer>
            <Fade triggerOnce cascade duration={500}>
                <StyledTitle onClick={handleClick}>
                    {title.toUpperCase()}
                </StyledTitle>

                <StyledPreview>
                    {products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </StyledPreview>
            </Fade>
        </StyledContainer>
    );
};

export default CategoryPreview;
