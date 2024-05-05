interface ServerResponse<T> {
    data: T[] | { [key: string]: any } | null;
    message: String,
    statusCode: Number
}

export default ServerResponse