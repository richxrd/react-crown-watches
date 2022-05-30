import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/category/categorySelector";
import { ProductContainer, Title } from "./styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "@mui/material";
import { Fade } from "react-reveal";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Container>
            <Fade top distance="25px">
                <Title>{category.toUpperCase()}</Title>
            </Fade>

            <ProductContainer>
                <Fade top distance="20px" delay={300}>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </Fade>
            </ProductContainer>
        </Container>
    );
};

export default Category;
