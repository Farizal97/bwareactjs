
import React from 'react';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';


function App() {
    return (
        <div className = "Parentbox">
        <FotoProduk />
        <ProdukInfo isDiscount = "yes"
        name = "Youdora Dora"
        category = "LEBARAN" />
        <ReviewItems />
        </div>
    );
}


function FotoProduk() {
    return (
    <div className = "Foto" >
        <img src = "bwasneaker.jpg"/>
        </div>
    );
}

function CheckDiscount(props) {
    const { isDiscount,discount } = props;
    if (isDiscount == "yes") {
        return (
        <p>Diskon {discount}% Off</p>
        );
    } else if (isDiscount == "coming") {
        return (
        <p>Akan ada diskon... </p>
        );
    } else {
        return ( <p> Belum ada diskon </p>
        );
    }
}

function ProdukInfo(props) {
    const { category, name, isDiscount } = props;
    const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];
    const listBenefits = benefits.map((itemBenefit) =>
        <li key="{itemBenefit}"> { itemBenefit } </li>
    );
    return (
    <div>
        <div className = "Deskripsi">
        <p className = "Cate" > { category } </p>
        <h1 className = "Title" > { name } </h1>
        <p className = "Price" > IDR 73.309 .399 </p>
        <CheckDiscount isDiscount = { isDiscount } discount={50} />
        <p className = "Info"> One of the most recognizable shoes in the AJ collection,
        the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88.
        Signature details and materials celebrate the game-changing icon.</p>
        <ul> { listBenefits } </ul>
        <a onClick = {
            (e) => TambahCart(name, e)
        }
        href = "#" > Add to Cart </a>
        </div>
        </div>
    );
}

function TambahCart(e) {
    return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
