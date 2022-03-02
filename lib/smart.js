/* Function to remove smart qoutes from data, typically data that is inputed by a user */
const acceptedQoutes = {
    'single': `'`,
    'sngl': `'`,
    's': `'`,
    'double': `"`,
    'dbl': `"`,
    'd': `"`,
    'backtick': '`',
    'bt': '`',
    'b': '`',
    'remove': '',
    'rmv': '',
    'r': ''
};
function smart (input, preffered_qoutes) {
    if (typeof input === 'object') {
        return handleNoneString(input, preffered_qoutes);
    }
    let qoutes = acceptedQoutes[preffered_qoutes] ?? '"';
    return input.replace( /[“”‘’'']/g, qoutes );

};

function handleNoneString (not_str_data, preffered_qoutes) {
    const idx = smart(JSON.stringify(not_str_data), preffered_qoutes);
    return JSON.parse(idx);
};

module.exports = smart;