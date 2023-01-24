import { ProductData } from "../Utils/Data.js";
import { ContainProduct } from "./Nodes.js";
import { ProductDataNew } from "../Utils/Data.js";
import { ContainProductNew } from "./Nodes.js";


const templateCard = (ProductsTypeFigures) => {
    return`
                <div class="Card">
                    <figure class="ContainImgCard">
                        <img src="Public/Assets/Products/Figures/${ProductsTypeFigures.Url}" alt="" class="ImgCard" >
                    </figure>
                    <h2 class="NameProductCard">${ProductsTypeFigures.Name}</h2>
                    <div class="ProductPrice">
                        <p class="PriceCard">${ProductsTypeFigures.Price}</p>
                        <button id="ButtonModal" class="ButtonBuyCard">
                            <img class="BuyCardImg" src="./Public/Assets/LogosIcons/CartShopping.png" alt="">
                        </button>
                    </div>
                </div>
    `
}

const templateCardNew = (ProductsTypeRing) => {
    return`
                <div class="Card">
                    <figure class="ContainImgCard">
                        <img src="Public/Assets/Products/Rings/${ProductsTypeRing.Url}" alt="" class="ImgCard" >
                    </figure>
                    <h2 class="NameProductCard">${ProductsTypeRing.Name}</h2>
                    <div class="ProductPrice">
                        <p class="PriceCard">${ProductsTypeRing.Price}</p>
                        <button id="ButtonModal" class="ButtonBuyCard">
                            <img class="BuyCardImg" src="./Public/Assets/LogosIcons/CartShopping.png" alt="">
                        </button>
                    </div>
                </div>
    `
}

const View = () => {
    const ViewCards = ProductData.map ((ProductsTypeFigures) => templateCard (ProductsTypeFigures));
    ContainProduct.innerHTML = ViewCards.join("");
}

const ViewTwo = () => {
    const ViewNewCards = ProductDataNew.map((ProductsTypeRing) => templateCardNew (ProductsTypeRing));
    ContainProductNew.innerHTML = ViewNewCards.join("")
}

export {ViewTwo}

export {View}