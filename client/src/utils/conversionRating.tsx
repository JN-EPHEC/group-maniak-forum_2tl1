export const getStars = (value: number) => {
    const rating = value / 2; // convertit 1-10 en 0.5-5
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push('full');
        } else if (rating >= i - 0.5) {
            stars.push('half');
        } else {
            stars.push('empty');
        }
    }
    return stars;
};
