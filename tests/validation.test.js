
/* Unit tests for validateEmail written based on RFC-1034, RFC-1035, RFC-2821, RFC-2822 and RFC-3696.*/

import {
    validateEmail,
    // isRunningInNodeJS,
    // validateCPF,
    // validateCNPJ,
    // undefinedOrNull,
    // validateField,
    // validateDateFormat,
    // validateStringLength,
    // calcDvMod11,
    // calcDvMod11Sub11,
    // calcDvAgencia,
    // calcDvConta,
    // calcDvMod10,
    // cleanUndefinedMembers,
} from '../src/tools';


test('Validate that email string is not empty.', () => {
    expect(validateEmail('')).toBe(false);
});

test('Validate local-part between 1 - 64 characters', () => {
    // local-part exceeds 64 characters
    expect(validateEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com")).toBe(false);

    // local-part has 64 characters.
    expect(validateEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com")).toBe(true);

    // empty local-part
    expect(validateEmail("@asd.asd")).toBe(false);

    // local-part exists.
    expect(validateEmail("a@aaa.com")).toBe(true);
});

test('Validate domain-name between 1 - 253 characters', () => {
    // domain-name exists.
    expect(validateEmail("aaa.aaa@a")).toBe(true);

    // empty domain-name
    expect(validateEmail("aaa.aaa@")).toBe(false);

    // domain-name exceeds 253 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaa")).toBe(false);

    // domain-name has 253 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaa")).toBe(true);
});

test('Validate domain-name label between 1 - 63 characters', () => {
    // domain-name label exceeds 63 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaa")).toBe(false);

    // domain-name label has 63 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaa")).toBe(true);
});

// TODO: Check this rule.
// test('domain name has no numbers in the first field', () => {
//     expect(validateEmail("potato@potat1o.com")).toBe(false);
// });

test('Validate "@" symbol', () => {
    expect(validateEmail("asd9834asf.frd")).toBe(false);
    expect(validateEmail("asd9834asf.frd23potato.com")).toBe(false);
    expect(validateEmail("potato@@potato.com")).toBe(false);
    expect(validateEmail("pot.ato@\\@potato.com")).toBe(false);
});


test('Validate no hyphens at the start or end of domain-name or local-part', () => {
    // hyphen at end of local-part
    expect(validateEmail("potatopotato-@xyz.com")).toBe(false);

    // hyphen at start of local-part
    expect(validateEmail("-potatopotato@xyz.com")).toBe(false);

    // hyphen at the start
    expect(validateEmail("-potatopotato@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@-potatocom")).toBe(false);

    // hyphen  at the end
    expect(validateEmail("potatopotato-@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@potato.com-")).toBe(false);
    expect(validateEmail("potatopotato@potatocom-")).toBe(false);
});

test('Validate no successive hyphens.', () => {
    // successive hyphens
    expect(validateEmail("potatopotato--@xyz.com")).toBe(false);
    expect(validateEmail("--potatopotato@xyz.com")).toBe(false);
    expect(validateEmail("potato--potato@xyz.com")).toBe(false);
});



test('Validate no dots at the start or end of domain-name or local-part', () => {
    // dot at the start
    expect(validateEmail(".potatopotato@potato.com")).toBe(false);
    expect(validateEmail(".potato.potato@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@.potatocom")).toBe(false);
    expect(validateEmail("potatopotato@.potato.com")).toBe(false);

    // dot at the end
    expect(validateEmail("potatopotato.@potato.com")).toBe(false);
    expect(validateEmail("potato.potato.@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@potato.com.")).toBe(false);
    expect(validateEmail("potatopotato@potatocom.")).toBe(false);

    // dot-only fields
    expect(validateEmail(".@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@.")).toBe(false);
});

test('Validate no successive dots', () => {
    expect(validateEmail("potato..potato@potato.com")).toBe(false);
    expect(validateEmail("potato.potato@potato..com")).toBe(false);
});

test('Validate no tabs, spaces, linefeeds or carriage-returns. (at start, mid or end of string)', () => {
    // space
    expect(validateEmail("potato .potato@potato.com")).toBe(false);
    expect(validateEmail("potato.potato@potato.com ")).toBe(false);
    expect(validateEmail(" potato.potato@potato.com")).toBe(false);

    // tab
    expect(validateEmail("potato.\tpotato@potato.com")).toBe(false);
    expect(validateEmail("potato.potato@potato.com\t")).toBe(false);
    expect(validateEmail("\tpotato.potato@potato.com")).toBe(false);

    // line feed
    expect(validateEmail("potato.\npotato@potato.com")).toBe(false);
    expect(validateEmail("potato.potato@potato.com\n")).toBe(false);
    expect(validateEmail("\npotato.potato@potato.com")).toBe(false);

    // carriage return
    expect(validateEmail("potato.\rpotato@potato.com")).toBe(false);
    expect(validateEmail("potato.potato@potato.com\n")).toBe(false);
    expect(validateEmail("\npotato.potato@potato.com")).toBe(false);
});

test('Validate allowing of charset { !#$%&\'*+-/=?^_`\\{\\}|~ }', () => {
    // accepts the character "!"
    expect(validateEmail("potato!potato@xyz.com")).toBe(true);

    // accepts the character "#"
    expect(validateEmail("potato#potato@xyz.com")).toBe(true);

    // accepts the character "$"
    expect(validateEmail("potato$potato@xyz.com")).toBe(true);

    // accepts the character "%"
    expect(validateEmail("potato%potato@xyz.com")).toBe(true);

    // accepts the character "&"
    expect(validateEmail("potato&potato@xyz.com")).toBe(true);

    // accepts the character "'"
    expect(validateEmail("potato'potato@xyz.com")).toBe(true);

    // accepts the character "*"
    expect(validateEmail("potato*potato@xyz.com")).toBe(true);

    // accepts the character "+"
    expect(validateEmail("potato+potato@xyz.com")).toBe(true);

    // accepts the character "-"
    expect(validateEmail("potato-potato@xyz.com")).toBe(true);

    // accepts the character "/"
    expect(validateEmail("potato/potato@xyz.com")).toBe(true);

    // accepts the character "="
    expect(validateEmail("potato=potato@xyz.com")).toBe(true);

    // accepts the character "?"
    expect(validateEmail("potato?potato@xyz.com")).toBe(true);

    // accepts the character "^"
    expect(validateEmail("potato^potato@xyz.com")).toBe(true);

    // accepts the character "_"
    expect(validateEmail("potato_potato@xyz.com")).toBe(true);

    // accepts the character "`"
    expect(validateEmail("potato`potato@xyz.com")).toBe(true);

    // accepts the character "{"
    expect(validateEmail("potato{potato@xyz.com")).toBe(true);

    // accepts the character "}"
    expect(validateEmail("potato}potato@xyz.com")).toBe(true);

    // accepts the character "|"
    expect(validateEmail("potato|potato@xyz.com")).toBe(true);

    // accepts the character "~"
    expect(validateEmail("potato~potato@xyz.com")).toBe(true);
});

test('Validate domain name is an IP add', () => {
    expect(validateEmail("potato@potato.127.0.0.1")).toBe(true);
    expect(validateEmail("potato@potato.192.168.1.193")).toBe(true);
});

test('Positive examples', () => {
    expect(validateEmail("p1234567890@gmail.com")).toBe(true);
    expect(validateEmail("potato-6@tutanota.com")).toBe(true);
    expect(validateEmail("potato@contaquanto.com")).toBe(true);
    expect(validateEmail("potato@potato.com")).toBe(true);
    expect(validateEmail("potato.potato@potato.potato")).toBe(true);
    expect(validateEmail("potato.potato@potato.com")).toBe(true);
    expect(validateEmail("p-o-t-a-to.po-t-ato@potato.potato")).toBe(true);
    expect(validateEmail("p-o-t-a-t-opota-to@xyz.com")).toBe(true);
    expect(validateEmail("pot.ato.pot-ato@potato.potato")).toBe(true);
    expect(validateEmail("pot.at.o@pot.ato.com")).toBe(true);
});
