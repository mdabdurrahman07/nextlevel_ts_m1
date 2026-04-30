//* Nullable types

const getUser = (input: string | null) => {
  if (input) {
    console.log(`from db: ${input}`);
  } else {
    console.log("from db: All user");
  }
};

getUser(null);

//* Unknown

const productDiscountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const splittedInput = input.split(" ");
    const discount = Number(splittedInput[0]) * 0.1;
    console.log(discount);
  } else {
    console.log("Wrong Input");
  }
};

productDiscountCalculator(100);
productDiscountCalculator("100 TK");
productDiscountCalculator(null);
