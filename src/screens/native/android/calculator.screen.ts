class CalculatorScreen {
    number: (number: any) => string;
    add: string;
    equal: string;
    result: string;
    clear: string;
    constructor() {
        this.number = number => `//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_0${number}"]`;
        this.add = '//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_add"]';
        this.equal = '//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_equal"]';
        this.result = '//*[@resource-id="com.sec.android.app.popupcalculator:id/txtCalc" or @resource-id="com.sec.android.app.popupcalculator:id/calc_edt"]';
        this.clear = '//*[@resource-id="com.sec.android.app.popupcalculator:id/bt_clear"]';
    }
}

export const Screen = CalculatorScreen;