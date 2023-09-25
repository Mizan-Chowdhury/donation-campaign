import Swal from "sweetalert2";

const checkLocalStorageCondition = () => {
  const storage = JSON.parse(localStorage.getItem("myDonation"));
  if (storage) {
    return storage;
  }
  return [];
};

const saveDonatedCardToLocalStorage = (donatedCard) => {
  const cards = checkLocalStorageCondition();
  const exists = cards.find(card=> card.id === donatedCard.id)
  if (!exists) {
    cards.push(donatedCard);
    localStorage.setItem("myDonation", JSON.stringify(cards));
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `You have already made a generous donation.
      Thank you for your support!`,
    })
  }
};
export { saveDonatedCardToLocalStorage };
