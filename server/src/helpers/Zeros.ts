/**
 * Fungsi untuk membuat aray dengan isi 0 dengan dimensi yang ditentukan
 * @param dimensions dimensi dari array yang diisi 0
 */
export function zeros(dimensions: any) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}