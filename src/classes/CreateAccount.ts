import Validators from '@/utils/Validators';

class CreateAccount {
  public checkFirstNameValue(value: string) {
    if (!Validators.required(value)) {
      return this.invalid();
    }

    if (!Validators.minLength(value)) {
      return this.invalid();
    }

    if (!Validators.onlyLetters(value)) {
      return this.invalid();
    }

    return this.valid();
  }

  public checkLastNameValue(value: string) {
    if (!Validators.required(value)) {
      return this.invalid();
    }

    if (!Validators.minLength(value, 3)) {
      return this.invalid();
    }

    if (!Validators.onlyLetters(value)) {
      return this.invalid();
    }

    return this.valid();
  }

  public checkUsernameValue(value: string) {
    if (!Validators.required(value)) {
      return this.invalid();
    }

    if (!Validators.minLength(value, 5)) {
      return this.invalid();
    }

    return this.valid();
  }

  public checkEmailValue(value: string) {
    if (!Validators.required(value)) {
      return this.invalid();
    }

    if (!Validators.minLength(value)) {
      return this.invalid();
    }

    if (!Validators.includesSymbolEmail(value)) {
      return this.invalid();
    }

    return this.valid();
  }

  public checkPasswordValue(value: string) {
    if (!Validators.required(value)) {
      return this.invalid();
    }

    if (!Validators.requiredPassword(value)) {
      return this.invalid();
    }

    return this.valid();
  }

  public checkPasswordRepeatValue(passwordValue: string, repeatValue: string) {
    if (!Validators.required(repeatValue)) {
      return this.invalid();
    }

    if (!Validators.requiredPassword(repeatValue)) {
      return this.invalid();
    }

    if (!(passwordValue === repeatValue)) {
      return this.invalid();
    }

    return this.valid();
  }

  private valid() {
    return true;
  }

  private invalid() {
    return false;
  }
}

export default CreateAccount;
