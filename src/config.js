function resolveConfig() {
    console.info("NODE_ENV: ", process.env.NODE_ENV)

    const config = { apiAddress: "http://localhost:11000/api/v1" };

    return config
}

export default resolveConfig()
