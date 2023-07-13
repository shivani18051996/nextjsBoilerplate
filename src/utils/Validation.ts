// class Validation { // # use for react native
export class Validation {
  // # use for react.js
  /**
   * Regular Expression Method for TextInput Empty
   */

  textInputCheck(txtInput: string) {
    if (txtInput !== undefined) {
      return (
        txtInput !== null &&
        txtInput.trim().length > 0 &&
        txtInput !== undefined
      );
    }
    return false;
  }

  /**
   * Regular Expression Method for TextInput Special Character
   */

  specialCharacterCheck(txtInput: string) {
    const regex = /^[a-zA-Z ]+$/;

    return regex.test(txtInput);
  }

  //---------------------------------------------------
  onChangePlainTextCharacter(txtInput: string) {
    const regex = /[`~,.<>;':"\/\[\]\|{}()=_+\\\\\-!@#$%^&*]/;

    return !regex.test(txtInput);
  }

  onChangeNumberValidate(txtInput: string) {
    const regex = /^[0-9]*$/;

    return regex.test(txtInput);
  }

  onChangePhoneNumberValidate(txtInput: string) {
    const regex = /^[0-9+-]*$/;

    return regex.test(txtInput);
  }

  onChangePriceValidate(txtInput: string) {
    const regex = /^[0-9.]/;

    return regex.test(txtInput);
  }

  onEndPriceValidate(txtInput: string) {
    const regex = /^\d{0,8}(\.\d{1,3})?$/;

    return regex.test(txtInput);
  }

  onChangeFreeTextValidate(txtInput: string) {
    const regex = /[`~<>;':"\/\[\]\|{}()=]/;

    return !regex.test(txtInput);
  }

  onChangeEmailValidate(txtInput: string) {
    const regex = /^[a-zA-Z0-9._@]*$/;

    return regex.test(txtInput);
  }
  //---------------------------------------------------

  allSpecialCharacter(txtInput: string) {
    const regex = /[`~,.<>;':"\/\[\]\|{}()=_+-]/;

    return !regex.test(txtInput);
  }

  onlyNumeric(txtInput: string) {
    const regex = /^[0-9]/;

    return regex.test(txtInput);
  }

  // Email Validation
  isValidEmail(email: string) {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      console.log("---no");
      return false;
    }
    console.log("--yes");
    return true;
  }

  isValidURL(url: string) {
    const regex = /^(https?|http):\/\/[^\s$.?#].[^\s]*$/;

    return regex.test(url);
  }
}

// module.exports = new Validation(); // # use for react native
