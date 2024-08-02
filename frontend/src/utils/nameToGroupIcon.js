export const generateGroupIcon = (name) => {
    if (!name) return '';

    const words = name.split(' ').filter(word => word.length > 0);
    let textLogo = '';

    if (words.length === 1) {
        textLogo = words[0][0].toUpperCase();
    } else if (words.length >= 2) {
        textLogo = words[0][0].toUpperCase() + words[1][0].toUpperCase();
    }

    return textLogo;
}