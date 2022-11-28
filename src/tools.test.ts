import { expect } from '@jest/globals';
import { surround } from './tools';

test('test that surround() is correctly implemented', () => {
	expect(surround('test', '[]')).toBe('[test]');
	expect(surround('привет', '[]')).toBe('[привет]');
	expect(surround('test', '()')).toBe('(test)');
	expect(surround('', '()')).toBe('()');
	expect(surround('', '')).toBe('');
	expect(surround('test', 'ksjifwjfsk')).toBe('test'); // fail gracefully
	expect(surround('test', '')).toBe('test'); // fail gracefully
	expect(surround('Etiam pretium sem lorem, id eleifend est faucibus nec. Cras pulvinar ligula at neque elementum tempor. Nam faucibus odio lorem, sit amet vehicula urna laoreet commodo. Nulla iaculis, nibh ac porta varius, dui felis maximus dui, eget feugiat lacus sapien malesuada massa. Proin consequat vehicula arcu quis vestibulum. Maecenas ac diam quis velit maximus tempus. Donec vulputate justo justo, sed egestas nulla malesuada quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque metus non elit vulputate luctus. Sed consectetur id sapien sit amet suscipit. Suspendisse vel risus volutpat, hendrerit nisi sagittis, ultricies leo. Phasellus vitae porta risus.', '()')).toBe('(Etiam pretium sem lorem, id eleifend est faucibus nec. Cras pulvinar ligula at neque elementum tempor. Nam faucibus odio lorem, sit amet vehicula urna laoreet commodo. Nulla iaculis, nibh ac porta varius, dui felis maximus dui, eget feugiat lacus sapien malesuada massa. Proin consequat vehicula arcu quis vestibulum. Maecenas ac diam quis velit maximus tempus. Donec vulputate justo justo, sed egestas nulla malesuada quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque metus non elit vulputate luctus. Sed consectetur id sapien sit amet suscipit. Suspendisse vel risus volutpat, hendrerit nisi sagittis, ultricies leo. Phasellus vitae porta risus.)');
});
