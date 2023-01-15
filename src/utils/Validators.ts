class Validators {
  public static required(value = '') {
    return value && value.trim();
  }

  public static minLength(value: string, length = 2) {
    return value.length >= length;
  }

  public static onlyLetters(value: string) {
    return value.replace(/[0-9]/g, '');
  }

  public static includesSymbolEmail(value: string) {
    let isInclude = true;

    if (!value.includes('.ru')) {
      isInclude = false;
    }

    if (!value.includes('@')) {
      isInclude = false;
    }

    return isInclude;
  }

  public static requiredPassword(value: string) {
    return new RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    ).test(value);
  }
}

export default Validators;