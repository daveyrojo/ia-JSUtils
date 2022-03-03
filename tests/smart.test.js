import {smart} from '../lib/smart';
import {jest} from '@jest/globals';

describe('remove smart qoutes', () => {
    const smartQoutes = '\u2018\u2019\u201c\u201d';
    it("remove smart qoutes and make them DOUBLE qoutes", () => {
        expect(smart(smartQoutes, 'double')).toEqual(`""""`);
    });
    it("remove smart qoutes and make them BACKTICK qoutes", () => {
        expect(smart(smartQoutes, 'backtick')).toEqual('````');
    });
    it("remove smart qoutes and them SINGLE qoutes", () => {
        expect(smart(smartQoutes, 'single')).toEqual(`''''`);
    });
    it("remove smart qoutes and make them DOUBLE --- WITHOUT SENDING A SECOND ARG", () => {
        expect(smart(smartQoutes, null)).toEqual('""""');
    });
    it("remove smat qoutes and ensure the return value is not equal to the sending value", () => {
        expect(smart(smartQoutes, 'double')).not.toEqual('\u2018\u2019\u201c\u201d');
    });
});