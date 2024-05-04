exports.handler = async function (event, context) {
  const url = "https://thevietnamexperience.netlify.app" + event.rawPath;

  try {
    const response = await fetch(url); // Using fetch API for HTTP request
    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
      headers: {
        "Content-Type": "text/html",
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
