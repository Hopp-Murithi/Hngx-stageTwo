export const verifyName = (name:string) => {
    if (!name) {
      return { message: "Name is required" };
    } else if (name.length < 3 || name.length > 20) {
      return { message: "length must be between 3 and 20 characters" };
    } else {
      return true;
    }
  }