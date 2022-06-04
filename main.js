/* 
Trong javascript co 6 gia tri sau duoc coi la Falsy
1. false
2. 0
3. '' or ""( chuoi rong)
4. null
5. undefined
6. NaN*/

/**
 * Ngoai 6 gia  tri da de cap o phan falsy thi toan bo cac gia tri khác đều là Truthy , kể cả những giá trị sau:
 * 1. '0'
 * 2. ' '
 * 3. 'false'
 * 4. []
 * 5. {}
 * 6. function( ) {}
 */

/**
 * DOCUMENT.ALL la mot ngoai le duy nhat  theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ
 * Cụ thể như sau:
 * 1. Document.all chuyển sang boolean sẽ là false
 * 2. document.all khi là toán hạng của toán tử so sanh == hoặc !== sẽ là undefined
 * 3. Khi typeof document.all sẽ trả về "undefined"
 */
