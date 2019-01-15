
import {
  isRunningInNodeJS,
  validateEmail,
  validateCPF,
  validateCNPJ,
  undefinedOrNull,
  validateField,
  validateDateFormat,
  validateStringLength,
  calcDvMod11,
  calcDvMod11Sub11,
  calcDvAgencia,
  calcDvConta,
  calcDvMod10,
  cleanUndefinedMembers,
} from '../src/tools';

test('Validate that email string is not empty.', () => {
    expect(validateEmail('')).toBe(false);
});

test('Validate domain name and local-part lengths', () => {
	// local-part exceeds 64 characters
    expect(validateEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com")).toBe(false);
    // local-part has 64 characters.
    expect(validateEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@aaa.com")).toBe(true);
    expect(validateEmail("@asd.asd")).toBe(false); // empty local-part
    expect(validateEmail("a@aaa.com")).toBe(true); // local-part exists.

    // domain-name label exceeds 63 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaa")).toBe(false);
    // domain-name label has 63 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaa")).toBe(true);
    // domain-name exceeds 253 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaa")).toBe(false);
    // domain-name has 253 characters
    expect(validateEmail("aaa@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.aaaaaaaaa")).toBe(true);
    expect(validateEmail("aaa.aaa@a")).toBe(true); // domain-name exists.
    expect(validateEmail("aaa.aaa@")).toBe(false); // empty domain-name
});

test('Validate "@" symbol', () => {
    expect(validateEmail("asd9834asf.frd")).toBe(false);
    expect(validateEmail("asd9834asf.frd23potato.com")).toBe(false);
    expect(validateEmail("potato@@potato.com")).toBe(false);
    expect(validateEmail("pot.ato@\\@potato.com")).toBe(false);
});

test('Validate hyphens', () => {
    expect(validateEmail("potatopotato-@xyz.com")).toBe(false); // hyphen at end of local-part
    expect(validateEmail("-potatopotato@xyz.com")).toBe(false); // hyphen at start of local-part

    expect(validateEmail("potatopotato--@xyz.com")).toBe(false); // successive hyphens
    expect(validateEmail("--potatopotato@xyz.com")).toBe(false);
    expect(validateEmail("potato--potato@xyz.com")).toBe(false);

    expect(validateEmail("-potatopotato@potato.com")).toBe(false); // hyphen at the start
    expect(validateEmail("potatopotato@-potatocom")).toBe(false);

    expect(validateEmail("potatopotato-@potato.com")).toBe(false); // hyphen  at the end
    expect(validateEmail("potatopotato@potato.com-")).toBe(false);
    expect(validateEmail("potatopotato@potatocom-")).toBe(false);
});

test('Validate dots', () => {
    expect(validateEmail("potato..potato@potato.com")).toBe(false); // successive dots
    expect(validateEmail("potato.potato@potato..com")).toBe(false);

    expect(validateEmail(".potatopotato@potato.com")).toBe(false); // dot at the start
    expect(validateEmail(".potato.potato@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@.potatocom")).toBe(false);
    expect(validateEmail("potatopotato@.potato.com")).toBe(false);

    expect(validateEmail("potatopotato.@potato.com")).toBe(false); // dot at the end
    expect(validateEmail("potato.potato.@potato.com")).toBe(false);
    expect(validateEmail("potatopotato@potato.com.")).toBe(false);
    expect(validateEmail("potatopotato@potatocom.")).toBe(false);

    expect(validateEmail(".@potato.com")).toBe(false); // dot-only fields
    expect(validateEmail("potatopotato@.")).toBe(false);
});

test('Validate charset', () => {
    expect(validateEmail("potato .potato@potato.com")).toBe(false); // space
    expect(validateEmail("potato.potato@potato.com ")).toBe(false);
    expect(validateEmail(" potato.potato@potato.com")).toBe(false);
    expect(validateEmail("potato.\tpotato@potato.com")).toBe(false); // tab
    expect(validateEmail("potato.potato@potato.com\t")).toBe(false);
    expect(validateEmail("\tpotato.potato@potato.com")).toBe(false);
    expect(validateEmail("potato.\npotato@potato.com")).toBe(false); // line feed
    expect(validateEmail("potato.potato@potato.com\n")).toBe(false);
    expect(validateEmail("\npotato.potato@potato.com")).toBe(false);
    expect(validateEmail("potato.\rpotato@potato.com")).toBe(false); // carriage return
    expect(validateEmail("potato.potato@potato.com\n")).toBe(false);
    expect(validateEmail("\npotato.potato@potato.com")).toBe(false);

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

test('Validate specific rules', () => {
    expect(validateEmail("potato@potat1o.com")).toBe(false); // domain name is not alphabetic in the first field
    expect(validateEmail("potato@potato.127.0.0.1")).toBe(true); // domain name is an IP add.
    expect(validateEmail("potato@potato.192.168.1.193")).toBe(true);
});

test('Validate positives', () => {
    expect(validateEmail("potato@potato.com")).toBe(true);
    expect(validateEmail("potato.potato@potato.potato")).toBe(true);
    expect(validateEmail("potato.potato@potato.com")).toBe(true);
    expect(validateEmail("p-o-t-a-to.po-t-ato@potato.potato")).toBe(true);
    expect(validateEmail("p-o-t-a-t-opota-to@xyz.com")).toBe(true);
    expect(validateEmail("pot.ato.pot-ato@potato.potato")).toBe(true);
    expect(validateEmail("pot.at.o@pot.ato.com")).toBe(true);
});

// RFC-1034, RFC-1035, RFC-2821, RFC-2822, RFC-3696

