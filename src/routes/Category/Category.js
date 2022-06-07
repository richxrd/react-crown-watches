import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/category/categorySelector";
import { ProductContainer, Title } from "./styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Container>
            <Fade triggerOnce duration={500}>
                <Title>{category.toUpperCase()}</Title>
            </Fade>

            <ProductContainer>
                <Fade triggerOnce duration={500}>
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
