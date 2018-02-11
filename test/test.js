const expect = require('chai').expect;

const obfooscator = require('../obfooscator.js');

describe("Usage", () => {
  it("requires an email", () => {
    expect(obfooscator()).to.equal("");
  });

  it("returns an obfuscated e-mail if given a proper email string", () => {
    expect(obfooscator("sample_email123@gmail.com")).to.include("&#64;");
  });
});

