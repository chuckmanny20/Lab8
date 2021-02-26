const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath', () => {

    test('value from 67-100', () => {
        expect(formatVolumeIconPath(92)).toContain('3');
    });

    test('value from 34-66', () => {
        expect(formatVolumeIconPath(54)).toContain('2');
    });

    test('value from 1-33', () => {
        expect(formatVolumeIconPath(27)).toContain('1');
    });

    test('value 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});