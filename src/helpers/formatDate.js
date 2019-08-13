const getDate = (date) => {
    let created = new Date(date);
    return created.toDateString();
}

export default getDate