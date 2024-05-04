exports.handler = async function (event, context) {
  const url = "https://thevietnamexperience.netlify.app" + event.rawPath;

  try {
    // Use Gridsome's built-in fetch method to make HTTP requests
    const response = await context.fetch(url);
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
