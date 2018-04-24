const t9 = require("../phonewords/t9converter");
const realWords = require("../phonewords/realWords");

const httpMocks = require("node-mocks-http");
const pwController = require("../phonewords/PhonewordsController");

const app = require("../index");

describe('t9 generator', () => {

    it('gets the right letter combinations from specific input', () => {
        expect(t9([2, 3])).toContain("ad");
        expect(t9("65")).toContain("ok");
    });

    it('generates the specific amount of combinations', () => {
        const result = t9("46");
        expect(result).toHaveLength(Math.pow(3,2));
    });

    it('returns an empty array when numbers have no letters assigned', () => {
        const result = t9("01");
        expect(result).toHaveLength(0);
    });

    it('returns an empty array when the input is empty', () => {
        const result = t9("");
        expect(result).toHaveLength(0);
    });
});

describe('real words checker', () => {
    it('allows existing word', () => {
        const result = realWords("hello")
        expect(result).toBeTruthy()
    });

    it('declines non-existing word', () => {
        const result = realWords("whatevernonexistingandreallylong")
        expect(result).toBeFalsy()
    });
});

describe('/GET phonewords', () => {
    it("the response should include the word 'kiwi' when the input is 5494", done => {
        const mockRequest = httpMocks.createRequest({
          method: "GET",
          url: "/5494"
        });
        const mockResponse = httpMocks.createResponse();
        pwController(mockRequest, mockResponse);
        const actualResponseBody = mockResponse._getData();
        expect(actualResponseBody).toContain("kiwi");
        done()
      });
});