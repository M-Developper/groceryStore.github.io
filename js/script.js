let searchButton = document.getElementById('search-button');
let navbarButton = document.getElementById('navbar-button');
let searchForm = document.querySelector('.header .search-form');
let navbarMenu = document.querySelector('.header .navbar-links');
let searchFormCloser = document.getElementById('search-form-closer');
let likes = document.querySelectorAll('.products .box .fa-heart');
let addProductBtn = document.querySelector('.products-detail .box .plus');
let viewButtons = document.querySelectorAll('.products .box .view-btn');
let productsDetails = document.querySelectorAll('.products-detail .box');
let productsDetailsBg = document.querySelector('.products-detail');

// Display Product Dtails
viewButtons.forEach(btn => {
    btn.onclick = () => {
        productsDetailsBg.style.display = 'flex';
        let name = btn.getAttribute('data-name');
        productsDetails.forEach(product => {
            let target = product.getAttribute('data-target');
            if (name == target) product.classList.add('display');
        });
    } 
});
// Product Details Closer
productsDetails.forEach(proDet => {
    proDet.querySelector('.fa-times').onclick = () => {
        proDet.classList.remove('display');
        productsDetailsBg.style.display = 'none';
    }
});
// Search From Displayer
searchButton.addEventListener('click', () => {
    navbarMenu.classList.remove('display');
    searchForm.classList.add('display');
});
// Navbar Links From Displayer
navbarButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('display');
});
// Search From Closer
searchFormCloser.addEventListener('click', () => {
    searchForm.classList.remove('display');
});
// Likes
likes.forEach(like => {
    like.onclick = () => {
        like.classList.toggle('liked');
    }
});
// Show-hide Top Header
window.addEventListener('scroll', () => {
    navbarMenu.classList.remove('display');
    if(window.scrollY > 550)
        document.querySelector('.header .top-header').classList.add('fixed');
    else
    document.querySelector('.header .top-header').classList.remove('fixed');
});
