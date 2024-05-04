exports.handler = async function (event, context) {
  const url = "https://thevietnamexperience.netlify.app" + event.rawPath;
  const response = await fetch(url);
  const data = await response.text();

  return {
    statusCode: 200,
    body: data,
    headers: {
      "Content-Type": "text/html",
    },
  };
};
