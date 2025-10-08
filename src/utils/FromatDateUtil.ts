class FormatDateUtil {
    static formatDate(dateString: Date) {
        const dayName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const day = dayName[dateString.getDay()];
        const month = monthName[dateString.getMonth()];
        const year = dateString.getFullYear();
        const date = dateString.getDate();
        return `${day}, ${month} ${date}, ${year}`;
    }
    static formatDateInput(dateString: string) {
        if (dateString != undefined) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('en-IN', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(date);
        }
        return '';
    }
}
export default FormatDateUtil;