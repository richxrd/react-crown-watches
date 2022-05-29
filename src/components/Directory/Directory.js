import React from "react";
import DirectoryItemPreview from "../DirectoryItemPreview/DirectoryItemPreview";
import { StyledDirectoryContainer } from "./styles";

const Directory = () => {
    const CATEGORIES = [
        {
            id: 1,
            title: "Mens",
            imageUrl:
                "https://images.unsplash.com/photo-1535891169584-75bcaf12e964?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        },
        {
            id: 2,
            title: "Womens",
            imageUrl:
                "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        },
    ];

    return (
        <StyledDirectoryContainer>
            {/* Categories - Mens, Womens */}
            {CATEGORIES.map((category) => (
                <DirectoryItemPreview
                    key={category.id}
                    title={category.title}
                    imageUrl={category.imageUrl}
                />
            ))}
        </StyledDirectoryContainer>
    );
};

export default Directory;
