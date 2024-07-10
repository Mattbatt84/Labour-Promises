document.addEventListener('DOMContentLoaded', () => {
    const dates = [
        new Date('2024-07-04'),
        new Date('2024-07-04'),
        new Date('2024-07-04'),
        new Date('2024-07-04'),
        new Date('2024-07-04')
    ];

    dates.forEach((date, index) => {
        const daysSince = calculateDaysSince(date);
        document.getElementById(`days-since-${index + 1}`).textContent = `${daysSince} days`;
    });
});

function calculateDaysSince(date) {
    const today = new Date();
    const timeDiff = today - date;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}