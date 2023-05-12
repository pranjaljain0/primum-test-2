// const sum = require('./sum');
import { handleEmailValidation, handleNextStep, handlePrevStep } from "../helpers/helper"

test('Test email validation function', () => {
    expect(handleEmailValidation("pranjaljain0697@gmail.com", {})).toBe(true);
    expect(handleEmailValidation("pranjaljain0697", {})).toBe(false);
});

test('Test previous step', () => {
    handlePrevStep(() => { })
})

test('Test next step', () => {
    handleNextStep(() => { })
})