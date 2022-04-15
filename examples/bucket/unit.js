// https://www.youtube.com/watch?v=FDch-tr_P5A&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE

let cart = {
  'product_1': 1,
  'product_2': 2
};

document.onclick = event => {
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  }
  renderCart();
}

const plusFunction = id => {
  cart[id]++;
}
const minusFunction = id => {
  if (cart[id] - 1 === 0) {
    deleteFunction(id);
    return true;
  }
  if (cart[id]) {
    cart[id]--;
  }
}

const deleteFunction = id => {
  delete cart[id];
}

renderCart = () => {
  console.log(cart);
}