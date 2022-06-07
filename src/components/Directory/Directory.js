import React, { useEffect } from "react";
import DirectoryItemPreview from "../DirectoryItemPreview/DirectoryItemPreview";
import { addCollectionAndDocuments } from "../../utils/firebase";
import { StyledDirectoryContainer } from "./styles";
import SHOP_DATA from "../../shop-data";

const Directory = () => {
    const CATEGORIES = [
        {
            id: 1,
            title: "Mens",
            imageUrl:
                "https://www.mvmt.com/on/demandware.static/-/Sites-MVMTUS-Library/default/dw4c424453/content-assets/Interstitial/MensWatches.jpg",
            route: "shop/mens",
        },
        {
            id: 2,
            title: "Womens",
            imageUrl:
                "https://www.mvmt.com/on/demandware.static/-/Sites-MVMTUS-Library/default/dwb64fd86e/content-assets/Interstitial/WomensWatches.jpg",
            route: "shop/womens",
        },
    ];

    useEffect(() => {
        addCollectionAndDocuments("categories", SHOP_DATA);
    }, []);

    return (
        <StyledDirectoryContainer>
            {CATEGORIES.map((category) => (
                <DirectoryItemPreview
                    key={category.id}
                    title={category.title}
                    imageUrl={category.imageUrl}
                    route={category.route}
                />
            ))}
        </StyledDirectoryContainer>
    );
};

export default Directory;
