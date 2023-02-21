// implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

const parseEnv = () => {
    const prefix = "RSS_";
    const rssEnvs = Object.entries(process.env).filter((el) => el[0].startsWith(prefix));
    console.log(rssEnvs.map(([key, value]) => `${key}=${value}`).join('; '));
};

parseEnv();