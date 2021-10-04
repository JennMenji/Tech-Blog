module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  // return the word with or without "s" on the end, depending on the second argument passed in
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },

  // to visually shorten the URLs on the front end
  format_url: (url) => {
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
};
