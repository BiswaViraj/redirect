const redirectApp = (url) => {
  window.location.replace(url);
};
const getRedirectUrl = async (shortUrl) => {
  try {
    const res = await fetch(`http://localhost:8000/redirect${shortUrl}`);

    const data = await res.json();
    if (data.url) {
      console.log({
        data,
      });
      redirectApp(data.url);
    }
  } catch (error) {
    console.error(error);
  }
};

const getUrl = async () => {
  const { pathname } = window.location;
  console.log(pathname);

  if (pathname === "/") {
    redirectApp("https://app.miny.com");
  }
  const redirectUrl = await getRedirectUrl(pathname);
  console.log(redirectUrl);
};

getUrl();
