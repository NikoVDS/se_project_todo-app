import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({
    popupSelector /* This is destructuring the popupSelector property from an object and assigning it to a variable */,
    handleFormSubmit,
  }) {
    super({ popupSelector }); // This is an object literal (it would be the same as { popupSelector: popupSelector }), I'm creating an object and passing the previous destructured variable to the property of that object.
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
}
export default PopupWithForm;
