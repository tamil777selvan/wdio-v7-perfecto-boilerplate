class CalculatorScreen {
    number: (number: any) => string;
    add: string;
    equal: string;
    result: string;
    clear: string;
    constructor() {
        this.number = number => `//*[@label="${number}"]`;
        this.add = '//*[@label="add"]';
        this.equal = '//*[@label="equals"]';
        this.result = '//*[@label="Result"]';
        this.clear = '//*[@label="all clear" or @label="clear"]';
    }
}

export const Screen = CalculatorScreen;